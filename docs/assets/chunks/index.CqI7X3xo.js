/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="171",Ke={ROTATE:0,DOLLY:1,PAN:2},ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kh=0,Xo=1,Zh=2,Cc=1,Hh=2,Mn=3,En=0,Oe=1,Sn=2,Fn=0,Ri=1,Yo=2,Ko=3,jo=4,Xh=5,jn=100,Yh=101,Kh=102,jh=103,Jh=104,Qh=200,qh=201,$h=202,tu=203,ga=204,_a=205,eu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,lu=213,cu=214,va=0,xa=1,ya=2,Ci=3,ba=4,Ma=5,Sa=6,Ta=7,po=0,hu=1,uu=2,Vn=0,du=1,fu=2,pu=3,mu=4,gu=5,_u=6,vu=7,Jo="attached",xu="detached",Ic=300,Ii=301,Di=302,Ea=303,wa=304,xr=306,Aa=1e3,Qn=1001,Ra=1002,Be=1003,yu=1004,bs=1005,cn=1006,Pr=1007,qn=1008,wn=1009,Dc=1010,Uc=1011,us=1012,mo=1013,ii=1014,sn=1015,gs=1016,go=1017,_o=1018,Ui=1020,Nc=35902,Fc=1021,Vc=1022,je=1023,Oc=1024,Wc=1025,Li=1026,Ni=1027,vo=1028,xo=1029,Gc=1030,yo=1031,bo=1033,ir=33776,sr=33777,rr=33778,ar=33779,La=35840,Pa=35841,Ca=35842,Ia=35843,Da=36196,Ua=37492,Na=37496,Fa=37808,Va=37809,Oa=37810,Wa=37811,Ga=37812,za=37813,Ba=37814,ka=37815,Za=37816,Ha=37817,Xa=37818,Ya=37819,Ka=37820,ja=37821,or=36492,Ja=36494,Qa=36495,zc=36283,qa=36284,$a=36285,to=36286,bu=2200,Mu=2201,Su=2202,cr=2300,eo=2301,Cr=2302,Ti=2400,Ei=2401,hr=2402,Mo=2500,Tu=2501,k_=0,Z_=1,H_=2,Eu=3200,wu=3201,So=0,Au=1,Nn="",Ve="srgb",Fi="srgb-linear",ur="linear",oe="srgb",oi=7680,Qo=519,Ru=512,Lu=513,Pu=514,Bc=515,Cu=516,Iu=517,Du=518,Uu=519,no=35044,qo="300 es",hn=2e3,dr=2001;class An{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const as=Math.PI/180,Vi=180/Math.PI;function Je(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function To(i,t){return(i%t+t)%t}function Nu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fu(i,t,e){return i!==t?(e-i)/(t-i):0}function os(i,t,e){return(1-e)*i+e*t}function Vu(i,t,e,n){return os(i,t,1-Math.exp(-e*n))}function Ou(i,t=1){return t-Math.abs(To(i,t*2)-t)}function Wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bu(i,t){return i+Math.random()*(t-i)}function ku(i){return i*(.5-Math.random())}function Zu(i){i!==void 0&&($o=i);let t=$o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hu(i){return i*as}function Xu(i){return i*Vi}function Yu(i){return(i&i-1)===0&&i!==0}function Ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ju(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ti={DEG2RAD:as,RAD2DEG:Vi,generateUUID:Je,clamp:Xt,euclideanModulo:To,mapLinear:Nu,inverseLerp:Fu,lerp:os,damp:Vu,pingpong:Ou,smoothstep:Wu,smootherstep:Gu,randInt:zu,randFloat:Bu,randFloatSpread:ku,seededRandom:Zu,degToRad:Hu,radToDeg:Xu,isPowerOfTwo:Yu,ceilPowerOfTwo:Ku,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Ju,normalize:re,denormalize:en};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],v=n[8],g=s[0],p=s[3],f=s[6],b=s[1],_=s[4],y=s[7],T=s[2],x=s[5],E=s[8];return r[0]=a*g+o*b+l*T,r[3]=a*p+o*_+l*x,r[6]=a*f+o*y+l*E,r[1]=c*g+u*b+h*T,r[4]=c*p+u*_+h*x,r[7]=c*f+u*y+h*E,r[2]=d*g+m*b+v*T,r[5]=d*p+m*_+v*x,r[8]=d*f+m*y+v*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,m=c*r-a*l,v=e*h+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=h*g,t[1]=(s*c-u*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Ht;function kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){const i=ds("canvas");return i.style.display="block",i}const tl={};function Si(i){i in tl||(tl[i]=!0,console.warn(i))}function qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $u(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function td(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const el=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){const i={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?ur:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fi]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const te=ed();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class nd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=ds("canvas")),li.width=t.width,li.height=t.height;const n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let id=0;class Zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Je(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dr(s[a].image)):r.push(Dr(s[a]))}else r=Dr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;class ve extends An{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Qn,s=Qn,r=cn,a=qn,o=je,l=wn,c=ve.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Je(),this.name="",this.source=new Zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=Ic;ve.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],v=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(m+1)/2,T=(f+1)/2,x=(u+d)/4,E=(h+g)/4,A=(v+p)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=x/n,r=E/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=x/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=A/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-v)*(p-v)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends An{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hc extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ad extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],m=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=g;return}if(h!==g||l!==d||c!==m||u!==v){let p=1-o;const f=l*d+c*m+u*v+h*g,b=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const T=Math.sqrt(_),x=Math.atan2(T,f*b);p=Math.sin(p*x)/T,o=Math.sin(o*x)/T}const y=o*b;if(l=l*p+d*y,c=c*p+m*y,u=u*p+v*y,h=h*p+g*y,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+u*h+l*m-c*d,t[e+1]=l*v+u*d+c*h-o*m,t[e+2]=c*v+u*m+o*d-l*h,t[e+3]=u*v-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"YXZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"ZXY":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"ZYX":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"YZX":this._x=d*u*h+c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h-d*m*v;break;case"XZY":this._x=d*u*h-c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new W,il=new rn;class ke{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Ss.subVectors(this.max,ji),ci.subVectors(t.a,ji),hi.subVectors(t.b,ji),ui.subVectors(t.c,ji),Rn.subVectors(hi,ci),Ln.subVectors(ui,hi),Bn.subVectors(ci,ui);let e=[0,-Rn.z,Rn.y,0,-Ln.z,Ln.y,0,-Bn.z,Bn.y,Rn.z,0,-Rn.x,Ln.z,0,-Ln.x,Bn.z,0,-Bn.x,-Rn.y,Rn.x,0,-Ln.y,Ln.x,0,-Bn.y,Bn.x,0];return!Nr(e,ci,hi,ui,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,ci,hi,ui,Ss))?!1:(Ts.crossVectors(Rn,Ln),e=[Ts.x,Ts.y,Ts.z],Nr(e,ci,hi,ui,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new W,new W,new W,new W,new W,new W,new W,new W],qe=new W,Ms=new ke,ci=new W,hi=new W,ui=new W,Rn=new W,Ln=new W,Bn=new W,ji=new W,Ss=new W,Ts=new W,kn=new W;function Nr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){kn.fromArray(i,r);const o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),u=n.dot(kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const od=new ke,Ji=new W,Fr=new W;class fn{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Fr)),this.expandByPoint(Ji.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new W,Vr=new W,Es=new W,Pn=new W,Or=new W,ws=new W,Wr=new W;class Gi{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Vr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Es),o=Pn.dot(this.direction),l=-Pn.dot(Es),c=Pn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,v;if(u>0)if(h=a*l-o,d=a*o-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const g=1/u;h*=g,d*=g,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Vr).addScaledVector(Es,d),m}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Or.subVectors(e,t),ws.subVectors(n,t),Wr.crossVectors(Or,ws);let a=this.direction.dot(Wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(ws.crossVectors(Pn,ws));if(l<0)return null;const c=o*this.direction.dot(Or.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(Wr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,a,o,l,c,u,h,d,m,v,g,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,d,m,v,g,p)}set(t,e,n,s,r,a,o,l,c,u,h,d,m,v,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=v,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*h,v=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+v*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,v=c*u,g=c*h;e[0]=d+g*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,v=c*u,g=c*h;e[0]=d-g*o,e[4]=-a*h,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,v=o*u,g=o*h;e[0]=l*u,e[4]=v*c-m,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=o*l,g=o*c;e[0]=l*u,e[4]=g-d*h,e[8]=v*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+v,e[10]=d-g*h}else if(t.order==="XZY"){const d=a*l,m=a*c,v=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=a*u,e[9]=m*h-v,e[2]=v*h-m,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,e,n){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Cn.crossVectors(n,Ge),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Cn.crossVectors(n,Ge)),Cn.normalize(),As.crossVectors(Ge,Cn),s[0]=Cn.x,s[4]=As.x,s[8]=Ge.x,s[1]=Cn.y,s[5]=As.y,s[9]=Ge.y,s[2]=Cn.z,s[6]=As.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],v=n[2],g=n[6],p=n[10],f=n[14],b=n[3],_=n[7],y=n[11],T=n[15],x=s[0],E=s[4],A=s[8],M=s[12],S=s[1],R=s[5],U=s[9],D=s[13],N=s[2],k=s[6],z=s[10],Z=s[14],L=s[3],F=s[7],V=s[11],O=s[15];return r[0]=a*x+o*S+l*N+c*L,r[4]=a*E+o*R+l*k+c*F,r[8]=a*A+o*U+l*z+c*V,r[12]=a*M+o*D+l*Z+c*O,r[1]=u*x+h*S+d*N+m*L,r[5]=u*E+h*R+d*k+m*F,r[9]=u*A+h*U+d*z+m*V,r[13]=u*M+h*D+d*Z+m*O,r[2]=v*x+g*S+p*N+f*L,r[6]=v*E+g*R+p*k+f*F,r[10]=v*A+g*U+p*z+f*V,r[14]=v*M+g*D+p*Z+f*O,r[3]=b*x+_*S+y*N+T*L,r[7]=b*E+_*R+y*k+T*F,r[11]=b*A+_*U+y*z+T*V,r[15]=b*M+_*D+y*Z+T*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],v=t[3],g=t[7],p=t[11],f=t[15];return v*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*m-n*l*m)+g*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+f*(-s*o*u-e*l*h+e*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],v=t[12],g=t[13],p=t[14],f=t[15],b=h*p*c-g*d*c+g*l*m-o*p*m-h*l*f+o*d*f,_=v*d*c-u*p*c-v*l*m+a*p*m+u*l*f-a*d*f,y=u*g*c-v*h*c+v*o*m-a*g*m-u*o*f+a*h*f,T=v*h*l-u*g*l-v*o*d+a*g*d+u*o*p-a*h*p,x=e*b+n*_+s*y+r*T;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/x;return t[0]=b*E,t[1]=(g*d*r-h*p*r-g*s*m+n*p*m+h*s*f-n*d*f)*E,t[2]=(o*p*r-g*l*r+g*s*c-n*p*c-o*s*f+n*l*f)*E,t[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*m-n*l*m)*E,t[4]=_*E,t[5]=(u*p*r-v*d*r+v*s*m-e*p*m-u*s*f+e*d*f)*E,t[6]=(v*l*r-a*p*r-v*s*c+e*p*c+a*s*f-e*l*f)*E,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*m+e*l*m)*E,t[8]=y*E,t[9]=(v*h*r-u*g*r-v*n*m+e*g*m+u*n*f-e*h*f)*E,t[10]=(a*g*r-v*o*r+v*n*c-e*g*c-a*n*f+e*o*f)*E,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*m-e*o*m)*E,t[12]=T*E,t[13]=(u*g*s-v*h*s+v*n*d-e*g*d-u*n*p+e*h*p)*E,t[14]=(v*o*s-a*g*s-v*n*l+e*g*l+a*n*p-e*o*p)*E,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,m=r*u,v=r*h,g=a*u,p=a*h,f=o*h,b=l*c,_=l*u,y=l*h,T=n.x,x=n.y,E=n.z;return s[0]=(1-(g+f))*T,s[1]=(m+y)*T,s[2]=(v-_)*T,s[3]=0,s[4]=(m-y)*x,s[5]=(1-(d+f))*x,s[6]=(p+b)*x,s[7]=0,s[8]=(v+_)*E,s[9]=(p-b)*E,s[10]=(1-(d+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$e.copy(this);const c=1/r,u=1/a,h=1/o;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=h,$e.elements[9]*=h,$e.elements[10]*=h,e.setFromRotationMatrix($e),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=hn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let m,v;if(o===hn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===dr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*c,m=(n+s)*u;let v,g;if(o===hn)v=(a+r)*h,g=-2*h;else if(o===dr)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const di=new W,$e=new Jt,ld=new W(0,0,0),cd=new W(1,1,1),Cn=new W,As=new W,Ge=new W,sl=new Jt,rl=new rn;class an{constructor(t=0,e=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hd=0;const al=new W,fi=new rn,vn=new Jt,Rs=new W,Qi=new W,ud=new W,dd=new rn,ol=new W(1,0,0),ll=new W(0,1,0),cl=new W(0,0,1),hl={type:"added"},fd={type:"removed"},pi={type:"childadded",child:null},Gr={type:"childremoved",child:null};class ue extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new W,e=new an,n=new rn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ht}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Qi,Rs,this.up):vn.lookAt(Rs,Qi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(vn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ue.DEFAULT_UP=new W(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new W,xn=new W,zr=new W,yn=new W,mi=new W,gi=new W,ul=new W,Br=new W,kr=new W,Zr=new W,Hr=new ne,Xr=new ne,Yr=new ne;class nn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),xn.subVectors(n,e),zr.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(xn),l=tn.dot(zr),c=xn.dot(xn),u=xn.dot(zr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Hr.setScalar(0),Xr.setScalar(0),Yr.setScalar(0),Hr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,n),Yr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Xr,r.y),a.addScaledVector(Yr,r.z),a}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),xn.subVectors(t,e),tn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;mi.subVectors(s,n),gi.subVectors(r,n),Br.subVectors(t,n);const l=mi.dot(Br),c=gi.dot(Br);if(l<=0&&c<=0)return e.copy(n);kr.subVectors(t,s);const u=mi.dot(kr),h=gi.dot(kr);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(mi,a);Zr.subVectors(t,r);const m=mi.dot(Zr),v=gi.dot(Zr);if(v>=0&&m<=v)return e.copy(r);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(gi,o);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return ul.subVectors(r,s),o=(h-u)/(h-u+(m-v)),e.copy(s).addScaledVector(ul,o);const f=1/(p+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=To(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kr(a,r,t+1/3),this.g=Kr(a,r,t),this.b=Kr(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return te.fromWorkingColorSpace(we.copy(this),t),Math.round(Xt(we.r*255,0,255))*65536+Math.round(Xt(we.g*255,0,255))*256+Math.round(Xt(we.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ve){te.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Ls);const n=os(In.h,Ls.h,e),s=os(In.s,Ls.s,e),r=os(In.l,Ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Kt;Kt.NAMES=Xc;let pd=0;class Wn extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Je(),this.name="",this.type="Material",this.blending=Ri,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wo extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new W,Ps=new yt;class Me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),t}}class Yc extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kc extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let md=0;const Ye=new Jt,jr=new ue,_i=new W,ze=new ke,qi=new ke,be=new W;class Re extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?Kc:Yc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(ze.min,qi.min),ze.expandByPoint(be),be.addVectors(ze.max,qi.max),ze.expandByPoint(be)):(ze.expandByPoint(qi.min),ze.expandByPoint(qi.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)be.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(t,c),be.add(_i)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new W,l[A]=new W;const c=new W,u=new W,h=new W,d=new yt,m=new yt,v=new yt,g=new W,p=new W;function f(A,M,S){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,M),v.fromBufferAttribute(r,S),u.sub(c),h.sub(c),m.sub(d),v.sub(d);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(R),o[A].add(g),o[M].add(g),o[S].add(g),l[A].add(p),l[M].add(p),l[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,M=b.length;A<M;++A){const S=b[A],R=S.start,U=S.count;for(let D=R,N=R+U;D<N;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new W,y=new W,T=new W,x=new W;function E(A){T.fromBufferAttribute(s,A),x.copy(T);const M=o[A];_.copy(M),_.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(x,M);const R=y.dot(l[A])<0?-1:1;a.setXYZW(A,_.x,_.y,_.z,R)}for(let A=0,M=b.length;A<M;++A){const S=b[A],R=S.start,U=S.count;for(let D=R,N=R+U;D<N;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,u=new W,h=new W;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let f=0;f<u;f++)d[v++]=c[m++]}return new Me(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new Jt,Zn=new Gi,Cs=new fn,fl=new W,Is=new W,Ds=new W,Us=new W,Jr=new W,Ns=new W,pl=new W,Fs=new W;class De extends ue{constructor(t=new Re,e=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Jr.fromBufferAttribute(h,t),a?Ns.addScaledVector(Jr,u):Ns.addScaledVector(Jr.sub(e),u))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Cs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Cs,fl)===null||Zn.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],f=a[p.materialIndex],b=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,T=_;y<T;y+=3){const x=o.getX(y),E=o.getX(y+1),A=o.getX(y+2);s=Vs(this,f,t,n,c,u,h,x,E,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=v,f=g;p<f;p+=3){const b=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);s=Vs(this,a,t,n,c,u,h,b,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],f=a[p.materialIndex],b=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,T=_;y<T;y+=3){const x=y,E=y+1,A=y+2;s=Vs(this,f,t,n,c,u,h,x,E,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=v,f=g;p<f;p+=3){const b=p,_=p+1,y=p+2;s=Vs(this,a,t,n,c,u,h,b,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function gd(i,t,e,n,s,r,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===En,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:i}}function Vs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Ds),i.getVertexPosition(c,Us);const u=gd(i,t,e,n,Is,Ds,Us,pl);if(u){const h=new W;nn.getBarycoord(pl,Is,Ds,Us,h),s&&(u.uv=nn.getInterpolatedAttribute(s,o,l,c,h,new yt)),r&&(u.uv1=nn.getInterpolatedAttribute(r,o,l,c,h,new yt)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,l,c,h,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};nn.getNormal(Is,Ds,Us,d.normal),u.face=d,u.barycoord=h}return u}class _s extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(h,2));function v(g,p,f,b,_,y,T,x,E,A,M){const S=y/E,R=T/A,U=y/2,D=T/2,N=x/2,k=E+1,z=A+1;let Z=0,L=0;const F=new W;for(let V=0;V<z;V++){const O=V*R-D;for(let tt=0;tt<k;tt++){const ct=tt*S-U;F[g]=ct*b,F[p]=O*_,F[f]=N,c.push(F.x,F.y,F.z),F[g]=0,F[p]=0,F[f]=x>0?1:-1,u.push(F.x,F.y,F.z),h.push(tt/E),h.push(1-V/A),Z+=1}}for(let V=0;V<A;V++)for(let O=0;O<E;O++){const tt=d+O+k*V,ct=d+O+k*(V+1),G=d+(O+1)+k*(V+1),Y=d+(O+1)+k*V;l.push(tt,ct,Y),l.push(ct,G,Y),L+=6}o.addGroup(m,L,M),m+=L,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Oi(i[e]);for(const s in n)t[s]=n[s]}return t}function _d(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const vd={clone:Oi,merge:Ce};var xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jc extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new W,ml=new yt,gl=new yt;class Ie extends Jc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,xi=1;class bd extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ie(vi,xi,t,e);s.layers=this.layers,this.add(s);const r=new Ie(vi,xi,t,e);r.layers=this.layers,this.add(r);const a=new Ie(vi,xi,t,e);a.layers=this.layers,this.add(a);const o=new Ie(vi,xi,t,e);o.layers=this.layers,this.add(o);const l=new Ie(vi,xi,t,e);l.layers=this.layers,this.add(l);const c=new Ie(vi,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ao extends ve{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Md extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ao(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _s(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Fn});r.uniforms.tEquirect.value=e;const a=new De(s,r),o=e.minFilter;return e.minFilter===qn&&(e.minFilter=cn),new bd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class yr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new yr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new Qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sd extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class X_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new W;class qc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _l=new W,vl=new ne,xl=new ne,Td=new W,yl=new Jt,Os=new W,Qr=new fn,bl=new Jt,qr=new Gi;class Y_ extends De{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jo,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ke),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Os),this.boundingBox.expandByPoint(Os)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Os),this.boundingSphere.expandByPoint(Os)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(s),t.ray.intersectsSphere(Qr)!==!1&&(bl.copy(s).invert(),qr.copy(t.ray).applyMatrix4(bl),!(this.boundingBox!==null&&qr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,qr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Jo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;vl.fromBufferAttribute(s.attributes.skinIndex,t),xl.fromBufferAttribute(s.attributes.skinWeight,t),_l.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=xl.getComponent(r);if(a!==0){const o=vl.getComponent(r);yl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Td.copy(_l).applyMatrix4(yl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ed extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $c extends ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,u=Be,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ml=new Jt,wd=new Jt;class th{constructor(t=[],e=[]){this.uuid=Je(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:wd;Ml.multiplyMatrices(o,e[r]),Ml.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new th(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new $c(e,t,t,je,sn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ed),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class Sl extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yi=new Jt,Tl=new Jt,Ws=[],El=new ke,Ad=new Jt,$i=new De,ts=new fn;class K_ extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ad)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),El.copy(t.boundingBox).applyMatrix4(yi),this.boundingBox.union(El)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),ts.copy(t.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yi),Tl.multiplyMatrices(n,yi),$i.matrixWorld=Tl,$i.raycast(t,Ws);for(let a=0,o=Ws.length;a<o;a++){const l=Ws[a];l.instanceId=r,l.object=this,e.push(l)}Ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $c(new Float32Array(s*this.count),s,this.count,vo,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const $r=new W,Rd=new W,Ld=new Ht;class Un{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$r.subVectors(n,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ld.getNormalMatrix(t),s=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new fn,Gs=new W;class br{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],v=s[9],g=s[10],p=s[11],f=s[12],b=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,p-m,y-f).normalize(),n[1].setComponents(l+r,d+c,p+m,y+f).normalize(),n[2].setComponents(l+a,d+u,p+v,y+b).normalize(),n[3].setComponents(l-a,d-u,p-v,y-b).normalize(),n[4].setComponents(l-o,d-h,p-g,y-_).normalize(),e===hn)n[5].setComponents(l+o,d+h,p+g,y+_).normalize();else if(e===dr)n[5].setComponents(o,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ro extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fr=new W,pr=new W,wl=new Jt,es=new Gi,zs=new fn,ta=new W,Al=new W;class mr extends ue{constructor(t=new Re,e=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fr.fromBufferAttribute(e,s-1),pr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fr.distanceTo(pr);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;wl.copy(s).invert(),es.copy(t.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=m,p=v-1;g<p;g+=c){const f=u.getX(g),b=u.getX(g+1),_=Bs(this,t,es,l,f,b);_&&e.push(_)}if(this.isLineLoop){const g=u.getX(v-1),p=u.getX(m),f=Bs(this,t,es,l,g,p);f&&e.push(f)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let g=m,p=v-1;g<p;g+=c){const f=Bs(this,t,es,l,g,g+1);f&&e.push(f)}if(this.isLineLoop){const g=Bs(this,t,es,l,v-1,m);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bs(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(fr.fromBufferAttribute(a,s),pr.fromBufferAttribute(a,r),e.distanceSqToSegment(fr,pr,ta,Al)>n)return;ta.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:Al.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Rl=new W,Ll=new W;class Pd extends mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rl.fromBufferAttribute(e,s),Ll.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rl.distanceTo(Ll);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j_ extends mr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Cd extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pl=new Jt,io=new Gi,ks=new fn,Zs=new W;class J_ extends ue{constructor(t=new Re,e=new Cd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;Pl.copy(s).invert(),io.copy(t.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,g=m;v<g;v++){const p=c.getX(v);Zs.fromBufferAttribute(h,p),Cl(Zs,p,l,s,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,g=m;v<g;v++)Zs.fromBufferAttribute(h,v),Cl(Zs,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cl(i,t,e,n,s,r,a){const o=io.distanceSqToPoint(i);if(o<e){const l=new W;io.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Hs extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Q_ extends ve{constructor(t,e,n,s,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class eh extends ve{constructor(t,e,n,s,r,a,o,l,c,u=Li){if(u!==Li&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Li&&(n=ii),n===void 0&&u===Ni&&(n=Ui),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,m=(a-u)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new yt:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new W,s=[],r=[],a=[],o=new W,l=new Jt;for(let m=0;m<=t;m++){const v=m/t;s[m]=this.getTangentAt(v,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Xt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Xt(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],m*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lo extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new yt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Id extends Lo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Po(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,m*=u,s(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Xs=new W,ea=new Po,na=new Po,ia=new Po;class Dd extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new W){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Xs.subVectors(s[0],s[1]).add(s[0]),c=Xs);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Xs.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(u),m);g<1e-4&&(g=1),v<1e-4&&(v=g),p<1e-4&&(p=g),ea.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,g,p),na.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,g,p),ia.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,g,p)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),na.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ia.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ea.calc(l),na.calc(l),ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Il(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ud(i,t){const e=1-i;return e*e*t}function Nd(i,t){return 2*(1-i)*i*t}function Fd(i,t){return i*i*t}function ls(i,t,e,n){return Ud(i,t)+Nd(i,e)+Fd(i,n)}function Vd(i,t){const e=1-i;return e*e*e*t}function Od(i,t){const e=1-i;return 3*e*e*i*t}function Wd(i,t){return 3*(1-i)*i*i*t}function Gd(i,t){return i*i*i*t}function cs(i,t,e,n,s){return Vd(i,t)+Od(i,e)+Wd(i,n)+Gd(i,s)}class nh extends pn{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zd extends pn{constructor(t=new W,e=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new W){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,s.x,r.x,a.x,o.x),cs(t,s.y,r.y,a.y,o.y),cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ih extends pn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends pn{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sh extends pn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(t,s.x,r.x,a.x),ls(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kd extends pn{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(t,s.x,r.x,a.x),ls(t,s.y,r.y,a.y),ls(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rh extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Il(o,l.x,c.x,u.x,h.x),Il(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new yt().fromArray(s))}return this}}var so=Object.freeze({__proto__:null,ArcCurve:Id,CatmullRomCurve3:Dd,CubicBezierCurve:nh,CubicBezierCurve3:zd,EllipseCurve:Lo,LineCurve:ih,LineCurve3:Bd,QuadraticBezierCurve:sh,QuadraticBezierCurve3:kd,SplineCurve:rh});class Zd extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new so[s.type]().fromJSON(s))}return this}}class Dl extends Zd{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ih(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new sh(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new nh(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Lo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hd extends Dl{constructor(t){super(t),this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Dl().fromJSON(s))}return this}}const Xd={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ah(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,m;if(n&&(r=Qd(i,t,r,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let v=e;v<s;v+=e)h=i[v],d=i[v+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return fs(r,a,e,o,l,m,0),a}};function ah(i,t,e,n,s){let r,a;if(s===cf(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Ul(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ul(r,i[r],i[r+1],a);return a&&Mr(a,a.next)&&(ms(a),a=a.next),a}function ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mr(e,e.next)||de(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&nf(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Kd(i,n,s,r):Yd(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ms(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=jd(ri(i),t,e),fs(i,t,e,n,s,r,2)):a===2&&Jd(i,t,e,n,s,r):fs(ri(i),t,e,n,s,r,1);break}}}function Yd(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=m&&wi(s,o,r,l,a,c,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Kd(i,t,e,n){const s=i.prev,r=i,a=i.next;if(de(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,v=u<h?u<d?u:d:h<d?h:d,g=o>l?o>c?o:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,f=ro(m,v,t,e,n),b=ro(g,p,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=f&&y&&y.z<=b;){if(_.x>=m&&_.x<=g&&_.y>=v&&_.y<=p&&_!==s&&_!==a&&wi(o,u,l,h,c,d,_.x,_.y)&&de(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=m&&y.x<=g&&y.y>=v&&y.y<=p&&y!==s&&y!==a&&wi(o,u,l,h,c,d,y.x,y.y)&&de(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=g&&_.y>=v&&_.y<=p&&_!==s&&_!==a&&wi(o,u,l,h,c,d,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=m&&y.x<=g&&y.y>=v&&y.y<=p&&y!==s&&y!==a&&wi(o,u,l,h,c,d,y.x,y.y)&&de(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jd(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Mr(s,r)&&oh(s,n,n.next,r)&&ps(s,r)&&ps(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ms(n),ms(n.next),n=i=r),n=n.next}while(n!==i);return ri(n)}function Jd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&af(a,o)){let l=lh(a,o);a=ri(a,a.next),l=ri(l,l.next),fs(a,t,e,n,s,r,0),fs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Qd(i,t,e,n){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ah(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(rf(c));for(s.sort(qd),r=0;r<s.length;r++)e=$d(s[r],e);return e}function qd(i,t){return i.x-t.x}function $d(i,t){const e=tf(i,t);if(!e)return t;const n=lh(e,i);return ri(n,n.next),ri(e,e.next)}function tf(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&wi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),ps(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&ef(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function ef(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function nf(i,t,e,n){let s=i;do s.z===0&&(s.z=ro(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sf(s)}function sf(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ro(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function wi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function af(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!of(i,t)&&(ps(i,t)&&ps(t,i)&&lf(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Mr(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mr(i,t){return i.x===t.x&&i.y===t.y}function oh(i,t,e,n){const s=Ks(de(i,t,e)),r=Ks(de(i,t,n)),a=Ks(de(e,n,i)),o=Ks(de(e,n,t));return!!(s!==r&&a!==o||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||a===0&&Ys(e,i,n)||o===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ks(i){return i>0?1:i<0?-1:0}function of(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&oh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ps(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function lf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lh(i,t){const e=new ao(i.i,i.x,i.y),n=new ao(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ul(i,t,e,n){const s=new ao(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ao(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class hs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return hs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Nl(t),Fl(n,t);let a=t.length;e.forEach(Nl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Fl(n,e[l]);const o=Xd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Nl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ch extends Re{constructor(t=new Hd([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:m-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:hf;let _,y=!1,T,x,E,A;f&&(_=f.getSpacedPoints(u),y=!0,d=!1,T=f.computeFrenetFrames(u,!1),x=new W,E=new W,A=new W),d||(p=0,m=0,v=0,g=0);const M=o.extractPoints(c);let S=M.shape;const R=M.holes;if(!hs.isClockWise(S)){S=S.reverse();for(let et=0,st=R.length;et<st;et++){const I=R[et];hs.isClockWise(I)&&(R[et]=I.reverse())}}const D=hs.triangulateShape(S,R),N=S;for(let et=0,st=R.length;et<st;et++){const I=R[et];S=S.concat(I)}function k(et,st,I){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(st,I)}const z=S.length,Z=D.length;function L(et,st,I){let mt,$,lt;const ut=et.x-st.x,Dt=et.y-st.y,Mt=I.x-et.x,C=I.y-et.y,w=ut*ut+Dt*Dt,H=ut*C-Dt*Mt;if(Math.abs(H)>Number.EPSILON){const rt=Math.sqrt(w),ht=Math.sqrt(Mt*Mt+C*C),j=st.x-Dt/rt,_t=st.y+ut/rt,gt=I.x-C/ht,Tt=I.y+Mt/ht,Ft=((gt-j)*C-(Tt-_t)*Mt)/(ut*C-Dt*Mt);mt=j+ut*Ft-et.x,$=_t+Dt*Ft-et.y;const dt=mt*mt+$*$;if(dt<=2)return new yt(mt,$);lt=Math.sqrt(dt/2)}else{let rt=!1;ut>Number.EPSILON?Mt>Number.EPSILON&&(rt=!0):ut<-Number.EPSILON?Mt<-Number.EPSILON&&(rt=!0):Math.sign(Dt)===Math.sign(C)&&(rt=!0),rt?(mt=-Dt,$=ut,lt=Math.sqrt(w)):(mt=ut,$=Dt,lt=Math.sqrt(w/2))}return new yt(mt/lt,$/lt)}const F=[];for(let et=0,st=N.length,I=st-1,mt=et+1;et<st;et++,I++,mt++)I===st&&(I=0),mt===st&&(mt=0),F[et]=L(N[et],N[I],N[mt]);const V=[];let O,tt=F.concat();for(let et=0,st=R.length;et<st;et++){const I=R[et];O=[];for(let mt=0,$=I.length,lt=$-1,ut=mt+1;mt<$;mt++,lt++,ut++)lt===$&&(lt=0),ut===$&&(ut=0),O[mt]=L(I[mt],I[lt],I[ut]);V.push(O),tt=tt.concat(O)}for(let et=0;et<p;et++){const st=et/p,I=m*Math.cos(st*Math.PI/2),mt=v*Math.sin(st*Math.PI/2)+g;for(let $=0,lt=N.length;$<lt;$++){const ut=k(N[$],F[$],mt);J(ut.x,ut.y,-I)}for(let $=0,lt=R.length;$<lt;$++){const ut=R[$];O=V[$];for(let Dt=0,Mt=ut.length;Dt<Mt;Dt++){const C=k(ut[Dt],O[Dt],mt);J(C.x,C.y,-I)}}}const ct=v+g;for(let et=0;et<z;et++){const st=d?k(S[et],tt[et],ct):S[et];y?(E.copy(T.normals[0]).multiplyScalar(st.x),x.copy(T.binormals[0]).multiplyScalar(st.y),A.copy(_[0]).add(E).add(x),J(A.x,A.y,A.z)):J(st.x,st.y,0)}for(let et=1;et<=u;et++)for(let st=0;st<z;st++){const I=d?k(S[st],tt[st],ct):S[st];y?(E.copy(T.normals[et]).multiplyScalar(I.x),x.copy(T.binormals[et]).multiplyScalar(I.y),A.copy(_[et]).add(E).add(x),J(A.x,A.y,A.z)):J(I.x,I.y,h/u*et)}for(let et=p-1;et>=0;et--){const st=et/p,I=m*Math.cos(st*Math.PI/2),mt=v*Math.sin(st*Math.PI/2)+g;for(let $=0,lt=N.length;$<lt;$++){const ut=k(N[$],F[$],mt);J(ut.x,ut.y,h+I)}for(let $=0,lt=R.length;$<lt;$++){const ut=R[$];O=V[$];for(let Dt=0,Mt=ut.length;Dt<Mt;Dt++){const C=k(ut[Dt],O[Dt],mt);y?J(C.x,C.y+_[u-1].y,_[u-1].x+I):J(C.x,C.y,h+I)}}}G(),Y();function G(){const et=s.length/3;if(d){let st=0,I=z*st;for(let mt=0;mt<Z;mt++){const $=D[mt];ot($[2]+I,$[1]+I,$[0]+I)}st=u+p*2,I=z*st;for(let mt=0;mt<Z;mt++){const $=D[mt];ot($[0]+I,$[1]+I,$[2]+I)}}else{for(let st=0;st<Z;st++){const I=D[st];ot(I[2],I[1],I[0])}for(let st=0;st<Z;st++){const I=D[st];ot(I[0]+z*u,I[1]+z*u,I[2]+z*u)}}n.addGroup(et,s.length/3-et,0)}function Y(){const et=s.length/3;let st=0;Q(N,st),st+=N.length;for(let I=0,mt=R.length;I<mt;I++){const $=R[I];Q($,st),st+=$.length}n.addGroup(et,s.length/3-et,1)}function Q(et,st){let I=et.length;for(;--I>=0;){const mt=I;let $=I-1;$<0&&($=et.length-1);for(let lt=0,ut=u+p*2;lt<ut;lt++){const Dt=z*lt,Mt=z*(lt+1),C=st+mt+Dt,w=st+$+Dt,H=st+$+Mt,rt=st+mt+Mt;St(C,w,H,rt)}}}function J(et,st,I){l.push(et),l.push(st),l.push(I)}function ot(et,st,I){pt(et),pt(st),pt(I);const mt=s.length/3,$=b.generateTopUV(n,s,mt-3,mt-2,mt-1);It($[0]),It($[1]),It($[2])}function St(et,st,I,mt){pt(et),pt(st),pt(mt),pt(st),pt(I),pt(mt);const $=s.length/3,lt=b.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);It(lt[0]),It(lt[1]),It(lt[3]),It(lt[1]),It(lt[2]),It(lt[3])}function pt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function It(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return uf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new so[s.type]().fromJSON(s)),new ch(n,t.options)}}const hf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new yt(r,a),new yt(o,l),new yt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],m=t[s*3+1],v=t[s*3+2],g=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new yt(a,1-l),new yt(c,1-h),new yt(d,1-v),new yt(g,1-f)]:[new yt(o,1-l),new yt(u,1-h),new yt(m,1-v),new yt(p,1-f)]}};function uf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Sr extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,m=[],v=[],g=[],p=[];for(let f=0;f<u;f++){const b=f*d-a;for(let _=0;_<c;_++){const y=_*h-r;v.push(y,-b,0),g.push(0,0,1),p.push(_/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const _=b+c*f,y=b+c*(f+1),T=b+1+c*(f+1),x=b+1+c*f;m.push(_,y,x),m.push(y,T,x)}this.setIndex(m),this.setAttribute("position",new Se(v,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Co extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new W,d=new W,m=[],v=[],g=[],p=[];for(let f=0;f<=n;f++){const b=[],_=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const x=T/e;h.x=-t*Math.cos(s+x*r)*Math.sin(a+_*o),h.y=t*Math.cos(a+_*o),h.z=t*Math.sin(s+x*r)*Math.sin(a+_*o),v.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(x+y,1-_),b.push(c++)}u.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const _=u[f][b+1],y=u[f][b],T=u[f+1][b],x=u[f+1][b+1];(f!==0||a>0)&&m.push(_,y,x),(f!==n-1||l<Math.PI)&&m.push(y,T,x)}this.setIndex(m),this.setAttribute("position",new Se(v,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hh extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class q_ extends hh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class df extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ff extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pf extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function js(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function mf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gf(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Vl(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function uh(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class Tr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _f extends Tr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ti,endingEnd:Ti}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ei:r=t,o=2*e-n;break;case hr:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ei:a=t,l=2*n-e;break;case hr:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),g=v*v,p=g*v,f=-d*p+2*d*g-d*v,b=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*v+1,_=(-1-m)*p+(1.5+m)*g+.5*v,y=m*p-m*g;for(let T=0;T!==o;++T)r[T]=f*a[u+T]+b*a[c+T]+_*a[l+T]+y*a[h+T];return r}}class dh extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class vf extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class mn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _f(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&mf(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{const h=o*n,d=h-n,m=h+n;for(let v=0;v!==n;++v){const g=e[h+v];if(g!==e[d+v]||g!==e[m+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[h+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=eo;class zi extends mn{constructor(t,e,n){super(t,e,n)}}zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=cr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class fh extends mn{}fh.prototype.ValueTypeName="color";class gr extends mn{}gr.prototype.ValueTypeName="number";class xf extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e);let c=t*o;for(let u=c+o;c!==u;c+=4)rn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Er extends mn{InterpolantFactoryMethodLinear(t){return new xf(this.times,this.values,this.getValueSize(),t)}}Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends mn{constructor(t,e,n){super(t,e,n)}}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=cr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends mn{}_r.prototype.ValueTypeName="vector";class Ol{constructor(t="",e=-1,n=[],s=Mo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Je(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(bf(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=gf(l);l=Vl(l,1,u),c=Vl(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,v,g){if(m.length!==0){const p=[],f=[];uh(m,p,f,v),p.length!==0&&g.push(new h(d,p,f))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)m[d[v].morphTargets[g]]=-1;for(const g in m){const p=[],f=[];for(let b=0;b!==d[v].morphTargets.length;++b){const _=d[v];p.push(_.time),f.push(_.morphTarget===g?1:0)}s.push(new gr(".morphTargetInfluence["+g+"]",p,f))}l=m.length*a}else{const m=".bones["+e[h].name+"]";n(_r,m+".position",d,"pos",s),n(Er,m+".quaternion",d,"rot",s),n(_r,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gr;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return fh;case"quaternion":return Er;case"bool":case"boolean":return zi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=yf(i.type);if(i.times===void 0){const e=[],n=[];uh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const un={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ph{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const Mf=new ph;class ki{constructor(t){this.manager=t!==void 0?t:Mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class Sf extends Error{constructor(t,e){super(t),this.response=e}}class Tf extends ki{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=un.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(bn[t]!==void 0){bn[t].push({onLoad:e,onProgress:n,onError:s});return}bn[t]=[],bn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bn[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,v=m!==0;let g=0;const p=new ReadableStream({start(f){b();function b(){h.read().then(({done:_,value:y})=>{if(_)f.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let x=0,E=u.length;x<E;x++){const A=u[x];A.onProgress&&A.onProgress(T)}f.enqueue(y),b()}},_=>{f.error(_)})}}});return new Response(p)}else throw new Sf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{un.add(t,c);const u=bn[t];delete bn[t];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=bn[t];if(u===void 0)throw this.manager.itemError(t),c;delete bn[t];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class vs extends ki{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=un.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ds("img");function l(){u(),un.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class $_ extends ki{constructor(t){super(t)}load(t,e,n,s){const r=new Ao;r.colorSpace=Ve;const a=new vs(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}}class Ef extends ki{constructor(t){super(t)}load(t,e,n,s){const r=new ve,a=new vs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class wr extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const sa=new Jt,Wl=new W,Gl=new W;class Io{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wf extends Io{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Vi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class tv extends wr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const zl=new Jt,ns=new W,ra=new W;class Af extends Io{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(ns),ra.copy(n.position),ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ra),n.updateMatrixWorld(),s.makeTranslation(-ns.x,-ns.y,-ns.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class ev extends wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Af}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Do extends Jc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rf extends Io{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lf extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Rf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Pf extends wr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nv{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class iv extends ki{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=un.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return un.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),un.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});un.add(t,l),r.manager.itemStart(t)}}class Cf extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bl(){return performance.now()}class If{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,s,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){rn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const a=this._workIndex*r;rn.multiplyQuaternionsFlat(t,a,t,e,t,n),rn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*s}}}const Uo="\\[\\]\\.:\\/",Df=new RegExp("["+Uo+"]","g"),No="[^"+Uo+"]",Uf="[^"+Uo.replace("\\.","")+"]",Nf=/((?:WC+[\/:])*)/.source.replace("WC",No),Ff=/(WCOD+)?/.source.replace("WCOD",Uf),Vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",No),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",No),Wf=new RegExp("^"+Nf+Ff+Vf+Of+"$"),Gf=["material","materials","bones","map"];class zf{constructor(t,e,n){const s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(t){const e=Wf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Gf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=zf;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bf{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Ti,endingEnd:Ti};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Mu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Tu:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Mo:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const a=n===Su;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===bu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=Ei,s.endingEnd=Ei):(t?s.endingStart=this.zeroSlopeAtStart?Ei:Ti:s.endingStart=hr,e?s.endingEnd=this.zeroSlopeAtEnd?Ei:Ti:s.endingEnd=hr)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const kf=new Float32Array(1);class sv extends An{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=s[h],m=d.name;let v=u[m];if(v!==void 0)++v.referenceCount,a[h]=v;else{if(v=a[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,m));continue}const g=e&&e._propertyBindings[h].binding.parsedPath;v=new If(ae.create(n,m,g),d.ValueTypeName,d.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,m),a[h]=v}o[h].resultBuffer=v.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new dh(new Float32Array(2),new Float32Array(2),1,kf),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?Ol.findByName(s,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Mo),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Bf(this,a,e,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Ol.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(s,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const kl=new Jt;class gh{constructor(t,e,n=0,s=1/0){this.ray=new Gi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kl),this}intersectObject(t,e=!0,n=[]){return oo(t,this,n,e),n.sort(Zl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oo(t[s],this,n,e);return n.sort(Zl),n}}function Zl(i,t){return i.distance-t.distance}function oo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)oo(r[a],t,e,!0)}}class Hl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Xl=new yt;class Zf{constructor(t=new yt(1/0,1/0),e=new yt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xl).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yl=new W,Js=new W,Kl=new W;class rv extends ue{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let s=new Re;s.setAttribute("position",new Se([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Ro({fog:!1,toneMapped:!1});this.lightPlane=new mr(s,r),this.add(this.lightPlane),s=new Re,s.setAttribute("position",new Se([0,0,0,0,0,1],3)),this.targetLine=new mr(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Yl.setFromMatrixPosition(this.light.matrixWorld),Js.setFromMatrixPosition(this.light.target.matrixWorld),Kl.subVectors(Js,Yl),this.lightPlane.lookAt(Js),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Js),this.targetLine.scale.z=Kl.length()}}const Qs=new ke;class av extends Pd{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Re;r.setIndex(new Me(n,1)),r.setAttribute("position",new Me(s,3)),super(r,new Ro({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Qs.setFromObject(this.object),Qs.isEmpty())return;const e=Qs.min,n=Qs.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hf extends An{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function jl(i,t,e,n){const s=Xf(n);switch(e){case Fc:return i*t;case Oc:return i*t;case Wc:return i*t*2;case vo:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case bo:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case La:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case or:case Ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zc:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xf(i){switch(i){case wn:case Dc:return{byteLength:1,components:1};case us:case Uc:case gs:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case ii:case mo:case sn:return{byteLength:4,components:1};case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _h(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yf(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<h.length;m++){const v=h[d],g=h[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,h[d]=g)}h.length=d+1;for(let m=0,v=h.length;m<v;m++){const g=h[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ep=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Xp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,t0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e0=`#define DISTANCE
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
}`,n0=`#define DISTANCE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,p0=`#define NORMAL
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
}`,m0=`#define PHONG
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
}`,g0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,y0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,E0=`uniform float rotation;
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
}`,w0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Kf,alphahash_pars_fragment:jf,alphamap_fragment:Jf,alphamap_pars_fragment:Qf,alphatest_fragment:qf,alphatest_pars_fragment:$f,aomap_fragment:tp,aomap_pars_fragment:ep,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:up,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:xp,displacementmap_pars_vertex:yp,displacementmap_vertex:bp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:Tp,colorspace_pars_fragment:Ep,envmap_fragment:wp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Rp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Gp,envmap_vertex:Pp,fog_vertex:Cp,fog_pars_vertex:Ip,fog_fragment:Dp,fog_pars_fragment:Up,gradientmap_pars_fragment:Np,lightmap_pars_fragment:Fp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Op,lights_pars_begin:Wp,lights_toon_fragment:zp,lights_toon_pars_fragment:Bp,lights_phong_fragment:kp,lights_phong_pars_fragment:Zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:Kp,lights_fragment_end:jp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:$p,map_fragment:tm,map_pars_fragment:em,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphinstance_vertex:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:um,normal_fragment_maps:dm,normal_pars_fragment:fm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:ym,opaque_fragment:bm,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:Tm,dithering_fragment:Em,dithering_pars_fragment:wm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Im,skinbase_vertex:Dm,skinning_pars_vertex:Um,skinning_vertex:Nm,skinnormal_vertex:Fm,specularmap_fragment:Vm,specularmap_pars_fragment:Om,tonemapping_fragment:Wm,tonemapping_pars_fragment:Gm,transmission_fragment:zm,transmission_pars_fragment:Bm,uv_pars_fragment:km,uv_pars_vertex:Zm,uv_vertex:Hm,worldpos_vertex:Xm,background_vert:Ym,background_frag:Km,backgroundCube_vert:jm,backgroundCube_frag:Jm,cube_vert:Qm,cube_frag:qm,depth_vert:$m,depth_frag:t0,distanceRGBA_vert:e0,distanceRGBA_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:f0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:v0,meshtoon_vert:x0,meshtoon_frag:y0,points_vert:b0,points_frag:M0,shadow_vert:S0,shadow_frag:T0,sprite_vert:E0,sprite_frag:w0},Lt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},on={basic:{uniforms:Ce([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ce([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ce([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ce([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ce([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ce([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ce([Lt.points,Lt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ce([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ce([Lt.common,Lt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ce([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ce([Lt.sprite,Lt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ce([Lt.common,Lt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ce([Lt.lights,Lt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};on.physical={uniforms:Ce([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const qs={r:0,b:0,g:0},Xn=new an,A0=new Jt;function R0(i,t,e,n,s,r,a){const o=new Kt(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function g(_){let y=!1;const T=v(_);T===null?f(o,l):T&&T.isColor&&(f(T,1),y=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,y){const T=v(y);T&&(T.isCubeTexture||T.mapping===xr)?(u===void 0&&(u=new De(new _s(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Oi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Xn.copy(y.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Xn)),u.material.toneMapped=te.getTransfer(T.colorSpace)!==oe,(h!==T||d!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,m=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new De(new Sr(2,2),new On({name:"BackgroundMaterial",uniforms:Oi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(T.colorSpace)!==oe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,m=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(qs,jc(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,y,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:g,addToRenderList:p,dispose:b}}function L0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,R,U,D,N){let k=!1;const z=h(D,U,R);r!==z&&(r=z,c(r.object)),k=m(S,D,U,N),k&&v(S,D,U,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(S,R,U,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,R,U){const D=U.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let k=N[R.id];k===void 0&&(k={},N[R.id]=k);let z=k[D];return z===void 0&&(z=d(l()),k[D]=z),z}function d(S){const R=[],U=[],D=[];for(let N=0;N<e;N++)R[N]=0,U[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:D,object:S,attributes:{},index:null}}function m(S,R,U,D){const N=r.attributes,k=R.attributes;let z=0;const Z=U.getAttributes();for(const L in Z)if(Z[L].location>=0){const V=N[L];let O=k[L];if(O===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),V===void 0||V.attribute!==O||O&&V.data!==O.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function v(S,R,U,D){const N={},k=R.attributes;let z=0;const Z=U.getAttributes();for(const L in Z)if(Z[L].location>=0){let V=k[L];V===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));const O={};O.attribute=V,V&&V.data&&(O.data=V.data),N[L]=O,z++}r.attributes=N,r.attributesNum=z,r.index=D}function g(){const S=r.newAttributes;for(let R=0,U=S.length;R<U;R++)S[R]=0}function p(S){f(S,0)}function f(S,R){const U=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;U[S]=1,D[S]===0&&(i.enableVertexAttribArray(S),D[S]=1),N[S]!==R&&(i.vertexAttribDivisor(S,R),N[S]=R)}function b(){const S=r.newAttributes,R=r.enabledAttributes;for(let U=0,D=R.length;U<D;U++)R[U]!==S[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function _(S,R,U,D,N,k,z){z===!0?i.vertexAttribIPointer(S,R,U,N,k):i.vertexAttribPointer(S,R,U,D,N,k)}function y(S,R,U,D){g();const N=D.attributes,k=U.getAttributes(),z=R.defaultAttributeValues;for(const Z in k){const L=k[Z];if(L.location>=0){let F=N[Z];if(F===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),F!==void 0){const V=F.normalized,O=F.itemSize,tt=t.get(F);if(tt===void 0)continue;const ct=tt.buffer,G=tt.type,Y=tt.bytesPerElement,Q=G===i.INT||G===i.UNSIGNED_INT||F.gpuType===mo;if(F.isInterleavedBufferAttribute){const J=F.data,ot=J.stride,St=F.offset;if(J.isInstancedInterleavedBuffer){for(let pt=0;pt<L.locationSize;pt++)f(L.location+pt,J.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pt=0;pt<L.locationSize;pt++)p(L.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let pt=0;pt<L.locationSize;pt++)_(L.location+pt,O/L.locationSize,G,V,ot*Y,(St+O/L.locationSize*pt)*Y,Q)}else{if(F.isInstancedBufferAttribute){for(let J=0;J<L.locationSize;J++)f(L.location+J,F.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let J=0;J<L.locationSize;J++)p(L.location+J);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let J=0;J<L.locationSize;J++)_(L.location+J,O/L.locationSize,G,V,O*Y,O/L.locationSize*J*Y,Q)}}else if(z!==void 0){const V=z[Z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(L.location,V);break;case 3:i.vertexAttrib3fv(L.location,V);break;case 4:i.vertexAttrib4fv(L.location,V);break;default:i.vertexAttrib1fv(L.location,V)}}}}b()}function T(){A();for(const S in n){const R=n[S];for(const U in R){const D=R[U];for(const N in D)u(D[N].object),delete D[N];delete R[U]}delete n[S]}}function x(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const U in R){const D=R[U];for(const N in D)u(D[N].object),delete D[N];delete R[U]}delete n[S.id]}function E(S){for(const R in n){const U=n[R];if(U[S.id]===void 0)continue;const D=U[S.id];for(const N in D)u(D[N].object),delete D[N];delete U[S.id]}}function A(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:x,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function P0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];e.update(m,n,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g]*d[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function C0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==je&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==sn&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,x=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:x}}function I0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Un,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,_=b*4;let y=f.clippingState||null;l.value=y,y=u(v,d,_,m);for(let T=0;T!==_;++T)y[T]=e[T];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,v){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const f=m+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,y=m;_!==g;++_,y+=4)a.copy(h[_]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function D0(i){let t=new WeakMap;function e(a,o){return o===Ea?a.mapping=Ii:o===wa&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ea||o===wa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Md(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ai=4,Jl=[.125,.215,.35,.446,.526,.582],Jn=20,aa=new Do,Ql=new Kt;let oa=null,la=0,ca=0,ha=!1;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,ql=[new W(-Kn,bi,0),new W(Kn,bi,0),new W(-bi,0,Kn),new W(bi,0,Kn),new W(0,Kn,-bi),new W(0,Kn,bi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,la,ca),this._renderer.xr.enabled=ha,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:gs,format:je,colorSpace:Fi,depthBuffer:!1},s=tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U0(r)),this._blurMaterial=N0(r,t,e)}return s}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s){const o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Vn,u.autoClear=!1;const m=new wo({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),v=new De(new _s,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Ql),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;$s(s,b*_,f>2?_:0,_,_),u.setRenderTarget(s),g&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ii||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ql[(s-r-1)%ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new De(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),g=r/v,p=isFinite(r)?1+Math.floor(u*g):Jn;p>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const f=[];let b=0;for(let E=0;E<Jn;++E){const A=E/g,M=Math.exp(-A*A/2);f.push(M),E===0?b+=M:E<p&&(b+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-n;const y=this._sizeLods[s],T=3*y*(s>_-Ai?s-_+Ai:0),x=4*(this._cubeSize-y);$s(e,T,x,3*y,2*y),l.setRenderTarget(e),l.render(h,aa)}}function U0(i){const t=[],e=[],n=[];let s=i;const r=i-Ai+1+Jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ai?l=Jl[a-i+Ai-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,g=3,p=2,f=1,b=new Float32Array(g*v*m),_=new Float32Array(p*v*m),y=new Float32Array(f*v*m);for(let x=0;x<m;x++){const E=x%3*2/3-1,A=x>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];b.set(M,g*v*x),_.set(d,p*v*x);const S=[x,x,x,x,x,x];y.set(S,f*v*x)}const T=new Re;T.setAttribute("position",new Me(b,g)),T.setAttribute("uv",new Me(_,p)),T.setAttribute("faceIndex",new Me(y,f)),t.push(T),s>Ai&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tc(i,t,e){const n=new si(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function N0(i,t,e){const n=new Float32Array(Jn),s=new W(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ec(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function nc(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function F0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ea||l===wa,u=l===Ii||l===Di;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new $l(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new $l(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function V0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Si("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O0(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,v=h.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let _=0,y=b.length;_<y;_+=3){const T=b[_+0],x=b[_+1],E=b[_+2];d.push(T,x,x,E,E,T)}}else if(v!==void 0){const b=v.array;g=v.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const T=_+0,x=_+1,E=_+2;d.push(T,x,x,E,E,T)}}else return;const p=new(kc(d)?Kc:Yc)(d,1);p.version=g;const f=r.get(h);f&&t.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function W0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,d*a,v),e.update(m,n,v))}function u(d,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];e.update(p,n,1)}function h(d,m,v,g){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,v);let f=0;for(let b=0;b<v;b++)f+=m[b]*g[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function G0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){const n=new WeakMap,s=new ne;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let y=o.attributes.position.count*_,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const x=new Float32Array(y*T*4*h),E=new Hc(x,y,T,h);E.type=sn,E.needsUpdate=!0;const A=_*4;for(let S=0;S<h;S++){const R=p[S],U=f[S],D=b[S],N=y*T*4*S;for(let k=0;k<R.count;k++){const z=k*A;m===!0&&(s.fromBufferAttribute(R,k),x[N+z+0]=s.x,x[N+z+1]=s.y,x[N+z+2]=s.z,x[N+z+3]=0),v===!0&&(s.fromBufferAttribute(U,k),x[N+z+4]=s.x,x[N+z+5]=s.y,x[N+z+6]=s.z,x[N+z+7]=0),g===!0&&(s.fromBufferAttribute(D,k),x[N+z+8]=s.x,x[N+z+9]=s.y,x[N+z+10]=s.z,x[N+z+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new yt(y,T)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function B0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const vh=new ve,ic=new eh(1,1),xh=new Hc,yh=new ad,bh=new Ao,sc=[],rc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sc[s];if(r===void 0&&(r=new Float32Array(s),sc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ar(i,t){let e=rc[t];e===void 0&&(e=new Int32Array(t),rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function k0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),ye(e,n)}}function K0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),ye(e,n)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),ye(e,n)}}function J0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ic.compareFunction=Bc,r=ic):r=vh,e.setTexture2D(t||r,s)}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bh,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function lg(i){switch(i){case 5126:return k0;case 35664:return Z0;case 35665:return H0;case 35666:return X0;case 35674:return Y0;case 35675:return K0;case 35676:return j0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return q0;case 35669:case 35673:return $0;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,t){i.uniform1fv(this.addr,t)}function hg(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function dg(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pg(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mg(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function vg(i,t){i.uniform3iv(this.addr,t)}function xg(i,t){i.uniform4iv(this.addr,t)}function yg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vh,r[a])}function Eg(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yh,r[a])}function wg(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bh,r[a])}function Ag(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xh,r[a])}function Rg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return bg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lg(e.type)}}class Pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}}class Cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function cc(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){const n=i.name,s=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),a=ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cc(e,c===void 0?new Lg(o,i,t):new Pg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Cg(o),cc(e,h)),e=h}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ig(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dg=37297;let Ug=0;function Ng(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uc=new Ht;function Fg(i){te._getMatrix(uc,te.workingColorSpace,i);const t=`mat3( ${uc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ng(i.getShaderSource(t),a)}else return s}function Vg(i,t){const e=Fg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Og(i,t){let e;switch(t){case du:e="Linear";break;case fu:e="Reinhard";break;case pu:e="Cineon";break;case mu:e="ACESFilmic";break;case _u:e="AgX";break;case vu:e="Neutral";break;case gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new W;function Wg(){te.getLuminanceCoefficients(tr);const i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function zg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ss(i){return i!==""}function fc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(kg,Hg)}const Zg=new Map;function Hg(i,t){let e=jt[t];if(e===void 0){const n=Zg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lo(e)}const Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(i){return i.replace(Xg,Yg)}function Yg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Di:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function Qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case po:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function qg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $g(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Kg(e),c=jg(e),u=Jg(e),h=Qg(e),d=qg(e),m=Gg(e),v=zg(r),g=s.createProgram();let p,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ss).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(p=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=lo(a),a=fc(a,e),a=pc(a,e),o=lo(o),o=fc(o,e),o=pc(o,e),a=mc(a),o=mc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=b+p+a,y=b+f+o,T=hc(s,s.VERTEX_SHADER,_),x=hc(s,s.FRAGMENT_SHADER,y);s.attachShader(g,T),s.attachShader(g,x),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(x).trim();let k=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,x);else{const Z=dc(s,T,"vertex"),L=dc(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Z+`
`+L)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||N==="")&&(z=!1);z&&(R.diagnostics={runnable:k,programLog:U,vertexShader:{log:D,prefix:p},fragmentShader:{log:N,prefix:f}})}s.deleteShader(T),s.deleteShader(x),A=new lr(s,g),M=Bg(s,g)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,Dg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=x,this}let t1=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n1(t),e.set(t,n)),n}}class n1{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}}function i1(i,t,e,n,s,r,a){const o=new Eo,l=new e1,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,R,U,D){const N=U.fog,k=D.geometry,z=M.isMeshStandardMaterial?U.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),L=Z&&Z.mapping===xr?Z.image.height:null,F=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,O=V!==void 0?V.length:0;let tt=0;k.morphAttributes.position!==void 0&&(tt=1),k.morphAttributes.normal!==void 0&&(tt=2),k.morphAttributes.color!==void 0&&(tt=3);let ct,G,Y,Q;if(F){const qt=on[F];ct=qt.vertexShader,G=qt.fragmentShader}else ct=M.vertexShader,G=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const J=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),St=D.isInstancedMesh===!0,pt=D.isBatchedMesh===!0,It=!!M.map,et=!!M.matcap,st=!!Z,I=!!M.aoMap,mt=!!M.lightMap,$=!!M.bumpMap,lt=!!M.normalMap,ut=!!M.displacementMap,Dt=!!M.emissiveMap,Mt=!!M.metalnessMap,C=!!M.roughnessMap,w=M.anisotropy>0,H=M.clearcoat>0,rt=M.dispersion>0,ht=M.iridescence>0,j=M.sheen>0,_t=M.transmission>0,gt=w&&!!M.anisotropyMap,Tt=H&&!!M.clearcoatMap,Ft=H&&!!M.clearcoatNormalMap,dt=H&&!!M.clearcoatRoughnessMap,bt=ht&&!!M.iridescenceMap,vt=ht&&!!M.iridescenceThicknessMap,Nt=j&&!!M.sheenColorMap,Pt=j&&!!M.sheenRoughnessMap,kt=!!M.specularMap,Gt=!!M.specularColorMap,ee=!!M.specularIntensityMap,B=_t&&!!M.transmissionMap,At=_t&&!!M.thicknessMap,at=!!M.gradientMap,ft=!!M.alphaMap,wt=M.alphaTest>0,Rt=!!M.alphaHash,Zt=!!M.extensions;let ce=Vn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ce=i.toneMapping);const ge={shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:ct,fragmentShader:G,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:pt,batchingColor:pt&&D._colorsTexture!==null,instancing:St,instancingColor:St&&D.instanceColor!==null,instancingMorph:St&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Fi,alphaToCoverage:!!M.alphaToCoverage,map:It,matcap:et,envMap:st,envMapMode:st&&Z.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:mt,bumpMap:$,normalMap:lt,displacementMap:d&&ut,emissiveMap:Dt,normalMapObjectSpace:lt&&M.normalMapType===Au,normalMapTangentSpace:lt&&M.normalMapType===So,metalnessMap:Mt,roughnessMap:C,anisotropy:w,anisotropyMap:gt,clearcoat:H,clearcoatMap:Tt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:dt,dispersion:rt,iridescence:ht,iridescenceMap:bt,iridescenceThicknessMap:vt,sheen:j,sheenColorMap:Nt,sheenRoughnessMap:Pt,specularMap:kt,specularColorMap:Gt,specularIntensityMap:ee,transmission:_t,transmissionMap:B,thicknessMap:At,gradientMap:at,opaque:M.transparent===!1&&M.blending===Ri&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:wt,alphaHash:Rt,combine:M.combine,mapUv:It&&g(M.map.channel),aoMapUv:I&&g(M.aoMap.channel),lightMapUv:mt&&g(M.lightMap.channel),bumpMapUv:$&&g(M.bumpMap.channel),normalMapUv:lt&&g(M.normalMap.channel),displacementMapUv:ut&&g(M.displacementMap.channel),emissiveMapUv:Dt&&g(M.emissiveMap.channel),metalnessMapUv:Mt&&g(M.metalnessMap.channel),roughnessMapUv:C&&g(M.roughnessMap.channel),anisotropyMapUv:gt&&g(M.anisotropyMap.channel),clearcoatMapUv:Tt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(M.sheenRoughnessMap.channel),specularMapUv:kt&&g(M.specularMap.channel),specularColorMapUv:Gt&&g(M.specularColorMap.channel),specularIntensityMapUv:ee&&g(M.specularIntensityMap.channel),transmissionMapUv:B&&g(M.transmissionMap.channel),thicknessMapUv:At&&g(M.thicknessMap.channel),alphaMapUv:ft&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(lt||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(It||ft),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ot,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:tt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:It&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:Dt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sn,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&M.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(S,M),_(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const S=v[M.type];let R;if(S){const U=on[S];R=vd.clone(U.uniforms)}else R=M.uniforms;return R}function T(M,S){let R;for(let U=0,D=u.length;U<D;U++){const N=u[U];if(N.cacheKey===S){R=N,++R.usedTimes;break}}return R===void 0&&(R=new $g(i,S,M,r),u.push(R)),R}function x(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:x,releaseShaderCache:E,programs:u,dispose:A}}function s1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function r1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _c(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,m,v,g,p){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=g,f.group=p),t++,f}function o(h,d,m,v,g,p){const f=a(h,d,m,v,g,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(h,d,m,v,g,p){const f=a(h,d,m,v,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||r1),n.length>1&&n.sort(d||_c),s.length>1&&s.sort(d||_c)}function u(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function a1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new vc,i.set(n,[a])):s>=r.length?(a=new vc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function o1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Kt};break;case"SpotLight":e={position:new W,direction:new W,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function l1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let c1=0;function h1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u1(i){const t=new o1,e=l1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const s=new W,r=new Jt,a=new Jt;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,g=0,p=0,f=0,b=0,_=0,y=0,T=0,x=0,E=0;c.sort(h1);for(let M=0,S=c.length;M<S;M++){const R=c[M],U=R.color,D=R.intensity,N=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*D,h+=U.g*D,d+=U.b*D;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],D);E++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,L=e.get(R);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,n.directionalShadow[m]=L,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=z,m++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(U).multiplyScalar(D),z.distance=N,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[g]=z;const Z=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,Z.updateMatrices(R),R.castShadow&&x++),n.spotLightMatrix[g]=Z.matrix,R.castShadow){const L=e.get(R);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=k,y++}g++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(U).multiplyScalar(D),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=z,p++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const Z=R.shadow,L=e.get(R);L.shadowIntensity=Z.intensity,L.shadowBias=Z.bias,L.shadowNormalBias=Z.normalBias,L.shadowRadius=Z.radius,L.shadowMapSize=Z.mapSize,L.shadowCameraNear=Z.camera.near,L.shadowCameraFar=Z.camera.far,n.pointShadow[v]=L,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=R.shadow.matrix,_++}n.point[v]=z,v++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(D),z.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[f]=z,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==m||A.pointLength!==v||A.spotLength!==g||A.rectAreaLength!==p||A.hemiLength!==f||A.numDirectionalShadows!==b||A.numPointShadows!==_||A.numSpotShadows!==y||A.numSpotMaps!==T||A.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-x,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=E,A.directionalLength=m,A.pointLength=v,A.spotLength=g,A.rectAreaLength=p,A.hemiLength=f,A.numDirectionalShadows=b,A.numPointShadows=_,A.numSpotShadows=y,A.numSpotMaps=T,A.numLightProbes=E,n.version=c1++)}function l(c,u){let h=0,d=0,m=0,v=0,g=0;const p=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const _=c[f];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(_.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function xc(i){const t=new u1(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function d1(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new xc(i),t.set(s,[o])):r>=a.length?(o=new xc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(i,t,e){let n=new br;const s=new yt,r=new yt,a=new ne,o=new ff({depthPacking:wu}),l=new pf,c={},u=e.maxTextureSize,h={[En]:Oe,[Oe]:En,[Sn]:Sn},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:f1,fragmentShader:p1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Re;v.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new De(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let f=this.type;this.render=function(x,E,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Fn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=f!==Mn&&this.type===Mn,N=f===Mn&&this.type!==Mn;for(let k=0,z=x.length;k<z;k++){const Z=x[k],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const F=L.getFrameExtents();if(s.multiply(F),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/F.x),s.x=r.x*F.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/F.y),s.y=r.y*F.y,L.mapSize.y=r.y)),L.map===null||D===!0||N===!0){const O=this.type!==Mn?{minFilter:Be,magFilter:Be}:{};L.map!==null&&L.map.dispose(),L.map=new si(s.x,s.y,O),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const V=L.getViewportCount();for(let O=0;O<V;O++){const tt=L.getViewport(O);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),U.viewport(a),L.updateMatrices(Z,O),n=L.getFrustum(),y(E,A,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===Mn&&b(L,A),L.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,S,R)};function b(x,E){const A=t.update(g);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,g,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(E,null,A,m,g,null)}function _(x,E,A,M){let S=null;const R=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(R!==void 0)S=R;else if(S=A.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=S.uuid,D=E.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let k=N[D];k===void 0&&(k=S.clone(),N[D]=k,E.addEventListener("dispose",T)),S=k}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Mn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=A}return S}function y(x,E,A,M,S){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===Mn)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const D=t.update(x),N=x.material;if(Array.isArray(N)){const k=D.groups;for(let z=0,Z=k.length;z<Z;z++){const L=k[z],F=N[L.materialIndex];if(F&&F.visible){const V=_(x,F,M,S);x.onBeforeShadow(i,x,E,A,D,V,L),i.renderBufferDirect(A,null,D,V,x,L),x.onAfterShadow(i,x,E,A,D,V,L)}}}else if(N.visible){const k=_(x,N,M,S);x.onBeforeShadow(i,x,E,A,D,k,null),i.renderBufferDirect(A,null,D,k,x,null),x.onAfterShadow(i,x,E,A,D,k,null)}}const U=x.children;for(let D=0,N=U.length;D<N;D++)y(U[D],E,A,M,S)}function T(x){x.target.removeEventListener("dispose",T);for(const A in c){const M=c[A],S=x.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const g1={[va]:xa,[ya]:Sa,[ba]:Ta,[Ci]:Ma,[xa]:va,[Sa]:ya,[Ta]:ba,[Ma]:Ci};function _1(i,t){function e(){let B=!1;const At=new ne;let at=null;const ft=new ne(0,0,0,0);return{setMask:function(wt){at!==wt&&!B&&(i.colorMask(wt,wt,wt,wt),at=wt)},setLocked:function(wt){B=wt},setClear:function(wt,Rt,Zt,ce,ge){ge===!0&&(wt*=ce,Rt*=ce,Zt*=ce),At.set(wt,Rt,Zt,ce),ft.equals(At)===!1&&(i.clearColor(wt,Rt,Zt,ce),ft.copy(At))},reset:function(){B=!1,at=null,ft.set(-1,0,0,0)}}}function n(){let B=!1,At=!1,at=null,ft=null,wt=null;return{setReversed:function(Rt){if(At!==Rt){const Zt=t.get("EXT_clip_control");At?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const ce=wt;wt=null,this.setClear(ce)}At=Rt},getReversed:function(){return At},setTest:function(Rt){Rt?J(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Rt){at!==Rt&&!B&&(i.depthMask(Rt),at=Rt)},setFunc:function(Rt){if(At&&(Rt=g1[Rt]),ft!==Rt){switch(Rt){case va:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Rt}},setLocked:function(Rt){B=Rt},setClear:function(Rt){wt!==Rt&&(At&&(Rt=1-Rt),i.clearDepth(Rt),wt=Rt)},reset:function(){B=!1,at=null,ft=null,wt=null,At=!1}}}function s(){let B=!1,At=null,at=null,ft=null,wt=null,Rt=null,Zt=null,ce=null,ge=null;return{setTest:function(qt){B||(qt?J(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(qt){At!==qt&&!B&&(i.stencilMask(qt),At=qt)},setFunc:function(qt,Ue,Ze){(at!==qt||ft!==Ue||wt!==Ze)&&(i.stencilFunc(qt,Ue,Ze),at=qt,ft=Ue,wt=Ze)},setOp:function(qt,Ue,Ze){(Rt!==qt||Zt!==Ue||ce!==Ze)&&(i.stencilOp(qt,Ue,Ze),Rt=qt,Zt=Ue,ce=Ze)},setLocked:function(qt){B=qt},setClear:function(qt){ge!==qt&&(i.clearStencil(qt),ge=qt)},reset:function(){B=!1,At=null,at=null,ft=null,wt=null,Rt=null,Zt=null,ce=null,ge=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,f=null,b=null,_=null,y=null,T=null,x=null,E=new Kt(0,0,0),A=0,M=!1,S=null,R=null,U=null,D=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(L)[1]),z=Z>=1):L.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),z=Z>=2);let F=null,V={};const O=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ct=new ne().fromArray(O),G=new ne().fromArray(tt);function Y(B,At,at,ft){const wt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(B,Rt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<at;Zt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(At+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Rt}const Q={};Q[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Ci),$(!1),lt(Xo),J(i.CULL_FACE),I(Fn);function J(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function ot(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function St(B,At){return h[B]!==At?(i.bindFramebuffer(B,At),h[B]=At,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=At),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=At),!0):!1}function pt(B,At){let at=m,ft=!1;if(B){at=d.get(At),at===void 0&&(at=[],d.set(At,at));const wt=B.textures;if(at.length!==wt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Zt=wt.length;Rt<Zt;Rt++)at[Rt]=i.COLOR_ATTACHMENT0+Rt;at.length=wt.length,ft=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,ft=!0);ft&&i.drawBuffers(at)}function It(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const et={[jn]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[Kh]:i.FUNC_REVERSE_SUBTRACT};et[jh]=i.MIN,et[Jh]=i.MAX;const st={[Qh]:i.ZERO,[qh]:i.ONE,[$h]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[eu]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function I(B,At,at,ft,wt,Rt,Zt,ce,ge,qt){if(B===Fn){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),B!==Xh){if(B!==p||qt!==M){if((f!==jn||y!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,y=jn),qt)switch(B){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,_=null,T=null,x=null,E.set(0,0,0),A=0,p=B,M=qt}return}wt=wt||At,Rt=Rt||at,Zt=Zt||ft,(At!==f||wt!==y)&&(i.blendEquationSeparate(et[At],et[wt]),f=At,y=wt),(at!==b||ft!==_||Rt!==T||Zt!==x)&&(i.blendFuncSeparate(st[at],st[ft],st[Rt],st[Zt]),b=at,_=ft,T=Rt,x=Zt),(ce.equals(E)===!1||ge!==A)&&(i.blendColor(ce.r,ce.g,ce.b,ge),E.copy(ce),A=ge),p=B,M=!1}function mt(B,At){B.side===Sn?ot(i.CULL_FACE):J(i.CULL_FACE);let at=B.side===Oe;At&&(at=!at),$(at),B.blending===Ri&&B.transparent===!1?I(Fn):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ft=B.stencilWrite;o.setTest(ft),ft&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Dt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function lt(B){B!==kh?(J(i.CULL_FACE),B!==R&&(B===Xo?i.cullFace(i.BACK):B===Zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),R=B}function ut(B){B!==U&&(z&&i.lineWidth(B),U=B)}function Dt(B,At,at){B?(J(i.POLYGON_OFFSET_FILL),(D!==At||N!==at)&&(i.polygonOffset(At,at),D=At,N=at)):ot(i.POLYGON_OFFSET_FILL)}function Mt(B){B?J(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+k-1),F!==B&&(i.activeTexture(B),F=B)}function w(B,At,at){at===void 0&&(F===null?at=i.TEXTURE0+k-1:at=F);let ft=V[at];ft===void 0&&(ft={type:void 0,texture:void 0},V[at]=ft),(ft.type!==B||ft.texture!==At)&&(F!==at&&(i.activeTexture(at),F=at),i.bindTexture(B,At||Q[B]),ft.type=B,ft.texture=At)}function H(){const B=V[F];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(B){ct.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ct.copy(B))}function Pt(B){G.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),G.copy(B))}function kt(B,At){let at=c.get(At);at===void 0&&(at=new WeakMap,c.set(At,at));let ft=at.get(B);ft===void 0&&(ft=i.getUniformBlockIndex(At,B.name),at.set(B,ft))}function Gt(B,At){const ft=c.get(At).get(B);l.get(At)!==ft&&(i.uniformBlockBinding(At,ft,B.__bindingPointIndex),l.set(At,ft))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},F=null,V={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,f=null,b=null,_=null,y=null,T=null,x=null,E=new Kt(0,0,0),A=0,M=!1,S=null,R=null,U=null,D=null,N=null,ct.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ot,bindFramebuffer:St,drawBuffers:pt,useProgram:It,setBlending:I,setMaterial:mt,setFlipSided:$,setCullFace:lt,setLineWidth:ut,setPolygonOffset:Dt,setScissorTest:Mt,activeTexture:C,bindTexture:w,unbindTexture:H,compressedTexImage2D:rt,compressedTexImage3D:ht,texImage2D:bt,texImage3D:vt,updateUBOMapping:kt,uniformBlockBinding:Gt,texStorage2D:Ft,texStorage3D:dt,texSubImage2D:j,texSubImage3D:_t,compressedTexSubImage2D:gt,compressedTexSubImage3D:Tt,scissor:Nt,viewport:Pt,reset:ee}}function v1(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return m?new OffscreenCanvas(C,w):ds("canvas")}function g(C,w,H){let rt=1;const ht=Mt(C);if((ht.width>H||ht.height>H)&&(rt=H/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(rt*ht.width),_t=Math.floor(rt*ht.height);h===void 0&&(h=v(j,_t));const gt=w?v(j,_t):h;return gt.width=j,gt.height=_t,gt.getContext("2d").drawImage(C,0,0,j,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+j+"x"+_t+")."),gt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function p(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,w,H,rt,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=w;if(w===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),w===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),w===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),w===i.RGBA){const _t=ht?ur:te.getTransfer(rt);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=_t===oe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(C,w){let H;return C?w===null||w===ii||w===Ui?H=i.DEPTH24_STENCIL8:w===sn?H=i.DEPTH32F_STENCIL8:w===us&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ii||w===Ui?H=i.DEPTH_COMPONENT24:w===sn?H=i.DEPTH_COMPONENT32F:w===us&&(H=i.DEPTH_COMPONENT16),H}function T(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function x(C){const w=C.target;w.removeEventListener("dispose",x),A(w),w.isVideoTexture&&u.delete(w)}function E(C){const w=C.target;w.removeEventListener("dispose",E),S(w)}function A(C){const w=n.get(C);if(w.__webglInit===void 0)return;const H=C.source,rt=d.get(H);if(rt){const ht=rt[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&M(C),Object.keys(rt).length===0&&d.delete(H)}n.remove(C)}function M(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const H=C.source,rt=d.get(H);delete rt[w.__cacheKey],a.memory.textures--}function S(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let ht=0;ht<w.__webglFramebuffer[rt].length;ht++)i.deleteFramebuffer(w.__webglFramebuffer[rt][ht]);else i.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[rt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=C.textures;for(let rt=0,ht=H.length;rt<ht;rt++){const j=n.get(H[rt]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[rt])}n.remove(C)}let R=0;function U(){R=0}function D(){const C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function N(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function k(C,w){const H=n.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const rt=C.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(H,C,w);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function z(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){G(H,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function Z(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){G(H,C,w);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function L(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Y(H,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}const F={[Aa]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},V={[Be]:i.NEAREST,[yu]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},O={[Ru]:i.NEVER,[Uu]:i.ALWAYS,[Lu]:i.LESS,[Bc]:i.LEQUAL,[Pu]:i.EQUAL,[Du]:i.GEQUAL,[Cu]:i.GREATER,[Iu]:i.NOTEQUAL};function tt(C,w){if(w.type===sn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===cn||w.magFilter===Pr||w.magFilter===bs||w.magFilter===qn||w.minFilter===cn||w.minFilter===Pr||w.minFilter===bs||w.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,F[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,F[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,F[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,V[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,V[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Be||w.minFilter!==bs&&w.minFilter!==qn||w.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ct(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",x));const rt=w.source;let ht=d.get(rt);ht===void 0&&(ht={},d.set(rt,ht));const j=N(w);if(j!==C.__cacheKey){ht[j]===void 0&&(ht[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ht[j].usedTimes++;const _t=ht[C.__cacheKey];_t!==void 0&&(ht[C.__cacheKey].usedTimes--,_t.usedTimes===0&&M(w)),C.__cacheKey=j,C.__webglTexture=ht[j].texture}return H}function G(C,w,H){let rt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=i.TEXTURE_3D);const ht=ct(C,w),j=w.source;e.bindTexture(rt,C.__webglTexture,i.TEXTURE0+H);const _t=n.get(j);if(j.version!==_t.__version||ht===!0){e.activeTexture(i.TEXTURE0+H);const gt=te.getPrimaries(te.workingColorSpace),Tt=w.colorSpace===Nn?null:te.getPrimaries(w.colorSpace),Ft=w.colorSpace===Nn||gt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let dt=g(w.image,!1,s.maxTextureSize);dt=Dt(w,dt);const bt=r.convert(w.format,w.colorSpace),vt=r.convert(w.type);let Nt=_(w.internalFormat,bt,vt,w.colorSpace,w.isVideoTexture);tt(rt,w);let Pt;const kt=w.mipmaps,Gt=w.isVideoTexture!==!0,ee=_t.__version===void 0||ht===!0,B=j.dataReady,At=T(w,dt);if(w.isDepthTexture)Nt=y(w.format===Ni,w.type),ee&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Nt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,bt,vt,null));else if(w.isDataTexture)if(kt.length>0){Gt&&ee&&e.texStorage2D(i.TEXTURE_2D,At,Nt,kt[0].width,kt[0].height);for(let at=0,ft=kt.length;at<ft;at++)Pt=kt[at],Gt?B&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Pt.width,Pt.height,bt,vt,Pt.data):e.texImage2D(i.TEXTURE_2D,at,Nt,Pt.width,Pt.height,0,bt,vt,Pt.data);w.generateMipmaps=!1}else Gt?(ee&&e.texStorage2D(i.TEXTURE_2D,At,Nt,dt.width,dt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,bt,vt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,bt,vt,dt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Gt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,kt[0].width,kt[0].height,dt.depth);for(let at=0,ft=kt.length;at<ft;at++)if(Pt=kt[at],w.format!==je)if(bt!==null)if(Gt){if(B)if(w.layerUpdates.size>0){const wt=jl(Pt.width,Pt.height,w.format,w.type);for(const Rt of w.layerUpdates){const Zt=Pt.data.subarray(Rt*wt/Pt.data.BYTES_PER_ELEMENT,(Rt+1)*wt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Rt,Pt.width,Pt.height,1,bt,Zt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Pt.width,Pt.height,dt.depth,bt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Nt,Pt.width,Pt.height,dt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Pt.width,Pt.height,dt.depth,bt,vt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Nt,Pt.width,Pt.height,dt.depth,0,bt,vt,Pt.data)}else{Gt&&ee&&e.texStorage2D(i.TEXTURE_2D,At,Nt,kt[0].width,kt[0].height);for(let at=0,ft=kt.length;at<ft;at++)Pt=kt[at],w.format!==je?bt!==null?Gt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Pt.width,Pt.height,bt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Nt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?B&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Pt.width,Pt.height,bt,vt,Pt.data):e.texImage2D(i.TEXTURE_2D,at,Nt,Pt.width,Pt.height,0,bt,vt,Pt.data)}else if(w.isDataArrayTexture)if(Gt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,dt.width,dt.height,dt.depth),B)if(w.layerUpdates.size>0){const at=jl(dt.width,dt.height,w.format,w.type);for(const ft of w.layerUpdates){const wt=dt.data.subarray(ft*at/dt.data.BYTES_PER_ELEMENT,(ft+1)*at/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,dt.width,dt.height,1,bt,vt,wt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,bt,vt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,bt,vt,dt.data);else if(w.isData3DTexture)Gt?(ee&&e.texStorage3D(i.TEXTURE_3D,At,Nt,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,bt,vt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,bt,vt,dt.data);else if(w.isFramebufferTexture){if(ee)if(Gt)e.texStorage2D(i.TEXTURE_2D,At,Nt,dt.width,dt.height);else{let at=dt.width,ft=dt.height;for(let wt=0;wt<At;wt++)e.texImage2D(i.TEXTURE_2D,wt,Nt,at,ft,0,bt,vt,null),at>>=1,ft>>=1}}else if(kt.length>0){if(Gt&&ee){const at=Mt(kt[0]);e.texStorage2D(i.TEXTURE_2D,At,Nt,at.width,at.height)}for(let at=0,ft=kt.length;at<ft;at++)Pt=kt[at],Gt?B&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,bt,vt,Pt):e.texImage2D(i.TEXTURE_2D,at,Nt,bt,vt,Pt);w.generateMipmaps=!1}else if(Gt){if(ee){const at=Mt(dt);e.texStorage2D(i.TEXTURE_2D,At,Nt,at.width,at.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,vt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,bt,vt,dt);p(w)&&f(rt),_t.__version=j.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Y(C,w,H){if(w.image.length!==6)return;const rt=ct(C,w),ht=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const j=n.get(ht);if(ht.version!==j.__version||rt===!0){e.activeTexture(i.TEXTURE0+H);const _t=te.getPrimaries(te.workingColorSpace),gt=w.colorSpace===Nn?null:te.getPrimaries(w.colorSpace),Tt=w.colorSpace===Nn||_t===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ft=w.isCompressedTexture||w.image[0].isCompressedTexture,dt=w.image[0]&&w.image[0].isDataTexture,bt=[];for(let ft=0;ft<6;ft++)!Ft&&!dt?bt[ft]=g(w.image[ft],!0,s.maxCubemapSize):bt[ft]=dt?w.image[ft].image:w.image[ft],bt[ft]=Dt(w,bt[ft]);const vt=bt[0],Nt=r.convert(w.format,w.colorSpace),Pt=r.convert(w.type),kt=_(w.internalFormat,Nt,Pt,w.colorSpace),Gt=w.isVideoTexture!==!0,ee=j.__version===void 0||rt===!0,B=ht.dataReady;let At=T(w,vt);tt(i.TEXTURE_CUBE_MAP,w);let at;if(Ft){Gt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,kt,vt.width,vt.height);for(let ft=0;ft<6;ft++){at=bt[ft].mipmaps;for(let wt=0;wt<at.length;wt++){const Rt=at[wt];w.format!==je?Nt!==null?Gt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,0,0,Rt.width,Rt.height,Nt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,kt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,0,0,Rt.width,Rt.height,Nt,Pt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,kt,Rt.width,Rt.height,0,Nt,Pt,Rt.data)}}}else{if(at=w.mipmaps,Gt&&ee){at.length>0&&At++;const ft=Mt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,kt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(dt){Gt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,bt[ft].width,bt[ft].height,Nt,Pt,bt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,kt,bt[ft].width,bt[ft].height,0,Nt,Pt,bt[ft].data);for(let wt=0;wt<at.length;wt++){const Zt=at[wt].image[ft].image;Gt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,0,0,Zt.width,Zt.height,Nt,Pt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,kt,Zt.width,Zt.height,0,Nt,Pt,Zt.data)}}else{Gt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Nt,Pt,bt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,kt,Nt,Pt,bt[ft]);for(let wt=0;wt<at.length;wt++){const Rt=at[wt];Gt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,0,0,Nt,Pt,Rt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,kt,Nt,Pt,Rt.image[ft])}}}p(w)&&f(i.TEXTURE_CUBE_MAP),j.__version=ht.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Q(C,w,H,rt,ht,j){const _t=r.convert(H.format,H.colorSpace),gt=r.convert(H.type),Tt=_(H.internalFormat,_t,gt,H.colorSpace),Ft=n.get(w),dt=n.get(H);if(dt.__renderTarget=w,!Ft.__hasExternalTextures){const bt=Math.max(1,w.width>>j),vt=Math.max(1,w.height>>j);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,j,Tt,bt,vt,w.depth,0,_t,gt,null):e.texImage2D(ht,j,Tt,bt,vt,0,_t,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),lt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ht,dt.__webglTexture,0,$(w)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ht,dt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(C,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const rt=w.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,j=y(w.stencilBuffer,ht),_t=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=$(w);lt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,j,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,C)}else{const rt=w.textures;for(let ht=0;ht<rt.length;ht++){const j=rt[ht],_t=r.convert(j.format,j.colorSpace),gt=r.convert(j.type),Tt=_(j.internalFormat,_t,gt,j.colorSpace),Ft=$(w);H&&lt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Tt,w.width,w.height):lt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Tt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(w.depthTexture);rt.__renderTarget=w,(!rt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const ht=rt.__webglTexture,j=$(w);if(w.depthTexture.format===Li)lt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(w.depthTexture.format===Ni)lt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function St(C){const w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const rt=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=rt}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ot(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=i.createRenderbuffer(),J(w.__webglDepthbuffer[rt],C,!1);else{const ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),J(w.__webglDepthbuffer,C,!1);else{const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,w,H){const rt=n.get(C);w!==void 0&&Q(rt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&St(C)}function It(C){const w=C.texture,H=n.get(C),rt=n.get(w);C.addEventListener("dispose",E);const ht=C.textures,j=C.isWebGLCubeRenderTarget===!0,_t=ht.length>1;if(_t||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=w.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[gt]=[];for(let Tt=0;Tt<w.mipmaps.length;Tt++)H.__webglFramebuffer[gt][Tt]=i.createFramebuffer()}else H.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)H.__webglFramebuffer[gt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(_t)for(let gt=0,Tt=ht.length;gt<Tt;gt++){const Ft=n.get(ht[gt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&lt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){const Tt=ht[gt];H.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[gt]);const Ft=r.convert(Tt.format,Tt.colorSpace),dt=r.convert(Tt.type),bt=_(Tt.internalFormat,Ft,dt,Tt.colorSpace,C.isXRRenderTarget===!0),vt=$(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,bt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,H.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),J(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Q(H.__webglFramebuffer[gt][Tt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt);else Q(H.__webglFramebuffer[gt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(w)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let gt=0,Tt=ht.length;gt<Tt;gt++){const Ft=ht[gt],dt=n.get(Ft);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),tt(i.TEXTURE_2D,Ft),Q(H.__webglFramebuffer,C,Ft,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),p(Ft)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,rt.__webglTexture),tt(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let Tt=0;Tt<w.mipmaps.length;Tt++)Q(H.__webglFramebuffer[Tt],C,w,i.COLOR_ATTACHMENT0,gt,Tt);else Q(H.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,gt,0);p(w)&&f(gt),e.unbindTexture()}C.depthBuffer&&St(C)}function et(C){const w=C.textures;for(let H=0,rt=w.length;H<rt;H++){const ht=w[H];if(p(ht)){const j=b(C),_t=n.get(ht).__webglTexture;e.bindTexture(j,_t),f(j),e.unbindTexture()}}}const st=[],I=[];function mt(C){if(C.samples>0){if(lt(C)===!1){const w=C.textures,H=C.width,rt=C.height;let ht=i.COLOR_BUFFER_BIT;const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(C),gt=w.length>1;if(gt)for(let Tt=0;Tt<w.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Tt=0;Tt<w.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Tt]);const Ft=n.get(w[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,H,rt,0,0,H,rt,ht,i.NEAREST),l===!0&&(st.length=0,I.length=0,st.push(i.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(j),I.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Tt=0;Tt<w.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Tt]);const Ft=n.get(w[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function $(C){return Math.min(s.maxSamples,C.samples)}function lt(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(C){const w=a.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Dt(C,w){const H=C.colorSpace,rt=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Fi&&H!==Nn&&(te.getTransfer(H)===oe?(rt!==je||ht!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=L,this.rebindTextures=pt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=lt}function x1(i,t){function e(n,s=Nn){let r;const a=te.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dc)return i.BYTE;if(n===Uc)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===je)return i.RGBA;if(n===Oc)return i.LUMINANCE;if(n===Wc)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Pa||n===Ca||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Ua)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Va||n===Oa||n===Wa||n===Ga||n===za||n===Ba||n===ka||n===Za||n===Ha||n===Xa||n===Ya||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===Ja||n===Qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===qa||n===$a||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const y1={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class S1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:b1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends An{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,v=null;const g=new S1,p=e.getContextAttributes();let f=null,b=null;const _=[],y=[],T=new yt;let x=null;const E=new Ie;E.viewport=new ne;const A=new Ie;A.viewport=new ne;const M=[E,A],S=new Cf;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=_[G];return Y===void 0&&(Y=new da,_[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=_[G];return Y===void 0&&(Y=new da,_[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=_[G];return Y===void 0&&(Y=new da,_[G]=Y),Y.getHandSpace()};function D(G){const Y=y.indexOf(G.inputSource);if(Y===-1)return;const Q=_[Y];Q!==void 0&&(Q.update(G.inputSource,G.frame,c||a),Q.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let G=0;G<_.length;G++){const Y=y[G];Y!==null&&(y[G]=null,_[G].disconnect(Y))}R=null,U=null,g.reset(),t.setRenderTarget(f),m=null,d=null,h=null,s=null,b=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new si(m.framebufferWidth,m.framebufferHeight,{format:je,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,Q=null,J=null;p.depth&&(J=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=p.stencil?Ni:Li,Q=p.stencil?Ui:ii);const ot={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new si(d.textureWidth,d.textureHeight,{format:je,type:wn,depthTexture:new eh(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(G){for(let Y=0;Y<G.removed.length;Y++){const Q=G.removed[Y],J=y.indexOf(Q);J>=0&&(y[J]=null,_[J].disconnect(Q))}for(let Y=0;Y<G.added.length;Y++){const Q=G.added[Y];let J=y.indexOf(Q);if(J===-1){for(let St=0;St<_.length;St++)if(St>=y.length){y.push(Q),J=St;break}else if(y[St]===null){y[St]=Q,J=St;break}if(J===-1)break}const ot=_[J];ot&&ot.connect(Q)}}const z=new W,Z=new W;function L(G,Y,Q){z.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(Q.matrixWorld);const J=z.distanceTo(Z),ot=Y.projectionMatrix.elements,St=Q.projectionMatrix.elements,pt=ot[14]/(ot[10]-1),It=ot[14]/(ot[10]+1),et=(ot[9]+1)/ot[5],st=(ot[9]-1)/ot[5],I=(ot[8]-1)/ot[0],mt=(St[8]+1)/St[0],$=pt*I,lt=pt*mt,ut=J/(-I+mt),Dt=ut*-I;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Dt),G.translateZ(ut),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ot[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Mt=pt+ut,C=It+ut,w=$-Dt,H=lt+(J-Dt),rt=et*It/C*Mt,ht=st*It/C*Mt;G.projectionMatrix.makePerspective(w,H,rt,ht,Mt,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function F(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Y=G.near,Q=G.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),S.near=A.near=E.near=Y,S.far=A.far=E.far=Q,(R!==S.near||U!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,U=S.far),E.layers.mask=G.layers.mask|2,A.layers.mask=G.layers.mask|4,S.layers.mask=E.layers.mask|A.layers.mask;const J=G.parent,ot=S.cameras;F(S,J);for(let St=0;St<ot.length;St++)F(ot[St],J);ot.length===2?L(S,E,A):S.projectionMatrix.copy(E.projectionMatrix),V(G,S,J)};function V(G,Y,Q){Q===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(Q.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Vi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let O=null;function tt(G,Y){if(u=Y.getViewerPose(c||a),v=Y,u!==null){const Q=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let J=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let St=0;St<Q.length;St++){const pt=Q[St];let It=null;if(m!==null)It=m.getViewport(pt);else{const st=h.getViewSubImage(d,pt);It=st.viewport,St===0&&(t.setRenderTargetTextures(b,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(b))}let et=M[St];et===void 0&&(et=new Ie,et.layers.enable(St),et.viewport=new ne,M[St]=et),et.matrix.fromArray(pt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(pt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(It.x,It.y,It.width,It.height),St===0&&(S.matrix.copy(et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),J===!0&&S.cameras.push(et)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const St=h.getDepthInformation(Q[0]);St&&St.isValid&&St.texture&&g.init(t,St,s.renderState)}}for(let Q=0;Q<_.length;Q++){const J=y[Q],ot=_[Q];J!==null&&ot!==void 0&&ot.update(J,Y,c||a)}O&&O(G,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),v=null}const ct=new _h;ct.setAnimationLoop(tt),this.setAnimationLoop=function(G){O=G},this.dispose=function(){}}}const Yn=new an,E1=new Jt;function w1(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,jc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Oe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Oe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=t.get(f),_=b.envMap,y=b.envMapRotation;_&&(p.envMap.value=_,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(Yn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=_*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const b=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A1(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(v(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",p));const T=_.program;n.updateUBOMapping(b,T);const x=t.render.frame;r[b.id]!==x&&(d(b),r[b.id]=x)}function u(b){const _=h();b.__bindingPointIndex=_;const y=i.createBuffer(),T=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=s[b.id],y=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let x=0,E=y.length;x<E;x++){const A=Array.isArray(y[x])?y[x]:[y[x]];for(let M=0,S=A.length;M<S;M++){const R=A[M];if(m(R,x,M,T)===!0){const U=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let k=0;k<D.length;k++){const z=D[k],Z=g(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,U+N,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,_,y,T){const x=b.value,E=_+"_"+y;if(T[E]===void 0)return typeof x=="number"||typeof x=="boolean"?T[E]=x:T[E]=x.clone(),!0;{const A=T[E];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return T[E]=x,!0}else if(A.equals(x)===!1)return A.copy(x),!0}return!1}function v(b){const _=b.uniforms;let y=0;const T=16;for(let E=0,A=_.length;E<A;E++){const M=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,R=M.length;S<R;S++){const U=M[S],D=Array.isArray(U.value)?U.value:[U.value];for(let N=0,k=D.length;N<k;N++){const z=D[N],Z=g(z),L=y%T,F=L%Z.boundary,V=L+F;y+=F,V!==0&&T-V<Z.storage&&(y+=T-V),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Z.storage}}}const x=y%T;return x>0&&(y+=T-x),b.__size=y,b.__cache={},this}function g(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function p(b){const _=b.target;_.removeEventListener("dispose",p);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class R1{constructor(t={}){const{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Vn,this.toneMappingExposure=1;const y=this;let T=!1,x=0,E=0,A=null,M=-1,S=null;const R=new ne,U=new ne;let D=null;const N=new Kt(0);let k=0,z=e.width,Z=e.height,L=1,F=null,V=null;const O=new ne(0,0,z,Z),tt=new ne(0,0,z,Z);let ct=!1;const G=new br;let Y=!1,Q=!1;const J=new Jt,ot=new Jt,St=new W,pt=new ne,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function st(){return A===null?L:1}let I=n;function mt(P,X){return e.getContext(P,X)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),I===null){const X="webgl2";if(I=mt(X,P),I===null)throw mt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let $,lt,ut,Dt,Mt,C,w,H,rt,ht,j,_t,gt,Tt,Ft,dt,bt,vt,Nt,Pt,kt,Gt,ee,B;function At(){$=new V0(I),$.init(),Gt=new x1(I,$),lt=new C0(I,$,t,Gt),ut=new _1(I,$),lt.reverseDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),Dt=new G0(I),Mt=new s1,C=new v1(I,$,ut,Mt,lt,Gt,Dt),w=new D0(y),H=new F0(y),rt=new Yf(I),ee=new L0(I,rt),ht=new O0(I,rt,Dt,ee),j=new B0(I,ht,rt,Dt),Nt=new z0(I,lt,C),dt=new I0(Mt),_t=new i1(y,w,H,$,lt,ee,dt),gt=new w1(y,Mt),Tt=new a1,Ft=new d1($),vt=new R0(y,w,H,ut,j,m,l),bt=new m1(y,j,lt),B=new A1(I,Dt,lt,ut),Pt=new P0(I,$,Dt),kt=new W0(I,$,Dt),Dt.programs=_t.programs,y.capabilities=lt,y.extensions=$,y.properties=Mt,y.renderLists=Tt,y.shadowMap=bt,y.state=ut,y.info=Dt}At();const at=new T1(y,I);this.xr=at,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=$.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=$.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(P){P!==void 0&&(L=P,this.setSize(z,Z,!1))},this.getSize=function(P){return P.set(z,Z)},this.setSize=function(P,X,nt=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,Z=X,e.width=Math.floor(P*L),e.height=Math.floor(X*L),nt===!0&&(e.style.width=P+"px",e.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(z*L,Z*L).floor()},this.setDrawingBufferSize=function(P,X,nt){z=P,Z=X,L=nt,e.width=Math.floor(P*nt),e.height=Math.floor(X*nt),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,X,nt,it){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,X,nt,it),ut.viewport(R.copy(O).multiplyScalar(L).round())},this.getScissor=function(P){return P.copy(tt)},this.setScissor=function(P,X,nt,it){P.isVector4?tt.set(P.x,P.y,P.z,P.w):tt.set(P,X,nt,it),ut.scissor(U.copy(tt).multiplyScalar(L).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(P){ut.setScissorTest(ct=P)},this.setOpaqueSort=function(P){F=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(P=!0,X=!0,nt=!0){let it=0;if(P){let K=!1;if(A!==null){const xt=A.texture.format;K=xt===bo||xt===yo||xt===xo}if(K){const xt=A.texture.type,Ct=xt===wn||xt===ii||xt===us||xt===Ui||xt===go||xt===_o,Ut=vt.getClearColor(),Vt=vt.getClearAlpha(),zt=Ut.r,Bt=Ut.g,Ot=Ut.b;Ct?(v[0]=zt,v[1]=Bt,v[2]=Ot,v[3]=Vt,I.clearBufferuiv(I.COLOR,0,v)):(g[0]=zt,g[1]=Bt,g[2]=Ot,g[3]=Vt,I.clearBufferiv(I.COLOR,0,g))}else it|=I.COLOR_BUFFER_BIT}X&&(it|=I.DEPTH_BUFFER_BIT),nt&&(it|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),vt.dispose(),Tt.dispose(),Ft.dispose(),Mt.dispose(),w.dispose(),H.dispose(),j.dispose(),ee.dispose(),B.dispose(),_t.dispose(),at.dispose(),at.removeEventListener("sessionstart",Yi),at.removeEventListener("sessionend",Go),Gn.stop()};function ft(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Dt.autoReset,X=bt.enabled,nt=bt.autoUpdate,it=bt.needsUpdate,K=bt.type;At(),Dt.autoReset=P,bt.enabled=X,bt.autoUpdate=nt,bt.needsUpdate=it,bt.type=K}function Rt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Zt(P){const X=P.target;X.removeEventListener("dispose",Zt),ce(X)}function ce(P){ge(P),Mt.remove(P)}function ge(P){const X=Mt.get(P).programs;X!==void 0&&(X.forEach(function(nt){_t.releaseProgram(nt)}),P.isShaderMaterial&&_t.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,nt,it,K,xt){X===null&&(X=It);const Ct=K.isMesh&&K.matrixWorld.determinant()<0,Ut=Oh(P,X,nt,it,K);ut.setMaterial(it,Ct);let Vt=nt.index,zt=1;if(it.wireframe===!0){if(Vt=ht.getWireframeAttribute(nt),Vt===void 0)return;zt=2}const Bt=nt.drawRange,Ot=nt.attributes.position;let Qt=Bt.start*zt,ie=(Bt.start+Bt.count)*zt;xt!==null&&(Qt=Math.max(Qt,xt.start*zt),ie=Math.min(ie,(xt.start+xt.count)*zt)),Vt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,Vt.count)):Ot!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Ot.count));const pe=ie-Qt;if(pe<0||pe===1/0)return;ee.setup(K,it,Ut,nt,Vt);let fe,$t=Pt;if(Vt!==null&&(fe=rt.get(Vt),$t=kt,$t.setIndex(fe)),K.isMesh)it.wireframe===!0?(ut.setLineWidth(it.wireframeLinewidth*st()),$t.setMode(I.LINES)):$t.setMode(I.TRIANGLES);else if(K.isLine){let Wt=it.linewidth;Wt===void 0&&(Wt=1),ut.setLineWidth(Wt*st()),K.isLineSegments?$t.setMode(I.LINES):K.isLineLoop?$t.setMode(I.LINE_LOOP):$t.setMode(I.LINE_STRIP)}else K.isPoints?$t.setMode(I.POINTS):K.isSprite&&$t.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)$t.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if($.get("WEBGL_multi_draw"))$t.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Wt=K._multiDrawStarts,Te=K._multiDrawCounts,se=K._multiDrawCount,Qe=Vt?rt.get(Vt).bytesPerElement:1,ai=Mt.get(it).currentProgram.getUniforms();for(let We=0;We<se;We++)ai.setValue(I,"_gl_DrawID",We),$t.render(Wt[We]/Qe,Te[We])}else if(K.isInstancedMesh)$t.renderInstances(Qt,pe,K.count);else if(nt.isInstancedBufferGeometry){const Wt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Te=Math.min(nt.instanceCount,Wt);$t.renderInstances(Qt,pe,Te)}else $t.render(Qt,pe)};function qt(P,X,nt){P.transparent===!0&&P.side===Sn&&P.forceSinglePass===!1?(P.side=Oe,P.needsUpdate=!0,ys(P,X,nt),P.side=En,P.needsUpdate=!0,ys(P,X,nt),P.side=Sn):ys(P,X,nt)}this.compile=function(P,X,nt=null){nt===null&&(nt=P),f=Ft.get(nt),f.init(X),_.push(f),nt.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),P!==nt&&P.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),f.setupLights();const it=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xt=K.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const Ut=xt[Ct];qt(Ut,nt,K),it.add(Ut)}else qt(xt,nt,K),it.add(xt)}),_.pop(),f=null,it},this.compileAsync=function(P,X,nt=null){const it=this.compile(P,X,nt);return new Promise(K=>{function xt(){if(it.forEach(function(Ct){Mt.get(Ct).currentProgram.isReady()&&it.delete(Ct)}),it.size===0){K(P);return}setTimeout(xt,10)}$.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ue=null;function Ze(P){Ue&&Ue(P)}function Yi(){Gn.stop()}function Go(){Gn.start()}const Gn=new _h;Gn.setAnimationLoop(Ze),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(P){Ue=P,at.setAnimationLoop(P),P===null?Gn.stop():Gn.start()},at.addEventListener("sessionstart",Yi),at.addEventListener("sessionend",Go),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(X),X=at.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,X,A),f=Ft.get(P,_.length),f.init(X),_.push(f),ot.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),G.setFromProjectionMatrix(ot),Q=this.localClippingEnabled,Y=dt.init(this.clippingPlanes,Q),p=Tt.get(P,b.length),p.init(),b.push(p),at.enabled===!0&&at.isPresenting===!0){const xt=y.xr.getDepthSensingMesh();xt!==null&&Rr(xt,X,-1/0,y.sortObjects)}Rr(P,X,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(F,V),et=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,et&&vt.addToRenderList(p,P),this.info.render.frame++,Y===!0&&dt.beginShadows();const nt=f.state.shadowsArray;bt.render(nt,P,X),Y===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=p.opaque,K=p.transmissive;if(f.setupLights(),X.isArrayCamera){const xt=X.cameras;if(K.length>0)for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++){const Vt=xt[Ct];Bo(it,K,P,Vt)}et&&vt.render(P);for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++){const Vt=xt[Ct];zo(p,P,Vt,Vt.viewport)}}else K.length>0&&Bo(it,K,P,X),et&&vt.render(P),zo(p,P,X);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(y,P,X),ee.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],Y===!0&&dt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Rr(P,X,nt,it){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)nt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){it&&pt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ot);const Ct=j.update(P),Ut=P.material;Ut.visible&&p.push(P,Ct,Ut,nt,pt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){const Ct=j.update(P),Ut=P.material;if(it&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),pt.copy(P.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),pt.copy(Ct.boundingSphere.center)),pt.applyMatrix4(P.matrixWorld).applyMatrix4(ot)),Array.isArray(Ut)){const Vt=Ct.groups;for(let zt=0,Bt=Vt.length;zt<Bt;zt++){const Ot=Vt[zt],Qt=Ut[Ot.materialIndex];Qt&&Qt.visible&&p.push(P,Ct,Qt,nt,pt.z,Ot)}}else Ut.visible&&p.push(P,Ct,Ut,nt,pt.z,null)}}const xt=P.children;for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++)Rr(xt[Ct],X,nt,it)}function zo(P,X,nt,it){const K=P.opaque,xt=P.transmissive,Ct=P.transparent;f.setupLightsView(nt),Y===!0&&dt.setGlobalState(y.clippingPlanes,nt),it&&ut.viewport(R.copy(it)),K.length>0&&xs(K,X,nt),xt.length>0&&xs(xt,X,nt),Ct.length>0&&xs(Ct,X,nt),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Bo(P,X,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[it.id]===void 0&&(f.state.transmissionRenderTarget[it.id]=new si(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?gs:wn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const xt=f.state.transmissionRenderTarget[it.id],Ct=it.viewport||R;xt.setSize(Ct.z,Ct.w);const Ut=y.getRenderTarget();y.setRenderTarget(xt),y.getClearColor(N),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),et&&vt.render(nt);const Vt=y.toneMapping;y.toneMapping=Vn;const zt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),f.setupLightsView(it),Y===!0&&dt.setGlobalState(y.clippingPlanes,it),xs(P,nt,it),C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt),$.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Ot=0,Qt=X.length;Ot<Qt;Ot++){const ie=X[Ot],pe=ie.object,fe=ie.geometry,$t=ie.material,Wt=ie.group;if($t.side===Sn&&pe.layers.test(it.layers)){const Te=$t.side;$t.side=Oe,$t.needsUpdate=!0,ko(pe,nt,it,fe,$t,Wt),$t.side=Te,$t.needsUpdate=!0,Bt=!0}}Bt===!0&&(C.updateMultisampleRenderTarget(xt),C.updateRenderTargetMipmap(xt))}y.setRenderTarget(Ut),y.setClearColor(N,k),zt!==void 0&&(it.viewport=zt),y.toneMapping=Vt}function xs(P,X,nt){const it=X.isScene===!0?X.overrideMaterial:null;for(let K=0,xt=P.length;K<xt;K++){const Ct=P[K],Ut=Ct.object,Vt=Ct.geometry,zt=it===null?Ct.material:it,Bt=Ct.group;Ut.layers.test(nt.layers)&&ko(Ut,X,nt,Vt,zt,Bt)}}function ko(P,X,nt,it,K,xt){P.onBeforeRender(y,X,nt,it,K,xt),P.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(y,X,nt,it,P,xt),K.transparent===!0&&K.side===Sn&&K.forceSinglePass===!1?(K.side=Oe,K.needsUpdate=!0,y.renderBufferDirect(nt,X,it,K,P,xt),K.side=En,K.needsUpdate=!0,y.renderBufferDirect(nt,X,it,K,P,xt),K.side=Sn):y.renderBufferDirect(nt,X,it,K,P,xt),P.onAfterRender(y,X,nt,it,K,xt)}function ys(P,X,nt){X.isScene!==!0&&(X=It);const it=Mt.get(P),K=f.state.lights,xt=f.state.shadowsArray,Ct=K.state.version,Ut=_t.getParameters(P,K.state,xt,X,nt),Vt=_t.getProgramCacheKey(Ut);let zt=it.programs;it.environment=P.isMeshStandardMaterial?X.environment:null,it.fog=X.fog,it.envMap=(P.isMeshStandardMaterial?H:w).get(P.envMap||it.environment),it.envMapRotation=it.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,zt===void 0&&(P.addEventListener("dispose",Zt),zt=new Map,it.programs=zt);let Bt=zt.get(Vt);if(Bt!==void 0){if(it.currentProgram===Bt&&it.lightsStateVersion===Ct)return Ho(P,Ut),Bt}else Ut.uniforms=_t.getUniforms(P),P.onBeforeCompile(Ut,y),Bt=_t.acquireProgram(Ut,Vt),zt.set(Vt,Bt),it.uniforms=Ut.uniforms;const Ot=it.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ot.clippingPlanes=dt.uniform),Ho(P,Ut),it.needsLights=Gh(P),it.lightsStateVersion=Ct,it.needsLights&&(Ot.ambientLightColor.value=K.state.ambient,Ot.lightProbe.value=K.state.probe,Ot.directionalLights.value=K.state.directional,Ot.directionalLightShadows.value=K.state.directionalShadow,Ot.spotLights.value=K.state.spot,Ot.spotLightShadows.value=K.state.spotShadow,Ot.rectAreaLights.value=K.state.rectArea,Ot.ltc_1.value=K.state.rectAreaLTC1,Ot.ltc_2.value=K.state.rectAreaLTC2,Ot.pointLights.value=K.state.point,Ot.pointLightShadows.value=K.state.pointShadow,Ot.hemisphereLights.value=K.state.hemi,Ot.directionalShadowMap.value=K.state.directionalShadowMap,Ot.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ot.spotShadowMap.value=K.state.spotShadowMap,Ot.spotLightMatrix.value=K.state.spotLightMatrix,Ot.spotLightMap.value=K.state.spotLightMap,Ot.pointShadowMap.value=K.state.pointShadowMap,Ot.pointShadowMatrix.value=K.state.pointShadowMatrix),it.currentProgram=Bt,it.uniformsList=null,Bt}function Zo(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=lr.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Ho(P,X){const nt=Mt.get(P);nt.outputColorSpace=X.outputColorSpace,nt.batching=X.batching,nt.batchingColor=X.batchingColor,nt.instancing=X.instancing,nt.instancingColor=X.instancingColor,nt.instancingMorph=X.instancingMorph,nt.skinning=X.skinning,nt.morphTargets=X.morphTargets,nt.morphNormals=X.morphNormals,nt.morphColors=X.morphColors,nt.morphTargetsCount=X.morphTargetsCount,nt.numClippingPlanes=X.numClippingPlanes,nt.numIntersection=X.numClipIntersection,nt.vertexAlphas=X.vertexAlphas,nt.vertexTangents=X.vertexTangents,nt.toneMapping=X.toneMapping}function Oh(P,X,nt,it,K){X.isScene!==!0&&(X=It),C.resetTextureUnits();const xt=X.fog,Ct=it.isMeshStandardMaterial?X.environment:null,Ut=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fi,Vt=(it.isMeshStandardMaterial?H:w).get(it.envMap||Ct),zt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Bt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ot=!!nt.morphAttributes.position,Qt=!!nt.morphAttributes.normal,ie=!!nt.morphAttributes.color;let pe=Vn;it.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=y.toneMapping);const fe=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,$t=fe!==void 0?fe.length:0,Wt=Mt.get(it),Te=f.state.lights;if(Y===!0&&(Q===!0||P!==S)){const Le=P===S&&it.id===M;dt.setState(it,P,Le)}let se=!1;it.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Te.state.version||Wt.outputColorSpace!==Ut||K.isBatchedMesh&&Wt.batching===!1||!K.isBatchedMesh&&Wt.batching===!0||K.isBatchedMesh&&Wt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Wt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Wt.instancing===!1||!K.isInstancedMesh&&Wt.instancing===!0||K.isSkinnedMesh&&Wt.skinning===!1||!K.isSkinnedMesh&&Wt.skinning===!0||K.isInstancedMesh&&Wt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Wt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Wt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Wt.instancingMorph===!1&&K.morphTexture!==null||Wt.envMap!==Vt||it.fog===!0&&Wt.fog!==xt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==dt.numPlanes||Wt.numIntersection!==dt.numIntersection)||Wt.vertexAlphas!==zt||Wt.vertexTangents!==Bt||Wt.morphTargets!==Ot||Wt.morphNormals!==Qt||Wt.morphColors!==ie||Wt.toneMapping!==pe||Wt.morphTargetsCount!==$t)&&(se=!0):(se=!0,Wt.__version=it.version);let Qe=Wt.currentProgram;se===!0&&(Qe=ys(it,X,K));let ai=!1,We=!1,Ki=!1;const he=Qe.getUniforms(),He=Wt.uniforms;if(ut.useProgram(Qe.program)&&(ai=!0,We=!0,Ki=!0),it.id!==M&&(M=it.id,We=!0),ai||S!==P){ut.buffers.depth.getReversed()?(J.copy(P.projectionMatrix),$u(J),td(J),he.setValue(I,"projectionMatrix",J)):he.setValue(I,"projectionMatrix",P.projectionMatrix),he.setValue(I,"viewMatrix",P.matrixWorldInverse);const Ne=he.map.cameraPosition;Ne!==void 0&&Ne.setValue(I,St.setFromMatrixPosition(P.matrixWorld)),lt.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&he.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,We=!0,Ki=!0)}if(K.isSkinnedMesh){he.setOptional(I,K,"bindMatrix"),he.setOptional(I,K,"bindMatrixInverse");const Le=K.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),he.setValue(I,"boneTexture",Le.boneTexture,C))}K.isBatchedMesh&&(he.setOptional(I,K,"batchingTexture"),he.setValue(I,"batchingTexture",K._matricesTexture,C),he.setOptional(I,K,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",K._indirectTexture,C),he.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",K._colorsTexture,C));const Xe=nt.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&Nt.update(K,nt,Qe),(We||Wt.receiveShadow!==K.receiveShadow)&&(Wt.receiveShadow=K.receiveShadow,he.setValue(I,"receiveShadow",K.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(He.envMap.value=Vt,He.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&X.environment!==null&&(He.envMapIntensity.value=X.environmentIntensity),We&&(he.setValue(I,"toneMappingExposure",y.toneMappingExposure),Wt.needsLights&&Wh(He,Ki),xt&&it.fog===!0&&gt.refreshFogUniforms(He,xt),gt.refreshMaterialUniforms(He,it,L,Z,f.state.transmissionRenderTarget[P.id]),lr.upload(I,Zo(Wt),He,C)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(lr.upload(I,Zo(Wt),He,C),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&he.setValue(I,"center",K.center),he.setValue(I,"modelViewMatrix",K.modelViewMatrix),he.setValue(I,"normalMatrix",K.normalMatrix),he.setValue(I,"modelMatrix",K.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Le=it.uniformsGroups;for(let Ne=0,Lr=Le.length;Ne<Lr;Ne++){const zn=Le[Ne];B.update(zn,Qe),B.bind(zn,Qe)}}return Qe}function Wh(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Gh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,X,nt){Mt.get(P.texture).__webglTexture=X,Mt.get(P.depthTexture).__webglTexture=nt;const it=Mt.get(P);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const nt=Mt.get(P);nt.__webglFramebuffer=X,nt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,nt=0){A=P,x=X,E=nt;let it=!0,K=null,xt=!1,Ct=!1;if(P){const Vt=Mt.get(P);if(Vt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(I.FRAMEBUFFER,null),it=!1;else if(Vt.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(Vt.__hasExternalTextures)C.rebindTextures(P,Mt.get(P.texture).__webglTexture,Mt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ot=P.depthTexture;if(Vt.__boundDepthTexture!==Ot){if(Ot!==null&&Mt.has(Ot)&&(P.width!==Ot.image.width||P.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const zt=P.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Ct=!0);const Bt=Mt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Bt[X])?K=Bt[X][nt]:K=Bt[X],xt=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?K=Mt.get(P).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[nt]:K=Bt,R.copy(P.viewport),U.copy(P.scissor),D=P.scissorTest}else R.copy(O).multiplyScalar(L).floor(),U.copy(tt).multiplyScalar(L).floor(),D=ct;if(ut.bindFramebuffer(I.FRAMEBUFFER,K)&&it&&ut.drawBuffers(P,K),ut.viewport(R),ut.scissor(U),ut.setScissorTest(D),xt){const Vt=Mt.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Vt.__webglTexture,nt)}else if(Ct){const Vt=Mt.get(P.texture),zt=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,nt||0,zt)}M=-1},this.readRenderTargetPixels=function(P,X,nt,it,K,xt,Ct){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Mt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){ut.bindFramebuffer(I.FRAMEBUFFER,Ut);try{const Vt=P.texture,zt=Vt.format,Bt=Vt.type;if(!lt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-it&&nt>=0&&nt<=P.height-K&&I.readPixels(X,nt,it,K,Gt.convert(zt),Gt.convert(Bt),xt)}finally{const Vt=A!==null?Mt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(I.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(P,X,nt,it,K,xt,Ct){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Mt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){const Vt=P.texture,zt=Vt.format,Bt=Vt.type;if(!lt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-it&&nt>=0&&nt<=P.height-K){ut.bindFramebuffer(I.FRAMEBUFFER,Ut);const Ot=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ot),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(X,nt,it,K,Gt.convert(zt),Gt.convert(Bt),0);const Qt=A!==null?Mt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(I.FRAMEBUFFER,Qt);const ie=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qu(I,ie,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ot),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.deleteBuffer(Ot),I.deleteSync(ie),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,nt=0){P.isTexture!==!0&&(Si("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const it=Math.pow(2,-nt),K=Math.floor(P.image.width*it),xt=Math.floor(P.image.height*it),Ct=X!==null?X.x:0,Ut=X!==null?X.y:0;C.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,nt,0,0,Ct,Ut,K,xt),ut.unbindTexture()};const zh=I.createFramebuffer(),Bh=I.createFramebuffer();this.copyTextureToTexture=function(P,X,nt=null,it=null,K=0,xt=null){P.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,P=arguments[1],X=arguments[2],xt=arguments[3]||0,nt=null),xt===null&&(K!==0?(Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=K,K=0):xt=0);let Ct,Ut,Vt,zt,Bt,Ot,Qt,ie,pe;const fe=P.isCompressedTexture?P.mipmaps[xt]:P.image;if(nt!==null)Ct=nt.max.x-nt.min.x,Ut=nt.max.y-nt.min.y,Vt=nt.isBox3?nt.max.z-nt.min.z:1,zt=nt.min.x,Bt=nt.min.y,Ot=nt.isBox3?nt.min.z:0;else{const Xe=Math.pow(2,-K);Ct=Math.floor(fe.width*Xe),Ut=Math.floor(fe.height*Xe),P.isDataArrayTexture?Vt=fe.depth:P.isData3DTexture?Vt=Math.floor(fe.depth*Xe):Vt=1,zt=0,Bt=0,Ot=0}it!==null?(Qt=it.x,ie=it.y,pe=it.z):(Qt=0,ie=0,pe=0);const $t=Gt.convert(X.format),Wt=Gt.convert(X.type);let Te;X.isData3DTexture?(C.setTexture3D(X,0),Te=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(C.setTexture2DArray(X,0),Te=I.TEXTURE_2D_ARRAY):(C.setTexture2D(X,0),Te=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const se=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ai=I.getParameter(I.UNPACK_SKIP_PIXELS),We=I.getParameter(I.UNPACK_SKIP_ROWS),Ki=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot);const he=P.isDataArrayTexture||P.isData3DTexture,He=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const Xe=Mt.get(P),Le=Mt.get(X),Ne=Mt.get(Xe.__renderTarget),Lr=Mt.get(Le.__renderTarget);ut.bindFramebuffer(I.READ_FRAMEBUFFER,Ne.__webglFramebuffer),ut.bindFramebuffer(I.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let zn=0;zn<Vt;zn++)he&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,K,Ot+zn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(X).__webglTexture,xt,pe+zn)),I.blitFramebuffer(zt,Bt,Ct,Ut,Qt,ie,Ct,Ut,I.DEPTH_BUFFER_BIT,I.NEAREST);ut.bindFramebuffer(I.READ_FRAMEBUFFER,null),ut.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||Mt.has(P)){const Xe=Mt.get(P),Le=Mt.get(X);ut.bindFramebuffer(I.READ_FRAMEBUFFER,zh),ut.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bh);for(let Ne=0;Ne<Vt;Ne++)he?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.__webglTexture,K,Ot+Ne):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xe.__webglTexture,K),He?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,xt,pe+Ne):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,xt),K!==0?I.blitFramebuffer(zt,Bt,Ct,Ut,Qt,ie,Ct,Ut,I.COLOR_BUFFER_BIT,I.NEAREST):He?I.copyTexSubImage3D(Te,xt,Qt,ie,pe+Ne,zt,Bt,Ct,Ut):I.copyTexSubImage2D(Te,xt,Qt,ie,zt,Bt,Ct,Ut);ut.bindFramebuffer(I.READ_FRAMEBUFFER,null),ut.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else He?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(Te,xt,Qt,ie,pe,Ct,Ut,Vt,$t,Wt,fe.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,xt,Qt,ie,pe,Ct,Ut,Vt,$t,fe.data):I.texSubImage3D(Te,xt,Qt,ie,pe,Ct,Ut,Vt,$t,Wt,fe):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xt,Qt,ie,Ct,Ut,$t,Wt,fe.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xt,Qt,ie,fe.width,fe.height,$t,fe.data):I.texSubImage2D(I.TEXTURE_2D,xt,Qt,ie,Ct,Ut,$t,Wt,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ai),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ki),xt===0&&X.generateMipmaps&&I.generateMipmap(Te),ut.unbindTexture()},this.copyTextureToTexture3D=function(P,X,nt=null,it=null,K=0){return P.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,P=arguments[2],X=arguments[3],K=arguments[4]||0),Si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,nt,it,K)},this.initRenderTarget=function(P){Mt.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),ut.unbindTexture()},this.resetState=function(){x=0,E=0,A=null,ut.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}var L1=Object.defineProperty,P1=(i,t,e)=>t in i?L1(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Et=(i,t,e)=>P1(i,typeof t!="symbol"?t+"":t,e);const Hi="0.11.9",C1=new Ht;function I1(i,t,e,n){const s=C1.set(i.normal.x,i.normal.y,i.normal.z,t.normal.x,t.normal.y,t.normal.z,e.normal.x,e.normal.y,e.normal.z);return n.set(-i.constant,-t.constant,-e.constant),n.applyMatrix3(s.invert()),n}class D1 extends br{constructor(){super(),Et(this,"points"),this.points=Array(8).fill(0).map(()=>new W)}setFromProjectionMatrix(t,e=hn){return super.setFromProjectionMatrix(t,e),this.calculateFrustumPoints(),this}calculateFrustumPoints(){const{planes:t,points:e}=this;[[t[0],t[3],t[4]],[t[1],t[3],t[4]],[t[0],t[2],t[4]],[t[1],t[2],t[4]],[t[0],t[3],t[5]],[t[1],t[3],t[5]],[t[0],t[2],t[5]],[t[1],t[2],t[5]]].forEach((n,s)=>{I1(n[0],n[1],n[2],e[s])})}}var co=(i=>(i[i.none=0]="none",i[i.create=1]="create",i[i.remove=2]="remove",i))(co||{});function U1(i,t,e,n){if(!i.isLeaf&&i.z>e)return 2;const s=i.distRatio;return i.isLeaf&&i.inFrustum&&i.z<e&&s<n&&(i.showing||i.z<=t)?1:!i.isLeaf&&i.z>=t&&s>n?2:0}function Mi(i,t,e,n,s,r,a,o){const l=new ei(i,t,e);return l.position.set(n,s,0),l.scale.set(r,a,o),l}function N1(i,t){const{x:e,y:n,z:s}=i,r=[],a=e*2,o=s+1,l=.25,c=.5,u=1;if(s===0&&t.projectionID==="4326"){const h=n,d=1,m=Mi(a,h,o,-.25,0,c,d,u),v=Mi(a+1,h,o,l,0,c,d,u);r.push(m,v)}else{const h=n*2,d=.5,m=Mi(a,h,o,-.25,l,c,d,u),v=Mi(a+1,h,o,l,l,c,d,u),g=Mi(a,h+1,o,-.25,-.25,c,d,u),p=Mi(a+1,h+1,o,l,-.25,c,d,u);r.push(m,v,g,p)}return r}const yc=new W,bc=new D1,F1=new Jt,V1=new W;class ei extends ue{constructor(t=0,e=0,n=0){super(),Et(this,"x"),Et(this,"y"),Et(this,"z"),Et(this,"isTile",!0),Et(this,"_isLoading",!1),Et(this,"_root",this),Et(this,"_sizeInWorld",-1),Et(this,"_model"),Et(this,"_subTiles"),Et(this,"_isDirty",!1),this.x=t,this.y=e,this.z=n,this.name=`Tile ${n}-${t}-${e}`,this.up.set(0,0,1)}get model(){return this._model}get subTiles(){return this._subTiles}get distRatio(){var n,s;const t=new W().applyMatrix4(this.matrixWorld);t.setY(((s=(n=this.model)==null?void 0:n.geometry.boundingBox)==null?void 0:s.max.z)||0);const e=yc.distanceTo(t)/this._sizeInWorld;return this.inFrustum?e*.8:e*2}get inFrustum(){const t=this.getBBox();return bc.intersectsBox(t)}get isLeaf(){return!this.subTiles}get showing(){return!!this.model&&this.model.visible}set showing(t){this.model?(t&&this._updateShadow(),t!=this.showing&&(this.model.traverse(e=>e.layers.set(t?0:31)),this.model.visible=t,this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:t}))):console.assert(!t)}_needsLoad(t){var e;return t.downloadingThreads>=t.maxThreads?!1:this.model?!this._isDirty||!this.inFrustum?!1:!((e=this.subTiles)!=null&&e.some(n=>!n._isDirty)):!0}raycast(t){return this.inFrustum}getBBox(){var e;const t=new ke(new W(-this.scale.x,-this.scale.y,0),new W(this.scale.x,this.scale.y,0)).applyMatrix4(this.matrixWorld);return this.model?t.max.setY(((e=this.model.geometry.boundingBox)==null?void 0:e.max.z)||0):(t.min.setY(-300),t.max.setY(9e3)),t}getTileSize(){if(this._sizeInWorld<0){const t=new ke(new W(-.5,-.5,0),new W(.5,.5,0)).applyMatrix4(this.matrixWorld);this._sizeInWorld=t.getSize(V1).length(),console.assert(this._sizeInWorld>10)}return this._sizeInWorld}update(t){var r;if(!this.parent||this._isLoading)return;this.parent instanceof ei&&(this._root=this.parent._root),console.assert(this._root.z===0);const{loader:e,minLevel:n,camera:s}=t;if(this.z===0&&(s.getWorldPosition(yc),bc.setFromProjectionMatrix(F1.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse))),this.z>=n&&this._needsLoad(e)){this.model?this._startModify(e):this._startLoad(e);return}this._updateShadow(),this.LOD(t),(r=this.subTiles)==null||r.forEach(a=>a.update(t))}_updateShadow(){this.model&&(this.model.castShadow=this._root.castShadow,this.model.receiveShadow=this._root.receiveShadow)}LOD(t){const{loader:e,minLevel:n,maxLevel:s,LODThreshold:r}=t,a=U1(this,n,s,r);if(a===co.create){const o=N1(this,e);this.add(...o),this._subTiles=o,this._subTiles.forEach(l=>{l.updateMatrixWorld(),l.updateMatrix(),l.getTileSize(),this._root.dispatchEvent({type:"tile-created",tile:l})})}else a===co.remove&&this.model&&(this.showing=!0,this.unLoad(e,!1));return a}_checkVisible(){const t=this.parent;if(t instanceof ei)if(t.model){const e=t.subTiles;if(e){const n=!e.some(s=>!s.model);e.forEach(s=>s.showing=n),t.showing=!n}}else this.showing=!0;return this}async _startLoad(t){console.assert(!this.model),this._isLoading=!0;const e=await t.load(this);this._model=e,e.geometry.computeBoundingBox(),this.add(e),this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:!0}),this.isLeaf&&this._checkVisible(),this._isLoading=!1,this._root.dispatchEvent({type:"tile-loaded",tile:this})}async _startModify(t){console.assert(!!this.model),this.model&&(this._isLoading=!0,await t.update(this,this.model),this.model.geometry.computeBoundingBox(),this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:!0}),this._isDirty=!1,this._isLoading=!1,this._root.dispatchEvent({type:"tile-loaded",tile:this}))}reload(t,e=!0){return e?this.unLoad(t,!0):(this.traverse(n=>{n instanceof ei&&(n.model||n._isLoading)&&(n._isDirty=!0)}),this)}unLoad(t,e=!0){var n;return this.subTiles&&(this.subTiles.forEach(s=>{s.unLoad(t,!0)}),this.remove(...this.subTiles),this._subTiles=void 0),e&&this.model&&(this.model.removeFromParent(),t.unload(this.model),this._model=void 0,this._isDirty=!1,this._root.dispatchEvent({type:"tile-unload",tile:this})),t.debug>1&&((n=this.getObjectByName("tilebox"))==null||n.geometry.dispose()),this}}class O1 extends hh{constructor(t={}){super({transparent:!1,side:En,...t})}}function er(...i){const t=i,e=t&&t.length>1&&t[0].constructor||null;if(!e)throw new Error("concatenateTypedArrays - incorrect quantity of arguments or arguments have incompatible data types");const n=t.reduce((a,o)=>a+o.length,0),s=new e(n);let r=0;for(const a of t)s.set(a,r),r+=a.length;return s}function W1(i,t,e,n){const s=G1(t),r=s.length,a=new Float32Array(r*6),o=new Float32Array(r*4),l=new t.constructor(r*6),c=new Float32Array(r*6);for(let h=0;h<r;h++)z1({edge:s[h],edgeIndex:h,attributes:i,skirtHeight:e,newPosition:a,newTexcoord0:o,newTriangles:l,newNormals:c});i.position.value=er(i.position.value,a),i.texcoord.value=er(i.texcoord.value,o),i.normal.value=er(i.normal.value,c);const u=er(t,l);return{attributes:i,indices:u}}function G1(i){const t=[],e=Array.isArray(i)?i:Array.from(i);for(let s=0;s<e.length;s+=3){const r=e[s],a=e[s+1],o=e[s+2];t.push([r,a],[a,o],[o,r])}t.sort(([s,r],[a,o])=>{const l=Math.min(s,r),c=Math.min(a,o);return l!==c?l-c:Math.max(s,r)-Math.max(a,o)});const n=[];for(let s=0;s<t.length;s++)s+1<t.length&&t[s][0]===t[s+1][1]&&t[s][1]===t[s+1][0]?s++:n.push(t[s]);return n}function z1({edge:i,edgeIndex:t,attributes:e,skirtHeight:n,newPosition:s,newTexcoord0:r,newTriangles:a,newNormals:o}){const l=e.position.value.length,c=t*2,u=c+1;s.set(e.position.value.subarray(i[0]*3,i[0]*3+3),c*3),s[c*3+2]=s[c*3+2]-n,s.set(e.position.value.subarray(i[1]*3,i[1]*3+3),u*3),s[u*3+2]=s[u*3+2]-n,r.set(e.texcoord.value.subarray(i[0]*2,i[0]*2+2),c*2),r.set(e.texcoord.value.subarray(i[1]*2,i[1]*2+2),u*2);const h=t*2*3;a[h]=i[0],a[h+1]=l/3+u,a[h+2]=i[1],a[h+3]=l/3+u,a[h+4]=i[0],a[h+5]=l/3+c,o[h]=0,o[h+1]=0,o[h+2]=1,o[h+3]=0,o[h+4]=0,o[h+5]=1}function B1(i){if(i.length<4)throw new Error(`DEM array must > 4, got ${i.length}!`);const t=Math.floor(Math.sqrt(i.length)),e=t,n=t,s=Mh(n,e);return{attributes:k1(i,n,e),indices:s}}function k1(i,t,e){const n=e*t,s=new Float32Array(n*3),r=new Float32Array(n*2);let a=0;for(let o=0;o<t;o++)for(let l=0;l<e;l++){const c=l/(e-1),u=o/(t-1);r[a*2]=c,r[a*2+1]=u,s[a*3]=c-.5,s[a*3+1]=u-.5,s[a*3+2]=i[(t-o-1)*e+l],a++}return{position:{value:s,size:3},texcoord:{value:r,size:2},normal:{value:Sh(s,Mh(t,e)),size:3}}}function Mh(i,t){const e=6*(t-1)*(i-1),n=new Uint16Array(e);let s=0;for(let r=0;r<i-1;r++)for(let a=0;a<t-1;a++){const o=r*t+a,l=o+1,c=o+t,u=c+1,h=s*6;n[h]=o,n[h+1]=l,n[h+2]=c,n[h+3]=c,n[h+4]=l,n[h+5]=u,s++}return n}function Sh(i,t){const e=new Float32Array(i.length);for(let n=0;n<t.length;n+=3){const s=t[n]*3,r=t[n+1]*3,a=t[n+2]*3,o=i[s],l=i[s+1],c=i[s+2],u=i[r],h=i[r+1],d=i[r+2],m=i[a],v=i[a+1],g=i[a+2],p=u-o,f=h-l,b=d-c,_=m-o,y=v-l,T=g-c,x=f*T-b*y,E=b*_-p*T,A=p*y-f*_,M=Math.sqrt(x*x+E*E+A*A),S=[0,0,1];if(M>0){const R=1/M;S[0]=x*R,S[1]=E*R,S[2]=A*R}for(let R=0;R<3;R++)e[s+R]=e[r+R]=e[a+R]=S[R]}return e}let Z1=class{constructor(t=257){Et(this,"gridSize"),Et(this,"numTriangles"),Et(this,"numParentTriangles"),Et(this,"indices"),Et(this,"coords"),this.gridSize=t;const e=t-1;if(e&e-1)throw new Error(`Expected grid size to be 2^n+1, got ${t}.`);this.numTriangles=e*e*2-2,this.numParentTriangles=this.numTriangles-e*e,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let n=0;n<this.numTriangles;n++){let s=n+2,r=0,a=0,o=0,l=0,c=0,u=0;for(s&1?o=l=c=e:r=a=u=e;(s>>=1)>1;){const d=r+o>>1,m=a+l>>1;s&1?(o=r,l=a,r=c,a=u):(r=o,a=l,o=c,l=u),c=d,u=m}const h=n*4;this.coords[h+0]=r,this.coords[h+1]=a,this.coords[h+2]=o,this.coords[h+3]=l}}createTile(t){return new H1(t,this)}};class H1{constructor(t,e){Et(this,"martini"),Et(this,"terrain"),Et(this,"errors");const n=e.gridSize;if(t.length!==n*n)throw new Error(`Expected terrain data of length ${n*n} (${n} x ${n}), got ${t.length}.`);this.terrain=t,this.martini=e,this.errors=new Float32Array(t.length),this.update()}update(){const{numTriangles:t,numParentTriangles:e,coords:n,gridSize:s}=this.martini,{terrain:r,errors:a}=this;for(let o=t-1;o>=0;o--){const l=o*4,c=n[l+0],u=n[l+1],h=n[l+2],d=n[l+3],m=c+h>>1,v=u+d>>1,g=m+v-u,p=v+c-m,f=(r[u*s+c]+r[d*s+h])/2,b=v*s+m,_=Math.abs(f-r[b]);if(a[b]=Math.max(a[b],_),o<e){const y=(u+p>>1)*s+(c+g>>1),T=(d+p>>1)*s+(h+g>>1);a[b]=Math.max(a[b],a[y],a[T])}}}getGeometryData(t=0){const{gridSize:e,indices:n}=this.martini,{errors:s}=this;let r=0,a=0;const o=e-1;let l,c,u=0;n.fill(0);function h(b,_,y,T,x,E){const A=b+y>>1,M=_+T>>1;Math.abs(b-x)+Math.abs(_-E)>1&&s[M*e+A]>t?(h(x,E,b,_,A,M),h(y,T,x,E,A,M)):(l=_*e+b,c=T*e+y,u=E*e+x,n[l]===0&&(n[l]=++r),n[c]===0&&(n[c]=++r),n[u]===0&&(n[u]=++r),a++)}h(0,0,o,o,o,0),h(o,o,0,0,0,o);const d=r*2,m=a*3,v=new Uint16Array(d),g=new Uint32Array(m);let p=0;function f(b,_,y,T,x,E){const A=b+y>>1,M=_+T>>1;if(Math.abs(b-x)+Math.abs(_-E)>1&&s[M*e+A]>t)f(x,E,b,_,A,M),f(y,T,x,E,A,M);else{const S=n[_*e+b]-1,R=n[T*e+y]-1,U=n[E*e+x]-1;v[2*S]=b,v[2*S+1]=_,v[2*R]=y,v[2*R+1]=T,v[2*U]=x,v[2*U+1]=E,g[p++]=S,g[p++]=R,g[p++]=U}}return f(0,0,o,o,o,0),f(o,o,0,0,0,o),{attributes:this._getMeshAttributes(this.terrain,v,g),indices:g}}_getMeshAttributes(t,e,n){const s=Math.floor(Math.sqrt(t.length)),r=s-1,a=e.length/2,o=new Float32Array(a*3),l=new Float32Array(a*2);for(let u=0;u<a;u++){const h=e[u*2],d=e[u*2+1],m=d*s+h;o[3*u+0]=h/r-.5,o[3*u+1]=.5-d/r,o[3*u+2]=t[m],l[2*u+0]=h/r,l[2*u+1]=1-d/r}const c=Sh(o,n);return{position:{value:o,size:3},texcoord:{value:l,size:2},normal:{value:c,size:3}}}}const X1={0:7e3,1:6e3,2:5e3,3:4e3,4:3e3,5:2500,6:2e3,7:1500,8:800,9:500,10:200,11:100,12:40,13:12,14:5,15:2,16:1,17:0,18:0,19:0,20:0};class Wi extends Re{constructor(){super(),Et(this,"type","TileGeometry");const t=new Float32Array([0,0,0,0,1,0,1,1,0,1,0,0]);this.setData(t,1)}setAttribes(t,e=1){const n=1e4/e,s=W1(t.attributes,t.indices,n),{attributes:r,indices:a}=s;return this.setIndex(new Me(a,1)),this.setAttribute("position",new Me(r.position.value,r.position.size)),this.setAttribute("uv",new Me(r.texcoord.value,r.texcoord.size)),this.setAttribute("normal",new Me(r.normal.value,r.normal.size)),this}setData(t,e,n=!1){if(n){const s=Math.sqrt(t.length),r=new Z1(s).createTile(t).getGeometryData(X1[e]||0);this.setAttribes(r,e)}else{const s=B1(t);this.setAttribes(s,e)}return this}}class Y1 extends ph{constructor(){super(...arguments),Et(this,"onParseEnd")}parseEnd(t){this.onParseEnd&&this.onParseEnd(t)}}const Mc={name:"GuoJF"},Ae={manager:new Y1,demLoaderMap:new Map,imgLoaderMap:new Map,registerMaterialLoader(i){Ae.imgLoaderMap.set(i.dataType,i),i.info.author=i.info.author??Mc.name},registerGeometryLoader(i){Ae.demLoaderMap.set(i.dataType,i),i.info.author=i.info.author??Mc.name},getMaterialLoader(i){const t=typeof i=="string"?i:i.dataType,e=Ae.imgLoaderMap.get(t);if(e)return e;throw`Image source dataType("${t}") is not support!`},getGeometryLoader(i){const t=typeof i=="string"?i:i.dataType,e=Ae.demLoaderMap.get(t);if(e)return e;throw`Terrain source dataType("${t}") is not support!`},getLoaders(){return{imgLoaders:Array.from(Ae.imgLoaderMap.values()),demLoaders:Array.from(Ae.demLoaderMap.values())}}};function Th(i,t){const e=Math.floor(i[0]*t),n=Math.floor(i[1]*t),s=Math.floor((i[2]-i[0])*t),r=Math.floor((i[3]-i[1])*t);return{sx:e,sy:n,sw:s,sh:r}}function Eh(i,t,e,n){if(n<i.minLevel)return{url:void 0,clipBounds:[0,0,1,1]};if(n<=i.maxLevel)return{url:i.getUrl(t,e,n),clipBounds:[0,0,1,1]};const s=j1(t,e,n,i.maxLevel),r=s.parentCoord;return{url:i.getUrl(r.x,r.y,r.z),clipBounds:s.bounds}}function K1(i,t){const e=i.width,n=new OffscreenCanvas(e,e),s=n.getContext("2d"),{sx:r,sy:a,sw:o,sh:l}=Th(t,i.width);return s.drawImage(i,r,a,o,l,0,0,e,e),n}function j1(i,t,e,n){const s=e-n,r={x:i>>s,y:t>>s,z:e-s},a=Math.pow(2,s),o=Math.pow(.5,s),l=i%a/a-.5+o/2,c=t%a/a-.5+o/2,u=new yt(l,c),h=new Zf().setFromCenterAndSize(u,new yt(o,o)),d=[h.min.x+.5,h.min.y+.5,h.max.x+.5,h.max.y+.5];return{parentCoord:r,bounds:d}}function J1(i,t,e){if(t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[2]&&t[3]>=e[3])return i;const[n,s,r,a]=t,[o,l,c,u]=e,h=Math.max(n,o),d=Math.max(s,l),m=Math.min(r,c),v=Math.min(a,u);if(h>=m||d>=v)return i;const g=new OffscreenCanvas(i.width,i.height),p=g.getContext("2d");p.drawImage(i,0,0);const f=Math.max(o,n),b=Math.min(c,r),_=Math.max(l,s),y=Math.min(u,a);p.globalCompositeOperation="destination-in";const T=c-o,x=u-l,E=(f-o)/T*g.width,A=(b-o)/T*g.width,M=g.height-(y-l)/x*g.height,S=g.height-(_-l)/x*g.height;return p.beginPath(),p.rect(E,M,A-E,S-M),p.fill(),g}class Q1{constructor(){Et(this,"_downloadingThreads",0),Et(this,"_bounds",[-180,-85,180,85]),Et(this,"_maxThreads",10),Et(this,"_imgSource",[]),Et(this,"_demSource"),Et(this,"debug",0),Et(this,"_errorMaterial",new wo({color:0,transparent:!0,opacity:.2,name:"error-material"}))}get bounds(){return this._bounds}set bounds(t){this._bounds=t}get maxThreads(){return this._maxThreads}set maxThreads(t){this._maxThreads=t}get downloadingThreads(){return this._downloadingThreads}get imgSource(){return this._imgSource}set imgSource(t){this._imgSource=t}get demSource(){return this._demSource}set demSource(t){this._demSource=t}get projectionID(){return this.imgSource[0].projectionID}get manager(){return Ae.manager}async load(t){const e=this.demSource?1:0+this.imgSource.length;this._downloadingThreads+=e;let n;try{const s=await this.loadMaterial(t),r=await this.loadGeometry(t);n=new De(r,s),n.geometry.clearGroups(),n.material.forEach((a,o)=>{n.geometry.addGroup(0,1/0,o)})}finally{this._downloadingThreads-=e}return n}async update(t,e){const n=this.demSource?1:0+this.imgSource.length;this._downloadingThreads+=n;try{const s=await this.loadMaterial(t,e.material),r=await this.loadGeometry(t,e.geometry);r.clearGroups(),s.forEach((a,o)=>{r.addGroup(0,1/0,o)}),r!=e.geometry&&(e.geometry.dispose(),delete e.geometry.userData.source),e.material.forEach((a,o)=>{a!==this._errorMaterial&&a!=s[o]&&(a.dispose(),delete a.userData.source)}),e.geometry=r,e.material=s,console.assert(e.material.length===e.geometry.groups.length)}finally{this._downloadingThreads-=n}}unload(t){t.material.forEach(e=>e.dispose()),t.geometry.clearGroups(),t.geometry.dispose()}async loadGeometry(t,e){return!this.demSource||!this._checkBounds(this.demSource,t)?new Wi:e&&e.userData.source===this.demSource?e:await Ae.getGeometryLoader(this.demSource).load({source:this.demSource,...t}).then(n=>(n.userData.source=this.demSource,n)).catch(n=>(this.debug>0&&console.error("Load Geometry Error:",n),new Wi))}async loadMaterial(t,e){const n=[],s=this.imgSource.filter(r=>this._checkBounds(r,t));for(let r=0;r<s.length;r++){const a=s[r];if(e){const l=e[r];if(l&&a===l.userData.source){n.push(l);continue}}const o=await Ae.getMaterialLoader(a).load({source:a,...t}).then(l=>(l.userData.source=a,l)).catch(l=>(this.debug>0&&console.error("Load Material Error:",l.target.src),this._errorMaterial.clone()));this._materialClip(o,a,t),n.push(o)}return n}_materialClip(t,e,n){if("map"in t&&t.map instanceof ve){const s=t.map;s.image&&(s.image=J1(s.image,e._projectionBounds,n.bounds)),s.needsUpdate=!0}return this}_checkBounds(t,e){const n=(s,r)=>{const a=s._projectionBounds;return r[2]>=a[0]&&r[3]>=a[1]&&r[0]<=a[2]&&r[1]<=a[3]};return e.z>=t.minLevel&&n(t,e.bounds)}}class Vo{constructor(){Et(this,"info",{version:Hi,description:"Terrain loader base class"}),Et(this,"dataType","")}async load(t){const{source:e,x:n,y:s,z:r}=t,{url:a,clipBounds:o}=Eh(e,n,s,r);if(!a)return new Wi;const l=await this.doLoad(a,{...t,clipBounds:o});return Ae.manager.parseEnd(l),l}}class q1{constructor(){Et(this,"info",{version:Hi,description:"Image loader base class"}),Et(this,"dataType",""),Et(this,"_material",new O1)}get material(){return this._material}set material(t){this.material.dispose(),this._material=t}async load(t){const{source:e,x:n,y:s,z:r}=t,a=this.createMaterial(t);a.transparent=t.source.transparent,a.opacity=t.source.opacity;const{url:o,clipBounds:l}=Eh(e,n,s,r);return o&&(a.map=await this.doLoad(o,{...t,clipBounds:l}),a.addEventListener("dispose",wh)),a}createMaterial(t){return this.material.clone()}async doLoad(t,e){return Promise.resolve(void 0)}}const wh=i=>{const t=i.target.map;t&&(t.image instanceof ImageBitmap&&t.image.close(),t.dispose()),i.target.removeEventListener("dispose",wh)};class Ah extends q1{constructor(){super(...arguments),Et(this,"info",{version:Hi,description:"Tile image loader. It can load xyz tile image."}),Et(this,"dataType","image"),Et(this,"loader",new vs(Ae.manager))}async doLoad(t,e){let n=await this.loader.loadAsync(t);const s=e.clipBounds;s[2]-s[0]<1&&(n=K1(n,s));const r=new ve(n);return r.colorSpace=Ve,r}}Nh(new Ah);class Oo{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const n=this.workersResolve[t];if(n&&n(e),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[t]=s,this.workers[t].postMessage(r,a)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(t,e)):this.queue.push({resolve:n,msg:t,transfer:e})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Rh="dmFyIGhlPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgY2U9KGosWixxKT0+WiBpbiBqP2hlKGosWix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cX0pOmpbWl09cTt2YXIgTj0oaixaLHEpPT5jZShqLHR5cGVvZiBaIT0ic3ltYm9sIj9aKyIiOloscSk7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGooUyxJKXtjb25zdCB5PW5ldyBGbG9hdDMyQXJyYXkoUy5sZW5ndGgpO2ZvcihsZXQgRD0wO0Q8SS5sZW5ndGg7RCs9Myl7Y29uc3QgYT1JW0RdKjMscj1JW0QrMV0qMyxlPUlbRCsyXSozLHM9U1thXSx0PVNbYSsxXSxpPVNbYSsyXSx1PVNbcl0sbj1TW3IrMV0sZj1TW3IrMl0sYz1TW2VdLG89U1tlKzFdLG09U1tlKzJdLHc9dS1zLGg9bi10LGw9Zi1pLGc9Yy1zLE09by10LFU9bS1pLGQ9aCpVLWwqTSxrPWwqZy13KlUseD13Kk0taCpnLHo9TWF0aC5zcXJ0KGQqZCtrKmsreCp4KSxwPVswLDAsMV07aWYoej4wKXtjb25zdCB2PTEvejtwWzBdPWQqdixwWzFdPWsqdixwWzJdPXgqdn1mb3IobGV0IHY9MDt2PDM7disrKXlbYSt2XT15W3Irdl09eVtlK3ZdPXBbdl19cmV0dXJuIHl9Y2xhc3MgWntjb25zdHJ1Y3RvcihJPTI1Nyl7Tih0aGlzLCJncmlkU2l6ZSIpO04odGhpcywibnVtVHJpYW5nbGVzIik7Tih0aGlzLCJudW1QYXJlbnRUcmlhbmdsZXMiKTtOKHRoaXMsImluZGljZXMiKTtOKHRoaXMsImNvb3JkcyIpO3RoaXMuZ3JpZFNpemU9STtjb25zdCB5PUktMTtpZih5JnktMSl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGdyaWQgc2l6ZSB0byBiZSAyXm4rMSwgZ290ICR7SX0uYCk7dGhpcy5udW1UcmlhbmdsZXM9eSp5KjItMix0aGlzLm51bVBhcmVudFRyaWFuZ2xlcz10aGlzLm51bVRyaWFuZ2xlcy15KnksdGhpcy5pbmRpY2VzPW5ldyBVaW50MzJBcnJheSh0aGlzLmdyaWRTaXplKnRoaXMuZ3JpZFNpemUpLHRoaXMuY29vcmRzPW5ldyBVaW50MTZBcnJheSh0aGlzLm51bVRyaWFuZ2xlcyo0KTtmb3IobGV0IEQ9MDtEPHRoaXMubnVtVHJpYW5nbGVzO0QrKyl7bGV0IGE9RCsyLHI9MCxlPTAscz0wLHQ9MCxpPTAsdT0wO2ZvcihhJjE/cz10PWk9eTpyPWU9dT15OyhhPj49MSk+MTspe2NvbnN0IGY9citzPj4xLGM9ZSt0Pj4xO2EmMT8ocz1yLHQ9ZSxyPWksZT11KToocj1zLGU9dCxzPWksdD11KSxpPWYsdT1jfWNvbnN0IG49RCo0O3RoaXMuY29vcmRzW24rMF09cix0aGlzLmNvb3Jkc1tuKzFdPWUsdGhpcy5jb29yZHNbbisyXT1zLHRoaXMuY29vcmRzW24rM109dH19Y3JlYXRlVGlsZShJKXtyZXR1cm4gbmV3IHEoSSx0aGlzKX19Y2xhc3MgcXtjb25zdHJ1Y3RvcihJLHkpe04odGhpcywibWFydGluaSIpO04odGhpcywidGVycmFpbiIpO04odGhpcywiZXJyb3JzIik7Y29uc3QgRD15LmdyaWRTaXplO2lmKEkubGVuZ3RoIT09RCpEKXRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdGVycmFpbiBkYXRhIG9mIGxlbmd0aCAke0QqRH0gKCR7RH0geCAke0R9KSwgZ290ICR7SS5sZW5ndGh9LmApO3RoaXMudGVycmFpbj1JLHRoaXMubWFydGluaT15LHRoaXMuZXJyb3JzPW5ldyBGbG9hdDMyQXJyYXkoSS5sZW5ndGgpLHRoaXMudXBkYXRlKCl9dXBkYXRlKCl7Y29uc3R7bnVtVHJpYW5nbGVzOkksbnVtUGFyZW50VHJpYW5nbGVzOnksY29vcmRzOkQsZ3JpZFNpemU6YX09dGhpcy5tYXJ0aW5pLHt0ZXJyYWluOnIsZXJyb3JzOmV9PXRoaXM7Zm9yKGxldCBzPUktMTtzPj0wO3MtLSl7Y29uc3QgdD1zKjQsaT1EW3QrMF0sdT1EW3QrMV0sbj1EW3QrMl0sZj1EW3QrM10sYz1pK24+PjEsbz11K2Y+PjEsbT1jK28tdSx3PW8raS1jLGg9KHJbdSphK2ldK3JbZiphK25dKS8yLGw9byphK2MsZz1NYXRoLmFicyhoLXJbbF0pO2lmKGVbbF09TWF0aC5tYXgoZVtsXSxnKSxzPHkpe2NvbnN0IE09KHUrdz4+MSkqYSsoaSttPj4xKSxVPShmK3c+PjEpKmErKG4rbT4+MSk7ZVtsXT1NYXRoLm1heChlW2xdLGVbTV0sZVtVXSl9fX1nZXRHZW9tZXRyeURhdGEoST0wKXtjb25zdHtncmlkU2l6ZTp5LGluZGljZXM6RH09dGhpcy5tYXJ0aW5pLHtlcnJvcnM6YX09dGhpcztsZXQgcj0wLGU9MDtjb25zdCBzPXktMTtsZXQgdCxpLHU9MDtELmZpbGwoMCk7ZnVuY3Rpb24gbihsLGcsTSxVLGQsayl7Y29uc3QgeD1sK00+PjEsej1nK1U+PjE7TWF0aC5hYnMobC1kKStNYXRoLmFicyhnLWspPjEmJmFbeip5K3hdPkk/KG4oZCxrLGwsZyx4LHopLG4oTSxVLGQsayx4LHopKToodD1nKnkrbCxpPVUqeStNLHU9ayp5K2QsRFt0XT09PTAmJihEW3RdPSsrciksRFtpXT09PTAmJihEW2ldPSsrciksRFt1XT09PTAmJihEW3VdPSsrciksZSsrKX1uKDAsMCxzLHMscywwKSxuKHMscywwLDAsMCxzKTtjb25zdCBmPXIqMixjPWUqMyxvPW5ldyBVaW50MTZBcnJheShmKSxtPW5ldyBVaW50MzJBcnJheShjKTtsZXQgdz0wO2Z1bmN0aW9uIGgobCxnLE0sVSxkLGspe2NvbnN0IHg9bCtNPj4xLHo9ZytVPj4xO2lmKE1hdGguYWJzKGwtZCkrTWF0aC5hYnMoZy1rKT4xJiZhW3oqeSt4XT5JKWgoZCxrLGwsZyx4LHopLGgoTSxVLGQsayx4LHopO2Vsc2V7Y29uc3QgcD1EW2cqeStsXS0xLHY9RFtVKnkrTV0tMSxWPURbayp5K2RdLTE7b1syKnBdPWwsb1syKnArMV09ZyxvWzIqdl09TSxvWzIqdisxXT1VLG9bMipWXT1kLG9bMipWKzFdPWssbVt3KytdPXAsbVt3KytdPXYsbVt3KytdPVZ9fXJldHVybiBoKDAsMCxzLHMscywwKSxoKHMscywwLDAsMCxzKSx7YXR0cmlidXRlczp0aGlzLl9nZXRNZXNoQXR0cmlidXRlcyh0aGlzLnRlcnJhaW4sbyxtKSxpbmRpY2VzOm19fV9nZXRNZXNoQXR0cmlidXRlcyhJLHksRCl7Y29uc3QgYT1NYXRoLmZsb29yKE1hdGguc3FydChJLmxlbmd0aCkpLHI9YS0xLGU9eS5sZW5ndGgvMixzPW5ldyBGbG9hdDMyQXJyYXkoZSozKSx0PW5ldyBGbG9hdDMyQXJyYXkoZSoyKTtmb3IobGV0IHU9MDt1PGU7dSsrKXtjb25zdCBuPXlbdSoyXSxmPXlbdSoyKzFdLGM9ZiphK247c1szKnUrMF09bi9yLS41LHNbMyp1KzFdPS41LWYvcixzWzMqdSsyXT1JW2NdLHRbMip1KzBdPW4vcix0WzIqdSsxXT0xLWYvcn1jb25zdCBpPWoocyxEKTtyZXR1cm57cG9zaXRpb246e3ZhbHVlOnMsc2l6ZTozfSx0ZXhjb29yZDp7dmFsdWU6dCxzaXplOjJ9LG5vcm1hbDp7dmFsdWU6aSxzaXplOjN9fX19LyogQ29weXJpZ2h0IDIwMTUtMjAyMSBFc3JpLiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wIEBwcmVzZXJ2ZSAqL2NvbnN0IGVlPWZ1bmN0aW9uKCl7dmFyIFM9e307Uy5kZWZhdWx0Tm9EYXRhVmFsdWU9LTM0MDI3OTk5Mzg3OTAxNDg0ZTIyLFMuZGVjb2RlPWZ1bmN0aW9uKGUscyl7cz1zfHx7fTt2YXIgdD1zLmVuY29kZWRNYXNrRGF0YXx8cy5lbmNvZGVkTWFza0RhdGE9PT1udWxsLGk9YShlLHMuaW5wdXRPZmZzZXR8fDAsdCksdT1zLm5vRGF0YVZhbHVlIT09bnVsbD9zLm5vRGF0YVZhbHVlOlMuZGVmYXVsdE5vRGF0YVZhbHVlLG49SShpLHMucGl4ZWxUeXBlfHxGbG9hdDMyQXJyYXkscy5lbmNvZGVkTWFza0RhdGEsdSxzLnJldHVybk1hc2spLGY9e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0LHBpeGVsRGF0YTpuLnJlc3VsdFBpeGVscyxtaW5WYWx1ZTpuLm1pblZhbHVlLG1heFZhbHVlOmkucGl4ZWxzLm1heFZhbHVlLG5vRGF0YVZhbHVlOnV9O3JldHVybiBuLnJlc3VsdE1hc2smJihmLm1hc2tEYXRhPW4ucmVzdWx0TWFzaykscy5yZXR1cm5FbmNvZGVkTWFzayYmaS5tYXNrJiYoZi5lbmNvZGVkTWFza0RhdGE9aS5tYXNrLmJpdHNldD9pLm1hc2suYml0c2V0Om51bGwpLHMucmV0dXJuRmlsZUluZm8mJihmLmZpbGVJbmZvPXkoaSkscy5jb21wdXRlVXNlZEJpdERlcHRocyYmKGYuZmlsZUluZm8uYml0RGVwdGhzPUQoaSkpKSxmfTt2YXIgST1mdW5jdGlvbihlLHMsdCxpLHUpe3ZhciBuPTAsZj1lLnBpeGVscy5udW1CbG9ja3NYLGM9ZS5waXhlbHMubnVtQmxvY2tzWSxvPU1hdGguZmxvb3IoZS53aWR0aC9mKSxtPU1hdGguZmxvb3IoZS5oZWlnaHQvYyksdz0yKmUubWF4WkVycm9yLGg9TnVtYmVyLk1BWF9WQUxVRSxsO3Q9dHx8KGUubWFzaz9lLm1hc2suYml0c2V0Om51bGwpO3ZhciBnLE07Zz1uZXcgcyhlLndpZHRoKmUuaGVpZ2h0KSx1JiZ0JiYoTT1uZXcgVWludDhBcnJheShlLndpZHRoKmUuaGVpZ2h0KSk7Zm9yKHZhciBVPW5ldyBGbG9hdDMyQXJyYXkobyptKSxkLGsseD0wO3g8PWM7eCsrKXt2YXIgej14IT09Yz9tOmUuaGVpZ2h0JWM7aWYoeiE9PTApZm9yKHZhciBwPTA7cDw9ZjtwKyspe3ZhciB2PXAhPT1mP286ZS53aWR0aCVmO2lmKHYhPT0wKXt2YXIgVj14KmUud2lkdGgqbStwKm8sVD1lLndpZHRoLXYsQT1lLnBpeGVscy5ibG9ja3Nbbl0sQixMLEY7QS5lbmNvZGluZzwyPyhBLmVuY29kaW5nPT09MD9CPUEucmF3RGF0YToocihBLnN0dWZmZWREYXRhLEEuYml0c1BlclBpeGVsLEEubnVtVmFsaWRQaXhlbHMsQS5vZmZzZXQsdyxVLGUucGl4ZWxzLm1heFZhbHVlKSxCPVUpLEw9MCk6QS5lbmNvZGluZz09PTI/Rj0wOkY9QS5vZmZzZXQ7dmFyIGI7aWYodClmb3Ioaz0wO2s8ejtrKyspe2ZvcihWJjcmJihiPXRbVj4+M10sYjw8PVYmNyksZD0wO2Q8djtkKyspViY3fHwoYj10W1Y+PjNdKSxiJjEyOD8oTSYmKE1bVl09MSksbD1BLmVuY29kaW5nPDI/QltMKytdOkYsaD1oPmw/bDpoLGdbVisrXT1sKTooTSYmKE1bVl09MCksZ1tWKytdPWkpLGI8PD0xO1YrPVR9ZWxzZSBpZihBLmVuY29kaW5nPDIpZm9yKGs9MDtrPHo7aysrKXtmb3IoZD0wO2Q8djtkKyspbD1CW0wrK10saD1oPmw/bDpoLGdbVisrXT1sO1YrPVR9ZWxzZSBmb3IoaD1oPkY/RjpoLGs9MDtrPHo7aysrKXtmb3IoZD0wO2Q8djtkKyspZ1tWKytdPUY7Vis9VH1pZihBLmVuY29kaW5nPT09MSYmTCE9PUEubnVtVmFsaWRQaXhlbHMpdGhyb3ciQmxvY2sgYW5kIE1hc2sgZG8gbm90IG1hdGNoIjtuKyt9fX1yZXR1cm57cmVzdWx0UGl4ZWxzOmcscmVzdWx0TWFzazpNLG1pblZhbHVlOmh9fSx5PWZ1bmN0aW9uKGUpe3JldHVybntmaWxlSWRlbnRpZmllclN0cmluZzplLmZpbGVJZGVudGlmaWVyU3RyaW5nLGZpbGVWZXJzaW9uOmUuZmlsZVZlcnNpb24saW1hZ2VUeXBlOmUuaW1hZ2VUeXBlLGhlaWdodDplLmhlaWdodCx3aWR0aDplLndpZHRoLG1heFpFcnJvcjplLm1heFpFcnJvcixlb2ZPZmZzZXQ6ZS5lb2ZPZmZzZXQsbWFzazplLm1hc2s/e251bUJsb2Nrc1g6ZS5tYXNrLm51bUJsb2Nrc1gsbnVtQmxvY2tzWTplLm1hc2subnVtQmxvY2tzWSxudW1CeXRlczplLm1hc2subnVtQnl0ZXMsbWF4VmFsdWU6ZS5tYXNrLm1heFZhbHVlfTpudWxsLHBpeGVsczp7bnVtQmxvY2tzWDplLnBpeGVscy5udW1CbG9ja3NYLG51bUJsb2Nrc1k6ZS5waXhlbHMubnVtQmxvY2tzWSxudW1CeXRlczplLnBpeGVscy5udW1CeXRlcyxtYXhWYWx1ZTplLnBpeGVscy5tYXhWYWx1ZSxub0RhdGFWYWx1ZTplLm5vRGF0YVZhbHVlfX19LEQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciBzPWUucGl4ZWxzLm51bUJsb2Nrc1gqZS5waXhlbHMubnVtQmxvY2tzWSx0PXt9LGk9MDtpPHM7aSsrKXt2YXIgdT1lLnBpeGVscy5ibG9ja3NbaV07dS5lbmNvZGluZz09PTA/dC5mbG9hdDMyPSEwOnUuZW5jb2Rpbmc9PT0xP3RbdS5iaXRzUGVyUGl4ZWxdPSEwOnRbMF09ITB9cmV0dXJuIE9iamVjdC5rZXlzKHQpfSxhPWZ1bmN0aW9uKGUscyx0KXt2YXIgaT17fSx1PW5ldyBVaW50OEFycmF5KGUscywxMCk7aWYoaS5maWxlSWRlbnRpZmllclN0cmluZz1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdSksaS5maWxlSWRlbnRpZmllclN0cmluZy50cmltKCkhPT0iQ250WkltYWdlIil0aHJvdyJVbmV4cGVjdGVkIGZpbGUgaWRlbnRpZmllciBzdHJpbmc6ICIraS5maWxlSWRlbnRpZmllclN0cmluZztzKz0xMDt2YXIgbj1uZXcgRGF0YVZpZXcoZSxzLDI0KTtpZihpLmZpbGVWZXJzaW9uPW4uZ2V0SW50MzIoMCwhMCksaS5pbWFnZVR5cGU9bi5nZXRJbnQzMig0LCEwKSxpLmhlaWdodD1uLmdldFVpbnQzMig4LCEwKSxpLndpZHRoPW4uZ2V0VWludDMyKDEyLCEwKSxpLm1heFpFcnJvcj1uLmdldEZsb2F0NjQoMTYsITApLHMrPTI0LCF0KWlmKG49bmV3IERhdGFWaWV3KGUscywxNiksaS5tYXNrPXt9LGkubWFzay5udW1CbG9ja3NZPW4uZ2V0VWludDMyKDAsITApLGkubWFzay5udW1CbG9ja3NYPW4uZ2V0VWludDMyKDQsITApLGkubWFzay5udW1CeXRlcz1uLmdldFVpbnQzMig4LCEwKSxpLm1hc2subWF4VmFsdWU9bi5nZXRGbG9hdDMyKDEyLCEwKSxzKz0xNixpLm1hc2subnVtQnl0ZXM+MCl7dmFyIGY9bmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKGkud2lkdGgqaS5oZWlnaHQvOCkpO249bmV3IERhdGFWaWV3KGUscyxpLm1hc2subnVtQnl0ZXMpO3ZhciBjPW4uZ2V0SW50MTYoMCwhMCksbz0yLG09MDtkb3tpZihjPjApZm9yKDtjLS07KWZbbSsrXT1uLmdldFVpbnQ4KG8rKyk7ZWxzZXt2YXIgdz1uLmdldFVpbnQ4KG8rKyk7Zm9yKGM9LWM7Yy0tOylmW20rK109d31jPW4uZ2V0SW50MTYobywhMCksbys9Mn13aGlsZShvPGkubWFzay5udW1CeXRlcyk7aWYoYyE9PS0zMjc2OHx8bTxmLmxlbmd0aCl0aHJvdyJVbmV4cGVjdGVkIGVuZCBvZiBtYXNrIFJMRSBlbmNvZGluZyI7aS5tYXNrLmJpdHNldD1mLHMrPWkubWFzay5udW1CeXRlc31lbHNlIGkubWFzay5udW1CeXRlc3xpLm1hc2subnVtQmxvY2tzWXxpLm1hc2subWF4VmFsdWV8fChpLm1hc2suYml0c2V0PW5ldyBVaW50OEFycmF5KE1hdGguY2VpbChpLndpZHRoKmkuaGVpZ2h0LzgpKSk7bj1uZXcgRGF0YVZpZXcoZSxzLDE2KSxpLnBpeGVscz17fSxpLnBpeGVscy5udW1CbG9ja3NZPW4uZ2V0VWludDMyKDAsITApLGkucGl4ZWxzLm51bUJsb2Nrc1g9bi5nZXRVaW50MzIoNCwhMCksaS5waXhlbHMubnVtQnl0ZXM9bi5nZXRVaW50MzIoOCwhMCksaS5waXhlbHMubWF4VmFsdWU9bi5nZXRGbG9hdDMyKDEyLCEwKSxzKz0xNjt2YXIgaD1pLnBpeGVscy5udW1CbG9ja3NYLGw9aS5waXhlbHMubnVtQmxvY2tzWSxnPWgrKGkud2lkdGglaD4wPzE6MCksTT1sKyhpLmhlaWdodCVsPjA/MTowKTtpLnBpeGVscy5ibG9ja3M9bmV3IEFycmF5KGcqTSk7Zm9yKHZhciBVPTAsZD0wO2Q8TTtkKyspZm9yKHZhciBrPTA7azxnO2srKyl7dmFyIHg9MCx6PWUuYnl0ZUxlbmd0aC1zO249bmV3IERhdGFWaWV3KGUscyxNYXRoLm1pbigxMCx6KSk7dmFyIHA9e307aS5waXhlbHMuYmxvY2tzW1UrK109cDt2YXIgdj1uLmdldFVpbnQ4KDApO2lmKHgrKyxwLmVuY29kaW5nPXYmNjMscC5lbmNvZGluZz4zKXRocm93IkludmFsaWQgYmxvY2sgZW5jb2RpbmcgKCIrcC5lbmNvZGluZysiKSI7aWYocC5lbmNvZGluZz09PTIpe3MrKztjb250aW51ZX1pZih2IT09MCYmdiE9PTIpe2lmKHY+Pj02LHAub2Zmc2V0VHlwZT12LHY9PT0yKXAub2Zmc2V0PW4uZ2V0SW50OCgxKSx4Kys7ZWxzZSBpZih2PT09MSlwLm9mZnNldD1uLmdldEludDE2KDEsITApLHgrPTI7ZWxzZSBpZih2PT09MClwLm9mZnNldD1uLmdldEZsb2F0MzIoMSwhMCkseCs9NDtlbHNlIHRocm93IkludmFsaWQgYmxvY2sgb2Zmc2V0IHR5cGUiO2lmKHAuZW5jb2Rpbmc9PT0xKWlmKHY9bi5nZXRVaW50OCh4KSx4KysscC5iaXRzUGVyUGl4ZWw9diY2Myx2Pj49NixwLm51bVZhbGlkUGl4ZWxzVHlwZT12LHY9PT0yKXAubnVtVmFsaWRQaXhlbHM9bi5nZXRVaW50OCh4KSx4Kys7ZWxzZSBpZih2PT09MSlwLm51bVZhbGlkUGl4ZWxzPW4uZ2V0VWludDE2KHgsITApLHgrPTI7ZWxzZSBpZih2PT09MClwLm51bVZhbGlkUGl4ZWxzPW4uZ2V0VWludDMyKHgsITApLHgrPTQ7ZWxzZSB0aHJvdyJJbnZhbGlkIHZhbGlkIHBpeGVsIGNvdW50IHR5cGUifWlmKHMrPXgscC5lbmNvZGluZyE9PTMpe3ZhciBWLFQ7aWYocC5lbmNvZGluZz09PTApe3ZhciBBPShpLnBpeGVscy5udW1CeXRlcy0xKS80O2lmKEEhPT1NYXRoLmZsb29yKEEpKXRocm93InVuY29tcHJlc3NlZCBibG9jayBoYXMgaW52YWxpZCBsZW5ndGgiO1Y9bmV3IEFycmF5QnVmZmVyKEEqNCksVD1uZXcgVWludDhBcnJheShWKSxULnNldChuZXcgVWludDhBcnJheShlLHMsQSo0KSk7dmFyIEI9bmV3IEZsb2F0MzJBcnJheShWKTtwLnJhd0RhdGE9QixzKz1BKjR9ZWxzZSBpZihwLmVuY29kaW5nPT09MSl7dmFyIEw9TWF0aC5jZWlsKHAubnVtVmFsaWRQaXhlbHMqcC5iaXRzUGVyUGl4ZWwvOCksRj1NYXRoLmNlaWwoTC80KTtWPW5ldyBBcnJheUJ1ZmZlcihGKjQpLFQ9bmV3IFVpbnQ4QXJyYXkoViksVC5zZXQobmV3IFVpbnQ4QXJyYXkoZSxzLEwpKSxwLnN0dWZmZWREYXRhPW5ldyBVaW50MzJBcnJheShWKSxzKz1MfX19cmV0dXJuIGkuZW9mT2Zmc2V0PXMsaX0scj1mdW5jdGlvbihlLHMsdCxpLHUsbixmKXt2YXIgYz0oMTw8cyktMSxvPTAsbSx3PTAsaCxsLGc9TWF0aC5jZWlsKChmLWkpL3UpLE09ZS5sZW5ndGgqNC1NYXRoLmNlaWwocyp0LzgpO2ZvcihlW2UubGVuZ3RoLTFdPDw9OCpNLG09MDttPHQ7bSsrKXtpZih3PT09MCYmKGw9ZVtvKytdLHc9MzIpLHc+PXMpaD1sPj4+dy1zJmMsdy09cztlbHNle3ZhciBVPXMtdztoPShsJmMpPDxVJmMsbD1lW28rK10sdz0zMi1VLGgrPWw+Pj53fW5bbV09aDxnP2kraCp1OmZ9cmV0dXJuIG59O3JldHVybiBTfSgpLHJlPWZ1bmN0aW9uKCl7dmFyIFM9e3Vuc3R1ZmY6ZnVuY3Rpb24oYSxyLGUscyx0LGksdSxuKXt2YXIgZj0oMTw8ZSktMSxjPTAsbyxtPTAsdyxoLGwsZyxNPWEubGVuZ3RoKjQtTWF0aC5jZWlsKGUqcy84KTtpZihhW2EubGVuZ3RoLTFdPDw9OCpNLHQpZm9yKG89MDtvPHM7bysrKW09PT0wJiYoaD1hW2MrK10sbT0zMiksbT49ZT8odz1oPj4+bS1lJmYsbS09ZSk6KGw9ZS1tLHc9KGgmZik8PGwmZixoPWFbYysrXSxtPTMyLWwsdys9aD4+Pm0pLHJbb109dFt3XTtlbHNlIGZvcihnPU1hdGguY2VpbCgobi1pKS91KSxvPTA7bzxzO28rKyltPT09MCYmKGg9YVtjKytdLG09MzIpLG0+PWU/KHc9aD4+Pm0tZSZmLG0tPWUpOihsPWUtbSx3PShoJmYpPDxsJmYsaD1hW2MrK10sbT0zMi1sLHcrPWg+Pj5tKSxyW29dPXc8Zz9pK3cqdTpufSx1bnN0dWZmTFVUOmZ1bmN0aW9uKGEscixlLHMsdCxpKXt2YXIgdT0oMTw8ciktMSxuPTAsZj0wLGM9MCxvPTAsbT0wLHcsaD1bXSxsPWEubGVuZ3RoKjQtTWF0aC5jZWlsKHIqZS84KTthW2EubGVuZ3RoLTFdPDw9OCpsO3ZhciBnPU1hdGguY2VpbCgoaS1zKS90KTtmb3IoZj0wO2Y8ZTtmKyspbz09PTAmJih3PWFbbisrXSxvPTMyKSxvPj1yPyhtPXc+Pj5vLXImdSxvLT1yKTooYz1yLW8sbT0odyZ1KTw8YyZ1LHc9YVtuKytdLG89MzItYyxtKz13Pj4+byksaFtmXT1tPGc/cyttKnQ6aTtyZXR1cm4gaC51bnNoaWZ0KHMpLGh9LHVuc3R1ZmYyOmZ1bmN0aW9uKGEscixlLHMsdCxpLHUsbil7dmFyIGY9KDE8PGUpLTEsYz0wLG8sbT0wLHc9MCxoLGwsZztpZih0KWZvcihvPTA7bzxzO28rKyltPT09MCYmKGw9YVtjKytdLG09MzIsdz0wKSxtPj1lPyhoPWw+Pj53JmYsbS09ZSx3Kz1lKTooZz1lLW0saD1sPj4+dyZmLGw9YVtjKytdLG09MzItZyxofD0obCYoMTw8ZyktMSk8PGUtZyx3PWcpLHJbb109dFtoXTtlbHNle3ZhciBNPU1hdGguY2VpbCgobi1pKS91KTtmb3Iobz0wO288cztvKyspbT09PTAmJihsPWFbYysrXSxtPTMyLHc9MCksbT49ZT8oaD1sPj4+dyZmLG0tPWUsdys9ZSk6KGc9ZS1tLGg9bD4+PncmZixsPWFbYysrXSxtPTMyLWcsaHw9KGwmKDE8PGcpLTEpPDxlLWcsdz1nKSxyW29dPWg8TT9pK2gqdTpufXJldHVybiByfSx1bnN0dWZmTFVUMjpmdW5jdGlvbihhLHIsZSxzLHQsaSl7dmFyIHU9KDE8PHIpLTEsbj0wLGY9MCxjPTAsbz0wLG09MCx3PTAsaCxsPVtdLGc9TWF0aC5jZWlsKChpLXMpL3QpO2ZvcihmPTA7ZjxlO2YrKylvPT09MCYmKGg9YVtuKytdLG89MzIsdz0wKSxvPj1yPyhtPWg+Pj53JnUsby09cix3Kz1yKTooYz1yLW8sbT1oPj4+dyZ1LGg9YVtuKytdLG89MzItYyxtfD0oaCYoMTw8YyktMSk8PHItYyx3PWMpLGxbZl09bTxnP3MrbSp0Omk7cmV0dXJuIGwudW5zaGlmdChzKSxsfSxvcmlnaW5hbFVuc3R1ZmY6ZnVuY3Rpb24oYSxyLGUscyl7dmFyIHQ9KDE8PGUpLTEsaT0wLHUsbj0wLGYsYyxvLG09YS5sZW5ndGgqNC1NYXRoLmNlaWwoZSpzLzgpO2ZvcihhW2EubGVuZ3RoLTFdPDw9OCptLHU9MDt1PHM7dSsrKW49PT0wJiYoYz1hW2krK10sbj0zMiksbj49ZT8oZj1jPj4+bi1lJnQsbi09ZSk6KG89ZS1uLGY9KGMmdCk8PG8mdCxjPWFbaSsrXSxuPTMyLW8sZis9Yz4+Pm4pLHJbdV09ZjtyZXR1cm4gcn0sb3JpZ2luYWxVbnN0dWZmMjpmdW5jdGlvbihhLHIsZSxzKXt2YXIgdD0oMTw8ZSktMSxpPTAsdSxuPTAsZj0wLGMsbyxtO2Zvcih1PTA7dTxzO3UrKyluPT09MCYmKG89YVtpKytdLG49MzIsZj0wKSxuPj1lPyhjPW8+Pj5mJnQsbi09ZSxmKz1lKToobT1lLW4sYz1vPj4+ZiZ0LG89YVtpKytdLG49MzItbSxjfD0obyYoMTw8bSktMSk8PGUtbSxmPW0pLHJbdV09YztyZXR1cm4gcn19LEk9e0hVRkZNQU5fTFVUX0JJVFNfTUFYOjEyLGNvbXB1dGVDaGVja3N1bUZsZXRjaGVyMzI6ZnVuY3Rpb24oYSl7Zm9yKHZhciByPTY1NTM1LGU9NjU1MzUscz1hLmxlbmd0aCx0PU1hdGguZmxvb3Iocy8yKSxpPTA7dDspe3ZhciB1PXQ+PTM1OT8zNTk6dDt0LT11O2RvIHIrPWFbaSsrXTw8OCxlKz1yKz1hW2krK107d2hpbGUoLS11KTtyPShyJjY1NTM1KSsocj4+PjE2KSxlPShlJjY1NTM1KSsoZT4+PjE2KX1yZXR1cm4gcyYxJiYoZSs9cis9YVtpXTw8OCkscj0ociY2NTUzNSkrKHI+Pj4xNiksZT0oZSY2NTUzNSkrKGU+Pj4xNiksKGU8PDE2fHIpPj4+MH0scmVhZEhlYWRlckluZm86ZnVuY3Rpb24oYSxyKXt2YXIgZT1yLnB0cixzPW5ldyBVaW50OEFycmF5KGEsZSw2KSx0PXt9O2lmKHQuZmlsZUlkZW50aWZpZXJTdHJpbmc9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHMpLHQuZmlsZUlkZW50aWZpZXJTdHJpbmcubGFzdEluZGV4T2YoIkxlcmMyIiwwKSE9PTApdGhyb3ciVW5leHBlY3RlZCBmaWxlIGlkZW50aWZpZXIgc3RyaW5nIChleHBlY3QgTGVyYzIgKTogIit0LmZpbGVJZGVudGlmaWVyU3RyaW5nO2UrPTY7dmFyIGk9bmV3IERhdGFWaWV3KGEsZSw4KSx1PWkuZ2V0SW50MzIoMCwhMCk7dC5maWxlVmVyc2lvbj11LGUrPTQsdT49MyYmKHQuY2hlY2tzdW09aS5nZXRVaW50MzIoNCwhMCksZSs9NCksaT1uZXcgRGF0YVZpZXcoYSxlLDEyKSx0LmhlaWdodD1pLmdldFVpbnQzMigwLCEwKSx0LndpZHRoPWkuZ2V0VWludDMyKDQsITApLGUrPTgsdT49ND8odC5udW1EaW1zPWkuZ2V0VWludDMyKDgsITApLGUrPTQpOnQubnVtRGltcz0xLGk9bmV3IERhdGFWaWV3KGEsZSw0MCksdC5udW1WYWxpZFBpeGVsPWkuZ2V0VWludDMyKDAsITApLHQubWljcm9CbG9ja1NpemU9aS5nZXRJbnQzMig0LCEwKSx0LmJsb2JTaXplPWkuZ2V0SW50MzIoOCwhMCksdC5pbWFnZVR5cGU9aS5nZXRJbnQzMigxMiwhMCksdC5tYXhaRXJyb3I9aS5nZXRGbG9hdDY0KDE2LCEwKSx0LnpNaW49aS5nZXRGbG9hdDY0KDI0LCEwKSx0LnpNYXg9aS5nZXRGbG9hdDY0KDMyLCEwKSxlKz00MCxyLmhlYWRlckluZm89dCxyLnB0cj1lO3ZhciBuLGY7aWYodT49MyYmKGY9dT49ND81Mjo0OCxuPXRoaXMuY29tcHV0ZUNoZWNrc3VtRmxldGNoZXIzMihuZXcgVWludDhBcnJheShhLGUtZix0LmJsb2JTaXplLTE0KSksbiE9PXQuY2hlY2tzdW0pKXRocm93IkNoZWNrc3VtIGZhaWxlZC4iO3JldHVybiEwfSxjaGVja01pbk1heFJhbmdlczpmdW5jdGlvbihhLHIpe3ZhciBlPXIuaGVhZGVySW5mbyxzPXRoaXMuZ2V0RGF0YVR5cGVBcnJheShlLmltYWdlVHlwZSksdD1lLm51bURpbXMqdGhpcy5nZXREYXRhVHlwZVNpemUoZS5pbWFnZVR5cGUpLGk9dGhpcy5yZWFkU3ViQXJyYXkoYSxyLnB0cixzLHQpLHU9dGhpcy5yZWFkU3ViQXJyYXkoYSxyLnB0cit0LHMsdCk7ci5wdHIrPTIqdDt2YXIgbixmPSEwO2ZvcihuPTA7bjxlLm51bURpbXM7bisrKWlmKGlbbl0hPT11W25dKXtmPSExO2JyZWFrfXJldHVybiBlLm1pblZhbHVlcz1pLGUubWF4VmFsdWVzPXUsZn0scmVhZFN1YkFycmF5OmZ1bmN0aW9uKGEscixlLHMpe3ZhciB0O2lmKGU9PT1VaW50OEFycmF5KXQ9bmV3IFVpbnQ4QXJyYXkoYSxyLHMpO2Vsc2V7dmFyIGk9bmV3IEFycmF5QnVmZmVyKHMpLHU9bmV3IFVpbnQ4QXJyYXkoaSk7dS5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLHMpKSx0PW5ldyBlKGkpfXJldHVybiB0fSxyZWFkTWFzazpmdW5jdGlvbihhLHIpe3ZhciBlPXIucHRyLHM9ci5oZWFkZXJJbmZvLHQ9cy53aWR0aCpzLmhlaWdodCxpPXMubnVtVmFsaWRQaXhlbCx1PW5ldyBEYXRhVmlldyhhLGUsNCksbj17fTtpZihuLm51bUJ5dGVzPXUuZ2V0VWludDMyKDAsITApLGUrPTQsKGk9PT0wfHx0PT09aSkmJm4ubnVtQnl0ZXMhPT0wKXRocm93ImludmFsaWQgbWFzayI7dmFyIGYsYztpZihpPT09MClmPW5ldyBVaW50OEFycmF5KE1hdGguY2VpbCh0LzgpKSxuLmJpdHNldD1mLGM9bmV3IFVpbnQ4QXJyYXkodCksci5waXhlbHMucmVzdWx0TWFzaz1jLGUrPW4ubnVtQnl0ZXM7ZWxzZSBpZihuLm51bUJ5dGVzPjApe2Y9bmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKHQvOCkpLHU9bmV3IERhdGFWaWV3KGEsZSxuLm51bUJ5dGVzKTt2YXIgbz11LmdldEludDE2KDAsITApLG09Mix3PTAsaD0wO2Rve2lmKG8+MClmb3IoO28tLTspZlt3KytdPXUuZ2V0VWludDgobSsrKTtlbHNlIGZvcihoPXUuZ2V0VWludDgobSsrKSxvPS1vO28tLTspZlt3KytdPWg7bz11LmdldEludDE2KG0sITApLG0rPTJ9d2hpbGUobTxuLm51bUJ5dGVzKTtpZihvIT09LTMyNzY4fHx3PGYubGVuZ3RoKXRocm93IlVuZXhwZWN0ZWQgZW5kIG9mIG1hc2sgUkxFIGVuY29kaW5nIjtjPW5ldyBVaW50OEFycmF5KHQpO3ZhciBsPTAsZz0wO2ZvcihnPTA7Zzx0O2crKylnJjc/KGw9ZltnPj4zXSxsPDw9ZyY3KTpsPWZbZz4+M10sbCYxMjgmJihjW2ddPTEpO3IucGl4ZWxzLnJlc3VsdE1hc2s9YyxuLmJpdHNldD1mLGUrPW4ubnVtQnl0ZXN9cmV0dXJuIHIucHRyPWUsci5tYXNrPW4sITB9LHJlYWREYXRhT25lU3dlZXA6ZnVuY3Rpb24oYSxyLGUscyl7dmFyIHQ9ci5wdHIsaT1yLmhlYWRlckluZm8sdT1pLm51bURpbXMsbj1pLndpZHRoKmkuaGVpZ2h0LGY9aS5pbWFnZVR5cGUsYz1pLm51bVZhbGlkUGl4ZWwqSS5nZXREYXRhVHlwZVNpemUoZikqdSxvLG09ci5waXhlbHMucmVzdWx0TWFzaztpZihlPT09VWludDhBcnJheSlvPW5ldyBVaW50OEFycmF5KGEsdCxjKTtlbHNle3ZhciB3PW5ldyBBcnJheUJ1ZmZlcihjKSxoPW5ldyBVaW50OEFycmF5KHcpO2guc2V0KG5ldyBVaW50OEFycmF5KGEsdCxjKSksbz1uZXcgZSh3KX1pZihvLmxlbmd0aD09PW4qdSlzP3IucGl4ZWxzLnJlc3VsdFBpeGVscz1JLnN3YXBEaW1lbnNpb25PcmRlcihvLG4sdSxlLCEwKTpyLnBpeGVscy5yZXN1bHRQaXhlbHM9bztlbHNle3IucGl4ZWxzLnJlc3VsdFBpeGVscz1uZXcgZShuKnUpO3ZhciBsPTAsZz0wLE09MCxVPTA7aWYodT4xKXtpZihzKXtmb3IoZz0wO2c8bjtnKyspaWYobVtnXSlmb3IoVT1nLE09MDtNPHU7TSsrLFUrPW4pci5waXhlbHMucmVzdWx0UGl4ZWxzW1VdPW9bbCsrXX1lbHNlIGZvcihnPTA7ZzxuO2crKylpZihtW2ddKWZvcihVPWcqdSxNPTA7TTx1O00rKylyLnBpeGVscy5yZXN1bHRQaXhlbHNbVStNXT1vW2wrK119ZWxzZSBmb3IoZz0wO2c8bjtnKyspbVtnXSYmKHIucGl4ZWxzLnJlc3VsdFBpeGVsc1tnXT1vW2wrK10pfXJldHVybiB0Kz1jLHIucHRyPXQsITB9LHJlYWRIdWZmbWFuVHJlZTpmdW5jdGlvbihhLHIpe3ZhciBlPXRoaXMuSFVGRk1BTl9MVVRfQklUU19NQVgscz1uZXcgRGF0YVZpZXcoYSxyLnB0ciwxNik7ci5wdHIrPTE2O3ZhciB0PXMuZ2V0SW50MzIoMCwhMCk7aWYodDwyKXRocm93InVuc3VwcG9ydGVkIEh1ZmZtYW4gdmVyc2lvbiI7dmFyIGk9cy5nZXRJbnQzMig0LCEwKSx1PXMuZ2V0SW50MzIoOCwhMCksbj1zLmdldEludDMyKDEyLCEwKTtpZih1Pj1uKXJldHVybiExO3ZhciBmPW5ldyBVaW50MzJBcnJheShuLXUpO0kuZGVjb2RlQml0cyhhLHIsZik7dmFyIGM9W10sbyxtLHcsaDtmb3Iobz11O288bjtvKyspbT1vLShvPGk/MDppKSxjW21dPXtmaXJzdDpmW28tdV0sc2Vjb25kOm51bGx9O3ZhciBsPWEuYnl0ZUxlbmd0aC1yLnB0cixnPU1hdGguY2VpbChsLzQpLE09bmV3IEFycmF5QnVmZmVyKGcqNCksVT1uZXcgVWludDhBcnJheShNKTtVLnNldChuZXcgVWludDhBcnJheShhLHIucHRyLGwpKTt2YXIgZD1uZXcgVWludDMyQXJyYXkoTSksaz0wLHgsej0wO2Zvcih4PWRbMF0sbz11O288bjtvKyspbT1vLShvPGk/MDppKSxoPWNbbV0uZmlyc3QsaD4wJiYoY1ttXS5zZWNvbmQ9eDw8az4+PjMyLWgsMzItaz49aD8oays9aCxrPT09MzImJihrPTAseisrLHg9ZFt6XSkpOihrKz1oLTMyLHorKyx4PWRbel0sY1ttXS5zZWNvbmR8PXg+Pj4zMi1rKSk7dmFyIHA9MCx2PTAsVj1uZXcgeTtmb3Iobz0wO288Yy5sZW5ndGg7bysrKWNbb10hPT12b2lkIDAmJihwPU1hdGgubWF4KHAsY1tvXS5maXJzdCkpO3A+PWU/dj1lOnY9cDt2YXIgVD1bXSxBLEIsTCxGLGIsQztmb3Iobz11O288bjtvKyspaWYobT1vLShvPGk/MDppKSxoPWNbbV0uZmlyc3QsaD4wKWlmKEE9W2gsbV0saDw9dilmb3IoQj1jW21dLnNlY29uZDw8di1oLEw9MTw8di1oLHc9MDt3PEw7dysrKVRbQnx3XT1BO2Vsc2UgZm9yKEI9Y1ttXS5zZWNvbmQsQz1WLEY9aC0xO0Y+PTA7Ri0tKWI9Qj4+PkYmMSxiPyhDLnJpZ2h0fHwoQy5yaWdodD1uZXcgeSksQz1DLnJpZ2h0KTooQy5sZWZ0fHwoQy5sZWZ0PW5ldyB5KSxDPUMubGVmdCksRj09PTAmJiFDLnZhbCYmKEMudmFsPUFbMV0pO3JldHVybntkZWNvZGVMdXQ6VCxudW1CaXRzTFVUUWljazp2LG51bUJpdHNMVVQ6cCx0cmVlOlYsc3R1ZmZlZERhdGE6ZCxzcmNQdHI6eixiaXRQb3M6a319LHJlYWRIdWZmbWFuOmZ1bmN0aW9uKGEscixlLHMpe3ZhciB0PXIuaGVhZGVySW5mbyxpPXQubnVtRGltcyx1PXIuaGVhZGVySW5mby5oZWlnaHQsbj1yLmhlYWRlckluZm8ud2lkdGgsZj1uKnUsYz10aGlzLnJlYWRIdWZmbWFuVHJlZShhLHIpLG89Yy5kZWNvZGVMdXQsbT1jLnRyZWUsdz1jLnN0dWZmZWREYXRhLGg9Yy5zcmNQdHIsbD1jLmJpdFBvcyxnPWMubnVtQml0c0xVVFFpY2ssTT1jLm51bUJpdHNMVVQsVT1yLmhlYWRlckluZm8uaW1hZ2VUeXBlPT09MD8xMjg6MCxkLGsseCx6PXIucGl4ZWxzLnJlc3VsdE1hc2sscCx2LFYsVCxBLEIsTCxGPTA7bD4wJiYoaCsrLGw9MCk7dmFyIGI9d1toXSxDPXIuZW5jb2RlTW9kZT09PTEsUj1uZXcgZShmKmkpLE89UixYO2lmKGk8Mnx8Qyl7Zm9yKFg9MDtYPGk7WCsrKWlmKGk+MSYmKE89bmV3IGUoUi5idWZmZXIsZipYLGYpLEY9MCksci5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWw9PT1uKnUpZm9yKEI9MCxUPTA7VDx1O1QrKylmb3IoQT0wO0E8bjtBKyssQisrKXtpZihrPTAscD1iPDxsPj4+MzItZyx2PXAsMzItbDxnJiYocHw9d1toKzFdPj4+NjQtbC1nLHY9cCksb1t2XSlrPW9bdl1bMV0sbCs9b1t2XVswXTtlbHNlIGZvcihwPWI8PGw+Pj4zMi1NLHY9cCwzMi1sPE0mJihwfD13W2grMV0+Pj42NC1sLU0sdj1wKSxkPW0sTD0wO0w8TTtMKyspaWYoVj1wPj4+TS1MLTEmMSxkPVY/ZC5yaWdodDpkLmxlZnQsIShkLmxlZnR8fGQucmlnaHQpKXtrPWQudmFsLGw9bCtMKzE7YnJlYWt9bD49MzImJihsLT0zMixoKyssYj13W2hdKSx4PWstVSxDPyhBPjA/eCs9RjpUPjA/eCs9T1tCLW5dOngrPUYseCY9MjU1LE9bQl09eCxGPXgpOk9bQl09eH1lbHNlIGZvcihCPTAsVD0wO1Q8dTtUKyspZm9yKEE9MDtBPG47QSsrLEIrKylpZih6W0JdKXtpZihrPTAscD1iPDxsPj4+MzItZyx2PXAsMzItbDxnJiYocHw9d1toKzFdPj4+NjQtbC1nLHY9cCksb1t2XSlrPW9bdl1bMV0sbCs9b1t2XVswXTtlbHNlIGZvcihwPWI8PGw+Pj4zMi1NLHY9cCwzMi1sPE0mJihwfD13W2grMV0+Pj42NC1sLU0sdj1wKSxkPW0sTD0wO0w8TTtMKyspaWYoVj1wPj4+TS1MLTEmMSxkPVY/ZC5yaWdodDpkLmxlZnQsIShkLmxlZnR8fGQucmlnaHQpKXtrPWQudmFsLGw9bCtMKzE7YnJlYWt9bD49MzImJihsLT0zMixoKyssYj13W2hdKSx4PWstVSxDPyhBPjAmJnpbQi0xXT94Kz1GOlQ+MCYmeltCLW5dP3grPU9bQi1uXTp4Kz1GLHgmPTI1NSxPW0JdPXgsRj14KTpPW0JdPXh9fWVsc2UgZm9yKEI9MCxUPTA7VDx1O1QrKylmb3IoQT0wO0E8bjtBKyspaWYoQj1UKm4rQSwhenx8eltCXSlmb3IoWD0wO1g8aTtYKyssQis9Zil7aWYoaz0wLHA9Yjw8bD4+PjMyLWcsdj1wLDMyLWw8ZyYmKHB8PXdbaCsxXT4+PjY0LWwtZyx2PXApLG9bdl0paz1vW3ZdWzFdLGwrPW9bdl1bMF07ZWxzZSBmb3IocD1iPDxsPj4+MzItTSx2PXAsMzItbDxNJiYocHw9d1toKzFdPj4+NjQtbC1NLHY9cCksZD1tLEw9MDtMPE07TCsrKWlmKFY9cD4+Pk0tTC0xJjEsZD1WP2QucmlnaHQ6ZC5sZWZ0LCEoZC5sZWZ0fHxkLnJpZ2h0KSl7az1kLnZhbCxsPWwrTCsxO2JyZWFrfWw+PTMyJiYobC09MzIsaCsrLGI9d1toXSkseD1rLVUsT1tCXT14fXIucHRyPXIucHRyKyhoKzEpKjQrKGw+MD80OjApLHIucGl4ZWxzLnJlc3VsdFBpeGVscz1SLGk+MSYmIXMmJihyLnBpeGVscy5yZXN1bHRQaXhlbHM9SS5zd2FwRGltZW5zaW9uT3JkZXIoUixmLGksZSkpfSxkZWNvZGVCaXRzOmZ1bmN0aW9uKGEscixlLHMsdCl7e3ZhciBpPXIuaGVhZGVySW5mbyx1PWkuZmlsZVZlcnNpb24sbj0wLGY9YS5ieXRlTGVuZ3RoLXIucHRyPj01PzU6YS5ieXRlTGVuZ3RoLXIucHRyLGM9bmV3IERhdGFWaWV3KGEsci5wdHIsZiksbz1jLmdldFVpbnQ4KDApO24rKzt2YXIgbT1vPj42LHc9bT09PTA/NDozLW0saD0obyYzMik+MCxsPW8mMzEsZz0wO2lmKHc9PT0xKWc9Yy5nZXRVaW50OChuKSxuKys7ZWxzZSBpZih3PT09MilnPWMuZ2V0VWludDE2KG4sITApLG4rPTI7ZWxzZSBpZih3PT09NClnPWMuZ2V0VWludDMyKG4sITApLG4rPTQ7ZWxzZSB0aHJvdyJJbnZhbGlkIHZhbGlkIHBpeGVsIGNvdW50IHR5cGUiO3ZhciBNPTIqaS5tYXhaRXJyb3IsVSxkLGsseCx6LHAsdixWLFQsQT1pLm51bURpbXM+MT9pLm1heFZhbHVlc1t0XTppLnpNYXg7aWYoaCl7Zm9yKHIuY291bnRlci5sdXQrKyxWPWMuZ2V0VWludDgobiksbisrLHg9TWF0aC5jZWlsKChWLTEpKmwvOCksej1NYXRoLmNlaWwoeC80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLGs9bmV3IFVpbnQ4QXJyYXkoZCksci5wdHIrPW4say5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLnB0cix4KSksdj1uZXcgVWludDMyQXJyYXkoZCksci5wdHIrPXgsVD0wO1YtMT4+PlQ7KVQrKzt4PU1hdGguY2VpbChnKlQvOCksej1NYXRoLmNlaWwoeC80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLGs9bmV3IFVpbnQ4QXJyYXkoZCksay5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLnB0cix4KSksVT1uZXcgVWludDMyQXJyYXkoZCksci5wdHIrPXgsdT49Mz9wPVMudW5zdHVmZkxVVDIodixsLFYtMSxzLE0sQSk6cD1TLnVuc3R1ZmZMVVQodixsLFYtMSxzLE0sQSksdT49Mz9TLnVuc3R1ZmYyKFUsZSxULGcscCk6Uy51bnN0dWZmKFUsZSxULGcscCl9ZWxzZSByLmNvdW50ZXIuYml0c3R1ZmZlcisrLFQ9bCxyLnB0cis9bixUPjAmJih4PU1hdGguY2VpbChnKlQvOCksej1NYXRoLmNlaWwoeC80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLGs9bmV3IFVpbnQ4QXJyYXkoZCksay5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLnB0cix4KSksVT1uZXcgVWludDMyQXJyYXkoZCksci5wdHIrPXgsdT49Mz9zPT1udWxsP1Mub3JpZ2luYWxVbnN0dWZmMihVLGUsVCxnKTpTLnVuc3R1ZmYyKFUsZSxULGcsITEscyxNLEEpOnM9PW51bGw/Uy5vcmlnaW5hbFVuc3R1ZmYoVSxlLFQsZyk6Uy51bnN0dWZmKFUsZSxULGcsITEscyxNLEEpKX19LHJlYWRUaWxlczpmdW5jdGlvbihhLHIsZSxzKXt2YXIgdD1yLmhlYWRlckluZm8saT10LndpZHRoLHU9dC5oZWlnaHQsbj1pKnUsZj10Lm1pY3JvQmxvY2tTaXplLGM9dC5pbWFnZVR5cGUsbz1JLmdldERhdGFUeXBlU2l6ZShjKSxtPU1hdGguY2VpbChpL2YpLHc9TWF0aC5jZWlsKHUvZik7ci5waXhlbHMubnVtQmxvY2tzWT13LHIucGl4ZWxzLm51bUJsb2Nrc1g9bSxyLnBpeGVscy5wdHI9MDt2YXIgaD0wLGw9MCxnPTAsTT0wLFU9MCxkPTAsaz0wLHg9MCx6PTAscD0wLHY9MCxWPTAsVD0wLEE9MCxCPTAsTD0wLEYsYixDLFIsTyxYLEc9bmV3IGUoZipmKSxsZT11JWZ8fGYsb2U9aSVmfHxmLEssUSxKPXQubnVtRGltcywkLEU9ci5waXhlbHMucmVzdWx0TWFzayxZPXIucGl4ZWxzLnJlc3VsdFBpeGVscyx1ZT10LmZpbGVWZXJzaW9uLFA9dWU+PTU/MTQ6MTUsXyxXPXQuek1heCxIO2ZvcihnPTA7Zzx3O2crKylmb3IoVT1nIT09dy0xP2Y6bGUsTT0wO008bTtNKyspZm9yKGQ9TSE9PW0tMT9mOm9lLHY9ZyppKmYrTSpmLFY9aS1kLCQ9MDskPEo7JCsrKXtpZihKPjE/KEg9WSx2PWcqaSpmK00qZixZPW5ldyBlKHIucGl4ZWxzLnJlc3VsdFBpeGVscy5idWZmZXIsbiokKm8sbiksVz10Lm1heFZhbHVlc1skXSk6SD1udWxsLGs9YS5ieXRlTGVuZ3RoLXIucHRyLEY9bmV3IERhdGFWaWV3KGEsci5wdHIsTWF0aC5taW4oMTAsaykpLGI9e30sTD0wLHg9Ri5nZXRVaW50OCgwKSxMKyssXz10LmZpbGVWZXJzaW9uPj01P3gmNDowLHo9eD4+NiYyNTUscD14Pj4yJlAscCE9PShNKmY+PjMmUCl8fF8mJiQ9PT0wKXRocm93ImludGVncml0eSBpc3N1ZSI7aWYoWD14JjMsWD4zKXRocm93IHIucHRyKz1MLCJJbnZhbGlkIGJsb2NrIGVuY29kaW5nICgiK1grIikiO2lmKFg9PT0yKXtpZihfKWlmKEUpZm9yKGg9MDtoPFU7aCsrKWZvcihsPTA7bDxkO2wrKylFW3ZdJiYoWVt2XT1IW3ZdKSx2Kys7ZWxzZSBmb3IoaD0wO2g8VTtoKyspZm9yKGw9MDtsPGQ7bCsrKVlbdl09SFt2XSx2Kys7ci5jb3VudGVyLmNvbnN0YW50Kyssci5wdHIrPUw7Y29udGludWV9ZWxzZSBpZihYPT09MCl7aWYoXyl0aHJvdyJpbnRlZ3JpdHkgaXNzdWUiO2lmKHIuY291bnRlci51bmNvbXByZXNzZWQrKyxyLnB0cis9TCxUPVUqZCpvLEE9YS5ieXRlTGVuZ3RoLXIucHRyLFQ9VDxBP1Q6QSxDPW5ldyBBcnJheUJ1ZmZlcihUJW89PT0wP1Q6VCtvLVQlbyksUj1uZXcgVWludDhBcnJheShDKSxSLnNldChuZXcgVWludDhBcnJheShhLHIucHRyLFQpKSxPPW5ldyBlKEMpLEI9MCxFKWZvcihoPTA7aDxVO2grKyl7Zm9yKGw9MDtsPGQ7bCsrKUVbdl0mJihZW3ZdPU9bQisrXSksdisrO3YrPVZ9ZWxzZSBmb3IoaD0wO2g8VTtoKyspe2ZvcihsPTA7bDxkO2wrKylZW3YrK109T1tCKytdO3YrPVZ9ci5wdHIrPUIqb31lbHNlIGlmKEs9SS5nZXREYXRhVHlwZVVzZWQoXyYmYzw2PzQ6Yyx6KSxRPUkuZ2V0T25lUGl4ZWwoYixMLEssRiksTCs9SS5nZXREYXRhVHlwZVNpemUoSyksWD09PTMpaWYoci5wdHIrPUwsci5jb3VudGVyLmNvbnN0YW50b2Zmc2V0KyssRSlmb3IoaD0wO2g8VTtoKyspe2ZvcihsPTA7bDxkO2wrKylFW3ZdJiYoWVt2XT1fP01hdGgubWluKFcsSFt2XStRKTpRKSx2Kys7dis9Vn1lbHNlIGZvcihoPTA7aDxVO2grKyl7Zm9yKGw9MDtsPGQ7bCsrKVlbdl09Xz9NYXRoLm1pbihXLEhbdl0rUSk6USx2Kys7dis9Vn1lbHNlIGlmKHIucHRyKz1MLEkuZGVjb2RlQml0cyhhLHIsRyxRLCQpLEw9MCxfKWlmKEUpZm9yKGg9MDtoPFU7aCsrKXtmb3IobD0wO2w8ZDtsKyspRVt2XSYmKFlbdl09R1tMKytdK0hbdl0pLHYrKzt2Kz1WfWVsc2UgZm9yKGg9MDtoPFU7aCsrKXtmb3IobD0wO2w8ZDtsKyspWVt2XT1HW0wrK10rSFt2XSx2Kys7dis9Vn1lbHNlIGlmKEUpZm9yKGg9MDtoPFU7aCsrKXtmb3IobD0wO2w8ZDtsKyspRVt2XSYmKFlbdl09R1tMKytdKSx2Kys7dis9Vn1lbHNlIGZvcihoPTA7aDxVO2grKyl7Zm9yKGw9MDtsPGQ7bCsrKVlbdisrXT1HW0wrK107dis9Vn19Sj4xJiYhcyYmKHIucGl4ZWxzLnJlc3VsdFBpeGVscz1JLnN3YXBEaW1lbnNpb25PcmRlcihyLnBpeGVscy5yZXN1bHRQaXhlbHMsbixKLGUpKX0sZm9ybWF0RmlsZUluZm86ZnVuY3Rpb24oYSl7cmV0dXJue2ZpbGVJZGVudGlmaWVyU3RyaW5nOmEuaGVhZGVySW5mby5maWxlSWRlbnRpZmllclN0cmluZyxmaWxlVmVyc2lvbjphLmhlYWRlckluZm8uZmlsZVZlcnNpb24saW1hZ2VUeXBlOmEuaGVhZGVySW5mby5pbWFnZVR5cGUsaGVpZ2h0OmEuaGVhZGVySW5mby5oZWlnaHQsd2lkdGg6YS5oZWFkZXJJbmZvLndpZHRoLG51bVZhbGlkUGl4ZWw6YS5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWwsbWljcm9CbG9ja1NpemU6YS5oZWFkZXJJbmZvLm1pY3JvQmxvY2tTaXplLGJsb2JTaXplOmEuaGVhZGVySW5mby5ibG9iU2l6ZSxtYXhaRXJyb3I6YS5oZWFkZXJJbmZvLm1heFpFcnJvcixwaXhlbFR5cGU6SS5nZXRQaXhlbFR5cGUoYS5oZWFkZXJJbmZvLmltYWdlVHlwZSksZW9mT2Zmc2V0OmEuZW9mT2Zmc2V0LG1hc2s6YS5tYXNrP3tudW1CeXRlczphLm1hc2subnVtQnl0ZXN9Om51bGwscGl4ZWxzOntudW1CbG9ja3NYOmEucGl4ZWxzLm51bUJsb2Nrc1gsbnVtQmxvY2tzWTphLnBpeGVscy5udW1CbG9ja3NZLG1heFZhbHVlOmEuaGVhZGVySW5mby56TWF4LG1pblZhbHVlOmEuaGVhZGVySW5mby56TWluLG5vRGF0YVZhbHVlOmEubm9EYXRhVmFsdWV9fX0sY29uc3RydWN0Q29uc3RhbnRTdXJmYWNlOmZ1bmN0aW9uKGEscil7dmFyIGU9YS5oZWFkZXJJbmZvLnpNYXgscz1hLmhlYWRlckluZm8uek1pbix0PWEuaGVhZGVySW5mby5tYXhWYWx1ZXMsaT1hLmhlYWRlckluZm8ubnVtRGltcyx1PWEuaGVhZGVySW5mby5oZWlnaHQqYS5oZWFkZXJJbmZvLndpZHRoLG49MCxmPTAsYz0wLG89YS5waXhlbHMucmVzdWx0TWFzayxtPWEucGl4ZWxzLnJlc3VsdFBpeGVscztpZihvKWlmKGk+MSl7aWYocilmb3Iobj0wO248aTtuKyspZm9yKGM9bip1LGU9dFtuXSxmPTA7Zjx1O2YrKylvW2ZdJiYobVtjK2ZdPWUpO2Vsc2UgZm9yKGY9MDtmPHU7ZisrKWlmKG9bZl0pZm9yKGM9ZippLG49MDtuPGk7bisrKW1bYytpXT10W25dfWVsc2UgZm9yKGY9MDtmPHU7ZisrKW9bZl0mJihtW2ZdPWUpO2Vsc2UgaWYoaT4xJiZzIT09ZSlpZihyKWZvcihuPTA7bjxpO24rKylmb3IoYz1uKnUsZT10W25dLGY9MDtmPHU7ZisrKW1bYytmXT1lO2Vsc2UgZm9yKGY9MDtmPHU7ZisrKWZvcihjPWYqaSxuPTA7bjxpO24rKyltW2Mrbl09dFtuXTtlbHNlIGZvcihmPTA7Zjx1Kmk7ZisrKW1bZl09ZX0sZ2V0RGF0YVR5cGVBcnJheTpmdW5jdGlvbihhKXt2YXIgcjtzd2l0Y2goYSl7Y2FzZSAwOnI9SW50OEFycmF5O2JyZWFrO2Nhc2UgMTpyPVVpbnQ4QXJyYXk7YnJlYWs7Y2FzZSAyOnI9SW50MTZBcnJheTticmVhaztjYXNlIDM6cj1VaW50MTZBcnJheTticmVhaztjYXNlIDQ6cj1JbnQzMkFycmF5O2JyZWFrO2Nhc2UgNTpyPVVpbnQzMkFycmF5O2JyZWFrO2Nhc2UgNjpyPUZsb2F0MzJBcnJheTticmVhaztjYXNlIDc6cj1GbG9hdDY0QXJyYXk7YnJlYWs7ZGVmYXVsdDpyPUZsb2F0MzJBcnJheX1yZXR1cm4gcn0sZ2V0UGl4ZWxUeXBlOmZ1bmN0aW9uKGEpe3ZhciByO3N3aXRjaChhKXtjYXNlIDA6cj0iUzgiO2JyZWFrO2Nhc2UgMTpyPSJVOCI7YnJlYWs7Y2FzZSAyOnI9IlMxNiI7YnJlYWs7Y2FzZSAzOnI9IlUxNiI7YnJlYWs7Y2FzZSA0OnI9IlMzMiI7YnJlYWs7Y2FzZSA1OnI9IlUzMiI7YnJlYWs7Y2FzZSA2OnI9IkYzMiI7YnJlYWs7Y2FzZSA3OnI9IkY2NCI7YnJlYWs7ZGVmYXVsdDpyPSJGMzIifXJldHVybiByfSxpc1ZhbGlkUGl4ZWxWYWx1ZTpmdW5jdGlvbihhLHIpe2lmKHI9PW51bGwpcmV0dXJuITE7dmFyIGU7c3dpdGNoKGEpe2Nhc2UgMDplPXI+PS0xMjgmJnI8PTEyNzticmVhaztjYXNlIDE6ZT1yPj0wJiZyPD0yNTU7YnJlYWs7Y2FzZSAyOmU9cj49LTMyNzY4JiZyPD0zMjc2NzticmVhaztjYXNlIDM6ZT1yPj0wJiZyPD02NTUzNjticmVhaztjYXNlIDQ6ZT1yPj0tMjE0NzQ4MzY0OCYmcjw9MjE0NzQ4MzY0NzticmVhaztjYXNlIDU6ZT1yPj0wJiZyPD00Mjk0OTY3Mjk2O2JyZWFrO2Nhc2UgNjplPXI+PS0zNDAyNzk5OTM4NzkwMTQ4NGUyMiYmcjw9MzQwMjc5OTkzODc5MDE0ODRlMjI7YnJlYWs7Y2FzZSA3OmU9cj49LTE3OTc2OTMxMzQ4NjIzMTU3ZTI5MiYmcjw9MTc5NzY5MzEzNDg2MjMxNTdlMjkyO2JyZWFrO2RlZmF1bHQ6ZT0hMX1yZXR1cm4gZX0sZ2V0RGF0YVR5cGVTaXplOmZ1bmN0aW9uKGEpe3ZhciByPTA7c3dpdGNoKGEpe2Nhc2UgMDpjYXNlIDE6cj0xO2JyZWFrO2Nhc2UgMjpjYXNlIDM6cj0yO2JyZWFrO2Nhc2UgNDpjYXNlIDU6Y2FzZSA2OnI9NDticmVhaztjYXNlIDc6cj04O2JyZWFrO2RlZmF1bHQ6cj1hfXJldHVybiByfSxnZXREYXRhVHlwZVVzZWQ6ZnVuY3Rpb24oYSxyKXt2YXIgZT1hO3N3aXRjaChhKXtjYXNlIDI6Y2FzZSA0OmU9YS1yO2JyZWFrO2Nhc2UgMzpjYXNlIDU6ZT1hLTIqcjticmVhaztjYXNlIDY6cj09PTA/ZT1hOnI9PT0xP2U9MjplPTE7YnJlYWs7Y2FzZSA3OnI9PT0wP2U9YTplPWEtMipyKzE7YnJlYWs7ZGVmYXVsdDplPWE7YnJlYWt9cmV0dXJuIGV9LGdldE9uZVBpeGVsOmZ1bmN0aW9uKGEscixlLHMpe3ZhciB0PTA7c3dpdGNoKGUpe2Nhc2UgMDp0PXMuZ2V0SW50OChyKTticmVhaztjYXNlIDE6dD1zLmdldFVpbnQ4KHIpO2JyZWFrO2Nhc2UgMjp0PXMuZ2V0SW50MTYociwhMCk7YnJlYWs7Y2FzZSAzOnQ9cy5nZXRVaW50MTYociwhMCk7YnJlYWs7Y2FzZSA0OnQ9cy5nZXRJbnQzMihyLCEwKTticmVhaztjYXNlIDU6dD1zLmdldFVJbnQzMihyLCEwKTticmVhaztjYXNlIDY6dD1zLmdldEZsb2F0MzIociwhMCk7YnJlYWs7Y2FzZSA3OnQ9cy5nZXRGbG9hdDY0KHIsITApO2JyZWFrO2RlZmF1bHQ6dGhyb3cidGhlIGRlY29kZXIgZG9lcyBub3QgdW5kZXJzdGFuZCB0aGlzIHBpeGVsIHR5cGUifXJldHVybiB0fSxzd2FwRGltZW5zaW9uT3JkZXI6ZnVuY3Rpb24oYSxyLGUscyx0KXt2YXIgaT0wLHU9MCxuPTAsZj0wLGM9YTtpZihlPjEpaWYoYz1uZXcgcyhyKmUpLHQpZm9yKGk9MDtpPHI7aSsrKWZvcihmPWksbj0wO248ZTtuKyssZis9ciljW2ZdPWFbdSsrXTtlbHNlIGZvcihpPTA7aTxyO2krKylmb3IoZj1pLG49MDtuPGU7bisrLGYrPXIpY1t1KytdPWFbZl07cmV0dXJuIGN9fSx5PWZ1bmN0aW9uKGEscixlKXt0aGlzLnZhbD1hLHRoaXMubGVmdD1yLHRoaXMucmlnaHQ9ZX0sRD17ZGVjb2RlOmZ1bmN0aW9uKGEscil7cj1yfHx7fTt2YXIgZT1yLm5vRGF0YVZhbHVlLHM9MCx0PXt9O2lmKHQucHRyPXIuaW5wdXRPZmZzZXR8fDAsdC5waXhlbHM9e30sISFJLnJlYWRIZWFkZXJJbmZvKGEsdCkpe3ZhciBpPXQuaGVhZGVySW5mbyx1PWkuZmlsZVZlcnNpb24sbj1JLmdldERhdGFUeXBlQXJyYXkoaS5pbWFnZVR5cGUpO2lmKHU+NSl0aHJvdyJ1bnN1cHBvcnRlZCBsZXJjIHZlcnNpb24gMi4iK3U7SS5yZWFkTWFzayhhLHQpLGkubnVtVmFsaWRQaXhlbCE9PWkud2lkdGgqaS5oZWlnaHQmJiF0LnBpeGVscy5yZXN1bHRNYXNrJiYodC5waXhlbHMucmVzdWx0TWFzaz1yLm1hc2tEYXRhKTt2YXIgZj1pLndpZHRoKmkuaGVpZ2h0O3QucGl4ZWxzLnJlc3VsdFBpeGVscz1uZXcgbihmKmkubnVtRGltcyksdC5jb3VudGVyPXtvbmVzd2VlcDowLHVuY29tcHJlc3NlZDowLGx1dDowLGJpdHN0dWZmZXI6MCxjb25zdGFudDowLGNvbnN0YW50b2Zmc2V0OjB9O3ZhciBjPSFyLnJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zO2lmKGkubnVtVmFsaWRQaXhlbCE9PTApaWYoaS56TWF4PT09aS56TWluKUkuY29uc3RydWN0Q29uc3RhbnRTdXJmYWNlKHQsYyk7ZWxzZSBpZih1Pj00JiZJLmNoZWNrTWluTWF4UmFuZ2VzKGEsdCkpSS5jb25zdHJ1Y3RDb25zdGFudFN1cmZhY2UodCxjKTtlbHNle3ZhciBvPW5ldyBEYXRhVmlldyhhLHQucHRyLDIpLG09by5nZXRVaW50OCgwKTtpZih0LnB0cisrLG0pSS5yZWFkRGF0YU9uZVN3ZWVwKGEsdCxuLGMpO2Vsc2UgaWYodT4xJiZpLmltYWdlVHlwZTw9MSYmTWF0aC5hYnMoaS5tYXhaRXJyb3ItLjUpPDFlLTUpe3ZhciB3PW8uZ2V0VWludDgoMSk7aWYodC5wdHIrKyx0LmVuY29kZU1vZGU9dyx3PjJ8fHU8NCYmdz4xKXRocm93IkludmFsaWQgSHVmZm1hbiBmbGFnICIrdzt3P0kucmVhZEh1ZmZtYW4oYSx0LG4sYyk6SS5yZWFkVGlsZXMoYSx0LG4sYyl9ZWxzZSBJLnJlYWRUaWxlcyhhLHQsbixjKX10LmVvZk9mZnNldD10LnB0cjt2YXIgaDtyLmlucHV0T2Zmc2V0PyhoPXQuaGVhZGVySW5mby5ibG9iU2l6ZStyLmlucHV0T2Zmc2V0LXQucHRyLE1hdGguYWJzKGgpPj0xJiYodC5lb2ZPZmZzZXQ9ci5pbnB1dE9mZnNldCt0LmhlYWRlckluZm8uYmxvYlNpemUpKTooaD10LmhlYWRlckluZm8uYmxvYlNpemUtdC5wdHIsTWF0aC5hYnMoaCk+PTEmJih0LmVvZk9mZnNldD10LmhlYWRlckluZm8uYmxvYlNpemUpKTt2YXIgbD17d2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHQscGl4ZWxEYXRhOnQucGl4ZWxzLnJlc3VsdFBpeGVscyxtaW5WYWx1ZTppLnpNaW4sbWF4VmFsdWU6aS56TWF4LHZhbGlkUGl4ZWxDb3VudDppLm51bVZhbGlkUGl4ZWwsZGltQ291bnQ6aS5udW1EaW1zLGRpbVN0YXRzOnttaW5WYWx1ZXM6aS5taW5WYWx1ZXMsbWF4VmFsdWVzOmkubWF4VmFsdWVzfSxtYXNrRGF0YTp0LnBpeGVscy5yZXN1bHRNYXNrfTtpZih0LnBpeGVscy5yZXN1bHRNYXNrJiZJLmlzVmFsaWRQaXhlbFZhbHVlKGkuaW1hZ2VUeXBlLGUpKXt2YXIgZz10LnBpeGVscy5yZXN1bHRNYXNrO2ZvcihzPTA7czxmO3MrKylnW3NdfHwobC5waXhlbERhdGFbc109ZSk7bC5ub0RhdGFWYWx1ZT1lfXJldHVybiB0Lm5vRGF0YVZhbHVlPWUsci5yZXR1cm5GaWxlSW5mbyYmKGwuZmlsZUluZm89SS5mb3JtYXRGaWxlSW5mbyh0KSksbH19LGdldEJhbmRDb3VudDpmdW5jdGlvbihhKXt2YXIgcj0wLGU9MCxzPXt9O2ZvcihzLnB0cj0wLHMucGl4ZWxzPXt9O2U8YS5ieXRlTGVuZ3RoLTU4OylJLnJlYWRIZWFkZXJJbmZvKGEscyksZSs9cy5oZWFkZXJJbmZvLmJsb2JTaXplLHIrKyxzLnB0cj1lO3JldHVybiByfX07cmV0dXJuIER9KCk7dmFyIGllPWZ1bmN0aW9uKCl7dmFyIFM9bmV3IEFycmF5QnVmZmVyKDQpLEk9bmV3IFVpbnQ4QXJyYXkoUykseT1uZXcgVWludDMyQXJyYXkoUyk7cmV0dXJuIHlbMF09MSxJWzBdPT09MX0oKSxuZT17ZGVjb2RlOmZ1bmN0aW9uKFMsSSl7aWYoIWllKXRocm93IkJpZyBlbmRpYW4gc3lzdGVtIGlzIG5vdCBzdXBwb3J0ZWQuIjtJPUl8fHt9O3ZhciB5PUkuaW5wdXRPZmZzZXR8fDAsRD1uZXcgVWludDhBcnJheShTLHksMTApLGE9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLEQpLHIsZTtpZihhLnRyaW0oKT09PSJDbnRaSW1hZ2UiKXI9ZWUsZT0xO2Vsc2UgaWYoYS5zdWJzdHJpbmcoMCw1KT09PSJMZXJjMiIpcj1yZSxlPTI7ZWxzZSB0aHJvdyJVbmV4cGVjdGVkIGZpbGUgaWRlbnRpZmllciBzdHJpbmc6ICIrYTtmb3IodmFyIHM9MCx0PVMuYnl0ZUxlbmd0aC0xMCxpLHU9W10sbixmLGM9e3dpZHRoOjAsaGVpZ2h0OjAscGl4ZWxzOltdLHBpeGVsVHlwZTpJLnBpeGVsVHlwZSxtYXNrOm51bGwsc3RhdGlzdGljczpbXX0sbz0wO3k8dDspe3ZhciBtPXIuZGVjb2RlKFMse2lucHV0T2Zmc2V0OnksZW5jb2RlZE1hc2tEYXRhOmksbWFza0RhdGE6ZixyZXR1cm5NYXNrOnM9PT0wLHJldHVybkVuY29kZWRNYXNrOnM9PT0wLHJldHVybkZpbGVJbmZvOiEwLHJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zOkkucmV0dXJuUGl4ZWxJbnRlcmxlYXZlZERpbXMscGl4ZWxUeXBlOkkucGl4ZWxUeXBlfHxudWxsLG5vRGF0YVZhbHVlOkkubm9EYXRhVmFsdWV8fG51bGx9KTt5PW0uZmlsZUluZm8uZW9mT2Zmc2V0LGY9bS5tYXNrRGF0YSxzPT09MCYmKGk9bS5lbmNvZGVkTWFza0RhdGEsYy53aWR0aD1tLndpZHRoLGMuaGVpZ2h0PW0uaGVpZ2h0LGMuZGltQ291bnQ9bS5kaW1Db3VudHx8MSxjLnBpeGVsVHlwZT1tLnBpeGVsVHlwZXx8bS5maWxlSW5mby5waXhlbFR5cGUsYy5tYXNrPWYpLGU+MSYmKGYmJnUucHVzaChmKSxtLmZpbGVJbmZvLm1hc2smJm0uZmlsZUluZm8ubWFzay5udW1CeXRlcz4wJiZvKyspLHMrKyxjLnBpeGVscy5wdXNoKG0ucGl4ZWxEYXRhKSxjLnN0YXRpc3RpY3MucHVzaCh7bWluVmFsdWU6bS5taW5WYWx1ZSxtYXhWYWx1ZTptLm1heFZhbHVlLG5vRGF0YVZhbHVlOm0ubm9EYXRhVmFsdWUsZGltU3RhdHM6bS5kaW1TdGF0c30pfXZhciB3LGgsbDtpZihlPjEmJm8+MSl7Zm9yKGw9Yy53aWR0aCpjLmhlaWdodCxjLmJhbmRNYXNrcz11LGY9bmV3IFVpbnQ4QXJyYXkobCksZi5zZXQodVswXSksdz0xO3c8dS5sZW5ndGg7dysrKWZvcihuPXVbd10saD0wO2g8bDtoKyspZltoXT1mW2hdJm5baF07Yy5tYXNrRGF0YT1mfXJldHVybiBjfX07Y29uc3QgdGU9ezA6N2UzLDE6NmUzLDI6NWUzLDM6NGUzLDQ6M2UzLDU6MjUwMCw2OjJlMyw3OjE1MDAsODo4MDAsOTo1MDAsMTA6MjAwLDExOjEwMCwxMjo0MCwxMzoxMiwxNDo1LDE1OjIsMTY6MSwxNzowLDE4OjAsMTk6MCwyMDowfTtmdW5jdGlvbiBhZShTKXtjb25zdCBJPW5lLmRlY29kZShTKTtyZXR1cm57ZGVtOkkucGl4ZWxzWzBdLHdpZHRoOkkud2lkdGgsaGVpZ2h0OkkuaGVpZ2h0fX1mdW5jdGlvbiBzZShTLEkseSl7bGV0IEQ9YWUoUyk7cmV0dXJuIHlbMl0teVswXTwxJiYoRD1mZShELHkpKSxuZXcgWihELndpZHRoKS5jcmVhdGVUaWxlKEQuZGVtKS5nZXRHZW9tZXRyeURhdGEodGVbSV18fDApfWZ1bmN0aW9uIGZlKFMsSSl7Y29uc3QgeT0oZSxzLHQpPT57Y29uc3QgaT1NYXRoLmZsb29yKGVbMF0qcyksdT1NYXRoLmZsb29yKGVbMV0qdCksbj1NYXRoLmZsb29yKChlWzJdLWVbMF0pKnMpKzEsZj1NYXRoLmZsb29yKChlWzNdLWVbMV0pKnQpKzE7cmV0dXJue3g6aSx5OnUsdzpuLGg6Zn19LEQ9KGUscyx0LGksdSxuKT0+e2NvbnN0IGY9bmV3IEZsb2F0MzJBcnJheSh1Km4pO2ZvcihsZXQgYz0wO2M8bjtjKyspZm9yKGxldCBvPTA7bzx1O28rKyl7Y29uc3QgbT0oYytpKSpzKyhvK3QpLHc9Yyp1K287Zlt3XT1lW21dfXJldHVybiBmfSxhPXkoSSxTLndpZHRoLFMuaGVpZ2h0KTtyZXR1cm57ZGVtOkQoUy5kZW0sUy53aWR0aCxhLngsYS55LGEudyxhLmgpLHdpZHRoOmEudyxoZWlnaHQ6YS5ofX1zZWxmLm9ubWVzc2FnZT1TPT57Y29uc3QgST1TLmRhdGEseT1zZShJLmRlbURhdGEsSS56LEkuY2xpcEJvdW5kcyk7c2VsZi5wb3N0TWVzc2FnZSh5KX19KSgpOwo=",$1=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Sc=typeof self<"u"&&self.Blob&&new Blob([$1(Rh)],{type:"text/javascript;charset=utf-8"});function t_(i){let t;try{if(t=Sc&&(self.URL||self.webkitURL).createObjectURL(Sc),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Rh,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const e_=5;class n_ extends Vo{constructor(){super(),Et(this,"info",{version:Hi,description:"Tile LERC terrain loader. It can load ArcGis-lerc format terrain data."}),Et(this,"dataType","lerc"),Et(this,"fileLoader",new Tf(Ae.manager)),Et(this,"_workerPool",new Oo(0)),this.fileLoader.setResponseType("arraybuffer"),this._workerPool.setWorkerCreator(()=>new t_)}async doLoad(t,e){this._workerPool.pool===0&&this._workerPool.setWorkerLimit(e_);const{z:n,clipBounds:s}=e,r={demData:await this.fileLoader.loadAsync(t),z:n,clipBounds:s},a=(await this._workerPool.postMessage(r)).data;return new Wi().setAttribes(a,n)}}const Lh="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGModCl7cmV0dXJuIGEodC5kYXRhKX1mdW5jdGlvbiBhKHQpe2Z1bmN0aW9uIG4oZSx1KXtjb25zdCByPXUqNCxbaSxmLGcsbF09ZS5zbGljZShyLHIrNCk7cmV0dXJuIGw9PT0wPzA6LTFlNCsoaTw8MTZ8Zjw8OHxnKSouMX1jb25zdCBvPXQubGVuZ3RoPj4+MixzPW5ldyBGbG9hdDMyQXJyYXkobyk7Zm9yKGxldCBlPTA7ZTxvO2UrKylzW2VdPW4odCxlKTtyZXR1cm4gc31zZWxmLm9ubWVzc2FnZT10PT57Y29uc3Qgbj1jKHQuZGF0YS5pbWdEYXRhKTtzZWxmLnBvc3RNZXNzYWdlKG4pfX0pKCk7Cg==",i_=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Tc=typeof self<"u"&&self.Blob&&new Blob([i_(Lh)],{type:"text/javascript;charset=utf-8"});function s_(i){let t;try{if(t=Tc&&(self.URL||self.webkitURL).createObjectURL(Tc),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Lh,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const r_=10;class a_ extends Vo{constructor(){super(),Et(this,"info",{version:Hi,description:"Mapbox-RGB terrain loader, It can load Mapbox-RGB terrain data."}),Et(this,"dataType","terrain-rgb"),Et(this,"imageLoader",new vs(Ae.manager)),Et(this,"_workerPool",new Oo(0)),this._workerPool.setWorkerCreator(()=>new s_)}async doLoad(t,e){const n=await this.imageLoader.loadAsync(t),{clipBounds:s,z:r}=e,a=ti.clamp((r+2)*3,2,64),o=o_(n,s,a);let l;this._workerPool.pool===0&&this._workerPool.setWorkerLimit(r_),l=(await this._workerPool.postMessage({imgData:o},[o.data.buffer])).data;const c=new Wi;return c.setData(l,r),c}}function o_(i,t,e){const n=Th(t,i.width);e=Math.min(e,n.sw);const s=new OffscreenCanvas(e,e).getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(i,n.sx,n.sy,n.sw,n.sh,0,0,e,e),s.getImageData(0,0,e,e)}const Ph="dmFyIHE9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBHPShiLEUsVSk9PkUgaW4gYj9xKGIsRSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6VX0pOmJbRV09VTt2YXIgQz0oYixFLFUpPT5HKGIsdHlwZW9mIEUhPSJzeW1ib2wiP0UrIiI6RSxVKTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7ZnVuY3Rpb24gYihsLGkpe2NvbnN0IG49bmV3IEZsb2F0MzJBcnJheShsLmxlbmd0aCk7Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kz0zKXtjb25zdCBvPWlbdF0qMyxjPWlbdCsxXSozLHM9aVt0KzJdKjMsZT1sW29dLGE9bFtvKzFdLGQ9bFtvKzJdLHI9bFtjXSxoPWxbYysxXSxtPWxbYysyXSxmPWxbc10sdT1sW3MrMV0seT1sW3MrMl0scD1yLWUsRj1oLWEsZz1tLWQsdz1mLWUsVD11LWEsQT15LWQsej1GKkEtZypULHg9Zyp3LXAqQSxJPXAqVC1GKncsUz1NYXRoLnNxcnQoeip6K3gqeCtJKkkpLCQ9WzAsMCwxXTtpZihTPjApe2NvbnN0IE09MS9TOyRbMF09eipNLCRbMV09eCpNLCRbMl09SSpNfWZvcihsZXQgTT0wO008MztNKyspbltvK01dPW5bYytNXT1uW3MrTV09JFtNXX1yZXR1cm4gbn1jbGFzcyBFe2NvbnN0cnVjdG9yKGk9MjU3KXtDKHRoaXMsImdyaWRTaXplIik7Qyh0aGlzLCJudW1UcmlhbmdsZXMiKTtDKHRoaXMsIm51bVBhcmVudFRyaWFuZ2xlcyIpO0ModGhpcywiaW5kaWNlcyIpO0ModGhpcywiY29vcmRzIik7dGhpcy5ncmlkU2l6ZT1pO2NvbnN0IG49aS0xO2lmKG4mbi0xKXRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgZ3JpZCBzaXplIHRvIGJlIDJebisxLCBnb3QgJHtpfS5gKTt0aGlzLm51bVRyaWFuZ2xlcz1uKm4qMi0yLHRoaXMubnVtUGFyZW50VHJpYW5nbGVzPXRoaXMubnVtVHJpYW5nbGVzLW4qbix0aGlzLmluZGljZXM9bmV3IFVpbnQzMkFycmF5KHRoaXMuZ3JpZFNpemUqdGhpcy5ncmlkU2l6ZSksdGhpcy5jb29yZHM9bmV3IFVpbnQxNkFycmF5KHRoaXMubnVtVHJpYW5nbGVzKjQpO2ZvcihsZXQgdD0wO3Q8dGhpcy5udW1UcmlhbmdsZXM7dCsrKXtsZXQgbz10KzIsYz0wLHM9MCxlPTAsYT0wLGQ9MCxyPTA7Zm9yKG8mMT9lPWE9ZD1uOmM9cz1yPW47KG8+Pj0xKT4xOyl7Y29uc3QgbT1jK2U+PjEsZj1zK2E+PjE7byYxPyhlPWMsYT1zLGM9ZCxzPXIpOihjPWUscz1hLGU9ZCxhPXIpLGQ9bSxyPWZ9Y29uc3QgaD10KjQ7dGhpcy5jb29yZHNbaCswXT1jLHRoaXMuY29vcmRzW2grMV09cyx0aGlzLmNvb3Jkc1toKzJdPWUsdGhpcy5jb29yZHNbaCszXT1hfX1jcmVhdGVUaWxlKGkpe3JldHVybiBuZXcgVShpLHRoaXMpfX1jbGFzcyBVe2NvbnN0cnVjdG9yKGksbil7Qyh0aGlzLCJtYXJ0aW5pIik7Qyh0aGlzLCJ0ZXJyYWluIik7Qyh0aGlzLCJlcnJvcnMiKTtjb25zdCB0PW4uZ3JpZFNpemU7aWYoaS5sZW5ndGghPT10KnQpdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCB0ZXJyYWluIGRhdGEgb2YgbGVuZ3RoICR7dCp0fSAoJHt0fSB4ICR7dH0pLCBnb3QgJHtpLmxlbmd0aH0uYCk7dGhpcy50ZXJyYWluPWksdGhpcy5tYXJ0aW5pPW4sdGhpcy5lcnJvcnM9bmV3IEZsb2F0MzJBcnJheShpLmxlbmd0aCksdGhpcy51cGRhdGUoKX11cGRhdGUoKXtjb25zdHtudW1UcmlhbmdsZXM6aSxudW1QYXJlbnRUcmlhbmdsZXM6bixjb29yZHM6dCxncmlkU2l6ZTpvfT10aGlzLm1hcnRpbmkse3RlcnJhaW46YyxlcnJvcnM6c309dGhpcztmb3IobGV0IGU9aS0xO2U+PTA7ZS0tKXtjb25zdCBhPWUqNCxkPXRbYSswXSxyPXRbYSsxXSxoPXRbYSsyXSxtPXRbYSszXSxmPWQraD4+MSx1PXIrbT4+MSx5PWYrdS1yLHA9dStkLWYsRj0oY1tyKm8rZF0rY1ttKm8raF0pLzIsZz11Km8rZix3PU1hdGguYWJzKEYtY1tnXSk7aWYoc1tnXT1NYXRoLm1heChzW2ddLHcpLGU8bil7Y29uc3QgVD0ocitwPj4xKSpvKyhkK3k+PjEpLEE9KG0rcD4+MSkqbysoaCt5Pj4xKTtzW2ddPU1hdGgubWF4KHNbZ10sc1tUXSxzW0FdKX19fWdldEdlb21ldHJ5RGF0YShpPTApe2NvbnN0e2dyaWRTaXplOm4saW5kaWNlczp0fT10aGlzLm1hcnRpbmkse2Vycm9yczpvfT10aGlzO2xldCBjPTAscz0wO2NvbnN0IGU9bi0xO2xldCBhLGQscj0wO3QuZmlsbCgwKTtmdW5jdGlvbiBoKGcsdyxULEEseix4KXtjb25zdCBJPWcrVD4+MSxTPXcrQT4+MTtNYXRoLmFicyhnLXopK01hdGguYWJzKHcteCk+MSYmb1tTKm4rSV0+aT8oaCh6LHgsZyx3LEksUyksaChULEEseix4LEksUykpOihhPXcqbitnLGQ9QSpuK1Qscj14Km4reix0W2FdPT09MCYmKHRbYV09KytjKSx0W2RdPT09MCYmKHRbZF09KytjKSx0W3JdPT09MCYmKHRbcl09KytjKSxzKyspfWgoMCwwLGUsZSxlLDApLGgoZSxlLDAsMCwwLGUpO2NvbnN0IG09YyoyLGY9cyozLHU9bmV3IFVpbnQxNkFycmF5KG0pLHk9bmV3IFVpbnQzMkFycmF5KGYpO2xldCBwPTA7ZnVuY3Rpb24gRihnLHcsVCxBLHoseCl7Y29uc3QgST1nK1Q+PjEsUz13K0E+PjE7aWYoTWF0aC5hYnMoZy16KStNYXRoLmFicyh3LXgpPjEmJm9bUypuK0ldPmkpRih6LHgsZyx3LEksUyksRihULEEseix4LEksUyk7ZWxzZXtjb25zdCAkPXRbdypuK2ddLTEsTT10W0EqbitUXS0xLHY9dFt4Km4rel0tMTt1WzIqJF09Zyx1WzIqJCsxXT13LHVbMipNXT1ULHVbMipNKzFdPUEsdVsyKnZdPXosdVsyKnYrMV09eCx5W3ArK109JCx5W3ArK109TSx5W3ArK109dn19cmV0dXJuIEYoMCwwLGUsZSxlLDApLEYoZSxlLDAsMCwwLGUpLHthdHRyaWJ1dGVzOnRoaXMuX2dldE1lc2hBdHRyaWJ1dGVzKHRoaXMudGVycmFpbix1LHkpLGluZGljZXM6eX19X2dldE1lc2hBdHRyaWJ1dGVzKGksbix0KXtjb25zdCBvPU1hdGguZmxvb3IoTWF0aC5zcXJ0KGkubGVuZ3RoKSksYz1vLTEscz1uLmxlbmd0aC8yLGU9bmV3IEZsb2F0MzJBcnJheShzKjMpLGE9bmV3IEZsb2F0MzJBcnJheShzKjIpO2ZvcihsZXQgcj0wO3I8cztyKyspe2NvbnN0IGg9bltyKjJdLG09bltyKjIrMV0sZj1tKm8raDtlWzMqciswXT1oL2MtLjUsZVszKnIrMV09LjUtbS9jLGVbMypyKzJdPWlbZl0sYVsyKnIrMF09aC9jLGFbMipyKzFdPTEtbS9jfWNvbnN0IGQ9YihlLHQpO3JldHVybntwb3NpdGlvbjp7dmFsdWU6ZSxzaXplOjN9LHRleGNvb3JkOnt2YWx1ZTphLHNpemU6Mn0sbm9ybWFsOnt2YWx1ZTpkLHNpemU6M319fX1jb25zdCBEPXswOjdlMywxOjZlMywyOjVlMywzOjRlMyw0OjNlMyw1OjI1MDAsNjoyZTMsNzoxNTAwLDg6ODAwLDk6NTAwLDEwOjIwMCwxMToxMDAsMTI6NDAsMTM6MTIsMTQ6NSwxNToyLDE2OjEsMTc6MCwxODowLDE5OjAsMjA6MH07ZnVuY3Rpb24gUChsKXtmdW5jdGlvbiBpKG8sYyl7Y29uc3Qgcz1jKjQsW2UsYSxkLHJdPW8uc2xpY2UocyxzKzQpO3JldHVybiByPT09MD8wOi0xZTQrKGU8PDE2fGE8PDh8ZCkqLjF9Y29uc3Qgbj1sLmRhdGEubGVuZ3RoPj4+Mix0PW5ldyBGbG9hdDMyQXJyYXkobik7Zm9yKGxldCBvPTA7bzxuO28rKyl0W29dPWkobC5kYXRhLG8pO3JldHVybntkZW06dCx3aWR0aDpsLndpZHRoLGhlaWdodDpsLmhlaWdodH19ZnVuY3Rpb24gVihsLGksbil7bGV0IHQ9UChsKTtyZXR1cm4gblsyXS1uWzBdPDEmJih0PWsodCxuKSksbmV3IEUodC53aWR0aCkuY3JlYXRlVGlsZSh0LmRlbSkuZ2V0R2VvbWV0cnlEYXRhKERbaV18fDApfWZ1bmN0aW9uIGsobCxpKXtjb25zdCBuPShzLGUsYSk9Pntjb25zdCBkPU1hdGguZmxvb3Ioc1swXSplKSxyPU1hdGguZmxvb3Ioc1sxXSphKSxoPU1hdGguZmxvb3IoKHNbMl0tc1swXSkqZSkrMSxtPU1hdGguZmxvb3IoKHNbM10tc1sxXSkqYSkrMTtyZXR1cm57eDpkLHk6cix3OmgsaDptfX0sdD0ocyxlLGEsZCxyLGgpPT57Y29uc3QgbT1uZXcgRmxvYXQzMkFycmF5KHIqaCk7Zm9yKGxldCBmPTA7ZjxoO2YrKylmb3IobGV0IHU9MDt1PHI7dSsrKXtjb25zdCB5PShmK2QpKmUrKHUrYSkscD1mKnIrdTttW3BdPXNbeV19cmV0dXJuIG19LG89bihpLGwud2lkdGgsbC5oZWlnaHQpO3JldHVybntkZW06dChsLmRlbSxsLndpZHRoLG8ueCxvLnksby53LG8uaCksd2lkdGg6by53LGhlaWdodDpvLmh9fXNlbGYub25tZXNzYWdlPWw9Pntjb25zdCBpPWwuZGF0YSxuPVYoaS5kZW1EYXRhLGkueixpLmNsaXBCb3VuZHMpO3NlbGYucG9zdE1lc3NhZ2Uobil9fSkoKTsK",l_=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Ec=typeof self<"u"&&self.Blob&&new Blob([l_(Ph)],{type:"text/javascript;charset=utf-8"});function c_(i){let t;try{if(t=Ec&&(self.URL||self.webkitURL).createObjectURL(Ec),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Ph,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const h_=10;class u_ extends Vo{constructor(){super(),Et(this,"info",{version:Hi,description:"Mapbox-DEM terrain loader, It can load Mapbox-DEM terrain data."}),Et(this,"dataType","terrain-dem"),Et(this,"imageLoader",new vs(Ae.manager)),Et(this,"_workerPool",new Oo(0)),this._workerPool.setWorkerCreator(()=>new c_)}async doLoad(t,e){this._workerPool.pool===0&&this._workerPool.setWorkerLimit(h_);const{z:n,clipBounds:s}=e,r=await this.imageLoader.loadAsync(t),a={demData:d_(r),z:n,clipBounds:s},o=(await this._workerPool.postMessage(a)).data;return new Wi().setAttribes(o,n)}}function d_(i){const t=new OffscreenCanvas(i.width,i.height).getContext("2d");return t.drawImage(i,0,0),t.getImageData(0,0,i.width,i.height)}class Xi{constructor(t){Et(this,"dataType","image"),Et(this,"attribution","ThreeTile"),Et(this,"minLevel",0),Et(this,"maxLevel",18),Et(this,"projectionID","3857"),Et(this,"url",""),Et(this,"subdomains",[]),Et(this,"opacity",1),Et(this,"transparent",!0),Et(this,"isTMS",!1),Et(this,"bounds"),Et(this,"_projectionBounds",[-1/0,-1/0,1/0,1/0]),Object.assign(this,t)}_getBBox(t,e,n){const s=Math.PI*6378137,r=2*s/Math.pow(2,n),a=-s+t*r,o=s-(e+1)*r,l=-s+(t+1)*r,c=s-e*r;return`${a},${o},${l},${c}`}getUrl(t,e,n,s){const r=this.subdomains.length;let a;if(r>0){const c=Math.floor(Math.random()*r);a=this.subdomains[c]}const o=this._getBBox(t,e,n);e=this.isTMS?Math.pow(2,n)-1-e:e;const l={...this,x:t,y:e,z:n,s:a,bbox:o,...s};return f_(this.url,l)}static create(t){return new Xi(t)}}function f_(i,t){const e=/\{ *([\w_-]+) *\}/g;return i.replace(e,(n,s)=>{const r=t[s]??(()=>{throw new Error(`source url template error, No value provided for variable: ${n}`)})();return typeof r=="function"?r(t):r})}let Ch=class{constructor(t=0){Et(this,"_lon0",0),this._lon0=t}get lon0(){return this._lon0}getTileXWithCenterLon(t,e){const n=Math.pow(2,e);let s=t+Math.round(n/360*this._lon0);return s>=n?s-=n:s<0&&(s+=n),s}getProjBoundsFromLonLat(t){const e=t[2]-t[0]>180,n=this.project(t[0]+(e?this._lon0:0),t[1]),s=this.project(t[2]+(e?this._lon0:0),t[3]);return[Math.min(n.x,s.x),Math.min(n.y,s.y),Math.max(n.x,s.x),Math.max(n.y,s.y)]}getProjBoundsFromXYZ(t,e,n){const s=Math.PI*6378137,r=2*s/Math.pow(2,n),a=-s+t*r,o=s-(e+1)*r,l=-s+(t+1)*r,c=s-e*r;return[a,o,l,c]}getLonLatBoundsFromXYZ(t,e,n){const s=this.getProjBoundsFromXYZ(t,e,n),r=this.unProject(s[0],s[1]),a=this.unProject(s[2],s[3]);return[r.lon,r.lat,a.lon,a.lat]}};const is=6378137;class Ih extends Ch{constructor(){super(...arguments),Et(this,"ID","3857"),Et(this,"mapWidth",2*Math.PI*is),Et(this,"mapHeight",this.mapWidth),Et(this,"mapDepth",1)}project(t,e){const n=(t-this.lon0)*(Math.PI/180),s=e*(Math.PI/180),r=is*n,a=is*Math.log(Math.tan(Math.PI/4+s/2));return{x:r,y:a}}unProject(t,e){let n=t/is*(180/Math.PI)+this.lon0;return n>180&&(n-=360),{lat:(2*Math.atan(Math.exp(e/is))-Math.PI/2)*(180/Math.PI),lon:n}}}class p_ extends Ch{constructor(){super(...arguments),Et(this,"ID","4326"),Et(this,"mapWidth",36e3*1e3),Et(this,"mapHeight",18e3*1e3),Et(this,"mapDepth",1)}project(t,e){return{x:(t-this.lon0)*100*1e3,y:e*100*1e3}}unProject(t,e){return{lon:t/(100*1e3)+this.lon0,lat:e/(100*1e3)}}}const wc={createFromID:(i="3857",t)=>{let e;switch(i){case"3857":e=new Ih(t);break;case"4326":e=new p_(t);break;default:throw new Error(`Projection ID: ${i} is not supported.`)}return e}};class m_ extends Q1{constructor(){super(...arguments),Et(this,"_projection",new Ih(0))}get imgSource(){return super.imgSource}set imgSource(t){super.imgSource=t,this._updateImgProjBounds()}get demSource(){return super.demSource}set demSource(t){super.demSource=t,this._updateDemPrjBounds()}set bounds(t){super.bounds=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}get bounds(){return super.bounds}_updateImgProjBounds(){const t=this._projection;this.imgSource.forEach(e=>{e._projectionBounds=t.getProjBoundsFromLonLat(e.bounds||this.bounds)})}_updateDemPrjBounds(){const t=this._projection;this.demSource&&(this.demSource._projectionBounds=t.getProjBoundsFromLonLat(this.demSource.bounds||this.bounds))}get projection(){return this._projection}set projection(t){this._projection=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}async load(t){return super.load(this._getTileCoords(t))}async update(t,e){super.update(this._getTileCoords(t),e)}_getTileCoords(t){if(!this._projection)throw new Error("projection is undefined");const{x:e,y:n,z:s}=t,r=this._projection.getTileXWithCenterLon(e,s),a=this._projection.getProjBoundsFromXYZ(e,n,s),o=this._projection.getLonLatBoundsFromXYZ(e,n,s);return{x:r,y:n,z:s,bounds:a,lonLatBounds:o}}}const vr=new gh,g_=new W(0,-1,0),Ac=new W;function Dh(i,t){const e=t.intersectObject(i.rootTile,!0);if(e.length>0){const n=e[0];console.assert(n.object.visible);const s=i.worldToLocal(n.point.clone()),r=i.map2geo(s);return Object.assign(n,{location:r})}}function Rc(i,t){return Ac.set(t.x,1e4,t.z),vr.set(Ac,g_),Dh(i,vr)}function __(i,t,e){return vr.setFromCamera(e,i),Dh(t,vr)}function v_(i){const t=i.loader.manager,e=(n,s)=>{i.dispatchEvent({type:n,...s})};t.onStart=(n,s,r)=>{e("loading-start",{url:n,itemsLoaded:s,itemsTotal:r})},t.onError=n=>{e("loading-error",{url:n})},t.onLoad=()=>{e("loading-complete")},t.onProgress=(n,s,r)=>{e("loading-progress",{url:n,itemsLoaded:s,itemsTotal:r})},t.onParseEnd=n=>{e("parsing-end",{geometry:n})},i.rootTile.addEventListener("tile-created",n=>{e("tile-created",{tile:n.tile})}),i.rootTile.addEventListener("tile-loaded",n=>{e("tile-loaded",{tile:n.tile})}),i.rootTile.addEventListener("tile-unload",n=>{e("tile-unload",{tile:n.tile})}),i.rootTile.addEventListener("tile-visible-changed",n=>{e("tile-visible-changed",{tile:n.tile})})}class Uh extends ue{constructor(t){super(),Et(this,"name","map"),Et(this,"debug",0),Et(this,"_mapClock",new mh),Et(this,"isLOD",!0),Et(this,"autoUpdate",!0),Et(this,"updateInterval",100),Et(this,"rootTile"),Et(this,"loader"),Et(this,"_minLevel",2),Et(this,"_maxLevel",20),Et(this,"_LODThreshold",1),this.up.set(0,0,1);const{loader:e=new m_,rootTile:n=new ei,minLevel:s=2,imgSource:r,demSource:a,bounds:o,lon0:l=0,debug:c=0}=t;this.minLevel=s,this.loader=e,this.rootTile=n,o&&(this.loader.bounds=o),this.debug=this.loader.debug=c,this.lon0=l,this.imgSource=r,this.demSource=a,this.add(n),this._resize(),v_(this);const u=()=>{this.dispatchEvent({type:"ready"}),this.removeEventListener("loading-complete",u)};this.addEventListener("loading-complete",u)}get minLevel(){return this._minLevel}set minLevel(t){this._minLevel=t}get maxLevel(){return this._maxLevel}set maxLevel(t){this._maxLevel=t}get lon0(){return this.projection.lon0}set lon0(t){this.projection.lon0!==t&&(t!=0&&this.minLevel<1&&console.warn(`Map centralMeridian is ${this.lon0}, minLevel must > 0`),this.projection=wc.createFromID(this.projection.ID,t),this._updateSource())}get projection(){return this.loader.projection}set projection(t){(t.ID!=this.projection.ID||t.lon0!=this.lon0)&&(this.loader.projection=t,this._resize(),this.reload(),this.debug>0&&console.log("Map Projection Changed:",t.ID,t.lon0),this.dispatchEvent({type:"projection-changed",projection:t}))}get imgSource(){return this.loader.imgSource}set imgSource(t){const e=Array.isArray(t)?t:[t];if(e.length===0)throw new Error("imgSource can not be empty");this.loader.imgSource=e,this.projection=wc.createFromID(e[0].projectionID,this.projection.lon0),this.debug>0&&console.log("Img Source Changed:",e),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t})}get demSource(){return this.loader.demSource}set demSource(t){this.loader.demSource!==t&&(this.loader.demSource=t,this.debug>0&&console.log("DEM Source Changed:",this.demSource),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t}))}get LODThreshold(){return this._LODThreshold}set LODThreshold(t){this._LODThreshold=t}get bounds(){return this.loader.bounds}set bounds(t){this.loader.bounds=t}get maxThreads(){return this.loader.maxThreads}set maxThreads(t){this.loader.maxThreads=t}get backgroundColor(){return 0}set backgroundColor(t){}static create(t){return new Uh(t)}_resize(){return this.rootTile.scale.set(this.projection.mapWidth,this.projection.mapHeight,this.projection.mapDepth),this.rootTile.updateMatrix(),this.rootTile.updateMatrixWorld(),this}_getMaxLevel(){let t=0;return this.imgSource.forEach(e=>t=Math.max(t,e.maxLevel)),this.demSource&&(t=Math.max(t,this.demSource.maxLevel)),this.debug&&console.log("Max Level:",t),t}update(t){const e=this._mapClock.getElapsedTime();e>this.updateInterval/1e3&&(this.rootTile.update({camera:t,loader:this.loader,minLevel:this.minLevel,maxLevel:this.maxLevel,LODThreshold:this.LODThreshold}),this.rootTile.castShadow=this.castShadow,this.rootTile.receiveShadow=this.receiveShadow,this.dispatchEvent({type:"update",delta:e}),this._mapClock.start())}_updateSource(){this._maxLevel=this._getMaxLevel(),this.rootTile.reload(this.loader,!1)}reload(t=!0){this.rootTile.reload(this.loader,t)}dispose(){this.removeFromParent(),this.reload()}geo2pos(t){return this.geo2map(t)}geo2map(t){const e=this.projection.project(t.x,t.y);return new W(e.x,e.y,t.z)}geo2world(t){return this.localToWorld(this.geo2map(t))}pos2geo(t){return this.map2geo(t)}map2geo(t){const e=this.projection.unProject(t.x,t.y);return new W(e.lon,e.lat,t.z)}world2geo(t){return this.pos2geo(this.worldToLocal(t.clone()))}getLocalInfoFromGeo(t){const e=this.geo2world(t);return Rc(this,e)}getLocalInfoFromWorld(t){return Rc(this,t)}getLocalInfoFromScreen(t,e){return __(t,this,e)}get downloading(){return this.loader.downloadingThreads}getTileCount(){let t=0,e=0,n=0,s=0,r=0,a=0;return this.rootTile.traverse(o=>{o instanceof ei&&(t++,o.isLeaf&&(r++,o.showing&&e++,o.inFrustum&&n++),s=Math.max(s,o.z),a=this.loader.downloadingThreads)}),{total:t,leaf:r,visible:e,inFrustum:n,maxLevel:s,downloading:a}}}function Nh(i){return Ae.registerMaterialLoader(i),i}function fa(i){return Ae.registerGeometryLoader(i),i}function x_(){Nh(new Ah),fa(new a_),fa(new n_),fa(new u_)}x_();var y_=Object.defineProperty,b_=(i,t,e)=>t in i?y_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Yt=(i,t,e)=>b_(i,typeof t!="symbol"?t+"":t,e),ni=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var t=1.70158;return i===1?1:i*i*((t+1)*i-t)},Out:function(i){var t=1.70158;return i===0?0:--i*i*((t+1)*i+t)+1},InOut:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)}}),Bounce:Object.freeze({In:function(i){return 1-ni.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?ni.Bounce.In(i*2)*.5:ni.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(t){return Math.pow(t,i)},Out:function(t){return 1-Math.pow(1-t,i)},InOut:function(t){return t<.5?Math.pow(t*2,i)/2:(1-Math.pow(2-t*2,i))/2+.5}}}}),rs=function(){return performance.now()},M_=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},i.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},i.prototype.update=function(t,e){t===void 0&&(t=rs()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],a=!e;r&&r.update(t,a)===!1&&!e&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),ho={Linear:function(i,t){var e=i.length-1,n=e*t,s=Math.floor(n),r=ho.Utils.Linear;return t<0?r(i[0],i[1],n):t>1?r(i[e],i[e-1],e-n):r(i[s],i[s+1>e?e:s+1],n-s)},Utils:{Linear:function(i,t,e){return(t-i)*e+i}}},Fh=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),uo=new M_,pa=function(){function i(t,e){e===void 0&&(e=uo),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ni.Linear.None,this._interpolationFunction=ho.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Fh.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},i.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},i.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},i.prototype.start=function(t,e){if(t===void 0&&(t=rs()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},i.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},i.prototype._setupProperties=function(t,e,n,s,r){for(var a in n){var o=t[a],l=Array.isArray(o),c=l?"array":typeof o,u=!l&&Array.isArray(n[a]);if(!(c==="undefined"||c==="function")){if(u){var h=n[a];if(h.length===0)continue;for(var d=[o],m=0,v=h.length;m<v;m+=1){var g=this._handleRelativeValue(o,h[m]);if(isNaN(g)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(g)}u&&(n[a]=d)}if((c==="object"||l)&&o&&!u){e[a]=l?[]:{};var p=o;for(var f in p)e[a][f]=p[f];s[a]=l?[]:{};var h=n[a];if(!this._isDynamic){var b={};for(var f in h)b[f]=h[f];n[a]=h=b}this._setupProperties(p,e[a],h,s[a],r)}else(typeof e[a]>"u"||r)&&(e[a]=o),l||(e[a]*=1),u?s[a]=n[a].slice().reverse():s[a]=e[a]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(t){return t===void 0&&(t=rs()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},i.prototype.resume=function(t){return t===void 0&&(t=rs()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return t===void 0&&(t=uo),this._group=t,this},i.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},i.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},i.prototype.easing=function(t){return t===void 0&&(t=ni.Linear.None),this._easingFunction=t,this},i.prototype.interpolation=function(t){return t===void 0&&(t=ho.Linear),this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,e){var n=this,s;if(t===void 0&&(t=rs()),e===void 0&&(e=!0),this._isPaused)return!0;var r,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>a)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=t-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(n._duration===0||o>c)return 1;var p=Math.trunc(o/l),f=o-p*l,b=Math.min(f/n._duration,1);return b===0&&o===n._duration?1:b},h=u(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||o>=this._duration)if(this._repeat>0){var m=Math.min(Math.trunc((o-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=m);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*m,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var v=0,g=this._chainedTweens.length;v<g;v++)this._chainedTweens[v].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(t,e,n,s){for(var r in n)if(e[r]!==void 0){var a=e[r]||0,o=n[r],l=Array.isArray(t[r]),c=Array.isArray(o),u=!l&&c;u?t[r]=this._interpolationFunction(o,s):typeof o=="object"&&o?this._updateProperties(t[r],a,o,s):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(t[r]=a+(o-a)*s))}},i.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},i}();Fh.nextId;var dn=uo;dn.getAll.bind(dn);dn.removeAll.bind(dn);dn.add.bind(dn);dn.remove.bind(dn);var S_=dn.update.bind(dn);class T_ extends An{constructor(t,e={}){super(),Yt(this,"scene"),Yt(this,"topScenes",[]),Yt(this,"renderer"),Yt(this,"camera"),Yt(this,"ambLight"),Yt(this,"dirLight"),Yt(this,"clock",new mh),Yt(this,"container");const{antialias:n=!1,stencil:s=!0,logarithmicDepthBuffer:r=!0}=e;this.renderer=this.createRenderer(n,s,r),this.scene=this.createScene(),this.camera=this.createCamera(),t&&this.addTo(t),this.ambLight=this.createAmbLight(),this.dirLight=this.createDirLight(),this.scene.add(this.ambLight),this.scene.add(this.dirLight),this.renderer.setAnimationLoop(this.animate.bind(this))}get width(){var t;return((t=this.container)==null?void 0:t.clientWidth)||0}get height(){var t;return((t=this.container)==null?void 0:t.clientHeight)||0}addTo(t){const e=typeof t=="string"?document.querySelector(t):t;if(e instanceof HTMLElement)this.container=e,e.appendChild(this.renderer.domElement),new ResizeObserver(this.resize.bind(this)).observe(e);else throw`${t} not found!}`;return this}createScene(){const t=new Sd,e=14414079;return t.background=new Kt(e),t.fog=new yr(e,0),t}createRenderer(t,e,n){const s=new R1({antialias:t,logarithmicDepthBuffer:n,stencil:e,alpha:!0,precision:"highp"});return s.setPixelRatio(window.devicePixelRatio),s.domElement.tabIndex=0,s.domElement.style.outline="none",s}createCamera(){const t=new Ie(70,1,.1,5e7);return t.position.set(0,28e6,0),t}createAmbLight(){return new Pf(16777215,1)}createDirLight(){const t=new Lf(16777215,1);return t.position.set(0,2e3,1e3),t.target.position.set(0,0,0),t}resize(){const t=this.width,e=this.height;return this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.update(),this.dispatchEvent({type:"resize",size:{width:t,height:e}}),this}update(){this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.topScenes.forEach(t=>{this.renderer.clearDepth(),this.renderer.render(t,this.camera)}),this.renderer.autoClear=!0}animate(){this.update(),this.dispatchEvent({type:"update",delta:this.clock.getDelta()}),S_()}}const Lc={type:"change"},Wo={type:"start"},Vh={type:"end"},nr=new Gi,Pc=new Un,E_=Math.cos(70*ti.DEG2RAD),_e=new W,Fe=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ma=1e-6;class w_ extends Hf{constructor(t,e=null){super(t,e),this.state=le.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ke.ROTATE,MIDDLE:Ke.DOLLY,RIGHT:Ke.PAN},this.touches={ONE:ln.ROTATE,TWO:ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new rn,this._lastTargetPosition=new W,this._quat=new rn().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hl,this._sphericalDelta=new Hl,this._scale=1,this._panOffset=new W,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new W,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R_.bind(this),this._onPointerDown=A_.bind(this),this._onPointerUp=L_.bind(this),this._onContextMenu=F_.bind(this),this._onMouseWheel=I_.bind(this),this._onKeyDown=D_.bind(this),this._onTouchStart=U_.bind(this),this._onTouchMove=N_.bind(this),this._onMouseDown=P_.bind(this),this._onMouseMove=C_.bind(this),this._interceptControlDown=V_.bind(this),this._interceptControlUp=O_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lc),this.update(),this.state=le.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=_e.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(nr.origin.copy(this.object.position),nr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nr.direction))<E_?this.object.lookAt(this.target):(Pc.setFromNormalAndCoplanarPoint(this.object.up,this.target),nr.intersectPlane(Pc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ma||this._lastTargetPosition.distanceToSquared(this.target)>ma?(this.dispatchEvent(Lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fe*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fe*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fe*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fe*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function A_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function R_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function L_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vh),this.state=le.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function P_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case Ke.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case Ke.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Wo)}function C_(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function I_(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(Wo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vh))}function D_(i){this.enabled!==!1&&this._handleKeyDown(i)}function U_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ln.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case ln.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case ln.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case ln.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Wo)}function N_(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function F_(i){this.enabled!==!1&&i.preventDefault()}function V_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}new W;new Do(-1,1,1,-1,0,1);class W_ extends Re{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}}new W_;var q={};(function(){var i=function(){function n(s){this.message="JPEG error: "+s}return n.prototype=new Error,n.prototype.name="JpegError",n.constructor=n,n}(),t=function(){var n=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),s=4017,r=799,a=3406,o=2276,l=1567,c=3784,u=5793,h=2896;function d(_){_==null&&(_={}),_.w==null&&(_.w=-1),this.V=_.n,this.N=_.w}function m(_,y){for(var T=0,x=[],E,A,M=16,S;M>0&&!_[M-1];)M--;x.push({children:[],index:0});var R=x[0];for(E=0;E<M;E++){for(A=0;A<_[E];A++){for(R=x.pop(),R.children[R.index]=y[T];R.index>0;)R=x.pop();for(R.index++,x.push(R);x.length<=E;)x.push(S={children:[],index:0}),R.children[R.index]=S.children,R=S;T++}E+1<M&&(x.push(S={children:[],index:0}),R.children[R.index]=S.children,R=S)}return x[0].children}function v(_,y,T){return 64*((_.P+1)*y+T)}function g(_,y,T,x,E,A,M,S,R,U){U==null&&(U=!1);var D=T.m,N=T.Z,k=y,z=0,Z=0,L=0,F=0,V,O=0,tt,ct,G,Y,Q,J,ot=0,St,pt,It,et;function st(){if(Z>0)return Z--,z>>Z&1;if(z=_[y++],z===255){var j=_[y++];if(j){if(j===220&&U){y+=2;var _t=e(_,y);if(y+=2,_t>0&&_t!==T.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",_t)}else if(j===217){if(U){var gt=O*8;if(gt>0&&gt<T.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",gt)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return Z=7,z>>>7}function I(j){for(var _t=j;;){switch(_t=_t[st()],typeof _t){case"number":return _t;case"object":continue}throw new i("invalid huffman sequence")}}function mt(j){for(var _t=0;j>0;)_t=_t<<1|st(),j--;return _t}function $(j){if(j===1)return st()===1?1:-1;var _t=mt(j);return _t>=1<<j-1?_t:_t+(-1<<j)+1}function lt(j,_t){var gt=I(j.J),Tt=gt===0?0:$(gt),Ft=1;for(j.D[_t]=j.Q+=Tt;Ft<64;){var dt=I(j.i),bt=dt&15,vt=dt>>4;if(bt===0){if(vt<15)break;Ft+=16;continue}Ft+=vt;var Nt=n[Ft];j.D[_t+Nt]=$(bt),Ft++}}function ut(j,_t){var gt=I(j.J),Tt=gt===0?0:$(gt)<<R;j.D[_t]=j.Q+=Tt}function Dt(j,_t){j.D[_t]|=st()<<R}function Mt(j,_t){if(L>0){L--;return}for(var gt=A,Tt=M;gt<=Tt;){var Ft=I(j.i),dt=Ft&15,bt=Ft>>4;if(dt===0){if(bt<15){L=mt(bt)+(1<<bt)-1;break}gt+=16;continue}gt+=bt;var vt=n[gt];j.D[_t+vt]=$(dt)*(1<<R),gt++}}function C(j,_t){for(var gt=A,Tt=M,Ft=0,dt,bt;gt<=Tt;){var vt=_t+n[gt],Nt=j.D[vt]<0?-1:1;switch(F){case 0:if(bt=I(j.i),dt=bt&15,Ft=bt>>4,dt===0)Ft<15?(L=mt(Ft)+(1<<Ft),F=4):(Ft=16,F=1);else{if(dt!==1)throw new i("invalid ACn encoding");V=$(dt),F=Ft?2:3}continue;case 1:case 2:j.D[vt]?j.D[vt]+=Nt*(st()<<R):(Ft--,Ft===0&&(F=F===2?3:0));break;case 3:j.D[vt]?j.D[vt]+=Nt*(st()<<R):(j.D[vt]=V<<R,F=0);break;case 4:j.D[vt]&&(j.D[vt]+=Nt*(st()<<R));break}gt++}F===4&&(L--,L===0&&(F=0))}function w(j,_t,gt,Tt,Ft){var dt=gt/D|0,bt=gt%D;O=dt*j.A+Tt;var vt=bt*j.h+Ft,Nt=v(j,O,vt);_t(j,Nt)}function H(j,_t,gt){O=gt/j.P|0;var Tt=gt%j.P,Ft=v(j,O,Tt);_t(j,Ft)}var rt=x.length;for(N?A===0?J=S===0?ut:Dt:J=S===0?Mt:C:J=lt,rt===1?pt=x[0].P*x[0].c:pt=D*T.R;ot<=pt;){var ht=E?Math.min(pt-ot,E):pt;if(ht>0){for(ct=0;ct<rt;ct++)x[ct].Q=0;if(L=0,rt===1)for(tt=x[0],Q=0;Q<ht;Q++)H(tt,J,ot),ot++;else for(Q=0;Q<ht;Q++){for(ct=0;ct<rt;ct++)for(tt=x[ct],It=tt.h,et=tt.A,G=0;G<et;G++)for(Y=0;Y<It;Y++)w(tt,J,ot,G,Y);ot++}}if(Z=0,St=b(_,y),!St)break;if(St.u&&(y=St.offset),St.M>=65488&&St.M<=65495)y+=2;else break}return y-k}function p(_,y,T){var x=_.$,E=_.D,A,M,S,R,U,D,N,k,z,Z,L,F,V,O,tt,ct,G;if(!x)throw new i("missing required Quantization Table.");for(var Y=0;Y<64;Y+=8){if(z=E[y+Y],Z=E[y+Y+1],L=E[y+Y+2],F=E[y+Y+3],V=E[y+Y+4],O=E[y+Y+5],tt=E[y+Y+6],ct=E[y+Y+7],z*=x[Y],!(Z|L|F|V|O|tt|ct)){G=u*z+512>>10,T[Y]=G,T[Y+1]=G,T[Y+2]=G,T[Y+3]=G,T[Y+4]=G,T[Y+5]=G,T[Y+6]=G,T[Y+7]=G;continue}Z*=x[Y+1],L*=x[Y+2],F*=x[Y+3],V*=x[Y+4],O*=x[Y+5],tt*=x[Y+6],ct*=x[Y+7],A=u*z+128>>8,M=u*V+128>>8,S=L,R=tt,U=h*(Z-ct)+128>>8,k=h*(Z+ct)+128>>8,D=F<<4,N=O<<4,A=A+M+1>>1,M=A-M,G=S*c+R*l+128>>8,S=S*l-R*c+128>>8,R=G,U=U+N+1>>1,N=U-N,k=k+D+1>>1,D=k-D,A=A+R+1>>1,R=A-R,M=M+S+1>>1,S=M-S,G=U*o+k*a+2048>>12,U=U*a-k*o+2048>>12,k=G,G=D*r+N*s+2048>>12,D=D*s-N*r+2048>>12,N=G,T[Y]=A+k,T[Y+7]=A-k,T[Y+1]=M+N,T[Y+6]=M-N,T[Y+2]=S+D,T[Y+5]=S-D,T[Y+3]=R+U,T[Y+4]=R-U}for(var Q=0;Q<8;++Q){if(z=T[Q],Z=T[Q+8],L=T[Q+16],F=T[Q+24],V=T[Q+32],O=T[Q+40],tt=T[Q+48],ct=T[Q+56],!(Z|L|F|V|O|tt|ct)){G=u*z+8192>>14,G<-2040?G=0:G>=2024?G=255:G=G+2056>>4,E[y+Q]=G,E[y+Q+8]=G,E[y+Q+16]=G,E[y+Q+24]=G,E[y+Q+32]=G,E[y+Q+40]=G,E[y+Q+48]=G,E[y+Q+56]=G;continue}A=u*z+2048>>12,M=u*V+2048>>12,S=L,R=tt,U=h*(Z-ct)+2048>>12,k=h*(Z+ct)+2048>>12,D=F,N=O,A=(A+M+1>>1)+4112,M=A-M,G=S*c+R*l+2048>>12,S=S*l-R*c+2048>>12,R=G,U=U+N+1>>1,N=U-N,k=k+D+1>>1,D=k-D,A=A+R+1>>1,R=A-R,M=M+S+1>>1,S=M-S,G=U*o+k*a+2048>>12,U=U*a-k*o+2048>>12,k=G,G=D*r+N*s+2048>>12,D=D*s-N*r+2048>>12,N=G,z=A+k,ct=A-k,Z=M+N,tt=M-N,L=S+D,O=S-D,F=R+U,V=R-U,z<16?z=0:z>=4080?z=255:z>>=4,Z<16?Z=0:Z>=4080?Z=255:Z>>=4,L<16?L=0:L>=4080?L=255:L>>=4,F<16?F=0:F>=4080?F=255:F>>=4,V<16?V=0:V>=4080?V=255:V>>=4,O<16?O=0:O>=4080?O=255:O>>=4,tt<16?tt=0:tt>=4080?tt=255:tt>>=4,ct<16?ct=0:ct>=4080?ct=255:ct>>=4,E[y+Q]=z,E[y+Q+8]=Z,E[y+Q+16]=L,E[y+Q+24]=F,E[y+Q+32]=V,E[y+Q+40]=O,E[y+Q+48]=tt,E[y+Q+56]=ct}}function f(_,y){for(var T=y.P,x=y.c,E=new Int16Array(64),A=0;A<x;A++)for(var M=0;M<T;M++){var S=v(y,A,M);p(y,S,E)}return y.D}function b(_,y,T){T==null&&(T=y);var x=_.length-1,E=T<y?T:y;if(y>=x)return null;var A=e(_,y);if(A>=65472&&A<=65534)return{u:null,M:A,offset:y};for(var M=e(_,E);!(M>=65472&&M<=65534);){if(++E>=x)return null;M=e(_,E)}return{u:A.toString(16),M,offset:E}}return d.prototype={parse(_,y){y==null&&(y={});var T=y.F,x=0,E=null,A=null,M,S,R=0;function U(){var vt=e(_,x);x+=2;var Nt=x+vt-2,Pt=b(_,Nt,x);Pt&&Pt.u&&(Nt=Pt.offset);var kt=_.subarray(x,Nt);return x+=kt.length,kt}function D(vt){for(var Nt=Math.ceil(vt.o/8/vt.X),Pt=Math.ceil(vt.s/8/vt.B),kt=0;kt<vt.W.length;kt++){C=vt.W[kt];var Gt=Math.ceil(Math.ceil(vt.o/8)*C.h/vt.X),ee=Math.ceil(Math.ceil(vt.s/8)*C.A/vt.B),B=Nt*C.h,At=Pt*C.A,at=64*At*(B+1);C.D=new Int16Array(at),C.P=Gt,C.c=ee}vt.m=Nt,vt.R=Pt}var N=[],k=[],z=[],Z=e(_,x);if(x+=2,Z!==65496)throw new i("SOI not found");Z=e(_,x),x+=2;t:for(;Z!==65497;){var L,F,V;switch(Z){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var O=U();Z===65504&&O[0]===74&&O[1]===70&&O[2]===73&&O[3]===70&&O[4]===0&&(E={version:{d:O[5],T:O[6]},K:O[7],j:O[8]<<8|O[9],H:O[10]<<8|O[11],S:O[12],I:O[13],C:O.subarray(14,14+3*O[12]*O[13])}),Z===65518&&O[0]===65&&O[1]===100&&O[2]===111&&O[3]===98&&O[4]===101&&(A={version:O[5]<<8|O[6],k:O[7]<<8|O[8],q:O[9]<<8|O[10],a:O[11]});break;case 65499:var tt=e(_,x),ct;x+=2;for(var G=tt+x-2;x<G;){var Y=_[x++],Q=new Uint16Array(64);if(Y>>4)if(Y>>4===1)for(F=0;F<64;F++)ct=n[F],Q[ct]=e(_,x),x+=2;else throw new i("DQT - invalid table spec");else for(F=0;F<64;F++)ct=n[F],Q[ct]=_[x++];N[Y&15]=Q}break;case 65472:case 65473:case 65474:if(M)throw new i("Only single frame JPEGs supported");x+=2,M={},M.G=Z===65473,M.Z=Z===65474,M.precision=_[x++];var J=e(_,x),ot,St=0,pt=0;x+=2,M.s=T||J,M.o=e(_,x),x+=2,M.W=[],M._={};var It=_[x++];for(L=0;L<It;L++){ot=_[x];var et=_[x+1]>>4,st=_[x+1]&15;St<et&&(St=et),pt<st&&(pt=st);var I=_[x+2];V=M.W.push({h:et,A:st,L:I,$:null}),M._[ot]=V-1,x+=3}M.X=St,M.B=pt,D(M);break;case 65476:var mt=e(_,x);for(x+=2,L=2;L<mt;){var $=_[x++],lt=new Uint8Array(16),ut=0;for(F=0;F<16;F++,x++)ut+=lt[F]=_[x];var Dt=new Uint8Array(ut);for(F=0;F<ut;F++,x++)Dt[F]=_[x];L+=17+ut,($>>4?k:z)[$&15]=m(lt,Dt)}break;case 65501:x+=2,S=e(_,x),x+=2;break;case 65498:var Mt=++R===1&&!T,C;x+=2;var w=_[x++],H=[];for(L=0;L<w;L++){var rt=_[x++],ht=M._[rt];C=M.W[ht],C.index=rt;var j=_[x++];C.J=z[j>>4],C.i=k[j&15],H.push(C)}var _t=_[x++],gt=_[x++],Tt=_[x++];try{var Ft=g(_,x,M,H,S,_t,gt,Tt>>4,Tt&15,Mt);x+=Ft}catch(vt){if(vt instanceof DNLMarkerError)return this.parse(_,{F:vt.s});if(vt instanceof EOIMarkerError)break t;throw vt}break;case 65500:x+=4;break;case 65535:_[x]!==255&&x--;break;default:var dt=b(_,x-2,x-3);if(dt&&dt.u){x=dt.offset;break}if(x>=_.length-1)break t;throw new i("JpegImage.parse - unknown marker: "+Z.toString(16))}Z=e(_,x),x+=2}for(this.width=M.o,this.height=M.s,this.g=E,this.b=A,this.W=[],L=0;L<M.W.length;L++){C=M.W[L];var bt=N[C.L];bt&&(C.$=bt),this.W.push({index:C.index,e:f(M,C),l:C.h/M.X,t:C.A/M.B,P:C.P,c:C.c})}this.p=this.W.length},Y(_,y,T){T==null&&(T=!1);var x=this.width/_,E=this.height/y,A,M,S,R,U,D,N,k,z,Z,L=0,F,V=this.W.length,O=_*y*V,tt=new Uint8ClampedArray(O),ct=new Uint32Array(_),G=4294967288,Y;for(N=0;N<V;N++){if(A=this.W[N],M=A.l*x,S=A.t*E,L=N,F=A.e,R=A.P+1<<3,M!==Y){for(U=0;U<_;U++)k=0|U*M,ct[U]=(k&G)<<3|k&7;Y=M}for(D=0;D<y;D++)for(k=0|D*S,Z=R*(k&G)|(k&7)<<3,U=0;U<_;U++)tt[L]=F[Z+ct[U]],L+=V}var Q=this.V;if(!T&&V===4&&!Q&&(Q=new Int32Array([-256,255,-256,255,-256,255,-256,255])),Q)for(N=0;N<O;)for(k=0,z=0;k<V;k++,N++,z+=2)tt[N]=(tt[N]*Q[z]>>8)+Q[z+1];return tt},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(_){for(var y,T,x,E=0,A=_.length;E<A;E+=3)y=_[E],T=_[E+1],x=_[E+2],_[E]=y-179.456+1.402*x,_[E+1]=y+135.459-.344*T-.714*x,_[E+2]=y-226.816+1.772*T;return _},O:function(_){for(var y,T,x,E,A=0,M=0,S=_.length;M<S;M+=4)y=_[M],T=_[M+1],x=_[M+2],E=_[M+3],_[A++]=-122.67195406894+T*(-660635669420364e-19*T+.000437130475926232*x-54080610064599e-18*y+.00048449797120281*E-.154362151871126)+x*(-.000957964378445773*x+.000817076911346625*y-.00477271405408747*E+1.53380253221734)+y*(.000961250184130688*y-.00266257332283933*E+.48357088451265)+E*(-.000336197177618394*E+.484791561490776),_[A++]=107.268039397724+T*(219927104525741e-19*T-.000640992018297945*x+.000659397001245577*y+.000426105652938837*E-.176491792462875)+x*(-.000778269941513683*x+.00130872261408275*y+.000770482631801132*E-.151051492775562)+y*(.00126935368114843*y-.00265090189010898*E+.25802910206845)+E*(-.000318913117588328*E-.213742400323665),_[A++]=-20.810012546947+T*(-.000570115196973677*T-263409051004589e-19*x+.0020741088115012*y-.00288260236853442*E+.814272968359295)+x*(-153496057440975e-19*x-.000132689043961446*y+.000560833691242812*E-.195152027534049)+y*(.00174418132927582*y-.00255243321439347*E+.116935020465145)+E*(-.000343531996510555*E+.24165260232407);return _.subarray(0,A)},r:function(_){for(var y,T,x,E=0,A=_.length;E<A;E+=4)y=_[E],T=_[E+1],x=_[E+2],_[E]=434.456-y-1.402*x,_[E+1]=119.541-y+.344*T+.714*x,_[E+2]=481.816-y-1.772*T;return _},U:function(_){for(var y,T,x,E,A=0,M=0,S=_.length;M<S;M+=4)y=_[M],T=_[M+1],x=_[M+2],E=_[M+3],_[A++]=255+y*(-6747147073602441e-20*y+.0008379262121013727*T+.0002894718188643294*x+.003264231057537806*E-1.1185611867203937)+T*(26374107616089405e-21*T-8626949158638572e-20*x-.0002748769067499491*E-.02155688794978967)+x*(-3878099212869363e-20*x-.0003267808279485286*E+.0686742238595345)-E*(.0003361971776183937*E+.7430659151342254),_[A++]=255+y*(.00013596372813588848*y+.000924537132573585*T+.00010567359618683593*x+.0004791864687436512*E-.3109689587515875)+T*(-.00023545346108370344*T+.0002702845253534714*x+.0020200308977307156*E-.7488052167015494)+x*(6834815998235662e-20*x+.00015168452363460973*E-.09751927774728933)-E*(.0003189131175883281*E+.7364883807733168),_[A++]=255+y*(13598650411385307e-21*y+.00012423956175490851*T+.0004751985097583589*x-36729317476630422e-22*E-.05562186980264034)+T*(.00016141380598724676*T+.0009692239130725186*x+.0007782692450036253*E-.44015232367526463)+x*(5068882914068769e-22*x+.0017778369011375071*E-.7591454649749609)-E*(.0003435319965105553*E+.7063770186160144);return _.subarray(0,A)},getData:function(_){var y=_.width,T=_.height,x=_.forceRGB,E=_.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var A=this.Y(y,T,E);if(this.p===1&&x){for(var M=A.length,S=new Uint8ClampedArray(M*3),R=0,U=0;U<M;U++){var D=A[U];S[R++]=D,S[R++]=D,S[R++]=D}return S}else{if(this.p===3&&this.f)return this.z(A);if(this.p===4){if(this.f)return x?this.O(A):this.r(A);if(x)return this.U(A)}}return A}},d}();function e(n,s){return n[s]<<8|n[s+1]}q.JpegDecoder=t})();q.encodeImage=function(i,t,e,n){var s={t256:[t],t257:[e],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[e],t279:[t*e*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var r in n)s[r]=n[r];for(var a=new Uint8Array(q.encode([s])),o=new Uint8Array(i),l=new Uint8Array(1e3+t*e*4),r=0;r<a.length;r++)l[r]=a[r];for(var r=0;r<o.length;r++)l[1e3+r]=o[r];return l.buffer};q.encode=function(i){var t=new Uint8Array(2e4),e=4,n=q._binBE;t[0]=t[1]=77,n.writeUshort(t,2,42);var s=8;n.writeUint(t,e,s),e+=4;for(var r=0;r<i.length;r++){var a=q._writeIFD(n,q._types.basic,t,s,i[r]);s=a[1],r<i.length-1&&(s&3&&(s+=4-(s&3)),n.writeUint(t,a[0],s))}return t.slice(0,s).buffer};q.decode=function(i,t){t==null&&(t={parseMN:!0,debug:!1});var e=new Uint8Array(i),n=0,s=q._binBE.readASCII(e,n,2);n+=2;var r=s=="II"?q._binLE:q._binBE;r.readUshort(e,n),n+=2;var a=r.readUint(e,n);n+=4;for(var o=[];;){var l=r.readUshort(e,a),c=r.readUshort(e,a+4);if(l!=0&&(c<1||13<c)){log("error in TIFF");break}if(q._readIFD(r,e,a,o,0,t),a=r.readUint(e,a+2+l*12),a==0)break}return o};q.decodeImage=function(i,t,e){if(!t.data){var n=new Uint8Array(i),s=q._binBE.readASCII(n,0,2);if(t.t256!=null){t.isLE=s=="II",t.width=t.t256[0],t.height=t.t257[0];var r=t.t259?t.t259[0]:1,a=t.t266?t.t266[0]:1;t.t284&&t.t284[0]==2&&log("PlanarConfiguration 2 should not be used!"),r==7&&t.t258&&t.t258.length>3&&(t.t258=t.t258.slice(0,3));var o=t.t277?t.t277[0]:1,l=t.t258?t.t258[0]:1,c=l*o;r==1&&t.t279!=null&&t.t278&&t.t262[0]==32803&&(c=Math.round(t.t279[0]*8/(t.width*t.t278[0]))),t.t50885&&t.t50885[0]==4&&(c=t.t258[0]*3);var u=Math.ceil(t.width*c/8)*8,h=t.t273;(h==null||t.t322)&&(h=t.t324);var d=t.t279;r==1&&h.length==1&&(d=[t.height*(u>>>3)]),(d==null||t.t322)&&(d=t.t325);var m=new Uint8Array(t.height*(u>>>3)),v=0;if(t.t322!=null){var g=t.t322[0],p=t.t323[0],f=Math.floor((t.width+g-1)/g),b=Math.floor((t.height+p-1)/p),_=new Uint8Array(Math.ceil(g*p*c/8)|0);console.log("====",f,b);for(var y=0;y<b;y++)for(var T=0;T<f;T++){var x=y*f+T;_.fill(0),q.decode._decompress(t,e,n,h[x],d[x],r,_,0,a,g,p),r==6?m=_:q._copyTile(_,Math.ceil(g*c/8)|0,p,m,Math.ceil(t.width*c/8)|0,t.height,Math.ceil(T*g*c/8)|0,y*p)}v=m.length*8}else{if(h==null)return;var E=t.t278?t.t278[0]:t.height;E=Math.min(E,t.height);for(var x=0;x<h.length;x++)q.decode._decompress(t,e,n,h[x],d[x],r,m,Math.ceil(v/8)|0,a,t.width,E),v+=u*E;v=Math.min(v,m.length*8)}t.data=new Uint8Array(m.buffer,0,Math.ceil(v/8)|0)}}};q.decode._decompress=function(i,t,e,n,s,r,a,o,l,c,u){if(i.t271&&i.t271[0]=="Panasonic"&&i.t45&&i.t45[0]==6&&(r=34316),r==1)for(var h=0;h<s;h++)a[o+h]=e[n+h];else if(r==2)q.decode._decodeG2(e,n,s,a,o,c,l);else if(r==3)q.decode._decodeG3(e,n,s,a,o,c,l,i.t292?(i.t292[0]&1)==1:!1);else if(r==4)q.decode._decodeG4(e,n,s,a,o,c,l);else if(r==5)q.decode._decodeLZW(e,n,s,a,o,8);else if(r==6)q.decode._decodeOldJPEG(i,e,n,s,a,o);else if(r==7||r==34892)q.decode._decodeNewJPEG(i,e,n,s,a,o);else if(r==8||r==32946){var d=new Uint8Array(e.buffer,n+2,s-6),m=q._inflateRaw(d);o+m.length<=a.length&&a.set(m,o)}else r==9?q.decode._decodeVC5(e,n,s,a,o,i.t33422):r==32767?q.decode._decodeARW(i,e,n,s,a,o):r==32773?q.decode._decodePackBits(e,n,s,a,o):r==32809?q.decode._decodeThunder(e,n,s,a,o):r==34316?q.decode._decodePanasonic(i,e,n,s,a,o):r==34713?q.decode._decodeNikon(i,t,e,n,s,a,o):r==34676?q.decode._decodeLogLuv32(i,e,n,s,a,o):log("Unknown compression",r);var v=i.t258?Math.min(32,i.t258[0]):1,g=i.t277?i.t277[0]:1,p=v*g>>>3,f=Math.ceil(v*g*c/8);if(v==16&&!i.isLE&&i.t33422==null)for(var b=0;b<u;b++)for(var _=o+b*f,y=1;y<f;y+=2){var T=a[_+y];a[_+y]=a[_+y-1],a[_+y-1]=T}if(i.t317&&i.t317[0]==2)for(var b=0;b<u;b++){var x=o+b*f;if(v==16)for(var h=p;h<f;h+=2){var E=(a[x+h+1]<<8|a[x+h])+(a[x+h-p+1]<<8|a[x+h-p]);a[x+h]=E&255,a[x+h+1]=E>>>8&255}else if(g==3)for(var h=3;h<f;h+=3)a[x+h]=a[x+h]+a[x+h-3]&255,a[x+h+1]=a[x+h+1]+a[x+h-2]&255,a[x+h+2]=a[x+h+2]+a[x+h-1]&255;else for(var h=p;h<f;h++)a[x+h]=a[x+h]+a[x+h-p]&255}};q.decode._decodePanasonic=function(i,t,e,n,s,r){var a=t.buffer,o=i.t2[0],l=i.t3[0],c=i.t10[0],u=i.t45[0],h=0,d=0,m=0,v=0,g=u==6?new Uint32Array(18):new Uint8Array(16),p,f,b,_=[0,0],y=[0,0],T,x=0,E,A,M,S,R=new Uint8Array(16384),U=new Uint16Array(s.buffer);function D(I){if(m==0){var mt=new Uint8Array(a,e+d+8184,8200),$=new Uint8Array(a,e+d,8184);R.set(mt),R.set($,mt.length),d+=16384}if(u==5)for(p=0;p<16;p++)g[p]=R[m++],m&=16383;else return m=m-I&131071,v=m>>3^16368,(R[v]|R[v+1]<<8)>>(m&7)&~(-1<<I)}function N(I){return R[m+15-I]}function k(){g[0]=N(0)<<6|N(1)>>2,g[1]=((N(1)&3)<<12|N(2)<<4|N(3)>>4)&16383,g[2]=N(3)>>2&3,g[3]=(N(3)&3)<<8|N(4),g[4]=N(5)<<2|N(6)>>6,g[5]=(N(6)&63)<<4|N(7)>>4,g[6]=N(7)>>2&3,g[7]=(N(7)&3)<<8|N(8),g[8]=N(9)<<2&1020|N(10)>>6,g[9]=(N(10)<<4|N(11)>>4)&1023,g[10]=N(11)>>2&3,g[11]=(N(11)&3)<<8|N(12),g[12]=(N(13)<<2&1020|N(14)>>6)&1023,g[13]=(N(14)<<4|N(15)>>4)&1023,m+=16,v=0}function z(){g[0]=N(0)<<4|N(1)>>4,g[1]=((N(1)&15)<<8|N(2))&4095,g[2]=N(3)>>6&3,g[3]=(N(3)&63)<<2|N(4)>>6,g[4]=(N(4)&63)<<2|N(5)>>6,g[5]=(N(5)&63)<<2|N(6)>>6,g[6]=N(6)>>4&3,g[7]=(N(6)&15)<<4|N(7)>>4,g[8]=(N(7)&15)<<4|N(8)>>4,g[9]=(N(8)&15)<<4|N(9)>>4,g[10]=N(9)>>2&3,g[11]=(N(9)&3)<<6|N(10)>>2,g[12]=(N(10)&3)<<6|N(11)>>2,g[13]=(N(11)&3)<<6|N(12)>>2,g[14]=N(12)&3,g[15]=N(13),g[16]=N(14),g[17]=N(15),m+=16,v=0}function Z(){_[0]=0,_[1]=0,y[0]=0,y[1]=0}if(u==7)throw u;if(u==6){var L=c==12,F=L?z:k,V=L?14:11,O=L?128:512,tt=L?2048:8192,ct=L?16383:65535,G=L?4095:16383,Y=o/V,Q=Y*16,J=L?18:14;for(A=0;A<l-15;A+=16){var ot=Math.min(16,l-A),St=Q*ot;for(R=new Uint8Array(a,e+h,St),m=0,h+=St,S=0,M=0;S<ot;S++,M=0){x=(A+S)*o;for(var pt=0;pt<Y;pt++)for(F(),Z(),b=0,E=0,p=0;p<V;p++){if(T=p&1,p%3==2){var It=v<J?g[v++]:0;It==3&&(It=4),E=O<<It,b=1<<It}var et=v<J?g[v++]:0;_[T]?(et*=b,E<tt&&y[T]>E&&(et+=y[T]-E),y[T]=et):(_[T]=et,et?y[T]=et:et=y[T]),U[x+M++]=et-15<=ct?et-15&ct:et+2147483633>>31&G}}}}else if(u==5){var st=c==12?10:9;for(A=0;A<l;A++)for(M=0;M<o;M+=st)D(0),c==12?(U[x++]=((g[1]&15)<<8)+g[0],U[x++]=16*g[2]+(g[1]>>4),U[x++]=((g[4]&15)<<8)+g[3],U[x++]=16*g[5]+(g[4]>>4),U[x++]=((g[7]&15)<<8)+g[6],U[x++]=16*g[8]+(g[7]>>4),U[x++]=((g[10]&15)<<8)+g[9],U[x++]=16*g[11]+(g[10]>>4),U[x++]=((g[13]&15)<<8)+g[12],U[x++]=16*g[14]+(g[13]>>4)):c==14&&(U[x++]=g[0]+((g[1]&63)<<8),U[x++]=(g[1]>>6)+4*g[2]+((g[3]&15)<<10),U[x++]=(g[3]>>4)+16*g[4]+((g[5]&3)<<12),U[x++]=((g[5]&252)>>2)+(g[6]<<6),U[x++]=g[7]+((g[8]&63)<<8),U[x++]=(g[8]>>6)+4*g[9]+((g[10]&15)<<10),U[x++]=(g[10]>>4)+16*g[11]+((g[12]&3)<<12),U[x++]=((g[12]&252)>>2)+(g[13]<<6),U[x++]=g[14]+((g[15]&63)<<8))}else if(u==4)for(A=0;A<l;A++)for(M=0;M<o;M++)p=M%14,T=p&1,p==0&&Z(),p%3==2&&(b=4>>3-D(2)),y[T]?(f=D(8),f!=0&&(_[T]-=128<<b,(_[T]<0||b==4)&&(_[T]&=~(-1<<b)),_[T]+=f<<b)):(y[T]=D(8),(y[T]||p>11)&&(_[T]=y[T]<<4|D(4))),U[x++]=_[M&1];else throw u};q.decode._decodeVC5=function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],t,e,n,s=[3,3,3,3,2,2,2,1,1,1],r=24576,a=16384,o=8192,l=a|o;function c(b){var _=b[1],y=b[0][_>>>3]>>>7-(_&7)&1;return b[1]++,y}function u(b,_){if(t==null){t={};for(var y=0;y<i.length;y+=4)t[i[y+1]]=i.slice(y,y+4)}for(var T=c(b),x=t[T];x==null;)T=T<<1|c(b),x=t[T];var E=x[3];E!=0&&(E=c(b)==0?E:-E),_[0]=x[2],_[1]=E}function h(b,_){for(var y=0;y<_;y++)(b&1)==1&&b++,b=b>>>1;return b}function d(b,_){return b>>_}function m(b,_,y,T,x,E){_[y]=d(d(11*b[x]-4*b[x+E]+b[x+E+E]+4,3)+b[T],1),_[y+E]=d(d(5*b[x]+4*b[x+E]-b[x+E+E]+4,3)-b[T],1)}function v(b,_,y,T,x,E){var A=b[x-E]-b[x+E],M=b[x],S=b[T];_[y]=d(d(A+4,3)+M+S,1),_[y+E]=d(d(-A+4,3)+M-S,1)}function g(b,_,y,T,x,E){_[y]=d(d(5*b[x]+4*b[x-E]-b[x-E-E]+4,3)+b[T],1),_[y+E]=d(d(11*b[x]-4*b[x-E]+b[x-E-E]+4,3)-b[T],1)}function p(b){return b=b<0?0:b>4095?4095:b,b=n[b]>>>2,b}function f(b,_,y,T,x,E){T=new Uint16Array(T.buffer);var A=Date.now(),M=q._binBE,S=_+y,R,U,D,N,k,z,Z,L,F,V;_+=4;for(var O=E[0]==1;_<S;){var tt=M.readShort(b,_),ct=M.readUshort(b,_+2);if(_+=4,tt==12)R=ct;else if(tt==20)U=ct;else if(tt==21)D=ct;else if(tt==48)N=ct;else if(tt==53)k=ct;else if(tt!=35){if(tt==62)z=ct;else if(tt!=101){if(tt==109)Z=ct;else if(tt!=84&&tt!=106&&tt!=107&&tt!=108&&tt!=102){if(tt==104)L=ct;else if(tt!=105){var G=tt<0?-tt:tt,Y=G&65280,Q=0;if(G&l&&(G&o?(Q=ct&65535,Q+=(G&255)<<16):Q=ct&65535),(G&r)==r){if(F==null){F=[];for(var J=0;J<4;J++)F[J]=new Int16Array((U>>>1)*(D>>>1));V=new Int16Array((U>>>1)*(D>>>1)),e=new Int16Array(1024);for(var J=0;J<1024;J++){var ot=J-512,St=Math.abs(ot),R=Math.floor(768*St*St*St/(255*255*255))+St;e[J]=Math.sign(ot)*R}n=new Uint16Array(4096);for(var pt=65535,J=0;J<4096;J++){var It=J,et=pt*(Math.pow(113,It/4095)-1)/112;n[J]=Math.min(et,pt)}}var st=F[z],I=h(U,1+s[N]),mt=h(D,1+s[N]);if(N==0)for(var $=0;$<mt;$++)for(var lt=0;lt<I;lt++){var ut=_+($*I+lt)*2;st[$*(U>>>1)+lt]=b[ut]<<8|b[ut+1]}else{for(var Dt=[b,_*8],Mt=[],C=0,w=I*mt,H=[0,0],rt=0,ct=0;C<w;)for(u(Dt,H),rt=H[0],ct=H[1];rt>0;)Mt[C++]=ct,rt--;for(var ht=(N-1)%3,j=ht!=1?I:0,_t=ht!=0?mt:0,$=0;$<mt;$++)for(var gt=($+_t)*(U>>>1)+j,Tt=$*I,lt=0;lt<I;lt++)st[gt+lt]=e[Mt[Tt+lt]+512]*k;if(ht==2){for(var L=U>>>1,Ft=I*2,dt=mt*2,$=0;$<mt;$++)for(var lt=0;lt<Ft;lt++){var J=$*2*L+lt,bt=$*L+lt,vt=mt*L+bt;$==0?m(st,V,J,vt,bt,L):$==mt-1?g(st,V,J,vt,bt,L):v(st,V,J,vt,bt,L)}var Nt=st;st=V,V=Nt;for(var $=0;$<dt;$++)for(var lt=0;lt<I;lt++){var J=$*L+2*lt,bt=$*L+lt,vt=I+bt;lt==0?m(st,V,J,vt,bt,1):lt==I-1?g(st,V,J,vt,bt,1):v(st,V,J,vt,bt,1)}var Nt=st;st=V,V=Nt;for(var Pt=[],kt=2-~~((N-1)/3),Gt=0;Gt<3;Gt++)Pt[Gt]=Z>>14-Gt*2&3;var ee=Pt[kt];if(ee!=0)for(var $=0;$<dt;$++)for(var lt=0;lt<Ft;lt++){var J=$*L+lt;st[J]=st[J]<<ee}}}if(N==9&&z==3)for(var B=F[0],At=F[1],at=F[2],ft=F[3],$=0;$<D;$+=2)for(var lt=0;lt<U;lt+=2){var wt=$*U+lt,ut=($>>>1)*(U>>>1)+(lt>>>1),Rt=B[ut],Zt=At[ut]-2048,ce=at[ut]-2048,ge=ft[ut]-2048,qt=(Zt<<1)+Rt,Ue=(ce<<1)+Rt,Ze=Rt+ge,Yi=Rt-ge;O?(T[wt]=p(Ze),T[wt+1]=p(Ue),T[wt+U]=p(qt),T[wt+U+1]=p(Yi)):(T[wt]=p(qt),T[wt+1]=p(Ze),T[wt+U]=p(Yi),T[wt+U+1]=p(Ue))}_+=Q*4}else if(G==16388)_+=Q*4;else if(!(Y==8192||Y==8448||Y==9216))throw G.toString(16)}}}}}console.log(Date.now()-A)}return f}();q.decode._decodeLogLuv32=function(i,t,e,n,s,r){for(var a=i.width,o=a*4,l=0,c=new Uint8Array(o);l<n;){for(var u=0;u<o;){var h=t[e+l];if(l++,h<128){for(var d=0;d<h;d++)c[u+d]=t[e+l+d];u+=h,l+=h}else{h=h-126;for(var d=0;d<h;d++)c[u+d]=t[e+l];u+=h,l++}}for(var m=0;m<a;m++)s[r+0]=c[m],s[r+1]=c[m+a],s[r+2]=c[m+a*2],s[r+4]=c[m+a*3],r+=6}};q.decode._ljpeg_diff=function(i,t,e){var n=q.decode._getbithuff,s,r;return s=n(i,t,e[0],e),r=n(i,t,s,0),r&1<<s-1||(r-=(1<<s)-1),r};q.decode._decodeARW=function(i,t,e,n,s,r){var a=i.t256[0],o=i.t257[0],l=i.t258[0],c=i.isLE?q._binLE:q._binBE,u=a*o==n||a*o*1.5==n;if(!u){o+=8;var h=[e,0,0,0],d=new Uint16Array(32770),m=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],Z,v,g,M,A,p=0,f=q.decode._ljpeg_diff;for(d[0]=15,g=Z=0;Z<18;Z++)for(var b=32768>>>(m[Z]>>>8),v=0;v<b;v++)d[++g]=m[Z];for(M=a;M--;)for(A=0;A<o+1;A+=2)if(A==o&&(A=1),p+=f(t,h,d),A<o){var _=p&4095;q.decode._putsF(s,(A*a+M)*l,_<<16-l)}return}if(a*o*1.5==n){for(var Z=0;Z<n;Z+=3){var y=t[e+Z+0],T=t[e+Z+1],x=t[e+Z+2];s[r+Z]=T<<4|y>>>4,s[r+Z+1]=y<<4|x>>>4,s[r+Z+2]=x<<4|T>>>4}return}var E=new Uint16Array(16),A,M,S,R,U,D,N,k,z,Z,L,F=new Uint8Array(a+1);for(A=0;A<o;A++){for(var V=0;V<a;V++)F[V]=t[e++];for(L=0,M=0;M<a-30;L+=16){for(R=2047&(S=c.readUint(F,L)),U=2047&S>>>11,D=15&S>>>22,N=15&S>>>26,k=0;k<4&&128<<k<=R-U;k++);for(z=30,Z=0;Z<16;Z++)Z==D?E[Z]=R:Z==N?E[Z]=U:(E[Z]=((c.readUshort(F,L+(z>>3))>>>(z&7)&127)<<k)+U,E[Z]>2047&&(E[Z]=2047),z+=7);for(Z=0;Z<16;Z++,M+=2){var _=E[Z]<<1;q.decode._putsF(s,(A*a+M)*l,_<<16-l)}M-=M&1?1:31}}};q.decode._decodeNikon=function(i,t,e,n,s,r,a){var o=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],l=i.t256[0],c=i.t257[0],u=i.t258[0],h=0,d=0,m=q.decode._make_decoder,v=q.decode._getbithuff,g=t[0].exifIFD.makerNote,p=g.t150?g.t150:g.t140,f=0,b=p[f++],_=p[f++];(b==73||_==88)&&(f+=2110),b==70&&(h=2),u==14&&(h+=3);for(var y=[[0,0],[0,0]],T=i.isLE?q._binLE:q._binBE,S=0;S<2;S++)for(var x=0;x<2;x++)y[S][x]=T.readShort(p,f),f+=2;var E=1<<u&32767,A=0,M=T.readShort(p,f);f+=2,M>1&&(A=Math.floor(E/(M-1))),b==68&&_==32&&A>0&&(d=T.readShort(p,562));var S,R,U,D,N,k,z=[0,0],Z=m(o[h]),L=[n,0,0,0];for(R=0;R<c;R++)for(d&&R==d&&(Z=m(o[h+1])),U=0;U<l;U++){S=v(e,L,Z[0],Z),D=S&15,N=S>>>4,k=(v(e,L,D-N,0)<<1)+1<<N>>>1,k&1<<D-1||(k-=(1<<D)-(N==0?1:0)),U<2?z[U]=y[R&1][U]+=k:z[U&1]+=k;var F=Math.min(Math.max(z[U&1],0),(1<<u)-1),V=(R*l+U)*u;q.decode._putsF(r,V,F<<16-u)}};q.decode._putsF=function(i,t,e){e=e<<8-(t&7);var n=t>>>3;i[n]|=e>>>16,i[n+1]|=e>>>8,i[n+2]|=e};q.decode._getbithuff=function(i,t,e,n){var s=0;q.decode._get_byte;var r,a=t[0],o=t[1],l=t[2],c=t[3];if(e==0||l<0)return 0;for(;!c&&l<e&&(r=i[a++])!=-1&&!(c=s);)o=(o<<8)+r,l+=8;if(r=o<<32-l>>>32-e,n?(l-=n[r+1]>>>8,r=n[r+1]&255):l-=e,l<0)throw"e";return t[0]=a,t[1]=o,t[2]=l,t[3]=c,r};q.decode._make_decoder=function(i){var t,e,n,s,r,a=[];for(t=16;t!=0&&!i[t];t--);var o=17;for(a[0]=t,n=e=1;e<=t;e++)for(s=0;s<i[e];s++,++o)for(r=0;r<1<<t-e;r++)n<=1<<t&&(a[n++]=e<<8|i[o]);return a};q.decode._decodeNewJPEG=function(i,t,e,n,s,r){n=Math.min(n,t.length-e);var a=i.t347,o=a?a.length:0,l=new Uint8Array(o+n);if(a){for(var c=216,u=217,h=0,d=0;d<o-1&&!(a[d]==255&&a[d+1]==u);d++)l[h++]=a[d];var m=t[e],v=t[e+1];(m!=255||v!=c)&&(l[h++]=m,l[h++]=v);for(var d=2;d<n;d++)l[h++]=t[e+d]}else for(var d=0;d<n;d++)l[d]=t[e+d];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var g=i.t258[0],p=q.LosslessJpegDecode(l),f=p.length;if(g==16)if(i.isLE)for(var d=0;d<f;d++)s[r+(d<<1)]=p[d]&255,s[r+(d<<1)+1]=p[d]>>>8;else for(var d=0;d<f;d++)s[r+(d<<1)]=p[d]>>>8,s[r+(d<<1)+1]=p[d]&255;else if(g==14||g==12||g==10)for(var b=16-g,d=0;d<f;d++)q.decode._putsF(s,d*g,p[d]<<b);else if(g==8)for(var d=0;d<f;d++)s[r+d]=p[d];else throw new Error("unsupported bit depth "+g)}else{var _=new q.JpegDecoder;_.parse(l);for(var y=_.getData({width:_.width,height:_.height,forceRGB:!0,isSourcePDF:!1}),d=0;d<y.length;d++)s[r+d]=y[d]}i.t262[0]==6&&(i.t262[0]=2)};q.decode._decodeOldJPEGInit=function(i,t,e,n){var s=216,r=219,a=196,o=221,l=192,c=218,u=0,h=0,d,m,v=!1,g,p,f,b=i.t513,_=b?b[0]:0,y=i.t514,T=y?y[0]:0,x=i.t324||i.t273||b,E=i.t530,A=0,M=0,S=i.t277?i.t277[0]:1,R=i.t515;if(x&&(h=x[0],v=x.length>1),!v){if(t[e]==255&&t[e+1]==s)return{jpegOffset:e};if(b!=null&&(t[e+_]==255&&t[e+_+1]==s?u=e+_:log("JPEGInterchangeFormat does not point to SOI"),y==null?log("JPEGInterchangeFormatLength field is missing"):(_>=h||_+T<=h)&&log("JPEGInterchangeFormatLength field value is invalid"),u!=null))return{jpegOffset:u}}if(E!=null&&(A=E[0],M=E[1]),b!=null&&y!=null)if(T>=2&&_+T<=h){for(t[e+_+T-2]==255&&t[e+_+T-1]==s?d=new Uint8Array(T-2):d=new Uint8Array(T),g=0;g<d.length;g++)d[g]=t[e+_+g];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(d==null){var U=0,D=[];D[U++]=255,D[U++]=s;var N=i.t519;if(N==null)throw new Error("JPEGQTables tag is missing");for(g=0;g<N.length;g++)for(D[U++]=255,D[U++]=r,D[U++]=0,D[U++]=67,D[U++]=g,p=0;p<64;p++)D[U++]=t[e+N[g]+p];for(f=0;f<2;f++){var k=i[f==0?"t520":"t521"];if(k==null)throw new Error((f==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(g=0;g<k.length;g++){D[U++]=255,D[U++]=a;var z=19;for(p=0;p<16;p++)z+=t[e+k[g]+p];for(D[U++]=z>>>8,D[U++]=z&255,D[U++]=g|f<<4,p=0;p<16;p++)D[U++]=t[e+k[g]+p];for(p=0;p<z;p++)D[U++]=t[e+k[g]+16+p]}}if(D[U++]=255,D[U++]=l,D[U++]=0,D[U++]=8+3*S,D[U++]=8,D[U++]=i.height>>>8&255,D[U++]=i.height&255,D[U++]=i.width>>>8&255,D[U++]=i.width&255,D[U++]=S,S==1)D[U++]=1,D[U++]=17,D[U++]=0;else for(g=0;g<3;g++)D[U++]=g+1,D[U++]=g!=0?17:(A&15)<<4|M&15,D[U++]=g;R!=null&&R[0]!=0&&(D[U++]=255,D[U++]=o,D[U++]=0,D[U++]=4,D[U++]=R[0]>>>8&255,D[U++]=R[0]&255),d=new Uint8Array(D)}var Z=-1;for(g=0;g<d.length-1;){if(d[g]==255&&d[g+1]==l){Z=g;break}g++}if(Z==-1){var L=new Uint8Array(d.length+10+3*S);L.set(d);var F=d.length;if(Z=d.length,d=L,d[F++]=255,d[F++]=l,d[F++]=0,d[F++]=8+3*S,d[F++]=8,d[F++]=i.height>>>8&255,d[F++]=i.height&255,d[F++]=i.width>>>8&255,d[F++]=i.width&255,d[F++]=S,S==1)d[F++]=1,d[F++]=17,d[F++]=0;else for(g=0;g<3;g++)d[F++]=g+1,d[F++]=g!=0?17:(A&15)<<4|M&15,d[F++]=g}if(t[h]==255&&t[h+1]==c){var V=t[h+2]<<8|t[h+3];for(m=new Uint8Array(V+2),m[0]=t[h],m[1]=t[h+1],m[2]=t[h+2],m[3]=t[h+3],g=0;g<V-2;g++)m[g+4]=t[h+g+4]}else{m=new Uint8Array(8+2*S);var O=0;if(m[O++]=255,m[O++]=c,m[O++]=0,m[O++]=6+2*S,m[O++]=S,S==1)m[O++]=1,m[O++]=0;else for(g=0;g<3;g++)m[O++]=g+1,m[O++]=g<<4|g;m[O++]=0,m[O++]=63,m[O++]=0}return{jpegOffset:e,tables:d,sosMarker:m,sofPosition:Z}};q.decode._decodeOldJPEG=function(i,t,e,n,s,r){var a,o,l,c,u,h=q.decode._decodeOldJPEGInit(i,t,e,n);if(h.jpegOffset!=null)for(o=e+n-h.jpegOffset,c=new Uint8Array(o),a=0;a<o;a++)c[a]=t[h.jpegOffset+a];else{for(l=h.tables.length,c=new Uint8Array(l+h.sosMarker.length+n+2),c.set(h.tables),u=l,c[h.sofPosition+5]=i.height>>>8&255,c[h.sofPosition+6]=i.height&255,c[h.sofPosition+7]=i.width>>>8&255,c[h.sofPosition+8]=i.width&255,(t[e]!=255||t[e+1]!=SOS)&&(c.set(h.sosMarker,u),u+=sosMarker.length),a=0;a<n;a++)c[u++]=t[e+a];c[u++]=255,c[u++]=EOI}var d=new q.JpegDecoder;d.parse(c);for(var m=d.getData({width:d.width,height:d.height,forceRGB:!0,isSourcePDF:!1}),a=0;a<m.length;a++)s[r+a]=m[a];i.t262&&i.t262[0]==6&&(i.t262[0]=2)};q.decode._decodePackBits=function(i,t,e,n,s){for(var r=new Int8Array(i.buffer),a=new Int8Array(n.buffer),o=t+e;t<o;){var l=r[t];if(t++,l>=0&&l<128)for(var c=0;c<l+1;c++)a[s]=r[t],s++,t++;if(l>=-127&&l<0){for(var c=0;c<-l+1;c++)a[s]=r[t],s++;t++}}return s};q.decode._decodeThunder=function(i,t,e,n,s){for(var r=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],o=t+e,l=s*2,c=0;t<o;){var u=i[t],h=u>>>6,d=u&63;if(t++,h==3&&(c=d&15,n[l>>>1]|=c<<4*(1-l&1),l++),h==0)for(var m=0;m<d;m++)n[l>>>1]|=c<<4*(1-l&1),l++;if(h==2)for(var m=0;m<2;m++){var v=d>>>3*(1-m)&7;v!=4&&(c+=a[v],n[l>>>1]|=c<<4*(1-l&1),l++)}if(h==1)for(var m=0;m<3;m++){var v=d>>>2*(2-m)&3;v!=2&&(c+=r[v],n[l>>>1]|=c<<4*(1-l&1),l++)}}};q.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3};q.decode._lens=function(){var i=function(l,c,u,h){for(var d=0;d<c.length;d++)l[c[d]]=u+d*h},t="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",e="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",s="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",r="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";t=t.split(","),e=e.split(","),n=n.split(","),s=s.split(","),r=r.split(",");var a={},o={};return i(a,t,0,1),i(a,n,64,64),i(a,r,1792,64),i(o,e,0,1),i(o,s,64,64),i(o,r,1792,64),[a,o]}();q.decode._decodeG4=function(i,t,e,n,s,r,a){for(var o=q.decode,l=t<<3,c=0,u="",h=[],d=[],m=0;m<r;m++)d.push(0);d=o._makeDiff(d);for(var v=0,g=0,p=0,f=0,b=0,_=0,y="",T=0,x=Math.ceil(r/8)*8;l>>>3<t+e;){p=o._findDiff(d,v+(v==0?0:1),1-b),f=o._findDiff(d,p,b);var E=0;if(a==1&&(E=i[l>>>3]>>>7-(l&7)&1),a==2&&(E=i[l>>>3]>>>(l&7)&1),l++,u+=E,y=="H"){if(o._lens[b][u]!=null){var A=o._lens[b][u];u="",c+=A,A<64&&(o._addNtimes(h,c,b),v+=c,b=1-b,c=0,T--,T==0&&(y=""))}}else u=="0001"&&(u="",o._addNtimes(h,f-v,b),v=f),u=="001"&&(u="",y="H",T=2),o._dmap[u]!=null&&(g=p+o._dmap[u],o._addNtimes(h,g-v,b),v=g,u="",b=1-b);h.length==r&&y==""&&(o._writeBits(h,n,s*8+_*x),b=0,_++,v=0,d=o._makeDiff(h),h=[])}};q.decode._findDiff=function(i,t,e){for(var n=0;n<i.length;n+=2)if(i[n]>=t&&i[n+1]==e)return i[n]};q.decode._makeDiff=function(i){var t=[];i[0]==1&&t.push(0,1);for(var e=1;e<i.length;e++)i[e-1]!=i[e]&&t.push(e,i[e]);return t.push(i.length,0,i.length,1),t};q.decode._decodeG2=function(i,t,e,n,s,r,a){for(var o=q.decode,l=t<<3,c=0,u="",h=[],d=0,m=0,v=Math.ceil(r/8)*8;l>>>3<t+e;){var g=0;a==1&&(g=i[l>>>3]>>>7-(l&7)&1),a==2&&(g=i[l>>>3]>>>(l&7)&1),l++,u+=g,c=o._lens[d][u],c!=null&&(o._addNtimes(h,c,d),u="",c<64&&(d=1-d),h.length==r&&(o._writeBits(h,n,s*8+m*v),h=[],m++,d=0,l&7&&(l+=8-(l&7)),c>=64&&(l+=8)))}};q.decode._decodeG3=function(i,t,e,n,s,r,a,o){for(var l=q.decode,c=t<<3,u=0,h="",d=[],m=[],v=0;v<r;v++)d.push(0);for(var g=0,p=0,f=0,b=0,_=0,y=-1,T="",x=0,E=!0,A=Math.ceil(r/8)*8;c>>>3<t+e;){f=l._findDiff(m,g+(g==0?0:1),1-_),b=l._findDiff(m,f,_);var M=0;if(a==1&&(M=i[c>>>3]>>>7-(c&7)&1),a==2&&(M=i[c>>>3]>>>(c&7)&1),c++,h+=M,E){if(l._lens[_][h]!=null){var S=l._lens[_][h];h="",u+=S,S<64&&(l._addNtimes(d,u,_),_=1-_,u=0)}}else if(T=="H"){if(l._lens[_][h]!=null){var S=l._lens[_][h];h="",u+=S,S<64&&(l._addNtimes(d,u,_),g+=u,_=1-_,u=0,x--,x==0&&(T=""))}}else h=="0001"&&(h="",l._addNtimes(d,b-g,_),g=b),h=="001"&&(h="",T="H",x=2),l._dmap[h]!=null&&(p=f+l._dmap[h],l._addNtimes(d,p-g,_),g=p,h="",_=1-_);h.endsWith("000000000001")&&(y>=0&&l._writeBits(d,n,s*8+y*A),o&&(a==1&&(E=(i[c>>>3]>>>7-(c&7)&1)==1),a==2&&(E=(i[c>>>3]>>>(c&7)&1)==1),c++),h="",_=0,y++,g=0,m=l._makeDiff(d),d=[])}d.length==r&&l._writeBits(d,n,s*8+y*A)};q.decode._addNtimes=function(i,t,e){for(var n=0;n<t;n++)i.push(e)};q.decode._writeBits=function(i,t,e){for(var n=0;n<i.length;n++)t[e+n>>>3]|=i[n]<<7-(e+n&7)};q.decode._decodeLZW=q.decode._decodeLZW=function(){var i,t,e,n,s=0,r=0,a=0,o=0,l=function(){var p=i>>>3,f=t[p]<<16|t[p+1]<<8|t[p+2],b=f>>>24-(i&7)-r&(1<<r)-1;return i+=r,b},c=new Uint32Array(4096*4),u=0,h=function(p){if(p!=u){u=p,a=1<<p,o=a+1;for(var f=0;f<o+1;f++)c[4*f]=c[4*f+3]=f,c[4*f+1]=65535,c[4*f+2]=1}},d=function(p){r=p+1,s=o+1},m=function(p){for(var f=p<<2,b=c[f+2],_=n+b-1;f!=65535;)e[_--]=c[f],f=c[f+1];n+=b},v=function(p,f){var b=s<<2,_=p<<2;c[b]=c[(f<<2)+3],c[b+1]=_,c[b+2]=c[_+2]+1,c[b+3]=c[_+3],s++,s+1==1<<r&&r!=12&&r++},g=function(p,f,b,_,y,T){i=f<<3,t=p,e=_,n=y;var x=f+b<<3,E=0,A=0;for(h(T),d(T);i<x&&(E=l())!=o;){if(E==a){if(d(T),E=l(),E==o)break;m(E)}else E<s?(m(E),v(A,E)):(v(A,A),m(s-1));A=E}return n};return g}();q.tags={};q._types=function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var t={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:t},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}}();q._readIFD=function(i,t,e,n,s,r){var a=i.readUshort(t,e);e+=2;var o={};r.debug&&log("   ".repeat(s),n.length-1,">>>----------------");for(var l=0;l<a;l++){var c=i.readUshort(t,e);e+=2;var u=i.readUshort(t,e);e+=2;var h=i.readUint(t,e);e+=4;var d=i.readUint(t,e);e+=4;var m=[];if(u==1||u==7){var v=h<5?e-4:d;v+h>t.buffer.byteLength&&(h=t.buffer.byteLength-v),m=new Uint8Array(t.buffer,v,h)}if(u==2){var g=h<5?e-4:d,p=t[g],f=Math.max(0,Math.min(h-1,t.length-g));p<128||f==0?m.push(i.readASCII(t,g,f)):m=new Uint8Array(t.buffer,g,f)}if(u==3)for(var b=0;b<h;b++)m.push(i.readUshort(t,(h<3?e-4:d)+2*b));if(u==4||u==13)for(var b=0;b<h;b++)m.push(i.readUint(t,(h<2?e-4:d)+4*b));if(u==5||u==10)for(var _=u==5?i.readUint:i.readInt,b=0;b<h;b++)m.push([_(t,d+b*8),_(t,d+b*8+4)]);if(u==8)for(var b=0;b<h;b++)m.push(i.readShort(t,(h<3?e-4:d)+2*b));if(u==9)for(var b=0;b<h;b++)m.push(i.readInt(t,(h<2?e-4:d)+4*b));if(u==11)for(var b=0;b<h;b++)m.push(i.readFloat(t,d+b*4));if(u==12)for(var b=0;b<h;b++)m.push(i.readDouble(t,d+b*8));if(h!=0&&m.length==0){if(log(c,"unknown TIFF tag type: ",u,"num:",h),l==0)return;continue}if(r.debug&&log("   ".repeat(s),c,u,q.tags[c],m),o["t"+c]=m,!(c==330&&o.t272&&o.t272[0]=="DSLR-A100")&&(c==330||c==34665||c==34853||c==50740&&i.readUshort(t,i.readUint(m,0))<300||c==61440)){for(var y=c==50740?[i.readUint(m,0)]:m,T=[],b=0;b<y.length;b++)q._readIFD(i,t,y[b],T,s+1,r);c==330&&(o.subIFD=T),c==34665&&(o.exifIFD=T[0]),c==34853&&(o.gpsiIFD=T[0]),c==50740&&(o.dngPrvt=T[0]),c==61440&&(o.fujiIFD=T[0])}if(c==37500&&r.parseMN){var x=m;if(i.readASCII(x,0,5)=="Nikon")o.makerNote=q.decode(x.slice(10).buffer)[0];else if(i.readASCII(x,0,5)=="OLYMP"||i.readASCII(x,0,9)=="OM SYSTEM"){var E=[8208,8224,8240,8256,8272],A=[];q._readIFD(i,x,x[1]==77?16:x[5]==85?12:8,A,s+1,r);for(var M=o.makerNote=A.pop(),b=0;b<E.length;b++){var S="t"+E[b];M[S]!=null&&(q._readIFD(i,x,M[S][0],A,s+1,r),M[S]=A.pop())}M.t12288&&(q._readIFD(i,M.t12288,0,A,s+1,r),M.t12288=A.pop())}else if(i.readUshort(t,d)<300&&i.readUshort(t,d+4)<=12){var A=[];q._readIFD(i,t,d,A,s+1,r),o.makerNote=A[0]}}}return n.push(o),r.debug&&log("   ".repeat(s),"<<<---------------"),e};q._writeIFD=function(i,t,e,n,s){var r=Object.keys(s),a=r.length;s.exifIFD&&a--,s.gpsiIFD&&a--,i.writeUshort(e,n,a),n+=2;for(var o=n+a*12+4,l=0;l<r.length;l++){var c=r[l];if(!(c=="t34665"||c=="t34853")){c=="exifIFD"&&(c="t34665"),c=="gpsiIFD"&&(c="t34853");var u=parseInt(c.slice(1)),h=t.main[u];if(h==null&&(h=t.rest[u]),h==null||h==0)throw new Error("unknown type of tag: "+u);var d=s[c];if(u==34665){var m=q._writeIFD(i,t,e,o,s.exifIFD);d=[o],o=m[1]}if(u==34853){var m=q._writeIFD(i,q._types.gps,e,o,s.gpsiIFD);d=[o],o=m[1]}h==2&&(d=d[0]+"\0");var v=d.length;i.writeUshort(e,n,u),n+=2,i.writeUshort(e,n,h),n+=2,i.writeUint(e,n,v),n+=4;var g=[-1,1,1,2,4,8,0,1,0,4,8,0,8][h]*v,p=n;if(g>4&&(i.writeUint(e,n,o),p=o),h==1||h==7)for(var f=0;f<v;f++)e[p+f]=d[f];else if(h==2)i.writeASCII(e,p,d);else if(h==3)for(var f=0;f<v;f++)i.writeUshort(e,p+2*f,d[f]);else if(h==4)for(var f=0;f<v;f++)i.writeUint(e,p+4*f,d[f]);else if(h==5||h==10)for(var b=h==5?i.writeUint:i.writeInt,f=0;f<v;f++){var _=d[f],y=_[0],T=_[1];if(y==null)throw"e";b(e,p+8*f,y),b(e,p+8*f+4,T)}else if(h==9)for(var f=0;f<v;f++)i.writeInt(e,p+4*f,d[f]);else if(h==12)for(var f=0;f<v;f++)i.writeDouble(e,p+8*f,d[f]);else throw h;g>4&&(g+=g&1,o+=g),n+=4}}return[n,o]};q.toRGBA8=function(i,t){function e(Mt){return Mt<.0031308?12.92*Mt:1.055*Math.pow(Mt,1/2.4)-.055}var n=i.width,s=i.height,r=n*s,a=i.data,o=new Uint8Array(r*4),l=i.t262?i.t262[0]:2,c=i.t258?Math.min(32,i.t258[0]):1;i.t262==null&&c==1&&(l=0);var u=i.t277?i.t277[0]:i.t258?i.t258.length:[1,1,3,1,1,4,3][l],h=i.t339?i.t339[0]:null;if(l==1&&c==32&&h!=3)throw"e";var d=Math.ceil(u*c*n/8);if(l==0){t=1/256;for(var m=0;m<s;m++){var v=m*d,g=m*n;if(c==1)for(var p=0;p<n;p++){var f=g+p<<2,b=a[v+(p>>3)]>>7-(p&7)&1;o[f]=o[f+1]=o[f+2]=(1-b)*255,o[f+3]=255}if(c==4)for(var p=0;p<n;p++){var f=g+p<<2,b=a[v+(p>>1)]>>4-4*(p&1)&15;o[f]=o[f+1]=o[f+2]=(15-b)*17,o[f+3]=255}if(c==8)for(var p=0;p<n;p++){var f=g+p<<2,b=a[v+p];o[f]=o[f+1]=o[f+2]=255-b,o[f+3]=255}if(c==16)for(var p=0;p<n;p++){var f=g+p<<2,_=v+2*p,b=a[_+1]<<8|a[_];o[f]=o[f+1]=o[f+2]=Math.min(255,255-~~(b*t)),o[f+3]=255}}}else if(l==1){t==null&&(t=1/256);for(var y=a.length&3?null:new Float32Array(a.buffer),m=0;m<s;m++){var v=m*d,g=m*n;if(c==1)for(var p=0;p<n;p++){var f=g+p<<2,b=a[v+(p>>3)]>>7-(p&7)&1;o[f]=o[f+1]=o[f+2]=b*255,o[f+3]=255}if(c==2)for(var p=0;p<n;p++){var f=g+p<<2,b=a[v+(p>>2)]>>6-2*(p&3)&3;o[f]=o[f+1]=o[f+2]=b*85,o[f+3]=255}if(c==8)for(var p=0;p<n;p++){var f=g+p<<2,b=a[v+p*u];o[f]=o[f+1]=o[f+2]=b,o[f+3]=255}if(c==16)for(var p=0;p<n;p++){var f=g+p<<2,_=v+2*p,b=a[_+1]<<8|a[_];o[f]=o[f+1]=o[f+2]=Math.min(255,~~(b*t)),o[f+3]=255}if(c==32)for(var p=0;p<n;p++){var f=g+p<<2,_=(v>>>2)+p,b=y[_];o[f]=o[f+1]=o[f+2]=~~(.5+255*b),o[f+3]=255}}}else if(l==2)if(c==8){if(u==1)for(var p=0;p<r;p++)o[4*p]=o[4*p+1]=o[4*p+2]=a[p],o[4*p+3]=255;if(u==3)for(var p=0;p<r;p++){var f=p<<2,T=p*3;o[f]=a[T],o[f+1]=a[T+1],o[f+2]=a[T+2],o[f+3]=255}if(u>=4)for(var p=0;p<r;p++){var f=p<<2,T=p*u;o[f]=a[T],o[f+1]=a[T+1],o[f+2]=a[T+2],o[f+3]=a[T+3]}}else if(c==16){if(u==4)for(var p=0;p<r;p++){var f=p<<2,T=p*8+1;o[f]=a[T],o[f+1]=a[T+2],o[f+2]=a[T+4],o[f+3]=a[T+6]}if(u==3)for(var p=0;p<r;p++){var f=p<<2,T=p*6+1;o[f]=a[T],o[f+1]=a[T+2],o[f+2]=a[T+4],o[f+3]=255}}else if(c==32){for(var x=new Float32Array(a.buffer),E=0,p=0;p<x.length;p++)E=Math.min(E,x[p]);if(E<0)for(var p=0;p<a.length;p+=4){var A=a[p];a[p]=a[p+3],a[p+3]=A,A=a[p+1],a[p+1]=a[p+2],a[p+2]=A}for(var M=[],p=0;p<65536;p++)M.push(e(p/65535));for(var p=0;p<x.length;p++){var S=Math.max(0,Math.min(1,x[p]));x[p]=M[~~(.5+S*65535)]}if(u==3)for(var p=0;p<r;p++){var f=p<<2,T=p*3;o[f]=~~(.5+x[T]*255),o[f+1]=~~(.5+x[T+1]*255),o[f+2]=~~(.5+x[T+2]*255),o[f+3]=255}else if(u==4)for(var p=0;p<r;p++){var f=p<<2,T=p*4;o[f]=~~(.5+x[T]*255),o[f+1]=~~(.5+x[T+1]*255),o[f+2]=~~(.5+x[T+2]*255),o[f+3]=~~(.5+x[T+3]*255)}else throw u}else throw c;else if(l==3)for(var R=i.t320,U=1<<c,D=c==8&&u>1&&i.t338&&i.t338[0]!=0,m=0;m<s;m++)for(var N=0;N<n;N++){var p=m*n+N,f=p<<2,k=0,z=m*d;if(c==1)k=a[z+(N>>>3)]>>>7-(N&7)&1;else if(c==2)k=a[z+(N>>>2)]>>>6-2*(N&3)&3;else if(c==4)k=a[z+(N>>>1)]>>>4-4*(N&1)&15;else if(c==8)k=a[z+N*u];else throw c;o[f]=R[k]>>8,o[f+1]=R[U+k]>>8,o[f+2]=R[U+U+k]>>8,o[f+3]=D?a[z+N*u+1]:255}else if(l==5)for(var Z=u>4?1:0,p=0;p<r;p++){var f=p<<2,L=p*u;if(window.UDOC){var F=a[L],V=a[L+1],O=a[L+2],tt=a[L+3],ct=UDOC.C.cmykToRgb([F*(1/255),V*(1/255),O*(1/255),tt*(1/255)]);o[f]=~~(.5+255*ct[0]),o[f+1]=~~(.5+255*ct[1]),o[f+2]=~~(.5+255*ct[2])}else{var F=255-a[L],V=255-a[L+1],O=255-a[L+2],tt=(255-a[L+3])*(1/255);o[f]=~~(F*tt+.5),o[f+1]=~~(V*tt+.5),o[f+2]=~~(O*tt+.5)}o[f+3]=255*(1-Z)+a[L+4]*Z}else if(l==6&&i.t278)for(var G=i.t278[0],m=0;m<s;m+=G)for(var p=m*n,Y=G*n,Q=0;Q<Y;Q++){var f=4*(p+Q),L=3*p+4*(Q>>>1),O=a[L+(Q&1)],J=a[L+2]-128,ot=a[L+3]-128,St=O+((ot>>2)+(ot>>3)+(ot>>5)),pt=O-((J>>2)+(J>>4)+(J>>5))-((ot>>1)+(ot>>3)+(ot>>4)+(ot>>5)),It=O+(J+(J>>1)+(J>>2)+(J>>6));o[f]=Math.max(0,Math.min(255,St)),o[f+1]=Math.max(0,Math.min(255,pt)),o[f+2]=Math.max(0,Math.min(255,It)),o[f+3]=255}else if(l==32845)for(var m=0;m<s;m++)for(var N=0;N<n;N++){var L=(m*n+N)*6,f=(m*n+N)*4,et=a[L+1]<<8|a[L],et=Math.pow(2,(et+.5)/256-64),st=(a[L+3]+.5)/410,I=(a[L+5]+.5)/410,mt=9*st/(6*st-16*I+12),$=4*I/(6*st-16*I+12),lt=et,ut=mt*lt/$,O=lt,Dt=(1-mt-$)*lt/$,St=2.69*ut-1.276*O-.414*Dt,pt=-1.022*ut+1.978*O+.044*Dt,It=.061*ut-.224*O+1.163*Dt;o[f]=e(Math.min(St,1))*255,o[f+1]=e(Math.min(pt,1))*255,o[f+2]=e(Math.min(It,1))*255,o[f+3]=255}else log("Unknown Photometric interpretation: "+l);return o};q.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var t=["tif","tiff","dng","cr2","nef"],e=0;e<i.length;e++){var n=i[e],s=n.getAttribute("src");if(s!=null){var r=s.split(".").pop().toLowerCase();if(t.indexOf(r)!=-1){var a=new XMLHttpRequest;q._xhrs.push(a),q._imgs.push(n),a.open("GET",s),a.responseType="arraybuffer",a.onload=q._imgLoaded,a.send()}}}};q._xhrs=[];q._imgs=[];q._imgLoaded=function(i){var t=q._xhrs.indexOf(i.target),e=q._imgs[t];q._xhrs.splice(t,1),q._imgs.splice(t,1),e.setAttribute("src",q.bufferToURI(i.target.response))};q.bufferToURI=function(i){var t=q.decode(i),e=t,n=0,s=e[0];t[0].subIFD&&(e=e.concat(t[0].subIFD));for(var r=0;r<e.length;r++){var a=e[r];if(!(a.t258==null||a.t258.length<3)){var o=a.t256*a.t257;o>n&&(n=o,s=a)}}q.decodeImage(i,s,t);var l=q.toRGBA8(s),c=s.width,u=s.height,h=document.createElement("canvas");h.width=c,h.height=u;var d=h.getContext("2d"),m=new ImageData(new Uint8ClampedArray(l.buffer),c,u);return d.putImageData(m,0,0),h.toDataURL()};q._binBE={nextZero:function(i,t){for(;i[t]!=0;)t++;return t},readUshort:function(i,t){return i[t]<<8|i[t+1]},readShort:function(i,t){var e=q._binBE.ui8;return e[0]=i[t+1],e[1]=i[t+0],q._binBE.i16[0]},readInt:function(i,t){var e=q._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],q._binBE.i32[0]},readUint:function(i,t){var e=q._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],q._binBE.ui32[0]},readASCII:function(i,t,e){for(var n="",s=0;s<e;s++)n+=String.fromCharCode(i[t+s]);return n},readFloat:function(i,t){for(var e=q._binBE.ui8,n=0;n<4;n++)e[n]=i[t+3-n];return q._binBE.fl32[0]},readDouble:function(i,t){for(var e=q._binBE.ui8,n=0;n<8;n++)e[n]=i[t+7-n];return q._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e>>8&255,i[t+1]=e&255},writeInt:function(i,t,e){var n=q._binBE.ui8;q._binBE.i32[0]=e,i[t+3]=n[0],i[t+2]=n[1],i[t+1]=n[2],i[t+0]=n[3]},writeUint:function(i,t,e){i[t]=e>>24&255,i[t+1]=e>>16&255,i[t+2]=e>>8&255,i[t+3]=e>>0&255},writeASCII:function(i,t,e){for(var n=0;n<e.length;n++)i[t+n]=e.charCodeAt(n)},writeDouble:function(i,t,e){q._binBE.fl64[0]=e;for(var n=0;n<8;n++)i[t+n]=q._binBE.ui8[7-n]}};q._binBE.ui8=new Uint8Array(8);q._binBE.i16=new Int16Array(q._binBE.ui8.buffer);q._binBE.i32=new Int32Array(q._binBE.ui8.buffer);q._binBE.ui32=new Uint32Array(q._binBE.ui8.buffer);q._binBE.fl32=new Float32Array(q._binBE.ui8.buffer);q._binBE.fl64=new Float64Array(q._binBE.ui8.buffer);q._binLE={nextZero:q._binBE.nextZero,readUshort:function(i,t){return i[t+1]<<8|i[t]},readShort:function(i,t){var e=q._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],q._binBE.i16[0]},readInt:function(i,t){var e=q._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],q._binBE.i32[0]},readUint:function(i,t){var e=q._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],q._binBE.ui32[0]},readASCII:q._binBE.readASCII,readFloat:function(i,t){for(var e=q._binBE.ui8,n=0;n<4;n++)e[n]=i[t+n];return q._binBE.fl32[0]},readDouble:function(i,t){for(var e=q._binBE.ui8,n=0;n<8;n++)e[n]=i[t+n];return q._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e&255,i[t+1]=e>>8&255},writeInt:function(i,t,e){var n=q._binBE.ui8;q._binBE.i32[0]=e,i[t+0]=n[0],i[t+1]=n[1],i[t+2]=n[2],i[t+3]=n[3]},writeUint:function(i,t,e){i[t]=e>>>0&255,i[t+1]=e>>>8&255,i[t+2]=e>>>16&255,i[t+3]=e>>>24&255},writeASCII:q._binBE.writeASCII};q._copyTile=function(i,t,e,n,s,r,a,o){for(var l=Math.min(t,s-a),c=Math.min(e,r-o),u=0;u<c;u++)for(var h=(o+u)*s+a,d=u*t,m=0;m<l;m++)n[h+m]=i[d+m]};q._inflateRaw=function(){var i={};return i.H={},i.H.N=function(t,e){var n=Uint8Array,s=0,r=0,a=0,o=0,l=0,c=0,u=0,h=0,d=0,m,v;if(t[0]==3&&t[1]==0)return e||new n(0);var g=i.H,p=g.b,f=g.e,b=g.R,_=g.n,y=g.A,T=g.Z,x=g.m,E=e==null;for(E&&(e=new n(t.length>>>2<<5));s==0;){if(s=p(t,d,1),r=p(t,d+1,2),d+=3,r==0){d&7&&(d+=8-(d&7));var A=(d>>>3)+4,M=t[A-4]|t[A-3]<<8;E&&(e=i.H.W(e,h+M)),e.set(new n(t.buffer,t.byteOffset+A,M),h),d=A+M<<3,h+=M;continue}if(E&&(e=i.H.W(e,h+(1<<17))),r==1&&(m=x.J,v=x.h,c=511,u=31),r==2){a=f(t,d,5)+257,o=f(t,d+5,5)+1,l=f(t,d+10,4)+4,d+=14;for(var S=1,R=0;R<38;R+=2)x.Q[R]=0,x.Q[R+1]=0;for(var R=0;R<l;R++){var U=f(t,d+R*3,3);x.Q[(x.X[R]<<1)+1]=U,U>S&&(S=U)}d+=3*l,_(x.Q,S),y(x.Q,S,x.u),m=x.w,v=x.d,d=b(x.u,(1<<S)-1,a+o,t,d,x.v);var D=g.V(x.v,0,a,x.C);c=(1<<D)-1;var N=g.V(x.v,a,o,x.D);u=(1<<N)-1,_(x.C,D),y(x.C,D,m),_(x.D,N),y(x.D,N,v)}for(;;){var k=m[T(t,d)&c];d+=k&15;var z=k>>>4;if(!(z>>>8))e[h++]=z;else{if(z==256)break;var Z=h+z-254;if(z>264){var L=x.q[z-257];Z=h+(L>>>3)+f(t,d,L&7),d+=L&7}var F=v[T(t,d)&u];d+=F&15;var V=F>>>4,O=x.c[V],tt=(O>>>4)+p(t,d,O&15);for(d+=O&15;h<Z;)e[h]=e[h++-tt],e[h]=e[h++-tt],e[h]=e[h++-tt],e[h]=e[h++-tt];h=Z}}}return e.length==h?e:e.slice(0,h)},i.H.W=function(t,e){var n=t.length;if(e<=n)return t;var s=new Uint8Array(n<<1);return s.set(t,0),s},i.H.R=function(t,e,n,s,r,a){for(var o=i.H.e,l=i.H.Z,c=0;c<n;){var u=t[l(s,r)&e];r+=u&15;var h=u>>>4;if(h<=15)a[c]=h,c++;else{var d=0,m=0;h==16?(m=3+o(s,r,2),r+=2,d=a[c-1]):h==17?(m=3+o(s,r,3),r+=3):h==18&&(m=11+o(s,r,7),r+=7);for(var v=c+m;c<v;)a[c]=d,c++}}return r},i.H.V=function(t,e,n,s){for(var r=0,a=0,o=s.length>>>1;a<n;){var l=t[a+e];s[a<<1]=0,s[(a<<1)+1]=l,l>r&&(r=l),a++}for(;a<o;)s[a<<1]=0,s[(a<<1)+1]=0,a++;return r},i.H.n=function(t,e){for(var n=i.H.m,s=t.length,r,a,o,u,l,c=n.j,u=0;u<=e;u++)c[u]=0;for(u=1;u<s;u+=2)c[t[u]]++;var h=n.K;for(r=0,c[0]=0,a=1;a<=e;a++)r=r+c[a-1]<<1,h[a]=r;for(o=0;o<s;o+=2)l=t[o+1],l!=0&&(t[o]=h[l],h[l]++)},i.H.A=function(t,e,n){for(var s=t.length,r=i.H.m,a=r.r,o=0;o<s;o+=2)if(t[o+1]!=0)for(var l=o>>1,c=t[o+1],u=l<<4|c,h=e-c,d=t[o]<<h,m=d+(1<<h);d!=m;){var v=a[d]>>>15-e;n[v]=u,d++}},i.H.l=function(t,e){for(var n=i.H.m.r,s=15-e,r=0;r<t.length;r+=2){var a=t[r]<<e-t[r+1];t[r]=n[a]>>>s}},i.H.M=function(t,e,n){n=n<<(e&7);var s=e>>>3;t[s]|=n,t[s+1]|=n>>>8},i.H.I=function(t,e,n){n=n<<(e&7);var s=e>>>3;t[s]|=n,t[s+1]|=n>>>8,t[s+2]|=n>>>16},i.H.e=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8)>>>(e&7)&(1<<n)-1},i.H.b=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)&(1<<n)-1},i.H.Z=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)},i.H.i=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16|t[(e>>>3)+3]<<24)>>>(e&7)},i.H.m=function(){var t=Uint16Array,e=Uint32Array;return{K:new t(16),j:new t(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new t(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new e(32),J:new t(512),_:[],h:new t(32),$:[],w:new t(32768),C:[],v:[],d:new t(32768),D:[],u:new t(512),Q:[],r:new t(32768),s:new e(286),Y:new e(30),a:new e(19),t:new e(15e3),k:new t(65536),g:new t(32768)}}(),function(){for(var t=i.H.m,e=32768,n=0;n<e;n++){var s=n;s=(s&2863311530)>>>1|(s&1431655765)<<1,s=(s&3435973836)>>>2|(s&858993459)<<2,s=(s&4042322160)>>>4|(s&252645135)<<4,s=(s&4278255360)>>>8|(s&16711935)<<8,t.r[n]=(s>>>16|s<<16)>>>17}function r(a,o,l){for(;o--!=0;)a.push(0,l)}for(var n=0;n<32;n++)t.q[n]=t.S[n]<<3|t.T[n],t.c[n]=t.p[n]<<4|t.z[n];r(t._,144,8),r(t._,112,9),r(t._,24,7),r(t._,8,8),i.H.n(t._,9),i.H.A(t._,9,t.J),i.H.l(t._,9),r(t.$,32,5),i.H.n(t.$,5),i.H.A(t.$,5,t.h),i.H.l(t.$,5),r(t.Q,19,0),r(t.C,286,0),r(t.D,30,0),r(t.v,320,0)}(),i.H.N}();q.LosslessJpegDecode=function(){var i,t;function e(){return i[t++]}function n(){return i[t++]<<8|i[t++]}function s(p){for(var f=e(),b=[0,0,0,255],_=[],y=8,T=0;T<16;T++)_[T]=e();for(var T=0;T<16;T++)for(var x=0;x<_[T];x++){var E=r(b,0,T+1,1);b[E+3]=e()}var A=new Uint8Array(1<<y);p[f]=[new Uint8Array(b),A];for(var T=0;T<1<<y;T++){for(var M=y,S=T,R=0,U=0;b[R+3]==255&&M!=0;)U=S>>--M&1,R=b[R+U];A[T]=R}}function r(p,f,b,_){if(p[f+3]!=255)return 0;if(b==0)return f;for(var y=0;y<2;y++){p[f+y]==0&&(p[f+y]=p.length,p.push(0,0,_,255));var T=r(p,p[f+y],b-1,_+1);if(T!=0)return T}return 0}function a(p){for(var f=p.b,b=p.f;f<25&&p.a<p.d;){var _=p.data[p.a++];_==255&&!p.c&&p.a++,b=b<<8|_,f+=8}if(f<0)throw"e";p.b=f,p.f=b}function o(p,f){return f.b<p&&a(f),f.f>>(f.b-=p)&65535>>16-p}function l(p,f){var b=p[0],_=0,y=255,T=0;f.b<16&&a(f);var x=f.f>>f.b-8&255;for(_=p[1][x],y=b[_+3],f.b-=b[_+2];y==255;)T=f.f>>--f.b&1,_=b[_+T],y=b[_+3];return y}function c(p,f){return p<32768>>16-f&&(p+=-(1<<f)+1),p}function u(p,f){var b=l(p,f);if(b==0)return 0;if(b==16)return-32768;var _=o(b,f);return c(_,b)}function h(p,f,b,_,y,T){for(var x=0,E=0;E<T;E++){for(var A=E*f,M=0;M<f;M+=y){x++;for(var S=0;S<y;S++)p[A+M+S]=u(_[S],b)}if(b.e!=0&&x%b.e==0&&E!=0){for(var R=b.a,U=b.data;U[R]!=255||!(208<=U[R+1]&&U[R+1]<=215);)R--;b.a=R+2,b.f=0,b.b=0}}}function d(p,f){return c(o(p,f),p)}function m(p,f,b,_,y){for(var T=i.length-t,x=0;x<T;x+=4){var E=i[t+x];i[t+x]=i[t+x+3],i[t+x+3]=E;var E=i[t+x+1];i[t+x+1]=i[t+x+2],i[t+x+2]=E}for(var A=0;A<y;A++)for(var M=32768,S=32768,R=0;R<f;R+=2){var U=l(_,b),D=l(_,b);U!=0&&(M+=d(U,b)),D!=0&&(S+=d(D,b)),p[A*f+R]=M&65535,p[A*f+R+1]=S&65535}}function v(p){if(i=p,t=0,n()!=65496)throw"e";for(var f=[],b=0,_=0,y=0,T=[],x=[],E=[],A=0,M=0,S=0;;){var R=n();if(R==65535){t--;continue}var U=n();if(R==65475){_=e(),M=n(),S=n(),A=e();for(var D=0;D<A;D++){var N=e(),k=e(),z=e();if(z!=0)throw"e";f[N]=[D,k>>4,k&15]}}else if(R==65476)for(var Z=t+U-2;t<Z;)s(x);else if(R==65498){t++;for(var D=0;D<A;D++){var L=e(),F=f[L];E[F[0]]=x[e()>>>4],T[F[0]]=F.slice(1)}b=e(),t+=2;break}else R==65501?y=n():t+=U-2}var V=_>8?Uint16Array:Uint8Array,O=new V(M*S*A),tt={b:0,f:0,c:b==8,a:t,data:i,d:i.length,e:y};if(tt.c)m(O,S*A,tt,E[0],M);else{for(var ct=[],G=0,Y=0,D=0;D<A;D++){var Q=T[D],J=Q[0],ot=Q[1];J>G&&(G=J),ot>Y&&(Y=ot),ct.push(J*ot)}if(G!=1||Y!=1){if(A!=3||ct[1]!=1||ct[2]!=1||G!=2||Y!=1&&Y!=2)throw"e";for(var St=[],pt=0,D=0;D<A;D++){for(var It=0;It<ct[D];It++)St.push(E[D]);pt+=ct[D]}var et=S/G,st=M/Y,I=et*st;h(O,et*pt,tt,St,pt,st),g(O,b,et,st,pt-2,pt,pt,_);var mt=new Uint16Array(I*ct[0]);if(G==2&&Y==2){for(var D=0;D<I;D++)mt[4*D]=O[6*D],mt[4*D+1]=O[6*D+1],mt[4*D+2]=O[6*D+2],mt[4*D+3]=O[6*D+3];g(mt,b,et*4,st,0,1,1,_);for(var D=0;D<I;D++)O[6*D]=mt[4*D],O[6*D+1]=mt[4*D+1],O[6*D+2]=mt[4*D+2],O[6*D+3]=mt[4*D+3]}if(G==2&&Y==1){for(var D=0;D<I;D++)mt[2*D]=O[4*D],mt[2*D+1]=O[4*D+1];g(mt,b,et*2,st,0,1,1,_);for(var D=0;D<I;D++)O[4*D]=mt[2*D],O[4*D+1]=mt[2*D+1]}for(var $=O.slice(0),ot=0;ot<M;ot++)if(Y==2)for(var J=0;J<S;J++){var lt=(ot*S+J)*A,ut=((ot>>>1)*et+(J>>>1))*pt,Dt=(ot&1)*2+(J&1);O[lt]=$[ut+Dt],O[lt+1]=$[ut+4],O[lt+2]=$[ut+5]}else for(var J=0;J<S;J++){var lt=(ot*S+J)*A,ut=(ot*et+(J>>>1))*pt,Dt=J&1;O[lt]=$[ut+Dt],O[lt+1]=$[ut+2],O[lt+2]=$[ut+3]}}else if(h(O,S*A,tt,E,A,M),y==0)g(O,b,S,M,0,A,A,_);else for(var Mt=Math.floor(y/S),ot=0;ot<M;ot+=Mt){var C=O.slice(ot*S*A,(ot+Mt)*S*A);g(C,b,S,Mt,0,A,A,_),O.set(C,ot*S*A)}}return O}function g(p,f,b,_,y,T,x,E){for(var A=b*x,M=y;M<T;M++)p[M]+=1<<E-1;for(var S=x;S<A;S+=x)for(var M=y;M<T;M++)p[S+M]+=p[S+M-x];for(var R=1;R<_;R++){for(var U=R*A,M=y;M<T;M++)p[U+M]+=p[U+M-A];for(var S=x;S<A;S+=x)for(var M=y;M<T;M++){var D=U+S+M,N=D-A,k=p[D-x],z=0;if(f==0)z=0;else if(f==1)z=k;else if(f==2)z=p[N];else if(f==3)z=p[N-x];else if(f==4)z=k+(p[N]-p[N-x]);else if(f==5)z=k+(p[N]-p[N-x]>>>1);else if(f==6)z=p[N]+(k-p[N-x]>>>1);else if(f==7)z=k+p[N]>>>1;else throw f;p[D]+=z}}}return v}();(function(){var i=0,t=1,e=2,n=3,s=4,r=5,a=6,o=7,l=8,c=9,u=10,h=11,d=12,m=13,v=14,g=15,p=16,f=17,b=18;function _(L){var F=q._binBE.readUshort,V={b:F(L,0),i:L[2],C:L[3],u:L[4],q:F(L,5),k:F(L,7),e:F(L,9),l:F(L,11),s:L[13],d:F(L,14)};if(V.b!=18771||V.i>1||V.q<6||V.q%6||V.e<768||V.e%24||V.l!=768||V.k<V.l||V.k%V.l||V.k-V.e>=V.l||V.s>16||V.s!=V.k/V.l||V.s!=Math.ceil(V.e/V.l)||V.d!=V.q/6||V.u!=12&&V.u!=14&&V.u!=16||V.C!=16&&V.C!=0)throw"Invalid data";if(V.i==0)throw"Not implemented. We need this file!";return V.h=V.C==16,V.m=(V.h?V.l*2/3:V.l>>>1)|0,V.A=V.m+2,V.f=64,V.g=(1<<V.u)-1,V.n=4*V.u,V}function y(L,F){var V=new Array(F.s),O=4*F.s,tt=16+O;O&12&&(tt+=16-(O&12));for(var ct=0,G=16;ct<F.s;G+=4){var Y=q._binBE.readUint(L,G);V[ct]=L.slice(tt,tt+Y),V[ct].j=0,V[ct].a=0,tt+=Y,ct++}if(tt!=L.length)throw"Invalid data";return V}function T(L,F){for(var V=-F[4],O=0;V<=F[4];O++,V++)L[O]=V<=-276?-4:V<=-67?-3:V<=-18?-2:V<-0?-1:V<=F[0]?0:V<F[1]?1:V<F[2]?2:V<F[3]?3:4}function x(L,F,V){var O=[F,3*F+18,5*F+67,7*F+276,V];L.o=F,L.w=(O[4]+2*F)/(2*F+1)+1|0,L.v=Math.ceil(Math.log2(L.w)),L.t=9,T(L.c,O)}function E(L){var F={c:new Int8Array(2<<L.u)};return x(F,0,L.g),F}function A(L){for(var F=[[],[],[]],V=Math.max(2,L.w+32>>>6),O=0;O<3;O++)for(var tt=0;tt<41;tt++)F[O][tt]=[V,1];return F}function M(L){for(var F=-1,V=0;!V;F++)V=L[L.j]>>>7-L.a&1,L.a++,L.a&=7,L.a||L.j++;return F}function S(L,F){var V=0,O=8-L.a;if(L.j,L.a,F){if(F>=O)do V<<=O,F-=O,V|=L[L.j]&(1<<O)-1,L.j++,O=8;while(F>=8);F&&(V<<=F,O-=F,V|=L[L.j]>>>O&(1<<F)-1),L.a=8-O}return V}function R(L,F){var V=0;if(F<L)for(;V<=14&&F<<++V<L;);return V}function U(L,F,V,O,tt,ct,G,Y){Y==null&&(Y=0);var Q=ct+1,J=Q%2,ot=0,St,pt,It=O[tt],et=O[tt-1],st=O[tt-2][Q],I=et[Q-1],mt=et[Q],$=et[Q+1],lt=It[Q-1],ut=It[Q+1],Dt=Math.abs,Mt,C,w,H;if(J&&(Mt=Dt($-mt),C=Dt(st-mt),w=Dt(I-mt)),J){if(H=Mt>w&&C<Mt?st+I:Mt<w&&C<w?st+$:$+I,H=H+2*mt>>>2,Y){It[Q]=H;return}St=F.t*F.c[L.g+mt-st]+F.c[L.g+I-mt]}else H=mt>I&&mt>$||mt<I&&mt<$?ut+lt+2*mt>>>2:lt+ut>>>1,St=F.t*F.c[L.g+mt-I]+F.c[L.g+I-lt];pt=Dt(St);var rt=M(V);if(rt<L.n-F.v-1){var ht=R(G[pt][0],G[pt][1]);ot=S(V,ht)+(rt<<ht)}else ot=S(V,F.v)+1;ot=ot&1?-1-(ot>>>1):ot>>>1,G[pt][0]+=Dt(ot),G[pt][1]==L.f&&(G[pt][0]>>>=1,G[pt][1]>>>=1),G[pt][1]++,H=St<0?H-ot:H+ot,L.i&&(H<0?H+=F.w:H>L.g&&(H-=F.w)),It[Q]=H>=0?Math.min(H,L.g):0}function D(L,F,V){for(var O=L[0].length,tt=F;tt<=V;tt++)L[tt][0]=L[tt-1][1],L[tt][O-1]=L[tt-1][O-2]}function N(L){D(L,o,d),D(L,e,s),D(L,g,f)}function k(L,F,V,O,tt,ct,G,Y,Q,J,ot,St,pt){for(var It=0,et=1,st=tt<m&&tt>s;et<L.m;)It<L.m&&(U(L,F,V,O,tt,It,G[Q],L.h&&(st&&J||!st&&(ot||(It&St)==pt))),U(L,F,V,O,ct,It,G[Q],L.h&&(!st&&J||st&&(ot||(It&St)==pt))),It+=2),It>8&&(U(L,F,V,O,tt,et,Y[Q]),U(L,F,V,O,ct,et,Y[Q]),et+=2);N(O)}function z(L,F,V,O,tt,ct){k(L,F,V,O,e,o,tt,ct,0,0,1,0,8),k(L,F,V,O,l,g,tt,ct,1,0,1,0,8),k(L,F,V,O,n,c,tt,ct,2,1,0,3,0),k(L,F,V,O,u,p,tt,ct,0,0,0,3,2),k(L,F,V,O,s,h,tt,ct,1,0,0,3,2),k(L,F,V,O,d,f,tt,ct,2,1,0,3,0)}function Z(L,F,V,O,tt,ct){var G=ct.length,Y=L.l;tt+1==L.s&&(Y=L.e-tt*L.l);for(var Q=6*L.e*O+tt*L.l,J=0;J<6;J++){for(var ot=0;ot<Y;ot++){var St=ct[J%G][ot%G],pt;St==0?pt=e+(J>>>1):St==2?pt=g+(J>>>1):pt=o+J;var It=L.h?(ot*2/3&2147483646|ot%3&1)+(ot%3>>>1):ot>>>1;F[Q+ot]=V[pt][It+1]}Q+=L.e}}q._decompressRAF=function(L,F){var V=_(L),O=y(L,V),tt=E(V),ct=new Int16Array(V.e*V.q);F==null&&(F=V.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var G=[[i,n],[t,s],[r,h],[a,d],[m,p],[v,f]],Y=[],Q=0;Q<b;Q++)Y[Q]=new Uint16Array(V.A);for(var J=0;J<V.s;J++){for(var ot=A(tt),St=A(tt),Q=0;Q<b;Q++)for(var pt=0;pt<V.A;pt++)Y[Q][pt]=0;for(var It=0;It<V.d;It++){z(V,tt,O[J],Y,ot,St);for(var Q=0;Q<6;Q++)for(var pt=0;pt<V.A;pt++)Y[G[Q][0]][pt]=Y[G[Q][1]][pt];Z(V,ct,Y,It,J,F);for(var Q=e;Q<b;Q++)if([r,a,m,v].indexOf(Q)==-1)for(var pt=0;pt<V.A;pt++)Y[Q][pt]=0;N(Y)}}return ct}})();class G_ extends w_{constructor(t,e){super(t,e),Yt(this,"mapMaxPolarAngle",Math.PI/2.1),Yt(this,"restAzimuthDist",8e6),Yt(this,"dynamicZoomSpeed",!0),Yt(this,"dynamicMaxPolarAngle",!0),Yt(this,"_controlsMode","MAP"),this.controlsMode="MAP",this.screenSpacePanning=!1,this.minDistance=10,this.maxDistance=3e7,this.maxPolarAngle=1.2,this.enableDamping=!0,this.dampingFactor=.1,this.keyPanSpeed=5,this.listenToKeyEvents(e),this.addEventListener("change",this.onChange.bind(this))}get controlsMode(){return this._controlsMode}set controlsMode(t){this._controlsMode=t,this.controlsMode.toUpperCase()==="MAP"?(this.mouseButtons={LEFT:Ke.PAN,MIDDLE:Ke.DOLLY,RIGHT:Ke.ROTATE},this.touches={ONE:ln.PAN,TWO:ln.DOLLY_ROTATE}):(this.mouseButtons={LEFT:Ke.ROTATE,MIDDLE:Ke.DOLLY,RIGHT:Ke.PAN},this.touches={ONE:ln.ROTATE,TWO:ln.DOLLY_PAN})}onChange(){const t=Math.max(this.getPolarAngle(),.01),e=Math.max(this.getDistance(),1);this.dynamicZoomSpeed&&(this.zoomSpeed=Math.max(Math.log(e/1e3),1));const n=e>this.restAzimuthDist;this.minAzimuthAngle=n?0:-1/0,this.maxAzimuthAngle=n?0:1/0,this.dynamicMaxPolarAngle&&(this.maxPolarAngle=Math.min(Math.pow(1e7/e,2),this.mapMaxPolarAngle));const s=this.object;s instanceof Ie&&(s.far=ti.clamp(e/(t/1.5)*7,2e4,this.maxDistance*2),s.near=Math.max(s.far/5e4,this.minDistance),s.updateProjectionMatrix())}}class cv extends T_{constructor(){super(...arguments),Yt(this,"controls",this._createControls()),Yt(this,"_fogFactor",1)}get fogFactor(){return this._fogFactor}set fogFactor(t){this._fogFactor=t,this.controls.dispatchEvent({type:"change"})}get controlsMode(){return this.controls.controlsMode}set controlsMode(t){this.controls.controlsMode=t}_createControls(){const t=new G_(this.camera,this.container||this.renderer.domElement);return t.addEventListener("change",()=>{if(this.scene.fog instanceof yr){const e=t.getPolarAngle(),n=t.getDistance();this.scene.fog.density=e/(n+1)*this.fogFactor*.2}}),t}animate(){super.animate(),this.controls.update()}flyTo(t,e,n=!0){if(this.controls.target.copy(t),n){const s=this.camera.position;return new Promise(r=>{new pa(s).to({y:1e7,z:0},500).chain(new pa(s).to(e,2e3).easing(ni.Quintic.Out).onUpdate(()=>[this.controls.dispatchEvent({type:"change"})]).onComplete(()=>r())).start()})}else return this.camera.position.copy(e),Promise.resolve()}flyToObject(t,e={azimuthDeg:0,pitchDeg:30,distanceMultiplier:1.2,animate:!0}){const n=d=>{const m=new ke().setFromObject(d),v=m.getBoundingSphere(new fn);return v.center.setY(m.min.y),v},{center:s,radius:r}=n(t),a=r/Math.sin(ti.degToRad(this.camera.fov/2)),{azimuthDeg:o=0,pitchDeg:l=30,distanceMultiplier:c=1.5,animate:u=!0}=e,h=new W().setFromSphericalCoords(a*c,ti.degToRad(90-l),ti.degToRad(o)).add(s.clone().setY(0));if(this.controls.target.copy(s),u){const d=this.camera.position;return new Promise(m=>{new pa(d).to(h,2e3).easing(ni.Quintic.Out).onUpdate(()=>{this.controls.dispatchEvent({type:"change"});const v=n(t);this.controls.target.copy(v.center)}).start().onComplete(()=>m())})}else return this.camera.position.copy(h),Promise.resolve()}getState(){return{centerPosition:this.controls.target,cameraPosition:this.camera.position}}}performance.now();new W;new W;const z_=`<style>\r
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
`;class hv{constructor(t){Yt(this,"dom",document.createElement("div")),Yt(this,"plane"),Yt(this,"text"),Yt(this,"controls"),this.controls=t,this.dom.innerHTML=z_,this.dom.style.width="100%",this.dom.style.height="100%",this.plane=this.dom.querySelector("#tt-compass-plane"),this.text=this.dom.querySelector("#tt-compass-text"),t.addEventListener("change",()=>{this.plane&&this.text&&(this.plane.style.transform=`rotateX(${t.getPolarAngle()}rad)`,this.text.style.transform=`rotate(${t.getAzimuthalAngle()}rad)`)}),this.dom.onclick=()=>open("https://github.com/sxguojf/three-tile")}}class uv extends Xi{constructor(t){super(t),Yt(this,"dataType","image"),Yt(this,"attribution","ArcGIS"),Yt(this,"style","World_Imagery"),Yt(this,"url","https://server.arcgisonline.com/arcgis/rest/services/{style}/MapServer/tile/{z}/{y}/{x}"),Object.assign(this,t)}}class dv extends Xi{constructor(t){super(t),Yt(this,"dataType","lerc"),Yt(this,"attribution","ArcGIS"),Yt(this,"minLevel",5),Yt(this,"maxLevel",13),Yt(this,"url","https://server.arcgisonline.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer/tile/{z}/{y}/{x}"),Object.assign(this,t)}}class fv extends Xi{constructor(t){super(t),Yt(this,"dataType","image"),Yt(this,"attribution","Bing[GS(2024)0999号]"),Yt(this,"style","A"),Yt(this,"mkt","zh-CN"),Yt(this,"subdomains","123"),Yt(this,"url","https://t{s}.dynamic.tiles.ditu.live.com/comp/ch/{key}?mkt={mkt}&ur=CN&it={style}&n=z&og=804&cstl=vb"),Yt(this,"maxLevel",19),this.style=(t==null?void 0:t.style)||"A"}getUrl(t,e,n){const s={key:B_(n,t,e)};return super.getUrl(t,e,n,s)}}function B_(i,t,e){let n="";for(let s=i;s>0;s--){const r=1<<s-1;let a=0;t&r&&a++,e&r&&(a+=2),n+=a}return n}class pv extends Xi{constructor(t){super(t),Yt(this,"dataType","image"),Yt(this,"attribution","高德[GS(2021)6375号]"),Yt(this,"style","8"),Yt(this,"subdomains","1234"),Yt(this,"maxLevel",18),Yt(this,"url","https://webst0{s}.is.autonavi.com/appmaptile?style={style}&x={x}&y={y}&z={z}&scl=2"),Object.assign(this,t)}}new W;new gh;function mv(i,t,e=10){if(t.updateMatrixWorld(),t.position.y>1e4)return!1;let n=!1;const s=2*t.near*Math.tan(ti.degToRad(t.fov)/2),r=new W(0,-s/2,-t.near-s/10);r.applyMatrix4(t.matrixWorld);const a=i.getLocalInfoFromWorld(r);if(a){const o=e-(r.y-a.point.y);o>0&&(t.position.y+=o+.01,n=!0)}if(i.debug>0){let o=i.getObjectByName("checkPoint");o||(o=new De(new Co(1),new df({color:65280})),o.name="checkPoint",i.add(o)),o.position.copy(i.worldToLocal(r)),o.scale.setScalar(s/50),o instanceof De&&(o.material.color.set(n?15732480:65280),n&&console.log("Hit ground"))}return n}new Ef().load("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");function $n(i,t){this.x=i,this.y=t}$n.prototype={clone(){return new $n(this.x,this.y)},add(i){return this.clone()._add(i)},sub(i){return this.clone()._sub(i)},multByPoint(i){return this.clone()._multByPoint(i)},divByPoint(i){return this.clone()._divByPoint(i)},mult(i){return this.clone()._mult(i)},div(i){return this.clone()._div(i)},rotate(i){return this.clone()._rotate(i)},rotateAround(i,t){return this.clone()._rotateAround(i,t)},matMult(i){return this.clone()._matMult(i)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(i){return this.x===i.x&&this.y===i.y},dist(i){return Math.sqrt(this.distSqr(i))},distSqr(i){const t=i.x-this.x,e=i.y-this.y;return t*t+e*e},angle(){return Math.atan2(this.y,this.x)},angleTo(i){return Math.atan2(this.y-i.y,this.x-i.x)},angleWith(i){return this.angleWithSep(i.x,i.y)},angleWithSep(i,t){return Math.atan2(this.x*t-this.y*i,this.x*i+this.y*t)},_matMult(i){const t=i[0]*this.x+i[1]*this.y,e=i[2]*this.x+i[3]*this.y;return this.x=t,this.y=e,this},_add(i){return this.x+=i.x,this.y+=i.y,this},_sub(i){return this.x-=i.x,this.y-=i.y,this},_mult(i){return this.x*=i,this.y*=i,this},_div(i){return this.x/=i,this.y/=i,this},_multByPoint(i){return this.x*=i.x,this.y*=i.y,this},_divByPoint(i){return this.x/=i.x,this.y/=i.y,this},_unit(){return this._div(this.mag()),this},_perp(){const i=this.y;return this.y=this.x,this.x=-i,this},_rotate(i){const t=Math.cos(i),e=Math.sin(i),n=t*this.x-e*this.y,s=e*this.x+t*this.y;return this.x=n,this.y=s,this},_rotateAround(i,t){const e=Math.cos(i),n=Math.sin(i),s=t.x+e*(this.x-t.x)-n*(this.y-t.y),r=t.y+n*(this.x-t.x)+e*(this.y-t.y);return this.x=s,this.y=r,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:$n};$n.convert=function(i){if(i instanceof $n)return i;if(Array.isArray(i))return new $n(+i[0],+i[1]);if(i.x!==void 0&&i.y!==void 0)return new $n(+i.x,+i.y);throw new Error("Expected [x, y] or {x, y} point format")};typeof TextDecoder>"u"||new TextDecoder("utf-8");un.add=async function(i,t){};un.get=function(i){};function gv(i,t,e){var a;const{currentTarget:n,offsetX:s,offsetY:r}=i;if(n instanceof HTMLElement){const o=n.clientWidth,l=n.clientHeight,c=new yt(s/o*2-1,-(r/l)*2+1);return(a=t.getLocalInfoFromScreen(e,c))==null?void 0:a.location}else throw new Error("mouseEvent.currentTarget is not HTMLElement!")}new W;new ke;export{qc as $,mr as A,Me as B,Kt as C,Lf as D,j_ as E,Tf as F,J_ as G,Hs as H,K_ as I,Ie as J,ti as K,ki as L,q_ as M,bs as N,ue as O,ev as P,rn as Q,Aa as R,Ve as S,Ef as T,Do as U,yt as V,th as W,Ol as X,Ed as Y,cr as Z,eo as _,nv as a,ve as a0,_r as a1,gr as a2,Er as a3,te as a4,En as a5,Tr as a6,ke as a7,fn as a8,Z_ as a9,Dl as aA,ch as aB,mv as aC,rv as aD,Hf as aE,An as aF,mh as aG,yr as aH,R1 as aI,Pf as aJ,sv as aK,fv as aL,an as aM,Co as aN,q1 as aO,Nh as aP,Xi as aQ,vu as aR,_u as aS,gu as aT,pu as aU,fu as aV,du as aW,Vn as aX,H_ as aa,k_ as ab,Qc as ac,On as ad,Oe as ae,vd as af,_s as ag,$_ as ah,Uh as ai,dv as aj,uv as ak,cv as al,gv as am,hv as an,Sr as ao,df as ap,av as aq,pv as ar,mu as as,fo as at,Q_ as au,Zc as av,Nn as aw,je as ax,Sd as ay,Hd as az,Fi as b,tv as c,Jt as d,W as e,Sl as f,iv as g,X_ as h,qn as i,Pr as j,yu as k,cn as l,Be as m,Ra as n,Qn as o,Cd as p,Wn as q,Ro as r,hh as s,Sn as t,wo as u,ae as v,Re as w,Y_ as x,De as y,Pd as z};
