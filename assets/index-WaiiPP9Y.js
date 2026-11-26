(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Da="180",ih=0,al=1,rh=2,Dc=1,sh=2,Pn=3,Jn=0,Oe=1,cn=2,Un=0,Oi=1,xs=2,ll=3,cl=4,oh=5,hi=100,ah=101,lh=102,ch=103,uh=104,hh=200,fh=201,dh=202,ph=203,Ho=204,Lo=205,mh=206,gh=207,_h=208,vh=209,xh=210,Sh=211,Mh=212,Eh=213,yh=214,Uo=0,Io=1,No=2,ki=3,Fo=4,Oo=5,zo=6,Bo=7,Hc=0,Th=1,bh=2,$n=0,Ah=1,wh=2,Rh=3,Ch=4,Ph=5,Dh=6,Hh=7,Lc=300,Gi=301,Vi=302,ko=303,Go=304,Ls=306,Vo=1e3,pi=1001,Wo=1002,qe=1003,Lh=1004,yr=1005,Mn=1006,Bs=1007,mi=1008,pn=1009,Uc=1010,Ic=1011,hr=1012,Ha=1013,_i=1014,Hn=1015,In=1016,La=1017,Ua=1018,fr=1020,Nc=35902,Fc=35899,Oc=1021,zc=1022,fn=1023,dr=1026,pr=1027,Bc=1028,Ia=1029,kc=1030,Na=1031,Fa=1033,ls=33776,cs=33777,us=33778,hs=33779,Xo=35840,Yo=35841,qo=35842,Ko=35843,$o=36196,Zo=37492,jo=37496,Jo=37808,Qo=37809,ta=37810,ea=37811,na=37812,ia=37813,ra=37814,sa=37815,oa=37816,aa=37817,la=37818,ca=37819,ua=37820,ha=37821,fa=36492,da=36494,pa=36495,ma=36283,ga=36284,_a=36285,va=36286,Uh=3200,Ih=3201,Nh=0,Fh=1,qn="",en="srgb",Wi="srgb-linear",Ss="linear",jt="srgb",xi=7680,ul=519,Oh=512,zh=513,Bh=514,Gc=515,kh=516,Gh=517,Vh=518,Wh=519,xa=35044,hl=35048,fl="300 es",En=2e3,Ms=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dl=1234567;const lr=Math.PI/180,mr=180/Math.PI;function Nn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Nt(n,t,e){return Math.max(t,Math.min(e,n))}function Oa(n,t){return(n%t+t)%t}function Xh(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Yh(n,t,e){return n!==t?(e-n)/(t-n):0}function cr(n,t,e){return(1-e)*n+e*t}function qh(n,t,e,i){return cr(n,t,1-Math.exp(-e*i))}function Kh(n,t=1){return t-Math.abs(Oa(n,t*2)-t)}function $h(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Zh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function jh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Jh(n,t){return n+Math.random()*(t-n)}function Qh(n){return n*(.5-Math.random())}function tf(n){n!==void 0&&(dl=n);let t=dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ef(n){return n*lr}function nf(n){return n*mr}function rf(n){return(n&n-1)===0&&n!==0}function sf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function of(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function af(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),u=s((t+i)/2),h=a((t+i)/2),f=s((t-i)/2),l=a((t-i)/2),d=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*f,c*l,o*u);break;case"YZY":n.set(c*l,o*h,c*f,o*u);break;case"ZXZ":n.set(c*f,c*l,o*h,o*u);break;case"XZX":n.set(o*h,c*g,c*d,o*u);break;case"YXY":n.set(c*d,o*h,c*g,o*u);break;case"ZYZ":n.set(c*g,c*d,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lf={DEG2RAD:lr,RAD2DEG:mr,generateUUID:Nn,clamp:Nt,euclideanModulo:Oa,mapLinear:Xh,inverseLerp:Yh,lerp:cr,damp:qh,pingpong:Kh,smoothstep:$h,smootherstep:Zh,randInt:jh,randFloat:Jh,randFloatSpread:Qh,seededRandom:tf,degToRad:ef,radToDeg:nf,isPowerOfTwo:rf,ceilPowerOfTwo:sf,floorPowerOfTwo:of,setQuaternionFromProperEuler:af,normalize:$t,denormalize:un};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Nt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $i{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const l=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=l,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==l||u!==d||h!==g){let m=1-o;const p=c*l+u*d+h*g+f*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,p*b);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const S=o*b;if(c=c*m+l*S,u=u*m+d*S,h=h*m+g*S,f=f*m+_*S,m===1-o){const R=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=R,u*=R,h*=R,f*=R}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a],l=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*d-u*l,t[e+1]=c*g+h*l+u*f-o*d,t[e+2]=u*g+h*d+o*l-c*f,t[e+3]=h*g-o*f-c*l-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),f=o(s/2),l=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=l*h*f+u*d*g,this._y=u*d*f-l*h*g,this._z=u*h*g+l*d*f,this._w=u*h*f-l*d*g;break;case"YXZ":this._x=l*h*f+u*d*g,this._y=u*d*f-l*h*g,this._z=u*h*g-l*d*f,this._w=u*h*f+l*d*g;break;case"ZXY":this._x=l*h*f-u*d*g,this._y=u*d*f+l*h*g,this._z=u*h*g+l*d*f,this._w=u*h*f-l*d*g;break;case"ZYX":this._x=l*h*f-u*d*g,this._y=u*d*f+l*h*g,this._z=u*h*g-l*d*f,this._w=u*h*f+l*d*g;break;case"YZX":this._x=l*h*f+u*d*g,this._y=u*d*f+l*h*g,this._z=u*h*g-l*d*f,this._w=u*h*f-l*d*g;break;case"XZY":this._x=l*h*f-u*d*g,this._y=u*d*f-l*h*g,this._z=u*h*g+l*d*f,this._w=u*h*f+l*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],f=e[10],l=i+o+f;if(l>0){const d=.5/Math.sqrt(l+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-u)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+u)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-u)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+u)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),f=Math.sin((1-e)*h)/u,l=Math.sin(e*h)/u;return this._w=a*f+this._w*l,this._x=i*f+this._x*l,this._y=r*f+this._y*l,this._z=s*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*i),h=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*u+a*f-o*h,this.y=i+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Nt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new H,pl=new $i;class Ot{constructor(t,e,i,r,s,a,o,c,u){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,u)}set(t,e,i,r,s,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],f=i[7],l=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],b=r[1],M=r[4],S=r[7],R=r[2],w=r[5],A=r[8];return s[0]=a*_+o*b+c*R,s[3]=a*m+o*M+c*w,s[6]=a*p+o*S+c*A,s[1]=u*_+h*b+f*R,s[4]=u*m+h*M+f*w,s[7]=u*p+h*S+f*A,s[2]=l*_+d*b+g*R,s[5]=l*m+d*M+g*w,s[8]=l*p+d*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],f=h*a-o*u,l=o*c-h*s,d=u*s-a*c,g=e*f+i*l+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*u-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=l*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(i*c-u*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ot;function Vc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cf(){const n=Es("canvas");return n.style.display="block",n}const ml={};function gr(n){n in ml||(ml[n]=!0,console.warn(n))}function uf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const gl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){const n={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===jt&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?Ss:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wi]:{primaries:t,whitePoint:i,transfer:Ss,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const Yt=hf();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class ff{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Si===void 0&&(Si=Es("canvas")),Si.width=t.width,Si.height=t.height;const r=Si.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Si}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Es("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fn(e[i]/255)*255):e[i]=Fn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let df=0;class za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vs(r[a].image)):s.push(Vs(r[a]))}else s=Vs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pf=0;const Ws=new H;class Le extends Ki{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=pi,r=pi,s=Mn,a=mi,o=fn,c=pn,u=Le.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Nn(),this.name="",this.source=new za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ws).x}get height(){return this.source.getSize(Ws).y}get depth(){return this.source.getSize(Ws).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Lc;Le.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,i=0,r=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,u=c[0],h=c[4],f=c[8],l=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-l)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+l)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,S=(d+1)/2,R=(p+1)/2,w=(h+l)/4,A=(f+_)/4,U=(g+m)/4;return M>S&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=U/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(l-h)*(l-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(l-h)/b,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mf extends Ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Le(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new za(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ke extends mf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wc extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gf extends Le{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),br.subVectors(this.max,Qi),Mi.subVectors(t.a,Qi),Ei.subVectors(t.b,Qi),yi.subVectors(t.c,Qi),Bn.subVectors(Ei,Mi),kn.subVectors(yi,Ei),ni.subVectors(Mi,yi);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ni.z,ni.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ni.z,0,-ni.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ni.y,ni.x,0];return!Xs(e,Mi,Ei,yi,br)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,Mi,Ei,yi,br))?!1:(Ar.crossVectors(Bn,kn),e=[Ar.x,Ar.y,Ar.z],Xs(e,Mi,Ei,yi,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new H,new H,new H,new H,new H,new H,new H,new H],sn=new H,Tr=new Qn,Mi=new H,Ei=new H,yi=new H,Bn=new H,kn=new H,ni=new H,Qi=new H,br=new H,Ar=new H,ii=new H;function Xs(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ii.fromArray(n,s);const o=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),c=t.dot(ii),u=e.dot(ii),h=i.dot(ii);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const _f=new Qn,tr=new H,Ys=new H;class Zi{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_f.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(tr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Ys)),this.expandByPoint(tr.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const bn=new H,qs=new H,wr=new H,Gn=new H,Ks=new H,Rr=new H,$s=new H;class Xc{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){qs.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(qs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(wr),o=Gn.dot(this.direction),c=-Gn.dot(wr),u=Gn.lengthSq(),h=Math.abs(1-a*a);let f,l,d,g;if(h>0)if(f=a*c-o,l=a*o-c,g=s*h,f>=0)if(l>=-g)if(l<=g){const _=1/h;f*=_,l*=_,d=f*(f+a*l+2*o)+l*(a*f+l+2*c)+u}else l=s,f=Math.max(0,-(a*l+o)),d=-f*f+l*(l+2*c)+u;else l=-s,f=Math.max(0,-(a*l+o)),d=-f*f+l*(l+2*c)+u;else l<=-g?(f=Math.max(0,-(-a*s+o)),l=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+l*(l+2*c)+u):l<=g?(f=0,l=Math.min(Math.max(-s,-c),s),d=l*(l+2*c)+u):(f=Math.max(0,-(a*s+o)),l=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+l*(l+2*c)+u);else l=a>0?-s:s,f=Math.max(0,-(a*l+o)),d=-f*f+l*(l+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qs).addScaledVector(wr,l),d}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const i=bn.dot(this.direction),r=bn.dot(bn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,l=this.origin;return u>=0?(i=(t.min.x-l.x)*u,r=(t.max.x-l.x)*u):(i=(t.max.x-l.x)*u,r=(t.min.x-l.x)*u),h>=0?(s=(t.min.y-l.y)*h,a=(t.max.y-l.y)*h):(s=(t.max.y-l.y)*h,a=(t.min.y-l.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(o=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,i,r,s){Ks.subVectors(e,t),Rr.subVectors(i,t),$s.crossVectors(Ks,Rr);let a=this.direction.dot($s),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const c=o*this.direction.dot(Rr.crossVectors(Gn,Rr));if(c<0)return null;const u=o*this.direction.dot(Ks.cross(Gn));if(u<0||c+u>a)return null;const h=-o*Gn.dot($s);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,a,o,c,u,h,f,l,d,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,u,h,f,l,d,g,_,m)}set(t,e,i,r,s,a,o,c,u,h,f,l,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=h,p[10]=f,p[14]=l,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const l=a*h,d=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=u,e[1]=d+g*u,e[5]=l-_*u,e[9]=-o*c,e[2]=_-l*u,e[6]=g+d*u,e[10]=a*c}else if(t.order==="YXZ"){const l=c*h,d=c*f,g=u*h,_=u*f;e[0]=l+_*o,e[4]=g*o-d,e[8]=a*u,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+l*o,e[10]=a*c}else if(t.order==="ZXY"){const l=c*h,d=c*f,g=u*h,_=u*f;e[0]=l-_*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-l*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const l=a*h,d=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=g*u-d,e[8]=l*u+_,e[1]=c*f,e[5]=_*u+l,e[9]=d*u-g,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,d=a*u,g=o*c,_=o*u;e[0]=c*h,e[4]=_-l*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=d*f+g,e[10]=l-_*f}else if(t.order==="XZY"){const l=a*c,d=a*u,g=o*c,_=o*u;e[0]=c*h,e[4]=-f,e[8]=u*h,e[1]=l*f+_,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=_*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vf,t,xf)}lookAt(t,e,i){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Vn.crossVectors(i,Ve),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Vn.crossVectors(i,Ve)),Vn.normalize(),Cr.crossVectors(Ve,Vn),r[0]=Vn.x,r[4]=Cr.x,r[8]=Ve.x,r[1]=Vn.y,r[5]=Cr.y,r[9]=Ve.y,r[2]=Vn.z,r[6]=Cr.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],f=i[5],l=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],M=i[7],S=i[11],R=i[15],w=r[0],A=r[4],U=r[8],y=r[12],E=r[1],D=r[5],O=r[9],G=r[13],K=r[2],W=r[6],Y=r[10],Z=r[14],B=r[3],st=r[7],ut=r[11],Tt=r[15];return s[0]=a*w+o*E+c*K+u*B,s[4]=a*A+o*D+c*W+u*st,s[8]=a*U+o*O+c*Y+u*ut,s[12]=a*y+o*G+c*Z+u*Tt,s[1]=h*w+f*E+l*K+d*B,s[5]=h*A+f*D+l*W+d*st,s[9]=h*U+f*O+l*Y+d*ut,s[13]=h*y+f*G+l*Z+d*Tt,s[2]=g*w+_*E+m*K+p*B,s[6]=g*A+_*D+m*W+p*st,s[10]=g*U+_*O+m*Y+p*ut,s[14]=g*y+_*G+m*Z+p*Tt,s[3]=b*w+M*E+S*K+R*B,s[7]=b*A+M*D+S*W+R*st,s[11]=b*U+M*O+S*Y+R*ut,s[15]=b*y+M*G+S*Z+R*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],f=t[6],l=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*f-r*u*f-s*o*l+i*u*l+r*o*d-i*c*d)+_*(+e*c*d-e*u*l+s*a*l-r*a*d+r*u*h-s*c*h)+m*(+e*u*f-e*o*d-s*a*f+i*a*d+s*o*h-i*u*h)+p*(-r*o*h-e*c*f+e*o*l+r*a*f-i*a*l+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],f=t[9],l=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=f*m*u-_*l*u+_*c*d-o*m*d-f*c*p+o*l*p,M=g*l*u-h*m*u-g*c*d+a*m*d+h*c*p-a*l*p,S=h*_*u-g*f*u+g*o*d-a*_*d-h*o*p+a*f*p,R=g*f*c-h*_*c-g*o*l+a*_*l+h*o*m-a*f*m,w=e*b+i*M+r*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=b*A,t[1]=(_*l*s-f*m*s-_*r*d+i*m*d+f*r*p-i*l*p)*A,t[2]=(o*m*s-_*c*s+_*r*u-i*m*u-o*r*p+i*c*p)*A,t[3]=(f*c*s-o*l*s-f*r*u+i*l*u+o*r*d-i*c*d)*A,t[4]=M*A,t[5]=(h*m*s-g*l*s+g*r*d-e*m*d-h*r*p+e*l*p)*A,t[6]=(g*c*s-a*m*s-g*r*u+e*m*u+a*r*p-e*c*p)*A,t[7]=(a*l*s-h*c*s+h*r*u-e*l*u-a*r*d+e*c*d)*A,t[8]=S*A,t[9]=(g*f*s-h*_*s-g*i*d+e*_*d+h*i*p-e*f*p)*A,t[10]=(a*_*s-g*o*s+g*i*u-e*_*u-a*i*p+e*o*p)*A,t[11]=(h*o*s-a*f*s-h*i*u+e*f*u+a*i*d-e*o*d)*A,t[12]=R*A,t[13]=(h*_*r-g*f*r+g*i*l-e*_*l-h*i*m+e*f*m)*A,t[14]=(g*o*r-a*_*r-g*i*c+e*_*c+a*i*m-e*o*m)*A,t[15]=(a*f*r-h*o*r+h*i*c-e*f*c-a*i*l+e*o*l)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,h=a+a,f=o+o,l=s*u,d=s*h,g=s*f,_=a*h,m=a*f,p=o*f,b=c*u,M=c*h,S=c*f,R=i.x,w=i.y,A=i.z;return r[0]=(1-(_+p))*R,r[1]=(d+S)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(d-S)*w,r[5]=(1-(l+p))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(m-b)*A,r[10]=(1-(l+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const u=1/s,h=1/a,f=1/o;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=En,c=!1){const u=this.elements,h=2*s/(e-t),f=2*s/(i-r),l=(e+t)/(e-t),d=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===En)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ms)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=l,u[12]=0,u[1]=0,u[5]=f,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=En,c=!1){const u=this.elements,h=2/(e-t),f=2/(i-r),l=-(e+t)/(e-t),d=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===En)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ms)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=l,u[1]=0,u[5]=f,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ti=new H,on=new pe,vf=new H(0,0,0),xf=new H(1,1,1),Vn=new H,Cr=new H,Ve=new H,vl=new pe,xl=new $i;class zn{constructor(t=0,e=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],l=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(l,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sf=0;const Sl=new H,bi=new $i,An=new pe,Pr=new H,er=new H,Mf=new H,Ef=new $i,Ml=new H(1,0,0),El=new H(0,1,0),yl=new H(0,0,1),Tl={type:"added"},yf={type:"removed"},Ai={type:"childadded",child:null},Zs={type:"childremoved",child:null};class ze extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new H,e=new zn,i=new $i,r=new H(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ot}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Ml,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ml,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Pr.copy(t):Pr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(er,Pr,this.up):An.lookAt(Pr,er,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(An),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),f=a(t.shapes),l=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),l.length>0&&(i.skeletons=l),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ze.DEFAULT_UP=new H(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new H,wn=new H,js=new H,Rn=new H,wi=new H,Ri=new H,bl=new H,Js=new H,Qs=new H,to=new H,eo=new ie,no=new ie,io=new ie;class hn{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),an.subVectors(t,e),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){an.subVectors(r,e),wn.subVectors(i,e),js.subVectors(t,e);const a=an.dot(an),o=an.dot(wn),c=an.dot(js),u=wn.dot(wn),h=wn.dot(js),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const l=1/f,d=(u*c-o*h)*l,g=(a*h-o*c)*l;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(o,Rn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,i),io.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(t,e,i,r){return an.subVectors(i,e),wn.subVectors(t,e),an.cross(wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;wi.subVectors(r,i),Ri.subVectors(s,i),Js.subVectors(t,i);const c=wi.dot(Js),u=Ri.dot(Js);if(c<=0&&u<=0)return e.copy(i);Qs.subVectors(t,r);const h=wi.dot(Qs),f=Ri.dot(Qs);if(h>=0&&f<=h)return e.copy(r);const l=c*f-h*u;if(l<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(wi,a);to.subVectors(t,s);const d=wi.dot(to),g=Ri.dot(to);if(g>=0&&d<=g)return e.copy(s);const _=d*u-c*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(i).addScaledVector(Ri,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return bl.subVectors(s,r),o=(f-h)/(f-h+(d-g)),e.copy(r).addScaledVector(bl,o);const p=1/(m+_+l);return a=_*p,o=l*p,e.copy(i).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function ro(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=Oa(t,1),e=Nt(e,0,1),i=Nt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ro(a,s,t+1/3),this.g=ro(a,s,t),this.b=ro(a,s,t-1/3)}return Yt.colorSpaceToWorking(this,r),this}setStyle(t,e=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=qc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Yt.workingToColorSpace(Re.copy(this),t),Math.round(Nt(Re.r*255,0,255))*65536+Math.round(Nt(Re.g*255,0,255))*256+Math.round(Nt(Re.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Re.copy(this),e);const i=Re.r,r=Re.g,s=Re.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=en){Yt.workingToColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,r=Re.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Dr);const i=cr(Wn.h,Dr.h,e),r=cr(Wn.s,Dr.s,e),s=cr(Wn.l,Dr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new kt;kt.NAMES=qc;let Tf=0;class _r extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Oi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Lo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ho&&(i.blendSrc=this.blendSrc),this.blendDst!==Lo&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vr extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new H,Hr=new Lt;let bf=0;class $e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xa,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=un(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$t(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class Kc extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $c extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class le extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Af=0;const Je=new pe,so=new ze,Ci=new H,We=new Qn,nr=new Qn,Se=new H;class fe extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?$c:Kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(We.min,nr.min),We.expandByPoint(Se),Se.addVectors(We.max,nr.max),We.expandByPoint(Se)):(We.expandByPoint(nr.min),We.expandByPoint(nr.max))}We.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Se));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Se.fromBufferAttribute(o,u),c&&(Ci.fromBufferAttribute(t,u),Se.add(Ci)),r=Math.max(r,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new H,c[U]=new H;const u=new H,h=new H,f=new H,l=new Lt,d=new Lt,g=new Lt,_=new H,m=new H;function p(U,y,E){u.fromBufferAttribute(i,U),h.fromBufferAttribute(i,y),f.fromBufferAttribute(i,E),l.fromBufferAttribute(s,U),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,E),h.sub(u),f.sub(u),d.sub(l),g.sub(l);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[U].add(_),o[y].add(_),o[E].add(_),c[U].add(m),c[y].add(m),c[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,y=b.length;U<y;++U){const E=b[U],D=E.start,O=E.count;for(let G=D,K=D+O;G<K;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new H,S=new H,R=new H,w=new H;function A(U){R.fromBufferAttribute(r,U),w.copy(R);const y=o[U];M.copy(y),M.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(w,y);const D=S.dot(c[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,D)}for(let U=0,y=b.length;U<y;++U){const E=b[U],D=E.start,O=E.count;for(let G=D,K=D+O;G<K;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let l=0,d=i.count;l<d;l++)i.setXYZ(l,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,u=new H,h=new H,f=new H;if(t)for(let l=0,d=t.count;l<d;l+=3){const g=t.getX(l+0),_=t.getX(l+1),m=t.getX(l+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(h),c.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let l=0,d=e.count;l<d;l+=3)r.fromBufferAttribute(e,l+0),s.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(l+0,h.x,h.y,h.z),i.setXYZ(l+1,h.x,h.y,h.z),i.setXYZ(l+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,f=o.normalized,l=new u.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)l[g++]=u[d++]}return new $e(l,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,i);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const l=u[h],d=t(l,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const u=i[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,l=u.length;f<l;f++){const d=u[f];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],f=s[u];for(let l=0,d=f.length;l<d;l++)h.push(f[l].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new pe,ri=new Xc,Lr=new Zi,wl=new H,Ur=new H,Ir=new H,Nr=new H,oo=new H,Fr=new H,Rl=new H,Or=new H;class Ye extends ze{constructor(t=new fe,e=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Fr.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(oo.fromBufferAttribute(f,t),a?Fr.addScaledVector(oo,h):Fr.addScaledVector(oo.sub(e),h))}e.add(Fr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(s),ri.copy(t.ray).recast(t.near),!(Lr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Lr,wl)===null||ri.origin.distanceToSquared(wl)>(t.far-t.near)**2))&&(Al.copy(s).invert(),ri.copy(t.ray).applyMatrix4(Al),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,l=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=l.length;g<_;g++){const m=l[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,R=M;S<R;S+=3){const w=o.getX(S),A=o.getX(S+1),U=o.getX(S+2);r=zr(this,p,t,i,u,h,f,w,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);r=zr(this,a,t,i,u,h,f,b,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=l.length;g<_;g++){const m=l[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,R=M;S<R;S+=3){const w=S,A=S+1,U=S+2;r=zr(this,p,t,i,u,h,f,w,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,M=m+1,S=m+2;r=zr(this,a,t,i,u,h,f,b,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function wf(n,t,e,i,r,s,a,o){let c;if(t.side===Oe?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Jn,o),c===null)return null;Or.copy(o),Or.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Or);return u<e.near||u>e.far?null:{distance:u,point:Or.clone(),object:n}}function zr(n,t,e,i,r,s,a,o,c,u){n.getVertexPosition(o,Ur),n.getVertexPosition(c,Ir),n.getVertexPosition(u,Nr);const h=wf(n,t,e,i,Ur,Ir,Nr,Rl);if(h){const f=new H;hn.getBarycoord(Rl,Ur,Ir,Nr,f),r&&(h.uv=hn.getInterpolatedAttribute(r,o,c,u,f,new Lt)),s&&(h.uv1=hn.getInterpolatedAttribute(s,o,c,u,f,new Lt)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,c,u,f,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:u,normal:new H,materialIndex:0};hn.getNormal(Ur,Ir,Nr,l.normal),h.face=l,h.barycoord=f}return h}class xr extends fe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let l=0,d=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function g(_,m,p,b,M,S,R,w,A,U,y){const E=S/A,D=R/U,O=S/2,G=R/2,K=w/2,W=A+1,Y=U+1;let Z=0,B=0;const st=new H;for(let ut=0;ut<Y;ut++){const Tt=ut*D-G;for(let Gt=0;Gt<W;Gt++){const te=Gt*E-O;st[_]=te*b,st[m]=Tt*M,st[p]=K,u.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),f.push(Gt/A),f.push(1-ut/U),Z+=1}}for(let ut=0;ut<U;ut++)for(let Tt=0;Tt<A;Tt++){const Gt=l+Tt+W*ut,te=l+Tt+W*(ut+1),se=l+(Tt+1)+W*(ut+1),qt=l+(Tt+1)+W*ut;c.push(Gt,te,qt),c.push(te,se,qt),B+=6}o.addGroup(d,B,y),d+=B,l+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=Xi(n[e]);for(const r in i)t[r]=i[r]}return t}function Rf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Yi={clone:Xi,merge:De};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jc extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new H,Cl=new Lt,Pl=new Lt;class rn extends jc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Cl,Pl),e.subVectors(Pl,Cl)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Di=1;class Df extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Pi,Di,t,e);r.layers=this.layers,this.add(r);const s=new rn(Pi,Di,t,e);s.layers=this.layers,this.add(s);const a=new rn(Pi,Di,t,e);a.layers=this.layers,this.add(a);const o=new rn(Pi,Di,t,e);o.layers=this.layers,this.add(o);const c=new rn(Pi,Di,t,e);c.layers=this.layers,this.add(c);const u=new rn(Pi,Di,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=t.getRenderTarget(),l=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(f,l,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jc extends Le{constructor(t=[],e=Gi,i,r,s,a,o,c,u,h){super(t,e,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hf extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Jc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xr(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:Un});s.uniforms.tEquirect.value=e;const a=new Ye(r,s),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=Mn),new Df(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class sr extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],l=h.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&l>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&l<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new sr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ba{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new Ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uf extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class If{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xa,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new H;class Kn{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=un(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$t(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Kn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lo=new H,Nf=new H,Ff=new Ot;class ci{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=lo.subVectors(i,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(lo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ff.getNormalMatrix(t),r=this.coplanarPoint(lo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Zi,Of=new Lt(.5,.5),Br=new H;class Qc{constructor(t=new ci,e=new ci,i=new ci,r=new ci,s=new ci,a=new ci){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=En,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],f=s[5],l=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],b=s[12],M=s[13],S=s[14],R=s[15];if(r[0].setComponents(u-a,d-h,p-g,R-b).normalize(),r[1].setComponents(u+a,d+h,p+g,R+b).normalize(),r[2].setComponents(u+o,d+f,p+_,R+M).normalize(),r[3].setComponents(u-o,d-f,p-_,R-M).normalize(),i)r[4].setComponents(c,l,m,S).normalize(),r[5].setComponents(u-c,d-l,p-m,R-S).normalize();else if(r[4].setComponents(u-c,d-l,p-m,R-S).normalize(),e===En)r[5].setComponents(u+c,d+l,p+m,R+S).normalize();else if(e===Ms)r[5].setComponents(c,l,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);const e=Of.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Br.x=r.normal.x>0?t.max.x:t.min.x,Br.y=r.normal.y>0?t.max.y:t.min.y,Br.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ka extends _r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ys=new H,Ts=new H,Dl=new pe,ir=new Xc,kr=new Zi,co=new H,Hl=new H;class zf extends ze{constructor(t=new fe,e=new ka){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ys.fromBufferAttribute(e,r-1),Ts.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ys.distanceTo(Ts);t.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),kr.radius+=s,t.ray.intersectsSphere(kr)===!1)return;Dl.copy(r).invert(),ir.copy(t.ray).applyMatrix4(Dl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=i.index,l=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=u){const p=h.getX(_),b=h.getX(_+1),M=Gr(this,t,ir,c,p,b,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Gr(this,t,ir,c,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=u){const p=Gr(this,t,ir,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Gr(this,t,ir,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gr(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(ys.fromBufferAttribute(o,r),Ts.fromBufferAttribute(o,s),e.distanceSqToSegment(ys,Ts,co,Hl)>i)return;co.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(co);if(!(u<t.near||u>t.far))return{distance:u,point:Hl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Ll=new H,Ul=new H;class tu extends zf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ll.fromBufferAttribute(e,r),Ul.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ll.distanceTo(Ul);t.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Il extends Le{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=qe,this.minFilter=qe,this.generateMipmaps=!1,this.needsUpdate=!0}}class eu extends Le{constructor(t,e,i=_i,r,s,a,o=qe,c=qe,u,h=dr,f=1){if(h!==dr&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const l={width:t,height:e,depth:f};super(l,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class nu extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Us extends fe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,f=t/o,l=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*l-a;for(let M=0;M<u;M++){const S=M*f-s;g.push(S,-b,0),_.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const M=b+u*p,S=b+u*(p+1),R=b+1+u*(p+1),w=b+1+u*p;d.push(M,S,w),d.push(S,R,w)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bf extends fe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new H,s=new H;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const f=c[u],l=f.start,d=f.count;for(let g=l,_=l+d;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),b=o.getX(g+(m+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,b),Nl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let u=0;u<3;u++){const h=3*o+u,f=3*o+(u+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),Nl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new le(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Nl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}class kf extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gf extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class iu extends jc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vf extends fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Wf extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Xf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Sa extends If{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Fl=new H,Vr=new H,Hi=new H,Li=new H,uo=new H,Yf=new H,qf=new H;class Kf{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Fl.subVectors(t,this.start),Vr.subVectors(this.end,this.start);const i=Vr.dot(Vr);let s=Vr.dot(Fl)/i;return e&&(s=Nt(s,0,1)),s}closestPointToPoint(t,e,i){const r=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Yf,i=qf){const r=10000000000000001e-32;let s,a;const o=this.start,c=t.start,u=this.end,h=t.end;Hi.subVectors(u,o),Li.subVectors(h,c),uo.subVectors(o,c);const f=Hi.dot(Hi),l=Li.dot(Li),d=Li.dot(uo);if(f<=r&&l<=r)return e.copy(o),i.copy(c),e.sub(i),e.dot(e);if(f<=r)s=0,a=d/l,a=Nt(a,0,1);else{const g=Hi.dot(uo);if(l<=r)a=0,s=Nt(-g/f,0,1);else{const _=Hi.dot(Li),m=f*l-_*_;m!==0?s=Nt((_*d-g*l)/m,0,1):s=0,a=(_*s+d)/l,a<0?(a=0,s=Nt(-g/f,0,1)):a>1&&(a=1,s=Nt((_-g)/f,0,1))}}return e.copy(o).add(Hi.multiplyScalar(s)),i.copy(c).add(Li.multiplyScalar(a)),e.sub(i),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class $f extends tu{constructor(t=10,e=10,i=4473924,r=8947848){i=new kt(i),r=new kt(r);const s=e/2,a=t/e,o=t/2,c=[],u=[];for(let l=0,d=0,g=-o;l<=e;l++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=l===s?i:r;_.toArray(u,d),d+=3,_.toArray(u,d),d+=3,_.toArray(u,d),d+=3,_.toArray(u,d),d+=3}const h=new fe;h.setAttribute("position",new le(c,3)),h.setAttribute("color",new le(u,3));const f=new ka({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ol(n,t,e,i){const r=Zf(i);switch(e){case Oc:return n*t;case Bc:return n*t/r.components*r.byteLength;case Ia:return n*t/r.components*r.byteLength;case kc:return n*t*2/r.components*r.byteLength;case Na:return n*t*2/r.components*r.byteLength;case zc:return n*t*3/r.components*r.byteLength;case fn:return n*t*4/r.components*r.byteLength;case Fa:return n*t*4/r.components*r.byteLength;case ls:case cs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case us:case hs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Ko:return Math.max(n,16)*Math.max(t,8)/4;case Xo:case qo:return Math.max(n,8)*Math.max(t,8)/2;case $o:case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ta:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ea:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case na:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ia:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case sa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case oa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case aa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fa:case da:case pa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ma:case ga:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _a:case va:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zf(n){switch(n){case pn:case Uc:return{byteLength:1,components:1};case hr:case Ic:case In:return{byteLength:2,components:1};case La:case Ua:return{byteLength:2,components:4};case _i:case Ha:case Hn:return{byteLength:4,components:1};case Nc:case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);function ru(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function jf(n){const t=new WeakMap;function e(o,c){const u=o.array,h=o.usage,f=u.byteLength,l=n.createBuffer();n.bindBuffer(c,l),n.bufferData(c,u,h),o.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:l,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,u){const h=c.array,f=c.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,h);else{f.sort((d,g)=>d.start-g.start);let l=0;for(let d=1;d<f.length;d++){const g=f[l],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++l,f[l]=_)}f.length=l+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Jf,alphahash_pars_fragment:Qf,alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,batching_pars_vertex:od,batching_vertex:ad,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:ud,iridescence_fragment:hd,bumpmap_pars_fragment:fd,clipping_planes_fragment:dd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:vd,color_pars_vertex:xd,color_vertex:Sd,common:Md,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:yd,displacementmap_pars_vertex:Td,displacementmap_vertex:bd,emissivemap_fragment:Ad,emissivemap_pars_fragment:wd,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Pd,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Hd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Wd,envmap_vertex:Ud,fog_vertex:Id,fog_pars_vertex:Nd,fog_fragment:Fd,fog_pars_fragment:Od,gradientmap_pars_fragment:zd,lightmap_pars_fragment:Bd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Vd,lights_toon_fragment:Xd,lights_toon_pars_fragment:Yd,lights_phong_fragment:qd,lights_phong_pars_fragment:Kd,lights_physical_fragment:$d,lights_physical_pars_fragment:Zd,lights_fragment_begin:jd,lights_fragment_maps:Jd,lights_fragment_end:Qd,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:sp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:up,morphcolor_vertex:hp,morphnormal_vertex:fp,morphtarget_pars_vertex:dp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:vp,normal_vertex:xp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Tp,opaque_fragment:bp,packing:Ap,premultiplied_alpha_fragment:wp,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Up,shadowmap_vertex:Ip,shadowmask_pars_fragment:Np,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:zp,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:Gp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:Yp,uv_pars_fragment:qp,uv_pars_vertex:Kp,uv_vertex:$p,worldpos_vertex:Zp,background_vert:jp,background_frag:Jp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:rm,distanceRGBA_vert:sm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:um,meshbasic_vert:hm,meshbasic_frag:fm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:vm,meshphong_vert:xm,meshphong_frag:Sm,meshphysical_vert:Mm,meshphysical_frag:Em,meshtoon_vert:ym,meshtoon_frag:Tm,points_vert:bm,points_frag:Am,shadow_vert:wm,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Fe={basic:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([rt.common,rt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([rt.lights,rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Fe.physical={uniforms:De([Fe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Wr={r:0,b:0,g:0},oi=new zn,Dm=new pe;function Hm(n,t,e,i,r,s,a){const o=new kt(0);let c=s===!0?0:1,u,h,f=null,l=0,d=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const R=g(M);R===null?p(o,c):R&&R.isColor&&(p(R,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===Ls)?(h===void 0&&(h=new Ye(new xr(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Xi(Fe.backgroundCube.uniforms),vertexShader:Fe.backgroundCube.vertexShader,fragmentShader:Fe.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),oi.copy(S.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(oi)),h.material.toneMapped=Yt.getTransfer(R.colorSpace)!==jt,(f!==R||l!==R.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=R,l=R.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new Ye(new Us(2,2),new He({name:"BackgroundMaterial",uniforms:Xi(Fe.background.uniforms),vertexShader:Fe.background.vertexShader,fragmentShader:Fe.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Yt.getTransfer(R.colorSpace)!==jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||l!==R.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,l=R.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function p(M,S){M.getRGB(Wr,Zc(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,S,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m,dispose:b}}function Lm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=l(null);let s=r,a=!1;function o(E,D,O,G,K){let W=!1;const Y=f(G,O,D);s!==Y&&(s=Y,u(s.object)),W=d(E,G,O,K),W&&g(E,G,O,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(E,D,O,G),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return n.createVertexArray()}function u(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function f(E,D,O){const G=O.wireframe===!0;let K=i[E.id];K===void 0&&(K={},i[E.id]=K);let W=K[D.id];W===void 0&&(W={},K[D.id]=W);let Y=W[G];return Y===void 0&&(Y=l(c()),W[G]=Y),Y}function l(E){const D=[],O=[],G=[];for(let K=0;K<e;K++)D[K]=0,O[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:G,object:E,attributes:{},index:null}}function d(E,D,O,G){const K=s.attributes,W=D.attributes;let Y=0;const Z=O.getAttributes();for(const B in Z)if(Z[B].location>=0){const ut=K[B];let Tt=W[B];if(Tt===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function g(E,D,O,G){const K={},W=D.attributes;let Y=0;const Z=O.getAttributes();for(const B in Z)if(Z[B].location>=0){let ut=W[B];ut===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor));const Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),K[B]=Tt,Y++}s.attributes=K,s.attributesNum=Y,s.index=G}function _(){const E=s.newAttributes;for(let D=0,O=E.length;D<O;D++)E[D]=0}function m(E){p(E,0)}function p(E,D){const O=s.newAttributes,G=s.enabledAttributes,K=s.attributeDivisors;O[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),K[E]!==D&&(n.vertexAttribDivisor(E,D),K[E]=D)}function b(){const E=s.newAttributes,D=s.enabledAttributes;for(let O=0,G=D.length;O<G;O++)D[O]!==E[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function M(E,D,O,G,K,W,Y){Y===!0?n.vertexAttribIPointer(E,D,O,K,W):n.vertexAttribPointer(E,D,O,G,K,W)}function S(E,D,O,G){_();const K=G.attributes,W=O.getAttributes(),Y=D.defaultAttributeValues;for(const Z in W){const B=W[Z];if(B.location>=0){let st=K[Z];if(st===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(st=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(st=E.instanceColor)),st!==void 0){const ut=st.normalized,Tt=st.itemSize,Gt=t.get(st);if(Gt===void 0)continue;const te=Gt.buffer,se=Gt.type,qt=Gt.bytesPerElement,X=se===n.INT||se===n.UNSIGNED_INT||st.gpuType===Ha;if(st.isInterleavedBufferAttribute){const j=st.data,dt=j.stride,Dt=st.offset;if(j.isInstancedInterleavedBuffer){for(let yt=0;yt<B.locationSize;yt++)p(B.location+yt,j.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let yt=0;yt<B.locationSize;yt++)m(B.location+yt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let yt=0;yt<B.locationSize;yt++)M(B.location+yt,Tt/B.locationSize,se,ut,dt*qt,(Dt+Tt/B.locationSize*yt)*qt,X)}else{if(st.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)p(B.location+j,st.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let j=0;j<B.locationSize;j++)m(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,te);for(let j=0;j<B.locationSize;j++)M(B.location+j,Tt/B.locationSize,se,ut,Tt*qt,Tt/B.locationSize*j*qt,X)}}else if(Y!==void 0){const ut=Y[Z];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(B.location,ut);break;case 3:n.vertexAttrib3fv(B.location,ut);break;case 4:n.vertexAttrib4fv(B.location,ut);break;default:n.vertexAttrib1fv(B.location,ut)}}}}b()}function R(){U();for(const E in i){const D=i[E];for(const O in D){const G=D[O];for(const K in G)h(G[K].object),delete G[K];delete D[O]}delete i[E]}}function w(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const O in D){const G=D[O];for(const K in G)h(G[K].object),delete G[K];delete D[O]}delete i[E.id]}function A(E){for(const D in i){const O=i[D];if(O[E.id]===void 0)continue;const G=O[E.id];for(const K in G)h(G[K].object),delete G[K];delete O[E.id]}}function U(){y(),a=!0,s!==r&&(s=r,u(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Um(n,t,e){let i;function r(u){i=u}function s(u,h){n.drawArrays(i,u,h),e.update(h,i,1)}function a(u,h,f){f!==0&&(n.drawArraysInstanced(i,u,h,f),e.update(h,i,f))}function o(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,i,1)}function c(u,h,f,l){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)a(u[g],h[g],l[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,h,0,l,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*l[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Im(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!U)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,l=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:l,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function Nm(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ci,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const d=f.length!==0||l||i!==0||r;return r=l,i=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,l){e=h(f,l,0)},this.setState=function(f,l,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):u();else{const b=s?0:i,M=b*4;let S=p.clippingState||null;c.value=S,S=h(g,l,M,d);for(let R=0;R!==M;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,l,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,b=l.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=d;M!==_;++M,S+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Fm(n){let t=new WeakMap;function e(a,o){return o===ko?a.mapping=Gi:o===Go&&(a.mapping=Vi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ko||o===Go)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Hf(c.height);return u.fromEquirectangularTexture(n,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ni=4,zl=[.125,.215,.35,.446,.526,.582],fi=20,ho=new iu,Bl=new kt;let fo=null,po=0,mo=0,go=!1;const ui=(1+Math.sqrt(5))/2,Ui=1/ui,kl=[new H(-ui,Ui,0),new H(ui,Ui,0),new H(-Ui,0,ui),new H(Ui,0,ui),new H(0,ui,-Ui),new H(0,ui,Ui),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Om=new H;class Gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=Om}=s;fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:In,format:fn,colorSpace:Wi,depthBuffer:!1},r=Vl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(s)),this._blurMaterial=Bm(s,t,e)}return r}_compileMaterial(t){const e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,i,r,s){const c=new rn(90,1,e,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,l=f.autoClear,d=f.toneMapping;f.getClearColor(Bl),f.toneMapping=$n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new vr({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),m=new Ye(new xr,_);let p=!1;const b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(Bl),p=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[M],s.y,s.z)):S===1?(c.up.set(0,0,u[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[M],s.z)):(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[M]));const R=this._cubeSize;Xr(r,S*R,M>2?R:0,R,R),f.setRenderTarget(r),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=l,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Gi||t.mapping===Vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Xr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ho)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kl[(r-s-1)%kl.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ye(this._lodPlanes[r],u),l=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):fi;m>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let b=0;for(let A=0;A<fi;++A){const U=A/_,y=Math.exp(-U*U/2);p.push(y),A===0?b+=y:A<m&&(b+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=a==="latitudinal",o&&(l.poleAxis.value=o);const{_lodMax:M}=this;l.dTheta.value=g,l.mipInt.value=M-i;const S=this._sizeLods[r],R=3*S*(r>M-Ni?r-M+Ni:0),w=4*(this._cubeSize-S);Xr(e,R,w,3*S,2*S),c.setRenderTarget(e),c.render(f,ho)}}function zm(n){const t=[],e=[],i=[];let r=n;const s=n-Ni+1+zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Ni?c=zl[a-n+Ni-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),h=-u,f=1+u,l=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),M=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,U=w>2?0:-1,y=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(y,_*g*w),M.set(l,m*g*w);const E=[w,w,w,w,w,w];S.set(E,p*g*w)}const R=new fe;R.setAttribute("position",new $e(b,_)),R.setAttribute("uv",new $e(M,m)),R.setAttribute("faceIndex",new $e(S,p)),t.push(R),r>Ni&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vl(n,t,e){const i=new Ke(n,t,e);return i.texture.mapping=Ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Bm(n,t,e){const i=new Float32Array(fi),r=new H(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Wl(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Xl(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===ko||c===Go,h=c===Gi||c===Vi;if(u||h){let f=t.get(o);const l=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==l)return e===null&&(e=new Gl(n)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return u&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new Gl(n)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Gm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vm(n,t,e,i){const r={},s=new WeakMap;function a(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const g in l.attributes)t.remove(l.attributes[g]);l.removeEventListener("dispose",a),delete r[l.id];const d=s.get(l);d&&(t.remove(d),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function o(f,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const d in l)t.update(l[d],n.ARRAY_BUFFER)}function u(f){const l=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let M=0,S=b.length;M<S;M+=3){const R=b[M+0],w=b[M+1],A=b[M+2];l.push(R,w,w,A,A,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const R=M+0,w=M+1,A=M+2;l.push(R,w,w,A,A,R)}}else return;const m=new(Vc(l)?$c:Kc)(l,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){const l=s.get(f);if(l){const d=f.index;d!==null&&l.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Wm(n,t,e){let i;function r(l){i=l}let s,a;function o(l){s=l.type,a=l.bytesPerElement}function c(l,d){n.drawElements(i,d,s,l*a),e.update(d,i,1)}function u(l,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,l*a,g),e.update(d,i,g))}function h(l,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,l,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(l,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<l.length;p++)u(l[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,l,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Xm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Ym(n,t,e){const i=new WeakMap,r=new ie;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let l=i.get(o);if(l===void 0||l.count!==f){let E=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var d=E;l!==void 0&&l.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=o.attributes.position.count*S,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*w*4*f),U=new Wc(A,R,w,f);U.type=Hn,U.needsUpdate=!0;const y=S*4;for(let D=0;D<f;D++){const O=p[D],G=b[D],K=M[D],W=R*w*4*D;for(let Y=0;Y<O.count;Y++){const Z=Y*y;g===!0&&(r.fromBufferAttribute(O,Y),A[W+Z+0]=r.x,A[W+Z+1]=r.y,A[W+Z+2]=r.z,A[W+Z+3]=0),_===!0&&(r.fromBufferAttribute(G,Y),A[W+Z+4]=r.x,A[W+Z+5]=r.y,A[W+Z+6]=r.z,A[W+Z+7]=0),m===!0&&(r.fromBufferAttribute(K,Y),A[W+Z+8]=r.x,A[W+Z+9]=r.y,A[W+Z+10]=r.z,A[W+Z+11]=K.itemSize===4?r.w:1)}}l={count:f,texture:U,size:new Lt(R,w)},i.set(o,l),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",l.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",l.size)}return{update:s}}function qm(n,t,e,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const l=c.skeleton;r.get(l)!==u&&(l.update(),r.set(l,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const su=new Le,Yl=new eu(1,1),ou=new Wc,au=new gf,lu=new Jc,ql=[],Kl=[],$l=new Float32Array(16),Zl=new Float32Array(9),jl=new Float32Array(4);function ji(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ql[r];if(s===void 0&&(s=new Float32Array(r),ql[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Is(n,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Km(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function Jm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;jl.set(i),n.uniformMatrix2fv(this.addr,!1,jl),ve(e,i)}}function Qm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Zl.set(i),n.uniformMatrix3fv(this.addr,!1,Zl),ve(e,i)}}function tg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;$l.set(i),n.uniformMatrix4fv(this.addr,!1,$l),ve(e,i)}}function eg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function sg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function og(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function cg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yl.compareFunction=Gc,s=Yl):s=su,e.setTexture2D(t||s,r)}function ug(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||au,r)}function hg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||lu,r)}function fg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ou,r)}function dg(n){switch(n){case 5126:return Km;case 35664:return $m;case 35665:return Zm;case 35666:return jm;case 35674:return Jm;case 35675:return Qm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(n,t){n.uniform1fv(this.addr,t)}function mg(n,t){const e=ji(t,this.size,2);n.uniform2fv(this.addr,e)}function gg(n,t){const e=ji(t,this.size,3);n.uniform3fv(this.addr,e)}function _g(n,t){const e=ji(t,this.size,4);n.uniform4fv(this.addr,e)}function vg(n,t){const e=ji(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function xg(n,t){const e=ji(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sg(n,t){const e=ji(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Mg(n,t){n.uniform1iv(this.addr,t)}function Eg(n,t){n.uniform2iv(this.addr,t)}function yg(n,t){n.uniform3iv(this.addr,t)}function Tg(n,t){n.uniform4iv(this.addr,t)}function bg(n,t){n.uniform1uiv(this.addr,t)}function Ag(n,t){n.uniform2uiv(this.addr,t)}function wg(n,t){n.uniform3uiv(this.addr,t)}function Rg(n,t){n.uniform4uiv(this.addr,t)}function Cg(n,t,e){const i=this.cache,r=t.length,s=Is(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||su,s[a])}function Pg(n,t,e){const i=this.cache,r=t.length,s=Is(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||au,s[a])}function Dg(n,t,e){const i=this.cache,r=t.length,s=Is(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||lu,s[a])}function Hg(n,t,e){const i=this.cache,r=t.length,s=Is(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ou,s[a])}function Lg(n){switch(n){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return Sg;case 5124:case 35670:return Mg;case 35667:case 35671:return Eg;case 35668:case 35672:return yg;case 35669:case 35673:return Tg;case 5125:return bg;case 36294:return Ag;case 36295:return wg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Hg}}class Ug{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}}class Ig{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lg(e.type)}}class Ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Jl(n,t){n.seq.push(t),n.map[t.id]=t}function Fg(n,t,e){const i=n.name,r=i.length;for(_o.lastIndex=0;;){const s=_o.exec(i),a=_o.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Jl(e,u===void 0?new Ug(o,n,t):new Ig(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Ng(o),Jl(e,f)),e=f}}}class fs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Fg(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Ql(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Og=37297;let zg=0;function Bg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const tc=new Ot;function kg(n){Yt._getMatrix(tc,Yt.workingColorSpace,n);const t=`mat3( ${tc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Ss:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ec(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Bg(n.getShaderSource(t),o)}else return s}function Gg(n,t){const e=kg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vg(n,t){let e;switch(t){case Ah:e="Linear";break;case wh:e="Reinhard";break;case Rh:e="Cineon";break;case Ch:e="ACESFilmic";break;case Dh:e="AgX";break;case Hh:e="Neutral";break;case Ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new H;function Wg(){Yt.getLuminanceCoefficients(Yr);const n=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Yg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function or(n){return n!==""}function nc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ic(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(n){return n.replace(Kg,Zg)}const $g=new Map;function Zg(n,t){let e=Bt[t];if(e===void 0){const i=$g.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(n){return n.replace(jg,Jg)}function Jg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===sh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Vi&&(t="ENVMAP_MODE_REFRACTION"),t}function n0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case Th:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function i0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function r0(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Qg(e),u=t0(e),h=e0(e),f=n0(e),l=i0(e),d=Xg(e),g=Yg(s),_=r.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Bt.tonemapping_pars_fragment:"",e.toneMapping!==$n?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=Ma(a),a=nc(a,e),a=ic(a,e),o=Ma(o),o=nc(o,e),o=ic(o,e),a=rc(a),o=rc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+a,S=b+p+o,R=Ql(r,r.VERTEX_SHADER,M),w=Ql(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(D){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(R)||"",K=r.getShaderInfoLog(w)||"",W=O.trim(),Y=G.trim(),Z=K.trim();let B=!0,st=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,w);else{const ut=ec(r,R,"vertex"),Tt=ec(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ut+`
`+Tt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||Z==="")&&(st=!1);st&&(D.diagnostics={runnable:B,programLog:W,vertexShader:{log:Y,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(R),r.deleteShader(w),U=new fs(r,_),y=qg(r,_)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Og)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let s0=0;class o0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new a0(t),e.set(t,i)),i}}class a0{constructor(t){this.id=s0++,this.code=t,this.usedTimes=0}}function l0(n,t,e,i,r,s,a){const o=new Yc,c=new o0,u=new Set,h=[],f=r.logarithmicDepthBuffer,l=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return u.add(y),y===0?"uv":`uv${y}`}function m(y,E,D,O,G){const K=O.fog,W=G.geometry,Y=y.isMeshStandardMaterial?O.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),B=Z&&Z.mapping===Ls?Z.image.height:null,st=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=ut!==void 0?ut.length:0;let Gt=0;W.morphAttributes.position!==void 0&&(Gt=1),W.morphAttributes.normal!==void 0&&(Gt=2),W.morphAttributes.color!==void 0&&(Gt=3);let te,se,qt,X;if(st){const Kt=Fe[st];te=Kt.vertexShader,se=Kt.fragmentShader}else te=y.vertexShader,se=y.fragmentShader,c.update(y),qt=c.getVertexShaderID(y),X=c.getFragmentShaderID(y);const j=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),Dt=G.isInstancedMesh===!0,yt=G.isBatchedMesh===!0,Wt=!!y.map,Ae=!!y.matcap,C=!!Z,oe=!!y.aoMap,It=!!y.lightMap,Ct=!!y.bumpMap,gt=!!y.normalMap,ae=!!y.displacementMap,_t=!!y.emissiveMap,zt=!!y.metalnessMap,xe=!!y.roughnessMap,de=y.anisotropy>0,T=y.clearcoat>0,v=y.dispersion>0,N=y.iridescence>0,V=y.sheen>0,$=y.transmission>0,k=de&&!!y.anisotropyMap,Mt=T&&!!y.clearcoatMap,nt=T&&!!y.clearcoatNormalMap,vt=T&&!!y.clearcoatRoughnessMap,xt=N&&!!y.iridescenceMap,tt=N&&!!y.iridescenceThicknessMap,lt=V&&!!y.sheenColorMap,Rt=V&&!!y.sheenRoughnessMap,St=!!y.specularMap,ot=!!y.specularColorMap,Ft=!!y.specularIntensityMap,P=$&&!!y.transmissionMap,et=$&&!!y.thicknessMap,it=!!y.gradientMap,ft=!!y.alphaMap,J=y.alphaTest>0,q=!!y.alphaHash,mt=!!y.extensions;let Ut=$n;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const ee={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:se,defines:y.defines,customVertexShaderID:qt,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:yt,batchingColor:yt&&G._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&G.instanceColor!==null,instancingMorph:Dt&&G.morphTexture!==null,supportsVertexTextures:l,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Wi,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:Ae,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:B,aoMap:oe,lightMap:It,bumpMap:Ct,normalMap:gt,displacementMap:l&&ae,emissiveMap:_t,normalMapObjectSpace:gt&&y.normalMapType===Fh,normalMapTangentSpace:gt&&y.normalMapType===Nh,metalnessMap:zt,roughnessMap:xe,anisotropy:de,anisotropyMap:k,clearcoat:T,clearcoatMap:Mt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:v,iridescence:N,iridescenceMap:xt,iridescenceThicknessMap:tt,sheen:V,sheenColorMap:lt,sheenRoughnessMap:Rt,specularMap:St,specularColorMap:ot,specularIntensityMap:Ft,transmission:$,transmissionMap:P,thicknessMap:et,gradientMap:it,opaque:y.transparent===!1&&y.blending===Oi&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:q,combine:y.combine,mapUv:Wt&&_(y.map.channel),aoMapUv:oe&&_(y.aoMap.channel),lightMapUv:It&&_(y.lightMap.channel),bumpMapUv:Ct&&_(y.bumpMap.channel),normalMapUv:gt&&_(y.normalMap.channel),displacementMapUv:ae&&_(y.displacementMap.channel),emissiveMapUv:_t&&_(y.emissiveMap.channel),metalnessMapUv:zt&&_(y.metalnessMap.channel),roughnessMapUv:xe&&_(y.roughnessMap.channel),anisotropyMapUv:k&&_(y.anisotropyMap.channel),clearcoatMapUv:Mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(y.sheenRoughnessMap.channel),specularMapUv:St&&_(y.specularMap.channel),specularColorMapUv:ot&&_(y.specularColorMap.channel),specularIntensityMapUv:Ft&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:et&&_(y.thicknessMap.channel),alphaMapUv:ft&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(gt||de),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Wt||ft),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===jt,decodeVideoTextureEmissive:_t&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Oe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=u.has(1),ee.vertexUv2s=u.has(2),ee.vertexUv3s=u.has(3),u.clear(),ee}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(b(E,y),M(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const E=g[y.type];let D;if(E){const O=Fe[E];D=Yi.clone(O.uniforms)}else D=y.uniforms;return D}function R(y,E){let D;for(let O=0,G=h.length;O<G;O++){const K=h[O];if(K.cacheKey===E){D=K,++D.usedTimes;break}}return D===void 0&&(D=new r0(n,E,y,s),h.push(D)),D}function w(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function A(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:U}}function c0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function u0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function oc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ac(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,l,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:l,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=l,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function o(f,l,d,g,_,m){const p=a(f,l,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(f,l,d,g,_,m){const p=a(f,l,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function u(f,l){e.length>1&&e.sort(f||u0),i.length>1&&i.sort(l||oc),r.length>1&&r.sort(l||oc)}function h(){for(let f=t,l=n.length;f<l;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function h0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new ac,n.set(i,[a])):r>=s.length?(a=new ac,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function f0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new kt};break;case"SpotLight":e={position:new H,direction:new H,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function d0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let p0=0;function m0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function g0(n){const t=new f0,e=d0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new pe,a=new pe;function o(u){let h=0,f=0,l=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,M=0,S=0,R=0,w=0,A=0;u.sort(m0);for(let y=0,E=u.length;y<E;y++){const D=u[y],O=D.color,G=D.intensity,K=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*G,f+=O.g*G,l+=O.b*G;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],G);A++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,B=e.get(D);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=D.shadow.matrix,b++}i.directional[d]=Y,d++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(O).multiplyScalar(G),Y.distance=K,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[_]=Y;const Z=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=Z.matrix,D.castShadow){const B=e.get(D);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=W,S++}_++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(O).multiplyScalar(G),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Z=D.shadow,B=e.get(D);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,B.shadowCameraNear=Z.camera.near,B.shadowCameraFar=Z.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(G),Y.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=l;const U=i.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==M||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=M,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=A,i.version=p0++)}function c(u,h){let f=0,l=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const M=u[p];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[l];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),l++}else if(M.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function lc(n){const t=new g0(n),e=[],i=[];function r(h){u.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function _0(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new lc(n),t.set(r,[o])):s>=a.length?(o=new lc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S0(n,t,e){let i=new Qc;const r=new Lt,s=new Lt,a=new ie,o=new kf({depthPacking:Ih}),c=new Gf,u={},h=e.maxTextureSize,f={[Jn]:Oe,[Oe]:Jn,[cn]:cn},l=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:v0,fragmentShader:x0}),d=l.clone();d.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let p=this.type;this.render=function(w,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Un),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=p!==Pn&&this.type===Pn,K=p===Pn&&this.type!==Pn;for(let W=0,Y=w.length;W<Y;W++){const Z=w[W],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const st=B.getFrameExtents();if(r.multiply(st),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/st.x),r.x=s.x*st.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/st.y),r.y=s.y*st.y,B.mapSize.y=s.y)),B.map===null||G===!0||K===!0){const Tt=this.type!==Pn?{minFilter:qe,magFilter:qe}:{};B.map!==null&&B.map.dispose(),B.map=new Ke(r.x,r.y,Tt),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ut=B.getViewportCount();for(let Tt=0;Tt<ut;Tt++){const Gt=B.getViewport(Tt);a.set(s.x*Gt.x,s.y*Gt.y,s.x*Gt.z,s.y*Gt.w),O.viewport(a),B.updateMatrices(Z,Tt),i=B.getFrustum(),S(A,U,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===Pn&&b(B,U),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,E,D)};function b(w,A){const U=t.update(_);l.defines.VSM_SAMPLES!==w.blurSamples&&(l.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,l.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ke(r.x,r.y)),l.uniforms.shadow_pass.value=w.map.texture,l.uniforms.resolution.value=w.mapSize,l.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,U,l,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,U,d,_,null)}function M(w,A,U,y){let E=null;const D=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)E=D;else if(E=U.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=E.uuid,G=A.uuid;let K=u[O];K===void 0&&(K={},u[O]=K);let W=K[G];W===void 0&&(W=E.clone(),K[G]=W,A.addEventListener("dispose",R)),E=W}if(E.visible=A.visible,E.wireframe=A.wireframe,y===Pn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=n.properties.get(E);O.light=U}return E}function S(w,A,U,y,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Pn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const G=t.update(w),K=w.material;if(Array.isArray(K)){const W=G.groups;for(let Y=0,Z=W.length;Y<Z;Y++){const B=W[Y],st=K[B.materialIndex];if(st&&st.visible){const ut=M(w,st,y,E);w.onBeforeShadow(n,w,A,U,G,ut,B),n.renderBufferDirect(U,null,G,ut,w,B),w.onAfterShadow(n,w,A,U,G,ut,B)}}}else if(K.visible){const W=M(w,K,y,E);w.onBeforeShadow(n,w,A,U,G,W,null),n.renderBufferDirect(U,null,G,W,w,null),w.onAfterShadow(n,w,A,U,G,W,null)}}const O=w.children;for(let G=0,K=O.length;G<K;G++)S(O[G],A,U,y,E)}function R(w){w.target.removeEventListener("dispose",R);for(const U in u){const y=u[U],E=w.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const M0={[Uo]:Io,[No]:zo,[Fo]:Bo,[ki]:Oo,[Io]:Uo,[zo]:No,[Bo]:Fo,[Oo]:ki};function E0(n,t){function e(){let P=!1;const et=new ie;let it=null;const ft=new ie(0,0,0,0);return{setMask:function(J){it!==J&&!P&&(n.colorMask(J,J,J,J),it=J)},setLocked:function(J){P=J},setClear:function(J,q,mt,Ut,ee){ee===!0&&(J*=Ut,q*=Ut,mt*=Ut),et.set(J,q,mt,Ut),ft.equals(et)===!1&&(n.clearColor(J,q,mt,Ut),ft.copy(et))},reset:function(){P=!1,it=null,ft.set(-1,0,0,0)}}}function i(){let P=!1,et=!1,it=null,ft=null,J=null;return{setReversed:function(q){if(et!==q){const mt=t.get("EXT_clip_control");q?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),et=q;const Ut=J;J=null,this.setClear(Ut)}},getReversed:function(){return et},setTest:function(q){q?j(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(q){it!==q&&!P&&(n.depthMask(q),it=q)},setFunc:function(q){if(et&&(q=M0[q]),ft!==q){switch(q){case Uo:n.depthFunc(n.NEVER);break;case Io:n.depthFunc(n.ALWAYS);break;case No:n.depthFunc(n.LESS);break;case ki:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case Oo:n.depthFunc(n.GEQUAL);break;case zo:n.depthFunc(n.GREATER);break;case Bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=q}},setLocked:function(q){P=q},setClear:function(q){J!==q&&(et&&(q=1-q),n.clearDepth(q),J=q)},reset:function(){P=!1,it=null,ft=null,J=null,et=!1}}}function r(){let P=!1,et=null,it=null,ft=null,J=null,q=null,mt=null,Ut=null,ee=null;return{setTest:function(Kt){P||(Kt?j(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Kt){et!==Kt&&!P&&(n.stencilMask(Kt),et=Kt)},setFunc:function(Kt,yn,mn){(it!==Kt||ft!==yn||J!==mn)&&(n.stencilFunc(Kt,yn,mn),it=Kt,ft=yn,J=mn)},setOp:function(Kt,yn,mn){(q!==Kt||mt!==yn||Ut!==mn)&&(n.stencilOp(Kt,yn,mn),q=Kt,mt=yn,Ut=mn)},setLocked:function(Kt){P=Kt},setClear:function(Kt){ee!==Kt&&(n.clearStencil(Kt),ee=Kt)},reset:function(){P=!1,et=null,it=null,ft=null,J=null,q=null,mt=null,Ut=null,ee=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},f={},l=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,S=null,R=null,w=null,A=new kt(0,0,0),U=0,y=!1,E=null,D=null,O=null,G=null,K=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=Z>=1):B.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=Z>=2);let st=null,ut={};const Tt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),te=new ie().fromArray(Tt),se=new ie().fromArray(Gt);function qt(P,et,it,ft){const J=new Uint8Array(4),q=n.createTexture();n.bindTexture(P,q),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<it;mt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(et+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return q}const X={};X[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(ki),Ct(!1),gt(al),j(n.CULL_FACE),oe(Un);function j(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function dt(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Dt(P,et){return f[P]!==et?(n.bindFramebuffer(P,et),f[P]=et,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=et),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=et),!0):!1}function yt(P,et){let it=d,ft=!1;if(P){it=l.get(et),it===void 0&&(it=[],l.set(et,it));const J=P.textures;if(it.length!==J.length||it[0]!==n.COLOR_ATTACHMENT0){for(let q=0,mt=J.length;q<mt;q++)it[q]=n.COLOR_ATTACHMENT0+q;it.length=J.length,ft=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,ft=!0);ft&&n.drawBuffers(it)}function Wt(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const Ae={[hi]:n.FUNC_ADD,[ah]:n.FUNC_SUBTRACT,[lh]:n.FUNC_REVERSE_SUBTRACT};Ae[ch]=n.MIN,Ae[uh]=n.MAX;const C={[hh]:n.ZERO,[fh]:n.ONE,[dh]:n.SRC_COLOR,[Ho]:n.SRC_ALPHA,[xh]:n.SRC_ALPHA_SATURATE,[_h]:n.DST_COLOR,[mh]:n.DST_ALPHA,[ph]:n.ONE_MINUS_SRC_COLOR,[Lo]:n.ONE_MINUS_SRC_ALPHA,[vh]:n.ONE_MINUS_DST_COLOR,[gh]:n.ONE_MINUS_DST_ALPHA,[Sh]:n.CONSTANT_COLOR,[Mh]:n.ONE_MINUS_CONSTANT_COLOR,[Eh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(P,et,it,ft,J,q,mt,Ut,ee,Kt){if(P===Un){_===!0&&(dt(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),P!==oh){if(P!==m||Kt!==y){if((p!==hi||S!==hi)&&(n.blendEquation(n.FUNC_ADD),p=hi,S=hi),Kt)switch(P){case Oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFunc(n.ONE,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ll:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,M=null,R=null,w=null,A.set(0,0,0),U=0,m=P,y=Kt}return}J=J||et,q=q||it,mt=mt||ft,(et!==p||J!==S)&&(n.blendEquationSeparate(Ae[et],Ae[J]),p=et,S=J),(it!==b||ft!==M||q!==R||mt!==w)&&(n.blendFuncSeparate(C[it],C[ft],C[q],C[mt]),b=it,M=ft,R=q,w=mt),(Ut.equals(A)===!1||ee!==U)&&(n.blendColor(Ut.r,Ut.g,Ut.b,ee),A.copy(Ut),U=ee),m=P,y=!1}function It(P,et){P.side===cn?dt(n.CULL_FACE):j(n.CULL_FACE);let it=P.side===Oe;et&&(it=!it),Ct(it),P.blending===Oi&&P.transparent===!1?oe(Un):oe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),_t(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(P){E!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),E=P)}function gt(P){P!==ih?(j(n.CULL_FACE),P!==D&&(P===al?n.cullFace(n.BACK):P===rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),D=P}function ae(P){P!==O&&(Y&&n.lineWidth(P),O=P)}function _t(P,et,it){P?(j(n.POLYGON_OFFSET_FILL),(G!==et||K!==it)&&(n.polygonOffset(et,it),G=et,K=it)):dt(n.POLYGON_OFFSET_FILL)}function zt(P){P?j(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function xe(P){P===void 0&&(P=n.TEXTURE0+W-1),st!==P&&(n.activeTexture(P),st=P)}function de(P,et,it){it===void 0&&(st===null?it=n.TEXTURE0+W-1:it=st);let ft=ut[it];ft===void 0&&(ft={type:void 0,texture:void 0},ut[it]=ft),(ft.type!==P||ft.texture!==et)&&(st!==it&&(n.activeTexture(it),st=it),n.bindTexture(P,et||X[P]),ft.type=P,ft.texture=et)}function T(){const P=ut[st];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(P){te.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),te.copy(P))}function Rt(P){se.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function St(P,et){let it=u.get(et);it===void 0&&(it=new WeakMap,u.set(et,it));let ft=it.get(P);ft===void 0&&(ft=n.getUniformBlockIndex(et,P.name),it.set(P,ft))}function ot(P,et){const ft=u.get(et).get(P);c.get(et)!==ft&&(n.uniformBlockBinding(et,ft,P.__bindingPointIndex),c.set(et,ft))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},st=null,ut={},f={},l=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,S=null,R=null,w=null,A=new kt(0,0,0),U=0,y=!1,E=null,D=null,O=null,G=null,K=null,te.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:dt,bindFramebuffer:Dt,drawBuffers:yt,useProgram:Wt,setBlending:oe,setMaterial:It,setFlipSided:Ct,setCullFace:gt,setLineWidth:ae,setPolygonOffset:_t,setScissorTest:zt,activeTexture:xe,bindTexture:de,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:xt,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:ot,texStorage2D:nt,texStorage3D:vt,texSubImage2D:V,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:Mt,scissor:lt,viewport:Rt,reset:Ft}}function y0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Lt,h=new WeakMap;let f;const l=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return d?new OffscreenCanvas(T,v):Es("canvas")}function _(T,v,N){let V=1;const $=de(T);if(($.width>N||$.height>N)&&(V=N/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(V*$.width),Mt=Math.floor(V*$.height);f===void 0&&(f=g(k,Mt));const nt=v?g(k,Mt):f;return nt.width=k,nt.height=Mt,nt.getContext("2d").drawImage(T,0,0,k,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+Mt+")."),nt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,v,N,V,$=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=v;if(v===n.RED&&(N===n.FLOAT&&(k=n.R32F),N===n.HALF_FLOAT&&(k=n.R16F),N===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.R8UI),N===n.UNSIGNED_SHORT&&(k=n.R16UI),N===n.UNSIGNED_INT&&(k=n.R32UI),N===n.BYTE&&(k=n.R8I),N===n.SHORT&&(k=n.R16I),N===n.INT&&(k=n.R32I)),v===n.RG&&(N===n.FLOAT&&(k=n.RG32F),N===n.HALF_FLOAT&&(k=n.RG16F),N===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.RG8UI),N===n.UNSIGNED_SHORT&&(k=n.RG16UI),N===n.UNSIGNED_INT&&(k=n.RG32UI),N===n.BYTE&&(k=n.RG8I),N===n.SHORT&&(k=n.RG16I),N===n.INT&&(k=n.RG32I)),v===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.RGB8UI),N===n.UNSIGNED_SHORT&&(k=n.RGB16UI),N===n.UNSIGNED_INT&&(k=n.RGB32UI),N===n.BYTE&&(k=n.RGB8I),N===n.SHORT&&(k=n.RGB16I),N===n.INT&&(k=n.RGB32I)),v===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),N===n.UNSIGNED_INT&&(k=n.RGBA32UI),N===n.BYTE&&(k=n.RGBA8I),N===n.SHORT&&(k=n.RGBA16I),N===n.INT&&(k=n.RGBA32I)),v===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),v===n.RGBA){const Mt=$?Ss:Yt.getTransfer(V);N===n.FLOAT&&(k=n.RGBA32F),N===n.HALF_FLOAT&&(k=n.RGBA16F),N===n.UNSIGNED_BYTE&&(k=Mt===jt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function S(T,v){let N;return T?v===null||v===_i||v===fr?N=n.DEPTH24_STENCIL8:v===Hn?N=n.DEPTH32F_STENCIL8:v===hr&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_i||v===fr?N=n.DEPTH_COMPONENT24:v===Hn?N=n.DEPTH_COMPONENT32F:v===hr&&(N=n.DEPTH_COMPONENT16),N}function R(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==qe&&T.minFilter!==Mn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),U(v),v.isVideoTexture&&h.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),E(v)}function U(T){const v=i.get(T);if(v.__webglInit===void 0)return;const N=T.source,V=l.get(N);if(V){const $=V[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(T),Object.keys(V).length===0&&l.delete(N)}i.remove(T)}function y(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const N=T.source,V=l.get(N);delete V[v.__cacheKey],a.memory.textures--}function E(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let $=0;$<v.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[V][$]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let V=0,$=N.length;V<$;V++){const k=i.get(N[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(N[V])}i.remove(T)}let D=0;function O(){D=0}function G(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function K(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function W(T,v){const N=i.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,T,v);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function Y(T,v){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){X(N,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function Z(T,v){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){X(N,T,v);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function B(T,v){const N=i.get(T);if(T.version>0&&N.__version!==T.version){j(N,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const st={[Vo]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},ut={[qe]:n.NEAREST,[Lh]:n.NEAREST_MIPMAP_NEAREST,[yr]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Bs]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},Tt={[Oh]:n.NEVER,[Wh]:n.ALWAYS,[zh]:n.LESS,[Gc]:n.LEQUAL,[Bh]:n.EQUAL,[Vh]:n.GEQUAL,[kh]:n.GREATER,[Gh]:n.NOTEQUAL};function Gt(T,v){if(v.type===Hn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Mn||v.magFilter===Bs||v.magFilter===yr||v.magFilter===mi||v.minFilter===Mn||v.minFilter===Bs||v.minFilter===yr||v.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,st[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,st[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,st[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qe||v.minFilter!==yr&&v.minFilter!==mi||v.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const V=v.source;let $=l.get(V);$===void 0&&($={},l.set(V,$));const k=K(v);if(k!==T.__cacheKey){$[k]===void 0&&($[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[k].usedTimes++;const Mt=$[T.__cacheKey];Mt!==void 0&&($[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&y(v)),T.__cacheKey=k,T.__webglTexture=$[k].texture}return N}function se(T,v,N){return Math.floor(Math.floor(T/N)/v)}function qt(T,v,N,V){const k=T.updateRanges;if(k.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,N,V,v.data);else{k.sort((tt,lt)=>tt.start-lt.start);let Mt=0;for(let tt=1;tt<k.length;tt++){const lt=k[Mt],Rt=k[tt],St=lt.start+lt.count,ot=se(Rt.start,v.width,4),Ft=se(lt.start,v.width,4);Rt.start<=St+1&&ot===Ft&&se(Rt.start+Rt.count-1,v.width,4)===ot?lt.count=Math.max(lt.count,Rt.start+Rt.count-lt.start):(++Mt,k[Mt]=Rt)}k.length=Mt+1;const nt=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),xt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let tt=0,lt=k.length;tt<lt;tt++){const Rt=k[tt],St=Math.floor(Rt.start/4),ot=Math.ceil(Rt.count/4),Ft=St%v.width,P=Math.floor(St/v.width),et=ot,it=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),e.texSubImage2D(n.TEXTURE_2D,0,Ft,P,et,it,N,V,v.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,nt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function X(T,v,N){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const $=te(T,v),k=v.source;e.bindTexture(V,T.__webglTexture,n.TEXTURE0+N);const Mt=i.get(k);if(k.version!==Mt.__version||$===!0){e.activeTexture(n.TEXTURE0+N);const nt=Yt.getPrimaries(Yt.workingColorSpace),vt=v.colorSpace===qn?null:Yt.getPrimaries(v.colorSpace),xt=v.colorSpace===qn||nt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let tt=_(v.image,!1,r.maxTextureSize);tt=xe(v,tt);const lt=s.convert(v.format,v.colorSpace),Rt=s.convert(v.type);let St=M(v.internalFormat,lt,Rt,v.colorSpace,v.isVideoTexture);Gt(V,v);let ot;const Ft=v.mipmaps,P=v.isVideoTexture!==!0,et=Mt.__version===void 0||$===!0,it=k.dataReady,ft=R(v,tt);if(v.isDepthTexture)St=S(v.format===pr,v.type),et&&(P?e.texStorage2D(n.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,St,tt.width,tt.height,0,lt,Rt,null));else if(v.isDataTexture)if(Ft.length>0){P&&et&&e.texStorage2D(n.TEXTURE_2D,ft,St,Ft[0].width,Ft[0].height);for(let J=0,q=Ft.length;J<q;J++)ot=Ft[J],P?it&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ot.width,ot.height,lt,Rt,ot.data):e.texImage2D(n.TEXTURE_2D,J,St,ot.width,ot.height,0,lt,Rt,ot.data);v.generateMipmaps=!1}else P?(et&&e.texStorage2D(n.TEXTURE_2D,ft,St,tt.width,tt.height),it&&qt(v,tt,lt,Rt)):e.texImage2D(n.TEXTURE_2D,0,St,tt.width,tt.height,0,lt,Rt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P&&et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,St,Ft[0].width,Ft[0].height,tt.depth);for(let J=0,q=Ft.length;J<q;J++)if(ot=Ft[J],v.format!==fn)if(lt!==null)if(P){if(it)if(v.layerUpdates.size>0){const mt=Ol(ot.width,ot.height,v.format,v.type);for(const Ut of v.layerUpdates){const ee=ot.data.subarray(Ut*mt/ot.data.BYTES_PER_ELEMENT,(Ut+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ut,ot.width,ot.height,1,lt,ee)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,tt.depth,lt,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,St,ot.width,ot.height,tt.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?it&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,tt.depth,lt,Rt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,St,ot.width,ot.height,tt.depth,0,lt,Rt,ot.data)}else{P&&et&&e.texStorage2D(n.TEXTURE_2D,ft,St,Ft[0].width,Ft[0].height);for(let J=0,q=Ft.length;J<q;J++)ot=Ft[J],v.format!==fn?lt!==null?P?it&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ot.width,ot.height,lt,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,J,St,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?it&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ot.width,ot.height,lt,Rt,ot.data):e.texImage2D(n.TEXTURE_2D,J,St,ot.width,ot.height,0,lt,Rt,ot.data)}else if(v.isDataArrayTexture)if(P){if(et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,St,tt.width,tt.height,tt.depth),it)if(v.layerUpdates.size>0){const J=Ol(tt.width,tt.height,v.format,v.type);for(const q of v.layerUpdates){const mt=tt.data.subarray(q*J/tt.data.BYTES_PER_ELEMENT,(q+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,tt.width,tt.height,1,lt,Rt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(v.isData3DTexture)P?(et&&e.texStorage3D(n.TEXTURE_3D,ft,St,tt.width,tt.height,tt.depth),it&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(v.isFramebufferTexture){if(et)if(P)e.texStorage2D(n.TEXTURE_2D,ft,St,tt.width,tt.height);else{let J=tt.width,q=tt.height;for(let mt=0;mt<ft;mt++)e.texImage2D(n.TEXTURE_2D,mt,St,J,q,0,lt,Rt,null),J>>=1,q>>=1}}else if(Ft.length>0){if(P&&et){const J=de(Ft[0]);e.texStorage2D(n.TEXTURE_2D,ft,St,J.width,J.height)}for(let J=0,q=Ft.length;J<q;J++)ot=Ft[J],P?it&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,lt,Rt,ot):e.texImage2D(n.TEXTURE_2D,J,St,lt,Rt,ot);v.generateMipmaps=!1}else if(P){if(et){const J=de(tt);e.texStorage2D(n.TEXTURE_2D,ft,St,J.width,J.height)}it&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,Rt,tt)}else e.texImage2D(n.TEXTURE_2D,0,St,lt,Rt,tt);m(v)&&p(V),Mt.__version=k.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function j(T,v,N){if(v.image.length!==6)return;const V=te(T,v),$=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const k=i.get($);if($.version!==k.__version||V===!0){e.activeTexture(n.TEXTURE0+N);const Mt=Yt.getPrimaries(Yt.workingColorSpace),nt=v.colorSpace===qn?null:Yt.getPrimaries(v.colorSpace),vt=v.colorSpace===qn||Mt===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,lt=[];for(let q=0;q<6;q++)!xt&&!tt?lt[q]=_(v.image[q],!0,r.maxCubemapSize):lt[q]=tt?v.image[q].image:v.image[q],lt[q]=xe(v,lt[q]);const Rt=lt[0],St=s.convert(v.format,v.colorSpace),ot=s.convert(v.type),Ft=M(v.internalFormat,St,ot,v.colorSpace),P=v.isVideoTexture!==!0,et=k.__version===void 0||V===!0,it=$.dataReady;let ft=R(v,Rt);Gt(n.TEXTURE_CUBE_MAP,v);let J;if(xt){P&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,Rt.width,Rt.height);for(let q=0;q<6;q++){J=lt[q].mipmaps;for(let mt=0;mt<J.length;mt++){const Ut=J[mt];v.format!==fn?St!==null?P?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,0,0,Ut.width,Ut.height,St,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,Ft,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,0,0,Ut.width,Ut.height,St,ot,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,Ft,Ut.width,Ut.height,0,St,ot,Ut.data)}}}else{if(J=v.mipmaps,P&&et){J.length>0&&ft++;const q=de(lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,q.width,q.height)}for(let q=0;q<6;q++)if(tt){P?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,lt[q].width,lt[q].height,St,ot,lt[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ft,lt[q].width,lt[q].height,0,St,ot,lt[q].data);for(let mt=0;mt<J.length;mt++){const ee=J[mt].image[q].image;P?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,0,0,ee.width,ee.height,St,ot,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,Ft,ee.width,ee.height,0,St,ot,ee.data)}}else{P?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,St,ot,lt[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ft,St,ot,lt[q]);for(let mt=0;mt<J.length;mt++){const Ut=J[mt];P?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,0,0,St,ot,Ut.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,Ft,St,ot,Ut.image[q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),k.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function dt(T,v,N,V,$,k){const Mt=s.convert(N.format,N.colorSpace),nt=s.convert(N.type),vt=M(N.internalFormat,Mt,nt,N.colorSpace),xt=i.get(v),tt=i.get(N);if(tt.__renderTarget=v,!xt.__hasExternalTextures){const lt=Math.max(1,v.width>>k),Rt=Math.max(1,v.height>>k);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,k,vt,lt,Rt,v.depth,0,Mt,nt,null):e.texImage2D($,k,vt,lt,Rt,0,Mt,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),_t(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,tt.__webglTexture,0,ae(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,tt.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(T,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const V=v.depthTexture,$=V&&V.isDepthTexture?V.type:null,k=S(v.stencilBuffer,$),Mt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=ae(v);_t(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,k,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,T)}else{const V=v.textures;for(let $=0;$<V.length;$++){const k=V[$],Mt=s.convert(k.format,k.colorSpace),nt=s.convert(k.type),vt=M(k.internalFormat,Mt,nt,k.colorSpace),xt=ae(v);N&&_t(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,vt,v.width,v.height):_t(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,vt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,vt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const $=V.__webglTexture,k=ae(v);if(v.depthTexture.format===dr)_t(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===pr)_t(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Wt(T){const v=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=V}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const V=T.texture.mipmaps;V&&V.length>0?yt(v.__webglFramebuffer[0],T):yt(v.__webglFramebuffer,T)}else if(N){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Dt(v.__webglDepthbuffer[V],T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Dt(v.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(T,v,N){const V=i.get(T);v!==void 0&&dt(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Wt(T)}function C(T){const v=T.texture,N=i.get(T),V=i.get(v);T.addEventListener("dispose",A);const $=T.textures,k=T.isWebGLCubeRenderTarget===!0,Mt=$.length>1;if(Mt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,a.memory.textures++),k){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let vt=0;vt<v.mipmaps.length;vt++)N.__webglFramebuffer[nt][vt]=n.createFramebuffer()}else N.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<v.mipmaps.length;nt++)N.__webglFramebuffer[nt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let nt=0,vt=$.length;nt<vt;nt++){const xt=i.get($[nt]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&_t(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){const vt=$[nt];N.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);const xt=s.convert(vt.format,vt.colorSpace),tt=s.convert(vt.type),lt=M(vt.internalFormat,xt,tt,vt.colorSpace,T.isXRRenderTarget===!0),Rt=ae(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,lt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,v);for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)dt(N.__webglFramebuffer[nt][vt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt);else dt(N.__webglFramebuffer[nt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let nt=0,vt=$.length;nt<vt;nt++){const xt=$[nt],tt=i.get(xt);let lt=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Gt(lt,xt),dt(N.__webglFramebuffer,T,xt,n.COLOR_ATTACHMENT0+nt,lt,0),m(xt)&&p(lt)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,V.__webglTexture),Gt(nt,v),v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)dt(N.__webglFramebuffer[vt],T,v,n.COLOR_ATTACHMENT0,nt,vt);else dt(N.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,nt,0);m(v)&&p(nt),e.unbindTexture()}T.depthBuffer&&Wt(T)}function oe(T){const v=T.textures;for(let N=0,V=v.length;N<V;N++){const $=v[N];if(m($)){const k=b(T),Mt=i.get($).__webglTexture;e.bindTexture(k,Mt),p(k),e.unbindTexture()}}}const It=[],Ct=[];function gt(T){if(T.samples>0){if(_t(T)===!1){const v=T.textures,N=T.width,V=T.height;let $=n.COLOR_BUFFER_BIT;const k=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(T),nt=v.length>1;if(nt)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const vt=T.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const tt=i.get(v[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,N,V,0,0,N,V,$,n.NEAREST),c===!0&&(It.length=0,Ct.length=0,It.push(n.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(It.push(k),Ct.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const tt=i.get(v[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ae(T){return Math.min(r.maxSamples,T.samples)}function _t(T){const v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function zt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function xe(T,v){const N=T.colorSpace,V=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Wi&&N!==qn&&(Yt.getTransfer(N)===jt?(V!==fn||$!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function de(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=B,this.rebindTextures=Ae,this.setupRenderTarget=C,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=_t}function T0(n,t){function e(i,r=qn){let s;const a=Yt.getTransfer(r);if(i===pn)return n.UNSIGNED_BYTE;if(i===La)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ua)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uc)return n.BYTE;if(i===Ic)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Ha)return n.INT;if(i===_i)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===Oc)return n.ALPHA;if(i===zc)return n.RGB;if(i===fn)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===Bc)return n.RED;if(i===Ia)return n.RED_INTEGER;if(i===kc)return n.RG;if(i===Na)return n.RG_INTEGER;if(i===Fa)return n.RGBA_INTEGER;if(i===ls||i===cs||i===us||i===hs)if(a===jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===Yo||i===qo||i===Ko)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$o||i===Zo||i===jo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$o||i===Zo)return a===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jo)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jo||i===Qo||i===ta||i===ea||i===na||i===ia||i===ra||i===sa||i===oa||i===aa||i===la||i===ca||i===ua||i===ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jo)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qo)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ta)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ea)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===na)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ia)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ra)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===aa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===la)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ca)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ua)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ha)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===da||i===pa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===fa)return a===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ma||i===ga||i===_a||i===va)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ma)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ga)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_a)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===va)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const b0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new nu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new He({vertexShader:b0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R0 extends Ki{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,l=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new w0,p={},b=e.getContextAttributes();let M=null,S=null;const R=[],w=[],A=new Lt;let U=null;const y=new rn;y.viewport=new ie;const E=new rn;E.viewport=new ie;const D=[y,E],O=new Wf;let G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=R[X];return j===void 0&&(j=new ao,R[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=R[X];return j===void 0&&(j=new ao,R[X]=j),j.getGripSpace()},this.getHand=function(X){let j=R[X];return j===void 0&&(j=new ao,R[X]=j),j.getHandSpace()};function W(X){const j=w.indexOf(X.inputSource);if(j===-1)return;const dt=R[j];dt!==void 0&&(dt.update(X.inputSource,X.frame,u||a),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<R.length;X++){const j=w[X];j!==null&&(w[X]=null,R[X].disconnect(j))}G=null,K=null,m.reset();for(const X in p)delete p[X];t.setRenderTarget(M),d=null,l=null,f=null,r=null,S=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return l!==null?l:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Dt=null,yt=null;b.depth&&(yt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=b.stencil?pr:dr,Dt=b.stencil?fr:_i);const Wt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};f=this.getBinding(),l=f.createProjectionLayer(Wt),r.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),S=new Ke(l.textureWidth,l.textureHeight,{format:fn,type:pn,depthTexture:new eu(l.textureWidth,l.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}else{const dt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ke(d.framebufferWidth,d.framebufferHeight,{format:fn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),qt.setContext(r),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(X){for(let j=0;j<X.removed.length;j++){const dt=X.removed[j],Dt=w.indexOf(dt);Dt>=0&&(w[Dt]=null,R[Dt].disconnect(dt))}for(let j=0;j<X.added.length;j++){const dt=X.added[j];let Dt=w.indexOf(dt);if(Dt===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=w.length){w.push(dt),Dt=Wt;break}else if(w[Wt]===null){w[Wt]=dt,Dt=Wt;break}if(Dt===-1)break}const yt=R[Dt];yt&&yt.connect(dt)}}const B=new H,st=new H;function ut(X,j,dt){B.setFromMatrixPosition(j.matrixWorld),st.setFromMatrixPosition(dt.matrixWorld);const Dt=B.distanceTo(st),yt=j.projectionMatrix.elements,Wt=dt.projectionMatrix.elements,Ae=yt[14]/(yt[10]-1),C=yt[14]/(yt[10]+1),oe=(yt[9]+1)/yt[5],It=(yt[9]-1)/yt[5],Ct=(yt[8]-1)/yt[0],gt=(Wt[8]+1)/Wt[0],ae=Ae*Ct,_t=Ae*gt,zt=Dt/(-Ct+gt),xe=zt*-Ct;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xe),X.translateZ(zt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),yt[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const de=Ae+zt,T=C+zt,v=ae-xe,N=_t+(Dt-xe),V=oe*C/T*de,$=It*C/T*de;X.projectionMatrix.makePerspective(v,N,V,$,de,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Tt(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let j=X.near,dt=X.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),O.near=E.near=y.near=j,O.far=E.far=y.far=dt,(G!==O.near||K!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,K=O.far),O.layers.mask=X.layers.mask|6,y.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const Dt=X.parent,yt=O.cameras;Tt(O,Dt);for(let Wt=0;Wt<yt.length;Wt++)Tt(yt[Wt],Dt);yt.length===2?ut(O,y,E):O.projectionMatrix.copy(y.projectionMatrix),Gt(X,O,Dt)};function Gt(X,j,dt){dt===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=mr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(l===null&&d===null))return c},this.setFoveation=function(X){c=X,l!==null&&(l.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(X){return p[X]};let te=null;function se(X,j){if(h=j.getViewerPose(u||a),g=j,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Dt=!1;dt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let C=0;C<dt.length;C++){const oe=dt[C];let It=null;if(d!==null)It=d.getViewport(oe);else{const gt=f.getViewSubImage(l,oe);It=gt.viewport,C===0&&(t.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(S))}let Ct=D[C];Ct===void 0&&(Ct=new rn,Ct.layers.enable(C),Ct.viewport=new ie,D[C]=Ct),Ct.matrix.fromArray(oe.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(oe.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(It.x,It.y,It.width,It.height),C===0&&(O.matrix.copy(Ct.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(Ct)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const C=f.getDepthInformation(dt[0]);C&&C.isValid&&C.texture&&m.init(C,r.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),f=i.getBinding();for(let C=0;C<dt.length;C++){const oe=dt[C].camera;if(oe){let It=p[oe];It||(It=new nu,p[oe]=It);const Ct=f.getCameraImage(oe);It.sourceTexture=Ct}}}}for(let dt=0;dt<R.length;dt++){const Dt=w[dt],yt=R[dt];Dt!==null&&yt!==void 0&&yt.update(Dt,j,u||a)}te&&te(X,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const qt=new ru;qt.setAnimationLoop(se),this.setAnimationLoop=function(X){te=X},this.dispose=function(){}}}const ai=new zn,C0=new pe;function P0(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),l(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,ai.copy(S),ai.x*=-1,ai.y*=-1,ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(ai)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function D0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const S=M.program;i.uniformBlockBinding(b,S)}function u(b,M){let S=r[b.id];S===void 0&&(g(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(b,R);const w=t.render.frame;s[b.id]!==w&&(l(b),s[b.id]=w)}function h(b){const M=f();b.__bindingPointIndex=M;const S=n.createBuffer(),R=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(b){const M=r[b.id],S=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,A=S.length;w<A;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,E=U.length;y<E;y++){const D=U[y];if(d(D,w,y,R)===!0){const O=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let W=0;W<G.length;W++){const Y=G[W],Z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,O+K,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,K),K+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,M,S,R){const w=b.value,A=M+"_"+S;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const U=R[A];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return R[A]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(b){const M=b.uniforms;let S=0;const R=16;for(let A=0,U=M.length;A<U;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,D=y.length;E<D;E++){const O=y[E],G=Array.isArray(O.value)?O.value:[O.value];for(let K=0,W=G.length;K<W;K++){const Y=G[K],Z=_(Y),B=S%R,st=B%Z.boundary,ut=B+st;S+=st,ut!==0&&R-ut<Z.storage&&(S+=R-ut),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Z.storage}}}const w=S%R;return w>0&&(S+=R-w),b.__size=S,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:u,dispose:p}}class H0{constructor(t={}){const{canvas:e=cf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:l=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=en;let w=0,A=0,U=null,y=-1,E=null;const D=new ie,O=new ie;let G=null;const K=new kt(0);let W=0,Y=e.width,Z=e.height,B=1,st=null,ut=null;const Tt=new ie(0,0,Y,Z),Gt=new ie(0,0,Y,Z);let te=!1;const se=new Qc;let qt=!1,X=!1;const j=new pe,dt=new H,Dt=new ie,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Ae(){return U===null?B:1}let C=i;function oe(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Da}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",J,!1),C===null){const L="webgl2";if(C=oe(L,x),C===null)throw oe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let It,Ct,gt,ae,_t,zt,xe,de,T,v,N,V,$,k,Mt,nt,vt,xt,tt,lt,Rt,St,ot,Ft;function P(){It=new Gm(C),It.init(),St=new T0(C,It),Ct=new Im(C,It,t,St),gt=new E0(C,It),Ct.reversedDepthBuffer&&l&&gt.buffers.depth.setReversed(!0),ae=new Xm(C),_t=new c0,zt=new y0(C,It,gt,_t,Ct,St,ae),xe=new Fm(S),de=new km(S),T=new jf(C),ot=new Lm(C,T),v=new Vm(C,T,ae,ot),N=new qm(C,v,T,ae),tt=new Ym(C,Ct,zt),nt=new Nm(_t),V=new l0(S,xe,de,It,Ct,ot,nt),$=new P0(S,_t),k=new h0,Mt=new _0(It),xt=new Hm(S,xe,de,gt,N,d,c),vt=new S0(S,N,Ct),Ft=new D0(C,ae,Ct,gt),lt=new Um(C,It,ae),Rt=new Wm(C,It,ae),ae.programs=V.programs,S.capabilities=Ct,S.extensions=It,S.properties=_t,S.renderLists=k,S.shadowMap=vt,S.state=gt,S.info=ae}P();const et=new R0(S,C);this.xr=et,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=It.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=It.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(x){x!==void 0&&(B=x,this.setSize(Y,Z,!1))},this.getSize=function(x){return x.set(Y,Z)},this.setSize=function(x,L,F=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,Z=L,e.width=Math.floor(x*B),e.height=Math.floor(L*B),F===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Y*B,Z*B).floor()},this.setDrawingBufferSize=function(x,L,F){Y=x,Z=L,B=F,e.width=Math.floor(x*F),e.height=Math.floor(L*F),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(Tt)},this.setViewport=function(x,L,F,z){x.isVector4?Tt.set(x.x,x.y,x.z,x.w):Tt.set(x,L,F,z),gt.viewport(D.copy(Tt).multiplyScalar(B).round())},this.getScissor=function(x){return x.copy(Gt)},this.setScissor=function(x,L,F,z){x.isVector4?Gt.set(x.x,x.y,x.z,x.w):Gt.set(x,L,F,z),gt.scissor(O.copy(Gt).multiplyScalar(B).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(x){gt.setScissorTest(te=x)},this.setOpaqueSort=function(x){st=x},this.setTransparentSort=function(x){ut=x},this.getClearColor=function(x){return x.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,F=!0){let z=0;if(x){let I=!1;if(U!==null){const Q=U.texture.format;I=Q===Fa||Q===Na||Q===Ia}if(I){const Q=U.texture.type,at=Q===pn||Q===_i||Q===hr||Q===fr||Q===La||Q===Ua,pt=xt.getClearColor(),ht=xt.getClearAlpha(),wt=pt.r,Pt=pt.g,bt=pt.b;at?(g[0]=wt,g[1]=Pt,g[2]=bt,g[3]=ht,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=wt,_[1]=Pt,_[2]=bt,_[3]=ht,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}L&&(z|=C.DEPTH_BUFFER_BIT),F&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",J,!1),xt.dispose(),k.dispose(),Mt.dispose(),_t.dispose(),xe.dispose(),de.dispose(),N.dispose(),ot.dispose(),Ft.dispose(),V.dispose(),et.dispose(),et.removeEventListener("sessionstart",mn),et.removeEventListener("sessionend",el),ti.stop()};function it(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=ae.autoReset,L=vt.enabled,F=vt.autoUpdate,z=vt.needsUpdate,I=vt.type;P(),ae.autoReset=x,vt.enabled=L,vt.autoUpdate=F,vt.needsUpdate=z,vt.type=I}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const L=x.target;L.removeEventListener("dispose",q),mt(L)}function mt(x){Ut(x),_t.remove(x)}function Ut(x){const L=_t.get(x).programs;L!==void 0&&(L.forEach(function(F){V.releaseProgram(F)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,F,z,I,Q){L===null&&(L=yt);const at=I.isMesh&&I.matrixWorld.determinant()<0,pt=ju(x,L,F,z,I);gt.setMaterial(z,at);let ht=F.index,wt=1;if(z.wireframe===!0){if(ht=v.getWireframeAttribute(F),ht===void 0)return;wt=2}const Pt=F.drawRange,bt=F.attributes.position;let Vt=Pt.start*wt,Zt=(Pt.start+Pt.count)*wt;Q!==null&&(Vt=Math.max(Vt,Q.start*wt),Zt=Math.min(Zt,(Q.start+Q.count)*wt)),ht!==null?(Vt=Math.max(Vt,0),Zt=Math.min(Zt,ht.count)):bt!=null&&(Vt=Math.max(Vt,0),Zt=Math.min(Zt,bt.count));const he=Zt-Vt;if(he<0||he===1/0)return;ot.setup(I,z,pt,F,ht);let re,Qt=lt;if(ht!==null&&(re=T.get(ht),Qt=Rt,Qt.setIndex(re)),I.isMesh)z.wireframe===!0?(gt.setLineWidth(z.wireframeLinewidth*Ae()),Qt.setMode(C.LINES)):Qt.setMode(C.TRIANGLES);else if(I.isLine){let At=z.linewidth;At===void 0&&(At=1),gt.setLineWidth(At*Ae()),I.isLineSegments?Qt.setMode(C.LINES):I.isLineLoop?Qt.setMode(C.LINE_LOOP):Qt.setMode(C.LINE_STRIP)}else I.isPoints?Qt.setMode(C.POINTS):I.isSprite&&Qt.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Qt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const At=I._multiDrawStarts,ce=I._multiDrawCounts,Xt=I._multiDrawCount,ke=ht?T.get(ht).bytesPerElement:1,vi=_t.get(z).currentProgram.getUniforms();for(let Ge=0;Ge<Xt;Ge++)vi.setValue(C,"_gl_DrawID",Ge),Qt.render(At[Ge]/ke,ce[Ge])}else if(I.isInstancedMesh)Qt.renderInstances(Vt,he,I.count);else if(F.isInstancedBufferGeometry){const At=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ce=Math.min(F.instanceCount,At);Qt.renderInstances(Vt,he,ce)}else Qt.render(Vt,he)};function ee(x,L,F){x.transparent===!0&&x.side===cn&&x.forceSinglePass===!1?(x.side=Oe,x.needsUpdate=!0,Er(x,L,F),x.side=Jn,x.needsUpdate=!0,Er(x,L,F),x.side=cn):Er(x,L,F)}this.compile=function(x,L,F=null){F===null&&(F=x),p=Mt.get(F),p.init(L),M.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),x!==F&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const z=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let at=0;at<Q.length;at++){const pt=Q[at];ee(pt,F,I),z.add(pt)}else ee(Q,F,I),z.add(Q)}),p=M.pop(),z},this.compileAsync=function(x,L,F=null){const z=this.compile(x,L,F);return new Promise(I=>{function Q(){if(z.forEach(function(at){_t.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){I(x);return}setTimeout(Q,10)}It.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Kt=null;function yn(x){Kt&&Kt(x)}function mn(){ti.stop()}function el(){ti.start()}const ti=new ru;ti.setAnimationLoop(yn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(x){Kt=x,et.setAnimationLoop(x),x===null?ti.stop():ti.start()},et.addEventListener("sessionstart",mn),et.addEventListener("sessionend",el),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(L),L=et.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,U),p=Mt.get(x,M.length),p.init(L),M.push(p),j.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),se.setFromProjectionMatrix(j,En,L.reversedDepth),X=this.localClippingEnabled,qt=nt.init(this.clippingPlanes,X),m=k.get(x,b.length),m.init(),b.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Os(Q,L,-1/0,S.sortObjects)}Os(x,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ut),Wt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Wt&&xt.addToRenderList(m,x),this.info.render.frame++,qt===!0&&nt.beginShadows();const F=p.state.shadowsArray;vt.render(F,x,L),qt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,I=m.transmissive;if(p.setupLights(),L.isArrayCamera){const Q=L.cameras;if(I.length>0)for(let at=0,pt=Q.length;at<pt;at++){const ht=Q[at];il(z,I,x,ht)}Wt&&xt.render(x);for(let at=0,pt=Q.length;at<pt;at++){const ht=Q[at];nl(m,x,ht,ht.viewport)}}else I.length>0&&il(z,I,x,L),Wt&&xt.render(x),nl(m,x,L);U!==null&&A===0&&(zt.updateMultisampleRenderTarget(U),zt.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,L),ot.resetDefaultState(),y=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],qt===!0&&nt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Os(x,L,F,z){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||se.intersectsSprite(x)){z&&Dt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(j);const at=N.update(x),pt=x.material;pt.visible&&m.push(x,at,pt,F,Dt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||se.intersectsObject(x))){const at=N.update(x),pt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Dt.copy(x.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Dt.copy(at.boundingSphere.center)),Dt.applyMatrix4(x.matrixWorld).applyMatrix4(j)),Array.isArray(pt)){const ht=at.groups;for(let wt=0,Pt=ht.length;wt<Pt;wt++){const bt=ht[wt],Vt=pt[bt.materialIndex];Vt&&Vt.visible&&m.push(x,at,Vt,F,Dt.z,bt)}}else pt.visible&&m.push(x,at,pt,F,Dt.z,null)}}const Q=x.children;for(let at=0,pt=Q.length;at<pt;at++)Os(Q[at],L,F,z)}function nl(x,L,F,z){const I=x.opaque,Q=x.transmissive,at=x.transparent;p.setupLightsView(F),qt===!0&&nt.setGlobalState(S.clippingPlanes,F),z&&gt.viewport(D.copy(z)),I.length>0&&Mr(I,L,F),Q.length>0&&Mr(Q,L,F),at.length>0&&Mr(at,L,F),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function il(x,L,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ke(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?In:pn,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const Q=p.state.transmissionRenderTarget[z.id],at=z.viewport||D;Q.setSize(at.z*S.transmissionResolutionScale,at.w*S.transmissionResolutionScale);const pt=S.getRenderTarget(),ht=S.getActiveCubeFace(),wt=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(K),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&xt.render(F);const Pt=S.toneMapping;S.toneMapping=$n;const bt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),qt===!0&&nt.setGlobalState(S.clippingPlanes,z),Mr(x,F,z),zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q),It.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Zt=0,he=L.length;Zt<he;Zt++){const re=L[Zt],Qt=re.object,At=re.geometry,ce=re.material,Xt=re.group;if(ce.side===cn&&Qt.layers.test(z.layers)){const ke=ce.side;ce.side=Oe,ce.needsUpdate=!0,rl(Qt,F,z,At,ce,Xt),ce.side=ke,ce.needsUpdate=!0,Vt=!0}}Vt===!0&&(zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q))}S.setRenderTarget(pt,ht,wt),S.setClearColor(K,W),bt!==void 0&&(z.viewport=bt),S.toneMapping=Pt}function Mr(x,L,F){const z=L.isScene===!0?L.overrideMaterial:null;for(let I=0,Q=x.length;I<Q;I++){const at=x[I],pt=at.object,ht=at.geometry,wt=at.group;let Pt=at.material;Pt.allowOverride===!0&&z!==null&&(Pt=z),pt.layers.test(F.layers)&&rl(pt,L,F,ht,Pt,wt)}}function rl(x,L,F,z,I,Q){x.onBeforeRender(S,L,F,z,I,Q),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(S,L,F,z,x,Q),I.transparent===!0&&I.side===cn&&I.forceSinglePass===!1?(I.side=Oe,I.needsUpdate=!0,S.renderBufferDirect(F,L,z,I,x,Q),I.side=Jn,I.needsUpdate=!0,S.renderBufferDirect(F,L,z,I,x,Q),I.side=cn):S.renderBufferDirect(F,L,z,I,x,Q),x.onAfterRender(S,L,F,z,I,Q)}function Er(x,L,F){L.isScene!==!0&&(L=yt);const z=_t.get(x),I=p.state.lights,Q=p.state.shadowsArray,at=I.state.version,pt=V.getParameters(x,I.state,Q,L,F),ht=V.getProgramCacheKey(pt);let wt=z.programs;z.environment=x.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(x.isMeshStandardMaterial?de:xe).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,wt===void 0&&(x.addEventListener("dispose",q),wt=new Map,z.programs=wt);let Pt=wt.get(ht);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===at)return ol(x,pt),Pt}else pt.uniforms=V.getUniforms(x),x.onBeforeCompile(pt,S),Pt=V.acquireProgram(pt,ht),wt.set(ht,Pt),z.uniforms=pt.uniforms;const bt=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(bt.clippingPlanes=nt.uniform),ol(x,pt),z.needsLights=Qu(x),z.lightsStateVersion=at,z.needsLights&&(bt.ambientLightColor.value=I.state.ambient,bt.lightProbe.value=I.state.probe,bt.directionalLights.value=I.state.directional,bt.directionalLightShadows.value=I.state.directionalShadow,bt.spotLights.value=I.state.spot,bt.spotLightShadows.value=I.state.spotShadow,bt.rectAreaLights.value=I.state.rectArea,bt.ltc_1.value=I.state.rectAreaLTC1,bt.ltc_2.value=I.state.rectAreaLTC2,bt.pointLights.value=I.state.point,bt.pointLightShadows.value=I.state.pointShadow,bt.hemisphereLights.value=I.state.hemi,bt.directionalShadowMap.value=I.state.directionalShadowMap,bt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,bt.spotShadowMap.value=I.state.spotShadowMap,bt.spotLightMatrix.value=I.state.spotLightMatrix,bt.spotLightMap.value=I.state.spotLightMap,bt.pointShadowMap.value=I.state.pointShadowMap,bt.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function sl(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=fs.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function ol(x,L){const F=_t.get(x);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function ju(x,L,F,z,I){L.isScene!==!0&&(L=yt),zt.resetTextureUnits();const Q=L.fog,at=z.isMeshStandardMaterial?L.environment:null,pt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Wi,ht=(z.isMeshStandardMaterial?de:xe).get(z.envMap||at),wt=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pt=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!F.morphAttributes.position,Vt=!!F.morphAttributes.normal,Zt=!!F.morphAttributes.color;let he=$n;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(he=S.toneMapping);const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qt=re!==void 0?re.length:0,At=_t.get(z),ce=p.state.lights;if(qt===!0&&(X===!0||x!==E)){const Ce=x===E&&z.id===y;nt.setState(z,x,Ce)}let Xt=!1;z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ce.state.version||At.outputColorSpace!==pt||I.isBatchedMesh&&At.batching===!1||!I.isBatchedMesh&&At.batching===!0||I.isBatchedMesh&&At.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&At.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&At.instancing===!1||!I.isInstancedMesh&&At.instancing===!0||I.isSkinnedMesh&&At.skinning===!1||!I.isSkinnedMesh&&At.skinning===!0||I.isInstancedMesh&&At.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&At.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&At.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&At.instancingMorph===!1&&I.morphTexture!==null||At.envMap!==ht||z.fog===!0&&At.fog!==Q||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==wt||At.vertexTangents!==Pt||At.morphTargets!==bt||At.morphNormals!==Vt||At.morphColors!==Zt||At.toneMapping!==he||At.morphTargetsCount!==Qt)&&(Xt=!0):(Xt=!0,At.__version=z.version);let ke=At.currentProgram;Xt===!0&&(ke=Er(z,L,I));let vi=!1,Ge=!1,Ji=!1;const ue=ke.getUniforms(),Ze=At.uniforms;if(gt.useProgram(ke.program)&&(vi=!0,Ge=!0,Ji=!0),z.id!==y&&(y=z.id,Ge=!0),vi||E!==x){gt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ue.setValue(C,"projectionMatrix",x.projectionMatrix),ue.setValue(C,"viewMatrix",x.matrixWorldInverse);const Ie=ue.map.cameraPosition;Ie!==void 0&&Ie.setValue(C,dt.setFromMatrixPosition(x.matrixWorld)),Ct.logarithmicDepthBuffer&&ue.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,Ge=!0,Ji=!0)}if(I.isSkinnedMesh){ue.setOptional(C,I,"bindMatrix"),ue.setOptional(C,I,"bindMatrixInverse");const Ce=I.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ue.setValue(C,"boneTexture",Ce.boneTexture,zt))}I.isBatchedMesh&&(ue.setOptional(C,I,"batchingTexture"),ue.setValue(C,"batchingTexture",I._matricesTexture,zt),ue.setOptional(C,I,"batchingIdTexture"),ue.setValue(C,"batchingIdTexture",I._indirectTexture,zt),ue.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&ue.setValue(C,"batchingColorTexture",I._colorsTexture,zt));const je=F.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&tt.update(I,F,ke),(Ge||At.receiveShadow!==I.receiveShadow)&&(At.receiveShadow=I.receiveShadow,ue.setValue(C,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ze.envMap.value=ht,Ze.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Ze.envMapIntensity.value=L.environmentIntensity),Ge&&(ue.setValue(C,"toneMappingExposure",S.toneMappingExposure),At.needsLights&&Ju(Ze,Ji),Q&&z.fog===!0&&$.refreshFogUniforms(Ze,Q),$.refreshMaterialUniforms(Ze,z,B,Z,p.state.transmissionRenderTarget[x.id]),fs.upload(C,sl(At),Ze,zt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(fs.upload(C,sl(At),Ze,zt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(C,"center",I.center),ue.setValue(C,"modelViewMatrix",I.modelViewMatrix),ue.setValue(C,"normalMatrix",I.normalMatrix),ue.setValue(C,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ce=z.uniformsGroups;for(let Ie=0,zs=Ce.length;Ie<zs;Ie++){const ei=Ce[Ie];Ft.update(ei,ke),Ft.bind(ei,ke)}}return ke}function Ju(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Qu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,L,F){const z=_t.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_t.get(x.texture).__webglTexture=L,_t.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:F,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const F=_t.get(x);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0};const th=C.createFramebuffer();this.setRenderTarget=function(x,L=0,F=0){U=x,w=L,A=F;let z=!0,I=null,Q=!1,at=!1;if(x){const ht=_t.get(x);if(ht.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(ht.__webglFramebuffer===void 0)zt.setupRenderTarget(x);else if(ht.__hasExternalTextures)zt.rebindTextures(x,_t.get(x.texture).__webglTexture,_t.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const bt=x.depthTexture;if(ht.__boundDepthTexture!==bt){if(bt!==null&&_t.has(bt)&&(x.width!==bt.image.width||x.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(x)}}const wt=x.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(at=!0);const Pt=_t.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pt[L])?I=Pt[L][F]:I=Pt[L],Q=!0):x.samples>0&&zt.useMultisampledRTT(x)===!1?I=_t.get(x).__webglMultisampledFramebuffer:Array.isArray(Pt)?I=Pt[F]:I=Pt,D.copy(x.viewport),O.copy(x.scissor),G=x.scissorTest}else D.copy(Tt).multiplyScalar(B).floor(),O.copy(Gt).multiplyScalar(B).floor(),G=te;if(F!==0&&(I=th),gt.bindFramebuffer(C.FRAMEBUFFER,I)&&z&&gt.drawBuffers(x,I),gt.viewport(D),gt.scissor(O),gt.setScissorTest(G),Q){const ht=_t.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,ht.__webglTexture,F)}else if(at){const ht=L;for(let wt=0;wt<x.textures.length;wt++){const Pt=_t.get(x.textures[wt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+wt,Pt.__webglTexture,F,ht)}}else if(x!==null&&F!==0){const ht=_t.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ht.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(x,L,F,z,I,Q,at,pt=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=_t.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(ht=ht[at]),ht){gt.bindFramebuffer(C.FRAMEBUFFER,ht);try{const wt=x.textures[pt],Pt=wt.format,bt=wt.type;if(!Ct.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-z&&F>=0&&F<=x.height-I&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pt),C.readPixels(L,F,z,I,St.convert(Pt),St.convert(bt),Q))}finally{const wt=U!==null?_t.get(U).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(x,L,F,z,I,Q,at,pt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=_t.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(ht=ht[at]),ht)if(L>=0&&L<=x.width-z&&F>=0&&F<=x.height-I){gt.bindFramebuffer(C.FRAMEBUFFER,ht);const wt=x.textures[pt],Pt=wt.format,bt=wt.type;if(!Ct.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pt),C.readPixels(L,F,z,I,St.convert(Pt),St.convert(bt),0);const Zt=U!==null?_t.get(U).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,Zt);const he=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await uf(C,he,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Vt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Vt),C.deleteSync(he),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,F=0){const z=Math.pow(2,-F),I=Math.floor(x.image.width*z),Q=Math.floor(x.image.height*z),at=L!==null?L.x:0,pt=L!==null?L.y:0;zt.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,at,pt,I,Q),gt.unbindTexture()};const eh=C.createFramebuffer(),nh=C.createFramebuffer();this.copyTextureToTexture=function(x,L,F=null,z=null,I=0,Q=null){Q===null&&(I!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);let at,pt,ht,wt,Pt,bt,Vt,Zt,he;const re=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(F!==null)at=F.max.x-F.min.x,pt=F.max.y-F.min.y,ht=F.isBox3?F.max.z-F.min.z:1,wt=F.min.x,Pt=F.min.y,bt=F.isBox3?F.min.z:0;else{const je=Math.pow(2,-I);at=Math.floor(re.width*je),pt=Math.floor(re.height*je),x.isDataArrayTexture?ht=re.depth:x.isData3DTexture?ht=Math.floor(re.depth*je):ht=1,wt=0,Pt=0,bt=0}z!==null?(Vt=z.x,Zt=z.y,he=z.z):(Vt=0,Zt=0,he=0);const Qt=St.convert(L.format),At=St.convert(L.type);let ce;L.isData3DTexture?(zt.setTexture3D(L,0),ce=C.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(zt.setTexture2DArray(L,0),ce=C.TEXTURE_2D_ARRAY):(zt.setTexture2D(L,0),ce=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const Xt=C.getParameter(C.UNPACK_ROW_LENGTH),ke=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ge=C.getParameter(C.UNPACK_SKIP_ROWS),Ji=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,bt);const ue=x.isDataArrayTexture||x.isData3DTexture,Ze=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const je=_t.get(x),Ce=_t.get(L),Ie=_t.get(je.__renderTarget),zs=_t.get(Ce.__renderTarget);gt.bindFramebuffer(C.READ_FRAMEBUFFER,Ie.__webglFramebuffer),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let ei=0;ei<ht;ei++)ue&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(x).__webglTexture,I,bt+ei),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(L).__webglTexture,Q,he+ei)),C.blitFramebuffer(wt,Pt,at,pt,Vt,Zt,at,pt,C.DEPTH_BUFFER_BIT,C.NEAREST);gt.bindFramebuffer(C.READ_FRAMEBUFFER,null),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||_t.has(x)){const je=_t.get(x),Ce=_t.get(L);gt.bindFramebuffer(C.READ_FRAMEBUFFER,eh),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,nh);for(let Ie=0;Ie<ht;Ie++)ue?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,je.__webglTexture,I,bt+Ie):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,je.__webglTexture,I),Ze?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ce.__webglTexture,Q,he+Ie):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,Q),I!==0?C.blitFramebuffer(wt,Pt,at,pt,Vt,Zt,at,pt,C.COLOR_BUFFER_BIT,C.NEAREST):Ze?C.copyTexSubImage3D(ce,Q,Vt,Zt,he+Ie,wt,Pt,at,pt):C.copyTexSubImage2D(ce,Q,Vt,Zt,wt,Pt,at,pt);gt.bindFramebuffer(C.READ_FRAMEBUFFER,null),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ze?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(ce,Q,Vt,Zt,he,at,pt,ht,Qt,At,re.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(ce,Q,Vt,Zt,he,at,pt,ht,Qt,re.data):C.texSubImage3D(ce,Q,Vt,Zt,he,at,pt,ht,Qt,At,re):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Vt,Zt,at,pt,Qt,At,re.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Vt,Zt,re.width,re.height,Qt,re.data):C.texSubImage2D(C.TEXTURE_2D,Q,Vt,Zt,at,pt,Qt,At,re);C.pixelStorei(C.UNPACK_ROW_LENGTH,Xt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ke),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ji),Q===0&&L.generateMipmaps&&C.generateMipmap(ce),gt.unbindTexture()},this.initRenderTarget=function(x){_t.get(x).__webglFramebuffer===void 0&&zt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?zt.setTextureCube(x,0):x.isData3DTexture?zt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?zt.setTexture2DArray(x,0):zt.setTexture2D(x,0),gt.unbindTexture()},this.resetState=function(){w=0,A=0,U=null,gt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const cc=new Qn,qr=new H;class Va extends Vf{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new le(t,3)),this.setAttribute("uv",new le(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Sa(e,6,1);return this.setAttribute("instanceStart",new Kn(i,3,0)),this.setAttribute("instanceEnd",new Kn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Sa(e,6,1);return this.setAttribute("instanceColorStart",new Kn(i,3,0)),this.setAttribute("instanceColorEnd",new Kn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Bf(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),cc.setFromBufferAttribute(e),this.boundingBox.union(cc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)qr.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(qr)),qr.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qr));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Fe.line={uniforms:Yi.merge([rt.common,rt.fog,rt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class cu extends He{constructor(t){super({type:"LineMaterial",uniforms:Yi.clone(Fe.line.uniforms),vertexShader:Fe.line.vertexShader,fragmentShader:Fe.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const vo=new ie,uc=new H,hc=new H,Ee=new ie,ye=new ie,gn=new ie,xo=new H,So=new pe,Te=new Kf,fc=new H,Kr=new Qn,$r=new Zi,_n=new ie;let xn,gi;function dc(n,t,e){return _n.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),_n.multiplyScalar(1/_n.w),_n.x=gi/e.width,_n.y=gi/e.height,_n.applyMatrix4(n.projectionMatrixInverse),_n.multiplyScalar(1/_n.w),Math.abs(Math.max(_n.x,_n.y))}function L0(n,t){const e=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,c=a;o<c;o++){Te.start.fromBufferAttribute(r,o),Te.end.fromBufferAttribute(s,o),Te.applyMatrix4(e);const u=new H,h=new H;xn.distanceSqToSegment(Te.start,Te.end,h,u),h.distanceTo(u)<gi*.5&&t.push({point:h,pointOnLine:u,distance:xn.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function U0(n,t,e){const i=t.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,c=o.attributes.instanceStart,u=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),f=-t.near;xn.at(1,gn),gn.w=1,gn.applyMatrix4(t.matrixWorldInverse),gn.applyMatrix4(i),gn.multiplyScalar(1/gn.w),gn.x*=s.x/2,gn.y*=s.y/2,gn.z=0,xo.copy(gn),So.multiplyMatrices(t.matrixWorldInverse,a);for(let l=0,d=h;l<d;l++){if(Ee.fromBufferAttribute(c,l),ye.fromBufferAttribute(u,l),Ee.w=1,ye.w=1,Ee.applyMatrix4(So),ye.applyMatrix4(So),Ee.z>f&&ye.z>f)continue;if(Ee.z>f){const M=Ee.z-ye.z,S=(Ee.z-f)/M;Ee.lerp(ye,S)}else if(ye.z>f){const M=ye.z-Ee.z,S=(ye.z-f)/M;ye.lerp(Ee,S)}Ee.applyMatrix4(i),ye.applyMatrix4(i),Ee.multiplyScalar(1/Ee.w),ye.multiplyScalar(1/ye.w),Ee.x*=s.x/2,Ee.y*=s.y/2,ye.x*=s.x/2,ye.y*=s.y/2,Te.start.copy(Ee),Te.start.z=0,Te.end.copy(ye),Te.end.z=0;const _=Te.closestPointToPointParameter(xo,!0);Te.at(_,fc);const m=lf.lerp(Ee.z,ye.z,_),p=m>=-1&&m<=1,b=xo.distanceTo(fc)<gi*.5;if(p&&b){Te.start.fromBufferAttribute(c,l),Te.end.fromBufferAttribute(u,l),Te.start.applyMatrix4(a),Te.end.applyMatrix4(a);const M=new H,S=new H;xn.distanceSqToSegment(Te.start,Te.end,S,M),e.push({point:S,pointOnLine:M,distance:xn.origin.distanceTo(S),object:n,face:null,faceIndex:l,uv:null,uv1:null})}}}class uu extends Ye{constructor(t=new Va,e=new cu({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)uc.fromBufferAttribute(e,a),hc.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+uc.distanceTo(hc);const s=new Sa(r,2,1);return t.setAttribute("instanceDistanceStart",new Kn(s,1,0)),t.setAttribute("instanceDistanceEnd",new Kn(s,1,1)),this}raycast(t,e){const i=this.material.worldUnits,r=t.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;xn=t.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;gi=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),$r.copy(o.boundingSphere).applyMatrix4(a);let u;if(i)u=gi*.5;else{const f=Math.max(r.near,$r.distanceToPoint(xn.origin));u=dc(r,f,c.resolution)}if($r.radius+=u,xn.intersectsSphere($r)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Kr.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=gi*.5;else{const f=Math.max(r.near,Kr.distanceToPoint(xn.origin));h=dc(r,f,c.resolution)}Kr.expandByScalar(h),xn.intersectsBox(Kr)!==!1&&(i?L0(this,e):U0(this,r,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(vo),this.material.uniforms.resolution.value.set(vo.z,vo.w))}}const hu=[];function Be(n,t,e={}){const i=new cu({color:n,linewidth:t,transparent:e.transparent??!1,opacity:e.opacity??1,fog:e.fog??!0,depthWrite:!1});return hu.push(i),i}function fu(n){return n.attributes.position.array}function ds(n,t){const e=new Va,i=fu(n);i.length<6?e.setPositions([0,0,0,0,0,0]):e.setPositions(i);const r=new uu(e,t);return r.frustumCulled=!1,r.visible=i.length>=6,r}function On(n,t){const e=new Va;e.setPositions(n);const i=new uu(e,t);return i.frustumCulled=!1,i}function du(n,t){const e=fu(t);if(e.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(e)}function Zr(n,t){if(t.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(t)}function pu(n,t){for(const e of hu)e.resolution.set(n,t)}function I0(n){let t=n>>>0;const e=()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:e,int:(i,r)=>i+Math.floor(e()*(r-i+1)),state:()=>t}}const ne=.3,N0={hull:3,tread:2,gun:2,engine:2,core:1,ammo:1,scanner:6},F0={hull:1,tread:1.2,gun:.8,engine:1.5,core:1,ammo:1,scanner:3},O0={H:"hull",T:"tread",G:"gun",E:"engine",C:"core",A:"ammo",S:"scanner"};function z0(n){return{size:n,cells:new Array(n.x*n.y*n.z).fill(null),rev:0}}function Wa(n,t,e,i){return t>=0&&e>=0&&i>=0&&t<n.size.x&&e<n.size.y&&i<n.size.z}function Xa(n,t,e,i){return t+e*n.size.x+i*n.size.x*n.size.y}function Ue(n,t,e,i){return Wa(n,t,e,i)?n.cells[Xa(n,t,e,i)]:null}function Ea(n,t,e,i,r){Wa(n,t,e,i)&&(n.cells[Xa(n,t,e,i)]=r,n.rev++)}function ar(n,t){let e=0;for(const i of n.cells)i&&i.type===t&&e++;return e}function nn(n){const t=n.length,e=Math.max(...n.map(s=>s.length)),i=Math.max(...n.map(s=>Math.max(...s.map(a=>a.length)))),r=z0({x:i,y:t,z:e});for(let s=0;s<t;s++)for(let a=0;a<e;a++){const o=n[s][a]??"";for(let c=0;c<i;c++){const u=O0[o[c]??"."];u&&(r.cells[Xa(r,c,s,a)]={type:u,hp:N0[u]})}}return r.rev=1,r}const ya=()=>({throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1}),mu=[["THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT"],["HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHEEHHH","HHHEEHHH"],["........","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHCCHHH","HHHCCHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","........"]],B0=[[".GG.",".GG.","HGGH","HHHH","HHHH","HHHH"],["....","....",".HH.",".HH.",".HH.",".HH."]],k0=-.09,G0=1.05,V0=1.4,Dn=(n,t,e)=>n<t?t:n>e?e:n;function gu(n,t){let e=0;for(const s of[n,t])for(const a of s.cells)a&&(e+=F0[a.type]);const i=90/Math.sqrt(e),r=ar(n,"tread");return{mass:e,topSpeed:i,accel:i/2.5,turnRate:1.8*Dn(r/24,.5,1.5),turretSlew:2.2}}function _u(n,t,e,i){const r=nn(mu),s=nn(B0);return{id:n,hull:r,turret:s,x:t,z:e,heading:i,speed:0,turretYaw:0,gunPitch:0,stats:gu(r,s),turretPivot:{x:0,y:r.size.y*ne,z:.3},alive:!0,cooldown:0,spawnTick:0}}const W0=[["THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHEEHH","HHEEHH"],["......","HHHHHH","HHHHHH","HHHHHH","HHCCHH","HHCCHH","HHHHHH","HHHHHH","HHHHHH","......"]],X0=[[".G.","HGH","HHH","HHH"],["...","...",".H.",".H."]],Y0=mu.map((n,t)=>t===0?n.map(()=>"TTHHHHTT"):n),q0=[[".GG.",".GG.",".GG.","HGGH","HHHH","HHHH","HHHH"],["....","....","....",".HH.",".HH.",".HH.",".HH."]];function K0(n,t,e,i,r){const s=nn(t==="slow"?W0:Y0),a=nn(t==="slow"?X0:q0),o=gu(s,a),c=t==="slow"?.5:1.2;return o.topSpeed*=c,o.accel=o.topSpeed/2.5,o.turretSlew=t==="slow"?.785:2.094,{id:n,hull:s,turret:a,x:e,z:i,heading:r,speed:0,turretYaw:0,gunPitch:0,stats:o,turretPivot:{x:0,y:s.size.y*ne,z:.3},alive:!0,cooldown:0,spawnTick:0}}function vu(n,t){const e=Math.cos(n.heading),i=Math.sin(n.heading);return[n.x+t[0]*e+t[2]*i,t[1],n.z-t[0]*i+t[2]*e]}function Ya(n,t){const e=Math.cos(n.heading),i=Math.sin(n.heading),r=t[0]-n.x,s=t[2]-n.z;return[r*e-s*i,t[1],r*i+s*e]}function qa(n,t){const e=Math.cos(n.gunPitch),i=Math.sin(n.gunPitch),r=t[1]*e+t[2]*i,s=-t[1]*i+t[2]*e,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),c=t[0]*a+s*o,u=-t[0]*o+s*a;return vu(n,[c+n.turretPivot.x,r+n.turretPivot.y,u+n.turretPivot.z])}function xu(n,t){const e=Ya(n,t),i=e[0]-n.turretPivot.x,r=e[1]-n.turretPivot.y,s=e[2]-n.turretPivot.z,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),c=i*a-s*o,u=i*o+s*a,h=Math.cos(n.gunPitch),f=Math.sin(n.gunPitch);return[c,r*h-u*f,r*f+u*h]}function Su(n){const t=n.heading+n.turretYaw,e=Math.cos(n.gunPitch);return[e*Math.sin(t),Math.sin(n.gunPitch),e*Math.cos(t)]}function $0(n,t,e,i){const r=Dn(t.throttle,-1,1)*n.stats.topSpeed,s=n.stats.accel*e;n.speed+=Dn(r-n.speed,-s,s),n.heading+=Dn(t.turn,-1,1)*n.stats.turnRate*e,n.x+=Math.sin(n.heading)*n.speed*e,n.z+=Math.cos(n.heading)*n.speed*e;const a=i-1.5;n.x=Dn(n.x,-a,a),n.z=Dn(n.z,-a,a),n.turretYaw+=Dn(t.turretYaw,-1,1)*n.stats.turretSlew*e,n.gunPitch=Dn(n.gunPitch+Dn(t.gunPitch,-1,1)*V0*e,k0,G0)}const Z0=[["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],j0=[["HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH"],["",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",""],["","","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","",""],["","","","...HHH...","...HHH...","...HHH...","","",""],["","","","","....H....","","","",""]];function pc(n){return nn(n==="cube"?Z0:j0)}const Mu=[{kind:"cube",x:24,z:30},{kind:"cube",x:-38,z:12},{kind:"cube",x:60,z:-45},{kind:"cube",x:-70,z:-60},{kind:"cube",x:10,z:-90},{kind:"cube",x:95,z:70},{kind:"cube",x:-110,z:85},{kind:"pyramid",x:-15,z:55},{kind:"pyramid",x:45,z:80},{kind:"pyramid",x:-60,z:-20},{kind:"pyramid",x:80,z:-10},{kind:"pyramid",x:-95,z:-105},{kind:"pyramid",x:130,z:20}],J0=[["HHHHHHHHHH"],["HHHHHHHHHH"],["HHHHHHHHHH"]],Q0=[["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],t_=[["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"]],e_=[["HHHH","HAAH","HAAH","HHHH"],["HHHH","HAAH","HAAH","HHHH"]],n_=[["HH.","HHH",".HH"],["HH.",".H.","..."]],i_=[["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG"],["..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG.."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."]],r_=[["H"],["H"],["H"],["G"]];function s_(n){switch(n){case"wall":return nn(J0);case"bunker":return nn(Q0);case"tower":return nn(t_);case"depot":return nn(e_);case"rocks":return nn(n_);case"scan":return nn(i_);case"pylon":return nn(r_);case"cube":return pc("cube");case"pyramid":return pc("pyramid")}}function Qe(n,t,e,i){return{id:n,kind:t,grid:s_(t),x:e,z:i}}[Qe(100,"wall",-20,-35),Qe(101,"wall",35,55),Qe(102,"bunker",-55,40),Qe(103,"tower",70,-70),Qe(104,"depot",15,-55),Qe(105,"scan",-40,-80),Qe(106,"pylon",-6,70),Qe(107,"pylon",6,70),...Mu.map((n,t)=>Qe(200+t,n.kind,n.x,n.z))];function Eu(n,t){const e=[];for(let i=0;i<n.size.z;i++)for(let r=0;r<n.size.y;r++)for(let s=0;s<n.size.x;s++){const a=Ue(n,s,r,i);if(!a)continue;(t==="hull"?a.type==="core":t==="turret"?a.type==="gun":r===0)&&e.push([s,r,i])}return e}const o_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Mo(n,t){if(t.length===0){const s=[];for(let a=0;a<n.size.z;a++)for(let o=0;o<n.size.y;o++)for(let c=0;c<n.size.x;c++)Ue(n,c,o,a)&&s.push([c,o,a]);for(const a of s)Ea(n,a[0],a[1],a[2],null);return s}const e=new Set,i=[...t];for(const s of t)e.add(s.join(","));for(;i.length;){const s=i.pop();for(const a of o_){const o=s[0]+a[0],c=s[1]+a[1],u=s[2]+a[2],h=`${o},${c},${u}`;e.has(h)||!Ue(n,o,c,u)||(e.add(h),i.push([o,c,u]))}}const r=[];for(let s=0;s<n.size.z;s++)for(let a=0;a<n.size.y;a++)for(let o=0;o<n.size.x;o++)Ue(n,o,a,s)&&!e.has(`${o},${a},${s}`)&&r.push([o,a,s]);for(const s of r)Ea(n,s[0],s[1],s[2],null);return r}function bs(n,t,e,i){const r=ne,s=[t[0]/r+n.size.x/2,t[1]/r,t[2]/r+n.size.z/2],a=[e[0]/r,e[1]/r,e[2]/r];if(a[0]===0&&a[1]===0&&a[2]===0)return[];const o=[Math.floor(s[0]),Math.floor(s[1]),Math.floor(s[2])],c=[a[0]>0?1:a[0]<0?-1:0,a[1]>0?1:a[1]<0?-1:0,a[2]>0?1:a[2]<0?-1:0],u=[a[0]!==0?Math.abs(1/a[0]):1/0,a[1]!==0?Math.abs(1/a[1]):1/0,a[2]!==0?Math.abs(1/a[2]):1/0],h=[0,1,2].map(d=>a[d]===0?1/0:((c[d]>0?o[d]+1:o[d])-s[d])/a[d]),f=[];let l=0;for(let d=0;d<1024&&!(l>i);d++){Wa(n,o[0],o[1],o[2])&&Ue(n,o[0],o[1],o[2])&&f.push({cell:[o[0],o[1],o[2]],t:l});const g=h[0]<=h[1]?h[0]<=h[2]?0:2:h[1]<=h[2]?1:2;l=h[g],o[g]+=c[g],h[g]+=u[g]}return f}const a_=120,yu=.9,l_=6,c_=1,u_=2.5,h_=3,Tu=400,f_=72,Ns=36e3,bu=7200,d_=45,p_={hull:2,tread:2,gun:1.5,engine:2,core:3,ammo:1,scanner:5},Au=7,m_=6,g_=6,__=2400,v_=30,x_=150,S_=300,M_=180,E_=120;function ps(n,t){return t.alive&&n.tick-t.spawnTick>=E_}function wu(n,t,e){const i=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.hypot(i[0],i[1],i[2]);if(r<1e-6)return!0;const s=[i[0]/r,i[1]/r,i[2]/r];for(const a of n.structures){if(a.grid.cells.every(c=>!c))continue;const o=[t[0]-a.x,t[1],t[2]-a.z];if(bs(a.grid,o,s,r).length)return!1}return!0}function y_(n,t,e,i,r){let s=i,a="max";if(e[1]<-1e-6){const o=-t[1]/e[1];o>=0&&o<s&&(s=o,a="ground")}for(const o of n.structures){if(o.grid.cells.every(h=>!h))continue;const c=[t[0]-o.x,t[1],t[2]-o.z],u=bs(o.grid,c,e,s);u.length&&u[0].t<s&&(s=u[0].t,a="grid")}for(const o of n.tanks)if(!(!o.alive||o.id===r))for(const c of["hull","turret"]){const u=c==="hull"?o.hull:o.turret,h=c==="hull"?Ya:xu,f=h(o,t),l=T_(h(o,[t[0]+e[0],t[1]+e[1],t[2]+e[2]]),f),d=bs(u,f,l,s);d.length&&d[0].t<s&&(s=d[0].t,a="grid")}return{pos:[t[0]+e[0]*s,t[1]+e[1]*s,t[2]+e[2]*s],hit:a}}const T_=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]];function jr(n,t,e,i){let r=n.awareness.get(t.id);r||(r=new Map,n.awareness.set(t.id,r)),r.set(e.id,{x:e.x,z:e.z,heading:e.heading,turretYaw:e.turretYaw,tick:n.tick,source:i})}function b_(n){const t=n.tanks.filter(i=>i.alive),e=n.tick%6===0;for(const i of t){let r=n.awareness.get(i.id);r||(r=new Map,n.awareness.set(i.id,r));for(const[s,a]of r){const o=a.source==="gunfire"||a.source==="ping"?M_:S_;n.tick-a.tick>o&&r.delete(s)}if(!(n.stormUntil>n.tick))for(const s of n.tanks){if(s.id===i.id||!ps(n,s))continue;const a=Math.hypot(s.x-i.x,s.z-i.z);a<=v_?jr(n,i,s,"proximity"):e&&a<=x_&&wu(n,[i.x,1.2,i.z],[s.x,1.2,s.z])&&jr(n,i,s,"los")}}for(const i of n.events)if(i.kind==="fire"){const r=n.tanks.find(s=>s.id===i.owner);if(!r||!ps(n,r))continue;for(const s of t)s.id!==r.id&&jr(n,s,r,"gunfire")}else if(i.kind==="scanPing")for(const r of t)for(const s of n.tanks)s.id!==r.id&&ps(n,s)&&jr(n,r,s,"ping")}const Ru={slow:{speedMul:.5,slew:.785,thinkTicks:24,err:.105,cooldown:[2.5,3.5],range:[60,100],blockedPolicy:"reposition"},super:{speedMul:1.2,slew:2.094,thinkTicks:15,err:.035,cooldown:[1.4,2],range:[40,80],blockedPolicy:"shoot"}};function A_(n,t=!1){return{kind:n,mode:"approach",targetId:null,playerTracker:t,aim:null,strafe:1,nextThink:0,blockedTicks:0,stuckTicks:0,lastShotTick:-9999,shotsAtContact:0,reposition:null,lastX:0,lastZ:0,debug:{intent:null,los:!1,err:0}}}const di=(n,t,e)=>n<t?t:n>e?e:n,Ta=(n,t)=>Math.atan2(t.x-n.x,t.z-n.z),Eo=n=>{for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n};function w_(n,t){const e=n.awareness.get(t.id);if(!e)return null;const i=[];for(const[s,a]of e){const o=n.tanks.find(c=>c.id===s);!o||!ps(n,o)||i.push({id:s,k:a})}if(R_(n,t)){const s=i.find(a=>a.id===0);if(s)return s}const r=i.filter(s=>s.id!==0).sort((s,a)=>a.k.tick-s.k.tick);return r.length?r[0]:i.sort((s,a)=>a.k.tick-s.k.tick)[0]??null}function R_(n,t){return n.brains.get(t.id)?.playerTracker??!1}function C_(n,t,e){const i=Ru[t.kind],r={throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1};if(n.tick<t.nextThink)return mc(n,t,e,r,i);t.nextThink=n.tick+i.thinkTicks;const s=w_(n,e);if(!s)return t.mode="approach",t.targetId=null,t.aim=null,t.debug.intent=null,r;const a=s.k;t.targetId!==s.id&&(t.shotsAtContact=0),t.targetId=s.id;const o=Math.hypot(a.x-e.x,a.z-e.z),c=wu(n,[e.x,1.2,e.z],[a.x,1.2,a.z]);if(t.debug.los=c,t.blockedTicks=c?0:t.blockedTicks+i.thinkTicks,t.mode==="reposition"&&t.reposition)Math.hypot(t.reposition.x-e.x,t.reposition.z-e.z)<6&&(t.mode="approach",t.reposition=null);else if(!c&&t.blockedTicks>180){if(i.blockedPolicy==="reposition"){t.mode="reposition";const u=n.rng.next()*Math.PI*2;t.reposition={x:di(a.x+Math.sin(u)*40,-190,190),z:di(a.z+Math.cos(u)*40,-190,190)}}}else o>i.range[1]+20?t.mode="approach":o>=i.range[0]*.6&&(t.mode="engage");return t.aim={x:a.x,z:a.z},t.debug.intent=[a.x,1.2,a.z],mc(n,t,e,r,i)}function mc(n,t,e,i,r){const s=t.mode==="reposition"&&t.reposition?t.reposition:t.aim?P_(t,e,t.aim,r):null;if(s){const a=Ta(e,s),o=Eo(a-e.heading);i.turn=di(o*2,-1,1),i.throttle=Math.abs(o)>1.2?.2:t.mode==="engage"?.5:1;const c=Math.hypot(e.x-t.lastX,e.z-t.lastZ);if(i.throttle>0&&c<.02?t.stuckTicks+=r.thinkTicks:t.stuckTicks=0,t.lastX=e.x,t.lastZ=e.z,t.stuckTicks>90){t.stuckTicks=0,t.mode="reposition";const u=n.rng.next()*Math.PI*2;t.reposition={x:di(e.x+Math.sin(u)*30,-190,190),z:di(e.z+Math.cos(u)*30,-190,190)}}}if(t.aim){const a=Eo(Ta(e,t.aim)-e.heading),o=Eo(a-e.turretYaw);i.turretYaw=di(o*3,-1,1);const c=Math.hypot(t.aim.x-e.x,t.aim.z-e.z),u=Math.atan2(1.2-1.2,c);i.gunPitch=di((u-e.gunPitch)*3,-1,1);const h=Math.abs(o)<.1,f=c<r.range[1]+40,l=t.debug.los||r.blockedPolicy==="shoot";if(h&&f&&l&&e.cooldown===0&&t.mode!=="reposition"){const d=1+c/100,g=t.shotsAtContact===0?2:1,_=r.err*d*g;t.debug.err=_;const m=(n.rng.next()-.5)*2*_;e.turretYaw+=m,i.fire=!0,t.shotsAtContact++,t.lastShotTick=n.tick}}return i}function P_(n,t,e,i){if(n.mode!=="engage")return e;const r=Ta(e,t)+n.strafe*.5,s=(i.range[0]+i.range[1])/2;return{x:e.x+Math.sin(r)*s,z:e.z+Math.cos(r)*s}}function D_(){return{state:"dormant",untilTick:Ns-bu,nextBomb:0,bombsLeft:0}}function H_(n){const t=n.volcano;if(n.sky.volcano&&!(n.tick<Ns-bu))if(t.state==="dormant")t.state="rumble",t.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"});else if(t.state==="rumble")n.tick>=t.untilTick&&(t.state="erupt",t.untilTick=n.tick+600,t.bombsLeft=10+Math.floor(n.rng.next()*7),t.nextBomb=n.tick+30,n.events.push({kind:"volcanoErupt"}));else if(t.state==="erupt"){if(t.bombsLeft>0&&n.tick>=t.nextBomb){const e=(n.rng.next()-.5)*320,i=(n.rng.next()-.5)*320;n.telegraphs.push({x:e,z:i,impactTick:n.tick+90,radius:Au,kind:"volcano"}),n.events.push({kind:"bombTelegraph",pos:[e,0,i]}),t.bombsLeft--,t.nextBomb=n.tick+45}n.tick>=t.untilTick&&(t.state="cooldown",t.untilTick=n.tick+1200)}else t.state==="cooldown"&&n.tick>=t.untilTick&&(t.state="rumble",t.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"}))}function L_(n,t,e,i="volcano"){if(i==="volcano"){if(n.lavaPools.push({x:t,z:e,radius:g_+n.rng.next()*2,untilTick:n.tick+__}),n.rng.next()<.35){const r=Math.max(-190,Math.min(190,t+8)),s=Math.max(-190,Math.min(190,e+8));n.structures.push(Qe(n.nextId++,"rocks",r,s))}}else{const r=Math.max(-190,Math.min(190,t+3.5)),s=Math.max(-190,Math.min(190,e+3.5));n.structures.push(Qe(n.nextId++,"rocks",r,s))}}const ur={slow:100,missile:250,super:500,bomber:1e3,block:5},Cu=7200,U_=90,I_=4,ba=(n,t,e)=>n<t?t:n>e?e:n,Ka=n=>{const t=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/t,n[1]/t,n[2]/t]};function Pu(n,t,e){const i=ba(n[0]*t[0]+n[1]*t[1]+n[2]*t[2],-1,1),r=Math.acos(i);if(r<=e||r<1e-6)return t;const s=e/r;return Ka([n[0]+(t[0]-n[0])*s,n[1]+(t[1]-n[1])*s,n[2]+(t[2]-n[2])*s])}function N_(n){const t=n.tanks[0];for(let i=0;i<24;i++){const r=n.rng.next()*Math.PI*2,s=100+n.rng.next()*40,a=ba(t.x+Math.sin(r)*s,-190,190),o=ba(t.z+Math.cos(r)*s,-190,190);let c=!0;for(const u of n.structures){if(!u.grid.cells.some(l=>l))continue;const h=u.grid.size.x*ne/2+5,f=u.grid.size.z*ne/2+5;if(Math.abs(a-u.x)<h&&Math.abs(o-u.z)<f){c=!1;break}}if(c&&n.tanks.every(u=>!u.alive||Math.hypot(u.x-a,u.z-o)>14))return{x:a,z:o}}const e=n.rng.next()*Math.PI*2;return{x:Math.sin(e)*170,z:Math.cos(e)*170}}function gc(n,t){const e=N_(n),i=K0(n.nextId++,t,e.x,e.z,Math.atan2(n.tanks[0].x-e.x,n.tanks[0].z-e.z));i.spawnTick=n.tick,n.tanks.push(i),n.brains.set(i.id,A_(t)),t==="super"&&n.events.push({kind:"superSpawn",pos:[e.x,1,e.z]})}function F_(n){const t=n.tanks.filter(r=>r.id!==0&&r.alive&&n.brains.has(r.id));if(!t.length||t.filter(r=>n.brains.get(r.id).playerTracker).length===1)return;for(const r of t)n.brains.get(r.id).playerTracker=!1;const i=t.find(r=>n.brains.get(r.id).kind==="slow")??t[0];n.brains.get(i.id).playerTracker=!0}function O_(n){const t=n.tanks.filter(u=>u.alive);if(!t.length)return;const i=n.rng.next()<.55&&t.some(u=>u.id===0)?n.tanks[0]:t[Math.floor(n.rng.next()*t.length)],r=n.rng.next()*Math.PI*2,s=[Math.sin(r)*205,11+n.rng.next()*5,Math.cos(r)*205],a=n.rng.next()<.6,o=Ka([i.x-s[0],-.03,i.z-s[2]]),c=n.nextId++;n.missiles.push({id:c,pos:s,dir:o,speed:14+n.rng.next()*4,age:0,alive:!0,targetId:i.id,tracking:a,turnRate:a?.45:0}),i.id===0&&n.events.push({kind:"missileLock",id:c,pos:s})}function z_(n){if(n.phase==="play"){let t=n.tanks.filter(i=>i.alive&&n.brains.get(i.id)?.kind==="slow").length;for(;t<I_&&n.tick>=n.nextSpawnTick;)gc(n,"slow"),t++,n.nextSpawnTick=n.tick+90;if(!n.tanks.some(i=>i.alive&&n.brains.get(i.id)?.kind==="super")&&n.tick>=n.nextSuperTick&&(gc(n,"super"),n.nextSuperTick=n.tick+7200+Math.floor(n.rng.next()*3600)),F_(n),n.tick>=n.nextMissileTick&&n.missiles.filter(i=>i.alive).length<3&&(O_(n),n.nextMissileTick=n.tick+1500+Math.floor(n.rng.next()*1800)),!n.bomber&&n.tick>=n.nextBomberTick){const i=n.tanks[0].alive?n.tanks[0]:n.tanks.find(f=>f.alive)??n.tanks[0],r=i.x,s=i.z,o=Math.hypot(r,s)<1e-6?n.rng.next()*Math.PI*2:Math.atan2(r,s),c=[Math.sin(o),0,Math.cos(o)],u=i.x-c[0]*205,h=i.z-c[2]*205;n.bomber={id:n.nextId++,pos:[u,15,h],dir:c,speed:8,hp:3,alive:!0,nextBomb:n.tick+60,targetId:i.id},n.nextBomberTick=n.tick+Cu,n.events.push({kind:"bomberInbound",pos:[u,15,h]})}}B_(n),k_(n),G_(n)}function B_(n){for(const t of n.missiles){if(!t.alive)continue;t.age++;const e=n.tanks.find(r=>r.id===t.targetId);if(t.tracking&&e?.alive){const r=Ka([e.x-t.pos[0],1-t.pos[1],e.z-t.pos[2]]);t.dir=Pu(t.dir,r,t.turnRate/60)}t.pos[0]+=t.dir[0]*t.speed/60,t.pos[1]+=t.dir[1]*t.speed/60,t.pos[2]+=t.dir[2]*t.speed/60;for(const r of n.shells)if(Math.hypot(r.pos[0]-t.pos[0],r.pos[1]-t.pos[1],r.pos[2]-t.pos[2])<1.8){t.alive=!1,r.alive=!1,n.events.push({kind:"kill",id:t.id,what:"missile",by:r.owner}),n.events.push({kind:"explosion",pos:[t.pos[0],t.pos[1],t.pos[2]],radius:1.5,damage:2,source:"airburst"});break}if(!t.alive)continue;let i=t.pos[1]<=.35;if(!i&&t.pos[1]<3){for(const r of n.tanks)if(r.alive&&Math.hypot(r.x-t.pos[0],r.z-t.pos[2])<2.2){i=!0;break}}i?(t.alive=!1,n.pendingExplosions.push({pos:[t.pos[0],.5,t.pos[2]],radius:3,damage:4,source:"missile"})):(t.age>1200||Math.abs(t.pos[0])>220||Math.abs(t.pos[2])>220)&&(t.alive=!1)}n.missiles=n.missiles.filter(t=>t.alive)}function k_(n){const t=n.bomber;if(!t||!t.alive){t&&!t.alive&&(n.bomber=null);return}const e=n.tanks.find(i=>i.id===t.targetId&&i.alive)??n.tanks[0];if(e.alive){const i=[e.x-t.pos[0],0,e.z-t.pos[2]],r=Math.hypot(i[0],i[2])||1;t.dir=Pu(t.dir,[i[0]/r,0,i[2]/r],.0025)}if(t.pos[0]+=t.dir[0]*t.speed/60,t.pos[2]+=t.dir[2]*t.speed/60,n.tick>=t.nextBomb){let i=t.pos[0],r=t.pos[2];for(const s of n.tanks)if(s.alive&&Math.hypot(s.x-t.pos[0],s.z-t.pos[2])<4){i=s.x,r=s.z;break}n.telegraphs.push({x:i,z:r,impactTick:n.tick+U_,radius:2,kind:"bomb"}),n.events.push({kind:"bombTelegraph",pos:[i,0,r]}),t.nextBomb=n.tick+d_}for(const i of n.shells)if(i.pos[1]>10&&Math.abs(i.pos[1]-t.pos[1])<3.5&&Math.hypot(i.pos[0]-t.pos[0],i.pos[2]-t.pos[2])<5.5){t.hp--,i.alive=!1,t.hp<=0&&(t.alive=!1,n.events.push({kind:"kill",id:t.id,what:"bomber",by:i.owner}),n.events.push({kind:"explosion",pos:[t.pos[0],t.pos[1],t.pos[2]],radius:3,damage:0,source:"airburst"}));break}(Math.abs(t.pos[0])>220||Math.abs(t.pos[2])>220)&&(t.alive=!1),t.alive||(n.bomber=null)}function G_(n){const t=n.telegraphs.filter(e=>n.tick>=e.impactTick);if(t.length){n.telegraphs=n.telegraphs.filter(e=>n.tick<e.impactTick);for(const e of t){const i=e.kind==="volcano",r=e.kind==="meteor";n.pendingExplosions.push({pos:[e.x,.5,e.z],radius:i?Au:r?4:e.radius,damage:i?m_:r?5:3,source:i?"volcano":r?"meteor":"bomb"}),e.kind!=="bomb"&&L_(n,e.x,e.z,e.kind)}}}function $a(n,t){const e=n.structures.find(r=>r.id===t.pylonA),i=n.structures.find(r=>r.id===t.pylonB);return!!e&&!!i&&e.grid.cells.some(r=>r)&&i.grid.cells.some(r=>r)}function V_(n,t,e,i){if(t[1]>n.height||t[1]+e[1]*i<0)return null;const r=n.bx-n.ax,s=n.bz-n.az,a=e[0]*s-e[2]*r;if(Math.abs(a)<1e-9)return null;const o=n.ax-t[0],c=n.az-t[2],u=(o*s-c*r)/a,h=(o*e[2]-c*e[0])/a;return u<0||u>i||h<0||h>1?null:u}function W_(n,t,e,i){const r=n.bx-n.ax,s=n.bz-n.az,a=r*r+s*s;let o=((t-n.ax)*r+(e-n.az)*s)/a;o=Math.max(0,Math.min(1,o));const c=n.ax+r*o,u=n.az+s*o,h=t-c,f=e-u,l=Math.hypot(h,f);if(l>=i||l<1e-9)return null;const d=(i-l)/l;return{x:h*d,z:f*d}}const Jr=n=>Mu.filter(t=>!n||n(t)).map(t=>({kind:t.kind,x:t.x,z:t.z})),Qr=(n,t,e,i,r,s,a)=>({id:n,ax:t,az:e,bx:i,bz:r,pylonA:s,pylonB:a,height:2.4}),Du={classic:{id:"classic",label:"CLASSIC",placements:[{kind:"wall",x:-20,z:-35},{kind:"wall",x:35,z:55},{kind:"bunker",x:-55,z:40},{kind:"tower",x:70,z:-70},{kind:"depot",x:15,z:-55},{kind:"scan",x:-40,z:-80},{kind:"pylon",x:-6,z:70},{kind:"pylon",x:6,z:70},...Jr()],fences:[Qr(300,-6,70,6,70,106,107)],sky:{storm:!1,meteors:!1,volcano:!0}},outpost:{id:"outpost",label:"OUTPOST",placements:[{kind:"wall",x:-30,z:-20},{kind:"wall",x:30,z:-20},{kind:"wall",x:-30,z:20},{kind:"wall",x:30,z:20},{kind:"bunker",x:0,z:-45},{kind:"bunker",x:0,z:45},{kind:"depot",x:-45,z:0},{kind:"depot",x:45,z:0},{kind:"tower",x:-60,z:-60},{kind:"tower",x:60,z:60},{kind:"scan",x:0,z:0},{kind:"pylon",x:-12,z:70},{kind:"pylon",x:12,z:70},...Jr(n=>Math.abs(n.x)>80||Math.abs(n.z)>80)],fences:[Qr(300,-12,70,12,70,111,112)],sky:{storm:!1,meteors:!1,volcano:!0}},ruins:{id:"ruins",label:"RUINS",placements:[{kind:"wall",x:-15,z:-15},{kind:"wall",x:15,z:-15},{kind:"wall",x:-15,z:15},{kind:"wall",x:15,z:15},{kind:"bunker",x:-40,z:-40},{kind:"bunker",x:40,z:-40},{kind:"bunker",x:-40,z:40},{kind:"bunker",x:40,z:40},{kind:"tower",x:0,z:-60},{kind:"tower",x:0,z:60},{kind:"tower",x:-60,z:0},{kind:"tower",x:60,z:0},{kind:"depot",x:-70,z:-70},{kind:"depot",x:70,z:70},{kind:"scan",x:-80,z:20},...Jr(n=>Math.abs(n.x)>90||Math.abs(n.z)>90)],fences:[],sky:{storm:!1,meteors:!1,volcano:!0}},stormfield:{id:"stormfield",label:"STORMFIELD",placements:[{kind:"rocks",x:-20,z:-20},{kind:"rocks",x:25,z:10},{kind:"rocks",x:-10,z:40},{kind:"rocks",x:50,z:-40},{kind:"pylon",x:-20,z:60},{kind:"pylon",x:20,z:60},{kind:"pylon",x:-60,z:-30},{kind:"pylon",x:-60,z:10},{kind:"scan",x:70,z:30},...Jr(n=>n.kind==="pyramid")],fences:[Qr(300,-20,60,20,60,104,105),Qr(301,-60,-30,-60,10,106,107)],sky:{storm:!0,meteors:!0,volcano:!0}}},X_=["classic","outpost","ruins","stormfield"],Y_=420,q_=9e3;function K_(n){const t=n.sky;if(t.storm&&n.tick>=n.nextStormTick&&n.stormUntil<=n.tick&&(n.stormUntil=n.tick+Y_,n.nextStormTick=n.tick+24e3+Math.floor(n.rng.next()*12e3),n.events.push({kind:"ionStorm"})),t.meteors&&n.tick>=n.nextMeteorTick){const e=(n.rng.next()-.5)*300,i=(n.rng.next()-.5)*300;n.telegraphs.push({x:e,z:i,impactTick:n.tick+90,radius:2,kind:"meteor"}),n.events.push({kind:"meteorInbound",pos:[e,0,i]}),n.nextMeteorTick=n.tick+q_+Math.floor(n.rng.next()*3e3)}}const $_=60,Zn=1/$_;function Z_(n,t="classic"){const e=Du[t];return{seed:n,tick:0,rng:I0(n),arenaHalf:200,tanks:[_u(0,0,0,0)],structures:e.placements.map((i,r)=>Qe(100+r,i.kind,i.x,i.z)),shells:[],chunks:[],rubble:[],rubbleRev:0,events:[],pendingExplosions:[],nextId:1,awareness:new Map,brains:new Map,missiles:[],bomber:null,telegraphs:[],fences:e.fences.map(i=>({...i})),sky:e.sky,nextStormTick:15e3,nextMeteorTick:6e3,volcano:D_(),lavaPools:[],stormUntil:0,score:0,lives:3,phase:"play",nextSpawnTick:120,nextSuperTick:9e3,nextMissileTick:1800,nextBomberTick:Cu,respawnTick:0,nextLifeAt:1e4,lastHitBy:new Map}}function Za(n){const t=n.structures.map(e=>({g:e.grid,structure:e}));for(const e of n.tanks)e.alive&&t.push({g:e.hull,tank:e,part:"hull"},{g:e.turret,tank:e,part:"turret"});return t}function j_(n,t){return[(t[0]-n.size.x/2+.5)*ne,(t[1]+.5)*ne,(t[2]-n.size.z/2+.5)*ne]}function Fs(n,t){const e=j_(n.g,t);return n.structure?[n.structure.x+e[0],e[1],n.structure.z+e[2]]:n.part==="turret"?qa(n.tank,e):vu(n.tank,e)}const ms=(n,t)=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]],Hu=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Aa=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],J_=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]);function ja(n,t,e,i,r){const s=Ue(t.g,e[0],e[1],e[2]);if(!s)return;const a=Fs(t,e);Ea(t.g,e[0],e[1],e[2],null),i.set(t.g,t),n.events.push({kind:"blockDestroyed",pos:a,by:r}),s.type==="ammo"&&n.pendingExplosions.push({pos:a,radius:u_,damage:h_,source:"ammo"});for(const o of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const c=[e[0]+o[0],e[1]+o[1],e[2]+o[2]],u=Ue(t.g,c[0],c[1],c[2]);u&&(u.hp-=c_,i.set(t.g,t),u.hp<=0&&ja(n,t,c,i,r))}}function As(n,t,e,i,r,s){const a=Ue(t.g,e[0],e[1],e[2]);a&&(a.hp-=i,r.set(t.g,t),a.hp<=0&&ja(n,t,e,r,s))}function Q_(n,t){const e=a_*Zn,i=Za(n);for(const r of n.shells){if(!r.alive)continue;let s=1/0;for(const o of n.fences){if(!$a(n,o))continue;const c=V_(o,r.pos,r.dir,e);c!==null&&c<s&&(s=c)}if(s!==1/0){r.pos=ms(r.pos,Aa(r.dir,s)),r.alive=!1,n.events.push({kind:"shellImpact",pos:[...r.pos]});continue}const a=[];for(const o of i){if(o.tank&&o.tank.id===r.owner)continue;let c,u;if(o.structure)c=[r.pos[0]-o.structure.x,r.pos[1],r.pos[2]-o.structure.z],u=r.dir;else{const h=o.part==="turret"?xu:Ya;c=h(o.tank,r.pos),u=Hu(h(o.tank,ms(r.pos,r.dir)),c)}for(const h of bs(o.g,c,u,e))a.push({t:h.t,ctx:o,cell:h.cell})}a.sort((o,c)=>o.t-c.t);for(const o of a){if(!r.alive)break;const c=Ue(o.ctx.g,o.cell[0],o.cell[1],o.cell[2]);if(!c)continue;const u=Fs(o.ctx,o.cell);o.ctx.tank&&n.lastHitBy.set(o.ctx.tank.id,r.owner);const h=p_[c.type];if(r.budget<h){As(n,o.ctx,o.cell,1,t,r.owner),r.alive=!1,n.events.push({kind:"shellImpact",pos:u});break}r.budget-=h,ja(n,o.ctx,o.cell,t,r.owner)}r.alive&&(r.pos=ms(r.pos,Aa(r.dir,e)),r.pos[1]<0?(r.alive=!1,n.events.push({kind:"shellImpact",pos:[r.pos[0],0,r.pos[2]]})):(Math.abs(r.pos[0])>n.arenaHalf||Math.abs(r.pos[2])>n.arenaHalf)&&(r.alive=!1))}n.shells=n.shells.filter(r=>r.alive)}function tv(n,t){const e=Za(n);for(;n.pendingExplosions.length;){const i=n.pendingExplosions.shift();n.events.push({kind:"explosion",pos:i.pos,radius:i.radius,damage:i.damage,source:i.source});for(const r of e)for(let s=0;s<r.g.size.z;s++)for(let a=0;a<r.g.size.y;a++)for(let o=0;o<r.g.size.x;o++){if(!Ue(r.g,o,a,s))continue;const c=[o,a,s];J_(Fs(r,c),i.pos)<=i.radius&&As(n,r,c,i.damage,t,null)}}}function _c(n){const t=new Map;for(let e=0;e<n.size.z;e++)for(let i=0;i<n.size.y;i++)for(let r=0;r<n.size.x;r++){const s=Ue(n,r,i,e);s&&t.set(`${r},${i},${e}`,s.type)}return t}function yo(n,t,e,i){if(!e.length)return;const r=e.map(o=>Fs(t,o)),s=[0,0,0];for(const o of r)s[0]+=o[0]/r.length,s[1]+=o[1]/r.length,s[2]+=o[2]/r.length;const a={id:n.nextId++,pos:s,vel:[(n.rng.next()-.5)*3,2+n.rng.next()*2,(n.rng.next()-.5)*3],angle:0,spin:(n.rng.next()-.5)*6,settleTick:n.tick+f_,cells:e.map((o,c)=>({off:Hu(r[c],s),type:i.get(o.join(","))??"hull"}))};n.chunks.push(a),n.events.push({kind:"chunkDetached",id:a.id})}function ev(n,t){const e=new Set,i=Za(n);for(const[r,s]of t){if(e.has(r))continue;e.add(r);const a=s.structure?"structure":s.part,o=_c(r),c=Eu(r,a);if(c.length===0){if(yo(n,s,Mo(r,[]),o),s.tank&&s.part==="hull"){s.tank.alive=!1;const u=n.lastHitBy.get(s.tank.id)??null;if(n.events.push({kind:"tankKilled",id:s.tank.id,pos:[s.tank.x,1,s.tank.z],by:u}),s.tank.id===0)n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+180;else if(u===0){const f=n.brains.get(s.tank.id);n.score+=f?.kind==="super"?ur.super:ur.slow}const h=i.find(f=>f.tank===s.tank&&f.part==="turret");h&&!e.has(h.g)&&(e.add(h.g),yo(n,h,Mo(h.g,[]),_c(h.g)))}}else{const u=Mo(r,c);u.length&&yo(n,s,u,o)}}}function nv(n){const t=[];for(const e of n.chunks)e.vel[1]-=9.8*Zn,e.pos=ms(e.pos,Aa(e.vel,Zn)),e.angle+=e.spin*Zn,(e.pos[1]<=.2||n.tick>=e.settleTick)&&t.push(e);if(t.length){n.chunks=n.chunks.filter(e=>!t.includes(e));for(const e of t)for(const i of e.cells)n.rubble.push({x:e.pos[0]+i.off[0],z:e.pos[2]+i.off[2],type:i.type,born:n.tick});for(;n.rubble.length>Tu;)n.rubble.shift();n.rubbleRev++,n.events.push({kind:"rubbleChanged"})}}function Lu(n,t=[]){if(n.events=[],n.phase==="over")return;n.tick+=1;const e=new Map;if(n.phase==="play"&&!n.tanks[0].alive&&n.respawnTick>0&&n.tick>=n.respawnTick){const i=n.rng.next()*Math.PI*2,r=_u(0,Math.sin(i)*120,Math.cos(i)*120,n.rng.next()*Math.PI*2);r.spawnTick=n.tick,n.tanks[0]=r,n.respawnTick=0}for(let i=0;i<n.tanks.length;i++){const r=n.tanks[i];if(!r.alive)continue;const s=n.brains.get(r.id),a=i===0?t[0]??ya():s?C_(n,s,r):ya();if($0(r,a,Zn,n.arenaHalf),r.cooldown=Math.max(0,r.cooldown-Zn),a.fire&&r.cooldown===0&&Eu(r.turret,"turret").length>0){const o=Su(r),c=qa(r,[0,ne,r.turret.size.z/2*ne+.15]);n.shells.push({id:n.nextId++,owner:r.id,pos:c,dir:o,budget:l_,alive:!0});const u=n.brains.get(r.id)?.kind,h=u?Ru[u].cooldown:null;r.cooldown=h?h[0]+n.rng.next()*(h[1]-h[0]):yu,n.events.push({kind:"fire",pos:c,dir:o,owner:r.id})}}if(Q_(n,e),z_(n),H_(n),K_(n),n.tick%600===0){for(const i of n.structures)if(i.kind==="scan"&&i.grid.cells.some(r=>r)){n.events.push({kind:"scanPing"});break}}tv(n,e);for(const i of n.tanks){if(!i.alive||Math.abs(i.speed)<.5)continue;const r=i.hull.size.z*ne/2;for(const s of n.structures){const a=s.grid.size.x*ne/2+r,o=s.grid.size.z*ne/2+r;if(Math.abs(i.x-s.x)>a||Math.abs(i.z-s.z)>o)continue;const c=i.x-s.x,u=i.z-s.z,h=Math.max(0,Math.floor((c-r)/ne+s.grid.size.x/2)),f=Math.min(s.grid.size.x-1,Math.ceil((c+r)/ne+s.grid.size.x/2)),l=Math.max(0,Math.floor((u-r)/ne+s.grid.size.z/2)),d=Math.min(s.grid.size.z-1,Math.ceil((u+r)/ne+s.grid.size.z/2));let g=!1;for(let _=l;_<=d;_++)for(let m=h;m<=f;m++)for(let p=0;p<s.grid.size.y;p++){if(!Ue(s.grid,m,p,_))continue;const b=s.x+(m-s.grid.size.x/2+.5)*ne,M=s.z+(_-s.grid.size.z/2+.5)*ne;Math.hypot(b-i.x,M-i.z)<r+.2&&(As(n,{g:s.grid,structure:s},[m,p,_],3,e,i.id),g=!0)}g&&(i.speed*=.85)}for(const s of n.fences){if(!$a(n,s))continue;const a=W_(s,i.x,i.z,i.hull.size.z*ne/2);a&&(i.x+=a.x,i.z+=a.z,i.speed*=.5)}}if(n.tick%30===0){for(const i of n.lavaPools)if(!(n.tick>=i.untilTick))for(const r of n.tanks){if(!r.alive||Math.hypot(r.x-i.x,r.z-i.z)>i.radius)continue;const s=[];for(let a=0;a<r.hull.size.z;a++)for(let o=0;o<r.hull.size.y;o++)for(let c=0;c<r.hull.size.x;c++)Ue(r.hull,c,o,a)&&s.push([c,o,a]);if(s.length){const a=s[Math.floor(n.rng.next()*s.length)];As(n,{g:r.hull,tank:r,part:"hull"},a,2,e,null)}}n.lavaPools=n.lavaPools.filter(i=>n.tick<i.untilTick)}ev(n,e),nv(n),b_(n);for(const i of n.events)i.kind==="blockDestroyed"&&i.by===0?n.score+=ur.block:i.kind==="kill"&&i.by===0&&(n.score+=i.what==="bomber"?ur.bomber:ur.missile);for(;n.score>=n.nextLifeAt;)n.lives++,n.nextLifeAt+=1e4;for(;n.rubble.length>Tu;)n.rubble.shift(),n.rubbleRev++;n.phase==="play"&&n.tick>=Ns&&(n.phase="over",n.events.push({kind:"matchEnd"}))}const iv=[{d:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{d:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{d:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{d:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{d:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{d:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];function Uu(n){const t=[],e=new Map,i=ne,r=f=>(f-n.size.x/2)*i,s=f=>f*i,a=f=>(f-n.size.z/2)*i,o=(f,l,d,g)=>[r(l+f[0]),s(d+f[1]),a(g+f[2])];for(let f=0;f<n.size.z;f++)for(let l=0;l<n.size.y;l++)for(let d=0;d<n.size.x;d++)if(Ue(n,d,l,f))for(const{d:g,corners:_}of iv){if(Ue(n,d+g[0],l+g[1],f+g[2]))continue;const m=_.map(p=>o(p,d,l,f));for(const p of[0,1,2,0,2,3])t.push(...m[p]);for(let p=0;p<4;p++){const b=m[p],M=m[(p+1)%4],S=b.map(A=>A.toFixed(4)).join(","),R=M.map(A=>A.toFixed(4)).join(","),w=S<R?`${S}|${R}`:`${R}|${S}`;e.has(w)||e.set(w,[...b,...M])}}const c=new fe;c.setAttribute("position",new le(t,3));const u=[];for(const f of e.values())u.push(...f);const h=new fe;return h.setAttribute("position",new le(u,3)),{faces:c,edges:h}}function rv(n,t,e,i=200,r=38){const s=Math.cos(e),a=Math.sin(e);let o=(n*s-t*a)*(r/i),c=-(n*a+t*s)*(r/i);const u=Math.hypot(o,c),h=u>r;return h&&(o*=r/u,c*=r/u),{x:o,y:c,clamped:h}}function ts(n,t){return n-t}const li=38,vc=200,xc=[16729139,16739133,12986408,16747109,12000284];function sv(n,t=255,e=!1){return"#"+(e?16723245:xc[Math.abs(n)%xc.length]).toString(16).padStart(6,"0")+Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function ov(){const n=document.createElement("canvas");n.id="hud",document.body.append(n);const t=n.getContext("2d"),e=document.createElement("div");e.id="alerts",document.body.append(e);const i=()=>{n.width=window.innerWidth,n.height=window.innerHeight};i(),window.addEventListener("resize",i);function r(o){const c=document.createElement("div");for(c.className="alert",c.textContent=o,e.append(c),setTimeout(()=>c.remove(),4200);e.children.length>3;)e.firstChild?.remove()}function s(o,c,u,h,f){t.fillStyle=f,t.beginPath(),t.moveTo(o+Math.sin(u)*h,c-Math.cos(u)*h),t.lineTo(o+Math.sin(u+2.55)*h*.75,c-Math.cos(u+2.55)*h*.75),t.lineTo(o+Math.sin(u-2.55)*h*.75,c-Math.cos(u-2.55)*h*.75),t.closePath(),t.fill()}function a(o){const c=n.width,u=n.height;t.clearRect(0,0,c,u);const h=o.palette,f=h.hud;t.fillStyle=f+"14",t.fillRect(0,0,c,90),t.strokeStyle=f+"88",t.beginPath(),t.moveTo(0,90.5),t.lineTo(c,90.5),t.stroke();const l=c/2,d=45;t.strokeStyle=f+"aa",t.beginPath(),t.arc(l,d,li,0,Math.PI*2),t.stroke(),t.strokeStyle=f+"44",t.beginPath(),t.arc(l,d,li*30/vc,0,Math.PI*2),t.stroke();const g=o.tick*.06;t.strokeStyle=f+"55",t.beginPath(),t.moveTo(l,d),t.lineTo(l+Math.sin(g)*li,d-Math.cos(g)*li),t.stroke();const _=(M,S)=>{const R=rv(M-o.x,S-o.z,o.heading,vc,li-3);return{x:l+R.x,y:d+R.y}};if(o.storm){t.fillStyle=f+"66";for(let M=0;M<60;M++){const S=Math.random()*Math.PI*2,R=Math.random()*li;t.fillRect(l+Math.sin(S)*R,d-Math.cos(S)*R,1.5,1.5)}}else{if(o.known)for(const[M,S]of o.known){const R=_(S.x,S.z),w=o.tick-S.tick,A=S.source==="gunfire"||S.source==="ping"?Math.max(0,1-w/180):1,U=Math.floor(A*255),y=o.superIds.has(M),E=sv(M,U,y),D=o.tankHeadings.get(M)??S.heading,O=o.tankTurrets.get(M)??S.turretYaw??0;s(R.x,R.y,ts(D,o.heading),y?6:4.5,E);const G=ts(D+O,o.heading);t.strokeStyle=E,t.beginPath(),t.moveTo(R.x,R.y),t.lineTo(R.x+Math.sin(G)*8,R.y-Math.cos(G)*8),t.stroke()}if(o.scanner){const M=_(o.scanner.x,o.scanner.z);t.fillStyle="#35e0ff",t.beginPath(),t.moveTo(M.x,M.y-4),t.lineTo(M.x+4,M.y),t.lineTo(M.x,M.y+4),t.lineTo(M.x-4,M.y),t.closePath(),t.fill()}for(const M of o.missiles){const S=_(M.x,M.z),R=M.targeted?5+Math.sin(o.tick*.4)*1.5:3.5;s(S.x,S.y,ts(M.heading,o.heading),R,M.targeted?"#ff4433":"#ffaa33")}if(o.bomber&&o.bomberBlip){const M=_(o.bomber.x,o.bomber.z);s(M.x,M.y,ts(o.bomber.heading,o.heading),6,f)}}s(l,d,0,6,h.worldCss),t.strokeStyle=f,t.beginPath(),t.moveTo(l,d),t.lineTo(l+Math.sin(o.turretYaw)*11,d-Math.cos(o.turretYaw)*11),t.stroke(),t.font="13px monospace",t.fillStyle=f,t.textAlign="left",t.fillText(`SCORE ${String(o.score).padStart(6,"0")}`,12,32),t.fillText(`LIVES ${o.lives}`,12,52);const m=Math.floor(o.secondsLeft/60),p=Math.floor(o.secondsLeft%60);if(t.textAlign="right",t.fillText(`T-${String(m).padStart(2,"0")}:${String(p).padStart(2,"0")}`,l-li-14,32),t.textAlign="left",o.alive){const M=c/2,S=u/2;t.strokeStyle=h.worldCss+"cc",t.beginPath(),t.moveTo(M-10,S),t.lineTo(M-4,S),t.moveTo(M+4,S),t.lineTo(M+10,S),t.moveTo(M,S-10),t.lineTo(M,S-4),t.moveTo(M,S+4),t.lineTo(M,S+10),t.stroke(),t.strokeStyle=f+"aa",t.beginPath(),t.arc(M,S,15,-Math.PI/2,-Math.PI/2+Math.PI*2*o.cooldownFrac),t.stroke();const R=S-o.elevation*40;t.strokeStyle=h.worldCss+"88",t.beginPath(),t.moveTo(M-6,R),t.lineTo(M+6,R),t.stroke()}const b=[["CORE",o.status.core],["TRD",o.status.tread],["GUN",o.status.gun],["ENG",o.status.engine]];if(t.font="10px monospace",b.forEach(([M,S],R)=>{const w=u-64+R*14;t.fillStyle=f+"cc",t.fillText(M,12,w+4),t.fillStyle=h.worldCss+"cc";for(let A=0;A<Math.min(S,12);A++)t.fillRect(44+A*7,w-3,5,5)}),t.font="11px monospace",t.textAlign="right",o.killfeed.slice(-4).forEach((M,S)=>{const R=o.now-M.born,w=Math.max(0,1-R/6e3);t.fillStyle=f+Math.floor(w*220).toString(16).padStart(2,"0"),t.fillText(M.text,c-12,u-60+S*14)}),t.textAlign="left",o.hitFlash&&o.now-o.hitFlash.born<450){const M=o.hitFlash.angle,S=1-(o.now-o.hitFlash.born)/450,R=Math.min(c,u)/2-40,w=c/2+Math.sin(M)*R,A=u/2-Math.cos(M)*R;t.fillStyle=f+Math.floor(S*255).toString(16).padStart(2,"0"),t.beginPath(),t.moveTo(w+Math.sin(M)*12,A-Math.cos(M)*12),t.lineTo(w+Math.sin(M+2.5)*8,A-Math.cos(M+2.5)*8),t.lineTo(w+Math.sin(M-2.5)*8,A-Math.cos(M-2.5)*8),t.closePath(),t.fill()}}return{canvas:n,draw:a,alert:r}}function av(n,t){return(t?1:0)-(n?1:0)}const tn=new Set,lv=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);function cv(n){lv.has(n.code)&&(n.preventDefault(),tn.add(n.code))}function uv(n){tn.delete(n.code)}function hv(){tn.clear()}function fv(){window.addEventListener("keydown",cv),window.addEventListener("keyup",uv),window.addEventListener("blur",hv)}function Iu(){const n=ya();n.throttle=(tn.has("KeyW")?1:0)-(tn.has("KeyS")?1:0),n.turn=(tn.has("KeyA")?1:0)-(tn.has("KeyD")?1:0),n.turretYaw=av(tn.has("ArrowLeft"),tn.has("ArrowRight")),n.gunPitch=(tn.has("ArrowUp")?1:0)-(tn.has("ArrowDown")?1:0),n.fire=tn.has("Space");const t=navigator.getGamepads?navigator.getGamepads():[];for(const e of t){if(!e)continue;const i=u=>Math.abs(u)>.15?u:0,r=i(e.axes[0]??0),s=i(e.axes[1]??0),a=i(e.axes[2]??0),o=i(e.axes[3]??0),c=!!e.buttons[0]?.pressed||!!e.buttons[7]?.pressed;if(r||s||a||o||c){n.throttle=-s,n.turn=-r,n.turretYaw=a,n.gunPitch=-o,n.fire=c;break}}return n}const dn=[{id:"green",label:"P1 green",world:3800939,worldCss:"#39ff6b",dim:1931834,grid:668441,gridCenter:1002788,rubble:1931834,moon:10485696,hud:"#ff4433",hazard:[1,.35,.1]},{id:"amber",label:"P3 amber",world:16756736,worldCss:"#ffb000",dim:9064960,grid:3350528,gridCenter:5058560,rubble:9064960,moon:16769184,hud:"#ffcc55",hazard:[1,.25,.1]},{id:"cyan",label:"P4 cyan",world:3531007,worldCss:"#35e0ff",dim:1927802,grid:665651,gridCenter:997965,rubble:1927802,moon:10547455,hud:"#77ffff",hazard:[1,.35,.1]},{id:"bw",label:"B&W",world:16777215,worldCss:"#ffffff",dim:10066329,grid:2236962,gridCenter:3355443,rubble:10066329,moon:16777215,hud:"#ffffff",hazard:[1,1,1]}];class dv{object;max;pos;col;p;cursor=0;constructor(t=1024,e=!0){this.max=t,this.pos=new Float32Array(t*6),this.col=new Float32Array(t*6),this.p=new Float32Array(t*15);const i=new fe;i.setAttribute("position",new $e(this.pos,3).setUsage(hl)),i.setAttribute("color",new $e(this.col,3).setUsage(hl));const r=new ka({vertexColors:!0,blending:xs,depthWrite:!1,transparent:!0,fog:e});this.object=new tu(i,r),this.object.frustumCulled=!1}spawn(t,e,i,r,s,a,o,c,u,h,f=.5,l=0,d=0,g=0){const _=this.cursor++%this.max*15,m=this.p;m[_]=t,m[_+1]=e,m[_+2]=i,m[_+3]=r,m[_+4]=s,m[_+5]=a,m[_+6]=o,m[_+7]=o,m[_+8]=f,m[_+9]=c,m[_+10]=u,m[_+11]=h,m[_+12]=l,m[_+13]=d,m[_+14]=g}update(t){const e=this.p;for(let i=0;i<this.max;i++){const r=i*15,s=i*6;if(e[r+6]<=0){this.pos[s]=this.pos[s+3]=0,this.pos[s+1]=this.pos[s+4]=-1e3,this.pos[s+2]=this.pos[s+5]=0,this.col[s]=this.col[s+1]=this.col[s+2]=0,this.col[s+3]=this.col[s+4]=this.col[s+5]=0;continue}e[r+6]-=t,e[r]+=e[r+3]*t,e[r+1]+=e[r+4]*t,e[r+2]+=e[r+5]*t;let a=e[r+12],o=e[r+13],c=e[r+14];a===0&&o===0&&c===0&&(a=e[r+3],o=e[r+4],c=e[r+5]);const u=Math.hypot(a,o,c)||1,h=e[r+8]/u;this.pos[s]=e[r],this.pos[s+1]=e[r+1],this.pos[s+2]=e[r+2],this.pos[s+3]=e[r]-a*h,this.pos[s+4]=e[r+1]-o*h,this.pos[s+5]=e[r+2]-c*h;const f=Math.max(e[r+6],0)/e[r+7];this.col[s]=this.col[s+3]=e[r+9]*f,this.col[s+1]=this.col[s+4]=e[r+10]*f,this.col[s+2]=this.col[s+5]=e[r+11]*f}this.object.geometry.attributes.position.needsUpdate=!0,this.object.geometry.attributes.color.needsUpdate=!0}}const gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pv=new iu(-1,1,1,-1,0,1);class mv extends fe{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const gv=new mv;class Nu{constructor(t){this._mesh=new Ye(gv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,pv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Fu extends Sr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yi.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Nu(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Sc extends Sr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class _v extends Sr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class vv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Lt);this._width=i.width,this._height=i.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fu(gs),this.copyPass.material.blending=Un,this.clock=new Xf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sc!==void 0&&(a instanceof Sc?i=!0:a instanceof _v&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xv extends Sr{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new kt}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const Sv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class qi extends Sr{constructor(t,e=1,i,r){super(),this.strength=e,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new Lt(t.x,t.y):new Lt(256,256),this.clearColor=new kt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(s,a,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Ke(s,a,{type:In});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const l=new Ke(s,a,{type:In});l.texture.name="UnrealBloomPass.v"+h,l.texture.generateMipmaps=!1,this.renderTargetsVertical.push(l),s=Math.round(s/2),a=Math.round(a/2)}const o=Sv;this.highPassUniforms=Yi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Lt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yi.clone(gs.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:gs.vertexShader,fragmentShader:gs.fragmentShader,blending:xs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new kt,this._oldClearAlpha=1,this._basic=new vr,this._fsQuad=new Nu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Lt(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,e,i,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=qi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=qi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}qi.BlurDirectionX=new Lt(1,0);qi.BlurDirectionY=new Lt(0,1);const Mv={uniforms:{tDiffuse:{value:null},tPrev:{value:null},uTime:{value:0},uRes:{value:new Lt(1,1)},uScan:{value:.2},uVignette:{value:.4},uBarrel:{value:.04},uPersist:{value:.4},uRoll:{value:.08},uSafe:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
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
  `};function Ev(n,t,e){const i=n.getDrawingBufferSize(new Lt),r=new Ke(i.x,i.y,{type:pn}),s=new vv(n,r);s.addPass(new xv(t,e));const a=new qi(new Lt(i.x,i.y),.9,.5,0);s.addPass(a);const o=new Fu(Mv);o.uniforms.uRes.value.set(i.x,i.y),s.addPass(o);let c=new Il(i.x,i.y);return o.uniforms.tPrev.value=c,{composer:s,bloom:a,crt:o,render(u){o.uniforms.uTime.value=u,s.render(),n.copyFramebufferToTexture(c)},resize(u,h){s.setSize(u,h);const f=n.getDrawingBufferSize(new Lt);o.uniforms.uRes.value.set(f.x,f.y),c.dispose(),c=new Il(f.x,f.y),o.uniforms.tPrev.value=c}}}const Mc=1931834,es=Math.PI*2;function yv(n){const t=(w,A)=>new $f(400,80,w,A),e=[];for(let w=0;w<256;w++){const A=w/256*es,U=14+22*Math.abs(Math.sin(A*3.1))+12*Math.abs(Math.sin(A*7.3+1.7))+6*Math.sin(A*13.7);e.push(Math.sin(A)*620,U,Math.cos(A)*620)}new fe().setAttribute("position",new le(e,3));const s=[];for(let w=0;w<256;w++){const A=w*3,U=(w+1)%256*3;s.push(e[A],e[A+1],e[A+2],e[U],e[U+1],e[U+2])}const a=Be(Mc,1.1,{fog:!1});n.add(On(s,a));const o=.9,c=Math.sin(o)*620,u=Math.cos(o)*620,h=[[0,95],[22,64],[44,40],[64,24],[76,15]],f=10,l=[];for(const[w,A]of h)for(let U=0;U<f;U++){const y=U/f*es,E=(U+1)/f*es;l.push(c+Math.sin(y)*A,w,u+Math.cos(y)*A,c+Math.sin(E)*A,w,u+Math.cos(E)*A)}for(let w=0;w<f;w++){const A=w/f*es;for(let U=0;U<h.length-1;U++){const[y,E]=h[U],[D,O]=h[U+1];l.push(c+Math.sin(A)*E,y,u+Math.cos(A)*E,c+Math.sin(A)*O,D,u+Math.cos(A)*O)}}const d=Be(Mc,1.2,{fog:!1});n.add(On(l,d));const g=new H(c,78,u),_=[],m=-350,p=210,b=-520,M=14;for(let w=0;w<=40;w++){const A=Math.PI*.25+w/40*Math.PI*1.5;_.push(m+Math.cos(A)*M,p+Math.sin(A)*M,b)}for(let w=40;w>=0;w--){const A=Math.PI*.25+w/40*Math.PI*1.5;_.push(m+6+Math.cos(A)*M*.92,p+Math.sin(A)*M*.92,b)}const S=[];for(let w=0;w<_.length/3-1;w++){const A=w*3,U=A+3;S.push(_[A],_[A+1],_[A+2],_[U],_[U+1],_[U+2])}const R=Be(10485696,1.2,{fog:!1});return n.add(On(S,R)),{crater:g,mountainMat:a,volcanoMat:d,moonMat:R,makeGrid:t}}function Tv(n){const t=[],e=[],i=ne;for(const a of n){const o=a.x-i/2,c=a.x+i/2,u=0,h=i,f=a.z-i/2,l=a.z+i/2,d=[[o,u,f],[c,u,f],[c,u,l],[o,u,l],[o,h,f],[c,h,f],[c,h,l],[o,h,l]],g=[[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,3,7,4]];for(const _ of g){for(const m of[0,1,2,0,2,3])t.push(...d[_[m]]);for(let m=0;m<4;m++)e.push(...d[_[m]],...d[_[(m+1)%4]])}}const r=new fe;r.setAttribute("position",new le(t,3));const s=new fe;return s.setAttribute("position",new le(e,3)),{faces:r,edges:s}}function bv(n){const t=[],e=ne/2;for(const{off:r}of n){const[s,a,o]=r,c=[[s-e,a-e,o-e],[s+e,a-e,o-e],[s+e,a-e,o+e],[s-e,a-e,o+e],[s-e,a+e,o-e],[s+e,a+e,o-e],[s+e,a+e,o+e],[s-e,a+e,o+e]],u=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];for(const[h,f]of u)t.push(...c[h],...c[f])}const i=new fe;return i.setAttribute("position",new le(t,3)),i}const To={palette:0,bloom:.9,crt:.6,wireframe:!1,safe:!1,shake:!0,fov:60,res:1,map:"classic",volMaster:.8,volSfx:.8},Ou="vectorzone-settings";function Av(){try{const n=localStorage.getItem(Ou);return n?{...To,...JSON.parse(n)}:{...To}}catch{return{...To}}}function zu(n){try{localStorage.setItem(Ou,JSON.stringify(n))}catch{}}function wv(n,t,e){const i=document.createElement("div");i.id="panel";const r=()=>{zu(n),e(n)},s=(b,M)=>{const S=document.createElement("label");S.className="row";const R=document.createElement("span");R.textContent=b,S.append(R,M),i.append(S)},a=document.createElement("button"),o=()=>{a.textContent=t[n.palette%t.length]};o(),a.onclick=()=>{n.palette=(n.palette+1)%t.length,o(),r()},s("phosphor",a);const c=document.createElement("input");c.type="checkbox",c.checked=n.wireframe,c.onchange=()=>{n.wireframe=c.checked,r()},s("wireframe",c);const u=document.createElement("input");u.type="checkbox",u.checked=n.safe,u.onchange=()=>{n.safe=u.checked,r()},s("safe mode",u);const h=document.createElement("input");h.type="range",h.min="0",h.max="2",h.step="0.1",h.value=String(n.bloom),h.oninput=()=>{n.bloom=Number(h.value),r()},s("bloom",h);const f=document.createElement("input");f.type="range",f.min="0",f.max="1",f.step="0.1",f.value=String(n.crt),f.oninput=()=>{n.crt=Number(f.value),r()},s("crt",f);const l=document.createElement("input");l.type="checkbox",l.checked=n.shake,l.onchange=()=>{n.shake=l.checked,r()},s("shake",l);const d=document.createElement("input");d.type="range",d.min="50",d.max="90",d.step="5",d.value=String(n.fov),d.oninput=()=>{n.fov=Number(d.value),r()},s("fov",d);const g=document.createElement("input");g.type="range",g.min="0.5",g.max="1",g.step="0.25",g.value=String(n.res),g.oninput=()=>{n.res=Number(g.value),r()},s("res",g);const _=document.createElement("select");for(const b of X_){const M=document.createElement("option");M.value=b,M.textContent=Du[b].label,_.append(M)}_.value=n.map,_.onchange=()=>{n.map=_.value,r()},s("map",_);const m=document.createElement("input");m.type="range",m.min="0",m.max="1",m.step="0.1",m.value=String(n.volMaster),m.oninput=()=>{n.volMaster=Number(m.value),r()},s("vol",m);const p=document.createElement("input");return p.type="range",p.min="0",p.max="1",p.step="0.1",p.value=String(n.volSfx),p.oninput=()=>{n.volSfx=Number(p.value),r()},s("sfx",p),i}function Rv(n,t,e){if(e==="airburst")return 0;const i=Math.max(14,t*3.5);if(n>=i)return 0;const r=1-n/i;return Math.min(.85,r*(.25+t*.07))}function Cv(n){return n<5?(1-n/5)*.18:0}const Ja=3800939,be=new H0({antialias:!0});be.setPixelRatio(Math.min(window.devicePixelRatio,2));be.setSize(window.innerWidth,window.innerHeight);be.info.autoReset=!1;document.body.appendChild(be.domElement);const Jt=new Uf;Jt.background=new kt(0);Jt.fog=new Ba(0,60,260);const Me=new rn(60,window.innerWidth/window.innerHeight,.1,2e3),wa=document.getElementById("stats"),Bu=new vr({color:0,side:cn}),ku=Be(Ja,2.4),Gu=Be(Ja,1.4),Ra=Be(Ja,1.8),Pv=Be(16729139,1.8),Dv=Be(3531007,1.8),jn=Av(),ct=Z_(11827170,jn.map);let Et=ct.tanks[0];function Bi(n,t=ku){const e=Uu(n),i=new Ye(e.faces,Bu),r=ds(e.edges,t),s=new sr;return s.add(i,r),{group:s,mesh:i,lines:r,rev:n.rev}}function rr(n,t){if(n.rev===t.rev)return;const e=Uu(t);n.mesh.geometry.dispose(),n.lines.geometry.dispose(),n.mesh.geometry=e.faces,du(n.lines,e.edges),n.rev=t.rev,Qa++}const Fi=Bi(Et.hull),vn=Bi(Et.turret);vn.group.position.set(Et.turretPivot.x,Et.turretPivot.y,Et.turretPivot.z);vn.group.rotation.order="YXZ";Fi.group.add(vn.group);Jt.add(Fi.group);let Qa=0;const Ca=new Map,Vu=n=>n==="depot"?Pv:n==="scan"?Dv:Gu;for(const n of ct.structures){const t=Bi(n.grid,Vu(n.kind));t.group.position.set(n.x,0,n.z),Jt.add(t.group),Ca.set(n.id,t)}const Wu=new vr({color:0,side:cn}),tl=Be(1931834,1);let ws=new Ye(new fe,Wu),Rs=On(new Float32Array(6),tl);ws.frustumCulled=!1;Rs.frustumCulled=!1;Jt.add(ws,Rs);let Ec=-1;const ns=new Map,bo=new Map,yc=Be(3800939,1.2,{transparent:!0,opacity:.6}),Xu=Be(16739115,1.8,{transparent:!0,opacity:.75}),Pa=On(new Float32Array(6),Xu);Jt.add(Pa);let Tc="",Ao=0,Xe=0;const Yn=new Float32Array(432),Yu=Be(3531007,1.1,{transparent:!0,opacity:.5,fog:!1}),Cs=On(Yn,Yu);Cs.visible=!1;Jt.add(Cs);let wo=0;const is=new Map,rs=new Map;let Cn=null,Ps=!1;window.addEventListener("keydown",n=>{n.code==="KeyX"&&(Ps=!Ps)});const bc=new Float32Array(4096),Ds=On(new Float32Array(6),Be(16729139,1,{transparent:!0,opacity:.7}));Ds.visible=!1;Jt.add(Ds);const qu=Be(1931834,.9,{transparent:!0,opacity:.5}),ge=new Float32Array(18),_s=On(ge,qu);Jt.add(_s);const ln=ov();let Ac=-1e9,wc=!1;const ss=[];let Ro=null;const Ku="vectorzone-scores";function Hv(){try{return JSON.parse(localStorage.getItem(Ku)??"[]")}catch{return[]}}function Lv(){const n=Hv();n.push({score:ct.score,date:new Date().toISOString().slice(0,10)}),n.sort((s,a)=>a.score-s.score);const t=n.slice(0,5);try{localStorage.setItem(Ku,JSON.stringify(t))}catch{}const e=dn[jn.palette%dn.length],i=document.createElement("div");i.id="gameover",i.style.color=e.hud;const r=ct.lives<=0?"GAME OVER":"MATCH COMPLETE";i.innerHTML=`<h1>${r}</h1><p class="final">SCORE ${String(ct.score).padStart(6,"0")}</p><table><tr><th>#</th><th>SCORE</th><th>DATE</th></tr>`+t.map((s,a)=>`<tr${s.score===ct.score&&s.date===new Date().toISOString().slice(0,10)?' class="me"':""}><td>${a+1}</td><td>${String(s.score).padStart(6,"0")}</td><td>${s.date}</td></tr>`).join("")+'</table><p class="hint">PRESS R TO RESTART</p>',document.body.append(i)}window.addEventListener("keydown",n=>{n.code==="KeyR"&&ct.phase==="over"&&location.reload()});function Uv(){const n=[0,0,2.2,0,0,-1.6,0,0,2.2,-.45,0,1.2,0,0,2.2,.45,0,1.2,0,0,2.2,0,.45,1.2,0,0,2.2,0,-.45,1.2,-.45,0,1.2,-.9,0,.2,.45,0,1.2,.9,0,.2,0,.45,1.2,0,.9,.2,0,-.45,1.2,0,-.9,.2,-.9,0,.2,-.9,0,-.7,.9,0,.2,.9,0,-.7,0,.9,.2,0,.9,-.7,0,-.9,.2,0,-.9,-.7,0,0,-1.6,0,0,-2.6],t=new fe;return t.setAttribute("position",new le(n,3)),t}function Iv(){const n=[0,0,-2.4,0,0,2.4,0,.25,1.5,0,.25,2.1,-3.2,0,.2,3.2,0,.2,-3.2,0,.2,-3.2,.3,0,3.2,0,.2,3.2,.3,0,-1.2,0,-2.1,1.2,0,-2.1,0,0,-2.2,0,.9,-2.3,0,.9,-2.3,0,.5,-1.7],t=new fe;return t.setAttribute("position",new le(n,3)),t}const Nv=new H(0,Et.turret.size.y*ne+.25,-.9),Fv=new $i().setFromAxisAngle(new H(0,1,0),Math.PI);fv();const Ln=yv(Jt);let Ii=Ln.makeGrid(dn[0].gridCenter,dn[0].grid);Jt.add(Ii);const Ne=new dv(1024,!1);Jt.add(Ne.object);let Co=0;const Sn=Ev(be,Jt,Me),Ht={tracer:[.6,1,.7],spark:[.2,.9,.4],hazard:[1,.35,.1],scorch:[.45,.22,.08],smoke:[.1,.35,.16]};function $u(n){if(n.map!==jn.map){zu(n),location.reload();return}const t=dn[n.palette%dn.length];Me.fov=n.fov,Me.updateProjectionMatrix(),be.setPixelRatio(Math.min(window.devicePixelRatio,2)*n.res),be.setSize(window.innerWidth,window.innerHeight),Sn.resize(window.innerWidth,window.innerHeight),pu(window.innerWidth,window.innerHeight),ku.color.setHex(t.world),Gu.color.setHex(t.world),Ra.color.setHex(t.world),tl.color.setHex(t.rubble),qu.color.setHex(t.dim),Ln.mountainMat.color.setHex(t.dim),Ln.volcanoMat.color.setHex(t.dim),Ln.moonMat.color.setHex(t.moon),Jt.remove(Ii),Ii.geometry.dispose(),Ii.material.dispose(),Ii=Ln.makeGrid(t.gridCenter,t.grid),Jt.add(Ii);const e=new kt(t.world);Ht.tracer=[e.r*.7+.2,e.g*.7+.2,e.b*.7+.2],Ht.spark=[e.r*.4,e.g*.9,e.b*.5],Ht.hazard=t.hazard,Ht.scorch=[t.hazard[0]*.45,t.hazard[1]*.45,t.hazard[2]*.45];const i=new kt(t.dim);Ht.smoke=[i.r*.6,i.g*.6,i.b*.6],wa.style.color=t.hud,wa.style.textShadow=`0 0 6px ${t.hud}99`,document.getElementById("alerts").style.color=t.hud,Sn.bloom.strength=n.bloom;const r=Sn.crt.uniforms;r.uScan.value=.3*n.crt,r.uVignette.value=.6*n.crt,r.uBarrel.value=.06*n.crt,r.uPersist.value=n.safe?0:.55*n.crt,r.uRoll.value=n.safe?0:.15*n.crt,r.uSafe.value=n.safe?1:0,Bu.visible=!n.wireframe,Wu.visible=!n.wireframe}document.body.append(wv(jn,dn.map(n=>n.label),$u));$u(jn);let Hs=!1;window.addEventListener("keydown",n=>{n.code==="KeyC"&&(Hs=!Hs)});function Po(n,t,e){for(let i=0;i<16;i++){const r=i/16*Math.PI*2;Ne.spawn(n+Math.sin(r)*e,.02,t+Math.cos(r)*e,0,0,0,20,Ht.scorch[0],Ht.scorch[1],Ht.scorch[2],.5,Math.cos(r),0,-Math.sin(r))}}const vs={cam:null};window.__vz={world:ct,renderer:be,debug:vs,camera:Me,turretObj:vn.group,step:(n,t)=>{for(let e=0;e<t;e++)Lu(ct,n)},get rebuilds(){return Qa},post:Sn,scene:Jt,command:Iu,sample:n=>{const e=be.getDrawingBufferSize(new Lt),i=Math.floor(e.x/2-96/2),r=Math.floor(e.y/2-96/2);if(n){Sn.composer.renderToScreen=!1,Sn.composer.render();const o=new Uint8Array(9216*4);return be.readRenderTargetPixels(Sn.composer.readBuffer,i,r,96,96,o),Sn.composer.renderToScreen=!0,Rc(o,96)}const s=new Ke(e.x,e.y,{type:pn});be.setRenderTarget(s),be.render(Jt,Me);const a=new Uint8Array(9216*4);return be.readRenderTargetPixels(s,i,r,96,96,a),be.setRenderTarget(null),s.dispose(),Rc(a,96)}};function Rc(n,t){let e=0;const i=[0,0,0],r=new Array(t).fill(0);for(let o=0;o<t;o++)for(let c=0;c<t;c++){const u=(o*t+c)*4,h=n[u]+n[u+1]+n[u+2];r[o]+=h,h>60&&(e++,i[0]+=n[u],i[1]+=n[u+1],i[2]+=n[u+2])}e&&(i[0]/=e,i[1]/=e,i[2]/=e);const s=r.reduce((o,c)=>o+c,0)/t,a=r.reduce((o,c)=>o+(c-s)*(c-s),0)/t;return{lit:e,mean:i.map(o=>Math.round(o)),rowVar:Math.round(a)}}let os=0,Cc=performance.now(),Do=0,as=0,Pc=0;function Zu(n){requestAnimationFrame(Zu);const t=Math.min((n-Cc)/1e3,.25);Cc=n,os+=t;const e=Iu(),i=[];if(ct.phase!=="over")for(;os>=Zn;)Lu(ct,[e]),i.push(...ct.events),os-=Zn;else os=0;Et=ct.tanks[0],ct.phase==="over"&&!wc&&(wc=!0,Lv()),rr(Fi,Et.hull),rr(vn,Et.turret);const r=ct.volcano.state,s=r==="erupt"?50:r==="rumble"?18:r==="cooldown"?10:3;for(Co+=t;Co>=1/s;){Co-=1/s;const l=r==="erupt",d=l?45:r==="rumble"?28:12,g=l&&Math.random()<.4;Ne.spawn(Ln.crater.x+(Math.random()-.5)*d,Ln.crater.y+(Math.random()-.5)*8,Ln.crater.z+(Math.random()-.5)*d,(Math.random()-.5)*(l?12:4)+(l?6:0),(l?16:6)+Math.random()*(l?14:5),(Math.random()-.5)*(l?12:4),(l?10:5)+Math.random()*(l?8:4),g?Ht.hazard[0]:Ht.smoke[0]*1.4,g?Ht.hazard[1]:Ht.smoke[1]*1.4,g?Ht.hazard[2]:Ht.smoke[2]*1.4,(l?12:r==="rumble"?6:2.5)+Math.random()*(l?18:5))}Ln.volcanoMat.color.setHex(r==="erupt"?16739115:r==="rumble"?9062944:dn[jn.palette%dn.length].dim),Ne.update(t),Fi.group.visible=Et.alive;for(const l of ct.structures){let d=Ca.get(l.id);d||(d=Bi(l.grid,Vu(l.kind)),d.group.position.set(l.x,0,l.z),Jt.add(d.group),Ca.set(l.id,d)),rr(d,l.grid)}if(ct.rubbleRev!==Ec){Ec=ct.rubbleRev;const l=Tv(ct.rubble);ws.geometry.dispose(),Rs.geometry.dispose(),ws.geometry=l.faces,du(Rs,l.edges),Qa++}for(const l of ct.chunks){let d=ns.get(l.id);d||(d=ds(bv(l.cells),tl),ns.set(l.id,d),Jt.add(d)),d.position.set(l.pos[0],l.pos[1],l.pos[2]),d.rotation.set(l.angle*.7,l.angle,0)}for(const[l,d]of ns)ct.chunks.some(g=>g.id===l)||(Jt.remove(d),d.geometry.dispose(),ns.delete(l));for(const l of ct.shells)Ne.spawn(l.pos[0],l.pos[1],l.pos[2],l.dir[0]*60,l.dir[1]*60,l.dir[2]*60,.06,Ht.tracer[0],Ht.tracer[1],Ht.tracer[2],2.5);for(const l of ct.tanks){if(l.id===0)continue;let d=is.get(l.id);d||(d={hull:Bi(l.hull),turret:Bi(l.turret)},d.turret.group.position.set(l.turretPivot.x,l.turretPivot.y,l.turretPivot.z),d.turret.group.rotation.order="YXZ",d.hull.group.add(d.turret.group),Jt.add(d.hull.group),is.set(l.id,d)),rr(d.hull,l.hull),rr(d.turret,l.turret),d.hull.group.visible=l.alive,d.hull.group.position.set(l.x,0,l.z),d.hull.group.rotation.y=l.heading,d.turret.group.rotation.y=l.turretYaw,d.turret.group.rotation.x=-l.gunPitch}for(const[l,d]of is)ct.tanks.some(g=>g.id===l)||(Jt.remove(d.hull.group),is.delete(l));for(const l of ct.missiles){let d=rs.get(l.id);d||(d=ds(Uv(),Ra),rs.set(l.id,d),Jt.add(d)),d.position.set(l.pos[0],l.pos[1],l.pos[2]);const g=new H(l.dir[0],l.dir[1],l.dir[2]).normalize();d.quaternion.setFromUnitVectors(new H(0,0,1),g)}for(const[l,d]of rs)ct.missiles.some(g=>g.id===l)||(Jt.remove(d),d.geometry.dispose(),rs.delete(l));ct.bomber?(Cn||(Cn=ds(Iv(),Ra),Jt.add(Cn)),Cn.position.set(ct.bomber.pos[0],ct.bomber.pos[1],ct.bomber.pos[2]),Cn.rotation.y=Math.atan2(ct.bomber.dir[0],ct.bomber.dir[2])):Cn&&(Jt.remove(Cn),Cn.geometry.dispose(),Cn=null);for(const l of ct.telegraphs){const d=.5+.5*Math.sin(n/90),g=l.kind==="volcano"?32:16;for(let _=0;_<g;_++){const m=_/g*Math.PI*2;Ne.spawn(l.x+Math.sin(m)*l.radius,.05,l.z+Math.cos(m)*l.radius,0,0,0,.12,Ht.hazard[0]*d,Ht.hazard[1]*d,Ht.hazard[2]*d,l.kind==="volcano"?1.2:.5,Math.cos(m),0,-Math.sin(m))}if(l.kind==="volcano"||l.kind==="meteor"){const m=1-Math.max(0,l.impactTick-ct.tick)/90,p=85*(1-m)*(1-m)+1;for(let b=0;b<7;b++)Ne.spawn(l.x+Math.sin(b*.7+n/200)*.5,p+b*1.4,l.z+Math.cos(b*.7+n/200)*.5,-1.5,-22,-1.5,.25,Ht.hazard[0],Ht.hazard[1],Ht.hazard[2],2.2)}}for(const l of ct.fences){const d=$a(ct,l);let g=bo.get(l.id);if(d&&!g){const _=[],m=Math.hypot(l.bx-l.ax,l.bz-l.az),p=Math.max(2,Math.floor(m/.6));for(let b=0;b<=p;b++){const M=b/p,S=l.ax+(l.bx-l.ax)*M,R=l.az+(l.bz-l.az)*M;_.push(S,0,R,S,l.height,R)}_.push(l.ax,l.height,l.az,l.bx,l.height,l.bz),_.push(l.ax,.05,l.az,l.bx,.05,l.bz),g=On(_,yc),bo.set(l.id,g),Jt.add(g)}else!d&&g&&(Jt.remove(g),g.geometry.dispose(),bo.delete(l.id))}yc.opacity=.45+.25*Math.sin(n/180);const a=ct.stormUntil>ct.tick;if(Cs.visible=a,a){let l=0;for(let d=0;d<3;d++)for(let g=0;g<24;g++){const _=g/24*Math.PI*2,m=(g+1)/24*Math.PI*2,p=130+d*18+Math.sin(_*3+n/400+d)*10,b=130+d*18+Math.sin(m*3+n/400+d)*10;Yn[l++]=Math.sin(_)*520,Yn[l++]=p,Yn[l++]=Math.cos(_)*520,Yn[l++]=Math.sin(m)*520,Yn[l++]=b,Yn[l++]=Math.cos(m)*520}Zr(Cs,Yn),Yu.opacity=.3+.25*Math.sin(n/300)}if(ct.sky.meteors)for(wo+=t;wo>.35;){wo-=.35;const l=Math.random()*Math.PI*2;Ne.spawn(Math.sin(l)*400,150+Math.random()*60,Math.cos(l)*400,-Math.sin(l)*60-20,-35,-Math.cos(l)*60,1.2,Ht.tracer[0],Ht.tracer[1],Ht.tracer[2],6)}Xe*=Math.exp(-t*6);const o=ct.lavaPools.map(l=>`${l.x.toFixed(1)},${l.z.toFixed(1)},${l.radius.toFixed(1)},${l.untilTick}`).join("|");if(o!==Tc){Tc=o;const l=[];for(const d of ct.lavaPools)for(let g=0;g<2;g++){const _=d.radius*(g===0?1:.55);for(let m=0;m<32;m++){const p=m/32*Math.PI*2,b=(m+1)/32*Math.PI*2;l.push(d.x+Math.sin(p)*_,.07,d.z+Math.cos(p)*_,d.x+Math.sin(b)*_,.07,d.z+Math.cos(b)*_)}}Zr(Pa,l.length?l:new Float32Array(6)),Pa.visible=ct.lavaPools.length>0}for(Xu.opacity=.55+.25*Math.sin(n/180),Ao+=t;Ao>.12&&ct.lavaPools.length;){Ao-=.12;const l=ct.lavaPools[Math.floor(Math.random()*ct.lavaPools.length)];Ne.spawn(l.x+(Math.random()-.5)*l.radius,.1,l.z+(Math.random()-.5)*l.radius,(Math.random()-.5)*1.5,3+Math.random()*4,(Math.random()-.5)*1.5,.8,Ht.hazard[0],Ht.hazard[1],Ht.hazard[2],.7)}if(Ds.visible=Ps,Ps){let l=0;const d=(...g)=>{for(const _ of g)bc[l++]=_};for(const g of ct.tanks){const _=ct.brains.get(g.id);if(!(!_||!g.alive)&&(_.debug.intent&&d(g.x,1.4,g.z,_.debug.intent[0],1.4,_.debug.intent[2]),_.aim)){const m=g.heading+g.turretYaw,p=_.debug.err||.05;for(const b of[-1,1])d(g.x,1.4,g.z,g.x+Math.sin(m+p*b)*20,1.4,g.z+Math.cos(m+p*b)*20)}}Zr(Ds,bc.subarray(0,l))}for(const l of i){if(l.kind==="superSpawn"?ln.alert("SUPERTANK INBOUND"):l.kind==="bomberInbound"?ln.alert("BOMBER RUN"):l.kind==="volcanoRumble"?ln.alert("VOLCANO RUMBLING — ERUPTION IMMINENT"):l.kind==="volcanoErupt"?ln.alert("ERUPTION"):l.kind==="matchEnd"?ln.alert("MATCH COMPLETE"):l.kind==="kill"&&l.what==="bomber"?ln.alert("BOMBER DOWN"):l.kind==="scanPing"?ln.alert("SCAN PING"):l.kind==="ionStorm"?ln.alert("ION STORM — RADAR DOWN"):l.kind==="meteorInbound"?ln.alert("METEOR INBOUND"):l.kind==="missileLock"?ln.alert("MISSILE LOCK"):l.kind==="bombTelegraph"&&(Ac=n),l.kind==="fire"&&l.owner===0&&(Xe=Math.min(.35,Xe+.035)),l.kind==="explosion"){const d=Math.hypot(l.pos[0]-Et.x,l.pos[2]-Et.z);Xe=Math.min(1,Xe+Rv(d,l.radius,l.source))}if(l.kind==="tankKilled"&&l.id===0&&(Xe=Math.min(.8,Xe+.3)),l.kind==="tankKilled"?l.id===0?ss.push({text:l.by===null?"THE ZONE KILLED YOU":"ENEMY KILLED YOU",born:n}):l.by===0&&ss.push({text:`YOU KILLED ${ct.brains.get(l.id)?.kind==="super"?"SUPERTANK":"TANK"}`,born:n}):l.kind==="kill"&&l.by===0&&ss.push({text:l.what==="bomber"?"YOU DOWNED BOMBER":"YOU DOWNED MISSILE",born:n}),l.kind==="blockDestroyed"&&l.by!==0&&Math.hypot(l.pos[0]-Et.x,l.pos[2]-Et.z)<4&&(Ro={angle:Math.atan2(l.pos[0]-Et.x,l.pos[2]-Et.z)-Et.heading,born:n},Xe=Math.min(.5,Xe+Cv(Math.hypot(l.pos[0]-Et.x,l.pos[2]-Et.z)))),l.kind==="explosion"&&Math.hypot(l.pos[0]-Et.x,l.pos[2]-Et.z)<6&&(Ro={angle:Math.atan2(l.pos[0]-Et.x,l.pos[2]-Et.z)-Et.heading,born:n}),l.kind==="fire")for(let d=0;d<8;d++)Ne.spawn(l.pos[0],l.pos[1],l.pos[2],l.dir[0]*12+(Math.random()-.5)*6,l.dir[1]*12+(Math.random()-.5)*6,l.dir[2]*12+(Math.random()-.5)*6,.15,Ht.tracer[0],Ht.tracer[1],Ht.tracer[2],.6);else if(l.kind==="blockDestroyed")for(let d=0;d<6;d++)Ne.spawn(l.pos[0],l.pos[1],l.pos[2],(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,Ht.spark[0],Ht.spark[1],Ht.spark[2],.4);else if(l.kind==="shellImpact"){Po(l.pos[0],l.pos[2],1.2);for(let d=0;d<10;d++)Ne.spawn(l.pos[0],l.pos[1]+.1,l.pos[2],(Math.random()-.5)*7,Math.random()*5,(Math.random()-.5)*7,.35,Ht.spark[0],Ht.spark[1],Ht.spark[2],.4)}else if(l.kind==="explosion"){l.pos[1]<5&&Po(l.pos[0],l.pos[2],l.radius);for(let d=0;d<40;d++){const g=Math.random()*Math.PI*2,_=4+Math.random()*8;Ne.spawn(l.pos[0],l.pos[1]+.2,l.pos[2],Math.sin(g)*_,Math.random()*9,Math.cos(g)*_,.7,Ht.hazard[0],Ht.hazard[1],Ht.hazard[2],.8)}}else if(l.kind==="tankKilled"){Po(l.pos[0],l.pos[2],2.5);for(let d=0;d<60;d++){const g=Math.random()*Math.PI*2,_=3+Math.random()*10;Ne.spawn(l.pos[0],l.pos[1],l.pos[2],Math.sin(g)*_,Math.random()*12,Math.cos(g)*_,1,Ht.hazard[0],Ht.hazard[1],Ht.hazard[2],.9)}}}if(Fi.group.position.set(Et.x,0,Et.z),Fi.group.rotation.y=Et.heading,vn.group.rotation.y=Et.turretYaw,vn.group.rotation.x=-Et.gunPitch,vs.cam?(Me.position.set(...vs.cam.p),Me.lookAt(...vs.cam.l)):!Et.alive&&ct.respawnTick>0?(Me.position.set(Et.x+6,4,Et.z+6),Me.lookAt(Et.x,1,Et.z)):Hs?(Me.position.set(Et.x-Math.sin(Et.heading)*12,6.5,Et.z-Math.cos(Et.heading)*12),Me.lookAt(Et.x,1.2,Et.z)):(vn.group.updateWorldMatrix(!0,!1),Me.position.copy(Nv).applyMatrix4(vn.group.matrixWorld),Me.quaternion.setFromRotationMatrix(vn.group.matrixWorld).multiply(Fv)),jn.shake&&Xe>.001&&(Me.position.x+=(Math.random()-.5)*Xe,Me.position.y+=(Math.random()-.5)*Xe,Me.position.z+=(Math.random()-.5)*Xe),be.info.reset(),Sn.render(n/1e3),Et.alive){const l=Su(Et),d=qa(Et,[0,ne,Et.turret.size.z/2*ne+.15]),g=y_(ct,d,l,400,0);ge[0]=d[0],ge[1]=d[1],ge[2]=d[2],ge[3]=g.pos[0],ge[4]=g.pos[1],ge[5]=g.pos[2];const _=.5;ge[6]=g.pos[0]-_,ge[7]=g.pos[1],ge[8]=g.pos[2],ge[9]=g.pos[0]+_,ge[10]=g.pos[1],ge[11]=g.pos[2],ge[12]=g.pos[0],ge[13]=g.pos[1],ge[14]=g.pos[2]-_,ge[15]=g.pos[0],ge[16]=g.pos[1],ge[17]=g.pos[2]+_,Zr(_s,ge),_s.visible=!0}else _s.visible=!1;const c=new Set,u=new Map,h=new Map;for(const l of ct.tanks)u.set(l.id,l.heading),h.set(l.id,l.turretYaw),ct.brains.get(l.id)?.kind==="super"&&c.add(l.id);const f=ct.structures.find(l=>l.kind==="scan"&&l.grid.cells.some(d=>d));ln.draw({tick:ct.tick,heading:Et.heading,turretYaw:Et.turretYaw,x:Et.x,z:Et.z,known:ct.awareness.get(0),tankHeadings:u,tankTurrets:h,missiles:ct.missiles.map(l=>({id:l.id,x:l.pos[0],z:l.pos[2],heading:Math.atan2(l.dir[0],l.dir[2]),targeted:l.targetId===0})),scanner:f?{x:f.x,z:f.z}:null,bomber:ct.bomber?{x:ct.bomber.pos[0],z:ct.bomber.pos[2],heading:Math.atan2(ct.bomber.dir[0],ct.bomber.dir[2])}:null,bomberBlip:n-Ac<3e3,superIds:c,storm:ct.stormUntil>ct.tick,score:ct.score,lives:ct.lives,cooldownFrac:1-Math.min(1,Et.cooldown/yu),secondsLeft:Math.max(0,(Ns-ct.tick)/60),palette:dn[jn.palette%dn.length],alive:Et.alive,status:{core:ar(Et.hull,"core"),tread:ar(Et.hull,"tread"),gun:ar(Et.turret,"gun"),engine:ar(Et.hull,"engine")},killfeed:ss,hitFlash:Ro,elevation:Et.gunPitch,now:n}),Do++,as+=t,as>=.5&&(Pc=Math.round(Do/as),Do=0,as=0),wa.textContent=`FPS ${Pc} · calls ${be.info.render.calls} · tick ${ct.tick} · v ${Et.speed.toFixed(1)} m/s · ${Hs?"chase":"scope"} [C]`}requestAnimationFrame(Zu);window.addEventListener("resize",()=>{Me.aspect=window.innerWidth/window.innerHeight,Me.updateProjectionMatrix(),be.setSize(window.innerWidth,window.innerHeight),Sn.resize(window.innerWidth,window.innerHeight),pu(window.innerWidth,window.innerHeight)});
