!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=164)}({164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(38);!function(e){e.__wxtag={sendMessage:(e,t)=>{o.default.send({command:"IFRAME_TO_JSCORE",data:{comptName:e,message:t}})}}}(self)},2:function(e,t,n){"use strict";const o=window.navigator||window.__global.navigator,r=window.WebSocket||window.__global.WebSocket,s=window.prompt||window.__global.prompt,i=o.userAgent.match(/port\/(\d*)/),a=i?parseInt(i[1]):9974,c="ws://127.0.0.1:"+a;window.__maxConnectTryTime=10;e.exports=class{constructor(e,t=!0){this._protocol=e,this._needToken=t,this._ws=null,this._msgQueue=[],this._callback=new Set,this._parseJson=null,this.tryTime=0,"complete"===document.readyState?setTimeout(()=>{this.connect()}):window.addEventListener("load",()=>{this.connect()})}connect(){if(!a)return;if(this.tryTime++,this.tryTime>=window.__maxConnectTryTime)return void console.error("当前应用通道断开且重连次数已满，请重新编译应用");let e=this._protocol;if(this._needToken){e=`${e}#${s("GET_MESSAGE_TOKEN")}#`}this._ws=new r(c,e),this._ws.onopen=()=>{const e=[].concat(this._msgQueue);this._msgQueue=[],e.forEach(e=>{this.send(e)})},this._ws.onclose=()=>{this._ws=null,setTimeout(()=>{this.connect()},150)},this._ws.onmessage=e=>{try{const t=this._parseJson?this._parseJson(e.data):JSON.parse(e.data);this._callback.forEach(e=>{try{e.call(this,t)}catch(e){}})}catch(e){}}}send(e){this._ws&&this._ws.readyState===r.OPEN?this._ws.send(JSON.stringify(e)):this._msgQueue.push(e)}registerCallback(e){"function"==typeof e&&this._callback.add(e)}removeCallback(e){this._callback.delete(e)}}},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=navigator.userAgent.match(/webview\/([\w]*)/),s=r?r[1]:"",i=`${Date.now()}${Math.floor(1e4*Math.random())}`;let a;const c=()=>{if(a)return a;return a=new o("JSCOREWEBVIEW_"+i),a};t.default={send(e){e.webviewID=s,e.runtimeID=i;c().send(e)},registerCallback(e){c().registerCallback(e)}}}});