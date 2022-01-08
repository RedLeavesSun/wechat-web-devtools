import*as Common from"../common/common.js";import*as Host from"../host/host.js";let zoomManagerInstance;export class ZoomManager extends Common.ObjectWrapper.ObjectWrapper{constructor(o,t){super(),this._frontendHost=t,this._zoomFactor=this._frontendHost.zoomFactor(),o.addEventListener("resize",this._onWindowResize.bind(this),!0)}static instance(o={forceNew:null,win:null,frontendHost:null}){const{forceNew:t,win:n,frontendHost:e}=o;if(!zoomManagerInstance||t){if(!n||!e)throw new Error("Unable to create zoom manager: window and frontendHost must be provided: "+(new Error).stack);zoomManagerInstance=new ZoomManager(n,e)}return zoomManagerInstance}zoomFactor(){return this._zoomFactor}cssToDIP(o){return o*this._zoomFactor}dipToCSS(o){return o/this._zoomFactor}_onWindowResize(){const o=this._zoomFactor;this._zoomFactor=this._frontendHost.zoomFactor(),o!==this._zoomFactor&&this.dispatchEventToListeners(Events.ZoomChanged,{from:o,to:this._zoomFactor})}}export const Events={ZoomChanged:Symbol("ZoomChanged")};