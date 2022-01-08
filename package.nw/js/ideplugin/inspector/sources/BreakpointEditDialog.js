import*as ObjectUI from"../object_ui/object_ui.js";import*as UI from"../ui/ui.js";export class BreakpointEditDialog extends UI.Widget.Widget{constructor(t,e,i,o){super(!0),this.registerRequiredCSS("sources/breakpointEditDialog.css"),this._onFinish=o,this._finished=!1,this._editor=null,this.element.tabIndex=-1;const n=LogpointPrefix,s=LogpointSuffix;this._isLogpoint=e.startsWith(n)&&e.endsWith(s),this._isLogpoint&&(e=e.substring(n.length,e.length-s.length)),this._isLogpoint=this._isLogpoint||i,this.element.classList.add("sources-edit-breakpoint-dialog");const r=new UI.Toolbar.Toolbar("source-frame-breakpoint-toolbar",this.contentElement);r.appendText(`Line ${t+1}:`),this._typeSelector=new UI.Toolbar.ToolbarComboBox(this._onTypeChanged.bind(this),ls`Breakpoint type`),this._typeSelector.createOption(ls`Breakpoint`,BreakpointType.Breakpoint);const a=this._typeSelector.createOption(ls`Conditional breakpoint`,BreakpointType.Conditional),p=this._typeSelector.createOption(ls`Logpoint`,BreakpointType.Logpoint);this._typeSelector.select(this._isLogpoint?p:a),r.appendToolbarItem(this._typeSelector),self.runtime.extension(UI.TextEditor.TextEditorFactory).instance().then(t=>{this._editor=t.createEditor({lineNumbers:!1,lineWrapping:!0,mimeType:"javascript",autoHeight:!0}),this._updatePlaceholder(),this._editor.widget().element.classList.add("condition-editor"),this._editor.configureAutocomplete(ObjectUI.JavaScriptAutocomplete.JavaScriptAutocompleteConfig.createConfigForEditor(this._editor)),e&&this._editor.setText(e),this._editor.widget().markAsExternallyManaged(),this._editor.widget().show(this.contentElement),this._editor.setSelection(this._editor.fullRange()),this._editor.widget().focus(),this._editor.widget().element.addEventListener("keydown",this._onKeyDown.bind(this),!0),this.contentElement.addEventListener("blur",t=>{t.relatedTarget&&!t.relatedTarget.isSelfOrDescendant(this.element)&&this._finishEditing(!0)},!0)})}static _conditionForLogpoint(t){return`${LogpointPrefix}${t}${LogpointSuffix}`}_onTypeChanged(){const t=this._typeSelector.selectedOption().value;this._isLogpoint=t===BreakpointType.Logpoint,this._updatePlaceholder(),t===BreakpointType.Breakpoint&&(this._editor.setText(""),this._finishEditing(!0))}_updatePlaceholder(){const t=this._typeSelector.selectedOption().value;t===BreakpointType.Conditional?(this._editor.setPlaceholder(ls`Expression to check before pausing, e.g. x > 5`),this._typeSelector.element.title=ls`Pause only when the condition is true`):t===BreakpointType.Logpoint&&(this._editor.setPlaceholder(ls`Log message, e.g. 'x is', x`),this._typeSelector.element.title=ls`Log a message to Console, do not break`)}_finishEditing(t){if(this._finished)return;this._finished=!0,this._editor.widget().detach();let e=this._editor.text();this._isLogpoint&&(e=BreakpointEditDialog._conditionForLogpoint(e)),this._onFinish({committed:t,condition:e})}async _onKeyDown(t){if(isEnterKey(t)&&!t.shiftKey){t.consume(!0);const e=this._editor.text();t.ctrlKey||await ObjectUI.JavaScriptAutocomplete.JavaScriptAutocomplete.isExpressionComplete(e)?this._finishEditing(!0):this._editor.newlineAndIndent()}isEscKey(t)&&(this._finishEditing(!1),t.stopImmediatePropagation())}}export const LogpointPrefix="/** DEVTOOLS_LOGPOINT */ console.log(";export const LogpointSuffix=")";export const BreakpointType={Breakpoint:"Breakpoint",Conditional:"Conditional",Logpoint:"Logpoint"};