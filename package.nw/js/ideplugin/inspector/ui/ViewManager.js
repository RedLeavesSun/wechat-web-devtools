import*as Common from"../common/common.js";import*as Host from"../host/host.js";import*as ARIAUtils from"./ARIAUtils.js";import{ContextMenu}from"./ContextMenu.js";import{Icon}from"./Icon.js";import{Events as TabbedPaneEvents,TabbedPane}from"./TabbedPane.js";import{Toolbar,ToolbarItem,ToolbarMenuButton}from"./Toolbar.js";import{ProvidedView,TabbedViewLocation,View,ViewLocation,ViewLocationResolver,widgetSymbol}from"./View.js";import{VBox,Widget}from"./Widget.js";let viewManagerInstance;export class ViewManager{constructor(){this._views=new Map,this._locationNameByViewId=new Map,wxMain.isFeatureEnabled("showView")&&wxMain.on(WxMain.Events.showView,e=>this.showView(e)),this._locationOverrideSetting=Common.Settings.Settings.instance().createSetting("viewsLocationOverride",{});const e=this._locationOverrideSetting.get();for(const t of self.runtime.extensions("view")){const i=t.descriptor(),s=i.id;if(wxMain.isFeatureEnabled("hideView")){const{views:e}=wxMain.getFeatureOptions("hideView");if(e.indexOf(s)>-1)continue}this._views.set(s,new ProvidedView(t));const n=e[s]||i.location;this._locationNameByViewId.set(s,n)}}static instance(e={forceNew:null}){const{forceNew:t}=e;return viewManagerInstance&&!t||(viewManagerInstance=new ViewManager),viewManagerInstance}static _createToolbar(e){if(!e.length)return null;const t=new Toolbar("");for(const i of e)t.appendToolbarItem(i);return t.element}locationNameForViewId(e){return this._locationNameByViewId.get(e)}moveView(e,t){if(!e||!t)return;const i=this.view(e);if(!i)return;this._locationNameByViewId.set(e,t);const s=this._locationOverrideSetting.get();s[e]=t,this._locationOverrideSetting.set(s),this.resolveLocation(t).then(t=>{if(!t)throw new Error("Move view: Could not resolve location for view: "+e);return t._reveal(),t.showView(i,void 0,!0)})}revealView(e){const t=e[_Location.symbol];return t?(t._reveal(),t.showView(e)):Promise.resolve()}view(e){return this._views.get(e)}materializedWidget(e){const t=this.view(e);return t?t[widgetSymbol]:null}showView(e,t,i){let s=this._views.get(e);if(!s&&wxMain.isFeatureEnabled("customPanel")&&this._views.forEach((t,i)=>{i.endsWith(e)&&i.startsWith("chrome-extension")&&(s=t)}),!s)return console.error("Could not find view for id: '"+e+"' "+(new Error).stack),Promise.resolve();const n=this._locationNameByViewId.get(e),a=s[_Location.symbol];return a?(a._reveal(),a.showView(s,void 0,t,i)):this.resolveLocation(n).then(n=>{if(!n)throw new Error("Could not resolve location for view: "+e);return n._reveal(),n.showView(s,void 0,t,i)})}resolveLocation(e){if(!e)return Promise.resolve(null);const t=self.runtime.extensions(ViewLocationResolver).filter(t=>t.descriptor().name===e);if(!t.length)throw new Error("Unresolved location: "+e);return t[0].instance().then(t=>t.resolveLocation(e))}createTabbedLocation(e,t,i,s,n){return new _TabbedLocation(this,e,t,i,s,n)}createStackLocation(e,t){return new _StackLocation(this,e,t)}hasViewsForLocation(e){return!!this._viewsForLocation(e).length}_viewsForLocation(e){const t=[];for(const i of this._views.keys())this._locationNameByViewId.get(i)===e&&t.push(this._views.get(i));return t}}export class ContainerWidget extends VBox{constructor(e){super(),this.element.classList.add("flex-auto","view-container","overflow-auto"),this._view=e,this.element.tabIndex=-1,ARIAUtils.markAsTabpanel(this.element),ARIAUtils.setAccessibleName(this.element,ls`${e.title()} panel`),this.setDefaultFocusedElement(this.element)}_materialize(){if(this._materializePromise)return this._materializePromise;const e=[];return e.push(this._view.toolbarItems().then(e=>{const t=ViewManager._createToolbar(e);t&&this.element.insertBefore(t,this.element.firstChild)})),e.push(this._view.widget().then(e=>{const t=this.element.hasFocus();this.setDefaultFocusedElement(null),this._view[widgetSymbol]=e,e.show(this.element),t&&e.focus()})),this._materializePromise=Promise.all(e),this._materializePromise}wasShown(){this._materialize().then(()=>{this._view[widgetSymbol].show(this.element),this._wasShownForTest()})}_wasShownForTest(){}}export class _ExpandableContainerWidget extends VBox{constructor(e){super(!0),this.element.classList.add("flex-none"),this.registerRequiredCSS("ui/viewContainers.css"),this._titleElement=document.createElement("div"),this._titleElement.classList.add("expandable-view-title"),ARIAUtils.markAsButton(this._titleElement),this._titleExpandIcon=Icon.create("smallicon-triangle-right","title-expand-icon"),this._titleElement.appendChild(this._titleExpandIcon);const t=e.title();this._titleElement.createTextChild(t),ARIAUtils.setAccessibleName(this._titleElement,t),ARIAUtils.setExpanded(this._titleElement,!1),this._titleElement.tabIndex=0,self.onInvokeElement(this._titleElement,this._toggleExpanded.bind(this)),this._titleElement.addEventListener("keydown",this._onTitleKeyDown.bind(this),!1),this.contentElement.insertBefore(this._titleElement,this.contentElement.firstChild),ARIAUtils.setControls(this._titleElement,this.contentElement.createChild("slot")),this._view=e,e[_ExpandableContainerWidget._symbol]=this}wasShown(){this._widget&&this._materializePromise.then(()=>{this._titleElement.classList.contains("expanded")&&this._widget.show(this.element)})}_materialize(){if(this._materializePromise)return this._materializePromise;const e=[];return e.push(this._view.toolbarItems().then(e=>{const t=ViewManager._createToolbar(e);t&&this._titleElement.appendChild(t)})),e.push(this._view.widget().then(e=>{this._widget=e,this._view[widgetSymbol]=e,e.show(this.element)})),this._materializePromise=Promise.all(e),this._materializePromise}_expand(){return this._titleElement.classList.contains("expanded")?this._materialize():(this._titleElement.classList.add("expanded"),ARIAUtils.setExpanded(this._titleElement,!0),this._titleExpandIcon.setIconType("smallicon-triangle-down"),this._materialize().then(()=>this._widget.show(this.element)))}_collapse(){this._titleElement.classList.contains("expanded")&&(this._titleElement.classList.remove("expanded"),ARIAUtils.setExpanded(this._titleElement,!1),this._titleExpandIcon.setIconType("smallicon-triangle-right"),this._materialize().then(()=>this._widget.detach()))}_toggleExpanded(e){"keydown"===e.type&&e.target!==this._titleElement||(this._titleElement.classList.contains("expanded")?this._collapse():this._expand())}_onTitleKeyDown(e){e.target===this._titleElement&&("ArrowLeft"===e.key?this._collapse():"ArrowRight"===e.key&&(this._titleElement.classList.contains("expanded")?this._widget&&this._widget.focus():this._expand()))}}_ExpandableContainerWidget._symbol=Symbol("container");class _Location{constructor(e,t,i){this._manager=e,this._revealCallback=i,this._widget=t}widget(){return this._widget}_reveal(){this._revealCallback&&this._revealCallback()}}_Location.symbol=Symbol("location");export class _TabbedLocation extends _Location{constructor(e,t,i,s,n,a){const o=new TabbedPane;n&&o.setAllowTabReorder(!0),super(e,o,t),this._tabbedPane=o,this._allowReorder=n,this._tabbedPane.addEventListener(TabbedPaneEvents.TabSelected,this._tabSelected,this),this._tabbedPane.addEventListener(TabbedPaneEvents.TabClosed,this._tabClosed,this),this._closeableTabSetting=Common.Settings.Settings.instance().createSetting("closeableTabs",{}),this._setOrUpdateCloseableTabsSetting(),this._tabOrderSetting=Common.Settings.Settings.instance().createSetting(i+"-tabOrder",{}),this._tabbedPane.addEventListener(TabbedPaneEvents.TabOrderChanged,this._persistTabOrder,this),s&&(this._lastSelectedTabSetting=Common.Settings.Settings.instance().createSetting(i+"-selectedTab","")),this._defaultTab=a,this._views=new Map,i&&this.appendApplicableItems(i)}_setOrUpdateCloseableTabsSetting(){const e=this._closeableTabSetting.get(),t=Object.assign({security:!0},e);this._closeableTabSetting.set(t)}widget(){return this._tabbedPane}tabbedPane(){return this._tabbedPane}enableMoreTabsButton(){const e=new ToolbarMenuButton(this._appendTabsToMenu.bind(this));return this._tabbedPane.leftToolbar().appendToolbarItem(e),this._tabbedPane.disableOverflowMenu(),e}appendApplicableItems(e){const t=this._manager._viewsForLocation(e);if(this._allowReorder){let e=0;const i=this._tabOrderSetting.get(),s=new Map;for(const n of t)s.set(n.viewId(),i[n.viewId()]||++e*_TabbedLocation.orderStep);t.sort((e,t)=>s.get(e.viewId())-s.get(t.viewId()))}for(const e of t){const t=e.viewId();this._views.set(t,e),e[_Location.symbol]=this,e.isTransient()||(e.isCloseable()?this._closeableTabSetting.get()[t]&&this._appendTab(e):this._appendTab(e))}if(this._defaultTab)if(this._tabbedPane.hasTab(this._defaultTab))this._tabbedPane.selectTab(this._defaultTab);else{const e=Array.from(this._views.values()).find(e=>e.viewId()===this._defaultTab);e&&this.showView(e)}else this._lastSelectedTabSetting&&this._tabbedPane.hasTab(this._lastSelectedTabSetting.get())&&this._tabbedPane.selectTab(this._lastSelectedTabSetting.get())}_appendTabsToMenu(e){const t=Array.from(this._views.values());t.sort((e,t)=>e.title().localeCompare(t.title()));for(const i of t){const t=Common.UIString.UIString(i.title());"issues-pane"!==i.viewId()?e.defaultSection().appendItem(t,this.showView.bind(this,i,void 0,!0)):e.defaultSection().appendItem(t,()=>{Host.userMetrics.issuesPanelOpenedFrom(Host.UserMetrics.IssueOpener.HamburgerMenu),this.showView(i,void 0,!0)})}}_appendTab(e,t){this._tabbedPane.appendTab(e.viewId(),e.title(),new ContainerWidget(e),void 0,!1,e.isCloseable()||e.isTransient(),t)}appendView(e,t){if(this._tabbedPane.hasTab(e.viewId()))return;const i=e[_Location.symbol];i&&i!==this&&i.removeView(e),e[_Location.symbol]=this,this._manager._views.set(e.viewId(),e),this._views.set(e.viewId(),e);let s=void 0;const n=this._tabbedPane.tabIds();if(this._allowReorder){const t=this._tabOrderSetting.get(),i=t[e.viewId()];for(let e=0;i&&e<n.length;++e)if(t[n[e]]&&t[n[e]]>i){s=e;break}}else if(t)for(let e=0;e<n.length;++e)if(n[e]===t.viewId()){s=e;break}if(this._appendTab(e,s),e.isCloseable()){const t=this._closeableTabSetting.get(),i=e.viewId();t[i]||(t[i]=!0,this._closeableTabSetting.set(t))}this._persistTabOrder(),wxMain.isFeatureEnabled("monitorTabAdded")&&wxMain.emit(WxMain.Events.tabAdded,e.viewId())}showView(e,t,i,s){this.appendView(e,t),this._tabbedPane.selectTab(e.viewId(),i),s||this._tabbedPane.focus();return this._tabbedPane.tabView(e.viewId())._materialize()}removeView(e){this._tabbedPane.hasTab(e.viewId())&&(delete e[_Location.symbol],this._manager._views.delete(e.viewId()),this._tabbedPane.closeTab(e.viewId()),this._views.delete(e.viewId()))}_tabSelected(e){const t=e.data.tabId;this._lastSelectedTabSetting&&e.data.isUserGesture&&this._lastSelectedTabSetting.set(t)}_tabClosed(e){const t=e.data.tabId,i=this._closeableTabSetting.get();i[t]&&(i[t]=!1,this._closeableTabSetting.set(i)),this._views.get(t).disposeView()}_persistTabOrder(){const e=this._tabbedPane.tabIds(),t={};for(let i=0;i<e.length;i++)t[e[i]]=(i+1)*_TabbedLocation.orderStep;const i=this._tabOrderSetting.get(),s=Object.keys(i);s.sort((e,t)=>i[e]-i[t]);let n=0;for(const e of s)e in t?n=t[e]:t[e]=++n;this._tabOrderSetting.set(t)}}_TabbedLocation.orderStep=10;class _StackLocation extends _Location{constructor(e,t,i){const s=new VBox;super(e,s,t),this._vbox=s,this._expandableContainers=new Map,i&&this.appendApplicableItems(i)}appendView(e,t){const i=e[_Location.symbol];i&&i!==this&&i.removeView(e);let s=this._expandableContainers.get(e.viewId());if(!s){e[_Location.symbol]=this,this._manager._views.set(e.viewId(),e),s=new _ExpandableContainerWidget(e);let i=null;if(t){const e=t[_ExpandableContainerWidget._symbol];i=e?e.element:null}s.show(this._vbox.contentElement,i),this._expandableContainers.set(e.viewId(),s)}}showView(e,t){this.appendView(e,t);return this._expandableContainers.get(e.viewId())._expand()}removeView(e){const t=this._expandableContainers.get(e.viewId());t&&(t.detach(),this._expandableContainers.delete(e.viewId()),delete e[_Location.symbol],this._manager._views.delete(e.viewId()))}appendApplicableItems(e){for(const t of this._manager._viewsForLocation(e))this.appendView(t)}}