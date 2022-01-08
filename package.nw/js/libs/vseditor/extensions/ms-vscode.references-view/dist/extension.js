module.exports=function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t){e.exports=require("vscode")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WordAnchor=t.ContextKey=t.getPreviewChunks=t.isValidRequestPosition=t.tail=t.del=void 0;const s=i(0);t.del=function(e,t){const i=e.indexOf(t);i>=0&&e.splice(i,1)},t.tail=function(e){return e[e.length-1]},t.isValidRequestPosition=async function(e,t){const i=await s.workspace.openTextDocument(e);let n=i.getWordRangeAtPosition(t);return n||(n=i.getWordRangeAtPosition(t,/[^\s]+/)),Boolean(n)},t.getPreviewChunks=function(e,t,i=8,n=!0){let o=t.start.with({character:Math.max(0,t.start.character-i)}),r=e.getWordRangeAtPosition(o),a=e.getText(new s.Range(r?r.start:o,t.start)),c=e.getText(t),l=t.end.translate(0,331),h=e.getText(new s.Range(t.end,l));return n&&(a=a.replace(/^\s*/g,""),h=h.replace(/\s*$/g,"")),{before:a,inside:c,after:h}};t.ContextKey=class{constructor(e){this.name=e}async set(e){await s.commands.executeCommand("setContext",this.name,e)}async reset(){await s.commands.executeCommand("setContext",this.name,void 0)}};t.WordAnchor=class{constructor(e,t){this._doc=e,this._position=t,this._version=e.version,this._word=this._getAnchorWord(e,t)}_getAnchorWord(e,t){const i=e.getWordRangeAtPosition(t)||e.getWordRangeAtPosition(t,/[^\s]+/);return i&&e.getText(i)}guessedTrackedPosition(){if(!this._word)return this._position;if(this._version===this._doc.version)return this._position;const e=this._getAnchorWord(this._doc,this._position);if(this._word===e)return this._position;const t=this._position.line;let i,n,o=0;do{if(n=!1,i=t+o,i<this._doc.lineCount){n=!0;let e=this._doc.lineAt(i).text.indexOf(this._word);if(e>=0)return new s.Position(i,e)}if(o+=1,i=t-o,i>=0){n=!0;let e=this._doc.lineAt(i).text.indexOf(this._word);if(e>=0)return new s.Position(i,e)}}while(o<100&&n);return this._position}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const s=i(3),n=i(5),o=i(7);t.activate=function(e){const t=new o.SymbolsTree;return n.register(t,e),s.register(t,e),{setInput:function(e){t.setInput(e)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=void 0;const s=i(0),n=i(1),o=i(4);function r(e){e instanceof o.CallItem&&e.remove()}t.register=function(e,t){const i=new a(t.workspaceState,0);function n(t,n){let r;i.value=t;const a=e.getInput();n instanceof o.CallItem?r=new o.CallsTreeInput(new s.Location(n.item.uri,n.item.range.start),i.value):a instanceof o.CallsTreeInput&&(r=new o.CallsTreeInput(a.location,i.value)),r&&e.setInput(r)}t.subscriptions.push(s.commands.registerCommand("references-view.showCallHierarchy",(function(){if(s.window.activeTextEditor){const t=new o.CallsTreeInput(new s.Location(s.window.activeTextEditor.document.uri,s.window.activeTextEditor.selection.active),i.value);e.setInput(t)}})),s.commands.registerCommand("references-view.showOutgoingCalls",e=>n(1,e)),s.commands.registerCommand("references-view.showIncomingCalls",e=>n(0,e)),s.commands.registerCommand("references-view.removeCallItem",r))};class a{constructor(e,t=1){this._mem=e,this._value=t,this._ctxMode=new n.ContextKey("references-view.callHierarchyMode");const i=e.get(a._key);this.value="number"==typeof i&&i>=0&&i<=1?i:t}get value(){return this._value}set value(e){this._value=e,this._ctxMode.set(0===this._value?"showIncoming":"showOutgoing"),this._mem.update(a._key,e)}}a._key="references-view.callHierarchyMode"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CallItem=t.CallsTreeInput=void 0;const s=i(0),n=i(1);class o{constructor(e,t){this.location=e,this.direction=t,this.contextValue="callHierarchy",this.title=0===t?"Callers Of":"Calls From"}async resolve(){const e=await Promise.resolve(s.commands.executeCommand("vscode.prepareCallHierarchy",this.location.uri,this.location.range.start)),t=new a(this.direction,null!=e?e:[]),i=new c(t);if(0!==t.roots.length)return{provider:i,get message(){return 0===t.roots.length?"No results.":void 0},navigation:t,highlights:t,dispose(){i.dispose()}}}with(e){return new o(e,this.direction)}}t.CallsTreeInput=o;class r{constructor(e,t,i,s){this.model=e,this.item=t,this.parent=i,this.locations=s}remove(){this.model.remove(this)}}t.CallItem=r;class a{constructor(e,t){this.direction=e,this.roots=[],this._onDidChange=new s.EventEmitter,this.onDidChange=this._onDidChange.event,this.roots=t.map(e=>new r(this,e,void 0,void 0))}async _resolveCalls(e){if(0===this.direction){const t=await s.commands.executeCommand("vscode.provideIncomingCalls",e.item);return t?t.map(t=>new r(this,t.from,e,t.fromRanges.map(e=>new s.Location(t.from.uri,e)))):[]}{const t=await s.commands.executeCommand("vscode.provideOutgoingCalls",e.item);return t?t.map(t=>new r(this,t.to,e,t.fromRanges.map(t=>new s.Location(e.item.uri,t)))):[]}}async getCallChildren(e){return e.children||(e.children=await this._resolveCalls(e)),e.children}location(e){return new s.Location(e.item.uri,e.item.range)}nearest(e,t){var i;return null!==(i=this.roots.find(t=>t.item.uri.toString()===e.toString()))&&void 0!==i?i:this.roots[0]}next(e){var t;return null!==(t=this._move(e,!0))&&void 0!==t?t:e}previous(e){var t;return null!==(t=this._move(e,!1))&&void 0!==t?t:e}_move(e,t){var i,s;if(null===(i=e.children)||void 0===i?void 0:i.length)return t?e.children[0]:n.tail(e.children);const o=this.roots.includes(e)?this.roots:null===(s=e.parent)||void 0===s?void 0:s.children;if(null==o?void 0:o.length){const i=o.indexOf(e);return o[i+(t?1:-1)+o.length%o.length]}}getEditorHighlights(e,t){return e.locations?e.locations.filter(e=>e.uri.toString()===t.toString()).map(e=>e.range):e.item.uri.toString()===t.toString()?[e.item.selectionRange]:void 0}remove(e){var t;const i=this.roots.includes(e)?this.roots:null===(t=e.parent)||void 0===t?void 0:t.children;i&&(n.del(i,e),this._onDidChange.fire(this))}}class c{constructor(e){this._model=e,this._emitter=new s.EventEmitter,this.onDidChangeTreeData=this._emitter.event,this._modelListener=e.onDidChange(e=>this._emitter.fire(e instanceof r?e:void 0))}dispose(){this._emitter.dispose(),this._modelListener.dispose()}getTreeItem(e){const t=new s.TreeItem(e.item.name);return t.description=e.item.detail,t.contextValue="call-item",t.iconPath=c._getThemeIcon(e.item.kind),t.command={command:"vscode.open",title:"Open Call",arguments:[e.item.uri,{selection:e.item.selectionRange.with({end:e.item.selectionRange.start})}]},t.collapsibleState=s.TreeItemCollapsibleState.Collapsed,t}getChildren(e){return e?this._model.getCallChildren(e):this._model.roots}getParent(e){return e.parent}static _getThemeIcon(e){let t=c._themeIconIds[e];return t&&new s.ThemeIcon(t)}}c._themeIconIds=["symbol-file","symbol-module","symbol-namespace","symbol-package","symbol-class","symbol-method","symbol-property","symbol-field","symbol-constructor","symbol-enum","symbol-interface","symbol-function","symbol-variable","symbol-constant","symbol-string","symbol-number","symbol-boolean","symbol-array","symbol-object","symbol-key","symbol-null","symbol-enum-member","symbol-struct","symbol-event","symbol-operator","symbol-type-parameter"]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=void 0;const s=i(0),n=i(6);t.register=function(e,t){function i(t,i){if(s.window.activeTextEditor){const o=new n.ReferencesTreeInput(t,new s.Location(s.window.activeTextEditor.document.uri,s.window.activeTextEditor.selection.active),i);e.setInput(o)}}let l;t.subscriptions.push(s.commands.registerCommand("references-view.findReferences",()=>i("References","vscode.executeReferenceProvider")),s.commands.registerCommand("references-view.findImplementations",()=>i("Implementations","vscode.executeImplementationProvider")),s.commands.registerCommand("references-view.find",(...e)=>s.commands.executeCommand("references-view.findReferences",...e)),s.commands.registerCommand("references-view.removeReferenceItem",r),s.commands.registerCommand("references-view.copy",a),s.commands.registerCommand("references-view.copyAll",o),s.commands.registerCommand("references-view.copyPath",c));const h="references.preferredLocation";function d(t){if(t&&!t.affectsConfiguration(h))return;const i=s.workspace.getConfiguration().get(h);null==l||l.dispose(),l=void 0,"view"===i&&(l=s.commands.registerCommand("editor.action.showReferences",async(t,i,o)=>{const r=new n.ReferencesTreeInput("References",new s.Location(t,i),"vscode.executeReferenceProvider",o);e.setInput(r)}))}t.subscriptions.push(s.workspace.onDidChangeConfiguration(d)),t.subscriptions.push({dispose:()=>null==l?void 0:l.dispose()}),d()};const o=async e=>{e instanceof n.ReferenceItem?a(e.file.model):e instanceof n.FileItem&&a(e.model)};function r(e){(e instanceof n.FileItem||e instanceof n.ReferenceItem)&&e.remove()}async function a(e){let t;(e instanceof n.ReferencesModel||e instanceof n.ReferenceItem||e instanceof n.FileItem)&&(t=await e.asCopyText()),t&&await s.env.clipboard.writeText(t)}async function c(e){e instanceof n.FileItem&&("file"===e.uri.scheme?s.env.clipboard.writeText(e.uri.fsPath):s.env.clipboard.writeText(e.uri.toString(!0)))}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReferenceItem=t.FileItem=t.ReferencesModel=t.ReferencesTreeInput=void 0;const s=i(0),n=i(1);class o{constructor(e,t,i,s){this.title=e,this.location=t,this._command=i,this._result=s,this.contextValue=i}async resolve(){let e;if(this._result)e=new r(this._result);else{const t=await Promise.resolve(s.commands.executeCommand(this._command,this.location.uri,this.location.range.start));e=new r(null!=t?t:[])}if(0===e.items.length)return;const t=new a(e);return{provider:t,get message(){return e.message},navigation:e,highlights:e,dispose(){t.dispose()}}}with(e){return new o(this.title,e,this._command)}}t.ReferencesTreeInput=o;class r{constructor(e){let t;this._onDidChange=new s.EventEmitter,this.onDidChangeTreeData=this._onDidChange.event,this.items=[];for(const i of e.sort(r._compareLocations)){const e=i instanceof s.Location?i:new s.Location(i.targetUri,i.targetRange);t&&0===r._compareUriIgnoreFragment(t.uri,e.uri)||(t=new c(e.uri.with({fragment:""}),[],this),this.items.push(t)),t.references.push(new l(e,t))}}static _compareUriIgnoreFragment(e,t){let i=e.with({fragment:""}).toString(),s=t.with({fragment:""}).toString();return i<s?-1:i>s?1:0}static _compareLocations(e,t){let i=e instanceof s.Location?e.uri:e.targetUri,n=t instanceof s.Location?t.uri:t.targetUri;if(i.toString()<n.toString())return-1;if(i.toString()>n.toString())return 1;let o=e instanceof s.Location?e.range:e.targetRange,r=t instanceof s.Location?t.range:t.targetRange;return o.start.isBefore(r.start)?-1:o.start.isAfter(r.start)?1:0}get message(){if(0===this.items.length)return"No results.";const e=this.items.reduce((e,t)=>e+t.references.length,0),t=this.items.length;return 1===e&&1===t?`${e} result in ${t} file`:1===e?`${e} result in ${t} files`:1===t?`${e} results in ${t} file`:`${e} results in ${t} files`}location(e){return e instanceof l?e.location:void 0}nearest(e,t){if(0===this.items.length)return;for(const i of this.items)if(i.uri.toString()===e.toString()){for(const e of i.references)if(e.location.range.contains(t))return e;let e;for(const s of i.references){if(s.location.range.end.isAfter(t))return s;e=s}if(e)return e;break}let i=0,s=r._prefixLen(this.items[i].toString(),e.toString());for(let t=1;t<this.items.length;t++){r._prefixLen(this.items[t].uri.toString(),e.toString())>s&&(i=t)}return this.items[i].references[0]}static _prefixLen(e,t){let i=0;for(;i<e.length&&i<t.length&&e.charCodeAt(i)===t.charCodeAt(i);)i+=1;return i}next(e){var t;return null!==(t=this._move(e,!0))&&void 0!==t?t:e}previous(e){var t;return null!==(t=this._move(e,!1))&&void 0!==t?t:e}_move(e,t){const i=t?1:-1,s=e=>{const t=(this.items.indexOf(e)+i+this.items.length)%this.items.length;return this.items[t]};if(e instanceof c)return t?s(e).references[0]:n.tail(s(e).references);if(e instanceof l){const t=e.file.references.indexOf(e)+i;return t<0?n.tail(s(e.file).references):t>=e.file.references.length?s(e.file).references[0]:e.file.references[t]}}getEditorHighlights(e,t){const i=this.items.find(e=>e.uri.toString()===t.toString());return null==i?void 0:i.references.map(e=>e.location.range)}remove(e){e instanceof c?(n.del(this.items,e),this._onDidChange.fire(void 0)):(n.del(e.file.references,e),0===e.file.references.length?(n.del(this.items,e.file),this._onDidChange.fire(void 0)):this._onDidChange.fire(e.file))}async asCopyText(){let e="";for(const t of this.items)e+=await t.asCopyText()+"\n";return e}}t.ReferencesModel=r;class a{constructor(e){this._model=e,this._onDidChange=new s.EventEmitter,this.onDidChangeTreeData=this._onDidChange.event,this._listener=e.onDidChangeTreeData(e=>this._onDidChange.fire())}dispose(){this._onDidChange.dispose(),this._listener.dispose()}async getTreeItem(e){if(e instanceof c){const t=new s.TreeItem(e.uri);return t.contextValue="file-item",t.description=!0,t.iconPath=s.ThemeIcon.File,t.collapsibleState=s.TreeItemCollapsibleState.Collapsed,t}{const{range:t}=e.location,i=await e.getDocument(!0),{before:o,inside:r,after:a}=n.getPreviewChunks(i,t),c={label:o+r+a,highlights:[[o.length,o.length+r.length]]},l=new s.TreeItem2(c);return l.collapsibleState=s.TreeItemCollapsibleState.None,l.contextValue="reference-item",l.command={command:"vscode.open",title:"Open Reference",arguments:[e.location.uri,{selection:t.with({end:t.start})}]},l}}async getChildren(e){return e?e instanceof c?e.references:void 0:this._model.items}getParent(e){return e instanceof l?e.file:void 0}}class c{constructor(e,t,i){this.uri=e,this.references=t,this.model=i}remove(){this.model.remove(this)}async asCopyText(){let e=s.workspace.asRelativePath(this.uri)+"\n";for(let t of this.references)e+=`  ${await t.asCopyText()}\n`;return e}}t.FileItem=c;class l{constructor(e,t){this.location=e,this.file=t}async getDocument(e){if(this._document||(this._document=s.workspace.openTextDocument(this.location.uri)),e){const e=this.file.model.next(this.file);e instanceof c&&e!==this.file?s.workspace.openTextDocument(e.uri):e instanceof l&&s.workspace.openTextDocument(e.location.uri)}return this._document}remove(){this.file.model.remove(this)}async asCopyText(){let e=await this.getDocument(),t=n.getPreviewChunks(e,this.location.range,21,!1);return`${this.location.range.start.line+1}, ${this.location.range.start.character+1}: ${t.before+t.inside+t.after}`}}t.ReferenceItem=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SymbolsTree=void 0;const s=i(0),n=i(8),o=i(9),r=i(1);t.SymbolsTree=class{constructor(){this.viewId="references-view.tree",this._ctxIsActive=new r.ContextKey("reference-list.isActive"),this._ctxHasResult=new r.ContextKey("reference-list.hasResult"),this._ctxInputSource=new r.ContextKey("reference-list.source"),this._history=new l(this),this._provider=new a,this._tree=s.window.createTreeView(this.viewId,{treeDataProvider:this._provider,showCollapseAll:!0}),this._navigation=new o.Navigation(this._tree)}dispose(){var e;this._history.dispose(),this._tree.dispose(),null===(e=this._sessionDisposable)||void 0===e||e.dispose()}getInput(){return this._input}async setInput(e){var t,i;if(!await r.isValidRequestPosition(e.location.uri,e.location.range.start))return void this.clearInput();this._ctxInputSource.set(e.contextValue),this._ctxIsActive.set(!0),this._ctxHasResult.set(!0),s.commands.executeCommand(this.viewId+".focus");const o=!this._input||Object.getPrototypeOf(this._input)!==Object.getPrototypeOf(e);this._input=e,null===(t=this._sessionDisposable)||void 0===t||t.dispose(),this._tree.title=e.title,this._tree.message=o?void 0:this._tree.message;const a=Promise.resolve(e.resolve());this._provider.update(a.then(e=>{var t;return null!==(t=null==e?void 0:e.provider)&&void 0!==t?t:this._history}));const c=await a;if(this._input!==e)return;if(!c)return void this.clearInput();this._history.add(e),this._tree.message=c.message,this._navigation.update(c.navigation);const l=null===(i=c.navigation)||void 0===i?void 0:i.nearest(e.location.uri,e.location.range.start);l&&this._tree.visible&&await this._tree.reveal(l,{select:!0,focus:!0,expand:!0});const h=[];let d;c.highlights&&(d=new n.EditorHighlights(this._tree,c.highlights),h.push(d)),c.provider.onDidChangeTreeData&&h.push(c.provider.onDidChangeTreeData(()=>{this._tree.title=e.title,this._tree.message=c.message,null==d||d.update()})),"function"==typeof c.dispose&&h.push(new s.Disposable(()=>c.dispose())),this._sessionDisposable=s.Disposable.from(...h)}clearInput(){var e;null===(e=this._sessionDisposable)||void 0===e||e.dispose(),this._input=void 0,this._ctxHasResult.set(!1),this._ctxInputSource.reset(),this._tree.title="References",this._tree.message=0===this._history.size?"No results.":"No results. Try running a previous search again:",this._provider.update(Promise.resolve(this._history))}};class a{constructor(){this._onDidChange=new s.EventEmitter,this.onDidChangeTreeData=this._onDidChange.event}update(e){var t;null===(t=this._sessionDispoables)||void 0===t||t.dispose(),this._sessionDispoables=void 0,this._onDidChange.fire(),this.provider=e,e.then(t=>{this.provider===e&&t.onDidChangeTreeData&&(this._sessionDispoables=t.onDidChangeTreeData(this._onDidChange.fire,this._onDidChange))}).catch(e=>{this.provider=void 0,console.error(e)})}async getTreeItem(e){return this._assertProvider(),(await this.provider).getTreeItem(e)}async getChildren(e){return this._assertProvider(),(await this.provider).getChildren(e)}async getParent(e){this._assertProvider();const t=await this.provider;return t.getParent?t.getParent(e):void 0}_assertProvider(){if(!this.provider)throw new Error("MISSING provider")}}class c{constructor(e,t,i,n){this.key=e,this.word=t,this.anchor=i,this.input=n,this.description=`${s.workspace.asRelativePath(n.location.uri)} • ${n.title.toLocaleLowerCase()}`}}class l{constructor(e){this._tree=e,this._onDidChangeTreeData=new s.EventEmitter,this.onDidChangeTreeData=this._onDidChangeTreeData.event,this._disposables=[],this._ctxHasHistory=new r.ContextKey("reference-list.hasHistory"),this._inputs=new Map,this._disposables.push(s.commands.registerCommand("references-view.clear",()=>e.clearInput()),s.commands.registerCommand("references-view.clearHistory",()=>{this.clear(),e.clearInput()}),s.commands.registerCommand("references-view.refind",e=>{e instanceof c&&this._reRunHistoryItem(e)}),s.commands.registerCommand("references-view.refresh",()=>{const e=Array.from(this._inputs.values()).pop();e&&this._reRunHistoryItem(e)}),s.commands.registerCommand("_references-view.showHistoryItem",e=>{var t;if(e instanceof c){const i=null!==(t=e.anchor.guessedTrackedPosition())&&void 0!==t?t:e.input.location.range.start;return s.commands.executeCommand("vscode.open",e.input.location.uri,{selection:new s.Range(i,i)})}}),s.commands.registerCommand("references-view.pickFromHistory",async()=>{const e=(await this.getChildren()).map(e=>({label:e.word,description:e.description,item:e})),t=await s.window.showQuickPick(e,{placeHolder:"Select previous reference search"});t&&this._reRunHistoryItem(t.item)}))}dispose(){s.Disposable.from(...this._disposables).dispose(),this._onDidChangeTreeData.dispose()}_reRunHistoryItem(e){this._inputs.delete(e.key);const t=e.anchor.guessedTrackedPosition();let i=e.input;t&&!e.input.location.range.start.isEqual(t)&&(i=e.input.with(new s.Location(e.input.location.uri,t))),this._tree.setInput(i)}async add(e){var t,i;const n=await s.workspace.openTextDocument(e.location.uri),o=new r.WordAnchor(n,e.location.range.start),a=null!==(t=n.getWordRangeAtPosition(e.location.range.start))&&void 0!==t?t:n.getWordRangeAtPosition(e.location.range.start,/[^\s]+/),l=a?n.getText(a):"???",h=new c(JSON.stringify([null!==(i=null==a?void 0:a.start)&&void 0!==i?i:e.location.range.start,e.location.uri,e.title]),l,o,e);this._inputs.delete(h.key),this._inputs.set(h.key,h),this._ctxHasHistory.set(!0)}clear(){this._inputs.clear(),this._ctxHasHistory.set(!1),this._onDidChangeTreeData.fire(void 0)}get size(){return this._inputs.size}getTreeItem(e){const t=new s.TreeItem(e.word);return t.description=e.description,t.command={command:"_references-view.showHistoryItem",arguments:[e],title:"Rerun"},t.collapsibleState=s.TreeItemCollapsibleState.None,t.contextValue="history-item",t}getChildren(){return Promise.all([...this._inputs.values()].reverse())}getParent(){}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditorHighlights=void 0;const s=i(0);t.EditorHighlights=class{constructor(e,t){this._view=e,this._delegate=t,this._decorationType=s.window.createTextEditorDecorationType({backgroundColor:new s.ThemeColor("editor.findMatchHighlightBackground"),rangeBehavior:s.DecorationRangeBehavior.ClosedClosed,overviewRulerLane:s.OverviewRulerLane.Center,overviewRulerColor:new s.ThemeColor("editor.findMatchHighlightBackground")}),this.disposables=[],this._ignore=new Set,this.disposables.push(s.workspace.onDidChangeTextDocument(e=>this._ignore.add(e.document.uri.toString())),s.window.onDidChangeActiveTextEditor(()=>e.visible&&this.update()),e.onDidChangeVisibility(e=>e.visible?this._show():this._hide()),e.onDidChangeSelection(()=>e.visible&&this.update())),this._show()}dispose(){s.Disposable.from(...this.disposables).dispose();for(const e of s.window.visibleTextEditors)e.setDecorations(this._decorationType,[])}_show(){const{activeTextEditor:e}=s.window;if(!e||!e.viewColumn)return;if(this._ignore.has(e.document.uri.toString()))return;const[t]=this._view.selection;if(!t)return;const i=this._delegate.getEditorHighlights(t,e.document.uri);i&&e.setDecorations(this._decorationType,i)}_hide(){for(const e of s.window.visibleTextEditors)e.setDecorations(this._decorationType,[])}update(){this._hide(),this._show()}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Navigation=void 0;const s=i(0),n=i(1);t.Navigation=class{constructor(e){this._view=e,this._disposables=[],this._ctxCanNavigate=new n.ContextKey("references-view.canNavigate"),this._disposables.push(s.commands.registerCommand("references-view.next",()=>this.next(!1)),s.commands.registerCommand("references-view.prev",()=>this.previous(!1)))}dispose(){s.Disposable.from(...this._disposables).dispose()}update(e){this._delegate=e,this._ctxCanNavigate.set(Boolean(this._delegate))}_anchor(){if(!this._delegate)return;const[e]=this._view.selection;return e||(s.window.activeTextEditor?this._delegate.nearest(s.window.activeTextEditor.document.uri,s.window.activeTextEditor.selection.active):void 0)}_open(e,t){s.commands.executeCommand("vscode.open",e.uri,{selection:new s.Selection(e.range.start,e.range.start),preserveFocus:t})}previous(e){if(!this._delegate)return;const t=this._anchor();if(!t)return;const i=this._delegate.previous(t),s=this._delegate.location(i);s&&(this._view.reveal(i,{select:!0,focus:!0}),this._open(s,e))}next(e){if(!this._delegate)return;const t=this._anchor();if(!t)return;const i=this._delegate.next(t),s=this._delegate.location(i);s&&(this._view.reveal(i,{select:!0,focus:!0}),this._open(s,e))}}}]);
//# sourceMappingURL=extension.js.map