import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as Workspace from"../workspace/workspace.js";import{ContentProviderBasedProject}from"./ContentProviderBasedProject.js";import{CSSWorkspaceBinding,SourceMapping}from"./CSSWorkspaceBinding.js";import{NetworkProject}from"./NetworkProject.js";export class SASSSourceMapping{constructor(e,o,r){this._sourceMapManager=o,this._project=new ContentProviderBasedProject(r,"cssSourceMaps:"+e.id(),Workspace.Workspace.projectTypes.Network,"",!1),NetworkProject.setTargetForProject(this._project,e),this._eventListeners=[this._sourceMapManager.addEventListener(SDK.SourceMapManager.Events.SourceMapAttached,e=>{this._sourceMapAttached(e)},this),this._sourceMapManager.addEventListener(SDK.SourceMapManager.Events.SourceMapDetached,e=>{this._sourceMapDetached(e)},this),this._sourceMapManager.addEventListener(SDK.SourceMapManager.Events.SourceMapChanged,e=>{this._sourceMapChanged(e)},this)]}_sourceMapAttachedForTest(e){}async _sourceMapAttached(e){const o=e.data.client,r=e.data.sourceMap;for(const e of r.sourceURLs()){let t=this._project.uiSourceCodeForURL(e);if(t){NetworkProject.addFrameAttribution(t,o.frameId);continue}const s=r.sourceContentProvider(e,Common.ResourceType.resourceTypes.SourceMapStyleSheet),c=Common.ResourceType.ResourceType.mimeFromURL(e)||s.contentType().canonicalMimeType(),a=r.embeddedContentByURL(e),n="string"==typeof a?new Workspace.UISourceCode.UISourceCodeMetadata(null,a.length):null;t=this._project.createUISourceCode(e,s.contentType()),NetworkProject.setInitialFrameAttribution(t,o.frameId),t[_sourceMapSymbol]=r,this._project.addUISourceCodeWithProvider(t,s,n,c)}await CSSWorkspaceBinding.instance().updateLocations(o),this._sourceMapAttachedForTest(r)}async _sourceMapDetached(e){const o=e.data.client,r=e.data.sourceMap,t=this._sourceMapManager.clientsForSourceMap(r);for(const e of r.sourceURLs())if(t.length){const r=this._project.uiSourceCodeForURL(e);if(!r)continue;NetworkProject.removeFrameAttribution(r,o.frameId)}else this._project.removeFile(e);await CSSWorkspaceBinding.instance().updateLocations(o)}async _sourceMapChanged(e){const o=e.data.sourceMap,r=e.data.newSources,t=this._sourceMapManager.clientsForSourceMap(o);for(const e of r.keys()){const o=this._project.uiSourceCodeForURL(e);if(!o){console.error("Failed to update source for "+e);continue}const t=r.get(e);o.setWorkingCopy(t)}const s=t.map(e=>CSSWorkspaceBinding.instance().updateLocations(e));await Promise.all(s)}rawLocationToUILocation(e){const o=e.header();if(!o)return null;const r=this._sourceMapManager.sourceMapForClient(o);if(!r)return null;const t=r.findEntry(e.lineNumber,e.columnNumber);if(!t||!t.sourceURL)return null;const s=this._project.uiSourceCodeForURL(t.sourceURL);return s?s.uiLocation(t.sourceLineNumber||0,t.sourceColumnNumber):null}uiLocationToRawLocations(e){const o=e.uiSourceCode[_sourceMapSymbol];if(!o)return[];const r=o.findReverseEntries(e.uiSourceCode.url(),e.lineNumber,e.columnNumber),t=[];for(const e of this._sourceMapManager.clientsForSourceMap(o))t.push(...r.map(o=>new SDK.CSSModel.CSSLocation(e,o.lineNumber,o.columnNumber)));return t}dispose(){this._project.dispose(),Common.EventTarget.EventTarget.removeEventListeners(this._eventListeners)}}const _sourceMapSymbol=Symbol("sourceMap");