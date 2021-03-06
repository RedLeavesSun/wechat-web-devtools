import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{ElementsPanel}from"./ElementsPanel.js";export class ElementStatePaneWidget extends UI.Widget.Widget{constructor(){super(!0),this.registerRequiredCSS("elements/elementStatePaneWidget.css"),this.contentElement.className="styles-element-state-pane",this.contentElement.createChild("div").createTextChild(Common.UIString.UIString("Force element state"));const e=document.createElement("table");e.classList.add("source-code"),UI.ARIAUtils.markAsPresentation(e);const t=[];function s(e){const t=UI.Context.Context.instance().flavor(SDK.DOMModel.DOMNode);t&&t.domModel().cssModel().forcePseudoState(t,e.target.state,e.target.checked)}function n(e){const n=createElement("td"),o=UI.UIUtils.CheckboxLabel.create(":"+e),l=o.checkboxElement;return l.state=e,l.addEventListener("click",s,!1),t.push(l),n.appendChild(o),n}this._inputs=t;let o=e.createChild("tr");o.appendChild(n.call(null,"active")),o.appendChild(n.call(null,"hover")),o=e.createChild("tr"),o.appendChild(n.call(null,"focus")),o.appendChild(n.call(null,"visited")),o=e.createChild("tr"),o.appendChild(n.call(null,"focus-within"));try{o.querySelector(":focus-visible"),o.appendChild(n.call(null,"focus-visible"))}catch(e){}this.contentElement.appendChild(e),UI.Context.Context.instance().addFlavorChangeListener(SDK.DOMModel.DOMNode,this._update,this)}_updateModel(e){this._cssModel!==e&&(this._cssModel&&this._cssModel.removeEventListener(SDK.CSSModel.Events.PseudoStateForced,this._update,this),this._cssModel=e,this._cssModel&&this._cssModel.addEventListener(SDK.CSSModel.Events.PseudoStateForced,this._update,this))}wasShown(){this._update()}_update(){if(!this.isShowing())return;let e=UI.Context.Context.instance().flavor(SDK.DOMModel.DOMNode);if(e&&(e=e.enclosingElementOrSelf()),this._updateModel(e?e.domModel().cssModel():null),e){const t=e.domModel().cssModel().pseudoState(e);for(const s of this._inputs)s.disabled=!!e.pseudoType(),s.checked=t.indexOf(s.state)>=0}else for(const e of this._inputs)e.disabled=!0,e.checked=!1}}export class ButtonProvider{constructor(){this._button=new UI.Toolbar.ToolbarToggle(Common.UIString.UIString("Toggle Element State"),""),this._button.setText(Common.UIString.UIString(":hov")),this._button.addEventListener(UI.Toolbar.ToolbarButton.Events.Click,this._clicked,this),this._button.element.classList.add("monospace"),this._view=new ElementStatePaneWidget}_clicked(){ElementsPanel.instance().showToolbarPane(this._view.isShowing()?null:this._view,this._button)}item(){return this._button}}