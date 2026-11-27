(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ll="180",ed=0,kl=1,td=2,vu=1,nd=2,Hn=3,ii=0,Wt=1,cn=2,On=0,ji=1,Ps=2,Bl=3,Gl=4,id=5,mi=100,sd=101,rd=102,od=103,ad=104,ld=200,cd=201,ud=202,hd=203,oa=204,aa=205,dd=206,fd=207,pd=208,md=209,gd=210,_d=211,vd=212,xd=213,Sd=214,la=0,ca=1,ua=2,es=3,ha=4,da=5,fa=6,pa=7,xu=0,Md=1,Td=2,ei=0,yd=1,Ed=2,bd=3,Ad=4,Rd=5,wd=6,Cd=7,Su=300,ts=301,ns=302,ma=303,ga=304,oo=306,_a=1e3,_i=1001,va=1002,jt=1003,Pd=1004,Gs=1005,bn=1006,go=1007,vi=1008,_n=1009,Mu=1010,Tu=1011,Ds=1012,cl=1013,Ti=1014,Fn=1015,kn=1016,ul=1017,hl=1018,Ls=1020,yu=35902,Eu=35899,bu=1021,Au=1022,mn=1023,Is=1026,Us=1027,Ru=1028,dl=1029,wu=1030,fl=1031,pl=1033,Lr=33776,Ir=33777,Ur=33778,Hr=33779,xa=35840,Sa=35841,Ma=35842,Ta=35843,ya=36196,Ea=37492,ba=37496,Aa=37808,Ra=37809,wa=37810,Ca=37811,Pa=37812,Da=37813,La=37814,Ia=37815,Ua=37816,Ha=37817,Na=37818,Fa=37819,za=37820,Oa=37821,ka=36492,Ba=36494,Ga=36495,Va=36283,Wa=36284,Xa=36285,Ya=36286,Dd=3200,Ld=3201,Id=0,Ud=1,Qn="",Zt="srgb",is="srgb-linear",qr="linear",et="srgb",bi=7680,Vl=519,Hd=512,Nd=513,Fd=514,Cu=515,zd=516,Od=517,kd=518,Bd=519,qa=35044,Wl=35048,Xl="300 es",An=2e3,Kr=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Rs=Math.PI/180,Hs=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ne(n,e,t){return Math.max(e,Math.min(t,n))}function ml(n,e){return(n%e+e)%e}function Gd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vd(n,e,t){return n!==e?(t-n)/(e-n):0}function ws(n,e,t){return(1-t)*n+t*e}function Wd(n,e,t,i){return ws(n,e,1-Math.exp(-t*i))}function Xd(n,e=1){return e-Math.abs(ml(n,e*2)-e)}function Yd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $d(n,e){return n+Math.random()*(e-n)}function Zd(n){return n*(.5-Math.random())}function jd(n){n!==void 0&&(Yl=n);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(n){return n*Rs}function Qd(n){return n*Hs}function ef(n){return(n&n-1)===0&&n!==0}function tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sf(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),m=a((e-i)/2),g=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*m,o*c);break;case"YZY":n.set(l*m,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*m,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*g,o*c);break;case"YXY":n.set(l*g,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*g,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rf={DEG2RAD:Rs,RAD2DEG:Hs,generateUUID:Bn,clamp:Ne,euclideanModulo:ml,mapLinear:Gd,inverseLerp:Vd,lerp:ws,damp:Wd,pingpong:Xd,smoothstep:Yd,smootherstep:qd,randInt:Kd,randFloat:$d,randFloatSpread:Zd,seededRandom:jd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:ef,ceilPowerOfTwo:tf,floorPowerOfTwo:nf,setQuaternionFromProperEuler:sf,normalize:Je,denormalize:pn};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const m=r[a+0],g=r[a+1],_=r[a+2],u=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=m,e[t+1]=g,e[t+2]=_,e[t+3]=u;return}if(d!==u||l!==m||c!==g||h!==_){let p=1-o;const f=l*m+c*g+h*_+d*u,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const w=Math.sqrt(y),D=Math.atan2(w,f*E);p=Math.sin(p*D)/w,o=Math.sin(o*D)/w}const T=o*E;if(l=l*p+m*T,c=c*p+g*T,h=h*p+_*T,d=d*p+u*T,p===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],m=r[a+1],g=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*g-c*m,e[t+1]=l*_+h*m+c*d-o*g,e[t+2]=c*_+h*g+o*m-l*d,e[t+3]=h*_-o*d-l*m-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),m=l(i/2),g=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=m*h*d+c*g*_,this._y=c*g*d-m*h*_,this._z=c*h*_+m*g*d,this._w=c*h*d-m*g*_;break;case"YXZ":this._x=m*h*d+c*g*_,this._y=c*g*d-m*h*_,this._z=c*h*_-m*g*d,this._w=c*h*d+m*g*_;break;case"ZXY":this._x=m*h*d-c*g*_,this._y=c*g*d+m*h*_,this._z=c*h*_+m*g*d,this._w=c*h*d-m*g*_;break;case"ZYX":this._x=m*h*d-c*g*_,this._y=c*g*d+m*h*_,this._z=c*h*_-m*g*d,this._w=c*h*d+m*g*_;break;case"YZX":this._x=m*h*d+c*g*_,this._y=c*g*d+m*h*_,this._z=c*h*_-m*g*d,this._w=c*h*d-m*g*_;break;case"XZY":this._x=m*h*d-c*g*_,this._y=c*g*d-m*h*_,this._z=c*h*_+m*g*d,this._w=c*h*d+m*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],m=i+o+d;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,m=Math.sin(t*h)/c;return this._w=a*d+this._w*m,this._x=i*d+this._x*m,this._y=s*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ne(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new U,ql=new cs;class ze{constructor(e,t,i,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],m=i[2],g=i[5],_=i[8],u=s[0],p=s[3],f=s[6],E=s[1],y=s[4],T=s[7],w=s[2],D=s[5],P=s[8];return r[0]=a*u+o*E+l*w,r[3]=a*p+o*y+l*D,r[6]=a*f+o*T+l*P,r[1]=c*u+h*E+d*w,r[4]=c*p+h*y+d*D,r[7]=c*f+h*T+d*P,r[2]=m*u+g*E+_*w,r[5]=m*p+g*y+_*D,r[8]=m*f+g*T+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,m=o*l-h*r,g=c*r-a*l,_=t*d+i*m+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const u=1/_;return e[0]=d*u,e[1]=(s*c-h*i)*u,e[2]=(o*i-s*a)*u,e[3]=m*u,e[4]=(h*t-s*l)*u,e[5]=(s*r-o*t)*u,e[6]=g*u,e[7]=(i*l-c*t)*u,e[8]=(a*t-i*r)*u,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new ze;function Pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function of(){const n=$r("canvas");return n.style.display="block",n}const Kl={};function Ns(n){n in Kl||(Kl[n]=!0,console.warn(n))}function af(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const $l=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const n={enabled:!0,workingColorSpace:is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[is]:{primaries:e,whitePoint:i,transfer:qr,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const Ke=lf();function Gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ai;class cf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ai===void 0&&(Ai=$r("canvas")),Ai.width=e.width,Ai.height=e.height;const s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ai}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gn(t[i]/255)*255):t[i]=Gn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uf=0;class gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;const So=new U;class It extends ls{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=_i,s=_i,r=bn,a=vi,o=mn,l=_n,c=It.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Bn(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Su;It.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],g=l[5],_=l[9],u=l[2],p=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(d-u)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+u)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(g+1)/2,w=(f+1)/2,D=(h+m)/4,P=(d+u)/4,R=(_+p)/4;return y>T&&y>w?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=D/i,r=P/i):T>w?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=D/s,r=R/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=R/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(d-u)*(d-u)+(m-h)*(m-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(d-u)/E,this.z=(m-h)/E,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ne(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends ls{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new It(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends df{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Du extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ws.subVectors(this.max,ps),Ri.subVectors(e.a,ps),wi.subVectors(e.b,ps),Ci.subVectors(e.c,ps),Xn.subVectors(wi,Ri),Yn.subVectors(Ci,wi),ai.subVectors(Ri,Ci);let t=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!Mo(t,Ri,wi,Ci,Ws)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,Ri,wi,Ci,Ws))?!1:(Xs.crossVectors(Xn,Yn),t=[Xs.x,Xs.y,Xs.z],Mo(t,Ri,wi,Ci,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,Vs=new si,Ri=new U,wi=new U,Ci=new U,Xn=new U,Yn=new U,ai=new U,ps=new U,Ws=new U,Xs=new U,li=new U;function Mo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){li.fromArray(n,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),h=i.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pf=new si,ms=new U,To=new U;class us{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ms,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(To)),this.expandByPoint(ms.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new U,yo=new U,Ys=new U,qn=new U,Eo=new U,qs=new U,bo=new U;class Lu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yo.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(yo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=qn.dot(this.direction),l=-qn.dot(Ys),c=qn.lengthSq(),h=Math.abs(1-a*a);let d,m,g,_;if(h>0)if(d=a*l-o,m=a*o-l,_=r*h,d>=0)if(m>=-_)if(m<=_){const u=1/h;d*=u,m*=u,g=d*(d+a*m+2*o)+m*(a*d+m+2*l)+c}else m=r,d=Math.max(0,-(a*m+o)),g=-d*d+m*(m+2*l)+c;else m=-r,d=Math.max(0,-(a*m+o)),g=-d*d+m*(m+2*l)+c;else m<=-_?(d=Math.max(0,-(-a*r+o)),m=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+m*(m+2*l)+c):m<=_?(d=0,m=Math.min(Math.max(-r,-l),r),g=m*(m+2*l)+c):(d=Math.max(0,-(a*r+o)),m=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+m*(m+2*l)+c);else m=a>0?-r:r,d=Math.max(0,-(a*m+o)),g=-d*d+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yo).addScaledVector(Ys,m),g}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),s=Pn.dot(Pn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,s=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,s=(e.min.x-m.x)*c),h>=0?(r=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-m.z)*d,l=(e.max.z-m.z)*d):(o=(e.max.z-m.z)*d,l=(e.min.z-m.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,s,r){Eo.subVectors(t,e),qs.subVectors(i,e),bo.crossVectors(Eo,qs);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(qs.crossVectors(qn,qs));if(l<0)return null;const c=o*this.direction.dot(Eo.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(bo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,s,r,a,o,l,c,h,d,m,g,_,u,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,m,g,_,u,p)}set(e,t,i,s,r,a,o,l,c,h,d,m,g,_,u,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=m,f[3]=g,f[7]=_,f[11]=u,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const m=a*h,g=a*d,_=o*h,u=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+_*c,t[5]=m-u*c,t[9]=-o*l,t[2]=u-m*c,t[6]=_+g*c,t[10]=a*l}else if(e.order==="YXZ"){const m=l*h,g=l*d,_=c*h,u=c*d;t[0]=m+u*o,t[4]=_*o-g,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=g*o-_,t[6]=u+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*h,g=l*d,_=c*h,u=c*d;t[0]=m-u*o,t[4]=-a*d,t[8]=_+g*o,t[1]=g+_*o,t[5]=a*h,t[9]=u-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*h,g=a*d,_=o*h,u=o*d;t[0]=l*h,t[4]=_*c-g,t[8]=m*c+u,t[1]=l*d,t[5]=u*c+m,t[9]=g*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,g=a*c,_=o*l,u=o*c;t[0]=l*h,t[4]=u-m*d,t[8]=_*d+g,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=g*d+_,t[10]=m-u*d}else if(e.order==="XZY"){const m=a*l,g=a*c,_=o*l,u=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=m*d+u,t[5]=a*h,t[9]=g*d-_,t[2]=_*d-g,t[6]=o*h,t[10]=u*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,i){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Kn.crossVectors(i,qt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Kn.crossVectors(i,qt)),Kn.normalize(),Ks.crossVectors(qt,Kn),s[0]=Kn.x,s[4]=Ks.x,s[8]=qt.x,s[1]=Kn.y,s[5]=Ks.y,s[9]=qt.y,s[2]=Kn.z,s[6]=Ks.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],m=i[9],g=i[13],_=i[2],u=i[6],p=i[10],f=i[14],E=i[3],y=i[7],T=i[11],w=i[15],D=s[0],P=s[4],R=s[8],S=s[12],v=s[1],A=s[5],L=s[9],k=s[13],W=s[2],V=s[6],X=s[10],$=s[14],B=s[3],oe=s[7],he=s[11],be=s[15];return r[0]=a*D+o*v+l*W+c*B,r[4]=a*P+o*A+l*V+c*oe,r[8]=a*R+o*L+l*X+c*he,r[12]=a*S+o*k+l*$+c*be,r[1]=h*D+d*v+m*W+g*B,r[5]=h*P+d*A+m*V+g*oe,r[9]=h*R+d*L+m*X+g*he,r[13]=h*S+d*k+m*$+g*be,r[2]=_*D+u*v+p*W+f*B,r[6]=_*P+u*A+p*V+f*oe,r[10]=_*R+u*L+p*X+f*he,r[14]=_*S+u*k+p*$+f*be,r[3]=E*D+y*v+T*W+w*B,r[7]=E*P+y*A+T*V+w*oe,r[11]=E*R+y*L+T*X+w*he,r[15]=E*S+y*k+T*$+w*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],m=e[10],g=e[14],_=e[3],u=e[7],p=e[11],f=e[15];return _*(+r*l*d-s*c*d-r*o*m+i*c*m+s*o*g-i*l*g)+u*(+t*l*g-t*c*m+r*a*m-s*a*g+s*c*h-r*l*h)+p*(+t*c*d-t*o*g-r*a*d+i*a*g+r*o*h-i*c*h)+f*(-s*o*h-t*l*d+t*o*m+s*a*d-i*a*m+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],m=e[10],g=e[11],_=e[12],u=e[13],p=e[14],f=e[15],E=d*p*c-u*m*c+u*l*g-o*p*g-d*l*f+o*m*f,y=_*m*c-h*p*c-_*l*g+a*p*g+h*l*f-a*m*f,T=h*u*c-_*d*c+_*o*g-a*u*g-h*o*f+a*d*f,w=_*d*l-h*u*l-_*o*m+a*u*m+h*o*p-a*d*p,D=t*E+i*y+s*T+r*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=E*P,e[1]=(u*m*r-d*p*r-u*s*g+i*p*g+d*s*f-i*m*f)*P,e[2]=(o*p*r-u*l*r+u*s*c-i*p*c-o*s*f+i*l*f)*P,e[3]=(d*l*r-o*m*r-d*s*c+i*m*c+o*s*g-i*l*g)*P,e[4]=y*P,e[5]=(h*p*r-_*m*r+_*s*g-t*p*g-h*s*f+t*m*f)*P,e[6]=(_*l*r-a*p*r-_*s*c+t*p*c+a*s*f-t*l*f)*P,e[7]=(a*m*r-h*l*r+h*s*c-t*m*c-a*s*g+t*l*g)*P,e[8]=T*P,e[9]=(_*d*r-h*u*r-_*i*g+t*u*g+h*i*f-t*d*f)*P,e[10]=(a*u*r-_*o*r+_*i*c-t*u*c-a*i*f+t*o*f)*P,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*g-t*o*g)*P,e[12]=w*P,e[13]=(h*u*s-_*d*s+_*i*m-t*u*m-h*i*p+t*d*p)*P,e[14]=(_*o*s-a*u*s-_*i*l+t*u*l+a*i*p-t*o*p)*P,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*m+t*o*m)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,m=r*c,g=r*h,_=r*d,u=a*h,p=a*d,f=o*d,E=l*c,y=l*h,T=l*d,w=i.x,D=i.y,P=i.z;return s[0]=(1-(u+f))*w,s[1]=(g+T)*w,s[2]=(_-y)*w,s[3]=0,s[4]=(g-T)*D,s[5]=(1-(m+f))*D,s[6]=(p+E)*D,s[7]=0,s[8]=(_+y)*P,s[9]=(p-E)*P,s[10]=(1-(m+u))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,h=1/a,d=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=An,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(i-s),m=(t+e)/(t-e),g=(i+s)/(i-s);let _,u;if(l)_=r/(a-r),u=a*r/(a-r);else if(o===An)_=-(a+r)/(a-r),u=-2*a*r/(a-r);else if(o===Kr)_=-a/(a-r),u=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=u,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=An,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-s),m=-(t+e)/(t-e),g=-(i+s)/(i-s);let _,u;if(l)_=1/(a-r),u=a/(a-r);else if(o===An)_=-2/(a-r),u=-(a+r)/(a-r);else if(o===Kr)_=-1/(a-r),u=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=u,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new U,dn=new mt,mf=new U(0,0,0),gf=new U(1,1,1),Kn=new U,Ks=new U,qt=new U,jl=new mt,Jl=new cs;class Wn{constructor(e=0,t=0,i=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],m=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _f=0;const Ql=new U,Di=new cs,Dn=new mt,$s=new U,gs=new U,vf=new U,xf=new cs,ec=new U(1,0,0),tc=new U(0,1,0),nc=new U(0,0,1),ic={type:"added"},Sf={type:"removed"},Li={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Ot extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new U,t=new Wn,i=new cs,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(gs,$s,this.up):Dn.lookAt($s,gs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Dn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),m=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new U(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new U,Ln=new U,Ro=new U,In=new U,Ii=new U,Ui=new U,sc=new U,wo=new U,Co=new U,Po=new U,Do=new ot,Lo=new ot,Io=new ot;class un{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fn.subVectors(s,t),Ln.subVectors(i,t),Ro.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Ln),l=fn.dot(Ro),c=Ln.dot(Ln),h=Ln.dot(Ro),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const m=1/d,g=(c*l-o*h)*m,_=(a*h-o*l)*m;return r.set(1-g-_,_,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Do.setScalar(0),Lo.setScalar(0),Io.setScalar(0),Do.fromBufferAttribute(e,t),Lo.fromBufferAttribute(e,i),Io.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(Lo,r.y),a.addScaledVector(Io,r.z),a}static isFrontFacing(e,t,i,s){return fn.subVectors(i,t),Ln.subVectors(e,t),fn.cross(Ln).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),fn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return un.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,i),Ui.subVectors(r,i),wo.subVectors(e,i);const l=Ii.dot(wo),c=Ui.dot(wo);if(l<=0&&c<=0)return t.copy(i);Co.subVectors(e,s);const h=Ii.dot(Co),d=Ui.dot(Co);if(h>=0&&d<=h)return t.copy(s);const m=l*d-h*c;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ii,a);Po.subVectors(e,r);const g=Ii.dot(Po),_=Ui.dot(Po);if(_>=0&&g<=_)return t.copy(r);const u=g*c-l*_;if(u<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ui,o);const p=h*_-g*d;if(p<=0&&d-h>=0&&g-_>=0)return sc.subVectors(r,s),o=(d-h)/(d-h+(g-_)),t.copy(s).addScaledVector(sc,o);const f=1/(p+u+m);return a=u*f,o=m*f,t.copy(i).addScaledVector(Ii,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Uo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=ml(e,1),t=Ne(t,0,1),i=Ne(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Uo(a,r,e+1/3),this.g=Uo(a,r,e),this.b=Uo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=Uu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Ke.workingToColorSpace(Lt.copy(this),e),Math.round(Ne(Lt.r*255,0,255))*65536+Math.round(Ne(Lt.g*255,0,255))*256+Math.round(Ne(Lt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Zt){Ke.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,s=Lt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Zs);const i=ws($n.h,Zs.h,t),s=ws($n.s,Zs.s,t),r=ws($n.l,Zs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Be;Be.NAMES=Uu;let Mf=0;class hs extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=ji,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oa&&(i.blendSrc=this.blendSrc),this.blendDst!==aa&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yi extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new U,js=new Re;let Tf=0;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qa,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class Hu extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nu extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nt extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yf=0;const nn=new mt,Ho=new Ot,Hi=new U,Kt=new si,_s=new si,bt=new U;class lt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Nu:Hu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Kt.min,_s.min),Kt.expandByPoint(bt),bt.addVectors(Kt.max,_s.max),Kt.expandByPoint(bt)):(Kt.expandByPoint(_s.min),Kt.expandByPoint(_s.max))}Kt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),bt.add(Hi)),s=Math.max(s,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;const c=new U,h=new U,d=new U,m=new Re,g=new Re,_=new Re,u=new U,p=new U;function f(R,S,v){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,v),m.fromBufferAttribute(r,R),g.fromBufferAttribute(r,S),_.fromBufferAttribute(r,v),h.sub(c),d.sub(c),g.sub(m),_.sub(m);const A=1/(g.x*_.y-_.x*g.y);isFinite(A)&&(u.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(A),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(A),o[R].add(u),o[S].add(u),o[v].add(u),l[R].add(p),l[S].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let R=0,S=E.length;R<S;++R){const v=E[R],A=v.start,L=v.count;for(let k=A,W=A+L;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new U,T=new U,w=new U,D=new U;function P(R){w.fromBufferAttribute(s,R),D.copy(w);const S=o[R];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),T.crossVectors(D,S);const A=T.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,A)}for(let R=0,S=E.length;R<S;++R){const v=E[R],A=v.start,L=v.count;for(let k=A,W=A+L;k<W;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let m=0,g=e.count;m<g;m+=3){const _=e.getX(m+0),u=e.getX(m+1),p=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,u),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,u),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(u,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,g=t.count;m<g;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,m=new c.constructor(l.length*h);let g=0,_=0;for(let u=0,p=l.length;u<p;u++){o.isInterleavedBufferAttribute?g=l[u]*o.data.stride+o.offset:g=l[u]*h;for(let f=0;f<h;f++)m[_++]=c[g++]}return new Qt(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const m=c[h],g=e(m,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,m=c.length;d<m;d++){const g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let m=0,g=d.length;m<g;m++)h.push(d[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new mt,ci=new Lu,Js=new us,oc=new U,Qs=new U,er=new U,tr=new U,No=new U,nr=new U,ac=new U,ir=new U;class Ft extends Ot{constructor(e=new lt,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(No.fromBufferAttribute(d,e),a?nr.addScaledVector(No,h):nr.addScaledVector(No.sub(t),h))}t.add(nr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(Js.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Js,oc)===null||ci.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(rc.copy(r).invert(),ci.copy(e.ray).applyMatrix4(rc),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,m=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,u=m.length;_<u;_++){const p=m[_],f=a[p.materialIndex],E=Math.max(p.start,g.start),y=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let T=E,w=y;T<w;T+=3){const D=o.getX(T),P=o.getX(T+1),R=o.getX(T+2);s=sr(this,f,e,i,c,h,d,D,P,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),u=Math.min(o.count,g.start+g.count);for(let p=_,f=u;p<f;p+=3){const E=o.getX(p),y=o.getX(p+1),T=o.getX(p+2);s=sr(this,a,e,i,c,h,d,E,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,u=m.length;_<u;_++){const p=m[_],f=a[p.materialIndex],E=Math.max(p.start,g.start),y=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let T=E,w=y;T<w;T+=3){const D=T,P=T+1,R=T+2;s=sr(this,f,e,i,c,h,d,D,P,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),u=Math.min(l.count,g.start+g.count);for(let p=_,f=u;p<f;p+=3){const E=p,y=p+1,T=p+2;s=sr(this,a,e,i,c,h,d,E,y,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ef(n,e,t,i,s,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;ir.copy(o),ir.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:n}}function sr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Qs),n.getVertexPosition(l,er),n.getVertexPosition(c,tr);const h=Ef(n,e,t,i,Qs,er,tr,ac);if(h){const d=new U;un.getBarycoord(ac,Qs,er,tr,d),s&&(h.uv=un.getInterpolatedAttribute(s,o,l,c,d,new Re)),r&&(h.uv1=un.getInterpolatedAttribute(r,o,l,c,d,new Re)),a&&(h.normal=un.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a:o,b:l,c,normal:new U,materialIndex:0};un.getNormal(Qs,er,tr,m.normal),h.face=m,h.barycoord=d}return h}class zs extends lt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let m=0,g=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function _(u,p,f,E,y,T,w,D,P,R,S){const v=T/P,A=w/R,L=T/2,k=w/2,W=D/2,V=P+1,X=R+1;let $=0,B=0;const oe=new U;for(let he=0;he<X;he++){const be=he*A-k;for(let Ge=0;Ge<V;Ge++){const st=Ge*v-L;oe[u]=st*E,oe[p]=be*y,oe[f]=W,c.push(oe.x,oe.y,oe.z),oe[u]=0,oe[p]=0,oe[f]=D>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Ge/P),d.push(1-he/R),$+=1}}for(let he=0;he<R;he++)for(let be=0;be<P;be++){const Ge=m+be+V*he,st=m+be+V*(he+1),ct=m+(be+1)+V*(he+1),$e=m+(be+1)+V*he;l.push(Ge,st,$e),l.push(st,ct,$e),B+=6}o.addGroup(g,B,S),g+=B,m+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const s in i)e[s]=i[s]}return e}function bf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const rs={clone:ss,merge:Nt};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new U,lc=new Re,cc=new Re;class ln extends zu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,lc,cc),t.subVectors(cc,lc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Fi=1;class wf extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const r=new ln(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const a=new ln(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new ln(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const l=new ln(Ni,Fi,e,t);l.layers=this.layers,this.add(l);const c=new ln(Ni,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const u=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=u,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,m,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ou extends It{constructor(e=[],t=ts,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cf extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ou(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zs(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:On});r.uniforms.tEquirect.value=t;const a=new Ft(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=bn),new wf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class bs extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const u of e.hand.values()){const p=t.getJointPose(u,i),f=this._getHandJoint(c,u);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=h.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&m>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _l{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Df extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ku{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new U;class Rn{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bu extends hs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zi;const vs=new U,Oi=new U,ki=new U,Bi=new Re,xs=new Re,Gu=new mt,rr=new U,Ss=new U,or=new U,uc=new Re,zo=new Re,hc=new Re;class Lf extends Ot{constructor(e=new Bu){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ku(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Rn(i,3,0,!1)),zi.setAttribute("uv",new Rn(i,2,3,!1))}this.geometry=zi,this.material=e,this.center=new Re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Gu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-ki.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ar(rr.set(-.5,-.5,0),ki,a,Oi,s,r),ar(Ss.set(.5,-.5,0),ki,a,Oi,s,r),ar(or.set(.5,.5,0),ki,a,Oi,s,r),uc.set(0,0),zo.set(1,0),hc.set(1,1);let o=e.ray.intersectTriangle(rr,Ss,or,!1,vs);if(o===null&&(ar(Ss.set(-.5,.5,0),ki,a,Oi,s,r),zo.set(0,1),o=e.ray.intersectTriangle(rr,or,Ss,!1,vs),o===null))return;const l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:un.getInterpolation(vs,rr,Ss,or,uc,zo,hc,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ar(n,e,t,i,s,r){Bi.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(xs.x=r*Bi.x-s*Bi.y,xs.y=s*Bi.x+r*Bi.y):xs.copy(Bi),n.copy(e),n.x+=xs.x,n.y+=xs.y,n.applyMatrix4(Gu)}const Oo=new U,If=new U,Uf=new ze;class fi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oo.subVectors(i,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uf.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new us,Hf=new Re(.5,.5),lr=new U;class Vu{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],m=r[6],g=r[7],_=r[8],u=r[9],p=r[10],f=r[11],E=r[12],y=r[13],T=r[14],w=r[15];if(s[0].setComponents(c-a,g-h,f-_,w-E).normalize(),s[1].setComponents(c+a,g+h,f+_,w+E).normalize(),s[2].setComponents(c+o,g+d,f+u,w+y).normalize(),s[3].setComponents(c-o,g-d,f-u,w-y).normalize(),i)s[4].setComponents(l,m,p,T).normalize(),s[5].setComponents(c-l,g-m,f-p,w-T).normalize();else if(s[4].setComponents(c-l,g-m,f-p,w-T).normalize(),t===An)s[5].setComponents(c+l,g+m,f+p,w+T).normalize();else if(t===Kr)s[5].setComponents(l,m,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=Hf.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lr.x=s.normal.x>0?e.max.x:e.min.x,lr.y=s.normal.y>0?e.max.y:e.min.y,lr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vl extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zr=new U,jr=new U,dc=new mt,Ms=new Lu,cr=new us,ko=new U,fc=new U;class Nf extends Ot{constructor(e=new lt,t=new vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Zr.fromBufferAttribute(t,s-1),jr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Zr.distanceTo(jr);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;dc.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(dc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let u=g,p=_-1;u<p;u+=c){const f=h.getX(u),E=h.getX(u+1),y=ur(this,e,Ms,l,f,E,u);y&&t.push(y)}if(this.isLineLoop){const u=h.getX(_-1),p=h.getX(g),f=ur(this,e,Ms,l,u,p,_-1);f&&t.push(f)}}else{const g=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let u=g,p=_-1;u<p;u+=c){const f=ur(this,e,Ms,l,u,u+1,u);f&&t.push(f)}if(this.isLineLoop){const u=ur(this,e,Ms,l,_-1,g,_-1);u&&t.push(u)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ur(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Zr.fromBufferAttribute(o,s),jr.fromBufferAttribute(o,r),t.distanceSqToSegment(Zr,jr,ko,fc)>i)return;ko.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ko);if(!(c<e.near||c>e.far))return{distance:c,point:fc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const pc=new U,mc=new U;class Wu extends Nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)pc.fromBufferAttribute(t,s),mc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+pc.distanceTo(mc);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gc extends It{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=jt,this.minFilter=jt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ff extends It{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xu extends It{constructor(e,t,i=Ti,s,r,a,o=jt,l=jt,c,h=Is,d=1){if(h!==Is&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:d};super(m,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yu extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xl extends lt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],m=[],g=[];let _=0;const u=[],p=i/2;let f=0;E(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(m,3)),this.setAttribute("uv",new nt(g,2));function E(){const T=new U,w=new U;let D=0;const P=(t-e)/i;for(let R=0;R<=r;R++){const S=[],v=R/r,A=v*(t-e)+e;for(let L=0;L<=s;L++){const k=L/s,W=k*l+o,V=Math.sin(W),X=Math.cos(W);w.x=A*V,w.y=-v*i+p,w.z=A*X,d.push(w.x,w.y,w.z),T.set(V,P,X).normalize(),m.push(T.x,T.y,T.z),g.push(k,1-v),S.push(_++)}u.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const v=u[S][R],A=u[S+1][R],L=u[S+1][R+1],k=u[S][R+1];(e>0||S!==0)&&(h.push(v,A,k),D+=3),(t>0||S!==r-1)&&(h.push(A,L,k),D+=3)}c.addGroup(f,D,0),f+=D}function y(T){const w=_,D=new Re,P=new U;let R=0;const S=T===!0?e:t,v=T===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*v,0),m.push(0,v,0),g.push(.5,.5),_++;const A=_;for(let L=0;L<=s;L++){const W=L/s*l+o,V=Math.cos(W),X=Math.sin(W);P.x=S*X,P.y=p*v,P.z=S*V,d.push(P.x,P.y,P.z),m.push(0,v,0),D.x=V*.5+.5,D.y=X*.5*v+.5,g.push(D.x,D.y),_++}for(let L=0;L<s;L++){const k=w+L,W=A+L;T===!0?h.push(W,W+1,k):h.push(W+1,W,k),R+=3}c.addGroup(f,R,T===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends xl{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Sl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ao extends lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,m=t/l,g=[],_=[],u=[],p=[];for(let f=0;f<h;f++){const E=f*m-a;for(let y=0;y<c;y++){const T=y*d-r;_.push(T,-E,0),u.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const y=E+c*f,T=E+c*(f+1),w=E+1+c*(f+1),D=E+1+c*f;g.push(y,T,D),g.push(T,w,D)}this.setIndex(g),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class zf extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new U,r=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],m=d.start,g=d.count;for(let _=m,u=m+g;_<u;_+=3)for(let p=0;p<3;p++){const f=o.getX(_+p),E=o.getX(_+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,E),_c(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),_c(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new nt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function _c(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class Of extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kf extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qu extends zu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bf extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gf extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ka extends ku{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const vc=new U,hr=new U,Gi=new U,Vi=new U,Bo=new U,Wf=new U,Xf=new U;class Yf{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vc.subVectors(e,this.start),hr.subVectors(this.end,this.start);const i=hr.dot(hr);let r=hr.dot(vc)/i;return t&&(r=Ne(r,0,1)),r}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Wf,i=Xf){const s=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,h=e.end;Gi.subVectors(c,o),Vi.subVectors(h,l),Bo.subVectors(o,l);const d=Gi.dot(Gi),m=Vi.dot(Vi),g=Vi.dot(Bo);if(d<=s&&m<=s)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(d<=s)r=0,a=g/m,a=Ne(a,0,1);else{const _=Gi.dot(Bo);if(m<=s)a=0,r=Ne(-_/d,0,1);else{const u=Gi.dot(Vi),p=d*m-u*u;p!==0?r=Ne((u*g-_*m)/p,0,1):r=0,a=(u*r+g)/m,a<0?(a=0,r=Ne(-_/d,0,1)):a>1&&(a=1,r=Ne((u-_)/d,0,1))}}return t.copy(o).add(Gi.multiplyScalar(r)),i.copy(l).add(Vi.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class qf extends Wu{constructor(e=10,t=10,i=4473924,s=8947848){i=new Be(i),s=new Be(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let m=0,g=0,_=-o;m<=t;m++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const u=m===r?i:s;u.toArray(c,g),g+=3,u.toArray(c,g),g+=3,u.toArray(c,g),g+=3,u.toArray(c,g),g+=3}const h=new lt;h.setAttribute("position",new nt(l,3)),h.setAttribute("color",new nt(c,3));const d=new vl({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function xc(n,e,t,i){const s=Kf(i);switch(t){case bu:return n*e;case Ru:return n*e/s.components*s.byteLength;case dl:return n*e/s.components*s.byteLength;case wu:return n*e*2/s.components*s.byteLength;case fl:return n*e*2/s.components*s.byteLength;case Au:return n*e*3/s.components*s.byteLength;case mn:return n*e*4/s.components*s.byteLength;case pl:return n*e*4/s.components*s.byteLength;case Lr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:case Ta:return Math.max(n,16)*Math.max(e,8)/4;case xa:case Ma:return Math.max(n,8)*Math.max(e,8)/2;case ya:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ka:case Ba:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Va:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xa:case Ya:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kf(n){switch(n){case _n:case Mu:return{byteLength:1,components:1};case Ds:case Tu:case kn:return{byteLength:2,components:1};case ul:case hl:return{byteLength:2,components:4};case Ti:case cl:case Fn:return{byteLength:4,components:1};case yu:case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);function Ku(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $f(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((g,_)=>g.start-_.start);let m=0;for(let g=1;g<d.length;g++){const _=d[m],u=d[g];u.start<=_.start+_.count+1?_.count=Math.max(_.count,u.start+u.count-_.start):(++m,d[m]=u)}d.length=m+1;for(let g=0,_=d.length;g<_;g++){const u=d[g];n.bufferSubData(c,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Kp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,Sg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Zf,alphahash_pars_fragment:jf,alphamap_fragment:Jf,alphamap_pars_fragment:Qf,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:up,clipping_planes_fragment:hp,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:vp,common:xp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Tp,displacementmap_vertex:yp,emissivemap_fragment:Ep,emissivemap_pars_fragment:bp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:wp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Ip,fog_pars_vertex:Up,fog_fragment:Hp,fog_pars_fragment:Np,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:zp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:kp,lights_pars_begin:Bp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Yp,lights_physical_fragment:qp,lights_physical_pars_fragment:Kp,lights_fragment_begin:$p,lights_fragment_maps:Zp,lights_fragment_end:jp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:um,morphtarget_pars_vertex:hm,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Tm,opaque_fragment:ym,packing:Em,premultiplied_alpha_fragment:bm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:wm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Im,shadowmask_pars_fragment:Um,skinbase_vertex:Hm,skinning_pars_vertex:Nm,skinning_vertex:Fm,skinnormal_vertex:zm,specularmap_fragment:Om,specularmap_pars_fragment:km,tonemapping_fragment:Bm,tonemapping_pars_fragment:Gm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:Ym,uv_vertex:qm,worldpos_vertex:Km,background_vert:$m,background_frag:Zm,backgroundCube_vert:jm,backgroundCube_frag:Jm,cube_vert:Qm,cube_frag:eg,depth_vert:tg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:ug,meshlambert_vert:hg,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:vg,meshphysical_vert:xg,meshphysical_frag:Sg,meshtoon_vert:Mg,meshtoon_frag:Tg,points_vert:yg,points_frag:Eg,shadow_vert:bg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:wg},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Vt={basic:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Nt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Nt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Nt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Nt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Nt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Nt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Nt([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Nt([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Vt.physical={uniforms:Nt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const dr={r:0,b:0,g:0},hi=new Wn,Cg=new mt;function Pg(n,e,t,i,s,r,a){const o=new Be(0);let l=r===!0?0:1,c,h,d=null,m=0,g=null;function _(y){let T=y.isScene===!0?y.background:null;return T&&T.isTexture&&(T=(y.backgroundBlurriness>0?t:e).get(T)),T}function u(y){let T=!1;const w=_(y);w===null?f(o,l):w&&w.isColor&&(f(w,1),T=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,T){const w=_(T);w&&(w.isCubeTexture||w.mapping===oo)?(h===void 0&&(h=new Ft(new zs(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:ss(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hi.copy(T.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(hi)),h.material.toneMapped=Ke.getTransfer(w.colorSpace)!==et,(d!==w||m!==w.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=w,m=w.version,g=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ft(new ao(2,2),new zt({name:"BackgroundMaterial",uniforms:ss(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(w.colorSpace)!==et,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||m!==w.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,m=w.version,g=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,T){y.getRGB(dr,Fu(n)),i.buffers.color.setClear(dr.r,dr.g,dr.b,T,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:u,addToRenderList:p,dispose:E}}function Dg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let r=s,a=!1;function o(v,A,L,k,W){let V=!1;const X=d(k,L,A);r!==X&&(r=X,c(r.object)),V=g(v,k,L,W),V&&_(v,k,L,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,T(v,A,L,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,A,L){const k=L.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let V=W[A.id];V===void 0&&(V={},W[A.id]=V);let X=V[k];return X===void 0&&(X=m(l()),V[k]=X),X}function m(v){const A=[],L=[],k=[];for(let W=0;W<t;W++)A[W]=0,L[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:k,object:v,attributes:{},index:null}}function g(v,A,L,k){const W=r.attributes,V=A.attributes;let X=0;const $=L.getAttributes();for(const B in $)if($[B].location>=0){const he=W[B];let be=V[B];if(be===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(be=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(be=v.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function _(v,A,L,k){const W={},V=A.attributes;let X=0;const $=L.getAttributes();for(const B in $)if($[B].location>=0){let he=V[B];he===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(he=v.instanceColor));const be={};be.attribute=he,he&&he.data&&(be.data=he.data),W[B]=be,X++}r.attributes=W,r.attributesNum=X,r.index=k}function u(){const v=r.newAttributes;for(let A=0,L=v.length;A<L;A++)v[A]=0}function p(v){f(v,0)}function f(v,A){const L=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;L[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),W[v]!==A&&(n.vertexAttribDivisor(v,A),W[v]=A)}function E(){const v=r.newAttributes,A=r.enabledAttributes;for(let L=0,k=A.length;L<k;L++)A[L]!==v[L]&&(n.disableVertexAttribArray(L),A[L]=0)}function y(v,A,L,k,W,V,X){X===!0?n.vertexAttribIPointer(v,A,L,W,V):n.vertexAttribPointer(v,A,L,k,W,V)}function T(v,A,L,k){u();const W=k.attributes,V=L.getAttributes(),X=A.defaultAttributeValues;for(const $ in V){const B=V[$];if(B.location>=0){let oe=W[$];if(oe===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const he=oe.normalized,be=oe.itemSize,Ge=e.get(oe);if(Ge===void 0)continue;const st=Ge.buffer,ct=Ge.type,$e=Ge.bytesPerElement,q=ct===n.INT||ct===n.UNSIGNED_INT||oe.gpuType===cl;if(oe.isInterleavedBufferAttribute){const j=oe.data,pe=j.stride,Ie=oe.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)f(B.location+Ee,j.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)p(B.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ee=0;Ee<B.locationSize;Ee++)y(B.location+Ee,be/B.locationSize,ct,he,pe*$e,(Ie+be/B.locationSize*Ee)*$e,q)}else{if(oe.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)f(B.location+j,oe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let j=0;j<B.locationSize;j++)p(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,st);for(let j=0;j<B.locationSize;j++)y(B.location+j,be/B.locationSize,ct,he,be*$e,be/B.locationSize*j*$e,q)}}else if(X!==void 0){const he=X[$];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(B.location,he);break;case 3:n.vertexAttrib3fv(B.location,he);break;case 4:n.vertexAttrib4fv(B.location,he);break;default:n.vertexAttrib1fv(B.location,he)}}}}E()}function w(){R();for(const v in i){const A=i[v];for(const L in A){const k=A[L];for(const W in k)h(k[W].object),delete k[W];delete A[L]}delete i[v]}}function D(v){if(i[v.id]===void 0)return;const A=i[v.id];for(const L in A){const k=A[L];for(const W in k)h(k[W].object),delete k[W];delete A[L]}delete i[v.id]}function P(v){for(const A in i){const L=i[A];if(L[v.id]===void 0)continue;const k=L[v.id];for(const W in k)h(k[W].object),delete k[W];delete L[v.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:u,enableAttribute:p,disableUnusedAttributes:E}}function Lg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,i,1)}function l(c,h,d,m){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)a(c[_],h[_],m[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,m,0,d);let _=0;for(let u=0;u<d;u++)_+=h[u]*m[u];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ig(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_n&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fn&&!R)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:w,maxSamples:D}}function Ug(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new fi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const g=d.length!==0||m||i!==0||s;return s=m,i=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){t=h(d,m,0)},this.setState=function(d,m,g){const _=d.clippingPlanes,u=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const E=r?0:i,y=E*4;let T=f.clippingState||null;l.value=T,T=h(_,m,y,g);for(let w=0;w!==y;++w)T[w]=t[w];f.clippingState=T,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,m,g,_){const u=d!==null?d.length:0;let p=null;if(u!==0){if(p=l.value,_!==!0||p===null){const f=g+u*4,E=m.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,T=g;y!==u;++y,T+=4)a.copy(d[y]).applyMatrix4(E,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=u,e.numIntersection=0,p}}function Hg(n){let e=new WeakMap;function t(a,o){return o===ma?a.mapping=ts:o===ga&&(a.mapping=ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ma||o===ga)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $i=4,Sc=[.125,.215,.35,.446,.526,.582],gi=20,Go=new qu,Mc=new Be;let Vo=null,Wo=0,Xo=0,Yo=!1;const pi=(1+Math.sqrt(5))/2,Wi=1/pi,Tc=[new U(-pi,Wi,0),new U(pi,Wi,0),new U(-Wi,0,pi),new U(Wi,0,pi),new U(0,pi,-Wi),new U(0,pi,Wi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ng=new U;class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Ng}=r;Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Wo,Xo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:kn,format:mn,colorSpace:is,depthBuffer:!1},s=Ec(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=zg(r,e,t)}return s}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,i,s,r){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,g=d.toneMapping;d.getClearColor(Mc),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const u=new yi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),p=new Ft(new zs,u);let f=!1;const E=e.background;E?E.isColor&&(u.color.copy(E),e.background=null,f=!0):(u.color.copy(Mc),f=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):T===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;fr(s,T*w,y>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(p,l),d.render(e,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=g,d.autoClear=m,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ts||e.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Go)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tc[(s-r-1)%Tc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ft(this._lodPlanes[s],c),m=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*gi-1),u=r/_,p=isFinite(r)?1+Math.floor(h*u):gi;p>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const f=[];let E=0;for(let P=0;P<gi;++P){const R=P/u,S=Math.exp(-R*R/2);f.push(S),P===0?E+=S:P<p&&(E+=2*S)}for(let P=0;P<f.length;P++)f[P]=f[P]/E;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=f,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:y}=this;m.dTheta.value=_,m.mipInt.value=y-i;const T=this._sizeLods[s],w=3*T*(s>y-$i?s-y+$i:0),D=4*(this._cubeSize-T);fr(t,w,D,3*T,2*T),l.setRenderTarget(t),l.render(d,Go)}}function Fg(n){const e=[],t=[],i=[];let s=n;const r=n-$i+1+Sc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-$i?l=Sc[a-n+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,m=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,u=3,p=2,f=1,E=new Float32Array(u*_*g),y=new Float32Array(p*_*g),T=new Float32Array(f*_*g);for(let D=0;D<g;D++){const P=D%3*2/3-1,R=D>2?0:-1,S=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];E.set(S,u*_*D),y.set(m,p*_*D);const v=[D,D,D,D,D,D];T.set(v,f*_*D)}const w=new lt;w.setAttribute("position",new Qt(E,u)),w.setAttribute("uv",new Qt(y,p)),w.setAttribute("faceIndex",new Qt(T,f)),e.push(w),s>$i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ec(n,e,t){const i=new Jt(n,e,t);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zg(n,e,t){const i=new Float32Array(gi),s=new U(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function bc(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ac(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function Og(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ma||l===ga,h=l===ts||l===ns;if(c||h){let d=e.get(o);const m=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new yc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return c&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new yc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function kg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ns("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bg(n,e,t,i){const s={},r=new WeakMap;function a(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",a),delete s[m.id];const g=r.get(m);g&&(e.remove(g),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(d,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,t.memory.geometries++),m}function l(d){const m=d.attributes;for(const g in m)e.update(m[g],n.ARRAY_BUFFER)}function c(d){const m=[],g=d.index,_=d.attributes.position;let u=0;if(g!==null){const E=g.array;u=g.version;for(let y=0,T=E.length;y<T;y+=3){const w=E[y+0],D=E[y+1],P=E[y+2];m.push(w,D,D,P,P,w)}}else if(_!==void 0){const E=_.array;u=_.version;for(let y=0,T=E.length/3-1;y<T;y+=3){const w=y+0,D=y+1,P=y+2;m.push(w,D,D,P,P,w)}}else return;const p=new(Pu(m)?Nu:Hu)(m,1);p.version=u;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function h(d){const m=r.get(d);if(m){const g=d.index;g!==null&&m.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gg(n,e,t){let i;function s(m){i=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,g){n.drawElements(i,g,r,m*a),t.update(g,i,1)}function c(m,g,_){_!==0&&(n.drawElementsInstanced(i,g,r,m*a,_),t.update(g,i,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,r,m,0,_);let p=0;for(let f=0;f<_;f++)p+=g[f];t.update(p,i,1)}function d(m,g,_,u){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<m.length;f++)c(m[f]/a,g[f],u[f]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,r,m,0,u,0,_);let f=0;for(let E=0;E<_;E++)f+=g[E]*u[E];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Wg(n,e,t){const i=new WeakMap,s=new ot;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let m=i.get(o);if(m===void 0||m.count!==d){let v=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var g=v;m!==void 0&&m.texture.dispose();const _=o.morphAttributes.position!==void 0,u=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),u===!0&&(T=2),p===!0&&(T=3);let w=o.attributes.position.count*T,D=1;w>e.maxTextureSize&&(D=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*D*4*d),R=new Du(P,w,D,d);R.type=Fn,R.needsUpdate=!0;const S=T*4;for(let A=0;A<d;A++){const L=f[A],k=E[A],W=y[A],V=w*D*4*A;for(let X=0;X<L.count;X++){const $=X*S;_===!0&&(s.fromBufferAttribute(L,X),P[V+$+0]=s.x,P[V+$+1]=s.y,P[V+$+2]=s.z,P[V+$+3]=0),u===!0&&(s.fromBufferAttribute(k,X),P[V+$+4]=s.x,P[V+$+5]=s.y,P[V+$+6]=s.z,P[V+$+7]=0),p===!0&&(s.fromBufferAttribute(W,X),P[V+$+8]=s.x,P[V+$+9]=s.y,P[V+$+10]=s.z,P[V+$+11]=W.itemSize===4?s.w:1)}}m={count:d,texture:R,size:new Re(w,D)},i.set(o,m),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const u=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",u),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function Xg(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const $u=new It,Rc=new Xu(1,1),Zu=new Du,ju=new ff,Ju=new Ou,wc=[],Cc=[],Pc=new Float32Array(16),Dc=new Float32Array(9),Lc=new Float32Array(4);function ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=wc[s];if(r===void 0&&(r=new Float32Array(s),wc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lo(n,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,i))return;Lc.set(i),n.uniformMatrix2fv(this.addr,!1,Lc),yt(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),yt(t,i)}}function Jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,i))return;Pc.set(i),n.uniformMatrix4fv(this.addr,!1,Pc),yt(t,i)}}function Qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function a0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rc.compareFunction=Cu,r=Rc):r=$u,t.setTexture2D(e||r,s)}function l0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ju,s)}function c0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ju,s)}function u0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zu,s)}function h0(n){switch(n){case 5126:return Yg;case 35664:return qg;case 35665:return Kg;case 35666:return $g;case 35674:return Zg;case 35675:return jg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(n,e){n.uniform1fv(this.addr,e)}function f0(n,e){const t=ds(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){const t=ds(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){const t=ds(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _0(n,e){const t=ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v0(n,e){const t=ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x0(n,e){n.uniform1iv(this.addr,e)}function S0(n,e){n.uniform2iv(this.addr,e)}function M0(n,e){n.uniform3iv(this.addr,e)}function T0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function b0(n,e){n.uniform3uiv(this.addr,e)}function A0(n,e){n.uniform4uiv(this.addr,e)}function R0(n,e,t){const i=this.cache,s=e.length,r=lo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||$u,r[a])}function w0(n,e,t){const i=this.cache,s=e.length,r=lo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ju,r[a])}function C0(n,e,t){const i=this.cache,s=e.length,r=lo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ju,r[a])}function P0(n,e,t){const i=this.cache,s=e.length,r=lo(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zu,r[a])}function D0(n){switch(n){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return x0;case 35667:case 35671:return S0;case 35668:case 35672:return M0;case 35669:case 35673:return T0;case 5125:return y0;case 36294:return E0;case 36295:return b0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=h0(t.type)}}class I0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D0(t.type)}}class U0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function Ic(n,e){n.seq.push(e),n.map[e.id]=e}function H0(n,e,t){const i=n.name,s=i.length;for(qo.lastIndex=0;;){const r=qo.exec(i),a=qo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ic(t,c===void 0?new L0(o,n,e):new I0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new U0(o),Ic(t,d)),t=d}}}class Nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);H0(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Uc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const N0=37297;let F0=0;function z0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Hc=new ze;function O0(n){Ke._getMatrix(Hc,Ke.workingColorSpace,n);const e=`mat3( ${Hc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case qr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+z0(n.getShaderSource(e),o)}else return r}function k0(n,e){const t=O0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B0(n,e){let t;switch(e){case yd:t="Linear";break;case Ed:t="Reinhard";break;case bd:t="Cineon";break;case Ad:t="ACESFilmic";break;case wd:t="AgX";break;case Cd:t="Neutral";break;case Rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new U;function G0(){Ke.getLuminanceCoefficients(pr);const n=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function W0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function As(n){return n!==""}function Fc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(n){return n.replace(Y0,K0)}const q0=new Map;function K0(n,e){let t=ke[e];if(t===void 0){const i=q0.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(n){return n.replace($0,Z0)}function Z0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function j0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function J0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ns&&(e="ENVMAP_MODE_REFRACTION"),e}function e_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function t_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function n_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=j0(t),c=J0(t),h=Q0(t),d=e_(t),m=t_(t),g=V0(t),_=W0(r),u=s.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(As).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(As).join(`
`),f.length>0&&(f+=`
`)):(p=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),f=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ke.tonemapping_pars_fragment:"",t.toneMapping!==ei?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),G0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=$a(a),a=Fc(a,t),a=zc(a,t),o=$a(o),o=Fc(o,t),o=zc(o,t),a=Oc(a),o=Oc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+p+a,T=E+f+o,w=Uc(s,s.VERTEX_SHADER,y),D=Uc(s,s.FRAGMENT_SHADER,T);s.attachShader(u,w),s.attachShader(u,D),t.index0AttributeName!==void 0?s.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(u,0,"position"),s.linkProgram(u);function P(A){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(u)||"",k=s.getShaderInfoLog(w)||"",W=s.getShaderInfoLog(D)||"",V=L.trim(),X=k.trim(),$=W.trim();let B=!0,oe=!0;if(s.getProgramParameter(u,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,u,w,D);else{const he=Nc(s,w,"vertex"),be=Nc(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(u,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+he+`
`+be)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||$==="")&&(oe=!1);oe&&(A.diagnostics={runnable:B,programLog:V,vertexShader:{log:X,prefix:p},fragmentShader:{log:$,prefix:f}})}s.deleteShader(w),s.deleteShader(D),R=new Nr(s,u),S=X0(s,u)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(u,N0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=w,this.fragmentShader=D,this}let i_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new r_(e),t.set(e,i)),i}}class r_{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}}function o_(n,e,t,i,s,r,a){const o=new Iu,l=new s_,c=new Set,h=[],d=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,A,L,k){const W=L.fog,V=k.geometry,X=S.isMeshStandardMaterial?L.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),B=$&&$.mapping===oo?$.image.height:null,oe=_[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,be=he!==void 0?he.length:0;let Ge=0;V.morphAttributes.position!==void 0&&(Ge=1),V.morphAttributes.normal!==void 0&&(Ge=2),V.morphAttributes.color!==void 0&&(Ge=3);let st,ct,$e,q;if(oe){const Ze=Vt[oe];st=Ze.vertexShader,ct=Ze.fragmentShader}else st=S.vertexShader,ct=S.fragmentShader,l.update(S),$e=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);const j=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,Xe=!!S.map,Pt=!!S.matcap,C=!!$,ut=!!S.aoMap,He=!!S.lightMap,De=!!S.bumpMap,_e=!!S.normalMap,ht=!!S.displacementMap,ve=!!S.emissiveMap,Oe=!!S.metalnessMap,Et=!!S.roughnessMap,gt=S.anisotropy>0,b=S.clearcoat>0,x=S.dispersion>0,F=S.iridescence>0,Y=S.sheen>0,Z=S.transmission>0,G=gt&&!!S.anisotropyMap,Te=b&&!!S.clearcoatMap,ie=b&&!!S.clearcoatNormalMap,xe=b&&!!S.clearcoatRoughnessMap,Se=F&&!!S.iridescenceMap,ee=F&&!!S.iridescenceThicknessMap,ce=Y&&!!S.sheenColorMap,Pe=Y&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ae=!!S.specularColorMap,Fe=!!S.specularIntensityMap,I=Z&&!!S.transmissionMap,te=Z&&!!S.thicknessMap,se=!!S.gradientMap,fe=!!S.alphaMap,J=S.alphaTest>0,K=!!S.alphaHash,ge=!!S.extensions;let Ue=ei;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const rt={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:ct,defines:S.defines,customVertexShaderID:$e,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:is,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Pt,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:B,aoMap:ut,lightMap:He,bumpMap:De,normalMap:_e,displacementMap:m&&ht,emissiveMap:ve,normalMapObjectSpace:_e&&S.normalMapType===Ud,normalMapTangentSpace:_e&&S.normalMapType===Id,metalnessMap:Oe,roughnessMap:Et,anisotropy:gt,anisotropyMap:G,clearcoat:b,clearcoatMap:Te,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:x,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:ce,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:ae,specularIntensityMap:Fe,transmission:Z,transmissionMap:I,thicknessMap:te,gradientMap:se,opaque:S.transparent===!1&&S.blending===ji&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:K,combine:S.combine,mapUv:Xe&&u(S.map.channel),aoMapUv:ut&&u(S.aoMap.channel),lightMapUv:He&&u(S.lightMap.channel),bumpMapUv:De&&u(S.bumpMap.channel),normalMapUv:_e&&u(S.normalMap.channel),displacementMapUv:ht&&u(S.displacementMap.channel),emissiveMapUv:ve&&u(S.emissiveMap.channel),metalnessMapUv:Oe&&u(S.metalnessMap.channel),roughnessMapUv:Et&&u(S.roughnessMap.channel),anisotropyMapUv:G&&u(S.anisotropyMap.channel),clearcoatMapUv:Te&&u(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&u(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&u(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&u(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&u(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&u(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&u(S.sheenRoughnessMap.channel),specularMapUv:Me&&u(S.specularMap.channel),specularColorMapUv:ae&&u(S.specularColorMap.channel),specularIntensityMapUv:Fe&&u(S.specularIntensityMap.channel),transmissionMapUv:I&&u(S.transmissionMap.channel),thicknessMapUv:te&&u(S.thicknessMap.channel),alphaMapUv:fe&&u(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_e||gt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Xe||fe),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ge,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&S.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function f(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)v.push(A),v.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(E(v,S),y(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function T(S){const v=_[S.type];let A;if(v){const L=Vt[v];A=rs.clone(L.uniforms)}else A=S.uniforms;return A}function w(S,v){let A;for(let L=0,k=h.length;L<k;L++){const W=h[L];if(W.cacheKey===v){A=W,++A.usedTimes;break}}return A===void 0&&(A=new n_(n,v,S,r),h.push(A)),A}function D(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:w,releaseProgram:D,releaseShaderCache:P,programs:h,dispose:R}}function a_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function l_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,m,g,_,u,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:m,material:g,groupOrder:_,renderOrder:d.renderOrder,z:u,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=m,f.material=g,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=u,f.group=p),e++,f}function o(d,m,g,_,u,p){const f=a(d,m,g,_,u,p);g.transmission>0?i.push(f):g.transparent===!0?s.push(f):t.push(f)}function l(d,m,g,_,u,p){const f=a(d,m,g,_,u,p);g.transmission>0?i.unshift(f):g.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,m){t.length>1&&t.sort(d||l_),i.length>1&&i.sort(m||Bc),s.length>1&&s.sort(m||Bc)}function h(){for(let d=e,m=n.length;d<m;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function c_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Gc,n.set(i,[a])):s>=r.length?(a=new Gc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function u_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function h_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let d_=0;function f_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function p_(n){const e=new u_,t=h_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new mt,a=new mt;function o(c){let h=0,d=0,m=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let g=0,_=0,u=0,p=0,f=0,E=0,y=0,T=0,w=0,D=0,P=0;c.sort(f_);for(let S=0,v=c.length;S<v;S++){const A=c[S],L=A.color,k=A.intensity,W=A.distance,V=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=L.r*k,d+=L.g*k,m+=L.b*k;else if(A.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(A.sh.coefficients[X],k);P++}else if(A.isDirectionalLight){const X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const $=A.shadow,B=t.get(A);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=A.shadow.matrix,E++}i.directional[g]=X,g++}else if(A.isSpotLight){const X=e.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(L).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,i.spot[u]=X;const $=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,$.updateMatrices(A),A.castShadow&&D++),i.spotLightMatrix[u]=$.matrix,A.castShadow){const B=t.get(A);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.spotShadow[u]=B,i.spotShadowMap[u]=V,T++}u++}else if(A.isRectAreaLight){const X=e.get(A);X.color.copy(L).multiplyScalar(k),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=X,p++}else if(A.isPointLight){const X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){const $=A.shadow,B=t.get(A);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=A.shadow.matrix,y++}i.point[_]=X,_++}else if(A.isHemisphereLight){const X=e.get(A);X.skyColor.copy(A.color).multiplyScalar(k),X.groundColor.copy(A.groundColor).multiplyScalar(k),i.hemi[f]=X,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=m;const R=i.hash;(R.directionalLength!==g||R.pointLength!==_||R.spotLength!==u||R.rectAreaLength!==p||R.hemiLength!==f||R.numDirectionalShadows!==E||R.numPointShadows!==y||R.numSpotShadows!==T||R.numSpotMaps!==w||R.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,R.directionalLength=g,R.pointLength=_,R.spotLength=u,R.rectAreaLength=p,R.hemiLength=f,R.numDirectionalShadows=E,R.numPointShadows=y,R.numSpotShadows=T,R.numSpotMaps=w,R.numLightProbes=P,i.version=d_++)}function l(c,h){let d=0,m=0,g=0,_=0,u=0;const p=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){const T=i.hemi[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),u++}}}return{setup:o,setupView:l,state:i}}function Vc(n){const e=new p_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function m_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Vc(n),e.set(s,[o])):r>=a.length?(o=new Vc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function v_(n,e,t){let i=new Vu;const s=new Re,r=new Re,a=new ot,o=new Of({depthPacking:Ld}),l=new kf,c={},h=t.maxTextureSize,d={[ii]:Wt,[Wt]:ii,[cn]:cn},m=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:g_,fragmentShader:__}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const _=new lt;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const u=new Ft(_,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let f=this.type;this.render=function(D,P,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),v=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),L=n.state;L.setBlending(On),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=f!==Hn&&this.type===Hn,W=f===Hn&&this.type!==Hn;for(let V=0,X=D.length;V<X;V++){const $=D[V],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const oe=B.getFrameExtents();if(s.multiply(oe),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,B.mapSize.y=r.y)),B.map===null||k===!0||W===!0){const be=this.type!==Hn?{minFilter:jt,magFilter:jt}:{};B.map!==null&&B.map.dispose(),B.map=new Jt(s.x,s.y,be),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const he=B.getViewportCount();for(let be=0;be<he;be++){const Ge=B.getViewport(be);a.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),L.viewport(a),B.updateMatrices($,be),i=B.getFrustum(),T(P,R,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Hn&&E(B,R),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(S,v,A)};function E(D,P){const R=e.update(u);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Jt(s.x,s.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,R,m,u,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,R,g,u,null)}function y(D,P,R,S){let v=null;const A=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(A!==void 0)v=A;else if(v=R.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=v.uuid,k=P.uuid;let W=c[L];W===void 0&&(W={},c[L]=W);let V=W[k];V===void 0&&(V=v.clone(),W[k]=V,P.addEventListener("dispose",w)),v=V}if(v.visible=P.visible,v.wireframe=P.wireframe,S===Hn?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:d[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=n.properties.get(v);L.light=R}return v}function T(D,P,R,S,v){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&v===Hn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);const k=e.update(D),W=D.material;if(Array.isArray(W)){const V=k.groups;for(let X=0,$=V.length;X<$;X++){const B=V[X],oe=W[B.materialIndex];if(oe&&oe.visible){const he=y(D,oe,S,v);D.onBeforeShadow(n,D,P,R,k,he,B),n.renderBufferDirect(R,null,k,he,D,B),D.onAfterShadow(n,D,P,R,k,he,B)}}}else if(W.visible){const V=y(D,W,S,v);D.onBeforeShadow(n,D,P,R,k,V,null),n.renderBufferDirect(R,null,k,V,D,null),D.onAfterShadow(n,D,P,R,k,V,null)}}const L=D.children;for(let k=0,W=L.length;k<W;k++)T(L[k],P,R,S,v)}function w(D){D.target.removeEventListener("dispose",w);for(const R in c){const S=c[R],v=D.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const x_={[la]:ca,[ua]:fa,[ha]:pa,[es]:da,[ca]:la,[fa]:ua,[pa]:ha,[da]:es};function S_(n,e){function t(){let I=!1;const te=new ot;let se=null;const fe=new ot(0,0,0,0);return{setMask:function(J){se!==J&&!I&&(n.colorMask(J,J,J,J),se=J)},setLocked:function(J){I=J},setClear:function(J,K,ge,Ue,rt){rt===!0&&(J*=Ue,K*=Ue,ge*=Ue),te.set(J,K,ge,Ue),fe.equals(te)===!1&&(n.clearColor(J,K,ge,Ue),fe.copy(te))},reset:function(){I=!1,se=null,fe.set(-1,0,0,0)}}}function i(){let I=!1,te=!1,se=null,fe=null,J=null;return{setReversed:function(K){if(te!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),te=K;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(K){K?j(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(K){se!==K&&!I&&(n.depthMask(K),se=K)},setFunc:function(K){if(te&&(K=x_[K]),fe!==K){switch(K){case la:n.depthFunc(n.NEVER);break;case ca:n.depthFunc(n.ALWAYS);break;case ua:n.depthFunc(n.LESS);break;case es:n.depthFunc(n.LEQUAL);break;case ha:n.depthFunc(n.EQUAL);break;case da:n.depthFunc(n.GEQUAL);break;case fa:n.depthFunc(n.GREATER);break;case pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=K}},setLocked:function(K){I=K},setClear:function(K){J!==K&&(te&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){I=!1,se=null,fe=null,J=null,te=!1}}}function s(){let I=!1,te=null,se=null,fe=null,J=null,K=null,ge=null,Ue=null,rt=null;return{setTest:function(Ze){I||(Ze?j(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Ze){te!==Ze&&!I&&(n.stencilMask(Ze),te=Ze)},setFunc:function(Ze,wn,vn){(se!==Ze||fe!==wn||J!==vn)&&(n.stencilFunc(Ze,wn,vn),se=Ze,fe=wn,J=vn)},setOp:function(Ze,wn,vn){(K!==Ze||ge!==wn||Ue!==vn)&&(n.stencilOp(Ze,wn,vn),K=Ze,ge=wn,Ue=vn)},setLocked:function(Ze){I=Ze},setClear:function(Ze){rt!==Ze&&(n.clearStencil(Ze),rt=Ze)},reset:function(){I=!1,te=null,se=null,fe=null,J=null,K=null,ge=null,Ue=null,rt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},m=new WeakMap,g=[],_=null,u=!1,p=null,f=null,E=null,y=null,T=null,w=null,D=null,P=new Be(0,0,0),R=0,S=!1,v=null,A=null,L=null,k=null,W=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=$>=2);let oe=null,he={};const be=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),st=new ot().fromArray(be),ct=new ot().fromArray(Ge);function $e(I,te,se,fe){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<se;ge++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const q={};q[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(es),De(!1),_e(kl),j(n.CULL_FACE),ut(On);function j(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function pe(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ie(I,te){return d[I]!==te?(n.bindFramebuffer(I,te),d[I]=te,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=te),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ee(I,te){let se=g,fe=!1;if(I){se=m.get(te),se===void 0&&(se=[],m.set(te,se));const J=I.textures;if(se.length!==J.length||se[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ge=J.length;K<ge;K++)se[K]=n.COLOR_ATTACHMENT0+K;se.length=J.length,fe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,fe=!0);fe&&n.drawBuffers(se)}function Xe(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Pt={[mi]:n.FUNC_ADD,[sd]:n.FUNC_SUBTRACT,[rd]:n.FUNC_REVERSE_SUBTRACT};Pt[od]=n.MIN,Pt[ad]=n.MAX;const C={[ld]:n.ZERO,[cd]:n.ONE,[ud]:n.SRC_COLOR,[oa]:n.SRC_ALPHA,[gd]:n.SRC_ALPHA_SATURATE,[pd]:n.DST_COLOR,[dd]:n.DST_ALPHA,[hd]:n.ONE_MINUS_SRC_COLOR,[aa]:n.ONE_MINUS_SRC_ALPHA,[md]:n.ONE_MINUS_DST_COLOR,[fd]:n.ONE_MINUS_DST_ALPHA,[_d]:n.CONSTANT_COLOR,[vd]:n.ONE_MINUS_CONSTANT_COLOR,[xd]:n.CONSTANT_ALPHA,[Sd]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(I,te,se,fe,J,K,ge,Ue,rt,Ze){if(I===On){u===!0&&(pe(n.BLEND),u=!1);return}if(u===!1&&(j(n.BLEND),u=!0),I!==id){if(I!==p||Ze!==S){if((f!==mi||T!==mi)&&(n.blendEquation(n.FUNC_ADD),f=mi,T=mi),Ze)switch(I){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ps:n.blendFunc(n.ONE,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,y=null,w=null,D=null,P.set(0,0,0),R=0,p=I,S=Ze}return}J=J||te,K=K||se,ge=ge||fe,(te!==f||J!==T)&&(n.blendEquationSeparate(Pt[te],Pt[J]),f=te,T=J),(se!==E||fe!==y||K!==w||ge!==D)&&(n.blendFuncSeparate(C[se],C[fe],C[K],C[ge]),E=se,y=fe,w=K,D=ge),(Ue.equals(P)===!1||rt!==R)&&(n.blendColor(Ue.r,Ue.g,Ue.b,rt),P.copy(Ue),R=rt),p=I,S=!1}function He(I,te){I.side===cn?pe(n.CULL_FACE):j(n.CULL_FACE);let se=I.side===Wt;te&&(se=!se),De(se),I.blending===ji&&I.transparent===!1?ut(On):ut(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function _e(I){I!==ed?(j(n.CULL_FACE),I!==A&&(I===kl?n.cullFace(n.BACK):I===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),A=I}function ht(I){I!==L&&(X&&n.lineWidth(I),L=I)}function ve(I,te,se){I?(j(n.POLYGON_OFFSET_FILL),(k!==te||W!==se)&&(n.polygonOffset(te,se),k=te,W=se)):pe(n.POLYGON_OFFSET_FILL)}function Oe(I){I?j(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Et(I){I===void 0&&(I=n.TEXTURE0+V-1),oe!==I&&(n.activeTexture(I),oe=I)}function gt(I,te,se){se===void 0&&(oe===null?se=n.TEXTURE0+V-1:se=oe);let fe=he[se];fe===void 0&&(fe={type:void 0,texture:void 0},he[se]=fe),(fe.type!==I||fe.texture!==te)&&(oe!==se&&(n.activeTexture(se),oe=se),n.bindTexture(I,te||q[I]),fe.type=I,fe.texture=te)}function b(){const I=he[oe];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){st.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function Pe(I){ct.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ct.copy(I))}function Me(I,te){let se=c.get(te);se===void 0&&(se=new WeakMap,c.set(te,se));let fe=se.get(I);fe===void 0&&(fe=n.getUniformBlockIndex(te,I.name),se.set(I,fe))}function ae(I,te){const fe=c.get(te).get(I);l.get(te)!==fe&&(n.uniformBlockBinding(te,fe,I.__bindingPointIndex),l.set(te,fe))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,he={},d={},m=new WeakMap,g=[],_=null,u=!1,p=null,f=null,E=null,y=null,T=null,w=null,D=null,P=new Be(0,0,0),R=0,S=!1,v=null,A=null,L=null,k=null,W=null,st.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:pe,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Xe,setBlending:ut,setMaterial:He,setFlipSided:De,setCullFace:_e,setLineWidth:ht,setPolygonOffset:ve,setScissorTest:Oe,activeTexture:Et,bindTexture:gt,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Se,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:xe,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:Te,scissor:ce,viewport:Pe,reset:Fe}}function M_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return g?new OffscreenCanvas(b,x):$r("canvas")}function u(b,x,F){let Y=1;const Z=gt(b);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(Y*Z.width),Te=Math.floor(Y*Z.height);d===void 0&&(d=_(G,Te));const ie=x?_(G,Te):d;return ie.width=G,ie.height=Te,ie.getContext("2d").drawImage(b,0,0,G,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+Te+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function p(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,x,F,Y,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=x;if(x===n.RED&&(F===n.FLOAT&&(G=n.R32F),F===n.HALF_FLOAT&&(G=n.R16F),F===n.UNSIGNED_BYTE&&(G=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.R8UI),F===n.UNSIGNED_SHORT&&(G=n.R16UI),F===n.UNSIGNED_INT&&(G=n.R32UI),F===n.BYTE&&(G=n.R8I),F===n.SHORT&&(G=n.R16I),F===n.INT&&(G=n.R32I)),x===n.RG&&(F===n.FLOAT&&(G=n.RG32F),F===n.HALF_FLOAT&&(G=n.RG16F),F===n.UNSIGNED_BYTE&&(G=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RG8UI),F===n.UNSIGNED_SHORT&&(G=n.RG16UI),F===n.UNSIGNED_INT&&(G=n.RG32UI),F===n.BYTE&&(G=n.RG8I),F===n.SHORT&&(G=n.RG16I),F===n.INT&&(G=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGB8UI),F===n.UNSIGNED_SHORT&&(G=n.RGB16UI),F===n.UNSIGNED_INT&&(G=n.RGB32UI),F===n.BYTE&&(G=n.RGB8I),F===n.SHORT&&(G=n.RGB16I),F===n.INT&&(G=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),F===n.UNSIGNED_INT&&(G=n.RGBA32UI),F===n.BYTE&&(G=n.RGBA8I),F===n.SHORT&&(G=n.RGBA16I),F===n.INT&&(G=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),x===n.RGBA){const Te=Z?qr:Ke.getTransfer(Y);F===n.FLOAT&&(G=n.RGBA32F),F===n.HALF_FLOAT&&(G=n.RGBA16F),F===n.UNSIGNED_BYTE&&(G=Te===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function T(b,x){let F;return b?x===null||x===Ti||x===Ls?F=n.DEPTH24_STENCIL8:x===Fn?F=n.DEPTH32F_STENCIL8:x===Ds&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===Ls?F=n.DEPTH_COMPONENT24:x===Fn?F=n.DEPTH_COMPONENT32F:x===Ds&&(F=n.DEPTH_COMPONENT16),F}function w(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==jt&&b.minFilter!==bn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function D(b){const x=b.target;x.removeEventListener("dispose",D),R(x),x.isVideoTexture&&h.delete(x)}function P(b){const x=b.target;x.removeEventListener("dispose",P),v(x)}function R(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,Y=m.get(F);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(b),Object.keys(Y).length===0&&m.delete(F)}i.remove(b)}function S(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,Y=m.get(F);delete Y[x.__cacheKey],a.memory.textures--}function v(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const G=i.get(F[Y]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(F[Y])}i.remove(b)}let A=0;function L(){A=0}function k(){const b=A;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),A+=1,b}function W(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function V(b,x){const F=i.get(b);if(b.isVideoTexture&&Oe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,x);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function X(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function $(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function B(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){j(F,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const oe={[_a]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[va]:n.MIRRORED_REPEAT},he={[jt]:n.NEAREST,[Pd]:n.NEAREST_MIPMAP_NEAREST,[Gs]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},be={[Hd]:n.NEVER,[Bd]:n.ALWAYS,[Nd]:n.LESS,[Cu]:n.LEQUAL,[Fd]:n.EQUAL,[kd]:n.GEQUAL,[zd]:n.GREATER,[Od]:n.NOTEQUAL};function Ge(b,x){if(x.type===Fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===bn||x.magFilter===go||x.magFilter===Gs||x.magFilter===vi||x.minFilter===bn||x.minFilter===go||x.minFilter===Gs||x.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,oe[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,he[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===jt||x.minFilter!==Gs&&x.minFilter!==vi||x.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",D));const Y=x.source;let Z=m.get(Y);Z===void 0&&(Z={},m.set(Y,Z));const G=W(x);if(G!==b.__cacheKey){Z[G]===void 0&&(Z[G]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[G].usedTimes++;const Te=Z[b.__cacheKey];Te!==void 0&&(Z[b.__cacheKey].usedTimes--,Te.usedTimes===0&&S(x)),b.__cacheKey=G,b.__webglTexture=Z[G].texture}return F}function ct(b,x,F){return Math.floor(Math.floor(b/F)/x)}function $e(b,x,F,Y){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{G.sort((ee,ce)=>ee.start-ce.start);let Te=0;for(let ee=1;ee<G.length;ee++){const ce=G[Te],Pe=G[ee],Me=ce.start+ce.count,ae=ct(Pe.start,x.width,4),Fe=ct(ce.start,x.width,4);Pe.start<=Me+1&&ae===Fe&&ct(Pe.start+Pe.count-1,x.width,4)===ae?ce.count=Math.max(ce.count,Pe.start+Pe.count-ce.start):(++Te,G[Te]=Pe)}G.length=Te+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ee=0,ce=G.length;ee<ce;ee++){const Pe=G[ee],Me=Math.floor(Pe.start/4),ae=Math.ceil(Pe.count/4),Fe=Me%x.width,I=Math.floor(Me/x.width),te=ae,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Fe,I,te,se,F,Y,x.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function q(b,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const Z=st(b,x),G=x.source;t.bindTexture(Y,b.__webglTexture,n.TEXTURE0+F);const Te=i.get(G);if(G.version!==Te.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const ie=Ke.getPrimaries(Ke.workingColorSpace),xe=x.colorSpace===Qn?null:Ke.getPrimaries(x.colorSpace),Se=x.colorSpace===Qn||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ee=u(x.image,!1,s.maxTextureSize);ee=Et(x,ee);const ce=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type);let Me=y(x.internalFormat,ce,Pe,x.colorSpace,x.isVideoTexture);Ge(Y,x);let ae;const Fe=x.mipmaps,I=x.isVideoTexture!==!0,te=Te.__version===void 0||Z===!0,se=G.dataReady,fe=w(x,ee);if(x.isDepthTexture)Me=T(x.format===Us,x.type),te&&(I?t.texStorage2D(n.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,Pe,null));else if(x.isDataTexture)if(Fe.length>0){I&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)ae=Fe[J],I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,Pe,ae.data):t.texImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ce,Pe,ae.data);x.generateMipmaps=!1}else I?(te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height),se&&$e(x,ee,ce,Pe)):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,ce,Pe,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,Fe[0].width,Fe[0].height,ee.depth);for(let J=0,K=Fe.length;J<K;J++)if(ae=Fe[J],x.format!==mn)if(ce!==null)if(I){if(se)if(x.layerUpdates.size>0){const ge=xc(ae.width,ae.height,x.format,x.type);for(const Ue of x.layerUpdates){const rt=ae.data.subarray(Ue*ge/ae.data.BYTES_PER_ELEMENT,(Ue+1)*ge/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ue,ae.width,ae.height,1,ce,rt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,ce,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,ce,Pe,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,ce,Pe,ae.data)}else{I&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)ae=Fe[J],x.format!==mn?ce!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,ce,Pe,ae.data):t.texImage2D(n.TEXTURE_2D,J,Me,ae.width,ae.height,0,ce,Pe,ae.data)}else if(x.isDataArrayTexture)if(I){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,ee.width,ee.height,ee.depth),se)if(x.layerUpdates.size>0){const J=xc(ee.width,ee.height,x.format,x.type);for(const K of x.layerUpdates){const ge=ee.data.subarray(K*J/ee.data.BYTES_PER_ELEMENT,(K+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ce,Pe,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(x.isData3DTexture)I?(te&&t.texStorage3D(n.TEXTURE_3D,fe,Me,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(x.isFramebufferTexture){if(te)if(I)t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height);else{let J=ee.width,K=ee.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Me,J,K,0,ce,Pe,null),J>>=1,K>>=1}}else if(Fe.length>0){if(I&&te){const J=gt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,fe,Me,J.width,J.height)}for(let J=0,K=Fe.length;J<K;J++)ae=Fe[J],I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce,Pe,ae):t.texImage2D(n.TEXTURE_2D,J,Me,ce,Pe,ae);x.generateMipmaps=!1}else if(I){if(te){const J=gt(ee);t.texStorage2D(n.TEXTURE_2D,fe,Me,J.width,J.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Pe,ee)}else t.texImage2D(n.TEXTURE_2D,0,Me,ce,Pe,ee);p(x)&&f(Y),Te.__version=G.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function j(b,x,F){if(x.image.length!==6)return;const Y=st(b,x),Z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const G=i.get(Z);if(Z.version!==G.__version||Y===!0){t.activeTexture(n.TEXTURE0+F);const Te=Ke.getPrimaries(Ke.workingColorSpace),ie=x.colorSpace===Qn?null:Ke.getPrimaries(x.colorSpace),xe=x.colorSpace===Qn||Te===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Se&&!ee?ce[K]=u(x.image[K],!0,s.maxCubemapSize):ce[K]=ee?x.image[K].image:x.image[K],ce[K]=Et(x,ce[K]);const Pe=ce[0],Me=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),Fe=y(x.internalFormat,Me,ae,x.colorSpace),I=x.isVideoTexture!==!0,te=G.__version===void 0||Y===!0,se=Z.dataReady;let fe=w(x,Pe);Ge(n.TEXTURE_CUBE_MAP,x);let J;if(Se){I&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Fe,Pe.width,Pe.height);for(let K=0;K<6;K++){J=ce[K].mipmaps;for(let ge=0;ge<J.length;ge++){const Ue=J[ge];x.format!==mn?Me!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Fe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Me,ae,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Fe,Ue.width,Ue.height,0,Me,ae,Ue.data)}}}else{if(J=x.mipmaps,I&&te){J.length>0&&fe++;const K=gt(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Me,ae,ce[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ce[K].width,ce[K].height,0,Me,ae,ce[K].data);for(let ge=0;ge<J.length;ge++){const rt=J[ge].image[K].image;I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,rt.width,rt.height,Me,ae,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Fe,rt.width,rt.height,0,Me,ae,rt.data)}}else{I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,ae,ce[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Me,ae,ce[K]);for(let ge=0;ge<J.length;ge++){const Ue=J[ge];I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Me,ae,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Fe,Me,ae,Ue.image[K])}}}p(x)&&f(n.TEXTURE_CUBE_MAP),G.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function pe(b,x,F,Y,Z,G){const Te=r.convert(F.format,F.colorSpace),ie=r.convert(F.type),xe=y(F.internalFormat,Te,ie,F.colorSpace),Se=i.get(x),ee=i.get(F);if(ee.__renderTarget=x,!Se.__hasExternalTextures){const ce=Math.max(1,x.width>>G),Pe=Math.max(1,x.height>>G);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,xe,ce,Pe,x.depth,0,Te,ie,null):t.texImage2D(Z,G,xe,ce,Pe,0,Te,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,ht(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,ee.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,G=T(x.stencilBuffer,Z),Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=ht(x);ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,G,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,G,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,G,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,b)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const G=Y[Z],Te=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),xe=y(G.internalFormat,Te,ie,G.colorSpace),Se=ht(x);F&&ve(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,xe,x.width,x.height):ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const Z=Y.__webglTexture,G=ht(x);if(x.depthTexture.format===Is)ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Us)ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=b.texture.mipmaps;Y&&Y.length>0?Ee(x.__webglFramebuffer[0],b):Ee(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ie(x.__webglDepthbuffer[Y],b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,G)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ie(x.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(b,x,F){const Y=i.get(b);x!==void 0&&pe(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xe(b)}function C(b){const x=b.texture,F=i.get(b),Y=i.get(x);b.addEventListener("dispose",P);const Z=b.textures,G=b.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)F.__webglFramebuffer[ie][xe]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ie=0,xe=Z.length;ie<xe;ie++){const Se=i.get(Z[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&ve(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const xe=Z[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const Se=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),ce=y(xe.internalFormat,Se,ee,xe.colorSpace,b.isXRRenderTarget===!0),Pe=ht(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ce,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(F.__webglFramebuffer[ie][xe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else pe(F.__webglFramebuffer[ie],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ie=0,xe=Z.length;ie<xe;ie++){const Se=Z[ie],ee=i.get(Se);let ce=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Ge(ce,Se),pe(F.__webglFramebuffer,b,Se,n.COLOR_ATTACHMENT0+ie,ce,0),p(Se)&&f(ce)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),Ge(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(F.__webglFramebuffer[xe],b,x,n.COLOR_ATTACHMENT0,ie,xe);else pe(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ie,0);p(x)&&f(ie),t.unbindTexture()}b.depthBuffer&&Xe(b)}function ut(b){const x=b.textures;for(let F=0,Y=x.length;F<Y;F++){const Z=x[F];if(p(Z)){const G=E(b),Te=i.get(Z).__webglTexture;t.bindTexture(G,Te),f(G),t.unbindTexture()}}}const He=[],De=[];function _e(b){if(b.samples>0){if(ve(b)===!1){const x=b.textures,F=b.width,Y=b.height;let Z=n.COLOR_BUFFER_BIT;const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(b),ie=x.length>1;if(ie)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const xe=b.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=i.get(x[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,n.NEAREST),l===!0&&(He.length=0,De.length=0,He.push(n.COLOR_ATTACHMENT0+Se),b.depthBuffer&&b.resolveDepthBuffer===!1&&(He.push(G),De.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ee=i.get(x[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ht(b){return Math.min(s.maxSamples,b.samples)}function ve(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Oe(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Et(b,x){const F=b.colorSpace,Y=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==is&&F!==Qn&&(Ke.getTransfer(F)===et?(Y!==mn||Z!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function gt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Pt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function T_(n,e){function t(i,s=Qn){let r;const a=Ke.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mu)return n.BYTE;if(i===Tu)return n.SHORT;if(i===Ds)return n.UNSIGNED_SHORT;if(i===cl)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===bu)return n.ALPHA;if(i===Au)return n.RGB;if(i===mn)return n.RGBA;if(i===Is)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===Ru)return n.RED;if(i===dl)return n.RED_INTEGER;if(i===wu)return n.RG;if(i===fl)return n.RG_INTEGER;if(i===pl)return n.RGBA_INTEGER;if(i===Lr||i===Ir||i===Ur||i===Hr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xa||i===Sa||i===Ma||i===Ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Ea||i===ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Ea)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Aa||i===Ra||i===wa||i===Ca||i===Pa||i===Da||i===La||i===Ia||i===Ua||i===Ha||i===Na||i===Fa||i===za||i===Oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===Ba||i===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ka)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Va||i===Wa||i===Xa||i===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class b_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zt({vertexShader:y_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A_ extends ls{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,m=null,g=null,_=null;const u=typeof XRWebGLBinding<"u",p=new b_,f={},E=t.getContextAttributes();let y=null,T=null;const w=[],D=[],P=new Re;let R=null;const S=new ln;S.viewport=new ot;const v=new ln;v.viewport=new ot;const A=[S,v],L=new Gf;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new Fo,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new Fo,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new Fo,w[q]=j),j.getHandSpace()};function V(q){const j=D.indexOf(q.inputSource);if(j===-1)return;const pe=w[j];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let q=0;q<w.length;q++){const j=D[q];j!==null&&(D[q]=null,w[q].disconnect(j))}k=null,W=null,p.reset();for(const q in f)delete f[q];e.setRenderTarget(y),g=null,m=null,d=null,s=null,T=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return d===null&&u&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),u&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,Ee=null;E.depth&&(Ee=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=E.stencil?Us:Is,Ie=E.stencil?Ls:Ti);const Xe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),m=d.createProjectionLayer(Xe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new Jt(m.textureWidth,m.textureHeight,{format:mn,type:_n,depthTexture:new Xu(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new Jt(g.framebufferWidth,g.framebufferHeight,{format:mn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(q){for(let j=0;j<q.removed.length;j++){const pe=q.removed[j],Ie=D.indexOf(pe);Ie>=0&&(D[Ie]=null,w[Ie].disconnect(pe))}for(let j=0;j<q.added.length;j++){const pe=q.added[j];let Ie=D.indexOf(pe);if(Ie===-1){for(let Xe=0;Xe<w.length;Xe++)if(Xe>=D.length){D.push(pe),Ie=Xe;break}else if(D[Xe]===null){D[Xe]=pe,Ie=Xe;break}if(Ie===-1)break}const Ee=w[Ie];Ee&&Ee.connect(pe)}}const B=new U,oe=new U;function he(q,j,pe){B.setFromMatrixPosition(j.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Ie=B.distanceTo(oe),Ee=j.projectionMatrix.elements,Xe=pe.projectionMatrix.elements,Pt=Ee[14]/(Ee[10]-1),C=Ee[14]/(Ee[10]+1),ut=(Ee[9]+1)/Ee[5],He=(Ee[9]-1)/Ee[5],De=(Ee[8]-1)/Ee[0],_e=(Xe[8]+1)/Xe[0],ht=Pt*De,ve=Pt*_e,Oe=Ie/(-De+_e),Et=Oe*-De;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Et),q.translateZ(Oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const gt=Pt+Oe,b=C+Oe,x=ht-Et,F=ve+(Ie-Et),Y=ut*C/b*gt,Z=He*C/b*gt;q.projectionMatrix.makePerspective(x,F,Y,Z,gt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function be(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,pe=q.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),L.near=v.near=S.near=j,L.far=v.far=S.far=pe,(k!==L.near||W!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,W=L.far),L.layers.mask=q.layers.mask|6,S.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;const Ie=q.parent,Ee=L.cameras;be(L,Ie);for(let Xe=0;Xe<Ee.length;Xe++)be(Ee[Xe],Ie);Ee.length===2?he(L,S,v):L.projectionMatrix.copy(S.projectionMatrix),Ge(q,L,Ie)};function Ge(q,j,pe){pe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(q){l=q,m!==null&&(m.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(q){return f[q]};let st=null;function ct(q,j){if(h=j.getViewerPose(c||a),_=j,h!==null){const pe=h.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let Ie=!1;pe.length!==L.cameras.length&&(L.cameras.length=0,Ie=!0);for(let C=0;C<pe.length;C++){const ut=pe[C];let He=null;if(g!==null)He=g.getViewport(ut);else{const _e=d.getViewSubImage(m,ut);He=_e.viewport,C===0&&(e.setRenderTargetTextures(T,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(T))}let De=A[C];De===void 0&&(De=new ln,De.layers.enable(C),De.viewport=new ot,A[C]=De),De.matrix.fromArray(ut.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ut.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(He.x,He.y,He.width,He.height),C===0&&(L.matrix.copy(De.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ie===!0&&L.cameras.push(De)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){d=i.getBinding();const C=d.getDepthInformation(pe[0]);C&&C.isValid&&C.texture&&p.init(C,s.renderState)}if(Ee&&Ee.includes("camera-access")&&u){e.state.unbindTexture(),d=i.getBinding();for(let C=0;C<pe.length;C++){const ut=pe[C].camera;if(ut){let He=f[ut];He||(He=new Yu,f[ut]=He);const De=d.getCameraImage(ut);He.sourceTexture=De}}}}for(let pe=0;pe<w.length;pe++){const Ie=D[pe],Ee=w[pe];Ie!==null&&Ee!==void 0&&Ee.update(Ie,j,c||a)}st&&st(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const $e=new Ku;$e.setAnimationLoop(ct),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}}const di=new Wn,R_=new mt;function w_(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Fu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,y,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),m(p,f),f.isMeshPhysicalMaterial&&g(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),u(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,T=E.envMapRotation;y&&(p.envMap.value=y,di.copy(T),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),p.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(di)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function u(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C_(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const T=y.program;i.uniformBlockBinding(E,T)}function c(E,y){let T=s[E.id];T===void 0&&(_(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",p));const w=y.program;i.updateUBOMapping(E,w);const D=e.render.frame;r[E.id]!==D&&(m(E),r[E.id]=D)}function h(E){const y=d();E.__bindingPointIndex=y;const T=n.createBuffer(),w=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const y=s[E.id],T=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let D=0,P=T.length;D<P;D++){const R=Array.isArray(T[D])?T[D]:[T[D]];for(let S=0,v=R.length;S<v;S++){const A=R[S];if(g(A,D,S,w)===!0){const L=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let W=0;for(let V=0;V<k.length;V++){const X=k[V],$=u(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,L+W,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,y,T,w){const D=E.value,P=y+"_"+T;if(w[P]===void 0)return typeof D=="number"||typeof D=="boolean"?w[P]=D:w[P]=D.clone(),!0;{const R=w[P];if(typeof D=="number"||typeof D=="boolean"){if(R!==D)return w[P]=D,!0}else if(R.equals(D)===!1)return R.copy(D),!0}return!1}function _(E){const y=E.uniforms;let T=0;const w=16;for(let P=0,R=y.length;P<R;P++){const S=Array.isArray(y[P])?y[P]:[y[P]];for(let v=0,A=S.length;v<A;v++){const L=S[v],k=Array.isArray(L.value)?L.value:[L.value];for(let W=0,V=k.length;W<V;W++){const X=k[W],$=u(X),B=T%w,oe=B%$.boundary,he=B+oe;T+=oe,he!==0&&w-he<$.storage&&(T+=w-he),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=$.storage}}}const D=T%w;return D>0&&(T+=w-D),E.__size=T,E.__cache={},this}function u(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class P_{constructor(e={}){const{canvas:t=of(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=new Uint32Array(4),u=new Int32Array(4);let p=null,f=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=Zt;let D=0,P=0,R=null,S=-1,v=null;const A=new ot,L=new ot;let k=null;const W=new Be(0);let V=0,X=t.width,$=t.height,B=1,oe=null,he=null;const be=new ot(0,0,X,$),Ge=new ot(0,0,X,$);let st=!1;const ct=new Vu;let $e=!1,q=!1;const j=new mt,pe=new U,Ie=new ot,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Pt(){return R===null?B:1}let C=i;function ut(M,H){return t.getContext(M,H)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ll}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const H="webgl2";if(C=ut(H,M),C===null)throw ut(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let He,De,_e,ht,ve,Oe,Et,gt,b,x,F,Y,Z,G,Te,ie,xe,Se,ee,ce,Pe,Me,ae,Fe;function I(){He=new kg(C),He.init(),Me=new T_(C,He),De=new Ig(C,He,e,Me),_e=new S_(C,He),De.reversedDepthBuffer&&m&&_e.buffers.depth.setReversed(!0),ht=new Vg(C),ve=new a_,Oe=new M_(C,He,_e,ve,De,Me,ht),Et=new Hg(T),gt=new Og(T),b=new $f(C),ae=new Dg(C,b),x=new Bg(C,b,ht,ae),F=new Xg(C,x,b,ht),ee=new Wg(C,De,Oe),ie=new Ug(ve),Y=new o_(T,Et,gt,He,De,ae,ie),Z=new w_(T,ve),G=new c_,Te=new m_(He),Se=new Pg(T,Et,gt,_e,F,g,l),xe=new v_(T,F,De),Fe=new C_(C,ht,De,_e),ce=new Lg(C,He,ht),Pe=new Gg(C,He,ht),ht.programs=Y.programs,T.capabilities=De,T.extensions=He,T.properties=ve,T.renderLists=G,T.shadowMap=xe,T.state=_e,T.info=ht}I();const te=new A_(T,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=He.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=He.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(X,$,!1))},this.getSize=function(M){return M.set(X,$)},this.setSize=function(M,H,z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,$=H,t.width=Math.floor(M*B),t.height=Math.floor(H*B),z===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(X*B,$*B).floor()},this.setDrawingBufferSize=function(M,H,z){X=M,$=H,B=z,t.width=Math.floor(M*z),t.height=Math.floor(H*z),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,H,z,O){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,H,z,O),_e.viewport(A.copy(be).multiplyScalar(B).round())},this.getScissor=function(M){return M.copy(Ge)},this.setScissor=function(M,H,z,O){M.isVector4?Ge.set(M.x,M.y,M.z,M.w):Ge.set(M,H,z,O),_e.scissor(L.copy(Ge).multiplyScalar(B).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){_e.setScissorTest(st=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){he=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,z=!0){let O=0;if(M){let N=!1;if(R!==null){const Q=R.texture.format;N=Q===pl||Q===fl||Q===dl}if(N){const Q=R.texture.type,le=Q===_n||Q===Ti||Q===Ds||Q===Ls||Q===ul||Q===hl,me=Se.getClearColor(),de=Se.getClearAlpha(),Ce=me.r,Le=me.g,Ae=me.b;le?(_[0]=Ce,_[1]=Le,_[2]=Ae,_[3]=de,C.clearBufferuiv(C.COLOR,0,_)):(u[0]=Ce,u[1]=Le,u[2]=Ae,u[3]=de,C.clearBufferiv(C.COLOR,0,u))}else O|=C.COLOR_BUFFER_BIT}H&&(O|=C.DEPTH_BUFFER_BIT),z&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Se.dispose(),G.dispose(),Te.dispose(),ve.dispose(),Et.dispose(),gt.dispose(),F.dispose(),ae.dispose(),Fe.dispose(),Y.dispose(),te.dispose(),te.removeEventListener("sessionstart",vn),te.removeEventListener("sessionend",Ul),ri.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=ht.autoReset,H=xe.enabled,z=xe.autoUpdate,O=xe.needsUpdate,N=xe.type;I(),ht.autoReset=M,xe.enabled=H,xe.autoUpdate=z,xe.needsUpdate=O,xe.type=N}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){const H=M.target;H.removeEventListener("dispose",K),ge(H)}function ge(M){Ue(M),ve.remove(M)}function Ue(M){const H=ve.get(M).programs;H!==void 0&&(H.forEach(function(z){Y.releaseProgram(z)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,z,O,N,Q){H===null&&(H=Ee);const le=N.isMesh&&N.matrixWorld.determinant()<0,me=Kh(M,H,z,O,N);_e.setMaterial(O,le);let de=z.index,Ce=1;if(O.wireframe===!0){if(de=x.getWireframeAttribute(z),de===void 0)return;Ce=2}const Le=z.drawRange,Ae=z.attributes.position;let Ve=Le.start*Ce,Qe=(Le.start+Le.count)*Ce;Q!==null&&(Ve=Math.max(Ve,Q.start*Ce),Qe=Math.min(Qe,(Q.start+Q.count)*Ce)),de!==null?(Ve=Math.max(Ve,0),Qe=Math.min(Qe,de.count)):Ae!=null&&(Ve=Math.max(Ve,0),Qe=Math.min(Qe,Ae.count));const pt=Qe-Ve;if(pt<0||pt===1/0)return;ae.setup(N,O,me,z,de);let at,it=ce;if(de!==null&&(at=b.get(de),it=Pe,it.setIndex(at)),N.isMesh)O.wireframe===!0?(_e.setLineWidth(O.wireframeLinewidth*Pt()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(N.isLine){let we=O.linewidth;we===void 0&&(we=1),_e.setLineWidth(we*Pt()),N.isLineSegments?it.setMode(C.LINES):N.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else N.isPoints?it.setMode(C.POINTS):N.isSprite&&it.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const we=N._multiDrawStarts,dt=N._multiDrawCounts,Ye=N._multiDrawCount,Xt=de?b.get(de).bytesPerElement:1,Ei=ve.get(O).currentProgram.getUniforms();for(let Yt=0;Yt<Ye;Yt++)Ei.setValue(C,"_gl_DrawID",Yt),it.render(we[Yt]/Xt,dt[Yt])}else if(N.isInstancedMesh)it.renderInstances(Ve,pt,N.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,dt=Math.min(z.instanceCount,we);it.renderInstances(Ve,pt,dt)}else it.render(Ve,pt)};function rt(M,H,z){M.transparent===!0&&M.side===cn&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,Bs(M,H,z),M.side=ii,M.needsUpdate=!0,Bs(M,H,z),M.side=cn):Bs(M,H,z)}this.compile=function(M,H,z=null){z===null&&(z=M),f=Te.get(z),f.init(H),y.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(H.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),M!==z&&M.traverseVisible(function(N){N.isLight&&N.layers.test(H.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const O=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const me=Q[le];rt(me,z,N),O.add(me)}else rt(Q,z,N),O.add(Q)}),f=y.pop(),O},this.compileAsync=function(M,H,z=null){const O=this.compile(M,H,z);return new Promise(N=>{function Q(){if(O.forEach(function(le){ve.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){N(M);return}setTimeout(Q,10)}He.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ze=null;function wn(M){Ze&&Ze(M)}function vn(){ri.stop()}function Ul(){ri.start()}const ri=new Ku;ri.setAnimationLoop(wn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(M){Ze=M,te.setAnimationLoop(M),M===null?ri.stop():ri.start()},te.addEventListener("sessionstart",vn),te.addEventListener("sessionend",Ul),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(H),H=te.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,H,R),f=Te.get(M,y.length),f.init(H),y.push(f),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ct.setFromProjectionMatrix(j,An,H.reversedDepth),q=this.localClippingEnabled,$e=ie.init(this.clippingPlanes,q),p=G.get(M,E.length),p.init(),E.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=T.xr.getDepthSensingMesh();Q!==null&&po(Q,H,-1/0,T.sortObjects)}po(M,H,0,T.sortObjects),p.finish(),T.sortObjects===!0&&p.sort(oe,he),Xe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Xe&&Se.addToRenderList(p,M),this.info.render.frame++,$e===!0&&ie.beginShadows();const z=f.state.shadowsArray;xe.render(z,M,H),$e===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,N=p.transmissive;if(f.setupLights(),H.isArrayCamera){const Q=H.cameras;if(N.length>0)for(let le=0,me=Q.length;le<me;le++){const de=Q[le];Nl(O,N,M,de)}Xe&&Se.render(M);for(let le=0,me=Q.length;le<me;le++){const de=Q[le];Hl(p,M,de,de.viewport)}}else N.length>0&&Nl(O,N,M,H),Xe&&Se.render(M),Hl(p,M,H);R!==null&&P===0&&(Oe.updateMultisampleRenderTarget(R),Oe.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(T,M,H),ae.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(f=y[y.length-1],$e===!0&&ie.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function po(M,H,z,O){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ct.intersectsSprite(M)){O&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const le=F.update(M),me=M.material;me.visible&&p.push(M,le,me,z,Ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ct.intersectsObject(M))){const le=F.update(M),me=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(me)){const de=le.groups;for(let Ce=0,Le=de.length;Ce<Le;Ce++){const Ae=de[Ce],Ve=me[Ae.materialIndex];Ve&&Ve.visible&&p.push(M,le,Ve,z,Ie.z,Ae)}}else me.visible&&p.push(M,le,me,z,Ie.z,null)}}const Q=M.children;for(let le=0,me=Q.length;le<me;le++)po(Q[le],H,z,O)}function Hl(M,H,z,O){const N=M.opaque,Q=M.transmissive,le=M.transparent;f.setupLightsView(z),$e===!0&&ie.setGlobalState(T.clippingPlanes,z),O&&_e.viewport(A.copy(O)),N.length>0&&ks(N,H,z),Q.length>0&&ks(Q,H,z),le.length>0&&ks(le,H,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Nl(M,H,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new Jt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?kn:_n,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const Q=f.state.transmissionRenderTarget[O.id],le=O.viewport||A;Q.setSize(le.z*T.transmissionResolutionScale,le.w*T.transmissionResolutionScale);const me=T.getRenderTarget(),de=T.getActiveCubeFace(),Ce=T.getActiveMipmapLevel();T.setRenderTarget(Q),T.getClearColor(W),V=T.getClearAlpha(),V<1&&T.setClearColor(16777215,.5),T.clear(),Xe&&Se.render(z);const Le=T.toneMapping;T.toneMapping=ei;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),$e===!0&&ie.setGlobalState(T.clippingPlanes,O),ks(M,z,O),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Qe=0,pt=H.length;Qe<pt;Qe++){const at=H[Qe],it=at.object,we=at.geometry,dt=at.material,Ye=at.group;if(dt.side===cn&&it.layers.test(O.layers)){const Xt=dt.side;dt.side=Wt,dt.needsUpdate=!0,Fl(it,z,O,we,dt,Ye),dt.side=Xt,dt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}T.setRenderTarget(me,de,Ce),T.setClearColor(W,V),Ae!==void 0&&(O.viewport=Ae),T.toneMapping=Le}function ks(M,H,z){const O=H.isScene===!0?H.overrideMaterial:null;for(let N=0,Q=M.length;N<Q;N++){const le=M[N],me=le.object,de=le.geometry,Ce=le.group;let Le=le.material;Le.allowOverride===!0&&O!==null&&(Le=O),me.layers.test(z.layers)&&Fl(me,H,z,de,Le,Ce)}}function Fl(M,H,z,O,N,Q){M.onBeforeRender(T,H,z,O,N,Q),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(T,H,z,O,M,Q),N.transparent===!0&&N.side===cn&&N.forceSinglePass===!1?(N.side=Wt,N.needsUpdate=!0,T.renderBufferDirect(z,H,O,N,M,Q),N.side=ii,N.needsUpdate=!0,T.renderBufferDirect(z,H,O,N,M,Q),N.side=cn):T.renderBufferDirect(z,H,O,N,M,Q),M.onAfterRender(T,H,z,O,N,Q)}function Bs(M,H,z){H.isScene!==!0&&(H=Ee);const O=ve.get(M),N=f.state.lights,Q=f.state.shadowsArray,le=N.state.version,me=Y.getParameters(M,N.state,Q,H,z),de=Y.getProgramCacheKey(me);let Ce=O.programs;O.environment=M.isMeshStandardMaterial?H.environment:null,O.fog=H.fog,O.envMap=(M.isMeshStandardMaterial?gt:Et).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",K),Ce=new Map,O.programs=Ce);let Le=Ce.get(de);if(Le!==void 0){if(O.currentProgram===Le&&O.lightsStateVersion===le)return Ol(M,me),Le}else me.uniforms=Y.getUniforms(M),M.onBeforeCompile(me,T),Le=Y.acquireProgram(me,de),Ce.set(de,Le),O.uniforms=me.uniforms;const Ae=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),Ol(M,me),O.needsLights=Zh(M),O.lightsStateVersion=le,O.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Le,O.uniformsList=null,Le}function zl(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=Nr.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function Ol(M,H){const z=ve.get(M);z.outputColorSpace=H.outputColorSpace,z.batching=H.batching,z.batchingColor=H.batchingColor,z.instancing=H.instancing,z.instancingColor=H.instancingColor,z.instancingMorph=H.instancingMorph,z.skinning=H.skinning,z.morphTargets=H.morphTargets,z.morphNormals=H.morphNormals,z.morphColors=H.morphColors,z.morphTargetsCount=H.morphTargetsCount,z.numClippingPlanes=H.numClippingPlanes,z.numIntersection=H.numClipIntersection,z.vertexAlphas=H.vertexAlphas,z.vertexTangents=H.vertexTangents,z.toneMapping=H.toneMapping}function Kh(M,H,z,O,N){H.isScene!==!0&&(H=Ee),Oe.resetTextureUnits();const Q=H.fog,le=O.isMeshStandardMaterial?H.environment:null,me=R===null?T.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:is,de=(O.isMeshStandardMaterial?gt:Et).get(O.envMap||le),Ce=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ae=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let pt=ei;O.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pt=T.toneMapping);const at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=at!==void 0?at.length:0,we=ve.get(O),dt=f.state.lights;if($e===!0&&(q===!0||M!==v)){const Ut=M===v&&O.id===S;ie.setState(O,M,Ut)}let Ye=!1;O.version===we.__version?(we.needsLights&&we.lightsStateVersion!==dt.state.version||we.outputColorSpace!==me||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==de||O.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Le||we.morphTargets!==Ae||we.morphNormals!==Ve||we.morphColors!==Qe||we.toneMapping!==pt||we.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,we.__version=O.version);let Xt=we.currentProgram;Ye===!0&&(Xt=Bs(O,H,N));let Ei=!1,Yt=!1,fs=!1;const ft=Xt.getUniforms(),en=we.uniforms;if(_e.useProgram(Xt.program)&&(Ei=!0,Yt=!0,fs=!0),O.id!==S&&(S=O.id,Yt=!0),Ei||v!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(C,"projectionMatrix",M.projectionMatrix),ft.setValue(C,"viewMatrix",M.matrixWorldInverse);const Gt=ft.map.cameraPosition;Gt!==void 0&&Gt.setValue(C,pe.setFromMatrixPosition(M.matrixWorld)),De.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ft.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Yt=!0,fs=!0)}if(N.isSkinnedMesh){ft.setOptional(C,N,"bindMatrix"),ft.setOptional(C,N,"bindMatrixInverse");const Ut=N.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(C,"boneTexture",Ut.boneTexture,Oe))}N.isBatchedMesh&&(ft.setOptional(C,N,"batchingTexture"),ft.setValue(C,"batchingTexture",N._matricesTexture,Oe),ft.setOptional(C,N,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",N._indirectTexture,Oe),ft.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",N._colorsTexture,Oe));const tn=z.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ee.update(N,z,Xt),(Yt||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,ft.setValue(C,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(en.envMap.value=de,en.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&H.environment!==null&&(en.envMapIntensity.value=H.environmentIntensity),Yt&&(ft.setValue(C,"toneMappingExposure",T.toneMappingExposure),we.needsLights&&$h(en,fs),Q&&O.fog===!0&&Z.refreshFogUniforms(en,Q),Z.refreshMaterialUniforms(en,O,B,$,f.state.transmissionRenderTarget[M.id]),Nr.upload(C,zl(we),en,Oe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Nr.upload(C,zl(we),en,Oe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ft.setValue(C,"center",N.center),ft.setValue(C,"modelViewMatrix",N.modelViewMatrix),ft.setValue(C,"normalMatrix",N.normalMatrix),ft.setValue(C,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ut=O.uniformsGroups;for(let Gt=0,mo=Ut.length;Gt<mo;Gt++){const oi=Ut[Gt];Fe.update(oi,Xt),Fe.bind(oi,Xt)}}return Xt}function $h(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function Zh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,H,z){const O=ve.get(M);O.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ve.get(M.texture).__webglTexture=H,ve.get(M.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){const z=ve.get(M);z.__webglFramebuffer=H,z.__useDefaultFramebuffer=H===void 0};const jh=C.createFramebuffer();this.setRenderTarget=function(M,H=0,z=0){R=M,D=H,P=z;let O=!0,N=null,Q=!1,le=!1;if(M){const de=ve.get(M);if(de.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(C.FRAMEBUFFER,null),O=!1;else if(de.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(de.__hasExternalTextures)Oe.rebindTextures(M,ve.get(M.texture).__webglTexture,ve.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ae=M.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&ve.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Le=ve.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[H])?N=Le[H][z]:N=Le[H],Q=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?N=ve.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[z]:N=Le,A.copy(M.viewport),L.copy(M.scissor),k=M.scissorTest}else A.copy(be).multiplyScalar(B).floor(),L.copy(Ge).multiplyScalar(B).floor(),k=st;if(z!==0&&(N=jh),_e.bindFramebuffer(C.FRAMEBUFFER,N)&&O&&_e.drawBuffers(M,N),_e.viewport(A),_e.scissor(L),_e.setScissorTest(k),Q){const de=ve.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,de.__webglTexture,z)}else if(le){const de=H;for(let Ce=0;Ce<M.textures.length;Ce++){const Le=ve.get(M.textures[Ce]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,z,de)}}else if(M!==null&&z!==0){const de=ve.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(M,H,z,O,N,Q,le,me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){_e.bindFramebuffer(C.FRAMEBUFFER,de);try{const Ce=M.textures[me],Le=Ce.format,Ae=Ce.type;if(!De.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-O&&z>=0&&z<=M.height-N&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(H,z,O,N,Me.convert(Le),Me.convert(Ae),Q))}finally{const Ce=R!==null?ve.get(R).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,H,z,O,N,Q,le,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(H>=0&&H<=M.width-O&&z>=0&&z<=M.height-N){_e.bindFramebuffer(C.FRAMEBUFFER,de);const Ce=M.textures[me],Le=Ce.format,Ae=Ce.type;if(!De.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(H,z,O,N,Me.convert(Le),Me.convert(Ae),0);const Qe=R!==null?ve.get(R).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,Qe);const pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await af(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Ve),C.deleteSync(pt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,z=0){const O=Math.pow(2,-z),N=Math.floor(M.image.width*O),Q=Math.floor(M.image.height*O),le=H!==null?H.x:0,me=H!==null?H.y:0;Oe.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,le,me,N,Q),_e.unbindTexture()};const Jh=C.createFramebuffer(),Qh=C.createFramebuffer();this.copyTextureToTexture=function(M,H,z=null,O=null,N=0,Q=null){Q===null&&(N!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let le,me,de,Ce,Le,Ae,Ve,Qe,pt;const at=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(z!==null)le=z.max.x-z.min.x,me=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Le=z.min.y,Ae=z.isBox3?z.min.z:0;else{const tn=Math.pow(2,-N);le=Math.floor(at.width*tn),me=Math.floor(at.height*tn),M.isDataArrayTexture?de=at.depth:M.isData3DTexture?de=Math.floor(at.depth*tn):de=1,Ce=0,Le=0,Ae=0}O!==null?(Ve=O.x,Qe=O.y,pt=O.z):(Ve=0,Qe=0,pt=0);const it=Me.convert(H.format),we=Me.convert(H.type);let dt;H.isData3DTexture?(Oe.setTexture3D(H,0),dt=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Oe.setTexture2DArray(H,0),dt=C.TEXTURE_2D_ARRAY):(Oe.setTexture2D(H,0),dt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const Ye=C.getParameter(C.UNPACK_ROW_LENGTH),Xt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ei=C.getParameter(C.UNPACK_SKIP_PIXELS),Yt=C.getParameter(C.UNPACK_SKIP_ROWS),fs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,at.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ae);const ft=M.isDataArrayTexture||M.isData3DTexture,en=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const tn=ve.get(M),Ut=ve.get(H),Gt=ve.get(tn.__renderTarget),mo=ve.get(Ut.__renderTarget);_e.bindFramebuffer(C.READ_FRAMEBUFFER,Gt.__webglFramebuffer),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,mo.__webglFramebuffer);for(let oi=0;oi<de;oi++)ft&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(M).__webglTexture,N,Ae+oi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(H).__webglTexture,Q,pt+oi)),C.blitFramebuffer(Ce,Le,le,me,Ve,Qe,le,me,C.DEPTH_BUFFER_BIT,C.NEAREST);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||ve.has(M)){const tn=ve.get(M),Ut=ve.get(H);_e.bindFramebuffer(C.READ_FRAMEBUFFER,Jh),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qh);for(let Gt=0;Gt<de;Gt++)ft?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,tn.__webglTexture,N,Ae+Gt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,tn.__webglTexture,N),en?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,Q,pt+Gt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ut.__webglTexture,Q),N!==0?C.blitFramebuffer(Ce,Le,le,me,Ve,Qe,le,me,C.COLOR_BUFFER_BIT,C.NEAREST):en?C.copyTexSubImage3D(dt,Q,Ve,Qe,pt+Gt,Ce,Le,le,me):C.copyTexSubImage2D(dt,Q,Ve,Qe,Ce,Le,le,me);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else en?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(dt,Q,Ve,Qe,pt,le,me,de,it,we,at.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(dt,Q,Ve,Qe,pt,le,me,de,it,at.data):C.texSubImage3D(dt,Q,Ve,Qe,pt,le,me,de,it,we,at):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Ve,Qe,le,me,it,we,at.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Ve,Qe,at.width,at.height,it,at.data):C.texSubImage2D(C.TEXTURE_2D,Q,Ve,Qe,le,me,it,we,at);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Xt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ei),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,fs),Q===0&&H.generateMipmaps&&C.generateMipmap(dt),_e.unbindTexture()},this.initRenderTarget=function(M){ve.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){D=0,P=0,R=null,_e.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Wc=new si,mr=new U;class Tl extends Bf{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new nt(e,3)),this.setAttribute("uv",new nt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ka(t,6,1);return this.setAttribute("instanceStart",new Rn(i,3,0)),this.setAttribute("instanceEnd",new Rn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Ka(t,6,1);return this.setAttribute("instanceColorStart",new Rn(i,3,0)),this.setAttribute("instanceColorEnd",new Rn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new zf(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Wc.setFromBufferAttribute(t),this.boundingBox.union(Wc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)mr.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mr)),mr.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(mr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Re(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vt.line={uniforms:rs.merge([re.common,re.fog,re.line]),vertexShader:`
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
		`};class Qu extends zt{constructor(e){super({type:"LineMaterial",uniforms:rs.clone(Vt.line.uniforms),vertexShader:Vt.line.vertexShader,fragmentShader:Vt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ko=new ot,Xc=new U,Yc=new U,At=new ot,Rt=new ot,xn=new ot,$o=new U,Zo=new mt,wt=new Yf,qc=new U,gr=new si,_r=new us,Sn=new ot;let yn,Si;function Kc(n,e,t){return Sn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Sn.multiplyScalar(1/Sn.w),Sn.x=Si/t.width,Sn.y=Si/t.height,Sn.applyMatrix4(n.projectionMatrixInverse),Sn.multiplyScalar(1/Sn.w),Math.abs(Math.max(Sn.x,Sn.y))}function D_(n,e){const t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){wt.start.fromBufferAttribute(s,o),wt.end.fromBufferAttribute(r,o),wt.applyMatrix4(t);const c=new U,h=new U;yn.distanceSqToSegment(wt.start,wt.end,h,c),h.distanceTo(c)<Si*.5&&e.push({point:h,pointOnLine:c,distance:yn.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function L_(n,e,t){const i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),d=-e.near;yn.at(1,xn),xn.w=1,xn.applyMatrix4(e.matrixWorldInverse),xn.applyMatrix4(i),xn.multiplyScalar(1/xn.w),xn.x*=r.x/2,xn.y*=r.y/2,xn.z=0,$o.copy(xn),Zo.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,g=h;m<g;m++){if(At.fromBufferAttribute(l,m),Rt.fromBufferAttribute(c,m),At.w=1,Rt.w=1,At.applyMatrix4(Zo),Rt.applyMatrix4(Zo),At.z>d&&Rt.z>d)continue;if(At.z>d){const y=At.z-Rt.z,T=(At.z-d)/y;At.lerp(Rt,T)}else if(Rt.z>d){const y=Rt.z-At.z,T=(Rt.z-d)/y;Rt.lerp(At,T)}At.applyMatrix4(i),Rt.applyMatrix4(i),At.multiplyScalar(1/At.w),Rt.multiplyScalar(1/Rt.w),At.x*=r.x/2,At.y*=r.y/2,Rt.x*=r.x/2,Rt.y*=r.y/2,wt.start.copy(At),wt.start.z=0,wt.end.copy(Rt),wt.end.z=0;const u=wt.closestPointToPointParameter($o,!0);wt.at(u,qc);const p=rf.lerp(At.z,Rt.z,u),f=p>=-1&&p<=1,E=$o.distanceTo(qc)<Si*.5;if(f&&E){wt.start.fromBufferAttribute(l,m),wt.end.fromBufferAttribute(c,m),wt.start.applyMatrix4(a),wt.end.applyMatrix4(a);const y=new U,T=new U;yn.distanceSqToSegment(wt.start,wt.end,T,y),t.push({point:T,pointOnLine:y,distance:yn.origin.distanceTo(T),object:n,face:null,faceIndex:m,uv:null,uv1:null})}}}class eh extends Ft{constructor(e=new Tl,t=new Qu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Xc.fromBufferAttribute(t,a),Yc.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Xc.distanceTo(Yc);const r=new Ka(s,2,1);return e.setAttribute("instanceDistanceStart",new Rn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Rn(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;yn=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Si=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),_r.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=Si*.5;else{const d=Math.max(s.near,_r.distanceToPoint(yn.origin));c=Kc(s,d,l.resolution)}if(_r.radius+=c,yn.intersectsSphere(_r)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),gr.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=Si*.5;else{const d=Math.max(s.near,gr.distanceToPoint(yn.origin));h=Kc(s,d,l.resolution)}gr.expandByScalar(h),yn.intersectsBox(gr)!==!1&&(i?D_(this,t):L_(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ko),this.material.uniforms.resolution.value.set(Ko.z,Ko.w))}}const th=[];function kt(n,e,t={}){const i=new Qu({color:n,linewidth:e,transparent:t.transparent??!1,opacity:t.opacity??1,fog:t.fog??!0,depthWrite:!1});return th.push(i),i}function nh(n){return n.attributes.position.array}function Fr(n,e){const t=new Tl,i=nh(n);i.length<6?t.setPositions([0,0,0,0,0,0]):t.setPositions(i);const s=new eh(t,e);return s.frustumCulled=!1,s.visible=i.length>=6,s}function Vn(n,e){const t=new Tl;t.setPositions(n);const i=new eh(t,e);return i.frustumCulled=!1,i}function ih(n,e){const t=nh(e);if(t.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(t)}function vr(n,e){if(e.length<6){n.visible=!1;return}n.visible=!0,n.geometry.setPositions(e)}function sh(n,e){for(const t of th)t.resolution.set(n,e)}function I_(n){let e=n>>>0;const t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:t,int:(i,s)=>i+Math.floor(t()*(s-i+1)),state:()=>e}}const We=.3,U_={hull:3,tread:2,gun:2,engine:2,core:1,ammo:1,scanner:6},H_={hull:1,tread:1.2,gun:.8,engine:1.5,core:1,ammo:1,scanner:3},N_={H:"hull",T:"tread",G:"gun",E:"engine",C:"core",A:"ammo",S:"scanner"};function F_(n){return{size:n,cells:new Array(n.x*n.y*n.z).fill(null),rev:0}}function yl(n,e,t,i){return e>=0&&t>=0&&i>=0&&e<n.size.x&&t<n.size.y&&i<n.size.z}function El(n,e,t,i){return e+t*n.size.x+i*n.size.x*n.size.y}function Bt(n,e,t,i){return yl(n,e,t,i)?n.cells[El(n,e,t,i)]:null}function Za(n,e,t,i,s){yl(n,e,t,i)&&(n.cells[El(n,e,t,i)]=s,n.rev++)}function xi(n,e){let t=0;for(const i of n.cells)i&&i.type===e&&t++;return t}function an(n){const e=n.length,t=Math.max(...n.map(r=>r.length)),i=Math.max(...n.map(r=>Math.max(...r.map(a=>a.length)))),s=F_({x:i,y:e,z:t});for(let r=0;r<e;r++)for(let a=0;a<t;a++){const o=n[r][a]??"";for(let l=0;l<i;l++){const c=N_[o[l]??"."];c&&(s.cells[El(s,l,r,a)]={type:c,hp:U_[c]})}}return s.rev=1,s}const ja=()=>({throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1,firePressed:!1}),rh=[Array(10).fill("TT.......TT"),["TTHHEEEHHTT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TTHHHHHHHHT","TT.HHHHH.TT","TT..HHH..TT"],["...........",".TTHHHHHTT.",".TTHHHHHTT.",".TTHHCHHTT.",".TTHHCHHTT.",".TTHHHHHTT.",".TT.HHH.TT.",".TT..H..TT.","...........","..........."]],oh=[[".HHH.","HHHHH","HHGHH",".GGG.",".GGG.",".GGG."],[".....",".HHH.",".HHH.","..G..","..G..","..G.."]],z_=-.09,O_=1.05,k_=1.4,Nn=(n,e,t)=>n<e?e:n>t?t:n;function ah(n,e){let t=0;for(const r of[n,e])for(const a of r.cells)a&&(t+=H_[a.type]);const i=90/Math.sqrt(t),s=xi(n,"tread");return{mass:t,topSpeed:i,accel:i/2.5,turnRate:1.8*Nn(s/72,.5,1.5),turretSlew:2.2}}function lh(n,e,t,i){const s=an(rh),r=an(oh);return{id:n,hull:s,turret:r,x:e,z:t,heading:i,speed:0,turretYaw:0,gunPitch:0,stats:ah(s,r),turretPivot:{x:0,y:s.size.y*We,z:.3},alive:!0,cooldown:0,spawnTick:0,selfDestructTick:null}}const B_=rh,G_=oh,V_=[Array(14).fill("TT.........TT"),["TTHHEEEEEHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TTHHHHHHHHHTT","TT.HHHHHHH.TT","TT..HHHHH..TT","TT...HHH...TT"],[".............",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TTHHHHHHHTT.",".TT.HHHHH.TT.",".TT..HHH..TT.",".TT...H...TT.","............."]],W_=[[".HHHH.","HHHHHH","HHGGHH",".HGGH.",".GGGG.",".GGGG.",".GGGG.",".GGGG.",".GGGG."],["......",".HHHH.",".HGGH.","..GG..","..GG..","..GG..","..GG..","..GG..","..GG.."]];function X_(n,e,t,i,s){const r=an(e==="slow"?B_:V_),a=an(e==="slow"?G_:W_),o=ah(r,a),l=e==="slow"?.5:1.2;return o.topSpeed*=l,o.accel=o.topSpeed/2.5,o.turretSlew=e==="slow"?.785:2.094,{id:n,hull:r,turret:a,x:t,z:i,heading:s,speed:0,turretYaw:0,gunPitch:0,stats:o,turretPivot:{x:0,y:r.size.y*We,z:.3},alive:!0,cooldown:0,spawnTick:0,selfDestructTick:null}}function ch(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading);return[n.x+e[0]*t+e[2]*i,e[1],n.z-e[0]*i+e[2]*t]}function bl(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading),s=e[0]-n.x,r=e[2]-n.z;return[s*t-r*i,e[1],s*i+r*t]}function co(n,e){const t=Math.cos(n.gunPitch),i=Math.sin(n.gunPitch),s=e[1]*t+e[2]*i,r=-e[1]*i+e[2]*t,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),l=e[0]*a+r*o,c=-e[0]*o+r*a;return ch(n,[l+n.turretPivot.x,s+n.turretPivot.y,c+n.turretPivot.z])}function uh(n,e){const t=bl(n,e),i=t[0]-n.turretPivot.x,s=t[1]-n.turretPivot.y,r=t[2]-n.turretPivot.z,a=Math.cos(n.turretYaw),o=Math.sin(n.turretYaw),l=i*a-r*o,c=i*o+r*a,h=Math.cos(n.gunPitch),d=Math.sin(n.gunPitch);return[l,s*h-c*d,s*d+c*h]}function hh(n){const e=n.heading+n.turretYaw,t=Math.cos(n.gunPitch);return[t*Math.sin(e),Math.sin(n.gunPitch),t*Math.cos(e)]}function Y_(n,e,t,i){const s=Nn(e.throttle,-1,1)*n.stats.topSpeed,r=n.stats.accel*t;n.speed+=Nn(s-n.speed,-r,r),n.heading+=Nn(e.turn,-1,1)*n.stats.turnRate*t,n.x+=Math.sin(n.heading)*n.speed*t,n.z+=Math.cos(n.heading)*n.speed*t;const a=i-1.5;n.x=Nn(n.x,-a,a),n.z=Nn(n.z,-a,a),n.turretYaw+=Nn(e.turretYaw,-1,1)*n.stats.turretSlew*t,n.gunPitch=Nn(n.gunPitch+Nn(e.gunPitch,-1,1)*k_*t,z_,O_)}const q_=[["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],K_=[["HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH"],["",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",""],["","","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","",""],["","","","...HHH...","...HHH...","...HHH...","","",""],["","","","","....H....","","","",""]];function $c(n){return an(n==="cube"?q_:K_)}const dh=[{kind:"cube",x:24,z:30},{kind:"cube",x:-38,z:12},{kind:"cube",x:60,z:-45},{kind:"cube",x:-70,z:-60},{kind:"cube",x:10,z:-90},{kind:"cube",x:95,z:70},{kind:"cube",x:-110,z:85},{kind:"pyramid",x:-15,z:55},{kind:"pyramid",x:45,z:80},{kind:"pyramid",x:-60,z:-20},{kind:"pyramid",x:80,z:-10},{kind:"pyramid",x:-95,z:-105},{kind:"pyramid",x:130,z:20}],$_=[["HHHHHHHHHH"],["HHHHHHHHHH"],["HHHHHHHHHH"]],Z_=[["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],j_=[["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"]],J_=[["HHHH","HAAH","HAAH","HHHH"],["HHHH","HAAH","HAAH","HHHH"]],Q_=[["HH.","HHH",".HH"],["HH.",".H.","..."]],ev=[["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS","SSSSSSS"],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS..","..SSS.."],["GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG","GGGGGGG"],["..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG..","..GGG.."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."],["...G...","...G...","...G...","...G...","...G...","...G...","...G..."]],tv=[["H"],["H"],["H"],["G"]];function nv(n){switch(n){case"wall":return an($_);case"bunker":return an(Z_);case"tower":return an(j_);case"depot":return an(J_);case"rocks":return an(Q_);case"scan":return an(ev);case"pylon":return an(tv);case"cube":return $c("cube");case"pyramid":return $c("pyramid")}}function rn(n,e,t,i){return{id:n,kind:e,grid:nv(e),x:t,z:i}}[rn(100,"wall",-20,-35),rn(101,"wall",35,55),rn(102,"bunker",-55,40),rn(103,"tower",70,-70),rn(104,"depot",15,-55),rn(105,"scan",-40,-80),rn(106,"pylon",-6,70),rn(107,"pylon",6,70),...dh.map((n,e)=>rn(200+e,n.kind,n.x,n.z))];function fh(n,e){const t=[];for(let i=0;i<n.size.z;i++)for(let s=0;s<n.size.y;s++)for(let r=0;r<n.size.x;r++){const a=Bt(n,r,s,i);if(!a)continue;(e==="hull"?a.type==="core":e==="turret"?a.type==="gun":s===0)&&t.push([r,s,i])}return t}const iv=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function zr(n,e){if(e.length===0){const r=[];for(let a=0;a<n.size.z;a++)for(let o=0;o<n.size.y;o++)for(let l=0;l<n.size.x;l++)Bt(n,l,o,a)&&r.push([l,o,a]);for(const a of r)Za(n,a[0],a[1],a[2],null);return r}const t=new Set,i=[...e];for(const r of e)t.add(r.join(","));for(;i.length;){const r=i.pop();for(const a of iv){const o=r[0]+a[0],l=r[1]+a[1],c=r[2]+a[2],h=`${o},${l},${c}`;t.has(h)||!Bt(n,o,l,c)||(t.add(h),i.push([o,l,c]))}}const s=[];for(let r=0;r<n.size.z;r++)for(let a=0;a<n.size.y;a++)for(let o=0;o<n.size.x;o++)Bt(n,o,a,r)&&!t.has(`${o},${a},${r}`)&&s.push([o,a,r]);for(const r of s)Za(n,r[0],r[1],r[2],null);return s}function Jr(n,e,t,i){const s=We,r=[e[0]/s+n.size.x/2,e[1]/s,e[2]/s+n.size.z/2],a=[t[0]/s,t[1]/s,t[2]/s];if(a[0]===0&&a[1]===0&&a[2]===0)return[];const o=[Math.floor(r[0]),Math.floor(r[1]),Math.floor(r[2])],l=[a[0]>0?1:a[0]<0?-1:0,a[1]>0?1:a[1]<0?-1:0,a[2]>0?1:a[2]<0?-1:0],c=[a[0]!==0?Math.abs(1/a[0]):1/0,a[1]!==0?Math.abs(1/a[1]):1/0,a[2]!==0?Math.abs(1/a[2]):1/0],h=[0,1,2].map(g=>a[g]===0?1/0:((l[g]>0?o[g]+1:o[g])-r[g])/a[g]),d=[];let m=0;for(let g=0;g<1024&&!(m>i);g++){yl(n,o[0],o[1],o[2])&&Bt(n,o[0],o[1],o[2])&&d.push({cell:[o[0],o[1],o[2]],t:m});const _=h[0]<=h[1]?h[0]<=h[2]?0:2:h[1]<=h[2]?1:2;m=h[_],o[_]+=l[_],h[_]+=c[_]}return d}const ph=120,mh=.9,sv=6,rv=1,ov=2.5,av=3,gh=400,lv=72,uo=36e3,_h=7200,cv=45,uv={hull:2,tread:2,gun:1.5,engine:2,core:3,ammo:1,scanner:5},vh=7,hv=6,dv=6,fv=2400,pv=600,mv=4.5,gv=6,xh=180,_v=30,Sh=150,vv=300,Ja=180,xv=120;function Or(n,e){return e.alive&&n.tick-e.spawnTick>=xv}function Al(n,e,t){let i=n.incomingFire.get(e);i||(i=new Map,n.incomingFire.set(e,i)),i.set(t,n.tick)}function Mh(n,e,t=Ja){const i=n.incomingFire.get(e);return i?[...i.entries()].filter(([,s])=>n.tick-s<=t).map(([s])=>s):[]}function ho(n,e,t){const i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],s=Math.hypot(i[0],i[1],i[2]);if(s<1e-6)return!0;const r=[i[0]/s,i[1]/s,i[2]/s];for(const a of n.structures){if(a.grid.cells.every(l=>!l))continue;const o=[e[0]-a.x,e[1],e[2]-a.z];if(Jr(a.grid,o,r,s).length)return!1}return!0}function Sv(n,e,t,i,s){let r=i,a="max";if(t[1]<-1e-6){const o=-e[1]/t[1];o>=0&&o<r&&(r=o,a="ground")}for(const o of n.structures){if(o.grid.cells.every(h=>!h))continue;const l=[e[0]-o.x,e[1],e[2]-o.z],c=Jr(o.grid,l,t,r);c.length&&c[0].t<r&&(r=c[0].t,a="grid")}for(const o of n.tanks)if(!(!o.alive||o.id===s))for(const l of["hull","turret"]){const c=l==="hull"?o.hull:o.turret,h=l==="hull"?bl:uh,d=h(o,e),m=Mv(h(o,[e[0]+t[0],e[1]+t[1],e[2]+t[2]]),d),g=Jr(c,d,m,r);g.length&&g[0].t<r&&(r=g[0].t,a="grid")}return{pos:[e[0]+t[0]*r,e[1]+t[1]*r,e[2]+t[2]*r],hit:a}}const Mv=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]];function xr(n,e,t,i){let s=n.awareness.get(e.id);s||(s=new Map,n.awareness.set(e.id,s)),s.set(t.id,{x:t.x,z:t.z,heading:t.heading,turretYaw:t.turretYaw,tick:n.tick,source:i})}function Tv(n){for(const[i,s]of n.incomingFire){for(const[r,a]of s)n.tick-a>Ja&&s.delete(r);s.size||n.incomingFire.delete(i)}const e=n.tanks.filter(i=>i.alive),t=n.tick%6===0;for(const i of e){let s=n.awareness.get(i.id);s||(s=new Map,n.awareness.set(i.id,s));for(const[r,a]of s){const o=a.source==="gunfire"||a.source==="ping"?Ja:vv;n.tick-a.tick>o&&s.delete(r)}if(!(n.stormUntil>n.tick))for(const r of n.tanks){if(r.id===i.id||!Or(n,r))continue;const a=Math.hypot(r.x-i.x,r.z-i.z);a<=_v?xr(n,i,r,"proximity"):t&&a<=Sh&&ho(n,[i.x,1.2,i.z],[r.x,1.2,r.z])&&xr(n,i,r,"los")}}for(const i of n.events)if(i.kind==="fire"){const s=n.tanks.find(r=>r.id===i.owner);if(!s||!Or(n,s))continue;for(const r of e){if(r.id===s.id)continue;xr(n,r,s,"gunfire");const a=[r.x-i.pos[0],1.2-i.pos[1],r.z-i.pos[2]],o=Math.max(0,Math.min(120,a[0]*i.dir[0]+a[1]*i.dir[1]+a[2]*i.dir[2]));Math.hypot(a[0]-i.dir[0]*o,a[1]-i.dir[1]*o,a[2]-i.dir[2]*o)<3.5&&(n.threats.set(r.id,{tick:n.tick,from:s.id}),Al(n,r.id,s.id))}}else if(i.kind==="scanPing")for(const s of e)for(const r of n.tanks)r.id!==s.id&&Or(n,r)&&xr(n,s,r,"ping")}const Fs={slow:{speedMul:.5,slew:.785,thinkTicks:24,err:.105,cooldown:[2.5,3.5],range:[60,100],turretShotChance:.1},super:{speedMul:1.2,slew:2.094,thinkTicks:15,err:.035,cooldown:[1.4,2],range:[40,80],turretShotChance:.15}};function yv(n,e=!1){return{kind:n,mode:"patrol",targetId:null,playerTracker:e,aim:null,aimY:.45,patrolGoal:null,investigateGoal:null,searchCenter:null,searchUntilTick:0,coverGoal:null,coverStructureId:null,nextCoverSeekTick:0,orbitAngle:null,orbitDirection:1,nextOrbitTick:0,fleeGoal:null,nextFleeSeekTick:0,avoidGoal:null,reposition:null,nextThink:0,lastTargetSwitchTick:-9999,stuckTicks:0,lastThrottle:0,lastShotTick:-9999,shotsAtContact:0,lastX:0,lastZ:0,debug:{intent:null,los:!1,err:0,evading:!1,outnumbered:!1}}}const _t=(n,e,t)=>n<e?e:n>t?t:n,Sr=(n,e)=>Math.atan2(e.x-n.x,e.z-n.z),jo=n=>{for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n},St=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Ev(n,e,t){const i=n.awareness.get(e.id);if(!i)return null;const s=[];for(const[h,d]of i){const m=n.tanks.find(_=>_.id===h);if(!m||!Or(n,m))continue;const g=St(e,m)<=Sh&&ho(n,[e.x,1.2,e.z],[m.x,1.2,m.z]);s.push({id:h,k:d,target:m,visual:g,distance:g?St(e,m):St(e,d)})}const r=s.find(h=>h.id===t.targetId),a=s.filter(h=>h.visual),o=n.threats.get(e.id);if(o&&n.tick-o.tick<360){const h=s.find(d=>d.id===o.from);if(h&&(h.visual||!a.length))return h}const l=new Set(Mh(n,e.id));if(l.size>1){t.debug.outnumbered=!0;const h=s.filter(g=>l.has(g.id)),d=h.filter(g=>g.visual);if(r?.visual&&!d.length)return r;if(r?.visual&&d.some(g=>g.id===r.id)){const g=[...d].sort((u,p)=>u.distance-p.distance)[0],_=n.tick-t.lastTargetSwitchTick<60;return!g||_||g.distance+12>=r.distance?r:g}const m=[...d.length?d:h].sort((g,_)=>g.distance-_.distance)[0];if(m)return m}if(t.debug.outnumbered=!1,t.playerTracker){const h=s.find(d=>d.id===0);if(h)return h}return r&&n.tick-t.lastTargetSwitchTick<180?r:s.filter(h=>h.id!==0).sort((h,d)=>d.k.tick-h.k.tick)[0]??s.sort((h,d)=>d.k.tick-h.k.tick)[0]??null}function Qa(n,e){const t=n.rng.next()*Math.PI*2,i=45+n.rng.next()*65;return{x:_t(e.x+Math.sin(t)*i,-190,190),z:_t(e.z+Math.cos(t)*i,-190,190)}}function bv(n,e){const t=n.rng.next()*Math.PI*2,i=18+n.rng.next()*22;return{x:_t(e.x+Math.sin(t)*i,-190,190),z:_t(e.z+Math.cos(t)*i,-190,190)}}function Th(n){const e=n.grid.size.x*We/2+2.2,t=n.grid.size.z*We/2+2.2,i=_t(Math.ceil(n.grid.size.x*We/4),2,4),s=_t(Math.ceil(n.grid.size.z*We/4),2,4),r=[];for(let a=0;a<=i;a++){const o=-e+2*e*a/i;r.push({x:n.x+o,z:n.z-t},{x:n.x+o,z:n.z+t})}for(let a=1;a<s;a++){const o=-t+2*t*a/s;r.push({x:n.x-e,z:n.z+o},{x:n.x+e,z:n.z+o})}return r.map(a=>({x:_t(a.x,-190,190),z:_t(a.z,-190,190)}))}function Rl(n,e,t){return n.structures.some(i=>{if(i.id===t||!i.grid.cells.some(a=>a))return!1;const s=i.grid.size.x*We/2+1.7,r=i.grid.size.z*We/2+1.7;return Math.abs(e.x-i.x)<s&&Math.abs(e.z-i.z)<r})}function el(n,e,t){return!ho(n,[t.x,1.2,t.z],[e.x,.45,e.z])}function Av(n,e,t){if(!t.length)return null;const i=Math.min(...t.map(a=>St(e,a)));let s=null,r=1/0;for(const a of n.structures)if(!(!a.grid.cells.some(o=>o)||St(e,a)>70))for(const o of Th(a)){const l=St(e,o);if(l>60||Rl(n,o,a.id))continue;const c=t.map(g=>St(g,o)),h=Math.min(...c);if(h<i+3)continue;const d=t.filter(g=>el(n,o,g)).length;if(!d)continue;const m=l*.55-h*.9-d*8;m<r&&(r=m,s=o)}return s}function Rv(n,e,t,i,s){const r=(i[0]+i[1])/2,a=s.length?s:[t];let o=null,l=1/0;for(const c of n.structures)if(!(!c.grid.cells.some(h=>h)||St(e,c)>55))for(const h of Th(c)){const d=St(e,h),m=St(t,h);if(d>45||m<i[0]-15||m>i[1]+15||Rl(n,h,c.id)||!ho(n,[h.x,1.2,h.z],[t.x,.45,t.z])||!el(n,h,t))continue;const g=a.filter(u=>el(n,h,u)).length,_=d+Math.abs(m-r)*.7-g*4;_<l&&(l=_,o={x:h.x,z:h.z,structureId:c.id})}return o}function wv(n,e,t){const s=Fs[e.kind].turretShotChance*(t===0?.5:1);e.aimY=n.rng.next()<s?1.2:.45+n.rng.next()*.12}function Zc(n,e,t,i,s){n.aim={x:n.aim?n.aim.x+(e-n.aim.x)*s:e,z:n.aim?n.aim.z+(t-n.aim.z)*s:t,y:i}}function Cv(n,e,t){const i={throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1};if(n.tick<e.nextThink)return Ts(n,e,t,i);e.nextThink=n.tick+Fs[e.kind].thinkTicks;const s=St(t,{x:e.lastX,z:e.lastZ});if(e.stuckTicks=e.lastThrottle>.25&&s<.2?e.stuckTicks+Fs[e.kind].thinkTicks:0,e.lastX=t.x,e.lastZ=t.z,e.stuckTicks>180){e.stuckTicks=0;const d=n.rng.next()*Math.PI*2;let m={x:_t(t.x+Math.sin(d)*30,-190,190),z:_t(t.z+Math.cos(d)*30,-190,190)};for(let g=0;g<6&&Rl(n,m,-1);g++){const _=n.rng.next()*Math.PI*2;m={x:_t(t.x+Math.sin(_)*30,-190,190),z:_t(t.z+Math.cos(_)*30,-190,190)}}e.mode==="engage"?e.avoidGoal=m:(e.mode="reposition",e.reposition=m)}const r=n.tanks.find(d=>d.id===e.targetId);e.targetId!==null&&(!r||!r.alive)&&(e.targetId=null,e.aim=null,e.mode="patrol",e.patrolGoal=null,e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,e.shotsAtContact=0);const a=Ev(n,t,e);if(!a)return e.targetId=null,e.aim=null,e.mode="patrol",e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,(!e.patrolGoal||St(t,e.patrolGoal)<8)&&(e.patrolGoal=Qa(n,t)),e.debug.intent=[e.patrolGoal.x,.8,e.patrolGoal.z],e.debug.los=!1,Ts(n,e,t,i);const o=e.targetId!==a.id;o&&(e.lastTargetSwitchTick=n.tick,e.shotsAtContact=0,e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null),e.targetId=a.id;const l=a.target,c=a.k,h=a.visual;if(e.debug.los=h,h){e.mode="engage",e.investigateGoal=null,e.searchCenter=null,e.searchUntilTick=0,e.reposition=null,(o||e.shotsAtContact===0||e.shotsAtContact%8===0)&&wv(n,e,l.id);const m=St(t,l)/ph*(e.kind==="super"?.85:.65),g=l.x+Math.sin(l.heading)*l.speed*m,_=l.z+Math.cos(l.heading)*l.speed*m;return Zc(e,g,_,e.aimY,e.aim?.35:1),e.debug.intent=[g,_,e.aimY],Ts(n,e,t,i)}return e.coverGoal=null,e.coverStructureId=null,e.orbitAngle=null,e.fleeGoal=null,e.mode!=="investigate"&&e.mode!=="reposition"?(e.mode="investigate",e.searchCenter={x:c.x,z:c.z},e.searchUntilTick=n.tick+480,e.investigateGoal={x:c.x,z:c.z},e.reposition=null):(e.searchCenter={x:c.x,z:c.z},(!e.investigateGoal||St(t,e.investigateGoal)<6)&&(e.investigateGoal=bv(n,e.searchCenter))),n.tick>e.searchUntilTick?(e.mode="patrol",e.targetId=null,e.aim=null,e.investigateGoal=null,e.searchCenter=null,e.patrolGoal=Qa(n,t),e.debug.intent=[e.patrolGoal.x,.8,e.patrolGoal.z],Ts(n,e,t,i)):(Zc(e,e.investigateGoal.x,e.investigateGoal.z,.8,e.aim?.25:1),e.debug.intent=[e.investigateGoal.x,.8,e.investigateGoal.z],Ts(n,e,t,i))}function Pv(n,e){const t=n.awareness.get(e.id);return t?Mh(n,e.id).map(i=>t.get(i)).filter(i=>!!i).map(i=>({x:i.x,z:i.z})):[]}function Ts(n,e,t,i){const s=Dv(n,e,t,i);return e.lastThrottle=s.throttle,s}function Dv(n,e,t,i){const s=Fs[e.kind],r=n.tanks.find(g=>g.id===e.targetId);e.mode==="engage"&&(!r||!r.alive)&&(e.mode="patrol",e.targetId=null,e.aim=null,e.patrolGoal=null);const a=xi(t.turret,"gun")===0,o=Pv(n,t),l=o.length>1,c=n.threats.get(t.id),h=c!==void 0&&n.tick-c.tick<90;e.debug.outnumbered=l,e.debug.evading=h;let d=null,m=0;if(a)d=e.aim??e.investigateGoal??e.patrolGoal,m=1;else if(e.avoidGoal)d=e.avoidGoal,m=.8,St(t,d)<3&&(e.avoidGoal=null);else if(l){if(n.tick>=e.nextFleeSeekTick&&(e.fleeGoal=Av(n,t,o),e.nextFleeSeekTick=n.tick+90),e.fleeGoal&&St(t,e.fleeGoal)<3)d=e.fleeGoal,m=0,n.tick>=e.nextFleeSeekTick&&(e.fleeGoal=null,e.nextFleeSeekTick=n.tick+30);else if(e.fleeGoal)d=e.fleeGoal,m=.85;else{let g=0,_=0;for(const f of o){const E=t.x-f.x,y=t.z-f.z,T=Math.hypot(E,y)||1;g+=E/T,_+=y/T}Math.hypot(g,_)<.2&&r&&(g=t.x-r.x,_=t.z-r.z);const p=Math.hypot(g,_)||1;d={x:_t(t.x+g/p*30,-190,190),z:_t(t.z+_/p*30,-190,190)},m=.85}e.coverGoal=null,e.coverStructureId=null}else if(e.mode==="patrol")e.fleeGoal=null,(!e.patrolGoal||St(t,e.patrolGoal)<8)&&(e.patrolGoal=Qa(n,t)),d=e.patrolGoal,m=.55;else if(e.mode==="investigate")e.fleeGoal=null,d=e.investigateGoal,m=.7;else if(e.mode==="reposition")e.fleeGoal=null,d=e.reposition,m=.75,d&&St(t,d)<6&&(e.reposition=null,e.mode=e.targetId?"investigate":"patrol");else if(e.mode==="engage"&&r){e.fleeGoal=null;const g=St(t,r);if(e.coverStructureId!==null&&!n.structures.some(u=>u.id===e.coverStructureId&&u.grid.cells.some(p=>p))||n.tick>=e.nextCoverSeekTick){const u=Rv(n,t,r,s.range,o);e.coverGoal=u?{x:u.x,z:u.z}:null,e.coverStructureId=u?.structureId??null,e.nextCoverSeekTick=n.tick+(h?45:90)}if(e.coverGoal&&St(t,e.coverGoal)<3)d=e.coverGoal,m=0;else if(h&&e.coverGoal)d=e.coverGoal,m=.7;else if(g>s.range[1])e.coverGoal=null,d=r,m=.65;else if(g<s.range[0]){e.coverGoal=null;const u=Math.atan2(t.x-r.x,t.z-r.z);d={x:_t(t.x+Math.sin(u)*25,-190,190),z:_t(t.z+Math.cos(u)*25,-190,190)},m=.55}else if(e.coverGoal)d=e.coverGoal,m=.45;else{e.orbitAngle===null&&(e.orbitAngle=Sr(r,t)),n.tick>=e.nextOrbitTick&&(e.orbitAngle+=e.orbitDirection*.16,e.nextOrbitTick=n.tick+30);const u=(s.range[0]+s.range[1])/2;d={x:_t(r.x+Math.sin(e.orbitAngle)*u,-190,190),z:_t(r.z+Math.cos(e.orbitAngle)*u,-190,190)},m=h?.5:.35}}if(d){const g=jo(Sr(t,d)-t.heading);i.turn=Math.abs(g)<.025?0:_t(g*1.6,-1,1),i.throttle=Math.abs(g)>1.1?Math.min(m,.2):m}if(a)return i;if(e.mode==="patrol")return i.turretYaw=Math.sin(n.tick*.01+t.id)*.35,i;if(e.aim){const g=jo(Sr(t,e.aim)-t.heading),_=jo(g-t.turretYaw);i.turretYaw=Math.abs(_)<.015?0:_t(_*3,-1,1);const u=Math.hypot(e.aim.x-t.x,e.aim.z-t.z),p=t.turretPivot.y+We,f=Math.atan2(e.aim.y-p,u);if(i.gunPitch=_t((f-t.gunPitch)*3,-1,1),e.mode==="engage"&&e.debug.los&&Math.abs(_)<.1&&u<s.range[1]+40&&t.cooldown===0){const E=1+u/100+(r?r.speed*Math.abs(Math.sin(r.heading-Sr(t,r)))/10:0),y=e.shotsAtContact===0?2:1,T=s.err*E*y;e.debug.err=T,t.turretYaw+=(n.rng.next()-.5)*2*T,i.fire=!0,e.shotsAtContact++,e.lastShotTick=n.tick}}return i}function Lv(){return{state:"dormant",untilTick:uo-_h,nextBomb:0,bombsLeft:0}}function Iv(n){const e=n.volcano;if(n.sky.volcano&&!(n.tick<uo-_h))if(e.state==="dormant")e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"});else if(e.state==="rumble")n.tick>=e.untilTick&&(e.state="erupt",e.untilTick=n.tick+600,e.bombsLeft=10+Math.floor(n.rng.next()*7),e.nextBomb=n.tick+30,n.events.push({kind:"volcanoErupt"}));else if(e.state==="erupt"){if(e.bombsLeft>0&&n.tick>=e.nextBomb){const t=(n.rng.next()-.5)*320,i=(n.rng.next()-.5)*320;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:vh,kind:"volcano"}),n.events.push({kind:"bombTelegraph",pos:[t,0,i]}),e.bombsLeft--,e.nextBomb=n.tick+45}n.tick>=e.untilTick&&(e.state="cooldown",e.untilTick=n.tick+1200)}else e.state==="cooldown"&&n.tick>=e.untilTick&&(e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"}))}function Uv(n,e,t,i="volcano"){if(i==="volcano"){if(n.lavaPools.push({x:e,z:t,radius:dv+n.rng.next()*2,untilTick:n.tick+fv}),n.rng.next()<.35){const s=Math.max(-190,Math.min(190,e+8)),r=Math.max(-190,Math.min(190,t+8));n.structures.push(rn(n.nextId++,"rocks",s,r))}}else{const s=Math.max(-190,Math.min(190,e+3.5)),r=Math.max(-190,Math.min(190,t+3.5));n.structures.push(rn(n.nextId++,"rocks",s,r))}}const Cs={slow:100,missile:250,super:500,bomber:1e3,block:5},yh=7200,Hv=90,Nv=4,Fv=1200,zv=3e3,jc=280,Jc=240,Ov=.45,Mr=1/60,Tr={player:2,light:1,super:6,bomber:5},Mi=(n,e,t)=>n<e?e:n>t?t:n,os=n=>{const e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]};function tl(n,e,t){const i=Mi(n[0]*e[0]+n[1]*e[1]+n[2]*e[2],-1,1),s=Math.acos(i);if(s<=t||s<1e-6)return e;const r=t/s;return os([n[0]+(e[0]-n[0])*r,n[1]+(e[1]-n[1])*r,n[2]+(e[2]-n[2])*r])}function kv(n){const e=n.tanks[0];for(let i=0;i<24;i++){const s=n.rng.next()*Math.PI*2,r=100+n.rng.next()*40,a=Mi(e.x+Math.sin(s)*r,-190,190),o=Mi(e.z+Math.cos(s)*r,-190,190);let l=!0;for(const c of n.structures){if(!c.grid.cells.some(m=>m))continue;const h=c.grid.size.x*We/2+5,d=c.grid.size.z*We/2+5;if(Math.abs(a-c.x)<h&&Math.abs(o-c.z)<d){l=!1;break}}if(l&&n.tanks.every(c=>!c.alive||Math.hypot(c.x-a,c.z-o)>14))return{x:a,z:o}}const t=n.rng.next()*Math.PI*2;return{x:Math.sin(t)*170,z:Math.cos(t)*170}}function Qc(n,e){const t=kv(n),i=X_(n.nextId++,e,t.x,t.z,Math.atan2(n.tanks[0].x-t.x,n.tanks[0].z-t.z));i.spawnTick=n.tick,n.tanks.push(i),n.brains.set(i.id,yv(e)),e==="super"&&(n.events.push({kind:"superSpawn",pos:[t.x,1,t.z]}),n.nextSuperVolleyTick=n.tick+480)}function Bv(n){const e=n.tanks.filter(s=>s.id!==0&&s.alive&&n.brains.has(s.id));if(!e.length||e.filter(s=>n.brains.get(s.id).playerTracker).length===1)return;for(const s of e)n.brains.get(s.id).playerTracker=!1;const i=e.find(s=>n.brains.get(s.id).kind==="slow")??e[0];n.brains.get(i.id).playerTracker=!0}function Gv(n){const e=[];for(const t of n.tanks){if(!t.alive)continue;const i=n.brains.get(t.id)?.kind;e.push({kind:"tank",id:t.id,weight:t.id===0?Tr.player:i==="super"?Tr.super:Tr.light,pos:[t.x,1,t.z]})}return n.bomber?.alive&&e.push({kind:"bomber",id:n.bomber.id,weight:Tr.bomber,pos:[...n.bomber.pos]}),e}function Vv(n,e){const t=e.reduce((s,r)=>s+r.weight,0);let i=n.rng.next()*t;for(const s of e)if(i-=s.weight,i<=0)return s;return e[e.length-1]}function Eh(n,e={}){const t=Gv(n);if(!t.length&&!e.target)return;const i=t.find(p=>p.kind==="tank"&&p.id===0),s=e.target??(i&&n.rng.next()<.55?i:Vv(n,t)),r=n.rng.next()*Math.PI*2,a=e.small?20+n.rng.next()*4:18+n.rng.next()*6,o=e.standOff?e.standOff[0]+n.rng.next()*(e.standOff[1]-e.standOff[0]):205,l=e.standOff?{x:s.pos[0],z:s.pos[2]}:{x:0,z:0},c=[Mi(l.x+Math.sin(r)*o,-250,250),a,Mi(l.z+Math.cos(r)*o,-250,250)],h=e.small?!0:n.rng.next()<.6,d=e.speed??[14,18],m=d[0]+n.rng.next()*(d[1]-d[0]),g=Math.hypot(s.pos[0]-c[0],s.pos[1]-c[1],s.pos[2]-c[2]),_=Mi(Math.ceil(g/m*60*1.6)+240,Fv,zv),u=n.nextId++;n.missiles.push({id:u,pos:c,dir:os([s.pos[0]-c[0],0,s.pos[2]-c[2]]),speed:m,age:0,maxAge:_,alive:!0,targetKind:s.kind,targetId:s.id,mode:"cruise",acquireRange:e.small?70:80,scale:e.small?.62:1,tracking:h,turnRate:h?.45:.25,interceptTick:null,interceptorId:null,defenseShotsFired:0,nextDefenseShotTick:0,lastDefenseTick:-9999}),s.kind==="tank"&&s.id===0&&n.events.push({kind:"missileLock",id:u,pos:c})}function eu(n,e){const t=e.kind==="bomber",i=t?3+Math.floor(n.rng.next()*3):3+Math.floor(n.rng.next()*2);for(let r=0;r<i;r++)Eh(n,{target:e,small:!0,speed:[24,30],standOff:[90,140]});const s=t?540+Math.floor(n.rng.next()*300):720+Math.floor(n.rng.next()*360);t?n.nextBomberVolleyTick=n.tick+s:n.nextSuperVolleyTick=n.tick+s,n.events.push({kind:"defenseVolley",defenderId:e.id,count:i,pos:[...e.pos]})}function Wv(n){if(n.phase==="play"){let e=n.tanks.filter(a=>a.alive&&n.brains.get(a.id)?.kind==="slow").length;for(;e<Nv&&n.tick>=n.nextSpawnTick;)Qc(n,"slow"),e++,n.nextSpawnTick=n.tick+90;!n.tanks.some(a=>a.alive&&n.brains.get(a.id)?.kind==="super")&&n.tick>=n.nextSuperTick&&(Qc(n,"super"),n.nextSuperTick=n.tick+7200+Math.floor(n.rng.next()*3600)),Bv(n);const i=n.missiles.filter(a=>a.alive&&a.scale>=1).length;if(n.tick>=n.nextMissileTick&&i<3&&n.missiles.length<12&&(Eh(n),n.nextMissileTick=n.tick+1500+Math.floor(n.rng.next()*1800)),!n.bomber&&n.tick>=n.nextBomberTick){const a=n.tanks[0].alive?n.tanks[0]:n.tanks.find(_=>_.alive)??n.tanks[0],o=a.x,l=a.z,h=Math.hypot(o,l)<1e-6?n.rng.next()*Math.PI*2:Math.atan2(o,l),d=[Math.sin(h),0,Math.cos(h)],m=a.x-d[0]*205,g=a.z-d[2]*205;n.bomber={id:n.nextId++,pos:[m,15,g],dir:d,speed:8,hp:3,alive:!0,nextBomb:n.tick+60,targetId:a.id},n.nextBomberTick=n.tick+yh,n.nextBomberVolleyTick=n.tick+360,n.events.push({kind:"bomberInbound",pos:[m,15,g]})}const s=n.bomber?.alive?{kind:"bomber",id:n.bomber.id,weight:0,pos:[...n.bomber.pos]}:null;s&&(n.nextBomberVolleyTick>=1e9&&(n.nextBomberVolleyTick=n.tick+360),n.tick>=n.nextBomberVolleyTick&&(n.missiles.length<10?eu(n,s):n.nextBomberVolleyTick=n.tick+120));const r=n.tanks.find(a=>a.alive&&n.brains.get(a.id)?.kind==="super");if(r&&(n.nextSuperVolleyTick>=1e9&&(n.nextSuperVolleyTick=n.tick+480),n.tick>=n.nextSuperVolleyTick)){const a={kind:"tank",id:r.id,weight:0,pos:[r.x,1,r.z]};n.missiles.length<10?eu(n,a):n.nextSuperVolleyTick=n.tick+120}}jv(n),Zv(n),Jv(n),Qv(n)}function Xv(n,e){if(e.targetKind==="bomber"){const i=n.bomber;return i?.alive&&i.id===e.targetId?[...i.pos]:null}const t=n.tanks.find(i=>i.id===e.targetId);return t?.alive?[t.x,1,t.z]:null}function nl(n,e,t){const i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(s<1e-9)return Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]);const r=Mi(((n[0]-e[0])*i[0]+(n[1]-e[1])*i[1]+(n[2]-e[2])*i[2])/s,0,1);return Math.hypot(n[0]-e[0]-i[0]*r,n[1]-e[1]-i[1]*r,n[2]-e[2]-i[2]*r)}function Yv(n,e){const t=n.bomber;if(t?.alive&&t.id===e)return[t.pos[0],t.pos[1]-.2,t.pos[2]];const i=n.tanks.find(s=>s.id===e&&s.alive);return i?co(i,[0,We,i.turret.size.z/2*We+.15]):null}function qv(n,e){if(e.interceptTick!==null||e.targetId===null)return;if(e.targetKind==="bomber"){const i=n.bomber;i?.alive&&i.id===e.targetId&&Math.hypot(i.pos[0]-e.pos[0],i.pos[1]-e.pos[1],i.pos[2]-e.pos[2])<(e.scale<1?32:26)&&(e.interceptorId=i.id,e.interceptTick=n.tick+48,e.defenseShotsFired=0,e.nextDefenseShotTick=n.tick,e.lastDefenseTick=-9999);return}const t=n.tanks.find(i=>i.id===e.targetId&&i.alive);!t||n.brains.get(t.id)?.kind!=="super"||Math.hypot(t.x-e.pos[0],1-e.pos[1],t.z-e.pos[2])<(e.scale<1?26:18)&&(e.interceptorId=t.id,e.interceptTick=n.tick+48,e.defenseShotsFired=0,e.nextDefenseShotTick=n.tick,e.lastDefenseTick=-9999)}function Kv(n,e,t){const s=Math.hypot(e.pos[0]-t[0],e.pos[1]-t[1],e.pos[2]-t[2])/Jc,r=[e.pos[0]+e.dir[0]*s,e.pos[1]+e.dir[1]*s,e.pos[2]+e.dir[2]*s],a=e.defenseShotsFired+1,o=a>=4;if(!o){const c=os([e.dir[2],0,-e.dir[0]]),h=4-a;r[0]+=c[0]*h*.9,r[1]+=h*.35,r[2]+=c[2]*h*.9}const l=os([r[0]-t[0],r[1]-t[1],r[2]-t[2]]);n.defenseShots.push({id:n.nextId++,ownerId:e.interceptorId,missileId:e.id,pos:[...t],dir:l,speed:Jc,life:Ov,canHit:o}),n.events.push({kind:"defenseFire",pos:t,dir:l,owner:e.interceptorId,missileId:e.id,shotNumber:a,canHit:o}),e.defenseShotsFired=a,e.nextDefenseShotTick=n.tick+4,e.lastDefenseTick=n.tick}function $v(n,e){if(qv(n,e),e.interceptTick===null||e.interceptorId===null)return;const t=Yv(n,e.interceptorId);if(!t){e.interceptTick=null,e.interceptorId=null;return}if(e.defenseShotsFired<4&&n.tick>=e.nextDefenseShotTick){Kv(n,e,t);return}n.tick>=e.interceptTick&&(e.alive=!1,n.events.push({kind:"kill",id:e.id,what:"missile",by:e.interceptorId}),n.events.push({kind:"explosion",pos:[...e.pos],radius:1.5,damage:0,source:"airburst"}))}function Zv(n){for(const e of n.defenseShots){if(e.life<=0)continue;e.life-=Mr;const t=[...e.pos];if(e.pos[0]+=e.dir[0]*e.speed*Mr,e.pos[1]+=e.dir[1]*e.speed*Mr,e.pos[2]+=e.dir[2]*e.speed*Mr,!e.canHit)continue;const i=n.missiles.find(s=>s.id===e.missileId&&s.alive);i&&nl(i.pos,t,e.pos)<2.2&&(i.alive=!1,e.life=0,n.events.push({kind:"kill",id:i.id,what:"missile",by:e.ownerId}),n.events.push({kind:"explosion",pos:[...i.pos],radius:1.5,damage:0,source:"airburst"}))}n.defenseShots=n.defenseShots.filter(e=>e.life>0),n.missiles=n.missiles.filter(e=>e.alive)}function jv(n){for(const e of n.missiles){if(!e.alive||(e.age++,$v(n,e),!e.alive))continue;const t=Xv(n,e);if(t){const a=Math.hypot(t[0]-e.pos[0],t[2]-e.pos[2]);if(e.mode==="cruise")if(a<=e.acquireRange)e.mode="attack";else{const o=os([t[0]-e.pos[0],0,t[2]-e.pos[2]]);e.dir=tl(e.dir,o,(e.tracking?.16:.08)/60)}if(e.mode==="attack"){const o=os([t[0]-e.pos[0],t[1]-e.pos[1],t[2]-e.pos[2]]);e.dir=tl(e.dir,o,e.turnRate/60)}}const i=[...e.pos];e.pos[0]+=e.dir[0]*e.speed/60,e.pos[1]+=e.dir[1]*e.speed/60,e.pos[2]+=e.dir[2]*e.speed/60;for(const a of n.shells)if(Math.hypot(a.pos[0]-e.pos[0],a.pos[1]-e.pos[1],a.pos[2]-e.pos[2])<1.8*e.scale){e.alive=!1,a.alive=!1,n.events.push({kind:"kill",id:e.id,what:"missile",by:a.owner}),n.events.push({kind:"explosion",pos:[...e.pos],radius:1.5,damage:2,source:"airburst"});break}if(!e.alive)continue;let s=!1;for(const a of n.tanks)if(a.alive&&nl([a.x,1,a.z],i,e.pos)<2.4*e.scale){s=!0;break}if(s){e.alive=!1,n.pendingExplosions.push({pos:[e.pos[0],.5,e.pos[2]],radius:3,damage:4,source:"missile"});continue}const r=n.bomber;if(r?.alive&&nl(r.pos,i,e.pos)<2.8*e.scale){e.alive=!1,r.alive=!1,n.events.push({kind:"kill",id:r.id,what:"bomber",by:null}),n.events.push({kind:"explosion",pos:[...r.pos],radius:3,damage:0,source:"airburst"});continue}e.pos[1]<=.35?(e.alive=!1,n.pendingExplosions.push({pos:[e.pos[0],.5,e.pos[2]],radius:3,damage:4,source:"missile"})):(e.age>e.maxAge||Math.abs(e.pos[0])>jc||Math.abs(e.pos[2])>jc)&&(e.alive=!1)}n.missiles=n.missiles.filter(e=>e.alive)}function Jv(n){const e=n.bomber;if(!e||!e.alive){e&&!e.alive&&(n.bomber=null);return}const t=n.tanks.find(i=>i.id===e.targetId&&i.alive)??n.tanks[0];if(t.alive){const i=[t.x-e.pos[0],0,t.z-e.pos[2]],s=Math.hypot(i[0],i[2])||1;e.dir=tl(e.dir,[i[0]/s,0,i[2]/s],.0025)}if(e.pos[0]+=e.dir[0]*e.speed/60,e.pos[2]+=e.dir[2]*e.speed/60,n.tick>=e.nextBomb){let i=e.pos[0],s=e.pos[2];for(const r of n.tanks)if(r.alive&&Math.hypot(r.x-e.pos[0],r.z-e.pos[2])<4){i=r.x,s=r.z;break}n.telegraphs.push({x:i,z:s,impactTick:n.tick+Hv,radius:2,kind:"bomb",ownerId:e.id}),n.events.push({kind:"bombTelegraph",pos:[i,0,s]}),e.nextBomb=n.tick+cv}for(const i of n.shells)if(i.pos[1]>10&&Math.abs(i.pos[1]-e.pos[1])<3.5&&Math.hypot(i.pos[0]-e.pos[0],i.pos[2]-e.pos[2])<5.5){e.hp--,i.alive=!1,e.hp<=0&&(e.alive=!1,n.events.push({kind:"kill",id:e.id,what:"bomber",by:i.owner}),n.events.push({kind:"explosion",pos:[e.pos[0],e.pos[1],e.pos[2]],radius:3,damage:0,source:"airburst"}));break}(Math.abs(e.pos[0])>220||Math.abs(e.pos[2])>220)&&(e.alive=!1),e.alive||(n.bomber=null)}function Qv(n){const e=n.telegraphs.filter(t=>n.tick>=t.impactTick);if(e.length){n.telegraphs=n.telegraphs.filter(t=>n.tick<t.impactTick);for(const t of e){const i=t.kind==="volcano",s=t.kind==="meteor";n.pendingExplosions.push({pos:[t.x,.5,t.z],radius:i?vh:s?4:t.radius,damage:i?hv:s?5:3,source:i?"volcano":s?"meteor":"bomb",by:t.ownerId??null}),t.kind!=="bomb"&&Uv(n,t.x,t.z,t.kind)}}}function wl(n,e){const t=n.structures.find(s=>s.id===e.pylonA),i=n.structures.find(s=>s.id===e.pylonB);return!!t&&!!i&&t.grid.cells.some(s=>s)&&i.grid.cells.some(s=>s)}function ex(n,e,t,i){if(e[1]>n.height||e[1]+t[1]*i<0)return null;const s=n.bx-n.ax,r=n.bz-n.az,a=t[0]*r-t[2]*s;if(Math.abs(a)<1e-9)return null;const o=n.ax-e[0],l=n.az-e[2],c=(o*r-l*s)/a,h=(o*t[2]-l*t[0])/a;return c<0||c>i||h<0||h>1?null:c}function tx(n,e,t,i){const s=n.bx-n.ax,r=n.bz-n.az,a=s*s+r*r;let o=((e-n.ax)*s+(t-n.az)*r)/a;o=Math.max(0,Math.min(1,o));const l=n.ax+s*o,c=n.az+r*o,h=e-l,d=t-c,m=Math.hypot(h,d);if(m>=i||m<1e-9)return null;const g=(i-m)/m;return{x:h*g,z:d*g}}const yr=n=>dh.filter(e=>!n||n(e)).map(e=>({kind:e.kind,x:e.x,z:e.z})),Er=(n,e,t,i,s,r,a)=>({id:n,ax:e,az:t,bx:i,bz:s,pylonA:r,pylonB:a,height:2.4}),bh={classic:{id:"classic",label:"CLASSIC",placements:[{kind:"wall",x:-20,z:-35},{kind:"wall",x:35,z:55},{kind:"bunker",x:-55,z:40},{kind:"tower",x:70,z:-70},{kind:"depot",x:15,z:-55},{kind:"scan",x:-40,z:-80},{kind:"pylon",x:-6,z:70},{kind:"pylon",x:6,z:70},...yr()],fences:[Er(300,-6,70,6,70,106,107)],sky:{storm:!1,meteors:!1,volcano:!0}},outpost:{id:"outpost",label:"OUTPOST",placements:[{kind:"wall",x:-30,z:-20},{kind:"wall",x:30,z:-20},{kind:"wall",x:-30,z:20},{kind:"wall",x:30,z:20},{kind:"bunker",x:0,z:-45},{kind:"bunker",x:0,z:45},{kind:"depot",x:-45,z:0},{kind:"depot",x:45,z:0},{kind:"tower",x:-60,z:-60},{kind:"tower",x:60,z:60},{kind:"scan",x:0,z:0},{kind:"pylon",x:-12,z:70},{kind:"pylon",x:12,z:70},...yr(n=>Math.abs(n.x)>80||Math.abs(n.z)>80)],fences:[Er(300,-12,70,12,70,111,112)],sky:{storm:!1,meteors:!1,volcano:!0}},ruins:{id:"ruins",label:"RUINS",placements:[{kind:"wall",x:-15,z:-15},{kind:"wall",x:15,z:-15},{kind:"wall",x:-15,z:15},{kind:"wall",x:15,z:15},{kind:"bunker",x:-40,z:-40},{kind:"bunker",x:40,z:-40},{kind:"bunker",x:-40,z:40},{kind:"bunker",x:40,z:40},{kind:"tower",x:0,z:-60},{kind:"tower",x:0,z:60},{kind:"tower",x:-60,z:0},{kind:"tower",x:60,z:0},{kind:"depot",x:-70,z:-70},{kind:"depot",x:70,z:70},{kind:"scan",x:-80,z:20},...yr(n=>Math.abs(n.x)>90||Math.abs(n.z)>90)],fences:[],sky:{storm:!1,meteors:!1,volcano:!0}},stormfield:{id:"stormfield",label:"STORMFIELD",placements:[{kind:"rocks",x:-20,z:-20},{kind:"rocks",x:25,z:10},{kind:"rocks",x:-10,z:40},{kind:"rocks",x:50,z:-40},{kind:"pylon",x:-20,z:60},{kind:"pylon",x:20,z:60},{kind:"pylon",x:-60,z:-30},{kind:"pylon",x:-60,z:10},{kind:"scan",x:70,z:30},...yr(n=>n.kind==="pyramid")],fences:[Er(300,-20,60,20,60,104,105),Er(301,-60,-30,-60,10,106,107)],sky:{storm:!0,meteors:!0,volcano:!0}}},nx=["classic","outpost","ruins","stormfield"],ix=420,sx=9e3;function rx(n){const e=n.sky;if(e.storm&&n.tick>=n.nextStormTick&&n.stormUntil<=n.tick&&(n.stormUntil=n.tick+ix,n.nextStormTick=n.tick+24e3+Math.floor(n.rng.next()*12e3),n.events.push({kind:"ionStorm"})),e.meteors&&n.tick>=n.nextMeteorTick){const t=(n.rng.next()-.5)*300,i=(n.rng.next()-.5)*300;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:2,kind:"meteor"}),n.events.push({kind:"meteorInbound",pos:[t,0,i]}),n.nextMeteorTick=n.tick+sx+Math.floor(n.rng.next()*3e3)}}const ox=60,ti=1/ox;function ax(n,e="classic"){const t=bh[e];return{seed:n,tick:0,rng:I_(n),arenaHalf:200,tanks:[lh(0,0,0,0)],structures:t.placements.map((i,s)=>rn(100+s,i.kind,i.x,i.z)),shells:[],chunks:[],rubble:[],rubbleRev:0,events:[],pendingExplosions:[],nextId:1,awareness:new Map,brains:new Map,threats:new Map,incomingFire:new Map,missiles:[],defenseShots:[],bomber:null,telegraphs:[],fences:t.fences.map(i=>({...i})),sky:t.sky,nextStormTick:15e3,nextMeteorTick:6e3,volcano:Lv(),lavaPools:[],stormUntil:0,score:0,lives:3,phase:"play",nextSpawnTick:120,nextSuperTick:9e3,nextMissileTick:1800,nextBomberVolleyTick:1e9,nextSuperVolleyTick:1e9,nextBomberTick:yh,respawnTick:0,nextLifeAt:1e4,lastHitBy:new Map,lastHitSource:new Map}}function Cl(n){const e=n.structures.map(t=>({g:t.grid,structure:t}));for(const t of n.tanks)t.alive&&e.push({g:t.hull,tank:t,part:"hull"},{g:t.turret,tank:t,part:"turret"});return e}function lx(n,e){return[(e[0]-n.size.x/2+.5)*We,(e[1]+.5)*We,(e[2]-n.size.z/2+.5)*We]}function fo(n,e){const t=lx(n.g,e);return n.structure?[n.structure.x+t[0],t[1],n.structure.z+t[2]]:n.part==="turret"?co(n.tank,t):ch(n.tank,t)}const kr=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Ah=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],il=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],cx=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]);function Pl(n,e,t,i,s,r="shell"){const a=Bt(e.g,t[0],t[1],t[2]);if(!a)return;const o=fo(e,t);Za(e.g,t[0],t[1],t[2],null),i.set(e.g,e),e.tank&&(n.lastHitSource.set(e.tank.id,r),s!==null?(n.threats.set(e.tank.id,{tick:n.tick,from:s}),n.lastHitBy.set(e.tank.id,s),Al(n,e.tank.id,s)):n.lastHitBy.set(e.tank.id,null)),n.events.push({kind:"blockDestroyed",pos:o,by:s}),a.type==="ammo"&&n.pendingExplosions.push({pos:o,radius:ov,damage:av,source:"ammo",by:s});for(const l of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const c=[t[0]+l[0],t[1]+l[1],t[2]+l[2]],h=Bt(e.g,c[0],c[1],c[2]);h&&(h.hp-=rv,i.set(e.g,e),h.hp<=0&&Pl(n,e,c,i,s,r))}}function Qr(n,e,t,i,s,r,a="shell"){const o=Bt(e.g,t[0],t[1],t[2]);o&&(o.hp-=i,s.set(e.g,e),e.tank&&(n.lastHitSource.set(e.tank.id,a),r!==null?(n.threats.set(e.tank.id,{tick:n.tick,from:r}),n.lastHitBy.set(e.tank.id,r),Al(n,e.tank.id,r)):n.lastHitBy.set(e.tank.id,null)),o.hp<=0&&Pl(n,e,t,s,r,a))}function ux(n,e){const t=ph*ti,i=Cl(n);for(const s of n.shells){if(!s.alive)continue;let r=1/0;for(const o of n.fences){if(!wl(n,o))continue;const l=ex(o,s.pos,s.dir,t);l!==null&&l<r&&(r=l)}if(r!==1/0){s.pos=kr(s.pos,il(s.dir,r)),s.alive=!1,n.events.push({kind:"shellImpact",pos:[...s.pos]});continue}const a=[];for(const o of i){if(o.tank&&o.tank.id===s.owner)continue;let l,c;if(o.structure)l=[s.pos[0]-o.structure.x,s.pos[1],s.pos[2]-o.structure.z],c=s.dir;else{const h=o.part==="turret"?uh:bl;l=h(o.tank,s.pos),c=Ah(h(o.tank,kr(s.pos,s.dir)),l)}for(const h of Jr(o.g,l,c,t))a.push({t:h.t,ctx:o,cell:h.cell})}a.sort((o,l)=>o.t-l.t);for(const o of a){if(!s.alive)break;const l=Bt(o.ctx.g,o.cell[0],o.cell[1],o.cell[2]);if(!l)continue;const c=fo(o.ctx,o.cell);o.ctx.tank&&(n.lastHitBy.set(o.ctx.tank.id,s.owner),n.lastHitSource.set(o.ctx.tank.id,"shell"));const h=uv[l.type];if(s.budget<h){Qr(n,o.ctx,o.cell,1,e,s.owner),s.alive=!1,n.events.push({kind:"shellImpact",pos:c});break}s.budget-=h,Pl(n,o.ctx,o.cell,e,s.owner)}s.alive&&(s.pos=kr(s.pos,il(s.dir,t)),s.pos[1]<0?(s.alive=!1,n.events.push({kind:"shellImpact",pos:[s.pos[0],0,s.pos[2]]})):(Math.abs(s.pos[0])>n.arenaHalf||Math.abs(s.pos[2])>n.arenaHalf)&&(s.alive=!1))}n.shells=n.shells.filter(s=>s.alive)}function hx(n,e){const t=Cl(n);for(;n.pendingExplosions.length;){const i=n.pendingExplosions.shift();n.events.push({kind:"explosion",pos:i.pos,radius:i.radius,damage:i.damage,source:i.source});for(const s of t)for(let r=0;r<s.g.size.z;r++)for(let a=0;a<s.g.size.y;a++)for(let o=0;o<s.g.size.x;o++){if(!Bt(s.g,o,a,r))continue;const l=[o,a,r];cx(fo(s,l),i.pos)<=i.radius&&Qr(n,s,l,i.damage,e,i.by??null,i.source)}}}function sl(n){const e=new Map;for(let t=0;t<n.size.z;t++)for(let i=0;i<n.size.y;i++)for(let s=0;s<n.size.x;s++){const r=Bt(n,s,i,t);r&&e.set(`${s},${i},${t}`,r.type)}return e}function Br(n,e,t,i){if(!t.length)return;const s=t.map(o=>fo(e,o)),r=[0,0,0];for(const o of s)r[0]+=o[0]/s.length,r[1]+=o[1]/s.length,r[2]+=o[2]/s.length;const a={id:n.nextId++,pos:r,vel:[(n.rng.next()-.5)*3,2+n.rng.next()*2,(n.rng.next()-.5)*3],angle:0,spin:(n.rng.next()-.5)*6,settleTick:n.tick+lv,cells:t.map((o,l)=>({off:Ah(s[l],r),type:i.get(o.join(","))??"hull"}))};n.chunks.push(a),n.events.push({kind:"chunkDetached",id:a.id})}function dx(n,e){const t=new Set,i=Cl(n);for(const[s,r]of e){if(t.has(s))continue;t.add(s);const a=r.structure?"structure":r.part,o=sl(s),l=fh(s,a);if(l.length===0){if(Br(n,r,zr(s,[]),o),r.tank&&r.part==="hull"){r.tank.alive=!1;const c=n.lastHitBy.get(r.tank.id)??null;if(n.events.push({kind:"tankKilled",id:r.tank.id,pos:[r.tank.x,1,r.tank.z],by:c,cause:"core",source:n.lastHitSource.get(r.tank.id)??"shell"}),r.tank.id===0)n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+xh;else if(c===0){const d=n.brains.get(r.tank.id);n.score+=d?.kind==="super"?Cs.super:Cs.slow}const h=i.find(d=>d.tank===r.tank&&d.part==="turret");h&&!t.has(h.g)&&(t.add(h.g),Br(n,h,zr(h.g,[]),sl(h.g)))}}else{const c=zr(s,l);c.length&&Br(n,r,c,o)}}}function fx(n,e){for(const t of n.tanks)if(!(!t.alive||xi(t.turret,"gun")>0)){if(t.selfDestructTick===null){t.selfDestructTick=n.tick+pv,n.events.push({kind:"selfDestructArmed",id:t.id,pos:[t.x,1,t.z],seconds:10});continue}if(!(n.tick<t.selfDestructTick)){n.pendingExplosions.push({pos:[t.x,.6,t.z],radius:mv,damage:gv,source:"selfDestruct"});for(const[i,s]of[[t.hull,"hull"],[t.turret,"turret"]]){const r={g:i,tank:t,part:s};Br(n,r,zr(i,[]),sl(i)),e.set(i,r)}t.alive=!1,n.events.push({kind:"tankKilled",id:t.id,pos:[t.x,1,t.z],by:null,cause:"selfDestruct",source:"selfDestruct"}),t.id===0&&(n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+xh)}}}function px(n){const e=[];for(const t of n.chunks)t.vel[1]-=9.8*ti,t.pos=kr(t.pos,il(t.vel,ti)),t.angle+=t.spin*ti,(t.pos[1]<=.2||n.tick>=t.settleTick)&&e.push(t);if(e.length){n.chunks=n.chunks.filter(t=>!e.includes(t));for(const t of e)for(const i of t.cells)n.rubble.push({x:t.pos[0]+i.off[0],z:t.pos[2]+i.off[2],type:i.type,born:n.tick});for(;n.rubble.length>gh;)n.rubble.shift();n.rubbleRev++,n.events.push({kind:"rubbleChanged"})}}function Rh(n,e=[]){if(n.events=[],n.phase==="over")return;n.tick+=1;const t=new Map;if(n.phase==="play"&&!n.tanks[0].alive&&n.respawnTick>0&&n.tick>=n.respawnTick&&e[0]?.firePressed){const i=n.rng.next()*Math.PI*2,s=lh(0,Math.sin(i)*120,Math.cos(i)*120,n.rng.next()*Math.PI*2);s.spawnTick=n.tick,n.tanks[0]=s,n.respawnTick=0}for(let i=0;i<n.tanks.length;i++){const s=n.tanks[i];if(!s.alive)continue;const r=n.brains.get(s.id),a=i===0?e[0]??ja():r?Cv(n,r,s):ja();if(Y_(s,a,ti,n.arenaHalf),s.cooldown=Math.max(0,s.cooldown-ti),a.fire&&s.cooldown===0&&fh(s.turret,"turret").length>0){const o=hh(s),l=co(s,[0,We,s.turret.size.z/2*We+.15]);n.shells.push({id:n.nextId++,owner:s.id,pos:l,dir:o,budget:sv,alive:!0});const c=n.brains.get(s.id)?.kind,h=c?Fs[c].cooldown:null;s.cooldown=h?h[0]+n.rng.next()*(h[1]-h[0]):mh,n.events.push({kind:"fire",pos:l,dir:o,owner:s.id})}}if(ux(n,t),Wv(n),Iv(n),rx(n),n.tick%600===0){for(const i of n.structures)if(i.kind==="scan"&&i.grid.cells.some(s=>s)){n.events.push({kind:"scanPing"});break}}hx(n,t);for(const i of n.tanks){if(!i.alive||Math.abs(i.speed)<.5)continue;const s=i.hull.size.z*We/2;for(const r of n.structures){const a=r.grid.size.x*We/2+s,o=r.grid.size.z*We/2+s;if(Math.abs(i.x-r.x)>a||Math.abs(i.z-r.z)>o)continue;const l=i.x-r.x,c=i.z-r.z,h=Math.max(0,Math.floor((l-s)/We+r.grid.size.x/2)),d=Math.min(r.grid.size.x-1,Math.ceil((l+s)/We+r.grid.size.x/2)),m=Math.max(0,Math.floor((c-s)/We+r.grid.size.z/2)),g=Math.min(r.grid.size.z-1,Math.ceil((c+s)/We+r.grid.size.z/2));let _=!1;for(let u=m;u<=g;u++)for(let p=h;p<=d;p++)for(let f=0;f<r.grid.size.y;f++){if(!Bt(r.grid,p,f,u))continue;const E=r.x+(p-r.grid.size.x/2+.5)*We,y=r.z+(u-r.grid.size.z/2+.5)*We;Math.hypot(E-i.x,y-i.z)<s+.2&&(Qr(n,{g:r.grid,structure:r},[p,f,u],3,t,i.id),_=!0)}_&&(i.speed*=.85)}for(const r of n.fences){if(!wl(n,r))continue;const a=tx(r,i.x,i.z,i.hull.size.z*We/2);a&&(i.x+=a.x,i.z+=a.z,i.speed*=.5)}}if(n.tick%30===0){for(const i of n.lavaPools)if(!(n.tick>=i.untilTick))for(const s of n.tanks){if(!s.alive||Math.hypot(s.x-i.x,s.z-i.z)>i.radius)continue;const r=[];for(let a=0;a<s.hull.size.z;a++)for(let o=0;o<s.hull.size.y;o++)for(let l=0;l<s.hull.size.x;l++)Bt(s.hull,l,o,a)&&r.push([l,o,a]);if(r.length){const a=r[Math.floor(n.rng.next()*r.length)];Qr(n,{g:s.hull,tank:s,part:"hull"},a,2,t,null,"volcano")}}n.lavaPools=n.lavaPools.filter(i=>n.tick<i.untilTick)}dx(n,t),fx(n,t),px(n),Tv(n);for(const i of n.events)i.kind==="blockDestroyed"&&i.by===0?n.score+=Cs.block:i.kind==="kill"&&i.by===0&&(n.score+=i.what==="bomber"?Cs.bomber:Cs.missile);for(;n.score>=n.nextLifeAt;)n.lives++,n.nextLifeAt+=1e4;for(;n.rubble.length>gh;)n.rubble.shift(),n.rubbleRev++;n.phase==="play"&&n.tick>=uo&&(n.phase="over",n.events.push({kind:"matchEnd"}))}const mx=n=>{const e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]};class gx{shells=[];nextVolley;recent=[];explosions=0;constructor(e=Math.random){this.nextVolley=.15+e()*.35}get activeCount(){return this.shells.length}get recentEvents(){return this.recent}get explosionCount(){return this.explosions}clear(){this.shells=[],this.recent=[]}forceVolley(e=Math.random,t=0){this.spawnVolley(e,t)}update(e,t=Math.random,i=0){this.nextVolley-=e;const s=[],r=[];for(const a of this.shells)a.age+=e,a.pos[0]+=a.dir[0]*a.speed*e,a.pos[1]+=a.dir[1]*a.speed*e,a.pos[2]+=a.dir[2]*a.speed*e,s.push({kind:"tracer",pos:[...a.pos],dir:[...a.dir]}),a.age>=a.life?(this.explosions++,s.push({kind:"explosion",pos:[...a.pos]})):r.push(a);return this.shells=r,this.nextVolley<=0&&this.spawnVolley(t,i),this.recent=s,s}spawnVolley(e,t){const i=2+Math.floor(e()*2),s=t+(e()-.5)*1.2;for(let r=0;r<i;r++){const a=s+(e()-.5)*.3,o=700+e()*100,l=[Math.sin(a)*o,.6+e()*.8,Math.cos(a)*o],c=a+(e()-.5)*.35,h=o+(e()-.5)*80,d=[Math.sin(c)*h,160+e()*80,Math.cos(c)*h],m=mx([d[0]-l[0],d[1]-l[1],d[2]-l[2]]),g=85+e()*35;this.shells.push({pos:l,dir:m,speed:g,age:0,life:.9+e()*.3})}this.nextVolley=.7+e()*1.1}}const _x=[{d:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{d:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{d:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{d:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{d:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{d:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];function wh(n){const e=[],t=new Map,i=We,s=d=>(d-n.size.x/2)*i,r=d=>d*i,a=d=>(d-n.size.z/2)*i,o=(d,m,g,_)=>[s(m+d[0]),r(g+d[1]),a(_+d[2])];for(let d=0;d<n.size.z;d++)for(let m=0;m<n.size.y;m++)for(let g=0;g<n.size.x;g++)if(Bt(n,g,m,d))for(const{d:_,corners:u}of _x){if(Bt(n,g+_[0],m+_[1],d+_[2]))continue;const p=u.map(f=>o(f,g,m,d));for(const f of[0,1,2,0,2,3])e.push(...p[f]);for(let f=0;f<4;f++){const E=p[f],y=p[(f+1)%4],T=E.map(P=>P.toFixed(4)).join(","),w=y.map(P=>P.toFixed(4)).join(","),D=T<w?`${T}|${w}`:`${w}|${T}`;t.has(D)||t.set(D,[...E,...y])}}const l=new lt;l.setAttribute("position",new nt(e,3));const c=[];for(const d of t.values())c.push(...d);const h=new lt;return h.setAttribute("position",new nt(c,3)),{faces:l,edges:h}}function vx(n,e,t,i=200,s=38){const r=Math.cos(t),a=Math.sin(t);let o=(-n*r+e*a)*(s/i),l=-(n*a+e*r)*(s/i);const c=Math.hypot(o,l),h=c>s;return h&&(o*=s/c,l*=s/c),{x:o,y:l,clamped:h}}function tu(n,e){return{x:Math.sin(n)*e,y:-Math.cos(n)*e}}function qi(n,e){return n+e}function Xi(n,e=0){return e-n}function xx(n,e,t=1200){const i=n-e;return i>=0&&i<t?i/t:null}function br(n,e,t){return t-Math.atan2(n,e)}const jn=38,nu=200,iu=[16729139,16739133,12986408,16747109,12000284];function Sx(n,e=255,t=!1){return"#"+(t?16723245:iu[Math.abs(n)%iu.length]).toString(16).padStart(6,"0")+Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function Mx(){const n=document.createElement("canvas");n.id="hud",document.body.append(n);const e=n.getContext("2d"),t=document.createElement("div");t.id="alerts",document.body.append(t);const i=()=>{n.width=window.innerWidth,n.height=window.innerHeight};i(),window.addEventListener("resize",i);function s(o){const l=document.createElement("div");for(l.className="alert",l.textContent=o,t.append(l),setTimeout(()=>l.remove(),4200);t.children.length>3;)t.firstChild?.remove()}function r(o,l,c,h,d){e.fillStyle=d,e.beginPath(),e.moveTo(o+Math.sin(c)*h,l-Math.cos(c)*h),e.lineTo(o+Math.sin(c+2.55)*h*.75,l-Math.cos(c+2.55)*h*.75),e.lineTo(o+Math.sin(c-2.55)*h*.75,l-Math.cos(c-2.55)*h*.75),e.closePath(),e.fill()}function a(o){const l=n.width,c=n.height;e.clearRect(0,0,l,c);const h=o.palette,d=h.hud,m=qi(o.heading,o.turretYaw);e.fillStyle=d+"14",e.fillRect(0,0,l,90),e.strokeStyle=d+"88",e.beginPath(),e.moveTo(0,90.5),e.lineTo(l,90.5),e.stroke();const g=l/2,_=45;e.strokeStyle=d+"aa",e.beginPath(),e.arc(g,_,jn,0,Math.PI*2),e.stroke(),e.strokeStyle=d+"44",e.beginPath(),e.arc(g,_,jn*30/nu,0,Math.PI*2),e.stroke();const u=Xi(m,m),p=tu(u,jn);e.strokeStyle=d+"55",e.beginPath(),e.moveTo(g,_),e.lineTo(g+p.x,_+p.y),e.stroke();const f=(R,S)=>{const v=vx(R-o.x,S-o.z,m,nu,jn-3);return{x:g+v.x,y:_+v.y}};if(o.storm){e.fillStyle=d+"66";for(let R=0;R<60;R++){const S=Math.random()*Math.PI*2,v=Math.random()*jn;e.fillRect(g+Math.sin(S)*v,_-Math.cos(S)*v,1.5,1.5)}}else{if(o.known)for(const[R,S]of o.known){const v=f(S.x,S.z),A=o.tick-S.tick,L=S.source==="gunfire"||S.source==="ping"?Math.max(0,1-A/180):1,k=Math.floor(L*255),W=o.superIds.has(R),V=Sx(R,k,W),X=o.tankHeadings.get(R)??S.heading,$=o.tankTurrets.get(R)??S.turretYaw??0;r(v.x,v.y,Xi(X,m),W?6:4.5,V);const B=Xi(X+$,m);e.strokeStyle=V,e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(v.x+Math.sin(B)*8,v.y-Math.cos(B)*8),e.stroke()}if(o.scanner){const R=f(o.scanner.x,o.scanner.z);if(e.fillStyle="#35e0ff",e.beginPath(),e.moveTo(R.x,R.y-4),e.lineTo(R.x+4,R.y),e.lineTo(R.x,R.y+4),e.lineTo(R.x-4,R.y),e.closePath(),e.fill(),o.scanPulse!==null){const S=Math.max(0,Math.min(1,o.scanPulse)),v=4+S*22;e.save(),e.beginPath(),e.arc(g,_,jn,0,Math.PI*2),e.clip(),e.strokeStyle=`rgba(53,224,255,${(1-S).toFixed(3)})`,e.lineWidth=1.5,e.beginPath(),e.arc(R.x,R.y,v,0,Math.PI*2),e.stroke(),e.restore()}}for(const R of o.missiles){const S=f(R.x,R.z),v=(R.targeted?5+Math.sin(o.tick*.4)*1.5:3.5)*R.scale;r(S.x,S.y,Xi(R.heading,m),v,R.targeted?"#ff4433":"#ffaa33")}if(o.bomber&&o.bomberBlip){const R=f(o.bomber.x,o.bomber.z);r(R.x,R.y,Xi(o.bomber.heading,m),6,d)}}if(o.threatBearing){const R=o.threatBearing.angle,S=jn-5,v=g+Math.sin(R)*S,A=_-Math.cos(R)*S,L=Math.max(0,1-o.threatBearing.progress);r(v,A,R,5,`rgba(255,68,51,${L.toFixed(3)})`)}r(g,_,Xi(o.heading,m),6,h.worldCss);const E=tu(0,11);e.strokeStyle=d,e.beginPath(),e.moveTo(g,_),e.lineTo(g+E.x,_+E.y),e.stroke(),e.font="13px monospace",e.fillStyle=d,e.textAlign="left",e.fillText(`SCORE ${String(o.score).padStart(6,"0")}`,12,32),e.fillText(`LIVES ${o.lives}`,12,52);const y=Math.floor(o.secondsLeft/60),T=Math.floor(o.secondsLeft%60);if(e.textAlign="right",e.fillText(`T-${String(y).padStart(2,"0")}:${String(T).padStart(2,"0")}`,g-jn-14,32),e.textAlign="left",o.alive){const R=l/2,S=c/2;e.strokeStyle=h.worldCss+"cc",e.beginPath(),e.moveTo(R-10,S),e.lineTo(R-4,S),e.moveTo(R+4,S),e.lineTo(R+10,S),e.moveTo(R,S-10),e.lineTo(R,S-4),e.moveTo(R,S+4),e.lineTo(R,S+10),e.stroke(),e.strokeStyle=d+"aa",e.beginPath(),e.arc(R,S,15,-Math.PI/2,-Math.PI/2+Math.PI*2*o.cooldownFrac),e.stroke();const v=S-o.elevation*40;e.strokeStyle=h.worldCss+"88",e.beginPath(),e.moveTo(R-6,v),e.lineTo(R+6,v),e.stroke()}if(o.deathcam){const R=Math.max(120,c*.24);e.font="bold 16px monospace",e.textAlign="center";const S=e.measureText(o.deathcam).width;e.fillStyle=d+"20",e.fillRect(l/2-S/2-16,R-22,S+32,32),e.fillStyle=d,e.fillText(o.deathcam,l/2,R),e.textAlign="left"}const w=c*.68,D=R=>{e.font="bold 13px monospace",e.textAlign="center";const S=e.measureText(R).width;e.fillStyle=d+"18",e.fillRect(l/2-S/2-12,w-19,S+24,28),e.fillStyle=d,e.fillText(R,l/2,w),e.textAlign="left"};o.spectator?D(o.respawnReady?`SPECTATING ${o.spectator.label} · ←/→ CYCLE · PRESS SPACE TO RESPAWN`:`SPECTATING ${o.spectator.label} · ←/→ CYCLE · RESPAWN ${Math.ceil(o.spectator.secondsLeft)}s`):o.respawnReady&&D("PRESS SPACE TO RESPAWN"),o.alive&&o.selfDestructSeconds!==null&&(e.font="bold 16px monospace",e.textAlign="center",e.fillStyle=d,e.fillText(`SELF-DESTRUCT ${Math.ceil(o.selfDestructSeconds)}s`,l/2,c-96),e.textAlign="left");const P=[["CORE",o.status.core],["TRD",o.status.tread],["GUN",o.status.gun],["ENG",o.status.engine]];if(e.font="10px monospace",P.forEach(([R,S],v)=>{const A=c-64+v*14;e.fillStyle=d+"cc",e.fillText(R,12,A+4),e.fillStyle=h.worldCss+"cc";for(let L=0;L<Math.min(S,12);L++)e.fillRect(44+L*7,A-3,5,5)}),e.font="11px monospace",e.textAlign="right",o.killfeed.slice(-4).forEach((R,S)=>{const v=o.now-R.born,A=Math.max(0,1-v/6e3);e.fillStyle=d+Math.floor(A*220).toString(16).padStart(2,"0"),e.fillText(R.text,l-12,c-60+S*14)}),e.textAlign="left",o.hitFlash&&o.now-o.hitFlash.born<450){const R=o.hitFlash.angle,S=1-(o.now-o.hitFlash.born)/450,v=Math.min(l,c)/2-40,A=l/2+Math.sin(R)*v,L=c/2-Math.cos(R)*v;e.fillStyle=d+Math.floor(S*255).toString(16).padStart(2,"0"),e.beginPath(),e.moveTo(A+Math.sin(R)*12,L-Math.cos(R)*12),e.lineTo(A+Math.sin(R+2.5)*8,L-Math.cos(R+2.5)*8),e.lineTo(A+Math.sin(R-2.5)*8,L-Math.cos(R-2.5)*8),e.closePath(),e.fill()}}return{canvas:n,draw:a,alert:s}}function Tx(n,e){return(n?1:0)-(e?1:0)}function yx(n,e){return(n?1:0)-(e?1:0)}const on=new Set;let su=!1;const Ex=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);function bx(n){Ex.has(n.code)&&(n.preventDefault(),on.add(n.code))}function Ax(n){on.delete(n.code)}function Rx(){on.clear()}function wx(){window.addEventListener("keydown",bx),window.addEventListener("keyup",Ax),window.addEventListener("blur",Rx)}function Ch(){const n=ja();n.throttle=(on.has("KeyW")?1:0)-(on.has("KeyS")?1:0),n.turn=yx(on.has("KeyA"),on.has("KeyD")),n.turretYaw=Tx(on.has("ArrowLeft"),on.has("ArrowRight")),n.gunPitch=(on.has("ArrowUp")?1:0)-(on.has("ArrowDown")?1:0);const e=on.has("Space");n.fire=e,n.firePressed=e&&!su,su=e;const t=navigator.getGamepads?navigator.getGamepads():[];for(const i of t){if(!i)continue;const s=h=>Math.abs(h)>.15?h:0,r=s(i.axes[0]??0),a=s(i.axes[1]??0),o=s(i.axes[2]??0),l=s(i.axes[3]??0),c=!!i.buttons[0]?.pressed||!!i.buttons[7]?.pressed;if(r||a||o||l||c){n.throttle=-a,n.turn=-r,n.turretYaw=-o,n.gunPitch=-l,n.fire=c;break}}return n}const gn=[{id:"green",label:"P1 green",world:3800939,worldCss:"#39ff6b",dim:1931834,grid:668441,gridCenter:1002788,rubble:1931834,moon:10485696,hud:"#ff4433",hazard:[1,.35,.1]},{id:"amber",label:"P3 amber",world:16756736,worldCss:"#ffb000",dim:9064960,grid:3350528,gridCenter:5058560,rubble:9064960,moon:16769184,hud:"#ffcc55",hazard:[1,.25,.1]},{id:"cyan",label:"P4 cyan",world:3531007,worldCss:"#35e0ff",dim:1927802,grid:665651,gridCenter:997965,rubble:1927802,moon:10547455,hud:"#77ffff",hazard:[1,.35,.1]},{id:"bw",label:"B&W",world:16777215,worldCss:"#ffffff",dim:10066329,grid:2236962,gridCenter:3355443,rubble:10066329,moon:16777215,hud:"#ffffff",hazard:[1,1,1]}];class Cx{object;max;pos;col;p;cursor=0;constructor(e=1024,t=!0){this.max=e,this.pos=new Float32Array(e*6),this.col=new Float32Array(e*6),this.p=new Float32Array(e*15);const i=new lt;i.setAttribute("position",new Qt(this.pos,3).setUsage(Wl)),i.setAttribute("color",new Qt(this.col,3).setUsage(Wl));const s=new vl({vertexColors:!0,blending:Ps,depthWrite:!1,transparent:!0,fog:t});this.object=new Wu(i,s),this.object.frustumCulled=!1}spawn(e,t,i,s,r,a,o,l,c,h,d=.5,m=0,g=0,_=0){const u=this.cursor++%this.max*15,p=this.p;p[u]=e,p[u+1]=t,p[u+2]=i,p[u+3]=s,p[u+4]=r,p[u+5]=a,p[u+6]=o,p[u+7]=o,p[u+8]=d,p[u+9]=l,p[u+10]=c,p[u+11]=h,p[u+12]=m,p[u+13]=g,p[u+14]=_}update(e){const t=this.p;for(let i=0;i<this.max;i++){const s=i*15,r=i*6;if(t[s+6]<=0){this.pos[r]=this.pos[r+3]=0,this.pos[r+1]=this.pos[r+4]=-1e3,this.pos[r+2]=this.pos[r+5]=0,this.col[r]=this.col[r+1]=this.col[r+2]=0,this.col[r+3]=this.col[r+4]=this.col[r+5]=0;continue}t[s+6]-=e,t[s]+=t[s+3]*e,t[s+1]+=t[s+4]*e,t[s+2]+=t[s+5]*e;let a=t[s+12],o=t[s+13],l=t[s+14];a===0&&o===0&&l===0&&(a=t[s+3],o=t[s+4],l=t[s+5]);const c=Math.hypot(a,o,l)||1,h=t[s+8]/c;this.pos[r]=t[s],this.pos[r+1]=t[s+1],this.pos[r+2]=t[s+2],this.pos[r+3]=t[s]-a*h,this.pos[r+4]=t[s+1]-o*h,this.pos[r+5]=t[s+2]-l*h;const d=Math.max(t[s+6],0)/t[s+7];this.col[r]=this.col[r+3]=t[s+9]*d,this.col[r+1]=this.col[r+4]=t[s+10]*d,this.col[r+2]=this.col[r+5]=t[s+11]*d}this.object.geometry.attributes.position.needsUpdate=!0,this.object.geometry.attributes.color.needsUpdate=!0}}const Gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Os{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Px=new qu(-1,1,1,-1,0,1);class Dx extends lt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const Lx=new Dx;class Ph{constructor(e){this._mesh=new Ft(Lx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Px)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Dh extends Os{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rs.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ph(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ru extends Os{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ix extends Os{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ux{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Re);this._width=i.width,this._height=i.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dh(Gr),this.copyPass.material.blending=On,this.clock=new Vf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ru!==void 0&&(a instanceof ru?i=!0:a instanceof Ix&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hx extends Os{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Nx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class as extends Os{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,a,{type:kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Jt(r,a,{type:kn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Jt(r,a,{type:kn});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=Nx;this.highPassUniforms=rs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rs.clone(Gr.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader,blending:Ps,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new yi,this._fsQuad=new Ph(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=as.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=as.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}as.BlurDirectionX=new Re(1,0);as.BlurDirectionY=new Re(0,1);const Fx={uniforms:{tDiffuse:{value:null},tPrev:{value:null},uTime:{value:0},uRes:{value:new Re(1,1)},uScan:{value:.2},uVignette:{value:.4},uBarrel:{value:.04},uPersist:{value:.4},uRoll:{value:.08},uSafe:{value:0}},vertexShader:`
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
  `};function zx(n,e,t){const i=n.getDrawingBufferSize(new Re),s=new Jt(i.x,i.y,{type:_n}),r=new Ux(n,s);r.addPass(new Hx(e,t));const a=new as(new Re(i.x,i.y),.9,.5,0);r.addPass(a);const o=new Dh(Fx);o.uniforms.uRes.value.set(i.x,i.y),r.addPass(o);let l=new gc(i.x,i.y);return o.uniforms.tPrev.value=l,{composer:r,bloom:a,crt:o,render(c){o.uniforms.uTime.value=c,r.render(),n.copyFramebufferToTexture(l)},resize(c,h){r.setSize(c,h);const d=n.getDrawingBufferSize(new Re);o.uniforms.uRes.value.set(d.x,d.y),l.dispose(),l=new gc(d.x,d.y),o.uniforms.tPrev.value=l}}}const ou=1931834,Ar=Math.PI*2;function Ox(n){const e=(v,A)=>new qf(400,80,v,A),t=[];for(let v=0;v<256;v++){const A=v/256*Ar,L=14+22*Math.abs(Math.sin(A*3.1))+12*Math.abs(Math.sin(A*7.3+1.7))+6*Math.sin(A*13.7);t.push(Math.sin(A)*620,L,Math.cos(A)*620)}new lt().setAttribute("position",new nt(t,3));const r=[];for(let v=0;v<256;v++){const A=v*3,L=(v+1)%256*3;r.push(t[A],t[A+1],t[A+2],t[L],t[L+1],t[L+2])}const a=kt(ou,1.1,{fog:!1});n.add(Vn(r,a));const o=[];for(let v=0;v<256;v++){const A=v*3,L=(v+1)%256*3;o.push(t[A],-2,t[A+2],t[L],-2,t[L+2],t[L],t[L+1],t[L+2],t[A],-2,t[A+2],t[L],t[L+1],t[L+2],t[A],t[A+1],t[A+2])}const l=new lt;l.setAttribute("position",new nt(o,3));const c=new yi({color:0,side:cn,fog:!1}),h=new Ft(l,c);n.add(h);const d=.9,m=Math.sin(d)*620,g=Math.cos(d)*620,_=[[0,95],[22,64],[44,40],[64,24],[76,15]],u=10,p=[];for(const[v,A]of _)for(let L=0;L<u;L++){const k=L/u*Ar,W=(L+1)/u*Ar;p.push(m+Math.sin(k)*A,v,g+Math.cos(k)*A,m+Math.sin(W)*A,v,g+Math.cos(W)*A)}for(let v=0;v<u;v++){const A=v/u*Ar;for(let L=0;L<_.length-1;L++){const[k,W]=_[L],[V,X]=_[L+1];p.push(m+Math.sin(A)*W,k,g+Math.cos(A)*W,m+Math.sin(A)*X,V,g+Math.cos(A)*X)}}const f=kt(ou,1.2,{fog:!1});n.add(Vn(p,f));const E=new U(m,78,g),y=[],T=-350,w=210,D=-520,P=14;for(let v=0;v<=40;v++){const A=Math.PI*.25+v/40*Math.PI*1.5;y.push(T+Math.cos(A)*P,w+Math.sin(A)*P,D)}for(let v=40;v>=0;v--){const A=Math.PI*.25+v/40*Math.PI*1.5;y.push(T+6+Math.cos(A)*P*.92,w+Math.sin(A)*P*.92,D)}const R=[];for(let v=0;v<y.length/3-1;v++){const A=v*3,L=A+3;R.push(y[A],y[A+1],y[A+2],y[L],y[L+1],y[L+2])}const S=kt(10485696,1.2,{fog:!1});return n.add(Vn(R,S)),{crater:E,mountainMat:a,volcanoMat:f,moonMat:S,makeGrid:e}}function kx(n){const e=[],t=[],i=We;for(const a of n){const o=a.x-i/2,l=a.x+i/2,c=0,h=i,d=a.z-i/2,m=a.z+i/2,g=[[o,c,d],[l,c,d],[l,c,m],[o,c,m],[o,h,d],[l,h,d],[l,h,m],[o,h,m]],_=[[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,3,7,4]];for(const u of _){for(const p of[0,1,2,0,2,3])e.push(...g[u[p]]);for(let p=0;p<4;p++)t.push(...g[u[p]],...g[u[(p+1)%4]])}}const s=new lt;s.setAttribute("position",new nt(e,3));const r=new lt;return r.setAttribute("position",new nt(t,3)),{faces:s,edges:r}}function Bx(n){const e=[],t=We/2;for(const{off:s}of n){const[r,a,o]=s,l=[[r-t,a-t,o-t],[r+t,a-t,o-t],[r+t,a-t,o+t],[r-t,a-t,o+t],[r-t,a+t,o-t],[r+t,a+t,o-t],[r+t,a+t,o+t],[r-t,a+t,o+t]],c=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];for(const[h,d]of c)e.push(...l[h],...l[d])}const i=new lt;return i.setAttribute("position",new nt(e,3)),i}const Jo={palette:0,bloom:.9,crt:.6,wireframe:!1,safe:!1,shake:!0,fov:60,res:1,map:"classic",volMaster:.8,volSfx:.8},Lh="vectorzone-settings";function Gx(){try{const n=localStorage.getItem(Lh);return n?{...Jo,...JSON.parse(n)}:{...Jo}}catch{return{...Jo}}}function Ih(n){try{localStorage.setItem(Lh,JSON.stringify(n))}catch{}}function Vx(n,e,t){const i=document.createElement("div");i.id="panel";const s=()=>{Ih(n),t(n)},r=(E,y)=>{const T=document.createElement("label");T.className="row";const w=document.createElement("span");w.textContent=E,T.append(w,y),i.append(T)},a=document.createElement("button"),o=()=>{a.textContent=e[n.palette%e.length]};o(),a.onclick=()=>{n.palette=(n.palette+1)%e.length,o(),s()},r("phosphor",a);const l=document.createElement("input");l.type="checkbox",l.checked=n.wireframe,l.onchange=()=>{n.wireframe=l.checked,s()},r("wireframe",l);const c=document.createElement("input");c.type="checkbox",c.checked=n.safe,c.onchange=()=>{n.safe=c.checked,s()},r("safe mode",c);const h=document.createElement("input");h.type="range",h.min="0",h.max="2",h.step="0.1",h.value=String(n.bloom),h.oninput=()=>{n.bloom=Number(h.value),s()},r("bloom",h);const d=document.createElement("input");d.type="range",d.min="0",d.max="1",d.step="0.1",d.value=String(n.crt),d.oninput=()=>{n.crt=Number(d.value),s()},r("crt",d);const m=document.createElement("input");m.type="checkbox",m.checked=n.shake,m.onchange=()=>{n.shake=m.checked,s()},r("shake",m);const g=document.createElement("input");g.type="range",g.min="50",g.max="90",g.step="5",g.value=String(n.fov),g.oninput=()=>{n.fov=Number(g.value),s()},r("fov",g);const _=document.createElement("input");_.type="range",_.min="0.5",_.max="1",_.step="0.25",_.value=String(n.res),_.oninput=()=>{n.res=Number(_.value),s()},r("res",_);const u=document.createElement("select");for(const E of nx){const y=document.createElement("option");y.value=E,y.textContent=bh[E].label,u.append(y)}u.value=n.map,u.onchange=()=>{n.map=u.value,s()},r("map",u);const p=document.createElement("input");p.type="range",p.min="0",p.max="1",p.step="0.1",p.value=String(n.volMaster),p.oninput=()=>{n.volMaster=Number(p.value),s()},r("vol",p);const f=document.createElement("input");return f.type="range",f.min="0",f.max="1",f.step="0.1",f.value=String(n.volSfx),f.oninput=()=>{n.volSfx=Number(f.value),s()},r("sfx",f),i}function Uh(n,e=0){return n.filter(t=>t.id!==e&&t.alive).sort((t,i)=>t.id-i.id)}function Wx(n,e,t){if(n.length===0)return null;const i=n.findIndex(r=>r.id===e),s=i<0?0:(i+t+n.length)%n.length;return n[s].id}function Xx(n,e){return e==="super"?"SUPERTANK":`LIGHT TANK ${n.id}`}function Yx(n,e,t){if(t==="airburst")return 0;const i=Math.max(14,e*3.5);if(n>=i)return 0;const s=1-n/i;return Math.min(.85,s*(.25+e*.07))}function qx(n){return n<5?(1-n/5)*.18:0}const Kx=900,$x=1400,Zx=2200;function jx(n){return n.cause==="selfDestruct"||n.source==="selfDestruct"?"SELF-DESTRUCT":n.source==="missile"?"MISSILE":n.source==="bomb"?"BOMBER":n.source==="volcano"?"VOLCANO":n.source==="meteor"?"METEOR":n.source==="ammo"?"AMMO EXPLOSION":n.by!==null?n.killerKind==="super"?`SUPERTANK AI-${n.by}`:`AI-${n.by}`:"THE ZONE"}function Jx(n,e,t,i){return{stage:"explosion",startedAt:n,pos:[...e],killerId:t,bomberId:i}}function Qx(n,e,t){const i=e-n.startedAt;if(n.stage==="explosion"){const s=n.killerId!==null&&t;if(i>=(s?Kx:Zx))return{...n,stage:s?"killer":"spectator",startedAt:e}}else if(n.stage==="killer"&&(!t||i>=$x))return{...n,stage:"spectator",startedAt:e};return n}const Dl=3800939,Ct=new P_({antialias:!0});Ct.setPixelRatio(Math.min(window.devicePixelRatio,2));Ct.setSize(window.innerWidth,window.innerHeight);Ct.info.autoReset=!1;document.body.appendChild(Ct.domElement);const tt=new Df;tt.background=new Be(0);tt.fog=new _l(0,60,260);const je=new ln(60,window.innerWidth/window.innerHeight,.1,2e3),rl=document.getElementById("stats"),Hh=new yi({color:0,side:cn}),Nh=kt(Dl,2.4),Fh=kt(Dl,1.4),zh=kt(Dl,1.8),eS=kt(16755251,2.6,{fog:!1}),tS=new yi({color:16739115,fog:!1,depthWrite:!1}),nS=kt(16729139,1.8),iS=kt(3531007,1.8),ni=Gx(),ne=ax(11827170,ni.map);let ue=ne.tanks[0],Mn=null,au=null,qe=null,Vr=null;function Qi(n,e=Nh){const t=wh(n),i=new Ft(t.faces,Hh),s=Fr(t.edges,e),r=new bs;return r.add(i,s),{group:r,mesh:i,lines:s,rev:n.rev}}function ys(n,e){if(n.rev===e.rev)return;const t=wh(e);n.mesh.geometry.dispose(),n.lines.geometry.dispose(),n.mesh.geometry=t.faces,ih(n.lines,t.edges),n.rev=e.rev,Ll++}const Zi=Qi(ue.hull),Tn=Qi(ue.turret);Tn.group.position.set(ue.turretPivot.x,ue.turretPivot.y,ue.turretPivot.z);Tn.group.rotation.order="YXZ";Zi.group.add(Tn.group);tt.add(Zi.group);let Ll=0;const ol=new Map,Oh=n=>n==="depot"?nS:n==="scan"?iS:Fh;for(const n of ne.structures){const e=Qi(n.grid,Oh(n.kind));e.group.position.set(n.x,0,n.z),tt.add(e.group),ol.set(n.id,e)}const kh=new yi({color:0,side:cn}),Il=kt(1931834,1);let eo=new Ft(new lt,kh),to=Vn(new Float32Array(6),Il);eo.frustumCulled=!1;to.frustumCulled=!1;tt.add(eo,to);let lu=-1;const Rr=new Map,Qo=new Map,cu=kt(3800939,1.2,{transparent:!0,opacity:.6}),Bh=kt(16729139,2.2,{transparent:!0,opacity:.75}),al=Vn(new Float32Array(6),Bh);tt.add(al);let uu="",ea=0,$t=0;const Jn=new Float32Array(432),Gh=kt(3531007,1.1,{transparent:!0,opacity:.5,fog:!1}),no=Vn(Jn,Gh);no.visible=!1;tt.add(no);let ta=0;const wr=new Map,Cr=new Map;let Un=null,io=!1;window.addEventListener("keydown",n=>{n.code==="KeyX"&&(io=!io)});const hu=new Float32Array(4096),so=Vn(new Float32Array(6),kt(16729139,1,{transparent:!0,opacity:.7}));so.visible=!1;tt.add(so);const Vh=kt(1931834,.9,{transparent:!0,opacity:.5}),xt=new Float32Array(18),Wr=Vn(xt,Vh);tt.add(Wr);const sn=Mx();let du=-1e9,fu=-1e9,pu=!1;const Es=[];let na=null,Yi=null;const Wh="vectorzone-scores";function sS(){try{return JSON.parse(localStorage.getItem(Wh)??"[]")}catch{return[]}}function rS(){const n=sS();n.push({score:ne.score,date:new Date().toISOString().slice(0,10)}),n.sort((r,a)=>a.score-r.score);const e=n.slice(0,5);try{localStorage.setItem(Wh,JSON.stringify(e))}catch{}const t=gn[ni.palette%gn.length],i=document.createElement("div");i.id="gameover",i.style.color=t.hud;const s=ne.lives<=0?"GAME OVER":"MATCH COMPLETE";i.innerHTML=`<h1>${s}</h1><p class="final">SCORE ${String(ne.score).padStart(6,"0")}</p><table><tr><th>#</th><th>SCORE</th><th>DATE</th></tr>`+e.map((r,a)=>`<tr${r.score===ne.score&&r.date===new Date().toISOString().slice(0,10)?' class="me"':""}><td>${a+1}</td><td>${String(r.score).padStart(6,"0")}</td><td>${r.date}</td></tr>`).join("")+'</table><p class="hint">PRESS R TO RESTART</p>',document.body.append(i)}window.addEventListener("keydown",n=>{n.code==="KeyR"&&ne.phase==="over"&&location.reload()});function oS(){const n=[0,0,2.2,0,0,-1.6,0,0,2.2,-.45,0,1.2,0,0,2.2,.45,0,1.2,0,0,2.2,0,.45,1.2,0,0,2.2,0,-.45,1.2,-.45,0,1.2,-.9,0,.2,.45,0,1.2,.9,0,.2,0,.45,1.2,0,.9,.2,0,-.45,1.2,0,-.9,.2,-.9,0,.2,-.9,0,-.7,.9,0,.2,.9,0,-.7,0,.9,.2,0,.9,-.7,0,-.9,.2,0,-.9,-.7,0,0,-1.6,0,0,-2.6],e=new lt;return e.setAttribute("position",new nt(n,3)),e}const Xh=new Sl(.28,1.4,4);Xh.rotateX(Math.PI/2);function aS(){const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d");e.clearRect(0,0,64,64),e.strokeStyle="#ffaa33",e.lineWidth=5,e.beginPath(),e.moveTo(32,5),e.lineTo(59,32),e.lineTo(32,59),e.lineTo(5,32),e.closePath(),e.stroke(),e.fillStyle="#fff3c4",e.fillRect(27,27,10,10);const t=new Ff(n);return t.colorSpace=Zt,t}const lS=new Bu({map:aS(),transparent:!0,fog:!1,depthWrite:!1,blending:Ps});function cS(){const n=[0,0,-2.4,0,0,2.4,0,.25,1.5,0,.25,2.1,-3.2,0,.2,3.2,0,.2,-3.2,0,.2,-3.2,.3,0,3.2,0,.2,3.2,.3,0,-1.2,0,-2.1,1.2,0,-2.1,0,0,-2.2,0,.9,-2.3,0,.9,-2.3,0,.5,-1.7],e=new lt;return e.setAttribute("position",new nt(n,3)),e}const uS=new U(0,ue.turret.size.y*We+.25,-.9),hS=new cs().setFromAxisAngle(new U(0,1,0),Math.PI);wx();const zn=Ox(tt);let Ki=zn.makeGrid(gn[0].gridCenter,gn[0].grid);tt.add(Ki);const Mt=new Cx(1024,!1);tt.add(Mt.object);let ia=0;const En=zx(Ct,tt,je),ye={tracer:[.6,1,.7],spark:[.2,.9,.4],hazard:[1,.35,.1],scorch:[.45,.22,.08],smoke:[.1,.35,.16]},Xr=new gx;function Yh(n){if(n.map!==ni.map){Ih(n),location.reload();return}const e=gn[n.palette%gn.length];je.fov=n.fov,je.updateProjectionMatrix(),Ct.setPixelRatio(Math.min(window.devicePixelRatio,2)*n.res),Ct.setSize(window.innerWidth,window.innerHeight),En.resize(window.innerWidth,window.innerHeight),sh(window.innerWidth,window.innerHeight),Nh.color.setHex(e.world),Fh.color.setHex(e.world),zh.color.setHex(e.world),Il.color.setHex(e.rubble),Vh.color.setHex(e.dim),zn.mountainMat.color.setHex(e.dim),zn.volcanoMat.color.setHex(e.dim),zn.moonMat.color.setHex(e.moon),tt.remove(Ki),Ki.geometry.dispose(),Ki.material.dispose(),Ki=zn.makeGrid(e.gridCenter,e.grid),tt.add(Ki);const t=new Be(e.world);ye.tracer=[t.r*.7+.2,t.g*.7+.2,t.b*.7+.2],ye.spark=[t.r*.4,t.g*.9,t.b*.5],ye.hazard=e.hazard,ye.scorch=[e.hazard[0]*.45,e.hazard[1]*.45,e.hazard[2]*.45];const i=new Be(e.dim);ye.smoke=[i.r*.6,i.g*.6,i.b*.6],rl.style.color=e.hud,rl.style.textShadow=`0 0 6px ${e.hud}99`,document.getElementById("alerts").style.color=e.hud,En.bloom.strength=n.bloom;const s=En.crt.uniforms;s.uScan.value=.3*n.crt,s.uVignette.value=.6*n.crt,s.uBarrel.value=.06*n.crt,s.uPersist.value=n.safe?0:.55*n.crt,s.uRoll.value=n.safe?0:.15*n.crt,s.uSafe.value=n.safe?1:0,Hh.visible=!n.wireframe,kh.visible=!n.wireframe}document.body.append(Vx(ni,gn.map(n=>n.label),Yh));Yh(ni);let ro=!1;window.addEventListener("keydown",n=>{n.code==="KeyC"&&(ro=!ro),!ue.alive&&(n.code==="ArrowLeft"||n.code==="ArrowRight")&&(Mn=Wx(Uh(ne.tanks,0),Mn,n.code==="ArrowRight"?1:-1))});function sa(n,e,t){for(let i=0;i<16;i++){const s=i/16*Math.PI*2;Mt.spawn(n+Math.sin(s)*t,.02,e+Math.cos(s)*t,0,0,0,20,ye.scorch[0],ye.scorch[1],ye.scorch[2],.5,Math.cos(s),0,-Math.sin(s))}}const Yr={cam:null};window.__vz={world:ne,renderer:Ct,debug:Yr,aa:Xr,camera:je,turretObj:Tn.group,step:(n,e)=>{for(let t=0;t<e;t++)Rh(ne,n)},get rebuilds(){return Ll},get spectatorId(){return Mn},get deathStage(){return qe?.stage??null},get deathLabel(){return Vr},post:En,scene:tt,command:Ch,sample:n=>{const t=Ct.getDrawingBufferSize(new Re),i=Math.floor(t.x/2-96/2),s=Math.floor(t.y/2-96/2);if(n){En.composer.renderToScreen=!1,En.composer.render();const o=new Uint8Array(9216*4);return Ct.readRenderTargetPixels(En.composer.readBuffer,i,s,96,96,o),En.composer.renderToScreen=!0,mu(o,96)}const r=new Jt(t.x,t.y,{type:_n});Ct.setRenderTarget(r),Ct.render(tt,je);const a=new Uint8Array(9216*4);return Ct.readRenderTargetPixels(r,i,s,96,96,a),Ct.setRenderTarget(null),r.dispose(),mu(a,96)}};function mu(n,e){let t=0;const i=[0,0,0],s=new Array(e).fill(0);for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=(o*e+l)*4,h=n[c]+n[c+1]+n[c+2];s[o]+=h,h>60&&(t++,i[0]+=n[c],i[1]+=n[c+1],i[2]+=n[c+2])}t&&(i[0]/=t,i[1]/=t,i[2]/=t);const r=s.reduce((o,l)=>o+l,0)/e,a=s.reduce((o,l)=>o+(l-r)*(l-r),0)/e;return{lit:t,mean:i.map(o=>Math.round(o)),rowVar:Math.round(a)}}let Pr=0,gu=performance.now(),ra=0,Dr=0,_u=0;function qh(n){requestAnimationFrame(qh);const e=Math.min((n-gu)/1e3,.25);gu=n,Pr+=e;const t=Ch(),i=[];if(ne.phase!=="over")for(;Pr>=ti;)Rh(ne,[t]),i.push(...ne.events),Pr-=ti;else Pr=0;ue=ne.tanks[0],ue.alive&&(qe=null,Vr=null),ys(Zi,ue.hull),ys(Tn,ue.turret);const s=ne.volcano.state,r=s==="erupt"?50:s==="rumble"?18:s==="cooldown"?10:3;for(ia+=e;ia>=1/r;){ia-=1/r;const u=s==="erupt",p=u?45:s==="rumble"?28:12,f=u&&Math.random()<.4;Mt.spawn(zn.crater.x+(Math.random()-.5)*p,zn.crater.y+(Math.random()-.5)*8,zn.crater.z+(Math.random()-.5)*p,(Math.random()-.5)*(u?12:4)+(u?6:0),(u?16:6)+Math.random()*(u?14:5),(Math.random()-.5)*(u?12:4),(u?10:5)+Math.random()*(u?8:4),f?ye.hazard[0]:ye.smoke[0]*1.4,f?ye.hazard[1]:ye.smoke[1]*1.4,f?ye.hazard[2]:ye.smoke[2]*1.4,(u?12:s==="rumble"?6:2.5)+Math.random()*(u?18:5))}if(zn.volcanoMat.color.setHex(s==="erupt"?16739115:s==="rumble"?9062944:gn[ni.palette%gn.length].dim),ne.phase==="play")for(const u of Xr.update(e,Math.random,qi(ue.heading,ue.turretYaw)))if(u.kind==="tracer")Mt.spawn(u.pos[0],u.pos[1],u.pos[2],u.dir[0]*80,u.dir[1]*80,u.dir[2]*80,.18,ye.tracer[0],ye.tracer[1],ye.tracer[2],7);else{for(let p=0;p<10;p++){const f=Math.random()*Math.PI*2,E=(Math.random()-.5)*2,y=Math.hypot(Math.sin(f),E,Math.cos(f))||1;Mt.spawn(u.pos[0],u.pos[1],u.pos[2],0,0,0,.28,1,.9,.55,3+Math.random()*2,Math.sin(f)/y,E/y,Math.cos(f)/y)}for(let p=0;p<24;p++){const f=Math.random()*Math.PI*2,E=(Math.random()-.5)*2,y=12+Math.random()*10;Mt.spawn(u.pos[0],u.pos[1],u.pos[2],Math.sin(f)*y,E*y,Math.cos(f)*y,1+Math.random()*.6,ye.hazard[0],ye.hazard[1],ye.hazard[2],1.5+Math.random()*1.5)}}else Xr.clear();Mt.update(e),Zi.group.visible=ue.alive;for(const u of ne.structures){let p=ol.get(u.id);p||(p=Qi(u.grid,Oh(u.kind)),p.group.position.set(u.x,0,u.z),tt.add(p.group),ol.set(u.id,p)),ys(p,u.grid)}if(ne.rubbleRev!==lu){lu=ne.rubbleRev;const u=kx(ne.rubble);eo.geometry.dispose(),to.geometry.dispose(),eo.geometry=u.faces,ih(to,u.edges),Ll++}for(const u of ne.chunks){let p=Rr.get(u.id);p||(p=Fr(Bx(u.cells),Il),Rr.set(u.id,p),tt.add(p)),p.position.set(u.pos[0],u.pos[1],u.pos[2]),p.rotation.set(u.angle*.7,u.angle,0)}for(const[u,p]of Rr)ne.chunks.some(f=>f.id===u)||(tt.remove(p),p.geometry.dispose(),Rr.delete(u));for(const u of ne.shells)Mt.spawn(u.pos[0],u.pos[1],u.pos[2],u.dir[0]*60,u.dir[1]*60,u.dir[2]*60,.06,ye.tracer[0],ye.tracer[1],ye.tracer[2],2.5);for(const u of ne.tanks){if(u.id===0)continue;let p=wr.get(u.id);p||(p={hull:Qi(u.hull),turret:Qi(u.turret)},p.turret.group.position.set(u.turretPivot.x,u.turretPivot.y,u.turretPivot.z),p.turret.group.rotation.order="YXZ",p.hull.group.add(p.turret.group),tt.add(p.hull.group),wr.set(u.id,p)),ys(p.hull,u.hull),ys(p.turret,u.turret),p.hull.group.visible=u.alive,p.hull.group.position.set(u.x,0,u.z),p.hull.group.rotation.y=u.heading,p.turret.group.rotation.y=u.turretYaw,p.turret.group.rotation.x=-u.gunPitch}for(const[u,p]of wr)ne.tanks.some(f=>f.id===u)||(tt.remove(p.hull.group),wr.delete(u));for(const u of ne.missiles){let p=Cr.get(u.id);if(!p){p=Fr(oS(),eS);const E=new Ft(Xh,tS);E.position.z=.25,p.add(E);const y=new Lf(lS);y.scale.set(1.6,1.6,1.6),p.add(y),Cr.set(u.id,p),tt.add(p)}p.position.set(u.pos[0],u.pos[1],u.pos[2]),p.scale.setScalar(u.scale);const f=new U(u.dir[0],u.dir[1],u.dir[2]).normalize();p.quaternion.setFromUnitVectors(new U(0,0,1),f);for(let E=0;E<2;E++){const y=(2.2+E*.8)*u.scale;Mt.spawn(u.pos[0]-f.x*y,u.pos[1]-f.y*y,u.pos[2]-f.z*y,-f.x*2+(Math.random()-.5),Math.random()-.5,-f.z*2+(Math.random()-.5),.45+E*.15,ye.hazard[0],ye.hazard[1],ye.hazard[2],1.3*u.scale,f.x,f.y,f.z)}}for(const[u,p]of Cr)ne.missiles.some(f=>f.id===u)||(tt.remove(p),p.geometry.dispose(),Cr.delete(u));for(const u of ne.defenseShots)Mt.spawn(u.pos[0],u.pos[1],u.pos[2],u.dir[0]*60,u.dir[1]*60,u.dir[2]*60,.06,ye.tracer[0],ye.tracer[1],ye.tracer[2],1.3);ne.bomber?(Un||(Un=Fr(cS(),zh),tt.add(Un)),Un.position.set(ne.bomber.pos[0],ne.bomber.pos[1],ne.bomber.pos[2]),Un.rotation.y=Math.atan2(ne.bomber.dir[0],ne.bomber.dir[2])):Un&&(tt.remove(Un),Un.geometry.dispose(),Un=null);for(const u of ne.telegraphs){const p=.5+.5*Math.sin(n/90),f=u.kind==="volcano"?32:16;for(let E=0;E<f;E++){const y=E/f*Math.PI*2;Mt.spawn(u.x+Math.sin(y)*u.radius,.05,u.z+Math.cos(y)*u.radius,0,0,0,.12,ye.hazard[0]*p,ye.hazard[1]*p,ye.hazard[2]*p,u.kind==="volcano"?1.2:.5,Math.cos(y),0,-Math.sin(y))}if(u.kind==="volcano"||u.kind==="meteor"){const y=1-Math.max(0,u.impactTick-ne.tick)/90,T=85*(1-y)*(1-y)+1;for(let w=0;w<7;w++)Mt.spawn(u.x+Math.sin(w*.7+n/200)*.5,T+w*1.4,u.z+Math.cos(w*.7+n/200)*.5,-1.5,-22,-1.5,.25,ye.hazard[0],ye.hazard[1],ye.hazard[2],2.2)}}for(const u of ne.fences){const p=wl(ne,u);let f=Qo.get(u.id);if(p&&!f){const E=[],y=Math.hypot(u.bx-u.ax,u.bz-u.az),T=Math.max(2,Math.floor(y/.6));for(let w=0;w<=T;w++){const D=w/T,P=u.ax+(u.bx-u.ax)*D,R=u.az+(u.bz-u.az)*D;E.push(P,0,R,P,u.height,R)}E.push(u.ax,u.height,u.az,u.bx,u.height,u.bz),E.push(u.ax,.05,u.az,u.bx,.05,u.bz),f=Vn(E,cu),Qo.set(u.id,f),tt.add(f)}else!p&&f&&(tt.remove(f),f.geometry.dispose(),Qo.delete(u.id))}cu.opacity=.45+.25*Math.sin(n/180);const a=ne.stormUntil>ne.tick;if(no.visible=a,a){let u=0;for(let p=0;p<3;p++)for(let f=0;f<24;f++){const E=f/24*Math.PI*2,y=(f+1)/24*Math.PI*2,T=130+p*18+Math.sin(E*3+n/400+p)*10,w=130+p*18+Math.sin(y*3+n/400+p)*10;Jn[u++]=Math.sin(E)*520,Jn[u++]=T,Jn[u++]=Math.cos(E)*520,Jn[u++]=Math.sin(y)*520,Jn[u++]=w,Jn[u++]=Math.cos(y)*520}vr(no,Jn),Gh.opacity=.3+.25*Math.sin(n/300)}if(ne.sky.meteors)for(ta+=e;ta>.35;){ta-=.35;const u=Math.random()*Math.PI*2;Mt.spawn(Math.sin(u)*400,150+Math.random()*60,Math.cos(u)*400,-Math.sin(u)*60-20,-35,-Math.cos(u)*60,1.2,ye.tracer[0],ye.tracer[1],ye.tracer[2],6)}$t*=Math.exp(-e*6);const o=ne.lavaPools.map(u=>`${u.x.toFixed(1)},${u.z.toFixed(1)},${u.radius.toFixed(1)},${u.untilTick}`).join("|");if(o!==uu){uu=o;const u=[];for(const p of ne.lavaPools)for(let f=0;f<2;f++){const E=p.radius*(f===0?1:.55);for(let y=0;y<32;y++){const T=y/32*Math.PI*2,w=(y+1)/32*Math.PI*2;u.push(p.x+Math.sin(T)*E,.07,p.z+Math.cos(T)*E,p.x+Math.sin(w)*E,.07,p.z+Math.cos(w)*E)}}vr(al,u.length?u:new Float32Array(6)),al.visible=ne.lavaPools.length>0}for(Bh.opacity=.4+.6*(.5+.5*Math.sin(n/180)),ea+=e;ea>.12&&ne.lavaPools.length;){ea-=.12;const u=ne.lavaPools[Math.floor(Math.random()*ne.lavaPools.length)];Mt.spawn(u.x+(Math.random()-.5)*u.radius,.1,u.z+(Math.random()-.5)*u.radius,(Math.random()-.5)*1.5,3+Math.random()*4,(Math.random()-.5)*1.5,.8,ye.hazard[0],ye.hazard[1],ye.hazard[2],.7)}if(so.visible=io,io){let u=0;const p=(...f)=>{for(const E of f)hu[u++]=E};for(const f of ne.tanks){const E=ne.brains.get(f.id);if(!(!E||!f.alive)&&(E.debug.intent&&p(f.x,1.4,f.z,E.debug.intent[0],1.4,E.debug.intent[2]),E.aim)){const y=f.heading+f.turretYaw,T=E.debug.err||.05;for(const w of[-1,1])p(f.x,1.4,f.z,f.x+Math.sin(y+T*w)*20,1.4,f.z+Math.cos(y+T*w)*20)}}vr(so,hu.subarray(0,u))}for(const u of i){if(u.kind==="superSpawn"?sn.alert("SUPERTANK INBOUND"):u.kind==="bomberInbound"?sn.alert("BOMBER RUN"):u.kind==="volcanoRumble"?sn.alert("VOLCANO RUMBLING — ERUPTION IMMINENT"):u.kind==="volcanoErupt"?sn.alert("ERUPTION"):u.kind==="matchEnd"?sn.alert("MATCH COMPLETE"):u.kind==="kill"&&u.what==="bomber"?sn.alert("BOMBER DOWN"):u.kind==="scanPing"?(fu=n,sn.alert("SCAN PING")):u.kind==="ionStorm"?sn.alert("ION STORM — RADAR DOWN"):u.kind==="meteorInbound"?sn.alert("METEOR INBOUND"):u.kind==="missileLock"?sn.alert("MISSILE LOCK"):u.kind==="selfDestructArmed"&&u.id===0?sn.alert("SELF-DESTRUCT ARMED — 10s"):u.kind==="bombTelegraph"&&(du=n),u.kind==="fire"&&u.owner===0&&($t=Math.min(.35,$t+.035)),u.kind==="explosion"){const p=Math.hypot(u.pos[0]-ue.x,u.pos[2]-ue.z);$t=Math.min(1,$t+Yx(p,u.radius,u.source))}if(u.kind==="tankKilled"&&u.id===0&&($t=Math.min(.8,$t+.3)),u.kind==="tankKilled"?u.id===0?(au=u.by,qe=Jx(n,u.pos,u.by,ne.bomber?.id??null),Vr=`KILLED BY: ${jx({by:u.by,cause:u.cause,source:u.source,killerKind:u.by===null?void 0:ne.brains.get(u.by)?.kind})}`,Mn=null,Es.push({text:u.cause==="selfDestruct"?"YOU SELF-DESTRUCTED":u.by===null?"THE ZONE KILLED YOU":"ENEMY KILLED YOU",born:n})):u.cause==="selfDestruct"?Es.push({text:"ENEMY SELF-DESTRUCTED",born:n}):u.by===0&&Es.push({text:`YOU KILLED ${ne.brains.get(u.id)?.kind==="super"?"SUPERTANK":"TANK"}`,born:n}):u.kind==="kill"&&u.by===0&&Es.push({text:u.what==="bomber"?"YOU DOWNED BOMBER":"YOU DOWNED MISSILE",born:n}),u.kind==="blockDestroyed"&&u.by!==0&&Math.hypot(u.pos[0]-ue.x,u.pos[2]-ue.z)<4){const p=u.pos[0]-ue.x,f=u.pos[2]-ue.z;na={angle:br(p,f,qi(ue.heading,ue.turretYaw)),born:n},Yi={angle:br(p,f,qi(ue.heading,ue.turretYaw)),born:n},$t=Math.min(.5,$t+qx(Math.hypot(p,f)))}if(u.kind==="explosion"&&Math.hypot(u.pos[0]-ue.x,u.pos[2]-ue.z)<6){const p=u.pos[0]-ue.x,f=u.pos[2]-ue.z;na={angle:br(p,f,qi(ue.heading,ue.turretYaw)),born:n},Yi={angle:br(p,f,qi(ue.heading,ue.turretYaw)),born:n}}if(u.kind==="fire")for(let p=0;p<8;p++)Mt.spawn(u.pos[0],u.pos[1],u.pos[2],u.dir[0]*12+(Math.random()-.5)*6,u.dir[1]*12+(Math.random()-.5)*6,u.dir[2]*12+(Math.random()-.5)*6,.15,ye.tracer[0],ye.tracer[1],ye.tracer[2],.6);else if(u.kind==="blockDestroyed")for(let p=0;p<6;p++)Mt.spawn(u.pos[0],u.pos[1],u.pos[2],(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,ye.spark[0],ye.spark[1],ye.spark[2],.4);else if(u.kind==="shellImpact"){sa(u.pos[0],u.pos[2],1.2);for(let p=0;p<10;p++)Mt.spawn(u.pos[0],u.pos[1]+.1,u.pos[2],(Math.random()-.5)*7,Math.random()*5,(Math.random()-.5)*7,.35,ye.spark[0],ye.spark[1],ye.spark[2],.4)}else if(u.kind==="explosion"){u.pos[1]<5&&sa(u.pos[0],u.pos[2],u.radius);for(let p=0;p<40;p++){const f=Math.random()*Math.PI*2,E=4+Math.random()*8;Mt.spawn(u.pos[0],u.pos[1]+.2,u.pos[2],Math.sin(f)*E,Math.random()*9,Math.cos(f)*E,.7,ye.hazard[0],ye.hazard[1],ye.hazard[2],.8)}}else if(u.kind==="tankKilled"){sa(u.pos[0],u.pos[2],2.5);for(let p=0;p<60;p++){const f=Math.random()*Math.PI*2,E=3+Math.random()*10;Mt.spawn(u.pos[0],u.pos[1],u.pos[2],Math.sin(f)*E,Math.random()*12,Math.cos(f)*E,1,ye.hazard[0],ye.hazard[1],ye.hazard[2],.9)}}}const l=ue.alive?[]:Uh(ne.tanks,0);if(!ue.alive&&qe){const u=qe.stage,p=qe.killerId,f=p!==null&&(ne.bomber?.alive===!0&&ne.bomber.id===p||l.some(E=>E.id===p));qe=Qx(qe,n,f),u==="explosion"&&qe.stage==="killer"&&!qe.focusPos&&(qe={...qe,focusPos:[je.position.x,je.position.y,je.position.z]})}const c=!qe||qe.stage==="spectator";ue.alive?Mn=null:c&&l.length&&(Mn===null?Mn=l.find(u=>u.id===au)?.id??l[0].id:l.some(u=>u.id===Mn)||(Mn=l[0].id));const h=c?l.find(u=>u.id===Mn)??null:null;if(ne.phase==="over"&&!pu&&c&&(pu=!0,rS()),Zi.group.position.set(ue.x,0,ue.z),Zi.group.rotation.y=ue.heading,Tn.group.rotation.y=ue.turretYaw,Tn.group.rotation.x=-ue.gunPitch,Yr.cam)je.position.set(...Yr.cam.p),je.lookAt(...Yr.cam.l);else if(qe?.stage==="explosion"){const p=(n-qe.startedAt)/1e3*.25;je.position.set(qe.pos[0]+Math.sin(p)*7,qe.pos[1]+3.5,qe.pos[2]+Math.cos(p)*7),je.lookAt(qe.pos[0],qe.pos[1],qe.pos[2])}else if(qe?.stage==="killer"){qe.focusPos&&je.position.set(...qe.focusPos);const u=qe.killerId,p=ne.bomber?.alive&&ne.bomber.id===u?ne.bomber:null,f=ne.tanks.find(E=>E.alive&&E.id===u);p?je.lookAt(p.pos[0],p.pos[1],p.pos[2]):f?je.lookAt(f.x,1.2,f.z):je.lookAt(qe.pos[0],qe.pos[1],qe.pos[2])}else!ue.alive&&h?(je.position.set(h.x-Math.sin(h.heading)*12,6.5,h.z-Math.cos(h.heading)*12),je.lookAt(h.x,1.2,h.z)):ue.alive?ro?(je.position.set(ue.x-Math.sin(ue.heading)*12,6.5,ue.z-Math.cos(ue.heading)*12),je.lookAt(ue.x,1.2,ue.z)):(Tn.group.updateWorldMatrix(!0,!1),je.position.copy(uS).applyMatrix4(Tn.group.matrixWorld),je.quaternion.setFromRotationMatrix(Tn.group.matrixWorld).multiply(hS)):(je.position.set(ue.x+6,4,ue.z+6),je.lookAt(ue.x,1,ue.z));if(ni.shake&&$t>.001&&qe?.stage!=="killer"&&(je.position.x+=(Math.random()-.5)*$t,je.position.y+=(Math.random()-.5)*$t,je.position.z+=(Math.random()-.5)*$t),Ct.info.reset(),En.render(n/1e3),ue.alive){const u=hh(ue),p=co(ue,[0,We,ue.turret.size.z/2*We+.15]),f=Sv(ne,p,u,400,0);xt[0]=p[0],xt[1]=p[1],xt[2]=p[2],xt[3]=f.pos[0],xt[4]=f.pos[1],xt[5]=f.pos[2];const E=.5;xt[6]=f.pos[0]-E,xt[7]=f.pos[1],xt[8]=f.pos[2],xt[9]=f.pos[0]+E,xt[10]=f.pos[1],xt[11]=f.pos[2],xt[12]=f.pos[0],xt[13]=f.pos[1],xt[14]=f.pos[2]-E,xt[15]=f.pos[0],xt[16]=f.pos[1],xt[17]=f.pos[2]+E,vr(Wr,xt),Wr.visible=!0}else Wr.visible=!1;const d=new Set,m=new Map,g=new Map;for(const u of ne.tanks)m.set(u.id,u.heading),g.set(u.id,u.turretYaw),ne.brains.get(u.id)?.kind==="super"&&d.add(u.id);const _=ne.structures.find(u=>u.kind==="scan"&&u.grid.cells.some(p=>p));sn.draw({tick:ne.tick,heading:ue.heading,turretYaw:ue.turretYaw,x:ue.x,z:ue.z,known:ne.awareness.get(0),tankHeadings:m,tankTurrets:g,missiles:ne.missiles.map(u=>({id:u.id,x:u.pos[0],z:u.pos[2],heading:Math.atan2(u.dir[0],u.dir[2]),targeted:u.targetId===0,scale:u.scale,mode:u.mode})),scanner:_?{x:_.x,z:_.z}:null,scanPulse:xx(n,fu),bomber:ne.bomber?{x:ne.bomber.pos[0],z:ne.bomber.pos[2],heading:Math.atan2(ne.bomber.dir[0],ne.bomber.dir[2])}:null,bomberBlip:n-du<3e3,superIds:d,storm:ne.stormUntil>ne.tick,score:ne.score,lives:ne.lives,cooldownFrac:1-Math.min(1,ue.cooldown/mh),secondsLeft:Math.max(0,(uo-ne.tick)/60),palette:gn[ni.palette%gn.length],alive:ue.alive,status:{core:xi(ue.hull,"core"),tread:xi(ue.hull,"tread"),gun:xi(ue.turret,"gun"),engine:xi(ue.hull,"engine")},killfeed:Es,hitFlash:na,threatBearing:Yi&&n-Yi.born<2500?{angle:Yi.angle,progress:(n-Yi.born)/2500}:null,elevation:ue.gunPitch,selfDestructSeconds:ue.selfDestructTick===null?null:Math.max(0,(ue.selfDestructTick-ne.tick)/60),spectator:h?{label:Xx(h,ne.brains.get(h.id)?.kind),secondsLeft:Math.max(0,(ne.respawnTick-ne.tick)/60)}:null,deathcam:qe&&qe.stage!=="spectator"?Vr:null,respawnReady:c&&!ue.alive&&ne.respawnTick>0&&ne.tick>=ne.respawnTick,now:n}),ra++,Dr+=e,Dr>=.5&&(_u=Math.round(ra/Dr),ra=0,Dr=0),rl.textContent=`FPS ${_u} · calls ${Ct.info.render.calls} · tick ${ne.tick} · v ${ue.speed.toFixed(1)} m/s · aa ${Xr.activeCount} · ${ro?"chase":"scope"} [C]`}requestAnimationFrame(qh);window.addEventListener("resize",()=>{je.aspect=window.innerWidth/window.innerHeight,je.updateProjectionMatrix(),Ct.setSize(window.innerWidth,window.innerHeight),En.resize(window.innerWidth,window.innerHeight),sh(window.innerWidth,window.innerHeight)});
