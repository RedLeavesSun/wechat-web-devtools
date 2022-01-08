import*as Common from"../common/common.js";import*as TextUtils from"../text_utils/text_utils.js";import{ResourceSourceFrame}from"./ResourceSourceFrame.js";export class BinaryResourceViewFactory{constructor(e,t,r){this._base64content=e,this._contentUrl=t,this._resourceType=r,this._arrayPromise=null,this._hexPromise=null,this._utf8Promise=null}async _fetchContentAsArray(){return this._arrayPromise||(this._arrayPromise=new Promise(async e=>{const t=await fetch("data:;base64,"+this._base64content);e(new Uint8Array(await t.arrayBuffer()))})),await this._arrayPromise}async hex(){return this._hexPromise||(this._hexPromise=new Promise(async e=>{const t=await this._fetchContentAsArray();e({content:BinaryResourceViewFactory.uint8ArrayToHexString(t),isEncoded:!1})})),this._hexPromise}async base64(){return{content:this._base64content,isEncoded:!0}}async utf8(){return this._utf8Promise||(this._utf8Promise=new Promise(async e=>{const t=await this._fetchContentAsArray();e({content:new TextDecoder("utf8").decode(t),isEncoded:!1})})),this._utf8Promise}createBase64View(){return new ResourceSourceFrame(TextUtils.StaticContentProvider.StaticContentProvider.fromString(this._contentUrl,this._resourceType,this._base64content),!1,{lineNumbers:!1,lineWrapping:!0})}createHexView(){const e=new TextUtils.StaticContentProvider.StaticContentProvider(this._contentUrl,this._resourceType,async()=>{const e=await this._fetchContentAsArray();return{content:BinaryResourceViewFactory.uint8ArrayToHexViewer(e),isEncoded:!1}});return new ResourceSourceFrame(e,!1,{lineNumbers:!1,lineWrapping:!1})}createUtf8View(){const e=this.utf8.bind(this),t=new TextUtils.StaticContentProvider.StaticContentProvider(this._contentUrl,this._resourceType,e);return new ResourceSourceFrame(t,!1,{lineNumbers:!0,lineWrapping:!0})}static uint8ArrayToHexString(e){let t="";for(let r=0;r<e.length;r++)t+=BinaryResourceViewFactory.numberToHex(e[r],2);return t}static numberToHex(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}static uint8ArrayToHexViewer(e){let t="",r=0;for(;16*r<e.length;){const n=e.slice(16*r,16*(r+1));t+=BinaryResourceViewFactory.numberToHex(r,8)+":";let i=0;for(let e=0;e<n.length;e++)e%2==0&&(t+=" ",i++),t+=BinaryResourceViewFactory.numberToHex(n[e],2),i+=2;for(;i<42;)t+=" ",i++;for(let e=0;e<n.length;e++){const r=n[e];t+=r>=32&&r<=126?String.fromCharCode(r):"."}t+="\n",r++}return t}}