"use strict";window.g_aKk=class{constructor(c,a){this.g_aqU=c,this.g_aKl=a,this.g_aKm=!1,this.g_aKn=()=>this.g_KM()}g_aKo(){}g_aKp(e,a,b,c){this.g_aqU.g_aKq(this.g_aKl,e,a,b,c)}g_aKr(e,a,b,c){return this.g_aqU.g_aKs(this.g_aKl,e,a,b,c)}g_aKt(d,a,b){this.g_aqU.g_aKu()?this.g_aKp(d,a,b):this.g_aqU.g_aKv()._OnMessageFromDOM({type:"event",component:this.g_aKl,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aKw(c,a){this.g_aqU.g_aKx(this.g_aKl,c,a)}g_aKy(d){for(const[a,b]of d)this.g_aKw(a,b)}g_aKz(){return this.g_aqU}g_aKA(){return this.g_aKl}g_adZ(){this.g_aKm||(this.g_aqU.g_aKB(this.g_aKn),this.g_aKm=!0)}g_adK(){this.g_aKm&&(this.g_aqU.g_aKC(this.g_aKn),this.g_aKm=!1)}g_KM(){}},window.g_mM=class{constructor(c,a){this.g_lv=c,this.g_mN=a,this.g_mP=-1,this.g_mQ=-Infinity,this.g_mR=()=>this.g_mS(),this.g_mT=!1,this.g_mU=!1}g_mW(b){this.g_mU=!!b}g_m_(){if(-1===this.g_mP){const d=Date.now(),a=d-this.g_mQ,b=this.g_mN;a>=b&&this.g_mU?(this.g_mQ=d,this.g_m$()):this.g_mP=self.setTimeout(this.g_mR,Math.max(b-a,4))}}g_m$(){this.g_mT=!0,this.g_lv(),this.g_mT=!1}g_lz(){this.g_mT||(this.g_na(),this.g_mQ=Date.now())}g_mS(){this.g_mP=-1,this.g_mQ=Date.now(),this.g_m$()}g_na(){-1!==this.g_mP&&(self.clearTimeout(this.g_mP),this.g_mP=-1)}g_ek(){this.g_na(),this.g_lv=null,this.g_mR=null}},"use strict",window.g_aKD=class extends g_aKk{constructor(c,a){super(c,a),this.g_aKE=new Map,this.g_aKF=!0,this.g_aKw("create",b=>this.g_aKG(b)),this.g_aKw("destroy",b=>this.g_aKH(b)),this.g_aKw("set-visible",b=>this.g_aKI(b)),this.g_aKw("update-position",b=>this.g_aKJ(b)),this.g_aKw("update-state",b=>this.g_aKK(b)),this.g_aKw("focus",b=>this.g_aKL(b)),this.g_aKw("set-css-style",b=>this.g_aKM(b))}g_aKN(b){this.g_aKF=!!b}g_aKO(c,e){this.g_aKw(c,b=>{const a=b.elementId,c=this.g_aKE.get(a);return e(c,b)})}g_aKG(d){const a=d.elementId,b=this.g_aex(a,d);this.g_aKE.set(a,b),d.isVisible||(b.style.display="none"),this.g_aKF&&document.body.appendChild(b)}g_aex(){throw new Error("required override")}g_aKP(){}g_aKH(d){const a=d.elementId,b=this.g_aKE.get(a);this.g_aKP(b),this.g_aKF&&b.parentElement.removeChild(b),this.g_aKE.delete(a)}g_aKQ(d,a,b){b||(b={}),b.elementId=a,this.g_aKp(d,b)}g_aKR(d,a,b){b||(b={}),b.elementId=a,this.g_aKt(d,b)}g_aKI(c){if(this.g_aKF){const a=this.g_aKE.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aKJ(d){if(this.g_aKF){const a=this.g_aKE.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aKK(c){const a=this.g_aKE.get(c.elementId);this.g_aKS(a,c)}g_aKS(){throw new Error("required override")}g_aKL(c){const a=this.g_aKE.get(c.elementId);c.focus?a.focus():a.blur()}g_aKM(c){const a=this.g_aKE.get(c.elementId);a.style[c.prop]=c.val}g_aKT(b){return this.g_aKE.get(b)}},"use strict";{function p(e){if(e.g_aKU){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aKV=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aKW=class c{constructor(c){this.g_aKX=c.g_aKY,this.g_aKZ=null,this.g_aoP="",this.g_aK_=c.g_aK$,this.g_aLa={},this.g_aLb=null,this.g_aLc=null,this.g_aLd=[],this.g_aLe=null,this.g_amQ=null,this.g_aqO=null,this.g_anx=-1,this.g_aLf=()=>this.g_aLg(),this.g_aLh=[],this.g_aoU=c.g_aLi,b(this.g_aoU)&&this.g_aKX&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aKX=!1),this.g_aLj=!1,this.g_aLk=null,this.g_aLl=null,("html5"===this.g_aoU||"playable-ad"===this.g_aoU)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aKx("runtime","cordova-fetch-local-file",b=>this.g_aLm(b)),this.g_aKx("runtime","create-job-worker",b=>this.g_aLn(b)),"cordova"===this.g_aoU?document.addEventListener("deviceready",()=>this.g_acN(c)):this.g_acN(c)}g_ek(){this.g_arL(),this.g_aKZ&&(this.g_aKZ.onmessage=null,this.g_aKZ=null),this.g_aLb&&(this.g_aLb.terminate(),this.g_aLb=null),this.g_aLc&&(this.g_aLc.g_ek(),this.g_aLc=null),this.g_amQ&&(this.g_amQ.parentElement.removeChild(this.g_amQ),this.g_amQ=null)}g_aLo(){return this.g_amQ}g_fe(){return this.g_aoP}g_aKu(){return this.g_aKX}g_asy(){return this.g_aoU}g_arl(){return a&&"cordova"===this.g_aoU}g_asz(){return a&&b(this.g_aoU)}async g_acN(d){if("playable-ad"===this.g_aoU){this.g_aLk=self.c3_base64files,this.g_aLl={},await this.g_aLp();for(let a=0,b=d.g_aLq.length;a<b;++a){const b=d.g_aLq[a].toLowerCase();this.g_aLl.hasOwnProperty(b)?d.g_aLq[a]={g_aKU:!0,g_C:this.g_aLl[b]}:this.g_aLk.hasOwnProperty(b)&&(d.g_aLq[a]=URL.createObjectURL(this.g_aLk[b]))}}if(d.g_aLr)this.g_aoP=d.g_aLr;else{const c=location.origin;this.g_aoP=("null"===c?"file:///":c)+location.pathname;const a=this.g_aoP.lastIndexOf("/");-1!==a&&(this.g_aoP=this.g_aoP.substr(0,a+1))}if(d.g_aLs)for(const[a,b]of Object.entries(d.g_aLs))this.g_aLa[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aKZ=a.port1,this.g_aKZ.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aLt(b)),this.g_aqO=new self.g_aLu(this),await this.g_aqO.g_ajY(),this.g_aLv(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aLw(),this.g_aKX?await this.g_aLx(d,a.port2):await this.g_aLy(d,a.port2)}g_aLz(b){return this.g_aLa.hasOwnProperty(b)?this.g_aLa[b]:b.endsWith("/workermain.js")&&this.g_aLa.hasOwnProperty("workermain.js")?this.g_aLa["workermain.js"]:"playable-ad"===this.g_aoU&&this.g_aLk.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aLk[b.toLowerCase()]):b}async g_aLA(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arl()){const a=await this.g_BK(this.g_aK_+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aLv(){if(this.g_asz()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aLB(b){return{baseUrl:this.g_aoP,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoa(),projectData:b.g_aLC,previewImageBlobs:window.cr_previewImageBlobs||this.g_aLk,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aLi,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aLD,jobScheduler:this.g_aqO.g_aLE(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aK_+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aK_+"opus.wasm.wasm",isiOSCordova:this.g_arl(),isiOSWebView:this.g_asz(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aLx(e,a){const b=this.g_aLz(e.g_aLF);this.g_aLb=await this.g_aLA(b,this.g_aoP,{name:"Runtime"}),this.g_amQ=document.createElement("canvas"),this.g_amQ.style.display="none";const c=this.g_amQ.transferControlToOffscreen();document.body.appendChild(this.g_amQ),window.c3canvas=this.g_amQ,this.g_aLb.postMessage(Object.assign(this.g_aLB(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aLG||[],engineScripts:e.g_aLq,projectScripts:window.g_aLH,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_aqO.g_aLI()]),this.g_aLd=g.map(b=>new b(this)),this.g_aLJ(),self.c3_callFunction=(c,a)=>this.g_aLe.g_Vd(c,a),"preview"===this.g_aoU&&(self.goToLastErrorScript=()=>this.g_aKq("runtime","go-to-last-error-script"))}async g_aLy(a,b){this.g_amQ=document.createElement("canvas"),this.g_amQ.style.display="none",document.body.appendChild(this.g_amQ),window.c3canvas=this.g_amQ,this.g_aLd=g.map(b=>new b(this)),this.g_aLJ();const c=a.g_aLq.map(b=>"string"==typeof b?new URL(b,this.g_aoP).toString():b);if(Array.isArray(a.g_aLG)&&c.unshift(...a.g_aLG),await Promise.all(c.map(a=>p(a))),a.g_aLK&&0<a.g_aLK.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aLK.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aLL(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aLL(b),100)}}if("preview"===this.g_aoU&&"object"!=typeof self.g_aO.g_aKj)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aLB(a),{isInWorker:!1,messagePort:b,canvas:this.g_amQ,runOnStartupFunctions:k});this.g_aLc=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aLc,d)}g_aLL(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aLn(){const b=await this.g_aqO.g_aLM();return{outputPort:b,transferables:[b]}}g_aKv(){if(this.g_aKX)throw new Error("not available in worker mode");return this.g_aLc}g_aKq(f,a,b,c,d){this.g_aKZ.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aLj?void 0:d)}g_aKs(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aKZ.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aLj?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aLN(c);else if("result"===a)this.g_aLO(c);else if("runtime-ready"===a)this.g_aLP();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aLN(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aLQ(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aLQ(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aLQ(c,!1,d.toString())}):this.g_aLQ(c,!0,f))}g_aLQ(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aKZ.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aLO(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aKx(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aLR(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aLJ(){for(const b of this.g_aLd)if("runtime"===b.g_aKA())return void(this.g_aLe=b);throw new Error("cannot find runtime DOM handler")}g_aLt(b){this.g_aKq("debugger","message",b)}g_aLP(){for(const b of this.g_aLd)b.g_aKo()}static g_aoa(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aLS(){return await this.g_aKs("runtime","get-remote-preview-status-info")}g_aKB(b){this.g_aLh.push(b),this.g_arK()}g_aKC(c){const a=this.g_aLh.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aLh.splice(a,1),this.g_aLh.length||this.g_arL()}g_arK(){-1===this.g_anx&&this.g_aLh.length&&(this.g_anx=requestAnimationFrame(this.g_aLf))}g_arL(){-1!==this.g_anx&&(cancelAnimationFrame(this.g_anx),this.g_anx=-1)}g_aLg(){this.g_anx=-1;for(const b of this.g_aLh)b();this.g_arK()}g_aLT(b){this.g_aLe.g_aLT(b)}g_aLU(b){this.g_aLe.g_aLU(b)}g_aLV(){this.g_aLe.g_aLV()}g_aLW(b){this.g_aLe.g_aLW(b)}g_Cf(b){return!!d[b]}async g_afT(c){const a=await this.g_aKs("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fW(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fX(b){return!this.g_fW(b)}async g_aLm(c){const a=c.filename;switch(c.as){case"text":return await this.g_BL(a);case"buffer":return await this.g_BK(a);default:throw new Error("unsupported type");}}g_aLX(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aLY(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aLZ(e){const a=this.g_aLX();return new Promise((b,c)=>a.checkPermission(this.g_aLY(a,e),c=>b(!!c.hasPermission),c))}g_azm(e){const a=this.g_aLX();return new Promise((b,c)=>a.requestPermission(this.g_aLY(a,e),c=>b(!!c.hasPermission),c))}async g_aL_(c){if("cordova"!==this.g_asy())return!0;if(this.g_arl())return!0;for(const d of c){const b=await this.g_aLZ(d);if(b)continue;const a=await this.g_azm(d);if(!1===a)return!1}return!0}async g_aL$(...b){if(!1===(await this.g_aL_(b)))throw new Error("Permission not granted")}g_aMa(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BL(b){const a=await this.g_aMa(b);return await q(a)}g_aMb(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aMc(b.filename,b.g_aMd,b.g_aMe)}}g_BK(d){return new Promise((g,b)=>{e.push({filename:d,g_aMd:b=>{f--,this.g_aMb(),g(b)},g_aMe:c=>{f--,this.g_aMb(),b(c)}}),this.g_aMb()})}async g_aMc(c,a,b){try{const b=await this.g_aMa(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aLp(){const d=[];for(const[a,b]of Object.entries(this.g_aLk))d.push(this.g_aMf(a,b));await Promise.all(d)}async g_aMf(d,a){if("object"==typeof a)this.g_aLk[d]=new Blob([a.str],{type:a.type}),this.g_aLl[d]=a.str;else{let b=await this.g_aMg(a);b||(b=this.g_aMh(a)),this.g_aLk[d]=b}}async g_aMg(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aMh(c){const a=this.g_aMi(c);return this.g_aMj(a.data,a.g_gn)}g_aMi(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gn:e,data:h}}g_aMj(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aLw(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aLj=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aKk{constructor(d){super(d,"runtime"),this.g_aMk=!0,this.g_aMl=-1,this.g_aMm="any",this.g_aMn=!1,this.g_aMo=!1,this.g_aMp=null,this.g_aMq=null,this.g_aMr=null,d.g_aKx("canvas","update-size",b=>this.g_aMs(b)),d.g_aKx("runtime","invoke-download",b=>this.g_aMt(b)),d.g_aKx("runtime","raster-svg-image",b=>this.g_aMu(b)),d.g_aKx("runtime","get-svg-image-size",b=>this.g_aMv(b)),d.g_aKx("runtime","set-target-orientation",b=>this.g_aMw(b)),d.g_aKx("runtime","register-sw",()=>this.g_aMx()),d.g_aKx("runtime","post-to-debugger",b=>this.g_aMy(b)),d.g_aKx("runtime","go-to-script",b=>this.g_aMy(b)),d.g_aKx("runtime","before-start-ticking",()=>this.g_aMz()),d.g_aKx("runtime","debug-highlight",b=>this.g_aMA(b)),d.g_aKx("runtime","enable-device-orientation",()=>this.g_aMB()),d.g_aKx("runtime","enable-device-motion",()=>this.g_aMC()),d.g_aKx("runtime","add-stylesheet",b=>this.g_aMD(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aLo();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aME=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_anO()),d.g_asz()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aMF=new Set,this.g_aMG=new WeakSet,this.g_aMH=!1}g_aMz(){return"cordova"===this.g_aqU.g_asy()?(document.addEventListener("pause",()=>this.g_aqQ(!0)),document.addEventListener("resume",()=>this.g_aqQ(!1))):document.addEventListener("visibilitychange",()=>this.g_aqQ(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aKo(){window.addEventListener("focus",()=>this.g_aMI("window-focus")),window.addEventListener("blur",()=>{this.g_aMI("window-blur",{parentHasFocus:b()}),this.g_aME=0}),window.addEventListener("fullscreenchange",()=>this.g_anP()),window.addEventListener("webkitfullscreenchange",()=>this.g_anP()),window.addEventListener("mozfullscreenchange",()=>this.g_anP()),window.addEventListener("fullscreenerror",b=>this.g_anQ(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_anQ(b)),window.addEventListener("mozfullscreenerror",b=>this.g_anQ(b)),window.addEventListener("keydown",b=>this.g_aMJ("keydown",b)),window.addEventListener("keyup",b=>this.g_aMJ("keyup",b)),window.addEventListener("dblclick",b=>this.g_aMK("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aML("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aMM("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aMM("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aMM("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aMN("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aMN("pointermove",b)),window.addEventListener("touchend",b=>this.g_aMN("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aMN("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aMO("pointerdown",b)),this.g_aqU.g_aKu()&&"undefined"!=typeof window.onpointerrawupdate?(this.g_aMq=new g_mM(()=>this.g_aMP(),5),this.g_aMq.g_mW(!0),window.addEventListener("pointerrawupdate",b=>this.g_aMQ(b))):window.addEventListener("pointermove",b=>this.g_aMO("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aMO("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aMO("pointercancel",b)));const c=()=>this.g_aLV();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aMI(c,a){this.g_aKp(c,a||null,k)}g_aMR(){return Math.max(window.innerWidth,1)}g_aMS(){return Math.max(window.innerHeight,1)}g_anO(){const c=this.g_aMR(),a=this.g_aMS();this.g_aMI("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_aqU.g_asz()&&(-1!==this.g_aMl&&clearTimeout(this.g_aMl),this.g_aMT(c,a,0))}g_aMU(d,a,b){-1!==this.g_aMl&&clearTimeout(this.g_aMl),this.g_aMl=setTimeout(()=>this.g_aMT(d,a,b),48)}g_aMT(f,a,b){const c=this.g_aMR(),d=this.g_aMS();this.g_aMl=-1,c!=f||d!=a?this.g_aMI("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aMU(c,d,b+1)}g_aMw(b){this.g_aMm=b.targetOrientation}g_aMV(){const c=this.g_aMm;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_anP(){const b=g_aKW.g_aoa();b&&"any"!==this.g_aMm&&this.g_aMV(),this.g_aKp("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aMR(),innerHeight:this.g_aMS()})}g_anQ(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aKp("fullscreenerror",{isFullscreen:g_aKW.g_aoa(),innerWidth:this.g_aMR(),innerHeight:this.g_aMS()})}g_aqQ(b){b?this.g_aqU.g_arL():this.g_aqU.g_arK(),this.g_aKp("visibilitychange",{hidden:b})}g_aMJ(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aKt(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aML(c,a){this.g_aKp(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aMK(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aKt(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aMM(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aME;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aKt(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aME=e.buttons,this.g_aMK(e.type,e,j)}}g_aMO(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aMq&&"pointermove"!==d&&this.g_aMq.g_lz();let b=0;if("mouse"===a.pointerType&&(b=this.g_aME),this.g_aKt(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aMK(b,a,j),this.g_aME=a.buttons}}g_aMQ(b){this.g_aMr=b,this.g_aMq.g_m_()}g_aMP(){this.g_aMO("pointermove",this.g_aMr),this.g_aMr=null}g_aMN(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aKt(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aMB(){this.g_aMn||(this.g_aMn=!0,window.addEventListener("deviceorientation",b=>this.g_azK(b)))}g_aMC(){this.g_aMo||(this.g_aMo=!0,window.addEventListener("devicemotion",b=>this.g_azL(b)))}g_azK(b){this.g_aKp("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_azL(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aKp("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aMs(d){const a=this.g_aKz(),b=a.g_aLo();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aLv(),this.g_aMk&&(b.style.display="",this.g_aMk=!1)}g_aMt(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aMu(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aMv(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aMD(b){await t(b.url)}g_aLV(){const c=[...this.g_aMF];if(this.g_aMF.clear(),!this.g_aMH)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aMG.has(d)||this.g_aMF.add(d)})}}g_aLT(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aMG.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aMF.add(c)}a&&a.catch(()=>{this.g_aMG.has(c)||this.g_aMF.add(c)})}g_aLU(b){this.g_aMF.delete(b),this.g_aMG.add(b)}g_aLW(b){this.g_aMH=!!b}g_aMA(d){const a=d.show;if(!a)return void(this.g_aMp&&(this.g_aMp.style.display="none"));this.g_aMp||(this.g_aMp=document.createElement("div"),this.g_aMp.id="inspectOutline",document.body.appendChild(this.g_aMp));const b=this.g_aMp;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aMx(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aMy(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vd(c,a){return this.g_aKr("js-invoke-function",{name:c,params:a})}};g_aKW.g_aLR(n)}{const c=document.currentScript.src;self.g_aLu=class{constructor(a){this.g_aMW=a,this.g_aoP=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atf=Math.min(navigator.hardwareConcurrency||2,16),this.g_aMX=null,this.g_aMY=[],this.g_atd=null,this.g_aMZ=null}async g_ajY(){if(this.g_aM_)throw new Error("already initialised");this.g_aM_=!0;const c=this.g_aMW.g_aLz("dispatchworker.js");this.g_aMX=await this.g_aMW.g_aLA(c,this.g_aoP,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atd=a.port1,this.g_aMX.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aMZ=await this.g_aLM()}async g_aLM(){const f=this.g_aMY.length,a=this.g_aMW.g_aLz("jobworker.js"),b=await this.g_aMW.g_aLA(a,this.g_aoP,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aMX.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aMY.push(b),d.port1}g_aLE(){return{inputPort:this.g_atd,outputPort:this.g_aMZ,maxNumWorkers:this.g_atf}}g_aLI(){return[this.g_atd,this.g_aMZ]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aKW({g_aKY:!1,g_aLF:"workermain.js",g_aLq:["scripts/c3runtime.js"],g_aK$:"scripts/",g_aLG:[],g_aLi:"html5"})}{const b=class extends g_aKk{constructor(b){super(b,"touch"),this.g_aKw("request-permission",b=>this.g_aM$(b))}async g_aM$(d){const a=d.type;let b=!0;0===a?b=await this.g_aNa():1===a&&(b=await this.g_aNb()),this.g_aKp("permission-result",{type:a,result:b})}async g_aNa(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aNb(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aKW.g_aLR(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aKD{constructor(b){super(b,"text-input"),this.g_aKO("scroll-to-bottom",b=>this.g_aNc(b))}g_aex(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aKR("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aKR("dblclick",b)}),d.addEventListener("input",()=>this.g_aKQ("change",b,{text:d.value})),d.id=c.id,this.g_aKS(d,c),d}g_aKS(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck}g_aNc(b){b.scrollTop=b.scrollHeight}};g_aKW.g_aLR(b)}{function g(b){b.stopPropagation()}const a=class extends g_aKD{constructor(b){super(b,"button")}g_aex(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.userSelect="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_aKR("click",a,{isChecked:c.checked})),c.id=b.id,this.g_aKS(e,b),e}g_aNd(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_aKS(d,a){const b=this.g_aNd(d);b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_aKW.g_aLR(a)}{const b=class extends g_aKk{constructor(b){super(b,"browser"),this.g_aoU="",this.g_aKw("get-initial-state",b=>this.g_aNe(b)),this.g_aKw("ready-for-sw-messages",()=>this.g_aNf()),this.g_aKw("alert",b=>this.g_aNg(b)),this.g_aKw("close",()=>this.g_aNh()),this.g_aKw("set-focus",b=>this.g_aKL(b)),this.g_aKw("vibrate",b=>this.g_aNi(b)),this.g_aKw("lock-orientation",b=>this.g_aNj(b)),this.g_aKw("unlock-orientation",()=>this.g_aNk()),this.g_aKw("navigate",b=>this.g_aNl(b)),this.g_aKw("request-fullscreen",b=>this.g_aNm(b)),this.g_aKw("exit-fullscreen",()=>this.g_aNn()),window.addEventListener("online",()=>this.g_aDA(!0)),window.addEventListener("offline",()=>this.g_aDA(!1)),document.addEventListener("backbutton",()=>this.g_aNo()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_aNp(b))}g_aNe(b){return this.g_aoU=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_aNf(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aKp("sw-message",b.data))}g_aDA(b){this.g_aKp("online-state",{isOnline:b})}g_aNo(){this.g_aKp("backbutton")}g_aNp(b){b.handled=!0,this.g_aKp("backbutton")}g_aNq(){return"nwjs"===this.g_aoU?nw.Window.get():null}g_aNg(b){alert(b.message)}g_aNh(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aKL(c){const d=c.isFocus;if("nwjs"===this.g_aoU){const b=this.g_aNq();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_aNi(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aNj(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aNk(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_aNl(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_aNr();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_aDz&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aNm(e){const a={navigationUI:"auto"},b=e.navUI;1===b?a.navigationUI="hide":2===b&&(a.navigationUI="show");const c=document.documentElement;c.requestFullscreen?c.requestFullscreen(a):c.mozRequestFullScreen?c.mozRequestFullScreen(a):c.msRequestFullscreen?c.msRequestFullscreen(a):c.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?c.webkitRequestFullScreen():c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_aNn(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_aKW.g_aLR(b)}{const b=class extends g_aKk{constructor(b){super(b,"mouse"),this.g_aKw("cursor",b=>this.g_aNs(b))}g_aNs(b){document.body.style.cursor=b}};g_aKW.g_aLR(b)}