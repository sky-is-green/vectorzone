(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const tl="180",Yh=0,Il=1,qh=2,uu=1,Kh=2,Un=3,ni=0,Vt=1,fn=2,zn=0,qi=1,Ar=2,Ul=3,Hl=4,$h=5,pi=100,Zh=101,jh=102,Jh=103,Qh=104,ef=200,tf=201,nf=202,rf=203,ta=204,na=205,sf=206,of=207,af=208,lf=209,cf=210,uf=211,hf=212,ff=213,df=214,ia=0,ra=1,sa=2,Zi=3,oa=4,aa=5,la=6,ca=7,hu=0,pf=1,mf=2,Qn=0,gf=1,_f=2,vf=3,xf=4,Sf=5,Mf=6,Tf=7,fu=300,ji=301,Ji=302,ua=303,ha=304,eo=306,fa=1e3,gi=1001,da=1002,Zt=1003,yf=1004,Or=1005,En=1006,uo=1007,_i=1008,gn=1009,du=1010,pu=1011,Rr=1012,nl=1013,Si=1014,Nn=1015,On=1016,il=1017,rl=1018,wr=1020,mu=35902,gu=35899,_u=1021,vu=1022,pn=1023,Cr=1026,Pr=1027,xu=1028,sl=1029,Su=1030,ol=1031,al=1033,ws=33776,Cs=33777,Ps=33778,Ds=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,Sa=37496,Ma=37808,Ta=37809,ya=37810,Ea=37811,ba=37812,Aa=37813,Ra=37814,wa=37815,Ca=37816,Pa=37817,Da=37818,La=37819,Ia=37820,Ua=37821,Ha=36492,Na=36494,Fa=36495,za=36283,Oa=36284,ka=36285,Ba=36286,Ef=3200,bf=3201,Af=0,Rf=1,Jn="",$t="srgb",Qi="srgb-linear",Bs="linear",Je="srgb",Ti=7680,Nl=519,wf=512,Cf=513,Pf=514,Mu=515,Df=516,Lf=517,If=518,Uf=519,Ga=35044,Fl=35048,zl="300 es",bn=2e3,Gs=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const yr=Math.PI/180,Dr=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Ne(n,e,t){return Math.max(e,Math.min(t,n))}function ll(n,e){return(n%e+e)%e}function Hf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Nf(n,e,t){return n!==e?(t-n)/(e-n):0}function Er(n,e,t){return(1-t)*n+t*e}function Ff(n,e,t,i){return Er(n,e,1-Math.exp(-t*i))}function zf(n,e=1){return e-Math.abs(ll(n,e*2)-e)}function Of(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Bf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gf(n,e){return n+Math.random()*(e-n)}function Vf(n){return n*(.5-Math.random())}function Wf(n){n!==void 0&&(Ol=n);let e=Ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xf(n){return n*yr}function Yf(n){return n*Dr}function qf(n){return(n&n-1)===0&&n!==0}function Kf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $f(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),m=a((e-i)/2),g=s((i-e)/2),h=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*m,o*c);break;case"YZY":n.set(l*m,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*m,o*u,o*c);break;case"XZX":n.set(o*u,l*h,l*g,o*c);break;case"YXY":n.set(l*g,o*u,l*h,o*c);break;case"ZYZ":n.set(l*h,l*g,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jf={DEG2RAD:yr,RAD2DEG:Dr,generateUUID:kn,clamp:Ne,euclideanModulo:ll,mapLinear:Hf,inverseLerp:Nf,lerp:Er,damp:Ff,pingpong:zf,smoothstep:Of,smootherstep:kf,randInt:Bf,randFloat:Gf,randFloatSpread:Vf,seededRandom:Wf,degToRad:Xf,radToDeg:Yf,isPowerOfTwo:qf,ceilPowerOfTwo:Kf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Zf,normalize:Ze,denormalize:dn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const m=s[a+0],g=s[a+1],h=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=m,e[t+1]=g,e[t+2]=h,e[t+3]=_;return}if(f!==_||l!==m||c!==g||u!==h){let p=1-o;const d=l*m+c*g+u*h+f*_,w=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const b=Math.sqrt(A),y=Math.atan2(b,d*w);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b}const S=o*w;if(l=l*p+m*S,c=c*p+g*S,u=u*p+h*S,f=f*p+_*S,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],m=s[a+1],g=s[a+2],h=s[a+3];return e[t]=o*h+u*f+l*g-c*m,e[t+1]=l*h+u*m+c*f-o*g,e[t+2]=c*h+u*g+o*m-l*f,e[t+3]=u*h-o*f-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),m=l(i/2),g=l(r/2),h=l(s/2);switch(a){case"XYZ":this._x=m*u*f+c*g*h,this._y=c*g*f-m*u*h,this._z=c*u*h+m*g*f,this._w=c*u*f-m*g*h;break;case"YXZ":this._x=m*u*f+c*g*h,this._y=c*g*f-m*u*h,this._z=c*u*h-m*g*f,this._w=c*u*f+m*g*h;break;case"ZXY":this._x=m*u*f-c*g*h,this._y=c*g*f+m*u*h,this._z=c*u*h+m*g*f,this._w=c*u*f-m*g*h;break;case"ZYX":this._x=m*u*f-c*g*h,this._y=c*g*f+m*u*h,this._z=c*u*h-m*g*f,this._w=c*u*f+m*g*h;break;case"YZX":this._x=m*u*f+c*g*h,this._y=c*g*f+m*u*h,this._z=c*u*h-m*g*f,this._w=c*u*f-m*g*h;break;case"XZY":this._x=m*u*f-c*g*h,this._y=c*g*f-m*u*h,this._z=c*u*h+m*g*f,this._w=c*u*f+m*g*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],m=i+o+f;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,m=Math.sin(t*u)/c;return this._w=a*f+this._w*m,this._x=i*f+this._x*m,this._y=r*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new I,kl=new rr;class ze{constructor(e,t,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],m=i[2],g=i[5],h=i[8],_=r[0],p=r[3],d=r[6],w=r[1],A=r[4],S=r[7],b=r[2],y=r[5],E=r[8];return s[0]=a*_+o*w+l*b,s[3]=a*p+o*A+l*y,s[6]=a*d+o*S+l*E,s[1]=c*_+u*w+f*b,s[4]=c*p+u*A+f*y,s[7]=c*d+u*S+f*E,s[2]=m*_+g*w+h*b,s[5]=m*p+g*A+h*y,s[8]=m*d+g*S+h*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,m=o*l-u*s,g=c*s-a*l,h=t*f+i*m+r*g;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/h;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=m*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=g*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new ze;function Tu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jf(){const n=Vs("canvas");return n.style.display="block",n}const Bl={};function Lr(n){n in Bl||(Bl[n]=!0,console.warn(n))}function Qf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Gl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){const n={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qi]:{primaries:e,whitePoint:i,transfer:Bs,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const qe=ed();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class td{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yi===void 0&&(yi=Vs("canvas")),yi.width=e.width,yi.height=e.height;const r=yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nd=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(po(r[a].image)):s.push(po(r[a]))}else s=po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let id=0;const mo=new I;class Lt extends ir{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=gi,r=gi,s=En,a=_i,o=pn,l=gn,c=Lt.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=kn(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=fu;Lt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],m=l[1],g=l[5],h=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-m)<.01&&Math.abs(f-_)<.01&&Math.abs(h-p)<.01){if(Math.abs(u+m)<.1&&Math.abs(f+_)<.1&&Math.abs(h+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,S=(g+1)/2,b=(d+1)/2,y=(u+m)/4,E=(f+_)/4,P=(h+p)/4;return A>S&&A>b?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=y/i,s=E/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=y/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=P/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-h)*(p-h)+(f-_)*(f-_)+(m-u)*(m-u));return Math.abs(w)<.001&&(w=1),this.x=(p-h)/w,this.y=(f-_)/w,this.z=(m-u)/w,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends ir{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new cl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jt extends rd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yu extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Br.subVectors(this.max,ur),Ei.subVectors(e.a,ur),bi.subVectors(e.b,ur),Ai.subVectors(e.c,ur),Wn.subVectors(bi,Ei),Xn.subVectors(Ai,bi),oi.subVectors(Ei,Ai);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-oi.z,oi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,oi.z,0,-oi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-oi.y,oi.x,0];return!go(t,Ei,bi,Ai,Br)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Ei,bi,Ai,Br))?!1:(Gr.crossVectors(Wn,Xn),t=[Gr.x,Gr.y,Gr.z],go(t,Ei,bi,Ai,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,kr=new ii,Ei=new I,bi=new I,Ai=new I,Wn=new I,Xn=new I,oi=new I,ur=new I,Br=new I,Gr=new I,ai=new I;function go(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ai.fromArray(n,s);const o=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const od=new ii,hr=new I,_o=new I;class sr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):od.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(_o)),this.expandByPoint(hr.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new I,vo=new I,Vr=new I,Yn=new I,xo=new I,Wr=new I,So=new I;class Eu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vo.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Yn.dot(this.direction),l=-Yn.dot(Vr),c=Yn.lengthSq(),u=Math.abs(1-a*a);let f,m,g,h;if(u>0)if(f=a*l-o,m=a*o-l,h=s*u,f>=0)if(m>=-h)if(m<=h){const _=1/u;f*=_,m*=_,g=f*(f+a*m+2*o)+m*(a*f+m+2*l)+c}else m=s,f=Math.max(0,-(a*m+o)),g=-f*f+m*(m+2*l)+c;else m=-s,f=Math.max(0,-(a*m+o)),g=-f*f+m*(m+2*l)+c;else m<=-h?(f=Math.max(0,-(-a*s+o)),m=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+m*(m+2*l)+c):m<=h?(f=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+c):(f=Math.max(0,-(a*s+o)),m=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+m*(m+2*l)+c);else m=a>0?-s:s,f=Math.max(0,-(a*m+o)),g=-f*f+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vo).addScaledVector(Vr,m),g}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),u>=0?(s=(e.min.y-m.y)*u,a=(e.max.y-m.y)*u):(s=(e.max.y-m.y)*u,a=(e.min.y-m.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(o=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){xo.subVectors(t,e),Wr.subVectors(i,e),So.crossVectors(xo,Wr);let a=this.direction.dot(So),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(Wr.crossVectors(Yn,Wr));if(l<0)return null;const c=o*this.direction.dot(xo.cross(Yn));if(c<0||l+c>a)return null;const u=-o*Yn.dot(So);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,c,u,f,m,g,h,_,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,m,g,h,_,p)}set(e,t,i,r,s,a,o,l,c,u,f,m,g,h,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=m,d[3]=g,d[7]=h,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const m=a*u,g=a*f,h=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+h*c,t[5]=m-_*c,t[9]=-o*l,t[2]=_-m*c,t[6]=h+g*c,t[10]=a*l}else if(e.order==="YXZ"){const m=l*u,g=l*f,h=c*u,_=c*f;t[0]=m+_*o,t[4]=h*o-g,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=g*o-h,t[6]=_+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*u,g=l*f,h=c*u,_=c*f;t[0]=m-_*o,t[4]=-a*f,t[8]=h+g*o,t[1]=g+h*o,t[5]=a*u,t[9]=_-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*u,g=a*f,h=o*u,_=o*f;t[0]=l*u,t[4]=h*c-g,t[8]=m*c+_,t[1]=l*f,t[5]=_*c+m,t[9]=g*c-h,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,g=a*c,h=o*l,_=o*c;t[0]=l*u,t[4]=_-m*f,t[8]=h*f+g,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*f+h,t[10]=m-_*f}else if(e.order==="XZY"){const m=a*l,g=a*c,h=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=m*f+_,t[5]=a*u,t[9]=g*f-h,t[2]=h*f-g,t[6]=o*u,t[10]=_*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,ld)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),qn.crossVectors(i,Yt),qn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),qn.crossVectors(i,Yt)),qn.normalize(),Xr.crossVectors(Yt,qn),r[0]=qn.x,r[4]=Xr.x,r[8]=Yt.x,r[1]=qn.y,r[5]=Xr.y,r[9]=Yt.y,r[2]=qn.z,r[6]=Xr.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],m=i[9],g=i[13],h=i[2],_=i[6],p=i[10],d=i[14],w=i[3],A=i[7],S=i[11],b=i[15],y=r[0],E=r[4],P=r[8],M=r[12],T=r[1],D=r[5],N=r[9],k=r[13],X=r[2],V=r[6],Y=r[10],Z=r[14],B=r[3],oe=r[7],ue=r[11],Ee=r[15];return s[0]=a*y+o*T+l*X+c*B,s[4]=a*E+o*D+l*V+c*oe,s[8]=a*P+o*N+l*Y+c*ue,s[12]=a*M+o*k+l*Z+c*Ee,s[1]=u*y+f*T+m*X+g*B,s[5]=u*E+f*D+m*V+g*oe,s[9]=u*P+f*N+m*Y+g*ue,s[13]=u*M+f*k+m*Z+g*Ee,s[2]=h*y+_*T+p*X+d*B,s[6]=h*E+_*D+p*V+d*oe,s[10]=h*P+_*N+p*Y+d*ue,s[14]=h*M+_*k+p*Z+d*Ee,s[3]=w*y+A*T+S*X+b*B,s[7]=w*E+A*D+S*V+b*oe,s[11]=w*P+A*N+S*Y+b*ue,s[15]=w*M+A*k+S*Z+b*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],m=e[10],g=e[14],h=e[3],_=e[7],p=e[11],d=e[15];return h*(+s*l*f-r*c*f-s*o*m+i*c*m+r*o*g-i*l*g)+_*(+t*l*g-t*c*m+s*a*m-r*a*g+r*c*u-s*l*u)+p*(+t*c*f-t*o*g-s*a*f+i*a*g+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*m+r*a*f-i*a*m+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],m=e[10],g=e[11],h=e[12],_=e[13],p=e[14],d=e[15],w=f*p*c-_*m*c+_*l*g-o*p*g-f*l*d+o*m*d,A=h*m*c-u*p*c-h*l*g+a*p*g+u*l*d-a*m*d,S=u*_*c-h*f*c+h*o*g-a*_*g-u*o*d+a*f*d,b=h*f*l-u*_*l-h*o*m+a*_*m+u*o*p-a*f*p,y=t*w+i*A+r*S+s*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=w*E,e[1]=(_*m*s-f*p*s-_*r*g+i*p*g+f*r*d-i*m*d)*E,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*d+i*l*d)*E,e[3]=(f*l*s-o*m*s-f*r*c+i*m*c+o*r*g-i*l*g)*E,e[4]=A*E,e[5]=(u*p*s-h*m*s+h*r*g-t*p*g-u*r*d+t*m*d)*E,e[6]=(h*l*s-a*p*s-h*r*c+t*p*c+a*r*d-t*l*d)*E,e[7]=(a*m*s-u*l*s+u*r*c-t*m*c-a*r*g+t*l*g)*E,e[8]=S*E,e[9]=(h*f*s-u*_*s-h*i*g+t*_*g+u*i*d-t*f*d)*E,e[10]=(a*_*s-h*o*s+h*i*c-t*_*c-a*i*d+t*o*d)*E,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*g-t*o*g)*E,e[12]=b*E,e[13]=(u*_*r-h*f*r+h*i*m-t*_*m-u*i*p+t*f*p)*E,e[14]=(h*o*r-a*_*r-h*i*l+t*_*l+a*i*p-t*o*p)*E,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*m+t*o*m)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,m=s*c,g=s*u,h=s*f,_=a*u,p=a*f,d=o*f,w=l*c,A=l*u,S=l*f,b=i.x,y=i.y,E=i.z;return r[0]=(1-(_+d))*b,r[1]=(g+S)*b,r[2]=(h-A)*b,r[3]=0,r[4]=(g-S)*y,r[5]=(1-(m+d))*y,r[6]=(p+w)*y,r[7]=0,r[8]=(h+A)*E,r[9]=(p-w)*E,r[10]=(1-(m+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const a=Ri.set(r[4],r[5],r[6]).length(),o=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const c=1/s,u=1/a,f=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=bn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),m=(t+e)/(t-e),g=(i+r)/(i-r);let h,_;if(l)h=s/(a-s),_=a*s/(a-s);else if(o===bn)h=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Gs)h=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),m=-(t+e)/(t-e),g=-(i+r)/(i-r);let h,_;if(l)h=1/(a-s),_=a/(a-s);else if(o===bn)h=-2/(a-s),_=-(a+s)/(a-s);else if(o===Gs)h=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=h,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ri=new I,un=new dt,ad=new I(0,0,0),ld=new I(1,1,1),qn=new I,Xr=new I,Yt=new I,Wl=new dt,Xl=new rr;class Vn{constructor(e=0,t=0,i=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cd=0;const Yl=new I,wi=new rr,Pn=new dt,Yr=new I,fr=new I,ud=new I,hd=new rr,ql=new I(1,0,0),Kl=new I(0,1,0),$l=new I(0,0,1),Zl={type:"added"},fd={type:"removed"},Ci={type:"childadded",child:null},Mo={type:"childremoved",child:null};class Ft extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new I,t=new Vn,i=new rr,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ze}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(fr,Yr,this.up):Pn.lookAt(Yr,fr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Pn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),m=a(e.skeletons),g=a(e.animations),h=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),h.length>0&&(i.nodes=h)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new I(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,Dn=new I,To=new I,Ln=new I,Pi=new I,Di=new I,jl=new I,yo=new I,Eo=new I,bo=new I,Ao=new rt,Ro=new rt,wo=new rt;class ln{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),Dn.subVectors(i,t),To.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Dn),l=hn.dot(To),c=Dn.dot(Dn),u=Dn.dot(To),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const m=1/f,g=(c*l-o*u)*m,h=(a*u-o*l)*m;return s.set(1-g-h,h,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ao.setScalar(0),Ro.setScalar(0),wo.setScalar(0),Ao.fromBufferAttribute(e,t),Ro.fromBufferAttribute(e,i),wo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ao,s.x),a.addScaledVector(Ro,s.y),a.addScaledVector(wo,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),Dn.subVectors(e,t),hn.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,i),Di.subVectors(s,i),yo.subVectors(e,i);const l=Pi.dot(yo),c=Di.dot(yo);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,r);const u=Pi.dot(Eo),f=Di.dot(Eo);if(u>=0&&f<=u)return t.copy(r);const m=l*f-u*c;if(m<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Pi,a);bo.subVectors(e,s);const g=Pi.dot(bo),h=Di.dot(bo);if(h>=0&&g<=h)return t.copy(s);const _=g*c-l*h;if(_<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Di,o);const p=u*h-g*f;if(p<=0&&f-u>=0&&g-h>=0)return jl.subVectors(s,r),o=(f-u)/(f-u+(g-h)),t.copy(r).addScaledVector(jl,o);const d=1/(p+_+m);return a=_*d,o=m*d,t.copy(i).addScaledVector(Pi,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Co(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=ll(e,1),t=Ne(t,0,1),i=Ne(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Co(a,s,e+1/3),this.g=Co(a,s,e),this.b=Co(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=Au[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return qe.workingToColorSpace(Pt.copy(this),e),Math.round(Ne(Pt.r*255,0,255))*65536+Math.round(Ne(Pt.g*255,0,255))*256+Math.round(Ne(Pt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=$t){qe.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(qr);const i=Er(Kn.h,qr.h,t),r=Er(Kn.s,qr.s,t),s=Er(Kn.l,qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Be;Be.NAMES=Au;let dd=0;class or extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=qi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==na&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ar extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,Kr=new Ae;let pd=0;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ga,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class Ru extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wu extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let md=0;const tn=new dt,Po=new Ft,Li=new I,qt=new ii,dr=new ii,yt=new I;class ct extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?wu:Ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(qt.min,dr.min),qt.expandByPoint(yt),yt.addVectors(qt.max,dr.max),qt.expandByPoint(yt)):(qt.expandByPoint(dr.min),qt.expandByPoint(dr.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),yt.add(Li)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new I,l[P]=new I;const c=new I,u=new I,f=new I,m=new Ae,g=new Ae,h=new Ae,_=new I,p=new I;function d(P,M,T){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),m.fromBufferAttribute(s,P),g.fromBufferAttribute(s,M),h.fromBufferAttribute(s,T),u.sub(c),f.sub(c),g.sub(m),h.sub(m);const D=1/(g.x*h.y-h.x*g.y);isFinite(D)&&(_.copy(u).multiplyScalar(h.y).addScaledVector(f,-g.y).multiplyScalar(D),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-h.x).multiplyScalar(D),o[P].add(_),o[M].add(_),o[T].add(_),l[P].add(p),l[M].add(p),l[T].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,M=w.length;P<M;++P){const T=w[P],D=T.start,N=T.count;for(let k=D,X=D+N;k<X;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const A=new I,S=new I,b=new I,y=new I;function E(P){b.fromBufferAttribute(r,P),y.copy(b);const M=o[P];A.copy(M),A.sub(b.multiplyScalar(b.dot(M))).normalize(),S.crossVectors(y,M);const D=S.dot(l[P])<0?-1:1;a.setXYZW(P,A.x,A.y,A.z,D)}for(let P=0,M=w.length;P<M;++P){const T=w[P],D=T.start,N=T.count;for(let k=D,X=D+N;k<X;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let m=0,g=e.count;m<g;m+=3){const h=e.getX(m+0),_=e.getX(m+1),p=e.getX(m+2);r.fromBufferAttribute(t,h),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,h),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(h,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,m=new c.constructor(l.length*u);let g=0,h=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*u;for(let d=0;d<u;d++)m[h++]=c[g++]}return new Jt(m,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const m=c[u],g=e(m,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,m=c.length;f<m;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let m=0,g=f.length;m<g;m++)u.push(f[m].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new dt,li=new Eu,$r=new sr,Ql=new I,Zr=new I,jr=new I,Jr=new I,Do=new I,Qr=new I,ec=new I,es=new I;class Gt extends Ft{constructor(e=new ct,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Do.fromBufferAttribute(f,e),a?Qr.addScaledVector(Do,u):Qr.addScaledVector(Do.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),li.copy(e.ray).recast(e.near),!($r.containsPoint(li.origin)===!1&&(li.intersectSphere($r,Ql)===null||li.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(s).invert(),li.copy(e.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,m=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let h=0,_=m.length;h<_;h++){const p=m[h],d=a[p.materialIndex],w=Math.max(p.start,g.start),A=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let S=w,b=A;S<b;S+=3){const y=o.getX(S),E=o.getX(S+1),P=o.getX(S+2);r=ts(this,d,e,i,c,u,f,y,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const h=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let p=h,d=_;p<d;p+=3){const w=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);r=ts(this,a,e,i,c,u,f,w,A,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let h=0,_=m.length;h<_;h++){const p=m[h],d=a[p.materialIndex],w=Math.max(p.start,g.start),A=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=w,b=A;S<b;S+=3){const y=S,E=S+1,P=S+2;r=ts(this,d,e,i,c,u,f,y,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const h=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=h,d=_;p<d;p+=3){const w=p,A=p+1,S=p+2;r=ts(this,a,e,i,c,u,f,w,A,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function gd(n,e,t,i,r,s,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ni,o),l===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Zr),n.getVertexPosition(l,jr),n.getVertexPosition(c,Jr);const u=gd(n,e,t,i,Zr,jr,Jr,ec);if(u){const f=new I;ln.getBarycoord(ec,Zr,jr,Jr,f),r&&(u.uv=ln.getInterpolatedAttribute(r,o,l,c,f,new Ae)),s&&(u.uv1=ln.getInterpolatedAttribute(s,o,l,c,f,new Ae)),a&&(u.normal=ln.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a:o,b:l,c,normal:new I,materialIndex:0};ln.getNormal(Zr,jr,Jr,m.normal),u.face=m,u.barycoord=f}return u}class Hr extends ct{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let m=0,g=0;h("z","y","x",-1,-1,i,t,e,a,s,0),h("z","y","x",1,-1,i,t,-e,a,s,1),h("x","z","y",1,1,e,i,t,r,a,2),h("x","z","y",1,-1,e,i,-t,r,a,3),h("x","y","z",1,-1,e,t,i,r,s,4),h("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function h(_,p,d,w,A,S,b,y,E,P,M){const T=S/E,D=b/P,N=S/2,k=b/2,X=y/2,V=E+1,Y=P+1;let Z=0,B=0;const oe=new I;for(let ue=0;ue<Y;ue++){const Ee=ue*D-k;for(let Ge=0;Ge<V;Ge++){const nt=Ge*T-N;oe[_]=nt*w,oe[p]=Ee*A,oe[d]=X,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[p]=0,oe[d]=y>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(Ge/E),f.push(1-ue/P),Z+=1}}for(let ue=0;ue<P;ue++)for(let Ee=0;Ee<E;Ee++){const Ge=m+Ee+V*ue,nt=m+Ee+V*(ue+1),ot=m+(Ee+1)+V*(ue+1),Ke=m+(Ee+1)+V*ue;l.push(Ge,nt,Ke),l.push(nt,ot,Ke),B+=6}o.addGroup(g,B,M),g+=B,m+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}function _d(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const tr={clone:er,merge:Ht};var vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=_d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pu extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new I,tc=new Ae,nc=new Ae;class an extends Pu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,tc,nc),t.subVectors(nc,tc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ui=1;class Sd extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Ii,Ui,e,t);r.layers=this.layers,this.add(r);const s=new an(Ii,Ui,e,t);s.layers=this.layers,this.add(s);const a=new an(Ii,Ui,e,t);a.layers=this.layers,this.add(a);const o=new an(Ii,Ui,e,t);o.layers=this.layers,this.add(o);const l=new an(Ii,Ui,e,t);l.layers=this.layers,this.add(l);const c=new an(Ii,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,m,g),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Du extends Lt{constructor(e=[],t=ji,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Md extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Du(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hr(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:zn});s.uniforms.tEquirect.value=t;const a=new Gt(r,s),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=En),new Sd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Mr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Td={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=u.position.distanceTo(f.position),g=.02,h=.005;c.inputState.pinching&&m>g+h?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-h&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ul{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yd extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new I;class An{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new An(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Iu extends or{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hi;const pr=new I,Ni=new I,Fi=new I,zi=new Ae,mr=new Ae,Uu=new dt,ns=new I,gr=new I,is=new I,ic=new Ae,Io=new Ae,rc=new Ae;class Ed extends Ft{constructor(e=new Iu){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lu(t,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new An(i,3,0,!1)),Hi.setAttribute("uv",new An(i,2,3,!1))}this.geometry=Hi,this.material=e,this.center=new Ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),Uu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Fi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;rs(ns.set(-.5,-.5,0),Fi,a,Ni,r,s),rs(gr.set(.5,-.5,0),Fi,a,Ni,r,s),rs(is.set(.5,.5,0),Fi,a,Ni,r,s),ic.set(0,0),Io.set(1,0),rc.set(1,1);let o=e.ray.intersectTriangle(ns,gr,is,!1,pr);if(o===null&&(rs(gr.set(-.5,.5,0),Fi,a,Ni,r,s),Io.set(0,1),o=e.ray.intersectTriangle(ns,is,gr,!1,pr),o===null))return;const l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:ln.getInterpolation(pr,ns,gr,is,ic,Io,rc,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rs(n,e,t,i,r,s){zi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(mr.x=s*zi.x-r*zi.y,mr.y=r*zi.x+s*zi.y):mr.copy(zi),n.copy(e),n.x+=mr.x,n.y+=mr.y,n.applyMatrix4(Uu)}const Uo=new I,bd=new I,Ad=new ze;class fi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Uo.subVectors(i,t).cross(bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ad.getNormalMatrix(e),r=this.coplanarPoint(Uo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new sr,Rd=new Ae(.5,.5),ss=new I;class Hu{constructor(e=new fi,t=new fi,i=new fi,r=new fi,s=new fi,a=new fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],m=s[6],g=s[7],h=s[8],_=s[9],p=s[10],d=s[11],w=s[12],A=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-a,g-u,d-h,b-w).normalize(),r[1].setComponents(c+a,g+u,d+h,b+w).normalize(),r[2].setComponents(c+o,g+f,d+_,b+A).normalize(),r[3].setComponents(c-o,g-f,d-_,b-A).normalize(),i)r[4].setComponents(l,m,p,S).normalize(),r[5].setComponents(c-l,g-m,d-p,b-S).normalize();else if(r[4].setComponents(c-l,g-m,d-p,b-S).normalize(),t===bn)r[5].setComponents(c+l,g+m,d+p,b+S).normalize();else if(t===Gs)r[5].setComponents(l,m,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=Rd.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ss.x=r.normal.x>0?e.max.x:e.min.x,ss.y=r.normal.y>0?e.max.y:e.min.y,ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hl extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ws=new I,Xs=new I,sc=new dt,_r=new Eu,os=new sr,Ho=new I,oc=new I;class wd extends Ft{constructor(e=new ct,t=new hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ws.fromBufferAttribute(t,r-1),Xs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ws.distanceTo(Xs);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;sc.copy(r).invert(),_r.copy(e.ray).applyMatrix4(sc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,m=i.attributes.position;if(u!==null){const g=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let _=g,p=h-1;_<p;_+=c){const d=u.getX(_),w=u.getX(_+1),A=as(this,e,_r,l,d,w,_);A&&t.push(A)}if(this.isLineLoop){const _=u.getX(h-1),p=u.getX(g),d=as(this,e,_r,l,_,p,h-1);d&&t.push(d)}}else{const g=Math.max(0,a.start),h=Math.min(m.count,a.start+a.count);for(let _=g,p=h-1;_<p;_+=c){const d=as(this,e,_r,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=as(this,e,_r,l,h-1,g,h-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function as(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Ws.fromBufferAttribute(o,r),Xs.fromBufferAttribute(o,s),t.distanceSqToSegment(Ws,Xs,Ho,oc)>i)return;Ho.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ho);if(!(c<e.near||c>e.far))return{distance:c,point:oc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const ac=new I,lc=new I;class Nu extends wd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ac.fromBufferAttribute(t,r),lc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ac.distanceTo(lc);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cc extends Lt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Zt,this.minFilter=Zt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Cd extends Lt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fu extends Lt{constructor(e,t,i=Si,r,s,a,o=Zt,l=Zt,c,u=Cr,f=1){if(u!==Cr&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:f};super(m,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zu extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fl extends ct{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],m=[],g=[];let h=0;const _=[],p=i/2;let d=0;w(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(g,2));function w(){const S=new I,b=new I;let y=0;const E=(t-e)/i;for(let P=0;P<=s;P++){const M=[],T=P/s,D=T*(t-e)+e;for(let N=0;N<=r;N++){const k=N/r,X=k*l+o,V=Math.sin(X),Y=Math.cos(X);b.x=D*V,b.y=-T*i+p,b.z=D*Y,f.push(b.x,b.y,b.z),S.set(V,E,Y).normalize(),m.push(S.x,S.y,S.z),g.push(k,1-T),M.push(h++)}_.push(M)}for(let P=0;P<r;P++)for(let M=0;M<s;M++){const T=_[M][P],D=_[M+1][P],N=_[M+1][P+1],k=_[M][P+1];(e>0||M!==0)&&(u.push(T,D,k),y+=3),(t>0||M!==s-1)&&(u.push(D,N,k),y+=3)}c.addGroup(d,y,0),d+=y}function A(S){const b=h,y=new Ae,E=new I;let P=0;const M=S===!0?e:t,T=S===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,p*T,0),m.push(0,T,0),g.push(.5,.5),h++;const D=h;for(let N=0;N<=r;N++){const X=N/r*l+o,V=Math.cos(X),Y=Math.sin(X);E.x=M*Y,E.y=p*T,E.z=M*V,f.push(E.x,E.y,E.z),m.push(0,T,0),y.x=V*.5+.5,y.y=Y*.5*T+.5,g.push(y.x,y.y),h++}for(let N=0;N<r;N++){const k=b+N,X=D+N;S===!0?u.push(X,X+1,k):u.push(X+1,X,k),P+=3}c.addGroup(d,P,S===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dl extends fl{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new dl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class to extends ct{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,m=t/l,g=[],h=[],_=[],p=[];for(let d=0;d<u;d++){const w=d*m-a;for(let A=0;A<c;A++){const S=A*f-s;h.push(S,-w,0),_.push(0,0,1),p.push(A/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const A=w+c*d,S=w+c*(d+1),b=w+1+c*(d+1),y=w+1+c*d;g.push(A,S,y),g.push(S,b,y)}this.setIndex(g),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pd extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new I,s=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],m=f.start,g=f.count;for(let h=m,_=m+g;h<_;h+=3)for(let p=0;p<3;p++){const d=o.getX(h+p),w=o.getX(h+(p+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,w),uc(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,f=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),uc(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new tt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function uc(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class Dd extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ld extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ou extends Pu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Id extends ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ud extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Va extends Lu{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const hc=new I,ls=new I,Oi=new I,ki=new I,No=new I,Nd=new I,Fd=new I;class zd{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){hc.subVectors(e,this.start),ls.subVectors(this.end,this.start);const i=ls.dot(ls);let s=ls.dot(hc)/i;return t&&(s=Ne(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Nd,i=Fd){const r=10000000000000001e-32;let s,a;const o=this.start,l=e.start,c=this.end,u=e.end;Oi.subVectors(c,o),ki.subVectors(u,l),No.subVectors(o,l);const f=Oi.dot(Oi),m=ki.dot(ki),g=ki.dot(No);if(f<=r&&m<=r)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(f<=r)s=0,a=g/m,a=Ne(a,0,1);else{const h=Oi.dot(No);if(m<=r)a=0,s=Ne(-h/f,0,1);else{const _=Oi.dot(ki),p=f*m-_*_;p!==0?s=Ne((_*g-h*m)/p,0,1):s=0,a=(_*s+g)/m,a<0?(a=0,s=Ne(-h/f,0,1)):a>1&&(a=1,s=Ne((_-h)/f,0,1))}}return t.copy(o).add(Oi.multiplyScalar(s)),i.copy(l).add(ki.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Od extends Nu{constructor(e=10,t=10,i=4473924,r=8947848){i=new Be(i),r=new Be(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let m=0,g=0,h=-o;m<=t;m++,h+=a){l.push(-o,0,h,o,0,h),l.push(h,0,-o,h,0,o);const _=m===s?i:r;_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3}const u=new ct;u.setAttribute("position",new tt(l,3)),u.setAttribute("color",new tt(c,3));const f=new hl({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function fc(n,e,t,i){const r=kd(i);switch(t){case _u:return n*e;case xu:return n*e/r.components*r.byteLength;case sl:return n*e/r.components*r.byteLength;case Su:return n*e*2/r.components*r.byteLength;case ol:return n*e*2/r.components*r.byteLength;case vu:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case al:return n*e*4/r.components*r.byteLength;case ws:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ma:case _a:return Math.max(n,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(n,8)*Math.max(e,8)/2;case va:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ha:case Na:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case za:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ka:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kd(n){switch(n){case gn:case du:return{byteLength:1,components:1};case Rr:case pu:case On:return{byteLength:2,components:1};case il:case rl:return{byteLength:2,components:4};case Si:case nl:case Nn:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);function ku(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((g,h)=>g.start-h.start);let m=0;for(let g=1;g<f.length;g++){const h=f[m],_=f[g];_.start<=h.start+h.count+1?h.count=Math.max(h.count,_.start+_.count-h.start):(++m,f[m]=_)}f.length=m+1;for(let g=0,h=f.length;g<h;g++){const _=f[g];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
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
#endif`,kp=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Gd,alphahash_pars_fragment:Vd,alphamap_fragment:Wd,alphamap_pars_fragment:Xd,alphatest_fragment:Yd,alphatest_pars_fragment:qd,aomap_fragment:Kd,aomap_pars_fragment:$d,batching_pars_vertex:Zd,batching_vertex:jd,begin_vertex:Jd,beginnormal_vertex:Qd,bsdfs:ep,iridescence_fragment:tp,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:dp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:vp,colorspace_pars_fragment:xp,envmap_fragment:Sp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Tp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Up,envmap_vertex:Ep,fog_vertex:bp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:wp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Ip,lights_toon_fragment:Hp,lights_toon_pars_fragment:Np,lights_phong_fragment:Fp,lights_phong_pars_fragment:zp,lights_physical_fragment:Op,lights_physical_pars_fragment:kp,lights_fragment_begin:Bp,lights_fragment_maps:Gp,lights_fragment_end:Vp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:qp,map_fragment:Kp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:jp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:xm,dithering_pars_fragment:Sm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:Em,shadowmap_vertex:bm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:wm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Dm,specularmap_pars_fragment:Lm,tonemapping_fragment:Im,tonemapping_pars_fragment:Um,transmission_fragment:Hm,transmission_pars_fragment:Nm,uv_pars_fragment:Fm,uv_pars_vertex:zm,uv_vertex:Om,worldpos_vertex:km,background_vert:Bm,background_frag:Gm,backgroundCube_vert:Vm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:Ym,depth_vert:qm,depth_frag:Km,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:jm,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:rg,meshmatcap_vert:sg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:vg,sprite_vert:xg,sprite_frag:Sg},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Bt={basic:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ht([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ht([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ht([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ht([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ht([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ht([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ht([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ht([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Bt.physical={uniforms:Ht([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const cs={r:0,b:0,g:0},ui=new Vn,Mg=new dt;function Tg(n,e,t,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,c,u,f=null,m=0,g=null;function h(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}function _(A){let S=!1;const b=h(A);b===null?d(o,l):b&&b.isColor&&(d(b,1),S=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,S){const b=h(S);b&&(b.isCubeTexture||b.mapping===eo)?(u===void 0&&(u=new Gt(new Hr(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:er(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ui.copy(S.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(ui)),u.material.toneMapped=qe.getTransfer(b.colorSpace)!==Je,(f!==b||m!==b.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,m=b.version,g=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Gt(new to(2,2),new Nt({name:"BackgroundMaterial",uniforms:er(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qe.getTransfer(b.colorSpace)!==Je,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||m!==b.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,m=b.version,g=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,S){A.getRGB(cs,Cu(n)),i.buffers.color.setClear(cs.r,cs.g,cs.b,S,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,S=1){o.set(A),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:_,addToRenderList:p,dispose:w}}function yg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,a=!1;function o(T,D,N,k,X){let V=!1;const Y=f(k,N,D);s!==Y&&(s=Y,c(s.object)),V=g(T,k,N,X),V&&h(T,k,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(T,D,N,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,D,N){const k=N.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let V=X[D.id];V===void 0&&(V={},X[D.id]=V);let Y=V[k];return Y===void 0&&(Y=m(l()),V[k]=Y),Y}function m(T){const D=[],N=[],k=[];for(let X=0;X<t;X++)D[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:k,object:T,attributes:{},index:null}}function g(T,D,N,k){const X=s.attributes,V=D.attributes;let Y=0;const Z=N.getAttributes();for(const B in Z)if(Z[B].location>=0){const ue=X[B];let Ee=V[B];if(Ee===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor)),ue===void 0||ue.attribute!==Ee||Ee&&ue.data!==Ee.data)return!0;Y++}return s.attributesNum!==Y||s.index!==k}function h(T,D,N,k){const X={},V=D.attributes;let Y=0;const Z=N.getAttributes();for(const B in Z)if(Z[B].location>=0){let ue=V[B];ue===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor));const Ee={};Ee.attribute=ue,ue&&ue.data&&(Ee.data=ue.data),X[B]=Ee,Y++}s.attributes=X,s.attributesNum=Y,s.index=k}function _(){const T=s.newAttributes;for(let D=0,N=T.length;D<N;D++)T[D]=0}function p(T){d(T,0)}function d(T,D){const N=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;N[T]=1,k[T]===0&&(n.enableVertexAttribArray(T),k[T]=1),X[T]!==D&&(n.vertexAttribDivisor(T,D),X[T]=D)}function w(){const T=s.newAttributes,D=s.enabledAttributes;for(let N=0,k=D.length;N<k;N++)D[N]!==T[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function A(T,D,N,k,X,V,Y){Y===!0?n.vertexAttribIPointer(T,D,N,X,V):n.vertexAttribPointer(T,D,N,k,X,V)}function S(T,D,N,k){_();const X=k.attributes,V=N.getAttributes(),Y=D.defaultAttributeValues;for(const Z in V){const B=V[Z];if(B.location>=0){let oe=X[Z];if(oe===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),oe!==void 0){const ue=oe.normalized,Ee=oe.itemSize,Ge=e.get(oe);if(Ge===void 0)continue;const nt=Ge.buffer,ot=Ge.type,Ke=Ge.bytesPerElement,q=ot===n.INT||ot===n.UNSIGNED_INT||oe.gpuType===nl;if(oe.isInterleavedBufferAttribute){const j=oe.data,pe=j.stride,Ie=oe.offset;if(j.isInstancedInterleavedBuffer){for(let ye=0;ye<B.locationSize;ye++)d(B.location+ye,j.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<B.locationSize;ye++)p(B.location+ye);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ye=0;ye<B.locationSize;ye++)A(B.location+ye,Ee/B.locationSize,ot,ue,pe*Ke,(Ie+Ee/B.locationSize*ye)*Ke,q)}else{if(oe.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)d(B.location+j,oe.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let j=0;j<B.locationSize;j++)p(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let j=0;j<B.locationSize;j++)A(B.location+j,Ee/B.locationSize,ot,ue,Ee*Ke,Ee/B.locationSize*j*Ke,q)}}else if(Y!==void 0){const ue=Y[Z];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(B.location,ue);break;case 3:n.vertexAttrib3fv(B.location,ue);break;case 4:n.vertexAttrib4fv(B.location,ue);break;default:n.vertexAttrib1fv(B.location,ue)}}}}w()}function b(){P();for(const T in i){const D=i[T];for(const N in D){const k=D[N];for(const X in k)u(k[X].object),delete k[X];delete D[N]}delete i[T]}}function y(T){if(i[T.id]===void 0)return;const D=i[T.id];for(const N in D){const k=D[N];for(const X in k)u(k[X].object),delete k[X];delete D[N]}delete i[T.id]}function E(T){for(const D in i){const N=i[D];if(N[T.id]===void 0)continue;const k=N[T.id];for(const X in k)u(k[X].object),delete k[X];delete N[T.id]}}function P(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function Eg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let g=0;for(let h=0;h<f;h++)g+=u[h];t.update(g,i,1)}function l(c,u,f,m){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<c.length;h++)a(c[h],u[h],m[h]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,m,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_]*m[_];t.update(h,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==pn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const P=E===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Nn&&!P)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=h>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:b,maxSamples:y}}function Ag(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new fi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const g=f.length!==0||m||i!==0||r;return r=m,i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){t=u(f,m,0)},this.setState=function(f,m,g){const h=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||h===null||h.length===0||s&&!p)s?u(null):c();else{const w=s?0:i,A=w*4;let S=d.clippingState||null;l.value=S,S=u(h,m,A,g);for(let b=0;b!==A;++b)S[b]=t[b];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,m,g,h){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,h!==!0||p===null){const d=g+_*4,w=m.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,S=g;A!==_;++A,S+=4)a.copy(f[A]).applyMatrix4(w,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Rg(n){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=ji:o===ha&&(a.mapping=Ji),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===ha)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Md(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Xi=4,dc=[.125,.215,.35,.446,.526,.582],mi=20,Fo=new Ou,pc=new Be;let zo=null,Oo=0,ko=0,Bo=!1;const di=(1+Math.sqrt(5))/2,Bi=1/di,mc=[new I(-di,Bi,0),new I(di,Bi,0),new I(-Bi,0,di),new I(Bi,0,di),new I(0,di,-Bi),new I(0,di,Bi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],wg=new I;class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=wg}=s;zo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Oo,ko),this._renderer.xr.enabled=Bo,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:On,format:pn,colorSpace:Qi,depthBuffer:!1},r=_c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(s)),this._blurMaterial=Pg(s,e,t)}return r}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,i,r,s){const l=new an(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,g=f.toneMapping;f.getClearColor(pc),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new ar({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),p=new Gt(new Hr,_);let d=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,d=!0):(_.color.copy(pc),d=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):S===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const b=this._cubeSize;us(r,S*b,A>2?b:0,b,b),f.setRenderTarget(r),d&&f.render(p,l),f.render(e,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=g,f.autoClear=m,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Fo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mc[(r-s-1)%mc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Gt(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,h=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*mi-1),_=s/h,p=isFinite(s)?1+Math.floor(u*_):mi;p>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const d=[];let w=0;for(let E=0;E<mi;++E){const P=E/_,M=Math.exp(-P*P/2);d.push(M),E===0?w+=M:E<p&&(w+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/w;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=d,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:A}=this;m.dTheta.value=h,m.mipInt.value=A-i;const S=this._sizeLods[r],b=3*S*(r>A-Xi?r-A+Xi:0),y=4*(this._cubeSize-S);us(t,b,y,3*S,2*S),l.setRenderTarget(t),l.render(f,Fo)}}function Cg(n){const e=[],t=[],i=[];let r=n;const s=n-Xi+1+dc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Xi?l=dc[a-n+Xi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,m=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,h=6,_=3,p=2,d=1,w=new Float32Array(_*h*g),A=new Float32Array(p*h*g),S=new Float32Array(d*h*g);for(let y=0;y<g;y++){const E=y%3*2/3-1,P=y>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];w.set(M,_*h*y),A.set(m,p*h*y);const T=[y,y,y,y,y,y];S.set(T,d*h*y)}const b=new ct;b.setAttribute("position",new Jt(w,_)),b.setAttribute("uv",new Jt(A,p)),b.setAttribute("faceIndex",new Jt(S,d)),e.push(b),r>Xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _c(n,e,t){const i=new jt(n,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pg(n,e,t){const i=new Float32Array(mi),r=new I(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function vc(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function xc(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function Dg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ua||l===ha,u=l===ji||l===Ji;if(c||u){let f=e.get(o);const m=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new gc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new gc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Lg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Lr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ig(n,e,t,i){const r={},s=new WeakMap;function a(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const h in m.attributes)e.remove(m.attributes[h]);m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(f,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(f){const m=f.attributes;for(const g in m)e.update(m[g],n.ARRAY_BUFFER)}function c(f){const m=[],g=f.index,h=f.attributes.position;let _=0;if(g!==null){const w=g.array;_=g.version;for(let A=0,S=w.length;A<S;A+=3){const b=w[A+0],y=w[A+1],E=w[A+2];m.push(b,y,y,E,E,b)}}else if(h!==void 0){const w=h.array;_=h.version;for(let A=0,S=w.length/3-1;A<S;A+=3){const b=A+0,y=A+1,E=A+2;m.push(b,y,y,E,E,b)}}else return;const p=new(Tu(m)?wu:Ru)(m,1);p.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const m=s.get(f);if(m){const g=f.index;g!==null&&m.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ug(n,e,t){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,g){n.drawElements(i,g,s,m*a),t.update(g,i,1)}function c(m,g,h){h!==0&&(n.drawElementsInstanced(i,g,s,m*a,h),t.update(g,i,h))}function u(m,g,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,m,0,h);let p=0;for(let d=0;d<h;d++)p+=g[d];t.update(p,i,1)}function f(m,g,h,_){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<m.length;d++)c(m[d]/a,g[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,m,0,_,0,h);let d=0;for(let w=0;w<h;w++)d+=g[w]*_[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Hg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ng(n,e,t){const i=new WeakMap,r=new rt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let m=i.get(o);if(m===void 0||m.count!==f){let T=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var g=T;m!==void 0&&m.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let S=0;h===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let b=o.attributes.position.count*S,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*y*4*f),P=new yu(E,b,y,f);P.type=Nn,P.needsUpdate=!0;const M=S*4;for(let D=0;D<f;D++){const N=d[D],k=w[D],X=A[D],V=b*y*4*D;for(let Y=0;Y<N.count;Y++){const Z=Y*M;h===!0&&(r.fromBufferAttribute(N,Y),E[V+Z+0]=r.x,E[V+Z+1]=r.y,E[V+Z+2]=r.z,E[V+Z+3]=0),_===!0&&(r.fromBufferAttribute(k,Y),E[V+Z+4]=r.x,E[V+Z+5]=r.y,E[V+Z+6]=r.z,E[V+Z+7]=0),p===!0&&(r.fromBufferAttribute(X,Y),E[V+Z+8]=r.x,E[V+Z+9]=r.y,E[V+Z+10]=r.z,E[V+Z+11]=X.itemSize===4?r.w:1)}}m={count:f,texture:P,size:new Ae(b,y)},i.set(o,m),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let p=0;p<c.length;p++)h+=c[p];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function Fg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Bu=new Lt,Sc=new Fu(1,1),Gu=new yu,Vu=new sd,Wu=new Du,Mc=[],Tc=[],yc=new Float32Array(16),Ec=new Float32Array(9),bc=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mc[r];if(s===void 0&&(s=new Float32Array(r),Mc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;bc.set(i),n.uniformMatrix2fv(this.addr,!1,bc),Mt(t,i)}}function Vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Ec.set(i),n.uniformMatrix3fv(this.addr,!1,Ec),Mt(t,i)}}function Wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;yc.set(i),n.uniformMatrix4fv(this.addr,!1,yc),Mt(t,i)}}function Xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Sc.compareFunction=Mu,s=Sc):s=Bu,t.setTexture2D(e||s,r)}function e0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vu,r)}function t0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wu,r)}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gu,r)}function i0(n){switch(n){case 5126:return zg;case 35664:return Og;case 35665:return kg;case 35666:return Bg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return qg;case 35669:case 35673:return Kg;case 5125:return $g;case 36294:return Zg;case 36295:return jg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function r0(n,e){n.uniform1fv(this.addr,e)}function s0(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function o0(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function a0(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function l0(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c0(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u0(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h0(n,e){n.uniform1iv(this.addr,e)}function f0(n,e){n.uniform2iv(this.addr,e)}function d0(n,e){n.uniform3iv(this.addr,e)}function p0(n,e){n.uniform4iv(this.addr,e)}function m0(n,e){n.uniform1uiv(this.addr,e)}function g0(n,e){n.uniform2uiv(this.addr,e)}function _0(n,e){n.uniform3uiv(this.addr,e)}function v0(n,e){n.uniform4uiv(this.addr,e)}function x0(n,e,t){const i=this.cache,r=e.length,s=no(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Bu,s[a])}function S0(n,e,t){const i=this.cache,r=e.length,s=no(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vu,s[a])}function M0(n,e,t){const i=this.cache,r=e.length,s=no(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wu,s[a])}function T0(n,e,t){const i=this.cache,r=e.length,s=no(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gu,s[a])}function y0(n){switch(n){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return f0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return T0}}class E0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i0(t.type)}}class b0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y0(t.type)}}class A0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Ac(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){const i=n.name,r=i.length;for(Go.lastIndex=0;;){const s=Go.exec(i),a=Go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ac(t,c===void 0?new E0(o,n,e):new b0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new A0(o),Ac(t,f)),t=f}}}class Ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);R0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const w0=37297;let C0=0;function P0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const wc=new ze;function D0(n){qe._getMatrix(wc,qe.workingColorSpace,n);const e=`mat3( ${wc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Bs:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+P0(n.getShaderSource(e),o)}else return s}function L0(n,e){const t=D0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I0(n,e){let t;switch(e){case gf:t="Linear";break;case _f:t="Reinhard";break;case vf:t="Cineon";break;case xf:t="ACESFilmic";break;case Mf:t="AgX";break;case Tf:t="Neutral";break;case Sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new I;function U0(){qe.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function N0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Tr(n){return n!==""}function Pc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(z0,k0)}const O0=new Map;function k0(n,e){let t=ke[e];if(t===void 0){const i=O0.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(n){return n.replace(B0,G0)}function G0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ic(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function V0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function W0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ji:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ji&&(e="ENVMAP_MODE_REFRACTION"),e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hu:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function q0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function K0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=V0(t),c=W0(t),u=X0(t),f=Y0(t),m=q0(t),g=H0(t),h=N0(s),_=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Tr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Tr).join(`
`),d.length>0&&(d+=`
`)):(p=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),d=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Qn?I0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),U0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Wa(a),a=Pc(a,t),a=Dc(a,t),o=Wa(o),o=Pc(o,t),o=Dc(o,t),a=Lc(a),o=Lc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=w+p+a,S=w+d+o,b=Rc(r,r.VERTEX_SHADER,A),y=Rc(r,r.FRAGMENT_SHADER,S);r.attachShader(_,b),r.attachShader(_,y),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(b)||"",X=r.getShaderInfoLog(y)||"",V=N.trim(),Y=k.trim(),Z=X.trim();let B=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,y);else{const ue=Cc(r,b,"vertex"),Ee=Cc(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ue+`
`+Ee)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(Y===""||Z==="")&&(oe=!1);oe&&(D.diagnostics={runnable:B,programLog:V,vertexShader:{log:Y,prefix:p},fragmentShader:{log:Z,prefix:d}})}r.deleteShader(b),r.deleteShader(y),P=new Ls(r,_),M=F0(r,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,w0)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=y,this}let $0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new j0(e),t.set(e,i)),i}}class j0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function J0(n,e,t,i,r,s,a){const o=new bu,l=new Z0,c=new Set,u=[],f=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,T,D,N,k){const X=N.fog,V=k.geometry,Y=M.isMeshStandardMaterial?N.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),B=Z&&Z.mapping===eo?Z.image.height:null,oe=h[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ee=ue!==void 0?ue.length:0;let Ge=0;V.morphAttributes.position!==void 0&&(Ge=1),V.morphAttributes.normal!==void 0&&(Ge=2),V.morphAttributes.color!==void 0&&(Ge=3);let nt,ot,Ke,q;if(oe){const $e=Bt[oe];nt=$e.vertexShader,ot=$e.fragmentShader}else nt=M.vertexShader,ot=M.fragmentShader,l.update(M),Ke=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const j=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,ye=k.isBatchedMesh===!0,Xe=!!M.map,wt=!!M.matcap,C=!!Z,at=!!M.aoMap,He=!!M.lightMap,De=!!M.bumpMap,_e=!!M.normalMap,lt=!!M.displacementMap,ve=!!M.emissiveMap,Oe=!!M.metalnessMap,Tt=!!M.roughnessMap,pt=M.anisotropy>0,R=M.clearcoat>0,v=M.dispersion>0,F=M.iridescence>0,W=M.sheen>0,$=M.transmission>0,G=pt&&!!M.anisotropyMap,Te=R&&!!M.clearcoatMap,ne=R&&!!M.clearcoatNormalMap,xe=R&&!!M.clearcoatRoughnessMap,Se=F&&!!M.iridescenceMap,ee=F&&!!M.iridescenceThicknessMap,ce=W&&!!M.sheenColorMap,Pe=W&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ae=!!M.specularColorMap,Fe=!!M.specularIntensityMap,L=$&&!!M.transmissionMap,te=$&&!!M.thicknessMap,ie=!!M.gradientMap,fe=!!M.alphaMap,J=M.alphaTest>0,K=!!M.alphaHash,ge=!!M.extensions;let Ue=Qn;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const it={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:ot,defines:M.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ye,batchingColor:ye&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qi,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:wt,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:B,aoMap:at,lightMap:He,bumpMap:De,normalMap:_e,displacementMap:m&&lt,emissiveMap:ve,normalMapObjectSpace:_e&&M.normalMapType===Rf,normalMapTangentSpace:_e&&M.normalMapType===Af,metalnessMap:Oe,roughnessMap:Tt,anisotropy:pt,anisotropyMap:G,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:v,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:ce,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:ae,specularIntensityMap:Fe,transmission:$,transmissionMap:L,thicknessMap:te,gradientMap:ie,opaque:M.transparent===!1&&M.blending===qi&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:K,combine:M.combine,mapUv:Xe&&_(M.map.channel),aoMapUv:at&&_(M.aoMap.channel),lightMapUv:He&&_(M.lightMap.channel),bumpMapUv:De&&_(M.bumpMap.channel),normalMapUv:_e&&_(M.normalMap.channel),displacementMapUv:lt&&_(M.displacementMap.channel),emissiveMapUv:ve&&_(M.emissiveMap.channel),metalnessMapUv:Oe&&_(M.metalnessMap.channel),roughnessMapUv:Tt&&_(M.roughnessMap.channel),anisotropyMapUv:G&&_(M.anisotropyMap.channel),clearcoatMapUv:Te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(M.sheenRoughnessMap.channel),specularMapUv:Me&&_(M.specularMap.channel),specularColorMapUv:ae&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:te&&_(M.thicknessMap.channel),alphaMapUv:fe&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_e||pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Xe||fe),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:ve&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)T.push(D),T.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(w(T,M),A(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function w(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function A(M,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const T=h[M.type];let D;if(T){const N=Bt[T];D=tr.clone(N.uniforms)}else D=M.uniforms;return D}function b(M,T){let D;for(let N=0,k=u.length;N<k;N++){const X=u[N];if(X.cacheKey===T){D=X,++D.usedTimes;break}}return D===void 0&&(D=new K0(n,T,M,s),u.push(D)),D}function y(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:u,dispose:P}}function Q0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function e_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,m,g,h,_,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:m,material:g,groupOrder:h,renderOrder:f.renderOrder,z:_,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=m,d.material=g,d.groupOrder=h,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function o(f,m,g,h,_,p){const d=a(f,m,g,h,_,p);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):t.push(d)}function l(f,m,g,h,_,p){const d=a(f,m,g,h,_,p);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,m){t.length>1&&t.sort(f||e_),i.length>1&&i.sort(m||Uc),r.length>1&&r.sort(m||Uc)}function u(){for(let f=e,m=n.length;f<m;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function t_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Hc,n.set(i,[a])):r>=s.length?(a=new Hc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function n_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function i_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let r_=0;function s_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function o_(n){const e=new n_,t=i_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new dt,a=new dt;function o(c){let u=0,f=0,m=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let g=0,h=0,_=0,p=0,d=0,w=0,A=0,S=0,b=0,y=0,E=0;c.sort(s_);for(let M=0,T=c.length;M<T;M++){const D=c[M],N=D.color,k=D.intensity,X=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*k,f+=N.g*k,m+=N.b*k;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],k);E++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,B=t.get(D);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=D.shadow.matrix,w++}i.directional[g]=Y,g++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(N).multiplyScalar(k),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[_]=Y;const Z=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,Z.updateMatrices(D),D.castShadow&&y++),i.spotLightMatrix[_]=Z.matrix,D.castShadow){const B=t.get(D);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=V,S++}_++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(N).multiplyScalar(k),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Z=D.shadow,B=t.get(D);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,B.shadowCameraNear=Z.camera.near,B.shadowCameraFar=Z.camera.far,i.pointShadow[h]=B,i.pointShadowMap[h]=V,i.pointShadowMatrix[h]=D.shadow.matrix,A++}i.point[h]=Y,h++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(k),Y.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[d]=Y,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const P=i.hash;(P.directionalLength!==g||P.pointLength!==h||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==w||P.numPointShadows!==A||P.numSpotShadows!==S||P.numSpotMaps!==b||P.numLightProbes!==E)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=p,i.point.length=h,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+b-y,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=E,P.directionalLength=g,P.pointLength=h,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=w,P.numPointShadows=A,P.numSpotShadows=S,P.numSpotMaps=b,P.numLightProbes=E,i.version=r_++)}function l(c,u){let f=0,m=0,g=0,h=0,_=0;const p=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const A=c[d];if(A.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(A.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(A.isRectAreaLight){const S=i.rectArea[h];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(A.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Nc(n){const e=new o_(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function a_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nc(n),e.set(r,[o])):s>=a.length?(o=new Nc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
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
}`;function u_(n,e,t){let i=new Hu;const r=new Ae,s=new Ae,a=new rt,o=new Dd({depthPacking:bf}),l=new Ld,c={},u=t.maxTextureSize,f={[ni]:Vt,[Vt]:ni,[fn]:fn},m=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:l_,fragmentShader:c_}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const h=new ct;h.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(h,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let d=this.type;this.render=function(y,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=d!==Un&&this.type===Un,X=d===Un&&this.type!==Un;for(let V=0,Y=y.length;V<Y;V++){const Z=y[V],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const oe=B.getFrameExtents();if(r.multiply(oe),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,B.mapSize.y=s.y)),B.map===null||k===!0||X===!0){const Ee=this.type!==Un?{minFilter:Zt,magFilter:Zt}:{};B.map!==null&&B.map.dispose(),B.map=new jt(r.x,r.y,Ee),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ue=B.getViewportCount();for(let Ee=0;Ee<ue;Ee++){const Ge=B.getViewport(Ee);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),N.viewport(a),B.updateMatrices(Z,Ee),i=B.getFrustum(),S(E,P,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===Un&&w(B,P),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(M,T,D)};function w(y,E){const P=e.update(_);m.defines.VSM_SAMPLES!==y.blurSamples&&(m.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new jt(r.x,r.y)),m.uniforms.shadow_pass.value=y.map.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,P,m,_,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,P,g,_,null)}function A(y,E,P,M){let T=null;const D=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)T=D;else if(T=P.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const N=T.uuid,k=E.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let V=X[k];V===void 0&&(V=T.clone(),X[k]=V,E.addEventListener("dispose",b)),T=V}if(T.visible=E.visible,T.wireframe=E.wireframe,M===Un?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:f[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=n.properties.get(T);N.light=P}return T}function S(y,E,P,M,T){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===Un)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const k=e.update(y),X=y.material;if(Array.isArray(X)){const V=k.groups;for(let Y=0,Z=V.length;Y<Z;Y++){const B=V[Y],oe=X[B.materialIndex];if(oe&&oe.visible){const ue=A(y,oe,M,T);y.onBeforeShadow(n,y,E,P,k,ue,B),n.renderBufferDirect(P,null,k,ue,y,B),y.onAfterShadow(n,y,E,P,k,ue,B)}}}else if(X.visible){const V=A(y,X,M,T);y.onBeforeShadow(n,y,E,P,k,V,null),n.renderBufferDirect(P,null,k,V,y,null),y.onAfterShadow(n,y,E,P,k,V,null)}}const N=y.children;for(let k=0,X=N.length;k<X;k++)S(N[k],E,P,M,T)}function b(y){y.target.removeEventListener("dispose",b);for(const P in c){const M=c[P],T=y.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const h_={[ia]:ra,[sa]:la,[oa]:ca,[Zi]:aa,[ra]:ia,[la]:sa,[ca]:oa,[aa]:Zi};function f_(n,e){function t(){let L=!1;const te=new rt;let ie=null;const fe=new rt(0,0,0,0);return{setMask:function(J){ie!==J&&!L&&(n.colorMask(J,J,J,J),ie=J)},setLocked:function(J){L=J},setClear:function(J,K,ge,Ue,it){it===!0&&(J*=Ue,K*=Ue,ge*=Ue),te.set(J,K,ge,Ue),fe.equals(te)===!1&&(n.clearColor(J,K,ge,Ue),fe.copy(te))},reset:function(){L=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let L=!1,te=!1,ie=null,fe=null,J=null;return{setReversed:function(K){if(te!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),te=K;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(K){K?j(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(K){ie!==K&&!L&&(n.depthMask(K),ie=K)},setFunc:function(K){if(te&&(K=h_[K]),fe!==K){switch(K){case ia:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case sa:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case aa:n.depthFunc(n.GEQUAL);break;case la:n.depthFunc(n.GREATER);break;case ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=K}},setLocked:function(K){L=K},setClear:function(K){J!==K&&(te&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){L=!1,ie=null,fe=null,J=null,te=!1}}}function r(){let L=!1,te=null,ie=null,fe=null,J=null,K=null,ge=null,Ue=null,it=null;return{setTest:function($e){L||($e?j(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function($e){te!==$e&&!L&&(n.stencilMask($e),te=$e)},setFunc:function($e,Rn,_n){(ie!==$e||fe!==Rn||J!==_n)&&(n.stencilFunc($e,Rn,_n),ie=$e,fe=Rn,J=_n)},setOp:function($e,Rn,_n){(K!==$e||ge!==Rn||Ue!==_n)&&(n.stencilOp($e,Rn,_n),K=$e,ge=Rn,Ue=_n)},setLocked:function($e){L=$e},setClear:function($e){it!==$e&&(n.clearStencil($e),it=$e)},reset:function(){L=!1,te=null,ie=null,fe=null,J=null,K=null,ge=null,Ue=null,it=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},m=new WeakMap,g=[],h=null,_=!1,p=null,d=null,w=null,A=null,S=null,b=null,y=null,E=new Be(0,0,0),P=0,M=!1,T=null,D=null,N=null,k=null,X=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=Z>=1):B.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=Z>=2);let oe=null,ue={};const Ee=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),nt=new rt().fromArray(Ee),ot=new rt().fromArray(Ge);function Ke(L,te,ie,fe){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(L,K),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<ie;ge++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const q={};q[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(Zi),De(!1),_e(Il),j(n.CULL_FACE),at(zn);function j(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function pe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ie(L,te){return f[L]!==te?(n.bindFramebuffer(L,te),f[L]=te,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=te),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=te),!0):!1}function ye(L,te){let ie=g,fe=!1;if(L){ie=m.get(te),ie===void 0&&(ie=[],m.set(te,ie));const J=L.textures;if(ie.length!==J.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ge=J.length;K<ge;K++)ie[K]=n.COLOR_ATTACHMENT0+K;ie.length=J.length,fe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ie)}function Xe(L){return h!==L?(n.useProgram(L),h=L,!0):!1}const wt={[pi]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[jh]:n.FUNC_REVERSE_SUBTRACT};wt[Jh]=n.MIN,wt[Qh]=n.MAX;const C={[ef]:n.ZERO,[tf]:n.ONE,[nf]:n.SRC_COLOR,[ta]:n.SRC_ALPHA,[cf]:n.SRC_ALPHA_SATURATE,[af]:n.DST_COLOR,[sf]:n.DST_ALPHA,[rf]:n.ONE_MINUS_SRC_COLOR,[na]:n.ONE_MINUS_SRC_ALPHA,[lf]:n.ONE_MINUS_DST_COLOR,[of]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[hf]:n.ONE_MINUS_CONSTANT_COLOR,[ff]:n.CONSTANT_ALPHA,[df]:n.ONE_MINUS_CONSTANT_ALPHA};function at(L,te,ie,fe,J,K,ge,Ue,it,$e){if(L===zn){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),L!==$h){if(L!==p||$e!==M){if((d!==pi||S!==pi)&&(n.blendEquation(n.FUNC_ADD),d=pi,S=pi),$e)switch(L){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ar:n.blendFunc(n.ONE,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ul:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,A=null,b=null,y=null,E.set(0,0,0),P=0,p=L,M=$e}return}J=J||te,K=K||ie,ge=ge||fe,(te!==d||J!==S)&&(n.blendEquationSeparate(wt[te],wt[J]),d=te,S=J),(ie!==w||fe!==A||K!==b||ge!==y)&&(n.blendFuncSeparate(C[ie],C[fe],C[K],C[ge]),w=ie,A=fe,b=K,y=ge),(Ue.equals(E)===!1||it!==P)&&(n.blendColor(Ue.r,Ue.g,Ue.b,it),E.copy(Ue),P=it),p=L,M=!1}function He(L,te){L.side===fn?pe(n.CULL_FACE):j(n.CULL_FACE);let ie=L.side===Vt;te&&(ie=!ie),De(ie),L.blending===qi&&L.transparent===!1?at(zn):at(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){T!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),T=L)}function _e(L){L!==Yh?(j(n.CULL_FACE),L!==D&&(L===Il?n.cullFace(n.BACK):L===qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),D=L}function lt(L){L!==N&&(Y&&n.lineWidth(L),N=L)}function ve(L,te,ie){L?(j(n.POLYGON_OFFSET_FILL),(k!==te||X!==ie)&&(n.polygonOffset(te,ie),k=te,X=ie)):pe(n.POLYGON_OFFSET_FILL)}function Oe(L){L?j(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Tt(L){L===void 0&&(L=n.TEXTURE0+V-1),oe!==L&&(n.activeTexture(L),oe=L)}function pt(L,te,ie){ie===void 0&&(oe===null?ie=n.TEXTURE0+V-1:ie=oe);let fe=ue[ie];fe===void 0&&(fe={type:void 0,texture:void 0},ue[ie]=fe),(fe.type!==L||fe.texture!==te)&&(oe!==ie&&(n.activeTexture(ie),oe=ie),n.bindTexture(L,te||q[L]),fe.type=L,fe.texture=te)}function R(){const L=ue[oe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){nt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function Pe(L){ot.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function Me(L,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let fe=ie.get(L);fe===void 0&&(fe=n.getUniformBlockIndex(te,L.name),ie.set(L,fe))}function ae(L,te){const fe=c.get(te).get(L);l.get(te)!==fe&&(n.uniformBlockBinding(te,fe,L.__bindingPointIndex),l.set(te,fe))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,ue={},f={},m=new WeakMap,g=[],h=null,_=!1,p=null,d=null,w=null,A=null,S=null,b=null,y=null,E=new Be(0,0,0),P=0,M=!1,T=null,D=null,N=null,k=null,X=null,nt.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:pe,bindFramebuffer:Ie,drawBuffers:ye,useProgram:Xe,setBlending:at,setMaterial:He,setFlipSided:De,setCullFace:_e,setLineWidth:lt,setPolygonOffset:ve,setScissorTest:Oe,activeTexture:Tt,bindTexture:pt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Se,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:xe,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:Te,scissor:ce,viewport:Pe,reset:Fe}}function d_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(R,v){return g?new OffscreenCanvas(R,v):Vs("canvas")}function _(R,v,F){let W=1;const $=pt(R);if(($.width>F||$.height>F)&&(W=F/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const G=Math.floor(W*$.width),Te=Math.floor(W*$.height);f===void 0&&(f=h(G,Te));const ne=v?h(G,Te):f;return ne.width=G,ne.height=Te,ne.getContext("2d").drawImage(R,0,0,G,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+Te+")."),ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(R,v,F,W,$=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let G=v;if(v===n.RED&&(F===n.FLOAT&&(G=n.R32F),F===n.HALF_FLOAT&&(G=n.R16F),F===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.R8UI),F===n.UNSIGNED_SHORT&&(G=n.R16UI),F===n.UNSIGNED_INT&&(G=n.R32UI),F===n.BYTE&&(G=n.R8I),F===n.SHORT&&(G=n.R16I),F===n.INT&&(G=n.R32I)),v===n.RG&&(F===n.FLOAT&&(G=n.RG32F),F===n.HALF_FLOAT&&(G=n.RG16F),F===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RG8UI),F===n.UNSIGNED_SHORT&&(G=n.RG16UI),F===n.UNSIGNED_INT&&(G=n.RG32UI),F===n.BYTE&&(G=n.RG8I),F===n.SHORT&&(G=n.RG16I),F===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGB8UI),F===n.UNSIGNED_SHORT&&(G=n.RGB16UI),F===n.UNSIGNED_INT&&(G=n.RGB32UI),F===n.BYTE&&(G=n.RGB8I),F===n.SHORT&&(G=n.RGB16I),F===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),F===n.UNSIGNED_INT&&(G=n.RGBA32UI),F===n.BYTE&&(G=n.RGBA8I),F===n.SHORT&&(G=n.RGBA16I),F===n.INT&&(G=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),v===n.RGBA){const Te=$?Bs:qe.getTransfer(W);F===n.FLOAT&&(G=n.RGBA32F),F===n.HALF_FLOAT&&(G=n.RGBA16F),F===n.UNSIGNED_BYTE&&(G=Te===Je?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(R,v){let F;return R?v===null||v===Si||v===wr?F=n.DEPTH24_STENCIL8:v===Nn?F=n.DEPTH32F_STENCIL8:v===Rr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===wr?F=n.DEPTH_COMPONENT24:v===Nn?F=n.DEPTH_COMPONENT32F:v===Rr&&(F=n.DEPTH_COMPONENT16),F}function b(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function y(R){const v=R.target;v.removeEventListener("dispose",y),P(v),v.isVideoTexture&&u.delete(v)}function E(R){const v=R.target;v.removeEventListener("dispose",E),T(v)}function P(R){const v=i.get(R);if(v.__webglInit===void 0)return;const F=R.source,W=m.get(F);if(W){const $=W[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(R),Object.keys(W).length===0&&m.delete(F)}i.remove(R)}function M(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const F=R.source,W=m.get(F);delete W[v.__cacheKey],a.memory.textures--}function T(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let $=0;$<v.__webglFramebuffer[W].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[W][$]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=R.textures;for(let W=0,$=F.length;W<$;W++){const G=i.get(F[W]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(F[W])}i.remove(R)}let D=0;function N(){D=0}function k(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function V(R,v){const F=i.get(R);if(R.isVideoTexture&&Oe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,R,v);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function Y(R,v){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){q(F,R,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function Z(R,v){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){q(F,R,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function B(R,v){const F=i.get(R);if(R.version>0&&F.__version!==R.version){j(F,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const oe={[fa]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[da]:n.MIRRORED_REPEAT},ue={[Zt]:n.NEAREST,[yf]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},Ee={[wf]:n.NEVER,[Uf]:n.ALWAYS,[Cf]:n.LESS,[Mu]:n.LEQUAL,[Pf]:n.EQUAL,[If]:n.GEQUAL,[Df]:n.GREATER,[Lf]:n.NOTEQUAL};function Ge(R,v){if(v.type===Nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===uo||v.magFilter===Or||v.magFilter===_i||v.minFilter===En||v.minFilter===uo||v.minFilter===Or||v.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==Or&&v.minFilter!==_i||v.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function nt(R,v){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",y));const W=v.source;let $=m.get(W);$===void 0&&($={},m.set(W,$));const G=X(v);if(G!==R.__cacheKey){$[G]===void 0&&($[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[G].usedTimes++;const Te=$[R.__cacheKey];Te!==void 0&&($[R.__cacheKey].usedTimes--,Te.usedTimes===0&&M(v)),R.__cacheKey=G,R.__webglTexture=$[G].texture}return F}function ot(R,v,F){return Math.floor(Math.floor(R/F)/v)}function Ke(R,v,F,W){const G=R.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,W,v.data);else{G.sort((ee,ce)=>ee.start-ce.start);let Te=0;for(let ee=1;ee<G.length;ee++){const ce=G[Te],Pe=G[ee],Me=ce.start+ce.count,ae=ot(Pe.start,v.width,4),Fe=ot(ce.start,v.width,4);Pe.start<=Me+1&&ae===Fe&&ot(Pe.start+Pe.count-1,v.width,4)===ae?ce.count=Math.max(ce.count,Pe.start+Pe.count-ce.start):(++Te,G[Te]=Pe)}G.length=Te+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ce=G.length;ee<ce;ee++){const Pe=G[ee],Me=Math.floor(Pe.start/4),ae=Math.ceil(Pe.count/4),Fe=Me%v.width,L=Math.floor(Me/v.width),te=ae,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Fe,L,te,ie,F,W,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function q(R,v,F){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const $=nt(R,v),G=v.source;t.bindTexture(W,R.__webglTexture,n.TEXTURE0+F);const Te=i.get(G);if(G.version!==Te.__version||$===!0){t.activeTexture(n.TEXTURE0+F);const ne=qe.getPrimaries(qe.workingColorSpace),xe=v.colorSpace===Jn?null:qe.getPrimaries(v.colorSpace),Se=v.colorSpace===Jn||ne===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ee=_(v.image,!1,r.maxTextureSize);ee=Tt(v,ee);const ce=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type);let Me=A(v.internalFormat,ce,Pe,v.colorSpace,v.isVideoTexture);Ge(W,v);let ae;const Fe=v.mipmaps,L=v.isVideoTexture!==!0,te=Te.__version===void 0||$===!0,ie=G.dataReady,fe=b(v,ee);if(v.isDepthTexture)Me=S(v.format===Pr,v.type),te&&(L?t.texStorage2D(n.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,Pe,null));else if(v.isDataTexture)if(Fe.length>0){L&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)ae=Fe[J],L?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,Pe,ae.data):t.texImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ce,Pe,ae.data);v.generateMipmaps=!1}else L?(te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height),ie&&Ke(v,ee,ce,Pe)):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,Pe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,Fe[0].width,Fe[0].height,ee.depth);for(let J=0,K=Fe.length;J<K;J++)if(ae=Fe[J],v.format!==pn)if(ce!==null)if(L){if(ie)if(v.layerUpdates.size>0){const ge=fc(ae.width,ae.height,v.format,v.type);for(const Ue of v.layerUpdates){const it=ae.data.subarray(Ue*ge/ae.data.BYTES_PER_ELEMENT,(Ue+1)*ge/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ue,ae.width,ae.height,1,ce,it)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,ce,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,ce,Pe,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,ce,Pe,ae.data)}else{L&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)ae=Fe[J],v.format!==pn?ce!==null?L?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,Pe,ae.data):t.texImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ce,Pe,ae.data)}else if(v.isDataArrayTexture)if(L){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,ee.width,ee.height,ee.depth),ie)if(v.layerUpdates.size>0){const J=fc(ee.width,ee.height,v.format,v.type);for(const K of v.layerUpdates){const ge=ee.data.subarray(K*J/ee.data.BYTES_PER_ELEMENT,(K+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ce,Pe,ge)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(v.isData3DTexture)L?(te&&t.texStorage3D(n.TEXTURE_3D,fe,Me,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(v.isFramebufferTexture){if(te)if(L)t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height);else{let J=ee.width,K=ee.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Me,J,K,0,ce,Pe,null),J>>=1,K>>=1}}else if(Fe.length>0){if(L&&te){const J=pt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,fe,Me,J.width,J.height)}for(let J=0,K=Fe.length;J<K;J++)ae=Fe[J],L?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce,Pe,ae):t.texImage2D(n.TEXTURE_2D,J,Me,ce,Pe,ae);v.generateMipmaps=!1}else if(L){if(te){const J=pt(ee);t.texStorage2D(n.TEXTURE_2D,fe,Me,J.width,J.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Pe,ee)}else t.texImage2D(n.TEXTURE_2D,0,Me,ce,Pe,ee);p(v)&&d(W),Te.__version=G.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function j(R,v,F){if(v.image.length!==6)return;const W=nt(R,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const G=i.get($);if($.version!==G.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const Te=qe.getPrimaries(qe.workingColorSpace),ne=v.colorSpace===Jn?null:qe.getPrimaries(v.colorSpace),xe=v.colorSpace===Jn||Te===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Se&&!ee?ce[K]=_(v.image[K],!0,r.maxCubemapSize):ce[K]=ee?v.image[K].image:v.image[K],ce[K]=Tt(v,ce[K]);const Pe=ce[0],Me=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),Fe=A(v.internalFormat,Me,ae,v.colorSpace),L=v.isVideoTexture!==!0,te=G.__version===void 0||W===!0,ie=$.dataReady;let fe=b(v,Pe);Ge(n.TEXTURE_CUBE_MAP,v);let J;if(Se){L&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Fe,Pe.width,Pe.height);for(let K=0;K<6;K++){J=ce[K].mipmaps;for(let ge=0;ge<J.length;ge++){const Ue=J[ge];v.format!==pn?Me!==null?L?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Fe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Me,ae,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Fe,Ue.width,Ue.height,0,Me,ae,Ue.data)}}}else{if(J=v.mipmaps,L&&te){J.length>0&&fe++;const K=pt(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Me,ae,ce[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ce[K].width,ce[K].height,0,Me,ae,ce[K].data);for(let ge=0;ge<J.length;ge++){const it=J[ge].image[K].image;L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,it.width,it.height,Me,ae,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Fe,it.width,it.height,0,Me,ae,it.data)}}else{L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,ae,ce[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Me,ae,ce[K]);for(let ge=0;ge<J.length;ge++){const Ue=J[ge];L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Me,ae,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Fe,Me,ae,Ue.image[K])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),G.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function pe(R,v,F,W,$,G){const Te=s.convert(F.format,F.colorSpace),ne=s.convert(F.type),xe=A(F.internalFormat,Te,ne,F.colorSpace),Se=i.get(v),ee=i.get(F);if(ee.__renderTarget=v,!Se.__hasExternalTextures){const ce=Math.max(1,v.width>>G),Pe=Math.max(1,v.height>>G);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,G,xe,ce,Pe,v.depth,0,Te,ne,null):t.texImage2D($,G,xe,ce,Pe,0,Te,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,$,ee.__webglTexture,0,lt(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,$,ee.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(R,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const W=v.depthTexture,$=W&&W.isDepthTexture?W.type:null,G=S(v.stencilBuffer,$),Te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=lt(v);ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,G,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,R)}else{const W=v.textures;for(let $=0;$<W.length;$++){const G=W[$],Te=s.convert(G.format,G.colorSpace),ne=s.convert(G.type),xe=A(G.internalFormat,Te,ne,G.colorSpace),Se=lt(v);F&&ve(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,xe,v.width,v.height):ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,xe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const $=W.__webglTexture,G=lt(v);if(v.depthTexture.format===Cr)ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===Pr)ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Xe(R){const v=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=W}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=R.texture.mipmaps;W&&W.length>0?ye(v.__webglFramebuffer[0],R):ye(v.__webglFramebuffer,R)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),Ie(v.__webglDepthbuffer[W],R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,G)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ie(v.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(R,v,F){const W=i.get(R);v!==void 0&&pe(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xe(R)}function C(R){const v=R.texture,F=i.get(R),W=i.get(v);R.addEventListener("dispose",E);const $=R.textures,G=R.isWebGLCubeRenderTarget===!0,Te=$.length>1;if(Te||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let xe=0;xe<v.mipmaps.length;xe++)F.__webglFramebuffer[ne][xe]=n.createFramebuffer()}else F.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)F.__webglFramebuffer[ne]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ne=0,xe=$.length;ne<xe;ne++){const Se=i.get($[ne]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const xe=$[ne];F.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const Se=s.convert(xe.format,xe.colorSpace),ee=s.convert(xe.type),ce=A(xe.internalFormat,Se,ee,xe.colorSpace,R.isXRRenderTarget===!0),Pe=lt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(F.__webglFramebuffer[ne][xe],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe);else pe(F.__webglFramebuffer[ne],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ne=0,xe=$.length;ne<xe;ne++){const Se=$[ne],ee=i.get(Se);let ce=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Ge(ce,Se),pe(F.__webglFramebuffer,R,Se,n.COLOR_ATTACHMENT0+ne,ce,0),p(Se)&&d(ce)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Ge(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(F.__webglFramebuffer[xe],R,v,n.COLOR_ATTACHMENT0,ne,xe);else pe(F.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,ne,0);p(v)&&d(ne),t.unbindTexture()}R.depthBuffer&&Xe(R)}function at(R){const v=R.textures;for(let F=0,W=v.length;F<W;F++){const $=v[F];if(p($)){const G=w(R),Te=i.get($).__webglTexture;t.bindTexture(G,Te),d(G),t.unbindTexture()}}}const He=[],De=[];function _e(R){if(R.samples>0){if(ve(R)===!1){const v=R.textures,F=R.width,W=R.height;let $=n.COLOR_BUFFER_BIT;const G=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(R),ne=v.length>1;if(ne)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const xe=R.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=i.get(v[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,$,n.NEAREST),l===!0&&(He.length=0,De.length=0,He.push(n.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(G),De.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=i.get(v[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function lt(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Oe(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Tt(R,v){const F=R.colorSpace,W=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Qi&&F!==Jn&&(qe.getTransfer(F)===Je?(W!==pn||$!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=B,this.rebindTextures=wt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function p_(n,e){function t(i,r=Jn){let s;const a=qe.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===du)return n.BYTE;if(i===pu)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===nl)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===On)return n.HALF_FLOAT;if(i===_u)return n.ALPHA;if(i===vu)return n.RGB;if(i===pn)return n.RGBA;if(i===Cr)return n.DEPTH_COMPONENT;if(i===Pr)return n.DEPTH_STENCIL;if(i===xu)return n.RED;if(i===sl)return n.RED_INTEGER;if(i===Su)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===al)return n.RGBA_INTEGER;if(i===ws||i===Cs||i===Ps||i===Ds)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pa||i===ma||i===ga||i===_a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ma)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===xa||i===Sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===va||i===xa)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ma||i===Ta||i===ya||i===Ea||i===ba||i===Aa||i===Ra||i===wa||i===Ca||i===Pa||i===Da||i===La||i===Ia||i===Ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ta)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ya)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ea)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ba)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ca)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===La)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ha||i===Na||i===Fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ha)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Na)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===za||i===Oa||i===ka||i===Ba)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nt({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends ir{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,m=null,g=null,h=null;const _=typeof XRWebGLBinding<"u",p=new __,d={},w=t.getContextAttributes();let A=null,S=null;const b=[],y=[],E=new Ae;let P=null;const M=new an;M.viewport=new rt;const T=new an;T.viewport=new rt;const D=[M,T],N=new Ud;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=b[q];return j===void 0&&(j=new Lo,b[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=b[q];return j===void 0&&(j=new Lo,b[q]=j),j.getGripSpace()},this.getHand=function(q){let j=b[q];return j===void 0&&(j=new Lo,b[q]=j),j.getHandSpace()};function V(q){const j=y.indexOf(q.inputSource);if(j===-1)return;const pe=b[j];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let q=0;q<b.length;q++){const j=y[q];j!==null&&(y[q]=null,b[q].disconnect(j))}k=null,X=null,p.reset();for(const q in d)delete d[q];e.setRenderTarget(A),g=null,m=null,f=null,r=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,ye=null;w.depth&&(ye=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?Pr:Cr,Ie=w.stencil?wr:Si);const Xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};f=this.getBinding(),m=f.createProjectionLayer(Xe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),S=new jt(m.textureWidth,m.textureHeight,{format:pn,type:gn,depthTexture:new Fu(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new jt(g.framebufferWidth,g.framebufferHeight,{format:pn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(q){for(let j=0;j<q.removed.length;j++){const pe=q.removed[j],Ie=y.indexOf(pe);Ie>=0&&(y[Ie]=null,b[Ie].disconnect(pe))}for(let j=0;j<q.added.length;j++){const pe=q.added[j];let Ie=y.indexOf(pe);if(Ie===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=y.length){y.push(pe),Ie=Xe;break}else if(y[Xe]===null){y[Xe]=pe,Ie=Xe;break}if(Ie===-1)break}const ye=b[Ie];ye&&ye.connect(pe)}}const B=new I,oe=new I;function ue(q,j,pe){B.setFromMatrixPosition(j.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Ie=B.distanceTo(oe),ye=j.projectionMatrix.elements,Xe=pe.projectionMatrix.elements,wt=ye[14]/(ye[10]-1),C=ye[14]/(ye[10]+1),at=(ye[9]+1)/ye[5],He=(ye[9]-1)/ye[5],De=(ye[8]-1)/ye[0],_e=(Xe[8]+1)/Xe[0],lt=wt*De,ve=wt*_e,Oe=Ie/(-De+_e),Tt=Oe*-De;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Tt),q.translateZ(Oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const pt=wt+Oe,R=C+Oe,v=lt-Tt,F=ve+(Ie-Tt),W=at*C/R*pt,$=He*C/R*pt;q.projectionMatrix.makePerspective(v,F,W,$,pt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ee(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,pe=q.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),N.near=T.near=M.near=j,N.far=T.far=M.far=pe,(k!==N.near||X!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,X=N.far),N.layers.mask=q.layers.mask|6,M.layers.mask=N.layers.mask&3,T.layers.mask=N.layers.mask&5;const Ie=q.parent,ye=N.cameras;Ee(N,Ie);for(let Xe=0;Xe<ye.length;Xe++)Ee(ye[Xe],Ie);ye.length===2?ue(N,M,T):N.projectionMatrix.copy(M.projectionMatrix),Ge(q,N,Ie)};function Ge(q,j,pe){pe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Dr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(q){l=q,m!==null&&(m.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(q){return d[q]};let nt=null;function ot(q,j){if(u=j.getViewerPose(c||a),h=j,u!==null){const pe=u.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Ie=!1;pe.length!==N.cameras.length&&(N.cameras.length=0,Ie=!0);for(let C=0;C<pe.length;C++){const at=pe[C];let He=null;if(g!==null)He=g.getViewport(at);else{const _e=f.getViewSubImage(m,at);He=_e.viewport,C===0&&(e.setRenderTargetTextures(S,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(S))}let De=D[C];De===void 0&&(De=new an,De.layers.enable(C),De.viewport=new rt,D[C]=De),De.matrix.fromArray(at.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(at.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(He.x,He.y,He.width,He.height),C===0&&(N.matrix.copy(De.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ie===!0&&N.cameras.push(De)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const C=f.getDepthInformation(pe[0]);C&&C.isValid&&C.texture&&p.init(C,r.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<pe.length;C++){const at=pe[C].camera;if(at){let He=d[at];He||(He=new zu,d[at]=He);const De=f.getCameraImage(at);He.sourceTexture=De}}}}for(let pe=0;pe<b.length;pe++){const Ie=y[pe],ye=b[pe];Ie!==null&&ye!==void 0&&ye.update(Ie,j,c||a)}nt&&nt(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),h=null}const Ke=new ku;Ke.setAnimationLoop(ot),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const hi=new Vn,x_=new dt;function S_(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Cu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,A,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),m(p,d),d.isMeshPhysicalMaterial&&g(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),h(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,w,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Vt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Vt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),A=w.envMap,S=w.envMapRotation;A&&(p.envMap.value=A,hi.copy(S),hi.x*=-1,hi.y*=-1,hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(hi)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function m(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function h(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function M_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const S=A.program;i.uniformBlockBinding(w,S)}function c(w,A){let S=r[w.id];S===void 0&&(h(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",p));const b=A.program;i.updateUBOMapping(w,b);const y=e.render.frame;s[w.id]!==y&&(m(w),s[w.id]=y)}function u(w){const A=f();w.__bindingPointIndex=A;const S=n.createBuffer(),b=w.__size,y=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const A=r[w.id],S=w.uniforms,b=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let y=0,E=S.length;y<E;y++){const P=Array.isArray(S[y])?S[y]:[S[y]];for(let M=0,T=P.length;M<T;M++){const D=P[M];if(g(D,y,M,b)===!0){const N=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let V=0;V<k.length;V++){const Y=k[V],Z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,N+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(w,A,S,b){const y=w.value,E=A+"_"+S;if(b[E]===void 0)return typeof y=="number"||typeof y=="boolean"?b[E]=y:b[E]=y.clone(),!0;{const P=b[E];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return b[E]=y,!0}else if(P.equals(y)===!1)return P.copy(y),!0}return!1}function h(w){const A=w.uniforms;let S=0;const b=16;for(let E=0,P=A.length;E<P;E++){const M=Array.isArray(A[E])?A[E]:[A[E]];for(let T=0,D=M.length;T<D;T++){const N=M[T],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,V=k.length;X<V;X++){const Y=k[X],Z=_(Y),B=S%b,oe=B%Z.boundary,ue=B+oe;S+=oe,ue!==0&&b-ue<Z.storage&&(S+=b-ue),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Z.storage}}}const y=S%b;return y>0&&(S+=b-y),w.__size=S,w.__cache={},this}function _(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function p(w){const A=w.target;A.removeEventListener("dispose",p);const S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class T_{constructor(e={}){const{canvas:t=Jf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const h=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let b=!1;this._outputColorSpace=$t;let y=0,E=0,P=null,M=-1,T=null;const D=new rt,N=new rt;let k=null;const X=new Be(0);let V=0,Y=t.width,Z=t.height,B=1,oe=null,ue=null;const Ee=new rt(0,0,Y,Z),Ge=new rt(0,0,Y,Z);let nt=!1;const ot=new Hu;let Ke=!1,q=!1;const j=new dt,pe=new I,Ie=new rt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function wt(){return P===null?B:1}let C=i;function at(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const U="webgl2";if(C=at(U,x),C===null)throw at(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,De,_e,lt,ve,Oe,Tt,pt,R,v,F,W,$,G,Te,ne,xe,Se,ee,ce,Pe,Me,ae,Fe;function L(){He=new Lg(C),He.init(),Me=new p_(C,He),De=new bg(C,He,e,Me),_e=new f_(C,He),De.reversedDepthBuffer&&m&&_e.buffers.depth.setReversed(!0),lt=new Hg(C),ve=new Q0,Oe=new d_(C,He,_e,ve,De,Me,lt),Tt=new Rg(S),pt=new Dg(S),R=new Bd(C),ae=new yg(C,R),v=new Ig(C,R,lt,ae),F=new Fg(C,v,R,lt),ee=new Ng(C,De,Oe),ne=new Ag(ve),W=new J0(S,Tt,pt,He,De,ae,ne),$=new S_(S,ve),G=new t_,Te=new a_(He),Se=new Tg(S,Tt,pt,_e,F,g,l),xe=new u_(S,F,De),Fe=new M_(C,lt,De,_e),ce=new Eg(C,He,lt),Pe=new Ug(C,He,lt),lt.programs=W.programs,S.capabilities=De,S.extensions=He,S.properties=ve,S.renderLists=G,S.shadowMap=xe,S.state=_e,S.info=lt}L();const te=new v_(S,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(x){x!==void 0&&(B=x,this.setSize(Y,Z,!1))},this.getSize=function(x){return x.set(Y,Z)},this.setSize=function(x,U,z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,Z=U,t.width=Math.floor(x*B),t.height=Math.floor(U*B),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Y*B,Z*B).floor()},this.setDrawingBufferSize=function(x,U,z){Y=x,Z=U,B=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(Ee)},this.setViewport=function(x,U,z,O){x.isVector4?Ee.set(x.x,x.y,x.z,x.w):Ee.set(x,U,z,O),_e.viewport(D.copy(Ee).multiplyScalar(B).round())},this.getScissor=function(x){return x.copy(Ge)},this.setScissor=function(x,U,z,O){x.isVector4?Ge.set(x.x,x.y,x.z,x.w):Ge.set(x,U,z,O),_e.scissor(N.copy(Ge).multiplyScalar(B).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(x){_e.setScissorTest(nt=x)},this.setOpaqueSort=function(x){oe=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,z=!0){let O=0;if(x){let H=!1;if(P!==null){const Q=P.texture.format;H=Q===al||Q===ol||Q===sl}if(H){const Q=P.texture.type,le=Q===gn||Q===Si||Q===Rr||Q===wr||Q===il||Q===rl,me=Se.getClearColor(),he=Se.getClearAlpha(),Ce=me.r,Le=me.g,be=me.b;le?(h[0]=Ce,h[1]=Le,h[2]=be,h[3]=he,C.clearBufferuiv(C.COLOR,0,h)):(_[0]=Ce,_[1]=Le,_[2]=be,_[3]=he,C.clearBufferiv(C.COLOR,0,_))}else O|=C.COLOR_BUFFER_BIT}U&&(O|=C.DEPTH_BUFFER_BIT),z&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Se.dispose(),G.dispose(),Te.dispose(),ve.dispose(),Tt.dispose(),pt.dispose(),F.dispose(),ae.dispose(),Fe.dispose(),W.dispose(),te.dispose(),te.removeEventListener("sessionstart",_n),te.removeEventListener("sessionend",Rl),ri.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const x=lt.autoReset,U=xe.enabled,z=xe.autoUpdate,O=xe.needsUpdate,H=xe.type;L(),lt.autoReset=x,xe.enabled=U,xe.autoUpdate=z,xe.needsUpdate=O,xe.type=H}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function K(x){const U=x.target;U.removeEventListener("dispose",K),ge(U)}function ge(x){Ue(x),ve.remove(x)}function Ue(x){const U=ve.get(x).programs;U!==void 0&&(U.forEach(function(z){W.releaseProgram(z)}),x.isShaderMaterial&&W.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,O,H,Q){U===null&&(U=ye);const le=H.isMesh&&H.matrixWorld.determinant()<0,me=kh(x,U,z,O,H);_e.setMaterial(O,le);let he=z.index,Ce=1;if(O.wireframe===!0){if(he=v.getWireframeAttribute(z),he===void 0)return;Ce=2}const Le=z.drawRange,be=z.attributes.position;let Ve=Le.start*Ce,je=(Le.start+Le.count)*Ce;Q!==null&&(Ve=Math.max(Ve,Q.start*Ce),je=Math.min(je,(Q.start+Q.count)*Ce)),he!==null?(Ve=Math.max(Ve,0),je=Math.min(je,he.count)):be!=null&&(Ve=Math.max(Ve,0),je=Math.min(je,be.count));const ft=je-Ve;if(ft<0||ft===1/0)return;ae.setup(H,O,me,z,he);let st,et=ce;if(he!==null&&(st=R.get(he),et=Pe,et.setIndex(st)),H.isMesh)O.wireframe===!0?(_e.setLineWidth(O.wireframeLinewidth*wt()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(H.isLine){let Re=O.linewidth;Re===void 0&&(Re=1),_e.setLineWidth(Re*wt()),H.isLineSegments?et.setMode(C.LINES):H.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else H.isPoints?et.setMode(C.POINTS):H.isSprite&&et.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Re=H._multiDrawStarts,ut=H._multiDrawCounts,Ye=H._multiDrawCount,Wt=he?R.get(he).bytesPerElement:1,Mi=ve.get(O).currentProgram.getUniforms();for(let Xt=0;Xt<Ye;Xt++)Mi.setValue(C,"_gl_DrawID",Xt),et.render(Re[Xt]/Wt,ut[Xt])}else if(H.isInstancedMesh)et.renderInstances(Ve,ft,H.count);else if(z.isInstancedBufferGeometry){const Re=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ut=Math.min(z.instanceCount,Re);et.renderInstances(Ve,ft,ut)}else et.render(Ve,ft)};function it(x,U,z){x.transparent===!0&&x.side===fn&&x.forceSinglePass===!1?(x.side=Vt,x.needsUpdate=!0,zr(x,U,z),x.side=ni,x.needsUpdate=!0,zr(x,U,z),x.side=fn):zr(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),d=Te.get(z),d.init(U),A.push(d),z.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),x!==z&&x.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const O=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Q=H.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const me=Q[le];it(me,z,H),O.add(me)}else it(Q,z,H),O.add(Q)}),d=A.pop(),O},this.compileAsync=function(x,U,z=null){const O=this.compile(x,U,z);return new Promise(H=>{function Q(){if(O.forEach(function(le){ve.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){H(x);return}setTimeout(Q,10)}He.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let $e=null;function Rn(x){$e&&$e(x)}function _n(){ri.stop()}function Rl(){ri.start()}const ri=new ku;ri.setAnimationLoop(Rn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(x){$e=x,te.setAnimationLoop(x),x===null?ri.stop():ri.start()},te.addEventListener("sessionstart",_n),te.addEventListener("sessionend",Rl),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,U,P),d=Te.get(x,A.length),d.init(U),A.push(d),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ot.setFromProjectionMatrix(j,bn,U.reversedDepth),q=this.localClippingEnabled,Ke=ne.init(this.clippingPlanes,q),p=G.get(x,w.length),p.init(),w.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&lo(Q,U,-1/0,S.sortObjects)}lo(x,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(oe,ue),Xe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Xe&&Se.addToRenderList(p,x),this.info.render.frame++,Ke===!0&&ne.beginShadows();const z=d.state.shadowsArray;xe.render(z,x,U),Ke===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,H=p.transmissive;if(d.setupLights(),U.isArrayCamera){const Q=U.cameras;if(H.length>0)for(let le=0,me=Q.length;le<me;le++){const he=Q[le];Cl(O,H,x,he)}Xe&&Se.render(x);for(let le=0,me=Q.length;le<me;le++){const he=Q[le];wl(p,x,he,he.viewport)}}else H.length>0&&Cl(O,H,x,U),Xe&&Se.render(x),wl(p,x,U);P!==null&&E===0&&(Oe.updateMultisampleRenderTarget(P),Oe.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(S,x,U),ae.resetDefaultState(),M=-1,T=null,A.pop(),A.length>0?(d=A[A.length-1],Ke===!0&&ne.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function lo(x,U,z,O){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ot.intersectsSprite(x)){O&&Ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(j);const le=F.update(x),me=x.material;me.visible&&p.push(x,le,me,z,Ie.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ot.intersectsObject(x))){const le=F.update(x),me=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ie.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(x.matrixWorld).applyMatrix4(j)),Array.isArray(me)){const he=le.groups;for(let Ce=0,Le=he.length;Ce<Le;Ce++){const be=he[Ce],Ve=me[be.materialIndex];Ve&&Ve.visible&&p.push(x,le,Ve,z,Ie.z,be)}}else me.visible&&p.push(x,le,me,z,Ie.z,null)}}const Q=x.children;for(let le=0,me=Q.length;le<me;le++)lo(Q[le],U,z,O)}function wl(x,U,z,O){const H=x.opaque,Q=x.transmissive,le=x.transparent;d.setupLightsView(z),Ke===!0&&ne.setGlobalState(S.clippingPlanes,z),O&&_e.viewport(D.copy(O)),H.length>0&&Fr(H,U,z),Q.length>0&&Fr(Q,U,z),le.length>0&&Fr(le,U,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Cl(x,U,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new jt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?On:gn,minFilter:_i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const Q=d.state.transmissionRenderTarget[O.id],le=O.viewport||D;Q.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);const me=S.getRenderTarget(),he=S.getActiveCubeFace(),Ce=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(X),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Se.render(z);const Le=S.toneMapping;S.toneMapping=Qn;const be=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),Ke===!0&&ne.setGlobalState(S.clippingPlanes,O),Fr(x,z,O),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let je=0,ft=U.length;je<ft;je++){const st=U[je],et=st.object,Re=st.geometry,ut=st.material,Ye=st.group;if(ut.side===fn&&et.layers.test(O.layers)){const Wt=ut.side;ut.side=Vt,ut.needsUpdate=!0,Pl(et,z,O,Re,ut,Ye),ut.side=Wt,ut.needsUpdate=!0,Ve=!0}}Ve===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}S.setRenderTarget(me,he,Ce),S.setClearColor(X,V),be!==void 0&&(O.viewport=be),S.toneMapping=Le}function Fr(x,U,z){const O=U.isScene===!0?U.overrideMaterial:null;for(let H=0,Q=x.length;H<Q;H++){const le=x[H],me=le.object,he=le.geometry,Ce=le.group;let Le=le.material;Le.allowOverride===!0&&O!==null&&(Le=O),me.layers.test(z.layers)&&Pl(me,U,z,he,Le,Ce)}}function Pl(x,U,z,O,H,Q){x.onBeforeRender(S,U,z,O,H,Q),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(S,U,z,O,x,Q),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,S.renderBufferDirect(z,U,O,H,x,Q),H.side=ni,H.needsUpdate=!0,S.renderBufferDirect(z,U,O,H,x,Q),H.side=fn):S.renderBufferDirect(z,U,O,H,x,Q),x.onAfterRender(S,U,z,O,H,Q)}function zr(x,U,z){U.isScene!==!0&&(U=ye);const O=ve.get(x),H=d.state.lights,Q=d.state.shadowsArray,le=H.state.version,me=W.getParameters(x,H.state,Q,U,z),he=W.getProgramCacheKey(me);let Ce=O.programs;O.environment=x.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(x.isMeshStandardMaterial?pt:Tt).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",K),Ce=new Map,O.programs=Ce);let Le=Ce.get(he);if(Le!==void 0){if(O.currentProgram===Le&&O.lightsStateVersion===le)return Ll(x,me),Le}else me.uniforms=W.getUniforms(x),x.onBeforeCompile(me,S),Le=W.acquireProgram(me,he),Ce.set(he,Le),O.uniforms=me.uniforms;const be=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=ne.uniform),Ll(x,me),O.needsLights=Gh(x),O.lightsStateVersion=le,O.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.directionalShadowMap.value=H.state.directionalShadowMap,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotShadowMap.value=H.state.spotShadowMap,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMap.value=H.state.pointShadowMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),O.currentProgram=Le,O.uniformsList=null,Le}function Dl(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Ls.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Ll(x,U){const z=ve.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function kh(x,U,z,O,H){U.isScene!==!0&&(U=ye),Oe.resetTextureUnits();const Q=U.fog,le=O.isMeshStandardMaterial?U.environment:null,me=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qi,he=(O.isMeshStandardMaterial?pt:Tt).get(O.envMap||le),Ce=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,je=!!z.morphAttributes.color;let ft=Qn;O.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ft=S.toneMapping);const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=st!==void 0?st.length:0,Re=ve.get(O),ut=d.state.lights;if(Ke===!0&&(q===!0||x!==T)){const It=x===T&&O.id===M;ne.setState(O,x,It)}let Ye=!1;O.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ut.state.version||Re.outputColorSpace!==me||H.isBatchedMesh&&Re.batching===!1||!H.isBatchedMesh&&Re.batching===!0||H.isBatchedMesh&&Re.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Re.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||H.isInstancedMesh&&Re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Re.instancingMorph===!1&&H.morphTexture!==null||Re.envMap!==he||O.fog===!0&&Re.fog!==Q||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ne.numPlanes||Re.numIntersection!==ne.numIntersection)||Re.vertexAlphas!==Ce||Re.vertexTangents!==Le||Re.morphTargets!==be||Re.morphNormals!==Ve||Re.morphColors!==je||Re.toneMapping!==ft||Re.morphTargetsCount!==et)&&(Ye=!0):(Ye=!0,Re.__version=O.version);let Wt=Re.currentProgram;Ye===!0&&(Wt=zr(O,U,H));let Mi=!1,Xt=!1,cr=!1;const ht=Wt.getUniforms(),Qt=Re.uniforms;if(_e.useProgram(Wt.program)&&(Mi=!0,Xt=!0,cr=!0),O.id!==M&&(M=O.id,Xt=!0),Mi||T!==x){_e.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(C,"projectionMatrix",x.projectionMatrix),ht.setValue(C,"viewMatrix",x.matrixWorldInverse);const kt=ht.map.cameraPosition;kt!==void 0&&kt.setValue(C,pe.setFromMatrixPosition(x.matrixWorld)),De.logarithmicDepthBuffer&&ht.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ht.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),T!==x&&(T=x,Xt=!0,cr=!0)}if(H.isSkinnedMesh){ht.setOptional(C,H,"bindMatrix"),ht.setOptional(C,H,"bindMatrixInverse");const It=H.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ht.setValue(C,"boneTexture",It.boneTexture,Oe))}H.isBatchedMesh&&(ht.setOptional(C,H,"batchingTexture"),ht.setValue(C,"batchingTexture",H._matricesTexture,Oe),ht.setOptional(C,H,"batchingIdTexture"),ht.setValue(C,"batchingIdTexture",H._indirectTexture,Oe),ht.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(C,"batchingColorTexture",H._colorsTexture,Oe));const en=z.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ee.update(H,z,Wt),(Xt||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,ht.setValue(C,"receiveShadow",H.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Qt.envMap.value=he,Qt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Xt&&(ht.setValue(C,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&Bh(Qt,cr),Q&&O.fog===!0&&$.refreshFogUniforms(Qt,Q),$.refreshMaterialUniforms(Qt,O,B,Z,d.state.transmissionRenderTarget[x.id]),Ls.upload(C,Dl(Re),Qt,Oe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ls.upload(C,Dl(Re),Qt,Oe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ht.setValue(C,"center",H.center),ht.setValue(C,"modelViewMatrix",H.modelViewMatrix),ht.setValue(C,"normalMatrix",H.normalMatrix),ht.setValue(C,"modelMatrix",H.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const It=O.uniformsGroups;for(let kt=0,co=It.length;kt<co;kt++){const si=It[kt];Fe.update(si,Wt),Fe.bind(si,Wt)}}return Wt}function Bh(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Gh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,U,z){const O=ve.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ve.get(x.texture).__webglTexture=U,ve.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const z=ve.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Vh=C.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){P=x,y=U,E=z;let O=!0,H=null,Q=!1,le=!1;if(x){const he=ve.get(x);if(he.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(C.FRAMEBUFFER,null),O=!1;else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(he.__hasExternalTextures)Oe.rebindTextures(x,ve.get(x.texture).__webglTexture,ve.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(he.__boundDepthTexture!==be){if(be!==null&&ve.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}const Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Le=ve.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?H=Le[U][z]:H=Le[U],Q=!0):x.samples>0&&Oe.useMultisampledRTT(x)===!1?H=ve.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[z]:H=Le,D.copy(x.viewport),N.copy(x.scissor),k=x.scissorTest}else D.copy(Ee).multiplyScalar(B).floor(),N.copy(Ge).multiplyScalar(B).floor(),k=nt;if(z!==0&&(H=Vh),_e.bindFramebuffer(C.FRAMEBUFFER,H)&&O&&_e.drawBuffers(x,H),_e.viewport(D),_e.scissor(N),_e.setScissorTest(k),Q){const he=ve.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,z)}else if(le){const he=U;for(let Ce=0;Ce<x.textures.length;Ce++){const Le=ve.get(x.textures[Ce]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,z,he)}}else if(x!==null&&z!==0){const he=ve.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,he.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(x,U,z,O,H,Q,le,me=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he){_e.bindFramebuffer(C.FRAMEBUFFER,he);try{const Ce=x.textures[me],Le=Ce.format,be=Ce.type;if(!De.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-O&&z>=0&&z<=x.height-H&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(U,z,O,H,Me.convert(Le),Me.convert(be),Q))}finally{const Ce=P!==null?ve.get(P).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,O,H,Q,le,me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he)if(U>=0&&U<=x.width-O&&z>=0&&z<=x.height-H){_e.bindFramebuffer(C.FRAMEBUFFER,he);const Ce=x.textures[me],Le=Ce.format,be=Ce.type;if(!De.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(U,z,O,H,Me.convert(Le),Me.convert(be),0);const je=P!==null?ve.get(P).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,je);const ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qf(C,ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Ve),C.deleteSync(ft),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,z=0){const O=Math.pow(2,-z),H=Math.floor(x.image.width*O),Q=Math.floor(x.image.height*O),le=U!==null?U.x:0,me=U!==null?U.y:0;Oe.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,le,me,H,Q),_e.unbindTexture()};const Wh=C.createFramebuffer(),Xh=C.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,O=null,H=0,Q=null){Q===null&&(H!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=H,H=0):Q=0);let le,me,he,Ce,Le,be,Ve,je,ft;const st=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(z!==null)le=z.max.x-z.min.x,me=z.max.y-z.min.y,he=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Le=z.min.y,be=z.isBox3?z.min.z:0;else{const en=Math.pow(2,-H);le=Math.floor(st.width*en),me=Math.floor(st.height*en),x.isDataArrayTexture?he=st.depth:x.isData3DTexture?he=Math.floor(st.depth*en):he=1,Ce=0,Le=0,be=0}O!==null?(Ve=O.x,je=O.y,ft=O.z):(Ve=0,je=0,ft=0);const et=Me.convert(U.format),Re=Me.convert(U.type);let ut;U.isData3DTexture?(Oe.setTexture3D(U,0),ut=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),ut=C.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),ut=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ye=C.getParameter(C.UNPACK_ROW_LENGTH),Wt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Mi=C.getParameter(C.UNPACK_SKIP_PIXELS),Xt=C.getParameter(C.UNPACK_SKIP_ROWS),cr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,be);const ht=x.isDataArrayTexture||x.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const en=ve.get(x),It=ve.get(U),kt=ve.get(en.__renderTarget),co=ve.get(It.__renderTarget);_e.bindFramebuffer(C.READ_FRAMEBUFFER,kt.__webglFramebuffer),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let si=0;si<he;si++)ht&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(x).__webglTexture,H,be+si),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(U).__webglTexture,Q,ft+si)),C.blitFramebuffer(Ce,Le,le,me,Ve,je,le,me,C.DEPTH_BUFFER_BIT,C.NEAREST);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||ve.has(x)){const en=ve.get(x),It=ve.get(U);_e.bindFramebuffer(C.READ_FRAMEBUFFER,Wh),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xh);for(let kt=0;kt<he;kt++)ht?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,en.__webglTexture,H,be+kt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,en.__webglTexture,H),Qt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,Q,ft+kt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,It.__webglTexture,Q),H!==0?C.blitFramebuffer(Ce,Le,le,me,Ve,je,le,me,C.COLOR_BUFFER_BIT,C.NEAREST):Qt?C.copyTexSubImage3D(ut,Q,Ve,je,ft+kt,Ce,Le,le,me):C.copyTexSubImage2D(ut,Q,Ve,je,Ce,Le,le,me);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Qt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(ut,Q,Ve,je,ft,le,me,he,et,Re,st.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ut,Q,Ve,je,ft,le,me,he,et,st.data):C.texSubImage3D(ut,Q,Ve,je,ft,le,me,he,et,Re,st):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Ve,je,le,me,et,Re,st.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Ve,je,st.width,st.height,et,st.data):C.texSubImage2D(C.TEXTURE_2D,Q,Ve,je,le,me,et,Re,st);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Wt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Mi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,cr),Q===0&&U.generateMipmaps&&C.generateMipmap(ut),_e.unbindTexture()},this.initRenderTarget=function(x){ve.get(x).__webglFramebuffer===void 0&&Oe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),_e.unbindTexture()},this.resetState=function(){y=0,E=0,P=null,_e.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Fc=new ii,fs=new I;class ml extends Id{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new tt(e,3)),this.setAttribute("uv",new tt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Va(t,6,1);return this.setAttribute("instanceStart",new An(i,3,0)),this.setAttribute("instanceEnd",new An(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Va(t,6,1);return this.setAttribute("instanceColorStart",new An(i,3,0)),this.setAttribute("instanceColorEnd",new An(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Pd(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Fc.setFromBufferAttribute(t),this.boundingBox.union(Fc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)fs.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fs)),fs.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(fs));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Bt.line={uniforms:tr.merge([re.common,re.fog,re.line]),vertexShader:`
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
		`};class Xu extends Nt{constructor(e){super({type:"LineMaterial",uniforms:tr.clone(Bt.line.uniforms),vertexShader:Bt.line.vertexShader,fragmentShader:Bt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Vo=new rt,zc=new I,Oc=new I,Et=new rt,bt=new rt,vn=new rt,Wo=new I,Xo=new dt,At=new zd,kc=new I,ds=new ii,ps=new sr,xn=new rt;let Tn,xi;function Bc(n,e,t){return xn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),xn.multiplyScalar(1/xn.w),xn.x=xi/t.width,xn.y=xi/t.height,xn.applyMatrix4(n.projectionMatrixInverse),xn.multiplyScalar(1/xn.w),Math.abs(Math.max(xn.x,xn.y))}function y_(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,l=a;o<l;o++){At.start.fromBufferAttribute(r,o),At.end.fromBufferAttribute(s,o),At.applyMatrix4(t);const c=new I,u=new I;Tn.distanceSqToSegment(At.start,At.end,u,c),u.distanceTo(c)<xi*.5&&e.push({point:u,pointOnLine:c,distance:Tn.origin.distanceTo(u),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function E_(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),f=-e.near;Tn.at(1,vn),vn.w=1,vn.applyMatrix4(e.matrixWorldInverse),vn.applyMatrix4(i),vn.multiplyScalar(1/vn.w),vn.x*=s.x/2,vn.y*=s.y/2,vn.z=0,Wo.copy(vn),Xo.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,g=u;m<g;m++){if(Et.fromBufferAttribute(l,m),bt.fromBufferAttribute(c,m),Et.w=1,bt.w=1,Et.applyMatrix4(Xo),bt.applyMatrix4(Xo),Et.z>f&&bt.z>f)continue;if(Et.z>f){const A=Et.z-bt.z,S=(Et.z-f)/A;Et.lerp(bt,S)}else if(bt.z>f){const A=bt.z-Et.z,S=(bt.z-f)/A;bt.lerp(Et,S)}Et.applyMatrix4(i),bt.applyMatrix4(i),Et.multiplyScalar(1/Et.w),bt.multiplyScalar(1/bt.w),Et.x*=s.x/2,Et.y*=s.y/2,bt.x*=s.x/2,bt.y*=s.y/2,At.start.copy(Et),At.start.z=0,At.end.copy(bt),At.end.z=0;const _=At.closestPointToPointParameter(Wo,!0);At.at(_,kc);const p=jf.lerp(Et.z,bt.z,_),d=p>=-1&&p<=1,w=Wo.distanceTo(kc)<xi*.5;if(d&&w){At.start.fromBufferAttribute(l,m),At.end.fromBufferAttribute(c,m),At.start.applyMatrix4(a),At.end.applyMatrix4(a);const A=new I,S=new I;Tn.distanceSqToSegment(At.start,At.end,S,A),t.push({point:S,pointOnLine:A,distance:Tn.origin.distanceTo(S),object:n,face:null,faceIndex:m,uv:null,uv1:null})}}}class Yu extends Gt{constructor(e=new ml,t=new Xu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)zc.fromBufferAttribute(t,a),Oc.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+zc.distanceTo(Oc);const s=new Va(r,2,1);return e.setAttribute("instanceDistanceStart",new An(s,1,0)),e.setAttribute("instanceDistanceEnd",new An(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Tn=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;xi=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),ps.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=xi*.5;else{const f=Math.max(r.near,ps.distanceToPoint(Tn.origin));c=Bc(r,f,l.resolution)}if(ps.radius+=c,Tn.intersectsSphere(ps)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ds.copy(o.boundingBox).applyMatrix4(a);let u;if(i)u=xi*.5;else{const f=Math.max(r.near,ds.distanceToPoint(Tn.origin));u=Bc(r,f,l.resolution)}ds.expandByScalar(u),Tn.intersectsBox(ds)!==!1&&(i?y_(this,t):E_(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Vo),this.material.uniforms.resolution.value.set(Vo.z,Vo.w))}}const qu=[];function zt(n,e,t={}){const i=new Xu({color:n,linewidth:e,transparent:t.transparent??!1,opacity:t.opacity??1,fog:t.fog??!0,depthWrite:!1});return qu.push(i),i}function Ku(n){return n.attributes.position.array}function Is(n,e){const t=new ml,i=Ku(n);i.length<6?t.setPositions([0,0,0,0,0,0]):t.setPositions(i);const r=new Yu(t,e);return r.frustumCulled=!1,r.visible=i.length>=6,r}function Gn(n,e){const t=new ml;t.setPositions(n);const i=new Yu(t,e);return i.frustumCulled=!1,i}function $u(n,e){const t=Ku(e);if(t.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(t)}function ms(n,e){if(e.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(e)}function Zu(n,e){for(const t of qu)t.resolution.set(n,e)}function b_(n){let e=n>>>0;const t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:t,int:(i,r)=>i+Math.floor(t()*(r-i+1)),state:()=>e}}const We=.3,A_={hull:3,tread:2,gun:2,engine:2,core:1,ammo:1,scanner:6},R_={hull:1,tread:1.2,gun:.8,engine:1.5,core:1,ammo:1,scanner:3},w_={H:"hull",T:"tread",G:"gun",E:"engine",C:"core",A:"ammo",S:"scanner"};function C_(n){return{size:n,cells:new Array(n.x*n.y*n.z).fill(null),rev:0}}function gl(n,e,t,i){return e>=0&&t>=0&&i>=0&&e<n.size.x&&t<n.size.y&&i<n.size.z}function _l(n,e,t,i){return e+t*n.size.x+i*n.size.x*n.size.y}function Ot(n,e,t,i){return gl(n,e,t,i)?n.cells[_l(n,e,t,i)]:null}function Xa(n,e,t,i,r){gl(n,e,t,i)&&(n.cells[_l(n,e,t,i)]=r,n.rev++)}function vi(n,e){let t=0;for(const i of n.cells)i&&i.type===e&&t++;return t}function on(n){const e=n.length,t=Math.max(...n.map(s=>s.length)),i=Math.max(...n.map(s=>Math.max(...s.map(a=>a.length)))),r=C_({x:i,y:e,z:t});for(let s=0;s<e;s++)for(let a=0;a<t;a++){const o=n[s][a]??"";for(let l=0;l<i;l++){const c=w_[o[l]??"."];c&&(r.cells[_l(r,l,s,a)]={type:c,hp:A_[c]})}}return r.rev=1,r}const Ya=()=>({throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1,firePressed:!1}),ju=[Array(10).fill("TT.......TT"),["TTHHEEEHHTT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TT.HHHHH.TT","TT..HHH..TT"],["...........",".TTHHHHHTT.",".TTHHHHHTT.",".TTHHCHHTT.",".TTHHCHHTT.",".TTHHHHHTT.",".TT.HHH.TT.",".TT..H..TT.","...........","..........."]],Ju=[[".HHH.","HHHHH","HHGHH",".GGG.",".GGG.",".GGG."],[".....",".HHH.",".HHH.","..G..","..G..","..G.."]],P_=-.09,D_=1.05,L_=1.4,Hn=(n,e,t)=>n<e?e:n>t?t:n;function Qu(n,e){let t=0;for(const s of[n,e])for(const a of s.cells)a&&(t+=R_[a.type]);const i=90/Math.sqrt(t),r=vi(n,"tread");return{mass:t,topSpeed:i,accel:i/2.5,turnRate:1.8*Hn(r/72,.5,1.5),turretSlew:2.2}}function eh(n,e,t,i){const r=on(ju),s=on(Ju);return{id:n,hull:r,turret:s,x:e,z:t,heading:i,speed:0,turretYaw:0,gunPitch:0,stats:Qu(r,s),turretPivot:{x:0,y:r.size.y*We,z:.3},alive:!0,cooldown:0,spawnTick:0,selfDestructTick:null}}const I_=ju,U_=Ju,H_=[Array(14).fill("TT.........TT"),["TTHHEEEEEHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TT.HHHHHHH.TT","TT..HHHHH..TT","TT...HHH...TT"],[".............",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TT.HHHHH.TT.",".TT..HHH..TT.",".TT...H...TT.","............."]],N_=[[".HHHH.","HHHHHH","HHGGHH",".HGGH.",".GGGG.",".GGGG.",".GGGG.",".GGGG.",".GGGG."],["......",".HHHH.",".HGGH.","..GG..","..GG..","..GG..","..GG..","..GG..","..GG.."]];function F_(n,e,t,i,r){const s=on(e==="slow"?I_:H_),a=on(e==="slow"?U_:N_),o=Qu(s,a),l=e==="slow"?.5:1.2;return o.topSpeed*=l,o.accel=o.topSpeed/2.5,o.turretSlew=e==="slow"?.785:2.094,{id:n,hull:s,turret:a,x:t,z:i,heading:r,speed:0,turretYaw:0,gunPitch:0,stats:o,turretPivot:{x:0,y:s.size.y*We,z:.3},alive:!0,cooldown:0,spawnTick:0,selfDestructTick:null}}function th(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading);return[n.x+e[0]*t+e[2]*i,e[1],n.z-e[0]*i+e[2]*t]}function vl(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading),r=e[0]-n.x,s=e[2]-n.z;return[r*t-s*i,e[1],r*i+s*t]}function io(n,e){const t=Math.cos(n.gunPitch),i=Math.sin(n.gunPitch),r=e[1]*t+e[2]*i,s=-e[1]*i+e[2]*t,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),l=e[0]*a+s*o,c=-e[0]*o+s*a;return th(n,[l+n.turretPivot.x,r+n.turretPivot.y,c+n.turretPivot.z])}function nh(n,e){const t=vl(n,e),i=t[0]-n.turretPivot.x,r=t[1]-n.turretPivot.y,s=t[2]-n.turretPivot.z,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),l=i*a-s*o,c=i*o+s*a,u=Math.cos(n.gunPitch),f=Math.sin(n.gunPitch);return[l,r*u-c*f,r*f+c*u]}function ih(n){const e=n.heading+n.turretYaw,t=Math.cos(n.gunPitch);return[t*Math.sin(e),Math.sin(n.gunPitch),t*Math.cos(e)]}function z_(n,e,t,i){const r=Hn(e.throttle,-1,1)*n.stats.topSpeed,s=n.stats.accel*t;n.speed+=Hn(r-n.speed,-s,s),n.heading+=Hn(e.turn,-1,1)*n.stats.turnRate*t,n.x+=Math.sin(n.heading)*n.speed*t,n.z+=Math.cos(n.heading)*n.speed*t;const a=i-1.5;n.x=Hn(n.x,-a,a),n.z=Hn(n.z,-a,a),n.turretYaw+=Hn(e.turretYaw,-1,1)*n.stats.turretSlew*t,n.gunPitch=Hn(n.gunPitch+Hn(e.gunPitch,-1,1)*L_*t,P_,D_)}const O_=[["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],k_=[["HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH"],["",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",""],["","","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","",""],["","","","...HHH...","...HHH...","...HHH...","","",""],["","","","","....H....","","","",""]];function Gc(n){return on(n==="cube"?O_:k_)}const rh=[{kind:"cube",x:24,z:30},{kind:"cube",x:-38,z:12},{kind:"cube",x:60,z:-45},{kind:"cube",x:-70,z:-60},{kind:"cube",x:10,z:-90},{kind:"cube",x:95,z:70},{kind:"cube",x:-110,z:85},{kind:"pyramid",x:-15,z:55},{kind:"pyramid",x:45,z:80},{kind:"pyramid",x:-60,z:-20},{kind:"pyramid",x:80,z:-10},{kind:"pyramid",x:-95,z:-105},{kind:"pyramid",x:130,z:20}],B_=[["HHHHHHHHHH"],["HHHHHHHHHH"],["HHHHHHHHHH"]],G_=[["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],V_=[["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"]],W_=[["HHHH","HAAH","HAAH","HHHH"],["HHHH","HAAH","HAAH","HHHH"]],X_=[["HH.","HHH",".HH"],["HH.",".H.","..."]],Y_=[["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG"],["..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG.."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."]],q_=[["H"],["H"],["H"],["G"]];function K_(n){switch(n){case"wall":return on(B_);case"bunker":return on(G_);case"tower":return on(V_);case"depot":return on(W_);case"rocks":return on(X_);case"scan":return on(Y_);case"pylon":return on(q_);case"cube":return Gc("cube");case"pyramid":return Gc("pyramid")}}function rn(n,e,t,i){return{id:n,kind:e,grid:K_(e),x:t,z:i}}[rn(100,"wall",-20,-35),rn(101,"wall",35,55),rn(102,"bunker",-55,40),rn(103,"tower",70,-70),rn(104,"depot",15,-55),rn(105,"scan",-40,-80),rn(106,"pylon",-6,70),rn(107,"pylon",6,70),...rh.map((n,e)=>rn(200+e,n.kind,n.x,n.z))];function sh(n,e){const t=[];for(let i=0;i<n.size.z;i++)for(let r=0;r<n.size.y;r++)for(let s=0;s<n.size.x;s++){const a=Ot(n,s,r,i);if(!a)continue;(e==="hull"?a.type==="core":e==="turret"?a.type==="gun":r===0)&&t.push([s,r,i])}return t}const $_=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Us(n,e){if(e.length===0){const s=[];for(let a=0;a<n.size.z;a++)for(let o=0;o<n.size.y;o++)for(let l=0;l<n.size.x;l++)Ot(n,l,o,a)&&s.push([l,o,a]);for(const a of s)Xa(n,a[0],a[1],a[2],null);return s}const t=new Set,i=[...e];for(const s of e)t.add(s.join(","));for(;i.length;){const s=i.pop();for(const a of $_){const o=s[0]+a[0],l=s[1]+a[1],c=s[2]+a[2],u=`${o},${l},${c}`;t.has(u)||!Ot(n,o,l,c)||(t.add(u),i.push([o,l,c]))}}const r=[];for(let s=0;s<n.size.z;s++)for(let a=0;a<n.size.y;a++)for(let o=0;o<n.size.x;o++)Ot(n,o,a,s)&&!t.has(`${o},${a},${s}`)&&r.push([o,a,s]);for(const s of r)Xa(n,s[0],s[1],s[2],null);return r}function Ys(n,e,t,i){const r=We,s=[e[0]/r+n.size.x/2,e[1]/r,e[2]/r+n.size.z/2],a=[t[0]/r,t[1]/r,t[2]/r];if(a[0]===0&&a[1]===0&&a[2]===0)return[];const o=[Math.floor(s[0]),Math.floor(s[1]),Math.floor(s[2])],l=[a[0]>0?1:a[0]<0?-1:0,a[1]>0?1:a[1]<0?-1:0,a[2]>0?1:a[2]<0?-1:0],c=[a[0]!==0?Math.abs(1/a[0]):1/0,a[1]!==0?Math.abs(1/a[1]):1/0,a[2]!==0?Math.abs(1/a[2]):1/0],u=[0,1,2].map(g=>a[g]===0?1/0:((l[g]>0?o[g]+1:o[g])-s[g])/a[g]),f=[];let m=0;for(let g=0;g<1024&&!(m>i);g++){gl(n,o[0],o[1],o[2])&&Ot(n,o[0],o[1],o[2])&&f.push({cell:[o[0],o[1],o[2]],t:m});const h=u[0]<=u[1]?u[0]<=u[2]?0:2:u[1]<=u[2]?1:2;m=u[h],o[h]+=l[h],u[h]+=c[h]}return f}const oh=120,ah=.9,Z_=6,j_=1,J_=2.5,Q_=3,lh=400,ev=72,ro=36e3,ch=7200,tv=45,nv={hull:2,tread:2,gun:1.5,engine:2,core:3,ammo:1,scanner:5},uh=7,iv=6,rv=6,sv=2400,ov=600,av=4.5,lv=6,hh=180,cv=30,fh=150,uv=300,qa=180,hv=120;function Hs(n,e){return e.alive&&n.tick-e.spawnTick>=hv}function xl(n,e,t){let i=n.incomingFire.get(e);i||(i=new Map,n.incomingFire.set(e,i)),i.set(t,n.tick)}function dh(n,e,t=qa){const i=n.incomingFire.get(e);return i?[...i.entries()].filter(([,r])=>n.tick-r<=t).map(([r])=>r):[]}function so(n,e,t){const i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],r=Math.hypot(i[0],i[1],i[2]);if(r<1e-6)return!0;const s=[i[0]/r,i[1]/r,i[2]/r];for(const a of n.structures){if(a.grid.cells.every(l=>!l))continue;const o=[e[0]-a.x,e[1],e[2]-a.z];if(Ys(a.grid,o,s,r).length)return!1}return!0}function fv(n,e,t,i,r){let s=i,a="max";if(t[1]<-1e-6){const o=-e[1]/t[1];o>=0&&o<s&&(s=o,a="ground")}for(const o of n.structures){if(o.grid.cells.every(u=>!u))continue;const l=[e[0]-o.x,e[1],e[2]-o.z],c=Ys(o.grid,l,t,s);c.length&&c[0].t<s&&(s=c[0].t,a="grid")}for(const o of n.tanks)if(!(!o.alive||o.id===r))for(const l of["hull","turret"]){const c=l==="hull"?o.hull:o.turret,u=l==="hull"?vl:nh,f=u(o,e),m=dv(u(o,[e[0]+t[0],e[1]+t[1],e[2]+t[2]]),f),g=Ys(c,f,m,s);g.length&&g[0].t<s&&(s=g[0].t,a="grid")}return{pos:[e[0]+t[0]*s,e[1]+t[1]*s,e[2]+t[2]*s],hit:a}}const dv=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]];function gs(n,e,t,i){let r=n.awareness.get(e.id);r||(r=new Map,n.awareness.set(e.id,r)),r.set(t.id,{x:t.x,z:t.z,heading:t.heading,turretYaw:t.turretYaw,tick:n.tick,source:i})}function pv(n){for(const[i,r]of n.incomingFire){for(const[s,a]of r)n.tick-a>qa&&r.delete(s);r.size||n.incomingFire.delete(i)}const e=n.tanks.filter(i=>i.alive),t=n.tick%6===0;for(const i of e){let r=n.awareness.get(i.id);r||(r=new Map,n.awareness.set(i.id,r));for(const[s,a]of r){const o=a.source==="gunfire"||a.source==="ping"?qa:uv;n.tick-a.tick>o&&r.delete(s)}if(!(n.stormUntil>n.tick))for(const s of n.tanks){if(s.id===i.id||!Hs(n,s))continue;const a=Math.hypot(s.x-i.x,s.z-i.z);a<=cv?gs(n,i,s,"proximity"):t&&a<=fh&&so(n,[i.x,1.2,i.z],[s.x,1.2,s.z])&&gs(n,i,s,"los")}}for(const i of n.events)if(i.kind==="fire"){const r=n.tanks.find(s=>s.id===i.owner);if(!r||!Hs(n,r))continue;for(const s of e){if(s.id===r.id)continue;gs(n,s,r,"gunfire");const a=[s.x-i.pos[0],1.2-i.pos[1],s.z-i.pos[2]],o=Math.max(0,Math.min(120,a[0]*i.dir[0]+a[1]*i.dir[1]+a[2]*i.dir[2]));Math.hypot(a[0]-i.dir[0]*o,a[1]-i.dir[1]*o,a[2]-i.dir[2]*o)<3.5&&(n.threats.set(s.id,{tick:n.tick,from:r.id}),xl(n,s.id,r.id))}}else if(i.kind==="scanPing")for(const r of e)for(const s of n.tanks)s.id!==r.id&&Hs(n,s)&&gs(n,r,s,"ping")}const Ir={slow:{speedMul:.5,slew:.785,thinkTicks:24,err:.105,cooldown:[2.5,3.5],range:[60,100],turretShotChance:.1},super:{speedMul:1.2,slew:2.094,thinkTicks:15,err:.035,cooldown:[1.4,2],range:[40,80],turretShotChance:.15}};function mv(n,e=!1){return{kind:n,mode:"patrol",targetId:null,playerTracker:e,aim:null,aimY:.45,patrolGoal:null,investigateGoal:null,searchCenter:null,searchUntilTick:0,coverGoal:null,coverStructureId:null,nextCoverSeekTick:0,orbitAngle:null,orbitDirection:1,nextOrbitTick:0,fleeGoal:null,nextFleeSeekTick:0,avoidGoal:null,reposition:null,nextThink:0,lastTargetSwitchTick:-9999,stuckTicks:0,lastThrottle:0,lastShotTick:-9999,shotsAtContact:0,lastX:0,lastZ:0,debug:{intent:null,los:!1,err:0,evading:!1,outnumbered:!1}}}const mt=(n,e,t)=>n<e?e:n>t?t:n,_s=(n,e)=>Math.atan2(e.x-n.x,e.z-n.z),Yo=n=>{for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n},xt=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function gv(n,e,t){const i=n.awareness.get(e.id);if(!i)return null;const r=[];for(const[u,f]of i){const m=n.tanks.find(h=>h.id===u);if(!m||!Hs(n,m))continue;const g=xt(e,m)<=fh&&so(n,[e.x,1.2,e.z],[m.x,1.2,m.z]);r.push({id:u,k:f,target:m,visual:g,distance:g?xt(e,m):xt(e,f)})}const s=r.find(u=>u.id===t.targetId),a=r.filter(u=>u.visual),o=n.threats.get(e.id);if(o&&n.tick-o.tick<360){const u=r.find(f=>f.id===o.from);if(u&&(u.visual||!a.length))return u}const l=new Set(dh(n,e.id));if(l.size>1){t.debug.outnumbered=!0;const u=r.filter(g=>l.has(g.id)),f=u.filter(g=>g.visual);if(s?.visual&&!f.length)return s;if(s?.visual&&f.some(g=>g.id===s.id)){const g=[...f].sort((_,p)=>_.distance-p.distance)[0],h=n.tick-t.lastTargetSwitchTick<60;return!g||h||g.distance+12>=s.distance?s:g}const m=[...f.length?f:u].sort((g,h)=>g.distance-h.distance)[0];if(m)return m}if(t.debug.outnumbered=!1,t.playerTracker){const u=r.find(f=>f.id===0);if(u)return u}return s&&n.tick-t.lastTargetSwitchTick<180?s:r.filter(u=>u.id!==0).sort((u,f)=>f.k.tick-u.k.tick)[0]??r.sort((u,f)=>f.k.tick-u.k.tick)[0]??null}function Ka(n,e){const t=n.rng.next()*Math.PI*2,i=45+n.rng.next()*65;return{x:mt(e.x+Math.sin(t)*i,-190,190),z:mt(e.z+Math.cos(t)*i,-190,190)}}function _v(n,e){const t=n.rng.next()*Math.PI*2,i=18+n.rng.next()*22;return{x:mt(e.x+Math.sin(t)*i,-190,190),z:mt(e.z+Math.cos(t)*i,-190,190)}}function ph(n){const e=n.grid.size.x*We/2+2.2,t=n.grid.size.z*We/2+2.2,i=mt(Math.ceil(n.grid.size.x*We/4),2,4),r=mt(Math.ceil(n.grid.size.z*We/4),2,4),s=[];for(let a=0;a<=i;a++){const o=-e+2*e*a/i;s.push({x:n.x+o,z:n.z-t},{x:n.x+o,z:n.z+t})}for(let a=1;a<r;a++){const o=-t+2*t*a/r;s.push({x:n.x-e,z:n.z+o},{x:n.x+e,z:n.z+o})}return s.map(a=>({x:mt(a.x,-190,190),z:mt(a.z,-190,190)}))}function Sl(n,e,t){return n.structures.some(i=>{if(i.id===t||!i.grid.cells.some(a=>a))return!1;const r=i.grid.size.x*We/2+1.7,s=i.grid.size.z*We/2+1.7;return Math.abs(e.x-i.x)<r&&Math.abs(e.z-i.z)<s})}function $a(n,e,t){return!so(n,[t.x,1.2,t.z],[e.x,.45,e.z])}function vv(n,e,t){if(!t.length)return null;const i=Math.min(...t.map(a=>xt(e,a)));let r=null,s=1/0;for(const a of n.structures)if(!(!a.grid.cells.some(o=>o)||xt(e,a)>70))for(const o of ph(a)){const l=xt(e,o);if(l>60||Sl(n,o,a.id))continue;const c=t.map(g=>xt(g,o)),u=Math.min(...c);if(u<i+3)continue;const f=t.filter(g=>$a(n,o,g)).length;if(!f)continue;const m=l*.55-u*.9-f*8;m<s&&(s=m,r=o)}return r}function xv(n,e,t,i,r){const s=(i[0]+i[1])/2,a=r.length?r:[t];let o=null,l=1/0;for(const c of n.structures)if(!(!c.grid.cells.some(u=>u)||xt(e,c)>55))for(const u of ph(c)){const f=xt(e,u),m=xt(t,u);if(f>45||m<i[0]-15||m>i[1]+15||Sl(n,u,c.id)||!so(n,[u.x,1.2,u.z],[t.x,.45,t.z])||!$a(n,u,t))continue;const g=a.filter(_=>$a(n,u,_)).length,h=f+Math.abs(m-s)*.7-g*4;h<l&&(l=h,o={x:u.x,z:u.z,structureId:c.id})}return o}function Sv(n,e,t){const r=Ir[e.kind].turretShotChance*(t===0?.5:1);e.aimY=n.rng.next()<r?1.2:.45+n.rng.next()*.12}function Vc(n,e,t,i,r){n.aim={x:n.aim?n.aim.x+(e-n.aim.x)*r:e,z:n.aim?n.aim.z+(t-n.aim.z)*r:t,y:i}}function Mv(n,e,t){const i={throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1};if(n.tick<e.nextThink)return vr(n,e,t,i);e.nextThink=n.tick+Ir[e.kind].thinkTicks;const r=xt(t,{x:e.lastX,z:e.lastZ});if(e.stuckTicks=e.lastThrottle>.25&&r<.2?e.stuckTicks+Ir[e.kind].thinkTicks:0,e.lastX=t.x,e.lastZ=t.z,e.stuckTicks>180){e.stuckTicks=0;const f=n.rng.next()*Math.PI*2;let m={x:mt(t.x+Math.sin(f)*30,-190,190),z:mt(t.z+Math.cos(f)*30,-190,190)};for(let g=0;g<6&&Sl(n,m,-1);g++){const h=n.rng.next()*Math.PI*2;m={x:mt(t.x+Math.sin(h)*30,-190,190),z:mt(t.z+Math.cos(h)*30,-190,190)}}e.mode==="engage"?e.avoidGoal=m:(e.mode="reposition",e.reposition=m)}const s=n.tanks.find(f=>f.id===e.targetId);e.targetId!==null&&(!s||!s.alive)&&(e.targetId=null,e.aim=null,e.mode="patrol",e.patrolGoal=null,e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,e.shotsAtContact=0);const a=gv(n,t,e);if(!a)return e.targetId=null,e.aim=null,e.mode="patrol",e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,(!e.patrolGoal||xt(t,e.patrolGoal)<8)&&(e.patrolGoal=Ka(n,t)),e.debug.intent=[e.patrolGoal.x,.8,e.patrolGoal.z],e.debug.los=!1,vr(n,e,t,i);const o=e.targetId!==a.id;o&&(e.lastTargetSwitchTick=n.tick,e.shotsAtContact=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null),e.targetId=a.id;const l=a.target,c=a.k,u=a.visual;if(e.debug.los=u,u){e.mode="engage",e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.reposition=null,(o||e.shotsAtContact===0||e.shotsAtContact%8===0)&&Sv(n,e,l.id);const m=xt(t,l)/oh*(e.kind==="super"?.85:.65),g=l.x+Math.sin(l.heading)*l.speed*m,h=l.z+Math.cos(l.heading)*l.speed*m;return Vc(e,g,h,e.aimY,e.aim?.35:1),e.debug.intent=[g,h,e.aimY],vr(n,e,t,i)}return e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,e.mode!=="investigate"&&e.mode!=="reposition"?(e.mode="investigate",e.searchCenter={x:c.x,z:c.z},e.searchUntilTick=n.tick+480,e.investigateGoal={x:c.x,z:c.z},e.reposition=null):(e.searchCenter={x:c.x,z:c.z},(!e.investigateGoal||xt(t,e.investigateGoal)<6)&&(e.investigateGoal=_v(n,e.searchCenter))),n.tick>e.searchUntilTick?(e.mode="patrol",e.targetId=null,e.aim=null,e.investigateGoal=null,e.searchCenter=null,e.patrolGoal=Ka(n,t),e.debug.intent=[e.patrolGoal.x,.8,e.patrolGoal.z],vr(n,e,t,i)):(Vc(e,e.investigateGoal.x,e.investigateGoal.z,.8,e.aim?.25:1),e.debug.intent=[e.investigateGoal.x,.8,e.investigateGoal.z],vr(n,e,t,i))}function Tv(n,e){const t=n.awareness.get(e.id);return t?dh(n,e.id).map(i=>t.get(i)).filter(i=>!!i).map(i=>({x:i.x,z:i.z})):[]}function vr(n,e,t,i){const r=yv(n,e,t,i);return e.lastThrottle=r.throttle,r}function yv(n,e,t,i){const r=Ir[e.kind],s=n.tanks.find(g=>g.id===e.targetId);e.mode==="engage"&&(!s||!s.alive)&&(e.mode="patrol",e.targetId=null,e.aim=null,e.patrolGoal=null);const a=vi(t.turret,"gun")===0,o=Tv(n,t),l=o.length>1,c=n.threats.get(t.id),u=c!==void 0&&n.tick-c.tick<90;e.debug.outnumbered=l,e.debug.evading=u;let f=null,m=0;if(a)f=e.aim??e.investigateGoal??e.patrolGoal,m=1;else if(e.avoidGoal)f=e.avoidGoal,m=.8,xt(t,f)<3&&(e.avoidGoal=null);else if(l){if(n.tick>=e.nextFleeSeekTick&&(e.fleeGoal=vv(n,t,o),e.nextFleeSeekTick=n.tick+90),e.fleeGoal&&xt(t,e.fleeGoal)<3)f=e.fleeGoal,m=0,n.tick>=e.nextFleeSeekTick&&(e.fleeGoal=null,e.nextFleeSeekTick=n.tick+30);else if(e.fleeGoal)f=e.fleeGoal,m=.85;else{let g=0,h=0;for(const d of o){const w=t.x-d.x,A=t.z-d.z,S=Math.hypot(w,A)||1;g+=w/S,h+=A/S}Math.hypot(g,h)<.2&&s&&(g=t.x-s.x,h=t.z-s.z);const p=Math.hypot(g,h)||1;f={x:mt(t.x+g/p*30,-190,190),z:mt(t.z+h/p*30,-190,190)},m=.85}e.coverGoal=null,e.coverStructureId=null}else if(e.mode==="patrol")e.fleeGoal=null,(!e.patrolGoal||xt(t,e.patrolGoal)<8)&&(e.patrolGoal=Ka(n,t)),f=e.patrolGoal,m=.55;else if(e.mode==="investigate")e.fleeGoal=null,f=e.investigateGoal,m=.7;else if(e.mode==="reposition")e.fleeGoal=null,f=e.reposition,m=.75,f&&xt(t,f)<6&&(e.reposition=null,e.mode=e.targetId?"investigate":"patrol");else if(e.mode==="engage"&&s){e.fleeGoal=null;const g=xt(t,s);if(e.coverStructureId!==null&&!n.structures.some(_=>_.id===e.coverStructureId&&_.grid.cells.some(p=>p))||n.tick>=e.nextCoverSeekTick){const _=xv(n,t,s,r.range,o);e.coverGoal=_?{x:_.x,z:_.z}:null,e.coverStructureId=_?.structureId??null,e.nextCoverSeekTick=n.tick+(u?45:90)}if(e.coverGoal&&xt(t,e.coverGoal)<3)f=e.coverGoal,m=0;else if(u&&e.coverGoal)f=e.coverGoal,m=.7;else if(g>r.range[1])e.coverGoal=null,f=s,m=.65;else if(g<r.range[0]){e.coverGoal=null;const _=Math.atan2(t.x-s.x,t.z-s.z);f={x:mt(t.x+Math.sin(_)*25,-190,190),z:mt(t.z+Math.cos(_)*25,-190,190)},m=.55}else if(e.coverGoal)f=e.coverGoal,m=.45;else{e.orbitAngle===null&&(e.orbitAngle=_s(s,t)),n.tick>=e.nextOrbitTick&&(e.orbitAngle+=e.orbitDirection*.16,e.nextOrbitTick=n.tick+30);const _=(r.range[0]+r.range[1])/2;f={x:mt(s.x+Math.sin(e.orbitAngle)*_,-190,190),z:mt(s.z+Math.cos(e.orbitAngle)*_,-190,190)},m=u?.5:.35}}if(f){const g=Yo(_s(t,f)-t.heading);i.turn=Math.abs(g)<.025?0:mt(g*1.6,-1,1),i.throttle=Math.abs(g)>1.1?Math.min(m,.2):m}if(a)return i;if(e.mode==="patrol")return i.turretYaw=Math.sin(n.tick*.01+t.id)*.35,i;if(e.aim){const g=Yo(_s(t,e.aim)-t.heading),h=Yo(g-t.turretYaw);i.turretYaw=Math.abs(h)<.015?0:mt(h*3,-1,1);const _=Math.hypot(e.aim.x-t.x,e.aim.z-t.z),p=t.turretPivot.y+We,d=Math.atan2(e.aim.y-p,_);if(i.gunPitch=mt((d-t.gunPitch)*3,-1,1),e.mode==="engage"&&e.debug.los&&Math.abs(h)<.1&&_<r.range[1]+40&&t.cooldown===0){const w=1+_/100+(s?s.speed*Math.abs(Math.sin(s.heading-_s(t,s)))/10:0),A=e.shotsAtContact===0?2:1,S=r.err*w*A;e.debug.err=S,t.turretYaw+=(n.rng.next()-.5)*2*S,i.fire=!0,e.shotsAtContact++,e.lastShotTick=n.tick}}return i}function Ev(){return{state:"dormant",untilTick:ro-ch,nextBomb:0,bombsLeft:0}}function bv(n){const e=n.volcano;if(n.sky.volcano&&!(n.tick<ro-ch))if(e.state==="dormant")e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"});else if(e.state==="rumble")n.tick>=e.untilTick&&(e.state="erupt",e.untilTick=n.tick+600,e.bombsLeft=10+Math.floor(n.rng.next()*7),e.nextBomb=n.tick+30,n.events.push({kind:"volcanoErupt"}));else if(e.state==="erupt"){if(e.bombsLeft>0&&n.tick>=e.nextBomb){const t=(n.rng.next()-.5)*320,i=(n.rng.next()-.5)*320;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:uh,kind:"volcano"}),n.events.push({kind:"bombTelegraph",pos:[t,0,i]}),e.bombsLeft--,e.nextBomb=n.tick+45}n.tick>=e.untilTick&&(e.state="cooldown",e.untilTick=n.tick+1200)}else e.state==="cooldown"&&n.tick>=e.untilTick&&(e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"}))}function Av(n,e,t,i="volcano"){if(i==="volcano"){if(n.lavaPools.push({x:e,z:t,radius:rv+n.rng.next()*2,untilTick:n.tick+sv}),n.rng.next()<.35){const r=Math.max(-190,Math.min(190,e+8)),s=Math.max(-190,Math.min(190,t+8));n.structures.push(rn(n.nextId++,"rocks",r,s))}}else{const r=Math.max(-190,Math.min(190,e+3.5)),s=Math.max(-190,Math.min(190,t+3.5));n.structures.push(rn(n.nextId++,"rocks",r,s))}}const br={slow:100,missile:250,super:500,bomber:1e3,block:5},mh=7200,Rv=90,wv=4,Cv=1200,Pv=3e3,Wc=280,vs={player:2,light:1,super:6,bomber:5},Ur=(n,e,t)=>n<e?e:n>t?t:n,oo=n=>{const e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]};function gh(n,e,t){const i=Ur(n[0]*e[0]+n[1]*e[1]+n[2]*e[2],-1,1),r=Math.acos(i);if(r<=t||r<1e-6)return e;const s=t/r;return oo([n[0]+(e[0]-n[0])*s,n[1]+(e[1]-n[1])*s,n[2]+(e[2]-n[2])*s])}function Dv(n){const e=n.tanks[0];for(let i=0;i<24;i++){const r=n.rng.next()*Math.PI*2,s=100+n.rng.next()*40,a=Ur(e.x+Math.sin(r)*s,-190,190),o=Ur(e.z+Math.cos(r)*s,-190,190);let l=!0;for(const c of n.structures){if(!c.grid.cells.some(m=>m))continue;const u=c.grid.size.x*We/2+5,f=c.grid.size.z*We/2+5;if(Math.abs(a-c.x)<u&&Math.abs(o-c.z)<f){l=!1;break}}if(l&&n.tanks.every(c=>!c.alive||Math.hypot(c.x-a,c.z-o)>14))return{x:a,z:o}}const t=n.rng.next()*Math.PI*2;return{x:Math.sin(t)*170,z:Math.cos(t)*170}}function Xc(n,e){const t=Dv(n),i=F_(n.nextId++,e,t.x,t.z,Math.atan2(n.tanks[0].x-t.x,n.tanks[0].z-t.z));i.spawnTick=n.tick,n.tanks.push(i),n.brains.set(i.id,mv(e)),e==="super"&&n.events.push({kind:"superSpawn",pos:[t.x,1,t.z]})}function Lv(n){const e=n.tanks.filter(r=>r.id!==0&&r.alive&&n.brains.has(r.id));if(!e.length||e.filter(r=>n.brains.get(r.id).playerTracker).length===1)return;for(const r of e)n.brains.get(r.id).playerTracker=!1;const i=e.find(r=>n.brains.get(r.id).kind==="slow")??e[0];n.brains.get(i.id).playerTracker=!0}function Iv(n){const e=[];for(const t of n.tanks){if(!t.alive)continue;const i=n.brains.get(t.id)?.kind;e.push({kind:"tank",id:t.id,weight:t.id===0?vs.player:i==="super"?vs.super:vs.light,pos:[t.x,1,t.z]})}return n.bomber?.alive&&e.push({kind:"bomber",id:n.bomber.id,weight:vs.bomber,pos:[...n.bomber.pos]}),e}function Uv(n,e){const t=e.reduce((r,s)=>r+s.weight,0);let i=n.rng.next()*t;for(const r of e)if(i-=r.weight,i<=0)return r;return e[e.length-1]}function Hv(n){const e=Iv(n);if(!e.length)return;const t=e.find(f=>f.kind==="tank"&&f.id===0),i=t&&n.rng.next()<.55?t:Uv(n,e),r=n.rng.next()*Math.PI*2,s=[Math.sin(r)*205,11+n.rng.next()*5,Math.cos(r)*205],a=n.rng.next()<.6,o=14+n.rng.next()*4,l=Math.hypot(i.pos[0]-s[0],i.pos[1]-s[1],i.pos[2]-s[2]),c=Ur(Math.ceil(l/o*60*1.6)+240,Cv,Pv),u=n.nextId++;n.missiles.push({id:u,pos:s,dir:oo([i.pos[0]-s[0],i.pos[1]-s[1],i.pos[2]-s[2]]),speed:o,age:0,maxAge:c,alive:!0,targetKind:i.kind,targetId:i.id,tracking:a,turnRate:a?.45:0,interceptTick:null,interceptorId:null,lastDefenseTick:-9999}),i.kind==="tank"&&i.id===0&&n.events.push({kind:"missileLock",id:u,pos:s})}function Nv(n){if(n.phase==="play"){let e=n.tanks.filter(i=>i.alive&&n.brains.get(i.id)?.kind==="slow").length;for(;e<wv&&n.tick>=n.nextSpawnTick;)Xc(n,"slow"),e++,n.nextSpawnTick=n.tick+90;if(!n.tanks.some(i=>i.alive&&n.brains.get(i.id)?.kind==="super")&&n.tick>=n.nextSuperTick&&(Xc(n,"super"),n.nextSuperTick=n.tick+7200+Math.floor(n.rng.next()*3600)),Lv(n),n.tick>=n.nextMissileTick&&n.missiles.filter(i=>i.alive).length<3&&(Hv(n),n.nextMissileTick=n.tick+1500+Math.floor(n.rng.next()*1800)),!n.bomber&&n.tick>=n.nextBomberTick){const i=n.tanks[0].alive?n.tanks[0]:n.tanks.find(f=>f.alive)??n.tanks[0],r=i.x,s=i.z,o=Math.hypot(r,s)<1e-6?n.rng.next()*Math.PI*2:Math.atan2(r,s),l=[Math.sin(o),0,Math.cos(o)],c=i.x-l[0]*205,u=i.z-l[2]*205;n.bomber={id:n.nextId++,pos:[c,15,u],dir:l,speed:8,hp:3,alive:!0,nextBomb:n.tick+60,targetId:i.id},n.nextBomberTick=n.tick+mh,n.events.push({kind:"bomberInbound",pos:[c,15,u]})}}Bv(n),Gv(n),Vv(n)}function Fv(n,e){if(e.targetKind==="bomber"){const i=n.bomber;return i?.alive&&i.id===e.targetId?[...i.pos]:null}const t=n.tanks.find(i=>i.id===e.targetId);return t?.alive?[t.x,1,t.z]:null}function Yc(n,e,t){const i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],r=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(r<1e-9)return Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]);const s=Ur(((n[0]-e[0])*i[0]+(n[1]-e[1])*i[1]+(n[2]-e[2])*i[2])/r,0,1);return Math.hypot(n[0]-e[0]-i[0]*s,n[1]-e[1]-i[1]*s,n[2]-e[2]-i[2]*s)}function zv(n,e){const t=n.bomber;if(t?.alive&&t.id===e)return[t.pos[0],t.pos[1]-.2,t.pos[2]];const i=n.tanks.find(r=>r.id===e&&r.alive);return i?io(i,[0,We,i.turret.size.z/2*We+.15]):null}function Ov(n,e){if(e.interceptTick!==null||e.targetId===null)return;if(e.targetKind==="bomber"){const i=n.bomber;i?.alive&&i.id===e.targetId&&Math.hypot(i.pos[0]-e.pos[0],i.pos[1]-e.pos[1],i.pos[2]-e.pos[2])<26&&(e.interceptorId=i.id,e.interceptTick=n.tick+24,e.lastDefenseTick=-9999);return}const t=n.tanks.find(i=>i.id===e.targetId&&i.alive);!t||n.brains.get(t.id)?.kind!=="super"||Math.hypot(t.x-e.pos[0],1-e.pos[1],t.z-e.pos[2])<18&&(e.interceptorId=t.id,e.interceptTick=n.tick+30,e.lastDefenseTick=-9999)}function kv(n,e){if(Ov(n,e),e.interceptTick===null||e.interceptorId===null)return;const t=zv(n,e.interceptorId);if(!t){e.interceptTick=null,e.interceptorId=null;return}if(n.tick>=e.interceptTick){e.alive=!1,n.events.push({kind:"kill",id:e.id,what:"missile",by:e.interceptorId}),n.events.push({kind:"explosion",pos:[...e.pos],radius:1.5,damage:0,source:"airburst"});return}if(n.tick-e.lastDefenseTick<3)return;e.lastDefenseTick=n.tick;const i=[e.pos[0]+e.dir[0]*1.5,e.pos[1]+e.dir[1]*1.5,e.pos[2]+e.dir[2]*1.5];n.events.push({kind:"defenseFire",pos:t,dir:oo([i[0]-t[0],i[1]-t[1],i[2]-t[2]]),owner:e.interceptorId,missileId:e.id})}function Bv(n){for(const e of n.missiles){if(!e.alive||(e.age++,kv(n,e),!e.alive))continue;const t=Fv(n,e);if(e.tracking&&t){const a=oo([t[0]-e.pos[0],t[1]-e.pos[1],t[2]-e.pos[2]]);e.dir=gh(e.dir,a,e.turnRate/60)}const i=[...e.pos];e.pos[0]+=e.dir[0]*e.speed/60,e.pos[1]+=e.dir[1]*e.speed/60,e.pos[2]+=e.dir[2]*e.speed/60;for(const a of n.shells)if(Math.hypot(a.pos[0]-e.pos[0],a.pos[1]-e.pos[1],a.pos[2]-e.pos[2])<1.8){e.alive=!1,a.alive=!1,n.events.push({kind:"kill",id:e.id,what:"missile",by:a.owner}),n.events.push({kind:"explosion",pos:[...e.pos],radius:1.5,damage:2,source:"airburst"});break}if(!e.alive)continue;let r=!1;for(const a of n.tanks)if(a.alive&&Yc([a.x,1,a.z],i,e.pos)<2.4){r=!0;break}if(r){e.alive=!1,n.pendingExplosions.push({pos:[e.pos[0],.5,e.pos[2]],radius:3,damage:4,source:"missile"});continue}const s=n.bomber;if(s?.alive&&Yc(s.pos,i,e.pos)<2.8){e.alive=!1,s.alive=!1,n.events.push({kind:"kill",id:s.id,what:"bomber",by:null}),n.events.push({kind:"explosion",pos:[...s.pos],radius:3,damage:0,source:"airburst"});continue}e.pos[1]<=.35?(e.alive=!1,n.pendingExplosions.push({pos:[e.pos[0],.5,e.pos[2]],radius:3,damage:4,source:"missile"})):(e.age>e.maxAge||Math.abs(e.pos[0])>Wc||Math.abs(e.pos[2])>Wc)&&(e.alive=!1)}n.missiles=n.missiles.filter(e=>e.alive)}function Gv(n){const e=n.bomber;if(!e||!e.alive){e&&!e.alive&&(n.bomber=null);return}const t=n.tanks.find(i=>i.id===e.targetId&&i.alive)??n.tanks[0];if(t.alive){const i=[t.x-e.pos[0],0,t.z-e.pos[2]],r=Math.hypot(i[0],i[2])||1;e.dir=gh(e.dir,[i[0]/r,0,i[2]/r],.0025)}if(e.pos[0]+=e.dir[0]*e.speed/60,e.pos[2]+=e.dir[2]*e.speed/60,n.tick>=e.nextBomb){let i=e.pos[0],r=e.pos[2];for(const s of n.tanks)if(s.alive&&Math.hypot(s.x-e.pos[0],s.z-e.pos[2])<4){i=s.x,r=s.z;break}n.telegraphs.push({x:i,z:r,impactTick:n.tick+Rv,radius:2,kind:"bomb"}),n.events.push({kind:"bombTelegraph",pos:[i,0,r]}),e.nextBomb=n.tick+tv}for(const i of n.shells)if(i.pos[1]>10&&Math.abs(i.pos[1]-e.pos[1])<3.5&&Math.hypot(i.pos[0]-e.pos[0],i.pos[2]-e.pos[2])<5.5){e.hp--,i.alive=!1,e.hp<=0&&(e.alive=!1,n.events.push({kind:"kill",id:e.id,what:"bomber",by:i.owner}),n.events.push({kind:"explosion",pos:[e.pos[0],e.pos[1],e.pos[2]],radius:3,damage:0,source:"airburst"}));break}(Math.abs(e.pos[0])>220||Math.abs(e.pos[2])>220)&&(e.alive=!1),e.alive||(n.bomber=null)}function Vv(n){const e=n.telegraphs.filter(t=>n.tick>=t.impactTick);if(e.length){n.telegraphs=n.telegraphs.filter(t=>n.tick<t.impactTick);for(const t of e){const i=t.kind==="volcano",r=t.kind==="meteor";n.pendingExplosions.push({pos:[t.x,.5,t.z],radius:i?uh:r?4:t.radius,damage:i?iv:r?5:3,source:i?"volcano":r?"meteor":"bomb"}),t.kind!=="bomb"&&Av(n,t.x,t.z,t.kind)}}}function Ml(n,e){const t=n.structures.find(r=>r.id===e.pylonA),i=n.structures.find(r=>r.id===e.pylonB);return!!t&&!!i&&t.grid.cells.some(r=>r)&&i.grid.cells.some(r=>r)}function Wv(n,e,t,i){if(e[1]>n.height||e[1]+t[1]*i<0)return null;const r=n.bx-n.ax,s=n.bz-n.az,a=t[0]*s-t[2]*r;if(Math.abs(a)<1e-9)return null;const o=n.ax-e[0],l=n.az-e[2],c=(o*s-l*r)/a,u=(o*t[2]-l*t[0])/a;return c<0||c>i||u<0||u>1?null:c}function Xv(n,e,t,i){const r=n.bx-n.ax,s=n.bz-n.az,a=r*r+s*s;let o=((e-n.ax)*r+(t-n.az)*s)/a;o=Math.max(0,Math.min(1,o));const l=n.ax+r*o,c=n.az+s*o,u=e-l,f=t-c,m=Math.hypot(u,f);if(m>=i||m<1e-9)return null;const g=(i-m)/m;return{x:u*g,z:f*g}}const xs=n=>rh.filter(e=>!n||n(e)).map(e=>({kind:e.kind,x:e.x,z:e.z})),Ss=(n,e,t,i,r,s,a)=>({id:n,ax:e,az:t,bx:i,bz:r,pylonA:s,pylonB:a,height:2.4}),_h={classic:{id:"classic",label:"CLASSIC",placements:[{kind:"wall",x:-20,z:-35},{kind:"wall",x:35,z:55},{kind:"bunker",x:-55,z:40},{kind:"tower",x:70,z:-70},{kind:"depot",x:15,z:-55},{kind:"scan",x:-40,z:-80},{kind:"pylon",x:-6,z:70},{kind:"pylon",x:6,z:70},...xs()],fences:[Ss(300,-6,70,6,70,106,107)],sky:{storm:!1,meteors:!1,volcano:!0}},outpost:{id:"outpost",label:"OUTPOST",placements:[{kind:"wall",x:-30,z:-20},{kind:"wall",x:30,z:-20},{kind:"wall",x:-30,z:20},{kind:"wall",x:30,z:20},{kind:"bunker",x:0,z:-45},{kind:"bunker",x:0,z:45},{kind:"depot",x:-45,z:0},{kind:"depot",x:45,z:0},{kind:"tower",x:-60,z:-60},{kind:"tower",x:60,z:60},{kind:"scan",x:0,z:0},{kind:"pylon",x:-12,z:70},{kind:"pylon",x:12,z:70},...xs(n=>Math.abs(n.x)>80||Math.abs(n.z)>80)],fences:[Ss(300,-12,70,12,70,111,112)],sky:{storm:!1,meteors:!1,volcano:!0}},ruins:{id:"ruins",label:"RUINS",placements:[{kind:"wall",x:-15,z:-15},{kind:"wall",x:15,z:-15},{kind:"wall",x:-15,z:15},{kind:"wall",x:15,z:15},{kind:"bunker",x:-40,z:-40},{kind:"bunker",x:40,z:-40},{kind:"bunker",x:-40,z:40},{kind:"bunker",x:40,z:40},{kind:"tower",x:0,z:-60},{kind:"tower",x:0,z:60},{kind:"tower",x:-60,z:0},{kind:"tower",x:60,z:0},{kind:"depot",x:-70,z:-70},{kind:"depot",x:70,z:70},{kind:"scan",x:-80,z:20},...xs(n=>Math.abs(n.x)>90||Math.abs(n.z)>90)],fences:[],sky:{storm:!1,meteors:!1,volcano:!0}},stormfield:{id:"stormfield",label:"STORMFIELD",placements:[{kind:"rocks",x:-20,z:-20},{kind:"rocks",x:25,z:10},{kind:"rocks",x:-10,z:40},{kind:"rocks",x:50,z:-40},{kind:"pylon",x:-20,z:60},{kind:"pylon",x:20,z:60},{kind:"pylon",x:-60,z:-30},{kind:"pylon",x:-60,z:10},{kind:"scan",x:70,z:30},...xs(n=>n.kind==="pyramid")],fences:[Ss(300,-20,60,20,60,104,105),Ss(301,-60,-30,-60,10,106,107)],sky:{storm:!0,meteors:!0,volcano:!0}}},Yv=["classic","outpost","ruins","stormfield"],qv=420,Kv=9e3;function $v(n){const e=n.sky;if(e.storm&&n.tick>=n.nextStormTick&&n.stormUntil<=n.tick&&(n.stormUntil=n.tick+qv,n.nextStormTick=n.tick+24e3+Math.floor(n.rng.next()*12e3),n.events.push({kind:"ionStorm"})),e.meteors&&n.tick>=n.nextMeteorTick){const t=(n.rng.next()-.5)*300,i=(n.rng.next()-.5)*300;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:2,kind:"meteor"}),n.events.push({kind:"meteorInbound",pos:[t,0,i]}),n.nextMeteorTick=n.tick+Kv+Math.floor(n.rng.next()*3e3)}}const Zv=60,ei=1/Zv;function jv(n,e="classic"){const t=_h[e];return{seed:n,tick:0,rng:b_(n),arenaHalf:200,tanks:[eh(0,0,0,0)],structures:t.placements.map((i,r)=>rn(100+r,i.kind,i.x,i.z)),shells:[],chunks:[],rubble:[],rubbleRev:0,events:[],pendingExplosions:[],nextId:1,awareness:new Map,brains:new Map,threats:new Map,incomingFire:new Map,missiles:[],bomber:null,telegraphs:[],fences:t.fences.map(i=>({...i})),sky:t.sky,nextStormTick:15e3,nextMeteorTick:6e3,volcano:Ev(),lavaPools:[],stormUntil:0,score:0,lives:3,phase:"play",nextSpawnTick:120,nextSuperTick:9e3,nextMissileTick:1800,nextBomberTick:mh,respawnTick:0,nextLifeAt:1e4,lastHitBy:new Map}}function Tl(n){const e=n.structures.map(t=>({g:t.grid,structure:t}));for(const t of n.tanks)t.alive&&e.push({g:t.hull,tank:t,part:"hull"},{g:t.turret,tank:t,part:"turret"});return e}function Jv(n,e){return[(e[0]-n.size.x/2+.5)*We,(e[1]+.5)*We,(e[2]-n.size.z/2+.5)*We]}function ao(n,e){const t=Jv(n.g,e);return n.structure?[n.structure.x+t[0],t[1],n.structure.z+t[2]]:n.part==="turret"?io(n.tank,t):th(n.tank,t)}const Ns=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],vh=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],Za=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],Qv=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]);function yl(n,e,t,i,r){const s=Ot(e.g,t[0],t[1],t[2]);if(!s)return;const a=ao(e,t);Xa(e.g,t[0],t[1],t[2],null),i.set(e.g,e),e.tank&&r!==null&&(n.threats.set(e.tank.id,{tick:n.tick,from:r}),xl(n,e.tank.id,r)),n.events.push({kind:"blockDestroyed",pos:a,by:r}),s.type==="ammo"&&n.pendingExplosions.push({pos:a,radius:J_,damage:Q_,source:"ammo"});for(const o of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const l=[t[0]+o[0],t[1]+o[1],t[2]+o[2]],c=Ot(e.g,l[0],l[1],l[2]);c&&(c.hp-=j_,i.set(e.g,e),c.hp<=0&&yl(n,e,l,i,r))}}function qs(n,e,t,i,r,s){const a=Ot(e.g,t[0],t[1],t[2]);a&&(a.hp-=i,r.set(e.g,e),e.tank&&s!==null&&(n.threats.set(e.tank.id,{tick:n.tick,from:s}),xl(n,e.tank.id,s)),a.hp<=0&&yl(n,e,t,r,s))}function ex(n,e){const t=oh*ei,i=Tl(n);for(const r of n.shells){if(!r.alive)continue;let s=1/0;for(const o of n.fences){if(!Ml(n,o))continue;const l=Wv(o,r.pos,r.dir,t);l!==null&&l<s&&(s=l)}if(s!==1/0){r.pos=Ns(r.pos,Za(r.dir,s)),r.alive=!1,n.events.push({kind:"shellImpact",pos:[...r.pos]});continue}const a=[];for(const o of i){if(o.tank&&o.tank.id===r.owner)continue;let l,c;if(o.structure)l=[r.pos[0]-o.structure.x,r.pos[1],r.pos[2]-o.structure.z],c=r.dir;else{const u=o.part==="turret"?nh:vl;l=u(o.tank,r.pos),c=vh(u(o.tank,Ns(r.pos,r.dir)),l)}for(const u of Ys(o.g,l,c,t))a.push({t:u.t,ctx:o,cell:u.cell})}a.sort((o,l)=>o.t-l.t);for(const o of a){if(!r.alive)break;const l=Ot(o.ctx.g,o.cell[0],o.cell[1],o.cell[2]);if(!l)continue;const c=ao(o.ctx,o.cell);o.ctx.tank&&n.lastHitBy.set(o.ctx.tank.id,r.owner);const u=nv[l.type];if(r.budget<u){qs(n,o.ctx,o.cell,1,e,r.owner),r.alive=!1,n.events.push({kind:"shellImpact",pos:c});break}r.budget-=u,yl(n,o.ctx,o.cell,e,r.owner)}r.alive&&(r.pos=Ns(r.pos,Za(r.dir,t)),r.pos[1]<0?(r.alive=!1,n.events.push({kind:"shellImpact",pos:[r.pos[0],0,r.pos[2]]})):(Math.abs(r.pos[0])>n.arenaHalf||Math.abs(r.pos[2])>n.arenaHalf)&&(r.alive=!1))}n.shells=n.shells.filter(r=>r.alive)}function tx(n,e){const t=Tl(n);for(;n.pendingExplosions.length;){const i=n.pendingExplosions.shift();n.events.push({kind:"explosion",pos:i.pos,radius:i.radius,damage:i.damage,source:i.source});for(const r of t)for(let s=0;s<r.g.size.z;s++)for(let a=0;a<r.g.size.y;a++)for(let o=0;o<r.g.size.x;o++){if(!Ot(r.g,o,a,s))continue;const l=[o,a,s];Qv(ao(r,l),i.pos)<=i.radius&&qs(n,r,l,i.damage,e,null)}}}function ja(n){const e=new Map;for(let t=0;t<n.size.z;t++)for(let i=0;i<n.size.y;i++)for(let r=0;r<n.size.x;r++){const s=Ot(n,r,i,t);s&&e.set(`${r},${i},${t}`,s.type)}return e}function Fs(n,e,t,i){if(!t.length)return;const r=t.map(o=>ao(e,o)),s=[0,0,0];for(const o of r)s[0]+=o[0]/r.length,s[1]+=o[1]/r.length,s[2]+=o[2]/r.length;const a={id:n.nextId++,pos:s,vel:[(n.rng.next()-.5)*3,2+n.rng.next()*2,(n.rng.next()-.5)*3],angle:0,spin:(n.rng.next()-.5)*6,settleTick:n.tick+ev,cells:t.map((o,l)=>({off:vh(r[l],s),type:i.get(o.join(","))??"hull"}))};n.chunks.push(a),n.events.push({kind:"chunkDetached",id:a.id})}function nx(n,e){const t=new Set,i=Tl(n);for(const[r,s]of e){if(t.has(r))continue;t.add(r);const a=s.structure?"structure":s.part,o=ja(r),l=sh(r,a);if(l.length===0){if(Fs(n,s,Us(r,[]),o),s.tank&&s.part==="hull"){s.tank.alive=!1;const c=n.lastHitBy.get(s.tank.id)??null;if(n.events.push({kind:"tankKilled",id:s.tank.id,pos:[s.tank.x,1,s.tank.z],by:c,cause:"core"}),s.tank.id===0)n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+hh;else if(c===0){const f=n.brains.get(s.tank.id);n.score+=f?.kind==="super"?br.super:br.slow}const u=i.find(f=>f.tank===s.tank&&f.part==="turret");u&&!t.has(u.g)&&(t.add(u.g),Fs(n,u,Us(u.g,[]),ja(u.g)))}}else{const c=Us(r,l);c.length&&Fs(n,s,c,o)}}}function ix(n,e){for(const t of n.tanks)if(!(!t.alive||vi(t.turret,"gun")>0)){if(t.selfDestructTick===null){t.selfDestructTick=n.tick+ov,n.events.push({kind:"selfDestructArmed",id:t.id,pos:[t.x,1,t.z],seconds:10});continue}if(!(n.tick<t.selfDestructTick)){n.pendingExplosions.push({pos:[t.x,.6,t.z],radius:av,damage:lv,source:"selfDestruct"});for(const[i,r]of[[t.hull,"hull"],[t.turret,"turret"]]){const s={g:i,tank:t,part:r};Fs(n,s,Us(i,[]),ja(i)),e.set(i,s)}t.alive=!1,n.events.push({kind:"tankKilled",id:t.id,pos:[t.x,1,t.z],by:null,cause:"selfDestruct"}),t.id===0&&(n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+hh)}}}function rx(n){const e=[];for(const t of n.chunks)t.vel[1]-=9.8*ei,t.pos=Ns(t.pos,Za(t.vel,ei)),t.angle+=t.spin*ei,(t.pos[1]<=.2||n.tick>=t.settleTick)&&e.push(t);if(e.length){n.chunks=n.chunks.filter(t=>!e.includes(t));for(const t of e)for(const i of t.cells)n.rubble.push({x:t.pos[0]+i.off[0],z:t.pos[2]+i.off[2],type:i.type,born:n.tick});for(;n.rubble.length>lh;)n.rubble.shift();n.rubbleRev++,n.events.push({kind:"rubbleChanged"})}}function xh(n,e=[]){if(n.events=[],n.phase==="over")return;n.tick+=1;const t=new Map;if(n.phase==="play"&&!n.tanks[0].alive&&n.respawnTick>0&&n.tick>=n.respawnTick&&e[0]?.firePressed){const i=n.rng.next()*Math.PI*2,r=eh(0,Math.sin(i)*120,Math.cos(i)*120,n.rng.next()*Math.PI*2);r.spawnTick=n.tick,n.tanks[0]=r,n.respawnTick=0}for(let i=0;i<n.tanks.length;i++){const r=n.tanks[i];if(!r.alive)continue;const s=n.brains.get(r.id),a=i===0?e[0]??Ya():s?Mv(n,s,r):Ya();if(z_(r,a,ei,n.arenaHalf),r.cooldown=Math.max(0,r.cooldown-ei),a.fire&&r.cooldown===0&&sh(r.turret,"turret").length>0){const o=ih(r),l=io(r,[0,We,r.turret.size.z/2*We+.15]);n.shells.push({id:n.nextId++,owner:r.id,pos:l,dir:o,budget:Z_,alive:!0});const c=n.brains.get(r.id)?.kind,u=c?Ir[c].cooldown:null;r.cooldown=u?u[0]+n.rng.next()*(u[1]-u[0]):ah,n.events.push({kind:"fire",pos:l,dir:o,owner:r.id})}}if(ex(n,t),Nv(n),bv(n),$v(n),n.tick%600===0){for(const i of n.structures)if(i.kind==="scan"&&i.grid.cells.some(r=>r)){n.events.push({kind:"scanPing"});break}}tx(n,t);for(const i of n.tanks){if(!i.alive||Math.abs(i.speed)<.5)continue;const r=i.hull.size.z*We/2;for(const s of n.structures){const a=s.grid.size.x*We/2+r,o=s.grid.size.z*We/2+r;if(Math.abs(i.x-s.x)>a||Math.abs(i.z-s.z)>o)continue;const l=i.x-s.x,c=i.z-s.z,u=Math.max(0,Math.floor((l-r)/We+s.grid.size.x/2)),f=Math.min(s.grid.size.x-1,Math.ceil((l+r)/We+s.grid.size.x/2)),m=Math.max(0,Math.floor((c-r)/We+s.grid.size.z/2)),g=Math.min(s.grid.size.z-1,Math.ceil((c+r)/We+s.grid.size.z/2));let h=!1;for(let _=m;_<=g;_++)for(let p=u;p<=f;p++)for(let d=0;d<s.grid.size.y;d++){if(!Ot(s.grid,p,d,_))continue;const w=s.x+(p-s.grid.size.x/2+.5)*We,A=s.z+(_-s.grid.size.z/2+.5)*We;Math.hypot(w-i.x,A-i.z)<r+.2&&(qs(n,{g:s.grid,structure:s},[p,d,_],3,t,i.id),h=!0)}h&&(i.speed*=.85)}for(const s of n.fences){if(!Ml(n,s))continue;const a=Xv(s,i.x,i.z,i.hull.size.z*We/2);a&&(i.x+=a.x,i.z+=a.z,i.speed*=.5)}}if(n.tick%30===0){for(const i of n.lavaPools)if(!(n.tick>=i.untilTick))for(const r of n.tanks){if(!r.alive||Math.hypot(r.x-i.x,r.z-i.z)>i.radius)continue;const s=[];for(let a=0;a<r.hull.size.z;a++)for(let o=0;o<r.hull.size.y;o++)for(let l=0;l<r.hull.size.x;l++)Ot(r.hull,l,o,a)&&s.push([l,o,a]);if(s.length){const a=s[Math.floor(n.rng.next()*s.length)];qs(n,{g:r.hull,tank:r,part:"hull"},a,2,t,null)}}n.lavaPools=n.lavaPools.filter(i=>n.tick<i.untilTick)}nx(n,t),ix(n,t),rx(n),pv(n);for(const i of n.events)i.kind==="blockDestroyed"&&i.by===0?n.score+=br.block:i.kind==="kill"&&i.by===0&&(n.score+=i.what==="bomber"?br.bomber:br.missile);for(;n.score>=n.nextLifeAt;)n.lives++,n.nextLifeAt+=1e4;for(;n.rubble.length>lh;)n.rubble.shift(),n.rubbleRev++;n.phase==="play"&&n.tick>=ro&&(n.phase="over",n.events.push({kind:"matchEnd"}))}const sx=[{d:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{d:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{d:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{d:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{d:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{d:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];function Sh(n){const e=[],t=new Map,i=We,r=f=>(f-n.size.x/2)*i,s=f=>f*i,a=f=>(f-n.size.z/2)*i,o=(f,m,g,h)=>[r(m+f[0]),s(g+f[1]),a(h+f[2])];for(let f=0;f<n.size.z;f++)for(let m=0;m<n.size.y;m++)for(let g=0;g<n.size.x;g++)if(Ot(n,g,m,f))for(const{d:h,corners:_}of sx){if(Ot(n,g+h[0],m+h[1],f+h[2]))continue;const p=_.map(d=>o(d,g,m,f));for(const d of[0,1,2,0,2,3])e.push(...p[d]);for(let d=0;d<4;d++){const w=p[d],A=p[(d+1)%4],S=w.map(E=>E.toFixed(4)).join(","),b=A.map(E=>E.toFixed(4)).join(","),y=S<b?`${S}|${b}`:`${b}|${S}`;t.has(y)||t.set(y,[...w,...A])}}const l=new ct;l.setAttribute("position",new tt(e,3));const c=[];for(const f of t.values())c.push(...f);const u=new ct;return u.setAttribute("position",new tt(c,3)),{faces:l,edges:u}}function ox(n,e,t,i=200,r=38){const s=Math.cos(t),a=Math.sin(t);let o=(-n*s+e*a)*(r/i),l=-(n*a+e*s)*(r/i);const c=Math.hypot(o,l),u=c>r;return u&&(o*=r/c,l*=r/c),{x:o,y:l,clamped:u}}function qc(n,e){return{x:Math.sin(n)*e,y:-Math.cos(n)*e}}function Gi(n,e=0){return e-n}function ax(n,e,t=1200){const i=n-e;return i>=0&&i<t?i/t:null}function Ms(n,e,t){return t-Math.atan2(n,e)}const Zn=38,Kc=200,$c=[16729139,16739133,12986408,16747109,12000284];function lx(n,e=255,t=!1){return"#"+(t?16723245:$c[Math.abs(n)%$c.length]).toString(16).padStart(6,"0")+Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function cx(){const n=document.createElement("canvas");n.id="hud",document.body.append(n);const e=n.getContext("2d"),t=document.createElement("div");t.id="alerts",document.body.append(t);const i=()=>{n.width=window.innerWidth,n.height=window.innerHeight};i(),window.addEventListener("resize",i);function r(o){const l=document.createElement("div");for(l.className="alert",l.textContent=o,t.append(l),setTimeout(()=>l.remove(),4200);t.children.length>3;)t.firstChild?.remove()}function s(o,l,c,u,f){e.fillStyle=f,e.beginPath(),e.moveTo(o+Math.sin(c)*u,l-Math.cos(c)*u),e.lineTo(o+Math.sin(c+2.55)*u*.75,l-Math.cos(c+2.55)*u*.75),e.lineTo(o+Math.sin(c-2.55)*u*.75,l-Math.cos(c-2.55)*u*.75),e.closePath(),e.fill()}function a(o){const l=n.width,c=n.height;e.clearRect(0,0,l,c);const u=o.palette,f=u.hud;e.fillStyle=f+"14",e.fillRect(0,0,l,90),e.strokeStyle=f+"88",e.beginPath(),e.moveTo(0,90.5),e.lineTo(l,90.5),e.stroke();const m=l/2,g=45;e.strokeStyle=f+"aa",e.beginPath(),e.arc(m,g,Zn,0,Math.PI*2),e.stroke(),e.strokeStyle=f+"44",e.beginPath(),e.arc(m,g,Zn*30/Kc,0,Math.PI*2),e.stroke();const h=Gi(o.heading+o.turretYaw,o.heading),_=qc(h,Zn);e.strokeStyle=f+"55",e.beginPath(),e.moveTo(m,g),e.lineTo(m+_.x,g+_.y),e.stroke();const p=(b,y)=>{const E=ox(b-o.x,y-o.z,o.heading,Kc,Zn-3);return{x:m+E.x,y:g+E.y}};if(o.storm){e.fillStyle=f+"66";for(let b=0;b<60;b++){const y=Math.random()*Math.PI*2,E=Math.random()*Zn;e.fillRect(m+Math.sin(y)*E,g-Math.cos(y)*E,1.5,1.5)}}else{if(o.known)for(const[b,y]of o.known){const E=p(y.x,y.z),P=o.tick-y.tick,M=y.source==="gunfire"||y.source==="ping"?Math.max(0,1-P/180):1,T=Math.floor(M*255),D=o.superIds.has(b),N=lx(b,T,D),k=o.tankHeadings.get(b)??y.heading,X=o.tankTurrets.get(b)??y.turretYaw??0;s(E.x,E.y,Gi(k,o.heading),D?6:4.5,N);const V=Gi(k+X,o.heading);e.strokeStyle=N,e.beginPath(),e.moveTo(E.x,E.y),e.lineTo(E.x+Math.sin(V)*8,E.y-Math.cos(V)*8),e.stroke()}if(o.scanner){const b=p(o.scanner.x,o.scanner.z);if(e.fillStyle="#35e0ff",e.beginPath(),e.moveTo(b.x,b.y-4),e.lineTo(b.x+4,b.y),e.lineTo(b.x,b.y+4),e.lineTo(b.x-4,b.y),e.closePath(),e.fill(),o.scanPulse!==null){const y=Math.max(0,Math.min(1,o.scanPulse)),E=4+y*22;e.save(),e.beginPath(),e.arc(m,g,Zn,0,Math.PI*2),e.clip(),e.strokeStyle=`rgba(53,224,255,${(1-y).toFixed(3)})`,e.lineWidth=1.5,e.beginPath(),e.arc(b.x,b.y,E,0,Math.PI*2),e.stroke(),e.restore()}}for(const b of o.missiles){const y=p(b.x,b.z),E=b.targeted?5+Math.sin(o.tick*.4)*1.5:3.5;s(y.x,y.y,Gi(b.heading,o.heading),E,b.targeted?"#ff4433":"#ffaa33")}if(o.bomber&&o.bomberBlip){const b=p(o.bomber.x,o.bomber.z);s(b.x,b.y,Gi(o.bomber.heading,o.heading),6,f)}}if(o.threatBearing){const b=o.threatBearing.angle,y=Zn-5,E=m+Math.sin(b)*y,P=g-Math.cos(b)*y,M=Math.max(0,1-o.threatBearing.progress);s(E,P,b,5,`rgba(255,68,51,${M.toFixed(3)})`)}s(m,g,0,6,u.worldCss);const d=qc(Gi(o.heading+o.turretYaw,o.heading),11);e.strokeStyle=f,e.beginPath(),e.moveTo(m,g),e.lineTo(m+d.x,g+d.y),e.stroke(),e.font="13px monospace",e.fillStyle=f,e.textAlign="left",e.fillText(`SCORE ${String(o.score).padStart(6,"0")}`,12,32),e.fillText(`LIVES ${o.lives}`,12,52);const w=Math.floor(o.secondsLeft/60),A=Math.floor(o.secondsLeft%60);if(e.textAlign="right",e.fillText(`T-${String(w).padStart(2,"0")}:${String(A).padStart(2,"0")}`,m-Zn-14,32),e.textAlign="left",o.alive){const b=l/2,y=c/2;e.strokeStyle=u.worldCss+"cc",e.beginPath(),e.moveTo(b-10,y),e.lineTo(b-4,y),e.moveTo(b+4,y),e.lineTo(b+10,y),e.moveTo(b,y-10),e.lineTo(b,y-4),e.moveTo(b,y+4),e.lineTo(b,y+10),e.stroke(),e.strokeStyle=f+"aa",e.beginPath(),e.arc(b,y,15,-Math.PI/2,-Math.PI/2+Math.PI*2*o.cooldownFrac),e.stroke();const E=y-o.elevation*40;e.strokeStyle=u.worldCss+"88",e.beginPath(),e.moveTo(b-6,E),e.lineTo(b+6,E),e.stroke()}o.spectator?(e.font="bold 13px monospace",e.textAlign="center",e.fillStyle=f,e.fillText(o.respawnReady?`SPECTATING ${o.spectator.label} · ←/→ CYCLE · PRESS SPACE TO RESPAWN`:`SPECTATING ${o.spectator.label} · ←/→ CYCLE · RESPAWN ${Math.ceil(o.spectator.secondsLeft)}s`,l/2,c/2+54),e.textAlign="left"):o.respawnReady&&(e.font="bold 13px monospace",e.textAlign="center",e.fillStyle=f,e.fillText("PRESS SPACE TO RESPAWN",l/2,c/2+54),e.textAlign="left"),o.alive&&o.selfDestructSeconds!==null&&(e.font="bold 16px monospace",e.textAlign="center",e.fillStyle=f,e.fillText(`SELF-DESTRUCT ${Math.ceil(o.selfDestructSeconds)}s`,l/2,c-96),e.textAlign="left");const S=[["CORE",o.status.core],["TRD",o.status.tread],["GUN",o.status.gun],["ENG",o.status.engine]];if(e.font="10px monospace",S.forEach(([b,y],E)=>{const P=c-64+E*14;e.fillStyle=f+"cc",e.fillText(b,12,P+4),e.fillStyle=u.worldCss+"cc";for(let M=0;M<Math.min(y,12);M++)e.fillRect(44+M*7,P-3,5,5)}),e.font="11px monospace",e.textAlign="right",o.killfeed.slice(-4).forEach((b,y)=>{const E=o.now-b.born,P=Math.max(0,1-E/6e3);e.fillStyle=f+Math.floor(P*220).toString(16).padStart(2,"0"),e.fillText(b.text,l-12,c-60+y*14)}),e.textAlign="left",o.hitFlash&&o.now-o.hitFlash.born<450){const b=o.hitFlash.angle,y=1-(o.now-o.hitFlash.born)/450,E=Math.min(l,c)/2-40,P=l/2+Math.sin(b)*E,M=c/2-Math.cos(b)*E;e.fillStyle=f+Math.floor(y*255).toString(16).padStart(2,"0"),e.beginPath(),e.moveTo(P+Math.sin(b)*12,M-Math.cos(b)*12),e.lineTo(P+Math.sin(b+2.5)*8,M-Math.cos(b+2.5)*8),e.lineTo(P+Math.sin(b-2.5)*8,M-Math.cos(b-2.5)*8),e.closePath(),e.fill()}}return{canvas:n,draw:a,alert:r}}function ux(n,e){return(n?1:0)-(e?1:0)}function hx(n,e){return(n?1:0)-(e?1:0)}const sn=new Set;let Zc=!1;const fx=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);function dx(n){fx.has(n.code)&&(n.preventDefault(),sn.add(n.code))}function px(n){sn.delete(n.code)}function mx(){sn.clear()}function gx(){window.addEventListener("keydown",dx),window.addEventListener("keyup",px),window.addEventListener("blur",mx)}function Mh(){const n=Ya();n.throttle=(sn.has("KeyW")?1:0)-(sn.has("KeyS")?1:0),n.turn=hx(sn.has("KeyA"),sn.has("KeyD")),n.turretYaw=ux(sn.has("ArrowLeft"),sn.has("ArrowRight")),n.gunPitch=(sn.has("ArrowUp")?1:0)-(sn.has("ArrowDown")?1:0);const e=sn.has("Space");n.fire=e,n.firePressed=e&&!Zc,Zc=e;const t=navigator.getGamepads?navigator.getGamepads():[];for(const i of t){if(!i)continue;const r=u=>Math.abs(u)>.15?u:0,s=r(i.axes[0]??0),a=r(i.axes[1]??0),o=r(i.axes[2]??0),l=r(i.axes[3]??0),c=!!i.buttons[0]?.pressed||!!i.buttons[7]?.pressed;if(s||a||o||l||c){n.throttle=-a,n.turn=-s,n.turretYaw=-o,n.gunPitch=-l,n.fire=c;break}}return n}const mn=[{id:"green",label:"P1 green",world:3800939,worldCss:"#39ff6b",dim:1931834,grid:668441,gridCenter:1002788,rubble:1931834,moon:10485696,hud:"#ff4433",hazard:[1,.35,.1]},{id:"amber",label:"P3 amber",world:16756736,worldCss:"#ffb000",dim:9064960,grid:3350528,gridCenter:5058560,rubble:9064960,moon:16769184,hud:"#ffcc55",hazard:[1,.25,.1]},{id:"cyan",label:"P4 cyan",world:3531007,worldCss:"#35e0ff",dim:1927802,grid:665651,gridCenter:997965,rubble:1927802,moon:10547455,hud:"#77ffff",hazard:[1,.35,.1]},{id:"bw",label:"B&W",world:16777215,worldCss:"#ffffff",dim:10066329,grid:2236962,gridCenter:3355443,rubble:10066329,moon:16777215,hud:"#ffffff",hazard:[1,1,1]}];class _x{object;max;pos;col;p;cursor=0;constructor(e=1024,t=!0){this.max=e,this.pos=new Float32Array(e*6),this.col=new Float32Array(e*6),this.p=new Float32Array(e*15);const i=new ct;i.setAttribute("position",new Jt(this.pos,3).setUsage(Fl)),i.setAttribute("color",new Jt(this.col,3).setUsage(Fl));const r=new hl({vertexColors:!0,blending:Ar,depthWrite:!1,transparent:!0,fog:t});this.object=new Nu(i,r),this.object.frustumCulled=!1}spawn(e,t,i,r,s,a,o,l,c,u,f=.5,m=0,g=0,h=0){const _=this.cursor++%this.max*15,p=this.p;p[_]=e,p[_+1]=t,p[_+2]=i,p[_+3]=r,p[_+4]=s,p[_+5]=a,p[_+6]=o,p[_+7]=o,p[_+8]=f,p[_+9]=l,p[_+10]=c,p[_+11]=u,p[_+12]=m,p[_+13]=g,p[_+14]=h}update(e){const t=this.p;for(let i=0;i<this.max;i++){const r=i*15,s=i*6;if(t[r+6]<=0){this.pos[s]=this.pos[s+3]=0,this.pos[s+1]=this.pos[s+4]=-1e3,this.pos[s+2]=this.pos[s+5]=0,this.col[s]=this.col[s+1]=this.col[s+2]=0,this.col[s+3]=this.col[s+4]=this.col[s+5]=0;continue}t[r+6]-=e,t[r]+=t[r+3]*e,t[r+1]+=t[r+4]*e,t[r+2]+=t[r+5]*e;let a=t[r+12],o=t[r+13],l=t[r+14];a===0&&o===0&&l===0&&(a=t[r+3],o=t[r+4],l=t[r+5]);const c=Math.hypot(a,o,l)||1,u=t[r+8]/c;this.pos[s]=t[r],this.pos[s+1]=t[r+1],this.pos[s+2]=t[r+2],this.pos[s+3]=t[r]-a*u,this.pos[s+4]=t[r+1]-o*u,this.pos[s+5]=t[r+2]-l*u;const f=Math.max(t[r+6],0)/t[r+7];this.col[s]=this.col[s+3]=t[r+9]*f,this.col[s+1]=this.col[s+4]=t[r+10]*f,this.col[s+2]=this.col[s+5]=t[r+11]*f}this.object.geometry.attributes.position.needsUpdate=!0,this.object.geometry.attributes.color.needsUpdate=!0}}const zs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vx=new Ou(-1,1,1,-1,0,1);class xx extends ct{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}const Sx=new xx;class Th{constructor(e){this._mesh=new Gt(Sx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yh extends Nr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=tr.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Th(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jc extends Nr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Mx extends Nr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Tx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ae);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yh(zs),this.copyPass.material.blending=zn,this.clock=new Hd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jc!==void 0&&(a instanceof jc?i=!0:a instanceof Mx&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yx extends Nr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Ex={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class nr extends Nr{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(s,a,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new jt(s,a,{type:On});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new jt(s,a,{type:On});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}const o=Ex;this.highPassUniforms=tr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ae(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=tr.clone(zs.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:zs.vertexShader,fragmentShader:zs.fragmentShader,blending:Ar,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new ar,this._fsQuad=new Th(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ae(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}nr.BlurDirectionX=new Ae(1,0);nr.BlurDirectionY=new Ae(0,1);const bx={uniforms:{tDiffuse:{value:null},tPrev:{value:null},uTime:{value:0},uRes:{value:new Ae(1,1)},uScan:{value:.2},uVignette:{value:.4},uBarrel:{value:.04},uPersist:{value:.4},uRoll:{value:.08},uSafe:{value:0}},vertexShader:`
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
  `};function Ax(n,e,t){const i=n.getDrawingBufferSize(new Ae),r=new jt(i.x,i.y,{type:gn}),s=new Tx(n,r);s.addPass(new yx(e,t));const a=new nr(new Ae(i.x,i.y),.9,.5,0);s.addPass(a);const o=new yh(bx);o.uniforms.uRes.value.set(i.x,i.y),s.addPass(o);let l=new cc(i.x,i.y);return o.uniforms.tPrev.value=l,{composer:s,bloom:a,crt:o,render(c){o.uniforms.uTime.value=c,s.render(),n.copyFramebufferToTexture(l)},resize(c,u){s.setSize(c,u);const f=n.getDrawingBufferSize(new Ae);o.uniforms.uRes.value.set(f.x,f.y),l.dispose(),l=new cc(f.x,f.y),o.uniforms.tPrev.value=l}}}const Jc=1931834,Ts=Math.PI*2;function Rx(n){const e=(y,E)=>new Od(400,80,y,E),t=[];for(let y=0;y<256;y++){const E=y/256*Ts,P=14+22*Math.abs(Math.sin(E*3.1))+12*Math.abs(Math.sin(E*7.3+1.7))+6*Math.sin(E*13.7);t.push(Math.sin(E)*620,P,Math.cos(E)*620)}new ct().setAttribute("position",new tt(t,3));const s=[];for(let y=0;y<256;y++){const E=y*3,P=(y+1)%256*3;s.push(t[E],t[E+1],t[E+2],t[P],t[P+1],t[P+2])}const a=zt(Jc,1.1,{fog:!1});n.add(Gn(s,a));const o=.9,l=Math.sin(o)*620,c=Math.cos(o)*620,u=[[0,95],[22,64],[44,40],[64,24],[76,15]],f=10,m=[];for(const[y,E]of u)for(let P=0;P<f;P++){const M=P/f*Ts,T=(P+1)/f*Ts;m.push(l+Math.sin(M)*E,y,c+Math.cos(M)*E,l+Math.sin(T)*E,y,c+Math.cos(T)*E)}for(let y=0;y<f;y++){const E=y/f*Ts;for(let P=0;P<u.length-1;P++){const[M,T]=u[P],[D,N]=u[P+1];m.push(l+Math.sin(E)*T,M,c+Math.cos(E)*T,l+Math.sin(E)*N,D,c+Math.cos(E)*N)}}const g=zt(Jc,1.2,{fog:!1});n.add(Gn(m,g));const h=new I(l,78,c),_=[],p=-350,d=210,w=-520,A=14;for(let y=0;y<=40;y++){const E=Math.PI*.25+y/40*Math.PI*1.5;_.push(p+Math.cos(E)*A,d+Math.sin(E)*A,w)}for(let y=40;y>=0;y--){const E=Math.PI*.25+y/40*Math.PI*1.5;_.push(p+6+Math.cos(E)*A*.92,d+Math.sin(E)*A*.92,w)}const S=[];for(let y=0;y<_.length/3-1;y++){const E=y*3,P=E+3;S.push(_[E],_[E+1],_[E+2],_[P],_[P+1],_[P+2])}const b=zt(10485696,1.2,{fog:!1});return n.add(Gn(S,b)),{crater:h,mountainMat:a,volcanoMat:g,moonMat:b,makeGrid:e}}function wx(n){const e=[],t=[],i=We;for(const a of n){const o=a.x-i/2,l=a.x+i/2,c=0,u=i,f=a.z-i/2,m=a.z+i/2,g=[[o,c,f],[l,c,f],[l,c,m],[o,c,m],[o,u,f],[l,u,f],[l,u,m],[o,u,m]],h=[[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,3,7,4]];for(const _ of h){for(const p of[0,1,2,0,2,3])e.push(...g[_[p]]);for(let p=0;p<4;p++)t.push(...g[_[p]],...g[_[(p+1)%4]])}}const r=new ct;r.setAttribute("position",new tt(e,3));const s=new ct;return s.setAttribute("position",new tt(t,3)),{faces:r,edges:s}}function Cx(n){const e=[],t=We/2;for(const{off:r}of n){const[s,a,o]=r,l=[[s-t,a-t,o-t],[s+t,a-t,o-t],[s+t,a-t,o+t],[s-t,a-t,o+t],[s-t,a+t,o-t],[s+t,a+t,o-t],[s+t,a+t,o+t],[s-t,a+t,o+t]],c=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];for(const[u,f]of c)e.push(...l[u],...l[f])}const i=new ct;return i.setAttribute("position",new tt(e,3)),i}const qo={palette:0,bloom:.9,crt:.6,wireframe:!1,safe:!1,shake:!0,fov:60,res:1,map:"classic",volMaster:.8,volSfx:.8},Eh="vectorzone-settings";function Px(){try{const n=localStorage.getItem(Eh);return n?{...qo,...JSON.parse(n)}:{...qo}}catch{return{...qo}}}function bh(n){try{localStorage.setItem(Eh,JSON.stringify(n))}catch{}}function Dx(n,e,t){const i=document.createElement("div");i.id="panel";const r=()=>{bh(n),t(n)},s=(w,A)=>{const S=document.createElement("label");S.className="row";const b=document.createElement("span");b.textContent=w,S.append(b,A),i.append(S)},a=document.createElement("button"),o=()=>{a.textContent=e[n.palette%e.length]};o(),a.onclick=()=>{n.palette=(n.palette+1)%e.length,o(),r()},s("phosphor",a);const l=document.createElement("input");l.type="checkbox",l.checked=n.wireframe,l.onchange=()=>{n.wireframe=l.checked,r()},s("wireframe",l);const c=document.createElement("input");c.type="checkbox",c.checked=n.safe,c.onchange=()=>{n.safe=c.checked,r()},s("safe mode",c);const u=document.createElement("input");u.type="range",u.min="0",u.max="2",u.step="0.1",u.value=String(n.bloom),u.oninput=()=>{n.bloom=Number(u.value),r()},s("bloom",u);const f=document.createElement("input");f.type="range",f.min="0",f.max="1",f.step="0.1",f.value=String(n.crt),f.oninput=()=>{n.crt=Number(f.value),r()},s("crt",f);const m=document.createElement("input");m.type="checkbox",m.checked=n.shake,m.onchange=()=>{n.shake=m.checked,r()},s("shake",m);const g=document.createElement("input");g.type="range",g.min="50",g.max="90",g.step="5",g.value=String(n.fov),g.oninput=()=>{n.fov=Number(g.value),r()},s("fov",g);const h=document.createElement("input");h.type="range",h.min="0.5",h.max="1",h.step="0.25",h.value=String(n.res),h.oninput=()=>{n.res=Number(h.value),r()},s("res",h);const _=document.createElement("select");for(const w of Yv){const A=document.createElement("option");A.value=w,A.textContent=_h[w].label,_.append(A)}_.value=n.map,_.onchange=()=>{n.map=_.value,r()},s("map",_);const p=document.createElement("input");p.type="range",p.min="0",p.max="1",p.step="0.1",p.value=String(n.volMaster),p.oninput=()=>{n.volMaster=Number(p.value),r()},s("vol",p);const d=document.createElement("input");return d.type="range",d.min="0",d.max="1",d.step="0.1",d.value=String(n.volSfx),d.oninput=()=>{n.volSfx=Number(d.value),r()},s("sfx",d),i}function Ah(n,e=0){return n.filter(t=>t.id!==e&&t.alive).sort((t,i)=>t.id-i.id)}function Lx(n,e,t){if(n.length===0)return null;const i=n.findIndex(s=>s.id===e),r=i<0?0:(i+t+n.length)%n.length;return n[r].id}function Ix(n,e){return e==="super"?"SUPERTANK":`LIGHT TANK ${n.id}`}function Ux(n,e,t){if(t==="airburst")return 0;const i=Math.max(14,e*3.5);if(n>=i)return 0;const r=1-n/i;return Math.min(.85,r*(.25+e*.07))}function Hx(n){return n<5?(1-n/5)*.18:0}const El=3800939,Rt=new T_({antialias:!0});Rt.setPixelRatio(Math.min(window.devicePixelRatio,2));Rt.setSize(window.innerWidth,window.innerHeight);Rt.info.autoReset=!1;document.body.appendChild(Rt.domElement);const Qe=new yd;Qe.background=new Be(0);Qe.fog=new ul(0,60,260);const vt=new an(60,window.innerWidth/window.innerHeight,.1,2e3),Ja=document.getElementById("stats"),Rh=new ar({color:0,side:fn}),wh=zt(El,2.4),Ch=zt(El,1.4),Ph=zt(El,1.8),Nx=zt(16755251,2.6,{fog:!1}),Fx=new ar({color:16739115,fog:!1,depthWrite:!1}),zx=zt(16729139,1.8),Ox=zt(3531007,1.8),ti=Px(),se=jv(11827170,ti.map);let de=se.tanks[0],Sn=null,Qc=null;function $i(n,e=wh){const t=Sh(n),i=new Gt(t.faces,Rh),r=Is(t.edges,e),s=new Mr;return s.add(i,r),{group:s,mesh:i,lines:r,rev:n.rev}}function xr(n,e){if(n.rev===e.rev)return;const t=Sh(e);n.mesh.geometry.dispose(),n.lines.geometry.dispose(),n.mesh.geometry=t.faces,$u(n.lines,t.edges),n.rev=e.rev,bl++}const Yi=$i(de.hull),Mn=$i(de.turret);Mn.group.position.set(de.turretPivot.x,de.turretPivot.y,de.turretPivot.z);Mn.group.rotation.order="YXZ";Yi.group.add(Mn.group);Qe.add(Yi.group);let bl=0;const Qa=new Map,Dh=n=>n==="depot"?zx:n==="scan"?Ox:Ch;for(const n of se.structures){const e=$i(n.grid,Dh(n.kind));e.group.position.set(n.x,0,n.z),Qe.add(e.group),Qa.set(n.id,e)}const Lh=new ar({color:0,side:fn}),Al=zt(1931834,1);let Ks=new Gt(new ct,Lh),$s=Gn(new Float32Array(6),Al);Ks.frustumCulled=!1;$s.frustumCulled=!1;Qe.add(Ks,$s);let eu=-1;const ys=new Map,Ko=new Map,tu=zt(3800939,1.2,{transparent:!0,opacity:.6}),Ih=zt(16739115,1.8,{transparent:!0,opacity:.75}),el=Gn(new Float32Array(6),Ih);Qe.add(el);let nu="",$o=0,Kt=0;const jn=new Float32Array(432),Uh=zt(3531007,1.1,{transparent:!0,opacity:.5,fog:!1}),Zs=Gn(jn,Uh);Zs.visible=!1;Qe.add(Zs);let Zo=0;const Es=new Map,bs=new Map;let In=null,js=!1;window.addEventListener("keydown",n=>{n.code==="KeyX"&&(js=!js)});const iu=new Float32Array(4096),Js=Gn(new Float32Array(6),zt(16729139,1,{transparent:!0,opacity:.7}));Js.visible=!1;Qe.add(Js);const Hh=zt(1931834,.9,{transparent:!0,opacity:.5}),_t=new Float32Array(18),Os=Gn(_t,Hh);Qe.add(Os);const nn=cx();let ru=-1e9,su=-1e9,ou=!1;const Sr=[];let jo=null,Vi=null;const Nh="vectorzone-scores";function kx(){try{return JSON.parse(localStorage.getItem(Nh)??"[]")}catch{return[]}}function Bx(){const n=kx();n.push({score:se.score,date:new Date().toISOString().slice(0,10)}),n.sort((s,a)=>a.score-s.score);const e=n.slice(0,5);try{localStorage.setItem(Nh,JSON.stringify(e))}catch{}const t=mn[ti.palette%mn.length],i=document.createElement("div");i.id="gameover",i.style.color=t.hud;const r=se.lives<=0?"GAME OVER":"MATCH COMPLETE";i.innerHTML=`<h1>${r}</h1><p class="final">SCORE ${String(se.score).padStart(6,"0")}</p><table><tr><th>#</th><th>SCORE</th><th>DATE</th></tr>`+e.map((s,a)=>`<tr${s.score===se.score&&s.date===new Date().toISOString().slice(0,10)?' class="me"':""}><td>${a+1}</td><td>${String(s.score).padStart(6,"0")}</td><td>${s.date}</td></tr>`).join("")+'</table><p class="hint">PRESS R TO RESTART</p>',document.body.append(i)}window.addEventListener("keydown",n=>{n.code==="KeyR"&&se.phase==="over"&&location.reload()});function Gx(){const n=[0,0,2.2,0,0,-1.6,0,0,2.2,-.45,0,1.2,0,0,2.2,.45,0,1.2,0,0,2.2,0,.45,1.2,0,0,2.2,0,-.45,1.2,-.45,0,1.2,-.9,0,.2,.45,0,1.2,.9,0,.2,0,.45,1.2,0,.9,.2,0,-.45,1.2,0,-.9,.2,-.9,0,.2,-.9,0,-.7,.9,0,.2,.9,0,-.7,0,.9,.2,0,.9,-.7,0,-.9,.2,0,-.9,-.7,0,0,-1.6,0,0,-2.6],e=new ct;return e.setAttribute("position",new tt(n,3)),e}const Fh=new dl(.28,1.4,4);Fh.rotateX(Math.PI/2);function Vx(){const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d");e.clearRect(0,0,64,64),e.strokeStyle="#ffaa33",e.lineWidth=5,e.beginPath(),e.moveTo(32,5),e.lineTo(59,32),e.lineTo(32,59),e.lineTo(5,32),e.closePath(),e.stroke(),e.fillStyle="#fff3c4",e.fillRect(27,27,10,10);const t=new Cd(n);return t.colorSpace=$t,t}const Wx=new Iu({map:Vx(),transparent:!0,fog:!1,depthWrite:!1,blending:Ar});function Xx(){const n=[0,0,-2.4,0,0,2.4,0,.25,1.5,0,.25,2.1,-3.2,0,.2,3.2,0,.2,-3.2,0,.2,-3.2,.3,0,3.2,0,.2,3.2,.3,0,-1.2,0,-2.1,1.2,0,-2.1,0,0,-2.2,0,.9,-2.3,0,.9,-2.3,0,.5,-1.7],e=new ct;return e.setAttribute("position",new tt(n,3)),e}const Yx=new I(0,de.turret.size.y*We+.25,-.9),qx=new rr().setFromAxisAngle(new I(0,1,0),Math.PI);gx();const Fn=Rx(Qe);let Wi=Fn.makeGrid(mn[0].gridCenter,mn[0].grid);Qe.add(Wi);const Dt=new _x(1024,!1);Qe.add(Dt.object);let Jo=0;const yn=Ax(Rt,Qe,vt),we={tracer:[.6,1,.7],spark:[.2,.9,.4],hazard:[1,.35,.1],scorch:[.45,.22,.08],smoke:[.1,.35,.16]};function zh(n){if(n.map!==ti.map){bh(n),location.reload();return}const e=mn[n.palette%mn.length];vt.fov=n.fov,vt.updateProjectionMatrix(),Rt.setPixelRatio(Math.min(window.devicePixelRatio,2)*n.res),Rt.setSize(window.innerWidth,window.innerHeight),yn.resize(window.innerWidth,window.innerHeight),Zu(window.innerWidth,window.innerHeight),wh.color.setHex(e.world),Ch.color.setHex(e.world),Ph.color.setHex(e.world),Al.color.setHex(e.rubble),Hh.color.setHex(e.dim),Fn.mountainMat.color.setHex(e.dim),Fn.volcanoMat.color.setHex(e.dim),Fn.moonMat.color.setHex(e.moon),Qe.remove(Wi),Wi.geometry.dispose(),Wi.material.dispose(),Wi=Fn.makeGrid(e.gridCenter,e.grid),Qe.add(Wi);const t=new Be(e.world);we.tracer=[t.r*.7+.2,t.g*.7+.2,t.b*.7+.2],we.spark=[t.r*.4,t.g*.9,t.b*.5],we.hazard=e.hazard,we.scorch=[e.hazard[0]*.45,e.hazard[1]*.45,e.hazard[2]*.45];const i=new Be(e.dim);we.smoke=[i.r*.6,i.g*.6,i.b*.6],Ja.style.color=e.hud,Ja.style.textShadow=`0 0 6px ${e.hud}99`,document.getElementById("alerts").style.color=e.hud,yn.bloom.strength=n.bloom;const r=yn.crt.uniforms;r.uScan.value=.3*n.crt,r.uVignette.value=.6*n.crt,r.uBarrel.value=.06*n.crt,r.uPersist.value=n.safe?0:.55*n.crt,r.uRoll.value=n.safe?0:.15*n.crt,r.uSafe.value=n.safe?1:0,Rh.visible=!n.wireframe,Lh.visible=!n.wireframe}document.body.append(Dx(ti,mn.map(n=>n.label),zh));zh(ti);let Qs=!1;window.addEventListener("keydown",n=>{n.code==="KeyC"&&(Qs=!Qs),!de.alive&&(n.code==="ArrowLeft"||n.code==="ArrowRight")&&(Sn=Lx(Ah(se.tanks,0),Sn,n.code==="ArrowRight"?1:-1))});function Qo(n,e,t){for(let i=0;i<16;i++){const r=i/16*Math.PI*2;Dt.spawn(n+Math.sin(r)*t,.02,e+Math.cos(r)*t,0,0,0,20,we.scorch[0],we.scorch[1],we.scorch[2],.5,Math.cos(r),0,-Math.sin(r))}}const ks={cam:null};window.__vz={world:se,renderer:Rt,debug:ks,camera:vt,turretObj:Mn.group,step:(n,e)=>{for(let t=0;t<e;t++)xh(se,n)},get rebuilds(){return bl},get spectatorId(){return Sn},post:yn,scene:Qe,command:Mh,sample:n=>{const t=Rt.getDrawingBufferSize(new Ae),i=Math.floor(t.x/2-96/2),r=Math.floor(t.y/2-96/2);if(n){yn.composer.renderToScreen=!1,yn.composer.render();const o=new Uint8Array(9216*4);return Rt.readRenderTargetPixels(yn.composer.readBuffer,i,r,96,96,o),yn.composer.renderToScreen=!0,au(o,96)}const s=new jt(t.x,t.y,{type:gn});Rt.setRenderTarget(s),Rt.render(Qe,vt);const a=new Uint8Array(9216*4);return Rt.readRenderTargetPixels(s,i,r,96,96,a),Rt.setRenderTarget(null),s.dispose(),au(a,96)}};function au(n,e){let t=0;const i=[0,0,0],r=new Array(e).fill(0);for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=(o*e+l)*4,u=n[c]+n[c+1]+n[c+2];r[o]+=u,u>60&&(t++,i[0]+=n[c],i[1]+=n[c+1],i[2]+=n[c+2])}t&&(i[0]/=t,i[1]/=t,i[2]/=t);const s=r.reduce((o,l)=>o+l,0)/e,a=r.reduce((o,l)=>o+(l-s)*(l-s),0)/e;return{lit:t,mean:i.map(o=>Math.round(o)),rowVar:Math.round(a)}}let As=0,lu=performance.now(),ea=0,Rs=0,cu=0;function Oh(n){requestAnimationFrame(Oh);const e=Math.min((n-lu)/1e3,.25);lu=n,As+=e;const t=Mh(),i=[];if(se.phase!=="over")for(;As>=ei;)xh(se,[t]),i.push(...se.events),As-=ei;else As=0;de=se.tanks[0];const r=de.alive?[]:Ah(se.tanks,0);de.alive?Sn=null:r.length&&(Sn===null?Sn=r.find(h=>h.id===Qc)?.id??r[0].id:r.some(h=>h.id===Sn)||(Sn=r[0].id));const s=r.find(h=>h.id===Sn)??null;se.phase==="over"&&!ou&&(ou=!0,Bx()),xr(Yi,de.hull),xr(Mn,de.turret);const a=se.volcano.state,o=a==="erupt"?50:a==="rumble"?18:a==="cooldown"?10:3;for(Jo+=e;Jo>=1/o;){Jo-=1/o;const h=a==="erupt",_=h?45:a==="rumble"?28:12,p=h&&Math.random()<.4;Dt.spawn(Fn.crater.x+(Math.random()-.5)*_,Fn.crater.y+(Math.random()-.5)*8,Fn.crater.z+(Math.random()-.5)*_,(Math.random()-.5)*(h?12:4)+(h?6:0),(h?16:6)+Math.random()*(h?14:5),(Math.random()-.5)*(h?12:4),(h?10:5)+Math.random()*(h?8:4),p?we.hazard[0]:we.smoke[0]*1.4,p?we.hazard[1]:we.smoke[1]*1.4,p?we.hazard[2]:we.smoke[2]*1.4,(h?12:a==="rumble"?6:2.5)+Math.random()*(h?18:5))}Fn.volcanoMat.color.setHex(a==="erupt"?16739115:a==="rumble"?9062944:mn[ti.palette%mn.length].dim),Dt.update(e),Yi.group.visible=de.alive;for(const h of se.structures){let _=Qa.get(h.id);_||(_=$i(h.grid,Dh(h.kind)),_.group.position.set(h.x,0,h.z),Qe.add(_.group),Qa.set(h.id,_)),xr(_,h.grid)}if(se.rubbleRev!==eu){eu=se.rubbleRev;const h=wx(se.rubble);Ks.geometry.dispose(),$s.geometry.dispose(),Ks.geometry=h.faces,$u($s,h.edges),bl++}for(const h of se.chunks){let _=ys.get(h.id);_||(_=Is(Cx(h.cells),Al),ys.set(h.id,_),Qe.add(_)),_.position.set(h.pos[0],h.pos[1],h.pos[2]),_.rotation.set(h.angle*.7,h.angle,0)}for(const[h,_]of ys)se.chunks.some(p=>p.id===h)||(Qe.remove(_),_.geometry.dispose(),ys.delete(h));for(const h of se.shells)Dt.spawn(h.pos[0],h.pos[1],h.pos[2],h.dir[0]*60,h.dir[1]*60,h.dir[2]*60,.06,we.tracer[0],we.tracer[1],we.tracer[2],2.5);for(const h of se.tanks){if(h.id===0)continue;let _=Es.get(h.id);_||(_={hull:$i(h.hull),turret:$i(h.turret)},_.turret.group.position.set(h.turretPivot.x,h.turretPivot.y,h.turretPivot.z),_.turret.group.rotation.order="YXZ",_.hull.group.add(_.turret.group),Qe.add(_.hull.group),Es.set(h.id,_)),xr(_.hull,h.hull),xr(_.turret,h.turret),_.hull.group.visible=h.alive,_.hull.group.position.set(h.x,0,h.z),_.hull.group.rotation.y=h.heading,_.turret.group.rotation.y=h.turretYaw,_.turret.group.rotation.x=-h.gunPitch}for(const[h,_]of Es)se.tanks.some(p=>p.id===h)||(Qe.remove(_.hull.group),Es.delete(h));for(const h of se.missiles){let _=bs.get(h.id);if(!_){_=Is(Gx(),Nx);const d=new Gt(Fh,Fx);d.position.z=.25,_.add(d);const w=new Ed(Wx);w.scale.set(1.6,1.6,1.6),_.add(w),bs.set(h.id,_),Qe.add(_)}_.position.set(h.pos[0],h.pos[1],h.pos[2]);const p=new I(h.dir[0],h.dir[1],h.dir[2]).normalize();_.quaternion.setFromUnitVectors(new I(0,0,1),p);for(let d=0;d<2;d++){const w=2.2+d*.8;Dt.spawn(h.pos[0]-p.x*w,h.pos[1]-p.y*w,h.pos[2]-p.z*w,-p.x*2+(Math.random()-.5),Math.random()-.5,-p.z*2+(Math.random()-.5),.45+d*.15,we.hazard[0],we.hazard[1],we.hazard[2],1.3,p.x,p.y,p.z)}}for(const[h,_]of bs)se.missiles.some(p=>p.id===h)||(Qe.remove(_),_.geometry.dispose(),bs.delete(h));se.bomber?(In||(In=Is(Xx(),Ph),Qe.add(In)),In.position.set(se.bomber.pos[0],se.bomber.pos[1],se.bomber.pos[2]),In.rotation.y=Math.atan2(se.bomber.dir[0],se.bomber.dir[2])):In&&(Qe.remove(In),In.geometry.dispose(),In=null);for(const h of se.telegraphs){const _=.5+.5*Math.sin(n/90),p=h.kind==="volcano"?32:16;for(let d=0;d<p;d++){const w=d/p*Math.PI*2;Dt.spawn(h.x+Math.sin(w)*h.radius,.05,h.z+Math.cos(w)*h.radius,0,0,0,.12,we.hazard[0]*_,we.hazard[1]*_,we.hazard[2]*_,h.kind==="volcano"?1.2:.5,Math.cos(w),0,-Math.sin(w))}if(h.kind==="volcano"||h.kind==="meteor"){const w=1-Math.max(0,h.impactTick-se.tick)/90,A=85*(1-w)*(1-w)+1;for(let S=0;S<7;S++)Dt.spawn(h.x+Math.sin(S*.7+n/200)*.5,A+S*1.4,h.z+Math.cos(S*.7+n/200)*.5,-1.5,-22,-1.5,.25,we.hazard[0],we.hazard[1],we.hazard[2],2.2)}}for(const h of se.fences){const _=Ml(se,h);let p=Ko.get(h.id);if(_&&!p){const d=[],w=Math.hypot(h.bx-h.ax,h.bz-h.az),A=Math.max(2,Math.floor(w/.6));for(let S=0;S<=A;S++){const b=S/A,y=h.ax+(h.bx-h.ax)*b,E=h.az+(h.bz-h.az)*b;d.push(y,0,E,y,h.height,E)}d.push(h.ax,h.height,h.az,h.bx,h.height,h.bz),d.push(h.ax,.05,h.az,h.bx,.05,h.bz),p=Gn(d,tu),Ko.set(h.id,p),Qe.add(p)}else!_&&p&&(Qe.remove(p),p.geometry.dispose(),Ko.delete(h.id))}tu.opacity=.45+.25*Math.sin(n/180);const l=se.stormUntil>se.tick;if(Zs.visible=l,l){let h=0;for(let _=0;_<3;_++)for(let p=0;p<24;p++){const d=p/24*Math.PI*2,w=(p+1)/24*Math.PI*2,A=130+_*18+Math.sin(d*3+n/400+_)*10,S=130+_*18+Math.sin(w*3+n/400+_)*10;jn[h++]=Math.sin(d)*520,jn[h++]=A,jn[h++]=Math.cos(d)*520,jn[h++]=Math.sin(w)*520,jn[h++]=S,jn[h++]=Math.cos(w)*520}ms(Zs,jn),Uh.opacity=.3+.25*Math.sin(n/300)}if(se.sky.meteors)for(Zo+=e;Zo>.35;){Zo-=.35;const h=Math.random()*Math.PI*2;Dt.spawn(Math.sin(h)*400,150+Math.random()*60,Math.cos(h)*400,-Math.sin(h)*60-20,-35,-Math.cos(h)*60,1.2,we.tracer[0],we.tracer[1],we.tracer[2],6)}Kt*=Math.exp(-e*6);const c=se.lavaPools.map(h=>`${h.x.toFixed(1)},${h.z.toFixed(1)},${h.radius.toFixed(1)},${h.untilTick}`).join("|");if(c!==nu){nu=c;const h=[];for(const _ of se.lavaPools)for(let p=0;p<2;p++){const d=_.radius*(p===0?1:.55);for(let w=0;w<32;w++){const A=w/32*Math.PI*2,S=(w+1)/32*Math.PI*2;h.push(_.x+Math.sin(A)*d,.07,_.z+Math.cos(A)*d,_.x+Math.sin(S)*d,.07,_.z+Math.cos(S)*d)}}ms(el,h.length?h:new Float32Array(6)),el.visible=se.lavaPools.length>0}for(Ih.opacity=.55+.25*Math.sin(n/180),$o+=e;$o>.12&&se.lavaPools.length;){$o-=.12;const h=se.lavaPools[Math.floor(Math.random()*se.lavaPools.length)];Dt.spawn(h.x+(Math.random()-.5)*h.radius,.1,h.z+(Math.random()-.5)*h.radius,(Math.random()-.5)*1.5,3+Math.random()*4,(Math.random()-.5)*1.5,.8,we.hazard[0],we.hazard[1],we.hazard[2],.7)}if(Js.visible=js,js){let h=0;const _=(...p)=>{for(const d of p)iu[h++]=d};for(const p of se.tanks){const d=se.brains.get(p.id);if(!(!d||!p.alive)&&(d.debug.intent&&_(p.x,1.4,p.z,d.debug.intent[0],1.4,d.debug.intent[2]),d.aim)){const w=p.heading+p.turretYaw,A=d.debug.err||.05;for(const S of[-1,1])_(p.x,1.4,p.z,p.x+Math.sin(w+A*S)*20,1.4,p.z+Math.cos(w+A*S)*20)}}ms(Js,iu.subarray(0,h))}for(const h of i){if(h.kind==="superSpawn"?nn.alert("SUPERTANK INBOUND"):h.kind==="bomberInbound"?nn.alert("BOMBER RUN"):h.kind==="volcanoRumble"?nn.alert("VOLCANO RUMBLING — ERUPTION IMMINENT"):h.kind==="volcanoErupt"?nn.alert("ERUPTION"):h.kind==="matchEnd"?nn.alert("MATCH COMPLETE"):h.kind==="kill"&&h.what==="bomber"?nn.alert("BOMBER DOWN"):h.kind==="scanPing"?(su=n,nn.alert("SCAN PING")):h.kind==="ionStorm"?nn.alert("ION STORM — RADAR DOWN"):h.kind==="meteorInbound"?nn.alert("METEOR INBOUND"):h.kind==="missileLock"?nn.alert("MISSILE LOCK"):h.kind==="selfDestructArmed"&&h.id===0?nn.alert("SELF-DESTRUCT ARMED — 10s"):h.kind==="bombTelegraph"&&(ru=n),h.kind==="fire"&&h.owner===0&&(Kt=Math.min(.35,Kt+.035)),h.kind==="explosion"){const _=Math.hypot(h.pos[0]-de.x,h.pos[2]-de.z);Kt=Math.min(1,Kt+Ux(_,h.radius,h.source))}if(h.kind==="tankKilled"&&h.id===0&&(Kt=Math.min(.8,Kt+.3)),h.kind==="tankKilled"?h.id===0?(Qc=h.by,Sn=null,Sr.push({text:h.cause==="selfDestruct"?"YOU SELF-DESTRUCTED":h.by===null?"THE ZONE KILLED YOU":"ENEMY KILLED YOU",born:n})):h.cause==="selfDestruct"?Sr.push({text:"ENEMY SELF-DESTRUCTED",born:n}):h.by===0&&Sr.push({text:`YOU KILLED ${se.brains.get(h.id)?.kind==="super"?"SUPERTANK":"TANK"}`,born:n}):h.kind==="kill"&&h.by===0&&Sr.push({text:h.what==="bomber"?"YOU DOWNED BOMBER":"YOU DOWNED MISSILE",born:n}),h.kind==="blockDestroyed"&&h.by!==0&&Math.hypot(h.pos[0]-de.x,h.pos[2]-de.z)<4){const _=h.pos[0]-de.x,p=h.pos[2]-de.z;jo={angle:Ms(_,p,de.heading),born:n},Vi={angle:Ms(_,p,de.heading),born:n},Kt=Math.min(.5,Kt+Hx(Math.hypot(_,p)))}if(h.kind==="explosion"&&Math.hypot(h.pos[0]-de.x,h.pos[2]-de.z)<6){const _=h.pos[0]-de.x,p=h.pos[2]-de.z;jo={angle:Ms(_,p,de.heading),born:n},Vi={angle:Ms(_,p,de.heading),born:n}}if(h.kind==="fire")for(let _=0;_<8;_++)Dt.spawn(h.pos[0],h.pos[1],h.pos[2],h.dir[0]*12+(Math.random()-.5)*6,h.dir[1]*12+(Math.random()-.5)*6,h.dir[2]*12+(Math.random()-.5)*6,.15,we.tracer[0],we.tracer[1],we.tracer[2],.6);else if(h.kind==="defenseFire")for(let _=0;_<5;_++)Dt.spawn(h.pos[0],h.pos[1],h.pos[2],h.dir[0]*38+(Math.random()-.5)*3,h.dir[1]*38+(Math.random()-.5)*3,h.dir[2]*38+(Math.random()-.5)*3,.16,we.hazard[0],we.hazard[1],we.hazard[2],1.1);else if(h.kind==="blockDestroyed")for(let _=0;_<6;_++)Dt.spawn(h.pos[0],h.pos[1],h.pos[2],(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,we.spark[0],we.spark[1],we.spark[2],.4);else if(h.kind==="shellImpact"){Qo(h.pos[0],h.pos[2],1.2);for(let _=0;_<10;_++)Dt.spawn(h.pos[0],h.pos[1]+.1,h.pos[2],(Math.random()-.5)*7,Math.random()*5,(Math.random()-.5)*7,.35,we.spark[0],we.spark[1],we.spark[2],.4)}else if(h.kind==="explosion"){h.pos[1]<5&&Qo(h.pos[0],h.pos[2],h.radius);for(let _=0;_<40;_++){const p=Math.random()*Math.PI*2,d=4+Math.random()*8;Dt.spawn(h.pos[0],h.pos[1]+.2,h.pos[2],Math.sin(p)*d,Math.random()*9,Math.cos(p)*d,.7,we.hazard[0],we.hazard[1],we.hazard[2],.8)}}else if(h.kind==="tankKilled"){Qo(h.pos[0],h.pos[2],2.5);for(let _=0;_<60;_++){const p=Math.random()*Math.PI*2,d=3+Math.random()*10;Dt.spawn(h.pos[0],h.pos[1],h.pos[2],Math.sin(p)*d,Math.random()*12,Math.cos(p)*d,1,we.hazard[0],we.hazard[1],we.hazard[2],.9)}}}if(Yi.group.position.set(de.x,0,de.z),Yi.group.rotation.y=de.heading,Mn.group.rotation.y=de.turretYaw,Mn.group.rotation.x=-de.gunPitch,ks.cam?(vt.position.set(...ks.cam.p),vt.lookAt(...ks.cam.l)):!de.alive&&s?(vt.position.set(s.x-Math.sin(s.heading)*12,6.5,s.z-Math.cos(s.heading)*12),vt.lookAt(s.x,1.2,s.z)):de.alive?Qs?(vt.position.set(de.x-Math.sin(de.heading)*12,6.5,de.z-Math.cos(de.heading)*12),vt.lookAt(de.x,1.2,de.z)):(Mn.group.updateWorldMatrix(!0,!1),vt.position.copy(Yx).applyMatrix4(Mn.group.matrixWorld),vt.quaternion.setFromRotationMatrix(Mn.group.matrixWorld).multiply(qx)):(vt.position.set(de.x+6,4,de.z+6),vt.lookAt(de.x,1,de.z)),ti.shake&&Kt>.001&&(vt.position.x+=(Math.random()-.5)*Kt,vt.position.y+=(Math.random()-.5)*Kt,vt.position.z+=(Math.random()-.5)*Kt),Rt.info.reset(),yn.render(n/1e3),de.alive){const h=ih(de),_=io(de,[0,We,de.turret.size.z/2*We+.15]),p=fv(se,_,h,400,0);_t[0]=_[0],_t[1]=_[1],_t[2]=_[2],_t[3]=p.pos[0],_t[4]=p.pos[1],_t[5]=p.pos[2];const d=.5;_t[6]=p.pos[0]-d,_t[7]=p.pos[1],_t[8]=p.pos[2],_t[9]=p.pos[0]+d,_t[10]=p.pos[1],_t[11]=p.pos[2],_t[12]=p.pos[0],_t[13]=p.pos[1],_t[14]=p.pos[2]-d,_t[15]=p.pos[0],_t[16]=p.pos[1],_t[17]=p.pos[2]+d,ms(Os,_t),Os.visible=!0}else Os.visible=!1;const u=new Set,f=new Map,m=new Map;for(const h of se.tanks)f.set(h.id,h.heading),m.set(h.id,h.turretYaw),se.brains.get(h.id)?.kind==="super"&&u.add(h.id);const g=se.structures.find(h=>h.kind==="scan"&&h.grid.cells.some(_=>_));nn.draw({tick:se.tick,heading:de.heading,turretYaw:de.turretYaw,x:de.x,z:de.z,known:se.awareness.get(0),tankHeadings:f,tankTurrets:m,missiles:se.missiles.map(h=>({id:h.id,x:h.pos[0],z:h.pos[2],heading:Math.atan2(h.dir[0],h.dir[2]),targeted:h.targetId===0})),scanner:g?{x:g.x,z:g.z}:null,scanPulse:ax(n,su),bomber:se.bomber?{x:se.bomber.pos[0],z:se.bomber.pos[2],heading:Math.atan2(se.bomber.dir[0],se.bomber.dir[2])}:null,bomberBlip:n-ru<3e3,superIds:u,storm:se.stormUntil>se.tick,score:se.score,lives:se.lives,cooldownFrac:1-Math.min(1,de.cooldown/ah),secondsLeft:Math.max(0,(ro-se.tick)/60),palette:mn[ti.palette%mn.length],alive:de.alive,status:{core:vi(de.hull,"core"),tread:vi(de.hull,"tread"),gun:vi(de.turret,"gun"),engine:vi(de.hull,"engine")},killfeed:Sr,hitFlash:jo,threatBearing:Vi&&n-Vi.born<2500?{angle:Vi.angle,progress:(n-Vi.born)/2500}:null,elevation:de.gunPitch,selfDestructSeconds:de.selfDestructTick===null?null:Math.max(0,(de.selfDestructTick-se.tick)/60),spectator:s?{label:Ix(s,se.brains.get(s.id)?.kind),secondsLeft:Math.max(0,(se.respawnTick-se.tick)/60)}:null,respawnReady:!de.alive&&se.respawnTick>0&&se.tick>=se.respawnTick,now:n}),ea++,Rs+=e,Rs>=.5&&(cu=Math.round(ea/Rs),ea=0,Rs=0),Ja.textContent=`FPS ${cu} · calls ${Rt.info.render.calls} · tick ${se.tick} · v ${de.speed.toFixed(1)} m/s · ${Qs?"chase":"scope"} [C]`}requestAnimationFrame(Oh);window.addEventListener("resize",()=>{vt.aspect=window.innerWidth/window.innerHeight,vt.updateProjectionMatrix(),Rt.setSize(window.innerWidth,window.innerHeight),yn.resize(window.innerWidth,window.innerHeight),Zu(window.innerWidth,window.innerHeight)});
