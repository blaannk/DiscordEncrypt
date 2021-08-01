// Paste this code inside discord.com console
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){console.log("error noblock"); return "";}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

var DecryptMsg = 1;
var WhiteListChannel = 0;
var WhiteListChannelAll = "";
var isLaunch = 0;

function encrypt(message = '', key = ''){
	let encJson = CryptoJS.AES.encrypt(JSON.stringify(message), key).toString();
	// base64 encrypted data processing principles: first is utf8 string into a character array, then converted to base64 data
	return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson));
}

function decrypt(message = '', key = ''){
	if(DecryptMsg == 0){return "";}
	let decData = CryptoJS.enc.Base64.parse(message).toString(CryptoJS.enc.Utf8);
	// decrypt data
	var result = CryptoJS.AES.decrypt(decData, key).toString(CryptoJS.enc.Utf8);
	if((result != undefined) && (result != null)){
		var result = result.substring(1, result.length-1);
		return result;
	}else{
		return "";
	}
	
	
}

var keyCrypt = "";
var EncryptMsg = 1;

function launchXHR(){
	isLaunch = 1;
	(function(XHR) {
		"use strict";

		var open = XHR.prototype.open;
		var send = XHR.prototype.send;

		XHR.prototype.open = function(method, url, async, user, pass) {
			this._url = url;
			open.call(this, method, url, async, user, pass);
		};

		XHR.prototype.send = function(data) {
			var self = this;
			var oldOnReadyStateChange;
			var url = this._url;
			var method = this.__sentry_xhr__.method;

			function onReadyStateChange() {
				if(self.readyState == 4 /* complete */) {
					//
				}

				if(oldOnReadyStateChange) {
					oldOnReadyStateChange();
				}
			}

			/* Set xhr.noIntercept to true to disable the interceptor for a particular call */
			if(!this.noIntercept) {
				if(this.addEventListener) {
					this.addEventListener("readystatechange", onReadyStateChange, false);
				} else {
					oldOnReadyStateChange = this.onreadystatechange; 
					this.onreadystatechange = onReadyStateChange;
				}
			}
			if((url.includes("messages")) && (!url.includes("messages/"))) {
				var passIf = 1
				if(WhiteListChannel == 1){
					
					// https://discord.com/api/v9/channels/838409695382601748/messages
					var decoupeLink = url.substring(36,54);
					console.log(decoupeLink)
					if(WhiteListChannelAll.includes(decoupeLink)){
						passIf = 1
					}else{
						passIf = 0
					}
				}
				
				if(passIf == 1){
					if((method == "POST") && (EncryptMsg == 1))  {
						if(data){
							if(typeof data === 'string' || data instanceof String){
								if(data != "") {
									// console.log(data)
									if (data.includes("content")) {
										var datadict = JSON.parse(data);
										datadict['content'] = encrypt(datadict['content'], keyCrypt)
										data = JSON.stringify(datadict);
									}
								}
							}
						}
					}
				}
			}
			send.call(this, data);
		}
	})(XMLHttpRequest);

}

