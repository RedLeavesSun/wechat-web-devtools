!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=155)}({155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(156),i=n(158),s=n(159),r=n(160);window.WeixinJSBridge={on:o.default,invoke:i.default,publish:s.default,subscribe:r.default}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(44),i={};o.default.registerCallback(e=>{const{command:t,data:n}=e;"WEBVIEW_ON_EVENT"===t&&function(e,t){const n=i[e];"function"==typeof n&&n(t)}(n.eventName,n.data)}),t.default=function(e,t){t&&(i[e]=t)}},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=navigator.userAgent,i=o.match(/gamenativeview\/([^\s]*)/);t.webviewID=i?i[1]:"";const s=-1!==o.indexOf("Android"),r=-1!==o.indexOf("iPhone"),a=-1!==o.indexOf("weapp");t.default={isAndroid:s,isiPhone:r,webviewID:t.webviewID,isWeapp:a}},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(44),i={};let s=1;o.default.registerCallback(e=>{const{command:t,data:n}=e;if("WEBVIEW_INVOKE_CALLBACK"===t){const e=n.callbackID,t=i[e];"function"==typeof t&&t(n.res),delete i[e]}}),t.default=function(e,t,n){const r=s++;i[r]=n,o.default.send({command:"WEBVIEW_INVOKE",data:{api:e,args:t,callbackID:r}})}},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(44);t.default=function(e,t){o.default.send({command:"WEBVIEW_PUBLISH",data:{eventName:e,data:t}})}},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(44),i={};o.default.registerCallback(e=>{const{command:t,data:n}=e;"APPSERVICE_PUBLISH"===t&&function(e,t){console.error(arguments);const n=i[e];"function"==typeof n&&n(t)}(n.eventName,n.data)}),t.default=function(e,t){i[e]=t}},2:function(e,t,n){"use strict";const o=window.navigator||window.__global.navigator,i=window.WebSocket||window.__global.WebSocket,s=window.prompt||window.__global.prompt,r=o.userAgent.match(/port\/(\d*)/),a=r?parseInt(r[1]):9974,c="ws://127.0.0.1:"+a;window.__maxConnectTryTime=10;e.exports=class{constructor(e,t=!0){this._protocol=e,this._needToken=t,this._ws=null,this._msgQueue=[],this._callback=new Set,this._parseJson=null,this.tryTime=0,"complete"===document.readyState?setTimeout(()=>{this.connect()}):window.addEventListener("load",()=>{this.connect()})}connect(){if(!a)return;if(this.tryTime++,this.tryTime>=window.__maxConnectTryTime)return void console.error("当前应用通道断开且重连次数已满，请重新编译应用");let e=this._protocol;if(this._needToken){e=`${e}#${s("GET_MESSAGE_TOKEN")}#`}this._ws=new i(c,e),this._ws.onopen=()=>{const e=[].concat(this._msgQueue);this._msgQueue=[],e.forEach(e=>{this.send(e)})},this._ws.onclose=()=>{this._ws=null,setTimeout(()=>{this.connect()},150)},this._ws.onmessage=e=>{try{const t=this._parseJson?this._parseJson(e.data):JSON.parse(e.data);this._callback.forEach(e=>{try{e.call(this,t)}catch(e){}})}catch(e){}}}send(e){this._ws&&this._ws.readyState===i.OPEN?this._ws.send(JSON.stringify(e)):this._msgQueue.push(e)}registerCallback(e){"function"==typeof e&&this._callback.add(e)}removeCallback(e){this._callback.delete(e)}}},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(157),i=n(2);let s;const r=()=>{if(s)return s;const e="GAMENATIVEVIEW_"+o.webviewID;return s=new i(e),s};t.default={send(e){const t=r();e.fromWebviewID=o.webviewID,t.send(e)},registerCallback(e){r().registerCallback(e)}}}});