/**
 * Post chain (PLAN §4.3): RenderPass → UnrealBloomPass → CRT ShaderPass.
 * The CRT pass is the project's first GLSL fragment shader — kept small and
 * commented on purpose. Phosphor persistence is a feedback loop: after each
 * frame the screen is copied into a FramebufferTexture that the next frame
 * mixes in (max-blend = afterglow). Safe mode zeroes persistence/flicker/roll.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

export const CRTShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    tPrev: { value: null as THREE.Texture | null },
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
    uScan: { value: 0.2 },
    uVignette: { value: 0.4 },
    uBarrel: { value: 0.04 },
    uPersist: { value: 0.4 },
    uRoll: { value: 0.08 },
    uSafe: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform sampler2D tPrev;
    uniform float uTime, uScan, uVignette, uBarrel, uPersist, uRoll, uSafe;
    uniform vec2 uRes;

    void main() {
      // subtle barrel distortion: push pixels outward with radius^2
      vec2 c = vUv - 0.5;
      vec2 uv = 0.5 + c * (1.0 + uBarrel * dot(c, c));
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
      }

      vec3 col = texture2D(tDiffuse, uv).rgb;
      // phosphor afterglow: keep the brighter of now and decaying previous frame
      col = max(col, texture2D(tPrev, uv).rgb * uPersist);

      // scanlines: one dark row per two pixel rows
      float lines = 0.5 + 0.5 * sin(uv.y * uRes.y * 3.14159);
      col *= 1.0 - uScan * lines;

      // slow rolling bright band (CRT refresh), disabled in safe mode
      float roll = 0.5 + 0.5 * sin(uv.y * 6.2831 - uTime * 1.3);
      col *= 1.0 - uRoll * roll * 0.5;

      // vignette: darken toward the tube's corners
      float vig = smoothstep(0.85, 0.25, length(c) * 1.35);
      col *= mix(1.0, vig, uVignette);

      // mains flicker (~57 Hz beat), disabled in safe mode
      col *= 1.0 - (1.0 - uSafe) * 0.03 * (0.5 + 0.5 * sin(uTime * 57.0));

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export interface Post {
  composer: EffectComposer;
  bloom: UnrealBloomPass;
  crt: ShaderPass;
  render(time: number): void;
  resize(w: number, h: number): void;
}

export function createPost(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
): Post {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  // LDR byte target: keeps readback (verification probes) simple and cheap
  const target = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.UnsignedByteType });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.9, 0.5, 0.0);
  composer.addPass(bloom);
  const crt = new ShaderPass(CRTShader);
  crt.uniforms.uRes.value.set(size.x, size.y);
  composer.addPass(crt);

  let prev = new THREE.FramebufferTexture(size.x, size.y);
  crt.uniforms.tPrev.value = prev;

  return {
    composer,
    bloom,
    crt,
    render(time: number) {
      crt.uniforms.uTime.value = time;
      composer.render();
      // feedback: capture the finished frame for next frame's afterglow
      renderer.copyFramebufferToTexture(prev);
    },
    resize(w: number, h: number) {
      composer.setSize(w, h);
      const s = renderer.getDrawingBufferSize(new THREE.Vector2());
      crt.uniforms.uRes.value.set(s.x, s.y);
      prev.dispose();
      prev = new THREE.FramebufferTexture(s.x, s.y);
      crt.uniforms.tPrev.value = prev;
    },
  };
}