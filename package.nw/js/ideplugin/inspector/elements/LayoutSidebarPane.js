import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{ElementsPanel}from"./ElementsPanel.js";import{createLayoutPane,LayoutElement}from"./LayoutPane_bridge.js";const gridNodesToElements=e=>e.map(e=>{const t=e.getAttribute("class");return{id:e.id,name:e.localName(),domId:e.getAttribute("id"),domClasses:t?t.split(/\s+/):null,enabled:e.domModel().overlayModel().isHighlightedGridInPersistentOverlay(e.id)}});export class LayoutSidebarPane extends UI.ThrottledWidget.ThrottledWidget{constructor(){super(!0),this._layoutPane=createLayoutPane(),this.contentElement.appendChild(this._layoutPane),this._settings=["showGridLines","showGridLineNumbers","showGridGaps","showGridAreas","showGridTrackSizes"],this._boundOnSettingChanged=this.onSettingChanged.bind(this),this._boundOnOverlayChanged=this.onOverlayChanged.bind(this),this._boundOnElementClicked=this.onElementClicked.bind(this),this._pullNode()}_pullNode(){this._node=UI.Context.Context.instance().flavor(SDK.DOMModel.DOMNode)}async _fetchGridNodes(){return(await this._node.domModel().getNodesByStyle([{name:"display",value:"grid"},{name:"display",value:"inline-grid"}],!0)).map(e=>this._node.domModel().nodeForId(e)).filter(e=>null!==e)}_mapSettings(){return this._settings.map(e=>{const t=Common.Settings.Settings.instance().moduleSetting(e),n=t.extension();if(!n)return null;const i=n.descriptor();return{type:i.settingType,name:i.settingName,title:i.title,value:t.get(),options:i.options.map(e=>({title:e.text,value:e.value}))}}).filter(e=>null!==e)}async doUpdate(){var e;this._pullNode(),this._layoutPane.data={gridElements:(e=await this._fetchGridNodes(),e.map(e=>{const t=e.getAttribute("class");return{id:e.id,name:e.localName(),domId:e.getAttribute("id"),domClasses:t?t.split(/\s+/):null,enabled:e.domModel().overlayModel().isHighlightedGridInPersistentOverlay(e.id)}})),settings:this._mapSettings()}}onSettingChanged(e){Common.Settings.Settings.instance().moduleSetting(e.data.setting).set(e.data.value)}onOverlayChanged(e){const t=this._node.domModel().nodeForId(e.data.id);e.data.value?t.domModel().overlayModel().highlightGridInPersistentOverlay(e.data.id):t.domModel().overlayModel().hideGridInPersistentOverlay(e.data.id)}onElementClicked(e){const t=this._node.domModel().nodeForId(e.data.id);ElementsPanel.instance().revealAndSelectNode(t,!0,!0)}wasShown(){for(const e of this._settings)Common.Settings.Settings.instance().moduleSetting(e).addChangeListener(this.update,this);this._layoutPane.addEventListener("setting-changed",this._boundOnSettingChanged),this._layoutPane.addEventListener("overlay-changed",this._boundOnOverlayChanged),this._layoutPane.addEventListener("element-clicked",this._boundOnElementClicked);const e=this._node.domModel().overlayModel();e.addEventListener(SDK.OverlayModel.Events.PersistentGridOverlayCleared,this.update,this),e.addEventListener(SDK.OverlayModel.Events.PersistentGridOverlayStateChanged,this.update,this),UI.Context.Context.instance().addFlavorChangeListener(SDK.DOMModel.DOMNode,this.update,this),this.update()}willHide(){for(const e of this._settings)Common.Settings.Settings.instance().moduleSetting(e).removeChangeListener(this.update,this);this._layoutPane.removeEventListener("setting-changed",this._boundOnSettingChanged),this._layoutPane.removeEventListener("overlay-changed",this._boundOnOverlayChanged),this._layoutPane.removeEventListener("element-clicked",this._boundOnElementClicked);const e=this._node.domModel().overlayModel();e.removeEventListener(SDK.OverlayModel.Events.PersistentGridOverlayCleared,this.update,this),e.removeEventListener(SDK.OverlayModel.Events.PersistentGridOverlayStateChanged,this.update,this),UI.Context.Context.instance().removeFlavorChangeListener(SDK.DOMModel.DOMNode,this.update,this)}}