import*as Common from"../common/common.js";import*as Components from"../components/components.js";import*as PerfUI from"../perf_ui/perf_ui.js";import*as Platform from"../platform/platform.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{ProfileFlameChartDataProvider}from"./CPUProfileFlameChart.js";import{HeapTimelineOverview,IdsRangeChanged,Samples}from"./HeapTimelineOverview.js";import{Formatter,ProfileDataGridNode}from"./ProfileDataGrid.js";import{ProfileEvents,ProfileHeader,ProfileType}from"./ProfileHeader.js";import{ProfileView,ViewTypes,WritableProfileHeader}from"./ProfileView.js";export class HeapProfileView extends ProfileView{constructor(e){super(),this._profileHeader=e,this._profileType=e.profileType();const t=[ViewTypes.Flame,ViewTypes.Heavy,ViewTypes.Tree];(this._profileType.id===SamplingNativeHeapProfileType.TypeId||this._profileType.id===SamplingNativeHeapSnapshotType.TypeId)&&t.push(ViewTypes.Text),this.initialize(new NodeFormatter(this),t);const i=new SamplingHeapProfileModel(e._profile||e.protocolProfile());this.adjustedTotal=i.total,this.setProfile(i),this._selectedSizeText=new UI.Toolbar.ToolbarText,Root.Runtime.experiments.isEnabled("samplingHeapProfilerTimeline")&&(this._timelineOverview=new HeapTimelineOverview,this._timelineOverview.addEventListener(IdsRangeChanged,this._onIdsRangeChanged.bind(this)),this._timelineOverview.show(this.element,this.element.firstChild),this._timelineOverview.start(),this._profileType.addEventListener(SamplingHeapProfileType.Events.StatsUpdate,this._onStatsUpdate,this),this._profileType.once(ProfileEvents.ProfileComplete).then(()=>{this._profileType.removeEventListener(SamplingHeapProfileType.Events.StatsUpdate,this._onStatsUpdate,this),this._timelineOverview.stop(),this._timelineOverview.updateGrid()}))}async toolbarItems(){return[...await super.toolbarItems(),this._selectedSizeText]}_onIdsRangeChanged(e){const t=e.data.minId,i=e.data.maxId;this._selectedSizeText.setText(ls`Selected size: ${Platform.NumberUtilities.bytesToString(e.data.size)}`),this._setSelectionRange(t,i)}_setSelectionRange(e,t){const i=new SamplingHeapProfileModel(this._profileHeader._profile||this._profileHeader.protocolProfile(),e,t);this.adjustedTotal=i.total,this.setProfile(i)}_onStatsUpdate(e){const t=e.data;this._totalTime||(this._timestamps=[],this._sizes=[],this._max=[],this._ordinals=[],this._totalTime=3e4,this._lastOrdinal=0),this._sizes.fill(0),this._sizes.push(0),this._timestamps.push(Date.now()),this._ordinals.push(this._lastOrdinal+1),this._lastOrdinal=t.samples.reduce((e,t)=>Math.max(e,t.ordinal),this._lastOrdinal);for(const e of t.samples){const t=this._ordinals.upperBound(e.ordinal)-1;this._sizes[t]+=e.size}this._max.push(this._sizes.peekLast()),this._timestamps.peekLast()-this._timestamps[0]>this._totalTime&&(this._totalTime*=2);const i={sizes:this._sizes,max:this._max,ids:this._ordinals,timestamps:this._timestamps,totalTime:this._totalTime};this._timelineOverview.setSamples(i)}columnHeader(e){switch(e){case"self":return Common.UIString.UIString("Self Size (bytes)");case"total":return Common.UIString.UIString("Total Size (bytes)")}return""}createFlameChartDataProvider(){return new HeapFlameChartDataProvider(this.profile(),this._profileHeader.heapProfilerModel())}populateTextView(e){let t=`Sampling memory profile.\n\nDate/Time:       ${new Date}\nReport Version:  7\nApp Version:     ${/Chrom\S*/.exec(navigator.appVersion)[0]||"Unknown"}\nNode Weight:     1 KiB\nTotal Size:      ${Math.round(this.profile().root.total/1024)} KiB\n----\n\nCall graph:\n`;const i=this.profile().root.children.sort((e,t)=>t.total-e.total),r=this.profile().modules.map(e=>Object.assign({address:BigInt(e.baseAddress),endAddress:BigInt(e.baseAddress)+BigInt(e.size)},e));r.sort((e,t)=>e.address>t.address?1:e.address<t.address?-1:0);for(const e of i)o("    ",e!==i.peekLast(),e);t+="\nBinary Images:\n";for(const e of r){const i=/[^/\\]*$/.exec(e.name)[0],r="1.0",o=e.uuid.includes("-")?e.uuid:e.uuid.replace(/(.{8})(.{4})(.{4})(.{4})(.{12}).*/,"$1-$2-$3-$4-$5");t+=("0x"+e.address.toString(16)).padStart(18)+" - ",t+=""+("0x"+(e.endAddress-BigInt(1)).toString(16)).padStart(18),t+=`  ${i} (${r}) <${o}> ${e.name}\n`}function o(e,i,s){const a=/0x[0-9a-f]*|[0-9]*/.exec(s.functionName)[0]||"";let n;if(a){const e=BigInt(a),t=r.upperBound(e,(e,t)=>e-t.address);t>0&&e<r[t-1].endAddress&&(n=r[t-1])}const l=(a?s.functionName.substr(a.length+1):s.functionName)||"???";if(t+=`${e}${Math.round(s.total/1024)}  ${l}  `,n){const e=/[^/\\]*$/.exec(n.name);e&&(t+=`(in ${e})  `);const i=BigInt(a)-n.address;t+=`load address ${n.baseAddress} + 0x${i.toString(16)}  `}a&&(t+=`[${a}]`),t+="\n";const p=e+(i?"+!:|"[e.length/2%"+!:|".length]:" ")+" ",d=s.children.sort((e,t)=>t.total-e.total);for(const e of d)o(p,e!==d.peekLast(),e)}e.contentElement.createChild("pre","profile-text-view monospace").textContent=t}}export class SamplingHeapProfileTypeBase extends ProfileType{constructor(e,t){super(e,t),this._recording=!1}profileBeingRecorded(){return super.profileBeingRecorded()}typeName(){return"Heap"}fileExtension(){return".heapprofile"}get buttonTooltip(){return this._recording?ls`Stop heap profiling`:ls`Start heap profiling`}buttonClicked(){return this._recording?this._stopRecordingProfile():this._startRecordingProfile(),this._recording}_startRecordingProfile(){const e=UI.Context.Context.instance().flavor(SDK.HeapProfilerModel.HeapProfilerModel);if(this.profileBeingRecorded()||!e)return;const t=new SamplingHeapProfileHeader(e,this);this.setProfileBeingRecorded(t),this.addProfile(t),t.updateStatus(ls`Recording…`);const i=UI.Icon.Icon.create("smallicon-warning");i.title=ls`Heap profiler is recording`,self.UI.inspectorView.setPanelIcon("heap_profiler",i),this._recording=!0,this._startSampling()}async _stopRecordingProfile(){if(this._recording=!1,!this.profileBeingRecorded()||!this.profileBeingRecorded().heapProfilerModel())return;this.profileBeingRecorded().updateStatus(ls`Stopping…`);const e=await this._stopSampling(),t=this.profileBeingRecorded();t&&(console.assert(e),t.setProtocolProfile(e),t.updateStatus(""),this.setProfileBeingRecorded(null)),self.UI.inspectorView.setPanelIcon("heap_profiler",null),this.dispatchEventToListeners(ProfileEvents.ProfileComplete,t)}createProfileLoadedFromFile(e){return new SamplingHeapProfileHeader(null,this,e)}profileBeingRecordedRemoved(){this._stopRecordingProfile()}_startSampling(){throw"Not implemented"}_stopSampling(){throw"Not implemented"}}export class SamplingHeapProfileType extends SamplingHeapProfileTypeBase{constructor(){super(SamplingHeapProfileType.TypeId,ls`Allocation sampling`),SamplingHeapProfileType.instance=this,this._updateTimer=null,this._updateIntervalMs=200}get treeItemTitle(){return ls`SAMPLING PROFILES`}get description(){return ls`Record memory allocations using sampling method.
              This profile type has minimal performance overhead and can be used for long running operations.
              It provides good approximation of allocations broken down by JavaScript execution stack.`}hasTemporaryView(){return Root.Runtime.experiments.isEnabled("samplingHeapProfilerTimeline")}_startSampling(){this.profileBeingRecorded().heapProfilerModel().startSampling(),Root.Runtime.experiments.isEnabled("samplingHeapProfilerTimeline")&&(this._updateTimer=setTimeout(this._updateStats.bind(this),this._updateIntervalMs))}_stopSampling(){return clearTimeout(this._updateTimer),this._updateTimer=null,this.dispatchEventToListeners(SamplingHeapProfileType.Events.RecordingStopped),this.profileBeingRecorded().heapProfilerModel().stopSampling()}async _updateStats(){const e=await this.profileBeingRecorded().heapProfilerModel().getSamplingProfile();this._updateTimer&&(this.dispatchEventToListeners(SamplingHeapProfileType.Events.StatsUpdate,e),this._updateTimer=setTimeout(this._updateStats.bind(this),this._updateIntervalMs))}}SamplingHeapProfileType.TypeId="SamplingHeap",SamplingHeapProfileType.Events={RecordingStopped:Symbol("RecordingStopped"),StatsUpdate:Symbol("StatsUpdate")};export class SamplingNativeHeapProfileType extends SamplingHeapProfileTypeBase{constructor(){super(SamplingNativeHeapProfileType.TypeId,ls`Native memory allocation sampling`),SamplingNativeHeapProfileType.instance=this}get treeItemTitle(){return ls`NATIVE SAMPLING PROFILES`}get description(){return ls`Allocation profiles show sampled native memory allocations from the renderer process.`}_startSampling(){this.profileBeingRecorded().heapProfilerModel().startNativeSampling()}_stopSampling(){return this.profileBeingRecorded().heapProfilerModel().stopNativeSampling()}}SamplingNativeHeapProfileType.TypeId="SamplingNativeHeapRecording";export class SamplingNativeHeapSnapshotType extends SamplingHeapProfileTypeBase{constructor(e){super(SamplingNativeHeapSnapshotType.TypeId,ls`Native memory allocation snapshot (${e})`)}isInstantProfile(){return!0}get treeItemTitle(){return ls`NATIVE SNAPSHOTS`}get description(){return ls`Native memory snapshots show sampled native allocations in the renderer process since start up.
              Chrome has to be started with --memlog=all flag. Check flags at chrome://flags`}buttonClicked(){return this._takeSnapshot(),!1}async _takeSnapshot(){if(this.profileBeingRecorded())return;const e=UI.Context.Context.instance().flavor(SDK.HeapProfilerModel.HeapProfilerModel);if(!e)return;const t=new SamplingHeapProfileHeader(e,this,ls`Snapshot ${this.nextProfileUid()}`);this.setProfileBeingRecorded(t),this.addProfile(t),t.updateStatus(ls`Snapshotting…`);const i=await this._takeNativeSnapshot(e),r=this.profileBeingRecorded();r&&(console.assert(i),r.setProtocolProfile(i),r.updateStatus(""),this.setProfileBeingRecorded(null)),this.dispatchEventToListeners(ProfileEvents.ProfileComplete,r)}_takeNativeSnapshot(e){throw"Not implemented"}}SamplingNativeHeapSnapshotType.TypeId="SamplingNativeHeapSnapshot";export class SamplingNativeHeapSnapshotBrowserType extends SamplingNativeHeapSnapshotType{constructor(){super(ls`Browser`),SamplingNativeHeapSnapshotBrowserType.instance=this}async _takeNativeSnapshot(e){return e.takeNativeBrowserSnapshot()}}export class SamplingNativeHeapSnapshotRendererType extends SamplingNativeHeapSnapshotType{constructor(){super(ls`Renderer`),SamplingNativeHeapSnapshotRendererType.instance=this}async _takeNativeSnapshot(e){return e.takeNativeSnapshot()}}export class SamplingHeapProfileHeader extends WritableProfileHeader{constructor(e,t,i){super(e&&e.debuggerModel(),t,i||Common.UIString.UIString("Profile %d",t.nextProfileUid())),this._heapProfilerModel=e,this._protocolProfile={head:{callFrame:{},children:[]}}}createView(){return new HeapProfileView(this)}protocolProfile(){return this._protocolProfile}heapProfilerModel(){return this._heapProfilerModel}}export class SamplingHeapProfileNode extends SDK.ProfileTreeModel.ProfileNode{constructor(e){super(e.callFrame||{functionName:e.functionName,scriptId:e.scriptId,url:e.url,lineNumber:e.lineNumber-1,columnNumber:e.columnNumber-1}),this.self=e.selfSize}}export class SamplingHeapProfileModel extends SDK.ProfileTreeModel.ProfileTreeModel{constructor(e,t,i){super(),this.modules=e.modules||[];let r=null;if(t||i){r=new Map,t=t||0,i=i||1/0;for(const o of e.samples){if(o.ordinal<t||o.ordinal>i)continue;const e=r.get(o.nodeId)||0;r.set(o.nodeId,e+o.size)}}function o(e){return e.children=e.children.filter(o),!(!e.children.length&&!e.self)}this.initialize(function(e){const t=new SamplingHeapProfileNode(e),i=[e],s=[t];for(;i.length;){const e=i.pop(),t=s.pop();t.children=e.children.map(e=>{const t=new SamplingHeapProfileNode(e);return r&&(t.self=r.get(e.id)||0),t}),i.push(...e.children),s.push(...t.children)}return o(t),t}(e.head))}}export class NodeFormatter{constructor(e){this._profileView=e}formatValue(e){return Number.withThousandsSeparator(e)}formatValueAccessibleText(e){return ls`${e} bytes`}formatPercent(e,t){return Common.UIString.UIString("%.2f %%",e)}linkifyNode(e){const t=this._profileView._profileHeader.heapProfilerModel(),i=t?t.target():null;return this._profileView.linkifier().maybeLinkifyConsoleCallFrame(i,e.profileNode.callFrame,{className:"profile-node-file"})}}export class HeapFlameChartDataProvider extends ProfileFlameChartDataProvider{constructor(e,t){super(),this._profile=e,this._heapProfilerModel=t}minimumBoundary(){return 0}totalTime(){return this._profile.root.total}formatValue(e,t){return Common.UIString.UIString("%s KB",Number.withThousandsSeparator(e/1e3))}_calculateTimelineData(){const e=function e(t){return t.children.reduce((t,i)=>t+e(i),1)}(this._profile.root),t=new Array(e),i=new Uint16Array(e),r=new Float32Array(e),o=new Float64Array(e);let s=0,a=0,n=0,l=0;return function e(p){const d=n;t[l]=p,i[l]=s,r[l]=p.total,o[l]=n,++l,++s,p.children.forEach(e),--s,a=Math.max(a,s),n=d+p.total}(this._profile.root),this._maxStackDepth=a+1,this._entryNodes=t,this._timelineData=new PerfUI.FlameChart.TimelineData(i,r,o,null),this._timelineData}prepareHighlightedEntryInfo(e){const t=this._entryNodes[e];if(!t)return null;const i=[];function r(e,t){i.push({title:e,value:t})}r(ls`Name`,UI.UIUtils.beautifyFunctionName(t.functionName)),r(ls`Self size`,Platform.NumberUtilities.bytesToString(t.self)),r(ls`Total size`,Platform.NumberUtilities.bytesToString(t.total));const o=new Components.Linkifier.Linkifier,s=o.maybeLinkifyConsoleCallFrame(this._heapProfilerModel?this._heapProfilerModel.target():null,t.callFrame);return s&&r(ls`URL`,s.textContent),o.dispose(),ProfileView.buildPopoverTable(i)}}