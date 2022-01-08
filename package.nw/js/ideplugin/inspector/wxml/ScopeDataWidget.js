import*as UI from"../ui/ui.js";import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as TextUtils from"../text_utils/text_utils.js";import*as SourceFrame from"../source_frame/source_frame.js";export class ScopeDataWidget extends UI.ThrottledWidget.ThrottledWidget{constructor(){super(!0),this._emptyElement=this.contentElement.createChild("div","gray-info-message"),this._emptyElement.textContent=Common.UIString.UIString("No scope data"),UI.Context.Context.instance().addFlavorChangeListener(SDK.DOMModel.DOMNode,this._update,this),this._update(),Wxml.wxmlMessenger.on("FINISH_CHECK_SCOPEDATA",async e=>{const t=TextUtils.StaticContentProvider.StaticContentProvider.fromString("wxml://scopeData",Common.ResourceType.resourceTypes.XHR,JSON.stringify(e.error_list)),r=await SourceFrame.PreviewFactory.PreviewFactory.createPreview(t,"text/plain");this._errorList=r,r.show(this.contentElement)})}async _update(){const e=UI.Context.Context.instance().flavor(SDK.DOMModel.DOMNode);if(!e)return;const t=await Wxml.target.domAgent().getScopeData(e.id);if(this._preview&&this._preview.detach(),this._errorList&&this._errorList.detach(),!t)return void this._emptyElement.classList.remove("hidden");this._emptyElement.classList.add("hidden");const r=TextUtils.StaticContentProvider.StaticContentProvider.fromString("wxml://scopeData",Common.ResourceType.resourceTypes.XHR,t),o=await SourceFrame.PreviewFactory.PreviewFactory.createPreview(r,"text/plain");this._preview=o,o.show(this.contentElement),await Wxml.wxmlMessenger.send("CHECK_SCOPEDATA",{scopeData:JSON.parse(t)})}}