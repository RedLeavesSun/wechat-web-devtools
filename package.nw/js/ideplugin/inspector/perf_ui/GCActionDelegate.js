import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";export class GCActionDelegate{handleAction(e,o){for(const e of SDK.SDKModel.TargetManager.instance().models(SDK.HeapProfilerModel.HeapProfilerModel))e.collectGarbage();return!0}}