(function () {
	
	
	var FenParam = `
	<section class="positionContainer-DEuh7X"><div class="drawerSizingWrapper-17Mss4" style="width: 424px;">
		<div class="contentWrapper-SvZHNd" style="display: block;padding: 0% 3%;">
			<center style="color:#00b0f4;font-size:150%">Encrypt Discord Messages</center>
			<br>
			<div style="padding: 2% 0%;">
				<label style="color:#00b0f4;padding: 2% 0%;display: block;">mot de passe du chiffrement </label>
				<input id="KeyInput" name="pass" size="40">
				<button style="color:#fff;background:#7289da;border:0;border-radius:4px;font-size:14px;" id="validEncrypt">valider</button>
			</div>
			<div class="labelRow-16e77k" style="padding: 2% 0%;">
				<label for="uid_88" class="title-31JmR4">Chiffrer vos messages</label>
					<div class="control-2BBjec">
						<div class="container-3auIfb" tabindex="-1" id="UnactiveEncryptDiv" style="opacity: 1; background-color: hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%);">
							<svg id="UnactiveEncryptSvg" class="slider-TkfMQL" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style="left: 12px;">
								<rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
								<svg viewBox="0 0 20 20" fill="none">
									<path id="UnactiveEncryptPath1" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"></path>
									<path id="UnactiveEncryptPath2" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"></path>
								</svg>
							</svg>
							<button id="UnactiveEncrypt" type="checkbox" class="input-rwLH4i" tabindex="0" checked=""></button>
						</div>
					</div>
				</div>
			<div class="labelRow-16e77k" style="padding: 2% 0%;">
				<label for="uid_88" class="title-31JmR4">Déchiffrer les messages</label>
					<div class="control-2BBjec">
						<div class="container-3auIfb" tabindex="-1" id="UnactiveDecryptDiv" style="opacity: 1; background-color: hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%);">
							<svg id="UnactiveDecryptSvg" class="slider-TkfMQL" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style="left: 12px;">
								<rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
								<svg viewBox="0 0 20 20" fill="none">
									<path id="UnactiveDecryptPath1" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"></path>
									<path id="UnactiveDecryptPath2" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"></path>
								</svg>
							</svg>
							<button id="UnactiveDecrypt" type="checkbox" class="input-rwLH4i" tabindex="0" checked=""></button>
						</div>
					</div>
				</div>
			<div class="labelRow-16e77k" style="padding: 4% 0%;">
				<label for="uid_88" class="title-31JmR4">Whitelist channel ID</label>
					<div class="control-2BBjec">
						<div class="container-3auIfb" tabindex="-1" id="WhitelistEncryptDiv" style="opacity: 1; background-color: hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%);">
							<svg id="WhitelistEncryptSvg" class="slider-TkfMQL" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style="left: -3px;">
								<rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
								<svg viewBox="0 0 20 20" fill="none">
									<path id="WhitelistEncryptPath1" fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)" d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z"></path>
									<path id="WhitelistEncryptPath2" fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)" d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"></path>
								</svg>
							</svg>
							<button id="WhitelistEncrypt" type="checkbox" class="input-rwLH4i" tabindex="0" checked=""></button>
						</div>
					</div>
				</div>
				<textarea type="text" id="WhitelistValue" class="inputDefault-_djjkz input-cIJ7To textArea-1Lj-Ns scrollbarDefault-3COgCQ scrollbar-3dvm_9" placeholder="861956263331889153;161456264231889153" rows="4" style="padding-right: 3px;">​​​</textarea>
				<button style="color:#fff;background:#7289da;border:0;border-radius:4px;font-size:14px;" id="validWhitelistValue">valider</button>
				
				<footer>
					<p style="color:#00b0f4;font-size:70%">© 2021 NoHook | <a href="https://discord.gg/2ryBcFpX" target="_blank">discord</a> | <a href="https://selkis.online" target="_blank">selkis</a> | made by zorm#0101 & 0xBlank#0001</p>
				</footer>
			</div>
		</div>
	</div>
</div>
	</section>`
	
	var PopupApp = document.getElementsByClassName("layerContainer-yqaFcK")[1];
	elePopupApp = document.createElement("div");
	elePopupApp.setAttribute("id", "EncryptPopup")
	elePopupApp.className = "positionLayer-1KzSAt layer-v9HyYc"
	elePopupApp.style = "position: absolute; right: 256px; bottom: 76px;display: none;"
	elePopupApp.innerHTML = FenParam
	PopupApp.parentNode.insertBefore(elePopupApp, PopupApp.previousSibling);
		
	const $ = s => document.querySelector(s);
	var EncryptBtn = $('button#validEncrypt');
	var validWhitelistValueBtn = $('button#validWhitelistValue');
	var UnactiveEncryptBtn = $('button#UnactiveEncrypt');
	var UnactiveDecryptBtn = $('button#UnactiveDecrypt');
	var WhitelistEncryptBtn = $('button#WhitelistEncrypt');
	
	
	EncryptBtn.onclick = async e => {
		keyCrypt = document.getElementById("KeyInput").value;
		console.log(keyCrypt);
		var PopupCheckElem2 = document.querySelector("#EncryptMod");
		if(PopupCheckElem2 != undefined){
			PopupCheckElem2.remove()
			// console.log("changement de channel");
			setTimeout(function(){checkAll();}, 100);
		}
		
	}
	
	
	validWhitelistValueBtn.onclick = async e => {
		WhiteListChannelAll = document.getElementById("WhitelistValue").value;
		console.log(WhiteListChannelAll);
		var PopupCheckElem2 = document.querySelector("#EncryptMod");
		if(PopupCheckElem2 != undefined){
			PopupCheckElem2.remove()
			// console.log("changement de channel");
			setTimeout(function(){checkAll();}, 100);
		}
	}
	
	//désactive l'encryptage des données
	UnactiveEncryptBtn.onclick = async e => {
		if(EncryptMsg == 1){
			var UnactiveEncryptDiv = document.getElementById("UnactiveEncryptDiv");
			UnactiveEncryptDiv.setAttribute("style", "opacity: 1; background-color: hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%);");
			
			var UnactiveEncryptSvg = document.getElementById("UnactiveEncryptSvg");
			UnactiveEncryptSvg.setAttribute("style", "left: -3px;");

			var UnactiveEncryptPath1 = document.getElementById("UnactiveEncryptPath1");
			UnactiveEncryptPath1.setAttribute("fill", "hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)")
			UnactiveEncryptPath1.setAttribute("d", "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z")
			
			var UnactiveEncryptPath2 = document.getElementById("UnactiveEncryptPath2");
			UnactiveEncryptPath2.setAttribute("fill", "hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)")
			UnactiveEncryptPath2.setAttribute("d", "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z")
			EncryptMsg = 0;
			
			document.getElementsByClassName("scrollableContainer-2NUZem")[0].classList.remove("borderUHQ");
		}else{
			var UnactiveEncryptDiv = document.getElementById("UnactiveEncryptDiv");
			UnactiveEncryptDiv.setAttribute("style", "opacity: 1; background-color: hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%);");
			
			var UnactiveEncryptSvg = document.getElementById("UnactiveEncryptSvg");
			UnactiveEncryptSvg.setAttribute("style", "left: 12px;");

			var UnactiveEncryptPath1 = document.getElementById("UnactiveEncryptPath1");
			UnactiveEncryptPath1.setAttribute("fill", "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)")
			UnactiveEncryptPath1.setAttribute("d", "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z")
			
			var UnactiveEncryptPath2 = document.getElementById("UnactiveEncryptPath2");
			UnactiveEncryptPath2.setAttribute("fill", "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)")
			UnactiveEncryptPath2.setAttribute("d", "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z")
			EncryptMsg = 1;
			
			document.getElementsByClassName("scrollableContainer-2NUZem")[0].classList.add("borderUHQ");
		}
	}
	
	//désactive Decryptage des données
	UnactiveDecryptBtn.onclick = async e => {
		if(DecryptMsg == 1){
			var UnactiveDecryptDiv = document.getElementById("UnactiveDecryptDiv");
			UnactiveDecryptDiv.setAttribute("style", "opacity: 1; background-color: hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%);");
			
			var UnactiveDecryptSvg = document.getElementById("UnactiveDecryptSvg");
			UnactiveDecryptSvg.setAttribute("style", "left: -3px;");

			var UnactiveDecryptPath1 = document.getElementById("UnactiveDecryptPath1");
			UnactiveDecryptPath1.setAttribute("fill", "hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)")
			UnactiveDecryptPath1.setAttribute("d", "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z")
			
			var UnactiveDecryptPath2 = document.getElementById("UnactiveDecryptPath2");
			UnactiveDecryptPath2.setAttribute("fill", "hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)")
			UnactiveDecryptPath2.setAttribute("d", "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z")
			DecryptMsg = 0;
			
		}else{
			var UnactiveDecryptDiv = document.getElementById("UnactiveDecryptDiv");
			UnactiveDecryptDiv.setAttribute("style", "opacity: 1; background-color: hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%);");
			
			var UnactiveDecryptSvg = document.getElementById("UnactiveDecryptSvg");
			UnactiveDecryptSvg.setAttribute("style", "left: 12px;");

			var UnactiveDecryptPath1 = document.getElementById("UnactiveDecryptPath1");
			UnactiveDecryptPath1.setAttribute("fill", "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)")
			UnactiveDecryptPath1.setAttribute("d", "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z")
			
			var UnactiveDecryptPath2 = document.getElementById("UnactiveDecryptPath2");
			UnactiveDecryptPath2.setAttribute("fill", "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)")
			UnactiveDecryptPath2.setAttribute("d", "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z")
			DecryptMsg = 1;
		}
	}
	
	
	//Whiltelist cryptage des données
	WhitelistEncryptBtn.onclick = async e => {
		if(WhiteListChannel == 1){
			var WhitelistEncryptDiv = document.getElementById("WhitelistEncryptDiv");
			WhitelistEncryptDiv.setAttribute("style", "opacity: 1; background-color: hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%);");
			
			var WhitelistEncryptSvg = document.getElementById("WhitelistEncryptSvg");
			WhitelistEncryptSvg.setAttribute("style", "left: -3px;");

			var WhitelistEncryptPath1 = document.getElementById("WhitelistEncryptPath1");
			WhitelistEncryptPath1.setAttribute("fill", "hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)")
			WhitelistEncryptPath1.setAttribute("d", "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z")
			
			var WhitelistEncryptPath2 = document.getElementById("WhitelistEncryptPath2");
			WhitelistEncryptPath2.setAttribute("fill", "hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)")
			WhitelistEncryptPath2.setAttribute("d", "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z")
			WhiteListChannel = 0;
			
		}else{
			var WhitelistEncryptDiv = document.getElementById("WhitelistEncryptDiv");
			WhitelistEncryptDiv.setAttribute("style", "opacity: 1; background-color: hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%);");
			
			var WhitelistEncryptSvg = document.getElementById("WhitelistEncryptSvg");
			WhitelistEncryptSvg.setAttribute("style", "left: 12px;");

			var WhitelistEncryptPath1 = document.getElementById("WhitelistEncryptPath1");
			WhitelistEncryptPath1.setAttribute("fill", "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)")
			WhitelistEncryptPath1.setAttribute("d", "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z")
			
			var WhitelistEncryptPath2 = document.getElementById("WhitelistEncryptPath2");
			WhitelistEncryptPath2.setAttribute("fill", "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)")
			WhitelistEncryptPath2.setAttribute("d", "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z")
			WhiteListChannel = 1;
		}
	}
	
	checkAll();
	
	// Listen for click events on body
	document.body.addEventListener('click', function (event) {
		
		var PopupCheckElem2 = document.querySelector("#EncryptMod");
	
		var PopupCheckElem1 = document.querySelector('#EncryptPopup');
		var PopupCheckElem2 = document.querySelector("#EncryptMod");
		if((PopupCheckElem1 != undefined) && (PopupCheckElem1 != null) && (PopupCheckElem2 != undefined) && (PopupCheckElem2 != null)){
			if (PopupCheckElem1.contains(event.target) || (PopupCheckElem2.contains(event.target))) {
				
			} else {
				document.getElementById("EncryptPopup").style.display = 'none';
			}			
		}
		
		
	});
	
})();


