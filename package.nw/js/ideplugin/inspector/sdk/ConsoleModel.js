import*as Common from"../common/common.js";import*as HostModule from"../host/host.js";import{CPUProfilerModel,EventData,Events as CPUProfilerModelEvents}from"./CPUProfilerModel.js";import{Events as DebuggerModelEvents,Location}from"./DebuggerModel.js";import{LogModel}from"./LogModel.js";import{RemoteObject}from"./RemoteObject.js";import{Events as ResourceTreeModelEvents,ResourceTreeModel}from"./ResourceTreeModel.js";import{Events as RuntimeModelEvents,ExecutionContext,RuntimeModel}from"./RuntimeModel.js";import{Observer,Target,TargetManager}from"./SDKModel.js";const _events=Symbol("SDK.ConsoleModel.events");let settingsInstance;export class ConsoleModel extends Common.ObjectWrapper.ObjectWrapper{constructor(){super(),this._messages=[],this._messageByExceptionId=new Map,this._warnings=0,this._errors=0,this._violations=0,this._pageLoadSequenceNumber=0,TargetManager.instance().observeTargets(this)}static instance(e={forceNew:null}){const{forceNew:t}=e;return settingsInstance&&!t||(settingsInstance=new ConsoleModel),settingsInstance}targetAdded(e){const t=e.model(ResourceTreeModel);if(!t||t.cachedResourcesLoaded())return void this._initTarget(e);const s=t.addEventListener(ResourceTreeModelEvents.CachedResourcesLoaded,()=>{Common.EventTarget.EventTarget.removeEventListeners([s]),this._initTarget(e)})}_initTarget(e){const t=[],s=e.model(CPUProfilerModel);s&&(t.push(s.addEventListener(CPUProfilerModelEvents.ConsoleProfileStarted,this._consoleProfileStarted.bind(this,s))),t.push(s.addEventListener(CPUProfilerModelEvents.ConsoleProfileFinished,this._consoleProfileFinished.bind(this,s))));const o=e.model(ResourceTreeModel);o&&!e.parentTarget()&&t.push(o.addEventListener(ResourceTreeModelEvents.MainFrameNavigated,this._mainFrameNavigated,this));const r=e.model(RuntimeModel);r&&(t.push(r.addEventListener(RuntimeModelEvents.ExceptionThrown,this._exceptionThrown.bind(this,r))),t.push(r.addEventListener(RuntimeModelEvents.ExceptionRevoked,this._exceptionRevoked.bind(this,r))),t.push(r.addEventListener(RuntimeModelEvents.ConsoleAPICalled,this._consoleAPICalled.bind(this,r))),e.parentTarget()||t.push(r.debuggerModel().addEventListener(DebuggerModelEvents.GlobalObjectCleared,this._clearIfNecessary,this)),t.push(r.addEventListener(RuntimeModelEvents.QueryObjectRequested,this._queryObjectRequested.bind(this,r)))),e[_events]=t}targetRemoved(e){const t=e.model(RuntimeModel);t&&this._messageByExceptionId.delete(t),Common.EventTarget.EventTarget.removeEventListeners(e[_events]||[])}async evaluateCommandInConsole(e,t,s,o){const r=await e.evaluate({expression:s,objectGroup:"console",includeCommandLineAPI:o,silent:!1,returnByValue:!1,generatePreview:!0,replMode:!0,allowUnsafeEvalBlockedByCSP:!1},Common.Settings.Settings.instance().moduleSetting("consoleUserActivationEval").get(),!1);HostModule.userMetrics.actionTaken(Host.UserMetrics.Action.ConsoleEvaluated),r.error||(await Common.Console.Console.instance().showPromise(),this.dispatchEventToListeners(Events.CommandEvaluated,{result:r.object,commandMessage:t,exceptionDetails:r.exceptionDetails}))}addCommandMessage(e,t){const s=new ConsoleMessage(e.runtimeModel,MessageSource.JS,null,t,MessageType.Command);return s.setExecutionContextId(e.id),this.addMessage(s),s}addMessage(e){e._pageLoadSequenceNumber=this._pageLoadSequenceNumber,e.source===MessageSource.ConsoleAPI&&e.type===MessageType.Clear&&this._clearIfNecessary(),this._messages.push(e);const t=e.runtimeModel();if(e._exceptionId&&t){let s=this._messageByExceptionId.get(t);s||(s=new Map,this._messageByExceptionId.set(t,s)),s.set(e._exceptionId,e)}this._incrementErrorWarningCount(e),this.dispatchEventToListeners(Events.MessageAdded,e)}_exceptionThrown(e,t){const s=t.data,o=ConsoleMessage.fromException(e,s.details,void 0,s.timestamp,void 0);o.setExceptionId(s.details.exceptionId),this.addMessage(o)}_exceptionRevoked(e,t){const s=t.data,o=this._messageByExceptionId.get(e),r=o?o.get(s):null;r&&(this._errors--,r.level=MessageLevel.Verbose,this.dispatchEventToListeners(Events.MessageUpdated,r))}_consoleAPICalled(e,t){const s=t.data;let o=MessageLevel.Info;s.type===MessageType.Debug?o=MessageLevel.Verbose:s.type===MessageType.Error||s.type===MessageType.Assert?o=MessageLevel.Error:s.type===MessageType.Warning?o=MessageLevel.Warning:s.type!==MessageType.Info&&s.type!==MessageType.Log||(o=MessageLevel.Info);let r="";s.args.length&&s.args[0].unserializableValue?r=s.args[0].unserializableValue:!s.args.length||"object"==typeof s.args[0].value&&null!==s.args[0].value?s.args.length&&s.args[0].description&&(r=s.args[0].description):r=s.args[0].value+"";const n=s.stackTrace&&s.stackTrace.callFrames.length?s.stackTrace.callFrames[0]:null,a=new ConsoleMessage(e,MessageSource.ConsoleAPI,o,r,s.type,n?n.url:void 0,n?n.lineNumber:void 0,n?n.columnNumber:void 0,s.args,s.stackTrace,s.timestamp,s.executionContextId,void 0,void 0,s.context);this.addMessage(a)}_queryObjectRequested(e,t){const s=new ConsoleMessage(e,MessageSource.ConsoleAPI,MessageLevel.Info,"",MessageType.QueryObjectResult,void 0,void 0,void 0,[t.data.objects]);this.addMessage(s)}_clearIfNecessary(){Common.Settings.Settings.instance().moduleSetting("preserveConsoleLog").get()||this._clear(),++this._pageLoadSequenceNumber}_mainFrameNavigated(e){Common.Settings.Settings.instance().moduleSetting("preserveConsoleLog").get()&&Common.Console.Console.instance().log(Common.UIString.UIString("Navigated to %s",e.data.url))}_consoleProfileStarted(e,t){const s=t.data;this._addConsoleProfileMessage(e,MessageType.Profile,s.scriptLocation,Common.UIString.UIString("Profile '%s' started.",s.title))}_consoleProfileFinished(e,t){const s=t.data;this._addConsoleProfileMessage(e,MessageType.ProfileEnd,s.scriptLocation,Common.UIString.UIString("Profile '%s' finished.",s.title))}_addConsoleProfileMessage(e,t,s,o){const r=[{functionName:"",scriptId:s.scriptId,url:s.script()?s.script().contentURL():"",lineNumber:s.lineNumber,columnNumber:s.columnNumber||0}];this.addMessage(new ConsoleMessage(e.runtimeModel(),MessageSource.ConsoleAPI,MessageLevel.Info,o,t,void 0,void 0,void 0,r))}_incrementErrorWarningCount(e){if(e.source!==MessageSource.Violation)switch(e.level){case MessageLevel.Warning:this._warnings++;break;case MessageLevel.Error:this._errors++}else this._violations++}messages(){return this._messages}requestClearMessages(){for(const e of TargetManager.instance().models(LogModel))e.requestClear();for(const e of TargetManager.instance().models(RuntimeModel))e.discardConsoleEntries();this._clear()}_clear(){this._messages=[],this._messageByExceptionId.clear(),this._errors=0,this._warnings=0,this._violations=0,this.dispatchEventToListeners(Events.ConsoleCleared)}errors(){return this._errors}warnings(){return this._warnings}violations(){return this._violations}async saveToTempVariable(e,t){if(!t||!e)return void a(null);const s=e,o=await s.globalObject("",!1);if(o.exceptionDetails||!o.object)return void a(o.object||null);const r=o.object,n=await r.callFunction((function(e){let t=1;for(;"temp"+t in this;)++t;const s="temp"+t;return this[s]=e,s}),[RemoteObject.toCallArgument(t)]);if(r.release(),n.wasThrown||!n.object||"string"!==n.object.type)a(n.object||null);else{const e=n.object.value,t=this.addCommandMessage(s,e);this.evaluateCommandInConsole(s,t,e,!1)}function a(e){let t=Common.UIString.UIString("Failed to save to temp variable.");e&&(t+=" "+e.description),Common.Console.Console.instance().error(t)}n.object&&n.object.release()}}export const Events={ConsoleCleared:Symbol("ConsoleCleared"),MessageAdded:Symbol("MessageAdded"),MessageUpdated:Symbol("MessageUpdated"),CommandEvaluated:Symbol("CommandEvaluated")};export class ConsoleMessage{constructor(e,t,s,o,r,n,a,i,l,c,d,u,g,m,p){this._runtimeModel=e,this.source=t,this.level=s,this.messageText=o,this.type=r||MessageType.Log,this.url=n||void 0,this.line=a||0,this.column=i||0,this.parameters=l,this.stackTrace=c,this.timestamp=d||Date.now(),this.executionContextId=u||0,this.scriptId=g||null,this.workerId=m||null,!this.executionContextId&&this._runtimeModel&&(this.scriptId?this.executionContextId=this._runtimeModel.executionContextIdForScriptId(this.scriptId):this.stackTrace&&(this.executionContextId=this._runtimeModel.executionContextForStackTrace(this.stackTrace))),p&&(this.context=p.match(/[^#]*/)[0])}static fromException(e,t,s,o,r){return new ConsoleMessage(e,MessageSource.JS,MessageLevel.Error,RuntimeModel.simpleTextFromException(t),s,r||t.url,t.lineNumber,t.columnNumber,t.exception?[RemoteObject.fromLocalObject(t.text),t.exception]:void 0,t.stackTrace,o,t.executionContextId,t.scriptId)}runtimeModel(){return this._runtimeModel}target(){return this._runtimeModel?this._runtimeModel.target():null}setOriginatingMessage(e){this._originatingConsoleMessage=e,this.executionContextId=e.executionContextId}setExecutionContextId(e){this.executionContextId=e}setExceptionId(e){this._exceptionId=e}originatingMessage(){return this._originatingConsoleMessage}isGroupMessage(){return this.type===MessageType.StartGroup||this.type===MessageType.StartGroupCollapsed||this.type===MessageType.EndGroup}isGroupStartMessage(){return this.type===MessageType.StartGroup||this.type===MessageType.StartGroupCollapsed}isErrorOrWarning(){return this.level===MessageLevel.Warning||this.level===MessageLevel.Error}isGroupable(){const e=this.level===MessageLevel.Error&&(this.source===MessageSource.JS||this.source===MessageSource.Network);return this.source!==MessageSource.ConsoleAPI&&this.type!==MessageType.Command&&this.type!==MessageType.Result&&this.type!==MessageType.System&&!e}groupCategoryKey(){return[this.source,this.level,this.type,this._pageLoadSequenceNumber].join(":")}isEqual(e){if(!e)return!1;if(!this._isEqualStackTraces(this.stackTrace,e.stackTrace))return!1;if(this.parameters){if(!e.parameters||this.parameters.length!==e.parameters.length)return!1;for(let t=0;t<e.parameters.length;++t){if("object"===e.parameters[t].type&&"error"!==e.parameters[t].subtype)return!1;if(this.parameters[t].type!==e.parameters[t].type||this.parameters[t].value!==e.parameters[t].value||this.parameters[t].description!==e.parameters[t].description)return!1}}return this.runtimeModel()===e.runtimeModel()&&this.source===e.source&&this.type===e.type&&this.level===e.level&&this.line===e.line&&this.url===e.url&&this.messageText===e.messageText&&this.executionContextId===e.executionContextId}_isEqualStackTraces(e,t){if(!e!=!t)return!1;if(!e)return!0;const s=e.callFrames,o=t.callFrames;if(s.length!==o.length)return!1;for(let e=0,t=s.length;e<t;++e)if(s[e].url!==o[e].url||s[e].functionName!==o[e].functionName||s[e].lineNumber!==o[e].lineNumber||s[e].columnNumber!==o[e].columnNumber)return!1;return this._isEqualStackTraces(e.parent,t.parent)}}export const MessageSource={XML:"xml",JS:"javascript",Network:"network",ConsoleAPI:"console-api",Storage:"storage",AppCache:"appcache",Rendering:"rendering",CSS:"css",Security:"security",Deprecation:"deprecation",Worker:"worker",Violation:"violation",Intervention:"intervention",Recommendation:"recommendation",Other:"other"};export const MessageType={Log:"log",Debug:"debug",Info:"info",Error:"error",Warning:"warning",Dir:"dir",DirXML:"dirxml",Table:"table",Trace:"trace",Clear:"clear",StartGroup:"startGroup",StartGroupCollapsed:"startGroupCollapsed",EndGroup:"endGroup",Assert:"assert",Result:"result",Profile:"profile",ProfileEnd:"profileEnd",Command:"command",System:"system",QueryObjectResult:"queryObjectResult"};export const MessageLevel={Verbose:"verbose",Info:"info",Warning:"warning",Error:"error"};export const MessageSourceDisplayName=new Map([[MessageSource.XML,"xml"],[MessageSource.JS,"javascript"],[MessageSource.Network,"network"],[MessageSource.ConsoleAPI,"console-api"],[MessageSource.Storage,"storage"],[MessageSource.AppCache,"appcache"],[MessageSource.Rendering,"rendering"],[MessageSource.CSS,"css"],[MessageSource.Security,"security"],[MessageSource.Deprecation,"deprecation"],[MessageSource.Worker,"worker"],[MessageSource.Violation,"violation"],[MessageSource.Intervention,"intervention"],[MessageSource.Recommendation,"recommendation"],[MessageSource.Other,"other"]]);export let ConsoleAPICall;export let ExceptionWithTimestamp;