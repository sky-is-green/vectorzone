(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ba="180",vh=0,_l=1,xh=2,Wc=1,Sh=2,In=3,ii=0,Bt=1,hn=2,zn=0,Vi=1,ws=2,vl=3,xl=4,Mh=5,mi=100,Th=101,Eh=102,yh=103,bh=104,Ah=200,Rh=201,wh=202,Ch=203,Bo=204,ko=205,Ph=206,Dh=207,Lh=208,Uh=209,Ih=210,Hh=211,Nh=212,Fh=213,zh=214,Go=0,Vo=1,Wo=2,Yi=3,Xo=4,Yo=5,qo=6,Ko=7,Xc=0,Oh=1,Bh=2,ei=0,kh=1,Gh=2,Vh=3,Wh=4,Xh=5,Yh=6,qh=7,Yc=300,qi=301,Ki=302,$o=303,Zo=304,Gs=306,jo=1e3,_i=1001,Jo=1002,$t=1003,Kh=1004,Pr=1005,bn=1006,$s=1007,vi=1008,gn=1009,qc=1010,Kc=1011,_r=1012,ka=1013,Mi=1014,Nn=1015,On=1016,Ga=1017,Va=1018,vr=1020,$c=35902,Zc=35899,jc=1021,Jc=1022,pn=1023,xr=1026,Sr=1027,Qc=1028,Wa=1029,eu=1030,Xa=1031,Ya=1033,ms=33776,gs=33777,_s=33778,vs=33779,Qo=35840,ea=35841,ta=35842,na=35843,ia=36196,ra=37492,sa=37496,oa=37808,aa=37809,la=37810,ca=37811,ua=37812,ha=37813,fa=37814,da=37815,pa=37816,ma=37817,ga=37818,_a=37819,va=37820,xa=37821,Sa=36492,Ma=36494,Ta=36495,Ea=36283,ya=36284,ba=36285,Aa=36286,$h=3200,Zh=3201,jh=0,Jh=1,Jn="",sn="srgb",$i="srgb-linear",Cs="linear",Je="srgb",Ei=7680,Sl=519,Qh=512,ef=513,tf=514,tu=515,nf=516,rf=517,sf=518,of=519,Ra=35044,Ml=35048,Tl="300 es",An=2e3,Ps=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const pr=Math.PI/180,Mr=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ne(n,e,t){return Math.max(e,Math.min(t,n))}function qa(n,e){return(n%e+e)%e}function af(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lf(n,e,t){return n!==e?(t-n)/(e-n):0}function mr(n,e,t){return(1-t)*n+t*e}function cf(n,e,t,i){return mr(n,e,1-Math.exp(-t*i))}function uf(n,e=1){return e-Math.abs(qa(n,e*2)-e)}function hf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ff(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function df(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pf(n,e){return n+Math.random()*(e-n)}function mf(n){return n*(.5-Math.random())}function gf(n){n!==void 0&&(El=n);let e=El+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _f(n){return n*pr}function vf(n){return n*Mr}function xf(n){return(n&n-1)===0&&n!==0}function Sf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),m=a((e-i)/2),g=s((i-e)/2),u=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*f,l*m,o*c);break;case"YZY":n.set(l*m,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*m,o*h,o*c);break;case"XZX":n.set(o*h,l*u,l*g,o*c);break;case"YXY":n.set(l*g,o*h,l*u,o*c);break;case"ZYZ":n.set(l*u,l*g,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ef={DEG2RAD:pr,RAD2DEG:Mr,generateUUID:Bn,clamp:Ne,euclideanModulo:qa,mapLinear:af,inverseLerp:lf,lerp:mr,damp:cf,pingpong:uf,smoothstep:hf,smootherstep:ff,randInt:df,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:_f,radToDeg:vf,isPowerOfTwo:xf,ceilPowerOfTwo:Sf,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:Tf,normalize:Ze,denormalize:fn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const m=s[a+0],g=s[a+1],u=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=m,e[t+1]=g,e[t+2]=u,e[t+3]=_;return}if(f!==_||l!==m||c!==g||h!==u){let p=1-o;const d=l*m+c*g+h*u+f*_,w=d>=0?1:-1,R=1-d*d;if(R>Number.EPSILON){const A=Math.sqrt(R),E=Math.atan2(A,d*w);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A}const S=o*w;if(l=l*p+m*S,c=c*p+g*S,h=h*p+u*S,f=f*p+_*S,p===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],m=s[a+1],g=s[a+2],u=s[a+3];return e[t]=o*u+h*f+l*g-c*m,e[t+1]=l*u+h*m+c*f-o*g,e[t+2]=c*u+h*g+o*m-l*f,e[t+3]=h*u-o*f-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),m=l(i/2),g=l(r/2),u=l(s/2);switch(a){case"XYZ":this._x=m*h*f+c*g*u,this._y=c*g*f-m*h*u,this._z=c*h*u+m*g*f,this._w=c*h*f-m*g*u;break;case"YXZ":this._x=m*h*f+c*g*u,this._y=c*g*f-m*h*u,this._z=c*h*u-m*g*f,this._w=c*h*f+m*g*u;break;case"ZXY":this._x=m*h*f-c*g*u,this._y=c*g*f+m*h*u,this._z=c*h*u+m*g*f,this._w=c*h*f-m*g*u;break;case"ZYX":this._x=m*h*f-c*g*u,this._y=c*g*f+m*h*u,this._z=c*h*u-m*g*f,this._w=c*h*f+m*g*u;break;case"YZX":this._x=m*h*f+c*g*u,this._y=c*g*f+m*h*u,this._z=c*h*u-m*g*f,this._w=c*h*f-m*g*u;break;case"XZY":this._x=m*h*f-c*g*u,this._y=c*g*f-m*h*u,this._z=c*h*u+m*g*f,this._w=c*h*f+m*g*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],m=i+o+f;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,m=Math.sin(t*h)/c;return this._w=a*f+this._w*m,this._x=i*f+this._x*m,this._y=r*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new U,yl=new er;class ze{constructor(e,t,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],m=i[2],g=i[5],u=i[8],_=r[0],p=r[3],d=r[6],w=r[1],R=r[4],S=r[7],A=r[2],E=r[5],b=r[8];return s[0]=a*_+o*w+l*A,s[3]=a*p+o*R+l*E,s[6]=a*d+o*S+l*b,s[1]=c*_+h*w+f*A,s[4]=c*p+h*R+f*E,s[7]=c*d+h*S+f*b,s[2]=m*_+g*w+u*A,s[5]=m*p+g*R+u*E,s[8]=m*d+g*S+u*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,m=o*l-h*s,g=c*s-a*l,u=t*f+i*m+r*g;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/u;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=m*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=g*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(js.makeScale(e,t)),this}rotate(e){return this.premultiply(js.makeRotation(-e)),this}translate(e,t){return this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const js=new ze;function nu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yf(){const n=Ds("canvas");return n.style.display="block",n}const bl={};function Tr(n){n in bl||(bl[n]=!0,console.warn(n))}function bf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Al=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){const n={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$i]:{primaries:e,whitePoint:i,transfer:Cs,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const Ye=Af();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class Rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yi===void 0&&(yi=Ds("canvas")),yi.width=e.width,yi.height=e.height;const r=yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wf=0;class Ka{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Js(r[a].image)):s.push(Js(r[a]))}else s=Js(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;const Qs=new U;class Ht extends Qi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=_i,r=_i,s=bn,a=vi,o=pn,l=gn,c=Ht.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Bn(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qs).x}get height(){return this.source.getSize(Qs).y}get depth(){return this.source.getSize(Qs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Yc;Ht.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],m=l[1],g=l[5],u=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(f-_)<.01&&Math.abs(u-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(f+_)<.1&&Math.abs(u+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(g+1)/2,A=(d+1)/2,E=(h+m)/4,b=(f+_)/4,L=(u+p)/4;return R>S&&R>A?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=E/i,s=b/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=L/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-u)*(p-u)+(f-_)*(f-_)+(m-h)*(m-h));return Math.abs(w)<.001&&(w=1),this.x=(p-u)/w,this.y=(f-_)/w,this.z=(m-h)/w,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pf extends Qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ht(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ka(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zt extends Pf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class iu extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Lr.subVectors(this.max,rr),bi.subVectors(e.a,rr),Ai.subVectors(e.b,rr),Ri.subVectors(e.c,rr),Wn.subVectors(Ai,bi),Xn.subVectors(Ri,Ai),ai.subVectors(bi,Ri);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ai.z,ai.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ai.z,0,-ai.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ai.y,ai.x,0];return!eo(t,bi,Ai,Ri,Lr)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,bi,Ai,Ri,Lr))?!1:(Ur.crossVectors(Wn,Xn),t=[Ur.x,Ur.y,Ur.z],eo(t,bi,Ai,Ri,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new U,new U,new U,new U,new U,new U,new U,new U],ln=new U,Dr=new ri,bi=new U,Ai=new U,Ri=new U,Wn=new U,Xn=new U,ai=new U,rr=new U,Lr=new U,Ur=new U,li=new U;function eo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){li.fromArray(n,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),h=i.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lf=new ri,sr=new U,to=new U;class tr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(to)),this.expandByPoint(sr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new U,no=new U,Ir=new U,Yn=new U,io=new U,Hr=new U,ro=new U;class ru{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){no.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Yn.dot(this.direction),l=-Yn.dot(Ir),c=Yn.lengthSq(),h=Math.abs(1-a*a);let f,m,g,u;if(h>0)if(f=a*l-o,m=a*o-l,u=s*h,f>=0)if(m>=-u)if(m<=u){const _=1/h;f*=_,m*=_,g=f*(f+a*m+2*o)+m*(a*f+m+2*l)+c}else m=s,f=Math.max(0,-(a*m+o)),g=-f*f+m*(m+2*l)+c;else m=-s,f=Math.max(0,-(a*m+o)),g=-f*f+m*(m+2*l)+c;else m<=-u?(f=Math.max(0,-(-a*s+o)),m=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+m*(m+2*l)+c):m<=u?(f=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+c):(f=Math.max(0,-(a*s+o)),m=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+m*(m+2*l)+c);else m=a>0?-s:s,f=Math.max(0,-(a*m+o)),g=-f*f+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(no).addScaledVector(Ir,m),g}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(o=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){io.subVectors(t,e),Hr.subVectors(i,e),ro.crossVectors(io,Hr);let a=this.direction.dot(ro),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(Yn,Hr));if(l<0)return null;const c=o*this.direction.dot(io.cross(Yn));if(c<0||l+c>a)return null;const h=-o*Yn.dot(ro);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,a,o,l,c,h,f,m,g,u,_,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,m,g,u,_,p)}set(e,t,i,r,s,a,o,l,c,h,f,m,g,u,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=m,d[3]=g,d[7]=u,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const m=a*h,g=a*f,u=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=g+u*c,t[5]=m-_*c,t[9]=-o*l,t[2]=_-m*c,t[6]=u+g*c,t[10]=a*l}else if(e.order==="YXZ"){const m=l*h,g=l*f,u=c*h,_=c*f;t[0]=m+_*o,t[4]=u*o-g,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=g*o-u,t[6]=_+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*h,g=l*f,u=c*h,_=c*f;t[0]=m-_*o,t[4]=-a*f,t[8]=u+g*o,t[1]=g+u*o,t[5]=a*h,t[9]=_-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*h,g=a*f,u=o*h,_=o*f;t[0]=l*h,t[4]=u*c-g,t[8]=m*c+_,t[1]=l*f,t[5]=_*c+m,t[9]=g*c-u,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,g=a*c,u=o*l,_=o*c;t[0]=l*h,t[4]=_-m*f,t[8]=u*f+g,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*f+u,t[10]=m-_*f}else if(e.order==="XZY"){const m=a*l,g=a*c,u=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=m*f+_,t[5]=a*h,t[9]=g*f-u,t[2]=u*f-g,t[6]=o*h,t[10]=_*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,If)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),qn.crossVectors(i,Xt),qn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),qn.crossVectors(i,Xt)),qn.normalize(),Nr.crossVectors(Xt,qn),r[0]=qn.x,r[4]=Nr.x,r[8]=Xt.x,r[1]=qn.y,r[5]=Nr.y,r[9]=Xt.y,r[2]=qn.z,r[6]=Nr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],m=i[9],g=i[13],u=i[2],_=i[6],p=i[10],d=i[14],w=i[3],R=i[7],S=i[11],A=i[15],E=r[0],b=r[4],L=r[8],M=r[12],T=r[1],D=r[5],z=r[9],G=r[13],K=r[2],W=r[6],X=r[10],$=r[14],B=r[3],oe=r[7],ue=r[11],ye=r[15];return s[0]=a*E+o*T+l*K+c*B,s[4]=a*b+o*D+l*W+c*oe,s[8]=a*L+o*z+l*X+c*ue,s[12]=a*M+o*G+l*$+c*ye,s[1]=h*E+f*T+m*K+g*B,s[5]=h*b+f*D+m*W+g*oe,s[9]=h*L+f*z+m*X+g*ue,s[13]=h*M+f*G+m*$+g*ye,s[2]=u*E+_*T+p*K+d*B,s[6]=u*b+_*D+p*W+d*oe,s[10]=u*L+_*z+p*X+d*ue,s[14]=u*M+_*G+p*$+d*ye,s[3]=w*E+R*T+S*K+A*B,s[7]=w*b+R*D+S*W+A*oe,s[11]=w*L+R*z+S*X+A*ue,s[15]=w*M+R*G+S*$+A*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],m=e[10],g=e[14],u=e[3],_=e[7],p=e[11],d=e[15];return u*(+s*l*f-r*c*f-s*o*m+i*c*m+r*o*g-i*l*g)+_*(+t*l*g-t*c*m+s*a*m-r*a*g+r*c*h-s*l*h)+p*(+t*c*f-t*o*g-s*a*f+i*a*g+s*o*h-i*c*h)+d*(-r*o*h-t*l*f+t*o*m+r*a*f-i*a*m+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],m=e[10],g=e[11],u=e[12],_=e[13],p=e[14],d=e[15],w=f*p*c-_*m*c+_*l*g-o*p*g-f*l*d+o*m*d,R=u*m*c-h*p*c-u*l*g+a*p*g+h*l*d-a*m*d,S=h*_*c-u*f*c+u*o*g-a*_*g-h*o*d+a*f*d,A=u*f*l-h*_*l-u*o*m+a*_*m+h*o*p-a*f*p,E=t*w+i*R+r*S+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=w*b,e[1]=(_*m*s-f*p*s-_*r*g+i*p*g+f*r*d-i*m*d)*b,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*d+i*l*d)*b,e[3]=(f*l*s-o*m*s-f*r*c+i*m*c+o*r*g-i*l*g)*b,e[4]=R*b,e[5]=(h*p*s-u*m*s+u*r*g-t*p*g-h*r*d+t*m*d)*b,e[6]=(u*l*s-a*p*s-u*r*c+t*p*c+a*r*d-t*l*d)*b,e[7]=(a*m*s-h*l*s+h*r*c-t*m*c-a*r*g+t*l*g)*b,e[8]=S*b,e[9]=(u*f*s-h*_*s-u*i*g+t*_*g+h*i*d-t*f*d)*b,e[10]=(a*_*s-u*o*s+u*i*c-t*_*c-a*i*d+t*o*d)*b,e[11]=(h*o*s-a*f*s-h*i*c+t*f*c+a*i*g-t*o*g)*b,e[12]=A*b,e[13]=(h*_*r-u*f*r+u*i*m-t*_*m-h*i*p+t*f*p)*b,e[14]=(u*o*r-a*_*r-u*i*l+t*_*l+a*i*p-t*o*p)*b,e[15]=(a*f*r-h*o*r+h*i*l-t*f*l-a*i*m+t*o*m)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,m=s*c,g=s*h,u=s*f,_=a*h,p=a*f,d=o*f,w=l*c,R=l*h,S=l*f,A=i.x,E=i.y,b=i.z;return r[0]=(1-(_+d))*A,r[1]=(g+S)*A,r[2]=(u-R)*A,r[3]=0,r[4]=(g-S)*E,r[5]=(1-(m+d))*E,r[6]=(p+w)*E,r[7]=0,r[8]=(u+R)*b,r[9]=(p-w)*b,r[10]=(1-(m+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,h=1/a,f=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(i-r),m=(t+e)/(t-e),g=(i+r)/(i-r);let u,_;if(l)u=s/(a-s),_=a*s/(a-s);else if(o===An)u=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ps)u=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-r),m=-(t+e)/(t-e),g=-(i+r)/(i-r);let u,_;if(l)u=1/(a-s),_=a/(a-s);else if(o===An)u=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ps)u=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=u,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new U,cn=new pt,Uf=new U(0,0,0),If=new U(1,1,1),qn=new U,Nr=new U,Xt=new U,wl=new pt,Cl=new er;class Vn{constructor(e=0,t=0,i=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hf=0;const Pl=new U,Ci=new er,Pn=new pt,Fr=new U,or=new U,Nf=new U,Ff=new er,Dl=new U(1,0,0),Ll=new U(0,1,0),Ul=new U(0,0,1),Il={type:"added"},zf={type:"removed"},Pi={type:"childadded",child:null},so={type:"childremoved",child:null};class kt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new U,t=new Vn,i=new er,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(or,Fr,this.up):Pn.lookAt(Fr,or,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zf),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),m=a(e.skeletons),g=a(e.animations),u=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),u.length>0&&(i.nodes=u)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new U(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new U,Dn=new U,oo=new U,Ln=new U,Di=new U,Li=new U,Hl=new U,ao=new U,lo=new U,co=new U,uo=new it,ho=new it,fo=new it;class dn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),Dn.subVectors(i,t),oo.subVectors(e,t);const a=un.dot(un),o=un.dot(Dn),l=un.dot(oo),c=Dn.dot(Dn),h=Dn.dot(oo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const m=1/f,g=(c*l-o*h)*m,u=(a*h-o*l)*m;return s.set(1-g-u,u,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return uo.setScalar(0),ho.setScalar(0),fo.setScalar(0),uo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,i),fo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(uo,s.x),a.addScaledVector(ho,s.y),a.addScaledVector(fo,s.z),a}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),Dn.subVectors(e,t),un.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),un.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,i),Li.subVectors(s,i),ao.subVectors(e,i);const l=Di.dot(ao),c=Li.dot(ao);if(l<=0&&c<=0)return t.copy(i);lo.subVectors(e,r);const h=Di.dot(lo),f=Li.dot(lo);if(h>=0&&f<=h)return t.copy(r);const m=l*f-h*c;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Di,a);co.subVectors(e,s);const g=Di.dot(co),u=Li.dot(co);if(u>=0&&g<=u)return t.copy(s);const _=g*c-l*u;if(_<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Li,o);const p=h*u-g*f;if(p<=0&&f-h>=0&&g-u>=0)return Hl.subVectors(s,r),o=(f-h)/(f-h+(g-u)),t.copy(r).addScaledVector(Hl,o);const d=1/(p+_+m);return a=_*d,o=m*d,t.copy(i).addScaledVector(Di,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function po(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=qa(e,1),t=Ne(t,0,1),i=Ne(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=po(a,s,e+1/3),this.g=po(a,s,e),this.b=po(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Ye.workingToColorSpace(Ct.copy(this),e),Math.round(Ne(Ct.r*255,0,255))*65536+Math.round(Ne(Ct.g*255,0,255))*256+Math.round(Ne(Ct.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=sn){Ye.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(zr);const i=mr(Kn.h,zr.h,t),r=mr(Kn.s,zr.s,t),s=mr(Kn.l,zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new ke;ke.NAMES=ou;let Of=0;class yr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Vi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=ko,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bo&&(i.blendSrc=this.blendSrc),this.blendDst!==ko&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class br extends yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new U,Or=new Ue;let Bf=0;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ra,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class au extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lu extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kf=0;const en=new pt,mo=new kt,Ui=new U,Yt=new ri,ar=new ri,Tt=new U;class ft extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?lu:au)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Yt.min,ar.min),Yt.expandByPoint(Tt),Tt.addVectors(Yt.max,ar.max),Yt.expandByPoint(Tt)):(Yt.expandByPoint(ar.min),Yt.expandByPoint(ar.max))}Yt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Tt.add(Ui)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new U,l[L]=new U;const c=new U,h=new U,f=new U,m=new Ue,g=new Ue,u=new Ue,_=new U,p=new U;function d(L,M,T){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,M),u.fromBufferAttribute(s,T),h.sub(c),f.sub(c),g.sub(m),u.sub(m);const D=1/(g.x*u.y-u.x*g.y);isFinite(D)&&(_.copy(h).multiplyScalar(u.y).addScaledVector(f,-g.y).multiplyScalar(D),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-u.x).multiplyScalar(D),o[L].add(_),o[M].add(_),o[T].add(_),l[L].add(p),l[M].add(p),l[T].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,M=w.length;L<M;++L){const T=w[L],D=T.start,z=T.count;for(let G=D,K=D+z;G<K;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const R=new U,S=new U,A=new U,E=new U;function b(L){A.fromBufferAttribute(r,L),E.copy(A);const M=o[L];R.copy(M),R.sub(A.multiplyScalar(A.dot(M))).normalize(),S.crossVectors(E,M);const D=S.dot(l[L])<0?-1:1;a.setXYZW(L,R.x,R.y,R.z,D)}for(let L=0,M=w.length;L<M;++L){const T=w[L],D=T.start,z=T.count;for(let G=D,K=D+z;G<K;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let m=0,g=e.count;m<g;m+=3){const u=e.getX(m+0),_=e.getX(m+1),p=e.getX(m+2);r.fromBufferAttribute(t,u),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,u),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(u,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,m=new c.constructor(l.length*h);let g=0,u=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*h;for(let d=0;d<h;d++)m[u++]=c[g++]}return new jt(m,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ft,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const m=c[h],g=e(m,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,m=c.length;f<m;f++){const g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let m=0,g=f.length;m<g;m++)h.push(f[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new pt,ci=new ru,Br=new tr,Fl=new U,kr=new U,Gr=new U,Vr=new U,go=new U,Wr=new U,zl=new U,Xr=new U;class Kt extends kt{constructor(e=new ft,t=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(go.fromBufferAttribute(f,e),a?Wr.addScaledVector(go,h):Wr.addScaledVector(go.sub(t),h))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),ci.copy(e.ray).recast(e.near),!(Br.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Br,Fl)===null||ci.origin.distanceToSquared(Fl)>(e.far-e.near)**2))&&(Nl.copy(s).invert(),ci.copy(e.ray).applyMatrix4(Nl),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,m=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let u=0,_=m.length;u<_;u++){const p=m[u],d=a[p.materialIndex],w=Math.max(p.start,g.start),R=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let S=w,A=R;S<A;S+=3){const E=o.getX(S),b=o.getX(S+1),L=o.getX(S+2);r=Yr(this,d,e,i,c,h,f,E,b,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const u=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let p=u,d=_;p<d;p+=3){const w=o.getX(p),R=o.getX(p+1),S=o.getX(p+2);r=Yr(this,a,e,i,c,h,f,w,R,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let u=0,_=m.length;u<_;u++){const p=m[u],d=a[p.materialIndex],w=Math.max(p.start,g.start),R=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=w,A=R;S<A;S+=3){const E=S,b=S+1,L=S+2;r=Yr(this,d,e,i,c,h,f,E,b,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const u=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=u,d=_;p<d;p+=3){const w=p,R=p+1,S=p+2;r=Yr(this,a,e,i,c,h,f,w,R,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Gf(n,e,t,i,r,s,a,o){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ii,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function Yr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,kr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,Vr);const h=Gf(n,e,t,i,kr,Gr,Vr,zl);if(h){const f=new U;dn.getBarycoord(zl,kr,Gr,Vr,f),r&&(h.uv=dn.getInterpolatedAttribute(r,o,l,c,f,new Ue)),s&&(h.uv1=dn.getInterpolatedAttribute(s,o,l,c,f,new Ue)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a:o,b:l,c,normal:new U,materialIndex:0};dn.getNormal(kr,Gr,Vr,m.normal),h.face=m,h.barycoord=f}return h}class Ar extends ft{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let m=0,g=0;u("z","y","x",-1,-1,i,t,e,a,s,0),u("z","y","x",1,-1,i,t,-e,a,s,1),u("x","z","y",1,1,e,i,t,r,a,2),u("x","z","y",1,-1,e,i,-t,r,a,3),u("x","y","z",1,-1,e,t,i,r,s,4),u("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function u(_,p,d,w,R,S,A,E,b,L,M){const T=S/b,D=A/L,z=S/2,G=A/2,K=E/2,W=b+1,X=L+1;let $=0,B=0;const oe=new U;for(let ue=0;ue<X;ue++){const ye=ue*D-G;for(let Ge=0;Ge<W;Ge++){const tt=Ge*T-z;oe[_]=tt*w,oe[p]=ye*R,oe[d]=K,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[p]=0,oe[d]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),f.push(Ge/b),f.push(1-ue/L),$+=1}}for(let ue=0;ue<L;ue++)for(let ye=0;ye<b;ye++){const Ge=m+ye+W*ue,tt=m+ye+W*(ue+1),st=m+(ye+1)+W*(ue+1),Ke=m+(ye+1)+W*ue;l.push(Ge,tt,Ke),l.push(tt,st,Ke),B+=6}o.addGroup(g,B,M),g+=B,m+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Zi(n[t]);for(const r in i)e[r]=i[r]}return e}function Vf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const ji={clone:Zi,merge:Lt};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new U,Ol=new Ue,Bl=new Ue;class an extends uu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Ol,Bl),t.subVectors(Bl,Ol)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Hi=1;class Yf extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Ii,Hi,e,t);r.layers=this.layers,this.add(r);const s=new an(Ii,Hi,e,t);s.layers=this.layers,this.add(s);const a=new an(Ii,Hi,e,t);a.layers=this.layers,this.add(a);const o=new an(Ii,Hi,e,t);o.layers=this.layers,this.add(o);const l=new an(Ii,Hi,e,t);l.layers=this.layers,this.add(l);const c=new an(Ii,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,m,g),e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class hu extends Ht{constructor(e=[],t=qi,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qf extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:zn});s.uniforms.tEquirect.value=t;const a=new Kt(r,s),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=bn),new Yf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class fr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kf={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=h.position.distanceTo(f.position),g=.02,u=.005;c.inputState.pinching&&m>g+u?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-u&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $a{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new $a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $f extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new U;class Qn{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vo=new U,jf=new U,Jf=new ze;class di{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vo.subVectors(i,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jf.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new tr,Qf=new Ue(.5,.5),qr=new U;class fu{constructor(e=new di,t=new di,i=new di,r=new di,s=new di,a=new di){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],m=s[6],g=s[7],u=s[8],_=s[9],p=s[10],d=s[11],w=s[12],R=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,g-h,d-u,A-w).normalize(),r[1].setComponents(c+a,g+h,d+u,A+w).normalize(),r[2].setComponents(c+o,g+f,d+_,A+R).normalize(),r[3].setComponents(c-o,g-f,d-_,A-R).normalize(),i)r[4].setComponents(l,m,p,S).normalize(),r[5].setComponents(c-l,g-m,d-p,A-S).normalize();else if(r[4].setComponents(c-l,g-m,d-p,A-S).normalize(),t===An)r[5].setComponents(c+l,g+m,d+p,A+S).normalize();else if(t===Ps)r[5].setComponents(l,m,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=Qf.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qr.x=r.normal.x>0?e.max.x:e.min.x,qr.y=r.normal.y>0?e.max.y:e.min.y,qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Za extends yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ls=new U,Us=new U,kl=new pt,lr=new ru,Kr=new tr,xo=new U,Gl=new U;class ed extends kt{constructor(e=new ft,t=new Za){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ls.fromBufferAttribute(t,r-1),Us.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ls.distanceTo(Us);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;kl.copy(r).invert(),lr.copy(e.ray).applyMatrix4(kl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let _=g,p=u-1;_<p;_+=c){const d=h.getX(_),w=h.getX(_+1),R=$r(this,e,lr,l,d,w,_);R&&t.push(R)}if(this.isLineLoop){const _=h.getX(u-1),p=h.getX(g),d=$r(this,e,lr,l,_,p,u-1);d&&t.push(d)}}else{const g=Math.max(0,a.start),u=Math.min(m.count,a.start+a.count);for(let _=g,p=u-1;_<p;_+=c){const d=$r(this,e,lr,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=$r(this,e,lr,l,u-1,g,u-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $r(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Ls.fromBufferAttribute(o,r),Us.fromBufferAttribute(o,s),t.distanceSqToSegment(Ls,Us,xo,Gl)>i)return;xo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(xo);if(!(c<e.near||c>e.far))return{distance:c,point:Gl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Vl=new U,Wl=new U;class du extends ed{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vl.fromBufferAttribute(t,r),Wl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vl.distanceTo(Wl);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xl extends Ht{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=$t,this.minFilter=$t,this.generateMipmaps=!1,this.needsUpdate=!0}}class pu extends Ht{constructor(e,t,i=Mi,r,s,a,o=$t,l=$t,c,h=xr,f=1){if(h!==xr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:f};super(m,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ka(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mu extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vs extends ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,m=t/l,g=[],u=[],_=[],p=[];for(let d=0;d<h;d++){const w=d*m-a;for(let R=0;R<c;R++){const S=R*f-s;u.push(S,-w,0),_.push(0,0,1),p.push(R/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const R=w+c*d,S=w+c*(d+1),A=w+1+c*(d+1),E=w+1+c*d;g.push(R,S,E),g.push(S,A,E)}this.setIndex(g),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class td extends ft{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],m=f.start,g=f.count;for(let u=m,_=m+g;u<_;u+=3)for(let p=0;p<3;p++){const d=o.getX(u+p),w=o.getX(u+(p+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,w),Yl(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),Yl(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Yl(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class nd extends yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class id extends yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gu extends uu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rd extends ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class sd extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class od{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class wa extends Zf{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const ql=new U,Zr=new U,Ni=new U,Fi=new U,So=new U,ad=new U,ld=new U;class cd{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ql.subVectors(e,this.start),Zr.subVectors(this.end,this.start);const i=Zr.dot(Zr);let s=Zr.dot(ql)/i;return t&&(s=Ne(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=ad,i=ld){const r=10000000000000001e-32;let s,a;const o=this.start,l=e.start,c=this.end,h=e.end;Ni.subVectors(c,o),Fi.subVectors(h,l),So.subVectors(o,l);const f=Ni.dot(Ni),m=Fi.dot(Fi),g=Fi.dot(So);if(f<=r&&m<=r)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(f<=r)s=0,a=g/m,a=Ne(a,0,1);else{const u=Ni.dot(So);if(m<=r)a=0,s=Ne(-u/f,0,1);else{const _=Ni.dot(Fi),p=f*m-_*_;p!==0?s=Ne((_*g-u*m)/p,0,1):s=0,a=(_*s+g)/m,a<0?(a=0,s=Ne(-u/f,0,1)):a>1&&(a=1,s=Ne((_-u)/f,0,1))}}return t.copy(o).add(Ni.multiplyScalar(s)),i.copy(l).add(Fi.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ud extends du{constructor(e=10,t=10,i=4473924,r=8947848){i=new ke(i),r=new ke(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let m=0,g=0,u=-o;m<=t;m++,u+=a){l.push(-o,0,u,o,0,u),l.push(u,0,-o,u,0,o);const _=m===s?i:r;_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3}const h=new ft;h.setAttribute("position",new lt(l,3)),h.setAttribute("color",new lt(c,3));const f=new Za({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kl(n,e,t,i){const r=hd(i);switch(t){case jc:return n*e;case Qc:return n*e/r.components*r.byteLength;case Wa:return n*e/r.components*r.byteLength;case eu:return n*e*2/r.components*r.byteLength;case Xa:return n*e*2/r.components*r.byteLength;case Jc:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case Ya:return n*e*4/r.components*r.byteLength;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _s:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ea:case na:return Math.max(n,16)*Math.max(e,8)/4;case Qo:case ta:return Math.max(n,8)*Math.max(e,8)/2;case ia:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sa:case Ma:case Ta:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ea:case ya:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ba:case Aa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hd(n){switch(n){case gn:case qc:return{byteLength:1,components:1};case _r:case Kc:case On:return{byteLength:2,components:1};case Ga:case Va:return{byteLength:2,components:4};case Mi:case ka:case Nn:return{byteLength:4,components:1};case $c:case Zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);function _u(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fd(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((g,u)=>g.start-u.start);let m=0;for(let g=1;g<f.length;g++){const u=f[m],_=f[g];_.start<=u.start+u.count+1?u.count=Math.max(u.count,_.start+_.count-u.start):(++m,f[m]=_)}f.length=m+1;for(let g=0,u=f.length;g<u;g++){const _=f[g];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,fp=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Om=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Vm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:dd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:Sd,batching_pars_vertex:Md,batching_vertex:Td,begin_vertex:Ed,beginnormal_vertex:yd,bsdfs:bd,iridescence_fragment:Ad,bumpmap_pars_fragment:Rd,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Dd,color_fragment:Ld,color_pars_fragment:Ud,color_pars_vertex:Id,color_vertex:Hd,common:Nd,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:kd,emissivemap_pars_fragment:Gd,colorspace_fragment:Vd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:qd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:sp,envmap_vertex:$d,fog_vertex:Zd,fog_pars_vertex:jd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:rp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:up,lights_physical_pars_fragment:hp,lights_fragment_begin:fp,lights_fragment_maps:dp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:vp,map_fragment:xp,map_pars_fragment:Sp,map_particle_fragment:Mp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:yp,morphinstance_vertex:bp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:wp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Dp,normal_pars_fragment:Lp,normal_pars_vertex:Up,normal_vertex:Ip,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:Gp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:$p,shadowmap_vertex:Zp,shadowmask_pars_fragment:jp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:rm,tonemapping_pars_fragment:sm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:um,worldpos_vertex:hm,background_vert:fm,background_frag:dm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:_m,depth_vert:vm,depth_frag:xm,distanceRGBA_vert:Sm,distanceRGBA_frag:Mm,equirect_vert:Tm,equirect_frag:Em,linedashed_vert:ym,linedashed_frag:bm,meshbasic_vert:Am,meshbasic_frag:Rm,meshlambert_vert:wm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Dm,meshnormal_vert:Lm,meshnormal_frag:Um,meshphong_vert:Im,meshphong_frag:Hm,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:zm,meshtoon_frag:Om,points_vert:Bm,points_frag:km,shadow_vert:Gm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:Xm},re={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Ot={basic:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Lt([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Lt([re.lights,re.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Ot.physical={uniforms:Lt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const jr={r:0,b:0,g:0},hi=new Vn,Ym=new pt;function qm(n,e,t,i,r,s,a){const o=new ke(0);let l=s===!0?0:1,c,h,f=null,m=0,g=null;function u(R){let S=R.isScene===!0?R.background:null;return S&&S.isTexture&&(S=(R.backgroundBlurriness>0?t:e).get(S)),S}function _(R){let S=!1;const A=u(R);A===null?d(o,l):A&&A.isColor&&(d(A,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(R,S){const A=u(S);A&&(A.isCubeTexture||A.mapping===Gs)?(h===void 0&&(h=new Kt(new Ar(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Zi(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hi.copy(S.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(hi)),h.material.toneMapped=Ye.getTransfer(A.colorSpace)!==Je,(f!==A||m!==A.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,f=A,m=A.version,g=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Kt(new Vs(2,2),new Ut({name:"BackgroundMaterial",uniforms:Zi(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(A.colorSpace)!==Je,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||m!==A.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,m=A.version,g=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function d(R,S){R.getRGB(jr,cu(n)),i.buffers.color.setClear(jr.r,jr.g,jr.b,S,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,S=1){o.set(R),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,d(o,l)},render:_,addToRenderList:p,dispose:w}}function Km(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,a=!1;function o(T,D,z,G,K){let W=!1;const X=f(G,z,D);s!==X&&(s=X,c(s.object)),W=g(T,G,z,K),W&&u(T,G,z,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(T,D,z,G),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function f(T,D,z){const G=z.wireframe===!0;let K=i[T.id];K===void 0&&(K={},i[T.id]=K);let W=K[D.id];W===void 0&&(W={},K[D.id]=W);let X=W[G];return X===void 0&&(X=m(l()),W[G]=X),X}function m(T){const D=[],z=[],G=[];for(let K=0;K<t;K++)D[K]=0,z[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:G,object:T,attributes:{},index:null}}function g(T,D,z,G){const K=s.attributes,W=D.attributes;let X=0;const $=z.getAttributes();for(const B in $)if($[B].location>=0){const ue=K[B];let ye=W[B];if(ye===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ye=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ye=T.instanceColor)),ue===void 0||ue.attribute!==ye||ye&&ue.data!==ye.data)return!0;X++}return s.attributesNum!==X||s.index!==G}function u(T,D,z,G){const K={},W=D.attributes;let X=0;const $=z.getAttributes();for(const B in $)if($[B].location>=0){let ue=W[B];ue===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor));const ye={};ye.attribute=ue,ue&&ue.data&&(ye.data=ue.data),K[B]=ye,X++}s.attributes=K,s.attributesNum=X,s.index=G}function _(){const T=s.newAttributes;for(let D=0,z=T.length;D<z;D++)T[D]=0}function p(T){d(T,0)}function d(T,D){const z=s.newAttributes,G=s.enabledAttributes,K=s.attributeDivisors;z[T]=1,G[T]===0&&(n.enableVertexAttribArray(T),G[T]=1),K[T]!==D&&(n.vertexAttribDivisor(T,D),K[T]=D)}function w(){const T=s.newAttributes,D=s.enabledAttributes;for(let z=0,G=D.length;z<G;z++)D[z]!==T[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function R(T,D,z,G,K,W,X){X===!0?n.vertexAttribIPointer(T,D,z,K,W):n.vertexAttribPointer(T,D,z,G,K,W)}function S(T,D,z,G){_();const K=G.attributes,W=z.getAttributes(),X=D.defaultAttributeValues;for(const $ in W){const B=W[$];if(B.location>=0){let oe=K[$];if(oe===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),oe!==void 0){const ue=oe.normalized,ye=oe.itemSize,Ge=e.get(oe);if(Ge===void 0)continue;const tt=Ge.buffer,st=Ge.type,Ke=Ge.bytesPerElement,Y=st===n.INT||st===n.UNSIGNED_INT||oe.gpuType===ka;if(oe.isInterleavedBufferAttribute){const j=oe.data,pe=j.stride,De=oe.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)d(B.location+Ee,j.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)p(B.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ee=0;Ee<B.locationSize;Ee++)R(B.location+Ee,ye/B.locationSize,st,ue,pe*Ke,(De+ye/B.locationSize*Ee)*Ke,Y)}else{if(oe.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)d(B.location+j,oe.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let j=0;j<B.locationSize;j++)p(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let j=0;j<B.locationSize;j++)R(B.location+j,ye/B.locationSize,st,ue,ye*Ke,ye/B.locationSize*j*Ke,Y)}}else if(X!==void 0){const ue=X[$];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(B.location,ue);break;case 3:n.vertexAttrib3fv(B.location,ue);break;case 4:n.vertexAttrib4fv(B.location,ue);break;default:n.vertexAttrib1fv(B.location,ue)}}}}w()}function A(){L();for(const T in i){const D=i[T];for(const z in D){const G=D[z];for(const K in G)h(G[K].object),delete G[K];delete D[z]}delete i[T]}}function E(T){if(i[T.id]===void 0)return;const D=i[T.id];for(const z in D){const G=D[z];for(const K in G)h(G[K].object),delete G[K];delete D[z]}delete i[T.id]}function b(T){for(const D in i){const z=i[D];if(z[T.id]===void 0)continue;const G=z[T.id];for(const K in G)h(G[K].object),delete G[K];delete z[T.id]}}function L(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function $m(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let g=0;for(let u=0;u<f;u++)g+=h[u];t.update(g,i,1)}function l(c,h,f,m){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<c.length;u++)a(c[u],h[u],m[u]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,f);let u=0;for(let _=0;_<f;_++)u+=h[_]*m[_];t.update(u,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==pn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const L=b===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==gn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Nn&&!L)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=u>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:u,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:S,vertexTextures:A,maxSamples:E}}function jm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new di,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const g=f.length!==0||m||i!==0||r;return r=m,i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){t=h(f,m,0)},this.setState=function(f,m,g){const u=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||u===null||u.length===0||s&&!p)s?h(null):c();else{const w=s?0:i,R=w*4;let S=d.clippingState||null;l.value=S,S=h(u,m,R,g);for(let A=0;A!==R;++A)S[A]=t[A];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,m,g,u){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,u!==!0||p===null){const d=g+_*4,w=m.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let R=0,S=g;R!==_;++R,S+=4)a.copy(f[R]).applyMatrix4(w,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Jm(n){let e=new WeakMap;function t(a,o){return o===$o?a.mapping=qi:o===Zo&&(a.mapping=Ki),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$o||o===Zo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ki=4,$l=[.125,.215,.35,.446,.526,.582],gi=20,Mo=new gu,Zl=new ke;let To=null,Eo=0,yo=0,bo=!1;const pi=(1+Math.sqrt(5))/2,zi=1/pi,jl=[new U(-pi,zi,0),new U(pi,zi,0),new U(-zi,0,pi),new U(zi,0,pi),new U(0,pi,-zi),new U(0,pi,zi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Qm=new U;class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Qm}=s;To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,Eo,yo),this._renderer.xr.enabled=bo,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:On,format:pn,colorSpace:$i,depthBuffer:!1},r=Ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(s)),this._blurMaterial=tg(s,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,i,r,s){const l=new an(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,g=f.toneMapping;f.getClearColor(Zl),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new br({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),p=new Kt(new Ar,_);let d=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,d=!0):(_.color.copy(Zl),d=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[R],s.y,s.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[R]));const A=this._cubeSize;Jr(r,S*A,R>2?A:0,A,A),f.setRenderTarget(r),d&&f.render(p,l),f.render(e,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=g,f.autoClear=m,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Mo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jl[(r-s-1)%jl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Kt(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,u=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*gi-1),_=s/u,p=isFinite(s)?1+Math.floor(h*_):gi;p>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const d=[];let w=0;for(let b=0;b<gi;++b){const L=b/_,M=Math.exp(-L*L/2);d.push(M),b===0?w+=M:b<p&&(w+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/w;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=d,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:R}=this;m.dTheta.value=u,m.mipInt.value=R-i;const S=this._sizeLods[r],A=3*S*(r>R-ki?r-R+ki:0),E=4*(this._cubeSize-S);Jr(t,A,E,3*S,2*S),l.setRenderTarget(t),l.render(f,Mo)}}function eg(n){const e=[],t=[],i=[];let r=n;const s=n-ki+1+$l.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ki?l=$l[a-n+ki-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,m=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,u=6,_=3,p=2,d=1,w=new Float32Array(_*u*g),R=new Float32Array(p*u*g),S=new Float32Array(d*u*g);for(let E=0;E<g;E++){const b=E%3*2/3-1,L=E>2?0:-1,M=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];w.set(M,_*u*E),R.set(m,p*u*E);const T=[E,E,E,E,E,E];S.set(T,d*u*E)}const A=new ft;A.setAttribute("position",new jt(w,_)),A.setAttribute("uv",new jt(R,p)),A.setAttribute("faceIndex",new jt(S,d)),e.push(A),r>ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ql(n,e,t){const i=new Zt(n,e,t);return i.texture.mapping=Gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tg(n,e,t){const i=new Float32Array(gi),r=new U(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ja(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ec(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tc(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function ng(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$o||l===Zo,h=l===qi||l===Ki;if(c||h){let f=e.get(o);const m=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new Jl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new Jl(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ig(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rg(n,e,t,i){const r={},s=new WeakMap;function a(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const u in m.attributes)e.remove(m.attributes[u]);m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(f,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(f){const m=f.attributes;for(const g in m)e.update(m[g],n.ARRAY_BUFFER)}function c(f){const m=[],g=f.index,u=f.attributes.position;let _=0;if(g!==null){const w=g.array;_=g.version;for(let R=0,S=w.length;R<S;R+=3){const A=w[R+0],E=w[R+1],b=w[R+2];m.push(A,E,E,b,b,A)}}else if(u!==void 0){const w=u.array;_=u.version;for(let R=0,S=w.length/3-1;R<S;R+=3){const A=R+0,E=R+1,b=R+2;m.push(A,E,E,b,b,A)}}else return;const p=new(nu(m)?lu:au)(m,1);p.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function h(f){const m=s.get(f);if(m){const g=f.index;g!==null&&m.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function sg(n,e,t){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,g){n.drawElements(i,g,s,m*a),t.update(g,i,1)}function c(m,g,u){u!==0&&(n.drawElementsInstanced(i,g,s,m*a,u),t.update(g,i,u))}function h(m,g,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,u);let p=0;for(let d=0;d<u;d++)p+=g[d];t.update(p,i,1)}function f(m,g,u,_){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<m.length;d++)c(m[d]/a,g[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,_,0,u);let d=0;for(let w=0;w<u;w++)d+=g[w]*_[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function og(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ag(n,e,t){const i=new WeakMap,r=new it;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let m=i.get(o);if(m===void 0||m.count!==f){let T=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var g=T;m!==void 0&&m.texture.dispose();const u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let S=0;u===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let A=o.attributes.position.count*S,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*E*4*f),L=new iu(b,A,E,f);L.type=Nn,L.needsUpdate=!0;const M=S*4;for(let D=0;D<f;D++){const z=d[D],G=w[D],K=R[D],W=A*E*4*D;for(let X=0;X<z.count;X++){const $=X*M;u===!0&&(r.fromBufferAttribute(z,X),b[W+$+0]=r.x,b[W+$+1]=r.y,b[W+$+2]=r.z,b[W+$+3]=0),_===!0&&(r.fromBufferAttribute(G,X),b[W+$+4]=r.x,b[W+$+5]=r.y,b[W+$+6]=r.z,b[W+$+7]=0),p===!0&&(r.fromBufferAttribute(K,X),b[W+$+8]=r.x,b[W+$+9]=r.y,b[W+$+10]=r.z,b[W+$+11]=K.itemSize===4?r.w:1)}}m={count:f,texture:L,size:new Ue(A,E)},i.set(o,m),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let u=0;for(let p=0;p<c.length;p++)u+=c[p];const _=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function lg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const vu=new Ht,nc=new pu(1,1),xu=new iu,Su=new Df,Mu=new hu,ic=[],rc=[],sc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ic[r];if(s===void 0&&(s=new Float32Array(r),ic[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ws(n,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,i))return;ac.set(i),n.uniformMatrix2fv(this.addr,!1,ac),St(t,i)}}function pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,i))return;oc.set(i),n.uniformMatrix3fv(this.addr,!1,oc),St(t,i)}}function mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,i))return;sc.set(i),n.uniformMatrix4fv(this.addr,!1,sc),St(t,i)}}function gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=tu,s=nc):s=vu,t.setTexture2D(e||s,r)}function bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Su,r)}function Ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mu,r)}function Rg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xu,r)}function wg(n){switch(n){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return Sg;case 36294:return Mg;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Cg(n,e){n.uniform1fv(this.addr,e)}function Pg(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dg(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function Lg(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ug(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ig(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hg(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ng(n,e){n.uniform1iv(this.addr,e)}function Fg(n,e){n.uniform2iv(this.addr,e)}function zg(n,e){n.uniform3iv(this.addr,e)}function Og(n,e){n.uniform4iv(this.addr,e)}function Bg(n,e){n.uniform1uiv(this.addr,e)}function kg(n,e){n.uniform2uiv(this.addr,e)}function Gg(n,e){n.uniform3uiv(this.addr,e)}function Vg(n,e){n.uniform4uiv(this.addr,e)}function Wg(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||vu,s[a])}function Xg(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Su,s[a])}function Yg(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mu,s[a])}function qg(n,e,t){const i=this.cache,r=e.length,s=Ws(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xu,s[a])}function Kg(n){switch(n){case 5126:return Cg;case 35664:return Pg;case 35665:return Dg;case 35666:return Lg;case 35674:return Ug;case 35675:return Ig;case 35676:return Hg;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return zg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return kg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}class $g{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wg(t.type)}}class Zg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function lc(n,e){n.seq.push(e),n.map[e.id]=e}function Jg(n,e,t){const i=n.name,r=i.length;for(Ao.lastIndex=0;;){const s=Ao.exec(i),a=Ao.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lc(t,c===void 0?new $g(o,n,e):new Zg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new jg(o),lc(t,f)),t=f}}}class xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Jg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qg=37297;let e0=0;function t0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const uc=new ze;function n0(n){Ye._getMatrix(uc,Ye.workingColorSpace,n);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Cs:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+t0(n.getShaderSource(e),o)}else return s}function i0(n,e){const t=n0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r0(n,e){let t;switch(e){case kh:t="Linear";break;case Gh:t="Reinhard";break;case Vh:t="Cineon";break;case Wh:t="ACESFilmic";break;case Yh:t="AgX";break;case qh:t="Neutral";break;case Xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new U;function s0(){Ye.getLuminanceCoefficients(Qr);const n=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function a0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function l0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function fc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(n){return n.replace(c0,h0)}const u0=new Map;function h0(n,e){let t=Be[e];if(t===void 0){const i=u0.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ca(t)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(n){return n.replace(f0,d0)}function d0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mc(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function m0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Ki:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ki&&(e="ENVMAP_MODE_REFRACTION"),e}function _0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case Oh:e="ENVMAP_BLENDING_MIX";break;case Bh:e="ENVMAP_BLENDING_ADD";break}return e}function v0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function x0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=p0(t),c=m0(t),h=g0(t),f=_0(t),m=v0(t),g=o0(t),u=a0(s),_=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(dr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(p=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Be.tonemapping_pars_fragment:"",t.toneMapping!==ei?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),s0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Ca(a),a=fc(a,t),a=dc(a,t),o=Ca(o),o=fc(o,t),o=dc(o,t),a=pc(a),o=pc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=w+p+a,S=w+d+o,A=cc(r,r.VERTEX_SHADER,R),E=cc(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(D){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(A)||"",K=r.getShaderInfoLog(E)||"",W=z.trim(),X=G.trim(),$=K.trim();let B=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,E);else{const ue=hc(r,A,"vertex"),ye=hc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ue+`
`+ye)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||$==="")&&(oe=!1);oe&&(D.diagnostics={runnable:B,programLog:W,vertexShader:{log:X,prefix:p},fragmentShader:{log:$,prefix:d}})}r.deleteShader(A),r.deleteShader(E),L=new xs(r,_),M=l0(r,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Qg)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let S0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new T0(e),t.set(e,i)),i}}class T0{constructor(e){this.id=S0++,this.code=e,this.usedTimes=0}}function E0(n,e,t,i,r,s,a){const o=new su,l=new M0,c=new Set,h=[],f=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,T,D,z,G){const K=z.fog,W=G.geometry,X=M.isMeshStandardMaterial?z.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),B=$&&$.mapping===Gs?$.image.height:null,oe=u[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=ue!==void 0?ue.length:0;let Ge=0;W.morphAttributes.position!==void 0&&(Ge=1),W.morphAttributes.normal!==void 0&&(Ge=2),W.morphAttributes.color!==void 0&&(Ge=3);let tt,st,Ke,Y;if(oe){const $e=Ot[oe];tt=$e.vertexShader,st=$e.fragmentShader}else tt=M.vertexShader,st=M.fragmentShader,l.update(M),Ke=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const j=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),De=G.isInstancedMesh===!0,Ee=G.isBatchedMesh===!0,We=!!M.map,Rt=!!M.matcap,C=!!$,ot=!!M.aoMap,He=!!M.lightMap,Ce=!!M.bumpMap,_e=!!M.normalMap,at=!!M.displacementMap,ve=!!M.emissiveMap,Oe=!!M.metalnessMap,Mt=!!M.roughnessMap,dt=M.anisotropy>0,y=M.clearcoat>0,v=M.dispersion>0,N=M.iridescence>0,V=M.sheen>0,Z=M.transmission>0,k=dt&&!!M.anisotropyMap,Te=y&&!!M.clearcoatMap,ne=y&&!!M.clearcoatNormalMap,xe=y&&!!M.clearcoatRoughnessMap,Se=N&&!!M.iridescenceMap,ee=N&&!!M.iridescenceThicknessMap,ce=V&&!!M.sheenColorMap,we=V&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ae=!!M.specularColorMap,Fe=!!M.specularIntensityMap,P=Z&&!!M.transmissionMap,te=Z&&!!M.thicknessMap,ie=!!M.gradientMap,fe=!!M.alphaMap,J=M.alphaTest>0,q=!!M.alphaHash,ge=!!M.extensions;let Ie=ei;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const nt={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:st,defines:M.defines,customVertexShaderID:Ke,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&G._colorsTexture!==null,instancing:De,instancingColor:De&&G.instanceColor!==null,instancingMorph:De&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$i,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:Rt,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:B,aoMap:ot,lightMap:He,bumpMap:Ce,normalMap:_e,displacementMap:m&&at,emissiveMap:ve,normalMapObjectSpace:_e&&M.normalMapType===Jh,normalMapTangentSpace:_e&&M.normalMapType===jh,metalnessMap:Oe,roughnessMap:Mt,anisotropy:dt,anisotropyMap:k,clearcoat:y,clearcoatMap:Te,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:v,iridescence:N,iridescenceMap:Se,iridescenceThicknessMap:ee,sheen:V,sheenColorMap:ce,sheenRoughnessMap:we,specularMap:Me,specularColorMap:ae,specularIntensityMap:Fe,transmission:Z,transmissionMap:P,thicknessMap:te,gradientMap:ie,opaque:M.transparent===!1&&M.blending===Vi&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:q,combine:M.combine,mapUv:We&&_(M.map.channel),aoMapUv:ot&&_(M.aoMap.channel),lightMapUv:He&&_(M.lightMap.channel),bumpMapUv:Ce&&_(M.bumpMap.channel),normalMapUv:_e&&_(M.normalMap.channel),displacementMapUv:at&&_(M.displacementMap.channel),emissiveMapUv:ve&&_(M.emissiveMap.channel),metalnessMapUv:Oe&&_(M.metalnessMap.channel),roughnessMapUv:Mt&&_(M.roughnessMap.channel),anisotropyMapUv:k&&_(M.anisotropyMap.channel),clearcoatMapUv:Te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(M.sheenRoughnessMap.channel),specularMapUv:Me&&_(M.specularMap.channel),specularColorMapUv:ae&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:P&&_(M.transmissionMap.channel),thicknessMapUv:te&&_(M.thicknessMap.channel),alphaMapUv:fe&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_e||dt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(We||fe),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:ve&&M.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)T.push(D),T.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(w(T,M),R(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function w(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function R(M,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const T=u[M.type];let D;if(T){const z=Ot[T];D=ji.clone(z.uniforms)}else D=M.uniforms;return D}function A(M,T){let D;for(let z=0,G=h.length;z<G;z++){const K=h[z];if(K.cacheKey===T){D=K,++D.usedTimes;break}}return D===void 0&&(D=new x0(n,T,M,s),h.push(D)),D}function E(M){if(--M.usedTimes===0){const T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:L}}function y0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function b0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _c(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,m,g,u,_,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:m,material:g,groupOrder:u,renderOrder:f.renderOrder,z:_,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=m,d.material=g,d.groupOrder=u,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function o(f,m,g,u,_,p){const d=a(f,m,g,u,_,p);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):t.push(d)}function l(f,m,g,u,_,p){const d=a(f,m,g,u,_,p);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,m){t.length>1&&t.sort(f||b0),i.length>1&&i.sort(m||gc),r.length>1&&r.sort(m||gc)}function h(){for(let f=e,m=n.length;f<m;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function A0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new _c,n.set(i,[a])):r>=s.length?(a=new _c,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function R0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function w0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let C0=0;function P0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function D0(n){const e=new R0,t=w0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new pt,a=new pt;function o(c){let h=0,f=0,m=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let g=0,u=0,_=0,p=0,d=0,w=0,R=0,S=0,A=0,E=0,b=0;c.sort(P0);for(let M=0,T=c.length;M<T;M++){const D=c[M],z=D.color,G=D.intensity,K=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*G,f+=z.g*G,m+=z.b*G;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],G);b++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,B=t.get(D);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=W,i.directionalShadowMatrix[g]=D.shadow.matrix,w++}i.directional[g]=X,g++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(z).multiplyScalar(G),X.distance=K,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const $=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[_]=$.matrix,D.castShadow){const B=t.get(D);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=W,S++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=X,p++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const $=D.shadow,B=t.get(D);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,i.pointShadow[u]=B,i.pointShadowMap[u]=W,i.pointShadowMatrix[u]=D.shadow.matrix,R++}i.point[u]=X,u++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(G),X.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[d]=X,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=m;const L=i.hash;(L.directionalLength!==g||L.pointLength!==u||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==w||L.numPointShadows!==R||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=p,i.point.length=u,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=b,L.directionalLength=g,L.pointLength=u,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=w,L.numPointShadows=R,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=b,i.version=C0++)}function l(c,h){let f=0,m=0,g=0,u=0,_=0;const p=h.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const R=c[d];if(R.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(R.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(R.isRectAreaLight){const S=i.rectArea[u];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(R.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),u++}else if(R.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(p),m++}else if(R.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function vc(n){const e=new D0(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function L0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vc(n),e.set(r,[o])):s>=a.length?(o=new vc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function H0(n,e,t){let i=new fu;const r=new Ue,s=new Ue,a=new it,o=new nd({depthPacking:Zh}),l=new id,c={},h=t.maxTextureSize,f={[ii]:Bt,[Bt]:ii,[hn]:hn},m=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:U0,fragmentShader:I0}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const u=new ft;u.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(u,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let d=this.type;this.render=function(E,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(zn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=d!==In&&this.type===In,K=d===In&&this.type!==In;for(let W=0,X=E.length;W<X;W++){const $=E[W],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const oe=B.getFrameExtents();if(r.multiply(oe),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,B.mapSize.y=s.y)),B.map===null||G===!0||K===!0){const ye=this.type!==In?{minFilter:$t,magFilter:$t}:{};B.map!==null&&B.map.dispose(),B.map=new Zt(r.x,r.y,ye),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ue=B.getViewportCount();for(let ye=0;ye<ue;ye++){const Ge=B.getViewport(ye);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),z.viewport(a),B.updateMatrices($,ye),i=B.getFrustum(),S(b,L,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===In&&w(B,L),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(M,T,D)};function w(E,b){const L=e.update(_);m.defines.VSM_SAMPLES!==E.blurSamples&&(m.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zt(r.x,r.y)),m.uniforms.shadow_pass.value=E.map.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,L,m,_,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,L,g,_,null)}function R(E,b,L,M){let T=null;const D=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)T=D;else if(T=L.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const z=T.uuid,G=b.uuid;let K=c[z];K===void 0&&(K={},c[z]=K);let W=K[G];W===void 0&&(W=T.clone(),K[G]=W,b.addEventListener("dispose",A)),T=W}if(T.visible=b.visible,T.wireframe=b.wireframe,M===In?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:f[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=n.properties.get(T);z.light=L}return T}function S(E,b,L,M,T){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===In)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const G=e.update(E),K=E.material;if(Array.isArray(K)){const W=G.groups;for(let X=0,$=W.length;X<$;X++){const B=W[X],oe=K[B.materialIndex];if(oe&&oe.visible){const ue=R(E,oe,M,T);E.onBeforeShadow(n,E,b,L,G,ue,B),n.renderBufferDirect(L,null,G,ue,E,B),E.onAfterShadow(n,E,b,L,G,ue,B)}}}else if(K.visible){const W=R(E,K,M,T);E.onBeforeShadow(n,E,b,L,G,W,null),n.renderBufferDirect(L,null,G,W,E,null),E.onAfterShadow(n,E,b,L,G,W,null)}}const z=E.children;for(let G=0,K=z.length;G<K;G++)S(z[G],b,L,M,T)}function A(E){E.target.removeEventListener("dispose",A);for(const L in c){const M=c[L],T=E.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const N0={[Go]:Vo,[Wo]:qo,[Xo]:Ko,[Yi]:Yo,[Vo]:Go,[qo]:Wo,[Ko]:Xo,[Yo]:Yi};function F0(n,e){function t(){let P=!1;const te=new it;let ie=null;const fe=new it(0,0,0,0);return{setMask:function(J){ie!==J&&!P&&(n.colorMask(J,J,J,J),ie=J)},setLocked:function(J){P=J},setClear:function(J,q,ge,Ie,nt){nt===!0&&(J*=Ie,q*=Ie,ge*=Ie),te.set(J,q,ge,Ie),fe.equals(te)===!1&&(n.clearColor(J,q,ge,Ie),fe.copy(te))},reset:function(){P=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let P=!1,te=!1,ie=null,fe=null,J=null;return{setReversed:function(q){if(te!==q){const ge=e.get("EXT_clip_control");q?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),te=q;const Ie=J;J=null,this.setClear(Ie)}},getReversed:function(){return te},setTest:function(q){q?j(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(q){ie!==q&&!P&&(n.depthMask(q),ie=q)},setFunc:function(q){if(te&&(q=N0[q]),fe!==q){switch(q){case Go:n.depthFunc(n.NEVER);break;case Vo:n.depthFunc(n.ALWAYS);break;case Wo:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case qo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=q}},setLocked:function(q){P=q},setClear:function(q){J!==q&&(te&&(q=1-q),n.clearDepth(q),J=q)},reset:function(){P=!1,ie=null,fe=null,J=null,te=!1}}}function r(){let P=!1,te=null,ie=null,fe=null,J=null,q=null,ge=null,Ie=null,nt=null;return{setTest:function($e){P||($e?j(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function($e){te!==$e&&!P&&(n.stencilMask($e),te=$e)},setFunc:function($e,Rn,_n){(ie!==$e||fe!==Rn||J!==_n)&&(n.stencilFunc($e,Rn,_n),ie=$e,fe=Rn,J=_n)},setOp:function($e,Rn,_n){(q!==$e||ge!==Rn||Ie!==_n)&&(n.stencilOp($e,Rn,_n),q=$e,ge=Rn,Ie=_n)},setLocked:function($e){P=$e},setClear:function($e){nt!==$e&&(n.clearStencil($e),nt=$e)},reset:function(){P=!1,te=null,ie=null,fe=null,J=null,q=null,ge=null,Ie=null,nt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},m=new WeakMap,g=[],u=null,_=!1,p=null,d=null,w=null,R=null,S=null,A=null,E=null,b=new ke(0,0,0),L=0,M=!1,T=null,D=null,z=null,G=null,K=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=$>=2);let oe=null,ue={};const ye=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),tt=new it().fromArray(ye),st=new it().fromArray(Ge);function Ke(P,te,ie,fe){const J=new Uint8Array(4),q=n.createTexture();n.bindTexture(P,q),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<ie;ge++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return q}const Y={};Y[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(Yi),Ce(!1),_e(_l),j(n.CULL_FACE),ot(zn);function j(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function pe(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function De(P,te){return f[P]!==te?(n.bindFramebuffer(P,te),f[P]=te,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=te),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ee(P,te){let ie=g,fe=!1;if(P){ie=m.get(te),ie===void 0&&(ie=[],m.set(te,ie));const J=P.textures;if(ie.length!==J.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ge=J.length;q<ge;q++)ie[q]=n.COLOR_ATTACHMENT0+q;ie.length=J.length,fe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ie)}function We(P){return u!==P?(n.useProgram(P),u=P,!0):!1}const Rt={[mi]:n.FUNC_ADD,[Th]:n.FUNC_SUBTRACT,[Eh]:n.FUNC_REVERSE_SUBTRACT};Rt[yh]=n.MIN,Rt[bh]=n.MAX;const C={[Ah]:n.ZERO,[Rh]:n.ONE,[wh]:n.SRC_COLOR,[Bo]:n.SRC_ALPHA,[Ih]:n.SRC_ALPHA_SATURATE,[Lh]:n.DST_COLOR,[Ph]:n.DST_ALPHA,[Ch]:n.ONE_MINUS_SRC_COLOR,[ko]:n.ONE_MINUS_SRC_ALPHA,[Uh]:n.ONE_MINUS_DST_COLOR,[Dh]:n.ONE_MINUS_DST_ALPHA,[Hh]:n.CONSTANT_COLOR,[Nh]:n.ONE_MINUS_CONSTANT_COLOR,[Fh]:n.CONSTANT_ALPHA,[zh]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(P,te,ie,fe,J,q,ge,Ie,nt,$e){if(P===zn){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),P!==Mh){if(P!==p||$e!==M){if((d!==mi||S!==mi)&&(n.blendEquation(n.FUNC_ADD),d=mi,S=mi),$e)switch(P){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ws:n.blendFunc(n.ONE,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,R=null,A=null,E=null,b.set(0,0,0),L=0,p=P,M=$e}return}J=J||te,q=q||ie,ge=ge||fe,(te!==d||J!==S)&&(n.blendEquationSeparate(Rt[te],Rt[J]),d=te,S=J),(ie!==w||fe!==R||q!==A||ge!==E)&&(n.blendFuncSeparate(C[ie],C[fe],C[q],C[ge]),w=ie,R=fe,A=q,E=ge),(Ie.equals(b)===!1||nt!==L)&&(n.blendColor(Ie.r,Ie.g,Ie.b,nt),b.copy(Ie),L=nt),p=P,M=!1}function He(P,te){P.side===hn?pe(n.CULL_FACE):j(n.CULL_FACE);let ie=P.side===Bt;te&&(ie=!ie),Ce(ie),P.blending===Vi&&P.transparent===!1?ot(zn):ot(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const fe=P.stencilWrite;o.setTest(fe),fe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){T!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),T=P)}function _e(P){P!==vh?(j(n.CULL_FACE),P!==D&&(P===_l?n.cullFace(n.BACK):P===xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),D=P}function at(P){P!==z&&(X&&n.lineWidth(P),z=P)}function ve(P,te,ie){P?(j(n.POLYGON_OFFSET_FILL),(G!==te||K!==ie)&&(n.polygonOffset(te,ie),G=te,K=ie)):pe(n.POLYGON_OFFSET_FILL)}function Oe(P){P?j(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Mt(P){P===void 0&&(P=n.TEXTURE0+W-1),oe!==P&&(n.activeTexture(P),oe=P)}function dt(P,te,ie){ie===void 0&&(oe===null?ie=n.TEXTURE0+W-1:ie=oe);let fe=ue[ie];fe===void 0&&(fe={type:void 0,texture:void 0},ue[ie]=fe),(fe.type!==P||fe.texture!==te)&&(oe!==ie&&(n.activeTexture(ie),oe=ie),n.bindTexture(P,te||Y[P]),fe.type=P,fe.texture=te)}function y(){const P=ue[oe];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(P){tt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function we(P){st.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),st.copy(P))}function Me(P,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let fe=ie.get(P);fe===void 0&&(fe=n.getUniformBlockIndex(te,P.name),ie.set(P,fe))}function ae(P,te){const fe=c.get(te).get(P);l.get(te)!==fe&&(n.uniformBlockBinding(te,fe,P.__bindingPointIndex),l.set(te,fe))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,ue={},f={},m=new WeakMap,g=[],u=null,_=!1,p=null,d=null,w=null,R=null,S=null,A=null,E=null,b=new ke(0,0,0),L=0,M=!1,T=null,D=null,z=null,G=null,K=null,tt.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:pe,bindFramebuffer:De,drawBuffers:Ee,useProgram:We,setBlending:ot,setMaterial:He,setFlipSided:Ce,setCullFace:_e,setLineWidth:at,setPolygonOffset:ve,setScissorTest:Oe,activeTexture:Mt,bindTexture:dt,unbindTexture:y,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Se,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:xe,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:Te,scissor:ce,viewport:we,reset:Fe}}function z0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(y,v){return g?new OffscreenCanvas(y,v):Ds("canvas")}function _(y,v,N){let V=1;const Z=dt(y);if((Z.width>N||Z.height>N)&&(V=N/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(V*Z.width),Te=Math.floor(V*Z.height);f===void 0&&(f=u(k,Te));const ne=v?u(k,Te):f;return ne.width=k,ne.height=Te,ne.getContext("2d").drawImage(y,0,0,k,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+Te+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function p(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(y,v,N,V,Z=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=v;if(v===n.RED&&(N===n.FLOAT&&(k=n.R32F),N===n.HALF_FLOAT&&(k=n.R16F),N===n.UNSIGNED_BYTE&&(k=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.R8UI),N===n.UNSIGNED_SHORT&&(k=n.R16UI),N===n.UNSIGNED_INT&&(k=n.R32UI),N===n.BYTE&&(k=n.R8I),N===n.SHORT&&(k=n.R16I),N===n.INT&&(k=n.R32I)),v===n.RG&&(N===n.FLOAT&&(k=n.RG32F),N===n.HALF_FLOAT&&(k=n.RG16F),N===n.UNSIGNED_BYTE&&(k=n.RG8)),v===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.RG8UI),N===n.UNSIGNED_SHORT&&(k=n.RG16UI),N===n.UNSIGNED_INT&&(k=n.RG32UI),N===n.BYTE&&(k=n.RG8I),N===n.SHORT&&(k=n.RG16I),N===n.INT&&(k=n.RG32I)),v===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.RGB8UI),N===n.UNSIGNED_SHORT&&(k=n.RGB16UI),N===n.UNSIGNED_INT&&(k=n.RGB32UI),N===n.BYTE&&(k=n.RGB8I),N===n.SHORT&&(k=n.RGB16I),N===n.INT&&(k=n.RGB32I)),v===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),N===n.UNSIGNED_INT&&(k=n.RGBA32UI),N===n.BYTE&&(k=n.RGBA8I),N===n.SHORT&&(k=n.RGBA16I),N===n.INT&&(k=n.RGBA32I)),v===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),v===n.RGBA){const Te=Z?Cs:Ye.getTransfer(V);N===n.FLOAT&&(k=n.RGBA32F),N===n.HALF_FLOAT&&(k=n.RGBA16F),N===n.UNSIGNED_BYTE&&(k=Te===Je?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function S(y,v){let N;return y?v===null||v===Mi||v===vr?N=n.DEPTH24_STENCIL8:v===Nn?N=n.DEPTH32F_STENCIL8:v===_r&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===vr?N=n.DEPTH_COMPONENT24:v===Nn?N=n.DEPTH_COMPONENT32F:v===_r&&(N=n.DEPTH_COMPONENT16),N}function A(y,v){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==$t&&y.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function E(y){const v=y.target;v.removeEventListener("dispose",E),L(v),v.isVideoTexture&&h.delete(v)}function b(y){const v=y.target;v.removeEventListener("dispose",b),T(v)}function L(y){const v=i.get(y);if(v.__webglInit===void 0)return;const N=y.source,V=m.get(N);if(V){const Z=V[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(y),Object.keys(V).length===0&&m.delete(N)}i.remove(y)}function M(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const N=y.source,V=m.get(N);delete V[v.__cacheKey],a.memory.textures--}function T(y){const v=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Z=0;Z<v.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=y.textures;for(let V=0,Z=N.length;V<Z;V++){const k=i.get(N[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(N[V])}i.remove(y)}let D=0;function z(){D=0}function G(){const y=D;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),D+=1,y}function K(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function W(y,v){const N=i.get(y);if(y.isVideoTexture&&Oe(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,y,v);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function X(y,v){const N=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){Y(N,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function $(y,v){const N=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){Y(N,y,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function B(y,v){const N=i.get(y);if(y.version>0&&N.__version!==y.version){j(N,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const oe={[jo]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},ue={[$t]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[$s]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},ye={[Qh]:n.NEVER,[of]:n.ALWAYS,[ef]:n.LESS,[tu]:n.LEQUAL,[tf]:n.EQUAL,[sf]:n.GEQUAL,[nf]:n.GREATER,[rf]:n.NOTEQUAL};function Ge(y,v){if(v.type===Nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===$s||v.magFilter===Pr||v.magFilter===vi||v.minFilter===bn||v.minFilter===$s||v.minFilter===Pr||v.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,oe[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$t||v.minFilter!==Pr&&v.minFilter!==vi||v.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function tt(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",E));const V=v.source;let Z=m.get(V);Z===void 0&&(Z={},m.set(V,Z));const k=K(v);if(k!==y.__cacheKey){Z[k]===void 0&&(Z[k]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[k].usedTimes++;const Te=Z[y.__cacheKey];Te!==void 0&&(Z[y.__cacheKey].usedTimes--,Te.usedTimes===0&&M(v)),y.__cacheKey=k,y.__webglTexture=Z[k].texture}return N}function st(y,v,N){return Math.floor(Math.floor(y/N)/v)}function Ke(y,v,N,V){const k=y.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,N,V,v.data);else{k.sort((ee,ce)=>ee.start-ce.start);let Te=0;for(let ee=1;ee<k.length;ee++){const ce=k[Te],we=k[ee],Me=ce.start+ce.count,ae=st(we.start,v.width,4),Fe=st(ce.start,v.width,4);we.start<=Me+1&&ae===Fe&&st(we.start+we.count-1,v.width,4)===ae?ce.count=Math.max(ce.count,we.start+we.count-ce.start):(++Te,k[Te]=we)}k.length=Te+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ce=k.length;ee<ce;ee++){const we=k[ee],Me=Math.floor(we.start/4),ae=Math.ceil(we.count/4),Fe=Me%v.width,P=Math.floor(Me/v.width),te=ae,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Fe,P,te,ie,N,V,v.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function Y(y,v,N){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const Z=tt(y,v),k=v.source;t.bindTexture(V,y.__webglTexture,n.TEXTURE0+N);const Te=i.get(k);if(k.version!==Te.__version||Z===!0){t.activeTexture(n.TEXTURE0+N);const ne=Ye.getPrimaries(Ye.workingColorSpace),xe=v.colorSpace===Jn?null:Ye.getPrimaries(v.colorSpace),Se=v.colorSpace===Jn||ne===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ee=_(v.image,!1,r.maxTextureSize);ee=Mt(v,ee);const ce=s.convert(v.format,v.colorSpace),we=s.convert(v.type);let Me=R(v.internalFormat,ce,we,v.colorSpace,v.isVideoTexture);Ge(V,v);let ae;const Fe=v.mipmaps,P=v.isVideoTexture!==!0,te=Te.__version===void 0||Z===!0,ie=k.dataReady,fe=A(v,ee);if(v.isDepthTexture)Me=S(v.format===Sr,v.type),te&&(P?t.texStorage2D(n.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,we,null));else if(v.isDataTexture)if(Fe.length>0){P&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Fe[0].width,Fe[0].height);for(let J=0,q=Fe.length;J<q;J++)ae=Fe[J],P?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,we,ae.data):t.texImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ce,we,ae.data);v.generateMipmaps=!1}else P?(te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height),ie&&Ke(v,ee,ce,we)):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,we,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,Fe[0].width,Fe[0].height,ee.depth);for(let J=0,q=Fe.length;J<q;J++)if(ae=Fe[J],v.format!==pn)if(ce!==null)if(P){if(ie)if(v.layerUpdates.size>0){const ge=Kl(ae.width,ae.height,v.format,v.type);for(const Ie of v.layerUpdates){const nt=ae.data.subarray(Ie*ge/ae.data.BYTES_PER_ELEMENT,(Ie+1)*ge/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ie,ae.width,ae.height,1,ce,nt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,ce,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,ce,we,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,ce,we,ae.data)}else{P&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Fe[0].width,Fe[0].height);for(let J=0,q=Fe.length;J<q;J++)ae=Fe[J],v.format!==pn?ce!==null?P?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,we,ae.data):t.texImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ce,we,ae.data)}else if(v.isDataArrayTexture)if(P){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,ee.width,ee.height,ee.depth),ie)if(v.layerUpdates.size>0){const J=Kl(ee.width,ee.height,v.format,v.type);for(const q of v.layerUpdates){const ge=ee.data.subarray(q*J/ee.data.BYTES_PER_ELEMENT,(q+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,ce,we,ge)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,we,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ce,we,ee.data);else if(v.isData3DTexture)P?(te&&t.texStorage3D(n.TEXTURE_3D,fe,Me,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,we,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ce,we,ee.data);else if(v.isFramebufferTexture){if(te)if(P)t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height);else{let J=ee.width,q=ee.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Me,J,q,0,ce,we,null),J>>=1,q>>=1}}else if(Fe.length>0){if(P&&te){const J=dt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,fe,Me,J.width,J.height)}for(let J=0,q=Fe.length;J<q;J++)ae=Fe[J],P?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce,we,ae):t.texImage2D(n.TEXTURE_2D,J,Me,ce,we,ae);v.generateMipmaps=!1}else if(P){if(te){const J=dt(ee);t.texStorage2D(n.TEXTURE_2D,fe,Me,J.width,J.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,we,ee)}else t.texImage2D(n.TEXTURE_2D,0,Me,ce,we,ee);p(v)&&d(V),Te.__version=k.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function j(y,v,N){if(v.image.length!==6)return;const V=tt(y,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+N);const k=i.get(Z);if(Z.version!==k.__version||V===!0){t.activeTexture(n.TEXTURE0+N);const Te=Ye.getPrimaries(Ye.workingColorSpace),ne=v.colorSpace===Jn?null:Ye.getPrimaries(v.colorSpace),xe=v.colorSpace===Jn||Te===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!Se&&!ee?ce[q]=_(v.image[q],!0,r.maxCubemapSize):ce[q]=ee?v.image[q].image:v.image[q],ce[q]=Mt(v,ce[q]);const we=ce[0],Me=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),Fe=R(v.internalFormat,Me,ae,v.colorSpace),P=v.isVideoTexture!==!0,te=k.__version===void 0||V===!0,ie=Z.dataReady;let fe=A(v,we);Ge(n.TEXTURE_CUBE_MAP,v);let J;if(Se){P&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Fe,we.width,we.height);for(let q=0;q<6;q++){J=ce[q].mipmaps;for(let ge=0;ge<J.length;ge++){const Ie=J[ge];v.format!==pn?Me!==null?P?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,Ie.width,Ie.height,Me,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,Fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,Ie.width,Ie.height,Me,ae,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,Fe,Ie.width,Ie.height,0,Me,ae,Ie.data)}}}else{if(J=v.mipmaps,P&&te){J.length>0&&fe++;const q=dt(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Fe,q.width,q.height)}for(let q=0;q<6;q++)if(ee){P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,Me,ae,ce[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,ce[q].width,ce[q].height,0,Me,ae,ce[q].data);for(let ge=0;ge<J.length;ge++){const nt=J[ge].image[q].image;P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,nt.width,nt.height,Me,ae,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,Fe,nt.width,nt.height,0,Me,ae,nt.data)}}else{P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,ae,ce[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,Me,ae,ce[q]);for(let ge=0;ge<J.length;ge++){const Ie=J[ge];P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,Me,ae,Ie.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,Fe,Me,ae,Ie.image[q])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),k.__version=Z.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function pe(y,v,N,V,Z,k){const Te=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),xe=R(N.internalFormat,Te,ne,N.colorSpace),Se=i.get(v),ee=i.get(N);if(ee.__renderTarget=v,!Se.__hasExternalTextures){const ce=Math.max(1,v.width>>k),we=Math.max(1,v.height>>k);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,xe,ce,we,v.depth,0,Te,ne,null):t.texImage2D(Z,k,xe,ce,we,0,Te,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,ee.__webglTexture,0,at(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,ee.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(y,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const V=v.depthTexture,Z=V&&V.isDepthTexture?V.type:null,k=S(v.stencilBuffer,Z),Te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=at(v);ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,k,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,k,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,y)}else{const V=v.textures;for(let Z=0;Z<V.length;Z++){const k=V[Z],Te=s.convert(k.format,k.colorSpace),ne=s.convert(k.type),xe=R(k.internalFormat,Te,ne,k.colorSpace),Se=at(v);N&&ve(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,xe,v.width,v.height):ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,xe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const Z=V.__webglTexture,k=at(v);if(v.depthTexture.format===xr)ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Sr)ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function We(y){const v=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=V}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const V=y.texture.mipmaps;V&&V.length>0?Ee(v.__webglFramebuffer[0],y):Ee(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),De(v.__webglDepthbuffer[V],y,!1);else{const Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,k)}}else{const V=y.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),De(v.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(y,v,N){const V=i.get(y);v!==void 0&&pe(V.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&We(y)}function C(y){const v=y.texture,N=i.get(y),V=i.get(v);y.addEventListener("dispose",b);const Z=y.textures,k=y.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,a.memory.textures++),k){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let xe=0;xe<v.mipmaps.length;xe++)N.__webglFramebuffer[ne][xe]=n.createFramebuffer()}else N.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)N.__webglFramebuffer[ne]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ne=0,xe=Z.length;ne<xe;ne++){const Se=i.get(Z[ne]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&ve(y)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const xe=Z[ne];N.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const Se=s.convert(xe.format,xe.colorSpace),ee=s.convert(xe.type),ce=R(xe.internalFormat,Se,ee,xe.colorSpace,y.isXRRenderTarget===!0),we=at(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ce,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),De(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(N.__webglFramebuffer[ne][xe],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe);else pe(N.__webglFramebuffer[ne],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ne=0,xe=Z.length;ne<xe;ne++){const Se=Z[ne],ee=i.get(Se);let ce=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Ge(ce,Se),pe(N.__webglFramebuffer,y,Se,n.COLOR_ATTACHMENT0+ne,ce,0),p(Se)&&d(ce)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ne=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,V.__webglTexture),Ge(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(N.__webglFramebuffer[xe],y,v,n.COLOR_ATTACHMENT0,ne,xe);else pe(N.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ne,0);p(v)&&d(ne),t.unbindTexture()}y.depthBuffer&&We(y)}function ot(y){const v=y.textures;for(let N=0,V=v.length;N<V;N++){const Z=v[N];if(p(Z)){const k=w(y),Te=i.get(Z).__webglTexture;t.bindTexture(k,Te),d(k),t.unbindTexture()}}}const He=[],Ce=[];function _e(y){if(y.samples>0){if(ve(y)===!1){const v=y.textures,N=y.width,V=y.height;let Z=n.COLOR_BUFFER_BIT;const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(y),ne=v.length>1;if(ne)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const xe=y.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=i.get(v[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,N,V,0,0,N,V,Z,n.NEAREST),l===!0&&(He.length=0,Ce.length=0,He.push(n.COLOR_ATTACHMENT0+Se),y.depthBuffer&&y.resolveDepthBuffer===!1&&(He.push(k),Ce.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=i.get(v[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function at(y){return Math.min(r.maxSamples,y.samples)}function ve(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Oe(y){const v=a.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Mt(y,v){const N=y.colorSpace,V=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==$i&&N!==Jn&&(Ye.getTransfer(N)===Je?(V!==pn||Z!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function dt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Rt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function O0(n,e){function t(i,r=Jn){let s;const a=Ye.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===Ga)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Va)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$c)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return n.BYTE;if(i===Kc)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===ka)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===On)return n.HALF_FLOAT;if(i===jc)return n.ALPHA;if(i===Jc)return n.RGB;if(i===pn)return n.RGBA;if(i===xr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===Wa)return n.RED_INTEGER;if(i===eu)return n.RG;if(i===Xa)return n.RG_INTEGER;if(i===Ya)return n.RGBA_INTEGER;if(i===ms||i===gs||i===_s||i===vs)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===ea||i===ta||i===na)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===na)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ia||i===ra||i===sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ia||i===ra)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oa||i===aa||i===la||i===ca||i===ua||i===ha||i===fa||i===da||i===pa||i===ma||i===ga||i===_a||i===va||i===xa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===oa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===la)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ca)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ua)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ha)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===da)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ga)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_a)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===va)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sa||i===Ma||i===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sa)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ma)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ea||i===ya||i===ba||i===Aa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Aa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
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

}`;class G0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new mu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ut({vertexShader:B0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V0 extends Qi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,m=null,g=null,u=null;const _=typeof XRWebGLBinding<"u",p=new G0,d={},w=t.getContextAttributes();let R=null,S=null;const A=[],E=[],b=new Ue;let L=null;const M=new an;M.viewport=new it;const T=new an;T.viewport=new it;const D=[M,T],z=new sd;let G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=A[Y];return j===void 0&&(j=new _o,A[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=A[Y];return j===void 0&&(j=new _o,A[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=A[Y];return j===void 0&&(j=new _o,A[Y]=j),j.getHandSpace()};function W(Y){const j=E.indexOf(Y.inputSource);if(j===-1)return;const pe=A[j];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<A.length;Y++){const j=E[Y];j!==null&&(E[Y]=null,A[Y].disconnect(j))}G=null,K=null,p.reset();for(const Y in d)delete d[Y];e.setRenderTarget(R),g=null,m=null,f=null,r=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return u},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,Ee=null;w.depth&&(Ee=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?Sr:xr,De=w.stencil?vr:Mi);const We={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=this.getBinding(),m=f.createProjectionLayer(We),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),S=new Zt(m.textureWidth,m.textureHeight,{format:pn,type:gn,depthTexture:new pu(m.textureWidth,m.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new Zt(g.framebufferWidth,g.framebufferHeight,{format:pn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(Y){for(let j=0;j<Y.removed.length;j++){const pe=Y.removed[j],De=E.indexOf(pe);De>=0&&(E[De]=null,A[De].disconnect(pe))}for(let j=0;j<Y.added.length;j++){const pe=Y.added[j];let De=E.indexOf(pe);if(De===-1){for(let We=0;We<A.length;We++)if(We>=E.length){E.push(pe),De=We;break}else if(E[We]===null){E[We]=pe,De=We;break}if(De===-1)break}const Ee=A[De];Ee&&Ee.connect(pe)}}const B=new U,oe=new U;function ue(Y,j,pe){B.setFromMatrixPosition(j.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const De=B.distanceTo(oe),Ee=j.projectionMatrix.elements,We=pe.projectionMatrix.elements,Rt=Ee[14]/(Ee[10]-1),C=Ee[14]/(Ee[10]+1),ot=(Ee[9]+1)/Ee[5],He=(Ee[9]-1)/Ee[5],Ce=(Ee[8]-1)/Ee[0],_e=(We[8]+1)/We[0],at=Rt*Ce,ve=Rt*_e,Oe=De/(-Ce+_e),Mt=Oe*-Ce;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const dt=Rt+Oe,y=C+Oe,v=at-Mt,N=ve+(De-Mt),V=ot*C/y*dt,Z=He*C/y*dt;Y.projectionMatrix.makePerspective(v,N,V,Z,dt,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ye(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let j=Y.near,pe=Y.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),z.near=T.near=M.near=j,z.far=T.far=M.far=pe,(G!==z.near||K!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,K=z.far),z.layers.mask=Y.layers.mask|6,M.layers.mask=z.layers.mask&3,T.layers.mask=z.layers.mask&5;const De=Y.parent,Ee=z.cameras;ye(z,De);for(let We=0;We<Ee.length;We++)ye(Ee[We],De);Ee.length===2?ue(z,M,T):z.projectionMatrix.copy(M.projectionMatrix),Ge(Y,z,De)};function Ge(Y,j,pe){pe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(Y){l=Y,m!==null&&(m.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Y){return d[Y]};let tt=null;function st(Y,j){if(h=j.getViewerPose(c||a),u=j,h!==null){const pe=h.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let De=!1;pe.length!==z.cameras.length&&(z.cameras.length=0,De=!0);for(let C=0;C<pe.length;C++){const ot=pe[C];let He=null;if(g!==null)He=g.getViewport(ot);else{const _e=f.getViewSubImage(m,ot);He=_e.viewport,C===0&&(e.setRenderTargetTextures(S,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(S))}let Ce=D[C];Ce===void 0&&(Ce=new an,Ce.layers.enable(C),Ce.viewport=new it,D[C]=Ce),Ce.matrix.fromArray(ot.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ot.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(He.x,He.y,He.width,He.height),C===0&&(z.matrix.copy(Ce.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),De===!0&&z.cameras.push(Ce)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const C=f.getDepthInformation(pe[0]);C&&C.isValid&&C.texture&&p.init(C,r.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<pe.length;C++){const ot=pe[C].camera;if(ot){let He=d[ot];He||(He=new mu,d[ot]=He);const Ce=f.getCameraImage(ot);He.sourceTexture=Ce}}}}for(let pe=0;pe<A.length;pe++){const De=E[pe],Ee=A[pe];De!==null&&Ee!==void 0&&Ee.update(De,j,c||a)}tt&&tt(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),u=null}const Ke=new _u;Ke.setAnimationLoop(st),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}}const fi=new Vn,W0=new pt;function X0(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,cu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,R,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),m(p,d),d.isMeshPhysicalMaterial&&g(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),u(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,w,R):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Bt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Bt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),R=w.envMap,S=w.envMapRotation;R&&(p.envMap.value=R,fi.copy(S),fi.x*=-1,fi.y*=-1,fi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),p.envMapRotation.value.setFromMatrix4(W0.makeRotationFromEuler(fi)),p.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,R){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=R*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function m(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function u(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Y0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,R){const S=R.program;i.uniformBlockBinding(w,S)}function c(w,R){let S=r[w.id];S===void 0&&(u(w),S=h(w),r[w.id]=S,w.addEventListener("dispose",p));const A=R.program;i.updateUBOMapping(w,A);const E=e.render.frame;s[w.id]!==E&&(m(w),s[w.id]=E)}function h(w){const R=f();w.__bindingPointIndex=R;const S=n.createBuffer(),A=w.__size,E=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,S),S}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const R=r[w.id],S=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let E=0,b=S.length;E<b;E++){const L=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,T=L.length;M<T;M++){const D=L[M];if(g(D,E,M,A)===!0){const z=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let W=0;W<G.length;W++){const X=G[W],$=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+K,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(w,R,S,A){const E=w.value,b=R+"_"+S;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const L=A[b];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[b]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function u(w){const R=w.uniforms;let S=0;const A=16;for(let b=0,L=R.length;b<L;b++){const M=Array.isArray(R[b])?R[b]:[R[b]];for(let T=0,D=M.length;T<D;T++){const z=M[T],G=Array.isArray(z.value)?z.value:[z.value];for(let K=0,W=G.length;K<W;K++){const X=G[K],$=_(X),B=S%A,oe=B%$.boundary,ue=B+oe;S+=oe,ue!==0&&A-ue<$.storage&&(S+=A-ue),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=$.storage}}}const E=S%A;return E>0&&(S+=A-E),w.__size=S,w.__cache={},this}function _(w){const R={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(R.boundary=4,R.storage=4):w.isVector2?(R.boundary=8,R.storage=8):w.isVector3||w.isColor?(R.boundary=16,R.storage=12):w.isVector4?(R.boundary=16,R.storage=16):w.isMatrix3?(R.boundary=48,R.storage=48):w.isMatrix4?(R.boundary=64,R.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),R}function p(w){const R=w.target;R.removeEventListener("dispose",p);const S=a.indexOf(R.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class q0{constructor(e={}){const{canvas:t=yf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const u=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const w=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=sn;let E=0,b=0,L=null,M=-1,T=null;const D=new it,z=new it;let G=null;const K=new ke(0);let W=0,X=t.width,$=t.height,B=1,oe=null,ue=null;const ye=new it(0,0,X,$),Ge=new it(0,0,X,$);let tt=!1;const st=new fu;let Ke=!1,Y=!1;const j=new pt,pe=new U,De=new it,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Rt(){return L===null?B:1}let C=i;function ot(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const I="webgl2";if(C=ot(I,x),C===null)throw ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,Ce,_e,at,ve,Oe,Mt,dt,y,v,N,V,Z,k,Te,ne,xe,Se,ee,ce,we,Me,ae,Fe;function P(){He=new ig(C),He.init(),Me=new O0(C,He),Ce=new Zm(C,He,e,Me),_e=new F0(C,He),Ce.reversedDepthBuffer&&m&&_e.buffers.depth.setReversed(!0),at=new og(C),ve=new y0,Oe=new z0(C,He,_e,ve,Ce,Me,at),Mt=new Jm(S),dt=new ng(S),y=new fd(C),ae=new Km(C,y),v=new rg(C,y,at,ae),N=new lg(C,v,y,at),ee=new ag(C,Ce,Oe),ne=new jm(ve),V=new E0(S,Mt,dt,He,Ce,ae,ne),Z=new X0(S,ve),k=new A0,Te=new L0(He),Se=new qm(S,Mt,dt,_e,N,g,l),xe=new H0(S,N,Ce),Fe=new Y0(C,at,Ce,_e),ce=new $m(C,He,at),we=new sg(C,He,at),at.programs=V.programs,S.capabilities=Ce,S.extensions=He,S.properties=ve,S.renderLists=k,S.shadowMap=xe,S.state=_e,S.info=at}P();const te=new V0(S,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(x){x!==void 0&&(B=x,this.setSize(X,$,!1))},this.getSize=function(x){return x.set(X,$)},this.setSize=function(x,I,F=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,$=I,t.width=Math.floor(x*B),t.height=Math.floor(I*B),F===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(X*B,$*B).floor()},this.setDrawingBufferSize=function(x,I,F){X=x,$=I,B=F,t.width=Math.floor(x*F),t.height=Math.floor(I*F),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,I,F,O){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,I,F,O),_e.viewport(D.copy(ye).multiplyScalar(B).round())},this.getScissor=function(x){return x.copy(Ge)},this.setScissor=function(x,I,F,O){x.isVector4?Ge.set(x.x,x.y,x.z,x.w):Ge.set(x,I,F,O),_e.scissor(z.copy(Ge).multiplyScalar(B).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){_e.setScissorTest(tt=x)},this.setOpaqueSort=function(x){oe=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,F=!0){let O=0;if(x){let H=!1;if(L!==null){const Q=L.texture.format;H=Q===Ya||Q===Xa||Q===Wa}if(H){const Q=L.texture.type,le=Q===gn||Q===Mi||Q===_r||Q===vr||Q===Ga||Q===Va,me=Se.getClearColor(),he=Se.getClearAlpha(),Re=me.r,Pe=me.g,be=me.b;le?(u[0]=Re,u[1]=Pe,u[2]=be,u[3]=he,C.clearBufferuiv(C.COLOR,0,u)):(_[0]=Re,_[1]=Pe,_[2]=be,_[3]=he,C.clearBufferiv(C.COLOR,0,_))}else O|=C.COLOR_BUFFER_BIT}I&&(O|=C.DEPTH_BUFFER_BIT),F&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Se.dispose(),k.dispose(),Te.dispose(),ve.dispose(),Mt.dispose(),dt.dispose(),N.dispose(),ae.dispose(),Fe.dispose(),V.dispose(),te.dispose(),te.removeEventListener("sessionstart",_n),te.removeEventListener("sessionend",hl),si.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=at.autoReset,I=xe.enabled,F=xe.autoUpdate,O=xe.needsUpdate,H=xe.type;P(),at.autoReset=x,xe.enabled=I,xe.autoUpdate=F,xe.needsUpdate=O,xe.type=H}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const I=x.target;I.removeEventListener("dispose",q),ge(I)}function ge(x){Ie(x),ve.remove(x)}function Ie(x){const I=ve.get(x).programs;I!==void 0&&(I.forEach(function(F){V.releaseProgram(F)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,F,O,H,Q){I===null&&(I=Ee);const le=H.isMesh&&H.matrixWorld.determinant()<0,me=fh(x,I,F,O,H);_e.setMaterial(O,le);let he=F.index,Re=1;if(O.wireframe===!0){if(he=v.getWireframeAttribute(F),he===void 0)return;Re=2}const Pe=F.drawRange,be=F.attributes.position;let Ve=Pe.start*Re,je=(Pe.start+Pe.count)*Re;Q!==null&&(Ve=Math.max(Ve,Q.start*Re),je=Math.min(je,(Q.start+Q.count)*Re)),he!==null?(Ve=Math.max(Ve,0),je=Math.min(je,he.count)):be!=null&&(Ve=Math.max(Ve,0),je=Math.min(je,be.count));const ht=je-Ve;if(ht<0||ht===1/0)return;ae.setup(H,O,me,F,he);let rt,et=ce;if(he!==null&&(rt=y.get(he),et=we,et.setIndex(rt)),H.isMesh)O.wireframe===!0?(_e.setLineWidth(O.wireframeLinewidth*Rt()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(H.isLine){let Ae=O.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*Rt()),H.isLineSegments?et.setMode(C.LINES):H.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else H.isPoints?et.setMode(C.POINTS):H.isSprite&&et.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ae=H._multiDrawStarts,ct=H._multiDrawCounts,Xe=H._multiDrawCount,Vt=he?y.get(he).bytesPerElement:1,Ti=ve.get(O).currentProgram.getUniforms();for(let Wt=0;Wt<Xe;Wt++)Ti.setValue(C,"_gl_DrawID",Wt),et.render(Ae[Wt]/Vt,ct[Wt])}else if(H.isInstancedMesh)et.renderInstances(Ve,ht,H.count);else if(F.isInstancedBufferGeometry){const Ae=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ct=Math.min(F.instanceCount,Ae);et.renderInstances(Ve,ht,ct)}else et.render(Ve,ht)};function nt(x,I,F){x.transparent===!0&&x.side===hn&&x.forceSinglePass===!1?(x.side=Bt,x.needsUpdate=!0,Cr(x,I,F),x.side=ii,x.needsUpdate=!0,Cr(x,I,F),x.side=hn):Cr(x,I,F)}this.compile=function(x,I,F=null){F===null&&(F=x),d=Te.get(F),d.init(I),R.push(d),F.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),x!==F&&x.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const O=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Q=H.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const me=Q[le];nt(me,F,H),O.add(me)}else nt(Q,F,H),O.add(Q)}),d=R.pop(),O},this.compileAsync=function(x,I,F=null){const O=this.compile(x,I,F);return new Promise(H=>{function Q(){if(O.forEach(function(le){ve.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){H(x);return}setTimeout(Q,10)}He.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let $e=null;function Rn(x){$e&&$e(x)}function _n(){si.stop()}function hl(){si.start()}const si=new _u;si.setAnimationLoop(Rn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(x){$e=x,te.setAnimationLoop(x),x===null?si.stop():si.start()},te.addEventListener("sessionstart",_n),te.addEventListener("sessionend",hl),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,L),d=Te.get(x,R.length),d.init(I),R.push(d),j.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),st.setFromProjectionMatrix(j,An,I.reversedDepth),Y=this.localClippingEnabled,Ke=ne.init(this.clippingPlanes,Y),p=k.get(x,w.length),p.init(),w.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&qs(Q,I,-1/0,S.sortObjects)}qs(x,I,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(oe,ue),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&Se.addToRenderList(p,x),this.info.render.frame++,Ke===!0&&ne.beginShadows();const F=d.state.shadowsArray;xe.render(F,x,I),Ke===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,H=p.transmissive;if(d.setupLights(),I.isArrayCamera){const Q=I.cameras;if(H.length>0)for(let le=0,me=Q.length;le<me;le++){const he=Q[le];dl(O,H,x,he)}We&&Se.render(x);for(let le=0,me=Q.length;le<me;le++){const he=Q[le];fl(p,x,he,he.viewport)}}else H.length>0&&dl(O,H,x,I),We&&Se.render(x),fl(p,x,I);L!==null&&b===0&&(Oe.updateMultisampleRenderTarget(L),Oe.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(S,x,I),ae.resetDefaultState(),M=-1,T=null,R.pop(),R.length>0?(d=R[R.length-1],Ke===!0&&ne.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function qs(x,I,F,O){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||st.intersectsSprite(x)){O&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(j);const le=N.update(x),me=x.material;me.visible&&p.push(x,le,me,F,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||st.intersectsObject(x))){const le=N.update(x),me=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),De.copy(le.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(j)),Array.isArray(me)){const he=le.groups;for(let Re=0,Pe=he.length;Re<Pe;Re++){const be=he[Re],Ve=me[be.materialIndex];Ve&&Ve.visible&&p.push(x,le,Ve,F,De.z,be)}}else me.visible&&p.push(x,le,me,F,De.z,null)}}const Q=x.children;for(let le=0,me=Q.length;le<me;le++)qs(Q[le],I,F,O)}function fl(x,I,F,O){const H=x.opaque,Q=x.transmissive,le=x.transparent;d.setupLightsView(F),Ke===!0&&ne.setGlobalState(S.clippingPlanes,F),O&&_e.viewport(D.copy(O)),H.length>0&&wr(H,I,F),Q.length>0&&wr(Q,I,F),le.length>0&&wr(le,I,F),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function dl(x,I,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new Zt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?On:gn,minFilter:vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=d.state.transmissionRenderTarget[O.id],le=O.viewport||D;Q.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);const me=S.getRenderTarget(),he=S.getActiveCubeFace(),Re=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(K),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),We&&Se.render(F);const Pe=S.toneMapping;S.toneMapping=ei;const be=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),Ke===!0&&ne.setGlobalState(S.clippingPlanes,O),wr(x,F,O),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let je=0,ht=I.length;je<ht;je++){const rt=I[je],et=rt.object,Ae=rt.geometry,ct=rt.material,Xe=rt.group;if(ct.side===hn&&et.layers.test(O.layers)){const Vt=ct.side;ct.side=Bt,ct.needsUpdate=!0,pl(et,F,O,Ae,ct,Xe),ct.side=Vt,ct.needsUpdate=!0,Ve=!0}}Ve===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}S.setRenderTarget(me,he,Re),S.setClearColor(K,W),be!==void 0&&(O.viewport=be),S.toneMapping=Pe}function wr(x,I,F){const O=I.isScene===!0?I.overrideMaterial:null;for(let H=0,Q=x.length;H<Q;H++){const le=x[H],me=le.object,he=le.geometry,Re=le.group;let Pe=le.material;Pe.allowOverride===!0&&O!==null&&(Pe=O),me.layers.test(F.layers)&&pl(me,I,F,he,Pe,Re)}}function pl(x,I,F,O,H,Q){x.onBeforeRender(S,I,F,O,H,Q),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(S,I,F,O,x,Q),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=Bt,H.needsUpdate=!0,S.renderBufferDirect(F,I,O,H,x,Q),H.side=ii,H.needsUpdate=!0,S.renderBufferDirect(F,I,O,H,x,Q),H.side=hn):S.renderBufferDirect(F,I,O,H,x,Q),x.onAfterRender(S,I,F,O,H,Q)}function Cr(x,I,F){I.isScene!==!0&&(I=Ee);const O=ve.get(x),H=d.state.lights,Q=d.state.shadowsArray,le=H.state.version,me=V.getParameters(x,H.state,Q,I,F),he=V.getProgramCacheKey(me);let Re=O.programs;O.environment=x.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(x.isMeshStandardMaterial?dt:Mt).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",q),Re=new Map,O.programs=Re);let Pe=Re.get(he);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===le)return gl(x,me),Pe}else me.uniforms=V.getUniforms(x),x.onBeforeCompile(me,S),Pe=V.acquireProgram(me,he),Re.set(he,Pe),O.uniforms=me.uniforms;const be=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=ne.uniform),gl(x,me),O.needsLights=ph(x),O.lightsStateVersion=le,O.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.directionalShadowMap.value=H.state.directionalShadowMap,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotShadowMap.value=H.state.spotShadowMap,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMap.value=H.state.pointShadowMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),O.currentProgram=Pe,O.uniformsList=null,Pe}function ml(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=xs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function gl(x,I){const F=ve.get(x);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function fh(x,I,F,O,H){I.isScene!==!0&&(I=Ee),Oe.resetTextureUnits();const Q=I.fog,le=O.isMeshStandardMaterial?I.environment:null,me=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$i,he=(O.isMeshStandardMaterial?dt:Mt).get(O.envMap||le),Re=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!F.morphAttributes.position,Ve=!!F.morphAttributes.normal,je=!!F.morphAttributes.color;let ht=ei;O.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=S.toneMapping);const rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=rt!==void 0?rt.length:0,Ae=ve.get(O),ct=d.state.lights;if(Ke===!0&&(Y===!0||x!==T)){const Pt=x===T&&O.id===M;ne.setState(O,x,Pt)}let Xe=!1;O.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ct.state.version||Ae.outputColorSpace!==me||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==he||O.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==be||Ae.morphNormals!==Ve||Ae.morphColors!==je||Ae.toneMapping!==ht||Ae.morphTargetsCount!==et)&&(Xe=!0):(Xe=!0,Ae.__version=O.version);let Vt=Ae.currentProgram;Xe===!0&&(Vt=Cr(O,I,H));let Ti=!1,Wt=!1,ir=!1;const ut=Vt.getUniforms(),Jt=Ae.uniforms;if(_e.useProgram(Vt.program)&&(Ti=!0,Wt=!0,ir=!0),O.id!==M&&(M=O.id,Wt=!0),Ti||T!==x){_e.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",x.projectionMatrix),ut.setValue(C,"viewMatrix",x.matrixWorldInverse);const Ft=ut.map.cameraPosition;Ft!==void 0&&Ft.setValue(C,pe.setFromMatrixPosition(x.matrixWorld)),Ce.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ut.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),T!==x&&(T=x,Wt=!0,ir=!0)}if(H.isSkinnedMesh){ut.setOptional(C,H,"bindMatrix"),ut.setOptional(C,H,"bindMatrixInverse");const Pt=H.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(C,"boneTexture",Pt.boneTexture,Oe))}H.isBatchedMesh&&(ut.setOptional(C,H,"batchingTexture"),ut.setValue(C,"batchingTexture",H._matricesTexture,Oe),ut.setOptional(C,H,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",H._indirectTexture,Oe),ut.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",H._colorsTexture,Oe));const Qt=F.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ee.update(H,F,Vt),(Wt||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,ut.setValue(C,"receiveShadow",H.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Jt.envMap.value=he,Jt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&I.environment!==null&&(Jt.envMapIntensity.value=I.environmentIntensity),Wt&&(ut.setValue(C,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&dh(Jt,ir),Q&&O.fog===!0&&Z.refreshFogUniforms(Jt,Q),Z.refreshMaterialUniforms(Jt,O,B,$,d.state.transmissionRenderTarget[x.id]),xs.upload(C,ml(Ae),Jt,Oe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(xs.upload(C,ml(Ae),Jt,Oe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ut.setValue(C,"center",H.center),ut.setValue(C,"modelViewMatrix",H.modelViewMatrix),ut.setValue(C,"normalMatrix",H.normalMatrix),ut.setValue(C,"modelMatrix",H.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Pt=O.uniformsGroups;for(let Ft=0,Ks=Pt.length;Ft<Ks;Ft++){const oi=Pt[Ft];Fe.update(oi,Vt),Fe.bind(oi,Vt)}}return Vt}function dh(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function ph(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,I,F){const O=ve.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ve.get(x.texture).__webglTexture=I,ve.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:F,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const F=ve.get(x);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};const mh=C.createFramebuffer();this.setRenderTarget=function(x,I=0,F=0){L=x,E=I,b=F;let O=!0,H=null,Q=!1,le=!1;if(x){const he=ve.get(x);if(he.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(C.FRAMEBUFFER,null),O=!1;else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(he.__hasExternalTextures)Oe.rebindTextures(x,ve.get(x.texture).__webglTexture,ve.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(he.__boundDepthTexture!==be){if(be!==null&&ve.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}const Re=x.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);const Pe=ve.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?H=Pe[I][F]:H=Pe[I],Q=!0):x.samples>0&&Oe.useMultisampledRTT(x)===!1?H=ve.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?H=Pe[F]:H=Pe,D.copy(x.viewport),z.copy(x.scissor),G=x.scissorTest}else D.copy(ye).multiplyScalar(B).floor(),z.copy(Ge).multiplyScalar(B).floor(),G=tt;if(F!==0&&(H=mh),_e.bindFramebuffer(C.FRAMEBUFFER,H)&&O&&_e.drawBuffers(x,H),_e.viewport(D),_e.scissor(z),_e.setScissorTest(G),Q){const he=ve.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,F)}else if(le){const he=I;for(let Re=0;Re<x.textures.length;Re++){const Pe=ve.get(x.textures[Re]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,F,he)}}else if(x!==null&&F!==0){const he=ve.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,he.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(x,I,F,O,H,Q,le,me=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he){_e.bindFramebuffer(C.FRAMEBUFFER,he);try{const Re=x.textures[me],Pe=Re.format,be=Re.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-O&&F>=0&&F<=x.height-H&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(I,F,O,H,Me.convert(Pe),Me.convert(be),Q))}finally{const Re=L!==null?ve.get(L).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,I,F,O,H,Q,le,me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he)if(I>=0&&I<=x.width-O&&F>=0&&F<=x.height-H){_e.bindFramebuffer(C.FRAMEBUFFER,he);const Re=x.textures[me],Pe=Re.format,be=Re.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(I,F,O,H,Me.convert(Pe),Me.convert(be),0);const je=L!==null?ve.get(L).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,je);const ht=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await bf(C,ht,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Ve),C.deleteSync(ht),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,F=0){const O=Math.pow(2,-F),H=Math.floor(x.image.width*O),Q=Math.floor(x.image.height*O),le=I!==null?I.x:0,me=I!==null?I.y:0;Oe.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,le,me,H,Q),_e.unbindTexture()};const gh=C.createFramebuffer(),_h=C.createFramebuffer();this.copyTextureToTexture=function(x,I,F=null,O=null,H=0,Q=null){Q===null&&(H!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=H,H=0):Q=0);let le,me,he,Re,Pe,be,Ve,je,ht;const rt=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(F!==null)le=F.max.x-F.min.x,me=F.max.y-F.min.y,he=F.isBox3?F.max.z-F.min.z:1,Re=F.min.x,Pe=F.min.y,be=F.isBox3?F.min.z:0;else{const Qt=Math.pow(2,-H);le=Math.floor(rt.width*Qt),me=Math.floor(rt.height*Qt),x.isDataArrayTexture?he=rt.depth:x.isData3DTexture?he=Math.floor(rt.depth*Qt):he=1,Re=0,Pe=0,be=0}O!==null?(Ve=O.x,je=O.y,ht=O.z):(Ve=0,je=0,ht=0);const et=Me.convert(I.format),Ae=Me.convert(I.type);let ct;I.isData3DTexture?(Oe.setTexture3D(I,0),ct=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Oe.setTexture2DArray(I,0),ct=C.TEXTURE_2D_ARRAY):(Oe.setTexture2D(I,0),ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const Xe=C.getParameter(C.UNPACK_ROW_LENGTH),Vt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ti=C.getParameter(C.UNPACK_SKIP_PIXELS),Wt=C.getParameter(C.UNPACK_SKIP_ROWS),ir=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,be);const ut=x.isDataArrayTexture||x.isData3DTexture,Jt=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Qt=ve.get(x),Pt=ve.get(I),Ft=ve.get(Qt.__renderTarget),Ks=ve.get(Pt.__renderTarget);_e.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let oi=0;oi<he;oi++)ut&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(x).__webglTexture,H,be+oi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(I).__webglTexture,Q,ht+oi)),C.blitFramebuffer(Re,Pe,le,me,Ve,je,le,me,C.DEPTH_BUFFER_BIT,C.NEAREST);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||ve.has(x)){const Qt=ve.get(x),Pt=ve.get(I);_e.bindFramebuffer(C.READ_FRAMEBUFFER,gh),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,_h);for(let Ft=0;Ft<he;Ft++)ut?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Qt.__webglTexture,H,be+Ft):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Qt.__webglTexture,H),Jt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,Q,ht+Ft):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,Q),H!==0?C.blitFramebuffer(Re,Pe,le,me,Ve,je,le,me,C.COLOR_BUFFER_BIT,C.NEAREST):Jt?C.copyTexSubImage3D(ct,Q,Ve,je,ht+Ft,Re,Pe,le,me):C.copyTexSubImage2D(ct,Q,Ve,je,Re,Pe,le,me);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Jt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(ct,Q,Ve,je,ht,le,me,he,et,Ae,rt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(ct,Q,Ve,je,ht,le,me,he,et,rt.data):C.texSubImage3D(ct,Q,Ve,je,ht,le,me,he,et,Ae,rt):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Ve,je,le,me,et,Ae,rt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Ve,je,rt.width,rt.height,et,rt.data):C.texSubImage2D(C.TEXTURE_2D,Q,Ve,je,le,me,et,Ae,rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Vt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ti),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ir),Q===0&&I.generateMipmaps&&C.generateMipmap(ct),_e.unbindTexture()},this.initRenderTarget=function(x){ve.get(x).__webglFramebuffer===void 0&&Oe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),_e.unbindTexture()},this.resetState=function(){E=0,b=0,L=null,_e.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const xc=new ri,es=new U;class Ja extends rd{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new lt(e,3)),this.setAttribute("uv",new lt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new wa(t,6,1);return this.setAttribute("instanceStart",new Qn(i,3,0)),this.setAttribute("instanceEnd",new Qn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new wa(t,6,1);return this.setAttribute("instanceColorStart",new Qn(i,3,0)),this.setAttribute("instanceColorEnd",new Qn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new td(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),xc.setFromBufferAttribute(t),this.boundingBox.union(xc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)es.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(es)),es.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(es));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ue(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ot.line={uniforms:ji.merge([re.common,re.fog,re.line]),vertexShader:`
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
		`};class Tu extends Ut{constructor(e){super({type:"LineMaterial",uniforms:ji.clone(Ot.line.uniforms),vertexShader:Ot.line.vertexShader,fragmentShader:Ot.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ro=new it,Sc=new U,Mc=new U,Et=new it,yt=new it,vn=new it,wo=new U,Co=new pt,bt=new cd,Tc=new U,ts=new ri,ns=new tr,xn=new it;let En,Si;function Ec(n,e,t){return xn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),xn.multiplyScalar(1/xn.w),xn.x=Si/t.width,xn.y=Si/t.height,xn.applyMatrix4(n.projectionMatrixInverse),xn.multiplyScalar(1/xn.w),Math.abs(Math.max(xn.x,xn.y))}function K0(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,l=a;o<l;o++){bt.start.fromBufferAttribute(r,o),bt.end.fromBufferAttribute(s,o),bt.applyMatrix4(t);const c=new U,h=new U;En.distanceSqToSegment(bt.start,bt.end,h,c),h.distanceTo(c)<Si*.5&&e.push({point:h,pointOnLine:c,distance:En.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function $0(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),f=-e.near;En.at(1,vn),vn.w=1,vn.applyMatrix4(e.matrixWorldInverse),vn.applyMatrix4(i),vn.multiplyScalar(1/vn.w),vn.x*=s.x/2,vn.y*=s.y/2,vn.z=0,wo.copy(vn),Co.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,g=h;m<g;m++){if(Et.fromBufferAttribute(l,m),yt.fromBufferAttribute(c,m),Et.w=1,yt.w=1,Et.applyMatrix4(Co),yt.applyMatrix4(Co),Et.z>f&&yt.z>f)continue;if(Et.z>f){const R=Et.z-yt.z,S=(Et.z-f)/R;Et.lerp(yt,S)}else if(yt.z>f){const R=yt.z-Et.z,S=(yt.z-f)/R;yt.lerp(Et,S)}Et.applyMatrix4(i),yt.applyMatrix4(i),Et.multiplyScalar(1/Et.w),yt.multiplyScalar(1/yt.w),Et.x*=s.x/2,Et.y*=s.y/2,yt.x*=s.x/2,yt.y*=s.y/2,bt.start.copy(Et),bt.start.z=0,bt.end.copy(yt),bt.end.z=0;const _=bt.closestPointToPointParameter(wo,!0);bt.at(_,Tc);const p=Ef.lerp(Et.z,yt.z,_),d=p>=-1&&p<=1,w=wo.distanceTo(Tc)<Si*.5;if(d&&w){bt.start.fromBufferAttribute(l,m),bt.end.fromBufferAttribute(c,m),bt.start.applyMatrix4(a),bt.end.applyMatrix4(a);const R=new U,S=new U;En.distanceSqToSegment(bt.start,bt.end,S,R),t.push({point:S,pointOnLine:R,distance:En.origin.distanceTo(S),object:n,face:null,faceIndex:m,uv:null,uv1:null})}}}class Eu extends Kt{constructor(e=new Ja,t=new Tu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Sc.fromBufferAttribute(t,a),Mc.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Sc.distanceTo(Mc);const s=new wa(r,2,1);return e.setAttribute("instanceDistanceStart",new Qn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Qn(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;En=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Si=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),ns.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=Si*.5;else{const f=Math.max(r.near,ns.distanceToPoint(En.origin));c=Ec(r,f,l.resolution)}if(ns.radius+=c,En.intersectsSphere(ns)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ts.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=Si*.5;else{const f=Math.max(r.near,ts.distanceToPoint(En.origin));h=Ec(r,f,l.resolution)}ts.expandByScalar(h),En.intersectsBox(ts)!==!1&&(i?K0(this,t):$0(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ro),this.material.uniforms.resolution.value.set(Ro.z,Ro.w))}}const yu=[];function Gt(n,e,t={}){const i=new Tu({color:n,linewidth:e,transparent:t.transparent??!1,opacity:t.opacity??1,fog:t.fog??!0,depthWrite:!1});return yu.push(i),i}function bu(n){return n.attributes.position.array}function Ss(n,e){const t=new Ja,i=bu(n);i.length<6?t.setPositions([0,0,0,0,0,0]):t.setPositions(i);const r=new Eu(t,e);return r.frustumCulled=!1,r.visible=i.length>=6,r}function Gn(n,e){const t=new Ja;t.setPositions(n);const i=new Eu(t,e);return i.frustumCulled=!1,i}function Au(n,e){const t=bu(e);if(t.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(t)}function is(n,e){if(e.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(e)}function Ru(n,e){for(const t of yu)t.resolution.set(n,e)}function Z0(n){let e=n>>>0;const t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:t,int:(i,r)=>i+Math.floor(t()*(r-i+1)),state:()=>e}}const qe=.3,j0={hull:3,tread:2,gun:2,engine:2,core:1,ammo:1,scanner:6},J0={hull:1,tread:1.2,gun:.8,engine:1.5,core:1,ammo:1,scanner:3},Q0={H:"hull",T:"tread",G:"gun",E:"engine",C:"core",A:"ammo",S:"scanner"};function e_(n){return{size:n,cells:new Array(n.x*n.y*n.z).fill(null),rev:0}}function Qa(n,e,t,i){return e>=0&&t>=0&&i>=0&&e<n.size.x&&t<n.size.y&&i<n.size.z}function el(n,e,t,i){return e+t*n.size.x+i*n.size.x*n.size.y}function Nt(n,e,t,i){return Qa(n,e,t,i)?n.cells[el(n,e,t,i)]:null}function Pa(n,e,t,i,r){Qa(n,e,t,i)&&(n.cells[el(n,e,t,i)]=r,n.rev++)}function xi(n,e){let t=0;for(const i of n.cells)i&&i.type===e&&t++;return t}function on(n){const e=n.length,t=Math.max(...n.map(s=>s.length)),i=Math.max(...n.map(s=>Math.max(...s.map(a=>a.length)))),r=e_({x:i,y:e,z:t});for(let s=0;s<e;s++)for(let a=0;a<t;a++){const o=n[s][a]??"";for(let l=0;l<i;l++){const c=Q0[o[l]??"."];c&&(r.cells[el(r,l,s,a)]={type:c,hp:j0[c]})}}return r.rev=1,r}const Da=()=>({throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1,firePressed:!1}),wu=[Array(10).fill("TT.......TT"),["TTHHEEEHHTT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TT.HHHHH.TT","TT..HHH..TT"],["...........",".TTHHHHHTT.",".TTHHHHHTT.",".TTHHCHHTT.",".TTHHCHHTT.",".TTHHHHHTT.",".TT.HHH.TT.",".TT..H..TT.","...........","..........."]],Cu=[[".HHH.","HHHHH","HHGHH",".GGG.",".GGG.",".GGG."],[".....",".HHH.",".HHH.","..G..","..G..","..G.."]],t_=-.09,n_=1.05,i_=1.4,Hn=(n,e,t)=>n<e?e:n>t?t:n;function Pu(n,e){let t=0;for(const s of[n,e])for(const a of s.cells)a&&(t+=J0[a.type]);const i=90/Math.sqrt(t),r=xi(n,"tread");return{mass:t,topSpeed:i,accel:i/2.5,turnRate:1.8*Hn(r/72,.5,1.5),turretSlew:2.2}}function Du(n,e,t,i){const r=on(wu),s=on(Cu);return{id:n,hull:r,turret:s,x:e,z:t,heading:i,speed:0,turretYaw:0,gunPitch:0,stats:Pu(r,s),turretPivot:{x:0,y:r.size.y*qe,z:.3},alive:!0,cooldown:0,spawnTick:0,selfDestructTick:null}}const r_=wu,s_=Cu,o_=[Array(14).fill("TT.........TT"),["TTHHEEEEEHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TT.HHHHHHH.TT","TT..HHHHH..TT","TT...HHH...TT"],[".............",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TT.HHHHH.TT.",".TT..HHH..TT.",".TT...H...TT.","............."]],a_=[[".HHHH.","HHHHHH","HHGGHH",".HGGH.",".GGGG.",".GGGG.",".GGGG.",".GGGG.",".GGGG."],["......",".HHHH.",".HGGH.","..GG..","..GG..","..GG..","..GG..","..GG..","..GG.."]];function l_(n,e,t,i,r){const s=on(e==="slow"?r_:o_),a=on(e==="slow"?s_:a_),o=Pu(s,a),l=e==="slow"?.5:1.2;return o.topSpeed*=l,o.accel=o.topSpeed/2.5,o.turretSlew=e==="slow"?.785:2.094,{id:n,hull:s,turret:a,x:t,z:i,heading:r,speed:0,turretYaw:0,gunPitch:0,stats:o,turretPivot:{x:0,y:s.size.y*qe,z:.3},alive:!0,cooldown:0,spawnTick:0,selfDestructTick:null}}function Lu(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading);return[n.x+e[0]*t+e[2]*i,e[1],n.z-e[0]*i+e[2]*t]}function tl(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading),r=e[0]-n.x,s=e[2]-n.z;return[r*t-s*i,e[1],r*i+s*t]}function nl(n,e){const t=Math.cos(n.gunPitch),i=Math.sin(n.gunPitch),r=e[1]*t+e[2]*i,s=-e[1]*i+e[2]*t,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),l=e[0]*a+s*o,c=-e[0]*o+s*a;return Lu(n,[l+n.turretPivot.x,r+n.turretPivot.y,c+n.turretPivot.z])}function Uu(n,e){const t=tl(n,e),i=t[0]-n.turretPivot.x,r=t[1]-n.turretPivot.y,s=t[2]-n.turretPivot.z,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),l=i*a-s*o,c=i*o+s*a,h=Math.cos(n.gunPitch),f=Math.sin(n.gunPitch);return[l,r*h-c*f,r*f+c*h]}function Iu(n){const e=n.heading+n.turretYaw,t=Math.cos(n.gunPitch);return[t*Math.sin(e),Math.sin(n.gunPitch),t*Math.cos(e)]}function c_(n,e,t,i){const r=Hn(e.throttle,-1,1)*n.stats.topSpeed,s=n.stats.accel*t;n.speed+=Hn(r-n.speed,-s,s),n.heading+=Hn(e.turn,-1,1)*n.stats.turnRate*t,n.x+=Math.sin(n.heading)*n.speed*t,n.z+=Math.cos(n.heading)*n.speed*t;const a=i-1.5;n.x=Hn(n.x,-a,a),n.z=Hn(n.z,-a,a),n.turretYaw+=Hn(e.turretYaw,-1,1)*n.stats.turretSlew*t,n.gunPitch=Hn(n.gunPitch+Hn(e.gunPitch,-1,1)*i_*t,t_,n_)}const u_=[["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],h_=[["HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH"],["",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",""],["","","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","",""],["","","","...HHH...","...HHH...","...HHH...","","",""],["","","","","....H....","","","",""]];function yc(n){return on(n==="cube"?u_:h_)}const Hu=[{kind:"cube",x:24,z:30},{kind:"cube",x:-38,z:12},{kind:"cube",x:60,z:-45},{kind:"cube",x:-70,z:-60},{kind:"cube",x:10,z:-90},{kind:"cube",x:95,z:70},{kind:"cube",x:-110,z:85},{kind:"pyramid",x:-15,z:55},{kind:"pyramid",x:45,z:80},{kind:"pyramid",x:-60,z:-20},{kind:"pyramid",x:80,z:-10},{kind:"pyramid",x:-95,z:-105},{kind:"pyramid",x:130,z:20}],f_=[["HHHHHHHHHH"],["HHHHHHHHHH"],["HHHHHHHHHH"]],d_=[["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],p_=[["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"]],m_=[["HHHH","HAAH","HAAH","HHHH"],["HHHH","HAAH","HAAH","HHHH"]],g_=[["HH.","HHH",".HH"],["HH.",".H.","..."]],__=[["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG"],["..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG.."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."]],v_=[["H"],["H"],["H"],["G"]];function x_(n){switch(n){case"wall":return on(f_);case"bunker":return on(d_);case"tower":return on(p_);case"depot":return on(m_);case"rocks":return on(g_);case"scan":return on(__);case"pylon":return on(v_);case"cube":return yc("cube");case"pyramid":return yc("pyramid")}}function nn(n,e,t,i){return{id:n,kind:e,grid:x_(e),x:t,z:i}}[nn(100,"wall",-20,-35),nn(101,"wall",35,55),nn(102,"bunker",-55,40),nn(103,"tower",70,-70),nn(104,"depot",15,-55),nn(105,"scan",-40,-80),nn(106,"pylon",-6,70),nn(107,"pylon",6,70),...Hu.map((n,e)=>nn(200+e,n.kind,n.x,n.z))];function Nu(n,e){const t=[];for(let i=0;i<n.size.z;i++)for(let r=0;r<n.size.y;r++)for(let s=0;s<n.size.x;s++){const a=Nt(n,s,r,i);if(!a)continue;(e==="hull"?a.type==="core":e==="turret"?a.type==="gun":r===0)&&t.push([s,r,i])}return t}const S_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Ms(n,e){if(e.length===0){const s=[];for(let a=0;a<n.size.z;a++)for(let o=0;o<n.size.y;o++)for(let l=0;l<n.size.x;l++)Nt(n,l,o,a)&&s.push([l,o,a]);for(const a of s)Pa(n,a[0],a[1],a[2],null);return s}const t=new Set,i=[...e];for(const s of e)t.add(s.join(","));for(;i.length;){const s=i.pop();for(const a of S_){const o=s[0]+a[0],l=s[1]+a[1],c=s[2]+a[2],h=`${o},${l},${c}`;t.has(h)||!Nt(n,o,l,c)||(t.add(h),i.push([o,l,c]))}}const r=[];for(let s=0;s<n.size.z;s++)for(let a=0;a<n.size.y;a++)for(let o=0;o<n.size.x;o++)Nt(n,o,a,s)&&!t.has(`${o},${a},${s}`)&&r.push([o,a,s]);for(const s of r)Pa(n,s[0],s[1],s[2],null);return r}function Is(n,e,t,i){const r=qe,s=[e[0]/r+n.size.x/2,e[1]/r,e[2]/r+n.size.z/2],a=[t[0]/r,t[1]/r,t[2]/r];if(a[0]===0&&a[1]===0&&a[2]===0)return[];const o=[Math.floor(s[0]),Math.floor(s[1]),Math.floor(s[2])],l=[a[0]>0?1:a[0]<0?-1:0,a[1]>0?1:a[1]<0?-1:0,a[2]>0?1:a[2]<0?-1:0],c=[a[0]!==0?Math.abs(1/a[0]):1/0,a[1]!==0?Math.abs(1/a[1]):1/0,a[2]!==0?Math.abs(1/a[2]):1/0],h=[0,1,2].map(g=>a[g]===0?1/0:((l[g]>0?o[g]+1:o[g])-s[g])/a[g]),f=[];let m=0;for(let g=0;g<1024&&!(m>i);g++){Qa(n,o[0],o[1],o[2])&&Nt(n,o[0],o[1],o[2])&&f.push({cell:[o[0],o[1],o[2]],t:m});const u=h[0]<=h[1]?h[0]<=h[2]?0:2:h[1]<=h[2]?1:2;m=h[u],o[u]+=l[u],h[u]+=c[u]}return f}const M_=120,Fu=.9,T_=6,E_=1,y_=2.5,b_=3,zu=400,A_=72,Xs=36e3,Ou=7200,R_=45,w_={hull:2,tread:2,gun:1.5,engine:2,core:3,ammo:1,scanner:5},Bu=7,C_=6,P_=6,D_=2400,L_=600,U_=4.5,I_=6,ku=180,H_=30,Gu=150,N_=300,F_=180,z_=120;function Ts(n,e){return e.alive&&n.tick-e.spawnTick>=z_}function il(n,e,t){const i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],r=Math.hypot(i[0],i[1],i[2]);if(r<1e-6)return!0;const s=[i[0]/r,i[1]/r,i[2]/r];for(const a of n.structures){if(a.grid.cells.every(l=>!l))continue;const o=[e[0]-a.x,e[1],e[2]-a.z];if(Is(a.grid,o,s,r).length)return!1}return!0}function O_(n,e,t,i,r){let s=i,a="max";if(t[1]<-1e-6){const o=-e[1]/t[1];o>=0&&o<s&&(s=o,a="ground")}for(const o of n.structures){if(o.grid.cells.every(h=>!h))continue;const l=[e[0]-o.x,e[1],e[2]-o.z],c=Is(o.grid,l,t,s);c.length&&c[0].t<s&&(s=c[0].t,a="grid")}for(const o of n.tanks)if(!(!o.alive||o.id===r))for(const l of["hull","turret"]){const c=l==="hull"?o.hull:o.turret,h=l==="hull"?tl:Uu,f=h(o,e),m=B_(h(o,[e[0]+t[0],e[1]+t[1],e[2]+t[2]]),f),g=Is(c,f,m,s);g.length&&g[0].t<s&&(s=g[0].t,a="grid")}return{pos:[e[0]+t[0]*s,e[1]+t[1]*s,e[2]+t[2]*s],hit:a}}const B_=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]];function rs(n,e,t,i){let r=n.awareness.get(e.id);r||(r=new Map,n.awareness.set(e.id,r)),r.set(t.id,{x:t.x,z:t.z,heading:t.heading,turretYaw:t.turretYaw,tick:n.tick,source:i})}function k_(n){const e=n.tanks.filter(i=>i.alive),t=n.tick%6===0;for(const i of e){let r=n.awareness.get(i.id);r||(r=new Map,n.awareness.set(i.id,r));for(const[s,a]of r){const o=a.source==="gunfire"||a.source==="ping"?F_:N_;n.tick-a.tick>o&&r.delete(s)}if(!(n.stormUntil>n.tick))for(const s of n.tanks){if(s.id===i.id||!Ts(n,s))continue;const a=Math.hypot(s.x-i.x,s.z-i.z);a<=H_?rs(n,i,s,"proximity"):t&&a<=Gu&&il(n,[i.x,1.2,i.z],[s.x,1.2,s.z])&&rs(n,i,s,"los")}}for(const i of n.events)if(i.kind==="fire"){const r=n.tanks.find(s=>s.id===i.owner);if(!r||!Ts(n,r))continue;for(const s of e){if(s.id===r.id)continue;rs(n,s,r,"gunfire");const a=[s.x-i.pos[0],1.2-i.pos[1],s.z-i.pos[2]],o=Math.max(0,Math.min(120,a[0]*i.dir[0]+a[1]*i.dir[1]+a[2]*i.dir[2]));Math.hypot(a[0]-i.dir[0]*o,a[1]-i.dir[1]*o,a[2]-i.dir[2]*o)<3.5&&n.threats.set(s.id,{tick:n.tick,from:r.id})}}else if(i.kind==="scanPing")for(const r of e)for(const s of n.tanks)s.id!==r.id&&Ts(n,s)&&rs(n,r,s,"ping")}const Er={slow:{speedMul:.5,slew:.785,thinkTicks:24,err:.105,cooldown:[2.5,3.5],range:[60,100],turretShotChance:.1},super:{speedMul:1.2,slew:2.094,thinkTicks:15,err:.035,cooldown:[1.4,2],range:[40,80],turretShotChance:.15}};function G_(n,e=!1){return{kind:n,mode:"patrol",targetId:null,playerTracker:e,aim:null,aimY:.45,patrolGoal:null,investigateGoal:null,searchCenter:null,searchUntilTick:0,coverGoal:null,coverStructureId:null,nextCoverSeekTick:0,orbitAngle:null,orbitDirection:1,nextOrbitTick:0,fleeGoal:null,nextFleeSeekTick:0,reposition:null,nextThink:0,lastTargetSwitchTick:-9999,stuckTicks:0,lastShotTick:-9999,shotsAtContact:0,lastX:0,lastZ:0,debug:{intent:null,los:!1,err:0,evading:!1,outnumbered:!1}}}const vt=(n,e,t)=>n<e?e:n>t?t:n,Po=(n,e)=>Math.atan2(e.x-n.x,e.z-n.z),Do=n=>{for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n},It=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function V_(n,e,t){const i=n.awareness.get(e.id);if(!i)return null;const r=[];for(const[h,f]of i){const m=n.tanks.find(g=>g.id===h);!m||!Ts(n,m)||r.push({id:h,k:f})}const s=n.threats.get(e.id);if(s&&n.tick-s.tick<360){const h=r.find(f=>f.id===s.from);if(h)return h}const a=n.targeters.get(e.id);if(a&&a.size>1){t.debug.outnumbered=!0;const h=[...r].sort((f,m)=>{const g=n.tanks.find(_=>_.id===f.id),u=n.tanks.find(_=>_.id===m.id);return It(e,g)-It(e,u)})[0];if(h)return h}if(t.debug.outnumbered=!1,t.playerTracker){const h=r.find(f=>f.id===0);if(h)return h}const o=r.find(h=>h.id===t.targetId);if(o&&n.tick-t.lastTargetSwitchTick<180)return o;const c=r.filter(h=>h.id!==0).sort((h,f)=>f.k.tick-h.k.tick)[0]??r.sort((h,f)=>f.k.tick-h.k.tick)[0]??null;return c&&c.id!==t.targetId&&(t.lastTargetSwitchTick=n.tick),c}function La(n,e){const t=n.rng.next()*Math.PI*2,i=45+n.rng.next()*65;return{x:vt(e.x+Math.sin(t)*i,-190,190),z:vt(e.z+Math.cos(t)*i,-190,190)}}function W_(n,e){const t=n.rng.next()*Math.PI*2,i=18+n.rng.next()*22;return{x:vt(e.x+Math.sin(t)*i,-190,190),z:vt(e.z+Math.cos(t)*i,-190,190)}}function X_(n,e,t){let i=null,r=1/0;for(const s of n.structures){if(!s.grid.cells.some(l=>l)||It(e,s)>70)continue;const a=s.grid.size.x*qe/2+3,o=s.grid.size.z*qe/2+3;for(const l of[-1,1])for(const c of[-1,1]){const h={x:vt(s.x+l*a,-190,190),z:vt(s.z+c*o,-190,190)},f=It(e,h);if(f>60)continue;const m=Math.min(...t.map(u=>It(u,h))),g=f*.6-m*.8;g<r&&(r=g,i=h)}}return i}function Y_(n,e,t,i){const r=(i[0]+i[1])/2;let s=null,a=1/0;for(const o of n.structures){if(!o.grid.cells.some(h=>h)||It(e,o)>55)continue;const l=o.grid.size.x*qe/2+2.5,c=o.grid.size.z*qe/2+2.5;for(const h of[-1,1])for(const f of[-1,1]){const m={x:vt(o.x+h*l,-190,190),z:vt(o.z+f*c,-190,190)},g=It(e,m),u=It(t,m);if(g>45||u<i[0]-15||u>i[1]+15||!il(n,[m.x,1.2,m.z],[t.x,1.2,t.z]))continue;const _=g+Math.abs(u-r)*.7;_<a&&(a=_,s={x:m.x,z:m.z,structureId:o.id})}}return s}function q_(n,e,t){const r=Er[e.kind].turretShotChance*(t===0?.5:1);e.aimY=n.rng.next()<r?1.2:.45+n.rng.next()*.12}function bc(n,e,t,i,r){n.aim={x:n.aim?n.aim.x+(e-n.aim.x)*r:e,z:n.aim?n.aim.z+(t-n.aim.z)*r:t,y:i}}function K_(n,e,t){const i={throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1};if(n.tick<e.nextThink)return cr(n,e,t,i);if(e.nextThink=n.tick+Er[e.kind].thinkTicks,e.mode!=="engage"){const h=It(t,{x:e.lastX,z:e.lastZ});e.stuckTicks=h<.5?e.stuckTicks+Er[e.kind].thinkTicks:0}if(e.lastX=t.x,e.lastZ=t.z,e.stuckTicks>180){e.stuckTicks=0,e.mode="reposition";const h=n.rng.next()*Math.PI*2;e.reposition={x:vt(t.x+Math.sin(h)*30,-190,190),z:vt(t.z+Math.cos(h)*30,-190,190)}}const r=n.tanks.find(h=>h.id===e.targetId);e.targetId!==null&&(!r||!r.alive)&&(e.targetId=null,e.aim=null,e.mode="patrol",e.patrolGoal=null,e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,e.shotsAtContact=0);const s=V_(n,t,e);if(!s)return e.targetId=null,e.aim=null,e.mode="patrol",e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,(!e.patrolGoal||It(t,e.patrolGoal)<8)&&(e.patrolGoal=La(n,t)),e.debug.intent=[e.patrolGoal.x,.8,e.patrolGoal.z],e.debug.los=!1,cr(n,e,t,i);const a=e.targetId!==s.id;a&&(e.shotsAtContact=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null),e.targetId=s.id;const o=n.tanks.find(h=>h.id===s.id),l=s.k,c=It(t,o)<=Gu&&il(n,[t.x,1.2,t.z],[o.x,1.2,o.z]);return e.debug.los=c,c?(e.mode="engage",e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.reposition=null,(a||e.shotsAtContact===0||e.shotsAtContact%8===0)&&q_(n,e,o.id),bc(e,o.x,o.z,e.aimY,e.aim?.35:1),e.debug.intent=[o.x,o.z,e.aimY],cr(n,e,t,i)):(e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,e.mode!=="investigate"&&e.mode!=="reposition"?(e.mode="investigate",e.searchCenter={x:l.x,z:l.z},e.searchUntilTick=n.tick+480,e.investigateGoal={x:l.x,z:l.z},e.reposition=null):(e.searchCenter={x:l.x,z:l.z},(!e.investigateGoal||It(t,e.investigateGoal)<6)&&(e.investigateGoal=W_(n,e.searchCenter))),n.tick>e.searchUntilTick?(e.mode="patrol",e.targetId=null,e.aim=null,e.investigateGoal=null,e.searchCenter=null,e.patrolGoal=La(n,t),e.debug.intent=[e.patrolGoal.x,.8,e.patrolGoal.z],cr(n,e,t,i)):(bc(e,e.investigateGoal.x,e.investigateGoal.z,.8,e.aim?.25:1),e.debug.intent=[e.investigateGoal.x,.8,e.investigateGoal.z],cr(n,e,t,i)))}function cr(n,e,t,i){const r=Er[e.kind],s=n.tanks.find(c=>c.id===e.targetId);e.mode==="engage"&&(!s||!s.alive)&&(e.mode="patrol",e.targetId=null,e.aim=null,e.patrolGoal=null);const a=xi(t.turret,"gun")===0;let o=null,l=0;if(a)o=e.aim??e.investigateGoal??e.patrolGoal,l=1;else if(e.mode==="patrol")(!e.patrolGoal||It(t,e.patrolGoal)<8)&&(e.patrolGoal=La(n,t)),o=e.patrolGoal,l=.55;else if(e.mode==="investigate")o=e.investigateGoal,l=.7;else if(e.mode==="reposition")o=e.reposition,l=.75,o&&It(t,o)<6&&(e.reposition=null,e.mode=e.targetId?"investigate":"patrol");else if(e.mode==="engage"&&s){const c=It(t,s),h=n.threats.get(t.id),f=h!==void 0&&n.tick-h.tick<90;e.debug.evading=f;const m=(n.targeters.get(t.id)?.size??0)>1;if(e.debug.outnumbered=m,m){const g=[...n.targeters.get(t.id)??[]].map(u=>n.tanks.find(_=>_.id===u)).filter(u=>!!u&&u.alive);if((n.tick>=e.nextFleeSeekTick||!e.fleeGoal)&&(e.fleeGoal=X_(n,t,g.length?g:[s]),e.nextFleeSeekTick=n.tick+90),e.fleeGoal)o=e.fleeGoal;else{const u=Math.atan2(t.x-s.x,t.z-s.z);o={x:vt(t.x+Math.sin(u)*30,-190,190),z:vt(t.z+Math.cos(u)*30,-190,190)}}l=.85,e.coverGoal=null}else{e.fleeGoal=null;const g=e.coverStructureId!==null&&!n.structures.some(u=>u.id===e.coverStructureId&&u.grid.cells.some(_=>_));if(f||g||n.tick>=e.nextCoverSeekTick){const u=Y_(n,t,s,r.range);e.coverGoal=u?{x:u.x,z:u.z}:null,e.coverStructureId=u?.structureId??null,e.nextCoverSeekTick=n.tick+90}if(f&&e.coverGoal)o=e.coverGoal,l=.7;else if(c>r.range[1])e.coverGoal=null,o=s,l=.65;else if(c<r.range[0]){e.coverGoal=null;const u=Math.atan2(t.x-s.x,t.z-s.z);o={x:vt(t.x+Math.sin(u)*25,-190,190),z:vt(t.z+Math.cos(u)*25,-190,190)},l=.55}else if(e.coverGoal)o=e.coverGoal,l=.45;else{e.orbitAngle===null&&(e.orbitAngle=Po(s,t)),n.tick>=e.nextOrbitTick&&(e.orbitAngle+=e.orbitDirection*.16,e.nextOrbitTick=n.tick+30);const u=(r.range[0]+r.range[1])/2;o={x:vt(s.x+Math.sin(e.orbitAngle)*u,-190,190),z:vt(s.z+Math.cos(e.orbitAngle)*u,-190,190)},l=f?.5:.35}}}if(o){const c=Do(Po(t,o)-t.heading);i.turn=Math.abs(c)<.025?0:vt(c*1.6,-1,1),i.throttle=Math.abs(c)>1.1?Math.min(l,.2):l}if(a)return i;if(e.mode==="patrol")return i.turretYaw=Math.sin(n.tick*.01+t.id)*.35,i;if(e.aim){const c=Do(Po(t,e.aim)-t.heading),h=Do(c-t.turretYaw);i.turretYaw=Math.abs(h)<.015?0:vt(h*3,-1,1);const f=Math.hypot(e.aim.x-t.x,e.aim.z-t.z),m=t.turretPivot.y+qe,g=Math.atan2(e.aim.y-m,f);if(i.gunPitch=vt((g-t.gunPitch)*3,-1,1),e.mode==="engage"&&e.debug.los&&Math.abs(h)<.1&&f<r.range[1]+40&&t.cooldown===0){const u=1+f/100,_=e.shotsAtContact===0?2:1,p=r.err*u*_;e.debug.err=p,t.turretYaw+=(n.rng.next()-.5)*2*p,i.fire=!0,e.shotsAtContact++,e.lastShotTick=n.tick}}return i}function $_(){return{state:"dormant",untilTick:Xs-Ou,nextBomb:0,bombsLeft:0}}function Z_(n){const e=n.volcano;if(n.sky.volcano&&!(n.tick<Xs-Ou))if(e.state==="dormant")e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"});else if(e.state==="rumble")n.tick>=e.untilTick&&(e.state="erupt",e.untilTick=n.tick+600,e.bombsLeft=10+Math.floor(n.rng.next()*7),e.nextBomb=n.tick+30,n.events.push({kind:"volcanoErupt"}));else if(e.state==="erupt"){if(e.bombsLeft>0&&n.tick>=e.nextBomb){const t=(n.rng.next()-.5)*320,i=(n.rng.next()-.5)*320;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:Bu,kind:"volcano"}),n.events.push({kind:"bombTelegraph",pos:[t,0,i]}),e.bombsLeft--,e.nextBomb=n.tick+45}n.tick>=e.untilTick&&(e.state="cooldown",e.untilTick=n.tick+1200)}else e.state==="cooldown"&&n.tick>=e.untilTick&&(e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"}))}function j_(n,e,t,i="volcano"){if(i==="volcano"){if(n.lavaPools.push({x:e,z:t,radius:P_+n.rng.next()*2,untilTick:n.tick+D_}),n.rng.next()<.35){const r=Math.max(-190,Math.min(190,e+8)),s=Math.max(-190,Math.min(190,t+8));n.structures.push(nn(n.nextId++,"rocks",r,s))}}else{const r=Math.max(-190,Math.min(190,e+3.5)),s=Math.max(-190,Math.min(190,t+3.5));n.structures.push(nn(n.nextId++,"rocks",r,s))}}const gr={slow:100,missile:250,super:500,bomber:1e3,block:5},Vu=7200,J_=90,Q_=4,Ua=(n,e,t)=>n<e?e:n>t?t:n,rl=n=>{const e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]};function Wu(n,e,t){const i=Ua(n[0]*e[0]+n[1]*e[1]+n[2]*e[2],-1,1),r=Math.acos(i);if(r<=t||r<1e-6)return e;const s=t/r;return rl([n[0]+(e[0]-n[0])*s,n[1]+(e[1]-n[1])*s,n[2]+(e[2]-n[2])*s])}function ev(n){const e=n.tanks[0];for(let i=0;i<24;i++){const r=n.rng.next()*Math.PI*2,s=100+n.rng.next()*40,a=Ua(e.x+Math.sin(r)*s,-190,190),o=Ua(e.z+Math.cos(r)*s,-190,190);let l=!0;for(const c of n.structures){if(!c.grid.cells.some(m=>m))continue;const h=c.grid.size.x*qe/2+5,f=c.grid.size.z*qe/2+5;if(Math.abs(a-c.x)<h&&Math.abs(o-c.z)<f){l=!1;break}}if(l&&n.tanks.every(c=>!c.alive||Math.hypot(c.x-a,c.z-o)>14))return{x:a,z:o}}const t=n.rng.next()*Math.PI*2;return{x:Math.sin(t)*170,z:Math.cos(t)*170}}function Ac(n,e){const t=ev(n),i=l_(n.nextId++,e,t.x,t.z,Math.atan2(n.tanks[0].x-t.x,n.tanks[0].z-t.z));i.spawnTick=n.tick,n.tanks.push(i),n.brains.set(i.id,G_(e)),e==="super"&&n.events.push({kind:"superSpawn",pos:[t.x,1,t.z]})}function tv(n){const e=n.tanks.filter(r=>r.id!==0&&r.alive&&n.brains.has(r.id));if(!e.length||e.filter(r=>n.brains.get(r.id).playerTracker).length===1)return;for(const r of e)n.brains.get(r.id).playerTracker=!1;const i=e.find(r=>n.brains.get(r.id).kind==="slow")??e[0];n.brains.get(i.id).playerTracker=!0}function nv(n){const e=n.tanks.filter(c=>c.alive);if(!e.length)return;const i=n.rng.next()<.55&&e.some(c=>c.id===0)?n.tanks[0]:e[Math.floor(n.rng.next()*e.length)],r=n.rng.next()*Math.PI*2,s=[Math.sin(r)*205,11+n.rng.next()*5,Math.cos(r)*205],a=n.rng.next()<.6,o=rl([i.x-s[0],-.03,i.z-s[2]]),l=n.nextId++;n.missiles.push({id:l,pos:s,dir:o,speed:14+n.rng.next()*4,age:0,alive:!0,targetId:i.id,tracking:a,turnRate:a?.45:0}),i.id===0&&n.events.push({kind:"missileLock",id:l,pos:s})}function iv(n){if(n.phase==="play"){let e=n.tanks.filter(i=>i.alive&&n.brains.get(i.id)?.kind==="slow").length;for(;e<Q_&&n.tick>=n.nextSpawnTick;)Ac(n,"slow"),e++,n.nextSpawnTick=n.tick+90;if(!n.tanks.some(i=>i.alive&&n.brains.get(i.id)?.kind==="super")&&n.tick>=n.nextSuperTick&&(Ac(n,"super"),n.nextSuperTick=n.tick+7200+Math.floor(n.rng.next()*3600)),tv(n),n.tick>=n.nextMissileTick&&n.missiles.filter(i=>i.alive).length<3&&(nv(n),n.nextMissileTick=n.tick+1500+Math.floor(n.rng.next()*1800)),!n.bomber&&n.tick>=n.nextBomberTick){const i=n.tanks[0].alive?n.tanks[0]:n.tanks.find(f=>f.alive)??n.tanks[0],r=i.x,s=i.z,o=Math.hypot(r,s)<1e-6?n.rng.next()*Math.PI*2:Math.atan2(r,s),l=[Math.sin(o),0,Math.cos(o)],c=i.x-l[0]*205,h=i.z-l[2]*205;n.bomber={id:n.nextId++,pos:[c,15,h],dir:l,speed:8,hp:3,alive:!0,nextBomb:n.tick+60,targetId:i.id},n.nextBomberTick=n.tick+Vu,n.events.push({kind:"bomberInbound",pos:[c,15,h]})}}rv(n),sv(n),ov(n)}function rv(n){for(const e of n.missiles){if(!e.alive)continue;e.age++;const t=n.tanks.find(r=>r.id===e.targetId);if(e.tracking&&t?.alive){const r=rl([t.x-e.pos[0],1-e.pos[1],t.z-e.pos[2]]);e.dir=Wu(e.dir,r,e.turnRate/60)}e.pos[0]+=e.dir[0]*e.speed/60,e.pos[1]+=e.dir[1]*e.speed/60,e.pos[2]+=e.dir[2]*e.speed/60;for(const r of n.shells)if(Math.hypot(r.pos[0]-e.pos[0],r.pos[1]-e.pos[1],r.pos[2]-e.pos[2])<1.8){e.alive=!1,r.alive=!1,n.events.push({kind:"kill",id:e.id,what:"missile",by:r.owner}),n.events.push({kind:"explosion",pos:[e.pos[0],e.pos[1],e.pos[2]],radius:1.5,damage:2,source:"airburst"});break}if(!e.alive)continue;let i=e.pos[1]<=.35;if(!i&&e.pos[1]<3){for(const r of n.tanks)if(r.alive&&Math.hypot(r.x-e.pos[0],r.z-e.pos[2])<2.2){i=!0;break}}i?(e.alive=!1,n.pendingExplosions.push({pos:[e.pos[0],.5,e.pos[2]],radius:3,damage:4,source:"missile"})):(e.age>1200||Math.abs(e.pos[0])>220||Math.abs(e.pos[2])>220)&&(e.alive=!1)}n.missiles=n.missiles.filter(e=>e.alive)}function sv(n){const e=n.bomber;if(!e||!e.alive){e&&!e.alive&&(n.bomber=null);return}const t=n.tanks.find(i=>i.id===e.targetId&&i.alive)??n.tanks[0];if(t.alive){const i=[t.x-e.pos[0],0,t.z-e.pos[2]],r=Math.hypot(i[0],i[2])||1;e.dir=Wu(e.dir,[i[0]/r,0,i[2]/r],.0025)}if(e.pos[0]+=e.dir[0]*e.speed/60,e.pos[2]+=e.dir[2]*e.speed/60,n.tick>=e.nextBomb){let i=e.pos[0],r=e.pos[2];for(const s of n.tanks)if(s.alive&&Math.hypot(s.x-e.pos[0],s.z-e.pos[2])<4){i=s.x,r=s.z;break}n.telegraphs.push({x:i,z:r,impactTick:n.tick+J_,radius:2,kind:"bomb"}),n.events.push({kind:"bombTelegraph",pos:[i,0,r]}),e.nextBomb=n.tick+R_}for(const i of n.shells)if(i.pos[1]>10&&Math.abs(i.pos[1]-e.pos[1])<3.5&&Math.hypot(i.pos[0]-e.pos[0],i.pos[2]-e.pos[2])<5.5){e.hp--,i.alive=!1,e.hp<=0&&(e.alive=!1,n.events.push({kind:"kill",id:e.id,what:"bomber",by:i.owner}),n.events.push({kind:"explosion",pos:[e.pos[0],e.pos[1],e.pos[2]],radius:3,damage:0,source:"airburst"}));break}(Math.abs(e.pos[0])>220||Math.abs(e.pos[2])>220)&&(e.alive=!1),e.alive||(n.bomber=null)}function ov(n){const e=n.telegraphs.filter(t=>n.tick>=t.impactTick);if(e.length){n.telegraphs=n.telegraphs.filter(t=>n.tick<t.impactTick);for(const t of e){const i=t.kind==="volcano",r=t.kind==="meteor";n.pendingExplosions.push({pos:[t.x,.5,t.z],radius:i?Bu:r?4:t.radius,damage:i?C_:r?5:3,source:i?"volcano":r?"meteor":"bomb"}),t.kind!=="bomb"&&j_(n,t.x,t.z,t.kind)}}}function sl(n,e){const t=n.structures.find(r=>r.id===e.pylonA),i=n.structures.find(r=>r.id===e.pylonB);return!!t&&!!i&&t.grid.cells.some(r=>r)&&i.grid.cells.some(r=>r)}function av(n,e,t,i){if(e[1]>n.height||e[1]+t[1]*i<0)return null;const r=n.bx-n.ax,s=n.bz-n.az,a=t[0]*s-t[2]*r;if(Math.abs(a)<1e-9)return null;const o=n.ax-e[0],l=n.az-e[2],c=(o*s-l*r)/a,h=(o*t[2]-l*t[0])/a;return c<0||c>i||h<0||h>1?null:c}function lv(n,e,t,i){const r=n.bx-n.ax,s=n.bz-n.az,a=r*r+s*s;let o=((e-n.ax)*r+(t-n.az)*s)/a;o=Math.max(0,Math.min(1,o));const l=n.ax+r*o,c=n.az+s*o,h=e-l,f=t-c,m=Math.hypot(h,f);if(m>=i||m<1e-9)return null;const g=(i-m)/m;return{x:h*g,z:f*g}}const ss=n=>Hu.filter(e=>!n||n(e)).map(e=>({kind:e.kind,x:e.x,z:e.z})),os=(n,e,t,i,r,s,a)=>({id:n,ax:e,az:t,bx:i,bz:r,pylonA:s,pylonB:a,height:2.4}),Xu={classic:{id:"classic",label:"CLASSIC",placements:[{kind:"wall",x:-20,z:-35},{kind:"wall",x:35,z:55},{kind:"bunker",x:-55,z:40},{kind:"tower",x:70,z:-70},{kind:"depot",x:15,z:-55},{kind:"scan",x:-40,z:-80},{kind:"pylon",x:-6,z:70},{kind:"pylon",x:6,z:70},...ss()],fences:[os(300,-6,70,6,70,106,107)],sky:{storm:!1,meteors:!1,volcano:!0}},outpost:{id:"outpost",label:"OUTPOST",placements:[{kind:"wall",x:-30,z:-20},{kind:"wall",x:30,z:-20},{kind:"wall",x:-30,z:20},{kind:"wall",x:30,z:20},{kind:"bunker",x:0,z:-45},{kind:"bunker",x:0,z:45},{kind:"depot",x:-45,z:0},{kind:"depot",x:45,z:0},{kind:"tower",x:-60,z:-60},{kind:"tower",x:60,z:60},{kind:"scan",x:0,z:0},{kind:"pylon",x:-12,z:70},{kind:"pylon",x:12,z:70},...ss(n=>Math.abs(n.x)>80||Math.abs(n.z)>80)],fences:[os(300,-12,70,12,70,111,112)],sky:{storm:!1,meteors:!1,volcano:!0}},ruins:{id:"ruins",label:"RUINS",placements:[{kind:"wall",x:-15,z:-15},{kind:"wall",x:15,z:-15},{kind:"wall",x:-15,z:15},{kind:"wall",x:15,z:15},{kind:"bunker",x:-40,z:-40},{kind:"bunker",x:40,z:-40},{kind:"bunker",x:-40,z:40},{kind:"bunker",x:40,z:40},{kind:"tower",x:0,z:-60},{kind:"tower",x:0,z:60},{kind:"tower",x:-60,z:0},{kind:"tower",x:60,z:0},{kind:"depot",x:-70,z:-70},{kind:"depot",x:70,z:70},{kind:"scan",x:-80,z:20},...ss(n=>Math.abs(n.x)>90||Math.abs(n.z)>90)],fences:[],sky:{storm:!1,meteors:!1,volcano:!0}},stormfield:{id:"stormfield",label:"STORMFIELD",placements:[{kind:"rocks",x:-20,z:-20},{kind:"rocks",x:25,z:10},{kind:"rocks",x:-10,z:40},{kind:"rocks",x:50,z:-40},{kind:"pylon",x:-20,z:60},{kind:"pylon",x:20,z:60},{kind:"pylon",x:-60,z:-30},{kind:"pylon",x:-60,z:10},{kind:"scan",x:70,z:30},...ss(n=>n.kind==="pyramid")],fences:[os(300,-20,60,20,60,104,105),os(301,-60,-30,-60,10,106,107)],sky:{storm:!0,meteors:!0,volcano:!0}}},cv=["classic","outpost","ruins","stormfield"],uv=420,hv=9e3;function fv(n){const e=n.sky;if(e.storm&&n.tick>=n.nextStormTick&&n.stormUntil<=n.tick&&(n.stormUntil=n.tick+uv,n.nextStormTick=n.tick+24e3+Math.floor(n.rng.next()*12e3),n.events.push({kind:"ionStorm"})),e.meteors&&n.tick>=n.nextMeteorTick){const t=(n.rng.next()-.5)*300,i=(n.rng.next()-.5)*300;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:2,kind:"meteor"}),n.events.push({kind:"meteorInbound",pos:[t,0,i]}),n.nextMeteorTick=n.tick+hv+Math.floor(n.rng.next()*3e3)}}const dv=60,ti=1/dv;function pv(n,e="classic"){const t=Xu[e];return{seed:n,tick:0,rng:Z0(n),arenaHalf:200,tanks:[Du(0,0,0,0)],structures:t.placements.map((i,r)=>nn(100+r,i.kind,i.x,i.z)),shells:[],chunks:[],rubble:[],rubbleRev:0,events:[],pendingExplosions:[],nextId:1,awareness:new Map,brains:new Map,threats:new Map,targeters:new Map,missiles:[],bomber:null,telegraphs:[],fences:t.fences.map(i=>({...i})),sky:t.sky,nextStormTick:15e3,nextMeteorTick:6e3,volcano:$_(),lavaPools:[],stormUntil:0,score:0,lives:3,phase:"play",nextSpawnTick:120,nextSuperTick:9e3,nextMissileTick:1800,nextBomberTick:Vu,respawnTick:0,nextLifeAt:1e4,lastHitBy:new Map}}function ol(n){const e=n.structures.map(t=>({g:t.grid,structure:t}));for(const t of n.tanks)t.alive&&e.push({g:t.hull,tank:t,part:"hull"},{g:t.turret,tank:t,part:"turret"});return e}function mv(n,e){return[(e[0]-n.size.x/2+.5)*qe,(e[1]+.5)*qe,(e[2]-n.size.z/2+.5)*qe]}function Ys(n,e){const t=mv(n.g,e);return n.structure?[n.structure.x+t[0],t[1],n.structure.z+t[2]]:n.part==="turret"?nl(n.tank,t):Lu(n.tank,t)}const Es=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Yu=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],Ia=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],gv=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]);function al(n,e,t,i,r){const s=Nt(e.g,t[0],t[1],t[2]);if(!s)return;const a=Ys(e,t);Pa(e.g,t[0],t[1],t[2],null),i.set(e.g,e),e.tank&&r!==null&&n.threats.set(e.tank.id,{tick:n.tick,from:r}),n.events.push({kind:"blockDestroyed",pos:a,by:r}),s.type==="ammo"&&n.pendingExplosions.push({pos:a,radius:y_,damage:b_,source:"ammo"});for(const o of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const l=[t[0]+o[0],t[1]+o[1],t[2]+o[2]],c=Nt(e.g,l[0],l[1],l[2]);c&&(c.hp-=E_,i.set(e.g,e),c.hp<=0&&al(n,e,l,i,r))}}function Hs(n,e,t,i,r,s){const a=Nt(e.g,t[0],t[1],t[2]);a&&(a.hp-=i,r.set(e.g,e),e.tank&&s!==null&&n.threats.set(e.tank.id,{tick:n.tick,from:s}),a.hp<=0&&al(n,e,t,r,s))}function _v(n,e){const t=M_*ti,i=ol(n);for(const r of n.shells){if(!r.alive)continue;let s=1/0;for(const o of n.fences){if(!sl(n,o))continue;const l=av(o,r.pos,r.dir,t);l!==null&&l<s&&(s=l)}if(s!==1/0){r.pos=Es(r.pos,Ia(r.dir,s)),r.alive=!1,n.events.push({kind:"shellImpact",pos:[...r.pos]});continue}const a=[];for(const o of i){if(o.tank&&o.tank.id===r.owner)continue;let l,c;if(o.structure)l=[r.pos[0]-o.structure.x,r.pos[1],r.pos[2]-o.structure.z],c=r.dir;else{const h=o.part==="turret"?Uu:tl;l=h(o.tank,r.pos),c=Yu(h(o.tank,Es(r.pos,r.dir)),l)}for(const h of Is(o.g,l,c,t))a.push({t:h.t,ctx:o,cell:h.cell})}a.sort((o,l)=>o.t-l.t);for(const o of a){if(!r.alive)break;const l=Nt(o.ctx.g,o.cell[0],o.cell[1],o.cell[2]);if(!l)continue;const c=Ys(o.ctx,o.cell);o.ctx.tank&&n.lastHitBy.set(o.ctx.tank.id,r.owner);const h=w_[l.type];if(r.budget<h){Hs(n,o.ctx,o.cell,1,e,r.owner),r.alive=!1,n.events.push({kind:"shellImpact",pos:c});break}r.budget-=h,al(n,o.ctx,o.cell,e,r.owner)}r.alive&&(r.pos=Es(r.pos,Ia(r.dir,t)),r.pos[1]<0?(r.alive=!1,n.events.push({kind:"shellImpact",pos:[r.pos[0],0,r.pos[2]]})):(Math.abs(r.pos[0])>n.arenaHalf||Math.abs(r.pos[2])>n.arenaHalf)&&(r.alive=!1))}n.shells=n.shells.filter(r=>r.alive)}function vv(n,e){const t=ol(n);for(;n.pendingExplosions.length;){const i=n.pendingExplosions.shift();n.events.push({kind:"explosion",pos:i.pos,radius:i.radius,damage:i.damage,source:i.source});for(const r of t)for(let s=0;s<r.g.size.z;s++)for(let a=0;a<r.g.size.y;a++)for(let o=0;o<r.g.size.x;o++){if(!Nt(r.g,o,a,s))continue;const l=[o,a,s];gv(Ys(r,l),i.pos)<=i.radius&&Hs(n,r,l,i.damage,e,null)}}}function Ha(n){const e=new Map;for(let t=0;t<n.size.z;t++)for(let i=0;i<n.size.y;i++)for(let r=0;r<n.size.x;r++){const s=Nt(n,r,i,t);s&&e.set(`${r},${i},${t}`,s.type)}return e}function ys(n,e,t,i){if(!t.length)return;const r=t.map(o=>Ys(e,o)),s=[0,0,0];for(const o of r)s[0]+=o[0]/r.length,s[1]+=o[1]/r.length,s[2]+=o[2]/r.length;const a={id:n.nextId++,pos:s,vel:[(n.rng.next()-.5)*3,2+n.rng.next()*2,(n.rng.next()-.5)*3],angle:0,spin:(n.rng.next()-.5)*6,settleTick:n.tick+A_,cells:t.map((o,l)=>({off:Yu(r[l],s),type:i.get(o.join(","))??"hull"}))};n.chunks.push(a),n.events.push({kind:"chunkDetached",id:a.id})}function xv(n,e){const t=new Set,i=ol(n);for(const[r,s]of e){if(t.has(r))continue;t.add(r);const a=s.structure?"structure":s.part,o=Ha(r),l=Nu(r,a);if(l.length===0){if(ys(n,s,Ms(r,[]),o),s.tank&&s.part==="hull"){s.tank.alive=!1;const c=n.lastHitBy.get(s.tank.id)??null;if(n.events.push({kind:"tankKilled",id:s.tank.id,pos:[s.tank.x,1,s.tank.z],by:c,cause:"core"}),s.tank.id===0)n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+ku;else if(c===0){const f=n.brains.get(s.tank.id);n.score+=f?.kind==="super"?gr.super:gr.slow}const h=i.find(f=>f.tank===s.tank&&f.part==="turret");h&&!t.has(h.g)&&(t.add(h.g),ys(n,h,Ms(h.g,[]),Ha(h.g)))}}else{const c=Ms(r,l);c.length&&ys(n,s,c,o)}}}function Sv(n,e){for(const t of n.tanks)if(!(!t.alive||xi(t.turret,"gun")>0)){if(t.selfDestructTick===null){t.selfDestructTick=n.tick+L_,n.events.push({kind:"selfDestructArmed",id:t.id,pos:[t.x,1,t.z],seconds:10});continue}if(!(n.tick<t.selfDestructTick)){n.pendingExplosions.push({pos:[t.x,.6,t.z],radius:U_,damage:I_,source:"selfDestruct"});for(const[i,r]of[[t.hull,"hull"],[t.turret,"turret"]]){const s={g:i,tank:t,part:r};ys(n,s,Ms(i,[]),Ha(i)),e.set(i,s)}t.alive=!1,n.events.push({kind:"tankKilled",id:t.id,pos:[t.x,1,t.z],by:null,cause:"selfDestruct"}),t.id===0&&(n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+ku)}}}function Mv(n){const e=[];for(const t of n.chunks)t.vel[1]-=9.8*ti,t.pos=Es(t.pos,Ia(t.vel,ti)),t.angle+=t.spin*ti,(t.pos[1]<=.2||n.tick>=t.settleTick)&&e.push(t);if(e.length){n.chunks=n.chunks.filter(t=>!e.includes(t));for(const t of e)for(const i of t.cells)n.rubble.push({x:t.pos[0]+i.off[0],z:t.pos[2]+i.off[2],type:i.type,born:n.tick});for(;n.rubble.length>zu;)n.rubble.shift();n.rubbleRev++,n.events.push({kind:"rubbleChanged"})}}function Tv(n){const e=new Map,t=(i,r)=>{let s=e.get(i);s||(s=new Set,e.set(i,s)),s.add(r)};for(const i of n.tanks){if(!i.alive)continue;const r=n.brains.get(i.id);r?.targetId!==null&&r?.targetId!==void 0&&t(r.targetId,i.id)}for(const[i,r]of n.threats)n.tick-r.tick<180&&t(i,r.from);n.targeters=e}function qu(n,e=[]){if(n.events=[],n.phase==="over")return;n.tick+=1;const t=new Map;if(n.phase==="play"&&!n.tanks[0].alive&&n.respawnTick>0&&n.tick>=n.respawnTick&&e[0]?.firePressed){const i=n.rng.next()*Math.PI*2,r=Du(0,Math.sin(i)*120,Math.cos(i)*120,n.rng.next()*Math.PI*2);r.spawnTick=n.tick,n.tanks[0]=r,n.respawnTick=0}for(let i=0;i<n.tanks.length;i++){const r=n.tanks[i];if(!r.alive)continue;const s=n.brains.get(r.id),a=i===0?e[0]??Da():s?K_(n,s,r):Da();if(c_(r,a,ti,n.arenaHalf),r.cooldown=Math.max(0,r.cooldown-ti),a.fire&&r.cooldown===0&&Nu(r.turret,"turret").length>0){const o=Iu(r),l=nl(r,[0,qe,r.turret.size.z/2*qe+.15]);n.shells.push({id:n.nextId++,owner:r.id,pos:l,dir:o,budget:T_,alive:!0});const c=n.brains.get(r.id)?.kind,h=c?Er[c].cooldown:null;r.cooldown=h?h[0]+n.rng.next()*(h[1]-h[0]):Fu,n.events.push({kind:"fire",pos:l,dir:o,owner:r.id})}}if(_v(n,t),iv(n),Z_(n),fv(n),n.tick%600===0){for(const i of n.structures)if(i.kind==="scan"&&i.grid.cells.some(r=>r)){n.events.push({kind:"scanPing"});break}}vv(n,t);for(const i of n.tanks){if(!i.alive||Math.abs(i.speed)<.5)continue;const r=i.hull.size.z*qe/2;for(const s of n.structures){const a=s.grid.size.x*qe/2+r,o=s.grid.size.z*qe/2+r;if(Math.abs(i.x-s.x)>a||Math.abs(i.z-s.z)>o)continue;const l=i.x-s.x,c=i.z-s.z,h=Math.max(0,Math.floor((l-r)/qe+s.grid.size.x/2)),f=Math.min(s.grid.size.x-1,Math.ceil((l+r)/qe+s.grid.size.x/2)),m=Math.max(0,Math.floor((c-r)/qe+s.grid.size.z/2)),g=Math.min(s.grid.size.z-1,Math.ceil((c+r)/qe+s.grid.size.z/2));let u=!1;for(let _=m;_<=g;_++)for(let p=h;p<=f;p++)for(let d=0;d<s.grid.size.y;d++){if(!Nt(s.grid,p,d,_))continue;const w=s.x+(p-s.grid.size.x/2+.5)*qe,R=s.z+(_-s.grid.size.z/2+.5)*qe;Math.hypot(w-i.x,R-i.z)<r+.2&&(Hs(n,{g:s.grid,structure:s},[p,d,_],3,t,i.id),u=!0)}u&&(i.speed*=.85)}for(const s of n.fences){if(!sl(n,s))continue;const a=lv(s,i.x,i.z,i.hull.size.z*qe/2);a&&(i.x+=a.x,i.z+=a.z,i.speed*=.5)}}if(n.tick%30===0){for(const i of n.lavaPools)if(!(n.tick>=i.untilTick))for(const r of n.tanks){if(!r.alive||Math.hypot(r.x-i.x,r.z-i.z)>i.radius)continue;const s=[];for(let a=0;a<r.hull.size.z;a++)for(let o=0;o<r.hull.size.y;o++)for(let l=0;l<r.hull.size.x;l++)Nt(r.hull,l,o,a)&&s.push([l,o,a]);if(s.length){const a=s[Math.floor(n.rng.next()*s.length)];Hs(n,{g:r.hull,tank:r,part:"hull"},a,2,t,null)}}n.lavaPools=n.lavaPools.filter(i=>n.tick<i.untilTick)}xv(n,t),Sv(n,t),Mv(n),k_(n),Tv(n);for(const i of n.events)i.kind==="blockDestroyed"&&i.by===0?n.score+=gr.block:i.kind==="kill"&&i.by===0&&(n.score+=i.what==="bomber"?gr.bomber:gr.missile);for(;n.score>=n.nextLifeAt;)n.lives++,n.nextLifeAt+=1e4;for(;n.rubble.length>zu;)n.rubble.shift(),n.rubbleRev++;n.phase==="play"&&n.tick>=Xs&&(n.phase="over",n.events.push({kind:"matchEnd"}))}const Ev=[{d:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{d:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{d:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{d:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{d:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{d:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];function Ku(n){const e=[],t=new Map,i=qe,r=f=>(f-n.size.x/2)*i,s=f=>f*i,a=f=>(f-n.size.z/2)*i,o=(f,m,g,u)=>[r(m+f[0]),s(g+f[1]),a(u+f[2])];for(let f=0;f<n.size.z;f++)for(let m=0;m<n.size.y;m++)for(let g=0;g<n.size.x;g++)if(Nt(n,g,m,f))for(const{d:u,corners:_}of Ev){if(Nt(n,g+u[0],m+u[1],f+u[2]))continue;const p=_.map(d=>o(d,g,m,f));for(const d of[0,1,2,0,2,3])e.push(...p[d]);for(let d=0;d<4;d++){const w=p[d],R=p[(d+1)%4],S=w.map(b=>b.toFixed(4)).join(","),A=R.map(b=>b.toFixed(4)).join(","),E=S<A?`${S}|${A}`:`${A}|${S}`;t.has(E)||t.set(E,[...w,...R])}}const l=new ft;l.setAttribute("position",new lt(e,3));const c=[];for(const f of t.values())c.push(...f);const h=new ft;return h.setAttribute("position",new lt(c,3)),{faces:l,edges:h}}function yv(n,e,t,i=200,r=38){const s=Math.cos(t),a=Math.sin(t);let o=(n*s-e*a)*(r/i),l=-(n*a+e*s)*(r/i);const c=Math.hypot(o,l),h=c>r;return h&&(o*=r/c,l*=r/c),{x:o,y:l,clamped:h}}function as(n,e){return n-e}function Rc(n,e){return{x:Math.sin(n)*e,y:-Math.cos(n)*e}}function Sn(n){return-n}function bv(n,e,t=1200){const i=n-e;return i>=0&&i<t?i/t:null}function ls(n,e,t){return Math.atan2(n,e)-t}const Zn=38,wc=200,Cc=[16729139,16739133,12986408,16747109,12000284];function Av(n,e=255,t=!1){return"#"+(t?16723245:Cc[Math.abs(n)%Cc.length]).toString(16).padStart(6,"0")+Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function Rv(){const n=document.createElement("canvas");n.id="hud",document.body.append(n);const e=n.getContext("2d"),t=document.createElement("div");t.id="alerts",document.body.append(t);const i=()=>{n.width=window.innerWidth,n.height=window.innerHeight};i(),window.addEventListener("resize",i);function r(o){const l=document.createElement("div");for(l.className="alert",l.textContent=o,t.append(l),setTimeout(()=>l.remove(),4200);t.children.length>3;)t.firstChild?.remove()}function s(o,l,c,h,f){e.fillStyle=f,e.beginPath(),e.moveTo(o+Math.sin(c)*h,l-Math.cos(c)*h),e.lineTo(o+Math.sin(c+2.55)*h*.75,l-Math.cos(c+2.55)*h*.75),e.lineTo(o+Math.sin(c-2.55)*h*.75,l-Math.cos(c-2.55)*h*.75),e.closePath(),e.fill()}function a(o){const l=n.width,c=n.height;e.clearRect(0,0,l,c);const h=o.palette,f=h.hud;e.fillStyle=f+"14",e.fillRect(0,0,l,90),e.strokeStyle=f+"88",e.beginPath(),e.moveTo(0,90.5),e.lineTo(l,90.5),e.stroke();const m=l/2,g=45;e.strokeStyle=f+"aa",e.beginPath(),e.arc(m,g,Zn,0,Math.PI*2),e.stroke(),e.strokeStyle=f+"44",e.beginPath(),e.arc(m,g,Zn*30/wc,0,Math.PI*2),e.stroke();const u=Sn(o.turretYaw),_=Rc(u,Zn);e.strokeStyle=f+"55",e.beginPath(),e.moveTo(m,g),e.lineTo(m+_.x,g+_.y),e.stroke();const p=(A,E)=>{const b=yv(A-o.x,E-o.z,Sn(o.heading),wc,Zn-3);return{x:m+b.x,y:g+b.y}};if(o.storm){e.fillStyle=f+"66";for(let A=0;A<60;A++){const E=Math.random()*Math.PI*2,b=Math.random()*Zn;e.fillRect(m+Math.sin(E)*b,g-Math.cos(E)*b,1.5,1.5)}}else{if(o.known)for(const[A,E]of o.known){const b=p(E.x,E.z),L=o.tick-E.tick,M=E.source==="gunfire"||E.source==="ping"?Math.max(0,1-L/180):1,T=Math.floor(M*255),D=o.superIds.has(A),z=Av(A,T,D),G=o.tankHeadings.get(A)??E.heading,K=o.tankTurrets.get(A)??E.turretYaw??0,W=Sn(G),X=Sn(o.heading);s(b.x,b.y,as(W,X),D?6:4.5,z);const $=as(Sn(G+K),X);e.strokeStyle=z,e.beginPath(),e.moveTo(b.x,b.y),e.lineTo(b.x+Math.sin($)*8,b.y-Math.cos($)*8),e.stroke()}if(o.scanner){const A=p(o.scanner.x,o.scanner.z);if(e.fillStyle="#35e0ff",e.beginPath(),e.moveTo(A.x,A.y-4),e.lineTo(A.x+4,A.y),e.lineTo(A.x,A.y+4),e.lineTo(A.x-4,A.y),e.closePath(),e.fill(),o.scanPulse!==null){const E=Math.max(0,Math.min(1,o.scanPulse)),b=4+E*22;e.save(),e.beginPath(),e.arc(m,g,Zn,0,Math.PI*2),e.clip(),e.strokeStyle=`rgba(53,224,255,${(1-E).toFixed(3)})`,e.lineWidth=1.5,e.beginPath(),e.arc(A.x,A.y,b,0,Math.PI*2),e.stroke(),e.restore()}}for(const A of o.missiles){const E=p(A.x,A.z),b=A.targeted?5+Math.sin(o.tick*.4)*1.5:3.5;s(E.x,E.y,as(Sn(A.heading),Sn(o.heading)),b,A.targeted?"#ff4433":"#ffaa33")}if(o.bomber&&o.bomberBlip){const A=p(o.bomber.x,o.bomber.z);s(A.x,A.y,as(Sn(o.bomber.heading),Sn(o.heading)),6,f)}}if(o.threatBearing){const A=o.threatBearing.angle,E=Zn-5,b=m+Math.sin(A)*E,L=g-Math.cos(A)*E,M=Math.max(0,1-o.threatBearing.progress);s(b,L,A,5,`rgba(255,68,51,${M.toFixed(3)})`)}s(m,g,0,6,h.worldCss);const d=Rc(Sn(o.turretYaw),11);e.strokeStyle=f,e.beginPath(),e.moveTo(m,g),e.lineTo(m+d.x,g+d.y),e.stroke(),e.font="13px monospace",e.fillStyle=f,e.textAlign="left",e.fillText(`SCORE ${String(o.score).padStart(6,"0")}`,12,32),e.fillText(`LIVES ${o.lives}`,12,52);const w=Math.floor(o.secondsLeft/60),R=Math.floor(o.secondsLeft%60);if(e.textAlign="right",e.fillText(`T-${String(w).padStart(2,"0")}:${String(R).padStart(2,"0")}`,m-Zn-14,32),e.textAlign="left",o.alive){const A=l/2,E=c/2;e.strokeStyle=h.worldCss+"cc",e.beginPath(),e.moveTo(A-10,E),e.lineTo(A-4,E),e.moveTo(A+4,E),e.lineTo(A+10,E),e.moveTo(A,E-10),e.lineTo(A,E-4),e.moveTo(A,E+4),e.lineTo(A,E+10),e.stroke(),e.strokeStyle=f+"aa",e.beginPath(),e.arc(A,E,15,-Math.PI/2,-Math.PI/2+Math.PI*2*o.cooldownFrac),e.stroke();const b=E-o.elevation*40;e.strokeStyle=h.worldCss+"88",e.beginPath(),e.moveTo(A-6,b),e.lineTo(A+6,b),e.stroke()}o.spectator?(e.font="bold 13px monospace",e.textAlign="center",e.fillStyle=f,e.fillText(o.respawnReady?`SPECTATING ${o.spectator.label} · ←/→ CYCLE · PRESS SPACE TO RESPAWN`:`SPECTATING ${o.spectator.label} · ←/→ CYCLE · RESPAWN ${Math.ceil(o.spectator.secondsLeft)}s`,l/2,c/2+54),e.textAlign="left"):o.respawnReady&&(e.font="bold 13px monospace",e.textAlign="center",e.fillStyle=f,e.fillText("PRESS SPACE TO RESPAWN",l/2,c/2+54),e.textAlign="left"),o.alive&&o.selfDestructSeconds!==null&&(e.font="bold 16px monospace",e.textAlign="center",e.fillStyle=f,e.fillText(`SELF-DESTRUCT ${Math.ceil(o.selfDestructSeconds)}s`,l/2,c-96),e.textAlign="left");const S=[["CORE",o.status.core],["TRD",o.status.tread],["GUN",o.status.gun],["ENG",o.status.engine]];if(e.font="10px monospace",S.forEach(([A,E],b)=>{const L=c-64+b*14;e.fillStyle=f+"cc",e.fillText(A,12,L+4),e.fillStyle=h.worldCss+"cc";for(let M=0;M<Math.min(E,12);M++)e.fillRect(44+M*7,L-3,5,5)}),e.font="11px monospace",e.textAlign="right",o.killfeed.slice(-4).forEach((A,E)=>{const b=o.now-A.born,L=Math.max(0,1-b/6e3);e.fillStyle=f+Math.floor(L*220).toString(16).padStart(2,"0"),e.fillText(A.text,l-12,c-60+E*14)}),e.textAlign="left",o.hitFlash&&o.now-o.hitFlash.born<450){const A=o.hitFlash.angle,E=1-(o.now-o.hitFlash.born)/450,b=Math.min(l,c)/2-40,L=l/2+Math.sin(A)*b,M=c/2-Math.cos(A)*b;e.fillStyle=f+Math.floor(E*255).toString(16).padStart(2,"0"),e.beginPath(),e.moveTo(L+Math.sin(A)*12,M-Math.cos(A)*12),e.lineTo(L+Math.sin(A+2.5)*8,M-Math.cos(A+2.5)*8),e.lineTo(L+Math.sin(A-2.5)*8,M-Math.cos(A-2.5)*8),e.closePath(),e.fill()}}return{canvas:n,draw:a,alert:r}}function wv(n,e){return(n?1:0)-(e?1:0)}function Cv(n,e){return(n?1:0)-(e?1:0)}const rn=new Set;let Pc=!1;const Pv=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);function Dv(n){Pv.has(n.code)&&(n.preventDefault(),rn.add(n.code))}function Lv(n){rn.delete(n.code)}function Uv(){rn.clear()}function Iv(){window.addEventListener("keydown",Dv),window.addEventListener("keyup",Lv),window.addEventListener("blur",Uv)}function $u(){const n=Da();n.throttle=(rn.has("KeyW")?1:0)-(rn.has("KeyS")?1:0),n.turn=Cv(rn.has("KeyA"),rn.has("KeyD")),n.turretYaw=wv(rn.has("ArrowLeft"),rn.has("ArrowRight")),n.gunPitch=(rn.has("ArrowUp")?1:0)-(rn.has("ArrowDown")?1:0);const e=rn.has("Space");n.fire=e,n.firePressed=e&&!Pc,Pc=e;const t=navigator.getGamepads?navigator.getGamepads():[];for(const i of t){if(!i)continue;const r=h=>Math.abs(h)>.15?h:0,s=r(i.axes[0]??0),a=r(i.axes[1]??0),o=r(i.axes[2]??0),l=r(i.axes[3]??0),c=!!i.buttons[0]?.pressed||!!i.buttons[7]?.pressed;if(s||a||o||l||c){n.throttle=-a,n.turn=-s,n.turretYaw=-o,n.gunPitch=-l,n.fire=c;break}}return n}const mn=[{id:"green",label:"P1 green",world:3800939,worldCss:"#39ff6b",dim:1931834,grid:668441,gridCenter:1002788,rubble:1931834,moon:10485696,hud:"#ff4433",hazard:[1,.35,.1]},{id:"amber",label:"P3 amber",world:16756736,worldCss:"#ffb000",dim:9064960,grid:3350528,gridCenter:5058560,rubble:9064960,moon:16769184,hud:"#ffcc55",hazard:[1,.25,.1]},{id:"cyan",label:"P4 cyan",world:3531007,worldCss:"#35e0ff",dim:1927802,grid:665651,gridCenter:997965,rubble:1927802,moon:10547455,hud:"#77ffff",hazard:[1,.35,.1]},{id:"bw",label:"B&W",world:16777215,worldCss:"#ffffff",dim:10066329,grid:2236962,gridCenter:3355443,rubble:10066329,moon:16777215,hud:"#ffffff",hazard:[1,1,1]}];class Hv{object;max;pos;col;p;cursor=0;constructor(e=1024,t=!0){this.max=e,this.pos=new Float32Array(e*6),this.col=new Float32Array(e*6),this.p=new Float32Array(e*15);const i=new ft;i.setAttribute("position",new jt(this.pos,3).setUsage(Ml)),i.setAttribute("color",new jt(this.col,3).setUsage(Ml));const r=new Za({vertexColors:!0,blending:ws,depthWrite:!1,transparent:!0,fog:t});this.object=new du(i,r),this.object.frustumCulled=!1}spawn(e,t,i,r,s,a,o,l,c,h,f=.5,m=0,g=0,u=0){const _=this.cursor++%this.max*15,p=this.p;p[_]=e,p[_+1]=t,p[_+2]=i,p[_+3]=r,p[_+4]=s,p[_+5]=a,p[_+6]=o,p[_+7]=o,p[_+8]=f,p[_+9]=l,p[_+10]=c,p[_+11]=h,p[_+12]=m,p[_+13]=g,p[_+14]=u}update(e){const t=this.p;for(let i=0;i<this.max;i++){const r=i*15,s=i*6;if(t[r+6]<=0){this.pos[s]=this.pos[s+3]=0,this.pos[s+1]=this.pos[s+4]=-1e3,this.pos[s+2]=this.pos[s+5]=0,this.col[s]=this.col[s+1]=this.col[s+2]=0,this.col[s+3]=this.col[s+4]=this.col[s+5]=0;continue}t[r+6]-=e,t[r]+=t[r+3]*e,t[r+1]+=t[r+4]*e,t[r+2]+=t[r+5]*e;let a=t[r+12],o=t[r+13],l=t[r+14];a===0&&o===0&&l===0&&(a=t[r+3],o=t[r+4],l=t[r+5]);const c=Math.hypot(a,o,l)||1,h=t[r+8]/c;this.pos[s]=t[r],this.pos[s+1]=t[r+1],this.pos[s+2]=t[r+2],this.pos[s+3]=t[r]-a*h,this.pos[s+4]=t[r+1]-o*h,this.pos[s+5]=t[r+2]-l*h;const f=Math.max(t[r+6],0)/t[r+7];this.col[s]=this.col[s+3]=t[r+9]*f,this.col[s+1]=this.col[s+4]=t[r+10]*f,this.col[s+2]=this.col[s+5]=t[r+11]*f}this.object.geometry.attributes.position.needsUpdate=!0,this.object.geometry.attributes.color.needsUpdate=!0}}const bs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Rr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nv=new gu(-1,1,1,-1,0,1);class Fv extends ft{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const zv=new Fv;class Zu{constructor(e){this._mesh=new Kt(zv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ju extends Rr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ji.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Dc extends Rr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Ov extends Rr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Bv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ue);this._width=i.width,this._height=i.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ju(bs),this.copyPass.material.blending=zn,this.clock=new od}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dc!==void 0&&(a instanceof Dc?i=!0:a instanceof Ov&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kv extends Rr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Gv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ji extends Rr{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(s,a,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Zt(s,a,{type:On});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Zt(s,a,{type:On});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}const o=Gv;this.highPassUniforms=ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ji.clone(bs.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:bs.vertexShader,fragmentShader:bs.fragmentShader,blending:ws,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new br,this._fsQuad=new Zu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ji.BlurDirectionX=new Ue(1,0);Ji.BlurDirectionY=new Ue(0,1);const Vv={uniforms:{tDiffuse:{value:null},tPrev:{value:null},uTime:{value:0},uRes:{value:new Ue(1,1)},uScan:{value:.2},uVignette:{value:.4},uBarrel:{value:.04},uPersist:{value:.4},uRoll:{value:.08},uSafe:{value:0}},vertexShader:`
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
  `};function Wv(n,e,t){const i=n.getDrawingBufferSize(new Ue),r=new Zt(i.x,i.y,{type:gn}),s=new Bv(n,r);s.addPass(new kv(e,t));const a=new Ji(new Ue(i.x,i.y),.9,.5,0);s.addPass(a);const o=new ju(Vv);o.uniforms.uRes.value.set(i.x,i.y),s.addPass(o);let l=new Xl(i.x,i.y);return o.uniforms.tPrev.value=l,{composer:s,bloom:a,crt:o,render(c){o.uniforms.uTime.value=c,s.render(),n.copyFramebufferToTexture(l)},resize(c,h){s.setSize(c,h);const f=n.getDrawingBufferSize(new Ue);o.uniforms.uRes.value.set(f.x,f.y),l.dispose(),l=new Xl(f.x,f.y),o.uniforms.tPrev.value=l}}}const Lc=1931834,cs=Math.PI*2;function Xv(n){const e=(E,b)=>new ud(400,80,E,b),t=[];for(let E=0;E<256;E++){const b=E/256*cs,L=14+22*Math.abs(Math.sin(b*3.1))+12*Math.abs(Math.sin(b*7.3+1.7))+6*Math.sin(b*13.7);t.push(Math.sin(b)*620,L,Math.cos(b)*620)}new ft().setAttribute("position",new lt(t,3));const s=[];for(let E=0;E<256;E++){const b=E*3,L=(E+1)%256*3;s.push(t[b],t[b+1],t[b+2],t[L],t[L+1],t[L+2])}const a=Gt(Lc,1.1,{fog:!1});n.add(Gn(s,a));const o=.9,l=Math.sin(o)*620,c=Math.cos(o)*620,h=[[0,95],[22,64],[44,40],[64,24],[76,15]],f=10,m=[];for(const[E,b]of h)for(let L=0;L<f;L++){const M=L/f*cs,T=(L+1)/f*cs;m.push(l+Math.sin(M)*b,E,c+Math.cos(M)*b,l+Math.sin(T)*b,E,c+Math.cos(T)*b)}for(let E=0;E<f;E++){const b=E/f*cs;for(let L=0;L<h.length-1;L++){const[M,T]=h[L],[D,z]=h[L+1];m.push(l+Math.sin(b)*T,M,c+Math.cos(b)*T,l+Math.sin(b)*z,D,c+Math.cos(b)*z)}}const g=Gt(Lc,1.2,{fog:!1});n.add(Gn(m,g));const u=new U(l,78,c),_=[],p=-350,d=210,w=-520,R=14;for(let E=0;E<=40;E++){const b=Math.PI*.25+E/40*Math.PI*1.5;_.push(p+Math.cos(b)*R,d+Math.sin(b)*R,w)}for(let E=40;E>=0;E--){const b=Math.PI*.25+E/40*Math.PI*1.5;_.push(p+6+Math.cos(b)*R*.92,d+Math.sin(b)*R*.92,w)}const S=[];for(let E=0;E<_.length/3-1;E++){const b=E*3,L=b+3;S.push(_[b],_[b+1],_[b+2],_[L],_[L+1],_[L+2])}const A=Gt(10485696,1.2,{fog:!1});return n.add(Gn(S,A)),{crater:u,mountainMat:a,volcanoMat:g,moonMat:A,makeGrid:e}}function Yv(n){const e=[],t=[],i=qe;for(const a of n){const o=a.x-i/2,l=a.x+i/2,c=0,h=i,f=a.z-i/2,m=a.z+i/2,g=[[o,c,f],[l,c,f],[l,c,m],[o,c,m],[o,h,f],[l,h,f],[l,h,m],[o,h,m]],u=[[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,3,7,4]];for(const _ of u){for(const p of[0,1,2,0,2,3])e.push(...g[_[p]]);for(let p=0;p<4;p++)t.push(...g[_[p]],...g[_[(p+1)%4]])}}const r=new ft;r.setAttribute("position",new lt(e,3));const s=new ft;return s.setAttribute("position",new lt(t,3)),{faces:r,edges:s}}function qv(n){const e=[],t=qe/2;for(const{off:r}of n){const[s,a,o]=r,l=[[s-t,a-t,o-t],[s+t,a-t,o-t],[s+t,a-t,o+t],[s-t,a-t,o+t],[s-t,a+t,o-t],[s+t,a+t,o-t],[s+t,a+t,o+t],[s-t,a+t,o+t]],c=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];for(const[h,f]of c)e.push(...l[h],...l[f])}const i=new ft;return i.setAttribute("position",new lt(e,3)),i}const Lo={palette:0,bloom:.9,crt:.6,wireframe:!1,safe:!1,shake:!0,fov:60,res:1,map:"classic",volMaster:.8,volSfx:.8},Ju="vectorzone-settings";function Kv(){try{const n=localStorage.getItem(Ju);return n?{...Lo,...JSON.parse(n)}:{...Lo}}catch{return{...Lo}}}function Qu(n){try{localStorage.setItem(Ju,JSON.stringify(n))}catch{}}function $v(n,e,t){const i=document.createElement("div");i.id="panel";const r=()=>{Qu(n),t(n)},s=(w,R)=>{const S=document.createElement("label");S.className="row";const A=document.createElement("span");A.textContent=w,S.append(A,R),i.append(S)},a=document.createElement("button"),o=()=>{a.textContent=e[n.palette%e.length]};o(),a.onclick=()=>{n.palette=(n.palette+1)%e.length,o(),r()},s("phosphor",a);const l=document.createElement("input");l.type="checkbox",l.checked=n.wireframe,l.onchange=()=>{n.wireframe=l.checked,r()},s("wireframe",l);const c=document.createElement("input");c.type="checkbox",c.checked=n.safe,c.onchange=()=>{n.safe=c.checked,r()},s("safe mode",c);const h=document.createElement("input");h.type="range",h.min="0",h.max="2",h.step="0.1",h.value=String(n.bloom),h.oninput=()=>{n.bloom=Number(h.value),r()},s("bloom",h);const f=document.createElement("input");f.type="range",f.min="0",f.max="1",f.step="0.1",f.value=String(n.crt),f.oninput=()=>{n.crt=Number(f.value),r()},s("crt",f);const m=document.createElement("input");m.type="checkbox",m.checked=n.shake,m.onchange=()=>{n.shake=m.checked,r()},s("shake",m);const g=document.createElement("input");g.type="range",g.min="50",g.max="90",g.step="5",g.value=String(n.fov),g.oninput=()=>{n.fov=Number(g.value),r()},s("fov",g);const u=document.createElement("input");u.type="range",u.min="0.5",u.max="1",u.step="0.25",u.value=String(n.res),u.oninput=()=>{n.res=Number(u.value),r()},s("res",u);const _=document.createElement("select");for(const w of cv){const R=document.createElement("option");R.value=w,R.textContent=Xu[w].label,_.append(R)}_.value=n.map,_.onchange=()=>{n.map=_.value,r()},s("map",_);const p=document.createElement("input");p.type="range",p.min="0",p.max="1",p.step="0.1",p.value=String(n.volMaster),p.oninput=()=>{n.volMaster=Number(p.value),r()},s("vol",p);const d=document.createElement("input");return d.type="range",d.min="0",d.max="1",d.step="0.1",d.value=String(n.volSfx),d.oninput=()=>{n.volSfx=Number(d.value),r()},s("sfx",d),i}function eh(n,e=0){return n.filter(t=>t.id!==e&&t.alive).sort((t,i)=>t.id-i.id)}function Zv(n,e,t){if(n.length===0)return null;const i=n.findIndex(s=>s.id===e),r=i<0?0:(i+t+n.length)%n.length;return n[r].id}function jv(n,e){return e==="super"?"SUPERTANK":`LIGHT TANK ${n.id}`}function Jv(n,e,t){if(t==="airburst")return 0;const i=Math.max(14,e*3.5);if(n>=i)return 0;const r=1-n/i;return Math.min(.85,r*(.25+e*.07))}function Qv(n){return n<5?(1-n/5)*.18:0}const ll=3800939,At=new q0({antialias:!0});At.setPixelRatio(Math.min(window.devicePixelRatio,2));At.setSize(window.innerWidth,window.innerHeight);At.info.autoReset=!1;document.body.appendChild(At.domElement);const Qe=new $f;Qe.background=new ke(0);Qe.fog=new $a(0,60,260);const _t=new an(60,window.innerWidth/window.innerHeight,.1,2e3),Na=document.getElementById("stats"),th=new br({color:0,side:hn}),nh=Gt(ll,2.4),ih=Gt(ll,1.4),Fa=Gt(ll,1.8),ex=Gt(16729139,1.8),tx=Gt(3531007,1.8),ni=Kv(),se=pv(11827170,ni.map);let de=se.tanks[0],Mn=null,Uc=null;function Xi(n,e=nh){const t=Ku(n),i=new Kt(t.faces,th),r=Ss(t.edges,e),s=new fr;return s.add(i,r),{group:s,mesh:i,lines:r,rev:n.rev}}function ur(n,e){if(n.rev===e.rev)return;const t=Ku(e);n.mesh.geometry.dispose(),n.lines.geometry.dispose(),n.mesh.geometry=t.faces,Au(n.lines,t.edges),n.rev=e.rev,cl++}const Gi=Xi(de.hull),Tn=Xi(de.turret);Tn.group.position.set(de.turretPivot.x,de.turretPivot.y,de.turretPivot.z);Tn.group.rotation.order="YXZ";Gi.group.add(Tn.group);Qe.add(Gi.group);let cl=0;const za=new Map,rh=n=>n==="depot"?ex:n==="scan"?tx:ih;for(const n of se.structures){const e=Xi(n.grid,rh(n.kind));e.group.position.set(n.x,0,n.z),Qe.add(e.group),za.set(n.id,e)}const sh=new br({color:0,side:hn}),ul=Gt(1931834,1);let Ns=new Kt(new ft,sh),Fs=Gn(new Float32Array(6),ul);Ns.frustumCulled=!1;Fs.frustumCulled=!1;Qe.add(Ns,Fs);let Ic=-1;const us=new Map,Uo=new Map,Hc=Gt(3800939,1.2,{transparent:!0,opacity:.6}),oh=Gt(16739115,1.8,{transparent:!0,opacity:.75}),Oa=Gn(new Float32Array(6),oh);Qe.add(Oa);let Nc="",Io=0,qt=0;const jn=new Float32Array(432),ah=Gt(3531007,1.1,{transparent:!0,opacity:.5,fog:!1}),zs=Gn(jn,ah);zs.visible=!1;Qe.add(zs);let Ho=0;const hs=new Map,fs=new Map;let Un=null,Os=!1;window.addEventListener("keydown",n=>{n.code==="KeyX"&&(Os=!Os)});const Fc=new Float32Array(4096),Bs=Gn(new Float32Array(6),Gt(16729139,1,{transparent:!0,opacity:.7}));Bs.visible=!1;Qe.add(Bs);const lh=Gt(1931834,.9,{transparent:!0,opacity:.5}),gt=new Float32Array(18),As=Gn(gt,lh);Qe.add(As);const tn=Rv();let zc=-1e9,Oc=-1e9,Bc=!1;const hr=[];let No=null,Oi=null;const ch="vectorzone-scores";function nx(){try{return JSON.parse(localStorage.getItem(ch)??"[]")}catch{return[]}}function ix(){const n=nx();n.push({score:se.score,date:new Date().toISOString().slice(0,10)}),n.sort((s,a)=>a.score-s.score);const e=n.slice(0,5);try{localStorage.setItem(ch,JSON.stringify(e))}catch{}const t=mn[ni.palette%mn.length],i=document.createElement("div");i.id="gameover",i.style.color=t.hud;const r=se.lives<=0?"GAME OVER":"MATCH COMPLETE";i.innerHTML=`<h1>${r}</h1><p class="final">SCORE ${String(se.score).padStart(6,"0")}</p><table><tr><th>#</th><th>SCORE</th><th>DATE</th></tr>`+e.map((s,a)=>`<tr${s.score===se.score&&s.date===new Date().toISOString().slice(0,10)?' class="me"':""}><td>${a+1}</td><td>${String(s.score).padStart(6,"0")}</td><td>${s.date}</td></tr>`).join("")+'</table><p class="hint">PRESS R TO RESTART</p>',document.body.append(i)}window.addEventListener("keydown",n=>{n.code==="KeyR"&&se.phase==="over"&&location.reload()});function rx(){const n=[0,0,2.2,0,0,-1.6,0,0,2.2,-.45,0,1.2,0,0,2.2,.45,0,1.2,0,0,2.2,0,.45,1.2,0,0,2.2,0,-.45,1.2,-.45,0,1.2,-.9,0,.2,.45,0,1.2,.9,0,.2,0,.45,1.2,0,.9,.2,0,-.45,1.2,0,-.9,.2,-.9,0,.2,-.9,0,-.7,.9,0,.2,.9,0,-.7,0,.9,.2,0,.9,-.7,0,-.9,.2,0,-.9,-.7,0,0,-1.6,0,0,-2.6],e=new ft;return e.setAttribute("position",new lt(n,3)),e}function sx(){const n=[0,0,-2.4,0,0,2.4,0,.25,1.5,0,.25,2.1,-3.2,0,.2,3.2,0,.2,-3.2,0,.2,-3.2,.3,0,3.2,0,.2,3.2,.3,0,-1.2,0,-2.1,1.2,0,-2.1,0,0,-2.2,0,.9,-2.3,0,.9,-2.3,0,.5,-1.7],e=new ft;return e.setAttribute("position",new lt(n,3)),e}const ox=new U(0,de.turret.size.y*qe+.25,-.9),ax=new er().setFromAxisAngle(new U(0,1,0),Math.PI);Iv();const Fn=Xv(Qe);let Bi=Fn.makeGrid(mn[0].gridCenter,mn[0].grid);Qe.add(Bi);const zt=new Hv(1024,!1);Qe.add(zt.object);let Fo=0;const yn=Wv(At,Qe,_t),Le={tracer:[.6,1,.7],spark:[.2,.9,.4],hazard:[1,.35,.1],scorch:[.45,.22,.08],smoke:[.1,.35,.16]};function uh(n){if(n.map!==ni.map){Qu(n),location.reload();return}const e=mn[n.palette%mn.length];_t.fov=n.fov,_t.updateProjectionMatrix(),At.setPixelRatio(Math.min(window.devicePixelRatio,2)*n.res),At.setSize(window.innerWidth,window.innerHeight),yn.resize(window.innerWidth,window.innerHeight),Ru(window.innerWidth,window.innerHeight),nh.color.setHex(e.world),ih.color.setHex(e.world),Fa.color.setHex(e.world),ul.color.setHex(e.rubble),lh.color.setHex(e.dim),Fn.mountainMat.color.setHex(e.dim),Fn.volcanoMat.color.setHex(e.dim),Fn.moonMat.color.setHex(e.moon),Qe.remove(Bi),Bi.geometry.dispose(),Bi.material.dispose(),Bi=Fn.makeGrid(e.gridCenter,e.grid),Qe.add(Bi);const t=new ke(e.world);Le.tracer=[t.r*.7+.2,t.g*.7+.2,t.b*.7+.2],Le.spark=[t.r*.4,t.g*.9,t.b*.5],Le.hazard=e.hazard,Le.scorch=[e.hazard[0]*.45,e.hazard[1]*.45,e.hazard[2]*.45];const i=new ke(e.dim);Le.smoke=[i.r*.6,i.g*.6,i.b*.6],Na.style.color=e.hud,Na.style.textShadow=`0 0 6px ${e.hud}99`,document.getElementById("alerts").style.color=e.hud,yn.bloom.strength=n.bloom;const r=yn.crt.uniforms;r.uScan.value=.3*n.crt,r.uVignette.value=.6*n.crt,r.uBarrel.value=.06*n.crt,r.uPersist.value=n.safe?0:.55*n.crt,r.uRoll.value=n.safe?0:.15*n.crt,r.uSafe.value=n.safe?1:0,th.visible=!n.wireframe,sh.visible=!n.wireframe}document.body.append($v(ni,mn.map(n=>n.label),uh));uh(ni);let ks=!1;window.addEventListener("keydown",n=>{n.code==="KeyC"&&(ks=!ks),!de.alive&&(n.code==="ArrowLeft"||n.code==="ArrowRight")&&(Mn=Zv(eh(se.tanks,0),Mn,n.code==="ArrowRight"?1:-1))});function zo(n,e,t){for(let i=0;i<16;i++){const r=i/16*Math.PI*2;zt.spawn(n+Math.sin(r)*t,.02,e+Math.cos(r)*t,0,0,0,20,Le.scorch[0],Le.scorch[1],Le.scorch[2],.5,Math.cos(r),0,-Math.sin(r))}}const Rs={cam:null};window.__vz={world:se,renderer:At,debug:Rs,camera:_t,turretObj:Tn.group,step:(n,e)=>{for(let t=0;t<e;t++)qu(se,n)},get rebuilds(){return cl},get spectatorId(){return Mn},post:yn,scene:Qe,command:$u,sample:n=>{const t=At.getDrawingBufferSize(new Ue),i=Math.floor(t.x/2-96/2),r=Math.floor(t.y/2-96/2);if(n){yn.composer.renderToScreen=!1,yn.composer.render();const o=new Uint8Array(9216*4);return At.readRenderTargetPixels(yn.composer.readBuffer,i,r,96,96,o),yn.composer.renderToScreen=!0,kc(o,96)}const s=new Zt(t.x,t.y,{type:gn});At.setRenderTarget(s),At.render(Qe,_t);const a=new Uint8Array(9216*4);return At.readRenderTargetPixels(s,i,r,96,96,a),At.setRenderTarget(null),s.dispose(),kc(a,96)}};function kc(n,e){let t=0;const i=[0,0,0],r=new Array(e).fill(0);for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=(o*e+l)*4,h=n[c]+n[c+1]+n[c+2];r[o]+=h,h>60&&(t++,i[0]+=n[c],i[1]+=n[c+1],i[2]+=n[c+2])}t&&(i[0]/=t,i[1]/=t,i[2]/=t);const s=r.reduce((o,l)=>o+l,0)/e,a=r.reduce((o,l)=>o+(l-s)*(l-s),0)/e;return{lit:t,mean:i.map(o=>Math.round(o)),rowVar:Math.round(a)}}let ds=0,Gc=performance.now(),Oo=0,ps=0,Vc=0;function hh(n){requestAnimationFrame(hh);const e=Math.min((n-Gc)/1e3,.25);Gc=n,ds+=e;const t=$u(),i=[];if(se.phase!=="over")for(;ds>=ti;)qu(se,[t]),i.push(...se.events),ds-=ti;else ds=0;de=se.tanks[0];const r=de.alive?[]:eh(se.tanks,0);de.alive?Mn=null:r.length&&(Mn===null?Mn=r.find(u=>u.id===Uc)?.id??r[0].id:r.some(u=>u.id===Mn)||(Mn=r[0].id));const s=r.find(u=>u.id===Mn)??null;se.phase==="over"&&!Bc&&(Bc=!0,ix()),ur(Gi,de.hull),ur(Tn,de.turret);const a=se.volcano.state,o=a==="erupt"?50:a==="rumble"?18:a==="cooldown"?10:3;for(Fo+=e;Fo>=1/o;){Fo-=1/o;const u=a==="erupt",_=u?45:a==="rumble"?28:12,p=u&&Math.random()<.4;zt.spawn(Fn.crater.x+(Math.random()-.5)*_,Fn.crater.y+(Math.random()-.5)*8,Fn.crater.z+(Math.random()-.5)*_,(Math.random()-.5)*(u?12:4)+(u?6:0),(u?16:6)+Math.random()*(u?14:5),(Math.random()-.5)*(u?12:4),(u?10:5)+Math.random()*(u?8:4),p?Le.hazard[0]:Le.smoke[0]*1.4,p?Le.hazard[1]:Le.smoke[1]*1.4,p?Le.hazard[2]:Le.smoke[2]*1.4,(u?12:a==="rumble"?6:2.5)+Math.random()*(u?18:5))}Fn.volcanoMat.color.setHex(a==="erupt"?16739115:a==="rumble"?9062944:mn[ni.palette%mn.length].dim),zt.update(e),Gi.group.visible=de.alive;for(const u of se.structures){let _=za.get(u.id);_||(_=Xi(u.grid,rh(u.kind)),_.group.position.set(u.x,0,u.z),Qe.add(_.group),za.set(u.id,_)),ur(_,u.grid)}if(se.rubbleRev!==Ic){Ic=se.rubbleRev;const u=Yv(se.rubble);Ns.geometry.dispose(),Fs.geometry.dispose(),Ns.geometry=u.faces,Au(Fs,u.edges),cl++}for(const u of se.chunks){let _=us.get(u.id);_||(_=Ss(qv(u.cells),ul),us.set(u.id,_),Qe.add(_)),_.position.set(u.pos[0],u.pos[1],u.pos[2]),_.rotation.set(u.angle*.7,u.angle,0)}for(const[u,_]of us)se.chunks.some(p=>p.id===u)||(Qe.remove(_),_.geometry.dispose(),us.delete(u));for(const u of se.shells)zt.spawn(u.pos[0],u.pos[1],u.pos[2],u.dir[0]*60,u.dir[1]*60,u.dir[2]*60,.06,Le.tracer[0],Le.tracer[1],Le.tracer[2],2.5);for(const u of se.tanks){if(u.id===0)continue;let _=hs.get(u.id);_||(_={hull:Xi(u.hull),turret:Xi(u.turret)},_.turret.group.position.set(u.turretPivot.x,u.turretPivot.y,u.turretPivot.z),_.turret.group.rotation.order="YXZ",_.hull.group.add(_.turret.group),Qe.add(_.hull.group),hs.set(u.id,_)),ur(_.hull,u.hull),ur(_.turret,u.turret),_.hull.group.visible=u.alive,_.hull.group.position.set(u.x,0,u.z),_.hull.group.rotation.y=u.heading,_.turret.group.rotation.y=u.turretYaw,_.turret.group.rotation.x=-u.gunPitch}for(const[u,_]of hs)se.tanks.some(p=>p.id===u)||(Qe.remove(_.hull.group),hs.delete(u));for(const u of se.missiles){let _=fs.get(u.id);_||(_=Ss(rx(),Fa),fs.set(u.id,_),Qe.add(_)),_.position.set(u.pos[0],u.pos[1],u.pos[2]);const p=new U(u.dir[0],u.dir[1],u.dir[2]).normalize();_.quaternion.setFromUnitVectors(new U(0,0,1),p)}for(const[u,_]of fs)se.missiles.some(p=>p.id===u)||(Qe.remove(_),_.geometry.dispose(),fs.delete(u));se.bomber?(Un||(Un=Ss(sx(),Fa),Qe.add(Un)),Un.position.set(se.bomber.pos[0],se.bomber.pos[1],se.bomber.pos[2]),Un.rotation.y=Math.atan2(se.bomber.dir[0],se.bomber.dir[2])):Un&&(Qe.remove(Un),Un.geometry.dispose(),Un=null);for(const u of se.telegraphs){const _=.5+.5*Math.sin(n/90),p=u.kind==="volcano"?32:16;for(let d=0;d<p;d++){const w=d/p*Math.PI*2;zt.spawn(u.x+Math.sin(w)*u.radius,.05,u.z+Math.cos(w)*u.radius,0,0,0,.12,Le.hazard[0]*_,Le.hazard[1]*_,Le.hazard[2]*_,u.kind==="volcano"?1.2:.5,Math.cos(w),0,-Math.sin(w))}if(u.kind==="volcano"||u.kind==="meteor"){const w=1-Math.max(0,u.impactTick-se.tick)/90,R=85*(1-w)*(1-w)+1;for(let S=0;S<7;S++)zt.spawn(u.x+Math.sin(S*.7+n/200)*.5,R+S*1.4,u.z+Math.cos(S*.7+n/200)*.5,-1.5,-22,-1.5,.25,Le.hazard[0],Le.hazard[1],Le.hazard[2],2.2)}}for(const u of se.fences){const _=sl(se,u);let p=Uo.get(u.id);if(_&&!p){const d=[],w=Math.hypot(u.bx-u.ax,u.bz-u.az),R=Math.max(2,Math.floor(w/.6));for(let S=0;S<=R;S++){const A=S/R,E=u.ax+(u.bx-u.ax)*A,b=u.az+(u.bz-u.az)*A;d.push(E,0,b,E,u.height,b)}d.push(u.ax,u.height,u.az,u.bx,u.height,u.bz),d.push(u.ax,.05,u.az,u.bx,.05,u.bz),p=Gn(d,Hc),Uo.set(u.id,p),Qe.add(p)}else!_&&p&&(Qe.remove(p),p.geometry.dispose(),Uo.delete(u.id))}Hc.opacity=.45+.25*Math.sin(n/180);const l=se.stormUntil>se.tick;if(zs.visible=l,l){let u=0;for(let _=0;_<3;_++)for(let p=0;p<24;p++){const d=p/24*Math.PI*2,w=(p+1)/24*Math.PI*2,R=130+_*18+Math.sin(d*3+n/400+_)*10,S=130+_*18+Math.sin(w*3+n/400+_)*10;jn[u++]=Math.sin(d)*520,jn[u++]=R,jn[u++]=Math.cos(d)*520,jn[u++]=Math.sin(w)*520,jn[u++]=S,jn[u++]=Math.cos(w)*520}is(zs,jn),ah.opacity=.3+.25*Math.sin(n/300)}if(se.sky.meteors)for(Ho+=e;Ho>.35;){Ho-=.35;const u=Math.random()*Math.PI*2;zt.spawn(Math.sin(u)*400,150+Math.random()*60,Math.cos(u)*400,-Math.sin(u)*60-20,-35,-Math.cos(u)*60,1.2,Le.tracer[0],Le.tracer[1],Le.tracer[2],6)}qt*=Math.exp(-e*6);const c=se.lavaPools.map(u=>`${u.x.toFixed(1)},${u.z.toFixed(1)},${u.radius.toFixed(1)},${u.untilTick}`).join("|");if(c!==Nc){Nc=c;const u=[];for(const _ of se.lavaPools)for(let p=0;p<2;p++){const d=_.radius*(p===0?1:.55);for(let w=0;w<32;w++){const R=w/32*Math.PI*2,S=(w+1)/32*Math.PI*2;u.push(_.x+Math.sin(R)*d,.07,_.z+Math.cos(R)*d,_.x+Math.sin(S)*d,.07,_.z+Math.cos(S)*d)}}is(Oa,u.length?u:new Float32Array(6)),Oa.visible=se.lavaPools.length>0}for(oh.opacity=.55+.25*Math.sin(n/180),Io+=e;Io>.12&&se.lavaPools.length;){Io-=.12;const u=se.lavaPools[Math.floor(Math.random()*se.lavaPools.length)];zt.spawn(u.x+(Math.random()-.5)*u.radius,.1,u.z+(Math.random()-.5)*u.radius,(Math.random()-.5)*1.5,3+Math.random()*4,(Math.random()-.5)*1.5,.8,Le.hazard[0],Le.hazard[1],Le.hazard[2],.7)}if(Bs.visible=Os,Os){let u=0;const _=(...p)=>{for(const d of p)Fc[u++]=d};for(const p of se.tanks){const d=se.brains.get(p.id);if(!(!d||!p.alive)&&(d.debug.intent&&_(p.x,1.4,p.z,d.debug.intent[0],1.4,d.debug.intent[2]),d.aim)){const w=p.heading+p.turretYaw,R=d.debug.err||.05;for(const S of[-1,1])_(p.x,1.4,p.z,p.x+Math.sin(w+R*S)*20,1.4,p.z+Math.cos(w+R*S)*20)}}is(Bs,Fc.subarray(0,u))}for(const u of i){if(u.kind==="superSpawn"?tn.alert("SUPERTANK INBOUND"):u.kind==="bomberInbound"?tn.alert("BOMBER RUN"):u.kind==="volcanoRumble"?tn.alert("VOLCANO RUMBLING — ERUPTION IMMINENT"):u.kind==="volcanoErupt"?tn.alert("ERUPTION"):u.kind==="matchEnd"?tn.alert("MATCH COMPLETE"):u.kind==="kill"&&u.what==="bomber"?tn.alert("BOMBER DOWN"):u.kind==="scanPing"?(Oc=n,tn.alert("SCAN PING")):u.kind==="ionStorm"?tn.alert("ION STORM — RADAR DOWN"):u.kind==="meteorInbound"?tn.alert("METEOR INBOUND"):u.kind==="missileLock"?tn.alert("MISSILE LOCK"):u.kind==="selfDestructArmed"&&u.id===0?tn.alert("SELF-DESTRUCT ARMED — 10s"):u.kind==="bombTelegraph"&&(zc=n),u.kind==="fire"&&u.owner===0&&(qt=Math.min(.35,qt+.035)),u.kind==="explosion"){const _=Math.hypot(u.pos[0]-de.x,u.pos[2]-de.z);qt=Math.min(1,qt+Jv(_,u.radius,u.source))}if(u.kind==="tankKilled"&&u.id===0&&(qt=Math.min(.8,qt+.3)),u.kind==="tankKilled"?u.id===0?(Uc=u.by,Mn=null,hr.push({text:u.cause==="selfDestruct"?"YOU SELF-DESTRUCTED":u.by===null?"THE ZONE KILLED YOU":"ENEMY KILLED YOU",born:n})):u.cause==="selfDestruct"?hr.push({text:"ENEMY SELF-DESTRUCTED",born:n}):u.by===0&&hr.push({text:`YOU KILLED ${se.brains.get(u.id)?.kind==="super"?"SUPERTANK":"TANK"}`,born:n}):u.kind==="kill"&&u.by===0&&hr.push({text:u.what==="bomber"?"YOU DOWNED BOMBER":"YOU DOWNED MISSILE",born:n}),u.kind==="blockDestroyed"&&u.by!==0&&Math.hypot(u.pos[0]-de.x,u.pos[2]-de.z)<4){const _=u.pos[0]-de.x,p=u.pos[2]-de.z;No={angle:ls(_,p,de.heading),born:n},Oi={angle:ls(_,p,de.heading),born:n},qt=Math.min(.5,qt+Qv(Math.hypot(_,p)))}if(u.kind==="explosion"&&Math.hypot(u.pos[0]-de.x,u.pos[2]-de.z)<6){const _=u.pos[0]-de.x,p=u.pos[2]-de.z;No={angle:ls(_,p,de.heading),born:n},Oi={angle:ls(_,p,de.heading),born:n}}if(u.kind==="fire")for(let _=0;_<8;_++)zt.spawn(u.pos[0],u.pos[1],u.pos[2],u.dir[0]*12+(Math.random()-.5)*6,u.dir[1]*12+(Math.random()-.5)*6,u.dir[2]*12+(Math.random()-.5)*6,.15,Le.tracer[0],Le.tracer[1],Le.tracer[2],.6);else if(u.kind==="blockDestroyed")for(let _=0;_<6;_++)zt.spawn(u.pos[0],u.pos[1],u.pos[2],(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,Le.spark[0],Le.spark[1],Le.spark[2],.4);else if(u.kind==="shellImpact"){zo(u.pos[0],u.pos[2],1.2);for(let _=0;_<10;_++)zt.spawn(u.pos[0],u.pos[1]+.1,u.pos[2],(Math.random()-.5)*7,Math.random()*5,(Math.random()-.5)*7,.35,Le.spark[0],Le.spark[1],Le.spark[2],.4)}else if(u.kind==="explosion"){u.pos[1]<5&&zo(u.pos[0],u.pos[2],u.radius);for(let _=0;_<40;_++){const p=Math.random()*Math.PI*2,d=4+Math.random()*8;zt.spawn(u.pos[0],u.pos[1]+.2,u.pos[2],Math.sin(p)*d,Math.random()*9,Math.cos(p)*d,.7,Le.hazard[0],Le.hazard[1],Le.hazard[2],.8)}}else if(u.kind==="tankKilled"){zo(u.pos[0],u.pos[2],2.5);for(let _=0;_<60;_++){const p=Math.random()*Math.PI*2,d=3+Math.random()*10;zt.spawn(u.pos[0],u.pos[1],u.pos[2],Math.sin(p)*d,Math.random()*12,Math.cos(p)*d,1,Le.hazard[0],Le.hazard[1],Le.hazard[2],.9)}}}if(Gi.group.position.set(de.x,0,de.z),Gi.group.rotation.y=de.heading,Tn.group.rotation.y=de.turretYaw,Tn.group.rotation.x=-de.gunPitch,Rs.cam?(_t.position.set(...Rs.cam.p),_t.lookAt(...Rs.cam.l)):!de.alive&&s?(_t.position.set(s.x-Math.sin(s.heading)*12,6.5,s.z-Math.cos(s.heading)*12),_t.lookAt(s.x,1.2,s.z)):de.alive?ks?(_t.position.set(de.x-Math.sin(de.heading)*12,6.5,de.z-Math.cos(de.heading)*12),_t.lookAt(de.x,1.2,de.z)):(Tn.group.updateWorldMatrix(!0,!1),_t.position.copy(ox).applyMatrix4(Tn.group.matrixWorld),_t.quaternion.setFromRotationMatrix(Tn.group.matrixWorld).multiply(ax)):(_t.position.set(de.x+6,4,de.z+6),_t.lookAt(de.x,1,de.z)),ni.shake&&qt>.001&&(_t.position.x+=(Math.random()-.5)*qt,_t.position.y+=(Math.random()-.5)*qt,_t.position.z+=(Math.random()-.5)*qt),At.info.reset(),yn.render(n/1e3),de.alive){const u=Iu(de),_=nl(de,[0,qe,de.turret.size.z/2*qe+.15]),p=O_(se,_,u,400,0);gt[0]=_[0],gt[1]=_[1],gt[2]=_[2],gt[3]=p.pos[0],gt[4]=p.pos[1],gt[5]=p.pos[2];const d=.5;gt[6]=p.pos[0]-d,gt[7]=p.pos[1],gt[8]=p.pos[2],gt[9]=p.pos[0]+d,gt[10]=p.pos[1],gt[11]=p.pos[2],gt[12]=p.pos[0],gt[13]=p.pos[1],gt[14]=p.pos[2]-d,gt[15]=p.pos[0],gt[16]=p.pos[1],gt[17]=p.pos[2]+d,is(As,gt),As.visible=!0}else As.visible=!1;const h=new Set,f=new Map,m=new Map;for(const u of se.tanks)f.set(u.id,u.heading),m.set(u.id,u.turretYaw),se.brains.get(u.id)?.kind==="super"&&h.add(u.id);const g=se.structures.find(u=>u.kind==="scan"&&u.grid.cells.some(_=>_));tn.draw({tick:se.tick,heading:de.heading,turretYaw:de.turretYaw,x:de.x,z:de.z,known:se.awareness.get(0),tankHeadings:f,tankTurrets:m,missiles:se.missiles.map(u=>({id:u.id,x:u.pos[0],z:u.pos[2],heading:Math.atan2(u.dir[0],u.dir[2]),targeted:u.targetId===0})),scanner:g?{x:g.x,z:g.z}:null,scanPulse:bv(n,Oc),bomber:se.bomber?{x:se.bomber.pos[0],z:se.bomber.pos[2],heading:Math.atan2(se.bomber.dir[0],se.bomber.dir[2])}:null,bomberBlip:n-zc<3e3,superIds:h,storm:se.stormUntil>se.tick,score:se.score,lives:se.lives,cooldownFrac:1-Math.min(1,de.cooldown/Fu),secondsLeft:Math.max(0,(Xs-se.tick)/60),palette:mn[ni.palette%mn.length],alive:de.alive,status:{core:xi(de.hull,"core"),tread:xi(de.hull,"tread"),gun:xi(de.turret,"gun"),engine:xi(de.hull,"engine")},killfeed:hr,hitFlash:No,threatBearing:Oi&&n-Oi.born<2500?{angle:Oi.angle,progress:(n-Oi.born)/2500}:null,elevation:de.gunPitch,selfDestructSeconds:de.selfDestructTick===null?null:Math.max(0,(de.selfDestructTick-se.tick)/60),spectator:s?{label:jv(s,se.brains.get(s.id)?.kind),secondsLeft:Math.max(0,(se.respawnTick-se.tick)/60)}:null,respawnReady:!de.alive&&se.respawnTick>0&&se.tick>=se.respawnTick,now:n}),Oo++,ps+=e,ps>=.5&&(Vc=Math.round(Oo/ps),Oo=0,ps=0),Na.textContent=`FPS ${Vc} · calls ${At.info.render.calls} · tick ${se.tick} · v ${de.speed.toFixed(1)} m/s · ${ks?"chase":"scope"} [C]`}requestAnimationFrame(hh);window.addEventListener("resize",()=>{_t.aspect=window.innerWidth/window.innerHeight,_t.updateProjectionMatrix(),At.setSize(window.innerWidth,window.innerHeight),yn.resize(window.innerWidth,window.innerHeight),Ru(window.innerWidth,window.innerHeight)});
