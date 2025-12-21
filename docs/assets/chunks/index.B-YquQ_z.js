/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="171",He={ROTATE:0,DOLLY:1,PAN:2},on={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ih=0,yo=1,sh=2,ql=1,rh=2,yn=3,Sn=0,Ne=1,Mn=2,Un=0,Ti=1,Mo=2,bo=3,So=4,ah=5,Yn=100,oh=101,lh=102,ch=103,hh=104,uh=200,dh=201,fh=202,ph=203,Jr=204,Qr=205,mh=206,gh=207,_h=208,vh=209,xh=210,yh=211,Mh=212,bh=213,Sh=214,qr=0,$r=1,ta=2,Ai=3,ea=4,na=5,ia=6,sa=7,Za=0,Th=1,Eh=2,Nn=0,wh=1,Ah=2,Rh=3,Lh=4,Ph=5,Ch=6,Ih=7,To="attached",Dh="detached",$l=300,Ri=301,Li=302,ra=303,aa=304,ir=306,oa=1e3,jn=1001,la=1002,Ge=1003,Uh=1004,us=1005,ln=1006,fr=1007,Jn=1008,Tn=1009,tc=1010,ec=1011,ss=1012,Ha=1013,ei=1014,en=1015,as=1016,Xa=1017,Ya=1018,Pi=1020,nc=35902,ic=1021,sc=1022,Xe=1023,rc=1024,ac=1025,Ei=1026,Ci=1027,Ka=1028,ja=1029,oc=1030,Ja=1031,Qa=1033,Bs=33776,ks=33777,Zs=33778,Hs=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,_a=37809,va=37810,xa=37811,ya=37812,Ma=37813,ba=37814,Sa=37815,Ta=37816,Ea=37817,wa=37818,Aa=37819,Ra=37820,La=37821,Xs=36492,Pa=36494,Ca=36495,lc=36283,Ia=36284,Da=36285,Ua=36286,Nh=2200,Fh=2201,Vh=2202,Ks=2300,Na=2301,pr=2302,Mi=2400,bi=2401,js=2402,qa=2500,Wh=2501,T1=0,E1=1,w1=2,Oh=3200,Gh=3201,$a=0,zh=1,Dn="",Ue="srgb",Ii="srgb-linear",Js="linear",oe="srgb",si=7680,Eo=519,Bh=512,kh=513,Zh=514,cc=515,Hh=516,Xh=517,Yh=518,Kh=519,Fa=35044,wo="300 es",cn=2e3,Qs=2001;class En{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const ns=Math.PI/180,Di=180/Math.PI;function nn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function to(i,t){return(i%t+t)%t}function jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jh(i,t,e){return i!==t?(e-i)/(t-i):0}function is(i,t,e){return(1-e)*i+e*t}function Qh(i,t,e,n){return is(i,t,1-Math.exp(-e*n))}function qh(i,t=1){return t-Math.abs(to(i,t*2)-t)}function $h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nu(i,t){return i+Math.random()*(t-i)}function iu(i){return i*(.5-Math.random())}function su(i){i!==void 0&&(Ao=i);let t=Ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(i){return i*ns}function au(i){return i*Di}function ou(i){return(i&i-1)===0&&i!==0}function lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*x,l*m,o*c);break;case"YXY":i.set(l*m,o*d,l*x,o*c);break;case"ZYZ":i.set(l*x,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qn={DEG2RAD:ns,RAD2DEG:Di,generateUUID:nn,clamp:jt,euclideanModulo:to,mapLinear:jh,inverseLerp:Jh,lerp:is,damp:Qh,pingpong:qh,smoothstep:$h,smootherstep:tu,randInt:eu,randFloat:nu,randFloatSpread:iu,seededRandom:su,degToRad:ru,radToDeg:au,isPowerOfTwo:ou,ceilPowerOfTwo:lu,floorPowerOfTwo:cu,setQuaternionFromProperEuler:hu,normalize:re,denormalize:$e};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],m=n[5],x=n[8],g=s[0],p=s[3],u=s[6],M=s[1],_=s[4],y=s[7],T=s[2],v=s[5],E=s[8];return r[0]=a*g+o*M+l*T,r[3]=a*p+o*_+l*v,r[6]=a*u+o*y+l*E,r[1]=c*g+d*M+h*T,r[4]=c*p+d*_+h*v,r[7]=c*u+d*y+h*E,r[2]=f*g+m*M+x*T,r[5]=f*p+m*_+x*v,r[8]=f*u+m*y+x*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,f=o*l-d*r,m=c*r-a*l,x=e*h+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=h*g,t[1]=(s*c-d*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(d*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(mr.makeScale(t,e)),this}rotate(t){return this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Ht;function hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){const i=rs("canvas");return i.style.display="block",i}const Ro={};function yi(i){i in Ro||(Ro[i]=!0,console.warn(i))}function du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lo=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mu(){const i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Js:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:Lo,fromXYZ:Po,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Lo,fromXYZ:Po,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const te=mu();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=rs("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _u=0;class uc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=nn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gr(s[a].image)):r.push(gr(s[a]))}else r=gr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0;class ye extends En{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=jn,s=jn,r=ln,a=Jn,o=Xe,l=Tn,c=ye.DEFAULT_ANISOTROPY,d=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=nn(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=$l;ye.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],x=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(m+1)/2,T=(u+1)/2,v=(d+f)/4,E=(h+g)/4,A=(x+p)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=v/n,r=E/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=v/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=A/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-x)*(p-x)+(h-g)*(h-g)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(h-g)/M,this.z=(f-d)/M,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xu extends En{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends xu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yu extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],x=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=x,t[e+3]=g;return}if(h!==g||l!==f||c!==m||d!==x){let p=1-o;const u=l*f+c*m+d*x+h*g,M=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const T=Math.sqrt(_),v=Math.atan2(T,u*M);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T}const y=o*M;if(l=l*p+f*y,c=c*p+m*y,d=d*p+x*y,h=h*p+g*y,p===1-o){const T=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=T,c*=T,d*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+d*h+l*m-c*f,t[e+1]=l*x+d*f+c*h-o*m,t[e+2]=c*x+d*m+o*f-l*h,t[e+3]=d*x-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),f=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h-f*m*x;break;case"YXZ":this._x=f*d*h+c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h+f*m*x;break;case"ZXY":this._x=f*d*h-c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h-f*m*x;break;case"ZYX":this._x=f*d*h-c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h+f*m*x;break;case"YZX":this._x=f*d*h+c*m*x,this._y=c*m*h+f*d*x,this._z=c*d*x-f*m*h,this._w=c*d*h-f*m*x;break;case"XZY":this._x=f*d*h-c*m*x,this._y=c*m*h-f*d*x,this._z=c*d*x+f*m*h,this._w=c*d*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Co.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new G,Co=new sn;class Ye{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),fs.subVectors(this.max,Hi),ai.subVectors(t.a,Hi),oi.subVectors(t.b,Hi),li.subVectors(t.c,Hi),wn.subVectors(oi,ai),An.subVectors(li,oi),Gn.subVectors(ai,li);let e=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Gn.z,Gn.y,wn.z,0,-wn.x,An.z,0,-An.x,Gn.z,0,-Gn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Gn.y,Gn.x,0];return!vr(e,ai,oi,li,fs)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,ai,oi,li,fs))?!1:(ps.crossVectors(wn,An),e=[ps.x,ps.y,ps.z],vr(e,ai,oi,li,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new G,new G,new G,new G,new G,new G,new G,new G],Je=new G,ds=new Ye,ai=new G,oi=new G,li=new G,wn=new G,An=new G,Gn=new G,Hi=new G,fs=new G,ps=new G,zn=new G;function vr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);const o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),c=e.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Mu=new Ye,Xi=new G,xr=new G;class dn{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(xr)),this.expandByPoint(Xi.copy(t.center).sub(xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new G,yr=new G,ms=new G,Rn=new G,Mr=new G,gs=new G,br=new G;class Fi{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yr.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(yr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ms),o=Rn.dot(this.direction),l=-Rn.dot(ms),c=Rn.lengthSq(),d=Math.abs(1-a*a);let h,f,m,x;if(d>0)if(h=a*l-o,f=a*o-l,x=r*d,h>=0)if(f>=-x)if(f<=x){const g=1/d;h*=g,f*=g,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yr).addScaledVector(ms,f),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Mr.subVectors(e,t),gs.subVectors(n,t),br.crossVectors(Mr,gs);let a=this.direction.dot(br),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const l=o*this.direction.dot(gs.crossVectors(Rn,gs));if(l<0)return null;const c=o*this.direction.dot(Mr.cross(Rn));if(c<0||l+c>a)return null;const d=-o*Rn.dot(br);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,a,o,l,c,d,h,f,m,x,g,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,f,m,x,g,p)}set(t,e,n,s,r,a,o,l,c,d,h,f,m,x,g,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=x,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*d,m=a*h,x=o*d,g=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+x*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*d,m=l*h,x=c*d,g=c*h;e[0]=f+g*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=m*o-x,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*d,m=l*h,x=c*d,g=c*h;e[0]=f-g*o,e[4]=-a*h,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*d,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*d,m=a*h,x=o*d,g=o*h;e[0]=l*d,e[4]=x*c-m,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*d,e[4]=g-f*h,e[8]=x*h+m,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+x,e[10]=f-g*h}else if(t.order==="XZY"){const f=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+g,e[5]=a*d,e[9]=m*h-x,e[2]=x*h-m,e[6]=o*d,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bu,t,Su)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Ln.crossVectors(n,We),Ln.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Ln.crossVectors(n,We)),Ln.normalize(),_s.crossVectors(We,Ln),s[0]=Ln.x,s[4]=_s.x,s[8]=We.x,s[1]=Ln.y,s[5]=_s.y,s[9]=We.y,s[2]=Ln.z,s[6]=_s.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],m=n[13],x=n[2],g=n[6],p=n[10],u=n[14],M=n[3],_=n[7],y=n[11],T=n[15],v=s[0],E=s[4],A=s[8],b=s[12],S=s[1],P=s[5],D=s[9],I=s[13],U=s[2],k=s[6],z=s[10],H=s[14],L=s[3],N=s[7],V=s[11],W=s[15];return r[0]=a*v+o*S+l*U+c*L,r[4]=a*E+o*P+l*k+c*N,r[8]=a*A+o*D+l*z+c*V,r[12]=a*b+o*I+l*H+c*W,r[1]=d*v+h*S+f*U+m*L,r[5]=d*E+h*P+f*k+m*N,r[9]=d*A+h*D+f*z+m*V,r[13]=d*b+h*I+f*H+m*W,r[2]=x*v+g*S+p*U+u*L,r[6]=x*E+g*P+p*k+u*N,r[10]=x*A+g*D+p*z+u*V,r[14]=x*b+g*I+p*H+u*W,r[3]=M*v+_*S+y*U+T*L,r[7]=M*E+_*P+y*k+T*N,r[11]=M*A+_*D+y*z+T*V,r[15]=M*b+_*I+y*H+T*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],m=t[14],x=t[3],g=t[7],p=t[11],u=t[15];return x*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*m-n*l*m)+g*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*d-r*l*d)+p*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*f+s*a*h-n*a*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],m=t[11],x=t[12],g=t[13],p=t[14],u=t[15],M=h*p*c-g*f*c+g*l*m-o*p*m-h*l*u+o*f*u,_=x*f*c-d*p*c-x*l*m+a*p*m+d*l*u-a*f*u,y=d*g*c-x*h*c+x*o*m-a*g*m-d*o*u+a*h*u,T=x*h*l-d*g*l-x*o*f+a*g*f+d*o*p-a*h*p,v=e*M+n*_+s*y+r*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=M*E,t[1]=(g*f*r-h*p*r-g*s*m+n*p*m+h*s*u-n*f*u)*E,t[2]=(o*p*r-g*l*r+g*s*c-n*p*c-o*s*u+n*l*u)*E,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*m-n*l*m)*E,t[4]=_*E,t[5]=(d*p*r-x*f*r+x*s*m-e*p*m-d*s*u+e*f*u)*E,t[6]=(x*l*r-a*p*r-x*s*c+e*p*c+a*s*u-e*l*u)*E,t[7]=(a*f*r-d*l*r+d*s*c-e*f*c-a*s*m+e*l*m)*E,t[8]=y*E,t[9]=(x*h*r-d*g*r-x*n*m+e*g*m+d*n*u-e*h*u)*E,t[10]=(a*g*r-x*o*r+x*n*c-e*g*c-a*n*u+e*o*u)*E,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*m-e*o*m)*E,t[12]=T*E,t[13]=(d*g*s-x*h*s+x*n*f-e*g*f-d*n*p+e*h*p)*E,t[14]=(x*o*s-a*g*s-x*n*l+e*g*l+a*n*p-e*o*p)*E,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,f=r*c,m=r*d,x=r*h,g=a*d,p=a*h,u=o*h,M=l*c,_=l*d,y=l*h,T=n.x,v=n.y,E=n.z;return s[0]=(1-(g+u))*T,s[1]=(m+y)*T,s[2]=(x-_)*T,s[3]=0,s[4]=(m-y)*v,s[5]=(1-(f+u))*v,s[6]=(p+M)*v,s[7]=0,s[8]=(x+_)*E,s[9]=(p-M)*E,s[10]=(1-(f+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const a=ci.set(s[4],s[5],s[6]).length(),o=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/r,d=1/a,h=1/o;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=d,Qe.elements[5]*=d,Qe.elements[6]*=d,Qe.elements[8]*=h,Qe.elements[9]*=h,Qe.elements[10]*=h,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=cn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,x;if(o===cn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Qs)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),f=(e+t)*c,m=(n+s)*d;let x,g;if(o===cn)x=(a+r)*h,g=-2*h;else if(o===Qs)x=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new G,Qe=new Jt,bu=new G(0,0,0),Su=new G(1,1,1),Ln=new G,_s=new G,We=new G,Io=new Jt,Do=new sn;class rn{constructor(t=0,e=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Io,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Do.setFromEuler(this),this.setFromQuaternion(Do,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tu=0;const Uo=new G,hi=new sn,gn=new Jt,vs=new G,Yi=new G,Eu=new G,wu=new sn,No=new G(1,0,0),Fo=new G(0,1,0),Vo=new G(0,0,1),Wo={type:"added"},Au={type:"removed"},ui={type:"childadded",child:null},Sr={type:"childremoved",child:null};class ue extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new G,e=new rn,n=new sn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ht}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(No,t)}rotateY(t){return this.rotateOnAxis(Fo,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(No,t)}translateY(t){return this.translateOnAxis(Fo,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Yi,vs,this.up):gn.lookAt(vs,Yi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(gn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,Eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ue.DEFAULT_UP=new G(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new G,_n=new G,Tr=new G,vn=new G,di=new G,fi=new G,Oo=new G,Er=new G,wr=new G,Ar=new G,Rr=new ne,Lr=new ne,Pr=new ne;class tn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),_n.subVectors(n,e),Tr.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(_n),l=qe.dot(Tr),c=_n.dot(_n),d=_n.dot(Tr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,x=(a*d-o*l)*f;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Rr.setScalar(0),Lr.setScalar(0),Pr.setScalar(0),Rr.fromBufferAttribute(t,e),Lr.fromBufferAttribute(t,n),Pr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rr,r.x),a.addScaledVector(Lr,r.y),a.addScaledVector(Pr,r.z),a}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),_n.subVectors(t,e),qe.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),qe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,n),fi.subVectors(r,n),Er.subVectors(t,n);const l=di.dot(Er),c=fi.dot(Er);if(l<=0&&c<=0)return e.copy(n);wr.subVectors(t,s);const d=di.dot(wr),h=fi.dot(wr);if(d>=0&&h<=d)return e.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(di,a);Ar.subVectors(t,r);const m=di.dot(Ar),x=fi.dot(Ar);if(x>=0&&m<=x)return e.copy(r);const g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(fi,o);const p=d*x-m*h;if(p<=0&&h-d>=0&&m-x>=0)return Oo.subVectors(r,s),o=(h-d)/(h-d+(m-x)),e.copy(s).addScaledVector(Oo,o);const u=1/(p+g+f);return a=g*u,o=f*u,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=to(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Cr(a,r,t+1/3),this.g=Cr(a,r,t),this.b=Cr(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return te.fromWorkingColorSpace(Se.copy(this),t),Math.round(jt(Se.r*255,0,255))*65536+Math.round(jt(Se.g*255,0,255))*256+Math.round(jt(Se.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ue){te.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(xs);const n=is(Pn.h,xs.h,e),s=is(Pn.s,xs.s,e),r=is(Pn.l,xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Yt;Yt.NAMES=fc;let Ru=0;class Vn extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=Ti,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class no extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new G,ys=new Wt;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$e(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$e(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$e(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$e(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class pc extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mc extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lu=0;const Ze=new Jt,Ir=new ue,pi=new G,Oe=new Ye,Ki=new Ye,xe=new G;class Ke extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?mc:pc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Oe.min,Ki.min),Oe.expandByPoint(xe),xe.addVectors(Oe.max,Ki.max),Oe.expandByPoint(xe)):(Oe.expandByPoint(Ki.min),Oe.expandByPoint(Ki.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)xe.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(t,c),xe.add(pi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new G,l[A]=new G;const c=new G,d=new G,h=new G,f=new Wt,m=new Wt,x=new Wt,g=new G,p=new G;function u(A,b,S){c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,S),d.sub(c),h.sub(c),m.sub(f),x.sub(f);const P=1/(m.x*x.y-x.x*m.y);isFinite(P)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(P),o[A].add(g),o[b].add(g),o[S].add(g),l[A].add(p),l[b].add(p),l[S].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,b=M.length;A<b;++A){const S=M[A],P=S.start,D=S.count;for(let I=P,U=P+D;I<U;I+=3)u(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const _=new G,y=new G,T=new G,v=new G;function E(A){T.fromBufferAttribute(s,A),v.copy(T);const b=o[A];_.copy(b),_.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(v,b);const P=y.dot(l[A])<0?-1:1;a.setXYZW(A,_.x,_.y,_.z,P)}for(let A=0,b=M.length;A<b;++A){const S=M[A],P=S.start,D=S.count;for(let I=P,U=P+D;I<U;I+=3)E(t.getX(I+0)),E(t.getX(I+1)),E(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,d=new G,h=new G;if(t)for(let f=0,m=t.count;f<m;f+=3){const x=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,x=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*d;for(let u=0;u<d;u++)f[x++]=c[m++]}return new Ee(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new Jt,Bn=new Fi,Ms=new dn,zo=new G,bs=new G,Ss=new G,Ts=new G,Dr=new G,Es=new G,Bo=new G,ws=new G;class Pe extends ue{constructor(t=new Ke,e=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Dr.fromBufferAttribute(h,t),a?Es.addScaledVector(Dr,d):Es.addScaledVector(Dr.sub(e),d))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Ms.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ms,zo)===null||Bn.origin.distanceToSquared(zo)>(t.far-t.near)**2))&&(Go.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Go),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=f.length;x<g;x++){const p=f[x],u=a[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,T=_;y<T;y+=3){const v=o.getX(y),E=o.getX(y+1),A=o.getX(y+2);s=As(this,u,t,n,c,d,h,v,E,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,u=g;p<u;p+=3){const M=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);s=As(this,a,t,n,c,d,h,M,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=f.length;x<g;x++){const p=f[x],u=a[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,T=_;y<T;y+=3){const v=y,E=y+1,A=y+2;s=As(this,u,t,n,c,d,h,v,E,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,u=g;p<u;p+=3){const M=p,_=p+1,y=p+2;s=As(this,a,t,n,c,d,h,M,_,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Pu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Sn,o),l===null)return null;ws.copy(o),ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:i}}function As(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,bs),i.getVertexPosition(l,Ss),i.getVertexPosition(c,Ts);const d=Pu(i,t,e,n,bs,Ss,Ts,Bo);if(d){const h=new G;tn.getBarycoord(Bo,bs,Ss,Ts,h),s&&(d.uv=tn.getInterpolatedAttribute(s,o,l,c,h,new Wt)),r&&(d.uv1=tn.getInterpolatedAttribute(r,o,l,c,h,new Wt)),a&&(d.normal=tn.getInterpolatedAttribute(a,o,l,c,h,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};tn.getNormal(bs,Ss,Ts,f.normal),d.face=f,d.barycoord=h}return d}class os extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(h,2));function x(g,p,u,M,_,y,T,v,E,A,b){const S=y/E,P=T/A,D=y/2,I=T/2,U=v/2,k=E+1,z=A+1;let H=0,L=0;const N=new G;for(let V=0;V<z;V++){const W=V*P-I;for(let $=0;$<k;$++){const st=$*S-D;N[g]=st*M,N[p]=W*_,N[u]=U,c.push(N.x,N.y,N.z),N[g]=0,N[p]=0,N[u]=v>0?1:-1,d.push(N.x,N.y,N.z),h.push($/E),h.push(1-V/A),H+=1}}for(let V=0;V<A;V++)for(let W=0;W<E;W++){const $=f+W+k*V,st=f+W+k*(V+1),O=f+(W+1)+k*(V+1),Y=f+(W+1)+k*V;l.push($,st,Y),l.push(st,O,Y),L+=6}o.addGroup(m,L,b),m+=L,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const s in n)t[s]=n[s]}return t}function Cu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Iu={clone:Ui,merge:Re};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _c extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new G,ko=new Wt,Zo=new Wt;class Le extends _c{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Di*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,ko,Zo),e.subVectors(Zo,ko)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Nu extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(mi,gi,t,e);s.layers=this.layers,this.add(s);const r=new Le(mi,gi,t,e);r.layers=this.layers,this.add(r);const a=new Le(mi,gi,t,e);a.layers=this.layers,this.add(a);const o=new Le(mi,gi,t,e);o.layers=this.layers,this.add(o);const l=new Le(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new Le(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class io extends ye{constructor(t,e,n,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fu extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new os(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Un});r.uniforms.tEquirect.value=e;const a=new Pe(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=ln),new Nu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class sr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new sr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vu extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class A1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new G;class xc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$e(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$e(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$e(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$e(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ho=new G,Xo=new ne,Yo=new ne,Wu=new G,Ko=new Jt,Rs=new G,Ur=new dn,jo=new Jt,Nr=new Fi;class R1 extends Pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=To,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ye),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Rs),this.boundingBox.expandByPoint(Rs)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Rs),this.boundingSphere.expandByPoint(Rs)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(s),t.ray.intersectsSphere(Ur)!==!1&&(jo.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(jo),!(this.boundingBox!==null&&Nr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===To?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Xo.fromBufferAttribute(s.attributes.skinIndex,t),Yo.fromBufferAttribute(s.attributes.skinWeight,t),Ho.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Yo.getComponent(r);if(a!==0){const o=Xo.getComponent(r);Ko.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Wu.copy(Ho).applyMatrix4(Ko),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ou extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yc extends ye{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ge,d=Ge,h,f){super(null,a,o,l,c,d,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jo=new Jt,Gu=new Jt;class Mc{constructor(t=[],e=[]){this.uuid=nn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Gu;Jo.multiplyMatrices(o,e[r]),Jo.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Mc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new yc(e,t,t,Xe,en);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ou),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class Qo extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _i=new Jt,qo=new Jt,Ls=[],$o=new Ye,zu=new Jt,ji=new Pe,Ji=new dn;class L1 extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),$o.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union($o)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Ji.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),t.ray.intersectsSphere(Ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),qo.multiplyMatrices(n,_i),ji.matrixWorld=qo,ji.raycast(t,Ls);for(let a=0,o=Ls.length;a<o;a++){const l=Ls[a];l.instanceId=r,l.object=this,e.push(l)}Ls.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yc(new Float32Array(s*this.count),s,this.count,Ka,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Fr=new G,Bu=new G,ku=new Ht;class In{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fr.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ku.getNormalMatrix(t),s=this.coplanarPoint(Fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new dn,Ps=new G;class rr{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],f=s[7],m=s[8],x=s[9],g=s[10],p=s[11],u=s[12],M=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-m,y-u).normalize(),n[1].setComponents(l+r,f+c,p+m,y+u).normalize(),n[2].setComponents(l+a,f+d,p+x,y+M).normalize(),n[3].setComponents(l-a,f-d,p-x,y-M).normalize(),n[4].setComponents(l-o,f-h,p-g,y-_).normalize(),e===cn)n[5].setComponents(l+o,f+h,p+g,y+_).normalize();else if(e===Qs)n[5].setComponents(o,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ps.x=s.normal.x>0?t.max.x:t.min.x,Ps.y=s.normal.y>0?t.max.y:t.min.y,Ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zu extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qs=new G,$s=new G,tl=new Jt,Qi=new Fi,Cs=new dn,Vr=new G,el=new G;class bc extends ue{constructor(t=new Ke,e=new Zu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qs.fromBufferAttribute(e,s-1),$s.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qs.distanceTo($s);t.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;tl.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=m,p=x-1;g<p;g+=c){const u=d.getX(g),M=d.getX(g+1),_=Is(this,t,Qi,l,u,M);_&&e.push(_)}if(this.isLineLoop){const g=d.getX(x-1),p=d.getX(m),u=Is(this,t,Qi,l,g,p);u&&e.push(u)}}else{const m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let g=m,p=x-1;g<p;g+=c){const u=Is(this,t,Qi,l,g,g+1);u&&e.push(u)}if(this.isLineLoop){const g=Is(this,t,Qi,l,x-1,m);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Is(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(qs.fromBufferAttribute(a,s),$s.fromBufferAttribute(a,r),e.distanceSqToSegment(qs,$s,Vr,el)>n)return;Vr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Vr);if(!(l<t.near||l>t.far))return{distance:l,point:el.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const nl=new G,il=new G;class P1 extends bc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)nl.fromBufferAttribute(e,s),il.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nl.distanceTo(il);t.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C1 extends bc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Hu extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sl=new Jt,Va=new Fi,Ds=new dn,Us=new G;class I1 extends ue{constructor(t=new Ke,e=new Hu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;sl.copy(s).invert(),Va.copy(t.ray).applyMatrix4(sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=f,g=m;x<g;x++){const p=c.getX(x);Us.fromBufferAttribute(h,p),rl(Us,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m;x<g;x++)Us.fromBufferAttribute(h,x),rl(Us,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rl(i,t,e,n,s,r,a){const o=Va.distanceSqToPoint(i);if(o<e){const l=new G;Va.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ns extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Sc extends ye{constructor(t,e,n,s,r,a,o,l,c,d=Ei){if(d!==Ei&&d!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ei&&(n=ei),n===void 0&&d===Ci&&(n=Pi),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ar extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,f=e/l,m=[],x=[],g=[],p=[];for(let u=0;u<d;u++){const M=u*f-a;for(let _=0;_<c;_++){const y=_*h-r;x.push(y,-M,0),g.push(0,0,1),p.push(_/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<o;M++){const _=M+c*u,y=M+c*(u+1),T=M+1+c*(u+1),v=M+1+c*u;m.push(_,y,v),m.push(y,T,v)}this.setIndex(m),this.setAttribute("position",new Fe(x,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}class so extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new G,f=new G,m=[],x=[],g=[],p=[];for(let u=0;u<=n;u++){const M=[],_=u/n;let y=0;u===0&&a===0?y=.5/e:u===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const v=T/e;h.x=-t*Math.cos(s+v*r)*Math.sin(a+_*o),h.y=t*Math.cos(a+_*o),h.z=t*Math.sin(s+v*r)*Math.sin(a+_*o),x.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),p.push(v+y,1-_),M.push(c++)}d.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const _=d[u][M+1],y=d[u][M],T=d[u+1][M],v=d[u+1][M+1];(u!==0||a>0)&&m.push(_,y,v),(u!==n-1||l<Math.PI)&&m.push(y,T,v)}this.setIndex(m),this.setAttribute("position",new Fe(x,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tc extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class D1 extends Tc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xu extends Vn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yu extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ku extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Fs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ju(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ju(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function al(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function Ec(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class or{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Qu extends or{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mi,endingEnd:Mi}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bi:r=t,o=2*e-n;break;case js:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bi:a=t,l=2*n-e;break;case js:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),g=x*x,p=g*x,u=-f*p+2*f*g-f*x,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*x+1,_=(-1-m)*p+(1.5+m)*g+.5*x,y=m*p-m*g;for(let T=0;T!==o;++T)r[T]=u*a[d+T]+M*a[c+T]+_*a[l+T]+y*a[h+T];return r}}class wc extends or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(s-e),h=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*d;return r}}class qu extends or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class fn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fs(e,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fs(t.times,Array),values:Fs(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Na:e=this.InterpolantFactoryMethodLinear;break;case pr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return pr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ju(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pr,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{const h=o*n,f=h-n,m=h+n;for(let x=0;x!==n;++x){const g=e[h+x];if(g!==e[f+x]||g!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[h+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Na;class Vi extends fn{constructor(t,e,n){super(t,e,n)}}Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Ks;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ac extends fn{}Ac.prototype.ValueTypeName="color";class tr extends fn{}tr.prototype.ValueTypeName="number";class $u extends or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e);let c=t*o;for(let d=c+o;c!==d;c+=4)sn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class lr extends fn{InterpolantFactoryMethodLinear(t){return new $u(this.times,this.values,this.getValueSize(),t)}}lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends fn{constructor(t,e,n){super(t,e,n)}}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ks;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends fn{}er.prototype.ValueTypeName="vector";class ol{constructor(t="",e=-1,n=[],s=qa){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(ed(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const d=Ju(l);l=al(l,1,d),c=al(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new tr(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,x,g){if(m.length!==0){const p=[],u=[];Ec(m,p,u,x),p.length!==0&&g.push(new h(f,p,u))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let g=0;g<f[x].morphTargets.length;g++)m[f[x].morphTargets[g]]=-1;for(const g in m){const p=[],u=[];for(let M=0;M!==f[x].morphTargets.length;++M){const _=f[x];p.push(_.time),u.push(_.morphTarget===g?1:0)}s.push(new tr(".morphTargetInfluence["+g+"]",p,u))}l=m.length*a}else{const m=".bones["+e[h].name+"]";n(er,m+".position",f,"pos",s),n(lr,m+".quaternion",f,"rot",s),n(er,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function td(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return Ac;case"quaternion":return lr;case"bool":case"boolean":return Vi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ed(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=td(i.type);if(i.times===void 0){const e=[],n=[];Ec(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const hn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Rc{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null}}}const nd=new Rc;class Oi{constructor(t){this.manager=t!==void 0?t:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const xn={};class id extends Error{constructor(t,e){super(t),this.response=e}}class sd extends Oi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=hn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(xn[t]!==void 0){xn[t].push({onLoad:e,onProgress:n,onError:s});return}xn[t]=[],xn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=xn[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,x=m!==0;let g=0;const p=new ReadableStream({start(u){M();function M(){h.read().then(({done:_,value:y})=>{if(_)u.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:m});for(let v=0,E=d.length;v<E;v++){const A=d[v];A.onProgress&&A.onProgress(T)}u.enqueue(y),M()}},_=>{u.error(_)})}}});return new Response(p)}else throw new id(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{hn.add(t,c);const d=xn[t];delete xn[t];for(let h=0,f=d.length;h<f;h++){const m=d[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=xn[t];if(d===void 0)throw this.manager.itemError(t),c;delete xn[t];for(let h=0,f=d.length;h<f;h++){const m=d[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ls extends Oi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=hn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=rs("img");function l(){d(),hn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){d(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class U1 extends Oi{constructor(t){super(t)}load(t,e,n,s){const r=new io;r.colorSpace=Ue;const a=new ls(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(d){r.images[c]=d,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}}class rd extends Oi{constructor(t){super(t)}load(t,e,n,s){const r=new ye,a=new ls(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class cr extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Wr=new Jt,ll=new G,cl=new G;class ro{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),Wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ad extends ro{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Di*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class N1 extends cr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ad}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const hl=new Jt,qi=new G,Or=new G;class od extends ro{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(qi),Or.copy(n.position),Or.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Or),n.updateMatrixWorld(),s.makeTranslation(-qi.x,-qi.y,-qi.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class F1 extends cr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new od}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ao extends _c{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ld extends ro{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cd extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new ld}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hd extends cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class V1{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class W1 extends Oi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=hn.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hn.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),hn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});hn.add(t,l),r.manager.itemStart(t)}}class ud extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ul();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ul(){return performance.now()}class dd{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,s,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){sn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const a=this._workIndex*r;sn.multiplyQuaternionsFlat(t,a,t,e,t,n),sn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*s}}}const oo="\\[\\]\\.:\\/",fd=new RegExp("["+oo+"]","g"),lo="[^"+oo+"]",pd="[^"+oo.replace("\\.","")+"]",md=/((?:WC+[\/:])*)/.source.replace("WC",lo),gd=/(WCOD+)?/.source.replace("WCOD",pd),_d=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lo),vd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lo),xd=new RegExp("^"+md+gd+_d+vd+"$"),yd=["material","materials","bones","map"];class Md{constructor(t,e,n){const s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fd,"")}static parseTrackName(t){const e=xd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);yd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=Md;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bd{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Mi,endingEnd:Mi};for(let c=0;c!==a;++c){const d=r[c].createInterpolant(null);o[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Wh:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulateAdditive(o);break;case qa:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const a=n===Vh;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===Nh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=bi,s.endingEnd=bi):(t?s.endingStart=this.zeroSlopeAtStart?bi:Mi:s.endingStart=js,e?s.endingEnd=this.zeroSlopeAtEnd?bi:Mi:s.endingEnd=js)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const Sd=new Float32Array(1);class O1 extends En{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const f=s[h],m=f.name;let x=d[m];if(x!==void 0)++x.referenceCount,a[h]=x;else{if(x=a[h],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,m));continue}const g=e&&e._propertyBindings[h].binding.parsedPath;x=new dd(ae.create(n,m,g),f.ValueTypeName,f.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,m),a[h]=x}o[h].resultBuffer=x.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],d=t._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new wc(new Float32Array(2),new Float32Array(2),1,Sd),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?ol.findByName(s,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=qa),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new bd(this,a,e,n);return this._bindAction(d,c),this._addInactiveAction(d,o,r),d}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?ol.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(s,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const d=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,e[d]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const dl=new Jt;class Pc{constructor(t,e,n=0,s=1/0){this.ray=new Fi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dl),this}intersectObject(t,e=!0,n=[]){return Wa(t,this,n,e),n.sort(fl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wa(t[s],this,n,e);return n.sort(fl),n}}function fl(i,t){return i.distance-t.distance}function Wa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Wa(r[a],t,e,!0)}}class pl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ml=new Wt;class Td{constructor(t=new Wt(1/0,1/0),e=new Wt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ml.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ml).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Ed extends En{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function gl(i,t,e,n){const s=wd(n);switch(e){case ic:return i*t;case rc:return i*t;case ac:return i*t*2;case Ka:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case oc:return i*t*2/s.components*s.byteLength;case Ja:return i*t*2/s.components*s.byteLength;case sc:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case Bs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xs:case Pa:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lc:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Da:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wd(i){switch(i){case Tn:case tc:return{byteLength:1,components:1};case ss:case ec:case as:return{byteLength:2,components:1};case Xa:case Ya:return{byteLength:2,components:4};case ei:case Ha:case en:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<h.length;m++){const x=h[f],g=h[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++f,h[f]=g)}h.length=f+1;for(let m=0,x=h.length;m<x;m++){const g=h[m];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd=`#ifdef USE_BATCHING
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
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qd=`#define PI 3.141592653589793
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
} // validated`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
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
#endif`,Af=`struct PhysicalMaterial {
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
}`,Rf=`
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wf=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
}`,Fp=`#define DISTANCE
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
}`,Vp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Zp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Xp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Jp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,qp=`#define STANDARD
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
}`,$p=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,om=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Rd,alphahash_pars_fragment:Ld,alphamap_fragment:Pd,alphamap_pars_fragment:Cd,alphatest_fragment:Id,alphatest_pars_fragment:Dd,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:Fd,batching_vertex:Vd,begin_vertex:Wd,beginnormal_vertex:Od,bsdfs:Gd,iridescence_fragment:zd,bumpmap_pars_fragment:Bd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Xd,color_fragment:Yd,color_pars_fragment:Kd,color_pars_vertex:jd,color_vertex:Jd,common:Qd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:$d,displacementmap_pars_vertex:tf,displacementmap_vertex:ef,emissivemap_fragment:nf,emissivemap_pars_fragment:sf,colorspace_fragment:rf,colorspace_pars_fragment:af,envmap_fragment:of,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Mf,envmap_vertex:uf,fog_vertex:df,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:yf,lights_toon_fragment:bf,lights_toon_pars_fragment:Sf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Ef,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Lf,lights_fragment_end:Pf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:Uf,map_fragment:Nf,map_pars_fragment:Ff,map_particle_fragment:Vf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Gf,morphinstance_vertex:zf,morphcolor_vertex:Bf,morphnormal_vertex:kf,morphtarget_pars_vertex:Zf,morphtarget_vertex:Hf,normal_fragment_begin:Xf,normal_fragment_maps:Yf,normal_pars_fragment:Kf,normal_pars_vertex:jf,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:$f,clearcoat_pars_fragment:tp,iridescence_pars_fragment:ep,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:sp,project_vertex:rp,dithering_fragment:ap,dithering_pars_fragment:op,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:up,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:vp,specularmap_pars_fragment:xp,tonemapping_fragment:yp,tonemapping_pars_fragment:Mp,transmission_fragment:bp,transmission_pars_fragment:Sp,uv_pars_fragment:Tp,uv_pars_vertex:Ep,uv_vertex:wp,worldpos_vertex:Ap,background_vert:Rp,background_frag:Lp,backgroundCube_vert:Pp,backgroundCube_frag:Cp,cube_vert:Ip,cube_frag:Dp,depth_vert:Up,depth_frag:Np,distanceRGBA_vert:Fp,distanceRGBA_frag:Vp,equirect_vert:Wp,equirect_frag:Op,linedashed_vert:Gp,linedashed_frag:zp,meshbasic_vert:Bp,meshbasic_frag:kp,meshlambert_vert:Zp,meshlambert_frag:Hp,meshmatcap_vert:Xp,meshmatcap_frag:Yp,meshnormal_vert:Kp,meshnormal_frag:jp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:qp,meshphysical_frag:$p,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:am,sprite_frag:om},Tt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},an={basic:{uniforms:Re([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Re([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Re([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Re([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Re([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Re([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Re([Tt.points,Tt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Re([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Re([Tt.common,Tt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Re([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Re([Tt.sprite,Tt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Re([Tt.common,Tt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Re([Tt.lights,Tt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};an.physical={uniforms:Re([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Vs={r:0,b:0,g:0},Zn=new rn,lm=new Jt;function cm(i,t,e,n,s,r,a){const o=new Yt(0);let l=r===!0?0:1,c,d,h=null,f=0,m=null;function x(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function g(_){let y=!1;const T=x(_);T===null?u(o,l):T&&T.isColor&&(u(T,1),y=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,y){const T=x(y);T&&(T.isCubeTexture||T.mapping===ir)?(d===void 0&&(d=new Pe(new os(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ui(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(v,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Zn.copy(y.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Zn)),d.material.toneMapped=te.getTransfer(T.colorSpace)!==oe,(h!==T||f!==T.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=T,f=T.version,m=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pe(new ar(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ui(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(T.colorSpace)!==oe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,y){_.getRGB(Vs,gc(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,y,a)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:g,addToRenderList:p,dispose:M}}function hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,P,D,I,U){let k=!1;const z=h(I,D,P);r!==z&&(r=z,c(r.object)),k=m(S,I,D,U),k&&x(S,I,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(S,P,D,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function h(S,P,D){const I=D.wireframe===!0;let U=n[S.id];U===void 0&&(U={},n[S.id]=U);let k=U[P.id];k===void 0&&(k={},U[P.id]=k);let z=k[I];return z===void 0&&(z=f(l()),k[I]=z),z}function f(S){const P=[],D=[],I=[];for(let U=0;U<e;U++)P[U]=0,D[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:I,object:S,attributes:{},index:null}}function m(S,P,D,I){const U=r.attributes,k=P.attributes;let z=0;const H=D.getAttributes();for(const L in H)if(H[L].location>=0){const V=U[L];let W=k[L];if(W===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),V===void 0||V.attribute!==W||W&&V.data!==W.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function x(S,P,D,I){const U={},k=P.attributes;let z=0;const H=D.getAttributes();for(const L in H)if(H[L].location>=0){let V=k[L];V===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(V=S.instanceColor));const W={};W.attribute=V,V&&V.data&&(W.data=V.data),U[L]=W,z++}r.attributes=U,r.attributesNum=z,r.index=I}function g(){const S=r.newAttributes;for(let P=0,D=S.length;P<D;P++)S[P]=0}function p(S){u(S,0)}function u(S,P){const D=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;D[S]=1,I[S]===0&&(i.enableVertexAttribArray(S),I[S]=1),U[S]!==P&&(i.vertexAttribDivisor(S,P),U[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let D=0,I=P.length;D<I;D++)P[D]!==S[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function _(S,P,D,I,U,k,z){z===!0?i.vertexAttribIPointer(S,P,D,U,k):i.vertexAttribPointer(S,P,D,I,U,k)}function y(S,P,D,I){g();const U=I.attributes,k=D.getAttributes(),z=P.defaultAttributeValues;for(const H in k){const L=k[H];if(L.location>=0){let N=U[H];if(N===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(N=S.instanceColor)),N!==void 0){const V=N.normalized,W=N.itemSize,$=t.get(N);if($===void 0)continue;const st=$.buffer,O=$.type,Y=$.bytesPerElement,Q=O===i.INT||O===i.UNSIGNED_INT||N.gpuType===Ha;if(N.isInterleavedBufferAttribute){const q=N.data,rt=q.stride,vt=N.offset;if(q.isInstancedInterleavedBuffer){for(let ht=0;ht<L.locationSize;ht++)u(L.location+ht,q.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ht=0;ht<L.locationSize;ht++)p(L.location+ht);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ht=0;ht<L.locationSize;ht++)_(L.location+ht,W/L.locationSize,O,V,rt*Y,(vt+W/L.locationSize*ht)*Y,Q)}else{if(N.isInstancedBufferAttribute){for(let q=0;q<L.locationSize;q++)u(L.location+q,N.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let q=0;q<L.locationSize;q++)p(L.location+q);i.bindBuffer(i.ARRAY_BUFFER,st);for(let q=0;q<L.locationSize;q++)_(L.location+q,W/L.locationSize,O,V,W*Y,W/L.locationSize*q*Y,Q)}}else if(z!==void 0){const V=z[H];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(L.location,V);break;case 3:i.vertexAttrib3fv(L.location,V);break;case 4:i.vertexAttrib4fv(L.location,V);break;default:i.vertexAttrib1fv(L.location,V)}}}}M()}function T(){A();for(const S in n){const P=n[S];for(const D in P){const I=P[D];for(const U in I)d(I[U].object),delete I[U];delete P[D]}delete n[S]}}function v(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const D in P){const I=P[D];for(const U in I)d(I[U].object),delete I[U];delete P[D]}delete n[S.id]}function E(S){for(const P in n){const D=n[P];if(D[S.id]===void 0)continue;const I=D[S.id];for(const U in I)d(I[U].object),delete I[U];delete D[S.id]}}function A(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function um(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=d[x];e.update(m,n,1)}function l(c,d,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],d[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g]*f[g];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Xe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Tn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==en&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,v=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:v}}function fm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new In,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!s||x===null||x.length===0||r&&!p)r?d(null):c();else{const M=r?0:n,_=M*4;let y=u.clippingState||null;l.value=y,y=d(x,f,_,m);for(let T=0;T!==_;++T)y[T]=e[T];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,m,x){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,x!==!0||p===null){const u=m+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,y=m;_!==g;++_,y+=4)a.copy(h[_]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function pm(i){let t=new WeakMap;function e(a,o){return o===ra?a.mapping=Ri:o===aa&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ra||o===aa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Si=4,_l=[.125,.215,.35,.446,.526,.582],Kn=20,Gr=new ao,vl=new Yt;let zr=null,Br=0,kr=0,Zr=!1;const Xn=(1+Math.sqrt(5))/2,vi=1/Xn,xl=[new G(-Xn,vi,0),new G(Xn,vi,0),new G(-vi,0,Xn),new G(vi,0,Xn),new G(0,Xn,-vi),new G(0,Xn,vi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){zr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zr,Br,kr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:as,format:Xe,colorSpace:Ii,depthBuffer:!1},s=Ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(r)),this._blurMaterial=gm(r,t,e)}return s}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,n,s){const o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(vl),d.toneMapping=Nn,d.autoClear=!1;const m=new no({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),x=new Pe(new os,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(vl),g=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):M===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;Ws(s,M*_,u>2?_:0,_,_),d.setRenderTarget(s),g&&d.render(x,o),d.render(t,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ri||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Gr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xl[(s-r-1)%xl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Pe(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),g=r/x,p=isFinite(r)?1+Math.floor(d*g):Kn;p>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const u=[];let M=0;for(let E=0;E<Kn;++E){const A=E/g,b=Math.exp(-A*A/2);u.push(b),E===0?M+=b:E<p&&(M+=2*b)}for(let E=0;E<u.length;E++)u[E]=u[E]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;const y=this._sizeLods[s],T=3*y*(s>_-Si?s-_+Si:0),v=4*(this._cubeSize-y);Ws(e,T,v,3*y,2*y),l.setRenderTarget(e),l.render(h,Gr)}}function mm(i){const t=[],e=[],n=[];let s=i;const r=i-Si+1+_l.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Si?l=_l[a-i+Si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,x=6,g=3,p=2,u=1,M=new Float32Array(g*x*m),_=new Float32Array(p*x*m),y=new Float32Array(u*x*m);for(let v=0;v<m;v++){const E=v%3*2/3-1,A=v>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];M.set(b,g*x*v),_.set(f,p*x*v);const S=[v,v,v,v,v,v];y.set(S,u*x*v)}const T=new Ke;T.setAttribute("position",new Ee(M,g)),T.setAttribute("uv",new Ee(_,p)),T.setAttribute("faceIndex",new Ee(y,u)),t.push(T),s>Si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ml(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){const n=new Float32Array(Kn),s=new G(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:co(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function bl(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Sl(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ra||l===aa,d=l===Ri||l===Li;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new yl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new yl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,x=h.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let _=0,y=M.length;_<y;_+=3){const T=M[_+0],v=M[_+1],E=M[_+2];f.push(T,v,v,E,E,T)}}else if(x!==void 0){const M=x.array;g=x.version;for(let _=0,y=M.length/3-1;_<y;_+=3){const T=_+0,v=_+1,E=_+2;f.push(T,v,v,E,E,T)}}else return;const p=new(hc(f)?mc:pc)(f,1);p.version=g;const u=r.get(h);u&&t.remove(u),r.set(h,p)}function d(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function ym(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,f*a,x),e.update(m,n,x))}function d(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,x);let p=0;for(let u=0;u<x;u++)p+=m[u];e.update(p,n,1)}function h(f,m,x,g){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,g,0,x);let u=0;for(let M=0;M<x;M++)u+=m[M]*g[M];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,t,e){const n=new WeakMap,s=new ne;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let b=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let y=o.attributes.position.count*_,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const v=new Float32Array(y*T*4*h),E=new dc(v,y,T,h);E.type=en,E.needsUpdate=!0;const A=_*4;for(let S=0;S<h;S++){const P=p[S],D=u[S],I=M[S],U=y*T*4*S;for(let k=0;k<P.count;k++){const z=k*A;m===!0&&(s.fromBufferAttribute(P,k),v[U+z+0]=s.x,v[U+z+1]=s.y,v[U+z+2]=s.z,v[U+z+3]=0),x===!0&&(s.fromBufferAttribute(D,k),v[U+z+4]=s.x,v[U+z+5]=s.y,v[U+z+6]=s.z,v[U+z+7]=0),g===!0&&(s.fromBufferAttribute(I,k),v[U+z+8]=s.x,v[U+z+9]=s.y,v[U+z+10]=s.z,v[U+z+11]=I.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new Wt(y,T)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ic=new ye,Tl=new Sc(1,1),Dc=new dc,Uc=new yu,Nc=new io,El=[],wl=[],Al=new Float32Array(16),Rl=new Float32Array(9),Ll=new Float32Array(4);function Gi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=El[s];if(r===void 0&&(r=new Float32Array(s),El[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hr(i,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Ll.set(n),i.uniformMatrix2fv(this.addr,!1,Ll),ve(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Rl.set(n),i.uniformMatrix3fv(this.addr,!1,Rl),ve(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),ve(e,n)}}function Cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=cc,r=Tl):r=Ic,e.setTexture2D(t||r,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uc,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nc,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dc,s)}function km(i){switch(i){case 5126:return Tm;case 35664:return Em;case 35665:return wm;case 35666:return Am;case 35674:return Rm;case 35675:return Lm;case 35676:return Pm;case 5124:case 35670:return Cm;case 35667:case 35671:return Im;case 35668:case 35672:return Dm;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return Fm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Bm}}function Zm(i,t){i.uniform1fv(this.addr,t)}function Hm(i,t){const e=Gi(t,this.size,2);i.uniform2fv(this.addr,e)}function Xm(i,t){const e=Gi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ym(i,t){const e=Gi(t,this.size,4);i.uniform4fv(this.addr,e)}function Km(i,t){const e=Gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jm(i,t){const e=Gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jm(i,t){const e=Gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function qm(i,t){i.uniform2iv(this.addr,t)}function $m(i,t){i.uniform3iv(this.addr,t)}function t0(i,t){i.uniform4iv(this.addr,t)}function e0(i,t){i.uniform1uiv(this.addr,t)}function n0(i,t){i.uniform2uiv(this.addr,t)}function i0(i,t){i.uniform3uiv(this.addr,t)}function s0(i,t){i.uniform4uiv(this.addr,t)}function r0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ic,r[a])}function a0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uc,r[a])}function o0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nc,r[a])}function l0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dc,r[a])}function c0(i){switch(i){case 5126:return Zm;case 35664:return Hm;case 35665:return Xm;case 35666:return Ym;case 35674:return Km;case 35675:return jm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return qm;case 35668:case 35672:return $m;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}}class u0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c0(e.type)}}class d0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function Pl(i,t){i.seq.push(t),i.map[t.id]=t}function f0(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),a=Hr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pl(e,c===void 0?new h0(o,i,t):new u0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new d0(o),Pl(e,h)),e=h}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);f0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Cl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const p0=37297;let m0=0;function g0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Il=new Ht;function _0(i){te._getMatrix(Il,te.workingColorSpace,i);const t=`mat3( ${Il.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+g0(i.getShaderSource(t),a)}else return s}function v0(i,t){const e=_0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function x0(i,t){let e;switch(t){case wh:e="Linear";break;case Ah:e="Reinhard";break;case Rh:e="Cineon";break;case Lh:e="ACESFilmic";break;case Ch:e="AgX";break;case Ih:e="Neutral";break;case Ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new G;function y0(){te.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function b0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ts(i){return i!==""}function Ul(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(T0,w0)}const E0=new Map;function w0(i,t){let e=Kt[t];if(e===void 0){const n=E0.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(i){return i.replace(A0,R0)}function R0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function L0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function P0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Li:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function I0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Za:t="ENVMAP_BLENDING_MULTIPLY";break;case Th:t="ENVMAP_BLENDING_MIX";break;case Eh:t="ENVMAP_BLENDING_ADD";break}return t}function D0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function U0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=L0(e),c=P0(e),d=C0(e),h=I0(e),f=D0(e),m=M0(e),x=b0(r),g=s.createProgram();let p,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ts).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ts).join(`
`),u.length>0&&(u+=`
`)):(p=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),u=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?x0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,v0("linearToOutputTexel",e.outputColorSpace),y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),a=Oa(a),a=Ul(a,e),a=Nl(a,e),o=Oa(o),o=Ul(o,e),o=Nl(o,e),a=Fl(a),o=Fl(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=M+p+a,y=M+u+o,T=Cl(s,s.VERTEX_SHADER,_),v=Cl(s,s.FRAGMENT_SHADER,y);s.attachShader(g,T),s.attachShader(g,v),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g).trim(),I=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(v).trim();let k=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,v);else{const H=Dl(s,T,"vertex"),L=Dl(s,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+H+`
`+L)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||U==="")&&(z=!1);z&&(P.diagnostics={runnable:k,programLog:D,vertexShader:{log:I,prefix:p},fragmentShader:{log:U,prefix:u}})}s.deleteShader(T),s.deleteShader(v),A=new Ys(s,g),b=S0(s,g)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,p0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=v,this}let N0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V0(t),e.set(t,n)),n}}class V0{constructor(t){this.id=N0++,this.code=t,this.usedTimes=0}}function W0(i,t,e,n,s,r,a){const o=new eo,l=new F0,c=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,P,D,I){const U=D.fog,k=I.geometry,z=b.isMeshStandardMaterial?D.environment:null,H=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),L=H&&H.mapping===ir?H.image.height:null,N=x[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,W=V!==void 0?V.length:0;let $=0;k.morphAttributes.position!==void 0&&($=1),k.morphAttributes.normal!==void 0&&($=2),k.morphAttributes.color!==void 0&&($=3);let st,O,Y,Q;if(N){const qt=an[N];st=qt.vertexShader,O=qt.fragmentShader}else st=b.vertexShader,O=b.fragmentShader,l.update(b),Y=l.getVertexShaderID(b),Q=l.getFragmentShaderID(b);const q=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),vt=I.isInstancedMesh===!0,ht=I.isBatchedMesh===!0,It=!!b.map,Et=!!b.matcap,Lt=!!H,F=!!b.aoMap,Dt=!!b.lightMap,ut=!!b.bumpMap,gt=!!b.normalMap,_t=!!b.displacementMap,Gt=!!b.emissiveMap,wt=!!b.metalnessMap,C=!!b.roughnessMap,w=b.anisotropy>0,X=b.clearcoat>0,it=b.dispersion>0,at=b.iridescence>0,j=b.sheen>0,ft=b.transmission>0,ct=w&&!!b.anisotropyMap,xt=X&&!!b.clearcoatMap,Nt=X&&!!b.clearcoatNormalMap,lt=X&&!!b.clearcoatRoughnessMap,mt=at&&!!b.iridescenceMap,dt=at&&!!b.iridescenceThicknessMap,Ct=j&&!!b.sheenColorMap,At=j&&!!b.sheenRoughnessMap,kt=!!b.specularMap,Ot=!!b.specularColorMap,ee=!!b.specularIntensityMap,B=ft&&!!b.transmissionMap,bt=ft&&!!b.thicknessMap,nt=!!b.gradientMap,ot=!!b.alphaMap,Mt=b.alphaTest>0,St=!!b.alphaHash,Zt=!!b.extensions;let ce=Nn;b.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ce=i.toneMapping);const me={shaderID:N,shaderType:b.type,shaderName:b.name,vertexShader:st,fragmentShader:O,defines:b.defines,customVertexShaderID:Y,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ht,batchingColor:ht&&I._colorsTexture!==null,instancing:vt,instancingColor:vt&&I.instanceColor!==null,instancingMorph:vt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ii,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:Et,envMap:Lt,envMapMode:Lt&&H.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:Dt,bumpMap:ut,normalMap:gt,displacementMap:f&&_t,emissiveMap:Gt,normalMapObjectSpace:gt&&b.normalMapType===zh,normalMapTangentSpace:gt&&b.normalMapType===$a,metalnessMap:wt,roughnessMap:C,anisotropy:w,anisotropyMap:ct,clearcoat:X,clearcoatMap:xt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:lt,dispersion:it,iridescence:at,iridescenceMap:mt,iridescenceThicknessMap:dt,sheen:j,sheenColorMap:Ct,sheenRoughnessMap:At,specularMap:kt,specularColorMap:Ot,specularIntensityMap:ee,transmission:ft,transmissionMap:B,thicknessMap:bt,gradientMap:nt,opaque:b.transparent===!1&&b.blending===Ti&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:Mt,alphaHash:St,combine:b.combine,mapUv:It&&g(b.map.channel),aoMapUv:F&&g(b.aoMap.channel),lightMapUv:Dt&&g(b.lightMap.channel),bumpMapUv:ut&&g(b.bumpMap.channel),normalMapUv:gt&&g(b.normalMap.channel),displacementMapUv:_t&&g(b.displacementMap.channel),emissiveMapUv:Gt&&g(b.emissiveMap.channel),metalnessMapUv:wt&&g(b.metalnessMap.channel),roughnessMapUv:C&&g(b.roughnessMap.channel),anisotropyMapUv:ct&&g(b.anisotropyMap.channel),clearcoatMapUv:xt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(b.sheenRoughnessMap.channel),specularMapUv:kt&&g(b.specularMap.channel),specularColorMapUv:Ot&&g(b.specularColorMap.channel),specularIntensityMapUv:ee&&g(b.specularIntensityMap.channel),transmissionMapUv:B&&g(b.transmissionMap.channel),thicknessMapUv:bt&&g(b.thicknessMap.channel),alphaMapUv:ot&&g(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(It||ot),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:rt,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:$,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:Gt&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mn,flipSided:b.side===Ne,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&b.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function u(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(M(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const S=x[b.type];let P;if(S){const D=an[S];P=Iu.clone(D.uniforms)}else P=b.uniforms;return P}function T(b,S){let P;for(let D=0,I=d.length;D<I;D++){const U=d[D];if(U.cacheKey===S){P=U,++P.usedTimes;break}}return P===void 0&&(P=new U0(i,S,b,r),d.push(P)),P}function v(b){if(--b.usedTimes===0){const S=d.indexOf(b);d[S]=d[d.length-1],d.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:v,releaseShaderCache:E,programs:d,dispose:A}}function O0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function G0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ol(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,m,x,g,p){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:g,group:p},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=g,u.group=p),t++,u}function o(h,f,m,x,g,p){const u=a(h,f,m,x,g,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(h,f,m,x,g,p){const u=a(h,f,m,x,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,f){e.length>1&&e.sort(h||G0),n.length>1&&n.sort(f||Wl),s.length>1&&s.sort(f||Wl)}function d(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function z0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ol,i.set(n,[a])):s>=r.length?(a=new Ol,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Yt};break;case"SpotLight":e={position:new G,direction:new G,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function k0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Z0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X0(i){const t=new B0,e=k0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new Jt,a=new Jt;function o(c){let d=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,x=0,g=0,p=0,u=0,M=0,_=0,y=0,T=0,v=0,E=0;c.sort(H0);for(let b=0,S=c.length;b<S;b++){const P=c[b],D=P.color,I=P.intensity,U=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*I,h+=D.g*I,f+=D.b*I;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],I);E++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const H=P.shadow,L=e.get(P);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,n.directionalShadow[m]=L,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=P.shadow.matrix,M++}n.directional[m]=z,m++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(D).multiplyScalar(I),z.distance=U,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[g]=z;const H=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,H.updateMatrices(P),P.castShadow&&v++),n.spotLightMatrix[g]=H.matrix,P.castShadow){const L=e.get(P);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,n.spotShadow[g]=L,n.spotShadowMap[g]=k,y++}g++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(D).multiplyScalar(I),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=z,p++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const H=P.shadow,L=e.get(P);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,n.pointShadow[x]=L,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=P.shadow.matrix,_++}n.point[x]=z,x++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(I),z.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[u]=z,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==m||A.pointLength!==x||A.spotLength!==g||A.rectAreaLength!==p||A.hemiLength!==u||A.numDirectionalShadows!==M||A.numPointShadows!==_||A.numSpotShadows!==y||A.numSpotMaps!==T||A.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-v,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=E,A.directionalLength=m,A.pointLength=x,A.spotLength=g,A.rectAreaLength=p,A.hemiLength=u,A.numDirectionalShadows=M,A.numPointShadows=_,A.numSpotShadows=y,A.numSpotMaps=T,A.numLightProbes=E,n.version=Z0++)}function l(c,d){let h=0,f=0,m=0,x=0,g=0;const p=d.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){const _=c[u];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(_.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Gl(i){const t=new X0(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Y0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Gl(i),t.set(s,[o])):r>=a.length?(o=new Gl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
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
}`;function J0(i,t,e){let n=new rr;const s=new Wt,r=new Wt,a=new ne,o=new Yu({depthPacking:Gh}),l=new Ku,c={},d=e.maxTextureSize,h={[Sn]:Ne,[Ne]:Sn,[Mn]:Mn},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:K0,fragmentShader:j0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ke;x.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pe(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let u=this.type;this.render=function(v,E,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=u!==yn&&this.type===yn,U=u===yn&&this.type!==yn;for(let k=0,z=v.length;k<z;k++){const H=v[k],L=H.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const N=L.getFrameExtents();if(s.multiply(N),r.copy(L.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/N.x),s.x=r.x*N.x,L.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/N.y),s.y=r.y*N.y,L.mapSize.y=r.y)),L.map===null||I===!0||U===!0){const W=this.type!==yn?{minFilter:Ge,magFilter:Ge}:{};L.map!==null&&L.map.dispose(),L.map=new ni(s.x,s.y,W),L.map.texture.name=H.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const V=L.getViewportCount();for(let W=0;W<V;W++){const $=L.getViewport(W);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),D.viewport(a),L.updateMatrices(H,W),n=L.getFrustum(),y(E,A,L.camera,H,this.type)}L.isPointLightShadow!==!0&&this.type===yn&&M(L,A),L.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(b,S,P)};function M(v,E){const A=t.update(g);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ni(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,A,f,g,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,A,m,g,null)}function _(v,E,A,b){let S=null;const P=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)S=P;else if(S=A.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=S.uuid,I=E.uuid;let U=c[D];U===void 0&&(U={},c[D]=U);let k=U[I];k===void 0&&(k=S.clone(),U[I]=k,E.addEventListener("dispose",T)),S=k}if(S.visible=E.visible,S.wireframe=E.wireframe,b===yn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=A}return S}function y(v,E,A,b,S){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===yn)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const I=t.update(v),U=v.material;if(Array.isArray(U)){const k=I.groups;for(let z=0,H=k.length;z<H;z++){const L=k[z],N=U[L.materialIndex];if(N&&N.visible){const V=_(v,N,b,S);v.onBeforeShadow(i,v,E,A,I,V,L),i.renderBufferDirect(A,null,I,V,v,L),v.onAfterShadow(i,v,E,A,I,V,L)}}}else if(U.visible){const k=_(v,U,b,S);v.onBeforeShadow(i,v,E,A,I,k,null),i.renderBufferDirect(A,null,I,k,v,null),v.onAfterShadow(i,v,E,A,I,k,null)}}const D=v.children;for(let I=0,U=D.length;I<U;I++)y(D[I],E,A,b,S)}function T(v){v.target.removeEventListener("dispose",T);for(const A in c){const b=c[A],S=v.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Q0={[qr]:$r,[ta]:ia,[ea]:sa,[Ai]:na,[$r]:qr,[ia]:ta,[sa]:ea,[na]:Ai};function q0(i,t){function e(){let B=!1;const bt=new ne;let nt=null;const ot=new ne(0,0,0,0);return{setMask:function(Mt){nt!==Mt&&!B&&(i.colorMask(Mt,Mt,Mt,Mt),nt=Mt)},setLocked:function(Mt){B=Mt},setClear:function(Mt,St,Zt,ce,me){me===!0&&(Mt*=ce,St*=ce,Zt*=ce),bt.set(Mt,St,Zt,ce),ot.equals(bt)===!1&&(i.clearColor(Mt,St,Zt,ce),ot.copy(bt))},reset:function(){B=!1,nt=null,ot.set(-1,0,0,0)}}}function n(){let B=!1,bt=!1,nt=null,ot=null,Mt=null;return{setReversed:function(St){if(bt!==St){const Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const ce=Mt;Mt=null,this.setClear(ce)}bt=St},getReversed:function(){return bt},setTest:function(St){St?q(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(St){nt!==St&&!B&&(i.depthMask(St),nt=St)},setFunc:function(St){if(bt&&(St=Q0[St]),ot!==St){switch(St){case qr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=St}},setLocked:function(St){B=St},setClear:function(St){Mt!==St&&(bt&&(St=1-St),i.clearDepth(St),Mt=St)},reset:function(){B=!1,nt=null,ot=null,Mt=null,bt=!1}}}function s(){let B=!1,bt=null,nt=null,ot=null,Mt=null,St=null,Zt=null,ce=null,me=null;return{setTest:function(qt){B||(qt?q(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(qt){bt!==qt&&!B&&(i.stencilMask(qt),bt=qt)},setFunc:function(qt,Ce,ze){(nt!==qt||ot!==Ce||Mt!==ze)&&(i.stencilFunc(qt,Ce,ze),nt=qt,ot=Ce,Mt=ze)},setOp:function(qt,Ce,ze){(St!==qt||Zt!==Ce||ce!==ze)&&(i.stencilOp(qt,Ce,ze),St=qt,Zt=Ce,ce=ze)},setLocked:function(qt){B=qt},setClear:function(qt){me!==qt&&(i.clearStencil(qt),me=qt)},reset:function(){B=!1,bt=null,nt=null,ot=null,Mt=null,St=null,Zt=null,ce=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],x=null,g=!1,p=null,u=null,M=null,_=null,y=null,T=null,v=null,E=new Yt(0,0,0),A=0,b=!1,S=null,P=null,D=null,I=null,U=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(L)[1]),z=H>=1):L.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),z=H>=2);let N=null,V={};const W=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),st=new ne().fromArray(W),O=new ne().fromArray($);function Y(B,bt,nt,ot){const Mt=new Uint8Array(4),St=i.createTexture();i.bindTexture(B,St),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<nt;Zt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(bt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return St}const Q={};Q[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(Ai),ut(!1),gt(yo),q(i.CULL_FACE),F(Un);function q(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function rt(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function vt(B,bt){return h[B]!==bt?(i.bindFramebuffer(B,bt),h[B]=bt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function ht(B,bt){let nt=m,ot=!1;if(B){nt=f.get(bt),nt===void 0&&(nt=[],f.set(bt,nt));const Mt=B.textures;if(nt.length!==Mt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Zt=Mt.length;St<Zt;St++)nt[St]=i.COLOR_ATTACHMENT0+St;nt.length=Mt.length,ot=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ot=!0);ot&&i.drawBuffers(nt)}function It(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Et={[Yn]:i.FUNC_ADD,[oh]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};Et[ch]=i.MIN,Et[hh]=i.MAX;const Lt={[uh]:i.ZERO,[dh]:i.ONE,[fh]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[bh]:i.CONSTANT_ALPHA,[Sh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,bt,nt,ot,Mt,St,Zt,ce,me,qt){if(B===Un){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),B!==ah){if(B!==p||qt!==b){if((u!==Yn||y!==Yn)&&(i.blendEquation(i.FUNC_ADD),u=Yn,y=Yn),qt)switch(B){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFunc(i.ONE,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case So:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case So:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,_=null,T=null,v=null,E.set(0,0,0),A=0,p=B,b=qt}return}Mt=Mt||bt,St=St||nt,Zt=Zt||ot,(bt!==u||Mt!==y)&&(i.blendEquationSeparate(Et[bt],Et[Mt]),u=bt,y=Mt),(nt!==M||ot!==_||St!==T||Zt!==v)&&(i.blendFuncSeparate(Lt[nt],Lt[ot],Lt[St],Lt[Zt]),M=nt,_=ot,T=St,v=Zt),(ce.equals(E)===!1||me!==A)&&(i.blendColor(ce.r,ce.g,ce.b,me),E.copy(ce),A=me),p=B,b=!1}function Dt(B,bt){B.side===Mn?rt(i.CULL_FACE):q(i.CULL_FACE);let nt=B.side===Ne;bt&&(nt=!nt),ut(nt),B.blending===Ti&&B.transparent===!1?F(Un):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ot=B.stencilWrite;o.setTest(ot),ot&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Gt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function gt(B){B!==ih?(q(i.CULL_FACE),B!==P&&(B===yo?i.cullFace(i.BACK):B===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),P=B}function _t(B){B!==D&&(z&&i.lineWidth(B),D=B)}function Gt(B,bt,nt){B?(q(i.POLYGON_OFFSET_FILL),(I!==bt||U!==nt)&&(i.polygonOffset(bt,nt),I=bt,U=nt)):rt(i.POLYGON_OFFSET_FILL)}function wt(B){B?q(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+k-1),N!==B&&(i.activeTexture(B),N=B)}function w(B,bt,nt){nt===void 0&&(N===null?nt=i.TEXTURE0+k-1:nt=N);let ot=V[nt];ot===void 0&&(ot={type:void 0,texture:void 0},V[nt]=ot),(ot.type!==B||ot.texture!==bt)&&(N!==nt&&(i.activeTexture(nt),N=nt),i.bindTexture(B,bt||Q[B]),ot.type=B,ot.texture=bt)}function X(){const B=V[N];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(B){st.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),st.copy(B))}function At(B){O.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),O.copy(B))}function kt(B,bt){let nt=c.get(bt);nt===void 0&&(nt=new WeakMap,c.set(bt,nt));let ot=nt.get(B);ot===void 0&&(ot=i.getUniformBlockIndex(bt,B.name),nt.set(B,ot))}function Ot(B,bt){const ot=c.get(bt).get(B);l.get(bt)!==ot&&(i.uniformBlockBinding(bt,ot,B.__bindingPointIndex),l.set(bt,ot))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},N=null,V={},h={},f=new WeakMap,m=[],x=null,g=!1,p=null,u=null,M=null,_=null,y=null,T=null,v=null,E=new Yt(0,0,0),A=0,b=!1,S=null,P=null,D=null,I=null,U=null,st.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:rt,bindFramebuffer:vt,drawBuffers:ht,useProgram:It,setBlending:F,setMaterial:Dt,setFlipSided:ut,setCullFace:gt,setLineWidth:_t,setPolygonOffset:Gt,setScissorTest:wt,activeTexture:C,bindTexture:w,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:at,texImage2D:mt,texImage3D:dt,updateUBOMapping:kt,uniformBlockBinding:Ot,texStorage2D:Nt,texStorage3D:lt,texSubImage2D:j,texSubImage3D:ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:xt,scissor:Ct,viewport:At,reset:ee}}function $0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,w){return m?new OffscreenCanvas(C,w):rs("canvas")}function g(C,w,X){let it=1;const at=wt(C);if((at.width>X||at.height>X)&&(it=X/Math.max(at.width,at.height)),it<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(it*at.width),ft=Math.floor(it*at.height);h===void 0&&(h=x(j,ft));const ct=w?x(j,ft):h;return ct.width=j,ct.height=ft,ct.getContext("2d").drawImage(C,0,0,j,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+j+"x"+ft+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function p(C){return C.generateMipmaps}function u(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,w,X,it,at=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=w;if(w===i.RED&&(X===i.FLOAT&&(j=i.R32F),X===i.HALF_FLOAT&&(j=i.R16F),X===i.UNSIGNED_BYTE&&(j=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.R8UI),X===i.UNSIGNED_SHORT&&(j=i.R16UI),X===i.UNSIGNED_INT&&(j=i.R32UI),X===i.BYTE&&(j=i.R8I),X===i.SHORT&&(j=i.R16I),X===i.INT&&(j=i.R32I)),w===i.RG&&(X===i.FLOAT&&(j=i.RG32F),X===i.HALF_FLOAT&&(j=i.RG16F),X===i.UNSIGNED_BYTE&&(j=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RG8UI),X===i.UNSIGNED_SHORT&&(j=i.RG16UI),X===i.UNSIGNED_INT&&(j=i.RG32UI),X===i.BYTE&&(j=i.RG8I),X===i.SHORT&&(j=i.RG16I),X===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGB8UI),X===i.UNSIGNED_SHORT&&(j=i.RGB16UI),X===i.UNSIGNED_INT&&(j=i.RGB32UI),X===i.BYTE&&(j=i.RGB8I),X===i.SHORT&&(j=i.RGB16I),X===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),X===i.UNSIGNED_INT&&(j=i.RGBA32UI),X===i.BYTE&&(j=i.RGBA8I),X===i.SHORT&&(j=i.RGBA16I),X===i.INT&&(j=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),w===i.RGBA){const ft=at?Js:te.getTransfer(it);X===i.FLOAT&&(j=i.RGBA32F),X===i.HALF_FLOAT&&(j=i.RGBA16F),X===i.UNSIGNED_BYTE&&(j=ft===oe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(C,w){let X;return C?w===null||w===ei||w===Pi?X=i.DEPTH24_STENCIL8:w===en?X=i.DEPTH32F_STENCIL8:w===ss&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===Pi?X=i.DEPTH_COMPONENT24:w===en?X=i.DEPTH_COMPONENT32F:w===ss&&(X=i.DEPTH_COMPONENT16),X}function T(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function v(C){const w=C.target;w.removeEventListener("dispose",v),A(w),w.isVideoTexture&&d.delete(w)}function E(C){const w=C.target;w.removeEventListener("dispose",E),S(w)}function A(C){const w=n.get(C);if(w.__webglInit===void 0)return;const X=C.source,it=f.get(X);if(it){const at=it[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&b(C),Object.keys(it).length===0&&f.delete(X)}n.remove(C)}function b(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const X=C.source,it=f.get(X);delete it[w.__cacheKey],a.memory.textures--}function S(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(w.__webglFramebuffer[it]))for(let at=0;at<w.__webglFramebuffer[it].length;at++)i.deleteFramebuffer(w.__webglFramebuffer[it][at]);else i.deleteFramebuffer(w.__webglFramebuffer[it]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[it])}else{if(Array.isArray(w.__webglFramebuffer))for(let it=0;it<w.__webglFramebuffer.length;it++)i.deleteFramebuffer(w.__webglFramebuffer[it]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let it=0;it<w.__webglColorRenderbuffer.length;it++)w.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[it]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=C.textures;for(let it=0,at=X.length;it<at;it++){const j=n.get(X[it]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(X[it])}n.remove(C)}let P=0;function D(){P=0}function I(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function U(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function k(C,w){const X=n.get(C);if(C.isVideoTexture&&_t(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(X,C,w);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function z(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){O(X,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function H(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){O(X,C,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function L(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Y(X,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const N={[oa]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},V={[Ge]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[fr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},W={[Bh]:i.NEVER,[Kh]:i.ALWAYS,[kh]:i.LESS,[cc]:i.LEQUAL,[Zh]:i.EQUAL,[Yh]:i.GEQUAL,[Hh]:i.GREATER,[Xh]:i.NOTEQUAL};function $(C,w){if(w.type===en&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===fr||w.magFilter===us||w.magFilter===Jn||w.minFilter===ln||w.minFilter===fr||w.minFilter===us||w.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,N[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,N[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,N[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,V[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,V[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,W[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ge||w.minFilter!==us&&w.minFilter!==Jn||w.type===en&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function st(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",v));const it=w.source;let at=f.get(it);at===void 0&&(at={},f.set(it,at));const j=U(w);if(j!==C.__cacheKey){at[j]===void 0&&(at[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),at[j].usedTimes++;const ft=at[C.__cacheKey];ft!==void 0&&(at[C.__cacheKey].usedTimes--,ft.usedTimes===0&&b(w)),C.__cacheKey=j,C.__webglTexture=at[j].texture}return X}function O(C,w,X){let it=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=i.TEXTURE_3D);const at=st(C,w),j=w.source;e.bindTexture(it,C.__webglTexture,i.TEXTURE0+X);const ft=n.get(j);if(j.version!==ft.__version||at===!0){e.activeTexture(i.TEXTURE0+X);const ct=te.getPrimaries(te.workingColorSpace),xt=w.colorSpace===Dn?null:te.getPrimaries(w.colorSpace),Nt=w.colorSpace===Dn||ct===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let lt=g(w.image,!1,s.maxTextureSize);lt=Gt(w,lt);const mt=r.convert(w.format,w.colorSpace),dt=r.convert(w.type);let Ct=_(w.internalFormat,mt,dt,w.colorSpace,w.isVideoTexture);$(it,w);let At;const kt=w.mipmaps,Ot=w.isVideoTexture!==!0,ee=ft.__version===void 0||at===!0,B=j.dataReady,bt=T(w,lt);if(w.isDepthTexture)Ct=y(w.format===Ci,w.type),ee&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Ct,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,lt.width,lt.height,0,mt,dt,null));else if(w.isDataTexture)if(kt.length>0){Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,bt,Ct,kt[0].width,kt[0].height);for(let nt=0,ot=kt.length;nt<ot;nt++)At=kt[nt],Ot?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,At.width,At.height,mt,dt,At.data):e.texImage2D(i.TEXTURE_2D,nt,Ct,At.width,At.height,0,mt,dt,At.data);w.generateMipmaps=!1}else Ot?(ee&&e.texStorage2D(i.TEXTURE_2D,bt,Ct,lt.width,lt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,mt,dt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,lt.width,lt.height,0,mt,dt,lt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ot&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Ct,kt[0].width,kt[0].height,lt.depth);for(let nt=0,ot=kt.length;nt<ot;nt++)if(At=kt[nt],w.format!==Xe)if(mt!==null)if(Ot){if(B)if(w.layerUpdates.size>0){const Mt=gl(At.width,At.height,w.format,w.type);for(const St of w.layerUpdates){const Zt=At.data.subarray(St*Mt/At.data.BYTES_PER_ELEMENT,(St+1)*Mt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,St,At.width,At.height,1,mt,Zt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,lt.depth,mt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Ct,At.width,At.height,lt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,lt.depth,mt,dt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Ct,At.width,At.height,lt.depth,0,mt,dt,At.data)}else{Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,bt,Ct,kt[0].width,kt[0].height);for(let nt=0,ot=kt.length;nt<ot;nt++)At=kt[nt],w.format!==Xe?mt!==null?Ot?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,At.width,At.height,mt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Ct,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,At.width,At.height,mt,dt,At.data):e.texImage2D(i.TEXTURE_2D,nt,Ct,At.width,At.height,0,mt,dt,At.data)}else if(w.isDataArrayTexture)if(Ot){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Ct,lt.width,lt.height,lt.depth),B)if(w.layerUpdates.size>0){const nt=gl(lt.width,lt.height,w.format,w.type);for(const ot of w.layerUpdates){const Mt=lt.data.subarray(ot*nt/lt.data.BYTES_PER_ELEMENT,(ot+1)*nt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,lt.width,lt.height,1,mt,dt,Mt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,mt,dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,lt.width,lt.height,lt.depth,0,mt,dt,lt.data);else if(w.isData3DTexture)Ot?(ee&&e.texStorage3D(i.TEXTURE_3D,bt,Ct,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,mt,dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,lt.width,lt.height,lt.depth,0,mt,dt,lt.data);else if(w.isFramebufferTexture){if(ee)if(Ot)e.texStorage2D(i.TEXTURE_2D,bt,Ct,lt.width,lt.height);else{let nt=lt.width,ot=lt.height;for(let Mt=0;Mt<bt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Ct,nt,ot,0,mt,dt,null),nt>>=1,ot>>=1}}else if(kt.length>0){if(Ot&&ee){const nt=wt(kt[0]);e.texStorage2D(i.TEXTURE_2D,bt,Ct,nt.width,nt.height)}for(let nt=0,ot=kt.length;nt<ot;nt++)At=kt[nt],Ot?B&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt,dt,At):e.texImage2D(i.TEXTURE_2D,nt,Ct,mt,dt,At);w.generateMipmaps=!1}else if(Ot){if(ee){const nt=wt(lt);e.texStorage2D(i.TEXTURE_2D,bt,Ct,nt.width,nt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,mt,dt,lt);p(w)&&u(it),ft.__version=j.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Y(C,w,X){if(w.image.length!==6)return;const it=st(C,w),at=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);const j=n.get(at);if(at.version!==j.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const ft=te.getPrimaries(te.workingColorSpace),ct=w.colorSpace===Dn?null:te.getPrimaries(w.colorSpace),xt=w.colorSpace===Dn||ft===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let ot=0;ot<6;ot++)!Nt&&!lt?mt[ot]=g(w.image[ot],!0,s.maxCubemapSize):mt[ot]=lt?w.image[ot].image:w.image[ot],mt[ot]=Gt(w,mt[ot]);const dt=mt[0],Ct=r.convert(w.format,w.colorSpace),At=r.convert(w.type),kt=_(w.internalFormat,Ct,At,w.colorSpace),Ot=w.isVideoTexture!==!0,ee=j.__version===void 0||it===!0,B=at.dataReady;let bt=T(w,dt);$(i.TEXTURE_CUBE_MAP,w);let nt;if(Nt){Ot&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,kt,dt.width,dt.height);for(let ot=0;ot<6;ot++){nt=mt[ot].mipmaps;for(let Mt=0;Mt<nt.length;Mt++){const St=nt[Mt];w.format!==Xe?Ct!==null?Ot?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,0,0,St.width,St.height,Ct,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,kt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,0,0,St.width,St.height,Ct,At,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,kt,St.width,St.height,0,Ct,At,St.data)}}}else{if(nt=w.mipmaps,Ot&&ee){nt.length>0&&bt++;const ot=wt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,kt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(lt){Ot?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,mt[ot].width,mt[ot].height,Ct,At,mt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,kt,mt[ot].width,mt[ot].height,0,Ct,At,mt[ot].data);for(let Mt=0;Mt<nt.length;Mt++){const Zt=nt[Mt].image[ot].image;Ot?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,0,0,Zt.width,Zt.height,Ct,At,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,kt,Zt.width,Zt.height,0,Ct,At,Zt.data)}}else{Ot?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ct,At,mt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,kt,Ct,At,mt[ot]);for(let Mt=0;Mt<nt.length;Mt++){const St=nt[Mt];Ot?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,0,0,Ct,At,St.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,kt,Ct,At,St.image[ot])}}}p(w)&&u(i.TEXTURE_CUBE_MAP),j.__version=at.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Q(C,w,X,it,at,j){const ft=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),xt=_(X.internalFormat,ft,ct,X.colorSpace),Nt=n.get(w),lt=n.get(X);if(lt.__renderTarget=w,!Nt.__hasExternalTextures){const mt=Math.max(1,w.width>>j),dt=Math.max(1,w.height>>j);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,j,xt,mt,dt,w.depth,0,ft,ct,null):e.texImage2D(at,j,xt,mt,dt,0,ft,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),gt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,at,lt.__webglTexture,0,ut(w)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,at,lt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(C,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const it=w.depthTexture,at=it&&it.isDepthTexture?it.type:null,j=y(w.stencilBuffer,at),ft=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ut(w);gt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,j,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,j,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,j,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{const it=w.textures;for(let at=0;at<it.length;at++){const j=it[at],ft=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),xt=_(j.internalFormat,ft,ct,j.colorSpace),Nt=ut(w);X&&gt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,xt,w.width,w.height):gt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,xt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,xt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(w.depthTexture);it.__renderTarget=w,(!it.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const at=it.__webglTexture,j=ut(w);if(w.depthTexture.format===Ei)gt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(w.depthTexture.format===Ci)gt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function vt(C){const w=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const it=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),it){const at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,it.removeEventListener("dispose",at)};it.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=it}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");rt(w.__webglFramebuffer,C)}else if(X){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]===void 0)w.__webglDepthbuffer[it]=i.createRenderbuffer(),q(w.__webglDepthbuffer[it],C,!1);else{const at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),q(w.__webglDepthbuffer,C,!1);else{const it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,w,X){const it=n.get(C);w!==void 0&&Q(it.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&vt(C)}function It(C){const w=C.texture,X=n.get(C),it=n.get(w);C.addEventListener("dispose",E);const at=C.textures,j=C.isWebGLCubeRenderTarget===!0,ft=at.length>1;if(ft||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=w.version,a.memory.textures++),j){X.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ct]=[];for(let xt=0;xt<w.mipmaps.length;xt++)X.__webglFramebuffer[ct][xt]=i.createFramebuffer()}else X.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ct=0;ct<w.mipmaps.length;ct++)X.__webglFramebuffer[ct]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ft)for(let ct=0,xt=at.length;ct<xt;ct++){const Nt=n.get(at[ct]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&gt(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){const xt=at[ct];X.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ct]);const Nt=r.convert(xt.format,xt.colorSpace),lt=r.convert(xt.type),mt=_(xt.internalFormat,Nt,lt,xt.colorSpace,C.isXRRenderTarget===!0),dt=ut(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,X.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),q(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),$(i.TEXTURE_CUBE_MAP,w);for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)Q(X.__webglFramebuffer[ct][xt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,xt);else Q(X.__webglFramebuffer[ct],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(w)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ct=0,xt=at.length;ct<xt;ct++){const Nt=at[ct],lt=n.get(Nt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),$(i.TEXTURE_2D,Nt),Q(X.__webglFramebuffer,C,Nt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),p(Nt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,it.__webglTexture),$(ct,w),w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)Q(X.__webglFramebuffer[xt],C,w,i.COLOR_ATTACHMENT0,ct,xt);else Q(X.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,ct,0);p(w)&&u(ct),e.unbindTexture()}C.depthBuffer&&vt(C)}function Et(C){const w=C.textures;for(let X=0,it=w.length;X<it;X++){const at=w[X];if(p(at)){const j=M(C),ft=n.get(at).__webglTexture;e.bindTexture(j,ft),u(j),e.unbindTexture()}}}const Lt=[],F=[];function Dt(C){if(C.samples>0){if(gt(C)===!1){const w=C.textures,X=C.width,it=C.height;let at=i.COLOR_BUFFER_BIT;const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),ct=w.length>1;if(ct)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[xt]);const Nt=n.get(w[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,X,it,0,0,X,it,at,i.NEAREST),l===!0&&(Lt.length=0,F.length=0,Lt.push(i.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Lt.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[xt]);const Nt=n.get(w[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ut(C){return Math.min(s.maxSamples,C.samples)}function gt(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _t(C){const w=a.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function Gt(C,w){const X=C.colorSpace,it=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Ii&&X!==Dn&&(te.getTransfer(X)===oe?(it!==Xe||at!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=L,this.rebindTextures=ht,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=gt}function tg(i,t){function e(n,s=Dn){let r;const a=te.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===sc)return i.RGB;if(n===Xe)return i.RGBA;if(n===rc)return i.LUMINANCE;if(n===ac)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===Ka)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===oc)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Bs||n===ks||n===Zs||n===Hs)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===ba||n===Sa||n===Ta||n===Ea||n===wa||n===Aa||n===Ra||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xs||n===Pa||n===Ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xs)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===Ia||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const eg={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ns;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends En{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,x=null;const g=new sg,p=e.getContextAttributes();let u=null,M=null;const _=[],y=[],T=new Wt;let v=null;const E=new Le;E.viewport=new ne;const A=new Le;A.viewport=new ne;const b=[E,A],S=new ud;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=_[O];return Y===void 0&&(Y=new Xr,_[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=_[O];return Y===void 0&&(Y=new Xr,_[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=_[O];return Y===void 0&&(Y=new Xr,_[O]=Y),Y.getHandSpace()};function I(O){const Y=y.indexOf(O.inputSource);if(Y===-1)return;const Q=_[Y];Q!==void 0&&(Q.update(O.inputSource,O.frame,c||a),Q.dispatchEvent({type:O.type,data:O.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let O=0;O<_.length;O++){const Y=y[O];Y!==null&&(y[O]=null,_[O].disconnect(Y))}P=null,D=null,g.reset(),t.setRenderTarget(u),m=null,f=null,h=null,s=null,M=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ni(m.framebufferWidth,m.framebufferHeight,{format:Xe,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,Q=null,q=null;p.depth&&(q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=p.stencil?Ci:Ei,Q=p.stencil?Pi:ei);const rt={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ni(f.textureWidth,f.textureHeight,{format:Xe,type:Tn,depthTexture:new Sc(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(O){for(let Y=0;Y<O.removed.length;Y++){const Q=O.removed[Y],q=y.indexOf(Q);q>=0&&(y[q]=null,_[q].disconnect(Q))}for(let Y=0;Y<O.added.length;Y++){const Q=O.added[Y];let q=y.indexOf(Q);if(q===-1){for(let vt=0;vt<_.length;vt++)if(vt>=y.length){y.push(Q),q=vt;break}else if(y[vt]===null){y[vt]=Q,q=vt;break}if(q===-1)break}const rt=_[q];rt&&rt.connect(Q)}}const z=new G,H=new G;function L(O,Y,Q){z.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(Q.matrixWorld);const q=z.distanceTo(H),rt=Y.projectionMatrix.elements,vt=Q.projectionMatrix.elements,ht=rt[14]/(rt[10]-1),It=rt[14]/(rt[10]+1),Et=(rt[9]+1)/rt[5],Lt=(rt[9]-1)/rt[5],F=(rt[8]-1)/rt[0],Dt=(vt[8]+1)/vt[0],ut=ht*F,gt=ht*Dt,_t=q/(-F+Dt),Gt=_t*-F;if(Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Gt),O.translateZ(_t),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),rt[10]===-1)O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const wt=ht+_t,C=It+_t,w=ut-Gt,X=gt+(q-Gt),it=Et*It/C*wt,at=Lt*It/C*wt;O.projectionMatrix.makePerspective(w,X,it,at,wt,C),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function N(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let Y=O.near,Q=O.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),S.near=A.near=E.near=Y,S.far=A.far=E.far=Q,(P!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,D=S.far),E.layers.mask=O.layers.mask|2,A.layers.mask=O.layers.mask|4,S.layers.mask=E.layers.mask|A.layers.mask;const q=O.parent,rt=S.cameras;N(S,q);for(let vt=0;vt<rt.length;vt++)N(rt[vt],q);rt.length===2?L(S,E,A):S.projectionMatrix.copy(E.projectionMatrix),V(O,S,q)};function V(O,Y,Q){Q===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(Q.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Di*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let W=null;function $(O,Y){if(d=Y.getViewerPose(c||a),x=Y,d!==null){const Q=d.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let q=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,q=!0);for(let vt=0;vt<Q.length;vt++){const ht=Q[vt];let It=null;if(m!==null)It=m.getViewport(ht);else{const Lt=h.getViewSubImage(f,ht);It=Lt.viewport,vt===0&&(t.setRenderTargetTextures(M,Lt.colorTexture,f.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(M))}let Et=b[vt];Et===void 0&&(Et=new Le,Et.layers.enable(vt),Et.viewport=new ne,b[vt]=Et),Et.matrix.fromArray(ht.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(ht.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(It.x,It.y,It.width,It.height),vt===0&&(S.matrix.copy(Et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),q===!0&&S.cameras.push(Et)}const rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const vt=h.getDepthInformation(Q[0]);vt&&vt.isValid&&vt.texture&&g.init(t,vt,s.renderState)}}for(let Q=0;Q<_.length;Q++){const q=y[Q],rt=_[Q];q!==null&&rt!==void 0&&rt.update(q,Y,c||a)}W&&W(O,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),x=null}const st=new Cc;st.setAnimationLoop($),this.setAnimationLoop=function(O){W=O},this.dispose=function(){}}}const Hn=new rn,ag=new Jt;function og(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,gc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,M,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(r(p,u),x(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,M,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ne&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ne&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const M=t.get(u),_=M.envMap,y=M.envMapRotation;_&&(p.envMap.value=_,Hn.copy(y),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),p.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Hn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,M,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=_*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ne&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const M=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const y=_.program;n.uniformBlockBinding(M,y)}function c(M,_){let y=s[M.id];y===void 0&&(x(M),y=d(M),s[M.id]=y,M.addEventListener("dispose",p));const T=_.program;n.updateUBOMapping(M,T);const v=t.render.frame;r[M.id]!==v&&(f(M),r[M.id]=v)}function d(M){const _=h();M.__bindingPointIndex=_;const y=i.createBuffer(),T=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=s[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let v=0,E=y.length;v<E;v++){const A=Array.isArray(y[v])?y[v]:[y[v]];for(let b=0,S=A.length;b<S;b++){const P=A[b];if(m(P,v,b,T)===!0){const D=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let k=0;k<I.length;k++){const z=I[k],H=g(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+U,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,U),U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,_,y,T){const v=M.value,E=_+"_"+y;if(T[E]===void 0)return typeof v=="number"||typeof v=="boolean"?T[E]=v:T[E]=v.clone(),!0;{const A=T[E];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return T[E]=v,!0}else if(A.equals(v)===!1)return A.copy(v),!0}return!1}function x(M){const _=M.uniforms;let y=0;const T=16;for(let E=0,A=_.length;E<A;E++){const b=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,P=b.length;S<P;S++){const D=b[S],I=Array.isArray(D.value)?D.value:[D.value];for(let U=0,k=I.length;U<k;U++){const z=I[U],H=g(z),L=y%T,N=L%H.boundary,V=L+N;y+=N,V!==0&&T-V<H.storage&&(y+=T-V),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=H.storage}}}const v=y%T;return v>0&&(y+=T-v),M.__size=y,M.__cache={},this}function g(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){const _=M.target;_.removeEventListener("dispose",p);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class cg{constructor(t={}){const{canvas:e=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=new Uint32Array(4),g=new Int32Array(4);let p=null,u=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let T=!1,v=0,E=0,A=null,b=-1,S=null;const P=new ne,D=new ne;let I=null;const U=new Yt(0);let k=0,z=e.width,H=e.height,L=1,N=null,V=null;const W=new ne(0,0,z,H),$=new ne(0,0,z,H);let st=!1;const O=new rr;let Y=!1,Q=!1;const q=new Jt,rt=new Jt,vt=new G,ht=new ne,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Lt(){return A===null?L:1}let F=n;function Dt(R,Z){return e.getContext(R,Z)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ka}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",St,!1),F===null){const Z="webgl2";if(F=Dt(Z,R),F===null)throw Dt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,gt,_t,Gt,wt,C,w,X,it,at,j,ft,ct,xt,Nt,lt,mt,dt,Ct,At,kt,Ot,ee,B;function bt(){ut=new vm(F),ut.init(),Ot=new tg(F,ut),gt=new dm(F,ut,t,Ot),_t=new q0(F,ut),gt.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Gt=new Mm(F),wt=new O0,C=new $0(F,ut,_t,wt,gt,Ot,Gt),w=new pm(y),X=new _m(y),it=new Ad(F),ee=new hm(F,it),at=new xm(F,it,Gt,ee),j=new Sm(F,at,it,Gt),Ct=new bm(F,gt,C),lt=new fm(wt),ft=new W0(y,w,X,ut,gt,ee,lt),ct=new og(y,wt),xt=new z0,Nt=new Y0(ut),dt=new cm(y,w,X,_t,j,m,l),mt=new J0(y,j,gt),B=new lg(F,Gt,gt,_t),At=new um(F,ut,Gt),kt=new ym(F,ut,Gt),Gt.programs=ft.programs,y.capabilities=gt,y.extensions=ut,y.properties=wt,y.renderLists=xt,y.shadowMap=mt,y.state=_t,y.info=Gt}bt();const nt=new rg(y,F);this.xr=nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(R){R!==void 0&&(L=R,this.setSize(z,H,!1))},this.getSize=function(R){return R.set(z,H)},this.setSize=function(R,Z,tt=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,H=Z,e.width=Math.floor(R*L),e.height=Math.floor(Z*L),tt===!0&&(e.style.width=R+"px",e.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(z*L,H*L).floor()},this.setDrawingBufferSize=function(R,Z,tt){z=R,H=Z,L=tt,e.width=Math.floor(R*tt),e.height=Math.floor(Z*tt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,Z,tt,et){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,Z,tt,et),_t.viewport(P.copy(W).multiplyScalar(L).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,Z,tt,et){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Z,tt,et),_t.scissor(D.copy($).multiplyScalar(L).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(R){_t.setScissorTest(st=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(R=!0,Z=!0,tt=!0){let et=0;if(R){let K=!1;if(A!==null){const pt=A.texture.format;K=pt===Qa||pt===Ja||pt===ja}if(K){const pt=A.texture.type,Rt=pt===Tn||pt===ei||pt===ss||pt===Pi||pt===Xa||pt===Ya,Pt=dt.getClearColor(),Ut=dt.getClearAlpha(),zt=Pt.r,Bt=Pt.g,Ft=Pt.b;Rt?(x[0]=zt,x[1]=Bt,x[2]=Ft,x[3]=Ut,F.clearBufferuiv(F.COLOR,0,x)):(g[0]=zt,g[1]=Bt,g[2]=Ft,g[3]=Ut,F.clearBufferiv(F.COLOR,0,g))}else et|=F.COLOR_BUFFER_BIT}Z&&(et|=F.DEPTH_BUFFER_BIT),tt&&(et|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),dt.dispose(),xt.dispose(),Nt.dispose(),wt.dispose(),w.dispose(),X.dispose(),j.dispose(),ee.dispose(),B.dispose(),ft.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ki),nt.removeEventListener("sessionend",po),Wn.stop()};function ot(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Gt.autoReset,Z=mt.enabled,tt=mt.autoUpdate,et=mt.needsUpdate,K=mt.type;bt(),Gt.autoReset=R,mt.enabled=Z,mt.autoUpdate=tt,mt.needsUpdate=et,mt.type=K}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Zt(R){const Z=R.target;Z.removeEventListener("dispose",Zt),ce(Z)}function ce(R){me(R),wt.remove(R)}function me(R){const Z=wt.get(R).programs;Z!==void 0&&(Z.forEach(function(tt){ft.releaseProgram(tt)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,tt,et,K,pt){Z===null&&(Z=It);const Rt=K.isMesh&&K.matrixWorld.determinant()<0,Pt=qc(R,Z,tt,et,K);_t.setMaterial(et,Rt);let Ut=tt.index,zt=1;if(et.wireframe===!0){if(Ut=at.getWireframeAttribute(tt),Ut===void 0)return;zt=2}const Bt=tt.drawRange,Ft=tt.attributes.position;let Qt=Bt.start*zt,ie=(Bt.start+Bt.count)*zt;pt!==null&&(Qt=Math.max(Qt,pt.start*zt),ie=Math.min(ie,(pt.start+pt.count)*zt)),Ut!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,Ut.count)):Ft!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Ft.count));const fe=ie-Qt;if(fe<0||fe===1/0)return;ee.setup(K,et,Pt,tt,Ut);let de,$t=At;if(Ut!==null&&(de=it.get(Ut),$t=kt,$t.setIndex(de)),K.isMesh)et.wireframe===!0?(_t.setLineWidth(et.wireframeLinewidth*Lt()),$t.setMode(F.LINES)):$t.setMode(F.TRIANGLES);else if(K.isLine){let Vt=et.linewidth;Vt===void 0&&(Vt=1),_t.setLineWidth(Vt*Lt()),K.isLineSegments?$t.setMode(F.LINES):K.isLineLoop?$t.setMode(F.LINE_LOOP):$t.setMode(F.LINE_STRIP)}else K.isPoints?$t.setMode(F.POINTS):K.isSprite&&$t.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)$t.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))$t.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Vt=K._multiDrawStarts,Me=K._multiDrawCounts,se=K._multiDrawCount,je=Ut?it.get(Ut).bytesPerElement:1,ii=wt.get(et).currentProgram.getUniforms();for(let Ve=0;Ve<se;Ve++)ii.setValue(F,"_gl_DrawID",Ve),$t.render(Vt[Ve]/je,Me[Ve])}else if(K.isInstancedMesh)$t.renderInstances(Qt,fe,K.count);else if(tt.isInstancedBufferGeometry){const Vt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Me=Math.min(tt.instanceCount,Vt);$t.renderInstances(Qt,fe,Me)}else $t.render(Qt,fe)};function qt(R,Z,tt){R.transparent===!0&&R.side===Mn&&R.forceSinglePass===!1?(R.side=Ne,R.needsUpdate=!0,hs(R,Z,tt),R.side=Sn,R.needsUpdate=!0,hs(R,Z,tt),R.side=Mn):hs(R,Z,tt)}this.compile=function(R,Z,tt=null){tt===null&&(tt=R),u=Nt.get(tt),u.init(Z),_.push(u),tt.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(u.pushLight(K),K.castShadow&&u.pushShadow(K))}),R!==tt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(u.pushLight(K),K.castShadow&&u.pushShadow(K))}),u.setupLights();const et=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const pt=K.material;if(pt)if(Array.isArray(pt))for(let Rt=0;Rt<pt.length;Rt++){const Pt=pt[Rt];qt(Pt,tt,K),et.add(Pt)}else qt(pt,tt,K),et.add(pt)}),_.pop(),u=null,et},this.compileAsync=function(R,Z,tt=null){const et=this.compile(R,Z,tt);return new Promise(K=>{function pt(){if(et.forEach(function(Rt){wt.get(Rt).currentProgram.isReady()&&et.delete(Rt)}),et.size===0){K(R);return}setTimeout(pt,10)}ut.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Ce=null;function ze(R){Ce&&Ce(R)}function ki(){Wn.stop()}function po(){Wn.start()}const Wn=new Cc;Wn.setAnimationLoop(ze),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(R){Ce=R,nt.setAnimationLoop(R),R===null?Wn.stop():Wn.start()},nt.addEventListener("sessionstart",ki),nt.addEventListener("sessionend",po),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(Z),Z=nt.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,Z,A),u=Nt.get(R,_.length),u.init(Z),_.push(u),rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),O.setFromProjectionMatrix(rt),Q=this.localClippingEnabled,Y=lt.init(this.clippingPlanes,Q),p=xt.get(R,M.length),p.init(),M.push(p),nt.enabled===!0&&nt.isPresenting===!0){const pt=y.xr.getDepthSensingMesh();pt!==null&&ur(pt,Z,-1/0,y.sortObjects)}ur(R,Z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(N,V),Et=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Et&&dt.addToRenderList(p,R),this.info.render.frame++,Y===!0&&lt.beginShadows();const tt=u.state.shadowsArray;mt.render(tt,R,Z),Y===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=p.opaque,K=p.transmissive;if(u.setupLights(),Z.isArrayCamera){const pt=Z.cameras;if(K.length>0)for(let Rt=0,Pt=pt.length;Rt<Pt;Rt++){const Ut=pt[Rt];go(et,K,R,Ut)}Et&&dt.render(R);for(let Rt=0,Pt=pt.length;Rt<Pt;Rt++){const Ut=pt[Rt];mo(p,R,Ut,Ut.viewport)}}else K.length>0&&go(et,K,R,Z),Et&&dt.render(R),mo(p,R,Z);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(y,R,Z),ee.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(u=_[_.length-1],Y===!0&&lt.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function ur(R,Z,tt,et){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)u.pushLight(R),R.castShadow&&u.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||O.intersectsSprite(R)){et&&ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(rt);const Rt=j.update(R),Pt=R.material;Pt.visible&&p.push(R,Rt,Pt,tt,ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||O.intersectsObject(R))){const Rt=j.update(R),Pt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ht.copy(R.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ht.copy(Rt.boundingSphere.center)),ht.applyMatrix4(R.matrixWorld).applyMatrix4(rt)),Array.isArray(Pt)){const Ut=Rt.groups;for(let zt=0,Bt=Ut.length;zt<Bt;zt++){const Ft=Ut[zt],Qt=Pt[Ft.materialIndex];Qt&&Qt.visible&&p.push(R,Rt,Qt,tt,ht.z,Ft)}}else Pt.visible&&p.push(R,Rt,Pt,tt,ht.z,null)}}const pt=R.children;for(let Rt=0,Pt=pt.length;Rt<Pt;Rt++)ur(pt[Rt],Z,tt,et)}function mo(R,Z,tt,et){const K=R.opaque,pt=R.transmissive,Rt=R.transparent;u.setupLightsView(tt),Y===!0&&lt.setGlobalState(y.clippingPlanes,tt),et&&_t.viewport(P.copy(et)),K.length>0&&cs(K,Z,tt),pt.length>0&&cs(pt,Z,tt),Rt.length>0&&cs(Rt,Z,tt),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function go(R,Z,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[et.id]===void 0&&(u.state.transmissionRenderTarget[et.id]=new ni(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?as:Tn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const pt=u.state.transmissionRenderTarget[et.id],Rt=et.viewport||P;pt.setSize(Rt.z,Rt.w);const Pt=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(U),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Et&&dt.render(tt);const Ut=y.toneMapping;y.toneMapping=Nn;const zt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),u.setupLightsView(et),Y===!0&&lt.setGlobalState(y.clippingPlanes,et),cs(R,tt,et),C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Ft=0,Qt=Z.length;Ft<Qt;Ft++){const ie=Z[Ft],fe=ie.object,de=ie.geometry,$t=ie.material,Vt=ie.group;if($t.side===Mn&&fe.layers.test(et.layers)){const Me=$t.side;$t.side=Ne,$t.needsUpdate=!0,_o(fe,tt,et,de,$t,Vt),$t.side=Me,$t.needsUpdate=!0,Bt=!0}}Bt===!0&&(C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt))}y.setRenderTarget(Pt),y.setClearColor(U,k),zt!==void 0&&(et.viewport=zt),y.toneMapping=Ut}function cs(R,Z,tt){const et=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,pt=R.length;K<pt;K++){const Rt=R[K],Pt=Rt.object,Ut=Rt.geometry,zt=et===null?Rt.material:et,Bt=Rt.group;Pt.layers.test(tt.layers)&&_o(Pt,Z,tt,Ut,zt,Bt)}}function _o(R,Z,tt,et,K,pt){R.onBeforeRender(y,Z,tt,et,K,pt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(y,Z,tt,et,R,pt),K.transparent===!0&&K.side===Mn&&K.forceSinglePass===!1?(K.side=Ne,K.needsUpdate=!0,y.renderBufferDirect(tt,Z,et,K,R,pt),K.side=Sn,K.needsUpdate=!0,y.renderBufferDirect(tt,Z,et,K,R,pt),K.side=Mn):y.renderBufferDirect(tt,Z,et,K,R,pt),R.onAfterRender(y,Z,tt,et,K,pt)}function hs(R,Z,tt){Z.isScene!==!0&&(Z=It);const et=wt.get(R),K=u.state.lights,pt=u.state.shadowsArray,Rt=K.state.version,Pt=ft.getParameters(R,K.state,pt,Z,tt),Ut=ft.getProgramCacheKey(Pt);let zt=et.programs;et.environment=R.isMeshStandardMaterial?Z.environment:null,et.fog=Z.fog,et.envMap=(R.isMeshStandardMaterial?X:w).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,zt===void 0&&(R.addEventListener("dispose",Zt),zt=new Map,et.programs=zt);let Bt=zt.get(Ut);if(Bt!==void 0){if(et.currentProgram===Bt&&et.lightsStateVersion===Rt)return xo(R,Pt),Bt}else Pt.uniforms=ft.getUniforms(R),R.onBeforeCompile(Pt,y),Bt=ft.acquireProgram(Pt,Ut),zt.set(Ut,Bt),et.uniforms=Pt.uniforms;const Ft=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ft.clippingPlanes=lt.uniform),xo(R,Pt),et.needsLights=th(R),et.lightsStateVersion=Rt,et.needsLights&&(Ft.ambientLightColor.value=K.state.ambient,Ft.lightProbe.value=K.state.probe,Ft.directionalLights.value=K.state.directional,Ft.directionalLightShadows.value=K.state.directionalShadow,Ft.spotLights.value=K.state.spot,Ft.spotLightShadows.value=K.state.spotShadow,Ft.rectAreaLights.value=K.state.rectArea,Ft.ltc_1.value=K.state.rectAreaLTC1,Ft.ltc_2.value=K.state.rectAreaLTC2,Ft.pointLights.value=K.state.point,Ft.pointLightShadows.value=K.state.pointShadow,Ft.hemisphereLights.value=K.state.hemi,Ft.directionalShadowMap.value=K.state.directionalShadowMap,Ft.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ft.spotShadowMap.value=K.state.spotShadowMap,Ft.spotLightMatrix.value=K.state.spotLightMatrix,Ft.spotLightMap.value=K.state.spotLightMap,Ft.pointShadowMap.value=K.state.pointShadowMap,Ft.pointShadowMatrix.value=K.state.pointShadowMatrix),et.currentProgram=Bt,et.uniformsList=null,Bt}function vo(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Ys.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function xo(R,Z){const tt=wt.get(R);tt.outputColorSpace=Z.outputColorSpace,tt.batching=Z.batching,tt.batchingColor=Z.batchingColor,tt.instancing=Z.instancing,tt.instancingColor=Z.instancingColor,tt.instancingMorph=Z.instancingMorph,tt.skinning=Z.skinning,tt.morphTargets=Z.morphTargets,tt.morphNormals=Z.morphNormals,tt.morphColors=Z.morphColors,tt.morphTargetsCount=Z.morphTargetsCount,tt.numClippingPlanes=Z.numClippingPlanes,tt.numIntersection=Z.numClipIntersection,tt.vertexAlphas=Z.vertexAlphas,tt.vertexTangents=Z.vertexTangents,tt.toneMapping=Z.toneMapping}function qc(R,Z,tt,et,K){Z.isScene!==!0&&(Z=It),C.resetTextureUnits();const pt=Z.fog,Rt=et.isMeshStandardMaterial?Z.environment:null,Pt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ii,Ut=(et.isMeshStandardMaterial?X:w).get(et.envMap||Rt),zt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Bt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ft=!!tt.morphAttributes.position,Qt=!!tt.morphAttributes.normal,ie=!!tt.morphAttributes.color;let fe=Nn;et.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fe=y.toneMapping);const de=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,$t=de!==void 0?de.length:0,Vt=wt.get(et),Me=u.state.lights;if(Y===!0&&(Q===!0||R!==S)){const we=R===S&&et.id===b;lt.setState(et,R,we)}let se=!1;et.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Me.state.version||Vt.outputColorSpace!==Pt||K.isBatchedMesh&&Vt.batching===!1||!K.isBatchedMesh&&Vt.batching===!0||K.isBatchedMesh&&Vt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Vt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||K.isInstancedMesh&&Vt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Vt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Vt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Vt.instancingMorph===!1&&K.morphTexture!==null||Vt.envMap!==Ut||et.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==lt.numPlanes||Vt.numIntersection!==lt.numIntersection)||Vt.vertexAlphas!==zt||Vt.vertexTangents!==Bt||Vt.morphTargets!==Ft||Vt.morphNormals!==Qt||Vt.morphColors!==ie||Vt.toneMapping!==fe||Vt.morphTargetsCount!==$t)&&(se=!0):(se=!0,Vt.__version=et.version);let je=Vt.currentProgram;se===!0&&(je=hs(et,Z,K));let ii=!1,Ve=!1,Zi=!1;const he=je.getUniforms(),Be=Vt.uniforms;if(_t.useProgram(je.program)&&(ii=!0,Ve=!0,Zi=!0),et.id!==b&&(b=et.id,Ve=!0),ii||S!==R){_t.buffers.depth.getReversed()?(q.copy(R.projectionMatrix),fu(q),pu(q),he.setValue(F,"projectionMatrix",q)):he.setValue(F,"projectionMatrix",R.projectionMatrix),he.setValue(F,"viewMatrix",R.matrixWorldInverse);const Ie=he.map.cameraPosition;Ie!==void 0&&Ie.setValue(F,vt.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&he.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&he.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ve=!0,Zi=!0)}if(K.isSkinnedMesh){he.setOptional(F,K,"bindMatrix"),he.setOptional(F,K,"bindMatrixInverse");const we=K.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),he.setValue(F,"boneTexture",we.boneTexture,C))}K.isBatchedMesh&&(he.setOptional(F,K,"batchingTexture"),he.setValue(F,"batchingTexture",K._matricesTexture,C),he.setOptional(F,K,"batchingIdTexture"),he.setValue(F,"batchingIdTexture",K._indirectTexture,C),he.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&he.setValue(F,"batchingColorTexture",K._colorsTexture,C));const ke=tt.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&Ct.update(K,tt,je),(Ve||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,he.setValue(F,"receiveShadow",K.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Be.envMap.value=Ut,Be.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&Z.environment!==null&&(Be.envMapIntensity.value=Z.environmentIntensity),Ve&&(he.setValue(F,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&$c(Be,Zi),pt&&et.fog===!0&&ct.refreshFogUniforms(Be,pt),ct.refreshMaterialUniforms(Be,et,L,H,u.state.transmissionRenderTarget[R.id]),Ys.upload(F,vo(Vt),Be,C)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ys.upload(F,vo(Vt),Be,C),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&he.setValue(F,"center",K.center),he.setValue(F,"modelViewMatrix",K.modelViewMatrix),he.setValue(F,"normalMatrix",K.normalMatrix),he.setValue(F,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const we=et.uniformsGroups;for(let Ie=0,dr=we.length;Ie<dr;Ie++){const On=we[Ie];B.update(On,je),B.bind(On,je)}}return je}function $c(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function th(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,Z,tt){wt.get(R.texture).__webglTexture=Z,wt.get(R.depthTexture).__webglTexture=tt;const et=wt.get(R);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){const tt=wt.get(R);tt.__webglFramebuffer=Z,tt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,tt=0){A=R,v=Z,E=tt;let et=!0,K=null,pt=!1,Rt=!1;if(R){const Ut=wt.get(R);if(Ut.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(F.FRAMEBUFFER,null),et=!1;else if(Ut.__webglFramebuffer===void 0)C.setupRenderTarget(R);else if(Ut.__hasExternalTextures)C.rebindTextures(R,wt.get(R.texture).__webglTexture,wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ft=R.depthTexture;if(Ut.__boundDepthTexture!==Ft){if(Ft!==null&&wt.has(Ft)&&(R.width!==Ft.image.width||R.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(R)}}const zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Rt=!0);const Bt=wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Bt[Z])?K=Bt[Z][tt]:K=Bt[Z],pt=!0):R.samples>0&&C.useMultisampledRTT(R)===!1?K=wt.get(R).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[tt]:K=Bt,P.copy(R.viewport),D.copy(R.scissor),I=R.scissorTest}else P.copy(W).multiplyScalar(L).floor(),D.copy($).multiplyScalar(L).floor(),I=st;if(_t.bindFramebuffer(F.FRAMEBUFFER,K)&&et&&_t.drawBuffers(R,K),_t.viewport(P),_t.scissor(D),_t.setScissorTest(I),pt){const Ut=wt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ut.__webglTexture,tt)}else if(Rt){const Ut=wt.get(R.texture),zt=Z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,tt||0,zt)}b=-1},this.readRenderTargetPixels=function(R,Z,tt,et,K,pt,Rt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){_t.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const Ut=R.texture,zt=Ut.format,Bt=Ut.type;if(!gt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-et&&tt>=0&&tt<=R.height-K&&F.readPixels(Z,tt,et,K,Ot.convert(zt),Ot.convert(Bt),pt)}finally{const Ut=A!==null?wt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(R,Z,tt,et,K,pt,Rt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){const Ut=R.texture,zt=Ut.format,Bt=Ut.type;if(!gt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-et&&tt>=0&&tt<=R.height-K){_t.bindFramebuffer(F.FRAMEBUFFER,Pt);const Ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.bufferData(F.PIXEL_PACK_BUFFER,pt.byteLength,F.STREAM_READ),F.readPixels(Z,tt,et,K,Ot.convert(zt),Ot.convert(Bt),0);const Qt=A!==null?wt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Qt);const ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await du(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pt),F.deleteBuffer(Ft),F.deleteSync(ie),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Z=null,tt=0){R.isTexture!==!0&&(yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);const et=Math.pow(2,-tt),K=Math.floor(R.image.width*et),pt=Math.floor(R.image.height*et),Rt=Z!==null?Z.x:0,Pt=Z!==null?Z.y:0;C.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,tt,0,0,Rt,Pt,K,pt),_t.unbindTexture()};const eh=F.createFramebuffer(),nh=F.createFramebuffer();this.copyTextureToTexture=function(R,Z,tt=null,et=null,K=0,pt=null){R.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,R=arguments[1],Z=arguments[2],pt=arguments[3]||0,tt=null),pt===null&&(K!==0?(yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=K,K=0):pt=0);let Rt,Pt,Ut,zt,Bt,Ft,Qt,ie,fe;const de=R.isCompressedTexture?R.mipmaps[pt]:R.image;if(tt!==null)Rt=tt.max.x-tt.min.x,Pt=tt.max.y-tt.min.y,Ut=tt.isBox3?tt.max.z-tt.min.z:1,zt=tt.min.x,Bt=tt.min.y,Ft=tt.isBox3?tt.min.z:0;else{const ke=Math.pow(2,-K);Rt=Math.floor(de.width*ke),Pt=Math.floor(de.height*ke),R.isDataArrayTexture?Ut=de.depth:R.isData3DTexture?Ut=Math.floor(de.depth*ke):Ut=1,zt=0,Bt=0,Ft=0}et!==null?(Qt=et.x,ie=et.y,fe=et.z):(Qt=0,ie=0,fe=0);const $t=Ot.convert(Z.format),Vt=Ot.convert(Z.type);let Me;Z.isData3DTexture?(C.setTexture3D(Z,0),Me=F.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(C.setTexture2DArray(Z,0),Me=F.TEXTURE_2D_ARRAY):(C.setTexture2D(Z,0),Me=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const se=F.getParameter(F.UNPACK_ROW_LENGTH),je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ii=F.getParameter(F.UNPACK_SKIP_PIXELS),Ve=F.getParameter(F.UNPACK_SKIP_ROWS),Zi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Bt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);const he=R.isDataArrayTexture||R.isData3DTexture,Be=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const ke=wt.get(R),we=wt.get(Z),Ie=wt.get(ke.__renderTarget),dr=wt.get(we.__renderTarget);_t.bindFramebuffer(F.READ_FRAMEBUFFER,Ie.__webglFramebuffer),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let On=0;On<Ut;On++)he&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(R).__webglTexture,K,Ft+On),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(Z).__webglTexture,pt,fe+On)),F.blitFramebuffer(zt,Bt,Rt,Pt,Qt,ie,Rt,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);_t.bindFramebuffer(F.READ_FRAMEBUFFER,null),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||wt.has(R)){const ke=wt.get(R),we=wt.get(Z);_t.bindFramebuffer(F.READ_FRAMEBUFFER,eh),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,nh);for(let Ie=0;Ie<Ut;Ie++)he?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,K,Ft+Ie):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,K),Be?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,pt,fe+Ie):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,pt),K!==0?F.blitFramebuffer(zt,Bt,Rt,Pt,Qt,ie,Rt,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):Be?F.copyTexSubImage3D(Me,pt,Qt,ie,fe+Ie,zt,Bt,Rt,Pt):F.copyTexSubImage2D(Me,pt,Qt,ie,zt,Bt,Rt,Pt);_t.bindFramebuffer(F.READ_FRAMEBUFFER,null),_t.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Be?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Me,pt,Qt,ie,fe,Rt,Pt,Ut,$t,Vt,de.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,pt,Qt,ie,fe,Rt,Pt,Ut,$t,de.data):F.texSubImage3D(Me,pt,Qt,ie,fe,Rt,Pt,Ut,$t,Vt,de):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pt,Qt,ie,Rt,Pt,$t,Vt,de.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pt,Qt,ie,de.width,de.height,$t,de.data):F.texSubImage2D(F.TEXTURE_2D,pt,Qt,ie,Rt,Pt,$t,Vt,de);F.pixelStorei(F.UNPACK_ROW_LENGTH,se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ii),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zi),pt===0&&Z.generateMipmaps&&F.generateMipmap(Me),_t.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,tt=null,et=null,K=0){return R.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,R=arguments[2],Z=arguments[3],K=arguments[4]||0),yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,tt,et,K)},this.initRenderTarget=function(R){wt.get(R).__webglFramebuffer===void 0&&C.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){v=0,E=0,A=null,_t.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}var hg=Object.defineProperty,ug=(i,t,e)=>t in i?hg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,yt=(i,t,e)=>ug(i,typeof t!="symbol"?t+"":t,e);const zi="0.11.9",dg=new Ht;function fg(i,t,e,n){const s=dg.set(i.normal.x,i.normal.y,i.normal.z,t.normal.x,t.normal.y,t.normal.z,e.normal.x,e.normal.y,e.normal.z);return n.set(-i.constant,-t.constant,-e.constant),n.applyMatrix3(s.invert()),n}class pg extends rr{constructor(){super(),yt(this,"points"),this.points=Array(8).fill(0).map(()=>new G)}setFromProjectionMatrix(t,e=cn){return super.setFromProjectionMatrix(t,e),this.calculateFrustumPoints(),this}calculateFrustumPoints(){const{planes:t,points:e}=this;[[t[0],t[3],t[4]],[t[1],t[3],t[4]],[t[0],t[2],t[4]],[t[1],t[2],t[4]],[t[0],t[3],t[5]],[t[1],t[3],t[5]],[t[0],t[2],t[5]],[t[1],t[2],t[5]]].forEach((n,s)=>{fg(n[0],n[1],n[2],e[s])})}}var Ga=(i=>(i[i.none=0]="none",i[i.create=1]="create",i[i.remove=2]="remove",i))(Ga||{});function mg(i,t,e,n){if(!i.isLeaf&&i.z>e)return 2;const s=i.distRatio;return i.isLeaf&&i.inFrustum&&i.z<e&&s<n&&(i.showing||i.z<=t)?1:!i.isLeaf&&i.z>=t&&s>n?2:0}function xi(i,t,e,n,s,r,a,o){const l=new $n(i,t,e);return l.position.set(n,s,0),l.scale.set(r,a,o),l}function gg(i,t){const{x:e,y:n,z:s}=i,r=[],a=e*2,o=s+1,l=.25,c=.5,d=1;if(s===0&&t.projectionID==="4326"){const h=n,f=1,m=xi(a,h,o,-.25,0,c,f,d),x=xi(a+1,h,o,l,0,c,f,d);r.push(m,x)}else{const h=n*2,f=.5,m=xi(a,h,o,-.25,l,c,f,d),x=xi(a+1,h,o,l,l,c,f,d),g=xi(a,h+1,o,-.25,-.25,c,f,d),p=xi(a+1,h+1,o,l,-.25,c,f,d);r.push(m,x,g,p)}return r}const zl=new G,Bl=new pg,_g=new Jt,vg=new G;class $n extends ue{constructor(t=0,e=0,n=0){super(),yt(this,"x"),yt(this,"y"),yt(this,"z"),yt(this,"isTile",!0),yt(this,"_isLoading",!1),yt(this,"_root",this),yt(this,"_sizeInWorld",-1),yt(this,"_model"),yt(this,"_subTiles"),yt(this,"_isDirty",!1),this.x=t,this.y=e,this.z=n,this.name=`Tile ${n}-${t}-${e}`,this.up.set(0,0,1)}get model(){return this._model}get subTiles(){return this._subTiles}get distRatio(){var n,s;const t=new G().applyMatrix4(this.matrixWorld);t.setY(((s=(n=this.model)==null?void 0:n.geometry.boundingBox)==null?void 0:s.max.z)||0);const e=zl.distanceTo(t)/this._sizeInWorld;return this.inFrustum?e*.8:e*2}get inFrustum(){const t=this.getBBox();return Bl.intersectsBox(t)}get isLeaf(){return!this.subTiles}get showing(){return!!this.model&&this.model.visible}set showing(t){this.model?(t&&this._updateShadow(),t!=this.showing&&(this.model.traverse(e=>e.layers.set(t?0:31)),this.model.visible=t,this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:t}))):console.assert(!t)}_needsLoad(t){var e;return t.downloadingThreads>=t.maxThreads?!1:this.model?!this._isDirty||!this.inFrustum?!1:!((e=this.subTiles)!=null&&e.some(n=>!n._isDirty)):!0}raycast(t){return this.inFrustum}getBBox(){var e;const t=new Ye(new G(-this.scale.x,-this.scale.y,0),new G(this.scale.x,this.scale.y,0)).applyMatrix4(this.matrixWorld);return this.model?t.max.setY(((e=this.model.geometry.boundingBox)==null?void 0:e.max.z)||0):(t.min.setY(-300),t.max.setY(9e3)),t}getTileSize(){if(this._sizeInWorld<0){const t=new Ye(new G(-.5,-.5,0),new G(.5,.5,0)).applyMatrix4(this.matrixWorld);this._sizeInWorld=t.getSize(vg).length(),console.assert(this._sizeInWorld>10)}return this._sizeInWorld}update(t){var r;if(!this.parent||this._isLoading)return;this.parent instanceof $n&&(this._root=this.parent._root),console.assert(this._root.z===0);const{loader:e,minLevel:n,camera:s}=t;if(this.z===0&&(s.getWorldPosition(zl),Bl.setFromProjectionMatrix(_g.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse))),this.z>=n&&this._needsLoad(e)){this.model?this._startModify(e):this._startLoad(e);return}this._updateShadow(),this.LOD(t),(r=this.subTiles)==null||r.forEach(a=>a.update(t))}_updateShadow(){this.model&&(this.model.castShadow=this._root.castShadow,this.model.receiveShadow=this._root.receiveShadow)}LOD(t){const{loader:e,minLevel:n,maxLevel:s,LODThreshold:r}=t,a=mg(this,n,s,r);if(a===Ga.create){const o=gg(this,e);this.add(...o),this._subTiles=o,this._subTiles.forEach(l=>{l.updateMatrixWorld(),l.updateMatrix(),l.getTileSize(),this._root.dispatchEvent({type:"tile-created",tile:l})})}else a===Ga.remove&&this.model&&(this.showing=!0,this.unLoad(e,!1));return a}_checkVisible(){const t=this.parent;if(t instanceof $n)if(t.model){const e=t.subTiles;if(e){const n=!e.some(s=>!s.model);e.forEach(s=>s.showing=n),t.showing=!n}}else this.showing=!0;return this}async _startLoad(t){console.assert(!this.model),this._isLoading=!0;const e=await t.load(this);this._model=e,e.geometry.computeBoundingBox(),this.add(e),this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:!0}),this.isLeaf&&this._checkVisible(),this._isLoading=!1,this._root.dispatchEvent({type:"tile-loaded",tile:this})}async _startModify(t){console.assert(!!this.model),this.model&&(this._isLoading=!0,await t.update(this,this.model),this.model.geometry.computeBoundingBox(),this._root.dispatchEvent({type:"tile-visible-changed",tile:this,visible:!0}),this._isDirty=!1,this._isLoading=!1,this._root.dispatchEvent({type:"tile-loaded",tile:this}))}reload(t,e=!0){return e?this.unLoad(t,!0):(this.traverse(n=>{n instanceof $n&&(n.model||n._isLoading)&&(n._isDirty=!0)}),this)}unLoad(t,e=!0){var n;return this.subTiles&&(this.subTiles.forEach(s=>{s.unLoad(t,!0)}),this.remove(...this.subTiles),this._subTiles=void 0),e&&this.model&&(this.model.removeFromParent(),t.unload(this.model),this._model=void 0,this._isDirty=!1,this._root.dispatchEvent({type:"tile-unload",tile:this})),t.debug>1&&((n=this.getObjectByName("tilebox"))==null||n.geometry.dispose()),this}}class xg extends Tc{constructor(t={}){super({transparent:!1,side:Sn,...t})}}function Gs(...i){const t=i,e=t&&t.length>1&&t[0].constructor||null;if(!e)throw new Error("concatenateTypedArrays - incorrect quantity of arguments or arguments have incompatible data types");const n=t.reduce((a,o)=>a+o.length,0),s=new e(n);let r=0;for(const a of t)s.set(a,r),r+=a.length;return s}function yg(i,t,e,n){const s=Mg(t),r=s.length,a=new Float32Array(r*6),o=new Float32Array(r*4),l=new t.constructor(r*6),c=new Float32Array(r*6);for(let h=0;h<r;h++)bg({edge:s[h],edgeIndex:h,attributes:i,skirtHeight:e,newPosition:a,newTexcoord0:o,newTriangles:l,newNormals:c});i.position.value=Gs(i.position.value,a),i.texcoord.value=Gs(i.texcoord.value,o),i.normal.value=Gs(i.normal.value,c);const d=Gs(t,l);return{attributes:i,indices:d}}function Mg(i){const t=[],e=Array.isArray(i)?i:Array.from(i);for(let s=0;s<e.length;s+=3){const r=e[s],a=e[s+1],o=e[s+2];t.push([r,a],[a,o],[o,r])}t.sort(([s,r],[a,o])=>{const l=Math.min(s,r),c=Math.min(a,o);return l!==c?l-c:Math.max(s,r)-Math.max(a,o)});const n=[];for(let s=0;s<t.length;s++)s+1<t.length&&t[s][0]===t[s+1][1]&&t[s][1]===t[s+1][0]?s++:n.push(t[s]);return n}function bg({edge:i,edgeIndex:t,attributes:e,skirtHeight:n,newPosition:s,newTexcoord0:r,newTriangles:a,newNormals:o}){const l=e.position.value.length,c=t*2,d=c+1;s.set(e.position.value.subarray(i[0]*3,i[0]*3+3),c*3),s[c*3+2]=s[c*3+2]-n,s.set(e.position.value.subarray(i[1]*3,i[1]*3+3),d*3),s[d*3+2]=s[d*3+2]-n,r.set(e.texcoord.value.subarray(i[0]*2,i[0]*2+2),c*2),r.set(e.texcoord.value.subarray(i[1]*2,i[1]*2+2),d*2);const h=t*2*3;a[h]=i[0],a[h+1]=l/3+d,a[h+2]=i[1],a[h+3]=l/3+d,a[h+4]=i[0],a[h+5]=l/3+c,o[h]=0,o[h+1]=0,o[h+2]=1,o[h+3]=0,o[h+4]=0,o[h+5]=1}function Sg(i){if(i.length<4)throw new Error(`DEM array must > 4, got ${i.length}!`);const t=Math.floor(Math.sqrt(i.length)),e=t,n=t,s=Fc(n,e);return{attributes:Tg(i,n,e),indices:s}}function Tg(i,t,e){const n=e*t,s=new Float32Array(n*3),r=new Float32Array(n*2);let a=0;for(let o=0;o<t;o++)for(let l=0;l<e;l++){const c=l/(e-1),d=o/(t-1);r[a*2]=c,r[a*2+1]=d,s[a*3]=c-.5,s[a*3+1]=d-.5,s[a*3+2]=i[(t-o-1)*e+l],a++}return{position:{value:s,size:3},texcoord:{value:r,size:2},normal:{value:Vc(s,Fc(t,e)),size:3}}}function Fc(i,t){const e=6*(t-1)*(i-1),n=new Uint16Array(e);let s=0;for(let r=0;r<i-1;r++)for(let a=0;a<t-1;a++){const o=r*t+a,l=o+1,c=o+t,d=c+1,h=s*6;n[h]=o,n[h+1]=l,n[h+2]=c,n[h+3]=c,n[h+4]=l,n[h+5]=d,s++}return n}function Vc(i,t){const e=new Float32Array(i.length);for(let n=0;n<t.length;n+=3){const s=t[n]*3,r=t[n+1]*3,a=t[n+2]*3,o=i[s],l=i[s+1],c=i[s+2],d=i[r],h=i[r+1],f=i[r+2],m=i[a],x=i[a+1],g=i[a+2],p=d-o,u=h-l,M=f-c,_=m-o,y=x-l,T=g-c,v=u*T-M*y,E=M*_-p*T,A=p*y-u*_,b=Math.sqrt(v*v+E*E+A*A),S=[0,0,1];if(b>0){const P=1/b;S[0]=v*P,S[1]=E*P,S[2]=A*P}for(let P=0;P<3;P++)e[s+P]=e[r+P]=e[a+P]=S[P]}return e}let Eg=class{constructor(t=257){yt(this,"gridSize"),yt(this,"numTriangles"),yt(this,"numParentTriangles"),yt(this,"indices"),yt(this,"coords"),this.gridSize=t;const e=t-1;if(e&e-1)throw new Error(`Expected grid size to be 2^n+1, got ${t}.`);this.numTriangles=e*e*2-2,this.numParentTriangles=this.numTriangles-e*e,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let n=0;n<this.numTriangles;n++){let s=n+2,r=0,a=0,o=0,l=0,c=0,d=0;for(s&1?o=l=c=e:r=a=d=e;(s>>=1)>1;){const f=r+o>>1,m=a+l>>1;s&1?(o=r,l=a,r=c,a=d):(r=o,a=l,o=c,l=d),c=f,d=m}const h=n*4;this.coords[h+0]=r,this.coords[h+1]=a,this.coords[h+2]=o,this.coords[h+3]=l}}createTile(t){return new wg(t,this)}};class wg{constructor(t,e){yt(this,"martini"),yt(this,"terrain"),yt(this,"errors");const n=e.gridSize;if(t.length!==n*n)throw new Error(`Expected terrain data of length ${n*n} (${n} x ${n}), got ${t.length}.`);this.terrain=t,this.martini=e,this.errors=new Float32Array(t.length),this.update()}update(){const{numTriangles:t,numParentTriangles:e,coords:n,gridSize:s}=this.martini,{terrain:r,errors:a}=this;for(let o=t-1;o>=0;o--){const l=o*4,c=n[l+0],d=n[l+1],h=n[l+2],f=n[l+3],m=c+h>>1,x=d+f>>1,g=m+x-d,p=x+c-m,u=(r[d*s+c]+r[f*s+h])/2,M=x*s+m,_=Math.abs(u-r[M]);if(a[M]=Math.max(a[M],_),o<e){const y=(d+p>>1)*s+(c+g>>1),T=(f+p>>1)*s+(h+g>>1);a[M]=Math.max(a[M],a[y],a[T])}}}getGeometryData(t=0){const{gridSize:e,indices:n}=this.martini,{errors:s}=this;let r=0,a=0;const o=e-1;let l,c,d=0;n.fill(0);function h(M,_,y,T,v,E){const A=M+y>>1,b=_+T>>1;Math.abs(M-v)+Math.abs(_-E)>1&&s[b*e+A]>t?(h(v,E,M,_,A,b),h(y,T,v,E,A,b)):(l=_*e+M,c=T*e+y,d=E*e+v,n[l]===0&&(n[l]=++r),n[c]===0&&(n[c]=++r),n[d]===0&&(n[d]=++r),a++)}h(0,0,o,o,o,0),h(o,o,0,0,0,o);const f=r*2,m=a*3,x=new Uint16Array(f),g=new Uint32Array(m);let p=0;function u(M,_,y,T,v,E){const A=M+y>>1,b=_+T>>1;if(Math.abs(M-v)+Math.abs(_-E)>1&&s[b*e+A]>t)u(v,E,M,_,A,b),u(y,T,v,E,A,b);else{const S=n[_*e+M]-1,P=n[T*e+y]-1,D=n[E*e+v]-1;x[2*S]=M,x[2*S+1]=_,x[2*P]=y,x[2*P+1]=T,x[2*D]=v,x[2*D+1]=E,g[p++]=S,g[p++]=P,g[p++]=D}}return u(0,0,o,o,o,0),u(o,o,0,0,0,o),{attributes:this._getMeshAttributes(this.terrain,x,g),indices:g}}_getMeshAttributes(t,e,n){const s=Math.floor(Math.sqrt(t.length)),r=s-1,a=e.length/2,o=new Float32Array(a*3),l=new Float32Array(a*2);for(let d=0;d<a;d++){const h=e[d*2],f=e[d*2+1],m=f*s+h;o[3*d+0]=h/r-.5,o[3*d+1]=.5-f/r,o[3*d+2]=t[m],l[2*d+0]=h/r,l[2*d+1]=1-f/r}const c=Vc(o,n);return{position:{value:o,size:3},texcoord:{value:l,size:2},normal:{value:c,size:3}}}}const Ag={0:7e3,1:6e3,2:5e3,3:4e3,4:3e3,5:2500,6:2e3,7:1500,8:800,9:500,10:200,11:100,12:40,13:12,14:5,15:2,16:1,17:0,18:0,19:0,20:0};class Ni extends Ke{constructor(){super(),yt(this,"type","TileGeometry");const t=new Float32Array([0,0,0,0,1,0,1,1,0,1,0,0]);this.setData(t,1)}setAttribes(t,e=1){const n=1e4/e,s=yg(t.attributes,t.indices,n),{attributes:r,indices:a}=s;return this.setIndex(new Ee(a,1)),this.setAttribute("position",new Ee(r.position.value,r.position.size)),this.setAttribute("uv",new Ee(r.texcoord.value,r.texcoord.size)),this.setAttribute("normal",new Ee(r.normal.value,r.normal.size)),this}setData(t,e,n=!1){if(n){const s=Math.sqrt(t.length),r=new Eg(s).createTile(t).getGeometryData(Ag[e]||0);this.setAttribes(r,e)}else{const s=Sg(t);this.setAttribes(s,e)}return this}}class Rg extends Rc{constructor(){super(...arguments),yt(this,"onParseEnd")}parseEnd(t){this.onParseEnd&&this.onParseEnd(t)}}const kl={name:"GuoJF"},Te={manager:new Rg,demLoaderMap:new Map,imgLoaderMap:new Map,registerMaterialLoader(i){Te.imgLoaderMap.set(i.dataType,i),i.info.author=i.info.author??kl.name},registerGeometryLoader(i){Te.demLoaderMap.set(i.dataType,i),i.info.author=i.info.author??kl.name},getMaterialLoader(i){const t=typeof i=="string"?i:i.dataType,e=Te.imgLoaderMap.get(t);if(e)return e;throw`Image source dataType("${t}") is not support!`},getGeometryLoader(i){const t=typeof i=="string"?i:i.dataType,e=Te.demLoaderMap.get(t);if(e)return e;throw`Terrain source dataType("${t}") is not support!`},getLoaders(){return{imgLoaders:Array.from(Te.imgLoaderMap.values()),demLoaders:Array.from(Te.demLoaderMap.values())}}};function Wc(i,t){const e=Math.floor(i[0]*t),n=Math.floor(i[1]*t),s=Math.floor((i[2]-i[0])*t),r=Math.floor((i[3]-i[1])*t);return{sx:e,sy:n,sw:s,sh:r}}function Oc(i,t,e,n){if(n<i.minLevel)return{url:void 0,clipBounds:[0,0,1,1]};if(n<=i.maxLevel)return{url:i.getUrl(t,e,n),clipBounds:[0,0,1,1]};const s=Pg(t,e,n,i.maxLevel),r=s.parentCoord;return{url:i.getUrl(r.x,r.y,r.z),clipBounds:s.bounds}}function Lg(i,t){const e=i.width,n=new OffscreenCanvas(e,e),s=n.getContext("2d"),{sx:r,sy:a,sw:o,sh:l}=Wc(t,i.width);return s.drawImage(i,r,a,o,l,0,0,e,e),n}function Pg(i,t,e,n){const s=e-n,r={x:i>>s,y:t>>s,z:e-s},a=Math.pow(2,s),o=Math.pow(.5,s),l=i%a/a-.5+o/2,c=t%a/a-.5+o/2,d=new Wt(l,c),h=new Td().setFromCenterAndSize(d,new Wt(o,o)),f=[h.min.x+.5,h.min.y+.5,h.max.x+.5,h.max.y+.5];return{parentCoord:r,bounds:f}}function Cg(i,t,e){if(t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[2]&&t[3]>=e[3])return i;const[n,s,r,a]=t,[o,l,c,d]=e,h=Math.max(n,o),f=Math.max(s,l),m=Math.min(r,c),x=Math.min(a,d);if(h>=m||f>=x)return i;const g=new OffscreenCanvas(i.width,i.height),p=g.getContext("2d");p.drawImage(i,0,0);const u=Math.max(o,n),M=Math.min(c,r),_=Math.max(l,s),y=Math.min(d,a);p.globalCompositeOperation="destination-in";const T=c-o,v=d-l,E=(u-o)/T*g.width,A=(M-o)/T*g.width,b=g.height-(y-l)/v*g.height,S=g.height-(_-l)/v*g.height;return p.beginPath(),p.rect(E,b,A-E,S-b),p.fill(),g}class Ig{constructor(){yt(this,"_downloadingThreads",0),yt(this,"_bounds",[-180,-85,180,85]),yt(this,"_maxThreads",10),yt(this,"_imgSource",[]),yt(this,"_demSource"),yt(this,"debug",0),yt(this,"_errorMaterial",new no({color:0,transparent:!0,opacity:.2,name:"error-material"}))}get bounds(){return this._bounds}set bounds(t){this._bounds=t}get maxThreads(){return this._maxThreads}set maxThreads(t){this._maxThreads=t}get downloadingThreads(){return this._downloadingThreads}get imgSource(){return this._imgSource}set imgSource(t){this._imgSource=t}get demSource(){return this._demSource}set demSource(t){this._demSource=t}get projectionID(){return this.imgSource[0].projectionID}get manager(){return Te.manager}async load(t){const e=this.demSource?1:0+this.imgSource.length;this._downloadingThreads+=e;let n;try{const s=await this.loadMaterial(t),r=await this.loadGeometry(t);n=new Pe(r,s),n.geometry.clearGroups(),n.material.forEach((a,o)=>{n.geometry.addGroup(0,1/0,o)})}finally{this._downloadingThreads-=e}return n}async update(t,e){const n=this.demSource?1:0+this.imgSource.length;this._downloadingThreads+=n;try{const s=await this.loadMaterial(t,e.material),r=await this.loadGeometry(t,e.geometry);r.clearGroups(),s.forEach((a,o)=>{r.addGroup(0,1/0,o)}),r!=e.geometry&&(e.geometry.dispose(),delete e.geometry.userData.source),e.material.forEach((a,o)=>{a!==this._errorMaterial&&a!=s[o]&&(a.dispose(),delete a.userData.source)}),e.geometry=r,e.material=s,console.assert(e.material.length===e.geometry.groups.length)}finally{this._downloadingThreads-=n}}unload(t){t.material.forEach(e=>e.dispose()),t.geometry.clearGroups(),t.geometry.dispose()}async loadGeometry(t,e){return!this.demSource||!this._checkBounds(this.demSource,t)?new Ni:e&&e.userData.source===this.demSource?e:await Te.getGeometryLoader(this.demSource).load({source:this.demSource,...t}).then(n=>(n.userData.source=this.demSource,n)).catch(n=>(this.debug>0&&console.error("Load Geometry Error:",n),new Ni))}async loadMaterial(t,e){const n=[],s=this.imgSource.filter(r=>this._checkBounds(r,t));for(let r=0;r<s.length;r++){const a=s[r];if(e){const l=e[r];if(l&&a===l.userData.source){n.push(l);continue}}const o=await Te.getMaterialLoader(a).load({source:a,...t}).then(l=>(l.userData.source=a,l)).catch(l=>(this.debug>0&&console.error("Load Material Error:",l.target.src),this._errorMaterial.clone()));this._materialClip(o,a,t),n.push(o)}return n}_materialClip(t,e,n){if("map"in t&&t.map instanceof ye){const s=t.map;s.image&&(s.image=Cg(s.image,e._projectionBounds,n.bounds)),s.needsUpdate=!0}return this}_checkBounds(t,e){const n=(s,r)=>{const a=s._projectionBounds;return r[2]>=a[0]&&r[3]>=a[1]&&r[0]<=a[2]&&r[1]<=a[3]};return e.z>=t.minLevel&&n(t,e.bounds)}}class ho{constructor(){yt(this,"info",{version:zi,description:"Terrain loader base class"}),yt(this,"dataType","")}async load(t){const{source:e,x:n,y:s,z:r}=t,{url:a,clipBounds:o}=Oc(e,n,s,r);if(!a)return new Ni;const l=await this.doLoad(a,{...t,clipBounds:o});return Te.manager.parseEnd(l),l}}class Dg{constructor(){yt(this,"info",{version:zi,description:"Image loader base class"}),yt(this,"dataType",""),yt(this,"_material",new xg)}get material(){return this._material}set material(t){this.material.dispose(),this._material=t}async load(t){const{source:e,x:n,y:s,z:r}=t,a=this.createMaterial(t);a.transparent=t.source.transparent,a.opacity=t.source.opacity;const{url:o,clipBounds:l}=Oc(e,n,s,r);return o&&(a.map=await this.doLoad(o,{...t,clipBounds:l}),a.addEventListener("dispose",Gc)),a}createMaterial(t){return this.material.clone()}async doLoad(t,e){return Promise.resolve(void 0)}}const Gc=i=>{const t=i.target.map;t&&(t.image instanceof ImageBitmap&&t.image.close(),t.dispose()),i.target.removeEventListener("dispose",Gc)};class zc extends Dg{constructor(){super(...arguments),yt(this,"info",{version:zi,description:"Tile image loader. It can load xyz tile image."}),yt(this,"dataType","image"),yt(this,"loader",new ls(Te.manager))}async doLoad(t,e){let n=await this.loader.loadAsync(t);const s=e.clipBounds;s[2]-s[0]<1&&(n=Lg(n,s));const r=new ye(n);return r.colorSpace=Ue,r}}jc(new zc);class uo{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const n=this.workersResolve[t];if(n&&n(e),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[t]=s,this.workers[t].postMessage(r,a)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(t,e)):this.queue.push({resolve:n,msg:t,transfer:e})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Bc="dmFyIGhlPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgY2U9KGosWixxKT0+WiBpbiBqP2hlKGosWix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cX0pOmpbWl09cTt2YXIgTj0oaixaLHEpPT5jZShqLHR5cGVvZiBaIT0ic3ltYm9sIj9aKyIiOloscSk7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGooUyxJKXtjb25zdCB5PW5ldyBGbG9hdDMyQXJyYXkoUy5sZW5ndGgpO2ZvcihsZXQgRD0wO0Q8SS5sZW5ndGg7RCs9Myl7Y29uc3QgYT1JW0RdKjMscj1JW0QrMV0qMyxlPUlbRCsyXSozLHM9U1thXSx0PVNbYSsxXSxpPVNbYSsyXSx1PVNbcl0sbj1TW3IrMV0sZj1TW3IrMl0sYz1TW2VdLG89U1tlKzFdLG09U1tlKzJdLHc9dS1zLGg9bi10LGw9Zi1pLGc9Yy1zLE09by10LFU9bS1pLGQ9aCpVLWwqTSxrPWwqZy13KlUseD13Kk0taCpnLHo9TWF0aC5zcXJ0KGQqZCtrKmsreCp4KSxwPVswLDAsMV07aWYoej4wKXtjb25zdCB2PTEvejtwWzBdPWQqdixwWzFdPWsqdixwWzJdPXgqdn1mb3IobGV0IHY9MDt2PDM7disrKXlbYSt2XT15W3Irdl09eVtlK3ZdPXBbdl19cmV0dXJuIHl9Y2xhc3MgWntjb25zdHJ1Y3RvcihJPTI1Nyl7Tih0aGlzLCJncmlkU2l6ZSIpO04odGhpcywibnVtVHJpYW5nbGVzIik7Tih0aGlzLCJudW1QYXJlbnRUcmlhbmdsZXMiKTtOKHRoaXMsImluZGljZXMiKTtOKHRoaXMsImNvb3JkcyIpO3RoaXMuZ3JpZFNpemU9STtjb25zdCB5PUktMTtpZih5JnktMSl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGdyaWQgc2l6ZSB0byBiZSAyXm4rMSwgZ290ICR7SX0uYCk7dGhpcy5udW1UcmlhbmdsZXM9eSp5KjItMix0aGlzLm51bVBhcmVudFRyaWFuZ2xlcz10aGlzLm51bVRyaWFuZ2xlcy15KnksdGhpcy5pbmRpY2VzPW5ldyBVaW50MzJBcnJheSh0aGlzLmdyaWRTaXplKnRoaXMuZ3JpZFNpemUpLHRoaXMuY29vcmRzPW5ldyBVaW50MTZBcnJheSh0aGlzLm51bVRyaWFuZ2xlcyo0KTtmb3IobGV0IEQ9MDtEPHRoaXMubnVtVHJpYW5nbGVzO0QrKyl7bGV0IGE9RCsyLHI9MCxlPTAscz0wLHQ9MCxpPTAsdT0wO2ZvcihhJjE/cz10PWk9eTpyPWU9dT15OyhhPj49MSk+MTspe2NvbnN0IGY9citzPj4xLGM9ZSt0Pj4xO2EmMT8ocz1yLHQ9ZSxyPWksZT11KToocj1zLGU9dCxzPWksdD11KSxpPWYsdT1jfWNvbnN0IG49RCo0O3RoaXMuY29vcmRzW24rMF09cix0aGlzLmNvb3Jkc1tuKzFdPWUsdGhpcy5jb29yZHNbbisyXT1zLHRoaXMuY29vcmRzW24rM109dH19Y3JlYXRlVGlsZShJKXtyZXR1cm4gbmV3IHEoSSx0aGlzKX19Y2xhc3MgcXtjb25zdHJ1Y3RvcihJLHkpe04odGhpcywibWFydGluaSIpO04odGhpcywidGVycmFpbiIpO04odGhpcywiZXJyb3JzIik7Y29uc3QgRD15LmdyaWRTaXplO2lmKEkubGVuZ3RoIT09RCpEKXRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdGVycmFpbiBkYXRhIG9mIGxlbmd0aCAke0QqRH0gKCR7RH0geCAke0R9KSwgZ290ICR7SS5sZW5ndGh9LmApO3RoaXMudGVycmFpbj1JLHRoaXMubWFydGluaT15LHRoaXMuZXJyb3JzPW5ldyBGbG9hdDMyQXJyYXkoSS5sZW5ndGgpLHRoaXMudXBkYXRlKCl9dXBkYXRlKCl7Y29uc3R7bnVtVHJpYW5nbGVzOkksbnVtUGFyZW50VHJpYW5nbGVzOnksY29vcmRzOkQsZ3JpZFNpemU6YX09dGhpcy5tYXJ0aW5pLHt0ZXJyYWluOnIsZXJyb3JzOmV9PXRoaXM7Zm9yKGxldCBzPUktMTtzPj0wO3MtLSl7Y29uc3QgdD1zKjQsaT1EW3QrMF0sdT1EW3QrMV0sbj1EW3QrMl0sZj1EW3QrM10sYz1pK24+PjEsbz11K2Y+PjEsbT1jK28tdSx3PW8raS1jLGg9KHJbdSphK2ldK3JbZiphK25dKS8yLGw9byphK2MsZz1NYXRoLmFicyhoLXJbbF0pO2lmKGVbbF09TWF0aC5tYXgoZVtsXSxnKSxzPHkpe2NvbnN0IE09KHUrdz4+MSkqYSsoaSttPj4xKSxVPShmK3c+PjEpKmErKG4rbT4+MSk7ZVtsXT1NYXRoLm1heChlW2xdLGVbTV0sZVtVXSl9fX1nZXRHZW9tZXRyeURhdGEoST0wKXtjb25zdHtncmlkU2l6ZTp5LGluZGljZXM6RH09dGhpcy5tYXJ0aW5pLHtlcnJvcnM6YX09dGhpcztsZXQgcj0wLGU9MDtjb25zdCBzPXktMTtsZXQgdCxpLHU9MDtELmZpbGwoMCk7ZnVuY3Rpb24gbihsLGcsTSxVLGQsayl7Y29uc3QgeD1sK00+PjEsej1nK1U+PjE7TWF0aC5hYnMobC1kKStNYXRoLmFicyhnLWspPjEmJmFbeip5K3hdPkk/KG4oZCxrLGwsZyx4LHopLG4oTSxVLGQsayx4LHopKToodD1nKnkrbCxpPVUqeStNLHU9ayp5K2QsRFt0XT09PTAmJihEW3RdPSsrciksRFtpXT09PTAmJihEW2ldPSsrciksRFt1XT09PTAmJihEW3VdPSsrciksZSsrKX1uKDAsMCxzLHMscywwKSxuKHMscywwLDAsMCxzKTtjb25zdCBmPXIqMixjPWUqMyxvPW5ldyBVaW50MTZBcnJheShmKSxtPW5ldyBVaW50MzJBcnJheShjKTtsZXQgdz0wO2Z1bmN0aW9uIGgobCxnLE0sVSxkLGspe2NvbnN0IHg9bCtNPj4xLHo9ZytVPj4xO2lmKE1hdGguYWJzKGwtZCkrTWF0aC5hYnMoZy1rKT4xJiZhW3oqeSt4XT5JKWgoZCxrLGwsZyx4LHopLGgoTSxVLGQsayx4LHopO2Vsc2V7Y29uc3QgcD1EW2cqeStsXS0xLHY9RFtVKnkrTV0tMSxWPURbayp5K2RdLTE7b1syKnBdPWwsb1syKnArMV09ZyxvWzIqdl09TSxvWzIqdisxXT1VLG9bMipWXT1kLG9bMipWKzFdPWssbVt3KytdPXAsbVt3KytdPXYsbVt3KytdPVZ9fXJldHVybiBoKDAsMCxzLHMscywwKSxoKHMscywwLDAsMCxzKSx7YXR0cmlidXRlczp0aGlzLl9nZXRNZXNoQXR0cmlidXRlcyh0aGlzLnRlcnJhaW4sbyxtKSxpbmRpY2VzOm19fV9nZXRNZXNoQXR0cmlidXRlcyhJLHksRCl7Y29uc3QgYT1NYXRoLmZsb29yKE1hdGguc3FydChJLmxlbmd0aCkpLHI9YS0xLGU9eS5sZW5ndGgvMixzPW5ldyBGbG9hdDMyQXJyYXkoZSozKSx0PW5ldyBGbG9hdDMyQXJyYXkoZSoyKTtmb3IobGV0IHU9MDt1PGU7dSsrKXtjb25zdCBuPXlbdSoyXSxmPXlbdSoyKzFdLGM9ZiphK247c1szKnUrMF09bi9yLS41LHNbMyp1KzFdPS41LWYvcixzWzMqdSsyXT1JW2NdLHRbMip1KzBdPW4vcix0WzIqdSsxXT0xLWYvcn1jb25zdCBpPWoocyxEKTtyZXR1cm57cG9zaXRpb246e3ZhbHVlOnMsc2l6ZTozfSx0ZXhjb29yZDp7dmFsdWU6dCxzaXplOjJ9LG5vcm1hbDp7dmFsdWU6aSxzaXplOjN9fX19LyogQ29weXJpZ2h0IDIwMTUtMjAyMSBFc3JpLiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wIEBwcmVzZXJ2ZSAqL2NvbnN0IGVlPWZ1bmN0aW9uKCl7dmFyIFM9e307Uy5kZWZhdWx0Tm9EYXRhVmFsdWU9LTM0MDI3OTk5Mzg3OTAxNDg0ZTIyLFMuZGVjb2RlPWZ1bmN0aW9uKGUscyl7cz1zfHx7fTt2YXIgdD1zLmVuY29kZWRNYXNrRGF0YXx8cy5lbmNvZGVkTWFza0RhdGE9PT1udWxsLGk9YShlLHMuaW5wdXRPZmZzZXR8fDAsdCksdT1zLm5vRGF0YVZhbHVlIT09bnVsbD9zLm5vRGF0YVZhbHVlOlMuZGVmYXVsdE5vRGF0YVZhbHVlLG49SShpLHMucGl4ZWxUeXBlfHxGbG9hdDMyQXJyYXkscy5lbmNvZGVkTWFza0RhdGEsdSxzLnJldHVybk1hc2spLGY9e3dpZHRoOmkud2lkdGgsaGVpZ2h0OmkuaGVpZ2h0LHBpeGVsRGF0YTpuLnJlc3VsdFBpeGVscyxtaW5WYWx1ZTpuLm1pblZhbHVlLG1heFZhbHVlOmkucGl4ZWxzLm1heFZhbHVlLG5vRGF0YVZhbHVlOnV9O3JldHVybiBuLnJlc3VsdE1hc2smJihmLm1hc2tEYXRhPW4ucmVzdWx0TWFzaykscy5yZXR1cm5FbmNvZGVkTWFzayYmaS5tYXNrJiYoZi5lbmNvZGVkTWFza0RhdGE9aS5tYXNrLmJpdHNldD9pLm1hc2suYml0c2V0Om51bGwpLHMucmV0dXJuRmlsZUluZm8mJihmLmZpbGVJbmZvPXkoaSkscy5jb21wdXRlVXNlZEJpdERlcHRocyYmKGYuZmlsZUluZm8uYml0RGVwdGhzPUQoaSkpKSxmfTt2YXIgST1mdW5jdGlvbihlLHMsdCxpLHUpe3ZhciBuPTAsZj1lLnBpeGVscy5udW1CbG9ja3NYLGM9ZS5waXhlbHMubnVtQmxvY2tzWSxvPU1hdGguZmxvb3IoZS53aWR0aC9mKSxtPU1hdGguZmxvb3IoZS5oZWlnaHQvYyksdz0yKmUubWF4WkVycm9yLGg9TnVtYmVyLk1BWF9WQUxVRSxsO3Q9dHx8KGUubWFzaz9lLm1hc2suYml0c2V0Om51bGwpO3ZhciBnLE07Zz1uZXcgcyhlLndpZHRoKmUuaGVpZ2h0KSx1JiZ0JiYoTT1uZXcgVWludDhBcnJheShlLndpZHRoKmUuaGVpZ2h0KSk7Zm9yKHZhciBVPW5ldyBGbG9hdDMyQXJyYXkobyptKSxkLGsseD0wO3g8PWM7eCsrKXt2YXIgej14IT09Yz9tOmUuaGVpZ2h0JWM7aWYoeiE9PTApZm9yKHZhciBwPTA7cDw9ZjtwKyspe3ZhciB2PXAhPT1mP286ZS53aWR0aCVmO2lmKHYhPT0wKXt2YXIgVj14KmUud2lkdGgqbStwKm8sVD1lLndpZHRoLXYsQT1lLnBpeGVscy5ibG9ja3Nbbl0sQixMLEY7QS5lbmNvZGluZzwyPyhBLmVuY29kaW5nPT09MD9CPUEucmF3RGF0YToocihBLnN0dWZmZWREYXRhLEEuYml0c1BlclBpeGVsLEEubnVtVmFsaWRQaXhlbHMsQS5vZmZzZXQsdyxVLGUucGl4ZWxzLm1heFZhbHVlKSxCPVUpLEw9MCk6QS5lbmNvZGluZz09PTI/Rj0wOkY9QS5vZmZzZXQ7dmFyIGI7aWYodClmb3Ioaz0wO2s8ejtrKyspe2ZvcihWJjcmJihiPXRbVj4+M10sYjw8PVYmNyksZD0wO2Q8djtkKyspViY3fHwoYj10W1Y+PjNdKSxiJjEyOD8oTSYmKE1bVl09MSksbD1BLmVuY29kaW5nPDI/QltMKytdOkYsaD1oPmw/bDpoLGdbVisrXT1sKTooTSYmKE1bVl09MCksZ1tWKytdPWkpLGI8PD0xO1YrPVR9ZWxzZSBpZihBLmVuY29kaW5nPDIpZm9yKGs9MDtrPHo7aysrKXtmb3IoZD0wO2Q8djtkKyspbD1CW0wrK10saD1oPmw/bDpoLGdbVisrXT1sO1YrPVR9ZWxzZSBmb3IoaD1oPkY/RjpoLGs9MDtrPHo7aysrKXtmb3IoZD0wO2Q8djtkKyspZ1tWKytdPUY7Vis9VH1pZihBLmVuY29kaW5nPT09MSYmTCE9PUEubnVtVmFsaWRQaXhlbHMpdGhyb3ciQmxvY2sgYW5kIE1hc2sgZG8gbm90IG1hdGNoIjtuKyt9fX1yZXR1cm57cmVzdWx0UGl4ZWxzOmcscmVzdWx0TWFzazpNLG1pblZhbHVlOmh9fSx5PWZ1bmN0aW9uKGUpe3JldHVybntmaWxlSWRlbnRpZmllclN0cmluZzplLmZpbGVJZGVudGlmaWVyU3RyaW5nLGZpbGVWZXJzaW9uOmUuZmlsZVZlcnNpb24saW1hZ2VUeXBlOmUuaW1hZ2VUeXBlLGhlaWdodDplLmhlaWdodCx3aWR0aDplLndpZHRoLG1heFpFcnJvcjplLm1heFpFcnJvcixlb2ZPZmZzZXQ6ZS5lb2ZPZmZzZXQsbWFzazplLm1hc2s/e251bUJsb2Nrc1g6ZS5tYXNrLm51bUJsb2Nrc1gsbnVtQmxvY2tzWTplLm1hc2subnVtQmxvY2tzWSxudW1CeXRlczplLm1hc2subnVtQnl0ZXMsbWF4VmFsdWU6ZS5tYXNrLm1heFZhbHVlfTpudWxsLHBpeGVsczp7bnVtQmxvY2tzWDplLnBpeGVscy5udW1CbG9ja3NYLG51bUJsb2Nrc1k6ZS5waXhlbHMubnVtQmxvY2tzWSxudW1CeXRlczplLnBpeGVscy5udW1CeXRlcyxtYXhWYWx1ZTplLnBpeGVscy5tYXhWYWx1ZSxub0RhdGFWYWx1ZTplLm5vRGF0YVZhbHVlfX19LEQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciBzPWUucGl4ZWxzLm51bUJsb2Nrc1gqZS5waXhlbHMubnVtQmxvY2tzWSx0PXt9LGk9MDtpPHM7aSsrKXt2YXIgdT1lLnBpeGVscy5ibG9ja3NbaV07dS5lbmNvZGluZz09PTA/dC5mbG9hdDMyPSEwOnUuZW5jb2Rpbmc9PT0xP3RbdS5iaXRzUGVyUGl4ZWxdPSEwOnRbMF09ITB9cmV0dXJuIE9iamVjdC5rZXlzKHQpfSxhPWZ1bmN0aW9uKGUscyx0KXt2YXIgaT17fSx1PW5ldyBVaW50OEFycmF5KGUscywxMCk7aWYoaS5maWxlSWRlbnRpZmllclN0cmluZz1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdSksaS5maWxlSWRlbnRpZmllclN0cmluZy50cmltKCkhPT0iQ250WkltYWdlIil0aHJvdyJVbmV4cGVjdGVkIGZpbGUgaWRlbnRpZmllciBzdHJpbmc6ICIraS5maWxlSWRlbnRpZmllclN0cmluZztzKz0xMDt2YXIgbj1uZXcgRGF0YVZpZXcoZSxzLDI0KTtpZihpLmZpbGVWZXJzaW9uPW4uZ2V0SW50MzIoMCwhMCksaS5pbWFnZVR5cGU9bi5nZXRJbnQzMig0LCEwKSxpLmhlaWdodD1uLmdldFVpbnQzMig4LCEwKSxpLndpZHRoPW4uZ2V0VWludDMyKDEyLCEwKSxpLm1heFpFcnJvcj1uLmdldEZsb2F0NjQoMTYsITApLHMrPTI0LCF0KWlmKG49bmV3IERhdGFWaWV3KGUscywxNiksaS5tYXNrPXt9LGkubWFzay5udW1CbG9ja3NZPW4uZ2V0VWludDMyKDAsITApLGkubWFzay5udW1CbG9ja3NYPW4uZ2V0VWludDMyKDQsITApLGkubWFzay5udW1CeXRlcz1uLmdldFVpbnQzMig4LCEwKSxpLm1hc2subWF4VmFsdWU9bi5nZXRGbG9hdDMyKDEyLCEwKSxzKz0xNixpLm1hc2subnVtQnl0ZXM+MCl7dmFyIGY9bmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKGkud2lkdGgqaS5oZWlnaHQvOCkpO249bmV3IERhdGFWaWV3KGUscyxpLm1hc2subnVtQnl0ZXMpO3ZhciBjPW4uZ2V0SW50MTYoMCwhMCksbz0yLG09MDtkb3tpZihjPjApZm9yKDtjLS07KWZbbSsrXT1uLmdldFVpbnQ4KG8rKyk7ZWxzZXt2YXIgdz1uLmdldFVpbnQ4KG8rKyk7Zm9yKGM9LWM7Yy0tOylmW20rK109d31jPW4uZ2V0SW50MTYobywhMCksbys9Mn13aGlsZShvPGkubWFzay5udW1CeXRlcyk7aWYoYyE9PS0zMjc2OHx8bTxmLmxlbmd0aCl0aHJvdyJVbmV4cGVjdGVkIGVuZCBvZiBtYXNrIFJMRSBlbmNvZGluZyI7aS5tYXNrLmJpdHNldD1mLHMrPWkubWFzay5udW1CeXRlc31lbHNlIGkubWFzay5udW1CeXRlc3xpLm1hc2subnVtQmxvY2tzWXxpLm1hc2subWF4VmFsdWV8fChpLm1hc2suYml0c2V0PW5ldyBVaW50OEFycmF5KE1hdGguY2VpbChpLndpZHRoKmkuaGVpZ2h0LzgpKSk7bj1uZXcgRGF0YVZpZXcoZSxzLDE2KSxpLnBpeGVscz17fSxpLnBpeGVscy5udW1CbG9ja3NZPW4uZ2V0VWludDMyKDAsITApLGkucGl4ZWxzLm51bUJsb2Nrc1g9bi5nZXRVaW50MzIoNCwhMCksaS5waXhlbHMubnVtQnl0ZXM9bi5nZXRVaW50MzIoOCwhMCksaS5waXhlbHMubWF4VmFsdWU9bi5nZXRGbG9hdDMyKDEyLCEwKSxzKz0xNjt2YXIgaD1pLnBpeGVscy5udW1CbG9ja3NYLGw9aS5waXhlbHMubnVtQmxvY2tzWSxnPWgrKGkud2lkdGglaD4wPzE6MCksTT1sKyhpLmhlaWdodCVsPjA/MTowKTtpLnBpeGVscy5ibG9ja3M9bmV3IEFycmF5KGcqTSk7Zm9yKHZhciBVPTAsZD0wO2Q8TTtkKyspZm9yKHZhciBrPTA7azxnO2srKyl7dmFyIHg9MCx6PWUuYnl0ZUxlbmd0aC1zO249bmV3IERhdGFWaWV3KGUscyxNYXRoLm1pbigxMCx6KSk7dmFyIHA9e307aS5waXhlbHMuYmxvY2tzW1UrK109cDt2YXIgdj1uLmdldFVpbnQ4KDApO2lmKHgrKyxwLmVuY29kaW5nPXYmNjMscC5lbmNvZGluZz4zKXRocm93IkludmFsaWQgYmxvY2sgZW5jb2RpbmcgKCIrcC5lbmNvZGluZysiKSI7aWYocC5lbmNvZGluZz09PTIpe3MrKztjb250aW51ZX1pZih2IT09MCYmdiE9PTIpe2lmKHY+Pj02LHAub2Zmc2V0VHlwZT12LHY9PT0yKXAub2Zmc2V0PW4uZ2V0SW50OCgxKSx4Kys7ZWxzZSBpZih2PT09MSlwLm9mZnNldD1uLmdldEludDE2KDEsITApLHgrPTI7ZWxzZSBpZih2PT09MClwLm9mZnNldD1uLmdldEZsb2F0MzIoMSwhMCkseCs9NDtlbHNlIHRocm93IkludmFsaWQgYmxvY2sgb2Zmc2V0IHR5cGUiO2lmKHAuZW5jb2Rpbmc9PT0xKWlmKHY9bi5nZXRVaW50OCh4KSx4KysscC5iaXRzUGVyUGl4ZWw9diY2Myx2Pj49NixwLm51bVZhbGlkUGl4ZWxzVHlwZT12LHY9PT0yKXAubnVtVmFsaWRQaXhlbHM9bi5nZXRVaW50OCh4KSx4Kys7ZWxzZSBpZih2PT09MSlwLm51bVZhbGlkUGl4ZWxzPW4uZ2V0VWludDE2KHgsITApLHgrPTI7ZWxzZSBpZih2PT09MClwLm51bVZhbGlkUGl4ZWxzPW4uZ2V0VWludDMyKHgsITApLHgrPTQ7ZWxzZSB0aHJvdyJJbnZhbGlkIHZhbGlkIHBpeGVsIGNvdW50IHR5cGUifWlmKHMrPXgscC5lbmNvZGluZyE9PTMpe3ZhciBWLFQ7aWYocC5lbmNvZGluZz09PTApe3ZhciBBPShpLnBpeGVscy5udW1CeXRlcy0xKS80O2lmKEEhPT1NYXRoLmZsb29yKEEpKXRocm93InVuY29tcHJlc3NlZCBibG9jayBoYXMgaW52YWxpZCBsZW5ndGgiO1Y9bmV3IEFycmF5QnVmZmVyKEEqNCksVD1uZXcgVWludDhBcnJheShWKSxULnNldChuZXcgVWludDhBcnJheShlLHMsQSo0KSk7dmFyIEI9bmV3IEZsb2F0MzJBcnJheShWKTtwLnJhd0RhdGE9QixzKz1BKjR9ZWxzZSBpZihwLmVuY29kaW5nPT09MSl7dmFyIEw9TWF0aC5jZWlsKHAubnVtVmFsaWRQaXhlbHMqcC5iaXRzUGVyUGl4ZWwvOCksRj1NYXRoLmNlaWwoTC80KTtWPW5ldyBBcnJheUJ1ZmZlcihGKjQpLFQ9bmV3IFVpbnQ4QXJyYXkoViksVC5zZXQobmV3IFVpbnQ4QXJyYXkoZSxzLEwpKSxwLnN0dWZmZWREYXRhPW5ldyBVaW50MzJBcnJheShWKSxzKz1MfX19cmV0dXJuIGkuZW9mT2Zmc2V0PXMsaX0scj1mdW5jdGlvbihlLHMsdCxpLHUsbixmKXt2YXIgYz0oMTw8cyktMSxvPTAsbSx3PTAsaCxsLGc9TWF0aC5jZWlsKChmLWkpL3UpLE09ZS5sZW5ndGgqNC1NYXRoLmNlaWwocyp0LzgpO2ZvcihlW2UubGVuZ3RoLTFdPDw9OCpNLG09MDttPHQ7bSsrKXtpZih3PT09MCYmKGw9ZVtvKytdLHc9MzIpLHc+PXMpaD1sPj4+dy1zJmMsdy09cztlbHNle3ZhciBVPXMtdztoPShsJmMpPDxVJmMsbD1lW28rK10sdz0zMi1VLGgrPWw+Pj53fW5bbV09aDxnP2kraCp1OmZ9cmV0dXJuIG59O3JldHVybiBTfSgpLHJlPWZ1bmN0aW9uKCl7dmFyIFM9e3Vuc3R1ZmY6ZnVuY3Rpb24oYSxyLGUscyx0LGksdSxuKXt2YXIgZj0oMTw8ZSktMSxjPTAsbyxtPTAsdyxoLGwsZyxNPWEubGVuZ3RoKjQtTWF0aC5jZWlsKGUqcy84KTtpZihhW2EubGVuZ3RoLTFdPDw9OCpNLHQpZm9yKG89MDtvPHM7bysrKW09PT0wJiYoaD1hW2MrK10sbT0zMiksbT49ZT8odz1oPj4+bS1lJmYsbS09ZSk6KGw9ZS1tLHc9KGgmZik8PGwmZixoPWFbYysrXSxtPTMyLWwsdys9aD4+Pm0pLHJbb109dFt3XTtlbHNlIGZvcihnPU1hdGguY2VpbCgobi1pKS91KSxvPTA7bzxzO28rKyltPT09MCYmKGg9YVtjKytdLG09MzIpLG0+PWU/KHc9aD4+Pm0tZSZmLG0tPWUpOihsPWUtbSx3PShoJmYpPDxsJmYsaD1hW2MrK10sbT0zMi1sLHcrPWg+Pj5tKSxyW29dPXc8Zz9pK3cqdTpufSx1bnN0dWZmTFVUOmZ1bmN0aW9uKGEscixlLHMsdCxpKXt2YXIgdT0oMTw8ciktMSxuPTAsZj0wLGM9MCxvPTAsbT0wLHcsaD1bXSxsPWEubGVuZ3RoKjQtTWF0aC5jZWlsKHIqZS84KTthW2EubGVuZ3RoLTFdPDw9OCpsO3ZhciBnPU1hdGguY2VpbCgoaS1zKS90KTtmb3IoZj0wO2Y8ZTtmKyspbz09PTAmJih3PWFbbisrXSxvPTMyKSxvPj1yPyhtPXc+Pj5vLXImdSxvLT1yKTooYz1yLW8sbT0odyZ1KTw8YyZ1LHc9YVtuKytdLG89MzItYyxtKz13Pj4+byksaFtmXT1tPGc/cyttKnQ6aTtyZXR1cm4gaC51bnNoaWZ0KHMpLGh9LHVuc3R1ZmYyOmZ1bmN0aW9uKGEscixlLHMsdCxpLHUsbil7dmFyIGY9KDE8PGUpLTEsYz0wLG8sbT0wLHc9MCxoLGwsZztpZih0KWZvcihvPTA7bzxzO28rKyltPT09MCYmKGw9YVtjKytdLG09MzIsdz0wKSxtPj1lPyhoPWw+Pj53JmYsbS09ZSx3Kz1lKTooZz1lLW0saD1sPj4+dyZmLGw9YVtjKytdLG09MzItZyxofD0obCYoMTw8ZyktMSk8PGUtZyx3PWcpLHJbb109dFtoXTtlbHNle3ZhciBNPU1hdGguY2VpbCgobi1pKS91KTtmb3Iobz0wO288cztvKyspbT09PTAmJihsPWFbYysrXSxtPTMyLHc9MCksbT49ZT8oaD1sPj4+dyZmLG0tPWUsdys9ZSk6KGc9ZS1tLGg9bD4+PncmZixsPWFbYysrXSxtPTMyLWcsaHw9KGwmKDE8PGcpLTEpPDxlLWcsdz1nKSxyW29dPWg8TT9pK2gqdTpufXJldHVybiByfSx1bnN0dWZmTFVUMjpmdW5jdGlvbihhLHIsZSxzLHQsaSl7dmFyIHU9KDE8PHIpLTEsbj0wLGY9MCxjPTAsbz0wLG09MCx3PTAsaCxsPVtdLGc9TWF0aC5jZWlsKChpLXMpL3QpO2ZvcihmPTA7ZjxlO2YrKylvPT09MCYmKGg9YVtuKytdLG89MzIsdz0wKSxvPj1yPyhtPWg+Pj53JnUsby09cix3Kz1yKTooYz1yLW8sbT1oPj4+dyZ1LGg9YVtuKytdLG89MzItYyxtfD0oaCYoMTw8YyktMSk8PHItYyx3PWMpLGxbZl09bTxnP3MrbSp0Omk7cmV0dXJuIGwudW5zaGlmdChzKSxsfSxvcmlnaW5hbFVuc3R1ZmY6ZnVuY3Rpb24oYSxyLGUscyl7dmFyIHQ9KDE8PGUpLTEsaT0wLHUsbj0wLGYsYyxvLG09YS5sZW5ndGgqNC1NYXRoLmNlaWwoZSpzLzgpO2ZvcihhW2EubGVuZ3RoLTFdPDw9OCptLHU9MDt1PHM7dSsrKW49PT0wJiYoYz1hW2krK10sbj0zMiksbj49ZT8oZj1jPj4+bi1lJnQsbi09ZSk6KG89ZS1uLGY9KGMmdCk8PG8mdCxjPWFbaSsrXSxuPTMyLW8sZis9Yz4+Pm4pLHJbdV09ZjtyZXR1cm4gcn0sb3JpZ2luYWxVbnN0dWZmMjpmdW5jdGlvbihhLHIsZSxzKXt2YXIgdD0oMTw8ZSktMSxpPTAsdSxuPTAsZj0wLGMsbyxtO2Zvcih1PTA7dTxzO3UrKyluPT09MCYmKG89YVtpKytdLG49MzIsZj0wKSxuPj1lPyhjPW8+Pj5mJnQsbi09ZSxmKz1lKToobT1lLW4sYz1vPj4+ZiZ0LG89YVtpKytdLG49MzItbSxjfD0obyYoMTw8bSktMSk8PGUtbSxmPW0pLHJbdV09YztyZXR1cm4gcn19LEk9e0hVRkZNQU5fTFVUX0JJVFNfTUFYOjEyLGNvbXB1dGVDaGVja3N1bUZsZXRjaGVyMzI6ZnVuY3Rpb24oYSl7Zm9yKHZhciByPTY1NTM1LGU9NjU1MzUscz1hLmxlbmd0aCx0PU1hdGguZmxvb3Iocy8yKSxpPTA7dDspe3ZhciB1PXQ+PTM1OT8zNTk6dDt0LT11O2RvIHIrPWFbaSsrXTw8OCxlKz1yKz1hW2krK107d2hpbGUoLS11KTtyPShyJjY1NTM1KSsocj4+PjE2KSxlPShlJjY1NTM1KSsoZT4+PjE2KX1yZXR1cm4gcyYxJiYoZSs9cis9YVtpXTw8OCkscj0ociY2NTUzNSkrKHI+Pj4xNiksZT0oZSY2NTUzNSkrKGU+Pj4xNiksKGU8PDE2fHIpPj4+MH0scmVhZEhlYWRlckluZm86ZnVuY3Rpb24oYSxyKXt2YXIgZT1yLnB0cixzPW5ldyBVaW50OEFycmF5KGEsZSw2KSx0PXt9O2lmKHQuZmlsZUlkZW50aWZpZXJTdHJpbmc9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHMpLHQuZmlsZUlkZW50aWZpZXJTdHJpbmcubGFzdEluZGV4T2YoIkxlcmMyIiwwKSE9PTApdGhyb3ciVW5leHBlY3RlZCBmaWxlIGlkZW50aWZpZXIgc3RyaW5nIChleHBlY3QgTGVyYzIgKTogIit0LmZpbGVJZGVudGlmaWVyU3RyaW5nO2UrPTY7dmFyIGk9bmV3IERhdGFWaWV3KGEsZSw4KSx1PWkuZ2V0SW50MzIoMCwhMCk7dC5maWxlVmVyc2lvbj11LGUrPTQsdT49MyYmKHQuY2hlY2tzdW09aS5nZXRVaW50MzIoNCwhMCksZSs9NCksaT1uZXcgRGF0YVZpZXcoYSxlLDEyKSx0LmhlaWdodD1pLmdldFVpbnQzMigwLCEwKSx0LndpZHRoPWkuZ2V0VWludDMyKDQsITApLGUrPTgsdT49ND8odC5udW1EaW1zPWkuZ2V0VWludDMyKDgsITApLGUrPTQpOnQubnVtRGltcz0xLGk9bmV3IERhdGFWaWV3KGEsZSw0MCksdC5udW1WYWxpZFBpeGVsPWkuZ2V0VWludDMyKDAsITApLHQubWljcm9CbG9ja1NpemU9aS5nZXRJbnQzMig0LCEwKSx0LmJsb2JTaXplPWkuZ2V0SW50MzIoOCwhMCksdC5pbWFnZVR5cGU9aS5nZXRJbnQzMigxMiwhMCksdC5tYXhaRXJyb3I9aS5nZXRGbG9hdDY0KDE2LCEwKSx0LnpNaW49aS5nZXRGbG9hdDY0KDI0LCEwKSx0LnpNYXg9aS5nZXRGbG9hdDY0KDMyLCEwKSxlKz00MCxyLmhlYWRlckluZm89dCxyLnB0cj1lO3ZhciBuLGY7aWYodT49MyYmKGY9dT49ND81Mjo0OCxuPXRoaXMuY29tcHV0ZUNoZWNrc3VtRmxldGNoZXIzMihuZXcgVWludDhBcnJheShhLGUtZix0LmJsb2JTaXplLTE0KSksbiE9PXQuY2hlY2tzdW0pKXRocm93IkNoZWNrc3VtIGZhaWxlZC4iO3JldHVybiEwfSxjaGVja01pbk1heFJhbmdlczpmdW5jdGlvbihhLHIpe3ZhciBlPXIuaGVhZGVySW5mbyxzPXRoaXMuZ2V0RGF0YVR5cGVBcnJheShlLmltYWdlVHlwZSksdD1lLm51bURpbXMqdGhpcy5nZXREYXRhVHlwZVNpemUoZS5pbWFnZVR5cGUpLGk9dGhpcy5yZWFkU3ViQXJyYXkoYSxyLnB0cixzLHQpLHU9dGhpcy5yZWFkU3ViQXJyYXkoYSxyLnB0cit0LHMsdCk7ci5wdHIrPTIqdDt2YXIgbixmPSEwO2ZvcihuPTA7bjxlLm51bURpbXM7bisrKWlmKGlbbl0hPT11W25dKXtmPSExO2JyZWFrfXJldHVybiBlLm1pblZhbHVlcz1pLGUubWF4VmFsdWVzPXUsZn0scmVhZFN1YkFycmF5OmZ1bmN0aW9uKGEscixlLHMpe3ZhciB0O2lmKGU9PT1VaW50OEFycmF5KXQ9bmV3IFVpbnQ4QXJyYXkoYSxyLHMpO2Vsc2V7dmFyIGk9bmV3IEFycmF5QnVmZmVyKHMpLHU9bmV3IFVpbnQ4QXJyYXkoaSk7dS5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLHMpKSx0PW5ldyBlKGkpfXJldHVybiB0fSxyZWFkTWFzazpmdW5jdGlvbihhLHIpe3ZhciBlPXIucHRyLHM9ci5oZWFkZXJJbmZvLHQ9cy53aWR0aCpzLmhlaWdodCxpPXMubnVtVmFsaWRQaXhlbCx1PW5ldyBEYXRhVmlldyhhLGUsNCksbj17fTtpZihuLm51bUJ5dGVzPXUuZ2V0VWludDMyKDAsITApLGUrPTQsKGk9PT0wfHx0PT09aSkmJm4ubnVtQnl0ZXMhPT0wKXRocm93ImludmFsaWQgbWFzayI7dmFyIGYsYztpZihpPT09MClmPW5ldyBVaW50OEFycmF5KE1hdGguY2VpbCh0LzgpKSxuLmJpdHNldD1mLGM9bmV3IFVpbnQ4QXJyYXkodCksci5waXhlbHMucmVzdWx0TWFzaz1jLGUrPW4ubnVtQnl0ZXM7ZWxzZSBpZihuLm51bUJ5dGVzPjApe2Y9bmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKHQvOCkpLHU9bmV3IERhdGFWaWV3KGEsZSxuLm51bUJ5dGVzKTt2YXIgbz11LmdldEludDE2KDAsITApLG09Mix3PTAsaD0wO2Rve2lmKG8+MClmb3IoO28tLTspZlt3KytdPXUuZ2V0VWludDgobSsrKTtlbHNlIGZvcihoPXUuZ2V0VWludDgobSsrKSxvPS1vO28tLTspZlt3KytdPWg7bz11LmdldEludDE2KG0sITApLG0rPTJ9d2hpbGUobTxuLm51bUJ5dGVzKTtpZihvIT09LTMyNzY4fHx3PGYubGVuZ3RoKXRocm93IlVuZXhwZWN0ZWQgZW5kIG9mIG1hc2sgUkxFIGVuY29kaW5nIjtjPW5ldyBVaW50OEFycmF5KHQpO3ZhciBsPTAsZz0wO2ZvcihnPTA7Zzx0O2crKylnJjc/KGw9ZltnPj4zXSxsPDw9ZyY3KTpsPWZbZz4+M10sbCYxMjgmJihjW2ddPTEpO3IucGl4ZWxzLnJlc3VsdE1hc2s9YyxuLmJpdHNldD1mLGUrPW4ubnVtQnl0ZXN9cmV0dXJuIHIucHRyPWUsci5tYXNrPW4sITB9LHJlYWREYXRhT25lU3dlZXA6ZnVuY3Rpb24oYSxyLGUscyl7dmFyIHQ9ci5wdHIsaT1yLmhlYWRlckluZm8sdT1pLm51bURpbXMsbj1pLndpZHRoKmkuaGVpZ2h0LGY9aS5pbWFnZVR5cGUsYz1pLm51bVZhbGlkUGl4ZWwqSS5nZXREYXRhVHlwZVNpemUoZikqdSxvLG09ci5waXhlbHMucmVzdWx0TWFzaztpZihlPT09VWludDhBcnJheSlvPW5ldyBVaW50OEFycmF5KGEsdCxjKTtlbHNle3ZhciB3PW5ldyBBcnJheUJ1ZmZlcihjKSxoPW5ldyBVaW50OEFycmF5KHcpO2guc2V0KG5ldyBVaW50OEFycmF5KGEsdCxjKSksbz1uZXcgZSh3KX1pZihvLmxlbmd0aD09PW4qdSlzP3IucGl4ZWxzLnJlc3VsdFBpeGVscz1JLnN3YXBEaW1lbnNpb25PcmRlcihvLG4sdSxlLCEwKTpyLnBpeGVscy5yZXN1bHRQaXhlbHM9bztlbHNle3IucGl4ZWxzLnJlc3VsdFBpeGVscz1uZXcgZShuKnUpO3ZhciBsPTAsZz0wLE09MCxVPTA7aWYodT4xKXtpZihzKXtmb3IoZz0wO2c8bjtnKyspaWYobVtnXSlmb3IoVT1nLE09MDtNPHU7TSsrLFUrPW4pci5waXhlbHMucmVzdWx0UGl4ZWxzW1VdPW9bbCsrXX1lbHNlIGZvcihnPTA7ZzxuO2crKylpZihtW2ddKWZvcihVPWcqdSxNPTA7TTx1O00rKylyLnBpeGVscy5yZXN1bHRQaXhlbHNbVStNXT1vW2wrK119ZWxzZSBmb3IoZz0wO2c8bjtnKyspbVtnXSYmKHIucGl4ZWxzLnJlc3VsdFBpeGVsc1tnXT1vW2wrK10pfXJldHVybiB0Kz1jLHIucHRyPXQsITB9LHJlYWRIdWZmbWFuVHJlZTpmdW5jdGlvbihhLHIpe3ZhciBlPXRoaXMuSFVGRk1BTl9MVVRfQklUU19NQVgscz1uZXcgRGF0YVZpZXcoYSxyLnB0ciwxNik7ci5wdHIrPTE2O3ZhciB0PXMuZ2V0SW50MzIoMCwhMCk7aWYodDwyKXRocm93InVuc3VwcG9ydGVkIEh1ZmZtYW4gdmVyc2lvbiI7dmFyIGk9cy5nZXRJbnQzMig0LCEwKSx1PXMuZ2V0SW50MzIoOCwhMCksbj1zLmdldEludDMyKDEyLCEwKTtpZih1Pj1uKXJldHVybiExO3ZhciBmPW5ldyBVaW50MzJBcnJheShuLXUpO0kuZGVjb2RlQml0cyhhLHIsZik7dmFyIGM9W10sbyxtLHcsaDtmb3Iobz11O288bjtvKyspbT1vLShvPGk/MDppKSxjW21dPXtmaXJzdDpmW28tdV0sc2Vjb25kOm51bGx9O3ZhciBsPWEuYnl0ZUxlbmd0aC1yLnB0cixnPU1hdGguY2VpbChsLzQpLE09bmV3IEFycmF5QnVmZmVyKGcqNCksVT1uZXcgVWludDhBcnJheShNKTtVLnNldChuZXcgVWludDhBcnJheShhLHIucHRyLGwpKTt2YXIgZD1uZXcgVWludDMyQXJyYXkoTSksaz0wLHgsej0wO2Zvcih4PWRbMF0sbz11O288bjtvKyspbT1vLShvPGk/MDppKSxoPWNbbV0uZmlyc3QsaD4wJiYoY1ttXS5zZWNvbmQ9eDw8az4+PjMyLWgsMzItaz49aD8oays9aCxrPT09MzImJihrPTAseisrLHg9ZFt6XSkpOihrKz1oLTMyLHorKyx4PWRbel0sY1ttXS5zZWNvbmR8PXg+Pj4zMi1rKSk7dmFyIHA9MCx2PTAsVj1uZXcgeTtmb3Iobz0wO288Yy5sZW5ndGg7bysrKWNbb10hPT12b2lkIDAmJihwPU1hdGgubWF4KHAsY1tvXS5maXJzdCkpO3A+PWU/dj1lOnY9cDt2YXIgVD1bXSxBLEIsTCxGLGIsQztmb3Iobz11O288bjtvKyspaWYobT1vLShvPGk/MDppKSxoPWNbbV0uZmlyc3QsaD4wKWlmKEE9W2gsbV0saDw9dilmb3IoQj1jW21dLnNlY29uZDw8di1oLEw9MTw8di1oLHc9MDt3PEw7dysrKVRbQnx3XT1BO2Vsc2UgZm9yKEI9Y1ttXS5zZWNvbmQsQz1WLEY9aC0xO0Y+PTA7Ri0tKWI9Qj4+PkYmMSxiPyhDLnJpZ2h0fHwoQy5yaWdodD1uZXcgeSksQz1DLnJpZ2h0KTooQy5sZWZ0fHwoQy5sZWZ0PW5ldyB5KSxDPUMubGVmdCksRj09PTAmJiFDLnZhbCYmKEMudmFsPUFbMV0pO3JldHVybntkZWNvZGVMdXQ6VCxudW1CaXRzTFVUUWljazp2LG51bUJpdHNMVVQ6cCx0cmVlOlYsc3R1ZmZlZERhdGE6ZCxzcmNQdHI6eixiaXRQb3M6a319LHJlYWRIdWZmbWFuOmZ1bmN0aW9uKGEscixlLHMpe3ZhciB0PXIuaGVhZGVySW5mbyxpPXQubnVtRGltcyx1PXIuaGVhZGVySW5mby5oZWlnaHQsbj1yLmhlYWRlckluZm8ud2lkdGgsZj1uKnUsYz10aGlzLnJlYWRIdWZmbWFuVHJlZShhLHIpLG89Yy5kZWNvZGVMdXQsbT1jLnRyZWUsdz1jLnN0dWZmZWREYXRhLGg9Yy5zcmNQdHIsbD1jLmJpdFBvcyxnPWMubnVtQml0c0xVVFFpY2ssTT1jLm51bUJpdHNMVVQsVT1yLmhlYWRlckluZm8uaW1hZ2VUeXBlPT09MD8xMjg6MCxkLGsseCx6PXIucGl4ZWxzLnJlc3VsdE1hc2sscCx2LFYsVCxBLEIsTCxGPTA7bD4wJiYoaCsrLGw9MCk7dmFyIGI9d1toXSxDPXIuZW5jb2RlTW9kZT09PTEsUj1uZXcgZShmKmkpLE89UixYO2lmKGk8Mnx8Qyl7Zm9yKFg9MDtYPGk7WCsrKWlmKGk+MSYmKE89bmV3IGUoUi5idWZmZXIsZipYLGYpLEY9MCksci5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWw9PT1uKnUpZm9yKEI9MCxUPTA7VDx1O1QrKylmb3IoQT0wO0E8bjtBKyssQisrKXtpZihrPTAscD1iPDxsPj4+MzItZyx2PXAsMzItbDxnJiYocHw9d1toKzFdPj4+NjQtbC1nLHY9cCksb1t2XSlrPW9bdl1bMV0sbCs9b1t2XVswXTtlbHNlIGZvcihwPWI8PGw+Pj4zMi1NLHY9cCwzMi1sPE0mJihwfD13W2grMV0+Pj42NC1sLU0sdj1wKSxkPW0sTD0wO0w8TTtMKyspaWYoVj1wPj4+TS1MLTEmMSxkPVY/ZC5yaWdodDpkLmxlZnQsIShkLmxlZnR8fGQucmlnaHQpKXtrPWQudmFsLGw9bCtMKzE7YnJlYWt9bD49MzImJihsLT0zMixoKyssYj13W2hdKSx4PWstVSxDPyhBPjA/eCs9RjpUPjA/eCs9T1tCLW5dOngrPUYseCY9MjU1LE9bQl09eCxGPXgpOk9bQl09eH1lbHNlIGZvcihCPTAsVD0wO1Q8dTtUKyspZm9yKEE9MDtBPG47QSsrLEIrKylpZih6W0JdKXtpZihrPTAscD1iPDxsPj4+MzItZyx2PXAsMzItbDxnJiYocHw9d1toKzFdPj4+NjQtbC1nLHY9cCksb1t2XSlrPW9bdl1bMV0sbCs9b1t2XVswXTtlbHNlIGZvcihwPWI8PGw+Pj4zMi1NLHY9cCwzMi1sPE0mJihwfD13W2grMV0+Pj42NC1sLU0sdj1wKSxkPW0sTD0wO0w8TTtMKyspaWYoVj1wPj4+TS1MLTEmMSxkPVY/ZC5yaWdodDpkLmxlZnQsIShkLmxlZnR8fGQucmlnaHQpKXtrPWQudmFsLGw9bCtMKzE7YnJlYWt9bD49MzImJihsLT0zMixoKyssYj13W2hdKSx4PWstVSxDPyhBPjAmJnpbQi0xXT94Kz1GOlQ+MCYmeltCLW5dP3grPU9bQi1uXTp4Kz1GLHgmPTI1NSxPW0JdPXgsRj14KTpPW0JdPXh9fWVsc2UgZm9yKEI9MCxUPTA7VDx1O1QrKylmb3IoQT0wO0E8bjtBKyspaWYoQj1UKm4rQSwhenx8eltCXSlmb3IoWD0wO1g8aTtYKyssQis9Zil7aWYoaz0wLHA9Yjw8bD4+PjMyLWcsdj1wLDMyLWw8ZyYmKHB8PXdbaCsxXT4+PjY0LWwtZyx2PXApLG9bdl0paz1vW3ZdWzFdLGwrPW9bdl1bMF07ZWxzZSBmb3IocD1iPDxsPj4+MzItTSx2PXAsMzItbDxNJiYocHw9d1toKzFdPj4+NjQtbC1NLHY9cCksZD1tLEw9MDtMPE07TCsrKWlmKFY9cD4+Pk0tTC0xJjEsZD1WP2QucmlnaHQ6ZC5sZWZ0LCEoZC5sZWZ0fHxkLnJpZ2h0KSl7az1kLnZhbCxsPWwrTCsxO2JyZWFrfWw+PTMyJiYobC09MzIsaCsrLGI9d1toXSkseD1rLVUsT1tCXT14fXIucHRyPXIucHRyKyhoKzEpKjQrKGw+MD80OjApLHIucGl4ZWxzLnJlc3VsdFBpeGVscz1SLGk+MSYmIXMmJihyLnBpeGVscy5yZXN1bHRQaXhlbHM9SS5zd2FwRGltZW5zaW9uT3JkZXIoUixmLGksZSkpfSxkZWNvZGVCaXRzOmZ1bmN0aW9uKGEscixlLHMsdCl7e3ZhciBpPXIuaGVhZGVySW5mbyx1PWkuZmlsZVZlcnNpb24sbj0wLGY9YS5ieXRlTGVuZ3RoLXIucHRyPj01PzU6YS5ieXRlTGVuZ3RoLXIucHRyLGM9bmV3IERhdGFWaWV3KGEsci5wdHIsZiksbz1jLmdldFVpbnQ4KDApO24rKzt2YXIgbT1vPj42LHc9bT09PTA/NDozLW0saD0obyYzMik+MCxsPW8mMzEsZz0wO2lmKHc9PT0xKWc9Yy5nZXRVaW50OChuKSxuKys7ZWxzZSBpZih3PT09MilnPWMuZ2V0VWludDE2KG4sITApLG4rPTI7ZWxzZSBpZih3PT09NClnPWMuZ2V0VWludDMyKG4sITApLG4rPTQ7ZWxzZSB0aHJvdyJJbnZhbGlkIHZhbGlkIHBpeGVsIGNvdW50IHR5cGUiO3ZhciBNPTIqaS5tYXhaRXJyb3IsVSxkLGsseCx6LHAsdixWLFQsQT1pLm51bURpbXM+MT9pLm1heFZhbHVlc1t0XTppLnpNYXg7aWYoaCl7Zm9yKHIuY291bnRlci5sdXQrKyxWPWMuZ2V0VWludDgobiksbisrLHg9TWF0aC5jZWlsKChWLTEpKmwvOCksej1NYXRoLmNlaWwoeC80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLGs9bmV3IFVpbnQ4QXJyYXkoZCksci5wdHIrPW4say5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLnB0cix4KSksdj1uZXcgVWludDMyQXJyYXkoZCksci5wdHIrPXgsVD0wO1YtMT4+PlQ7KVQrKzt4PU1hdGguY2VpbChnKlQvOCksej1NYXRoLmNlaWwoeC80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLGs9bmV3IFVpbnQ4QXJyYXkoZCksay5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLnB0cix4KSksVT1uZXcgVWludDMyQXJyYXkoZCksci5wdHIrPXgsdT49Mz9wPVMudW5zdHVmZkxVVDIodixsLFYtMSxzLE0sQSk6cD1TLnVuc3R1ZmZMVVQodixsLFYtMSxzLE0sQSksdT49Mz9TLnVuc3R1ZmYyKFUsZSxULGcscCk6Uy51bnN0dWZmKFUsZSxULGcscCl9ZWxzZSByLmNvdW50ZXIuYml0c3R1ZmZlcisrLFQ9bCxyLnB0cis9bixUPjAmJih4PU1hdGguY2VpbChnKlQvOCksej1NYXRoLmNlaWwoeC80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLGs9bmV3IFVpbnQ4QXJyYXkoZCksay5zZXQobmV3IFVpbnQ4QXJyYXkoYSxyLnB0cix4KSksVT1uZXcgVWludDMyQXJyYXkoZCksci5wdHIrPXgsdT49Mz9zPT1udWxsP1Mub3JpZ2luYWxVbnN0dWZmMihVLGUsVCxnKTpTLnVuc3R1ZmYyKFUsZSxULGcsITEscyxNLEEpOnM9PW51bGw/Uy5vcmlnaW5hbFVuc3R1ZmYoVSxlLFQsZyk6Uy51bnN0dWZmKFUsZSxULGcsITEscyxNLEEpKX19LHJlYWRUaWxlczpmdW5jdGlvbihhLHIsZSxzKXt2YXIgdD1yLmhlYWRlckluZm8saT10LndpZHRoLHU9dC5oZWlnaHQsbj1pKnUsZj10Lm1pY3JvQmxvY2tTaXplLGM9dC5pbWFnZVR5cGUsbz1JLmdldERhdGFUeXBlU2l6ZShjKSxtPU1hdGguY2VpbChpL2YpLHc9TWF0aC5jZWlsKHUvZik7ci5waXhlbHMubnVtQmxvY2tzWT13LHIucGl4ZWxzLm51bUJsb2Nrc1g9bSxyLnBpeGVscy5wdHI9MDt2YXIgaD0wLGw9MCxnPTAsTT0wLFU9MCxkPTAsaz0wLHg9MCx6PTAscD0wLHY9MCxWPTAsVD0wLEE9MCxCPTAsTD0wLEYsYixDLFIsTyxYLEc9bmV3IGUoZipmKSxsZT11JWZ8fGYsb2U9aSVmfHxmLEssUSxKPXQubnVtRGltcywkLEU9ci5waXhlbHMucmVzdWx0TWFzayxZPXIucGl4ZWxzLnJlc3VsdFBpeGVscyx1ZT10LmZpbGVWZXJzaW9uLFA9dWU+PTU/MTQ6MTUsXyxXPXQuek1heCxIO2ZvcihnPTA7Zzx3O2crKylmb3IoVT1nIT09dy0xP2Y6bGUsTT0wO008bTtNKyspZm9yKGQ9TSE9PW0tMT9mOm9lLHY9ZyppKmYrTSpmLFY9aS1kLCQ9MDskPEo7JCsrKXtpZihKPjE/KEg9WSx2PWcqaSpmK00qZixZPW5ldyBlKHIucGl4ZWxzLnJlc3VsdFBpeGVscy5idWZmZXIsbiokKm8sbiksVz10Lm1heFZhbHVlc1skXSk6SD1udWxsLGs9YS5ieXRlTGVuZ3RoLXIucHRyLEY9bmV3IERhdGFWaWV3KGEsci5wdHIsTWF0aC5taW4oMTAsaykpLGI9e30sTD0wLHg9Ri5nZXRVaW50OCgwKSxMKyssXz10LmZpbGVWZXJzaW9uPj01P3gmNDowLHo9eD4+NiYyNTUscD14Pj4yJlAscCE9PShNKmY+PjMmUCl8fF8mJiQ9PT0wKXRocm93ImludGVncml0eSBpc3N1ZSI7aWYoWD14JjMsWD4zKXRocm93IHIucHRyKz1MLCJJbnZhbGlkIGJsb2NrIGVuY29kaW5nICgiK1grIikiO2lmKFg9PT0yKXtpZihfKWlmKEUpZm9yKGg9MDtoPFU7aCsrKWZvcihsPTA7bDxkO2wrKylFW3ZdJiYoWVt2XT1IW3ZdKSx2Kys7ZWxzZSBmb3IoaD0wO2g8VTtoKyspZm9yKGw9MDtsPGQ7bCsrKVlbdl09SFt2XSx2Kys7ci5jb3VudGVyLmNvbnN0YW50Kyssci5wdHIrPUw7Y29udGludWV9ZWxzZSBpZihYPT09MCl7aWYoXyl0aHJvdyJpbnRlZ3JpdHkgaXNzdWUiO2lmKHIuY291bnRlci51bmNvbXByZXNzZWQrKyxyLnB0cis9TCxUPVUqZCpvLEE9YS5ieXRlTGVuZ3RoLXIucHRyLFQ9VDxBP1Q6QSxDPW5ldyBBcnJheUJ1ZmZlcihUJW89PT0wP1Q6VCtvLVQlbyksUj1uZXcgVWludDhBcnJheShDKSxSLnNldChuZXcgVWludDhBcnJheShhLHIucHRyLFQpKSxPPW5ldyBlKEMpLEI9MCxFKWZvcihoPTA7aDxVO2grKyl7Zm9yKGw9MDtsPGQ7bCsrKUVbdl0mJihZW3ZdPU9bQisrXSksdisrO3YrPVZ9ZWxzZSBmb3IoaD0wO2g8VTtoKyspe2ZvcihsPTA7bDxkO2wrKylZW3YrK109T1tCKytdO3YrPVZ9ci5wdHIrPUIqb31lbHNlIGlmKEs9SS5nZXREYXRhVHlwZVVzZWQoXyYmYzw2PzQ6Yyx6KSxRPUkuZ2V0T25lUGl4ZWwoYixMLEssRiksTCs9SS5nZXREYXRhVHlwZVNpemUoSyksWD09PTMpaWYoci5wdHIrPUwsci5jb3VudGVyLmNvbnN0YW50b2Zmc2V0KyssRSlmb3IoaD0wO2g8VTtoKyspe2ZvcihsPTA7bDxkO2wrKylFW3ZdJiYoWVt2XT1fP01hdGgubWluKFcsSFt2XStRKTpRKSx2Kys7dis9Vn1lbHNlIGZvcihoPTA7aDxVO2grKyl7Zm9yKGw9MDtsPGQ7bCsrKVlbdl09Xz9NYXRoLm1pbihXLEhbdl0rUSk6USx2Kys7dis9Vn1lbHNlIGlmKHIucHRyKz1MLEkuZGVjb2RlQml0cyhhLHIsRyxRLCQpLEw9MCxfKWlmKEUpZm9yKGg9MDtoPFU7aCsrKXtmb3IobD0wO2w8ZDtsKyspRVt2XSYmKFlbdl09R1tMKytdK0hbdl0pLHYrKzt2Kz1WfWVsc2UgZm9yKGg9MDtoPFU7aCsrKXtmb3IobD0wO2w8ZDtsKyspWVt2XT1HW0wrK10rSFt2XSx2Kys7dis9Vn1lbHNlIGlmKEUpZm9yKGg9MDtoPFU7aCsrKXtmb3IobD0wO2w8ZDtsKyspRVt2XSYmKFlbdl09R1tMKytdKSx2Kys7dis9Vn1lbHNlIGZvcihoPTA7aDxVO2grKyl7Zm9yKGw9MDtsPGQ7bCsrKVlbdisrXT1HW0wrK107dis9Vn19Sj4xJiYhcyYmKHIucGl4ZWxzLnJlc3VsdFBpeGVscz1JLnN3YXBEaW1lbnNpb25PcmRlcihyLnBpeGVscy5yZXN1bHRQaXhlbHMsbixKLGUpKX0sZm9ybWF0RmlsZUluZm86ZnVuY3Rpb24oYSl7cmV0dXJue2ZpbGVJZGVudGlmaWVyU3RyaW5nOmEuaGVhZGVySW5mby5maWxlSWRlbnRpZmllclN0cmluZyxmaWxlVmVyc2lvbjphLmhlYWRlckluZm8uZmlsZVZlcnNpb24saW1hZ2VUeXBlOmEuaGVhZGVySW5mby5pbWFnZVR5cGUsaGVpZ2h0OmEuaGVhZGVySW5mby5oZWlnaHQsd2lkdGg6YS5oZWFkZXJJbmZvLndpZHRoLG51bVZhbGlkUGl4ZWw6YS5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWwsbWljcm9CbG9ja1NpemU6YS5oZWFkZXJJbmZvLm1pY3JvQmxvY2tTaXplLGJsb2JTaXplOmEuaGVhZGVySW5mby5ibG9iU2l6ZSxtYXhaRXJyb3I6YS5oZWFkZXJJbmZvLm1heFpFcnJvcixwaXhlbFR5cGU6SS5nZXRQaXhlbFR5cGUoYS5oZWFkZXJJbmZvLmltYWdlVHlwZSksZW9mT2Zmc2V0OmEuZW9mT2Zmc2V0LG1hc2s6YS5tYXNrP3tudW1CeXRlczphLm1hc2subnVtQnl0ZXN9Om51bGwscGl4ZWxzOntudW1CbG9ja3NYOmEucGl4ZWxzLm51bUJsb2Nrc1gsbnVtQmxvY2tzWTphLnBpeGVscy5udW1CbG9ja3NZLG1heFZhbHVlOmEuaGVhZGVySW5mby56TWF4LG1pblZhbHVlOmEuaGVhZGVySW5mby56TWluLG5vRGF0YVZhbHVlOmEubm9EYXRhVmFsdWV9fX0sY29uc3RydWN0Q29uc3RhbnRTdXJmYWNlOmZ1bmN0aW9uKGEscil7dmFyIGU9YS5oZWFkZXJJbmZvLnpNYXgscz1hLmhlYWRlckluZm8uek1pbix0PWEuaGVhZGVySW5mby5tYXhWYWx1ZXMsaT1hLmhlYWRlckluZm8ubnVtRGltcyx1PWEuaGVhZGVySW5mby5oZWlnaHQqYS5oZWFkZXJJbmZvLndpZHRoLG49MCxmPTAsYz0wLG89YS5waXhlbHMucmVzdWx0TWFzayxtPWEucGl4ZWxzLnJlc3VsdFBpeGVscztpZihvKWlmKGk+MSl7aWYocilmb3Iobj0wO248aTtuKyspZm9yKGM9bip1LGU9dFtuXSxmPTA7Zjx1O2YrKylvW2ZdJiYobVtjK2ZdPWUpO2Vsc2UgZm9yKGY9MDtmPHU7ZisrKWlmKG9bZl0pZm9yKGM9ZippLG49MDtuPGk7bisrKW1bYytpXT10W25dfWVsc2UgZm9yKGY9MDtmPHU7ZisrKW9bZl0mJihtW2ZdPWUpO2Vsc2UgaWYoaT4xJiZzIT09ZSlpZihyKWZvcihuPTA7bjxpO24rKylmb3IoYz1uKnUsZT10W25dLGY9MDtmPHU7ZisrKW1bYytmXT1lO2Vsc2UgZm9yKGY9MDtmPHU7ZisrKWZvcihjPWYqaSxuPTA7bjxpO24rKyltW2Mrbl09dFtuXTtlbHNlIGZvcihmPTA7Zjx1Kmk7ZisrKW1bZl09ZX0sZ2V0RGF0YVR5cGVBcnJheTpmdW5jdGlvbihhKXt2YXIgcjtzd2l0Y2goYSl7Y2FzZSAwOnI9SW50OEFycmF5O2JyZWFrO2Nhc2UgMTpyPVVpbnQ4QXJyYXk7YnJlYWs7Y2FzZSAyOnI9SW50MTZBcnJheTticmVhaztjYXNlIDM6cj1VaW50MTZBcnJheTticmVhaztjYXNlIDQ6cj1JbnQzMkFycmF5O2JyZWFrO2Nhc2UgNTpyPVVpbnQzMkFycmF5O2JyZWFrO2Nhc2UgNjpyPUZsb2F0MzJBcnJheTticmVhaztjYXNlIDc6cj1GbG9hdDY0QXJyYXk7YnJlYWs7ZGVmYXVsdDpyPUZsb2F0MzJBcnJheX1yZXR1cm4gcn0sZ2V0UGl4ZWxUeXBlOmZ1bmN0aW9uKGEpe3ZhciByO3N3aXRjaChhKXtjYXNlIDA6cj0iUzgiO2JyZWFrO2Nhc2UgMTpyPSJVOCI7YnJlYWs7Y2FzZSAyOnI9IlMxNiI7YnJlYWs7Y2FzZSAzOnI9IlUxNiI7YnJlYWs7Y2FzZSA0OnI9IlMzMiI7YnJlYWs7Y2FzZSA1OnI9IlUzMiI7YnJlYWs7Y2FzZSA2OnI9IkYzMiI7YnJlYWs7Y2FzZSA3OnI9IkY2NCI7YnJlYWs7ZGVmYXVsdDpyPSJGMzIifXJldHVybiByfSxpc1ZhbGlkUGl4ZWxWYWx1ZTpmdW5jdGlvbihhLHIpe2lmKHI9PW51bGwpcmV0dXJuITE7dmFyIGU7c3dpdGNoKGEpe2Nhc2UgMDplPXI+PS0xMjgmJnI8PTEyNzticmVhaztjYXNlIDE6ZT1yPj0wJiZyPD0yNTU7YnJlYWs7Y2FzZSAyOmU9cj49LTMyNzY4JiZyPD0zMjc2NzticmVhaztjYXNlIDM6ZT1yPj0wJiZyPD02NTUzNjticmVhaztjYXNlIDQ6ZT1yPj0tMjE0NzQ4MzY0OCYmcjw9MjE0NzQ4MzY0NzticmVhaztjYXNlIDU6ZT1yPj0wJiZyPD00Mjk0OTY3Mjk2O2JyZWFrO2Nhc2UgNjplPXI+PS0zNDAyNzk5OTM4NzkwMTQ4NGUyMiYmcjw9MzQwMjc5OTkzODc5MDE0ODRlMjI7YnJlYWs7Y2FzZSA3OmU9cj49LTE3OTc2OTMxMzQ4NjIzMTU3ZTI5MiYmcjw9MTc5NzY5MzEzNDg2MjMxNTdlMjkyO2JyZWFrO2RlZmF1bHQ6ZT0hMX1yZXR1cm4gZX0sZ2V0RGF0YVR5cGVTaXplOmZ1bmN0aW9uKGEpe3ZhciByPTA7c3dpdGNoKGEpe2Nhc2UgMDpjYXNlIDE6cj0xO2JyZWFrO2Nhc2UgMjpjYXNlIDM6cj0yO2JyZWFrO2Nhc2UgNDpjYXNlIDU6Y2FzZSA2OnI9NDticmVhaztjYXNlIDc6cj04O2JyZWFrO2RlZmF1bHQ6cj1hfXJldHVybiByfSxnZXREYXRhVHlwZVVzZWQ6ZnVuY3Rpb24oYSxyKXt2YXIgZT1hO3N3aXRjaChhKXtjYXNlIDI6Y2FzZSA0OmU9YS1yO2JyZWFrO2Nhc2UgMzpjYXNlIDU6ZT1hLTIqcjticmVhaztjYXNlIDY6cj09PTA/ZT1hOnI9PT0xP2U9MjplPTE7YnJlYWs7Y2FzZSA3OnI9PT0wP2U9YTplPWEtMipyKzE7YnJlYWs7ZGVmYXVsdDplPWE7YnJlYWt9cmV0dXJuIGV9LGdldE9uZVBpeGVsOmZ1bmN0aW9uKGEscixlLHMpe3ZhciB0PTA7c3dpdGNoKGUpe2Nhc2UgMDp0PXMuZ2V0SW50OChyKTticmVhaztjYXNlIDE6dD1zLmdldFVpbnQ4KHIpO2JyZWFrO2Nhc2UgMjp0PXMuZ2V0SW50MTYociwhMCk7YnJlYWs7Y2FzZSAzOnQ9cy5nZXRVaW50MTYociwhMCk7YnJlYWs7Y2FzZSA0OnQ9cy5nZXRJbnQzMihyLCEwKTticmVhaztjYXNlIDU6dD1zLmdldFVJbnQzMihyLCEwKTticmVhaztjYXNlIDY6dD1zLmdldEZsb2F0MzIociwhMCk7YnJlYWs7Y2FzZSA3OnQ9cy5nZXRGbG9hdDY0KHIsITApO2JyZWFrO2RlZmF1bHQ6dGhyb3cidGhlIGRlY29kZXIgZG9lcyBub3QgdW5kZXJzdGFuZCB0aGlzIHBpeGVsIHR5cGUifXJldHVybiB0fSxzd2FwRGltZW5zaW9uT3JkZXI6ZnVuY3Rpb24oYSxyLGUscyx0KXt2YXIgaT0wLHU9MCxuPTAsZj0wLGM9YTtpZihlPjEpaWYoYz1uZXcgcyhyKmUpLHQpZm9yKGk9MDtpPHI7aSsrKWZvcihmPWksbj0wO248ZTtuKyssZis9ciljW2ZdPWFbdSsrXTtlbHNlIGZvcihpPTA7aTxyO2krKylmb3IoZj1pLG49MDtuPGU7bisrLGYrPXIpY1t1KytdPWFbZl07cmV0dXJuIGN9fSx5PWZ1bmN0aW9uKGEscixlKXt0aGlzLnZhbD1hLHRoaXMubGVmdD1yLHRoaXMucmlnaHQ9ZX0sRD17ZGVjb2RlOmZ1bmN0aW9uKGEscil7cj1yfHx7fTt2YXIgZT1yLm5vRGF0YVZhbHVlLHM9MCx0PXt9O2lmKHQucHRyPXIuaW5wdXRPZmZzZXR8fDAsdC5waXhlbHM9e30sISFJLnJlYWRIZWFkZXJJbmZvKGEsdCkpe3ZhciBpPXQuaGVhZGVySW5mbyx1PWkuZmlsZVZlcnNpb24sbj1JLmdldERhdGFUeXBlQXJyYXkoaS5pbWFnZVR5cGUpO2lmKHU+NSl0aHJvdyJ1bnN1cHBvcnRlZCBsZXJjIHZlcnNpb24gMi4iK3U7SS5yZWFkTWFzayhhLHQpLGkubnVtVmFsaWRQaXhlbCE9PWkud2lkdGgqaS5oZWlnaHQmJiF0LnBpeGVscy5yZXN1bHRNYXNrJiYodC5waXhlbHMucmVzdWx0TWFzaz1yLm1hc2tEYXRhKTt2YXIgZj1pLndpZHRoKmkuaGVpZ2h0O3QucGl4ZWxzLnJlc3VsdFBpeGVscz1uZXcgbihmKmkubnVtRGltcyksdC5jb3VudGVyPXtvbmVzd2VlcDowLHVuY29tcHJlc3NlZDowLGx1dDowLGJpdHN0dWZmZXI6MCxjb25zdGFudDowLGNvbnN0YW50b2Zmc2V0OjB9O3ZhciBjPSFyLnJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zO2lmKGkubnVtVmFsaWRQaXhlbCE9PTApaWYoaS56TWF4PT09aS56TWluKUkuY29uc3RydWN0Q29uc3RhbnRTdXJmYWNlKHQsYyk7ZWxzZSBpZih1Pj00JiZJLmNoZWNrTWluTWF4UmFuZ2VzKGEsdCkpSS5jb25zdHJ1Y3RDb25zdGFudFN1cmZhY2UodCxjKTtlbHNle3ZhciBvPW5ldyBEYXRhVmlldyhhLHQucHRyLDIpLG09by5nZXRVaW50OCgwKTtpZih0LnB0cisrLG0pSS5yZWFkRGF0YU9uZVN3ZWVwKGEsdCxuLGMpO2Vsc2UgaWYodT4xJiZpLmltYWdlVHlwZTw9MSYmTWF0aC5hYnMoaS5tYXhaRXJyb3ItLjUpPDFlLTUpe3ZhciB3PW8uZ2V0VWludDgoMSk7aWYodC5wdHIrKyx0LmVuY29kZU1vZGU9dyx3PjJ8fHU8NCYmdz4xKXRocm93IkludmFsaWQgSHVmZm1hbiBmbGFnICIrdzt3P0kucmVhZEh1ZmZtYW4oYSx0LG4sYyk6SS5yZWFkVGlsZXMoYSx0LG4sYyl9ZWxzZSBJLnJlYWRUaWxlcyhhLHQsbixjKX10LmVvZk9mZnNldD10LnB0cjt2YXIgaDtyLmlucHV0T2Zmc2V0PyhoPXQuaGVhZGVySW5mby5ibG9iU2l6ZStyLmlucHV0T2Zmc2V0LXQucHRyLE1hdGguYWJzKGgpPj0xJiYodC5lb2ZPZmZzZXQ9ci5pbnB1dE9mZnNldCt0LmhlYWRlckluZm8uYmxvYlNpemUpKTooaD10LmhlYWRlckluZm8uYmxvYlNpemUtdC5wdHIsTWF0aC5hYnMoaCk+PTEmJih0LmVvZk9mZnNldD10LmhlYWRlckluZm8uYmxvYlNpemUpKTt2YXIgbD17d2lkdGg6aS53aWR0aCxoZWlnaHQ6aS5oZWlnaHQscGl4ZWxEYXRhOnQucGl4ZWxzLnJlc3VsdFBpeGVscyxtaW5WYWx1ZTppLnpNaW4sbWF4VmFsdWU6aS56TWF4LHZhbGlkUGl4ZWxDb3VudDppLm51bVZhbGlkUGl4ZWwsZGltQ291bnQ6aS5udW1EaW1zLGRpbVN0YXRzOnttaW5WYWx1ZXM6aS5taW5WYWx1ZXMsbWF4VmFsdWVzOmkubWF4VmFsdWVzfSxtYXNrRGF0YTp0LnBpeGVscy5yZXN1bHRNYXNrfTtpZih0LnBpeGVscy5yZXN1bHRNYXNrJiZJLmlzVmFsaWRQaXhlbFZhbHVlKGkuaW1hZ2VUeXBlLGUpKXt2YXIgZz10LnBpeGVscy5yZXN1bHRNYXNrO2ZvcihzPTA7czxmO3MrKylnW3NdfHwobC5waXhlbERhdGFbc109ZSk7bC5ub0RhdGFWYWx1ZT1lfXJldHVybiB0Lm5vRGF0YVZhbHVlPWUsci5yZXR1cm5GaWxlSW5mbyYmKGwuZmlsZUluZm89SS5mb3JtYXRGaWxlSW5mbyh0KSksbH19LGdldEJhbmRDb3VudDpmdW5jdGlvbihhKXt2YXIgcj0wLGU9MCxzPXt9O2ZvcihzLnB0cj0wLHMucGl4ZWxzPXt9O2U8YS5ieXRlTGVuZ3RoLTU4OylJLnJlYWRIZWFkZXJJbmZvKGEscyksZSs9cy5oZWFkZXJJbmZvLmJsb2JTaXplLHIrKyxzLnB0cj1lO3JldHVybiByfX07cmV0dXJuIER9KCk7dmFyIGllPWZ1bmN0aW9uKCl7dmFyIFM9bmV3IEFycmF5QnVmZmVyKDQpLEk9bmV3IFVpbnQ4QXJyYXkoUykseT1uZXcgVWludDMyQXJyYXkoUyk7cmV0dXJuIHlbMF09MSxJWzBdPT09MX0oKSxuZT17ZGVjb2RlOmZ1bmN0aW9uKFMsSSl7aWYoIWllKXRocm93IkJpZyBlbmRpYW4gc3lzdGVtIGlzIG5vdCBzdXBwb3J0ZWQuIjtJPUl8fHt9O3ZhciB5PUkuaW5wdXRPZmZzZXR8fDAsRD1uZXcgVWludDhBcnJheShTLHksMTApLGE9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLEQpLHIsZTtpZihhLnRyaW0oKT09PSJDbnRaSW1hZ2UiKXI9ZWUsZT0xO2Vsc2UgaWYoYS5zdWJzdHJpbmcoMCw1KT09PSJMZXJjMiIpcj1yZSxlPTI7ZWxzZSB0aHJvdyJVbmV4cGVjdGVkIGZpbGUgaWRlbnRpZmllciBzdHJpbmc6ICIrYTtmb3IodmFyIHM9MCx0PVMuYnl0ZUxlbmd0aC0xMCxpLHU9W10sbixmLGM9e3dpZHRoOjAsaGVpZ2h0OjAscGl4ZWxzOltdLHBpeGVsVHlwZTpJLnBpeGVsVHlwZSxtYXNrOm51bGwsc3RhdGlzdGljczpbXX0sbz0wO3k8dDspe3ZhciBtPXIuZGVjb2RlKFMse2lucHV0T2Zmc2V0OnksZW5jb2RlZE1hc2tEYXRhOmksbWFza0RhdGE6ZixyZXR1cm5NYXNrOnM9PT0wLHJldHVybkVuY29kZWRNYXNrOnM9PT0wLHJldHVybkZpbGVJbmZvOiEwLHJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zOkkucmV0dXJuUGl4ZWxJbnRlcmxlYXZlZERpbXMscGl4ZWxUeXBlOkkucGl4ZWxUeXBlfHxudWxsLG5vRGF0YVZhbHVlOkkubm9EYXRhVmFsdWV8fG51bGx9KTt5PW0uZmlsZUluZm8uZW9mT2Zmc2V0LGY9bS5tYXNrRGF0YSxzPT09MCYmKGk9bS5lbmNvZGVkTWFza0RhdGEsYy53aWR0aD1tLndpZHRoLGMuaGVpZ2h0PW0uaGVpZ2h0LGMuZGltQ291bnQ9bS5kaW1Db3VudHx8MSxjLnBpeGVsVHlwZT1tLnBpeGVsVHlwZXx8bS5maWxlSW5mby5waXhlbFR5cGUsYy5tYXNrPWYpLGU+MSYmKGYmJnUucHVzaChmKSxtLmZpbGVJbmZvLm1hc2smJm0uZmlsZUluZm8ubWFzay5udW1CeXRlcz4wJiZvKyspLHMrKyxjLnBpeGVscy5wdXNoKG0ucGl4ZWxEYXRhKSxjLnN0YXRpc3RpY3MucHVzaCh7bWluVmFsdWU6bS5taW5WYWx1ZSxtYXhWYWx1ZTptLm1heFZhbHVlLG5vRGF0YVZhbHVlOm0ubm9EYXRhVmFsdWUsZGltU3RhdHM6bS5kaW1TdGF0c30pfXZhciB3LGgsbDtpZihlPjEmJm8+MSl7Zm9yKGw9Yy53aWR0aCpjLmhlaWdodCxjLmJhbmRNYXNrcz11LGY9bmV3IFVpbnQ4QXJyYXkobCksZi5zZXQodVswXSksdz0xO3c8dS5sZW5ndGg7dysrKWZvcihuPXVbd10saD0wO2g8bDtoKyspZltoXT1mW2hdJm5baF07Yy5tYXNrRGF0YT1mfXJldHVybiBjfX07Y29uc3QgdGU9ezA6N2UzLDE6NmUzLDI6NWUzLDM6NGUzLDQ6M2UzLDU6MjUwMCw2OjJlMyw3OjE1MDAsODo4MDAsOTo1MDAsMTA6MjAwLDExOjEwMCwxMjo0MCwxMzoxMiwxNDo1LDE1OjIsMTY6MSwxNzowLDE4OjAsMTk6MCwyMDowfTtmdW5jdGlvbiBhZShTKXtjb25zdCBJPW5lLmRlY29kZShTKTtyZXR1cm57ZGVtOkkucGl4ZWxzWzBdLHdpZHRoOkkud2lkdGgsaGVpZ2h0OkkuaGVpZ2h0fX1mdW5jdGlvbiBzZShTLEkseSl7bGV0IEQ9YWUoUyk7cmV0dXJuIHlbMl0teVswXTwxJiYoRD1mZShELHkpKSxuZXcgWihELndpZHRoKS5jcmVhdGVUaWxlKEQuZGVtKS5nZXRHZW9tZXRyeURhdGEodGVbSV18fDApfWZ1bmN0aW9uIGZlKFMsSSl7Y29uc3QgeT0oZSxzLHQpPT57Y29uc3QgaT1NYXRoLmZsb29yKGVbMF0qcyksdT1NYXRoLmZsb29yKGVbMV0qdCksbj1NYXRoLmZsb29yKChlWzJdLWVbMF0pKnMpKzEsZj1NYXRoLmZsb29yKChlWzNdLWVbMV0pKnQpKzE7cmV0dXJue3g6aSx5OnUsdzpuLGg6Zn19LEQ9KGUscyx0LGksdSxuKT0+e2NvbnN0IGY9bmV3IEZsb2F0MzJBcnJheSh1Km4pO2ZvcihsZXQgYz0wO2M8bjtjKyspZm9yKGxldCBvPTA7bzx1O28rKyl7Y29uc3QgbT0oYytpKSpzKyhvK3QpLHc9Yyp1K287Zlt3XT1lW21dfXJldHVybiBmfSxhPXkoSSxTLndpZHRoLFMuaGVpZ2h0KTtyZXR1cm57ZGVtOkQoUy5kZW0sUy53aWR0aCxhLngsYS55LGEudyxhLmgpLHdpZHRoOmEudyxoZWlnaHQ6YS5ofX1zZWxmLm9ubWVzc2FnZT1TPT57Y29uc3QgST1TLmRhdGEseT1zZShJLmRlbURhdGEsSS56LEkuY2xpcEJvdW5kcyk7c2VsZi5wb3N0TWVzc2FnZSh5KX19KSgpOwo=",Ug=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Zl=typeof self<"u"&&self.Blob&&new Blob([Ug(Bc)],{type:"text/javascript;charset=utf-8"});function Ng(i){let t;try{if(t=Zl&&(self.URL||self.webkitURL).createObjectURL(Zl),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Bc,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const Fg=5;class Vg extends ho{constructor(){super(),yt(this,"info",{version:zi,description:"Tile LERC terrain loader. It can load ArcGis-lerc format terrain data."}),yt(this,"dataType","lerc"),yt(this,"fileLoader",new sd(Te.manager)),yt(this,"_workerPool",new uo(0)),this.fileLoader.setResponseType("arraybuffer"),this._workerPool.setWorkerCreator(()=>new Ng)}async doLoad(t,e){this._workerPool.pool===0&&this._workerPool.setWorkerLimit(Fg);const{z:n,clipBounds:s}=e,r={demData:await this.fileLoader.loadAsync(t),z:n,clipBounds:s},a=(await this._workerPool.postMessage(r)).data;return new Ni().setAttribes(a,n)}}const kc="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGModCl7cmV0dXJuIGEodC5kYXRhKX1mdW5jdGlvbiBhKHQpe2Z1bmN0aW9uIG4oZSx1KXtjb25zdCByPXUqNCxbaSxmLGcsbF09ZS5zbGljZShyLHIrNCk7cmV0dXJuIGw9PT0wPzA6LTFlNCsoaTw8MTZ8Zjw8OHxnKSouMX1jb25zdCBvPXQubGVuZ3RoPj4+MixzPW5ldyBGbG9hdDMyQXJyYXkobyk7Zm9yKGxldCBlPTA7ZTxvO2UrKylzW2VdPW4odCxlKTtyZXR1cm4gc31zZWxmLm9ubWVzc2FnZT10PT57Y29uc3Qgbj1jKHQuZGF0YS5pbWdEYXRhKTtzZWxmLnBvc3RNZXNzYWdlKG4pfX0pKCk7Cg==",Wg=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Hl=typeof self<"u"&&self.Blob&&new Blob([Wg(kc)],{type:"text/javascript;charset=utf-8"});function Og(i){let t;try{if(t=Hl&&(self.URL||self.webkitURL).createObjectURL(Hl),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+kc,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const Gg=10;class zg extends ho{constructor(){super(),yt(this,"info",{version:zi,description:"Mapbox-RGB terrain loader, It can load Mapbox-RGB terrain data."}),yt(this,"dataType","terrain-rgb"),yt(this,"imageLoader",new ls(Te.manager)),yt(this,"_workerPool",new uo(0)),this._workerPool.setWorkerCreator(()=>new Og)}async doLoad(t,e){const n=await this.imageLoader.loadAsync(t),{clipBounds:s,z:r}=e,a=qn.clamp((r+2)*3,2,64),o=Bg(n,s,a);let l;this._workerPool.pool===0&&this._workerPool.setWorkerLimit(Gg),l=(await this._workerPool.postMessage({imgData:o},[o.data.buffer])).data;const c=new Ni;return c.setData(l,r),c}}function Bg(i,t,e){const n=Wc(t,i.width);e=Math.min(e,n.sw);const s=new OffscreenCanvas(e,e).getContext("2d");return s.imageSmoothingEnabled=!1,s.drawImage(i,n.sx,n.sy,n.sw,n.sh,0,0,e,e),s.getImageData(0,0,e,e)}const Zc="dmFyIHE9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBHPShiLEUsVSk9PkUgaW4gYj9xKGIsRSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6VX0pOmJbRV09VTt2YXIgQz0oYixFLFUpPT5HKGIsdHlwZW9mIEUhPSJzeW1ib2wiP0UrIiI6RSxVKTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7ZnVuY3Rpb24gYihsLGkpe2NvbnN0IG49bmV3IEZsb2F0MzJBcnJheShsLmxlbmd0aCk7Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kz0zKXtjb25zdCBvPWlbdF0qMyxjPWlbdCsxXSozLHM9aVt0KzJdKjMsZT1sW29dLGE9bFtvKzFdLGQ9bFtvKzJdLHI9bFtjXSxoPWxbYysxXSxtPWxbYysyXSxmPWxbc10sdT1sW3MrMV0seT1sW3MrMl0scD1yLWUsRj1oLWEsZz1tLWQsdz1mLWUsVD11LWEsQT15LWQsej1GKkEtZypULHg9Zyp3LXAqQSxJPXAqVC1GKncsUz1NYXRoLnNxcnQoeip6K3gqeCtJKkkpLCQ9WzAsMCwxXTtpZihTPjApe2NvbnN0IE09MS9TOyRbMF09eipNLCRbMV09eCpNLCRbMl09SSpNfWZvcihsZXQgTT0wO008MztNKyspbltvK01dPW5bYytNXT1uW3MrTV09JFtNXX1yZXR1cm4gbn1jbGFzcyBFe2NvbnN0cnVjdG9yKGk9MjU3KXtDKHRoaXMsImdyaWRTaXplIik7Qyh0aGlzLCJudW1UcmlhbmdsZXMiKTtDKHRoaXMsIm51bVBhcmVudFRyaWFuZ2xlcyIpO0ModGhpcywiaW5kaWNlcyIpO0ModGhpcywiY29vcmRzIik7dGhpcy5ncmlkU2l6ZT1pO2NvbnN0IG49aS0xO2lmKG4mbi0xKXRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgZ3JpZCBzaXplIHRvIGJlIDJebisxLCBnb3QgJHtpfS5gKTt0aGlzLm51bVRyaWFuZ2xlcz1uKm4qMi0yLHRoaXMubnVtUGFyZW50VHJpYW5nbGVzPXRoaXMubnVtVHJpYW5nbGVzLW4qbix0aGlzLmluZGljZXM9bmV3IFVpbnQzMkFycmF5KHRoaXMuZ3JpZFNpemUqdGhpcy5ncmlkU2l6ZSksdGhpcy5jb29yZHM9bmV3IFVpbnQxNkFycmF5KHRoaXMubnVtVHJpYW5nbGVzKjQpO2ZvcihsZXQgdD0wO3Q8dGhpcy5udW1UcmlhbmdsZXM7dCsrKXtsZXQgbz10KzIsYz0wLHM9MCxlPTAsYT0wLGQ9MCxyPTA7Zm9yKG8mMT9lPWE9ZD1uOmM9cz1yPW47KG8+Pj0xKT4xOyl7Y29uc3QgbT1jK2U+PjEsZj1zK2E+PjE7byYxPyhlPWMsYT1zLGM9ZCxzPXIpOihjPWUscz1hLGU9ZCxhPXIpLGQ9bSxyPWZ9Y29uc3QgaD10KjQ7dGhpcy5jb29yZHNbaCswXT1jLHRoaXMuY29vcmRzW2grMV09cyx0aGlzLmNvb3Jkc1toKzJdPWUsdGhpcy5jb29yZHNbaCszXT1hfX1jcmVhdGVUaWxlKGkpe3JldHVybiBuZXcgVShpLHRoaXMpfX1jbGFzcyBVe2NvbnN0cnVjdG9yKGksbil7Qyh0aGlzLCJtYXJ0aW5pIik7Qyh0aGlzLCJ0ZXJyYWluIik7Qyh0aGlzLCJlcnJvcnMiKTtjb25zdCB0PW4uZ3JpZFNpemU7aWYoaS5sZW5ndGghPT10KnQpdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCB0ZXJyYWluIGRhdGEgb2YgbGVuZ3RoICR7dCp0fSAoJHt0fSB4ICR7dH0pLCBnb3QgJHtpLmxlbmd0aH0uYCk7dGhpcy50ZXJyYWluPWksdGhpcy5tYXJ0aW5pPW4sdGhpcy5lcnJvcnM9bmV3IEZsb2F0MzJBcnJheShpLmxlbmd0aCksdGhpcy51cGRhdGUoKX11cGRhdGUoKXtjb25zdHtudW1UcmlhbmdsZXM6aSxudW1QYXJlbnRUcmlhbmdsZXM6bixjb29yZHM6dCxncmlkU2l6ZTpvfT10aGlzLm1hcnRpbmkse3RlcnJhaW46YyxlcnJvcnM6c309dGhpcztmb3IobGV0IGU9aS0xO2U+PTA7ZS0tKXtjb25zdCBhPWUqNCxkPXRbYSswXSxyPXRbYSsxXSxoPXRbYSsyXSxtPXRbYSszXSxmPWQraD4+MSx1PXIrbT4+MSx5PWYrdS1yLHA9dStkLWYsRj0oY1tyKm8rZF0rY1ttKm8raF0pLzIsZz11Km8rZix3PU1hdGguYWJzKEYtY1tnXSk7aWYoc1tnXT1NYXRoLm1heChzW2ddLHcpLGU8bil7Y29uc3QgVD0ocitwPj4xKSpvKyhkK3k+PjEpLEE9KG0rcD4+MSkqbysoaCt5Pj4xKTtzW2ddPU1hdGgubWF4KHNbZ10sc1tUXSxzW0FdKX19fWdldEdlb21ldHJ5RGF0YShpPTApe2NvbnN0e2dyaWRTaXplOm4saW5kaWNlczp0fT10aGlzLm1hcnRpbmkse2Vycm9yczpvfT10aGlzO2xldCBjPTAscz0wO2NvbnN0IGU9bi0xO2xldCBhLGQscj0wO3QuZmlsbCgwKTtmdW5jdGlvbiBoKGcsdyxULEEseix4KXtjb25zdCBJPWcrVD4+MSxTPXcrQT4+MTtNYXRoLmFicyhnLXopK01hdGguYWJzKHcteCk+MSYmb1tTKm4rSV0+aT8oaCh6LHgsZyx3LEksUyksaChULEEseix4LEksUykpOihhPXcqbitnLGQ9QSpuK1Qscj14Km4reix0W2FdPT09MCYmKHRbYV09KytjKSx0W2RdPT09MCYmKHRbZF09KytjKSx0W3JdPT09MCYmKHRbcl09KytjKSxzKyspfWgoMCwwLGUsZSxlLDApLGgoZSxlLDAsMCwwLGUpO2NvbnN0IG09YyoyLGY9cyozLHU9bmV3IFVpbnQxNkFycmF5KG0pLHk9bmV3IFVpbnQzMkFycmF5KGYpO2xldCBwPTA7ZnVuY3Rpb24gRihnLHcsVCxBLHoseCl7Y29uc3QgST1nK1Q+PjEsUz13K0E+PjE7aWYoTWF0aC5hYnMoZy16KStNYXRoLmFicyh3LXgpPjEmJm9bUypuK0ldPmkpRih6LHgsZyx3LEksUyksRihULEEseix4LEksUyk7ZWxzZXtjb25zdCAkPXRbdypuK2ddLTEsTT10W0EqbitUXS0xLHY9dFt4Km4rel0tMTt1WzIqJF09Zyx1WzIqJCsxXT13LHVbMipNXT1ULHVbMipNKzFdPUEsdVsyKnZdPXosdVsyKnYrMV09eCx5W3ArK109JCx5W3ArK109TSx5W3ArK109dn19cmV0dXJuIEYoMCwwLGUsZSxlLDApLEYoZSxlLDAsMCwwLGUpLHthdHRyaWJ1dGVzOnRoaXMuX2dldE1lc2hBdHRyaWJ1dGVzKHRoaXMudGVycmFpbix1LHkpLGluZGljZXM6eX19X2dldE1lc2hBdHRyaWJ1dGVzKGksbix0KXtjb25zdCBvPU1hdGguZmxvb3IoTWF0aC5zcXJ0KGkubGVuZ3RoKSksYz1vLTEscz1uLmxlbmd0aC8yLGU9bmV3IEZsb2F0MzJBcnJheShzKjMpLGE9bmV3IEZsb2F0MzJBcnJheShzKjIpO2ZvcihsZXQgcj0wO3I8cztyKyspe2NvbnN0IGg9bltyKjJdLG09bltyKjIrMV0sZj1tKm8raDtlWzMqciswXT1oL2MtLjUsZVszKnIrMV09LjUtbS9jLGVbMypyKzJdPWlbZl0sYVsyKnIrMF09aC9jLGFbMipyKzFdPTEtbS9jfWNvbnN0IGQ9YihlLHQpO3JldHVybntwb3NpdGlvbjp7dmFsdWU6ZSxzaXplOjN9LHRleGNvb3JkOnt2YWx1ZTphLHNpemU6Mn0sbm9ybWFsOnt2YWx1ZTpkLHNpemU6M319fX1jb25zdCBEPXswOjdlMywxOjZlMywyOjVlMywzOjRlMyw0OjNlMyw1OjI1MDAsNjoyZTMsNzoxNTAwLDg6ODAwLDk6NTAwLDEwOjIwMCwxMToxMDAsMTI6NDAsMTM6MTIsMTQ6NSwxNToyLDE2OjEsMTc6MCwxODowLDE5OjAsMjA6MH07ZnVuY3Rpb24gUChsKXtmdW5jdGlvbiBpKG8sYyl7Y29uc3Qgcz1jKjQsW2UsYSxkLHJdPW8uc2xpY2UocyxzKzQpO3JldHVybiByPT09MD8wOi0xZTQrKGU8PDE2fGE8PDh8ZCkqLjF9Y29uc3Qgbj1sLmRhdGEubGVuZ3RoPj4+Mix0PW5ldyBGbG9hdDMyQXJyYXkobik7Zm9yKGxldCBvPTA7bzxuO28rKyl0W29dPWkobC5kYXRhLG8pO3JldHVybntkZW06dCx3aWR0aDpsLndpZHRoLGhlaWdodDpsLmhlaWdodH19ZnVuY3Rpb24gVihsLGksbil7bGV0IHQ9UChsKTtyZXR1cm4gblsyXS1uWzBdPDEmJih0PWsodCxuKSksbmV3IEUodC53aWR0aCkuY3JlYXRlVGlsZSh0LmRlbSkuZ2V0R2VvbWV0cnlEYXRhKERbaV18fDApfWZ1bmN0aW9uIGsobCxpKXtjb25zdCBuPShzLGUsYSk9Pntjb25zdCBkPU1hdGguZmxvb3Ioc1swXSplKSxyPU1hdGguZmxvb3Ioc1sxXSphKSxoPU1hdGguZmxvb3IoKHNbMl0tc1swXSkqZSkrMSxtPU1hdGguZmxvb3IoKHNbM10tc1sxXSkqYSkrMTtyZXR1cm57eDpkLHk6cix3OmgsaDptfX0sdD0ocyxlLGEsZCxyLGgpPT57Y29uc3QgbT1uZXcgRmxvYXQzMkFycmF5KHIqaCk7Zm9yKGxldCBmPTA7ZjxoO2YrKylmb3IobGV0IHU9MDt1PHI7dSsrKXtjb25zdCB5PShmK2QpKmUrKHUrYSkscD1mKnIrdTttW3BdPXNbeV19cmV0dXJuIG19LG89bihpLGwud2lkdGgsbC5oZWlnaHQpO3JldHVybntkZW06dChsLmRlbSxsLndpZHRoLG8ueCxvLnksby53LG8uaCksd2lkdGg6by53LGhlaWdodDpvLmh9fXNlbGYub25tZXNzYWdlPWw9Pntjb25zdCBpPWwuZGF0YSxuPVYoaS5kZW1EYXRhLGkueixpLmNsaXBCb3VuZHMpO3NlbGYucG9zdE1lc3NhZ2Uobil9fSkoKTsK",kg=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Xl=typeof self<"u"&&self.Blob&&new Blob([kg(Zc)],{type:"text/javascript;charset=utf-8"});function Zg(i){let t;try{if(t=Xl&&(self.URL||self.webkitURL).createObjectURL(Xl),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Zc,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}const Hg=10;class Xg extends ho{constructor(){super(),yt(this,"info",{version:zi,description:"Mapbox-DEM terrain loader, It can load Mapbox-DEM terrain data."}),yt(this,"dataType","terrain-dem"),yt(this,"imageLoader",new ls(Te.manager)),yt(this,"_workerPool",new uo(0)),this._workerPool.setWorkerCreator(()=>new Zg)}async doLoad(t,e){this._workerPool.pool===0&&this._workerPool.setWorkerLimit(Hg);const{z:n,clipBounds:s}=e,r=await this.imageLoader.loadAsync(t),a={demData:Yg(r),z:n,clipBounds:s},o=(await this._workerPool.postMessage(a)).data;return new Ni().setAttribes(o,n)}}function Yg(i){const t=new OffscreenCanvas(i.width,i.height).getContext("2d");return t.drawImage(i,0,0),t.getImageData(0,0,i.width,i.height)}class Bi{constructor(t){yt(this,"dataType","image"),yt(this,"attribution","ThreeTile"),yt(this,"minLevel",0),yt(this,"maxLevel",18),yt(this,"projectionID","3857"),yt(this,"url",""),yt(this,"subdomains",[]),yt(this,"opacity",1),yt(this,"transparent",!0),yt(this,"isTMS",!1),yt(this,"bounds"),yt(this,"_projectionBounds",[-1/0,-1/0,1/0,1/0]),Object.assign(this,t)}_getBBox(t,e,n){const s=Math.PI*6378137,r=2*s/Math.pow(2,n),a=-s+t*r,o=s-(e+1)*r,l=-s+(t+1)*r,c=s-e*r;return`${a},${o},${l},${c}`}getUrl(t,e,n,s){const r=this.subdomains.length;let a;if(r>0){const c=Math.floor(Math.random()*r);a=this.subdomains[c]}const o=this._getBBox(t,e,n);e=this.isTMS?Math.pow(2,n)-1-e:e;const l={...this,x:t,y:e,z:n,s:a,bbox:o,...s};return Kg(this.url,l)}static create(t){return new Bi(t)}}function Kg(i,t){const e=/\{ *([\w_-]+) *\}/g;return i.replace(e,(n,s)=>{const r=t[s]??(()=>{throw new Error(`source url template error, No value provided for variable: ${n}`)})();return typeof r=="function"?r(t):r})}let Hc=class{constructor(t=0){yt(this,"_lon0",0),this._lon0=t}get lon0(){return this._lon0}getTileXWithCenterLon(t,e){const n=Math.pow(2,e);let s=t+Math.round(n/360*this._lon0);return s>=n?s-=n:s<0&&(s+=n),s}getProjBoundsFromLonLat(t){const e=t[2]-t[0]>180,n=this.project(t[0]+(e?this._lon0:0),t[1]),s=this.project(t[2]+(e?this._lon0:0),t[3]);return[Math.min(n.x,s.x),Math.min(n.y,s.y),Math.max(n.x,s.x),Math.max(n.y,s.y)]}getProjBoundsFromXYZ(t,e,n){const s=Math.PI*6378137,r=2*s/Math.pow(2,n),a=-s+t*r,o=s-(e+1)*r,l=-s+(t+1)*r,c=s-e*r;return[a,o,l,c]}getLonLatBoundsFromXYZ(t,e,n){const s=this.getProjBoundsFromXYZ(t,e,n),r=this.unProject(s[0],s[1]),a=this.unProject(s[2],s[3]);return[r.lon,r.lat,a.lon,a.lat]}};const $i=6378137;class Xc extends Hc{constructor(){super(...arguments),yt(this,"ID","3857"),yt(this,"mapWidth",2*Math.PI*$i),yt(this,"mapHeight",this.mapWidth),yt(this,"mapDepth",1)}project(t,e){const n=(t-this.lon0)*(Math.PI/180),s=e*(Math.PI/180),r=$i*n,a=$i*Math.log(Math.tan(Math.PI/4+s/2));return{x:r,y:a}}unProject(t,e){let n=t/$i*(180/Math.PI)+this.lon0;return n>180&&(n-=360),{lat:(2*Math.atan(Math.exp(e/$i))-Math.PI/2)*(180/Math.PI),lon:n}}}class jg extends Hc{constructor(){super(...arguments),yt(this,"ID","4326"),yt(this,"mapWidth",36e3*1e3),yt(this,"mapHeight",18e3*1e3),yt(this,"mapDepth",1)}project(t,e){return{x:(t-this.lon0)*100*1e3,y:e*100*1e3}}unProject(t,e){return{lon:t/(100*1e3)+this.lon0,lat:e/(100*1e3)}}}const Yl={createFromID:(i="3857",t)=>{let e;switch(i){case"3857":e=new Xc(t);break;case"4326":e=new jg(t);break;default:throw new Error(`Projection ID: ${i} is not supported.`)}return e}};class Jg extends Ig{constructor(){super(...arguments),yt(this,"_projection",new Xc(0))}get imgSource(){return super.imgSource}set imgSource(t){super.imgSource=t,this._updateImgProjBounds()}get demSource(){return super.demSource}set demSource(t){super.demSource=t,this._updateDemPrjBounds()}set bounds(t){super.bounds=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}get bounds(){return super.bounds}_updateImgProjBounds(){const t=this._projection;this.imgSource.forEach(e=>{e._projectionBounds=t.getProjBoundsFromLonLat(e.bounds||this.bounds)})}_updateDemPrjBounds(){const t=this._projection;this.demSource&&(this.demSource._projectionBounds=t.getProjBoundsFromLonLat(this.demSource.bounds||this.bounds))}get projection(){return this._projection}set projection(t){this._projection=t,this._updateImgProjBounds(),this._updateDemPrjBounds()}async load(t){return super.load(this._getTileCoords(t))}async update(t,e){super.update(this._getTileCoords(t),e)}_getTileCoords(t){if(!this._projection)throw new Error("projection is undefined");const{x:e,y:n,z:s}=t,r=this._projection.getTileXWithCenterLon(e,s),a=this._projection.getProjBoundsFromXYZ(e,n,s),o=this._projection.getLonLatBoundsFromXYZ(e,n,s);return{x:r,y:n,z:s,bounds:a,lonLatBounds:o}}}const nr=new Pc,Qg=new G(0,-1,0),Kl=new G;function Yc(i,t){const e=t.intersectObject(i.rootTile,!0);if(e.length>0){const n=e[0];console.assert(n.object.visible);const s=i.worldToLocal(n.point.clone()),r=i.map2geo(s);return Object.assign(n,{location:r})}}function jl(i,t){return Kl.set(t.x,1e4,t.z),nr.set(Kl,Qg),Yc(i,nr)}function qg(i,t,e){return nr.setFromCamera(e,i),Yc(t,nr)}function $g(i){const t=i.loader.manager,e=(n,s)=>{i.dispatchEvent({type:n,...s})};t.onStart=(n,s,r)=>{e("loading-start",{url:n,itemsLoaded:s,itemsTotal:r})},t.onError=n=>{e("loading-error",{url:n})},t.onLoad=()=>{e("loading-complete")},t.onProgress=(n,s,r)=>{e("loading-progress",{url:n,itemsLoaded:s,itemsTotal:r})},t.onParseEnd=n=>{e("parsing-end",{geometry:n})},i.rootTile.addEventListener("tile-created",n=>{e("tile-created",{tile:n.tile})}),i.rootTile.addEventListener("tile-loaded",n=>{e("tile-loaded",{tile:n.tile})}),i.rootTile.addEventListener("tile-unload",n=>{e("tile-unload",{tile:n.tile})}),i.rootTile.addEventListener("tile-visible-changed",n=>{e("tile-visible-changed",{tile:n.tile})})}class Kc extends ue{constructor(t){super(),yt(this,"name","map"),yt(this,"debug",0),yt(this,"_mapClock",new Lc),yt(this,"isLOD",!0),yt(this,"autoUpdate",!0),yt(this,"updateInterval",100),yt(this,"rootTile"),yt(this,"loader"),yt(this,"_minLevel",2),yt(this,"_maxLevel",20),yt(this,"_LODThreshold",1),this.up.set(0,0,1);const{loader:e=new Jg,rootTile:n=new $n,minLevel:s=2,imgSource:r,demSource:a,bounds:o,lon0:l=0,debug:c=0}=t;this.minLevel=s,this.loader=e,this.rootTile=n,o&&(this.loader.bounds=o),this.debug=this.loader.debug=c,this.lon0=l,this.imgSource=r,this.demSource=a,this.add(n),this._resize(),$g(this);const d=()=>{this.dispatchEvent({type:"ready"}),this.removeEventListener("loading-complete",d)};this.addEventListener("loading-complete",d)}get minLevel(){return this._minLevel}set minLevel(t){this._minLevel=t}get maxLevel(){return this._maxLevel}set maxLevel(t){this._maxLevel=t}get lon0(){return this.projection.lon0}set lon0(t){this.projection.lon0!==t&&(t!=0&&this.minLevel<1&&console.warn(`Map centralMeridian is ${this.lon0}, minLevel must > 0`),this.projection=Yl.createFromID(this.projection.ID,t),this._updateSource())}get projection(){return this.loader.projection}set projection(t){(t.ID!=this.projection.ID||t.lon0!=this.lon0)&&(this.loader.projection=t,this._resize(),this.reload(),this.debug>0&&console.log("Map Projection Changed:",t.ID,t.lon0),this.dispatchEvent({type:"projection-changed",projection:t}))}get imgSource(){return this.loader.imgSource}set imgSource(t){const e=Array.isArray(t)?t:[t];if(e.length===0)throw new Error("imgSource can not be empty");this.loader.imgSource=e,this.projection=Yl.createFromID(e[0].projectionID,this.projection.lon0),this.debug>0&&console.log("Img Source Changed:",e),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t})}get demSource(){return this.loader.demSource}set demSource(t){this.loader.demSource!==t&&(this.loader.demSource=t,this.debug>0&&console.log("DEM Source Changed:",this.demSource),this._updateSource(),this.dispatchEvent({type:"source-changed",source:t}))}get LODThreshold(){return this._LODThreshold}set LODThreshold(t){this._LODThreshold=t}get bounds(){return this.loader.bounds}set bounds(t){this.loader.bounds=t}get maxThreads(){return this.loader.maxThreads}set maxThreads(t){this.loader.maxThreads=t}get backgroundColor(){return 0}set backgroundColor(t){}static create(t){return new Kc(t)}_resize(){return this.rootTile.scale.set(this.projection.mapWidth,this.projection.mapHeight,this.projection.mapDepth),this.rootTile.updateMatrix(),this.rootTile.updateMatrixWorld(),this}_getMaxLevel(){let t=0;return this.imgSource.forEach(e=>t=Math.max(t,e.maxLevel)),this.demSource&&(t=Math.max(t,this.demSource.maxLevel)),this.debug&&console.log("Max Level:",t),t}update(t){const e=this._mapClock.getElapsedTime();e>this.updateInterval/1e3&&(this.rootTile.update({camera:t,loader:this.loader,minLevel:this.minLevel,maxLevel:this.maxLevel,LODThreshold:this.LODThreshold}),this.rootTile.castShadow=this.castShadow,this.rootTile.receiveShadow=this.receiveShadow,this.dispatchEvent({type:"update",delta:e}),this._mapClock.start())}_updateSource(){this._maxLevel=this._getMaxLevel(),this.rootTile.reload(this.loader,!1)}reload(t=!0){this.rootTile.reload(this.loader,t)}dispose(){this.removeFromParent(),this.reload()}geo2pos(t){return this.geo2map(t)}geo2map(t){const e=this.projection.project(t.x,t.y);return new G(e.x,e.y,t.z)}geo2world(t){return this.localToWorld(this.geo2map(t))}pos2geo(t){return this.map2geo(t)}map2geo(t){const e=this.projection.unProject(t.x,t.y);return new G(e.lon,e.lat,t.z)}world2geo(t){return this.pos2geo(this.worldToLocal(t.clone()))}getLocalInfoFromGeo(t){const e=this.geo2world(t);return jl(this,e)}getLocalInfoFromWorld(t){return jl(this,t)}getLocalInfoFromScreen(t,e){return qg(t,this,e)}get downloading(){return this.loader.downloadingThreads}getTileCount(){let t=0,e=0,n=0,s=0,r=0,a=0;return this.rootTile.traverse(o=>{o instanceof $n&&(t++,o.isLeaf&&(r++,o.showing&&e++,o.inFrustum&&n++),s=Math.max(s,o.z),a=this.loader.downloadingThreads)}),{total:t,leaf:r,visible:e,inFrustum:n,maxLevel:s,downloading:a}}}function jc(i){return Te.registerMaterialLoader(i),i}function Yr(i){return Te.registerGeometryLoader(i),i}function t1(){jc(new zc),Yr(new zg),Yr(new Vg),Yr(new Xg)}t1();var e1=Object.defineProperty,n1=(i,t,e)=>t in i?e1(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Xt=(i,t,e)=>n1(i,typeof t!="symbol"?t+"":t,e),ti=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var t=1.70158;return i===1?1:i*i*((t+1)*i-t)},Out:function(i){var t=1.70158;return i===0?0:--i*i*((t+1)*i+t)+1},InOut:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)}}),Bounce:Object.freeze({In:function(i){return 1-ti.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?ti.Bounce.In(i*2)*.5:ti.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(t){return Math.pow(t,i)},Out:function(t){return 1-Math.pow(1-t,i)},InOut:function(t){return t<.5?Math.pow(t*2,i)/2:(1-Math.pow(2-t*2,i))/2+.5}}}}),es=function(){return performance.now()},i1=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},i.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},i.prototype.update=function(t,e){t===void 0&&(t=es()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],a=!e;r&&r.update(t,a)===!1&&!e&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),za={Linear:function(i,t){var e=i.length-1,n=e*t,s=Math.floor(n),r=za.Utils.Linear;return t<0?r(i[0],i[1],n):t>1?r(i[e],i[e-1],e-n):r(i[s],i[s+1>e?e:s+1],n-s)},Utils:{Linear:function(i,t,e){return(t-i)*e+i}}},Jc=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Ba=new i1,Kr=function(){function i(t,e){e===void 0&&(e=Ba),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ti.Linear.None,this._interpolationFunction=za.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Jc.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},i.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},i.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},i.prototype.start=function(t,e){if(t===void 0&&(t=es()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},i.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},i.prototype._setupProperties=function(t,e,n,s,r){for(var a in n){var o=t[a],l=Array.isArray(o),c=l?"array":typeof o,d=!l&&Array.isArray(n[a]);if(!(c==="undefined"||c==="function")){if(d){var h=n[a];if(h.length===0)continue;for(var f=[o],m=0,x=h.length;m<x;m+=1){var g=this._handleRelativeValue(o,h[m]);if(isNaN(g)){d=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(g)}d&&(n[a]=f)}if((c==="object"||l)&&o&&!d){e[a]=l?[]:{};var p=o;for(var u in p)e[a][u]=p[u];s[a]=l?[]:{};var h=n[a];if(!this._isDynamic){var M={};for(var u in h)M[u]=h[u];n[a]=h=M}this._setupProperties(p,e[a],h,s[a],r)}else(typeof e[a]>"u"||r)&&(e[a]=o),l||(e[a]*=1),d?s[a]=n[a].slice().reverse():s[a]=e[a]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(t){return t===void 0&&(t=es()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},i.prototype.resume=function(t){return t===void 0&&(t=es()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return t===void 0&&(t=Ba),this._group=t,this},i.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},i.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},i.prototype.easing=function(t){return t===void 0&&(t=ti.Linear.None),this._easingFunction=t,this},i.prototype.interpolation=function(t){return t===void 0&&(t=za.Linear),this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,e){var n=this,s;if(t===void 0&&(t=es()),e===void 0&&(e=!0),this._isPaused)return!0;var r,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>a)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=t-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,d=function(){if(n._duration===0||o>c)return 1;var p=Math.trunc(o/l),u=o-p*l,M=Math.min(u/n._duration,1);return M===0&&o===n._duration?1:M},h=d(),f=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||o>=this._duration)if(this._repeat>0){var m=Math.min(Math.trunc((o-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=m);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*m,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var x=0,g=this._chainedTweens.length;x<g;x++)this._chainedTweens[x].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(t,e,n,s){for(var r in n)if(e[r]!==void 0){var a=e[r]||0,o=n[r],l=Array.isArray(t[r]),c=Array.isArray(o),d=!l&&c;d?t[r]=this._interpolationFunction(o,s):typeof o=="object"&&o?this._updateProperties(t[r],a,o,s):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(t[r]=a+(o-a)*s))}},i.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},i}();Jc.nextId;var un=Ba;un.getAll.bind(un);un.removeAll.bind(un);un.add.bind(un);un.remove.bind(un);var s1=un.update.bind(un);class r1 extends En{constructor(t,e={}){super(),Xt(this,"scene"),Xt(this,"topScenes",[]),Xt(this,"renderer"),Xt(this,"camera"),Xt(this,"ambLight"),Xt(this,"dirLight"),Xt(this,"clock",new Lc),Xt(this,"container");const{antialias:n=!1,stencil:s=!0,logarithmicDepthBuffer:r=!0}=e;this.renderer=this.createRenderer(n,s,r),this.scene=this.createScene(),this.camera=this.createCamera(),t&&this.addTo(t),this.ambLight=this.createAmbLight(),this.dirLight=this.createDirLight(),this.scene.add(this.ambLight),this.scene.add(this.dirLight),this.renderer.setAnimationLoop(this.animate.bind(this))}get width(){var t;return((t=this.container)==null?void 0:t.clientWidth)||0}get height(){var t;return((t=this.container)==null?void 0:t.clientHeight)||0}addTo(t){const e=typeof t=="string"?document.querySelector(t):t;if(e instanceof HTMLElement)this.container=e,e.appendChild(this.renderer.domElement),new ResizeObserver(this.resize.bind(this)).observe(e);else throw`${t} not found!}`;return this}createScene(){const t=new Vu,e=14414079;return t.background=new Yt(e),t.fog=new sr(e,0),t}createRenderer(t,e,n){const s=new cg({antialias:t,logarithmicDepthBuffer:n,stencil:e,alpha:!0,precision:"highp"});return s.setPixelRatio(window.devicePixelRatio),s.domElement.tabIndex=0,s.domElement.style.outline="none",s}createCamera(){const t=new Le(70,1,.1,5e7);return t.position.set(0,28e6,0),t}createAmbLight(){return new hd(16777215,1)}createDirLight(){const t=new cd(16777215,1);return t.position.set(0,2e3,1e3),t.target.position.set(0,0,0),t}resize(){const t=this.width,e=this.height;return this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.update(),this.dispatchEvent({type:"resize",size:{width:t,height:e}}),this}update(){this.renderer.autoClear=!1,this.renderer.render(this.scene,this.camera),this.topScenes.forEach(t=>{this.renderer.clearDepth(),this.renderer.render(t,this.camera)}),this.renderer.autoClear=!0}animate(){this.update(),this.dispatchEvent({type:"update",delta:this.clock.getDelta()}),s1()}}const Jl={type:"change"},fo={type:"start"},Qc={type:"end"},zs=new Fi,Ql=new In,a1=Math.cos(70*qn.DEG2RAD),ge=new G,De=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jr=1e-6;class o1 extends Ed{constructor(t,e=null){super(t,e),this.state=le.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:He.ROTATE,MIDDLE:He.DOLLY,RIGHT:He.PAN},this.touches={ONE:on.ROTATE,TWO:on.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new sn,this._lastTargetPosition=new G,this._quat=new sn().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pl,this._sphericalDelta=new pl,this._scale=1,this._panOffset=new G,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new G,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c1.bind(this),this._onPointerDown=l1.bind(this),this._onPointerUp=h1.bind(this),this._onContextMenu=_1.bind(this),this._onMouseWheel=f1.bind(this),this._onKeyDown=p1.bind(this),this._onTouchStart=m1.bind(this),this._onTouchMove=g1.bind(this),this._onMouseDown=u1.bind(this),this._onMouseMove=d1.bind(this),this._interceptControlDown=v1.bind(this),this._interceptControlUp=x1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jl),this.update(),this.state=le.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=De:n>Math.PI&&(n-=De),s<-Math.PI?s+=De:s>Math.PI&&(s-=De),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ge.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zs.origin.copy(this.object.position),zs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zs.direction))<a1?this.object.lookAt(this.target):(Ql.setFromNormalAndCoplanarPoint(this.object.up,this.target),zs.intersectPlane(Ql,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jr||this._lastTargetPosition.distanceToSquared(this.target)>jr?(this.dispatchEvent(Jl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?De/60*this.autoRotateSpeed*t:De/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(De*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-De*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(De*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-De*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function l1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function c1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function h1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qc),this.state=le.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function u1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case He.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case He.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(fo)}function d1(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f1(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(fo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qc))}function p1(i){this.enabled!==!1&&this._handleKeyDown(i)}function m1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case on.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case on.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case on.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case on.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(fo)}function g1(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function _1(i){this.enabled!==!1&&i.preventDefault()}function v1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}new G;new ao(-1,1,1,-1,0,1);class y1 extends Ke{constructor(){super(),this.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Fe([0,2,0,0,2,0],2))}}new y1;var J={};(function(){var i=function(){function n(s){this.message="JPEG error: "+s}return n.prototype=new Error,n.prototype.name="JpegError",n.constructor=n,n}(),t=function(){var n=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),s=4017,r=799,a=3406,o=2276,l=1567,c=3784,d=5793,h=2896;function f(_){_==null&&(_={}),_.w==null&&(_.w=-1),this.V=_.n,this.N=_.w}function m(_,y){for(var T=0,v=[],E,A,b=16,S;b>0&&!_[b-1];)b--;v.push({children:[],index:0});var P=v[0];for(E=0;E<b;E++){for(A=0;A<_[E];A++){for(P=v.pop(),P.children[P.index]=y[T];P.index>0;)P=v.pop();for(P.index++,v.push(P);v.length<=E;)v.push(S={children:[],index:0}),P.children[P.index]=S.children,P=S;T++}E+1<b&&(v.push(S={children:[],index:0}),P.children[P.index]=S.children,P=S)}return v[0].children}function x(_,y,T){return 64*((_.P+1)*y+T)}function g(_,y,T,v,E,A,b,S,P,D){D==null&&(D=!1);var I=T.m,U=T.Z,k=y,z=0,H=0,L=0,N=0,V,W=0,$,st,O,Y,Q,q,rt=0,vt,ht,It,Et;function Lt(){if(H>0)return H--,z>>H&1;if(z=_[y++],z===255){var j=_[y++];if(j){if(j===220&&D){y+=2;var ft=e(_,y);if(y+=2,ft>0&&ft!==T.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",ft)}else if(j===217){if(D){var ct=W*8;if(ct>0&&ct<T.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",ct)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return H=7,z>>>7}function F(j){for(var ft=j;;){switch(ft=ft[Lt()],typeof ft){case"number":return ft;case"object":continue}throw new i("invalid huffman sequence")}}function Dt(j){for(var ft=0;j>0;)ft=ft<<1|Lt(),j--;return ft}function ut(j){if(j===1)return Lt()===1?1:-1;var ft=Dt(j);return ft>=1<<j-1?ft:ft+(-1<<j)+1}function gt(j,ft){var ct=F(j.J),xt=ct===0?0:ut(ct),Nt=1;for(j.D[ft]=j.Q+=xt;Nt<64;){var lt=F(j.i),mt=lt&15,dt=lt>>4;if(mt===0){if(dt<15)break;Nt+=16;continue}Nt+=dt;var Ct=n[Nt];j.D[ft+Ct]=ut(mt),Nt++}}function _t(j,ft){var ct=F(j.J),xt=ct===0?0:ut(ct)<<P;j.D[ft]=j.Q+=xt}function Gt(j,ft){j.D[ft]|=Lt()<<P}function wt(j,ft){if(L>0){L--;return}for(var ct=A,xt=b;ct<=xt;){var Nt=F(j.i),lt=Nt&15,mt=Nt>>4;if(lt===0){if(mt<15){L=Dt(mt)+(1<<mt)-1;break}ct+=16;continue}ct+=mt;var dt=n[ct];j.D[ft+dt]=ut(lt)*(1<<P),ct++}}function C(j,ft){for(var ct=A,xt=b,Nt=0,lt,mt;ct<=xt;){var dt=ft+n[ct],Ct=j.D[dt]<0?-1:1;switch(N){case 0:if(mt=F(j.i),lt=mt&15,Nt=mt>>4,lt===0)Nt<15?(L=Dt(Nt)+(1<<Nt),N=4):(Nt=16,N=1);else{if(lt!==1)throw new i("invalid ACn encoding");V=ut(lt),N=Nt?2:3}continue;case 1:case 2:j.D[dt]?j.D[dt]+=Ct*(Lt()<<P):(Nt--,Nt===0&&(N=N===2?3:0));break;case 3:j.D[dt]?j.D[dt]+=Ct*(Lt()<<P):(j.D[dt]=V<<P,N=0);break;case 4:j.D[dt]&&(j.D[dt]+=Ct*(Lt()<<P));break}ct++}N===4&&(L--,L===0&&(N=0))}function w(j,ft,ct,xt,Nt){var lt=ct/I|0,mt=ct%I;W=lt*j.A+xt;var dt=mt*j.h+Nt,Ct=x(j,W,dt);ft(j,Ct)}function X(j,ft,ct){W=ct/j.P|0;var xt=ct%j.P,Nt=x(j,W,xt);ft(j,Nt)}var it=v.length;for(U?A===0?q=S===0?_t:Gt:q=S===0?wt:C:q=gt,it===1?ht=v[0].P*v[0].c:ht=I*T.R;rt<=ht;){var at=E?Math.min(ht-rt,E):ht;if(at>0){for(st=0;st<it;st++)v[st].Q=0;if(L=0,it===1)for($=v[0],Q=0;Q<at;Q++)X($,q,rt),rt++;else for(Q=0;Q<at;Q++){for(st=0;st<it;st++)for($=v[st],It=$.h,Et=$.A,O=0;O<Et;O++)for(Y=0;Y<It;Y++)w($,q,rt,O,Y);rt++}}if(H=0,vt=M(_,y),!vt)break;if(vt.u&&(y=vt.offset),vt.M>=65488&&vt.M<=65495)y+=2;else break}return y-k}function p(_,y,T){var v=_.$,E=_.D,A,b,S,P,D,I,U,k,z,H,L,N,V,W,$,st,O;if(!v)throw new i("missing required Quantization Table.");for(var Y=0;Y<64;Y+=8){if(z=E[y+Y],H=E[y+Y+1],L=E[y+Y+2],N=E[y+Y+3],V=E[y+Y+4],W=E[y+Y+5],$=E[y+Y+6],st=E[y+Y+7],z*=v[Y],!(H|L|N|V|W|$|st)){O=d*z+512>>10,T[Y]=O,T[Y+1]=O,T[Y+2]=O,T[Y+3]=O,T[Y+4]=O,T[Y+5]=O,T[Y+6]=O,T[Y+7]=O;continue}H*=v[Y+1],L*=v[Y+2],N*=v[Y+3],V*=v[Y+4],W*=v[Y+5],$*=v[Y+6],st*=v[Y+7],A=d*z+128>>8,b=d*V+128>>8,S=L,P=$,D=h*(H-st)+128>>8,k=h*(H+st)+128>>8,I=N<<4,U=W<<4,A=A+b+1>>1,b=A-b,O=S*c+P*l+128>>8,S=S*l-P*c+128>>8,P=O,D=D+U+1>>1,U=D-U,k=k+I+1>>1,I=k-I,A=A+P+1>>1,P=A-P,b=b+S+1>>1,S=b-S,O=D*o+k*a+2048>>12,D=D*a-k*o+2048>>12,k=O,O=I*r+U*s+2048>>12,I=I*s-U*r+2048>>12,U=O,T[Y]=A+k,T[Y+7]=A-k,T[Y+1]=b+U,T[Y+6]=b-U,T[Y+2]=S+I,T[Y+5]=S-I,T[Y+3]=P+D,T[Y+4]=P-D}for(var Q=0;Q<8;++Q){if(z=T[Q],H=T[Q+8],L=T[Q+16],N=T[Q+24],V=T[Q+32],W=T[Q+40],$=T[Q+48],st=T[Q+56],!(H|L|N|V|W|$|st)){O=d*z+8192>>14,O<-2040?O=0:O>=2024?O=255:O=O+2056>>4,E[y+Q]=O,E[y+Q+8]=O,E[y+Q+16]=O,E[y+Q+24]=O,E[y+Q+32]=O,E[y+Q+40]=O,E[y+Q+48]=O,E[y+Q+56]=O;continue}A=d*z+2048>>12,b=d*V+2048>>12,S=L,P=$,D=h*(H-st)+2048>>12,k=h*(H+st)+2048>>12,I=N,U=W,A=(A+b+1>>1)+4112,b=A-b,O=S*c+P*l+2048>>12,S=S*l-P*c+2048>>12,P=O,D=D+U+1>>1,U=D-U,k=k+I+1>>1,I=k-I,A=A+P+1>>1,P=A-P,b=b+S+1>>1,S=b-S,O=D*o+k*a+2048>>12,D=D*a-k*o+2048>>12,k=O,O=I*r+U*s+2048>>12,I=I*s-U*r+2048>>12,U=O,z=A+k,st=A-k,H=b+U,$=b-U,L=S+I,W=S-I,N=P+D,V=P-D,z<16?z=0:z>=4080?z=255:z>>=4,H<16?H=0:H>=4080?H=255:H>>=4,L<16?L=0:L>=4080?L=255:L>>=4,N<16?N=0:N>=4080?N=255:N>>=4,V<16?V=0:V>=4080?V=255:V>>=4,W<16?W=0:W>=4080?W=255:W>>=4,$<16?$=0:$>=4080?$=255:$>>=4,st<16?st=0:st>=4080?st=255:st>>=4,E[y+Q]=z,E[y+Q+8]=H,E[y+Q+16]=L,E[y+Q+24]=N,E[y+Q+32]=V,E[y+Q+40]=W,E[y+Q+48]=$,E[y+Q+56]=st}}function u(_,y){for(var T=y.P,v=y.c,E=new Int16Array(64),A=0;A<v;A++)for(var b=0;b<T;b++){var S=x(y,A,b);p(y,S,E)}return y.D}function M(_,y,T){T==null&&(T=y);var v=_.length-1,E=T<y?T:y;if(y>=v)return null;var A=e(_,y);if(A>=65472&&A<=65534)return{u:null,M:A,offset:y};for(var b=e(_,E);!(b>=65472&&b<=65534);){if(++E>=v)return null;b=e(_,E)}return{u:A.toString(16),M:b,offset:E}}return f.prototype={parse(_,y){y==null&&(y={});var T=y.F,v=0,E=null,A=null,b,S,P=0;function D(){var dt=e(_,v);v+=2;var Ct=v+dt-2,At=M(_,Ct,v);At&&At.u&&(Ct=At.offset);var kt=_.subarray(v,Ct);return v+=kt.length,kt}function I(dt){for(var Ct=Math.ceil(dt.o/8/dt.X),At=Math.ceil(dt.s/8/dt.B),kt=0;kt<dt.W.length;kt++){C=dt.W[kt];var Ot=Math.ceil(Math.ceil(dt.o/8)*C.h/dt.X),ee=Math.ceil(Math.ceil(dt.s/8)*C.A/dt.B),B=Ct*C.h,bt=At*C.A,nt=64*bt*(B+1);C.D=new Int16Array(nt),C.P=Ot,C.c=ee}dt.m=Ct,dt.R=At}var U=[],k=[],z=[],H=e(_,v);if(v+=2,H!==65496)throw new i("SOI not found");H=e(_,v),v+=2;t:for(;H!==65497;){var L,N,V;switch(H){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var W=D();H===65504&&W[0]===74&&W[1]===70&&W[2]===73&&W[3]===70&&W[4]===0&&(E={version:{d:W[5],T:W[6]},K:W[7],j:W[8]<<8|W[9],H:W[10]<<8|W[11],S:W[12],I:W[13],C:W.subarray(14,14+3*W[12]*W[13])}),H===65518&&W[0]===65&&W[1]===100&&W[2]===111&&W[3]===98&&W[4]===101&&(A={version:W[5]<<8|W[6],k:W[7]<<8|W[8],q:W[9]<<8|W[10],a:W[11]});break;case 65499:var $=e(_,v),st;v+=2;for(var O=$+v-2;v<O;){var Y=_[v++],Q=new Uint16Array(64);if(Y>>4)if(Y>>4===1)for(N=0;N<64;N++)st=n[N],Q[st]=e(_,v),v+=2;else throw new i("DQT - invalid table spec");else for(N=0;N<64;N++)st=n[N],Q[st]=_[v++];U[Y&15]=Q}break;case 65472:case 65473:case 65474:if(b)throw new i("Only single frame JPEGs supported");v+=2,b={},b.G=H===65473,b.Z=H===65474,b.precision=_[v++];var q=e(_,v),rt,vt=0,ht=0;v+=2,b.s=T||q,b.o=e(_,v),v+=2,b.W=[],b._={};var It=_[v++];for(L=0;L<It;L++){rt=_[v];var Et=_[v+1]>>4,Lt=_[v+1]&15;vt<Et&&(vt=Et),ht<Lt&&(ht=Lt);var F=_[v+2];V=b.W.push({h:Et,A:Lt,L:F,$:null}),b._[rt]=V-1,v+=3}b.X=vt,b.B=ht,I(b);break;case 65476:var Dt=e(_,v);for(v+=2,L=2;L<Dt;){var ut=_[v++],gt=new Uint8Array(16),_t=0;for(N=0;N<16;N++,v++)_t+=gt[N]=_[v];var Gt=new Uint8Array(_t);for(N=0;N<_t;N++,v++)Gt[N]=_[v];L+=17+_t,(ut>>4?k:z)[ut&15]=m(gt,Gt)}break;case 65501:v+=2,S=e(_,v),v+=2;break;case 65498:var wt=++P===1&&!T,C;v+=2;var w=_[v++],X=[];for(L=0;L<w;L++){var it=_[v++],at=b._[it];C=b.W[at],C.index=it;var j=_[v++];C.J=z[j>>4],C.i=k[j&15],X.push(C)}var ft=_[v++],ct=_[v++],xt=_[v++];try{var Nt=g(_,v,b,X,S,ft,ct,xt>>4,xt&15,wt);v+=Nt}catch(dt){if(dt instanceof DNLMarkerError)return this.parse(_,{F:dt.s});if(dt instanceof EOIMarkerError)break t;throw dt}break;case 65500:v+=4;break;case 65535:_[v]!==255&&v--;break;default:var lt=M(_,v-2,v-3);if(lt&&lt.u){v=lt.offset;break}if(v>=_.length-1)break t;throw new i("JpegImage.parse - unknown marker: "+H.toString(16))}H=e(_,v),v+=2}for(this.width=b.o,this.height=b.s,this.g=E,this.b=A,this.W=[],L=0;L<b.W.length;L++){C=b.W[L];var mt=U[C.L];mt&&(C.$=mt),this.W.push({index:C.index,e:u(b,C),l:C.h/b.X,t:C.A/b.B,P:C.P,c:C.c})}this.p=this.W.length},Y(_,y,T){T==null&&(T=!1);var v=this.width/_,E=this.height/y,A,b,S,P,D,I,U,k,z,H,L=0,N,V=this.W.length,W=_*y*V,$=new Uint8ClampedArray(W),st=new Uint32Array(_),O=4294967288,Y;for(U=0;U<V;U++){if(A=this.W[U],b=A.l*v,S=A.t*E,L=U,N=A.e,P=A.P+1<<3,b!==Y){for(D=0;D<_;D++)k=0|D*b,st[D]=(k&O)<<3|k&7;Y=b}for(I=0;I<y;I++)for(k=0|I*S,H=P*(k&O)|(k&7)<<3,D=0;D<_;D++)$[L]=N[H+st[D]],L+=V}var Q=this.V;if(!T&&V===4&&!Q&&(Q=new Int32Array([-256,255,-256,255,-256,255,-256,255])),Q)for(U=0;U<W;)for(k=0,z=0;k<V;k++,U++,z+=2)$[U]=($[U]*Q[z]>>8)+Q[z+1];return $},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(_){for(var y,T,v,E=0,A=_.length;E<A;E+=3)y=_[E],T=_[E+1],v=_[E+2],_[E]=y-179.456+1.402*v,_[E+1]=y+135.459-.344*T-.714*v,_[E+2]=y-226.816+1.772*T;return _},O:function(_){for(var y,T,v,E,A=0,b=0,S=_.length;b<S;b+=4)y=_[b],T=_[b+1],v=_[b+2],E=_[b+3],_[A++]=-122.67195406894+T*(-660635669420364e-19*T+.000437130475926232*v-54080610064599e-18*y+.00048449797120281*E-.154362151871126)+v*(-.000957964378445773*v+.000817076911346625*y-.00477271405408747*E+1.53380253221734)+y*(.000961250184130688*y-.00266257332283933*E+.48357088451265)+E*(-.000336197177618394*E+.484791561490776),_[A++]=107.268039397724+T*(219927104525741e-19*T-.000640992018297945*v+.000659397001245577*y+.000426105652938837*E-.176491792462875)+v*(-.000778269941513683*v+.00130872261408275*y+.000770482631801132*E-.151051492775562)+y*(.00126935368114843*y-.00265090189010898*E+.25802910206845)+E*(-.000318913117588328*E-.213742400323665),_[A++]=-20.810012546947+T*(-.000570115196973677*T-263409051004589e-19*v+.0020741088115012*y-.00288260236853442*E+.814272968359295)+v*(-153496057440975e-19*v-.000132689043961446*y+.000560833691242812*E-.195152027534049)+y*(.00174418132927582*y-.00255243321439347*E+.116935020465145)+E*(-.000343531996510555*E+.24165260232407);return _.subarray(0,A)},r:function(_){for(var y,T,v,E=0,A=_.length;E<A;E+=4)y=_[E],T=_[E+1],v=_[E+2],_[E]=434.456-y-1.402*v,_[E+1]=119.541-y+.344*T+.714*v,_[E+2]=481.816-y-1.772*T;return _},U:function(_){for(var y,T,v,E,A=0,b=0,S=_.length;b<S;b+=4)y=_[b],T=_[b+1],v=_[b+2],E=_[b+3],_[A++]=255+y*(-6747147073602441e-20*y+.0008379262121013727*T+.0002894718188643294*v+.003264231057537806*E-1.1185611867203937)+T*(26374107616089405e-21*T-8626949158638572e-20*v-.0002748769067499491*E-.02155688794978967)+v*(-3878099212869363e-20*v-.0003267808279485286*E+.0686742238595345)-E*(.0003361971776183937*E+.7430659151342254),_[A++]=255+y*(.00013596372813588848*y+.000924537132573585*T+.00010567359618683593*v+.0004791864687436512*E-.3109689587515875)+T*(-.00023545346108370344*T+.0002702845253534714*v+.0020200308977307156*E-.7488052167015494)+v*(6834815998235662e-20*v+.00015168452363460973*E-.09751927774728933)-E*(.0003189131175883281*E+.7364883807733168),_[A++]=255+y*(13598650411385307e-21*y+.00012423956175490851*T+.0004751985097583589*v-36729317476630422e-22*E-.05562186980264034)+T*(.00016141380598724676*T+.0009692239130725186*v+.0007782692450036253*E-.44015232367526463)+v*(5068882914068769e-22*v+.0017778369011375071*E-.7591454649749609)-E*(.0003435319965105553*E+.7063770186160144);return _.subarray(0,A)},getData:function(_){var y=_.width,T=_.height,v=_.forceRGB,E=_.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var A=this.Y(y,T,E);if(this.p===1&&v){for(var b=A.length,S=new Uint8ClampedArray(b*3),P=0,D=0;D<b;D++){var I=A[D];S[P++]=I,S[P++]=I,S[P++]=I}return S}else{if(this.p===3&&this.f)return this.z(A);if(this.p===4){if(this.f)return v?this.O(A):this.r(A);if(v)return this.U(A)}}return A}},f}();function e(n,s){return n[s]<<8|n[s+1]}J.JpegDecoder=t})();J.encodeImage=function(i,t,e,n){var s={t256:[t],t257:[e],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[e],t279:[t*e*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var r in n)s[r]=n[r];for(var a=new Uint8Array(J.encode([s])),o=new Uint8Array(i),l=new Uint8Array(1e3+t*e*4),r=0;r<a.length;r++)l[r]=a[r];for(var r=0;r<o.length;r++)l[1e3+r]=o[r];return l.buffer};J.encode=function(i){var t=new Uint8Array(2e4),e=4,n=J._binBE;t[0]=t[1]=77,n.writeUshort(t,2,42);var s=8;n.writeUint(t,e,s),e+=4;for(var r=0;r<i.length;r++){var a=J._writeIFD(n,J._types.basic,t,s,i[r]);s=a[1],r<i.length-1&&(s&3&&(s+=4-(s&3)),n.writeUint(t,a[0],s))}return t.slice(0,s).buffer};J.decode=function(i,t){t==null&&(t={parseMN:!0,debug:!1});var e=new Uint8Array(i),n=0,s=J._binBE.readASCII(e,n,2);n+=2;var r=s=="II"?J._binLE:J._binBE;r.readUshort(e,n),n+=2;var a=r.readUint(e,n);n+=4;for(var o=[];;){var l=r.readUshort(e,a),c=r.readUshort(e,a+4);if(l!=0&&(c<1||13<c)){log("error in TIFF");break}if(J._readIFD(r,e,a,o,0,t),a=r.readUint(e,a+2+l*12),a==0)break}return o};J.decodeImage=function(i,t,e){if(!t.data){var n=new Uint8Array(i),s=J._binBE.readASCII(n,0,2);if(t.t256!=null){t.isLE=s=="II",t.width=t.t256[0],t.height=t.t257[0];var r=t.t259?t.t259[0]:1,a=t.t266?t.t266[0]:1;t.t284&&t.t284[0]==2&&log("PlanarConfiguration 2 should not be used!"),r==7&&t.t258&&t.t258.length>3&&(t.t258=t.t258.slice(0,3));var o=t.t277?t.t277[0]:1,l=t.t258?t.t258[0]:1,c=l*o;r==1&&t.t279!=null&&t.t278&&t.t262[0]==32803&&(c=Math.round(t.t279[0]*8/(t.width*t.t278[0]))),t.t50885&&t.t50885[0]==4&&(c=t.t258[0]*3);var d=Math.ceil(t.width*c/8)*8,h=t.t273;(h==null||t.t322)&&(h=t.t324);var f=t.t279;r==1&&h.length==1&&(f=[t.height*(d>>>3)]),(f==null||t.t322)&&(f=t.t325);var m=new Uint8Array(t.height*(d>>>3)),x=0;if(t.t322!=null){var g=t.t322[0],p=t.t323[0],u=Math.floor((t.width+g-1)/g),M=Math.floor((t.height+p-1)/p),_=new Uint8Array(Math.ceil(g*p*c/8)|0);console.log("====",u,M);for(var y=0;y<M;y++)for(var T=0;T<u;T++){var v=y*u+T;_.fill(0),J.decode._decompress(t,e,n,h[v],f[v],r,_,0,a,g,p),r==6?m=_:J._copyTile(_,Math.ceil(g*c/8)|0,p,m,Math.ceil(t.width*c/8)|0,t.height,Math.ceil(T*g*c/8)|0,y*p)}x=m.length*8}else{if(h==null)return;var E=t.t278?t.t278[0]:t.height;E=Math.min(E,t.height);for(var v=0;v<h.length;v++)J.decode._decompress(t,e,n,h[v],f[v],r,m,Math.ceil(x/8)|0,a,t.width,E),x+=d*E;x=Math.min(x,m.length*8)}t.data=new Uint8Array(m.buffer,0,Math.ceil(x/8)|0)}}};J.decode._decompress=function(i,t,e,n,s,r,a,o,l,c,d){if(i.t271&&i.t271[0]=="Panasonic"&&i.t45&&i.t45[0]==6&&(r=34316),r==1)for(var h=0;h<s;h++)a[o+h]=e[n+h];else if(r==2)J.decode._decodeG2(e,n,s,a,o,c,l);else if(r==3)J.decode._decodeG3(e,n,s,a,o,c,l,i.t292?(i.t292[0]&1)==1:!1);else if(r==4)J.decode._decodeG4(e,n,s,a,o,c,l);else if(r==5)J.decode._decodeLZW(e,n,s,a,o,8);else if(r==6)J.decode._decodeOldJPEG(i,e,n,s,a,o);else if(r==7||r==34892)J.decode._decodeNewJPEG(i,e,n,s,a,o);else if(r==8||r==32946){var f=new Uint8Array(e.buffer,n+2,s-6),m=J._inflateRaw(f);o+m.length<=a.length&&a.set(m,o)}else r==9?J.decode._decodeVC5(e,n,s,a,o,i.t33422):r==32767?J.decode._decodeARW(i,e,n,s,a,o):r==32773?J.decode._decodePackBits(e,n,s,a,o):r==32809?J.decode._decodeThunder(e,n,s,a,o):r==34316?J.decode._decodePanasonic(i,e,n,s,a,o):r==34713?J.decode._decodeNikon(i,t,e,n,s,a,o):r==34676?J.decode._decodeLogLuv32(i,e,n,s,a,o):log("Unknown compression",r);var x=i.t258?Math.min(32,i.t258[0]):1,g=i.t277?i.t277[0]:1,p=x*g>>>3,u=Math.ceil(x*g*c/8);if(x==16&&!i.isLE&&i.t33422==null)for(var M=0;M<d;M++)for(var _=o+M*u,y=1;y<u;y+=2){var T=a[_+y];a[_+y]=a[_+y-1],a[_+y-1]=T}if(i.t317&&i.t317[0]==2)for(var M=0;M<d;M++){var v=o+M*u;if(x==16)for(var h=p;h<u;h+=2){var E=(a[v+h+1]<<8|a[v+h])+(a[v+h-p+1]<<8|a[v+h-p]);a[v+h]=E&255,a[v+h+1]=E>>>8&255}else if(g==3)for(var h=3;h<u;h+=3)a[v+h]=a[v+h]+a[v+h-3]&255,a[v+h+1]=a[v+h+1]+a[v+h-2]&255,a[v+h+2]=a[v+h+2]+a[v+h-1]&255;else for(var h=p;h<u;h++)a[v+h]=a[v+h]+a[v+h-p]&255}};J.decode._decodePanasonic=function(i,t,e,n,s,r){var a=t.buffer,o=i.t2[0],l=i.t3[0],c=i.t10[0],d=i.t45[0],h=0,f=0,m=0,x=0,g=d==6?new Uint32Array(18):new Uint8Array(16),p,u,M,_=[0,0],y=[0,0],T,v=0,E,A,b,S,P=new Uint8Array(16384),D=new Uint16Array(s.buffer);function I(F){if(m==0){var Dt=new Uint8Array(a,e+f+8184,8200),ut=new Uint8Array(a,e+f,8184);P.set(Dt),P.set(ut,Dt.length),f+=16384}if(d==5)for(p=0;p<16;p++)g[p]=P[m++],m&=16383;else return m=m-F&131071,x=m>>3^16368,(P[x]|P[x+1]<<8)>>(m&7)&~(-1<<F)}function U(F){return P[m+15-F]}function k(){g[0]=U(0)<<6|U(1)>>2,g[1]=((U(1)&3)<<12|U(2)<<4|U(3)>>4)&16383,g[2]=U(3)>>2&3,g[3]=(U(3)&3)<<8|U(4),g[4]=U(5)<<2|U(6)>>6,g[5]=(U(6)&63)<<4|U(7)>>4,g[6]=U(7)>>2&3,g[7]=(U(7)&3)<<8|U(8),g[8]=U(9)<<2&1020|U(10)>>6,g[9]=(U(10)<<4|U(11)>>4)&1023,g[10]=U(11)>>2&3,g[11]=(U(11)&3)<<8|U(12),g[12]=(U(13)<<2&1020|U(14)>>6)&1023,g[13]=(U(14)<<4|U(15)>>4)&1023,m+=16,x=0}function z(){g[0]=U(0)<<4|U(1)>>4,g[1]=((U(1)&15)<<8|U(2))&4095,g[2]=U(3)>>6&3,g[3]=(U(3)&63)<<2|U(4)>>6,g[4]=(U(4)&63)<<2|U(5)>>6,g[5]=(U(5)&63)<<2|U(6)>>6,g[6]=U(6)>>4&3,g[7]=(U(6)&15)<<4|U(7)>>4,g[8]=(U(7)&15)<<4|U(8)>>4,g[9]=(U(8)&15)<<4|U(9)>>4,g[10]=U(9)>>2&3,g[11]=(U(9)&3)<<6|U(10)>>2,g[12]=(U(10)&3)<<6|U(11)>>2,g[13]=(U(11)&3)<<6|U(12)>>2,g[14]=U(12)&3,g[15]=U(13),g[16]=U(14),g[17]=U(15),m+=16,x=0}function H(){_[0]=0,_[1]=0,y[0]=0,y[1]=0}if(d==7)throw d;if(d==6){var L=c==12,N=L?z:k,V=L?14:11,W=L?128:512,$=L?2048:8192,st=L?16383:65535,O=L?4095:16383,Y=o/V,Q=Y*16,q=L?18:14;for(A=0;A<l-15;A+=16){var rt=Math.min(16,l-A),vt=Q*rt;for(P=new Uint8Array(a,e+h,vt),m=0,h+=vt,S=0,b=0;S<rt;S++,b=0){v=(A+S)*o;for(var ht=0;ht<Y;ht++)for(N(),H(),M=0,E=0,p=0;p<V;p++){if(T=p&1,p%3==2){var It=x<q?g[x++]:0;It==3&&(It=4),E=W<<It,M=1<<It}var Et=x<q?g[x++]:0;_[T]?(Et*=M,E<$&&y[T]>E&&(Et+=y[T]-E),y[T]=Et):(_[T]=Et,Et?y[T]=Et:Et=y[T]),D[v+b++]=Et-15<=st?Et-15&st:Et+2147483633>>31&O}}}}else if(d==5){var Lt=c==12?10:9;for(A=0;A<l;A++)for(b=0;b<o;b+=Lt)I(0),c==12?(D[v++]=((g[1]&15)<<8)+g[0],D[v++]=16*g[2]+(g[1]>>4),D[v++]=((g[4]&15)<<8)+g[3],D[v++]=16*g[5]+(g[4]>>4),D[v++]=((g[7]&15)<<8)+g[6],D[v++]=16*g[8]+(g[7]>>4),D[v++]=((g[10]&15)<<8)+g[9],D[v++]=16*g[11]+(g[10]>>4),D[v++]=((g[13]&15)<<8)+g[12],D[v++]=16*g[14]+(g[13]>>4)):c==14&&(D[v++]=g[0]+((g[1]&63)<<8),D[v++]=(g[1]>>6)+4*g[2]+((g[3]&15)<<10),D[v++]=(g[3]>>4)+16*g[4]+((g[5]&3)<<12),D[v++]=((g[5]&252)>>2)+(g[6]<<6),D[v++]=g[7]+((g[8]&63)<<8),D[v++]=(g[8]>>6)+4*g[9]+((g[10]&15)<<10),D[v++]=(g[10]>>4)+16*g[11]+((g[12]&3)<<12),D[v++]=((g[12]&252)>>2)+(g[13]<<6),D[v++]=g[14]+((g[15]&63)<<8))}else if(d==4)for(A=0;A<l;A++)for(b=0;b<o;b++)p=b%14,T=p&1,p==0&&H(),p%3==2&&(M=4>>3-I(2)),y[T]?(u=I(8),u!=0&&(_[T]-=128<<M,(_[T]<0||M==4)&&(_[T]&=~(-1<<M)),_[T]+=u<<M)):(y[T]=I(8),(y[T]||p>11)&&(_[T]=y[T]<<4|I(4))),D[v++]=_[b&1];else throw d};J.decode._decodeVC5=function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],t,e,n,s=[3,3,3,3,2,2,2,1,1,1],r=24576,a=16384,o=8192,l=a|o;function c(M){var _=M[1],y=M[0][_>>>3]>>>7-(_&7)&1;return M[1]++,y}function d(M,_){if(t==null){t={};for(var y=0;y<i.length;y+=4)t[i[y+1]]=i.slice(y,y+4)}for(var T=c(M),v=t[T];v==null;)T=T<<1|c(M),v=t[T];var E=v[3];E!=0&&(E=c(M)==0?E:-E),_[0]=v[2],_[1]=E}function h(M,_){for(var y=0;y<_;y++)(M&1)==1&&M++,M=M>>>1;return M}function f(M,_){return M>>_}function m(M,_,y,T,v,E){_[y]=f(f(11*M[v]-4*M[v+E]+M[v+E+E]+4,3)+M[T],1),_[y+E]=f(f(5*M[v]+4*M[v+E]-M[v+E+E]+4,3)-M[T],1)}function x(M,_,y,T,v,E){var A=M[v-E]-M[v+E],b=M[v],S=M[T];_[y]=f(f(A+4,3)+b+S,1),_[y+E]=f(f(-A+4,3)+b-S,1)}function g(M,_,y,T,v,E){_[y]=f(f(5*M[v]+4*M[v-E]-M[v-E-E]+4,3)+M[T],1),_[y+E]=f(f(11*M[v]-4*M[v-E]+M[v-E-E]+4,3)-M[T],1)}function p(M){return M=M<0?0:M>4095?4095:M,M=n[M]>>>2,M}function u(M,_,y,T,v,E){T=new Uint16Array(T.buffer);var A=Date.now(),b=J._binBE,S=_+y,P,D,I,U,k,z,H,L,N,V;_+=4;for(var W=E[0]==1;_<S;){var $=b.readShort(M,_),st=b.readUshort(M,_+2);if(_+=4,$==12)P=st;else if($==20)D=st;else if($==21)I=st;else if($==48)U=st;else if($==53)k=st;else if($!=35){if($==62)z=st;else if($!=101){if($==109)H=st;else if($!=84&&$!=106&&$!=107&&$!=108&&$!=102){if($==104)L=st;else if($!=105){var O=$<0?-$:$,Y=O&65280,Q=0;if(O&l&&(O&o?(Q=st&65535,Q+=(O&255)<<16):Q=st&65535),(O&r)==r){if(N==null){N=[];for(var q=0;q<4;q++)N[q]=new Int16Array((D>>>1)*(I>>>1));V=new Int16Array((D>>>1)*(I>>>1)),e=new Int16Array(1024);for(var q=0;q<1024;q++){var rt=q-512,vt=Math.abs(rt),P=Math.floor(768*vt*vt*vt/(255*255*255))+vt;e[q]=Math.sign(rt)*P}n=new Uint16Array(4096);for(var ht=65535,q=0;q<4096;q++){var It=q,Et=ht*(Math.pow(113,It/4095)-1)/112;n[q]=Math.min(Et,ht)}}var Lt=N[z],F=h(D,1+s[U]),Dt=h(I,1+s[U]);if(U==0)for(var ut=0;ut<Dt;ut++)for(var gt=0;gt<F;gt++){var _t=_+(ut*F+gt)*2;Lt[ut*(D>>>1)+gt]=M[_t]<<8|M[_t+1]}else{for(var Gt=[M,_*8],wt=[],C=0,w=F*Dt,X=[0,0],it=0,st=0;C<w;)for(d(Gt,X),it=X[0],st=X[1];it>0;)wt[C++]=st,it--;for(var at=(U-1)%3,j=at!=1?F:0,ft=at!=0?Dt:0,ut=0;ut<Dt;ut++)for(var ct=(ut+ft)*(D>>>1)+j,xt=ut*F,gt=0;gt<F;gt++)Lt[ct+gt]=e[wt[xt+gt]+512]*k;if(at==2){for(var L=D>>>1,Nt=F*2,lt=Dt*2,ut=0;ut<Dt;ut++)for(var gt=0;gt<Nt;gt++){var q=ut*2*L+gt,mt=ut*L+gt,dt=Dt*L+mt;ut==0?m(Lt,V,q,dt,mt,L):ut==Dt-1?g(Lt,V,q,dt,mt,L):x(Lt,V,q,dt,mt,L)}var Ct=Lt;Lt=V,V=Ct;for(var ut=0;ut<lt;ut++)for(var gt=0;gt<F;gt++){var q=ut*L+2*gt,mt=ut*L+gt,dt=F+mt;gt==0?m(Lt,V,q,dt,mt,1):gt==F-1?g(Lt,V,q,dt,mt,1):x(Lt,V,q,dt,mt,1)}var Ct=Lt;Lt=V,V=Ct;for(var At=[],kt=2-~~((U-1)/3),Ot=0;Ot<3;Ot++)At[Ot]=H>>14-Ot*2&3;var ee=At[kt];if(ee!=0)for(var ut=0;ut<lt;ut++)for(var gt=0;gt<Nt;gt++){var q=ut*L+gt;Lt[q]=Lt[q]<<ee}}}if(U==9&&z==3)for(var B=N[0],bt=N[1],nt=N[2],ot=N[3],ut=0;ut<I;ut+=2)for(var gt=0;gt<D;gt+=2){var Mt=ut*D+gt,_t=(ut>>>1)*(D>>>1)+(gt>>>1),St=B[_t],Zt=bt[_t]-2048,ce=nt[_t]-2048,me=ot[_t]-2048,qt=(Zt<<1)+St,Ce=(ce<<1)+St,ze=St+me,ki=St-me;W?(T[Mt]=p(ze),T[Mt+1]=p(Ce),T[Mt+D]=p(qt),T[Mt+D+1]=p(ki)):(T[Mt]=p(qt),T[Mt+1]=p(ze),T[Mt+D]=p(ki),T[Mt+D+1]=p(Ce))}_+=Q*4}else if(O==16388)_+=Q*4;else if(!(Y==8192||Y==8448||Y==9216))throw O.toString(16)}}}}}console.log(Date.now()-A)}return u}();J.decode._decodeLogLuv32=function(i,t,e,n,s,r){for(var a=i.width,o=a*4,l=0,c=new Uint8Array(o);l<n;){for(var d=0;d<o;){var h=t[e+l];if(l++,h<128){for(var f=0;f<h;f++)c[d+f]=t[e+l+f];d+=h,l+=h}else{h=h-126;for(var f=0;f<h;f++)c[d+f]=t[e+l];d+=h,l++}}for(var m=0;m<a;m++)s[r+0]=c[m],s[r+1]=c[m+a],s[r+2]=c[m+a*2],s[r+4]=c[m+a*3],r+=6}};J.decode._ljpeg_diff=function(i,t,e){var n=J.decode._getbithuff,s,r;return s=n(i,t,e[0],e),r=n(i,t,s,0),r&1<<s-1||(r-=(1<<s)-1),r};J.decode._decodeARW=function(i,t,e,n,s,r){var a=i.t256[0],o=i.t257[0],l=i.t258[0],c=i.isLE?J._binLE:J._binBE,d=a*o==n||a*o*1.5==n;if(!d){o+=8;var h=[e,0,0,0],f=new Uint16Array(32770),m=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],H,x,g,b,A,p=0,u=J.decode._ljpeg_diff;for(f[0]=15,g=H=0;H<18;H++)for(var M=32768>>>(m[H]>>>8),x=0;x<M;x++)f[++g]=m[H];for(b=a;b--;)for(A=0;A<o+1;A+=2)if(A==o&&(A=1),p+=u(t,h,f),A<o){var _=p&4095;J.decode._putsF(s,(A*a+b)*l,_<<16-l)}return}if(a*o*1.5==n){for(var H=0;H<n;H+=3){var y=t[e+H+0],T=t[e+H+1],v=t[e+H+2];s[r+H]=T<<4|y>>>4,s[r+H+1]=y<<4|v>>>4,s[r+H+2]=v<<4|T>>>4}return}var E=new Uint16Array(16),A,b,S,P,D,I,U,k,z,H,L,N=new Uint8Array(a+1);for(A=0;A<o;A++){for(var V=0;V<a;V++)N[V]=t[e++];for(L=0,b=0;b<a-30;L+=16){for(P=2047&(S=c.readUint(N,L)),D=2047&S>>>11,I=15&S>>>22,U=15&S>>>26,k=0;k<4&&128<<k<=P-D;k++);for(z=30,H=0;H<16;H++)H==I?E[H]=P:H==U?E[H]=D:(E[H]=((c.readUshort(N,L+(z>>3))>>>(z&7)&127)<<k)+D,E[H]>2047&&(E[H]=2047),z+=7);for(H=0;H<16;H++,b+=2){var _=E[H]<<1;J.decode._putsF(s,(A*a+b)*l,_<<16-l)}b-=b&1?1:31}}};J.decode._decodeNikon=function(i,t,e,n,s,r,a){var o=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],l=i.t256[0],c=i.t257[0],d=i.t258[0],h=0,f=0,m=J.decode._make_decoder,x=J.decode._getbithuff,g=t[0].exifIFD.makerNote,p=g.t150?g.t150:g.t140,u=0,M=p[u++],_=p[u++];(M==73||_==88)&&(u+=2110),M==70&&(h=2),d==14&&(h+=3);for(var y=[[0,0],[0,0]],T=i.isLE?J._binLE:J._binBE,S=0;S<2;S++)for(var v=0;v<2;v++)y[S][v]=T.readShort(p,u),u+=2;var E=1<<d&32767,A=0,b=T.readShort(p,u);u+=2,b>1&&(A=Math.floor(E/(b-1))),M==68&&_==32&&A>0&&(f=T.readShort(p,562));var S,P,D,I,U,k,z=[0,0],H=m(o[h]),L=[n,0,0,0];for(P=0;P<c;P++)for(f&&P==f&&(H=m(o[h+1])),D=0;D<l;D++){S=x(e,L,H[0],H),I=S&15,U=S>>>4,k=(x(e,L,I-U,0)<<1)+1<<U>>>1,k&1<<I-1||(k-=(1<<I)-(U==0?1:0)),D<2?z[D]=y[P&1][D]+=k:z[D&1]+=k;var N=Math.min(Math.max(z[D&1],0),(1<<d)-1),V=(P*l+D)*d;J.decode._putsF(r,V,N<<16-d)}};J.decode._putsF=function(i,t,e){e=e<<8-(t&7);var n=t>>>3;i[n]|=e>>>16,i[n+1]|=e>>>8,i[n+2]|=e};J.decode._getbithuff=function(i,t,e,n){var s=0;J.decode._get_byte;var r,a=t[0],o=t[1],l=t[2],c=t[3];if(e==0||l<0)return 0;for(;!c&&l<e&&(r=i[a++])!=-1&&!(c=s);)o=(o<<8)+r,l+=8;if(r=o<<32-l>>>32-e,n?(l-=n[r+1]>>>8,r=n[r+1]&255):l-=e,l<0)throw"e";return t[0]=a,t[1]=o,t[2]=l,t[3]=c,r};J.decode._make_decoder=function(i){var t,e,n,s,r,a=[];for(t=16;t!=0&&!i[t];t--);var o=17;for(a[0]=t,n=e=1;e<=t;e++)for(s=0;s<i[e];s++,++o)for(r=0;r<1<<t-e;r++)n<=1<<t&&(a[n++]=e<<8|i[o]);return a};J.decode._decodeNewJPEG=function(i,t,e,n,s,r){n=Math.min(n,t.length-e);var a=i.t347,o=a?a.length:0,l=new Uint8Array(o+n);if(a){for(var c=216,d=217,h=0,f=0;f<o-1&&!(a[f]==255&&a[f+1]==d);f++)l[h++]=a[f];var m=t[e],x=t[e+1];(m!=255||x!=c)&&(l[h++]=m,l[h++]=x);for(var f=2;f<n;f++)l[h++]=t[e+f]}else for(var f=0;f<n;f++)l[f]=t[e+f];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var g=i.t258[0],p=J.LosslessJpegDecode(l),u=p.length;if(g==16)if(i.isLE)for(var f=0;f<u;f++)s[r+(f<<1)]=p[f]&255,s[r+(f<<1)+1]=p[f]>>>8;else for(var f=0;f<u;f++)s[r+(f<<1)]=p[f]>>>8,s[r+(f<<1)+1]=p[f]&255;else if(g==14||g==12||g==10)for(var M=16-g,f=0;f<u;f++)J.decode._putsF(s,f*g,p[f]<<M);else if(g==8)for(var f=0;f<u;f++)s[r+f]=p[f];else throw new Error("unsupported bit depth "+g)}else{var _=new J.JpegDecoder;_.parse(l);for(var y=_.getData({width:_.width,height:_.height,forceRGB:!0,isSourcePDF:!1}),f=0;f<y.length;f++)s[r+f]=y[f]}i.t262[0]==6&&(i.t262[0]=2)};J.decode._decodeOldJPEGInit=function(i,t,e,n){var s=216,r=219,a=196,o=221,l=192,c=218,d=0,h=0,f,m,x=!1,g,p,u,M=i.t513,_=M?M[0]:0,y=i.t514,T=y?y[0]:0,v=i.t324||i.t273||M,E=i.t530,A=0,b=0,S=i.t277?i.t277[0]:1,P=i.t515;if(v&&(h=v[0],x=v.length>1),!x){if(t[e]==255&&t[e+1]==s)return{jpegOffset:e};if(M!=null&&(t[e+_]==255&&t[e+_+1]==s?d=e+_:log("JPEGInterchangeFormat does not point to SOI"),y==null?log("JPEGInterchangeFormatLength field is missing"):(_>=h||_+T<=h)&&log("JPEGInterchangeFormatLength field value is invalid"),d!=null))return{jpegOffset:d}}if(E!=null&&(A=E[0],b=E[1]),M!=null&&y!=null)if(T>=2&&_+T<=h){for(t[e+_+T-2]==255&&t[e+_+T-1]==s?f=new Uint8Array(T-2):f=new Uint8Array(T),g=0;g<f.length;g++)f[g]=t[e+_+g];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(f==null){var D=0,I=[];I[D++]=255,I[D++]=s;var U=i.t519;if(U==null)throw new Error("JPEGQTables tag is missing");for(g=0;g<U.length;g++)for(I[D++]=255,I[D++]=r,I[D++]=0,I[D++]=67,I[D++]=g,p=0;p<64;p++)I[D++]=t[e+U[g]+p];for(u=0;u<2;u++){var k=i[u==0?"t520":"t521"];if(k==null)throw new Error((u==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(g=0;g<k.length;g++){I[D++]=255,I[D++]=a;var z=19;for(p=0;p<16;p++)z+=t[e+k[g]+p];for(I[D++]=z>>>8,I[D++]=z&255,I[D++]=g|u<<4,p=0;p<16;p++)I[D++]=t[e+k[g]+p];for(p=0;p<z;p++)I[D++]=t[e+k[g]+16+p]}}if(I[D++]=255,I[D++]=l,I[D++]=0,I[D++]=8+3*S,I[D++]=8,I[D++]=i.height>>>8&255,I[D++]=i.height&255,I[D++]=i.width>>>8&255,I[D++]=i.width&255,I[D++]=S,S==1)I[D++]=1,I[D++]=17,I[D++]=0;else for(g=0;g<3;g++)I[D++]=g+1,I[D++]=g!=0?17:(A&15)<<4|b&15,I[D++]=g;P!=null&&P[0]!=0&&(I[D++]=255,I[D++]=o,I[D++]=0,I[D++]=4,I[D++]=P[0]>>>8&255,I[D++]=P[0]&255),f=new Uint8Array(I)}var H=-1;for(g=0;g<f.length-1;){if(f[g]==255&&f[g+1]==l){H=g;break}g++}if(H==-1){var L=new Uint8Array(f.length+10+3*S);L.set(f);var N=f.length;if(H=f.length,f=L,f[N++]=255,f[N++]=l,f[N++]=0,f[N++]=8+3*S,f[N++]=8,f[N++]=i.height>>>8&255,f[N++]=i.height&255,f[N++]=i.width>>>8&255,f[N++]=i.width&255,f[N++]=S,S==1)f[N++]=1,f[N++]=17,f[N++]=0;else for(g=0;g<3;g++)f[N++]=g+1,f[N++]=g!=0?17:(A&15)<<4|b&15,f[N++]=g}if(t[h]==255&&t[h+1]==c){var V=t[h+2]<<8|t[h+3];for(m=new Uint8Array(V+2),m[0]=t[h],m[1]=t[h+1],m[2]=t[h+2],m[3]=t[h+3],g=0;g<V-2;g++)m[g+4]=t[h+g+4]}else{m=new Uint8Array(8+2*S);var W=0;if(m[W++]=255,m[W++]=c,m[W++]=0,m[W++]=6+2*S,m[W++]=S,S==1)m[W++]=1,m[W++]=0;else for(g=0;g<3;g++)m[W++]=g+1,m[W++]=g<<4|g;m[W++]=0,m[W++]=63,m[W++]=0}return{jpegOffset:e,tables:f,sosMarker:m,sofPosition:H}};J.decode._decodeOldJPEG=function(i,t,e,n,s,r){var a,o,l,c,d,h=J.decode._decodeOldJPEGInit(i,t,e,n);if(h.jpegOffset!=null)for(o=e+n-h.jpegOffset,c=new Uint8Array(o),a=0;a<o;a++)c[a]=t[h.jpegOffset+a];else{for(l=h.tables.length,c=new Uint8Array(l+h.sosMarker.length+n+2),c.set(h.tables),d=l,c[h.sofPosition+5]=i.height>>>8&255,c[h.sofPosition+6]=i.height&255,c[h.sofPosition+7]=i.width>>>8&255,c[h.sofPosition+8]=i.width&255,(t[e]!=255||t[e+1]!=SOS)&&(c.set(h.sosMarker,d),d+=sosMarker.length),a=0;a<n;a++)c[d++]=t[e+a];c[d++]=255,c[d++]=EOI}var f=new J.JpegDecoder;f.parse(c);for(var m=f.getData({width:f.width,height:f.height,forceRGB:!0,isSourcePDF:!1}),a=0;a<m.length;a++)s[r+a]=m[a];i.t262&&i.t262[0]==6&&(i.t262[0]=2)};J.decode._decodePackBits=function(i,t,e,n,s){for(var r=new Int8Array(i.buffer),a=new Int8Array(n.buffer),o=t+e;t<o;){var l=r[t];if(t++,l>=0&&l<128)for(var c=0;c<l+1;c++)a[s]=r[t],s++,t++;if(l>=-127&&l<0){for(var c=0;c<-l+1;c++)a[s]=r[t],s++;t++}}return s};J.decode._decodeThunder=function(i,t,e,n,s){for(var r=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],o=t+e,l=s*2,c=0;t<o;){var d=i[t],h=d>>>6,f=d&63;if(t++,h==3&&(c=f&15,n[l>>>1]|=c<<4*(1-l&1),l++),h==0)for(var m=0;m<f;m++)n[l>>>1]|=c<<4*(1-l&1),l++;if(h==2)for(var m=0;m<2;m++){var x=f>>>3*(1-m)&7;x!=4&&(c+=a[x],n[l>>>1]|=c<<4*(1-l&1),l++)}if(h==1)for(var m=0;m<3;m++){var x=f>>>2*(2-m)&3;x!=2&&(c+=r[x],n[l>>>1]|=c<<4*(1-l&1),l++)}}};J.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3};J.decode._lens=function(){var i=function(l,c,d,h){for(var f=0;f<c.length;f++)l[c[f]]=d+f*h},t="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",e="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",s="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",r="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";t=t.split(","),e=e.split(","),n=n.split(","),s=s.split(","),r=r.split(",");var a={},o={};return i(a,t,0,1),i(a,n,64,64),i(a,r,1792,64),i(o,e,0,1),i(o,s,64,64),i(o,r,1792,64),[a,o]}();J.decode._decodeG4=function(i,t,e,n,s,r,a){for(var o=J.decode,l=t<<3,c=0,d="",h=[],f=[],m=0;m<r;m++)f.push(0);f=o._makeDiff(f);for(var x=0,g=0,p=0,u=0,M=0,_=0,y="",T=0,v=Math.ceil(r/8)*8;l>>>3<t+e;){p=o._findDiff(f,x+(x==0?0:1),1-M),u=o._findDiff(f,p,M);var E=0;if(a==1&&(E=i[l>>>3]>>>7-(l&7)&1),a==2&&(E=i[l>>>3]>>>(l&7)&1),l++,d+=E,y=="H"){if(o._lens[M][d]!=null){var A=o._lens[M][d];d="",c+=A,A<64&&(o._addNtimes(h,c,M),x+=c,M=1-M,c=0,T--,T==0&&(y=""))}}else d=="0001"&&(d="",o._addNtimes(h,u-x,M),x=u),d=="001"&&(d="",y="H",T=2),o._dmap[d]!=null&&(g=p+o._dmap[d],o._addNtimes(h,g-x,M),x=g,d="",M=1-M);h.length==r&&y==""&&(o._writeBits(h,n,s*8+_*v),M=0,_++,x=0,f=o._makeDiff(h),h=[])}};J.decode._findDiff=function(i,t,e){for(var n=0;n<i.length;n+=2)if(i[n]>=t&&i[n+1]==e)return i[n]};J.decode._makeDiff=function(i){var t=[];i[0]==1&&t.push(0,1);for(var e=1;e<i.length;e++)i[e-1]!=i[e]&&t.push(e,i[e]);return t.push(i.length,0,i.length,1),t};J.decode._decodeG2=function(i,t,e,n,s,r,a){for(var o=J.decode,l=t<<3,c=0,d="",h=[],f=0,m=0,x=Math.ceil(r/8)*8;l>>>3<t+e;){var g=0;a==1&&(g=i[l>>>3]>>>7-(l&7)&1),a==2&&(g=i[l>>>3]>>>(l&7)&1),l++,d+=g,c=o._lens[f][d],c!=null&&(o._addNtimes(h,c,f),d="",c<64&&(f=1-f),h.length==r&&(o._writeBits(h,n,s*8+m*x),h=[],m++,f=0,l&7&&(l+=8-(l&7)),c>=64&&(l+=8)))}};J.decode._decodeG3=function(i,t,e,n,s,r,a,o){for(var l=J.decode,c=t<<3,d=0,h="",f=[],m=[],x=0;x<r;x++)f.push(0);for(var g=0,p=0,u=0,M=0,_=0,y=-1,T="",v=0,E=!0,A=Math.ceil(r/8)*8;c>>>3<t+e;){u=l._findDiff(m,g+(g==0?0:1),1-_),M=l._findDiff(m,u,_);var b=0;if(a==1&&(b=i[c>>>3]>>>7-(c&7)&1),a==2&&(b=i[c>>>3]>>>(c&7)&1),c++,h+=b,E){if(l._lens[_][h]!=null){var S=l._lens[_][h];h="",d+=S,S<64&&(l._addNtimes(f,d,_),_=1-_,d=0)}}else if(T=="H"){if(l._lens[_][h]!=null){var S=l._lens[_][h];h="",d+=S,S<64&&(l._addNtimes(f,d,_),g+=d,_=1-_,d=0,v--,v==0&&(T=""))}}else h=="0001"&&(h="",l._addNtimes(f,M-g,_),g=M),h=="001"&&(h="",T="H",v=2),l._dmap[h]!=null&&(p=u+l._dmap[h],l._addNtimes(f,p-g,_),g=p,h="",_=1-_);h.endsWith("000000000001")&&(y>=0&&l._writeBits(f,n,s*8+y*A),o&&(a==1&&(E=(i[c>>>3]>>>7-(c&7)&1)==1),a==2&&(E=(i[c>>>3]>>>(c&7)&1)==1),c++),h="",_=0,y++,g=0,m=l._makeDiff(f),f=[])}f.length==r&&l._writeBits(f,n,s*8+y*A)};J.decode._addNtimes=function(i,t,e){for(var n=0;n<t;n++)i.push(e)};J.decode._writeBits=function(i,t,e){for(var n=0;n<i.length;n++)t[e+n>>>3]|=i[n]<<7-(e+n&7)};J.decode._decodeLZW=J.decode._decodeLZW=function(){var i,t,e,n,s=0,r=0,a=0,o=0,l=function(){var p=i>>>3,u=t[p]<<16|t[p+1]<<8|t[p+2],M=u>>>24-(i&7)-r&(1<<r)-1;return i+=r,M},c=new Uint32Array(4096*4),d=0,h=function(p){if(p!=d){d=p,a=1<<p,o=a+1;for(var u=0;u<o+1;u++)c[4*u]=c[4*u+3]=u,c[4*u+1]=65535,c[4*u+2]=1}},f=function(p){r=p+1,s=o+1},m=function(p){for(var u=p<<2,M=c[u+2],_=n+M-1;u!=65535;)e[_--]=c[u],u=c[u+1];n+=M},x=function(p,u){var M=s<<2,_=p<<2;c[M]=c[(u<<2)+3],c[M+1]=_,c[M+2]=c[_+2]+1,c[M+3]=c[_+3],s++,s+1==1<<r&&r!=12&&r++},g=function(p,u,M,_,y,T){i=u<<3,t=p,e=_,n=y;var v=u+M<<3,E=0,A=0;for(h(T),f(T);i<v&&(E=l())!=o;){if(E==a){if(f(T),E=l(),E==o)break;m(E)}else E<s?(m(E),x(A,E)):(x(A,A),m(s-1));A=E}return n};return g}();J.tags={};J._types=function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var t={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:t},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}}();J._readIFD=function(i,t,e,n,s,r){var a=i.readUshort(t,e);e+=2;var o={};r.debug&&log("   ".repeat(s),n.length-1,">>>----------------");for(var l=0;l<a;l++){var c=i.readUshort(t,e);e+=2;var d=i.readUshort(t,e);e+=2;var h=i.readUint(t,e);e+=4;var f=i.readUint(t,e);e+=4;var m=[];if(d==1||d==7){var x=h<5?e-4:f;x+h>t.buffer.byteLength&&(h=t.buffer.byteLength-x),m=new Uint8Array(t.buffer,x,h)}if(d==2){var g=h<5?e-4:f,p=t[g],u=Math.max(0,Math.min(h-1,t.length-g));p<128||u==0?m.push(i.readASCII(t,g,u)):m=new Uint8Array(t.buffer,g,u)}if(d==3)for(var M=0;M<h;M++)m.push(i.readUshort(t,(h<3?e-4:f)+2*M));if(d==4||d==13)for(var M=0;M<h;M++)m.push(i.readUint(t,(h<2?e-4:f)+4*M));if(d==5||d==10)for(var _=d==5?i.readUint:i.readInt,M=0;M<h;M++)m.push([_(t,f+M*8),_(t,f+M*8+4)]);if(d==8)for(var M=0;M<h;M++)m.push(i.readShort(t,(h<3?e-4:f)+2*M));if(d==9)for(var M=0;M<h;M++)m.push(i.readInt(t,(h<2?e-4:f)+4*M));if(d==11)for(var M=0;M<h;M++)m.push(i.readFloat(t,f+M*4));if(d==12)for(var M=0;M<h;M++)m.push(i.readDouble(t,f+M*8));if(h!=0&&m.length==0){if(log(c,"unknown TIFF tag type: ",d,"num:",h),l==0)return;continue}if(r.debug&&log("   ".repeat(s),c,d,J.tags[c],m),o["t"+c]=m,!(c==330&&o.t272&&o.t272[0]=="DSLR-A100")&&(c==330||c==34665||c==34853||c==50740&&i.readUshort(t,i.readUint(m,0))<300||c==61440)){for(var y=c==50740?[i.readUint(m,0)]:m,T=[],M=0;M<y.length;M++)J._readIFD(i,t,y[M],T,s+1,r);c==330&&(o.subIFD=T),c==34665&&(o.exifIFD=T[0]),c==34853&&(o.gpsiIFD=T[0]),c==50740&&(o.dngPrvt=T[0]),c==61440&&(o.fujiIFD=T[0])}if(c==37500&&r.parseMN){var v=m;if(i.readASCII(v,0,5)=="Nikon")o.makerNote=J.decode(v.slice(10).buffer)[0];else if(i.readASCII(v,0,5)=="OLYMP"||i.readASCII(v,0,9)=="OM SYSTEM"){var E=[8208,8224,8240,8256,8272],A=[];J._readIFD(i,v,v[1]==77?16:v[5]==85?12:8,A,s+1,r);for(var b=o.makerNote=A.pop(),M=0;M<E.length;M++){var S="t"+E[M];b[S]!=null&&(J._readIFD(i,v,b[S][0],A,s+1,r),b[S]=A.pop())}b.t12288&&(J._readIFD(i,b.t12288,0,A,s+1,r),b.t12288=A.pop())}else if(i.readUshort(t,f)<300&&i.readUshort(t,f+4)<=12){var A=[];J._readIFD(i,t,f,A,s+1,r),o.makerNote=A[0]}}}return n.push(o),r.debug&&log("   ".repeat(s),"<<<---------------"),e};J._writeIFD=function(i,t,e,n,s){var r=Object.keys(s),a=r.length;s.exifIFD&&a--,s.gpsiIFD&&a--,i.writeUshort(e,n,a),n+=2;for(var o=n+a*12+4,l=0;l<r.length;l++){var c=r[l];if(!(c=="t34665"||c=="t34853")){c=="exifIFD"&&(c="t34665"),c=="gpsiIFD"&&(c="t34853");var d=parseInt(c.slice(1)),h=t.main[d];if(h==null&&(h=t.rest[d]),h==null||h==0)throw new Error("unknown type of tag: "+d);var f=s[c];if(d==34665){var m=J._writeIFD(i,t,e,o,s.exifIFD);f=[o],o=m[1]}if(d==34853){var m=J._writeIFD(i,J._types.gps,e,o,s.gpsiIFD);f=[o],o=m[1]}h==2&&(f=f[0]+"\0");var x=f.length;i.writeUshort(e,n,d),n+=2,i.writeUshort(e,n,h),n+=2,i.writeUint(e,n,x),n+=4;var g=[-1,1,1,2,4,8,0,1,0,4,8,0,8][h]*x,p=n;if(g>4&&(i.writeUint(e,n,o),p=o),h==1||h==7)for(var u=0;u<x;u++)e[p+u]=f[u];else if(h==2)i.writeASCII(e,p,f);else if(h==3)for(var u=0;u<x;u++)i.writeUshort(e,p+2*u,f[u]);else if(h==4)for(var u=0;u<x;u++)i.writeUint(e,p+4*u,f[u]);else if(h==5||h==10)for(var M=h==5?i.writeUint:i.writeInt,u=0;u<x;u++){var _=f[u],y=_[0],T=_[1];if(y==null)throw"e";M(e,p+8*u,y),M(e,p+8*u+4,T)}else if(h==9)for(var u=0;u<x;u++)i.writeInt(e,p+4*u,f[u]);else if(h==12)for(var u=0;u<x;u++)i.writeDouble(e,p+8*u,f[u]);else throw h;g>4&&(g+=g&1,o+=g),n+=4}}return[n,o]};J.toRGBA8=function(i,t){function e(wt){return wt<.0031308?12.92*wt:1.055*Math.pow(wt,1/2.4)-.055}var n=i.width,s=i.height,r=n*s,a=i.data,o=new Uint8Array(r*4),l=i.t262?i.t262[0]:2,c=i.t258?Math.min(32,i.t258[0]):1;i.t262==null&&c==1&&(l=0);var d=i.t277?i.t277[0]:i.t258?i.t258.length:[1,1,3,1,1,4,3][l],h=i.t339?i.t339[0]:null;if(l==1&&c==32&&h!=3)throw"e";var f=Math.ceil(d*c*n/8);if(l==0){t=1/256;for(var m=0;m<s;m++){var x=m*f,g=m*n;if(c==1)for(var p=0;p<n;p++){var u=g+p<<2,M=a[x+(p>>3)]>>7-(p&7)&1;o[u]=o[u+1]=o[u+2]=(1-M)*255,o[u+3]=255}if(c==4)for(var p=0;p<n;p++){var u=g+p<<2,M=a[x+(p>>1)]>>4-4*(p&1)&15;o[u]=o[u+1]=o[u+2]=(15-M)*17,o[u+3]=255}if(c==8)for(var p=0;p<n;p++){var u=g+p<<2,M=a[x+p];o[u]=o[u+1]=o[u+2]=255-M,o[u+3]=255}if(c==16)for(var p=0;p<n;p++){var u=g+p<<2,_=x+2*p,M=a[_+1]<<8|a[_];o[u]=o[u+1]=o[u+2]=Math.min(255,255-~~(M*t)),o[u+3]=255}}}else if(l==1){t==null&&(t=1/256);for(var y=a.length&3?null:new Float32Array(a.buffer),m=0;m<s;m++){var x=m*f,g=m*n;if(c==1)for(var p=0;p<n;p++){var u=g+p<<2,M=a[x+(p>>3)]>>7-(p&7)&1;o[u]=o[u+1]=o[u+2]=M*255,o[u+3]=255}if(c==2)for(var p=0;p<n;p++){var u=g+p<<2,M=a[x+(p>>2)]>>6-2*(p&3)&3;o[u]=o[u+1]=o[u+2]=M*85,o[u+3]=255}if(c==8)for(var p=0;p<n;p++){var u=g+p<<2,M=a[x+p*d];o[u]=o[u+1]=o[u+2]=M,o[u+3]=255}if(c==16)for(var p=0;p<n;p++){var u=g+p<<2,_=x+2*p,M=a[_+1]<<8|a[_];o[u]=o[u+1]=o[u+2]=Math.min(255,~~(M*t)),o[u+3]=255}if(c==32)for(var p=0;p<n;p++){var u=g+p<<2,_=(x>>>2)+p,M=y[_];o[u]=o[u+1]=o[u+2]=~~(.5+255*M),o[u+3]=255}}}else if(l==2)if(c==8){if(d==1)for(var p=0;p<r;p++)o[4*p]=o[4*p+1]=o[4*p+2]=a[p],o[4*p+3]=255;if(d==3)for(var p=0;p<r;p++){var u=p<<2,T=p*3;o[u]=a[T],o[u+1]=a[T+1],o[u+2]=a[T+2],o[u+3]=255}if(d>=4)for(var p=0;p<r;p++){var u=p<<2,T=p*d;o[u]=a[T],o[u+1]=a[T+1],o[u+2]=a[T+2],o[u+3]=a[T+3]}}else if(c==16){if(d==4)for(var p=0;p<r;p++){var u=p<<2,T=p*8+1;o[u]=a[T],o[u+1]=a[T+2],o[u+2]=a[T+4],o[u+3]=a[T+6]}if(d==3)for(var p=0;p<r;p++){var u=p<<2,T=p*6+1;o[u]=a[T],o[u+1]=a[T+2],o[u+2]=a[T+4],o[u+3]=255}}else if(c==32){for(var v=new Float32Array(a.buffer),E=0,p=0;p<v.length;p++)E=Math.min(E,v[p]);if(E<0)for(var p=0;p<a.length;p+=4){var A=a[p];a[p]=a[p+3],a[p+3]=A,A=a[p+1],a[p+1]=a[p+2],a[p+2]=A}for(var b=[],p=0;p<65536;p++)b.push(e(p/65535));for(var p=0;p<v.length;p++){var S=Math.max(0,Math.min(1,v[p]));v[p]=b[~~(.5+S*65535)]}if(d==3)for(var p=0;p<r;p++){var u=p<<2,T=p*3;o[u]=~~(.5+v[T]*255),o[u+1]=~~(.5+v[T+1]*255),o[u+2]=~~(.5+v[T+2]*255),o[u+3]=255}else if(d==4)for(var p=0;p<r;p++){var u=p<<2,T=p*4;o[u]=~~(.5+v[T]*255),o[u+1]=~~(.5+v[T+1]*255),o[u+2]=~~(.5+v[T+2]*255),o[u+3]=~~(.5+v[T+3]*255)}else throw d}else throw c;else if(l==3)for(var P=i.t320,D=1<<c,I=c==8&&d>1&&i.t338&&i.t338[0]!=0,m=0;m<s;m++)for(var U=0;U<n;U++){var p=m*n+U,u=p<<2,k=0,z=m*f;if(c==1)k=a[z+(U>>>3)]>>>7-(U&7)&1;else if(c==2)k=a[z+(U>>>2)]>>>6-2*(U&3)&3;else if(c==4)k=a[z+(U>>>1)]>>>4-4*(U&1)&15;else if(c==8)k=a[z+U*d];else throw c;o[u]=P[k]>>8,o[u+1]=P[D+k]>>8,o[u+2]=P[D+D+k]>>8,o[u+3]=I?a[z+U*d+1]:255}else if(l==5)for(var H=d>4?1:0,p=0;p<r;p++){var u=p<<2,L=p*d;if(window.UDOC){var N=a[L],V=a[L+1],W=a[L+2],$=a[L+3],st=UDOC.C.cmykToRgb([N*(1/255),V*(1/255),W*(1/255),$*(1/255)]);o[u]=~~(.5+255*st[0]),o[u+1]=~~(.5+255*st[1]),o[u+2]=~~(.5+255*st[2])}else{var N=255-a[L],V=255-a[L+1],W=255-a[L+2],$=(255-a[L+3])*(1/255);o[u]=~~(N*$+.5),o[u+1]=~~(V*$+.5),o[u+2]=~~(W*$+.5)}o[u+3]=255*(1-H)+a[L+4]*H}else if(l==6&&i.t278)for(var O=i.t278[0],m=0;m<s;m+=O)for(var p=m*n,Y=O*n,Q=0;Q<Y;Q++){var u=4*(p+Q),L=3*p+4*(Q>>>1),W=a[L+(Q&1)],q=a[L+2]-128,rt=a[L+3]-128,vt=W+((rt>>2)+(rt>>3)+(rt>>5)),ht=W-((q>>2)+(q>>4)+(q>>5))-((rt>>1)+(rt>>3)+(rt>>4)+(rt>>5)),It=W+(q+(q>>1)+(q>>2)+(q>>6));o[u]=Math.max(0,Math.min(255,vt)),o[u+1]=Math.max(0,Math.min(255,ht)),o[u+2]=Math.max(0,Math.min(255,It)),o[u+3]=255}else if(l==32845)for(var m=0;m<s;m++)for(var U=0;U<n;U++){var L=(m*n+U)*6,u=(m*n+U)*4,Et=a[L+1]<<8|a[L],Et=Math.pow(2,(Et+.5)/256-64),Lt=(a[L+3]+.5)/410,F=(a[L+5]+.5)/410,Dt=9*Lt/(6*Lt-16*F+12),ut=4*F/(6*Lt-16*F+12),gt=Et,_t=Dt*gt/ut,W=gt,Gt=(1-Dt-ut)*gt/ut,vt=2.69*_t-1.276*W-.414*Gt,ht=-1.022*_t+1.978*W+.044*Gt,It=.061*_t-.224*W+1.163*Gt;o[u]=e(Math.min(vt,1))*255,o[u+1]=e(Math.min(ht,1))*255,o[u+2]=e(Math.min(It,1))*255,o[u+3]=255}else log("Unknown Photometric interpretation: "+l);return o};J.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var t=["tif","tiff","dng","cr2","nef"],e=0;e<i.length;e++){var n=i[e],s=n.getAttribute("src");if(s!=null){var r=s.split(".").pop().toLowerCase();if(t.indexOf(r)!=-1){var a=new XMLHttpRequest;J._xhrs.push(a),J._imgs.push(n),a.open("GET",s),a.responseType="arraybuffer",a.onload=J._imgLoaded,a.send()}}}};J._xhrs=[];J._imgs=[];J._imgLoaded=function(i){var t=J._xhrs.indexOf(i.target),e=J._imgs[t];J._xhrs.splice(t,1),J._imgs.splice(t,1),e.setAttribute("src",J.bufferToURI(i.target.response))};J.bufferToURI=function(i){var t=J.decode(i),e=t,n=0,s=e[0];t[0].subIFD&&(e=e.concat(t[0].subIFD));for(var r=0;r<e.length;r++){var a=e[r];if(!(a.t258==null||a.t258.length<3)){var o=a.t256*a.t257;o>n&&(n=o,s=a)}}J.decodeImage(i,s,t);var l=J.toRGBA8(s),c=s.width,d=s.height,h=document.createElement("canvas");h.width=c,h.height=d;var f=h.getContext("2d"),m=new ImageData(new Uint8ClampedArray(l.buffer),c,d);return f.putImageData(m,0,0),h.toDataURL()};J._binBE={nextZero:function(i,t){for(;i[t]!=0;)t++;return t},readUshort:function(i,t){return i[t]<<8|i[t+1]},readShort:function(i,t){var e=J._binBE.ui8;return e[0]=i[t+1],e[1]=i[t+0],J._binBE.i16[0]},readInt:function(i,t){var e=J._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],J._binBE.i32[0]},readUint:function(i,t){var e=J._binBE.ui8;return e[0]=i[t+3],e[1]=i[t+2],e[2]=i[t+1],e[3]=i[t+0],J._binBE.ui32[0]},readASCII:function(i,t,e){for(var n="",s=0;s<e;s++)n+=String.fromCharCode(i[t+s]);return n},readFloat:function(i,t){for(var e=J._binBE.ui8,n=0;n<4;n++)e[n]=i[t+3-n];return J._binBE.fl32[0]},readDouble:function(i,t){for(var e=J._binBE.ui8,n=0;n<8;n++)e[n]=i[t+7-n];return J._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e>>8&255,i[t+1]=e&255},writeInt:function(i,t,e){var n=J._binBE.ui8;J._binBE.i32[0]=e,i[t+3]=n[0],i[t+2]=n[1],i[t+1]=n[2],i[t+0]=n[3]},writeUint:function(i,t,e){i[t]=e>>24&255,i[t+1]=e>>16&255,i[t+2]=e>>8&255,i[t+3]=e>>0&255},writeASCII:function(i,t,e){for(var n=0;n<e.length;n++)i[t+n]=e.charCodeAt(n)},writeDouble:function(i,t,e){J._binBE.fl64[0]=e;for(var n=0;n<8;n++)i[t+n]=J._binBE.ui8[7-n]}};J._binBE.ui8=new Uint8Array(8);J._binBE.i16=new Int16Array(J._binBE.ui8.buffer);J._binBE.i32=new Int32Array(J._binBE.ui8.buffer);J._binBE.ui32=new Uint32Array(J._binBE.ui8.buffer);J._binBE.fl32=new Float32Array(J._binBE.ui8.buffer);J._binBE.fl64=new Float64Array(J._binBE.ui8.buffer);J._binLE={nextZero:J._binBE.nextZero,readUshort:function(i,t){return i[t+1]<<8|i[t]},readShort:function(i,t){var e=J._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],J._binBE.i16[0]},readInt:function(i,t){var e=J._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],J._binBE.i32[0]},readUint:function(i,t){var e=J._binBE.ui8;return e[0]=i[t+0],e[1]=i[t+1],e[2]=i[t+2],e[3]=i[t+3],J._binBE.ui32[0]},readASCII:J._binBE.readASCII,readFloat:function(i,t){for(var e=J._binBE.ui8,n=0;n<4;n++)e[n]=i[t+n];return J._binBE.fl32[0]},readDouble:function(i,t){for(var e=J._binBE.ui8,n=0;n<8;n++)e[n]=i[t+n];return J._binBE.fl64[0]},writeUshort:function(i,t,e){i[t]=e&255,i[t+1]=e>>8&255},writeInt:function(i,t,e){var n=J._binBE.ui8;J._binBE.i32[0]=e,i[t+0]=n[0],i[t+1]=n[1],i[t+2]=n[2],i[t+3]=n[3]},writeUint:function(i,t,e){i[t]=e>>>0&255,i[t+1]=e>>>8&255,i[t+2]=e>>>16&255,i[t+3]=e>>>24&255},writeASCII:J._binBE.writeASCII};J._copyTile=function(i,t,e,n,s,r,a,o){for(var l=Math.min(t,s-a),c=Math.min(e,r-o),d=0;d<c;d++)for(var h=(o+d)*s+a,f=d*t,m=0;m<l;m++)n[h+m]=i[f+m]};J._inflateRaw=function(){var i={};return i.H={},i.H.N=function(t,e){var n=Uint8Array,s=0,r=0,a=0,o=0,l=0,c=0,d=0,h=0,f=0,m,x;if(t[0]==3&&t[1]==0)return e||new n(0);var g=i.H,p=g.b,u=g.e,M=g.R,_=g.n,y=g.A,T=g.Z,v=g.m,E=e==null;for(E&&(e=new n(t.length>>>2<<5));s==0;){if(s=p(t,f,1),r=p(t,f+1,2),f+=3,r==0){f&7&&(f+=8-(f&7));var A=(f>>>3)+4,b=t[A-4]|t[A-3]<<8;E&&(e=i.H.W(e,h+b)),e.set(new n(t.buffer,t.byteOffset+A,b),h),f=A+b<<3,h+=b;continue}if(E&&(e=i.H.W(e,h+(1<<17))),r==1&&(m=v.J,x=v.h,c=511,d=31),r==2){a=u(t,f,5)+257,o=u(t,f+5,5)+1,l=u(t,f+10,4)+4,f+=14;for(var S=1,P=0;P<38;P+=2)v.Q[P]=0,v.Q[P+1]=0;for(var P=0;P<l;P++){var D=u(t,f+P*3,3);v.Q[(v.X[P]<<1)+1]=D,D>S&&(S=D)}f+=3*l,_(v.Q,S),y(v.Q,S,v.u),m=v.w,x=v.d,f=M(v.u,(1<<S)-1,a+o,t,f,v.v);var I=g.V(v.v,0,a,v.C);c=(1<<I)-1;var U=g.V(v.v,a,o,v.D);d=(1<<U)-1,_(v.C,I),y(v.C,I,m),_(v.D,U),y(v.D,U,x)}for(;;){var k=m[T(t,f)&c];f+=k&15;var z=k>>>4;if(!(z>>>8))e[h++]=z;else{if(z==256)break;var H=h+z-254;if(z>264){var L=v.q[z-257];H=h+(L>>>3)+u(t,f,L&7),f+=L&7}var N=x[T(t,f)&d];f+=N&15;var V=N>>>4,W=v.c[V],$=(W>>>4)+p(t,f,W&15);for(f+=W&15;h<H;)e[h]=e[h++-$],e[h]=e[h++-$],e[h]=e[h++-$],e[h]=e[h++-$];h=H}}}return e.length==h?e:e.slice(0,h)},i.H.W=function(t,e){var n=t.length;if(e<=n)return t;var s=new Uint8Array(n<<1);return s.set(t,0),s},i.H.R=function(t,e,n,s,r,a){for(var o=i.H.e,l=i.H.Z,c=0;c<n;){var d=t[l(s,r)&e];r+=d&15;var h=d>>>4;if(h<=15)a[c]=h,c++;else{var f=0,m=0;h==16?(m=3+o(s,r,2),r+=2,f=a[c-1]):h==17?(m=3+o(s,r,3),r+=3):h==18&&(m=11+o(s,r,7),r+=7);for(var x=c+m;c<x;)a[c]=f,c++}}return r},i.H.V=function(t,e,n,s){for(var r=0,a=0,o=s.length>>>1;a<n;){var l=t[a+e];s[a<<1]=0,s[(a<<1)+1]=l,l>r&&(r=l),a++}for(;a<o;)s[a<<1]=0,s[(a<<1)+1]=0,a++;return r},i.H.n=function(t,e){for(var n=i.H.m,s=t.length,r,a,o,d,l,c=n.j,d=0;d<=e;d++)c[d]=0;for(d=1;d<s;d+=2)c[t[d]]++;var h=n.K;for(r=0,c[0]=0,a=1;a<=e;a++)r=r+c[a-1]<<1,h[a]=r;for(o=0;o<s;o+=2)l=t[o+1],l!=0&&(t[o]=h[l],h[l]++)},i.H.A=function(t,e,n){for(var s=t.length,r=i.H.m,a=r.r,o=0;o<s;o+=2)if(t[o+1]!=0)for(var l=o>>1,c=t[o+1],d=l<<4|c,h=e-c,f=t[o]<<h,m=f+(1<<h);f!=m;){var x=a[f]>>>15-e;n[x]=d,f++}},i.H.l=function(t,e){for(var n=i.H.m.r,s=15-e,r=0;r<t.length;r+=2){var a=t[r]<<e-t[r+1];t[r]=n[a]>>>s}},i.H.M=function(t,e,n){n=n<<(e&7);var s=e>>>3;t[s]|=n,t[s+1]|=n>>>8},i.H.I=function(t,e,n){n=n<<(e&7);var s=e>>>3;t[s]|=n,t[s+1]|=n>>>8,t[s+2]|=n>>>16},i.H.e=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8)>>>(e&7)&(1<<n)-1},i.H.b=function(t,e,n){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)&(1<<n)-1},i.H.Z=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16)>>>(e&7)},i.H.i=function(t,e){return(t[e>>>3]|t[(e>>>3)+1]<<8|t[(e>>>3)+2]<<16|t[(e>>>3)+3]<<24)>>>(e&7)},i.H.m=function(){var t=Uint16Array,e=Uint32Array;return{K:new t(16),j:new t(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new t(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new e(32),J:new t(512),_:[],h:new t(32),$:[],w:new t(32768),C:[],v:[],d:new t(32768),D:[],u:new t(512),Q:[],r:new t(32768),s:new e(286),Y:new e(30),a:new e(19),t:new e(15e3),k:new t(65536),g:new t(32768)}}(),function(){for(var t=i.H.m,e=32768,n=0;n<e;n++){var s=n;s=(s&2863311530)>>>1|(s&1431655765)<<1,s=(s&3435973836)>>>2|(s&858993459)<<2,s=(s&4042322160)>>>4|(s&252645135)<<4,s=(s&4278255360)>>>8|(s&16711935)<<8,t.r[n]=(s>>>16|s<<16)>>>17}function r(a,o,l){for(;o--!=0;)a.push(0,l)}for(var n=0;n<32;n++)t.q[n]=t.S[n]<<3|t.T[n],t.c[n]=t.p[n]<<4|t.z[n];r(t._,144,8),r(t._,112,9),r(t._,24,7),r(t._,8,8),i.H.n(t._,9),i.H.A(t._,9,t.J),i.H.l(t._,9),r(t.$,32,5),i.H.n(t.$,5),i.H.A(t.$,5,t.h),i.H.l(t.$,5),r(t.Q,19,0),r(t.C,286,0),r(t.D,30,0),r(t.v,320,0)}(),i.H.N}();J.LosslessJpegDecode=function(){var i,t;function e(){return i[t++]}function n(){return i[t++]<<8|i[t++]}function s(p){for(var u=e(),M=[0,0,0,255],_=[],y=8,T=0;T<16;T++)_[T]=e();for(var T=0;T<16;T++)for(var v=0;v<_[T];v++){var E=r(M,0,T+1,1);M[E+3]=e()}var A=new Uint8Array(1<<y);p[u]=[new Uint8Array(M),A];for(var T=0;T<1<<y;T++){for(var b=y,S=T,P=0,D=0;M[P+3]==255&&b!=0;)D=S>>--b&1,P=M[P+D];A[T]=P}}function r(p,u,M,_){if(p[u+3]!=255)return 0;if(M==0)return u;for(var y=0;y<2;y++){p[u+y]==0&&(p[u+y]=p.length,p.push(0,0,_,255));var T=r(p,p[u+y],M-1,_+1);if(T!=0)return T}return 0}function a(p){for(var u=p.b,M=p.f;u<25&&p.a<p.d;){var _=p.data[p.a++];_==255&&!p.c&&p.a++,M=M<<8|_,u+=8}if(u<0)throw"e";p.b=u,p.f=M}function o(p,u){return u.b<p&&a(u),u.f>>(u.b-=p)&65535>>16-p}function l(p,u){var M=p[0],_=0,y=255,T=0;u.b<16&&a(u);var v=u.f>>u.b-8&255;for(_=p[1][v],y=M[_+3],u.b-=M[_+2];y==255;)T=u.f>>--u.b&1,_=M[_+T],y=M[_+3];return y}function c(p,u){return p<32768>>16-u&&(p+=-(1<<u)+1),p}function d(p,u){var M=l(p,u);if(M==0)return 0;if(M==16)return-32768;var _=o(M,u);return c(_,M)}function h(p,u,M,_,y,T){for(var v=0,E=0;E<T;E++){for(var A=E*u,b=0;b<u;b+=y){v++;for(var S=0;S<y;S++)p[A+b+S]=d(_[S],M)}if(M.e!=0&&v%M.e==0&&E!=0){for(var P=M.a,D=M.data;D[P]!=255||!(208<=D[P+1]&&D[P+1]<=215);)P--;M.a=P+2,M.f=0,M.b=0}}}function f(p,u){return c(o(p,u),p)}function m(p,u,M,_,y){for(var T=i.length-t,v=0;v<T;v+=4){var E=i[t+v];i[t+v]=i[t+v+3],i[t+v+3]=E;var E=i[t+v+1];i[t+v+1]=i[t+v+2],i[t+v+2]=E}for(var A=0;A<y;A++)for(var b=32768,S=32768,P=0;P<u;P+=2){var D=l(_,M),I=l(_,M);D!=0&&(b+=f(D,M)),I!=0&&(S+=f(I,M)),p[A*u+P]=b&65535,p[A*u+P+1]=S&65535}}function x(p){if(i=p,t=0,n()!=65496)throw"e";for(var u=[],M=0,_=0,y=0,T=[],v=[],E=[],A=0,b=0,S=0;;){var P=n();if(P==65535){t--;continue}var D=n();if(P==65475){_=e(),b=n(),S=n(),A=e();for(var I=0;I<A;I++){var U=e(),k=e(),z=e();if(z!=0)throw"e";u[U]=[I,k>>4,k&15]}}else if(P==65476)for(var H=t+D-2;t<H;)s(v);else if(P==65498){t++;for(var I=0;I<A;I++){var L=e(),N=u[L];E[N[0]]=v[e()>>>4],T[N[0]]=N.slice(1)}M=e(),t+=2;break}else P==65501?y=n():t+=D-2}var V=_>8?Uint16Array:Uint8Array,W=new V(b*S*A),$={b:0,f:0,c:M==8,a:t,data:i,d:i.length,e:y};if($.c)m(W,S*A,$,E[0],b);else{for(var st=[],O=0,Y=0,I=0;I<A;I++){var Q=T[I],q=Q[0],rt=Q[1];q>O&&(O=q),rt>Y&&(Y=rt),st.push(q*rt)}if(O!=1||Y!=1){if(A!=3||st[1]!=1||st[2]!=1||O!=2||Y!=1&&Y!=2)throw"e";for(var vt=[],ht=0,I=0;I<A;I++){for(var It=0;It<st[I];It++)vt.push(E[I]);ht+=st[I]}var Et=S/O,Lt=b/Y,F=Et*Lt;h(W,Et*ht,$,vt,ht,Lt),g(W,M,Et,Lt,ht-2,ht,ht,_);var Dt=new Uint16Array(F*st[0]);if(O==2&&Y==2){for(var I=0;I<F;I++)Dt[4*I]=W[6*I],Dt[4*I+1]=W[6*I+1],Dt[4*I+2]=W[6*I+2],Dt[4*I+3]=W[6*I+3];g(Dt,M,Et*4,Lt,0,1,1,_);for(var I=0;I<F;I++)W[6*I]=Dt[4*I],W[6*I+1]=Dt[4*I+1],W[6*I+2]=Dt[4*I+2],W[6*I+3]=Dt[4*I+3]}if(O==2&&Y==1){for(var I=0;I<F;I++)Dt[2*I]=W[4*I],Dt[2*I+1]=W[4*I+1];g(Dt,M,Et*2,Lt,0,1,1,_);for(var I=0;I<F;I++)W[4*I]=Dt[2*I],W[4*I+1]=Dt[2*I+1]}for(var ut=W.slice(0),rt=0;rt<b;rt++)if(Y==2)for(var q=0;q<S;q++){var gt=(rt*S+q)*A,_t=((rt>>>1)*Et+(q>>>1))*ht,Gt=(rt&1)*2+(q&1);W[gt]=ut[_t+Gt],W[gt+1]=ut[_t+4],W[gt+2]=ut[_t+5]}else for(var q=0;q<S;q++){var gt=(rt*S+q)*A,_t=(rt*Et+(q>>>1))*ht,Gt=q&1;W[gt]=ut[_t+Gt],W[gt+1]=ut[_t+2],W[gt+2]=ut[_t+3]}}else if(h(W,S*A,$,E,A,b),y==0)g(W,M,S,b,0,A,A,_);else for(var wt=Math.floor(y/S),rt=0;rt<b;rt+=wt){var C=W.slice(rt*S*A,(rt+wt)*S*A);g(C,M,S,wt,0,A,A,_),W.set(C,rt*S*A)}}return W}function g(p,u,M,_,y,T,v,E){for(var A=M*v,b=y;b<T;b++)p[b]+=1<<E-1;for(var S=v;S<A;S+=v)for(var b=y;b<T;b++)p[S+b]+=p[S+b-v];for(var P=1;P<_;P++){for(var D=P*A,b=y;b<T;b++)p[D+b]+=p[D+b-A];for(var S=v;S<A;S+=v)for(var b=y;b<T;b++){var I=D+S+b,U=I-A,k=p[I-v],z=0;if(u==0)z=0;else if(u==1)z=k;else if(u==2)z=p[U];else if(u==3)z=p[U-v];else if(u==4)z=k+(p[U]-p[U-v]);else if(u==5)z=k+(p[U]-p[U-v]>>>1);else if(u==6)z=p[U]+(k-p[U-v]>>>1);else if(u==7)z=k+p[U]>>>1;else throw u;p[I]+=z}}}return x}();(function(){var i=0,t=1,e=2,n=3,s=4,r=5,a=6,o=7,l=8,c=9,d=10,h=11,f=12,m=13,x=14,g=15,p=16,u=17,M=18;function _(L){var N=J._binBE.readUshort,V={b:N(L,0),i:L[2],C:L[3],u:L[4],q:N(L,5),k:N(L,7),e:N(L,9),l:N(L,11),s:L[13],d:N(L,14)};if(V.b!=18771||V.i>1||V.q<6||V.q%6||V.e<768||V.e%24||V.l!=768||V.k<V.l||V.k%V.l||V.k-V.e>=V.l||V.s>16||V.s!=V.k/V.l||V.s!=Math.ceil(V.e/V.l)||V.d!=V.q/6||V.u!=12&&V.u!=14&&V.u!=16||V.C!=16&&V.C!=0)throw"Invalid data";if(V.i==0)throw"Not implemented. We need this file!";return V.h=V.C==16,V.m=(V.h?V.l*2/3:V.l>>>1)|0,V.A=V.m+2,V.f=64,V.g=(1<<V.u)-1,V.n=4*V.u,V}function y(L,N){var V=new Array(N.s),W=4*N.s,$=16+W;W&12&&($+=16-(W&12));for(var st=0,O=16;st<N.s;O+=4){var Y=J._binBE.readUint(L,O);V[st]=L.slice($,$+Y),V[st].j=0,V[st].a=0,$+=Y,st++}if($!=L.length)throw"Invalid data";return V}function T(L,N){for(var V=-N[4],W=0;V<=N[4];W++,V++)L[W]=V<=-276?-4:V<=-67?-3:V<=-18?-2:V<-0?-1:V<=N[0]?0:V<N[1]?1:V<N[2]?2:V<N[3]?3:4}function v(L,N,V){var W=[N,3*N+18,5*N+67,7*N+276,V];L.o=N,L.w=(W[4]+2*N)/(2*N+1)+1|0,L.v=Math.ceil(Math.log2(L.w)),L.t=9,T(L.c,W)}function E(L){var N={c:new Int8Array(2<<L.u)};return v(N,0,L.g),N}function A(L){for(var N=[[],[],[]],V=Math.max(2,L.w+32>>>6),W=0;W<3;W++)for(var $=0;$<41;$++)N[W][$]=[V,1];return N}function b(L){for(var N=-1,V=0;!V;N++)V=L[L.j]>>>7-L.a&1,L.a++,L.a&=7,L.a||L.j++;return N}function S(L,N){var V=0,W=8-L.a;if(L.j,L.a,N){if(N>=W)do V<<=W,N-=W,V|=L[L.j]&(1<<W)-1,L.j++,W=8;while(N>=8);N&&(V<<=N,W-=N,V|=L[L.j]>>>W&(1<<N)-1),L.a=8-W}return V}function P(L,N){var V=0;if(N<L)for(;V<=14&&N<<++V<L;);return V}function D(L,N,V,W,$,st,O,Y){Y==null&&(Y=0);var Q=st+1,q=Q%2,rt=0,vt,ht,It=W[$],Et=W[$-1],Lt=W[$-2][Q],F=Et[Q-1],Dt=Et[Q],ut=Et[Q+1],gt=It[Q-1],_t=It[Q+1],Gt=Math.abs,wt,C,w,X;if(q&&(wt=Gt(ut-Dt),C=Gt(Lt-Dt),w=Gt(F-Dt)),q){if(X=wt>w&&C<wt?Lt+F:wt<w&&C<w?Lt+ut:ut+F,X=X+2*Dt>>>2,Y){It[Q]=X;return}vt=N.t*N.c[L.g+Dt-Lt]+N.c[L.g+F-Dt]}else X=Dt>F&&Dt>ut||Dt<F&&Dt<ut?_t+gt+2*Dt>>>2:gt+_t>>>1,vt=N.t*N.c[L.g+Dt-F]+N.c[L.g+F-gt];ht=Gt(vt);var it=b(V);if(it<L.n-N.v-1){var at=P(O[ht][0],O[ht][1]);rt=S(V,at)+(it<<at)}else rt=S(V,N.v)+1;rt=rt&1?-1-(rt>>>1):rt>>>1,O[ht][0]+=Gt(rt),O[ht][1]==L.f&&(O[ht][0]>>>=1,O[ht][1]>>>=1),O[ht][1]++,X=vt<0?X-rt:X+rt,L.i&&(X<0?X+=N.w:X>L.g&&(X-=N.w)),It[Q]=X>=0?Math.min(X,L.g):0}function I(L,N,V){for(var W=L[0].length,$=N;$<=V;$++)L[$][0]=L[$-1][1],L[$][W-1]=L[$-1][W-2]}function U(L){I(L,o,f),I(L,e,s),I(L,g,u)}function k(L,N,V,W,$,st,O,Y,Q,q,rt,vt,ht){for(var It=0,Et=1,Lt=$<m&&$>s;Et<L.m;)It<L.m&&(D(L,N,V,W,$,It,O[Q],L.h&&(Lt&&q||!Lt&&(rt||(It&vt)==ht))),D(L,N,V,W,st,It,O[Q],L.h&&(!Lt&&q||Lt&&(rt||(It&vt)==ht))),It+=2),It>8&&(D(L,N,V,W,$,Et,Y[Q]),D(L,N,V,W,st,Et,Y[Q]),Et+=2);U(W)}function z(L,N,V,W,$,st){k(L,N,V,W,e,o,$,st,0,0,1,0,8),k(L,N,V,W,l,g,$,st,1,0,1,0,8),k(L,N,V,W,n,c,$,st,2,1,0,3,0),k(L,N,V,W,d,p,$,st,0,0,0,3,2),k(L,N,V,W,s,h,$,st,1,0,0,3,2),k(L,N,V,W,f,u,$,st,2,1,0,3,0)}function H(L,N,V,W,$,st){var O=st.length,Y=L.l;$+1==L.s&&(Y=L.e-$*L.l);for(var Q=6*L.e*W+$*L.l,q=0;q<6;q++){for(var rt=0;rt<Y;rt++){var vt=st[q%O][rt%O],ht;vt==0?ht=e+(q>>>1):vt==2?ht=g+(q>>>1):ht=o+q;var It=L.h?(rt*2/3&2147483646|rt%3&1)+(rt%3>>>1):rt>>>1;N[Q+rt]=V[ht][It+1]}Q+=L.e}}J._decompressRAF=function(L,N){var V=_(L),W=y(L,V),$=E(V),st=new Int16Array(V.e*V.q);N==null&&(N=V.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var O=[[i,n],[t,s],[r,h],[a,f],[m,p],[x,u]],Y=[],Q=0;Q<M;Q++)Y[Q]=new Uint16Array(V.A);for(var q=0;q<V.s;q++){for(var rt=A($),vt=A($),Q=0;Q<M;Q++)for(var ht=0;ht<V.A;ht++)Y[Q][ht]=0;for(var It=0;It<V.d;It++){z(V,$,W[q],Y,rt,vt);for(var Q=0;Q<6;Q++)for(var ht=0;ht<V.A;ht++)Y[O[Q][0]][ht]=Y[O[Q][1]][ht];H(V,st,Y,It,q,N);for(var Q=e;Q<M;Q++)if([r,a,m,x].indexOf(Q)==-1)for(var ht=0;ht<V.A;ht++)Y[Q][ht]=0;U(Y)}}return st}})();class M1 extends o1{constructor(t,e){super(t,e),Xt(this,"mapMaxPolarAngle",Math.PI/2.1),Xt(this,"restAzimuthDist",8e6),Xt(this,"dynamicZoomSpeed",!0),Xt(this,"dynamicMaxPolarAngle",!0),Xt(this,"_controlsMode","MAP"),this.controlsMode="MAP",this.screenSpacePanning=!1,this.minDistance=10,this.maxDistance=3e7,this.maxPolarAngle=1.2,this.enableDamping=!0,this.dampingFactor=.1,this.keyPanSpeed=5,this.listenToKeyEvents(e),this.addEventListener("change",this.onChange.bind(this))}get controlsMode(){return this._controlsMode}set controlsMode(t){this._controlsMode=t,this.controlsMode.toUpperCase()==="MAP"?(this.mouseButtons={LEFT:He.PAN,MIDDLE:He.DOLLY,RIGHT:He.ROTATE},this.touches={ONE:on.PAN,TWO:on.DOLLY_ROTATE}):(this.mouseButtons={LEFT:He.ROTATE,MIDDLE:He.DOLLY,RIGHT:He.PAN},this.touches={ONE:on.ROTATE,TWO:on.DOLLY_PAN})}onChange(){const t=Math.max(this.getPolarAngle(),.01),e=Math.max(this.getDistance(),1);this.dynamicZoomSpeed&&(this.zoomSpeed=Math.max(Math.log(e/1e3),1));const n=e>this.restAzimuthDist;this.minAzimuthAngle=n?0:-1/0,this.maxAzimuthAngle=n?0:1/0,this.dynamicMaxPolarAngle&&(this.maxPolarAngle=Math.min(Math.pow(1e7/e,2),this.mapMaxPolarAngle));const s=this.object;s instanceof Le&&(s.far=qn.clamp(e/(t/1.5)*7,2e4,this.maxDistance*2),s.near=Math.max(s.far/5e4,this.minDistance),s.updateProjectionMatrix())}}class B1 extends r1{constructor(){super(...arguments),Xt(this,"controls",this._createControls()),Xt(this,"_fogFactor",1)}get fogFactor(){return this._fogFactor}set fogFactor(t){this._fogFactor=t,this.controls.dispatchEvent({type:"change"})}get controlsMode(){return this.controls.controlsMode}set controlsMode(t){this.controls.controlsMode=t}_createControls(){const t=new M1(this.camera,this.container||this.renderer.domElement);return t.addEventListener("change",()=>{if(this.scene.fog instanceof sr){const e=t.getPolarAngle(),n=t.getDistance();this.scene.fog.density=e/(n+1)*this.fogFactor*.2}}),t}animate(){super.animate(),this.controls.update()}flyTo(t,e,n=!0){if(this.controls.target.copy(t),n){const s=this.camera.position;return new Promise(r=>{new Kr(s).to({y:1e7,z:0},500).chain(new Kr(s).to(e,2e3).easing(ti.Quintic.Out).onUpdate(()=>[this.controls.dispatchEvent({type:"change"})]).onComplete(()=>r())).start()})}else return this.camera.position.copy(e),Promise.resolve()}flyToObject(t,e={azimuthDeg:0,pitchDeg:30,distanceMultiplier:1.2,animate:!0}){const n=f=>{const m=new Ye().setFromObject(f),x=m.getBoundingSphere(new dn);return x.center.setY(m.min.y),x},{center:s,radius:r}=n(t),a=r/Math.sin(qn.degToRad(this.camera.fov/2)),{azimuthDeg:o=0,pitchDeg:l=30,distanceMultiplier:c=1.5,animate:d=!0}=e,h=new G().setFromSphericalCoords(a*c,qn.degToRad(90-l),qn.degToRad(o)).add(s.clone().setY(0));if(this.controls.target.copy(s),d){const f=this.camera.position;return new Promise(m=>{new Kr(f).to(h,2e3).easing(ti.Quintic.Out).onUpdate(()=>{this.controls.dispatchEvent({type:"change"});const x=n(t);this.controls.target.copy(x.center)}).start().onComplete(()=>m())})}else return this.camera.position.copy(h),Promise.resolve()}getState(){return{centerPosition:this.controls.target,cameraPosition:this.camera.position}}}performance.now();new G;new G;const b1=`<style>\r
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
`;class k1{constructor(t){Xt(this,"dom",document.createElement("div")),Xt(this,"plane"),Xt(this,"text"),Xt(this,"controls"),this.controls=t,this.dom.innerHTML=b1,this.dom.style.width="100%",this.dom.style.height="100%",this.plane=this.dom.querySelector("#tt-compass-plane"),this.text=this.dom.querySelector("#tt-compass-text"),t.addEventListener("change",()=>{this.plane&&this.text&&(this.plane.style.transform=`rotateX(${t.getPolarAngle()}rad)`,this.text.style.transform=`rotate(${t.getAzimuthalAngle()}rad)`)}),this.dom.onclick=()=>open("https://github.com/sxguojf/three-tile")}}class Z1 extends Bi{constructor(t){super(t),Xt(this,"dataType","image"),Xt(this,"attribution","ArcGIS"),Xt(this,"style","World_Imagery"),Xt(this,"url","https://server.arcgisonline.com/arcgis/rest/services/{style}/MapServer/tile/{z}/{y}/{x}"),Object.assign(this,t)}}class H1 extends Bi{constructor(t){super(t),Xt(this,"dataType","lerc"),Xt(this,"attribution","ArcGIS"),Xt(this,"minLevel",5),Xt(this,"maxLevel",13),Xt(this,"url","https://server.arcgisonline.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer/tile/{z}/{y}/{x}"),Object.assign(this,t)}}class X1 extends Bi{constructor(t){super(t),Xt(this,"dataType","image"),Xt(this,"attribution","Bing[GS(2024)0999号]"),Xt(this,"style","A"),Xt(this,"mkt","zh-CN"),Xt(this,"subdomains","123"),Xt(this,"url","https://t{s}.dynamic.tiles.ditu.live.com/comp/ch/{key}?mkt={mkt}&ur=CN&it={style}&n=z&og=804&cstl=vb"),Xt(this,"maxLevel",19),this.style=(t==null?void 0:t.style)||"A"}getUrl(t,e,n){const s={key:S1(n,t,e)};return super.getUrl(t,e,n,s)}}function S1(i,t,e){let n="";for(let s=i;s>0;s--){const r=1<<s-1;let a=0;t&r&&a++,e&r&&(a+=2),n+=a}return n}class Y1 extends Bi{constructor(t){super(t),Xt(this,"dataType","image"),Xt(this,"attribution","高德[GS(2021)6375号]"),Xt(this,"style","8"),Xt(this,"subdomains","1234"),Xt(this,"maxLevel",18),Xt(this,"url","https://webst0{s}.is.autonavi.com/appmaptile?style={style}&x={x}&y={y}&z={z}&scl=2"),Object.assign(this,t)}}new G;new Pc;function K1(i,t,e=10){if(t.updateMatrixWorld(),t.position.y>1e4)return!1;let n=!1;const s=2*t.near*Math.tan(qn.degToRad(t.fov)/2),r=new G(0,-s/2,-t.near-s/10);r.applyMatrix4(t.matrixWorld);const a=i.getLocalInfoFromWorld(r);if(a){const o=e-(r.y-a.point.y);o>0&&(t.position.y+=o+.01,n=!0)}if(i.debug>0){let o=i.getObjectByName("checkPoint");o||(o=new Pe(new so(1),new Xu({color:65280})),o.name="checkPoint",i.add(o)),o.position.copy(i.worldToLocal(r)),o.scale.setScalar(s/50),o instanceof Pe&&(o.material.color.set(n?15732480:65280),n&&console.log("Hit ground"))}return n}new rd().load("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");function Qn(i,t){this.x=i,this.y=t}Qn.prototype={clone(){return new Qn(this.x,this.y)},add(i){return this.clone()._add(i)},sub(i){return this.clone()._sub(i)},multByPoint(i){return this.clone()._multByPoint(i)},divByPoint(i){return this.clone()._divByPoint(i)},mult(i){return this.clone()._mult(i)},div(i){return this.clone()._div(i)},rotate(i){return this.clone()._rotate(i)},rotateAround(i,t){return this.clone()._rotateAround(i,t)},matMult(i){return this.clone()._matMult(i)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(i){return this.x===i.x&&this.y===i.y},dist(i){return Math.sqrt(this.distSqr(i))},distSqr(i){const t=i.x-this.x,e=i.y-this.y;return t*t+e*e},angle(){return Math.atan2(this.y,this.x)},angleTo(i){return Math.atan2(this.y-i.y,this.x-i.x)},angleWith(i){return this.angleWithSep(i.x,i.y)},angleWithSep(i,t){return Math.atan2(this.x*t-this.y*i,this.x*i+this.y*t)},_matMult(i){const t=i[0]*this.x+i[1]*this.y,e=i[2]*this.x+i[3]*this.y;return this.x=t,this.y=e,this},_add(i){return this.x+=i.x,this.y+=i.y,this},_sub(i){return this.x-=i.x,this.y-=i.y,this},_mult(i){return this.x*=i,this.y*=i,this},_div(i){return this.x/=i,this.y/=i,this},_multByPoint(i){return this.x*=i.x,this.y*=i.y,this},_divByPoint(i){return this.x/=i.x,this.y/=i.y,this},_unit(){return this._div(this.mag()),this},_perp(){const i=this.y;return this.y=this.x,this.x=-i,this},_rotate(i){const t=Math.cos(i),e=Math.sin(i),n=t*this.x-e*this.y,s=e*this.x+t*this.y;return this.x=n,this.y=s,this},_rotateAround(i,t){const e=Math.cos(i),n=Math.sin(i),s=t.x+e*(this.x-t.x)-n*(this.y-t.y),r=t.y+n*(this.x-t.x)+e*(this.y-t.y);return this.x=s,this.y=r,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:Qn};Qn.convert=function(i){if(i instanceof Qn)return i;if(Array.isArray(i))return new Qn(+i[0],+i[1]);if(i.x!==void 0&&i.y!==void 0)return new Qn(+i.x,+i.y);throw new Error("Expected [x, y] or {x, y} point format")};typeof TextDecoder>"u"||new TextDecoder("utf-8");hn.add=async function(i,t){};hn.get=function(i){};function j1(i,t,e){var a;const{currentTarget:n,offsetX:s,offsetY:r}=i;if(n instanceof HTMLElement){const o=n.clientWidth,l=n.clientHeight,c=new Wt(s/o*2-1,-(r/l)*2+1);return(a=t.getLocalInfoFromScreen(e,c))==null?void 0:a.location}else throw new Error("mouseEvent.currentTarget is not HTMLElement!")}new G;new Ye;export{I1 as $,Vn as A,Ne as B,U1 as C,cd as D,Zu as E,vc as F,Tc as G,Mn as H,L1 as I,no as J,ae as K,Oi as L,Pe as M,us as N,ue as O,F1 as P,sn as Q,oa as R,Fn as S,T1 as T,Iu as U,G as V,Ke as W,R1 as X,P1 as Y,bc as Z,C1 as _,os as a,Ns as a0,Le as a1,ao as a2,Mc as a3,ol as a4,Ou as a5,Ks as a6,Na as a7,xc as a8,ye as a9,X1 as aA,K1 as aB,rn as aC,so as aD,Dg as aE,jc as aF,Bi as aG,Ih as aH,Ch as aI,Ph as aJ,Rh as aK,Ah as aL,wh as aM,Nn as aN,er as aa,tr as ab,lr as ac,te as ad,Sn as ae,or as af,Ye as ag,dn as ah,Kc as ai,H1 as aj,Z1 as ak,B1 as al,j1 as am,k1 as an,ar as ao,Xu as ap,Y1 as aq,Lh as ar,Ed as as,En as at,Lc as au,Vu as av,sr as aw,cg as ax,hd as ay,O1 as az,Yt as b,qn as c,w1 as d,E1 as e,V1 as f,sd as g,D1 as h,Wt as i,Ii as j,Ue as k,N1 as l,Jt as m,Qo as n,rd as o,W1 as p,Ee as q,A1 as r,Jn as s,fr as t,Uh as u,ln as v,Ge as w,la as x,jn as y,Hu as z};
