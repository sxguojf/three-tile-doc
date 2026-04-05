/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="183",qe={ROTATE:0,DOLLY:1,PAN:2},pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mu=0,ml=1,gu=2,ds=1,_u=2,lr=3,Ln=0,ke=1,Cn=2,Pn=0,Ui=1,gl=2,_l=3,vl=4,vu=5,ni=100,xu=101,yu=102,Mu=103,Su=104,bu=200,wu=201,Eu=202,Tu=203,Ra=204,Pa=205,Au=206,Cu=207,Ru=208,Pu=209,Iu=210,Lu=211,Du=212,Uu=213,Nu=214,Ia=0,La=1,Da=2,Fi=3,Ua=4,Na=5,Fa=6,Oa=7,Lo=0,Fu=1,Ou=2,mn=0,Qc=1,th=2,eh=3,nh=4,ih=5,rh=6,sh=7,xl="attached",Bu="detached",ah=300,hi=301,Oi=302,zs=303,Vs=304,Ps=306,Ba=1e3,Rn=1001,ka=1002,Ae=1003,ku=1004,Pr=1005,Le=1006,Hs=1007,ri=1008,Ge=1009,oh=1010,lh=1011,gr=1012,Do=1013,_n=1014,Ye=1015,Dn=1016,Uo=1017,No=1018,_r=1020,ch=35902,hh=35899,uh=1021,fh=1022,Ze=1023,Un=1026,si=1027,Fo=1028,Oo=1029,Bi=1030,Bo=1031,ko=1033,ps=33776,ms=33777,gs=33778,_s=33779,za=35840,Va=35841,Ha=35842,Ga=35843,Wa=36196,Xa=37492,ja=37496,qa=37488,Ya=37489,Za=37490,Ja=37491,$a=37808,Ka=37809,Qa=37810,to=37811,eo=37812,no=37813,io=37814,ro=37815,so=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,uo=36492,fo=36494,po=36495,mo=36283,go=36284,_o=36285,vo=36286,zu=2200,Vu=2201,Hu=2202,xs=2300,xo=2301,Gs=2302,yl=2303,Ii=2400,Li=2401,ys=2402,zo=2500,Gu=2501,_v=0,vv=1,xv=2,Wu=3200,Vo=0,Xu=1,Xn="",Be="srgb",ki="srgb-linear",Ms="linear",re="srgb",pi=7680,Ml=519,ju=512,qu=513,Yu=514,Ho=515,Zu=516,Ju=517,Go=518,$u=519,yo=35044,Sl="300 es",an=2e3,vr=2001;function Ku(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tf(){const i=xr("canvas");return i.style.display="block",i}const bl={};function Ss(...i){const t="THREE."+i.shift();console.log(t,...i)}function dh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=dh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=dh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bs(...i){const t=i.join(" ");t in bl||(bl[t]=!0,Vt(...i))}function ef(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const nf={[Ia]:La,[Da]:Fa,[Ua]:Oa,[Fi]:Na,[La]:Ia,[Fa]:Da,[Oa]:Ua,[Na]:Fi};class Nn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const fr=Math.PI/180,zi=180/Math.PI;function Je(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Wo(i,t){return(i%t+t)%t}function rf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function sf(i,t,e){return i!==t?(e-i)/(t-i):0}function dr(i,t,e){return(1-e)*i+e*t}function af(i,t,e,n){return dr(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(Wo(i,t*2)-t)}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uf(i,t){return i+Math.random()*(t-i)}function ff(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(wl=i);let t=wl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pf(i){return i*fr}function mf(i){return i*zi}function gf(i){return(i&i-1)===0&&i!==0}function _f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xf(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),f=a((t+n)/2),u=s((t-n)/2),h=a((t-n)/2),m=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*f,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*f,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*f,o*c);break;case"XZX":i.set(o*f,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*f,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*f,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const oi={DEG2RAD:fr,RAD2DEG:zi,generateUUID:Je,clamp:Zt,euclideanModulo:Wo,mapLinear:rf,inverseLerp:sf,lerp:dr,damp:af,pingpong:of,smoothstep:lf,smootherstep:cf,randInt:hf,randFloat:uf,randFloatSpread:ff,seededRandom:df,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:_f,floorPowerOfTwo:vf,setQuaternionFromProperEuler:xf,normalize:se,denormalize:rn};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3],h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(u!==v||l!==h||c!==m||f!==g){let d=l*h+c*m+f*g+u*v;d<0&&(h=-h,m=-m,g=-g,v=-v,d=-d);let p=1-o;if(d<.9995){const x=Math.acos(d),_=Math.sin(x);p=Math.sin(p*x)/_,o=Math.sin(o*x)/_,l=l*p+h*o,c=c*p+m*o,f=f*p+g*o,u=u*p+v*o}else{l=l*p+h*o,c=c*p+m*o,f=f*p+g*o,u=u*p+v*o;const x=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=x,c*=x,f*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+f*u+l*m-c*h,t[e+1]=l*g+f*h+c*u-o*m,t[e+2]=c*g+f*m+o*h-l*u,t[e+3]=f*g-o*u-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),u=o(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*m*g,this._y=c*m*u-h*f*g,this._z=c*f*g+h*m*u,this._w=c*f*u-h*m*g;break;case"YXZ":this._x=h*f*u+c*m*g,this._y=c*m*u-h*f*g,this._z=c*f*g-h*m*u,this._w=c*f*u+h*m*g;break;case"ZXY":this._x=h*f*u-c*m*g,this._y=c*m*u+h*f*g,this._z=c*f*g+h*m*u,this._w=c*f*u-h*m*g;break;case"ZYX":this._x=h*f*u-c*m*g,this._y=c*m*u+h*f*g,this._z=c*f*g-h*m*u,this._w=c*f*u+h*m*g;break;case"YZX":this._x=h*f*u+c*m*g,this._y=c*m*u+h*f*g,this._z=c*f*g-h*m*u,this._w=c*f*u-h*m*g;break;case"XZY":this._x=h*f*u-c*m*g,this._y=c*m*u-h*f*g,this._z=c*f*g+h*m*u,this._w=c*f*u+h*m*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],u=e[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),f=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*f,this.y=n+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new H,El=new $e;class Yt{constructor(t,e,n,r,s,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=o,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],m=n[5],g=n[8],v=r[0],d=r[3],p=r[6],x=r[1],_=r[4],S=r[7],w=r[2],M=r[5],E=r[8];return s[0]=a*v+o*x+l*w,s[3]=a*d+o*_+l*M,s[6]=a*p+o*S+l*E,s[1]=c*v+f*x+u*w,s[4]=c*d+f*_+u*M,s[7]=c*p+f*S+u*E,s[2]=h*v+m*x+g*w,s[5]=h*d+m*_+g*M,s[8]=h*p+m*S+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],u=f*a-o*c,h=o*l-f*s,m=c*s-a*l,g=e*u+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(r*c-f*n)*v,t[2]=(o*n-r*a)*v,t[3]=h*v,t[4]=(f*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Yt,Tl=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yf(){const i={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===re&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?Ms:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ki]:{primaries:t,whitePoint:n,transfer:Ms,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Tl,fromXYZ:Al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}const te=yf();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class Mf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mi===void 0&&(mi=xr("canvas")),mi.width=t.width,mi.height=t.height;const r=mi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class Xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Je(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let bf=0;const qs=new H;class ye extends Nn{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=Rn,r=Rn,s=Le,a=ri,o=Ze,l=Ge,c=ye.DEFAULT_ANISOTROPY,f=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Je(),this.name="",this.source=new Xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qs).x}get height(){return this.source.getSize(qs).y}get depth(){return this.source.getSize(qs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ba:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ba:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=ah;ye.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],f=l[4],u=l[8],h=l[1],m=l[5],g=l[9],v=l[2],d=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,S=(m+1)/2,w=(p+1)/2,M=(f+h)/4,E=(u+v)/4,y=(g+d)/4;return _>S&&_>w?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=M/n,s=E/n):S>w?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=M/r,s=y/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=E/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((d-g)*(d-g)+(u-v)*(u-v)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(u-v)/x,this.z=(h-f)/x,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends Nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new ye(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Xo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ph extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ef extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(t,e,n,r,s,a,o,l,c,f,u,h,m,g,v,d){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,f,u,h,m,g,v,d)}set(t,e,n,r,s,a,o,l,c,f,u,h,m,g,v,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=m,p[7]=g,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/gi.setFromMatrixColumn(t,0).length(),s=1/gi.setFromMatrixColumn(t,1).length(),a=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=a*f,m=a*u,g=o*f,v=o*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*f,m=l*u,g=c*f,v=c*u;e[0]=h+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*f,e[9]=-o,e[2]=m*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*f,m=l*u,g=c*f,v=c*u;e[0]=h-v*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*f,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*f,m=a*u,g=o*f,v=o*u;e[0]=l*f,e[4]=g*c-m,e[8]=h*c+v,e[1]=l*u,e[5]=v*c+h,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*f,e[4]=v-h*u,e[8]=g*u+m,e[1]=u,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=m*u+g,e[10]=h-v*u}else if(t.order==="XZY"){const h=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=h*u+v,e[5]=a*f,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*f,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Af)}lookAt(t,e,n){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Bn.crossVectors(n,Ve),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Bn.crossVectors(n,Ve)),Bn.normalize(),Ir.crossVectors(Ve,Bn),r[0]=Bn.x,r[4]=Ir.x,r[8]=Ve.x,r[1]=Bn.y,r[5]=Ir.y,r[9]=Ve.y,r[2]=Bn.z,r[6]=Ir.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],m=n[13],g=n[2],v=n[6],d=n[10],p=n[14],x=n[3],_=n[7],S=n[11],w=n[15],M=r[0],E=r[4],y=r[8],b=r[12],L=r[1],A=r[5],C=r[9],P=r[13],D=r[2],B=r[6],z=r[10],O=r[14],N=r[3],F=r[7],k=r[11],V=r[15];return s[0]=a*M+o*L+l*D+c*N,s[4]=a*E+o*A+l*B+c*F,s[8]=a*y+o*C+l*z+c*k,s[12]=a*b+o*P+l*O+c*V,s[1]=f*M+u*L+h*D+m*N,s[5]=f*E+u*A+h*B+m*F,s[9]=f*y+u*C+h*z+m*k,s[13]=f*b+u*P+h*O+m*V,s[2]=g*M+v*L+d*D+p*N,s[6]=g*E+v*A+d*B+p*F,s[10]=g*y+v*C+d*z+p*k,s[14]=g*b+v*P+d*O+p*V,s[3]=x*M+_*L+S*D+w*N,s[7]=x*E+_*A+S*B+w*F,s[11]=x*y+_*C+S*z+w*k,s[15]=x*b+_*P+S*O+w*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],u=t[6],h=t[10],m=t[14],g=t[3],v=t[7],d=t[11],p=t[15],x=l*m-c*h,_=o*m-c*u,S=o*h-l*u,w=a*m-c*f,M=a*h-l*f,E=a*u-o*f;return e*(v*x-d*_+p*S)-n*(g*x-d*w+p*M)+r*(g*_-v*w+p*E)-s*(g*S-v*M+d*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],u=t[9],h=t[10],m=t[11],g=t[12],v=t[13],d=t[14],p=t[15],x=e*o-n*a,_=e*l-r*a,S=e*c-s*a,w=n*l-r*o,M=n*c-s*o,E=r*c-s*l,y=f*v-u*g,b=f*d-h*g,L=f*p-m*g,A=u*d-h*v,C=u*p-m*v,P=h*p-m*d,D=x*P-_*C+S*A+w*L-M*b+E*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return t[0]=(o*P-l*C+c*A)*B,t[1]=(r*C-n*P-s*A)*B,t[2]=(v*E-d*M+p*w)*B,t[3]=(h*M-u*E-m*w)*B,t[4]=(l*L-a*P-c*b)*B,t[5]=(e*P-r*L+s*b)*B,t[6]=(d*S-g*E-p*_)*B,t[7]=(f*E-h*S+m*_)*B,t[8]=(a*C-o*L+c*y)*B,t[9]=(n*L-e*C-s*y)*B,t[10]=(g*M-v*S+p*x)*B,t[11]=(u*S-f*M-m*x)*B,t[12]=(o*b-a*A-l*y)*B,t[13]=(e*A-n*b+r*y)*B,t[14]=(v*_-g*w-d*x)*B,t[15]=(f*w-u*_+h*x)*B,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,f=a+a,u=o+o,h=s*c,m=s*f,g=s*u,v=a*f,d=a*u,p=o*u,x=l*c,_=l*f,S=l*u,w=n.x,M=n.y,E=n.z;return r[0]=(1-(v+p))*w,r[1]=(m+S)*w,r[2]=(g-_)*w,r[3]=0,r[4]=(m-S)*M,r[5]=(1-(h+p))*M,r[6]=(d+x)*M,r[7]=0,r[8]=(g+_)*E,r[9]=(d-x)*E,r[10]=(1-(h+v))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=gi.set(r[0],r[1],r[2]).length();const o=gi.set(r[4],r[5],r[6]).length(),l=gi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),tn.copy(this);const c=1/a,f=1/o,u=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=f,tn.elements[5]*=f,tn.elements[6]*=f,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=an,l=!1){const c=this.elements,f=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),m=(n+r)/(n-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===an)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===vr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=an,l=!1){const c=this.elements,f=2/(e-t),u=2/(n-r),h=-(e+t)/(e-t),m=-(n+r)/(n-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===an)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===vr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new H,tn=new Qt,Tf=new H(0,0,0),Af=new H(1,1,1),Bn=new H,Ir=new H,Ve=new H,Cl=new Qt,Rl=new $e;class ln{constructor(t=0,e=0,n=0,r=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cf=0;const Pl=new H,_i=new $e,Sn=new Qt,Lr=new H,Ki=new H,Rf=new H,Pf=new $e,Il=new H(1,0,0),Ll=new H(0,1,0),Dl=new H(0,0,1),Ul={type:"added"},If={type:"removed"},vi={type:"childadded",child:null},Ys={type:"childremoved",child:null};class de extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new H,e=new ln,n=new $e,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Yt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Ki,Lr,this.up):Sn.lookAt(Lr,Ki,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(Sn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),vi.child=t,this.dispatchEvent(vi),vi.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(If),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),u=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}de.DEFAULT_UP=new H(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dr extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const d=e.getJointPose(v,n),p=this._getHandJoint(c,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=Wo(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Js(a,s,t+1/3),this.g=Js(a,s,t),this.b=Js(a,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=Be){function n(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return te.workingToColorSpace(Pe.copy(this),t),Math.round(Zt(Pe.r*255,0,255))*65536+Math.round(Zt(Pe.g*255,0,255))*256+Math.round(Zt(Pe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Be){te.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Ur);const n=dr(kn.h,Ur.h,e),r=dr(kn.s,Ur.s,e),s=dr(kn.l,Ur.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Jt;Jt.NAMES=mh;class Is{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new Is(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new gh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Df extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const en=new H,bn=new H,$s=new H,wn=new H,xi=new H,yi=new H,Nl=new H,Ks=new H,Qs=new H,ta=new H,ea=new fe,na=new fe,ia=new fe;class sn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),en.subVectors(t,e),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){en.subVectors(r,e),bn.subVectors(n,e),$s.subVectors(t,e);const a=en.dot(en),o=en.dot(bn),l=en.dot($s),c=bn.dot(bn),f=bn.dot($s),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(c*l-o*f)*h,g=(a*f-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ea,s.x),a.addScaledVector(na,s.y),a.addScaledVector(ia,s.z),a}static isFrontFacing(t,e,n,r){return en.subVectors(n,e),bn.subVectors(t,e),en.cross(bn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),en.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,n),yi.subVectors(s,n),Ks.subVectors(t,n);const l=xi.dot(Ks),c=yi.dot(Ks);if(l<=0&&c<=0)return e.copy(n);Qs.subVectors(t,r);const f=xi.dot(Qs),u=yi.dot(Qs);if(f>=0&&u<=f)return e.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(xi,a);ta.subVectors(t,s);const m=xi.dot(ta),g=yi.dot(ta);if(g>=0&&m<=g)return e.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(yi,o);const d=f*g-m*u;if(d<=0&&u-f>=0&&m-g>=0)return Nl.subVectors(s,r),o=(u-f)/(u-f+(m-g)),e.copy(r).addScaledVector(Nl,o);const p=1/(d+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(xi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ke{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),Fr.subVectors(this.max,Qi),Mi.subVectors(t.a,Qi),Si.subVectors(t.b,Qi),bi.subVectors(t.c,Qi),zn.subVectors(Si,Mi),Vn.subVectors(bi,Si),Jn.subVectors(Mi,bi);let e=[0,-zn.z,zn.y,0,-Vn.z,Vn.y,0,-Jn.z,Jn.y,zn.z,0,-zn.x,Vn.z,0,-Vn.x,Jn.z,0,-Jn.x,-zn.y,zn.x,0,-Vn.y,Vn.x,0,-Jn.y,Jn.x,0];return!ra(e,Mi,Si,bi,Fr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Mi,Si,bi,Fr))?!1:(Or.crossVectors(zn,Vn),e=[Or.x,Or.y,Or.z],ra(e,Mi,Si,bi,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const En=[new H,new H,new H,new H,new H,new H,new H,new H],nn=new H,Nr=new Ke,Mi=new H,Si=new H,bi=new H,zn=new H,Vn=new H,Jn=new H,Qi=new H,Fr=new H,Or=new H,$n=new H;function ra(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){$n.fromArray(i,s);const o=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),f=n.dot($n);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const _e=new H,Br=new gt;let Uf=0;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=Ye,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yo&&(t.usage=this.usage),t}}class _h extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vh extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Nf=new Ke,tr=new H,sa=new H;class yn{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(sa)),this.expandByPoint(tr.copy(t.center).sub(sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ff=0;const je=new Qt,aa=new de,wi=new H,He=new Ke,er=new Ke,we=new H;class ve extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ku(t)?vh:_h)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(He.min,er.min),He.expandByPoint(we),we.addVectors(He.max,er.max),He.expandByPoint(we)):(He.expandByPoint(er.min),He.expandByPoint(er.max))}He.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)we.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),we.add(wi)),r=Math.max(r,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new H,l[y]=new H;const c=new H,f=new H,u=new H,h=new gt,m=new gt,g=new gt,v=new H,d=new H;function p(y,b,L){c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,b),u.fromBufferAttribute(n,L),h.fromBufferAttribute(s,y),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,L),f.sub(c),u.sub(c),m.sub(h),g.sub(h);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),d.copy(u).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(A),o[y].add(v),o[b].add(v),o[L].add(v),l[y].add(d),l[b].add(d),l[L].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,b=x.length;y<b;++y){const L=x[y],A=L.start,C=L.count;for(let P=A,D=A+C;P<D;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const _=new H,S=new H,w=new H,M=new H;function E(y){w.fromBufferAttribute(r,y),M.copy(w);const b=o[y];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),S.crossVectors(M,b);const A=S.dot(l[y])<0?-1:1;a.setXYZW(y,_.x,_.y,_.z,A)}for(let y=0,b=x.length;y<b;++y){const L=x[y],A=L.start,C=L.count;for(let P=A,D=A+C;P<D;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,f=new H,u=new H;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),v=t.getX(h+1),d=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,d),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,d),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let m=0,g=0;for(let v=0,d=l.length;v<d;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*f;for(let p=0;p<f;p++)h[g++]=c[m++]}return new Ee(h,f,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];f.push(m.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const s=t.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yo,this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new H;class xh{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ss("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ss("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Of=0;class qn extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Je(),this.name="",this.type="Material",this.blending=Ui,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Pa,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Tn=new H,oa=new H,kr=new H,Hn=new H,la=new H,zr=new H,ca=new H;class Wi{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){oa.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(oa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(kr),o=Hn.dot(this.direction),l=-Hn.dot(kr),c=Hn.lengthSq(),f=Math.abs(1-a*a);let u,h,m,g;if(f>0)if(u=a*l-o,h=a*o-l,g=s*f,u>=0)if(h>=-g)if(h<=g){const v=1/f;u*=v,h*=v,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oa).addScaledVector(kr,h),m}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,r,s){la.subVectors(e,t),zr.subVectors(n,t),ca.crossVectors(la,zr);let a=this.direction.dot(ca),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=o*this.direction.dot(zr.crossVectors(Hn,zr));if(l<0)return null;const c=o*this.direction.dot(la.cross(Hn));if(c<0||l+c>a)return null;const f=-o*Hn.dot(ca);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qo extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fl=new Qt,Kn=new Wi,Vr=new yn,Ol=new H,Hr=new H,Gr=new H,Wr=new H,ha=new H,Xr=new H,Bl=new H,jr=new H;class Fe extends de{constructor(t=new ve,e=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(ha.fromBufferAttribute(u,t),a?Xr.addScaledVector(ha,f):Xr.addScaledVector(ha.sub(e),f))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Kn.copy(t.ray).recast(t.near),!(Vr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Vr,Ol)===null||Kn.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Fl.copy(s).invert(),Kn.copy(t.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),_=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let S=x,w=_;S<w;S+=3){const M=o.getX(S),E=o.getX(S+1),y=o.getX(S+2);r=qr(this,p,t,n,c,f,u,M,E,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const x=o.getX(d),_=o.getX(d+1),S=o.getX(d+2);r=qr(this,a,t,n,c,f,u,x,_,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),_=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let S=x,w=_;S<w;S+=3){const M=S,E=S+1,y=S+2;r=qr(this,p,t,n,c,f,u,M,E,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=g,p=v;d<p;d+=3){const x=d,_=d+1,S=d+2;r=qr(this,a,t,n,c,f,u,x,_,S),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Bf(i,t,e,n,r,s,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Ln,o),l===null)return null;jr.copy(o),jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:i}}function qr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Hr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Wr);const f=Bf(i,t,e,n,Hr,Gr,Wr,Bl);if(f){const u=new H;sn.getBarycoord(Bl,Hr,Gr,Wr,u),r&&(f.uv=sn.getInterpolatedAttribute(r,o,l,c,u,new gt)),s&&(f.uv1=sn.getInterpolatedAttribute(s,o,l,c,u,new gt)),a&&(f.normal=sn.getInterpolatedAttribute(a,o,l,c,u,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};sn.getNormal(Hr,Gr,Wr,h.normal),f.face=h,f.barycoord=u}return f}const kl=new H,zl=new fe,Vl=new fe,kf=new H,Hl=new Qt,Yr=new H,ua=new yn,Gl=new Qt,fa=new Wi;class Mv extends Fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xl,this.bindMatrix=new Qt,this.bindMatrixInverse=new Qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ke),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(r),t.ray.intersectsSphere(ua)!==!1&&(Gl.copy(r).invert(),fa.copy(t.ray).applyMatrix4(Gl),!(this.boundingBox!==null&&fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,fa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new fe,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;zl.fromBufferAttribute(r.attributes.skinIndex,t),Vl.fromBufferAttribute(r.attributes.skinWeight,t),kl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Vl.getComponent(s);if(a!==0){const o=zl.getComponent(s);Hl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(kf.copy(kl).applyMatrix4(Hl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class zf extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yo extends ye{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Ae,f=Ae,u,h){super(null,a,o,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=new Qt,Vf=new Qt;class yh{constructor(t=[],e=[]){this.uuid=Je(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Vf;Wl.multiplyMatrices(o,e[s]),Wl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new yh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Yo(e,t,t,Ze,Ye);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=e[s];a===void 0&&(Vt("Skeleton: No bone found with UUID:",s),a=new zf),this.bones.push(a),this.boneInverses.push(new Qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const a=e[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}}class Xl extends Ee{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ei=new Qt,jl=new Qt,Zr=[],ql=new Ke,Hf=new Qt,nr=new Fe,ir=new yn;class Sv extends Fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xl(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Hf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),ql.copy(t.boundingBox).applyMatrix4(Ei),this.boundingBox.union(ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),ir.copy(t.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ei),jl.multiplyMatrices(n,Ei),nr.matrixWorld=jl,nr.raycast(t,Zr);for(let a=0,o=Zr.length;a<o;a++){const l=Zr[a];l.instanceId=s,l.object=this,e.push(l)}Zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yo(new Float32Array(r*this.count),r,this.count,Fo,Ye));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const da=new H,Gf=new H,Wf=new Yt;class Wn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=da.subVectors(n,e).cross(Gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(da),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wf.getNormalMatrix(t),r=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new yn,Xf=new gt(.5,.5),Jr=new H;class Ls{constructor(t=new Wn,e=new Wn,n=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],m=s[7],g=s[8],v=s[9],d=s[10],p=s[11],x=s[12],_=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-a,m-f,p-g,w-x).normalize(),r[1].setComponents(c+a,m+f,p+g,w+x).normalize(),r[2].setComponents(c+o,m+u,p+v,w+_).normalize(),r[3].setComponents(c-o,m-u,p-v,w-_).normalize(),n)r[4].setComponents(l,h,d,S).normalize(),r[5].setComponents(c-l,m-h,p-d,w-S).normalize();else if(r[4].setComponents(c-l,m-h,p-d,w-S).normalize(),e===an)r[5].setComponents(c+l,m+h,p+d,w+S).normalize();else if(e===vr)r[5].setComponents(l,h,d,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){Qn.center.set(0,0,0);const e=Xf.distanceTo(t.center);return Qn.radius=.7071067811865476+e,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Jr.x=r.normal.x>0?t.max.x:t.min.x,Jr.y=r.normal.y>0?t.max.y:t.min.y,Jr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ws=new H,Es=new H,Yl=new Qt,rr=new Wi,$r=new yn,pa=new H,Zl=new H;class Ts extends de{constructor(t=new ve,e=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ws.fromBufferAttribute(e,r-1),Es.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ws.distanceTo(Es);t.setAttribute("lineDistance",new oe(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),$r.radius+=s,t.ray.intersectsSphere($r)===!1)return;Yl.copy(r).invert(),rr.copy(t.ray).applyMatrix4(Yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=m,d=g-1;v<d;v+=c){const p=f.getX(v),x=f.getX(v+1),_=Kr(this,t,rr,l,p,x,v);_&&e.push(_)}if(this.isLineLoop){const v=f.getX(g-1),d=f.getX(m),p=Kr(this,t,rr,l,v,d,g-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,d=g-1;v<d;v+=c){const p=Kr(this,t,rr,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Kr(this,t,rr,l,g-1,m,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kr(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(ws.fromBufferAttribute(o,r),Es.fromBufferAttribute(o,s),e.distanceSqToSegment(ws,Es,pa,Zl)>n)return;pa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(pa);if(!(c<t.near||c>t.far))return{distance:c,point:Zl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Jl=new H,$l=new H;class jf extends Ts{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Jl.fromBufferAttribute(e,r),$l.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Jl.distanceTo($l);t.setAttribute("lineDistance",new oe(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bv extends Ts{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class qf extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kl=new Qt,Mo=new Wi,Qr=new yn,ts=new H;class wv extends de{constructor(t=new ve,e=new qf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,t.ray.intersectsSphere(Qr)===!1)return;Kl.copy(r).invert(),Mo.copy(t.ray).applyMatrix4(Kl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,v=m;g<v;g++){const d=c.getX(g);ts.fromBufferAttribute(u,d),Ql(ts,d,l,r,t,e,this)}}else{const h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=h,v=m;g<v;g++)ts.fromBufferAttribute(u,g),Ql(ts,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ql(i,t,e,n,r,s,a){const o=Mo.distanceSqToPoint(i);if(o<e){const l=new H;Mo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ev extends ye{constructor(t,e,n,r,s,a,o,l,c,f,u,h){super(null,a,o,l,c,f,r,s,u,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Jo extends ye{constructor(t=[],e=hi,n,r,s,a,o,l,c,f){super(t,e,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yr extends ye{constructor(t,e,n=_n,r,s,a,o=Ae,l=Ae,c,f=Un,u=1){if(f!==Un&&f!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yf extends yr{constructor(t,e=_n,n=hi,r,s,a=Ae,o=Ae,l,c=Un){const f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mh extends ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wr extends ve{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(u,2));function g(v,d,p,x,_,S,w,M,E,y,b){const L=S/E,A=w/y,C=S/2,P=w/2,D=M/2,B=E+1,z=y+1;let O=0,N=0;const F=new H;for(let k=0;k<z;k++){const V=k*A-P;for(let q=0;q<B;q++){const ot=q*L-C;F[v]=ot*x,F[d]=V*_,F[p]=D,c.push(F.x,F.y,F.z),F[v]=0,F[d]=0,F[p]=M>0?1:-1,f.push(F.x,F.y,F.z),u.push(q/E),u.push(1-k/y),O+=1}}for(let k=0;k<y;k++)for(let V=0;V<E;V++){const q=h+V+B*k,ot=h+V+B*(k+1),ht=h+(V+1)+B*(k+1),ut=h+(V+1)+B*k;l.push(q,ot,ut),l.push(ot,ht,ut),N+=6}o.addGroup(m,N,b),m+=N,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Sh extends ve{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],m=[];let g=0;const v=[],d=n/2;let p=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(m,2));function x(){const S=new H,w=new H;let M=0;const E=(e-t)/n;for(let y=0;y<=s;y++){const b=[],L=y/s,A=L*(e-t)+t;for(let C=0;C<=r;C++){const P=C/r,D=P*l+o,B=Math.sin(D),z=Math.cos(D);w.x=A*B,w.y=-L*n+d,w.z=A*z,u.push(w.x,w.y,w.z),S.set(B,E,z).normalize(),h.push(S.x,S.y,S.z),m.push(P,1-L),b.push(g++)}v.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const L=v[b][y],A=v[b+1][y],C=v[b+1][y+1],P=v[b][y+1];(t>0||b!==0)&&(f.push(L,A,P),M+=3),(e>0||b!==s-1)&&(f.push(A,C,P),M+=3)}c.addGroup(p,M,0),p+=M}function _(S){const w=g,M=new gt,E=new H;let y=0;const b=S===!0?t:e,L=S===!0?1:-1;for(let C=1;C<=r;C++)u.push(0,d*L,0),h.push(0,L,0),m.push(.5,.5),g++;const A=g;for(let C=0;C<=r;C++){const D=C/r*l+o,B=Math.cos(D),z=Math.sin(D);E.x=b*z,E.y=d*L,E.z=b*B,u.push(E.x,E.y,E.z),h.push(0,L,0),M.x=B*.5+.5,M.y=z*.5*L+.5,m.push(M.x,M.y),g++}for(let C=0;C<r;C++){const P=w+C,D=A+C;S===!0?f.push(D,D+1,P):f.push(D+1,D,P),y+=3}c.addGroup(p,y,S===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $o extends ve{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),f(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new H,S=new H,w=new H;for(let M=0;M<e.length;M+=3)m(e[M+0],_),m(e[M+1],S),m(e[M+2],w),l(_,S,w,x)}function l(x,_,S,w){const M=w+1,E=[];for(let y=0;y<=M;y++){E[y]=[];const b=x.clone().lerp(S,y/M),L=_.clone().lerp(S,y/M),A=M-y;for(let C=0;C<=A;C++)C===0&&y===M?E[y][C]=b:E[y][C]=b.clone().lerp(L,C/A)}for(let y=0;y<M;y++)for(let b=0;b<2*(M-y)-1;b++){const L=Math.floor(b/2);b%2===0?(h(E[y][L+1]),h(E[y+1][L]),h(E[y][L])):(h(E[y][L+1]),h(E[y+1][L+1]),h(E[y+1][L]))}}function c(x){const _=new H;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(x),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function f(){const x=new H;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const S=d(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(S,1-w)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const _=a[x+0],S=a[x+2],w=a[x+4],M=Math.max(_,S,w),E=Math.min(_,S,w);M>.9&&E<.1&&(_<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function m(x,_){const S=x*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const x=new H,_=new H,S=new H,w=new H,M=new gt,E=new gt,y=new gt;for(let b=0,L=0;b<s.length;b+=9,L+=6){x.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),M.set(a[L+0],a[L+1]),E.set(a[L+2],a[L+3]),y.set(a[L+4],a[L+5]),w.copy(x).add(_).add(S).divideScalar(3);const A=d(w);v(M,L+0,x,A),v(E,L+2,_,A),v(y,L+4,S,A)}}function v(x,_,S,w){w<0&&x.x===1&&(a[_]=x.x-1),S.x===0&&S.z===0&&(a[_]=w/2/Math.PI+.5)}function d(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.vertices,t.indices,t.radius,t.detail)}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const f=n[r],h=n[r+1]-f,m=(a-f)/h;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new gt:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new H,r=[],s=[],a=[],o=new H,l=new Qt;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new H)}s[0]=new H,a[0]=new H;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Zt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Zt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ko extends Mn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*f-m*u+this.aX,c=h*u+m*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zf extends Ko{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Qo(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,u){let h=(a-s)/c-(o-s)/(c+f)+(o-a)/f,m=(o-a)/f-(l-a)/(f+u)+(l-o)/u;h*=f,m*=f,r(a,o,h,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const es=new H,ma=new Qo,ga=new Qo,_a=new Qo;class Jf extends Mn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new H){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(es.subVectors(r[0],r[1]).add(r[0]),c=es);const u=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(es.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=es),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(f),m);v<1e-4&&(v=1),g<1e-4&&(g=v),d<1e-4&&(d=v),ma.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,g,v,d),ga.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,g,v,d),_a.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,g,v,d)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),ga.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),_a.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return n.set(ma.calc(l),ga.calc(l),_a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new H().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function $f(i,t){const e=1-i;return e*e*t}function Kf(i,t){return 2*(1-i)*i*t}function Qf(i,t){return i*i*t}function pr(i,t,e,n){return $f(i,t)+Kf(i,e)+Qf(i,n)}function td(i,t){const e=1-i;return e*e*e*t}function ed(i,t){const e=1-i;return 3*e*e*i*t}function nd(i,t){return 3*(1-i)*i*i*t}function id(i,t){return i*i*i*t}function mr(i,t,e,n,r){return td(i,t)+ed(i,e)+nd(i,n)+id(i,r)}class bh extends Mn{constructor(t=new gt,e=new gt,n=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,r.x,s.x,a.x,o.x),mr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rd extends Mn{constructor(t=new H,e=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new H){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,r.x,s.x,a.x,o.x),mr(t,r.y,s.y,a.y,o.y),mr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wh extends Mn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sd extends Mn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends Mn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(pr(t,r.x,s.x,a.x),pr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ad extends Mn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(pr(t,r.x,s.x,a.x),pr(t,r.y,s.y,a.y),pr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(tc(o,l.x,c.x,f.x,u.x),tc(o,l.y,c.y,f.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var So=Object.freeze({__proto__:null,ArcCurve:Zf,CatmullRomCurve3:Jf,CubicBezierCurve:bh,CubicBezierCurve3:rd,EllipseCurve:Ko,LineCurve:wh,LineCurve3:sd,QuadraticBezierCurve:Eh,QuadraticBezierCurve3:ad,SplineCurve:Th});class od extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new So[r.type]().fromJSON(r))}return this}}class ec extends od{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wh(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Eh(this.currentPoint.clone(),new gt(t,e),new gt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new bh(this.currentPoint.clone(),new gt(t,e),new gt(n,r),new gt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Th(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new Ko(t,e,n,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ld extends ec{constructor(t){super(t),this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new ec().fromJSON(r))}return this}}function cd(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Ah(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=pd(i,t,s,e)),i.length>80*e){o=i[0],l=i[1];let f=o,u=l;for(let h=e;h<r;h+=e){const m=i[h],g=i[h+1];m<o&&(o=m),g<l&&(l=g),m>f&&(f=m),g>u&&(u=g)}c=Math.max(f-o,u-l),c=c!==0?32767/c:0}return Mr(s,a,e,o,l,c,0),a}function Ah(i,t,e,n,r){let s;if(r===Ed(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=nc(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=nc(a/n|0,i[a],i[a+1],s);return s&&Vi(s,s.next)&&(br(s),s=s.next),s}function ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vi(e,e.next)||pe(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&xd(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?ud(i,n,r,s):hd(i)){t.push(l.i,i.i,c.i),br(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=fd(ui(i),t),Mr(i,t,e,n,r,s,2)):a===2&&dd(i,t,e,n,r,s):Mr(ui(i),t,e,n,r,s,1);break}}}function hd(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,f=Math.min(r,s,a),u=Math.min(o,l,c),h=Math.max(r,s,a),m=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=m&&cr(r,o,s,l,a,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ud(i,t,e,n){const r=i.prev,s=i,a=i.next;if(pe(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,f=r.y,u=s.y,h=a.y,m=Math.min(o,l,c),g=Math.min(f,u,h),v=Math.max(o,l,c),d=Math.max(f,u,h),p=bo(m,g,t,e,n),x=bo(v,d,t,e,n);let _=i.prevZ,S=i.nextZ;for(;_&&_.z>=p&&S&&S.z<=x;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=d&&_!==r&&_!==a&&cr(o,f,l,u,c,h,_.x,_.y)&&pe(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=d&&S!==r&&S!==a&&cr(o,f,l,u,c,h,S.x,S.y)&&pe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=d&&_!==r&&_!==a&&cr(o,f,l,u,c,h,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=x;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=d&&S!==r&&S!==a&&cr(o,f,l,u,c,h,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function fd(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Vi(n,r)&&Rh(n,e,e.next,r)&&Sr(n,r)&&Sr(r,n)&&(t.push(n.i,e.i,r.i),br(e),br(e.next),e=i=r),e=e.next}while(e!==i);return ui(e)}function dd(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sd(a,o)){let l=Ph(a,o);a=ui(a,a.next),l=ui(l,l.next),Mr(a,t,e,n,r,s,0),Mr(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function pd(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=Ah(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Md(c))}r.sort(md);for(let s=0;s<r.length;s++)e=gd(r[s],e);return e}function md(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function gd(i,t){const e=_d(i,t);if(!e)return t;const n=Ph(e,i);return ui(n,n.next),ui(e,e.next)}function _d(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(Vi(i,e))return e;do{if(Vi(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let f=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ch(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const u=Math.abs(r-e.y)/(n-e.x);Sr(e,i)&&(u<f||u===f&&(e.x>a.x||e.x===a.x&&vd(a,e)))&&(a=e,f=u)}e=e.next}while(e!==o);return a}function vd(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function xd(i,t,e,n){let r=i;do r.z===0&&(r.z=bo(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,yd(r)}function yd(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function bo(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Md(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ch(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function cr(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&Ch(i,t,e,n,r,s,a,o)}function Sd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bd(i,t)&&(Sr(i,t)&&Sr(t,i)&&wd(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Vi(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vi(i,t){return i.x===t.x&&i.y===t.y}function Rh(i,t,e,n){const r=is(pe(i,t,e)),s=is(pe(i,t,n)),a=is(pe(e,n,i)),o=is(pe(e,n,t));return!!(r!==s&&a!==o||r===0&&ns(i,e,t)||s===0&&ns(i,n,t)||a===0&&ns(e,i,n)||o===0&&ns(e,t,n))}function ns(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function is(i){return i>0?1:i<0?-1:0}function bd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function wd(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ph(i,t){const e=wo(i.i,i.x,i.y),n=wo(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function nc(i,t,e,n){const r=wo(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ed(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Td{static triangulate(t,e,n=2){return cd(t,e,n)}}class Di{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Di.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];ic(t),rc(n,t);let a=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,rc(n,e[l]);const o=Td.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ic(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ih extends ve{constructor(t=new ld([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Ad;let _,S=!1,w,M,E,y;if(p){_=p.getSpacedPoints(f),S=!0,h=!1;const et=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(f,et),M=new H,E=new H,y=new H}h||(d=0,m=0,g=0,v=0);const b=o.extractPoints(c);let L=b.shape;const A=b.holes;if(!Di.isClockWise(L)){L=L.reverse();for(let et=0,rt=A.length;et<rt;et++){const Z=A[et];Di.isClockWise(Z)&&(A[et]=Z.reverse())}}function P(et){const Z=10000000000000001e-36;let ct=et[0];for(let U=1;U<=et.length;U++){const Pt=U%et.length,yt=et[Pt],St=yt.x-ct.x,_t=yt.y-ct.y,I=St*St+_t*_t,T=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(ct.x),Math.abs(ct.y)),W=Z*T*T;if(I<=W){et.splice(Pt,1),U--;continue}ct=yt}}P(L),A.forEach(P);const D=A.length,B=L;for(let et=0;et<D;et++){const rt=A[et];L=L.concat(rt)}function z(et,rt,Z){return rt||Wt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(rt,Z)}const O=L.length;function N(et,rt,Z){let ct,U,Pt;const yt=et.x-rt.x,St=et.y-rt.y,_t=Z.x-et.x,I=Z.y-et.y,T=yt*yt+St*St,W=yt*I-St*_t;if(Math.abs(W)>Number.EPSILON){const j=Math.sqrt(T),it=Math.sqrt(_t*_t+I*I),$=rt.x-St/j,Et=rt.y+yt/j,dt=Z.x-I/it,At=Z.y+_t/it,Tt=((dt-$)*I-(At-Et)*_t)/(yt*I-St*_t);ct=$+yt*Tt-et.x,U=Et+St*Tt-et.y;const at=ct*ct+U*U;if(at<=2)return new gt(ct,U);Pt=Math.sqrt(at/2)}else{let j=!1;yt>Number.EPSILON?_t>Number.EPSILON&&(j=!0):yt<-Number.EPSILON?_t<-Number.EPSILON&&(j=!0):Math.sign(St)===Math.sign(I)&&(j=!0),j?(ct=-St,U=yt,Pt=Math.sqrt(T)):(ct=yt,U=St,Pt=Math.sqrt(T/2))}return new gt(ct/Pt,U/Pt)}const F=[];for(let et=0,rt=B.length,Z=rt-1,ct=et+1;et<rt;et++,Z++,ct++)Z===rt&&(Z=0),ct===rt&&(ct=0),F[et]=N(B[et],B[Z],B[ct]);const k=[];let V,q=F.concat();for(let et=0,rt=D;et<rt;et++){const Z=A[et];V=[];for(let ct=0,U=Z.length,Pt=U-1,yt=ct+1;ct<U;ct++,Pt++,yt++)Pt===U&&(Pt=0),yt===U&&(yt=0),V[ct]=N(Z[ct],Z[Pt],Z[yt]);k.push(V),q=q.concat(V)}let ot;if(d===0)ot=Di.triangulateShape(B,A);else{const et=[],rt=[];for(let Z=0;Z<d;Z++){const ct=Z/d,U=m*Math.cos(ct*Math.PI/2),Pt=g*Math.sin(ct*Math.PI/2)+v;for(let yt=0,St=B.length;yt<St;yt++){const _t=z(B[yt],F[yt],Pt);xt(_t.x,_t.y,-U),ct===0&&et.push(_t)}for(let yt=0,St=D;yt<St;yt++){const _t=A[yt];V=k[yt];const I=[];for(let T=0,W=_t.length;T<W;T++){const j=z(_t[T],V[T],Pt);xt(j.x,j.y,-U),ct===0&&I.push(j)}ct===0&&rt.push(I)}}ot=Di.triangulateShape(et,rt)}const ht=ot.length,ut=g+v;for(let et=0;et<O;et++){const rt=h?z(L[et],q[et],ut):L[et];S?(E.copy(w.normals[0]).multiplyScalar(rt.x),M.copy(w.binormals[0]).multiplyScalar(rt.y),y.copy(_[0]).add(E).add(M),xt(y.x,y.y,y.z)):xt(rt.x,rt.y,0)}for(let et=1;et<=f;et++)for(let rt=0;rt<O;rt++){const Z=h?z(L[rt],q[rt],ut):L[rt];S?(E.copy(w.normals[et]).multiplyScalar(Z.x),M.copy(w.binormals[et]).multiplyScalar(Z.y),y.copy(_[et]).add(E).add(M),xt(y.x,y.y,y.z)):xt(Z.x,Z.y,u/f*et)}for(let et=d-1;et>=0;et--){const rt=et/d,Z=m*Math.cos(rt*Math.PI/2),ct=g*Math.sin(rt*Math.PI/2)+v;for(let U=0,Pt=B.length;U<Pt;U++){const yt=z(B[U],F[U],ct);xt(yt.x,yt.y,u+Z)}for(let U=0,Pt=A.length;U<Pt;U++){const yt=A[U];V=k[U];for(let St=0,_t=yt.length;St<_t;St++){const I=z(yt[St],V[St],ct);S?xt(I.x,I.y+_[f-1].y,_[f-1].x+Z):xt(I.x,I.y,u+Z)}}}G(),J();function G(){const et=r.length/3;if(h){let rt=0,Z=O*rt;for(let ct=0;ct<ht;ct++){const U=ot[ct];ft(U[2]+Z,U[1]+Z,U[0]+Z)}rt=f+d*2,Z=O*rt;for(let ct=0;ct<ht;ct++){const U=ot[ct];ft(U[0]+Z,U[1]+Z,U[2]+Z)}}else{for(let rt=0;rt<ht;rt++){const Z=ot[rt];ft(Z[2],Z[1],Z[0])}for(let rt=0;rt<ht;rt++){const Z=ot[rt];ft(Z[0]+O*f,Z[1]+O*f,Z[2]+O*f)}}n.addGroup(et,r.length/3-et,0)}function J(){const et=r.length/3;let rt=0;nt(B,rt),rt+=B.length;for(let Z=0,ct=A.length;Z<ct;Z++){const U=A[Z];nt(U,rt),rt+=U.length}n.addGroup(et,r.length/3-et,1)}function nt(et,rt){let Z=et.length;for(;--Z>=0;){const ct=Z;let U=Z-1;U<0&&(U=et.length-1);for(let Pt=0,yt=f+d*2;Pt<yt;Pt++){const St=O*Pt,_t=O*(Pt+1),I=rt+ct+St,T=rt+U+St,W=rt+U+_t,j=rt+ct+_t;bt(I,T,W,j)}}}function xt(et,rt,Z){l.push(et),l.push(rt),l.push(Z)}function ft(et,rt,Z){Ut(et),Ut(rt),Ut(Z);const ct=r.length/3,U=x.generateTopUV(n,r,ct-3,ct-2,ct-1);vt(U[0]),vt(U[1]),vt(U[2])}function bt(et,rt,Z,ct){Ut(et),Ut(rt),Ut(ct),Ut(rt),Ut(Z),Ut(ct);const U=r.length/3,Pt=x.generateSideWallUV(n,r,U-6,U-3,U-2,U-1);vt(Pt[0]),vt(Pt[1]),vt(Pt[3]),vt(Pt[1]),vt(Pt[2]),vt(Pt[3])}function Ut(et){r.push(l[et*3+0]),r.push(l[et*3+1]),r.push(l[et*3+2])}function vt(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cd(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new So[r.type]().fromJSON(r)),new Ih(n,t.options)}}const Ad={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],f=t[r*3+1];return[new gt(s,a),new gt(o,l),new gt(c,f)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],u=t[n*3+2],h=t[r*3],m=t[r*3+1],g=t[r*3+2],v=t[s*3],d=t[s*3+1],p=t[s*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-u),new gt(h,1-g),new gt(v,1-p)]:[new gt(o,1-l),new gt(f,1-u),new gt(m,1-g),new gt(d,1-p)]}};function Cd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Lh extends $o{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lh(t.radius,t.detail)}}class Er extends ve{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,u=t/o,h=e/l,m=[],g=[],v=[],d=[];for(let p=0;p<f;p++){const x=p*h-a;for(let _=0;_<c;_++){const S=_*u-s;g.push(S,-x,0),v.push(0,0,1),d.push(_/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const _=x+c*p,S=x+c*(p+1),w=x+1+c*(p+1),M=x+1+c*p;m.push(_,S,M),m.push(S,w,M)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.width,t.height,t.widthSegments,t.heightSegments)}}class tl extends ve{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],u=new H,h=new H,m=[],g=[],v=[],d=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let w=0;w<=e;w++){const M=w/e;u.x=-t*Math.cos(r+M*s)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(r+M*s)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),d.push(M+S,1-_),x.push(c++)}f.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=f[p][x+1],S=f[p][x],w=f[p+1][x],M=f[p+1][x+1];(p!==0||a>0)&&m.push(_,S,M),(p!==n-1||l<Math.PI)&&m.push(S,w,M)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dh extends ve{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],f=[],u=[],h=new H,m=new H,g=new H;for(let v=0;v<=n;v++){const d=a+v/n*o;for(let p=0;p<=r;p++){const x=p/r*s;m.x=(t+e*Math.cos(d))*Math.cos(x),m.y=(t+e*Math.cos(d))*Math.sin(x),m.z=e*Math.sin(d),c.push(m.x,m.y,m.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),g.subVectors(m,h).normalize(),f.push(g.x,g.y,g.z),u.push(p/r),u.push(v/n)}}for(let v=1;v<=n;v++)for(let d=1;d<=r;d++){const p=(r+1)*v+d-1,x=(r+1)*(v-1)+d-1,_=(r+1)*(v-1)+d,S=(r+1)*v+d;l.push(p,x,S),l.push(x,_,S)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const r in n)t[r]=n[r]}return t}function Rd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Pd={clone:Hi,merge:Ue};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dd extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nh extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tv extends Nh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ud extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nd extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fd extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Od(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function sc(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)r[a++]=i[o+l]}return r}function Fh(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=i[r++];while(s!==void 0)}class Tr{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=e[++n],t<r)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bd extends Tr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ii,endingEnd:Ii}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,a=t+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Li:s=t,o=2*e-n;break;case ys:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Li:a=t,l=2*n-e;break;case ys:a=1,l=n+r[1]-r[0];break;default:a=t-1,l=e}const c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),v=g*g,d=v*g,p=-h*d+2*h*v-h*g,x=(1+h)*d+(-1.5-2*h)*v+(-.5+h)*g+1,_=(-1-m)*d+(1.5+m)*v+.5*g,S=m*d-m*v;for(let w=0;w!==o;++w)s[w]=p*a[f+w]+x*a[c+w]+_*a[l+w]+S*a[u+w];return s}}class Oh extends Tr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(n-e)/(r-e),u=1-f;for(let h=0;h!==o;++h)s[h]=a[c+h]*u+a[l+h]*f;return s}}class kd extends Tr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class zd extends Tr{interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.settings||this.DefaultSettings_,u=f.inTangents,h=f.outTangents;if(!u||!h){const v=(n-e)/(r-e),d=1-v;for(let p=0;p!==o;++p)s[p]=a[c+p]*d+a[l+p]*v;return s}const m=o*2,g=t-1;for(let v=0;v!==o;++v){const d=a[c+v],p=a[l+v],x=g*m+v*2,_=h[x],S=h[x+1],w=t*m+v*2,M=u[w],E=u[w+1];let y=(n-e)/(r-e),b,L,A,C,P;for(let D=0;D<8;D++){b=y*y,L=b*y,A=1-y,C=A*A,P=C*A;const z=P*e+3*C*y*_+3*A*b*M+L*r-n;if(Math.abs(z)<1e-10)break;const O=3*C*(_-e)+6*A*y*(M-_)+3*b*(r-M);if(Math.abs(O)<1e-10)break;y=y-z/O,y=Math.max(0,Math.min(1,y))}s[v]=P*d+3*C*y*S+3*A*b*E+L*p}return s}}class cn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new zd(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case xs:e=this.InterpolantFactoryMethodDiscrete;break;case xo:e=this.InterpolantFactoryMethodLinear;break;case Gs:e=this.InterpolantFactoryMethodSmooth;break;case yl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return Gs;case this.InterpolantFactoryMethodBezier:return yl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(r!==void 0&&Qu(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Gs,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(r)l=!0;else{const u=o*n,h=u-n,m=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[h+g]||v!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,h=a*n;for(let m=0;m!==n;++m)e[h+m]=e[u+m]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=xo;class Xi extends cn{constructor(t,e,n){super(t,e,n)}}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=xs;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Bh extends cn{constructor(t,e,n,r){super(t,e,n,r)}}Bh.prototype.ValueTypeName="color";class As extends cn{constructor(t,e,n,r){super(t,e,n,r)}}As.prototype.ValueTypeName="number";class Vd extends Tr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(r-e);let c=t*o;for(let f=c+o;c!==f;c+=4)$e.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Ds extends cn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Vd(this.times,this.values,this.getValueSize(),t)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends cn{constructor(t,e,n){super(t,e,n)}}ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=xs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends cn{constructor(t,e,n,r){super(t,e,n,r)}}Cs.prototype.ValueTypeName="vector";class ac{constructor(t="",e=-1,n=[],r=zo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=Je(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Gd(n[a]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=n.length;s!==a;++s)e.push(cn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const f=Od(l);l=sc(l,1,f),c=sc(c,1,f),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new As(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],f=c.name.match(s);if(f&&f.length>1){const u=f[1];let h=r[u];h||(r[u]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],e,n));return a}static parseAnimation(t,e){if(Vt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Wt("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,m,g,v){if(m.length!==0){const d=[],p=[];Fh(m,d,p,g),d.length!==0&&v.push(new u(h,d,p))}},r=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)m[h[g].morphTargets[v]]=-1;for(const v in m){const d=[],p=[];for(let x=0;x!==h[g].morphTargets.length;++x){const _=h[g];d.push(_.time),p.push(_.morphTarget===v?1:0)}r.push(new As(".morphTargetInfluence["+v+"]",d,p))}l=m.length*a}else{const m=".bones["+e[u].name+"]";n(Cs,m+".position",h,"pos",r),n(Ds,m+".quaternion",h,"rot",r),n(Cs,m+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Hd(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return Bh;case"quaternion":return Ds;case"bool":case"boolean":return Xi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gd(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Hd(i.type);if(i.times===void 0){const e=[],n=[];Fh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const on={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(oc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!oc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function oc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class kh{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wd=new kh;class qi{constructor(t){this.manager=t!==void 0?t:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Xd extends Error{constructor(t,e){super(t),this.response=e}}class jd extends qi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=on.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:n,onError:r});return}An[t]=[],An[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Vt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=An[t],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let v=0;const d=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:S})=>{if(_)p.close();else{v+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let M=0,E=f.length;M<E;M++){const y=f[M];y.onProgress&&y.onProgress(w)}p.enqueue(S),x()}},_=>{p.error(_)})}}});return new Response(d)}else throw new Xd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{on.add(`file:${t}`,c);const f=An[t];delete An[t];for(let u=0,h=f.length;u<h;u++){const m=f[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const f=An[t];if(f===void 0)throw this.manager.itemError(t),c;delete An[t];for(let u=0,h=f.length;u<h;u++){const m=f[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ti=new WeakMap;class Ar extends qi{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=on.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=Ti.get(a);u===void 0&&(u=[],Ti.set(a,u)),u.push({onLoad:e,onError:r})}return a}const o=xr("img");function l(){f(),e&&e(this);const u=Ti.get(this)||[];for(let h=0;h<u.length;h++){const m=u[h];m.onLoad&&m.onLoad(this)}Ti.delete(this),s.manager.itemEnd(t)}function c(u){f(),r&&r(u),on.remove(`image:${t}`);const h=Ti.get(this)||[];for(let m=0;m<h.length;m++){const g=h[m];g.onError&&g.onError(u)}Ti.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),on.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Av extends qi{constructor(t){super(t)}load(t,e,n,r){const s=new Jo;s.colorSpace=Be;const a=new Ar(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(f){s.images[c]=f,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,r)}for(let c=0;c<t.length;++c)l(c);return s}}class Cv extends qi{constructor(t){super(t)}load(t,e,n,r){const s=new ye,a=new Ar(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Us extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const va=new Qt,lc=new H,cc=new H;class el{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Ge,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===vr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ss=new H,as=new $e,un=new H;class zh extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ss,as,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,as,un.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ss,as,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,as,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new H,hc=new gt,uc=new gt;class Ne extends zh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class qd extends el{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=zi*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Rv extends Us{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new qd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Yd extends el{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}}class Pv extends Us{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Yd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ns extends zh{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zd extends el{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new Zd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class $d extends Us{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Iv{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const xa=new WeakMap;class Lv extends qi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Vt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Vt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=on.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{if(xa.has(a)===!0)r&&r(xa.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return on.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){r&&r(c),xa.set(l,c),on.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});on.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ai=-90,Ci=1;class Kd extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ne(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const s=new Ne(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const a=new Ne(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const o=new Ne(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const l=new Ne(Ai,Ci,t,e);l.layers=this.layers,this.add(l);const c=new Ne(Ai,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qd extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class tp{constructor(t,e,n){this.binding=t,this.valueSize=n;let r,s,a;switch(e){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,r=this.valueSize,s=t*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,r,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,r=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,r,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,r);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,r=n*this._origIndex;t.getValue(e,r);for(let s=n,a=r;s!==a;++s)e[s]=e[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,r){$e.slerpFlat(t,e,t,e,t,n,r)}_slerpAdditive(t,e,n,r,s){const a=this._workIndex*s;$e.multiplyQuaternionsFlat(t,a,t,e,t,n),$e.slerpFlat(t,e,t,e,t,a,r)}_lerp(t,e,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*r}}_lerpAdditive(t,e,n,r,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[n+a]*r}}}const nl="\\[\\]\\.:\\/",ep=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",np="[^"+nl.replace("\\.","")+"]",ip=/((?:WC+[\/:])*)/.source.replace("WC",il),rp=/(WCOD+)?/.source.replace("WCOD",np),sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),op=new RegExp("^"+ip+rp+sp+ap+"$"),lp=["material","materials","bones","map"];class cp{constructor(t,e,n){const r=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ep,"")}static parseTrackName(t){const e=op.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);lp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let s=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[r];if(a===void 0){const c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=cp;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hp{constructor(t,e,n=null,r=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=r;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:Ii,endingEnd:Ii};for(let c=0;c!==a;++c){const f=s[c].createInterpolant(null);o[c]=f,f.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const r=this._clip.duration,s=t._clip.duration,a=s/r,o=r/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,r){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gu:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(a),c[f].accumulateAdditive(o);break;case zo:default:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(a),c[f].accumulate(r,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let r=this.time+t,s=this._loopCount;const a=n===Hu;if(t===0)return s===-1?r:a&&(s&1)===1?e-r:r;if(n===zu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=e)r=e;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=e||r<0){const o=Math.floor(r/e);r-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?e:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return e-r}return r}_setEndings(t,e,n){const r=this._interpolantSettings;n?(r.endingStart=Li,r.endingEnd=Li):(t?r.endingStart=this.zeroSlopeAtStart?Li:Ii:r.endingStart=ys,e?r.endingEnd=this.zeroSlopeAtEnd?Li:Ii:r.endingEnd=ys)}_scheduleFading(t,e,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=n,this}}const up=new Float32Array(1);class Dv extends Nn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,r=t._clip.tracks,s=r.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let f=c[l];f===void 0&&(f={},c[l]=f);for(let u=0;u!==s;++u){const h=r[u],m=h.name;let g=f[m];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}const v=e&&e._propertyBindings[u].binding.parsedPath;g=new tp(ae.create(n,m,v),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,r=t._clip.uuid,s=this._actionsByClip[r];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,r,n)}const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const r=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=r.length,r.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],r=t._cacheIndex;n._cacheIndex=r,e[r]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],f=t._byClipCacheIndex;c._byClipCacheIndex=f,l[f]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete u[h],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,r=this._nActiveActions++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,r=--this._nActiveActions,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[e];a===void 0&&(a={},r[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,r=this._nActiveBindings++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,r=--this._nActiveBindings,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Oh(new Float32Array(2),new Float32Array(2),1,up),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,r=--this._nActiveControlInterpolants,s=e[r];t.__cacheIndex=r,e[r]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const r=e||this._root,s=r.uuid;let a=typeof t=="string"?ac.findByName(r,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=zo),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const f=new hp(this,a,e,n);return this._bindAction(f,c),this._addInactiveAction(f,o,s),f}existingAction(t,e){const n=e||this._root,r=n.uuid,s=typeof t=="string"?ac.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,r=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(r,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const f=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=f,e[f]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const fc=new Qt;class Vh{constructor(t,e,n=0,r=1/0){this.ray=new Wi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(t,e=!0,n=[]){return Eo(t,this,n,e),n.sort(dc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Eo(t[r],this,n,e);return n.sort(dc),n}}function dc(i,t){return i.distance-t.distance}function Eo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Eo(s[a],t,e,!0)}}class pc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const mc=new gt;class fp{constructor(t=new gt(1/0,1/0),e=new gt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gc=new H,os=new H,_c=new H;class Uv extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let r=new ve;r.setAttribute("position",new oe([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new Zo({fog:!1,toneMapped:!1});this.lightPlane=new Ts(r,s),this.add(this.lightPlane),r=new ve,r.setAttribute("position",new oe([0,0,0,0,0,1],3)),this.targetLine=new Ts(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.light.matrixWorld),os.setFromMatrixPosition(this.light.target.matrixWorld),_c.subVectors(os,gc),this.lightPlane.lookAt(os),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(os),this.targetLine.scale.z=_c.length()}}const ls=new Ke;class Nv extends jf{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new ve;s.setIndex(new Ee(n,1)),s.setAttribute("position",new Ee(r,3)),super(s,new Zo({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ls.setFromObject(this.object),ls.isEmpty())return;const t=ls.min,e=ls.max,n=this.geometry.attributes.position,r=n.array;r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=t.x,r[4]=e.y,r[5]=e.z,r[6]=t.x,r[7]=t.y,r[8]=e.z,r[9]=e.x,r[10]=t.y,r[11]=e.z,r[12]=e.x,r[13]=e.y,r[14]=t.z,r[15]=t.x,r[16]=e.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=e.x,r[22]=t.y,r[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dp extends Nn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Vt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vc(i,t,e,n){const r=pp(n);switch(e){case uh:return i*t;case Fo:return i*t/r.components*r.byteLength;case Oo:return i*t/r.components*r.byteLength;case Bi:return i*t*2/r.components*r.byteLength;case Bo:return i*t*2/r.components*r.byteLength;case fh:return i*t*3/r.components*r.byteLength;case Ze:return i*t*4/r.components*r.byteLength;case ko:return i*t*4/r.components*r.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Ga:return Math.max(i,16)*Math.max(t,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(t,8)/2;case Wa:case Xa:case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uo:case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _o:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pp(i){switch(i){case Ge:case oh:return{byteLength:1,components:1};case gr:case lh:case Dn:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case _n:case Do:case Ye:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function mp(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const f=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,f);else{u.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<u.length;m++){const g=u[h],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
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
#endif`,p0=`uniform sampler2D dfgLUT;
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
}`,m0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E0=`#if defined( USE_POINTS_UV )
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
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tm=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:gp,alphahash_pars_fragment:_p,alphamap_fragment:vp,alphamap_pars_fragment:xp,alphatest_fragment:yp,alphatest_pars_fragment:Mp,aomap_fragment:Sp,aomap_pars_fragment:bp,batching_pars_vertex:wp,batching_vertex:Ep,begin_vertex:Tp,beginnormal_vertex:Ap,bsdfs:Cp,iridescence_fragment:Rp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:Bp,common:kp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Gp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:jp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Jp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:l0,envmap_vertex:Kp,fog_vertex:Qp,fog_pars_vertex:t0,fog_fragment:e0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:r0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:a0,lights_pars_begin:o0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:u0,lights_phong_pars_fragment:f0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:_0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:M0,map_fragment:S0,map_pars_fragment:b0,map_particle_fragment:w0,map_particle_pars_fragment:E0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:A0,morphinstance_vertex:C0,morphcolor_vertex:R0,morphnormal_vertex:P0,morphtarget_pars_vertex:I0,morphtarget_vertex:L0,normal_fragment_begin:D0,normal_fragment_maps:U0,normal_pars_fragment:N0,normal_pars_vertex:F0,normal_vertex:O0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:H0,opaque_fragment:G0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:j0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:K0,shadowmap_vertex:Q0,shadowmask_pars_fragment:tm,skinbase_vertex:em,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:rm,specularmap_fragment:sm,specularmap_pars_fragment:am,tonemapping_fragment:om,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:fm,uv_vertex:dm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:vm,cube_vert:xm,cube_frag:ym,depth_vert:Mm,depth_frag:Sm,distance_vert:bm,distance_frag:wm,equirect_vert:Em,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:Cm,meshbasic_vert:Rm,meshbasic_frag:Pm,meshlambert_vert:Im,meshlambert_frag:Lm,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:km,meshphysical_frag:zm,meshtoon_vert:Vm,meshtoon_frag:Hm,points_vert:Gm,points_frag:Wm,shadow_vert:Xm,shadow_frag:jm,sprite_vert:qm,sprite_frag:Ym},Rt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},dn={basic:{uniforms:Ue([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ue([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ue([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ue([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ue([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ue([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ue([Rt.points,Rt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ue([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ue([Rt.common,Rt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ue([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ue([Rt.sprite,Rt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ue([Rt.common,Rt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ue([Rt.lights,Rt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};dn.physical={uniforms:Ue([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const cs={r:0,b:0,g:0},ti=new ln,Zm=new Qt;function Jm(i,t,e,n,r,s){const a=new Jt(0);let o=r===!0?0:1,l,c,f=null,u=0,h=null;function m(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){const S=x.backgroundBlurriness>0;_=t.get(_,S)}return _}function g(x){let _=!1;const S=m(x);S===null?d(a,o):S&&S.isColor&&(d(S,1),_=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,_){const S=m(_);S&&(S.isCubeTexture||S.mapping===Ps)?(c===void 0&&(c=new Fe(new wr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Hi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ti.copy(_.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(ti)),c.material.toneMapped=te.getTransfer(S.colorSpace)!==re,(f!==S||u!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Fe(new Er(2,2),new vn({name:"BackgroundMaterial",uniforms:Hi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==re,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,u=S.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,_){x.getRGB(cs,Uh(i)),e.buffers.color.setClear(cs.r,cs.g,cs.b,_,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),o=_,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,d(a,o)},render:g,addToRenderList:v,dispose:p}}function $m(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(A,C,P,D,B){let z=!1;const O=u(A,D,P,C);s!==O&&(s=O,c(s.object)),z=m(A,D,P,B),z&&g(A,D,P,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(A,C,P,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function f(A){return i.deleteVertexArray(A)}function u(A,C,P,D){const B=D.wireframe===!0;let z=n[C.id];z===void 0&&(z={},n[C.id]=z);const O=A.isInstancedMesh===!0?A.id:0;let N=z[O];N===void 0&&(N={},z[O]=N);let F=N[P.id];F===void 0&&(F={},N[P.id]=F);let k=F[B];return k===void 0&&(k=h(l()),F[B]=k),k}function h(A){const C=[],P=[],D=[];for(let B=0;B<e;B++)C[B]=0,P[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:D,object:A,attributes:{},index:null}}function m(A,C,P,D){const B=s.attributes,z=C.attributes;let O=0;const N=P.getAttributes();for(const F in N)if(N[F].location>=0){const V=B[F];let q=z[F];if(q===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),V===void 0||V.attribute!==q||q&&V.data!==q.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function g(A,C,P,D){const B={},z=C.attributes;let O=0;const N=P.getAttributes();for(const F in N)if(N[F].location>=0){let V=z[F];V===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(V=A.instanceColor));const q={};q.attribute=V,V&&V.data&&(q.data=V.data),B[F]=q,O++}s.attributes=B,s.attributesNum=O,s.index=D}function v(){const A=s.newAttributes;for(let C=0,P=A.length;C<P;C++)A[C]=0}function d(A){p(A,0)}function p(A,C){const P=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;P[A]=1,D[A]===0&&(i.enableVertexAttribArray(A),D[A]=1),B[A]!==C&&(i.vertexAttribDivisor(A,C),B[A]=C)}function x(){const A=s.newAttributes,C=s.enabledAttributes;for(let P=0,D=C.length;P<D;P++)C[P]!==A[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function _(A,C,P,D,B,z,O){O===!0?i.vertexAttribIPointer(A,C,P,B,z):i.vertexAttribPointer(A,C,P,D,B,z)}function S(A,C,P,D){v();const B=D.attributes,z=P.getAttributes(),O=C.defaultAttributeValues;for(const N in z){const F=z[N];if(F.location>=0){let k=B[N];if(k===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),k!==void 0){const V=k.normalized,q=k.itemSize,ot=t.get(k);if(ot===void 0)continue;const ht=ot.buffer,ut=ot.type,G=ot.bytesPerElement,J=ut===i.INT||ut===i.UNSIGNED_INT||k.gpuType===Do;if(k.isInterleavedBufferAttribute){const nt=k.data,xt=nt.stride,ft=k.offset;if(nt.isInstancedInterleavedBuffer){for(let bt=0;bt<F.locationSize;bt++)p(F.location+bt,nt.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<F.locationSize;bt++)d(F.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let bt=0;bt<F.locationSize;bt++)_(F.location+bt,q/F.locationSize,ut,V,xt*G,(ft+q/F.locationSize*bt)*G,J)}else{if(k.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)p(F.location+nt,k.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let nt=0;nt<F.locationSize;nt++)d(F.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let nt=0;nt<F.locationSize;nt++)_(F.location+nt,q/F.locationSize,ut,V,q*G,q/F.locationSize*nt*G,J)}}else if(O!==void 0){const V=O[N];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(F.location,V);break;case 3:i.vertexAttrib3fv(F.location,V);break;case 4:i.vertexAttrib4fv(F.location,V);break;default:i.vertexAttrib1fv(F.location,V)}}}}x()}function w(){b();for(const A in n){const C=n[A];for(const P in C){const D=C[P];for(const B in D){const z=D[B];for(const O in z)f(z[O].object),delete z[O];delete D[B]}}delete n[A]}}function M(A){if(n[A.id]===void 0)return;const C=n[A.id];for(const P in C){const D=C[P];for(const B in D){const z=D[B];for(const O in z)f(z[O].object),delete z[O];delete D[B]}}delete n[A.id]}function E(A){for(const C in n){const P=n[C];for(const D in P){const B=P[D];if(B[A.id]===void 0)continue;const z=B[A.id];for(const O in z)f(z[O].object),delete z[O];delete B[A.id]}}}function y(A){for(const C in n){const P=n[C],D=A.isInstancedMesh===!0?A.id:0,B=P[D];if(B!==void 0){for(const z in B){const O=B[z];for(const N in O)f(O[N].object),delete O[N];delete B[z]}delete P[D],Object.keys(P).length===0&&delete n[C]}}}function b(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:d,disableUnusedAttributes:x}}function Km(i,t,e){let n;function r(c){n=c}function s(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function a(c,f,u){u!==0&&(i.drawArraysInstanced(n,c,f,u),e.update(f,n,u))}function o(c,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let m=0;for(let g=0;g<u;g++)m+=f[g];e.update(m,n,1)}function l(c,f,u,h){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],f[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=f[v]*h[v];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Ze&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const y=E===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ge&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ye&&!y)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(Vt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:S,maxSamples:w,samples:M}}function tg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Wn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,m){const g=u.clippingPlanes,v=u.clipIntersection,d=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!d)s?f(null):c();else{const x=s?0:n,_=x*4;let S=p.clippingState||null;l.value=S,S=f(g,h,_,m);for(let w=0;w!==_;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,m,g){const v=u!==null?u.length:0;let d=null;if(v!==0){if(d=l.value,g!==!0||d===null){const p=m+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<p)&&(d=new Float32Array(p));for(let _=0,S=m;_!==v;++_,S+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}const jn=4,xc=[.125,.215,.35,.446,.526,.582],ii=20,eg=256,sr=new Ns,yc=new Jt;let ya=null,Ma=0,Sa=0,ba=!1;const ng=new H;class Mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=ng}=s;ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ya,Ma,Sa),this._renderer.xr.enabled=ba,t.scissorTest=!1,Ri(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Dn,format:Ze,colorSpace:ki,depthBuffer:!1},r=Sc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ig(s)),this._blurMaterial=sg(s,t,e),this._ggxMaterial=rg(s,t,e)}return r}_compileMaterial(t){const e=new Fe(new ve,t);this._renderer.compile(e,sr)}_sceneToCubeUV(t,e,n,r,s){const l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(yc),u.toneMapping=mn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new wr,new qo({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,d=v.material;let p=!1;const x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,p=!0):(d.color.copy(yc),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const w=this._cubeSize;Ri(r,S*w,_>2?w:0,w,w),u.setRenderTarget(r),p&&u.render(v,l),u.render(t,l)}u.toneMapping=m,u.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===hi||t.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ri(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=0+c*1.25,m=u*h,{_lodMax:g}=this,v=this._sizeLods[n],d=3*v*(n>g-jn?n-g+jn:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,Ri(s,d,p,3*v,2*v),r.setRenderTarget(s),r.render(o,sr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ri(t,d,p,3*v,2*v),r.setRenderTarget(t),r.render(o,sr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=c;const h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),v=s/g,d=isFinite(s)?1+Math.floor(f*v):ii;d>ii&&Vt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ii}`);const p=[];let x=0;for(let E=0;E<ii;++E){const y=E/v,b=Math.exp(-y*y/2);p.push(b),E===0?x+=b:E<d&&(x+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const S=this._sizeLods[r],w=3*S*(r>_-jn?r-_+jn:0),M=4*(this._cubeSize-S);Ri(e,w,M,3*S,2*S),l.setRenderTarget(e),l.render(u,sr)}}function ig(i){const t=[],e=[],n=[];let r=i;const s=i-jn+1+xc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-jn?l=xc[a-i+jn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,g=6,v=3,d=2,p=1,x=new Float32Array(v*g*m),_=new Float32Array(d*g*m),S=new Float32Array(p*g*m);for(let M=0;M<m;M++){const E=M%3*2/3-1,y=M>2?0:-1,b=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];x.set(b,v*g*M),_.set(h,d*g*M);const L=[M,M,M,M,M,M];S.set(L,p*g*M)}const w=new ve;w.setAttribute("position",new Ee(x,v)),w.setAttribute("uv",new Ee(_,d)),w.setAttribute("faceIndex",new Ee(S,p)),n.push(new Fe(w,null)),r>jn&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Sc(i,t,e){const n=new gn(i,t,e);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ri(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function rg(i,t,e){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function sg(i,t,e){const n=new Float32Array(ii),r=new H(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function bc(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function wc(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fs(){return`

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
	`}class Gh extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Jo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Pn});s.uniforms.tEquirect.value=e;const a=new Fe(r,s),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=Le),new Kd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function ag(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===zs||m===Vs)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Gh(g.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,g=m===zs||m===Vs,v=m===hi||m===Oi;if(g||v){let d=e.get(h);const p=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Mc(i)),d=g?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),d.texture;if(d!==void 0)return d.texture;{const x=h.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Mc(i)),d=g?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),h.addEventListener("dispose",f),d.texture):null}}}return h}function o(h,m){return m===zs?h.mapping=hi:m===Vs&&(h.mapping=Oi),h}function l(h){let m=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&m++;return m===g}function c(h){const m=h.target;m.removeEventListener("dispose",c);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function og(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&bs("WebGLRenderer: "+n+" extension not supported."),r}}}function lg(i,t,e,n){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)t.update(h[m],i.ARRAY_BUFFER)}function c(u){const h=[],m=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(m!==null){const x=m.array;v=m.version;for(let _=0,S=x.length;_<S;_+=3){const w=x[_+0],M=x[_+1],E=x[_+2];h.push(w,M,M,E,E,w)}}else{const x=g.array;v=g.version;for(let _=0,S=x.length/3-1;_<S;_+=3){const w=_+0,M=_+1,E=_+2;h.push(w,M,M,E,E,w)}}const d=new(g.count>=65535?vh:_h)(h,1);d.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,d)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function cg(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*a),e.update(m,n,1)}function c(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,h*a,g),e.update(m,n,g))}function f(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function u(h,m,g,v){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)c(h[p]/a,m[p],v[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x]*v[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ug(i,t,e){const n=new WeakMap,r=new fe;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let b=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let S=o.attributes.position.count*_,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const M=new Float32Array(S*w*4*u),E=new ph(M,S,w,u);E.type=Ye,E.needsUpdate=!0;const y=_*4;for(let L=0;L<u;L++){const A=d[L],C=p[L],P=x[L],D=S*w*4*L;for(let B=0;B<A.count;B++){const z=B*y;m===!0&&(r.fromBufferAttribute(A,B),M[D+z+0]=r.x,M[D+z+1]=r.y,M[D+z+2]=r.z,M[D+z+3]=0),g===!0&&(r.fromBufferAttribute(C,B),M[D+z+4]=r.x,M[D+z+5]=r.y,M[D+z+6]=r.z,M[D+z+7]=0),v===!0&&(r.fromBufferAttribute(P,B),M[D+z+8]=r.x,M[D+z+9]=r.y,M[D+z+10]=r.z,M[D+z+11]=P.itemSize===4?r.w:1)}}h={count:u,texture:E,size:new gt(S,w)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function fg(i,t,e,n,r){let s=new WeakMap;function a(c){const f=r.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==f&&(t.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return h}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const dg={[Qc]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[nh]:"ACES_FILMIC_TONE_MAPPING",[rh]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function pg(i,t,e,n,r){const s=new gn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new gn(t,e,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),o=new ve;o.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new oe([0,2,0,0,2,0],2));const l=new Dd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Fe(o,l),f=new Ns(-1,1,1,-1,0,1);let u=null,h=null,m=!1,g,v=null,d=[],p=!1;this.setSize=function(x,_){s.setSize(x,_),a.setSize(x,_);for(let S=0;S<d.length;S++){const w=d[S];w.setSize&&w.setSize(x,_)}},this.setEffects=function(x){d=x,p=d.length>0&&d[0].isRenderPass===!0;const _=s.width,S=s.height;for(let w=0;w<d.length;w++){const M=d[w];M.setSize&&M.setSize(_,S)}},this.begin=function(x,_){if(m||x.toneMapping===mn&&d.length===0)return!1;if(v=_,_!==null){const S=_.width,w=_.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return p===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=mn,!0},this.hasRenderPass=function(){return p},this.end=function(x,_){x.toneMapping=g,m=!0;let S=s,w=a;for(let M=0;M<d.length;M++){const E=d[M];if(E.enabled!==!1&&(E.render(x,w,S,_),E.needsSwap!==!1)){const y=S;S=w,w=y}}if(u!==x.outputColorSpace||h!==x.toneMapping){u=x.outputColorSpace,h=x.toneMapping,l.defines={},te.getTransfer(u)===re&&(l.defines.SRGB_TRANSFER="");const M=dg[h];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(v),x.render(c,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Wh=new ye,To=new yr(1,1),Xh=new ph,jh=new Ef,qh=new Jo,Ec=[],Tc=[],Ac=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ec[r];if(s===void 0&&(s=new Float32Array(r),Ec[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Os(i,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Se(e,n)}}function yg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),Se(e,n)}}function Mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Ac.set(n),i.uniformMatrix4fv(this.addr,!1,Ac),Se(e,n)}}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Pg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(To.compareFunction=e.isReversedDepthBuffer()?Go:Ho,s=To):s=Wh,e.setTexture2D(t||s,r)}function Ig(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||jh,r)}function Lg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||qh,r)}function Dg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Xh,r)}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return wg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ng(i,t){i.uniform1fv(this.addr,t)}function Fg(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Og(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Bg(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function kg(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zg(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vg(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hg(i,t){i.uniform1iv(this.addr,t)}function Gg(i,t){i.uniform2iv(this.addr,t)}function Wg(i,t){i.uniform3iv(this.addr,t)}function Xg(i,t){i.uniform4iv(this.addr,t)}function jg(i,t){i.uniform1uiv(this.addr,t)}function qg(i,t){i.uniform2uiv(this.addr,t)}function Yg(i,t){i.uniform3uiv(this.addr,t)}function Zg(i,t){i.uniform4uiv(this.addr,t)}function Jg(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=To:a=Wh;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function $g(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||jh,s[a])}function Kg(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||qh,s[a])}function Qg(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Xh,s[a])}function t_(i){switch(i){case 5126:return Ng;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return kg;case 35675:return zg;case 35676:return Vg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return jg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Qg}}class e_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ug(e.type)}}class n_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t_(e.type)}}class i_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Pc(i,t){i.seq.push(t),i.map[t.id]=t}function r_(i,t,e){const n=i.name,r=n.length;for(wa.lastIndex=0;;){const s=wa.exec(n),a=wa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pc(e,c===void 0?new e_(o,i,t):new n_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new i_(o),Pc(e,u)),e=u}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);r_(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ic(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const s_=37297;let a_=0;function o_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Lc=new Yt;function l_(i){te._getMatrix(Lc,te.workingColorSpace,i);const t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ms:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+o_(i.getShaderSource(t),o)}else return s}function c_(i,t){const e=l_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const h_={[Qc]:"Linear",[th]:"Reinhard",[eh]:"Cineon",[nh]:"ACESFilmic",[rh]:"AgX",[sh]:"Neutral",[ih]:"Custom"};function u_(i,t){const e=h_[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hs=new H;function f_(){te.getLuminanceCoefficients(hs);const i=hs.x.toFixed(4),t=hs.y.toFixed(4),e=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function p_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hr(i){return i!==""}function Uc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(g_,v_)}const __=new Map;function v_(i,t){let e=$t[t];if(e===void 0){const n=__.get(t);if(n!==void 0)e=$t[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(x_,y_)}function y_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const M_={[ds]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function S_(i){return M_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const b_={[hi]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE_UV"};function w_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":b_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const E_={[Oi]:"ENVMAP_MODE_REFRACTION"};function T_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":E_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const A_={[Lo]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function C_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A_[i.combine]||"ENVMAP_BLENDING_NONE"}function R_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function P_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=S_(e),c=w_(e),f=T_(e),u=C_(e),h=R_(e),m=d_(e),g=p_(s),v=r.createProgram();let d,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(d=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?$t.tonemapping_pars_fragment:"",e.toneMapping!==mn?u_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,c_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=Ao(a),a=Uc(a,e),a=Nc(a,e),o=Ao(o),o=Uc(o,e),o=Nc(o,e),a=Fc(a),o=Fc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+d+a,S=x+p+o,w=Ic(r,r.VERTEX_SHADER,_),M=Ic(r,r.FRAGMENT_SHADER,S);r.attachShader(v,w),r.attachShader(v,M),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(A){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(w)||"",D=r.getShaderInfoLog(M)||"",B=C.trim(),z=P.trim(),O=D.trim();let N=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,w,M);else{const k=Dc(r,w,"vertex"),V=Dc(r,M,"fragment");Wt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+k+`
`+V)}else B!==""?Vt("WebGLProgram: Program Info Log:",B):(z===""||O==="")&&(F=!1);F&&(A.diagnostics={runnable:N,programLog:B,vertexShader:{log:z,prefix:d},fragmentShader:{log:O,prefix:p}})}r.deleteShader(w),r.deleteShader(M),y=new vs(r,v),b=m_(r,v)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(v,s_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}let I_=0;class L_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new D_(t),e.set(t,n)),n}}class D_{constructor(t){this.id=I_++,this.code=t,this.usedTimes=0}}function U_(i,t,e,n,r,s){const a=new jo,o=new L_,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,b,L,A,C){const P=A.fog,D=C.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=t.get(y.envMap||B,z),N=O&&O.mapping===Ps?O.image.height:null,F=m[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Vt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const k=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,V=k!==void 0?k.length:0;let q=0;D.morphAttributes.position!==void 0&&(q=1),D.morphAttributes.normal!==void 0&&(q=2),D.morphAttributes.color!==void 0&&(q=3);let ot,ht,ut,G;if(F){const ee=dn[F];ot=ee.vertexShader,ht=ee.fragmentShader}else ot=y.vertexShader,ht=y.fragmentShader,o.update(y),ut=o.getVertexShaderID(y),G=o.getFragmentShaderID(y);const J=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),xt=C.isInstancedMesh===!0,ft=C.isBatchedMesh===!0,bt=!!y.map,Ut=!!y.matcap,vt=!!O,et=!!y.aoMap,rt=!!y.lightMap,Z=!!y.bumpMap,ct=!!y.normalMap,U=!!y.displacementMap,Pt=!!y.emissiveMap,yt=!!y.metalnessMap,St=!!y.roughnessMap,_t=y.anisotropy>0,I=y.clearcoat>0,T=y.dispersion>0,W=y.iridescence>0,j=y.sheen>0,it=y.transmission>0,$=_t&&!!y.anisotropyMap,Et=I&&!!y.clearcoatMap,dt=I&&!!y.clearcoatNormalMap,At=I&&!!y.clearcoatRoughnessMap,Tt=W&&!!y.iridescenceMap,at=W&&!!y.iridescenceThicknessMap,pt=j&&!!y.sheenColorMap,Dt=j&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,Ct=!!y.specularColorMap,jt=!!y.specularIntensityMap,X=it&&!!y.transmissionMap,wt=it&&!!y.thicknessMap,Mt=!!y.gradientMap,Ft=!!y.alphaMap,mt=y.alphaTest>0,lt=!!y.alphaHash,Bt=!!y.extensions;let Xt=mn;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ie={shaderID:F,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:ht,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ft,batchingColor:ft&&C._colorsTexture!==null,instancing:xt,instancingColor:xt&&C.instanceColor!==null,instancingMorph:xt&&C.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ki,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:Ut,envMap:vt,envMapMode:vt&&O.mapping,envMapCubeUVHeight:N,aoMap:et,lightMap:rt,bumpMap:Z,normalMap:ct,displacementMap:U,emissiveMap:Pt,normalMapObjectSpace:ct&&y.normalMapType===Xu,normalMapTangentSpace:ct&&y.normalMapType===Vo,metalnessMap:yt,roughnessMap:St,anisotropy:_t,anisotropyMap:$,clearcoat:I,clearcoatMap:Et,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,dispersion:T,iridescence:W,iridescenceMap:Tt,iridescenceThicknessMap:at,sheen:j,sheenColorMap:pt,sheenRoughnessMap:Dt,specularMap:Nt,specularColorMap:Ct,specularIntensityMap:jt,transmission:it,transmissionMap:X,thicknessMap:wt,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===Ui&&y.alphaToCoverage===!1,alphaMap:Ft,alphaTest:mt,alphaHash:lt,combine:y.combine,mapUv:bt&&g(y.map.channel),aoMapUv:et&&g(y.aoMap.channel),lightMapUv:rt&&g(y.lightMap.channel),bumpMapUv:Z&&g(y.bumpMap.channel),normalMapUv:ct&&g(y.normalMap.channel),displacementMapUv:U&&g(y.displacementMap.channel),emissiveMapUv:Pt&&g(y.emissiveMap.channel),metalnessMapUv:yt&&g(y.metalnessMap.channel),roughnessMapUv:St&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:Et&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(y.sheenRoughnessMap.channel),specularMapUv:Nt&&g(y.specularMap.channel),specularColorMapUv:Ct&&g(y.specularColorMap.channel),specularIntensityMapUv:jt&&g(y.specularIntensityMap.channel),transmissionMapUv:X&&g(y.transmissionMap.channel),thicknessMapUv:wt&&g(y.thicknessMap.channel),alphaMapUv:Ft&&g(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ct||_t),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(bt||Ft),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:C.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:Pt&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Bt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&y.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function d(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)b.push(L),b.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const b=m[y.type];let L;if(b){const A=dn[b];L=Pd.clone(A.uniforms)}else L=y.uniforms;return L}function S(y,b){let L=f.get(b);return L!==void 0?++L.usedTimes:(L=new P_(i,b,y,r),c.push(L),f.set(b,L)),L}function w(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:E}}function N_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function F_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,v,d,p){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:d,group:p},i[t]=x):(x.id=h.id,x.object=h,x.geometry=m,x.material=g,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=d,x.group=p),t++,x}function l(h,m,g,v,d,p){const x=o(h,m,g,v,d,p);g.transmission>0?n.push(x):g.transparent===!0?r.push(x):e.push(x)}function c(h,m,g,v,d,p){const x=o(h,m,g,v,d,p);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):e.unshift(x)}function f(h,m){e.length>1&&e.sort(h||F_),n.length>1&&n.sort(m||Bc),r.length>1&&r.sort(m||Bc)}function u(){for(let h=t,m=i.length;h<m;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:f}}function O_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new kc,i.set(n,[a])):r>=s.length?(a=new kc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Jt};break;case"SpotLight":e={position:new H,direction:new H,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function k_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let z_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function H_(i){const t=new B_,e=k_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const r=new H,s=new Qt,a=new Qt;function o(c){let f=0,u=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,v=0,d=0,p=0,x=0,_=0,S=0,w=0,M=0,E=0;c.sort(V_);for(let b=0,L=c.length;b<L;b++){const A=c[b],C=A.color,P=A.intensity,D=A.distance;let B=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Bi?B=A.shadow.map.texture:B=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=C.r*P,u+=C.g*P,h+=C.b*P;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],P);E++}else if(A.isDirectionalLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,N=e.get(A);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.directionalShadow[m]=N,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=A.shadow.matrix,x++}n.directional[m]=z,m++}else if(A.isSpotLight){const z=t.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(C).multiplyScalar(P),z.distance=D,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[v]=z;const O=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,O.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[v]=O.matrix,A.castShadow){const N=e.get(A);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=B,S++}v++}else if(A.isRectAreaLight){const z=t.get(A);z.color.copy(C).multiplyScalar(P),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[d]=z,d++}else if(A.isPointLight){const z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const O=A.shadow,N=e.get(A);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,N.shadowCameraNear=O.camera.near,N.shadowCameraFar=O.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=z,g++}else if(A.isHemisphereLight){const z=t.get(A);z.skyColor.copy(A.color).multiplyScalar(P),z.groundColor.copy(A.groundColor).multiplyScalar(P),n.hemi[p]=z,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const y=n.hash;(y.directionalLength!==m||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==d||y.hemiLength!==p||y.numDirectionalShadows!==x||y.numPointShadows!==_||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,y.directionalLength=m,y.pointLength=g,y.spotLength=v,y.rectAreaLength=d,y.hemiLength=p,y.numDirectionalShadows=x,y.numPointShadows=_,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=E,n.version=z_++)}function l(c,f){let u=0,h=0,m=0,g=0,v=0;const d=f.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const _=c[p];if(_.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),u++}else if(_.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),m++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(_.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),h++}else if(_.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(d),v++}}}return{setup:o,setupView:l,state:n}}function zc(i){const t=new H_(i),e=[],n=[];function r(f){c.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function G_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new zc(i),t.set(r,[o])):s>=a.length?(o=new zc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`,j_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],q_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Vc=new Qt,ar=new H,Ea=new H;function Y_(i,t,e){let n=new Ls;const r=new gt,s=new gt,a=new fe,o=new Nd,l=new Fd,c={},f=e.maxTextureSize,u={[Ln]:ke,[ke]:Ln,[Cn]:Cn},h=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fe(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let p=this.type;this.render=function(M,E,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;this.type===_u&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ds);const b=i.getRenderTarget(),L=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Pn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=p!==this.type;P&&E.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){const z=M[D],O=z.shadow;if(O===void 0){Vt("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const N=O.getFrameExtents();r.multiply(N),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,O.mapSize.y=s.y));const F=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===lr){if(z.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new gn(r.x,r.y,{format:Bi,type:Dn,minFilter:Le,magFilter:Le,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new yr(r.x,r.y,Ye),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Un,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ae,O.map.depthTexture.magFilter=Ae}else z.isPointLight?(O.map=new Gh(r.x),O.map.depthTexture=new Yf(r.x,_n)):(O.map=new gn(r.x,r.y),O.map.depthTexture=new yr(r.x,r.y,_n)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Un,this.type===ds?(O.map.depthTexture.compareFunction=F?Go:Ho,O.map.depthTexture.minFilter=Le,O.map.depthTexture.magFilter=Le):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ae,O.map.depthTexture.magFilter=Ae);O.camera.updateProjectionMatrix()}const k=O.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<k;V++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,V),i.clear();else{V===0&&(i.setRenderTarget(O.map),i.clear());const q=O.getViewport(V);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),C.viewport(a)}if(z.isPointLight){const q=O.camera,ot=O.matrix,ht=z.distance||q.far;ht!==q.far&&(q.far=ht,q.updateProjectionMatrix()),ar.setFromMatrixPosition(z.matrixWorld),q.position.copy(ar),Ea.copy(q.position),Ea.add(j_[V]),q.up.copy(q_[V]),q.lookAt(Ea),q.updateMatrixWorld(),ot.makeTranslation(-ar.x,-ar.y,-ar.z),Vc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Vc,q.coordinateSystem,q.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),S(E,y,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===lr&&x(O,y),O.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(b,L,A)};function x(M,E){const y=t.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gn(r.x,r.y,{format:Bi,type:Dn})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,y,h,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,y,m,v,null)}function _(M,E,y,b){let L=null;const A=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)L=A;else if(L=y.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const C=L.uuid,P=E.uuid;let D=c[C];D===void 0&&(D={},c[C]=D);let B=D[P];B===void 0&&(B=L.clone(),D[P]=B,E.addEventListener("dispose",w)),L=B}if(L.visible=E.visible,L.wireframe=E.wireframe,b===lr?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:u[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const C=i.properties.get(L);C.light=y}return L}function S(M,E,y,b,L){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===lr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const P=t.update(M),D=M.material;if(Array.isArray(D)){const B=P.groups;for(let z=0,O=B.length;z<O;z++){const N=B[z],F=D[N.materialIndex];if(F&&F.visible){const k=_(M,F,b,L);M.onBeforeShadow(i,M,E,y,P,k,N),i.renderBufferDirect(y,null,P,k,M,N),M.onAfterShadow(i,M,E,y,P,k,N)}}}else if(D.visible){const B=_(M,D,b,L);M.onBeforeShadow(i,M,E,y,P,B,null),i.renderBufferDirect(y,null,P,B,M,null),M.onAfterShadow(i,M,E,y,P,B,null)}}const C=M.children;for(let P=0,D=C.length;P<D;P++)S(C[P],E,y,b,L)}function w(M){M.target.removeEventListener("dispose",w);for(const y in c){const b=c[y],L=M.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function Z_(i,t){function e(){let X=!1;const wt=new fe;let Mt=null;const Ft=new fe(0,0,0,0);return{setMask:function(mt){Mt!==mt&&!X&&(i.colorMask(mt,mt,mt,mt),Mt=mt)},setLocked:function(mt){X=mt},setClear:function(mt,lt,Bt,Xt,ie){ie===!0&&(mt*=Xt,lt*=Xt,Bt*=Xt),wt.set(mt,lt,Bt,Xt),Ft.equals(wt)===!1&&(i.clearColor(mt,lt,Bt,Xt),Ft.copy(wt))},reset:function(){X=!1,Mt=null,Ft.set(-1,0,0,0)}}}function n(){let X=!1,wt=!1,Mt=null,Ft=null,mt=null;return{setReversed:function(lt){if(wt!==lt){const Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),wt=lt;const Xt=mt;mt=null,this.setClear(Xt)}},getReversed:function(){return wt},setTest:function(lt){lt?J(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(lt){Mt!==lt&&!X&&(i.depthMask(lt),Mt=lt)},setFunc:function(lt){if(wt&&(lt=nf[lt]),Ft!==lt){switch(lt){case Ia:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=lt}},setLocked:function(lt){X=lt},setClear:function(lt){mt!==lt&&(mt=lt,wt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){X=!1,Mt=null,Ft=null,mt=null,wt=!1}}}function r(){let X=!1,wt=null,Mt=null,Ft=null,mt=null,lt=null,Bt=null,Xt=null,ie=null;return{setTest:function(ee){X||(ee?J(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ee){wt!==ee&&!X&&(i.stencilMask(ee),wt=ee)},setFunc:function(ee,We,Xe){(Mt!==ee||Ft!==We||mt!==Xe)&&(i.stencilFunc(ee,We,Xe),Mt=ee,Ft=We,mt=Xe)},setOp:function(ee,We,Xe){(lt!==ee||Bt!==We||Xt!==Xe)&&(i.stencilOp(ee,We,Xe),lt=ee,Bt=We,Xt=Xe)},setLocked:function(ee){X=ee},setClear:function(ee){ie!==ee&&(i.clearStencil(ee),ie=ee)},reset:function(){X=!1,wt=null,Mt=null,Ft=null,mt=null,lt=null,Bt=null,Xt=null,ie=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,m=[],g=null,v=!1,d=null,p=null,x=null,_=null,S=null,w=null,M=null,E=new Jt(0,0,0),y=0,b=!1,L=null,A=null,C=null,P=null,D=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=O>=2);let F=null,k={};const V=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ot=new fe().fromArray(V),ht=new fe().fromArray(q);function ut(X,wt,Mt,Ft){const mt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(X,lt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<Mt;Bt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(wt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return lt}const G={};G[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Fi),Z(!1),ct(ml),J(i.CULL_FACE),et(Pn);function J(X){f[X]!==!0&&(i.enable(X),f[X]=!0)}function nt(X){f[X]!==!1&&(i.disable(X),f[X]=!1)}function xt(X,wt){return u[X]!==wt?(i.bindFramebuffer(X,wt),u[X]=wt,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function ft(X,wt){let Mt=m,Ft=!1;if(X){Mt=h.get(wt),Mt===void 0&&(Mt=[],h.set(wt,Mt));const mt=X.textures;if(Mt.length!==mt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=mt.length;lt<Bt;lt++)Mt[lt]=i.COLOR_ATTACHMENT0+lt;Mt.length=mt.length,Ft=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(Mt)}function bt(X){return g!==X?(i.useProgram(X),g=X,!0):!1}const Ut={[ni]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};Ut[Mu]=i.MIN,Ut[Su]=i.MAX;const vt={[bu]:i.ZERO,[wu]:i.ONE,[Eu]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[Iu]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function et(X,wt,Mt,Ft,mt,lt,Bt,Xt,ie,ee){if(X===Pn){v===!0&&(nt(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),X!==vu){if(X!==d||ee!==b){if((p!==ni||S!==ni)&&(i.blendEquation(i.FUNC_ADD),p=ni,S=ni),ee)switch(X){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",X);break}else switch(X){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _l:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",X);break}x=null,_=null,w=null,M=null,E.set(0,0,0),y=0,d=X,b=ee}return}mt=mt||wt,lt=lt||Mt,Bt=Bt||Ft,(wt!==p||mt!==S)&&(i.blendEquationSeparate(Ut[wt],Ut[mt]),p=wt,S=mt),(Mt!==x||Ft!==_||lt!==w||Bt!==M)&&(i.blendFuncSeparate(vt[Mt],vt[Ft],vt[lt],vt[Bt]),x=Mt,_=Ft,w=lt,M=Bt),(Xt.equals(E)===!1||ie!==y)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ie),E.copy(Xt),y=ie),d=X,b=!1}function rt(X,wt){X.side===Cn?nt(i.CULL_FACE):J(i.CULL_FACE);let Mt=X.side===ke;wt&&(Mt=!Mt),Z(Mt),X.blending===Ui&&X.transparent===!1?et(Pn):et(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ft=X.stencilWrite;o.setTest(Ft),Ft&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Pt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(X){L!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),L=X)}function ct(X){X!==mu?(J(i.CULL_FACE),X!==A&&(X===ml?i.cullFace(i.BACK):X===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),A=X}function U(X){X!==C&&(z&&i.lineWidth(X),C=X)}function Pt(X,wt,Mt){X?(J(i.POLYGON_OFFSET_FILL),(P!==wt||D!==Mt)&&(P=wt,D=Mt,a.getReversed()&&(wt=-wt),i.polygonOffset(wt,Mt))):nt(i.POLYGON_OFFSET_FILL)}function yt(X){X?J(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function St(X){X===void 0&&(X=i.TEXTURE0+B-1),F!==X&&(i.activeTexture(X),F=X)}function _t(X,wt,Mt){Mt===void 0&&(F===null?Mt=i.TEXTURE0+B-1:Mt=F);let Ft=k[Mt];Ft===void 0&&(Ft={type:void 0,texture:void 0},k[Mt]=Ft),(Ft.type!==X||Ft.texture!==wt)&&(F!==Mt&&(i.activeTexture(Mt),F=Mt),i.bindTexture(X,wt||G[X]),Ft.type=X,Ft.texture=wt)}function I(){const X=k[F];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function j(){try{i.texSubImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function it(){try{i.texSubImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function dt(){try{i.texStorage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function At(){try{i.texStorage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function Tt(){try{i.texImage2D(...arguments)}catch(X){Wt("WebGLState:",X)}}function at(){try{i.texImage3D(...arguments)}catch(X){Wt("WebGLState:",X)}}function pt(X){ot.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ot.copy(X))}function Dt(X){ht.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ht.copy(X))}function Nt(X,wt){let Mt=c.get(wt);Mt===void 0&&(Mt=new WeakMap,c.set(wt,Mt));let Ft=Mt.get(X);Ft===void 0&&(Ft=i.getUniformBlockIndex(wt,X.name),Mt.set(X,Ft))}function Ct(X,wt){const Ft=c.get(wt).get(X);l.get(wt)!==Ft&&(i.uniformBlockBinding(wt,Ft,X.__bindingPointIndex),l.set(wt,Ft))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},F=null,k={},u={},h=new WeakMap,m=[],g=null,v=!1,d=null,p=null,x=null,_=null,S=null,w=null,M=null,E=new Jt(0,0,0),y=0,b=!1,L=null,A=null,C=null,P=null,D=null,ot.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:nt,bindFramebuffer:xt,drawBuffers:ft,useProgram:bt,setBlending:et,setMaterial:rt,setFlipSided:Z,setCullFace:ct,setLineWidth:U,setPolygonOffset:Pt,setScissorTest:yt,activeTexture:St,bindTexture:_t,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Tt,texImage3D:at,updateUBOMapping:Nt,uniformBlockBinding:Ct,texStorage2D:dt,texStorage3D:At,texSubImage2D:j,texSubImage3D:it,compressedTexSubImage2D:$,compressedTexSubImage3D:Et,scissor:pt,viewport:Dt,reset:jt}}function J_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,f=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):xr("canvas")}function v(I,T,W){let j=1;const it=_t(I);if((it.width>W||it.height>W)&&(j=W/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(j*it.width),Et=Math.floor(j*it.height);u===void 0&&(u=g($,Et));const dt=T?g($,Et):u;return dt.width=$,dt.height=Et,dt.getContext("2d").drawImage(I,0,0,$,Et),Vt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+$+"x"+Et+")."),dt}else return"data"in I&&Vt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function d(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,T,W,j,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=T;if(T===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),T===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),T===i.RGBA){const Et=it?Ms:te.getTransfer(j);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=Et===re?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(I,T){let W;return I?T===null||T===_n||T===_r?W=i.DEPTH24_STENCIL8:T===Ye?W=i.DEPTH32F_STENCIL8:T===gr&&(W=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_n||T===_r?W=i.DEPTH_COMPONENT24:T===Ye?W=i.DEPTH_COMPONENT32F:T===gr&&(W=i.DEPTH_COMPONENT16),W}function w(I,T){return d(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ae&&I.minFilter!==Le?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function M(I){const T=I.target;T.removeEventListener("dispose",M),y(T),T.isVideoTexture&&f.delete(T)}function E(I){const T=I.target;T.removeEventListener("dispose",E),L(T)}function y(I){const T=n.get(I);if(T.__webglInit===void 0)return;const W=I.source,j=h.get(W);if(j){const it=j[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(I),Object.keys(j).length===0&&h.delete(W)}n.remove(I)}function b(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const W=I.source,j=h.get(W);delete j[T.__cacheKey],a.memory.textures--}function L(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let it=0;it<T.__webglFramebuffer[j].length;it++)i.deleteFramebuffer(T.__webglFramebuffer[j][it]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=I.textures;for(let j=0,it=W.length;j<it;j++){const $=n.get(W[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(W[j])}n.remove(I)}let A=0;function C(){A=0}function P(){const I=A;return I>=r.maxTextures&&Vt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function D(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function B(I,T){const W=n.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const j=I.image;if(j===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{G(W,I,T);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function z(I,T){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){G(W,I,T);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function O(I,T){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){G(W,I,T);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function N(I,T){const W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){J(W,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const F={[Ba]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},k={[Ae]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[Hs]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},V={[ju]:i.NEVER,[$u]:i.ALWAYS,[qu]:i.LESS,[Ho]:i.LEQUAL,[Yu]:i.EQUAL,[Go]:i.GEQUAL,[Zu]:i.GREATER,[Ju]:i.NOTEQUAL};function q(I,T){if(T.type===Ye&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Le||T.magFilter===Hs||T.magFilter===Pr||T.magFilter===ri||T.minFilter===Le||T.minFilter===Hs||T.minFilter===Pr||T.minFilter===ri)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,F[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,F[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,F[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,k[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,k[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ae||T.minFilter!==Pr&&T.minFilter!==ri||T.type===Ye&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ot(I,T){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",M));const j=T.source;let it=h.get(j);it===void 0&&(it={},h.set(j,it));const $=D(T);if($!==I.__cacheKey){it[$]===void 0&&(it[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),it[$].usedTimes++;const Et=it[I.__cacheKey];Et!==void 0&&(it[I.__cacheKey].usedTimes--,Et.usedTimes===0&&b(T)),I.__cacheKey=$,I.__webglTexture=it[$].texture}return W}function ht(I,T,W){return Math.floor(Math.floor(I/W)/T)}function ut(I,T,W,j){const $=I.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,j,T.data);else{$.sort((at,pt)=>at.start-pt.start);let Et=0;for(let at=1;at<$.length;at++){const pt=$[Et],Dt=$[at],Nt=pt.start+pt.count,Ct=ht(Dt.start,T.width,4),jt=ht(pt.start,T.width,4);Dt.start<=Nt+1&&Ct===jt&&ht(Dt.start+Dt.count-1,T.width,4)===Ct?pt.count=Math.max(pt.count,Dt.start+Dt.count-pt.start):(++Et,$[Et]=Dt)}$.length=Et+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let at=0,pt=$.length;at<pt;at++){const Dt=$[at],Nt=Math.floor(Dt.start/4),Ct=Math.ceil(Dt.count/4),jt=Nt%T.width,X=Math.floor(Nt/T.width),wt=Ct,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,jt,X,wt,Mt,W,j,T.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function G(I,T,W){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);const it=ot(I,T),$=T.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+W);const Et=n.get($);if($.version!==Et.__version||it===!0){e.activeTexture(i.TEXTURE0+W);const dt=te.getPrimaries(te.workingColorSpace),At=T.colorSpace===Xn?null:te.getPrimaries(T.colorSpace),Tt=T.colorSpace===Xn||dt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let at=v(T.image,!1,r.maxTextureSize);at=St(T,at);const pt=s.convert(T.format,T.colorSpace),Dt=s.convert(T.type);let Nt=_(T.internalFormat,pt,Dt,T.colorSpace,T.isVideoTexture);q(j,T);let Ct;const jt=T.mipmaps,X=T.isVideoTexture!==!0,wt=Et.__version===void 0||it===!0,Mt=$.dataReady,Ft=w(T,at);if(T.isDepthTexture)Nt=S(T.format===si,T.type),wt&&(X?e.texStorage2D(i.TEXTURE_2D,1,Nt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,pt,Dt,null));else if(T.isDataTexture)if(jt.length>0){X&&wt&&e.texStorage2D(i.TEXTURE_2D,Ft,Nt,jt[0].width,jt[0].height);for(let mt=0,lt=jt.length;mt<lt;mt++)Ct=jt[mt],X?Mt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,pt,Dt,Ct.data):e.texImage2D(i.TEXTURE_2D,mt,Nt,Ct.width,Ct.height,0,pt,Dt,Ct.data);T.generateMipmaps=!1}else X?(wt&&e.texStorage2D(i.TEXTURE_2D,Ft,Nt,at.width,at.height),Mt&&ut(T,at,pt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,pt,Dt,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Nt,jt[0].width,jt[0].height,at.depth);for(let mt=0,lt=jt.length;mt<lt;mt++)if(Ct=jt[mt],T.format!==Ze)if(pt!==null)if(X){if(Mt)if(T.layerUpdates.size>0){const Bt=vc(Ct.width,Ct.height,T.format,T.type);for(const Xt of T.layerUpdates){const ie=Ct.data.subarray(Xt*Bt/Ct.data.BYTES_PER_ELEMENT,(Xt+1)*Bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Xt,Ct.width,Ct.height,1,pt,ie)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,at.depth,pt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Nt,Ct.width,Ct.height,at.depth,0,Ct.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,at.depth,pt,Dt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Nt,Ct.width,Ct.height,at.depth,0,pt,Dt,Ct.data)}else{X&&wt&&e.texStorage2D(i.TEXTURE_2D,Ft,Nt,jt[0].width,jt[0].height);for(let mt=0,lt=jt.length;mt<lt;mt++)Ct=jt[mt],T.format!==Ze?pt!==null?X?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,pt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Nt,Ct.width,Ct.height,0,Ct.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Mt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,pt,Dt,Ct.data):e.texImage2D(i.TEXTURE_2D,mt,Nt,Ct.width,Ct.height,0,pt,Dt,Ct.data)}else if(T.isDataArrayTexture)if(X){if(wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Nt,at.width,at.height,at.depth),Mt)if(T.layerUpdates.size>0){const mt=vc(at.width,at.height,T.format,T.type);for(const lt of T.layerUpdates){const Bt=at.data.subarray(lt*mt/at.data.BYTES_PER_ELEMENT,(lt+1)*mt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,at.width,at.height,1,pt,Dt,Bt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,pt,Dt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,at.width,at.height,at.depth,0,pt,Dt,at.data);else if(T.isData3DTexture)X?(wt&&e.texStorage3D(i.TEXTURE_3D,Ft,Nt,at.width,at.height,at.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,pt,Dt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,at.width,at.height,at.depth,0,pt,Dt,at.data);else if(T.isFramebufferTexture){if(wt)if(X)e.texStorage2D(i.TEXTURE_2D,Ft,Nt,at.width,at.height);else{let mt=at.width,lt=at.height;for(let Bt=0;Bt<Ft;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Nt,mt,lt,0,pt,Dt,null),mt>>=1,lt>>=1}}else if(jt.length>0){if(X&&wt){const mt=_t(jt[0]);e.texStorage2D(i.TEXTURE_2D,Ft,Nt,mt.width,mt.height)}for(let mt=0,lt=jt.length;mt<lt;mt++)Ct=jt[mt],X?Mt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,pt,Dt,Ct):e.texImage2D(i.TEXTURE_2D,mt,Nt,pt,Dt,Ct);T.generateMipmaps=!1}else if(X){if(wt){const mt=_t(at);e.texStorage2D(i.TEXTURE_2D,Ft,Nt,mt.width,mt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Dt,at)}else e.texImage2D(i.TEXTURE_2D,0,Nt,pt,Dt,at);d(T)&&p(j),Et.__version=$.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function J(I,T,W){if(T.image.length!==6)return;const j=ot(I,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const $=n.get(it);if(it.version!==$.__version||j===!0){e.activeTexture(i.TEXTURE0+W);const Et=te.getPrimaries(te.workingColorSpace),dt=T.colorSpace===Xn?null:te.getPrimaries(T.colorSpace),At=T.colorSpace===Xn||Et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Tt=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let lt=0;lt<6;lt++)!Tt&&!at?pt[lt]=v(T.image[lt],!0,r.maxCubemapSize):pt[lt]=at?T.image[lt].image:T.image[lt],pt[lt]=St(T,pt[lt]);const Dt=pt[0],Nt=s.convert(T.format,T.colorSpace),Ct=s.convert(T.type),jt=_(T.internalFormat,Nt,Ct,T.colorSpace),X=T.isVideoTexture!==!0,wt=$.__version===void 0||j===!0,Mt=it.dataReady;let Ft=w(T,Dt);q(i.TEXTURE_CUBE_MAP,T);let mt;if(Tt){X&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,jt,Dt.width,Dt.height);for(let lt=0;lt<6;lt++){mt=pt[lt].mipmaps;for(let Bt=0;Bt<mt.length;Bt++){const Xt=mt[Bt];T.format!==Ze?Nt!==null?X?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Xt.width,Xt.height,Nt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,jt,Xt.width,Xt.height,0,Xt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Xt.width,Xt.height,Nt,Ct,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,jt,Xt.width,Xt.height,0,Nt,Ct,Xt.data)}}}else{if(mt=T.mipmaps,X&&wt){mt.length>0&&Ft++;const lt=_t(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(at){X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,pt[lt].width,pt[lt].height,Nt,Ct,pt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,pt[lt].width,pt[lt].height,0,Nt,Ct,pt[lt].data);for(let Bt=0;Bt<mt.length;Bt++){const ie=mt[Bt].image[lt].image;X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,ie.width,ie.height,Nt,Ct,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,jt,ie.width,ie.height,0,Nt,Ct,ie.data)}}else{X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,Ct,pt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,Nt,Ct,pt[lt]);for(let Bt=0;Bt<mt.length;Bt++){const Xt=mt[Bt];X?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Nt,Ct,Xt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,jt,Nt,Ct,Xt.image[lt])}}}d(T)&&p(i.TEXTURE_CUBE_MAP),$.__version=it.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function nt(I,T,W,j,it,$){const Et=s.convert(W.format,W.colorSpace),dt=s.convert(W.type),At=_(W.internalFormat,Et,dt,W.colorSpace),Tt=n.get(T),at=n.get(W);if(at.__renderTarget=T,!Tt.__hasExternalTextures){const pt=Math.max(1,T.width>>$),Dt=Math.max(1,T.height>>$);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,$,At,pt,Dt,T.depth,0,Et,dt,null):e.texImage2D(it,$,At,pt,Dt,0,Et,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Pt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,it,at.__webglTexture,0,U(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,it,at.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(I,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const j=T.depthTexture,it=j&&j.isDepthTexture?j.type:null,$=S(T.stencilBuffer,it),Et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,U(T),$,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,U(T),$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,I)}else{const j=T.textures;for(let it=0;it<j.length;it++){const $=j[it],Et=s.convert($.format,$.colorSpace),dt=s.convert($.type),At=_($.internalFormat,Et,dt,$.colorSpace);Pt(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,U(T),At,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,U(T),At,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,At,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(I,T,W){const j=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(T.depthTexture);if(it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j){if(it.__webglInit===void 0&&(it.__webglInit=!0,T.depthTexture.addEventListener("dispose",M)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),q(i.TEXTURE_CUBE_MAP,T.depthTexture);const Tt=s.convert(T.depthTexture.format),at=s.convert(T.depthTexture.type);let pt;T.depthTexture.format===Un?pt=i.DEPTH_COMPONENT24:T.depthTexture.format===si&&(pt=i.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,pt,T.width,T.height,0,Tt,at,null)}}else B(T.depthTexture,0);const $=it.__webglTexture,Et=U(T),dt=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,At=T.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Un)Pt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,dt,$,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,At,dt,$,0);else if(T.depthTexture.format===si)Pt(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,dt,$,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,At,dt,$,0);else throw new Error("Unknown depthTexture format")}function bt(I){const T=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=j}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let j=0;j<6;j++)ft(T.__webglFramebuffer[j],I,j);else{const j=I.texture.mipmaps;j&&j.length>0?ft(T.__webglFramebuffer[0],I,0):ft(T.__webglFramebuffer,I,0)}else if(W){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=i.createRenderbuffer(),xt(T.__webglDepthbuffer[j],I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,$)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),xt(T.__webglDepthbuffer,I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(I,T,W){const j=n.get(I);T!==void 0&&nt(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&bt(I)}function vt(I){const T=I.texture,W=n.get(I),j=n.get(T);I.addEventListener("dispose",E);const it=I.textures,$=I.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,a.memory.textures++),$){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let At=0;At<T.mipmaps.length;At++)W.__webglFramebuffer[dt][At]=i.createFramebuffer()}else W.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)W.__webglFramebuffer[dt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Et)for(let dt=0,At=it.length;dt<At;dt++){const Tt=n.get(it[dt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Pt(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){const At=it[dt];W.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);const Tt=s.convert(At.format,At.colorSpace),at=s.convert(At.type),pt=_(At.internalFormat,Tt,at,At.colorSpace,I.isXRRenderTarget===!0),Dt=U(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),q(i.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)nt(W.__webglFramebuffer[dt][At],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,At);else nt(W.__webglFramebuffer[dt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);d(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,At=it.length;dt<At;dt++){const Tt=it[dt],at=n.get(Tt);let pt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,at.__webglTexture),q(pt,Tt),nt(W.__webglFramebuffer,I,Tt,i.COLOR_ATTACHMENT0+dt,pt,0),d(Tt)&&p(pt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(dt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),q(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)nt(W.__webglFramebuffer[At],I,T,i.COLOR_ATTACHMENT0,dt,At);else nt(W.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,dt,0);d(T)&&p(dt),e.unbindTexture()}I.depthBuffer&&bt(I)}function et(I){const T=I.textures;for(let W=0,j=T.length;W<j;W++){const it=T[W];if(d(it)){const $=x(I),Et=n.get(it).__webglTexture;e.bindTexture($,Et),p($),e.unbindTexture()}}}const rt=[],Z=[];function ct(I){if(I.samples>0){if(Pt(I)===!1){const T=I.textures,W=I.width,j=I.height;let it=i.COLOR_BUFFER_BIT;const $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(I),dt=T.length>1;if(dt)for(let Tt=0;Tt<T.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const At=I.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);const at=n.get(T[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,it,i.NEAREST),l===!0&&(rt.length=0,Z.length=0,rt.push(i.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(rt.push($),Z.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Tt=0;Tt<T.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);const at=n.get(T[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function U(I){return Math.min(r.maxSamples,I.samples)}function Pt(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(I){const T=a.render.frame;f.get(I)!==T&&(f.set(I,T),I.update())}function St(I,T){const W=I.colorSpace,j=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==ki&&W!==Xn&&(te.getTransfer(W)===re?(j!==Ze||it!==Ge)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",W)),T}function _t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=N,this.rebindTextures=Ut,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $_(i,t){function e(n,r=Xn){let s;const a=te.getTransfer(r);if(n===Ge)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===Ye)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Ze)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===Fo)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Va||n===Ha||n===Ga)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===ja||n===qa||n===Ya||n===Za||n===Ja)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wa||n===Xa)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ja)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return s.COMPRESSED_R11_EAC;if(n===Ya)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return s.COMPRESSED_RG11_EAC;if(n===Ja)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Ka||n===Qa||n===to||n===eo||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===ho)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$a)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===fo||n===po)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===uo)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Mh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:K_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e1 extends Nn{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",d=new t1,p={},x=e.getContextAttributes();let _=null,S=null;const w=[],M=[],E=new gt;let y=null;const b=new Ne;b.viewport=new fe;const L=new Ne;L.viewport=new fe;const A=[b,L],C=new Qd;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=w[G];return J===void 0&&(J=new Zs,w[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=w[G];return J===void 0&&(J=new Zs,w[G]=J),J.getGripSpace()},this.getHand=function(G){let J=w[G];return J===void 0&&(J=new Zs,w[G]=J),J.getHandSpace()};function B(G){const J=M.indexOf(G.inputSource);if(J===-1)return;const nt=w[J];nt!==void 0&&(nt.update(G.inputSource,G.frame,c||a),nt.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",O);for(let G=0;G<w.length;G++){const J=M[G];J!==null&&(M[G]=null,w[G].disconnect(J))}P=null,D=null,d.reset();for(const G in p)delete p[G];t.setRenderTarget(_),m=null,h=null,u=null,r=null,S=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",z),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,xt=null,ft=null;x.depth&&(ft=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?si:Un,xt=x.stencil?_r:_n);const bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(bt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new gn(h.textureWidth,h.textureHeight,{format:Ze,type:Ge,depthTexture:new yr(h.textureWidth,h.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new gn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function O(G){for(let J=0;J<G.removed.length;J++){const nt=G.removed[J],xt=M.indexOf(nt);xt>=0&&(M[xt]=null,w[xt].disconnect(nt))}for(let J=0;J<G.added.length;J++){const nt=G.added[J];let xt=M.indexOf(nt);if(xt===-1){for(let bt=0;bt<w.length;bt++)if(bt>=M.length){M.push(nt),xt=bt;break}else if(M[bt]===null){M[bt]=nt,xt=bt;break}if(xt===-1)break}const ft=w[xt];ft&&ft.connect(nt)}}const N=new H,F=new H;function k(G,J,nt){N.setFromMatrixPosition(J.matrixWorld),F.setFromMatrixPosition(nt.matrixWorld);const xt=N.distanceTo(F),ft=J.projectionMatrix.elements,bt=nt.projectionMatrix.elements,Ut=ft[14]/(ft[10]-1),vt=ft[14]/(ft[10]+1),et=(ft[9]+1)/ft[5],rt=(ft[9]-1)/ft[5],Z=(ft[8]-1)/ft[0],ct=(bt[8]+1)/bt[0],U=Ut*Z,Pt=Ut*ct,yt=xt/(-Z+ct),St=yt*-Z;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(St),G.translateZ(yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ft[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _t=Ut+yt,I=vt+yt,T=U-St,W=Pt+(xt-St),j=et*vt/I*_t,it=rt*vt/I*_t;G.projectionMatrix.makePerspective(T,W,j,it,_t,I),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function V(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let J=G.near,nt=G.far;d.texture!==null&&(d.depthNear>0&&(J=d.depthNear),d.depthFar>0&&(nt=d.depthFar)),C.near=L.near=b.near=J,C.far=L.far=b.far=nt,(P!==C.near||D!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,D=C.far),C.layers.mask=G.layers.mask|6,b.layers.mask=C.layers.mask&-5,L.layers.mask=C.layers.mask&-3;const xt=G.parent,ft=C.cameras;V(C,xt);for(let bt=0;bt<ft.length;bt++)V(ft[bt],xt);ft.length===2?k(C,b,L):C.projectionMatrix.copy(b.projectionMatrix),q(G,C,xt)};function q(G,J,nt){nt===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(nt.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(C)},this.getCameraTexture=function(G){return p[G]};let ot=null;function ht(G,J){if(f=J.getViewerPose(c||a),g=J,f!==null){const nt=f.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let xt=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,xt=!0);for(let vt=0;vt<nt.length;vt++){const et=nt[vt];let rt=null;if(m!==null)rt=m.getViewport(et);else{const ct=u.getViewSubImage(h,et);rt=ct.viewport,vt===0&&(t.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(S))}let Z=A[vt];Z===void 0&&(Z=new Ne,Z.layers.enable(vt),Z.viewport=new fe,A[vt]=Z),Z.matrix.fromArray(et.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(et.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(rt.x,rt.y,rt.width,rt.height),vt===0&&(C.matrix.copy(Z.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xt===!0&&C.cameras.push(Z)}const ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const vt=u.getDepthInformation(nt[0]);vt&&vt.isValid&&vt.texture&&d.init(vt,r.renderState)}if(ft&&ft.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let vt=0;vt<nt.length;vt++){const et=nt[vt].camera;if(et){let rt=p[et];rt||(rt=new Mh,p[et]=rt);const Z=u.getCameraImage(et);rt.sourceTexture=Z}}}}for(let nt=0;nt<w.length;nt++){const xt=M[nt],ft=w[nt];xt!==null&&ft!==void 0&&ft.update(xt,J,c||a)}ot&&ot(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ut=new Hh;ut.setAnimationLoop(ht),this.setAnimationLoop=function(G){ot=G},this.dispose=function(){}}}const ei=new ln,n1=new Qt;function i1(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Uh(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,x,_,S){p.isMeshBasicMaterial?s(d,p):p.isMeshLambertMaterial?(s(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),f(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,S)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),v(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,x,_):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===ke&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===ke&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=t.get(p),_=x.envMap,S=x.envMapRotation;_&&(d.envMap.value=_,ei.copy(S),ei.x*=-1,ei.y*=-1,ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),d.envMapRotation.value.setFromMatrix4(n1.makeRotationFromEuler(ei)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,x,_){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=_*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function f(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){const x=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function r1(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const S=_.program;n.uniformBlockBinding(x,S)}function c(x,_){let S=r[x.id];S===void 0&&(g(x),S=f(x),r[x.id]=S,x.addEventListener("dispose",d));const w=_.program;n.updateUBOMapping(x,w);const M=t.render.frame;s[x.id]!==M&&(h(x),s[x.id]=M)}function f(x){const _=u();x.__bindingPointIndex=_;const S=i.createBuffer(),w=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],S=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,E=S.length;M<E;M++){const y=Array.isArray(S[M])?S[M]:[S[M]];for(let b=0,L=y.length;b<L;b++){const A=y[b];if(m(A,M,b,w)===!0){const C=A.__offset,P=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let B=0;B<P.length;B++){const z=P[B],O=v(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,C+D,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,_,S,w){const M=x.value,E=_+"_"+S;if(w[E]===void 0)return typeof M=="number"||typeof M=="boolean"?w[E]=M:w[E]=M.clone(),!0;{const y=w[E];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return w[E]=M,!0}else if(y.equals(M)===!1)return y.copy(M),!0}return!1}function g(x){const _=x.uniforms;let S=0;const w=16;for(let E=0,y=_.length;E<y;E++){const b=Array.isArray(_[E])?_[E]:[_[E]];for(let L=0,A=b.length;L<A;L++){const C=b[L],P=Array.isArray(C.value)?C.value:[C.value];for(let D=0,B=P.length;D<B;D++){const z=P[D],O=v(z),N=S%w,F=N%O.boundary,k=N+F;S+=F,k!==0&&w-k<O.storage&&(S+=w-k),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=O.storage}}}const M=S%w;return M>0&&(S+=w-M),x.__size=S,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Vt("WebGLRenderer: Unsupported uniform value type.",x),_}function d(x){const _=x.target;_.removeEventListener("dispose",d);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const s1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function a1(){return fn===null&&(fn=new Yo(s1,16,16,Bi,Dn),fn.name="DFG_LUT",fn.minFilter=Le,fn.magFilter=Le,fn.wrapS=Rn,fn.wrapT=Rn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class o1{constructor(t={}){const{canvas:e=tf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Ge}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=m,d=new Set([ko,Bo,Oo]),p=new Set([Ge,_n,gr,_r,Uo,No]),x=new Uint32Array(4),_=new Int32Array(4);let S=null,w=null;const M=[],E=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1;this._outputColorSpace=Be;let A=0,C=0,P=null,D=-1,B=null;const z=new fe,O=new fe;let N=null;const F=new Jt(0);let k=0,V=e.width,q=e.height,ot=1,ht=null,ut=null;const G=new fe(0,0,V,q),J=new fe(0,0,V,q);let nt=!1;const xt=new Ls;let ft=!1,bt=!1;const Ut=new Qt,vt=new H,et=new fe,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function ct(){return P===null?ot:1}let U=n;function Pt(R,Y){return e.getContext(R,Y)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Io}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",ie,!1),U===null){const Y="webgl2";if(U=Pt(Y,R),U===null)throw Pt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Wt("WebGLRenderer: "+R.message),R}let yt,St,_t,I,T,W,j,it,$,Et,dt,At,Tt,at,pt,Dt,Nt,Ct,jt,X,wt,Mt,Ft;function mt(){yt=new og(U),yt.init(),wt=new $_(U,yt),St=new Qm(U,yt,t,wt),_t=new Z_(U,yt),St.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),I=new hg(U),T=new N_,W=new J_(U,yt,_t,T,St,wt,I),j=new ag(b),it=new mp(U),Mt=new $m(U,it),$=new lg(U,it,I,Mt),Et=new fg(U,$,it,Mt,I),Ct=new ug(U,St,W),pt=new tg(T),dt=new U_(b,j,yt,St,Mt,pt),At=new i1(b,T),Tt=new O_,at=new G_(yt),Nt=new Jm(b,j,_t,Et,g,l),Dt=new Y_(b,Et,St),Ft=new r1(U,I,St,_t),jt=new Km(U,yt,I),X=new cg(U,yt,I),I.programs=dt.programs,b.capabilities=St,b.extensions=yt,b.properties=T,b.renderLists=Tt,b.shadowMap=Dt,b.state=_t,b.info=I}mt(),v!==Ge&&(y=new pg(v,e.width,e.height,r,s));const lt=new e1(b,U);this.xr=lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(R){R!==void 0&&(ot=R,this.setSize(V,q,!1))},this.getSize=function(R){return R.set(V,q)},this.setSize=function(R,Y,st=!0){if(lt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,q=Y,e.width=Math.floor(R*ot),e.height=Math.floor(Y*ot),st===!0&&(e.style.width=R+"px",e.style.height=Y+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(V*ot,q*ot).floor()},this.setDrawingBufferSize=function(R,Y,st){V=R,q=Y,ot=st,e.width=Math.floor(R*st),e.height=Math.floor(Y*st),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(v===Ge){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,Y,st,tt){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,Y,st,tt),_t.viewport(z.copy(G).multiplyScalar(ot).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,Y,st,tt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,st,tt),_t.scissor(O.copy(J).multiplyScalar(ot).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(R){_t.setScissorTest(nt=R)},this.setOpaqueSort=function(R){ht=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,st=!0){let tt=0;if(R){let Q=!1;if(P!==null){const It=P.texture.format;Q=d.has(It)}if(Q){const It=P.texture.type,Ot=p.has(It),Lt=Nt.getClearColor(),kt=Nt.getClearAlpha(),Ht=Lt.r,qt=Lt.g,Kt=Lt.b;Ot?(x[0]=Ht,x[1]=qt,x[2]=Kt,x[3]=kt,U.clearBufferuiv(U.COLOR,0,x)):(_[0]=Ht,_[1]=qt,_[2]=Kt,_[3]=kt,U.clearBufferiv(U.COLOR,0,_))}else tt|=U.COLOR_BUFFER_BIT}Y&&(tt|=U.DEPTH_BUFFER_BIT),st&&(tt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&U.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Nt.dispose(),Tt.dispose(),at.dispose(),T.dispose(),j.dispose(),Et.dispose(),Mt.dispose(),Ft.dispose(),dt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ol),lt.removeEventListener("sessionend",ll),Yn.stop()};function Bt(R){R.preventDefault(),Ss("WebGLRenderer: Context Lost."),L=!0}function Xt(){Ss("WebGLRenderer: Context Restored."),L=!1;const R=I.autoReset,Y=Dt.enabled,st=Dt.autoUpdate,tt=Dt.needsUpdate,Q=Dt.type;mt(),I.autoReset=R,Dt.enabled=Y,Dt.autoUpdate=st,Dt.needsUpdate=tt,Dt.type=Q}function ie(R){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ee(R){const Y=R.target;Y.removeEventListener("dispose",ee),We(Y)}function We(R){Xe(R),T.remove(R)}function Xe(R){const Y=T.get(R).programs;Y!==void 0&&(Y.forEach(function(st){dt.releaseProgram(st)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,st,tt,Q,It){Y===null&&(Y=rt);const Ot=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=cu(R,Y,st,tt,Q);_t.setMaterial(tt,Ot);let kt=st.index,Ht=1;if(tt.wireframe===!0){if(kt=$.getWireframeAttribute(st),kt===void 0)return;Ht=2}const qt=st.drawRange,Kt=st.attributes.position;let Gt=qt.start*Ht,le=(qt.start+qt.count)*Ht;It!==null&&(Gt=Math.max(Gt,It.start*Ht),le=Math.min(le,(It.start+It.count)*Ht)),kt!==null?(Gt=Math.max(Gt,0),le=Math.min(le,kt.count)):Kt!=null&&(Gt=Math.max(Gt,0),le=Math.min(le,Kt.count));const ge=le-Gt;if(ge<0||ge===1/0)return;Mt.setup(Q,tt,Lt,st,kt);let me,ce=jt;if(kt!==null&&(me=it.get(kt),ce=X,ce.setIndex(me)),Q.isMesh)tt.wireframe===!0?(_t.setLineWidth(tt.wireframeLinewidth*ct()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(Q.isLine){let Ce=tt.linewidth;Ce===void 0&&(Ce=1),_t.setLineWidth(Ce*ct()),Q.isLineSegments?ce.setMode(U.LINES):Q.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else Q.isPoints?ce.setMode(U.POINTS):Q.isSprite&&ce.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ce=Q._multiDrawStarts,zt=Q._multiDrawCounts,ze=Q._multiDrawCount,ne=kt?it.get(kt).bytesPerElement:1,Qe=T.get(tt).currentProgram.getUniforms();for(let hn=0;hn<ze;hn++)Qe.setValue(U,"_gl_DrawID",hn),ce.render(Ce[hn]/ne,zt[hn])}else if(Q.isInstancedMesh)ce.renderInstances(Gt,ge,Q.count);else if(st.isInstancedBufferGeometry){const Ce=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,zt=Math.min(st.instanceCount,Ce);ce.renderInstances(Gt,ge,zt)}else ce.render(Gt,ge)};function $i(R,Y,st){R.transparent===!0&&R.side===Cn&&R.forceSinglePass===!1?(R.side=ke,R.needsUpdate=!0,Rr(R,Y,st),R.side=Ln,R.needsUpdate=!0,Rr(R,Y,st),R.side=Cn):Rr(R,Y,st)}this.compile=function(R,Y,st=null){st===null&&(st=R),w=at.get(st),w.init(Y),E.push(w),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),R!==st&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights();const tt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const It=Q.material;if(It)if(Array.isArray(It))for(let Ot=0;Ot<It.length;Ot++){const Lt=It[Ot];$i(Lt,st,Q),tt.add(Lt)}else $i(It,st,Q),tt.add(It)}),w=E.pop(),tt},this.compileAsync=function(R,Y,st=null){const tt=this.compile(R,Y,st);return new Promise(Q=>{function It(){if(tt.forEach(function(Ot){T.get(Ot).currentProgram.isReady()&&tt.delete(Ot)}),tt.size===0){Q(R);return}setTimeout(It,10)}yt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Bs=null;function lu(R){Bs&&Bs(R)}function ol(){Yn.stop()}function ll(){Yn.start()}const Yn=new Hh;Yn.setAnimationLoop(lu),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(R){Bs=R,lt.setAnimationLoop(R),R===null?Yn.stop():Yn.start()},lt.addEventListener("sessionstart",ol),lt.addEventListener("sessionend",ll),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const st=lt.enabled===!0&&lt.isPresenting===!0,tt=y!==null&&(P===null||st)&&y.begin(b,P);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Y),Y=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,Y,P),w=at.get(R,E.length),w.init(Y),E.push(w),Ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),xt.setFromProjectionMatrix(Ut,an,Y.reversedDepth),bt=this.localClippingEnabled,ft=pt.init(this.clippingPlanes,bt),S=Tt.get(R,M.length),S.init(),M.push(S),lt.enabled===!0&&lt.isPresenting===!0){const Ot=b.xr.getDepthSensingMesh();Ot!==null&&ks(Ot,Y,-1/0,b.sortObjects)}ks(R,Y,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ht,ut),Z=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Z&&Nt.addToRenderList(S,R),this.info.render.frame++,ft===!0&&pt.beginShadows();const Q=w.state.shadowsArray;if(Dt.render(Q,R,Y),ft===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&y.hasRenderPass())===!1){const Ot=S.opaque,Lt=S.transmissive;if(w.setupLights(),Y.isArrayCamera){const kt=Y.cameras;if(Lt.length>0)for(let Ht=0,qt=kt.length;Ht<qt;Ht++){const Kt=kt[Ht];hl(Ot,Lt,R,Kt)}Z&&Nt.render(R);for(let Ht=0,qt=kt.length;Ht<qt;Ht++){const Kt=kt[Ht];cl(S,R,Kt,Kt.viewport)}}else Lt.length>0&&hl(Ot,Lt,R,Y),Z&&Nt.render(R),cl(S,R,Y)}P!==null&&C===0&&(W.updateMultisampleRenderTarget(P),W.updateRenderTargetMipmap(P)),tt&&y.end(b),R.isScene===!0&&R.onAfterRender(b,R,Y),Mt.resetDefaultState(),D=-1,B=null,E.pop(),E.length>0?(w=E[E.length-1],ft===!0&&pt.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,M.pop(),M.length>0?S=M[M.length-1]:S=null};function ks(R,Y,st,tt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xt.intersectsSprite(R)){tt&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Ot=Et.update(R),Lt=R.material;Lt.visible&&S.push(R,Ot,Lt,st,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||xt.intersectsObject(R))){const Ot=Et.update(R),Lt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),et.copy(Ot.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Lt)){const kt=Ot.groups;for(let Ht=0,qt=kt.length;Ht<qt;Ht++){const Kt=kt[Ht],Gt=Lt[Kt.materialIndex];Gt&&Gt.visible&&S.push(R,Ot,Gt,st,et.z,Kt)}}else Lt.visible&&S.push(R,Ot,Lt,st,et.z,null)}}const It=R.children;for(let Ot=0,Lt=It.length;Ot<Lt;Ot++)ks(It[Ot],Y,st,tt)}function cl(R,Y,st,tt){const{opaque:Q,transmissive:It,transparent:Ot}=R;w.setupLightsView(st),ft===!0&&pt.setGlobalState(b.clippingPlanes,st),tt&&_t.viewport(z.copy(tt)),Q.length>0&&Cr(Q,Y,st),It.length>0&&Cr(It,Y,st),Ot.length>0&&Cr(Ot,Y,st),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function hl(R,Y,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[tt.id]===void 0){const Gt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[tt.id]=new gn(1,1,{generateMipmaps:!0,type:Gt?Dn:Ge,minFilter:ri,samples:St.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const It=w.state.transmissionRenderTarget[tt.id],Ot=tt.viewport||z;It.setSize(Ot.z*b.transmissionResolutionScale,Ot.w*b.transmissionResolutionScale);const Lt=b.getRenderTarget(),kt=b.getActiveCubeFace(),Ht=b.getActiveMipmapLevel();b.setRenderTarget(It),b.getClearColor(F),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),Z&&Nt.render(st);const qt=b.toneMapping;b.toneMapping=mn;const Kt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),w.setupLightsView(tt),ft===!0&&pt.setGlobalState(b.clippingPlanes,tt),Cr(R,st,tt),W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let le=0,ge=Y.length;le<ge;le++){const me=Y[le],{object:ce,geometry:Ce,material:zt,group:ze}=me;if(zt.side===Cn&&ce.layers.test(tt.layers)){const ne=zt.side;zt.side=ke,zt.needsUpdate=!0,ul(ce,st,tt,Ce,zt,ze),zt.side=ne,zt.needsUpdate=!0,Gt=!0}}Gt===!0&&(W.updateMultisampleRenderTarget(It),W.updateRenderTargetMipmap(It))}b.setRenderTarget(Lt,kt,Ht),b.setClearColor(F,k),Kt!==void 0&&(tt.viewport=Kt),b.toneMapping=qt}function Cr(R,Y,st){const tt=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,It=R.length;Q<It;Q++){const Ot=R[Q],{object:Lt,geometry:kt,group:Ht}=Ot;let qt=Ot.material;qt.allowOverride===!0&&tt!==null&&(qt=tt),Lt.layers.test(st.layers)&&ul(Lt,Y,st,kt,qt,Ht)}}function ul(R,Y,st,tt,Q,It){R.onBeforeRender(b,Y,st,tt,Q,It),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(b,Y,st,tt,R,It),Q.transparent===!0&&Q.side===Cn&&Q.forceSinglePass===!1?(Q.side=ke,Q.needsUpdate=!0,b.renderBufferDirect(st,Y,tt,Q,R,It),Q.side=Ln,Q.needsUpdate=!0,b.renderBufferDirect(st,Y,tt,Q,R,It),Q.side=Cn):b.renderBufferDirect(st,Y,tt,Q,R,It),R.onAfterRender(b,Y,st,tt,Q,It)}function Rr(R,Y,st){Y.isScene!==!0&&(Y=rt);const tt=T.get(R),Q=w.state.lights,It=w.state.shadowsArray,Ot=Q.state.version,Lt=dt.getParameters(R,Q.state,It,Y,st),kt=dt.getProgramCacheKey(Lt);let Ht=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,tt.fog=Y.fog;const qt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=j.get(R.envMap||tt.environment,qt),tt.envMapRotation=tt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ht===void 0&&(R.addEventListener("dispose",ee),Ht=new Map,tt.programs=Ht);let Kt=Ht.get(kt);if(Kt!==void 0){if(tt.currentProgram===Kt&&tt.lightsStateVersion===Ot)return dl(R,Lt),Kt}else Lt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Lt,b),Kt=dt.acquireProgram(Lt,kt),Ht.set(kt,Kt),tt.uniforms=Lt.uniforms;const Gt=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=pt.uniform),dl(R,Lt),tt.needsLights=uu(R),tt.lightsStateVersion=Ot,tt.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.currentProgram=Kt,tt.uniformsList=null,Kt}function fl(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=vs.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function dl(R,Y){const st=T.get(R);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function cu(R,Y,st,tt,Q){Y.isScene!==!0&&(Y=rt),W.resetTextureUnits();const It=Y.fog,Ot=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?Y.environment:null,Lt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ki,kt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Ht=j.get(tt.envMap||Ot,kt),qt=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Kt=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Gt=!!st.morphAttributes.position,le=!!st.morphAttributes.normal,ge=!!st.morphAttributes.color;let me=mn;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=b.toneMapping);const ce=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ce=ce!==void 0?ce.length:0,zt=T.get(tt),ze=w.state.lights;if(ft===!0&&(bt===!0||R!==B)){const be=R===B&&tt.id===D;pt.setState(tt,R,be)}let ne=!1;tt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ze.state.version||zt.outputColorSpace!==Lt||Q.isBatchedMesh&&zt.batching===!1||!Q.isBatchedMesh&&zt.batching===!0||Q.isBatchedMesh&&zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&zt.instancing===!1||!Q.isInstancedMesh&&zt.instancing===!0||Q.isSkinnedMesh&&zt.skinning===!1||!Q.isSkinnedMesh&&zt.skinning===!0||Q.isInstancedMesh&&zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&zt.instancingMorph===!1&&Q.morphTexture!==null||zt.envMap!==Ht||tt.fog===!0&&zt.fog!==It||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==pt.numPlanes||zt.numIntersection!==pt.numIntersection)||zt.vertexAlphas!==qt||zt.vertexTangents!==Kt||zt.morphTargets!==Gt||zt.morphNormals!==le||zt.morphColors!==ge||zt.toneMapping!==me||zt.morphTargetsCount!==Ce)&&(ne=!0):(ne=!0,zt.__version=tt.version);let Qe=zt.currentProgram;ne===!0&&(Qe=Rr(tt,Y,Q));let hn=!1,Zn=!1,fi=!1;const ue=Qe.getUniforms(),Te=zt.uniforms;if(_t.useProgram(Qe.program)&&(hn=!0,Zn=!0,fi=!0),tt.id!==D&&(D=tt.id,Zn=!0),hn||B!==R){_t.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",R.projectionMatrix),ue.setValue(U,"viewMatrix",R.matrixWorldInverse);const On=ue.map.cameraPosition;On!==void 0&&On.setValue(U,vt.setFromMatrixPosition(R.matrixWorld)),St.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ue.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Zn=!0,fi=!0)}if(zt.needsLights&&(ze.state.directionalShadowMap.length>0&&ue.setValue(U,"directionalShadowMap",ze.state.directionalShadowMap,W),ze.state.spotShadowMap.length>0&&ue.setValue(U,"spotShadowMap",ze.state.spotShadowMap,W),ze.state.pointShadowMap.length>0&&ue.setValue(U,"pointShadowMap",ze.state.pointShadowMap,W)),Q.isSkinnedMesh){ue.setOptional(U,Q,"bindMatrix"),ue.setOptional(U,Q,"bindMatrixInverse");const be=Q.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ue.setValue(U,"boneTexture",be.boneTexture,W))}Q.isBatchedMesh&&(ue.setOptional(U,Q,"batchingTexture"),ue.setValue(U,"batchingTexture",Q._matricesTexture,W),ue.setOptional(U,Q,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",Q._indirectTexture,W),ue.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",Q._colorsTexture,W));const Fn=st.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Ct.update(Q,st,Qe),(Zn||zt.receiveShadow!==Q.receiveShadow)&&(zt.receiveShadow=Q.receiveShadow,ue.setValue(U,"receiveShadow",Q.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&Y.environment!==null&&(Te.envMapIntensity.value=Y.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=a1()),Zn&&(ue.setValue(U,"toneMappingExposure",b.toneMappingExposure),zt.needsLights&&hu(Te,fi),It&&tt.fog===!0&&At.refreshFogUniforms(Te,It),At.refreshMaterialUniforms(Te,tt,ot,q,w.state.transmissionRenderTarget[R.id]),vs.upload(U,fl(zt),Te,W)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(vs.upload(U,fl(zt),Te,W),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ue.setValue(U,"center",Q.center),ue.setValue(U,"modelViewMatrix",Q.modelViewMatrix),ue.setValue(U,"normalMatrix",Q.normalMatrix),ue.setValue(U,"modelMatrix",Q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const be=tt.uniformsGroups;for(let On=0,di=be.length;On<di;On++){const pl=be[On];Ft.update(pl,Qe),Ft.bind(pl,Qe)}}return Qe}function hu(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function uu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,Y,st){const tt=T.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=Y,T.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const st=T.get(R);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const fu=U.createFramebuffer();this.setRenderTarget=function(R,Y=0,st=0){P=R,A=Y,C=st;let tt=null,Q=!1,It=!1;if(R){const Lt=T.get(R);if(Lt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(U.FRAMEBUFFER,Lt.__webglFramebuffer),z.copy(R.viewport),O.copy(R.scissor),N=R.scissorTest,_t.viewport(z),_t.scissor(O),_t.setScissorTest(N),D=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Lt.__hasExternalTextures)W.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Lt.__boundDepthTexture!==qt){if(qt!==null&&T.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(It=!0);const Ht=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ht[Y])?tt=Ht[Y][st]:tt=Ht[Y],Q=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?tt=T.get(R).__webglMultisampledFramebuffer:Array.isArray(Ht)?tt=Ht[st]:tt=Ht,z.copy(R.viewport),O.copy(R.scissor),N=R.scissorTest}else z.copy(G).multiplyScalar(ot).floor(),O.copy(J).multiplyScalar(ot).floor(),N=nt;if(st!==0&&(tt=fu),_t.bindFramebuffer(U.FRAMEBUFFER,tt)&&_t.drawBuffers(R,tt),_t.viewport(z),_t.scissor(O),_t.setScissorTest(N),Q){const Lt=T.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,st)}else if(It){const Lt=Y;for(let kt=0;kt<R.textures.length;kt++){const Ht=T.get(R.textures[kt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+kt,Ht.__webglTexture,st,Lt)}}else if(R!==null&&st!==0){const Lt=T.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(R,Y,st,tt,Q,It,Ot,Lt=0){if(!(R&&R.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){_t.bindFramebuffer(U.FRAMEBUFFER,kt);try{const Ht=R.textures[Lt],qt=Ht.format,Kt=Ht.type;if(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Lt),!St.textureFormatReadable(qt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Kt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-tt&&st>=0&&st<=R.height-Q&&U.readPixels(Y,st,tt,Q,wt.convert(qt),wt.convert(Kt),It)}finally{const Ht=P!==null?T.get(P).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(R,Y,st,tt,Q,It,Ot,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt)if(Y>=0&&Y<=R.width-tt&&st>=0&&st<=R.height-Q){_t.bindFramebuffer(U.FRAMEBUFFER,kt);const Ht=R.textures[Lt],qt=Ht.format,Kt=Ht.type;if(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Lt),!St.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Gt),U.bufferData(U.PIXEL_PACK_BUFFER,It.byteLength,U.STREAM_READ),U.readPixels(Y,st,tt,Q,wt.convert(qt),wt.convert(Kt),0);const le=P!==null?T.get(P).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,le);const ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ef(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,It),U.deleteBuffer(Gt),U.deleteSync(ge),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,st=0){const tt=Math.pow(2,-st),Q=Math.floor(R.image.width*tt),It=Math.floor(R.image.height*tt),Ot=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;W.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,st,0,0,Ot,Lt,Q,It),_t.unbindTexture()};const du=U.createFramebuffer(),pu=U.createFramebuffer();this.copyTextureToTexture=function(R,Y,st=null,tt=null,Q=0,It=0){let Ot,Lt,kt,Ht,qt,Kt,Gt,le,ge;const me=R.isCompressedTexture?R.mipmaps[It]:R.image;if(st!==null)Ot=st.max.x-st.min.x,Lt=st.max.y-st.min.y,kt=st.isBox3?st.max.z-st.min.z:1,Ht=st.min.x,qt=st.min.y,Kt=st.isBox3?st.min.z:0;else{const Te=Math.pow(2,-Q);Ot=Math.floor(me.width*Te),Lt=Math.floor(me.height*Te),R.isDataArrayTexture?kt=me.depth:R.isData3DTexture?kt=Math.floor(me.depth*Te):kt=1,Ht=0,qt=0,Kt=0}tt!==null?(Gt=tt.x,le=tt.y,ge=tt.z):(Gt=0,le=0,ge=0);const ce=wt.convert(Y.format),Ce=wt.convert(Y.type);let zt;Y.isData3DTexture?(W.setTexture3D(Y,0),zt=U.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),zt=U.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),zt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const ze=U.getParameter(U.UNPACK_ROW_LENGTH),ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=U.getParameter(U.UNPACK_SKIP_PIXELS),hn=U.getParameter(U.UNPACK_SKIP_ROWS),Zn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);const fi=R.isDataArrayTexture||R.isData3DTexture,ue=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Te=T.get(R),Fn=T.get(Y),be=T.get(Te.__renderTarget),On=T.get(Fn.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,be.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let di=0;di<kt;di++)fi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(R).__webglTexture,Q,Kt+di),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,It,ge+di)),U.blitFramebuffer(Ht,qt,Ot,Lt,Gt,le,Ot,Lt,U.DEPTH_BUFFER_BIT,U.NEAREST);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||T.has(R)){const Te=T.get(R),Fn=T.get(Y);_t.bindFramebuffer(U.READ_FRAMEBUFFER,du),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,pu);for(let be=0;be<kt;be++)fi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,Q,Kt+be):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,Q),ue?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fn.__webglTexture,It,ge+be):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fn.__webglTexture,It),Q!==0?U.blitFramebuffer(Ht,qt,Ot,Lt,Gt,le,Ot,Lt,U.COLOR_BUFFER_BIT,U.NEAREST):ue?U.copyTexSubImage3D(zt,It,Gt,le,ge+be,Ht,qt,Ot,Lt):U.copyTexSubImage2D(zt,It,Gt,le,Ht,qt,Ot,Lt);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ue?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(zt,It,Gt,le,ge,Ot,Lt,kt,ce,Ce,me.data):Y.isCompressedArrayTexture?U.compressedTexSubImage3D(zt,It,Gt,le,ge,Ot,Lt,kt,ce,me.data):U.texSubImage3D(zt,It,Gt,le,ge,Ot,Lt,kt,ce,Ce,me):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,It,Gt,le,Ot,Lt,ce,Ce,me.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,It,Gt,le,me.width,me.height,ce,me.data):U.texSubImage2D(U.TEXTURE_2D,It,Gt,le,Ot,Lt,ce,Ce,me);U.pixelStorei(U.UNPACK_ROW_LENGTH,ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,hn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zn),It===0&&Y.generateMipmaps&&U.generateMipmap(zt),_t.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,_t.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Zi="0.11.14",l1=new Yt;function c1(i,t,e,n){const r=l1.set(i.normal.x,i.normal.y,i.normal.z,t.normal.x,t.normal.y,t.normal.z,e.normal.x,e.normal.y,e.normal.z);return n.set(-i.constant,-t.constant,-e.constant),n.applyMatrix3(r.invert()),n}class h1 extends Ls{constructor(){super(),this.points=Array(8).fill(0).map(()=>new H)}setFromProjectionMatrix(t,e=an){return super.setFromProjectionMatrix(t,e),this.calculateFrustumPoints(),this}calculateFrustumPoints(){const{planes:t,points:e}=this;[[t[0],t[3],t[4]],[t[1],t[3],t[4]],[t[0],t[2],t[4]],[t[1],t[2],t[4]],[t[0],t[3],t[5]],[t[1],t[3],t[5]],[t[0],t[2],t[5]],[t[1],t[2],t[5]]].forEach((n,r)=>{c1(n[0],n[1],n[2],e[r])})}}var Co=(i=>(i[i.none=0]="none",i[i.create=1]="create",i[i.remove=2]="remove",i))(Co||{});function u1(i,t,e,n){if(!i.isLeaf&&i.z>e)return 2;const r=i.distRatio;return i.isLeaf&&i.z<e&&r<=n?1:!i.isLeaf&&i.z>=t&&r>n?2:0}function Pi(i,t,e,n,r,s,a,o){const l=new li(i,t,e);return l.position.set(n,r,0),l.scale.set(s,a,o),l}function f1(i,t){const{x:e,y:n,z:r}=i,s=[],a=e*2,o=r+1,l=.25,c=.5,f=1;if(r===0&&t.projectionID==="4326"){const u=n,h=1,m=Pi(a,u,o,-.25,0,c,h,f),g=Pi(a+1,u,o,l,0,c,h,f);s.push(m,g)}else{const u=n*2,h=.5,m=Pi(a,u,o,-.25,l,c,h,f),g=Pi(a+1,u,o,l,l,c,h,f),v=Pi(a,u+1,o,-.25,-.25,c,h,f),d=Pi(a+1,u+1,o,l,-.25,c,h,f);s.push(m,g,v,d)}return s}const Hc=new H,Gc=new h1,d1=new Qt;class li extends de{constructor(t=0,e=0,n=0){super(),this.isTile=!0,this._isLoading=!1,this._root=this,this._sizeInWorld=-1,this._inFrustum=!1,this._isDirty=!1,this.x=t,this.y=e,this.z=n,this.name=`Tile ${n}-${t}-${e}`,this.up.set(0,0,1)}get model(){return this._model}get subTiles(){return this._subTiles}get distRatio(){var n,r;const t=new H().applyMatrix4(this.matrixWorld);t.setY(((r=(n=this.model)==null?void 0:n.geometry.boundingBox)==null?void 0:r.max.z)||0);const e=Hc.distanceTo(t)/this._sizeInWorld;return this.inFrustum?e*.8:e*2}get inFrustum(){return this._inFrustum}get isLeaf(){return!this.subTiles}get showing(){return!!this.model&&this.model.visible}set showing(t){this.model?(t&&this._updateShadow(),t!=this.showing&&(this.model.traverse(e=>e.layers.set(t?0:31)),this.model.visible=t,this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:t}))):console.assert(!t)}_needsLoad(t){var e;return t.downloadingThreads>=t.maxThreads?!1:this.model?!this._isDirty||!this.inFrustum?!1:!((e=this.subTiles)!=null&&e.some(n=>!n._isDirty)):!0}raycast(t){return this.inFrustum}getBBox(){var e;let t=9e3;return this.model&&(t=((e=this.model.geometry.boundingBox)==null?void 0:e.max.z)||0),new Ke(new H(-this.scale.x,-this.scale.y,-300),new H(this.scale.x,this.scale.y,t)).applyMatrix4(this.matrixWorld)}getTileSize(){if(this._sizeInWorld<0){const t=new H(-this.scale.x,-this.scale.y).applyMatrix4(this.matrixWorld),e=new H(this.scale.x,this.scale.y).applyMatrix4(this.matrixWorld);this._sizeInWorld=t.distanceTo(e),console.assert(this._sizeInWorld>10)}return this._sizeInWorld}update(t){var s;if(!this.parent||this._isLoading)return;this.parent instanceof li&&(this._root=this.parent._root),console.assert(this._root.z===0);const{loader:e,minLevel:n,camera:r}=t;if(this.z===0&&(r.getWorldPosition(Hc),Gc.setFromProjectionMatrix(d1.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse))),this._inFrustum=Gc.intersectsBox(this.getBBox()),this.z>=n&&this._needsLoad(e)){this.model?this._startModify(e):this._startLoad(e);return}this._updateShadow(),this.LOD(t),(s=this.subTiles)==null||s.forEach(a=>a.update(t))}_updateShadow(){this.model&&(this.model.castShadow=this._root.castShadow,this.model.receiveShadow=this._root.receiveShadow)}LOD(t){const{loader:e,minLevel:n,maxLevel:r,LODThreshold:s}=t,a=u1(this,n,r,s);if(a===Co.create){if(this.inFrustum&&(this.showing||this.z<=n)){const o=f1(this,e);this.add(...o),this._subTiles=o,this._subTiles.forEach(l=>{l.updateMatrixWorld(),l.updateMatrix(),l.getTileSize(),this._root.dispatchEvent({type:"tile-created",tile:l})})}}else a===Co.remove&&this.model&&(this.showing=!0,this.unloadSubTiles());return a}_checkVisible(){const t=this.parent;if(t instanceof li)if(t.model){const e=t.subTiles;if(e){const n=!e.some(r=>!r.model);e.forEach(r=>r.showing=n),t.showing=!n}}else this.showing=!0;return this}async _startLoad(t){console.assert(!this.model),this._isLoading=!0;try{const e=await t.load(this);this._model=e,e.geometry.computeBoundingBox(),this.add(e),this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:!0}),this.isLeaf&&this._checkVisible(),this._root.dispatchEvent({type:"tile-loaded",tile:this})}catch(e){console.error("Failed to load tile:",e)}finally{this._isLoading=!1}}async _startModify(t){if(console.assert(!!this.model),!!this.model){this._isLoading=!0;try{await t.update(this,this.model),this.model.geometry.computeBoundingBox(),this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:!0}),this._root.dispatchEvent({type:"tile-loaded",tile:this})}catch(e){console.error("Failed to modify tile:",e)}finally{this._isDirty=!1,this._isLoading=!1}}}reload(t=!0){return t?this.unload():(this.traverse(e=>{e instanceof li&&(e.model||e._isLoading)&&(e._isDirty=!0)}),this)}unload(){return this.unloadSubTiles(),this.unloadModel(),this}unloadModel(){return this.model&&(this.model.removeFromParent(),this.model.material.forEach(t=>{for(const e in t){const n=t[e];n&&n.isTexture&&n.dispose(),t.dispose()}}),this.model.material=[],this.model.geometry.dispose(),this._model=void 0,this._isDirty=!1,this._root.dispatchEvent({type:"tile-unload",tile:this})),this}unloadSubTiles(){var t;return(t=this.subTiles)==null||t.forEach(e=>{e.removeFromParent(),e.unloadModel(),e.unloadSubTiles()}),this._subTiles=void 0,this}}class p1 extends Nh{constructor(t={}){super({transparent:!1,side:Ln,...t})}}function us(...i){const t=i,e=t&&t.length>1&&t[0].constructor||null;if(!e)throw new Error("concatenateTypedArrays - incorrect quantity of arguments or arguments have incompatible data types");const n=t.reduce((a,o)=>a+o.length,0),r=new e(n);let s=0;for(const a of t)r.set(a,s),s+=a.length;return r}function m1(i,t,e,n){const r=g1(t),s=r.length,a=new Float32Array(s*6),o=new Float32Array(s*4),l=new t.constructor(s*6),c=new Float32Array(s*6);for(let u=0;u<s;u++)_1({edge:r[u],edgeIndex:u,attributes:i,skirtHeight:e,newPosition:a,newTexcoord0:o,newTriangles:l,newNormals:c});i.position.value=us(i.position.value,a),i.texcoord.value=us(i.texcoord.value,o),i.normal.value=us(i.normal.value,c);const f=us(t,l);return{attributes:i,indices:f}}function g1(i){const t=[],e=Array.isArray(i)?i:Array.from(i);for(let r=0;r<e.length;r+=3)t.push([e[r],e[r+1]],[e[r+1],e[r+2]],[e[r+2],e[r]]);t.sort(([r,s],[a,o])=>{const l=Math.min(r,s),c=Math.min(a,o);return l!==c?l-c:Math.max(r,s)-Math.max(a,o)});const n=[];for(let r=0;r<t.length;r++)r+1<t.length&&t[r][0]===t[r+1][1]&&t[r][1]===t[r+1][0]?r++:n.push(t[r]);return n}function _1({edge:i,edgeIndex:t,attributes:e,skirtHeight:n,newPosition:r,newTexcoord0:s,newTriangles:a,newNormals:o}){const l=e.position.value.length,c=t*2,f=c+1;r.set(e.position.value.subarray(i[0]*3,i[0]*3+3),c*3),r[c*3+2]=r[c*3+2]-n,r.set(e.position.value.subarray(i[1]*3,i[1]*3+3),f*3),r[f*3+2]=r[f*3+2]-n,s.set(e.texcoord.value.subarray(i[0]*2,i[0]*2+2),c*2),s.set(e.texcoord.value.subarray(i[1]*2,i[1]*2+2),f*2);const u=t*2*3;a[u]=i[0],a[u+1]=l/3+f,a[u+2]=i[1],a[u+3]=l/3+f,a[u+4]=i[0],a[u+5]=l/3+c,o[u]=0,o[u+1]=0,o[u+2]=1,o[u+3]=0,o[u+4]=0,o[u+5]=1}function v1(i){if(i.length<4)throw new Error(`DEM array must > 4, got ${i.length}!`);const t=Math.floor(Math.sqrt(i.length)),e=t,n=t,r=y1(n,e);return{attributes:x1(i,n,e,r),indices:r}}function x1(i,t,e,n){const r=e*t,s=1/(e-1),a=1/(t-1),o=new Float32Array(r*3),l=new Float32Array(r*2),c=e;let f=0;for(let u=0;u<t;u++){const h=u*a,m=(t-u-1)*c;for(let g=0;g<e;g++){const v=g*s;l[f*2]=v,l[f*2+1]=h,o[f*3]=v-.5,o[f*3+1]=h-.5,o[f*3+2]=i[m+g],f++}}return{position:{value:o,size:3},texcoord:{value:l,size:2},normal:{value:Yh(o,n),size:3}}}function y1(i,t){const e=6*(t-1)*(i-1),n=new Uint32Array(e);let r=0;for(let s=0;s<i-1;s++)for(let a=0;a<t-1;a++){const o=s*t+a,l=o+1,c=o+t,f=c+1,u=r*6;n[u]=o,n[u+1]=l,n[u+2]=c,n[u+3]=c,n[u+4]=l,n[u+5]=f,r++}return n}function Yh(i,t){const e=new Float32Array(i.length);for(let n=0;n<t.length;n+=3){const r=t[n]*3,s=t[n+1]*3,a=t[n+2]*3,o=i[s]-i[r],l=i[s+1]-i[r+1],c=i[s+2]-i[r+2],f=i[a]-i[r],u=i[a+1]-i[r+1],h=i[a+2]-i[r+2],m=l*h-c*u,g=c*f-o*h,v=o*u-l*f,d=1/Math.hypot(m,g,v);e[r]=e[s]=e[a]=m*d,e[r+1]=e[s+1]=e[a+1]=g*d,e[r+2]=e[s+2]=e[a+2]=v*d}return e}class M1{constructor(t=257){this.gridSize=t;const e=t-1;if(e&e-1)throw new Error(`Expected grid size to be 2^n+1, got ${t}.`);this.numTriangles=e*e*2-2,this.numParentTriangles=this.numTriangles-e*e,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let n=0;n<this.numTriangles;n++){let r=n+2,s=0,a=0,o=0,l=0,c=0,f=0;for(r&1?o=l=c=e:s=a=f=e;(r>>=1)>1;){const h=s+o>>1,m=a+l>>1;r&1?(o=s,l=a,s=c,a=f):(s=o,a=l,o=c,l=f),c=h,f=m}const u=n*4;this.coords[u+0]=s,this.coords[u+1]=a,this.coords[u+2]=o,this.coords[u+3]=l}}createTile(t){return new S1(t,this)}}class S1{constructor(t,e){const n=e.gridSize;if(t.length!==n*n)throw new Error(`Expected terrain data of length ${n*n} (${n} x ${n}), got ${t.length}.`);this.terrain=t,this.martini=e,this.errors=new Float32Array(t.length),this.update()}update(){const{numTriangles:t,numParentTriangles:e,coords:n,gridSize:r}=this.martini,{terrain:s,errors:a}=this;for(let o=t-1;o>=0;o--){const l=o*4,c=n[l+0],f=n[l+1],u=n[l+2],h=n[l+3],m=c+u>>1,g=f+h>>1,v=m+g-f,d=g+c-m,p=(s[f*r+c]+s[h*r+u])/2,x=g*r+m,_=Math.abs(p-s[x]);if(a[x]=Math.max(a[x],_),o<e){const S=(f+d>>1)*r+(c+v>>1),w=(h+d>>1)*r+(u+v>>1);a[x]=Math.max(a[x],a[S],a[w])}}}getGeometryData(t=0){const{gridSize:e,indices:n}=this.martini,{errors:r}=this;let s=0,a=0;const o=e-1;let l,c,f=0;n.fill(0);function u(x,_,S,w,M,E){const y=x+S>>1,b=_+w>>1;Math.abs(x-M)+Math.abs(_-E)>1&&r[b*e+y]>t?(u(M,E,x,_,y,b),u(S,w,M,E,y,b)):(l=_*e+x,c=w*e+S,f=E*e+M,n[l]===0&&(n[l]=++s),n[c]===0&&(n[c]=++s),n[f]===0&&(n[f]=++s),a++)}u(0,0,o,o,o,0),u(o,o,0,0,0,o);const h=s*2,m=a*3,g=new Uint16Array(h),v=new Uint32Array(m);let d=0;function p(x,_,S,w,M,E){const y=x+S>>1,b=_+w>>1;if(Math.abs(x-M)+Math.abs(_-E)>1&&r[b*e+y]>t)p(M,E,x,_,y,b),p(S,w,M,E,y,b);else{const L=n[_*e+x]-1,A=n[w*e+S]-1,C=n[E*e+M]-1;g[2*L]=x,g[2*L+1]=_,g[2*A]=S,g[2*A+1]=w,g[2*C]=M,g[2*C+1]=E,v[d++]=L,v[d++]=A,v[d++]=C}}return p(0,0,o,o,o,0),p(o,o,0,0,0,o),{attributes:this._getMeshAttributes(this.terrain,g,v),indices:v}}_getMeshAttributes(t,e,n){const r=Math.floor(Math.sqrt(t.length)),s=r-1,a=e.length/2,o=new Float32Array(a*3),l=new Float32Array(a*2);for(let f=0;f<a;f++){const u=e[f*2],h=e[f*2+1],m=h*r+u;o[3*f+0]=u/s-.5,o[3*f+1]=.5-h/s,o[3*f+2]=t[m],l[2*f+0]=u/s,l[2*f+1]=1-h/s}const c=Yh(o,n);return{position:{value:o,size:3},texcoord:{value:l,size:2},normal:{value:c,size:3}}}}const b1={0:7e3,1:6e3,2:5e3,3:4e3,4:3e3,5:2500,6:2e3,7:1500,8:800,9:500,10:200,11:100,12:40,13:12,14:5,15:2,16:1,17:0,18:0,19:0,20:0};class Gi extends Er{constructor(){super(...arguments),this.type="TileGeometry"}setAttributes(t,e=0){const n=e===0?0:2e5/e/e;t=m1(t.attributes,t.indices,n);const{attributes:r,indices:s}=t;return this.setIndex(new Ee(s,1)),this.setAttribute("position",new Ee(r.position.value,r.position.size)),this.setAttribute("uv",new Ee(r.texcoord.value,r.texcoord.size)),this.setAttribute("normal",new Ee(r.normal.value,r.normal.size)),this}setData(t,e,n=!1){if(n){const r=Math.sqrt(t.length),s=new M1(r).createTile(t).getGeometryData(b1[e]||0);this.setAttributes(s,e)}else{const r=v1(t);this.setAttributes(r,e)}return this}}class w1 extends kh{constructor(){super(...arguments),this.onParseEnd=void 0}parseEnd(t){this.onParseEnd&&this.onParseEnd(t)}}const Wc={name:"GuoJF"},Ie={manager:new w1,demLoaderMap:new Map,imgLoaderMap:new Map,registerMaterialLoader(i){Ie.imgLoaderMap.set(i.dataType,i),i.info.author=i.info.author??Wc.name},registerGeometryLoader(i){Ie.demLoaderMap.set(i.dataType,i),i.info.author=i.info.author??Wc.name},getMaterialLoader(i){const t=typeof i=="string"?i:i.dataType,e=Ie.imgLoaderMap.get(t);if(e)return e;throw new Error(`Image source dataType("${t}") is not supported!`)},getGeometryLoader(i){const t=typeof i=="string"?i:i.dataType,e=Ie.demLoaderMap.get(t);if(e)return e;throw new Error(`Terrain source dataType("${t}") is not supported!`)},getLoaders(){return{imgLoaders:Array.from(Ie.imgLoaderMap.values()),demLoaders:Array.from(Ie.demLoaderMap.values())}}};function Zh(i,t){const e=Math.floor(i[0]*t),n=Math.floor(i[1]*t),r=Math.floor((i[2]-i[0])*t),s=Math.floor((i[3]-i[1])*t);return{sx:e,sy:n,sw:r,sh:s}}function Jh(i,t,e,n){if(n<i.minLevel)return{url:void 0,clipBounds:[0,0,1,1]};if(n<=i.maxLevel)return{url:i.getUrl(t,e,n),clipBounds:[0,0,1,1]};const r=T1(t,e,n,i.maxLevel),s=r.parentCoord;return{url:i.getUrl(s.x,s.y,s.z),clipBounds:r.bounds}}function E1(i,t){const e=i.width,n=new OffscreenCanvas(e,e),r=n.getContext("2d"),{sx:s,sy:a,sw:o,sh:l}=Zh(t,i.width);return r.drawImage(i,s,a,o,l,0,0,e,e),n}function T1(i,t,e,n){const r=e-n,s={x:i>>r,y:t>>r,z:e-r},a=Math.pow(2,r),o=Math.pow(.5,r),l=i%a/a-.5+o/2,c=t%a/a-.5+o/2,f=new gt(l,c),u=new fp().setFromCenterAndSize(f,new gt(o,o)),h=[u.min.x+.5,u.min.y+.5,u.max.x+.5,u.max.y+.5];return{parentCoord:s,bounds:h}}function A1(i,t,e){if(t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[2]&&t[3]>=e[3])return i;const[n,r,s,a]=t,[o,l,c,f]=e,u=Math.max(n,o),h=Math.max(r,l),m=Math.min(s,c),g=Math.min(a,f);if(u>=m||h>=g)return i;const v=new OffscreenCanvas(i.width,i.height),d=v.getContext("2d");d.drawImage(i,0,0);const p=Math.max(o,n),x=Math.min(c,s),_=Math.max(l,r),S=Math.min(f,a),w=c-o,M=f-l,E=(p-o)/w*v.width,y=(x-o)/w*v.width,b=v.height-(S-l)/M*v.height,L=v.height-(_-l)/M*v.height,A={x:E,y:b,w:y-E,h:L-b};return d.globalCompositeOperation="destination-in",d.fillRect(A.x,A.y,A.w,A.h),v}class C1{constructor(){this._downloadingThreads=0,this._bounds=[-180,-85,180,85],this._maxThreads=10,this._imgSource=[],this.debug=0,this._errorMaterial=new qo({color:0,transparent:!0,opacity:.2,name:"error-material"})}get bounds(){return this._bounds}set bounds(t){this._bounds=t}get maxThreads(){return this._maxThreads}set maxThreads(t){this._maxThreads=t}get downloadingThreads(){return this._downloadingThreads}get imgSource(){return this._imgSource}set imgSource(t){this._imgSource=t}get demSource(){return this._demSource}set demSource(t){this._demSource=t}get projectionID(){return this.imgSource[0].projectionID}get manager(){return Ie.manager}async load(t){const e=(this.demSource?1:0)+this.imgSource.length;this._downloadingThreads+=e;let n;try{const r=await this.loadMaterial(t),s=await this.loadGeometry(t);n=new Fe(s,r),n.geometry.clearGroups(),n.material.forEach((a,o)=>{n.geometry.addGroup(0,1/0,o)})}finally{this._downloadingThreads-=e}return n}async update(t,e){const n=(this.demSource?1:0)+this.imgSource.length;this._downloadingThreads+=n;try{const r=await this.loadMaterial(t,e.material),s=await this.loadGeometry(t,e.geometry);s.clearGroups(),r.forEach((a,o)=>{s.addGroup(0,1/0,o)}),s!=e.geometry&&(e.geometry.dispose(),delete e.geometry.userData.source),e.material.forEach((a,o)=>{a!==this._errorMaterial&&a!=r[o]&&(a.dispose(),delete a.userData.source)}),e.geometry=s,e.material=r,console.assert(e.material.length===e.geometry.groups.length)}finally{this._downloadingThreads-=n}}async loadGeometry(t,e){return!this.demSource||!this._checkBounds(this.demSource,t)?new Gi:e&&e.userData.source===this.demSource?e:await Ie.getGeometryLoader(this.demSource).load({source:this.demSource,...t}).then(n=>(n.userData.source=this.demSource,n)).catch(n=>(this.debug>0&&console.error("Load Geometry Error:",n),new Gi))}async loadMaterial(t,e){const n=[],r=this.imgSource.filter(s=>this._checkBounds(s,t));for(let s=0;s<r.length;s++){const a=r[s];if(e){const l=e[s];if(l&&a===l.userData.source){n.push(l);continue}}const o=await Ie.getMaterialLoader(a).load({source:a,...t}).then(l=>(l.userData.source=a,l)).catch(l=>(this.debug>0&&console.error("Load Material Error:",l.target.src),this._errorMaterial.clone()));this._materialClip(o,a,t),n.push(o)}return n}_materialClip(t,e,n){if("map"in t&&t.map instanceof ye){const r=t.map;r.image&&(r.image=A1(r.image,e._projectionBounds,n.bounds)),r.needsUpdate=!0}return this}_checkBounds(t,e){const n=(r,s)=>{const a=r._projectionBounds;return s[2]>=a[0]&&s[3]>=a[1]&&s[0]<=a[2]&&s[1]<=a[3]};return e.z>=t.minLevel&&n(t,e.bounds)}}class rl{constructor(){this.info={version:Zi,description:"Terrain loader base class"},this.dataType=""}async load(t){const{source:e,x:n,y:r,z:s}=t,{url:a,clipBounds:o}=Jh(e,n,r,s);if(!a)return new Gi;const l=await this.doLoad(a,{...t,clipBounds:o});return Ie.manager.parseEnd(l),l}}class R1{constructor(){this.info={version:Zi,description:"Image loader base class"},this.dataType="",this._material=new p1}get material(){return this._material}set material(t){this._material.dispose(),this._material=t}async load(t){const{source:e,x:n,y:r,z:s}=t,a=this.createMaterial(t);a.transparent=t.source.transparent,a.opacity=t.source.opacity;const{url:o,clipBounds:l}=Jh(e,n,r,s);return o&&(a.map=await this.doLoad(o,{...t,clipBounds:l}),a.addEventListener("dispose",$h)),a}createMaterial(t){return this.material.clone()}async doLoad(t,e){return Promise.resolve(void 0)}}const $h=i=>{const t=i.target.map;t&&(t.image instanceof ImageBitmap&&t.image.close(),t.dispose()),i.target.removeEventListener("dispose",$h)};class P1 extends R1{constructor(){super(...arguments),this.info={version:Zi,description:"Tile image loader. It can load xyz tile image."},this.dataType="image",this.loader=new Ar(Ie.manager)}async doLoad(t,e){let n=await this.loader.loadAsync(t);const r=e.clipBounds;r[2]-r[0]<1&&(n=E1(n,r));const s=new ye(n);return s.colorSpace=Be,s}}class sl{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const n=this.workersResolve[t];if(n&&n(e),this.queue.length){const{resolve:r,msg:s,transfer:a}=this.queue.shift();this.workersResolve[t]=r,this.workers[t].postMessage(s,a)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise(n=>{const r=this._getIdleWorker();r!==-1?(this._initWorker(r),this.workerStatus|=1<<r,this.workersResolve[r]=n,this.workers[r].postMessage(t,e)):this.queue.push({resolve:n,msg:t,transfer:e})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Kh='(function(){"use strict";function J(T,I){const k=new Float32Array(T.length);for(let D=0;D<I.length;D+=3){const a=I[D]*3,r=I[D+1]*3,e=I[D+2]*3,s=T[r]-T[a],t=T[r+1]-T[a+1],i=T[r+2]-T[a+2],u=T[e]-T[a],n=T[e+1]-T[a+1],f=T[e+2]-T[a+2],h=t*f-i*n,o=i*u-s*f,c=s*n-t*u,v=1/Math.hypot(h,o,c);k[a]=k[r]=k[e]=h*v,k[a+1]=k[r+1]=k[e+1]=o*v,k[a+2]=k[r+2]=k[e+2]=c*v}return k}class K{constructor(I=257){this.gridSize=I;const k=I-1;if(k&k-1)throw new Error(`Expected grid size to be 2^n+1, got ${I}.`);this.numTriangles=k*k*2-2,this.numParentTriangles=this.numTriangles-k*k,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let D=0;D<this.numTriangles;D++){let a=D+2,r=0,e=0,s=0,t=0,i=0,u=0;for(a&1?s=t=i=k:r=e=u=k;(a>>=1)>1;){const f=r+s>>1,h=e+t>>1;a&1?(s=r,t=e,r=i,e=u):(r=s,e=t,s=i,t=u),i=f,u=h}const n=D*4;this.coords[n+0]=r,this.coords[n+1]=e,this.coords[n+2]=s,this.coords[n+3]=t}}createTile(I){return new W(I,this)}}class W{constructor(I,k){const D=k.gridSize;if(I.length!==D*D)throw new Error(`Expected terrain data of length ${D*D} (${D} x ${D}), got ${I.length}.`);this.terrain=I,this.martini=k,this.errors=new Float32Array(I.length),this.update()}update(){const{numTriangles:I,numParentTriangles:k,coords:D,gridSize:a}=this.martini,{terrain:r,errors:e}=this;for(let s=I-1;s>=0;s--){const t=s*4,i=D[t+0],u=D[t+1],n=D[t+2],f=D[t+3],h=i+n>>1,o=u+f>>1,c=h+o-u,v=o+i-h,m=(r[u*a+i]+r[f*a+n])/2,l=o*a+h,g=Math.abs(m-r[l]);if(e[l]=Math.max(e[l],g),s<k){const M=(u+v>>1)*a+(i+c>>1),y=(f+v>>1)*a+(n+c>>1);e[l]=Math.max(e[l],e[M],e[y])}}}getGeometryData(I=0){const{gridSize:k,indices:D}=this.martini,{errors:a}=this;let r=0,e=0;const s=k-1;let t,i,u=0;D.fill(0);function n(l,g,M,y,d,U){const x=l+M>>1,z=g+y>>1;Math.abs(l-d)+Math.abs(g-U)>1&&a[z*k+x]>I?(n(d,U,l,g,x,z),n(M,y,d,U,x,z)):(t=g*k+l,i=y*k+M,u=U*k+d,D[t]===0&&(D[t]=++r),D[i]===0&&(D[i]=++r),D[u]===0&&(D[u]=++r),e++)}n(0,0,s,s,s,0),n(s,s,0,0,0,s);const f=r*2,h=e*3,o=new Uint16Array(f),c=new Uint32Array(h);let v=0;function m(l,g,M,y,d,U){const x=l+M>>1,z=g+y>>1;if(Math.abs(l-d)+Math.abs(g-U)>1&&a[z*k+x]>I)m(d,U,l,g,x,z),m(M,y,d,U,x,z);else{const p=D[g*k+l]-1,w=D[y*k+M]-1,V=D[U*k+d]-1;o[2*p]=l,o[2*p+1]=g,o[2*w]=M,o[2*w+1]=y,o[2*V]=d,o[2*V+1]=U,c[v++]=p,c[v++]=w,c[v++]=V}}return m(0,0,s,s,s,0),m(s,s,0,0,0,s),{attributes:this._getMeshAttributes(this.terrain,o,c),indices:c}}_getMeshAttributes(I,k,D){const a=Math.floor(Math.sqrt(I.length)),r=a-1,e=k.length/2,s=new Float32Array(e*3),t=new Float32Array(e*2);for(let u=0;u<e;u++){const n=k[u*2],f=k[u*2+1],h=f*a+n;s[3*u+0]=n/r-.5,s[3*u+1]=.5-f/r,s[3*u+2]=I[h],t[2*u+0]=n/r,t[2*u+1]=1-f/r}const i=J(s,D);return{position:{value:s,size:3},texcoord:{value:t,size:2},normal:{value:i,size:3}}}}/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */const P=(function(){var T={};T.defaultNoDataValue=-34027999387901484e22,T.decode=function(e,s){s=s||{};var t=s.encodedMaskData||s.encodedMaskData===null,i=a(e,s.inputOffset||0,t),u=s.noDataValue!==null?s.noDataValue:T.defaultNoDataValue,n=I(i,s.pixelType||Float32Array,s.encodedMaskData,u,s.returnMask),f={width:i.width,height:i.height,pixelData:n.resultPixels,minValue:n.minValue,maxValue:i.pixels.maxValue,noDataValue:u};return n.resultMask&&(f.maskData=n.resultMask),s.returnEncodedMask&&i.mask&&(f.encodedMaskData=i.mask.bitset?i.mask.bitset:null),s.returnFileInfo&&(f.fileInfo=k(i),s.computeUsedBitDepths&&(f.fileInfo.bitDepths=D(i))),f};var I=function(e,s,t,i,u){var n=0,f=e.pixels.numBlocksX,h=e.pixels.numBlocksY,o=Math.floor(e.width/f),c=Math.floor(e.height/h),v=2*e.maxZError,m=Number.MAX_VALUE,l;t=t||(e.mask?e.mask.bitset:null);var g,M;g=new s(e.width*e.height),u&&t&&(M=new Uint8Array(e.width*e.height));for(var y=new Float32Array(o*c),d,U,x=0;x<=h;x++){var z=x!==h?c:e.height%h;if(z!==0)for(var p=0;p<=f;p++){var w=p!==f?o:e.width%f;if(w!==0){var V=x*e.width*c+p*o,A=e.width-w,S=e.pixels.blocks[n],F,L,B;S.encoding<2?(S.encoding===0?F=S.rawData:(r(S.stuffedData,S.bitsPerPixel,S.numValidPixels,S.offset,v,y,e.pixels.maxValue),F=y),L=0):S.encoding===2?B=0:B=S.offset;var b;if(t)for(U=0;U<z;U++){for(V&7&&(b=t[V>>3],b<<=V&7),d=0;d<w;d++)V&7||(b=t[V>>3]),b&128?(M&&(M[V]=1),l=S.encoding<2?F[L++]:B,m=m>l?l:m,g[V++]=l):(M&&(M[V]=0),g[V++]=i),b<<=1;V+=A}else if(S.encoding<2)for(U=0;U<z;U++){for(d=0;d<w;d++)l=F[L++],m=m>l?l:m,g[V++]=l;V+=A}else for(m=m>B?B:m,U=0;U<z;U++){for(d=0;d<w;d++)g[V++]=B;V+=A}if(S.encoding===1&&L!==S.numValidPixels)throw"Block and Mask do not match";n++}}}return{resultPixels:g,resultMask:M,minValue:m}},k=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},D=function(e){for(var s=e.pixels.numBlocksX*e.pixels.numBlocksY,t={},i=0;i<s;i++){var u=e.pixels.blocks[i];u.encoding===0?t.float32=!0:u.encoding===1?t[u.bitsPerPixel]=!0:t[0]=!0}return Object.keys(t)},a=function(e,s,t){var i={},u=new Uint8Array(e,s,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,u),i.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+i.fileIdentifierString;s+=10;var n=new DataView(e,s,24);if(i.fileVersion=n.getInt32(0,!0),i.imageType=n.getInt32(4,!0),i.height=n.getUint32(8,!0),i.width=n.getUint32(12,!0),i.maxZError=n.getFloat64(16,!0),s+=24,!t)if(n=new DataView(e,s,16),i.mask={},i.mask.numBlocksY=n.getUint32(0,!0),i.mask.numBlocksX=n.getUint32(4,!0),i.mask.numBytes=n.getUint32(8,!0),i.mask.maxValue=n.getFloat32(12,!0),s+=16,i.mask.numBytes>0){var f=new Uint8Array(Math.ceil(i.width*i.height/8));n=new DataView(e,s,i.mask.numBytes);var h=n.getInt16(0,!0),o=2,c=0;do{if(h>0)for(;h--;)f[c++]=n.getUint8(o++);else{var v=n.getUint8(o++);for(h=-h;h--;)f[c++]=v}h=n.getInt16(o,!0),o+=2}while(o<i.mask.numBytes);if(h!==-32768||c<f.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=f,s+=i.mask.numBytes}else(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)===0&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));n=new DataView(e,s,16),i.pixels={},i.pixels.numBlocksY=n.getUint32(0,!0),i.pixels.numBlocksX=n.getUint32(4,!0),i.pixels.numBytes=n.getUint32(8,!0),i.pixels.maxValue=n.getFloat32(12,!0),s+=16;var m=i.pixels.numBlocksX,l=i.pixels.numBlocksY,g=m+(i.width%m>0?1:0),M=l+(i.height%l>0?1:0);i.pixels.blocks=new Array(g*M);for(var y=0,d=0;d<M;d++)for(var U=0;U<g;U++){var x=0,z=e.byteLength-s;n=new DataView(e,s,Math.min(10,z));var p={};i.pixels.blocks[y++]=p;var w=n.getUint8(0);if(x++,p.encoding=w&63,p.encoding>3)throw"Invalid block encoding ("+p.encoding+")";if(p.encoding===2){s++;continue}if(w!==0&&w!==2){if(w>>=6,p.offsetType=w,w===2)p.offset=n.getInt8(1),x++;else if(w===1)p.offset=n.getInt16(1,!0),x+=2;else if(w===0)p.offset=n.getFloat32(1,!0),x+=4;else throw"Invalid block offset type";if(p.encoding===1)if(w=n.getUint8(x),x++,p.bitsPerPixel=w&63,w>>=6,p.numValidPixelsType=w,w===2)p.numValidPixels=n.getUint8(x),x++;else if(w===1)p.numValidPixels=n.getUint16(x,!0),x+=2;else if(w===0)p.numValidPixels=n.getUint32(x,!0),x+=4;else throw"Invalid valid pixel count type"}if(s+=x,p.encoding!==3){var V,A;if(p.encoding===0){var S=(i.pixels.numBytes-1)/4;if(S!==Math.floor(S))throw"uncompressed block has invalid length";V=new ArrayBuffer(S*4),A=new Uint8Array(V),A.set(new Uint8Array(e,s,S*4));var F=new Float32Array(V);p.rawData=F,s+=S*4}else if(p.encoding===1){var L=Math.ceil(p.numValidPixels*p.bitsPerPixel/8),B=Math.ceil(L/4);V=new ArrayBuffer(B*4),A=new Uint8Array(V),A.set(new Uint8Array(e,s,L)),p.stuffedData=new Uint32Array(V),s+=L}}}return i.eofOffset=s,i},r=function(e,s,t,i,u,n,f){var h=(1<<s)-1,o=0,c,v=0,m,l,g=Math.ceil((f-i)/u),M=e.length*4-Math.ceil(s*t/8);for(e[e.length-1]<<=8*M,c=0;c<t;c++){if(v===0&&(l=e[o++],v=32),v>=s)m=l>>>v-s&h,v-=s;else{var y=s-v;m=(l&h)<<y&h,l=e[o++],v=32-y,m+=l>>>v}n[c]=m<g?i+m*u:f}return n};return T})(),ee=(function(){var T={unstuff:function(a,r,e,s,t,i,u,n){var f=(1<<e)-1,h=0,o,c=0,v,m,l,g,M=a.length*4-Math.ceil(e*s/8);if(a[a.length-1]<<=8*M,t)for(o=0;o<s;o++)c===0&&(m=a[h++],c=32),c>=e?(v=m>>>c-e&f,c-=e):(l=e-c,v=(m&f)<<l&f,m=a[h++],c=32-l,v+=m>>>c),r[o]=t[v];else for(g=Math.ceil((n-i)/u),o=0;o<s;o++)c===0&&(m=a[h++],c=32),c>=e?(v=m>>>c-e&f,c-=e):(l=e-c,v=(m&f)<<l&f,m=a[h++],c=32-l,v+=m>>>c),r[o]=v<g?i+v*u:n},unstuffLUT:function(a,r,e,s,t,i){var u=(1<<r)-1,n=0,f=0,h=0,o=0,c=0,v,m=[],l=a.length*4-Math.ceil(r*e/8);a[a.length-1]<<=8*l;var g=Math.ceil((i-s)/t);for(f=0;f<e;f++)o===0&&(v=a[n++],o=32),o>=r?(c=v>>>o-r&u,o-=r):(h=r-o,c=(v&u)<<h&u,v=a[n++],o=32-h,c+=v>>>o),m[f]=c<g?s+c*t:i;return m.unshift(s),m},unstuff2:function(a,r,e,s,t,i,u,n){var f=(1<<e)-1,h=0,o,c=0,v=0,m,l,g;if(t)for(o=0;o<s;o++)c===0&&(l=a[h++],c=32,v=0),c>=e?(m=l>>>v&f,c-=e,v+=e):(g=e-c,m=l>>>v&f,l=a[h++],c=32-g,m|=(l&(1<<g)-1)<<e-g,v=g),r[o]=t[m];else{var M=Math.ceil((n-i)/u);for(o=0;o<s;o++)c===0&&(l=a[h++],c=32,v=0),c>=e?(m=l>>>v&f,c-=e,v+=e):(g=e-c,m=l>>>v&f,l=a[h++],c=32-g,m|=(l&(1<<g)-1)<<e-g,v=g),r[o]=m<M?i+m*u:n}return r},unstuffLUT2:function(a,r,e,s,t,i){var u=(1<<r)-1,n=0,f=0,h=0,o=0,c=0,v=0,m,l=[],g=Math.ceil((i-s)/t);for(f=0;f<e;f++)o===0&&(m=a[n++],o=32,v=0),o>=r?(c=m>>>v&u,o-=r,v+=r):(h=r-o,c=m>>>v&u,m=a[n++],o=32-h,c|=(m&(1<<h)-1)<<r-h,v=h),l[f]=c<g?s+c*t:i;return l.unshift(s),l},originalUnstuff:function(a,r,e,s){var t=(1<<e)-1,i=0,u,n=0,f,h,o,c=a.length*4-Math.ceil(e*s/8);for(a[a.length-1]<<=8*c,u=0;u<s;u++)n===0&&(h=a[i++],n=32),n>=e?(f=h>>>n-e&t,n-=e):(o=e-n,f=(h&t)<<o&t,h=a[i++],n=32-o,f+=h>>>n),r[u]=f;return r},originalUnstuff2:function(a,r,e,s){var t=(1<<e)-1,i=0,u,n=0,f=0,h,o,c;for(u=0;u<s;u++)n===0&&(o=a[i++],n=32,f=0),n>=e?(h=o>>>f&t,n-=e,f+=e):(c=e-n,h=o>>>f&t,o=a[i++],n=32-c,h|=(o&(1<<c)-1)<<e-c,f=c),r[u]=h;return r}},I={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(a){for(var r=65535,e=65535,s=a.length,t=Math.floor(s/2),i=0;t;){var u=t>=359?359:t;t-=u;do r+=a[i++]<<8,e+=r+=a[i++];while(--u);r=(r&65535)+(r>>>16),e=(e&65535)+(e>>>16)}return s&1&&(e+=r+=a[i]<<8),r=(r&65535)+(r>>>16),e=(e&65535)+(e>>>16),(e<<16|r)>>>0},readHeaderInfo:function(a,r){var e=r.ptr,s=new Uint8Array(a,e,6),t={};if(t.fileIdentifierString=String.fromCharCode.apply(null,s),t.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+t.fileIdentifierString;e+=6;var i=new DataView(a,e,8),u=i.getInt32(0,!0);t.fileVersion=u,e+=4,u>=3&&(t.checksum=i.getUint32(4,!0),e+=4),i=new DataView(a,e,12),t.height=i.getUint32(0,!0),t.width=i.getUint32(4,!0),e+=8,u>=4?(t.numDims=i.getUint32(8,!0),e+=4):t.numDims=1,i=new DataView(a,e,40),t.numValidPixel=i.getUint32(0,!0),t.microBlockSize=i.getInt32(4,!0),t.blobSize=i.getInt32(8,!0),t.imageType=i.getInt32(12,!0),t.maxZError=i.getFloat64(16,!0),t.zMin=i.getFloat64(24,!0),t.zMax=i.getFloat64(32,!0),e+=40,r.headerInfo=t,r.ptr=e;var n,f;if(u>=3&&(f=u>=4?52:48,n=this.computeChecksumFletcher32(new Uint8Array(a,e-f,t.blobSize-14)),n!==t.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(a,r){var e=r.headerInfo,s=this.getDataTypeArray(e.imageType),t=e.numDims*this.getDataTypeSize(e.imageType),i=this.readSubArray(a,r.ptr,s,t),u=this.readSubArray(a,r.ptr+t,s,t);r.ptr+=2*t;var n,f=!0;for(n=0;n<e.numDims;n++)if(i[n]!==u[n]){f=!1;break}return e.minValues=i,e.maxValues=u,f},readSubArray:function(a,r,e,s){var t;if(e===Uint8Array)t=new Uint8Array(a,r,s);else{var i=new ArrayBuffer(s),u=new Uint8Array(i);u.set(new Uint8Array(a,r,s)),t=new e(i)}return t},readMask:function(a,r){var e=r.ptr,s=r.headerInfo,t=s.width*s.height,i=s.numValidPixel,u=new DataView(a,e,4),n={};if(n.numBytes=u.getUint32(0,!0),e+=4,(i===0||t===i)&&n.numBytes!==0)throw"invalid mask";var f,h;if(i===0)f=new Uint8Array(Math.ceil(t/8)),n.bitset=f,h=new Uint8Array(t),r.pixels.resultMask=h,e+=n.numBytes;else if(n.numBytes>0){f=new Uint8Array(Math.ceil(t/8)),u=new DataView(a,e,n.numBytes);var o=u.getInt16(0,!0),c=2,v=0,m=0;do{if(o>0)for(;o--;)f[v++]=u.getUint8(c++);else for(m=u.getUint8(c++),o=-o;o--;)f[v++]=m;o=u.getInt16(c,!0),c+=2}while(c<n.numBytes);if(o!==-32768||v<f.length)throw"Unexpected end of mask RLE encoding";h=new Uint8Array(t);var l=0,g=0;for(g=0;g<t;g++)g&7?(l=f[g>>3],l<<=g&7):l=f[g>>3],l&128&&(h[g]=1);r.pixels.resultMask=h,n.bitset=f,e+=n.numBytes}return r.ptr=e,r.mask=n,!0},readDataOneSweep:function(a,r,e,s){var t=r.ptr,i=r.headerInfo,u=i.numDims,n=i.width*i.height,f=i.imageType,h=i.numValidPixel*I.getDataTypeSize(f)*u,o,c=r.pixels.resultMask;if(e===Uint8Array)o=new Uint8Array(a,t,h);else{var v=new ArrayBuffer(h),m=new Uint8Array(v);m.set(new Uint8Array(a,t,h)),o=new e(v)}if(o.length===n*u)s?r.pixels.resultPixels=I.swapDimensionOrder(o,n,u,e,!0):r.pixels.resultPixels=o;else{r.pixels.resultPixels=new e(n*u);var l=0,g=0,M=0,y=0;if(u>1){if(s){for(g=0;g<n;g++)if(c[g])for(y=g,M=0;M<u;M++,y+=n)r.pixels.resultPixels[y]=o[l++]}else for(g=0;g<n;g++)if(c[g])for(y=g*u,M=0;M<u;M++)r.pixels.resultPixels[y+M]=o[l++]}else for(g=0;g<n;g++)c[g]&&(r.pixels.resultPixels[g]=o[l++])}return t+=h,r.ptr=t,!0},readHuffmanTree:function(a,r){var e=this.HUFFMAN_LUT_BITS_MAX,s=new DataView(a,r.ptr,16);r.ptr+=16;var t=s.getInt32(0,!0);if(t<2)throw"unsupported Huffman version";var i=s.getInt32(4,!0),u=s.getInt32(8,!0),n=s.getInt32(12,!0);if(u>=n)return!1;var f=new Uint32Array(n-u);I.decodeBits(a,r,f);var h=[],o,c,v,m;for(o=u;o<n;o++)c=o-(o<i?0:i),h[c]={first:f[o-u],second:null};var l=a.byteLength-r.ptr,g=Math.ceil(l/4),M=new ArrayBuffer(g*4),y=new Uint8Array(M);y.set(new Uint8Array(a,r.ptr,l));var d=new Uint32Array(M),U=0,x,z=0;for(x=d[0],o=u;o<n;o++)c=o-(o<i?0:i),m=h[c].first,m>0&&(h[c].second=x<<U>>>32-m,32-U>=m?(U+=m,U===32&&(U=0,z++,x=d[z])):(U+=m-32,z++,x=d[z],h[c].second|=x>>>32-U));var p=0,w=0,V=new k;for(o=0;o<h.length;o++)h[o]!==void 0&&(p=Math.max(p,h[o].first));p>=e?w=e:w=p;var A=[],S,F,L,B,b,C;for(o=u;o<n;o++)if(c=o-(o<i?0:i),m=h[c].first,m>0)if(S=[m,c],m<=w)for(F=h[c].second<<w-m,L=1<<w-m,v=0;v<L;v++)A[F|v]=S;else for(F=h[c].second,C=V,B=m-1;B>=0;B--)b=F>>>B&1,b?(C.right||(C.right=new k),C=C.right):(C.left||(C.left=new k),C=C.left),B===0&&!C.val&&(C.val=S[1]);return{decodeLut:A,numBitsLUTQick:w,numBitsLUT:p,tree:V,stuffedData:d,srcPtr:z,bitPos:U}},readHuffman:function(a,r,e,s){var t=r.headerInfo,i=t.numDims,u=r.headerInfo.height,n=r.headerInfo.width,f=n*u,h=this.readHuffmanTree(a,r),o=h.decodeLut,c=h.tree,v=h.stuffedData,m=h.srcPtr,l=h.bitPos,g=h.numBitsLUTQick,M=h.numBitsLUT,y=r.headerInfo.imageType===0?128:0,d,U,x,z=r.pixels.resultMask,p,w,V,A,S,F,L,B=0;l>0&&(m++,l=0);var b=v[m],C=r.encodeMode===1,_=new e(f*i),O=_,X;if(i<2||C){for(X=0;X<i;X++)if(i>1&&(O=new e(_.buffer,f*X,f),B=0),r.headerInfo.numValidPixel===n*u)for(F=0,A=0;A<u;A++)for(S=0;S<n;S++,F++){if(U=0,p=b<<l>>>32-g,w=p,32-l<g&&(p|=v[m+1]>>>64-l-g,w=p),o[w])U=o[w][1],l+=o[w][0];else for(p=b<<l>>>32-M,w=p,32-l<M&&(p|=v[m+1]>>>64-l-M,w=p),d=c,L=0;L<M;L++)if(V=p>>>M-L-1&1,d=V?d.right:d.left,!(d.left||d.right)){U=d.val,l=l+L+1;break}l>=32&&(l-=32,m++,b=v[m]),x=U-y,C?(S>0?x+=B:A>0?x+=O[F-n]:x+=B,x&=255,O[F]=x,B=x):O[F]=x}else for(F=0,A=0;A<u;A++)for(S=0;S<n;S++,F++)if(z[F]){if(U=0,p=b<<l>>>32-g,w=p,32-l<g&&(p|=v[m+1]>>>64-l-g,w=p),o[w])U=o[w][1],l+=o[w][0];else for(p=b<<l>>>32-M,w=p,32-l<M&&(p|=v[m+1]>>>64-l-M,w=p),d=c,L=0;L<M;L++)if(V=p>>>M-L-1&1,d=V?d.right:d.left,!(d.left||d.right)){U=d.val,l=l+L+1;break}l>=32&&(l-=32,m++,b=v[m]),x=U-y,C?(S>0&&z[F-1]?x+=B:A>0&&z[F-n]?x+=O[F-n]:x+=B,x&=255,O[F]=x,B=x):O[F]=x}}else for(F=0,A=0;A<u;A++)for(S=0;S<n;S++)if(F=A*n+S,!z||z[F])for(X=0;X<i;X++,F+=f){if(U=0,p=b<<l>>>32-g,w=p,32-l<g&&(p|=v[m+1]>>>64-l-g,w=p),o[w])U=o[w][1],l+=o[w][0];else for(p=b<<l>>>32-M,w=p,32-l<M&&(p|=v[m+1]>>>64-l-M,w=p),d=c,L=0;L<M;L++)if(V=p>>>M-L-1&1,d=V?d.right:d.left,!(d.left||d.right)){U=d.val,l=l+L+1;break}l>=32&&(l-=32,m++,b=v[m]),x=U-y,O[F]=x}r.ptr=r.ptr+(m+1)*4+(l>0?4:0),r.pixels.resultPixels=_,i>1&&!s&&(r.pixels.resultPixels=I.swapDimensionOrder(_,f,i,e))},decodeBits:function(a,r,e,s,t){{var i=r.headerInfo,u=i.fileVersion,n=0,f=a.byteLength-r.ptr>=5?5:a.byteLength-r.ptr,h=new DataView(a,r.ptr,f),o=h.getUint8(0);n++;var c=o>>6,v=c===0?4:3-c,m=(o&32)>0,l=o&31,g=0;if(v===1)g=h.getUint8(n),n++;else if(v===2)g=h.getUint16(n,!0),n+=2;else if(v===4)g=h.getUint32(n,!0),n+=4;else throw"Invalid valid pixel count type";var M=2*i.maxZError,y,d,U,x,z,p,w,V,A,S=i.numDims>1?i.maxValues[t]:i.zMax;if(m){for(r.counter.lut++,V=h.getUint8(n),n++,x=Math.ceil((V-1)*l/8),z=Math.ceil(x/4),d=new ArrayBuffer(z*4),U=new Uint8Array(d),r.ptr+=n,U.set(new Uint8Array(a,r.ptr,x)),w=new Uint32Array(d),r.ptr+=x,A=0;V-1>>>A;)A++;x=Math.ceil(g*A/8),z=Math.ceil(x/4),d=new ArrayBuffer(z*4),U=new Uint8Array(d),U.set(new Uint8Array(a,r.ptr,x)),y=new Uint32Array(d),r.ptr+=x,u>=3?p=T.unstuffLUT2(w,l,V-1,s,M,S):p=T.unstuffLUT(w,l,V-1,s,M,S),u>=3?T.unstuff2(y,e,A,g,p):T.unstuff(y,e,A,g,p)}else r.counter.bitstuffer++,A=l,r.ptr+=n,A>0&&(x=Math.ceil(g*A/8),z=Math.ceil(x/4),d=new ArrayBuffer(z*4),U=new Uint8Array(d),U.set(new Uint8Array(a,r.ptr,x)),y=new Uint32Array(d),r.ptr+=x,u>=3?s==null?T.originalUnstuff2(y,e,A,g):T.unstuff2(y,e,A,g,!1,s,M,S):s==null?T.originalUnstuff(y,e,A,g):T.unstuff(y,e,A,g,!1,s,M,S))}},readTiles:function(a,r,e,s){var t=r.headerInfo,i=t.width,u=t.height,n=i*u,f=t.microBlockSize,h=t.imageType,o=I.getDataTypeSize(h),c=Math.ceil(i/f),v=Math.ceil(u/f);r.pixels.numBlocksY=v,r.pixels.numBlocksX=c,r.pixels.ptr=0;var m=0,l=0,g=0,M=0,y=0,d=0,U=0,x=0,z=0,p=0,w=0,V=0,A=0,S=0,F=0,L=0,B,b,C,_,O,X,R=new e(f*f),fe=u%f||f,le=i%f||f,q,j,$=t.numDims,H,E=r.pixels.resultMask,Y=r.pixels.resultPixels,oe=t.fileVersion,G=oe>=5?14:15,Z,Q=t.zMax,N;for(g=0;g<v;g++)for(y=g!==v-1?f:fe,M=0;M<c;M++)for(d=M!==c-1?f:le,w=g*i*f+M*f,V=i-d,H=0;H<$;H++){if($>1?(N=Y,w=g*i*f+M*f,Y=new e(r.pixels.resultPixels.buffer,n*H*o,n),Q=t.maxValues[H]):N=null,U=a.byteLength-r.ptr,B=new DataView(a,r.ptr,Math.min(10,U)),b={},L=0,x=B.getUint8(0),L++,Z=t.fileVersion>=5?x&4:0,z=x>>6&255,p=x>>2&G,p!==(M*f>>3&G)||Z&&H===0)throw"integrity issue";if(X=x&3,X>3)throw r.ptr+=L,"Invalid block encoding ("+X+")";if(X===2){if(Z)if(E)for(m=0;m<y;m++)for(l=0;l<d;l++)E[w]&&(Y[w]=N[w]),w++;else for(m=0;m<y;m++)for(l=0;l<d;l++)Y[w]=N[w],w++;r.counter.constant++,r.ptr+=L;continue}else if(X===0){if(Z)throw"integrity issue";if(r.counter.uncompressed++,r.ptr+=L,A=y*d*o,S=a.byteLength-r.ptr,A=A<S?A:S,C=new ArrayBuffer(A%o===0?A:A+o-A%o),_=new Uint8Array(C),_.set(new Uint8Array(a,r.ptr,A)),O=new e(C),F=0,E)for(m=0;m<y;m++){for(l=0;l<d;l++)E[w]&&(Y[w]=O[F++]),w++;w+=V}else for(m=0;m<y;m++){for(l=0;l<d;l++)Y[w++]=O[F++];w+=V}r.ptr+=F*o}else if(q=I.getDataTypeUsed(Z&&h<6?4:h,z),j=I.getOnePixel(b,L,q,B),L+=I.getDataTypeSize(q),X===3)if(r.ptr+=L,r.counter.constantoffset++,E)for(m=0;m<y;m++){for(l=0;l<d;l++)E[w]&&(Y[w]=Z?Math.min(Q,N[w]+j):j),w++;w+=V}else for(m=0;m<y;m++){for(l=0;l<d;l++)Y[w]=Z?Math.min(Q,N[w]+j):j,w++;w+=V}else if(r.ptr+=L,I.decodeBits(a,r,R,j,H),L=0,Z)if(E)for(m=0;m<y;m++){for(l=0;l<d;l++)E[w]&&(Y[w]=R[L++]+N[w]),w++;w+=V}else for(m=0;m<y;m++){for(l=0;l<d;l++)Y[w]=R[L++]+N[w],w++;w+=V}else if(E)for(m=0;m<y;m++){for(l=0;l<d;l++)E[w]&&(Y[w]=R[L++]),w++;w+=V}else for(m=0;m<y;m++){for(l=0;l<d;l++)Y[w++]=R[L++];w+=V}}$>1&&!s&&(r.pixels.resultPixels=I.swapDimensionOrder(r.pixels.resultPixels,n,$,e))},formatFileInfo:function(a){return{fileIdentifierString:a.headerInfo.fileIdentifierString,fileVersion:a.headerInfo.fileVersion,imageType:a.headerInfo.imageType,height:a.headerInfo.height,width:a.headerInfo.width,numValidPixel:a.headerInfo.numValidPixel,microBlockSize:a.headerInfo.microBlockSize,blobSize:a.headerInfo.blobSize,maxZError:a.headerInfo.maxZError,pixelType:I.getPixelType(a.headerInfo.imageType),eofOffset:a.eofOffset,mask:a.mask?{numBytes:a.mask.numBytes}:null,pixels:{numBlocksX:a.pixels.numBlocksX,numBlocksY:a.pixels.numBlocksY,maxValue:a.headerInfo.zMax,minValue:a.headerInfo.zMin,noDataValue:a.noDataValue}}},constructConstantSurface:function(a,r){var e=a.headerInfo.zMax,s=a.headerInfo.zMin,t=a.headerInfo.maxValues,i=a.headerInfo.numDims,u=a.headerInfo.height*a.headerInfo.width,n=0,f=0,h=0,o=a.pixels.resultMask,c=a.pixels.resultPixels;if(o)if(i>1){if(r)for(n=0;n<i;n++)for(h=n*u,e=t[n],f=0;f<u;f++)o[f]&&(c[h+f]=e);else for(f=0;f<u;f++)if(o[f])for(h=f*i,n=0;n<i;n++)c[h+i]=t[n]}else for(f=0;f<u;f++)o[f]&&(c[f]=e);else if(i>1&&s!==e)if(r)for(n=0;n<i;n++)for(h=n*u,e=t[n],f=0;f<u;f++)c[h+f]=e;else for(f=0;f<u;f++)for(h=f*i,n=0;n<i;n++)c[h+n]=t[n];else for(f=0;f<u*i;f++)c[f]=e},getDataTypeArray:function(a){var r;switch(a){case 0:r=Int8Array;break;case 1:r=Uint8Array;break;case 2:r=Int16Array;break;case 3:r=Uint16Array;break;case 4:r=Int32Array;break;case 5:r=Uint32Array;break;case 6:r=Float32Array;break;case 7:r=Float64Array;break;default:r=Float32Array}return r},getPixelType:function(a){var r;switch(a){case 0:r="S8";break;case 1:r="U8";break;case 2:r="S16";break;case 3:r="U16";break;case 4:r="S32";break;case 5:r="U32";break;case 6:r="F32";break;case 7:r="F64";break;default:r="F32"}return r},isValidPixelValue:function(a,r){if(r==null)return!1;var e;switch(a){case 0:e=r>=-128&&r<=127;break;case 1:e=r>=0&&r<=255;break;case 2:e=r>=-32768&&r<=32767;break;case 3:e=r>=0&&r<=65536;break;case 4:e=r>=-2147483648&&r<=2147483647;break;case 5:e=r>=0&&r<=4294967296;break;case 6:e=r>=-34027999387901484e22&&r<=34027999387901484e22;break;case 7:e=r>=-17976931348623157e292&&r<=17976931348623157e292;break;default:e=!1}return e},getDataTypeSize:function(a){var r=0;switch(a){case 0:case 1:r=1;break;case 2:case 3:r=2;break;case 4:case 5:case 6:r=4;break;case 7:r=8;break;default:r=a}return r},getDataTypeUsed:function(a,r){var e=a;switch(a){case 2:case 4:e=a-r;break;case 3:case 5:e=a-2*r;break;case 6:r===0?e=a:r===1?e=2:e=1;break;case 7:r===0?e=a:e=a-2*r+1;break;default:e=a;break}return e},getOnePixel:function(a,r,e,s){var t=0;switch(e){case 0:t=s.getInt8(r);break;case 1:t=s.getUint8(r);break;case 2:t=s.getInt16(r,!0);break;case 3:t=s.getUint16(r,!0);break;case 4:t=s.getInt32(r,!0);break;case 5:t=s.getUInt32(r,!0);break;case 6:t=s.getFloat32(r,!0);break;case 7:t=s.getFloat64(r,!0);break;default:throw"the decoder does not understand this pixel type"}return t},swapDimensionOrder:function(a,r,e,s,t){var i=0,u=0,n=0,f=0,h=a;if(e>1)if(h=new s(r*e),t)for(i=0;i<r;i++)for(f=i,n=0;n<e;n++,f+=r)h[f]=a[u++];else for(i=0;i<r;i++)for(f=i,n=0;n<e;n++,f+=r)h[u++]=a[f];return h}},k=function(a,r,e){this.val=a,this.left=r,this.right=e},D={decode:function(a,r){r=r||{};var e=r.noDataValue,s=0,t={};if(t.ptr=r.inputOffset||0,t.pixels={},!!I.readHeaderInfo(a,t)){var i=t.headerInfo,u=i.fileVersion,n=I.getDataTypeArray(i.imageType);if(u>5)throw"unsupported lerc version 2."+u;I.readMask(a,t),i.numValidPixel!==i.width*i.height&&!t.pixels.resultMask&&(t.pixels.resultMask=r.maskData);var f=i.width*i.height;t.pixels.resultPixels=new n(f*i.numDims),t.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var h=!r.returnPixelInterleavedDims;if(i.numValidPixel!==0)if(i.zMax===i.zMin)I.constructConstantSurface(t,h);else if(u>=4&&I.checkMinMaxRanges(a,t))I.constructConstantSurface(t,h);else{var o=new DataView(a,t.ptr,2),c=o.getUint8(0);if(t.ptr++,c)I.readDataOneSweep(a,t,n,h);else if(u>1&&i.imageType<=1&&Math.abs(i.maxZError-.5)<1e-5){var v=o.getUint8(1);if(t.ptr++,t.encodeMode=v,v>2||u<4&&v>1)throw"Invalid Huffman flag "+v;v?I.readHuffman(a,t,n,h):I.readTiles(a,t,n,h)}else I.readTiles(a,t,n,h)}t.eofOffset=t.ptr;var m;r.inputOffset?(m=t.headerInfo.blobSize+r.inputOffset-t.ptr,Math.abs(m)>=1&&(t.eofOffset=r.inputOffset+t.headerInfo.blobSize)):(m=t.headerInfo.blobSize-t.ptr,Math.abs(m)>=1&&(t.eofOffset=t.headerInfo.blobSize));var l={width:i.width,height:i.height,pixelData:t.pixels.resultPixels,minValue:i.zMin,maxValue:i.zMax,validPixelCount:i.numValidPixel,dimCount:i.numDims,dimStats:{minValues:i.minValues,maxValues:i.maxValues},maskData:t.pixels.resultMask};if(t.pixels.resultMask&&I.isValidPixelValue(i.imageType,e)){var g=t.pixels.resultMask;for(s=0;s<f;s++)g[s]||(l.pixelData[s]=e);l.noDataValue=e}return t.noDataValue=e,r.returnFileInfo&&(l.fileInfo=I.formatFileInfo(t)),l}},getBandCount:function(a){var r=0,e=0,s={};for(s.ptr=0,s.pixels={};e<a.byteLength-58;)I.readHeaderInfo(a,s),e+=s.headerInfo.blobSize,r++,s.ptr=e;return r}};return D})();var re=(function(){var T=new ArrayBuffer(4),I=new Uint8Array(T),k=new Uint32Array(T);return k[0]=1,I[0]===1})(),ie={decode:function(T,I){if(!re)throw"Big endian system is not supported.";I=I||{};var k=I.inputOffset||0,D=new Uint8Array(T,k,10),a=String.fromCharCode.apply(null,D),r,e;if(a.trim()==="CntZImage")r=P,e=1;else if(a.substring(0,5)==="Lerc2")r=ee,e=2;else throw"Unexpected file identifier string: "+a;for(var s=0,t=T.byteLength-10,i,u=[],n,f,h={width:0,height:0,pixels:[],pixelType:I.pixelType,mask:null,statistics:[]},o=0;k<t;){var c=r.decode(T,{inputOffset:k,encodedMaskData:i,maskData:f,returnMask:s===0,returnEncodedMask:s===0,returnFileInfo:!0,returnPixelInterleavedDims:I.returnPixelInterleavedDims,pixelType:I.pixelType||null,noDataValue:I.noDataValue||null});k=c.fileInfo.eofOffset,f=c.maskData,s===0&&(i=c.encodedMaskData,h.width=c.width,h.height=c.height,h.dimCount=c.dimCount||1,h.pixelType=c.pixelType||c.fileInfo.pixelType,h.mask=f),e>1&&(f&&u.push(f),c.fileInfo.mask&&c.fileInfo.mask.numBytes>0&&o++),s++,h.pixels.push(c.pixelData),h.statistics.push({minValue:c.minValue,maxValue:c.maxValue,noDataValue:c.noDataValue,dimStats:c.dimStats})}var v,m,l;if(e>1&&o>1){for(l=h.width*h.height,h.bandMasks=u,f=new Uint8Array(l),f.set(u[0]),v=1;v<u.length;v++)for(n=u[v],m=0;m<l;m++)f[m]=f[m]&n[m];h.maskData=f}return h}};const ne={0:7e3,1:6e3,2:5e3,3:4e3,4:3e3,5:2500,6:2e3,7:1500,8:800,9:500,10:200,11:100,12:40,13:12,14:5,15:2,16:1,17:0,18:0,19:0,20:0};function te(T){const I=ie.decode(T,{});return{dem:I.pixels[0],width:I.width,height:I.height}}function ae(T,I,k){let D=te(T);return k[2]-k[0]<1&&(D=se(D,k)),new K(D.width).createTile(D.dem).getGeometryData(ne[I]||0)}function se(T,I){const k=(e,s,t)=>{const i=Math.floor(e[0]*s),u=Math.floor(e[1]*t),n=Math.floor((e[2]-e[0])*s)+1,f=Math.floor((e[3]-e[1])*t)+1;return{x:i,y:u,w:n,h:f}},D=(e,s,t,i,u,n)=>{const f=new Float32Array(u*n);for(let h=0;h<n;h++)for(let o=0;o<u;o++){const c=(h+i)*s+(o+t),v=h*u+o;f[v]=e[c]}return f},a=k(I,T.width,T.height);return{dem:D(T.dem,T.width,a.x,a.y,a.w,a.h),width:a.w,height:a.h}}self.onmessage=T=>{const I=T.data,k=ae(I.demData,I.z,I.clipBounds);self.postMessage(k)}})();\n',Xc=typeof self<"u"&&self.Blob&&new Blob([Kh],{type:"text/javascript;charset=utf-8"});function I1(i){let t;try{if(t=Xc&&(self.URL||self.webkitURL).createObjectURL(Xc),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Kh),{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const L1=5;class D1 extends rl{constructor(){super(),this.info={version:Zi,description:"Tile LERC terrain loader. It can load ArcGis-lerc format terrain data."},this.dataType="lerc",this.fileLoader=new jd(Ie.manager),this._workerPool=new sl(0),this.fileLoader.setResponseType("arraybuffer"),this._workerPool.setWorkerCreator(()=>new I1)}async doLoad(t,e){this._workerPool.pool===0&&this._workerPool.setWorkerLimit(L1);const{z:n,clipBounds:r}=e,s={demData:await this.fileLoader.loadAsync(t),z:n,clipBounds:r},a=(await this._workerPool.postMessage(s)).data;return new Gi().setAttributes(a,n)}}const Qh=`(function(){"use strict";function c(t){return a(t.data)}function a(t){function n(e,u){const r=u*4,[i,f,g,l]=e.slice(r,r+4);return l===0?0:-1e4+(i<<16|f<<8|g)*.1}const o=t.length>>>2,s=new Float32Array(o);for(let e=0;e<o;e++)s[e]=n(t,e);return s}self.onmessage=t=>{const n=c(t.data.imgData);self.postMessage(n)}})();
`,jc=typeof self<"u"&&self.Blob&&new Blob([Qh],{type:"text/javascript;charset=utf-8"});function U1(i){let t;try{if(t=jc&&(self.URL||self.webkitURL).createObjectURL(jc),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Qh),{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const N1=10;class F1 extends rl{constructor(){super(),this.info={version:Zi,description:"Mapbox-RGB terrain loader, It can load Mapbox-RGB terrain data."},this.dataType="terrain-rgb",this.imageLoader=new Ar(Ie.manager),this._workerPool=new sl(0),this._workerPool.setWorkerCreator(()=>new U1)}async doLoad(t,e){const n=await this.imageLoader.loadAsync(t),{clipBounds:r,z:s}=e,a=oi.clamp((s+2)*3,2,64),o=O1(n,r,a);this._workerPool.pool===0&&this._workerPool.setWorkerLimit(N1);const l=(await this._workerPool.postMessage({imgData:o},[o.data.buffer])).data,c=new Gi;return c.setData(l,s),c}}function O1(i,t,e){const n=Zh(t,i.width);e=Math.min(e,n.sw);const r=new OffscreenCanvas(e,e).getContext("2d");return r.imageSmoothingEnabled=!1,r.drawImage(i,n.sx,n.sy,n.sw,n.sh,0,0,e,e),r.getImageData(0,0,e,e)}const tu='(function(){"use strict";function $(a,r){const t=new Float32Array(a.length);for(let n=0;n<r.length;n+=3){const e=r[n]*3,c=r[n+1]*3,s=r[n+2]*3,o=a[c]-a[e],l=a[c+1]-a[e+1],d=a[c+2]-a[e+2],i=a[s]-a[e],h=a[s+1]-a[e+1],g=a[s+2]-a[e+2],u=l*g-d*h,m=d*i-o*g,w=o*h-l*i,M=1/Math.hypot(u,m,w);t[e]=t[c]=t[s]=u*M,t[e+1]=t[c+1]=t[s+1]=m*M,t[e+2]=t[c+2]=t[s+2]=w*M}return t}class b{constructor(r=257){this.gridSize=r;const t=r-1;if(t&t-1)throw new Error(`Expected grid size to be 2^n+1, got ${r}.`);this.numTriangles=t*t*2-2,this.numParentTriangles=this.numTriangles-t*t,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let n=0;n<this.numTriangles;n++){let e=n+2,c=0,s=0,o=0,l=0,d=0,i=0;for(e&1?o=l=d=t:c=s=i=t;(e>>=1)>1;){const g=c+o>>1,u=s+l>>1;e&1?(o=c,l=s,c=d,s=i):(c=o,s=l,o=d,l=i),d=g,i=u}const h=n*4;this.coords[h+0]=c,this.coords[h+1]=s,this.coords[h+2]=o,this.coords[h+3]=l}}createTile(r){return new U(r,this)}}class U{constructor(r,t){const n=t.gridSize;if(r.length!==n*n)throw new Error(`Expected terrain data of length ${n*n} (${n} x ${n}), got ${r.length}.`);this.terrain=r,this.martini=t,this.errors=new Float32Array(r.length),this.update()}update(){const{numTriangles:r,numParentTriangles:t,coords:n,gridSize:e}=this.martini,{terrain:c,errors:s}=this;for(let o=r-1;o>=0;o--){const l=o*4,d=n[l+0],i=n[l+1],h=n[l+2],g=n[l+3],u=d+h>>1,m=i+g>>1,w=u+m-i,M=m+d-u,S=(c[i*e+d]+c[g*e+h])/2,f=m*e+u,x=Math.abs(S-c[f]);if(s[f]=Math.max(s[f],x),o<t){const z=(i+M>>1)*e+(d+w>>1),T=(g+M>>1)*e+(h+w>>1);s[f]=Math.max(s[f],s[z],s[T])}}}getGeometryData(r=0){const{gridSize:t,indices:n}=this.martini,{errors:e}=this;let c=0,s=0;const o=t-1;let l,d,i=0;n.fill(0);function h(f,x,z,T,A,p){const I=f+z>>1,y=x+T>>1;Math.abs(f-A)+Math.abs(x-p)>1&&e[y*t+I]>r?(h(A,p,f,x,I,y),h(z,T,A,p,I,y)):(l=x*t+f,d=T*t+z,i=p*t+A,n[l]===0&&(n[l]=++c),n[d]===0&&(n[d]=++c),n[i]===0&&(n[i]=++c),s++)}h(0,0,o,o,o,0),h(o,o,0,0,0,o);const g=c*2,u=s*3,m=new Uint16Array(g),w=new Uint32Array(u);let M=0;function S(f,x,z,T,A,p){const I=f+z>>1,y=x+T>>1;if(Math.abs(f-A)+Math.abs(x-p)>1&&e[y*t+I]>r)S(A,p,f,x,I,y),S(z,T,A,p,I,y);else{const E=n[x*t+f]-1,F=n[T*t+z]-1,C=n[p*t+A]-1;m[2*E]=f,m[2*E+1]=x,m[2*F]=z,m[2*F+1]=T,m[2*C]=A,m[2*C+1]=p,w[M++]=E,w[M++]=F,w[M++]=C}}return S(0,0,o,o,o,0),S(o,o,0,0,0,o),{attributes:this._getMeshAttributes(this.terrain,m,w),indices:w}}_getMeshAttributes(r,t,n){const e=Math.floor(Math.sqrt(r.length)),c=e-1,s=t.length/2,o=new Float32Array(s*3),l=new Float32Array(s*2);for(let i=0;i<s;i++){const h=t[i*2],g=t[i*2+1],u=g*e+h;o[3*i+0]=h/c-.5,o[3*i+1]=.5-g/c,o[3*i+2]=r[u],l[2*i+0]=h/c,l[2*i+1]=1-g/c}const d=$(o,n);return{position:{value:o,size:3},texcoord:{value:l,size:2},normal:{value:d,size:3}}}}const D={0:7e3,1:6e3,2:5e3,3:4e3,4:3e3,5:2500,6:2e3,7:1500,8:800,9:500,10:200,11:100,12:40,13:12,14:5,15:2,16:1,17:0,18:0,19:0,20:0};function V(a){function r(e,c){const s=c*4,[o,l,d,i]=e.slice(s,s+4);return i===0?0:-1e4+(o<<16|l<<8|d)*.1}const t=a.data.length>>>2,n=new Float32Array(t);for(let e=0;e<t;e++)n[e]=r(a.data,e);return{dem:n,width:a.width,height:a.height}}function k(a,r,t){let n=V(a);return t[2]-t[0]<1&&(n=G(n,t)),new b(n.width).createTile(n.dem).getGeometryData(D[r]||0)}function G(a,r){const t=(s,o,l)=>{const d=Math.floor(s[0]*o),i=Math.floor(s[1]*l),h=Math.floor((s[2]-s[0])*o)+1,g=Math.floor((s[3]-s[1])*l)+1;return{x:d,y:i,w:h,h:g}},n=(s,o,l,d,i,h)=>{const g=new Float32Array(i*h);for(let u=0;u<h;u++)for(let m=0;m<i;m++){const w=(u+d)*o+(m+l),M=u*i+m;g[M]=s[w]}return g},e=t(r,a.width,a.height);return{dem:n(a.dem,a.width,e.x,e.y,e.w,e.h),width:e.w,height:e.h}}self.onmessage=a=>{const r=a.data,t=k(r.demData,r.z,r.clipBounds);self.postMessage(t)}})();\n',qc=typeof self<"u"&&self.Blob&&new Blob([tu],{type:"text/javascript;charset=utf-8"});function B1(i){let t;try{if(t=qc&&(self.URL||self.webkitURL).createObjectURL(qc),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(tu),{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const k1=10;class z1 extends rl{constructor(){super(),this.info={version:Zi,description:"Mapbox-DEM terrain loader, It can load Mapbox-DEM terrain data."},this.dataType="terrain-dem",this.imageLoader=new Ar(Ie.manager),this._workerPool=new sl(0),this._workerPool.setWorkerCreator(()=>new B1)}async doLoad(t,e){this._workerPool.pool===0&&this._workerPool.setWorkerLimit(k1);const{z:n,clipBounds:r}=e,s=await this.imageLoader.loadAsync(t),a={demData:V1(s),z:n,clipBounds:r},o=(await this._workerPool.postMessage(a)).data;return new Gi().setAttributes(o,n)}}function V1(i){const t=new OffscreenCanvas(i.width,i.height).getContext("2d");return t.drawImage(i,0,0),t.getImageData(0,0,i.width,i.height)}class Ji{constructor(t){this.dataType="image",this.attribution="ThreeTile",this.minLevel=0,this.maxLevel=18,this.projectionID="3857",this.url="",this.subdomains=[],this.opacity=1,this.transparent=!0,this.isTMS=!1,this._projectionBounds=[-1/0,-1/0,1/0,1/0],Object.assign(this,t)}_getBBox(t,e,n){const r=Math.PI*6378137,s=2*r/Math.pow(2,n),a=-r+t*s,o=r-(e+1)*s,l=-r+(t+1)*s,c=r-e*s;return`${a},${o},${l},${c}`}getUrl(t,e,n,r){const s=this.subdomains.length;let a;if(s>0){const c=Math.floor(Math.random()*s);a=this.subdomains[c]}const o=this._getBBox(t,e,n);e=this.isTMS?Math.pow(2,n)-1-e:e;const l={...this,x:t,y:e,z:n,s:a,bbox:o,...r};return H1(this.url,l)}static create(t){return new Ji(t)}}function H1(i,t){const e=/\{ *([\w_-]+) *\}/g;return i.replace(e,(n,r)=>{const s=t[r]??(()=>{throw new Error(`source url template error, No value provided for variable: ${n}`)})();return typeof s=="function"?s(t):s})}let eu=class{constructor(t=!0){this.autoStart=!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,this.autoStart=t}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function G1(i){return Ie.registerMaterialLoader(i),i}function Ta(i){return Ie.registerGeometryLoader(i),i}class nu{constructor(t=0){this._lon0=0,this._lon0=t}get lon0(){return this._lon0}getTileXWithCenterLon(t,e){const n=Math.pow(2,e);let r=t+Math.round(n/360*this._lon0);return r>=n?r-=n:r<0&&(r+=n),r}getProjBoundsFromLonLat(t){const e=t[2]-t[0]>180,n=this.project(t[0]+(e?this._lon0:0),t[1]),r=this.project(t[2]+(e?this._lon0:0),t[3]);return[Math.min(n.x,r.x),Math.min(n.y,r.y),Math.max(n.x,r.x),Math.max(n.y,r.y)]}getProjBoundsFromXYZ(t,e,n){const r=Math.PI*6378137,s=2*r/Math.pow(2,n),a=-r+t*s,o=r-(e+1)*s,l=-r+(t+1)*s,c=r-e*s;return[a,o,l,c]}getLonLatBoundsFromXYZ(t,e,n){const r=this.getProjBoundsFromXYZ(t,e,n),s=this.unProject(r[0],r[1]),a=this.unProject(r[2],r[3]);return[s.lon,s.lat,a.lon,a.lat]}}const or=6378137;class iu extends nu{constructor(){super(...arguments),this.ID="3857",this.mapWidth=2*Math.PI*or,this.mapHeight=this.mapWidth,this.mapDepth=1}project(t,e){const n=(t-this.lon0)*(Math.PI/180),r=e*(Math.PI/180),s=or*n,a=or*Math.log(Math.tan(Math.PI/4+r/2));return{x:s,y:a}}unProject(t,e){let n=t/or*(180/Math.PI)+this.lon0;return n>180&&(n-=360),{lat:(2*Math.atan(Math.exp(e/or))-Math.PI/2)*(180/Math.PI),lon:n}}}class W1 extends nu{constructor(){super(...arguments),this.ID="4326",this.mapWidth=36e3*1e3,this.mapHeight=18e3*1e3,this.mapDepth=1}project(t,e){return{x:(t-this.lon0)*100*1e3,y:e*100*1e3}}unProject(t,e){return{lon:t/(100*1e3)+this.lon0,lat:e/(100*1e3)}}}const Yc={createFromID:(i="3857",t)=>{let e;switch(i){case"3857":e=new iu(t);break;case"4326":e=new W1(t);break;default:throw new Error(`Projection ID: ${i} is not supported.`)}return e}};let X1=class extends C1{constructor(){super(...arguments),this._projection=new iu(0)}get imgSource(){return super.imgSource}set imgSource(t){super.imgSource=t,this._updateImgProjBounds()}get demSource(){return super.demSource}set demSource(t){super.demSource=t,this._updateDemPrjBounds()}set bounds(t){super.bounds=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}get bounds(){return super.bounds}_updateImgProjBounds(){const t=this._projection;super.imgSource.forEach(e=>{e._projectionBounds=t.getProjBoundsFromLonLat(e.bounds||this.bounds)})}_updateDemPrjBounds(){const t=this._projection;this.demSource&&(this.demSource._projectionBounds=t.getProjBoundsFromLonLat(this.demSource.bounds||this.bounds))}get projection(){return this._projection}set projection(t){this._projection=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}async load(t){return super.load(this._getTileCoords(t))}async update(t,e){super.update(this._getTileCoords(t),e)}_getTileCoords(t){if(!this._projection)throw new Error("projection is undefined");const{x:e,y:n,z:r}=t,s=this._projection.getTileXWithCenterLon(e,r),a=this._projection.getProjBoundsFromXYZ(e,n,r),o=this._projection.getLonLatBoundsFromXYZ(e,n,r);return{x:s,y:n,z:r,bounds:a,lonLatBounds:o}}};const Rs=new Vh,j1=new H(0,-1,0),Zc=new H;function ru(i,t){const e=t.intersectObject(i.rootTile,!0);if(e.length>0){const n=e[0];console.assert(n.object.visible);const r=i.worldToLocal(n.point.clone()),s=i.map2geo(r);return Object.assign(n,{location:s})}}function Jc(i,t){return Zc.set(t.x,1e4,t.z),Rs.set(Zc,j1),ru(i,Rs)}function q1(i,t,e){return Rs.setFromCamera(e,i),ru(t,Rs)}function Y1(i){const t=i.loader.manager,e=(n,r)=>{i.dispatchEvent({type:n,...r})};t.onStart=(n,r,s)=>{e("loading-start",{url:n,itemsLoaded:r,itemsTotal:s})},t.onError=n=>{e("loading-error",{url:n})},t.onLoad=()=>{e("loading-complete")},t.onProgress=(n,r,s)=>{e("loading-progress",{url:n,itemsLoaded:r,itemsTotal:s})},t.onParseEnd=n=>{e("parsing-end",{geometry:n})},i.rootTile.addEventListener("tile-created",n=>{e("tile-created",{tile:n.tile})}),i.rootTile.addEventListener("tile-loaded",n=>{e("tile-loaded",{tile:n.tile})}),i.rootTile.addEventListener("tile-unload",n=>{e("tile-unload",{tile:n.tile})}),i.rootTile.addEventListener("tile-visible-changed",n=>{e("tile-visible-changed",{tile:n.tile})})}class su extends de{constructor(t){super(),this.name="map",this.debug=0,this._mapClock=new eu,this.isLOD=!0,this.autoUpdate=!0,this.updateInterval=100,this._minLevel=2,this._maxLevel=20,this._LODThreshold=1,this.up.set(0,0,1);const{loader:e=new X1,rootTile:n=new li,minLevel:r=2,imgSource:s,demSource:a,bounds:o,lon0:l=0,debug:c=0}=t;this.minLevel=r,this.loader=e,this.rootTile=n,o&&(this.loader.bounds=o),this.debug=this.loader.debug=c,this.lon0=l,this.imgSource=s,this.demSource=a,this.add(n),this._resize(),Y1(this);const f=()=>{this.dispatchEvent({type:"ready"}),this.removeEventListener("loading-complete",f)};this.addEventListener("loading-complete",f)}get minLevel(){return this._minLevel}set minLevel(t){this._minLevel=t}get maxLevel(){return this._maxLevel}set maxLevel(t){this._maxLevel=t}get lon0(){return this.projection.lon0}set lon0(t){this.projection.lon0!==t&&(t!=0&&this.minLevel<1&&console.warn(`Map centralMeridian is ${this.lon0}, minLevel must > 0`),this.projection=Yc.createFromID(this.projection.ID,t),this._updateSource())}get projection(){return this.loader.projection}set projection(t){(t.ID!=this.projection.ID||t.lon0!=this.lon0)&&(this.loader.projection=t,this._resize(),this.reload(),this.debug>0&&console.log("Map Projection Changed:",t.ID,t.lon0),this.dispatchEvent({type:"projection-changed",projection:t}))}get imgSource(){return this.loader.imgSource}set imgSource(t){const e=Array.isArray(t)?t:[t];if(e.length===0)throw new Error("imgSource can not be empty");this.loader.imgSource=e,this.projection=Yc.createFromID(e[0].projectionID,this.projection.lon0),this.debug>0&&console.log("Img Source Changed:",e),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t})}get demSource(){return this.loader.demSource}set demSource(t){this.loader.demSource!==t&&(this.loader.demSource=t,this.debug>0&&console.log("DEM Source Changed:",this.demSource),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t}))}get LODThreshold(){return this._LODThreshold}set LODThreshold(t){this._LODThreshold=t}get bounds(){return this.loader.bounds}set bounds(t){this.loader.bounds=t}get maxThreads(){return this.loader.maxThreads}set maxThreads(t){this.loader.maxThreads=t}get backgroundColor(){return 0}set backgroundColor(t){console.warn("backgroundColor is deprecated, please use background plugin instead")}static create(t){return new su(t)}_resize(){return this.rootTile.scale.set(this.projection.mapWidth,this.projection.mapHeight,this.projection.mapDepth),this.rootTile.updateMatrix(),this.rootTile.updateMatrixWorld(),this}_getMaxLevel(){let t=0;return this.imgSource.forEach(e=>t=Math.max(t,e.maxLevel)),this.demSource&&(t=Math.max(t,this.demSource.maxLevel)),this.debug>0&&console.log("Max Level:",t),t}update(t){const e=this._mapClock.getElapsedTime();e>this.updateInterval/1e3&&(this.rootTile.update({camera:t,loader:this.loader,minLevel:this.minLevel,maxLevel:this.maxLevel,LODThreshold:this.LODThreshold}),this.rootTile.castShadow=this.castShadow,this.rootTile.receiveShadow=this.receiveShadow,this.dispatchEvent({type:"update",delta:e}),this._mapClock.start())}_updateSource(){this._maxLevel=this._getMaxLevel(),this.rootTile.reload(!1)}reload(t=!0){this.rootTile.reload(t)}dispose(){this.removeFromParent(),this.reload()}geo2pos(t){return this.geo2map(t)}geo2map(t){const e=this.projection.project(t.x,t.y);return new H(e.x,e.y,t.z)}geo2world(t){return this.localToWorld(this.geo2map(t))}pos2geo(t){return this.map2geo(t)}map2geo(t){const e=this.projection.unProject(t.x,t.y);return new H(e.lon,e.lat,t.z)}world2geo(t){return this.pos2geo(this.worldToLocal(t.clone()))}getLocalInfoFromGeo(t){const e=this.geo2world(t);return Jc(this,e)}getLocalInfoFromWorld(t){return Jc(this,t)}getLocalInfoFromScreen(t,e){return q1(t,this,e)}get downloading(){return this.loader.downloadingThreads}getTileCount(){let t=0,e=0,n=0,r=0,s=0,a=0;return this.rootTile.traverse(o=>{o instanceof li&&(t++,o.isLeaf&&(s++,o.showing&&e++,o.inFrustum&&n++),r=Math.max(r,o.z),a=this.loader.downloadingThreads)}),{total:t,leaf:s,visible:e,inFrustum:n,maxLevel:r,downloading:a}}}function Z1(){G1(new P1),Ta(new F1),Ta(new D1),Ta(new z1)}Z1();var ci=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var t=1.70158;return i===1?1:i*i*((t+1)*i-t)},Out:function(i){var t=1.70158;return i===0?0:--i*i*((t+1)*i+t)+1},InOut:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)}}),Bounce:Object.freeze({In:function(i){return 1-ci.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?ci.Bounce.In(i*2)*.5:ci.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(t){return Math.pow(t,i)},Out:function(t){return 1-Math.pow(1-t,i)},InOut:function(t){return t<.5?Math.pow(t*2,i)/2:(1-Math.pow(2-t*2,i))/2+.5}}}}),ur=function(){return performance.now()},J1=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},i.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},i.prototype.update=function(t,e){t===void 0&&(t=ur()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],a=!e;s&&s.update(t,a)===!1&&!e&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),Ro={Linear:function(i,t){var e=i.length-1,n=e*t,r=Math.floor(n),s=Ro.Utils.Linear;return t<0?s(i[0],i[1],n):t>1?s(i[e],i[e-1],e-n):s(i[r],i[r+1>e?e:r+1],n-r)},Utils:{Linear:function(i,t,e){return(t-i)*e+i}}},au=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Po=new J1,Aa=function(){function i(t,e){e===void 0&&(e=Po),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ci.Linear.None,this._interpolationFunction=Ro.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=au.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},i.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},i.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},i.prototype.start=function(t,e){if(t===void 0&&(t=ur()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},i.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},i.prototype._setupProperties=function(t,e,n,r,s){for(var a in n){var o=t[a],l=Array.isArray(o),c=l?"array":typeof o,f=!l&&Array.isArray(n[a]);if(!(c==="undefined"||c==="function")){if(f){var u=n[a];if(u.length===0)continue;for(var h=[o],m=0,g=u.length;m<g;m+=1){var v=this._handleRelativeValue(o,u[m]);if(isNaN(v)){f=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(v)}f&&(n[a]=h)}if((c==="object"||l)&&o&&!f){e[a]=l?[]:{};var d=o;for(var p in d)e[a][p]=d[p];r[a]=l?[]:{};var u=n[a];if(!this._isDynamic){var x={};for(var p in u)x[p]=u[p];n[a]=u=x}this._setupProperties(d,e[a],u,r[a],s)}else(typeof e[a]>"u"||s)&&(e[a]=o),l||(e[a]*=1),f?r[a]=n[a].slice().reverse():r[a]=e[a]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(t){return t===void 0&&(t=ur()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},i.prototype.resume=function(t){return t===void 0&&(t=ur()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return t===void 0&&(t=Po),this._group=t,this},i.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},i.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},i.prototype.easing=function(t){return t===void 0&&(t=ci.Linear.None),this._easingFunction=t,this},i.prototype.interpolation=function(t){return t===void 0&&(t=Ro.Linear),this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,e){var n=this,r;if(t===void 0&&(t=ur()),e===void 0&&(e=!0),this._isPaused)return!0;var s,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>a)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=t-this._startTime,l=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),c=this._duration+this._repeat*l,f=function(){if(n._duration===0||o>c)return 1;var d=Math.trunc(o/l),p=o-d*l,x=Math.min(p/n._duration,1);return x===0&&o===n._duration?1:x},u=f(),h=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||o>=this._duration)if(this._repeat>0){var m=Math.min(Math.trunc((o-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=m);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*m,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,v=this._chainedTweens.length;g<v;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(t,e,n,r){for(var s in n)if(e[s]!==void 0){var a=e[s]||0,o=n[s],l=Array.isArray(t[s]),c=Array.isArray(o),f=!l&&c;f?t[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(t[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(t[s]=a+(o-a)*r))}},i.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},i}();au.nextId;var xn=Po;xn.getAll.bind(xn);xn.removeAll.bind(xn);xn.add.bind(xn);xn.remove.bind(xn);var $1=xn.update.bind(xn);class K1 extends Nn{constructor(t,e={}){super(),this.topScenes=[],this.clock=new eu;const{antialias:n=!1,stencil:r=!0,logarithmicDepthBuffer:s=!0}=e;this.renderer=this.createRenderer(n,r,s),this.scene=this.createScene(),this.camera=this.createCamera(),t&&this.addTo(t),this.ambLight=this.createAmbLight(),this.dirLight=this.createDirLight(),this.scene.add(this.ambLight),this.scene.add(this.dirLight),this.renderer.setAnimationLoop(this.animate.bind(this))}get width(){var t;return((t=this.container)==null?void 0:t.clientWidth)||0}get height(){var t;return((t=this.container)==null?void 0:t.clientHeight)||0}addTo(t){const e=typeof t=="string"?document.querySelector(t):t;if(e instanceof HTMLElement)this.container=e,e.appendChild(this.renderer.domElement),new ResizeObserver(this.resize.bind(this)).observe(e);else throw`${t} not found!}`;return this}createScene(){const t=new Df,e=14414079;return t.background=new Jt(e),t.fog=new Is(e,0),t}createRenderer(t,e,n){const r=new o1({antialias:t,logarithmicDepthBuffer:n,stencil:e,alpha:!0,precision:"highp"});return r.setPixelRatio(window.devicePixelRatio),r.domElement.tabIndex=0,r.domElement.style.outline="none",r}createCamera(){const t=new Ne(70,1,.1,5e7);return t.position.set(0,28e6,0),t}createAmbLight(){return new $d(16777215,1)}createDirLight(){const t=new Jd(16777215,1);return t.position.set(0,2e3,1e3),t.target.position.set(0,0,0),t}resize(){const t=this.width,e=this.height;return this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.update(),this.dispatchEvent({type:"resize",size:{width:t,height:e}}),this}update(){this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.topScenes.forEach(t=>{this.renderer.clearDepth(),this.renderer.render(t,this.camera)}),this.renderer.autoClear=!0}animate(){this.update(),this.dispatchEvent({type:"update",delta:this.clock.getDelta()}),$1()}}const $c={type:"change"},al={type:"start"},ou={type:"end"},fs=new Wi,Kc=new Wn,Q1=Math.cos(70*oi.DEG2RAD),xe=new H,Oe=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class tv extends dp{constructor(t,e=null){super(t,e),this.state=he.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qe.ROTATE,MIDDLE:qe.DOLLY,RIGHT:qe.PAN},this.touches={ONE:pn.ROTATE,TWO:pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new $e,this._lastTargetPosition=new H,this._quat=new $e().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pc,this._sphericalDelta=new pc,this._scale=1,this._panOffset=new H,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new H,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nv.bind(this),this._onPointerDown=ev.bind(this),this._onPointerUp=iv.bind(this),this._onContextMenu=hv.bind(this),this._onMouseWheel=av.bind(this),this._onKeyDown=ov.bind(this),this._onTouchStart=lv.bind(this),this._onTouchMove=cv.bind(this),this._onMouseDown=rv.bind(this),this._onMouseMove=sv.bind(this),this._interceptControlDown=uv.bind(this),this._interceptControlUp=fv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($c),this.update(),this.state=he.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),r<-Math.PI?r+=Oe:r>Math.PI&&(r-=Oe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=xe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(fs.origin.copy(this.object.position),fs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fs.direction))<Q1?this.object.lookAt(this.target):(Kc.setFromNormalAndCoplanarPoint(this.object.up,this.target),fs.intersectPlane(Kc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent($c),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xe.copy(r).sub(this.target);let s=xe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ev(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function nv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function iv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ou),this.state=he.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=he.DOLLY;break;case qe.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}break;case qe.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(al)}function sv(i){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function av(i){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(i.preventDefault(),this.dispatchEvent(al),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ou))}function ov(i){this.enabled!==!1&&this._handleKeyDown(i)}function lv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=he.TOUCH_ROTATE;break;case pn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=he.TOUCH_DOLLY_PAN;break;case pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(al)}function cv(i){switch(this._trackPointer(i),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=he.NONE}}function hv(i){this.enabled!==!1&&i.preventDefault()}function uv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}new H;new Ns(-1,1,1,-1,0,1);class dv extends ve{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}new dv;var K={};(function(){var i=function(){function n(r){this.message="JPEG error: "+r}return n.prototype=new Error,n.prototype.name="JpegError",n.constructor=n,n}(),t=function(){var n=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),r=4017,s=799,a=3406,o=2276,l=1567,c=3784,f=5793,u=2896;function h(_){_==null&&(_={}),_.w==null&&(_.w=-1),this.V=_.n,this.N=_.w}function m(_,S){for(var w=0,M=[],E,y,b=16,L;b>0&&!_[b-1];)b--;M.push({children:[],index:0});var A=M[0];for(E=0;E<b;E++){for(y=0;y<_[E];y++){for(A=M.pop(),A.children[A.index]=S[w];A.index>0;)A=M.pop();for(A.index++,M.push(A);M.length<=E;)M.push(L={children:[],index:0}),A.children[A.index]=L.children,A=L;w++}E+1<b&&(M.push(L={children:[],index:0}),A.children[A.index]=L.children,A=L)}return M[0].children}function g(_,S,w){return 64*((_.P+1)*S+w)}function v(_,S,w,M,E,y,b,L,A,C){C==null&&(C=!1);var P=w.m,D=w.Z,B=S,z=0,O=0,N=0,F=0,k,V=0,q,ot,ht,ut,G,J,nt=0,xt,ft,bt,Ut;function vt(){if(O>0)return O--,z>>O&1;if(z=_[S++],z===255){var j=_[S++];if(j){if(j===220&&C){S+=2;var it=e(_,S);if(S+=2,it>0&&it!==w.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",it)}else if(j===217){if(C){var $=V*8;if($>0&&$<w.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",$)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return O=7,z>>>7}function et(j){for(var it=j;;){switch(it=it[vt()],typeof it){case"number":return it;case"object":continue}throw new i("invalid huffman sequence")}}function rt(j){for(var it=0;j>0;)it=it<<1|vt(),j--;return it}function Z(j){if(j===1)return vt()===1?1:-1;var it=rt(j);return it>=1<<j-1?it:it+(-1<<j)+1}function ct(j,it){var $=et(j.J),Et=$===0?0:Z($),dt=1;for(j.D[it]=j.Q+=Et;dt<64;){var At=et(j.i),Tt=At&15,at=At>>4;if(Tt===0){if(at<15)break;dt+=16;continue}dt+=at;var pt=n[dt];j.D[it+pt]=Z(Tt),dt++}}function U(j,it){var $=et(j.J),Et=$===0?0:Z($)<<A;j.D[it]=j.Q+=Et}function Pt(j,it){j.D[it]|=vt()<<A}function yt(j,it){if(N>0){N--;return}for(var $=y,Et=b;$<=Et;){var dt=et(j.i),At=dt&15,Tt=dt>>4;if(At===0){if(Tt<15){N=rt(Tt)+(1<<Tt)-1;break}$+=16;continue}$+=Tt;var at=n[$];j.D[it+at]=Z(At)*(1<<A),$++}}function St(j,it){for(var $=y,Et=b,dt=0,At,Tt;$<=Et;){var at=it+n[$],pt=j.D[at]<0?-1:1;switch(F){case 0:if(Tt=et(j.i),At=Tt&15,dt=Tt>>4,At===0)dt<15?(N=rt(dt)+(1<<dt),F=4):(dt=16,F=1);else{if(At!==1)throw new i("invalid ACn encoding");k=Z(At),F=dt?2:3}continue;case 1:case 2:j.D[at]?j.D[at]+=pt*(vt()<<A):(dt--,dt===0&&(F=F===2?3:0));break;case 3:j.D[at]?j.D[at]+=pt*(vt()<<A):(j.D[at]=k<<A,F=0);break;case 4:j.D[at]&&(j.D[at]+=pt*(vt()<<A));break}$++}F===4&&(N--,N===0&&(F=0))}function _t(j,it,$,Et,dt){var At=$/P|0,Tt=$%P;V=At*j.A+Et;var at=Tt*j.h+dt,pt=g(j,V,at);it(j,pt)}function I(j,it,$){V=$/j.P|0;var Et=$%j.P,dt=g(j,V,Et);it(j,dt)}var T=M.length;for(D?y===0?J=L===0?U:Pt:J=L===0?yt:St:J=ct,T===1?ft=M[0].P*M[0].c:ft=P*w.R;nt<=ft;){var W=E?Math.min(ft-nt,E):ft;if(W>0){for(ot=0;ot<T;ot++)M[ot].Q=0;if(N=0,T===1)for(q=M[0],G=0;G<W;G++)I(q,J,nt),nt++;else for(G=0;G<W;G++){for(ot=0;ot<T;ot++)for(q=M[ot],bt=q.h,Ut=q.A,ht=0;ht<Ut;ht++)for(ut=0;ut<bt;ut++)_t(q,J,nt,ht,ut);nt++}}if(O=0,xt=x(_,S),!xt)break;if(xt.u&&(S=xt.offset),xt.M>=65488&&xt.M<=65495)S+=2;else break}return S-B}function d(_,S,w){var M=_.$,E=_.D,y,b,L,A,C,P,D,B,z,O,N,F,k,V,q,ot,ht;if(!M)throw new i("missing required Quantization Table.");for(var ut=0;ut<64;ut+=8){if(z=E[S+ut],O=E[S+ut+1],N=E[S+ut+2],F=E[S+ut+3],k=E[S+ut+4],V=E[S+ut+5],q=E[S+ut+6],ot=E[S+ut+7],z*=M[ut],(O|N|F|k|V|q|ot)===0){ht=f*z+512>>10,w[ut]=ht,w[ut+1]=ht,w[ut+2]=ht,w[ut+3]=ht,w[ut+4]=ht,w[ut+5]=ht,w[ut+6]=ht,w[ut+7]=ht;continue}O*=M[ut+1],N*=M[ut+2],F*=M[ut+3],k*=M[ut+4],V*=M[ut+5],q*=M[ut+6],ot*=M[ut+7],y=f*z+128>>8,b=f*k+128>>8,L=N,A=q,C=u*(O-ot)+128>>8,B=u*(O+ot)+128>>8,P=F<<4,D=V<<4,y=y+b+1>>1,b=y-b,ht=L*c+A*l+128>>8,L=L*l-A*c+128>>8,A=ht,C=C+D+1>>1,D=C-D,B=B+P+1>>1,P=B-P,y=y+A+1>>1,A=y-A,b=b+L+1>>1,L=b-L,ht=C*o+B*a+2048>>12,C=C*a-B*o+2048>>12,B=ht,ht=P*s+D*r+2048>>12,P=P*r-D*s+2048>>12,D=ht,w[ut]=y+B,w[ut+7]=y-B,w[ut+1]=b+D,w[ut+6]=b-D,w[ut+2]=L+P,w[ut+5]=L-P,w[ut+3]=A+C,w[ut+4]=A-C}for(var G=0;G<8;++G){if(z=w[G],O=w[G+8],N=w[G+16],F=w[G+24],k=w[G+32],V=w[G+40],q=w[G+48],ot=w[G+56],(O|N|F|k|V|q|ot)===0){ht=f*z+8192>>14,ht<-2040?ht=0:ht>=2024?ht=255:ht=ht+2056>>4,E[S+G]=ht,E[S+G+8]=ht,E[S+G+16]=ht,E[S+G+24]=ht,E[S+G+32]=ht,E[S+G+40]=ht,E[S+G+48]=ht,E[S+G+56]=ht;continue}y=f*z+2048>>12,b=f*k+2048>>12,L=N,A=q,C=u*(O-ot)+2048>>12,B=u*(O+ot)+2048>>12,P=F,D=V,y=(y+b+1>>1)+4112,b=y-b,ht=L*c+A*l+2048>>12,L=L*l-A*c+2048>>12,A=ht,C=C+D+1>>1,D=C-D,B=B+P+1>>1,P=B-P,y=y+A+1>>1,A=y-A,b=b+L+1>>1,L=b-L,ht=C*o+B*a+2048>>12,C=C*a-B*o+2048>>12,B=ht,ht=P*s+D*r+2048>>12,P=P*r-D*s+2048>>12,D=ht,z=y+B,ot=y-B,O=b+D,q=b-D,N=L+P,V=L-P,F=A+C,k=A-C,z<16?z=0:z>=4080?z=255:z>>=4,O<16?O=0:O>=4080?O=255:O>>=4,N<16?N=0:N>=4080?N=255:N>>=4,F<16?F=0:F>=4080?F=255:F>>=4,k<16?k=0:k>=4080?k=255:k>>=4,V<16?V=0:V>=4080?V=255:V>>=4,q<16?q=0:q>=4080?q=255:q>>=4,ot<16?ot=0:ot>=4080?ot=255:ot>>=4,E[S+G]=z,E[S+G+8]=O,E[S+G+16]=N,E[S+G+24]=F,E[S+G+32]=k,E[S+G+40]=V,E[S+G+48]=q,E[S+G+56]=ot}}function p(_,S){for(var w=S.P,M=S.c,E=new Int16Array(64),y=0;y<M;y++)for(var b=0;b<w;b++){var L=g(S,y,b);d(S,L,E)}return S.D}function x(_,S,w){w==null&&(w=S);var M=_.length-1,E=w<S?w:S;if(S>=M)return null;var y=e(_,S);if(y>=65472&&y<=65534)return{u:null,M:y,offset:S};for(var b=e(_,E);!(b>=65472&&b<=65534);){if(++E>=M)return null;b=e(_,E)}return{u:y.toString(16),M:b,offset:E}}return h.prototype={parse(_,S){S==null&&(S={});var w=S.F,M=0,E=null,y=null,b,L,A=0;function C(){var at=e(_,M);M+=2;var pt=M+at-2,Dt=x(_,pt,M);Dt&&Dt.u&&(pt=Dt.offset);var Nt=_.subarray(M,pt);return M+=Nt.length,Nt}function P(at){for(var pt=Math.ceil(at.o/8/at.X),Dt=Math.ceil(at.s/8/at.B),Nt=0;Nt<at.W.length;Nt++){St=at.W[Nt];var Ct=Math.ceil(Math.ceil(at.o/8)*St.h/at.X),jt=Math.ceil(Math.ceil(at.s/8)*St.A/at.B),X=pt*St.h,wt=Dt*St.A,Mt=64*wt*(X+1);St.D=new Int16Array(Mt),St.P=Ct,St.c=jt}at.m=pt,at.R=Dt}var D=[],B=[],z=[],O=e(_,M);if(M+=2,O!==65496)throw new i("SOI not found");O=e(_,M),M+=2;t:for(;O!==65497;){var N,F,k;switch(O){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var V=C();O===65504&&V[0]===74&&V[1]===70&&V[2]===73&&V[3]===70&&V[4]===0&&(E={version:{d:V[5],T:V[6]},K:V[7],j:V[8]<<8|V[9],H:V[10]<<8|V[11],S:V[12],I:V[13],C:V.subarray(14,14+3*V[12]*V[13])}),O===65518&&V[0]===65&&V[1]===100&&V[2]===111&&V[3]===98&&V[4]===101&&(y={version:V[5]<<8|V[6],k:V[7]<<8|V[8],q:V[9]<<8|V[10],a:V[11]});break;case 65499:var q=e(_,M),ot;M+=2;for(var ht=q+M-2;M<ht;){var ut=_[M++],G=new Uint16Array(64);if(ut>>4)if(ut>>4===1)for(F=0;F<64;F++)ot=n[F],G[ot]=e(_,M),M+=2;else throw new i("DQT - invalid table spec");else for(F=0;F<64;F++)ot=n[F],G[ot]=_[M++];D[ut&15]=G}break;case 65472:case 65473:case 65474:if(b)throw new i("Only single frame JPEGs supported");M+=2,b={},b.G=O===65473,b.Z=O===65474,b.precision=_[M++];var J=e(_,M),nt,xt=0,ft=0;M+=2,b.s=w||J,b.o=e(_,M),M+=2,b.W=[],b._={};var bt=_[M++];for(N=0;N<bt;N++){nt=_[M];var Ut=_[M+1]>>4,vt=_[M+1]&15;xt<Ut&&(xt=Ut),ft<vt&&(ft=vt);var et=_[M+2];k=b.W.push({h:Ut,A:vt,L:et,$:null}),b._[nt]=k-1,M+=3}b.X=xt,b.B=ft,P(b);break;case 65476:var rt=e(_,M);for(M+=2,N=2;N<rt;){var Z=_[M++],ct=new Uint8Array(16),U=0;for(F=0;F<16;F++,M++)U+=ct[F]=_[M];var Pt=new Uint8Array(U);for(F=0;F<U;F++,M++)Pt[F]=_[M];N+=17+U,(Z>>4?B:z)[Z&15]=m(ct,Pt)}break;case 65501:M+=2,L=e(_,M),M+=2;break;case 65498:var yt=++A===1&&!w,St;M+=2;var _t=_[M++],I=[];for(N=0;N<_t;N++){var T=_[M++],W=b._[T];St=b.W[W],St.index=T;var j=_[M++];St.J=z[j>>4],St.i=B[j&15],I.push(St)}var it=_[M++],$=_[M++],Et=_[M++];try{var dt=v(_,M,b,I,L,it,$,Et>>4,Et&15,yt);M+=dt}catch(at){if(at instanceof DNLMarkerError)return this.parse(_,{F:at.s});if(at instanceof EOIMarkerError)break t;throw at}break;case 65500:M+=4;break;case 65535:_[M]!==255&&M--;break;default:var At=x(_,M-2,M-3);if(At&&At.u){M=At.offset;break}if(M>=_.length-1)break t;throw new i("JpegImage.parse - unknown marker: "+O.toString(16))}O=e(_,M),M+=2}for(this.width=b.o,this.height=b.s,this.g=E,this.b=y,this.W=[],N=0;N<b.W.length;N++){St=b.W[N];var Tt=D[St.L];Tt&&(St.$=Tt),this.W.push({index:St.index,e:p(b,St),l:St.h/b.X,t:St.A/b.B,P:St.P,c:St.c})}this.p=this.W.length},Y(_,S,w){w==null&&(w=!1);var M=this.width/_,E=this.height/S,y,b,L,A,C,P,D,B,z,O,N=0,F,k=this.W.length,V=_*S*k,q=new Uint8ClampedArray(V),ot=new Uint32Array(_),ht=4294967288,ut;for(D=0;D<k;D++){if(y=this.W[D],b=y.l*M,L=y.t*E,N=D,F=y.e,A=y.P+1<<3,b!==ut){for(C=0;C<_;C++)B=0|C*b,ot[C]=(B&ht)<<3|B&7;ut=b}for(P=0;P<S;P++)for(B=0|P*L,O=A*(B&ht)|(B&7)<<3,C=0;C<_;C++)q[N]=F[O+ot[C]],N+=k}var G=this.V;if(!w&&k===4&&!G&&(G=new Int32Array([-256,255,-256,255,-256,255,-256,255])),G)for(D=0;D<V;)for(B=0,z=0;B<k;B++,D++,z+=2)q[D]=(q[D]*G[z]>>8)+G[z+1];return q},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(_){for(var S,w,M,E=0,y=_.length;E<y;E+=3)S=_[E],w=_[E+1],M=_[E+2],_[E]=S-179.456+1.402*M,_[E+1]=S+135.459-.344*w-.714*M,_[E+2]=S-226.816+1.772*w;return _},O:function(_){for(var S,w,M,E,y=0,b=0,L=_.length;b<L;b+=4)S=_[b],w=_[b+1],M=_[b+2],E=_[b+3],_[y++]=-122.67195406894+w*(-660635669420364e-19*w+.000437130475926232*M-54080610064599e-18*S+.00048449797120281*E-.154362151871126)+M*(-.000957964378445773*M+.000817076911346625*S-.00477271405408747*E+1.53380253221734)+S*(.000961250184130688*S-.00266257332283933*E+.48357088451265)+E*(-.000336197177618394*E+.484791561490776),_[y++]=107.268039397724+w*(219927104525741e-19*w-.000640992018297945*M+.000659397001245577*S+.000426105652938837*E-.176491792462875)+M*(-.000778269941513683*M+.00130872261408275*S+.000770482631801132*E-.151051492775562)+S*(.00126935368114843*S-.00265090189010898*E+.25802910206845)+E*(-.000318913117588328*E-.213742400323665),_[y++]=-20.810012546947+w*(-.000570115196973677*w-263409051004589e-19*M+.0020741088115012*S-.00288260236853442*E+.814272968359295)+M*(-153496057440975e-19*M-.000132689043961446*S+.000560833691242812*E-.195152027534049)+S*(.00174418132927582*S-.00255243321439347*E+.116935020465145)+E*(-.000343531996510555*E+.24165260232407);return _.subarray(0,y)},r:function(_){for(var S,w,M,E=0,y=_.length;E<y;E+=4)S=_[E],w=_[E+1],M=_[E+2],_[E]=434.456-S-1.402*M,_[E+1]=119.541-S+.344*w+.714*M,_[E+2]=481.816-S-1.772*w;return _},U:function(_){for(var S,w,M,E,y=0,b=0,L=_.length;b<L;b+=4)S=_[b],w=_[b+1],M=_[b+2],E=_[b+3],_[y++]=255+S*(-6747147073602441e-20*S+.0008379262121013727*w+.0002894718188643294*M+.003264231057537806*E-1.1185611867203937)+w*(26374107616089405e-21*w-8626949158638572e-20*M-.0002748769067499491*E-.02155688794978967)+M*(-3878099212869363e-20*M-.0003267808279485286*E+.0686742238595345)-E*(.0003361971776183937*E+.7430659151342254),_[y++]=255+S*(.00013596372813588848*S+.000924537132573585*w+.00010567359618683593*M+.0004791864687436512*E-.3109689587515875)+w*(-.00023545346108370344*w+.0002702845253534714*M+.0020200308977307156*E-.7488052167015494)+M*(6834815998235662e-20*M+.00015168452363460973*E-.09751927774728933)-E*(.0003189131175883281*E+.7364883807733168),_[y++]=255+S*(13598650411385307e-21*S+.00012423956175490851*w+.0004751985097583589*M-36729317476630422e-22*E-.05562186980264034)+w*(.00016141380598724676*w+.0009692239130725186*M+.0007782692450036253*E-.44015232367526463)+M*(5068882914068769e-22*M+.0017778369011375071*E-.7591454649749609)-E*(.0003435319965105553*E+.7063770186160144);return _.subarray(0,y)},getData:function(_){var S=_.width,w=_.height,M=_.forceRGB,E=_.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var y=this.Y(S,w,E);if(this.p===1&&M){for(var b=y.length,L=new Uint8ClampedArray(b*3),A=0,C=0;C<b;C++){var P=y[C];L[A++]=P,L[A++]=P,L[A++]=P}return L}else{if(this.p===3&&this.f)return this.z(y);if(this.p===4){if(this.f)return M?this.O(y):this.r(y);if(M)return this.U(y)}}return y}},h}();function e(n,r){return n[r]<<8|n[r+1]}K.JpegDecoder=t})();K.encodeImage=function(i,t,e,n){var r={t256:[t],t257:[e],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[e],t279:[t*e*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var s in n)r[s]=n[s];for(var a=new Uint8Array(K.encode([r])),o=new Uint8Array(i),l=new Uint8Array(1e3+t*e*4),s=0;s<a.length;s++)l[s]=a[s];for(var s=0;s<o.length;s++)l[1e3+s]=o[s];return l.buffer};K.encode=function(i){var t=new Uint8Array(2e4),e=4,n=K._binBE;t[0]=t[1]=77,n.writeUshort(t,2,42);var r=8;n.writeUint(t,e,r),e+=4;for(var s=0;s<i.length;s++){var a=K._writeIFD(n,K._types.basic,t,r,i[s]);r=a[1],s<i.length-1&&(r&3&&(r+=4-(r&3)),n.writeUint(t,a[0],r))}return t.slice(0,r).buffer};K.decode=function(i,t){t==null&&(t={parseMN:!0,debug:!1});var e=new Uint8Array(i),n=0,r=K._binBE.readASCII(e,n,2);n+=2;var s=r=="II"?K._binLE:K._binBE;s.readUshort(e,n),n+=2;var a=s.readUint(e,n);n+=4;for(var o=[];;){var l=s.readUshort(e,a),c=s.readUshort(e,a+4);if(l!=0&&(c<1||13<c)){log("error in TIFF");break}if(K._readIFD(s,e,a,o,0,t),a=s.readUint(e,a+2+l*12),a==0)break}return o};K.decodeImage=function(i,t,e){if(!t.data){var n=new Uint8Array(i),r=K._binBE.readASCII(n,0,2);if(t.t256!=null){t.isLE=r=="II",t.width=t.t256[0],t.height=t.t257[0];var s=t.t259?t.t259[0]:1,a=t.t266?t.t266[0]:1;t.t284&&t.t284[0]==2&&log("PlanarConfiguration 2 should not be used!"),s==7&&t.t258&&t.t258.length>3&&(t.t258=t.t258.slice(0,3));var o=t.t277?t.t277[0]:1,l=t.t258?t.t258[0]:1,c=l*o;s==1&&t.t279!=null&&t.t278&&t.t262[0]==32803&&(c=Math.round(t.t279[0]*8/(t.width*t.t278[0]))),t.t50885&&t.t50885[0]==4&&(c=t.t258[0]*3);var f=Math.ceil(t.width*c/8)*8,u=t.t273;(u==null||t.t322)&&(u=t.t324);var h=t.t279;s==1&&u.length==1&&(h=[t.height*(f>>>3)]),(h==null||t.t322)&&(h=t.t325);var m=new Uint8Array(t.height*(f>>>3)),g=0;if(t.t322!=null){var v=t.t322[0],d=t.t323[0],p=Math.floor((t.width+v-1)/v),x=Math.floor((t.height+d-1)/d),_=new Uint8Array(Math.ceil(v*d*c/8)|0);console.log("====",p,x);for(var S=0;S<x;S++)for(var w=0;w<p;w++){var M=S*p+w;_.fill(0),K.decode._decompress(t,e,n,u[M],h[M],s,_,0,a,v,d),s==6?m=_:K._copyTile(_,Math.ceil(v*c/8)|0,d,m,Math.ceil(t.width*c/8)|0,t.height,Math.ceil(w*v*c/8)|0,S*d)}g=m.length*8}else{if(u==null)return;var E=t.t278?t.t278[0]:t.height;E=Math.min(E,t.height);for(var M=0;M<u.length;M++)K.decode._decompress(t,e,n,u[M],h[M],s,m,Math.ceil(g/8)|0,a,t.width,E),g+=f*E;g=Math.min(g,m.length*8)}t.data=new Uint8Array(m.buffer,0,Math.ceil(g/8)|0)}}};K.decode._decompress=function(i,t,e,n,r,s,a,o,l,c,f){if(i.t271&&i.t271[0]=="Panasonic"&&i.t45&&i.t45[0]==6&&(s=34316),s==1)for(var u=0;u<r;u++)a[o+u]=e[n+u];else if(s==2)K.decode._decodeG2(e,n,r,a,o,c,l);else if(s==3)K.decode._decodeG3(e,n,r,a,o,c,l,i.t292?(i.t292[0]&1)==1:!1);else if(s==4)K.decode._decodeG4(e,n,r,a,o,c,l);else if(s==5)K.decode._decodeLZW(e,n,r,a,o,8);else if(s==6)K.decode._decodeOldJPEG(i,e,n,r,a,o);else if(s==7||s==34892)K.decode._decodeNewJPEG(i,e,n,r,a,o);else if(s==8||s==32946){var h=new Uint8Array(e.buffer,n+2,r-6),m=K._inflateRaw(h);o+m.length<=a.length&&a.set(m,o)}else s==9?K.decode._decodeVC5(e,n,r,a,o,i.t33422):s==32767?K.decode._decodeARW(i,e,n,r,a,o):s==32773?K.decode._decodePackBits(e,n,r,a,o):s==32809?K.decode._decodeThunder(e,n,r,a,o):s==34316?K.decode._decodePanasonic(i,e,n,r,a,o):s==34713?K.decode._decodeNikon(i,t,e,n,r,a,o):s==34676?K.decode._decodeLogLuv32(i,e,n,r,a,o):log("Unknown compression",s);var g=i.t258?Math.min(32,i.t258[0]):1,v=i.t277?i.t277[0]:1,d=g*v>>>3,p=Math.ceil(g*v*c/8);if(g==16&&!i.isLE&&i.t33422==null)for(var x=0;x<f;x++)for(var _=o+x*p,S=1;S<p;S+=2){var w=a[_+S];a[_+S]=a[_+S-1],a[_+S-1]=w}if(i.t317&&i.t317[0]==2)for(var x=0;x<f;x++){var M=o+x*p;if(g==16)for(var u=d;u<p;u+=2){var E=(a[M+u+1]<<8|a[M+u])+(a[M+u-d+1]<<8|a[M+u-d]);a[M+u]=E&255,a[M+u+1]=E>>>8&255}else if(v==3)for(var u=3;u<p;u+=3)a[M+u]=a[M+u]+a[M+u-3]&255,a[M+u+1]=a[M+u+1]+a[M+u-2]&255,a[M+u+2]=a[M+u+2]+a[M+u-1]&255;else for(var u=d;u<p;u++)a[M+u]=a[M+u]+a[M+u-d]&255}};K.decode._decodePanasonic=function(i,t,e,n,r,s){var a=t.buffer,o=i.t2[0],l=i.t3[0],c=i.t10[0],f=i.t45[0],u=0,h=0,m=0,g=0,v=f==6?new Uint32Array(18):new Uint8Array(16),d,p,x,_=[0,0],S=[0,0],w,M=0,E,y,b,L,A=new Uint8Array(16384),C=new Uint16Array(r.buffer);function P(et){if(m==0){var rt=new Uint8Array(a,e+h+8184,8200),Z=new Uint8Array(a,e+h,8184);A.set(rt),A.set(Z,rt.length),h+=16384}if(f==5)for(d=0;d<16;d++)v[d]=A[m++],m&=16383;else return m=m-et&131071,g=m>>3^16368,(A[g]|A[g+1]<<8)>>(m&7)&~(-1<<et)}function D(et){return A[m+15-et]}function B(){v[0]=D(0)<<6|D(1)>>2,v[1]=((D(1)&3)<<12|D(2)<<4|D(3)>>4)&16383,v[2]=D(3)>>2&3,v[3]=(D(3)&3)<<8|D(4),v[4]=D(5)<<2|D(6)>>6,v[5]=(D(6)&63)<<4|D(7)>>4,v[6]=D(7)>>2&3,v[7]=(D(7)&3)<<8|D(8),v[8]=D(9)<<2&1020|D(10)>>6,v[9]=(D(10)<<4|D(11)>>4)&1023,v[10]=D(11)>>2&3,v[11]=(D(11)&3)<<8|D(12),v[12]=(D(13)<<2&1020|D(14)>>6)&1023,v[13]=(D(14)<<4|D(15)>>4)&1023,m+=16,g=0}function z(){v[0]=D(0)<<4|D(1)>>4,v[1]=((D(1)&15)<<8|D(2))&4095,v[2]=D(3)>>6&3,v[3]=(D(3)&63)<<2|D(4)>>6,v[4]=(D(4)&63)<<2|D(5)>>6,v[5]=(D(5)&63)<<2|D(6)>>6,v[6]=D(6)>>4&3,v[7]=(D(6)&15)<<4|D(7)>>4,v[8]=(D(7)&15)<<4|D(8)>>4,v[9]=(D(8)&15)<<4|D(9)>>4,v[10]=D(9)>>2&3,v[11]=(D(9)&3)<<6|D(10)>>2,v[12]=(D(10)&3)<<6|D(11)>>2,v[13]=(D(11)&3)<<6|D(12)>>2,v[14]=D(12)&3,v[15]=D(13),v[16]=D(14),v[17]=D(15),m+=16,g=0}function O(){_[0]=0,_[1]=0,S[0]=0,S[1]=0}if(f==7)throw f;if(f==6){var N=c==12,F=N?z:B,k=N?14:11,V=N?128:512,q=N?2048:8192,ot=N?16383:65535,ht=N?4095:16383,ut=o/k,G=ut*16,J=N?18:14;for(y=0;y<l-15;y+=16){var nt=Math.min(16,l-y),xt=G*nt;for(A=new Uint8Array(a,e+u,xt),m=0,u+=xt,L=0,b=0;L<nt;L++,b=0){M=(y+L)*o;for(var ft=0;ft<ut;ft++)for(F(),O(),x=0,E=0,d=0;d<k;d++){if(w=d&1,d%3==2){var bt=g<J?v[g++]:0;bt==3&&(bt=4),E=V<<bt,x=1<<bt}var Ut=g<J?v[g++]:0;_[w]?(Ut*=x,E<q&&S[w]>E&&(Ut+=S[w]-E),S[w]=Ut):(_[w]=Ut,Ut?S[w]=Ut:Ut=S[w]),C[M+b++]=Ut-15<=ot?Ut-15&ot:Ut+2147483633>>31&ht}}}}else if(f==5){var vt=c==12?10:9;for(y=0;y<l;y++)for(b=0;b<o;b+=vt)P(0),c==12?(C[M++]=((v[1]&15)<<8)+v[0],C[M++]=16*v[2]+(v[1]>>4),C[M++]=((v[4]&15)<<8)+v[3],C[M++]=16*v[5]+(v[4]>>4),C[M++]=((v[7]&15)<<8)+v[6],C[M++]=16*v[8]+(v[7]>>4),C[M++]=((v[10]&15)<<8)+v[9],C[M++]=16*v[11]+(v[10]>>4),C[M++]=((v[13]&15)<<8)+v[12],C[M++]=16*v[14]+(v[13]>>4)):c==14&&(C[M++]=v[0]+((v[1]&63)<<8),C[M++]=(v[1]>>6)+4*v[2]+((v[3]&15)<<10),C[M++]=(v[3]>>4)+16*v[4]+((v[5]&3)<<12),C[M++]=((v[5]&252)>>2)+(v[6]<<6),C[M++]=v[7]+((v[8]&63)<<8),C[M++]=(v[8]>>6)+4*v[9]+((v[10]&15)<<10),C[M++]=(v[10]>>4)+16*v[11]+((v[12]&3)<<12),C[M++]=((v[12]&252)>>2)+(v[13]<<6),C[M++]=v[14]+((v[15]&63)<<8))}else if(f==4)for(y=0;y<l;y++)for(b=0;b<o;b++)d=b%14,w=d&1,d==0&&O(),d%3==2&&(x=4>>3-P(2)),S[w]?(p=P(8),p!=0&&(_[w]-=128<<x,(_[w]<0||x==4)&&(_[w]&=~(-1<<x)),_[w]+=p<<x)):(S[w]=P(8),(S[w]||d>11)&&(_[w]=S[w]<<4|P(4))),C[M++]=_[b&1];else throw f};K.decode._decodeVC5=function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],t,e,n,r=[3,3,3,3,2,2,2,1,1,1],s=24576,a=16384,o=8192,l=a|o;function c(x){var _=x[1],S=x[0][_>>>3]>>>7-(_&7)&1;return x[1]++,S}function f(x,_){if(t==null){t={};for(var S=0;S<i.length;S+=4)t[i[S+1]]=i.slice(S,S+4)}for(var w=c(x),M=t[w];M==null;)w=w<<1|c(x),M=t[w];var E=M[3];E!=0&&(E=c(x)==0?E:-E),_[0]=M[2],_[1]=E}function u(x,_){for(var S=0;S<_;S++)(x&1)==1&&x++,x=x>>>1;return x}function h(x,_){return x>>_}function m(x,_,S,w,M,E){_[S]=h(h(11*x[M]-4*x[M+E]+x[M+E+E]+4,3)+x[w],1),_[S+E]=h(h(5*x[M]+4*x[M+E]-x[M+E+E]+4,3)-x[w],1)}function g(x,_,S,w,M,E){var y=x[M-E]-x[M+E],b=x[M],L=x[w];_[S]=h(h(y+4,3)+b+L,1),_[S+E]=h(h(-y+4,3)+b-L,1)}function v(x,_,S,w,M,E){_[S]=h(h(5*x[M]+4*x[M-E]-x[M-E-E]+4,3)+x[w],1),_[S+E]=h(h(11*x[M]-4*x[M-E]+x[M-E-E]+4,3)-x[w],1)}function d(x){return x=x<0?0:x>4095?4095:x,x=n[x]>>>2,x}function p(x,_,S,w,M,E){w=new Uint16Array(w.buffer);var y=Date.now(),b=K._binBE,L=_+S,A,C,P,D,B,z,O,N,F,k;_+=4;for(var V=E[0]==1;_<L;){var q=b.readShort(x,_),ot=b.readUshort(x,_+2);if(_+=4,q==12)A=ot;else if(q==20)C=ot;else if(q==21)P=ot;else if(q==48)D=ot;else if(q==53)B=ot;else if(q!=35){if(q==62)z=ot;else if(q!=101){if(q==109)O=ot;else if(q!=84&&q!=106&&q!=107&&q!=108&&q!=102){if(q==104)N=ot;else if(q!=105){var ht=q<0?-q:q,ut=ht&65280,G=0;if(ht&l&&(ht&o?(G=ot&65535,G+=(ht&255)<<16):G=ot&65535),(ht&s)==s){if(F==null){F=[];for(var J=0;J<4;J++)F[J]=new Int16Array((C>>>1)*(P>>>1));k=new Int16Array((C>>>1)*(P>>>1)),e=new Int16Array(1024);for(var J=0;J<1024;J++){var nt=J-512,xt=Math.abs(nt),A=Math.floor(768*xt*xt*xt/(65025*255))+xt;e[J]=Math.sign(nt)*A}n=new Uint16Array(4096);for(var ft=65535,J=0;J<4096;J++){var bt=J,Ut=ft*(Math.pow(113,bt/4095)-1)/112;n[J]=Math.min(Ut,ft)}}var vt=F[z],et=u(C,1+r[D]),rt=u(P,1+r[D]);if(D==0)for(var Z=0;Z<rt;Z++)for(var ct=0;ct<et;ct++){var U=_+(Z*et+ct)*2;vt[Z*(C>>>1)+ct]=x[U]<<8|x[U+1]}else{for(var Pt=[x,_*8],yt=[],St=0,_t=et*rt,I=[0,0],T=0,ot=0;St<_t;)for(f(Pt,I),T=I[0],ot=I[1];T>0;)yt[St++]=ot,T--;for(var W=(D-1)%3,j=W!=1?et:0,it=W!=0?rt:0,Z=0;Z<rt;Z++)for(var $=(Z+it)*(C>>>1)+j,Et=Z*et,ct=0;ct<et;ct++)vt[$+ct]=e[yt[Et+ct]+512]*B;if(W==2){for(var N=C>>>1,dt=et*2,At=rt*2,Z=0;Z<rt;Z++)for(var ct=0;ct<dt;ct++){var J=Z*2*N+ct,Tt=Z*N+ct,at=rt*N+Tt;Z==0?m(vt,k,J,at,Tt,N):Z==rt-1?v(vt,k,J,at,Tt,N):g(vt,k,J,at,Tt,N)}var pt=vt;vt=k,k=pt;for(var Z=0;Z<At;Z++)for(var ct=0;ct<et;ct++){var J=Z*N+2*ct,Tt=Z*N+ct,at=et+Tt;ct==0?m(vt,k,J,at,Tt,1):ct==et-1?v(vt,k,J,at,Tt,1):g(vt,k,J,at,Tt,1)}var pt=vt;vt=k,k=pt;for(var Dt=[],Nt=2-~~((D-1)/3),Ct=0;Ct<3;Ct++)Dt[Ct]=O>>14-Ct*2&3;var jt=Dt[Nt];if(jt!=0)for(var Z=0;Z<At;Z++)for(var ct=0;ct<dt;ct++){var J=Z*N+ct;vt[J]=vt[J]<<jt}}}if(D==9&&z==3)for(var X=F[0],wt=F[1],Mt=F[2],Ft=F[3],Z=0;Z<P;Z+=2)for(var ct=0;ct<C;ct+=2){var mt=Z*C+ct,U=(Z>>>1)*(C>>>1)+(ct>>>1),lt=X[U],Bt=wt[U]-2048,Xt=Mt[U]-2048,ie=Ft[U]-2048,ee=(Bt<<1)+lt,We=(Xt<<1)+lt,Xe=lt+ie,$i=lt-ie;V?(w[mt]=d(Xe),w[mt+1]=d(We),w[mt+C]=d(ee),w[mt+C+1]=d($i)):(w[mt]=d(ee),w[mt+1]=d(Xe),w[mt+C]=d($i),w[mt+C+1]=d(We))}_+=G*4}else if(ht==16388)_+=G*4;else if(!(ut==8192||ut==8448||ut==9216))throw ht.toString(16)}}}}}console.log(Date.now()-y)}return p}();K.decode._decodeLogLuv32=function(i,t,e,n,r,s){for(var a=i.width,o=a*4,l=0,c=new Uint8Array(o);l<n;){for(var f=0;f<o;){var u=t[e+l];if(l++,u<128){for(var h=0;h<u;h++)c[f+h]=t[e+l+h];f+=u,l+=u}else{u=u-126;for(var h=0;h<u;h++)c[f+h]=t[e+l];f+=u,l++}}for(var m=0;m<a;m++)r[s+0]=c[m],r[s+1]=c[m+a],r[s+2]=c[m+a*2],r[s+4]=c[m+a*3],s+=6}};K.decode._ljpeg_diff=function(i,t,e){var n=K.decode._getbithuff,r,s;return r=n(i,t,e[0],e),s=n(i,t,r,0),!(s&1<<r-1)&&(s-=(1<<r)-1),s};K.decode._decodeARW=function(i,t,e,n,r,s){var a=i.t256[0],o=i.t257[0],l=i.t258[0],c=i.isLE?K._binLE:K._binBE,f=a*o==n||a*o*1.5==n;if(!f){o+=8;var u=[e,0,0,0],h=new Uint16Array(32770),m=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],O,g,v,b,y,d=0,p=K.decode._ljpeg_diff;for(h[0]=15,v=O=0;O<18;O++)for(var x=32768>>>(m[O]>>>8),g=0;g<x;g++)h[++v]=m[O];for(b=a;b--;)for(y=0;y<o+1;y+=2)if(y==o&&(y=1),d+=p(t,u,h),y<o){var _=d&4095;K.decode._putsF(r,(y*a+b)*l,_<<16-l)}return}if(a*o*1.5==n){for(var O=0;O<n;O+=3){var S=t[e+O+0],w=t[e+O+1],M=t[e+O+2];r[s+O]=w<<4|S>>>4,r[s+O+1]=S<<4|M>>>4,r[s+O+2]=M<<4|w>>>4}return}var E=new Uint16Array(16),y,b,L,A,C,P,D,B,z,O,N,F=new Uint8Array(a+1);for(y=0;y<o;y++){for(var k=0;k<a;k++)F[k]=t[e++];for(N=0,b=0;b<a-30;N+=16){for(A=2047&(L=c.readUint(F,N)),C=2047&L>>>11,P=15&L>>>22,D=15&L>>>26,B=0;B<4&&128<<B<=A-C;B++);for(z=30,O=0;O<16;O++)O==P?E[O]=A:O==D?E[O]=C:(E[O]=((c.readUshort(F,N+(z>>3))>>>(z&7)&127)<<B)+C,E[O]>2047&&(E[O]=2047),z+=7);for(O=0;O<16;O++,b+=2){var _=E[O]<<1;K.decode._putsF(r,(y*a+b)*l,_<<16-l)}b-=b&1?1:31}}};K.decode._decodeNikon=function(i,t,e,n,r,s,a){var o=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],l=i.t256[0],c=i.t257[0],f=i.t258[0],u=0,h=0,m=K.decode._make_decoder,g=K.decode._getbithuff,v=t[0].exifIFD.makerNote,d=v.t150?v.t150:v.t140,p=0,x=d[p++],_=d[p++];(x==73||_==88)&&(p+=2110),x==70&&(u=2),f==14&&(u+=3);for(var S=[[0,0],[0,0]],w=i.isLE?K._binLE:K._binBE,L=0;L<2;L++)for(var M=0;M<2;M++)S[L][M]=w.readShort(d,p),p+=2;var E=1<<f&32767,y=0,b=w.readShort(d,p);p+=2,b>1&&(y=Math.floor(E/(b-1))),x==68&&_==32&&y>0&&(h=w.readShort(d,562));var L,A,C,P,D,B,z=[0,0],O=m(o[u]),N=[n,0,0,0];for(A=0;A<c;A++)for(h&&A==h&&(O=m(o[u+1])),C=0;C<l;C++){L=g(e,N,O[0],O),P=L&15,D=L>>>4,B=(g(e,N,P-D,0)<<1)+1<<D>>>1,!(B&1<<P-1)&&(B-=(1<<P)-(D==0?1:0)),C<2?z[C]=S[A&1][C]+=B:z[C&1]+=B;var F=Math.min(Math.max(z[C&1],0),(1<<f)-1),k=(A*l+C)*f;K.decode._putsF(s,k,F<<16-f)}};K.decode._putsF=function(i,t,e){e=e<<8-(t&7);var n=t>>>3;i[n]|=e>>>16,i[n+1]|=e>>>8,i[n+2]|=e};K.decode._getbithuff=function(i,t,e,n){var r=0;K.decode._get_byte;var s,a=t[0],o=t[1],l=t[2],c=t[3];if(e==0||l<0)return 0;for(;!c&&l<e&&(s=i[a++])!=-1&&!(c=r);)o=(o<<8)+s,l+=8;if(s=o<<32-l>>>32-e,n?(l-=n[s+1]>>>8,s=n[s+1]&255):l-=e,l<0)throw"e";return t[0]=a,t[1]=o,t[2]=l,t[3]=c,s};K.decode._make_decoder=function(i){var t,e,n,r,s,a=[];for(t=16;t!=0&&!i[t];t--);var o=17;for(a[0]=t,n=e=1;e<=t;e++)for(r=0;r<i[e];r++,++o)for(s=0;s<1<<t-e;s++)n<=1<<t&&(a[n++]=e<<8|i[o]);return a};K.decode._decodeNewJPEG=function(i,t,e,n,r,s){n=Math.min(n,t.length-e);var a=i.t347,o=a?a.length:0,l=new Uint8Array(o+n);if(a){for(var c=216,f=217,u=0,h=0;h<o-1&&!(a[h]==255&&a[h+1]==f);h++)l[u++]=a[h];var m=t[e],g=t[e+1];(m!=255||g!=c)&&(l[u++]=m,l[u++]=g);for(var h=2;h<n;h++)l[u++]=t[e+h]}else for(var h=0;h<n;h++)l[h]=t[e+h];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var v=i.t258[0],d=K.LosslessJpegDecode(l),p=d.length;if(v==16)if(i.isLE)for(var h=0;h<p;h++)r[s+(h<<1)]=d[h]&255,r[s+(h<<1)+1]=d[h]>>>8;else for(var h=0;h<p;h++)r[s+(h<<1)]=d[h]>>>8,r[s+(h<<1)+1]=d[h]&255;else if(v==14||v==12||v==10)for(var x=16-v,h=0;h<p;h++)K.decode._putsF(r,h*v,d[h]<<x);else if(v==8)for(var h=0;h<p;h++)r[s+h]=d[h];else throw new Error("unsupported bit depth "+v)}else{var _=new K.JpegDecoder;_.parse(l);for(var S=_.getData({width:_.width,height:_.height,forceRGB:!0,isSourcePDF:!1}),h=0;h<S.length;h++)r[s+h]=S[h]}i.t262[0]==6&&(i.t262[0]=2)};K.decode._decodeOldJPEGInit=function(i,t,e,n){var r=216,s=219,a=196,o=221,l=192,c=218,f=0,u=0,h,m,g=!1,v,d,p,x=i.t513,_=x?x[0]:0,S=i.t514,w=S?S[0]:0,M=i.t324||i.t273||x,E=i.t530,y=0,b=0,L=i.t277?i.t277[0]:1,A=i.t515;if(M&&(u=M[0],g=M.length>1),!g){if(t[e]==255&&t[e+1]==r)return{jpegOffset:e};if(x!=null&&(t[e+_]==255&&t[e+_+1]==r?f=e+_:log("JPEGInterchangeFormat does not point to SOI"),S==null?log("JPEGInterchangeFormatLength field is missing"):(_>=u||_+w<=u)&&log("JPEGInterchangeFormatLength field value is invalid"),f!=null))return{jpegOffset:f}}if(E!=null&&(y=E[0],b=E[1]),x!=null&&S!=null)if(w>=2&&_+w<=u){for(t[e+_+w-2]==255&&t[e+_+w-1]==r?h=new Uint8Array(w-2):h=new Uint8Array(w),v=0;v<h.length;v++)h[v]=t[e+_+v];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(h==null){var C=0,P=[];P[C++]=255,P[C++]=r;var D=i.t519;if(D==null)throw new Error("JPEGQTables tag is missing");for(v=0;v<D.length;v++)for(P[C++]=255,P[C++]=s,P[C++]=0,P[C++]=67,P[C++]=v,d=0;d<64;d++)P[C++]=t[e+D[v]+d];for(p=0;p<2;p++){var B=i[p==0?"t520":"t521"];if(B==null)throw new Error((p==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(v=0;v<B.length;v++){P[C++]=255,P[C++]=a;var z=19;for(d=0;d<16;d++)z+=t[e+B[v]+d];for(P[C++]=z>>>8,P[C++]=z&255,P[C++]=v|p<<4,d=0;d<16;d++)P[C++]=t[e+B[v]+d];for(d=0;d<z;d++)P[C++]=t[e+B[v]+16+d]}}if(P[C++]=255,P[C++]=l,P[C++]=0,P[C++]=8+3*L,P[C++]=8,P[C++]=i.height>>>8&255,P[C++]=i.height&255,P[C++]=i.width>>>8&255,P[C++]=i.width&255,P[C++]=L,L==1)P[C++]=1,P[C++]=17,P[C++]=0;else for(v=0;v<3;v++)P[C++]=v+1,P[C++]=v!=0?17:(y&15)<<4|b&15,P[C++]=v;A!=null&&A[0]!=0&&(P[C++]=255,P[C++]=o,P[C++]=0,P[C++]=4,P[C++]=A[0]>>>8&255,P[C++]=A[0]&255),h=new Uint8Array(P)}var O=-1;for(v=0;v<h.length-1;){if(h[v]==255&&h[v+1]==l){O=v;break}v++}if(O==-1){var N=new Uint8Array(h.length+10+3*L);N.set(h);var F=h.length;if(O=h.length,h=N,h[F++]=255,h[F++]=l,h[F++]=0,h[F++]=8+3*L,h[F++]=8,h[F++]=i.height>>>8&255,h[F++]=i.height&255,h[F++]=i.width>>>8&255,h[F++]=i.width&255,h[F++]=L,L==1)h[F++]=1,h[F++]=17,h[F++]=0;else for(v=0;v<3;v++)h[F++]=v+1,h[F++]=v!=0?17:(y&15)<<4|b&15,h[F++]=v}if(t[u]==255&&t[u+1]==c){var k=t[u+2]<<8|t[u+3];for(m=new Uint8Array(k+2),m[0]=t[u],m[1]=t[u+1],m[2]=t[u+2],m[3]=t[u+3],v=0;v<k-2;v++)m[v+4]=t[u+v+4]}else{m=new Uint8Array(8+2*L);var V=0;if(m[V++]=255,m[V++]=c,m[V++]=0,m[V++]=6+2*L,m[V++]=L,L==1)m[V++]=1,m[V++]=0;else for(v=0;v<3;v++)m[V++]=v+1,m[V++]=v<<4|v;m[V++]=0,m[V++]=63,m[V++]=0}return{jpegOffset:e,tables:h,sosMarker:m,sofPosition:O}};K.decode._decodeOldJPEG=function(i,t,e,n,r,s){var a,o,l,c,f,u=K.decode._decodeOldJPEGInit(i,t,e,n);if(u.jpegOffset!=null)for(o=e+n-u.jpegOffset,c=new Uint8Array(o),a=0;a<o;a++)c[a]=t[u.jpegOffset+a];else{for(l=u.tables.length,c=new Uint8Array(l+u.sosMarker.length+n+2),c.set(u.tables),f=l,c[u.sofPosition+5]=i.height>>>8&255,c[u.sofPosition+6]=i.height&255,c[u.sofPosition+7]=i.width>>>8&255,c[u.sofPosition+8]=i.width&255,(t[e]!=255||t[e+1]!=SOS)&&(c.set(u.sosMarker,f),f+=sosMarker.length),a=0;a<n;a++)c[f++]=t[e+a];c[f++]=255,c[f++]=EOI}var h=new K.JpegDecoder;h.parse(c);for(var m=h.getData({width:h.width,height:h.height,forceRGB:!0,isSourcePDF:!1}),a=0;a<m.length;a++)r[s+a]=m[a];i.t262&&i.t262[0]==6&&(i.t262[0]=2)};K.decode._decodePackBits=function(i,t,e,n,r){for(var s=new Int8Array(i.buffer),a=new Int8Array(n.buffer),o=t+e;t<o;){var l=s[t];if(t++,l>=0&&l<128)for(var c=0;c<l+1;c++)a[r]=s[t],r++,t++;if(l>=-127&&l<0){for(var c=0;c<-l+1;c++)a[r]=s[t],r++;t++}}return r};K.decode._decodeThunder=function(i,t,e,n,r){for(var s=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],o=t+e,l=r*2,c=0;t<o;){var f=i[t],u=f>>>6,h=f&63;if(t++,u==3&&(c=h&15,n[l>>>1]|=c<<4*(1-l&1),l++),u==0)for(var m=0;m<h;m++)n[l>>>1]|=c<<4*(1-l&1),l++;if(u==2)for(var m=0;m<2;m++){var g=h>>>3*(1-m)&7;g!=4&&(c+=a[g],n[l>>>1]|=c<<4*(1-l&1),l++)}if(u==1)for(var m=0;m<3;m++){var g=h>>>2*(2-m)&3;g!=2&&(c+=s[g],n[l>>>1]|=c<<4*(1-l&1),l++)}}};K.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3};K.decode._lens=function(){var i=function(l,c,f,u){for(var h=0;h<c.length;h++)l[c[h]]=f+h*u},t="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",e="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",r="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",s="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";t=t.split(","),e=e.split(","),n=n.split(","),r=r.split(","),s=s.split(",");var a={},o={};return i(a,t,0,1),i(a,n,64,64),i(a,s,1792,64),i(o,e,0,1),i(o,r,64,64),i(o,s,1792,64),[a,o]}();K.decode._decodeG4=function(i,t,e,n,r,s,a){for(var o=K.decode,l=t<<3,c=0,f="",u=[],h=[],m=0;m<s;m++)h.push(0);h=o._makeDiff(h);for(var g=0,v=0,d=0,p=0,x=0,_=0,S="",w=0,M=Math.ceil(s/8)*8;l>>>3<t+e;){d=o._findDiff(h,g+(g==0?0:1),1-x),p=o._findDiff(h,d,x);var E=0;if(a==1&&(E=i[l>>>3]>>>7-(l&7)&1),a==2&&(E=i[l>>>3]>>>(l&7)&1),l++,f+=E,S=="H"){if(o._lens[x][f]!=null){var y=o._lens[x][f];f="",c+=y,y<64&&(o._addNtimes(u,c,x),g+=c,x=1-x,c=0,w--,w==0&&(S=""))}}else f=="0001"&&(f="",o._addNtimes(u,p-g,x),g=p),f=="001"&&(f="",S="H",w=2),o._dmap[f]!=null&&(v=d+o._dmap[f],o._addNtimes(u,v-g,x),g=v,f="",x=1-x);u.length==s&&S==""&&(o._writeBits(u,n,r*8+_*M),x=0,_++,g=0,h=o._makeDiff(u),u=[])}};K.decode._findDiff=function(i,t,e){for(var n=0;n<i.length;n+=2)if(i[n]>=t&&i[n+1]==e)return i[n]};K.decode._makeDiff=function(i){var t=[];i[0]==1&&t.push(0,1);for(var e=1;e<i.length;e++)i[e-1]!=i[e]&&t.push(e,i[e]);return t.push(i.length,0,i.length,1),t};K.decode._decodeG2=function(i,t,e,n,r,s,a){for(var o=K.decode,l=t<<3,c=0,f="",u=[],h=0,m=0,g=Math.ceil(s/8)*8;l>>>3<t+e;){var v=0;a==1&&(v=i[l>>>3]>>>7-(l&7)&1),a==2&&(v=i[l>>>3]>>>(l&7)&1),l++,f+=v,c=o._lens[h][f],c!=null&&(o._addNtimes(u,c,h),f="",c<64&&(h=1-h),u.length==s&&(o._writeBits(u,n,r*8+m*g),u=[],m++,h=0,l&7&&(l+=8-(l&7)),c>=64&&(l+=8)))}};K.decode._decodeG3=function(i,t,e,n,r,s,a,o){for(var l=K.decode,c=t<<3,f=0,u="",h=[],m=[],g=0;g<s;g++)h.push(0);for(var v=0,d=0,p=0,x=0,_=0,S=-1,w="",M=0,E=!0,y=Math.ceil(s/8)*8;c>>>3<t+e;){p=l._findDiff(m,v+(v==0?0:1),1-_),x=l._findDiff(m,p,_);var b=0;if(a==1&&(b=i[c>>>3]>>>7-(c&7)&1),a==2&&(b=i[c>>>3]>>>(c&7)&1),c++,u+=b,E){if(l._lens[_][u]!=null){var L=l._lens[_][u];u="",f+=L,L<64&&(l._addNtimes(h,f,_),_=1-_,f=0)}}else if(w=="H"){if(l._lens[_][u]!=null){var L=l._lens[_][u];u="",f+=L,L<64&&(l._addNtimes(h,f,_),v+=f,_=1-_,f=0,M--,M==0&&(w=""))}}else u=="0001"&&(u="",l._addNtimes(h,x-v,_),v=x),u=="001"&&(u="",w="H",M=2),l._dmap[u]!=null&&(d=p+l._dmap[u],l._addNtimes(h,d-v,_),v=d,u="",_=1-_);u.endsWith("000000000001")&&(S>=0&&l._writeBits(h,n,r*8+S*y),o&&(a==1&&(E=(i[c>>>3]>>>7-(c&7)&1)==1),a==2&&(E=(i[c>>>3]>>>(c&7)&1)==1),c++),u="",_=0,S++,v=0,m=l._makeDiff(h),h=[])}h.length==s&&l._writeBits(h,n,r*8+S*y)};K.decode._addNtimes=function(i,t,e){for(var n=0;n<t;n++)i.push(e)};K.decode._writeBits=function(i,t,e){for(var n=0;n<i.length;n++)t[e+n>>>3]|=i[n]<<7-(e+n&7)};K.decode._decodeLZW=K.decode._decodeLZW=function(){var i,t,e,n,r=0,s=0,a=0,o=0,l=function(){var d=i>>>3,p=t[d]<<16|t[d+1]<<8|t[d+2],x=p>>>24-(i&7)-s&(1<<s)-1;return i+=s,x},c=new Uint32Array(4096*4),f=0,u=function(d){if(d!=f){f=d,a=1<<d,o=a+1;for(var p=0;p<o+1;p++)c[4*p]=c[4*p+3]=p,c[4*p+1]=65535,c[4*p+2]=1}},h=function(d){s=d+1,r=o+1},m=function(d){for(var p=d<<2,x=c[p+2],_=n+x-1;p!=65535;)e[_--]=c[p],p=c[p+1];n+=x},g=function(d,p){var x=r<<2,_=d<<2;c[x]=c[(p<<2)+3],c[x+1]=_,c[x+2]=c[_+2]+1,c[x+3]=c[_+3],r++,r+1==1<<s&&s!=12&&s++},v=function(d,p,x,_,S,w){i=p<<3,t=d,e=_,n=S;var M=p+x<<3,E=0,y=0;for(u(w),h(w);i<M&&(E=l())!=o;){if(E==a){if(h(w),E=l(),E==o)break;m(E)}else E<r?(m(E),g(y,E)):(g(y,y),m(r-1));y=E}return n};return v}();K.tags={};K._types=function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var t={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:t},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}}();K._readIFD=function(i,t,e,n,r,s){var a=i.readUshort(t,e);e+=2;var o={};s.debug&&log("   ".repeat(r),n.length-1,">>>----------------");for(var l=0;l<a;l++){var c=i.readUshort(t,e);e+=2;var f=i.readUshort(t,e);e+=2;var u=i.readUint(t,e);e+=4;var h=i.readUint(t,e);e+=4;var m=[];if(f==1||f==7){var g=u<5?e-4:h;g+u>t.buffer.byteLength&&(u=t.buffer.byteLength-g),m=new Uint8Array(t.buffer,g,u)}if(f==2){var v=u<5?e-4:h,d=t[v],p=Math.max(0,Math.min(u-1,t.length-v));d<128||p==0?m.push(i.readASCII(t,v,p)):m=new Uint8Array(t.buffer,v,p)}if(f==3)for(var x=0;x<u;x++)m.push(i.readUshort(t,(u<3?e-4:h)+2*x));if(f==4||f==13)for(var x=0;x<u;x++)m.push(i.readUint(t,(u<2?e-4:h)+4*x));if(f==5||f==10)for(var _=f==5?i.readUint:i.readInt,x=0;x<u;x++)m.push([_(t,h+x*8),_(t,h+x*8+4)]);if(f==8)for(var x=0;x<u;x++)m.push(i.readShort(t,(u<3?e-4:h)+2*x));if(f==9)for(var x=0;x<u;x++)m.push(i.readInt(t,(u<2?e-4:h)+4*x));if(f==11)for(var x=0;x<u;x++)m.push(i.readFloat(t,h+x*4));if(f==12)for(var x=0;x<u;x++)m.push(i.readDouble(t,h+x*8));if(u!=0&&m.length==0){if(log(c,"unknown TIFF tag type: ",f,"num:",u),l==0)return;continue}if(s.debug&&log("   ".repeat(r),c,f,K.tags[c],m),o["t"+c]=m,!(c==330&&o.t272&&o.t272[0]=="DSLR-A100")&&(c==330||c==34665||c==34853||c==50740&&i.readUshort(t,i.readUint(m,0))<300||c==61440)){for(var S=c==50740?[i.readUint(m,0)]:m,w=[],x=0;x<S.length;x++)K._readIFD(i,t,S[x],w,r+1,s);c==330&&(o.subIFD=w),c==34665&&(o.exifIFD=w[0]),c==34853&&(o.gpsiIFD=w[0]),c==50740&&(o.dngPrvt=w[0]),c==61440&&(o.fujiIFD=w[0])}if(c==37500&&s.parseMN){var M=m;if(i.readASCII(M,0,5)=="Nikon")o.makerNote=K.decode(M.slice(10).buffer)[0];else if(i.readASCII(M,0,5)=="OLYMP"||i.readASCII(M,0,9)=="OM SYSTEM"){var E=[8208,8224,8240,8256,8272],y=[];K._readIFD(i,M,M[1]==77?16:M[5]==85?12:8,y,r+1,s);for(var b=o.makerNote=y.pop(),x=0;x<E.length;x++){var L="t"+E[x];b[L]!=null&&(K._readIFD(i,M,b[L][0],y,r+1,s),b[L]=y.pop())}b.t12288&&(K._readIFD(i,b.t12288,0,y,r+1,s),b.t12288=y.pop())}else if(i.readUshort(t,h)<300&&i.readUshort(t,h+4)<=12){var y=[];K._readIFD(i,t,h,y,r+1,s),o.makerNote=y[0]}}}return n.push(o),s.debug&&log("   ".repeat(r),"<<<---------------"),e};K._writeIFD=function(i,t,e,n,r){var s=Object.keys(r),a=s.length;r.exifIFD&&a--,r.gpsiIFD&&a--,i.writeUshort(e,n,a),n+=2;for(var o=n+a*12+4,l=0;l<s.length;l++){var c=s[l];if(!(c=="t34665"||c=="t34853")){c=="exifIFD"&&(c="t34665"),c=="gpsiIFD"&&(c="t34853");var f=parseInt(c.slice(1)),u=t.main[f];if(u==null&&(u=t.rest[f]),u==null||u==0)throw new Error("unknown type of tag: "+f);var h=r[c];if(f==34665){var m=K._writeIFD(i,t,e,o,r.exifIFD);h=[o],o=m[1]}if(f==34853){var m=K._writeIFD(i,K._types.gps,e,o,r.gpsiIFD);h=[o],o=m[1]}u==2&&(h=h[0]+"\0");var g=h.length;i.writeUshort(e,n,f),n+=2,i.writeUshort(e,n,u),n+=2,i.writeUint(e,n,g),n+=4;var v=[-1,1,1,2,4,8,0,1,0,4,8,0,8][u]*g,d=n;if(v>4&&(i.writeUint(e,n,o),d=o),u==1||u==7)for(var p=0;p<g;p++)e[d+p]=h[p];else if(u==2)i.writeASCII(e,d,h);else if(u==3)for(var p=0;p<g;p++)i.writeUshort(e,d+2*p,h[p]);else if(u==4)for(var p=0;p<g;p++)i.writeUint(e,d+4*p,h[p]);else if(u==5||u==10)for(var x=u==5?i.writeUint:i.writeInt,p=0;p<g;p++){var _=h[p],S=_[0],w=_[1];if(S==null)throw"e";x(e,d+8*p,S),x(e,d+8*p+4,w)}else if(u==9)for(var p=0;p<g;p++)i.writeInt(e,d+4*p,h[p]);else if(u==12)for(var p=0;p<g;p++)i.writeDouble(e,d+8*p,h[p]);else throw u;v>4&&(v+=v&1,o+=v),n+=4}}return[n,o]};K.toRGBA8=function(i,t){function e(yt){return yt<.0031308?12.92*yt:1.055*Math.pow(yt,1/2.4)-.055}var n=i.width,r=i.height,s=n*r,a=i.data,o=new Uint8Array(s*4),l=i.t262?i.t262[0]:2,c=i.t258?Math.min(32,i.t258[0]):1;i.t262==null&&c==1&&(l=0);var f=i.t277?i.t277[0]:i.t258?i.t258.length:[1,1,3,1,1,4,3][l],u=i.t339?i.t339[0]:null;if(l==1&&c==32&&u!=3)throw"e";var h=Math.ceil(f*c*n/8);if(l==0){t=1/256;for(var m=0;m<r;m++){var g=m*h,v=m*n;if(c==1)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>3)]>>7-(d&7)&1;o[p]=o[p+1]=o[p+2]=(1-x)*255,o[p+3]=255}if(c==4)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>1)]>>4-4*(d&1)&15;o[p]=o[p+1]=o[p+2]=(15-x)*17,o[p+3]=255}if(c==8)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+d];o[p]=o[p+1]=o[p+2]=255-x,o[p+3]=255}if(c==16)for(var d=0;d<n;d++){var p=v+d<<2,_=g+2*d,x=a[_+1]<<8|a[_];o[p]=o[p+1]=o[p+2]=Math.min(255,255-~~(x*t)),o[p+3]=255}}}else if(l==1){t==null&&(t=1/256);for(var S=a.length&3?null:new Float32Array(a.buffer),m=0;m<r;m++){var g=m*h,v=m*n;if(c==1)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>3)]>>7-(d&7)&1;o[p]=o[p+1]=o[p+2]=x*255,o[p+3]=255}if(c==2)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+(d>>2)]>>6-2*(d&3)&3;o[p]=o[p+1]=o[p+2]=x*85,o[p+3]=255}if(c==8)for(var d=0;d<n;d++){var p=v+d<<2,x=a[g+d*f];o[p]=o[p+1]=o[p+2]=x,o[p+3]=255}if(c==16)for(var d=0;d<n;d++){var p=v+d<<2,_=g+2*d,x=a[_+1]<<8|a[_];o[p]=o[p+1]=o[p+2]=Math.min(255,~~(x*t)),o[p+3]=255}if(c==32)for(var d=0;d<n;d++){var p=v+d<<2,_=(g>>>2)+d,x=S[_];o[p]=o[p+1]=o[p+2]=~~(.5+255*x),o[p+3]=255}}}else if(l==2)if(c==8){if(f==1)for(var d=0;d<s;d++)o[4*d]=o[4*d+1]=o[4*d+2]=a[d],o[4*d+3]=255;if(f==3)for(var d=0;d<s;d++){var p=d<<2,w=d*3;o[p]=a[w],o[p+1]=a[w+1],o[p+2]=a[w+2],o[p+3]=255}if(f>=4)for(var d=0;d<s;d++){var p=d<<2,w=d*f;o[p]=a[w],o[p+1]=a[w+1],o[p+2]=a[w+2],o[p+3]=a[w+3]}}else if(c==16){if(f==4)for(var d=0;d<s;d++){var p=d<<2,w=d*8+1;o[p]=a[w],o[p+1]=a[w+2],o[p+2]=a[w+4],o[p+3]=a[w+6]}if(f==3)for(var d=0;d<s;d++){var p=d<<2,w=d*6+1;o[p]=a[w],o[p+1]=a[w+2],o[p+2]=a[w+4],o[p+3]=255}}else if(c==32){for(var M=new Float32Array(a.buffer),E=0,d=0;d<M.length;d++)E=Math.min(E,M[d]);if(E<0)for(var d=0;d<a.length;d+=4){var y=a[d];a[d]=a[d+3],a[d+3]=y,y=a[d+1],a[d+1]=a[d+2],a[d+2]=y}for(var b=[],d=0;d<65536;d++)b.push(e(d/65535));for(var d=0;d<M.length;d++){var L=Math.max(0,Math.min(1,M[d]));M[d]=b[~~(.5+L*65535)]}if(f==3)for(var d=0;d<s;d++){var p=d<<2,w=d*3;o[p]=~~(.5+M[w]*255),o[p+1]=~~(.5+M[w+1]*255),o[p+2]=~~(.5+M[w+2]*255),o[p+3]=255}else if(f==4)for(var d=0;d<s;d++){var p=d<<2,w=d*4;o[p]=~~(.5+M[w]*255),o[p+1]=~~(.5+M[w+1]*255),o[p+2]=~~(.5+M[w+2]*255),o[p+3]=~~(.5+M[w+3]*255)}else throw f}else throw c;else if(l==3)for(var A=i.t320,C=1<<c,P=c==8&&f>1&&i.t338&&i.t338[0]!=0,m=0;m<r;m++)for(var D=0;D<n;D++){var d=m*n+D,p=d<<2,B=0,z=m*h;if(c==1)B=a[z+(D>>>3)]>>>7-(D&7)&1;else if(c==2)B=a[z+(D>>>2)]>>>6-2*(D&3)&3;else if(c==4)B=a[z+(D>>>1)]>>>4-4*(D&1)&15;else if(c==8)B=a[z+D*f];else throw c;o[p]=A[B]>>8,o[p+1]=A[C+B]>>8,o[p+2]=A[C+C+B]>>8,o[p+3]=P?a[z+D*f+1]:255}else if(l==5)for(var O=f>4?1:0,d=0;d<s;d++){var p=d<<2,N=d*f;if(window.UDOC){var F=a[N],k=a[N+1],V=a[N+2],q=a[N+3],ot=UDOC.C.cmykToRgb([F*(1/255),k*(1/255),V*(1/255),q*(1/255)]);o[p]=~~(.5+255*ot[0]),o[p+1]=~~(.5+255*ot[1]),o[p+2]=~~(.5+255*ot[2])}else{var F=255-a[N],k=255-a[N+1],V=255-a[N+2],q=(255-a[N+3])*(1/255);o[p]=~~(F*q+.5),o[p+1]=~~(k*q+.5),o[p+2]=~~(V*q+.5)}o[p+3]=255*(1-O)+a[N+4]*O}else if(l==6&&i.t278)for(var ht=i.t278[0],m=0;m<r;m+=ht)for(var d=m*n,ut=ht*n,G=0;G<ut;G++){var p=4*(d+G),N=3*d+4*(G>>>1),V=a[N+(G&1)],J=a[N+2]-128,nt=a[N+3]-128,xt=V+((nt>>2)+(nt>>3)+(nt>>5)),ft=V-((J>>2)+(J>>4)+(J>>5))-((nt>>1)+(nt>>3)+(nt>>4)+(nt>>5)),bt=V+(J+(J>>1)+(J>>2)+(J>>6));o[p]=Math.max(0,Math.min(255,xt)),o[p+1]=Math.max(0,Math.min(255,ft)),o[p+2]=Math.max(0,Math.min(255,bt)),o[p+3]=255}else if(l==32845)for(var m=0;m<r;m++)for(var D=0;D<n;D++){var N=(m*n+D)*6,p=(m*n+D)*4,Ut=a[N+1]<<8|a[N],Ut=Math.pow(2,(Ut+.5)/256-64),vt=(a[N+3]+.5)/410,et=(a[N+5]+.5)/410,rt=9*vt/(6*vt-16*et+12),Z=4*et/(6*vt-16*et+12),ct=Ut,U=rt*ct/Z,V=ct,Pt=(1-rt-Z)*ct/Z,xt=2.69*U-1.276*V-.414*Pt,ft=-1.022*U+1.978*V+.044*Pt,bt=.061*U-.224*V+1.163*Pt;o[p]=e(Math.min(xt,1))*255,o[p+1]=e(Math.min(ft,1))*255,o[p+2]=e(Math.min(bt,1))*255,o[p+3]=255}else log("Unknown Photometric interpretation: "+l);return o};K.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var t=["tif","tiff","dng","cr2","nef"],e=0;e<i.length;e++){var n=i[e],r=n.getAttribute("src");if(r!=null){var s=r.split(".").pop().toLowerCase();if(t.indexOf(s)!=-1){var a=new XMLHttpRequest;K._xhrs.push(a),K._imgs.push(n),a.open("GET",r),a.responseType="arraybuffer",a.onload=K._imgLoaded,a.send()}}}};K._xhrs=[];K._imgs=[];K._imgLoaded=function(i){var t=K._xhrs.indexOf(i.target),e=K._imgs[t];K._xhrs.splice(t,1),K._imgs.splice(t,1),e.setAttribute("src",K.bufferToURI(i.target.response))};K.bufferToURI=function(i){var t=K.decode(i),e=t,n=0,r=e[0];t[0].subIFD&&(e=e.concat(t[0].subIFD));for(var s=0;s<e.length;s++){var a=e[s];if(!(a.t258==null||a.t258.length<3)){var o=a.t256*a.t257;o>n&&(n=o,r=a)}}K.decodeImage(i,r,t);var l=K.toRGBA8(r),c=r.width,f=r.height,u=document.createElement("canvas");u.width=c,u.height=f;var h=u.getContext("2d"),m=new ImageData(new Uint8ClampedArray(l.buffer),c,f);return h.putImageData(m,0,0),u.toDataURL()};K._binBE={nextZero:function(i,t){for(;i[t]!=0;)t++;return t},readUshort:function(i,t){return i[t]<<8|i[t+1]},readShort:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+1],e[1]=i[t+0],K._binBE.i16[0]},readInt:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],K._binBE.i32[0]},readUint:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],K._binBE.ui32[0]},readASCII:function(i,t,e){for(var n="",r=0;r<e;r++)n+=String.fromCharCode(i[t+r]);return n},readFloat:function(i,t){for(var e=K._binBE.ui8,n=0;n<4;n++)e[n]=i[t+3-n];return K._binBE.fl32[0]},readDouble:function(i,t){for(var e=K._binBE.ui8,n=0;n<8;n++)e[n]=i[t+7-n];return K._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e>>8&255,i[t+1]=e&255},writeInt:function(i,t,e){var n=K._binBE.ui8;K._binBE.i32[0]=e,i[t+3]=n[0],i[t+2]=n[1],i[t+1]=n[2],i[t+0]=n[3]},writeUint:function(i,t,e){i[t]=e>>24&255,i[t+1]=e>>16&255,i[t+2]=e>>8&255,i[t+3]=e>>0&255},writeASCII:function(i,t,e){for(var n=0;n<e.length;n++)i[t+n]=e.charCodeAt(n)},writeDouble:function(i,t,e){K._binBE.fl64[0]=e;for(var n=0;n<8;n++)i[t+n]=K._binBE.ui8[7-n]}};K._binBE.ui8=new Uint8Array(8);K._binBE.i16=new Int16Array(K._binBE.ui8.buffer);K._binBE.i32=new Int32Array(K._binBE.ui8.buffer);K._binBE.ui32=new Uint32Array(K._binBE.ui8.buffer);K._binBE.fl32=new Float32Array(K._binBE.ui8.buffer);K._binBE.fl64=new Float64Array(K._binBE.ui8.buffer);K._binLE={nextZero:K._binBE.nextZero,readUshort:function(i,t){return i[t+1]<<8|i[t]},readShort:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],K._binBE.i16[0]},readInt:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],K._binBE.i32[0]},readUint:function(i,t){var e=K._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],K._binBE.ui32[0]},readASCII:K._binBE.readASCII,readFloat:function(i,t){for(var e=K._binBE.ui8,n=0;n<4;n++)e[n]=i[t+n];return K._binBE.fl32[0]},readDouble:function(i,t){for(var e=K._binBE.ui8,n=0;n<8;n++)e[n]=i[t+n];return K._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e&255,i[t+1]=e>>8&255},writeInt:function(i,t,e){var n=K._binBE.ui8;K._binBE.i32[0]=e,i[t+0]=n[0],i[t+1]=n[1],i[t+2]=n[2],i[t+3]=n[3]},writeUint:function(i,t,e){i[t]=e>>>0&255,i[t+1]=e>>>8&255,i[t+2]=e>>>16&255,i[t+3]=e>>>24&255},writeASCII:K._binBE.writeASCII};K._copyTile=function(i,t,e,n,r,s,a,o){for(var l=Math.min(t,r-a),c=Math.min(e,s-o),f=0;f<c;f++)for(var u=(o+f)*r+a,h=f*t,m=0;m<l;m++)n[u+m]=i[h+m]};K._inflateRaw=function(){var i={};return i.H={},i.H.N=function(t,e){var n=Uint8Array,r=0,s=0,a=0,o=0,l=0,c=0,f=0,u=0,h=0,m,g;if(t[0]==3&&t[1]==0)return e||new n(0);var v=i.H,d=v.b,p=v.e,x=v.R,_=v.n,S=v.A,w=v.Z,M=v.m,E=e==null;for(E&&(e=new n(t.length>>>2<<5));r==0;){if(r=d(t,h,1),s=d(t,h+1,2),h+=3,s==0){h&7&&(h+=8-(h&7));var y=(h>>>3)+4,b=t[y-4]|t[y-3]<<8;E&&(e=i.H.W(e,u+b)),e.set(new n(t.buffer,t.byteOffset+y,b),u),h=y+b<<3,u+=b;continue}if(E&&(e=i.H.W(e,u+(1<<17))),s==1&&(m=M.J,g=M.h,c=511,f=31),s==2){a=p(t,h,5)+257,o=p(t,h+5,5)+1,l=p(t,h+10,4)+4,h+=14;for(var L=1,A=0;A<38;A+=2)M.Q[A]=0,M.Q[A+1]=0;for(var A=0;A<l;A++){var C=p(t,h+A*3,3);M.Q[(M.X[A]<<1)+1]=C,C>L&&(L=C)}h+=3*l,_(M.Q,L),S(M.Q,L,M.u),m=M.w,g=M.d,h=x(M.u,(1<<L)-1,a+o,t,h,M.v);var P=v.V(M.v,0,a,M.C);c=(1<<P)-1;var D=v.V(M.v,a,o,M.D);f=(1<<D)-1,_(M.C,P),S(M.C,P,m),_(M.D,D),S(M.D,D,g)}for(;;){var B=m[w(t,h)&c];h+=B&15;var z=B>>>4;if(!(z>>>8))e[u++]=z;else{if(z==256)break;var O=u+z-254;if(z>264){var N=M.q[z-257];O=u+(N>>>3)+p(t,h,N&7),h+=N&7}var F=g[w(t,h)&f];h+=F&15;var k=F>>>4,V=M.c[k],q=(V>>>4)+d(t,h,V&15);for(h+=V&15;u<O;)e[u]=e[u++-q],e[u]=e[u++-q],e[u]=e[u++-q],e[u]=e[u++-q];u=O}}}return e.length==u?e:e.slice(0,u)},i.H.W=function(t,e){var n=t.length;if(e<=n)return t;var r=new Uint8Array(n<<1);return r.set(t,0),r},i.H.R=function(t,e,n,r,s,a){for(var o=i.H.e,l=i.H.Z,c=0;c<n;){var f=t[l(r,s)&e];s+=f&15;var u=f>>>4;if(u<=15)a[c]=u,c++;else{var h=0,m=0;u==16?(m=3+o(r,s,2),s+=2,h=a[c-1]):u==17?(m=3+o(r,s,3),s+=3):u==18&&(m=11+o(r,s,7),s+=7);for(var g=c+m;c<g;)a[c]=h,c++}}return s},i.H.V=function(t,e,n,r){for(var s=0,a=0,o=r.length>>>1;a<n;){var l=t[a+e];r[a<<1]=0,r[(a<<1)+1]=l,l>s&&(s=l),a++}for(;a<o;)r[a<<1]=0,r[(a<<1)+1]=0,a++;return s},i.H.n=function(t,e){for(var n=i.H.m,r=t.length,s,a,o,f,l,c=n.j,f=0;f<=e;f++)c[f]=0;for(f=1;f<r;f+=2)c[t[f]]++;var u=n.K;for(s=0,c[0]=0,a=1;a<=e;a++)s=s+c[a-1]<<1,u[a]=s;for(o=0;o<r;o+=2)l=t[o+1],l!=0&&(t[o]=u[l],u[l]++)},i.H.A=function(t,e,n){for(var r=t.length,s=i.H.m,a=s.r,o=0;o<r;o+=2)if(t[o+1]!=0)for(var l=o>>1,c=t[o+1],f=l<<4|c,u=e-c,h=t[o]<<u,m=h+(1<<u);h!=m;){var g=a[h]>>>15-e;n[g]=f,h++}},i.H.l=function(t,e){for(var n=i.H.m.r,r=15-e,s=0;s<t.length;s+=2){var a=t[s]<<e-t[s+1];t[s]=n[a]>>>r}},i.H.M=function(t,e,n){n=n<<(e&7);var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8},i.H.I=function(t,e,n){n=n<<(e&7);var r=e>>>3;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},i.H.e=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8)>>>(e&7)&(1<<n)-1},i.H.b=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)&(1<<n)-1},i.H.Z=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)},i.H.i=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16|t[(e>>>3)+3]<<24)>>>(e&7)},i.H.m=function(){var t=Uint16Array,e=Uint32Array;return{K:new t(16),j:new t(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new t(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new e(32),J:new t(512),_:[],h:new t(32),$:[],w:new t(32768),C:[],v:[],d:new t(32768),D:[],u:new t(512),Q:[],r:new t(32768),s:new e(286),Y:new e(30),a:new e(19),t:new e(15e3),k:new t(65536),g:new t(32768)}}(),function(){for(var t=i.H.m,e=32768,n=0;n<e;n++){var r=n;r=(r&2863311530)>>>1|(r&1431655765)<<1,r=(r&3435973836)>>>2|(r&858993459)<<2,r=(r&4042322160)>>>4|(r&252645135)<<4,r=(r&4278255360)>>>8|(r&16711935)<<8,t.r[n]=(r>>>16|r<<16)>>>17}function s(a,o,l){for(;o--!=0;)a.push(0,l)}for(var n=0;n<32;n++)t.q[n]=t.S[n]<<3|t.T[n],t.c[n]=t.p[n]<<4|t.z[n];s(t._,144,8),s(t._,112,9),s(t._,24,7),s(t._,8,8),i.H.n(t._,9),i.H.A(t._,9,t.J),i.H.l(t._,9),s(t.$,32,5),i.H.n(t.$,5),i.H.A(t.$,5,t.h),i.H.l(t.$,5),s(t.Q,19,0),s(t.C,286,0),s(t.D,30,0),s(t.v,320,0)}(),i.H.N}();K.LosslessJpegDecode=function(){var i,t;function e(){return i[t++]}function n(){return i[t++]<<8|i[t++]}function r(d){for(var p=e(),x=[0,0,0,255],_=[],S=8,w=0;w<16;w++)_[w]=e();for(var w=0;w<16;w++)for(var M=0;M<_[w];M++){var E=s(x,0,w+1,1);x[E+3]=e()}var y=new Uint8Array(1<<S);d[p]=[new Uint8Array(x),y];for(var w=0;w<1<<S;w++){for(var b=S,L=w,A=0,C=0;x[A+3]==255&&b!=0;)C=L>>--b&1,A=x[A+C];y[w]=A}}function s(d,p,x,_){if(d[p+3]!=255)return 0;if(x==0)return p;for(var S=0;S<2;S++){d[p+S]==0&&(d[p+S]=d.length,d.push(0,0,_,255));var w=s(d,d[p+S],x-1,_+1);if(w!=0)return w}return 0}function a(d){for(var p=d.b,x=d.f;p<25&&d.a<d.d;){var _=d.data[d.a++];_==255&&!d.c&&d.a++,x=x<<8|_,p+=8}if(p<0)throw"e";d.b=p,d.f=x}function o(d,p){return p.b<d&&a(p),p.f>>(p.b-=d)&65535>>16-d}function l(d,p){var x=d[0],_=0,S=255,w=0;p.b<16&&a(p);var M=p.f>>p.b-8&255;for(_=d[1][M],S=x[_+3],p.b-=x[_+2];S==255;)w=p.f>>--p.b&1,_=x[_+w],S=x[_+3];return S}function c(d,p){return d<32768>>16-p&&(d+=-(1<<p)+1),d}function f(d,p){var x=l(d,p);if(x==0)return 0;if(x==16)return-32768;var _=o(x,p);return c(_,x)}function u(d,p,x,_,S,w){for(var M=0,E=0;E<w;E++){for(var y=E*p,b=0;b<p;b+=S){M++;for(var L=0;L<S;L++)d[y+b+L]=f(_[L],x)}if(x.e!=0&&M%x.e==0&&E!=0){for(var A=x.a,C=x.data;C[A]!=255||!(208<=C[A+1]&&C[A+1]<=215);)A--;x.a=A+2,x.f=0,x.b=0}}}function h(d,p){return c(o(d,p),d)}function m(d,p,x,_,S){for(var w=i.length-t,M=0;M<w;M+=4){var E=i[t+M];i[t+M]=i[t+M+3],i[t+M+3]=E;var E=i[t+M+1];i[t+M+1]=i[t+M+2],i[t+M+2]=E}for(var y=0;y<S;y++)for(var b=32768,L=32768,A=0;A<p;A+=2){var C=l(_,x),P=l(_,x);C!=0&&(b+=h(C,x)),P!=0&&(L+=h(P,x)),d[y*p+A]=b&65535,d[y*p+A+1]=L&65535}}function g(d){if(i=d,t=0,n()!=65496)throw"e";for(var p=[],x=0,_=0,S=0,w=[],M=[],E=[],y=0,b=0,L=0;;){var A=n();if(A==65535){t--;continue}var C=n();if(A==65475){_=e(),b=n(),L=n(),y=e();for(var P=0;P<y;P++){var D=e(),B=e(),z=e();if(z!=0)throw"e";p[D]=[P,B>>4,B&15]}}else if(A==65476)for(var O=t+C-2;t<O;)r(M);else if(A==65498){t++;for(var P=0;P<y;P++){var N=e(),F=p[N];E[F[0]]=M[e()>>>4],w[F[0]]=F.slice(1)}x=e(),t+=2;break}else A==65501?S=n():t+=C-2}var k=_>8?Uint16Array:Uint8Array,V=new k(b*L*y),q={b:0,f:0,c:x==8,a:t,data:i,d:i.length,e:S};if(q.c)m(V,L*y,q,E[0],b);else{for(var ot=[],ht=0,ut=0,P=0;P<y;P++){var G=w[P],J=G[0],nt=G[1];J>ht&&(ht=J),nt>ut&&(ut=nt),ot.push(J*nt)}if(ht!=1||ut!=1){if(y!=3||ot[1]!=1||ot[2]!=1||ht!=2||ut!=1&&ut!=2)throw"e";for(var xt=[],ft=0,P=0;P<y;P++){for(var bt=0;bt<ot[P];bt++)xt.push(E[P]);ft+=ot[P]}var Ut=L/ht,vt=b/ut,et=Ut*vt;u(V,Ut*ft,q,xt,ft,vt),v(V,x,Ut,vt,ft-2,ft,ft,_);var rt=new Uint16Array(et*ot[0]);if(ht==2&&ut==2){for(var P=0;P<et;P++)rt[4*P]=V[6*P],rt[4*P+1]=V[6*P+1],rt[4*P+2]=V[6*P+2],rt[4*P+3]=V[6*P+3];v(rt,x,Ut*4,vt,0,1,1,_);for(var P=0;P<et;P++)V[6*P]=rt[4*P],V[6*P+1]=rt[4*P+1],V[6*P+2]=rt[4*P+2],V[6*P+3]=rt[4*P+3]}if(ht==2&&ut==1){for(var P=0;P<et;P++)rt[2*P]=V[4*P],rt[2*P+1]=V[4*P+1];v(rt,x,Ut*2,vt,0,1,1,_);for(var P=0;P<et;P++)V[4*P]=rt[2*P],V[4*P+1]=rt[2*P+1]}for(var Z=V.slice(0),nt=0;nt<b;nt++)if(ut==2)for(var J=0;J<L;J++){var ct=(nt*L+J)*y,U=((nt>>>1)*Ut+(J>>>1))*ft,Pt=(nt&1)*2+(J&1);V[ct]=Z[U+Pt],V[ct+1]=Z[U+4],V[ct+2]=Z[U+5]}else for(var J=0;J<L;J++){var ct=(nt*L+J)*y,U=(nt*Ut+(J>>>1))*ft,Pt=J&1;V[ct]=Z[U+Pt],V[ct+1]=Z[U+2],V[ct+2]=Z[U+3]}}else if(u(V,L*y,q,E,y,b),S==0)v(V,x,L,b,0,y,y,_);else for(var yt=Math.floor(S/L),nt=0;nt<b;nt+=yt){var St=V.slice(nt*L*y,(nt+yt)*L*y);v(St,x,L,yt,0,y,y,_),V.set(St,nt*L*y)}}return V}function v(d,p,x,_,S,w,M,E){for(var y=x*M,b=S;b<w;b++)d[b]+=1<<E-1;for(var L=M;L<y;L+=M)for(var b=S;b<w;b++)d[L+b]+=d[L+b-M];for(var A=1;A<_;A++){for(var C=A*y,b=S;b<w;b++)d[C+b]+=d[C+b-y];for(var L=M;L<y;L+=M)for(var b=S;b<w;b++){var P=C+L+b,D=P-y,B=d[P-M],z=0;if(p==0)z=0;else if(p==1)z=B;else if(p==2)z=d[D];else if(p==3)z=d[D-M];else if(p==4)z=B+(d[D]-d[D-M]);else if(p==5)z=B+(d[D]-d[D-M]>>>1);else if(p==6)z=d[D]+(B-d[D-M]>>>1);else if(p==7)z=B+d[D]>>>1;else throw p;d[P]+=z}}}return g}();(function(){var i=0,t=1,e=2,n=3,r=4,s=5,a=6,o=7,l=8,c=9,f=10,u=11,h=12,m=13,g=14,v=15,d=16,p=17,x=18;function _(N){var F=K._binBE.readUshort,k={b:F(N,0),i:N[2],C:N[3],u:N[4],q:F(N,5),k:F(N,7),e:F(N,9),l:F(N,11),s:N[13],d:F(N,14)};if(k.b!=18771||k.i>1||k.q<6||k.q%6||k.e<768||k.e%24||k.l!=768||k.k<k.l||k.k%k.l||k.k-k.e>=k.l||k.s>16||k.s!=k.k/k.l||k.s!=Math.ceil(k.e/k.l)||k.d!=k.q/6||k.u!=12&&k.u!=14&&k.u!=16||k.C!=16&&k.C!=0)throw"Invalid data";if(k.i==0)throw"Not implemented. We need this file!";return k.h=k.C==16,k.m=(k.h?k.l*2/3:k.l>>>1)|0,k.A=k.m+2,k.f=64,k.g=(1<<k.u)-1,k.n=4*k.u,k}function S(N,F){var k=new Array(F.s),V=4*F.s,q=16+V;V&12&&(q+=16-(V&12));for(var ot=0,ht=16;ot<F.s;ht+=4){var ut=K._binBE.readUint(N,ht);k[ot]=N.slice(q,q+ut),k[ot].j=0,k[ot].a=0,q+=ut,ot++}if(q!=N.length)throw"Invalid data";return k}function w(N,F){for(var k=-F[4],V=0;k<=F[4];V++,k++)N[V]=k<=-276?-4:k<=-67?-3:k<=-18?-2:k<-0?-1:k<=F[0]?0:k<F[1]?1:k<F[2]?2:k<F[3]?3:4}function M(N,F,k){var V=[F,3*F+18,5*F+67,7*F+276,k];N.o=F,N.w=(V[4]+2*F)/(2*F+1)+1|0,N.v=Math.ceil(Math.log2(N.w)),N.t=9,w(N.c,V)}function E(N){var F={c:new Int8Array(2<<N.u)};return M(F,0,N.g),F}function y(N){for(var F=[[],[],[]],k=Math.max(2,N.w+32>>>6),V=0;V<3;V++)for(var q=0;q<41;q++)F[V][q]=[k,1];return F}function b(N){for(var F=-1,k=0;!k;F++)k=N[N.j]>>>7-N.a&1,N.a++,N.a&=7,N.a||N.j++;return F}function L(N,F){var k=0,V=8-N.a;if(N.j,N.a,F){if(F>=V)do k<<=V,F-=V,k|=N[N.j]&(1<<V)-1,N.j++,V=8;while(F>=8);F&&(k<<=F,V-=F,k|=N[N.j]>>>V&(1<<F)-1),N.a=8-V}return k}function A(N,F){var k=0;if(F<N)for(;k<=14&&F<<++k<N;);return k}function C(N,F,k,V,q,ot,ht,ut){ut==null&&(ut=0);var G=ot+1,J=G%2,nt=0,xt,ft,bt=V[q],Ut=V[q-1],vt=V[q-2][G],et=Ut[G-1],rt=Ut[G],Z=Ut[G+1],ct=bt[G-1],U=bt[G+1],Pt=Math.abs,yt,St,_t,I;if(J&&(yt=Pt(Z-rt),St=Pt(vt-rt),_t=Pt(et-rt)),J){if(I=yt>_t&&St<yt?vt+et:yt<_t&&St<_t?vt+Z:Z+et,I=I+2*rt>>>2,ut){bt[G]=I;return}xt=F.t*F.c[N.g+rt-vt]+F.c[N.g+et-rt]}else I=rt>et&&rt>Z||rt<et&&rt<Z?U+ct+2*rt>>>2:ct+U>>>1,xt=F.t*F.c[N.g+rt-et]+F.c[N.g+et-ct];ft=Pt(xt);var T=b(k);if(T<N.n-F.v-1){var W=A(ht[ft][0],ht[ft][1]);nt=L(k,W)+(T<<W)}else nt=L(k,F.v)+1;nt=nt&1?-1-(nt>>>1):nt>>>1,ht[ft][0]+=Pt(nt),ht[ft][1]==N.f&&(ht[ft][0]>>>=1,ht[ft][1]>>>=1),ht[ft][1]++,I=xt<0?I-nt:I+nt,N.i&&(I<0?I+=F.w:I>N.g&&(I-=F.w)),bt[G]=I>=0?Math.min(I,N.g):0}function P(N,F,k){for(var V=N[0].length,q=F;q<=k;q++)N[q][0]=N[q-1][1],N[q][V-1]=N[q-1][V-2]}function D(N){P(N,o,h),P(N,e,r),P(N,v,p)}function B(N,F,k,V,q,ot,ht,ut,G,J,nt,xt,ft){for(var bt=0,Ut=1,vt=q<m&&q>r;Ut<N.m;)bt<N.m&&(C(N,F,k,V,q,bt,ht[G],N.h&&(vt&&J||!vt&&(nt||(bt&xt)==ft))),C(N,F,k,V,ot,bt,ht[G],N.h&&(!vt&&J||vt&&(nt||(bt&xt)==ft))),bt+=2),bt>8&&(C(N,F,k,V,q,Ut,ut[G]),C(N,F,k,V,ot,Ut,ut[G]),Ut+=2);D(V)}function z(N,F,k,V,q,ot){B(N,F,k,V,e,o,q,ot,0,0,1,0,8),B(N,F,k,V,l,v,q,ot,1,0,1,0,8),B(N,F,k,V,n,c,q,ot,2,1,0,3,0),B(N,F,k,V,f,d,q,ot,0,0,0,3,2),B(N,F,k,V,r,u,q,ot,1,0,0,3,2),B(N,F,k,V,h,p,q,ot,2,1,0,3,0)}function O(N,F,k,V,q,ot){var ht=ot.length,ut=N.l;q+1==N.s&&(ut=N.e-q*N.l);for(var G=6*N.e*V+q*N.l,J=0;J<6;J++){for(var nt=0;nt<ut;nt++){var xt=ot[J%ht][nt%ht],ft;xt==0?ft=e+(J>>>1):xt==2?ft=v+(J>>>1):ft=o+J;var bt=N.h?(nt*2/3&2147483646|nt%3&1)+(nt%3>>>1):nt>>>1;F[G+nt]=k[ft][bt+1]}G+=N.e}}K._decompressRAF=function(N,F){var k=_(N),V=S(N,k),q=E(k),ot=new Int16Array(k.e*k.q);F==null&&(F=k.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var ht=[[i,n],[t,r],[s,u],[a,h],[m,d],[g,p]],ut=[],G=0;G<x;G++)ut[G]=new Uint16Array(k.A);for(var J=0;J<k.s;J++){for(var nt=y(q),xt=y(q),G=0;G<x;G++)for(var ft=0;ft<k.A;ft++)ut[G][ft]=0;for(var bt=0;bt<k.d;bt++){z(k,q,V[J],ut,nt,xt);for(var G=0;G<6;G++)for(var ft=0;ft<k.A;ft++)ut[ht[G][0]][ft]=ut[ht[G][1]][ft];O(k,ot,ut,bt,J,F);for(var G=e;G<x;G++)if([s,a,m,g].indexOf(G)==-1)for(var ft=0;ft<k.A;ft++)ut[G][ft]=0;D(ut)}}return ot}})();class pv extends tv{constructor(t,e){super(t,e),this.mapMaxPolarAngle=Math.PI/2.1,this.restAzimuthDist=8e6,this.dynamicZoomSpeed=!0,this.dynamicMaxPolarAngle=!0,this._controlsMode="MAP",this.controlsMode="MAP",this.screenSpacePanning=!1,this.minDistance=10,this.maxDistance=3e7,this.maxPolarAngle=1.2,this.enableDamping=!0,this.dampingFactor=.1,this.keyPanSpeed=5,this.listenToKeyEvents(e),this.addEventListener("change",this.onChange.bind(this))}get controlsMode(){return this._controlsMode}set controlsMode(t){this._controlsMode=t,this.controlsMode.toUpperCase()==="MAP"?(this.mouseButtons={LEFT:qe.PAN,MIDDLE:qe.DOLLY,RIGHT:qe.ROTATE},this.touches={ONE:pn.PAN,TWO:pn.DOLLY_ROTATE}):(this.mouseButtons={LEFT:qe.ROTATE,MIDDLE:qe.DOLLY,RIGHT:qe.PAN},this.touches={ONE:pn.ROTATE,TWO:pn.DOLLY_PAN})}onChange(){const t=Math.max(this.getPolarAngle(),.01),e=Math.max(this.getDistance(),1);this.dynamicZoomSpeed&&(this.zoomSpeed=Math.max(Math.log(e/1e3),1));const n=e>this.restAzimuthDist;this.minAzimuthAngle=n?0:-1/0,this.maxAzimuthAngle=n?0:1/0,this.dynamicMaxPolarAngle&&(this.maxPolarAngle=Math.min(Math.pow(1e7/e,2),this.mapMaxPolarAngle));const r=this.object;r instanceof Ne&&(r.far=oi.clamp(e/(t/1.5)*7,2e4,this.maxDistance*2),r.near=Math.max(r.far/5e4,this.minDistance),r.updateProjectionMatrix())}}class Bv extends K1{constructor(){super(...arguments),this.controls=this._createControls(),this._fogFactor=1}get fogFactor(){return this._fogFactor}set fogFactor(t){this._fogFactor=t,this._changeFogFactor()}get controlsMode(){return this.controls.controlsMode}set controlsMode(t){this.controls.controlsMode=t}_changeFogFactor(){if(this.scene.fog instanceof Is){const t=this.controls.getPolarAngle(),e=this.controls.getDistance();this.scene.fog.density=t/(e+1)*this.fogFactor*.2}}_createControls(){const t=new pv(this.camera,this.container||this.renderer.domElement);return t.addEventListener("change",this._changeFogFactor.bind(this)),t}animate(){super.animate(),this.controls.update()}flyTo(t,e,n=!0){if(this.controls.target.copy(t),n){const r=this.camera.position;return new Promise(s=>{new Aa(r).to({y:1e7,z:0},500).chain(new Aa(r).to(e,2e3).easing(ci.Quintic.Out).onComplete(()=>s())).start()})}else return this.camera.position.copy(e),Promise.resolve()}flyToObject(t,e={azimuthDeg:0,pitchDeg:30,distanceMultiplier:1.2,animate:!0}){const n=h=>{const m=new Ke().setFromObject(h),g=m.getBoundingSphere(new yn);return g.center.setY(m.min.y),g},{center:r,radius:s}=n(t),a=s/Math.sin(oi.degToRad(this.camera.fov/2)),{azimuthDeg:o=0,pitchDeg:l=30,distanceMultiplier:c=1.5,animate:f=!0}=e,u=new H().setFromSphericalCoords(a*c,oi.degToRad(90-l),oi.degToRad(o)).add(r.clone().setY(0));if(this.controls.target.copy(r),f){const h=this.camera.position;return new Promise(m=>{new Aa(h).to(u,2e3).easing(ci.Quintic.Out).onUpdate(()=>{const g=n(t);this.controls.target.copy(g.center)}).start().onComplete(()=>m())})}else return this.camera.position.copy(u),Promise.resolve()}getState(){return{centerPosition:this.controls.target,cameraPosition:this.camera.position}}}performance.now();new H;new H;const mv=`<style>\r
	#tt-compass {\r
		width: 100%;\r
		height: 100%;\r
		display: flex;\r
		align-items: center;\r
		justify-content: center;\r
		border-radius: 50%;\r
		border: 1px solid #fffc;\r
		filter: drop-shadow(0px 0px 2px black);\r
		background-color: #0005;\r
		cursor: pointer;\r
	}\r
	#tt-compass > .tt-circle {\r
		width: 60%;\r
		height: 60%;\r
		text-align: center;\r
		border-radius: 50%;\r
		border: 1px solid #fffc;\r
		background-color: #fff4;\r
		display: flex;\r
		justify-content: center;\r
	}\r
\r
	#tt-compass:hover > .tt-circle {\r
		background-color: #0f05;\r
	}\r
\r
	#tt-compass:active .tt-circle {\r
		background-color: #000;\r
	}\r
\r
	#tt-compass > #tt-compass-text {\r
		position: absolute;\r
		top: 0px;\r
		left: 0px;\r
		width: 100%;\r
		height: 100%;\r
		display: grid;\r
		align-items: center;\r
		justify-items: center;\r
		grid-template-columns: 18% auto 18%;\r
		grid-template-rows: 18% auto 18%;\r
		text-shadow: 0px 0px 2px black;\r
		font-size: 10px;\r
	}\r
\r
	#tt-compass > .tt-circle > #tt-compass-plane {\r
		height: 90%;\r
		width: 90%;\r
		fill: #fffc;\r
		filter: drop-shadow(5px 5px 5px black);\r
	}\r
</style>\r
\r
<div id="tt-compass">\r
	<div class="tt-circle">\r
		<svg\r
			id="tt-compass-plane"\r
			viewBox="0 0 1024 1024"\r
			version="1.1"\r
			xmlns="http://www.w3.org/2000/svg"\r
		>\r
			<path\r
				d="M479.075523 711.254681c0 70.2291 0.083871 114.20878 0.218064 140.734974l-148.360914 106.16768 0 65.842665c0 0 137.164181-31.552144 156.372659-56.247861 19.212672-24.685233 1.369189 45.264997 24.691523 45.264997 23.324432 0 5.476754-69.95023 24.695717-45.264997 19.206382 24.695717 156.372659 56.247861 156.372659 56.247861l0-65.842665-148.375592-106.16768c0.14258-26.526194 0.226451-70.505874 0.226451-140.734974 0-283.942036 460.894459 0 460.894459 0l0-79.555518-115.225712-85.227272 0-65.662343c0-9.083193-13.343823-16.461715-24.685233-16.461715-11.351894 0-24.695717 7.378522-24.695717 16.461715l0 29.119895-85.724206-63.422996c0-178.315322-28.115543-160.490709-28.115543-160.490709s-21.938469 15.094623-24.685233 100.128992c-1.645962 51.108686-52.339488 15.51817-92.547084-21.017988l-22.569596-104.490267-26.182325-14.138497c0-35.590516 0-81.312609 0-129.18179C561.379902 13.064953 511.307019 0 511.307019 0s-48.693211 13.054469-48.693211 117.311994c0 47.240151 0 92.396117 0 127.766473l-28.803283 14.329303-23.194432 106.176067 0.016774 0c3.310794-1.945799 6.558686-4.151598 9.735287-6.470622-3.159827 2.966925-6.407719 5.938043-9.735287 8.919645-39.630985 35.456323-87.693069 67.884915-89.311773 18.12445-2.748861-85.051143-24.691523-100.128992-24.691523-100.128992s-28.115543-17.824613-28.115543 160.490709l-85.724206 63.406222 0-29.119895c0-9.083193-13.335436-16.461715-24.691523-16.461715s-24.691523 7.378522-24.691523 16.461715l0 65.662343L18.187353 631.697066l0 79.555518C18.187353 711.254681 479.075523 427.310549 479.075523 711.254681z"\r
			></path>\r
		</svg>\r
	</div>\r
	<div id="tt-compass-text">\r
		<span></span> <span>N</span><span></span> <span>W</span><span></span><span>E</span> <span></span><span>S</span\r
		><span></span>\r
	</div>\r
</div>\r
`;class kv{constructor(t){this.dom=document.createElement("div"),this.controls=t,this.dom.innerHTML=mv,this.dom.style.width="100%",this.dom.style.height="100%",this.plane=this.dom.querySelector("#tt-compass-plane"),this.text=this.dom.querySelector("#tt-compass-text"),t.addEventListener("change",()=>{this.plane&&this.text&&(this.plane.style.transform=`rotateX(${t.getPolarAngle()}rad)`,this.text.style.transform=`rotate(${t.getAzimuthalAngle()}rad)`)}),this.dom.onclick=()=>open("https://github.com/sxguojf/three-tile")}}class zv extends Ji{constructor(t){super(t),this.dataType="image",this.attribution="ArcGIS",this.style="World_Imagery",this.url="https://server.arcgisonline.com/arcgis/rest/services/{style}/MapServer/tile/{z}/{y}/{x}",Object.assign(this,t)}}class Vv extends Ji{constructor(t){super(t),this.dataType="lerc",this.attribution="ArcGIS",this.minLevel=5,this.maxLevel=13,this.url="https://server.arcgisonline.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer/tile/{z}/{y}/{x}",Object.assign(this,t)}}class Hv extends Ji{constructor(t){super(t),this.dataType="image",this.attribution="Bing[GS(2024)0999号]",this.style="A",this.mkt="zh-CN",this.subdomains="1",this.url="https://t{s}.dynamic.tiles.ditu.live.com/comp/ch/{key}?mkt={mkt}&ur=CN&it={style}&n=z&og=804&cstl=vb",this.maxLevel=19,this.style=(t==null?void 0:t.style)||"A"}getUrl(t,e,n){const r={key:gv(n,t,e)};return super.getUrl(t,e,n,r)}}function gv(i,t,e){let n="";for(let r=i;r>0;r--){const s=1<<r-1;let a=0;t&s&&a++,e&s&&(a+=2),n+=a}return n}class Gv extends Ji{constructor(t){super(t),this.dataType="image",this.attribution="高德[GS(2021)6375号]",this.style="8",this.subdomains="1",this.maxLevel=18,this.url="https://webst0{s}.is.autonavi.com/appmaptile?style={style}&x={x}&y={y}&z={z}&scl=2",Object.assign(this,t)}}new H;new Vh;function Wv(i,t,e=10){if(t.updateMatrixWorld(),t.position.y>1e4)return!1;let n=!1;const r=2*t.near*Math.tan(oi.degToRad(t.fov)/2),s=new H(0,-r/2,-t.near-r/10);s.applyMatrix4(t.matrixWorld);const a=i.getLocalInfoFromWorld(s);if(a){const o=e-(s.y-a.point.y);o>0&&(t.position.y+=o+.01,n=!0)}if(i.debug>0){let o=i.getObjectByName("checkPoint");o||(o=new Fe(new tl(1),new Ud({color:65280})),o.name="checkPoint",i.add(o)),o.position.copy(i.worldToLocal(s)),o.scale.setScalar(r/50),o instanceof Fe&&o.material.color.set(n?15732480:65280)}return n}function ai(i,t){this.x=i,this.y=t}ai.prototype={clone(){return new ai(this.x,this.y)},add(i){return this.clone()._add(i)},sub(i){return this.clone()._sub(i)},multByPoint(i){return this.clone()._multByPoint(i)},divByPoint(i){return this.clone()._divByPoint(i)},mult(i){return this.clone()._mult(i)},div(i){return this.clone()._div(i)},rotate(i){return this.clone()._rotate(i)},rotateAround(i,t){return this.clone()._rotateAround(i,t)},matMult(i){return this.clone()._matMult(i)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(i){return this.x===i.x&&this.y===i.y},dist(i){return Math.sqrt(this.distSqr(i))},distSqr(i){const t=i.x-this.x,e=i.y-this.y;return t*t+e*e},angle(){return Math.atan2(this.y,this.x)},angleTo(i){return Math.atan2(this.y-i.y,this.x-i.x)},angleWith(i){return this.angleWithSep(i.x,i.y)},angleWithSep(i,t){return Math.atan2(this.x*t-this.y*i,this.x*i+this.y*t)},_matMult(i){const t=i[0]*this.x+i[1]*this.y,e=i[2]*this.x+i[3]*this.y;return this.x=t,this.y=e,this},_add(i){return this.x+=i.x,this.y+=i.y,this},_sub(i){return this.x-=i.x,this.y-=i.y,this},_mult(i){return this.x*=i,this.y*=i,this},_div(i){return this.x/=i,this.y/=i,this},_multByPoint(i){return this.x*=i.x,this.y*=i.y,this},_divByPoint(i){return this.x/=i.x,this.y/=i.y,this},_unit(){return this._div(this.mag()),this},_perp(){const i=this.y;return this.y=this.x,this.x=-i,this},_rotate(i){const t=Math.cos(i),e=Math.sin(i),n=t*this.x-e*this.y,r=e*this.x+t*this.y;return this.x=n,this.y=r,this},_rotateAround(i,t){const e=Math.cos(i),n=Math.sin(i),r=t.x+e*(this.x-t.x)-n*(this.y-t.y),s=t.y+n*(this.x-t.x)+e*(this.y-t.y);return this.x=r,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:ai};ai.convert=function(i){if(i instanceof ai)return i;if(Array.isArray(i))return new ai(+i[0],+i[1]);if(i.x!==void 0&&i.y!==void 0)return new ai(+i.x,+i.y);throw new Error("Expected [x, y] or {x, y} point format")};typeof TextDecoder>"u"||new TextDecoder("utf-8");on.add=async function(i,t){};on.get=function(i){};function Xv(i,t,e){var a;const{currentTarget:n,offsetX:r,offsetY:s}=i;if(n instanceof HTMLElement){const o=n.clientWidth,l=n.clientHeight,c=new gt(r/o*2-1,-(s/l)*2+1);return(a=t.getLocalInfoFromScreen(e,c))==null?void 0:a.location}else throw new Error("mouseEvent.currentTarget is not HTMLElement!")}new H;new Ke;export{wv as $,qf as A,ve as B,Av as C,Jd as D,qn as E,gh as F,Zo as G,Nh as H,Sv as I,Cn as J,qo as K,qi as L,Fe as M,Pr as N,de as O,Pv as P,$e as Q,Ba as R,vn as S,_v as T,Pd as U,H as V,ae as W,Mv as X,jf as Y,Ts as Z,bv as _,Ee as a,eh as a$,Dr as a0,Ne as a1,Ns as a2,yh as a3,ac as a4,zf as a5,xs as a6,xo as a7,xh as a8,ye as a9,Dv as aA,Hv as aB,Wv as aC,Vh as aD,Sh as aE,oe as aF,Lh as aG,Dh as aH,tl as aI,ln as aJ,Io as aK,Ev as aL,Xo as aM,Xn as aN,Ze as aO,Mf as aP,ld as aQ,ec as aR,Ih as aS,Uv as aT,Zi as aU,R1 as aV,G1 as aW,Ji as aX,sh as aY,rh as aZ,ih as a_,Cs as aa,As as ab,Ds as ac,te as ad,Ln as ae,Tr as af,Ke as ag,yn as ah,su as ai,Vv as aj,zv as ak,Bv as al,Xv as am,kv as an,Er as ao,Ud as ap,Nv as aq,Gv as ar,nh as as,dp as at,Nn as au,eu as av,Df as aw,Is as ax,o1 as ay,$d as az,xv as b,th as b0,Qc as b1,mn as b2,vv as c,ke as d,wr as e,Jt as f,oi as g,Iv as h,jd as i,Tv as j,gt as k,ki as l,Be as m,Rv as n,Qt as o,Xl as p,Cv as q,Lv as r,yv as s,ri as t,Hs as u,ku as v,Le as w,Ae as x,ka as y,Rn as z};
