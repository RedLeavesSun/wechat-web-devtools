!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=162)}({162:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(49),o=t(50);(e=>{const r={};let t=1;const a=new __global.SharedArrayBuffer(1048576),s=new Int32Array(a),i=__global.Atomics,c=new Map,u=e=>{var t,a;if(e.data)switch(e.data.type){case n.INativeWorkerOnMessageType.WeixinWorkerInvoke:switch(e.data.method){case"postMsgToAppService":(null===(t=e.data.arguments)||void 0===t?void 0:t.length)&&WeixinWorker.workerMsgHandler&&WeixinWorker.workerMsgHandler.apply(WeixinWorker,e.data.arguments);break;case"postMsgToWorker":(null===(a=e.data.arguments)||void 0===a?void 0:a.length)&&__global.WeixinWorker.postMsgToWorker.apply(__global.WeixinWorker,e.data.arguments);break;case"invokeJS":if(e.data.api){const{api:t,args:a={},__workerId__:c}=e.data;__global.WeixinJSBridge.invoke(t,a,e=>{if(o.isSyncSDK(t)){const r=o.str2Int32Array(JSON.stringify(o.coverRes(e)));i.store(s,1,r.length);for(let e=0;e<r.length;e++)i.store(s,2+e,r[e]);i.store(s,0,1),i.notify(s,0,1)}else{const a=r[c];if(a){const r=o.coverRes(e);a.postMessage({type:n.INativeWorkerPushMessageType.InvokeJS,data:r,api:t})}}})}}}};__global.WeixinJSBridge.on("triggerWorkerEvent",(e,t)=>{Object.values(r).forEach(r=>{(c.get(r)||[]).includes(e)&&r.postMessage({type:n.INativeWorkerPushMessageType.TriggerOnEvent,eventName:e,data:o.coverRes(t)})})}),e.terminate=e=>{const t=r[e];t&&(t.terminate(),delete r[e])},e.postMsgToWorker=(e,t)=>{const o=r[e];if(o)try{"string"==typeof t&&(t=JSON.parse(t)),o.postMessage({type:n.INativeWorkerPushMessageType.TriggerOnMessage,msg:t})}catch(r){console.error("post msg to worker err: [workerId] ",e," [msg] ",t)}},e.create=(e,o={})=>{const s=new __global.Worker("__WORKER__/worker.js");return r[t]=s,s.onmessage=u,c.set(s,o.APIList||[]),s.postMessage({type:n.INativeWorkerPushMessageType.InitWorker,__workerId__:t,options:o,sab:a}),t++}})(WeixinWorker)},49:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e){e[e.Run=0]="Run",e[e.InitWorker=1]="InitWorker",e[e.TriggerOnMessage=2]="TriggerOnMessage",e[e.InvokeJS=3]="InvokeJS",e[e.TriggerOnEvent=4]="TriggerOnEvent"}(r.INativeWorkerPushMessageType||(r.INativeWorkerPushMessageType={})),function(e){e.WeixinWorkerInvoke="WeixinWorkerInvoke"}(r.INativeWorkerOnMessageType||(r.INativeWorkerOnMessageType={}))},50:function(e,r,t){"use strict";function n(e){return new Int32Array(e).reduce((e,r)=>e+String.fromCharCode(r),"")}function o(e){let r="";const t=new Uint8Array(e),n=t.byteLength;for(let e=0;e<n;e++)r+=String.fromCharCode(t[e]);return __global.btoa(r)}Object.defineProperty(r,"__esModule",{value:!0}),r.ab2str=n,r.str2ab=function(e){const r=new ArrayBuffer(4*e.length),t=new Int32Array(r);for(let r=0,n=e.length;r<n;r++)t[r]=e.charCodeAt(r);return r},r.str2Int32Array=function(e){const r=new ArrayBuffer(4*e.length),t=new Int32Array(r);for(let r=0,n=e.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.int32Array2Str=function(e,r,t=1){const o=e.load(r,1),a=new ArrayBuffer(4*o),s=new Int32Array(a);for(let n=t;n<o+t;n++){const o=e.load(r,n);s[n-t]=o}return n(a)},r.arrayBufferToBase64=o;const a={getSystemInfo:!0,getBackgroundAudioState:!0,setBackgroundAudioState:!0,operateBackgroundAudio:!0,createRequestTask:!0,createUploadTask:!0,createDownloadTask:!0,createSocketTask:!0,operateSocketTask:!0,createAudioInstance:!0,unlink:!0};r.isSyncSDK=function(e){return!!a[e]||/Sync$/.test(e)},r.coverRes=function(e){for(const t in e)if(r=e[t],"[object ArrayBuffer]"===Object.prototype.toString.call(r)){const r=o(e[t]);e.__nativeBuffers__=[{key:t,base64:r}],delete e[t]}var r;return e}}});