function checkAllTime(){

	var PopupCheckElem = document.querySelector("#EncryptMod");
	
	if(PopupCheckElem == undefined){
		console.log("burp")
		document.getElementById("EncryptPopup").style.display = 'none';
		setTimeout(function(){checkAll()}, 100);
	}
	
	setTimeout(checkAllTime, 800);

}
checkAllTime()

function checkAll(){
	
	if(isLaunch == 0){
		launchXHR();
	}
	
	var node2 = document.getElementsByClassName("emojiButtonNormal-TdumYh")[0];
	if(node2 == undefined){console.log("Aucune barre de dialogue trouvé");return;}
	if(document.getElementsByClassName("scrollerInner-2YIMLh")[0] != undefined){mutationFunc()}else{console.log("Aucun chat de dialogue trouvé");return;}
	ele2 = document.createElement("div");
	ele2.setAttribute("id", "EncryptPopupButton")
	ele2.className = "buttonContainer-28fw2U EncryptPopupButtonCls"
	ele2.innerHTML = `<button aria-label="Ouvrir le mod" tabindex="0" type="button" id="EncryptMod" class="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"><div class="contents-18-Yxp button-3AYNKb button-318s1X stickerButton-3OEgwj"><div class="buttonWrapper-1ZmCpA" id="children" style="opacity: 1; transform: none;"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="24" height="24" viewBox="0 0 401.998 401.998" style="enable-background:new 0 0 401.998 401.998;"
	 xml:space="preserve">
<g>
	<path d="M357.45,190.721c-5.331-5.33-11.8-7.993-19.417-7.993h-9.131v-54.821c0-35.022-12.559-65.093-37.685-90.218
		C266.093,12.563,236.025,0,200.998,0c-35.026,0-65.1,12.563-90.222,37.688C85.65,62.814,73.091,92.884,73.091,127.907v54.821
		h-9.135c-7.611,0-14.084,2.663-19.414,7.993c-5.33,5.326-7.994,11.799-7.994,19.417V374.59c0,7.611,2.665,14.086,7.994,19.417
		c5.33,5.325,11.803,7.991,19.414,7.991H338.04c7.617,0,14.085-2.663,19.417-7.991c5.325-5.331,7.994-11.806,7.994-19.417V210.135
		C365.455,202.523,362.782,196.051,357.45,190.721z M274.087,182.728H127.909v-54.821c0-20.175,7.139-37.402,21.414-51.675
		c14.277-14.275,31.501-21.411,51.678-21.411c20.179,0,37.399,7.135,51.677,21.411c14.271,14.272,21.409,31.5,21.409,51.675V182.728
		z"/>
</g>
</svg></div></div></button>`;
	node2.parentNode.insertBefore(ele2, node2.previousSibling);
	
	
	
	var nodeBorderHQ = document.getElementsByClassName("scrollableContainer-2NUZem")[0];
	if(nodeBorderHQ == undefined){console.log("Aucune barre de dialogue trouvé");return;}
	if(document.getElementsByClassName("scrollableContainer-2NUZem")[0] != undefined){mutationFunc()}else{console.log("Aucun chat de dialogue trouvé");return;}
	eleBorderHQ = document.createElement("style");
	eleBorderHQ.innerHTML = `.borderUHQ {border:3px solid black;overflow:hidden;border-radius:5px;border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 4s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%237E1FC4' /%3E%3Cstop offset='25%25' stop-color='%2350297D' /%3E%3Cstop offset='50%25' stop-color='%237B28DB' /%3E%3Cstop offset='100%25' stop-color='%23680FA9' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1;}`;
	nodeBorderHQ.parentNode.insertBefore(eleBorderHQ, nodeBorderHQ.previousSibling);
	
	if(EncryptMsg == 1){
		nodeBorderHQ.classList.add("borderUHQ");
	}
	
	const $ = s => document.querySelector(s);
	var EncryptModBtn = $('button#EncryptMod');
	
	EncryptModBtn.onclick = async e => {
		document.getElementById("EncryptPopup").style.display = '';
	}
	
	for(let elementDiv of document.getElementsByClassName("scrollerInner-2YIMLh")[0].children) {
		var msgbody = elementDiv.children[0]
		if((msgbody != undefined) && (msgbody != null)){
			if((msgbody.lastChild != undefined) && (msgbody.lastChild != null)){
				var MsgValue = msgbody.lastChild.innerHTML
				if(MsgValue != undefined){
					if((MsgValue.length > 6) && (MsgValue.slice(-1) == "=")){
						// console.log(MsgValue +" => " + base64regex.test(MsgValue))
						if(base64regex.test(MsgValue)){
							var msgDecrypt = decrypt(msgbody.lastChild.innerHTML, keyCrypt)
							if(msgDecrypt != ""){
								msgbody.lastChild.style = "background: -webkit-linear-gradient(#ae35ea, #bc52f2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
								msgbody.lastChild.innerHTML = msgDecrypt
							}
						}
					}
				}
			}
		}
	}
	
	if(document.getElementsByClassName("EncryptPopupButtonCls").length > 2){document.getElementsByClassName("EncryptPopupButtonCls")[1].remove()}

}

function mutationFunc(){
	var mutationObserver = new MutationObserver(function(mutations) {
		for(let mutation of mutations) {
		  
			for(let node of mutation.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;
				// console.log(node);
				if(node.classList.contains("message-2qnXI6")){
					var msgbody = node.children[0]
					var MsgValue = msgbody.lastChild.innerHTML
					if((MsgValue.length > 6) && (MsgValue.slice(-1) == "=")){
						// console.log(MsgValue +" => " + base64regex.test(MsgValue))
						var msgDecrypt = decrypt(msgbody.lastChild.innerHTML, keyCrypt)
						msgbody.lastChild.style = "background: -webkit-linear-gradient(#ae35ea, #bc52f2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
						msgbody.lastChild.innerHTML = msgDecrypt
					}
				}
			}
		}
	});
	
	mutationObserver.observe(document.getElementsByClassName("scrollerInner-2YIMLh")[0], {
	  childList: true,
	  subtree: true
	});

}
