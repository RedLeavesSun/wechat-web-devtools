import{RequestHeadersView,Category as RequestHeadersViewCategory}from"./RequestHeadersView.js";import*as Common from"../common/common.js";import*as UI from"../ui/ui.js";export class RequestCloudExplainView extends RequestHeadersView{constructor(e,t){super(e),this.registerRequiredCSS("network/requestExplainView.css"),this._apis=t,this.element.innerHTML="";const s=new UI.TreeOutline.TreeOutlineInShadow;s.registerRequiredCSS("object_ui/objectValue.css"),s.registerRequiredCSS("object_ui/objectPropertiesSection.css"),s.registerRequiredCSS("network/requestHeadersTree.css"),s.element.classList.add("request-headers-tree"),s.makeDense(),this.element.appendChild(s.element);const i=new Category(s,"indexSuggestion",Common.UIString.UIString("Index Suggestion"));i.hidden=!1,this._root=i,this._indexSuggestionCategory=i,this._explainCategory=new Category(s,"explain",Common.UIString.UIString("Explain CloudBase Query"))}wasShown(){this._clearHighlight(),this._request.addEventListener(SDK.NetworkRequest.Events.IndexSuggestionAdded,this._refreshIndexSuggestion,this),this._request.addEventListener(SDK.NetworkRequest.Events.ExplainResultAdded,this._refreshExplain,this),this._request.addEventListener(SDK.NetworkRequest.Events.FinishedLoading,this._refreshExplain,this),this._refreshIndexSuggestion(),this._refreshExplain(),this._root.select(!0,!1)}willHide(){this._request.removeEventListener(SDK.NetworkRequest.Events.IndexSuggestionAdded,this._refreshIndexSuggestion,this),this._request.removeEventListener(SDK.NetworkRequest.Events.ExplainResultAdded,this._refreshExplain,this),this._request.removeEventListener(SDK.NetworkRequest.Events.FinishedLoading,this._refreshExplain,this)}_formatHeader(e,t){const s=createDocumentFragment();return s.createChild("div","header-name").textContent=e+(t?": ":""),s.createChild("span","header-separator"),s.createChild("div","header-value source-code").textContent=t,s}_refreshIndexSuggestion(){const e=this._indexSuggestionCategory,t=this._request._ext||{},{env:s,collection:i}=t;if(e.removeChildren(),this._request._indexSuggestions){const{suggestions:t,errMsg:n}=this._request._indexSuggestions;if(n)e.appendChild(new UI.TreeOutline.TreeElement(this._formatHeader("Internal Error",n)));else if(t.length)for(let n=0,r=t.length;n<r;n++){const o=t[n];if(r>1){const t=createDocumentFragment();t.createChild("div","header-name").textContent="Suggestion "+(n+1),e.appendChild(new UI.TreeOutline.TreeElement(t))}for(let t=0,s=o.keys.length;t<s;t++){const s=o.keys[t],i=new UI.TreeOutline.TreeElement(this._formatHeader(s.field,"2dsphere"===s.type?"Geo Index":-1===s.type?"Desc":"Asc"));i[Network.RequestCloudExplainView._headerNameSymbol]=s.field,e.appendChild(i)}if(1===r){const t=`<x-link class=" devtools-link" ${`href="cloud://createindex?env=${s}&collection=${i}&from=networkPanelExplain&s=${encodeURIComponent(JSON.stringify(o.keys))}"`} role="link" tabindex="0"  style="display: inline; cursor: pointer;">Create Index in Cloud Console</x-link>`,n=createDocumentFragment().createChild("div");n.innerHTML=t,e.appendChild(new UI.TreeOutline.TreeElement(n.firstChild))}}else e.appendChild(new UI.TreeOutline.TreeElement(this._formatHeader("None")))}else e.appendChild(new UI.TreeOutline.TreeElement(this._formatHeader("Loading..."))),this._apis.getIndexSuggestion(this._request)}_refreshExplain(){const e=this._explainCategory,t=this._request._explainResult;if(e.removeChildren(),t){const{errMsg:s,parsedObject:i,sourceText:n}=t;if(s)return void e.appendChild(new UI.TreeOutline.TreeElement(this._formatHeader("Internal Error",s)));const r=e.listItemElement;r.removeChildren(),r.createChild("div","selection fill"),r.createTextChild("Explain Query");e[Network.RequestCloudExplainView._viewSourceSymbol]?this._appendJSONPayloadSource(e,i,n):this._appendJSONPayloadParsed(e,i,n)}else this._request.finished?this._request.statusCode>=400?e.appendChild(new UI.TreeOutline.TreeElement(this._formatHeader("None","(explain is available only on successfully queries)"))):(e.appendChild(new UI.TreeOutline.TreeElement(this._formatHeader("Loading..."))),this._apis.getExplainResult(this._request)):e.appendChild(new UI.TreeOutline.TreeElement(this._formatHeader("Loading...")))}}export class Category extends RequestHeadersViewCategory{constructor(e,t,s){super(e,t,s),this.hidden=!1}}