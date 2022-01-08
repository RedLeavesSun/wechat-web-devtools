import{NetworkItemView,Tabs}from"./NetworkItemView.js";import{NetworkDataGridNode}from"./network.js";import{RequestCloudExplainView}from"./RequestCloudExplainView.js";import{safeGet}from"../third_party/licia.js";import*as SDK from"../sdk/sdk.js";import*as Common from"../common/common.js";if(wxMain.isFeatureEnabled("cloudExplainTab")){class e{constructor(){const e=wxMain.getMessenger();e.registerCallback(async e=>{const{command:t,data:s}=e;if("GET_INDEX_SUGGESTION_CALLBACK"===t){const e=this._requestIdMap.get(s.requestId);e&&(e._indexSuggestions=s.errMsg?{errMsg:s.errMsg}:{suggestions:safeGet(s.indexSuggestions,"perfect")||[]},e.dispatchEventToListeners(SDK.NetworkRequest.Events.IndexSuggestionAdded))}else if("GET_EXPLAIN_RESULT_CALLBACK"===t){const e=this._requestIdMap.get(s.requestId);e&&(e._explainResult=s.errMsg?{errMsg:s.errMsg}:{parsedObject:s.explainResult,sourceText:JSON.stringify(s.explainResult)},e.dispatchEventToListeners(SDK.NetworkRequest.Events.ExplainResultAdded))}}),this._messenger=e,this._requestIdMap=new Map,this.supportedRequestUrls=new Set(["http://db.collection.where.get","http://db.collection.update","http://db.collection.where.count","http://db.collection.aggregate","http://db.collection.remove"])}getExplainResult=async e=>{safeGet(e,"_ext.operateWXDataProtocolData")&&(this._requestIdMap.set(e.requestId(),e),this._messenger.send({command:"GET_EXPLAIN_RESULT",data:{requestId:e.requestId(),from:"miniprogram",input:e._ext.operateWXDataProtocolData}}))};getIndexSuggestion=async e=>{safeGet(e,"_ext.operateWXDataProtocolData")&&(this._requestIdMap.set(e.requestId(),e),this._messenger.send({command:"GET_INDEX_SUGGESTION",data:{requestId:e.requestId(),from:"miniprogram",input:e._ext.operateWXDataProtocolData}}))}}let t;function getExplainTabController(){return t||(t=new e),t}const s=NetworkItemView.prototype.wasShown;function addCloudExplainTab(e){if(e.cloudExplainTab)return;const t=e._request;if("cloud"===t.resourceType().name()&&t.url().startsWith("http://db")){const s=getExplainTabController();if(s.supportedRequestUrls.has(t.url())){const a={getExplainResult:s.getExplainResult,getIndexSuggestion:s.getIndexSuggestion};Tabs.CloudExplain="CloudExplain",SDK.NetworkRequest.Events.IndexSuggestionAdded="IndexSuggestionAdded",SDK.NetworkRequest.Events.ExplainResultAdded="ExplainResultAdded",e.appendTab(Tabs.CloudExplain,Common.UIString.UIString("Explain"),new RequestCloudExplainView(t,a),Common.UIString.UIString("CloudBase Database Query Explain"))}}e.cloudExplainTab=!0}NetworkItemView.prototype.wasShown=function(){addCloudExplainTab(this),s.call(this)}}function addWxLocalDebugLabel(){NetworkDataGridNode.NetworkRequestNode.prototype._renderPrimaryCell=function(e,t,s){if(0===this.dataGrid.indexOfVisibleColumn(t)){const t=this.leftPadding?this.leftPadding+"px":"";let s;if(e.style.setProperty("padding-left",t),this._nameCell=e,e.addEventListener("dblclick",this._openInNewTab.bind(this),!1),e.addEventListener("click",()=>{this.parentView().dispatchEventToListeners(NetworkDataGridNode.Events.RequestActivated,{showPanel:!0})}),this._request.resourceType()===Common.ResourceType.resourceTypes.Image){const e=document.createElement("img");e.classList.add("image-network-icon-preview"),e.alt=this._request.resourceType().title(),this._request.populateImageSource(e),s=document.createElement("div"),s.classList.add("icon"),s.appendChild(e)}else s=document.createElement("img"),s.classList.add("icon"),s.alt=this._request.resourceType().title();s.classList.add(this._request.resourceType().name()),e.appendChild(s)}if("name"===t){let t=this._request.name().trimMiddle(100);this._request.requestHeaders().length&&this._request.requestHeaders().some(e=>"X-WX-LOCAL-DEBUG"===e.name.toUpperCase())&&(t="⭐ "+t);const s=SDK.NetworkManager.NetworkManager.forRequest(this._request);e.createTextChild(s?s.target().decorateLabel(t):t),this._appendSubtitle(e,this._request.path()),e.title=this._request.url()}else s&&(e.createTextChild(s),e.title=s)}}addWxLocalDebugLabel();