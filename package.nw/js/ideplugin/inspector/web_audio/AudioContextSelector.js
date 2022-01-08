import*as Common from"../common/common.js";import*as UI from"../ui/ui.js";export class AudioContextSelector extends Common.ObjectWrapper.ObjectWrapper{constructor(){super(),this._placeholderText=ls`(no recordings)`,this._items=new UI.ListModel.ListModel,this._dropDown=new UI.SoftDropDown.SoftDropDown(this._items,this),this._dropDown.setPlaceholderText(this._placeholderText),this._toolbarItem=new UI.Toolbar.ToolbarItem(this._dropDown.element),this._toolbarItem.setEnabled(!1),this._toolbarItem.setTitle(ls`Audio context: ${this._placeholderText}`),this._items.addEventListener(UI.ListModel.Events.ItemsReplaced,this._onListItemReplaced,this),this._toolbarItem.element.classList.add("toolbar-has-dropdown"),this._selectedContext=null}_onListItemReplaced(){const t=!!this._items.length;this._toolbarItem.setEnabled(t),t||this._toolbarItem.setTitle(ls`Audio context: ${this._placeholderText}`)}contextCreated(t){const e=t.data;this._items.insert(this._items.length,e),1===this._items.length&&this._dropDown.selectItem(e)}contextDestroyed(t){const e=t.data,o=this._items.findIndex(t=>t.contextId===e);o>-1&&this._items.remove(o)}contextChanged(t){const e=t.data,o=this._items.findIndex(t=>t.contextId===e.contextId);o>-1&&(this._items.replace(o,e),this._selectedContext&&this._selectedContext.contextId===e.contextId&&this._dropDown.selectItem(e))}createElementForItem(t){const e=document.createElement("div");return UI.Utils.createShadowRootWithCoreStyles(e,"web_audio/audioContextSelector.css").createChild("div","title").createTextChild(this.titleFor(t).trimEndWithMaxLength(100)),e}selectedContext(){return this._selectedContext?this._selectedContext:null}highlightedItemChanged(t,e,o,s){o&&o.classList.remove("highlighted"),s&&s.classList.add("highlighted")}isItemSelectable(t){return!0}itemSelected(t){t&&(this._selectedContext&&this._selectedContext.contextId===t.contextId||(this._selectedContext=t,this._toolbarItem.setTitle(ls`Audio context: ${this.titleFor(t)}`)),this.dispatchEventToListeners(WebAudio.AudioContextSelector.Events.ContextSelected,t))}reset(){this._items.replaceAll([])}titleFor(t){return`${t.contextType} (${t.contextId.substr(-6)})`}toolbarItem(){return this._toolbarItem}}export const Events={ContextSelected:Symbol("ContextSelected")};