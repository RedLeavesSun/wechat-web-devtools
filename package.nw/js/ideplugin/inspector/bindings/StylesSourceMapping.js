import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as TextUtils from"../text_utils/text_utils.js";import*as Workspace from"../workspace/workspace.js";import{ContentProviderBasedProject}from"./ContentProviderBasedProject.js";import{SourceMapping}from"./CSSWorkspaceBinding.js";import{NetworkProject}from"./NetworkProject.js";import{metadataForURL}from"./ResourceUtils.js";export class StylesSourceMapping{constructor(e,t){this._cssModel=e;const s=this._cssModel.target();this._project=new ContentProviderBasedProject(t,"css:"+s.id(),Workspace.Workspace.projectTypes.Network,"",!1),NetworkProject.setTargetForProject(this._project,s),this._styleFiles=new Map,this._eventListeners=[this._cssModel.addEventListener(SDK.CSSModel.Events.StyleSheetAdded,this._styleSheetAdded,this),this._cssModel.addEventListener(SDK.CSSModel.Events.StyleSheetRemoved,this._styleSheetRemoved,this),this._cssModel.addEventListener(SDK.CSSModel.Events.StyleSheetChanged,this._styleSheetChanged,this)]}rawLocationToUILocation(e){const t=e.header();if(!t||!this._acceptsHeader(t))return null;const s=this._styleFiles.get(t.resourceURL());if(!s)return null;let r=e.lineNumber,o=e.columnNumber;return t.isInline&&t.hasSourceURL&&(r-=t.lineNumberInSource(0),o-=t.columnNumberInSource(r,0)),s._uiSourceCode.uiLocation(r,o)}uiLocationToRawLocations(e){const t=e.uiSourceCode[StyleFile._symbol];if(!t)return[];const s=[];for(const r of t._headers){let t=e.lineNumber,o=e.columnNumber;r.isInline&&r.hasSourceURL&&(o=r.columnNumberInSource(t,o),t=r.lineNumberInSource(t)),s.push(new SDK.CSSModel.CSSLocation(r,t,o))}return s}_acceptsHeader(e){return!e.isMutable&&(!(e.isInline&&!e.hasSourceURL&&"inspector"!==e.origin)&&!!e.resourceURL())}_styleSheetAdded(e){const t=e.data;if(!this._acceptsHeader(t))return;const s=t.resourceURL();let r=this._styleFiles.get(s);r?r.addHeader(t):(r=new StyleFile(this._cssModel,this._project,t),this._styleFiles.set(s,r))}_styleSheetRemoved(e){const t=e.data;if(!this._acceptsHeader(t))return;const s=t.resourceURL(),r=this._styleFiles.get(s);1===r._headers.size?(r.dispose(),this._styleFiles.delete(s)):r.removeHeader(t)}_styleSheetChanged(e){const t=this._cssModel.styleSheetHeaderForId(e.data.styleSheetId);if(!t||!this._acceptsHeader(t))return;this._styleFiles.get(t.resourceURL())._styleSheetChanged(t)}dispose(){for(const e of this._styleFiles.values())e.dispose();this._styleFiles.clear(),Common.EventTarget.EventTarget.removeEventListeners(this._eventListeners),this._project.removeProject()}}export class StyleFile{constructor(e,t,s){this._cssModel=e,this._project=t,this._headers=new Set([s]);const r=e.target(),o=s.resourceURL(),i=metadataForURL(r,s.frameId,o);this._uiSourceCode=this._project.createUISourceCode(o,s.contentType()),this._uiSourceCode[StyleFile._symbol]=this,NetworkProject.setInitialFrameAttribution(this._uiSourceCode,s.frameId),this._project.addUISourceCodeWithProvider(this._uiSourceCode,this,i,"text/css"),this._eventListeners=[this._uiSourceCode.addEventListener(Workspace.UISourceCode.Events.WorkingCopyChanged,this._workingCopyChanged,this),this._uiSourceCode.addEventListener(Workspace.UISourceCode.Events.WorkingCopyCommitted,this._workingCopyCommitted,this)],this._throttler=new Common.Throttler.Throttler(StyleFile.updateTimeout),this._terminated=!1}addHeader(e){this._headers.add(e),NetworkProject.addFrameAttribution(this._uiSourceCode,e.frameId)}removeHeader(e){this._headers.delete(e),NetworkProject.removeFrameAttribution(this._uiSourceCode,e.frameId)}_styleSheetChanged(e){if(console.assert(this._headers.has(e)),this._isUpdatingHeaders||!this._headers.has(e))return;const t=this._mirrorContent.bind(this,e,!0);this._throttler.schedule(t,!1)}_workingCopyCommitted(e){if(this._isAddingRevision)return;const t=this._mirrorContent.bind(this,this._uiSourceCode,!0);this._throttler.schedule(t,!0)}_workingCopyChanged(e){if(this._isAddingRevision)return;const t=this._mirrorContent.bind(this,this._uiSourceCode,!1);this._throttler.schedule(t,!1)}async _mirrorContent(e,t){if(this._terminated)return void this._styleFileSyncedForTest();let s=null;if(e===this._uiSourceCode)s=this._uiSourceCode.workingCopy();else{s=(await e.requestContent()).content}if(null===s||this._terminated)return void this._styleFileSyncedForTest();e!==this._uiSourceCode&&(this._isAddingRevision=!0,this._uiSourceCode.addRevision(s),this._isAddingRevision=!1),this._isUpdatingHeaders=!0;const r=[];for(const o of this._headers)o!==e&&r.push(this._cssModel.setStyleSheetText(o.id,s,t));await Promise.all(r),this._isUpdatingHeaders=!1,this._styleFileSyncedForTest()}_styleFileSyncedForTest(){}dispose(){this._terminated||(this._terminated=!0,this._project.removeFile(this._uiSourceCode.url()),Common.EventTarget.EventTarget.removeEventListeners(this._eventListeners))}contentURL(){return this._headers.firstValue().originalContentProvider().contentURL()}contentType(){return this._headers.firstValue().originalContentProvider().contentType()}contentEncoded(){return this._headers.firstValue().originalContentProvider().contentEncoded()}requestContent(){return this._headers.firstValue().originalContentProvider().requestContent()}searchInContent(e,t,s){return this._headers.firstValue().originalContentProvider().searchInContent(e,t,s)}}StyleFile._symbol=Symbol("Bindings.StyleFile._symbol"),StyleFile.updateTimeout=200;