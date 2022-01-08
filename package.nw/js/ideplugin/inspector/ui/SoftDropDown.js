import*as Common from"../common/common.js";import*as ARIAUtils from"./ARIAUtils.js";import{Size}from"./Geometry.js";import{AnchorBehavior,GlassPane,MarginBehavior,PointerEventsBehavior}from"./GlassPane.js";import{Icon}from"./Icon.js";import{ListControl,ListDelegate,ListMode}from"./ListControl.js";import{Events as ListModelEvents,ListModel}from"./ListModel.js";import{appendStyle}from"./utils/append-style.js";import{createShadowRootWithCoreStyles}from"./utils/create-shadow-root-with-core-styles.js";export class SoftDropDown{constructor(e,t){this._delegate=t,this._selectedItem=null,this._model=e,this._placeholderText=ls`(no item selected)`,this.element=document.createElement("button"),this.element.classList.add("soft-dropdown"),appendStyle(this.element,"ui/softDropDownButton.css"),this._titleElement=this.element.createChild("span","title");const s=Icon.create("smallicon-triangle-down");this.element.appendChild(s),ARIAUtils.setExpanded(this.element,!1),this._glassPane=new GlassPane,this._glassPane.setMarginBehavior(MarginBehavior.NoMargin),this._glassPane.setAnchorBehavior(AnchorBehavior.PreferBottom),this._glassPane.setOutsideClickCallback(this._hide.bind(this)),this._glassPane.setPointerEventsBehavior(PointerEventsBehavior.BlockedByGlassPane),this._list=new ListControl(e,this,ListMode.EqualHeightItems),this._list.element.classList.add("item-list"),this._rowHeight=36,this._width=315,createShadowRootWithCoreStyles(this._glassPane.contentElement,"ui/softDropDown.css").appendChild(this._list.element),ARIAUtils.markAsMenu(this._list.element),this._listWasShowing200msAgo=!1,this.element.addEventListener("mousedown",e=>{this._listWasShowing200msAgo?this._hide(e):this.element.disabled||this._show(e)},!1),this.element.addEventListener("keydown",this._onKeyDownButton.bind(this),!1),this._list.element.addEventListener("keydown",this._onKeyDownList.bind(this),!1),this._list.element.addEventListener("focusout",this._hide.bind(this),!1),this._list.element.addEventListener("mousedown",e=>e.consume(!0),!1),this._list.element.addEventListener("mouseup",e=>{e.target!==this._list.element&&this._listWasShowing200msAgo&&(this._selectHighlightedItem(),this._hide(e))},!1),e.addEventListener(ListModelEvents.ItemsReplaced,this._itemsReplaced,this)}_show(e){this._glassPane.isShowing()||(this._glassPane.setContentAnchorBox(this.element.boxInWindow()),this._glassPane.show(this.element.ownerDocument),this._list.element.focus(),ARIAUtils.setExpanded(this.element,!0),this._updateGlasspaneSize(),this._selectedItem&&this._list.selectItem(this._selectedItem),e.consume(!0),setTimeout(()=>{this._listWasShowing200msAgo=!0},200))}_updateGlasspaneSize(){const e=this._rowHeight*Math.min(this._model.length,9);this._glassPane.setMaxContentSize(new Size(this._width,e)),this._list.viewportResized()}_hide(e){setTimeout(()=>{this._listWasShowing200msAgo=!1},200),this._glassPane.hide(),this._list.selectItem(null),ARIAUtils.setExpanded(this.element,!1),this.element.focus(),e.consume(!0)}_onKeyDownButton(e){let t=!1;switch(e.key){case"ArrowUp":this._show(e),this._list.selectItemNextPage(),t=!0;break;case"ArrowDown":this._show(e),this._list.selectItemPreviousPage(),t=!0;break;case"Enter":case" ":this._show(e),t=!0}t&&e.consume(!0)}_onKeyDownList(e){let t=!1;switch(e.key){case"ArrowLeft":t=this._list.selectPreviousItem(!1,!1);break;case"ArrowRight":t=this._list.selectNextItem(!1,!1);break;case"Home":for(let e=0;e<this._model.length;e++)if(this.isItemSelectable(this._model.at(e))){this._list.selectItem(this._model.at(e)),t=!0;break}break;case"End":for(let e=this._model.length-1;e>=0;e--)if(this.isItemSelectable(this._model.at(e))){this._list.selectItem(this._model.at(e)),t=!0;break}break;case"Escape":this._hide(e),t=!0;break;case"Tab":case"Enter":case" ":this._selectHighlightedItem(),this._hide(e),t=!0;break;default:if(1===e.key.length){const s=this._list.selectedIndex(),i=e.key.toUpperCase();for(let e=0;e<this._model.length;e++){const t=this._model.at((s+e+1)%this._model.length);if(this._delegate.titleFor(t).toUpperCase().startsWith(i)){this._list.selectItem(t);break}}t=!0}}t&&e.consume(!0)}setWidth(e){this._width=e,this._updateGlasspaneSize()}setRowHeight(e){this._rowHeight=e}setPlaceholderText(e){this._placeholderText=e,this._selectedItem||(this._titleElement.textContent=this._placeholderText)}_itemsReplaced(e){-1!==e.data.removed.indexOf(this._selectedItem)&&(this._selectedItem=null,this._selectHighlightedItem()),this._updateGlasspaneSize()}selectItem(e){this._selectedItem=e,this._selectedItem?this._titleElement.textContent=this._delegate.titleFor(this._selectedItem):this._titleElement.textContent=this._placeholderText,this._delegate.itemSelected(this._selectedItem)}createElementForItem(e){const t=document.createElement("div");return t.classList.add("item"),t.addEventListener("mousemove",t=>{(t.movementX||t.movementY)&&this._delegate.isItemSelectable(e)&&this._list.selectItem(e,!1,!0)}),t.classList.toggle("disabled",!this._delegate.isItemSelectable(e)),t.classList.toggle("highlighted",this._list.selectedItem()===e),ARIAUtils.markAsMenuItem(t),t.appendChild(this._delegate.createElementForItem(e)),t}heightForItem(e){return this._rowHeight}isItemSelectable(e){return this._delegate.isItemSelectable(e)}selectedItemChanged(e,t,s,i){s&&s.classList.remove("highlighted"),i&&i.classList.add("highlighted"),ARIAUtils.setActiveDescendant(this._list.element,i),this._delegate.highlightedItemChanged(e,t,s&&s.firstElementChild,i&&i.firstElementChild)}updateSelectedItemARIA(e,t){return!1}_selectHighlightedItem(){this.selectItem(this._list.selectedItem())}refreshItem(e){this._list.refreshItem(e)}}export class Delegate{titleFor(e){}createElementForItem(e){}isItemSelectable(e){}itemSelected(e){}highlightedItemChanged(e,t,s,i){}}