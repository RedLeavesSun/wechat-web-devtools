!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=161)}({161:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=window.__WeixinJSContext||{};window.__WeixinJSContext=n;const i=window.__global;i.__contextSupport=window.__contextSupport,i._private_doGetNewWeixinJSContext=function(e,t,o,n,i,l,r,a){const d=n.__contextSupport,s=o.__devtoolsConfig,c=o.__wxConfig;n.WeixinJSBridgeMap=n.WeixinJSBridgeMap||{};let u=1;const p=()=>null==i?void 0:i.delegate,f="object"==typeof d?String(d.pathScope||"game"):"game",_=function(...e){("object"==typeof d?Boolean(d.isDev):"object"==typeof s&&Boolean((s.appConfig||{}).isDev))&&console.log(...e)};function h(e){"function"==typeof e&&("object"==typeof d?Boolean(d.isIsolateContext):"object"==typeof c&&Boolean(("object"==typeof c?c:{}).isIsolateContext))&&e.call(null)}const v=console.warn.bind(console);n.contextFrameMaps=n.contextFrameMaps||new Map;const x=n.contextFrameMaps;t.__subcontext_ready__=e=>{const t=x.get(String(e));if(t){for(const e in t.globalObject)t.iframe.contentWindow[e]=t.globalObject[e];t.setPrepared()}else v("[Context] unknown context ready",e)},t.__subcontext_ready_to_evaluate__=e=>{const t=x.get(String(e));t?t.setReady():v("[Context] unknown context eval ready",e)};const y=e=>a?`${a}_${e}`:e;class b{constructor(t,i,r,a){this.id=t,this.name=i,this.empty=r,this.creationBarrier=a,this._destroyed=!1,this._ready=!1,this._prepared=!1,this._delayedTasks=[],this._evalCounter=1,this.fullId=y(String(t)),this.iframe=n.document.createElement("iframe"),this.iframe.dataset.contextFrameId=this.fullId,this.iframe.dataset.contextFrameName=String(i);const d=y("subcontext_"+t);let s=l;l||(s=n.getNewWeixinJSBridge(d),n.WeixinJSBridgeMap[d]=l),this.globalObject={WeixinJSContext:e,__wxConfig:o.__wxConfig}}install(e){if(!this.creationBarrier)return this.doInstall(e);this.creationBarrier.wait().then(()=>{this._destroyed||this.doInstall(e)})}doInstall(e){this.iframe.src=`/${f}/${this.name}Context?id=${this.fullId}${this.empty?"&empty=true":""}${r||""}`;n.document.getElementsByTagName("body")[0].appendChild(this.iframe),null==e||e()}uninstall(){this.iframe.src="about:blank",this.iframe.remove()}throwIfDestroyed(){if(this._destroyed)throw new Error("[Context] context frame already destroyed.")}destroy(){_("[Context] destroy",this.fullId),this.creationBarrier=void 0,this._destroyed=!0,this._delayedTasks.splice(0,this._delayedTasks.length),this.uninstall(),x.delete(this.fullId)}onDidReady(e){this.throwIfDestroyed(),this._ready?e.call(null):this._delayedTasks.push(e)}setPrepared(){var e,t;this.throwIfDestroyed(),this._prepared&&v("[Context] context frame already prepared",this.fullId,this.name),this._prepared=!0,null===(t=null===(e=p())||void 0===e?void 0:e.onDidContextFramePrepared)||void 0===t||t.call(e,this)}setReady(){var e,t,o,n;this.throwIfDestroyed(),this._ready&&v("[Context] context frame already ready",this.fullId,this.name),null===(t=null===(e=p())||void 0===e?void 0:e.onWillContextFrameReady)||void 0===t||t.call(e,this),this._ready=!0;const i=[...this._delayedTasks];this._delayedTasks=[],i.forEach(e=>e.call(null)),null===(n=null===(o=p())||void 0===o?void 0:o.onDidContextFrameReady)||void 0===n||n.call(o,this)}evalScript(e,t="script",o){if(e=e.replace(/\\/g,"/").replace(/(\/){2,}/g,"/").replace(/^\/+/,""),this.throwIfDestroyed(),!this._ready)throw new Error("[Context] context frame not ready before eval scripts "+this.fullId);const i=n.document.createElement("script");i.async=!1,i.src=`/${f}/${"script"===t?"__context__":"__dev__"}/${e}`,i.dataset.evalScriptPath=e,i.dataset.evalCounter=String(this._evalCounter++);const l=()=>{!this._destroyed&&o&&o.call(null),i.onload=null,i.onerror=null};i.onload=()=>{const t=this.window.__$scriptOnLoadBarriers||{};t[e]?(t[e].onDidOpen(l),delete t[e]):l()},i.onerror=e=>{this._destroyed||console.error("[context] eval script error",this.fullId,this.name,e),i.onload=null,i.onerror=null},this.head.appendChild(i)}get window(){return this._preservedWindow||(this._preservedWindow=this.iframe.contentWindow,this._preservedWindow.__$scriptOnLoadBarriers=Object.create(null),this._preservedWindow.__$ownerHead=this._preservedWindow.document.head),this._preservedWindow}get head(){return this._preservedHeadElement||(this._preservedHeadElement=this.window.document.head),this._preservedHeadElement}}const m=function(e,t,n,i){var l,r,a,d,s;_("[Context] create",e,t,n?"has_callback":"(no callback)",Date.now(),null===(l=null==o?void 0:o.location)||void 0===l?void 0:l.href);const c=null===(a=null===(r=p())||void 0===r?void 0:r.barrierForContextFrameCreation)||void 0===a?void 0:a.call(r,e,t);null===(s=null===(d=p())||void 0===d?void 0:d.onWillCreateContextFrame)||void 0===s||s.call(d,e,t,c);const f=u++,v=new b(f,t=t||"untitledContext"+f,i,c),m=y(String(f));return x.set(m,v),v.install(()=>{var o,n;null===(n=null===(o=p())||void 0===o?void 0:o.onDidCreateContextFrame)||void 0===n||n.call(o,e,t,v)}),e?v.onDidReady(()=>{v.evalScript(e,"script",()=>{_("[Context] create callback of context id",m,"invoked"),h(n)})}):n&&v.onDidReady(()=>{_("[Context] create callback of context id",m,"invoked"),h(n)}),f},w=function(e,t,o){var n,i;_("[Context] evaluateScriptFile",e,t,o?"has_callback":"(no callback)");const l=y(String(e)),r=x.get(l);return r?(null===(i=null===(n=p())||void 0===n?void 0:n.onWillContextFrameEvaluateScriptFile)||void 0===i||i.call(n,r,t),r.onDidReady(()=>{r.evalScript(t,"script",()=>{var e,n;_("[Context] evaluateScriptFile callback of context id",r.fullId,"invoked"),null===(n=null===(e=p())||void 0===e?void 0:e.onDidContextFrameEvaluateScriptFile)||void 0===n||n.call(e,r,t),h(o)})}),1):(v(`[Context] context frame not found for id ${e} (${l})`),0)},C=function(e,t,o){var n,i;_("[Context] evaluateLibFile",e,t,o?"has_callback":"(no callback)");const l=y(String(e)),r=x.get(l);return r?(null===(i=null===(n=p())||void 0===n?void 0:n.onWillContextFrameEvaluateScriptFile)||void 0===i||i.call(n,r,t),r.onDidReady(()=>{r.evalScript(t,"lib",()=>{var e,n;_("[Context] evaluateLibFile callback of context id",r.fullId,"invoked"),null===(n=null===(e=p())||void 0===e?void 0:e.onDidContextFrameEvaluateScriptFile)||void 0===n||n.call(e,r,t),h(o)})}),1):(v(`[Context] context frame not found for id ${e} (${l})`),0)};e.alloc=function(e,t){return _("[Context] alloc",e,t?"has_callback":"(no callback)"),m(void 0,e,t)},e.allocEmpty=function(e,t){return _("[Context] allocEmpty",e,t?"has_callback":"(no callback)"),m(void 0,e,t,!0)},e.create=m,e.evaluateScriptFile=w,e.loadJsFiles=function(e,t,o){const n=JSON.parse(t);_("[Context] loadJsFiles",e,n,o?"has_callback":"(no callback)");let i=0,l=!1;const r=()=>{i++,i!==n.length||l||null==o||o()};for(const t of n){const o=w(e,t,r);if(0===o)return l=!0,o}return 1},e.loadLibFiles=function(e,t,o){const n=JSON.parse(t);_("[Context] loadLibFiles",e,n,o?"has_callback":"(no callback)");let i=0,l=!1;const r=()=>{i++,i!==n.length||l||null==o||o()};for(const t of n){const o=C(e,t,r);if(0===o)return l=!0,o}return 1},e.destroy=function(e,t){var o,n;const i=y(String(e));_("[Context] destroy",i,t?"has_callback":"(no callback)");const l=x.get(i);l&&(null===(n=null===(o=p())||void 0===o?void 0:o.onWillContextFrameDestroy)||void 0===n||n.call(o,l),x.delete(i),l.destroy(),_("[Context] destroy callback of context id",l.fullId,"invoked"),h(t))}},i._private_doGetNewWeixinJSContext(n,window,window,i,i.__contextSupport,void 0,"",""),i.__getNewWeixinJSContext=function(e){const t=e||{},o=t.obj||{};return i._private_doGetNewWeixinJSContext(o,window,t.window||window,i,t.scopedContextSupport||i.__contextSupport,t.bridge,t.locationHash,t.parentId),t.obj||new Proxy(o,{get:(e,t)=>e[t],set:(e,t,o)=>e[t]=o,getPrototypeOf:()=>t.ObjectPrototype||Object.prototype})}}});