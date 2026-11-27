import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { buildScenery } from './scenery';

describe('mountain horizon geometry', () => {
  it('adds a solid wall that occludes the ground behind the ridge', () => {
    const scene = new THREE.Scene();
    buildScenery(scene);
    const wall = scene.children.find((o) =>
      o instanceof THREE.Mesh && (o as THREE.Mesh).material instanceof THREE.MeshBasicMaterial,
    ) as THREE.Mesh;
    expect(wall).toBeTruthy();
    expect(wall.geometry.attributes.position.count).toBe(256 * 6);
    wall.geometry.computeBoundingBox();
    expect(wall.geometry.boundingBox!.min.y).toBeLessThanOrEqual(0);
    expect((wall.material as THREE.MeshBasicMaterial).side).toBe(THREE.DoubleSide);
    expect((wall.material as THREE.MeshBasicMaterial).fog).toBe(false);

    scene.updateMatrixWorld(true);
    const ray = new THREE.Raycaster(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), 0, 1000);
    const hits = ray.intersectObject(wall);
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].distance).toBeGreaterThan(619);
    expect(hits[0].distance).toBeLessThan(621);
  });
});
