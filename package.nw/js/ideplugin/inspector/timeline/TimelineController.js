import*as Bindings from"../bindings/bindings.js";import*as Common from"../common/common.js";import*as Extensions from"../extensions/extensions.js";import*as ProtocolClient from"../protocol_client/protocol_client.js";import*as SDK from"../sdk/sdk.js";import*as TimelineModel from"../timeline_model/timeline_model.js";import{ExtensionTracingSession}from"./ExtensionTracingSession.js";import{PerformanceModel}from"./PerformanceModel.js";import{Client as TimelineLoaderClient}from"./TimelineLoader.js";export class TimelineController{constructor(e,i){this._target=e,this._tracingManager=e.model(SDK.TracingManager.TracingManager),this._performanceModel=new PerformanceModel,this._performanceModel.setMainTarget(e),this._client=i;const t=new Bindings.TempFile.TempFileBackingStorage;this._tracingModel=new SDK.TracingModel.TracingModel(t),this._extensionSessions=[],SDK.SDKModel.TargetManager.instance().observeModels(SDK.CPUProfilerModel.CPUProfilerModel,this)}dispose(){SDK.SDKModel.TargetManager.instance().unobserveModels(SDK.CPUProfilerModel.CPUProfilerModel,this)}mainTarget(){return this._target}async startRecording(e,i){function t(e){return"disabled-by-default-"+e}this._extensionTraceProviders=self.Extensions.extensionServer.traceProviders().slice();const o=["-*","devtools.timeline",t("devtools.timeline"),t("devtools.timeline.frame"),"v8.execute",TimelineModel.TimelineModel.TimelineModelImpl.Category.Console,TimelineModel.TimelineModel.TimelineModelImpl.Category.UserTiming,TimelineModel.TimelineModel.TimelineModelImpl.Category.Loading];o.push(TimelineModel.TimelineModel.TimelineModelImpl.Category.LatencyInfo),Root.Runtime.experiments.isEnabled("timelineFlowEvents")&&o.push("devtools.timeline.async"),Root.Runtime.experiments.isEnabled("timelineV8RuntimeCallStats")&&e.enableJSSampling&&o.push(t("v8.runtime_stats_sampling")),!Root.Runtime.queryParam("timelineTracingJSProfileDisabled")&&e.enableJSSampling&&o.push(t("v8.cpu_profiler")),o.push(t("devtools.timeline.stack")),Root.Runtime.experiments.isEnabled("timelineInvalidationTracking")&&o.push(t("devtools.timeline.invalidationTracking")),e.capturePictures&&o.push(t("devtools.timeline.layers"),t("devtools.timeline.picture"),t("blink.graphics_context_annotations")),e.captureFilmStrip&&o.push(t("devtools.screenshot")),this._extensionSessions=i.map(e=>new ExtensionTracingSession(e,this._performanceModel)),this._extensionSessions.forEach(e=>e.start()),this._performanceModel.setRecordStartTime(Date.now());const n=await this._startRecordingWithCategories(o.join(","),e.enableJSSampling);return n[ProtocolClient.InspectorBackend.ProtocolError]&&(await this._waitForTracingToStop(!1),await SDK.SDKModel.TargetManager.instance().resumeAllTargets()),n}async stopRecording(){return this._tracingManager&&this._tracingManager.stop(),this._client.loadingStarted(),await this._waitForTracingToStop(!0),this._allSourcesFinished(),this._performanceModel}_waitForTracingToStop(e){const i=[];this._tracingManager&&e&&i.push(new Promise(e=>{this._tracingCompleteCallback=e})),i.push(this._stopProfilingOnAllModels());const t=this._extensionSessions.map(e=>e.stop());return t.length&&i.push(Promise.race([Promise.all(t),new Promise(e=>setTimeout(e,5e3))])),Promise.all(i)}modelAdded(e){this._profiling&&e.startRecording()}modelRemoved(e){}_startProfilingOnAllModels(){this._profiling=!0;const e=SDK.SDKModel.TargetManager.instance().models(SDK.CPUProfilerModel.CPUProfilerModel);return Promise.all(e.map(e=>e.startRecording()))}_addCpuProfile(e,i){i?(this._cpuProfiles||(this._cpuProfiles=new Map),this._cpuProfiles.set(e,i)):Common.Console.Console.instance().warn(Common.UIString.UIString("CPU profile for a target is not available."))}_stopProfilingOnAllModels(){const e=this._profiling?SDK.SDKModel.TargetManager.instance().models(SDK.CPUProfilerModel.CPUProfilerModel):[];this._profiling=!1;const i=[];for(const t of e){const e=t.target().id(),o=t.stopRecording().then(this._addCpuProfile.bind(this,e));i.push(o)}return Promise.all(i)}async _startRecordingWithCategories(e,i){if(await SDK.SDKModel.TargetManager.instance().suspendAllTargets("performance-timeline"),i&&Root.Runtime.queryParam("timelineTracingJSProfileDisabled")&&await this._startProfilingOnAllModels(),this._tracingManager)return this._tracingManager.start(this,e,"")}traceEventsCollected(e){this._tracingModel.addEvents(e)}tracingComplete(){this._tracingCompleteCallback(),this._tracingCompleteCallback=null}_allSourcesFinished(){this._client.processingStarted(),setTimeout(()=>this._finalizeTrace(),0)}async _finalizeTrace(){this._injectCpuProfileEvents(),await SDK.SDKModel.TargetManager.instance().resumeAllTargets(),this._tracingModel.tracingComplete(),this._client.loadingComplete(this._tracingModel)}_injectCpuProfileEvent(e,i,t){if(!t)return;const o={cat:SDK.TracingModel.DevToolsMetadataEventCategory,ph:SDK.TracingModel.Phase.Instant,ts:1e3*this._tracingModel.maximumRecordTime(),pid:e,tid:i,name:TimelineModel.TimelineModel.RecordType.CpuProfile,args:{data:{cpuProfile:t}}};this._tracingModel.addEvents([o])}_buildTargetToProcessIdMap(){const e=TimelineModel.TimelineModel.TimelineModelImpl.DevToolsMetadataEvent,i=this._tracingModel.devToolsMetadataEvents(),t=i.find(i=>i.name===e.TracingStartedInBrowser);if(!t)return null;const o=new Platform.Multimap,n=new Map,r=t.args.data.frames;for(const e of r)n.set(e.frame,e.processId);for(const t of i){const i=t.args.data;switch(t.name){case e.FrameCommittedInBrowser:i.processId?n.set(i.frame,i.processId):o.set(i.processPseudoId,i.frame);break;case e.ProcessReadyInBrowser:for(const e of o.get(i.processPseudoId)||[])n.set(e,i.processId)}}const s=r.find(e=>!e.parent).processId,a=this._tracingModel.processById(s);return a&&n.set(SDK.SDKModel.TargetManager.instance().mainTarget().id(),a.id()),n}_injectCpuProfileEvents(){if(!this._cpuProfiles)return;const e=TimelineModel.TimelineModel.TimelineModelImpl.DevToolsMetadataEvent,i=this._tracingModel.devToolsMetadataEvents(),t=this._buildTargetToProcessIdMap();if(t)for(const[e,i]of this._cpuProfiles){const o=t.get(e);if(!o)continue;const n=this._tracingModel.processById(o),r=n&&n.threadByName(TimelineModel.TimelineModel.TimelineModelImpl.RendererMainThreadName);r&&this._injectCpuProfileEvent(o,r.id(),i)}else{const t=i.filter(i=>i.name===e.TracingStartedInPage).peekLast();if(t){const e=t.thread.process().id(),i=this._cpuProfiles.get(this._tracingManager.target().id());this._injectCpuProfileEvent(e,t.thread.id(),i)}else{let e=0;for(const i of this._cpuProfiles){const t=SDK.SDKModel.TargetManager.instance().targetById(i[0]),o=t&&t.name();this._tracingModel.addEvents(TimelineModel.TimelineJSProfile.TimelineJSProfileProcessor.buildTraceProfileFromCpuProfile(i[1],++e,1===e,o))}}}const o=i.filter(i=>i.name===e.TracingSessionIdForWorker);for(const e of o){const i=e.args.data.workerId,t=this._cpuProfiles.get(i);this._injectCpuProfileEvent(e.thread.process().id(),e.args.data.workerThreadId,t)}this._cpuProfiles=null}tracingBufferUsage(e){this._client.recordingProgress(e)}eventsRetrievalProgress(e){this._client.loadingProgress(e)}}export class Client{recordingProgress(e){}}export let RecordingOptions;