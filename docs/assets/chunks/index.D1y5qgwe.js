/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="183",je={ROTATE:0,DOLLY:1,PAN:2},dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yu=0,_l=1,Mu=2,ms=1,Su=2,cr=3,Ln=0,Be=1,Rn=2,In=0,Ui=1,vl=2,xl=3,yl=4,bu=5,ii=100,Eu=101,wu=102,Tu=103,Au=104,Cu=200,Ru=201,Pu=202,Iu=203,Pa=204,Ia=205,Du=206,Lu=207,Uu=208,Nu=209,Fu=210,Ou=211,Bu=212,ku=213,zu=214,Da=0,La=1,Ua=2,Fi=3,Na=4,Fa=5,Oa=6,Ba=7,Lo=0,Vu=1,Hu=2,mn=0,rh=1,sh=2,ah=3,oh=4,lh=5,ch=6,hh=7,Ml="attached",Gu="detached",uh=300,hi=301,Oi=302,Vs=303,Hs=304,Ds=306,ka=1e3,Pn=1001,za=1002,Ae=1003,Wu=1004,Ir=1005,Ie=1006,Gs=1007,si=1008,He=1009,fh=1010,dh=1011,_r=1012,Uo=1013,vn=1014,Ze=1015,Un=1016,No=1017,Fo=1018,vr=1020,ph=35902,mh=35899,gh=1021,_h=1022,Je=1023,Nn=1026,ai=1027,Oo=1028,Bo=1029,Bi=1030,ko=1031,zo=1033,gs=33776,_s=33777,vs=33778,xs=33779,Va=35840,Ha=35841,Ga=35842,Wa=35843,Xa=36196,Ya=37492,qa=37496,ja=37488,Za=37489,Ja=37490,$a=37491,Ka=37808,Qa=37809,to=37810,eo=37811,no=37812,io=37813,ro=37814,so=37815,ao=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,_o=36284,vo=36285,xo=36286,Xu=2200,Yu=2201,qu=2202,Ms=2300,yo=2301,Ws=2302,Sl=2303,Ii=2400,Di=2401,Ss=2402,Vo=2500,ju=2501,vv=0,xv=1,yv=2,Zu=3200,Ho=0,Ju=1,Yn="",Oe="srgb",ki="srgb-linear",bs="linear",re="srgb",pi=7680,bl=519,$u=512,Ku=513,Qu=514,Go=515,tf=516,ef=517,Wo=518,nf=519,Mo=35044,El="300 es",pn=2e3,xr=2001;function rf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function af(){const i=yr("canvas");return i.style.display="block",i}const wl={};function Es(...i){const t="THREE."+i.shift();console.log(t,...i)}function vh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=vh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=vh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ws(...i){const t=i.join(" ");t in wl||(wl[t]=!0,Vt(...i))}function of(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const lf={[Da]:La,[Ua]:Oa,[Na]:Ba,[Fi]:Fa,[La]:Da,[Oa]:Ua,[Ba]:Na,[Fa]:Fi};class Fn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const dr=Math.PI/180,zi=180/Math.PI;function $e(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Xo(i,t){return(i%t+t)%t}function cf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function hf(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function uf(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function ff(i,t=1){return t-Math.abs(Xo(i,t*2)-t)}function df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function mf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gf(i,t){return i+Math.random()*(t-i)}function _f(i){return i*(.5-Math.random())}function vf(i){i!==void 0&&(Tl=i);let t=Tl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xf(i){return i*dr}function yf(i){return i*zi}function Mf(i){return(i&i-1)===0&&i!==0}function Sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ef(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),f=a((t+n)/2),u=s((t-n)/2),h=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*f,c*u,c*h,o*l);break;case"YZY":i.set(c*h,o*f,c*u,o*l);break;case"ZXZ":i.set(c*u,c*h,o*f,o*l);break;case"XZX":i.set(o*f,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*f,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*f,o*l);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const li={DEG2RAD:dr,RAD2DEG:zi,generateUUID:$e,clamp:Zt,euclideanModulo:Xo,mapLinear:cf,inverseLerp:hf,lerp:pr,damp:uf,pingpong:ff,smoothstep:df,smootherstep:pf,randInt:mf,randFloat:gf,randFloatSpread:_f,seededRandom:vf,degToRad:xf,radToDeg:yf,isPowerOfTwo:Mf,ceilPowerOfTwo:Sf,floorPowerOfTwo:bf,setQuaternionFromProperEuler:Ef,normalize:se,denormalize:sn};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],u=n[r+3],h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(u!==v||c!==h||l!==m||f!==g){let d=c*h+l*m+f*g+u*v;d<0&&(h=-h,m=-m,g=-g,v=-v,d=-d);let p=1-o;if(d<.9995){const x=Math.acos(d),_=Math.sin(x);p=Math.sin(p*x)/_,o=Math.sin(o*x)/_,c=c*p+h*o,l=l*p+m*o,f=f*p+g*o,u=u*p+v*o}else{c=c*p+h*o,l=l*p+m*o,f=f*p+g*o,u=u*p+v*o;const x=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=x,l*=x,f*=x,u*=x}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],u=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+f*u+c*m-l*h,t[e+1]=c*g+f*h+l*u-o*m,t[e+2]=l*g+f*m+o*h-c*u,t[e+3]=f*g-o*u-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),u=o(s/2),h=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*f*u+l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u-h*m*g;break;case"YXZ":this._x=h*f*u+l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u+h*m*g;break;case"ZXY":this._x=h*f*u-l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u-h*m*g;break;case"ZYX":this._x=h*f*u-l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u+h*m*g;break;case"YZX":this._x=h*f*u+l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u-h*m*g;break;case"XZY":this._x=h*f*u-l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u+h*m*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],f=e[6],u=e[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(f-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,f=e._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,e=Math.sin(e*l)/f,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),f=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*f,this.y=n+c*f+o*l-s*u,this.z=r+c*u+s*f-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new H,Al=new Ke;class jt{constructor(t,e,n,r,s,a,o,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const f=this.elements;return f[0]=t,f[1]=r,f[2]=o,f[3]=e,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],m=n[5],g=n[8],v=r[0],d=r[3],p=r[6],x=r[1],_=r[4],S=r[7],E=r[2],M=r[5],w=r[8];return s[0]=a*v+o*x+c*E,s[3]=a*d+o*_+c*M,s[6]=a*p+o*S+c*w,s[1]=l*v+f*x+u*E,s[4]=l*d+f*_+u*M,s[7]=l*p+f*S+u*w,s[2]=h*v+m*x+g*E,s[5]=h*d+m*_+g*M,s[8]=h*p+m*S+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8];return e*a*f-e*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],u=f*a-o*l,h=o*c-f*s,m=l*s-a*c,g=e*u+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(r*l-f*n)*v,t[2]=(o*n-r*a)*v,t[3]=h*v,t[4]=(f*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new jt,Cl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const i={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===re&&(r.r=Dn(r.r),r.g=Dn(r.g),r.b=Dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?bs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ki]:{primaries:t,whitePoint:n,transfer:bs,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}const te=wf();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class Tf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mi===void 0&&(mi=yr("canvas")),mi.width=t.width,mi.height=t.height;const r=mi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Af=0;class Yo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=$e(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let Cf=0;const js=new H;class ge extends Fn{constructor(t=ge.DEFAULT_IMAGE,e=ge.DEFAULT_MAPPING,n=Pn,r=Pn,s=Ie,a=si,o=Je,c=He,l=ge.DEFAULT_ANISOTROPY,f=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=$e(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ka:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ka:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ge.DEFAULT_IMAGE=null;ge.DEFAULT_MAPPING=uh;ge.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],f=c[4],u=c[8],h=c[1],m=c[5],g=c[9],v=c[2],d=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,S=(m+1)/2,E=(p+1)/2,M=(f+h)/4,w=(u+v)/4,y=(g+d)/4;return _>S&&_>E?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=M/n,s=w/n):S>E?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=M/r,s=y/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=w/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((d-g)*(d-g)+(u-v)*(u-v)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(u-v)/x,this.z=(h-f)/x,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rf extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new ge(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Yo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(t,e,n,r,s,a,o,c,l,f,u,h,m,g,v,d){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,f,u,h,m,g,v,d)}set(t,e,n,r,s,a,o,c,l,f,u,h,m,g,v,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=u,p[14]=h,p[3]=m,p[7]=g,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/gi.setFromMatrixColumn(t,0).length(),s=1/gi.setFromMatrixColumn(t,1).length(),a=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=a*f,m=a*u,g=o*f,v=o*u;e[0]=c*f,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*f,m=c*u,g=l*f,v=l*u;e[0]=h+v*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*f,e[9]=-o,e[2]=m*o-g,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*f,m=c*u,g=l*f,v=l*u;e[0]=h-v*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*f,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*f,m=a*u,g=o*f,v=o*u;e[0]=c*f,e[4]=g*l-m,e[8]=h*l+v,e[1]=c*u,e[5]=v*l+h,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*f,e[4]=v-h*u,e[8]=g*u+m,e[1]=u,e[5]=a*f,e[9]=-o*f,e[2]=-l*f,e[6]=m*u+g,e[10]=h-v*u}else if(t.order==="XZY"){const h=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*f,e[4]=-u,e[8]=l*f,e[1]=h*u+v,e[5]=a*f,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*f,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Df)}lookAt(t,e,n){const r=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),kn.crossVectors(n,ze),kn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),kn.crossVectors(n,ze)),kn.normalize(),Dr.crossVectors(ze,kn),r[0]=kn.x,r[4]=Dr.x,r[8]=ze.x,r[1]=kn.y,r[5]=Dr.y,r[9]=ze.y,r[2]=kn.z,r[6]=Dr.z,r[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],m=n[13],g=n[2],v=n[6],d=n[10],p=n[14],x=n[3],_=n[7],S=n[11],E=n[15],M=r[0],w=r[4],y=r[8],b=r[12],D=r[1],A=r[5],C=r[9],P=r[13],L=r[2],B=r[6],z=r[10],O=r[14],N=r[3],F=r[7],k=r[11],V=r[15];return s[0]=a*M+o*D+c*L+l*N,s[4]=a*w+o*A+c*B+l*F,s[8]=a*y+o*C+c*z+l*k,s[12]=a*b+o*P+c*O+l*V,s[1]=f*M+u*D+h*L+m*N,s[5]=f*w+u*A+h*B+m*F,s[9]=f*y+u*C+h*z+m*k,s[13]=f*b+u*P+h*O+m*V,s[2]=g*M+v*D+d*L+p*N,s[6]=g*w+v*A+d*B+p*F,s[10]=g*y+v*C+d*z+p*k,s[14]=g*b+v*P+d*O+p*V,s[3]=x*M+_*D+S*L+E*N,s[7]=x*w+_*A+S*B+E*F,s[11]=x*y+_*C+S*z+E*k,s[15]=x*b+_*P+S*O+E*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],f=t[2],u=t[6],h=t[10],m=t[14],g=t[3],v=t[7],d=t[11],p=t[15],x=c*m-l*h,_=o*m-l*u,S=o*h-c*u,E=a*m-l*f,M=a*h-c*f,w=a*u-o*f;return e*(v*x-d*_+p*S)-n*(g*x-d*E+p*M)+r*(g*_-v*E+p*w)-s*(g*S-v*M+d*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],m=t[11],g=t[12],v=t[13],d=t[14],p=t[15],x=e*o-n*a,_=e*c-r*a,S=e*l-s*a,E=n*c-r*o,M=n*l-s*o,w=r*l-s*c,y=f*v-u*g,b=f*d-h*g,D=f*p-m*g,A=u*d-h*v,C=u*p-m*v,P=h*p-m*d,L=x*P-_*C+S*A+E*D-M*b+w*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return t[0]=(o*P-c*C+l*A)*B,t[1]=(r*C-n*P-s*A)*B,t[2]=(v*w-d*M+p*E)*B,t[3]=(h*M-u*w-m*E)*B,t[4]=(c*D-a*P-l*b)*B,t[5]=(e*P-r*D+s*b)*B,t[6]=(d*S-g*w-p*_)*B,t[7]=(f*w-h*S+m*_)*B,t[8]=(a*C-o*D+l*y)*B,t[9]=(n*D-e*C-s*y)*B,t[10]=(g*M-v*S+p*x)*B,t[11]=(u*S-f*M-m*x)*B,t[12]=(o*b-a*A-c*y)*B,t[13]=(e*A-n*b+r*y)*B,t[14]=(v*_-g*E-d*x)*B,t[15]=(f*E-u*_+h*x)*B,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,f=a+a,u=o+o,h=s*l,m=s*f,g=s*u,v=a*f,d=a*u,p=o*u,x=c*l,_=c*f,S=c*u,E=n.x,M=n.y,w=n.z;return r[0]=(1-(v+p))*E,r[1]=(m+S)*E,r[2]=(g-_)*E,r[3]=0,r[4]=(m-S)*M,r[5]=(1-(h+p))*M,r[6]=(d+x)*M,r[7]=0,r[8]=(g+_)*w,r[9]=(d-x)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=gi.set(r[0],r[1],r[2]).length();const o=gi.set(r[4],r[5],r[6]).length(),c=gi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),en.copy(this);const l=1/a,f=1/o,u=1/c;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=f,en.elements[5]*=f,en.elements[6]*=f,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=pn,c=!1){const l=this.elements,f=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),m=(n+r)/(n-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===pn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===xr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=pn,c=!1){const l=this.elements,f=2/(e-t),u=2/(n-r),h=-(e+t)/(e-t),m=-(n+r)/(n-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===pn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===xr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new H,en=new Qt,If=new H(0,0,0),Df=new H(1,1,1),kn=new H,Dr=new H,ze=new H,Pl=new Qt,Il=new Ke;class on{constructor(t=0,e=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],u=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const Dl=new H,_i=new Ke,bn=new Qt,Lr=new H,Ki=new H,Uf=new H,Nf=new Ke,Ll=new H(1,0,0),Ul=new H(0,1,0),Nl=new H(0,0,1),Fl={type:"added"},Ff={type:"removed"},vi={type:"childadded",child:null},Zs={type:"childremoved",child:null};class de extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=$e(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new H,e=new on,n=new Ke,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new jt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ki,Lr,this.up):bn.lookAt(Lr,Ki,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(bn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),vi.child=t,this.dispatchEvent(vi),vi.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ff),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),f=a(t.images),u=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}de.DEFAULT_UP=new H(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ur extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Of={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,n),p=this._getHandJoint(l,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Of)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function $s(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=Xo(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=$s(a,s,t+1/3),this.g=$s(a,s,t),this.b=$s(a,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return te.workingToColorSpace(Pe.copy(this),t),Math.round(Zt(Pe.r*255,0,255))*65536+Math.round(Zt(Pe.g*255,0,255))*256+Math.round(Zt(Pe.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Oe){te.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Nr);const n=pr(zn.h,Nr.h,e),r=pr(zn.s,Nr.s,e),s=pr(zn.l,Nr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Jt;Jt.NAMES=yh;class Ls{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new Ls(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new Mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bf extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const nn=new H,En=new H,Ks=new H,wn=new H,xi=new H,yi=new H,Ol=new H,Qs=new H,ta=new H,ea=new H,na=new fe,ia=new fe,ra=new fe;class an{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),nn.subVectors(t,e),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){nn.subVectors(r,e),En.subVectors(n,e),Ks.subVectors(t,e);const a=nn.dot(nn),o=nn.dot(En),c=nn.dot(Ks),l=En.dot(En),f=En.dot(Ks),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(l*c-o*f)*h,g=(a*f-o*c)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return na.setScalar(0),ia.setScalar(0),ra.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(na,s.x),a.addScaledVector(ia,s.y),a.addScaledVector(ra,s.z),a}static isFrontFacing(t,e,n,r){return nn.subVectors(n,e),En.subVectors(t,e),nn.cross(En).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,n),yi.subVectors(s,n),Qs.subVectors(t,n);const c=xi.dot(Qs),l=yi.dot(Qs);if(c<=0&&l<=0)return e.copy(n);ta.subVectors(t,r);const f=xi.dot(ta),u=yi.dot(ta);if(f>=0&&u<=f)return e.copy(r);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(xi,a);ea.subVectors(t,s);const m=xi.dot(ea),g=yi.dot(ea);if(g>=0&&m<=g)return e.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(yi,o);const d=f*g-m*u;if(d<=0&&u-f>=0&&m-g>=0)return Ol.subVectors(s,r),o=(u-f)/(u-f+(m-g)),e.copy(r).addScaledVector(Ol,o);const p=1/(d+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(xi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qe{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),Or.subVectors(this.max,Qi),Mi.subVectors(t.a,Qi),Si.subVectors(t.b,Qi),bi.subVectors(t.c,Qi),Vn.subVectors(Si,Mi),Hn.subVectors(bi,Si),$n.subVectors(Mi,bi);let e=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-$n.z,$n.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,$n.z,0,-$n.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-$n.y,$n.x,0];return!sa(e,Mi,Si,bi,Or)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,Mi,Si,bi,Or))?!1:(Br.crossVectors(Vn,Hn),e=[Br.x,Br.y,Br.z],sa(e,Mi,Si,bi,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new H,new H,new H,new H,new H,new H,new H,new H],rn=new H,Fr=new Qe,Mi=new H,Si=new H,bi=new H,Vn=new H,Hn=new H,$n=new H,Qi=new H,Or=new H,Br=new H,Kn=new H;function sa(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Kn.fromArray(i,s);const o=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),f=n.dot(Kn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const ve=new H,kr=new yt;let kf=0;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mo,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mo&&(t.usage=this.usage),t}}class Sh extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bh extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}const zf=new Qe,tr=new H,aa=new H;class Mn{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(aa)),this.expandByPoint(tr.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Vf=0;const Ye=new Qt,oa=new de,Ei=new H,Ve=new Qe,er=new Qe,Ee=new H;class ye extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=$e(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rf(t)?bh:Sh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ve.min,er.min),Ve.expandByPoint(Ee),Ee.addVectors(Ve.max,er.max),Ve.expandByPoint(Ee)):(Ve.expandByPoint(er.min),Ve.expandByPoint(er.max))}Ve.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Ee.fromBufferAttribute(o,l),c&&(Ei.fromBufferAttribute(t,l),Ee.add(Ei)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new H,c[y]=new H;const l=new H,f=new H,u=new H,h=new yt,m=new yt,g=new yt,v=new H,d=new H;function p(y,b,D){l.fromBufferAttribute(n,y),f.fromBufferAttribute(n,b),u.fromBufferAttribute(n,D),h.fromBufferAttribute(s,y),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,D),f.sub(l),u.sub(l),m.sub(h),g.sub(h);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),d.copy(u).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(A),o[y].add(v),o[b].add(v),o[D].add(v),c[y].add(d),c[b].add(d),c[D].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,b=x.length;y<b;++y){const D=x[y],A=D.start,C=D.count;for(let P=A,L=A+C;P<L;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const _=new H,S=new H,E=new H,M=new H;function w(y){E.fromBufferAttribute(r,y),M.copy(E);const b=o[y];_.copy(b),_.sub(E.multiplyScalar(E.dot(b))).normalize(),S.crossVectors(M,b);const A=S.dot(c[y])<0?-1:1;a.setXYZW(y,_.x,_.y,_.z,A)}for(let y=0,b=x.length;y<b;++y){const D=x[y],A=D.start,C=D.count;for(let P=A,L=A+C;P<L;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,f=new H,u=new H;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),v=t.getX(h+1),d=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,d),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,d),o.add(f),c.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){const l=o.array,f=o.itemSize,u=o.normalized,h=new l.constructor(c.length*f);let m=0,g=0;for(let v=0,d=c.length;v<d;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*f;for(let p=0;p<f;p++)h[g++]=l[m++]}return new we(h,f,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,u=l.length;f<u;f++){const h=l[f],m=t(h,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const m=l[u];f.push(m.toJSON(t.data))}f.length>0&&(r[c]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(e))}const s=t.morphAttributes;for(const l in s){const f=[],u=s[l];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mo,this.updateRanges=[],this.version=0,this.uuid=$e()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new H;class Eh{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Es("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Eh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Es("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Hf=0;class jn extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=$e(),this.name="",this.type="Material",this.blending=Ui,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Ia,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const An=new H,la=new H,zr=new H,Gn=new H,ca=new H,Vr=new H,ha=new H;class Wi{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){la.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(la);const s=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=Gn.dot(this.direction),c=-Gn.dot(zr),l=Gn.lengthSq(),f=Math.abs(1-a*a);let u,h,m,g;if(f>0)if(u=a*c-o,h=a*o-c,g=s*f,u>=0)if(h>=-g)if(h<=g){const v=1/f;u*=v,h*=v,m=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(la).addScaledVector(zr,h),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),f>=0?(s=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,r,s){ca.subVectors(e,t),Vr.subVectors(n,t),ha.crossVectors(ca,Vr);let a=this.direction.dot(ha),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const c=o*this.direction.dot(Vr.crossVectors(Gn,Vr));if(c<0)return null;const l=o*this.direction.dot(ca.cross(Gn));if(l<0||c+l>a)return null;const f=-o*Gn.dot(ha);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jo extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bl=new Qt,Qn=new Wi,Hr=new Mn,kl=new H,Gr=new H,Wr=new H,Xr=new H,ua=new H,Yr=new H,zl=new H,qr=new H;class De extends de{constructor(t=new ye,e=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],u=s[c];f!==0&&(ua.fromBufferAttribute(u,t),a?Yr.addScaledVector(ua,f):Yr.addScaledVector(ua.sub(e),f))}e.add(Yr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Qn.copy(t.ray).recast(t.near),!(Hr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Hr,kl)===null||Qn.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Bl.copy(s).invert(),Qn.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),_=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let S=x,E=_;S<E;S+=3){const M=o.getX(S),w=o.getX(S+1),y=o.getX(S+2);r=jr(this,p,t,n,l,f,u,M,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const x=o.getX(d),_=o.getX(d+1),S=o.getX(d+2);r=jr(this,a,t,n,l,f,u,x,_,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),_=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let S=x,E=_;S<E;S+=3){const M=S,w=S+1,y=S+2;r=jr(this,p,t,n,l,f,u,M,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const x=d,_=d+1,S=d+2;r=jr(this,a,t,n,l,f,u,x,_,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Gf(i,t,e,n,r,s,a,o){let c;if(t.side===Be?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Ln,o),c===null)return null;qr.copy(o),qr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qr);return l<e.near||l>e.far?null:{distance:l,point:qr.clone(),object:i}}function jr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Gr),i.getVertexPosition(c,Wr),i.getVertexPosition(l,Xr);const f=Gf(i,t,e,n,Gr,Wr,Xr,zl);if(f){const u=new H;an.getBarycoord(zl,Gr,Wr,Xr,u),r&&(f.uv=an.getInterpolatedAttribute(r,o,c,l,u,new yt)),s&&(f.uv1=an.getInterpolatedAttribute(s,o,c,l,u,new yt)),a&&(f.normal=an.getInterpolatedAttribute(a,o,c,l,u,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new H,materialIndex:0};an.getNormal(Gr,Wr,Xr,h.normal),f.face=h,f.barycoord=u}return f}const Vl=new H,Hl=new fe,Gl=new fe,Wf=new H,Wl=new Qt,Zr=new H,fa=new Mn,Xl=new Qt,da=new Wi;class Sv extends De{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ml,this.bindMatrix=new Qt,this.bindMatrixInverse=new Qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qe),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zr),this.boundingBox.expandByPoint(Zr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zr),this.boundingSphere.expandByPoint(Zr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(r),t.ray.intersectsSphere(fa)!==!1&&(Xl.copy(r).invert(),da.copy(t.ray).applyMatrix4(Xl),!(this.boundingBox!==null&&da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,da)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new fe,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;Hl.fromBufferAttribute(r.attributes.skinIndex,t),Gl.fromBufferAttribute(r.attributes.skinWeight,t),Vl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Gl.getComponent(s);if(a!==0){const o=Hl.getComponent(s);Wl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Wf.copy(Vl).applyMatrix4(Wl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Xf extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zo extends ge{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ae,f=Ae,u,h){super(null,a,o,c,l,f,r,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=new Qt,Yf=new Qt;class wh{constructor(t=[],e=[]){this.uuid=$e(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Yf;Yl.multiplyMatrices(o,e[s]),Yl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new wh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Zo(e,t,t,Je,Ze);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=e[s];a===void 0&&(Vt("Skeleton: No bone found with UUID:",s),a=new Xf),this.bones.push(a),this.boneInverses.push(new Qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const a=e[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}}class ql extends we{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wi=new Qt,jl=new Qt,Jr=[],Zl=new Qe,qf=new Qt,nr=new De,ir=new Mn;class bv extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,qf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),Zl.copy(t.boundingBox).applyMatrix4(wi),this.boundingBox.union(Zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),ir.copy(t.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wi),jl.multiplyMatrices(n,wi),nr.matrixWorld=jl,nr.raycast(t,Jr);for(let a=0,o=Jr.length;a<o;a++){const c=Jr[a];c.instanceId=s,c.object=this,e.push(c)}Jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zo(new Float32Array(r*this.count),r,this.count,Oo,Ze));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pa=new H,jf=new H,Zf=new jt;class Xn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=pa.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zf.getNormalMatrix(t),r=this.coplanarPoint(pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Mn,Jf=new yt(.5,.5),$r=new H;class Us{constructor(t=new Xn,e=new Xn,n=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],u=s[5],h=s[6],m=s[7],g=s[8],v=s[9],d=s[10],p=s[11],x=s[12],_=s[13],S=s[14],E=s[15];if(r[0].setComponents(l-a,m-f,p-g,E-x).normalize(),r[1].setComponents(l+a,m+f,p+g,E+x).normalize(),r[2].setComponents(l+o,m+u,p+v,E+_).normalize(),r[3].setComponents(l-o,m-u,p-v,E-_).normalize(),n)r[4].setComponents(c,h,d,S).normalize(),r[5].setComponents(l-c,m-h,p-d,E-S).normalize();else if(r[4].setComponents(l-c,m-h,p-d,E-S).normalize(),e===pn)r[5].setComponents(l+c,m+h,p+d,E+S).normalize();else if(e===xr)r[5].setComponents(c,h,d,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);const e=Jf.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if($r.x=r.normal.x>0?t.max.x:t.min.x,$r.y=r.normal.y>0?t.max.y:t.min.y,$r.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ts=new H,As=new H,Jl=new Qt,rr=new Wi,Kr=new Mn,ma=new H,$l=new H;class Cs extends de{constructor(t=new ye,e=new Jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ts.fromBufferAttribute(e,r-1),As.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ts.distanceTo(As);t.setAttribute("lineDistance",new ue(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,t.ray.intersectsSphere(Kr)===!1)return;Jl.copy(r).invert(),rr.copy(t.ray).applyMatrix4(Jl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=m,d=g-1;v<d;v+=l){const p=f.getX(v),x=f.getX(v+1),_=Qr(this,t,rr,c,p,x,v);_&&e.push(_)}if(this.isLineLoop){const v=f.getX(g-1),d=f.getX(m),p=Qr(this,t,rr,c,v,d,g-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,d=g-1;v<d;v+=l){const p=Qr(this,t,rr,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Qr(this,t,rr,c,g-1,m,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qr(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Ts.fromBufferAttribute(o,r),As.fromBufferAttribute(o,s),e.distanceSqToSegment(Ts,As,ma,$l)>n)return;ma.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:$l.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Kl=new H,Ql=new H;class $f extends Cs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Kl.fromBufferAttribute(e,r),Ql.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Kl.distanceTo(Ql);t.setAttribute("lineDistance",new ue(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ev extends Cs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Kf extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new Qt,So=new Wi,ts=new Mn,es=new H;class wv extends de{constructor(t=new ye,e=new Kf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),ts.radius+=s,t.ray.intersectsSphere(ts)===!1)return;tc.copy(r).invert(),So.copy(t.ray).applyMatrix4(tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=h,v=m;g<v;g++){const d=l.getX(g);es.fromBufferAttribute(u,d),ec(es,d,c,r,t,e,this)}}else{const h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=h,v=m;g<v;g++)es.fromBufferAttribute(u,g),ec(es,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ec(i,t,e,n,r,s,a){const o=So.distanceSqToPoint(i);if(o<e){const c=new H;So.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Tv extends ge{constructor(t,e,n,r,s,a,o,c,l,f,u,h){super(null,a,o,c,l,f,r,s,u,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class $o extends ge{constructor(t=[],e=hi,n,r,s,a,o,c,l,f){super(t,e,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qf extends ge{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mr extends ge{constructor(t,e,n=vn,r,s,a,o=Ae,c=Ae,l,f=Nn,u=1){if(f!==Nn&&f!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class td extends Mr{constructor(t,e=vn,n=hi,r,s,a=Ae,o=Ae,c,l=Nn){const f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Th extends ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wr extends ye{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],u=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(u,2));function g(v,d,p,x,_,S,E,M,w,y,b){const D=S/w,A=E/y,C=S/2,P=E/2,L=M/2,B=w+1,z=y+1;let O=0,N=0;const F=new H;for(let k=0;k<z;k++){const V=k*A-P;for(let q=0;q<B;q++){const ot=q*D-C;F[v]=ot*x,F[d]=V*_,F[p]=L,l.push(F.x,F.y,F.z),F[v]=0,F[d]=0,F[p]=M>0?1:-1,f.push(F.x,F.y,F.z),u.push(q/w),u.push(1-k/y),O+=1}}for(let k=0;k<y;k++)for(let V=0;V<w;V++){const q=h+V+B*k,ot=h+V+B*(k+1),ht=h+(V+1)+B*(k+1),ut=h+(V+1)+B*k;c.push(q,ot,ut),c.push(ot,ht,ut),N+=6}o.addGroup(m,N,b),m+=N,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ah extends ye{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],m=[];let g=0;const v=[],d=n/2;let p=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(m,2));function x(){const S=new H,E=new H;let M=0;const w=(e-t)/n;for(let y=0;y<=s;y++){const b=[],D=y/s,A=D*(e-t)+t;for(let C=0;C<=r;C++){const P=C/r,L=P*c+o,B=Math.sin(L),z=Math.cos(L);E.x=A*B,E.y=-D*n+d,E.z=A*z,u.push(E.x,E.y,E.z),S.set(B,w,z).normalize(),h.push(S.x,S.y,S.z),m.push(P,1-D),b.push(g++)}v.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const D=v[b][y],A=v[b+1][y],C=v[b+1][y+1],P=v[b][y+1];(t>0||b!==0)&&(f.push(D,A,P),M+=3),(e>0||b!==s-1)&&(f.push(A,C,P),M+=3)}l.addGroup(p,M,0),p+=M}function _(S){const E=g,M=new yt,w=new H;let y=0;const b=S===!0?t:e,D=S===!0?1:-1;for(let C=1;C<=r;C++)u.push(0,d*D,0),h.push(0,D,0),m.push(.5,.5),g++;const A=g;for(let C=0;C<=r;C++){const L=C/r*c+o,B=Math.cos(L),z=Math.sin(L);w.x=b*z,w.y=d*D,w.z=b*B,u.push(w.x,w.y,w.z),h.push(0,D,0),M.x=B*.5+.5,M.y=z*.5*D+.5,m.push(M.x,M.y),g++}for(let C=0;C<r;C++){const P=E+C,L=A+C;S===!0?f.push(L,L+1,P):f.push(L+1,L,P),y+=3}l.addGroup(p,y,S===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends ye{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),f(),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(s.slice(),3)),this.setAttribute("uv",new ue(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new H,S=new H,E=new H;for(let M=0;M<e.length;M+=3)m(e[M+0],_),m(e[M+1],S),m(e[M+2],E),c(_,S,E,x)}function c(x,_,S,E){const M=E+1,w=[];for(let y=0;y<=M;y++){w[y]=[];const b=x.clone().lerp(S,y/M),D=_.clone().lerp(S,y/M),A=M-y;for(let C=0;C<=A;C++)C===0&&y===M?w[y][C]=b:w[y][C]=b.clone().lerp(D,C/A)}for(let y=0;y<M;y++)for(let b=0;b<2*(M-y)-1;b++){const D=Math.floor(b/2);b%2===0?(h(w[y][D+1]),h(w[y+1][D]),h(w[y][D])):(h(w[y][D+1]),h(w[y+1][D+1]),h(w[y+1][D]))}}function l(x){const _=new H;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(x),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function f(){const x=new H;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const S=d(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(S,1-E)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const _=a[x+0],S=a[x+2],E=a[x+4],M=Math.max(_,S,E),w=Math.min(_,S,E);M>.9&&w<.1&&(_<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function m(x,_){const S=x*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const x=new H,_=new H,S=new H,E=new H,M=new yt,w=new yt,y=new yt;for(let b=0,D=0;b<s.length;b+=9,D+=6){x.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),M.set(a[D+0],a[D+1]),w.set(a[D+2],a[D+3]),y.set(a[D+4],a[D+5]),E.copy(x).add(_).add(S).divideScalar(3);const A=d(E);v(M,D+0,x,A),v(w,D+2,_,A),v(y,D+4,S,A)}}function v(x,_,S,E){E<0&&x.x===1&&(a[_]=x.x-1),S.x===0&&S.z===0&&(a[_]=E/2/Math.PI+.5)}function d(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.vertices,t.indices,t.radius,t.detail)}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const f=n[r],h=n[r+1]-f,m=(a-f)/h;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new yt:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new H,r=[],s=[],a=[],o=new H,c=new Qt;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new H)}s[0]=new H,a[0]=new H;let l=Number.MAX_VALUE;const f=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=l&&(l=f,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Zt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Zt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qo extends Sn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new yt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,m=l-this.aY;c=h*f-m*u+this.aX,l=h*u+m*f+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ed extends Qo{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,f,u){let h=(a-s)/l-(o-s)/(l+f)+(o-a)/f,m=(o-a)/f-(c-a)/(f+u)+(c-o)/u;h*=f,m*=f,r(a,o,h,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ns=new H,ga=new tl,_a=new tl,va=new tl;class nd extends Sn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new H){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,f;this.closed||o>0?l=r[(o-1)%s]:(ns.subVectors(r[0],r[1]).add(r[0]),l=ns);const u=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(ns.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=ns),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(f),m);v<1e-4&&(v=1),g<1e-4&&(g=v),d<1e-4&&(d=v),ga.initNonuniformCatmullRom(l.x,u.x,h.x,f.x,g,v,d),_a.initNonuniformCatmullRom(l.y,u.y,h.y,f.y,g,v,d),va.initNonuniformCatmullRom(l.z,u.z,h.z,f.z,g,v,d)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(l.x,u.x,h.x,f.x,this.tension),_a.initCatmullRom(l.y,u.y,h.y,f.y,this.tension),va.initCatmullRom(l.z,u.z,h.z,f.z,this.tension));return n.set(ga.calc(c),_a.calc(c),va.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new H().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function id(i,t){const e=1-i;return e*e*t}function rd(i,t){return 2*(1-i)*i*t}function sd(i,t){return i*i*t}function mr(i,t,e,n){return id(i,t)+rd(i,e)+sd(i,n)}function ad(i,t){const e=1-i;return e*e*e*t}function od(i,t){const e=1-i;return 3*e*e*i*t}function ld(i,t){return 3*(1-i)*i*i*t}function cd(i,t){return i*i*i*t}function gr(i,t,e,n,r){return ad(i,t)+od(i,e)+ld(i,n)+cd(i,r)}class Ch extends Sn{constructor(t=new yt,e=new yt,n=new yt,r=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new yt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,r.x,s.x,a.x,o.x),gr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hd extends Sn{constructor(t=new H,e=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new H){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,r.x,s.x,a.x,o.x),gr(t,r.y,s.y,a.y,o.y),gr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rh extends Sn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends Sn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends Sn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(mr(t,r.x,s.x,a.x),mr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fd extends Sn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(mr(t,r.x,s.x,a.x),mr(t,r.y,s.y,a.y),mr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],f=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(nc(o,c.x,l.x,f.x,u.x),nc(o,c.y,l.y,f.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new yt().fromArray(r))}return this}}var bo=Object.freeze({__proto__:null,ArcCurve:ed,CatmullRomCurve3:nd,CubicBezierCurve:Ch,CubicBezierCurve3:hd,EllipseCurve:Qo,LineCurve:Rh,LineCurve3:ud,QuadraticBezierCurve:Ph,QuadraticBezierCurve3:fd,SplineCurve:Ih});class dd extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const f=c[l];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new bo[r.type]().fromJSON(r))}return this}}class ic extends dd{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rh(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Ph(this.currentPoint.clone(),new yt(t,e),new yt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Ch(this.currentPoint.clone(),new yt(t,e),new yt(n,r),new yt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ih(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+l,e+f,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new Qo(t,e,n,r,s,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class pd extends ic{constructor(t){super(t),this.uuid=$e(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new ic().fromJSON(r))}return this}}function md(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Dh(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=yd(i,t,s,e)),i.length>80*e){o=i[0],c=i[1];let f=o,u=c;for(let h=e;h<r;h+=e){const m=i[h],g=i[h+1];m<o&&(o=m),g<c&&(c=g),m>f&&(f=m),g>u&&(u=g)}l=Math.max(f-o,u-c),l=l!==0?32767/l:0}return Sr(s,a,e,o,c,l,0),a}function Dh(i,t,e,n,r){let s;if(r===Id(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=rc(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=rc(a/n|0,i[a],i[a+1],s);return s&&Vi(s,s.next)&&(Er(s),s=s.next),s}function ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vi(e,e.next)||pe(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Sr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&wd(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?_d(i,n,r,s):gd(i)){t.push(c.i,i.i,l.i),Er(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=vd(ui(i),t),Sr(i,t,e,n,r,s,2)):a===2&&xd(i,t,e,n,r,s):Sr(ui(i),t,e,n,r,s,1);break}}}function gd(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,c=e.y,l=n.y,f=Math.min(r,s,a),u=Math.min(o,c,l),h=Math.max(r,s,a),m=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=m&&hr(r,o,s,c,a,l,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _d(i,t,e,n){const r=i.prev,s=i,a=i.next;if(pe(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,f=r.y,u=s.y,h=a.y,m=Math.min(o,c,l),g=Math.min(f,u,h),v=Math.max(o,c,l),d=Math.max(f,u,h),p=Eo(m,g,t,e,n),x=Eo(v,d,t,e,n);let _=i.prevZ,S=i.nextZ;for(;_&&_.z>=p&&S&&S.z<=x;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=d&&_!==r&&_!==a&&hr(o,f,c,u,l,h,_.x,_.y)&&pe(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=d&&S!==r&&S!==a&&hr(o,f,c,u,l,h,S.x,S.y)&&pe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=d&&_!==r&&_!==a&&hr(o,f,c,u,l,h,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=x;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=d&&S!==r&&S!==a&&hr(o,f,c,u,l,h,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function vd(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Vi(n,r)&&Uh(n,e,e.next,r)&&br(n,r)&&br(r,n)&&(t.push(n.i,e.i,r.i),Er(e),Er(e.next),e=i=r),e=e.next}while(e!==i);return ui(e)}function xd(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cd(a,o)){let c=Nh(a,o);a=ui(a,a.next),c=ui(c,c.next),Sr(a,t,e,n,r,s,0),Sr(c,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function yd(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,c=s<a-1?t[s+1]*n:i.length,l=Dh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Ad(l))}r.sort(Md);for(let s=0;s<r.length;s++)e=Sd(r[s],e);return e}function Md(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Sd(i,t){const e=bd(i,t);if(!e)return t;const n=Nh(e,i);return ui(n,n.next),ui(e,e.next)}function bd(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(Vi(i,e))return e;do{if(Vi(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let f=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Lh(r<l?n:s,r,c,l,r<l?s:n,r,e.x,e.y)){const u=Math.abs(r-e.y)/(n-e.x);br(e,i)&&(u<f||u===f&&(e.x>a.x||e.x===a.x&&Ed(a,e)))&&(a=e,f=u)}e=e.next}while(e!==o);return a}function Ed(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function wd(i,t,e,n){let r=i;do r.z===0&&(r.z=Eo(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Td(r)}function Td(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function Eo(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Lh(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function hr(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&Lh(i,t,e,n,r,s,a,o)}function Cd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rd(i,t)&&(br(i,t)&&br(t,i)&&Pd(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Vi(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vi(i,t){return i.x===t.x&&i.y===t.y}function Uh(i,t,e,n){const r=rs(pe(i,t,e)),s=rs(pe(i,t,n)),a=rs(pe(e,n,i)),o=rs(pe(e,n,t));return!!(r!==s&&a!==o||r===0&&is(i,e,t)||s===0&&is(i,n,t)||a===0&&is(e,i,n)||o===0&&is(e,t,n))}function is(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rs(i){return i>0?1:i<0?-1:0}function Rd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function br(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Pd(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nh(i,t){const e=wo(i.i,i.x,i.y),n=wo(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function rc(i,t,e,n){const r=wo(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Id(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Dd{static triangulate(t,e,n=2){return md(t,e,n)}}class Li{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Li.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];sc(t),ac(n,t);let a=t.length;e.forEach(sc);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,ac(n,e[c]);const o=Dd.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function sc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ac(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fh extends ye{constructor(t=new pd([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ue(r,3)),this.setAttribute("uv",new ue(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Ld;let _,S=!1,E,M,w,y;if(p){_=p.getSpacedPoints(f),S=!0,h=!1;const et=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(f,et),M=new H,w=new H,y=new H}h||(d=0,m=0,g=0,v=0);const b=o.extractPoints(l);let D=b.shape;const A=b.holes;if(!Li.isClockWise(D)){D=D.reverse();for(let et=0,rt=A.length;et<rt;et++){const Z=A[et];Li.isClockWise(Z)&&(A[et]=Z.reverse())}}function P(et){const Z=10000000000000001e-36;let ct=et[0];for(let U=1;U<=et.length;U++){const Pt=U%et.length,xt=et[Pt],St=xt.x-ct.x,gt=xt.y-ct.y,I=St*St+gt*gt,T=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(ct.x),Math.abs(ct.y)),W=Z*T*T;if(I<=W){et.splice(Pt,1),U--;continue}ct=xt}}P(D),A.forEach(P);const L=A.length,B=D;for(let et=0;et<L;et++){const rt=A[et];D=D.concat(rt)}function z(et,rt,Z){return rt||Wt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(rt,Z)}const O=D.length;function N(et,rt,Z){let ct,U,Pt;const xt=et.x-rt.x,St=et.y-rt.y,gt=Z.x-et.x,I=Z.y-et.y,T=xt*xt+St*St,W=xt*I-St*gt;if(Math.abs(W)>Number.EPSILON){const Y=Math.sqrt(T),it=Math.sqrt(gt*gt+I*I),$=rt.x-St/Y,wt=rt.y+xt/Y,dt=Z.x-I/it,At=Z.y+gt/it,Tt=((dt-$)*I-(At-wt)*gt)/(xt*I-St*gt);ct=$+xt*Tt-et.x,U=wt+St*Tt-et.y;const at=ct*ct+U*U;if(at<=2)return new yt(ct,U);Pt=Math.sqrt(at/2)}else{let Y=!1;xt>Number.EPSILON?gt>Number.EPSILON&&(Y=!0):xt<-Number.EPSILON?gt<-Number.EPSILON&&(Y=!0):Math.sign(St)===Math.sign(I)&&(Y=!0),Y?(ct=-St,U=xt,Pt=Math.sqrt(T)):(ct=xt,U=St,Pt=Math.sqrt(T/2))}return new yt(ct/Pt,U/Pt)}const F=[];for(let et=0,rt=B.length,Z=rt-1,ct=et+1;et<rt;et++,Z++,ct++)Z===rt&&(Z=0),ct===rt&&(ct=0),F[et]=N(B[et],B[Z],B[ct]);const k=[];let V,q=F.concat();for(let et=0,rt=L;et<rt;et++){const Z=A[et];V=[];for(let ct=0,U=Z.length,Pt=U-1,xt=ct+1;ct<U;ct++,Pt++,xt++)Pt===U&&(Pt=0),xt===U&&(xt=0),V[ct]=N(Z[ct],Z[Pt],Z[xt]);k.push(V),q=q.concat(V)}let ot;if(d===0)ot=Li.triangulateShape(B,A);else{const et=[],rt=[];for(let Z=0;Z<d;Z++){const ct=Z/d,U=m*Math.cos(ct*Math.PI/2),Pt=g*Math.sin(ct*Math.PI/2)+v;for(let xt=0,St=B.length;xt<St;xt++){const gt=z(B[xt],F[xt],Pt);vt(gt.x,gt.y,-U),ct===0&&et.push(gt)}for(let xt=0,St=L;xt<St;xt++){const gt=A[xt];V=k[xt];const I=[];for(let T=0,W=gt.length;T<W;T++){const Y=z(gt[T],V[T],Pt);vt(Y.x,Y.y,-U),ct===0&&I.push(Y)}ct===0&&rt.push(I)}}ot=Li.triangulateShape(et,rt)}const ht=ot.length,ut=g+v;for(let et=0;et<O;et++){const rt=h?z(D[et],q[et],ut):D[et];S?(w.copy(E.normals[0]).multiplyScalar(rt.x),M.copy(E.binormals[0]).multiplyScalar(rt.y),y.copy(_[0]).add(w).add(M),vt(y.x,y.y,y.z)):vt(rt.x,rt.y,0)}for(let et=1;et<=f;et++)for(let rt=0;rt<O;rt++){const Z=h?z(D[rt],q[rt],ut):D[rt];S?(w.copy(E.normals[et]).multiplyScalar(Z.x),M.copy(E.binormals[et]).multiplyScalar(Z.y),y.copy(_[et]).add(w).add(M),vt(y.x,y.y,y.z)):vt(Z.x,Z.y,u/f*et)}for(let et=d-1;et>=0;et--){const rt=et/d,Z=m*Math.cos(rt*Math.PI/2),ct=g*Math.sin(rt*Math.PI/2)+v;for(let U=0,Pt=B.length;U<Pt;U++){const xt=z(B[U],F[U],ct);vt(xt.x,xt.y,u+Z)}for(let U=0,Pt=A.length;U<Pt;U++){const xt=A[U];V=k[U];for(let St=0,gt=xt.length;St<gt;St++){const I=z(xt[St],V[St],ct);S?vt(I.x,I.y+_[f-1].y,_[f-1].x+Z):vt(I.x,I.y,u+Z)}}}G(),J();function G(){const et=r.length/3;if(h){let rt=0,Z=O*rt;for(let ct=0;ct<ht;ct++){const U=ot[ct];ft(U[2]+Z,U[1]+Z,U[0]+Z)}rt=f+d*2,Z=O*rt;for(let ct=0;ct<ht;ct++){const U=ot[ct];ft(U[0]+Z,U[1]+Z,U[2]+Z)}}else{for(let rt=0;rt<ht;rt++){const Z=ot[rt];ft(Z[2],Z[1],Z[0])}for(let rt=0;rt<ht;rt++){const Z=ot[rt];ft(Z[0]+O*f,Z[1]+O*f,Z[2]+O*f)}}n.addGroup(et,r.length/3-et,0)}function J(){const et=r.length/3;let rt=0;nt(B,rt),rt+=B.length;for(let Z=0,ct=A.length;Z<ct;Z++){const U=A[Z];nt(U,rt),rt+=U.length}n.addGroup(et,r.length/3-et,1)}function nt(et,rt){let Z=et.length;for(;--Z>=0;){const ct=Z;let U=Z-1;U<0&&(U=et.length-1);for(let Pt=0,xt=f+d*2;Pt<xt;Pt++){const St=O*Pt,gt=O*(Pt+1),I=rt+ct+St,T=rt+U+St,W=rt+U+gt,Y=rt+ct+gt;bt(I,T,W,Y)}}}function vt(et,rt,Z){c.push(et),c.push(rt),c.push(Z)}function ft(et,rt,Z){Ut(et),Ut(rt),Ut(Z);const ct=r.length/3,U=x.generateTopUV(n,r,ct-3,ct-2,ct-1);_t(U[0]),_t(U[1]),_t(U[2])}function bt(et,rt,Z,ct){Ut(et),Ut(rt),Ut(ct),Ut(rt),Ut(Z),Ut(ct);const U=r.length/3,Pt=x.generateSideWallUV(n,r,U-6,U-3,U-2,U-1);_t(Pt[0]),_t(Pt[1]),_t(Pt[3]),_t(Pt[1]),_t(Pt[2]),_t(Pt[3])}function Ut(et){r.push(c[et*3+0]),r.push(c[et*3+1]),r.push(c[et*3+2])}function _t(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ud(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new bo[r.type]().fromJSON(r)),new Fh(n,t.options)}}const Ld={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[r*3],f=t[r*3+1];return[new yt(s,a),new yt(o,c),new yt(l,f)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],f=t[n*3+1],u=t[n*3+2],h=t[r*3],m=t[r*3+1],g=t[r*3+2],v=t[s*3],d=t[s*3+1],p=t[s*3+2];return Math.abs(o-f)<Math.abs(a-l)?[new yt(a,1-c),new yt(l,1-u),new yt(h,1-g),new yt(v,1-p)]:[new yt(o,1-c),new yt(f,1-u),new yt(m,1-g),new yt(d,1-p)]}};function Ud(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oh extends Ko{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oh(t.radius,t.detail)}}class Tr extends ye{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,u=t/o,h=e/c,m=[],g=[],v=[],d=[];for(let p=0;p<f;p++){const x=p*h-a;for(let _=0;_<l;_++){const S=_*u-s;g.push(S,-x,0),v.push(0,0,1),d.push(_/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const _=x+l*p,S=x+l*(p+1),E=x+1+l*(p+1),M=x+1+l*p;m.push(_,S,M),m.push(S,E,M)}this.setIndex(m),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.widthSegments,t.heightSegments)}}class el extends ye{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const f=[],u=new H,h=new H,m=[],g=[],v=[],d=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let E=0;E<=e;E++){const M=E/e;u.x=-t*Math.cos(r+M*s)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(r+M*s)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),d.push(M+S,1-_),x.push(l++)}f.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=f[p][x+1],S=f[p][x],E=f[p+1][x],M=f[p+1][x+1];(p!==0||a>0)&&m.push(_,S,M),(p!==n-1||c<Math.PI)&&m.push(S,E,M)}this.setIndex(m),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bh extends ye{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],f=[],u=[],h=new H,m=new H,g=new H;for(let v=0;v<=n;v++){const d=a+v/n*o;for(let p=0;p<=r;p++){const x=p/r*s;m.x=(t+e*Math.cos(d))*Math.cos(x),m.y=(t+e*Math.cos(d))*Math.sin(x),m.z=e*Math.sin(d),l.push(m.x,m.y,m.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),g.subVectors(m,h).normalize(),f.push(g.x,g.y,g.z),u.push(p/r),u.push(v/n)}}for(let v=1;v<=n;v++)for(let d=1;d<=r;d++){const p=(r+1)*v+d-1,x=(r+1)*(v-1)+d-1,_=(r+1)*(v-1)+d,S=(r+1)*v+d;c.push(p,x,S),c.push(x,_,S)}this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const r in n)t[r]=n[r]}return t}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Fd={clone:Hi,merge:Ue};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kd extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zh extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Av extends zh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zd extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vd extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hd extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gd(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function oc(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let c=0;c!==t;++c)r[a++]=i[o+c]}return r}function Vh(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=i[r++];while(s!==void 0)}class Ar{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=e[++n],t<r)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wd extends Ar{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ii,endingEnd:Ii}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Di:s=t,o=2*e-n;break;case Ss:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Di:a=t,c=2*n-e;break;case Ss:a=1,c=n+r[1]-r[0];break;default:a=t-1,c=e}const l=(n-e)*.5,f=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),v=g*g,d=v*g,p=-h*d+2*h*v-h*g,x=(1+h)*d+(-1.5-2*h)*v+(-.5+h)*g+1,_=(-1-m)*d+(1.5+m)*v+.5*g,S=m*d-m*v;for(let E=0;E!==o;++E)s[E]=p*a[f+E]+x*a[l+E]+_*a[c+E]+S*a[u+E];return s}}class Hh extends Ar{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,f=(n-e)/(r-e),u=1-f;for(let h=0;h!==o;++h)s[h]=a[l+h]*u+a[c+h]*f;return s}}class Xd extends Ar{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Yd extends Ar{interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,f=this.settings||this.DefaultSettings_,u=f.inTangents,h=f.outTangents;if(!u||!h){const v=(n-e)/(r-e),d=1-v;for(let p=0;p!==o;++p)s[p]=a[l+p]*d+a[c+p]*v;return s}const m=o*2,g=t-1;for(let v=0;v!==o;++v){const d=a[l+v],p=a[c+v],x=g*m+v*2,_=h[x],S=h[x+1],E=t*m+v*2,M=u[E],w=u[E+1];let y=(n-e)/(r-e),b,D,A,C,P;for(let L=0;L<8;L++){b=y*y,D=b*y,A=1-y,C=A*A,P=C*A;const z=P*e+3*C*y*_+3*A*b*M+D*r-n;if(Math.abs(z)<1e-10)break;const O=3*C*(_-e)+6*A*y*(M-_)+3*b*(r-M);if(Math.abs(O)<1e-10)break;y=y-z/O,y=Math.max(0,Math.min(1,y))}s[v]=P*d+3*C*y*S+3*A*b*w+D*p}return s}}class ln{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ss(e,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ss(t.times,Array),values:ss(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Yd(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Ms:e=this.InterpolantFactoryMethodDiscrete;break;case yo:e=this.InterpolantFactoryMethodLinear;break;case Ws:e=this.InterpolantFactoryMethodSmooth;break;case Sl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return Ws;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Wt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Wt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&sf(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){Wt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ws,s=t.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=t[o],f=t[o+1];if(l!==f&&(o!==1||l!==t[0]))if(r)c=!0;else{const u=o*n,h=u-n,m=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[h+g]||v!==e[m+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,h=a*n;for(let m=0;m!==n;++m)e[h+m]=e[u+m]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=yo;class Xi extends ln{constructor(t,e,n){super(t,e,n)}}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ms;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gh extends ln{constructor(t,e,n,r){super(t,e,n,r)}}Gh.prototype.ValueTypeName="color";class Rs extends ln{constructor(t,e,n,r){super(t,e,n,r)}}Rs.prototype.ValueTypeName="number";class qd extends Ar{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(r-e);let l=t*o;for(let f=l+o;l!==f;l+=4)Ke.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Ns extends ln{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new qd(this.times,this.values,this.getValueSize(),t)}}Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends ln{constructor(t,e,n){super(t,e,n)}}Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ms;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends ln{constructor(t,e,n,r){super(t,e,n,r)}}Ps.prototype.ValueTypeName="vector";class lc{constructor(t="",e=-1,n=[],r=Vo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=$e(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Zd(n[a]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=n.length;s!==a;++s)e.push(ln.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const f=Gd(c);c=oc(c,1,f),l=oc(l,1,f),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Rs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],f=l.name.match(s);if(f&&f.length>1){const u=f[1];let h=r[u];h||(r[u]=h=[]),h.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],e,n));return a}static parseAnimation(t,e){if(Vt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Wt("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,m,g,v){if(m.length!==0){const d=[],p=[];Vh(m,d,p,g),d.length!==0&&v.push(new u(h,d,p))}},r=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const h=l[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)m[h[g].morphTargets[v]]=-1;for(const v in m){const d=[],p=[];for(let x=0;x!==h[g].morphTargets.length;++x){const _=h[g];d.push(_.time),p.push(_.morphTarget===v?1:0)}r.push(new Rs(".morphTargetInfluence["+v+"]",d,p))}c=m.length*a}else{const m=".bones["+e[u].name+"]";n(Ps,m+".position",h,"pos",r),n(Ns,m+".quaternion",h,"rot",r),n(Ps,m+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function jd(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Ps;case"color":return Gh;case"quaternion":return Ns;case"bool":case"boolean":return Xi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zd(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=jd(i.type);if(i.times===void 0){const e=[],n=[];Vh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Ge={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(cc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!cc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function cc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Wh{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jd=new Wh;class qi{constructor(t){this.manager=t!==void 0?t:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class $d extends Error{constructor(t,e){super(t),this.response=e}}class Kd extends qi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ge.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Cn[t]!==void 0){Cn[t].push({onLoad:e,onProgress:n,onError:r});return}Cn[t]=[],Cn[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Vt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=Cn[t],u=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let v=0;const d=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:S})=>{if(_)p.close();else{v+=S.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let M=0,w=f.length;M<w;M++){const y=f[M];y.onProgress&&y.onProgress(E)}p.enqueue(S),x()}},_=>{p.error(_)})}}});return new Response(d)}else throw new $d(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Ge.add(`file:${t}`,l);const f=Cn[t];delete Cn[t];for(let u=0,h=f.length;u<h;u++){const m=f[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const f=Cn[t];if(f===void 0)throw this.manager.itemError(t),l;delete Cn[t];for(let u=0,h=f.length;u<h;u++){const m=f[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ti=new WeakMap;class Cr extends qi{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ge.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=Ti.get(a);u===void 0&&(u=[],Ti.set(a,u)),u.push({onLoad:e,onError:r})}return a}const o=yr("img");function c(){f(),e&&e(this);const u=Ti.get(this)||[];for(let h=0;h<u.length;h++){const m=u[h];m.onLoad&&m.onLoad(this)}Ti.delete(this),s.manager.itemEnd(t)}function l(u){f(),r&&r(u),Ge.remove(`image:${t}`);const h=Ti.get(this)||[];for(let m=0;m<h.length;m++){const g=h[m];g.onError&&g.onError(u)}Ti.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ge.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Cv extends qi{constructor(t){super(t)}load(t,e,n,r){const s=new $o;s.colorSpace=Oe;const a=new Cr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(t[l],function(f){s.images[l]=f,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,r)}for(let l=0;l<t.length;++l)c(l);return s}}class Rv extends qi{constructor(t){super(t)}load(t,e,n,r){const s=new ge,a=new Cr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Fs extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const xa=new Qt,hc=new H,uc=new H;class nl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=He,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(hc),uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uc),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===xr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const as=new H,os=new Ke,hn=new H;class Xh extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(as,os,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,os,hn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(as,os,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,os,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new H,fc=new yt,dc=new yt;class Ne extends Xh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,fc,dc),e.subVectors(dc,fc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qd extends nl{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=zi*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Pv extends Fs{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Qd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class tp extends nl{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}}class Iv extends Fs{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new tp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class il extends Xh{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ep extends nl{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class np extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new ep}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class ip extends Fs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dv{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const ya=new WeakMap;class Lv extends qi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Vt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Vt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ge.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{if(ya.has(a)===!0)r&&r(ya.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(l),s.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ge.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){r&&r(l),ya.set(c,l),Ge.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Ge.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ai=-90,Ci=1;class rp extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ne(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const s=new Ne(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const a=new Ne(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const o=new Ne(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const c=new Ne(Ai,Ci,t,e);c.layers=this.layers,this.add(c);const l=new Ne(Ai,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sp extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Uv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ap.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ap(){this._document.hidden===!1&&this.reset()}class op{constructor(t,e,n){this.binding=t,this.valueSize=n;let r,s,a;switch(e){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,r=this.valueSize,s=t*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,r,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,r=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,r,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,r);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,r=n*this._origIndex;t.getValue(e,r);for(let s=n,a=r;s!==a;++s)e[s]=e[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,r){Ke.slerpFlat(t,e,t,e,t,n,r)}_slerpAdditive(t,e,n,r,s){const a=this._workIndex*s;Ke.multiplyQuaternionsFlat(t,a,t,e,t,n),Ke.slerpFlat(t,e,t,e,t,a,r)}_lerp(t,e,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*r}}_lerpAdditive(t,e,n,r,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[n+a]*r}}}const rl="\\[\\]\\.:\\/",lp=new RegExp("["+rl+"]","g"),sl="[^"+rl+"]",cp="[^"+rl.replace("\\.","")+"]",hp=/((?:WC+[\/:])*)/.source.replace("WC",sl),up=/(WCOD+)?/.source.replace("WCOD",cp),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),pp=new RegExp("^"+hp+up+fp+dp+"$"),mp=["material","materials","bones","map"];class gp{constructor(t,e,n){const r=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(t){const e=pp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);mp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let s=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===l){l=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[r];if(a===void 0){const l=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=gp;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _p{constructor(t,e,n=null,r=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=r;const s=e.tracks,a=s.length,o=new Array(a),c={endingStart:Ii,endingEnd:Ii};for(let l=0;l!==a;++l){const f=s[l].createInterpolant(null);o[l]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const r=this._clip.duration,s=t._clip.duration,a=s/r,o=r/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,r){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ju:for(let f=0,u=c.length;f!==u;++f)c[f].evaluate(a),l[f].accumulateAdditive(o);break;case Vo:default:for(let f=0,u=c.length;f!==u;++f)c[f].evaluate(a),l[f].accumulate(r,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let r=this.time+t,s=this._loopCount;const a=n===qu;if(t===0)return s===-1?r:a&&(s&1)===1?e-r:r;if(n===Xu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=e)r=e;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=e||r<0){const o=Math.floor(r/e);r-=e*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?e:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return e-r}return r}_setEndings(t,e,n){const r=this._interpolantSettings;n?(r.endingStart=Di,r.endingEnd=Di):(t?r.endingStart=this.zeroSlopeAtStart?Di:Ii:r.endingStart=Ss,e?r.endingEnd=this.zeroSlopeAtEnd?Di:Ii:r.endingEnd=Ss)}_scheduleFading(t,e,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=n,this}}const vp=new Float32Array(1);class Nv extends Fn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,r=t._clip.tracks,s=r.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let f=l[c];f===void 0&&(f={},l[c]=f);for(let u=0;u!==s;++u){const h=r[u],m=h.name;let g=f[m];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,m));continue}const v=e&&e._propertyBindings[u].binding.parsedPath;g=new op(ae.create(n,m,v),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,m),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,r=t._clip.uuid,s=this._actionsByClip[r];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,r,n)}const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const r=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=r.length,r.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],r=t._cacheIndex;n._cacheIndex=r,e[r]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],f=t._byClipCacheIndex;l._byClipCacheIndex=f,c[f]=l,c.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete u[h],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,r=this._nActiveActions++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,r=--this._nActiveActions,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[e];a===void 0&&(a={},r[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,r=this._nActiveBindings++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,r=--this._nActiveBindings,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Hh(new Float32Array(2),new Float32Array(2),1,vp),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,r=--this._nActiveControlInterpolants,s=e[r];t.__cacheIndex=r,e[r]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const r=e||this._root,s=r.uuid;let a=typeof t=="string"?lc.findByName(r,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Vo),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const f=new _p(this,a,e,n);return this._bindAction(f,l),this._addInactiveAction(f,o,s),f}existingAction(t,e){const n=e||this._root,r=n.uuid,s=typeof t=="string"?lc.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,r=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(r,t,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const f=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=f,e[f]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete r[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const pc=new Qt;class Yh{constructor(t,e,n=0,r=1/0){this.ray=new Wi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pc),this}intersectObject(t,e=!0,n=[]){return To(t,this,n,e),n.sort(mc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)To(t[r],this,n,e);return n.sort(mc),n}}function mc(i,t){return i.distance-t.distance}function To(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)To(s[a],t,e,!0)}}class gc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _c=new H,ls=new H,vc=new H;class Fv extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let r=new ye;r.setAttribute("position",new ue([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new Jo({fog:!1,toneMapped:!1});this.lightPlane=new Cs(r,s),this.add(this.lightPlane),r=new ye,r.setAttribute("position",new ue([0,0,0,0,0,1],3)),this.targetLine=new Cs(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),_c.setFromMatrixPosition(this.light.matrixWorld),ls.setFromMatrixPosition(this.light.target.matrixWorld),vc.subVectors(ls,_c),this.lightPlane.lookAt(ls),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ls),this.targetLine.scale.z=vc.length()}}const cs=new Qe;class Ov extends $f{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new ye;s.setIndex(new we(n,1)),s.setAttribute("position",new we(r,3)),super(s,new Jo({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&cs.setFromObject(this.object),cs.isEmpty())return;const t=cs.min,e=cs.max,n=this.geometry.attributes.position,r=n.array;r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=t.x,r[4]=e.y,r[5]=e.z,r[6]=t.x,r[7]=t.y,r[8]=e.z,r[9]=e.x,r[10]=t.y,r[11]=e.z,r[12]=e.x,r[13]=e.y,r[14]=t.z,r[15]=t.x,r[16]=e.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=e.x,r[22]=t.y,r[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class xp extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Vt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function xc(i,t,e,n){const r=yp(n);switch(e){case gh:return i*t;case Oo:return i*t/r.components*r.byteLength;case Bo:return i*t/r.components*r.byteLength;case Bi:return i*t*2/r.components*r.byteLength;case ko:return i*t*2/r.components*r.byteLength;case _h:return i*t*3/r.components*r.byteLength;case Je:return i*t*4/r.components*r.byteLength;case zo:return i*t*4/r.components*r.byteLength;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case Ya:case ja:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vo:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(i){switch(i){case He:case fh:return{byteLength:1,components:1};case _r:case dh:case Un:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case vn:case Uo:case Ze:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Mp(i){const t=new WeakMap;function e(o,c){const l=o.array,f=o.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const f=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,f);else{u.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<u.length;m++){const g=u[h],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];i.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,p0=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,y0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,M0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,km=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
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
}`,Wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Xm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,qm=`#define TOON
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
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Zm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Km=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Qm=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Cp,aomap_pars_fragment:Rp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Lp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:zp,color_fragment:Vp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:qp,displacementmap_pars_vertex:jp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:$p,colorspace_fragment:Kp,colorspace_pars_fragment:Qp,envmap_fragment:t0,envmap_common_pars_fragment:e0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:r0,fog_vertex:s0,fog_pars_vertex:a0,fog_fragment:o0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:h0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:f0,lights_pars_begin:d0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:_0,lights_phong_pars_fragment:v0,lights_physical_fragment:x0,lights_physical_pars_fragment:y0,lights_fragment_begin:M0,lights_fragment_maps:S0,lights_fragment_end:b0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:A0,map_fragment:C0,map_pars_fragment:R0,map_particle_fragment:P0,map_particle_pars_fragment:I0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:L0,morphinstance_vertex:U0,morphcolor_vertex:N0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:B0,normal_fragment_begin:k0,normal_fragment_maps:z0,normal_pars_fragment:V0,normal_pars_vertex:H0,normal_vertex:G0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:j0,opaque_fragment:Z0,packing:J0,premultiplied_alpha_fragment:$0,project_vertex:K0,dithering_fragment:Q0,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:rm,shadowmap_vertex:sm,shadowmask_pars_fragment:am,skinbase_vertex:om,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:fm,tonemapping_fragment:dm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:xm,worldpos_vertex:ym,background_vert:Mm,background_frag:Sm,backgroundCube_vert:bm,backgroundCube_frag:Em,cube_vert:wm,cube_frag:Tm,depth_vert:Am,depth_frag:Cm,distance_vert:Rm,distance_frag:Pm,equirect_vert:Im,equirect_frag:Dm,linedashed_vert:Lm,linedashed_frag:Um,meshbasic_vert:Nm,meshbasic_frag:Fm,meshlambert_vert:Om,meshlambert_frag:Bm,meshmatcap_vert:km,meshmatcap_frag:zm,meshnormal_vert:Vm,meshnormal_frag:Hm,meshphong_vert:Gm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:Ym,meshtoon_vert:qm,meshtoon_frag:jm,points_vert:Zm,points_frag:Jm,shadow_vert:$m,shadow_frag:Km,sprite_vert:Qm,sprite_frag:tg},Rt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},fn={basic:{uniforms:Ue([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ue([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ue([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ue([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ue([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ue([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ue([Rt.points,Rt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ue([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ue([Rt.common,Rt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ue([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ue([Rt.sprite,Rt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ue([Rt.common,Rt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ue([Rt.lights,Rt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};fn.physical={uniforms:Ue([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const hs={r:0,b:0,g:0},ei=new on,eg=new Qt;function ng(i,t,e,n,r,s){const a=new Jt(0);let o=r===!0?0:1,c,l,f=null,u=0,h=null;function m(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){const S=x.backgroundBlurriness>0;_=t.get(_,S)}return _}function g(x){let _=!1;const S=m(x);S===null?d(a,o):S&&S.isColor&&(d(S,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,_){const S=m(_);S&&(S.isCubeTexture||S.mapping===Ds)?(l===void 0&&(l=new De(new wr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Hi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),ei.copy(_.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(ei)),l.material.toneMapped=te.getTransfer(S.colorSpace)!==re,(f!==S||u!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,u=S.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new De(new Tr(2,2),new xn({name:"BackgroundMaterial",uniforms:Hi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==re,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,_){x.getRGB(hs,kh(i)),e.buffers.color.setClear(hs.r,hs.g,hs.b,_,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),o=_,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,d(a,o)},render:g,addToRenderList:v,dispose:p}}function ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(A,C,P,L,B){let z=!1;const O=u(A,L,P,C);s!==O&&(s=O,l(s.object)),z=m(A,L,P,B),z&&g(A,L,P,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(A,C,P,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function f(A){return i.deleteVertexArray(A)}function u(A,C,P,L){const B=L.wireframe===!0;let z=n[C.id];z===void 0&&(z={},n[C.id]=z);const O=A.isInstancedMesh===!0?A.id:0;let N=z[O];N===void 0&&(N={},z[O]=N);let F=N[P.id];F===void 0&&(F={},N[P.id]=F);let k=F[B];return k===void 0&&(k=h(c()),F[B]=k),k}function h(A){const C=[],P=[],L=[];for(let B=0;B<e;B++)C[B]=0,P[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:L,object:A,attributes:{},index:null}}function m(A,C,P,L){const B=s.attributes,z=C.attributes;let O=0;const N=P.getAttributes();for(const F in N)if(N[F].location>=0){const V=B[F];let q=z[F];if(q===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),V===void 0||V.attribute!==q||q&&V.data!==q.data)return!0;O++}return s.attributesNum!==O||s.index!==L}function g(A,C,P,L){const B={},z=C.attributes;let O=0;const N=P.getAttributes();for(const F in N)if(N[F].location>=0){let V=z[F];V===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(V=A.instanceColor));const q={};q.attribute=V,V&&V.data&&(q.data=V.data),B[F]=q,O++}s.attributes=B,s.attributesNum=O,s.index=L}function v(){const A=s.newAttributes;for(let C=0,P=A.length;C<P;C++)A[C]=0}function d(A){p(A,0)}function p(A,C){const P=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;P[A]=1,L[A]===0&&(i.enableVertexAttribArray(A),L[A]=1),B[A]!==C&&(i.vertexAttribDivisor(A,C),B[A]=C)}function x(){const A=s.newAttributes,C=s.enabledAttributes;for(let P=0,L=C.length;P<L;P++)C[P]!==A[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function _(A,C,P,L,B,z,O){O===!0?i.vertexAttribIPointer(A,C,P,B,z):i.vertexAttribPointer(A,C,P,L,B,z)}function S(A,C,P,L){v();const B=L.attributes,z=P.getAttributes(),O=C.defaultAttributeValues;for(const N in z){const F=z[N];if(F.location>=0){let k=B[N];if(k===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),k!==void 0){const V=k.normalized,q=k.itemSize,ot=t.get(k);if(ot===void 0)continue;const ht=ot.buffer,ut=ot.type,G=ot.bytesPerElement,J=ut===i.INT||ut===i.UNSIGNED_INT||k.gpuType===Uo;if(k.isInterleavedBufferAttribute){const nt=k.data,vt=nt.stride,ft=k.offset;if(nt.isInstancedInterleavedBuffer){for(let bt=0;bt<F.locationSize;bt++)p(F.location+bt,nt.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<F.locationSize;bt++)d(F.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let bt=0;bt<F.locationSize;bt++)_(F.location+bt,q/F.locationSize,ut,V,vt*G,(ft+q/F.locationSize*bt)*G,J)}else{if(k.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)p(F.location+nt,k.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let nt=0;nt<F.locationSize;nt++)d(F.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let nt=0;nt<F.locationSize;nt++)_(F.location+nt,q/F.locationSize,ut,V,q*G,q/F.locationSize*nt*G,J)}}else if(O!==void 0){const V=O[N];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(F.location,V);break;case 3:i.vertexAttrib3fv(F.location,V);break;case 4:i.vertexAttrib4fv(F.location,V);break;default:i.vertexAttrib1fv(F.location,V)}}}}x()}function E(){b();for(const A in n){const C=n[A];for(const P in C){const L=C[P];for(const B in L){const z=L[B];for(const O in z)f(z[O].object),delete z[O];delete L[B]}}delete n[A]}}function M(A){if(n[A.id]===void 0)return;const C=n[A.id];for(const P in C){const L=C[P];for(const B in L){const z=L[B];for(const O in z)f(z[O].object),delete z[O];delete L[B]}}delete n[A.id]}function w(A){for(const C in n){const P=n[C];for(const L in P){const B=P[L];if(B[A.id]===void 0)continue;const z=B[A.id];for(const O in z)f(z[O].object),delete z[O];delete B[A.id]}}}function y(A){for(const C in n){const P=n[C],L=A.isInstancedMesh===!0?A.id:0,B=P[L];if(B!==void 0){for(const z in B){const O=B[z];for(const N in O)f(O[N].object),delete O[N];delete B[z]}delete P[L],Object.keys(P).length===0&&delete n[C]}}}function b(){D(),a=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:d,disableUnusedAttributes:x}}function rg(i,t,e){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),e.update(f,n,1)}function a(l,f,u){u!==0&&(i.drawArraysInstanced(n,l,f,u),e.update(f,n,u))}function o(l,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,u);let m=0;for(let g=0;g<u;g++)m+=f[g];e.update(m,n,1)}function c(l,f,u,h){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],f[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,f,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=f[v]*h[v];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Je&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const y=w===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==He&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ze&&!y)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const f=c(l);f!==l&&(Vt("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:S,maxSamples:E,samples:M}}function ag(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Xn,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,m){const g=u.clippingPlanes,v=u.clipIntersection,d=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!d)s?f(null):l();else{const x=s?0:n,_=x*4;let S=p.clippingState||null;c.value=S,S=f(g,h,_,m);for(let E=0;E!==_;++E)S[E]=e[E];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,m,g){const v=u!==null?u.length:0;let d=null;if(v!==0){if(d=c.value,g!==!0||d===null){const p=m+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<p)&&(d=new Float32Array(p));for(let _=0,S=m;_!==v;++_,S+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(d,S),d[S+3]=a.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}const qn=4,yc=[.125,.215,.35,.446,.526,.582],ri=20,og=256,sr=new il,Mc=new Jt;let Ma=null,Sa=0,ba=0,Ea=!1;const lg=new H;class Sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=lg}=s;Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,Sa,ba),this._renderer.xr.enabled=Ea,t.scissorTest=!1,Ri(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:Un,format:Je,colorSpace:ki,depthBuffer:!1},r=bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cg(s)),this._blurMaterial=ug(s,t,e),this._ggxMaterial=hg(s,t,e)}return r}_compileMaterial(t){const e=new De(new ye,t);this._renderer.compile(e,sr)}_sceneToCubeUV(t,e,n,r,s){const c=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Mc),u.toneMapping=mn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new wr,new jo({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,d=v.material;let p=!1;const x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,p=!0):(d.color.copy(Mc),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[_],s.y,s.z)):S===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[_]));const E=this._cubeSize;Ri(r,S*E,_>2?E:0,E,E),u.setRenderTarget(r),p&&u.render(v,c),u.render(t,c)}u.toneMapping=m,u.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===hi||t.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Ri(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),h=0+l*1.25,m=u*h,{_lodMax:g}=this,v=this._sizeLods[n],d=3*v*(n>g-qn?n-g+qn:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=g-e,Ri(s,d,p,3*v,2*v),r.setRenderTarget(s),r.render(o,sr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ri(t,d,p,3*v,2*v),r.setRenderTarget(t),r.render(o,sr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=l;const h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ri-1),v=s/g,d=isFinite(s)?1+Math.floor(f*v):ri;d>ri&&Vt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ri}`);const p=[];let x=0;for(let w=0;w<ri;++w){const y=w/v,b=Math.exp(-y*y/2);p.push(b),w===0?x+=b:w<d&&(x+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const S=this._sizeLods[r],E=3*S*(r>_-qn?r-_+qn:0),M=4*(this._cubeSize-S);Ri(e,E,M,3*S,2*S),c.setRenderTarget(e),c.render(u,sr)}}function cg(i){const t=[],e=[],n=[];let r=i;const s=i-qn+1+yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-qn?c=yc[a-i+qn-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,g=6,v=3,d=2,p=1,x=new Float32Array(v*g*m),_=new Float32Array(d*g*m),S=new Float32Array(p*g*m);for(let M=0;M<m;M++){const w=M%3*2/3-1,y=M>2?0:-1,b=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];x.set(b,v*g*M),_.set(h,d*g*M);const D=[M,M,M,M,M,M];S.set(D,p*g*M)}const E=new ye;E.setAttribute("position",new we(x,v)),E.setAttribute("uv",new we(_,d)),E.setAttribute("faceIndex",new we(S,p)),n.push(new De(E,null)),r>qn&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function bc(i,t,e){const n=new gn(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ri(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function hg(i,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Os(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ug(i,t,e){const n=new Float32Array(ri),r=new H(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Os(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ec(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function wc(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Os(){return`

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
	`}class jh extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new $o(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:In});s.uniforms.tEquirect.value=e;const a=new De(r,s),o=e.minFilter;return e.minFilter===si&&(e.minFilter=Ie),new rp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function fg(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Vs||m===Hs)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new jh(g.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,g=m===Vs||m===Hs,v=m===hi||m===Oi;if(g||v){let d=e.get(h);const p=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Sc(i)),d=g?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),d.texture;if(d!==void 0)return d.texture;{const x=h.image;return g&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new Sc(i)),d=g?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),h.addEventListener("dispose",f),d.texture):null}}}return h}function o(h,m){return m===Vs?h.mapping=hi:m===Hs&&(h.mapping=Oi),h}function c(h){let m=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&m++;return m===g}function l(h){const m=h.target;m.removeEventListener("dispose",l);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function dg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ws("WebGLRenderer: "+n+" extension not supported."),r}}}function pg(i,t,e,n){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const m in h)t.update(h[m],i.ARRAY_BUFFER)}function l(u){const h=[],m=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(m!==null){const x=m.array;v=m.version;for(let _=0,S=x.length;_<S;_+=3){const E=x[_+0],M=x[_+1],w=x[_+2];h.push(E,M,M,w,w,E)}}else{const x=g.array;v=g.version;for(let _=0,S=x.length/3-1;_<S;_+=3){const E=_+0,M=_+1,w=_+2;h.push(E,M,M,w,w,E)}}const d=new(g.count>=65535?bh:Sh)(h,1);d.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,d)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function mg(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,m){i.drawElements(n,m,s,h*a),e.update(m,n,1)}function l(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,h*a,g),e.update(m,n,g))}function f(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function u(h,m,g,v){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)l(h[p]/a,m[p],v[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x]*v[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function gg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _g(i,t,e){const n=new WeakMap,r=new fe;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let S=o.attributes.position.count*_,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const M=new Float32Array(S*E*4*u),w=new xh(M,S,E,u);w.type=Ze,w.needsUpdate=!0;const y=_*4;for(let D=0;D<u;D++){const A=d[D],C=p[D],P=x[D],L=S*E*4*D;for(let B=0;B<A.count;B++){const z=B*y;m===!0&&(r.fromBufferAttribute(A,B),M[L+z+0]=r.x,M[L+z+1]=r.y,M[L+z+2]=r.z,M[L+z+3]=0),g===!0&&(r.fromBufferAttribute(C,B),M[L+z+4]=r.x,M[L+z+5]=r.y,M[L+z+6]=r.z,M[L+z+7]=0),v===!0&&(r.fromBufferAttribute(P,B),M[L+z+8]=r.x,M[L+z+9]=r.y,M[L+z+10]=r.z,M[L+z+11]=P.itemSize===4?r.w:1)}}h={count:u,texture:w,size:new yt(S,E)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function vg(i,t,e,n,r){let s=new WeakMap;function a(l){const f=r.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==f&&(t.update(h),s.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return h}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const xg={[rh]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function yg(i,t,e,n,r){const s=new gn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new gn(t,e,{type:Un,depthBuffer:!1,stencilBuffer:!1}),o=new ye;o.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ue([0,2,0,0,2,0],2));const c=new kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new De(o,c),f=new il(-1,1,1,-1,0,1);let u=null,h=null,m=!1,g,v=null,d=[],p=!1;this.setSize=function(x,_){s.setSize(x,_),a.setSize(x,_);for(let S=0;S<d.length;S++){const E=d[S];E.setSize&&E.setSize(x,_)}},this.setEffects=function(x){d=x,p=d.length>0&&d[0].isRenderPass===!0;const _=s.width,S=s.height;for(let E=0;E<d.length;E++){const M=d[E];M.setSize&&M.setSize(_,S)}},this.begin=function(x,_){if(m||x.toneMapping===mn&&d.length===0)return!1;if(v=_,_!==null){const S=_.width,E=_.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return p===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=mn,!0},this.hasRenderPass=function(){return p},this.end=function(x,_){x.toneMapping=g,m=!0;let S=s,E=a;for(let M=0;M<d.length;M++){const w=d[M];if(w.enabled!==!1&&(w.render(x,E,S,_),w.needsSwap!==!1)){const y=S;S=E,E=y}}if(u!==x.outputColorSpace||h!==x.toneMapping){u=x.outputColorSpace,h=x.toneMapping,c.defines={},te.getTransfer(u)===re&&(c.defines.SRGB_TRANSFER="");const M=xg[h];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(v),x.render(l,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Zh=new ge,Ao=new Mr(1,1),Jh=new xh,$h=new Pf,Kh=new $o,Tc=[],Ac=[],Cc=new Float32Array(16),Rc=new Float32Array(9),Pc=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Tc[r];if(s===void 0&&(s=new Float32Array(r),Tc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bs(i,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Pc.set(n),i.uniformMatrix2fv(this.addr,!1,Pc),Se(e,n)}}function Tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Rc.set(n),i.uniformMatrix3fv(this.addr,!1,Rc),Se(e,n)}}function Ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),Se(e,n)}}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Fg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ao.compareFunction=e.isReversedDepthBuffer()?Wo:Go,s=Ao):s=Zh,e.setTexture2D(t||s,r)}function Og(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||$h,r)}function Bg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Kh,r)}function kg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Jh,r)}function zg(i){switch(i){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Lg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(i,t){i.uniform1fv(this.addr,t)}function Hg(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Gg(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yg(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jg(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function $g(i,t){i.uniform4iv(this.addr,t)}function Kg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function t_(i,t){i.uniform3uiv(this.addr,t)}function e_(i,t){i.uniform4uiv(this.addr,t)}function n_(i,t,e){const n=this.cache,r=t.length,s=Bs(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ao:a=Zh;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function i_(i,t,e){const n=this.cache,r=t.length,s=Bs(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||$h,s[a])}function r_(i,t,e){const n=this.cache,r=t.length,s=Bs(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Kh,s[a])}function s_(i,t,e){const n=this.cache,r=t.length,s=Bs(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Jh,s[a])}function a_(i){switch(i){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return Yg;case 35676:return qg;case 5124:case 35670:return jg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return Qg;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return s_}}class o_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class l_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}}class c_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Ic(i,t){i.seq.push(t),i.map[t.id]=t}function h_(i,t,e){const n=i.name,r=n.length;for(wa.lastIndex=0;;){const s=wa.exec(n),a=wa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ic(e,l===void 0?new o_(o,i,t):new l_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new c_(o),Ic(e,u)),e=u}}}class ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);h_(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const u_=37297;let f_=0;function d_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Lc=new jt;function p_(i){te._getMatrix(Lc,te.workingColorSpace,i);const t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case bs:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+d_(i.getShaderSource(t),o)}else return s}function m_(i,t){const e=p_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const g_={[rh]:"Linear",[sh]:"Reinhard",[ah]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function __(i,t){const e=g_[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const us=new H;function v_(){te.getLuminanceCoefficients(us);const i=us.x.toFixed(4),t=us.y.toFixed(4),e=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function y_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ur(i){return i!==""}function Nc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(S_,E_)}const b_=new Map;function E_(i,t){let e=$t[t];if(e===void 0){const n=b_.get(t);if(n!==void 0)e=$t[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(i){return i.replace(w_,T_)}function T_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const A_={[ms]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function C_(i){return A_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R_={[hi]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE_UV"};function P_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const I_={[Oi]:"ENVMAP_MODE_REFRACTION"};function D_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":I_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L_={[Lo]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function U_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":L_[i.combine]||"ENVMAP_BLENDING_NONE"}function N_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function F_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=C_(e),l=P_(e),f=D_(e),u=U_(e),h=N_(e),m=x_(e),g=y_(s),v=r.createProgram();let d,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(d=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?$t.tonemapping_pars_fragment:"",e.toneMapping!==mn?__("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,m_("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=Co(a),a=Nc(a,e),a=Fc(a,e),o=Co(o),o=Nc(o,e),o=Fc(o,e),a=Oc(a),o=Oc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+d+a,S=x+p+o,E=Dc(r,r.VERTEX_SHADER,_),M=Dc(r,r.FRAGMENT_SHADER,S);r.attachShader(v,E),r.attachShader(v,M),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(A){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(E)||"",L=r.getShaderInfoLog(M)||"",B=C.trim(),z=P.trim(),O=L.trim();let N=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,E,M);else{const k=Uc(r,E,"vertex"),V=Uc(r,M,"fragment");Wt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+k+`
`+V)}else B!==""?Vt("WebGLProgram: Program Info Log:",B):(z===""||O==="")&&(F=!1);F&&(A.diagnostics={runnable:N,programLog:B,vertexShader:{log:z,prefix:d},fragmentShader:{log:O,prefix:p}})}r.deleteShader(E),r.deleteShader(M),y=new ys(r,v),b=M_(r,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(v,u_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=f_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=M,this}let O_=0;class B_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new k_(t),e.set(t,n)),n}}class k_{constructor(t){this.id=O_++,this.code=t,this.usedTimes=0}}function z_(i,t,e,n,r,s){const a=new qo,o=new B_,c=new Set,l=[],f=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function v(y,b,D,A,C){const P=A.fog,L=C.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=t.get(y.envMap||B,z),N=O&&O.mapping===Ds?O.image.height:null,F=m[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Vt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,V=k!==void 0?k.length:0;let q=0;L.morphAttributes.position!==void 0&&(q=1),L.morphAttributes.normal!==void 0&&(q=2),L.morphAttributes.color!==void 0&&(q=3);let ot,ht,ut,G;if(F){const ee=fn[F];ot=ee.vertexShader,ht=ee.fragmentShader}else ot=y.vertexShader,ht=y.fragmentShader,o.update(y),ut=o.getVertexShaderID(y),G=o.getFragmentShaderID(y);const J=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),vt=C.isInstancedMesh===!0,ft=C.isBatchedMesh===!0,bt=!!y.map,Ut=!!y.matcap,_t=!!O,et=!!y.aoMap,rt=!!y.lightMap,Z=!!y.bumpMap,ct=!!y.normalMap,U=!!y.displacementMap,Pt=!!y.emissiveMap,xt=!!y.metalnessMap,St=!!y.roughnessMap,gt=y.anisotropy>0,I=y.clearcoat>0,T=y.dispersion>0,W=y.iridescence>0,Y=y.sheen>0,it=y.transmission>0,$=gt&&!!y.anisotropyMap,wt=I&&!!y.clearcoatMap,dt=I&&!!y.clearcoatNormalMap,At=I&&!!y.clearcoatRoughnessMap,Tt=W&&!!y.iridescenceMap,at=W&&!!y.iridescenceThicknessMap,pt=Y&&!!y.sheenColorMap,Lt=Y&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,Ct=!!y.specularColorMap,Yt=!!y.specularIntensityMap,X=it&&!!y.transmissionMap,Et=it&&!!y.thicknessMap,Mt=!!y.gradientMap,Ft=!!y.alphaMap,mt=y.alphaTest>0,lt=!!y.alphaHash,Bt=!!y.extensions;let Xt=mn;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ie={shaderID:F,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:ht,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ft,batchingColor:ft&&C._colorsTexture!==null,instancing:vt,instancingColor:vt&&C.instanceColor!==null,instancingMorph:vt&&C.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ki,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:Ut,envMap:_t,envMapMode:_t&&O.mapping,envMapCubeUVHeight:N,aoMap:et,lightMap:rt,bumpMap:Z,normalMap:ct,displacementMap:U,emissiveMap:Pt,normalMapObjectSpace:ct&&y.normalMapType===Ju,normalMapTangentSpace:ct&&y.normalMapType===Ho,metalnessMap:xt,roughnessMap:St,anisotropy:gt,anisotropyMap:$,clearcoat:I,clearcoatMap:wt,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,dispersion:T,iridescence:W,iridescenceMap:Tt,iridescenceThicknessMap:at,sheen:Y,sheenColorMap:pt,sheenRoughnessMap:Lt,specularMap:Nt,specularColorMap:Ct,specularIntensityMap:Yt,transmission:it,transmissionMap:X,thicknessMap:Et,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===Ui&&y.alphaToCoverage===!1,alphaMap:Ft,alphaTest:mt,alphaHash:lt,combine:y.combine,mapUv:bt&&g(y.map.channel),aoMapUv:et&&g(y.aoMap.channel),lightMapUv:rt&&g(y.lightMap.channel),bumpMapUv:Z&&g(y.bumpMap.channel),normalMapUv:ct&&g(y.normalMap.channel),displacementMapUv:U&&g(y.displacementMap.channel),emissiveMapUv:Pt&&g(y.emissiveMap.channel),metalnessMapUv:xt&&g(y.metalnessMap.channel),roughnessMapUv:St&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:wt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(y.sheenRoughnessMap.channel),specularMapUv:Nt&&g(y.specularMap.channel),specularColorMapUv:Ct&&g(y.specularColorMap.channel),specularIntensityMapUv:Yt&&g(y.specularIntensityMap.channel),transmissionMapUv:X&&g(y.transmissionMap.channel),thicknessMapUv:Et&&g(y.thicknessMap.channel),alphaMapUv:Ft&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ct||gt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(bt||Ft),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:C.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:Pt&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===Be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Bt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&y.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const b=m[y.type];let D;if(b){const A=fn[b];D=Fd.clone(A.uniforms)}else D=y.uniforms;return D}function S(y,b){let D=f.get(b);return D!==void 0?++D.usedTimes:(D=new F_(i,b,y,r),l.push(D),f.set(b,D)),D}function E(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),f.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:_,acquireProgram:S,releaseProgram:E,releaseShaderCache:M,programs:l,dispose:w}}function V_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function H_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,v,d,p){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:d,group:p},i[t]=x):(x.id=h.id,x.object=h,x.geometry=m,x.material=g,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=d,x.group=p),t++,x}function c(h,m,g,v,d,p){const x=o(h,m,g,v,d,p);g.transmission>0?n.push(x):g.transparent===!0?r.push(x):e.push(x)}function l(h,m,g,v,d,p){const x=o(h,m,g,v,d,p);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):e.unshift(x)}function f(h,m){e.length>1&&e.sort(h||H_),n.length>1&&n.sort(m||kc),r.length>1&&r.sort(m||kc)}function u(){for(let h=t,m=i.length;h<m;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:u,sort:f}}function G_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new zc,i.set(n,[a])):r>=s.length?(a=new zc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function W_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Jt};break;case"SpotLight":e={position:new H,direction:new H,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function X_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Y_=0;function q_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function j_(i){const t=new W_,e=X_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new Qt,a=new Qt;function o(l){let f=0,u=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,v=0,d=0,p=0,x=0,_=0,S=0,E=0,M=0,w=0;l.sort(q_);for(let b=0,D=l.length;b<D;b++){const A=l[b],C=A.color,P=A.intensity,L=A.distance;let B=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Bi?B=A.shadow.map.texture:B=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=C.r*P,u+=C.g*P,h+=C.b*P;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],P);w++}else if(A.isDirectionalLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,N=e.get(A);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.directionalShadow[m]=N,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=A.shadow.matrix,x++}n.directional[m]=z,m++}else if(A.isSpotLight){const z=t.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(C).multiplyScalar(P),z.distance=L,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[v]=z;const O=A.shadow;if(A.map&&(n.spotLightMap[E]=A.map,E++,O.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[v]=O.matrix,A.castShadow){const N=e.get(A);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=B,S++}v++}else if(A.isRectAreaLight){const z=t.get(A);z.color.copy(C).multiplyScalar(P),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[d]=z,d++}else if(A.isPointLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const O=A.shadow,N=e.get(A);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,N.shadowCameraNear=O.camera.near,N.shadowCameraFar=O.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=z,g++}else if(A.isHemisphereLight){const z=t.get(A);z.skyColor.copy(A.color).multiplyScalar(P),z.groundColor.copy(A.groundColor).multiplyScalar(P),n.hemi[p]=z,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const y=n.hash;(y.directionalLength!==m||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==d||y.hemiLength!==p||y.numDirectionalShadows!==x||y.numPointShadows!==_||y.numSpotShadows!==S||y.numSpotMaps!==E||y.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,y.directionalLength=m,y.pointLength=g,y.spotLength=v,y.rectAreaLength=d,y.hemiLength=p,y.numDirectionalShadows=x,y.numPointShadows=_,y.numSpotShadows=S,y.numSpotMaps=E,y.numLightProbes=w,n.version=Y_++)}function c(l,f){let u=0,h=0,m=0,g=0,v=0;const d=f.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const _=l[p];if(_.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),u++}else if(_.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),m++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(_.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),h++}else if(_.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(d),v++}}}return{setup:o,setupView:c,state:n}}function Vc(i){const t=new j_(i),e=[],n=[];function r(f){l.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function c(f){t.setupView(e,f)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Z_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Vc(i),t.set(r,[o])):s>=a.length?(o=new Vc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Q_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Hc=new Qt,ar=new H,Ta=new H;function t1(i,t,e){let n=new Us;const r=new yt,s=new yt,a=new fe,o=new Vd,c=new Hd,l={},f=e.maxTextureSize,u={[Ln]:Be,[Be]:Ln,[Rn]:Rn},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:J_,fragmentShader:$_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new De(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let p=this.type;this.render=function(M,w,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;this.type===Su&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ms);const b=i.getRenderTarget(),D=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(In),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=p!==this.type;P&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=M.length;L<B;L++){const z=M[L],O=z.shadow;if(O===void 0){Vt("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const N=O.getFrameExtents();r.multiply(N),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,O.mapSize.y=s.y));const F=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===cr){if(z.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new gn(r.x,r.y,{format:Bi,type:Un,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Mr(r.x,r.y,Ze),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Nn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ae,O.map.depthTexture.magFilter=Ae}else z.isPointLight?(O.map=new jh(r.x),O.map.depthTexture=new td(r.x,vn)):(O.map=new gn(r.x,r.y),O.map.depthTexture=new Mr(r.x,r.y,vn)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Nn,this.type===ms?(O.map.depthTexture.compareFunction=F?Wo:Go,O.map.depthTexture.minFilter=Ie,O.map.depthTexture.magFilter=Ie):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ae,O.map.depthTexture.magFilter=Ae);O.camera.updateProjectionMatrix()}const k=O.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<k;V++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,V),i.clear();else{V===0&&(i.setRenderTarget(O.map),i.clear());const q=O.getViewport(V);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),C.viewport(a)}if(z.isPointLight){const q=O.camera,ot=O.matrix,ht=z.distance||q.far;ht!==q.far&&(q.far=ht,q.updateProjectionMatrix()),ar.setFromMatrixPosition(z.matrixWorld),q.position.copy(ar),Ta.copy(q.position),Ta.add(K_[V]),q.up.copy(Q_[V]),q.lookAt(Ta),q.updateMatrixWorld(),ot.makeTranslation(-ar.x,-ar.y,-ar.z),Hc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Hc,q.coordinateSystem,q.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),S(w,y,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===cr&&x(O,y),O.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(b,D,A)};function x(M,w){const y=t.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gn(r.x,r.y,{format:Bi,type:Un})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,y,m,v,null)}function _(M,w,y,b){let D=null;const A=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)D=A;else if(D=y.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const C=D.uuid,P=w.uuid;let L=l[C];L===void 0&&(L={},l[C]=L);let B=L[P];B===void 0&&(B=D.clone(),L[P]=B,w.addEventListener("dispose",E)),D=B}if(D.visible=w.visible,D.wireframe=w.wireframe,b===cr?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:u[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const C=i.properties.get(D);C.light=y}return D}function S(M,w,y,b,D){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===cr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const P=t.update(M),L=M.material;if(Array.isArray(L)){const B=P.groups;for(let z=0,O=B.length;z<O;z++){const N=B[z],F=L[N.materialIndex];if(F&&F.visible){const k=_(M,F,b,D);M.onBeforeShadow(i,M,w,y,P,k,N),i.renderBufferDirect(y,null,P,k,M,N),M.onAfterShadow(i,M,w,y,P,k,N)}}}else if(L.visible){const B=_(M,L,b,D);M.onBeforeShadow(i,M,w,y,P,B,null),i.renderBufferDirect(y,null,P,B,M,null),M.onAfterShadow(i,M,w,y,P,B,null)}}const C=M.children;for(let P=0,L=C.length;P<L;P++)S(C[P],w,y,b,D)}function E(M){M.target.removeEventListener("dispose",E);for(const y in l){const b=l[y],D=M.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function e1(i,t){function e(){let X=!1;const Et=new fe;let Mt=null;const Ft=new fe(0,0,0,0);return{setMask:function(mt){Mt!==mt&&!X&&(i.colorMask(mt,mt,mt,mt),Mt=mt)},setLocked:function(mt){X=mt},setClear:function(mt,lt,Bt,Xt,ie){ie===!0&&(mt*=Xt,lt*=Xt,Bt*=Xt),Et.set(mt,lt,Bt,Xt),Ft.equals(Et)===!1&&(i.clearColor(mt,lt,Bt,Xt),Ft.copy(Et))},reset:function(){X=!1,Mt=null,Ft.set(-1,0,0,0)}}}function n(){let X=!1,Et=!1,Mt=null,Ft=null,mt=null;return{setReversed:function(lt){if(Et!==lt){const Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Et=lt;const Xt=mt;mt=null,this.setClear(Xt)}},getReversed:function(){return Et},setTest:function(lt){lt?J(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(lt){Mt!==lt&&!X&&(i.depthMask(lt),Mt=lt)},setFunc:function(lt){if(Et&&(lt=lf[lt]),Ft!==lt){switch(lt){case Da:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=lt}},setLocked:function(lt){X=lt},setClear:function(lt){mt!==lt&&(mt=lt,Et&&(lt=1-lt),i.clearDepth(lt))},reset:function(){X=!1,Mt=null,Ft=null,mt=null,Et=!1}}}function r(){let X=!1,Et=null,Mt=null,Ft=null,mt=null,lt=null,Bt=null,Xt=null,ie=null;return{setTest:function(ee){X||(ee?J(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ee){Et!==ee&&!X&&(i.stencilMask(ee),Et=ee)},setFunc:function(ee,We,Xe){(Mt!==ee||Ft!==We||mt!==Xe)&&(i.stencilFunc(ee,We,Xe),Mt=ee,Ft=We,mt=Xe)},setOp:function(ee,We,Xe){(lt!==ee||Bt!==We||Xt!==Xe)&&(i.stencilOp(ee,We,Xe),lt=ee,Bt=We,Xt=Xe)},setLocked:function(ee){X=ee},setClear:function(ee){ie!==ee&&(i.clearStencil(ee),ie=ee)},reset:function(){X=!1,Et=null,Mt=null,Ft=null,mt=null,lt=null,Bt=null,Xt=null,ie=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},u={},h=new WeakMap,m=[],g=null,v=!1,d=null,p=null,x=null,_=null,S=null,E=null,M=null,w=new Jt(0,0,0),y=0,b=!1,D=null,A=null,C=null,P=null,L=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=O>=2);let F=null,k={};const V=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ot=new fe().fromArray(V),ht=new fe().fromArray(q);function ut(X,Et,Mt,Ft){const mt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(X,lt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<Mt;Bt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(Et+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return lt}const G={};G[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Fi),Z(!1),ct(_l),J(i.CULL_FACE),et(In);function J(X){f[X]!==!0&&(i.enable(X),f[X]=!0)}function nt(X){f[X]!==!1&&(i.disable(X),f[X]=!1)}function vt(X,Et){return u[X]!==Et?(i.bindFramebuffer(X,Et),u[X]=Et,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Et),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function ft(X,Et){let Mt=m,Ft=!1;if(X){Mt=h.get(Et),Mt===void 0&&(Mt=[],h.set(Et,Mt));const mt=X.textures;if(Mt.length!==mt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=mt.length;lt<Bt;lt++)Mt[lt]=i.COLOR_ATTACHMENT0+lt;Mt.length=mt.length,Ft=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(Mt)}function bt(X){return g!==X?(i.useProgram(X),g=X,!0):!1}const Ut={[ii]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Ut[Tu]=i.MIN,Ut[Au]=i.MAX;const _t={[Cu]:i.ZERO,[Ru]:i.ONE,[Pu]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Iu]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function et(X,Et,Mt,Ft,mt,lt,Bt,Xt,ie,ee){if(X===In){v===!0&&(nt(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),X!==bu){if(X!==d||ee!==b){if((p!==ii||S!==ii)&&(i.blendEquation(i.FUNC_ADD),p=ii,S=ii),ee)switch(X){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",X);break}else switch(X){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",X);break}x=null,_=null,E=null,M=null,w.set(0,0,0),y=0,d=X,b=ee}return}mt=mt||Et,lt=lt||Mt,Bt=Bt||Ft,(Et!==p||mt!==S)&&(i.blendEquationSeparate(Ut[Et],Ut[mt]),p=Et,S=mt),(Mt!==x||Ft!==_||lt!==E||Bt!==M)&&(i.blendFuncSeparate(_t[Mt],_t[Ft],_t[lt],_t[Bt]),x=Mt,_=Ft,E=lt,M=Bt),(Xt.equals(w)===!1||ie!==y)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ie),w.copy(Xt),y=ie),d=X,b=!1}function rt(X,Et){X.side===Rn?nt(i.CULL_FACE):J(i.CULL_FACE);let Mt=X.side===Be;Et&&(Mt=!Mt),Z(Mt),X.blending===Ui&&X.transparent===!1?et(In):et(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ft=X.stencilWrite;o.setTest(Ft),Ft&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Pt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(X){D!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),D=X)}function ct(X){X!==yu?(J(i.CULL_FACE),X!==A&&(X===_l?i.cullFace(i.BACK):X===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),A=X}function U(X){X!==C&&(z&&i.lineWidth(X),C=X)}function Pt(X,Et,Mt){X?(J(i.POLYGON_OFFSET_FILL),(P!==Et||L!==Mt)&&(P=Et,L=Mt,a.getReversed()&&(Et=-Et),i.polygonOffset(Et,Mt))):nt(i.POLYGON_OFFSET_FILL)}function xt(X){X?J(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function St(X){X===void 0&&(X=i.TEXTURE0+B-1),F!==X&&(i.activeTexture(X),F=X)}function gt(X,Et,Mt){Mt===void 0&&(F===null?Mt=i.TEXTURE0+B-1:Mt=F);let Ft=k[Mt];Ft===void 0&&(Ft={type:void 0,texture:void 0},k[Mt]=Ft),(Ft.type!==X||Ft.texture!==Et)&&(F!==Mt&&(i.activeTexture(Mt),F=Mt),i.bindTexture(X,Et||G[X]),Ft.type=X,Ft.texture=Et)}function I(){const X=k[F];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function Y(){try{i.texSubImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function it(){try{i.texSubImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function dt(){try{i.texStorage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function At(){try{i.texStorage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function Tt(){try{i.texImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function at(){try{i.texImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function pt(X){ot.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ot.copy(X))}function Lt(X){ht.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ht.copy(X))}function Nt(X,Et){let Mt=l.get(Et);Mt===void 0&&(Mt=new WeakMap,l.set(Et,Mt));let Ft=Mt.get(X);Ft===void 0&&(Ft=i.getUniformBlockIndex(Et,X.name),Mt.set(X,Ft))}function Ct(X,Et){const Ft=l.get(Et).get(X);c.get(Et)!==Ft&&(i.uniformBlockBinding(Et,Ft,X.__bindingPointIndex),c.set(Et,Ft))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},F=null,k={},u={},h=new WeakMap,m=[],g=null,v=!1,d=null,p=null,x=null,_=null,S=null,E=null,M=null,w=new Jt(0,0,0),y=0,b=!1,D=null,A=null,C=null,P=null,L=null,ot.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:nt,bindFramebuffer:vt,drawBuffers:ft,useProgram:bt,setBlending:et,setMaterial:rt,setFlipSided:Z,setCullFace:ct,setLineWidth:U,setPolygonOffset:Pt,setScissorTest:xt,activeTexture:St,bindTexture:gt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Tt,texImage3D:at,updateUBOMapping:Nt,uniformBlockBinding:Ct,texStorage2D:dt,texStorage3D:At,texSubImage2D:Y,texSubImage3D:it,compressedTexSubImage2D:$,compressedTexSubImage3D:wt,scissor:pt,viewport:Lt,reset:Yt}}function n1(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,f=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):yr("canvas")}function v(I,T,W){let Y=1;const it=gt(I);if((it.width>W||it.height>W)&&(Y=W/Math.max(it.width,it.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(Y*it.width),wt=Math.floor(Y*it.height);u===void 0&&(u=g($,wt));const dt=T?g($,wt):u;return dt.width=$,dt.height=wt,dt.getContext("2d").drawImage(I,0,0,$,wt),Vt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+$+"x"+wt+")."),dt}else return"data"in I&&Vt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function d(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,T,W,Y,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=T;if(T===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),T===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),T===i.RGBA){const wt=it?bs:te.getTransfer(Y);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=wt===re?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(I,T){let W;return I?T===null||T===vn||T===vr?W=i.DEPTH24_STENCIL8:T===Ze?W=i.DEPTH32F_STENCIL8:T===_r&&(W=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vn||T===vr?W=i.DEPTH_COMPONENT24:T===Ze?W=i.DEPTH_COMPONENT32F:T===_r&&(W=i.DEPTH_COMPONENT16),W}function E(I,T){return d(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ae&&I.minFilter!==Ie?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function M(I){const T=I.target;T.removeEventListener("dispose",M),y(T),T.isVideoTexture&&f.delete(T)}function w(I){const T=I.target;T.removeEventListener("dispose",w),D(T)}function y(I){const T=n.get(I);if(T.__webglInit===void 0)return;const W=I.source,Y=h.get(W);if(Y){const it=Y[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(I),Object.keys(Y).length===0&&h.delete(W)}n.remove(I)}function b(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const W=I.source,Y=h.get(W);delete Y[T.__cacheKey],a.memory.textures--}function D(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let it=0;it<T.__webglFramebuffer[Y].length;it++)i.deleteFramebuffer(T.__webglFramebuffer[Y][it]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=I.textures;for(let Y=0,it=W.length;Y<it;Y++){const $=n.get(W[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(W[Y])}n.remove(I)}let A=0;function C(){A=0}function P(){const I=A;return I>=r.maxTextures&&Vt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function L(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function B(I,T){const W=n.get(I);if(I.isVideoTexture&&xt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const Y=I.image;if(Y===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{G(W,I,T);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function z(I,T){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){G(W,I,T);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function O(I,T){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){G(W,I,T);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function N(I,T){const W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){J(W,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const F={[ka]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},k={[Ae]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[Gs]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},V={[$u]:i.NEVER,[nf]:i.ALWAYS,[Ku]:i.LESS,[Go]:i.LEQUAL,[Qu]:i.EQUAL,[Wo]:i.GEQUAL,[tf]:i.GREATER,[ef]:i.NOTEQUAL};function q(I,T){if(T.type===Ze&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ie||T.magFilter===Gs||T.magFilter===Ir||T.magFilter===si||T.minFilter===Ie||T.minFilter===Gs||T.minFilter===Ir||T.minFilter===si)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,F[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,F[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,F[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,k[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,k[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ae||T.minFilter!==Ir&&T.minFilter!==si||T.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ot(I,T){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",M));const Y=T.source;let it=h.get(Y);it===void 0&&(it={},h.set(Y,it));const $=L(T);if($!==I.__cacheKey){it[$]===void 0&&(it[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),it[$].usedTimes++;const wt=it[I.__cacheKey];wt!==void 0&&(it[I.__cacheKey].usedTimes--,wt.usedTimes===0&&b(T)),I.__cacheKey=$,I.__webglTexture=it[$].texture}return W}function ht(I,T,W){return Math.floor(Math.floor(I/W)/T)}function ut(I,T,W,Y){const $=I.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,Y,T.data);else{$.sort((at,pt)=>at.start-pt.start);let wt=0;for(let at=1;at<$.length;at++){const pt=$[wt],Lt=$[at],Nt=pt.start+pt.count,Ct=ht(Lt.start,T.width,4),Yt=ht(pt.start,T.width,4);Lt.start<=Nt+1&&Ct===Yt&&ht(Lt.start+Lt.count-1,T.width,4)===Ct?pt.count=Math.max(pt.count,Lt.start+Lt.count-pt.start):(++wt,$[wt]=Lt)}$.length=wt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let at=0,pt=$.length;at<pt;at++){const Lt=$[at],Nt=Math.floor(Lt.start/4),Ct=Math.ceil(Lt.count/4),Yt=Nt%T.width,X=Math.floor(Nt/T.width),Et=Ct,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,Yt,X,Et,Mt,W,Y,T.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function G(I,T,W){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const it=ot(I,T),$=T.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+W);const wt=n.get($);if($.version!==wt.__version||it===!0){e.activeTexture(i.TEXTURE0+W);const dt=te.getPrimaries(te.workingColorSpace),At=T.colorSpace===Yn?null:te.getPrimaries(T.colorSpace),Tt=T.colorSpace===Yn||dt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let at=v(T.image,!1,r.maxTextureSize);at=St(T,at);const pt=s.convert(T.format,T.colorSpace),Lt=s.convert(T.type);let Nt=_(T.internalFormat,pt,Lt,T.colorSpace,T.isVideoTexture);q(Y,T);let Ct;const Yt=T.mipmaps,X=T.isVideoTexture!==!0,Et=wt.__version===void 0||it===!0,Mt=$.dataReady,Ft=E(T,at);if(T.isDepthTexture)Nt=S(T.format===ai,T.type),Et&&(X?e.texStorage2D(i.TEXTURE_2D,1,Nt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,pt,Lt,null));else if(T.isDataTexture)if(Yt.length>0){X&&Et&&e.texStorage2D(i.TEXTURE_2D,Ft,Nt,Yt[0].width,Yt[0].height);for(let mt=0,lt=Yt.length;mt<lt;mt++)Ct=Yt[mt],X?Mt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,pt,Lt,Ct.data):e.texImage2D(i.TEXTURE_2D,mt,Nt,Ct.width,Ct.height,0,pt,Lt,Ct.data);T.generateMipmaps=!1}else X?(Et&&e.texStorage2D(i.TEXTURE_2D,Ft,Nt,at.width,at.height),Mt&&ut(T,at,pt,Lt)):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,pt,Lt,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Nt,Yt[0].width,Yt[0].height,at.depth);for(let mt=0,lt=Yt.length;mt<lt;mt++)if(Ct=Yt[mt],T.format!==Je)if(pt!==null)if(X){if(Mt)if(T.layerUpdates.size>0){const Bt=xc(Ct.width,Ct.height,T.format,T.type);for(const Xt of T.layerUpdates){const ie=Ct.data.subarray(Xt*Bt/Ct.data.BYTES_PER_ELEMENT,(Xt+1)*Bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Xt,Ct.width,Ct.height,1,pt,ie)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,at.depth,pt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Nt,Ct.width,Ct.height,at.depth,0,Ct.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,at.depth,pt,Lt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Nt,Ct.width,Ct.height,at.depth,0,pt,Lt,Ct.data)}else{X&&Et&&e.texStorage2D(i.TEXTURE_2D,Ft,Nt,Yt[0].width,Yt[0].height);for(let mt=0,lt=Yt.length;mt<lt;mt++)Ct=Yt[mt],T.format!==Je?pt!==null?X?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,pt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Nt,Ct.width,Ct.height,0,Ct.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Mt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,pt,Lt,Ct.data):e.texImage2D(i.TEXTURE_2D,mt,Nt,Ct.width,Ct.height,0,pt,Lt,Ct.data)}else if(T.isDataArrayTexture)if(X){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Nt,at.width,at.height,at.depth),Mt)if(T.layerUpdates.size>0){const mt=xc(at.width,at.height,T.format,T.type);for(const lt of T.layerUpdates){const Bt=at.data.subarray(lt*mt/at.data.BYTES_PER_ELEMENT,(lt+1)*mt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,at.width,at.height,1,pt,Lt,Bt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,pt,Lt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,at.width,at.height,at.depth,0,pt,Lt,at.data);else if(T.isData3DTexture)X?(Et&&e.texStorage3D(i.TEXTURE_3D,Ft,Nt,at.width,at.height,at.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,pt,Lt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,at.width,at.height,at.depth,0,pt,Lt,at.data);else if(T.isFramebufferTexture){if(Et)if(X)e.texStorage2D(i.TEXTURE_2D,Ft,Nt,at.width,at.height);else{let mt=at.width,lt=at.height;for(let Bt=0;Bt<Ft;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Nt,mt,lt,0,pt,Lt,null),mt>>=1,lt>>=1}}else if(Yt.length>0){if(X&&Et){const mt=gt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Ft,Nt,mt.width,mt.height)}for(let mt=0,lt=Yt.length;mt<lt;mt++)Ct=Yt[mt],X?Mt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,pt,Lt,Ct):e.texImage2D(i.TEXTURE_2D,mt,Nt,pt,Lt,Ct);T.generateMipmaps=!1}else if(X){if(Et){const mt=gt(at);e.texStorage2D(i.TEXTURE_2D,Ft,Nt,mt.width,mt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Lt,at)}else e.texImage2D(i.TEXTURE_2D,0,Nt,pt,Lt,at);d(T)&&p(Y),wt.__version=$.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function J(I,T,W){if(T.image.length!==6)return;const Y=ot(I,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const $=n.get(it);if(it.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+W);const wt=te.getPrimaries(te.workingColorSpace),dt=T.colorSpace===Yn?null:te.getPrimaries(T.colorSpace),At=T.colorSpace===Yn||wt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Tt=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let lt=0;lt<6;lt++)!Tt&&!at?pt[lt]=v(T.image[lt],!0,r.maxCubemapSize):pt[lt]=at?T.image[lt].image:T.image[lt],pt[lt]=St(T,pt[lt]);const Lt=pt[0],Nt=s.convert(T.format,T.colorSpace),Ct=s.convert(T.type),Yt=_(T.internalFormat,Nt,Ct,T.colorSpace),X=T.isVideoTexture!==!0,Et=$.__version===void 0||Y===!0,Mt=it.dataReady;let Ft=E(T,Lt);q(i.TEXTURE_CUBE_MAP,T);let mt;if(Tt){X&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Yt,Lt.width,Lt.height);for(let lt=0;lt<6;lt++){mt=pt[lt].mipmaps;for(let Bt=0;Bt<mt.length;Bt++){const Xt=mt[Bt];T.format!==Je?Nt!==null?X?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Xt.width,Xt.height,Nt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,Yt,Xt.width,Xt.height,0,Xt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Xt.width,Xt.height,Nt,Ct,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,Yt,Xt.width,Xt.height,0,Nt,Ct,Xt.data)}}}else{if(mt=T.mipmaps,X&&Et){mt.length>0&&Ft++;const lt=gt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(at){X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,pt[lt].width,pt[lt].height,Nt,Ct,pt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,pt[lt].width,pt[lt].height,0,Nt,Ct,pt[lt].data);for(let Bt=0;Bt<mt.length;Bt++){const ie=mt[Bt].image[lt].image;X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,ie.width,ie.height,Nt,Ct,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,Yt,ie.width,ie.height,0,Nt,Ct,ie.data)}}else{X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,Ct,pt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Nt,Ct,pt[lt]);for(let Bt=0;Bt<mt.length;Bt++){const Xt=mt[Bt];X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Nt,Ct,Xt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,Yt,Nt,Ct,Xt.image[lt])}}}d(T)&&p(i.TEXTURE_CUBE_MAP),$.__version=it.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function nt(I,T,W,Y,it,$){const wt=s.convert(W.format,W.colorSpace),dt=s.convert(W.type),At=_(W.internalFormat,wt,dt,W.colorSpace),Tt=n.get(T),at=n.get(W);if(at.__renderTarget=T,!Tt.__hasExternalTextures){const pt=Math.max(1,T.width>>$),Lt=Math.max(1,T.height>>$);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,$,At,pt,Lt,T.depth,0,wt,dt,null):e.texImage2D(it,$,At,pt,Lt,0,wt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Pt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,it,at.__webglTexture,0,U(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,it,at.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(I,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const Y=T.depthTexture,it=Y&&Y.isDepthTexture?Y.type:null,$=S(T.stencilBuffer,it),wt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,U(T),$,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,U(T),$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,I)}else{const Y=T.textures;for(let it=0;it<Y.length;it++){const $=Y[it],wt=s.convert($.format,$.colorSpace),dt=s.convert($.type),At=_($.internalFormat,wt,dt,$.colorSpace);Pt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,U(T),At,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,U(T),At,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,At,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(I,T,W){const Y=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(T.depthTexture);if(it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y){if(it.__webglInit===void 0&&(it.__webglInit=!0,T.depthTexture.addEventListener("dispose",M)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),q(i.TEXTURE_CUBE_MAP,T.depthTexture);const Tt=s.convert(T.depthTexture.format),at=s.convert(T.depthTexture.type);let pt;T.depthTexture.format===Nn?pt=i.DEPTH_COMPONENT24:T.depthTexture.format===ai&&(pt=i.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,pt,T.width,T.height,0,Tt,at,null)}}else B(T.depthTexture,0);const $=it.__webglTexture,wt=U(T),dt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,At=T.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Nn)Pt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,dt,$,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,At,dt,$,0);else if(T.depthTexture.format===ai)Pt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,dt,$,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,At,dt,$,0);else throw new Error("Unknown depthTexture format")}function bt(I){const T=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",it)};Y.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=Y}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)ft(T.__webglFramebuffer[Y],I,Y);else{const Y=I.texture.mipmaps;Y&&Y.length>0?ft(T.__webglFramebuffer[0],I,0):ft(T.__webglFramebuffer,I,0)}else if(W){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),vt(T.__webglDepthbuffer[Y],I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,$)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),vt(T.__webglDepthbuffer,I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(I,T,W){const Y=n.get(I);T!==void 0&&nt(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&bt(I)}function _t(I){const T=I.texture,W=n.get(I),Y=n.get(T);I.addEventListener("dispose",w);const it=I.textures,$=I.isWebGLCubeRenderTarget===!0,wt=it.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,a.memory.textures++),$){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let At=0;At<T.mipmaps.length;At++)W.__webglFramebuffer[dt][At]=i.createFramebuffer()}else W.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)W.__webglFramebuffer[dt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(wt)for(let dt=0,At=it.length;dt<At;dt++){const Tt=n.get(it[dt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Pt(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){const At=it[dt];W.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);const Tt=s.convert(At.format,At.colorSpace),at=s.convert(At.type),pt=_(At.internalFormat,Tt,at,At.colorSpace,I.isXRRenderTarget===!0),Lt=U(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),q(i.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)nt(W.__webglFramebuffer[dt][At],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,At);else nt(W.__webglFramebuffer[dt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);d(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,At=it.length;dt<At;dt++){const Tt=it[dt],at=n.get(Tt);let pt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,at.__webglTexture),q(pt,Tt),nt(W.__webglFramebuffer,I,Tt,i.COLOR_ATTACHMENT0+dt,pt,0),d(Tt)&&p(pt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(dt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),q(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)nt(W.__webglFramebuffer[At],I,T,i.COLOR_ATTACHMENT0,dt,At);else nt(W.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,dt,0);d(T)&&p(dt),e.unbindTexture()}I.depthBuffer&&bt(I)}function et(I){const T=I.textures;for(let W=0,Y=T.length;W<Y;W++){const it=T[W];if(d(it)){const $=x(I),wt=n.get(it).__webglTexture;e.bindTexture($,wt),p($),e.unbindTexture()}}}const rt=[],Z=[];function ct(I){if(I.samples>0){if(Pt(I)===!1){const T=I.textures,W=I.width,Y=I.height;let it=i.COLOR_BUFFER_BIT;const $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(I),dt=T.length>1;if(dt)for(let Tt=0;Tt<T.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const At=I.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const at=n.get(T[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,it,i.NEAREST),c===!0&&(rt.length=0,Z.length=0,rt.push(i.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(rt.push($),Z.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Tt=0;Tt<T.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const at=n.get(T[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function U(I){return Math.min(r.maxSamples,I.samples)}function Pt(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(I){const T=a.render.frame;f.get(I)!==T&&(f.set(I,T),I.update())}function St(I,T){const W=I.colorSpace,Y=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==ki&&W!==Yn&&(te.getTransfer(W)===re?(Y!==Je||it!==He)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",W)),T}function gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=N,this.rebindTextures=Ut,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function i1(i,t){function e(n,r=Yn){let s;const a=te.getTransfer(r);if(n===He)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===dh)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===Je)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===gs||n===_s||n===vs||n===xs)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ha||n===Ga||n===Wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===Ya||n===qa||n===ja||n===Za||n===Ja||n===$a)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xa||n===Ya)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return s.COMPRESSED_R11_EAC;if(n===Za)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ja)return s.COMPRESSED_RG11_EAC;if(n===$a)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===Qa||n===to||n===eo||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===ho||n===uo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ka)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fo)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===_o||n===vo||n===xo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===go)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const r1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
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

}`;class a1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:r1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o1 extends Fn{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,h=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",d=new a1,p={},x=e.getContextAttributes();let _=null,S=null;const E=[],M=[],w=new yt;let y=null;const b=new Ne;b.viewport=new fe;const D=new Ne;D.viewport=new fe;const A=[b,D],C=new sp;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=E[G];return J===void 0&&(J=new Js,E[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=E[G];return J===void 0&&(J=new Js,E[G]=J),J.getGripSpace()},this.getHand=function(G){let J=E[G];return J===void 0&&(J=new Js,E[G]=J),J.getHandSpace()};function B(G){const J=M.indexOf(G.inputSource);if(J===-1)return;const nt=E[J];nt!==void 0&&(nt.update(G.inputSource,G.frame,l||a),nt.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",O);for(let G=0;G<E.length;G++){const J=M[G];J!==null&&(M[G]=null,E[G].disconnect(J))}P=null,L=null,d.reset();for(const G in p)delete p[G];t.setRenderTarget(_),m=null,h=null,u=null,r=null,S=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",z),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,vt=null,ft=null;x.depth&&(ft=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?ai:Nn,vt=x.stencil?vr:vn);const bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(bt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new gn(h.textureWidth,h.textureHeight,{format:Je,type:He,depthTexture:new Mr(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new gn(m.framebufferWidth,m.framebufferHeight,{format:Je,type:He,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function O(G){for(let J=0;J<G.removed.length;J++){const nt=G.removed[J],vt=M.indexOf(nt);vt>=0&&(M[vt]=null,E[vt].disconnect(nt))}for(let J=0;J<G.added.length;J++){const nt=G.added[J];let vt=M.indexOf(nt);if(vt===-1){for(let bt=0;bt<E.length;bt++)if(bt>=M.length){M.push(nt),vt=bt;break}else if(M[bt]===null){M[bt]=nt,vt=bt;break}if(vt===-1)break}const ft=E[vt];ft&&ft.connect(nt)}}const N=new H,F=new H;function k(G,J,nt){N.setFromMatrixPosition(J.matrixWorld),F.setFromMatrixPosition(nt.matrixWorld);const vt=N.distanceTo(F),ft=J.projectionMatrix.elements,bt=nt.projectionMatrix.elements,Ut=ft[14]/(ft[10]-1),_t=ft[14]/(ft[10]+1),et=(ft[9]+1)/ft[5],rt=(ft[9]-1)/ft[5],Z=(ft[8]-1)/ft[0],ct=(bt[8]+1)/bt[0],U=Ut*Z,Pt=Ut*ct,xt=vt/(-Z+ct),St=xt*-Z;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(St),G.translateZ(xt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ft[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const gt=Ut+xt,I=_t+xt,T=U-St,W=Pt+(vt-St),Y=et*_t/I*gt,it=rt*_t/I*gt;G.projectionMatrix.makePerspective(T,W,Y,it,gt,I),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function V(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let J=G.near,nt=G.far;d.texture!==null&&(d.depthNear>0&&(J=d.depthNear),d.depthFar>0&&(nt=d.depthFar)),C.near=D.near=b.near=J,C.far=D.far=b.far=nt,(P!==C.near||L!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,L=C.far),C.layers.mask=G.layers.mask|6,b.layers.mask=C.layers.mask&-5,D.layers.mask=C.layers.mask&-3;const vt=G.parent,ft=C.cameras;V(C,vt);for(let bt=0;bt<ft.length;bt++)V(ft[bt],vt);ft.length===2?k(C,b,D):C.projectionMatrix.copy(b.projectionMatrix),q(G,C,vt)};function q(G,J,nt){nt===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(nt.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(C)},this.getCameraTexture=function(G){return p[G]};let ot=null;function ht(G,J){if(f=J.getViewerPose(l||a),g=J,f!==null){const nt=f.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let vt=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let _t=0;_t<nt.length;_t++){const et=nt[_t];let rt=null;if(m!==null)rt=m.getViewport(et);else{const ct=u.getViewSubImage(h,et);rt=ct.viewport,_t===0&&(t.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(S))}let Z=A[_t];Z===void 0&&(Z=new Ne,Z.layers.enable(_t),Z.viewport=new fe,A[_t]=Z),Z.matrix.fromArray(et.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(et.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(rt.x,rt.y,rt.width,rt.height),_t===0&&(C.matrix.copy(Z.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(Z)}const ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const _t=u.getDepthInformation(nt[0]);_t&&_t.isValid&&_t.texture&&d.init(_t,r.renderState)}if(ft&&ft.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let _t=0;_t<nt.length;_t++){const et=nt[_t].camera;if(et){let rt=p[et];rt||(rt=new Th,p[et]=rt);const Z=u.getCameraImage(et);rt.sourceTexture=Z}}}}for(let nt=0;nt<E.length;nt++){const vt=M[nt],ft=E[nt];vt!==null&&ft!==void 0&&ft.update(vt,J,l||a)}ot&&ot(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ut=new qh;ut.setAnimationLoop(ht),this.setAnimationLoop=function(G){ot=G},this.dispose=function(){}}}const ni=new on,l1=new Qt;function c1(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,kh(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,x,_,S){p.isMeshBasicMaterial?s(d,p):p.isMeshLambertMaterial?(s(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),f(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,S)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),v(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,x,_):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Be&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Be&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=t.get(p),_=x.envMap,S=x.envMapRotation;_&&(d.envMap.value=_,ni.copy(S),ni.x*=-1,ni.y*=-1,ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),d.envMapRotation.value.setFromMatrix4(l1.makeRotationFromEuler(ni)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,x,_){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=_*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function f(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){const x=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function h1(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const S=_.program;n.uniformBlockBinding(x,S)}function l(x,_){let S=r[x.id];S===void 0&&(g(x),S=f(x),r[x.id]=S,x.addEventListener("dispose",d));const E=_.program;n.updateUBOMapping(x,E);const M=t.render.frame;s[x.id]!==M&&(h(x),s[x.id]=M)}function f(x){const _=u();x.__bindingPointIndex=_;const S=i.createBuffer(),E=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],S=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,w=S.length;M<w;M++){const y=Array.isArray(S[M])?S[M]:[S[M]];for(let b=0,D=y.length;b<D;b++){const A=y[b];if(m(A,M,b,E)===!0){const C=A.__offset,P=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let B=0;B<P.length;B++){const z=P[B],O=v(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,C+L,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,L),L+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,_,S,E){const M=x.value,w=_+"_"+S;if(E[w]===void 0)return typeof M=="number"||typeof M=="boolean"?E[w]=M:E[w]=M.clone(),!0;{const y=E[w];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return E[w]=M,!0}else if(y.equals(M)===!1)return y.copy(M),!0}return!1}function g(x){const _=x.uniforms;let S=0;const E=16;for(let w=0,y=_.length;w<y;w++){const b=Array.isArray(_[w])?_[w]:[_[w]];for(let D=0,A=b.length;D<A;D++){const C=b[D],P=Array.isArray(C.value)?C.value:[C.value];for(let L=0,B=P.length;L<B;L++){const z=P[L],O=v(z),N=S%E,F=N%O.boundary,k=N+F;S+=F,k!==0&&E-k<O.storage&&(S+=E-k),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=O.storage}}}const M=S%E;return M>0&&(S+=E-M),x.__size=S,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Vt("WebGLRenderer: Unsupported uniform value type.",x),_}function d(x){const _=x.target;_.removeEventListener("dispose",d);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}const u1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function f1(){return un===null&&(un=new Zo(u1,16,16,Bi,Un),un.name="DFG_LUT",un.minFilter=Ie,un.magFilter=Ie,un.wrapS=Pn,un.wrapT=Pn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class d1{constructor(t={}){const{canvas:e=af(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=He}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=m,d=new Set([zo,ko,Bo]),p=new Set([He,vn,_r,vr,No,Fo]),x=new Uint32Array(4),_=new Int32Array(4);let S=null,E=null;const M=[],w=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1;this._outputColorSpace=Oe;let A=0,C=0,P=null,L=-1,B=null;const z=new fe,O=new fe;let N=null;const F=new Jt(0);let k=0,V=e.width,q=e.height,ot=1,ht=null,ut=null;const G=new fe(0,0,V,q),J=new fe(0,0,V,q);let nt=!1;const vt=new Us;let ft=!1,bt=!1;const Ut=new Qt,_t=new H,et=new fe,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function ct(){return P===null?ot:1}let U=n;function Pt(R,j){return e.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",ie,!1),U===null){const j="webgl2";if(U=Pt(j,R),U===null)throw Pt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Wt("WebGLRenderer: "+R.message),R}let xt,St,gt,I,T,W,Y,it,$,wt,dt,At,Tt,at,pt,Lt,Nt,Ct,Yt,X,Et,Mt,Ft;function mt(){xt=new dg(U),xt.init(),Et=new i1(U,xt),St=new sg(U,xt,t,Et),gt=new e1(U,xt),St.reversedDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),I=new gg(U),T=new V_,W=new n1(U,xt,gt,T,St,Et,I),Y=new fg(b),it=new Mp(U),Mt=new ig(U,it),$=new pg(U,it,I,Mt),wt=new vg(U,$,it,Mt,I),Ct=new _g(U,St,W),pt=new ag(T),dt=new z_(b,Y,xt,St,Mt,pt),At=new c1(b,T),Tt=new G_,at=new Z_(xt),Nt=new ng(b,Y,gt,wt,g,c),Lt=new t1(b,wt,St),Ft=new h1(U,I,St,gt),Yt=new rg(U,xt,I),X=new mg(U,xt,I),I.programs=dt.programs,b.capabilities=St,b.extensions=xt,b.properties=T,b.renderLists=Tt,b.shadowMap=Lt,b.state=gt,b.info=I}mt(),v!==He&&(y=new yg(v,e.width,e.height,r,s));const lt=new o1(b,U);this.xr=lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(R){R!==void 0&&(ot=R,this.setSize(V,q,!1))},this.getSize=function(R){return R.set(V,q)},this.setSize=function(R,j,st=!0){if(lt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,q=j,e.width=Math.floor(R*ot),e.height=Math.floor(j*ot),st===!0&&(e.style.width=R+"px",e.style.height=j+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(V*ot,q*ot).floor()},this.setDrawingBufferSize=function(R,j,st){V=R,q=j,ot=st,e.width=Math.floor(R*st),e.height=Math.floor(j*st),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(v===He){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,j,st,tt){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,j,st,tt),gt.viewport(z.copy(G).multiplyScalar(ot).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,j,st,tt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,j,st,tt),gt.scissor(O.copy(J).multiplyScalar(ot).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(R){gt.setScissorTest(nt=R)},this.setOpaqueSort=function(R){ht=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,st=!0){let tt=0;if(R){let Q=!1;if(P!==null){const It=P.texture.format;Q=d.has(It)}if(Q){const It=P.texture.type,Ot=p.has(It),Dt=Nt.getClearColor(),kt=Nt.getClearAlpha(),Ht=Dt.r,qt=Dt.g,Kt=Dt.b;Ot?(x[0]=Ht,x[1]=qt,x[2]=Kt,x[3]=kt,U.clearBufferuiv(U.COLOR,0,x)):(_[0]=Ht,_[1]=qt,_[2]=Kt,_[3]=kt,U.clearBufferiv(U.COLOR,0,_))}else tt|=U.COLOR_BUFFER_BIT}j&&(tt|=U.DEPTH_BUFFER_BIT),st&&(tt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&U.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Nt.dispose(),Tt.dispose(),at.dispose(),T.dispose(),Y.dispose(),wt.dispose(),Mt.dispose(),Ft.dispose(),dt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",cl),lt.removeEventListener("sessionend",hl),Zn.stop()};function Bt(R){R.preventDefault(),Es("WebGLRenderer: Context Lost."),D=!0}function Xt(){Es("WebGLRenderer: Context Restored."),D=!1;const R=I.autoReset,j=Lt.enabled,st=Lt.autoUpdate,tt=Lt.needsUpdate,Q=Lt.type;mt(),I.autoReset=R,Lt.enabled=j,Lt.autoUpdate=st,Lt.needsUpdate=tt,Lt.type=Q}function ie(R){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ee(R){const j=R.target;j.removeEventListener("dispose",ee),We(j)}function We(R){Xe(R),T.remove(R)}function Xe(R){const j=T.get(R).programs;j!==void 0&&(j.forEach(function(st){dt.releaseProgram(st)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,st,tt,Q,It){j===null&&(j=rt);const Ot=Q.isMesh&&Q.matrixWorld.determinant()<0,Dt=pu(R,j,st,tt,Q);gt.setMaterial(tt,Ot);let kt=st.index,Ht=1;if(tt.wireframe===!0){if(kt=$.getWireframeAttribute(st),kt===void 0)return;Ht=2}const qt=st.drawRange,Kt=st.attributes.position;let Gt=qt.start*Ht,oe=(qt.start+qt.count)*Ht;It!==null&&(Gt=Math.max(Gt,It.start*Ht),oe=Math.min(oe,(It.start+It.count)*Ht)),kt!==null?(Gt=Math.max(Gt,0),oe=Math.min(oe,kt.count)):Kt!=null&&(Gt=Math.max(Gt,0),oe=Math.min(oe,Kt.count));const _e=oe-Gt;if(_e<0||_e===1/0)return;Mt.setup(Q,tt,Dt,st,kt);let me,le=Yt;if(kt!==null&&(me=it.get(kt),le=X,le.setIndex(me)),Q.isMesh)tt.wireframe===!0?(gt.setLineWidth(tt.wireframeLinewidth*ct()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(Q.isLine){let Ce=tt.linewidth;Ce===void 0&&(Ce=1),gt.setLineWidth(Ce*ct()),Q.isLineSegments?le.setMode(U.LINES):Q.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else Q.isPoints?le.setMode(U.POINTS):Q.isSprite&&le.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ws("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))le.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ce=Q._multiDrawStarts,zt=Q._multiDrawCounts,ke=Q._multiDrawCount,ne=kt?it.get(kt).bytesPerElement:1,tn=T.get(tt).currentProgram.getUniforms();for(let cn=0;cn<ke;cn++)tn.setValue(U,"_gl_DrawID",cn),le.render(Ce[cn]/ne,zt[cn])}else if(Q.isInstancedMesh)le.renderInstances(Gt,_e,Q.count);else if(st.isInstancedBufferGeometry){const Ce=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,zt=Math.min(st.instanceCount,Ce);le.renderInstances(Gt,_e,zt)}else le.render(Gt,_e)};function $i(R,j,st){R.transparent===!0&&R.side===Rn&&R.forceSinglePass===!1?(R.side=Be,R.needsUpdate=!0,Pr(R,j,st),R.side=Ln,R.needsUpdate=!0,Pr(R,j,st),R.side=Rn):Pr(R,j,st)}this.compile=function(R,j,st=null){st===null&&(st=R),E=at.get(st),E.init(j),w.push(E),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),R!==st&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),E.setupLights();const tt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const It=Q.material;if(It)if(Array.isArray(It))for(let Ot=0;Ot<It.length;Ot++){const Dt=It[Ot];$i(Dt,st,Q),tt.add(Dt)}else $i(It,st,Q),tt.add(It)}),E=w.pop(),tt},this.compileAsync=function(R,j,st=null){const tt=this.compile(R,j,st);return new Promise(Q=>{function It(){if(tt.forEach(function(Ot){T.get(Ot).currentProgram.isReady()&&tt.delete(Ot)}),tt.size===0){Q(R);return}setTimeout(It,10)}xt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ks=null;function du(R){ks&&ks(R)}function cl(){Zn.stop()}function hl(){Zn.start()}const Zn=new qh;Zn.setAnimationLoop(du),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(R){ks=R,lt.setAnimationLoop(R),R===null?Zn.stop():Zn.start()},lt.addEventListener("sessionstart",cl),lt.addEventListener("sessionend",hl),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const st=lt.enabled===!0&&lt.isPresenting===!0,tt=y!==null&&(P===null||st)&&y.begin(b,P);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(j),j=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,j,P),E=at.get(R,w.length),E.init(j),w.push(E),Ut.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),vt.setFromProjectionMatrix(Ut,pn,j.reversedDepth),bt=this.localClippingEnabled,ft=pt.init(this.clippingPlanes,bt),S=Tt.get(R,M.length),S.init(),M.push(S),lt.enabled===!0&&lt.isPresenting===!0){const Ot=b.xr.getDepthSensingMesh();Ot!==null&&zs(Ot,j,-1/0,b.sortObjects)}zs(R,j,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ht,ut),Z=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Z&&Nt.addToRenderList(S,R),this.info.render.frame++,ft===!0&&pt.beginShadows();const Q=E.state.shadowsArray;if(Lt.render(Q,R,j),ft===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&y.hasRenderPass())===!1){const Ot=S.opaque,Dt=S.transmissive;if(E.setupLights(),j.isArrayCamera){const kt=j.cameras;if(Dt.length>0)for(let Ht=0,qt=kt.length;Ht<qt;Ht++){const Kt=kt[Ht];fl(Ot,Dt,R,Kt)}Z&&Nt.render(R);for(let Ht=0,qt=kt.length;Ht<qt;Ht++){const Kt=kt[Ht];ul(S,R,Kt,Kt.viewport)}}else Dt.length>0&&fl(Ot,Dt,R,j),Z&&Nt.render(R),ul(S,R,j)}P!==null&&C===0&&(W.updateMultisampleRenderTarget(P),W.updateRenderTargetMipmap(P)),tt&&y.end(b),R.isScene===!0&&R.onAfterRender(b,R,j),Mt.resetDefaultState(),L=-1,B=null,w.pop(),w.length>0?(E=w[w.length-1],ft===!0&&pt.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,M.pop(),M.length>0?S=M[M.length-1]:S=null};function zs(R,j,st,tt){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||vt.intersectsSprite(R)){tt&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Ot=wt.update(R),Dt=R.material;Dt.visible&&S.push(R,Ot,Dt,st,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||vt.intersectsObject(R))){const Ot=wt.update(R),Dt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),et.copy(Ot.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Dt)){const kt=Ot.groups;for(let Ht=0,qt=kt.length;Ht<qt;Ht++){const Kt=kt[Ht],Gt=Dt[Kt.materialIndex];Gt&&Gt.visible&&S.push(R,Ot,Gt,st,et.z,Kt)}}else Dt.visible&&S.push(R,Ot,Dt,st,et.z,null)}}const It=R.children;for(let Ot=0,Dt=It.length;Ot<Dt;Ot++)zs(It[Ot],j,st,tt)}function ul(R,j,st,tt){const{opaque:Q,transmissive:It,transparent:Ot}=R;E.setupLightsView(st),ft===!0&&pt.setGlobalState(b.clippingPlanes,st),tt&&gt.viewport(z.copy(tt)),Q.length>0&&Rr(Q,j,st),It.length>0&&Rr(It,j,st),Ot.length>0&&Rr(Ot,j,st),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function fl(R,j,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[tt.id]===void 0){const Gt=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[tt.id]=new gn(1,1,{generateMipmaps:!0,type:Gt?Un:He,minFilter:si,samples:St.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const It=E.state.transmissionRenderTarget[tt.id],Ot=tt.viewport||z;It.setSize(Ot.z*b.transmissionResolutionScale,Ot.w*b.transmissionResolutionScale);const Dt=b.getRenderTarget(),kt=b.getActiveCubeFace(),Ht=b.getActiveMipmapLevel();b.setRenderTarget(It),b.getClearColor(F),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),Z&&Nt.render(st);const qt=b.toneMapping;b.toneMapping=mn;const Kt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),E.setupLightsView(tt),ft===!0&&pt.setGlobalState(b.clippingPlanes,tt),Rr(R,st,tt),W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let oe=0,_e=j.length;oe<_e;oe++){const me=j[oe],{object:le,geometry:Ce,material:zt,group:ke}=me;if(zt.side===Rn&&le.layers.test(tt.layers)){const ne=zt.side;zt.side=Be,zt.needsUpdate=!0,dl(le,st,tt,Ce,zt,ke),zt.side=ne,zt.needsUpdate=!0,Gt=!0}}Gt===!0&&(W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It))}b.setRenderTarget(Dt,kt,Ht),b.setClearColor(F,k),Kt!==void 0&&(tt.viewport=Kt),b.toneMapping=qt}function Rr(R,j,st){const tt=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,It=R.length;Q<It;Q++){const Ot=R[Q],{object:Dt,geometry:kt,group:Ht}=Ot;let qt=Ot.material;qt.allowOverride===!0&&tt!==null&&(qt=tt),Dt.layers.test(st.layers)&&dl(Dt,j,st,kt,qt,Ht)}}function dl(R,j,st,tt,Q,It){R.onBeforeRender(b,j,st,tt,Q,It),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(b,j,st,tt,R,It),Q.transparent===!0&&Q.side===Rn&&Q.forceSinglePass===!1?(Q.side=Be,Q.needsUpdate=!0,b.renderBufferDirect(st,j,tt,Q,R,It),Q.side=Ln,Q.needsUpdate=!0,b.renderBufferDirect(st,j,tt,Q,R,It),Q.side=Rn):b.renderBufferDirect(st,j,tt,Q,R,It),R.onAfterRender(b,j,st,tt,Q,It)}function Pr(R,j,st){j.isScene!==!0&&(j=rt);const tt=T.get(R),Q=E.state.lights,It=E.state.shadowsArray,Ot=Q.state.version,Dt=dt.getParameters(R,Q.state,It,j,st),kt=dt.getProgramCacheKey(Dt);let Ht=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,tt.fog=j.fog;const qt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=Y.get(R.envMap||tt.environment,qt),tt.envMapRotation=tt.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ht===void 0&&(R.addEventListener("dispose",ee),Ht=new Map,tt.programs=Ht);let Kt=Ht.get(kt);if(Kt!==void 0){if(tt.currentProgram===Kt&&tt.lightsStateVersion===Ot)return ml(R,Dt),Kt}else Dt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Dt,b),Kt=dt.acquireProgram(Dt,kt),Ht.set(kt,Kt),tt.uniforms=Dt.uniforms;const Gt=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=pt.uniform),ml(R,Dt),tt.needsLights=gu(R),tt.lightsStateVersion=Ot,tt.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=Kt,tt.uniformsList=null,Kt}function pl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=ys.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function ml(R,j){const st=T.get(R);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function pu(R,j,st,tt,Q){j.isScene!==!0&&(j=rt),W.resetTextureUnits();const It=j.fog,Ot=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?j.environment:null,Dt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ki,kt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Ht=Y.get(tt.envMap||Ot,kt),qt=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Kt=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Gt=!!st.morphAttributes.position,oe=!!st.morphAttributes.normal,_e=!!st.morphAttributes.color;let me=mn;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=b.toneMapping);const le=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ce=le!==void 0?le.length:0,zt=T.get(tt),ke=E.state.lights;if(ft===!0&&(bt===!0||R!==B)){const be=R===B&&tt.id===L;pt.setState(tt,R,be)}let ne=!1;tt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ke.state.version||zt.outputColorSpace!==Dt||Q.isBatchedMesh&&zt.batching===!1||!Q.isBatchedMesh&&zt.batching===!0||Q.isBatchedMesh&&zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&zt.instancing===!1||!Q.isInstancedMesh&&zt.instancing===!0||Q.isSkinnedMesh&&zt.skinning===!1||!Q.isSkinnedMesh&&zt.skinning===!0||Q.isInstancedMesh&&zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&zt.instancingMorph===!1&&Q.morphTexture!==null||zt.envMap!==Ht||tt.fog===!0&&zt.fog!==It||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==pt.numPlanes||zt.numIntersection!==pt.numIntersection)||zt.vertexAlphas!==qt||zt.vertexTangents!==Kt||zt.morphTargets!==Gt||zt.morphNormals!==oe||zt.morphColors!==_e||zt.toneMapping!==me||zt.morphTargetsCount!==Ce)&&(ne=!0):(ne=!0,zt.__version=tt.version);let tn=zt.currentProgram;ne===!0&&(tn=Pr(tt,j,Q));let cn=!1,Jn=!1,fi=!1;const he=tn.getUniforms(),Te=zt.uniforms;if(gt.useProgram(tn.program)&&(cn=!0,Jn=!0,fi=!0),tt.id!==L&&(L=tt.id,Jn=!0),cn||B!==R){gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),he.setValue(U,"projectionMatrix",R.projectionMatrix),he.setValue(U,"viewMatrix",R.matrixWorldInverse);const Bn=he.map.cameraPosition;Bn!==void 0&&Bn.setValue(U,_t.setFromMatrixPosition(R.matrixWorld)),St.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&he.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Jn=!0,fi=!0)}if(zt.needsLights&&(ke.state.directionalShadowMap.length>0&&he.setValue(U,"directionalShadowMap",ke.state.directionalShadowMap,W),ke.state.spotShadowMap.length>0&&he.setValue(U,"spotShadowMap",ke.state.spotShadowMap,W),ke.state.pointShadowMap.length>0&&he.setValue(U,"pointShadowMap",ke.state.pointShadowMap,W)),Q.isSkinnedMesh){he.setOptional(U,Q,"bindMatrix"),he.setOptional(U,Q,"bindMatrixInverse");const be=Q.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),he.setValue(U,"boneTexture",be.boneTexture,W))}Q.isBatchedMesh&&(he.setOptional(U,Q,"batchingTexture"),he.setValue(U,"batchingTexture",Q._matricesTexture,W),he.setOptional(U,Q,"batchingIdTexture"),he.setValue(U,"batchingIdTexture",Q._indirectTexture,W),he.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&he.setValue(U,"batchingColorTexture",Q._colorsTexture,W));const On=st.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ct.update(Q,st,tn),(Jn||zt.receiveShadow!==Q.receiveShadow)&&(zt.receiveShadow=Q.receiveShadow,he.setValue(U,"receiveShadow",Q.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&j.environment!==null&&(Te.envMapIntensity.value=j.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=f1()),Jn&&(he.setValue(U,"toneMappingExposure",b.toneMappingExposure),zt.needsLights&&mu(Te,fi),It&&tt.fog===!0&&At.refreshFogUniforms(Te,It),At.refreshMaterialUniforms(Te,tt,ot,q,E.state.transmissionRenderTarget[R.id]),ys.upload(U,pl(zt),Te,W)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ys.upload(U,pl(zt),Te,W),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&he.setValue(U,"center",Q.center),he.setValue(U,"modelViewMatrix",Q.modelViewMatrix),he.setValue(U,"normalMatrix",Q.normalMatrix),he.setValue(U,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const be=tt.uniformsGroups;for(let Bn=0,di=be.length;Bn<di;Bn++){const gl=be[Bn];Ft.update(gl,tn),Ft.bind(gl,tn)}}return tn}function mu(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function gu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,j,st){const tt=T.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=j,T.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const st=T.get(R);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const _u=U.createFramebuffer();this.setRenderTarget=function(R,j=0,st=0){P=R,A=j,C=st;let tt=null,Q=!1,It=!1;if(R){const Dt=T.get(R);if(Dt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(U.FRAMEBUFFER,Dt.__webglFramebuffer),z.copy(R.viewport),O.copy(R.scissor),N=R.scissorTest,gt.viewport(z),gt.scissor(O),gt.setScissorTest(N),L=-1;return}else if(Dt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Dt.__hasExternalTextures)W.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Dt.__boundDepthTexture!==qt){if(qt!==null&&T.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(It=!0);const Ht=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ht[j])?tt=Ht[j][st]:tt=Ht[j],Q=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?tt=T.get(R).__webglMultisampledFramebuffer:Array.isArray(Ht)?tt=Ht[st]:tt=Ht,z.copy(R.viewport),O.copy(R.scissor),N=R.scissorTest}else z.copy(G).multiplyScalar(ot).floor(),O.copy(J).multiplyScalar(ot).floor(),N=nt;if(st!==0&&(tt=_u),gt.bindFramebuffer(U.FRAMEBUFFER,tt)&&gt.drawBuffers(R,tt),gt.viewport(z),gt.scissor(O),gt.setScissorTest(N),Q){const Dt=T.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Dt.__webglTexture,st)}else if(It){const Dt=j;for(let kt=0;kt<R.textures.length;kt++){const Ht=T.get(R.textures[kt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+kt,Ht.__webglTexture,st,Dt)}}else if(R!==null&&st!==0){const Dt=T.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dt.__webglTexture,st)}L=-1},this.readRenderTargetPixels=function(R,j,st,tt,Q,It,Ot,Dt=0){if(!(R&&R.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){gt.bindFramebuffer(U.FRAMEBUFFER,kt);try{const Ht=R.textures[Dt],qt=Ht.format,Kt=Ht.type;if(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Dt),!St.textureFormatReadable(qt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Kt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-tt&&st>=0&&st<=R.height-Q&&U.readPixels(j,st,tt,Q,Et.convert(qt),Et.convert(Kt),It)}finally{const Ht=P!==null?T.get(P).__webglFramebuffer:null;gt.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(R,j,st,tt,Q,It,Ot,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt)if(j>=0&&j<=R.width-tt&&st>=0&&st<=R.height-Q){gt.bindFramebuffer(U.FRAMEBUFFER,kt);const Ht=R.textures[Dt],qt=Ht.format,Kt=Ht.type;if(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Dt),!St.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Gt),U.bufferData(U.PIXEL_PACK_BUFFER,It.byteLength,U.STREAM_READ),U.readPixels(j,st,tt,Q,Et.convert(qt),Et.convert(Kt),0);const oe=P!==null?T.get(P).__webglFramebuffer:null;gt.bindFramebuffer(U.FRAMEBUFFER,oe);const _e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await of(U,_e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,It),U.deleteBuffer(Gt),U.deleteSync(_e),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,st=0){const tt=Math.pow(2,-st),Q=Math.floor(R.image.width*tt),It=Math.floor(R.image.height*tt),Ot=j!==null?j.x:0,Dt=j!==null?j.y:0;W.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,st,0,0,Ot,Dt,Q,It),gt.unbindTexture()};const vu=U.createFramebuffer(),xu=U.createFramebuffer();this.copyTextureToTexture=function(R,j,st=null,tt=null,Q=0,It=0){let Ot,Dt,kt,Ht,qt,Kt,Gt,oe,_e;const me=R.isCompressedTexture?R.mipmaps[It]:R.image;if(st!==null)Ot=st.max.x-st.min.x,Dt=st.max.y-st.min.y,kt=st.isBox3?st.max.z-st.min.z:1,Ht=st.min.x,qt=st.min.y,Kt=st.isBox3?st.min.z:0;else{const Te=Math.pow(2,-Q);Ot=Math.floor(me.width*Te),Dt=Math.floor(me.height*Te),R.isDataArrayTexture?kt=me.depth:R.isData3DTexture?kt=Math.floor(me.depth*Te):kt=1,Ht=0,qt=0,Kt=0}tt!==null?(Gt=tt.x,oe=tt.y,_e=tt.z):(Gt=0,oe=0,_e=0);const le=Et.convert(j.format),Ce=Et.convert(j.type);let zt;j.isData3DTexture?(W.setTexture3D(j,0),zt=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),zt=U.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),zt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const ke=U.getParameter(U.UNPACK_ROW_LENGTH),ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),tn=U.getParameter(U.UNPACK_SKIP_PIXELS),cn=U.getParameter(U.UNPACK_SKIP_ROWS),Jn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);const fi=R.isDataArrayTexture||R.isData3DTexture,he=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Te=T.get(R),On=T.get(j),be=T.get(Te.__renderTarget),Bn=T.get(On.__renderTarget);gt.bindFramebuffer(U.READ_FRAMEBUFFER,be.__webglFramebuffer),gt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let di=0;di<kt;di++)fi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(R).__webglTexture,Q,Kt+di),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(j).__webglTexture,It,_e+di)),U.blitFramebuffer(Ht,qt,Ot,Dt,Gt,oe,Ot,Dt,U.DEPTH_BUFFER_BIT,U.NEAREST);gt.bindFramebuffer(U.READ_FRAMEBUFFER,null),gt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||T.has(R)){const Te=T.get(R),On=T.get(j);gt.bindFramebuffer(U.READ_FRAMEBUFFER,vu),gt.bindFramebuffer(U.DRAW_FRAMEBUFFER,xu);for(let be=0;be<kt;be++)fi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,Q,Kt+be):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,Q),he?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,On.__webglTexture,It,_e+be):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,On.__webglTexture,It),Q!==0?U.blitFramebuffer(Ht,qt,Ot,Dt,Gt,oe,Ot,Dt,U.COLOR_BUFFER_BIT,U.NEAREST):he?U.copyTexSubImage3D(zt,It,Gt,oe,_e+be,Ht,qt,Ot,Dt):U.copyTexSubImage2D(zt,It,Gt,oe,Ht,qt,Ot,Dt);gt.bindFramebuffer(U.READ_FRAMEBUFFER,null),gt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else he?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(zt,It,Gt,oe,_e,Ot,Dt,kt,le,Ce,me.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(zt,It,Gt,oe,_e,Ot,Dt,kt,le,me.data):U.texSubImage3D(zt,It,Gt,oe,_e,Ot,Dt,kt,le,Ce,me):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,It,Gt,oe,Ot,Dt,le,Ce,me.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,It,Gt,oe,me.width,me.height,le,me.data):U.texSubImage2D(U.TEXTURE_2D,It,Gt,oe,Ot,Dt,le,Ce,me);U.pixelStorei(U.UNPACK_ROW_LENGTH,ke),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,tn),U.pixelStorei(U.UNPACK_SKIP_ROWS,cn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jn),It===0&&j.generateMipmaps&&U.generateMipmap(zt),gt.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),gt.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,gt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Zi="0.12.1";class Gc extends De{constructor(t,e){super(t,e??[])}get maxHeight(){var t;return this.geometry.computeBoundingBox(),((t=this.geometry.boundingBox)==null?void 0:t.max.z)??0}syncGroups(){this.geometry.clearGroups(),this.material.forEach((t,e)=>this.geometry.addGroup(0,1/0,e))}dispose(){this.traverse(t=>{var e;t instanceof De&&((Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{var r;for(const s in n){const a=n[s];a instanceof ge&&(a.dispose(),((r=a.source)==null?void 0:r.data)instanceof ImageBitmap&&a.source.data.close())}n.dispose()}),(e=t.geometry)==null||e.dispose())})}setGeometry(t){t!==this.geometry&&this.geometry.dispose(),this.geometry=t}syncShadow(t){this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow}disposeMaterial(t){var n;const e=this.material[t];if(e){for(const r in e){const s=e[r];s instanceof ge&&(s.dispose(),((n=s.source)==null?void 0:n.data)instanceof ImageBitmap&&s.source.data.close())}e.dispose()}}setMaterial(t,e){const n=this.material[t];n!==e&&(n&&this.disposeMaterial(t),this.material[t]=e)}syncMaterials(t){for(let e=0;e<this.material.length;e++)t.includes(this.material[e])||this.disposeMaterial(e);this.material.length=0,this.material.push(...t)}}const Wc=new H,Xc=new Us,p1=new Qt,fs=new H,Yc=new H;class qe extends de{constructor(t=0,e=0,n=0){super(),this.isTile=!0,this._root=this,this._sizeInWorld=-1,this._maxZ=0,this._loadState="empty",this._inFrustum=!1,this._epoch=0,this._loadedEpoch=-1,this.x=t,this.y=e,this.z=n,this.name=`Tile ${n}-${t}-${e}`,this.up.set(0,0,1)}get loadState(){return this._loadState}get model(){return this._model}get subTiles(){return this._subTiles}get inFrustum(){return this._inFrustum}get isLeaf(){return this.children.length<=1}get BBox(){const{x:t,y:e}=this.scale;return new Qe(new H(-t,-e,0),new H(t,e,this._maxZ)).applyMatrix4(this.matrixWorld)}get _needVersionUpdate(){return this._loadedEpoch<this._root._epoch&&this._loadState!=="empty"}markTreeNeedUpdate(){this._root._epoch++}add(...t){if(this.children.length===5)throw new Error("Can't add more than 5 objects to a tile.");return super.add(...t),t.forEach(e=>{e instanceof qe&&(e._root=this._root)}),this}update(t){if(!this.parent)return;const{camera:e}=t;return e.getWorldPosition(Wc),Xc.setFromProjectionMatrix(p1.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),this._update(t),this}reload(t=!0){return t?(this.unloadSubTiles(),this.unloadModel()):this._root._epoch++,this}unload(){return this.removeFromParent(),this.unloadSubTiles(),this.unloadModel(),this}unloadModel(){if(this.model)return this.model.removeFromParent(),this.model.dispose(),this._loadState="empty",this._model=void 0,this._loadedEpoch=-1,this._root.dispatchEvent({type:"tile-unload",tile:this}),this}unloadSubTiles(){const t=this.subTiles||this.children;this._subTiles=void 0;for(let e=t.length-1;e>=0;e--){const n=t[e];n instanceof qe&&(n.removeFromParent(),n.unloadModel(),n.unloadSubTiles())}return this}LOD(t){const{minLevel:e,maxLevel:n,LODThreshold:r}=t;this._getTileSize();const s=this._LODEvaluate(e,n,r);return s===1?this.inFrustum&&!this.subTiles&&this._loadSubTiles(t):s===2&&this.subTiles&&this._removeSubTiles(t),s}_update(t){const{loader:e}=t;if(!(e.downloadingThreads+4>=e.maxThreads||this.loadState==="loading")){if(this._updateShadow(),this._needVersionUpdate){console.assert(!!this.model),this._updateModel(e);return}this._inFrustum=Xc.intersectsBox(this.BBox),!(!this._inFrustum&&this._model&&this.isLeaf)&&(this.LOD(t),this.children.forEach(n=>n instanceof qe&&n._update(t)))}}_updateShadow(){var t;(t=this.model)==null||t.syncShadow(this._root)}_getTileSize(){return this._sizeInWorld<0&&(fs.set(-this.scale.x,-this.scale.y,0).applyMatrix4(this.matrixWorld),Yc.set(this.scale.x,this.scale.y,0).applyMatrix4(this.matrixWorld),this._sizeInWorld=fs.distanceTo(Yc)),this._sizeInWorld}_LODEvaluate(t,e,n){const r=this._getDistRatio();return this.isLeaf&&this.z<e&&r<=n?1:!this.isLeaf&&this.z>=t&&r>n?2:0}_getDistRatio(){console.assert(this._sizeInWorld>10),fs.set(this.matrixWorld.elements[12],this._maxZ,this.matrixWorld.elements[14]);const t=Wc.distanceTo(fs)/this._sizeInWorld;return this.inFrustum?t*.8:t*5}static _createTile(t,e,n,r,s,a,o,c){const l=new qe(t,e,n);return l.position.set(r,s,0),l.scale.set(a,o,c),l}_createChildren(t){const{x:e,y:n,z:r}=this,s=[],a=e*2,o=r+1,c=.25,l=.5,f=1;if(r===0&&t.projectionID==="4326"){const u=n,h=1,m=qe._createTile(a,u,o,-.25,0,l,h,f),g=qe._createTile(a+1,u,o,c,0,l,h,f);s.push(m,g)}else{const u=n*2,h=.5,m=qe._createTile(a,u,o,-.25,c,l,h,f),g=qe._createTile(a+1,u,o,c,c,l,h,f),v=qe._createTile(a,u+1,o,-.25,-.25,l,h,f),d=qe._createTile(a+1,u+1,o,c,-.25,l,h,f);s.push(m,g,v,d)}return s}async _loadSubTiles(t){const{loader:e,minLevel:n,maxLevel:r,LODThreshold:s}=t,a=this._createChildren(e);if(this._subTiles=a,this.z<n-1)return this.add(...a),a.forEach(l=>{l.updateMatrixWorld(),l.updateMatrix()}),!0;const o=a.map(l=>{const f=new Gc;return l._model=f,l.add(f),l._loadState="loading",e.update(l,f)});await Promise.all(o),a.forEach(l=>l._loadState="loaded");const c=this._LODEvaluate(n,r,s)!==1;return c?this.unloadSubTiles():(this.add(...a),a.forEach(l=>{var f;l._loadedEpoch=this._root._epoch,l._updateShadow(),l._maxZ=((f=l.model)==null?void 0:f.maxHeight)??0,this._root.dispatchEvent({type:"tile-loaded",tile:l})}),this.unloadModel()),!c}async _removeSubTiles(t){const{loader:e,minLevel:n,maxLevel:r,LODThreshold:s}=t;this._subTiles=void 0;const a=new Gc;this._model=a,this._loadState="loading",await e.update(this,a),this._loadState="loaded";const o=this._LODEvaluate(n,r,s)!==2;return o?this.unloadModel():(this._loadedEpoch=this._root._epoch,this._updateShadow(),this._maxZ=a.maxHeight,this.add(a),this.unloadSubTiles(),this._root.dispatchEvent({type:"tile-loaded",tile:this})),o}async _updateModel(t){if(!this.model)return;const e=this._root._epoch;this._loadState="loading";const n=await t.update(this,this.model);this._loadState="loaded",n&&(this.parent?(this._loadedEpoch=e,this._maxZ=this.model.maxHeight,this._root.dispatchEvent({type:"tile-loaded",tile:this})):this.unloadModel())}}class m1 extends zh{constructor(t={}){super({transparent:!1,side:Ln,...t})}}class g1{constructor(){this._debug=0}get debug(){return this._debug}set debug(t){this._debug=t}log(...t){this._debug>=4&&console.log(...t)}info(...t){this._debug>=3&&console.info(...t)}warn(...t){this._debug>=2&&console.warn(...t)}error(...t){this._debug>=1&&console.error(...t)}}const Ro=new g1;function _1(i){const t=[];for(let e=0;e<i;e++)if(e>=17)t.push(0);else{const n=1-e/17;t.push(Math.round(7e3*n*n*n))}return t}const v1=_1(21);function x1(i){if(i.length<4)throw new Error(`DEM array length must be greater than 4, current length is ${i.length}`);const t=Math.floor(Math.sqrt(i.length)),e=t,n=t,r=M1(n,e);return{attributes:y1(i,n,e,r),indices:r}}function y1(i,t,e,n){const r=e*t,s=1/(e-1),a=1/(t-1),o=new Float32Array(r*3),c=new Float32Array(r*2),l=e;let f=0;for(let u=0;u<t;u++){const h=u*a,m=(t-u-1)*l;for(let g=0;g<e;g++){const v=g*s;c[f*2]=v,c[f*2+1]=h,o[f*3]=v-.5,o[f*3+1]=h-.5,o[f*3+2]=i[m+g],f++}}return{position:{value:o,size:3},texcoord:{value:c,size:2},normal:{value:Qh(o,n),size:3}}}function M1(i,t){const e=6*(t-1)*(i-1),n=new Uint32Array(e);let r=0;for(let s=0;s<i-1;s++)for(let a=0;a<t-1;a++){const o=s*t+a,c=o+1,l=o+t,f=l+1,u=r*6;n[u]=o,n[u+1]=c,n[u+2]=l,n[u+3]=l,n[u+4]=c,n[u+5]=f,r++}return n}function Qh(i,t){const e=new Float32Array(i.length);for(let n=0;n<t.length;n+=3){const r=t[n]*3,s=t[n+1]*3,a=t[n+2]*3,o=i[s]-i[r],c=i[s+1]-i[r+1],l=i[s+2]-i[r+2],f=i[a]-i[r],u=i[a+1]-i[r+1],h=i[a+2]-i[r+2],m=c*h-l*u,g=l*f-o*h,v=o*u-c*f,d=1/Math.hypot(m,g,v);e[r]=e[s]=e[a]=m*d,e[r+1]=e[s+1]=e[a+1]=g*d,e[r+2]=e[s+2]=e[a+2]=v*d}return e}class S1{constructor(t=257){this.gridSize=t;const e=t-1;if(e&e-1)throw new Error(`Grid size must be 2^n+1, current size is ${t}`);this.numTriangles=e*e*2-2,this.numParentTriangles=this.numTriangles-e*e,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let n=0;n<this.numTriangles;n++){let r=n+2,s=0,a=0,o=0,c=0,l=0,f=0;for(r&1?o=c=l=e:s=a=f=e;(r>>=1)>1;){const h=s+o>>1,m=a+c>>1;r&1?(o=s,c=a,s=l,a=f):(s=o,a=c,o=l,c=f),l=h,f=m}const u=n*4;this.coords[u+0]=s,this.coords[u+1]=a,this.coords[u+2]=o,this.coords[u+3]=c}}createTile(t){return new b1(t,this)}}class b1{constructor(t,e){const n=e.gridSize;if(t.length!==n*n)throw new Error(`Terrain data length expected ${n*n} (${n} x ${n}), but got ${t.length}`);this.terrain=t,this.martini=e,this.errors=new Float32Array(t.length),this.update()}update(){const{numTriangles:t,numParentTriangles:e,coords:n,gridSize:r}=this.martini,{terrain:s,errors:a}=this;for(let o=t-1;o>=0;o--){const c=o*4,l=n[c+0],f=n[c+1],u=n[c+2],h=n[c+3],m=l+u>>1,g=f+h>>1,v=m+g-f,d=g+l-m,p=(s[f*r+l]+s[h*r+u])/2,x=g*r+m,_=Math.abs(p-s[x]);if(a[x]=Math.max(a[x],_),o<e){const S=(f+d>>1)*r+(l+v>>1),E=(h+d>>1)*r+(u+v>>1);a[x]=Math.max(a[x],a[S],a[E])}}}getGeometryData(t=0){const{gridSize:e,indices:n}=this.martini,{errors:r}=this;let s=0,a=0;const o=e-1;let c,l,f=0;n.fill(0);function u(x,_,S,E,M,w){const y=x+S>>1,b=_+E>>1;Math.abs(x-M)+Math.abs(_-w)>1&&r[b*e+y]>t?(u(M,w,x,_,y,b),u(S,E,M,w,y,b)):(c=_*e+x,l=E*e+S,f=w*e+M,n[c]===0&&(n[c]=++s),n[l]===0&&(n[l]=++s),n[f]===0&&(n[f]=++s),a++)}u(0,0,o,o,o,0),u(o,o,0,0,0,o);const h=s*2,m=a*3,g=new Uint16Array(h),v=new Uint32Array(m);let d=0;function p(x,_,S,E,M,w){const y=x+S>>1,b=_+E>>1;if(Math.abs(x-M)+Math.abs(_-w)>1&&r[b*e+y]>t)p(M,w,x,_,y,b),p(S,E,M,w,y,b);else{const D=n[_*e+x]-1,A=n[E*e+S]-1,C=n[w*e+M]-1;g[2*D]=x,g[2*D+1]=_,g[2*A]=S,g[2*A+1]=E,g[2*C]=M,g[2*C+1]=w,v[d++]=D,v[d++]=A,v[d++]=C}}return p(0,0,o,o,o,0),p(o,o,0,0,0,o),{attributes:this._getMeshAttributes(this.terrain,g,v),indices:v}}_getMeshAttributes(t,e,n){const r=Math.floor(Math.sqrt(t.length)),s=r-1,a=e.length/2,o=new Float32Array(a*3),c=new Float32Array(a*2);for(let f=0;f<a;f++){const u=e[f*2],h=e[f*2+1],m=h*r+u;o[3*f+0]=u/s-.5,o[3*f+1]=.5-h/s,o[3*f+2]=t[m],c[2*f+0]=u/s,c[2*f+1]=1-h/s}const l=Qh(o,n);return{position:{value:o,size:3},texcoord:{value:c,size:2},normal:{value:l,size:3}}}}function ds(...i){if(i.length<1)throw new Error("concatenateTypedArrays: at least one typed array is required");const t=i[0].constructor,e=i.reduce((s,a)=>s+a.length,0),n=new t(e);let r=0;for(const s of i)n.set(s,r),r+=s.length;return n}function E1(i,t,e,n){const r=w1(t),s=r.length,a=new Float32Array(s*6),o=new Float32Array(s*4),c=new t.constructor(s*6),l=new Float32Array(s*6);for(let u=0;u<s;u++)T1({edge:r[u],edgeIndex:u,attributes:i,skirtHeight:e,newPosition:a,newTexcoord0:o,newTriangles:c,newNormals:l});i.position.value=ds(i.position.value,a),i.texcoord.value=ds(i.texcoord.value,o),i.normal.value=ds(i.normal.value,l);const f=ds(t,c);return{attributes:i,indices:f}}function w1(i){const t=[],e=Array.isArray(i)?i:Array.from(i);for(let r=0;r<e.length;r+=3)t.push([e[r],e[r+1]],[e[r+1],e[r+2]],[e[r+2],e[r]]);t.sort(([r,s],[a,o])=>{const c=Math.min(r,s),l=Math.min(a,o);return c!==l?c-l:Math.max(r,s)-Math.max(a,o)});const n=[];for(let r=0;r<t.length;r++)r+1<t.length&&t[r][0]===t[r+1][1]&&t[r][1]===t[r+1][0]?r++:n.push(t[r]);return n}function T1({edge:i,edgeIndex:t,attributes:e,skirtHeight:n,newPosition:r,newTexcoord0:s,newTriangles:a,newNormals:o}){const c=e.position.value.length/3,l=t*2,f=l+1;r.set(e.position.value.subarray(i[0]*3,i[0]*3+3),l*3),r[l*3+2]-=n,r.set(e.position.value.subarray(i[1]*3,i[1]*3+3),f*3),r[f*3+2]-=n,s.set(e.texcoord.value.subarray(i[0]*2,i[0]*2+2),l*2),s.set(e.texcoord.value.subarray(i[1]*2,i[1]*2+2),f*2);const u=t*6;a[u]=i[0],a[u+1]=c+f,a[u+2]=i[1],a[u+3]=c+f,a[u+4]=i[0],a[u+5]=c+l,o[u]=0,o[u+1]=0,o[u+2]=1,o[u+3]=0,o[u+4]=0,o[u+5]=1}class Gi extends Tr{constructor(){super(1,1,1,1),this.type="TileGeometry"}setAttributes(t,e=0){const n=e===0?0:2e5/e/e;n>0&&(t=E1(t.attributes,t.indices,n));const{attributes:r,indices:s}=t;return this.setIndex(new we(s,1)),this.setAttribute("position",new we(r.position.value,r.position.size)),this.setAttribute("uv",new we(r.texcoord.value,r.texcoord.size)),this.setAttribute("normal",new we(r.normal.value,r.normal.size)),this}setData(t,e,n=!1){if(n){const r=Math.floor(Math.sqrt(t.length)),s=new S1(r).createTile(t).getGeometryData(v1[e]||0);this.setAttributes(s,e)}else{const r=x1(t);this.setAttributes(r,e)}return this}}class qc extends Wh{constructor(){super(...arguments),this.onParseEnd=void 0}parseEnd(t){this.onParseEnd&&this.onParseEnd(t)}}const jc={name:"GuoJF"},_n={manager:new qc,demLoaderMap:new Map,imgLoaderMap:new Map,registerMaterialLoader(i){return this.imgLoaderMap.set(i.dataType,i),i.info.author=i.info.author??jc.name,this},registerGeometryLoader(i){return this.demLoaderMap.set(i.dataType,i),i.info.author=i.info.author??jc.name,this},getMaterialLoader(i){const t=typeof i=="string"?i:i.dataType,e=this.imgLoaderMap.get(t);if(e)return e;throw new Error(`Image source type "${t}" is not supported!`)},getGeometryLoader(i){const t=typeof i=="string"?i:i.dataType,e=this.demLoaderMap.get(t);if(e)return e;throw new Error(`DEM source type "${t}" is not supported!`)},getLoaders(){return{imgLoaders:Array.from(this.imgLoaderMap.values()),demLoaders:Array.from(this.demLoaderMap.values())}},reset(){this.demLoaderMap.clear(),this.imgLoaderMap.clear(),this.manager=new qc}};function tu(i,t){const e=Math.floor(i[0]*t),n=Math.floor(i[1]*t),r=Math.floor((i[2]-i[0])*t),s=Math.floor((i[3]-i[1])*t);return{sx:e,sy:n,sw:r,sh:s}}function eu(i,t,e,n){if(n<i.minLevel)return{url:void 0,clipBounds:[0,0,1,1]};if(n<=i.maxLevel)return{url:i.getUrl(t,e,n),clipBounds:[0,0,1,1]};const r=C1(t,e,n,i.maxLevel),s=r.coord;return{url:i.getUrl(s.x,s.y,s.z),clipBounds:r.bounds}}function A1(i,t){const e=i.width,n=new OffscreenCanvas(e,e),r=n.getContext("2d"),{sx:s,sy:a,sw:o,sh:c}=tu(t,i.width);return r.drawImage(i,s,a,o,c,0,0,e,e),n}function C1(i,t,e,n){const r=2**(e-n),s=Math.floor(i/r),a=Math.floor(t/r),o=i/r-s,c=t/r-a,l=(i+1)/r-s,f=(t+1)/r-a;return{coord:{x:s,y:a,z:n},bounds:[o,c,l,f]}}function R1(i,t,e){if(t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[2]&&t[3]>=e[3])return i;const[n,r,s,a]=t,[o,c,l,f]=e,u=Math.max(o,n),h=Math.min(l,s),m=Math.max(c,r),g=Math.min(f,a);if(u>=h||m>=g)return i;const v=new OffscreenCanvas(i.width,i.height),d=v.getContext("2d");d.drawImage(i,0,0);const p=l-o,x=f-c,_=(u-o)/p*v.width,S=(h-o)/p*v.width,E=v.height-(g-c)/x*v.height,M=v.height-(m-c)/x*v.height,w={x:_,y:E,w:S-_,h:M-E};return d.globalCompositeOperation="destination-in",d.fillRect(w.x,w.y,w.w,w.h),v}class P1{constructor(){this._bounds=[-180,-85,180,85],this._maxThreads=5,this._downloadingCount=0,this._imgSource=[],this.debug=0,this._errorMaterial=new jo({color:0,transparent:!0,opacity:.2,name:"error-material"})}get bounds(){return this._bounds}set bounds(t){this._bounds=t}get maxThreads(){return this._maxThreads}set maxThreads(t){this._maxThreads=t}get downloadingThreads(){return this._downloadingCount}get imgSource(){return this._imgSource}set imgSource(t){this._imgSource=t}get demSource(){return this._demSource}set demSource(t){this._demSource=t}get projectionID(){var t;return((t=this.imgSource[0])==null?void 0:t.projectionID)??"3857"}get manager(){return _n.manager}log(...t){Ro.error(...t)}async update(t,e){this._downloadingCount++;let n=!1;try{const r=await this.updateMaterial(t,e),s=await this.updateGeometry(t,e);n=r||s,n&&e.syncGroups()}finally{this._downloadingCount--}return n}async updateGeometry(t,e){const n=this.demSource;if(!n||!this._checkBounds(n,t))return e.setGeometry(new Gi),!0;if(e.geometry.userData.source===n)return!1;const r=await _n.getGeometryLoader(n).load({source:n,...t}).then(s=>(s.userData.source=n,s)).catch(s=>(this.log("Failed to load geometry:",s),new Gi));return e.setGeometry(r),!0}async updateMaterial(t,e){const n=e.material,r=this.imgSource.filter(c=>this._checkBounds(c,t)),s=[];let a=n.length!==r.length;const o=async c=>await _n.getMaterialLoader(c).load({source:c,...t}).then(l=>(l.userData.source=c,l)).catch(l=>(this.log("Failed to load material:",l),this._errorMaterial.clone()));for(const c of r){const l=n.find(f=>{var u;return((u=f==null?void 0:f.userData)==null?void 0:u.source)===c});if(l)s.push(l);else{a=!0;const f=await o(c);this._materialClip(f,c,t),s.push(f)}}return e.syncMaterials(s),a}_materialClip(t,e,n){if("map"in t&&t.map instanceof ge){const r=t.map;r.image&&(r.image=R1(r.image,e._projectionBounds,n.bounds)),r.needsUpdate=!0}return this}_checkBounds(t,e){const n=t._projectionBounds,r=e.bounds;return e.z>=t.minLevel&&r[2]>=n[0]&&r[3]>=n[1]&&r[0]<=n[2]&&r[1]<=n[3]}}class al{constructor(){this.info={version:Zi,description:"Base class for terrain loaders"},this.dataType=""}async load(t){const{source:e,x:n,y:r,z:s}=t,{url:a,clipBounds:o}=eu(e,n,r,s);if(a){const c=await this.doLoad(a,{...t,clipBounds:o});return _n.manager.parseEnd(c),c}else return new Gi}}class I1{constructor(){this.info={version:Zi,description:"Base class for image loaders"},this.dataType="",this._material=new m1}get material(){return this._material}set material(t){this._material!==t&&(this._material.dispose(),this._material=t)}async load(t){const{source:e,x:n,y:r,z:s}=t,a=this.createMaterial(t);a.transparent=t.source.transparent,a.opacity=t.source.opacity;const{url:o,clipBounds:c}=eu(e,n,r,s);if(o){const f=await this.doLoad(o,{...t,clipBounds:c});f&&(a.map=f,a.addEventListener("dispose",l))}return a;function l(f){const u=f.target.map;u&&(u.image instanceof ImageBitmap&&u.image.close(),u.dispose()),f.target.removeEventListener("dispose",l)}}createMaterial(t){return this.material.clone()}async doLoad(t,e){return Promise.resolve(void 0)}}class D1 extends I1{constructor(){super(...arguments),this.info={version:Zi,description:"XYZ tile image loader for loading standard XYZ tile images"},this.dataType="image",this.loader=new Cr(_n.manager)}async doLoad(t,e){let n=await this.loader.loadAsync(t);const r=e.clipBounds;r[2]-r[0]<1&&(n=A1(n,r));const s=new ge(n);return s.colorSpace=Oe,s}}class ol{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const n=this.workersResolve[t];if(n&&n(e),this.queue.length){const{resolve:r,msg:s,transfer:a}=this.queue.shift();this.workersResolve[t]=r,this.workers[t].postMessage(s,a)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise(n=>{const r=this._getIdleWorker();r!==-1?(this._initWorker(r),this.workerStatus|=1<<r,this.workersResolve[r]=n,this.workers[r].postMessage(t,e)):this.queue.push({resolve:n,msg:t,transfer:e})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const nu='(function(){"use strict";class J{constructor(d=257){this.gridSize=d;const k=d-1;if(k&k-1)throw new Error(`Grid size must be 2^n+1, current size is ${d}`);this.numTriangles=k*k*2-2,this.numParentTriangles=this.numTriangles-k*k,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let V=0;V<this.numTriangles;V++){let a=V+2,r=0,e=0,s=0,t=0,i=0,u=0;for(a&1?s=t=i=k:r=e=u=k;(a>>=1)>1;){const f=r+s>>1,h=e+t>>1;a&1?(s=r,t=e,r=i,e=u):(r=s,e=t,s=i,t=u),i=f,u=h}const n=V*4;this.coords[n+0]=r,this.coords[n+1]=e,this.coords[n+2]=s,this.coords[n+3]=t}}createTile(d){return new K(d,this)}}class K{constructor(d,k){const V=k.gridSize;if(d.length!==V*V)throw new Error(`Terrain data length expected ${V*V} (${V} x ${V}), but got ${d.length}`);this.terrain=d,this.martini=k,this.errors=new Float32Array(d.length),this.update()}update(){const{numTriangles:d,numParentTriangles:k,coords:V,gridSize:a}=this.martini,{terrain:r,errors:e}=this;for(let s=d-1;s>=0;s--){const t=s*4,i=V[t+0],u=V[t+1],n=V[t+2],f=V[t+3],h=i+n>>1,o=u+f>>1,c=h+o-u,v=o+i-h,m=(r[u*a+i]+r[f*a+n])/2,l=o*a+h,g=Math.abs(m-r[l]);if(e[l]=Math.max(e[l],g),s<k){const x=(u+v>>1)*a+(i+c>>1),D=(f+v>>1)*a+(n+c>>1);e[l]=Math.max(e[l],e[x],e[D])}}}getGeometryData(d=0){const{gridSize:k,indices:V}=this.martini,{errors:a}=this;let r=0,e=0;const s=k-1;let t,i,u=0;V.fill(0);function n(l,g,x,D,p,U){const M=l+x>>1,z=g+D>>1;Math.abs(l-p)+Math.abs(g-U)>1&&a[z*k+M]>d?(n(p,U,l,g,M,z),n(x,D,p,U,M,z)):(t=g*k+l,i=D*k+x,u=U*k+p,V[t]===0&&(V[t]=++r),V[i]===0&&(V[i]=++r),V[u]===0&&(V[u]=++r),e++)}n(0,0,s,s,s,0),n(s,s,0,0,0,s);const f=r*2,h=e*3,o=new Uint16Array(f),c=new Uint32Array(h);let v=0;function m(l,g,x,D,p,U){const M=l+x>>1,z=g+D>>1;if(Math.abs(l-p)+Math.abs(g-U)>1&&a[z*k+M]>d)m(p,U,l,g,M,z),m(x,D,p,U,M,z);else{const I=V[g*k+l]-1,w=V[D*k+x]-1,T=V[U*k+p]-1;o[2*I]=l,o[2*I+1]=g,o[2*w]=x,o[2*w+1]=D,o[2*T]=p,o[2*T+1]=U,c[v++]=I,c[v++]=w,c[v++]=T}}return m(0,0,s,s,s,0),m(s,s,0,0,0,s),{attributes:this._getMeshAttributes(this.terrain,o,c),indices:c}}_getMeshAttributes(d,k,V){const a=Math.floor(Math.sqrt(d.length)),r=a-1,e=k.length/2,s=new Float32Array(e*3),t=new Float32Array(e*2);for(let u=0;u<e;u++){const n=k[u*2],f=k[u*2+1],h=f*a+n;s[3*u+0]=n/r-.5,s[3*u+1]=.5-f/r,s[3*u+2]=d[h],t[2*u+0]=n/r,t[2*u+1]=1-f/r}const i=ee(s,V);return{position:{value:s,size:3},texcoord:{value:t,size:2},normal:{value:i,size:3}}}}function W(y){const d=[];for(let k=0;k<y;k++)if(k>=17)d.push(0);else{const V=1-k/17;d.push(Math.round(7e3*V*V*V))}return d}const P=W(21);function ee(y,d){const k=new Float32Array(y.length);for(let V=0;V<d.length;V+=3){const a=d[V]*3,r=d[V+1]*3,e=d[V+2]*3,s=y[r]-y[a],t=y[r+1]-y[a+1],i=y[r+2]-y[a+2],u=y[e]-y[a],n=y[e+1]-y[a+1],f=y[e+2]-y[a+2],h=t*f-i*n,o=i*u-s*f,c=s*n-t*u,v=1/Math.hypot(h,o,c);k[a]=k[r]=k[e]=h*v,k[a+1]=k[r+1]=k[e+1]=o*v,k[a+2]=k[r+2]=k[e+2]=c*v}return k}function re(y,d){const k=(e,s,t)=>{const i=Math.floor(e[0]*s),u=Math.floor(e[1]*t),n=Math.floor((e[2]-e[0])*s)+1,f=Math.floor((e[3]-e[1])*t)+1;return{x:i,y:u,w:n,h:f}},V=(e,s,t,i,u,n)=>{const f=new Float32Array(u*n);for(let h=0;h<n;h++)for(let o=0;o<u;o++){const c=(h+i)*s+(o+t),v=h*u+o;f[v]=e[c]}return f},a=k(d,y.width,y.height);return{dem:V(y.dem,y.width,a.x,a.y,a.w,a.h),width:a.w,height:a.h}}function ie(y,d){return new J(y.width).createTile(y.dem).getGeometryData(P[d]||0)}/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */const ne=(function(){var y={};y.defaultNoDataValue=-34027999387901484e22,y.decode=function(e,s){s=s||{};var t=s.encodedMaskData||s.encodedMaskData===null,i=a(e,s.inputOffset||0,t),u=s.noDataValue!==null?s.noDataValue:y.defaultNoDataValue,n=d(i,s.pixelType||Float32Array,s.encodedMaskData,u,s.returnMask),f={width:i.width,height:i.height,pixelData:n.resultPixels,minValue:n.minValue,maxValue:i.pixels.maxValue,noDataValue:u};return n.resultMask&&(f.maskData=n.resultMask),s.returnEncodedMask&&i.mask&&(f.encodedMaskData=i.mask.bitset?i.mask.bitset:null),s.returnFileInfo&&(f.fileInfo=k(i),s.computeUsedBitDepths&&(f.fileInfo.bitDepths=V(i))),f};var d=function(e,s,t,i,u){var n=0,f=e.pixels.numBlocksX,h=e.pixels.numBlocksY,o=Math.floor(e.width/f),c=Math.floor(e.height/h),v=2*e.maxZError,m=Number.MAX_VALUE,l;t=t||(e.mask?e.mask.bitset:null);var g,x;g=new s(e.width*e.height),u&&t&&(x=new Uint8Array(e.width*e.height));for(var D=new Float32Array(o*c),p,U,M=0;M<=h;M++){var z=M!==h?c:e.height%h;if(z!==0)for(var I=0;I<=f;I++){var w=I!==f?o:e.width%f;if(w!==0){var T=M*e.width*c+I*o,A=e.width-w,S=e.pixels.blocks[n],b,L,F;S.encoding<2?(S.encoding===0?b=S.rawData:(r(S.stuffedData,S.bitsPerPixel,S.numValidPixels,S.offset,v,D,e.pixels.maxValue),b=D),L=0):S.encoding===2?F=0:F=S.offset;var B;if(t)for(U=0;U<z;U++){for(T&7&&(B=t[T>>3],B<<=T&7),p=0;p<w;p++)T&7||(B=t[T>>3]),B&128?(x&&(x[T]=1),l=S.encoding<2?b[L++]:F,m=m>l?l:m,g[T++]=l):(x&&(x[T]=0),g[T++]=i),B<<=1;T+=A}else if(S.encoding<2)for(U=0;U<z;U++){for(p=0;p<w;p++)l=b[L++],m=m>l?l:m,g[T++]=l;T+=A}else for(m=m>F?F:m,U=0;U<z;U++){for(p=0;p<w;p++)g[T++]=F;T+=A}if(S.encoding===1&&L!==S.numValidPixels)throw"Block and Mask do not match";n++}}}return{resultPixels:g,resultMask:x,minValue:m}},k=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},V=function(e){for(var s=e.pixels.numBlocksX*e.pixels.numBlocksY,t={},i=0;i<s;i++){var u=e.pixels.blocks[i];u.encoding===0?t.float32=!0:u.encoding===1?t[u.bitsPerPixel]=!0:t[0]=!0}return Object.keys(t)},a=function(e,s,t){var i={},u=new Uint8Array(e,s,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,u),i.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+i.fileIdentifierString;s+=10;var n=new DataView(e,s,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),s+=24,!t)if(n=new DataView(e,s,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),s+=16,i.mask.numBytes>0){var f=new Uint8Array(Math.ceil(i.width*i.height/8));n=new DataView(e,s,i.mask.numBytes);var h=n.getInt16(0,!0),o=2,c=0;do{if(h>0)for(;h--;)f[c++]=n.getUint8(o++);else{var v=n.getUint8(o++);for(h=-h;h--;)f[c++]=v}h=n.getInt16(o,!0),o+=2}while(o<i.mask.numBytes);if(h!==-32768||c<f.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=f,s+=i.mask.numBytes}else(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)===0&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,s,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),s+=16;var m=i.pixels.numBlocksX,l=i.pixels.numBlocksY,g=m+(i.width%m>0?1:0),x=l+(i.height%l>0?1:0);i.pixels.blocks=new Array(g*x);for(var D=0,p=0;p<x;p++)for(var U=0;U<g;U++){var M=0,z=e.byteLength-s;n=new DataView(e,s,Math.min(10,z));var I={};i.pixels.blocks[D++]=I;var w=n.getUint8(0);if(M++,I.encoding=w&63,I.encoding>3)throw"Invalid block encoding ("+I.encoding+")";if(I.encoding===2){s++;continue}if(w!==0&&w!==2){if(w>>=6,I.offsetType=w,w===2)I.offset=n.getInt8(1),M++;else if(w===1)I.offset=n.getInt16(1,!0),M+=2;else if(w===0)I.offset=n.getFloat32(1,!0),M+=4;else throw"Invalid block offset type";if(I.encoding===1)if(w=n.getUint8(M),M++,I.bitsPerPixel=w&63,w>>=6,I.numValidPixelsType=w,w===2)I.numValidPixels=n.getUint8(M),M++;else if(w===1)I.numValidPixels=n.getUint16(M,!0),M+=2;else if(w===0)I.numValidPixels=n.getUint32(M,!0),M+=4;else throw"Invalid valid pixel count type"}if(s+=M,I.encoding!==3){var T,A;if(I.encoding===0){var S=(i.pixels.numBytes-1)/4;if(S!==Math.floor(S))throw"uncompressed block has invalid length";T=new ArrayBuffer(S*4),A=new Uint8Array(T),A.set(new Uint8Array(e,s,S*4));var b=new Float32Array(T);I.rawData=b,s+=S*4}else if(I.encoding===1){var L=Math.ceil(I.numValidPixels*I.bitsPerPixel/8),F=Math.ceil(L/4);T=new ArrayBuffer(F*4),A=new Uint8Array(T),A.set(new Uint8Array(e,s,L)),I.stuffedData=new Uint32Array(T),s+=L}}}return i.eofOffset=s,i},r=function(e,s,t,i,u,n,f){var h=(1<<s)-1,o=0,c,v=0,m,l,g=Math.ceil((f-i)/u),x=e.length*4-Math.ceil(s*t/8);for(e[e.length-1]<<=8*x,c=0;c<t;c++){if(v===0&&(l=e[o++],v=32),v>=s)m=l>>>v-s&h,v-=s;else{var D=s-v;m=(l&h)<<D&h,l=e[o++],v=32-D,m+=l>>>v}n[c]=m<g?i+m*u:f}return n};return y})(),te=(function(){var y={unstuff:function(a,r,e,s,t,i,u,n){var f=(1<<e)-1,h=0,o,c=0,v,m,l,g,x=a.length*4-Math.ceil(e*s/8);if(a[a.length-1]<<=8*x,t)for(o=0;o<s;o++)c===0&&(m=a[h++],c=32),c>=e?(v=m>>>c-e&f,c-=e):(l=e-c,v=(m&f)<<l&f,m=a[h++],c=32-l,v+=m>>>c),r[o]=t[v];else for(g=Math.ceil((n-i)/u),o=0;o<s;o++)c===0&&(m=a[h++],c=32),c>=e?(v=m>>>c-e&f,c-=e):(l=e-c,v=(m&f)<<l&f,m=a[h++],c=32-l,v+=m>>>c),r[o]=v<g?i+v*u:n},unstuffLUT:function(a,r,e,s,t,i){var u=(1<<r)-1,n=0,f=0,h=0,o=0,c=0,v,m=[],l=a.length*4-Math.ceil(r*e/8);a[a.length-1]<<=8*l;var g=Math.ceil((i-s)/t);for(f=0;f<e;f++)o===0&&(v=a[n++],o=32),o>=r?(c=v>>>o-r&u,o-=r):(h=r-o,c=(v&u)<<h&u,v=a[n++],o=32-h,c+=v>>>o),m[f]=c<g?s+c*t:i;return m.unshift(s),m},unstuff2:function(a,r,e,s,t,i,u,n){var f=(1<<e)-1,h=0,o,c=0,v=0,m,l,g;if(t)for(o=0;o<s;o++)c===0&&(l=a[h++],c=32,v=0),c>=e?(m=l>>>v&f,c-=e,v+=e):(g=e-c,m=l>>>v&f,l=a[h++],c=32-g,m|=(l&(1<<g)-1)<<e-g,v=g),r[o]=t[m];else{var x=Math.ceil((n-i)/u);for(o=0;o<s;o++)c===0&&(l=a[h++],c=32,v=0),c>=e?(m=l>>>v&f,c-=e,v+=e):(g=e-c,m=l>>>v&f,l=a[h++],c=32-g,m|=(l&(1<<g)-1)<<e-g,v=g),r[o]=m<x?i+m*u:n}return r},unstuffLUT2:function(a,r,e,s,t,i){var u=(1<<r)-1,n=0,f=0,h=0,o=0,c=0,v=0,m,l=[],g=Math.ceil((i-s)/t);for(f=0;f<e;f++)o===0&&(m=a[n++],o=32,v=0),o>=r?(c=m>>>v&u,o-=r,v+=r):(h=r-o,c=m>>>v&u,m=a[n++],o=32-h,c|=(m&(1<<h)-1)<<r-h,v=h),l[f]=c<g?s+c*t:i;return l.unshift(s),l},originalUnstuff:function(a,r,e,s){var t=(1<<e)-1,i=0,u,n=0,f,h,o,c=a.length*4-Math.ceil(e*s/8);for(a[a.length-1]<<=8*c,u=0;u<s;u++)n===0&&(h=a[i++],n=32),n>=e?(f=h>>>n-e&t,n-=e):(o=e-n,f=(h&t)<<o&t,h=a[i++],n=32-o,f+=h>>>n),r[u]=f;return r},originalUnstuff2:function(a,r,e,s){var t=(1<<e)-1,i=0,u,n=0,f=0,h,o,c;for(u=0;u<s;u++)n===0&&(o=a[i++],n=32,f=0),n>=e?(h=o>>>f&t,n-=e,f+=e):(c=e-n,h=o>>>f&t,o=a[i++],n=32-c,h|=(o&(1<<c)-1)<<e-c,f=c),r[u]=h;return r}},d={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(a){for(var r=65535,e=65535,s=a.length,t=Math.floor(s/2),i=0;t;){var u=t>=359?359:t;t-=u;do r+=a[i++]<<8,e+=r+=a[i++];while(--u);r=(r&65535)+(r>>>16),e=(e&65535)+(e>>>16)}return s&1&&(e+=r+=a[i]<<8),r=(r&65535)+(r>>>16),e=(e&65535)+(e>>>16),(e<<16|r)>>>0},readHeaderInfo:function(a,r){var e=r.ptr,s=new Uint8Array(a,e,6),t={};if(t.fileIdentifierString=String.fromCharCode.apply(null,s),t.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+t.fileIdentifierString;e+=6;var i=new DataView(a,e,8),u=i.getInt32(0,!0);t.fileVersion=u,e+=4,u>=3&&(t.checksum=i.getUint32(4,!0),e+=4),i=new DataView(a,e,12),t.height=i.getUint32(0,!0),t.width=i.getUint32(4,!0),e+=8,u>=4?(t.numDims=i.getUint32(8,!0),e+=4):t.numDims=1,i=new DataView(a,e,40),t.numValidPixel=i.getUint32(0,!0),t.microBlockSize=i.getInt32(4,!0),t.blobSize=i.getInt32(8,!0),t.imageType=i.getInt32(12,!0),t.maxZError=i.getFloat64(16,!0),t.zMin=i.getFloat64(24,!0),t.zMax=i.getFloat64(32,!0),e+=40,r.headerInfo=t,r.ptr=e;var n,f;if(u>=3&&(f=u>=4?52:48,n=this.computeChecksumFletcher32(new Uint8Array(a,e-f,t.blobSize-14)),n!==t.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(a,r){var e=r.headerInfo,s=this.getDataTypeArray(e.imageType),t=e.numDims*this.getDataTypeSize(e.imageType),i=this.readSubArray(a,r.ptr,s,t),u=this.readSubArray(a,r.ptr+t,s,t);r.ptr+=2*t;var n,f=!0;for(n=0;n<e.numDims;n++)if(i[n]!==u[n]){f=!1;break}return e.minValues=i,e.maxValues=u,f},readSubArray:function(a,r,e,s){var t;if(e===Uint8Array)t=new Uint8Array(a,r,s);else{var i=new ArrayBuffer(s),u=new Uint8Array(i);u.set(new Uint8Array(a,r,s)),t=new e(i)}return t},readMask:function(a,r){var e=r.ptr,s=r.headerInfo,t=s.width*s.height,i=s.numValidPixel,u=new DataView(a,e,4),n={};if(n.numBytes=u.getUint32(0,!0),e+=4,(i===0||t===i)&&n.numBytes!==0)throw"invalid mask";var f,h;if(i===0)f=new Uint8Array(Math.ceil(t/8)),n.bitset=f,h=new Uint8Array(t),r.pixels.resultMask=h,e+=n.numBytes;else if(n.numBytes>0){f=new Uint8Array(Math.ceil(t/8)),u=new DataView(a,e,n.numBytes);var o=u.getInt16(0,!0),c=2,v=0,m=0;do{if(o>0)for(;o--;)f[v++]=u.getUint8(c++);else for(m=u.getUint8(c++),o=-o;o--;)f[v++]=m;o=u.getInt16(c,!0),c+=2}while(c<n.numBytes);if(o!==-32768||v<f.length)throw"Unexpected end of mask RLE encoding";h=new Uint8Array(t);var l=0,g=0;for(g=0;g<t;g++)g&7?(l=f[g>>3],l<<=g&7):l=f[g>>3],l&128&&(h[g]=1);r.pixels.resultMask=h,n.bitset=f,e+=n.numBytes}return r.ptr=e,r.mask=n,!0},readDataOneSweep:function(a,r,e,s){var t=r.ptr,i=r.headerInfo,u=i.numDims,n=i.width*i.height,f=i.imageType,h=i.numValidPixel*d.getDataTypeSize(f)*u,o,c=r.pixels.resultMask;if(e===Uint8Array)o=new Uint8Array(a,t,h);else{var v=new ArrayBuffer(h),m=new Uint8Array(v);m.set(new Uint8Array(a,t,h)),o=new e(v)}if(o.length===n*u)s?r.pixels.resultPixels=d.swapDimensionOrder(o,n,u,e,!0):r.pixels.resultPixels=o;else{r.pixels.resultPixels=new e(n*u);var l=0,g=0,x=0,D=0;if(u>1){if(s){for(g=0;g<n;g++)if(c[g])for(D=g,x=0;x<u;x++,D+=n)r.pixels.resultPixels[D]=o[l++]}else for(g=0;g<n;g++)if(c[g])for(D=g*u,x=0;x<u;x++)r.pixels.resultPixels[D+x]=o[l++]}else for(g=0;g<n;g++)c[g]&&(r.pixels.resultPixels[g]=o[l++])}return t+=h,r.ptr=t,!0},readHuffmanTree:function(a,r){var e=this.HUFFMAN_LUT_BITS_MAX,s=new DataView(a,r.ptr,16);r.ptr+=16;var t=s.getInt32(0,!0);if(t<2)throw"unsupported Huffman version";var i=s.getInt32(4,!0),u=s.getInt32(8,!0),n=s.getInt32(12,!0);if(u>=n)return!1;var f=new Uint32Array(n-u);d.decodeBits(a,r,f);var h=[],o,c,v,m;for(o=u;o<n;o++)c=o-(o<i?0:i),h[c]={first:f[o-u],second:null};var l=a.byteLength-r.ptr,g=Math.ceil(l/4),x=new ArrayBuffer(g*4),D=new Uint8Array(x);D.set(new Uint8Array(a,r.ptr,l));var p=new Uint32Array(x),U=0,M,z=0;for(M=p[0],o=u;o<n;o++)c=o-(o<i?0:i),m=h[c].first,m>0&&(h[c].second=M<<U>>>32-m,32-U>=m?(U+=m,U===32&&(U=0,z++,M=p[z])):(U+=m-32,z++,M=p[z],h[c].second|=M>>>32-U));var I=0,w=0,T=new k;for(o=0;o<h.length;o++)h[o]!==void 0&&(I=Math.max(I,h[o].first));I>=e?w=e:w=I;var A=[],S,b,L,F,B,C;for(o=u;o<n;o++)if(c=o-(o<i?0:i),m=h[c].first,m>0)if(S=[m,c],m<=w)for(b=h[c].second<<w-m,L=1<<w-m,v=0;v<L;v++)A[b|v]=S;else for(b=h[c].second,C=T,F=m-1;F>=0;F--)B=b>>>F&1,B?(C.right||(C.right=new k),C=C.right):(C.left||(C.left=new k),C=C.left),F===0&&!C.val&&(C.val=S[1]);return{decodeLut:A,numBitsLUTQick:w,numBitsLUT:I,tree:T,stuffedData:p,srcPtr:z,bitPos:U}},readHuffman:function(a,r,e,s){var t=r.headerInfo,i=t.numDims,u=r.headerInfo.height,n=r.headerInfo.width,f=n*u,h=this.readHuffmanTree(a,r),o=h.decodeLut,c=h.tree,v=h.stuffedData,m=h.srcPtr,l=h.bitPos,g=h.numBitsLUTQick,x=h.numBitsLUT,D=r.headerInfo.imageType===0?128:0,p,U,M,z=r.pixels.resultMask,I,w,T,A,S,b,L,F=0;l>0&&(m++,l=0);var B=v[m],C=r.encodeMode===1,_=new e(f*i),O=_,X;if(i<2||C){for(X=0;X<i;X++)if(i>1&&(O=new e(_.buffer,f*X,f),F=0),r.headerInfo.numValidPixel===n*u)for(b=0,A=0;A<u;A++)for(S=0;S<n;S++,b++){if(U=0,I=B<<l>>>32-g,w=I,32-l<g&&(I|=v[m+1]>>>64-l-g,w=I),o[w])U=o[w][1],l+=o[w][0];else for(I=B<<l>>>32-x,w=I,32-l<x&&(I|=v[m+1]>>>64-l-x,w=I),p=c,L=0;L<x;L++)if(T=I>>>x-L-1&1,p=T?p.right:p.left,!(p.left||p.right)){U=p.val,l=l+L+1;break}l>=32&&(l-=32,m++,B=v[m]),M=U-D,C?(S>0?M+=F:A>0?M+=O[b-n]:M+=F,M&=255,O[b]=M,F=M):O[b]=M}else for(b=0,A=0;A<u;A++)for(S=0;S<n;S++,b++)if(z[b]){if(U=0,I=B<<l>>>32-g,w=I,32-l<g&&(I|=v[m+1]>>>64-l-g,w=I),o[w])U=o[w][1],l+=o[w][0];else for(I=B<<l>>>32-x,w=I,32-l<x&&(I|=v[m+1]>>>64-l-x,w=I),p=c,L=0;L<x;L++)if(T=I>>>x-L-1&1,p=T?p.right:p.left,!(p.left||p.right)){U=p.val,l=l+L+1;break}l>=32&&(l-=32,m++,B=v[m]),M=U-D,C?(S>0&&z[b-1]?M+=F:A>0&&z[b-n]?M+=O[b-n]:M+=F,M&=255,O[b]=M,F=M):O[b]=M}}else for(b=0,A=0;A<u;A++)for(S=0;S<n;S++)if(b=A*n+S,!z||z[b])for(X=0;X<i;X++,b+=f){if(U=0,I=B<<l>>>32-g,w=I,32-l<g&&(I|=v[m+1]>>>64-l-g,w=I),o[w])U=o[w][1],l+=o[w][0];else for(I=B<<l>>>32-x,w=I,32-l<x&&(I|=v[m+1]>>>64-l-x,w=I),p=c,L=0;L<x;L++)if(T=I>>>x-L-1&1,p=T?p.right:p.left,!(p.left||p.right)){U=p.val,l=l+L+1;break}l>=32&&(l-=32,m++,B=v[m]),M=U-D,O[b]=M}r.ptr=r.ptr+(m+1)*4+(l>0?4:0),r.pixels.resultPixels=_,i>1&&!s&&(r.pixels.resultPixels=d.swapDimensionOrder(_,f,i,e))},decodeBits:function(a,r,e,s,t){{var i=r.headerInfo,u=i.fileVersion,n=0,f=a.byteLength-r.ptr>=5?5:a.byteLength-r.ptr,h=new DataView(a,r.ptr,f),o=h.getUint8(0);n++;var c=o>>6,v=c===0?4:3-c,m=(o&32)>0,l=o&31,g=0;if(v===1)g=h.getUint8(n),n++;else if(v===2)g=h.getUint16(n,!0),n+=2;else if(v===4)g=h.getUint32(n,!0),n+=4;else throw"Invalid valid pixel count type";var x=2*i.maxZError,D,p,U,M,z,I,w,T,A,S=i.numDims>1?i.maxValues[t]:i.zMax;if(m){for(r.counter.lut++,T=h.getUint8(n),n++,M=Math.ceil((T-1)*l/8),z=Math.ceil(M/4),p=new ArrayBuffer(z*4),U=new Uint8Array(p),r.ptr+=n,U.set(new Uint8Array(a,r.ptr,M)),w=new Uint32Array(p),r.ptr+=M,A=0;T-1>>>A;)A++;M=Math.ceil(g*A/8),z=Math.ceil(M/4),p=new ArrayBuffer(z*4),U=new Uint8Array(p),U.set(new Uint8Array(a,r.ptr,M)),D=new Uint32Array(p),r.ptr+=M,u>=3?I=y.unstuffLUT2(w,l,T-1,s,x,S):I=y.unstuffLUT(w,l,T-1,s,x,S),u>=3?y.unstuff2(D,e,A,g,I):y.unstuff(D,e,A,g,I)}else r.counter.bitstuffer++,A=l,r.ptr+=n,A>0&&(M=Math.ceil(g*A/8),z=Math.ceil(M/4),p=new ArrayBuffer(z*4),U=new Uint8Array(p),U.set(new Uint8Array(a,r.ptr,M)),D=new Uint32Array(p),r.ptr+=M,u>=3?s==null?y.originalUnstuff2(D,e,A,g):y.unstuff2(D,e,A,g,!1,s,x,S):s==null?y.originalUnstuff(D,e,A,g):y.unstuff(D,e,A,g,!1,s,x,S))}},readTiles:function(a,r,e,s){var t=r.headerInfo,i=t.width,u=t.height,n=i*u,f=t.microBlockSize,h=t.imageType,o=d.getDataTypeSize(h),c=Math.ceil(i/f),v=Math.ceil(u/f);r.pixels.numBlocksY=v,r.pixels.numBlocksX=c,r.pixels.ptr=0;var m=0,l=0,g=0,x=0,D=0,p=0,U=0,M=0,z=0,I=0,w=0,T=0,A=0,S=0,b=0,L=0,F,B,C,_,O,X,R=new e(f*f),oe=u%f||f,ue=i%f||f,G,j,$=t.numDims,H,E=r.pixels.resultMask,Y=r.pixels.resultPixels,he=t.fileVersion,Q=he>=5?14:15,Z,q=t.zMax,N;for(g=0;g<v;g++)for(D=g!==v-1?f:oe,x=0;x<c;x++)for(p=x!==c-1?f:ue,w=g*i*f+x*f,T=i-p,H=0;H<$;H++){if($>1?(N=Y,w=g*i*f+x*f,Y=new e(r.pixels.resultPixels.buffer,n*H*o,n),q=t.maxValues[H]):N=null,U=a.byteLength-r.ptr,F=new DataView(a,r.ptr,Math.min(10,U)),B={},L=0,M=F.getUint8(0),L++,Z=t.fileVersion>=5?M&4:0,z=M>>6&255,I=M>>2&Q,I!==(x*f>>3&Q)||Z&&H===0)throw"integrity issue";if(X=M&3,X>3)throw r.ptr+=L,"Invalid block encoding ("+X+")";if(X===2){if(Z)if(E)for(m=0;m<D;m++)for(l=0;l<p;l++)E[w]&&(Y[w]=N[w]),w++;else for(m=0;m<D;m++)for(l=0;l<p;l++)Y[w]=N[w],w++;r.counter.constant++,r.ptr+=L;continue}else if(X===0){if(Z)throw"integrity issue";if(r.counter.uncompressed++,r.ptr+=L,A=D*p*o,S=a.byteLength-r.ptr,A=A<S?A:S,C=new ArrayBuffer(A%o===0?A:A+o-A%o),_=new Uint8Array(C),_.set(new Uint8Array(a,r.ptr,A)),O=new e(C),b=0,E)for(m=0;m<D;m++){for(l=0;l<p;l++)E[w]&&(Y[w]=O[b++]),w++;w+=T}else for(m=0;m<D;m++){for(l=0;l<p;l++)Y[w++]=O[b++];w+=T}r.ptr+=b*o}else if(G=d.getDataTypeUsed(Z&&h<6?4:h,z),j=d.getOnePixel(B,L,G,F),L+=d.getDataTypeSize(G),X===3)if(r.ptr+=L,r.counter.constantoffset++,E)for(m=0;m<D;m++){for(l=0;l<p;l++)E[w]&&(Y[w]=Z?Math.min(q,N[w]+j):j),w++;w+=T}else for(m=0;m<D;m++){for(l=0;l<p;l++)Y[w]=Z?Math.min(q,N[w]+j):j,w++;w+=T}else if(r.ptr+=L,d.decodeBits(a,r,R,j,H),L=0,Z)if(E)for(m=0;m<D;m++){for(l=0;l<p;l++)E[w]&&(Y[w]=R[L++]+N[w]),w++;w+=T}else for(m=0;m<D;m++){for(l=0;l<p;l++)Y[w]=R[L++]+N[w],w++;w+=T}else if(E)for(m=0;m<D;m++){for(l=0;l<p;l++)E[w]&&(Y[w]=R[L++]),w++;w+=T}else for(m=0;m<D;m++){for(l=0;l<p;l++)Y[w++]=R[L++];w+=T}}$>1&&!s&&(r.pixels.resultPixels=d.swapDimensionOrder(r.pixels.resultPixels,n,$,e))},formatFileInfo:function(a){return{fileIdentifierString:a.headerInfo.fileIdentifierString,fileVersion:a.headerInfo.fileVersion,imageType:a.headerInfo.imageType,height:a.headerInfo.height,width:a.headerInfo.width,numValidPixel:a.headerInfo.numValidPixel,microBlockSize:a.headerInfo.microBlockSize,blobSize:a.headerInfo.blobSize,maxZError:a.headerInfo.maxZError,pixelType:d.getPixelType(a.headerInfo.imageType),eofOffset:a.eofOffset,mask:a.mask?{numBytes:a.mask.numBytes}:null,pixels:{numBlocksX:a.pixels.numBlocksX,numBlocksY:a.pixels.numBlocksY,maxValue:a.headerInfo.zMax,minValue:a.headerInfo.zMin,noDataValue:a.noDataValue}}},constructConstantSurface:function(a,r){var e=a.headerInfo.zMax,s=a.headerInfo.zMin,t=a.headerInfo.maxValues,i=a.headerInfo.numDims,u=a.headerInfo.height*a.headerInfo.width,n=0,f=0,h=0,o=a.pixels.resultMask,c=a.pixels.resultPixels;if(o)if(i>1){if(r)for(n=0;n<i;n++)for(h=n*u,e=t[n],f=0;f<u;f++)o[f]&&(c[h+f]=e);else for(f=0;f<u;f++)if(o[f])for(h=f*i,n=0;n<i;n++)c[h+i]=t[n]}else for(f=0;f<u;f++)o[f]&&(c[f]=e);else if(i>1&&s!==e)if(r)for(n=0;n<i;n++)for(h=n*u,e=t[n],f=0;f<u;f++)c[h+f]=e;else for(f=0;f<u;f++)for(h=f*i,n=0;n<i;n++)c[h+n]=t[n];else for(f=0;f<u*i;f++)c[f]=e},getDataTypeArray:function(a){var r;switch(a){case 0:r=Int8Array;break;case 1:r=Uint8Array;break;case 2:r=Int16Array;break;case 3:r=Uint16Array;break;case 4:r=Int32Array;break;case 5:r=Uint32Array;break;case 6:r=Float32Array;break;case 7:r=Float64Array;break;default:r=Float32Array}return r},getPixelType:function(a){var r;switch(a){case 0:r="S8";break;case 1:r="U8";break;case 2:r="S16";break;case 3:r="U16";break;case 4:r="S32";break;case 5:r="U32";break;case 6:r="F32";break;case 7:r="F64";break;default:r="F32"}return r},isValidPixelValue:function(a,r){if(r==null)return!1;var e;switch(a){case 0:e=r>=-128&&r<=127;break;case 1:e=r>=0&&r<=255;break;case 2:e=r>=-32768&&r<=32767;break;case 3:e=r>=0&&r<=65536;break;case 4:e=r>=-2147483648&&r<=2147483647;break;case 5:e=r>=0&&r<=4294967296;break;case 6:e=r>=-34027999387901484e22&&r<=34027999387901484e22;break;case 7:e=r>=-17976931348623157e292&&r<=17976931348623157e292;break;default:e=!1}return e},getDataTypeSize:function(a){var r=0;switch(a){case 0:case 1:r=1;break;case 2:case 3:r=2;break;case 4:case 5:case 6:r=4;break;case 7:r=8;break;default:r=a}return r},getDataTypeUsed:function(a,r){var e=a;switch(a){case 2:case 4:e=a-r;break;case 3:case 5:e=a-2*r;break;case 6:r===0?e=a:r===1?e=2:e=1;break;case 7:r===0?e=a:e=a-2*r+1;break;default:e=a;break}return e},getOnePixel:function(a,r,e,s){var t=0;switch(e){case 0:t=s.getInt8(r);break;case 1:t=s.getUint8(r);break;case 2:t=s.getInt16(r,!0);break;case 3:t=s.getUint16(r,!0);break;case 4:t=s.getInt32(r,!0);break;case 5:t=s.getUInt32(r,!0);break;case 6:t=s.getFloat32(r,!0);break;case 7:t=s.getFloat64(r,!0);break;default:throw"the decoder does not understand this pixel type"}return t},swapDimensionOrder:function(a,r,e,s,t){var i=0,u=0,n=0,f=0,h=a;if(e>1)if(h=new s(r*e),t)for(i=0;i<r;i++)for(f=i,n=0;n<e;n++,f+=r)h[f]=a[u++];else for(i=0;i<r;i++)for(f=i,n=0;n<e;n++,f+=r)h[u++]=a[f];return h}},k=function(a,r,e){this.val=a,this.left=r,this.right=e},V={decode:function(a,r){r=r||{};var e=r.noDataValue,s=0,t={};if(t.ptr=r.inputOffset||0,t.pixels={},!!d.readHeaderInfo(a,t)){var i=t.headerInfo,u=i.fileVersion,n=d.getDataTypeArray(i.imageType);if(u>5)throw"unsupported lerc version 2."+u;d.readMask(a,t),i.numValidPixel!==i.width*i.height&&!t.pixels.resultMask&&(t.pixels.resultMask=r.maskData);var f=i.width*i.height;t.pixels.resultPixels=new n(f*i.numDims),t.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var h=!r.returnPixelInterleavedDims;if(i.numValidPixel!==0)if(i.zMax===i.zMin)d.constructConstantSurface(t,h);else if(u>=4&&d.checkMinMaxRanges(a,t))d.constructConstantSurface(t,h);else{var o=new DataView(a,t.ptr,2),c=o.getUint8(0);if(t.ptr++,c)d.readDataOneSweep(a,t,n,h);else if(u>1&&i.imageType<=1&&Math.abs(i.maxZError-.5)<1e-5){var v=o.getUint8(1);if(t.ptr++,t.encodeMode=v,v>2||u<4&&v>1)throw"Invalid Huffman flag "+v;v?d.readHuffman(a,t,n,h):d.readTiles(a,t,n,h)}else d.readTiles(a,t,n,h)}t.eofOffset=t.ptr;var m;r.inputOffset?(m=t.headerInfo.blobSize+r.inputOffset-t.ptr,Math.abs(m)>=1&&(t.eofOffset=r.inputOffset+t.headerInfo.blobSize)):(m=t.headerInfo.blobSize-t.ptr,Math.abs(m)>=1&&(t.eofOffset=t.headerInfo.blobSize));var l={width:i.width,height:i.height,pixelData:t.pixels.resultPixels,minValue:i.zMin,maxValue:i.zMax,validPixelCount:i.numValidPixel,dimCount:i.numDims,dimStats:{minValues:i.minValues,maxValues:i.maxValues},maskData:t.pixels.resultMask};if(t.pixels.resultMask&&d.isValidPixelValue(i.imageType,e)){var g=t.pixels.resultMask;for(s=0;s<f;s++)g[s]||(l.pixelData[s]=e);l.noDataValue=e}return t.noDataValue=e,r.returnFileInfo&&(l.fileInfo=d.formatFileInfo(t)),l}},getBandCount:function(a){var r=0,e=0,s={};for(s.ptr=0,s.pixels={};e<a.byteLength-58;)d.readHeaderInfo(a,s),e+=s.headerInfo.blobSize,r++,s.ptr=e;return r}};return V})();var ae=(function(){var y=new ArrayBuffer(4),d=new Uint8Array(y),k=new Uint32Array(y);return k[0]=1,d[0]===1})(),se={decode:function(y,d){if(!ae)throw"Big endian system is not supported.";d=d||{};var k=d.inputOffset||0,V=new Uint8Array(y,k,10),a=String.fromCharCode.apply(null,V),r,e;if(a.trim()==="CntZImage")r=ne,e=1;else if(a.substring(0,5)==="Lerc2")r=te,e=2;else throw"Unexpected file identifier string: "+a;for(var s=0,t=y.byteLength-10,i,u=[],n,f,h={width:0,height:0,pixels:[],pixelType:d.pixelType,mask:null,statistics:[]},o=0;k<t;){var c=r.decode(y,{inputOffset:k,encodedMaskData:i,maskData:f,returnMask:s===0,returnEncodedMask:s===0,returnFileInfo:!0,returnPixelInterleavedDims:d.returnPixelInterleavedDims,pixelType:d.pixelType||null,noDataValue:d.noDataValue||null});k=c.fileInfo.eofOffset,f=c.maskData,s===0&&(i=c.encodedMaskData,h.width=c.width,h.height=c.height,h.dimCount=c.dimCount||1,h.pixelType=c.pixelType||c.fileInfo.pixelType,h.mask=f),e>1&&(f&&u.push(f),c.fileInfo.mask&&c.fileInfo.mask.numBytes>0&&o++),s++,h.pixels.push(c.pixelData),h.statistics.push({minValue:c.minValue,maxValue:c.maxValue,noDataValue:c.noDataValue,dimStats:c.dimStats})}var v,m,l;if(e>1&&o>1){for(l=h.width*h.height,h.bandMasks=u,f=new Uint8Array(l),f.set(u[0]),v=1;v<u.length;v++)for(n=u[v],m=0;m<l;m++)f[m]=f[m]&n[m];h.maskData=f}return h}};function fe(y){const d=se.decode(y,{});return{dem:d.pixels[0],width:d.width,height:d.height}}function le(y,d,k){let V=fe(y);return k[2]-k[0]<1&&(V=re(V,k)),ie(V,d)}self.onmessage=y=>{const d=y.data,k=le(d.demData,d.z,d.clipBounds);self.postMessage(k)}})();\n',Zc=typeof self<"u"&&self.Blob&&new Blob([nu],{type:"text/javascript;charset=utf-8"});function L1(i){let t;try{if(t=Zc&&(self.URL||self.webkitURL).createObjectURL(Zc),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(nu),{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const U1=5;class N1 extends al{constructor(){super(),this.info={version:Zi,description:"Tile LERC terrain loader. It can load ArcGis-lerc format terrain data."},this.dataType="lerc",this.fileLoader=new Kd(_n.manager),this.fileLoader.setResponseType("arraybuffer");const t=new ol(U1);t.setWorkerCreator(()=>new L1),this._workerPool=t}async doLoad(t,e){const{z:n,clipBounds:r}=e,s={demData:await this.fileLoader.loadAsync(t),z:n,clipBounds:r},a=(await this._workerPool.postMessage(s)).data;return new Gi().setAttributes(a,n)}}const iu=`(function(){"use strict";function c(t){return a(t.data)}function a(t){function n(e,u){const r=u*4,[i,f,g,l]=e.slice(r,r+4);return l===0?0:-1e4+(i<<16|f<<8|g)*.1}const o=t.length>>>2,s=new Float32Array(o);for(let e=0;e<o;e++)s[e]=n(t,e);return s}self.onmessage=t=>{const n=c(t.data.imgData);self.postMessage(n)}})();
`,Jc=typeof self<"u"&&self.Blob&&new Blob([iu],{type:"text/javascript;charset=utf-8"});function F1(i){let t;try{if(t=Jc&&(self.URL||self.webkitURL).createObjectURL(Jc),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(iu),{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const O1=10;class B1 extends al{constructor(){super(),this.info={version:Zi,description:"Mapbox-RGB terrain loader for loading Mapbox-RGB terrain data"},this.dataType="terrain-rgb",this.imageLoader=new Cr(_n.manager);const t=new ol(O1);t.setWorkerCreator(()=>new F1),this._workerPool=t}async doLoad(t,e){const n=await this.imageLoader.loadAsync(t),{clipBounds:r,z:s}=e,a=li.clamp((s+2)*3,2,64),o=k1(n,r,a),c=(await this._workerPool.postMessage({imgData:o},[o.data.buffer])).data,l=new Gi;return l.setData(c,s),l}}function k1(i,t,e){const n=tu(t,i.width),r=Math.min(e,n.sw),s=new OffscreenCanvas(r,r).getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(i,n.sx,n.sy,n.sw,n.sh,0,0,r,r),s.getImageData(0,0,r,r)}const ru='(function(){"use strict";class C{constructor(o=257){this.gridSize=o;const t=o-1;if(t&t-1)throw new Error(`Grid size must be 2^n+1, current size is ${o}`);this.numTriangles=t*t*2-2,this.numParentTriangles=this.numTriangles-t*t,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let n=0;n<this.numTriangles;n++){let s=n+2,a=0,r=0,e=0,l=0,d=0,c=0;for(s&1?e=l=d=t:a=r=c=t;(s>>=1)>1;){const g=a+e>>1,m=r+l>>1;s&1?(e=a,l=r,a=d,r=c):(a=e,r=l,e=d,l=c),d=g,c=m}const h=n*4;this.coords[h+0]=a,this.coords[h+1]=r,this.coords[h+2]=e,this.coords[h+3]=l}}createTile(o){return new $(o,this)}}class ${constructor(o,t){const n=t.gridSize;if(o.length!==n*n)throw new Error(`Terrain data length expected ${n*n} (${n} x ${n}), but got ${o.length}`);this.terrain=o,this.martini=t,this.errors=new Float32Array(o.length),this.update()}update(){const{numTriangles:o,numParentTriangles:t,coords:n,gridSize:s}=this.martini,{terrain:a,errors:r}=this;for(let e=o-1;e>=0;e--){const l=e*4,d=n[l+0],c=n[l+1],h=n[l+2],g=n[l+3],m=d+h>>1,u=c+g>>1,w=m+u-c,M=u+d-m,S=(a[c*s+d]+a[g*s+h])/2,f=u*s+m,z=Math.abs(S-a[f]);if(r[f]=Math.max(r[f],z),e<t){const x=(c+M>>1)*s+(d+w>>1),T=(g+M>>1)*s+(h+w>>1);r[f]=Math.max(r[f],r[x],r[T])}}}getGeometryData(o=0){const{gridSize:t,indices:n}=this.martini,{errors:s}=this;let a=0,r=0;const e=t-1;let l,d,c=0;n.fill(0);function h(f,z,x,T,p,A){const y=f+x>>1,I=z+T>>1;Math.abs(f-p)+Math.abs(z-A)>1&&s[I*t+y]>o?(h(p,A,f,z,y,I),h(x,T,p,A,y,I)):(l=z*t+f,d=T*t+x,c=A*t+p,n[l]===0&&(n[l]=++a),n[d]===0&&(n[d]=++a),n[c]===0&&(n[c]=++a),r++)}h(0,0,e,e,e,0),h(e,e,0,0,0,e);const g=a*2,m=r*3,u=new Uint16Array(g),w=new Uint32Array(m);let M=0;function S(f,z,x,T,p,A){const y=f+x>>1,I=z+T>>1;if(Math.abs(f-p)+Math.abs(z-A)>1&&s[I*t+y]>o)S(p,A,f,z,y,I),S(x,T,p,A,y,I);else{const b=n[z*t+f]-1,E=n[T*t+x]-1,F=n[A*t+p]-1;u[2*b]=f,u[2*b+1]=z,u[2*E]=x,u[2*E+1]=T,u[2*F]=p,u[2*F+1]=A,w[M++]=b,w[M++]=E,w[M++]=F}}return S(0,0,e,e,e,0),S(e,e,0,0,0,e),{attributes:this._getMeshAttributes(this.terrain,u,w),indices:w}}_getMeshAttributes(o,t,n){const s=Math.floor(Math.sqrt(o.length)),a=s-1,r=t.length/2,e=new Float32Array(r*3),l=new Float32Array(r*2);for(let c=0;c<r;c++){const h=t[c*2],g=t[c*2+1],m=g*s+h;e[3*c+0]=h/a-.5,e[3*c+1]=.5-g/a,e[3*c+2]=o[m],l[2*c+0]=h/a,l[2*c+1]=1-g/a}const d=V(e,n);return{position:{value:e,size:3},texcoord:{value:l,size:2},normal:{value:d,size:3}}}}function G(i){const o=[];for(let t=0;t<i;t++)if(t>=17)o.push(0);else{const n=1-t/17;o.push(Math.round(7e3*n*n*n))}return o}const U=G(21);function V(i,o){const t=new Float32Array(i.length);for(let n=0;n<o.length;n+=3){const s=o[n]*3,a=o[n+1]*3,r=o[n+2]*3,e=i[a]-i[s],l=i[a+1]-i[s+1],d=i[a+2]-i[s+2],c=i[r]-i[s],h=i[r+1]-i[s+1],g=i[r+2]-i[s+2],m=l*g-d*h,u=d*c-e*g,w=e*h-l*c,M=1/Math.hypot(m,u,w);t[s]=t[a]=t[r]=m*M,t[s+1]=t[a+1]=t[r+1]=u*M,t[s+2]=t[a+2]=t[r+2]=w*M}return t}function k(i,o){const t=(r,e,l)=>{const d=Math.floor(r[0]*e),c=Math.floor(r[1]*l),h=Math.floor((r[2]-r[0])*e)+1,g=Math.floor((r[3]-r[1])*l)+1;return{x:d,y:c,w:h,h:g}},n=(r,e,l,d,c,h)=>{const g=new Float32Array(c*h);for(let m=0;m<h;m++)for(let u=0;u<c;u++){const w=(m+d)*e+(u+l),M=m*c+u;g[M]=r[w]}return g},s=t(o,i.width,i.height);return{dem:n(i.dem,i.width,s.x,s.y,s.w,s.h),width:s.w,height:s.h}}function D(i,o){return new C(i.width).createTile(i.dem).getGeometryData(U[o]||0)}function P(i){function o(s,a){const r=a*4,[e,l,d,c]=s.slice(r,r+4);return c===0?0:-1e4+(e<<16|l<<8|d)*.1}const t=i.data.length>>>2,n=new Float32Array(t);for(let s=0;s<t;s++)n[s]=o(i.data,s);return{dem:n,width:i.width,height:i.height}}function Z(i,o,t){let n=P(i);return t[2]-t[0]<1&&(n=k(n,t)),D(n,o)}self.onmessage=i=>{const o=i.data,t=Z(o.demData,o.z,o.clipBounds);self.postMessage(t)}})();\n',$c=typeof self<"u"&&self.Blob&&new Blob([ru],{type:"text/javascript;charset=utf-8"});function z1(i){let t;try{if(t=$c&&(self.URL||self.webkitURL).createObjectURL($c),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ru),{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const V1=10;class H1 extends al{constructor(){super(),this.info={version:Zi,description:"Mapbox-DEM terrain loader for loading Mapbox-DEM terrain data"},this.dataType="terrain-dem",this.imageLoader=new Cr(_n.manager);const t=new ol(V1);t.setWorkerCreator(()=>new z1),this._workerPool=t}async doLoad(t,e){const{z:n,clipBounds:r}=e,s=await this.imageLoader.loadAsync(t),a={demData:G1(s),z:n,clipBounds:r},o=(await this._workerPool.postMessage(a)).data;return new Gi().setAttributes(o,n)}}function G1(i){const t=new OffscreenCanvas(i.width,i.height).getContext("2d");return t.drawImage(i,0,0),t.getImageData(0,0,i.width,i.height)}class su{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}_handleVisibilityChange(){this._document.hidden===!1&&this.reset()}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=this._handleVisibilityChange.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t??performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function W1(i,t){const e=/\{ *([\w_-]+) *\}/g;return i.replace(e,(n,r)=>{const s=t[r];if(s==null)throw new Error(`source url template error, No value provided for variable: ${n}`);return typeof s=="function"?s(t):String(s)})}function X1(i){return _n.registerMaterialLoader(i)}function Aa(i){return _n.registerGeometryLoader(i)}class Ji{constructor(t){this.dataType="image",this.attribution="ThreeTile",this.minLevel=0,this.maxLevel=18,this.projectionID="3857",this.url="",this.subdomains=[],this.opacity=1,this.transparent=!0,this.isTMS=!1,this._projectionBounds=[-1/0,-1/0,1/0,1/0],Object.assign(this,t)}getBBox(t,e,n){const r=Math.pow(2,n);if(this.projectionID==="4326"){const s=360/r,a=180/r,o=-180+t*s,c=90-(e+1)*a,l=-180+(t+1)*s,f=90-e*a;return`${o},${c},${l},${f}`}else{const s=Math.PI*6378137,a=2*s/r,o=-s+t*a,c=s-(e+1)*a,l=-s+(t+1)*a,f=s-e*a;return`${o},${c},${l},${f}`}}getUrl(t,e,n,r){if(n<this.minLevel||n>this.maxLevel)return;this.isTMS&&(e=Math.pow(2,n)-1-e);const s=this.subdomains.length;let a;if(s>0){const l=(t*7+e*13+n*31>>>0)%s;a=this.subdomains[l]}const o=(r==null?void 0:r.bbox)??(this.url.includes("{bbox}")?this.getBBox(t,e,n):void 0),c={...this,x:t,y:e,z:n,s:a,bbox:o,...r};return W1(this.url,c)}static create(t,e){return new Ji({...t,...e})}}class au{constructor(t=0){this._lon0=0,this._lon0=t}get lon0(){return this._lon0}getTileXWithCenterLon(t,e){const n=Math.pow(2,e);return((t+Math.round(n/360*this._lon0))%n+n)%n}getProjBoundsFromLonLat(t){const e=t[2]-t[0]>180,n=this.project(t[0]+(e?this._lon0:0),t[1]),r=this.project(t[2]+(e?this._lon0:0),t[3]);return[Math.min(n.x,r.x),Math.min(n.y,r.y),Math.max(n.x,r.x),Math.max(n.y,r.y)]}getLonLatBoundsFromXYZ(t,e,n){const r=this.getProjBoundsFromXYZ(t,e,n),s=this.unProject(r[0],r[1]),a=this.unProject(r[2],r[3]);return[s.lon,s.lat,a.lon,a.lat]}}const or=6378137,Pi=100*1e3;let ou=class extends au{constructor(){super(...arguments),this.ID="3857",this.mapWidth=2*Math.PI*or,this.mapHeight=this.mapWidth,this.mapDepth=1}project(t,e){const n=(t-this.lon0)*(Math.PI/180),r=e*(Math.PI/180),s=or*n,a=or*Math.log(Math.tan(Math.PI/4+r/2));return{x:s,y:a}}unProject(t,e){let n=t/or*(180/Math.PI)+this.lon0;return n=(n%360+540)%360-180,{lat:(2*Math.atan(Math.exp(e/or))-Math.PI/2)*(180/Math.PI),lon:n}}getProjBoundsFromXYZ(t,e,n){const r=this.mapWidth/Math.pow(2,n),s=-this.mapWidth/2+t*r,a=this.mapHeight/2-(e+1)*r,o=-this.mapWidth/2+(t+1)*r,c=this.mapHeight/2-e*r;return[s,a,o,c]}};class Y1 extends au{constructor(){super(...arguments),this.ID="4326",this.mapWidth=360*Pi,this.mapHeight=180*Pi,this.mapDepth=1}getProjBoundsFromXYZ(t,e,n){const r=this.mapWidth/Math.pow(2,n),s=this.mapHeight/Math.pow(2,n),a=-this.mapWidth/2+t*r,o=this.mapHeight/2-(e+1)*s,c=-this.mapWidth/2+(t+1)*r,l=this.mapHeight/2-e*s;return[a,o,c,l]}project(t,e){return{x:(t-this.lon0)*Pi,y:e*Pi}}unProject(t,e){return{lon:t/Pi+this.lon0,lat:e/Pi}}}const Kc={createFromID:(i="3857",t=0)=>{let e;switch(i){case"3857":e=new ou(t);break;case"4326":e=new Y1(t);break;default:throw new Error(`Projection ID: ${i} is not supported.`)}return e}};class q1 extends P1{constructor(){super(...arguments),this._projection=new ou(0)}get projection(){return this._projection}set projection(t){this._projection=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}get projectionID(){return this._projection.ID}get imgSource(){return super.imgSource}set imgSource(t){super.imgSource=t,this._updateImgProjBounds()}get demSource(){return super.demSource}set demSource(t){super.demSource=t,this._updateDemPrjBounds()}get bounds(){return super.bounds}set bounds(t){super.bounds=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}_updateImgProjBounds(){this.imgSource.forEach(t=>t._projectionBounds=this.projection.getProjBoundsFromLonLat(t.bounds||this.bounds))}_updateDemPrjBounds(){this.demSource&&(this.demSource._projectionBounds=this.projection.getProjBoundsFromLonLat(this.demSource.bounds||this.bounds))}async update(t,e){return super.update(this._getTileCoords(t),e)}_getTileCoords(t){const{x:e,y:n,z:r}=t,s=this._projection.getTileXWithCenterLon(e,r),a=this._projection.getProjBoundsFromXYZ(e,n,r),o=this._projection.getLonLatBoundsFromXYZ(e,n,r);return{x:s,y:n,z:r,bounds:a,lonLatBounds:o}}}const Is=new Yh,j1=new H(0,-1,0),Qc=new H;function lu(i,t){const e=t.intersectObject(i.rootTile,!0);if(e.length>0){const n=e[0];console.assert(n.object.visible);const r=i.worldToLocal(n.point.clone()),s=i.map2geo(r);return Object.assign(n,{location:s})}}function th(i,t){return Qc.set(t.x,i.rootTile.scale.z*1e4,t.z),Is.set(Qc,j1),lu(i,Is)}function Z1(i,t,e){return Is.setFromCamera(e,i),lu(t,Is)}function J1(i){const t=i.loader.manager;t.onStart=(e,n,r)=>{i.dispatchEvent({type:"loading-start",url:e,itemsLoaded:n,itemsTotal:r})},t.onError=e=>{i.dispatchEvent({type:"loading-error",url:e})},t.onLoad=()=>{i.dispatchEvent({type:"loading-complete"})},t.onProgress=(e,n,r)=>{i.dispatchEvent({type:"loading-progress",url:e,itemsLoaded:n,itemsTotal:r})},t.onParseEnd=e=>{i.dispatchEvent({type:"parsing-end",geometry:e})},i.rootTile.addEventListener("tile-loaded",e=>{i.dispatchEvent({type:"tile-loaded",tile:e.tile})}),i.rootTile.addEventListener("tile-unload",e=>{i.dispatchEvent({type:"tile-unload",tile:e.tile})})}class cu extends de{constructor(t){super(),this.name="map",this.isLOD=!0,this.debug=0,this.autoUpdate=!0,this.updateInterval=50,this._minLevel=2,this._maxLevel=0,this._LODThreshold=1,this._mapTimer=new su,this.up.set(0,0,1);const{loader:e=new q1,rootTile:n=new qe,minLevel:r=2,imgSource:s,demSource:a,bounds:o,lon0:c=0,debug:l=0}=t;this.minLevel=r,this.loader=e,this.rootTile=n,o&&(this.loader.bounds=o),this.debug=this.loader.debug=l,this.lon0=c,this.imgSource=s,this.demSource=a,this.add(n),this._resize(),J1(this),this._mapTimer.reset();const f=()=>{this.dispatchEvent({type:"ready"}),this.removeEventListener("loading-complete",f)};this.addEventListener("loading-complete",f)}static create(t){return new cu(t)}get minLevel(){return this._minLevel}set minLevel(t){this._minLevel=t}get maxLevel(){return this._maxLevel}get LODThreshold(){return this._LODThreshold}set LODThreshold(t){this._LODThreshold=t}get lon0(){return this.projection.lon0}set lon0(t){this.projection.lon0!==t&&(t!==0&&this.minLevel<1&&Ro.warn(`Map centralMeridian is ${this.lon0}, minLevel must > 0`),this.projection=Kc.createFromID(this.projection.ID,t),this._updateSource())}get projection(){return this.loader.projection}set projection(t){(t.ID!==this.projection.ID||t.lon0!==this.lon0)&&(this.loader.projection=t,this._resize(),this.reload(),this._log("Map Projection Changed:",t.ID,t.lon0),this.dispatchEvent({type:"projection-changed",projection:t}))}get imgSource(){return this.loader.imgSource}set imgSource(t){const e=Array.isArray(t)?t:[t];if(e.length===0)throw new Error("imgSource can not be empty");this.loader.imgSource=e,this.projection=Kc.createFromID(e[0].projectionID,this.projection.lon0),this._log("Img Source Changed:",e),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t})}get demSource(){return this.loader.demSource}set demSource(t){this.loader.demSource!==t&&(this.loader.demSource=t,this._log("DEM Source Changed:",this.demSource),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t}))}get bounds(){return this.loader.bounds}set bounds(t){this.loader.bounds=t}get maxThreads(){return this.loader.maxThreads}set maxThreads(t){this.loader.maxThreads=t}get downloading(){return this.loader.downloadingThreads}update(t){this._mapTimer.update(),this._mapTimer.getElapsed()>this.updateInterval/1e3&&(this.rootTile.update({camera:t,loader:this.loader,minLevel:this.minLevel,maxLevel:this.maxLevel,LODThreshold:this.LODThreshold}),this.rootTile.castShadow=this.castShadow,this.rootTile.receiveShadow=this.receiveShadow,this.dispatchEvent({type:"update",delta:this._mapTimer.getDelta()}),this._mapTimer.reset())}reload(t=!0){this.rootTile.reload(t)}dispose(){this.removeFromParent(),this.reload()}geo2map(t){const e=this.projection.project(t.x,t.y);return new H(e.x,e.y,t.z)}geo2world(t){return this.localToWorld(this.geo2map(t))}map2geo(t){const e=this.projection.unProject(t.x,t.y);return new H(e.lon,e.lat,t.z)}world2geo(t){return this.map2geo(this.worldToLocal(t.clone()))}geo2pos(t){return this.geo2map(t)}pos2geo(t){return this.map2geo(t)}getLocalInfoFromGeo(t){const e=this.geo2world(t);return th(this,e)}getLocalInfoFromWorld(t){return th(this,t)}getLocalInfoFromScreen(t,e){return Z1(t,this,e)}getTileCount(){}_log(...t){Ro.log(...t)}_resize(){this.rootTile.scale.set(this.projection.mapWidth,this.projection.mapHeight,this.projection.mapDepth),this.rootTile.updateMatrix(),this.rootTile.updateMatrixWorld()}_getMaxLevel(){let t=0;return this.imgSource.forEach(e=>t=Math.max(t,e.maxLevel)),this.demSource&&(t=Math.max(t,this.demSource.maxLevel)),this._log("Max Level:",t),t}_updateSource(){this._maxLevel=this._getMaxLevel(),this.rootTile.reload(!1)}}function $1(){X1(new D1),Aa(new B1),Aa(new N1),Aa(new H1)}$1();var ci=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var t=1.70158;return i===1?1:i*i*((t+1)*i-t)},Out:function(i){var t=1.70158;return i===0?0:--i*i*((t+1)*i+t)+1},InOut:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)}}),Bounce:Object.freeze({In:function(i){return 1-ci.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?ci.Bounce.In(i*2)*.5:ci.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(t){return Math.pow(t,i)},Out:function(t){return 1-Math.pow(1-t,i)},InOut:function(t){return t<.5?Math.pow(t*2,i)/2:(1-Math.pow(2-t*2,i))/2+.5}}}}),fr=function(){return performance.now()},K1=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},i.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},i.prototype.update=function(t,e){t===void 0&&(t=fr()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],a=!e;s&&s.update(t,a)===!1&&!e&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),Po={Linear:function(i,t){var e=i.length-1,n=e*t,r=Math.floor(n),s=Po.Utils.Linear;return t<0?s(i[0],i[1],n):t>1?s(i[e],i[e-1],e-n):s(i[r],i[r+1>e?e:r+1],n-r)},Utils:{Linear:function(i,t,e){return(t-i)*e+i}}},hu=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Io=new K1,Ca=function(){function i(t,e){e===void 0&&(e=Io),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ci.Linear.None,this._interpolationFunction=Po.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=hu.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},i.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},i.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},i.prototype.start=function(t,e){if(t===void 0&&(t=fr()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},i.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},i.prototype._setupProperties=function(t,e,n,r,s){for(var a in n){var o=t[a],c=Array.isArray(o),l=c?"array":typeof o,f=!c&&Array.isArray(n[a]);if(!(l==="undefined"||l==="function")){if(f){var u=n[a];if(u.length===0)continue;for(var h=[o],m=0,g=u.length;m<g;m+=1){var v=this._handleRelativeValue(o,u[m]);if(isNaN(v)){f=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(v)}f&&(n[a]=h)}if((l==="object"||c)&&o&&!f){e[a]=c?[]:{};var d=o;for(var p in d)e[a][p]=d[p];r[a]=c?[]:{};var u=n[a];if(!this._isDynamic){var x={};for(var p in u)x[p]=u[p];n[a]=u=x}this._setupProperties(d,e[a],u,r[a],s)}else(typeof e[a]>"u"||s)&&(e[a]=o),c||(e[a]*=1),f?r[a]=n[a].slice().reverse():r[a]=e[a]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(t){return t===void 0&&(t=fr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},i.prototype.resume=function(t){return t===void 0&&(t=fr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return t===void 0&&(t=Io),this._group=t,this},i.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},i.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},i.prototype.easing=function(t){return t===void 0&&(t=ci.Linear.None),this._easingFunction=t,this},i.prototype.interpolation=function(t){return t===void 0&&(t=Po.Linear),this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,e){var n=this,r;if(t===void 0&&(t=fr()),e===void 0&&(e=!0),this._isPaused)return!0;var s,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>a)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=t-this._startTime,c=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),l=this._duration+this._repeat*c,f=function(){if(n._duration===0||o>l)return 1;var d=Math.trunc(o/c),p=o-d*c,x=Math.min(p/n._duration,1);return x===0&&o===n._duration?1:x},u=f(),h=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||o>=this._duration)if(this._repeat>0){var m=Math.min(Math.trunc((o-this._duration)/c)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=m);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=c*m,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,v=this._chainedTweens.length;g<v;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(t,e,n,r){for(var s in n)if(e[s]!==void 0){var a=e[s]||0,o=n[s],c=Array.isArray(t[s]),l=Array.isArray(o),f=!c&&l;f?t[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(t[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(t[s]=a+(o-a)*r))}},i.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},i}();hu.nextId;var yn=Io;yn.getAll.bind(yn);yn.removeAll.bind(yn);yn.add.bind(yn);yn.remove.bind(yn);var Q1=yn.update.bind(yn);class tv extends Fn{constructor(t,e={}){super(),this.topScenes=[],this.timer=new su;const{antialias:n=!1,stencil:r=!0,logarithmicDepthBuffer:s=!0}=e;this.renderer=this.createRenderer(n,r,s),this.scene=this.createScene(),this.camera=this.createCamera(),t&&this.addTo(t),this.ambLight=this.createAmbLight(),this.dirLight=this.createDirLight(),this.scene.add(this.ambLight),this.scene.add(this.dirLight),this.renderer.setAnimationLoop(this.animate.bind(this))}get width(){var t;return((t=this.container)==null?void 0:t.clientWidth)||0}get height(){var t;return((t=this.container)==null?void 0:t.clientHeight)||0}addTo(t){const e=typeof t=="string"?document.querySelector(t):t;if(e instanceof HTMLElement)this.container=e,e.appendChild(this.renderer.domElement),this._resizeObserver=new ResizeObserver(this.resize.bind(this)),this._resizeObserver.observe(e);else throw new Error(`${t} not found!`);return this}createScene(){const t=new Bf,e=14414079;return t.background=new Jt(e),t.fog=new Ls(e,0),t}createRenderer(t,e,n){const r=new d1({antialias:t,logarithmicDepthBuffer:n,stencil:e,alpha:!0,precision:"highp"});return r.setPixelRatio(window.devicePixelRatio),r.domElement.tabIndex=0,r.domElement.style.outline="none",r}createCamera(){const t=new Ne(70,1,.1,5e7);return t.position.set(0,28e6,0),t}createAmbLight(){return new ip(16777215,1)}createDirLight(){const t=new np(16777215,1);return t.position.set(0,2e3,1e3),t.target.position.set(0,0,0),t}resize(){const t=this.width,e=this.height;return t===0||e===0?this:(this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.update(),this.dispatchEvent({type:"resize",size:{width:t,height:e}}),this)}dispose(){var t,e;(t=this._resizeObserver)==null||t.disconnect(),this.renderer.setAnimationLoop(null),this.renderer.dispose(),(e=this.container)!=null&&e.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement)}update(){this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.topScenes.forEach(t=>{this.renderer.clearDepth(),this.renderer.render(t,this.camera)}),this.renderer.autoClear=!0}animate(){this.timer.update(),this.update(),this.dispatchEvent({type:"update",delta:this.timer.getDelta()}),Q1()}}const eh={type:"change"},ll={type:"start"},uu={type:"end"},ps=new Wi,nh=new Xn,ev=Math.cos(70*li.DEG2RAD),xe=new H,Fe=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ra=1e-6;class nv extends xp{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:je.ROTATE,MIDDLE:je.DOLLY,RIGHT:je.PAN},this.touches={ONE:dn.ROTATE,TWO:dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Ke,this._lastTargetPosition=new H,this._quat=new Ke().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gc,this._sphericalDelta=new gc,this._scale=1,this._panOffset=new H,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new H,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rv.bind(this),this._onPointerDown=iv.bind(this),this._onPointerUp=sv.bind(this),this._onContextMenu=fv.bind(this),this._onMouseWheel=lv.bind(this),this._onKeyDown=cv.bind(this),this._onTouchStart=hv.bind(this),this._onTouchMove=uv.bind(this),this._onMouseDown=av.bind(this),this._onMouseMove=ov.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=pv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eh),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),r<-Math.PI?r+=Fe:r>Math.PI&&(r-=Fe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=xe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new H(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ps.origin.copy(this.object.position),ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ps.direction))<ev?this.object.lookAt(this.target):(nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ps.intersectPlane(nh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ra||this._lastTargetPosition.distanceToSquared(this.target)>Ra?(this.dispatchEvent(eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xe.copy(r).sub(this.target);let s=xe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function iv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function rv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uu),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function av(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case je.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case je.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ll)}function ov(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function lv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(ll),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uu))}function cv(i){this.enabled!==!1&&this._handleKeyDown(i)}function hv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case dn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case dn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case dn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case dn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ll)}function uv(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function fv(i){this.enabled!==!1&&i.preventDefault()}function dv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class mv extends nv{constructor(t,e){super(t,e),this.mapMaxPolarAngle=Math.PI/2.1,this.restAzimuthDist=8e6,this.dynamicZoomSpeed=!0,this.dynamicMaxPolarAngle=!0,this._controlsMode="MAP",this.controlsMode="MAP",this.screenSpacePanning=!1,this.minDistance=10,this.maxDistance=3e7,this.maxPolarAngle=1.2,this.enableDamping=!0,this.dampingFactor=.1,this.keyPanSpeed=5,this.listenToKeyEvents(e),this.addEventListener("change",this.onChange.bind(this))}get controlsMode(){return this._controlsMode}set controlsMode(t){this._controlsMode=t,this.controlsMode.toUpperCase()==="MAP"?(this.mouseButtons={LEFT:je.PAN,MIDDLE:je.DOLLY,RIGHT:je.ROTATE},this.touches={ONE:dn.PAN,TWO:dn.DOLLY_ROTATE}):(this.mouseButtons={LEFT:je.ROTATE,MIDDLE:je.DOLLY,RIGHT:je.PAN},this.touches={ONE:dn.ROTATE,TWO:dn.DOLLY_PAN})}onChange(){const t=Math.max(this.getPolarAngle(),.01),e=Math.max(this.getDistance(),1);this.dynamicZoomSpeed&&(this.zoomSpeed=Math.max(Math.log(e/1e3),1));const n=e>this.restAzimuthDist;this.minAzimuthAngle=n?0:-1/0,this.maxAzimuthAngle=n?0:1/0,this.dynamicMaxPolarAngle&&(this.maxPolarAngle=Math.min(Math.pow(1e7/e,2),this.mapMaxPolarAngle));const r=this.object;r instanceof Ne&&(r.far=li.clamp(e/(t/1.5)*7,2e4,this.maxDistance*2),r.near=Math.max(r.far/5e4,this.minDistance),r.updateProjectionMatrix())}}class kv extends tv{constructor(){super(...arguments),this.controls=this._createControls(),this._fogFactor=1,this._flying=!1}get flying(){return this._flying}get fogFactor(){return this._fogFactor}set fogFactor(t){this._fogFactor=t,this._changeFogFactor()}get controlsMode(){return this.controls.controlsMode}set controlsMode(t){this.controls.controlsMode=t}_changeFogFactor(){if(this.scene.fog instanceof Ls){const t=this.controls.getPolarAngle(),e=this.controls.getDistance();this.scene.fog.density=t/(e+1)*this.fogFactor*.2}}_createControls(){const t=new mv(this.camera,this.container||this.renderer.domElement);return t.addEventListener("change",this._changeFogFactor.bind(this)),t}dispose(){this.controls.dispose(),super.dispose()}animate(){super.animate(),this.controls.update()}flyTo(t,e,n=!0){if(this.controls.target.copy(t),n){const r=this.camera.position;return this._flying=!0,new Promise(s=>{new Ca(r).to({y:1e7,z:0},500).chain(new Ca(r).to(e,2e3).easing(ci.Quintic.Out).onComplete(()=>{this._flying=!1,s()})).start()})}else return this.camera.position.copy(e),Promise.resolve()}flyToObject(t,e={azimuthDeg:0,pitchDeg:30,distanceMultiplier:1.2,animate:!0}){const n=h=>{const m=new Qe().setFromObject(h),g=m.getBoundingSphere(new Mn);return g.center.setY(m.min.y),g},{center:r,radius:s}=n(t),a=s/Math.sin(li.degToRad(this.camera.fov/2)),{azimuthDeg:o=0,pitchDeg:c=30,distanceMultiplier:l=1.5,animate:f=!0}=e,u=new H().setFromSphericalCoords(a*l,li.degToRad(90-c),li.degToRad(o)).add(r.clone().setY(0));if(this.controls.target.copy(r),f){const h=this.camera.position;return this._flying=!0,new Promise(m=>{new Ca(h).to(u,2e3).easing(ci.Quintic.Out).onUpdate(()=>{const g=n(t);this.controls.target.copy(g.center)}).start().onComplete(()=>{this._flying=!1,m()})})}else return this.camera.position.copy(u),Promise.resolve()}getState(){return{centerPosition:this.controls.target,cameraPosition:this.camera.position}}}new H;const gv=`<style>
	#tt-compass {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 1px solid #fffc;
		filter: drop-shadow(0px 0px 2px black);
		background-color: #0005;
		cursor: pointer;
	}
	#tt-compass > .tt-circle {
		width: 60%;
		height: 60%;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #fffc;
		background-color: #fff4;
		display: flex;
		justify-content: center;
	}

	#tt-compass:hover > .tt-circle {
		background-color: #0f05;
	}

	#tt-compass:active .tt-circle {
		background-color: #000;
	}

	#tt-compass > #tt-compass-text {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		display: grid;
		align-items: center;
		justify-items: center;
		grid-template-columns: 18% auto 18%;
		grid-template-rows: 18% auto 18%;
		text-shadow: 0px 0px 2px black;
		font-size: 10px;
	}

	#tt-compass > .tt-circle > #tt-compass-plane {
		height: 90%;
		width: 90%;
		fill: #fffc;
		filter: drop-shadow(5px 5px 5px black);
	}
</style>

<div id="tt-compass">
	<div class="tt-circle">
		<svg
			id="tt-compass-plane"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M479.075523 711.254681c0 70.2291 0.083871 114.20878 0.218064 140.734974l-148.360914 106.16768 0 65.842665c0 0 137.164181-31.552144 156.372659-56.247861 19.212672-24.685233 1.369189 45.264997 24.691523 45.264997 23.324432 0 5.476754-69.95023 24.695717-45.264997 19.206382 24.695717 156.372659 56.247861 156.372659 56.247861l0-65.842665-148.375592-106.16768c0.14258-26.526194 0.226451-70.505874 0.226451-140.734974 0-283.942036 460.894459 0 460.894459 0l0-79.555518-115.225712-85.227272 0-65.662343c0-9.083193-13.343823-16.461715-24.685233-16.461715-11.351894 0-24.695717 7.378522-24.695717 16.461715l0 29.119895-85.724206-63.422996c0-178.315322-28.115543-160.490709-28.115543-160.490709s-21.938469 15.094623-24.685233 100.128992c-1.645962 51.108686-52.339488 15.51817-92.547084-21.017988l-22.569596-104.490267-26.182325-14.138497c0-35.590516 0-81.312609 0-129.18179C561.379902 13.064953 511.307019 0 511.307019 0s-48.693211 13.054469-48.693211 117.311994c0 47.240151 0 92.396117 0 127.766473l-28.803283 14.329303-23.194432 106.176067 0.016774 0c3.310794-1.945799 6.558686-4.151598 9.735287-6.470622-3.159827 2.966925-6.407719 5.938043-9.735287 8.919645-39.630985 35.456323-87.693069 67.884915-89.311773 18.12445-2.748861-85.051143-24.691523-100.128992-24.691523-100.128992s-28.115543-17.824613-28.115543 160.490709l-85.724206 63.406222 0-29.119895c0-9.083193-13.335436-16.461715-24.691523-16.461715s-24.691523 7.378522-24.691523 16.461715l0 65.662343L18.187353 631.697066l0 79.555518C18.187353 711.254681 479.075523 427.310549 479.075523 711.254681z"
			></path>
		</svg>
	</div>
	<div id="tt-compass-text">
		<span></span> <span>N</span><span></span> <span>W</span><span></span><span>E</span> <span></span><span>S</span
		><span></span>
	</div>
</div>
`;class zv{constructor(t){this.dom=document.createElement("div"),this.controls=t,this.dom.innerHTML=gv,this.dom.style.width="100%",this.dom.style.height="100%",this.plane=this.dom.querySelector("#tt-compass-plane"),this.text=this.dom.querySelector("#tt-compass-text"),this._onChange=()=>{this.plane&&this.text&&(this.plane.style.transform=`rotateX(${t.getPolarAngle()}rad)`,this.text.style.transform=`rotate(${t.getAzimuthalAngle()}rad)`)},t.addEventListener("change",this._onChange),this.dom.onclick=()=>open("https://github.com/sxguojf/three-tile")}dispose(){this.controls.removeEventListener("change",this._onChange)}}class Vv extends Ji{constructor(t){super(t),this.attribution="ArcGIS © Esri",this.style="World_Imagery",this.url="https://server.arcgisonline.com/arcgis/rest/services/{style}/MapServer/tile/{z}/{y}/{x}",Object.assign(this,t)}}class Hv extends Ji{constructor(t){super(t),this.dataType="lerc",this.attribution="ArcGIS © Esri",this.minLevel=5,this.maxLevel=13,this.url="https://server.arcgisonline.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer/tile/{z}/{y}/{x}",Object.assign(this,t)}}class Gv extends Ji{constructor(t){super(t),this.attribution="Bing Maps © Microsoft [GS(2024)0999号]",this.style="A",this.mkt="zh-CN",this.subdomains="1",this.url="https://t{s}.dynamic.tiles.ditu.live.com/comp/ch/{key}?mkt={mkt}&ur=CN&it={style}&n=z&og=804&cstl=vb",this.maxLevel=19,Object.assign(this,t)}getUrl(t,e,n){const r=_v(n,t,e);return super.getUrl(t,e,n,{key:r})}}function _v(i,t,e){let n="";for(let r=i;r>0;r--){const s=1<<r-1;let a=0;t&s&&a++,e&s&&(a+=2),n+=a}return n}class Wv extends Ji{constructor(t){super(t),this.attribution="AMap © AutoNavi [GS(2025)5996号]",this.style="8",this.scl="2",this.subdomains="1",this.maxLevel=18,this.url="https://webst0{s}.is.autonavi.com/appmaptile?style={style}&x={x}&y={y}&z={z}&scl={scl}",Object.assign(this,t)}getUrl(t,e,n){const r={};return this.ltype&&(r.ltype=this.ltype),super.getUrl(t,e,n,r)}}new H;const lr=new H;new Yh;function Xv(i,t,e=10){if(t.updateMatrixWorld(),t.position.y>1e4)return!1;let n=!1;const r=2*t.near*Math.tan(li.degToRad(t.fov)/2);lr.set(0,-r/2,-t.near-r/10),lr.applyMatrix4(t.matrixWorld);const s=i.getLocalInfoFromWorld(lr);if(s){const a=e-(lr.y-s.point.y);a>0&&(t.position.y+=a+.01,n=!0)}if(i.debug>0){let a=i.getObjectByName("checkPoint");a||(a=new De(new el(1),new zd({color:65280})),a.name="checkPoint",i.add(a)),a.position.copy(i.worldToLocal(lr)),a.scale.setScalar(r/50),a instanceof De&&a.material.color.set(n?15732480:65280)}return n}var K={};(function(){var i=function(){function n(r){this.message="JPEG error: "+r}return n.prototype=new Error,n.prototype.name="JpegError",n.constructor=n,n}(),t=function(){var n=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),r=4017,s=799,a=3406,o=2276,c=1567,l=3784,f=5793,u=2896;function h(_){_==null&&(_={}),_.w==null&&(_.w=-1),this.V=_.n,this.N=_.w}function m(_,S){for(var E=0,M=[],w,y,b=16,D;b>0&&!_[b-1];)b--;M.push({children:[],index:0});var A=M[0];for(w=0;w<b;w++){for(y=0;y<_[w];y++){for(A=M.pop(),A.children[A.index]=S[E];A.index>0;)A=M.pop();for(A.index++,M.push(A);M.length<=w;)M.push(D={children:[],index:0}),A.children[A.index]=D.children,A=D;E++}w+1<b&&(M.push(D={children:[],index:0}),A.children[A.index]=D.children,A=D)}return M[0].children}function g(_,S,E){return 64*((_.P+1)*S+E)}function v(_,S,E,M,w,y,b,D,A,C){C==null&&(C=!1);var P=E.m,L=E.Z,B=S,z=0,O=0,N=0,F=0,k,V=0,q,ot,ht,ut,G,J,nt=0,vt,ft,bt,Ut;function _t(){if(O>0)return O--,z>>O&1;if(z=_[S++],z===255){var Y=_[S++];if(Y){if(Y===220&&C){S+=2;var it=e(_,S);if(S+=2,it>0&&it!==E.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",it)}else if(Y===217){if(C){var $=V*8;if($>0&&$<E.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",$)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return O=7,z>>>7}function et(Y){for(var it=Y;;){switch(it=it[_t()],typeof it){case"number":return it;case"object":continue}throw new i("invalid huffman sequence")}}function rt(Y){for(var it=0;Y>0;)it=it<<1|_t(),Y--;return it}function Z(Y){if(Y===1)return _t()===1?1:-1;var it=rt(Y);return it>=1<<Y-1?it:it+(-1<<Y)+1}function ct(Y,it){var $=et(Y.J),wt=$===0?0:Z($),dt=1;for(Y.D[it]=Y.Q+=wt;dt<64;){var At=et(Y.i),Tt=At&15,at=At>>4;if(Tt===0){if(at<15)break;dt+=16;continue}dt+=at;var pt=n[dt];Y.D[it+pt]=Z(Tt),dt++}}function U(Y,it){var $=et(Y.J),wt=$===0?0:Z($)<<A;Y.D[it]=Y.Q+=wt}function Pt(Y,it){Y.D[it]|=_t()<<A}function xt(Y,it){if(N>0){N--;return}for(var $=y,wt=b;$<=wt;){var dt=et(Y.i),At=dt&15,Tt=dt>>4;if(At===0){if(Tt<15){N=rt(Tt)+(1<<Tt)-1;break}$+=16;continue}$+=Tt;var at=n[$];Y.D[it+at]=Z(At)*(1<<A),$++}}function St(Y,it){for(var $=y,wt=b,dt=0,At,Tt;$<=wt;){var at=it+n[$],pt=Y.D[at]<0?-1:1;switch(F){case 0:if(Tt=et(Y.i),At=Tt&15,dt=Tt>>4,At===0)dt<15?(N=rt(dt)+(1<<dt),F=4):(dt=16,F=1);else{if(At!==1)throw new i("invalid ACn encoding");k=Z(At),F=dt?2:3}continue;case 1:case 2:Y.D[at]?Y.D[at]+=pt*(_t()<<A):(dt--,dt===0&&(F=F===2?3:0));break;case 3:Y.D[at]?Y.D[at]+=pt*(_t()<<A):(Y.D[at]=k<<A,F=0);break;case 4:Y.D[at]&&(Y.D[at]+=pt*(_t()<<A));break}$++}F===4&&(N--,N===0&&(F=0))}function gt(Y,it,$,wt,dt){var At=$/P|0,Tt=$%P;V=At*Y.A+wt;var at=Tt*Y.h+dt,pt=g(Y,V,at);it(Y,pt)}function I(Y,it,$){V=$/Y.P|0;var wt=$%Y.P,dt=g(Y,V,wt);it(Y,dt)}var T=M.length;for(L?y===0?J=D===0?U:Pt:J=D===0?xt:St:J=ct,T===1?ft=M[0].P*M[0].c:ft=P*E.R;nt<=ft;){var W=w?Math.min(ft-nt,w):ft;if(W>0){for(ot=0;ot<T;ot++)M[ot].Q=0;if(N=0,T===1)for(q=M[0],G=0;G<W;G++)I(q,J,nt),nt++;else for(G=0;G<W;G++){for(ot=0;ot<T;ot++)for(q=M[ot],bt=q.h,Ut=q.A,ht=0;ht<Ut;ht++)for(ut=0;ut<bt;ut++)gt(q,J,nt,ht,ut);nt++}}if(O=0,vt=x(_,S),!vt)break;if(vt.u&&(S=vt.offset),vt.M>=65488&&vt.M<=65495)S+=2;else break}return S-B}function d(_,S,E){var M=_.$,w=_.D,y,b,D,A,C,P,L,B,z,O,N,F,k,V,q,ot,ht;if(!M)throw new i("missing required Quantization Table.");for(var ut=0;ut<64;ut+=8){if(z=w[S+ut],O=w[S+ut+1],N=w[S+ut+2],F=w[S+ut+3],k=w[S+ut+4],V=w[S+ut+5],q=w[S+ut+6],ot=w[S+ut+7],z*=M[ut],(O|N|F|k|V|q|ot)===0){ht=f*z+512>>10,E[ut]=ht,E[ut+1]=ht,E[ut+2]=ht,E[ut+3]=ht,E[ut+4]=ht,E[ut+5]=ht,E[ut+6]=ht,E[ut+7]=ht;continue}O*=M[ut+1],N*=M[ut+2],F*=M[ut+3],k*=M[ut+4],V*=M[ut+5],q*=M[ut+6],ot*=M[ut+7],y=f*z+128>>8,b=f*k+128>>8,D=N,A=q,C=u*(O-ot)+128>>8,B=u*(O+ot)+128>>8,P=F<<4,L=V<<4,y=y+b+1>>1,b=y-b,ht=D*l+A*c+128>>8,D=D*c-A*l+128>>8,A=ht,C=C+L+1>>1,L=C-L,B=B+P+1>>1,P=B-P,y=y+A+1>>1,A=y-A,b=b+D+1>>1,D=b-D,ht=C*o+B*a+2048>>12,C=C*a-B*o+2048>>12,B=ht,ht=P*s+L*r+2048>>12,P=P*r-L*s+2048>>12,L=ht,E[ut]=y+B,E[ut+7]=y-B,E[ut+1]=b+L,E[ut+6]=b-L,E[ut+2]=D+P,E[ut+5]=D-P,E[ut+3]=A+C,E[ut+4]=A-C}for(var G=0;G<8;++G){if(z=E[G],O=E[G+8],N=E[G+16],F=E[G+24],k=E[G+32],V=E[G+40],q=E[G+48],ot=E[G+56],(O|N|F|k|V|q|ot)===0){ht=f*z+8192>>14,ht<-2040?ht=0:ht>=2024?ht=255:ht=ht+2056>>4,w[S+G]=ht,w[S+G+8]=ht,w[S+G+16]=ht,w[S+G+24]=ht,w[S+G+32]=ht,w[S+G+40]=ht,w[S+G+48]=ht,w[S+G+56]=ht;continue}y=f*z+2048>>12,b=f*k+2048>>12,D=N,A=q,C=u*(O-ot)+2048>>12,B=u*(O+ot)+2048>>12,P=F,L=V,y=(y+b+1>>1)+4112,b=y-b,ht=D*l+A*c+2048>>12,D=D*c-A*l+2048>>12,A=ht,C=C+L+1>>1,L=C-L,B=B+P+1>>1,P=B-P,y=y+A+1>>1,A=y-A,b=b+D+1>>1,D=b-D,ht=C*o+B*a+2048>>12,C=C*a-B*o+2048>>12,B=ht,ht=P*s+L*r+2048>>12,P=P*r-L*s+2048>>12,L=ht,z=y+B,ot=y-B,O=b+L,q=b-L,N=D+P,V=D-P,F=A+C,k=A-C,z<16?z=0:z>=4080?z=255:z>>=4,O<16?O=0:O>=4080?O=255:O>>=4,N<16?N=0:N>=4080?N=255:N>>=4,F<16?F=0:F>=4080?F=255:F>>=4,k<16?k=0:k>=4080?k=255:k>>=4,V<16?V=0:V>=4080?V=255:V>>=4,q<16?q=0:q>=4080?q=255:q>>=4,ot<16?ot=0:ot>=4080?ot=255:ot>>=4,w[S+G]=z,w[S+G+8]=O,w[S+G+16]=N,w[S+G+24]=F,w[S+G+32]=k,w[S+G+40]=V,w[S+G+48]=q,w[S+G+56]=ot}}function p(_,S){for(var E=S.P,M=S.c,w=new Int16Array(64),y=0;y<M;y++)for(var b=0;b<E;b++){var D=g(S,y,b);d(S,D,w)}return S.D}function x(_,S,E){E==null&&(E=S);var M=_.length-1,w=E<S?E:S;if(S>=M)return null;var y=e(_,S);if(y>=65472&&y<=65534)return{u:null,M:y,offset:S};for(var b=e(_,w);!(b>=65472&&b<=65534);){if(++w>=M)return null;b=e(_,w)}return{u:y.toString(16),M:b,offset:w}}return h.prototype={parse(_,S){S==null&&(S={});var E=S.F,M=0,w=null,y=null,b,D,A=0;function C(){var at=e(_,M);M+=2;var pt=M+at-2,Lt=x(_,pt,M);Lt&&Lt.u&&(pt=Lt.offset);var Nt=_.subarray(M,pt);return M+=Nt.length,Nt}function P(at){for(var pt=Math.ceil(at.o/8/at.X),Lt=Math.ceil(at.s/8/at.B),Nt=0;Nt<at.W.length;Nt++){St=at.W[Nt];var Ct=Math.ceil(Math.ceil(at.o/8)*St.h/at.X),Yt=Math.ceil(Math.ceil(at.s/8)*St.A/at.B),X=pt*St.h,Et=Lt*St.A,Mt=64*Et*(X+1);St.D=new Int16Array(Mt),St.P=Ct,St.c=Yt}at.m=pt,at.R=Lt}var L=[],B=[],z=[],O=e(_,M);if(M+=2,O!==65496)throw new i("SOI not found");O=e(_,M),M+=2;t:for(;O!==65497;){var N,F,k;switch(O){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var V=C();O===65504&&V[0]===74&&V[1]===70&&V[2]===73&&V[3]===70&&V[4]===0&&(w={version:{d:V[5],T:V[6]},K:V[7],j:V[8]<<8|V[9],H:V[10]<<8|V[11],S:V[12],I:V[13],C:V.subarray(14,14+3*V[12]*V[13])}),O===65518&&V[0]===65&&V[1]===100&&V[2]===111&&V[3]===98&&V[4]===101&&(y={version:V[5]<<8|V[6],k:V[7]<<8|V[8],q:V[9]<<8|V[10],a:V[11]});break;case 65499:var q=e(_,M),ot;M+=2;for(var ht=q+M-2;M<ht;){var ut=_[M++],G=new Uint16Array(64);if(ut>>4)if(ut>>4===1)for(F=0;F<64;F++)ot=n[F],G[ot]=e(_,M),M+=2;else throw new i("DQT - invalid table spec");else for(F=0;F<64;F++)ot=n[F],G[ot]=_[M++];L[ut&15]=G}break;case 65472:case 65473:case 65474:if(b)throw new i("Only single frame JPEGs supported");M+=2,b={},b.G=O===65473,b.Z=O===65474,b.precision=_[M++];var J=e(_,M),nt,vt=0,ft=0;M+=2,b.s=E||J,b.o=e(_,M),M+=2,b.W=[],b._={};var bt=_[M++];for(N=0;N<bt;N++){nt=_[M];var Ut=_[M+1]>>4,_t=_[M+1]&15;vt<Ut&&(vt=Ut),ft<_t&&(ft=_t);var et=_[M+2];k=b.W.push({h:Ut,A:_t,L:et,$:null}),b._[nt]=k-1,M+=3}b.X=vt,b.B=ft,P(b);break;case 65476:var rt=e(_,M);for(M+=2,N=2;N<rt;){var Z=_[M++],ct=new Uint8Array(16),U=0;for(F=0;F<16;F++,M++)U+=ct[F]=_[M];var Pt=new Uint8Array(U);for(F=0;F<U;F++,M++)Pt[F]=_[M];N+=17+U,(Z>>4?B:z)[Z&15]=m(ct,Pt)}break;case 65501:M+=2,D=e(_,M),M+=2;break;case 65498:var xt=++A===1&&!E,St;M+=2;var gt=_[M++],I=[];for(N=0;N<gt;N++){var T=_[M++],W=b._[T];St=b.W[W],St.index=T;var Y=_[M++];St.J=z[Y>>4],St.i=B[Y&15],I.push(St)}var it=_[M++],$=_[M++],wt=_[M++];try{var dt=v(_,M,b,I,D,it,$,wt>>4,wt&15,xt);M+=dt}catch(at){if(at instanceof DNLMarkerError)return this.parse(_,{F:at.s});if(at instanceof EOIMarkerError)break t;throw at}break;case 65500:M+=4;break;case 65535:_[M]!==255&&M--;break;default:var At=x(_,M-2,M-3);if(At&&At.u){M=At.offset;break}if(M>=_.length-1)break t;throw new i("JpegImage.parse - unknown marker: "+O.toString(16))}O=e(_,M),M+=2}for(this.width=b.o,this.height=b.s,this.g=w,this.b=y,this.W=[],N=0;N<b.W.length;N++){St=b.W[N];var Tt=L[St.L];Tt&&(St.$=Tt),this.W.push({index:St.index,e:p(b,St),l:St.h/b.X,t:St.A/b.B,P:St.P,c:St.c})}this.p=this.W.length},Y(_,S,E){E==null&&(E=!1);var M=this.width/_,w=this.height/S,y,b,D,A,C,P,L,B,z,O,N=0,F,k=this.W.length,V=_*S*k,q=new Uint8ClampedArray(V),ot=new Uint32Array(_),ht=4294967288,ut;for(L=0;L<k;L++){if(y=this.W[L],b=y.l*M,D=y.t*w,N=L,F=y.e,A=y.P+1<<3,b!==ut){for(C=0;C<_;C++)B=0|C*b,ot[C]=(B&ht)<<3|B&7;ut=b}for(P=0;P<S;P++)for(B=0|P*D,O=A*(B&ht)|(B&7)<<3,C=0;C<_;C++)q[N]=F[O+ot[C]],N+=k}var G=this.V;if(!E&&k===4&&!G&&(G=new Int32Array([-256,255,-256,255,-256,255,-256,255])),G)for(L=0;L<V;)for(B=0,z=0;B<k;B++,L++,z+=2)q[L]=(q[L]*G[z]>>8)+G[z+1];return q},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(_){for(var S,E,M,w=0,y=_.length;w<y;w+=3)S=_[w],E=_[w+1],M=_[w+2],_[w]=S-179.456+1.402*M,_[w+1]=S+135.459-.344*E-.714*M,_[w+2]=S-226.816+1.772*E;return _},O:function(_){for(var S,E,M,w,y=0,b=0,D=_.length;b<D;b+=4)S=_[b],E=_[b+1],M=_[b+2],w=_[b+3],_[y++]=-122.67195406894+E*(-660635669420364e-19*E+.000437130475926232*M-54080610064599e-18*S+.00048449797120281*w-.154362151871126)+M*(-.000957964378445773*M+.000817076911346625*S-.00477271405408747*w+1.53380253221734)+S*(.000961250184130688*S-.00266257332283933*w+.48357088451265)+w*(-.000336197177618394*w+.484791561490776),_[y++]=107.268039397724+E*(219927104525741e-19*E-.000640992018297945*M+.000659397001245577*S+.000426105652938837*w-.176491792462875)+M*(-.000778269941513683*M+.00130872261408275*S+.000770482631801132*w-.151051492775562)+S*(.00126935368114843*S-.00265090189010898*w+.25802910206845)+w*(-.000318913117588328*w-.213742400323665),_[y++]=-20.810012546947+E*(-.000570115196973677*E-263409051004589e-19*M+.0020741088115012*S-.00288260236853442*w+.814272968359295)+M*(-153496057440975e-19*M-.000132689043961446*S+.000560833691242812*w-.195152027534049)+S*(.00174418132927582*S-.00255243321439347*w+.116935020465145)+w*(-.000343531996510555*w+.24165260232407);return _.subarray(0,y)},r:function(_){for(var S,E,M,w=0,y=_.length;w<y;w+=4)S=_[w],E=_[w+1],M=_[w+2],_[w]=434.456-S-1.402*M,_[w+1]=119.541-S+.344*E+.714*M,_[w+2]=481.816-S-1.772*E;return _},U:function(_){for(var S,E,M,w,y=0,b=0,D=_.length;b<D;b+=4)S=_[b],E=_[b+1],M=_[b+2],w=_[b+3],_[y++]=255+S*(-6747147073602441e-20*S+.0008379262121013727*E+.0002894718188643294*M+.003264231057537806*w-1.1185611867203937)+E*(26374107616089405e-21*E-8626949158638572e-20*M-.0002748769067499491*w-.02155688794978967)+M*(-3878099212869363e-20*M-.0003267808279485286*w+.0686742238595345)-w*(.0003361971776183937*w+.7430659151342254),_[y++]=255+S*(.00013596372813588848*S+.000924537132573585*E+.00010567359618683593*M+.0004791864687436512*w-.3109689587515875)+E*(-.00023545346108370344*E+.0002702845253534714*M+.0020200308977307156*w-.7488052167015494)+M*(6834815998235662e-20*M+.00015168452363460973*w-.09751927774728933)-w*(.0003189131175883281*w+.7364883807733168),_[y++]=255+S*(13598650411385307e-21*S+.00012423956175490851*E+.0004751985097583589*M-36729317476630422e-22*w-.05562186980264034)+E*(.00016141380598724676*E+.0009692239130725186*M+.0007782692450036253*w-.44015232367526463)+M*(5068882914068769e-22*M+.0017778369011375071*w-.7591454649749609)-w*(.0003435319965105553*w+.7063770186160144);return _.subarray(0,y)},getData:function(_){var S=_.width,E=_.height,M=_.forceRGB,w=_.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var y=this.Y(S,E,w);if(this.p===1&&M){for(var b=y.length,D=new Uint8ClampedArray(b*3),A=0,C=0;C<b;C++){var P=y[C];D[A++]=P,D[A++]=P,D[A++]=P}return D}else{if(this.p===3&&this.f)return this.z(y);if(this.p===4){if(this.f)return M?this.O(y):this.r(y);if(M)return this.U(y)}}return y}},h}();function e(n,r){return n[r]<<8|n[r+1]}K.JpegDecoder=t})();K.encodeImage=function(i,t,e,n){var r={t256:[t],t257:[e],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[e],t279:[t*e*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var s in n)r[s]=n[s];for(var a=new Uint8Array(K.encode([r])),o=new Uint8Array(i),c=new Uint8Array(1e3+t*e*4),s=0;s<a.length;s++)c[s]=a[s];for(var s=0;s<o.length;s++)c[1e3+s]=o[s];return c.buffer};K.encode=function(i){var t=new Uint8Array(2e4),e=4,n=K._binBE;t[0]=t[1]=77,n.writeUshort(t,2,42);var r=8;n.writeUint(t,e,r),e+=4;for(var s=0;s<i.length;s++){var a=K._writeIFD(n,K._types.basic,t,r,i[s]);r=a[1],s<i.length-1&&(r&3&&(r+=4-(r&3)),n.writeUint(t,a[0],r))}return t.slice(0,r).buffer};K.decode=function(i,t){t==null&&(t={parseMN:!0,debug:!1});var e=new Uint8Array(i),n=0,r=K._binBE.readASCII(e,n,2);n+=2;var s=r=="II"?K._binLE:K._binBE;s.readUshort(e,n),n+=2;var a=s.readUint(e,n);n+=4;for(var o=[];;){var c=s.readUshort(e,a),l=s.readUshort(e,a+4);if(c!=0&&(l<1||13<l)){log("error in TIFF");break}if(K._readIFD(s,e,a,o,0,t),a=s.readUint(e,a+2+c*12),a==0)break}return o};K.decodeImage=function(i,t,e){if(!t.data){var n=new Uint8Array(i),r=K._binBE.readASCII(n,0,2);if(t.t256!=null){t.isLE=r=="II",t.width=t.t256[0],t.height=t.t257[0];var s=t.t259?t.t259[0]:1,a=t.t266?t.t266[0]:1;t.t284&&t.t284[0]==2&&log("PlanarConfiguration 2 should not be used!"),s==7&&t.t258&&t.t258.length>3&&(t.t258=t.t258.slice(0,3));var o=t.t277?t.t277[0]:1,c=t.t258?t.t258[0]:1,l=c*o;s==1&&t.t279!=null&&t.t278&&t.t262[0]==32803&&(l=Math.round(t.t279[0]*8/(t.width*t.t278[0]))),t.t50885&&t.t50885[0]==4&&(l=t.t258[0]*3);var f=Math.ceil(t.width*l/8)*8,u=t.t273;(u==null||t.t322)&&(u=t.t324);var h=t.t279;s==1&&u.length==1&&(h=[t.height*(f>>>3)]),(h==null||t.t322)&&(h=t.t325);var m=new Uint8Array(t.height*(f>>>3)),g=0;if(t.t322!=null){var v=t.t322[0],d=t.t323[0],p=Math.floor((t.width+v-1)/v),x=Math.floor((t.height+d-1)/d),_=new Uint8Array(Math.ceil(v*d*l/8)|0);console.log("====",p,x);for(var S=0;S<x;S++)for(var E=0;E<p;E++){var M=S*p+E;_.fill(0),K.decode._decompress(t,e,n,u[M],h[M],s,_,0,a,v,d),s==6?m=_:K._copyTile(_,Math.ceil(v*l/8)|0,d,m,Math.ceil(t.width*l/8)|0,t.height,Math.ceil(E*v*l/8)|0,S*d)}g=m.length*8}else{if(u==null)return;var w=t.t278?t.t278[0]:t.height;w=Math.min(w,t.height);for(var M=0;M<u.length;M++)K.decode._decompress(t,e,n,u[M],h[M],s,m,Math.ceil(g/8)|0,a,t.width,w),g+=f*w;g=Math.min(g,m.length*8)}t.data=new Uint8Array(m.buffer,0,Math.ceil(g/8)|0)}}};K.decode._decompress=function(i,t,e,n,r,s,a,o,c,l,f){if(i.t271&&i.t271[0]=="Panasonic"&&i.t45&&i.t45[0]==6&&(s=34316),s==1)for(var u=0;u<r;u++)a[o+u]=e[n+u];else if(s==2)K.decode._decodeG2(e,n,r,a,o,l,c);else if(s==3)K.decode._decodeG3(e,n,r,a,o,l,c,i.t292?(i.t292[0]&1)==1:!1);else if(s==4)K.decode._decodeG4(e,n,r,a,o,l,c);else if(s==5)K.decode._decodeLZW(e,n,r,a,o,8);else if(s==6)K.decode._decodeOldJPEG(i,e,n,r,a,o);else if(s==7||s==34892)K.decode._decodeNewJPEG(i,e,n,r,a,o);else if(s==8||s==32946){var h=new Uint8Array(e.buffer,n+2,r-6),m=K._inflateRaw(h);o+m.length<=a.length&&a.set(m,o)}else s==9?K.decode._decodeVC5(e,n,r,a,o,i.t33422):s==32767?K.decode._decodeARW(i,e,n,r,a,o):s==32773?K.decode._decodePackBits(e,n,r,a,o):s==32809?K.decode._decodeThunder(e,n,r,a,o):s==34316?K.decode._decodePanasonic(i,e,n,r,a,o):s==34713?K.decode._decodeNikon(i,t,e,n,r,a,o):s==34676?K.decode._decodeLogLuv32(i,e,n,r,a,o):log("Unknown compression",s);var g=i.t258?Math.min(32,i.t258[0]):1,v=i.t277?i.t277[0]:1,d=g*v>>>3,p=Math.ceil(g*v*l/8);if(g==16&&!i.isLE&&i.t33422==null)for(var x=0;x<f;x++)for(var _=o+x*p,S=1;S<p;S+=2){var E=a[_+S];a[_+S]=a[_+S-1],a[_+S-1]=E}if(i.t317&&i.t317[0]==2)for(var x=0;x<f;x++){var M=o+x*p;if(g==16)for(var u=d;u<p;u+=2){var w=(a[M+u+1]<<8|a[M+u])+(a[M+u-d+1]<<8|a[M+u-d]);a[M+u]=w&255,a[M+u+1]=w>>>8&255}else if(v==3)for(var u=3;u<p;u+=3)a[M+u]=a[M+u]+a[M+u-3]&255,a[M+u+1]=a[M+u+1]+a[M+u-2]&255,a[M+u+2]=a[M+u+2]+a[M+u-1]&255;else for(var u=d;u<p;u++)a[M+u]=a[M+u]+a[M+u-d]&255}};K.decode._decodePanasonic=function(i,t,e,n,r,s){var a=t.buffer,o=i.t2[0],c=i.t3[0],l=i.t10[0],f=i.t45[0],u=0,h=0,m=0,g=0,v=f==6?new Uint32Array(18):new Uint8Array(16),d,p,x,_=[0,0],S=[0,0],E,M=0,w,y,b,D,A=new Uint8Array(16384),C=new Uint16Array(r.buffer);function P(et){if(m==0){var rt=new Uint8Array(a,e+h+8184,8200),Z=new Uint8Array(a,e+h,8184);A.set(rt),A.set(Z,rt.length),h+=16384}if(f==5)for(d=0;d<16;d++)v[d]=A[m++],m&=16383;else return m=m-et&131071,g=m>>3^16368,(A[g]|A[g+1]<<8)>>(m&7)&~(-1<<et)}function L(et){return A[m+15-et]}function B(){v[0]=L(0)<<6|L(1)>>2,v[1]=((L(1)&3)<<12|L(2)<<4|L(3)>>4)&16383,v[2]=L(3)>>2&3,v[3]=(L(3)&3)<<8|L(4),v[4]=L(5)<<2|L(6)>>6,v[5]=(L(6)&63)<<4|L(7)>>4,v[6]=L(7)>>2&3,v[7]=(L(7)&3)<<8|L(8),v[8]=L(9)<<2&1020|L(10)>>6,v[9]=(L(10)<<4|L(11)>>4)&1023,v[10]=L(11)>>2&3,v[11]=(L(11)&3)<<8|L(12),v[12]=(L(13)<<2&1020|L(14)>>6)&1023,v[13]=(L(14)<<4|L(15)>>4)&1023,m+=16,g=0}function z(){v[0]=L(0)<<4|L(1)>>4,v[1]=((L(1)&15)<<8|L(2))&4095,v[2]=L(3)>>6&3,v[3]=(L(3)&63)<<2|L(4)>>6,v[4]=(L(4)&63)<<2|L(5)>>6,v[5]=(L(5)&63)<<2|L(6)>>6,v[6]=L(6)>>4&3,v[7]=(L(6)&15)<<4|L(7)>>4,v[8]=(L(7)&15)<<4|L(8)>>4,v[9]=(L(8)&15)<<4|L(9)>>4,v[10]=L(9)>>2&3,v[11]=(L(9)&3)<<6|L(10)>>2,v[12]=(L(10)&3)<<6|L(11)>>2,v[13]=(L(11)&3)<<6|L(12)>>2,v[14]=L(12)&3,v[15]=L(13),v[16]=L(14),v[17]=L(15),m+=16,g=0}function O(){_[0]=0,_[1]=0,S[0]=0,S[1]=0}if(f==7)throw f;if(f==6){var N=l==12,F=N?z:B,k=N?14:11,V=N?128:512,q=N?2048:8192,ot=N?16383:65535,ht=N?4095:16383,ut=o/k,G=ut*16,J=N?18:14;for(y=0;y<c-15;y+=16){var nt=Math.min(16,c-y),vt=G*nt;for(A=new Uint8Array(a,e+u,vt),m=0,u+=vt,D=0,b=0;D<nt;D++,b=0){M=(y+D)*o;for(var ft=0;ft<ut;ft++)for(F(),O(),x=0,w=0,d=0;d<k;d++){if(E=d&1,d%3==2){var bt=g<J?v[g++]:0;bt==3&&(bt=4),w=V<<bt,x=1<<bt}var Ut=g<J?v[g++]:0;_[E]?(Ut*=x,w<q&&S[E]>w&&(Ut+=S[E]-w),S[E]=Ut):(_[E]=Ut,Ut?S[E]=Ut:Ut=S[E]),C[M+b++]=Ut-15<=ot?Ut-15&ot:Ut+2147483633>>31&ht}}}}else if(f==5){var _t=l==12?10:9;for(y=0;y<c;y++)for(b=0;b<o;b+=_t)P(0),l==12?(C[M++]=((v[1]&15)<<8)+v[0],C[M++]=16*v[2]+(v[1]>>4),C[M++]=((v[4]&15)<<8)+v[3],C[M++]=16*v[5]+(v[4]>>4),C[M++]=((v[7]&15)<<8)+v[6],C[M++]=16*v[8]+(v[7]>>4),C[M++]=((v[10]&15)<<8)+v[9],C[M++]=16*v[11]+(v[10]>>4),C[M++]=((v[13]&15)<<8)+v[12],C[M++]=16*v[14]+(v[13]>>4)):l==14&&(C[M++]=v[0]+((v[1]&63)<<8),C[M++]=(v[1]>>6)+4*v[2]+((v[3]&15)<<10),C[M++]=(v[3]>>4)+16*v[4]+((v[5]&3)<<12),C[M++]=((v[5]&252)>>2)+(v[6]<<6),C[M++]=v[7]+((v[8]&63)<<8),C[M++]=(v[8]>>6)+4*v[9]+((v[10]&15)<<10),C[M++]=(v[10]>>4)+16*v[11]+((v[12]&3)<<12),C[M++]=((v[12]&252)>>2)+(v[13]<<6),C[M++]=v[14]+((v[15]&63)<<8))}else if(f==4)for(y=0;y<c;y++)for(b=0;b<o;b++)d=b%14,E=d&1,d==0&&O(),d%3==2&&(x=4>>3-P(2)),S[E]?(p=P(8),p!=0&&(_[E]-=128<<x,(_[E]<0||x==4)&&(_[E]&=~(-1<<x)),_[E]+=p<<x)):(S[E]=P(8),(S[E]||d>11)&&(_[E]=S[E]<<4|P(4))),C[M++]=_[b&1];else throw f};K.decode._decodeVC5=function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],t,e,n,r=[3,3,3,3,2,2,2,1,1,1],s=24576,a=16384,o=8192,c=a|o;function l(x){var _=x[1],S=x[0][_>>>3]>>>7-(_&7)&1;return x[1]++,S}function f(x,_){if(t==null){t={};for(var S=0;S<i.length;S+=4)t[i[S+1]]=i.slice(S,S+4)}for(var E=l(x),M=t[E];M==null;)E=E<<1|l(x),M=t[E];var w=M[3];w!=0&&(w=l(x)==0?w:-w),_[0]=M[2],_[1]=w}function u(x,_){for(var S=0;S<_;S++)(x&1)==1&&x++,x=x>>>1;return x}function h(x,_){return x>>_}function m(x,_,S,E,M,w){_[S]=h(h(11*x[M]-4*x[M+w]+x[M+w+w]+4,3)+x[E],1),_[S+w]=h(h(5*x[M]+4*x[M+w]-x[M+w+w]+4,3)-x[E],1)}function g(x,_,S,E,M,w){var y=x[M-w]-x[M+w],b=x[M],D=x[E];_[S]=h(h(y+4,3)+b+D,1),_[S+w]=h(h(-y+4,3)+b-D,1)}function v(x,_,S,E,M,w){_[S]=h(h(5*x[M]+4*x[M-w]-x[M-w-w]+4,3)+x[E],1),_[S+w]=h(h(11*x[M]-4*x[M-w]+x[M-w-w]+4,3)-x[E],1)}function d(x){return x=x<0?0:x>4095?4095:x,x=n[x]>>>2,x}function p(x,_,S,E,M,w){E=new Uint16Array(E.buffer);var y=Date.now(),b=K._binBE,D=_+S,A,C,P,L,B,z,O,N,F,k;_+=4;for(var V=w[0]==1;_<D;){var q=b.readShort(x,_),ot=b.readUshort(x,_+2);if(_+=4,q==12)A=ot;else if(q==20)C=ot;else if(q==21)P=ot;else if(q==48)L=ot;else if(q==53)B=ot;else if(q!=35){if(q==62)z=ot;else if(q!=101){if(q==109)O=ot;else if(q!=84&&q!=106&&q!=107&&q!=108&&q!=102){if(q==104)N=ot;else if(q!=105){var ht=q<0?-q:q,ut=ht&65280,G=0;if(ht&c&&(ht&o?(G=ot&65535,G+=(ht&255)<<16):G=ot&65535),(ht&s)==s){if(F==null){F=[];for(var J=0;J<4;J++)F[J]=new Int16Array((C>>>1)*(P>>>1));k=new Int16Array((C>>>1)*(P>>>1)),e=new Int16Array(1024);for(var J=0;J<1024;J++){var nt=J-512,vt=Math.abs(nt),A=Math.floor(768*vt*vt*vt/(65025*255))+vt;e[J]=Math.sign(nt)*A}n=new Uint16Array(4096);for(var ft=65535,J=0;J<4096;J++){var bt=J,Ut=ft*(Math.pow(113,bt/4095)-1)/112;n[J]=Math.min(Ut,ft)}}var _t=F[z],et=u(C,1+r[L]),rt=u(P,1+r[L]);if(L==0)for(var Z=0;Z<rt;Z++)for(var ct=0;ct<et;ct++){var U=_+(Z*et+ct)*2;_t[Z*(C>>>1)+ct]=x[U]<<8|x[U+1]}else{for(var Pt=[x,_*8],xt=[],St=0,gt=et*rt,I=[0,0],T=0,ot=0;St<gt;)for(f(Pt,I),T=I[0],ot=I[1];T>0;)xt[St++]=ot,T--;for(var W=(L-1)%3,Y=W!=1?et:0,it=W!=0?rt:0,Z=0;Z<rt;Z++)for(var $=(Z+it)*(C>>>1)+Y,wt=Z*et,ct=0;ct<et;ct++)_t[$+ct]=e[xt[wt+ct]+512]*B;if(W==2){for(var N=C>>>1,dt=et*2,At=rt*2,Z=0;Z<rt;Z++)for(var ct=0;ct<dt;ct++){var J=Z*2*N+ct,Tt=Z*N+ct,at=rt*N+Tt;Z==0?m(_t,k,J,at,Tt,N):Z==rt-1?v(_t,k,J,at,Tt,N):g(_t,k,J,at,Tt,N)}var pt=_t;_t=k,k=pt;for(var Z=0;Z<At;Z++)for(var ct=0;ct<et;ct++){var J=Z*N+2*ct,Tt=Z*N+ct,at=et+Tt;ct==0?m(_t,k,J,at,Tt,1):ct==et-1?v(_t,k,J,at,Tt,1):g(_t,k,J,at,Tt,1)}var pt=_t;_t=k,k=pt;for(var Lt=[],Nt=2-~~((L-1)/3),Ct=0;Ct<3;Ct++)Lt[Ct]=O>>14-Ct*2&3;var Yt=Lt[Nt];if(Yt!=0)for(var Z=0;Z<At;Z++)for(var ct=0;ct<dt;ct++){var J=Z*N+ct;_t[J]=_t[J]<<Yt}}}if(L==9&&z==3)for(var X=F[0],Et=F[1],Mt=F[2],Ft=F[3],Z=0;Z<P;Z+=2)for(var ct=0;ct<C;ct+=2){var mt=Z*C+ct,U=(Z>>>1)*(C>>>1)+(ct>>>1),lt=X[U],Bt=Et[U]-2048,Xt=Mt[U]-2048,ie=Ft[U]-2048,ee=(Bt<<1)+lt,We=(Xt<<1)+lt,Xe=lt+ie,$i=lt-ie;V?(E[mt]=d(Xe),E[mt+1]=d(We),E[mt+C]=d(ee),E[mt+C+1]=d($i)):(E[mt]=d(ee),E[mt+1]=d(Xe),E[mt+C]=d($i),E[mt+C+1]=d(We))}_+=G*4}else if(ht==16388)_+=G*4;else if(!(ut==8192||ut==8448||ut==9216))throw ht.toString(16)}}}}}console.log(Date.now()-y)}return p}();K.decode._decodeLogLuv32=function(i,t,e,n,r,s){for(var a=i.width,o=a*4,c=0,l=new Uint8Array(o);c<n;){for(var f=0;f<o;){var u=t[e+c];if(c++,u<128){for(var h=0;h<u;h++)l[f+h]=t[e+c+h];f+=u,c+=u}else{u=u-126;for(var h=0;h<u;h++)l[f+h]=t[e+c];f+=u,c++}}for(var m=0;m<a;m++)r[s+0]=l[m],r[s+1]=l[m+a],r[s+2]=l[m+a*2],r[s+4]=l[m+a*3],s+=6}};K.decode._ljpeg_diff=function(i,t,e){var n=K.decode._getbithuff,r,s;return r=n(i,t,e[0],e),s=n(i,t,r,0),!(s&1<<r-1)&&(s-=(1<<r)-1),s};K.decode._decodeARW=function(i,t,e,n,r,s){var a=i.t256[0],o=i.t257[0],c=i.t258[0],l=i.isLE?K._binLE:K._binBE,f=a*o==n||a*o*1.5==n;if(!f){o+=8;var u=[e,0,0,0],h=new Uint16Array(32770),m=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],O,g,v,b,y,d=0,p=K.decode._ljpeg_diff;for(h[0]=15,v=O=0;O<18;O++)for(var x=32768>>>(m[O]>>>8),g=0;g<x;g++)h[++v]=m[O];for(b=a;b--;)for(y=0;y<o+1;y+=2)if(y==o&&(y=1),d+=p(t,u,h),y<o){var _=d&4095;K.decode._putsF(r,(y*a+b)*c,_<<16-c)}return}if(a*o*1.5==n){for(var O=0;O<n;O+=3){var S=t[e+O+0],E=t[e+O+1],M=t[e+O+2];r[s+O]=E<<4|S>>>4,r[s+O+1]=S<<4|M>>>4,r[s+O+2]=M<<4|E>>>4}return}var w=new Uint16Array(16),y,b,D,A,C,P,L,B,z,O,N,F=new Uint8Array(a+1);for(y=0;y<o;y++){for(var k=0;k<a;k++)F[k]=t[e++];for(N=0,b=0;b<a-30;N+=16){for(A=2047&(D=l.readUint(F,N)),C=2047&D>>>11,P=15&D>>>22,L=15&D>>>26,B=0;B<4&&128<<B<=A-C;B++);for(z=30,O=0;O<16;O++)O==P?w[O]=A:O==L?w[O]=C:(w[O]=((l.readUshort(F,N+(z>>3))>>>(z&7)&127)<<B)+C,w[O]>2047&&(w[O]=2047),z+=7);for(O=0;O<16;O++,b+=2){var _=w[O]<<1;K.decode._putsF(r,(y*a+b)*c,_<<16-c)}b-=b&1?1:31}}};K.decode._decodeNikon=function(i,t,e,n,r,s,a){var o=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],c=i.t256[0],l=i.t257[0],f=i.t258[0],u=0,h=0,m=K.decode._make_decoder,g=K.decode._getbithuff,v=t[0].exifIFD.makerNote,d=v.t150?v.t150:v.t140,p=0,x=d[p++],_=d[p++];(x==73||_==88)&&(p+=2110),x==70&&(u=2),f==14&&(u+=3);for(var S=[[0,0],[0,0]],E=i.isLE?K._binLE:K._binBE,D=0;D<2;D++)for(var M=0;M<2;M++)S[D][M]=E.readShort(d,p),p+=2;var w=1<<f&32767,y=0,b=E.readShort(d,p);p+=2,b>1&&(y=Math.floor(w/(b-1))),x==68&&_==32&&y>0&&(h=E.readShort(d,562));var D,A,C,P,L,B,z=[0,0],O=m(o[u]),N=[n,0,0,0];for(A=0;A<l;A++)for(h&&A==h&&(O=m(o[u+1])),C=0;C<c;C++){D=g(e,N,O[0],O),P=D&15,L=D>>>4,B=(g(e,N,P-L,0)<<1)+1<<L>>>1,!(B&1<<P-1)&&(B-=(1<<P)-(L==0?1:0)),C<2?z[C]=S[A&1][C]+=B:z[C&1]+=B;var F=Math.min(Math.max(z[C&1],0),(1<<f)-1),k=(A*c+C)*f;K.decode._putsF(s,k,F<<16-f)}};K.decode._putsF=function(i,t,e){e=e<<8-(t&7);var n=t>>>3;i[n]|=e>>>16,i[n+1]|=e>>>8,i[n+2]|=e};K.decode._getbithuff=function(i,t,e,n){var r=0;K.decode._get_byte;var s,a=t[0],o=t[1],c=t[2],l=t[3];if(e==0||c<0)return 0;for(;!l&&c<e&&(s=i[a++])!=-1&&!(l=r);)o=(o<<8)+s,c+=8;if(s=o<<32-c>>>32-e,n?(c-=n[s+1]>>>8,s=n[s+1]&255):c-=e,c<0)throw"e";return t[0]=a,t[1]=o,t[2]=c,t[3]=l,s};K.decode._make_decoder=function(i){var t,e,n,r,s,a=[];for(t=16;t!=0&&!i[t];t--);var o=17;for(a[0]=t,n=e=1;e<=t;e++)for(r=0;r<i[e];r++,++o)for(s=0;s<1<<t-e;s++)n<=1<<t&&(a[n++]=e<<8|i[o]);return a};K.decode._decodeNewJPEG=function(i,t,e,n,r,s){n=Math.min(n,t.length-e);var a=i.t347,o=a?a.length:0,c=new Uint8Array(o+n);if(a){for(var l=216,f=217,u=0,h=0;h<o-1&&!(a[h]==255&&a[h+1]==f);h++)c[u++]=a[h];var m=t[e],g=t[e+1];(m!=255||g!=l)&&(c[u++]=m,c[u++]=g);for(var h=2;h<n;h++)c[u++]=t[e+h]}else for(var h=0;h<n;h++)c[h]=t[e+h];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var v=i.t258[0],d=K.LosslessJpegDecode(c),p=d.length;if(v==16)if(i.isLE)for(var h=0;h<p;h++)r[s+(h<<1)]=d[h]&255,r[s+(h<<1)+1]=d[h]>>>8;else for(var h=0;h<p;h++)r[s+(h<<1)]=d[h]>>>8,r[s+(h<<1)+1]=d[h]&255;else if(v==14||v==12||v==10)for(var x=16-v,h=0;h<p;h++)K.decode._putsF(r,h*v,d[h]<<x);else if(v==8)for(var h=0;h<p;h++)r[s+h]=d[h];else throw new Error("unsupported bit depth "+v)}else{var _=new K.JpegDecoder;_.parse(c);for(var S=_.getData({width:_.width,height:_.height,forceRGB:!0,isSourcePDF:!1}),h=0;h<S.length;h++)r[s+h]=S[h]}i.t262[0]==6&&(i.t262[0]=2)};K.decode._decodeOldJPEGInit=function(i,t,e,n){var r=216,s=219,a=196,o=221,c=192,l=218,f=0,u=0,h,m,g=!1,v,d,p,x=i.t513,_=x?x[0]:0,S=i.t514,E=S?S[0]:0,M=i.t324||i.t273||x,w=i.t530,y=0,b=0,D=i.t277?i.t277[0]:1,A=i.t515;if(M&&(u=M[0],g=M.length>1),!g){if(t[e]==255&&t[e+1]==r)return{jpegOffset:e};if(x!=null&&(t[e+_]==255&&t[e+_+1]==r?f=e+_:log("JPEGInterchangeFormat does not point to SOI"),S==null?log("JPEGInterchangeFormatLength field is missing"):(_>=u||_+E<=u)&&log("JPEGInterchangeFormatLength field value is invalid"),f!=null))return{jpegOffset:f}}if(w!=null&&(y=w[0],b=w[1]),x!=null&&S!=null)if(E>=2&&_+E<=u){for(t[e+_+E-2]==255&&t[e+_+E-1]==r?h=new Uint8Array(E-2):h=new Uint8Array(E),v=0;v<h.length;v++)h[v]=t[e+_+v];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(h==null){var C=0,P=[];P[C++]=255,P[C++]=r;var L=i.t519;if(L==null)throw new Error("JPEGQTables tag is missing");for(v=0;v<L.length;v++)for(P[C++]=255,P[C++]=s,P[C++]=0,P[C++]=67,P[C++]=v,d=0;d<64;d++)P[C++]=t[e+L[v]+d];for(p=0;p<2;p++){var B=i[p==0?"t520":"t521"];if(B==null)throw new Error((p==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(v=0;v<B.length;v++){P[C++]=255,P[C++]=a;var z=19;for(d=0;d<16;d++)z+=t[e+B[v]+d];for(P[C++]=z>>>8,P[C++]=z&255,P[C++]=v|p<<4,d=0;d<16;d++)P[C++]=t[e+B[v]+d];for(d=0;d<z;d++)P[C++]=t[e+B[v]+16+d]}}if(P[C++]=255,P[C++]=c,P[C++]=0,P[C++]=8+3*D,P[C++]=8,P[C++]=i.height>>>8&255,P[C++]=i.height&255,P[C++]=i.width>>>8&255,P[C++]=i.width&255,P[C++]=D,D==1)P[C++]=1,P[C++]=17,P[C++]=0;else for(v=0;v<3;v++)P[C++]=v+1,P[C++]=v!=0?17:(y&15)<<4|b&15,P[C++]=v;A!=null&&A[0]!=0&&(P[C++]=255,P[C++]=o,P[C++]=0,P[C++]=4,P[C++]=A[0]>>>8&255,P[C++]=A[0]&255),h=new Uint8Array(P)}var O=-1;for(v=0;v<h.length-1;){if(h[v]==255&&h[v+1]==c){O=v;break}v++}if(O==-1){var N=new Uint8Array(h.length+10+3*D);N.set(h);var F=h.length;if(O=h.length,h=N,h[F++]=255,h[F++]=c,h[F++]=0,h[F++]=8+3*D,h[F++]=8,h[F++]=i.height>>>8&255,h[F++]=i.height&255,h[F++]=i.width>>>8&255,h[F++]=i.width&255,h[F++]=D,D==1)h[F++]=1,h[F++]=17,h[F++]=0;else for(v=0;v<3;v++)h[F++]=v+1,h[F++]=v!=0?17:(y&15)<<4|b&15,h[F++]=v}if(t[u]==255&&t[u+1]==l){var k=t[u+2]<<8|t[u+3];for(m=new Uint8Array(k+2),m[0]=t[u],m[1]=t[u+1],m[2]=t[u+2],m[3]=t[u+3],v=0;v<k-2;v++)m[v+4]=t[u+v+4]}else{m=new Uint8Array(8+2*D);var V=0;if(m[V++]=255,m[V++]=l,m[V++]=0,m[V++]=6+2*D,m[V++]=D,D==1)m[V++]=1,m[V++]=0;else for(v=0;v<3;v++)m[V++]=v+1,m[V++]=v<<4|v;m[V++]=0,m[V++]=63,m[V++]=0}return{jpegOffset:e,tables:h,sosMarker:m,sofPosition:O}};K.decode._decodeOldJPEG=function(i,t,e,n,r,s){var a,o,c,l,f,u=K.decode._decodeOldJPEGInit(i,t,e,n);if(u.jpegOffset!=null)for(o=e+n-u.jpegOffset,l=new Uint8Array(o),a=0;a<o;a++)l[a]=t[u.jpegOffset+a];else{for(c=u.tables.length,l=new Uint8Array(c+u.sosMarker.length+n+2),l.set(u.tables),f=c,l[u.sofPosition+5]=i.height>>>8&255,l[u.sofPosition+6]=i.height&255,l[u.sofPosition+7]=i.width>>>8&255,l[u.sofPosition+8]=i.width&255,(t[e]!=255||t[e+1]!=SOS)&&(l.set(u.sosMarker,f),f+=sosMarker.length),a=0;a<n;a++)l[f++]=t[e+a];l[f++]=255,l[f++]=EOI}var h=new K.JpegDecoder;h.parse(l);for(var m=h.getData({width:h.width,height:h.height,forceRGB:!0,isSourcePDF:!1}),a=0;a<m.length;a++)r[s+a]=m[a];i.t262&&i.t262[0]==6&&(i.t262[0]=2)};K.decode._decodePackBits=function(i,t,e,n,r){for(var s=new Int8Array(i.buffer),a=new Int8Array(n.buffer),o=t+e;t<o;){var c=s[t];if(t++,c>=0&&c<128)for(var l=0;l<c+1;l++)a[r]=s[t],r++,t++;if(c>=-127&&c<0){for(var l=0;l<-c+1;l++)a[r]=s[t],r++;t++}}return r};K.decode._decodeThunder=function(i,t,e,n,r){for(var s=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],o=t+e,c=r*2,l=0;t<o;){var f=i[t],u=f>>>6,h=f&63;if(t++,u==3&&(l=h&15,n[c>>>1]|=l<<4*(1-c&1),c++),u==0)for(var m=0;m<h;m++)n[c>>>1]|=l<<4*(1-c&1),c++;if(u==2)for(var m=0;m<2;m++){var g=h>>>3*(1-m)&7;g!=4&&(l+=a[g],n[c>>>1]|=l<<4*(1-c&1),c++)}if(u==1)for(var m=0;m<3;m++){var g=h>>>2*(2-m)&3;g!=2&&(l+=s[g],n[c>>>1]|=l<<4*(1-c&1),c++)}}};K.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3};K.decode._lens=function(){var i=function(c,l,f,u){for(var h=0;h<l.length;h++)c[l[h]]=f+h*u},t="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",e="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",r="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",s="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";t=t.split(","),e=e.split(","),n=n.split(","),r=r.split(","),s=s.split(",");var a={},o={};return i(a,t,0,1),i(a,n,64,64),i(a,s,1792,64),i(o,e,0,1),i(o,r,64,64),i(o,s,1792,64),[a,o]}();K.decode._decodeG4=function(i,t,e,n,r,s,a){for(var o=K.decode,c=t<<3,l=0,f="",u=[],h=[],m=0;m<s;m++)h.push(0);h=o._makeDiff(h);for(var g=0,v=0,d=0,p=0,x=0,_=0,S="",E=0,M=Math.ceil(s/8)*8;c>>>3<t+e;){d=o._findDiff(h,g+(g==0?0:1),1-x),p=o._findDiff(h,d,x);var w=0;if(a==1&&(w=i[c>>>3]>>>7-(c&7)&1),a==2&&(w=i[c>>>3]>>>(c&7)&1),c++,f+=w,S=="H"){if(o._lens[x][f]!=null){var y=o._lens[x][f];f="",l+=y,y<64&&(o._addNtimes(u,l,x),g+=l,x=1-x,l=0,E--,E==0&&(S=""))}}else f=="0001"&&(f="",o._addNtimes(u,p-g,x),g=p),f=="001"&&(f="",S="H",E=2),o._dmap[f]!=null&&(v=d+o._dmap[f],o._addNtimes(u,v-g,x),g=v,f="",x=1-x);u.length==s&&S==""&&(o._writeBits(u,n,r*8+_*M),x=0,_++,g=0,h=o._makeDiff(u),u=[])}};K.decode._findDiff=function(i,t,e){for(var n=0;n<i.length;n+=2)if(i[n]>=t&&i[n+1]==e)return i[n]};K.decode._makeDiff=function(i){var t=[];i[0]==1&&t.push(0,1);for(var e=1;e<i.length;e++)i[e-1]!=i[e]&&t.push(e,i[e]);return t.push(i.length,0,i.length,1),t};K.decode._decodeG2=function(i,t,e,n,r,s,a){for(var o=K.decode,c=t<<3,l=0,f="",u=[],h=0,m=0,g=Math.ceil(s/8)*8;c>>>3<t+e;){var v=0;a==1&&(v=i[c>>>3]>>>7-(c&7)&1),a==2&&(v=i[c>>>3]>>>(c&7)&1),c++,f+=v,l=o._lens[h][f],l!=null&&(o._addNtimes(u,l,h),f="",l<64&&(h=1-h),u.length==s&&(o._writeBits(u,n,r*8+m*g),u=[],m++,h=0,c&7&&(c+=8-(c&7)),l>=64&&(c+=8)))}};K.decode._decodeG3=function(i,t,e,n,r,s,a,o){for(var c=K.decode,l=t<<3,f=0,u="",h=[],m=[],g=0;g<s;g++)h.push(0);for(var v=0,d=0,p=0,x=0,_=0,S=-1,E="",M=0,w=!0,y=Math.ceil(s/8)*8;l>>>3<t+e;){p=c._findDiff(m,v+(v==0?0:1),1-_),x=c._findDiff(m,p,_);var b=0;if(a==1&&(b=i[l>>>3]>>>7-(l&7)&1),a==2&&(b=i[l>>>3]>>>(l&7)&1),l++,u+=b,w){if(c._lens[_][u]!=null){var D=c._lens[_][u];u="",f+=D,D<64&&(c._addNtimes(h,f,_),_=1-_,f=0)}}else if(E=="H"){if(c._lens[_][u]!=null){var D=c._lens[_][u];u="",f+=D,D<64&&(c._addNtimes(h,f,_),v+=f,_=1-_,f=0,M--,M==0&&(E=""))}}else u=="0001"&&(u="",c._addNtimes(h,x-v,_),v=x),u=="001"&&(u="",E="H",M=2),c._dmap[u]!=null&&(d=p+c._dmap[u],c._addNtimes(h,d-v,_),v=d,u="",_=1-_);u.endsWith("000000000001")&&(S>=0&&c._writeBits(h,n,r*8+S*y),o&&(a==1&&(w=(i[l>>>3]>>>7-(l&7)&1)==1),a==2&&(w=(i[l>>>3]>>>(l&7)&1)==1),l++),u="",_=0,S++,v=0,m=c._makeDiff(h),h=[])}h.length==s&&c._writeBits(h,n,r*8+S*y)};K.decode._addNtimes=function(i,t,e){for(var n=0;n<t;n++)i.push(e)};K.decode._writeBits=function(i,t,e){for(var n=0;n<i.length;n++)t[e+n>>>3]|=i[n]<<7-(e+n&7)};K.decode._decodeLZW=K.decode._decodeLZW=function(){var i,t,e,n,r=0,s=0,a=0,o=0,c=function(){var d=i>>>3,p=t[d]<<16|t[d+1]<<8|t[d+2],x=p>>>24-(i&7)-s&(1<<s)-1;return i+=s,x},l=new Uint32Array(4096*4),f=0,u=function(d){if(d!=f){f=d,a=1<<d,o=a+1;for(var p=0;p<o+1;p++)l[4*p]=l[4*p+3]=p,l[4*p+1]=65535,l[4*p+2]=1}},h=function(d){s=d+1,r=o+1},m=function(d){for(var p=d<<2,x=l[p+2],_=n+x-1;p!=65535;)e[_--]=l[p],p=l[p+1];n+=x},g=function(d,p){var x=r<<2,_=d<<2;l[x]=l[(p<<2)+3],l[x+1]=_,l[x+2]=l[_+2]+1,l[x+3]=l[_+3],r++,r+1==1<<s&&s!=12&&s++},v=function(d,p,x,_,S,E){i=p<<3,t=d,e=_,n=S;var M=p+x<<3,w=0,y=0;for(u(E),h(E);i<M&&(w=c())!=o;){if(w==a){if(h(E),w=c(),w==o)break;m(w)}else w<r?(m(w),g(y,w)):(g(y,y),m(r-1));y=w}return n};return v}();K.tags={};K._types=function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var t={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:t},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}}();K._readIFD=function(i,t,e,n,r,s){var a=i.readUshort(t,e);e+=2;var o={};s.debug&&log("   ".repeat(r),n.length-1,">>>----------------");for(var c=0;c<a;c++){var l=i.readUshort(t,e);e+=2;var f=i.readUshort(t,e);e+=2;var u=i.readUint(t,e);e+=4;var h=i.readUint(t,e);e+=4;var m=[];if(f==1||f==7){var g=u<5?e-4:h;g+u>t.buffer.byteLength&&(u=t.buffer.byteLength-g),m=new Uint8Array(t.buffer,g,u)}if(f==2){var v=u<5?e-4:h,d=t[v],p=Math.max(0,Math.min(u-1,t.length-v));d<128||p==0?m.push(i.readASCII(t,v,p)):m=new Uint8Array(t.buffer,v,p)}if(f==3)for(var x=0;x<u;x++)m.push(i.readUshort(t,(u<3?e-4:h)+2*x));if(f==4||f==13)for(var x=0;x<u;x++)m.push(i.readUint(t,(u<2?e-4:h)+4*x));if(f==5||f==10)for(var _=f==5?i.readUint:i.readInt,x=0;x<u;x++)m.push([_(t,h+x*8),_(t,h+x*8+4)]);if(f==8)for(var x=0;x<u;x++)m.push(i.readShort(t,(u<3?e-4:h)+2*x));if(f==9)for(var x=0;x<u;x++)m.push(i.readInt(t,(u<2?e-4:h)+4*x));if(f==11)for(var x=0;x<u;x++)m.push(i.readFloat(t,h+x*4));if(f==12)for(var x=0;x<u;x++)m.push(i.readDouble(t,h+x*8));if(u!=0&&m.length==0){if(log(l,"unknown TIFF tag type: ",f,"num:",u),c==0)return;continue}if(s.debug&&log("   ".repeat(r),l,f,K.tags[l],m),o["t"+l]=m,!(l==330&&o.t272&&o.t272[0]=="DSLR-A100")&&(l==330||l==34665||l==34853||l==50740&&i.readUshort(t,i.readUint(m,0))<300||l==61440)){for(var S=l==50740?[i.readUint(m,0)]:m,E=[],x=0;x<S.length;x++)K._readIFD(i,t,S[x],E,r+1,s);l==330&&(o.subIFD=E),l==34665&&(o.exifIFD=E[0]),l==34853&&(o.gpsiIFD=E[0]),l==50740&&(o.dngPrvt=E[0]),l==61440&&(o.fujiIFD=E[0])}if(l==37500&&s.parseMN){var M=m;if(i.readASCII(M,0,5)=="Nikon")o.makerNote=K.decode(M.slice(10).buffer)[0];else if(i.readASCII(M,0,5)=="OLYMP"||i.readASCII(M,0,9)=="OM SYSTEM"){var w=[8208,8224,8240,8256,8272],y=[];K._readIFD(i,M,M[1]==77?16:M[5]==85?12:8,y,r+1,s);for(var b=o.makerNote=y.pop(),x=0;x<w.length;x++){var D="t"+w[x];b[D]!=null&&(K._readIFD(i,M,b[D][0],y,r+1,s),b[D]=y.pop())}b.t12288&&(K._readIFD(i,b.t12288,0,y,r+1,s),b.t12288=y.pop())}else if(i.readUshort(t,h)<300&&i.readUshort(t,h+4)<=12){var y=[];K._readIFD(i,t,h,y,r+1,s),o.makerNote=y[0]}}}return n.push(o),s.debug&&log("   ".repeat(r),"<<<---------------"),e};K._writeIFD=function(i,t,e,n,r){var s=Object.keys(r),a=s.length;r.exifIFD&&a--,r.gpsiIFD&&a--,i.writeUshort(e,n,a),n+=2;for(var o=n+a*12+4,c=0;c<s.length;c++){var l=s[c];if(!(l=="t34665"||l=="t34853")){l=="exifIFD"&&(l="t34665"),l=="gpsiIFD"&&(l="t34853");var f=parseInt(l.slice(1)),u=t.main[f];if(u==null&&(u=t.rest[f]),u==null||u==0)throw new Error("unknown type of tag: "+f);var h=r[l];if(f==34665){var m=K._writeIFD(i,t,e,o,r.exifIFD);h=[o],o=m[1]}if(f==34853){var m=K._writeIFD(i,K._types.gps,e,o,r.gpsiIFD);h=[o],o=m[1]}u==2&&(h=h[0]+"\0");var g=h.length;i.writeUshort(e,n,f),n+=2,i.writeUshort(e,n,u),n+=2,i.writeUint(e,n,g),n+=4;var v=[-1,1,1,2,4,8,0,1,0,4,8,0,8][u]*g,d=n;if(v>4&&(i.writeUint(e,n,o),d=o),u==1||u==7)for(var p=0;p<g;p++)e[d+p]=h[p];else if(u==2)i.writeASCII(e,d,h);else if(u==3)for(var p=0;p<g;p++)i.writeUshort(e,d+2*p,h[p]);else if(u==4)for(var p=0;p<g;p++)i.writeUint(e,d+4*p,h[p]);else if(u==5||u==10)for(var x=u==5?i.writeUint:i.writeInt,p=0;p<g;p++){var _=h[p],S=_[0],E=_[1];if(S==null)throw"e";x(e,d+8*p,S),x(e,d+8*p+4,E)}else if(u==9)for(var p=0;p<g;p++)i.writeInt(e,d+4*p,h[p]);else if(u==12)for(var p=0;p<g;p++)i.writeDouble(e,d+8*p,h[p]);else throw u;v>4&&(v+=v&1,o+=v),n+=4}}return[n,o]};K.toRGBA8=function(i,t){function e(xt){return xt<.0031308?12.92*xt:1.055*Math.pow(xt,1/2.4)-.055}var n=i.width,r=i.height,s=n*r,a=i.data,o=new Uint8Array(s*4),c=i.t262?i.t262[0]:2,l=i.t258?Math.min(32,i.t258[0]):1;i.t262==null&&l==1&&(c=0);var f=i.t277?i.t277[0]:i.t258?i.t258.length:[1,1,3,1,1,4,3][c],u=i.t339?i.t339[0]:null;if(c==1&&l==32&&u!=3)throw"e";var h=Math.ceil(f*l*n/8);if(c==0){t=1/256;for(var m=0;m<r;m++){var g=m*h,v=m*n;if(l==1)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>3)]>>7-(d&7)&1;o[p]=o[p+1]=o[p+2]=(1-x)*255,o[p+3]=255}if(l==4)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>1)]>>4-4*(d&1)&15;o[p]=o[p+1]=o[p+2]=(15-x)*17,o[p+3]=255}if(l==8)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+d];o[p]=o[p+1]=o[p+2]=255-x,o[p+3]=255}if(l==16)for(var d=0;d<n;d++){var p=v+d<<2,_=g+2*d,x=a[_+1]<<8|a[_];o[p]=o[p+1]=o[p+2]=Math.min(255,255-~~(x*t)),o[p+3]=255}}}else if(c==1){t==null&&(t=1/256);for(var S=a.length&3?null:new Float32Array(a.buffer),m=0;m<r;m++){var g=m*h,v=m*n;if(l==1)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>3)]>>7-(d&7)&1;o[p]=o[p+1]=o[p+2]=x*255,o[p+3]=255}if(l==2)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>2)]>>6-2*(d&3)&3;o[p]=o[p+1]=o[p+2]=x*85,o[p+3]=255}if(l==8)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+d*f];o[p]=o[p+1]=o[p+2]=x,o[p+3]=255}if(l==16)for(var d=0;d<n;d++){var p=v+d<<2,_=g+2*d,x=a[_+1]<<8|a[_];o[p]=o[p+1]=o[p+2]=Math.min(255,~~(x*t)),o[p+3]=255}if(l==32)for(var d=0;d<n;d++){var p=v+d<<2,_=(g>>>2)+d,x=S[_];o[p]=o[p+1]=o[p+2]=~~(.5+255*x),o[p+3]=255}}}else if(c==2)if(l==8){if(f==1)for(var d=0;d<s;d++)o[4*d]=o[4*d+1]=o[4*d+2]=a[d],o[4*d+3]=255;if(f==3)for(var d=0;d<s;d++){var p=d<<2,E=d*3;o[p]=a[E],o[p+1]=a[E+1],o[p+2]=a[E+2],o[p+3]=255}if(f>=4)for(var d=0;d<s;d++){var p=d<<2,E=d*f;o[p]=a[E],o[p+1]=a[E+1],o[p+2]=a[E+2],o[p+3]=a[E+3]}}else if(l==16){if(f==4)for(var d=0;d<s;d++){var p=d<<2,E=d*8+1;o[p]=a[E],o[p+1]=a[E+2],o[p+2]=a[E+4],o[p+3]=a[E+6]}if(f==3)for(var d=0;d<s;d++){var p=d<<2,E=d*6+1;o[p]=a[E],o[p+1]=a[E+2],o[p+2]=a[E+4],o[p+3]=255}}else if(l==32){for(var M=new Float32Array(a.buffer),w=0,d=0;d<M.length;d++)w=Math.min(w,M[d]);if(w<0)for(var d=0;d<a.length;d+=4){var y=a[d];a[d]=a[d+3],a[d+3]=y,y=a[d+1],a[d+1]=a[d+2],a[d+2]=y}for(var b=[],d=0;d<65536;d++)b.push(e(d/65535));for(var d=0;d<M.length;d++){var D=Math.max(0,Math.min(1,M[d]));M[d]=b[~~(.5+D*65535)]}if(f==3)for(var d=0;d<s;d++){var p=d<<2,E=d*3;o[p]=~~(.5+M[E]*255),o[p+1]=~~(.5+M[E+1]*255),o[p+2]=~~(.5+M[E+2]*255),o[p+3]=255}else if(f==4)for(var d=0;d<s;d++){var p=d<<2,E=d*4;o[p]=~~(.5+M[E]*255),o[p+1]=~~(.5+M[E+1]*255),o[p+2]=~~(.5+M[E+2]*255),o[p+3]=~~(.5+M[E+3]*255)}else throw f}else throw l;else if(c==3)for(var A=i.t320,C=1<<l,P=l==8&&f>1&&i.t338&&i.t338[0]!=0,m=0;m<r;m++)for(var L=0;L<n;L++){var d=m*n+L,p=d<<2,B=0,z=m*h;if(l==1)B=a[z+(L>>>3)]>>>7-(L&7)&1;else if(l==2)B=a[z+(L>>>2)]>>>6-2*(L&3)&3;else if(l==4)B=a[z+(L>>>1)]>>>4-4*(L&1)&15;else if(l==8)B=a[z+L*f];else throw l;o[p]=A[B]>>8,o[p+1]=A[C+B]>>8,o[p+2]=A[C+C+B]>>8,o[p+3]=P?a[z+L*f+1]:255}else if(c==5)for(var O=f>4?1:0,d=0;d<s;d++){var p=d<<2,N=d*f;if(window.UDOC){var F=a[N],k=a[N+1],V=a[N+2],q=a[N+3],ot=UDOC.C.cmykToRgb([F*(1/255),k*(1/255),V*(1/255),q*(1/255)]);o[p]=~~(.5+255*ot[0]),o[p+1]=~~(.5+255*ot[1]),o[p+2]=~~(.5+255*ot[2])}else{var F=255-a[N],k=255-a[N+1],V=255-a[N+2],q=(255-a[N+3])*(1/255);o[p]=~~(F*q+.5),o[p+1]=~~(k*q+.5),o[p+2]=~~(V*q+.5)}o[p+3]=255*(1-O)+a[N+4]*O}else if(c==6&&i.t278)for(var ht=i.t278[0],m=0;m<r;m+=ht)for(var d=m*n,ut=ht*n,G=0;G<ut;G++){var p=4*(d+G),N=3*d+4*(G>>>1),V=a[N+(G&1)],J=a[N+2]-128,nt=a[N+3]-128,vt=V+((nt>>2)+(nt>>3)+(nt>>5)),ft=V-((J>>2)+(J>>4)+(J>>5))-((nt>>1)+(nt>>3)+(nt>>4)+(nt>>5)),bt=V+(J+(J>>1)+(J>>2)+(J>>6));o[p]=Math.max(0,Math.min(255,vt)),o[p+1]=Math.max(0,Math.min(255,ft)),o[p+2]=Math.max(0,Math.min(255,bt)),o[p+3]=255}else if(c==32845)for(var m=0;m<r;m++)for(var L=0;L<n;L++){var N=(m*n+L)*6,p=(m*n+L)*4,Ut=a[N+1]<<8|a[N],Ut=Math.pow(2,(Ut+.5)/256-64),_t=(a[N+3]+.5)/410,et=(a[N+5]+.5)/410,rt=9*_t/(6*_t-16*et+12),Z=4*et/(6*_t-16*et+12),ct=Ut,U=rt*ct/Z,V=ct,Pt=(1-rt-Z)*ct/Z,vt=2.69*U-1.276*V-.414*Pt,ft=-1.022*U+1.978*V+.044*Pt,bt=.061*U-.224*V+1.163*Pt;o[p]=e(Math.min(vt,1))*255,o[p+1]=e(Math.min(ft,1))*255,o[p+2]=e(Math.min(bt,1))*255,o[p+3]=255}else log("Unknown Photometric interpretation: "+c);return o};K.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var t=["tif","tiff","dng","cr2","nef"],e=0;e<i.length;e++){var n=i[e],r=n.getAttribute("src");if(r!=null){var s=r.split(".").pop().toLowerCase();if(t.indexOf(s)!=-1){var a=new XMLHttpRequest;K._xhrs.push(a),K._imgs.push(n),a.open("GET",r),a.responseType="arraybuffer",a.onload=K._imgLoaded,a.send()}}}};K._xhrs=[];K._imgs=[];K._imgLoaded=function(i){var t=K._xhrs.indexOf(i.target),e=K._imgs[t];K._xhrs.splice(t,1),K._imgs.splice(t,1),e.setAttribute("src",K.bufferToURI(i.target.response))};K.bufferToURI=function(i){var t=K.decode(i),e=t,n=0,r=e[0];t[0].subIFD&&(e=e.concat(t[0].subIFD));for(var s=0;s<e.length;s++){var a=e[s];if(!(a.t258==null||a.t258.length<3)){var o=a.t256*a.t257;o>n&&(n=o,r=a)}}K.decodeImage(i,r,t);var c=K.toRGBA8(r),l=r.width,f=r.height,u=document.createElement("canvas");u.width=l,u.height=f;var h=u.getContext("2d"),m=new ImageData(new Uint8ClampedArray(c.buffer),l,f);return h.putImageData(m,0,0),u.toDataURL()};K._binBE={nextZero:function(i,t){for(;i[t]!=0;)t++;return t},readUshort:function(i,t){return i[t]<<8|i[t+1]},readShort:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+1],e[1]=i[t+0],K._binBE.i16[0]},readInt:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],K._binBE.i32[0]},readUint:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],K._binBE.ui32[0]},readASCII:function(i,t,e){for(var n="",r=0;r<e;r++)n+=String.fromCharCode(i[t+r]);return n},readFloat:function(i,t){for(var e=K._binBE.ui8,n=0;n<4;n++)e[n]=i[t+3-n];return K._binBE.fl32[0]},readDouble:function(i,t){for(var e=K._binBE.ui8,n=0;n<8;n++)e[n]=i[t+7-n];return K._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e>>8&255,i[t+1]=e&255},writeInt:function(i,t,e){var n=K._binBE.ui8;K._binBE.i32[0]=e,i[t+3]=n[0],i[t+2]=n[1],i[t+1]=n[2],i[t+0]=n[3]},writeUint:function(i,t,e){i[t]=e>>24&255,i[t+1]=e>>16&255,i[t+2]=e>>8&255,i[t+3]=e>>0&255},writeASCII:function(i,t,e){for(var n=0;n<e.length;n++)i[t+n]=e.charCodeAt(n)},writeDouble:function(i,t,e){K._binBE.fl64[0]=e;for(var n=0;n<8;n++)i[t+n]=K._binBE.ui8[7-n]}};K._binBE.ui8=new Uint8Array(8);K._binBE.i16=new Int16Array(K._binBE.ui8.buffer);K._binBE.i32=new Int32Array(K._binBE.ui8.buffer);K._binBE.ui32=new Uint32Array(K._binBE.ui8.buffer);K._binBE.fl32=new Float32Array(K._binBE.ui8.buffer);K._binBE.fl64=new Float64Array(K._binBE.ui8.buffer);K._binLE={nextZero:K._binBE.nextZero,readUshort:function(i,t){return i[t+1]<<8|i[t]},readShort:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],K._binBE.i16[0]},readInt:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],K._binBE.i32[0]},readUint:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],K._binBE.ui32[0]},readASCII:K._binBE.readASCII,readFloat:function(i,t){for(var e=K._binBE.ui8,n=0;n<4;n++)e[n]=i[t+n];return K._binBE.fl32[0]},readDouble:function(i,t){for(var e=K._binBE.ui8,n=0;n<8;n++)e[n]=i[t+n];return K._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e&255,i[t+1]=e>>8&255},writeInt:function(i,t,e){var n=K._binBE.ui8;K._binBE.i32[0]=e,i[t+0]=n[0],i[t+1]=n[1],i[t+2]=n[2],i[t+3]=n[3]},writeUint:function(i,t,e){i[t]=e>>>0&255,i[t+1]=e>>>8&255,i[t+2]=e>>>16&255,i[t+3]=e>>>24&255},writeASCII:K._binBE.writeASCII};K._copyTile=function(i,t,e,n,r,s,a,o){for(var c=Math.min(t,r-a),l=Math.min(e,s-o),f=0;f<l;f++)for(var u=(o+f)*r+a,h=f*t,m=0;m<c;m++)n[u+m]=i[h+m]};K._inflateRaw=function(){var i={};return i.H={},i.H.N=function(t,e){var n=Uint8Array,r=0,s=0,a=0,o=0,c=0,l=0,f=0,u=0,h=0,m,g;if(t[0]==3&&t[1]==0)return e||new n(0);var v=i.H,d=v.b,p=v.e,x=v.R,_=v.n,S=v.A,E=v.Z,M=v.m,w=e==null;for(w&&(e=new n(t.length>>>2<<5));r==0;){if(r=d(t,h,1),s=d(t,h+1,2),h+=3,s==0){h&7&&(h+=8-(h&7));var y=(h>>>3)+4,b=t[y-4]|t[y-3]<<8;w&&(e=i.H.W(e,u+b)),e.set(new n(t.buffer,t.byteOffset+y,b),u),h=y+b<<3,u+=b;continue}if(w&&(e=i.H.W(e,u+(1<<17))),s==1&&(m=M.J,g=M.h,l=511,f=31),s==2){a=p(t,h,5)+257,o=p(t,h+5,5)+1,c=p(t,h+10,4)+4,h+=14;for(var D=1,A=0;A<38;A+=2)M.Q[A]=0,M.Q[A+1]=0;for(var A=0;A<c;A++){var C=p(t,h+A*3,3);M.Q[(M.X[A]<<1)+1]=C,C>D&&(D=C)}h+=3*c,_(M.Q,D),S(M.Q,D,M.u),m=M.w,g=M.d,h=x(M.u,(1<<D)-1,a+o,t,h,M.v);var P=v.V(M.v,0,a,M.C);l=(1<<P)-1;var L=v.V(M.v,a,o,M.D);f=(1<<L)-1,_(M.C,P),S(M.C,P,m),_(M.D,L),S(M.D,L,g)}for(;;){var B=m[E(t,h)&l];h+=B&15;var z=B>>>4;if(!(z>>>8))e[u++]=z;else{if(z==256)break;var O=u+z-254;if(z>264){var N=M.q[z-257];O=u+(N>>>3)+p(t,h,N&7),h+=N&7}var F=g[E(t,h)&f];h+=F&15;var k=F>>>4,V=M.c[k],q=(V>>>4)+d(t,h,V&15);for(h+=V&15;u<O;)e[u]=e[u++-q],e[u]=e[u++-q],e[u]=e[u++-q],e[u]=e[u++-q];u=O}}}return e.length==u?e:e.slice(0,u)},i.H.W=function(t,e){var n=t.length;if(e<=n)return t;var r=new Uint8Array(n<<1);return r.set(t,0),r},i.H.R=function(t,e,n,r,s,a){for(var o=i.H.e,c=i.H.Z,l=0;l<n;){var f=t[c(r,s)&e];s+=f&15;var u=f>>>4;if(u<=15)a[l]=u,l++;else{var h=0,m=0;u==16?(m=3+o(r,s,2),s+=2,h=a[l-1]):u==17?(m=3+o(r,s,3),s+=3):u==18&&(m=11+o(r,s,7),s+=7);for(var g=l+m;l<g;)a[l]=h,l++}}return s},i.H.V=function(t,e,n,r){for(var s=0,a=0,o=r.length>>>1;a<n;){var c=t[a+e];r[a<<1]=0,r[(a<<1)+1]=c,c>s&&(s=c),a++}for(;a<o;)r[a<<1]=0,r[(a<<1)+1]=0,a++;return s},i.H.n=function(t,e){for(var n=i.H.m,r=t.length,s,a,o,f,c,l=n.j,f=0;f<=e;f++)l[f]=0;for(f=1;f<r;f+=2)l[t[f]]++;var u=n.K;for(s=0,l[0]=0,a=1;a<=e;a++)s=s+l[a-1]<<1,u[a]=s;for(o=0;o<r;o+=2)c=t[o+1],c!=0&&(t[o]=u[c],u[c]++)},i.H.A=function(t,e,n){for(var r=t.length,s=i.H.m,a=s.r,o=0;o<r;o+=2)if(t[o+1]!=0)for(var c=o>>1,l=t[o+1],f=c<<4|l,u=e-l,h=t[o]<<u,m=h+(1<<u);h!=m;){var g=a[h]>>>15-e;n[g]=f,h++}},i.H.l=function(t,e){for(var n=i.H.m.r,r=15-e,s=0;s<t.length;s+=2){var a=t[s]<<e-t[s+1];t[s]=n[a]>>>r}},i.H.M=function(t,e,n){n=n<<(e&7);var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8},i.H.I=function(t,e,n){n=n<<(e&7);var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},i.H.e=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8)>>>(e&7)&(1<<n)-1},i.H.b=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)&(1<<n)-1},i.H.Z=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)},i.H.i=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16|t[(e>>>3)+3]<<24)>>>(e&7)},i.H.m=function(){var t=Uint16Array,e=Uint32Array;return{K:new t(16),j:new t(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new t(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new e(32),J:new t(512),_:[],h:new t(32),$:[],w:new t(32768),C:[],v:[],d:new t(32768),D:[],u:new t(512),Q:[],r:new t(32768),s:new e(286),Y:new e(30),a:new e(19),t:new e(15e3),k:new t(65536),g:new t(32768)}}(),function(){for(var t=i.H.m,e=32768,n=0;n<e;n++){var r=n;r=(r&2863311530)>>>1|(r&1431655765)<<1,r=(r&3435973836)>>>2|(r&858993459)<<2,r=(r&4042322160)>>>4|(r&252645135)<<4,r=(r&4278255360)>>>8|(r&16711935)<<8,t.r[n]=(r>>>16|r<<16)>>>17}function s(a,o,c){for(;o--!=0;)a.push(0,c)}for(var n=0;n<32;n++)t.q[n]=t.S[n]<<3|t.T[n],t.c[n]=t.p[n]<<4|t.z[n];s(t._,144,8),s(t._,112,9),s(t._,24,7),s(t._,8,8),i.H.n(t._,9),i.H.A(t._,9,t.J),i.H.l(t._,9),s(t.$,32,5),i.H.n(t.$,5),i.H.A(t.$,5,t.h),i.H.l(t.$,5),s(t.Q,19,0),s(t.C,286,0),s(t.D,30,0),s(t.v,320,0)}(),i.H.N}();K.LosslessJpegDecode=function(){var i,t;function e(){return i[t++]}function n(){return i[t++]<<8|i[t++]}function r(d){for(var p=e(),x=[0,0,0,255],_=[],S=8,E=0;E<16;E++)_[E]=e();for(var E=0;E<16;E++)for(var M=0;M<_[E];M++){var w=s(x,0,E+1,1);x[w+3]=e()}var y=new Uint8Array(1<<S);d[p]=[new Uint8Array(x),y];for(var E=0;E<1<<S;E++){for(var b=S,D=E,A=0,C=0;x[A+3]==255&&b!=0;)C=D>>--b&1,A=x[A+C];y[E]=A}}function s(d,p,x,_){if(d[p+3]!=255)return 0;if(x==0)return p;for(var S=0;S<2;S++){d[p+S]==0&&(d[p+S]=d.length,d.push(0,0,_,255));var E=s(d,d[p+S],x-1,_+1);if(E!=0)return E}return 0}function a(d){for(var p=d.b,x=d.f;p<25&&d.a<d.d;){var _=d.data[d.a++];_==255&&!d.c&&d.a++,x=x<<8|_,p+=8}if(p<0)throw"e";d.b=p,d.f=x}function o(d,p){return p.b<d&&a(p),p.f>>(p.b-=d)&65535>>16-d}function c(d,p){var x=d[0],_=0,S=255,E=0;p.b<16&&a(p);var M=p.f>>p.b-8&255;for(_=d[1][M],S=x[_+3],p.b-=x[_+2];S==255;)E=p.f>>--p.b&1,_=x[_+E],S=x[_+3];return S}function l(d,p){return d<32768>>16-p&&(d+=-(1<<p)+1),d}function f(d,p){var x=c(d,p);if(x==0)return 0;if(x==16)return-32768;var _=o(x,p);return l(_,x)}function u(d,p,x,_,S,E){for(var M=0,w=0;w<E;w++){for(var y=w*p,b=0;b<p;b+=S){M++;for(var D=0;D<S;D++)d[y+b+D]=f(_[D],x)}if(x.e!=0&&M%x.e==0&&w!=0){for(var A=x.a,C=x.data;C[A]!=255||!(208<=C[A+1]&&C[A+1]<=215);)A--;x.a=A+2,x.f=0,x.b=0}}}function h(d,p){return l(o(d,p),d)}function m(d,p,x,_,S){for(var E=i.length-t,M=0;M<E;M+=4){var w=i[t+M];i[t+M]=i[t+M+3],i[t+M+3]=w;var w=i[t+M+1];i[t+M+1]=i[t+M+2],i[t+M+2]=w}for(var y=0;y<S;y++)for(var b=32768,D=32768,A=0;A<p;A+=2){var C=c(_,x),P=c(_,x);C!=0&&(b+=h(C,x)),P!=0&&(D+=h(P,x)),d[y*p+A]=b&65535,d[y*p+A+1]=D&65535}}function g(d){if(i=d,t=0,n()!=65496)throw"e";for(var p=[],x=0,_=0,S=0,E=[],M=[],w=[],y=0,b=0,D=0;;){var A=n();if(A==65535){t--;continue}var C=n();if(A==65475){_=e(),b=n(),D=n(),y=e();for(var P=0;P<y;P++){var L=e(),B=e(),z=e();if(z!=0)throw"e";p[L]=[P,B>>4,B&15]}}else if(A==65476)for(var O=t+C-2;t<O;)r(M);else if(A==65498){t++;for(var P=0;P<y;P++){var N=e(),F=p[N];w[F[0]]=M[e()>>>4],E[F[0]]=F.slice(1)}x=e(),t+=2;break}else A==65501?S=n():t+=C-2}var k=_>8?Uint16Array:Uint8Array,V=new k(b*D*y),q={b:0,f:0,c:x==8,a:t,data:i,d:i.length,e:S};if(q.c)m(V,D*y,q,w[0],b);else{for(var ot=[],ht=0,ut=0,P=0;P<y;P++){var G=E[P],J=G[0],nt=G[1];J>ht&&(ht=J),nt>ut&&(ut=nt),ot.push(J*nt)}if(ht!=1||ut!=1){if(y!=3||ot[1]!=1||ot[2]!=1||ht!=2||ut!=1&&ut!=2)throw"e";for(var vt=[],ft=0,P=0;P<y;P++){for(var bt=0;bt<ot[P];bt++)vt.push(w[P]);ft+=ot[P]}var Ut=D/ht,_t=b/ut,et=Ut*_t;u(V,Ut*ft,q,vt,ft,_t),v(V,x,Ut,_t,ft-2,ft,ft,_);var rt=new Uint16Array(et*ot[0]);if(ht==2&&ut==2){for(var P=0;P<et;P++)rt[4*P]=V[6*P],rt[4*P+1]=V[6*P+1],rt[4*P+2]=V[6*P+2],rt[4*P+3]=V[6*P+3];v(rt,x,Ut*4,_t,0,1,1,_);for(var P=0;P<et;P++)V[6*P]=rt[4*P],V[6*P+1]=rt[4*P+1],V[6*P+2]=rt[4*P+2],V[6*P+3]=rt[4*P+3]}if(ht==2&&ut==1){for(var P=0;P<et;P++)rt[2*P]=V[4*P],rt[2*P+1]=V[4*P+1];v(rt,x,Ut*2,_t,0,1,1,_);for(var P=0;P<et;P++)V[4*P]=rt[2*P],V[4*P+1]=rt[2*P+1]}for(var Z=V.slice(0),nt=0;nt<b;nt++)if(ut==2)for(var J=0;J<D;J++){var ct=(nt*D+J)*y,U=((nt>>>1)*Ut+(J>>>1))*ft,Pt=(nt&1)*2+(J&1);V[ct]=Z[U+Pt],V[ct+1]=Z[U+4],V[ct+2]=Z[U+5]}else for(var J=0;J<D;J++){var ct=(nt*D+J)*y,U=(nt*Ut+(J>>>1))*ft,Pt=J&1;V[ct]=Z[U+Pt],V[ct+1]=Z[U+2],V[ct+2]=Z[U+3]}}else if(u(V,D*y,q,w,y,b),S==0)v(V,x,D,b,0,y,y,_);else for(var xt=Math.floor(S/D),nt=0;nt<b;nt+=xt){var St=V.slice(nt*D*y,(nt+xt)*D*y);v(St,x,D,xt,0,y,y,_),V.set(St,nt*D*y)}}return V}function v(d,p,x,_,S,E,M,w){for(var y=x*M,b=S;b<E;b++)d[b]+=1<<w-1;for(var D=M;D<y;D+=M)for(var b=S;b<E;b++)d[D+b]+=d[D+b-M];for(var A=1;A<_;A++){for(var C=A*y,b=S;b<E;b++)d[C+b]+=d[C+b-y];for(var D=M;D<y;D+=M)for(var b=S;b<E;b++){var P=C+D+b,L=P-y,B=d[P-M],z=0;if(p==0)z=0;else if(p==1)z=B;else if(p==2)z=d[L];else if(p==3)z=d[L-M];else if(p==4)z=B+(d[L]-d[L-M]);else if(p==5)z=B+(d[L]-d[L-M]>>>1);else if(p==6)z=d[L]+(B-d[L-M]>>>1);else if(p==7)z=B+d[L]>>>1;else throw p;d[P]+=z}}}return g}();(function(){var i=0,t=1,e=2,n=3,r=4,s=5,a=6,o=7,c=8,l=9,f=10,u=11,h=12,m=13,g=14,v=15,d=16,p=17,x=18;function _(N){var F=K._binBE.readUshort,k={b:F(N,0),i:N[2],C:N[3],u:N[4],q:F(N,5),k:F(N,7),e:F(N,9),l:F(N,11),s:N[13],d:F(N,14)};if(k.b!=18771||k.i>1||k.q<6||k.q%6||k.e<768||k.e%24||k.l!=768||k.k<k.l||k.k%k.l||k.k-k.e>=k.l||k.s>16||k.s!=k.k/k.l||k.s!=Math.ceil(k.e/k.l)||k.d!=k.q/6||k.u!=12&&k.u!=14&&k.u!=16||k.C!=16&&k.C!=0)throw"Invalid data";if(k.i==0)throw"Not implemented. We need this file!";return k.h=k.C==16,k.m=(k.h?k.l*2/3:k.l>>>1)|0,k.A=k.m+2,k.f=64,k.g=(1<<k.u)-1,k.n=4*k.u,k}function S(N,F){var k=new Array(F.s),V=4*F.s,q=16+V;V&12&&(q+=16-(V&12));for(var ot=0,ht=16;ot<F.s;ht+=4){var ut=K._binBE.readUint(N,ht);k[ot]=N.slice(q,q+ut),k[ot].j=0,k[ot].a=0,q+=ut,ot++}if(q!=N.length)throw"Invalid data";return k}function E(N,F){for(var k=-F[4],V=0;k<=F[4];V++,k++)N[V]=k<=-276?-4:k<=-67?-3:k<=-18?-2:k<-0?-1:k<=F[0]?0:k<F[1]?1:k<F[2]?2:k<F[3]?3:4}function M(N,F,k){var V=[F,3*F+18,5*F+67,7*F+276,k];N.o=F,N.w=(V[4]+2*F)/(2*F+1)+1|0,N.v=Math.ceil(Math.log2(N.w)),N.t=9,E(N.c,V)}function w(N){var F={c:new Int8Array(2<<N.u)};return M(F,0,N.g),F}function y(N){for(var F=[[],[],[]],k=Math.max(2,N.w+32>>>6),V=0;V<3;V++)for(var q=0;q<41;q++)F[V][q]=[k,1];return F}function b(N){for(var F=-1,k=0;!k;F++)k=N[N.j]>>>7-N.a&1,N.a++,N.a&=7,N.a||N.j++;return F}function D(N,F){var k=0,V=8-N.a;if(N.j,N.a,F){if(F>=V)do k<<=V,F-=V,k|=N[N.j]&(1<<V)-1,N.j++,V=8;while(F>=8);F&&(k<<=F,V-=F,k|=N[N.j]>>>V&(1<<F)-1),N.a=8-V}return k}function A(N,F){var k=0;if(F<N)for(;k<=14&&F<<++k<N;);return k}function C(N,F,k,V,q,ot,ht,ut){ut==null&&(ut=0);var G=ot+1,J=G%2,nt=0,vt,ft,bt=V[q],Ut=V[q-1],_t=V[q-2][G],et=Ut[G-1],rt=Ut[G],Z=Ut[G+1],ct=bt[G-1],U=bt[G+1],Pt=Math.abs,xt,St,gt,I;if(J&&(xt=Pt(Z-rt),St=Pt(_t-rt),gt=Pt(et-rt)),J){if(I=xt>gt&&St<xt?_t+et:xt<gt&&St<gt?_t+Z:Z+et,I=I+2*rt>>>2,ut){bt[G]=I;return}vt=F.t*F.c[N.g+rt-_t]+F.c[N.g+et-rt]}else I=rt>et&&rt>Z||rt<et&&rt<Z?U+ct+2*rt>>>2:ct+U>>>1,vt=F.t*F.c[N.g+rt-et]+F.c[N.g+et-ct];ft=Pt(vt);var T=b(k);if(T<N.n-F.v-1){var W=A(ht[ft][0],ht[ft][1]);nt=D(k,W)+(T<<W)}else nt=D(k,F.v)+1;nt=nt&1?-1-(nt>>>1):nt>>>1,ht[ft][0]+=Pt(nt),ht[ft][1]==N.f&&(ht[ft][0]>>>=1,ht[ft][1]>>>=1),ht[ft][1]++,I=vt<0?I-nt:I+nt,N.i&&(I<0?I+=F.w:I>N.g&&(I-=F.w)),bt[G]=I>=0?Math.min(I,N.g):0}function P(N,F,k){for(var V=N[0].length,q=F;q<=k;q++)N[q][0]=N[q-1][1],N[q][V-1]=N[q-1][V-2]}function L(N){P(N,o,h),P(N,e,r),P(N,v,p)}function B(N,F,k,V,q,ot,ht,ut,G,J,nt,vt,ft){for(var bt=0,Ut=1,_t=q<m&&q>r;Ut<N.m;)bt<N.m&&(C(N,F,k,V,q,bt,ht[G],N.h&&(_t&&J||!_t&&(nt||(bt&vt)==ft))),C(N,F,k,V,ot,bt,ht[G],N.h&&(!_t&&J||_t&&(nt||(bt&vt)==ft))),bt+=2),bt>8&&(C(N,F,k,V,q,Ut,ut[G]),C(N,F,k,V,ot,Ut,ut[G]),Ut+=2);L(V)}function z(N,F,k,V,q,ot){B(N,F,k,V,e,o,q,ot,0,0,1,0,8),B(N,F,k,V,c,v,q,ot,1,0,1,0,8),B(N,F,k,V,n,l,q,ot,2,1,0,3,0),B(N,F,k,V,f,d,q,ot,0,0,0,3,2),B(N,F,k,V,r,u,q,ot,1,0,0,3,2),B(N,F,k,V,h,p,q,ot,2,1,0,3,0)}function O(N,F,k,V,q,ot){var ht=ot.length,ut=N.l;q+1==N.s&&(ut=N.e-q*N.l);for(var G=6*N.e*V+q*N.l,J=0;J<6;J++){for(var nt=0;nt<ut;nt++){var vt=ot[J%ht][nt%ht],ft;vt==0?ft=e+(J>>>1):vt==2?ft=v+(J>>>1):ft=o+J;var bt=N.h?(nt*2/3&2147483646|nt%3&1)+(nt%3>>>1):nt>>>1;F[G+nt]=k[ft][bt+1]}G+=N.e}}K._decompressRAF=function(N,F){var k=_(N),V=S(N,k),q=w(k),ot=new Int16Array(k.e*k.q);F==null&&(F=k.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var ht=[[i,n],[t,r],[s,u],[a,h],[m,d],[g,p]],ut=[],G=0;G<x;G++)ut[G]=new Uint16Array(k.A);for(var J=0;J<k.s;J++){for(var nt=y(q),vt=y(q),G=0;G<x;G++)for(var ft=0;ft<k.A;ft++)ut[G][ft]=0;for(var bt=0;bt<k.d;bt++){z(k,q,V[J],ut,nt,vt);for(var G=0;G<6;G++)for(var ft=0;ft<k.A;ft++)ut[ht[G][0]][ft]=ut[ht[G][1]][ft];O(k,ot,ut,bt,J,F);for(var G=e;G<x;G++)if([s,a,m,g].indexOf(G)==-1)for(var ft=0;ft<k.A;ft++)ut[G][ft]=0;L(ut)}}return ot}})();new Qf(new OffscreenCanvas(1,1));function oi(i,t){this.x=i,this.y=t}oi.prototype={clone(){return new oi(this.x,this.y)},add(i){return this.clone()._add(i)},sub(i){return this.clone()._sub(i)},multByPoint(i){return this.clone()._multByPoint(i)},divByPoint(i){return this.clone()._divByPoint(i)},mult(i){return this.clone()._mult(i)},div(i){return this.clone()._div(i)},rotate(i){return this.clone()._rotate(i)},rotateAround(i,t){return this.clone()._rotateAround(i,t)},matMult(i){return this.clone()._matMult(i)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(i){return this.x===i.x&&this.y===i.y},dist(i){return Math.sqrt(this.distSqr(i))},distSqr(i){const t=i.x-this.x,e=i.y-this.y;return t*t+e*e},angle(){return Math.atan2(this.y,this.x)},angleTo(i){return Math.atan2(this.y-i.y,this.x-i.x)},angleWith(i){return this.angleWithSep(i.x,i.y)},angleWithSep(i,t){return Math.atan2(this.x*t-this.y*i,this.x*i+this.y*t)},_matMult(i){const t=i[0]*this.x+i[1]*this.y,e=i[2]*this.x+i[3]*this.y;return this.x=t,this.y=e,this},_add(i){return this.x+=i.x,this.y+=i.y,this},_sub(i){return this.x-=i.x,this.y-=i.y,this},_mult(i){return this.x*=i,this.y*=i,this},_div(i){return this.x/=i,this.y/=i,this},_multByPoint(i){return this.x*=i.x,this.y*=i.y,this},_divByPoint(i){return this.x/=i.x,this.y/=i.y,this},_unit(){return this._div(this.mag()),this},_perp(){const i=this.y;return this.y=this.x,this.x=-i,this},_rotate(i){const t=Math.cos(i),e=Math.sin(i),n=t*this.x-e*this.y,r=e*this.x+t*this.y;return this.x=n,this.y=r,this},_rotateAround(i,t){const e=Math.cos(i),n=Math.sin(i),r=t.x+e*(this.x-t.x)-n*(this.y-t.y),s=t.y+n*(this.x-t.x)+e*(this.y-t.y);return this.x=r,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:oi};oi.convert=function(i){if(i instanceof oi)return i;if(Array.isArray(i))return new oi(+i[0],+i[1]);if(i.x!==void 0&&i.y!==void 0)return new oi(+i.x,+i.y);throw new Error("Expected [x, y] or {x, y} point format")};typeof TextDecoder>"u"||new TextDecoder("utf-8");const fu=new Set;Ge.add=async function(i,t){};Ge.get=function(i){};Ge.remove=function(i){fu.delete(i)};Ge.clear=function(){fu.clear()};const ih=new yt;function Yv(i,t,e){var c;const{currentTarget:n,offsetX:r,offsetY:s}=i;if(!(n instanceof HTMLElement))return;const a=n.clientWidth,o=n.clientHeight;return ih.set(r/a*2-1,-(s/o)*2+1),(c=t.getLocalInfoFromScreen(e,ih))==null?void 0:c.location}new H;new H;new H;new Qe;export{wv as $,Kf as A,ye as B,Cv as C,np as D,jn as E,Mh as F,Jo as G,zh as H,bv as I,Rn as J,jo as K,qi as L,De as M,Ir as N,de as O,Iv as P,Ke as Q,ka as R,xn as S,vv as T,Fd as U,H as V,ae as W,Sv as X,$f as Y,Cs as Z,Ev as _,we as a,lh as a$,Ur as a0,Ne as a1,il as a2,wh as a3,lc as a4,Xf as a5,Ms as a6,yo as a7,Eh as a8,ge as a9,Nv as aA,Gv as aB,Xv as aC,Do as aD,Tv as aE,Yo as aF,Yn as aG,Je as aH,Tf as aI,Yh as aJ,Ah as aK,ue as aL,Oh as aM,Bh as aN,el as aO,on as aP,pd as aQ,ic as aR,Fh as aS,Fv as aT,I1 as aU,X1 as aV,Ji as aW,Qf as aX,Zi as aY,hh as aZ,ch as a_,Ps as aa,Rs as ab,Ns as ac,te as ad,Ln as ae,Ar as af,Qe as ag,Mn as ah,cu as ai,Hv as aj,Vv as ak,kv as al,Yv as am,zv as an,Tr as ao,zd as ap,Ov as aq,Wv as ar,oh as as,xp as at,Fn as au,Uv as av,Bf as aw,Ls as ax,d1 as ay,ip as az,yv as b,ah as b0,sh as b1,rh as b2,mn as b3,xv as c,Be as d,wr as e,Jt as f,li as g,Dv as h,Kd as i,Av as j,yt as k,ki as l,Oe as m,Pv as n,Qt as o,ql as p,Rv as q,Lv as r,Mv as s,si as t,Gs as u,Wu as v,Ie as w,Ae as x,za as y,Pn as z};
