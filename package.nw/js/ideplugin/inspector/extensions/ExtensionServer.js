import*as Bindings from"../bindings/bindings.js";import*as Common from"../common/common.js";import*as Components from"../components/components.js";import*as Host from"../host/host.js";import*as Platform from"../platform/platform.js";import*as ProtocolClient from"../protocol_client/protocol_client.js";import*as Root from"../root/root.js";import*as SDK from"../sdk/sdk.js";import*as TextUtils from"../text_utils/text_utils.js";import*as UI from"../ui/ui.js";import*as Workspace from"../workspace/workspace.js";import{ExtensionButton,ExtensionPanel,ExtensionSidebarPane}from"./ExtensionPanel.js";import{ExtensionTraceProvider,TracingSession}from"./ExtensionTraceProvider.js";import{LanguageExtensionEndpoint}from"./LanguageExtensionEndpoint.js";const extensionOriginSymbol=Symbol("extensionOrigin"),kAllowedOrigins=["chrome://newtab","chrome://new-tab-page"].map(e=>new URL(e).origin);export class ExtensionServer extends Common.ObjectWrapper.ObjectWrapper{constructor(){super(),this._clientObjects={},this._handlers={},this._subscribers=new Map,this._subscriptionStartHandlers={},this._subscriptionStopHandlers={},this._extraHeaders=new Map,this._requests={},this._lastRequestId=0,this._registeredExtensions=new Map,this._status=new ExtensionStatus,this._sidebarPanes=[],this._traceProviders=[],this._traceSessions=new Map,this._extensionsEnabled=!0;const e=Extensions.extensionAPI.Commands;this._registerHandler(e.AddRequestHeaders,this._onAddRequestHeaders.bind(this)),this._registerHandler(e.AddTraceProvider,this._onAddTraceProvider.bind(this)),this._registerHandler(e.ApplyStyleSheet,this._onApplyStyleSheet.bind(this)),this._registerHandler(e.CompleteTraceSession,this._onCompleteTraceSession.bind(this)),this._registerHandler(e.CreatePanel,this._onCreatePanel.bind(this)),this._registerHandler(e.CreateSidebarPane,this._onCreateSidebarPane.bind(this)),this._registerHandler(e.CreateToolbarButton,this._onCreateToolbarButton.bind(this)),this._registerHandler(e.EvaluateOnInspectedPage,this._onEvaluateOnInspectedPage.bind(this)),this._registerHandler(e.ForwardKeyboardEvent,this._onForwardKeyboardEvent.bind(this)),this._registerHandler(e.GetHAR,this._onGetHAR.bind(this)),this._registerHandler(e.GetPageResources,this._onGetPageResources.bind(this)),this._registerHandler(e.GetRequestContent,this._onGetRequestContent.bind(this)),this._registerHandler(e.GetResourceContent,this._onGetResourceContent.bind(this)),this._registerHandler(e.Reload,this._onReload.bind(this)),this._registerHandler(e.SetOpenResourceHandler,this._onSetOpenResourceHandler.bind(this)),this._registerHandler(e.SetResourceContent,this._onSetResourceContent.bind(this)),this._registerHandler(e.SetSidebarHeight,this._onSetSidebarHeight.bind(this)),this._registerHandler(e.SetSidebarContent,this._onSetSidebarContent.bind(this)),this._registerHandler(e.SetSidebarPage,this._onSetSidebarPage.bind(this)),this._registerHandler(e.ShowPanel,this._onShowPanel.bind(this)),this._registerHandler(e.Subscribe,this._onSubscribe.bind(this)),this._registerHandler(e.OpenResource,this._onOpenResource.bind(this)),this._registerHandler(e.Unsubscribe,this._onUnsubscribe.bind(this)),this._registerHandler(e.UpdateButton,this._onUpdateButton.bind(this)),this._registerHandler(e.RegisterLanguageExtensionPlugin,this._registerLanguageExtensionEndpoint.bind(this)),window.addEventListener("message",this._onWindowMessage.bind(this),!1);const t=window.DevToolsAPI&&window.DevToolsAPI.getInspectedTabId&&window.DevToolsAPI.getInspectedTabId();t&&this._setInspectedTabId({data:t}),Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(Host.InspectorFrontendHostAPI.Events.SetInspectedTabId,this._setInspectedTabId,this),this._languageExtensionRequests=new Map,this._languageExtensionEndpoints=[],this._initExtensions()}initializeExtensions(){Host.InspectorFrontendHost.InspectorFrontendHostInstance.setAddExtensionCallback(this._addExtension.bind(this))}hasExtensions(){return!!this._registeredExtensions.size}notifySearchAction(e,t,s){this._postNotification(Extensions.extensionAPI.Events.PanelSearch+e,t,s)}notifyViewShown(e,t){this._postNotification(Extensions.extensionAPI.Events.ViewShown+e,t)}notifyViewHidden(e){this._postNotification(Extensions.extensionAPI.Events.ViewHidden+e)}notifyButtonClicked(e){this._postNotification(Extensions.extensionAPI.Events.ButtonClicked+e)}_registerLanguageExtensionEndpoint(e,t){if(!Root.Runtime.experiments.isEnabled("wasmDWARFDebugging"))return this._status.E_FAILED("WebAssembly DWARF support needs to be enabled to use this extension");const{pluginName:s,port:n,supportedScriptTypes:{language:i,symbol_types:o}}=e,r=Array.isArray(o)&&o.every(e=>"string"==typeof e)?o:[],a=new LanguageExtensionEndpoint(s,{language:i,symbol_types:r},n);this._languageExtensionEndpoints.push(a),this.dispatchEventToListeners(Events.LanguageExtensionEndpointAdded,a)}get languageExtensionEndpoints(){return this._languageExtensionEndpoints}_inspectedURLChanged(e){if(!this._canInspectURL(e.data.inspectedURL()))return void this._disableExtensions();if(e.data!==SDK.SDKModel.TargetManager.instance().mainTarget())return;this._requests={};const t=e.data.inspectedURL();this._postNotification(Extensions.extensionAPI.Events.InspectedURLChanged,t)}startTraceRecording(e,t,s){this._traceSessions.set(t,s),this._postNotification("trace-recording-started-"+e,t)}stopTraceRecording(e){this._postNotification("trace-recording-stopped-"+e)}hasSubscribers(e){return this._subscribers.has(e)}_postNotification(e,t){if(!this._extensionsEnabled)return;const s=this._subscribers.get(e);if(!s)return;const n={command:"notify-"+e,arguments:Array.prototype.slice.call(arguments,1)};for(const e of s)e.postMessage(n)}_onSubscribe(e,t){const s=this._subscribers.get(e.type);s?s.add(t):(this._subscribers.set(e.type,new Set([t])),this._subscriptionStartHandlers[e.type]&&this._subscriptionStartHandlers[e.type]())}_onUnsubscribe(e,t){const s=this._subscribers.get(e.type);s&&(s.delete(t),s.size||(this._subscribers.delete(e.type),this._subscriptionStopHandlers[e.type]&&this._subscriptionStopHandlers[e.type]()))}_onAddRequestHeaders(e){const t=e.extensionId;if("string"!=typeof t)return this._status.E_BADARGTYPE("extensionId",typeof t,"string");let s=this._extraHeaders.get(t);s||(s=new Map,this._extraHeaders.set(t,s));for(const t in e.headers)s.set(t,e.headers[t]);const n={};for(const e of this._extraHeaders.values())for(const t of e.keys())"__proto__"!==t&&"string"==typeof e.get(t)&&(n[t]=e.get(t));SDK.NetworkManager.MultitargetNetworkManager.instance().setExtraHTTPHeaders(n)}_onApplyStyleSheet(e){if(!Root.Runtime.experiments.isEnabled("applyCustomStylesheet"))return;const t=createElement("style");t.textContent=e.styleSheet,document.head.appendChild(t),self.UI.themeSupport.addCustomStylesheet(e.styleSheet);for(let e=document.body;e;e=e.traverseNextNode(document.body))e instanceof ShadowRoot&&self.UI.themeSupport.injectCustomStyleSheets(e)}_onCreatePanel(e,t){const s=e.id;if(s in this._clientObjects||self.UI.inspectorView.hasPanel(s))return this._status.E_EXISTS(s);const n=this._expandResourcePath(t[extensionOriginSymbol],e.page);let i=t[extensionOriginSymbol]+e.title;i=i.replace(/\s/g,"");const o=new ExtensionServerPanelView(i,e.title,new ExtensionPanel(this,i,s,n));return this._clientObjects[s]=o,self.UI.inspectorView.addPanel(o),this._status.OK()}_onShowPanel(e){let t=e.id;const s=this._clientObjects[e.id];s&&s instanceof ExtensionServerPanelView&&(t=s.viewId()),self.UI.inspectorView.showPanel(t)}_onCreateToolbarButton(e,t){const s=this._clientObjects[e.panel];if(!(s&&s instanceof ExtensionServerPanelView))return this._status.E_NOTFOUND(e.panel);const n=new ExtensionButton(this,e.id,this._expandResourcePath(t[extensionOriginSymbol],e.icon),e.tooltip,e.disabled);return this._clientObjects[e.id]=n,s.widget().then((function(e){e.addToolbarItem(n.toolbarButton())})),this._status.OK()}_onUpdateButton(e,t){const s=this._clientObjects[e.id];return s&&s instanceof ExtensionButton?(s.update(this._expandResourcePath(t[extensionOriginSymbol],e.icon),e.tooltip,e.disabled),this._status.OK()):this._status.E_NOTFOUND(e.id)}_onCompleteTraceSession(e){const t=this._traceSessions.get(e.id);if(!t)return this._status.E_NOTFOUND(e.id);this._traceSessions.delete(e.id),t.complete(e.url,e.timeOffset)}_onCreateSidebarPane(e){if("elements"!==e.panel&&"sources"!==e.panel)return this._status.E_NOTFOUND(e.panel);const t=e.id,s=new ExtensionSidebarPane(this,e.panel,e.title,t);return this._sidebarPanes.push(s),this._clientObjects[t]=s,this.dispatchEventToListeners(Events.SidebarPaneAdded,s),this._status.OK()}sidebarPanes(){return this._sidebarPanes}_onSetSidebarHeight(e){const t=this._clientObjects[e.id];return t?(t.setHeight(e.height),this._status.OK()):this._status.E_NOTFOUND(e.id)}_onSetSidebarContent(e,t){const s=this._clientObjects[e.id];if(!s)return this._status.E_NOTFOUND(e.id);function n(s){const n=s?this._status.E_FAILED(s):this._status.OK();this._dispatchCallback(e.requestId,t,n)}if(e.evaluateOnPage)return s.setExpression(e.expression,e.rootTitle,e.evaluateOptions,t[extensionOriginSymbol],n.bind(this));s.setObject(e.expression,e.rootTitle,n.bind(this))}_onSetSidebarPage(e,t){const s=this._clientObjects[e.id];if(!s)return this._status.E_NOTFOUND(e.id);s.setPage(this._expandResourcePath(t[extensionOriginSymbol],e.page))}_onOpenResource(e){const t=Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(e.url);if(t)return Common.Revealer.reveal(t.uiLocation(e.lineNumber,0)),this._status.OK();const s=Bindings.ResourceUtils.resourceForURL(e.url);if(s)return Common.Revealer.reveal(s),this._status.OK();const n=SDK.NetworkLog.NetworkLog.instance().requestForURL(e.url);return n?(Common.Revealer.reveal(n),this._status.OK()):this._status.E_NOTFOUND(e.url)}_onSetOpenResourceHandler(e,t){const s=this._registeredExtensions.get(t[extensionOriginSymbol]).name;e.handlerPresent?Components.Linkifier.Linkifier.registerLinkHandler(s,this._handleOpenURL.bind(this,t)):Components.Linkifier.Linkifier.unregisterLinkHandler(s)}_handleOpenURL(e,t,s){e.postMessage({command:"open-resource",resource:this._makeResource(t),lineNumber:s+1})}_onReload(e){const t=e.options||{};let s;return SDK.NetworkManager.MultitargetNetworkManager.instance().setUserAgentOverride("string"==typeof t.userAgent?t.userAgent:"",null),t.injectedScript&&(s="(function(){"+t.injectedScript+"})()"),SDK.ResourceTreeModel.ResourceTreeModel.reloadAllPages(!!t.ignoreCache,s),this._status.OK()}_onEvaluateOnInspectedPage(e,t){return this.evaluate(e.expression,!0,!0,e.evaluateOptions,t[extensionOriginSymbol],function(s,n,i){let o;o=s||!n?this._status.E_PROTOCOLERROR(s.toString()):i?{isException:!0,value:n.description}:{value:n.value},this._dispatchCallback(e.requestId,t,o)}.bind(this))}async _onGetHAR(){const e=SDK.NetworkLog.NetworkLog.instance().requests(),t=await SDK.HARLog.HARLog.build(e);for(let s=0;s<t.entries.length;++s)t.entries[s]._requestId=this._requestId(e[s]);return t}_makeResource(e){return{url:e.contentURL(),type:e.contentType().name()}}_onGetPageResources(){const e=new Map;function t(t){e.has(t.contentURL())||e.set(t.contentURL(),this._makeResource(t))}let s=Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodesForProjectType(Workspace.Workspace.projectTypes.Network);s=s.concat(Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodesForProjectType(Workspace.Workspace.projectTypes.ContentScripts)),s.forEach(t.bind(this));for(const e of SDK.SDKModel.TargetManager.instance().models(SDK.ResourceTreeModel.ResourceTreeModel))e.forAllResources(t.bind(this));return[...e.values()]}async _getResourceContent(e,t,s){const{content:n}=await e.requestContent(),i=await e.contentEncoded();this._dispatchCallback(t.requestId,s,{encoding:i?"base64":"",content:n})}_onGetRequestContent(e,t){const s=this._requestById(e.id);if(!s)return this._status.E_NOTFOUND(e.id);this._getResourceContent(s,e,t)}_onGetResourceContent(e,t){const s=e.url,n=Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(s)||Bindings.ResourceUtils.resourceForURL(s);if(!n)return this._status.E_NOTFOUND(s);this._getResourceContent(n,e,t)}_onSetResourceContent(e,t){const s=e.url,n=Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(s);if(!n||!n.contentType().isDocumentOrScriptOrStyleSheet()){return SDK.ResourceTreeModel.ResourceTreeModel.resourceForURL(s)?this._status.E_NOTSUPPORTED("Resource is not editable"):this._status.E_NOTFOUND(s)}n.setWorkingCopy(e.content),e.commit&&n.commitWorkingCopy(),function(s){const n=s?this._status.E_FAILED(s):this._status.OK();this._dispatchCallback(e.requestId,t,n)}.call(this,null)}_requestId(e){return e._extensionRequestId||(e._extensionRequestId=++this._lastRequestId,this._requests[e._extensionRequestId]=e),e._extensionRequestId}_requestById(e){return this._requests[e]}_onAddTraceProvider(e,t){const s=new ExtensionTraceProvider(t[extensionOriginSymbol],e.id,e.categoryName,e.categoryTooltip);this._clientObjects[e.id]=s,this._traceProviders.push(s),this.dispatchEventToListeners(Events.TraceProviderAdded,s)}traceProviders(){return this._traceProviders}_onForwardKeyboardEvent(e){e.entries.forEach((function(e){const t=new window.KeyboardEvent(e.eventType,{key:e.key,code:e.code,keyCode:e.keyCode,location:e.location,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey});t.__keyCode=function(e){let t=e.keyCode;t||"Escape"===e.key&&(t=27);return t||0}(e),document.dispatchEvent(t)}))}_dispatchCallback(e,t,s){e&&t.postMessage({command:"callback",requestId:e,result:s})}_initExtensions(){this._registerAutosubscriptionHandler(Extensions.extensionAPI.Events.ResourceAdded,Workspace.Workspace.WorkspaceImpl.instance(),Workspace.Workspace.Events.UISourceCodeAdded,this._notifyResourceAdded),this._registerAutosubscriptionTargetManagerHandler(Extensions.extensionAPI.Events.NetworkRequestFinished,SDK.NetworkManager.NetworkManager,SDK.NetworkManager.Events.RequestFinished,this._notifyRequestFinished),this._registerSubscriptionHandler(Extensions.extensionAPI.Events.PanelObjectSelected+"elements",function(){UI.Context.Context.instance().addFlavorChangeListener(SDK.DOMModel.DOMNode,this._notifyElementsSelectionChanged,this)}.bind(this),function(){UI.Context.Context.instance().removeFlavorChangeListener(SDK.DOMModel.DOMNode,this._notifyElementsSelectionChanged,this)}.bind(this)),this._registerResourceContentCommittedHandler(this._notifyUISourceCodeContentCommitted),SDK.SDKModel.TargetManager.instance().addEventListener(SDK.SDKModel.Events.InspectedURLChanged,this._inspectedURLChanged,this)}_notifyResourceAdded(e){const t=e.data;this._postNotification(Extensions.extensionAPI.Events.ResourceAdded,this._makeResource(t))}_notifyUISourceCodeContentCommitted(e){const t=e.data.uiSourceCode,s=e.data.content;this._postNotification(Extensions.extensionAPI.Events.ResourceContentCommitted,this._makeResource(t),s)}async _notifyRequestFinished(e){const t=e.data,s=await SDK.HARLog.Entry.build(t);this._postNotification(Extensions.extensionAPI.Events.NetworkRequestFinished,this._requestId(t),s)}_notifyElementsSelectionChanged(){this._postNotification(Extensions.extensionAPI.Events.PanelObjectSelected+"elements")}sourceSelectionChanged(e,t){this._postNotification(Extensions.extensionAPI.Events.PanelObjectSelected+"sources",{startLine:t.startLine,startColumn:t.startColumn,endLine:t.endLine,endColumn:t.endColumn,url:e})}_setInspectedTabId(e){this._inspectedTabId=e.data}_addExtension(e){const t=e.startPage,s=SDK.SDKModel.TargetManager.instance().mainTarget().inspectedURL();if(""===s||this._canInspectURL(s)||this._disableExtensions(),this._extensionsEnabled){try{const s=new URL(t).origin;if(!this._registeredExtensions.get(s)){const t=self.buildExtensionAPIInjectedScript(e,this._inspectedTabId,self.UI.themeSupport.themeName(),self.UI.shortcutRegistry.globalShortcutKeys(),self.Extensions.extensionServer._extensionAPITestHook);Host.InspectorFrontendHost.InspectorFrontendHostInstance.setInjectedScriptForOrigin(s,t);const n=e.name||"Extension "+s;this._registeredExtensions.set(s,{name:n})}const n=createElement("iframe");n.src=t,n.dataset.devtoolsExtension=e.name,n.style.display="none",document.body.appendChild(n)}catch(e){return console.error("Failed to initialize extension "+t+":"+e),!1}return!0}}_registerExtension(e,t){this._registeredExtensions.has(e)?(t[extensionOriginSymbol]=e,t.addEventListener("message",this._onmessage.bind(this),!1),t.start()):e!==window.location.origin&&console.error("Ignoring unauthorized client request from "+e)}_onWindowMessage(e){"registerExtension"===e.data&&this._registerExtension(e.origin,e.ports[0])}async _onmessage(e){const t=e.data;let s;s=t.command in this._handlers?this._extensionsEnabled?await this._handlers[t.command](t,e.target):this._status.E_FAILED("Permission denied"):this._status.E_NOTSUPPORTED(t.command),s&&t.requestId&&this._dispatchCallback(t.requestId,e.target,s)}_registerHandler(e,t){console.assert(e),this._handlers[e]=t}_registerSubscriptionHandler(e,t,s){this._subscriptionStartHandlers[e]=t,this._subscriptionStopHandlers[e]=s}_registerAutosubscriptionHandler(e,t,s,n){this._registerSubscriptionHandler(e,t.addEventListener.bind(t,s,n,this),t.removeEventListener.bind(t,s,n,this))}_registerAutosubscriptionTargetManagerHandler(e,t,s,n){this._registerSubscriptionHandler(e,SDK.SDKModel.TargetManager.instance().addModelListener.bind(SDK.SDKModel.TargetManager.instance(),t,s,n,this),SDK.SDKModel.TargetManager.instance().removeModelListener.bind(SDK.SDKModel.TargetManager.instance(),t,s,n,this))}_registerResourceContentCommittedHandler(e){this._registerSubscriptionHandler(Extensions.extensionAPI.Events.ResourceContentCommitted,function(){Workspace.Workspace.WorkspaceImpl.instance().addEventListener(Workspace.Workspace.Events.WorkingCopyCommittedByUser,e,this),Workspace.Workspace.WorkspaceImpl.instance().setHasResourceContentTrackingExtensions(!0)}.bind(this),function(){Workspace.Workspace.WorkspaceImpl.instance().setHasResourceContentTrackingExtensions(!1),Workspace.Workspace.WorkspaceImpl.instance().removeEventListener(Workspace.Workspace.Events.WorkingCopyCommittedByUser,e,this)}.bind(this))}_expandResourcePath(e,t){if(t)return e+this._normalizePath(t)}_normalizePath(e){const t=e.split("/"),s=[];for(let e=0;e<t.length;++e)"."!==t[e]&&""!==t[e]&&(".."===t[e]?s.pop():s.push(t[e]));return"/"+s.join("/")}evaluate(e,t,s,n,i,o){let r,a,d;if((n=n||{}).frameURL)a=function(e){let t;return SDK.ResourceTreeModel.ResourceTreeModel.frames().some((function(s){return t=s.url===e?s:null,t})),t}(n.frameURL);else{const e=SDK.SDKModel.TargetManager.instance().mainTarget(),t=e&&e.model(SDK.ResourceTreeModel.ResourceTreeModel);a=t&&t.mainFrame}if(!a)return n.frameURL?console.warn("evaluate: there is no frame with URL "+n.frameURL):console.warn("evaluate: the main frame is not yet available"),this._status.E_NOTFOUND(n.frameURL||"<top>");if(!this._canInspectURL(a.url))return this._status.E_FAILED("Permission denied");n.useContentScriptContext?d=i:n.scriptExecutionContext&&(d=n.scriptExecutionContext);const c=a.resourceTreeModel().target().model(SDK.RuntimeModel.RuntimeModel),l=c?c.executionContexts():[];if(d){for(let e=0;e<l.length;++e){const t=l[e];t.frameId!==a.id||t.origin!==d||t.isDefault||(r=t)}if(!r)return console.warn("The JavaScript context "+d+" was not found in the frame "+a.url),this._status.E_NOTFOUND(d)}else{for(let e=0;e<l.length;++e){const t=l[e];t.frameId===a.id&&t.isDefault&&(r=t)}if(!r)return this._status.E_FAILED(a.url+" has no execution context")}if(!this._canInspectURL(r.origin))return this._status.E_FAILED("Permission denied");r.evaluate({expression:e,objectGroup:"extension",includeCommandLineAPI:t,silent:!0,returnByValue:s,generatePreview:!1},!1,!1).then((function(e){if(e.error)return void o(e.error,null,!1);o(null,e.object||null,!!e.exceptionDetails)}))}_canInspectURL(e){let t;try{t=new URL(e)}catch(e){return!1}return!!kAllowedOrigins.includes(t.origin)||"chrome:"!==t.protocol&&"devtools:"!==t.protocol&&(!t.protocol.startsWith("http")||"chrome.google.com"!==t.hostname||!t.pathname.startsWith("/webstore"))}_disableExtensions(){this._extensionsEnabled=!1}}export const Events={SidebarPaneAdded:Symbol("SidebarPaneAdded"),TraceProviderAdded:Symbol("TraceProviderAdded"),LanguageExtensionEndpointAdded:Symbol("LanguageExtensionEndpointAdded")};class ExtensionServerPanelView extends UI.View.SimpleView{constructor(e,t,s){super(t),this._name=e,this._panel=s}viewId(){return this._name}widget(){return Promise.resolve(this._panel)}}export class ExtensionStatus{constructor(){function e(e,t){const s=Array.prototype.slice.call(arguments,2),n={code:e,description:t,details:s};return"OK"!==e&&(n.isError=!0,console.error("Extension server error: "+Platform.StringUtilities.vsprintf(t,s))),n}this.OK=e.bind(null,"OK","OK"),this.E_EXISTS=e.bind(null,"E_EXISTS","Object already exists: %s"),this.E_BADARG=e.bind(null,"E_BADARG","Invalid argument %s: %s"),this.E_BADARGTYPE=e.bind(null,"E_BADARGTYPE","Invalid type for argument %s: got %s, expected %s"),this.E_NOTFOUND=e.bind(null,"E_NOTFOUND","Object not found: %s"),this.E_NOTSUPPORTED=e.bind(null,"E_NOTSUPPORTED","Object does not support requested operation: %s"),this.E_PROTOCOLERROR=e.bind(null,"E_PROTOCOLERROR","Inspector protocol error: %s"),this.E_FAILED=e.bind(null,"E_FAILED","Operation failed: %s")}}export let Record;