(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const aa="180",lu=0,La=1,cu=2,ql=1,uu=2,Tn=3,kn=0,Ut=1,sn=2,An=0,yi=1,Jr=2,Ua=3,Ia=4,hu=5,Qn=100,fu=101,du=102,pu=103,mu=104,gu=200,_u=201,vu=202,xu=203,ho=204,fo=205,Mu=206,Su=207,Eu=208,Tu=209,yu=210,bu=211,Au=212,Ru=213,wu=214,po=0,mo=1,go=2,Ri=3,_o=4,vo=5,xo=6,Mo=7,Kl=0,Cu=1,Pu=2,zn=0,Hu=1,Du=2,Lu=3,Uu=4,Iu=5,Nu=6,Fu=7,$l=300,wi=301,Ci=302,So=303,Eo=304,fs=306,To=1e3,ni=1001,yo=1002,kt=1003,Ou=1004,ur=1005,pn=1006,Es=1007,ii=1008,ln=1009,Zl=1010,jl=1011,$i=1012,la=1013,ri=1014,bn=1015,Rn=1016,ca=1017,ua=1018,Zi=1020,Jl=35902,Ql=35899,ec=1021,tc=1022,an=1023,ji=1026,Ji=1027,nc=1028,ha=1029,ic=1030,fa=1031,da=1033,Vr=33776,Wr=33777,Xr=33778,Yr=33779,bo=35840,Ao=35841,Ro=35842,wo=35843,Co=36196,Po=37492,Ho=37496,Do=37808,Lo=37809,Uo=37810,Io=37811,No=37812,Fo=37813,Oo=37814,zo=37815,Bo=37816,ko=37817,Go=37818,Vo=37819,Wo=37820,Xo=37821,Yo=36492,qo=36494,Ko=36495,$o=36283,Zo=36284,jo=36285,Jo=36286,zu=3200,Bu=3201,ku=0,Gu=1,Fn="",qt="srgb",Pi="srgb-linear",Qr="linear",Ze="srgb",ai=7680,Na=519,Vu=512,Wu=513,Xu=514,rc=515,Yu=516,qu=517,Ku=518,$u=519,Fa=35044,Qi=35048,Oa="300 es",mn=2e3,es=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ts=Math.PI/180,Qo=180/Math.PI;function nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Zu(n,e){return(n%e+e)%e}function ys(n,e,t){return(1-t)*n+t*e}function Fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==_){let p=1-a;const h=l*d+c*m+u*_+f*v,b=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,h*b);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}const S=a*b;if(l=l*p+d*S,c=c*p+m*S,u=u*p+_*S,f=f*p+v*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-a*m,e[t+2]=c*_+u*m+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bs.copy(this).projectOnVector(e),this.sub(bs)}reflect(e){return this.sub(bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bs=new N,za=new Ui;class Ne{constructor(e,t,i,r,s,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],v=r[0],p=r[3],h=r[6],b=r[1],y=r[4],S=r[7],C=r[2],w=r[5],A=r[8];return s[0]=o*v+a*b+l*C,s[3]=o*p+a*y+l*w,s[6]=o*h+a*S+l*A,s[1]=c*v+u*b+f*C,s[4]=c*p+u*y+f*w,s[7]=c*h+u*S+f*A,s[2]=d*v+m*b+_*C,s[5]=d*p+m*y+_*w,s[8]=d*h+m*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,_=t*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Ne;function sc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ju(){const n=ts("canvas");return n.style.display="block",n}const Ba={};function er(n){n in Ba||(Ba[n]=!0,console.warn(n))}function Ju(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ka=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ga=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qu(){const n={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ze&&(r.r=wn(r.r),r.g=wn(r.g),r.b=wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fn?Qr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Pi]:{primaries:e,whitePoint:i,transfer:Qr,toXYZ:ka,fromXYZ:Ga,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:Ze,toXYZ:ka,fromXYZ:Ga,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const Ye=Qu();function wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let li;class eh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{li===void 0&&(li=ts("canvas")),li.width=e.width,li.height=e.height;const r=li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=li}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wn(t[i]/255)*255):t[i]=wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let th=0;class pa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rs(r[o].image)):s.push(Rs(r[o]))}else s=Rs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;const ws=new N;class Rt extends Li{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=ni,r=ni,s=pn,o=ii,a=an,l=ln,c=Rt.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=nr(),this.name="",this.source=new pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ws).x}get height(){return this.source.getSize(ws).y}get depth(){return this.source.getSize(ws).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case To:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case To:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=$l;Rt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,C=(h+1)/2,w=(u+d)/4,A=(f+v)/4,U=(_+p)/4;return y>S&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Rt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new pa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gt extends ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oc extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rh extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(s,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),fr.subVectors(this.max,Oi),ci.subVectors(e.a,Oi),ui.subVectors(e.b,Oi),hi.subVectors(e.c,Oi),Hn.subVectors(ui,ci),Dn.subVectors(hi,ui),Wn.subVectors(ci,hi);let t=[0,-Hn.z,Hn.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,Hn.z,0,-Hn.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-Hn.y,Hn.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!Cs(t,ci,ui,hi,fr)||(t=[1,0,0,0,1,0,0,0,1],!Cs(t,ci,ui,hi,fr))?!1:(dr.crossVectors(Hn,Dn),t=[dr.x,dr.y,dr.z],Cs(t,ci,ui,hi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _n=[new N,new N,new N,new N,new N,new N,new N,new N],Qt=new N,hr=new ir,ci=new N,ui=new N,hi=new N,Hn=new N,Dn=new N,Wn=new N,Oi=new N,fr=new N,dr=new N,Xn=new N;function Cs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xn.fromArray(n,s);const a=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),u=i.dot(Xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sh=new ir,zi=new N,Ps=new N;class ds{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(Ps)),this.expandByPoint(zi.copy(e.center).sub(Ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new N,Hs=new N,pr=new N,Ln=new N,Ds=new N,mr=new N,Ls=new N;class ac{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hs.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Hs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(pr),a=Ln.dot(this.direction),l=-Ln.dot(pr),c=Ln.lengthSq(),u=Math.abs(1-o*o);let f,d,m,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hs).addScaledVector(pr,d),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){Ds.subVectors(t,e),mr.subVectors(i,e),Ls.crossVectors(Ds,mr);let o=this.direction.dot(Ls),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const l=a*this.direction.dot(mr.crossVectors(Ln,mr));if(l<0)return null;const c=a*this.direction.dot(Ds.cross(Ln));if(c<0||l+c>o)return null;const u=-a*Ln.dot(Ls);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,m,_,v,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,m,_,v,p)}set(e,t,i,r,s,o,a,l,c,u,f,d,m,_,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,v=c*f;t[0]=d+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=_*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oh,e,ah)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Un.crossVectors(i,Ot),Un.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Un.crossVectors(i,Ot)),Un.normalize(),gr.crossVectors(Ot,Un),r[0]=Un.x,r[4]=gr.x,r[8]=Ot.x,r[1]=Un.y,r[5]=gr.y,r[9]=Ot.y,r[2]=Un.z,r[6]=gr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],v=i[6],p=i[10],h=i[14],b=i[3],y=i[7],S=i[11],C=i[15],w=r[0],A=r[4],U=r[8],E=r[12],M=r[1],H=r[5],O=r[9],G=r[13],K=r[2],W=r[6],Y=r[10],Z=r[14],B=r[3],se=r[7],ce=r[11],Ee=r[15];return s[0]=o*w+a*M+l*K+c*B,s[4]=o*A+a*H+l*W+c*se,s[8]=o*U+a*O+l*Y+c*ce,s[12]=o*E+a*G+l*Z+c*Ee,s[1]=u*w+f*M+d*K+m*B,s[5]=u*A+f*H+d*W+m*se,s[9]=u*U+f*O+d*Y+m*ce,s[13]=u*E+f*G+d*Z+m*Ee,s[2]=_*w+v*M+p*K+h*B,s[6]=_*A+v*H+p*W+h*se,s[10]=_*U+v*O+p*Y+h*ce,s[14]=_*E+v*G+p*Z+h*Ee,s[3]=b*w+y*M+S*K+C*B,s[7]=b*A+y*H+S*W+C*se,s[11]=b*U+y*O+S*Y+C*ce,s[15]=b*E+y*G+S*Z+C*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],v=e[7],p=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+v*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],v=e[13],p=e[14],h=e[15],b=f*p*c-v*d*c+v*l*m-a*p*m-f*l*h+a*d*h,y=_*d*c-u*p*c-_*l*m+o*p*m+u*l*h-o*d*h,S=u*v*c-_*f*c+_*a*m-o*v*m-u*a*h+o*f*h,C=_*f*l-u*v*l-_*a*d+o*v*d+u*a*p-o*f*p,w=t*b+i*y+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=b*A,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*A,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*A,e[4]=y*A,e[5]=(u*p*s-_*d*s+_*r*m-t*p*m-u*r*h+t*d*h)*A,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*h-t*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*A,e[8]=S*A,e[9]=(_*f*s-u*v*s-_*i*m+t*v*m+u*i*h-t*f*h)*A,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*h+t*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*A,e[12]=C*A,e[13]=(u*v*r-_*f*r+_*i*d-t*v*d-u*i*p+t*f*p)*A,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*p-t*a*p)*A,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,_=s*f,v=o*u,p=o*f,h=a*f,b=l*c,y=l*u,S=l*f,C=i.x,w=i.y,A=i.z;return r[0]=(1-(v+h))*C,r[1]=(m+S)*C,r[2]=(_-y)*C,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(d+h))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(_+y)*A,r[9]=(p-b)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=fi.set(r[0],r[1],r[2]).length();const o=fi.set(r[4],r[5],r[6]).length(),a=fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/s,u=1/o,f=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=mn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let _,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===mn)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===es)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=mn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),m=-(i+r)/(i-r);let _,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===mn)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===es)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fi=new N,en=new pt,oh=new N(0,0,0),ah=new N(1,1,1),Un=new N,gr=new N,Ot=new N,Va=new pt,Wa=new Ui;class Cn{constructor(e=0,t=0,i=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lh=0;const Xa=new N,di=new Ui,xn=new pt,_r=new N,Bi=new N,ch=new N,uh=new Ui,Ya=new N(1,0,0),qa=new N(0,1,0),Ka=new N(0,0,1),$a={type:"added"},hh={type:"removed"},pi={type:"childadded",child:null},Us={type:"childremoved",child:null};class It extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new N,t=new Cn,i=new Ui,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ne}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Ya,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(Ka,e)}translateOnAxis(e,t){return Xa.copy(e).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ya,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(Ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_r.copy(e):_r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Bi,_r,this.up):xn.lookAt(_r,Bi,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(xn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($a),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hh),Us.child=e,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($a),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new N(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new N,Mn=new N,Is=new N,Sn=new N,mi=new N,gi=new N,Za=new N,Ns=new N,Fs=new N,Os=new N,zs=new ft,Bs=new ft,ks=new ft;class on{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),Mn.subVectors(i,t),Is.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(Mn),l=tn.dot(Is),c=Mn.dot(Mn),u=Mn.dot(Is),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return zs.setScalar(0),Bs.setScalar(0),ks.setScalar(0),zs.fromBufferAttribute(e,t),Bs.fromBufferAttribute(e,i),ks.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zs,s.x),o.addScaledVector(Bs,s.y),o.addScaledVector(ks,s.z),o}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),Mn.subVectors(e,t),tn.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;mi.subVectors(r,i),gi.subVectors(s,i),Ns.subVectors(e,i);const l=mi.dot(Ns),c=gi.dot(Ns);if(l<=0&&c<=0)return t.copy(i);Fs.subVectors(e,r);const u=mi.dot(Fs),f=gi.dot(Fs);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(mi,o);Os.subVectors(e,s);const m=mi.dot(Os),_=gi.dot(Os);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(gi,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Za.subVectors(s,r),a=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(Za,a);const h=1/(p+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(mi,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Gs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Zu(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Gs(o,s,e+1/3),this.g=Gs(o,s,e),this.b=Gs(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=cc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ye.workingToColorSpace(yt.copy(this),e),Math.round(Ve(yt.r*255,0,255))*65536+Math.round(Ve(yt.g*255,0,255))*256+Math.round(Ve(yt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=qt){Ye.workingToColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(vr);const i=ys(In.h,vr.h,t),r=ys(In.s,vr.s,t),s=ys(In.l,vr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new ze;ze.NAMES=cc;let fh=0;class rr extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=yi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=fo,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ho&&(i.blendSrc=this.blendSrc),this.blendDst!==fo&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sr extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new N,xr=new Le;let dh=0;class wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fa,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class uc extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hc extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ph=0;const Xt=new pt,Vs=new It,_i=new N,zt=new ir,ki=new ir,xt=new N;class Qe extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sc(e)?hc:uc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(zt.min,ki.min),zt.expandByPoint(xt),xt.addVectors(zt.max,ki.max),zt.expandByPoint(xt)):(zt.expandByPoint(ki.min),zt.expandByPoint(ki.max))}zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(_i.fromBufferAttribute(e,c),xt.add(_i)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new N,l[U]=new N;const c=new N,u=new N,f=new N,d=new Le,m=new Le,_=new Le,v=new N,p=new N;function h(U,E,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),_.sub(d);const H=1/(m.x*_.y-_.x*m.y);isFinite(H)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(H),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(H),a[U].add(v),a[E].add(v),a[M].add(v),l[U].add(p),l[E].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,E=b.length;U<E;++U){const M=b[U],H=M.start,O=M.count;for(let G=H,K=H+O;G<K;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new N,S=new N,C=new N,w=new N;function A(U){C.fromBufferAttribute(r,U),w.copy(C);const E=a[U];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(w,E);const H=S.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,H)}for(let U=0,E=b.length;U<E;++U){const M=b[U],H=M.start,O=M.count;for(let G=H,K=H+O;G<K;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new wt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new pt,Yn=new ac,Mr=new ds,Ja=new N,Sr=new N,Er=new N,Tr=new N,Ws=new N,yr=new N,Qa=new N,br=new N;class Zt extends It{constructor(e=new Qe,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ws.fromBufferAttribute(f,e),o?yr.addScaledVector(Ws,u):yr.addScaledVector(Ws.sub(t),u))}t.add(yr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(Mr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Mr,Ja)===null||Yn.origin.distanceToSquared(Ja)>(e.far-e.near)**2))&&(ja.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(ja),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],h=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,C=y;S<C;S+=3){const w=a.getX(S),A=a.getX(S+1),U=a.getX(S+2);r=Ar(this,h,e,i,c,u,f,w,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const b=a.getX(p),y=a.getX(p+1),S=a.getX(p+2);r=Ar(this,o,e,i,c,u,f,b,y,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const p=d[_],h=o[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,C=y;S<C;S+=3){const w=S,A=S+1,U=S+2;r=Ar(this,h,e,i,c,u,f,w,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,h=v;p<h;p+=3){const b=p,y=p+1,S=p+2;r=Ar(this,o,e,i,c,u,f,b,y,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function mh(n,e,t,i,r,s,o,a){let l;if(e.side===Ut?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kn,a),l===null)return null;br.copy(a),br.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:n}}function Ar(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Sr),n.getVertexPosition(l,Er),n.getVertexPosition(c,Tr);const u=mh(n,e,t,i,Sr,Er,Tr,Qa);if(u){const f=new N;on.getBarycoord(Qa,Sr,Er,Tr,f),r&&(u.uv=on.getInterpolatedAttribute(r,a,l,c,f,new Le)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,f,new Le)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};on.getNormal(Sr,Er,Tr,d.normal),u.face=d,u.barycoord=f}return u}class or extends Qe{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function _(v,p,h,b,y,S,C,w,A,U,E){const M=S/A,H=C/U,O=S/2,G=C/2,K=w/2,W=A+1,Y=U+1;let Z=0,B=0;const se=new N;for(let ce=0;ce<Y;ce++){const Ee=ce*H-G;for(let ke=0;ke<W;ke++){const et=ke*M-O;se[v]=et*b,se[p]=Ee*y,se[h]=K,c.push(se.x,se.y,se.z),se[v]=0,se[p]=0,se[h]=w>0?1:-1,u.push(se.x,se.y,se.z),f.push(ke/A),f.push(1-ce/U),Z+=1}}for(let ce=0;ce<U;ce++)for(let Ee=0;Ee<A;Ee++){const ke=d+Ee+W*ce,et=d+Ee+W*(ce+1),it=d+(Ee+1)+W*(ce+1),qe=d+(Ee+1)+W*ce;l.push(ke,et,qe),l.push(et,it,qe),B+=6}a.addGroup(m,B,E),m+=B,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const i=Hi(n[t]);for(const r in i)e[r]=i[r]}return e}function gh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const ns={clone:Hi,merge:At};var _h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_h,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new N,el=new Le,tl=new Le;class $t extends dc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,el,tl),t.subVectors(tl,el)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,xi=1;class xh extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(vi,xi,e,t);r.layers=this.layers,this.add(r);const s=new $t(vi,xi,e,t);s.layers=this.layers,this.add(s);const o=new $t(vi,xi,e,t);o.layers=this.layers,this.add(o);const a=new $t(vi,xi,e,t);a.layers=this.layers,this.add(a);const l=new $t(vi,xi,e,t);l.layers=this.layers,this.add(l);const c=new $t(vi,xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class pc extends Rt{constructor(e=[],t=wi,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mh extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new or(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:An});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=pn),new xh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Wi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sh={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ma{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=i}clone(){return new ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eh extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ys=new N,Th=new N,yh=new Ne;class Zn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ys.subVectors(i,t).cross(Th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ys),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yh.getNormalMatrix(e),r=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ds,bh=new Le(.5,.5),Rr=new N;class mc{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,o=new Zn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],m=s[7],_=s[8],v=s[9],p=s[10],h=s[11],b=s[12],y=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-o,m-u,h-_,C-b).normalize(),r[1].setComponents(c+o,m+u,h+_,C+b).normalize(),r[2].setComponents(c+a,m+f,h+v,C+y).normalize(),r[3].setComponents(c-a,m-f,h-v,C-y).normalize(),i)r[4].setComponents(l,d,p,S).normalize(),r[5].setComponents(c-l,m-d,h-p,C-S).normalize();else if(r[4].setComponents(c-l,m-d,h-p,C-S).normalize(),t===mn)r[5].setComponents(c+l,m+d,h+p,C+S).normalize();else if(t===es)r[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);const t=bh.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Rr.x=r.normal.x>0?e.max.x:e.min.x,Rr.y=r.normal.y>0?e.max.y:e.min.y,Rr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jt extends rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const is=new N,rs=new N,nl=new pt,Gi=new ac,wr=new ds,qs=new N,il=new N;class gc extends It{constructor(e=new Qe,t=new Jt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)is.fromBufferAttribute(t,r-1),rs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=is.distanceTo(rs);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),wr.radius+=s,e.ray.intersectsSphere(wr)===!1)return;nl.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(nl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){const h=u.getX(v),b=u.getX(v+1),y=Cr(this,e,Gi,l,h,b,v);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(_-1),p=u.getX(m),h=Cr(this,e,Gi,l,v,p,_-1);h&&t.push(h)}}else{const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){const h=Cr(this,e,Gi,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=Cr(this,e,Gi,l,_-1,m,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cr(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(is.fromBufferAttribute(a,r),rs.fromBufferAttribute(a,s),t.distanceSqToSegment(is,rs,qs,il)>i)return;qs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(qs);if(!(c<e.near||c>e.far))return{distance:c,point:il.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const rl=new N,sl=new N;class jt extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)rl.fromBufferAttribute(t,r),sl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rl.distanceTo(sl);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ol extends gc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class al extends Rt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=kt,this.minFilter=kt,this.generateMipmaps=!1,this.needsUpdate=!0}}class _c extends Rt{constructor(e,t,i=ri,r,s,o,a=kt,l=kt,c,u=ji,f=1){if(u!==ji&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vc extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ps extends Qe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,m=[],_=[],v=[],p=[];for(let h=0;h<u;h++){const b=h*d-o;for(let y=0;y<c;y++){const S=y*f-s;_.push(S,-b,0),v.push(0,0,1),p.push(y/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const y=b+c*h,S=b+c*(h+1),C=b+1+c*(h+1),w=b+1+c*h;m.push(y,S,w),m.push(S,C,w)}this.setIndex(m),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ah extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rh extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xc extends dc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wh extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ch{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ph extends jt{constructor(e=10,t=10,i=4473924,r=8947848){i=new ze(i),r=new ze(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,m=0,_=-a;d<=t;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=d===s?i:r;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const u=new Qe;u.setAttribute("position",new at(l,3)),u.setAttribute("color",new at(c,3));const f=new Jt({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function ll(n,e,t,i){const r=Hh(i);switch(t){case ec:return n*e;case nc:return n*e/r.components*r.byteLength;case ha:return n*e/r.components*r.byteLength;case ic:return n*e*2/r.components*r.byteLength;case fa:return n*e*2/r.components*r.byteLength;case tc:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case da:return n*e*4/r.components*r.byteLength;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xr:case Yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:case wo:return Math.max(n,16)*Math.max(e,8)/4;case bo:case Ro:return Math.max(n,8)*Math.max(e,8)/2;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yo:case qo:case Ko:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $o:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jo:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hh(n){switch(n){case ln:case Zl:return{byteLength:1,components:1};case $i:case jl:case Rn:return{byteLength:2,components:1};case ca:case ua:return{byteLength:2,components:4};case ri:case la:case bn:return{byteLength:4,components:1};case Jl:case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);function Mc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dh(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],v=f[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const v=f[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uh=`#ifdef USE_ALPHAHASH
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
#endif`,Ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
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
#endif`,Bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
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
#endif`,qh=`#ifdef USE_BUMPMAP
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
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Df=`struct PhysicalMaterial {
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
}`,Lf=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
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
}`,Bd=`#if DEPTH_PACKING == 3200
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
}`,kd=`#define DISTANCE
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
}`,Gd=`#define DISTANCE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
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
}`,Yd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Kd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Zd=`#define LAMBERT
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
}`,jd=`#define MATCAP
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
}`,Jd=`#define MATCAP
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
}`,Qd=`#define NORMAL
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
}`,ep=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,rp=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,op=`#define TOON
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
}`,ap=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,up=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,fp=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Lh,alphahash_pars_fragment:Uh,alphamap_fragment:Ih,alphamap_pars_fragment:Nh,alphatest_fragment:Fh,alphatest_pars_fragment:Oh,aomap_fragment:zh,aomap_pars_fragment:Bh,batching_pars_vertex:kh,batching_vertex:Gh,begin_vertex:Vh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:Yh,bumpmap_pars_fragment:qh,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:$h,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:jh,color_fragment:Jh,color_pars_fragment:Qh,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:sf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:uf,colorspace_pars_fragment:hf,envmap_fragment:ff,envmap_common_pars_fragment:df,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:gf,fog_vertex:_f,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:yf,lights_pars_begin:bf,lights_toon_fragment:Rf,lights_toon_pars_fragment:wf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Df,lights_fragment_begin:Lf,lights_fragment_maps:Uf,lights_fragment_end:If,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:zf,map_fragment:Bf,map_pars_fragment:kf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:Yf,morphcolor_vertex:qf,morphnormal_vertex:Kf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:jf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:ed,normal_vertex:td,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:sd,iridescence_pars_fragment:od,opaque_fragment:ad,packing:ld,premultiplied_alpha_fragment:cd,project_vertex:ud,dithering_fragment:hd,dithering_pars_fragment:fd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:_d,shadowmask_pars_fragment:vd,skinbase_vertex:xd,skinning_pars_vertex:Md,skinning_vertex:Sd,skinnormal_vertex:Ed,specularmap_fragment:Td,specularmap_pars_fragment:yd,tonemapping_fragment:bd,tonemapping_pars_fragment:Ad,transmission_fragment:Rd,transmission_pars_fragment:wd,uv_pars_fragment:Cd,uv_pars_vertex:Pd,uv_vertex:Hd,worldpos_vertex:Dd,background_vert:Ld,background_frag:Ud,backgroundCube_vert:Id,backgroundCube_frag:Nd,cube_vert:Fd,cube_frag:Od,depth_vert:zd,depth_frag:Bd,distanceRGBA_vert:kd,distanceRGBA_frag:Gd,equirect_vert:Vd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:Yd,meshbasic_vert:qd,meshbasic_frag:Kd,meshlambert_vert:$d,meshlambert_frag:Zd,meshmatcap_vert:jd,meshmatcap_frag:Jd,meshnormal_vert:Qd,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:rp,meshtoon_vert:sp,meshtoon_frag:op,points_vert:ap,points_frag:lp,shadow_vert:cp,shadow_frag:up,sprite_vert:hp,sprite_frag:fp},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},hn={basic:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:At([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:At([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:At([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:At([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:At([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:At([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:At([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:At([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};hn.physical={uniforms:At([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Pr={r:0,b:0,g:0},Kn=new Cn,dp=new pt;function pp(n,e,t,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function v(y){let S=!1;const C=_(y);C===null?h(a,l):C&&C.isColor&&(h(C,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===fs)?(u===void 0&&(u=new Zt(new or(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Hi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Kn.copy(S.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(Kn)),u.material.toneMapped=Ye.getTransfer(C.colorSpace)!==Ze,(f!==C||d!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Zt(new ps(2,2),new Lt({name:"BackgroundMaterial",uniforms:Hi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(C.colorSpace)!==Ze,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,S){y.getRGB(Pr,fc(n)),i.buffers.color.setClear(Pr.r,Pr.g,Pr.b,S,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:v,addToRenderList:p,dispose:b}}function mp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,H,O,G,K){let W=!1;const Y=f(G,O,H);s!==Y&&(s=Y,c(s.object)),W=m(M,G,O,K),W&&_(M,G,O,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(M,H,O,G),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,H,O){const G=O.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let W=K[H.id];W===void 0&&(W={},K[H.id]=W);let Y=W[G];return Y===void 0&&(Y=d(l()),W[G]=Y),Y}function d(M){const H=[],O=[],G=[];for(let K=0;K<t;K++)H[K]=0,O[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:O,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,H,O,G){const K=s.attributes,W=H.attributes;let Y=0;const Z=O.getAttributes();for(const B in Z)if(Z[B].location>=0){const ce=K[B];let Ee=W[B];if(Ee===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function _(M,H,O,G){const K={},W=H.attributes;let Y=0;const Z=O.getAttributes();for(const B in Z)if(Z[B].location>=0){let ce=W[B];ce===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),K[B]=Ee,Y++}s.attributes=K,s.attributesNum=Y,s.index=G}function v(){const M=s.newAttributes;for(let H=0,O=M.length;H<O;H++)M[H]=0}function p(M){h(M,0)}function h(M,H){const O=s.newAttributes,G=s.enabledAttributes,K=s.attributeDivisors;O[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),K[M]!==H&&(n.vertexAttribDivisor(M,H),K[M]=H)}function b(){const M=s.newAttributes,H=s.enabledAttributes;for(let O=0,G=H.length;O<G;O++)H[O]!==M[O]&&(n.disableVertexAttribArray(O),H[O]=0)}function y(M,H,O,G,K,W,Y){Y===!0?n.vertexAttribIPointer(M,H,O,K,W):n.vertexAttribPointer(M,H,O,G,K,W)}function S(M,H,O,G){v();const K=G.attributes,W=O.getAttributes(),Y=H.defaultAttributeValues;for(const Z in W){const B=W[Z];if(B.location>=0){let se=K[Z];if(se===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const ce=se.normalized,Ee=se.itemSize,ke=e.get(se);if(ke===void 0)continue;const et=ke.buffer,it=ke.type,qe=ke.bytesPerElement,X=it===n.INT||it===n.UNSIGNED_INT||se.gpuType===la;if(se.isInterleavedBufferAttribute){const j=se.data,fe=j.stride,He=se.offset;if(j.isInstancedInterleavedBuffer){for(let Se=0;Se<B.locationSize;Se++)h(B.location+Se,j.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<B.locationSize;Se++)p(B.location+Se);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Se=0;Se<B.locationSize;Se++)y(B.location+Se,Ee/B.locationSize,it,ce,fe*qe,(He+Ee/B.locationSize*Se)*qe,X)}else{if(se.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)h(B.location+j,se.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let j=0;j<B.locationSize;j++)p(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,et);for(let j=0;j<B.locationSize;j++)y(B.location+j,Ee/B.locationSize,it,ce,Ee*qe,Ee/B.locationSize*j*qe,X)}}else if(Y!==void 0){const ce=Y[Z];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(B.location,ce);break;case 3:n.vertexAttrib3fv(B.location,ce);break;case 4:n.vertexAttrib4fv(B.location,ce);break;default:n.vertexAttrib1fv(B.location,ce)}}}}b()}function C(){U();for(const M in i){const H=i[M];for(const O in H){const G=H[O];for(const K in G)u(G[K].object),delete G[K];delete H[O]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const H=i[M.id];for(const O in H){const G=H[O];for(const K in G)u(G[K].object),delete G[K];delete H[O]}delete i[M.id]}function A(M){for(const H in i){const O=i[H];if(O[M.id]===void 0)continue;const G=O[M.id];for(const K in G)u(G[K].object),delete G[K];delete O[M.id]}}function U(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function gp(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _p(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==an&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const U=A===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bn&&!U)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:C,maxSamples:w}}function vp(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zn,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,y=b*4;let S=h.clippingState||null;l.value=S,S=u(_,d,y,m);for(let C=0;C!==y;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,_){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const h=m+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,S=m;y!==v;++y,S+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function xp(n){let e=new WeakMap;function t(o,a){return a===So?o.mapping=wi:a===Eo&&(o.mapping=Ci),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===So||a===Eo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ei=4,cl=[.125,.215,.35,.446,.526,.582],ei=20,Ks=new xc,ul=new ze;let $s=null,Zs=0,js=0,Js=!1;const jn=(1+Math.sqrt(5))/2,Mi=1/jn,hl=[new N(-jn,Mi,0),new N(jn,Mi,0),new N(-Mi,0,jn),new N(Mi,0,jn),new N(0,jn,-Mi),new N(0,jn,Mi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Mp=new N;class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Mp}=s;$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Zs,js),this._renderer.xr.enabled=Js,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Rn,format:an,colorSpace:Pi,depthBuffer:!1},r=dl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(s)),this._blurMaterial=Ep(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,i,r,s){const l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(ul),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new sr({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),p=new Zt(new or,v);let h=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,h=!0):(v.color.copy(ul),h=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const C=this._cubeSize;Hr(r,S*C,y>2?C:0,C,C),f.setRenderTarget(r),h&&f.render(p,l),f.render(e,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wi||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hl[(r-s-1)%hl.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):ei;p>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const h=[];let b=0;for(let A=0;A<ei;++A){const U=A/v,E=Math.exp(-U*U/2);h.push(E),A===0?b+=E:A<p&&(b+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const S=this._sizeLods[r],C=3*S*(r>y-Ei?r-y+Ei:0),w=4*(this._cubeSize-S);Hr(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(f,Ks)}}function Sp(n){const e=[],t=[],i=[];let r=n;const s=n-Ei+1+cl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ei?l=cl[o-n+Ei-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,v=3,p=2,h=1,b=new Float32Array(v*_*m),y=new Float32Array(p*_*m),S=new Float32Array(h*_*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,U=w>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(E,v*_*w),y.set(d,p*_*w);const M=[w,w,w,w,w,w];S.set(M,h*_*w)}const C=new Qe;C.setAttribute("position",new wt(b,v)),C.setAttribute("uv",new wt(y,p)),C.setAttribute("faceIndex",new wt(S,h)),e.push(C),r>Ei&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dl(n,e,t){const i=new Gt(n,e,t);return i.texture.mapping=fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ep(n,e,t){const i=new Float32Array(ei),r=new N(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ga(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function pl(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ml(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function Tp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===So||l===Eo,u=l===wi||l===Ci;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new fl(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new fl(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&er("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bp(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,_=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let y=0,S=b.length;y<S;y+=3){const C=b[y+0],w=b[y+1],A=b[y+2];d.push(C,w,w,A,A,C)}}else if(_!==void 0){const b=_.array;v=_.version;for(let y=0,S=b.length/3-1;y<S;y+=3){const C=y+0,w=y+1,A=y+2;d.push(C,w,w,A,A,C)}}else return;const p=new(sc(d)?hc:uc)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ap(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,d*o,_),t.update(m,i,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];t.update(p,i,1)}function f(d,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,_);let h=0;for(let b=0;b<_;b++)h+=m[b]*v[b];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Rp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wp(n,e,t){const i=new WeakMap,r=new ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*f),U=new oc(A,C,w,f);U.type=bn,U.needsUpdate=!0;const E=S*4;for(let H=0;H<f;H++){const O=h[H],G=b[H],K=y[H],W=C*w*4*H;for(let Y=0;Y<O.count;Y++){const Z=Y*E;_===!0&&(r.fromBufferAttribute(O,Y),A[W+Z+0]=r.x,A[W+Z+1]=r.y,A[W+Z+2]=r.z,A[W+Z+3]=0),v===!0&&(r.fromBufferAttribute(G,Y),A[W+Z+4]=r.x,A[W+Z+5]=r.y,A[W+Z+6]=r.z,A[W+Z+7]=0),p===!0&&(r.fromBufferAttribute(K,Y),A[W+Z+8]=r.x,A[W+Z+9]=r.y,A[W+Z+10]=r.z,A[W+Z+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new Le(C,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Cp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Sc=new Rt,gl=new _c(1,1),Ec=new oc,Tc=new rh,yc=new pc,_l=[],vl=[],xl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function Ii(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_l[r];if(s===void 0&&(s=new Float32Array(r),_l[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ms(n,e){let t=vl[e];t===void 0&&(t=new Int32Array(e),vl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Up(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Sl.set(i),n.uniformMatrix2fv(this.addr,!1,Sl),_t(t,i)}}function Ip(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Ml.set(i),n.uniformMatrix3fv(this.addr,!1,Ml),_t(t,i)}}function Np(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;xl.set(i),n.uniformMatrix4fv(this.addr,!1,xl),_t(t,i)}}function Fp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function Bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function kp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function Wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gl.compareFunction=rc,s=gl):s=Sc,t.setTexture2D(e||s,r)}function Yp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tc,r)}function qp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yc,r)}function Kp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ec,r)}function $p(n){switch(n){case 5126:return Pp;case 35664:return Hp;case 35665:return Dp;case 35666:return Lp;case 35674:return Up;case 35675:return Ip;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return zp;case 35669:case 35673:return Bp;case 5125:return kp;case 36294:return Gp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Kp}}function Zp(n,e){n.uniform1fv(this.addr,e)}function jp(n,e){const t=Ii(e,this.size,2);n.uniform2fv(this.addr,t)}function Jp(n,e){const t=Ii(e,this.size,3);n.uniform3fv(this.addr,t)}function Qp(n,e){const t=Ii(e,this.size,4);n.uniform4fv(this.addr,t)}function em(n,e){const t=Ii(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tm(n,e){const t=Ii(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nm(n,e){const t=Ii(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function im(n,e){n.uniform1iv(this.addr,e)}function rm(n,e){n.uniform2iv(this.addr,e)}function sm(n,e){n.uniform3iv(this.addr,e)}function om(n,e){n.uniform4iv(this.addr,e)}function am(n,e){n.uniform1uiv(this.addr,e)}function lm(n,e){n.uniform2uiv(this.addr,e)}function cm(n,e){n.uniform3uiv(this.addr,e)}function um(n,e){n.uniform4uiv(this.addr,e)}function hm(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sc,s[o])}function fm(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Tc,s[o])}function dm(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yc,s[o])}function pm(n,e,t){const i=this.cache,r=e.length,s=ms(t,r);gt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ec,s[o])}function mm(n){switch(n){case 5126:return Zp;case 35664:return jp;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return pm}}class gm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$p(t.type)}}class _m{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mm(t.type)}}class vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function El(n,e){n.seq.push(e),n.map[e.id]=e}function xm(n,e,t){const i=n.name,r=i.length;for(Qs.lastIndex=0;;){const s=Qs.exec(i),o=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){El(t,c===void 0?new gm(a,n,e):new _m(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new vm(a),El(t,f)),t=f}}}class qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Tl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Mm=37297;let Sm=0;function Em(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yl=new Ne;function Tm(n){Ye._getMatrix(yl,Ye.workingColorSpace,n);const e=`mat3( ${yl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Qr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Em(n.getShaderSource(e),a)}else return s}function ym(n,e){const t=Tm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bm(n,e){let t;switch(e){case Hu:t="Linear";break;case Du:t="Reinhard";break;case Lu:t="Cineon";break;case Uu:t="ACESFilmic";break;case Nu:t="AgX";break;case Fu:t="Neutral";break;case Iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new N;function Am(){Ye.getLuminanceCoefficients(Dr);const n=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function wm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xi(n){return n!==""}function Al(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(n){return n.replace(Pm,Dm)}const Hm=new Map;function Dm(n,e){let t=Oe[e];if(t===void 0){const i=Hm.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ea(t)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(n){return n.replace(Lm,Um)}function Um(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Im(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wi:case Ci:e="ENVMAP_TYPE_CUBE";break;case fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fm(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ci&&(e="ENVMAP_MODE_REFRACTION"),e}function Om(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Cu:e="ENVMAP_BLENDING_MIX";break;case Pu:e="ENVMAP_BLENDING_ADD";break}return e}function zm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bm(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Im(t),c=Nm(t),u=Fm(t),f=Om(t),d=zm(t),m=Rm(t),_=wm(s),v=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xi).join(`
`),h.length>0&&(h+=`
`)):(p=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),h=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==zn?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ym("linearToOutputTexel",t.outputColorSpace),Am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=ea(o),o=Al(o,t),o=Rl(o,t),a=ea(a),a=Al(a,t),a=Rl(a,t),o=wl(o),a=wl(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=b+p+o,S=b+h+a,C=Tl(r,r.VERTEX_SHADER,y),w=Tl(r,r.FRAGMENT_SHADER,S);r.attachShader(v,C),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(H){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(C)||"",K=r.getShaderInfoLog(w)||"",W=O.trim(),Y=G.trim(),Z=K.trim();let B=!0,se=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,w);else{const ce=bl(r,C,"vertex"),Ee=bl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+W+`
`+ce+`
`+Ee)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||Z==="")&&(se=!1);se&&(H.diagnostics={runnable:B,programLog:W,vertexShader:{log:Y,prefix:p},fragmentShader:{log:Z,prefix:h}})}r.deleteShader(C),r.deleteShader(w),U=new qr(r,v),E=Cm(r,v)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,Mm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let km=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vm(e),t.set(e,i)),i}}class Vm{constructor(e){this.id=km++,this.code=e,this.usedTimes=0}}function Wm(n,e,t,i,r,s,o){const a=new lc,l=new Gm,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,H,O,G){const K=O.fog,W=G.geometry,Y=E.isMeshStandardMaterial?O.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),B=Z&&Z.mapping===fs?Z.image.height:null,se=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ee=ce!==void 0?ce.length:0;let ke=0;W.morphAttributes.position!==void 0&&(ke=1),W.morphAttributes.normal!==void 0&&(ke=2),W.morphAttributes.color!==void 0&&(ke=3);let et,it,qe,X;if(se){const Ke=hn[se];et=Ke.vertexShader,it=Ke.fragmentShader}else et=E.vertexShader,it=E.fragmentShader,l.update(E),qe=l.getVertexShaderID(E),X=l.getFragmentShaderID(E);const j=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),He=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,We=!!E.map,Et=!!E.matcap,R=!!Z,rt=!!E.aoMap,Ue=!!E.lightMap,Ce=!!E.bumpMap,me=!!E.normalMap,st=!!E.displacementMap,ge=!!E.emissiveMap,Fe=!!E.metalnessMap,vt=!!E.roughnessMap,ht=E.anisotropy>0,T=E.clearcoat>0,g=E.dispersion>0,I=E.iridescence>0,V=E.sheen>0,$=E.transmission>0,k=ht&&!!E.anisotropyMap,Me=T&&!!E.clearcoatMap,ne=T&&!!E.clearcoatNormalMap,_e=T&&!!E.clearcoatRoughnessMap,ve=I&&!!E.iridescenceMap,ee=I&&!!E.iridescenceThicknessMap,le=V&&!!E.sheenColorMap,we=V&&!!E.sheenRoughnessMap,xe=!!E.specularMap,oe=!!E.specularColorMap,Ie=!!E.specularIntensityMap,P=$&&!!E.transmissionMap,te=$&&!!E.thicknessMap,ie=!!E.gradientMap,he=!!E.alphaMap,J=E.alphaTest>0,q=!!E.alphaHash,pe=!!E.extensions;let De=zn;E.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=n.toneMapping);const tt={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:it,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:He,instancingColor:He&&G.instanceColor!==null,instancingMorph:He&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pi,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:Et,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:B,aoMap:rt,lightMap:Ue,bumpMap:Ce,normalMap:me,displacementMap:d&&st,emissiveMap:ge,normalMapObjectSpace:me&&E.normalMapType===Gu,normalMapTangentSpace:me&&E.normalMapType===ku,metalnessMap:Fe,roughnessMap:vt,anisotropy:ht,anisotropyMap:k,clearcoat:T,clearcoatMap:Me,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:g,iridescence:I,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:V,sheenColorMap:le,sheenRoughnessMap:we,specularMap:xe,specularColorMap:oe,specularIntensityMap:Ie,transmission:$,transmissionMap:P,thicknessMap:te,gradientMap:ie,opaque:E.transparent===!1&&E.blending===yi&&E.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:q,combine:E.combine,mapUv:We&&v(E.map.channel),aoMapUv:rt&&v(E.aoMap.channel),lightMapUv:Ue&&v(E.lightMap.channel),bumpMapUv:Ce&&v(E.bumpMap.channel),normalMapUv:me&&v(E.normalMap.channel),displacementMapUv:st&&v(E.displacementMap.channel),emissiveMapUv:ge&&v(E.emissiveMap.channel),metalnessMapUv:Fe&&v(E.metalnessMap.channel),roughnessMapUv:vt&&v(E.roughnessMap.channel),anisotropyMapUv:k&&v(E.anisotropyMap.channel),clearcoatMapUv:Me&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(E.sheenRoughnessMap.channel),specularMapUv:xe&&v(E.specularMap.channel),specularColorMapUv:oe&&v(E.specularColorMap.channel),specularIntensityMapUv:Ie&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:te&&v(E.thicknessMap.channel),alphaMapUv:he&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||ht),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(We||he),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===Ze,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===Ut,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&E.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)M.push(H),M.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(b(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const M=_[E.type];let H;if(M){const O=hn[M];H=ns.clone(O.uniforms)}else H=E.uniforms;return H}function C(E,M){let H;for(let O=0,G=u.length;O<G;O++){const K=u[O];if(K.cacheKey===M){H=K,++H.usedTimes;break}}return H===void 0&&(H=new Bm(n,M,E,s),u.push(H)),H}function w(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:U}}function Xm(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ym(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,_,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function a(f,d,m,_,v,p){const h=o(f,d,m,_,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,_,v,p){const h=o(f,d,m,_,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Ym),i.length>1&&i.sort(d||Pl),r.length>1&&r.sort(d||Pl)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hl,n.set(i,[o])):r>=s.length?(o=new Hl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Km(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function $m(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zm=0;function jm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jm(n){const e=new Km,t=$m(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new pt,o=new pt;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,v=0,p=0,h=0,b=0,y=0,S=0,C=0,w=0,A=0;c.sort(jm);for(let E=0,M=c.length;E<M;E++){const H=c[E],O=H.color,G=H.intensity,K=H.distance,W=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)u+=O.r*G,f+=O.g*G,d+=O.b*G;else if(H.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(H.sh.coefficients[Y],G);A++}else if(H.isDirectionalLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,B=t.get(H);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=H.shadow.matrix,b++}i.directional[m]=Y,m++}else if(H.isSpotLight){const Y=e.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(O).multiplyScalar(G),Y.distance=K,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,i.spot[v]=Y;const Z=H.shadow;if(H.map&&(i.spotLightMap[C]=H.map,C++,Z.updateMatrices(H),H.castShadow&&w++),i.spotLightMatrix[v]=Z.matrix,H.castShadow){const B=t.get(H);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=W,S++}v++}else if(H.isRectAreaLight){const Y=e.get(H);Y.color.copy(O).multiplyScalar(G),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),i.rectArea[p]=Y,p++}else if(H.isPointLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const Z=H.shadow,B=t.get(H);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,B.shadowCameraNear=Z.camera.near,B.shadowCameraFar=Z.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=H.shadow.matrix,y++}i.point[_]=Y,_++}else if(H.isHemisphereLight){const Y=e.get(H);Y.skyColor.copy(H.color).multiplyScalar(G),Y.groundColor.copy(H.groundColor).multiplyScalar(G),i.hemi[h]=Y,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==y||U.numSpotShadows!==S||U.numSpotMaps!==C||U.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,U.directionalLength=m,U.pointLength=_,U.spotLength=v,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=y,U.numSpotShadows=S,U.numSpotMaps=C,U.numLightProbes=A,i.version=Zm++)}function l(c,u){let f=0,d=0,m=0,_=0,v=0;const p=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const y=c[h];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Dl(n){const e=new Jm(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qm(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dl(n),e.set(r,[a])):s>=o.length?(a=new Dl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
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
}`;function ng(n,e,t){let i=new mc;const r=new Le,s=new Le,o=new ft,a=new Ah({depthPacking:Bu}),l=new Rh,c={},u=t.maxTextureSize,f={[kn]:Ut,[Ut]:kn,[sn]:sn},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:eg,fragmentShader:tg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Qe;_.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let h=this.type;this.render=function(w,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),O=n.state;O.setBlending(An),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=h!==Tn&&this.type===Tn,K=h===Tn&&this.type!==Tn;for(let W=0,Y=w.length;W<Y;W++){const Z=w[W],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const se=B.getFrameExtents();if(r.multiply(se),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,B.mapSize.y=s.y)),B.map===null||G===!0||K===!0){const Ee=this.type!==Tn?{minFilter:kt,magFilter:kt}:{};B.map!==null&&B.map.dispose(),B.map=new Gt(r.x,r.y,Ee),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ce=B.getViewportCount();for(let Ee=0;Ee<ce;Ee++){const ke=B.getViewport(Ee);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),O.viewport(o),B.updateMatrices(Z,Ee),i=B.getFrustum(),S(A,U,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===Tn&&b(B,U),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,H)};function b(w,A){const U=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gt(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,U,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,U,m,v,null)}function y(w,A,U,E){let M=null;const H=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)M=H;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=M.uuid,G=A.uuid;let K=c[O];K===void 0&&(K={},c[O]=K);let W=K[G];W===void 0&&(W=M.clone(),K[G]=W,A.addEventListener("dispose",C)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Tn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=U}return M}function S(w,A,U,E,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Tn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const G=e.update(w),K=w.material;if(Array.isArray(K)){const W=G.groups;for(let Y=0,Z=W.length;Y<Z;Y++){const B=W[Y],se=K[B.materialIndex];if(se&&se.visible){const ce=y(w,se,E,M);w.onBeforeShadow(n,w,A,U,G,ce,B),n.renderBufferDirect(U,null,G,ce,w,B),w.onAfterShadow(n,w,A,U,G,ce,B)}}}else if(K.visible){const W=y(w,K,E,M);w.onBeforeShadow(n,w,A,U,G,W,null),n.renderBufferDirect(U,null,G,W,w,null),w.onAfterShadow(n,w,A,U,G,W,null)}}const O=w.children;for(let G=0,K=O.length;G<K;G++)S(O[G],A,U,E,M)}function C(w){w.target.removeEventListener("dispose",C);for(const U in c){const E=c[U],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const ig={[po]:mo,[go]:xo,[_o]:Mo,[Ri]:vo,[mo]:po,[xo]:go,[Mo]:_o,[vo]:Ri};function rg(n,e){function t(){let P=!1;const te=new ft;let ie=null;const he=new ft(0,0,0,0);return{setMask:function(J){ie!==J&&!P&&(n.colorMask(J,J,J,J),ie=J)},setLocked:function(J){P=J},setClear:function(J,q,pe,De,tt){tt===!0&&(J*=De,q*=De,pe*=De),te.set(J,q,pe,De),he.equals(te)===!1&&(n.clearColor(J,q,pe,De),he.copy(te))},reset:function(){P=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let P=!1,te=!1,ie=null,he=null,J=null;return{setReversed:function(q){if(te!==q){const pe=e.get("EXT_clip_control");q?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=q;const De=J;J=null,this.setClear(De)}},getReversed:function(){return te},setTest:function(q){q?j(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(q){ie!==q&&!P&&(n.depthMask(q),ie=q)},setFunc:function(q){if(te&&(q=ig[q]),he!==q){switch(q){case po:n.depthFunc(n.NEVER);break;case mo:n.depthFunc(n.ALWAYS);break;case go:n.depthFunc(n.LESS);break;case Ri:n.depthFunc(n.LEQUAL);break;case _o:n.depthFunc(n.EQUAL);break;case vo:n.depthFunc(n.GEQUAL);break;case xo:n.depthFunc(n.GREATER);break;case Mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=q}},setLocked:function(q){P=q},setClear:function(q){J!==q&&(te&&(q=1-q),n.clearDepth(q),J=q)},reset:function(){P=!1,ie=null,he=null,J=null,te=!1}}}function r(){let P=!1,te=null,ie=null,he=null,J=null,q=null,pe=null,De=null,tt=null;return{setTest:function(Ke){P||(Ke?j(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ke){te!==Ke&&!P&&(n.stencilMask(Ke),te=Ke)},setFunc:function(Ke,gn,cn){(ie!==Ke||he!==gn||J!==cn)&&(n.stencilFunc(Ke,gn,cn),ie=Ke,he=gn,J=cn)},setOp:function(Ke,gn,cn){(q!==Ke||pe!==gn||De!==cn)&&(n.stencilOp(Ke,gn,cn),q=Ke,pe=gn,De=cn)},setLocked:function(Ke){P=Ke},setClear:function(Ke){tt!==Ke&&(n.clearStencil(Ke),tt=Ke)},reset:function(){P=!1,te=null,ie=null,he=null,J=null,q=null,pe=null,De=null,tt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,v=!1,p=null,h=null,b=null,y=null,S=null,C=null,w=null,A=new ze(0,0,0),U=0,E=!1,M=null,H=null,O=null,G=null,K=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=Z>=1):B.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=Z>=2);let se=null,ce={};const Ee=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),et=new ft().fromArray(Ee),it=new ft().fromArray(ke);function qe(P,te,ie,he){const J=new Uint8Array(4),q=n.createTexture();n.bindTexture(P,q),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ie;pe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return q}const X={};X[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(Ri),Ce(!1),me(La),j(n.CULL_FACE),rt(An);function j(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function fe(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function He(P,te){return f[P]!==te?(n.bindFramebuffer(P,te),f[P]=te,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=te),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Se(P,te){let ie=m,he=!1;if(P){ie=d.get(te),ie===void 0&&(ie=[],d.set(te,ie));const J=P.textures;if(ie.length!==J.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let q=0,pe=J.length;q<pe;q++)ie[q]=n.COLOR_ATTACHMENT0+q;ie.length=J.length,he=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,he=!0);he&&n.drawBuffers(ie)}function We(P){return _!==P?(n.useProgram(P),_=P,!0):!1}const Et={[Qn]:n.FUNC_ADD,[fu]:n.FUNC_SUBTRACT,[du]:n.FUNC_REVERSE_SUBTRACT};Et[pu]=n.MIN,Et[mu]=n.MAX;const R={[gu]:n.ZERO,[_u]:n.ONE,[vu]:n.SRC_COLOR,[ho]:n.SRC_ALPHA,[yu]:n.SRC_ALPHA_SATURATE,[Eu]:n.DST_COLOR,[Mu]:n.DST_ALPHA,[xu]:n.ONE_MINUS_SRC_COLOR,[fo]:n.ONE_MINUS_SRC_ALPHA,[Tu]:n.ONE_MINUS_DST_COLOR,[Su]:n.ONE_MINUS_DST_ALPHA,[bu]:n.CONSTANT_COLOR,[Au]:n.ONE_MINUS_CONSTANT_COLOR,[Ru]:n.CONSTANT_ALPHA,[wu]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(P,te,ie,he,J,q,pe,De,tt,Ke){if(P===An){v===!0&&(fe(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),P!==hu){if(P!==p||Ke!==E){if((h!==Qn||S!==Qn)&&(n.blendEquation(n.FUNC_ADD),h=Qn,S=Qn),Ke)switch(P){case yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFunc(n.ONE,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ia:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ua:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ia:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,y=null,C=null,w=null,A.set(0,0,0),U=0,p=P,E=Ke}return}J=J||te,q=q||ie,pe=pe||he,(te!==h||J!==S)&&(n.blendEquationSeparate(Et[te],Et[J]),h=te,S=J),(ie!==b||he!==y||q!==C||pe!==w)&&(n.blendFuncSeparate(R[ie],R[he],R[q],R[pe]),b=ie,y=he,C=q,w=pe),(De.equals(A)===!1||tt!==U)&&(n.blendColor(De.r,De.g,De.b,tt),A.copy(De),U=tt),p=P,E=!1}function Ue(P,te){P.side===sn?fe(n.CULL_FACE):j(n.CULL_FACE);let ie=P.side===Ut;te&&(ie=!ie),Ce(ie),P.blending===yi&&P.transparent===!1?rt(An):rt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const he=P.stencilWrite;a.setTest(he),he&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){M!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),M=P)}function me(P){P!==lu?(j(n.CULL_FACE),P!==H&&(P===La?n.cullFace(n.BACK):P===cu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),H=P}function st(P){P!==O&&(Y&&n.lineWidth(P),O=P)}function ge(P,te,ie){P?(j(n.POLYGON_OFFSET_FILL),(G!==te||K!==ie)&&(n.polygonOffset(te,ie),G=te,K=ie)):fe(n.POLYGON_OFFSET_FILL)}function Fe(P){P?j(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function vt(P){P===void 0&&(P=n.TEXTURE0+W-1),se!==P&&(n.activeTexture(P),se=P)}function ht(P,te,ie){ie===void 0&&(se===null?ie=n.TEXTURE0+W-1:ie=se);let he=ce[ie];he===void 0&&(he={type:void 0,texture:void 0},ce[ie]=he),(he.type!==P||he.texture!==te)&&(se!==ie&&(n.activeTexture(ie),se=ie),n.bindTexture(P,te||X[P]),he.type=P,he.texture=te)}function T(){const P=ce[se];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(P){et.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),et.copy(P))}function we(P){it.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),it.copy(P))}function xe(P,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let he=ie.get(P);he===void 0&&(he=n.getUniformBlockIndex(te,P.name),ie.set(P,he))}function oe(P,te){const he=c.get(te).get(P);l.get(te)!==he&&(n.uniformBlockBinding(te,he,P.__bindingPointIndex),l.set(te,he))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,ce={},f={},d=new WeakMap,m=[],_=null,v=!1,p=null,h=null,b=null,y=null,S=null,C=null,w=null,A=new ze(0,0,0),U=0,E=!1,M=null,H=null,O=null,G=null,K=null,et.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:fe,bindFramebuffer:He,drawBuffers:Se,useProgram:We,setBlending:rt,setMaterial:Ue,setFlipSided:Ce,setCullFace:me,setLineWidth:st,setPolygonOffset:ge,setScissorTest:Fe,activeTexture:vt,bindTexture:ht,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:ve,texImage3D:ee,updateUBOMapping:xe,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:_e,texSubImage2D:V,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:Me,scissor:le,viewport:we,reset:Ie}}function sg(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):ts("canvas")}function v(T,g,I){let V=1;const $=ht(T);if(($.width>I||$.height>I)&&(V=I/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(V*$.width),Me=Math.floor(V*$.height);f===void 0&&(f=_(k,Me));const ne=g?_(k,Me):f;return ne.width=k,ne.height=Me,ne.getContext("2d").drawImage(T,0,0,k,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+Me+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,g,I,V,$=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=g;if(g===n.RED&&(I===n.FLOAT&&(k=n.R32F),I===n.HALF_FLOAT&&(k=n.R16F),I===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.R8UI),I===n.UNSIGNED_SHORT&&(k=n.R16UI),I===n.UNSIGNED_INT&&(k=n.R32UI),I===n.BYTE&&(k=n.R8I),I===n.SHORT&&(k=n.R16I),I===n.INT&&(k=n.R32I)),g===n.RG&&(I===n.FLOAT&&(k=n.RG32F),I===n.HALF_FLOAT&&(k=n.RG16F),I===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RG8UI),I===n.UNSIGNED_SHORT&&(k=n.RG16UI),I===n.UNSIGNED_INT&&(k=n.RG32UI),I===n.BYTE&&(k=n.RG8I),I===n.SHORT&&(k=n.RG16I),I===n.INT&&(k=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGB8UI),I===n.UNSIGNED_SHORT&&(k=n.RGB16UI),I===n.UNSIGNED_INT&&(k=n.RGB32UI),I===n.BYTE&&(k=n.RGB8I),I===n.SHORT&&(k=n.RGB16I),I===n.INT&&(k=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),I===n.UNSIGNED_INT&&(k=n.RGBA32UI),I===n.BYTE&&(k=n.RGBA8I),I===n.SHORT&&(k=n.RGBA16I),I===n.INT&&(k=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),g===n.RGBA){const Me=$?Qr:Ye.getTransfer(V);I===n.FLOAT&&(k=n.RGBA32F),I===n.HALF_FLOAT&&(k=n.RGBA16F),I===n.UNSIGNED_BYTE&&(k=Me===Ze?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function S(T,g){let I;return T?g===null||g===ri||g===Zi?I=n.DEPTH24_STENCIL8:g===bn?I=n.DEPTH32F_STENCIL8:g===$i&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ri||g===Zi?I=n.DEPTH_COMPONENT24:g===bn?I=n.DEPTH_COMPONENT32F:g===$i&&(I=n.DEPTH_COMPONENT16),I}function C(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==pn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),U(g),g.isVideoTexture&&u.delete(g)}function A(T){const g=T.target;g.removeEventListener("dispose",A),M(g)}function U(T){const g=i.get(T);if(g.__webglInit===void 0)return;const I=T.source,V=d.get(I);if(V){const $=V[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(T),Object.keys(V).length===0&&d.delete(I)}i.remove(T)}function E(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const I=T.source,V=d.get(I);delete V[g.__cacheKey],o.memory.textures--}function M(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let $=0;$<g.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(g.__webglFramebuffer[V][$]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let V=0,$=I.length;V<$;V++){const k=i.get(I[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(I[V])}i.remove(T)}let H=0;function O(){H=0}function G(){const T=H;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),H+=1,T}function K(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function W(T,g){const I=i.get(T);if(T.isVideoTexture&&Fe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(I,T,g);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function Y(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){X(I,T,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function Z(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){X(I,T,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function B(T,g){const I=i.get(T);if(T.version>0&&I.__version!==T.version){j(I,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const se={[To]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},ce={[kt]:n.NEAREST,[Ou]:n.NEAREST_MIPMAP_NEAREST,[ur]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Es]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},Ee={[Vu]:n.NEVER,[$u]:n.ALWAYS,[Wu]:n.LESS,[rc]:n.LEQUAL,[Xu]:n.EQUAL,[Ku]:n.GEQUAL,[Yu]:n.GREATER,[qu]:n.NOTEQUAL};function ke(T,g){if(g.type===bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===pn||g.magFilter===Es||g.magFilter===ur||g.magFilter===ii||g.minFilter===pn||g.minFilter===Es||g.minFilter===ur||g.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,se[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,se[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,se[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ce[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===kt||g.minFilter!==ur&&g.minFilter!==ii||g.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function et(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const V=g.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const k=K(g);if(k!==T.__cacheKey){$[k]===void 0&&($[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[k].usedTimes++;const Me=$[T.__cacheKey];Me!==void 0&&($[T.__cacheKey].usedTimes--,Me.usedTimes===0&&E(g)),T.__cacheKey=k,T.__webglTexture=$[k].texture}return I}function it(T,g,I){return Math.floor(Math.floor(T/I)/g)}function qe(T,g,I,V){const k=T.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,V,g.data);else{k.sort((ee,le)=>ee.start-le.start);let Me=0;for(let ee=1;ee<k.length;ee++){const le=k[Me],we=k[ee],xe=le.start+le.count,oe=it(we.start,g.width,4),Ie=it(le.start,g.width,4);we.start<=xe+1&&oe===Ie&&it(we.start+we.count-1,g.width,4)===oe?le.count=Math.max(le.count,we.start+we.count-le.start):(++Me,k[Me]=we)}k.length=Me+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ee=0,le=k.length;ee<le;ee++){const we=k[ee],xe=Math.floor(we.start/4),oe=Math.ceil(we.count/4),Ie=xe%g.width,P=Math.floor(xe/g.width),te=oe,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ie,P,te,ie,I,V,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function X(T,g,I){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const $=et(T,g),k=g.source;t.bindTexture(V,T.__webglTexture,n.TEXTURE0+I);const Me=i.get(k);if(k.version!==Me.__version||$===!0){t.activeTexture(n.TEXTURE0+I);const ne=Ye.getPrimaries(Ye.workingColorSpace),_e=g.colorSpace===Fn?null:Ye.getPrimaries(g.colorSpace),ve=g.colorSpace===Fn||ne===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=v(g.image,!1,r.maxTextureSize);ee=vt(g,ee);const le=s.convert(g.format,g.colorSpace),we=s.convert(g.type);let xe=y(g.internalFormat,le,we,g.colorSpace,g.isVideoTexture);ke(V,g);let oe;const Ie=g.mipmaps,P=g.isVideoTexture!==!0,te=Me.__version===void 0||$===!0,ie=k.dataReady,he=C(g,ee);if(g.isDepthTexture)xe=S(g.format===Ji,g.type),te&&(P?t.texStorage2D(n.TEXTURE_2D,1,xe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,xe,ee.width,ee.height,0,le,we,null));else if(g.isDataTexture)if(Ie.length>0){P&&te&&t.texStorage2D(n.TEXTURE_2D,he,xe,Ie[0].width,Ie[0].height);for(let J=0,q=Ie.length;J<q;J++)oe=Ie[J],P?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,le,we,oe.data):t.texImage2D(n.TEXTURE_2D,J,xe,oe.width,oe.height,0,le,we,oe.data);g.generateMipmaps=!1}else P?(te&&t.texStorage2D(n.TEXTURE_2D,he,xe,ee.width,ee.height),ie&&qe(g,ee,le,we)):t.texImage2D(n.TEXTURE_2D,0,xe,ee.width,ee.height,0,le,we,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,xe,Ie[0].width,Ie[0].height,ee.depth);for(let J=0,q=Ie.length;J<q;J++)if(oe=Ie[J],g.format!==an)if(le!==null)if(P){if(ie)if(g.layerUpdates.size>0){const pe=ll(oe.width,oe.height,g.format,g.type);for(const De of g.layerUpdates){const tt=oe.data.subarray(De*pe/oe.data.BYTES_PER_ELEMENT,(De+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,De,oe.width,oe.height,1,le,tt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,le,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,xe,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,le,we,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,xe,oe.width,oe.height,ee.depth,0,le,we,oe.data)}else{P&&te&&t.texStorage2D(n.TEXTURE_2D,he,xe,Ie[0].width,Ie[0].height);for(let J=0,q=Ie.length;J<q;J++)oe=Ie[J],g.format!==an?le!==null?P?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,xe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,le,we,oe.data):t.texImage2D(n.TEXTURE_2D,J,xe,oe.width,oe.height,0,le,we,oe.data)}else if(g.isDataArrayTexture)if(P){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,xe,ee.width,ee.height,ee.depth),ie)if(g.layerUpdates.size>0){const J=ll(ee.width,ee.height,g.format,g.type);for(const q of g.layerUpdates){const pe=ee.data.subarray(q*J/ee.data.BYTES_PER_ELEMENT,(q+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ee.width,ee.height,1,le,we,pe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(g.isData3DTexture)P?(te&&t.texStorage3D(n.TEXTURE_3D,he,xe,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)):t.texImage3D(n.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(g.isFramebufferTexture){if(te)if(P)t.texStorage2D(n.TEXTURE_2D,he,xe,ee.width,ee.height);else{let J=ee.width,q=ee.height;for(let pe=0;pe<he;pe++)t.texImage2D(n.TEXTURE_2D,pe,xe,J,q,0,le,we,null),J>>=1,q>>=1}}else if(Ie.length>0){if(P&&te){const J=ht(Ie[0]);t.texStorage2D(n.TEXTURE_2D,he,xe,J.width,J.height)}for(let J=0,q=Ie.length;J<q;J++)oe=Ie[J],P?ie&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le,we,oe):t.texImage2D(n.TEXTURE_2D,J,xe,le,we,oe);g.generateMipmaps=!1}else if(P){if(te){const J=ht(ee);t.texStorage2D(n.TEXTURE_2D,he,xe,J.width,J.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,we,ee)}else t.texImage2D(n.TEXTURE_2D,0,xe,le,we,ee);p(g)&&h(V),Me.__version=k.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function j(T,g,I){if(g.image.length!==6)return;const V=et(T,g),$=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+I);const k=i.get($);if($.version!==k.__version||V===!0){t.activeTexture(n.TEXTURE0+I);const Me=Ye.getPrimaries(Ye.workingColorSpace),ne=g.colorSpace===Fn?null:Ye.getPrimaries(g.colorSpace),_e=g.colorSpace===Fn||Me===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,le=[];for(let q=0;q<6;q++)!ve&&!ee?le[q]=v(g.image[q],!0,r.maxCubemapSize):le[q]=ee?g.image[q].image:g.image[q],le[q]=vt(g,le[q]);const we=le[0],xe=s.convert(g.format,g.colorSpace),oe=s.convert(g.type),Ie=y(g.internalFormat,xe,oe,g.colorSpace),P=g.isVideoTexture!==!0,te=k.__version===void 0||V===!0,ie=$.dataReady;let he=C(g,we);ke(n.TEXTURE_CUBE_MAP,g);let J;if(ve){P&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,we.width,we.height);for(let q=0;q<6;q++){J=le[q].mipmaps;for(let pe=0;pe<J.length;pe++){const De=J[pe];g.format!==an?xe!==null?P?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,De.width,De.height,xe,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,Ie,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,De.width,De.height,xe,oe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,Ie,De.width,De.height,0,xe,oe,De.data)}}}else{if(J=g.mipmaps,P&&te){J.length>0&&he++;const q=ht(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,q.width,q.height)}for(let q=0;q<6;q++)if(ee){P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,le[q].width,le[q].height,xe,oe,le[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ie,le[q].width,le[q].height,0,xe,oe,le[q].data);for(let pe=0;pe<J.length;pe++){const tt=J[pe].image[q].image;P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,tt.width,tt.height,xe,oe,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,Ie,tt.width,tt.height,0,xe,oe,tt.data)}}else{P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xe,oe,le[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ie,xe,oe,le[q]);for(let pe=0;pe<J.length;pe++){const De=J[pe];P?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,xe,oe,De.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,Ie,xe,oe,De.image[q])}}}p(g)&&h(n.TEXTURE_CUBE_MAP),k.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function fe(T,g,I,V,$,k){const Me=s.convert(I.format,I.colorSpace),ne=s.convert(I.type),_e=y(I.internalFormat,Me,ne,I.colorSpace),ve=i.get(g),ee=i.get(I);if(ee.__renderTarget=g,!ve.__hasExternalTextures){const le=Math.max(1,g.width>>k),we=Math.max(1,g.height>>k);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,k,_e,le,we,g.depth,0,Me,ne,null):t.texImage2D($,k,_e,le,we,0,Me,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ge(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,ee.__webglTexture,0,st(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,ee.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(T,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const V=g.depthTexture,$=V&&V.isDepthTexture?V.type:null,k=S(g.stencilBuffer,$),Me=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=st(g);ge(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,k,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,T)}else{const V=g.textures;for(let $=0;$<V.length;$++){const k=V[$],Me=s.convert(k.format,k.colorSpace),ne=s.convert(k.type),_e=y(k.internalFormat,Me,ne,k.colorSpace),ve=st(g);I&&ge(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,_e,g.width,g.height):ge(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,_e,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,_e,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const $=V.__webglTexture,k=st(g);if(g.depthTexture.format===ji)ge(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(g.depthTexture.format===Ji)ge(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function We(T){const g=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=V}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const V=T.texture.mipmaps;V&&V.length>0?Se(g.__webglFramebuffer[0],T):Se(g.__webglFramebuffer,T)}else if(I){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),He(g.__webglDepthbuffer[V],T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),He(g.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(T,g,I){const V=i.get(T);g!==void 0&&fe(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&We(T)}function R(T){const g=T.texture,I=i.get(T),V=i.get(g);T.addEventListener("dispose",A);const $=T.textures,k=T.isWebGLCubeRenderTarget===!0,Me=$.length>1;if(Me||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,o.memory.textures++),k){I.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[ne]=[];for(let _e=0;_e<g.mipmaps.length;_e++)I.__webglFramebuffer[ne][_e]=n.createFramebuffer()}else I.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)I.__webglFramebuffer[ne]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ne=0,_e=$.length;ne<_e;ne++){const ve=i.get($[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ge(T)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const _e=$[ne];I.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ne]);const ve=s.convert(_e.format,_e.colorSpace),ee=s.convert(_e.type),le=y(_e.internalFormat,ve,ee,_e.colorSpace,T.isXRRenderTarget===!0),we=st(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,le,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,I.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),He(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ke(n.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)fe(I.__webglFramebuffer[ne][_e],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else fe(I.__webglFramebuffer[ne],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ne=0,_e=$.length;ne<_e;ne++){const ve=$[ne],ee=i.get(ve);let le=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),ke(le,ve),fe(I.__webglFramebuffer,T,ve,n.COLOR_ATTACHMENT0+ne,le,0),p(ve)&&h(le)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,V.__webglTexture),ke(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)fe(I.__webglFramebuffer[_e],T,g,n.COLOR_ATTACHMENT0,ne,_e);else fe(I.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,ne,0);p(g)&&h(ne),t.unbindTexture()}T.depthBuffer&&We(T)}function rt(T){const g=T.textures;for(let I=0,V=g.length;I<V;I++){const $=g[I];if(p($)){const k=b(T),Me=i.get($).__webglTexture;t.bindTexture(k,Me),h(k),t.unbindTexture()}}}const Ue=[],Ce=[];function me(T){if(T.samples>0){if(ge(T)===!1){const g=T.textures,I=T.width,V=T.height;let $=n.COLOR_BUFFER_BIT;const k=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(T),ne=g.length>1;if(ne)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(g[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,I,V,0,0,I,V,$,n.NEAREST),l===!0&&(Ue.length=0,Ce.length=0,Ue.push(n.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ue.push(k),Ce.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(g[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function st(T){return Math.min(r.maxSamples,T.samples)}function ge(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Fe(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function vt(T,g){const I=T.colorSpace,V=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Pi&&I!==Fn&&(Ye.getTransfer(I)===Ze?(V!==an||$!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=B,this.rebindTextures=Et,this.setupRenderTarget=R,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function og(n,e){function t(i,r=Fn){let s;const o=Ye.getTransfer(r);if(i===ln)return n.UNSIGNED_BYTE;if(i===ca)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ua)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ql)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zl)return n.BYTE;if(i===jl)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===la)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Rn)return n.HALF_FLOAT;if(i===ec)return n.ALPHA;if(i===tc)return n.RGB;if(i===an)return n.RGBA;if(i===ji)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===nc)return n.RED;if(i===ha)return n.RED_INTEGER;if(i===ic)return n.RG;if(i===fa)return n.RG_INTEGER;if(i===da)return n.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===Yr)if(o===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===Ao||i===Ro||i===wo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Co||i===Po||i===Ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Co||i===Po)return o===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ho)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Do||i===Lo||i===Uo||i===Io||i===No||i===Fo||i===Oo||i===zo||i===Bo||i===ko||i===Go||i===Vo||i===Wo||i===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Do)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Io)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===No)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ko)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Go)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===qo||i===Ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yo)return o===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$o||i===Zo||i===jo||i===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
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

}`;class cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Lt({vertexShader:ag,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ug extends Li{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const v=typeof XRWebGLBinding<"u",p=new cg,h={},b=t.getContextAttributes();let y=null,S=null;const C=[],w=[],A=new Le;let U=null;const E=new $t;E.viewport=new ft;const M=new $t;M.viewport=new ft;const H=[E,M],O=new wh;let G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=C[X];return j===void 0&&(j=new Xs,C[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=C[X];return j===void 0&&(j=new Xs,C[X]=j),j.getGripSpace()},this.getHand=function(X){let j=C[X];return j===void 0&&(j=new Xs,C[X]=j),j.getHandSpace()};function W(X){const j=w.indexOf(X.inputSource);if(j===-1)return;const fe=C[j];fe!==void 0&&(fe.update(X.inputSource,X.frame,c||o),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<C.length;X++){const j=w[X];j!==null&&(w[X]=null,C[X].disconnect(j))}G=null,K=null,p.reset();for(const X in h)delete h[X];e.setRenderTarget(y),m=null,d=null,f=null,r=null,S=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,He=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?Ji:ji,He=b.stencil?Zi:ri);const We={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Gt(d.textureWidth,d.textureHeight,{format:an,type:ln,depthTexture:new _c(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Gt(m.framebufferWidth,m.framebufferHeight,{format:an,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z(X){for(let j=0;j<X.removed.length;j++){const fe=X.removed[j],He=w.indexOf(fe);He>=0&&(w[He]=null,C[He].disconnect(fe))}for(let j=0;j<X.added.length;j++){const fe=X.added[j];let He=w.indexOf(fe);if(He===-1){for(let We=0;We<C.length;We++)if(We>=w.length){w.push(fe),He=We;break}else if(w[We]===null){w[We]=fe,He=We;break}if(He===-1)break}const Se=C[He];Se&&Se.connect(fe)}}const B=new N,se=new N;function ce(X,j,fe){B.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);const He=B.distanceTo(se),Se=j.projectionMatrix.elements,We=fe.projectionMatrix.elements,Et=Se[14]/(Se[10]-1),R=Se[14]/(Se[10]+1),rt=(Se[9]+1)/Se[5],Ue=(Se[9]-1)/Se[5],Ce=(Se[8]-1)/Se[0],me=(We[8]+1)/We[0],st=Et*Ce,ge=Et*me,Fe=He/(-Ce+me),vt=Fe*-Ce;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(vt),X.translateZ(Fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Se[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ht=Et+Fe,T=R+Fe,g=st-vt,I=ge+(He-vt),V=rt*R/T*ht,$=Ue*R/T*ht;X.projectionMatrix.makePerspective(g,I,V,$,ht,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ee(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let j=X.near,fe=X.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),O.near=M.near=E.near=j,O.far=M.far=E.far=fe,(G!==O.near||K!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,K=O.far),O.layers.mask=X.layers.mask|6,E.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const He=X.parent,Se=O.cameras;Ee(O,He);for(let We=0;We<Se.length;We++)Ee(Se[We],He);Se.length===2?ce(O,E,M):O.projectionMatrix.copy(E.projectionMatrix),ke(X,O,He)};function ke(X,j,fe){fe===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Qo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(X){return h[X]};let et=null;function it(X,j){if(u=j.getViewerPose(c||o),_=j,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let He=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,He=!0);for(let R=0;R<fe.length;R++){const rt=fe[R];let Ue=null;if(m!==null)Ue=m.getViewport(rt);else{const me=f.getViewSubImage(d,rt);Ue=me.viewport,R===0&&(e.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(S))}let Ce=H[R];Ce===void 0&&(Ce=new $t,Ce.layers.enable(R),Ce.viewport=new ft,H[R]=Ce),Ce.matrix.fromArray(rt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(rt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),R===0&&(O.matrix.copy(Ce.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),He===!0&&O.cameras.push(Ce)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const R=f.getDepthInformation(fe[0]);R&&R.isValid&&R.texture&&p.init(R,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let R=0;R<fe.length;R++){const rt=fe[R].camera;if(rt){let Ue=h[rt];Ue||(Ue=new vc,h[rt]=Ue);const Ce=f.getCameraImage(rt);Ue.sourceTexture=Ce}}}}for(let fe=0;fe<C.length;fe++){const He=w[fe],Se=C[fe];He!==null&&Se!==void 0&&Se.update(He,j,c||o)}et&&et(X,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const qe=new Mc;qe.setAnimationLoop(it),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}}const $n=new Cn,hg=new pt;function fg(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,fc(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,b,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ut&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ut&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h),y=b.envMap,S=b.envMapRotation;y&&(p.envMap.value=y,$n.copy(S),$n.x*=-1,$n.y*=-1,$n.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),p.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler($n)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ut&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dg(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const S=y.program;i.uniformBlockBinding(b,S)}function c(b,y){let S=r[b.id];S===void 0&&(_(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",p));const C=y.program;i.updateUBOMapping(b,C);const w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function u(b){const y=f();b.__bindingPointIndex=y;const S=n.createBuffer(),C=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=r[b.id],S=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,A=S.length;w<A;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,M=U.length;E<M;E++){const H=U[E];if(m(H,w,E,C)===!0){const O=H.__offset,G=Array.isArray(H.value)?H.value:[H.value];let K=0;for(let W=0;W<G.length;W++){const Y=G[W],Z=v(Y);typeof Y=="number"||typeof Y=="boolean"?(H.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,O+K,H.__data)):Y.isMatrix3?(H.__data[0]=Y.elements[0],H.__data[1]=Y.elements[1],H.__data[2]=Y.elements[2],H.__data[3]=0,H.__data[4]=Y.elements[3],H.__data[5]=Y.elements[4],H.__data[6]=Y.elements[5],H.__data[7]=0,H.__data[8]=Y.elements[6],H.__data[9]=Y.elements[7],H.__data[10]=Y.elements[8],H.__data[11]=0):(Y.toArray(H.__data,K),K+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,y,S,C){const w=b.value,A=y+"_"+S;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const U=C[A];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return C[A]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(b){const y=b.uniforms;let S=0;const C=16;for(let A=0,U=y.length;A<U;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,H=E.length;M<H;M++){const O=E[M],G=Array.isArray(O.value)?O.value:[O.value];for(let K=0,W=G.length;K<W;K++){const Y=G[K],Z=v(Y),B=S%C,se=B%Z.boundary,ce=B+se;S+=se,ce!==0&&C-ce<Z.storage&&(S+=C-ce),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Z.storage}}}const w=S%C;return w>0&&(S+=C-w),b.__size=S,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class pg{constructor(e={}){const{canvas:t=ju(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=qt;let w=0,A=0,U=null,E=-1,M=null;const H=new ft,O=new ft;let G=null;const K=new ze(0);let W=0,Y=t.width,Z=t.height,B=1,se=null,ce=null;const Ee=new ft(0,0,Y,Z),ke=new ft(0,0,Y,Z);let et=!1;const it=new mc;let qe=!1,X=!1;const j=new pt,fe=new N,He=new ft,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Et(){return U===null?B:1}let R=i;function rt(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",J,!1),R===null){const D="webgl2";if(R=rt(D,x),R===null)throw rt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ue,Ce,me,st,ge,Fe,vt,ht,T,g,I,V,$,k,Me,ne,_e,ve,ee,le,we,xe,oe,Ie;function P(){Ue=new yp(R),Ue.init(),xe=new og(R,Ue),Ce=new _p(R,Ue,e,xe),me=new rg(R,Ue),Ce.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),st=new Rp(R),ge=new Xm,Fe=new sg(R,Ue,me,ge,Ce,xe,st),vt=new xp(S),ht=new Tp(S),T=new Dh(R),oe=new mp(R,T),g=new bp(R,T,st,oe),I=new Cp(R,g,T,st),ee=new wp(R,Ce,Fe),ne=new vp(ge),V=new Wm(S,vt,ht,Ue,Ce,oe,ne),$=new fg(S,ge),k=new qm,Me=new Qm(Ue),ve=new pp(S,vt,ht,me,I,m,l),_e=new ng(S,I,Ce),Ie=new dg(R,st,Ce,me),le=new gp(R,Ue,st),we=new Ap(R,Ue,st),st.programs=V.programs,S.capabilities=Ce,S.extensions=Ue,S.properties=ge,S.renderLists=k,S.shadowMap=_e,S.state=me,S.info=st}P();const te=new ug(S,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=Ue.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ue.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(x){x!==void 0&&(B=x,this.setSize(Y,Z,!1))},this.getSize=function(x){return x.set(Y,Z)},this.setSize=function(x,D,F=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,Z=D,t.width=Math.floor(x*B),t.height=Math.floor(D*B),F===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Y*B,Z*B).floor()},this.setDrawingBufferSize=function(x,D,F){Y=x,Z=D,B=F,t.width=Math.floor(x*F),t.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(H)},this.getViewport=function(x){return x.copy(Ee)},this.setViewport=function(x,D,F,z){x.isVector4?Ee.set(x.x,x.y,x.z,x.w):Ee.set(x,D,F,z),me.viewport(H.copy(Ee).multiplyScalar(B).round())},this.getScissor=function(x){return x.copy(ke)},this.setScissor=function(x,D,F,z){x.isVector4?ke.set(x.x,x.y,x.z,x.w):ke.set(x,D,F,z),me.scissor(O.copy(ke).multiplyScalar(B).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(x){me.setScissorTest(et=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){ce=x},this.getClearColor=function(x){return x.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,F=!0){let z=0;if(x){let L=!1;if(U!==null){const Q=U.texture.format;L=Q===da||Q===fa||Q===ha}if(L){const Q=U.texture.type,ae=Q===ln||Q===ri||Q===$i||Q===Zi||Q===ca||Q===ua,de=ve.getClearColor(),ue=ve.getClearAlpha(),Re=de.r,Pe=de.g,Te=de.b;ae?(_[0]=Re,_[1]=Pe,_[2]=Te,_[3]=ue,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=Re,v[1]=Pe,v[2]=Te,v[3]=ue,R.clearBufferiv(R.COLOR,0,v))}else z|=R.COLOR_BUFFER_BIT}D&&(z|=R.DEPTH_BUFFER_BIT),F&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),k.dispose(),Me.dispose(),ge.dispose(),vt.dispose(),ht.dispose(),I.dispose(),oe.dispose(),Ie.dispose(),V.dispose(),te.dispose(),te.removeEventListener("sessionstart",cn),te.removeEventListener("sessionend",Ra),Gn.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=st.autoReset,D=_e.enabled,F=_e.autoUpdate,z=_e.needsUpdate,L=_e.type;P(),st.autoReset=x,_e.enabled=D,_e.autoUpdate=F,_e.needsUpdate=z,_e.type=L}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const D=x.target;D.removeEventListener("dispose",q),pe(D)}function pe(x){De(x),ge.remove(x)}function De(x){const D=ge.get(x).programs;D!==void 0&&(D.forEach(function(F){V.releaseProgram(F)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,z,L,Q){D===null&&(D=Se);const ae=L.isMesh&&L.matrixWorld.determinant()<0,de=nu(x,D,F,z,L);me.setMaterial(z,ae);let ue=F.index,Re=1;if(z.wireframe===!0){if(ue=g.getWireframeAttribute(F),ue===void 0)return;Re=2}const Pe=F.drawRange,Te=F.attributes.position;let Ge=Pe.start*Re,$e=(Pe.start+Pe.count)*Re;Q!==null&&(Ge=Math.max(Ge,Q.start*Re),$e=Math.min($e,(Q.start+Q.count)*Re)),ue!==null?(Ge=Math.max(Ge,0),$e=Math.min($e,ue.count)):Te!=null&&(Ge=Math.max(Ge,0),$e=Math.min($e,Te.count));const ut=$e-Ge;if(ut<0||ut===1/0)return;oe.setup(L,z,de,F,ue);let nt,je=le;if(ue!==null&&(nt=T.get(ue),je=we,je.setIndex(nt)),L.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*Et()),je.setMode(R.LINES)):je.setMode(R.TRIANGLES);else if(L.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),me.setLineWidth(Ae*Et()),L.isLineSegments?je.setMode(R.LINES):L.isLineLoop?je.setMode(R.LINE_LOOP):je.setMode(R.LINE_STRIP)}else L.isPoints?je.setMode(R.POINTS):L.isSprite&&je.setMode(R.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))je.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ae=L._multiDrawStarts,lt=L._multiDrawCounts,Xe=L._multiDrawCount,Nt=ue?T.get(ue).bytesPerElement:1,oi=ge.get(z).currentProgram.getUniforms();for(let Ft=0;Ft<Xe;Ft++)oi.setValue(R,"_gl_DrawID",Ft),je.render(Ae[Ft]/Nt,lt[Ft])}else if(L.isInstancedMesh)je.renderInstances(Ge,ut,L.count);else if(F.isInstancedBufferGeometry){const Ae=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,lt=Math.min(F.instanceCount,Ae);je.renderInstances(Ge,ut,lt)}else je.render(Ge,ut)};function tt(x,D,F){x.transparent===!0&&x.side===sn&&x.forceSinglePass===!1?(x.side=Ut,x.needsUpdate=!0,cr(x,D,F),x.side=kn,x.needsUpdate=!0,cr(x,D,F),x.side=sn):cr(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),h=Me.get(F),h.init(D),y.push(h),F.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),x!==F&&x.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const z=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const de=Q[ae];tt(de,F,L),z.add(de)}else tt(Q,F,L),z.add(Q)}),h=y.pop(),z},this.compileAsync=function(x,D,F=null){const z=this.compile(x,D,F);return new Promise(L=>{function Q(){if(z.forEach(function(ae){ge.get(ae).currentProgram.isReady()&&z.delete(ae)}),z.size===0){L(x);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ke=null;function gn(x){Ke&&Ke(x)}function cn(){Gn.stop()}function Ra(){Gn.start()}const Gn=new Mc;Gn.setAnimationLoop(gn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(x){Ke=x,te.setAnimationLoop(x),x===null?Gn.stop():Gn.start()},te.addEventListener("sessionstart",cn),te.addEventListener("sessionend",Ra),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,U),h=Me.get(x,y.length),h.init(D),y.push(h),j.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),it.setFromProjectionMatrix(j,mn,D.reversedDepth),X=this.localClippingEnabled,qe=ne.init(this.clippingPlanes,X),p=k.get(x,b.length),p.init(),b.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Ms(Q,D,-1/0,S.sortObjects)}Ms(x,D,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(se,ce),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&ve.addToRenderList(p,x),this.info.render.frame++,qe===!0&&ne.beginShadows();const F=h.state.shadowsArray;_e.render(F,x,D),qe===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,L=p.transmissive;if(h.setupLights(),D.isArrayCamera){const Q=D.cameras;if(L.length>0)for(let ae=0,de=Q.length;ae<de;ae++){const ue=Q[ae];Ca(z,L,x,ue)}We&&ve.render(x);for(let ae=0,de=Q.length;ae<de;ae++){const ue=Q[ae];wa(p,x,ue,ue.viewport)}}else L.length>0&&Ca(z,L,x,D),We&&ve.render(x),wa(p,x,D);U!==null&&A===0&&(Fe.updateMultisampleRenderTarget(U),Fe.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,D),oe.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(h=y[y.length-1],qe===!0&&ne.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Ms(x,D,F,z){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||it.intersectsSprite(x)){z&&He.setFromMatrixPosition(x.matrixWorld).applyMatrix4(j);const ae=I.update(x),de=x.material;de.visible&&p.push(x,ae,de,F,He.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||it.intersectsObject(x))){const ae=I.update(x),de=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),He.copy(x.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),He.copy(ae.boundingSphere.center)),He.applyMatrix4(x.matrixWorld).applyMatrix4(j)),Array.isArray(de)){const ue=ae.groups;for(let Re=0,Pe=ue.length;Re<Pe;Re++){const Te=ue[Re],Ge=de[Te.materialIndex];Ge&&Ge.visible&&p.push(x,ae,Ge,F,He.z,Te)}}else de.visible&&p.push(x,ae,de,F,He.z,null)}}const Q=x.children;for(let ae=0,de=Q.length;ae<de;ae++)Ms(Q[ae],D,F,z)}function wa(x,D,F,z){const L=x.opaque,Q=x.transmissive,ae=x.transparent;h.setupLightsView(F),qe===!0&&ne.setGlobalState(S.clippingPlanes,F),z&&me.viewport(H.copy(z)),L.length>0&&lr(L,D,F),Q.length>0&&lr(Q,D,F),ae.length>0&&lr(ae,D,F),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ca(x,D,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new Gt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Rn:ln,minFilter:ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=h.state.transmissionRenderTarget[z.id],ae=z.viewport||H;Q.setSize(ae.z*S.transmissionResolutionScale,ae.w*S.transmissionResolutionScale);const de=S.getRenderTarget(),ue=S.getActiveCubeFace(),Re=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(K),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),We&&ve.render(F);const Pe=S.toneMapping;S.toneMapping=zn;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),qe===!0&&ne.setGlobalState(S.clippingPlanes,z),lr(x,F,z),Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let $e=0,ut=D.length;$e<ut;$e++){const nt=D[$e],je=nt.object,Ae=nt.geometry,lt=nt.material,Xe=nt.group;if(lt.side===sn&&je.layers.test(z.layers)){const Nt=lt.side;lt.side=Ut,lt.needsUpdate=!0,Pa(je,F,z,Ae,lt,Xe),lt.side=Nt,lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q))}S.setRenderTarget(de,ue,Re),S.setClearColor(K,W),Te!==void 0&&(z.viewport=Te),S.toneMapping=Pe}function lr(x,D,F){const z=D.isScene===!0?D.overrideMaterial:null;for(let L=0,Q=x.length;L<Q;L++){const ae=x[L],de=ae.object,ue=ae.geometry,Re=ae.group;let Pe=ae.material;Pe.allowOverride===!0&&z!==null&&(Pe=z),de.layers.test(F.layers)&&Pa(de,D,F,ue,Pe,Re)}}function Pa(x,D,F,z,L,Q){x.onBeforeRender(S,D,F,z,L,Q),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(S,D,F,z,x,Q),L.transparent===!0&&L.side===sn&&L.forceSinglePass===!1?(L.side=Ut,L.needsUpdate=!0,S.renderBufferDirect(F,D,z,L,x,Q),L.side=kn,L.needsUpdate=!0,S.renderBufferDirect(F,D,z,L,x,Q),L.side=sn):S.renderBufferDirect(F,D,z,L,x,Q),x.onAfterRender(S,D,F,z,L,Q)}function cr(x,D,F){D.isScene!==!0&&(D=Se);const z=ge.get(x),L=h.state.lights,Q=h.state.shadowsArray,ae=L.state.version,de=V.getParameters(x,L.state,Q,D,F),ue=V.getProgramCacheKey(de);let Re=z.programs;z.environment=x.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(x.isMeshStandardMaterial?ht:vt).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",q),Re=new Map,z.programs=Re);let Pe=Re.get(ue);if(Pe!==void 0){if(z.currentProgram===Pe&&z.lightsStateVersion===ae)return Da(x,de),Pe}else de.uniforms=V.getUniforms(x),x.onBeforeCompile(de,S),Pe=V.acquireProgram(de,ue),Re.set(ue,Pe),z.uniforms=de.uniforms;const Te=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=ne.uniform),Da(x,de),z.needsLights=ru(x),z.lightsStateVersion=ae,z.needsLights&&(Te.ambientLightColor.value=L.state.ambient,Te.lightProbe.value=L.state.probe,Te.directionalLights.value=L.state.directional,Te.directionalLightShadows.value=L.state.directionalShadow,Te.spotLights.value=L.state.spot,Te.spotLightShadows.value=L.state.spotShadow,Te.rectAreaLights.value=L.state.rectArea,Te.ltc_1.value=L.state.rectAreaLTC1,Te.ltc_2.value=L.state.rectAreaLTC2,Te.pointLights.value=L.state.point,Te.pointLightShadows.value=L.state.pointShadow,Te.hemisphereLights.value=L.state.hemi,Te.directionalShadowMap.value=L.state.directionalShadowMap,Te.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Te.spotShadowMap.value=L.state.spotShadowMap,Te.spotLightMatrix.value=L.state.spotLightMatrix,Te.spotLightMap.value=L.state.spotLightMap,Te.pointShadowMap.value=L.state.pointShadowMap,Te.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Pe,z.uniformsList=null,Pe}function Ha(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=qr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Da(x,D){const F=ge.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function nu(x,D,F,z,L){D.isScene!==!0&&(D=Se),Fe.resetTextureUnits();const Q=D.fog,ae=z.isMeshStandardMaterial?D.environment:null,de=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Pi,ue=(z.isMeshStandardMaterial?ht:vt).get(z.envMap||ae),Re=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!F.morphAttributes.position,Ge=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color;let ut=zn;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ut=S.toneMapping);const nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,je=nt!==void 0?nt.length:0,Ae=ge.get(z),lt=h.state.lights;if(qe===!0&&(X===!0||x!==M)){const bt=x===M&&z.id===E;ne.setState(z,x,bt)}let Xe=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==lt.state.version||Ae.outputColorSpace!==de||L.isBatchedMesh&&Ae.batching===!1||!L.isBatchedMesh&&Ae.batching===!0||L.isBatchedMesh&&Ae.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ae.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ae.instancing===!1||!L.isInstancedMesh&&Ae.instancing===!0||L.isSkinnedMesh&&Ae.skinning===!1||!L.isSkinnedMesh&&Ae.skinning===!0||L.isInstancedMesh&&Ae.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ae.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ae.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ae.instancingMorph===!1&&L.morphTexture!==null||Ae.envMap!==ue||z.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==Te||Ae.morphNormals!==Ge||Ae.morphColors!==$e||Ae.toneMapping!==ut||Ae.morphTargetsCount!==je)&&(Xe=!0):(Xe=!0,Ae.__version=z.version);let Nt=Ae.currentProgram;Xe===!0&&(Nt=cr(z,D,L));let oi=!1,Ft=!1,Ni=!1;const ct=Nt.getUniforms(),Vt=Ae.uniforms;if(me.useProgram(Nt.program)&&(oi=!0,Ft=!0,Ni=!0),z.id!==E&&(E=z.id,Ft=!0),oi||M!==x){me.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ct.setValue(R,"projectionMatrix",x.projectionMatrix),ct.setValue(R,"viewMatrix",x.matrixWorldInverse);const Pt=ct.map.cameraPosition;Pt!==void 0&&Pt.setValue(R,fe.setFromMatrixPosition(x.matrixWorld)),Ce.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ft=!0,Ni=!0)}if(L.isSkinnedMesh){ct.setOptional(R,L,"bindMatrix"),ct.setOptional(R,L,"bindMatrixInverse");const bt=L.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ct.setValue(R,"boneTexture",bt.boneTexture,Fe))}L.isBatchedMesh&&(ct.setOptional(R,L,"batchingTexture"),ct.setValue(R,"batchingTexture",L._matricesTexture,Fe),ct.setOptional(R,L,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",L._indirectTexture,Fe),ct.setOptional(R,L,"batchingColorTexture"),L._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",L._colorsTexture,Fe));const Wt=F.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&ee.update(L,F,Nt),(Ft||Ae.receiveShadow!==L.receiveShadow)&&(Ae.receiveShadow=L.receiveShadow,ct.setValue(R,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Vt.envMap.value=ue,Vt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Vt.envMapIntensity.value=D.environmentIntensity),Ft&&(ct.setValue(R,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&iu(Vt,Ni),Q&&z.fog===!0&&$.refreshFogUniforms(Vt,Q),$.refreshMaterialUniforms(Vt,z,B,Z,h.state.transmissionRenderTarget[x.id]),qr.upload(R,Ha(Ae),Vt,Fe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qr.upload(R,Ha(Ae),Vt,Fe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(R,"center",L.center),ct.setValue(R,"modelViewMatrix",L.modelViewMatrix),ct.setValue(R,"normalMatrix",L.normalMatrix),ct.setValue(R,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const bt=z.uniformsGroups;for(let Pt=0,Ss=bt.length;Pt<Ss;Pt++){const Vn=bt[Pt];Ie.update(Vn,Nt),Ie.bind(Vn,Nt)}}return Nt}function iu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function ru(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,D,F){const z=ge.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ge.get(x.texture).__webglTexture=D,ge.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:F,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const F=ge.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const su=R.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){U=x,w=D,A=F;let z=!0,L=null,Q=!1,ae=!1;if(x){const ue=ge.get(x);if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(ue.__webglFramebuffer===void 0)Fe.setupRenderTarget(x);else if(ue.__hasExternalTextures)Fe.rebindTextures(x,ge.get(x.texture).__webglTexture,ge.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Te=x.depthTexture;if(ue.__boundDepthTexture!==Te){if(Te!==null&&ge.has(Te)&&(x.width!==Te.image.width||x.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(x)}}const Re=x.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ae=!0);const Pe=ge.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?L=Pe[D][F]:L=Pe[D],Q=!0):x.samples>0&&Fe.useMultisampledRTT(x)===!1?L=ge.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?L=Pe[F]:L=Pe,H.copy(x.viewport),O.copy(x.scissor),G=x.scissorTest}else H.copy(Ee).multiplyScalar(B).floor(),O.copy(ke).multiplyScalar(B).floor(),G=et;if(F!==0&&(L=su),me.bindFramebuffer(R.FRAMEBUFFER,L)&&z&&me.drawBuffers(x,L),me.viewport(H),me.scissor(O),me.setScissorTest(G),Q){const ue=ge.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,F)}else if(ae){const ue=D;for(let Re=0;Re<x.textures.length;Re++){const Pe=ge.get(x.textures[Re]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,F,ue)}}else if(x!==null&&F!==0){const ue=ge.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ue.__webglTexture,F)}E=-1},this.readRenderTargetPixels=function(x,D,F,z,L,Q,ae,de=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue){me.bindFramebuffer(R.FRAMEBUFFER,ue);try{const Re=x.textures[de],Pe=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-z&&F>=0&&F<=x.height-L&&(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+de),R.readPixels(D,F,z,L,xe.convert(Pe),xe.convert(Te),Q))}finally{const Re=U!==null?ge.get(U).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,z,L,Q,ae,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue)if(D>=0&&D<=x.width-z&&F>=0&&F<=x.height-L){me.bindFramebuffer(R.FRAMEBUFFER,ue);const Re=x.textures[de],Pe=Re.format,Te=Re.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+de),R.readPixels(D,F,z,L,xe.convert(Pe),xe.convert(Te),0);const $e=U!==null?ge.get(U).__webglFramebuffer:null;me.bindFramebuffer(R.FRAMEBUFFER,$e);const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ju(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(Ge),R.deleteSync(ut),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,F=0){const z=Math.pow(2,-F),L=Math.floor(x.image.width*z),Q=Math.floor(x.image.height*z),ae=D!==null?D.x:0,de=D!==null?D.y:0;Fe.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,ae,de,L,Q),me.unbindTexture()};const ou=R.createFramebuffer(),au=R.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,z=null,L=0,Q=null){Q===null&&(L!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=L,L=0):Q=0);let ae,de,ue,Re,Pe,Te,Ge,$e,ut;const nt=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(F!==null)ae=F.max.x-F.min.x,de=F.max.y-F.min.y,ue=F.isBox3?F.max.z-F.min.z:1,Re=F.min.x,Pe=F.min.y,Te=F.isBox3?F.min.z:0;else{const Wt=Math.pow(2,-L);ae=Math.floor(nt.width*Wt),de=Math.floor(nt.height*Wt),x.isDataArrayTexture?ue=nt.depth:x.isData3DTexture?ue=Math.floor(nt.depth*Wt):ue=1,Re=0,Pe=0,Te=0}z!==null?(Ge=z.x,$e=z.y,ut=z.z):(Ge=0,$e=0,ut=0);const je=xe.convert(D.format),Ae=xe.convert(D.type);let lt;D.isData3DTexture?(Fe.setTexture3D(D,0),lt=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Fe.setTexture2DArray(D,0),lt=R.TEXTURE_2D_ARRAY):(Fe.setTexture2D(D,0),lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const Xe=R.getParameter(R.UNPACK_ROW_LENGTH),Nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),oi=R.getParameter(R.UNPACK_SKIP_PIXELS),Ft=R.getParameter(R.UNPACK_SKIP_ROWS),Ni=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te);const ct=x.isDataArrayTexture||x.isData3DTexture,Vt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Wt=ge.get(x),bt=ge.get(D),Pt=ge.get(Wt.__renderTarget),Ss=ge.get(bt.__renderTarget);me.bindFramebuffer(R.READ_FRAMEBUFFER,Pt.__webglFramebuffer),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let Vn=0;Vn<ue;Vn++)ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.get(x).__webglTexture,L,Te+Vn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.get(D).__webglTexture,Q,ut+Vn)),R.blitFramebuffer(Re,Pe,ae,de,Ge,$e,ae,de,R.DEPTH_BUFFER_BIT,R.NEAREST);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(L!==0||x.isRenderTargetTexture||ge.has(x)){const Wt=ge.get(x),bt=ge.get(D);me.bindFramebuffer(R.READ_FRAMEBUFFER,ou),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,au);for(let Pt=0;Pt<ue;Pt++)ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wt.__webglTexture,L,Te+Pt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wt.__webglTexture,L),Vt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bt.__webglTexture,Q,ut+Pt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bt.__webglTexture,Q),L!==0?R.blitFramebuffer(Re,Pe,ae,de,Ge,$e,ae,de,R.COLOR_BUFFER_BIT,R.NEAREST):Vt?R.copyTexSubImage3D(lt,Q,Ge,$e,ut+Pt,Re,Pe,ae,de):R.copyTexSubImage2D(lt,Q,Ge,$e,Re,Pe,ae,de);me.bindFramebuffer(R.READ_FRAMEBUFFER,null),me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Vt?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(lt,Q,Ge,$e,ut,ae,de,ue,je,Ae,nt.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(lt,Q,Ge,$e,ut,ae,de,ue,je,nt.data):R.texSubImage3D(lt,Q,Ge,$e,ut,ae,de,ue,je,Ae,nt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,Ge,$e,ae,de,je,Ae,nt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,Ge,$e,nt.width,nt.height,je,nt.data):R.texSubImage2D(R.TEXTURE_2D,Q,Ge,$e,ae,de,je,Ae,nt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Xe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,oi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ft),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ni),Q===0&&D.generateMipmaps&&R.generateMipmap(lt),me.unbindTexture()},this.initRenderTarget=function(x){ge.get(x).__webglFramebuffer===void 0&&Fe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Fe.setTextureCube(x,0):x.isData3DTexture?Fe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Fe.setTexture2DArray(x,0):Fe.setTexture2D(x,0),me.unbindTexture()},this.resetState=function(){w=0,A=0,U=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function mg(n){let e=n>>>0;const t=()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return{next:t,int:(i,r)=>i+Math.floor(t()*(r-i+1)),state:()=>e}}const ot=.3,gg={hull:3,tread:2,gun:2,engine:2,core:1,ammo:1},_g={hull:1,tread:1.2,gun:.8,engine:1.5,core:1,ammo:1},vg={H:"hull",T:"tread",G:"gun",E:"engine",C:"core",A:"ammo"};function xg(n){return{size:n,cells:new Array(n.x*n.y*n.z).fill(null),rev:0}}function _a(n,e,t,i){return e>=0&&t>=0&&i>=0&&e<n.size.x&&t<n.size.y&&i<n.size.z}function va(n,e,t,i){return e+t*n.size.x+i*n.size.x*n.size.y}function Ct(n,e,t,i){return _a(n,e,t,i)?n.cells[va(n,e,t,i)]:null}function ta(n,e,t,i,r){_a(n,e,t,i)&&(n.cells[va(n,e,t,i)]=r,n.rev++)}function Yi(n,e){let t=0;for(const i of n.cells)i&&i.type===e&&t++;return t}function Kt(n){const e=n.length,t=Math.max(...n.map(s=>s.length)),i=Math.max(...n.map(s=>Math.max(...s.map(o=>o.length)))),r=xg({x:i,y:e,z:t});for(let s=0;s<e;s++)for(let o=0;o<t;o++){const a=n[s][o]??"";for(let l=0;l<i;l++){const c=vg[a[l]??"."];c&&(r.cells[va(r,l,s,o)]={type:c,hp:gg[c]})}}return r.rev=1,r}const na=()=>({throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1}),bc=[["THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT","THHHHHHT"],["HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHEEHHH","HHHEEHHH"],["........","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHCCHHH","HHHCCHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","HHHHHHHH","........"]],Mg=[[".GG.",".GG.","HGGH","HHHH","HHHH","HHHH"],["....","....",".HH.",".HH.",".HH.",".HH."]],Sg=-.09,Eg=1.05,Tg=1.4,yn=(n,e,t)=>n<e?e:n>t?t:n;function Ac(n,e){let t=0;for(const s of[n,e])for(const o of s.cells)o&&(t+=_g[o.type]);const i=90/Math.sqrt(t),r=Yi(n,"tread");return{mass:t,topSpeed:i,accel:i/2.5,turnRate:1.8*yn(r/24,.5,1.5),turretSlew:2.2}}function Rc(n,e,t,i){const r=Kt(bc),s=Kt(Mg);return{id:n,hull:r,turret:s,x:e,z:t,heading:i,speed:0,turretYaw:0,gunPitch:0,stats:Ac(r,s),turretPivot:{x:0,y:r.size.y*ot,z:.3},alive:!0,cooldown:0,spawnTick:0}}const yg=[["THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT","THHHHT"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHEEHH","HHEEHH"],["......","HHHHHH","HHHHHH","HHHHHH","HHCCHH","HHCCHH","HHHHHH","HHHHHH","HHHHHH","......"]],bg=[[".G.","HGH","HHH","HHH"],["...","...",".H.",".H."]],Ag=bc.map((n,e)=>e===0?n.map(()=>"TTHHHHTT"):n),Rg=[[".GG.",".GG.",".GG.","HGGH","HHHH","HHHH","HHHH"],["....","....","....",".HH.",".HH.",".HH.",".HH."]];function wg(n,e,t,i,r){const s=Kt(e==="slow"?yg:Ag),o=Kt(e==="slow"?bg:Rg),a=Ac(s,o),l=e==="slow"?.5:1.2;return a.topSpeed*=l,a.accel=a.topSpeed/2.5,a.turretSlew=e==="slow"?.785:2.094,{id:n,hull:s,turret:o,x:t,z:i,heading:r,speed:0,turretYaw:0,gunPitch:0,stats:a,turretPivot:{x:0,y:s.size.y*ot,z:.3},alive:!0,cooldown:0,spawnTick:0}}function wc(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading);return[n.x+e[0]*t+e[2]*i,e[1],n.z-e[0]*i+e[2]*t]}function xa(n,e){const t=Math.cos(n.heading),i=Math.sin(n.heading),r=e[0]-n.x,s=e[2]-n.z;return[r*t-s*i,e[1],r*i+s*t]}function Ma(n,e){const t=Math.cos(n.gunPitch),i=Math.sin(n.gunPitch),r=e[1]*t+e[2]*i,s=-e[1]*i+e[2]*t,o=Math.cos(n.turretYaw),a=Math.sin(n.turretYaw),l=e[0]*o+s*a,c=-e[0]*a+s*o;return wc(n,[l+n.turretPivot.x,r+n.turretPivot.y,c+n.turretPivot.z])}function Cc(n,e){const t=xa(n,e),i=t[0]-n.turretPivot.x,r=t[1]-n.turretPivot.y,s=t[2]-n.turretPivot.z,o=Math.cos(n.turretYaw),a=Math.sin(n.turretYaw),l=i*o-s*a,c=i*a+s*o,u=Math.cos(n.gunPitch),f=Math.sin(n.gunPitch);return[l,r*u-c*f,r*f+c*u]}function Pc(n){const e=n.heading+n.turretYaw,t=Math.cos(n.gunPitch);return[t*Math.sin(e),Math.sin(n.gunPitch),t*Math.cos(e)]}function Cg(n,e,t,i){const r=yn(e.throttle,-1,1)*n.stats.topSpeed,s=n.stats.accel*t;n.speed+=yn(r-n.speed,-s,s),n.heading+=yn(e.turn,-1,1)*n.stats.turnRate*t,n.x+=Math.sin(n.heading)*n.speed*t,n.z+=Math.cos(n.heading)*n.speed*t;const o=i-1.5;n.x=yn(n.x,-o,o),n.z=yn(n.z,-o,o),n.turretYaw+=yn(e.turretYaw,-1,1)*n.stats.turretSlew*t,n.gunPitch=yn(n.gunPitch+yn(e.gunPitch,-1,1)*Tg*t,Sg,Eg)}const Pg=[["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],Hg=[["HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH","HHHHHHHHH"],["",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",".HHHHHHH.",""],["","","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","..HHHHH..","",""],["","","","...HHH...","...HHH...","...HHH...","","",""],["","","","","....H....","","","",""]];function Ll(n){return Kt(n==="cube"?Pg:Hg)}const Hc=[{kind:"cube",x:24,z:30},{kind:"cube",x:-38,z:12},{kind:"cube",x:60,z:-45},{kind:"cube",x:-70,z:-60},{kind:"cube",x:10,z:-90},{kind:"cube",x:95,z:70},{kind:"cube",x:-110,z:85},{kind:"pyramid",x:-15,z:55},{kind:"pyramid",x:45,z:80},{kind:"pyramid",x:-60,z:-20},{kind:"pyramid",x:80,z:-10},{kind:"pyramid",x:-95,z:-105},{kind:"pyramid",x:130,z:20}],Dg=[["HHHHHHHHHH"],["HHHHHHHHHH"],["HHHHHHHHHH"]],Lg=[["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","H....H","H....H","H....H","H....H","HHHHHH"],["HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH","HHHHHH"]],Ug=[["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"],["HHH","HHH","HHH"]],Ig=[["HHHH","HAAH","HAAH","HHHH"],["HHHH","HAAH","HAAH","HHHH"]],Ng=[["HH.","HHH",".HH"],["HH.",".H.","..."]],Fg=[["HHH","HHH","HHH"],[".H.",".H.",".H."],[".H.",".H.",".H."],["GGG","GGG","GGG"],[".G.",".G.",".G."]],Og=[["H"],["H"],["H"],["G"]];function zg(n){switch(n){case"wall":return Kt(Dg);case"bunker":return Kt(Lg);case"tower":return Kt(Ug);case"depot":return Kt(Ig);case"rocks":return Kt(Ng);case"scan":return Kt(Fg);case"pylon":return Kt(Og);case"cube":return Ll("cube");case"pyramid":return Ll("pyramid")}}function rn(n,e,t,i){return{id:n,kind:e,grid:zg(e),x:t,z:i}}[rn(100,"wall",-20,-35),rn(101,"wall",35,55),rn(102,"bunker",-55,40),rn(103,"tower",70,-70),rn(104,"depot",15,-55),rn(105,"scan",-40,-80),rn(106,"pylon",-6,70),rn(107,"pylon",6,70),...Hc.map((n,e)=>rn(200+e,n.kind,n.x,n.z))];function Dc(n,e){const t=[];for(let i=0;i<n.size.z;i++)for(let r=0;r<n.size.y;r++)for(let s=0;s<n.size.x;s++){const o=Ct(n,s,r,i);if(!o)continue;(e==="hull"?o.type==="core":e==="turret"?o.type==="gun":r===0)&&t.push([s,r,i])}return t}const Bg=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function eo(n,e){if(e.length===0){const s=[];for(let o=0;o<n.size.z;o++)for(let a=0;a<n.size.y;a++)for(let l=0;l<n.size.x;l++)Ct(n,l,a,o)&&s.push([l,a,o]);for(const o of s)ta(n,o[0],o[1],o[2],null);return s}const t=new Set,i=[...e];for(const s of e)t.add(s.join(","));for(;i.length;){const s=i.pop();for(const o of Bg){const a=s[0]+o[0],l=s[1]+o[1],c=s[2]+o[2],u=`${a},${l},${c}`;t.has(u)||!Ct(n,a,l,c)||(t.add(u),i.push([a,l,c]))}}const r=[];for(let s=0;s<n.size.z;s++)for(let o=0;o<n.size.y;o++)for(let a=0;a<n.size.x;a++)Ct(n,a,o,s)&&!t.has(`${a},${o},${s}`)&&r.push([a,o,s]);for(const s of r)ta(n,s[0],s[1],s[2],null);return r}function ss(n,e,t,i){const r=ot,s=[e[0]/r+n.size.x/2,e[1]/r,e[2]/r+n.size.z/2],o=[t[0]/r,t[1]/r,t[2]/r];if(o[0]===0&&o[1]===0&&o[2]===0)return[];const a=[Math.floor(s[0]),Math.floor(s[1]),Math.floor(s[2])],l=[o[0]>0?1:o[0]<0?-1:0,o[1]>0?1:o[1]<0?-1:0,o[2]>0?1:o[2]<0?-1:0],c=[o[0]!==0?Math.abs(1/o[0]):1/0,o[1]!==0?Math.abs(1/o[1]):1/0,o[2]!==0?Math.abs(1/o[2]):1/0],u=[0,1,2].map(m=>o[m]===0?1/0:((l[m]>0?a[m]+1:a[m])-s[m])/o[m]),f=[];let d=0;for(let m=0;m<1024&&!(d>i);m++){_a(n,a[0],a[1],a[2])&&Ct(n,a[0],a[1],a[2])&&f.push({cell:[a[0],a[1],a[2]],t:d});const _=u[0]<=u[1]?u[0]<=u[2]?0:2:u[1]<=u[2]?1:2;d=u[_],a[_]+=l[_],u[_]+=c[_]}return f}const kg=120,Lc=.9,Gg=6,Vg=1,Ul=2.5,Wg=3,Uc=400,Xg=72,gs=36e3,Ic=7200,Yg=45,qg={hull:2,tread:2,gun:1.5,engine:2,core:3,ammo:1},Kg=30,$g=150,Zg=300,jg=180,Jg=120;function Kr(n,e){return e.alive&&n.tick-e.spawnTick>=Jg}function Nc(n,e,t){const i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],r=Math.hypot(i[0],i[1],i[2]);if(r<1e-6)return!0;const s=[i[0]/r,i[1]/r,i[2]/r];for(const o of n.structures){if(o.grid.cells.every(l=>!l))continue;const a=[e[0]-o.x,e[1],e[2]-o.z];if(ss(o.grid,a,s,r).length)return!1}return!0}function Qg(n,e,t,i,r){let s=i,o="max";if(t[1]<-1e-6){const a=-e[1]/t[1];a>=0&&a<s&&(s=a,o="ground")}for(const a of n.structures){if(a.grid.cells.every(u=>!u))continue;const l=[e[0]-a.x,e[1],e[2]-a.z],c=ss(a.grid,l,t,s);c.length&&c[0].t<s&&(s=c[0].t,o="grid")}for(const a of n.tanks)if(!(!a.alive||a.id===r))for(const l of["hull","turret"]){const c=l==="hull"?a.hull:a.turret,u=l==="hull"?xa:Cc,f=u(a,e),d=e_(u(a,[e[0]+t[0],e[1]+t[1],e[2]+t[2]]),f),m=ss(c,f,d,s);m.length&&m[0].t<s&&(s=m[0].t,o="grid")}return{pos:[e[0]+t[0]*s,e[1]+t[1]*s,e[2]+t[2]*s],hit:o}}const e_=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]];function Lr(n,e,t,i){let r=n.awareness.get(e.id);r||(r=new Map,n.awareness.set(e.id,r)),r.set(t.id,{x:t.x,z:t.z,heading:t.heading,tick:n.tick,source:i})}function t_(n){const e=n.tanks.filter(t=>t.alive);for(const t of e){let i=n.awareness.get(t.id);i||(i=new Map,n.awareness.set(t.id,i));for(const[r,s]of i){const o=s.source==="gunfire"||s.source==="ping"?jg:Zg;n.tick-s.tick>o&&i.delete(r)}if(!(n.stormUntil>n.tick))for(const r of n.tanks){if(r.id===t.id||!Kr(n,r))continue;const s=Math.hypot(r.x-t.x,r.z-t.z);s<=Kg?Lr(n,t,r,"proximity"):s<=$g&&Nc(n,[t.x,1.2,t.z],[r.x,1.2,r.z])&&Lr(n,t,r,"los")}}for(const t of n.events)if(t.kind==="fire"){const i=n.tanks.find(r=>r.id===t.owner);if(!i||!Kr(n,i))continue;for(const r of e)r.id!==i.id&&Lr(n,r,i,"gunfire")}else if(t.kind==="scanPing")for(const i of e)for(const r of n.tanks)r.id!==i.id&&Kr(n,r)&&Lr(n,i,r,"ping")}const Fc={slow:{speedMul:.5,slew:.785,thinkTicks:24,err:.105,cooldown:[2.5,3.5],range:[60,100],blockedPolicy:"reposition"},super:{speedMul:1.2,slew:2.094,thinkTicks:15,err:.035,cooldown:[1.4,2],range:[40,80],blockedPolicy:"shoot"}};function n_(n){return{kind:n,mode:"approach",targetId:null,aim:null,strafe:1,nextThink:0,blockedTicks:0,stuckTicks:0,lastShotTick:-9999,shotsAtContact:0,reposition:null,lastX:0,lastZ:0,debug:{intent:null,los:!1,err:0}}}const ti=(n,e,t)=>n<e?e:n>t?t:n,ia=(n,e)=>Math.atan2(e.x-n.x,e.z-n.z),to=n=>{for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n};function i_(n,e){const t=n.awareness.get(e.id);if(!t)return null;let i=null;for(const[r,s]of t){const o=n.tanks.find(a=>a.id===r);!o||!Kr(n,o)||(!i||s.tick>i.k.tick)&&(i={id:r,k:s})}return i}function r_(n,e,t){const i=Fc[e.kind],r={throttle:0,turn:0,turretYaw:0,gunPitch:0,fire:!1};if(n.tick<e.nextThink)return Il(n,e,t,r,i);e.nextThink=n.tick+i.thinkTicks;const s=i_(n,t);if(!s)return e.mode="approach",e.targetId=null,e.aim=null,e.debug.intent=null,r;const o=s.k;e.targetId!==s.id&&(e.shotsAtContact=0),e.targetId=s.id;const a=Math.hypot(o.x-t.x,o.z-t.z),l=Nc(n,[t.x,1.2,t.z],[o.x,1.2,o.z]);if(e.debug.los=l,e.blockedTicks=l?0:e.blockedTicks+i.thinkTicks,e.mode==="reposition"&&e.reposition)Math.hypot(e.reposition.x-t.x,e.reposition.z-t.z)<6&&(e.mode="approach",e.reposition=null);else if(!l&&e.blockedTicks>180){if(i.blockedPolicy==="reposition"){e.mode="reposition";const c=n.rng.next()*Math.PI*2;e.reposition={x:ti(o.x+Math.sin(c)*40,-190,190),z:ti(o.z+Math.cos(c)*40,-190,190)}}}else a>i.range[1]+20?e.mode="approach":a>=i.range[0]*.6&&(e.mode="engage");return e.aim={x:o.x,z:o.z},e.debug.intent=[o.x,1.2,o.z],Il(n,e,t,r,i)}function Il(n,e,t,i,r){const s=e.mode==="reposition"&&e.reposition?e.reposition:e.aim?s_(e,t,e.aim,r):null;if(s){const o=ia(t,s),a=to(o-t.heading);i.turn=ti(a*2,-1,1),i.throttle=Math.abs(a)>1.2?.2:e.mode==="engage"?.5:1;const l=Math.hypot(t.x-e.lastX,t.z-e.lastZ);if(i.throttle>0&&l<.02?e.stuckTicks+=r.thinkTicks:e.stuckTicks=0,e.lastX=t.x,e.lastZ=t.z,e.stuckTicks>90){e.stuckTicks=0,e.mode="reposition";const c=n.rng.next()*Math.PI*2;e.reposition={x:ti(t.x+Math.sin(c)*30,-190,190),z:ti(t.z+Math.cos(c)*30,-190,190)}}}if(e.aim){const o=to(ia(t,e.aim)-t.heading),a=to(o-t.turretYaw);i.turretYaw=ti(a*3,-1,1);const l=Math.hypot(e.aim.x-t.x,e.aim.z-t.z),c=Math.atan2(1.2-1.2,l);i.gunPitch=ti((c-t.gunPitch)*3,-1,1);const u=Math.abs(a)<.1,f=l<r.range[1]+40,d=e.debug.los||r.blockedPolicy==="shoot";if(u&&f&&d&&t.cooldown===0&&e.mode!=="reposition"){const m=1+l/100,_=e.shotsAtContact===0?2:1,v=r.err*m*_;e.debug.err=v;const p=(n.rng.next()-.5)*2*v;t.turretYaw+=p,i.fire=!0,e.shotsAtContact++,e.lastShotTick=n.tick}}return i}function s_(n,e,t,i){if(n.mode!=="engage")return t;const r=ia(t,e)+n.strafe*.5,s=(i.range[0]+i.range[1])/2;return{x:t.x+Math.sin(r)*s,z:t.z+Math.cos(r)*s}}function o_(){return{state:"dormant",untilTick:gs-Ic,nextBomb:0,bombsLeft:0}}function a_(n){const e=n.volcano;if(n.sky.volcano&&!(n.tick<gs-Ic))if(e.state==="dormant")e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"});else if(e.state==="rumble")n.tick>=e.untilTick&&(e.state="erupt",e.untilTick=n.tick+480,e.bombsLeft=2+Math.floor(n.rng.next()*4),e.nextBomb=n.tick+60,n.events.push({kind:"volcanoErupt"}));else if(e.state==="erupt"){if(e.bombsLeft>0&&n.tick>=e.nextBomb){const t=(n.rng.next()-.5)*300,i=(n.rng.next()-.5)*300;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:2.5,kind:"volcano"}),n.events.push({kind:"bombTelegraph",pos:[t,0,i]}),e.bombsLeft--,e.nextBomb=n.tick+90}n.tick>=e.untilTick&&(e.state="cooldown",e.untilTick=n.tick+1200)}else e.state==="cooldown"&&n.tick>=e.untilTick&&(e.state="rumble",e.untilTick=n.tick+600,n.events.push({kind:"volcanoRumble"}))}function l_(n,e,t){if(n.rng.next()<.5)n.lavaPools.push({x:e,z:t,radius:2.5,untilTick:n.tick+720});else{const i=Math.max(-190,Math.min(190,e+3.5)),r=Math.max(-190,Math.min(190,t+3.5));n.structures.push(rn(n.nextId++,"rocks",i,r))}}const qi={slow:100,missile:250,super:500,bomber:1e3,block:5},Oc=7200,c_=90,Nl=(n,e,t)=>n<e?e:n>t?t:n;function u_(n,e){return n<3e3?"slow":n<7e3?e<.4?"missile":"slow":e<.5?"super":e<.8?"missile":"slow"}function h_(n){if(n.phase==="play"){if(!(n.tanks.some(t=>t.id!==0&&t.alive)||n.missiles.some(t=>t.alive))&&n.tick>=n.nextSpawnTick){const t=u_(n.score,n.rng.next()),i=n.rng.next()*Math.PI*2,r=100+n.rng.next()*40,s=Nl(Math.sin(i)*r,-190,190),o=Nl(Math.cos(i)*r,-190,190);if(t==="missile"){const a=n.tanks[0],l=[a.x-s,0,a.z-o],c=Math.hypot(l[0],l[2])||1;n.missiles.push({id:n.nextId++,pos:[s,1.2,o],dir:[l[0]/c,0,l[2]/c],speed:13,age:0,alive:!0})}else{const a=wg(n.nextId++,t,s,o,Math.atan2(-s,-o));n.tanks.push(a),n.brains.set(a.id,n_(t)),t==="super"&&n.events.push({kind:"superSpawn",pos:[s,1,o]})}n.nextSpawnTick=n.tick+Math.max(240,900-Math.floor(n.score/20))}if(!n.bomber&&n.tick>=n.nextBomberTick){const t=n.rng.next()*Math.PI*2,i=Math.sin(t)*210,r=Math.cos(t)*210,s=-i+(n.rng.next()-.5)*60,o=-r+(n.rng.next()-.5)*60,a=[s-i,0,o-r],l=Math.hypot(a[0],a[2])||1;n.bomber={id:n.nextId++,pos:[i,15,r],dir:[a[0]/l,0,a[2]/l],speed:8,hp:3,alive:!0,nextBomb:n.tick+60},n.nextBomberTick=n.tick+Oc,n.events.push({kind:"bomberInbound",pos:[i,15,r]})}}f_(n),d_(n),p_(n)}function f_(n){const e=n.tanks[0];for(const t of n.missiles)if(t.alive){if(t.age++,t.age<60&&e.alive){const i=[e.x+Math.sin(e.heading)*e.speed*.5-t.pos[0],0,e.z+Math.cos(e.heading)*e.speed*.5-t.pos[2]],r=Math.hypot(i[0],i[2])||1;t.dir[0]+=(i[0]/r-t.dir[0])*.06,t.dir[2]+=(i[2]/r-t.dir[2])*.06;const s=Math.hypot(t.dir[0],t.dir[2])||1;t.dir[0]/=s,t.dir[2]/=s}t.pos[0]+=t.dir[0]*t.speed*(1/60),t.pos[2]+=t.dir[2]*t.speed*(1/60);for(const i of n.shells)if(Math.hypot(i.pos[0]-t.pos[0],i.pos[2]-t.pos[2])<1.2){t.alive=!1,i.alive=!1,n.events.push({kind:"kill",id:t.id,what:"missile",by:i.owner}),n.events.push({kind:"explosion",pos:[t.pos[0],t.pos[1],t.pos[2]],radius:1.5});break}if(t.alive){for(const i of n.tanks)if(i.alive&&Math.hypot(i.x-t.pos[0],i.z-t.pos[2])<2){t.alive=!1,n.pendingExplosions.push([t.pos[0],.5,t.pos[2]]);break}(Math.abs(t.pos[0])>210||Math.abs(t.pos[2])>210)&&(t.alive=!1)}}n.missiles=n.missiles.filter(t=>t.alive)}function d_(n){const e=n.bomber;if(!e||!e.alive){e&&!e.alive&&(n.bomber=null);return}if(e.pos[0]+=e.dir[0]*e.speed*(1/60),e.pos[2]+=e.dir[2]*e.speed*(1/60),n.tick>=e.nextBomb){let t=e.pos[0],i=e.pos[2];for(const r of n.tanks)if(r.alive&&Math.hypot(r.x-e.pos[0],r.z-e.pos[2])<4){t=r.x,i=r.z;break}n.telegraphs.push({x:t,z:i,impactTick:n.tick+c_,radius:2,kind:"bomb"}),n.events.push({kind:"bombTelegraph",pos:[t,0,i]}),e.nextBomb=n.tick+Yg}for(const t of n.shells)if(t.pos[1]>10&&Math.hypot(t.pos[0]-e.pos[0],t.pos[2]-e.pos[2])<2.5){e.hp--,t.alive=!1,e.hp<=0&&(e.alive=!1,n.events.push({kind:"kill",id:e.id,what:"bomber",by:t.owner}),n.events.push({kind:"explosion",pos:[e.pos[0],e.pos[1],e.pos[2]],radius:3}));break}(Math.abs(e.pos[0])>220||Math.abs(e.pos[2])>220)&&(e.alive=!1),e.alive||(n.bomber=null)}function p_(n){const e=n.telegraphs.filter(t=>n.tick>=t.impactTick);if(e.length){n.telegraphs=n.telegraphs.filter(t=>n.tick<t.impactTick);for(const t of e)n.pendingExplosions.push([t.x,.5,t.z]),(t.kind==="volcano"||t.kind==="meteor")&&l_(n,t.x,t.z)}}function Sa(n,e){const t=n.structures.find(r=>r.id===e.pylonA),i=n.structures.find(r=>r.id===e.pylonB);return!!t&&!!i&&t.grid.cells.some(r=>r)&&i.grid.cells.some(r=>r)}function m_(n,e,t,i){if(e[1]>n.height||e[1]+t[1]*i<0)return null;const r=n.bx-n.ax,s=n.bz-n.az,o=t[0]*s-t[2]*r;if(Math.abs(o)<1e-9)return null;const a=n.ax-e[0],l=n.az-e[2],c=(a*s-l*r)/o,u=(a*t[2]-l*t[0])/o;return c<0||c>i||u<0||u>1?null:c}function g_(n,e,t,i){const r=n.bx-n.ax,s=n.bz-n.az,o=r*r+s*s;let a=((e-n.ax)*r+(t-n.az)*s)/o;a=Math.max(0,Math.min(1,a));const l=n.ax+r*a,c=n.az+s*a,u=e-l,f=t-c,d=Math.hypot(u,f);if(d>=i||d<1e-9)return null;const m=(i-d)/d;return{x:u*m,z:f*m}}const Ur=n=>Hc.filter(e=>!n||n(e)).map(e=>({kind:e.kind,x:e.x,z:e.z})),Ir=(n,e,t,i,r,s,o)=>({id:n,ax:e,az:t,bx:i,bz:r,pylonA:s,pylonB:o,height:2.4}),zc={classic:{id:"classic",label:"CLASSIC",placements:[{kind:"wall",x:-20,z:-35},{kind:"wall",x:35,z:55},{kind:"bunker",x:-55,z:40},{kind:"tower",x:70,z:-70},{kind:"depot",x:15,z:-55},{kind:"scan",x:-40,z:-80},{kind:"pylon",x:-6,z:70},{kind:"pylon",x:6,z:70},...Ur()],fences:[Ir(300,-6,70,6,70,106,107)],sky:{storm:!1,meteors:!1,volcano:!0}},outpost:{id:"outpost",label:"OUTPOST",placements:[{kind:"wall",x:-30,z:-20},{kind:"wall",x:30,z:-20},{kind:"wall",x:-30,z:20},{kind:"wall",x:30,z:20},{kind:"bunker",x:0,z:-45},{kind:"bunker",x:0,z:45},{kind:"depot",x:-45,z:0},{kind:"depot",x:45,z:0},{kind:"tower",x:-60,z:-60},{kind:"tower",x:60,z:60},{kind:"scan",x:0,z:0},{kind:"pylon",x:-12,z:70},{kind:"pylon",x:12,z:70},...Ur(n=>Math.abs(n.x)>80||Math.abs(n.z)>80)],fences:[Ir(300,-12,70,12,70,111,112)],sky:{storm:!1,meteors:!1,volcano:!0}},ruins:{id:"ruins",label:"RUINS",placements:[{kind:"wall",x:-15,z:-15},{kind:"wall",x:15,z:-15},{kind:"wall",x:-15,z:15},{kind:"wall",x:15,z:15},{kind:"bunker",x:-40,z:-40},{kind:"bunker",x:40,z:-40},{kind:"bunker",x:-40,z:40},{kind:"bunker",x:40,z:40},{kind:"tower",x:0,z:-60},{kind:"tower",x:0,z:60},{kind:"tower",x:-60,z:0},{kind:"tower",x:60,z:0},{kind:"depot",x:-70,z:-70},{kind:"depot",x:70,z:70},{kind:"scan",x:-80,z:20},...Ur(n=>Math.abs(n.x)>90||Math.abs(n.z)>90)],fences:[],sky:{storm:!1,meteors:!1,volcano:!0}},stormfield:{id:"stormfield",label:"STORMFIELD",placements:[{kind:"rocks",x:-20,z:-20},{kind:"rocks",x:25,z:10},{kind:"rocks",x:-10,z:40},{kind:"rocks",x:50,z:-40},{kind:"pylon",x:-20,z:60},{kind:"pylon",x:20,z:60},{kind:"pylon",x:-60,z:-30},{kind:"pylon",x:-60,z:10},{kind:"scan",x:70,z:30},...Ur(n=>n.kind==="pyramid")],fences:[Ir(300,-20,60,20,60,104,105),Ir(301,-60,-30,-60,10,106,107)],sky:{storm:!0,meteors:!0,volcano:!0}}},__=["classic","outpost","ruins","stormfield"],v_=420,x_=9e3;function M_(n){const e=n.sky;if(e.storm&&n.tick>=n.nextStormTick&&n.stormUntil<=n.tick&&(n.stormUntil=n.tick+v_,n.nextStormTick=n.tick+24e3+Math.floor(n.rng.next()*12e3),n.events.push({kind:"ionStorm"})),e.meteors&&n.tick>=n.nextMeteorTick){const t=(n.rng.next()-.5)*300,i=(n.rng.next()-.5)*300;n.telegraphs.push({x:t,z:i,impactTick:n.tick+90,radius:2,kind:"meteor"}),n.events.push({kind:"meteorInbound",pos:[t,0,i]}),n.nextMeteorTick=n.tick+x_+Math.floor(n.rng.next()*3e3)}}const S_=60,Bn=1/S_;function E_(n,e="classic"){const t=zc[e];return{seed:n,tick:0,rng:mg(n),arenaHalf:200,tanks:[Rc(0,0,0,0)],structures:t.placements.map((i,r)=>rn(100+r,i.kind,i.x,i.z)),shells:[],chunks:[],rubble:[],rubbleRev:0,events:[],pendingExplosions:[],nextId:1,awareness:new Map,brains:new Map,missiles:[],bomber:null,telegraphs:[],fences:t.fences.map(i=>({...i})),sky:t.sky,nextStormTick:15e3,nextMeteorTick:6e3,volcano:o_(),lavaPools:[],stormUntil:0,score:0,lives:3,phase:"play",nextSpawnTick:120,nextBomberTick:Oc,respawnTick:0,nextLifeAt:1e4,lastHitBy:new Map}}function Ea(n){const e=n.structures.map(t=>({g:t.grid,structure:t}));for(const t of n.tanks)t.alive&&e.push({g:t.hull,tank:t,part:"hull"},{g:t.turret,tank:t,part:"turret"});return e}function T_(n,e){return[(e[0]-n.size.x/2+.5)*ot,(e[1]+.5)*ot,(e[2]-n.size.z/2+.5)*ot]}function _s(n,e){const t=T_(n.g,e);return n.structure?[n.structure.x+t[0],t[1],n.structure.z+t[2]]:n.part==="turret"?Ma(n.tank,t):wc(n.tank,t)}const $r=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Bc=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],ra=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],y_=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]);function Ta(n,e,t,i,r){const s=Ct(e.g,t[0],t[1],t[2]);if(!s)return;const o=_s(e,t);ta(e.g,t[0],t[1],t[2],null),i.set(e.g,e),n.events.push({kind:"blockDestroyed",pos:o,by:r}),s.type==="ammo"&&n.pendingExplosions.push(o);for(const a of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const l=[t[0]+a[0],t[1]+a[1],t[2]+a[2]],c=Ct(e.g,l[0],l[1],l[2]);c&&(c.hp-=Vg,i.set(e.g,e),c.hp<=0&&Ta(n,e,l,i,r))}}function os(n,e,t,i,r,s){const o=Ct(e.g,t[0],t[1],t[2]);o&&(o.hp-=i,r.set(e.g,e),o.hp<=0&&Ta(n,e,t,r,s))}function b_(n,e){const t=kg*Bn,i=Ea(n);for(const r of n.shells){if(!r.alive)continue;let s=1/0;for(const a of n.fences){if(!Sa(n,a))continue;const l=m_(a,r.pos,r.dir,t);l!==null&&l<s&&(s=l)}if(s!==1/0){r.pos=$r(r.pos,ra(r.dir,s)),r.alive=!1,n.events.push({kind:"shellImpact",pos:[...r.pos]});continue}const o=[];for(const a of i){if(a.tank&&a.tank.id===r.owner)continue;let l,c;if(a.structure)l=[r.pos[0]-a.structure.x,r.pos[1],r.pos[2]-a.structure.z],c=r.dir;else{const u=a.part==="turret"?Cc:xa;l=u(a.tank,r.pos),c=Bc(u(a.tank,$r(r.pos,r.dir)),l)}for(const u of ss(a.g,l,c,t))o.push({t:u.t,ctx:a,cell:u.cell})}o.sort((a,l)=>a.t-l.t);for(const a of o){if(!r.alive)break;const l=Ct(a.ctx.g,a.cell[0],a.cell[1],a.cell[2]);if(!l)continue;const c=_s(a.ctx,a.cell);a.ctx.tank&&n.lastHitBy.set(a.ctx.tank.id,r.owner);const u=qg[l.type];if(r.budget<u){os(n,a.ctx,a.cell,1,e,r.owner),r.alive=!1,n.events.push({kind:"shellImpact",pos:c});break}r.budget-=u,Ta(n,a.ctx,a.cell,e,r.owner)}r.alive&&(r.pos=$r(r.pos,ra(r.dir,t)),r.pos[1]<0?(r.alive=!1,n.events.push({kind:"shellImpact",pos:[r.pos[0],0,r.pos[2]]})):(Math.abs(r.pos[0])>n.arenaHalf||Math.abs(r.pos[2])>n.arenaHalf)&&(r.alive=!1))}n.shells=n.shells.filter(r=>r.alive)}function A_(n,e){const t=Ea(n);for(;n.pendingExplosions.length;){const i=n.pendingExplosions.shift();n.events.push({kind:"explosion",pos:i,radius:Ul});for(const r of t)for(let s=0;s<r.g.size.z;s++)for(let o=0;o<r.g.size.y;o++)for(let a=0;a<r.g.size.x;a++){if(!Ct(r.g,a,o,s))continue;const l=[a,o,s];y_(_s(r,l),i)<=Ul&&os(n,r,l,Wg,e,null)}}}function Fl(n){const e=new Map;for(let t=0;t<n.size.z;t++)for(let i=0;i<n.size.y;i++)for(let r=0;r<n.size.x;r++){const s=Ct(n,r,i,t);s&&e.set(`${r},${i},${t}`,s.type)}return e}function no(n,e,t,i){if(!t.length)return;const r=t.map(a=>_s(e,a)),s=[0,0,0];for(const a of r)s[0]+=a[0]/r.length,s[1]+=a[1]/r.length,s[2]+=a[2]/r.length;const o={id:n.nextId++,pos:s,vel:[(n.rng.next()-.5)*3,2+n.rng.next()*2,(n.rng.next()-.5)*3],angle:0,spin:(n.rng.next()-.5)*6,settleTick:n.tick+Xg,cells:t.map((a,l)=>({off:Bc(r[l],s),type:i.get(a.join(","))??"hull"}))};n.chunks.push(o),n.events.push({kind:"chunkDetached",id:o.id})}function R_(n,e){const t=new Set,i=Ea(n);for(const[r,s]of e){if(t.has(r))continue;t.add(r);const o=s.structure?"structure":s.part,a=Fl(r),l=Dc(r,o);if(l.length===0){if(no(n,s,eo(r,[]),a),s.tank&&s.part==="hull"){s.tank.alive=!1;const c=n.lastHitBy.get(s.tank.id)??null;if(n.events.push({kind:"tankKilled",id:s.tank.id,pos:[s.tank.x,1,s.tank.z],by:c}),s.tank.id===0)n.lives--,n.lives<=0?n.phase="over":n.respawnTick=n.tick+180;else if(c===0){const f=n.brains.get(s.tank.id);n.score+=f?.kind==="super"?qi.super:qi.slow}const u=i.find(f=>f.tank===s.tank&&f.part==="turret");u&&!t.has(u.g)&&(t.add(u.g),no(n,u,eo(u.g,[]),Fl(u.g)))}}else{const c=eo(r,l);c.length&&no(n,s,c,a)}}}function w_(n){const e=[];for(const t of n.chunks)t.vel[1]-=9.8*Bn,t.pos=$r(t.pos,ra(t.vel,Bn)),t.angle+=t.spin*Bn,(t.pos[1]<=.2||n.tick>=t.settleTick)&&e.push(t);if(e.length){n.chunks=n.chunks.filter(t=>!e.includes(t));for(const t of e)for(const i of t.cells)n.rubble.push({x:t.pos[0]+i.off[0],z:t.pos[2]+i.off[2],type:i.type,born:n.tick});for(;n.rubble.length>Uc;)n.rubble.shift();n.rubbleRev++,n.events.push({kind:"rubbleChanged"})}}function kc(n,e=[]){if(n.events=[],n.phase==="over")return;n.tick+=1;const t=new Map;if(n.phase==="play"&&!n.tanks[0].alive&&n.respawnTick>0&&n.tick>=n.respawnTick){const i=n.rng.next()*Math.PI*2,r=Rc(0,Math.sin(i)*120,Math.cos(i)*120,n.rng.next()*Math.PI*2);r.spawnTick=n.tick,n.tanks[0]=r,n.respawnTick=0}for(let i=0;i<n.tanks.length;i++){const r=n.tanks[i];if(!r.alive)continue;const s=n.brains.get(r.id),o=i===0?e[0]??na():s?r_(n,s,r):na();if(Cg(r,o,Bn,n.arenaHalf),r.cooldown=Math.max(0,r.cooldown-Bn),o.fire&&r.cooldown===0&&Dc(r.turret,"turret").length>0){const a=Pc(r),l=Ma(r,[0,ot,r.turret.size.z/2*ot+.15]);n.shells.push({id:n.nextId++,owner:r.id,pos:l,dir:a,budget:Gg,alive:!0});const c=n.brains.get(r.id)?.kind,u=c?Fc[c].cooldown:null;r.cooldown=u?u[0]+n.rng.next()*(u[1]-u[0]):Lc,n.events.push({kind:"fire",pos:l,dir:a,owner:r.id})}}if(b_(n,t),h_(n),a_(n),M_(n),n.tick%600===0){for(const i of n.structures)if(i.kind==="scan"&&i.grid.cells.some(r=>r)){n.events.push({kind:"scanPing"});break}}A_(n,t);for(const i of n.tanks){if(!i.alive||Math.abs(i.speed)<.5)continue;const r=i.hull.size.z*ot/2;for(const s of n.structures){const o=s.grid.size.x*ot/2+r,a=s.grid.size.z*ot/2+r;if(Math.abs(i.x-s.x)>o||Math.abs(i.z-s.z)>a)continue;const l=i.x-s.x,c=i.z-s.z,u=Math.max(0,Math.floor((l-r)/ot+s.grid.size.x/2)),f=Math.min(s.grid.size.x-1,Math.ceil((l+r)/ot+s.grid.size.x/2)),d=Math.max(0,Math.floor((c-r)/ot+s.grid.size.z/2)),m=Math.min(s.grid.size.z-1,Math.ceil((c+r)/ot+s.grid.size.z/2));let _=!1;for(let v=d;v<=m;v++)for(let p=u;p<=f;p++)for(let h=0;h<s.grid.size.y;h++){if(!Ct(s.grid,p,h,v))continue;const b=s.x+(p-s.grid.size.x/2+.5)*ot,y=s.z+(v-s.grid.size.z/2+.5)*ot;Math.hypot(b-i.x,y-i.z)<r+.2&&(os(n,{g:s.grid,structure:s},[p,h,v],3,t,i.id),_=!0)}_&&(i.speed*=.85)}for(const s of n.fences){if(!Sa(n,s))continue;const o=g_(s,i.x,i.z,i.hull.size.z*ot/2);o&&(i.x+=o.x,i.z+=o.z,i.speed*=.5)}}if(n.tick%30===0){for(const i of n.lavaPools)if(!(n.tick>=i.untilTick))for(const r of n.tanks){if(!r.alive||Math.hypot(r.x-i.x,r.z-i.z)>i.radius)continue;const s=[];for(let o=0;o<r.hull.size.z;o++)for(let a=0;a<r.hull.size.y;a++)for(let l=0;l<r.hull.size.x;l++)Ct(r.hull,l,a,o)&&s.push([l,a,o]);if(s.length){const o=s[Math.floor(n.rng.next()*s.length)];os(n,{g:r.hull,tank:r,part:"hull"},o,1,t,null)}}n.lavaPools=n.lavaPools.filter(i=>n.tick<i.untilTick)}R_(n,t),w_(n),t_(n);for(const i of n.events)i.kind==="blockDestroyed"&&i.by===0?n.score+=qi.block:i.kind==="kill"&&i.by===0&&(n.score+=i.what==="bomber"?qi.bomber:qi.missile);for(;n.score>=n.nextLifeAt;)n.lives++,n.nextLifeAt+=1e4;for(;n.rubble.length>Uc;)n.rubble.shift(),n.rubbleRev++;n.phase==="play"&&n.tick>=gs&&(n.phase="over",n.events.push({kind:"matchEnd"}))}const C_=[{d:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{d:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{d:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{d:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{d:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{d:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];function Gc(n){const e=[],t=new Map,i=ot,r=f=>(f-n.size.x/2)*i,s=f=>f*i,o=f=>(f-n.size.z/2)*i,a=(f,d,m,_)=>[r(d+f[0]),s(m+f[1]),o(_+f[2])];for(let f=0;f<n.size.z;f++)for(let d=0;d<n.size.y;d++)for(let m=0;m<n.size.x;m++)if(Ct(n,m,d,f))for(const{d:_,corners:v}of C_){if(Ct(n,m+_[0],d+_[1],f+_[2]))continue;const p=v.map(h=>a(h,m,d,f));for(const h of[0,1,2,0,2,3])e.push(...p[h]);for(let h=0;h<4;h++){const b=p[h],y=p[(h+1)%4],S=b.map(A=>A.toFixed(4)).join(","),C=y.map(A=>A.toFixed(4)).join(","),w=S<C?`${S}|${C}`:`${C}|${S}`;t.has(w)||t.set(w,[...b,...y])}}const l=new Qe;l.setAttribute("position",new at(e,3));const c=[];for(const f of t.values())c.push(...f);const u=new Qe;return u.setAttribute("position",new at(c,3)),{faces:l,edges:u}}const Dt=38,io=200;function P_(){const n=document.createElement("canvas");n.id="hud",document.body.append(n);const e=n.getContext("2d"),t=document.createElement("div");t.id="alerts",document.body.append(t);const i=()=>{n.width=window.innerWidth,n.height=window.innerHeight};i(),window.addEventListener("resize",i);function r(o){const a=document.createElement("div");for(a.className="alert",a.textContent=o,t.append(a),setTimeout(()=>a.remove(),4200);t.children.length>3;)t.firstChild?.remove()}function s(o){const a=n.width,l=n.height;e.clearRect(0,0,a,l);const c=o.palette,u=c.hud;e.fillStyle=u+"14",e.fillRect(0,0,a,90),e.strokeStyle=u+"88",e.beginPath(),e.moveTo(0,90.5),e.lineTo(a,90.5),e.stroke();const f=a/2,d=45;e.strokeStyle=u+"aa",e.beginPath(),e.arc(f,d,Dt,0,Math.PI*2),e.stroke(),e.strokeStyle=u+"44",e.beginPath(),e.arc(f,d,Dt*30/io,0,Math.PI*2),e.stroke();const m=o.tick*.06;if(e.strokeStyle=u+"55",e.beginPath(),e.moveTo(f,d),e.lineTo(f+Math.sin(m)*Dt,d-Math.cos(m)*Dt),e.stroke(),e.strokeStyle=c.worldCss,e.beginPath(),e.moveTo(f,d-6),e.lineTo(f-4,d+4),e.lineTo(f+4,d+4),e.closePath(),e.stroke(),e.strokeStyle=u,e.beginPath(),e.moveTo(f,d),e.lineTo(f+Math.sin(o.turretYaw)*11,d-Math.cos(o.turretYaw)*11),e.stroke(),o.storm){e.fillStyle=u+"66";for(let h=0;h<60;h++){const b=Math.random()*Math.PI*2,y=Math.random()*Dt;e.fillRect(f+Math.sin(b)*y,d-Math.cos(b)*y,1.5,1.5)}}else if(o.known){const h=Math.cos(o.heading),b=Math.sin(o.heading);for(const[y,S]of o.known){const C=S.x-o.x,w=S.z-o.z;let A=(C*h-w*b)*(Dt/io),U=-(C*b+w*h)*(Dt/io);const E=Math.hypot(A,U);E>Dt-2&&(A*=(Dt-2)/E,U*=(Dt-2)/E);const M=o.tick-S.tick,H=S.source==="gunfire"||S.source==="ping"?Math.max(0,1-M/180):1;e.fillStyle=c.worldCss+Math.floor(H*255).toString(16).padStart(2,"0");const O=o.superIds.has(y)?3:2;e.beginPath(),e.arc(f+A,d+U,O,0,Math.PI*2),e.fill();const G=S.heading-o.heading;e.strokeStyle=c.worldCss+Math.floor(H*200).toString(16).padStart(2,"0"),e.beginPath(),e.moveTo(f+A,d+U),e.lineTo(f+A+Math.sin(G)*5,d+U-Math.cos(G)*5),e.stroke()}o.bomberBlip&&(e.fillStyle=u,e.beginPath(),e.moveTo(f,d-Dt+4),e.lineTo(f-3,d-Dt+10),e.lineTo(f+3,d-Dt+10),e.closePath(),e.fill())}e.font="13px monospace",e.fillStyle=u,e.textAlign="left",e.fillText(`SCORE ${String(o.score).padStart(6,"0")}`,12,32),e.fillText(`LIVES ${o.lives}`,12,52);const _=Math.floor(o.secondsLeft/60),v=Math.floor(o.secondsLeft%60);if(e.textAlign="right",e.fillText(`T-${String(_).padStart(2,"0")}:${String(v).padStart(2,"0")}`,f-Dt-14,32),e.textAlign="left",o.alive){const h=a/2,b=l/2;e.strokeStyle=c.worldCss+"cc",e.beginPath(),e.moveTo(h-10,b),e.lineTo(h-4,b),e.moveTo(h+4,b),e.lineTo(h+10,b),e.moveTo(h,b-10),e.lineTo(h,b-4),e.moveTo(h,b+4),e.lineTo(h,b+10),e.stroke(),e.strokeStyle=u+"aa",e.beginPath(),e.arc(h,b,15,-Math.PI/2,-Math.PI/2+Math.PI*2*o.cooldownFrac),e.stroke();const y=b-o.elevation*40;e.strokeStyle=c.worldCss+"88",e.beginPath(),e.moveTo(h-6,y),e.lineTo(h+6,y),e.stroke()}const p=[["CORE",o.status.core],["TRD",o.status.tread],["GUN",o.status.gun],["ENG",o.status.engine]];if(e.font="10px monospace",p.forEach(([h,b],y)=>{const S=l-64+y*14;e.fillStyle=u+"cc",e.fillText(h,12,S+4),e.fillStyle=c.worldCss+"cc";for(let C=0;C<Math.min(b,12);C++)e.fillRect(44+C*7,S-3,5,5)}),e.font="11px monospace",e.textAlign="right",o.killfeed.slice(-4).forEach((h,b)=>{const y=o.now-h.born,S=Math.max(0,1-y/6e3);e.fillStyle=u+Math.floor(S*220).toString(16).padStart(2,"0"),e.fillText(h.text,a-12,l-60+b*14)}),e.textAlign="left",o.hitFlash&&o.now-o.hitFlash.born<450){const h=o.hitFlash.angle,b=1-(o.now-o.hitFlash.born)/450,y=Math.min(a,l)/2-40,S=a/2+Math.sin(h)*y,C=l/2-Math.cos(h)*y;e.fillStyle=u+Math.floor(b*255).toString(16).padStart(2,"0"),e.beginPath(),e.moveTo(S+Math.sin(h)*12,C-Math.cos(h)*12),e.lineTo(S+Math.sin(h+2.5)*8,C-Math.cos(h+2.5)*8),e.lineTo(S+Math.sin(h-2.5)*8,C-Math.cos(h-2.5)*8),e.closePath(),e.fill()}}return{canvas:n,draw:s,alert:r}}const Yt=new Set,H_=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"]);function D_(n){H_.has(n.code)&&(n.preventDefault(),Yt.add(n.code))}function L_(n){Yt.delete(n.code)}function U_(){Yt.clear()}function I_(){window.addEventListener("keydown",D_),window.addEventListener("keyup",L_),window.addEventListener("blur",U_)}function N_(){const n=na();n.throttle=(Yt.has("KeyW")?1:0)-(Yt.has("KeyS")?1:0),n.turn=(Yt.has("KeyA")?1:0)-(Yt.has("KeyD")?1:0),n.turretYaw=(Yt.has("ArrowLeft")?1:0)-(Yt.has("ArrowRight")?1:0),n.gunPitch=(Yt.has("ArrowUp")?1:0)-(Yt.has("ArrowDown")?1:0),n.fire=Yt.has("Space");const e=navigator.getGamepads?navigator.getGamepads():[];for(const t of e){if(!t)continue;const i=c=>Math.abs(c)>.15?c:0,r=i(t.axes[0]??0),s=i(t.axes[1]??0),o=i(t.axes[2]??0),a=i(t.axes[3]??0),l=!!t.buttons[0]?.pressed||!!t.buttons[7]?.pressed;if(r||s||o||a||l){n.throttle=-s,n.turn=-r,n.turretYaw=-o,n.gunPitch=-a,n.fire=l;break}}return n}const Pn=[{id:"green",label:"P1 green",world:3800939,worldCss:"#39ff6b",dim:1931834,grid:668441,gridCenter:1002788,rubble:1931834,moon:10485696,hud:"#ff4433",hazard:[1,.35,.1]},{id:"amber",label:"P3 amber",world:16756736,worldCss:"#ffb000",dim:9064960,grid:3350528,gridCenter:5058560,rubble:9064960,moon:16769184,hud:"#ffcc55",hazard:[1,.25,.1]},{id:"cyan",label:"P4 cyan",world:3531007,worldCss:"#35e0ff",dim:1927802,grid:665651,gridCenter:997965,rubble:1927802,moon:10547455,hud:"#77ffff",hazard:[1,.35,.1]},{id:"bw",label:"B&W",world:16777215,worldCss:"#ffffff",dim:10066329,grid:2236962,gridCenter:3355443,rubble:10066329,moon:16777215,hud:"#ffffff",hazard:[1,1,1]}];class F_{object;max;pos;col;p;cursor=0;constructor(e=1024,t=!0){this.max=e,this.pos=new Float32Array(e*6),this.col=new Float32Array(e*6),this.p=new Float32Array(e*15);const i=new Qe;i.setAttribute("position",new wt(this.pos,3).setUsage(Qi)),i.setAttribute("color",new wt(this.col,3).setUsage(Qi));const r=new Jt({vertexColors:!0,blending:Jr,depthWrite:!1,transparent:!0,fog:t});this.object=new jt(i,r),this.object.frustumCulled=!1}spawn(e,t,i,r,s,o,a,l,c,u,f=.5,d=0,m=0,_=0){const v=this.cursor++%this.max*15,p=this.p;p[v]=e,p[v+1]=t,p[v+2]=i,p[v+3]=r,p[v+4]=s,p[v+5]=o,p[v+6]=a,p[v+7]=a,p[v+8]=f,p[v+9]=l,p[v+10]=c,p[v+11]=u,p[v+12]=d,p[v+13]=m,p[v+14]=_}update(e){const t=this.p;for(let i=0;i<this.max;i++){const r=i*15,s=i*6;if(t[r+6]<=0){this.pos[s]=this.pos[s+3]=0,this.pos[s+1]=this.pos[s+4]=-1e3,this.pos[s+2]=this.pos[s+5]=0,this.col[s]=this.col[s+1]=this.col[s+2]=0,this.col[s+3]=this.col[s+4]=this.col[s+5]=0;continue}t[r+6]-=e,t[r]+=t[r+3]*e,t[r+1]+=t[r+4]*e,t[r+2]+=t[r+5]*e;let o=t[r+12],a=t[r+13],l=t[r+14];o===0&&a===0&&l===0&&(o=t[r+3],a=t[r+4],l=t[r+5]);const c=Math.hypot(o,a,l)||1,u=t[r+8]/c;this.pos[s]=t[r],this.pos[s+1]=t[r+1],this.pos[s+2]=t[r+2],this.pos[s+3]=t[r]-o*u,this.pos[s+4]=t[r+1]-a*u,this.pos[s+5]=t[r+2]-l*u;const f=Math.max(t[r+6],0)/t[r+7];this.col[s]=this.col[s+3]=t[r+9]*f,this.col[s+1]=this.col[s+4]=t[r+10]*f,this.col[s+2]=this.col[s+5]=t[r+11]*f}this.object.geometry.attributes.position.needsUpdate=!0,this.object.geometry.attributes.color.needsUpdate=!0}}const Zr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ar{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const O_=new xc(-1,1,1,-1,0,1);class z_ extends Qe{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const B_=new z_;class Vc{constructor(e){this._mesh=new Zt(B_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,O_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wc extends ar{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ns.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ol extends ar{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class k_ extends ar{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class G_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Le);this._width=i.width,this._height=i.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wc(Zr),this.copyPass.material.blending=An,this.clock=new Ch}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ol!==void 0&&(o instanceof Ol?i=!0:o instanceof k_&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class V_ extends ar{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const W_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Di extends ar{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(s,o,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Gt(s,o,{type:Rn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Gt(s,o,{type:Rn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=W_;this.highPassUniforms=ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ns.clone(Zr.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader,blending:Jr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new sr,this._fsQuad=new Vc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Di.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Di.BlurDirectionX=new Le(1,0);Di.BlurDirectionY=new Le(0,1);const X_={uniforms:{tDiffuse:{value:null},tPrev:{value:null},uTime:{value:0},uRes:{value:new Le(1,1)},uScan:{value:.2},uVignette:{value:.4},uBarrel:{value:.04},uPersist:{value:.4},uRoll:{value:.08},uSafe:{value:0}},vertexShader:`
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
  `};function Y_(n,e,t){const i=n.getDrawingBufferSize(new Le),r=new Gt(i.x,i.y,{type:ln}),s=new G_(n,r);s.addPass(new V_(e,t));const o=new Di(new Le(i.x,i.y),.9,.5,0);s.addPass(o);const a=new Wc(X_);a.uniforms.uRes.value.set(i.x,i.y),s.addPass(a);let l=new al(i.x,i.y);return a.uniforms.tPrev.value=l,{composer:s,bloom:o,crt:a,render(c){a.uniforms.uTime.value=c,s.render(),n.copyFramebufferToTexture(l)},resize(c,u){s.setSize(c,u);const f=n.getDrawingBufferSize(new Le);a.uniforms.uRes.value.set(f.x,f.y),l.dispose(),l=new al(f.x,f.y),a.uniforms.tPrev.value=l}}}const zl=1931834,Nr=Math.PI*2;function q_(n){const e=(w,A)=>new Ph(400,80,w,A),t=[];for(let w=0;w<256;w++){const A=w/256*Nr,U=14+22*Math.abs(Math.sin(A*3.1))+12*Math.abs(Math.sin(A*7.3+1.7))+6*Math.sin(A*13.7);t.push(Math.sin(A)*620,U,Math.cos(A)*620)}const r=new Qe;r.setAttribute("position",new at(t,3));const s=new Jt({color:zl,fog:!1});n.add(new ol(r,s));const o=.9,a=Math.sin(o)*620,l=Math.cos(o)*620,c=[[0,95],[22,64],[44,40],[64,24],[76,15]],u=10,f=[];for(const[w,A]of c)for(let U=0;U<u;U++){const E=U/u*Nr,M=(U+1)/u*Nr;f.push(a+Math.sin(E)*A,w,l+Math.cos(E)*A,a+Math.sin(M)*A,w,l+Math.cos(M)*A)}for(let w=0;w<u;w++){const A=w/u*Nr;for(let U=0;U<c.length-1;U++){const[E,M]=c[U],[H,O]=c[U+1];f.push(a+Math.sin(A)*M,E,l+Math.cos(A)*M,a+Math.sin(A)*O,H,l+Math.cos(A)*O)}}const d=new Qe;d.setAttribute("position",new at(f,3));const m=new Jt({color:zl,fog:!1});n.add(new jt(d,m));const _=new N(a,78,l),v=[],p=-350,h=210,b=-520,y=14;for(let w=0;w<=40;w++){const A=Math.PI*.25+w/40*Math.PI*1.5;v.push(p+Math.cos(A)*y,h+Math.sin(A)*y,b)}for(let w=40;w>=0;w--){const A=Math.PI*.25+w/40*Math.PI*1.5;v.push(p+6+Math.cos(A)*y*.92,h+Math.sin(A)*y*.92,b)}const S=new Qe;S.setAttribute("position",new at(v,3));const C=new Jt({color:10485696,fog:!1});return n.add(new ol(S,C)),{crater:_,mountainMat:s,volcanoMat:m,moonMat:C,makeGrid:e}}function K_(n){const e=[],t=[],i=ot;for(const o of n){const a=o.x-i/2,l=o.x+i/2,c=0,u=i,f=o.z-i/2,d=o.z+i/2,m=[[a,c,f],[l,c,f],[l,c,d],[a,c,d],[a,u,f],[l,u,f],[l,u,d],[a,u,d]],_=[[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,3,7,4]];for(const v of _){for(const p of[0,1,2,0,2,3])e.push(...m[v[p]]);for(let p=0;p<4;p++)t.push(...m[v[p]],...m[v[(p+1)%4]])}}const r=new Qe;r.setAttribute("position",new at(e,3));const s=new Qe;return s.setAttribute("position",new at(t,3)),{faces:r,edges:s}}function $_(n){const e=[],t=ot/2;for(const{off:r}of n){const[s,o,a]=r,l=[[s-t,o-t,a-t],[s+t,o-t,a-t],[s+t,o-t,a+t],[s-t,o-t,a+t],[s-t,o+t,a-t],[s+t,o+t,a-t],[s+t,o+t,a+t],[s-t,o+t,a+t]],c=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];for(const[u,f]of c)e.push(...l[u],...l[f])}const i=new Qe;return i.setAttribute("position",new at(e,3)),i}const ro={palette:0,bloom:.9,crt:.6,wireframe:!1,safe:!1,shake:!0,fov:60,res:1,map:"classic",volMaster:.8,volSfx:.8},Xc="vectorzone-settings";function Z_(){try{const n=localStorage.getItem(Xc);return n?{...ro,...JSON.parse(n)}:{...ro}}catch{return{...ro}}}function Yc(n){try{localStorage.setItem(Xc,JSON.stringify(n))}catch{}}function j_(n,e,t){const i=document.createElement("div");i.id="panel";const r=()=>{Yc(n),t(n)},s=(b,y)=>{const S=document.createElement("label");S.className="row";const C=document.createElement("span");C.textContent=b,S.append(C,y),i.append(S)},o=document.createElement("button"),a=()=>{o.textContent=e[n.palette%e.length]};a(),o.onclick=()=>{n.palette=(n.palette+1)%e.length,a(),r()},s("phosphor",o);const l=document.createElement("input");l.type="checkbox",l.checked=n.wireframe,l.onchange=()=>{n.wireframe=l.checked,r()},s("wireframe",l);const c=document.createElement("input");c.type="checkbox",c.checked=n.safe,c.onchange=()=>{n.safe=c.checked,r()},s("safe mode",c);const u=document.createElement("input");u.type="range",u.min="0",u.max="2",u.step="0.1",u.value=String(n.bloom),u.oninput=()=>{n.bloom=Number(u.value),r()},s("bloom",u);const f=document.createElement("input");f.type="range",f.min="0",f.max="1",f.step="0.1",f.value=String(n.crt),f.oninput=()=>{n.crt=Number(f.value),r()},s("crt",f);const d=document.createElement("input");d.type="checkbox",d.checked=n.shake,d.onchange=()=>{n.shake=d.checked,r()},s("shake",d);const m=document.createElement("input");m.type="range",m.min="50",m.max="90",m.step="5",m.value=String(n.fov),m.oninput=()=>{n.fov=Number(m.value),r()},s("fov",m);const _=document.createElement("input");_.type="range",_.min="0.5",_.max="1",_.step="0.25",_.value=String(n.res),_.oninput=()=>{n.res=Number(_.value),r()},s("res",_);const v=document.createElement("select");for(const b of __){const y=document.createElement("option");y.value=b,y.textContent=zc[b].label,v.append(y)}v.value=n.map,v.onchange=()=>{n.map=v.value,r()},s("map",v);const p=document.createElement("input");p.type="range",p.min="0",p.max="1",p.step="0.1",p.value=String(n.volMaster),p.oninput=()=>{n.volMaster=Number(p.value),r()},s("vol",p);const h=document.createElement("input");return h.type="range",h.min="0",h.max="1",h.step="0.1",h.value=String(n.volSfx),h.oninput=()=>{n.volSfx=Number(h.value),r()},s("sfx",h),i}const J_=3800939,St=new pg({antialias:!0});St.setPixelRatio(Math.min(window.devicePixelRatio,2));St.setSize(window.innerWidth,window.innerHeight);St.info.autoReset=!1;document.body.appendChild(St.domElement);const Je=new Eh;Je.background=new ze(0);Je.fog=new ma(0,60,260);const Mt=new $t(60,window.innerWidth/window.innerHeight,.1,2e3),sa=document.getElementById("stats"),qc=new sr({color:0,side:sn}),Ki=new Jt({color:J_}),si=Z_(),be=E_(11827170,si.map);let ye=be.tanks[0];function Ai(n){const e=Gc(n),t=new Zt(e.faces,qc),i=new jt(e.edges,Ki),r=new Wi;return r.add(t,i),{group:r,mesh:t,lines:i,rev:n.rev}}function Vi(n,e){if(n.rev===e.rev)return;const t=Gc(e);n.mesh.geometry.dispose(),n.lines.geometry.dispose(),n.mesh.geometry=t.faces,n.lines.geometry=t.edges,n.rev=e.rev,ya++}const Ti=Ai(ye.hull),fn=Ai(ye.turret);fn.group.position.set(ye.turretPivot.x,ye.turretPivot.y,ye.turretPivot.z);fn.group.rotation.order="YXZ";Ti.group.add(fn.group);Je.add(Ti.group);let ya=0;const oa=new Map;for(const n of be.structures){const e=Ai(n.grid);e.group.position.set(n.x,0,n.z),Je.add(e.group),oa.set(n.id,e)}const Kc=new sr({color:0,side:sn}),$c=new Jt({color:1931834});let as=new Zt(new Qe,Kc),ls=new jt(new Qe,$c);as.frustumCulled=!1;ls.frustumCulled=!1;Je.add(as,ls);let Bl=-1;const Fr=new Map,so=new Map,kl=new Jt({color:3800939,transparent:!0,opacity:.6});let nn=0;const Jn=new Float32Array(432),ba=new Qe;ba.setAttribute("position",new wt(Jn,3).setUsage(Qi));const Zc=new Jt({color:3531007,transparent:!0,opacity:.5,fog:!1}),vs=new jt(ba,Zc);vs.frustumCulled=!1;vs.visible=!1;Je.add(vs);let oo=0;const Or=new Map,zr=new Map;let En=null,cs=!1;window.addEventListener("keydown",n=>{n.code==="KeyX"&&(cs=!cs)});const tr=new Qe,jc=new Float32Array(4096);tr.setAttribute("position",new wt(jc,3).setUsage(Qi));tr.setDrawRange(0,0);const xs=new jt(tr,new Jt({color:16729139,transparent:!0,opacity:.7}));xs.frustumCulled=!1;xs.visible=!1;Je.add(xs);const Jc=new Jt({color:1931834,transparent:!0,opacity:.5}),mt=new Float32Array(18),Aa=new Qe;Aa.setAttribute("position",new wt(mt,3).setUsage(Qi));const us=new jt(Aa,Jc);us.frustumCulled=!1;Je.add(us);const un=P_();let Gl=-1e9,Vl=!1;const Br=[];let ao=null;const Qc="vectorzone-scores";function Q_(){try{return JSON.parse(localStorage.getItem(Qc)??"[]")}catch{return[]}}function e0(){const n=Q_();n.push({score:be.score,date:new Date().toISOString().slice(0,10)}),n.sort((s,o)=>o.score-s.score);const e=n.slice(0,5);try{localStorage.setItem(Qc,JSON.stringify(e))}catch{}const t=Pn[si.palette%Pn.length],i=document.createElement("div");i.id="gameover",i.style.color=t.hud;const r=be.lives<=0?"GAME OVER":"MATCH COMPLETE";i.innerHTML=`<h1>${r}</h1><p class="final">SCORE ${String(be.score).padStart(6,"0")}</p><table><tr><th>#</th><th>SCORE</th><th>DATE</th></tr>`+e.map((s,o)=>`<tr${s.score===be.score&&s.date===new Date().toISOString().slice(0,10)?' class="me"':""}><td>${o+1}</td><td>${String(s.score).padStart(6,"0")}</td><td>${s.date}</td></tr>`).join("")+'</table><p class="hint">PRESS R TO RESTART</p>',document.body.append(i)}window.addEventListener("keydown",n=>{n.code==="KeyR"&&be.phase==="over"&&location.reload()});function t0(n){const e=n,t=[-e,0,0,e,0,0,0,0,-e,0,0,e,0,-e,0,0,e,0],i=new Qe;return i.setAttribute("position",new at(t,3)),i}function n0(){const n=[0,0,-2.4,0,0,2.4,0,.25,1.5,0,.25,2.1,-3.2,0,.2,3.2,0,.2,-3.2,0,.2,-3.2,.3,0,3.2,0,.2,3.2,.3,0,-1.2,0,-2.1,1.2,0,-2.1,0,0,-2.2,0,.9,-2.3,0,.9,-2.3,0,.5,-1.7],e=new Qe;return e.setAttribute("position",new at(n,3)),e}const i0=new N(0,ye.turret.size.y*ot+.25,-.9),r0=new Ui().setFromAxisAngle(new N(0,1,0),Math.PI);I_();const On=q_(Je);let Si=On.makeGrid(Pn[0].gridCenter,Pn[0].grid);Je.add(Si);const Bt=new F_(1024,!1);Je.add(Bt.object);let lo=0;const dn=Y_(St,Je,Mt),Be={tracer:[.6,1,.7],spark:[.2,.9,.4],hazard:[1,.35,.1],scorch:[.45,.22,.08],smoke:[.1,.35,.16]};function eu(n){if(n.map!==si.map){Yc(n),location.reload();return}const e=Pn[n.palette%Pn.length];Mt.fov=n.fov,Mt.updateProjectionMatrix(),St.setPixelRatio(Math.min(window.devicePixelRatio,2)*n.res),St.setSize(window.innerWidth,window.innerHeight),dn.resize(window.innerWidth,window.innerHeight),Ki.color.setHex(e.world),$c.color.setHex(e.rubble),Jc.color.setHex(e.dim),On.mountainMat.color.setHex(e.dim),On.volcanoMat.color.setHex(e.dim),On.moonMat.color.setHex(e.moon),Je.remove(Si),Si.geometry.dispose(),Si.material.dispose(),Si=On.makeGrid(e.gridCenter,e.grid),Je.add(Si);const t=new ze(e.world);Be.tracer=[t.r*.7+.2,t.g*.7+.2,t.b*.7+.2],Be.spark=[t.r*.4,t.g*.9,t.b*.5],Be.hazard=e.hazard,Be.scorch=[e.hazard[0]*.45,e.hazard[1]*.45,e.hazard[2]*.45];const i=new ze(e.dim);Be.smoke=[i.r*.6,i.g*.6,i.b*.6],sa.style.color=e.hud,sa.style.textShadow=`0 0 6px ${e.hud}99`,document.getElementById("alerts").style.color=e.hud,dn.bloom.strength=n.bloom;const r=dn.crt.uniforms;r.uScan.value=.3*n.crt,r.uVignette.value=.6*n.crt,r.uBarrel.value=.06*n.crt,r.uPersist.value=n.safe?0:.55*n.crt,r.uRoll.value=n.safe?0:.15*n.crt,r.uSafe.value=n.safe?1:0,qc.visible=!n.wireframe,Kc.visible=!n.wireframe}document.body.append(j_(si,Pn.map(n=>n.label),eu));eu(si);let hs=!1;window.addEventListener("keydown",n=>{n.code==="KeyC"&&(hs=!hs)});function co(n,e,t){for(let i=0;i<16;i++){const r=i/16*Math.PI*2;Bt.spawn(n+Math.sin(r)*t,.02,e+Math.cos(r)*t,0,0,0,20,Be.scorch[0],Be.scorch[1],Be.scorch[2],.5,Math.cos(r),0,-Math.sin(r))}}const jr={cam:null};window.__vz={world:be,renderer:St,debug:jr,camera:Mt,turretObj:fn.group,step:(n,e)=>{for(let t=0;t<e;t++)kc(be,n)},get rebuilds(){return ya},post:dn,scene:Je,sample:n=>{const t=St.getDrawingBufferSize(new Le),i=Math.floor(t.x/2-96/2),r=Math.floor(t.y/2-96/2);if(n){dn.composer.renderToScreen=!1,dn.composer.render();const a=new Uint8Array(9216*4);return St.readRenderTargetPixels(dn.composer.readBuffer,i,r,96,96,a),dn.composer.renderToScreen=!0,Wl(a,96)}const s=new Gt(t.x,t.y,{type:ln});St.setRenderTarget(s),St.render(Je,Mt);const o=new Uint8Array(9216*4);return St.readRenderTargetPixels(s,i,r,96,96,o),St.setRenderTarget(null),s.dispose(),Wl(o,96)}};function Wl(n,e){let t=0;const i=[0,0,0],r=new Array(e).fill(0);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=(a*e+l)*4,u=n[c]+n[c+1]+n[c+2];r[a]+=u,u>60&&(t++,i[0]+=n[c],i[1]+=n[c+1],i[2]+=n[c+2])}t&&(i[0]/=t,i[1]/=t,i[2]/=t);const s=r.reduce((a,l)=>a+l,0)/e,o=r.reduce((a,l)=>a+(l-s)*(l-s),0)/e;return{lit:t,mean:i.map(a=>Math.round(a)),rowVar:Math.round(o)}}let kr=0,Xl=performance.now(),uo=0,Gr=0,Yl=0;function tu(n){requestAnimationFrame(tu);const e=Math.min((n-Xl)/1e3,.25);Xl=n,kr+=e;const t=N_(),i=[];if(be.phase!=="over")for(;kr>=Bn;)kc(be,[t]),i.push(...be.events),kr-=Bn;else kr=0;for(ye=be.tanks[0],be.phase==="over"&&!Vl&&(Vl=!0,e0()),Vi(Ti,ye.hull),Vi(fn,ye.turret),lo+=e;lo>1/3;)lo-=1/3,Bt.spawn(On.crater.x+(Math.random()-.5)*14,On.crater.y,On.crater.z+(Math.random()-.5)*14,(Math.random()-.5)*2,4+Math.random()*3,(Math.random()-.5)*2,5+Math.random()*2,Be.smoke[0],Be.smoke[1],Be.smoke[2],1.4);Bt.update(e),Ti.group.visible=ye.alive;for(const o of be.structures){let a=oa.get(o.id);a||(a=Ai(o.grid),a.group.position.set(o.x,0,o.z),Je.add(a.group),oa.set(o.id,a)),Vi(a,o.grid)}if(be.rubbleRev!==Bl){Bl=be.rubbleRev;const o=K_(be.rubble);as.geometry.dispose(),ls.geometry.dispose(),as.geometry=o.faces,ls.geometry=o.edges,ya++}for(const o of be.chunks){let a=Fr.get(o.id);a||(a=new jt($_(o.cells),Ki),Fr.set(o.id,a),Je.add(a)),a.position.set(o.pos[0],o.pos[1],o.pos[2]),a.rotation.set(o.angle*.7,o.angle,0)}for(const[o,a]of Fr)be.chunks.some(l=>l.id===o)||(Je.remove(a),a.geometry.dispose(),Fr.delete(o));for(const o of be.shells)Bt.spawn(o.pos[0],o.pos[1],o.pos[2],o.dir[0]*60,o.dir[1]*60,o.dir[2]*60,.06,Be.tracer[0],Be.tracer[1],Be.tracer[2],2.5);for(const o of be.tanks){if(o.id===0)continue;let a=Or.get(o.id);a||(a={hull:Ai(o.hull),turret:Ai(o.turret)},a.turret.group.position.set(o.turretPivot.x,o.turretPivot.y,o.turretPivot.z),a.turret.group.rotation.order="YXZ",a.hull.group.add(a.turret.group),Je.add(a.hull.group),Or.set(o.id,a)),Vi(a.hull,o.hull),Vi(a.turret,o.turret),a.hull.group.visible=o.alive,a.hull.group.position.set(o.x,0,o.z),a.hull.group.rotation.y=o.heading,a.turret.group.rotation.y=o.turretYaw,a.turret.group.rotation.x=-o.gunPitch}for(const[o,a]of Or)be.tanks.some(l=>l.id===o)||(Je.remove(a.hull.group),Or.delete(o));for(const o of be.missiles){let a=zr.get(o.id);a||(a=new jt(t0(.7),Ki),zr.set(o.id,a),Je.add(a)),a.position.set(o.pos[0],o.pos[1],o.pos[2]),a.rotation.y=Math.atan2(o.dir[0],o.dir[2])}for(const[o,a]of zr)be.missiles.some(l=>l.id===o)||(Je.remove(a),a.geometry.dispose(),zr.delete(o));be.bomber?(En||(En=new jt(n0(),Ki),Je.add(En)),En.position.set(be.bomber.pos[0],be.bomber.pos[1],be.bomber.pos[2]),En.rotation.y=Math.atan2(be.bomber.dir[0],be.bomber.dir[2])):En&&(Je.remove(En),En.geometry.dispose(),En=null);for(const o of be.telegraphs){const a=.5+.5*Math.sin(n/90);for(let l=0;l<16;l++){const c=l/16*Math.PI*2;Bt.spawn(o.x+Math.sin(c)*o.radius,.05,o.z+Math.cos(c)*o.radius,0,0,0,.12,Be.hazard[0]*a,Be.hazard[1]*a,Be.hazard[2]*a,.5,Math.cos(c),0,-Math.sin(c))}}for(const o of be.fences){const a=Sa(be,o);let l=so.get(o.id);if(a&&!l){const c=[],u=Math.hypot(o.bx-o.ax,o.bz-o.az),f=Math.max(2,Math.floor(u/.6));for(let m=0;m<=f;m++){const _=m/f,v=o.ax+(o.bx-o.ax)*_,p=o.az+(o.bz-o.az)*_;c.push(v,0,p,v,o.height,p)}c.push(o.ax,o.height,o.az,o.bx,o.height,o.bz),c.push(o.ax,.05,o.az,o.bx,.05,o.bz);const d=new Qe;d.setAttribute("position",new at(c,3)),l=new jt(d,kl),so.set(o.id,l),Je.add(l)}else!a&&l&&(Je.remove(l),l.geometry.dispose(),so.delete(o.id))}kl.opacity=.45+.25*Math.sin(n/180);const r=be.stormUntil>be.tick;if(vs.visible=r,r){let o=0;for(let a=0;a<3;a++)for(let l=0;l<24;l++){const c=l/24*Math.PI*2,u=(l+1)/24*Math.PI*2,f=130+a*18+Math.sin(c*3+n/400+a)*10,d=130+a*18+Math.sin(u*3+n/400+a)*10;Jn[o++]=Math.sin(c)*520,Jn[o++]=f,Jn[o++]=Math.cos(c)*520,Jn[o++]=Math.sin(u)*520,Jn[o++]=d,Jn[o++]=Math.cos(u)*520}ba.attributes.position.needsUpdate=!0,Zc.opacity=.3+.25*Math.sin(n/300)}if(be.sky.meteors)for(oo+=e;oo>.35;){oo-=.35;const o=Math.random()*Math.PI*2;Bt.spawn(Math.sin(o)*400,150+Math.random()*60,Math.cos(o)*400,-Math.sin(o)*60-20,-35,-Math.cos(o)*60,1.2,Be.tracer[0],Be.tracer[1],Be.tracer[2],6)}nn*=Math.exp(-e*6);for(const o of be.lavaPools){const a=.5+.5*Math.sin(n/120);for(let l=0;l<10;l++){const c=l/10*Math.PI*2+n/900;Bt.spawn(o.x+Math.sin(c)*o.radius,.06,o.z+Math.cos(c)*o.radius,0,.6,0,.14,Be.hazard[0]*a,Be.hazard[1]*a,Be.hazard[2]*a,.6,Math.cos(c),0,-Math.sin(c))}}if(xs.visible=cs,cs){let o=0;const a=(...l)=>{for(const c of l)jc[o++]=c};for(const l of be.tanks){const c=be.brains.get(l.id);if(!(!c||!l.alive)&&(c.debug.intent&&a(l.x,1.4,l.z,c.debug.intent[0],1.4,c.debug.intent[2]),c.aim)){const u=l.heading+l.turretYaw,f=c.debug.err||.05;for(const d of[-1,1])a(l.x,1.4,l.z,l.x+Math.sin(u+f*d)*20,1.4,l.z+Math.cos(u+f*d)*20)}}tr.setDrawRange(0,o/3),tr.attributes.position.needsUpdate=!0}for(const o of i)if(o.kind==="superSpawn"?un.alert("SUPERTANK INBOUND"):o.kind==="bomberInbound"?un.alert("BOMBER RUN"):o.kind==="volcanoRumble"?un.alert("VOLCANO RUMBLING — ERUPTION IMMINENT"):o.kind==="volcanoErupt"?un.alert("ERUPTION"):o.kind==="matchEnd"?un.alert("MATCH COMPLETE"):o.kind==="kill"&&o.what==="bomber"?un.alert("BOMBER DOWN"):o.kind==="scanPing"?un.alert("SCAN PING"):o.kind==="ionStorm"?un.alert("ION STORM — RADAR DOWN"):o.kind==="meteorInbound"?un.alert("METEOR INBOUND"):o.kind==="bombTelegraph"&&(Gl=n),o.kind==="fire"&&(nn=Math.min(.5,nn+.04)),o.kind==="explosion"&&(nn=Math.min(.8,nn+.2)),o.kind==="tankKilled"&&(nn=Math.min(1,nn+.4)),o.kind==="tankKilled"?o.id===0?Br.push({text:o.by===null?"THE ZONE KILLED YOU":"ENEMY KILLED YOU",born:n}):o.by===0&&Br.push({text:`YOU KILLED ${be.brains.get(o.id)?.kind==="super"?"SUPERTANK":"TANK"}`,born:n}):o.kind==="kill"&&o.by===0&&Br.push({text:o.what==="bomber"?"YOU DOWNED BOMBER":"YOU DOWNED MISSILE",born:n}),o.kind==="blockDestroyed"&&o.by!==0&&Math.hypot(o.pos[0]-ye.x,o.pos[2]-ye.z)<4&&(ao={angle:Math.atan2(o.pos[0]-ye.x,o.pos[2]-ye.z)-ye.heading,born:n}),o.kind==="explosion"&&Math.hypot(o.pos[0]-ye.x,o.pos[2]-ye.z)<6&&(ao={angle:Math.atan2(o.pos[0]-ye.x,o.pos[2]-ye.z)-ye.heading,born:n}),o.kind==="fire")for(let a=0;a<8;a++)Bt.spawn(o.pos[0],o.pos[1],o.pos[2],o.dir[0]*12+(Math.random()-.5)*6,o.dir[1]*12+(Math.random()-.5)*6,o.dir[2]*12+(Math.random()-.5)*6,.15,Be.tracer[0],Be.tracer[1],Be.tracer[2],.6);else if(o.kind==="blockDestroyed")for(let a=0;a<6;a++)Bt.spawn(o.pos[0],o.pos[1],o.pos[2],(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,Be.spark[0],Be.spark[1],Be.spark[2],.4);else if(o.kind==="shellImpact"){co(o.pos[0],o.pos[2],1.2);for(let a=0;a<10;a++)Bt.spawn(o.pos[0],o.pos[1]+.1,o.pos[2],(Math.random()-.5)*7,Math.random()*5,(Math.random()-.5)*7,.35,Be.spark[0],Be.spark[1],Be.spark[2],.4)}else if(o.kind==="explosion"){co(o.pos[0],o.pos[2],o.radius);for(let a=0;a<40;a++){const l=Math.random()*Math.PI*2,c=4+Math.random()*8;Bt.spawn(o.pos[0],o.pos[1]+.2,o.pos[2],Math.sin(l)*c,Math.random()*9,Math.cos(l)*c,.7,Be.hazard[0],Be.hazard[1],Be.hazard[2],.8)}}else if(o.kind==="tankKilled"){co(o.pos[0],o.pos[2],2.5);for(let a=0;a<60;a++){const l=Math.random()*Math.PI*2,c=3+Math.random()*10;Bt.spawn(o.pos[0],o.pos[1],o.pos[2],Math.sin(l)*c,Math.random()*12,Math.cos(l)*c,1,Be.hazard[0],Be.hazard[1],Be.hazard[2],.9)}}if(Ti.group.position.set(ye.x,0,ye.z),Ti.group.rotation.y=ye.heading,fn.group.rotation.y=ye.turretYaw,fn.group.rotation.x=-ye.gunPitch,jr.cam?(Mt.position.set(...jr.cam.p),Mt.lookAt(...jr.cam.l)):!ye.alive&&be.respawnTick>0?(Mt.position.set(ye.x+6,4,ye.z+6),Mt.lookAt(ye.x,1,ye.z)):hs?(Mt.position.set(ye.x-Math.sin(ye.heading)*12,6.5,ye.z-Math.cos(ye.heading)*12),Mt.lookAt(ye.x,1.2,ye.z)):(fn.group.updateWorldMatrix(!0,!1),Mt.position.copy(i0).applyMatrix4(fn.group.matrixWorld),Mt.quaternion.setFromRotationMatrix(fn.group.matrixWorld).multiply(r0)),si.shake&&nn>.001&&(Mt.position.x+=(Math.random()-.5)*nn,Mt.position.y+=(Math.random()-.5)*nn,Mt.position.z+=(Math.random()-.5)*nn),St.info.reset(),dn.render(n/1e3),ye.alive){const o=Pc(ye),a=Ma(ye,[0,ot,ye.turret.size.z/2*ot+.15]),l=Qg(be,a,o,400,0);mt[0]=a[0],mt[1]=a[1],mt[2]=a[2],mt[3]=l.pos[0],mt[4]=l.pos[1],mt[5]=l.pos[2];const c=.5;mt[6]=l.pos[0]-c,mt[7]=l.pos[1],mt[8]=l.pos[2],mt[9]=l.pos[0]+c,mt[10]=l.pos[1],mt[11]=l.pos[2],mt[12]=l.pos[0],mt[13]=l.pos[1],mt[14]=l.pos[2]-c,mt[15]=l.pos[0],mt[16]=l.pos[1],mt[17]=l.pos[2]+c,Aa.attributes.position.needsUpdate=!0,us.visible=!0}else us.visible=!1;const s=new Set;for(const[o,a]of be.brains)a.kind==="super"&&s.add(o);un.draw({tick:be.tick,heading:ye.heading,turretYaw:ye.turretYaw,x:ye.x,z:ye.z,known:be.awareness.get(0),superIds:s,storm:be.stormUntil>be.tick,score:be.score,lives:be.lives,cooldownFrac:1-Math.min(1,ye.cooldown/Lc),bomberBlip:n-Gl<3e3,secondsLeft:Math.max(0,(gs-be.tick)/60),palette:Pn[si.palette%Pn.length],alive:ye.alive,status:{core:Yi(ye.hull,"core"),tread:Yi(ye.hull,"tread"),gun:Yi(ye.turret,"gun"),engine:Yi(ye.hull,"engine")},killfeed:Br,hitFlash:ao,elevation:ye.gunPitch,now:n}),uo++,Gr+=e,Gr>=.5&&(Yl=Math.round(uo/Gr),uo=0,Gr=0),sa.textContent=`FPS ${Yl} · calls ${St.info.render.calls} · tick ${be.tick} · v ${ye.speed.toFixed(1)} m/s · ${hs?"chase":"scope"} [C]`}requestAnimationFrame(tu);window.addEventListener("resize",()=>{Mt.aspect=window.innerWidth/window.innerHeight,Mt.updateProjectionMatrix(),St.setSize(window.innerWidth,window.innerHeight),dn.resize(window.innerWidth,window.innerHeight)});
