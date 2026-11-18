(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,ee=33779,F=35840,I=35841,te=35842,ne=35843,re=36196,ie=37492,L=37496,ae=37488,R=37489,oe=37490,se=37491,ce=37808,le=37809,ue=37810,de=37811,fe=37812,pe=37813,me=37814,he=37815,ge=37816,_e=37817,ve=37818,ye=37819,be=37820,xe=37821,Se=36492,Ce=36494,we=36495,Te=36283,Ee=36284,De=36285,Oe=36286,ke=2300,Ae=2301,z=2302,je=2303,Me=2400,Ne=2401,B=2402,Pe=3200,Fe=`srgb`,V=`srgb-linear`,Ie=`linear`,Le=`srgb`,Re=7680,ze=35044,Be=35048,Ve=2e3;function He(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ue(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function We(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ge(){let e=We(`canvas`);return e.style.display=`block`,e}var Ke={};function qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Je(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ye(...e){e=Je(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xe(...e){let t=e.join(` `);t in Ke||(Ke[t]=!0,H(...e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qe={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},$e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=Math.PI/180,nt=180/Math.PI;function rt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function it(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n){return(1-n)*e+n*t}function st(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ct(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lt(e,t){if(t.constructor===Float32Array)return e;let n=ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function ut(e,t){if(t.constructor===Float32Array)return e;let n=ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var U=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ft.copy(this).projectOnVector(e),this.sub(ft)}reflect(e){return this.sub(ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ft=new W,pt=new dt,mt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Xe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ht.makeScale(e,t)),this}rotate(e){return Xe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ht.makeRotation(-e)),this}translate(e,t){return Xe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ht=new mt,gt=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_t=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vt(){let e={enabled:!0,workingColorSpace:V,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xt(e.r),e.g=xt(e.g),e.b=xt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ie:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[V]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),e}var yt=vt();function bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var St,Ct=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{St===void 0&&(St=We(`canvas`)),St.width=e.width,St.height=e.height;let t=St.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=St}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=We(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bt(t[e]/255)*255):t[e]=bt(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wt=0,Tt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=rt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Et(r[t].image)):e.push(Et(r[t]))}else e=Et(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Et(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ct.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Dt=0,Ot=new W,kt=class r extends $e{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=rt(),this.name=``,this.source=new Tt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ot).x}get height(){return this.source.getSize(Ot).y}get depth(){return this.source.getSize(Ot).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=300,kt.DEFAULT_ANISOTROPY=1;var At=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new kt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Tt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mt=class extends jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nt=class extends kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pt=class extends kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ft=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/It.setFromMatrixColumn(e,0).length(),i=1/It.setFromMatrixColumn(e,1).length(),a=1/It.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rt,e,zt)}lookAt(e,t,n){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Bt.crossVectors(n,Ht),Bt.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Bt.crossVectors(n,Ht)),Bt.normalize(),Vt.crossVectors(Ht,Bt),r[0]=Bt.x,r[4]=Vt.x,r[8]=Ht.x,r[1]=Bt.y,r[5]=Vt.y,r[9]=Ht.y,r[2]=Bt.z,r[6]=Vt.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=It.set(r[0],r[1],r[2]).length(),o=It.set(r[4],r[5],r[6]).length(),s=It.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Lt.copy(this);let c=1/a,l=1/o,u=1/s;return Lt.elements[0]*=c,Lt.elements[1]*=c,Lt.elements[2]*=c,Lt.elements[4]*=l,Lt.elements[5]*=l,Lt.elements[6]*=l,Lt.elements[8]*=u,Lt.elements[9]*=u,Lt.elements[10]*=u,t.setFromRotationMatrix(Lt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},It=new W,Lt=new Ft,Rt=new W(0,0,0),zt=new W(1,1,1),Bt=new W,Vt=new W,Ht=new W,Ut=new Ft,Wt=new dt,Gt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-it(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ut.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ut,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wt.setFromEuler(this),this.setFromQuaternion(Wt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER=`XYZ`;var Kt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},qt=0,Jt=new W,Yt=new dt,Xt=new Ft,Zt=new W,Qt=new W,$t=new W,en=new dt,tn=new W(1,0,0),nn=new W(0,1,0),rn=new W(0,0,1),an={type:`added`},on={type:`removed`},sn={type:`childadded`,child:null},cn={type:`childremoved`,child:null},ln=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=rt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Gt,r=new dt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new mt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.multiply(Yt),this}rotateOnWorldAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.premultiply(Yt),this}rotateX(e){return this.rotateOnAxis(tn,e)}rotateY(e){return this.rotateOnAxis(nn,e)}rotateZ(e){return this.rotateOnAxis(rn,e)}translateOnAxis(e,t){return Jt.copy(e).applyQuaternion(this.quaternion),this.position.add(Jt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tn,e)}translateY(e){return this.translateOnAxis(nn,e)}translateZ(e){return this.translateOnAxis(rn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zt.copy(e):Zt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Qt,Zt,this.up):Xt.lookAt(Zt,Qt,this.up),this.quaternion.setFromRotationMatrix(Xt),r&&(Xt.extractRotation(r.matrixWorld),Yt.setFromRotationMatrix(Xt),this.quaternion.premultiply(Yt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Ye(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null):Ye(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,e,$t),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,en,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ln.DEFAULT_UP=new W(0,1,0),ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var G=class extends ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},un={type:`move`},dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(un)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new G;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},mn={h:0,s:0,l:0};function hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=at(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=hn(i,r,e+1/3),this.g=hn(i,r,e),this.b=hn(i,r,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=fn[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}copyLinearToSRGB(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return yt.workingToColorSpace(gn.copy(this),e),Math.round(it(gn.r*255,0,255))*65536+Math.round(it(gn.g*255,0,255))*256+Math.round(it(gn.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(gn.copy(this),t);let n=gn.r,r=gn.g,i=gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Fe){yt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,r=gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(mn);let n=ot(pn.h,mn.h,t),r=ot(pn.s,mn.s,t),i=ot(pn.l,mn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new K;K.NAMES=fn;var _n=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new K(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},vn=class extends ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new W,bn=new W,xn=new W,Sn=new W,Cn=new W,wn=new W,Tn=new W,En=new W,Dn=new W,On=new W,kn=new At,An=new At,jn=new At,Mn=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){yn.subVectors(r,t),bn.subVectors(n,t),xn.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(bn),s=yn.dot(xn),c=bn.dot(bn),l=bn.dot(xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sn)!==null&&Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Sn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Sn.x),s.addScaledVector(a,Sn.y),s.addScaledVector(o,Sn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return kn.setScalar(0),An.setScalar(0),jn.setScalar(0),kn.fromBufferAttribute(e,t),An.fromBufferAttribute(e,n),jn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(kn,i.x),a.addScaledVector(An,i.y),a.addScaledVector(jn,i.z),a}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),bn.subVectors(e,t),yn.cross(bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),yn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Cn.subVectors(r,n),wn.subVectors(i,n),En.subVectors(e,n);let s=Cn.dot(En),c=wn.dot(En);if(s<=0&&c<=0)return t.copy(n);Dn.subVectors(e,r);let l=Cn.dot(Dn),u=wn.dot(Dn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Cn,a);On.subVectors(e,i);let f=Cn.dot(On),p=wn.dot(On);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Tn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Tn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Cn,a).addScaledVector(wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Fn):Fn.fromBufferAttribute(r,t),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),In.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),In.copy(e.boundingBox)),In.applyMatrix4(e.matrixWorld),this.union(In)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Un),Wn.subVectors(this.max,Un),Ln.subVectors(e.a,Un),Rn.subVectors(e.b,Un),zn.subVectors(e.c,Un),Bn.subVectors(Rn,Ln),Vn.subVectors(zn,Rn),Hn.subVectors(Ln,zn);let t=[0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0];return!qn(t,Ln,Rn,zn,Wn)||(t=[1,0,0,0,1,0,0,0,1],!qn(t,Ln,Rn,zn,Wn))?!1:(Gn.crossVectors(Bn,Vn),t=[Gn.x,Gn.y,Gn.z],qn(t,Ln,Rn,zn,Wn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pn=[new W,new W,new W,new W,new W,new W,new W,new W],Fn=new W,In=new Nn,Ln=new W,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=new W,Un=new W,Wn=new W,Gn=new W,Kn=new W;function qn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Kn.fromArray(e,a);let o=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),s=t.dot(Kn),c=n.dot(Kn),l=r.dot(Kn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Jn=new W,Yn=new U,Xn=0,Zn=class extends $e{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:ct(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix3(e),this.setXY(t,Yn.x,Yn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?lt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ut(e,this.array):Math.round(e*t)}},Qn=class extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},$n=class extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},q=class extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}},er=new Nn,tr=new W,nr=new W,rr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?er.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(tr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(nr)),this.expandByPoint(tr.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ir=0,ar=new Ft,or=new ln,sr=new W,cr=new Nn,lr=new Nn,ur=new W,dr=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ir++}),this.uuid=rt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(He(e)?$n:Qn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new mt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ar.makeRotationFromQuaternion(e),this.applyMatrix4(ar),this}rotateX(e){return ar.makeRotationX(e),this.applyMatrix4(ar),this}rotateY(e){return ar.makeRotationY(e),this.applyMatrix4(ar),this}rotateZ(e){return ar.makeRotationZ(e),this.applyMatrix4(ar),this}translate(e,t,n){return ar.makeTranslation(e,t,n),this.applyMatrix4(ar),this}scale(e,t,n){return ar.makeScale(e,t,n),this.applyMatrix4(ar),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new q(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Ye(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];cr.setFromBufferAttribute(n),this.morphTargetsRelative?(ur.addVectors(this.boundingBox.min,cr.min),this.boundingBox.expandByPoint(ur),ur.addVectors(this.boundingBox.max,cr.max),this.boundingBox.expandByPoint(ur)):(this.boundingBox.expandByPoint(cr.min),this.boundingBox.expandByPoint(cr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Ye(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(cr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];lr.setFromBufferAttribute(n),this.morphTargetsRelative?(ur.addVectors(cr.min,lr.min),cr.expandByPoint(ur),ur.addVectors(cr.max,lr.max),cr.expandByPoint(ur)):(cr.expandByPoint(lr.min),cr.expandByPoint(lr.max))}cr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ur.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ur));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ur.fromBufferAttribute(a,t),o&&(sr.fromBufferAttribute(e,t),ur.add(sr)),r=Math.max(r,n.distanceToSquared(ur))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Zn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let l=new W,u=new W,d=new W,f=new U,p=new U,m=new U,h=new W,g=new W;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new W,b=new W,x=new W,S=new W;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ur.fromBufferAttribute(e,t),ur.normalize(),e.setXYZ(t,ur.x,ur.y,ur.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Zn(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ze,this.updateRanges=[],this.version=0,this.uuid=rt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function pr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=rt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var mr=new W,hr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:ct(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix4(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyNormalMatrix(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.transformDirection(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){qe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Zn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?lt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ut(e,this.data.array):Math.round(e*t)}},gr=new W,_r=new W,vr=new mt,yr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=gr.subVectors(n,t).cross(_r.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(gr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vr.getNormalMatrix(e),r=this.coplanarPoint(gr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},br=0,xr=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=rt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new yr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Sr=class extends xr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cr,wr=new W,Tr=new W,Er=new W,Dr=new U,Or=new U,kr=new Ft,Ar=new W,jr=new W,Mr=new W,Nr=new U,Pr=new U,Fr=new U,Ir=class extends ln{constructor(e=new Sr){if(super(),this.isSprite=!0,this.type=`Sprite`,Cr===void 0){Cr=new dr;let e=new fr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Cr.setIndex([0,1,2,0,2,3]),Cr.setAttribute(`position`,new hr(e,3,0,!1)),Cr.setAttribute(`uv`,new hr(e,2,3,!1))}this.geometry=Cr,this.material=e,this.center=new U(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Tr.setFromMatrixScale(this.matrixWorld),kr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tr.multiplyScalar(-Er.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Lr(Ar.set(-.5,-.5,0),Er,a,Tr,r,i),Lr(jr.set(.5,-.5,0),Er,a,Tr,r,i),Lr(Mr.set(.5,.5,0),Er,a,Tr,r,i),Nr.set(0,0),Pr.set(1,0),Fr.set(1,1);let o=e.ray.intersectTriangle(Ar,jr,Mr,!1,wr);if(o===null&&(Lr(jr.set(-.5,.5,0),Er,a,Tr,r,i),Pr.set(0,1),o=e.ray.intersectTriangle(Ar,Mr,jr,!1,wr),o===null))return;let s=e.ray.origin.distanceTo(wr);s<e.near||s>e.far||t.push({distance:s,point:wr.clone(),uv:Mn.getInterpolation(wr,Ar,jr,Mr,Nr,Pr,Fr,new U),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Lr(e,t,n,r,i,a){Dr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Or.copy(Dr):(Or.x=a*Dr.x-i*Dr.y,Or.y=i*Dr.x+a*Dr.y),e.copy(t),e.x+=Or.x,e.y+=Or.y,e.applyMatrix4(kr)}var Rr=new W,zr=new W,Br=new W,Vr=new W,Hr=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zr.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(zr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Vr.dot(this.direction),s=-Vr.dot(Br),c=Vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zr).addScaledVector(Br,d),f}intersectSphere(e,t){if(e.radius<0)return null;Rr.subVectors(e.center,this.origin);let n=Rr.dot(this.direction),r=Rr.dot(Rr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,I=T-P*D,te=E-ee*D,ne=O-P*A,re=k-ee*A,ie=j-P*N,L=M-ee*N,ae=ie*re-L*ne,R=I*L-te*ie,oe=ne*te-re*I;if(r){if(ae<0||R<0||oe<0)return null}else if((ae<0||R<0||oe<0)&&(ae>0||R>0||oe>0))return null;let se=ae+R+oe;if(se===0)return null;let ce=F*(ae*D+R*A+oe*N);return(se>0?ce<0:ce>0)?null:this.at(ce/se,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ur=class extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wr=new Ft,Gr=new Hr,Kr=new rr,qr=new W,Jr=new W,Yr=new W,Xr=new W,Zr=new W,Qr=new W,$r=new W,ei=new W,J=class extends ln{constructor(e=new dr,t=new Ur){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Zr.fromBufferAttribute(s,e),a?Qr.addScaledVector(Zr,r):Qr.addScaledVector(Zr.sub(t),r))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Gr.copy(e.ray).recast(e.near),Kr.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Kr,qr)===null||Gr.origin.distanceToSquared(qr)>(e.far-e.near)**2)||(Wr.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Wr),(n.boundingBox===null||Gr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ni(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ni(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ni(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ni(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ei.copy(s),ei.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ei);return l<n.near||l>n.far?null:{distance:l,point:ei.clone(),object:e}}function ni(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Jr),e.getVertexPosition(c,Yr),e.getVertexPosition(l,Xr);let u=ti(e,t,n,r,Jr,Yr,Xr,$r);if(u){let e=new W;Mn.getBarycoord($r,Jr,Yr,Xr,e),i&&(u.uv=Mn.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Mn.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Mn.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Mn.getNormal(Jr,Yr,Xr,t.normal),u.face=t,u.barycoord=e}return u}var ri=class extends kt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ii=class extends Zn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ai=new Ft,oi=new Ft,si=[],ci=new Nn,li=new Ft,ui=new J,di=new rr,fi=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,li)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ai),ci.copy(e.boundingBox).applyMatrix4(ai),this.boundingBox.union(ci)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ai),di.copy(e.boundingSphere).applyMatrix4(ai),this.boundingSphere.union(di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ui.geometry=this.geometry,ui.material=this.material,ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),di.copy(this.boundingSphere),di.applyMatrix4(n),e.ray.intersectsSphere(di)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ai),oi.multiplyMatrices(n,ai),ui.matrixWorld=oi,ui.raycast(e,si);for(let e=0,n=si.length;e<n;e++){let n=si[e];n.instanceId=i,n.object=this,t.push(n)}si.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ri(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pi=new rr,mi=new U(.5,.5),hi=new W,gi=class{constructor(e=new yr,t=new yr,n=new yr,r=new yr,i=new yr,a=new yr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ve,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476+mi.distanceTo(e.center),pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(hi.x=r.normal.x>0?e.max.x:e.min.x,hi.y=r.normal.y>0?e.max.y:e.min.y,hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_i=new Ft,vi=class e{constructor(){this.coordinateSystem=Ve,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];_i.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new gi),n[e].setFromProjectionMatrix(_i,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new gi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},yi=class extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bi=new W,xi=new W,Si=new Ft,Ci=new Hr,wi=new rr,Ti=new W,Ei=new W,Di=class extends ln{constructor(e=new dr,t=new yi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)bi.fromBufferAttribute(t,e-1),xi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=bi.distanceTo(xi);e.setAttribute(`lineDistance`,new q(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere),wi.applyMatrix4(r),wi.radius+=i,e.ray.intersectsSphere(wi)===!1)return;Si.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Si);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Oi(this,e,Ci,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Oi(this,e,Ci,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Oi(this,e,Ci,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Oi(this,e,Ci,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Oi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(bi.fromBufferAttribute(s,i),xi.fromBufferAttribute(s,a),n.distanceSqToSegment(bi,xi,Ti,Ei)>r)return;Ti.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ti);if(!(c<t.near||c>t.far))return{distance:c,point:Ei.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ki=new W,Ai=new W,ji=class extends Di{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ki.fromBufferAttribute(t,e),Ai.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ki.distanceTo(Ai);e.setAttribute(`lineDistance`,new q(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Mi=class extends xr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ni=new Ft,Pi=new Hr,Fi=new rr,Ii=new W,Li=class extends ln{constructor(e=new dr,t=new Mi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(r),Fi.radius+=i,e.ray.intersectsSphere(Fi)===!1)return;Ni.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Ni);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ii.fromBufferAttribute(l,n),Ri(Ii,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ii.fromBufferAttribute(l,a),Ri(Ii,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ri(e,t,n,r,i,a,o){let s=Pi.distanceSqToPoint(e);if(s<n){let n=new W;Pi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var zi=class extends kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bi=class extends kt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vi=class extends kt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Hi=class extends Vi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ui=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wi=class e extends dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Gi=class e extends dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`normal`,new q(o,3)),this.setAttribute(`uv`,new q(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ki=class e extends dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class e extends Ki{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ji=class e extends dr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new q(i,3)),this.setAttribute(`normal`,new q(i.slice(),3)),this.setAttribute(`uv`,new q(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Yi=class e extends Ji{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Xi=class e extends dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Zi=class e extends dr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new q(s,3)),this.setAttribute(`normal`,new q(c,3)),this.setAttribute(`uv`,new q(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Qi=class e extends dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},$i=class e extends dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new W,f=new W,p=new W;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ea(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(na(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(na(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ta(e){let t={};for(let n=0;n<e.length;n++){let r=ea(e[n]);for(let e in r)t[e]=r[e]}return t}function na(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ra(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ia(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yt.workingColorSpace}var aa={clone:ea,merge:ta},oa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ca=class extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oa,this.fragmentShader=sa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=ra(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new At().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new mt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ft().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},la=class extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ua=class extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},da=class extends xr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new K(16777215),this.specular=new K(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fa=class extends xr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pa=class extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ma=class extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ha(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ga(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var _a=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},va=class extends _a{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Me,endingEnd:Me}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case B:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case B:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ya=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ba=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},xa=class extends _a{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=wa(n,t,g,y,r);i[p]=Sa(x,o,_,b,m)}return i}};function Sa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ca(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function wa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Sa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ca(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ta=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ga(e.settings)&&(n.settings={inTangents:ha(e.settings.inTangents,Array),outTangents:ha(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ke:t=this.InterpolantFactoryMethodDiscrete;break;case Ae:t=this.InterpolantFactoryMethodLinear;break;case z:t=this.InterpolantFactoryMethodSmooth;break;case je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ke;case this.InterpolantFactoryMethodLinear:return Ae;case this.InterpolantFactoryMethodSmooth:return z;case this.InterpolantFactoryMethodBezier:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ga(this.settings)&&(Ea(this.settings.inTangents,e),Ea(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ga(this.settings)&&(Da(this.settings.inTangents,e),Da(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Ye(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Ye(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Ye(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ue(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Ye(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===z,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ga(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ea(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Da(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ta.prototype.ValueTypeName=``,Ta.prototype.TimeBufferType=Float32Array,Ta.prototype.ValueBufferType=Float32Array,Ta.prototype.DefaultInterpolation=Ae;var Oa=class extends Ta{constructor(e,t,n){super(e,t,n)}};Oa.prototype.ValueTypeName=`bool`,Oa.prototype.ValueBufferType=Array,Oa.prototype.DefaultInterpolation=ke,Oa.prototype.InterpolantFactoryMethodLinear=void 0,Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Ta{constructor(e,t,n,r){super(e,t,n,r)}};ka.prototype.ValueTypeName=`color`;var Aa=class extends Ta{constructor(e,t,n,r){super(e,t,n,r)}};Aa.prototype.ValueTypeName=`number`;var ja=class extends _a{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ma=class extends Ta{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}};Ma.prototype.ValueTypeName=`quaternion`,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Ta{constructor(e,t,n){super(e,t,n)}};Na.prototype.ValueTypeName=`string`,Na.prototype.ValueBufferType=Array,Na.prototype.DefaultInterpolation=ke,Na.prototype.InterpolantFactoryMethodLinear=void 0,Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Ta{constructor(e,t,n,r){super(e,t,n,r)}};Pa.prototype.ValueTypeName=`vector`;var Fa=class extends ln{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ia=class extends Fa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},La=new Ft,Ra=new W,za=new W,Ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ra.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ra),za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(za),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(La,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Va=new W,Ha=new dt,Ua=new W,Wa=class extends ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ve,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ha,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Ua.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Va,Ha,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ga=new W,Ka=new U,qa=new U,Ja=class extends Wa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(tt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nt*2*Math.atan(Math.tan(tt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,t){return this.getViewBounds(e,Ka,qa),t.subVectors(qa,Ka)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(tt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ya=class extends Ba{constructor(){super(new Ja(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=nt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xa=class extends Fa{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Ya}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Za=class extends Ba{constructor(){super(new Ja(90,1,.5,500)),this.isPointLightShadow=!0}},Qa=class extends Fa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Za}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$a=class extends Wa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eo=class extends Ba{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends Fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new eo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},no=-90,ro=1,io=class extends ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ja(no,ro,e,t);r.layers=this.layers,this.add(r);let i=new Ja(no,ro,e,t);i.layers=this.layers,this.add(i);let a=new Ja(no,ro,e,t);a.layers=this.layers,this.add(a);let o=new Ja(no,ro,e,t);o.layers=this.layers,this.add(o);let s=new Ja(no,ro,e,t);s.layers=this.layers,this.add(s);let c=new Ja(no,ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ao=class extends Ja{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},oo=`\\[\\]\\.:\\/`,so=RegExp(`[\\[\\]\\.:\\/]`,`g`),co=`[^\\[\\]\\.:\\/]`,lo=`[^`+oo.replace(`\\.`,``)+`]`,uo=`((?:WC+[\\/:])*)`.replace(`WC`,co),fo=`(WCOD+)?`.replace(`WCOD`,lo),po=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,co),mo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,co),ho=RegExp(`^`+uo+fo+po+mo+`$`),go=[`material`,`materials`,`bones`,`map`],_o=class{constructor(e,t,n){let r=n||vo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(so,``)}static parseTrackName(e){let t=ho.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);go.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Ye(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Ye(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Ye(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Ye(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Ye(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Ye(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Ye(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Ye(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Ye(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Ye(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vo.Composite=_o,vo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vo.prototype.GetterByBindingType=[vo.prototype._getValue_direct,vo.prototype._getValue_array,vo.prototype._getValue_arrayElement,vo.prototype._getValue_toArray],vo.prototype.SetterByBindingTypeAndVersioning=[[vo.prototype._setValue_direct,vo.prototype._setValue_direct_setNeedsUpdate,vo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vo.prototype._setValue_array,vo.prototype._setValue_array_setNeedsUpdate,vo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vo.prototype._setValue_arrayElement,vo.prototype._setValue_arrayElement_setNeedsUpdate,vo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vo.prototype._setValue_fromArray,vo.prototype._setValue_fromArray_setNeedsUpdate,vo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function yo(e,t,n,r){let i=bo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case I:case ne:return Math.max(e,16)*Math.max(t,8)/4;case F:case te:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case ae:case R:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Se:case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function bo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function xo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function So(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Co={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Y={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},wo={basic:{uniforms:ta([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:Co.meshbasic_vert,fragmentShader:Co.meshbasic_frag},lambert:{uniforms:ta([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Co.meshlambert_vert,fragmentShader:Co.meshlambert_frag},phong:{uniforms:ta([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Co.meshphong_vert,fragmentShader:Co.meshphong_frag},standard:{uniforms:ta([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Co.meshphysical_vert,fragmentShader:Co.meshphysical_frag},toon:{uniforms:ta([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new K(0)}}]),vertexShader:Co.meshtoon_vert,fragmentShader:Co.meshtoon_frag},matcap:{uniforms:ta([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:Co.meshmatcap_vert,fragmentShader:Co.meshmatcap_frag},points:{uniforms:ta([Y.points,Y.fog]),vertexShader:Co.points_vert,fragmentShader:Co.points_frag},dashed:{uniforms:ta([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Co.linedashed_vert,fragmentShader:Co.linedashed_frag},depth:{uniforms:ta([Y.common,Y.displacementmap]),vertexShader:Co.depth_vert,fragmentShader:Co.depth_frag},normal:{uniforms:ta([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:Co.meshnormal_vert,fragmentShader:Co.meshnormal_frag},sprite:{uniforms:ta([Y.sprite,Y.fog]),vertexShader:Co.sprite_vert,fragmentShader:Co.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Co.background_vert,fragmentShader:Co.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:Co.backgroundCube_vert,fragmentShader:Co.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Co.cube_vert,fragmentShader:Co.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Co.equirect_vert,fragmentShader:Co.equirect_frag},distance:{uniforms:ta([Y.common,Y.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Co.distance_vert,fragmentShader:Co.distance_frag},shadow:{uniforms:ta([Y.lights,Y.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Co.shadow_vert,fragmentShader:Co.shadow_frag}};wo.physical={uniforms:ta([wo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:Co.meshphysical_vert,fragmentShader:Co.meshphysical_frag};var To={r:0,b:0,g:0},Eo=new Ft,Do=new mt;Do.set(-1,0,0,0,1,0,0,0,1);function Oo(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new J(new Wi(1,1,1),new ca({name:`BackgroundCubeMaterial`,uniforms:ea(wo.backgroundCube.uniforms),vertexShader:wo.backgroundCube.vertexShader,fragmentShader:wo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Eo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Do),l.material.toneMapped=yt.getTransfer(i.colorSpace)!==Le,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Xi(2,2),new ca({name:`BackgroundMaterial`,uniforms:ea(wo.background.uniforms),vertexShader:wo.background.vertexShader,fragmentShader:wo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=yt.getTransfer(i.colorSpace)!==Le,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(To,ia(e)),n.buffers.color.setClear(To.r,To.g,To.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ko(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ao(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function jo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&H(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Mo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new yr,s=new mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var No=class extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wi(5,5,5),i=new ca({name:`CubemapFromEquirect`,uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new io(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Po=256,Fo=3,Io=20,Lo=256,Ro=16,zo=3,Bo=new W,Vo=new K,Ho=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new io(1,10,null),this._boxMesh=new J(new Wi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Bo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Vo));let h=new io(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Po,st(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Po:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Uo(e,!1,!1),n=Math.log2(e)-Fo;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Go(),this._integrationMaterial=Ko());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Ro);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-zo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Lo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=qo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Uo(e,t,n){return new No(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:V,depthBuffer:n})}function Wo(e,t,n){return new ca({name:e,uniforms:t,vertexShader:Co.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Go(){return Wo(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ko(){return Wo(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ro}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qo(){return Wo(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Io}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Jo(){return Wo(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Yo(){return Wo(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new No(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ho(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ho(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Zo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Qo(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?$n:Qn)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function $o(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function es(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Ye(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ts(e,t,n){let r=new WeakMap,i=new At;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Nt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new U(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ns(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var rs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function is(e,t,n,r,i,a){let o=new Mt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new dr;u.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new q([0,2,0,0,2,0],2));let d=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new J(u,d),p=new $a(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Mt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Mt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Vi(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},yt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=rs[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var as=new kt,os=new Vi(1,1),ss=new Hi(1),cs=new Nt,ls=new Pt,us=new zi,ds=[],fs=[],ps=new Float32Array(16),ms=new Float32Array(9),hs=new Float32Array(4);function gs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ds[i];if(a===void 0&&(a=new Float32Array(i),ds[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function _s(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function vs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ys(e,t){let n=fs[t];n===void 0&&(n=new Int32Array(t),fs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_s(n,t))return;e.uniform2fv(this.addr,t),vs(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_s(n,t))return;e.uniform3fv(this.addr,t),vs(n,t)}}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_s(n,t))return;e.uniform4fv(this.addr,t),vs(n,t)}}function ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_s(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),vs(n,t)}else{if(_s(n,r))return;hs.set(r),e.uniformMatrix2fv(this.addr,!1,hs),vs(n,r)}}function Ts(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_s(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),vs(n,t)}else{if(_s(n,r))return;ms.set(r),e.uniformMatrix3fv(this.addr,!1,ms),vs(n,r)}}function Es(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_s(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),vs(n,t)}else{if(_s(n,r))return;ps.set(r),e.uniformMatrix4fv(this.addr,!1,ps),vs(n,r)}}function Ds(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_s(n,t))return;e.uniform2iv(this.addr,t),vs(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_s(n,t))return;e.uniform3iv(this.addr,t),vs(n,t)}}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_s(n,t))return;e.uniform4iv(this.addr,t),vs(n,t)}}function js(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_s(n,t))return;e.uniform2uiv(this.addr,t),vs(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_s(n,t))return;e.uniform3uiv(this.addr,t),vs(n,t)}}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_s(n,t))return;e.uniform4uiv(this.addr,t),vs(n,t)}}function Fs(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Fs(os):as,n.setTexture2D(t||a,i)}function Ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ls,i)}function Rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Fs(ss):us,n.setTextureCube(t||a,i)}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||cs,i)}function Bs(e){switch(e){case 5126:return bs;case 35664:return xs;case 35665:return Ss;case 35666:return Cs;case 35674:return ws;case 35675:return Ts;case 35676:return Es;case 5124:case 35670:return Ds;case 35667:case 35671:return Os;case 35668:case 35672:return ks;case 35669:case 35673:return As;case 5125:return js;case 36294:return Ms;case 36295:return Ns;case 36296:return Ps;case 35678:case 36198:case 36298:case 36306:case 35682:return Is;case 35679:case 36299:case 36307:return Ls;case 35680:case 36300:case 36308:case 36293:return Rs;case 36289:case 36303:case 36311:case 36292:return zs}}function Vs(e,t){e.uniform1fv(this.addr,t)}function Hs(e,t){let n=gs(t,this.size,2);e.uniform2fv(this.addr,n)}function Us(e,t){let n=gs(t,this.size,3);e.uniform3fv(this.addr,n)}function Ws(e,t){let n=gs(t,this.size,4);e.uniform4fv(this.addr,n)}function Gs(e,t){let n=gs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ks(e,t){let n=gs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qs(e,t){let n=gs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Js(e,t){e.uniform1iv(this.addr,t)}function Ys(e,t){e.uniform2iv(this.addr,t)}function Xs(e,t){e.uniform3iv(this.addr,t)}function Zs(e,t){e.uniform4iv(this.addr,t)}function Qs(e,t){e.uniform1uiv(this.addr,t)}function $s(e,t){e.uniform2uiv(this.addr,t)}function ec(e,t){e.uniform3uiv(this.addr,t)}function tc(e,t){e.uniform4uiv(this.addr,t)}function nc(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Fs(os):as;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function rc(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ls,a[e])}function ic(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Fs(ss):us;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function ac(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||cs,a[e])}function oc(e){switch(e){case 5126:return Vs;case 35664:return Hs;case 35665:return Us;case 35666:return Ws;case 35674:return Gs;case 35675:return Ks;case 35676:return qs;case 5124:case 35670:return Js;case 35667:case 35671:return Ys;case 35668:case 35672:return Xs;case 35669:case 35673:return Zs;case 5125:return Qs;case 36294:return $s;case 36295:return ec;case 36296:return tc;case 35678:case 36198:case 36298:case 36306:case 35682:return nc;case 35679:case 36299:case 36307:return rc;case 35680:case 36300:case 36308:case 36293:return ic;case 36289:case 36303:case 36311:case 36292:return ac}}var sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bs(t.type)}},cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oc(t.type)}},lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},uc=/(\w+)(\])?(\[|\.)?/g;function dc(e,t){e.seq.push(t),e.map[t.id]=t}function fc(e,t,n){let r=e.name,i=r.length;for(uc.lastIndex=0;;){let a=uc.exec(r),o=uc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){dc(n,l===void 0?new sc(s,e,t):new cc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new lc(s),dc(n,e)),n=e}}}var pc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);fc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function mc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var hc=37297,gc=0;function _c(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var vc=new mt;function yc(e){yt._getMatrix(vc,yt.workingColorSpace,e);let t=`mat3( ${vc.elements.map(e=>e.toFixed(4))} )`;switch(yt.getTransfer(e)){case Ie:return[t,`LinearTransferOETF`];case Le:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function bc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+_c(e.getShaderSource(t),r)}return i}function xc(e,t){let n=yc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Sc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Cc(e,t){let n=Sc[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var wc=new W;function Tc(){return yt.getLuminanceCoefficients(wc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${wc.x.toFixed(4)}, ${wc.y.toFixed(4)}, ${wc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ec(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(kc).join(`
`)}function Dc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Oc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function kc(e){return e!==``}function Ac(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function jc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(e){return e.replace(Mc,Pc)}function Pc(e,t){let n=Co[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Nc(n)}var Fc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(e){return e.replace(Fc,Lc)}function Lc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Rc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var zc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Bc(e){return zc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Vc={302:`ENVMAP_MODE_REFRACTION`};function Hc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Vc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Uc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Wc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Uc[e.combine]||`ENVMAP_BLENDING_NONE`}function Gc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Bc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Hc(n),d=Wc(n),f=Ec(n),p=Dc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(kc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(kc).join(`
`),g.length>0&&(g+=`
`)):(h=[Rc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(kc).join(`
`),g=[Rc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Co.tonemapping_pars_fragment,n.toneMapping===0?``:Cc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Co.colorspace_pars_fragment,xc(`linearToOutputTexel`,n.outputColorSpace),Tc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(kc).join(`
`)),o=Nc(o),o=Ac(o,n),o=jc(o,n),s=Nc(s),s=Ac(s,n),s=jc(s,n),o=Ic(o),s=Ic(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=mc(i,i.VERTEX_SHADER,v),x=mc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=bc(i,b,`vertex`),n=bc(i,x,`fragment`);Ye(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new pc(i,m),w=Oc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,hc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Kc=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jc(e),t.set(e,n)),n}},Jc=class{constructor(e){this.id=Kc++,this.code=e,this.usedTimes=0}};function Yc(e){return e===1030||e===37490||e===36285}function Xc(e,t,n,r,i,a){let o=new Kt,s=new qc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=wo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,ee=!!i.matcap,F=!!b,I=F&&b.isPMREMTexture===!0,te=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,L=!!i.displacementMap,ae=!!i.emissiveMap,R=!!i.metalnessMap,oe=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.diffuseRoughness>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=se&&!!i.anisotropyMap,ge=ce&&!!i.clearcoatMap,_e=ce&&!!i.clearcoatNormalMap,ve=ce&&!!i.clearcoatRoughnessMap,ye=le&&!!i.diffuseRoughnessMap,be=fe&&!!i.iridescenceMap,xe=fe&&!!i.iridescenceThicknessMap,Se=pe&&!!i.sheenColorMap,Ce=pe&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=me&&!!i.transmissionMap,Oe=me&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,z=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let B=I?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Pe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ee,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:I,envMapMaxLod:I?B.length-1:null,envMapSize:I?B[0].width:null,aoMap:te,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:L,emissiveMap:ae,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Yc(i.normalMap.format),metalnessMap:R,roughnessMap:oe,anisotropy:se,anisotropyMap:he,clearcoat:ce,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,diffuseRoughness:le,diffuseRoughnessMap:ye,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:pe,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:me,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:z,alphaHash:je,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:te&&p(i.aoMap.channel),lightMapUv:ne&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:L&&p(i.displacementMap.channel),emissiveMapUv:ae&&p(i.emissiveMap.channel),metalnessMapUv:R&&p(i.metalnessMap.channel),roughnessMapUv:oe&&p(i.roughnessMap.channel),anisotropyMapUv:he&&p(i.anisotropyMap.channel),clearcoatMapUv:ge&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:be&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(i.sheenRoughnessMap.channel),specularMapUv:we&&p(i.specularMap.channel),specularColorMapUv:Te&&p(i.specularColorMap.channel),specularIntensityMapUv:Ee&&p(i.specularIntensityMap.channel),transmissionMapUv:De&&p(i.transmissionMap.channel),thicknessMapUv:Oe&&p(i.thicknessMap.channel),alphaMapUv:Ae&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||se),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&yt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&yt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=wo[t];n=aa.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Gc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Zc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Qc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $c(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function el(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Qc),r.length>1&&r.sort(t||$c),i.length>1&&i.sort(t||$c)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function tl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new el,e.set(t,[i])):n>=r.length?(i=new el,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function nl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new K};break;case`SpotLight`:n={position:new W,direction:new W,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function rl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var il=0;function al(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ol(e){let t=new nl,n=rl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Ft,o=new Ft;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(al);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=il++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function sl(e){let t=new ol(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function cl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new sl(e),t.set(n,[a])):r>=i.length?(a=new sl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ll=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ul=`uniform sampler2D shadow_pass;
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
}`,dl=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],fl=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],pl=new Ft,ml=new W,hl=new W;function gl(e,t,n){let i=new gi,a=new U,s=new U,c=new At,l=new pa,u=new ma,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:ll,fragmentShader:ul}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new dr;y.setAttribute(`position`,new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Mt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Vi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new No(a.x),p.map.depthTexture=new Hi(a.x,m)):(p.map=new Mt(a.x,a.y),p.map.depthTexture=new Vi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ml.setFromMatrixPosition(d.matrixWorld),e.position.copy(ml),hl.copy(e.position),hl.add(dl[t]),e.up.copy(fl[t]),e.lookAt(hl),e.updateMatrixWorld(),n.makeTranslation(-ml.x,-ml.y,-ml.z),pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(pl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Mt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function _l(e,t){function n(){let t=!1,n=new At,r=null,i=new At(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,I={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new At().fromArray(te),ie=new At().fromArray(ne);function L(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),R(e.CULL_FACE),fe(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function oe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(oe(e.BLEND),g=!1);else if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ye(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ye(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Ye(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ye(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?oe(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?oe(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):oe(e.POLYGON_OFFSET_FILL)}function ve(t){t?R(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function be(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function xe(){let t=I[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){Ye(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function B(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function V(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,I={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:z,pixelStorei:Me,getParameter:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:B,reset:V}}function vl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):We(`canvas`)}function O(e,t,n){let r=1,i=V(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function j(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function M(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ie:yt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function N(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function P(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function I(e){ne(e.target)}function te(e){re(e.target)}function ne(e){e.removeEventListener(`dispose`,I),F(e),L(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function re(e){e.removeEventListener(`dispose`,te),F(e),R(e)}function ie(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?re(t):ne(t))}C.clear(),b.clear()}function L(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ae(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ae(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function R(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ne(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(e,t){let n=f.get(e);if(e.isVideoTexture&&Pe(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function me(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?we(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ge={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},_e={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ve={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ye(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ge[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ge[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ge[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,_e[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,_e[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ve[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function be(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,I),ee(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ae(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=xe(r.start,t.width,4),c=xe(n.start,t.width,4);r.start<=o+1&&s===c&&xe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Ce(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=be(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=yt.getPrimaries(yt.workingColorSpace),n=t.colorSpace===``?null:yt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Fe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=M(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ye(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=P(t,e);if(t.isDepthTexture)u=N(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Se(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=yo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=yo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=V(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=V(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n){if(t.image.length!==6)return;let r=be(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=yt.getPrimaries(yt.workingColorSpace),o=t.colorSpace===``?null:yt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Fe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=M(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=P(t,h);ye(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=N(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=V(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=M(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=N(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=M(i.internalFormat,a,o,i.normalized,i.colorSpace);B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function De(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?he(t.depthTexture,0):fe(t.depthTexture,0);let o=i.__webglTexture,s=Ne(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)De(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?De(t.__webglFramebuffer[0],e,0):De(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ee(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ee(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(e,t,n){let r=f.get(e);t!==void 0&&Te(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Oe(e)}function Ae(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,te),ee(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&B(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=M(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ee(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Te(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ye(o,r),Te(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ye(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Te(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Oe(e)}function z(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let je=[];function Me(e){if(e.samples>0){if(B(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&je.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function B(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Pe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(yt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ye(`WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=B,this.dispose=ie}function yl(e,t){function n(n,r=``){let i,a=yt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var bl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xl=`
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

}`,Sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ui(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ca({vertexShader:bl,fragmentShader:xl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cl=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Sl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new U,k=null,A=null,j=new Ja;j.viewport=new At;let M=new Ja;M.viewport=new At;let N=[j,M],P=new ao,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getHandSpace()};function I(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,I),r.removeEventListener(`selectstart`,I),r.removeEventListener(`selectend`,I),r.removeEventListener(`squeeze`,I),r.removeEventListener(`squeezestart`,I),r.removeEventListener(`squeezeend`,I),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ee=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,R.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,I),r.addEventListener(`selectstart`,I),r.addEventListener(`selectend`,I),r.addEventListener(`squeeze`,I),r.addEventListener(`squeezestart`,I),r.addEventListener(`squeezeend`,I),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Mt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Vi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Mt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),R.setContext(r),R.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;re(P,i);for(let e=0;e<a.length;e++)re(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,P,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=nt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let L=null;function ae(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new Ja,o.layers.enable(n),o.viewport=new At,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ui,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}L&&L(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let R=new xo;R.setAnimationLoop(ae),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}},wl=new Ft,Tl=new mt;Tl.set(-1,0,0,0,1,0,0,0,1);function El(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ia(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(wl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Tl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Dl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Ol=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kl=null;function Al(){return kl===null&&(kl=new ri(Ol,16,16,k,g),kl.name=`DFG_LUT`,kl.minFilter=o,kl.magFilter=o,kl.wrapS=t,kl.wrapT=t,kl.generateMipmaps=!1,kl.needsUpdate=!0),kl}var jl=class{constructor(e={}){let{canvas:t=Ge(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,M=null,N=[],P=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,I=!1,te=null,ne=null,re=null,ie=null;this._outputColorSpace=Fe;let L=0,ae=0,R=null,oe=-1,se=null,ce=new At,le=new At,ue=null,de=new K(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new At(0,0,pe,me),ye=new At(0,0,pe,me),be=!1,xe=new gi,Se=new vi,Ce=!1,we=!1,Te=new Ft,Ee=new W,De=new At,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return R===null?he:1}let z=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,B,Pe,V,Ie,Le,Re,ze,Be,He,Ue,We,Ke,Je,Xe,Qe,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),z===null){let t=`webgl2`;if(z=je(t,e),z===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ye(`WebGLRenderer: `+e.message),e}function at(){Me=new Zo(z),Me.init(),nt=new yl(z,Me),Ne=new jo(z,Me,e,nt),B=new _l(z,Me),Ne.reversedDepthBuffer&&h&&B.buffers.depth.setReversed(!0),ne=z.createFramebuffer(),re=z.createFramebuffer(),ie=z.createFramebuffer(),Pe=new es(z),V=new Zc,Ie=new vl(z,Me,B,V,Ne,nt,Pe),Le=new Xo(F),Re=new So(z),rt=new ko(z,Re),ze=new Qo(z,Re,Pe,rt),Be=new ns(z,ze,Re,rt,Pe),$e=new ts(z,Ne,Ie),Je=new Mo(V),He=new Xc(F,Le,Me,Ne,rt,Je),Ue=new El(F,V),We=new tl,Ke=new cl(Me),Qe=new Oo(F,Le,B,Be,x,s),Xe=new gl(F,Be,Ne),it=new Dl(z,Pe,Ne,B),et=new Ao(z,Me,Pe),tt=new $o(z,Me,Pe),Pe.programs=He.programs,F.capabilities=Ne,F.extensions=Me,F.properties=V,F.renderLists=We,F.shadowMap=Xe,F.state=B,F.info=Pe}S!==1009&&(ee=new is(S,t.width,t.height,o,r,i));let ot=new Cl(F,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){ot.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)Ye(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ce.copy(ve).multiplyScalar(Ae()).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=C.has(t)}if(e){let e=R.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),We.dispose(),Ke.dispose(),Ie.dispose(),V.dispose(),Le.dispose(),Be.dispose(),ze.dispose(),rt.dispose(),it.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,ht),ot.removeEventListener(`sessionend`,gt),_t.stop()};function st(e){e.preventDefault(),qe(`WebGLRenderer: Context Lost.`),I=!0}function ct(){qe(`WebGLRenderer: Context Restored.`),I=!1;let e=Pe.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Pe.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function lt(e){Ye(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),U(t)}function U(e){dt(e),V.remove(e)}function dt(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=Re.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){te!==null&&e.isNodeMaterial&&te.setObject(r,e),Ce===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),te!==null&&te.renderStart(e,t,n),M=Ke.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),te!==null&&te.updateLights(M.state.lightsArray),we=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,we),Ce===!0&&Je.setGlobalState(this.clippingPlanes,t),te!==null&&Xe.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),M=P.pop(),te!==null&&te.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new xo;_t.setAnimationLoop(mt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){pt=e,ot.setAnimationLoop(e),e===null?_t.stop():_t.start()},ot.addEventListener(`sessionstart`,ht),ot.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Ye(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(I===!0)return;te!==null&&te.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=ee!==null&&(R===null||n)&&ee.begin(F,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,R),M=Ke.get(e,P.length),M.init(t),M.state.textureUnits=Ie.getTextureUnits(),P.push(M),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Se.setFromArrayCamera(t):xe.setFromProjectionMatrix(Te,Ve,t.reversedDepth),we=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,we),k=We.get(e,N.length),k.init(),N.push(k),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,F.sortObjects)}vt(e,t,0,F.sortObjects),k.finish(),te!==null&&te.updateLights(M.state.lightsArray),F.sortObjects===!0&&k.sort(ge,_e),ke=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,ke&&Qe.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Je.beginShadows();let i=M.state.shadowsArray;if(Xe.render(i,e,t),Ce===!0&&Je.endShadows(),(r&&ee.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}ke&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(k,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),ke&&Qe.render(e),bt(k,e,t)}R!==null&&ae===0&&(Ie.updateMultisampleRenderTarget(R),Ie.updateRenderTargetMipmap(R)),r&&ee.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),rt.resetDefaultState(),oe=-1,se=null,P.pop(),P.length>0?(M=P[P.length-1],Ie.setTextureUnits(M.state.textureUnits),Ce===!0&&Je.setGlobalState(F.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,te!==null&&te.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Be.update(e),a=e.material;a.visible&&k.push(e,i,a,n,De.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,De.z,s,t)}}else a.visible&&k.push(e,i,a,n,De.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),Ce===!0&&Je.setGlobalState(F.clippingPlanes,n),r&&B.viewport(ce.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Mt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),u=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(de),fe=F.getClearAlpha(),fe<1&&F.setClearColor(16777215,.5),F.clear(),ke&&Qe.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),Ce===!0&&Je.setGlobalState(F.clippingPlanes,r),St(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}F.setRenderTarget(s,u,d),F.setClearColor(de,fe),p!==void 0&&(r.viewport=p),F.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){te!==null&&i.isNodeMaterial&&te.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=Oe);let r=V.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=He.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,F),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Ot(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(M.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=V.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=pc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Oe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?F.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=M.state.lights;if(Ce===!0&&(we===!0||e!==se)){let t=e===se&&r.id===oe;Je.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(M.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Et(r,t,i,s,h):Tt(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==oe&&(oe=r.id,w=!0),C||se!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(z,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,Ie),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,Ie),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,Ie));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&$e.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Al()),w){if(E.setValue(z,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&jt(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,he,me,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of M.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}pc.upload(z,Dt(v),O,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(pc.upload(z,Dt(v),O,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,S),it.bind(n,S)}}return S}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){R=e,L=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),oe=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=ne),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Pt(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Ye(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){Ye(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Ye(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=R===null?null:V.get(R).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=R===null?null:V.get(R).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ze(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,re),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){L=0,ae=0,R=null,B.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ve}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}},Ml={Space:`jump`,KeyF:`enterExit`,Enter:`enterExit`,NumpadEnter:`enterExit`,KeyH:`horn`,KeyR:`radio`,KeyC:`camera`,KeyT:`time`,KeyM:`pause`,Escape:`pause`,KeyL:`headlights`,KeyV:`rain`},Nl=new Set([`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Tab`]),Pl=class{held=new Set;pending=new Set;orbitX=0;orbitY=0;wheel=0;dragging=!1;lastOrbitAt=-1/0;enabled=!0;element=null;opts;state={moveX:0,moveY:0,sprint:!1,brake:!1,horn:!1,orbitX:0,orbitY:0,orbitActive:!1,pointerLocked:!1,msSinceOrbit:1/0,wheelDelta:0};constructor(e={}){this.opts={pointerLock:e.pointerLock??!0,sensitivity:e.sensitivity??1}}attach(e){this.detach(),this.element=e,window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,this.onBlur),document.addEventListener(`visibilitychange`,this.onBlur),e.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove),e.addEventListener(`wheel`,this.onWheel,{passive:!1}),e.addEventListener(`contextmenu`,this.onContextMenu),document.addEventListener(`pointerlockchange`,this.onLockChange)}detach(){window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`blur`,this.onBlur),document.removeEventListener(`visibilitychange`,this.onBlur),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`mousemove`,this.onMouseMove),document.removeEventListener(`pointerlockchange`,this.onLockChange),this.element&&(this.element.removeEventListener(`mousedown`,this.onMouseDown),this.element.removeEventListener(`wheel`,this.onWheel),this.element.removeEventListener(`contextmenu`,this.onContextMenu)),this.element=null}setEnabled(e){this.enabled=e,e||this.clear()}isEnabled(){return this.enabled}get pointerLocked(){return!!this.element&&document.pointerLockElement===this.element}releasePointer(){this.pointerLocked&&document.exitPointerLock()}consumeAction(e){return this.pending.has(e)?(this.pending.delete(e),!0):!1}hasAction(e){return this.pending.has(e)}isHeld(e){return this.held.has(e)}poll(e=performance.now()){let t=this.state,n=this.held,r=0,i=0;(n.has(`KeyW`)||n.has(`ArrowUp`))&&(i+=1),(n.has(`KeyS`)||n.has(`ArrowDown`))&&--i,(n.has(`KeyD`)||n.has(`ArrowRight`))&&(r+=1),(n.has(`KeyA`)||n.has(`ArrowLeft`))&&--r;let a=Math.hypot(r,i);return a>1&&(r/=a,i/=a),t.moveX=r,t.moveY=i,t.sprint=n.has(`ShiftLeft`)||n.has(`ShiftRight`),t.brake=n.has(`Space`),t.horn=n.has(`KeyH`),t.orbitX=this.orbitX*this.opts.sensitivity,t.orbitY=this.orbitY*this.opts.sensitivity,t.pointerLocked=this.pointerLocked,t.orbitActive=this.dragging||t.pointerLocked,t.msSinceOrbit=e-this.lastOrbitAt,t.wheelDelta=this.wheel,this.orbitX=0,this.orbitY=0,this.wheel=0,t}clear(){this.held.clear(),this.pending.clear(),this.orbitX=0,this.orbitY=0,this.wheel=0,this.dragging=!1}onKeyDown=e=>{let t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))||!this.enabled||(Nl.has(e.code)&&e.preventDefault(),e.repeat))return;this.held.add(e.code);let n=Ml[e.code];n&&this.pending.add(n)};onKeyUp=e=>{this.held.delete(e.code)};onBlur=()=>{this.held.clear(),this.dragging=!1};onMouseDown=e=>{if(this.enabled){if(this.opts.pointerLock&&e.button===0&&!this.pointerLocked&&this.element)try{let e=this.element.requestPointerLock();e instanceof Promise&&e.catch(()=>void 0)}catch{}this.dragging=!0}};onMouseUp=()=>{this.dragging=!1};onMouseMove=e=>{this.enabled&&(this.pointerLocked||this.dragging)&&(Math.abs(e.movementX)>400||Math.abs(e.movementY)>400||(this.orbitX+=e.movementX,this.orbitY+=e.movementY,this.lastOrbitAt=performance.now()))};onWheel=e=>{if(!this.enabled)return;e.preventDefault();let t=e.deltaMode===1?33:e.deltaMode===2?800:1;this.wheel+=e.deltaY*t/100};onContextMenu=e=>{e.preventDefault()};wasLocked=!1;onLockChange=()=>{let e=this.pointerLocked;e||(this.dragging=!1,this.wasLocked&&this.enabled&&this.pending.add(`pause`)),this.wasLocked=e}},Fl=Math.PI*2;function X(e,t,n){return e<t?t:e>n?n:e}function Il(e,t,n){return e+(t-e)*n}function Ll(e,t,n){let r=X((n-e)/(t-e),0,1);return r*r*(3-2*r)}function Rl(e,t,n,r){return Il(e,t,1-Math.exp(-n*r))}function zl(e){return e=(e+Math.PI)%Fl,e<0&&(e+=Fl),e-Math.PI}function Bl(e,t,n,r){return e+zl(t-e)*(1-Math.exp(-n*r))}function Vl(e,t,n){return e<t?Math.min(e+n,t):Math.max(e-n,t)}function Hl(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ul(e,t,n=0){let r=Math.imul(e|0,374761393)+Math.imul(t|0,668265263)+Math.imul(n|0,2147483647);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function Wl(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*a*(a*(a*6-15)+10),c=o*o*o*(o*(o*6-15)+10),l=Ul(r,i,n),u=Ul(r+1,i,n),d=Ul(r,i+1,n),f=Ul(r+1,i+1,n);return(l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c)*2-1}function Gl(e,t,n,r=0){let i=0,a=1,o=0,s=1;for(let c=0;c<n;c++)i+=Wl(e*s,t*s,r+c*17)*a,o+=a,a*=.5,s*=2.03;return i/o}function Kl(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>1e-9?((e-n)*o+(t-r)*s)/c:0;l=X(l,0,1);let u=n+o*l-e,d=r+s*l-t;return{dist:Math.sqrt(u*u+d*d),t:l}}function ql(e,t,n){let r=Math.cos(n),i=Math.sin(n);return{x:e*r+t*i,z:-e*i+t*r}}function Jl(e,t,n){let r=Math.cos(n),i=Math.sin(n);return{x:e*r-t*i,z:e*i+t*r}}function Yl(e,t){return Math.atan2(e,t)}var Xl=[`wide`,`close`,`hood`,`panoramic`],Zl={wide:`ਖੁੱਲ੍ਹਾ ਨਜ਼ਾਰਾ · Wide`,close:`ਨੇੜੇ · Close`,hood:`ਅੱਗਿਓਂ · Hood`,panoramic:`ਦੂਰ ਤੱਕ · Panoramic`},Ql=65,$l=78,eu=.0032,tu=-.35,nu=1.15,ru=.45,iu=2.4,au=.6,ou=.35,su=.9,cu=class{camera;mode=`wide`;viewYaw=0;pitchOffset=0;zoom=1;world;pos=new W;vel=new W;look=new W;desired=new W;focus=new W;tmp=new W;tmpQ=new dt;cq={boxes:[],cylinders:[]};initialised=!1;panTime=0;constructor(e,t){this.camera=e,this.world=t,e.fov=Ql,e.updateProjectionMatrix()}get isFirstPerson(){return this.mode===`hood`}getYaw(){return this.viewYaw}setMode(e){this.mode=e,this.pitchOffset=0,this.initialised=!1}cycleMode(){let e=Xl.indexOf(this.mode);return this.setMode(Xl[(e+1)%Xl.length]),this.mode}snap(e){e!==void 0&&(this.viewYaw=e),this.initialised=!1}preset(e){let t=e.vehicleSpec?.camera;if(e.inVehicle&&t)switch(this.mode){case`close`:return{distance:t.followDistance*.72,height:t.followHeight*.8,look:t.lookHeight,stiffness:70};case`panoramic`:return{distance:Math.max(24,t.followDistance*2.6),height:11,look:t.lookHeight,stiffness:18};default:return{distance:t.followDistance*1.18,height:t.followHeight*1.02,look:t.lookHeight,stiffness:45}}switch(this.mode){case`close`:return{distance:4.2,height:1.95,look:1.5,stiffness:80};case`panoramic`:return{distance:24,height:10,look:1.4,stiffness:18};default:return{distance:7.5,height:2.7,look:1.45,stiffness:55}}}update(e,t,n){e=Math.min(e,.1);let r=this.camera;this.viewYaw-=n.orbitX*eu,this.pitchOffset=X(this.pitchOffset+n.orbitY*eu,tu,nu),n.wheelDelta!==0&&this.mode!==`hood`&&(this.zoom=X(this.zoom*Math.exp(n.wheelDelta*.12),ru,iu));let i=n.msSinceOrbit>(t.inVehicle?1200:2500),a=Math.abs(t.speed);if(this.mode===`panoramic`&&n.msSinceOrbit>4e3&&a<1)this.viewYaw+=.06*e;else if(i&&a>(t.inVehicle?2:1.5)&&!n.pointerLocked){let n=t.inVehicle?X(a/10,.6,3):.7;this.viewYaw=Bl(this.viewYaw,t.yaw,n,e),this.pitchOffset=Rl(this.pitchOffset,0,1.2,e)}else t.inVehicle&&n.pointerLocked&&i&&a>2&&(this.viewYaw=Bl(this.viewYaw,t.yaw,X(a/14,.4,2),e));let o=Il(Ql,$l,X((a-6)/26,0,1))+(t.boosting&&a>4?3:0);if(r.fov=Rl(r.fov,X(o,Ql,$l),3,e),this.mode===`hood`){this.updateHood(e,t),r.updateProjectionMatrix();return}let s=this.preset(t),c=s.distance*this.zoom,l=X(Math.atan2(s.height-s.look,s.distance)+this.pitchOffset,-.15,1.35);this.focus.set(t.position.x,t.position.y+s.look,t.position.z);let u=Math.sin(this.viewYaw),d=Math.cos(this.viewYaw),f=Math.cos(l)*c;if(this.desired.set(this.focus.x-u*f,this.focus.y+Math.sin(l)*c,this.focus.z-d*f),this.clampClearance(this.desired),this.avoidTerrainOcclusion(this.focus,this.desired),this.avoidWallOcclusion(this.focus,this.desired),!this.initialised)this.pos.copy(this.desired),this.vel.set(0,0,0),this.look.copy(this.focus),this.initialised=!0;else{let t=s.stiffness,n=2*Math.sqrt(t);this.tmp.subVectors(this.desired,this.pos).multiplyScalar(t).addScaledVector(this.vel,-n),this.vel.addScaledVector(this.tmp,e),this.pos.addScaledVector(this.vel,e),this.look.x=Rl(this.look.x,this.focus.x,14,e),this.look.y=Rl(this.look.y,this.focus.y,10,e),this.look.z=Rl(this.look.z,this.focus.z,14,e)}this.clampClearance(this.pos),this.avoidWallOcclusion(this.look,this.pos),r.position.copy(this.pos);let p=(t.shake??0)*X(a/15,0,1);if(p>.01){let e=performance.now()*.03;r.position.y+=Math.sin(e*1.7)*.03*p,r.position.x+=Math.sin(e*2.3)*.02*p}r.lookAt(this.look),r.updateProjectionMatrix()}updateHood(e,t){let n=this.camera;if(t.inVehicle&&t.vehicleSpec&&t.vehicleQuaternion){let r=t.vehicleSpec.camera.hood;this.tmp.set(r.x,r.y,r.z).applyQuaternion(t.vehicleQuaternion).add(t.position),n.position.copy(this.tmp);let i=du(this.viewYaw-t.yaw);this.tmpQ.setFromAxisAngle(lu,i+Math.PI),n.quaternion.copy(t.vehicleQuaternion).multiply(this.tmpQ),n.rotateX(-X(this.pitchOffset,-.6,.6)*.8),Math.abs(t.speed)>2&&(this.viewYaw=Bl(this.viewYaw,t.yaw,1.5,e))}else{let e=t.eye??this.tmp.set(t.position.x,t.position.y+1.66,t.position.z);n.position.copy(e);let r=X(this.pitchOffset,-1.2,1.2);this.look.set(e.x+Math.sin(this.viewYaw)*Math.cos(r),e.y-Math.sin(r),e.z+Math.cos(this.viewYaw)*Math.cos(r)),n.lookAt(this.look)}this.initialised=!1}clampClearance(e){let t=this.world.getSurfaceHeight(e.x,e.z),n=this.world.getWaterLevel(e.x,e.z),r=Math.max(t,n??-1/0)+au;e.y<r&&(e.y=r)}avoidWallOcclusion(e,t){let n=(e.x+t.x)/2,r=(e.z+t.z)/2,i=Math.hypot(t.x-e.x,t.z-e.z)/2+1;this.world.queryColliders(n,r,i,this.cq);let a=1/0;for(let n of this.cq.boxes){if(n.walkableTop)continue;let r=uu(e,t,n);r<a&&(a=r)}if(!Number.isFinite(a))return;let o=e.distanceTo(t);if(o<1e-6)return;let s=Math.max(su,a*o-ou);s>=o||t.lerpVectors(e,t,s/o)}avoidTerrainOcclusion(e,t){let n=0;for(let r=1;r<=6;r++){let i=r/7,a=e.x+(t.x-e.x)*i,o=e.z+(t.z-e.z)*i,s=e.y+(t.y-e.y)*i,c=this.world.getTerrainHeight(a,o)+.4;c>s&&(n=Math.max(n,(c-s)/i))}n>0&&(t.y+=Math.min(n,6))}},lu=new W(0,1,0);function uu(e,t,n){let r=Math.cos(n.rotY),i=Math.sin(n.rotY),a=e.x-n.cx,o=e.z-n.cz,s=a*r-o*i,c=a*i+o*r,l=t.x-e.x,u=t.z-e.z,d=l*r-u*i,f=l*i+u*r,p=(n.minY+n.maxY)/2,m=(n.maxY-n.minY)/2,h=-1/0,g=1/0,_=[[s,d,n.halfX],[e.y-p,t.y-e.y,m],[c,f,n.halfZ]];for(let[e,t,n]of _){if(Math.abs(t)<1e-9){if(Math.abs(e)>n)return 1/0;continue}let r=(-n-e)/t,i=(n-e)/t;if(r>i&&([r,i]=[i,r]),r>h&&(h=r),i<g&&(g=i),h>g)return 1/0}return h<=0||h>1?1/0:h}function du(e){return e=(e+Math.PI)%(Math.PI*2),e<0&&(e+=Math.PI*2),e-Math.PI}var fu={minX:-800,maxX:800,minZ:-800,maxZ:800},pu={x:0,z:11,heading:0},mu={waterHalfWidth:7,innerBankEnd:9,patriEnd:13,outerEnd:18,bankRise:1.2,bedDepth:2.2};function hu(e){return-.5*e+130+20*Math.sin(e/160)}function gu(e){return-.5+20/160*Math.cos(e/160)}function _u(e){return .4+5e-4*e}function vu(e){return _u(e)+mu.bankRise}function yu(e,t){let n=gu(e),r=e+n*(t-hu(e))/(1+n*n),i=hu(r),a=gu(r),o=1/Math.sqrt(1+a*a),s=o,c=a*o,l=e-r,u=t-i;return{d:l*-c+u*s,x:r,z:i,tx:s,tz:c}}function bu(e,t){return yu(e,t).d}function xu(e,t,n,r,i,a,o,s){let c=hu(r),l=yu(r,c),u=s?0:-l.tz,d=s?1:l.tx,f=vu(r);return{id:e,gurmukhi:t,english:n,x:r,z:c,rotY:Yl(u,d),ax:u,az:d,halfLength:o,halfWidth:a,baseY:f,topY:f+(i===`highway`?.5:.85),carries:i}}var Su=[xu(`puli-1`,`ਮੋਟਰਾਂ ਵਾਲੀ ਪੁਲੀ`,`Motor Track Puli`,100,`dirt_track`,3.2,12,!1),xu(`puli-2`,`ਪੱਕੀ ਸੜਕ ਦੀ ਪੁਲੀ`,`Link Road Puli`,340,`link_road`,3.9,12,!1),xu(`puli-3`,`ਵੱਡੀ ਸੜਕ ਦਾ ਪੁਲ`,`Highway Bridge`,560,`highway`,7.6,17,!0),xu(`puli-4`,`ਨਹਿਰਾਂ ਵਾਲੀ ਪੁਲੀ`,`Nehran Puli`,-330,`dirt_track`,3.2,12,!1)];function Cu(e,t){return{x:e.x+e.ax*t,z:e.z+e.az*t}}var wu={x:-220,z:-180,phirniRadius:95,phirniHalfWidth:3.5,flattenRadius:112,flattenBlend:22},Tu={id:`nehran-wala`,gurmukhi:`ਨਹਿਰਾਂ ਵਾਲਾ ਪਿੰਡ`,english:`Nehran Wala Pind`,x:-120,z:430,phirniRadius:72,phirniHalfWidth:3.2,flattenRadius:86,flattenBlend:20},Eu={id:`sarsonpura-khurd`,gurmukhi:`ਸਰ੍ਹੋਂਪੁਰਾ ਖੁਰਦ`,english:`Sarsonpura Khurd`,x:310,z:-470,phirniRadius:68,phirniHalfWidth:3.2,flattenRadius:82,flattenBlend:20},Du=[{id:`pind-kalan`,gurmukhi:`ਪਿੰਡ ਕਲਾਂ`,english:`Pind Kalan`,...wu},Tu,Eu],Ou={pind:Du[0],index:0,r:1/0};function ku(e,t,n=Ou){n.r=1/0;for(let r=0;r<Du.length;r++){let i=Du[r],a=Math.hypot(e-i.x,t-i.z);a<n.r&&(n.r=a,n.pind=i,n.index=r)}return n}var Au={x:-120,z:480,halfX:24,halfZ:11,raise:.18},ju={x:-35,z:420,radius:9,rimRadius:11.5},Mu={x:290,z:-448,radius:1.7},Nu={x:335,z:-495,halfX:8,halfZ:5},Pu={x:-110,z:-250,rx:24,rz:18,depth:2},Fu={x:400,z:-438,rx:13,rz:10,depth:1.6},Iu=3.5,Lu=.45,Ru={x:525,z:-40,halfX:22,halfZ:16},zu=[{id:`motor-1`,index:1,x:0,z:0,rotY:0,style:`brick`,gurmukhi:`ਪਹਿਲੀ ਮੋਟਰ`,english:`Motor #1`},{id:`motor-2`,index:2,x:240,z:220,rotY:0,style:`solar`,gurmukhi:`ਦੂਜੀ ਮੋਟਰ`,english:`Motor #2`},{id:`motor-3`,index:3,x:-360,z:260,rotY:0,style:`brick`,gurmukhi:`ਤੀਜੀ ਮੋਟਰ`,english:`Motor #3`},{id:`motor-4`,index:4,x:160,z:-340,rotY:0,style:`solar`,gurmukhi:`ਚੌਥੀ ਮੋਟਰ`,english:`Motor #4`}],Bu=1.7,Vu=2.8,Hu=[{id:`gurdwara`,x:-250,z:-145,radius:22,zone:`gurdwara`,gurmukhi:`ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ`,english:`Gurdwara Sahib`},{id:`sath`,x:-200,z:-195,radius:14,zone:`sath`,gurmukhi:`ਸੱਥ ਤੇ ਬੋਹੜ`,english:`Sath & Bohr Tree`},{id:`tanki`,x:-175,z:-140,radius:10,zone:`tanki`,gurmukhi:`ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ`,english:`Paani Wali Tanki`},{id:`toba`,x:Pu.x,z:Pu.z,radius:30,zone:`pond`,gurmukhi:`ਪਿੰਡ ਦਾ ਟੋਭਾ`,english:`Village Toba`},{id:`dhaba`,x:Ru.x,z:Ru.z,radius:26,zone:`dhaba`,gurmukhi:`ਰੰਗਲਾ ਢਾਬਾ`,english:`Rangla Dhaba`},{id:`nehran-gurdwara`,x:-152,z:404,radius:13,zone:`gurdwara`,gurmukhi:`ਡੇਰਾ ਤੇ ਗੁਰਦੁਆਰਾ`,english:`Dera Gurdwara`},{id:`dana-mandi`,x:Au.x,z:Au.z,radius:22,zone:`dana_mandi`,gurmukhi:`ਦਾਣਾ ਮੰਡੀ`,english:`Dana Mandi`},{id:`tochan-akhara`,x:ju.x,z:ju.z,radius:13,zone:`akhara`,gurmukhi:`ਟੋਚਨ ਅਖਾੜਾ`,english:`Tochan Akhara`},{id:`khooh`,x:Mu.x,z:Mu.z,radius:9,zone:`khooh`,gurmukhi:`ਖੂਹ ਤੇ ਬੋਹੜ`,english:`Khooh Well`},{id:`dispensary`,x:Nu.x,z:Nu.z,radius:11,zone:`dispensary`,gurmukhi:`ਡਿਸਪੈਂਸਰੀ ਤੇ ਸਕੂਲ`,english:`Dispensary & School`},{id:`chhappar`,x:Fu.x,z:Fu.z,radius:19,zone:`chhappar`,gurmukhi:`ਛੱਪੜ`,english:`Chhappar Pond`},...zu.map(e=>({id:e.id,x:e.x,z:e.z,radius:10,zone:`motor`,gurmukhi:e.gurmukhi,english:e.english}))];function Uu(e,t,n,r,i){let a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of i)a=Math.min(a,e.x),o=Math.max(o,e.x),s=Math.min(s,e.z),c=Math.max(c,e.z);let l=n+r;return{id:e,kind:t,halfWidth:n,shoulder:r,points:i,minX:a-l,maxX:o+l,minZ:s-l,maxZ:c+l}}var Z=(e,t)=>({x:e,z:t}),[Wu,Gu,,Ku]=Su,qu=(e,t)=>Z(e.x+Math.cos(t*Math.PI/180)*e.phirniRadius,e.z+Math.sin(t*Math.PI/180)*e.phirniRadius),Ju=e=>qu(Du[0],e),Yu=e=>qu(Tu,e),Xu=e=>qu(Eu,e),Zu=[Uu(`link-pind-highway`,`link_road`,3.5,2.2,[Ju(45),Z(-95,-60),Z(-40,-20),Z(0,-15),Z(120,-14),Z(240,-22),Cu(Gu,-40),Cu(Gu,-14),Cu(Gu,14),Cu(Gu,40),Z(440,-48),Z(500,-62),Z(553.5,-62)]),Uu(`track-m1-m2`,`dirt_track`,2.4,1.4,[Z(3,5),Z(40,36),Cu(Wu,-34),Cu(Wu,-14),Cu(Wu,14),Cu(Wu,34),Z(170,165),Z(234,214)]),Uu(`track-m1-m3`,`dirt_track`,2.4,1.4,[Z(-4,3),Z(-80,58),Z(-180,128),Z(-280,196),Z(-353,256)]),Uu(`track-m1-m4`,`dirt_track`,2.4,1.4,[Z(3,-4),Z(40,-100),Z(110,-220),Z(155,-333)]),Uu(`track-m4-pind`,`dirt_track`,2.4,1.4,[Z(153,-342),Z(0,-338),Z(-125,-305),Ju(-80)]),Uu(`track-m3-pind`,`dirt_track`,2.4,1.4,[Z(-362,253),Z(-305,150),Z(-262,20),Ju(100)]),Uu(`track-m2-dhaba`,`dirt_track`,2.2,1.2,[Z(246,218),Z(380,160),Z(470,60),Z(Ru.x-6,Ru.z+Ru.halfZ)]),Uu(`gali-ew`,`gali`,2.3,.6,[Ju(180),Z(wu.x,wu.z),Ju(0)]),Uu(`gali-ns`,`gali`,2.3,.6,[Ju(-90),Z(wu.x,wu.z),Ju(90)]),Uu(`gali-gurdwara`,`gali`,2,.5,[Z(wu.x,wu.z),Z(-238,-158)]),Uu(`track-puli1-nehran`,`dirt_track`,2.4,1.4,[Cu(Wu,34),Z(98,215),Z(40,330),Z(0,445),Yu(25)]),Uu(`track-m3-nehran`,`dirt_track`,2.4,1.4,[Z(-352,257),Cu(Ku,-34),Cu(Ku,-14),Cu(Ku,14),Cu(Ku,34),Z(-240,360),Yu(200)]),Uu(`gali-nehran-ew`,`gali`,2.3,.6,[Yu(180),Z(Tu.x,Tu.z),Yu(0)]),Uu(`gali-nehran-ns`,`gali`,2.3,.6,[Yu(-90),Z(Tu.x,Tu.z),Yu(90)]),Uu(`track-m4-sarsonpura`,`dirt_track`,2.4,1.4,[Z(166,-345),Z(215,-405),Xu(160)]),Uu(`link-highway-sarsonpura`,`link_road`,3.3,2,[Xu(0),Z(470,-470),Z(553.5,-470)]),Uu(`gali-sarsonpura-ew`,`gali`,2.2,.6,[Xu(180),Z(Eu.x,Eu.z),Xu(0)]),Uu(`gali-sarsonpura-ns`,`gali`,2.2,.6,[Xu(-90),Z(Eu.x,Eu.z),Xu(90)]),Uu(`sua-1`,`sua`,.9,1,[Z(-40,hu(-40)-12),Z(-58,90),Z(-110,40),Z(-170,10)]),Uu(`sua-2`,`sua`,.9,1,[Z(220,hu(220)+12),Z(290,120),Z(330,260),Z(360,380)]),Uu(`sua-3`,`sua`,.9,1,[Z(-300,hu(-300)-12),Z(-340,170),Z(-430,70),Z(-520,20)]),Uu(`sua-4`,`sua`,.9,1,[Z(480,hu(480)-12),Z(420,-200),Z(330,-300),Z(322,-382)])],Qu=.65,$u=.18,ed={path:null,dist:1/0,along:0};function td(e,t,n,r=0,i=ed){i.path=null,i.dist=1/0,i.along=0;for(let a of Zu){if(!n.includes(a.kind)||e<a.minX-r||e>a.maxX+r||t<a.minZ-r||t>a.maxZ+r)continue;let o=0;for(let n=0;n<a.points.length-1;n++){let r=a.points[n],s=a.points[n+1],c=Math.hypot(s.x-r.x,s.z-r.z),l=Kl(e,t,r.x,r.z,s.x,s.z);l.dist-a.halfWidth<i.dist-(i.path?i.path.halfWidth:0)&&(i.path=a,i.dist=l.dist,i.along=o+l.t*c),o+=c}}return i}var nd=[{id:`safeda-link`,species:`safeda`,pathId:`link-pind-highway`,offset:8,spacing:11,bothSides:!0},{id:`safeda-canal`,species:`safeda`,pathId:`canal`,offset:15.5,spacing:9,bothSides:!0},{id:`tahli-m1-m3`,species:`tahli`,pathId:`track-m1-m3`,offset:5,spacing:18,bothSides:!1},{id:`kikar-m1-m4`,species:`kikar`,pathId:`track-m1-m4`,offset:5,spacing:22,bothSides:!1}],rd=[{id:`sath-bohr`,species:`bohr`,x:-203,z:-190,scale:1.6},{id:`gurdwara-bohr`,species:`bohr`,x:-268,z:-128,scale:1.2},{id:`toba-bohr`,species:`bohr`,x:-78,z:-252,scale:1.3},{id:`dhaba-tahli`,species:`tahli`,x:508,z:-22,scale:1.1},{id:`khooh-bohr`,species:`bohr`,x:Mu.x-8,z:Mu.z+6,scale:1.4},{id:`mandi-bohr`,species:`bohr`,x:-158,z:468,scale:1},{id:`akhara-tahli`,species:`tahli`,x:ju.x+16,z:ju.z-10,scale:1}],id=.55,ad=.22;function od(e,t,n,r,i){if(r>-90&&r<90&&i>0&&i<100)return(e+n)%2==0?`wheat`:`mustard`;let a=1-Ll(30,160,Math.abs(yu(r,i).d)),o=Gl(r/260+7.1,i/260-3.3,2,41),s=Gl(r/210-1.7,i/210+9.2,2,53),c=.46,l=.22+.3*Ll(.05,.45,s);l+=1.1*(1-Ll(110,280,Math.hypot(r-Eu.x,i-Eu.z)));let u=.12+.42*a,d=.1+.35*Ll(.15,.5,o);r>480&&(u*=.5);let f=c+l+u+d,p=Ul(e*2+n,t*3+n,13)*f;return(p-=c)<0?`wheat`:(p-=l)<0?`mustard`:(p-=u)<0?`paddy`:`sugarcane`}function sd(e,t){let n=Math.floor((e+800)/40),r=Math.floor((t+800)/40),i=-800+n*40,a=-800+r*40,o=i+40,s=a+40,c=Ul(n,r,12),l=0;if(c<.35){let t=i+40*(.35+.3*Ul(n,r,14));e<t?o=t:(i=t,l=1)}else if(c<.6){let e=a+40*(.35+.3*Ul(n,r,15));t<e?s=e:(a=e,l=1)}let u=od(n,r,l,(i+o)/2,(a+s)/2);return{key:`${n},${r},${l}`,crop:u,minX:i,maxX:o,minZ:a,maxZ:s}}function cd(e,t,n){return Math.min(e-n.minX,n.maxX-e,t-n.minZ,n.maxZ-t)}var ld={wheat:`wheat_fields`,mustard:`mustard_fields`,paddy:`paddy_fields`,sugarcane:`sugarcane_fields`},ud={link_road:`link_road`,dirt_track:`dirt_track`,gali:`gali`,sua:`sua`},dd={link_road:`link_road`,dirt_track:`dirt_track`,gali:`phirni_brick`,sua:`canal_water`},fd=[`link_road`,`dirt_track`,`gali`],pd=[`sua`],md={path:null,dist:1/0,along:0};function hd(e,t){let n=(e-Pu.x)/Pu.rx,r=(t-Pu.z)/Pu.rz;return n*n+r*r}function gd(e,t){let n=(e-Fu.x)/Fu.rx,r=(t-Fu.z)/Fu.rz;return n*n+r*r}function _d(e,t,n=0){return Math.abs(e-Au.x)<Au.halfX+n&&Math.abs(t-Au.z)<Au.halfZ+n}function vd(e,t){return Math.hypot(e-ju.x,t-ju.z)}function yd(e,t){let n=null,r=1/0;for(let i of Hu){let a=Math.hypot(e-i.x,t-i.z);a<i.radius&&a/i.radius<r&&(r=a/i.radius,n=i)}return n}function bd(e,t,n){let r=Math.abs(n),i={pathId:null,parcel:null};if(r<mu.waterHalfWidth)return{surface:`canal_water`,zone:`canal`,...i};let a=hd(e,t);if(a<1)return{surface:`pond_water`,zone:`pond`,...i};let o=gd(e,t);if(o<1)return{surface:`pond_water`,zone:`chhappar`,...i};if(_d(e,t))return{surface:`phirni_brick`,zone:`dana_mandi`,...i};let s=vd(e,t);if(s<ju.radius)return{surface:`dirt_track`,zone:`akhara`,...i};let c=Math.abs(e-560);if(c<7)return{surface:`highway`,zone:`highway`,...i};if(c<10.5)return{surface:`verge`,zone:`highway`,...i};let l=td(e,t,fd,0,md);if(l.path){if(l.dist<l.path.halfWidth)return{surface:dd[l.path.kind],zone:ud[l.path.kind],pathId:l.path.id,parcel:null};if(l.dist<l.path.halfWidth+l.path.shoulder)return{surface:`verge`,zone:ud[l.path.kind],pathId:l.path.id,parcel:null}}if(Math.abs(e-Ru.x)<Ru.halfX&&Math.abs(t-Ru.z)<Ru.halfZ)return{surface:`dirt_track`,zone:`dhaba`,...i};let u=ku(e,t),d=u.pind,f=u.r;if(Math.abs(f-d.phirniRadius)<d.phirniHalfWidth)return{surface:`phirni_brick`,zone:`phirni`,...i};if(r<mu.innerBankEnd)return{surface:`verge`,zone:`canal_bank`,...i};if(r<mu.patriEnd)return{surface:`dirt_track`,zone:`canal_bank`,...i};if(r<mu.outerEnd)return{surface:`verge`,zone:`canal_bank`,...i};if(a<1.45)return{surface:`verge`,zone:`pond`,...i};if(o<1.45)return{surface:`verge`,zone:`chhappar`,...i};if(s<ju.rimRadius)return{surface:`verge`,zone:`akhara`,...i};let p=td(e,t,pd,0,md);if(p.path){if(p.dist<p.path.halfWidth)return{surface:`canal_water`,zone:`sua`,pathId:p.path.id,parcel:null};if(p.dist<p.path.halfWidth+p.path.shoulder)return{surface:`verge`,zone:`sua`,pathId:p.path.id,parcel:null}}if(f<d.phirniRadius-d.phirniHalfWidth)return{surface:`dirt_track`,zone:`pind`,...i};for(let n of zu)if(Math.hypot(e-n.x,t-n.z)<7)return{surface:`dirt_track`,zone:`motor`,...i};let m=sd(e,t);return cd(e,t,m)<.55?{surface:`watt`,zone:`watt`,pathId:null,parcel:m}:{surface:m.crop,zone:ld[m.crop],pathId:null,parcel:m}}function xd(e,t){let n=yu(e,t).d,r=bd(e,t,n),i=yd(e,t),a=r.zone;return i&&r.surface!==`canal_water`&&r.surface!==`pond_water`&&(a=i.zone),{...r,zone:a,landmarkId:i?i.id:null,canalD:n}}var Sd=16,Cd=1,wd=[],Td=[],Ed=[],Dd=new Map,Od=[],kd=0,Ad=(e,t)=>(e+512)*1024+(t+512);function jd(e,t,n,r){let i=Math.floor((t-r)/Sd),a=Math.floor((t+r)/Sd),o=Math.floor((n-r)/Sd),s=Math.floor((n+r)/Sd);for(let t=i;t<=a;t++)for(let n=o;n<=s;n++){let r=Ad(t,n),i=Dd.get(r);i||Dd.set(r,i=[]),i.push(e)}}function Md(e){let t={id:Cd++,kind:`box`,cx:e.cx,cz:e.cz,halfX:e.halfX,halfZ:e.halfZ,rotY:e.rotY??0,minY:e.minY,maxY:e.maxY,walkableTop:e.walkableTop??!1,tag:e.tag};return wd.push(t),jd(t,t.cx,t.cz,Math.hypot(t.halfX,t.halfZ)),t}function Nd(e){let t={id:Cd++,kind:`cylinder`,...e};return Td.push(t),jd(t,t.x,t.z,t.radius),t}function Pd(e){let t={id:Cd++,kind:`ramp`,cx:e.cx,cz:e.cz,halfWidth:e.halfWidth,halfLength:e.halfLength,rotY:e.rotY,baseY:e.baseY,topY:e.topY,profile:e.profile,thickness:e.thickness??.5,surface:e.surface,tag:e.tag,landmarkId:e.landmarkId??null};return Ed.push(t),t}function Fd(){return Ed}function Id(e){for(let t of[wd,Td]){let n=t.findIndex(t=>t.id===e);n>=0&&t.splice(n,1)}for(let t of Dd.values()){let n=t.findIndex(t=>t.id===e);n>=0&&t.splice(n,1)}}function Ld(e,t,n,r){let i=r??{boxes:[],cylinders:[]};i.boxes.length=0,i.cylinders.length=0;let a=++kd,o=Math.floor((e-n)/Sd),s=Math.floor((e+n)/Sd),c=Math.floor((t-n)/Sd),l=Math.floor((t+n)/Sd);for(let e=o;e<=s;e++)for(let t=c;t<=l;t++){let n=Dd.get(Ad(e,t));if(n)for(let e of n)Od[e.id]!==a&&(Od[e.id]=a,e.kind===`box`?i.boxes.push(e):i.cylinders.push(e))}return i}function Rd(e,t,n=[]){n.length=0;for(let r of Ed){let i=r.halfLength+r.halfWidth;Math.abs(e-r.cx)<=i&&Math.abs(t-r.cz)<=i&&n.push(r)}return n}var zd=!1;function Bd(e){if(!zd){zd=!0;for(let e of Su){Pd({cx:e.x,cz:e.z,halfWidth:e.halfWidth,halfLength:e.halfLength,rotY:e.rotY,baseY:e.baseY,topY:e.topY,profile:`arch`,thickness:.7,surface:e.carries===`dirt_track`?`dirt_track`:e.carries,tag:`bridge`,landmarkId:e.id});for(let t of[-1,1]){let n=e.halfWidth+.15;Md({cx:e.x+Math.cos(e.rotY)*n*t,cz:e.z-Math.sin(e.rotY)*n*t,halfX:.15,halfZ:e.halfLength-.5,rotY:e.rotY,minY:e.baseY-.8,maxY:e.topY+1,tag:`railing`})}}for(let t of zu){let n=e(t.x,t.z);if(Md({cx:t.x,cz:t.z,halfX:Bu,halfZ:Bu,rotY:t.rotY,minY:n-.5,maxY:n+Vu,tag:`motor`}),Md({cx:t.x,cz:t.z-2.9,halfX:1.3,halfZ:.95,rotY:t.rotY,minY:n-.5,maxY:n+.75,walkableTop:!0,tag:`motor`}),t.style===`solar`)for(let e of[-1.6,1.6])Nd({x:t.x-5,z:t.z+e,radius:.12,minY:n,maxY:n+2.6,tag:`pole`})}}}function Vd(e,t){return .9*Gl(e/220,t/220,3,7)+.25*Wl(e/45,t/45,9)}var Hd=Du.map(e=>Vd(e.x,e.z)+.25),Ud=Hd[1],Wd=Vd(Pu.x,Pu.z)-.35,Gd={pind:Du[0],index:0,r:1/0};function Kd(e,t){let n=ku(e,t,Gd),r=n.pind;return Il(Vd(e,t),Hd[n.index],Ll(r.flattenRadius+r.flattenBlend,r.flattenRadius,n.r))}var qd=(()=>{let e=1/0;for(let t=0;t<24;t++){let n=t/24*Math.PI*2;e=Math.min(e,Kd(Fu.x+Math.cos(n)*Fu.rx*1.15,Fu.z+Math.sin(n)*Fu.rz*1.15))}return e-.35})(),Jd=[`link_road`,`dirt_track`,`gali`],Yd=[`sua`],Xd={path:null,dist:1/0,along:0},Zd={path:null,dist:1/0,along:0},Qd={link_road:.2,dirt_track:-.04,gali:.08,sua:0},$d={h:0,preSua:0};function ef(e,t,n){let r=Vd(e,t),i=ku(e,t,Gd),a=i.pind,o=i.r;r=Il(r,Hd[i.index],Ll(a.flattenRadius+a.flattenBlend,a.flattenRadius,o));let s=vd(e,t);s<ju.rimRadius+8&&(r=Il(r,Ud,Ll(ju.rimRadius+8,ju.rimRadius,s)));let c=r;if(r+=.12*(1-Ll(a.phirniHalfWidth,a.phirniHalfWidth+1.5,Math.abs(o-a.phirniRadius))),o>a.phirniRadius+6&&s>ju.rimRadius+2){let n=sd(e,t),i=cd(e,t,n);r+=ad*(1-Ll(0,id+.45,i)),n.crop===`paddy`&&(r-=.16*Ll(id,id+1.6,i))}let l=Math.abs(e-560);r+=Lu*(1-Ll(7.5,7+Iu+2,l));let u=td(e,t,Jd,0,Xd),d=!1;if(u.path){let e=1-Ll(u.path.halfWidth,u.path.halfWidth+u.path.shoulder,u.dist);e>0&&(d=u.dist<u.path.halfWidth+u.path.shoulder,r=Il(r,c+Qd[u.path.kind],e))}let f=Math.abs(e-Au.x)-Au.halfX,p=Math.abs(t-Au.z)-Au.halfZ,m=Math.max(f,p);m<1.5&&(r+=Au.raise*(1-Ll(0,1.5,m)));let h=hd(e,t);h<1.6&&(r=Il(Wd-.25-Pu.depth*Math.max(0,1-h),r,Ll(1,1.6,h)));let g=gd(e,t);if(g<1.6&&(r=Il(qd-.25-Fu.depth*Math.max(0,1-g),r,Ll(1,1.6,g))),n.preSua=r,!d){let n=td(e,t,Yd,0,Zd);n.path&&n.dist<n.path.halfWidth+n.path.shoulder&&(r-=Qu*(1-Ll(n.path.halfWidth*.5,n.path.halfWidth+.6,n.dist)))}let _=yu(e,t),v=Math.abs(_.d);if(v<mu.outerEnd){let e=_u(_.x),t=e+mu.bankRise,i=e-mu.bedDepth,a;if(v<mu.waterHalfWidth){let t=v/mu.waterHalfWidth;a=Il(i,e-.45,t*t)}else a=v<mu.innerBankEnd?Il(e-.45,t,Ll(mu.waterHalfWidth,mu.innerBankEnd,v)):v<mu.patriEnd?t:Il(t,r,Ll(mu.patriEnd,mu.outerEnd,v));r=a,n.preSua=Math.max(n.preSua,a)}if(v>=mu.innerBankEnd)for(let n of Su){let i=e-n.x,a=t-n.z,o=Math.abs(i*n.ax+a*n.az),s=Math.abs(i*n.az-a*n.ax);if(o>n.halfLength+30||s>n.halfWidth+5)continue;let c=Ll(n.halfLength+28,n.halfLength,o)*Ll(n.halfWidth+5,n.halfWidth+1,s);n.baseY>r&&(r=Il(r,n.baseY,c))}return r+=3*Ll(770,800,Math.max(Math.abs(e),Math.abs(t))),n.h=r,n}function tf(e,t){return ef(e,t,$d).h}Bd(tf);var nf=[],rf={boxes:[],cylinders:[]};function af(e,t,n){let r=Jl(t-e.cx,n-e.cz,e.rotY);if(Math.abs(r.x)>e.halfWidth+.35||Math.abs(r.z)>e.halfLength)return null;let i=r.z/e.halfLength;switch(e.profile){case`linear`:return e.baseY+(e.topY-e.baseY)*(i+1)*.5;case`arch`:return e.baseY+(e.topY-e.baseY)*(1-i*i);default:return e.topY}}function of(e,t,n){let r=null;for(let i of Rd(e,t,nf)){let a=af(i,e,t);a!==null&&(n!==void 0&&a>n||(!r||a>r.y)&&(r={ramp:i,y:a}))}return r}function sf(e,t,n){let r=tf(e,t),i=of(e,t,n);i&&i.y>r&&(r=i.y),Ld(e,t,.1,rf);for(let i of rf.boxes){if(!i.walkableTop||n!==void 0&&i.maxY>n)continue;let a=Jl(e-i.cx,t-i.cz,i.rotY);Math.abs(a.x)<=i.halfX&&Math.abs(a.z)<=i.halfZ&&i.maxY>r&&(r=i.maxY)}return r}function cf(e,t,n){let r=of(e,t,n===void 0?void 0:n+.35);return r&&(n===void 0||n>=r.y-.35)?r.ramp.surface:xd(e,t).surface}var lf={pind:[`ਪਿੰਡ`,`Pind Village`],phirni:[`ਫਿਰਨੀ`,`Phirni Ring Road`],gali:[`ਪਿੰਡ ਦੀ ਗਲੀ`,`Village Gali`],gurdwara:[`ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ`,`Gurdwara Sahib`],sath:[`ਸੱਥ ਤੇ ਬੋਹੜ`,`Sath & Bohr Tree`],tanki:[`ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ`,`Paani Wali Tanki`],pond:[`ਪਿੰਡ ਦਾ ਟੋਭਾ`,`Village Toba`],canal:[`ਨਹਿਰ`,`Nehar Canal`],canal_bank:[`ਨਹਿਰ ਦੀ ਪਟੜੀ`,`Nehar Patri`],puli:[`ਪੁਲੀ`,`Puli Bridge`],sua:[`ਸੂਆ`,`Sua Channel`],highway:[`ਵੱਡੀ ਸੜਕ`,`Eastern Highway`],dhaba:[`ਰੰਗਲਾ ਢਾਬਾ`,`Rangla Dhaba`],link_road:[`ਪੱਕੀ ਸੜਕ`,`Link Road`],dirt_track:[`ਕੱਚਾ ਪਹਿਆ`,`Kacha Pahi`],motor:[`ਮੋਟਰ`,`Tubewell Motor`],wheat_fields:[`ਕਣਕ ਦੇ ਖੇਤ`,`Wheat Fields`],mustard_fields:[`ਸਰ੍ਹੋਂ ਦੇ ਖੇਤ`,`Mustard Fields`],paddy_fields:[`ਝੋਨੇ ਦੇ ਖੇਤ`,`Paddy Fields`],sugarcane_fields:[`ਕਮਾਦ ਦੇ ਖੇਤ`,`Sugarcane Fields`],watt:[`ਖੇਤ ਦੀ ਵੱਟ`,`Field Watt`],dana_mandi:[`ਦਾਣਾ ਮੰਡੀ`,`Dana Mandi`],akhara:[`ਟੋਚਨ ਅਖਾੜਾ`,`Tochan Akhara`],khooh:[`ਖੂਹ ਤੇ ਬੋਹੜ`,`Khooh Well`],chhappar:[`ਛੱਪੜ`,`Chhappar Pond`],dispensary:[`ਡਿਸਪੈਂਸਰੀ ਤੇ ਸਕੂਲ`,`Dispensary & School`]};function uf(e,t,n,r,i){let[a,o]=lf[e],s=r??a,c=i??o;return{id:e,gurmukhi:s,english:c,label:`${s} · ${c}`,surface:t,landmarkId:n}}function df(e,t,n){let r=of(e,t,n===void 0?void 0:n+.35);if(r&&(n===void 0||n>=r.y-.35)&&r.ramp.tag===`bridge`){let e=Su.find(e=>e.id===r.ramp.landmarkId);return uf(`puli`,r.ramp.surface,r.ramp.landmarkId,e?.gurmukhi,e?.english)}let i=xd(e,t);if(i.zone===`motor`&&i.landmarkId){let e=i.landmarkId.split(`-`)[1];return uf(`motor`,i.surface,i.landmarkId,`ਮੋਟਰ ${[``,`੧`,`੨`,`੩`,`੪`][Number(e)]??e}`,`Motor #${e}`)}if(i.zone===`pind`){let n=ku(e,t,Gd).pind;return uf(`pind`,i.surface,i.landmarkId,n.gurmukhi,n.english)}return i.landmarkId===`nehran-gurdwara`?uf(i.zone,i.surface,i.landmarkId,`ਡੇਰਾ ਤੇ ਗੁਰਦੁਆਰਾ`,`Dera Gurdwara`):uf(i.zone,i.surface,i.landmarkId)}function ff(e,t){let n=yu(e,t);if(Math.abs(n.d)<mu.waterHalfWidth+.6)return _u(n.x);if(hd(e,t)<1.08)return Wd;if(gd(e,t)<1.08)return qd;let r=xd(e,t);return r.zone===`sua`&&r.surface===`canal_water`?ef(e,t,$d).preSua-$u:r.surface===`paddy`?tf(e,t)+.08:null}function pf(e,t){let n=yu(e,t);if(Math.abs(n.d)<mu.waterHalfWidth||hd(e,t)<1||gd(e,t)<1)return!0;let r=xd(e,t);return r.surface===`canal_water`||r.surface===`pond_water`}function mf(e,t,n){if(pf(e,t))return!1;let r=sf(e,t);Ld(e,t,n+2,rf);for(let i of rf.boxes){if(r>i.maxY||r+2<i.minY)continue;let a=Jl(e-i.cx,t-i.cz,i.rotY);if(Math.abs(a.x)<i.halfX+n&&Math.abs(a.z)<i.halfZ+n)return!1}for(let r of rf.cylinders)if(Math.hypot(e-r.x,t-r.z)<r.radius+n)return!1;return!0}function hf(e,t){let n=[],r=yu(e,t);if(Math.abs(r.d)<mu.outerEnd+4){let e=r.d>=0?1:-1,t=Yl(r.tx,r.tz);for(let i of[e,-e])for(let e=0;e<12;e++){let a=(e%2==0?1:-1)*Math.ceil(e/2)*7,o=yu(r.x+r.tx*a,r.z+r.tz*a);n.push({x:o.x-o.tz*11*i,z:o.z+o.tx*11*i,heading:t})}}let i=hd(e,t);if(i<2){let r=e-Pu.x,a=t-Pu.z;Math.hypot(r,a)<.5&&(r=1);let o=Math.sqrt(1.9/Math.max(i,.01));i<.01&&(r=Pu.rx,a=0),n.push({x:Pu.x+r*o,z:Pu.z+a*o,heading:Yl(r,a)})}for(let r=1;r<=6;r++)for(let i=0;i<12;i++){let a=i/12*Math.PI*2;n.push({x:e+Math.sin(a)*r*3,z:t+Math.cos(a)*r*3,heading:a})}for(let e of n){let t=X(e.x,fu.minX+5,fu.maxX-5),n=X(e.z,fu.minZ+5,fu.maxZ-5);if(mf(t,n,1.6))return{x:t,y:sf(t,n),z:n,heading:e.heading}}return{x:0,y:sf(0,6),z:6,heading:0}}function gf(e,t,n,r,i){for(let a of Rd(e,t,nf)){let o=af(a,e,t);if(o!==null&&n+i<o&&n+r>o-a.thickness)return!0}return!1}var _f={bounds:fu,getTerrainHeight:tf,getSurfaceHeight:sf,getSurfaceType:cf,getZoneInfo:df,isWater:pf,getWaterLevel:ff,queryColliders:(e,t,n,r)=>Ld(e,t,n,r),isBlockedOverhead:gf,findSafeBankPosition:hf},vf=new Map([`wheat`,`mustard`,`paddy`,`sugarcane`,`dirt_track`,`link_road`,`phirni_brick`,`canal_water`,`highway`,`pond_water`,`verge`,`watt`].map((e,t)=>[e,t])),yf={wheat:new K(`#5aa532`),mustard:new K(`#a9b62a`),paddy:new K(`#4f9466`),sugarcane:new K(`#3d7a2a`),dirt_track:new K(`#cfa260`),link_road:new K(`#55565a`),phirni_brick:new K(`#b05a3c`),canal_water:new K(`#6b5a3e`),highway:new K(`#414246`),pond_water:new K(`#5a4a32`),verge:new K(`#72b23e`),watt:new K(`#8f9a48`)},bf=2.5,xf=Math.round(1600/bf),Sf=8,Cf=xf/Sf;function wf(e){let t=new G;t.name=`terrain`;let n=xf+1,r=new Float32Array(n*n),i=new Uint8Array(n*n),a=new Float32Array(n*n*3),o=new K;for(let e=0;e<n;e++){let t=-800+e*bf;for(let s=0;s<n;s++){let c=-800+s*bf,l=e*n+s;r[l]=tf(c,t);let u=xd(c,t);i[l]=vf.get(u.surface)??0,o.copy(yf[u.surface]);let d=.08*Gl(c/90,t/90,2,3),f=.06*(Ul(s,e,5)-.5),p=1+d+f;(u.surface===`link_road`||u.surface===`highway`)&&(p=1+f*.5),u.surface===`dirt_track`&&u.pathId&&(p*=.95+.1*Math.abs(Math.sin(s*1.7+e*1.3))),o.multiplyScalar(p),a[l*3]=o.r,a[l*3+1]=o.g,a[l*3+2]=o.b}}let s=new Float32Array(n*n*3);for(let e=0;e<n;e++)for(let t=0;t<n;t++){let i=r[e*n+Math.max(t-1,0)],a=r[e*n+Math.min(t+1,n-1)],o=r[Math.max(e-1,0)*n+t],c=r[Math.min(e+1,n-1)*n+t],l=i-a,u=o-c,d=2*bf,f=1/Math.hypot(l,d,u),p=(e*n+t)*3;s[p]=l*f,s[p+1]=d*f,s[p+2]=u*f}let c=new fa({vertexColors:!0}),l=new ua({color:`#7fb7c4`,roughness:.08,metalness:.25,transparent:!0,opacity:.55,depthWrite:!1}),u=vf.get(`paddy`)??2;for(let e=0;e<Sf;e++)for(let o=0;o<Sf;o++){let d=Cf+1,f=new Float32Array(d*d*3),p=new Float32Array(d*d*3),m=new Float32Array(d*d*3),h=[],g=[],_=[],v=new Map;for(let t=0;t<d;t++)for(let i=0;i<d;i++){let c=o*Cf+i,l=e*Cf+t,u=l*n+c,h=t*d+i;f[h*3]=-800+c*bf,f[h*3+1]=r[u],f[h*3+2]=-800+l*bf,p.set(s.subarray(u*3,u*3+3),h*3),m.set(a.subarray(u*3,u*3+3),h*3)}let y=(e,t)=>{let i=t*n+e,a=v.get(i);return a===void 0&&(a=g.length/3,g.push(-800+e*bf,r[i]+.08,-800+t*bf),v.set(i,a)),a};for(let t=0;t<Cf;t++)for(let r=0;r<Cf;r++){let a=t*d+r,s=a+1,c=a+d,l=c+1;h.push(a,c,s,s,c,l);let f=o*Cf+r,p=e*Cf+t,m=p*n+f;if(i[m]===u&&i[m+1]===u&&i[m+n]===u&&i[m+n+1]===u){let e=y(f,p),t=y(f+1,p),n=y(f,p+1),r=y(f+1,p+1);_.push(e,n,t,t,n,r)}}let b=new dr;b.setAttribute(`position`,new Zn(f,3)),b.setAttribute(`normal`,new Zn(p,3)),b.setAttribute(`color`,new Zn(m,3)),b.setIndex(h),b.computeBoundingSphere();let x=new J(b,c);if(x.name=`terrain-${o}-${e}`,x.receiveShadow=!0,t.add(x),_.length){let n=new dr;n.setAttribute(`position`,new q(g,3)),n.setIndex(_),n.computeVertexNormals();let r=new J(n,l);r.name=`paddy-water-${o}-${e}`,r.renderOrder=1,t.add(r)}}let d=new ua({color:`#3f8796`,roughness:.12,metalness:.3,transparent:!0,opacity:.86,side:2});return t.add(Tf(d)),t.add(Ef(d)),t.add(Df(d)),t.add(Of(d)),e.add(t),{group:t,terrainMaterial:c,waterMaterial:d,paddyWaterMaterial:l}}function Tf(e){let t=[],n=[],r=mu.waterHalfWidth+.9,i=0;for(let e=-820;e<=820;e+=4){let a=yu(e,-.5*e+130+20*Math.sin(e/160)),o=_u(a.x),s=-a.tz,c=a.tx;if(t.push(a.x-s*r,o,a.z-c*r,a.x+s*r,o,a.z+c*r),i>0){let e=(i-1)*2;n.push(e,e+1,e+2,e+1,e+3,e+2)}i++}let a=new dr;a.setAttribute(`position`,new q(t,3)),a.setIndex(n),a.computeVertexNormals();let o=a.getAttribute(`normal`);for(let e=0;e<o.count;e++)o.setXYZ(e,0,1,0);let s=new J(a,e);return s.name=`nehar-water`,s}function Ef(e){let t=new Gi(1,48);t.rotateX(-Math.PI/2);let n=new J(t,e);return n.scale.set(Pu.rx*1.04,1,Pu.rz*1.04),n.position.set(Pu.x,Wd,Pu.z),n.name=`toba-water`,n}function Df(e){let t=new Gi(1,40);t.rotateX(-Math.PI/2);let n=new J(t,e);return n.scale.set(Fu.rx*1.04,1,Fu.rz*1.04),n.position.set(Fu.x,qd,Fu.z),n.name=`chhappar-water`,n}function Of(e){let t=new G;t.name=`sua-water`;for(let n of Zu){if(n.kind!==`sua`)continue;let r=[],i=[],a=0;for(let e=0;e<n.points.length-1;e++){let t=n.points[e],o=n.points[e+1],s=Math.hypot(o.x-t.x,o.z-t.z),c=Math.max(1,Math.ceil(s/3)),l=-(o.z-t.z)/s,u=(o.x-t.x)/s;for(let s=0;s<=c;s++){if(e>0&&s===0)continue;let d=s/c,f=t.x+(o.x-t.x)*d,p=t.z+(o.z-t.z)*d,m=ef(f,p,$d).preSua-$u,h=n.halfWidth+.15;if(r.push(f-l*h,m,p-u*h,f+l*h,m,p+u*h),a>0){let e=(a-1)*2;i.push(e,e+1,e+2,e+1,e+3,e+2)}a++}}let o=new dr;o.setAttribute(`position`,new q(r,3)),o.setIndex(i);let s=new Float32Array(r.length/3*3);for(let e=1;e<s.length;e+=3)s[e]=1;o.setAttribute(`normal`,new Zn(s,3));let c=new J(o,e);c.name=`${n.id}-water`,t.add(c)}return t}function kf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new dr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Af(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Af(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Af(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Zn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var jf=new Ft,Mf=new dt,Nf=new Gt,Pf=new W,Ff=new W,If=new K;function Lf(e={}){return new fa({vertexColors:!0,side:e.side??0,emissive:e.emissive??0})}var Q=class{parts=[];add(e,t,n=0,r=0,i=0,a=0,o=0,s=0,c=1,l=1,u=1,d){let f=(e.index,e.clone());Nf.set(a,o,s,`YXZ`),Mf.setFromEuler(Nf),jf.compose(Pf.set(n,r,i),Mf,Ff.set(c,l,u)),f.applyMatrix4(jf),f.deleteAttribute(`uv`);let p=f.getAttribute(`position`),m=new Float32Array(p.count*3),h=If.set(t),g=d===void 0?null:new K(d),_=1/0,v=-1/0;if(g)for(let e=0;e<p.count;e++)_=Math.min(_,p.getY(e)),v=Math.max(v,p.getY(e));for(let e=0;e<p.count;e++)if(g){let t=(p.getY(e)-_)/Math.max(v-_,1e-5);m[e*3]=h.r+(g.r-h.r)*t,m[e*3+1]=h.g+(g.g-h.g)*t,m[e*3+2]=h.b+(g.b-h.b)*t}else m[e*3]=h.r,m[e*3+1]=h.g,m[e*3+2]=h.b;return f.setAttribute(`color`,new Zn(m,3)),this.parts.push(f),this}box(e,t,n,r,i,a,o,s=0,c=0,l=0){return this.add(new Wi(e,t,n),r,i,a,o,c,s,l)}wall(e,t,n,r,i,a,o,s=0){return this.box(e,t,n,r,i,a+t/2,o,s)}cyl(e,t,n,r,i,a,o,s=10,c=0,l=0,u=0,d){return this.add(new Ki(e,t,n,s,1),r,i,a,o,c,u,l,1,1,1,d)}blob(e,t,n,r,i,a=1,o=1,s=1,c=1,l=0){return this.add(new Yi(e,c),t,n,r,i,0,l,0,a,o,s)}plane(e,t,n,r,i,a,o=0,s=0){return this.add(new Xi(e,t),n,r,i,a,s,o,0)}torus(e,t,n,r,i,a,o=0,s=0,c=0){return this.add(new $i(e,t,6,14),n,r,i,a,o,s,c)}get empty(){return this.parts.length===0}geometry(){if(!this.parts.length)return null;let e=this.parts.some(e=>e.index)&&this.parts.some(e=>!e.index),t=e?this.parts.map(e=>e.index?e.toNonIndexed():e):this.parts,n=kf(t,!1);if(e)for(let e of t)e.dispose();for(let e of this.parts)e.dispose();return this.parts.length=0,n}mesh(e,t=!0,n=!0){let r=this.geometry();if(!r)return null;let i=new J(r,e);return i.castShadow=t,i.receiveShadow=n,i}};function Rf(e,t={}){let n=t.width??256,r=t.height??128,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(a){t.bg?(a.fillStyle=t.bg,a.fillRect(0,0,n,r)):a.clearRect(0,0,n,r),t.border&&(a.strokeStyle=t.border,a.lineWidth=Math.max(4,n*.02),a.strokeRect(a.lineWidth/2,a.lineWidth/2,n-a.lineWidth,r-a.lineWidth)),a.fillStyle=t.fg??`#111`,a.font=t.font??`bold ${Math.round(r*.42)}px "Noto Sans Gurmukhi", "Raavi", sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`;let i=e.split(`
`),o=r/(i.length+.4);i.forEach((e,t)=>a.fillText(e,n/2,r/2+(t-(i.length-1)/2)*o))}let o=new Bi(i);return o.colorSpace=Fe,o.anisotropy=4,o}function zf(e){e.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;if(n)for(let e of Array.isArray(n)?n:[n]){for(let t of Object.values(e))t instanceof kt&&t.dispose();e.dispose()}})}var Bf={id:`gurdwara`,x:-250,z:-145,halfX:13,halfZ:11,rotY:0},Vf={x:-200,z:-195,half:7.5,bohrX:-203,bohrZ:-190},Hf={x:-175,z:-140,towerHalf:3,ringOffset:4.5,deckHalf:4.2,deckHeight:11},Uf=[{id:`haveli-a`,x:-285,z:-152,halfX:9,halfZ:7,rotY:Math.PI/2},{id:`haveli-b`,x:-282,z:-212,halfX:9,halfZ:7,rotY:Math.PI/2},{id:`haveli-c`,x:-248,z:-228,halfX:8,halfZ:6.5,rotY:0},{id:`haveli-d`,x:-170,z:-228,halfX:8,halfZ:6.5,rotY:0},{id:`haveli-e`,x:-140,z:-198,halfX:8,halfZ:6.5,rotY:-Math.PI/2},{id:`haveli-f`,x:-145,z:-155,halfX:8,halfZ:6.5,rotY:-Math.PI/2},{id:`haveli-g`,x:-205,z:-150,halfX:7,halfZ:5.5,rotY:Math.PI}],Wf=[{id:`nri-1`,x:-108,z:-104,halfX:15,halfZ:13,rotY:-.74},{id:`nri-2`,x:-60,z:-8,halfX:15,halfZ:13,rotY:2.5}],Gf={id:`nehran-gurdwara`,x:-152,z:404,halfX:8,halfZ:7,rotY:0},Kf=[{id:`nehran-home-a`,x:-92,z:448,halfX:8,halfZ:6.5,rotY:-Math.PI/2},{id:`nehran-home-b`,x:-92,z:410,halfX:8,halfZ:6.5,rotY:-Math.PI/2},{id:`nehran-home-c`,x:-140,z:380,halfX:8,halfZ:6.5,rotY:0},{id:`nehran-home-d`,x:-155,z:452,halfX:8,halfZ:6.5,rotY:Math.PI/2},{id:`nehran-home-e`,x:-170,z:455,halfX:8,halfZ:6.5,rotY:Math.PI/2}],qf=[{x:-106,z:476,halfX:3.2,halfZ:2.2,layers:4},{x:-106,z:485,halfX:3.2,halfZ:2,layers:3},{x:-99,z:480.5,halfX:1.8,halfZ:4.6,layers:5}],Jf={x:-128,z:475,halfX:1.7,halfZ:4.2,cabinX:-128,cabinZ:486.5},Yf={id:`nri-3`,x:340,z:-445,halfX:12,halfZ:10,rotY:Math.PI},Xf=[{id:`mud-a`,x:270,z:-452,halfX:6,halfZ:5,rotY:Math.PI/2},{id:`mud-b`,x:285,z:-495,halfX:7,halfZ:5,rotY:0},{id:`mud-c`,x:262,z:-482,halfX:6,halfZ:5,rotY:Math.PI/2},{id:`mud-d`,x:290,z:-520,halfX:7,halfZ:5,rotY:0}],Zf={id:`dispensary`,x:Nu.x,z:Nu.z,halfX:Nu.halfX,halfZ:Nu.halfZ,rotY:0};Ru.x,Ru.z,Ru.halfX,Ru.halfZ;var Qf={x:-9.5,z:-3.5,scale:1.15};function $f(e,t,n,r){let i=e-n.x,a=t-n.z,o=Math.cos(n.rotY),s=Math.sin(n.rotY),c=i*o-a*s,l=i*s+a*o;return Math.abs(c)<n.halfX+r&&Math.abs(l)<n.halfZ+r}function ep(e,t,n=0){for(let r of zu)if(Math.abs(e-r.x)<9.5+n&&Math.abs(t-r.z)<9.5+n)return!0;for(let r of Wf)if(!(Math.abs(e-r.x)>24+n||Math.abs(t-r.z)>24+n)&&$f(e,t,r,n))return!0;if(Math.abs(e-Ru.x)<Ru.halfX+n&&Math.abs(t-Ru.z)<Ru.halfZ+n)return!0;if(Math.hypot(e-wu.x,t-wu.z)<wu.phirniRadius+6){if($f(e,t,Bf,n+1)||Math.abs(e-Vf.x)<Vf.half+n&&Math.abs(t-Vf.z)<Vf.half+n)return!0;let r=Hf.ringOffset+2+n;if(Math.abs(e-Hf.x)<r&&Math.abs(t-Hf.z)<r)return!0;for(let r of Uf)if($f(e,t,r,n+1))return!0}if(Math.hypot(e-Tu.x,t-Tu.z)<Tu.phirniRadius+6){if(_d(e,t,n+1)||$f(e,t,Gf,n+1))return!0;for(let r of Kf)if($f(e,t,r,n+1))return!0}if(vd(e,t)<ju.rimRadius+1.5+n)return!0;if(Math.hypot(e-Eu.x,t-Eu.z)<Eu.phirniRadius+6){if(Math.hypot(e-Mu.x,t-Mu.z)<Mu.radius+1.5+n||$f(e,t,Zf,n+1)||$f(e,t,Yf,n+1))return!0;for(let r of Xf)if($f(e,t,r,n+1))return!0}return gd(e,t)<1.6+n*.1}var tp={uTime:{value:0},uPlayer:{value:new W(0,-999,0)}};function np(e){let t=new fa({vertexColors:!0,side:2});return t.onBeforeCompile=t=>{t.uniforms.uTime=tp.uTime,t.uniforms.uPlayer=tp.uPlayer,t.uniforms.uAmp={value:e.amp},t.uniforms.uHeight={value:e.height},t.uniforms.uShimmer={value:e.shimmer},t.uniforms.uPush={value:e.push},t.uniforms.uFlutter={value:e.flutter??0},t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime; uniform vec3 uPlayer; uniform float uAmp; uniform float uHeight; uniform float uPush; uniform float uFlutter;
varying float vWave;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_INSTANCING
  vec3 iPos = instanceMatrix[3].xyz;
  vec2 iAx = instanceMatrix[0].xz;
#else
  vec3 iPos = vec3(0.0);
  vec2 iAx = vec2(1.0, 0.0);
#endif
  float sxs = max(length(iAx), 1e-4);
  vec2 csn = iAx / sxs;                       // (cos yaw, -sin yaw) of the instance
  float hN = clamp(position.y / uHeight, 0.0, 1.0);
  float bendW = hN * hN;                      // tips move, roots stay planted
  // Travelling swell across the whole field + slower gust + fast flutter = shimmering emerald sea.
  float swell = sin(uTime * 1.25 + iPos.x * 0.045 + iPos.z * 0.032);
  float gust = sin(uTime * 0.72 - iPos.x * 0.012 + iPos.z * 0.019 + 1.7);
  float flut = sin(uTime * (3.0 + uFlutter) + iPos.x * 0.9 + iPos.z * 0.8 + position.x * 7.0);
  vWave = swell * 0.65 + gust * 0.35;
  vec2 wv = vec2(swell * 0.75 + gust * 0.25 + flut * 0.12 * (0.4 + uFlutter), gust * 0.6 + swell * 0.2 + flut * 0.08) * uAmp * bendW;
  // Crops bow away from the player / driven vehicle.
  vec2 away = iPos.xz - uPlayer.xz;
  float pd = length(away) + 1e-4;
  float push = (1.0 - smoothstep(0.35, 2.4, pd)) * uPush * bendW;
  wv += away / pd * push;
  // world-space displacement → instance-local (inverse of the instance yaw)
  transformed.x += (csn.x * wv.x + csn.y * wv.y) / sxs;
  transformed.z += (-csn.y * wv.x + csn.x * wv.y) / sxs;
  transformed.y -= push * uHeight * 0.18;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vWave; uniform float uShimmer;`).replace(`#include <color_fragment>`,`#include <color_fragment>
  diffuseColor.rgb *= 1.0 + vWave * uShimmer;`)},t.customProgramCacheKey=()=>`pind-wind-v1`,t}var rp=class{pos=[];col=[];nor=[];vert(e,t,n,r){this.pos.push(e,t,n),this.col.push(r.r,r.g,r.b),this.nor.push(0,1,0)}tri(e,t,n,r,i,a){this.vert(e[0],e[1],e[2],r),this.vert(t[0],t[1],t[2],i),this.vert(n[0],n[1],n[2],a)}geometry(){let e=new dr;return e.setAttribute(`position`,new q(this.pos,3)),e.setAttribute(`color`,new q(this.col,3)),e.setAttribute(`normal`,new q(this.nor,3)),e}};function ip(e,t){let n=[],r=[],i=[],a=[],o=Math.sin(t.yaw),s=Math.cos(t.yaw),c=Math.cos(t.yaw),l=-Math.sin(t.yaw);for(let e=0;e<=t.segs;e++){let u=e/t.segs,d=t.out*u*u*(.6+.4*u),f=t.bx+o*d,p=(t.by??0)+t.up*u-(t.drop??0)*u*u,m=t.bz+s*d,h=t.width*.5*(1-.82*u*u);n.push([f,p,m]),r.push([f-c*h,p,m-l*h]),i.push([f+c*h,p,m+l*h]),a.push(new K().copy(t.c0).lerp(t.c1,u))}for(let n=0;n<t.segs;n++)e.tri(r[n],i[n],i[n+1],a[n],a[n],a[n+1]),e.tri(r[n],i[n+1],r[n+1],a[n],a[n+1],a[n+1]);return n}function ap(e,t,n,r,i){for(let a=0;a<6;a++){let o=a/6*Fl,s=(a+1)/6*Fl;e.tri([t[0],t[1]+.015,t[2]],[t[0]+Math.cos(o)*n,t[1],t[2]+Math.sin(o)*n],[t[0]+Math.cos(s)*n,t[1],t[2]+Math.sin(s)*n],r,i,i)}}function op(e,t,n,r,i,a,o){for(let s=0;s<2;s++){let c=i+Math.PI/2*s,l=Math.cos(c)*r,u=-Math.sin(c)*r,d=[t[0],t[1]+n*.45,t[2]];e.tri([t[0]-l,t[1],t[2]-u],[t[0]+l,t[1],t[2]+u],d,a,a,o),e.tri([d[0]-l,d[1],d[2]-u],[d[0]+l,d[1],d[2]+u],[t[0],t[1]+n,t[2]],o,o,a)}}var sp=e=>new K(e);function cp(){let e=Hl(11),t=new rp;for(let n=0;n<7;n++){let r=e()*Fl,i=e()*.2,a=.7+e()*.28,o=ip(t,{bx:Math.cos(r)*i,bz:Math.sin(r)*i,up:a,out:.08+e()*.2,width:.075,yaw:e()*Fl,c0:sp(`#2a7a2c`),c1:sp(`#72c944`),segs:2});n%2==0&&op(t,o[o.length-1],.14,.03,e()*Fl,sp(`#9dbd47`),sp(`#d8cf6a`))}return t.geometry()}function lp(){let e=Hl(23),t=new rp;for(let n=0;n<5;n++){let n=e()*Fl,r=e()*.18,i=1+e()*.3,a=ip(t,{bx:Math.cos(n)*r,bz:Math.sin(n)*r,up:i,out:.05+e()*.16,width:.045,yaw:e()*Fl,c0:sp(`#2f7a2a`),c1:sp(`#5ba536`),segs:2});ap(t,a[a.length-1],.14,sp(`#ffb300`),sp(`#ffe433`));let o=a[1];ap(t,[o[0]+.05,o[1]+.12,o[2]],.09,sp(`#ffbf0f`),sp(`#ffe94a`))}return t.geometry()}function up(){let e=Hl(37),t=new rp;for(let n=0;n<9;n++){let n=e()*Fl,r=e()*.14;ip(t,{bx:Math.cos(n)*r,bz:Math.sin(n)*r,up:.3+e()*.16,out:.12+e()*.18,drop:.04,width:.05,yaw:n+(e()-.5),c0:sp(`#3a8f3c`),c1:sp(`#a8e86e`),segs:2})}return t.geometry()}function dp(){let e=Hl(53),t=new rp,n=[];for(let t=0;t<3;t++){let r=t/3*Fl+e();n.push({x:Math.cos(r)*.2,z:Math.sin(r)*.2,h:3.4+e()*.6})}for(let r of n){let n=[0,r.h*.5,r.h],i=[sp(`#9db340`),sp(`#6e8b2e`),sp(`#c2cf62`)],a=[.06,.052,.04];for(let e=0;e<2;e++)for(let o=0;o<4;o++){let s=o/4*Fl+Math.PI/4,c=(o+1)/4*Fl+Math.PI/4,l=(e,t)=>[r.x+Math.cos(t)*a[e],n[e],r.z+Math.sin(t)*a[e]];t.tri(l(e,s),l(e,c),l(e+1,c),i[e],i[e],i[e+1]),t.tri(l(e,s),l(e+1,c),l(e+1,s),i[e],i[e+1],i[e+1])}for(let n=0;n<3;n++)ip(t,{bx:r.x,by:r.h*(.5+.17*n+e()*.08),bz:r.z,up:.45,out:1.1+e()*.6,drop:1+e()*.5,width:.17,yaw:e()*Fl,c0:sp(`#3c7d27`),c1:sp(`#86b83c`),segs:2})}return t.geometry()}var fp={wheat:0,mustard:1,paddy:2,sugarcane:3},pp=4,mp=[3e4,22e3,22e3,14e3],hp=[1,.92,.78,.6],gp=[[.85,1.2],[.9,1.15],[.85,1.2],[.85,1.15]],_p=40,vp=Math.round(1600/_p),yp=[1,1.8,3.1],bp=[1,1.55,2.4],xp=[60,130,235],Sp=Math.ceil((xp[2]+30)/_p),Cp=340,wp=(e,t)=>`${e},${t}`,Tp=e=>-800+e*_p,Ep=e=>Math.min(vp-1,Math.max(0,Math.floor((e+800)/_p)));function Dp(e,t){let n=ku(e,t);return n.r<n.pind.phirniRadius+n.pind.phirniHalfWidth+1.5||_d(e,t,2)||vd(e,t)<ju.rimRadius+1.5?!0:gd(e,t)<1.9}function Op(e){let t=e.row++,n=_p/e.n,r=Tp(e.tx),i=Tp(e.tz),a=bp[e.lod];for(let o=0;o<e.n;o++){let s=Ul(e.tx*131+o,e.tz*137+t,100+e.lod),c=Ul(e.tx*149+o,e.tz*151+t,200+e.lod),l=r+(o+.15+.7*s)*n,u=i+(t+.15+.7*c)*n;if(Math.abs(l)>794||Math.abs(u)>794)continue;let d=fp[xd(l,u).surface];if(d===void 0||Ul(e.tx*163+o,e.tz*167+t,300)>hp[d]||Dp(l,u)||ep(l,u,1))continue;let f=tf(l,u)-.02,p=Ul(e.tx*173+o,e.tz*179+t,400)*Fl,m=gp[d],h=m[0]+(m[1]-m[0])*Ul(e.tx*181+o,e.tz*191+t,500),g=Gl(l/55,u/55,2,61),_=a*(.9+.2*Ul(o,t,600)),v=Math.cos(p),y=Math.sin(p),b=h*(1+.12*g);e.mats[d].push(_*v,0,-_*y,0,0,b,0,0,_*y,0,_*v,0,l,f,u,1);let x=.88+.22*Ul(e.tx*197+o,e.tz*199+t,700),S=g*.1;e.cols[d].push(x+S,x,x-S*1.3)}}var kp=(e,t,n)=>({rx:n,ry:Math.atan2(e,t)});function Ap(){let e=new Q,t=new Q,n=Hl(71);e.cyl(.14,.26,3.2,`#8b7e6b`,0,1.6,0,7),e.cyl(.07,.14,13,`#d9d3c1`,0,9.5,0,7,0,0,0,`#f1ede1`);for(let e=0;e<7;e++){let r=n()*Fl,i=9+n()*7.5,a=n()*.8;t.blob(.9+n()*.5,[`#7a9a5a`,`#6a8c52`,`#8aa866`][e%3],Math.cos(r)*a,i,Math.sin(r)*a,.95,1.9,.95,0)}return{bark:e.geometry(),leaf:t.geometry(),trunkR:.3,height:18,wind:{amp:.5,height:18,shimmer:.05,push:0}}}function jp(){let e=new Q,t=new Q,n=Hl(9001),r=[`#6f5a43`,`#7a6248`,`#5f4c38`];e.cyl(.7,1.05,4.6,`#6f5a43`,0,2.3,0,12);for(let t=0;t<7;t++){let i=t/7*Fl+n()*.3,a=Math.cos(i),o=Math.sin(i),s=kp(a,o,1);e.cyl(.14,.34,3,r[t%3],a*1.1,.8,o*1.1,6,s.rx,0,s.ry)}let i=[];for(let e=0;e<8;e++){let t=e/8*Fl+n()*.4;i.push({dx:Math.cos(t),dz:Math.sin(t),len:5.5+n()*3})}for(let t of i){let i=1.1+n()*.2,a=kp(t.dx,t.dz,i),o=t.len/2;e.cyl(.16,.36,t.len,r[Math.floor(n()*3)],t.dx*Math.sin(i)*o,4.2+Math.cos(i)*o,t.dz*Math.sin(i)*o,7,a.rx,0,a.ry)}let a=[`#2f6b2c`,`#3e7d33`,`#4c8f3a`,`#356f30`];for(let e=0;e<20;e++){let r=n()*Fl,i=Math.sqrt(n())*7.2,o=8.2-i*.16+n()*1.6;t.blob(2.6+n()*1.8,a[e%4],Math.cos(r)*i,o,Math.sin(r)*i,1,.68,1,1)}t.blob(4.2,`#3b7a33`,0,9,0,1.1,.7,1.1,1);for(let t=0;t<30;t++){let r=n()*Fl,i=2.4+n()*5.4,a=7-i*.16,o=-.6,s=a-o,c=t%4==0?.16+n()*.08:.04+n()*.03;e.cyl(c*.55,c,s,`#7a6246`,Math.cos(r)*i,o+s/2,Math.sin(r)*i,5)}return{bark:e.geometry(),leaf:t.geometry(),trunkR:1,height:12,wind:{amp:.35,height:12,shimmer:.06,push:0}}}function Mp(){let e=new Q,t=new Q,n=Hl(555);e.cyl(.26,.5,5.2,`#9a8f80`,0,2.6,0,8);for(let t=0;t<5;t++){let r=t/5*Fl+n(),i=kp(Math.cos(r),Math.sin(r),.7);e.cyl(.1,.22,4,`#8f8473`,Math.cos(r)*1,6.4,Math.sin(r)*1,6,i.rx,0,i.ry)}let r=[`#58a83f`,`#74c04a`,`#8fd45a`,`#63b244`];for(let e=0;e<11;e++){let i=n()*Fl,a=Math.sqrt(n())*4.4;t.blob(1.9+n()*1.2,r[e%4],Math.cos(i)*a,7.4+n()*2.8,Math.sin(i)*a,1,.85,1,1)}return{bark:e.geometry(),leaf:t.geometry(),trunkR:.55,height:11,wind:{amp:.4,height:11,shimmer:.12,push:0,flutter:4}}}function Np(){let e=new Q,t=new Q,n=Hl(808);e.cyl(.13,.28,4.4,`#5a4636`,0,2.2,0,7);let r=[`#2f6a2f`,`#3b7a35`,`#2a5f2c`];for(let e=0;e<6;e++){let i=n()*Fl,a=n()*1.8;t.blob(1.5+n()*.8,r[e%3],Math.cos(i)*a,5.3+n()*1.6,Math.sin(i)*a,1,.9,1,1)}return{bark:e.geometry(),leaf:t.geometry(),trunkR:.3,height:8,wind:{amp:.25,height:8,shimmer:.07,push:0}}}function Pp(){let e=new Q,t=new Q,n=Hl(909);e.cyl(.11,.24,3.4,`#4a3a2c`,0,1.7,0,6);for(let t=0;t<3;t++){let r=t/3*Fl+n(),i=kp(Math.cos(r),Math.sin(r),.8);e.cyl(.05,.12,2.2,`#4a3a2c`,Math.cos(r)*.5,3.8,Math.sin(r)*.5,5,i.rx,0,i.ry)}let r=[`#6f8433`,`#7e9440`,`#667c2e`];for(let e=0;e<5;e++){let i=n()*Fl,a=n()*1.9;t.blob(1.5+n()*.6,r[e%3],Math.cos(i)*a,4.6+n()*.5,Math.sin(i)*a,1.3,.42,1.3,1)}return{bark:e.geometry(),leaf:t.geometry(),trunkR:.26,height:6.5,wind:{amp:.18,height:6.5,shimmer:.05,push:0}}}function Fp(){let e=new Q;e.cyl(1.45,1.65,2.1,`#d6ad49`,0,1.05,0,12,0,0,0,`#e2bd5a`),e.cyl(.08,1.45,2,`#cfa23f`,0,3.1,0,12,0,0,0,`#e8c768`),e.cyl(.06,.1,.55,`#8a6a2a`,0,4.3,0,5);for(let t=0;t<10;t++){let n=t/10*Fl;e.box(.5,.18,.35,`#b98d33`,Math.cos(n)*1.62,1.02+t%3*.55,Math.sin(n)*1.62,-n+Math.PI/2)}return e.geometry()}var Ip=[`link_road`,`dirt_track`,`gali`],Lp=[`sua`],Rp=new Set([`verge`,`wheat`,`mustard`,`paddy`,`sugarcane`,`watt`]);function zp(e,t,n,r=!1){if(Math.abs(e)>790||Math.abs(t)>790)return!1;let i=xd(e,t);if(!Rp.has(i.surface)||Math.abs(e-560)<13.5+n||!r&&Math.abs(yu(e,t).d)<mu.outerEnd+1||hd(e,t)<2.4||gd(e,t)<2.4)return!1;for(let n of Du)if(Math.hypot(e-n.x,t-n.z)<n.phirniRadius+5)return!1;if(vd(e,t)<ju.rimRadius+4)return!1;let a=td(e,t,Ip,0);if(a.path&&a.dist<a.path.halfWidth+n)return!1;let o=td(e,t,Lp,0);return o.path&&o.dist<o.path.halfWidth+1.4+n?!1:!ep(e,t,2)}function Bp(e,t,n){let r=e.bothSides?[-1,1]:[1],i=(r,i,a,o)=>{let s=(Ul(Math.round(r),Math.round(i),1)-.5)*1.2,c=(Ul(Math.round(i),Math.round(r),2)-.5)*1.2,l=r+s,u=i+c,d=e.pathId===`canal`;if(!zp(l,u,1.4,d)||d&&Math.abs(yu(l,u).d)<mu.patriEnd+1)return;let f=Ul(a*7+o*3,Math.round(l),3);n.push({species:t,x:l,z:u,scale:.85+.4*f,rot:f*Fl})};if(e.pathId===`canal`){for(let t of r){let n=0;for(let r=-800+(t>0?4:4+e.spacing/2);r<796;){let a=yu(r,hu(r));i(a.x-a.tz*e.offset*t,a.z+a.tx*e.offset*t,n++,t),r+=e.spacing/Math.sqrt(1+gu(r)**2)}}return}let a=Zu.find(t=>t.id===e.pathId);if(a)for(let t of r){let n=t>0?0:e.spacing/2,r=0;for(let o=0;o<a.points.length-1;o++){let s=a.points[o],c=a.points[o+1],l=Math.hypot(c.x-s.x,c.z-s.z);if(l<.001)continue;let u=(c.x-s.x)/l,d=(c.z-s.z)/l,f=n;for(let a=n;a<l;a+=e.spacing)i(s.x+u*a-d*e.offset*t,s.z+d*a+u*e.offset*t,r++,t),f=a+e.spacing;n=f-l}}}function Vp(e){let t=!1;return e.traverse(e=>{if(t||!(e instanceof J)||!e.name.startsWith(`paddy-water`))return;let n=e.material;n.onBeforeCompile=e=>{e.uniforms.uTime=tp.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWP;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vWP; uniform float uTime;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
  float rp1 = sin(vWP.x * 2.3 + uTime * 1.4) + sin(vWP.z * 1.9 - uTime * 1.1);
  float rp2 = sin((vWP.x + vWP.z) * 3.7 + uTime * 2.2);
  normal = normalize(normal + vec3(rp1 * 0.03, 0.0, rp2 * 0.03 + rp1 * 0.012));`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += vec3(0.9, 0.96, 1.0) * pow(max(0.0, rp2 * 0.5 + 0.5), 28.0) * 0.16;`)},n.customProgramCacheKey=()=>`pind-paddy-water-v1`,n.needsUpdate=!0,t=!0}),t}function Hp(e){let t=new G;t.name=`crops-and-foliage`;let n=[cp(),lp(),up(),dp()],r=[np({amp:.16,height:1,shimmer:.16,push:.55}),np({amp:.13,height:1.3,shimmer:.1,push:.5}),np({amp:.05,height:.5,shimmer:.08,push:.3}),np({amp:.2,height:4,shimmer:.06,push:.35})],i=[];for(let e=0;e<pp;e++){let a=new fi(n[e],r[e],mp[e]);a.instanceMatrix.setUsage(Be),a.instanceColor=new ii(new Float32Array(mp[e]*3),3),a.instanceColor.setUsage(Be),a.count=0,a.frustumCulled=!1,a.castShadow=!1,a.receiveShadow=!1,a.name=[`kanak`,`sarson`,`jhona`,`kamad`][e],t.add(a),i.push(a)}let a=new Map,o=new Map,s=[],c=[],l=-999,u=-999,d=!1,f=-10,p=0,m=new W(0,0,4),h=e=>{let t=`${wp(e.tx,e.tz)}:${e.lod}`,n=o.get(t);return n||(n={key:t,tx:e.tx,tz:e.tz,lod:e.lod,row:0,n:Math.max(4,Math.round(_p/yp[e.lod])),rows:0,mats:[[],[],[],[]],cols:[[],[],[],[]]},n.rows=n.n,o.set(t,n)),n},g=e=>{let t={mats:e.mats.map(e=>new Float32Array(e)),cols:e.cols.map(e=>new Float32Array(e)),counts:e.mats.map(e=>e.length/16)},n=wp(e.tx,e.tz),r=a.get(n);r||a.set(n,r=[void 0,void 0,void 0]),r[e.lod]=t,o.delete(e.key),d=!0},_=(e,t)=>{let n=Ep(e),r=Ep(t);l=n,u=r,s=[];for(let i=-Sp;i<=Sp;i++)for(let a=-Sp;a<=Sp;a++){let o=n+a,c=r+i;if(o<0||c<0||o>=vp||c>=vp)continue;let l=Math.hypot(Tp(o)+_p/2-e,Tp(c)+_p/2-t);if(l>xp[2]+30)continue;let u=l<xp[0]?0:l<xp[1]?1:2;s.push({tx:o,tz:c,lod:u,d:l})}s.sort((e,t)=>e.d-t.d),c=s.filter(e=>!a.get(wp(e.tx,e.tz))?.[e.lod]);for(let[n,r]of a){let[r,i]=n.split(`,`).map(Number);Math.hypot(Tp(r)+_p/2-e,Tp(i)+_p/2-t)>Cp&&a.delete(n)}for(let[n,r]of o)Math.hypot(Tp(r.tx)+_p/2-e,Tp(r.tz)+_p/2-t)>Cp&&o.delete(n);d=!0},v=e=>{let t=performance.now();for(;c.length;){let n=c[0];if(a.get(wp(n.tx,n.tz))?.[n.lod]){c.shift();continue}let r=h(n);for(;r.row<r.rows;)if(Op(r),performance.now()-t>e)return!0;if(g(r),c.shift(),performance.now()-t>e)return c.length>0}return!1},y=()=>{d=!1,p=0;for(let e=0;e<pp;e++){let t=i[e],n=t.instanceMatrix.array,r=t.instanceColor.array,o=mp[e],c=0;for(let t of s){let i=a.get(wp(t.tx,t.tz));if(!i)continue;let s=i[t.lod]??i[0]??i[1]??i[2];if(!s)continue;let l=Math.min(s.counts[e],o-c);if(!(l<=0)&&(n.set(l===s.counts[e]?s.mats[e]:s.mats[e].subarray(0,l*16),c*16),r.set(l===s.counts[e]?s.cols[e]:s.cols[e].subarray(0,l*3),c*3),c+=l,c>=o))break}t.count=c,t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,p+=c}},b={safeda:Ap(),bohr:jp(),peepal:Mp(),tahli:Np(),kikar:Pp()},x=[],S=e=>e===`safeda`||e===`bohr`||e===`tahli`||e===`kikar`?e:`tahli`;for(let e of nd)Bp(e,S(e.species),x);x.push({species:`bohr`,x:Qf.x,z:Qf.z,scale:Qf.scale,rot:.6});for(let e of rd)x.push({species:S(e.species),x:e.x,z:e.z,scale:e.scale,rot:Ul(e.x|0,e.z|0,4)*Fl});x.push({species:`peepal`,x:253,z:229,scale:1.2,rot:1}),x.push({species:`bohr`,x:-373,z:249,scale:1.2,rot:2}),x.push({species:`peepal`,x:173,z:-329,scale:1.25,rot:3});for(let[e,t,n]of[[-232,-198,1.1],[-190,-168,1],[-258,-192,1.15],[-236,-124,1],[-128,-166,1.05],[-176,-210,1.1],[-128,418,1],[-108,396,1.05],[-178,418,1],[318,-488,1.05],[303,-506,1]])x.push({species:`peepal`,x:e,z:t,scale:n,rot:Ul(e,t,8)*Fl});for(let e=0;e<vp;e++)for(let t=0;t<vp;t++){if(Ul(t,e,4242)>.045)continue;let n=Tp(t)+.2,r=Tp(e)+.2;zp(n,r,2)&&x.push({species:Ul(t,e,4243)<.55?`kikar`:`tahli`,x:n,z:r,scale:.9+.4*Ul(t,e,4244),rot:Ul(t,e,4245)*Fl})}let C=[],w=new Ft,T=new dt,E=new W,D=new W,O=new W(0,1,0),k=new G;k.name=`trees`;let A=0;for(let e of Object.keys(b)){let t=x.filter(t=>t.species===e);if(!t.length)continue;let n=b[e],r=new fi(n.bark,new fa({vertexColors:!0}),t.length),i=new fi(n.leaf,np(n.wind),t.length);t.forEach((e,t)=>{let a=tf(e.x,e.z)-.15;T.setFromAxisAngle(O,e.rot),w.compose(E.set(e.x,a,e.z),T,D.set(e.scale,e.scale,e.scale)),r.setMatrixAt(t,w),i.setMatrixAt(t,w),C.push(Nd({x:e.x,z:e.z,radius:n.trunkR*e.scale,minY:a-.5,maxY:a+n.height*e.scale,tag:`tree`}).id)});for(let e of[r,i])e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1,e.instanceMatrix.needsUpdate=!0,k.add(e);r.name=`${e}-bark`,i.name=`${e}-leaves`,A+=t.length}t.add(k);let j=[];for(let e of zu)j.push({x:e.x+12,z:e.z-9,s:1,r:.3},{x:e.x+15.5,z:e.z-4,s:.85,r:1.1});for(let e of[-35,12,160,205,250]){let t=e*Math.PI/180;j.push({x:wu.x+Math.cos(t)*112,z:wu.z+Math.sin(t)*112,s:1.05,r:t})}for(let e of Du.slice(1))for(let t of[-60,70,140,230]){let n=t*Math.PI/180,r=e.phirniRadius+16;j.push({x:e.x+Math.cos(n)*r,z:e.z+Math.sin(n)*r,s:1,r:n})}for(let e=0;e<vp;e++)for(let t=0;t<vp;t++)Ul(t,e,5151)>.012||j.push({x:Tp(t)+3.2,z:Tp(e)+3.2,s:.85+.3*Ul(t,e,5152),r:Ul(t,e,5153)*Fl});let M=j.filter(e=>zp(e.x,e.z,3.2,!1)),N=new fi(Fp(),new fa({vertexColors:!0}),Math.max(1,M.length)),P=new K;M.forEach((e,t)=>{let n=tf(e.x,e.z)-.05;T.setFromAxisAngle(O,e.r),w.compose(E.set(e.x,n,e.z),T,D.set(e.s,e.s,e.s)),N.setMatrixAt(t,w),N.setColorAt(t,P.setScalar(.88+.2*Ul(t,9,5154))),C.push(Nd({x:e.x,z:e.z,radius:1.55*e.s,minY:n-.3,maxY:n+4.4*e.s,tag:`prop`}).id)}),N.count=M.length,N.castShadow=!0,N.receiveShadow=!0,N.frustumCulled=!1,N.name=`turi-de-kup`,t.add(N),e.add(t),_(m.x,m.z),v(900),y();let ee=Vp(e),F=0,I=!1;return{update(t,n){if(I)return;tp.uTime.value=t,tp.uPlayer.value.copy(n),m.copy(n),!ee&&F++<240&&(ee=Vp(e));let r=Ep(n.x),i=Ep(n.z);(r!==l||i!==u)&&_(n.x,n.z),c.length&&v(2.5),d&&t-f>.2&&(f=t,y())},dispose(){I=!0,e.remove(t);for(let e of C)Id(e);t.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;n&&!Array.isArray(n)&&n.dispose()});for(let e of Object.values(b))e.bark.dispose(),e.leaf.dispose()},stats(){return{instances:p,trees:A,haystacks:M.length,pendingTiles:c.length}}}}var Up=[];function Wp(e,t,n){let r=ql(t,n,e.rotY);return{x:e.x+r.x,z:e.z+r.z}}function Gp(e,t,n,r,i,a,o,s,c=!1,l=0){let u=Wp(e,t,n);Up.push(Md({cx:u.x,cz:u.z,halfX:r,halfZ:i,rotY:e.rotY+l,minY:e.y+a,maxY:e.y+o,walkableTop:c,tag:s}).id)}function Kp(e,t,n,r,i,a,o){let s=Wp(e,t,n);Up.push(Nd({x:s.x,z:s.z,radius:r,minY:e.y+i,maxY:e.y+a,tag:o}).id)}function qp(){let t=document.createElement(`canvas`);t.width=128,t.height=128;let n=t.getContext(`2d`);if(n){n.fillStyle=`#d6c7a6`,n.fillRect(0,0,128,128);for(let e=0;e<8;e++)for(let t=0;t<4;t++){let r=e%2?16:0,i=Ul(e,t,9),a=168+Math.floor(i*30);n.fillStyle=`rgb(${a},${Math.floor(a*.42)},${Math.floor(a*.28)})`,n.fillRect(t*32+r+1.5,e*16+1.5,29,13)}}let r=new Bi(t);return r.wrapS=r.wrapT=e,r.colorSpace=Fe,r.anisotropy=8,r}function Jp(){let e=document.createElement(`canvas`);e.width=256,e.height=128;let t=e.getContext(`2d`);if(t){let e=t.createLinearGradient(0,0,256,128);e.addColorStop(0,`#1a3f9a`),e.addColorStop(1,`#0d2468`),t.fillStyle=e,t.fillRect(0,0,256,128),t.strokeStyle=`rgba(190,215,255,0.55)`,t.lineWidth=1.5;for(let e=0;e<=12;e++)t.beginPath(),t.moveTo(e/12*256,0),t.lineTo(e/12*256,128),t.stroke();for(let e=0;e<=6;e++)t.beginPath(),t.moveTo(0,e/6*128),t.lineTo(256,e/6*128),t.stroke();t.strokeStyle=`#c9d4e6`,t.lineWidth=5,t.strokeRect(2,2,252,124)}let n=new Bi(e);return n.colorSpace=Fe,n.anisotropy=8,n}function Yp(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,`rgba(255,236,170,1)`),e.addColorStop(.25,`rgba(255,200,110,0.55)`),e.addColorStop(1,`rgba(255,170,60,0)`),t.fillStyle=e,t.fillRect(0,0,64,64)}return new Bi(e)}function Xp(){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`);if(t){let e=t.createRadialGradient(16,16,0,16,16,16);e.addColorStop(0,`rgba(255,255,255,1)`),e.addColorStop(.6,`rgba(255,255,255,0.5)`),e.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=e,t.fillRect(0,0,32,32)}return new Bi(e)}function Zp(e,t,n,r,i=!0,a=0){let o=e.matte,s=Math.cos(r),c=Math.sin(r),l=(e,r)=>[t+e*s+r*c,n-e*c+r*s],u=`#7a4a24`;for(let[e,t]of[[-.46,-.9],[.46,-.9],[-.46,.9],[.46,.9]]){let[n,i]=l(e,t);o.box(.1,.4,.1,u,n,a+.2,i,r)}for(let e of[-.5,.5]){let[t,n]=l(e,0);o.box(.08,.08,1.95,u,t,a+.4,n,r)}for(let e of[-.95,.95]){let[t,n]=l(0,e);o.box(1.08,.08,.08,u,t,a+.4,n,r)}for(let e=0;e<9;e++){let[t,n]=l(-.4+e*.1,0);o.box(.07,.03,1.85,e%3==1?`#b03a2e`:`#d9bf86`,t,a+.4,n,r)}for(let e of[-.35,.35]){let[t,n]=l(0,e);o.box(.95,.025,.06,`#8a5a30`,t,a+.42,n,r)}i&&Gp(e.f,t,n,.55,1,a,a+.43,`prop`,!0,r)}function Qp(e,t,n){let r=e.matte;r.cyl(.3,.34,.5,`#9a5a3a`,t,.25,n,8),r.blob(.3,`#b9643c`,t,.8,n,1,1.05,1,1),r.cyl(.14,.18,.16,`#a85a36`,t,1.12,n,8),r.cyl(.17,.14,.05,`#7f3f26`,t,1.2,n,8)}function $p(e,t,n,r,i=`#ffe2a0`,a=.09){e.glow.blob(a,i,t,n,r,1,1,1,0)}function em(e){Up.length=0;let t=new G;t.name=`structures`;let n=[],r={value:0},i=new fa({vertexColors:!0}),a=new da({vertexColors:!0,specular:8943445,shininess:55}),o=new Ur({vertexColors:!0,color:new K(.45,.45,.45)}),s=qp(),c=Jp(),l=Yp(),u=Xp();n.push(s,c,l,u);let d=new Sr({map:l,transparent:!0,depthWrite:!1,blending:2,opacity:0}),f=[i,a,o,d],p=(e,n,r=0,i)=>{let a=i??tf(e,n),o=new G;return o.position.set(e,a,n),o.rotation.y=r,t.add(o),{f:{x:e,y:a,z:n,rotY:r},g:o,matte:new Q,shiny:new Q,glow:new Q}},m=e=>{let t=e.matte.mesh(i);t&&e.g.add(t);let n=e.shiny.mesh(a);n&&e.g.add(n);let r=e.glow.mesh(o,!1,!1);r&&e.g.add(r)},h=[],g=(e,n,r,i=38,a=28,o=16762490,s=2.4)=>{h.push({pos:new W(e,n,r),color:o,intensity:i,distance:a});let c=new Ir(d);c.position.set(e,n,r),c.scale.setScalar(s),t.add(c)},_=[],v=[];t.add((()=>{let e=[],t=[],n=[],i=mu.waterHalfWidth+.9,a=0,o=0,s=null;for(let r=-820;r<=820;r+=3){let c=yu(r,hu(r)),l=_u(c.x)+.03,u=-c.tz,d=c.tx;if(s&&(o+=Math.hypot(c.x-s.x,c.z-s.z)),s={x:c.x,z:c.z},e.push(c.x-u*i,l,c.z-d*i,c.x+u*i,l,c.z+d*i),t.push(0,o/6,1,o/6),a>0){let e=(a-1)*2;n.push(e,e+1,e+2,e+1,e+3,e+2)}a++}let c=new dr;c.setAttribute(`position`,new q(e,3)),c.setAttribute(`uv`,new q(t,2));let l=new Float32Array(e.length/3*3);for(let e=1;e<l.length;e+=3)l[e]=1;c.setAttribute(`normal`,new Zn(l,3)),c.setIndex(n);let u=new ua({color:`#2fb4ae`,roughness:.1,metalness:.05,transparent:!0,opacity:.88,side:2});u.onBeforeCompile=e=>{e.uniforms.uTime=r,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vFlow;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vFlow = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vFlow; uniform float uTime;`).replace(`#include <color_fragment>`,`#include <color_fragment>
  float edgeFoam = smoothstep(0.80, 1.0, abs(vFlow.x * 2.0 - 1.0));
  float fl1 = sin(vFlow.y * 6.0 - uTime * 2.2 + sin(vFlow.x * 9.0) * 1.5);
  float fl2 = sin(vFlow.y * 13.0 - uTime * 3.1 + vFlow.x * 7.0);
  // sunlit turquoise in the middle, paler & foamy where it laps the bricks
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.92, 0.88), 0.18 + 0.1 * fl1);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.88, 0.98, 0.95), edgeFoam * 0.5 + max(0.0, fl2) * 0.05);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
  normal = normalize(normal + vec3(fl1 * 0.05, 0.0, fl2 * 0.05));`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += vec3(0.8, 0.95, 1.0) * pow(max(0.0, fl2 * 0.5 + 0.5), 20.0) * 0.14;`)},u.customProgramCacheKey=()=>`pind-canal-water-v1`,f.push(u);let d=new J(c,u);return d.name=`nehar-flowing-water`,d.renderOrder=2,d.frustumCulled=!1,d})()),t.add((()=>{let e=[],t=[],n=[],r=[6.95,7.5,8,8.5,8.85,9.1];for(let i of[-1,1]){let a=e.length/3,o=0,s=0,c=null;for(let l=-810;l<=810;l+=4){let u=yu(l,hu(l));c&&(s+=Math.hypot(u.x-c.x,u.z-c.z)),c={x:u.x,z:u.z};let d=_u(u.x),f=-u.tz*i,p=u.tx*i;if(r.forEach((n,r)=>{let i=d-.45+(d+mu.bankRise-(d-.45))*Ll(mu.waterHalfWidth,mu.innerBankEnd,n)+.07;e.push(u.x+f*n,i,u.z+p*n),t.push(r*.45,s/2.4)}),o>0){let e=a+(o-1)*r.length,t=e+r.length;for(let i=0;i<r.length-1;i++)n.push(e+i,t+i,e+i+1,e+i+1,t+i,t+i+1)}o++}}let i=new dr;i.setAttribute(`position`,new q(e,3)),i.setAttribute(`uv`,new q(t,2)),i.setIndex(n),i.computeVertexNormals();let a=new fa({map:s,side:2,color:`#ffe9d6`});f.push(a);let o=new J(i,a);return o.name=`nehar-brick-embankment`,o.receiveShadow=!0,o.frustumCulled=!1,o})());let y=e=>{let n=new G;n.position.set(e.x,0,e.z),n.rotation.y=e.rotY,t.add(n);let r=e.halfLength,a=e.halfWidth,o=e.topY-e.baseY,s=t=>e.baseY+o*(1-t*t),c=t=>e.baseY-1.3+(o+.6)*(1-t*t),l=e.carries===`dirt_track`?new K(`#b8925a`):e.carries===`highway`?new K(`#3c3d42`):new K(`#4a4b50`),u=[],d=[],p=(e,t,n,r,i)=>{for(let a of[e,t,n,e,n,r])u.push(a[0],a[1],a[2]),d.push(i.r,i.g,i.b)},m=new K(`#b0583c`),h=new K(`#9d4b33`),g=new K(`#6d4030`);for(let e=0;e<36;e++){let t=-1+2*e/36,n=-1+2*(e+1)/36,i=t*r,o=n*r;p([-a,s(t),i],[a,s(t),i],[a,s(n),o],[-a,s(n),o],l);let u=e%2?m:h;for(let e of[-a,a])p([e,c(t),i],[e,s(t),i],[e,s(n),o],[e,c(n),o],u);p([-a,c(t),i],[a,c(t),i],[a,c(n),o],[-a,c(n),o],g)}let _=new dr;_.setAttribute(`position`,new q(u,3)),_.setAttribute(`color`,new q(d,3)),_.computeVertexNormals();let v=new fa({vertexColors:!0,side:2});f.push(v);let y=new J(_,v);y.castShadow=!0,y.receiveShadow=!0,n.add(y);let b=new Q,x=e.carries===`highway`?`#f3c622`:`#e8e4d8`;for(let t=0;t<36;t++){let n=-1+2*t/36,i=-1+2*(t+1)/36,o=n*r,c=i*r,l=c-o,u=-Math.atan2(s(i)-s(n),l),d=(s(n)+s(i))/2,f=(o+c)/2;for(let e of[-1,1])b.box(.34,.9,l*1.02,t%2?`#c4a98a`:`#b89c7c`,e*(a+.15),d+.45,f,0,u),b.box(.5,.12,l*1.02,`#ece4d0`,e*(a+.15),d+.94,f,0,u);if(e.carries!==`dirt_track`&&t%2==0&&b.box(.16,.02,l*.9,x,0,d+.012,f,0,u),e.carries===`highway`)for(let e of[-1,1])b.box(.14,.02,l,`#f3f3f3`,e*(a-.6),d+.012,f,0,u)}for(let t of[-1,1])for(let n of[-1,1]){let i=e.baseY;b.wall(.55,1.35,.55,`#f2eee4`,n*(a+.15),i-.2,t*(r-.3)),b.wall(.57,.3,.57,`#c1272d`,n*(a+.15),i+.55,t*(r-.3))}let S=b.mesh(i);S&&n.add(S)};for(let e of Su)y(e);if(!Fd().some(e=>e.tag===`bridge`))for(let e of Su)Pd({cx:e.x,cz:e.z,halfWidth:e.halfWidth,halfLength:e.halfLength,rotY:e.rotY,baseY:e.baseY,topY:e.topY,profile:`arch`,thickness:.7,surface:e.carries,tag:`bridge`,landmarkId:e.id});for(let e of Su)_.push({id:e.id,gurmukhi:e.gurmukhi,english:e.english,position:new W(e.x,e.topY,e.z),radius:14});let b=[],x=[],S=new da({map:c,specular:11193599,shininess:120,side:2});S.onBeforeCompile=e=>{e.uniforms.uTime=r,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  // A slow band of sky-glare sweeps across the glass so the array shimmers.
  totalEmissiveRadiance += vec3(0.35, 0.55, 0.95) * pow(max(0.0, sin(vMapUv.x * 5.0 + vMapUv.y * 2.5 - uTime * 1.1)), 10.0) * 0.5;`)},S.customProgramCacheKey=()=>`pind-solar-v1`,f.push(S);let C=new Ur({color:`#f4fbff`,transparent:!0,opacity:.6,depthWrite:!1});f.push(C);let w=[``,`੧`,`੨`,`੩`,`੪`],T=new da({color:`#46b9c4`,specular:16777215,shininess:90,transparent:!0,opacity:.9});f.push(T);for(let e of zu){let t=p(e.x,e.z,e.rotY),r=t.matte;if(r.wall(3.6,.6,3.6,`#a8553a`,0,-.4,0),r.wall(3.4,2.5999999999999996,3.4,`#f1ecdf`,0,.2,0),r.wall(3.9,.16,3.9,`#d8d2c2`,0,2.8,0),r.box(1,2,.12,`#1e1a16`,.6,1,1.7),r.box(1.2,.14,.16,`#2f7d6d`,.6,2.06,1.7),r.box(.14,2,.16,`#2f7d6d`,.02,1,1.7),r.box(.14,2,.16,`#2f7d6d`,1.18,1,1.7),r.box(.7,.6,.1,`#1e1a16`,-.9,1.7,1.7),r.box(.82,.08,.14,`#2f7d6d`,-.9,2.02,1.7),r.box(.5,.6,.2,`#6c7279`,-1.35,1.4,-1.8),e.style===`brick`){for(let e of[-1,1])r.box(2.2,.1,4.2,`#b5532f`,e*.98,3.3499999999999996,0,0,0,e*-.32);r.box(.3,.3,4.2,`#9a4325`,0,3.75,0),r.cyl(.14,.14,.5,`#4d4943`,-1.2,3.3,0,8)}else{for(let[e,t,n,i]of[[0,1.7,3.6,.12],[0,-1.7,3.6,.12],[1.7,0,.12,3.4],[-1.7,0,.12,3.4]])r.box(n,.4,i,`#e6e0d0`,e,3.15,t);r.cyl(.6,.6,.9,`#23272b`,.6,3.4499999999999997,-.5,14),r.cyl(.62,.62,.08,`#3a3f45`,.6,3.92,-.5,14)}let i=Rf(`ਮੋਟਰ ${w[e.index]}`,{width:256,height:96,bg:`#f4e9c8`,fg:`#7a1f1f`,border:`#2f7d6d`});n.push(i);let a=new Ur({map:i});f.push(a);let o=new J(new Xi(1.5,.56),a);o.position.set(.1,2.45,1.72),t.g.add(o);let s=-2.9;r.wall(2.6,.75,.22,`#c9bfa8`,0,-0,-2.03),r.wall(2.6,.75,.22,`#c9bfa8`,0,-0,-3.77),r.wall(.22,.75,1.9,`#c9bfa8`,1.19,-0,s),r.wall(.22,.75,1.9,`#c9bfa8`,-1.19,-0,s),r.wall(2.7,.08,2,`#9c9484`,0,.75,-2.9);let c=new J(new Xi(2.16,1.52),T);c.rotation.x=-Math.PI/2,c.position.set(0,.73,s),t.g.add(c);let l=t.shiny;l.cyl(.1,.1,1.2,`#d3dae0`,0,1.9,-2.3,10,Math.PI/2),l.cyl(.16,.16,.1,`#aab3ba`,0,1.9,-1.78,10,Math.PI/2),l.cyl(.1,.1,.3,`#d3dae0`,0,1.78,-2.7,10);let u=new J(new Ki(.075,.1,1.05,8,1,!0),C);u.position.set(0,1.22,-2.7),t.g.add(u),x.push(u);let d=new W(e.x,t.f.y+1.62,e.z-2.7);if(b.push({outlet:d,pool:t.f.y+.75}),Zp(t,4.2,.9,.35),Qp(t,-3,2.4),$p(t,.6,2.62,1.95,`#ffe2a0`,.12),t.matte.cyl(.02,.02,.25,`#222`,.6,2.8,1.95,4),g(e.x+.6,t.f.y+2.7,e.z+2,34,24),e.style===`solar`){let e=new G;e.position.set(-5,2.95,0),e.rotation.z=.4;let n=new G;n.rotation.y=Math.PI/2;let r=new J(new Xi(3.7,2.3),S);r.rotation.x=-Math.PI/2,r.castShadow=!0,n.add(r),e.add(n),t.g.add(e);for(let e of[-1.6,1.6])t.matte.cyl(.1,.12,2.6,`#8c9298`,-5,1.3,e,8);t.matte.box(.14,.14,3.4,`#8c9298`,-5,2.62,0),t.matte.box(.4,.5,.2,`#6c7279`,-3.8,1,.3),t.matte.box(.04,1.4,.04,`#222`,-3.8,.7,1)}m(t);let h=new W(e.x,t.f.y,e.z);v.push(h),_.push({id:e.id,gurmukhi:e.gurmukhi,english:e.english,position:h.clone(),radius:10})}let E=b.length*26,D=new Float32Array(E*3),O=new Float32Array(E*3),k=new dr;k.setAttribute(`position`,new Zn(D,3));let A=new Mi({map:u,color:`#e8f6ff`,size:.16,transparent:!0,depthWrite:!1,opacity:.85});f.push(A);let j=new Li(k,A);j.frustumCulled=!1,t.add(j);let M=Hl(20240),N=(e,t,n)=>{let r=b[t],i=e*3;if(!n&&M()<.45){let e=M()*Fl,t=.5+M()*.9;D[i]=r.outlet.x+Math.cos(e)*.1,D[i+1]=r.pool,D[i+2]=r.outlet.z+Math.sin(e)*.1,O[i]=Math.cos(e)*t,O[i+1]=1.4+M()*1.6,O[i+2]=Math.sin(e)*t}else D[i]=r.outlet.x+(M()-.5)*.08,D[i+1]=r.outlet.y-M()*(n?.9:.05),D[i+2]=r.outlet.z+(M()-.5)*.08,O[i]=(M()-.5)*.15,O[i+1]=-M()*.4,O[i+2]=(M()-.5)*.15};for(let e=0;e<b.length;e++)for(let t=0;t<26;t++)N(e*26+t,e,!0);let P=p(Bf.x,Bf.z,Math.PI);{let e=P,n=e.matte,i=e.shiny,a=`#f4efe3`,o=`#e0b33f`;n.wall(26,.06,22,`#e8e3d4`,0,0,0),n.wall(26,1.5,.5,a,0,0,-11),n.wall(.5,1.5,22,a,13,0,0),n.wall(.5,1.5,22,a,-13,0,0),n.wall(21,1.5,.5,a,2.5,0,11),n.wall(26.4,.18,.7,o,0,1.5,-11),n.wall(.7,.18,22.4,o,13,1.5,0),n.wall(.7,.18,22.4,o,-13,1.5,0),n.wall(21.4,.18,.7,o,2.5,1.5,11);for(let e of[-12.6,-7.9])n.wall(.8,2.8,.8,a,e,0,11),i.blob(.34,o,e,3.1,11,1,1.3,1,1);Gp(e.f,0,-11,13,.3,0,1.6,`wall`),Gp(e.f,13,0,.3,11,0,1.6,`wall`),Gp(e.f,-13,0,.3,11,0,1.6,`wall`),Gp(e.f,2.5,11,10.5,.3,0,1.6,`wall`),n.wall(15.2,.55,10.8,`#ddd6c2`,0,0,-3),n.wall(14,5,10,a,0,.55,-3),n.wall(14.4,.25,10.4,o,0,5.1,-3);for(let[e,t,r,i]of[[0,2.1,14.4,.3],[0,-8.1,14.4,.3],[7.1,-3,.3,10.4],[-7.1,-3,.3,10.4]])n.wall(r,.7,i,a,e,5.35,t);n.box(2.4,3.4,.2,`#2a5a46`,0,2.3,2.1),n.box(2.9,.25,.3,o,0,4.1,2.12);for(let e of[-4.8,-2.8,2.8,4.8])n.box(.9,1.5,.15,`#2b4f66`,e,2.7,2.08),n.box(1.1,.14,.2,o,e,3.55,2.1);n.wall(14.4,.5,3.6,`#e8e3d4`,0,0,4.1),n.wall(14.4,.17,.7,`#e8e3d4`,0,0,6.65),n.wall(14.4,.34,.7,`#e8e3d4`,0,0,5.95);for(let t of[-6.4,-3.2,0,3.2,6.4])n.cyl(.26,.3,3.4,a,t,2.2,5.5,10),i.cyl(.4,.28,.25,o,t,4,5.5,10),Kp(e.f,t,5.5,.3,0,4,`gurdwara`);n.wall(14.8,.3,4.1,a,0,4.1,4),n.wall(14.8,.2,.3,o,0,4.4,5.95),n.cyl(3,3.1,1.2,a,0,5.9,-3,16),i.add(new Qi(3,18,9,0,Fl,0,Math.PI/2),o,0,6.5,-3,0,0,0,1,1.1,1),i.cyl(.12,.3,.9,o,0,10,-3,8),i.blob(.34,o,0,10.6,-3,1,1.2,1,1),i.cyl(.02,.1,1,o,0,11.3,-3,6);for(let[e,t]of[[-5.7,-.5],[5.7,-.5],[-5.7,-5.5],[5.7,-5.5]]){for(let[r,i]of[[-.45,-.45],[.45,-.45],[-.45,.45],[.45,.45]])n.cyl(.09,.09,1.7,a,e+r,6.2,t+i,6);n.wall(1.2,.12,1.2,a,e,7,t),i.add(new Qi(.7,12,6,0,Fl,0,Math.PI/2),o,e,7.12,t),i.cyl(.02,.07,.55,o,e,8.1,t,6)}Gp(e.f,0,-3,7.6,5.5,0,6.2,`gurdwara`),Gp(e.f,0,4.1,7.2,1.8,0,.5,`gurdwara`,!0),Gp(e.f,0,5.95,7.2,.35,0,.34,`gurdwara`,!0),Gp(e.f,0,6.65,7.2,.35,0,.17,`gurdwara`,!0),n.wall(2.6,.04,8,`#c27a55`,-10.3,.06,7),n.wall(8,.04,2.6,`#c27a55`,-6.3,.06,3.6),Zp(e,9.5,6.5,0),Zp(e,-9.5,-4,Math.PI/2),$p(e,0,4.55,5.9,`#ffe2a0`,.14);let s=8.6;n.cyl(1,1.15,.5,`#d9a066`,-5,.25,s,8),n.cyl(.11,.13,11,`#f0e4c8`,-5,5.5,s,8),n.cyl(.17,.17,6.2,`#ff8c1a`,-5,3.8,s,8),i.cyl(.04,.1,.9,o,-5,11.45,s,6),i.box(.1,1,.05,o,-5,12.1,s),i.torus(.32,.035,o,-5,11.75,s),i.box(.06,.9,.04,o,-5,11.55,s,0,0,1),i.box(.06,.9,.04,o,-5,11.55,s,0,0,-1),Kp(e.f,-5,s,.9,0,12,`gurdwara`),m(e);let c=Wp(e.f,-5,s),l=3.4,u=[],d=[];for(let e=0;e<=16;e++){let t=e/16,n=1.8*(1-.88*t);if(u.push(t*l,0,0,t*l,-n,0),e>0){let t=(e-1)*2;d.push(t,t+1,t+2,t+1,t+3,t+2)}}let p=new dr;p.setAttribute(`position`,new q(u,3)),p.setIndex(d),p.computeVertexNormals();let h=new fa({color:`#ff8a00`,emissive:`#4a2400`,side:2});h.onBeforeCompile=e=>{e.uniforms.uTime=r,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  float fx = position.x / 3.4;
  transformed.z += sin(position.x * 2.4 - uTime * 6.0) * 0.32 * fx;
  transformed.y += cos(position.x * 2.0 - uTime * 5.0) * 0.07 * fx;`)},h.customProgramCacheKey=()=>`pind-flag-v1`,f.push(h);let v=new J(p,h);v.position.set(c.x+.1,e.f.y+10.9,c.z),v.castShadow=!0,t.add(v),g(Bf.x,e.f.y+7,Bf.z-5,46,36,16765578,3.4),_.push({id:`gurdwara`,gurmukhi:`ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ`,english:`Gurdwara Sahib`,position:new W(Bf.x,e.f.y,Bf.z),radius:22})}{let e=tf(Vf.x,Vf.z),t=p(Vf.x,Vf.z,0,e),n=t.matte,r=.45;n.wall(15.2,.55,15.2,`#b05a3c`,0,-.1,0),n.wall(14.2,.04,14.2,`#c8714c`,0,.55,0),Pd({cx:Vf.x,cz:Vf.z,halfWidth:Vf.half,halfLength:Vf.half,rotY:0,baseY:e+r,topY:e+r,profile:`flat`,thickness:.45,surface:`phirni_brick`,tag:`sath`,landmarkId:`sath`});let i=[[-4.5,-6,0],[.5,-6.2,0],[5,-5.8,0],[6.3,-1,Math.PI/2],[6.3,3.6,Math.PI/2],[-6.4,-1.5,Math.PI/2],[3,6.3,0]];for(let[e,r,a]of i){let i=Math.cos(a),o=Math.sin(a);for(let t of[-.9,.9])n.box(.18,.4,.5,`#9c9486`,e+t*i,.75,r-t*o,a);n.box(2.3,.1,.62,`#8a5a30`,e,1,r,a),Gp(t.f,e,r,1.15,.31,0,1.05,`prop`,!0,a)}Zp(t,1.2,1.4,.2,!0,r),Zp(t,-2,-2.8,-.4,!0,r),n.box(.9,.04,.9,`#2f6a4a`,3.5,.5700000000000001,2.5),n.cyl(.14,.2,.55,`#6e4a2a`,4.6,.75,2.4,8),n.cyl(.03,.03,.5,`#6e4a2a`,4.6,1.25,2.4,6),Qp(t,6.6,6.4),Qp(t,-6.7,6.2),m(t),_.push({id:`sath`,gurmukhi:`ਸੱਥ ਤੇ ਬੋਹੜ`,english:`Sath & Bohr Tree`,position:new W(Vf.x,e+r,Vf.z),radius:14})}{let e=Hf,t=tf(e.x,e.z),r=p(e.x,e.z,0,t),i=r.matte,a=e.deckHeight,o=e.towerHalf,s=`#cdc6b4`;for(let[e,t]of[[-o,-o],[o,-o],[-o,o],[o,o]])i.wall(.9,a,.9,s,e,-.3,t),Kp(r.f,e,t,.5,-.3,a,`tanki`);for(let e of[3.4,7.2])i.box(o*2+.6,.4,.4,s,0,e,-o),i.box(o*2+.6,.4,.4,s,0,e,o),i.box(.4,.4,o*2+.6,s,-o,e,0),i.box(.4,.4,o*2+.6,s,o,e,0);i.wall(e.deckHalf*2,.4,e.deckHalf*2,`#bdb5a2`,0,a-.4,0),i.cyl(2.7,2.7,3.8,`#9fd0e6`,0,a+1.9,0,20),i.cyl(2.78,2.78,.22,`#7aa8c0`,0,a+.2,0,20),i.cyl(2.78,2.78,.22,`#7aa8c0`,0,a+3.7,0,20),r.shiny.add(new Qi(2.6,18,7,0,Fl,0,Math.PI/2),`#8fb8cc`,0,a+3.8,0,0,0,0,1,.45,1),i.cyl(.05,.1,.9,`#555`,0,a+5.4,0,6),Kp(r.f,0,0,2.75,a,a+5,`tanki`);let c=Rf(`ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ`,{width:512,height:128,fg:`#0d3a6a`,font:`bold 56px "Noto Sans Gurmukhi", "Raavi", sans-serif`});n.push(c);let l=new Ur({map:c,transparent:!0,side:2});f.push(l);for(let e=0;e<4;e++){let t=e/4*Fl,n=new J(new Xi(3.6,.9),l);n.position.set(Math.sin(t)*2.72,a+1.9,Math.cos(t)*2.72),n.rotation.y=t,r.g.add(n)}let u=e.deckHalf;i.wall(u*2,1.1,.12,`#a39b88`,0,a,u),i.wall(.12,1.1,u*2,`#a39b88`,u,a,0),i.wall(u*2-1.8,1.1,.12,`#a39b88`,.9,a,-u),i.wall(.12,1.1,u*2-1.8,`#a39b88`,-u,a,.9),Gp(r.f,0,u+.06,u+.1,.12,a,a+1.2,`tanki`),Gp(r.f,u+.06,0,.12,u+.1,a,a+1.2,`tanki`),Gp(r.f,.9,-u-.06,u-.9,.12,a,a+1.2,`tanki`),Gp(r.f,-u-.06,.9,.12,u-.9,a,a+1.2,`tanki`),Pd({cx:e.x,cz:e.z,halfWidth:u,halfLength:u,rotY:0,baseY:t+a,topY:t+a,profile:`flat`,thickness:.4,surface:`phirni_brick`,tag:`platform`,landmarkId:`tanki`});let d=e.ringOffset,h=a/4;[{cx:0,cz:-d,rotY:Math.PI/2,y0:0},{cx:d,cz:0,rotY:0,y0:h},{cx:0,cz:d,rotY:-Math.PI/2,y0:h*2},{cx:-d,cz:0,rotY:Math.PI,y0:h*3}].forEach((n,a)=>{Pd({cx:e.x+n.cx,cz:e.z+n.cz,halfWidth:.9,halfLength:4.5,rotY:n.rotY,baseY:t+n.y0,topY:t+n.y0+h,profile:`linear`,thickness:.3,surface:`phirni_brick`,tag:`stairs`,landmarkId:`tanki`});let o=Math.cos(n.rotY),s=Math.sin(n.rotY);for(let e=0;e<15;e++){let t=-4.5+9/15*(e+.5),r=n.y0+h*(e+1)/15;i.box(1.8,.5,.62,e%2?`#bfb8a6`:`#cbc4b2`,n.cx+t*s,r-.25,n.cz+t*o,n.rotY)}for(let e of[-1,1]){let t=1.02*e,a=n.cx+t*o,c=n.cz-t*s;i.box(.07,.07,9.2,`#3f6f8f`,a,n.y0+h/2+1,c,n.rotY,-Math.atan2(h,9));for(let e=0;e<4;e++){let r=-4+e*2.67,a=n.y0+h*(r+4.5)/9;i.box(.06,1,.06,`#3f6f8f`,n.cx+t*o+r*s,a+.5,n.cz-t*s+r*o,n.rotY)}Gp(r.f,a,c,.08,4.5,n.y0-.2,n.y0+h+1.1,`tanki`,!1,n.rotY)}});let v=[[d,-d,h],[d,d,h*2],[-d,d,h*3],[-d,-d,h*4]];for(let[n,r,a]of v){let o=a===h*4?1.3:.95;i.wall(o*2,.3,o*2,`#b3ac9a`,n,a-.3,r),Pd({cx:e.x+n,cz:e.z+r,halfWidth:o-.35,halfLength:o,rotY:0,baseY:t+a,topY:t+a,profile:`flat`,thickness:.3,surface:`phirni_brick`,tag:`landing`,landmarkId:`tanki`})}$p(r,0,a+6,0,`#ff6a4a`,.16),m(r),g(e.x,t+a+3,e.z,30,30,16767136,2.6),_.push({id:`tanki`,gurmukhi:`ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ`,english:`Paani Wali Tanki`,position:new W(e.x,t,e.z),radius:10})}let ee=[`#e9dcc0`,`#6fb7b0`,`#e0b64a`,`#d98a8a`,`#bcd3a0`,`#f0e6d2`,`#9fb6d6`],F=(e,t)=>{let n=p(e.x,e.z,e.rotY),r=n.matte,i=e.halfX,a=e.halfZ,o=ee[t%ee.length],s=`#cfc7b5`,c=6.2,l=3.5,u=3.4,d=2.8;r.wall(i*2,.05,a*2,`#c27a55`,0,0,0);let f=1.3,h=i-f;for(let e of[-1,1])r.wall(h,c,u,o,e*(f+h/2),0,a-u/2),r.wall(h,.9,3.5,`#a8553a`,e*(f+h/2),0,a-u/2),Gp(n.f,e*(f+h/2),a-u/2,h/2,u/2,0,c,`house`),r.wall(h,.55,3.6999999999999997,s,e*(f+h/2),c,a-u/2);r.wall(f*2,3.6,u,o,0,2.6,a-u/2),r.wall(f*2,.35,3.6999999999999997,`#4b3a2e`,0,2.55,a-u/2);for(let e of[-1,1])r.box(.12,2.5,.2,`#5a3a22`,e*f,1.25,a-.2);r.box(2.9,.2,.3,`#5a3a22`,0,2.6,a-.2),r.box(2.2,.15,1,`#dbd2bc`,0,3.9,a+.2),r.box(2,1.1,.12,`#46363a`,0,4.5,a+.65);for(let e of[-i*.55,i*.55])for(let t of[1.9,4.5])r.box(.9,1.2,.12,`#352c2c`,e,t,a+.02),r.box(1.15,.12,.2,`#f2eee4`,e,t+.66,a+.02);let _=2*a-u-d,v=-.6000000000000001/2;for(let e of[-1,1])r.wall(d,l,_,o,e*(i-d/2),0,v),r.wall(3.0999999999999996,.5,_+.3,s,e*(i-d/2),l,v),Gp(n.f,e*(i-d/2),v,d/2,_/2,0,l,`house`);r.wall(i*2,l,d,o,0,0,-a+d/2),r.wall(i*2+.3,.5,3.0999999999999996,s,0,l,-a+d/2),Gp(n.f,0,-a+d/2,i,d/2,0,l,`house`),r.cyl(.55,.55,.9,`#22262a`,i*.45,7.2,a-u/2,12),r.wall(1.4,.1,1.4,`#cfc7b5`,-i*.45,6.75,a-u/2);for(let[e,t]of[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]])r.cyl(.07,.07,1.3,`#e8e0cc`,-i*.45+e,7.45,a-u/2+t,5);n.shiny.add(new Qi(.85,10,5,0,Fl,0,Math.PI/2),`#d9a83a`,-i*.45,8.1,a-u/2),Zp(n,-i*.3,-a*.1,.1*t),Qp(n,i*.35,-a*.35),r.cyl(.8,.9,.8,`#6e5a3a`,i*.1,.4,-a+d+.9,9),r.cyl(.05,.8,.6,`#6e5a3a`,i*.1,1.05,-a+d+.9,9),$p(n,0,3,a+.25,`#ffe2a0`,.1),m(n),t%3==0&&g(e.x,n.f.y+3.2,e.z,22,20,16762490,1.8)};Uf.forEach(F),_.push({id:`pind`,gurmukhi:`ਪਿੰਡ`,english:`Pind Village`,position:new W(wu.x,tf(wu.x,wu.z),wu.z),radius:wu.phirniRadius});let I=(e,t)=>{let n=p(e.x,e.z,e.rotY),r=n.matte,i=n.shiny,a=e.halfX,o=e.halfZ,s=[`#2f8f86`,`#c1553a`,`#e58fb0`][t%3],c=t===2?`#f9e3ec`:`#f6f3ea`;r.wall(a*2+1,.8,o*2+1,`#7a766c`,0,-.8,0),r.wall(a*2-1,.05,o*2-1,`#6fb04a`,0,0,0),r.wall(5,.06,o+1,`#b9b3a4`,0,.04,o/2-.5);let l=2.2;r.wall(a*2,l,.4,`#efe9d9`,0,0,-o),r.wall(.4,l,o*2,`#efe9d9`,a,0,0),r.wall(.4,l,o*2,`#efe9d9`,-a,0,0);let u=a-2.5;for(let e of[-1,1]){r.wall(u,l,.4,`#efe9d9`,e*(2.5+u/2),0,o),r.wall(u,.2,.55,s,e*(2.5+u/2),l,o),Gp(n.f,e*(2.5+u/2),o,u/2,.25,0,l,`wall`),r.wall(.9,3,.9,`#efe9d9`,e*2.7,0,o),i.blob(.42,`#d9a83a`,e*2.7,3.45,o,1,.9,1.3,1),i.blob(.2,`#d9a83a`,e*2.7,3.2,o+.45,1,1,1,1),$p(n,e*2.7,3.95,o,`#fff0c0`,.14);for(let t=0;t<6;t++)r.box(.04,1.8,.04,`#1c1c1c`,e*(2.35-t*0),.95,o-.45-t*.38),i.cyl(0,.06,.18,`#d9a83a`,e*2.35,1.95,o-.45-t*.38,4);r.box(.05,.06,2.3,`#1c1c1c`,e*2.35,1.6,o-1.6),r.box(.05,.06,2.3,`#1c1c1c`,e*2.35,.4,o-1.6)}Gp(n.f,0,-o,a,.25,0,l,`wall`),Gp(n.f,a,0,.25,o,0,l,`wall`),Gp(n.f,-a,0,.25,o,0,l,`wall`);for(let e of[-1,1])Kp(n.f,e*2.7,o,.5,0,3.5,`wall`);r.wall(17,7,9,c,0,0,-3),r.wall(17.2,.5,9.2,s,0,3.4,-3),r.wall(17.4,.4,9.4,`#e4dfd0`,0,7,-3);for(let e of[-6,-2,2,6])r.box(2.4,1.7,.12,`#2b5f86`,e,1.9,1.5199999999999996),r.box(2.4,1.7,.12,`#2b5f86`,e,5.3,1.5199999999999996),r.box(2.6,.1,.2,`#ffffff`,e,.99,1.5499999999999998);r.wall(7,.35,4,c,0,3.4,3.5);for(let e of[-3,3])r.cyl(.28,.28,3.4,c,e,1.7,5.199999999999999,10);r.box(1.8,2.6,.12,`#4a2f1d`,0,1.3,1.5499999999999998),r.box(7,.12,1.6,`#e4dfd0`,0,3.6,2.4000000000000004),r.box(6.8,.8,.06,`#9ec8dd`,0,4.05,3.1500000000000004),r.cyl(.9,.9,1.3,`#20242a`,-4.5,8,-4,14),r.cyl(.92,.92,.1,`#3a3f45`,-4.5,8.7,-4,14),r.box(1.6,.06,1,`#1d2f5c`,3,7.35,-4,0,-.45),r.cyl(.18,.18,1.6,`#cfd6dc`,3,7.7,-4.3,8,0,Math.PI/2);for(let[e,t]of[[-9,5],[9,5],[-9.5,-9],[9.5,-9]])r.cyl(.1,.14,.8,`#5a4636`,e,.4,t,5),r.cyl(0,.9,3.6,`#2f6a3c`,e,2.5,t,8);Gp(n.f,0,-3,8.6,4.6,0,7.4,`house`),Gp(n.f,0,3.5,3.6,.6,0,3.8,`house`);for(let e of[-3,3])Kp(n.f,e,5.199999999999999,.3,0,3.6,`house`);m(n);let d=Wp(n.f,0,o+1);g(d.x,n.f.y+4,d.z,30,24,16773312,2.2)};Wf.forEach(I);{let e=ff(Pu.x,Pu.z)??tf(Pu.x,Pu.z),t=p(Pu.x,Pu.z,0,e),n=t.matte;for(let e=0;e<4;e++)n.wall(1.1,.2+.12*e,3.2,`#a8553a`,-Pu.rx*1-.4-e*1,-.15,0);for(let e=0;e<16;e++){let t=e/16*Fl+Ul(e,5,1)*.3,r=1.12+Ul(e,6,1)*.1,i=Math.cos(t)*Pu.rx*r,a=Math.sin(t)*Pu.rz*r;for(let t=0;t<6;t++){let r=(Ul(e,t,7)-.5)*1.2,o=(Ul(e,t,8)-.5)*1.2,s=1.4+Ul(e,t,9)*1.2;n.cyl(.015,.035,s,`#6b8f3a`,i+r,s/2-.2,a+o,4),t%3==0&&n.cyl(.05,.05,.3,`#5a3a22`,i+r,s-.1,a+o,5)}}for(let e=0;e<26;e++){let t=Ul(e,1,11)*Fl,r=Math.sqrt(Ul(e,2,11))*.82,i=Math.cos(t)*Pu.rx*r,a=Math.sin(t)*Pu.rz*r;n.cyl(.4,.4,.02,`#3e8a3a`,i,.07,a,9),e%4==0&&(n.blob(.16,`#f4a6c2`,i,.2,a,1,.8,1,0),n.blob(.08,`#ffd54a`,i,.24,a,1,1,1,0))}m(t),_.push({id:`toba`,gurmukhi:`ਪਿੰਡ ਦਾ ਟੋਭਾ`,english:`Village Toba`,position:new W(Pu.x,e,Pu.z),radius:30})}let te=new fa({color:`#ff8a00`,emissive:`#4a2400`,side:2});te.onBeforeCompile=e=>{e.uniforms.uTime=r,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  float fx = position.x / 3.4;
  transformed.z += sin(position.x * 2.4 - uTime * 6.0) * 0.32 * fx;
  transformed.y += cos(position.x * 2.0 - uTime * 5.0) * 0.07 * fx;`)},te.customProgramCacheKey=()=>`pind-flag-v1`,f.push(te);let ne=(e,n,r,i=11)=>{let a=e.matte,o=e.shiny,s=`#e0b33f`;a.cyl(1,1.15,.5,`#d9a066`,n,.25,r,8),a.cyl(.11,.13,i,`#f0e4c8`,n,i/2,r,8),a.cyl(.17,.17,i*.56,`#ff8c1a`,n,i*.35,r,8),o.cyl(.04,.1,.9,s,n,i+.45,r,6),o.box(.1,1,.05,s,n,i+1.1,r),o.torus(.32,.035,s,n,i+.75,r),o.box(.06,.9,.04,s,n,i+.55,r,0,0,1),o.box(.06,.9,.04,s,n,i+.55,r,0,0,-1),Kp(e.f,n,r,.9,0,i+1,`gurdwara`);let c=Wp(e.f,n,r),l=[],u=[];for(let e=0;e<=16;e++){let t=e/16,n=1.8*(1-.88*t);if(l.push(t*3.4,0,0,t*3.4,-n,0),e>0){let t=(e-1)*2;u.push(t,t+1,t+2,t+1,t+3,t+2)}}let d=new dr;d.setAttribute(`position`,new q(l,3)),d.setIndex(u),d.computeVertexNormals();let f=new J(d,te);f.position.set(c.x+.1,e.f.y+i-.1,c.z),f.castShadow=!0,t.add(f)},re=new fa({vertexColors:!0,side:2});re.onBeforeCompile=e=>{e.uniforms.uTime=r,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
attribute float aSwing;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  // Pennant tips swing in the breeze; the edge sewn to the string stays put.
  float ph = position.x * 0.8 + position.z * 0.6;
  transformed.x += sin(ph + uTime * 4.2) * 0.09 * aSwing;
  transformed.z += cos(ph * 1.3 + uTime * 3.6) * 0.09 * aSwing;`)},re.customProgramCacheKey=()=>`mela-bunting-v1`,f.push(re);let ie=[`#e63946`,`#ffb703`,`#2a9d8f`,`#8338ec`,`#fb5607`,`#3a86ff`,`#ff006e`,`#06d6a0`],L=(e,t,n,r,i,a,o,s,c)=>{let l=Math.hypot(i-t,a-n,o-r),u=Math.max(2,Math.floor(l/.55)),d=(i-t)/l,f=(o-r)/l,p=new K;for(let l=0;l<u;l++){let m=(l+.5)/u,h=t+(i-t)*m,g=r+(o-r)*m,_=n+(a-n)*m-s*4*m*(1-m);p.set(ie[(l+c)%ie.length]),e.pos.push(h-d*.19,_,g-f*.19,h+d*.19,_,g+f*.19,h,_-.42,g);for(let t=0;t<3;t++)e.col.push(p.r,p.g,p.b);e.swing.push(0,0,1)}},ae=(e,t)=>{if(!t.pos.length)return;let n=new dr;n.setAttribute(`position`,new q(t.pos,3)),n.setAttribute(`color`,new q(t.col,3)),n.setAttribute(`aSwing`,new q(t.swing,1)),n.computeVertexNormals();let r=new J(n,re);r.castShadow=!1,e.g.add(r)},R=(e,t,r,i,a,o=3.2,s=.9,c=2.2,l=`#1f6f4a`,u=`#fff6dc`)=>{let d=Math.cos(a),p=Math.sin(a);for(let t of[-o/2+.15,o/2-.15])e.matte.cyl(.06,.07,c+s/2,`#6b4a2a`,r+t*d,(c+s/2)/2,i-t*p,6);e.matte.box(o+.12,s+.12,.08,`#3b2a1a`,r,c,i,a);let m=Rf(t,{width:512,height:144,bg:l,fg:u,border:`#e0b33f`,font:`bold 64px "Noto Sans Gurmukhi", "Raavi", sans-serif`});n.push(m);let h=new Ur({map:m});f.push(h);for(let t of[1,-1]){let n=new J(new Xi(o,s),h);n.position.set(r+p*.05*t,c,i+d*.05*t),n.rotation.y=a+(t<0?Math.PI:0),e.g.add(n)}},oe=(e,t,n,r,i)=>{let a=Math.cos(i),o=Math.sin(i);for(let s of[-1.05,1.05]){let c=t+s*a,l=r-s*o;e.matte.box(.06,.55,.06,`#8c9298`,c,n+.27,l+.5),e.matte.box(.06,.2,.06,`#8c9298`,c,n+.1,l-.5);let u=new G;u.position.set(c,n+.45,l),u.rotation.set(0,i,0);let d=new J(new Xi(1.9,1.15),S);d.rotation.x=-Math.PI/2+.44,d.castShadow=!0,u.add(d),e.g.add(u)}};{let e=Gf,t=p(e.x,e.z,e.rotY),n=t.matte,r=t.shiny,i=`#f4efe3`,a=`#e0b33f`,o=e.halfX,s=e.halfZ;n.wall(o*2,.06,s*2,`#e8e3d4`,0,0,0),n.wall(o*2,1.3,.4,i,0,0,-s),n.wall(.4,1.3,s*2,i,o,0,0),n.wall(.4,1.3,s*2,i,-o,0,0);let c=o-2;for(let e of[-1,1])n.wall(c,1.3,.4,i,e*(2+c/2),0,s),n.wall(c+.2,.15,.6,a,e*(2+c/2),1.3,s),Gp(t.f,e*(2+c/2),s,c/2,.22,0,1.4,`wall`),n.wall(.7,2.4,.7,i,e*2.2,0,s),r.blob(.3,a,e*2.2,2.65,s,1,1.3,1,1),Kp(t.f,e*2.2,s,.45,0,2.6,`wall`);Gp(t.f,0,-s,o,.22,0,1.4,`wall`),Gp(t.f,o,0,.22,s,0,1.4,`wall`),Gp(t.f,-o,0,.22,s,0,1.4,`wall`),n.wall(9.6,.45,6.6,`#ddd6c2`,1.5,0,-2.6),n.wall(9,3.8,6,i,1.5,.45,-2.6),n.wall(9.4,.22,6.4,a,1.5,4.2,-2.6),n.box(1.8,2.6,.15,`#2a5a46`,1.5,1.75,.45),n.box(2.2,.2,.25,a,1.5,3.1,.47);for(let e of[-1.5,4.5])n.box(.8,1.2,.12,`#2b4f66`,e,2.2,.44),n.box(1,.12,.18,a,e,2.9,.46);n.cyl(1.9,2,.8,i,1.5,4.8,-2.6,14),r.add(new Qi(1.9,16,8,0,Fl,0,Math.PI/2),a,1.5,5.2,-2.6,0,0,0,1,1.1,1),r.cyl(.08,.22,.7,a,1.5,7.5,-2.6,8),r.blob(.24,a,1.5,8,-2.6,1,1.2,1,1);for(let[e,t]of[[-2.6,-5],[5.6,-5],[-2.6,-.2],[5.6,-.2]])n.cyl(.5,.5,.5,i,e,4.6,t,8),r.add(new Qi(.45,10,5,0,Fl,0,Math.PI/2),a,e,4.85,t);Gp(t.f,1.5,-2.6,4.8,3.3,0,5.2,`gurdwara`),n.wall(3.2,.04,6.5,`#c27a55`,0,.06,3.6),Zp(t,5.6,3.8,.2),Qp(t,-6.6,-5.6),$p(t,1.5,3.6,.7,`#ffe2a0`,.12),ne(t,-4.6,3.8,10),m(t),g(e.x+1.5,t.f.y+5,e.z-2.6,38,30,16765578,3),_.push({id:`nehran-gurdwara`,gurmukhi:`ਡੇਰਾ ਤੇ ਗੁਰਦੁਆਰਾ`,english:`Dera Gurdwara`,position:new W(e.x,t.f.y,e.z),radius:13})}Kf.forEach((e,t)=>{if(F(e,t+2),t%2==0){let t=p(e.x,e.z,e.rotY);oe(t,0,4,-e.halfZ+1.4,0),m(t)}}),_.push({id:Tu.id,gurmukhi:Tu.gurmukhi,english:Tu.english,position:new W(Tu.x,tf(Tu.x,Tu.z),Tu.z),radius:Tu.phirniRadius});{let e=Au,t=p(e.x,e.z,0),n=t.matte,r=t.shiny,i=[`#e3b650`,`#ecc768`,`#d6a944`,`#f2d07a`];for(let t=-5;t<=5;t++)n.box(e.halfX*2-1,.015,.12,`#93472d`,0,.01,t*2);for(let[r,i]of[[-e.halfX+.6,-e.halfZ+.6],[e.halfX-.6,-e.halfZ+.6],[-e.halfX+.6,e.halfZ-.6],[e.halfX-.6,e.halfZ-.6]])n.cyl(.08,.11,5.5,`#6e747a`,r,2.75,i,8),n.box(.9,.06,.08,`#6e747a`,r*.97,5.45,i),$p(t,r*.97-Math.sign(r)*.35,5.3,i,`#fff0c0`,.14),Kp(t.f,r,i,.14,0,5.5,`pole`),g(e.x+r,t.f.y+5.2,e.z+i,26,26,16773312,2);for(let e of[6,29.5/2,23.5])for(let r of[-9.5,9.5])n.cyl(.12,.14,4.6,`#7c8288`,e,2.3,r,8),Kp(t.f,e,r,.18,0,4.6,`pole`);n.box(19.1,.08,20.4,`#9aa3ab`,29.5/2,4.7,0,0,0,.06);for(let e=0;e<9;e++)n.box(19.1,.03,.08,`#7f878f`,29.5/2,4.76,-9+e*2.25,0,0,.06);n.box(19.1,.25,.1,`#2f7f5a`,29.5/2,4.55,10.2),n.box(19.1,.25,.1,`#2f7f5a`,29.5/2,4.55,-10.2),qf.forEach((r,a)=>{let o=r.x-e.x,s=r.z-e.z,c=.92,l=.58,u=.42;for(let e=0;e<r.layers;e++){let t=e*.22,d=Math.max(1,Math.floor((r.halfX-t)*2/c)),f=Math.max(1,Math.floor((r.halfZ-t)*2/l));for(let t=0;t<d;t++)for(let r=0;r<f;r++){let p=Ul(a*31+t,e*17+r,77),m=o-d*c/2+c*(t+.5)+(p-.5)*.06,h=s-f*l/2+l*(r+.5);n.blob(.5,i[Math.floor(p*i.length)],m,u*(e+.5),h,c*.98,u*1.15,l*.98,0,(p-.5)*.2)}}Gp(t.f,o,s,r.halfX,r.halfZ,0,r.layers*u,`prop`,!0)});for(let e=0;e<6;e++)n.blob(.5,i[e%4],2+e*.95,.24,-7.5+e%2*.3,.9,.45,.56,0,e*.3);n.box(1.4,.08,2.4,`#7a4a24`,3.5,.62,6.5);for(let e of[-1,1])n.cyl(.42,.42,.08,`#2b2b2b`,3.5+e*.78,.42,6.8,14,0,Math.PI/2),n.box(.06,.06,1.6,`#5a3a22`,3.5+e*.55,.66,5);n.blob(.5,i[1],3.4,.92,6.4,.9,.45,.56,0,.2),Gp(t.f,3.5,6.5,.8,1.3,0,1.1,`prop`);let a=Jf,o=a.x-e.x,s=a.z-e.z;n.box(a.halfX*2+.3,.06,a.halfZ*2+.3,`#3a3d40`,o,.02,s),r.box(a.halfX*2,.05,a.halfZ*2,`#7d858c`,o,.06,s);for(let e=-3;e<=3;e++)n.box(a.halfX*2,.012,.05,`#555b61`,o,.09,s+e*1.1);let c=a.cabinX-e.x,l=a.cabinZ-e.z;n.wall(2.6,2.6,2.4,`#efe6cf`,c,0,l),n.wall(3,.18,2.8,`#2f7f5a`,c,2.6,l),n.box(1.2,.8,.08,`#2b4f66`,c,1.6,l-1.22),n.box(.8,1.9,.08,`#5a3a22`,c+.6,.95,l+1.22),$p(t,c,2.45,l-1.3,`#ffe2a0`,.1),Gp(t.f,c,l,1.3,1.2,0,2.8,`building`),R(t,`ਧਰਮ ਕੰਡਾ`,c,l-1.3,Math.PI,2.4,.6,3.25,`#c1272d`,`#fff6dc`);for(let r of[-1,1])n.wall(.7,5.6,.7,`#b05a3c`,r*3.6,0,-e.halfZ+.2),n.wall(.9,.2,.9,`#e0b33f`,r*3.6,5.6,-e.halfZ+.2),Kp(t.f,r*3.6,-e.halfZ+.2,.45,0,5.8,`building`);n.box(8,.5,.4,`#b05a3c`,0,5.35,-e.halfZ+.2),R(t,`ਦਾਣਾ ਮੰਡੀ`,0,-e.halfZ-.05,Math.PI,4.6,1,4.55,`#7a1410`,`#ffe9a8`),m(t),_.push({id:`dana-mandi`,gurmukhi:`ਦਾਣਾ ਮੰਡੀ`,english:`Dana Mandi`,position:new W(e.x,t.f.y,e.z),radius:22})}{let e=ju,t=p(e.x,e.z,0),n=t.matte,r={pos:[],col:[],swing:[]};n.cyl(e.radius,e.radius+.2,.08,`#e3c892`,0,.02,0,40),n.cyl(e.radius*.62,e.radius*.62,.02,`#d6b87c`,0,.065,0,32),n.box(e.radius*1.7,.015,.16,`#fbfbf4`,0,.08,0);for(let t of[-2.6,2.6])n.box(e.radius*1.1,.015,.12,`#fbfbf4`,0,.08,t);n.cyl(.055,.055,e.radius*1.75,`#c8a46a`,0,.12,0,6,Math.PI/2),n.box(.08,.2,.12,`#d7263d`,0,.2,0);let i=e.radius+1.2,a=[];for(let e=0;e<20;e++){let r=e/20*Fl,o=Math.cos(r)*i,s=Math.sin(r)*i;Math.abs(Math.sin(r))<.18||(n.cyl(.09,.11,1.5,`#7a5230`,o,.75,s,6),n.cyl(.11,.11,.08,`#e0b33f`,o,1.52,s,6),Kp(t.f,o,s,.14,0,1.5,`pole`),a.push({x:o,z:s}))}for(let e=0;e<a.length-1;e++){let t=a[e],n=a[e+1];Math.hypot(t.x-n.x,t.z-n.z)>4.5||L(r,t.x,1.5,t.z,n.x,1.5,n.z,.18,e)}let o=[];for(let r=0;r<4;r++){let i=r/4*Fl+Math.PI/4,a=Math.cos(i)*(e.radius+2.2),s=Math.sin(i)*(e.radius+2.2);n.cyl(.07,.1,6,`#c9a25a`,a,3,s,6);for(let e=0;e<5;e++)n.cyl(.085,.085,.05,`#8a6a32`,a,.8+e*1.1,s,6);t.shiny.box(.05,.6,.9,ie[r*2],a,5.6,s+.45),Kp(t.f,a,s,.14,0,6,`pole`),o.push({x:a,z:s})}for(let e=0;e<4;e++){let t=o[e],n=o[(e+1)%4];L(r,t.x,5.4,t.z,n.x,5.4,n.z,.9,e*3)}L(r,o[0].x,5.6,o[0].z,o[2].x,5.6,o[2].z,1.4,5),L(r,o[1].x,5.6,o[1].z,o[3].x,5.6,o[3].z,1.4,2);for(let[r,i,a]of[[0,e.radius+3.6,0],[0,-e.radius-3.6,0]]){for(let e of[-1.2,1.2])n.box(.18,.42,.5,`#9c9486`,r+e,.21,i,a);n.box(3,.1,.62,`#8a5a30`,r,.47,i,a),Gp(t.f,r,i,1.5,.31,0,.52,`prop`,!0,a)}Zp(t,e.radius+4.2,3.5,Math.PI/2),Qp(t,e.radius+4.2,-3.2),R(t,`ਟੋਚਨ ਅਖਾੜਾ`,-e.radius-3.8,-5.5,-Math.PI/2,3.2,.85,2.1,`#8338ec`,`#fff6dc`),ae(t,r),m(t),_.push({id:`tochan-akhara`,gurmukhi:`ਟੋਚਨ ਅਖਾੜਾ`,english:`Tochan Akhara`,position:new W(e.x,t.f.y,e.z),radius:13})}{let e=Mu,t=p(e.x,e.z,.35),n=t.matte;for(let t=0;t<18;t++){let r=t/18*Fl,i=e.radius-.2;n.box(.62,.85,.38,t%2?`#a8553a`:`#b9633f`,Math.cos(r)*i,.425,Math.sin(r)*i,Math.PI/2-r),n.box(.66,.08,.46,`#c9c0aa`,Math.cos(r)*i,.89,Math.sin(r)*i,Math.PI/2-r)}n.cyl(e.radius-.4,e.radius-.4,.04,`#13201f`,0,-.4,0,18),n.cyl(e.radius-.38,e.radius-.38,1.2,`#4a2e22`,0,.2,0,18,0,0,0,`#2a1a14`);for(let r of[-1,1])n.cyl(.1,.12,2.8,`#6b4a2a`,r*(e.radius+.1),1.4,0,6),Kp(t.f,r*(e.radius+.1),0,.14,0,2.8,`pole`);n.box(e.radius*2+.6,.14,.14,`#5a3a22`,0,2.75,0),n.torus(.26,.04,`#3a2a1a`,0,2.5,0,0,Math.PI/2),n.cyl(.012,.012,1.7,`#d9c9a0`,.26,1.65,0,4),t.shiny.cyl(.16,.12,.26,`#c99a3a`,.26,.92,0,10),n.wall(2.6,.5,.8,`#a8553a`,0,0,e.radius+1.6),n.wall(2.3,.05,.5,`#3f6f7a`,0,.42,e.radius+1.6),n.wall(1.4,.18,1,`#9c9486`,-e.radius-1.4,0,-.6),Kp(t.f,0,0,e.radius+.05,0,.92,`prop`),Gp(t.f,0,e.radius+1.6,1.3,.4,0,.5,`prop`,!0),m(t),_.push({id:`khooh`,gurmukhi:`ਖੂਹ ਤੇ ਬੋਹੜ`,english:`Khooh Well`,position:new W(e.x,t.f.y,e.z),radius:9})}{let e=Zf,t=p(e.x,e.z,e.rotY),n=t.matte,r=e.halfX,i=e.halfZ,a=`#f1e7c9`,o=-i+1.8;n.wall(r*2,3.4,3.6,a,0,0,o),n.wall(r*2+.05,.9,3.65,`#3f8f5a`,0,0,o),n.wall(r*2+.4,.3,4,`#d9cfb3`,0,3.4,o),n.wall(r*2,.4,i*2-3.6,`#c9bfa6`,0,0,o+1.8+(i*2-3.6)/2);let s=o+1.8+(i*2-3.6)/2;for(let e=0;e<6;e++){let o=-r+.8+e*((r*2-1.6)/5);n.cyl(.18,.2,2.9,a,o,1.85,i-.4,10),Kp(t.f,o,i-.4,.22,0,3.3,`building`)}n.wall(r*2+.4,.25,i*2-3.2,`#d9cfb3`,0,3.3,s);for(let e of[-r*.55,r*.55])n.box(1.1,2.1,.08,`#5a3a22`,e,1.45,o+1.82);for(let e of[-r*.15,r*.15])n.box(.9,.9,.08,`#2b4f66`,e,1.9,o+1.82);n.box(2.2,1.1,.06,`#1f3a2c`,r*.55,2,o+1.86-.04).box(2.3,.08,.1,`#7a4a24`,r*.55,1.42,o+1.9),n.box(.7,.18,.06,`#3fa35a`,-r*.55,2.85,o+1.86).box(.18,.7,.06,`#3fa35a`,-r*.55,2.85,o+1.86),t.shiny.cyl(.14,.2,.28,`#c99a3a`,r-.8,2.85,i-.4,10);for(let e of[-3,.5]){n.box(2.2,.08,.45,`#7a4a24`,e,.85,s+.4);for(let t of[-.95,.95])n.box(.08,.45,.4,`#5a3a22`,e+t,.62,s+.4)}n.wall(.7,1.2,.6,`#9fb6c8`,r-1.2,.4,s-.5),Gp(t.f,0,o,r,1.8,0,3.7,`building`),Gp(t.f,0,s,r,(i*2-3.6)/2,0,.4,`building`,!0),$p(t,0,3.15,i-.8,`#ffe2a0`,.12),R(t,`ਡਿਸਪੈਂਸਰੀ ਤੇ ਸਕੂਲ`,0,i+1.6,0,4.4,.9,2.2,`#1f6f4a`,`#fff6dc`),m(t),g(e.x,t.f.y+3.1,e.z+i-1,26,22,16767136,2),_.push({id:`dispensary`,gurmukhi:`ਡਿਸਪੈਂਸਰੀ ਤੇ ਸਕੂਲ`,english:`Dispensary & School`,position:new W(e.x,t.f.y,e.z),radius:11})}Xf.forEach((e,t)=>{let n=p(e.x,e.z,e.rotY),r=n.matte,i=e.halfX,a=e.halfZ,o=t%2?`#b8915f`:`#a9824f`,s=`#c9a676`,c=1.6;r.wall(i*2,.04,a*2,`#c6a678`,0,0,0),r.wall(.35,c,a*2,o,i,0,0),r.wall(.35,c,a*2,o,-i,0,0);let l=i-1.2;for(let e of[-1,1])r.wall(l,c,.35,o,e*(1.2+l/2),0,a),r.wall(l,.08,.45,s,e*(1.2+l/2),c,a),Gp(n.f,e*(1.2+l/2),a,l/2,.2,0,c,`wall`);Gp(n.f,i,0,.2,a,0,c,`wall`),Gp(n.f,-i,0,.2,a,0,c,`wall`);let u=3.6,d=-a+u/2;r.wall(i*2,2.8,u,o,0,0,d),r.wall(i*2+.1,.5,3.65,`#8f6a40`,0,0,d),r.wall(i*2+.2,.22,3.8000000000000003,s,0,2.8,d);for(let e of[-1,1])r.wall(.2,.35,3.8000000000000003,s,e*(i+0),3.02,d);for(let e=0;e<Math.floor(i*2/.9);e++)r.cyl(.07,.07,.5,`#5a3a22`,-i+.5+e*.9,2.65,d+u/2+.18,5,Math.PI/2);r.box(1,2,.08,`#6b4a2a`,0,1,d+u/2+.02),r.box(.6,.6,.08,`#3a2a1a`,i*.55,1.6,d+u/2+.02);for(let e of[-1,1])r.box(.3,.3,.06,`#6e4e2e`,e*1,1.7,d+u/2+.02);Gp(n.f,0,d,i,u/2,0,3,`house`);let f=d+u/2+1.3;for(let e of[-1,1])r.cyl(.07,.08,2.2,`#6b4a2a`,i*.45*e,1.1,f+1.1,5);r.box(i*1.1,.18,2.8,`#d8bd72`,-i*.05,2.25,f,0,-.18),r.box(i*1.12,.05,2.9,`#b89a52`,-i*.05,2.36,f,0,-.18);for(let e of[-1,1])Kp(n.f,i*.45*e,f+1.1,.12,0,2.2,`pole`);r.wall(.9,.35,.6,`#8e6b45`,i*.62,0,a*.35),r.cyl(.18,.2,.08,`#2b2b2b`,i*.62,.39,a*.35,10),r.cyl(.7,.8,.7,`#6e5a3a`,-i*.62,.35,a*.4,9),r.cyl(.05,.7,.5,`#6e5a3a`,-i*.62,.95,a*.4,9),r.wall(2,.55,.7,`#8e6b45`,-i*.55,0,-a+u+.6),Zp(n,i*.15,a*.45,Math.PI/2+.1*t),Qp(n,i*.8,-a+u+.6),$p(n,0,2.5,d+u/2+.12,`#ffd28a`,.08),m(n),t%2==0&&g(e.x,n.f.y+2.4,e.z,18,16,16762490,1.6)}),I(Yf,2),_.push({id:Eu.id,gurmukhi:Eu.gurmukhi,english:Eu.english,position:new W(Eu.x,tf(Eu.x,Eu.z),Eu.z),radius:Eu.phirniRadius});{let e=Fu,t=ff(e.x,e.z)??tf(e.x,e.z),n=p(e.x,e.z,0,t),r=n.matte;for(let t=0;t<3;t++)r.wall(1,.25+.14*t,2.6,`#a8553a`,-e.rx-.4-t*.95,-.15,0);for(let t=0;t<12;t++){let n=t/12*Fl+Ul(t,15,1)*.35;if(Math.cos(n)<-.85)continue;let i=1.1+Ul(t,16,1)*.1,a=Math.cos(n)*e.rx*i,o=Math.sin(n)*e.rz*i;for(let e=0;e<5;e++){let n=(Ul(t,e,17)-.5)*1.1,i=(Ul(t,e,18)-.5)*1.1,s=1.2+Ul(t,e,19)*1;r.cyl(.015,.035,s,`#6b8f3a`,a+n,s/2-.2,o+i,4),e%2==0&&r.cyl(.05,.05,.28,`#5a3a22`,a+n,s-.1,o+i,5)}}for(let t=0;t<14;t++){let n=Ul(t,21,11)*Fl,i=Math.sqrt(Ul(t,22,11))*.8,a=Math.cos(n)*e.rx*i,o=Math.sin(n)*e.rz*i;r.cyl(.36,.36,.02,`#3e8a3a`,a,.07,o,9),t%3==0&&r.blob(.14,`#f7f1e8`,a,.18,o,1,.8,1,0)}m(n),_.push({id:`chhappar`,gurmukhi:`ਛੱਪੜ`,english:`Chhappar Pond`,position:new W(e.x,t,e.z),radius:19})}{let e=Su[2],r=t=>Math.abs(t-e.z)<e.halfLength+3,a=[],o=[],s=0;for(let e of[-1,1]){let t=a.length/3;s=0;for(let n=-794;n<=794;n+=6){let i=560+e*6.4,c=tf(i,n)+.03;if(a.push(i-.08,c,n,i+.08,c,n),s>0&&!r(n)&&!r(n-6)){let e=t+(s-1)*2;o.push(e,e+1,e+2,e+1,e+3,e+2)}s++}}let c=new dr;c.setAttribute(`position`,new q(a,3)),c.setIndex(o),c.computeVertexNormals();let l=new Ur({color:`#f1f1ec`,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});f.push(l),t.add(new J(c,l));let u=new Xi(.2,3);u.rotateX(-Math.PI/2);let d=new fi(u,new Ur({color:`#f3c622`,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),177);f.push(d.material);let p=new Ft,m=0;for(let e=0;e<177;e++){let t=-792+e*9;r(t)||(p.makeTranslation(560,tf(560,t)+.035,t),d.setMatrixAt(m++,p))}d.count=m,d.instanceMatrix.needsUpdate=!0,d.frustumCulled=!1,t.add(d);let h=new Q;for(let e=-780;e<790;e+=36)if(!r(e))for(let t of[-1,1]){let n=560+t*8.6,r=tf(n,e);h.wall(.14,1,.14,`#f1f1ec`,n,r,e),h.wall(.15,.25,.15,`#d12f2f`,n,r+.55,e)}let g=h.mesh(i);g&&t.add(g);let _=new Q;[-420,-330,-230,70,190,310].forEach((e,r)=>{let i=550.4,a=tf(i,e);_.wall(.34,.75,.62,`#f2eee4`,i,a-.05,e),_.cyl(.31,.31,.34,`#f5c518`,i,a+.88,e,10,Math.PI/2,0,0);let o=Rf(`ਪਿੰਡ ${r+1} km`,{width:256,height:96,bg:`#f2eee4`,fg:`#111111`,font:`bold 44px "Noto Sans Gurmukhi", "Raavi", sans-serif`});n.push(o);let s=new Ur({map:o});f.push(s);let c=new J(new Xi(.58,.3),s);c.position.set(550.5799999999999,a+.5,e),c.rotation.y=Math.PI/2,t.add(c),Up.push(Nd({x:i,z:e,radius:.3,minY:a-.2,maxY:a+1.3,tag:`prop`}).id)});let v=_.mesh(i);v&&t.add(v)}let se=[],ce=new Ur({color:`#ffffff`});f.push(ce);let le=new W;{let e=p(Ru.x,Ru.z,0),r=e.matte,i=e.shiny,a=`#f2a900`,o=`#c1272d`;r.wall(2*Ru.halfX-4,.06,2*Ru.halfZ-3,`#bfa77a`,0,0,0),r.wall(7,3.4,5.2,`#2fa39b`,-13,0,1),r.wall(7.3,.35,5.5,a,-13,3.4,1),r.wall(7.1,.5,5.3,o,-13,0,1);for(let e=0;e<6;e++)r.box(.9,.5,.06,e%2?a:`#f4efe0`,-15.9+e*1.16,2.4,3.65);r.box(2.6,1.9,.1,`#2a1a14`,-12.5,1.35,3.64),r.wall(3.2,1,.7,`#8a5a30`,-12.5,0,4.2),r.wall(3.4,.08,.9,`#d9b87a`,-12.5,1,4.2),r.cyl(.4,.5,2.6,`#8f4a35`,-15.4,4.6,.2,8);for(let e of[-1.8,3.8])r.wall(.2,2.4,.2,`#5a3a22`,-9.5,3.4,e);Gp(e.f,-13,1,3.5,2.6,0,3.8,`dhaba`),Gp(e.f,-12.5,4.2,1.7,.4,0,1,`dhaba`);let s=Rf(`ਰੰਗਲਾ ਢਾਬਾ
ਚਾਹ · ਪਰੌਂਠੇ · ਦਾਲ`,{width:768,height:256,bg:o,fg:`#ffd23f`,border:`#f2a900`,font:`bold 78px "Noto Sans Gurmukhi", "Raavi", sans-serif`});n.push(s);let c=new Ur({map:s,side:2});f.push(c);let l=new J(new Xi(6.4,2.1),c);l.rotation.y=Math.PI/2,l.position.set(-9.5,5,1),e.g.add(l);for(let[t,n]of[[-6,-4],[0,-4],[6,-4],[-6,4],[0,4],[6,4]])r.cyl(.14,.17,3.2,`#6b4a2a`,1+t,1.6,-2+n,7),Kp(e.f,1+t,-2+n,.2,0,3.4,`dhaba`);for(let e of[-4,4])r.box(13.4,.2,.22,`#5a3a22`,1,3.25,-2+e);for(let e of[-1,1])r.box(7.4,.28,10.6,`#b99a52`,1+e*3.1,4.05,-2,0,0,e*-.4),r.box(7.2,.12,10.9,`#8f7438`,1+e*3.1,3.88,-2,0,0,e*-.4);r.box(.5,.2,10.8,`#7a5f2a`,1,5,-2),[[-4,-5.5,0],[-1.5,-5.5,0],[1.5,-5.5,0],[4.5,-5.5,0],[-3.2,.5,Math.PI/2],[3.5,.5,Math.PI/2],[-2.5,4.6,0],[2.5,4.6,0]].forEach(([t,n,i])=>{Zp(e,1+t,-2+n+0,i),r.box(.8,.5,.8,`#7a5a35`,1+t+.9*(i===0?0:1),.25,-2+n+(i===0?1.7:0),0)});let d=-8.2,h=-2.6;r.cyl(.55,.75,1,`#c46a3a`,d,.5,h,12),r.cyl(.4,.55,.15,`#2a1a14`,d,1.05,h,12),e.glow.blob(.22,`#ff7a2a`,d,.72,-1.9000000000000001,1,.7,.4,0),Kp(e.f,d,h,.8,0,1.1,`dhaba`),le=new W(Ru.x+d,e.f.y+1.2,Ru.z+h),r.cyl(.08,.1,1.1,`#3b3b3b`,12,.55,10,6),r.box(.5,.06,.06,`#3b3b3b`,12.25,1.15,10),r.wall(1.4,.3,1.4,`#a9a090`,12,0,10),Kp(e.f,12,10,.5,0,1.3,`prop`);for(let e of[-10,10])r.wall(.6,3.2,.6,`#f1ecdf`,20,0,e),r.wall(.7,.4,.7,a,20,3.2,e);r.box(.35,.5,20.6,o,20,3.6,0),i.cyl(.05,.12,.5,`#d9a83a`,20,4.1,-10,6),i.cyl(.05,.12,.5,`#d9a83a`,20,4.1,10,6);let v=[[[-5,3.3,-6],[7,3.3,-6]],[[-5,3.3,2],[7,3.3,2]],[[-5,3.3,2],[-9.5,3.6,3.4]],[[7,3.3,-6],[7,3.3,2]],[[-5,3.3,-6],[-5,3.3,2]]],y=[`#ffd27a`,`#ff8fa3`,`#7fe0d4`,`#ffe9a8`,`#ffb347`],b=[],x=[],S=[];v.forEach((e,t)=>{let[n,r]=e,i=null;for(let e=0;e<=12;e++){let a=e/12,o=n[0]+(r[0]-n[0])*a,s=n[2]+(r[2]-n[2])*a,c=n[1]+(r[1]-n[1])*a-Math.sin(a*Math.PI)*.55,l=[o,c,s];i&&S.push(i[0],i[1],i[2],o,c,s),i=l,e>0&&e<12&&(b.push(new Ft().makeTranslation(o,c-.1,s)),x.push(new K(y[(e+t)%y.length])))}});let C=new dr;C.setAttribute(`position`,new q(S,3));let w=new ji(C,new yi({color:`#201a14`}));f.push(w.material),e.g.add(w);let T=new fi(new Yi(.1,0),ce,b.length);b.forEach((e,t)=>{T.setMatrixAt(t,e),T.setColorAt(t,x[t])}),T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),T.frustumCulled=!1,e.g.add(T),m(e),g(Ru.x+1,e.f.y+3.2,Ru.z+-2,44,34,16760682,3.2),g(Ru.x+-13+2,e.f.y+3,Ru.z+5,34,26,16763008,2.4),g(Ru.x+1+6,e.f.y+3.2,Ru.z+-2+4,20,18,16752048,2),_.push({id:`dhaba`,gurmukhi:`ਰੰਗਲਾ ਢਾਬਾ`,english:`Rangla Dhaba`,position:new W(Ru.x,e.f.y,Ru.z),radius:26});for(let e=0;e<14;e++){let n=new Sr({map:u,color:`#cfcac2`,transparent:!0,depthWrite:!1,opacity:0});f.push(n);let r=new Ir(n);r.userData.phase=e/14,t.add(r),se.push(r)}}let ue=new W(Ru.x-15.4,tf(Ru.x,Ru.z)+6,Ru.z+.2);e.add(t);let de=!1,fe=()=>{e.traverse(e=>{e.name===`nehar-water`&&(e.visible=!1,de=!0)})};fe();let pe=[];for(let e=0;e<4;e++){let e=new Qa(16762490,0,28,2);e.castShadow=!1,t.add(e),pe.push(e)}let me=[,,,,].fill(-1),he=0,ge=0,_e=0,ve=!1,ye=new W;return{motorPositions:v,landmarks:_,update(e,t,n,i){if(!ve){r.value=t,!de&&_e++<240&&fe(),he+=(+!!n-he)*Math.min(1,e*1.8),o.color.setScalar(.42+.8*he),ce.color.setScalar(.4+.9*he),d.opacity=he*.8,ge-=e,ge<=0&&i&&he>.02&&(ge=.6,h.map((e,t)=>({i:t,d:e.pos.distanceToSquared(i)})).sort((e,t)=>e.d-t.d).slice(0,4).forEach((e,t)=>{if(me[t]!==e.i){me[t]=e.i;let n=h[e.i];pe[t].position.copy(n.pos),pe[t].color.setHex(n.color),pe[t].distance=n.distance}})),pe.forEach((e,t)=>{let n=me[t]>=0?h[me[t]]:null;e.intensity=n?n.intensity*he:0}),x.forEach((e,n)=>{e.scale.x=e.scale.z=1+.18*Math.sin(t*31+n*1.7),e.scale.y=1+.04*Math.sin(t*17+n)}),T.opacity=.86+.06*Math.sin(t*2.2);for(let t=0;t<b.length;t++)for(let n=0;n<26;n++){let r=t*26+n,i=r*3;O[i+1]-=9.81*e,D[i]+=O[i]*e,D[i+1]+=O[i+1]*e,D[i+2]+=O[i+2]*e,D[i+1]<b[t].pool&&N(r,t,!1)}k.getAttribute(`position`).needsUpdate=!0,se.forEach((e,n)=>{let r=((t*.16+e.userData.phase)%1+1)%1,i=n%2==0?le:ue;ye.copy(i),e.position.set(ye.x+Math.sin(r*6+n)*.5*r+r*2.2,ye.y+r*5.5,ye.z+Math.cos(r*5+n*2)*.4*r),e.scale.setScalar(.5+r*2.4),e.material.opacity=(1-r)*.38*Ll(0,.12,r)})}},dispose(){ve=!0,e.remove(t);for(let e of Up)Id(e);Up.length=0,zf(t);for(let e of f)e.dispose();for(let e of n)e.dispose();e.traverse(e=>{e.name===`nehar-water`&&(e.visible=!0)})}}}var tm=[{level:0,gurmukhi:`ਸੁੱਕਾ ਮੌਸਮ`,english:`Dry`,intensity:0},{level:1,gurmukhi:`ਕਣੀਆਂ`,english:`Light Shower`,intensity:.38},{level:2,gurmukhi:`ਸਾਵਣ ਦੀ ਝੜੀ`,english:`Heavy Downpour`,intensity:1}],nm=[{id:`noon`,gurmukhi:`ਦੁਪਹਿਰ`,english:`Noon`,hour:12.5},{id:`sunset`,gurmukhi:`ਸੁਨਹਿਰੀ ਸ਼ਾਮ`,english:`Sunset`,hour:18.4},{id:`night`,gurmukhi:`ਤਾਰਿਆਂ ਭਰੀ ਰਾਤ`,english:`Night`,hour:22},{id:`dawn`,gurmukhi:`ਅੰਮ੍ਰਿਤ ਵੇਲਾ`,english:`Dawn`,hour:5.4},{id:`monsoon`,gurmukhi:`ਸਾਵਣ ਦਾ ਮੀਂਹ`,english:`Monsoon`,hour:16}],rm=e=>new K(e),im=(e,t,n)=>new W(e,t,n).normalize();function am(){return{noon:{zenith:rm(`#2c78d6`),horizon:rm(`#b9dcf0`),ground:rm(`#a9c9a0`),fog:rm(`#c3dfe9`),fogDensity:9e-4,sunColor:rm(`#fff0cc`),sunIntensity:3.6,sunDir:im(.42,.82,-.3),lightDir:im(.42,.82,-.3),moonDir:im(-.5,-.4,.6),sunVis:1,stars:0,cloudColor:rm(`#ffffff`),cloudCover:.5,hemiSky:rm(`#bcd8ff`),hemiGround:rm(`#6f8f3c`),hemiIntensity:1.35,exposure:1.15,night:0,motes:.35},sunset:{zenith:rm(`#3c4c9c`),horizon:rm(`#ffae4a`),ground:rm(`#b97a3a`),fog:rm(`#f2b574`),fogDensity:.0012,sunColor:rm(`#ffa040`),sunIntensity:2.7,sunDir:im(-.82,.16,.5),lightDir:im(-.82,.16,.5),moonDir:im(.5,.3,-.7),sunVis:1,stars:.08,cloudColor:rm(`#ffc890`),cloudCover:.62,hemiSky:rm(`#ffc690`),hemiGround:rm(`#7d5a28`),hemiIntensity:1.05,exposure:1.1,night:.12,motes:.7},night:{zenith:rm(`#040a1e`),horizon:rm(`#14234a`),ground:rm(`#0a1224`),fog:rm(`#0d1a38`),fogDensity:.0013,sunColor:rm(`#9db8ff`),sunIntensity:.75,sunDir:im(.3,-.5,-.4),lightDir:im(-.45,.62,.5),moonDir:im(-.45,.62,.5),sunVis:0,stars:1,cloudColor:rm(`#2a3a66`),cloudCover:.25,hemiSky:rm(`#2b3f7a`),hemiGround:rm(`#101a30`),hemiIntensity:.7,exposure:1.3,night:1,motes:.1},dawn:{zenith:rm(`#6b90c4`),horizon:rm(`#ffd9a2`),ground:rm(`#cdbf9b`),fog:rm(`#f1dcc0`),fogDensity:.0021,sunColor:rm(`#ffd08c`),sunIntensity:2.1,sunDir:im(.86,.13,.42),lightDir:im(.86,.13,.42),moonDir:im(-.6,.35,-.6),sunVis:1,stars:.1,cloudColor:rm(`#ffe4c0`),cloudCover:.55,hemiSky:rm(`#ffe4bc`),hemiGround:rm(`#6e7c4a`),hemiIntensity:1,exposure:1.1,night:.1,motes:.9},monsoon:{zenith:rm(`#2f3854`),horizon:rm(`#7a8496`),ground:rm(`#56704f`),fog:rm(`#7f8a98`),fogDensity:.0036,sunColor:rm(`#c3cde2`),sunIntensity:1.15,sunDir:im(.25,.85,-.35),lightDir:im(.25,.85,-.35),moonDir:im(-.5,-.4,.6),sunVis:.04,stars:0,cloudColor:rm(`#4b5572`),cloudCover:1,hemiSky:rm(`#93a2c0`),hemiGround:rm(`#2f8a2c`),hemiIntensity:1.25,exposure:1.08,night:.22,motes:0}}}function om(e){return{...e,zenith:e.zenith.clone(),horizon:e.horizon.clone(),ground:e.ground.clone(),fog:e.fog.clone(),sunColor:e.sunColor.clone(),sunDir:e.sunDir.clone(),lightDir:e.lightDir.clone(),moonDir:e.moonDir.clone(),cloudColor:e.cloudColor.clone(),hemiSky:e.hemiSky.clone(),hemiGround:e.hemiGround.clone()}}function sm(e,t,n){e.zenith.lerp(t.zenith,n),e.horizon.lerp(t.horizon,n),e.ground.lerp(t.ground,n),e.fog.lerp(t.fog,n),e.sunColor.lerp(t.sunColor,n),e.cloudColor.lerp(t.cloudColor,n),e.hemiSky.lerp(t.hemiSky,n),e.hemiGround.lerp(t.hemiGround,n),e.sunDir.lerp(t.sunDir,n).normalize(),e.lightDir.lerp(t.lightDir,n).normalize(),e.moonDir.lerp(t.moonDir,n).normalize();for(let r of[`fogDensity`,`sunIntensity`,`sunVis`,`stars`,`cloudCover`,`hemiIntensity`,`exposure`,`night`,`motes`])e[r]+=(t[r]-e[r])*n}var cm=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // pin to the far plane
}`,lm=`
uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uGround;
uniform vec3 uSunDir; uniform vec3 uSunColor; uniform float uSunVis;
uniform vec3 uMoonDir; uniform float uStars;
uniform vec3 uCloudColor; uniform float uCloudCover;
uniform float uTime; uniform float uFlash;
varying vec3 vDir;

float hash31(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1, 0)), f.x), mix(hash21(i + vec2(0, 1)), hash21(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { float a = 0.5; float s = 0.0; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  float up = clamp(h, 0.0, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(up, 0.5));
  // Below the horizon blend to the hazy ground colour so the far terrain edge melts into the dome.
  col = mix(col, uGround, smoothstep(0.02, -0.18, h));

  // Sun: warm glow around the disc, a hot core, and a low horizon band that leans towards the sun.
  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunColor * (pow(sd, 5.0) * 0.18 + pow(sd, 40.0) * 0.5) * uSunVis;
  col = mix(col, uSunColor * 0.95, pow(sd, 3.0) * 0.28 * (1.0 - up) * uSunVis);
  float disc = smoothstep(0.99935, 0.9997, sd);
  col = mix(col, uSunColor * 5.0, disc * uSunVis * step(-0.02, h));

  // Clouds on a flat plane overhead: soft fbm, brighter on the sunward side, fading into the haze.
  vec2 cuv = d.xz / (h + 0.22) * 0.55 + vec2(uTime * 0.004, uTime * 0.0015);
  float cn = fbm(cuv * 1.7);
  float cl = smoothstep(1.0 - uCloudCover * 0.75, 1.0 - uCloudCover * 0.75 + 0.28, cn);
  cl *= smoothstep(0.015, 0.22, h);
  float lit = 0.62 + 0.38 * pow(sd, 1.5);
  vec3 cloud = uCloudColor * (0.65 + 0.5 * lit);
  col = mix(col, cloud, cl * 0.82);

  // Night: stars (twinkling hash grid) and a moon with a soft halo.
  if (uStars > 0.01) {
    vec3 sp = d * 260.0;
    vec3 cell = floor(sp);
    float r = hash31(cell);
    float star = step(0.9935, r) * smoothstep(0.5, 0.0, length(fract(sp) - 0.5));
    float tw = 0.65 + 0.35 * sin(uTime * (1.5 + r * 5.0) + r * 40.0);
    float vis = smoothstep(0.0, 0.2, h) * (1.0 - cl * 0.9);
    col += vec3(0.85, 0.9, 1.0) * star * tw * 1.6 * uStars * vis;
    float md = dot(d, uMoonDir);
    float mdisc = smoothstep(0.99905, 0.9993, md);
    float crater = 0.85 + 0.15 * vnoise(d.xz * 90.0);
    col += vec3(1.0, 0.97, 0.88) * (mdisc * crater * 2.4 + pow(max(md, 0.0), 90.0) * 0.35 + pow(max(md, 0.0), 12.0) * 0.05) * uStars;
  }
  // Sheet lightning: the whole cloud deck lights up from inside, brightest in the clouds themselves.
  col += vec3(0.62, 0.68, 0.86) * uFlash * (0.35 + 0.65 * cl) * smoothstep(-0.05, 0.3, h);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,um=`
uniform vec3 uCenter; uniform float uTime; uniform float uSize; uniform float uBox;
attribute vec3 aSeed;
varying float vFade;
void main() {
  vec3 drift = vec3(0.5 + aSeed.x * 0.3, 0.05 + aSeed.y * 0.12, 0.25 * aSeed.z) * uTime * 0.9;
  vec3 local = mod(aSeed * uBox + drift - uCenter + uBox * 0.5, uBox) - uBox * 0.5;
  vec3 wp = uCenter + local;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  float dist = length(mv.xyz);
  vFade = smoothstep(uBox * 0.5, uBox * 0.2, length(local)) * smoothstep(1.0, 4.0, dist);
  gl_PointSize = uSize * (300.0 / max(dist, 1.0));
}`,dm=`
uniform vec3 uColor; uniform float uAlpha;
varying float vFade;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d) * vFade * uAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor, a);
}`,fm=`
uniform vec3 uCenter; uniform float uTime; uniform vec3 uVel; uniform float uBox; uniform float uBoxY;
uniform float uLen; uniform float uIntensity;
attribute vec3 aSeed; attribute float aEnd;
varying float vA;
void main() {
  float speedMul = 0.85 + 0.3 * fract(aSeed.x * 7.13 + aSeed.z * 3.1);
  vec3 vel = uVel * speedMul;
  vec3 box = vec3(uBox, uBoxY, uBox);
  vec3 p = aSeed * box + vel * uTime;
  vec3 local = mod(p - uCenter + box * 0.5, box) - box * 0.5;
  vec3 wp = uCenter + local - normalize(vel) * uLen * speedMul * aEnd;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  // Light showers thin out the drop count; fade near the box edges and very close to the lens.
  float keep = step(fract(aSeed.y * 13.7 + aSeed.x * 5.3), uIntensity);
  float edge = smoothstep(uBox * 0.5, uBox * 0.3, length(local.xz));
  float nearFade = smoothstep(0.6, 2.5, -mv.z);
  vA = keep * edge * nearFade * (1.0 - 0.55 * aEnd);
}`,pm=`
uniform vec3 uColor; uniform float uAlpha;
varying float vA;
void main() {
  float a = vA * uAlpha;
  if (a < 0.005) discard;
  gl_FragColor = vec4(uColor, a);
}`,mm=`
uniform vec3 uCenter; uniform float uTime; uniform float uRadius; uniform float uIntensity;
attribute vec3 aSeed;
varying float vA;
float h11(float n) { return fract(sin(n) * 43758.5453); }
void main() {
  float rate = 2.2 + aSeed.z * 1.6;
  float cyc = uTime * rate + aSeed.x * 17.0;
  float k = floor(cyc);
  float f = fract(cyc);
  vec2 r = vec2(h11(k * 1.7 + aSeed.y * 91.3), h11(k * 2.3 + aSeed.x * 47.9)) - 0.5;
  vec3 wp = vec3(uCenter.x + r.x * 2.0 * uRadius, uCenter.y + 0.06 + 0.22 * f * (1.0 - f), uCenter.z + r.y * 2.0 * uRadius);
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  float keep = step(aSeed.y, uIntensity);
  vA = keep * (1.0 - f) * smoothstep(0.0, 0.08, f) * smoothstep(uRadius, uRadius * 0.6, length(r) * 2.0 * uRadius);
  // Small crown splashes: capped in pixels so drops near the lens never balloon into bubbles.
  gl_PointSize = min((1.0 + 3.0 * f) * (38.0 / max(-mv.z, 1.0)), 14.0);
}`,hm=`
uniform vec3 uColor; uniform float uAlpha;
varying float vA;
void main() {
  // Thin ring: a crown splash seen from above.
  float d = length(gl_PointCoord - 0.5);
  float ring = smoothstep(0.5, 0.4, d) * (0.35 + 0.65 * smoothstep(0.1, 0.32, d));
  float a = ring * vA * uAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor, a);
}`,gm=95,_m=2048;function vm(e,t){let n=am(),r=`noon`,i=om(n.noon),a=!0,o=0,s=new Qi(1,48,32),c=new ca({uniforms:{uZenith:{value:i.zenith},uHorizon:{value:i.horizon},uGround:{value:i.ground},uSunDir:{value:i.sunDir},uSunColor:{value:i.sunColor},uSunVis:{value:1},uMoonDir:{value:i.moonDir},uStars:{value:0},uCloudColor:{value:i.cloudColor},uCloudCover:{value:.5},uTime:{value:0},uFlash:{value:0}},vertexShader:cm,fragmentShader:lm,side:1,depthWrite:!1,depthTest:!1,fog:!1}),l=new J(s,c);l.name=`sky-dome`,l.frustumCulled=!1,l.renderOrder=-1e3,e.add(l);let u=new to(i.sunColor,i.sunIntensity);u.name=`key-light`,u.castShadow=!0,u.shadow.mapSize.set(_m,_m);let d=u.shadow.camera;d.left=-95,d.right=gm,d.top=gm,d.bottom=-95,d.near=1,d.far=520,u.shadow.bias=-35e-5,u.shadow.normalBias=.35,e.add(u,u.target);let f=new Ia(i.hemiSky,i.hemiGround,i.hemiIntensity);f.name=`hemisphere-fill`,e.add(f);let p=new _n(i.fog.getHex(),i.fogDensity);e.fog=p,e.background=i.fog.clone();let m=new Float32Array(1260),h=987654321,g=()=>(h=h*1664525+1013904223>>>0,h/4294967296);for(let e=0;e<m.length;e++)m[e]=g();let _=new dr;_.setAttribute(`position`,new Zn(new Float32Array(1260),3)),_.setAttribute(`aSeed`,new Zn(m,3));let v=new ca({uniforms:{uCenter:{value:new W},uTime:{value:0},uSize:{value:.07},uBox:{value:70},uColor:{value:new K(`#fff2cf`)},uAlpha:{value:.4}},vertexShader:um,fragmentShader:dm,transparent:!0,depthWrite:!1,fog:!1}),y=new Li(_,v);y.frustumCulled=!1,y.name=`dust-motes`,e.add(y);let b=3500,x=new Float32Array(b*2*3),S=new Float32Array(b*2);for(let e=0;e<b;e++){let t=g(),n=g(),r=g();for(let i=0;i<2;i++){let a=(e*2+i)*3;x[a]=t,x[a+1]=n,x[a+2]=r,S[e*2+i]=i}}let C=new dr;C.setAttribute(`position`,new Zn(new Float32Array(b*2*3),3)),C.setAttribute(`aSeed`,new Zn(x,3)),C.setAttribute(`aEnd`,new Zn(S,1));let w=new ca({uniforms:{uCenter:{value:new W},uTime:{value:0},uVel:{value:new W(3.2,-16,1.4)},uBox:{value:64},uBoxY:{value:34},uLen:{value:.75},uIntensity:{value:0},uColor:{value:new K(`#c9d4e4`)},uAlpha:{value:0}},vertexShader:fm,fragmentShader:pm,transparent:!0,depthWrite:!1,fog:!1}),T=new ji(C,w);T.frustumCulled=!1,T.name=`rain-streaks`,T.renderOrder=6,T.visible=!1,e.add(T);let E=new Float32Array(1560);for(let e=0;e<E.length;e++)E[e]=g();let D=new dr;D.setAttribute(`position`,new Zn(new Float32Array(1560),3)),D.setAttribute(`aSeed`,new Zn(E,3));let O=new ca({uniforms:{uCenter:{value:new W},uTime:{value:0},uRadius:{value:18},uIntensity:{value:0},uColor:{value:new K(`#dfe8f2`)},uAlpha:{value:0}},vertexShader:mm,fragmentShader:hm,transparent:!0,depthWrite:!1,fog:!1}),k=new Li(D,O);k.frustumCulled=!1,k.name=`rain-splashes`,k.renderOrder=6,k.visible=!1,e.add(k);let A=0,j=0,M=0,N=0,P=!1,ee=4,F=-1,I=new K(`#8b95a3`),te=new K(`#dfe6ff`),ne=new K,re=()=>Math.max(tm[A].intensity,+(r===`monsoon`)),ie=()=>A===2||r===`monsoon`,L=new W,ae=new W,R=new W,oe=new W(0,1,0),se=()=>{c.uniforms.uSunVis.value=i.sunVis,c.uniforms.uStars.value=i.stars,c.uniforms.uCloudCover.value=i.cloudCover,c.uniforms.uTime.value=o,u.color.copy(i.sunColor),u.intensity=i.sunIntensity,f.color.copy(i.hemiSky),f.groundColor.copy(i.hemiGround),f.intensity=i.hemiIntensity,p.color.copy(i.fog),p.density=i.fogDensity,e.background.copy(i.fog),t.toneMappingExposure=i.exposure,v.uniforms.uAlpha.value=.55*i.motes*(1-i.night*.8),v.uniforms.uColor.value.copy(i.sunColor).lerp(new K(`#ffffff`),.45);let n=r===`monsoon`?j*.25:j;n>.001&&(p.density=i.fogDensity*(1+1.5*n),p.color.lerp(ne.copy(I).multiplyScalar(1-.75*i.night),.55*n),u.intensity=i.sunIntensity*(1-.6*n),c.uniforms.uSunVis.value=i.sunVis*(1-.9*n),c.uniforms.uCloudCover.value=Math.max(i.cloudCover,.55+.45*n),c.uniforms.uStars.value=i.stars*(1-n),v.uniforms.uAlpha.value*=1-n),c.uniforms.uFlash.value=N,N>.001&&(f.intensity+=2.6*N,p.color.lerp(te,.35*N),t.toneMappingExposure=i.exposure*(1+.35*N)),e.background.copy(p.color),w.uniforms.uIntensity.value=j,w.uniforms.uAlpha.value=(.32+.3*j)*(1-.45*i.night)+.4*N,O.uniforms.uIntensity.value=j,O.uniforms.uAlpha.value=(.35+.25*j)*(1-.4*i.night),T.visible=j>.01,k.visible=j>.05};se();let ce={sunLight:u,hemiLight:f,get preset(){return r},get nightFactor(){return i.night},isNight:()=>i.night>.5,get shadowsEnabled(){return a},setShadowsEnabled(n){a=n,u.castShadow=n,t.shadowMap.enabled=n,e.traverse(e=>{let t=e.material;Array.isArray(t)?t.forEach(e=>e.needsUpdate=!0):t&&(t.needsUpdate=!0)})},setPreset(e,t=!1){if(r=e,t){let t=n[e];sm(i,t,1),se()}},cycle(e=!1){let t=nm[(nm.findIndex(e=>e.id===r)+1)%nm.length].id;return ce.setPreset(t,e),t},hour(){return nm.find(e=>e.id===r).hour},get rainLevel(){return A},get rainIntensity(){return j},get wetness(){return M},get lightningFlash(){return N},get lightningJustFlashed(){return P},setRainLevel(e){A=e},cycleRain(){return A=(A+1)%3,A},getWeatherLabel(){let e=tm[r===`monsoon`?2:A];return`${e.gurmukhi} · ${e.english}`},update(e,t,a){o+=e;let s=Math.min(e,.1),c=re();j+=(c-j)*(1-Math.exp(-s*.7)),j<.002&&c===0&&(j=0),M=j>M?Math.min(j,M+s*.12*(.3+j)):Math.max(j,M-s*.012),P=!1,ie()&&j>.6&&(ee-=s,ee<=0&&(N=.75+.25*g(),P=!0,ee=6+g()*11,F=g()<.6?.12+g()*.15:-1)),F>0&&(F-=s,F<=0&&(N=Math.max(N,.6+.4*g()),F=-1)),N=N>.002?N*Math.exp(-s*7.5)*(.92+.08*Math.sin(o*90)):0,sm(i,n[r],1-Math.exp(-Math.min(e,.1)*2.4)),se(),l.position.copy(t.position);let d=t.far??3e3;l.scale.setScalar(d*.85);let f=i.lightDir;L.crossVectors(oe,f).normalize(),ae.crossVectors(f,L).normalize();let p=190/_m,m=Math.round(a.dot(L)/p)*p,h=Math.round(a.dot(ae)/p)*p,_=a.dot(f);if(R.set(0,0,0).addScaledVector(L,m).addScaledVector(ae,h).addScaledVector(f,_),u.target.position.copy(R),u.position.copy(R).addScaledVector(f,260),u.target.updateMatrixWorld(),v.uniforms.uCenter.value.copy(t.position),v.uniforms.uTime.value=o,T.visible){w.uniforms.uCenter.value.copy(t.position),w.uniforms.uTime.value=o;let e=.7+.3*Math.sin(o*.23)+.15*Math.sin(o*.71);w.uniforms.uVel.value.set(3.4*e*(.6+.4*j),-15-5*j,1.5*e),w.uniforms.uLen.value=.55+.45*j}k.visible&&(O.uniforms.uCenter.value.copy(a),O.uniforms.uTime.value=o)},dispose(){e.remove(l,u,u.target,f,y,T,k),s.dispose(),c.dispose(),_.dispose(),v.dispose(),C.dispose(),w.dispose(),D.dispose(),O.dispose(),u.shadow.map?.dispose(),e.fog=null}};return ce}var ym={skin:`#b97b52`,kurta:`#f4efe2`,pajama:`#ece6d6`,vest:`#2f3b63`,pagg:`#f08a1c`,parna:`#c8324f`,beard:`#1d1714`,jutti:`#6a3a1c`};function bm(e,t=.85){return new ua({color:e,roughness:t,metalness:0})}function xm(e,t,n=0,r=0,i=0){let a=new J(e,t);return a.position.set(n,r,i),a.castShadow=!0,a}function Sm(e=ym){let t=bm(e.skin,.7),n=bm(e.kurta),r=bm(e.pajama),i=bm(e.vest,.75),a=bm(e.pagg,.6),o=bm(new K(e.pagg).multiplyScalar(.82).getStyle(),.6),s=bm(e.parna,.8),c=bm(e.beard,.95),l=bm(e.jutti,.5),u=new ua({color:`#d9a93a`,roughness:.35,metalness:.6}),d=bm(`#141010`,.4),f=new G;f.name=`player`;let p=new G;f.add(p);let m=e=>{let t=new G;t.position.set(.095*e,.92,0),t.add(xm(new Ki(.078,.068,.46,10),r,0,-.23,0));let n=new G;n.position.y=-.46,n.add(xm(new Ki(.066,.056,.42,10),r,0,-.21,0));let i=xm(new Wi(.1,.06,.24),l,0,-.43,.04);n.add(i);let a=xm(new qi(.03,.08,6),u,0,-.41,.18);return a.rotation.x=Math.PI/2.4,n.add(a),t.add(n),p.add(t),{hip:t,knee:n}},h=m(1),g=m(-1),_=new G;_.position.y=.92,p.add(_),_.add(xm(new Ki(.2,.28,.46,14,1,!0),n,0,-.2,0)),_.add(xm(new Ki(.19,.2,.52,14),n,0,.27,0));let v=xm(new Qi(.2,14,8,0,Math.PI*2,0,Math.PI/2),n,0,.5,0);v.scale.set(1.25,.45,.85),_.add(v);let y=xm(new Ki(.205,.215,.44,16,1,!0,.42,Math.PI*2-.84),i,0,.3,0);y.material=i.clone(),y.material.side=2,_.add(y);for(let e=0;e<3;e++)_.add(xm(new Qi(.012,6,4),u,0,.42-e*.08,.197));let b=xm(new Wi(.09,.62,.02),s,.03,.27,.205);b.rotation.z=-.62,_.add(b);let x=xm(new Wi(.09,.62,.02),s,.03,.27,-.205);x.rotation.z=.62,_.add(x);let S=xm(new Wi(.1,.42,.02),s,.15,.28,-.215);_.add(S);let C=e=>{let r=new G;r.position.set(.25*e,.48,0),r.add(xm(new Ki(.06,.055,.3,8),n,0,-.15,0));let i=new G;if(i.position.y=-.3,i.add(xm(new Ki(.055,.05,.25,8),n,0,-.125,0)),i.add(xm(new Qi(.052,8,6),t,0,-.29,0)),e===-1){let e=xm(new $i(.05,.01,6,14),new ua({color:`#c9ccd2`,metalness:.9,roughness:.25}),0,-.24,0);e.rotation.x=Math.PI/2,i.add(e)}return r.add(i),_.add(r),{shoulder:r,elbow:i}},w=C(1),T=C(-1),E=new G;E.position.y=.6,_.add(E),E.add(xm(new Ki(.055,.065,.1,8),t,0,.02,0));let D=xm(new Qi(.115,16,12),t,0,.16,.005);D.scale.set(.92,1.08,.98),E.add(D),E.add(xm(new Wi(.03,.05,.04),t,0,.15,.115));for(let e of[-1,1])E.add(xm(new Qi(.013,6,4),d,.04*e,.185,.1));let O=xm(new Qi(.112,14,10,0,Math.PI*2,Math.PI*.45,Math.PI*.55),c,0,.15,.02);O.scale.set(.98,1.25,1.02),E.add(O);let k=xm(new Wi(.09,.018,.02),c,0,.12,.112);E.add(k);let A=new G;A.position.set(0,.24,-.008),E.add(A);let j=xm(new Ki(.128,.122,.08,18),a,0,0,0);j.scale.set(1,1,1.12),A.add(j);for(let e=0;e<4;e++){let t=xm(new $i(.118-e*.006,.022,6,22),e%2?o:a,0,.035+e*.03,0);t.rotation.x=Math.PI/2-.22+e*.02,t.scale.set(1,1.12,1),A.add(t)}let M=xm(new Qi(.118,16,8,0,Math.PI*2,0,Math.PI/2),a,0,.1,-.012);M.scale.set(1,.7,1.1),A.add(M);let N=xm(new qi(.05,.09,4),o,0,.13,.1);return N.rotation.x=.35,A.add(N),{root:f,body:p,torso:_,head:E,armL:w.shoulder,armR:T.shoulder,elbowL:w.elbow,elbowR:T.elbow,legL:h.hip,legR:g.hip,kneeL:h.knee,kneeR:g.knee,parnaTail:S}}var Cm=.35,wm=.45,Tm=1.8,Em=4.2,Dm=7.6,Om=2.4,km=3.4,Am=14,jm=2.5,Mm=24,Nm=7.2,Pm=1.25,Fm={sugarcane:.7,paddy:.74,wheat:.93,mustard:.9,canal_water:.8,pond_water:.8},Im=class{mesh;position=new W;velocity=new W;yaw=0;grounded=!0;inWater=!1;wading=!1;swimming=!1;climbingOut=!1;sprinting=!1;splash=!1;splashIntensity=0;airTime=0;justLanded=!1;surface=`wheat`;waterDepth=0;enabled=!0;world;phase=0;bob=0;stride=0;cq={boxes:[],cylinders:[]};constructor(e,t=Sm()){this.world=e,this.mesh=t,this.spawn(pu.x,pu.z,pu.heading)}spawn(e=pu.x,t=pu.z,n=pu.heading){this.position.set(e,this.world.getSurfaceHeight(e,t),t),this.velocity.set(0,0,0),this.yaw=n,this.grounded=!0,this.airTime=0,this.syncMesh()}get horizontalSpeed(){return Math.hypot(this.velocity.x,this.velocity.z)}getEyePosition(e=new W){return e.set(this.position.x+Math.sin(this.yaw)*.12,this.position.y+1.66,this.position.z+Math.cos(this.yaw)*.12)}setVisible(e){this.mesh.root.visible=e}update(e,t,n,r=!1){if(!this.enabled)return;e=Math.min(e,.05);let i=this.world,a=this.position,o=this.velocity,s=this.grounded,c=Math.sin(n),l=Math.cos(n),u=c*t.moveY-l*t.moveX,d=l*t.moveY+c*t.moveX,f=Math.hypot(u,d);f>1&&(u/=f,d/=f);let p=f>.05;this.surface=i.getSurfaceType(a.x,a.z,a.y);let m=i.getWaterLevel(a.x,a.z),h=i.isWater(a.x,a.z),g=i.getSurfaceHeight(a.x,a.z,a.y+Tm);this.waterDepth=m===null?0:Math.max(0,m-a.y);let _=m===null?0:m-g;this.inWater=this.waterDepth>.03,this.swimming=h&&_>Pm&&a.y<m-Pm+.35,this.wading=this.inWater&&!this.swimming,this.sprinting=t.sprint&&p&&!this.swimming;let v=this.swimming?t.sprint?km:Om:this.sprinting?Dm:Em;this.swimming||(v*=Fm[this.surface]??1,this.wading&&(v*=Il(1,.45,X(this.waterDepth/Pm,0,1))));let y=this.grounded||this.swimming?Am:jm;if(o.x=Rl(o.x,u*v,y,e),o.z=Rl(o.z,d*v,y,e),p&&(this.yaw=Bl(this.yaw,Math.atan2(u,d),this.swimming?6:12,e)),r&&this.grounded&&!this.swimming&&(o.y=this.wading?Nm*.7:Nm,this.grounded=!1),this.swimming){let t=m-Pm;o.y=Rl(o.y,(t-a.y)*4,6,e)}else o.y-=Mm*e;let b=this.inWater?Tm:wm,x=a.x+o.x*e,S=a.z+o.z*e;i.isBlockedOverhead(x,S,a.y,1.8,b)&&(i.isBlockedOverhead(x,a.z,a.y,1.8,b)?i.isBlockedOverhead(a.x,S,a.y,1.8,b)?(x=a.x,S=a.z):x=a.x:S=a.z),a.x=X(x,-798,798),a.z=X(S,-798,798),a.y+=o.y*e,this.resolveColliders(b);let C=i.getSurfaceHeight(a.x,a.z,a.y+b);this.climbingOut=this.inWater&&C>a.y+.25&&p,this.justLanded=!1,a.y<=C+.02&&o.y<=.5?(!s&&this.airTime>.25&&(this.justLanded=!0),a.y=C,o.y=Math.max(o.y,0),this.grounded=!0):s&&o.y<=0&&a.y-C<.4&&!this.swimming?(a.y=C,o.y=0,this.grounded=!0):this.grounded=this.swimming,a.y<C&&(a.y=C),this.airTime=this.grounded?0:this.airTime+e;let w=this.horizontalSpeed,T=this.inWater&&!s&&o.y<-3;this.splash=this.inWater&&w>.8||T||this.swimming&&p,this.splashIntensity=this.splash?X(w/Dm+(T?.6:0)+this.waterDepth*.3,0,1):0,this.animate(e,w),this.syncMesh()}resolveColliders(e){let t=this.position,n=Cm;this.world.queryColliders(t.x,t.z,1.35,this.cq);for(let r of this.cq.boxes){if(t.y>=r.maxY-.05||t.y+1.8<=r.minY||r.walkableTop&&r.maxY-t.y<=e)continue;let i=Jl(t.x-r.cx,t.z-r.cz,r.rotY),a=X(i.x,-r.halfX,r.halfX),o=X(i.z,-r.halfZ,r.halfZ),s=i.x-a,c=i.z-o,l=Math.hypot(s,c);if(l>=n)continue;let u;if(l<1e-5){let e=r.halfX-Math.abs(i.x),t=r.halfZ-Math.abs(i.z);e<t?(s=Math.sign(i.x)||1,c=0,u=e+n):(s=0,c=Math.sign(i.z)||1,u=t+n),l=1}else u=n-l;let d=s/l*u,f=c/l*u,p=Math.cos(r.rotY),m=Math.sin(r.rotY),h=d*p+f*m,g=-d*m+f*p;t.x+=h,t.z+=g,this.killVelocityInto(h,g)}for(let e of this.cq.cylinders){if(t.y>=e.maxY-.05||t.y+1.8<=e.minY)continue;let r=t.x-e.x,i=t.z-e.z,a=Math.hypot(r,i),o=n+e.radius;if(a>=o)continue;let s=a>1e-5?r/a:1,c=a>1e-5?i/a:0;t.x=e.x+s*o,t.z=e.z+c*o,this.killVelocityInto(s,c)}}killVelocityInto(e,t){let n=Math.hypot(e,t);if(n<1e-6)return;e/=n,t/=n;let r=this.velocity.x*e+this.velocity.z*t;r<0&&(this.velocity.x-=r*e,this.velocity.z-=r*t)}animate(e,t){let n=this.mesh,r=performance.now()/1e3,i=X(t/Dm,0,1);this.phase+=e*(this.swimming?4:5+t*1.25)*(t>.2||this.swimming?1:0),this.stride=Rl(this.stride,t>.2?X(t/Em,0,1.4):0,10,e);let a=Math.sin(this.phase),o=Math.cos(this.phase),s=.55*this.stride;this.swimming?(n.body.rotation.x=Rl(n.body.rotation.x,1.15,5,e),n.body.position.y=Rl(n.body.position.y,.55,5,e),n.armL.rotation.x=-Math.PI*.8+Math.sin(this.phase)*1.4,n.armR.rotation.x=-Math.PI*.8+Math.sin(this.phase+Math.PI)*1.4,n.armL.rotation.z=n.armR.rotation.z=0,n.legL.rotation.x=Math.sin(this.phase*2)*.35,n.legR.rotation.x=-Math.sin(this.phase*2)*.35,n.kneeL.rotation.x=n.kneeR.rotation.x=.2,n.elbowL.rotation.x=n.elbowR.rotation.x=-.3,n.head.rotation.x=-.9):(n.body.rotation.x=Rl(n.body.rotation.x,i*.18+(this.climbingOut?.35:0),8,e),n.head.rotation.x=Rl(n.head.rotation.x,-i*.12,8,e),this.grounded?(n.legL.rotation.x=a*s,n.legR.rotation.x=-a*s,n.kneeL.rotation.x=Math.max(0,-o)*s*1.4,n.kneeR.rotation.x=Math.max(0,o)*s*1.4,n.armL.rotation.x=-a*s*(.8+i*.6),n.armR.rotation.x=a*s*(.8+i*.6),n.elbowL.rotation.x=-.15-i*.9,n.elbowR.rotation.x=-.15-i*.9,n.armL.rotation.z=.08,n.armR.rotation.z=-.08,this.wading&&this.waterDepth>.5&&(n.armL.rotation.z=.5,n.armR.rotation.z=-.5),this.bob=this.stride>.05?Math.abs(a)*.05*this.stride:Math.sin(r*2)*.006,n.body.position.y=this.bob,n.torso.rotation.y=a*.08*this.stride,n.parnaTail.rotation.x=.1+i*.6+Math.sin(r*9)*.05*(.3+i)):(n.legL.rotation.x=Rl(n.legL.rotation.x,-.7,10,e),n.legR.rotation.x=Rl(n.legR.rotation.x,-.3,10,e),n.kneeL.rotation.x=Rl(n.kneeL.rotation.x,1.1,10,e),n.kneeR.rotation.x=Rl(n.kneeR.rotation.x,.6,10,e),n.armL.rotation.x=Rl(n.armL.rotation.x,-1.2,10,e),n.armR.rotation.x=Rl(n.armR.rotation.x,-1,10,e),n.armL.rotation.z=Rl(n.armL.rotation.z,.5,10,e),n.armR.rotation.z=Rl(n.armR.rotation.z,-.5,10,e),n.body.position.y=Rl(n.body.position.y,0,10,e)))}setSeatedPose(e,t=0){let n=this.mesh,r=X(t,-1,1);n.body.position.y=0,n.body.rotation.x=0,e===null?(n.legL.rotation.set(0,0,0),n.legR.rotation.set(0,0,0),n.kneeL.rotation.x=n.kneeR.rotation.x=0,n.armL.rotation.set(0,0,.08),n.armR.rotation.set(0,0,-.08),n.elbowL.rotation.x=n.elbowR.rotation.x=-.15,n.torso.rotation.set(0,0,0),n.head.rotation.set(0,0,0)):e===`bike`?(n.legL.rotation.set(-1.25,0,.18),n.legR.rotation.set(-1.25,0,-.18),n.kneeL.rotation.x=n.kneeR.rotation.x=1.35,n.body.rotation.x=.22,n.armL.rotation.set(-1.05-r*.22,0,.16),n.armR.rotation.set(-1.05+r*.22,0,-.16),n.elbowL.rotation.x=n.elbowR.rotation.x=-.35,n.torso.rotation.set(0,-r*.12,0),n.head.rotation.set(-.18,-r*.15,0)):e===`combine`?(n.legL.rotation.set(-1.42,0,.1),n.legR.rotation.set(-1.42,0,-.1),n.kneeL.rotation.x=n.kneeR.rotation.x=1.38,n.body.rotation.x=.02,n.armL.rotation.set(-1.15-r*.26,0,.16+r*.16),n.armR.rotation.set(-1.15+r*.26,0,-.16+r*.16),n.elbowL.rotation.x=n.elbowR.rotation.x=-.5,n.torso.rotation.set(0,-r*.1,0),n.head.rotation.set(.12,-r*.18,0)):(n.legL.rotation.set(-1.5,0,.06),n.legR.rotation.set(-1.5,0,-.06),n.kneeL.rotation.x=n.kneeR.rotation.x=1.5,n.body.rotation.x=.08,n.armL.rotation.set(-.95-r*.18,0,.12+r*.12),n.armR.rotation.set(-.95+r*.18,0,-.12+r*.12),n.elbowL.rotation.x=n.elbowR.rotation.x=-.6,n.torso.rotation.set(0,-r*.06,0),n.head.rotation.set(-.1,-r*.12,0))}syncMesh(){let e=this.mesh.root;e.position.copy(this.position),e.rotation.set(0,this.yaw,0)}},Lm=(e,t,n,r,i)=>({x:e,z:t,radius:n,steer:r,drive:i}),Rm={tractor:{kind:`tractor`,gurmukhi:`ਟਰੈਕਟਰ`,english:`Tractor`,mass:3e3,maxSpeed:11.5,maxReverse:4,accel:4.8,reverseAccel:3,brakeDecel:9,rollingDrag:.6,airDrag:.004,steerMax:.62,steerSpeed:2.2,highSpeedSteer:.75,wheelBase:2.3,trackWidth:1.7,wheels:[Lm(.85,1.4,.46,!0,!1),Lm(-.85,1.4,.46,!0,!1),Lm(.88,-.9,.82,!1,!0),Lm(-.88,-.9,.82,!1,!0)],suspensionTravel:.18,suspensionStiffness:17,suspensionDamping:5,grip:1.15,handbrakeGrip:.55,offroad:1,leanFactor:0,maxLean:0,pitchFactor:.008,rollFactor:.01,bodyHeight:2.6,bodyLength:3.7,bodyWidth:1.95,collision:[{z:1.15,radius:.95},{z:-.8,radius:1.1}],submergeDepth:1.1,seat:{x:0,y:1.6,z:-.55},showRider:!0,camera:{followDistance:8,followHeight:3.3,lookHeight:1.6,hood:{x:0,y:2.45,z:.1}}},bike:{kind:`bike`,gurmukhi:`ਮੋਟਰਸਾਈਕਲ`,english:`Motorcycle`,mass:180,maxSpeed:27,maxReverse:2,accel:7.2,reverseAccel:1.5,brakeDecel:11,rollingDrag:.4,airDrag:.0035,steerMax:.5,steerSpeed:3.6,highSpeedSteer:.33,wheelBase:1.35,trackWidth:0,wheels:[Lm(0,.67,.31,!0,!1),Lm(0,-.67,.31,!1,!0)],suspensionTravel:.15,suspensionStiffness:22,suspensionDamping:5,grip:1,handbrakeGrip:.42,offroad:.55,leanFactor:1,maxLean:.65,pitchFactor:.012,rollFactor:0,bodyHeight:1.15,bodyLength:2,bodyWidth:.7,collision:[{z:.45,radius:.42},{z:-.45,radius:.42}],submergeDepth:.6,seat:{x:0,y:.82,z:-.15},showRider:!0,camera:{followDistance:5.6,followHeight:2,lookHeight:1.1,hood:{x:0,y:1.45,z:.3}}},jeep:{kind:`jeep`,gurmukhi:`ਜੀਪ`,english:`Jeep`,mass:1600,maxSpeed:30,maxReverse:7,accel:7.5,reverseAccel:4,brakeDecel:12,rollingDrag:.45,airDrag:.0025,steerMax:.58,steerSpeed:2.6,highSpeedSteer:.4,wheelBase:2.4,trackWidth:1.5,wheels:[Lm(.75,1.2,.42,!0,!0),Lm(-.75,1.2,.42,!0,!0),Lm(.75,-1.2,.42,!1,!0),Lm(-.75,-1.2,.42,!1,!0)],suspensionTravel:.26,suspensionStiffness:19,suspensionDamping:4.5,grip:1.05,handbrakeGrip:.4,offroad:.85,leanFactor:0,maxLean:0,pitchFactor:.012,rollFactor:.018,bodyHeight:1.85,bodyLength:4,bodyWidth:1.8,collision:[{z:1.1,radius:1},{z:-1.1,radius:1}],submergeDepth:.9,seat:{x:-.4,y:1,z:-.1},showRider:!0,camera:{followDistance:7.4,followHeight:2.8,lookHeight:1.3,hood:{x:-.4,y:1.6,z:.5}}},truck:{kind:`truck`,gurmukhi:`ਟਰੱਕ`,english:`Truck`,mass:8e3,maxSpeed:22,maxReverse:4,accel:3.3,reverseAccel:2,brakeDecel:7,rollingDrag:.5,airDrag:.003,steerMax:.5,steerSpeed:1.8,highSpeedSteer:.45,wheelBase:4.4,trackWidth:1.9,wheels:[Lm(.95,2.3,.52,!0,!1),Lm(-.95,2.3,.52,!0,!1),Lm(.95,-1.6,.52,!1,!0),Lm(-.95,-1.6,.52,!1,!0),Lm(.95,-2.7,.52,!1,!0),Lm(-.95,-2.7,.52,!1,!0)],suspensionTravel:.2,suspensionStiffness:15,suspensionDamping:5.5,grip:.95,handbrakeGrip:.6,offroad:.6,leanFactor:0,maxLean:0,pitchFactor:.006,rollFactor:.02,bodyHeight:3.3,bodyLength:7.6,bodyWidth:2.45,collision:[{z:2.6,radius:1.3},{z:.3,radius:1.3},{z:-2,radius:1.3}],submergeDepth:1.4,seat:{x:-.55,y:1.9,z:2.4},showRider:!1,camera:{followDistance:12,followHeight:4.6,lookHeight:2.3,hood:{x:-.55,y:2.7,z:3}}},sedan:{kind:`sedan`,gurmukhi:`ਕਾਰ`,english:`Sedan`,mass:1200,maxSpeed:38,maxReverse:7,accel:8.5,reverseAccel:4.5,brakeDecel:14,rollingDrag:.35,airDrag:.0022,steerMax:.55,steerSpeed:2.8,highSpeedSteer:.3,wheelBase:2.55,trackWidth:1.5,wheels:[Lm(.76,1.28,.33,!0,!0),Lm(-.76,1.28,.33,!0,!0),Lm(.76,-1.27,.33,!1,!1),Lm(-.76,-1.27,.33,!1,!1)],suspensionTravel:.14,suspensionStiffness:24,suspensionDamping:5.5,grip:1,handbrakeGrip:.36,offroad:0,leanFactor:0,maxLean:0,pitchFactor:.01,rollFactor:.02,bodyHeight:1.45,bodyLength:4.3,bodyWidth:1.75,collision:[{z:1.2,radius:.92},{z:-1.2,radius:.92}],submergeDepth:.6,seat:{x:-.38,y:.85,z:-.2},showRider:!1,camera:{followDistance:6.8,followHeight:2.3,lookHeight:1,hood:{x:-.38,y:1.25,z:.4}}},combine:{kind:`combine`,gurmukhi:`ਕੰਬਾਈਨ`,english:`Harvest Combine`,mass:5200,maxSpeed:11.7,maxReverse:3.5,accel:3.1,reverseAccel:2.2,brakeDecel:7.5,rollingDrag:.55,airDrag:.004,steerMax:.58,steerSpeed:1.7,highSpeedSteer:.8,wheelBase:3.2,trackWidth:2.4,wheels:[Lm(1.2,1.1,.85,!1,!0),Lm(-1.2,1.1,.85,!1,!0),Lm(1.05,-2.1,.52,!0,!1),Lm(-1.05,-2.1,.52,!0,!1)],suspensionTravel:.14,suspensionStiffness:14,suspensionDamping:6,grip:1.2,handbrakeGrip:.75,offroad:1,leanFactor:0,maxLean:0,pitchFactor:.005,rollFactor:.008,bodyHeight:4.4,bodyLength:7.6,bodyWidth:3,collision:[{z:3,radius:1.8},{z:.6,radius:1.6},{z:-1.9,radius:1.5}],submergeDepth:1.5,seat:{x:0,y:3.2,z:.85},showRider:!0,camera:{followDistance:13,followHeight:5.6,lookHeight:2.8,hood:{x:0,y:4,z:1.5}}}},zm={highway:.15,link_road:.2,phirni_brick:.35,dirt_track:1,verge:.7,watt:1,wheat:.55,mustard:.55,sugarcane:.45,paddy:.2,canal_water:0,pond_water:0},Bm={highway:{traction:1,speed:1,bump:.02,dust:0,splash:0,rustle:0},link_road:{traction:1,speed:1,bump:.06,dust:0,splash:0,rustle:0},phirni_brick:{traction:.92,speed:.88,bump:.3,dust:.1,splash:0,rustle:0},dirt_track:{traction:.82,speed:.78,bump:.65,dust:1,splash:0,rustle:0},verge:{traction:.78,speed:.72,bump:.4,dust:.3,splash:0,rustle:.2},watt:{traction:.7,speed:.62,bump:.8,dust:.7,splash:0,rustle:.2},wheat:{traction:.7,speed:.6,bump:.5,dust:.3,splash:0,rustle:1},mustard:{traction:.7,speed:.6,bump:.5,dust:.3,splash:0,rustle:1},sugarcane:{traction:.55,speed:.38,bump:.6,dust:.2,splash:0,rustle:1},paddy:{traction:.45,speed:.45,bump:.35,dust:0,splash:1,rustle:.5},canal_water:{traction:.3,speed:.3,bump:.2,dust:0,splash:1,rustle:0},pond_water:{traction:.3,speed:.3,bump:.2,dust:0,splash:1,rustle:0}},Vm=9.81*1.6,Hm=65,Um=.6,Wm=2,Gm=0,Km=class{id;kind;spec;position=new W;velocity=new W;quaternion=new dt;yaw=0;pitch=0;roll=0;forwardSpeed=0;speedKmh=0;steerAngle=0;throttle=0;wheels;occupied=!1;headlightsOn=!1;hornActive=!1;handbrake=!1;drifting=!1;airborne=!1;surface=`dirt_track`;submergedTime=0;tiltDeg=0;righting=!1;respawnCount=0;effects={dust:0,splash:0,cropRustle:0,skid:0,engineLoad:0,spray:0};lateralSpeed=0;yawRate=0;asleep=!1;pitchVel=0;rollVel=0;tiltTimer=0;sleepTimer=0;lastLongAccel=0;constructor(e,t){this.kind=e,this.spec=Rm[e],this.id=t??`${e}-${++Gm}`,this.wheels=this.spec.wheels.map(e=>({spec:e,spin:0,steerAngle:0,compression:0,grounded:!0,surface:`dirt_track`,contact:new W}))}wake(){this.asleep=!1,this.sleepTimer=0}};function qm(e,t,n,r,i){e.position.set(t,i.getSurfaceHeight(t,n,i.getTerrainHeight(t,n)+2),n),e.velocity.set(0,0,0),e.yaw=r,e.pitch=0,e.roll=e.kind===`bike`?-.12:0,e.pitchVel=e.rollVel=0,e.forwardSpeed=e.lateralSpeed=e.yawRate=0,e.submergedTime=0,e.tiltTimer=0,e.righting=!1,e.airborne=!1,e.wake(),Ym(e)}var Jm=new Gt(0,0,0,`YXZ`);function Ym(e){Jm.set(e.pitch,e.yaw,e.roll,`YXZ`),e.quaternion.setFromEuler(Jm)}var Xm={boxes:[],cylinders:[]},Zm={throttle:0,steer:0,handbrake:!1,horn:!1,boost:!1};function Qm(e,t,n,r,i=[],a=0){let o=t??Zm;if(e.asleep&&!e.occupied)return;n=Math.min(n,.1);let s=Math.ceil(n/(1/90)),c=n/s,l=X(a,0,1);for(let t=0;t<s;t++)$m(e,o,c,r,i,l);Ym(e),!e.occupied&&Math.abs(e.forwardSpeed)<.05&&Math.abs(e.velocity.y)<.05&&!e.airborne&&!e.righting&&e.submergedTime===0?(e.sleepTimer+=n,e.sleepTimer>1.5&&(e.asleep=!0)):e.sleepTimer=0}function $m(e,t,n,r,i,a){let o=e.spec,s=e.position;e.surface=r.getSurfaceType(s.x,s.z,s.y);let c=Bm[e.surface],l=r.getWaterLevel(s.x,s.z),u=r.isWater(s.x,s.z),d=l===null?0:l-s.y,f=u&&d>o.submergeDepth,p=a*zm[e.surface],m=c.speed+(1-c.speed)*o.offroad*.92,h=(c.traction+(1-c.traction)*o.offroad*.4)*(1-p*(.42-.12*o.offroad)),g=o.maxSpeed*m*(t.boost?1.12:1)*(f?.15:1),_=X(Math.abs(e.forwardSpeed)/o.maxSpeed,0,1),v=o.steerMax*(1-(1-o.highSpeedSteer)*_);e.steerAngle=Vl(e.steerAngle,X(t.steer,-1,1)*v,o.steerSpeed*n),e.throttle=X(t.throttle,-1,1),e.handbrake=t.handbrake,e.hornActive=t.horn;let y=Math.sin(e.yaw),b=Math.cos(e.yaw),x=-b,S=y,C=e.velocity.x*y+e.velocity.z*b,w=e.velocity.x*x+e.velocity.z*S,T=!e.airborne;if(T&&!e.righting){let r=0,i=e.throttle,a=h*(f?.2:1);if(i>.01){if(C<-.5)r=o.brakeDecel*i;else{let e=1-X(C/Math.max(g,.1),0,1)**2;r=o.accel*i*e*a*(t.boost?1.35:1)}}else if(i<-.01){if(C>.5)r=o.brakeDecel*i;else{let e=1-X(-C/o.maxReverse,0,1)**2;r=o.reverseAccel*i*e*a}}let s=o.rollingDrag+(Math.abs(i)<.01?1.1:0)+(1-c.traction)*1.5*(1-o.offroad*.7);r-=Math.sign(C)*Math.min(Math.abs(C)/n,s),r-=o.airDrag*C*Math.abs(C),C>g&&(r-=(C-g)*1.5),t.handbrake&&(r-=Math.sign(C)*Math.min(Math.abs(C)/n,4.5));let l=C;C+=r*n,Math.sign(l)!==Math.sign(C)&&Math.abs(i)<.01&&(C=0),e.lastLongAccel=(C-l)/n;let u=-C*Math.tan(e.steerAngle)/o.wheelBase;t.handbrake&&Math.abs(C)>4&&(u*=1.45),u*=.35+.65*h,e.yawRate=u;let d=u*n;e.yaw=zl(e.yaw+d);let p=t.handbrake?o.handbrakeGrip:1,m=o.grip*h*p,_=X(m*.92,0,.95);w+=C*Math.sin(d)*(1-_),w=Rl(w,0,9*m,n)}else e.yawRate*=Math.exp(-1.5*n),e.yaw=zl(e.yaw+e.yawRate*n),e.lastLongAccel=0;f&&(C*=Math.exp(-2.5*n),w*=Math.exp(-2.5*n));let E=Math.sin(e.yaw),D=Math.cos(e.yaw);e.velocity.x=E*C-D*w,e.velocity.z=D*C+E*w,e.forwardSpeed=C,e.lateralSpeed=w,e.speedKmh=Math.abs(C)*3.6,e.drifting=T&&Math.abs(w)>2.2&&Math.abs(C)>4,s.x+=e.velocity.x*n,s.z+=e.velocity.z*n,eh(e,r),nh(e,i),s.x=X(s.x,-797,797),s.z=X(s.z,-797,797);let O=e.yaw,k=0,A=0,j=0,M=0,N=0,P=0,ee=0,F=0,I=0,te=-1/0,ne=1/0;for(let i of e.wheels){let a=ql(i.spec.x,i.spec.z,O),o=s.x+a.x,c=s.z+a.z,l=r.getSurfaceHeight(o,c,s.y+1.1);i.surface=r.getSurfaceType(o,c,l);let u=Bm[i.surface],d=u.bump*.075*(.55/Math.max(i.spec.radius,.3));l+=d*(Wl(o*.8,c*.8,77)+.5*Wl(o*2.3,c*2.3,78)),i.contact.set(o,l,c),k+=l,i.spec.z>0?(A+=l,j++,te=Math.max(te,i.spec.z)):(M+=l,N++,ne=Math.min(ne,i.spec.z)),i.spec.x>.01?(P+=l,ee++):i.spec.x<-.01&&(F+=l,I++);let f=t.handbrake&&i.spec.z<0?0:C/i.spec.radius;i.spec.drive&&e.throttle>.6&&Math.abs(C)<6&&T&&(f+=(1-u.traction)*25*e.throttle),i.spin+=f*n,i.steerAngle=i.spec.steer?-e.steerAngle*(i.spec.z<0?-1:1):0}let re=e.wheels.length,ie=k/re,L=Math.max(te-ne,.5),ae=j&&N?Math.atan2(M/N-A/j,L):0,R=ee&&I?Math.atan2(P/ee-F/I,Math.max(o.trackWidth,.5)):0,oe=o.suspensionStiffness*11,se=o.suspensionDamping*3.2,ce=s.y-ie;if(ce<=.06){let t=oe*(ie-s.y)-se*e.velocity.y;e.velocity.y+=t*n,e.airborne&&e.velocity.y<-6&&(e.effects.dust=Math.max(e.effects.dust,.8)),e.airborne=!1}else e.velocity.y-=Vm*n,e.airborne=ce>.25;s.y+=e.velocity.y*n,s.y<ie-o.suspensionTravel&&(s.y=ie-o.suspensionTravel,e.velocity.y<0&&(e.velocity.y=0)),!e.airborne&&s.y>ie+.3&&(e.airborne=!0);let le,ue;if(e.righting)le=0,ue=0;else if(e.airborne)e.pitchVel*=Math.exp(-.8*n),e.rollVel*=Math.exp(-.8*n),le=e.pitch+e.pitchVel*n+.15*n,ue=e.roll+e.rollVel*n;else if(le=ae-o.pitchFactor*e.lastLongAccel,o.leanFactor>0){let t=Math.atan(C*-e.yawRate/Vm)*o.leanFactor;ue=Math.abs(C)<1&&!e.occupied?-.12:X(t,-o.maxLean,o.maxLean)}else ue=R+X(o.rollFactor*C*e.yawRate,-.12,.12);let de=e.pitch,fe=e.roll,pe=e.righting?4:e.airborne?60:9;e.pitch=Rl(e.pitch,le,pe,n),e.roll=Rl(e.roll,ue,o.leanFactor>0?6:pe,n),e.airborne||(e.pitchVel=(e.pitch-de)/n,e.rollVel=(e.roll-fe)/n);for(let t of e.wheels){let n=s.y-Math.sin(e.pitch)*t.spec.z+Math.sin(e.roll)*t.spec.x;t.compression=X(t.contact.y-n,-o.suspensionTravel,o.suspensionTravel),t.grounded=!e.airborne&&t.contact.y>=n-o.suspensionTravel-.05}e.tiltDeg=Math.acos(X(Math.cos(e.pitch)*Math.cos(e.roll),-1,1))*180/Math.PI,!e.righting&&e.tiltDeg>Hm?(e.tiltTimer+=n,e.tiltTimer>Um&&(e.righting=!0)):e.righting||(e.tiltTimer=0),e.righting&&(s.y=Math.max(s.y,ie+.3),e.velocity.multiplyScalar(Math.exp(-3*n)),e.pitchVel=e.rollVel=0,e.tiltDeg<4&&(e.righting=!1,e.tiltTimer=0)),f?(e.submergedTime+=n,e.submergedTime>Wm&&rh(e,r)):e.submergedTime=Math.max(0,e.submergedTime-n*2);let me=Math.abs(C),he=X(me/12,0,1),ge=e.effects;ge.dust=Rl(ge.dust,e.airborne?0:(c.dust*he+(e.drifting?.5*c.dust:0))*(1-.85*a),6,n),ge.spray=Rl(ge.spray,e.airborne?0:X(a*(.35+p)*X(me/8,0,1)+(e.drifting?.3*a:0),0,1),6,n),ge.splash=Rl(ge.splash,+(c.splash>0||l!==null&&d>-.1)*X(me/6,0,1),8,n),ge.cropRustle=Rl(ge.cropRustle,c.rustle*X(me/5,0,1),6,n),ge.skid=Rl(ge.skid,e.airborne?0:X(Math.abs(w)/6,0,1)*(e.surface===`highway`||e.surface===`link_road`?1:.4),10,n),ge.engineLoad=Rl(ge.engineLoad,X(Math.abs(e.throttle)*(.6+.4*(1-_))+_*.3,0,1),5,n)}function eh(e,t){let n=e.spec,r=e.position;for(let i of n.collision){let a=ql(0,i.z,e.yaw),o=r.x+a.x,s=r.z+a.z;t.queryColliders(o,s,i.radius+1,Xm);for(let t of Xm.boxes){if(r.y>=t.maxY-.05||r.y+n.bodyHeight<=t.minY||t.walkableTop&&t.maxY-r.y<.35)continue;let a=Jl(o-t.cx,s-t.cz,t.rotY),c=X(a.x,-t.halfX,t.halfX),l=X(a.z,-t.halfZ,t.halfZ),u=a.x-c,d=a.z-l,f=Math.hypot(u,d);if(f>=i.radius)continue;let p;if(f<1e-5){let e=t.halfX-Math.abs(a.x),n=t.halfZ-Math.abs(a.z);e<n?(u=Math.sign(a.x)||1,d=0,p=e+i.radius):(u=0,d=Math.sign(a.z)||1,p=n+i.radius),f=1}else p=i.radius-f;let m=ql(u/f,d/f,t.rotY);r.x+=m.x*p,r.z+=m.z*p,o+=m.x*p,s+=m.z*p,th(e,m.x,m.z)}for(let t of Xm.cylinders){if(r.y>=t.maxY-.05||r.y+n.bodyHeight<=t.minY)continue;let a=o-t.x,c=s-t.z,l=Math.hypot(a,c),u=i.radius+t.radius;if(l>=u)continue;let d=l>1e-5?a/l:1,f=l>1e-5?c/l:0,p=u-l;r.x+=d*p,r.z+=f*p,o+=d*p,s+=f*p,th(e,d,f)}}}function th(e,t,n){let r=e.velocity.x*t+e.velocity.z*n;if(r>=0)return;e.velocity.x-=1.25*r*t,e.velocity.z-=1.25*r*n,e.velocity.x*=.9,e.velocity.z*=.9;let i=Math.sin(e.yaw),a=Math.cos(e.yaw);e.forwardSpeed=e.velocity.x*i+e.velocity.z*a,e.lateralSpeed=e.velocity.x*-a+e.velocity.z*i}function nh(e,t){for(let n of t)if(n!==e&&!(Math.abs(n.position.x-e.position.x)>12||Math.abs(n.position.z-e.position.z)>12))for(let t of e.spec.collision){let r=ql(0,t.z,e.yaw);for(let i of n.spec.collision){let a=ql(0,i.z,n.yaw),o=e.position.x+r.x-(n.position.x+a.x),s=e.position.z+r.z-(n.position.z+a.z),c=Math.hypot(o,s),l=t.radius+i.radius;if(c>=l||c<1e-5)continue;let u=o/c,d=s/c,f=n.spec.mass/(e.spec.mass+n.spec.mass),p=l-c;e.position.x+=u*p*f,e.position.z+=d*p*f,n.position.x-=u*p*(1-f),n.position.z-=d*p*(1-f),n.wake();let m=(e.velocity.x-n.velocity.x)*u+(e.velocity.z-n.velocity.z)*d;if(m<0){let t=-1.2*m;e.velocity.x+=u*t*f,e.velocity.z+=d*t*f,n.velocity.x-=u*t*(1-f),n.velocity.z-=d*t*(1-f);let r=Math.sin(n.yaw),i=Math.cos(n.yaw);n.forwardSpeed=n.velocity.x*r+n.velocity.z*i,n.lateralSpeed=n.velocity.x*-i+n.velocity.z*r}}}}function rh(e,t){let n=t.findSafeBankPosition(e.position.x,e.position.z);qm(e,n.x,n.z,n.heading,t),e.respawnCount++}function ih(e,t){let n=e.spec,r=n.seat.x<-.05?-1:1,i=n.bodyWidth/2+.7,a=[[r*i,n.seat.z],[-r*i,n.seat.z],[0,-n.bodyLength/2-1],[0,n.bodyLength/2+1]];for(let[n,r]of a){let i=ql(n,r,e.yaw),a=e.position.x+i.x,o=e.position.z+i.z;if(!t.isWater(a,o)&&(t.queryColliders(a,o,.6,Xm),!(Xm.cylinders.some(e=>Math.hypot(a-e.x,o-e.z)<e.radius+.4)||Xm.boxes.some(e=>{let t=Jl(a-e.cx,o-e.cz,e.rotY);return!e.walkableTop&&Math.abs(t.x)<e.halfX+.4&&Math.abs(t.z)<e.halfZ+.4}))))return{x:a,y:t.getSurfaceHeight(a,o,e.position.y+1),z:o}}let o=t.findSafeBankPosition(e.position.x,e.position.z);return{x:o.x,y:o.y,z:o.z}}function ah(e,t=new W){return t.set(e.spec.seat.x,e.spec.seat.y,e.spec.seat.z).applyQuaternion(e.quaternion).add(e.position),t}function oh(e){return{throttle:e.moveY,steer:e.moveX,handbrake:e.brake,horn:e.horn,boost:e.sprint}}var sh=480,ch=class{points;pos=new Float32Array(sh*3);vel=new Float32Array(sh*3);col=new Float32Array(sh*3);size=new Float32Array(sh);alpha=new Float32Array(sh);life=new Float32Array(sh);maxLife=new Float32Array(sh);s0=new Float32Array(sh);s1=new Float32Array(sh);a0=new Float32Array(sh);drag=new Float32Array(sh);rise=new Float32Array(sh);cursor=0;geo=new dr;mat;tmp=new K;constructor(){this.geo.setAttribute(`position`,new Zn(this.pos,3)),this.geo.setAttribute(`aColor`,new Zn(this.col,3)),this.geo.setAttribute(`aSize`,new Zn(this.size,1)),this.geo.setAttribute(`aAlpha`,new Zn(this.alpha,1)),this.mat=new ca({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:860}},vertexShader:`
        attribute vec3 aColor; attribute float aSize; attribute float aAlpha;
        uniform float uScale; varying vec3 vC; varying float vA;
        void main() {
          vC = aColor; vA = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.5), 0.0, 220.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vC; varying float vA;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r = dot(d, d) * 4.0;
          if (r > 1.0) discard;
          float a = vA * (1.0 - r) * (1.0 - r);
          gl_FragColor = vec4(vC, a);
        }`}),this.points=new Li(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.name=`vehicle-particles`;for(let e=0;e<sh;e++)this.pos[e*3+1]=-1e3}emit(e,t,n,r,i,a,o,s,c,l,u,d=1.2,f=0){let p=this.cursor;this.cursor=(this.cursor+1)%sh;let m=p*3;this.pos[m]=e,this.pos[m+1]=t,this.pos[m+2]=n,this.vel[m]=r,this.vel[m+1]=i,this.vel[m+2]=a,this.tmp.set(l),this.col[m]=this.tmp.r,this.col[m+1]=this.tmp.g,this.col[m+2]=this.tmp.b,this.life[p]=this.maxLife[p]=o,this.s0[p]=s,this.s1[p]=c,this.a0[p]=u,this.drag[p]=d,this.rise[p]=f,this.size[p]=s,this.alpha[p]=u}update(e){for(let t=0;t<sh;t++){if(this.life[t]<=0){this.alpha[t]=0;continue}this.life[t]-=e;let n=1-Math.max(this.life[t],0)/this.maxLife[t],r=t*3,i=Math.exp(-this.drag[t]*e);this.vel[r]*=i,this.vel[r+1]=this.vel[r+1]*i+this.rise[t]*e,this.vel[r+2]*=i,this.pos[r]+=this.vel[r]*e,this.pos[r+1]+=this.vel[r+1]*e,this.pos[r+2]+=this.vel[r+2]*e,this.size[t]=this.s0[t]+(this.s1[t]-this.s0[t])*n,this.alpha[t]=this.a0[t]*(1-n)*Math.min(1,n*10+.2),this.life[t]<=0&&(this.alpha[t]=0)}for(let e of[`position`,`aSize`,`aAlpha`,`aColor`])this.geo.getAttribute(e).needsUpdate=!0}dispose(){this.geo.dispose(),this.mat.dispose()}},lh=null;function uh(e){return lh||(lh=new ch,e.add(lh.points)),lh}var dh=new Map;function fh(e,t){let n=dh.get(e);return n||(n=t(),dh.set(e,n)),n}var ph=()=>fh(`matte`,()=>new fa({vertexColors:!0})),mh=()=>fh(`chrome`,()=>new da({vertexColors:!0,specular:16777215,shininess:110})),hh=()=>fh(`glass`,()=>new da({vertexColors:!0,specular:11193565,shininess:90,transparent:!0,opacity:.55,depthWrite:!1})),gh=()=>fh(`flare`,()=>{let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,`rgba(255,250,220,1)`),e.addColorStop(.3,`rgba(255,240,180,0.5)`),e.addColorStop(1,`rgba(255,230,150,0)`),t.fillStyle=e,t.fillRect(0,0,64,64)}return new Sr({map:new Bi(e),transparent:!0,depthWrite:!1,blending:2,opacity:0})});function _h(e,t,n,r=!0){let i=t.mesh(n,r,r);i&&e.add(i)}function vh(e,t,n,r,i,a){let o=new Qi(a,10,8);if(t===`head`){let t=new Ur({color:`#8a8878`});e.headMats.push(t);let s=new J(o,t);s.position.set(n,r,i),s.scale.z=.6,e.root.add(s),e.headPos.push(new W(n,r,i));let c=new Ir(gh());c.position.set(n,r,i+a),c.scale.setScalar(a*7),e.root.add(c),e.flares.push(c)}else{let t=new J(o,e.tailMat);t.position.set(n,r,i),t.scale.z=.55,e.root.add(t)}}function yh(e,t,n,r,i,a,o=`#1b1b1b`){let s=new G;s.position.set(t,n,r),s.rotation.x=a;let c=new G,l=new Q;l.torus(i,i*.11,o,0,0,0),l.box(i*1.8,i*.1,i*.1,o,0,0,0),l.box(i*.1,i*1.8,i*.1,o,0,0,0),l.cyl(i*.2,i*.2,i*.12,`#444`,0,0,0,8,Math.PI/2),_h(c,l,ph(),!1),s.add(c),e.root.add(s),e.steeringWheel=c}function bh(e,t,n,r){let i=new G;i.position.set(t.x,t.radius,t.z);let a=new G,o=new Q,s=new Q;n(o,s,t.x>=0?1:-1),_h(a,o,ph()),_h(a,s,mh()),i.add(a),r&&r(i),e.root.add(i),e.wheels.push({pivot:i,spin:a,spec:t})}function xh(e,t,n,r,i=0,a=.06,o=`#141414`){e.cyl(t,t,n,r,0,0,0,20,0,Math.PI/2);for(let r=0;r<i;r++){let s=r/i*Math.PI*2;e.box(n*1.02,a,t*Math.PI*2/i*.55,o,0,Math.cos(s)*(t+a*.35),Math.sin(s)*(t+a*.35),0,s)}}function Sh(){return{root:new G,wheels:[],headMats:[],tailMat:new Ur({color:`#4a0c0c`}),headPos:[],flares:[],exhaust:null,steeringWheel:null,kickstand:null,reel:null,chaff:null,disposables:[]}}function Ch(e,t,n,r,i,a,o,s,c){let l=Rf(t,i);e.disposables.push(l);let u=new J(new Xi(n,r),new Ur({map:l,transparent:!0,side:2}));u.position.set(a,o,s),u.rotation.y=c,e.root.add(u)}function wh(e=`#c8281e`){let t=Sh(),n=Rm.tractor,r=new Q,i=new Q,a=`#a81f17`;r.box(.5,.3,2.6,`#2b2b2b`,0,.66,.3),r.box(1.5,.14,.14,`#3a3a3a`,0,.5,1.4),r.box(.9,.22,.2,`#333`,0,.55,2),r.box(.8,.7,1.7,e,0,1.08,1.05),r.box(.5,.08,1.6,a,0,1.46,1.05);for(let e of[-1,1])for(let t=0;t<4;t++)r.box(.02,.07,.34,`#2b0d0b`,e*.405,1.1+(t-1.5)*.12,1.1);r.box(.7,.9,.08,`#1d1d1d`,0,1.12,1.94);for(let e=-3;e<=3;e++)i.box(.03,.8,.04,`#d9dde0`,e*.085,1.12,1.99);i.box(.76,.05,.06,`#d9dde0`,0,1.6,1.97),i.box(.76,.05,.06,`#d9dde0`,0,.68,1.97);for(let e of[-1,1])i.torus(.14,.02,`#d9dde0`,e*.32,1.38,1.97);r.box(.7,.65,1.3,`#b82219`,0,.95,-.4),r.box(1,.06,1,`#555`,0,1,-.62);for(let t of[-1,1])r.box(.62,.08,1.75,e,t*.88,1.78,-.9),r.box(.06,.36,1.75,a,t*1.17,1.6,-.9),r.box(.2,.06,.28,`#ff3b2b`,t*.88,1.7,-1.8);r.cyl(.05,.05,.5,`#2b2b2b`,0,1.22,-.6,6),r.cyl(.26,.26,.06,`#3a3d40`,0,1.48,-.6,12),r.box(.46,.3,.05,`#3a3d40`,0,1.72,-.88,0,.25),r.cyl(.03,.03,.7,`#222`,0,1.3,.3,6,-.6),r.cyl(.07,.07,.08,`#111`,0,1.5,.45,8,Math.PI/2),r.box(.5,.14,.4,`#333`,0,.55,-1.75),r.cyl(.05,.05,.35,`#888`,0,.62,-1.62,6,Math.PI/2),i.cyl(.05,.05,1.3,`#9aa0a6`,.32,2.05,1.35,8),i.cyl(.07,.05,.1,`#6e747a`,.32,2.72,1.35,8),i.box(.14,.02,.1,`#555`,.32,2.77,1.38,0,-.5),_h(t.root,r,ph()),_h(t.root,i,mh()),t.exhaust=new W(.32,2.8,1.35),yh(t,0,1.58,.42,.22,-.7),Ch(t,`ਪਿੰਡ 595`,.8,.26,{width:256,height:80,bg:`#f2e6c8`,fg:`#7a1410`,border:`#7a1410`},.41,1.12,1.05,Math.PI/2),Ch(t,`ਪਿੰਡ 595`,.8,.26,{width:256,height:80,bg:`#f2e6c8`,fg:`#7a1410`,border:`#7a1410`},-.41,1.12,1.05,-Math.PI/2),vh(t,`head`,.32,1.38,2,.11),vh(t,`head`,-.32,1.38,2,.11),vh(t,`tail`,.88,1.7,-1.83,.07),vh(t,`tail`,-.88,1.7,-1.83,.07);for(let e of n.wheels){let n=e.radius>.6;bh(t,e,(t,r)=>{if(n)xh(t,e.radius,.55,`#171717`,16,.1),t.cyl(e.radius*.55,e.radius*.55,.5,`#e0a21b`,0,0,0,14,0,Math.PI/2),r.cyl(.1,.1,.62,`#9aa0a6`,0,0,0,8,0,Math.PI/2);else{xh(t,e.radius,.22,`#1b1b1b`,0);for(let n of[-.05,.05])t.cyl(e.radius*1.02,e.radius*1.02,.04,`#0e0e0e`,n,0,0,20,0,Math.PI/2);t.cyl(e.radius*.55,e.radius*.55,.2,`#e0a21b`,0,0,0,12,0,Math.PI/2),r.cyl(.07,.07,.3,`#9aa0a6`,0,0,0,8,0,Math.PI/2)}})}return t}function Th(){let e=Sh(),t=Rm.bike,n=new Q,r=new Q;n.box(.1,.1,1.1,`#151515`,0,.62,-.05,0,.12),n.box(.3,.32,.42,`#6a6e72`,0,.45,.02);for(let e=0;e<5;e++)n.box(.26,.025,.3,`#8f959a`,0,.66+e*.045,.12,0,-.5);r.cyl(.07,.07,.3,`#d6dade`,0,.52,0,10,0,Math.PI/2),n.blob(.2,`#0f0f10`,0,.9,.22,.95,.9,1.9,1),r.blob(.1,`#e1e5e8`,.19,.88,.22,.25,.9,1.4,1),r.blob(.1,`#e1e5e8`,-.19,.88,.22,.25,.9,1.4,1),r.box(.1,.02,.12,`#d6dade`,0,1.1,.25),n.box(.32,.1,.62,`#1a1a1a`,0,.8,-.36,0,.05),n.box(.2,.03,.62,`#0f0f10`,0,.62,-.78,0,-.12);for(let e of[-1,1])n.box(.05,.05,.75,`#151515`,e*.1,.34,-.3),r.cyl(.03,.03,.42,`#d6dade`,e*.14,.58,-.62,8,-.2),r.cyl(.045,.045,.26,`#8a8f94`,e*.14,.58,-.62,8,-.2),n.box(.14,.03,.05,`#222`,e*.2,.28,-.05);r.cyl(.075,.09,1,`#d9dde0`,-.24,.32,-.42,10,Math.PI/2+.06),r.cyl(.09,.09,.05,`#555`,-.24,.3,-.93,10,Math.PI/2),n.box(.02,.05,.6,`#222`,.1,.33,-.3),_h(e.root,n,ph()),_h(e.root,r,mh()),e.exhaust=new W(-.24,.3,-.97),vh(e,`tail`,0,.62,-1.02,.05);let i=new G;i.position.set(.14,.3,-.1);let a=new Q;a.cyl(.015,.015,.3,`#2a2a2a`,0,-.15,0,5),a.box(.06,.02,.06,`#2a2a2a`,0,-.3,0),_h(i,a,ph(),!1),i.rotation.z=.5,e.root.add(i),e.kickstand=i;for(let n of t.wheels)bh(e,n,(e,t)=>{xh(e,n.radius,.13,`#101010`,0),t.torus(n.radius*.88,.014,`#e1e5e8`,0,0,0,0,Math.PI/2,0),t.cyl(.05,.05,.1,`#e1e5e8`,0,0,0,8,0,Math.PI/2);for(let e=0;e<8;e++)t.box(.008,n.radius*1.72,.008,`#cfd4d8`,0,0,0,0,e/8*Math.PI)},n.z>0?t=>{let r=new Q,i=new Q;for(let e of[-1,1])i.cyl(.022,.022,.66,`#e1e5e8`,e*.085,.3,-.09,8,-.27),r.box(.03,.2,.05,`#2a2a2a`,e*.085,.08,0);r.box(.2,.025,.55,`#121212`,0,.4,.04,0,-.05),i.cyl(.011,.011,.72,`#e1e5e8`,0,.68,-.2,8,0,Math.PI/2),r.cyl(.02,.02,.12,`#111`,.34,.68,-.2,6,0,Math.PI/2),r.cyl(.02,.02,.12,`#111`,-.34,.68,-.2,6,0,Math.PI/2),i.blob(.1,`#e1e5e8`,0,.44,.14,1,1,1,1),i.cyl(.05,.05,.14,`#d6dade`,.2,.66,-.2,6,.3,.5),r.box(.1,.1,.06,`#151515`,0,.8,-.2),_h(t,r,ph()),_h(t,i,mh());let a=new J(new Qi(.075,10,8),new Ur({color:`#8a8878`}));a.position.set(0,.44,.22),a.scale.z=.5,t.add(a),e.headMats.push(a.material),e.headPos.push(new W(0,n.radius+.44,n.z+.22));let o=new Ir(gh());o.position.set(0,.44,.28),o.scale.setScalar(.55),t.add(o),e.flares.push(o)}:void 0);return e}function Eh(e=`#5b6b2e`){let t=Sh(),n=Rm.jeep,r=new Q,i=new Q,a=e,o=`#4a5826`;r.box(1,.2,3.5,`#262626`,0,.55,0),r.box(1.5,.08,2.4,`#3a3a34`,0,.68,-.4);for(let e of[-1,1])r.box(.08,.5,2.3,a,e*.74,.95,-.45),r.box(.34,.1,.95,o,e*.76,.9,1.3),r.box(.34,.1,.95,o,e*.76,.9,-1.2);r.box(1.5,.5,.1,a,0,.98,-1.62),r.box(1.38,.46,1.1,a,0,.95,1.4),r.box(1.5,.5,.12,a,0,1.05,.82),r.box(1.1,.46,.06,`#1b1b1b`,0,.95,1.97);for(let e=-3;e<=3;e++)r.box(.07,.4,.04,a,e*.15,.95,2);i.box(1.74,.13,.12,`#cfd4d8`,0,.5,2.06),i.box(1.74,.13,.12,`#cfd4d8`,0,.5,-1.9);for(let e of[-1,1])i.torus(.15,.02,`#cfd4d8`,e*.52,1,1.98);for(let e of[-1,1])r.box(.46,.14,.5,`#6f6a4e`,e*.4,.8,-.1),r.box(.46,.55,.1,`#6f6a4e`,e*.4,1.1,-.38,0,-.12);r.box(1.3,.14,.5,`#6f6a4e`,0,.8,-1.2),r.box(1.3,.5,.1,`#6f6a4e`,0,1.08,-1.5);for(let e of[-.55,-1.45]){for(let t of[-1,1])i.cyl(.035,.035,1.05,`#2b2b2b`,t*.7,1.45,e,8);i.cyl(.035,.035,1.46,`#2b2b2b`,0,1.97,e,8,0,Math.PI/2)}for(let e of[-1,1])i.cyl(.03,.03,.9,`#2b2b2b`,e*.7,1.97,-1,8,Math.PI/2);i.cyl(.03,.03,1.6,`#2b2b2b`,.35,1.45,-1.52,8,0,.9),i.box(1.5,.05,.05,`#2b2b2b`,0,1.55,.78,-.3);for(let e of[-1,1])i.cyl(.025,.025,.62,`#2b2b2b`,e*.74,1.3,.8,6,-.3);r.box(1.3,.2,.2,`#333`,0,1.2,.6),r.cyl(.38,.38,.26,`#141414`,0,.9,-2.08,16,Math.PI/2),r.cyl(.2,.2,.28,`#8a8f94`,0,.9,-2.08,10,Math.PI/2),r.box(.2,.34,.12,`#6b2a1a`,.62,1.1,-1.7);let s=new Q;s.box(1.42,.5,.03,`#a5c4d8`,0,1.3,.78,0,-.3),_h(t.root,r,ph()),_h(t.root,i,mh()),_h(t.root,s,hh(),!1),t.exhaust=new W(.4,.4,-1.95),yh(t,-.4,1.2,.34,.2,-.9),vh(t,`head`,.52,1,2.02,.12),vh(t,`head`,-.52,1,2.02,.12),vh(t,`tail`,.62,.95,-1.7,.07),vh(t,`tail`,-.62,.95,-1.7,.07);for(let e of n.wheels)bh(t,e,(t,n)=>{xh(t,e.radius,.27,`#171717`,14,.07),t.cyl(e.radius*.62,e.radius*.62,.28,`#6a6e72`,0,0,0,12,0,Math.PI/2),n.cyl(.08,.08,.32,`#cfd4d8`,0,0,0,8,0,Math.PI/2)});return t}function Dh(){let e=Sh(),t=Rm.truck,n=new Q,r=new Q,i=`#f2a900`,a=`#1fa7a0`,o=`#c1272d`,s=`#2f8f4a`,c=`#8a5a30`;n.box(2,.28,7.2,`#26262a`,0,.86,-.2),n.box(2.3,1,2.5,o,0,1.55,2.35),n.box(2.34,.28,2.54,i,0,2.2,2.35),n.box(2.3,.95,2.5,a,0,2.82,2.35);let l=new Q;l.box(2,.6,.04,`#1b2a36`,0,2.85,3.62);for(let e of[-1,1])l.box(.04,.55,1.5,`#1b2a36`,e*1.16,2.85,2.3);n.box(1.5,.8,.1,`#1d1d1d`,0,1.35,3.62);for(let e=-4;e<=4;e++)r.box(.04,.7,.05,`#dde1e4`,e*.16,1.35,3.68);r.box(2.4,.2,.2,`#dde1e4`,0,.82,3.7),r.box(2,.08,.1,`#dde1e4`,0,1.8,3.67),n.box(2.4,.14,2,c,0,3.36,2.35),n.box(2.3,.9,.08,o,0,3.9,1.35),n.box(2,.62,.1,a,0,3.9,1.38);for(let e=0;e<7;e++)n.box(.26,.4,.1,e%2?i:s,-.9+e*.3,3.88,3.3),r.add(new Qi(.17,8,5,0,Math.PI*2,0,Math.PI/2),e%2?`#f2a900`:`#e04a3a`,-.9+e*.3,4.08,3.3);for(let e of[-1,1])n.box(.12,.8,1.9,c,e*1.15,3.8,2.35);r.cyl(.02,.05,.5,`#e8c04a`,0,4.5,1.4,6),n.box(2.45,.2,5.1,c,0,1.15,-1.5);let u=-1.5;for(let e of[-1,1]){let t=e*1.22;n.box(.1,1.15,5.1,i,t,1.8,u),n.box(.12,.14,5.12,o,t,1.28,u),n.box(.12,.14,5.12,a,t,2.34,u);for(let t=0;t<5;t++){let r=-3.5+t*1;n.cyl(.34,.34,.04,o,e*1.28,1.8,r,14,0,Math.PI/2),n.cyl(.24,.24,.05,a,e*1.3,1.8,r,14,0,Math.PI/2),n.cyl(.12,.12,.06,i,e*1.32,1.8,r,14,0,Math.PI/2),n.box(.04,.16,.3,s,e*1.29,1.8,r+.5,0,0,0),n.box(.04,.16,.3,s,e*1.29,1.8,r-.5,0,0,0),n.box(.05,.22,.22,t%2?o:a,e*1.29,1.55,r+.5,0,0,Math.PI/4),n.box(.05,.22,.22,t%2?a:o,e*1.29,2.05,r-.5,0,0,Math.PI/4)}}n.box(2.45,1.15,.1,a,0,1.8,-4.05),n.box(2.45,1.15,.1,s,0,1.8,1.0499999999999998);for(let e=0;e<6;e++)n.box(.62,.34,.9,e%2?`#d9c9a0`:`#cdbb90`,-.7+e%3*.7,2.55+Math.floor(e/3)*.3,-2+e%2*1.5);r.cyl(.07,.07,2.4,`#dde1e4`,-1.1,2.7,.95,8),r.cyl(.1,.07,.12,`#8a8f94`,-1.1,3.95,.95,8);for(let e of[-1,1])r.box(.05,.4,.04,`#dde1e4`,e*1.35,2.5,3.3),r.box(.04,.3,.2,`#dde1e4`,e*1.45,2.55,3.3);_h(e.root,n,ph()),_h(e.root,r,mh()),_h(e.root,l,hh(),!1),e.exhaust=new W(-1.1,4.05,.95),Ch(e,`ਰੱਬ ਰਾਖਾ`,2,.55,{width:512,height:140,bg:`#c1272d`,fg:`#ffd23f`,border:`#f2a900`},0,1.8,-4.12,Math.PI),Ch(e,`ਪੰਜਾਬ ਦੀ ਸ਼ਾਨ`,1.9,.42,{width:512,height:120,bg:`#1fa7a0`,fg:`#fff3c4`,border:`#c1272d`},1.38,2.18,-.19999999999999996,Math.PI/2),Ch(e,`ਪੰਜਾਬ ਦੀ ਸ਼ਾਨ`,1.9,.42,{width:512,height:120,bg:`#1fa7a0`,fg:`#fff3c4`,border:`#c1272d`},-1.38,2.18,-.19999999999999996,-Math.PI/2),yh(e,-.55,2.35,3,.27,-1),vh(e,`head`,.8,1.05,3.68,.17),vh(e,`head`,-.8,1.05,3.68,.17),vh(e,`tail`,.9,1.2,-4.12,.1),vh(e,`tail`,-.9,1.2,-4.12,.1),vh(e,`tail`,.4,1.2,-4.12,.1),vh(e,`tail`,-.4,1.2,-4.12,.1);for(let n of t.wheels)bh(e,n,(e,t)=>{xh(e,n.radius,.32,`#151515`,14,.06),e.cyl(n.radius*.66,n.radius*.66,.34,a,0,0,0,14,0,Math.PI/2),e.cyl(n.radius*.4,n.radius*.4,.36,o,0,0,0,12,0,Math.PI/2),t.cyl(.08,.08,.4,`#dde1e4`,0,0,0,8,0,Math.PI/2)});return e}function Oh(e=`#f2f2ee`){let t=Sh(),n=Rm.sedan,r=new Q,i=new Q,a=e;r.box(1.74,.5,4.3,a,0,.6,0),r.box(1.62,.1,1.4,a,0,.9,1.45),r.box(1.62,.1,1,a,0,.92,-1.6),r.box(1.5,.5,1.9,a,0,1.14,-.1),r.box(1.5,.06,1.72,`#e6e6e0`,0,1.42,-.1),r.box(1.76,.03,3.9,`#cfcfca`,0,.45,0);for(let e of[-1,1])i.box(.02,.04,3.9,`#d6dade`,e*.88,.78,0),i.box(.12,.03,.04,`#d6dade`,e*.89,.92,.35),i.box(.12,.03,.04,`#d6dade`,e*.89,.92,-.7),r.box(.1,.08,.2,a,e*.9,1,.7);i.box(1,.28,.06,`#dde1e4`,0,.72,2.15);for(let e=-4;e<=4;e++)r.box(.02,.22,.04,`#222`,e*.11,.72,2.19);i.box(1.8,.1,.12,`#dde1e4`,0,.42,2.18),i.box(1.8,.1,.12,`#dde1e4`,0,.42,-2.18);for(let e of[-1,1])i.torus(.13,.015,`#dde1e4`,e*.6,.78,2.15);r.box(.42,.12,.02,`#f4f4f4`,0,.55,2.2),r.box(.42,.12,.02,`#f2c500`,0,.62,-2.18),i.cyl(.006,.006,.7,`#999`,.7,1.75,-.7,4,0,.2);let o=new Q;o.box(1.42,.46,.04,`#26394a`,0,1.15,.92,-.75),o.box(1.42,.42,.04,`#26394a`,0,1.15,-1.1,.75);for(let e of[-1,1])o.box(.03,.34,.8,`#26394a`,e*.76,1.15,.38),o.box(.03,.34,.8,`#26394a`,e*.76,1.15,-.55);_h(t.root,r,ph()),_h(t.root,i,mh()),_h(t.root,o,hh(),!1),t.exhaust=new W(.45,.25,-2.2),yh(t,-.38,1,.55,.16,-1.1),vh(t,`head`,.6,.78,2.17,.11),vh(t,`head`,-.6,.78,2.17,.11),vh(t,`tail`,.62,.8,-2.17,.08),vh(t,`tail`,-.62,.8,-2.17,.08);for(let e of n.wheels)bh(t,e,(t,n)=>{xh(t,e.radius,.2,`#161616`,0),t.cyl(e.radius*.66,e.radius*.66,.21,`#8a8f94`,0,0,0,12,0,Math.PI/2),n.cyl(e.radius*.5,e.radius*.5,.22,`#dde1e4`,0,0,0,12,0,Math.PI/2)});return t}function kh(e=`#16a05a`){let t=Sh(),n=Rm.combine,r=new Q,i=new Q,a=`#ff9f1c`,o=`#0f7a43`,s=`#5d646b`;r.box(1.75,2.1,4.6,e,0,1.95,-.65),r.box(1.8,.16,4.65,a,0,1,-.65),r.box(1.8,.12,4.65,a,0,2.98,-.65);for(let e of[-1,1]){r.box(.03,1.2,2.6,o,e*.885,1.9,-1);for(let t=0;t<6;t++)r.box(.02,.06,1,`#0a5a31`,e*.9,1.45+t*.16,-1.6);r.box(.03,.22,3.6,a,e*.89,2.55,-.5)}r.box(2,.95,2.3,e,0,3.5,-1.05),r.box(2.04,.1,2.34,a,0,4,-1.05),r.box(1.8,.04,2.1,`#d9b24a`,0,4.02,-1.05),r.box(1.7,1.15,1.4,e,0,2.6,-3.3);for(let e=-3;e<=3;e++)r.box(.08,.7,.04,`#1b1b1b`,e*.2,2.65,-4);r.box(1.5,.5,.35,`#3a3d40`,0,1.4,-3.85),r.box(1.9,.12,.6,a,0,1.68,-3.85),r.box(1.2,.9,1.9,o,0,1.25,2.3,0,.42),r.box(4.4,.55,.9,a,0,.62,3.45),r.box(4.4,.08,.6,`#3a3d40`,0,.36,3.65),r.box(4.5,.75,.08,`#e07f00`,0,.82,3);for(let e of[-1,1])r.box(.08,.9,1.1,a,e*2.22,.72,3.45),r.cyl(0,.2,.9,`#e07f00`,e*2.22,.45,4.25,6,Math.PI/2),r.box(.08,.08,1.6,s,e*2.15,1.25,3.2,0,-.35);for(let e=0;e<22;e++)i.cyl(0,.035,.18,`#c9ced3`,-2.1+e*.2,.33,4,4,Math.PI/2);i.cyl(.13,.13,.9,`#d9dde0`,.95,3.6,-1.6,10),r.box(1.9,.12,1.7,`#3a3d40`,0,2.5,1.05),r.box(1.9,.5,.06,`#2b2b2b`,0,2.8,1.88);for(let e of[-1,1])r.box(.05,.55,1.6,`#2b2b2b`,e*.95,2.82,1.05);for(let e=0;e<6;e++)r.box(.06,.04,.5,s,1.2,.35+e*.4,-.45);for(let e of[-.22,.22])r.box(.05,2.4,.05,s,1.2,1.3,-.45+e);r.cyl(.12,.15,.45,`#2b2b2b`,0,2.78,.82,8),r.box(.55,.12,.5,`#222`,0,3.05,.82),r.box(.55,.6,.1,`#222`,0,3.35,.55,0,-.15),r.cyl(.035,.035,.75,`#222`,0,3,1.55,6,-.45),r.box(.35,.3,.3,`#2b2b2b`,.55,2.75,1.5);for(let e of[.48,.62])r.cyl(.015,.015,.35,`#c1272d`,e,3.05,1.45,4,-.3);for(let[e,t]of[[.9,.25],[-.9,.25],[.9,1.85],[-.9,1.85]])r.cyl(.035,.035,1.75,s,e,3.42,t,6);r.box(2.2,.1,2.1,a,0,4.33,1.05),r.box(2.24,.12,.06,o,0,4.24,2.12),r.box(2,.18,.25,`#2b2b2b`,0,.55,-2.1),i.cyl(.07,.07,1.4,`#9aa0a6`,-.65,4.3,-2.6,8),i.cyl(.09,.07,.12,`#6e747a`,-.65,5,-2.6,8),_h(t.root,r,ph()),_h(t.root,i,mh()),t.exhaust=new W(-.65,5.05,-2.6);let c=new G;c.position.set(.95,4,-1.6),c.rotation.set(0,-.6,.42);let l=new Q;l.cyl(.12,.12,3.4,`#d9dde0`,1.7,0,0,10,0,Math.PI/2),l.cyl(.16,.12,.35,a,3.45,-.1,0,10,0,Math.PI/2+.6),_h(c,l,mh()),t.root.add(c);let u=new G;u.position.set(0,1.3,3.75);let d=new Q;d.cyl(.05,.05,4.3,s,0,0,0,8,0,Math.PI/2);for(let e of[-1.95,0,1.95])for(let t=0;t<6;t++){let n=t/6*Math.PI*2;d.box(.04,.6,.04,a,e,Math.cos(n)*.3,Math.sin(n)*.3,0,n)}for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=Math.cos(t)*.6,r=Math.sin(t)*.6;d.box(4.1,.05,.12,`#f2c14e`,0,n,r,0,t);for(let e=0;e<9;e++)d.box(.015,.22,.015,`#9aa0a6`,-1.9+e*.475,n-Math.cos(t)*.11,r-Math.sin(t)*.11,0,t)}_h(u,d,ph()),t.root.add(u),t.reel=u,t.chaff=new W(0,1.3,-4.05),yh(t,0,3.25,1.62,.22,-.75),vh(t,`head`,.65,4.15,2.12,.1),vh(t,`head`,-.65,4.15,2.12,.1),vh(t,`head`,.7,2.3,1.62,.12),vh(t,`head`,-.7,2.3,1.62,.12),vh(t,`tail`,.8,2.1,-4.02,.08),vh(t,`tail`,-.8,2.1,-4.02,.08),Ch(t,`ਸੋਨਾ ਕੰਬਾਈਨ`,1.6,.36,{width:320,height:72,bg:`#fff3d6`,fg:`#0f7a43`,border:`#ff9f1c`},.9,2.15,-.5,Math.PI/2),Ch(t,`ਸੋਨਾ ਕੰਬਾਈਨ`,1.6,.36,{width:320,height:72,bg:`#fff3d6`,fg:`#0f7a43`,border:`#ff9f1c`},-.9,2.15,-.5,-Math.PI/2);for(let e of n.wheels){let n=e.radius>.7;bh(t,e,(t,r)=>{n?(xh(t,e.radius,.62,`#171717`,18,.11),t.cyl(e.radius*.58,e.radius*.58,.56,a,0,0,0,14,0,Math.PI/2),r.cyl(.12,.12,.7,`#9aa0a6`,0,0,0,8,0,Math.PI/2)):(xh(t,e.radius,.3,`#1b1b1b`,10,.05),t.cyl(e.radius*.55,e.radius*.55,.28,a,0,0,0,12,0,Math.PI/2),r.cyl(.07,.07,.34,`#9aa0a6`,0,0,0,8,0,Math.PI/2))})}return t}function Ah(e,t){switch(e){case`tractor`:return wh(t);case`bike`:return Th();case`jeep`:return Eh(t);case`truck`:return Dh();case`combine`:return kh(t);default:return Oh(t)}}var jh=class extends Km{rig;idling=!1;externalControl=!1;headGlow=0;brakeGlow=0;puffTimer=0;dustAcc=0;splashAcc=0;sprayAcc=0;chaffAcc=0;reelRate=0;stand=1;constructor(e,t,n){super(e,n),this.rig=t}get object3d(){return this.rig.root}};function Mh(e,t,n,r,i,a=_f,o,s={}){let c=Ah(t,s.paint),l=new jh(t,c,o);return l.idling=!!s.idling,l.externalControl=!!s.externalControl,l.headlightsOn=!!s.headlightsOn,qm(l,n,r,i,a),c.root.name=`vehicle-${l.id}`,c.root.position.copy(l.position),c.root.quaternion.copy(l.quaternion),e.add(c.root),uh(e),l}var Nh=[{id:`tractor-motor1`,kind:`tractor`,x:4.4,z:15,yaw:-.35,opts:{idling:!0}},{id:`bike-bohr`,kind:`bike`,x:-4,z:14.2,yaw:.45},{id:`tractor-east`,kind:`tractor`,x:392,z:147,yaw:2.4,opts:{paint:`#2f5ea8`}},{id:`jeep-puli`,kind:`jeep`,x:82,z:52,yaw:.38},{id:`jeep-sath`,kind:`jeep`,x:-185,z:-200,yaw:1.57},{id:`truck-dhaba`,kind:`truck`,x:541,z:-30,yaw:.12},{id:`sedan-nri`,kind:`sedan`,x:-53,z:-24.2,yaw:.93},{id:`combine-spawn`,kind:`combine`,x:-10.5,z:17.5,yaw:0,opts:{idling:!0}},{id:`combine-mandi`,kind:`combine`,x:-140,z:480,yaw:0}];function Ph(e,t=_f){let n=[];for(let r of Nh)n.push(Mh(e,r.kind,r.x,r.z,r.yaw,t,r.id,r.opts));for(let e=0;e<40;e++)for(let e of n)Qm(e,null,1/60,t,n);for(let e of n)Vh(e,0,!1);return n}var Fh=new W,Ih=new K(`#8a8878`),Lh=new K(`#fff4c8`).multiplyScalar(1.4),Rh=new K(`#4a0c0c`),zh=new K(`#a01818`),Bh=new K(`#ff2a1f`).multiplyScalar(1.5);function Vh(e,t,n){let r=e.rig,i=r.root;i.position.copy(e.position),i.quaternion.copy(e.quaternion);for(let t=0;t<r.wheels.length;t++){let n=r.wheels[t],i=e.wheels[t];i&&(n.pivot.position.y=n.spec.radius+i.compression,n.pivot.rotation.y=n.spec.steer?i.steerAngle:0,n.spin.rotation.x=i.spin)}r.steeringWheel&&(r.steeringWheel.rotation.z=-e.steerAngle*3.2);let a=e.surface===`wheat`||e.surface===`mustard`;if(r.reel){let n=(e.occupied||e.idling?1.4:0)+Math.abs(e.forwardSpeed)*.45*(a?2.2:1);e.reelRate+=(n-e.reelRate)*Math.min(1,t*1.8),r.reel.rotation.x+=e.reelRate*t}if(r.kickstand){let n=!e.occupied&&Math.abs(e.forwardSpeed)<.6;e.stand+=(+!!n-e.stand)*Math.min(1,t*6),r.kickstand.rotation.x=(1-e.stand)*(Math.PI/2)}let o=n||e.headlightsOn;e.headGlow+=(+!!o-e.headGlow)*Math.min(1,t*10);let s=e.throttle<-.05&&e.forwardSpeed>.5||e.handbrake;e.brakeGlow+=(+!!s-e.brakeGlow)*Math.min(1,t*14);for(let t of r.headMats)t.color.copy(Ih).lerp(Lh,e.headGlow);r.tailMat.color.copy(Rh).lerp(zh,e.headGlow*.8).lerp(Bh,e.brakeGlow);let c=gh();c.opacity=.9;for(let t of r.flares)t.visible=e.headGlow>.25;if(t<=0||!lh)return;let l=lh,u=Math.abs(e.forwardSpeed);if(!e.airborne&&e.effects.dust>.12&&u>1.5)for(e.dustAcc+=e.effects.dust*u*1.4*t;e.dustAcc>1;){--e.dustAcc;for(let t of e.wheels){if(t.spec.z>0&&e.spec.wheels.length>2)continue;let n=Math.sign(e.forwardSpeed)||1,r=Math.sin(e.yaw),i=Math.cos(e.yaw);if(l.emit(t.contact.x,t.contact.y+.15,t.contact.z,-r*n*.8,.5+.4*e.effects.dust,-i*n*.8,1.1,.3,1.5,`#cdb88a`,.3,1.6,.25),e.spec.wheels.length<=2)break}}if(e.effects.splash>.2)for(e.splashAcc+=e.effects.splash*u*2.2*t;e.splashAcc>1;){--e.splashAcc;let t=e.wheels[e.splashAcc>.5?0:e.wheels.length-1];l.emit(t.contact.x,t.contact.y+.1,t.contact.z,0,2.2,0,.6,.2,.55,`#e1f3ff`,.5,1,-4)}if(!e.airborne&&e.effects.spray>.08&&u>2){e.sprayAcc+=e.effects.spray*u*1.6*t;let n=Math.sin(e.yaw),r=Math.cos(e.yaw),i=Math.sign(e.forwardSpeed)||1;for(;e.sprayAcc>1;){--e.sprayAcc;for(let t of e.wheels)if(!(t.spec.z>0&&e.spec.wheels.length>2)&&(l.emit(t.contact.x,t.contact.y+.12,t.contact.z,-n*i*2.2,1.1+.8*e.effects.spray,-r*i*2.2,.55,.12,.7,`#c9d6dc`,.32,2.2,-3.5),e.spec.wheels.length<=2))break}}if(r.chaff&&a&&u>.8&&!e.airborne){if(e.chaffAcc+=(14+u*5)*t,e.chaffAcc>1){Fh.copy(r.chaff),i.localToWorld(Fh);let t=ql(0,-1,e.yaw),n=ql(1,0,e.yaw);for(;e.chaffAcc>1;){--e.chaffAcc;let r=e.chaffAcc*7.31+e.position.x*.37+e.position.z*.91,i=Math.sin(r*12.9898)*.5,a=.8+(Math.sin(r*78.233)*.5+.5)*1.4,o=2.4+(Math.sin(r*3.7)*.5+.5)*2.2,s=Math.floor(r*13)&1?`#d9a441`:`#e8c25a`;l.emit(Fh.x+n.x*i*1.4,Fh.y,Fh.z+n.z*i*1.4,t.x*o+n.x*i*3+e.velocity.x*.5,a,t.z*o+n.z*i*3+e.velocity.z*.5,1.5,.1,.45,s,.85,1.3,-2.2)}}}else e.chaffAcc=0;if(r.exhaust&&(e.occupied||e.idling||u>.8)){e.puffTimer-=t;let n=X(.35+Math.abs(e.throttle)*.9+e.effects.engineLoad*.4,.3,1.4),a=e.kind===`tractor`||e.kind===`combine`?.2/n:e.kind===`truck`?.28/n:e.kind===`bike`?.16:.5/n;if(e.puffTimer<=0){e.puffTimer=a,Fh.copy(r.exhaust),i.localToWorld(Fh);let t=e.kind===`tractor`||e.kind===`truck`||e.kind===`combine`,o=ql(0,t?0:-1,e.yaw);l.emit(Fh.x,Fh.y,Fh.z,o.x*.8+.25,t?1.5:.35,o.z*.8+.1,t?1.5:.9,t?.14:.1,t?.9:.5,t?`#4a4a4a`:`#9a9a9a`,t?.5*Math.min(n,1):.28,.9,.5)}}}var Hh=null;function Uh(e){if(!Hh){Hh=[];for(let t=0;t<2;t++){let t=new Xa(16773320,0,58,.5,.6,1.6);t.castShadow=!1,e.add(t),e.add(t.target),Hh.push(t)}}return Hh}function Wh(e,t,n,r=_f){let i=[];for(let t of e)t instanceof jh&&i.push(t);if(!i.length)return;for(let e of i)!e.occupied&&!e.externalControl&&Qm(e,null,t,r,i),Vh(e,t,n);let a=i[0].rig.root.parent;if(lh&&lh.update(Math.min(t,.1)),!a)return;let o=Uh(a),s=i.filter(e=>e.headGlow>.2&&e.rig.headPos.length).sort((e,t)=>Number(t.occupied)-Number(e.occupied));o.forEach((e,t)=>{let n=s[t];if(!n){e.intensity=0;return}let r=n.rig.headPos;Fh.set(0,0,0);for(let e of r)Fh.add(e);Fh.multiplyScalar(1/r.length),n.rig.root.localToWorld(Fh),e.position.copy(Fh);let i=ql(0,14,n.yaw);e.target.position.set(Fh.x+i.x,Fh.y-1.4,Fh.z+i.z),e.target.updateMatrixWorld(),e.intensity=70*n.headGlow})}var Gh=`ਬੱਲੇ ਸ਼ੇਰਾ!`,Kh=`ਮੋਟਰ ਤੇ ਠੰਢੀ ਹਵਾ ਵਗਦੀ ਆ`,qh=`ਚਾਹ ਪੀ ਕੇ ਜਾਵੀਂ ਢਾਬੇ ਤੋਂ!`,Jh=`ਸਾਡਾ ਪਿੰਡ ਸੋਹਣਾ ਲੱਗਦਾ ਨਾ?`,Yh=`ਮੀਂਹ ਵਰ੍ਹਦਾ ਪਿਆ, ਫ਼ਸਲ ਖਿੜ ਗਈ!`,Xh=`ਕੰਬਾਈਨ ਨਾਲ ਵਾਢੀ ਜ਼ੋਰਾਂ ਤੇ ਆ!`,Zh=`ਟੋਚਨ ਚ ਵੇਖਦੇ ਆਂ ਕਿਹੜਾ ਜਿੱਤਦਾ!`,Qh=[`ਜ਼ੋਰ ਲਾ ਸ਼ੇਰਾ!`,`ਖਿੱਚ ਓਏ ਖਿੱਚ!`,Zh,`ਬੱਲੇ ਬੱਲੇ!`],$h={mustard:`ਸਰ੍ਹੋਂ`,wheat:`ਕਣਕ`,paddy:`ਝੋਨਾ`,sugarcane:`ਕਮਾਦ`};function eg(e){return`ਓਏ ਹੌਲੀ ਵੀਰੇ, ${$h[e]} ਨਾ ਮਿੱਧ ਦੇਈਂ!`}function tg(e){switch(e){case`phirni`:case`sath`:case`gali`:return Jh;case`dhaba`:return qh;case`akhara`:return Zh;case`mandi`:return Xh;case`nehran`:case`sarsonpura`:return Jh;default:return Kh}}var ng=new Set([`wheat`,`mustard`,`paddy`,`sugarcane`]),rg={boxes:[],cylinders:[]};function ig(e,t,n,r,i,a){e.queryColliders(t,n,i+1.5,rg);for(let e of rg.cylinders){if(e.maxY<r+.4||e.minY>r+1.6)continue;let a=t-e.x,o=n-e.z,s=Math.hypot(a,o),c=i+e.radius;if(s<c){let e=s>1e-4?(c-s)/s:0;t+=s>1e-4?a*e:c,n+=s>1e-4?o*e:0}}for(let e of rg.boxes){if(e.maxY<r+.45||e.minY>r+1.6)continue;let a=Jl(t-e.cx,n-e.cz,e.rotY),o=e.halfX+i,s=e.halfZ+i;if(Math.abs(a.x)>=o||Math.abs(a.z)>=s)continue;o-Math.abs(a.x)<s-Math.abs(a.z)?a.x=Math.sign(a.x||1)*o:a.z=Math.sign(a.z||1)*s;let c=ql(a.x,a.z,e.rotY);t=e.cx+c.x,n=e.cz+c.z}return a.x=t,a.z=n,a}function ag(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[Math.max(0,r-1)],a=e[Math.min(e.length-1,r+1)],o=Math.hypot(a.x-i.x,a.z-i.z)||1,s=(a.x-i.x)/o,c=(a.z-i.z)/o;n.push({x:e[r].x+c*t,z:e[r].z-s*t})}return n}function og(e,t,n,r,i=7){let a=(e.x+t.x)/2,o=(e.z+t.z)/2,s=(e.x-t.x)/2,c=(e.z-t.z)/2,l=[];for(let e=1;e<i;e++){let t=e/i*Math.PI;l.push({x:a+s*Math.cos(t)+n.x*r*Math.sin(t),z:o+c*Math.cos(t)+n.z*r*Math.sin(t)})}return l}function sg(e,t,n,r){let i=ag(e,t),a=ag([...e].reverse(),t),o=e=>{let t=e[e.length-2],n=e[e.length-1],r=Math.hypot(n.x-t.x,n.z-t.z)||1;return{x:(n.x-t.x)/r,z:(n.z-t.z)/r}},s=og(i[i.length-1],a[0],o(i),n),c=og(a[a.length-1],i[0],o(a),n),l=[...i,...s,...a,...c],u=l.map(()=>99),d=(e,t)=>{for(let n=-2;n<t+2;n++){let i=(e+n+l.length)%l.length;u[i]=Math.min(u[i],n<0||n>=t?r*2.2:r)}};return d(i.length,s.length),d(i.length+s.length+a.length,c.length),{pts:l,caps:u}}var cg=`"Noto Sans Gurmukhi", "Raavi", "Gurmukhi MN", "Lohit Gurmukhi", sans-serif`;function lg(e){let t=[e];if(e.length>20){let n=e.length/2,r=-1;for(let t=0;t<e.length;t++)e[t]===` `&&(r<0||Math.abs(t-n)<Math.abs(r-n))&&(r=t);r>0&&(t=[e.slice(0,r),e.slice(r+1)])}let n=document.createElement(`canvas`),r=n.getContext(`2d`),i=`bold 56px ${cg}`,a=300;r&&(r.font=i,a=Math.max(...t.map(e=>r.measureText(e).width)));let o=81.2,s=Math.ceil(a+72),c=Math.ceil(t.length*o+44),l=c+30;n.width=s,n.height=l,r&&(r.fillStyle=`#fffaf0`,r.strokeStyle=`#7a2e0c`,r.lineWidth=6,r.beginPath(),r.roundRect(4,4,s-8,c-8,34),r.fill(),r.stroke(),r.beginPath(),r.moveTo(s/2-20,c-6),r.lineTo(s/2,l-3),r.lineTo(s/2+20,c-6),r.closePath(),r.fill(),r.beginPath(),r.moveTo(s/2-20,c-4),r.lineTo(s/2,l-3),r.lineTo(s/2+20,c-4),r.stroke(),r.fillStyle=`#2a1405`,r.font=i,r.textAlign=`center`,r.textBaseline=`middle`,t.forEach((e,t)=>r.fillText(e,s/2,22+o*(t+.5))));let u=new Bi(n);return u.colorSpace=Fe,u.anisotropy=4,{tex:u,aspect:s/l,h:l}}var ug=[`#ff7a00`,`#e8236b`,`#1f6fd1`,`#14a44d`,`#f2c200`,`#7a2fbf`,`#e63b2e`,`#00a8a8`],dg=[`#f4efe0`,`#fff8e7`,`#d9ecff`,`#ffe1c4`,`#e6f5d0`,`#f6d6e4`],fg=[`#ffffff`,`#2f4b8f`,`#3a7d44`,`#c05a1f`,`#f1ece0`],pg=[`#d81b60`,`#00897b`,`#f9a825`,`#5e35b1`,`#e64a19`,`#1e88e5`],mg=[`#ffd600`,`#ff4081`,`#00e5ff`,`#76ff03`,`#ff9100`,`#f50057`],hg=[`#c68642`,`#a9713a`,`#d9a066`,`#8d5524`,`#b87c4c`];function gg(e,t,n,r,i){let a=new G;a.position.set(r,i,0);let o=n.mesh(t);return o&&a.add(o),e.add(a),a}function _g(e,t,n,r){let i=Hl(9100+t*31),a=e=>e[Math.floor(i()*e.length)%e.length],o=a(hg),s=new G,c=new G;s.add(c);let l=.86,u=1.42,d=new Q,f=()=>new Q,p=f(),m=f(),h=new Q,g=new Q,_=1.78;if(n){let e=a(pg),t=a(mg),n=e;d.cyl(.19,.27,.5,e,0,.83,0,10),d.box(.4,.5,.23,e,0,1.16,0),d.cyl(.045,.055,.1,o,0,1.46,0,7),d.blob(.105,o,0,1.58,.01,.95,1.1,1,1),d.blob(.028,o,0,1.565,.105,1,1,1,0),d.blob(.115,`#150d0a`,0,1.62,-.03,1.05,1.05,1.05,1),d.cyl(.025,.02,.62,`#150d0a`,0,1.2,-.13,6),d.blob(.13,t,0,1.64,-.04,1.08,.9,1.12,1),d.box(.5,.06,.3,t,0,1.4,0),d.box(.44,.85,.03,t,0,1,-.15),d.box(.09,.6,.03,t,-.17,1.15,.13,0,0,-.35),p.cyl(.075,.055,.8,e,0,-.4,0,8),m.cyl(.075,.055,.8,e,0,-.4,0,8),p.box(.1,.06,.24,`#e0a030`,0,-.82,.05),m.box(.1,.06,.24,`#e0a030`,0,-.82,.05);for(let e of[h,g])e.cyl(.05,.04,.5,n,0,-.25,0,7),e.blob(.045,o,0,-.55,0,1,1,1,0),e.cyl(.052,.052,.04,`#f5c518`,0,-.5,0,7);_=1.72}else{let e=a(dg),n=a(fg),s=ug[(t*3+Math.floor(i()*3))%ug.length],c=a(mg);d.cyl(.21,.26,.42,e,0,.82,0,10),d.box(.46,.58,.26,e,0,1.15,0),d.cyl(.05,.06,.1,o,0,1.49,0,7),d.blob(.115,o,0,1.62,.01,.95,1.1,1,1),d.blob(.03,o,0,1.6,.115,1,1,1,0),t%2==0&&d.blob(.1,r?`#e6e2da`:`#1a1410`,0,1.55,.04,1,.85,.95,1),d.blob(.15,s,0,1.74,-.005,1.02,.85,1.1,1),d.cyl(.152,.152,.05,`#fff4c2`,0,1.69,-.005,10),d.box(.1,.22,.05,s,0,1.64,-.15),d.box(.54,.07,.33,c,0,1.43,0),d.box(.1,.5,.035,c,.2,1.2,.15),p.cyl(.085,.07,.8,n,0,-.4,0,8),m.cyl(.085,.07,.8,n,0,-.4,0,8),p.box(.12,.07,.27,`#b0702a`,0,-.82,.05),m.box(.12,.07,.27,`#b0702a`,0,-.82,.05);for(let[t,n]of[[h,1],[g,-1]])t.cyl(.055,.045,.5,e,0,-.25,0,7),t.blob(.05,o,0,-.55,0,1,1,1,0)}let v=d.mesh(e);v&&c.add(v);let y=gg(s,e,p,.11,l),b=gg(s,e,m,-.11,l),x=gg(s,e,h,.27,u),S=gg(s,e,g,-.27,u),C=(n?.94:1)*(r?.97:.98+i()*.08);return s.scale.setScalar(C),s.traverse(e=>{e.matrixAutoUpdate=!0}),{root:s,legL:y,legR:b,armL:x,armR:S,body:c,headY:_*C}}var vg=wu.phirniRadius;function yg(e,t){return{x:wu.x+Math.cos(e)*(vg+t),z:wu.z+Math.sin(e)*(vg+t)}}function bg(e){let t=Zu.find(t=>t.id===e);return t?t.points.map(e=>({x:e.x,z:e.z})):[]}function xg(){let e=[];[.4,1.9,3.7,5.2].forEach((t,n)=>e.push({place:`phirni`,female:n===1||n===3,elder:n===2,speed:1.05+.12*n,route:{t:`ring`,ang:t,dir:n%2==0?1:-1,off:(n-1.5)*1.1}}));for(let t=0;t<3;t++)e.push({place:`sath`,female:!1,elder:t!==1,speed:.7,route:{t:`wander`,cx:Vf.x,cz:Vf.z,r:Vf.half-1.8,tx:Vf.x+(t-1)*3,tz:Vf.z+2,avoid:{x:Vf.bohrX,z:Vf.bohrZ,r:2.6}}});e.push({place:`gali`,female:!0,elder:!1,speed:1.2,route:{t:`poly`,pts:bg(`gali-ew`),i:1,dir:1}}),e.push({place:`gali`,female:!1,elder:!0,speed:.95,route:{t:`poly`,pts:bg(`gali-ns`),i:1,dir:-1}}),e.push({place:`watt`,female:!1,elder:!1,speed:1.3,route:{t:`poly`,pts:[{x:40,z:44},{x:40,z:92}],i:1,dir:1}}),e.push({place:`watt`,female:!0,elder:!1,speed:1.15,route:{t:`poly`,pts:[{x:-70,z:80},{x:30,z:80}],i:1,dir:1}}),e.push({place:`watt`,female:!1,elder:!1,speed:1.25,route:{t:`poly`,pts:[{x:200,z:-112},{x:200,z:-48}],i:1,dir:1}});let t=zu[0];zu[3]??zu[zu.length-1],e.push({place:`motor`,female:!1,elder:!0,speed:.8,route:{t:`wander`,cx:t.x-4,cz:t.z-9,r:4,tx:t.x-4,tz:t.z-9}}),e.push({place:`dhaba`,female:!1,elder:!1,speed:1,route:{t:`poly`,pts:[{x:549,z:Ru.z-22},{x:549,z:Ru.z+22}],i:1,dir:1}}),e.push({place:`nehran`,female:!0,elder:!1,speed:1.15,route:{t:`poly`,pts:bg(`gali-nehran-ew`),i:1,dir:1}}),e.push({place:`nehran`,female:!1,elder:!0,speed:.9,route:{t:`poly`,pts:bg(`gali-nehran-ns`),i:1,dir:-1}}),e.push({place:`nehran`,female:!1,elder:!1,speed:1.25,route:{t:`poly`,pts:bg(`gali-nehran-ew`),i:1,dir:-1}});for(let t=0;t<3;t++)e.push({place:`mandi`,female:!1,elder:t===1,speed:.8,route:{t:`wander`,cx:Au.x+(t-1)*9,cz:Au.z-3,r:5,tx:Au.x+(t-1)*9,tz:Au.z-3}});e.push({place:`sarsonpura`,female:!0,elder:!1,speed:1.1,route:{t:`poly`,pts:bg(`gali-sarsonpura-ew`),i:1,dir:1}}),e.push({place:`sarsonpura`,female:!1,elder:!0,speed:.9,route:{t:`poly`,pts:bg(`gali-sarsonpura-ns`),i:1,dir:-1}}),e.push({place:`sarsonpura`,female:!0,elder:!1,speed:.8,route:{t:`wander`,cx:Mu.x+4,cz:Mu.z+4,r:4,tx:Mu.x+4,tz:Mu.z+4,avoid:{x:Mu.x,z:Mu.z,r:3.2}}}),e.push({place:`sarsonpura`,female:!1,elder:!1,speed:.85,route:{t:`wander`,cx:Eu.x+25,cz:Eu.z-22,r:5,tx:Eu.x+25,tz:Eu.z-22}});for(let t=0;t<10;t++){let n=t/10*Math.PI*2+.3,r=ju.x+Math.cos(n)*(ju.rimRadius+2.6),i=ju.z+Math.sin(n)*(ju.rimRadius+2.6);e.push({place:`akhara`,female:t%4==1,elder:t%5==3,speed:.6,route:{t:`wander`,cx:r,cz:i,r:.8,tx:r,tz:i}})}return e}function Sg(e,t){let n=t%3==0?`#2a2830`:`#1c1b20`,r=new G,i=new G;r.add(i);let a=new Q;a.blob(.62,n,0,1.2,-.05,.95,.92,1.85,2,0),a.blob(.5,n,0,1.38,.55,1,.9,1,1),a.blob(.45,`#3d3b46`,0,1.55,-.55,1,.4,1.1,1),a.cyl(.26,.36,.55,n,0,1.38,1,9,Math.PI/2.6),i.add(a.mesh(e));let o=new G;o.position.set(0,1.4,1.2);let s=new Q;s.blob(.26,n,0,-.05,.22,.9,.95,1.35,1),s.blob(.2,`#4a3f44`,0,-.15,.55,1,.8,.8,1),s.blob(.045,`#e8d8c8`,.07,-.2,.7,1,1,1,0),s.blob(.045,`#e8d8c8`,-.07,-.2,.7,1,1,1,0),s.blob(.035,`#d9c58f`,.17,.05,.3,1,1,1,0),s.blob(.035,`#d9c58f`,-.17,.05,.3,1,1,1,0);for(let e of[1,-1])s.add(new $i(.3,.04,5,12,Math.PI*.78),`#6b6258`,e*.2,.14,.05,0,0,e>0?.3:Math.PI-.3,1,1,1),s.blob(.07,n,e*.3,.05,.02,1.8,.35,.9,1);o.add(s.mesh(e)),r.add(o);let c=new G;c.position.set(0,1.45,-1.12);let l=new Q;l.cyl(.025,.02,.95,n,0,-.45,-.05,5,.12),l.blob(.07,`#0e0d10`,0,-.95,-.1,.9,1.6,.9,1),c.add(l.mesh(e)),r.add(c);let u=[];for(let[t,i]of[[.3,.7],[-.3,.7],[.3,-.75],[-.3,-.75]]){let a=new G;a.position.set(t,.82,i);let o=new Q;o.cyl(.11,.08,.8,n,0,-.4,0,7),o.cyl(.085,.09,.14,`#8a8174`,0,-.76,0,7),a.add(o.mesh(e)),r.add(a),u.push(a)}return{root:r,head:o,tail:c,legs:u,earL:null,body:i}}function Cg(e,t){let n=yu(e,-.5*e+130);return{x:n.x-n.tz*t,z:n.z+n.tx*t}}function wg(){let e=[];[[.2,.45],[2.4,.55],[3.9,.35],[5.4,.6]].forEach(([t,n],r)=>e.push({home:`toba`,x:Pu.x+Math.cos(t)*Pu.rx*n,z:Pu.z+Math.sin(t)*Pu.rz*n,r:1.2,inWater:!0,heading:t+1.2+r}));for(let t of[1.2,4.6])e.push({home:`toba`,x:Pu.x+Math.cos(t)*(Pu.rx+7),z:Pu.z+Math.sin(t)*(Pu.rz+7),r:5,inWater:!1,heading:t+2});let t=Cg(-60,8.4),n=Cg(-210,-8.2),r=Cg(150,6.2);return e.push({home:`nehar`,x:t.x,z:t.z,r:5,inWater:!1,heading:1}),e.push({home:`nehar`,x:n.x,z:n.z,r:5,inWater:!1,heading:2.6}),e.push({home:`nehar`,x:r.x,z:r.z,r:1.5,inWater:!1,heading:.4}),e}function Tg(e){let t=new G,n=`#fbfbf6`,r=`#dcdcd2`,i=new Q;i.blob(.15,n,0,0,0,.8,.75,1.75,1),i.blob(.07,r,0,0,-.32,.8,.7,1.5,0),i.cyl(.012,.01,.42,`#1a1a18`,.035,-.04,-.5,4,Math.PI/2-.1),i.cyl(.012,.01,.42,`#1a1a18`,-.035,-.04,-.5,4,Math.PI/2-.1),t.add(i.mesh(e));let a=new G;a.position.set(0,.04,.2);let o=new Q;o.cyl(.03,.045,.3,n,0,.1,.1,6,1),o.blob(.055,n,0,.2,.26,1,1,1.2,1),o.cyl(.008,.02,.2,`#f2b81c`,0,.2,.4,5,Math.PI/2),a.add(o.mesh(e)),t.add(a);let s=i=>{let a=new G;a.position.set(i*.1,.07,.05);let o=new Q;return o.box(.5,.012,.3,n,i*.25,0,0),o.box(.45,.01,.24,r,i*.72,0,-.03,i*.1),o.box(.2,.008,.14,`#9a9a90`,i*1.05,0,-.06,i*.2),a.add(o.mesh(e,!1)),t.add(a),a};return{root:t,wingL:s(1),wingR:s(-1),neck:a}}function Eg(e,t){let n=(e,t)=>{let n=sd(e,t);return n.crop===`wheat`||n.crop===`mustard`?{x:(n.minX+n.maxX)/2,z:(n.minZ+n.maxZ)/2}:null},r=n(e,t);if(r)return r;for(let r=1;r<8;r++)for(let i=0;i<8;i++){let a=i/8*Math.PI*2,o=n(e+Math.cos(a)*r*40,t+Math.sin(a)*r*40);if(o)return o}return{x:e,z:t}}var Dg={throttle:0,steer:0,handbrake:!1,horn:!1,boost:!1},Og=28;function kg(e,t=_f){let n=new G;n.name=`life-system`,e.add(n);let r=Lf(),i=new Set,a={villagerBumps:0,villagerKnockdowns:0,nearMisses:0,honkHits:0,honkEvents:0,buffaloBumps:0,buffaloSpooks:0,cropZips:0,aiVehicleBumps:0,bubblesShown:0},o=(e,t,n,r,a)=>{let o={type:e,x:t,z:n,severity:X(r,0,1),id:a};for(let e of i)e(o)},s=Hl(777),c=[];xg().forEach((e,i)=>{let a=_g(r,i,e.female,e.elder);n.add(a.root);let o=0,l=0,u=e.route;if(u.t===`ring`){let e=yg(u.ang,u.off);o=e.x,l=e.z}else if(u.t===`poly`){let e=u.pts[Math.max(0,u.i-u.dir)]??u.pts[0];o=e.x,l=e.z}else o=u.tx,l=u.tz;let d=t.getTerrainHeight(o,l),f=t.getSurfaceHeight(o,l,d+1.2),p={id:`villager-${i+1}`,rig:a,route:u,place:e.place,female:e.female,x:o,z:l,y:f,heading:s()*Math.PI*2,speed:0,baseSpeed:e.speed,state:`walk`,stateT:0,phase:s()*6,kx:0,kz:0,idleLeft:0,nextIdleIn:12+s()*40,hop:0,bubbleCd:0,nearMissCd:0,bumpCd:0,faceYaw:0,info:{id:`villager-${i+1}`,x:o,y:f,z:l,heading:0,speed:0,state:`walk`,place:e.place,female:e.female},visible:!0};a.root.position.set(o,f,l),c.push(p)});let l=wg().map((e,i)=>{let a=Sg(r,i);a.root.scale.setScalar(1.05+i%3*.05),n.add(a.root);let o=t.getTerrainHeight(e.x,e.z);return{id:`majjh-${i+1}`,rig:a,home:e.home,inWater:e.inWater,hx:e.x,hz:e.z,r:e.r,x:e.x,z:e.z,y:o,heading:e.heading,tx:e.x,tz:e.z,moveLeft:0,waitLeft:2+s()*8,scare:0,scareDirX:0,scareDirZ:0,phase:s()*6,bumpCd:0,info:{id:`majjh-${i+1}`,x:e.x,y:o,z:e.z,heading:e.heading,home:e.home,spooked:!1,radius:1.15},visible:!0}}),u=[];[{c:Eg(10,60),ax:52,az:24,tilt:.3,n:3},{c:Eg(190,-170),ax:60,az:26,tilt:-.5,n:3},{c:Eg(-60,215),ax:46,az:22,tilt:1.1,n:3}].forEach((e,i)=>{for(let a=0;a<e.n;a++){let o=Tg(r);o.root.scale.setScalar(1.5),n.add(o.root),u.push({rig:o,cx:e.c.x+(s()-.5)*8,cz:e.c.z+(s()-.5)*8,ampX:e.ax*(.9+s()*.2),ampZ:e.az*(.9+s()*.2),tilt:e.tilt,phi:i*1.7+a*.45,omega:.17+s()*.03,alt:8+s()*5+a*1.2,baseGround:t.getTerrainHeight(e.c.x,e.c.z),flapT:s()*5,flapPeriod:4.5+s()*2,seed:s()*10,alarm:0,visible:!0})}});let d=[];for(let e=-600;e<=600;e+=50)d.push({x:560,z:e});let f=sg(d,3.5,14,3.8),p=bg(`link-pind-highway`);p.length>2&&p.pop();let m=sg(p,1.8,7,3.2),h=[],g=[],_=(n,r,i,a,o,s)=>{let c=Math.floor(i*r.pts.length)%r.pts.length,l=0;for(;r.caps[c]<50&&l<r.pts.length;)c=(c+1)%r.pts.length,l++;if(r.caps[c]<50){let e=0;for(let t=1;t<r.caps.length;t++)r.caps[t]>r.caps[e]&&(e=t);c=e}let u=r.pts[c],d=r.pts[(c+1)%r.pts.length],f=Math.atan2(d.x-u.x,d.z-u.z),p=Mh(e,n,u.x,u.z,f,t,s,{paint:o,externalControl:!0});qm(p,u.x,u.z,f,t),h.push({v:p,loop:r,wp:(c+1)%r.pts.length,cruise:a,shift:0,blockedT:0,stuckT:0,hornCd:0,bumpCd:0,yielding:!1,info:{id:s,kind:n,x:u.x,z:u.z,speedKmh:0,yielding:!1}}),g.push(p)};_(`truck`,f,.12,13,void 0,`ai-truck-highway`),_(`sedan`,f,.62,19,`#d23b2a`,`ai-sedan-highway`),_(`tractor`,m,.28,6.5,`#2f7d3a`,`ai-tractor-link`),_(`sedan`,m,.78,11,`#2c6fb5`,`ai-sedan-link`);let v=bg(`track-puli1-nehran`);v.length>2&&_(`jeep`,sg(v,1.6,7,3),.4,7.5,`#b8641f`,`ai-jeep-north`);let y=bg(`link-highway-sarsonpura`);y.length>2&&(y.pop(),_(`tractor`,sg(y,1.8,7,3.2),.55,6,`#1f5fa8`,`ai-tractor-southeast`));let b=new Map,x=e=>{let t=b.get(e);return t||(t=lg(e),b.set(e,t)),t},S=[];for(let e=0;e<4;e++){let e=new Sr({transparent:!0,depthWrite:!1,fog:!1}),t=new Ir(e);t.visible=!1,t.renderOrder=20,n.add(t),S.push({sprite:t,mat:e,owner:null,age:0,life:0,anchor:new W,baseH:1})}let C=(e,t,n=3.4,r=!1)=>{if(!r&&e.bubbleCd>0)return!1;let i=S.find(t=>t.owner===e.id)??S.find(e=>e.owner===null);i||=S.reduce((e,t)=>t.age>e.age?t:e);let o=x(t);return i.mat.map=o.tex,i.mat.needsUpdate=!0,i.owner=e.id,i.age=0,i.life=n,i.baseH=.0021*o.h,i.sprite.visible=!0,e.bubbleCd=3,a.bubblesShown++,!0},w=0,T=0,E=0,D=0,O=0,k=0,A=!1,j=0,M=!1,N=8,P=0,ee=!1,F=!1,I=3,te=!1,ne=(e,t,n)=>{let r=null,i=n;for(let n of c){let a=Math.hypot(n.x-e,n.z-t);a<i&&(i=a,r=n)}return r},re={x:0,z:0};function ie(e){let t=e.route;if(t.t===`ring`){let n=yg(t.ang,t.off);return Math.hypot(n.x-e.x,n.z-e.z)<2.6&&(t.ang+=t.dir*.035),yg(t.ang+t.dir*.03,t.off)}if(t.t===`poly`){let n=t.pts[t.i];if(!n)return null;if(Math.hypot(n.x-e.x,n.z-e.z)<.9){let n=t.i+t.dir;(n<0||n>=t.pts.length)&&(t.dir*=-1,n=t.i+t.dir,e.idleLeft=3+s()*4,e.state=`idle`,e.stateT=0),t.i=X(n,0,t.pts.length-1)}return t.pts[t.i]}if(Math.hypot(t.tx-e.x,t.tz-e.z)<.7){for(let e=0;e<6;e++){let e=s()*Math.PI*2,n=Math.sqrt(s())*t.r,r=t.cx+Math.cos(e)*n,i=t.cz+Math.sin(e)*n;if(!(t.avoid&&Math.hypot(r-t.avoid.x,i-t.avoid.z)<t.avoid.r)){t.tx=r,t.tz=i;break}}e.idleLeft=2+s()*6,e.state=`idle`,e.stateT=0}return{x:t.tx,z:t.tz}}function L(e,t,n,r){let i=Math.hypot(t,n)||1;e.kx=t/i*r,e.kz=n/i*r,e.state=`startle`,e.stateT=0,e.hop=1}function ae(e,n){e.bubbleCd=Math.max(0,e.bubbleCd-n),e.nearMissCd=Math.max(0,e.nearMissCd-n),e.bumpCd=Math.max(0,e.bumpCd-n),e.stateT+=n,e.nextIdleIn-=n;let r=0,i=null;if(A){let t=e.x-w,r=e.z-E,i=Math.hypot(t,r),s=e.state===`fall`||e.state===`getup`;if(!s&&i<1.25&&e.bumpCd<=0){let n=k>(ue?7:6);if(e.bumpCd=1.4,n){a.villagerKnockdowns++,e.state=`fall`,e.stateT=0;let n=i>.05?i:1;e.kx=t/n*3+D*.25,e.kz=r/n*3+O*.25,o(`villager-knockdown`,e.x,e.z,k/14,e.id),C(e,`ਹਾਏ ਓਏ!`,2.4,!0)}else if(k>2.2)a.villagerBumps++,L(e,t,r,2.6),o(`villager-bump`,e.x,e.z,k/14,e.id);else{let n=i>.05?i:1;e.kx+=t/n*1.1,e.kz+=r/n*1.1}}else if(!s&&i<4&&k>5&&e.nearMissCd<=0&&-(t*D+r*O)/Math.max(i,.1)>k*.45){e.nearMissCd=5;let n=t*-O+r*D>0?1:-1;L(e,-O*n,D*n,3.6),i>1.6&&(a.nearMisses++,o(`near-miss`,e.x,e.z,k/20,e.id),C(e,Gh))}!s&&i<1.6&&i>.01&&k<2.2&&(e.kx+=t/i*.9*n*10,e.kz+=r/i*.9*n*10)}switch(e.place===`akhara`&&((e.state===`walk`||e.state===`idle`)&&(e.faceYaw=Math.atan2(ju.x-e.x,ju.z-e.z),e.state=`wave`,e.stateT=0),F&&e.hop<=0&&s()<n*.9&&(e.hop=1)),e.state){case`fall`:e.stateT>1.8&&(e.state=`getup`,e.stateT=0);break;case`getup`:e.stateT>.8&&(e.state=`walk`,e.stateT=0);break;case`startle`:e.stateT>.9&&(e.state=`walk`,e.stateT=0);break;case`wave`:r=0,e.heading=Bl(e.heading,e.faceYaw,6,n),e.stateT>2&&(e.state=`walk`,e.stateT=0);break;case`idle`:r=0,e.idleLeft-=n;for(let t of c)if(t!==e&&Math.hypot(t.x-e.x,t.z-e.z)<4.5){e.heading=Bl(e.heading,Math.atan2(t.x-e.x,t.z-e.z),3,n);break}e.idleLeft<=0&&(e.state=`walk`,e.stateT=0);break;default:{if(e.nextIdleIn<=0&&e.route.t===`ring`){e.nextIdleIn=25+s()*40,e.idleLeft=3+s()*3,e.state=`idle`,e.stateT=0;break}let t=ie(e);t&&(i=t,r=e.baseSpeed)}}if(i){let t=Math.atan2(i.x-e.x,i.z-e.z);e.heading=Bl(e.heading,t,7,n);let a=Math.abs(zl(t-e.heading));r*=X(1-a*.6,.2,1)}e.speed=Rl(e.speed,r,6,n);let l=Rl(1,0,2.2,n),u=Math.sin(e.heading)*e.speed+e.kx,d=Math.cos(e.heading)*e.speed+e.kz;e.kx*=l,e.kz*=l,e.state===`fall`&&(u=e.kx,d=e.kz);let f=e.x+u*n,p=e.z+d*n;t.isWater(f,p)&&(f=e.x,p=e.z,e.kx=e.kz=0,e.route.t===`wander`&&(e.route.tx=e.route.cx,e.route.tz=e.route.cz)),ig(t,f,p,e.y,.3,re),f=X(re.x,t.bounds.minX+4,t.bounds.maxX-4),p=X(re.z,t.bounds.minZ+4,t.bounds.maxZ-4),e.x=f,e.z=p,e.y=Rl(e.y,t.getSurfaceHeight(f,p,e.y+.55),18,n),e.phase+=n*(3.2+e.speed*3.4),e.hop=Math.max(0,e.hop-n*2.2)}function R(e,t){let n=e.rig,r=X(e.speed/1.2,0,1.3),i=Math.sin(e.phase)*.62*r;n.legL.rotation.x=i,n.legR.rotation.x=-i,n.armL.rotation.x=-i*.8,n.armR.rotation.x=i*.8,n.armL.rotation.z=.05,n.armR.rotation.z=-.05;let a=Math.abs(Math.sin(e.phase))*.035*r+Math.sin(Math.PI*X(e.hop,0,1))*.28,o=0;switch(e.state){case`wave`:n.armR.rotation.x=-2.7+Math.sin(e.stateT*12)*.12,n.armR.rotation.z=-.4+Math.sin(e.stateT*12)*.55;break;case`startle`:n.armL.rotation.x=-1.3,n.armR.rotation.x=-1.3,n.legL.rotation.x=.9*Math.sin(e.stateT*18),n.legR.rotation.x=-.9*Math.sin(e.stateT*18);break;case`fall`:o=Rl(n.root.rotation.x,1.45,14,t),a=-.05;break;case`getup`:o=Rl(n.root.rotation.x,0,7,t);break;case`idle`:n.armL.rotation.x=Math.sin(e.stateT*1.4+e.phase)*.12-.15,e.stateT%6<1.4&&(n.armR.rotation.x=-1+Math.sin(e.stateT*7)*.2)}e.state!==`fall`&&e.state!==`getup`&&(o=Rl(n.root.rotation.x,0,12,t)),n.root.rotation.x=o,n.root.rotation.y=e.heading,n.root.position.set(e.x,e.y+a,e.z);let s=e.info;s.x=e.x,s.y=e.y,s.z=e.z,s.heading=e.heading,s.speed=e.speed,s.state=e.state}function oe(e,n,r){e.bumpCd=Math.max(0,e.bumpCd-n),e.phase+=n;let i=0;if(e.scare>0)e.scare-=n,e.info.spooked=!0,i=e.inWater?.5:2.1,e.heading=Bl(e.heading,Math.atan2(e.scareDirX,e.scareDirZ),5,n);else if(e.info.spooked=!1,e.inWater)e.x=e.hx+Math.sin(r*.07+e.phase*0+e.hx)*1.2,e.z=e.hz+Math.cos(r*.05+e.hz)*1,e.heading+=Math.sin(r*.11+e.hx)*.1*n;else if(e.moveLeft>0)e.moveLeft-=n,i=.55,e.heading=Bl(e.heading,Math.atan2(e.tx-e.x,e.tz-e.z),2,n),Math.hypot(e.tx-e.x,e.tz-e.z)<.6&&(e.moveLeft=0);else if(e.waitLeft-=n,e.waitLeft<=0){for(let n=0;n<6;n++){let n=s()*Math.PI*2,r=Math.sqrt(s())*e.r,i=e.hx+Math.cos(n)*r,a=e.hz+Math.sin(n)*r;if(!t.isWater(i,a)){e.tx=i,e.tz=a,e.moveLeft=7;break}}e.waitLeft=6+s()*14}if(i>0){let r=e.x+Math.sin(e.heading)*i*n,a=e.z+Math.cos(e.heading)*i*n;!e.inWater&&t.isWater(r,a)&&(r=e.x,a=e.z,e.scare=0),Math.hypot(r-e.hx,a-e.hz)>e.r*3+8&&(r=e.x,a=e.z),e.x=r,e.z=a}let a=t.getTerrainHeight(e.x,e.z),o=t.getWaterLevel(e.x,e.z),c=e.inWater&&o!==null?o-.78:a;e.y=Rl(e.y,c,8,n);let l=e.info;l.x=e.x,l.y=e.y,l.z=e.z,l.heading=e.heading}function se(e,t){let n=e.rig,r=e.scare>0||e.moveLeft>0,i=r?e.scare>0?7:3.4:0,a=r?e.scare>0?.5:.32:0,o=e.phase*i;n.legs[0].rotation.x=Math.sin(o)*a,n.legs[3].rotation.x=Math.sin(o)*a,n.legs[1].rotation.x=-Math.sin(o)*a,n.legs[2].rotation.x=-Math.sin(o)*a;let s=r?.1:.55+Math.sin(t*.4+e.phase)*.35,c=e.scare>0?-.35:s*(e.inWater?.15:1);n.head.rotation.x=Rl(n.head.rotation.x,c,3,.016),n.head.rotation.y=Math.sin(t*.3+e.hx)*.2,n.tail.rotation.z=Math.sin(t*2.6+e.hz)*.35,n.tail.rotation.x=.15+Math.sin(t*1.7+e.hx)*.1,n.body.scale.y=1+Math.sin(t*1.6+e.phase)*.012,n.root.rotation.y=e.heading,n.root.position.set(e.x,e.y,e.z)}function ce(e,t,n){e.alarm=Math.max(0,e.alarm-t);let r=1+X(e.alarm,0,3)*.3;e.phi+=e.omega*r*t;let i=e.ampX*Math.sin(e.phi),a=e.ampZ*Math.sin(2*e.phi)*.5,o=Math.cos(e.tilt),s=Math.sin(e.tilt),c=e.cx+i*o-a*s,l=e.cz+i*s+a*o,u=e.ampX*Math.cos(e.phi),d=e.ampZ*Math.cos(2*e.phi),f=u*o-d*s,p=u*s+d*o,m=Math.atan2(f,p),h=-e.ampX*Math.sin(e.phi),g=-2*e.ampZ*Math.sin(2*e.phi),_=h*o-g*s,v=X(-((f*(h*s+g*o)-p*_)/Math.max(f*f+p*p,1))*7/Math.max(e.omega,.05),-.55,.55),y=e.baseGround+e.alt+Math.sin(e.phi*.5+e.seed)*2.2+e.alarm*1.5,b=e.rig;b.root.position.set(c,y,l),b.root.rotation.set(.05+Math.sin(n*.8+e.seed)*.03-e.alarm*.05,m,v,`YXZ`),e.flapT+=t*(1+e.alarm*.8);let x=e.flapT%e.flapPeriod<1.6||e.alarm>0,S=x?Math.sin(e.flapT*(e.alarm>0?11:7.5))*.6+.1:.12+Math.sin(n*.9+e.seed)*.04;b.wingL.rotation.z=S,b.wingR.rotation.z=-S,b.neck.rotation.x=-.15+(x?Math.sin(e.flapT*7.5)*.05:0)}let le=[],ue=!0;function de(e,n,r){let i=e.v;e.bumpCd=Math.max(0,e.bumpCd-n),e.hornCd=Math.max(0,e.hornCd-n),i.headlightsOn=r;let s=e.loop.pts.length,u=e.loop.pts[e.wp],d=Math.sin(i.yaw),f=Math.cos(i.yaw),p=u.x,m=u.z;e.shift>.05&&(p+=f*e.shift,m-=d*e.shift),Math.hypot(p-i.position.x,m-i.position.z)<Math.max(5,Math.abs(i.forwardSpeed)*.9)&&(e.wp=(e.wp+1)%s);let _=zl(Math.atan2(p-i.position.x,m-i.position.z)-i.yaw),v=X(-_*1.8,-1,1),y=Math.min(e.cruise,e.loop.caps[e.wp])*X(1-Math.abs(_)*.7,.3,1),b=i.spec.bodyLength*.5,x=y,S=1/0,C=(e,t,n,r)=>{let a=e-i.position.x,o=t-i.position.z,s=a*d+o*f;if(s<0||s>Og)return;let c=a*-f+o*d;if(Math.abs(c)>r+n)return;let l=s-b-n;S=Math.min(S,l),x=Math.min(x,X((l-3.5)*.7,0,y))};A&&C(w,E,ue?.6:1.6,ue?1.8:2.4);for(let t of h)t!==e&&C(t.v.position.x,t.v.position.z,t.v.spec.bodyLength*.35,1.5);for(let e of le)e!==i&&C(e.position.x,e.position.z,e.spec.bodyLength*.35,1.8);for(let e of c)Math.abs(e.x-i.position.x)<Og&&Math.abs(e.z-i.position.z)<Og&&C(e.x,e.z,.4,1.6);for(let e of l)Math.abs(e.x-i.position.x)<Og&&Math.abs(e.z-i.position.z)<Og&&C(e.x,e.z,1,1.6);let T=x<y*.5;e.yielding=T,T?(e.blockedT+=n,e.blockedT>6&&S>2.5&&(e.shift=Math.min(3,e.shift+n*.9),x=Math.max(x,1.6)),e.blockedT>3.5&&e.hornCd<=0&&(Dg.horn=!0,e.hornCd=5)):(e.blockedT=Math.max(0,e.blockedT-n*2),e.blockedT<=0&&(e.shift=Math.max(0,e.shift-n*.8))),y=x;let k=i.forwardSpeed,j=X((y-k)*.55,-1,1),M=!1;if(j<0&&k<.8&&(j=0,M=y<.3),Dg.throttle=j,Dg.steer=v,Dg.handbrake=M,Dg.boost=!1,Qm(i,Dg,n,t,[...g,...le]),Dg.horn=!1,y>2&&Math.abs(i.forwardSpeed)<.4&&!T?e.stuckT+=n:e.stuckT=0,e.stuckT>6||i.respawnCount>0||i.submergedTime>1){let n=e.loop.pts[e.wp],r=e.loop.pts[(e.wp+1)%s];qm(i,n.x,n.z,Math.atan2(r.x-n.x,r.z-n.z),t),e.stuckT=0,i.respawnCount=0}if(A&&e.bumpCd<=0){let t=Jl(w-i.position.x,E-i.position.z,i.yaw);if(Math.abs(t.z)<b+.5&&Math.abs(t.x)<i.spec.bodyWidth*.5+(ue?.4:1.1)){let t=Math.hypot(D-i.velocity.x,O-i.velocity.z);t>2.5&&(e.bumpCd=2,a.aiVehicleBumps++,o(`ai-vehicle-bump`,i.position.x,i.position.z,t/20,e.info.id))}}e.info.x=i.position.x,e.info.z=i.position.z,e.info.speedKmh=i.speedKmh,e.info.yielding=e.yielding}function fe(){let e=0;c.map(e=>({v:e,d:Math.hypot(e.x-w,e.z-E)})).filter(e=>e.d<32&&e.v.state!==`fall`).sort((e,t)=>e.d-t.d).forEach((t,n)=>{let r=t.v;e++,a.honkHits++,o(`honk-villager`,r.x,r.z,1-t.d/32,r.id),r.faceYaw=Math.atan2(w-r.x,E-r.z),r.state!==`getup`&&(r.state=`wave`,r.stateT=0),n===0?C(r,Gh,3.2,!0):n<3&&C(r,tg(r.place),3.4,!0)});for(let t of l){let n=Math.hypot(t.x-w,t.z-E);if(n<26){e++,t.scare<=0&&(a.buffaloSpooks++,o(`buffalo-spook`,t.x,t.z,1-n/26,t.id)),t.scare=2.8;let r=t.x-w,i=t.z-E,s=Math.hypot(r,i)||1;t.scareDirX=r/s,t.scareDirZ=i/s}}for(let e of u)Math.hypot(e.cx-w,e.cz-E)<140&&(e.alarm=3);e>0&&a.honkEvents++}function pe(e,n){j=Math.max(0,j-e);let r=t.getSurfaceType(w,E,n),i=k>7&&ng.has(r);if(i&&!M&&(a.cropZips++,o(`crop-zip`,w,E,k/25,``)),M=i,i&&j<=0){let e=ne(w,E,90);if(e&&e.state!==`fall`){let t=sd(w,E).crop;e.faceYaw=Math.atan2(w-e.x,E-e.z),e.state!==`getup`&&(e.state=`wave`,e.stateT=0),C(e,eg(t),3.8,!0)&&(j=9)}}}function me(e){if(N-=e,N>0)return;let t=ne(w,E,16);if(!t||t.state===`fall`||t.bubbleCd>0){N=3;return}N=14+s()*10;let n=tg(t.place),r=Math.hypot(w-Ru.x,E-Ru.z),i=Math.min(...zu.map(e=>Math.hypot(w-e.x,E-e.z)));r<70?n=qh:i<24?n=Kh:Math.hypot(w-wu.x,E-wu.z)<wu.phirniRadius+15&&(n=Jh),P>.3&&s()<.65?n=Yh:ee&&s()<.75&&(n=Xh),Math.hypot(w-ju.x,E-ju.z)<45&&(n=Zh),C(t,n,3.6)}function he(e){if(I-=e,!F||I>0||Math.hypot(w-ju.x,E-ju.z)>70)return;let t=c.filter(e=>e.place===`akhara`&&e.state!==`fall`);if(t.length===0)return;let n=t[Math.floor(s()*t.length)%t.length];C(n,Qh[Math.floor(s()*Qh.length)%Qh.length],2.2,!0),I=1.8+s()*1.2}let ge=new W;function _e(e){for(let t of S){if(t.owner===null)continue;t.age+=e;let n=c.find(e=>e.id===t.owner);if(!n||t.age>=t.life){t.owner=null,t.sprite.visible=!1;continue}let r=Math.min(1,t.age/.2,(t.life-t.age)/.35);t.mat.opacity=X(r,0,1);let i=Math.min(.3,t.age*.35);t.sprite.position.set(n.x,n.y+n.rig.headY+.5+i+(n.state===`fall`?-1.2:0),n.z),ge.set(w,T+2,E);let a=X(ge.distanceTo(t.sprite.position)/9,1,2.6),o=t.mat.map.image,s=o.height*.0021*a;t.sprite.scale.set(s*(o.width/o.height),s,1)}}let ve=0;return{update:(e,t,n,r,i)=>{if(te||(e=X(e,0,.1),e<=0))return;if(ve++,A){let t=(n.x-w)/e,r=(n.z-E)/e;Math.hypot(t,r)<70?(D=Rl(D,t,14,e),O=Rl(O,r,14,e)):D=O=0}w=n.x,T=n.y,E=n.z,A=!0,k=Math.hypot(D,O),ue=i?.onFoot??k<8,le=i?.extraBodies??[];let s=!!i?.isNight;P=i?.rainIntensity??0,ee=!!i?.harvesting,F=!!i?.tochanActive,r&&fe(),pe(e,T),me(e),he(e);for(let t of c){let n=Math.hypot(t.x-w,t.z-E);ae(t,e);let r=n<240;r!==t.visible&&(t.visible=r,t.rig.root.visible=r),r&&R(t,e)}for(let n of l){let r=Math.hypot(n.x-w,n.z-E);if(r<9&&k>7&&n.scare<=0){a.buffaloSpooks++,o(`buffalo-spook`,n.x,n.z,k/20,n.id),n.scare=2.2;let e=r||1;n.scareDirX=(n.x-w)/e,n.scareDirZ=(n.z-E)/e}if(r<n.info.radius+.6&&n.bumpCd<=0){n.bumpCd=1.2,a.buffaloBumps++,o(`buffalo-bump`,n.x,n.z,k/14,n.id);let e=r||1;n.x+=(n.x-w)/e*.3,n.z+=(n.z-E)/e*.3,n.scare<=0&&(n.scare=1.2,n.scareDirX=(n.x-w)/e,n.scareDirZ=(n.z-E)/e)}oe(n,e,t);let i=r<260;i!==n.visible&&(n.visible=i,n.rig.root.visible=i),i&&se(n,t)}for(let n of u){let r=Math.hypot(n.cx-w,n.cz-E)<420;r!==n.visible&&(n.visible=r,n.rig.root.visible=r),(r||ve%8==0)&&ce(n,e,t)}for(let t of h)de(t,e,s),Vh(t.v,e,s);_e(e)},stats:a,getVillagers:()=>c.map(e=>e.info),getBuffaloes:()=>l.map(e=>e.info),getAiVehicles:()=>h.map(e=>e.info),getVehicleBodies:()=>g,nearestVillager(e,t,n=30){let r=ne(e,t,n);return r?r.info:null},resolveBuffaloOverlap(e,t,n){let r=!1;for(let i of l){let a=e-i.x,o=t-i.z,s=Math.hypot(a,o),c=n+i.info.radius;if(s<c){let n=s>1e-4?s:1;e=i.x+(s>1e-4?a/n:1)*c,t=i.z+(s>1e-4?o/n:0)*c,r=!0}}return{x:e,z:t,hit:r}},on(e){return i.add(e),()=>i.delete(e)},say(e,t,n=3.4){let r=c.find(t=>t.id===e);return r?C(r,t,n,!0):!1},dispose(){if(!te){te=!0,i.clear();for(let t of h){e.remove(t.v.rig.root),zf(t.v.rig.root);for(let e of t.v.rig.disposables)e.dispose()}h.length=0,g.length=0;for(let e of S)e.mat.dispose();for(let e of b.values())e.tex.dispose();b.clear(),e.remove(n),zf(n),r.dispose()}}}}var Ag=[{gurmukhi:`ਪਹਿਲਾ ਗੇੜ`,english:`Round 1 · Contender`,rivalName:`ਸ਼ੇਰਾ 595`,rivalPull:2.6,rivalSurge:4.4,needlePeriod:1.7,zoneLo:.34,zoneHi:.66,timeLimit:75},{gurmukhi:`ਦੂਜਾ ਗੇੜ — ਪਿੰਡ ਦਾ ਸੂਰਮਾ`,english:`Round 2 · Village Champion`,rivalName:`ਸ਼ੇਰਾ 595`,rivalPull:3.3,rivalSurge:5.6,needlePeriod:1.35,zoneLo:.36,zoneHi:.64,timeLimit:75}],jg=3.2,Mg=3.2,Ng=3,Pg=class{round=0;phase=`intro`;margin=0;velocity=0;phaseTime=0;roundTime=0;surge=0;tension=0;rivalSurging=!1;needlePhase=0;tapCooldown=0;slip=0;get def(){return Ag[Math.min(this.round,Ag.length-1)]}get needle(){let e=this.needlePhase/(Math.PI*2)%1;return Math.abs(e*2-1)}get inZone(){let e=this.needle;return e>=this.def.zoneLo&&e<=this.def.zoneHi}get countdown(){return Math.max(0,Math.ceil(jg-this.phaseTime-.2))}startRound(){this.phase=`intro`,this.phaseTime=0,this.roundTime=0,this.margin=0,this.velocity=0,this.surge=0,this.slip=0,this.tapCooldown=0,this.needlePhase=0}restart(){this.round=0,this.startRound()}step(e,t,n){let r=[];if(this.phaseTime+=e,this.tapCooldown=Math.max(0,this.tapCooldown-e),this.slip=Math.max(0,this.slip-e),this.phase===`intro`)return this.tension=.15+.1*Math.sin(this.phaseTime*9),this.needlePhase+=e*Math.PI*2/this.def.needlePeriod,this.phaseTime>=jg&&(this.phase=`pull`,this.phaseTime=0,r.push(`go`)),r;if(this.phase===`between`)return this.tension=Math.max(0,this.tension-e*2),this.phaseTime>=Mg&&(this.round++,this.startRound()),r;if(this.phase===`done`)return this.tension=Math.max(0,this.tension-e*2),r;this.roundTime+=e,this.needlePhase+=e*Math.PI*2/this.def.needlePeriod,n&&this.tapCooldown<=0&&(this.tapCooldown=.45,this.inZone?(this.surge=1,this.velocity+=1,r.push(`zor`)):(this.slip=.6,r.push(`miss`))),this.surge=Math.max(0,this.surge-e/1.1),this.rivalSurging=(this.roundTime+this.round*1.3)%4.2<.9;let i=this.rivalSurging?this.def.rivalSurge:this.def.rivalPull,a=this.slip>0?.35:1,o=((t?Ng:0)*(1+1.6*this.surge)+2*this.surge)*a;this.velocity+=(o-i-1.4*this.velocity)*e,this.velocity=X(this.velocity,-2.4,2.4),this.margin+=this.velocity*e;let s=.3+(t?.25:0)+.35*this.surge+(this.rivalSurging?.25:0);return this.tension=Rl(this.tension,X(s,0,1),8,e),this.margin>=12?(r.push(`round-won`),this.round>=Ag.length-1?(this.phase=`done`,r.push(`won-all`)):this.phase=`between`,this.phaseTime=0):this.margin<=-12?(this.phase=`done`,this.phaseTime=0,r.push(`round-lost`)):this.roundTime>=this.def.timeLimit&&(this.phase=`done`,this.phaseTime=0,r.push(`time-up`)),r}get wheelie(){return Ll(.55,.95,this.tension)}},Fg=new W(1,0,0),Ig=class e{root=new G;links;ends=[];geos=[];mats=[];dummy=new ln;pts;qDir=new dt;qTwist=new dt;dir=new W;static N=16;constructor(){let t=new $i(.1,.034,6,12);t.scale(1.7,1,1);let n=new ua({color:`#aab2bb`,metalness:.85,roughness:.32}),r=new ua({color:`#2b2f35`,metalness:.7,roughness:.5}),i=new Qi(.16,10,8);this.geos.push(t,i),this.mats.push(n,r),this.links=new fi(t,n,e.N),this.links.instanceMatrix.setUsage(Be),this.links.frustumCulled=!1,this.links.castShadow=!0,this.root.add(this.links);for(let e=0;e<2;e++){let e=new J(i,r);e.castShadow=!0,this.ends.push(e),this.root.add(e)}this.pts=Array.from({length:e.N+1},()=>new W),this.root.visible=!1}update(t,n,r,i){let a=e.N,o=.5*(1-X(r,0,1));for(let e=0;e<=a;e++){let s=e/a,c=this.pts[e];c.lerpVectors(t,n,s),c.y-=o*4*s*(1-s),c.y+=Math.sin(i*52+e*1.7)*.018*r*(e===0||e===a?0:1)}for(let e=0;e<a;e++){let t=this.pts[e],n=this.pts[e+1];this.dir.subVectors(n,t),this.dir.lengthSq()<1e-8&&this.dir.set(1,0,0),this.dir.normalize(),this.qDir.setFromUnitVectors(Fg,this.dir),this.qTwist.setFromAxisAngle(Fg,e%2==0?0:Math.PI/2),this.dummy.position.addVectors(t,n).multiplyScalar(.5),this.dummy.quaternion.copy(this.qDir).multiply(this.qTwist),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.links.setMatrixAt(e,this.dummy.matrix)}this.links.instanceMatrix.needsUpdate=!0,this.ends[0].position.copy(t),this.ends[1].position.copy(n)}dispose(){for(let e of this.geos)e.dispose();for(let e of this.mats)e.dispose();this.links.dispose()}},Lg=class{max;root=new G;strips;windrows;geos=[];mats=[];dummy=new ln;color=new K;cursor=0;acc=0;total=0;constructor(e=480){this.max=e;let t=new Wi(4.4,.05,1.7),n=new Qi(.5,10,6);this.geos.push(t,n);let r=new fa({color:`#ffffff`}),i=new fa({color:`#ffffff`,emissive:`#4a3000`,emissiveIntensity:.35});this.mats.push(r,i),this.strips=new fi(t,r,e),this.windrows=new fi(n,i,e);for(let e of[this.strips,this.windrows])e.instanceMatrix.setUsage(Be),e.frustumCulled=!1,e.receiveShadow=!0,this.root.add(e);this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(let t=0;t<e;t++)this.strips.setMatrixAt(t,this.dummy.matrix),this.windrows.setMatrixAt(t,this.dummy.matrix),this.strips.setColorAt(t,this.color.set(`#b89a52`)),this.windrows.setColorAt(t,this.color.set(`#d9a441`))}advance(e,t,n,r,i,a){if(this.acc+=e,this.acc<1.5)return!1;this.acc=0;let o=Math.sin(i),s=Math.cos(i),c=t-o*3.6,l=r-s*3.6,u=n+(a?1.25:.95),d=this.cursor;this.cursor=(this.cursor+1)%this.max,this.total++;let f=this.total*37%11/11;return this.dummy.position.set(c,u,l),this.dummy.rotation.set(0,i,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.strips.setMatrixAt(d,this.dummy.matrix),this.strips.setColorAt(d,this.color.set(`#b89a52`).offsetHSL(0,0,(f-.5)*.08)),this.dummy.position.y=u+.18,this.dummy.scale.set(1.15,.5,2.1),this.dummy.updateMatrix(),this.windrows.setMatrixAt(d,this.dummy.matrix),this.windrows.setColorAt(d,this.color.set(`#d9a441`).offsetHSL(0,0,(f-.5)*.1)),this.strips.instanceMatrix.needsUpdate=!0,this.windrows.instanceMatrix.needsUpdate=!0,this.strips.instanceColor&&(this.strips.instanceColor.needsUpdate=!0),this.windrows.instanceColor&&(this.windrows.instanceColor.needsUpdate=!0),!0}dispose(){for(let e of this.geos)e.dispose();for(let e of this.mats)e.dispose();this.strips.dispose(),this.windrows.dispose()}};function Rg(){let e=null,t=1/0,n=Math.floor((Au.x-330)/40),r=Math.floor((Au.x+330)/40),i=Math.floor((Au.z-330)/40),a=Math.floor((Au.z+300)/40);for(let o=i;o<=a;o++)for(let i=n;i<=r;i++){let n=sd(i*40+20,o*40+20);if(n.crop!==`wheat`)continue;let r=(n.minX+n.maxX)/2,a=(n.minZ+n.maxZ)/2;if(Math.abs(r)>760||Math.abs(a)>760)continue;let s=Math.hypot(r-Au.x,a-Au.z);if(s<95||s>=t)continue;let c=(n.maxX-n.minX)*.3,l=(n.maxZ-n.minZ)*.3,u=!0;for(let e=-1;e<=1&&u;e++)for(let t=-1;t<=1&&u;t++)xd(r+t*c,a+e*l).surface!==`wheat`&&(u=!1);u&&(e={x:r,z:a},t=s)}return e??{x:Au.x,z:Au.z+140}}var zg=e=>zu[e-1],Bg=Su[0];function Vg(e){return{x:e,z:hu(e)-11}}var Hg=[-470,-400,-330,-260,-190,-120,-50,20,72],Ug=Vg(-540),Wg=[[60,53,`ਸਰ੍ਹੋਂ`],[20,69,`ਸਰ੍ਹੋਂ`],[12,100,`ਝੋਨਾ`],[-12,100,`ਝੋਨਾ`],[-32,100,`ਝੋਨਾ`],[-28,60,`ਸਰ੍ਹੋਂ`],[-10,20,`ਕਣਕ`],[100,20,`ਕਣਕ`],[180,20,`ਝੋਨਾ`],[52,20,`ਸਰ੍ਹੋਂ`]],Gg={x:-150,z:-110},Kg=Rg(),qg={x:Au.x+2,z:Au.z-22},Jg={x:Au.x+20,z:Au.z-2},Yg={x:Jg.x-6.5,z:Jg.z+4.6},Xg=1/320,Zg=2.2,Qg=25,$g=4,e_=`mission-tochan-player`,t_=`mission-tochan-rival`,n_=3.7,r_=3.2,i_=[{id:`milk-run`,number:1,gurmukhi:`ਸਵੇਰ ਦੀ ਦੁੱਧ ਵਾਲੀ ਫੇਰੀ`,english:`Morning Milk Run`,briefGurmukhi:`ਸੱਥ ਤੋਂ ਦੁੱਧ ਦੇ ਡੋਲੂ ਚੁੱਕੋ ਤੇ ਚਾਰੇ ਮੋਟਰਾਂ ਤੇ ਪਹੁੰਚਾਓ। ਬਾਪੂ ਜੀ ਉਡੀਕਦੇ ਨੇ!`,briefEnglish:`Load the milk cans at the Sath and deliver them to all four farm Motors.`,giver:`ਬੇਬੇ ਜੀ`,start:{x:-188,z:-212},startRadius:7,vehicle:{kind:`bike`},allowed:null,requireVehicle:!1,clockStart:void 0,par:240,reward:500,objectives:[{kind:`reach`,x:zg(3).x,z:zg(3).z,radius:9,legTime:130,gurmukhi:`ਤੀਜੀ ਮੋਟਰ ਤੇ ਦੁੱਧ ਪਹੁੰਚਾਓ`,english:`Deliver milk to Motor #3`},{kind:`reach`,x:zg(1).x,z:zg(1).z,radius:9,legTime:110,gurmukhi:`ਪਹਿਲੀ ਮੋਟਰ ਤੇ ਦੁੱਧ ਪਹੁੰਚਾਓ`,english:`Deliver milk to Motor #1`},{kind:`reach`,x:zg(4).x,z:zg(4).z,radius:9,legTime:110,gurmukhi:`ਚੌਥੀ ਮੋਟਰ ਤੇ ਦੁੱਧ ਪਹੁੰਚਾਓ`,english:`Deliver milk to Motor #4`},{kind:`reach`,x:zg(2).x,z:zg(2).z,radius:9,legTime:170,gurmukhi:`ਦੂਜੀ ਮੋਟਰ ਤੇ ਦੁੱਧ ਪਹੁੰਚਾਓ (ਪੁਲੀ ਟੱਪ ਕੇ)`,english:`Deliver milk to Motor #2 (cross the puli)`}]},{id:`harvest-trolley`,number:2,gurmukhi:`ਮੰਡੀ ਦੀ ਟਰਾਲੀ`,english:`Harvest Trolley Run`,briefGurmukhi:`ਕਣਕ ਦੀ ਭਰੀ ਟਰਾਲੀ ਟਰੈਕਟਰ ਨਾਲ ਨਹਿਰ ਦੀ ਪੁਲੀ ਟੱਪ ਕੇ ਪਿੰਡ ਦੇ ਸਾਂਝੇ ਵਿਹੜੇ ਤੱਕ ਪਹੁੰਚਾਓ।`,briefEnglish:`Haul the wheat trolley by tractor over the Nehar puli to the Pind cooperative yard.`,giver:`ਤਾਇਆ ਜੀ`,start:{x:170,z:165},startRadius:7,vehicle:{kind:`tractor`,paint:`#c0392b`},allowed:[`tractor`],requireVehicle:!0,clockStart:170,par:110,reward:800,trailer:!0,objectives:[{kind:`board`,x:0,z:0,radius:5,gurmukhi:`ਟਰੈਕਟਰ ਤੇ ਚੜ੍ਹੋ [F]`,english:`Hop on the tractor [F]`},{kind:`reach`,x:Bg.x+Bg.ax*34,z:Bg.z+Bg.az*34,radius:9,gurmukhi:`ਪੁਲੀ ਵੱਲ ਚੱਲੋ`,english:`Head for the Nehar puli`},{kind:`reach`,x:Bg.x,z:Bg.z,radius:7,gurmukhi:`ਪੁਲੀ ਟੱਪੋ — ਹੌਲੀ ਤੇ ਸਿੱਧਾ!`,english:`Cross the puli — slow and straight!`},{kind:`reach`,x:Bg.x-Bg.ax*34,z:Bg.z-Bg.az*34,radius:9,gurmukhi:`ਪੁਲੀ ਤੋਂ ਹੇਠਾਂ ਉੱਤਰੋ`,english:`Roll off the south end`},{kind:`reach`,x:40,z:36,radius:10,gurmukhi:`ਪਹਿਲੀ ਮੋਟਰ ਵੱਲ ਕੱਚਾ ਰਾਹ`,english:`Follow the kacha track to Motor #1`},{kind:`reach`,x:-40,z:-20,radius:10,gurmukhi:`ਪੱਕੀ ਸੜਕ ਫੜੋ`,english:`Join the link road`},{kind:`reach`,x:-95,z:-60,radius:10,gurmukhi:`ਸਫ਼ੈਦਿਆਂ ਵਾਲੀ ਸੜਕ ਤੇ ਚੱਲਦੇ ਰਹੋ`,english:`Keep on the Safeda-lined road`},{kind:`reach`,x:Gg.x,z:Gg.z,radius:12,gurmukhi:`ਪਿੰਡ ਦੇ ਸਾਂਝੇ ਵਿਹੜੇ ਕਣਕ ਲਾਹੋ`,english:`Unload at the cooperative yard`}]},{id:`canal-sprint`,number:3,gurmukhi:`ਨਹਿਰ ਵਾਲੀ ਦੌੜ`,english:`Canal Bank Sprint`,briefGurmukhi:`ਸਫ਼ੈਦਿਆਂ ਵਾਲੀ ਨਹਿਰ ਦੀ ਪਟੜੀ ਤੇ ਸਮੇਂ ਸਿਰ ਸਾਰੇ ਨਿਸ਼ਾਨ ਪਾਰ ਕਰੋ। ਹਰ ਨਿਸ਼ਾਨ ਤੇ ਸਮਾਂ ਵਧਦਾ ਹੈ।`,briefEnglish:`Race the clock along the Safeda-lined Nehar patri. Every checkpoint adds time.`,giver:`ਸਰਪੰਚ ਸਾਹਿਬ`,start:Ug,startRadius:7,vehicle:{kind:`jeep`,paint:`#2e6f3e`},allowed:[`jeep`,`sedan`,`bike`],requireVehicle:!0,clockStart:34,par:85,reward:600,objectives:[{kind:`board`,x:0,z:0,radius:5,gurmukhi:`ਗੱਡੀ ਤੇ ਚੜ੍ਹੋ [F]`,english:`Hop in the jeep [F]`},...Hg.map((e,t)=>{let n=Vg(e),r=t===Hg.length-1;return{kind:`reach`,x:n.x,z:n.z,radius:10,addTime:r?0:7,gurmukhi:r?`ਆਖ਼ਰੀ ਨਿਸ਼ਾਨ — ਪੂਰਾ ਜ਼ੋਰ!`:`ਨਿਸ਼ਾਨ ${t+1} / ${Hg.length}`,english:r?`Final checkpoint — full throttle!`:`Checkpoint ${t+1} / ${Hg.length}`}})]},{id:`field-rally`,number:4,gurmukhi:`ਪਿੰਡ ਟੋਚਨ ਤੇ ਖੇਤ ਰੈਲੀ`,english:`Field Bund Rally`,briefGurmukhi:`ਝੋਨੇ ਤੇ ਸਰ੍ਹੋਂ ਦੇ ਖੇਤਾਂ ਵਿੱਚੋਂ ਦੀ ਲੰਘਦੇ ਹੋਏ ਸਾਰੇ ਨਿਸ਼ਾਨ ਪਾਰ ਕਰੋ। ਟਰੈਕਟਰ ਜਾਂ ਜੀਪ ਚਲਾਓ।`,briefEnglish:`Cut through Jhona and Sarson fields over the bunds and cross every marker, by Tractor or 4x4 Jeep.`,giver:`ਬਲਵੀਰ ਵੀਰ`,start:{x:34,z:30},startRadius:7,vehicle:{kind:`jeep`,paint:`#b8641f`},allowed:[`tractor`,`jeep`],requireVehicle:!0,clockStart:62,par:100,reward:700,objectives:[{kind:`board`,x:0,z:0,radius:5,gurmukhi:`ਜੀਪ ਜਾਂ ਟਰੈਕਟਰ ਤੇ ਚੜ੍ਹੋ [F]`,english:`Hop on the jeep or a tractor [F]`},...Wg.map(([e,t,n],r)=>({kind:`reach`,x:e,z:t,radius:10,addTime:12,gurmukhi:r===Wg.length-1?`ਆਖ਼ਰੀ ਨਿਸ਼ਾਨ — ਸਰ੍ਹੋਂ ਦੇ ਖੇਤ`:`ਨਿਸ਼ਾਨ ${r+1} / ${Wg.length} — ${n} ਦਾ ਖੇਤ`,english:r===Wg.length-1?`Finish line — the Sarson field`:`Marker ${r+1} / ${Wg.length}`}))]},{id:`protect-fields`,number:5,gurmukhi:`ਖੇਤਾਂ ਦੀ ਰਾਖੀ`,english:`Protect the Fields`,briefGurmukhi:`ਰੇਤ ਵਾਲੇ ਟਿੱਪਰ ਸੂਏ ਨੂੰ ਲਤਾੜ ਕੇ ਲੰਘਣ ਲੱਗੇ ਨੇ — ਅੱਗੇ ਹੋ ਕੇ ਉਨ੍ਹਾਂ ਦਾ ਰਾਹ ਰੋਕੋ! ਘੱਟੋ-ਘੱਟ ਦੋ ਟਿੱਪਰ ਮੋੜੋ।`,briefEnglish:`Reckless sand tippers are about to cut across the irrigation channel. Get ahead and block them — turn back at least two.`,giver:`ਸਰਪੰਚ ਸਾਹਿਬ`,start:{x:352,z:196},startRadius:7,vehicle:{kind:`jeep`,paint:`#f2c230`},allowed:null,requireVehicle:!1,par:120,reward:900,protect:!0,objectives:[]},{id:`tractor-tochan`,number:6,gurmukhi:`ਪਿੰਡ ਦਾ ਟੋਚਨ ਮੇਲਾ`,english:`Pind Tractor Tochan`,briefGurmukhi:`ਮੇਲੇ ਦੇ ਅਖਾੜੇ ਵਿੱਚ ਸੰਗਲ ਨਾਲ ਜੁੜੇ ਸ਼ੇਰਾ 595 ਨੂੰ ਚੂਨੇ ਦੀ ਲੀਕ ਤੋਂ ਬਾਰਾਂ ਮੀਟਰ ਪਾਰ ਘੜੀਸੋ। W ਦੱਬੀ ਰੱਖੋ ਤੇ ਪੀਲੇ ਹਿੱਸੇ ਵਿੱਚ ਸਪੇਸ ਦਬਾਓ। ਦੋ ਗੇੜ ਜਿੱਤਣੇ ਨੇ!`,briefEnglish:`Chained tail to tail with Shera 595 across the Akhara chalk line: hold W to pull and tap Space in the gold zone for a ZOR surge. Drag the rival 12 m over your line in 2 rounds.`,giver:`ਬਲਵੀਰ ਵੀਰ`,start:{x:ju.x,z:ju.z},startRadius:6,allowed:null,requireVehicle:!1,par:0,reward:1200,tochan:!0,fixedReward:!0,objectives:[]},{id:`combine-harvest`,number:7,gurmukhi:`ਕਣਕ ਦੀ ਵਾਢੀ`,english:`Baisakhi Combine Harvest`,briefGurmukhi:`ਵਿਸਾਖੀ ਆ ਗਈ! ਕੰਬਾਈਨ ਤੇ ਚੜ੍ਹ ਕੇ ਸੁਨਹਿਰੀ ਕਣਕ ਵੱਢੋ ਜਦੋਂ ਤੱਕ ਦਾਣਿਆਂ ਦੀ ਟੈਂਕੀ ਭਰ ਨਾ ਜਾਵੇ, ਫਿਰ ਦਾਣਾ ਮੰਡੀ ਵਿੱਚ ਟਰਾਲੀ ਕੋਲ ਦਾਣੇ ਲਾਹ ਦਿਓ।`,briefEnglish:`Baisakhi is here! Reap the golden wheat in the Combine until the grain hopper hits 100%, then unload beside the waiting tractor-trolley at the Dana Mandi.`,giver:`ਸਰਪੰਚ ਸਾਹਿਬ`,start:qg,startRadius:7,vehicle:{kind:`combine`},allowed:[`combine`],requireVehicle:!0,par:0,reward:1e3,harvest:!0,fixedReward:!0,objectives:[{kind:`board`,x:0,z:0,radius:5,gurmukhi:`ਕੰਬਾਈਨ ਤੇ ਚੜ੍ਹੋ [F]`,english:`Hop on the Harvest Combine [F]`},{kind:`harvest`,x:Kg.x,z:Kg.z,radius:18,gurmukhi:`ਕਣਕ ਵੱਢੋ — ਟੈਂਕੀ 0%`,english:`Reap the golden wheat — hopper 0%`},{kind:`reach`,unload:!0,x:Yg.x,z:Yg.z,radius:6,gurmukhi:`ਮੰਡੀ ਵਿੱਚ ਟਰਾਲੀ ਕੋਲ ਰੁਕ ਕੇ ਦਾਣੇ ਲਾਹੋ`,english:`Stop beside the trolley at the Dana Mandi and unload`}]}],a_=[{from:{x:452,z:150},cross:{x:302,z:162},exit:{x:215,z:175},release:3},{from:{x:468,z:238},cross:{x:322,z:232},exit:{x:230,z:250},release:15},{from:{x:482,z:322},cross:{x:341,z:302},exit:{x:250,z:320},release:28}],o_=[{id:`tanki`,x:-175,z:-140,gurmukhi:`ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ ਦੀ ਛੱਤ`,english:`Paani Wali Tanki roof`},{id:`puli-1`,x:Su[0].x,z:Su[0].z,gurmukhi:`ਮੋਟਰਾਂ ਵਾਲੀ ਪੁਲੀ`,english:`Motor Track Puli`},{id:`puli-2`,x:Su[1].x,z:Su[1].z,gurmukhi:`ਪੱਕੀ ਸੜਕ ਦੀ ਪੁਲੀ`,english:`Link Road Puli`},{id:`puli-3`,x:Su[2].x,z:Su[2].z,gurmukhi:`ਵੱਡੀ ਸੜਕ ਦਾ ਪੁਲ`,english:`Highway Bridge`},{id:`sarson`,x:52,z:20,gurmukhi:`ਸਰ੍ਹੋਂ ਦੇ ਖੇਤ ਦਾ ਵਿਚਕਾਰ`,english:`Heart of the Sarson field`},{id:`motor-1`,x:zu[0].x+4.5,z:zu[0].z,gurmukhi:`ਪਹਿਲੀ ਮੋਟਰ`,english:`Motor #1`},{id:`motor-2`,x:zu[1].x+4.5,z:zu[1].z,gurmukhi:`ਦੂਜੀ ਮੋਟਰ`,english:`Motor #2`},{id:`motor-3`,x:zu[2].x+4.5,z:zu[2].z,gurmukhi:`ਤੀਜੀ ਮੋਟਰ`,english:`Motor #3`},{id:`motor-4`,x:zu[3].x+4.5,z:zu[3].z,gurmukhi:`ਚੌਥੀ ਮੋਟਰ`,english:`Motor #4`},{id:`dhaba-apron`,x:Ru.x-12,z:Ru.z+8,gurmukhi:`ਰੰਗਲਾ ਢਾਬਾ — ਅਗਲਾ ਵਿਹੜਾ`,english:`Rangla Dhaba — front apron`},{id:`dhaba-back`,x:Ru.x+2,z:Ru.z-11,gurmukhi:`ਰੰਗਲਾ ਢਾਬਾ — ਪਿਛਲੀ ਮੰਜੀ`,english:`Rangla Dhaba — back charpai`},{id:`sath`,x:-197,z:-198,gurmukhi:`ਸੱਥ ਤੇ ਬੋਹੜ`,english:`Sath under the Bohr`},{id:`toba`,x:Pu.x+26,z:Pu.z+4,gurmukhi:`ਟੋਭੇ ਦਾ ਕੰਢਾ`,english:`Toba bank`},{id:`patri`,x:Vg(-120).x,z:Vg(-120).z,gurmukhi:`ਨਹਿਰ ਦੀ ਪਟੜੀ`,english:`Nehar patri`},{id:`kamad`,x:140,z:20,gurmukhi:`ਕਮਾਦ ਦੇ ਵਿੱਚ ਲੁਕੀ`,english:`Hidden in the Kamad`}],s_=new K(`#ffb000`),c_=new K(`#d9a441`),l_=new K(`#ffd23f`);function u_(e,t){return new ca({uniforms:{uColor:{value:e.clone()},uTime:{value:0},uAlpha:{value:t}},vertexShader:`varying float vH; void main(){ vH = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 uColor; uniform float uTime; uniform float uAlpha; varying float vH;
void main(){
  float a = pow(1.0 - vH, 1.5) * 0.6 + 0.05;
  a *= 0.82 + 0.18 * sin(uTime * 2.6 + vH * 14.0);
  a *= uAlpha;
  gl_FragColor = vec4(uColor * a * 1.6, a);
}`,transparent:!0,depthWrite:!1,blending:2,side:2,fog:!1})}function d_(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);if(t){let e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,`rgba(255,230,140,1)`),e.addColorStop(.35,`rgba(255,190,60,0.5)`),e.addColorStop(1,`rgba(255,170,0,0)`),t.fillStyle=e,t.fillRect(0,0,64,64)}let n=new Bi(e);return n.colorSpace=Fe,n}var f_=1024,p_=320,m_=100,h_=40,g_=`"Noto Sans Gurmukhi", "Raavi", sans-serif`;function __(e,t){let n=e.getContext(`2d`);if(!n)return;let r=e.width,i=e.height;n.clearRect(0,0,r,i),n.fillStyle=`rgba(60,30,6,0.68)`,n.fillRect(0,0,r,i),n.strokeStyle=`#d9a441`,n.lineWidth=10,n.strokeRect(5,5,r-10,i-10),n.fillStyle=`#fff2c4`,n.textAlign=`center`,n.textBaseline=`middle`;let a=t.split(`
`),o=r-128,s=i/(a.length+.4),c=Math.min(m_,Math.floor(s*.82));a.forEach((e,t)=>{let l=c;n.font=`bold ${l}px ${g_}`;let u=n.measureText(e).width;u>o&&(l=Math.max(h_,Math.floor(l*o/u)),n.font=`bold ${l}px ${g_}`),n.fillText(e,r/2,i/2+(t-(a.length-1)/2)*s,o)})}function v_(e){let t=document.createElement(`canvas`);t.width=f_,t.height=p_,__(t,e);let n=new Bi(t);return n.colorSpace=Fe,n.anisotropy=4,document.fonts?.ready.then(()=>{__(t,e),n.needsUpdate=!0}),n}var y_=class{disposables=[];ringGeo=new $i(1,.045,10,56);groundGeo=new Zi(.82,1,56);discGeo=new Gi(.82,48);beamGeo=new Ki(.9,.9,1,20,1,!0);constructor(){this.disposables.push(this.ringGeo,this.groundGeo,this.discGeo,this.beamGeo)}create(e,t,n,r={}){let i=new G,a=r.alpha??1,o=new Ur({color:e,transparent:!0,opacity:.85*a,depthWrite:!1,blending:2,side:2,fog:!1}),s=new Ur({color:e,transparent:!0,opacity:.14*a,depthWrite:!1,blending:2,side:2,fog:!1}),c=new J(this.groundGeo,o);c.rotation.x=-Math.PI/2,c.scale.setScalar(t),c.position.y=.35;let l=new J(this.discGeo,s);l.rotation.x=-Math.PI/2,l.scale.setScalar(t),l.position.y=.3,c.add(l),l.scale.setScalar(1),i.add(c);let u=new Ur({color:l_,transparent:a<1,opacity:a,fog:!1}),d=new G,f=new J(this.ringGeo,u);f.scale.setScalar(Math.max(2.4,t*.7)),f.position.y=Math.max(2.8,t*.7)+.8;let p=new J(this.ringGeo,u);p.scale.setScalar(Math.max(2.4,t*.7)),p.position.y=f.position.y,p.rotation.y=Math.PI/2,d.add(f,p),i.add(d);let m=u_(e,a),h=new J(this.beamGeo,m);h.scale.set(Math.max(1.2,t*.22),n,Math.max(1.2,t*.22)),h.position.y=n/2,h.frustumCulled=!1,i.add(h);let g=null;if(r.label){let e=v_(r.label.text),n=new Sr({map:e,transparent:!0,depthWrite:!1,fog:!1});g=new Ir(n);let a=r.label.w??15;g.scale.set(a,p_/f_*a,1),g.position.y=f.position.y+Math.max(2.4,t*.7)+3.4,i.add(g),this.disposables.push(e,n)}return this.disposables.push(o,s,u,m),{root:i,rings:d,ground:c,beam:h,beamMat:m,label:g,radius:t}}};function b_(){let e=new G,t=new qi(.07,1.25,5);t.translate(0,.62,0);let n=new $i(.2,.05,6,14);n.rotateX(Math.PI/2);let r=new ua({color:`#f0b723`,emissive:`#7a4a00`,emissiveIntensity:.9,roughness:.55,metalness:.15}),i=new ua({color:`#9b2f1c`,roughness:.8});for(let n=0;n<15;n++){let i=n/15*Math.PI*2,a=.12+n%3*.09,o=new J(t,r);o.rotation.set(Math.sin(i)*a,0,-Math.cos(i)*a),o.scale.y=.85+n%4*.08,e.add(o)}let a=new J(n,i);return a.position.y=.4,e.add(a),e.scale.setScalar(1.15),{group:e,geos:[t,n],mats:[r,i]}}var x_=class{root=new G;yaw=0;geos=[];mats=[];constructor(){let e=new ua({color:`#8a5a2b`,roughness:.9}),t=new ua({color:`#2a2a2e`,roughness:.7}),n=new ua({color:`#e5b73b`,roughness:.8,emissive:`#5a3a00`,emissiveIntensity:.4}),r=new Wi(2.3,.18,3.6),i=new Wi(.12,.7,3.6),a=new Wi(2.3,.7,.12),o=new Ki(.55,.55,.3,14);o.rotateZ(Math.PI/2);let s=new Qi(1.2,14,8,0,Math.PI*2,0,Math.PI/2);s.scale(.95,.65,1.45);let c=new Wi(.14,.14,1.8);this.geos.push(r,i,a,o,s,c),this.mats.push(e,t,n);let l=(e,t,n,r,i)=>{let a=new J(e,t);return a.position.set(n,r,i),a.castShadow=!0,this.root.add(a),a};l(r,e,0,.8,0),l(i,e,1.1,1.15,0),l(i,e,-1.1,1.15,0),l(a,e,0,1.15,-1.8),l(a,e,0,1.15,1.8),l(o,t,1.2,.55,-.6),l(o,t,-1.2,.55,-.6),l(s,n,0,1.18,0),l(c,t,0,.7,2.6),this.root.visible=!1}reset(e,t,n,r){this.yaw=r,this.root.position.set(e,t,n),this.root.rotation.y=r,this.root.visible=!0}follow(e,t,n){let r=e.position.x-Math.sin(e.yaw)*2.2,i=e.position.z-Math.cos(e.yaw)*2.2,a=r-this.root.position.x,o=i-this.root.position.z;Math.hypot(a,o)>.01&&(this.yaw=Bl(this.yaw,Yl(a,o),6,n));let s=r-Math.sin(this.yaw)*2.6,c=i-Math.cos(this.yaw)*2.6;this.root.position.set(s,t.getSurfaceHeight(s,c,e.position.y+1),c),this.root.rotation.y=this.yaw}dispose(){for(let e of this.geos)e.dispose();for(let e of this.mats)e.dispose()}},S_=new W(1,0,0),C_=new dt,w_=new W,T_=new W,E_=new Gt(0,0,0,`YXZ`),D_=new W(0,.82,-.9),O_=new W(0,.62,-2),k_=.4;function A_(e){let t=e.rig.root;if(t.userData.tochanTuned)return;t.userData.tochanTuned=!0;let n=new ua({color:`#3a3d42`,metalness:.6,roughness:.5}),r=new Wi(.34,.5,.18);for(let e=-2;e<=2;e++){let i=new J(r,n);i.position.set(e*.38,.72,2.12),i.castShadow=!0,t.add(i)}let i=new J(new Wi(1.9,.12,.12),n);i.position.set(0,.42,2.2),t.add(i)}var j_=`pind-diyan-raahan.save.v1`;function M_(){try{let e=localStorage.getItem(j_);if(e){let t=JSON.parse(e);return{kamaai:t.kamaai??0,sheaves:Array.isArray(t.sheaves)?t.sheaves:[],best:t.best??{},done:t.done??{}}}}catch{}return{kamaai:0,sheaves:[],best:{},done:{}}}var N_=[18,48,80],P_=100,F_=.7,I_=5,L_=6.5,R_=9,z_={throttle:0,steer:0,handbrake:!1,horn:!1,boost:!1},B_=class{specs=i_;states;sheafTotal=o_.length;host;group=new G;factory=new y_;listeners=new Set;save;startSpots=new Map;startMarkers=new Map;objectiveMarker;ghostMarker;dangerMarkers=[];sheafMeshes=new Map;sheafPos=new Map;sheafResources=[];trolley=new x_;glowTexture;stubble=new Lg;mandiTrolley=new x_;hopper=0;unloadT=0;freeHopper=0;freeReapTime=0;bout=new Pg;chain=new Ig;rivalTag;tochanLocked=!1;tochanAway=0;tochanFlash=``;tochanFlashT=0;tochanPrevPhase=``;smokeAcc=0;smokeSeed=0;active=null;objIndex=0;elapsed=0;clock=null;missionVehicleId=null;vehicleRespawns=0;startCooldown=3;dwell=0;dwellId=null;time=0;lastHint=null;heat=0;alertLevel=0;prevSpeed=0;bumpCooldown=0;sawAlertPenalty=0;truckRuns=[];blocked=0;leaked=0;protectClock=0;constructor(e){this.host=e,this.save=M_(),this.group.name=`missions`,e.scene.add(this.group),this.glowTexture=d_(),this.sheafResources.push(this.glowTexture),this.states=i_.map(e=>({missionId:e.id,status:this.save.done[e.id]?`completed`:`available`,objectiveIndex:0,elapsed:0,bestTime:this.save.best[e.id]??null}));for(let t of i_){let n=e.freeSpot(t.start.x,t.start.z),r=t.objectives.find(e=>e.kind===`reach`)??{x:n.x+10,z:n.z+10},i=Yl(r.x-n.x,r.z-n.z);t.protect&&(i=Yl(-1,0)),this.startSpots.set(t.id,{x:n.x,z:n.z,yaw:i});let a=this.factory.create(t.number%2?s_:c_,t.startRadius,120,{label:{text:`${t.number} · ${t.gurmukhi}\n${t.english}`,w:20}});a.root.position.set(n.x,e.world.getSurfaceHeight(n.x,n.z),n.z),this.group.add(a.root),this.startMarkers.set(t.id,a)}this.objectiveMarker=this.factory.create(l_,8,160),this.objectiveMarker.root.visible=!1,this.group.add(this.objectiveMarker.root),this.ghostMarker=this.factory.create(c_,6,60,{alpha:.45}),this.ghostMarker.root.visible=!1,this.group.add(this.ghostMarker.root);for(let e=0;e<a_.length;e++){let e=this.factory.create(s_,9,110);e.root.visible=!1,this.group.add(e.root),this.dangerMarkers.push(e)}this.buildSheaves(),this.group.add(this.trolley.root),this.group.add(this.mandiTrolley.root),this.group.add(this.stubble.root),this.group.add(this.chain.root);let t=v_(`ਸ਼ੇਰਾ 595
Rival Tractor`),n=new Sr({map:t,transparent:!0,depthWrite:!1,fog:!1});this.rivalTag=new Ir(n),this.rivalTag.scale.set(2.2,p_/f_*2.2,1),this.rivalTag.visible=!1,this.group.add(this.rivalTag),this.sheafResources.push(t,n)}get coins(){return this.save.kamaai}get sheavesCollected(){return this.save.sheaves.length}get alert(){return this.alertLevel}get activeId(){return this.active?.id??null}get hasActive(){return this.active!==null}controlsVehicle(e){return this.tochanLocked&&e===e_}get cameraYaw(){return this.tochanLocked?0:null}get tochanRunning(){return this.tochanLocked&&this.bout.phase!==`done`}get tochanStrain(){return this.tochanLocked?this.bout.tension:0}get reapPercent(){return Math.round((this.active?.harvest?this.hopper:this.freeHopper)*100)}get stubbleCount(){return this.stubble.total}on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}getSpec(e){return i_.find(t=>t.id===e)}getStartSpot(e){return this.startSpots.get(e)}start(e,t=!1){let n=this.getSpec(e);if(!n)return!1;this.active&&this.endMission(`abort`,!0);let r=this.startSpots.get(n.id);t&&this.host.teleportPlayer(r.x-Math.sin(r.yaw)*4,r.z-Math.cos(r.yaw)*4,r.yaw),this.active=n,this.objIndex=0,this.elapsed=0,this.clock=null,this.dwell=0,this.lastHint=null,this.vehicleRespawns=0,this.missionVehicleId=null,this.blocked=0,this.leaked=0,this.protectClock=0,this.sawAlertPenalty=0;let i=this.state(n.id);if(i.status=`active`,i.objectiveIndex=0,i.elapsed=0,n.vehicle){let e=this.host.freeSpot(r.x+Math.cos(r.yaw)*6,r.z-Math.sin(r.yaw)*6);this.missionVehicleId=`mission-${n.id}`,this.host.spawnVehicle(this.missionVehicleId,n.vehicle.kind,e.x,e.z,r.yaw,{paint:n.vehicle.paint})}if(n.trailer&&this.missionVehicleId){let e=this.host.getBodies().find(e=>e.id===this.missionVehicleId);e&&this.trolley.reset(e.position.x-Math.sin(r.yaw)*4.6,e.position.y,e.position.z-Math.cos(r.yaw)*4.6,r.yaw)}n.protect&&this.initProtect(),n.tochan&&this.initTochan(),n.harvest&&this.initHarvest();for(let e of this.startMarkers.values())e.root.visible=!1;return this.emit({type:`mission-start`,gurmukhi:`${n.gurmukhi} ਸ਼ੁਰੂ`,english:`${n.english} — started`}),this.beginObjective(),!0}abort(){this.active&&this.endMission(`abort`,!0)}getHud(){let e=this.active;if(!e)return null;let t=``,n=``,r=``,i,a;if(e.tochan){let e=this.bout,a=e.def;i={round:e.round+1,rounds:Ag.length,roundGurmukhi:a.gurmukhi,roundEnglish:a.english,margin:e.margin,target:12,needle:e.needle,zoneLo:a.zoneLo,zoneHi:a.zoneHi,inZone:e.inZone&&e.phase===`pull`,surge:e.surge,tension:e.tension,phase:e.phase,countdown:e.countdown,flash:this.tochanFlashT>0?this.tochanFlash:``},r=`${e.round+1} / ${Ag.length}`,e.phase===`intro`?(t=e.countdown>0?`ਤਿਆਰ ਹੋ ਜਾਓ — ${e.countdown}`:`ਜ਼ੋਰ ਲਾਓ!`,n=`${a.english} — get ready`):e.phase===`between`?(t=`ਪਹਿਲਾ ਗੇੜ ਤੁਹਾਡਾ! ਸਾਹ ਲੈ ਲਓ…`,n=`Round 1 won! Catch your breath…`):(t=`ਸ਼ੇਰਾ 595 ਨੂੰ ਲੀਕ ਤੋਂ 12 ਮੀਟਰ ਪਾਰ ਘੜੀਸੋ`,n=`Drag Shera 595 12 m over your line — ${a.english}`)}else if(e.protect)t=`ਟਿੱਪਰ ਰੋਕੋ — ਮੋੜੇ ${this.blocked} / ${a_.length}, ਲੰਘੇ ${this.leaked}`,n=`Block the tippers — turned back ${this.blocked} / ${a_.length}, leaked ${this.leaked}`,r=`${this.blocked+this.leaked} / ${a_.length}`;else if(e.harvest){let i=e.objectives[this.objIndex],o=Math.round(this.hopper*100);t=i?.kind===`harvest`?`ਕਣਕ ਵੱਢੋ — ਟੈਂਕੀ ${o}%`:i?.gurmukhi??``,n=i?.kind===`harvest`?`Reap the golden wheat — hopper ${o}%`:i?.english??``,r=`${o}%`,this.objIndex>=1&&(a={percent:o})}else{let i=e.objectives[this.objIndex];i&&(t=i.gurmukhi,n=i.english);let a=e.objectives.filter(e=>e.kind===`reach`).length,o=e.objectives.slice(0,this.objIndex).filter(e=>e.kind===`reach`).length;r=`${Math.min(o+ +(i?.kind===`reach`),a)} / ${a}`}return{missionId:e.id,titleGurmukhi:e.gurmukhi,titleEnglish:e.english,objectiveGurmukhi:t,objectiveEnglish:n,progress:r,clock:this.clock,elapsed:this.elapsed,hintGurmukhi:this.lastHint?.gu??null,hintEnglish:this.lastHint?.en??null,tochan:i,harvest:a}}getMarkers(){let e=[];if(!this.active)for(let t of i_){let n=this.startSpots.get(t.id);e.push({x:n.x,z:n.z,kind:`start`,label:t.english,n:t.number})}else if(this.active.tochan)e.push({x:ju.x,z:ju.z,kind:`objective`,label:`ਟੋਚਨ ਅਖਾੜਾ · Tochan Akhara`});else if(this.active.protect)for(let t=0;t<this.truckRuns.length;t++){let n=this.truckRuns[t];if(n.phase===`rolling`||n.phase===`waiting`){let n=a_[t].cross;e.push({x:n.x,z:n.z,kind:`objective`,label:`ਸੂਆ · Channel`})}n.vehicle&&(n.phase===`rolling`||n.phase===`leaked`)&&e.push({x:n.vehicle.position.x,z:n.vehicle.position.z,kind:`truck`,label:`ਟਿੱਪਰ`})}else{let t=this.currentTarget();t&&e.push({x:t.x,z:t.z,kind:`objective`});let n=this.active.objectives[this.objIndex+1];n&&n.kind===`reach`&&e.push({x:n.x,z:n.z,kind:`ghost`})}for(let t of o_)this.save.sheaves.includes(t.id)||e.push({x:t.x,z:t.z,kind:`sheaf`,label:t.english});return e}onLifeEvent(e){switch(e.type){case`villager-knockdown`:this.addHeat(34+10*e.severity,`ਪਿੰਡ ਵਾਲਿਆਂ ਨੂੰ ਗੁੱਸਾ ਆ ਗਿਆ!`,`Villagers are upset!`);break;case`villager-bump`:this.addHeat(14+10*e.severity,`ਹੌਲੀ ਚੱਲ ਓਏ! ਬੰਦਿਆਂ ਨੂੰ ਨਾ ਵੱਜ`,`Careful — watch the people!`);break;case`buffalo-bump`:this.addHeat(10+8*e.severity,`ਮੱਝ ਨੂੰ ਨਾ ਛੇੜ!`,`Mind the buffalo!`);break;case`ai-vehicle-bump`:this.addHeat(9+8*e.severity,`ਗੱਡੀ ਠੋਕ ਦਿੱਤੀ!`,`You bumped a vehicle!`)}}resetProgress(){this.save.kamaai=0,this.save.sheaves=[],this.save.best={},this.save.done={};for(let e of this.states)e.bestTime=null,(e.status===`completed`||e.status===`failed`)&&(e.status=`available`);for(let e of o_)this.sheafMeshes.get(e.id).group.visible=!0;this.persist()}update(e){let t=Math.min(e.dt,.1);this.time+=t,this.updateVisuals(e),this.updateSheaves(e),this.updateAlert(e,t),this.active?this.updateActive(e,t):(this.updateBeacons(e,t),this.updateFreeReap(e,t)),this.startCooldown=Math.max(0,this.startCooldown-t)}dispose(){this.endMission(`abort`,!0),this.host.scene.remove(this.group);for(let e of this.factory.disposables)e.dispose();for(let e of this.sheafResources)e.dispose();this.trolley.dispose(),this.mandiTrolley.dispose(),this.stubble.dispose(),this.chain.dispose()}emit(e){for(let t of this.listeners)t(e)}state(e){return this.states.find(t=>t.missionId===e)}persist(){try{localStorage.setItem(j_,JSON.stringify(this.save))}catch{}}addCoins(e){this.save.kamaai+=e,this.persist()}currentTarget(){if(!this.active||this.active.protect)return null;let e=this.active.objectives[this.objIndex];if(!e)return null;if(e.kind===`board`){let t=this.host.getBodies().find(e=>e.id===this.missionVehicleId);if(t)return{...e,x:t.position.x,z:t.position.z}}return e}buildSheaves(){let e=this.host.world,t=new Ki(.35,.35,1,10,1,!0);this.sheafResources.push(t);for(let n of o_){let{group:r,geos:i,mats:a}=b_();this.sheafResources.push(...i,...a);let o=e.getSurfaceHeight(n.x,n.z)+1.15;this.sheafPos.set(n.id,{x:n.x,y:o,z:n.z});let s=new G;s.position.set(n.x,o,n.z),s.add(r);let c=u_(l_,.33);this.sheafResources.push(c);let l=new J(t,c);l.scale.set(1,22,1),l.position.y=11,l.frustumCulled=!1,s.add(l);let u=new Sr({map:this.glowTexture,transparent:!0,depthWrite:!1,blending:2,fog:!1});this.sheafResources.push(u);let d=new Ir(u);d.scale.setScalar(3.4),d.position.y=.6,s.add(d),s.visible=!this.save.sheaves.includes(n.id),this.group.add(s),this.sheafMeshes.set(n.id,{group:s,baseY:o,beam:l,halo:d})}}updateSheaves(e){for(let t of o_){let n=this.sheafMeshes.get(t.id);if(!n.group.visible)continue;n.group.children[0].rotation.y=this.time*1.6+t.x,n.group.position.y=n.baseY+Math.sin(this.time*2+t.z)*.12,n.beam.material.uniforms.uTime.value=this.time;let r=this.sheafPos.get(t.id),i=e.pos.x-r.x,a=e.pos.z-r.z;i*i+a*a<2.7*2.7&&Math.abs(e.pos.y+1-r.y)<3.2&&this.collectSheaf(t)}}collectSheaf(e){if(this.save.sheaves.includes(e.id))return;this.save.sheaves.push(e.id),this.sheafMeshes.get(e.id).group.visible=!1,this.save.kamaai+=50,this.persist();let t=this.save.sheaves.length;this.emit({type:`sheaf`,gurmukhi:t===o_.length?`ਸਾਰੀਆਂ ਸੁਨਹਿਰੀ ਭਰੀਆਂ ਮਿਲ ਗਈਆਂ! ਬੱਲੇ ਬੱਲੇ!`:`ਸੁਨਹਿਰੀ ਭਰੀ ਮਿਲੀ — ${e.gurmukhi}`,english:t===o_.length?`All golden sheaves found!`:`Golden sheaf found — ${e.english} (${t} / ${o_.length})`,amount:50})}updateVisuals(e){let t=this.time,n=e.pos.x,r=e.pos.z,i=e=>{if(!e.root.visible)return;e.beamMat.uniforms.uTime.value=t,e.rings.rotation.y=t*1.4,e.ground.scale.setScalar(e.radius*(1+Math.sin(t*2.2)*.03));let i=Math.hypot(e.root.position.x-n,e.root.position.z-r);e.rings.scale.setScalar(X(i/70,1,4)),e.label&&e.label.scale.setScalar(1)};for(let e of this.startMarkers.values())i(e);i(this.objectiveMarker),i(this.ghostMarker);for(let e of this.dangerMarkers)i(e)}placeMarker(e,t,n){e.root.position.set(t,this.host.world.getSurfaceHeight(t,n),n),e.root.visible=!0}updateBeacons(e,t){let n=this.startCooldown<=0,r=null;for(let t of i_){let i=this.startMarkers.get(t.id);i.root.visible=!0,i.beam.visible=n;let a=this.startSpots.get(t.id);n&&Math.hypot(e.pos.x-a.x,e.pos.z-a.z)<t.startRadius&&Math.abs(e.pos.y-i.root.position.y)<6&&(r=t)}r&&r.id===this.dwellId?this.dwell+=t:(this.dwellId=r?.id??null,this.dwell=0),r&&this.dwell>.7&&(this.dwell=0,this.start(r.id))}beginObjective(){let e=this.active;if(!e)return;if(this.objectiveMarker.root.visible=!1,this.ghostMarker.root.visible=!1,e.protect){for(let e of this.dangerMarkers)e.root.visible=!1;return}let t=e.objectives[this.objIndex];if(!t)return;t.legTime!==void 0&&(this.clock=t.legTime),this.state(e.id).objectiveIndex=this.objIndex,this.emit({type:`objective`,gurmukhi:t.gurmukhi,english:t.english}),this.objectiveMarker.radius=t.radius;let n=this.currentTarget();this.placeMarker(this.objectiveMarker,n.x,n.z);let r=e.objectives[this.objIndex+1];r&&r.kind===`reach`&&this.placeMarker(this.ghostMarker,r.x,r.z)}updateActive(e,t){let n=this.active;this.elapsed+=t;let r=this.state(n.id);r.elapsed=this.elapsed;let i=this.missionVehicleId?this.host.getBodies().find(e=>e.id===this.missionVehicleId):void 0;if(n.trailer&&this.trolley.root.visible){let n=e.vehicle&&e.vehicle.kind===`tractor`?e.vehicle:i;if(n&&this.trolley.follow(n,this.host.world,t),e.vehicle&&e.vehicle.kind===`tractor`){if(this.objIndex===1&&this.vehicleRespawns===0)this.vehicleRespawns=e.vehicle.respawnCount;else if(this.vehicleRespawns>0&&e.vehicle.respawnCount>this.vehicleRespawns){this.endMission(`fail`,!1,`ਟਰਾਲੀ ਨਹਿਰ ਵਿੱਚ ਡਿੱਗ ਗਈ!`,`The trolley fell into the Nehar!`);return}}}if(n.protect){this.updateProtect(e,t);return}if(n.tochan){this.updateTochan(e,t);return}if(this.clock!==null&&(this.clock-=t,this.clock<=0)){this.endMission(`fail`,!1,`ਸਮਾਂ ਮੁੱਕ ਗਿਆ!`,`Time's up!`);return}let a=n.objectives[this.objIndex];if(!a)return;let o=!n.allowed||e.vehicle!==null&&n.allowed.includes(e.vehicle.kind);if(this.lastHint=null,a.kind===`board`){let t=this.currentTarget();this.objectiveMarker.root.position.set(t.x,this.host.world.getSurfaceHeight(t.x,t.z),t.z),o&&e.vehicle&&this.completeObjective(n,a);return}if(!o){let e=n.allowed.map(e=>V_[e]);this.lastHint={gu:`${e.map(e=>e.gu).join(` / `)} ਚਲਾਓ [F]`,en:`Drive: ${e.map(e=>e.en).join(` / `)} [F]`};return}if(a.kind===`harvest`){this.updateHarvestObjective(n,a,e,t);return}let s=e.pos.x-a.x,c=e.pos.z-a.z;s*s+c*c<a.radius*a.radius?a.unload?this.updateUnload(n,a,e,t):this.completeObjective(n,a):this.unloadT=0}completeObjective(e,t){t.kind===`board`&&e.clockStart!==void 0&&(this.clock=e.clockStart),t.addTime&&this.clock!==null&&(this.clock+=t.addTime),t.kind===`reach`&&this.emit({type:`checkpoint`,gurmukhi:`ਬੱਲੇ ਸ਼ੇਰਾ! ਨਿਸ਼ਾਨ ਪਾਰ`,english:`Checkpoint!`,amount:t.addTime}),this.objIndex++,this.objIndex>=e.objectives.length?this.endMission(`complete`,!1):this.beginObjective()}endMission(e,t,n=``,r=``){let i=this.active;if(!i)return;let a=this.state(i.id);this.objectiveMarker.root.visible=!1,this.ghostMarker.root.visible=!1;for(let e of this.dangerMarkers)e.root.visible=!1;this.clearTrucks(),this.trolley.root.visible=!1,i.tochan&&this.endTochan(),i.harvest&&this.endHarvest(),this.active=null,this.clock=null,this.lastHint=null,this.startCooldown=8,this.dwellId=null;for(let e of this.startMarkers.values())e.root.visible=!0;if(e===`complete`){let e=i.reward;i.protect&&(e=Math.round(i.reward*(this.blocked/a_.length)));let t=!i.fixedReward&&this.elapsed<=i.par;t&&(e=Math.round(e*1.25));let n=i.fixedReward?1:this.alertLevel>=3?.5:this.alertLevel===2?.8:1;e=Math.round(e*n),this.addCoins(e),a.status=`completed`,a.bestTime=a.bestTime===null?this.elapsed:Math.min(a.bestTime,this.elapsed),this.save.best[i.id]=a.bestTime,this.save.done[i.id]=(this.save.done[i.id]??0)+1,this.persist(),this.emit({type:`complete`,gurmukhi:`${i.gurmukhi} ਪੂਰੀ! ਬੱਲੇ ਬੱਲੇ — ₹${e}${t?` (ਸਮੇਂ ਦਾ ਇਨਾਮ)`:``}`,english:`${i.english} complete! ₹${e}${t?` incl. fast-time bonus`:``}`,amount:e})}else e===`fail`?(a.status=`failed`,this.emit({type:`fail`,gurmukhi:n||`ਉੱਦਮ ਅਧੂਰਾ ਰਿਹਾ`,english:r||`Mission failed`,amount:0})):(a.status=this.save.done[i.id]?`completed`:`available`,t||this.emit({type:`abort`,gurmukhi:`ਕੰਮ ਛੱਡ ਦਿੱਤਾ`,english:`Mission abandoned`}));a.objectiveIndex=0}initProtect(){this.clearTrucks(),this.truckRuns=a_.map((e,t)=>({index:t,phase:`waiting`,vehicle:null,stalled:0,phaseTime:0,release:a_[t].release})),this.blocked=0,this.leaked=0,this.protectClock=0,a_.forEach((e,t)=>{this.dangerMarkers[t].radius=9,this.placeMarker(this.dangerMarkers[t],e.cross.x,e.cross.z)})}clearTrucks(){for(let e of this.truckRuns)e.vehicle&&this.host.removeVehicle(e.vehicle.id),e.vehicle=null;this.truckRuns=[]}updateProtect(e,t){this.protectClock+=t;let n=this.host.getBodies();for(let r of this.truckRuns){let i=a_[r.index];if(r.phaseTime+=t,r.phase===`waiting`){if(this.protectClock>=r.release){let e=Yl(i.cross.x-i.from.x,i.cross.z-i.from.z);r.vehicle=this.host.spawnVehicle(`tipper-${r.index}`,`truck`,i.from.x,i.from.z,e,{paint:`#c98a1b`,externalControl:!0}),r.phase=`rolling`,r.phaseTime=0,this.emit({type:`truck`,gurmukhi:`ਟਿੱਪਰ ${r.index+1} ਆ ਰਿਹਾ — ਸੂਏ ਵੱਲ!`,english:`Tipper ${r.index+1} is rolling towards the channel!`})}continue}let a=r.vehicle;if(!a)continue;a.wake();let o=z_;o.handbrake=!1;let s,c,l=9;if(r.phase===`rolling`){s=i.cross.x,c=i.cross.z;let n=Math.sin(a.yaw),u=Math.cos(a.yaw),d=e.pos.x-a.position.x,f=e.pos.z-a.position.z,p=d*n+f*u,m=Math.abs(d*-u+f*n);p>0&&p<15&&m<5.2?(l=0,o.handbrake=!0,Math.abs(a.forwardSpeed)<1.2&&(r.stalled+=t)):r.stalled=Math.max(0,r.stalled-t*2),r.stalled>1.7?(r.phase=`repelled`,r.phaseTime=0,this.blocked++,this.dangerMarkers[r.index].root.visible=!1,this.emit({type:`truck`,gurmukhi:`ਟਿੱਪਰ ${r.index+1} ਮੁੜ ਗਿਆ — ਬੱਲੇ ਸ਼ੇਰਾ!`,english:`Tipper ${r.index+1} turned back!`})):Math.hypot(a.position.x-i.cross.x,a.position.z-i.cross.z)<7&&(r.phase=`leaked`,r.phaseTime=0,this.leaked++,this.dangerMarkers[r.index].root.visible=!1,this.emit({type:`truck`,gurmukhi:`ਟਿੱਪਰ ${r.index+1} ਸੂਆ ਲਤਾੜ ਗਿਆ!`,english:`Tipper ${r.index+1} crossed the channel!`}))}else r.phase===`repelled`?(s=i.from.x,c=i.from.z):(s=i.exit.x,c=i.exit.z);let u=zl(Yl(s-a.position.x,c-a.position.z)-a.yaw);o.steer=X(-u*1.8,-1,1);let d=X(1-Math.abs(u)*.45,.35,1);o.throttle=o.handbrake?0:X((l*d-a.forwardSpeed)*.6,-.3,1),Qm(a,o,t,this.host.world,n),(r.phase===`repelled`||r.phase===`leaked`)&&(r.phaseTime>16||Math.hypot(a.position.x-e.pos.x,a.position.z-e.pos.z)>90&&r.phaseTime>6)&&(this.host.removeVehicle(a.id),r.vehicle=null,r.phase=`done`)}this.leaked>=2?this.endMission(`fail`,!1,`ਦੋ ਟਿੱਪਰ ਸੂਆ ਲਤਾੜ ਗਏ — ਖੇਤ ਬਚਾ ਨਾ ਹੋਏ`,`Two tippers got through — the fields are damaged`):this.truckRuns.every(e=>e.phase===`done`)&&(this.blocked>=2?this.endMission(`complete`,!1):this.endMission(`fail`,!1,`ਟਿੱਪਰ ਕਾਫ਼ੀ ਨਹੀਂ ਰੁਕੇ`,`Not enough tippers were stopped`))}findBody(e){return this.host.getBodies().find(t=>t.id===e)}initTochan(){let e=ju,t=this.host.spawnVehicle(e_,`tractor`,e.x,e.z-n_,Math.PI,{paint:`#e07a00`}),n=this.host.spawnVehicle(t_,`tractor`,e.x,e.z+n_,0,{paint:`#1f4e9d`,externalControl:!0});A_(t),A_(n),this.host.boardVehicle(e_),this.bout.restart(),this.tochanLocked=!0,this.tochanAway=0,this.tochanFlash=``,this.tochanFlashT=0,this.tochanPrevPhase=`intro`,this.smokeAcc=0,this.chain.root.visible=!0,this.rivalTag.visible=!0,this.emit({type:`tochan-start`,gurmukhi:`ਸੰਗਲ ਕੱਸਿਆ ਗਿਆ! ਗੇੜ 1 — ਸ਼ੇਰਾ 595 ਸਾਹਮਣੇ ਆ`,english:`Chain hooked! Round 1 — Shera 595 is across the line`})}endTochan(){this.tochanLocked=!1,this.chain.root.visible=!1,this.rivalTag.visible=!1;let e=this.findBody(e_);e&&(e.forwardSpeed=0,e.velocity.set(0,0,0),e.wake()),this.findBody(t_)&&this.host.removeVehicle(t_)}poseTochan(e,t,n,r,i,a,o){let s=this.host.world;e.position.set(t,s.getSurfaceHeight(t,n,s.getTerrainHeight(t,n)+2),n),e.yaw=r,e.pitch=0,e.roll=0,e.forwardSpeed=i,e.speedKmh=Math.abs(i)*3.6,e.velocity.set(Math.sin(r)*i,0,Math.cos(r)*i),e.throttle=1,e.steerAngle=0,e.surface=`dirt_track`,e.effects.dust=0,e.effects.engineLoad=a,e.wake(),E_.set(0,r,0,`YXZ`),e.quaternion.setFromEuler(E_);for(let t of e.wheels)t.compression=0,t.steerAngle=0,t.grounded=!0,t.spin+=i/t.spec.radius*o+(t.spec.drive?a*12*o:0)}applyWheelie(e,t){let n=e.rig.root;n.position.copy(e.position),n.quaternion.copy(e.quaternion),t>.001&&(C_.setFromAxisAngle(S_,-t*k_),w_.copy(D_),T_.copy(D_).applyQuaternion(C_),w_.sub(T_).applyQuaternion(n.quaternion),n.position.add(w_),n.quaternion.multiply(C_)),n.updateMatrixWorld(!0)}emitTochanFx(e,t,n){let r=uh(this.host.scene);for(this.smokeAcc+=(5+60*t*t)*n;this.smokeAcc>=1;){--this.smokeAcc,this.smokeSeed++;let n=Math.sin(this.smokeSeed*12.9898)*.5,i=Math.sin(this.smokeSeed*78.233)*.5;for(let a of e){let e=a.rig.exhaust;e&&(w_.copy(e),a.rig.root.localToWorld(w_),r.emit(w_.x,w_.y,w_.z,n*.9,2.2+2.2*t,i*.9,2,.24,1.9,`#222222`,.78,.7,.9),t>.5&&(w_.copy(O_),a.rig.root.localToWorld(w_),r.emit(w_.x+n,w_.y-.25,w_.z+i,i*2.4,.9+t,-n*2.4,1.1,.3,1.3,`#d6b87c`,.5,1.5,-1.5)))}}}updateTochan(e,t){let n=this.findBody(e_),r=this.findBody(t_);if(!n||!r){this.endMission(`fail`,!1,`ਟਰੈਕਟਰ ਗੁਆਚ ਗਿਆ`,`A tractor went missing`);return}let i=this.bout;this.tochanFlashT=Math.max(0,this.tochanFlashT-t),this.lastHint=null;let a=!!e.vehicle&&e.vehicle.id===e_;if(a)this.tochanAway=0;else if(this.tochanAway+=t,this.lastHint={gu:`ਆਪਣੇ ਟਰੈਕਟਰ ਤੇ ਬੈਠੋ [F]`,en:`Hop back on your tractor [F]`},this.tochanAway>15){this.endMission(`fail`,!1,`ਅਖਾੜਾ ਛੱਡ ਦਿੱਤਾ`,`You left the arena`);return}let o=a?i.step(t,(e.input?.moveY??0)>.3,!!e.input?.tap):[];i.phase!==this.tochanPrevPhase&&(i.phase===`intro`&&this.tochanPrevPhase===`between`&&this.emit({type:`tochan-start`,gurmukhi:`${i.def.gurmukhi} — ਪਿੰਡ ਦਾ ਸੂਰਮਾ ਸ਼ੇਰਾ 595!`,english:`${i.def.english} — Shera 595 is fired up!`}),this.tochanPrevPhase=i.phase);for(let e of o)e===`zor`?(this.tochanFlash=`🔥 ZOR!`,this.tochanFlashT=.9,this.emit({type:`zor`,gurmukhi:`🔥 ZOR! ਜ਼ੋਰ ਦਾ ਝਟਕਾ`,english:`Surge hit!`})):e===`miss`?(this.tochanFlash=`ਖੁੰਝ ਗਿਆ · Missed`,this.tochanFlashT=.7):e===`go`&&this.emit({type:`info`,gurmukhi:`ਜ਼ੋਰ ਲਾਓ! W ਦੱਬੀ ਰੱਖੋ`,english:`Pull! Hold W, tap Space in the gold zone`});if(o.includes(`won-all`)){this.endMission(`complete`,!1);return}if(o.includes(`round-won`)&&this.emit({type:`tochan-round`,gurmukhi:`${i.def.gurmukhi} ਜਿੱਤ ਲਿਆ! ਬੱਲੇ ਬੱਲੇ!`,english:`${i.def.english} won! The crowd roars`}),o.includes(`round-lost`)){this.endMission(`fail`,!1,`ਸ਼ੇਰਾ 595 ਨੇ ਖਿੱਚ ਲਿਆ — ਫਿਰ ਜ਼ੋਰ ਲਾਓ!`,`Shera 595 dragged you over the line — try again!`);return}if(o.includes(`time-up`)){this.endMission(`fail`,!1,`ਗੇੜ ਦਾ ਸਮਾਂ ਮੁੱਕ ਗਿਆ`,`The round ran out of time`);return}this.clock=i.phase===`pull`?Math.max(0,i.def.timeLimit-i.roundTime):null,a&&!this.lastHint&&(this.lastHint=i.phase===`pull`&&i.inZone?{gu:`🔥 ZOR! ਹੁਣੇ ਸਪੇਸ ਦਬਾਓ!`,en:`NOW — tap Space!`}:{gu:`W ਦੱਬੀ ਰੱਖੋ · ਪੀਲੇ ਵਿੱਚ ਸਪੇਸ`,en:`Hold W · tap Space in the gold zone`});let s=ju,c=X(i.margin/12,-1,1)*r_,l=Math.sin(this.time*41)*.035*i.tension,u=i.velocity*(r_/12);this.poseTochan(n,s.x+l,s.z-n_-c,Math.PI,u,i.tension,t),this.poseTochan(r,s.x-l,s.z+n_-c,0,-u,i.tension,t),this.applyWheelie(n,i.wheelie),this.applyWheelie(r,i.wheelie),w_.copy(O_),n.rig.root.localToWorld(w_),T_.copy(O_),r.rig.root.localToWorld(T_),this.chain.update(w_,T_,i.tension,this.time),this.rivalTag.position.set(r.position.x,r.position.y+3,r.position.z),this.emitTochanFx([n,r],i.tension,t)}initHarvest(){this.hopper=0,this.unloadT=0;let e=this.host.spawnVehicle(`mission-mandi-tractor`,`tractor`,Jg.x,Jg.z,Math.PI,{paint:`#2f7d3a`,externalControl:!0});this.mandiTrolley.reset(e.position.x,e.position.y,e.position.z+4.6,Math.PI)}endHarvest(){this.mandiTrolley.root.visible=!1,this.findBody(`mission-mandi-tractor`)&&this.host.removeVehicle(`mission-mandi-tractor`)}reapStep(e,t){let n=e.vehicle;if(!n||n.kind!==`combine`||n.airborne||e.speed<Zg||e.surface!==`wheat`&&e.surface!==`mustard`)return 0;let r=e.speed*t;return this.stubble.advance(r,n.position.x,n.position.y,n.position.z,n.yaw,e.surface===`mustard`),r}updateHarvestObjective(e,t,n,r){let i=this.reapStep(n,r),a=n.surface===`wheat`?i:0;this.hopper=Math.min(1,this.hopper+a*Xg),n.surface===`wheat`?n.speed<Zg&&(this.lastHint={gu:`ਥੋੜ੍ਹਾ ਤੇਜ਼ ਚੱਲੋ — ਵਾਢੀ ਲਈ ਚਾਲ ਚਾਹੀਦੀ`,en:`A little faster — reaping needs some speed`}):this.lastHint={gu:`ਸੁਨਹਿਰੀ ਕਣਕ ਵਿੱਚ ਵੜੋ`,en:`Drive into the golden wheat`},this.hopper>=1&&(this.emit({type:`harvest`,gurmukhi:`ਟੈਂਕੀ ਭਰ ਗਈ! ਹੁਣ ਦਾਣਾ ਮੰਡੀ ਚੱਲੋ`,english:`Hopper full! Back to the Dana Mandi`}),this.completeObjective(e,t))}updateUnload(e,t,n,r){if(n.speed>3){this.unloadT=0,this.lastHint={gu:`ਹੌਲੀ ਕਰੋ — ਟਰਾਲੀ ਕੋਲ ਰੁਕੋ`,en:`Slow down — stop beside the trolley`};return}this.unloadT+=r,this.hopper=Math.max(0,1-this.unloadT/2),this.lastHint={gu:`ਦਾਣੇ ਲਾਹ ਰਹੇ ਆਂ…`,en:`Unloading the grain…`};let i=n.vehicle;if(i){let e=uh(this.host.scene),t=this.mandiTrolley.root.position.x-i.position.x,n=this.mandiTrolley.root.position.z-i.position.z,r=Math.hypot(t,n)||1;this.smokeSeed++;let a=Math.sin(this.smokeSeed*12.9898)*.5;e.emit(i.position.x,i.position.y+3.1,i.position.z,t/r*3+a,1.4,n/r*3-a,.9,.14,.2,`#e8b830`,.95,.6,-6)}this.unloadT>=2&&(this.hopper=0,this.unloadT=0,this.completeObjective(e,t))}updateFreeReap(e,t){let n=this.reapStep(e,t);if(!(n<=0)&&(this.freeHopper+=n*Xg,this.freeReapTime+=t,this.freeHopper>=1&&(this.freeHopper=0,this.emit({type:`harvest`,gurmukhi:`ਟੈਂਕੀ ਭਰ ਗਈ — ਦਾਣੇ ਲਾਹ ਦਿੱਤੇ`,english:`Hopper full — grain unloaded`})),this.freeReapTime>=$g)){this.freeReapTime-=$g,this.addCoins(Qg);let e=Math.round(this.freeHopper*100);this.emit({type:`harvest`,gurmukhi:`ਵਾਢੀ ਦੀ ਕਮਾਈ ₹${Qg} · ਟੈਂਕੀ ${e}%`,english:`Harvest earnings ₹${Qg} · hopper ${e}%`,amount:Qg})}}addHeat(e,t,n){e<=0||(this.heat=Math.min(P_,this.heat+e),this.pendingAlertText={gu:t,en:n})}pendingAlertText=null;levelFor(e){return e>=N_[2]?3:e>=N_[1]?2:+(e>=N_[0])}updateAlert(e,t){if(this.bumpCooldown=Math.max(0,this.bumpCooldown-t),e.vehicle&&t>0){let n=Math.abs(e.vehicle.forwardSpeed);this.prevSpeed>5.5&&(this.prevSpeed-n)/t>38&&this.bumpCooldown<=0&&(this.bumpCooldown=1.2,this.addHeat(16+Math.min(14,this.prevSpeed),`ਕੰਧ-ਕੌਲੇ ਨਾ ਠੋਕ ਵੀਰੇ!`,`Easy — don't ram the walls!`)),this.prevSpeed=n}else this.prevSpeed=0;let n=F_;e.surface===`sugarcane`&&(n+=I_);let r=!1;for(let t of zu)Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<R_&&(r=!0);r&&e.speed<2.5&&(n+=L_),this.heat>0&&(this.heat=Math.max(0,this.heat-n*t));let i=this.levelFor(this.heat);if(i!==this.alertLevel){let e=i>this.alertLevel;this.alertLevel=i;let t=this.pendingAlertText;this.pendingAlertText=null,e?this.emit({type:`alert`,gurmukhi:t?.gu||(i===3?`ਸਾਰਾ ਪਿੰਡ ਲਾਠੀਆਂ ਲੈ ਕੇ ਆ ਗਿਆ!`:`ਪਿੰਡ ਵਾਲੇ ਘੂਰ ਰਹੇ ਨੇ`),english:`${t?.en??`Pind Alert`} — Pind Alert ${i} / 3`,amount:i}):this.emit({type:`alert`,gurmukhi:i===0?`ਪਿੰਡ ਸ਼ਾਂਤ ਹੋ ਗਿਆ`:`ਪਿੰਡ ਦਾ ਗੁੱਸਾ ਘਟ ਰਿਹਾ ਹੈ`,english:i===0?`The Pind has calmed down`:`Pind Alert eased to ${i} / 3`,amount:i})}else this.pendingAlertText=null}},V_={tractor:{gu:`ਟਰੈਕਟਰ`,en:`Tractor`},bike:{gu:`ਦੇਸੀ ਕਰੂਜ਼ਰ`,en:`Desi Cruiser`},jeep:{gu:`ਜੀਪ`,en:`4x4 Jeep`},truck:{gu:`ਟਰੱਕ`,en:`Truck`},sedan:{gu:`ਕਾਰ`,en:`Sedan`},combine:{gu:`ਕੰਬਾਈਨ`,en:`Harvest Combine`}},H_=[{id:`tumbi-dholak`,gurmukhi:`ਤੂੰਬੀ ਤੇ ਢੋਲਕੀ ਲੋਕ-ਧੁਨ`,english:`Tumbi & Dholak Folk`,frequency:`91.1`,genre:`Folk`,accent:`#e8a317`},{id:`mitti-sunset`,gurmukhi:`ਮਿੱਟੀ ਦੀ ਸ਼ਾਮ`,english:`Mitti Sunset Lo-Fi`,frequency:`94.7`,genre:`Lo-Fi`,accent:`#d9774a`},{id:`pind-bhangra`,gurmukhi:`ਪਿੰਡ ਭੰਗੜਾ ਗਰੂਵ`,english:`Pind Bhangra Groove`,frequency:`98.3`,genre:`Bhangra`,accent:`#c0392b`}],U_={gurmukhi:`ਕੁਦਰਤ ਦੀ ਆਵਾਜ਼`,english:`Pure Nature`,frequency:`—`,genre:`Nature`,accent:`#6fae52`},W_=typeof window<`u`?window.AudioContext??window.webkitAudioContext:void 0,G_=e=>e<0?0:e>1?1:e,K_=(e,t,n)=>e<t?t:e>n?n:e,q_=(e,t,n)=>e+(t-e)*n,J_=(e,t)=>e+Math.random()*(t-e),Y_=e=>440*2**((e-69)/12),X_=[0,2,4,5,7,9,10],Z_=(e,t)=>{let n=Math.floor(t/7),r=(t%7+7)%7;return Y_(e+n*12+X_[r])},Q_={bike:{idleRpm:880,maxRpm:5e3,gears:5,pulsesPerRev:.5,toneMult:4,pulse:`thump`,pulseGain:1,tones:[{type:`triangle`,mult:1,gain:.1},{type:`sawtooth`,mult:2,gain:.03}],lowpass:520,lowpassOpen:1900,noise:.015,level:.95},tractor:{idleRpm:760,maxRpm:2300,gears:3,pulsesPerRev:1,toneMult:7,pulse:`chug`,pulseGain:1,tones:[{type:`sawtooth`,mult:.5,gain:.1},{type:`square`,mult:1,gain:.025}],lowpass:360,lowpassOpen:950,noise:.03,level:1},jeep:{idleRpm:780,maxRpm:5400,gears:4,pulsesPerRev:2,toneMult:3,pulse:`rumble`,pulseGain:.7,tones:[{type:`sawtooth`,mult:1,gain:.07},{type:`triangle`,mult:.5,gain:.1}],lowpass:480,lowpassOpen:1500,noise:.025,level:.95},truck:{idleRpm:600,maxRpm:2600,gears:5,pulsesPerRev:3,toneMult:4,pulse:`growl`,pulseGain:.85,tones:[{type:`sawtooth`,mult:.5,gain:.12},{type:`square`,mult:.25,gain:.06}],lowpass:300,lowpassOpen:800,noise:.045,level:1.05},combine:{idleRpm:700,maxRpm:2200,gears:2,pulsesPerRev:1.5,toneMult:6,pulse:`chug`,pulseGain:.9,tones:[{type:`sawtooth`,mult:.5,gain:.11},{type:`square`,mult:1.5,gain:.02}],lowpass:330,lowpassOpen:880,noise:.06,level:1.05},sedan:{idleRpm:740,maxRpm:6200,gears:5,pulsesPerRev:2,toneMult:2,pulse:`purr`,pulseGain:.4,tones:[{type:`triangle`,mult:1,gain:.1},{type:`sine`,mult:2,gain:.05},{type:`sine`,mult:.5,gain:.07}],lowpass:900,lowpassOpen:3200,noise:.012,level:.8}},$_={thump:{dur:.17,f0:118,f1:46,pitchRate:38,decay:20,harm:[[1,1],[2,.3],[3,.1]],noise:.35,noiseDecay:160,drive:1.9},chug:{dur:.15,f0:92,f1:54,pitchRate:30,decay:24,harm:[[1,1],[2,.45],[3,.25],[5,.1]],noise:.5,noiseDecay:95,drive:2.3},rumble:{dur:.11,f0:108,f1:70,pitchRate:40,decay:32,harm:[[1,1],[2,.5],[3,.3]],noise:.2,noiseDecay:140,drive:1.6},growl:{dur:.14,f0:76,f1:40,pitchRate:26,decay:24,harm:[[1,1],[2,.6],[3,.4],[4,.2]],noise:.4,noiseDecay:80,drive:2.6},purr:{dur:.06,f0:170,f1:130,pitchRate:30,decay:55,harm:[[1,1],[2,.2]],noise:.05,noiseDecay:200,drive:1.2}};function ev(e,t){let n=Math.floor(e*t.dur),r=new Float32Array(n),i=0,a=1234567,o=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let a=0;a<n;a++){let n=a/e,s=t.f1+(t.f0-t.f1)*Math.exp(-n*t.pitchRate);i+=Math.PI*2*s/e;let c=0;for(let[e,n]of t.harm)c+=n*Math.sin(i*e);let l=Math.exp(-n*t.decay)*Math.min(1,n*700),u=(o()*2-1)*t.noise*Math.exp(-n*t.noiseDecay);r[a]=Math.tanh((c*l+u)*t.drive)*.9}return r}var tv={truck:{steps:[[311.1,392,466.2,622.3],[349.2,415.3,523.3,698.5],[392,466.2,587.3,784]],stepDur:.2,gain:.16,wave:`sawtooth`},tractor:{steps:[[261.6,329.6,392],[293.7,370,440],[329.6,415.3,493.9]],stepDur:.18,gain:.15,wave:`sawtooth`},jeep:{steps:[[440,554.4],[440,554.4,659.3]],stepDur:.14,gain:.12,wave:`square`},sedan:{steps:[[400,500]],stepDur:1,gain:.1,wave:`square`},bike:{steps:[[523.3,659.3],[587.3,740]],stepDur:.12,gain:.1,wave:`square`},combine:{steps:[[233.1,293.7,349.2],[261.6,329.6,392]],stepDur:.24,gain:.15,wave:`sawtooth`}},nv=class{ctx=null;master;engBus;ambBus;sfxBus;musicBus;noiseBuf;pinkBuf;pulses=new Map;muted=!1;masterVol=.8;musicVol=.8;radioIndex=-1;windGain;rustleGain;waterGain;tubewellGain;cricketGain;skidGain;fxRustleGain;fxSplashGain;rainHissGain;rainDrumGain;rainBreezeGain;combineWhirrGain;combineReelGain;combineReelLfo;combineThreshGain;chaffGain;chainGain;nextDrip=0;nextCrunch=0;nextClink=0;pendingThunder=[];nextBird=2;nextStep=0;engine=null;hornHeld=!1;hornNodes=null;radioBus=null;radioTimer=0;radioStep=0;radioNext=0;radioFade=null;unlockHandler=()=>{this.unlock()};constructor(){W_&&(window.addEventListener(`pointerdown`,this.unlockHandler,{once:!0}),window.addEventListener(`keydown`,this.unlockHandler,{once:!0}))}get ready(){return!!this.ctx&&this.ctx.state===`running`}get available(){return!!W_}get isMuted(){return this.muted}get stationIndex(){return this.radioIndex}unlock(){if(W_){window.removeEventListener(`pointerdown`,this.unlockHandler),window.removeEventListener(`keydown`,this.unlockHandler);try{this.ctx||this.build(),this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>void 0)}catch{this.ctx=null}}}setMuted(e){this.muted=e,this.applyMaster()}toggleMute(){return this.setMuted(!this.muted),this.muted}setMasterVolume(e){this.masterVol=G_(e),this.applyMaster()}setMusicVolume(e){this.musicVol=G_(e),this.ctx&&this.musicBus.gain.setTargetAtTime(this.musicVol*.9,this.ctx.currentTime,.05)}get masterVolume(){return this.masterVol}get musicVolume(){return this.musicVol}applyMaster(){this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:this.masterVol,this.ctx.currentTime,.04)}build(){let e=new W_;this.ctx=e;let t=e.sampleRate;this.master=e.createGain();let n=e.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=18,n.ratio.value=4,n.attack.value=.006,n.release.value=.22,this.master.connect(n).connect(e.destination);let r=t=>{let n=e.createGain();return n.gain.value=t,n.connect(this.master),n};this.engBus=r(.8),this.ambBus=r(.9),this.sfxBus=r(.9),this.musicBus=r(this.musicVol*.9),this.applyMaster(),this.noiseBuf=e.createBuffer(1,t*2,t);let i=this.noiseBuf.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1;this.pinkBuf=e.createBuffer(1,t*4,t);let a=this.pinkBuf.getChannelData(0),o=0,s=0,c=0;for(let e=0;e<a.length;e++){let t=Math.random()*2-1;o=.99765*o+t*.099046,s=.963*s+t*.2965164,c=.57*c+t*1.0526913,a[e]=(o+s+c+t*.1848)*.2}for(let n of Object.keys($_)){let r=$_[n],i=ev(t,r),a=e.createBuffer(1,i.length,t);a.copyToChannel(i,0),this.pulses.set(n,a)}this.buildAmbience(),this.nextBird=e.currentTime+2,this.radioIndex>=0&&this.startRadio(this.radioIndex)}loopNoise(e){let t=this.ctx.createBufferSource();return t.buffer=e,t.loop=!0,t.loopStart=0,t.start(0,Math.random()*(e.duration-.1)),t}lfo(e,t,n,r=`sine`){let i=this.ctx,a=i.createOscillator();a.type=r,a.frequency.value=e;let o=i.createGain();return o.gain.value=t,a.connect(o).connect(n),a.start(),a}buildAmbience(){let e=this.ctx,t=this.ambBus,n=this.loopNoise(this.pinkBuf),r=e.createBiquadFilter();r.type=`bandpass`,r.frequency.value=380,r.Q.value=.6;let i=e.createGain();i.gain.value=.7,this.lfo(.11,.3,i.gain),this.lfo(.07,90,r.frequency),this.windGain=e.createGain(),this.windGain.gain.value=0,n.connect(r).connect(i).connect(this.windGain).connect(t);let a=this.loopNoise(this.noiseBuf),o=e.createBiquadFilter();o.type=`bandpass`,o.frequency.value=3600,o.Q.value=.5;let s=e.createGain();s.gain.value=.6,this.lfo(.19,.4,s.gain),this.rustleGain=e.createGain(),this.rustleGain.gain.value=0,a.connect(o).connect(s).connect(this.rustleGain).connect(t);let c=this.loopNoise(this.pinkBuf),l=e.createBiquadFilter();l.type=`bandpass`,l.frequency.value=850,l.Q.value=.9,this.lfo(.8,260,l.frequency),this.lfo(2.1,120,l.frequency);let u=e.createBiquadFilter();u.type=`lowpass`,u.frequency.value=2400;let d=e.createGain();d.gain.value=.75,this.lfo(1.3,.25,d.gain),this.waterGain=e.createGain(),this.waterGain.gain.value=0,c.connect(l).connect(u).connect(d).connect(this.waterGain).connect(t);let f=this.loopNoise(this.noiseBuf),p=e.createBiquadFilter();p.type=`bandpass`,p.frequency.value=1500,p.Q.value=.8;let m=e.createGain();m.gain.value=.72,this.lfo(3.4,.28,m.gain),this.tubewellGain=e.createGain(),this.tubewellGain.gain.value=0,f.connect(p).connect(m).connect(this.tubewellGain).connect(t);let h=e.createOscillator();h.type=`triangle`,h.frequency.value=58;let g=e.createGain();g.gain.value=.5,this.lfo(6.8,.5,g.gain);let _=e.createGain();_.gain.value=.35,h.connect(g).connect(_).connect(this.tubewellGain),h.start(),this.cricketGain=e.createGain(),this.cricketGain.gain.value=0,this.cricketGain.connect(t),[[4200,11.5,.31],[4700,13.2,.37],[5200,9.4,.23]].forEach(([t,n,r])=>{let i=e.createOscillator();i.type=`sine`,i.frequency.value=t;let a=e.createGain();a.gain.value=.5,this.lfo(n,.5,a.gain,`square`);let o=e.createGain();o.gain.value=.5,this.lfo(r,.5,o.gain,`square`);let s=e.createGain();s.gain.value=.33,i.connect(a).connect(o).connect(s).connect(this.cricketGain),i.start()});let v=(t,n,r,i)=>{let a=this.loopNoise(t),o=e.createBiquadFilter();o.type=n,o.frequency.value=r,o.Q.value=i;let s=e.createGain();return s.gain.value=0,a.connect(o).connect(s).connect(this.sfxBus),s};this.skidGain=v(this.noiseBuf,`bandpass`,2600,7),this.fxRustleGain=v(this.noiseBuf,`bandpass`,3300,.7),this.fxSplashGain=v(this.pinkBuf,`lowpass`,1500,.7);let y=(n,r,i,a)=>{let o=this.loopNoise(n),s=e.createBiquadFilter();s.type=r,s.frequency.value=i,s.Q.value=a;let c=e.createGain();return c.gain.value=0,o.connect(s).connect(c).connect(t),{gain:c,filter:s}},b=y(this.pinkBuf,`bandpass`,3400,.5);this.lfo(.4,600,b.filter.frequency),this.rainHissGain=b.gain;let x=y(this.pinkBuf,`lowpass`,420,.7);this.lfo(.13,90,x.filter.frequency),this.rainDrumGain=x.gain;let S=y(this.pinkBuf,`bandpass`,700,.8);this.lfo(.09,220,S.filter.frequency),this.rainBreezeGain=S.gain;let C=e.createOscillator();C.type=`sawtooth`,C.frequency.value=126,this.lfo(6.5,7,C.frequency);let w=e.createBiquadFilter();w.type=`bandpass`,w.frequency.value=760,w.Q.value=2.4,this.combineWhirrGain=e.createGain(),this.combineWhirrGain.gain.value=0,C.connect(w).connect(this.combineWhirrGain).connect(this.engBus),C.start();let T=this.loopNoise(this.pinkBuf),E=e.createBiquadFilter();E.type=`lowpass`,E.frequency.value=320;let D=e.createGain();D.gain.value=.55,this.combineReelLfo=this.lfo(5.2,.45,D.gain),this.combineReelGain=e.createGain(),this.combineReelGain.gain.value=0,T.connect(E).connect(D).connect(this.combineReelGain).connect(this.engBus);let O=this.loopNoise(this.noiseBuf),k=e.createBiquadFilter();k.type=`bandpass`,k.frequency.value=1500,k.Q.value=1.1;let A=e.createGain();A.gain.value=.5,this.lfo(21,.5,A.gain,`square`),this.combineThreshGain=e.createGain(),this.combineThreshGain.gain.value=0,O.connect(k).connect(A).connect(this.combineThreshGain).connect(this.engBus);let j=this.loopNoise(this.noiseBuf),M=e.createBiquadFilter();M.type=`bandpass`,M.frequency.value=4300,M.Q.value=.6,this.chaffGain=e.createGain(),this.chaffGain.gain.value=0,j.connect(M).connect(this.chaffGain).connect(this.sfxBus);let N=this.loopNoise(this.noiseBuf),P=e.createBiquadFilter();P.type=`bandpass`,P.frequency.value=2900,P.Q.value=5;let ee=e.createGain();ee.gain.value=.5,this.lfo(15,.5,ee.gain,`square`),this.chainGain=e.createGain(),this.chainGain.gain.value=0,N.connect(P).connect(ee).connect(this.chainGain).connect(this.sfxBus)}update(e){let t=this.ctx;if(!t||t.state!==`running`)return;let n=t.currentTime,r=1-e.nightFactor,i=e.vehicle?e.vehicle.speed:e.foot?e.foot.speed:0,a=(e,t,r=.2)=>void e.setTargetAtTime(t,n,r);a(this.engBus.gain,e.paused?0:.8,.1),a(this.ambBus.gain,e.paused?.35:.9,.2),a(this.sfxBus.gain,e.paused?.2:.9,.1),a(this.windGain.gain,(.035+.1*e.windiness+Math.min(.12,i*.006))*(1-.35*e.nightFactor)),a(this.rustleGain.gain,.02+.045*e.windiness*(1-.4*e.nightFactor)),a(this.waterGain.gain,.13*e.canal*e.canal),a(this.tubewellGain.gain,.2*e.motor),a(this.cricketGain.gain,.085*G_((e.nightFactor-.35)/.5),.6),this.updateEngine(e,n);let o=e.vehicle;a(this.skidGain.gain,o?.11*G_(o.skid):0,.05),a(this.fxRustleGain.gain,o?.1*G_(o.rustle):e.foot&&this.isCrop(e.foot.surface)?.05*G_(e.foot.speed/5):0,.1),a(this.fxSplashGain.gain,o?.22*G_(o.splash):e.foot&&(e.foot.swimming||e.foot.surface===`canal_water`||e.foot.surface===`pond_water`)?.14*G_(e.foot.speed/3):0,.1);let s=G_(e.rain??0),c=o&&o.kind!==`bike`&&o.kind!==`tractor`?.6:1;for(a(this.rainHissGain.gain,.2*s*c,.35),a(this.rainDrumGain.gain,.3*s*s+.04*s,.35),a(this.rainBreezeGain.gain,.09*s,.5),s>.1&&!e.paused&&n>=this.nextDrip&&(this.nextDrip=n+J_(.06,.4)/(.4+s),this.noiseBurst(n,J_(.025,.06),J_(2600,5200),1.4,`bandpass`,.012+.03*s)),e.thunder&&this.pendingThunder.push(n+J_(.25,.9));this.pendingThunder.length>0&&this.pendingThunder[0]<=n;)this.pendingThunder.shift(),this.thunder();let l=!!o&&o.kind===`combine`,u=l?G_(.45+o.rustle*.8):0;a(this.combineWhirrGain.gain,l?.045+.05*u:0,.15),a(this.combineReelGain.gain,l?.14+.22*u:0,.15),a(this.combineThreshGain.gain,l?.03+.08*u:0,.15),a(this.combineReelLfo.frequency,4.2+3.2*u+Math.min(1.5,i*.15),.3),a(this.chaffGain.gain,l?.1*G_(o.rustle):0,.12),l&&o.rustle>.2&&n>=this.nextCrunch&&(this.nextCrunch=n+J_(.05,.16),this.noiseBurst(n,J_(.04,.09),J_(1800,3600),1.1,`bandpass`,.05*o.rustle));let d=G_(e.tochanStrain??0);a(this.chainGain.gain,.16*d,.08),d>.35&&n>=this.nextClink&&(this.nextClink=n+J_(.14,.38)/(.5+d),this.tone(J_(1500,2300),J_(900,1300),n,.09,.05*d,`square`,this.sfxBus)),e.foot&&e.foot.grounded&&e.foot.speed>.6?(this.nextStep-=e.dt,this.nextStep<=0&&(this.nextStep=K_(.62-e.foot.speed*.045,.27,.6),this.footstep(e.foot.surface,e.foot.speed))):this.nextStep=0,r>.3&&!e.paused&&n>=this.nextBird&&(this.nextBird=n+J_(2.2,6.5),Math.random()<.45?this.koyal(r):this.chirps(r))}isCrop(e){return e===`wheat`||e===`mustard`||e===`paddy`||e===`sugarcane`}buildEngine(e){let t=this.ctx,n=Q_[e],r=t.createGain();r.gain.value=0;let i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.value=n.lowpass,i.Q.value=.9,i.connect(r).connect(this.engBus);let a=n.tones.map(e=>{let n=t.createOscillator();n.type=e.type,n.frequency.value=60;let r=t.createGain();return r.gain.value=e.gain,n.connect(r).connect(i),n.start(),{osc:n,gain:r,mult:e.mult,base:e.gain}}),o=this.loopNoise(this.noiseBuf),s=t.createBiquadFilter();s.type=`lowpass`,s.frequency.value=700;let c=t.createGain();return c.gain.value=n.noise,o.connect(s).connect(c).connect(i),r.gain.setTargetAtTime(n.level,t.currentTime,.12),{kind:e,profile:n,out:r,filter:i,tones:a,noiseGain:c,noiseSrc:o,nextPulse:t.currentTime+.05,rpm:n.idleRpm,skipToggle:!1}}killEngine(e){let t=this.ctx;e.out.gain.setTargetAtTime(0,t.currentTime,.06),window.setTimeout(()=>{for(let t of e.tones)t.osc.stop();e.noiseSrc.stop(),e.out.disconnect()},400)}updateEngine(e,t){let n=e.vehicle;if(!n){this.engine&&=(this.killEngine(this.engine),null);return}this.engine&&this.engine.kind===n.kind||(this.engine&&this.killEngine(this.engine),this.engine=this.buildEngine(n.kind));let r=this.engine,i=r.profile,a=G_(n.speed/Math.max(1,n.maxSpeed)),o=Math.min(i.gears-.001,a*i.gears*1.04),s=q_(.3,.92,o-Math.floor(o))*(.5+.5*Math.min(1,Math.floor(o)/Math.max(1,i.gears-1)+.3)),c=i.idleRpm/i.maxRpm,l=n.speed<.6?c+n.throttle*.38:Math.max(c,s*(.82+.18*n.throttle))+(n.boosting?.05:0);l=G_(l);let u=l*i.maxRpm;r.rpm+=(u-r.rpm)*Math.min(1,e.dt*7);let d=G_((r.rpm-i.idleRpm)/(i.maxRpm-i.idleRpm)),f=r.rpm/60*i.toneMult;for(let e of r.tones)e.osc.frequency.setTargetAtTime(f*e.mult,t,.04),e.gain.gain.setTargetAtTime(e.base*(.5+.7*Math.max(n.throttle,d*.6)),t,.1);r.filter.frequency.setTargetAtTime(q_(i.lowpass,i.lowpassOpen,G_(d*.7+n.throttle*.4)),t,.1),r.noiseGain.gain.setTargetAtTime(i.noise*(.6+1.2*n.throttle),t,.1);let p=r.rpm/60*i.pulsesPerRev,m=this.pulses.get(i.pulse),h=this.ctx;r.nextPulse<t-.05&&(r.nextPulse=t);let g=.55+.45*Math.max(n.throttle,.25),_=0;for(;r.nextPulse<t+.07&&_++<8;){if(r.skipToggle=!r.skipToggle,p<34||r.skipToggle){let e=h.createBufferSource();e.buffer=m,e.playbackRate.value=(.82+.55*d)*(1+(Math.random()-.5)*.04);let t=h.createGain();t.gain.value=i.pulseGain*g*(.9+Math.random()*.2),e.connect(t).connect(r.filter),e.start(r.nextPulse)}r.nextPulse+=1/Math.max(2,p)}}setHorn(e,t){let n=this.ctx;n&&n.state===`running`&&(e&&!this.hornHeld&&t?this.startHorn(t):!e&&this.hornHeld&&this.stopHorn(),this.hornHeld=e&&!!t)}startHorn(e){let t=this.ctx,n=tv[e],r=t.currentTime,i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.value=2600,i.Q.value=1.2;let a=t.createGain();a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(n.gain,r+.025),i.connect(a).connect(this.sfxBus);let o=t.createOscillator();o.frequency.value=7;let s=t.createGain();s.gain.value=n.gain*.06,o.connect(s).connect(a.gain),o.start(r);let c=[o],l=Math.max(...n.steps.map(e=>e.length));for(let e=0;e<l;e++)for(let a of[0,9]){let o=t.createOscillator();o.type=n.wave,o.detune.value=a,n.steps.forEach((t,i)=>{let a=t[Math.min(e,t.length-1)];i===0?o.frequency.setValueAtTime(a,r):o.frequency.setTargetAtTime(a,r+i*n.stepDur,.012)});let s=t.createGain();s.gain.value=1/(l*2),o.connect(s).connect(i),o.start(r),c.push(o)}this.hornNodes={gain:a,oscs:c}}stopHorn(){let e=this.ctx,t=this.hornNodes;if(!e||!t)return;let n=e.currentTime;t.gain.gain.cancelScheduledValues(n),t.gain.gain.setTargetAtTime(0,n,.025);for(let e of t.oscs)e.stop(n+.16);this.hornNodes=null}tone(e,t,n,r,i,a=`sine`,o=this.ambBus){let s=this.ctx,c=s.createOscillator();c.type=a,c.frequency.setValueAtTime(e,n),c.frequency.exponentialRampToValueAtTime(Math.max(20,t),n+r);let l=s.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(i,n+Math.min(.02,r*.3)),l.gain.exponentialRampToValueAtTime(1e-4,n+r),c.connect(l).connect(o),c.start(n),c.stop(n+r+.02)}koyal(e){let t=this.ctx.currentTime+.05,n=3+Math.floor(Math.random()*3);for(let r=0;r<n;r++){let n=640+r*70;this.tone(n,n*1.45,t+r*.42,.34,.05*e),this.tone(n*2,n*2.9,t+r*.42,.34,.012*e)}}chirps(e){let t=this.ctx.currentTime+.05,n=2+Math.floor(Math.random()*5),r=J_(2800,4200);for(let i=0;i<n;i++){let n=r*(1+(Math.random()-.5)*.25);this.tone(n,n*J_(.8,1.35),t+i*J_(.08,.16),.07,.03*e,`triangle`)}}noiseBurst(e,t,n,r,i,a){let o=this.ctx,s=o.createBufferSource();s.buffer=this.noiseBuf;let c=o.createBiquadFilter();c.type=i,c.frequency.value=n,c.Q.value=r;let l=o.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(a,e+.006),l.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(c).connect(l).connect(this.sfxBus),s.start(e,Math.random()*1.5,t+.05)}footstep(e,t){let n=this.ctx.currentTime,r=.05+Math.min(.06,t*.008);this.isCrop(e)?this.noiseBurst(n,.16,J_(1900,2600),.7,`bandpass`,r*1.2):e===`canal_water`||e===`pond_water`?this.noiseBurst(n,.25,J_(600,900),.8,`bandpass`,r*1.6):e===`phirni_brick`||e===`link_road`||e===`highway`?this.noiseBurst(n,.07,J_(1500,2100),1.2,`bandpass`,r):this.noiseBurst(n,.1,J_(420,640),.8,`lowpass`,r*1.3)}play(e){let t=this.ctx;if(!t||t.state!==`running`)return;let n=t.currentTime+.01,r=this.sfxBus;switch(e){case`click`:this.tone(900,700,n,.05,.05,`triangle`,r);break;case`sheaf`:[880,1318.5,1760].forEach((e,t)=>this.tone(e,e*1.003,n+t*.07,.4,.07,`sine`,r));break;case`checkpoint`:this.tone(660,660,n,.25,.08,`triangle`,r),this.tone(990,990,n+.09,.35,.07,`triangle`,r);break;case`start`:[392,523.3,659.3].forEach((e,t)=>this.tone(e,e,n+t*.1,.3,.07,`triangle`,r));break;case`complete`:[523.3,659.3,784,1046.5].forEach((e,t)=>{this.tone(e,e,n+t*.12,.6,.08,`triangle`,r),this.tone(e/2,e/2,n+t*.12,.6,.05,`sine`,r)});for(let e=0;e<6;e++)this.dhol(n+.5+e*.07,.7,e%2==0,r);break;case`fail`:this.tone(330,262,n,.45,.08,`triangle`,r),this.tone(262,196,n+.3,.7,.08,`triangle`,r);break;case`alert`:this.dhol(n,.9,!0,r),this.dhol(n+.16,.9,!0,r),this.noiseBurst(n+.34,.25,900,2,`bandpass`,.1);break;case`splash`:this.noiseBurst(n,.4,900,.7,`lowpass`,.14);break;case`thud`:this.tone(120,50,n,.2,.14,`sine`,r),this.noiseBurst(n,.1,400,1,`lowpass`,.1);break;case`zor`:this.tone(90,160,n,.16,.16,`sawtooth`,r),this.tone(880,1320,n,.18,.08,`triangle`,r),this.noiseBurst(n,.12,1400,1.4,`bandpass`,.09);break;case`chain`:for(let e=0;e<3;e++)this.tone(1900-e*260,700,n+e*.07,.14,.09,`square`,r),this.noiseBurst(n+e*.07,.06,3200,3,`bandpass`,.08);this.tone(70,45,n,.3,.12,`sine`,r);break;case`tochan-win`:this.tochanWin(n);break;case`thunder`:this.thunder()}}tochanWin(e){let t=this.ctx,n=this.sfxBus,r=t.createBufferSource();r.buffer=this.pinkBuf;let i=t.createBiquadFilter();i.type=`bandpass`,i.frequency.setValueAtTime(700,e),i.frequency.linearRampToValueAtTime(1100,e+1.2),i.Q.value=.9;let a=t.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.28,e+.5),a.gain.exponentialRampToValueAtTime(1e-4,e+2.6),r.connect(i).connect(a).connect(n),r.start(e,Math.random()*2,2.7);for(let t=0;t<8;t++)this.dhol(e+t*.08,.8,t%2==0,n);[659.3,784,987.8,1318.5,1568].forEach((t,r)=>{this.tone(t,t*1.002,e+.1+r*.09,.7,.07,`triangle`,n),this.tone(t*2,t*2,e+.1+r*.09,.4,.02,`sine`,n)})}thunder(){let e=this.ctx;if(!e||e.state!==`running`)return;let t=e.currentTime+.02,n=this.sfxBus;this.tone(62,26,t,1.6,.34,`sine`,n);let r=(t,r,i,a,o)=>{let s=e.createBufferSource();s.buffer=this.pinkBuf;let c=e.createBiquadFilter();c.type=`lowpass`,c.Q.value=.8,c.frequency.setValueAtTime(i,t),c.frequency.exponentialRampToValueAtTime(Math.max(40,a),t+r);let l=e.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(o,t+Math.min(.35,r*.2)),l.gain.exponentialRampToValueAtTime(1e-4,t+r),s.connect(c).connect(l).connect(n),s.start(t,Math.random()*2,r+.05)};r(t,3.6,420,70,.7),r(t+.9+Math.random()*.5,2.8,300,55,.45),r(t+2.1+Math.random()*.8,3.2,220,45,.3)}cycleRadio(){return this.setRadio(this.radioIndex>=H_.length-1?-1:this.radioIndex+1<0?0:this.radioIndex+1),this.radioIndex}setRadio(e){let t=e<0||e>=H_.length?-1:e;t===this.radioIndex&&this.radioBus||(this.radioIndex=t,this.stopRadio(),this.ctx&&t>=0&&this.startRadio(t))}stopRadio(){window.clearInterval(this.radioTimer),this.radioTimer=0;let e=this.radioBus;this.radioBus=null,e&&this.ctx&&(e.gain.setTargetAtTime(0,this.ctx.currentTime,.08),window.setTimeout(()=>e.disconnect(),700))}startRadio(e){let t=this.ctx,n=t.createGain();n.gain.value=0;let r=t.createBiquadFilter();r.type=`highpass`,r.frequency.value=70;let i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.value=e===1?4200:7500,n.connect(r).connect(i).connect(this.musicBus),n.gain.setTargetAtTime(1,t.currentTime+.05,.25),this.radioBus=n,this.radioStep=0,this.radioNext=t.currentTime+.12;let a=cv[e];this.radioTimer=window.setInterval(()=>{if(!this.ctx||this.radioBus!==n)return;let e=this.ctx.currentTime;for(this.radioNext<e-.5&&(this.radioNext=e+.05);this.radioNext<e+.2;)a.step(this.kit(n),this.radioStep,this.radioNext,a.stepDur),this.radioStep++,this.radioNext+=a.stepDur},40)}kitCache=null;kit(e){if(this.kitCache?.bus===e)return this.kitCache.kit;let t=new rv(this.ctx,e,this.noiseBuf);return this.kitCache={bus:e,kit:t},t}dhol(e,t,n,r){let i=this.ctx,a=new rv(i,r,this.noiseBuf);n?a.dagga(e,t):a.tilli(e,t)}dispose(){window.removeEventListener(`pointerdown`,this.unlockHandler),window.removeEventListener(`keydown`,this.unlockHandler),this.stopRadio(),this.engine&&this.killEngine(this.engine),this.engine=null,this.stopHorn(),this.ctx&&this.ctx.close().catch(()=>void 0),this.ctx=null}},rv=class{ctx;out;noise;constructor(e,t,n){this.ctx=e,this.out=t,this.noise=n}env(e,t,n,r){let i=this.ctx.createGain();return i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(Math.max(2e-4,t),e+n),i.gain.exponentialRampToValueAtTime(1e-4,e+r),i}noiseHit(e,t,n,r,i,a){let o=this.ctx.createBufferSource();o.buffer=this.noise;let s=this.ctx.createBiquadFilter();s.type=i,s.frequency.value=n,s.Q.value=r;let c=this.env(e,a,.003,t);o.connect(s).connect(c).connect(this.out),o.start(e,Math.random()*1.5,t+.05)}boom(e,t,n,r,i){let a=this.ctx.createOscillator();a.type=`sine`,a.frequency.setValueAtTime(t,e),a.frequency.exponentialRampToValueAtTime(n,e+r*.5);let o=this.env(e,i,.004,r);a.connect(o).connect(this.out),a.start(e),a.stop(e+r+.02)}dagga(e,t=1){this.boom(e,150,62,.34,.5*t),this.noiseHit(e,.04,600,1,`lowpass`,.12*t)}tilli(e,t=1){this.boom(e,330,210,.12,.18*t),this.noiseHit(e,.09,3200,1.4,`bandpass`,.2*t)}dholakSlap(e,t=1){this.boom(e,260,190,.1,.16*t),this.noiseHit(e,.07,2400,1.2,`bandpass`,.18*t)}dholakBass(e,t=1){this.boom(e,130,74,.28,.42*t)}chimta(e,t=1){this.noiseHit(e,.06,7200,2.5,`highpass`,.1*t),this.noiseHit(e,.12,5200,6,`bandpass`,.05*t)}clap(e,t=1){this.noiseHit(e,.1,1400,.8,`bandpass`,.2*t),this.noiseHit(e+.012,.12,1700,.8,`bandpass`,.14*t)}kick(e,t=1){this.boom(e,120,42,.26,.55*t)}snare(e,t=1){this.noiseHit(e,.14,1900,.9,`bandpass`,.16*t),this.boom(e,220,150,.08,.1*t)}hat(e,t=1){this.noiseHit(e,.04,8500,1.5,`highpass`,.07*t)}tumbi(e,t,n,r=1){let i=this.ctx,a=i.createBiquadFilter();a.type=`bandpass`,a.Q.value=4.5,a.frequency.setValueAtTime(t*4.2,e),a.frequency.exponentialRampToValueAtTime(t*1.6,e+Math.min(.35,n));let o=this.env(e,.34*r,.004,n);a.connect(o).connect(this.out);for(let[r,o,s]of[[`sawtooth`,1,0],[`sawtooth`,1,7],[`triangle`,2,0]]){let c=i.createOscillator();c.type=r,c.frequency.value=t*o,c.detune.value=s;let l=i.createGain();l.gain.value=o===2?.15:.5,c.connect(l).connect(a),c.start(e),c.stop(e+n+.05)}}drone(e,t,n,r=1){let i=this.ctx,a=i.createBiquadFilter();a.type=`lowpass`,a.frequency.value=950;let o=this.env(e,.16*r,.03,n);a.connect(o).connect(this.out);for(let r of[0,-6,8]){let o=i.createOscillator();o.type=`sawtooth`,o.frequency.value=t,o.detune.value=r;let s=i.createGain();s.gain.value=.3,o.connect(s).connect(a),o.start(e),o.stop(e+n+.05)}}rhodes(e,t,n,r=1){let i=this.ctx,a=i.createBiquadFilter();a.type=`lowpass`,a.frequency.value=1700;let o=this.env(e,.13*r,.012,n),s=i.createOscillator();s.frequency.value=4.6;let c=i.createGain();c.gain.value=.02*r,s.connect(c).connect(o.gain),s.start(e),s.stop(e+n+.05),a.connect(o).connect(this.out);for(let r of t)for(let[o,s,c]of[[`sine`,1,.5],[`triangle`,2,.12],[`sine`,3.01,.05]]){let l=i.createOscillator();l.type=o,l.frequency.value=r*s;let u=i.createGain();u.gain.value=c/Math.max(2,t.length*.6),l.connect(u).connect(a),l.start(e),l.stop(e+n+.05)}}flute(e,t,n,r=1){let i=this.ctx,a=i.createOscillator();a.type=`sine`,a.frequency.setValueAtTime(t*.985,e),a.frequency.exponentialRampToValueAtTime(t,e+.06);let o=i.createOscillator();o.frequency.value=5.2;let s=i.createGain();s.gain.value=t*.006,o.connect(s).connect(a.frequency);let c=this.env(e,.2*r,.06,n);a.connect(c).connect(this.out),a.start(e),o.start(e),a.stop(e+n+.05),o.stop(e+n+.05),this.noiseHit(e,n*.8,t*2,3,`bandpass`,.025*r)}bass(e,t,n,r=1,i=!0){let a=this.ctx,o=a.createOscillator();o.type=i?`sawtooth`:`sine`,o.frequency.value=t;let s=a.createBiquadFilter();s.type=`lowpass`,s.frequency.setValueAtTime(i?520:300,e),s.frequency.exponentialRampToValueAtTime(140,e+n);let c=this.env(e,.3*r,.01,n);o.connect(s).connect(c).connect(this.out),o.start(e),o.stop(e+n+.05)}crackle(e){this.noiseHit(e,.012,J_(3e3,7e3),1,`highpass`,J_(.01,.035))}},iv=50,av=(e,t)=>e.includes(t),ov={stepDur:60/100/4,step(e,t,n,r){let i=Math.floor(t/16)%8,a=t%16;av([0,3,8,11],a)&&e.dholakBass(n,a===0?1:.75),av([4,12],a)&&e.dholakSlap(n,1),av([2,6,10,14],a)&&e.dholakSlap(n,.4),a%2==0&&e.chimta(n,a%4==0?.5:.3),a===0&&e.drone(n,Y_(iv),r*8.5,.8),a===8&&e.drone(n,Y_(57),r*8.5,.6);let o=i%4<2?[[0,4,2],[2,5,2],[4,4,2],[6,2,2],[8,4,3],[11,2,1],[12,0,4]]:[[0,7,2],[2,6,2],[4,5,2],[6,4,2],[8,5,2],[10,4,2],[12,2,4]],s=(i%2==0?o:o.slice(0,5)).find(e=>e[0]===a);s&&e.tumbi(n,Z_(74,s[1]),r*s[2]*.95,i%2==0?1:.7),av([5,13],a)&&e.tumbi(n,Y_(81),r*1.2,.35)}},sv=[[62,67,69,74],[60,64,67,71],[55,59,62,66],[62,66,69,72]],cv=[ov,{stepDur:60/78/4,step(e,t,n,r){let i=Math.floor(t/16)%4,a=t%16,o=a%2==1?r*.22:0,s=sv[i];a===0&&e.rhodes(n,s.map(Y_),r*7,1),a===10&&e.rhodes(n+o,s.slice(1).map(Y_),r*5,.7),a===0&&e.bass(n,Y_(s[0]-12),r*6,.9,!1),a===10&&e.bass(n,Y_(s[0]-12+7),r*4,.7,!1),(a===0||a===7||a===10)&&e.kick(n+o,a===0?.8:.55),(a===4||a===12)&&e.snare(n+o,.5),a%2==0&&e.hat(n+o,a%4==0?.9:.5),Math.random()<.3&&e.crackle(n+Math.random()*r);let c=({0:[[2,4,4],[8,2,3]],1:[[0,5,3],[6,4,3],[12,2,4]],2:[[4,4,5],[12,5,3]],3:[[0,6,4],[8,4,6]]}[i]??[]).find(e=>e[0]===a);c&&e.flute(n,Z_(74,c[1]),r*c[2],.9)}},{stepDur:60/112/4,step(e,t,n,r){let i=Math.floor(t/16)%4,a=t%16;av([0,3,6,8,11,14],a)&&e.dagga(n,a===0||a===8?1:.75),av([2,5,7,10,13,15],a)&&e.tilli(n,av([5,13],a)?.9:.55),a%2==0&&e.chimta(n,a%4==0?.8:.5),av([4,12],a)&&e.clap(n,.9);let o={0:0,3:0,6:0,8:7,11:7,14:10};if(a in o&&e.bass(n,Y_(38+o[a]),r*2.4,.9),a===0&&e.drone(n,Y_(iv),r*15,.5),i%2==0){let t=[[0,7,1],[1,6,1],[3,4,2],[6,5,1],[8,7,1],[9,6,1],[11,4,2],[14,2,2]].find(e=>e[0]===a);t&&e.tumbi(n,Z_(74,t[1]),r*t[2]*1.5,1)}else av([0,4,8,12],a)&&e.tumbi(n,Z_(74,[4,5,4,2][a/4]),r*3,.55)}}],lv=[{keys:[`W`,`A`,`S`,`D`],en:`Move / Drive`,gu:`ਤੁਰੋ / ਚਲਾਓ`},{keys:[`Mouse Drag / Click`],en:`Look`,gu:`ਵੇਖੋ`},{keys:[`Scroll`],en:`Zoom`,gu:`ਨੇੜੇ-ਦੂਰ`},{keys:[`Shift`],en:`Sprint / Boost`,gu:`ਭੱਜੋ / ਜ਼ੋਰ`},{keys:[`Space`],en:`Jump / Drift`,gu:`ਛਾਲ / ਘਿਸਰ`},{keys:[`F`],en:`Hop In / Out`,gu:`ਚੜ੍ਹੋ / ਉਤਰੋ`},{keys:[`H`],en:`Horn`,gu:`ਹਾਰਨ`},{keys:[`L`],en:`Lights`,gu:`ਬੱਤੀਆਂ`},{keys:[`R`],en:`Radio`,gu:`ਰੇਡੀਓ`},{keys:[`T`],en:`Sky`,gu:`ਅਸਮਾਨ`},{keys:[`V`],en:`Rain`,gu:`ਮੀਂਹ`},{keys:[`C`],en:`Cam`,gu:`ਕੈਮਰਾ`},{keys:[`M`,`Esc`],en:`Map & Missions`,gu:`ਨਕਸ਼ਾ ਤੇ ਕੰਮ`}],uv=1600,dv=uv/2,fv=600,pv=uv/fv,mv=Math.PI*2,hv={wheat:[146,196,62],mustard:[243,209,46],paddy:[48,158,96],sugarcane:[38,118,52],dirt_track:[183,141,87],link_road:[140,136,130],phirni_brick:[194,106,74],canal_water:[58,143,209],highway:[88,88,94],pond_water:[58,143,209],verge:[120,176,78],watt:[134,168,71]};function gv(){let e=document.createElement(`canvas`);e.width=fv,e.height=fv;let t=e.getContext(`2d`),n=t.createImageData(fv,fv),r=new Uint32Array(n.data.buffer);for(let e=0;e<fv;e++){let t=dv-(e+.5)*pv;for(let n=0;n<fv;n++){let i=hv[xd(dv-(n+.5)*pv,t).surface]??hv.wheat,a=.93+.14*((n*73856093^e*19349663)%97)/97,o=Math.min(255,i[0]*a)|0,s=Math.min(255,i[1]*a)|0,c=Math.min(255,i[2]*a)|0;r[e*fv+n]=255<<24|c<<16|s<<8|o}}t.putImageData(n,0,0);let i=(e,t)=>[(dv-e)/pv,(dv-t)/pv];t.lineCap=`round`,t.lineJoin=`round`;for(let e of[`dirt_track`,`link_road`,`sua`])for(let n of Zu)n.kind===e&&(t.beginPath(),n.points.forEach((e,n)=>{let[r,a]=i(e.x,e.z);n===0?t.moveTo(r,a):t.lineTo(r,a)}),t.strokeStyle=e===`sua`?`#63b4ee`:e===`link_road`?`#8c8882`:`#b98f59`,t.lineWidth=e===`sua`?1.3:e===`link_road`?2.6:1.8,t.stroke());for(let e of Du){let[n,r]=i(e.x,e.z);t.beginPath(),t.arc(n,r,e.phirniRadius/pv,0,mv),t.fillStyle=`rgb(251 243 223 / 0.28)`,t.fill(),t.lineWidth=1.6,t.strokeStyle=`#c26a4a`,t.stroke()}return e}function $(e){let t=document.getElementById(e);if(!t)throw Error(`HUD: missing #${e} in index.html`);return t}function _v(e){return Math.min(1,Math.max(0,e))}function vv(e){let t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}var yv={tractor:`#c0392b`,bike:`#2c3e50`,jeep:`#2e6f3e`,truck:`#d68910`,sedan:`#f4f4f4`,combine:`#16a05a`},bv={0:`Dry`,1:`Light`,2:`Heavy`},xv={noon:`Noon`,sunset:`Sunset`,night:`Night`,dawn:`Dawn`,monsoon:`Monsoon`},Sv=class{dialog;cb;world;hotspots;hud=$(`hud`);titleOverlay=$(`title-overlay`);playBtn=$(`play-btn`);mini=$(`minimap`);miniCtx;bigMap=$(`world-map`);bigCtx;text=new Map;lastFrame=null;hover=null;mapTimer=0;cardsKey=``;choiceKey=``;toastCount=0;constructor(e,t,n){this.cb=e,this.world=t,this.hotspots=n,this.dialog=$(`pause-dialog`),this.miniCtx=this.mini.getContext(`2d`),this.bigCtx=this.bigMap.getContext(`2d`);let r=Math.min(window.devicePixelRatio||1,2);this.mini.width=Math.round(200*r),this.mini.height=Math.round(200*r),this.buildLegends(),this.buildTravelList(),this.bindTitle(),this.bindActions(),this.bindDialog(),this.bindMap()}buildLegends(){for(let e of[`title-legend`,`controls-legend`]){let t=$(e);t.textContent=``;for(let e of lv){let n=document.createElement(`li`),r=document.createElement(`span`);r.className=`keys`;for(let t of e.keys){let e=document.createElement(`kbd`);e.textContent=t,r.append(e)}let i=document.createElement(`span`);i.className=`what`,i.textContent=e.en;let a=document.createElement(`small`);a.lang=`pa`,a.textContent=e.gu,i.append(a),n.append(r,i),t.append(n)}}}buildTravelList(){let e=$(`travel-list`);e.textContent=``;for(let t of this.hotspots){let n=document.createElement(`button`);n.type=`button`,n.dataset.id=t.id,n.textContent=`${t.gurmukhi} · ${t.english}`,n.addEventListener(`click`,()=>this.cb.onFastTravel(t.id)),n.addEventListener(`mouseenter`,()=>{this.hover=t,this.drawBigMap()}),n.addEventListener(`mouseleave`,()=>{this.hover=null,this.drawBigMap()}),e.append(n)}}bindTitle(){this.playBtn.addEventListener(`click`,()=>{this.playBtn.blur(),this.cb.onPlay()})}press(e,t){e.addEventListener(`click`,()=>{e.blur(),this.cb.onUiClick(),t()})}bindActions(){this.press($(`btn-map`),()=>this.cb.onOpenDialog()),this.press($(`btn-sky`),()=>this.cb.onSky()),this.press($(`btn-rain`),()=>this.cb.onRain()),this.press($(`btn-radio`),()=>this.cb.onRadio()),this.press($(`btn-cam`),()=>this.cb.onCamera()),this.press($(`btn-mute`),()=>this.cb.onMuteToggle())}bindDialog(){let e=this.dialog;e.addEventListener(`close`,()=>{e.returnValue=``,window.clearInterval(this.mapTimer),this.cb.onDialogClosed()}),e.addEventListener(`keydown`,t=>{t.code===`KeyM`&&!t.repeat&&(t.preventDefault(),e.close())});let t=Array.from(e.querySelectorAll(`[role="tab"]`)),n=(e,n)=>{for(let n of t){let t=n===e;n.setAttribute(`aria-selected`,String(t)),n.tabIndex=t?0:-1,$(n.getAttribute(`aria-controls`)).hidden=!t}n&&e.focus(),e.id===`tab-map`&&this.drawBigMap()};t.forEach((e,r)=>{e.addEventListener(`click`,()=>n(e,!1)),e.addEventListener(`keydown`,e=>{e.key===`ArrowRight`?n(t[(r+1)%t.length],!0):e.key===`ArrowLeft`&&n(t[(r+t.length-1)%t.length],!0)})}),$(`abort-mission`).addEventListener(`click`,()=>this.cb.onAbortMission()),$(`btn-reset`).addEventListener(`click`,()=>this.cb.onResetProgress()),$(`vol-master`).addEventListener(`input`,e=>this.cb.onMasterVolume(Number(e.target.value)/100)),$(`vol-music`).addEventListener(`input`,e=>this.cb.onMusicVolume(Number(e.target.value)/100)),$(`chk-mute`).addEventListener(`change`,()=>this.cb.onMuteToggle()),$(`chk-shadows`).addEventListener(`change`,e=>this.cb.onShadows(e.target.checked))}bindMap(){let e=this.bigMap,t=t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width*e.width,i=(t.clientY-n.top)/n.height*e.height,a=null,o=26;for(let e of this.hotspots){let t=Math.hypot(r-this.mapX(e.x),i-this.mapY(e.z));t<o&&(o=t,a=e)}return a};e.addEventListener(`mousemove`,n=>{let r=t(n);r!==this.hover&&(this.hover=r,e.style.cursor=r?`pointer`:`crosshair`,this.drawBigMap())}),e.addEventListener(`mouseleave`,()=>{this.hover=null,this.drawBigMap()}),e.addEventListener(`click`,e=>{let n=t(e);n&&this.cb.onFastTravel(n.id)})}showTitle(e){this.titleOverlay.hidden=!e,this.hud.hidden=e}setLoading(e){this.playBtn.disabled=e,$(`load-note`).hidden=!e}get isDialogOpen(){return this.dialog.open}openDialog(){this.dialog.open||(this.dialog.showModal(),this.cb.onDialogOpened(),this.drawBigMap(),window.clearInterval(this.mapTimer),this.mapTimer=window.setInterval(()=>this.drawBigMap(),200))}closeDialog(){this.dialog.open&&this.dialog.close()}toast(e,t,n){let r=$(`toasts`);this.toastCount>=4&&r.firstElementChild&&(r.firstElementChild.remove(),this.toastCount--);let i=document.createElement(`div`);i.className=`toast`,i.dataset.kind=e;let a=document.createElement(`span`);a.lang=`pa`,a.textContent=t;let o=document.createElement(`small`);o.textContent=n,i.append(a,o),r.append(i),this.toastCount++,window.setTimeout(()=>{i.isConnected&&(i.remove(),this.toastCount=Math.max(0,this.toastCount-1))},4300)}setMissionCards(e){let t=JSON.stringify(e);if(t===this.cardsKey)return;this.cardsKey=t;let n=$(`mission-list`);n.textContent=``;let r=!1;for(let t of e){r||=t.active;let e=document.createElement(`article`);e.className=`mission-card`,e.dataset.active=String(t.active);let i=document.createElement(`h4`),a=document.createElement(`span`);a.lang=`pa`,a.textContent=`${t.number}. ${t.gurmukhi}`,i.append(a,` · ${t.english}`);let o=document.createElement(`p`);o.lang=`pa`,o.textContent=t.briefGurmukhi;let s=document.createElement(`p`);s.className=`en`,s.textContent=t.briefEnglish;let c=document.createElement(`div`);c.className=`mission-meta`;let l=document.createElement(`span`);if(l.className=`pill`,l.textContent=`₹${t.reward}`,c.append(l),t.timesDone>0){let e=document.createElement(`span`);e.className=`pill done`,e.textContent=`Done ×${t.timesDone}`,c.append(e)}if(t.bestTime!==null){let e=document.createElement(`span`);e.className=`pill`,e.textContent=`Best ${vv(t.bestTime)}`,c.append(e)}let u=document.createElement(`span`);u.className=`spacer`;let d=document.createElement(`button`);d.type=`button`,d.className=`brass-btn`,d.dataset.mission=t.id,d.append(t.active?`Restart · `:`Start · `);let f=document.createElement(`span`);f.lang=`pa`,f.textContent=t.active?`ਫਿਰ ਤੋਂ`:`ਸ਼ੁਰੂ`,d.append(f),d.addEventListener(`click`,()=>this.cb.onStartMission(t.id)),c.append(u,d),e.append(i,o,s,c),n.append(e)}$(`abort-mission`).hidden=!r}setSettings(e,t,n,r=0){let i=(e,t)=>t($(e));i(`vol-master`,t=>{document.activeElement!==t&&(t.value=String(Math.round(e.master*100)))}),i(`vol-music`,t=>{document.activeElement!==t&&(t.value=String(Math.round(e.music*100)))}),i(`chk-mute`,t=>t.checked=e.muted),i(`chk-shadows`,t=>t.checked=e.shadows);let a=`${t}|${n}|${r}`;if(a===this.choiceKey)return;this.choiceKey=a;let o=$(`radio-choices`);o.textContent=``,[...H_.map((e,t)=>`${t+1}. ${e.english}`),`Off · ${U_.gurmukhi}`].forEach((e,n)=>{let r=n<H_.length?n:-1,i=document.createElement(`button`);i.type=`button`,i.textContent=e,i.setAttribute(`aria-pressed`,String(r===t)),i.addEventListener(`click`,()=>this.cb.onSetRadio(r)),o.append(i)});let s=$(`sky-choices`);s.textContent=``;for(let e of nm){let t=document.createElement(`button`);t.type=`button`,t.textContent=`${e.gurmukhi} · ${xv[e.id]}`,t.setAttribute(`aria-pressed`,String(e.id===n)),t.addEventListener(`click`,()=>this.cb.onSetSky(e.id)),s.append(t)}let c=$(`rain-choices`);c.textContent=``;for(let e of tm){let t=document.createElement(`button`);t.type=`button`,t.textContent=`${e.gurmukhi} · ${e.english}`,t.setAttribute(`aria-pressed`,String(e.level===r)),t.addEventListener(`click`,()=>this.cb.onSetRain(e.level)),c.append(t)}}setText(e,t){this.text.get(e)!==t&&(this.text.set(e,t),e.textContent=t)}update(e){if(this.lastFrame=e,e.phase===`title`)return;this.setText($(`sheaf-count`),`${e.sheaves} / ${e.sheafTotal}`),this.setText($(`coin-count`),String(e.coins));let t=$(`alert-meter`);t.dataset.level!==String(e.alert)&&(t.dataset.level=String(e.alert),t.setAttribute(`aria-label`,`Pind Alert ${e.alert} of 3`));let n=$(`mission-box`),r=e.mission;if(n.hidden=!r&&!(e.freeHopper&&e.freeHopper>0),r){this.setText($(`mission-title`),`${r.titleGurmukhi} · ${r.titleEnglish}`),this.setText($(`mission-progress`),r.progress),this.setText($(`mission-objective-gu`),r.objectiveGurmukhi),this.setText($(`mission-objective-en`),r.objectiveEnglish);let e=$(`mission-clock`);this.setText(e,r.clock===null?vv(r.elapsed):vv(r.clock)),e.dataset.low=String(r.clock!==null&&r.clock<10),this.setText($(`mission-hint`),r.hintGurmukhi?`${r.hintGurmukhi} · ${r.hintEnglish??``}`:``),this.updateTochan(r),this.updateHopper(r.harvest?r.harvest.percent:null)}else this.updateTochan(null),this.setText($(`mission-title`),`ਕੰਬਾਈਨ ਵਾਢੀ · Combine Reaping`),this.setText($(`mission-progress`),``),this.setText($(`mission-objective-gu`),`ਕਣਕ ਵਿੱਚੋਂ ਲੰਘੋ`),this.setText($(`mission-objective-en`),`Drive through standing wheat to fill the hopper`),this.setText($(`mission-clock`),``),this.setText($(`mission-hint`),``),this.updateHopper(e.freeHopper&&e.freeHopper>0?e.freeHopper:null);this.setText($(`sky-label`),xv[e.skyPreset]),this.setText($(`rain-label`),bv[e.rainLevel]),this.setText($(`cam-label`),e.cameraLabel),$(`btn-mute`).setAttribute(`aria-pressed`,String(e.muted)),this.setText($(`mute-text`),e.muted?`Unmute`:`Mute`),this.setText($(`zone-pill`),e.zoneLabel),this.setText($(`speed-value`),String(Math.round(Math.abs(e.speedKmh))));let i=$(`tach-fill`);i.style.inlineSize=`${Math.round(Math.min(1,Math.max(0,e.rpmFrac))*100)}%`,this.setText($(`vehicle-name`),e.vehicleName?`${e.vehicleName.gurmukhi} · ${e.vehicleName.english}`:`ਪੈਦਲ · On foot`);let a=e.radioIndex>=0?H_[e.radioIndex]:null;this.setText($(`radio-text`),a?`${e.radioIndex+1}. ${a.english} · ${a.frequency}`:`${U_.gurmukhi} · ${U_.english}`),$(`radio-badge`).style.setProperty(`--accent`,a?a.accent:U_.accent);let o=$(`hop-prompt`);o.hidden=!e.prompt,e.prompt&&this.setText($(`hop-text`),e.prompt.mode===`in`?`ਚੜ੍ਹੋ · Hop In — ${e.prompt.english}`:`ਉਤਰੋ · Hop Out`),this.drawMinimap(e)}updateTochan(e){let t=e?.tochan,n=$(`surge-wrap`);if(n.hidden=!t,!t)return;this.setText($(`tochan-round`),`${t.roundGurmukhi} · ${t.roundEnglish} (${t.round} / ${t.rounds})`),this.setText($(`tochan-gap`),`${t.margin>=0?`+`:``}${t.margin.toFixed(1)} / ${t.target.toFixed(0)} m`);let r=$(`surge-zone`);r.style.insetInlineStart=`${(t.zoneLo*100).toFixed(1)}%`,r.style.inlineSize=`${(Math.max(0,t.zoneHi-t.zoneLo)*100).toFixed(1)}%`,r.dataset.hot=String(t.inZone),$(`surge-needle`).style.insetInlineStart=`${(_v(t.needle)*100).toFixed(1)}%`;let i=t.target>0?_v(.5+t.margin/(2*t.target)):.5;$(`tug-fill`).style.inlineSize=`${(i*100).toFixed(1)}%`,this.setText($(`surge-text`),t.flash)}updateHopper(e){let t=$(`harvest-wrap`);if(t.hidden=e===null,e===null)return;let n=Math.round(Math.min(100,Math.max(0,e)));this.setText($(`hopper-pct`),`${n}%`),$(`hopper-fill`).style.inlineSize=`${n}%`}drawMinimap(e){let t=this.miniCtx,n=this.mini.width,r=n/2,i=n/380;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n,n),t.save(),t.beginPath(),t.arc(r,r,r,0,mv),t.clip();let a=e.player.yaw,o=-Math.PI/2-Math.atan2(-Math.cos(a),-Math.sin(a));t.translate(r,r),t.rotate(o);let s=i*pv;t.scale(s,s),t.translate(-(dv-e.player.x)/pv,-(dv-e.player.z)/pv),t.imageSmoothingEnabled=!0,t.drawImage(this.world,0,0),t.setTransform(1,0,0,1,0,0);let c=Math.cos(a),l=Math.sin(a),u=(t,n)=>{let a=t-e.player.x,o=n-e.player.z,s=a*-c+o*l,u=a*l+o*c;return[r+s*i,r-u*i]};for(let r of e.vehicles){let[e,a]=u(r.x,r.z);t.fillStyle=yv[r.kind],t.strokeStyle=`#fff`,t.lineWidth=i*.6;let o=n/210*7;t.beginPath(),t.roundRect(e-o/2,a-o/2,o,o*1.3,2),t.fill(),t.stroke()}for(let i of e.markers)this.drawMarker(t,i,u(i.x,i.z),r,n/210,!1);t.restore();let d=n/210;t.save(),t.translate(r,r),t.fillStyle=`#fffbe8`,t.strokeStyle=`#3a2310`,t.lineWidth=1.6*d,t.beginPath(),t.moveTo(0,-9*d),t.lineTo(6*d,7*d),t.lineTo(0,3.5*d),t.lineTo(-6*d,7*d),t.closePath(),t.fill(),t.stroke(),t.restore()}drawMarker(e,t,n,r,i,a){let[o,s]=n,c=Math.hypot(o-r,s-r)>r-8*i,l=!a&&c&&(t.kind===`objective`||t.kind===`start`);if(!a&&c&&!l)return;if(l){let t=Math.atan2(s-r,o-r);o=r+Math.cos(t)*(r-9*i),s=r+Math.sin(t)*(r-9*i),e.save(),e.translate(o,s),e.rotate(t),e.fillStyle=`#ffb000`,e.strokeStyle=`#3a2310`,e.lineWidth=1.4*i,e.beginPath(),e.moveTo(7*i,0),e.lineTo(-5*i,-6*i),e.lineTo(-5*i,6*i),e.closePath(),e.fill(),e.stroke(),e.restore();return}let u=a?1.7:1;switch(t.kind){case`start`:{e.fillStyle=`#ffb000`,e.strokeStyle=`#5a3a00`,e.lineWidth=1.5*i;let n=7*i*u;e.beginPath(),e.moveTo(o,s-n),e.lineTo(o+n,s),e.lineTo(o,s+n),e.lineTo(o-n,s),e.closePath(),e.fill(),e.stroke(),t.n&&(e.fillStyle=`#3a2310`,e.font=`800 ${9*i*u}px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(String(t.n),o,s+.5*i));break}case`objective`:e.fillStyle=`rgb(255 210 63 / 0.95)`,e.strokeStyle=`#7a4a00`,e.lineWidth=2*i,e.beginPath(),e.arc(o,s,6.5*i*u,0,mv),e.fill(),e.stroke();break;case`ghost`:e.strokeStyle=`#d9a441`,e.lineWidth=2*i,e.beginPath(),e.arc(o,s,5*i*u,0,mv),e.stroke();break;case`sheaf`:e.fillStyle=`#ffe36a`,e.strokeStyle=`#8a5a00`,e.lineWidth=1*i,e.beginPath(),e.arc(o,s,2.8*i*u,0,mv),e.fill(),e.stroke();break;case`truck`:e.fillStyle=`#e8590c`,e.strokeStyle=`#fff`,e.lineWidth=1.4*i,e.fillRect(o-4.5*i*u,s-4.5*i*u,9*i*u,9*i*u),e.strokeRect(o-4.5*i*u,s-4.5*i*u,9*i*u,9*i*u)}}mapX(e){return(dv-e)/uv*this.bigMap.width}mapY(e){return(dv-e)/uv*this.bigMap.height}drawBigMap(){if(!this.dialog.open)return;let e=this.bigCtx,t=this.bigMap.width,n=t/560;e.setTransform(1,0,0,1,0,0),e.imageSmoothingEnabled=!0,e.drawImage(this.world,0,0,t,t);let r=this.lastFrame;if(r){for(let t of r.vehicles)e.fillStyle=yv[t.kind],e.strokeStyle=`#fff`,e.lineWidth=1.2*n,e.beginPath(),e.arc(this.mapX(t.x),this.mapY(t.z),4*n,0,mv),e.fill(),e.stroke();for(let i of r.markers)this.drawMarker(e,i,[this.mapX(i.x),this.mapY(i.z)],t/2,n,!0)}e.textAlign=`center`,e.textBaseline=`middle`;for(let t of this.hotspots){let r=this.mapX(t.x),i=this.mapY(t.z),a=this.hover===t;e.beginPath(),e.arc(r,i,(a?13:9)*n,0,mv),e.fillStyle=a?`#ffb000`:`#fbf3df`,e.fill(),e.lineWidth=2.2*n,e.strokeStyle=`#7a5512`,e.stroke(),e.fillStyle=`#3a2310`,e.font=`800 ${(a?13:10)*n}px system-ui, sans-serif`,e.fillText(t.kind===`mission`&&t.n?String(t.n):Cv[t.kind],r,i+.5*n)}if(this.hover){let r=this.hover,i=`${r.gurmukhi} · ${r.english}`;e.font=`800 ${14*n}px "Noto Sans Gurmukhi", system-ui, sans-serif`;let a=e.measureText(i).width+18*n,o=this.mapX(r.x);o=Math.min(t-a/2-4*n,Math.max(a/2+4*n,o));let s=Math.max(20*n,this.mapY(r.z)-26*n);e.fillStyle=`rgb(251 243 223 / 0.96)`,e.strokeStyle=`#7a5512`,e.lineWidth=2*n,e.beginPath(),e.roundRect(o-a/2,s-12*n,a,24*n,8*n),e.fill(),e.stroke(),e.fillStyle=`#3a2310`,e.fillText(i,o,s+1*n)}r&&(e.save(),e.translate(this.mapX(r.player.x),this.mapY(r.player.z)),e.rotate(Math.atan2(-Math.cos(r.player.yaw),-Math.sin(r.player.yaw))+Math.PI/2),e.fillStyle=`#fffbe8`,e.strokeStyle=`#3a2310`,e.lineWidth=2*n,e.beginPath(),e.moveTo(0,-12*n),e.lineTo(8*n,9*n),e.lineTo(0,4*n),e.lineTo(-8*n,9*n),e.closePath(),e.fill(),e.stroke(),e.restore())}},Cv={motor:`M`,gurdwara:`G`,tanki:`T`,puli:`P`,dhaba:`D`,sath:`S`,toba:`W`,pind:`⌂`,mandi:`N`,akhara:`A`,khooh:`K`,mission:`★`},wv=6.5,Tv=Math.PI*2,Ev={bike:V_.bike.gu?{gurmukhi:V_.bike.gu,english:V_.bike.en}:{gurmukhi:`ਦੇਸੀ ਕਰੂਜ਼ਰ`,english:`Desi Cruiser`},tractor:{gurmukhi:V_.tractor.gu,english:V_.tractor.en},jeep:{gurmukhi:V_.jeep.gu,english:V_.jeep.en},truck:{gurmukhi:V_.truck.gu,english:V_.truck.en},sedan:{gurmukhi:V_.sedan.gu,english:V_.sedan.en},combine:{gurmukhi:V_.combine.gu,english:V_.combine.en}},Dv=()=>new Promise(e=>requestAnimationFrame(()=>e()));async function Ov(){let e=document.getElementById(`game-canvas`),t=document.getElementById(`load-note`),n=document.getElementById(`play-btn`);n.disabled=!0,t&&(t.hidden=!1);let r;try{r=new jl({canvas:e,antialias:!0,powerPreference:`high-performance`})}catch{t&&(t.textContent=`WebGL is not available in this browser · ਇਸ ਬਰਾਊਜ਼ਰ ਵਿੱਚ WebGL ਨਹੀਂ ਚੱਲ ਰਿਹਾ`);return}r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.outputColorSpace=Fe,r.toneMapping=4,r.toneMappingExposure=1.15,r.shadowMap.enabled=!0,r.shadowMap.type=1;let i=new vn,a=new Ja(65,16/9,.3,3200),o=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);r.setSize(t,n,!1),a.aspect=t/n,a.updateProjectionMatrix()};new ResizeObserver(o).observe(e),o();let s=vm(i,r);await Dv(),wf(i),await Dv();let c=Hp(i),l=em(i);await Dv();let u=Ph(i,_f),d=kg(i,_f),f=gv();await Dv();let p=new Im(_f);i.add(p.mesh.root);let m=new cu(a,_f),h=!1,g=new Pl;g.attach(e),g.setEnabled(!1);let _=new nv,v=`title`,y=null,b=0,x=0,S=0,C=_f.getZoneInfo(p.position.x,p.position.z),w=0,T=0,E=.6,D=0,O=[],k=()=>{O.length=0;for(let e of u)O.push(e);for(let e of d.getVehicleBodies())O.push(e);return O},A={boxes:[],cylinders:[]},j=(e,t)=>{for(let n=0;n<=48;n+=3){let r=n===0?1:Math.max(8,Math.round(n*.6));for(let i=0;i<r;i++){let a=i/r*Tv,o=e+Math.cos(a)*n,s=t+Math.sin(a)*n;if(!(Math.abs(o)>780||Math.abs(s)>780)&&!_f.isWater(o,s)&&(_f.queryColliders(o,s,2.2,A),!(A.cylinders.length>0||A.boxes.some(e=>!e.walkableTop))))return{x:o,z:s}}}return{x:e,z:t}},M=e=>{let t=null,n=e;for(let e of u){if(e.occupied||e.externalControl)continue;let r=Math.hypot(e.position.x-p.position.x,e.position.z-p.position.z);r<n&&(n=r,t=e)}return t},N=e=>{y=e,e.occupied=!0,e.wake(),e.headlightsOn=s.isNight(),p.enabled=!1,p.velocity.set(0,0,0),m.snap(e.yaw),_.play(`click`)},P=()=>{let e=y;if(!e)return!1;let t=ih(e,_f);return e.occupied=!1,e.wake(),y=null,p.position.set(t.x,t.y,t.z),p.velocity.set(0,0,0),p.yaw=e.yaw,p.grounded=!0,p.enabled=!0,p.setSeatedPose(null),p.setVisible(!0),p.syncMesh(),m.snap(e.yaw),!0},ee=(e,t,n=0)=>{y?(qm(y,e,t,n,_f),y.wake()):p.spawn(e,t,n),m.snap(n)},F=(e,t,n)=>{P();let r=j(e,t);p.spawn(r.x,r.z,n),m.snap(n)},I=new B_({world:_f,scene:i,freeSpot:j,spawnVehicle(e,t,n,r,a,o){let s=u.find(t=>t.id===e);if(s)return s.occupied||(qm(s,n,r,a,_f),s.wake()),s;let c=Mh(i,t,n,r,a,_f,e,{paint:o?.paint,externalControl:o?.externalControl});return u.push(c),c},removeVehicle:e=>{let t=u.findIndex(t=>t.id===e);if(t<0)return;let n=u[t];y===n&&P(),u.splice(t,1),i.remove(n.rig.root),zf(n.rig.root);for(let e of n.rig.disposables)e.dispose()},getBodies:k,teleportPlayer:F,boardVehicle(e){let t=u.find(t=>t.id===e);t&&y!==t&&(y&&P(),N(t))}}),te=[...zu.map(e=>({id:e.id,gurmukhi:e.gurmukhi,english:e.english,x:e.x,z:e.z,kind:`motor`})),...Du.map(e=>({id:e.id,gurmukhi:e.gurmukhi,english:e.english,x:e.x,z:e.z,kind:`pind`})),...[[`gurdwara`,`gurdwara`],[`sath`,`sath`],[`tanki`,`tanki`],[`toba`,`toba`],[`dhaba`,`dhaba`],[`dana-mandi`,`mandi`],[`tochan-akhara`,`akhara`],[`khooh`,`khooh`]].map(([e,t])=>{let n=Hu.find(t=>t.id===e);return{id:n.id,gurmukhi:n.gurmukhi,english:n.english,x:n.x,z:n.z,kind:t}}),...Su.map(e=>({id:e.id,gurmukhi:e.gurmukhi,english:e.english,x:e.x,z:e.z,kind:`puli`})),...i_.map(e=>{let t=I.getStartSpot(e.id)??e.start;return{id:`mission:${e.id}`,gurmukhi:`${e.number}. ${e.gurmukhi}`,english:e.english,x:t.x,z:t.z,kind:`mission`,n:e.number}})],ne=e=>{let t=te.find(t=>t.id===e);if(!t)return;L.closeDialog();let n=Su.find(t=>t.id===e),r=e.startsWith(`mission:`)?i_.find(t=>t.id===e.slice(8)):void 0;if(r){let e=I.getStartSpot(r.id)??r.start,t=e.x+5,n=e.z+5;F(t,n,Yl(e.x-t,e.z-n))}else if(n)P(),p.spawn(n.x,n.z,Yl(n.ax,n.az)),m.snap(p.yaw);else{let n=zu.find(t=>t.id===e),r=t.x+(n?6:14),i=t.z+(n?6:14);F(r,i,Yl(t.x-r,t.z-i))}_.play(`start`),L.toast(`info`,`ਚੱਲੇ ਆਂ — ${t.gurmukhi}`,`Fast travel · ${t.english}`)},re=()=>i_.map(e=>{let t=I.states.find(t=>t.missionId===e.id);return{id:e.id,number:e.number,gurmukhi:e.gurmukhi,english:e.english,briefGurmukhi:e.briefGurmukhi,briefEnglish:e.briefEnglish,reward:e.reward,status:t.status,bestTime:t.bestTime,timesDone:0,active:I.activeId===e.id}}),ie=()=>{L.setMissionCards(re()),L.setSettings({master:_.masterVolume,music:_.musicVolume,muted:_.isMuted,shadows:s.shadowsEnabled},_.stationIndex,s.preset,s.rainLevel)},L=new Sv({onPlay:()=>ae(),onOpenDialog:()=>R(),onDialogOpened:()=>{v===`playing`&&(v=`paused`),g.setEnabled(!1),g.releasePointer(),ie()},onDialogClosed:()=>{v===`paused`&&(v=`playing`),g.setEnabled(v===`playing`),g.clear()},onSky:()=>oe(),onRain:()=>ce(),onRadio:()=>ue(),onCamera:()=>de(),onMuteToggle:()=>{_.toggleMute(),ie()},onFastTravel:ne,onStartMission:e=>{I.start(e,!0)&&L.closeDialog()},onAbortMission:()=>{I.abort(),ie()},onSetSky:e=>{s.setPreset(e),ie()},onSetRain:e=>{le(e),ie()},onSetRadio:e=>{_.setRadio(e),ie()},onMasterVolume:e=>_.setMasterVolume(e),onMusicVolume:e=>_.setMusicVolume(e),onShadows:e=>s.setShadowsEnabled(e),onResetProgress:()=>{I.resetProgress(),ie(),L.toast(`info`,`ਕਮਾਈ ਮਿਟਾ ਦਿੱਤੀ`,`Progress reset`)},onUiClick:()=>_.play(`click`)},f,te);function ae(){v===`title`&&(v=`playing`,L.showTitle(!1),_.unlock(),g.setEnabled(!0),g.clear(),m.snap(p.yaw),_.play(`start`))}function R(){(v===`playing`||v===`paused`)&&L.openDialog()}function oe(){let e=s.cycle(),t=nm.find(t=>t.id===e);return L.toast(`info`,t.gurmukhi,`Sky · ${t.english}`),y&&!y.headlightsOn&&e===`night`&&(y.headlightsOn=!0),e}function se(){let e=tm[s.rainLevel];L.toast(`info`,e.gurmukhi,`Rain · ${e.english}`),L.isDialogOpen&&ie()}function ce(){let e=s.cycleRain();return se(),e}function le(e){s.setRainLevel(e),se()}function ue(){let e=_.cycleRadio(),t=e>=0?H_[e]:null;return L.toast(`info`,t?t.gurmukhi:U_.gurmukhi,t?`Radio ${e+1} · ${t.english} · ${t.frequency}`:`Radio off · ${U_.english}`),_.play(`click`),e}function de(){let e=m.cycleMode();L.toast(`info`,Zl[e].split(`·`)[0].trim(),`Camera · ${Zl[e].split(`·`)[1]?.trim()??e}`)}I.on(e=>{switch(L.toast(e.type,e.gurmukhi,e.english),e.type){case`sheaf`:_.play(`sheaf`);break;case`checkpoint`:_.play(`checkpoint`);break;case`mission-start`:_.play(`start`);break;case`complete`:_.play(`complete`);break;case`fail`:_.play(`fail`);break;case`alert`:(e.amount??0)>0&&_.play(`alert`);break;case`truck`:_.play(`thud`)}L.isDialogOpen&&ie()}),d.on(e=>{I.onLifeEvent(e),(e.type===`villager-bump`||e.type===`villager-knockdown`||e.type===`buffalo-bump`||e.type===`ai-vehicle-bump`)&&_.play(`thud`)});let fe=new W,pe=new W,me={position:fe,yaw:0,speed:0,inVehicle:!1},he=new W,ge=()=>{let e=!1,t=!1;if(g.consumeAction(`pause`)&&R(),g.consumeAction(`radio`)&&ue(),g.consumeAction(`camera`)&&de(),g.consumeAction(`time`)&&oe(),g.consumeAction(`rain`)&&ce(),g.consumeAction(`headlights`)&&y&&(y.headlightsOn=!y.headlightsOn),g.consumeAction(`enterExit`)){if(y)P();else{let e=M(wv);e&&N(e)}}return g.consumeAction(`horn`)&&(e=!0),g.consumeAction(`jump`)&&(t=!0),{horn:e,jump:t}},_e=(e,t)=>{let n=X(Math.abs(e.forwardSpeed)/e.spec.maxSpeed,0,1)*4%1;return Math.abs(e.forwardSpeed)<.6?.14+.3*t:.3+.62*n*(.8+.2*t)},ve=e=>{let t=Math.min(e,.1),n=v===`playing`,o=n;S+=o?t:0,n&&(b+=t);let f=g.poll(),x=!1,O=!1,A=0;if(n){let e=ge();if(x=e.horn,O=e.jump,y){let e=oh(f);A=Math.abs(f.moveY),Qm(y,e,t,_f,k(),s.wetness),y.hornActive=f.horn}else p.update(t,f,m.getYaw(),e.jump)}let j=s.isNight();if(y?fe.copy(y.position):fe.copy(p.position),(o||v===`title`)&&(Wh(u,t,j,_f),d.update(t,S,fe,x,{onFoot:!y,isNight:j,extraBodies:u}),l.update(t,S,j,fe),c.update(S,fe)),y){let e=y.spec;if(p.setVisible(e.showRider),e.showRider){ah(y,pe),p.position.set(pe.x,pe.y-.95,pe.z),p.yaw=y.yaw;let t=e.steerMax>0?-y.steerAngle/e.steerMax:0;p.setSeatedPose(y.kind===`bike`?`bike`:y.kind===`combine`?`combine`:`tractor`,t),p.syncMesh()}}if(v===`title`)E+=t*.045,a.position.set(0+Math.sin(E)*62,17+Math.sin(E*.7)*3,22+Math.cos(E)*62),a.fov=58,a.updateProjectionMatrix(),a.lookAt(0,4,32);else if(v===`playing`){me.inVehicle=!!y,me.boosting=f.sprint,y?(me.position=y.position,me.yaw=y.yaw,me.speed=y.forwardSpeed,me.vehicleSpec=y.spec,me.vehicleQuaternion=y.quaternion,me.shake=y.effects.dust>.1||y.effects.cropRustle>.1?.6:.15):(me.position=p.position,me.yaw=p.yaw,me.speed=p.horizontalSpeed,me.vehicleSpec=void 0,me.vehicleQuaternion=void 0,me.eye=p.getEyePosition(he),me.shake=0);let e=I.activeId===`tractor-tochan`;e&&!h&&y&&m.snap(y.yaw+.65),h=e,m.update(t,me,f),y?y.spec.showRider&&p.setVisible(!m.isFirstPerson):p.setVisible(!m.isFirstPerson)}s.update(t,a,fe);let N=_f.getSurfaceType(fe.x,fe.z,fe.y),P=y?Math.abs(y.forwardSpeed):p.horizontalSpeed;if(n&&I.update({dt:t,time:S,pos:fe,onFoot:!y,vehicle:y,surface:N,speed:P,input:{moveY:f.moveY,brake:f.brake,tap:O}}),w-=e,w<=0&&(w=.2,C=_f.getZoneInfo(fe.x,fe.z,fe.y)),_.ready){let t=0;for(let e of zu)t=Math.max(t,X(1-(Math.hypot(fe.x-e.x,fe.z-e.z)-6)/34,0,1));let r=N===`wheat`||N===`mustard`||N===`paddy`||N===`sugarcane`,i=C.id===`pind`||C.id===`phirni`||C.id===`gali`||C.id===`sath`,a={dt:e,vehicle:y?{kind:y.kind,speed:Math.abs(y.forwardSpeed),maxSpeed:y.spec.maxSpeed,throttle:n?A:0,boosting:f.sprint,skid:y.effects.skid,rustle:y.effects.cropRustle,splash:y.effects.splash}:null,foot:y?null:{speed:n?p.horizontalSpeed:0,surface:N,swimming:p.swimming,grounded:p.grounded},nightFactor:s.nightFactor,canal:X(1-(Math.abs(bu(fe.x,fe.z))-8)/55,0,1),motor:t,windiness:r?1:i?.2:.55,paused:v===`paused`,rain:s.rainIntensity,thunder:s.lightningJustFlashed,tochanStrain:I.tochanStrain};_.update(a),_.setHorn(n&&f.horn&&!!y,y?y.kind:null)}if(v!==`title`){let t=!y&&n?M(wv):null;D=y?y.speedKmh:p.horizontalSpeed*3.6;let r=y?Ev[y.kind]:null,i=u.filter(e=>e!==y&&!e.externalControl).map(e=>({x:e.position.x,z:e.position.z,kind:e.kind}));for(let e of u)e.externalControl&&i.push({x:e.position.x,z:e.position.z,kind:e.kind});let a=m.mode,o={phase:v===`paused`?`paused`:`playing`,player:{x:fe.x,z:fe.z,yaw:y?y.yaw:m.getYaw()},onFoot:!y,vehicleName:r,speedKmh:D,rpmFrac:y?_e(y,A):0,prompt:t?{mode:`in`,...Ev[t.kind]}:y&&Math.abs(y.forwardSpeed)<2.5?{mode:`out`,...Ev[y.kind]}:null,zoneLabel:C.label,alert:I.alert,sheaves:I.sheavesCollected,sheafTotal:I.sheafTotal,coins:I.coins,mission:I.getHud(),radioIndex:_.stationIndex,skyPreset:s.preset,rainLevel:s.rainLevel,freeHopper:y&&y.kind===`combine`?I.reapPercent:0,cameraMode:a,cameraLabel:(Zl[a].split(`·`)[1]??a).trim(),muted:_.isMuted,vehicles:i,markers:I.getMarkers()};L.update(o),L.isDialogOpen&&(T-=e,T<=0&&(T=.5,ie()))}r.render(i,a)};window.__GAME__={getState(){let e=y?y.position:p.position;return{phase:v,onFoot:!y,activeVehicleId:y?y.id:null,activeVehicleKind:y?y.kind:null,cameraMode:m.mode,skyPreset:s.preset,timeOfDay:s.hour(),radioIndex:_.stationIndex,zone:_f.getZoneInfo(e.x,e.z,e.y),playerPosition:{x:e.x,y:e.y,z:e.z},speedKmh:D,missions:I.states.map(e=>({...e})),activeMissionId:I.activeId,kamaai:I.coins,sheaves:I.sheavesCollected,sheafTotal:o_.length,pindAlert:I.alert,dialogOpen:L.isDialogOpen,elapsed:b,fps:x,audio:{available:_.available,ready:_.ready,muted:_.isMuted},weather:{rainLevel:s.rainLevel,rainIntensity:s.rainIntensity,wetness:s.wetness,lightningFlash:s.lightningFlash,label:s.getWeatherLabel()}}},startGame:ae,enterNearestVehicle(){if(y)return!1;let e=M(wv);return e?(N(e),!0):!1},exitVehicle:P,cycleTimeOfDay:oe,cycleRadio:ue,openPauseDialog:R,closePauseDialog:()=>L.closeDialog(),teleportTo:ee,startMission:e=>I.start(e,!1),setSkyPreset:e=>s.setPreset(e,!0),setRainLevel:le,cycleRain:ce,listVehicles:()=>u.map(e=>({id:e.id,kind:e.kind,x:e.position.x,y:e.position.y,z:e.position.z,speedKmh:e.speedKmh,occupied:e.occupied}))},L.showTitle(!0),L.setLoading(!1),L.setSettings({master:_.masterVolume,music:_.musicVolume,muted:_.isMuted,shadows:s.shadowsEnabled},_.stationIndex,s.preset,s.rainLevel);let ye=performance.now(),be=e=>{let t=(e-ye)/1e3;ye=e,t>0&&(x=x===0?1/t:x*.9+1/t*.1),ve(t),requestAnimationFrame(be)};requestAnimationFrame(be)}Ov().catch(e=>{console.error(e);let t=document.getElementById(`load-note`);t&&(t.hidden=!1,t.textContent=`Could not start: ${String(e)}`)});