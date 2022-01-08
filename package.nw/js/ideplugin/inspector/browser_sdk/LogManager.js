import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";const modelToEventListeners=new WeakMap;export class LogManager{constructor(){SDK.SDKModel.TargetManager.instance().observeModels(SDK.LogModel.LogModel,this)}modelAdded(e){const o=[];o.push(e.addEventListener(SDK.LogModel.Events.EntryAdded,this._logEntryAdded,this)),modelToEventListeners.set(e,o)}modelRemoved(e){const o=modelToEventListeners.get(e);o&&Common.EventTarget.EventTarget.removeEventListeners(o)}_logEntryAdded(e){const o=e.data,t=o.logModel.target(),n=new SDK.ConsoleModel.ConsoleMessage(t.model(SDK.RuntimeModel.RuntimeModel),o.entry.source,o.entry.level,o.entry.text,void 0,o.entry.url,o.entry.lineNumber,void 0,[o.entry.text,...o.entry.args||[]],o.entry.stackTrace,o.entry.timestamp,void 0,void 0,o.entry.workerId);if(o.entry.networkRequestId&&SDK.NetworkLog.NetworkLog.instance().associateConsoleMessageWithRequest(n,o.entry.networkRequestId),n.source===SDK.ConsoleModel.MessageSource.Worker){const e=n.workerId||"";if(SDK.SDKModel.TargetManager.instance().targetById(e))return;setTimeout(()=>{SDK.SDKModel.TargetManager.instance().targetById(e)||SDK.ConsoleModel.ConsoleModel.instance().addMessage(n)},1e3)}else SDK.ConsoleModel.ConsoleModel.instance().addMessage(n)}}