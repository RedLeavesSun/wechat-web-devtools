import*as Common from"../common/common.js";import*as Components from"../components/components.js";import*as SDK from"../sdk/sdk.js";import*as TimelineModel from"../timeline_model/timeline_model.js";import*as UI from"../ui/ui.js";import{EventsTimelineTreeView}from"./EventsTimelineTreeView.js";import{Events,PerformanceModel}from"./PerformanceModel.js";import{TimelineLayersView}from"./TimelineLayersView.js";import{TimelinePaintProfilerView}from"./TimelinePaintProfilerView.js";import{TimelineModeViewDelegate,TimelineSelection}from"./TimelinePanel.js";import{BottomUpTimelineTreeView,CallTreeTimelineTreeView,TimelineTreeView}from"./TimelineTreeView.js";import{TimelineDetailsContentHelper,TimelineUIUtils}from"./TimelineUIUtils.js";export class TimelineDetailsView extends UI.Widget.VBox{constructor(e){super(),this.element.classList.add("timeline-details"),this._detailsLinkifier=new Components.Linkifier.Linkifier,this._tabbedPane=new UI.TabbedPane.TabbedPane,this._tabbedPane.show(this.element);const t=Tab;this._defaultDetailsWidget=new UI.Widget.VBox,this._defaultDetailsWidget.element.classList.add("timeline-details-view"),this._defaultDetailsContentElement=this._defaultDetailsWidget.element.createChild("div","timeline-details-view-body vbox"),this._appendTab(t.Details,Common.UIString.UIString("Summary"),this._defaultDetailsWidget),this.setPreferredTab(t.Details),this._rangeDetailViews=new Map;const i=new BottomUpTimelineTreeView;this._appendTab(t.BottomUp,Common.UIString.UIString("Bottom-Up"),i),this._rangeDetailViews.set(t.BottomUp,i);const n=new CallTreeTimelineTreeView;this._appendTab(t.CallTree,Common.UIString.UIString("Call Tree"),n),this._rangeDetailViews.set(t.CallTree,n);const s=new EventsTimelineTreeView(e);this._appendTab(t.EventLog,Common.UIString.UIString("Event Log"),s),this._rangeDetailViews.set(t.EventLog,s),this._additionalMetricsToolbar=new UI.Toolbar.Toolbar("timeline-additional-metrics"),this.element.appendChild(this._additionalMetricsToolbar.element),this._tabbedPane.addEventListener(UI.TabbedPane.Events.TabSelected,this._tabSelected,this)}setModel(e,t){this._model!==e&&(this._model&&this._model.removeEventListener(Events.WindowChanged,this._onWindowChanged,this),this._model=e,this._model&&this._model.addEventListener(Events.WindowChanged,this._onWindowChanged,this)),this._track=t,this._tabbedPane.closeTabs([Tab.PaintProfiler,Tab.LayerViewer],!1);for(const i of this._rangeDetailViews.values())i.setModel(e,t);if(this._lazyPaintProfilerView=null,this._lazyLayersView=null,this.setSelection(null),this._additionalMetricsToolbar.removeToolbarItems(),e&&e.timelineModel()){const{estimated:t,time:i}=e.timelineModel().totalBlockingTime(),n=t?` (${ls`estimated`})`:"",s=ls`Total blocking time: ${i.toFixed(2)}ms${n}`,a=createElement("span"),l=UI.UIUtils.createWebDevLink("tbt/",ls`Learn more`);a.appendChild(UI.UIUtils.formatLocalized("%s",[l])),this._additionalMetricsToolbar.appendText(s),this._additionalMetricsToolbar.appendToolbarItem(new UI.Toolbar.ToolbarItem(a))}}_setContent(e){const t=this._tabbedPane.otherTabs(Tab.Details);for(let e=0;e<t.length;++e)this._rangeDetailViews.has(t[e])||this._tabbedPane.closeTab(t[e]);this._defaultDetailsContentElement.removeChildren(),this._defaultDetailsContentElement.appendChild(e)}_updateContents(){const e=this._rangeDetailViews.get(this._tabbedPane.selectedTabId||"");if(e){const t=this._model.window();e.updateContents(this._selection||TimelineSelection.fromRange(t.left,t.right))}}_appendTab(e,t,i,n){this._tabbedPane.appendTab(e,t,i,void 0,void 0,n),this._preferredTabId!==this._tabbedPane.selectedTabId&&this._tabbedPane.selectTab(e)}headerElement(){return this._tabbedPane.headerElement()}setPreferredTab(e){this._preferredTabId=e}_onWindowChanged(e){this._selection||this._updateContentsFromWindow()}_updateContentsFromWindow(){if(!this._model)return void this._setContent(UI.Fragment.html`<div/>`);const e=this._model.window();this._updateSelectedRangeStats(e.left,e.right),this._updateContents()}setSelection(e){if(this._detailsLinkifier.reset(),this._selection=e,this._selection){switch(this._selection.type()){case TimelineSelection.Type.TraceEvent:{const e=this._selection.object();TimelineUIUtils.buildTraceEventDetails(e,this._model.timelineModel(),this._detailsLinkifier,!0).then(t=>this._appendDetailsTabsForTraceEventAndShowDetails(e,t));break}case TimelineSelection.Type.Frame:{const e=this._selection.object(),t=this._model.filmStripModelFrame(e);if(this._setContent(TimelineUIUtils.generateDetailsContentForFrame(e,t)),e.layerTree){const t=this._layersView();t.showLayerTree(e.layerTree),this._tabbedPane.hasTab(Tab.LayerViewer)||this._appendTab(Tab.LayerViewer,Common.UIString.UIString("Layers"),t)}break}case TimelineSelection.Type.NetworkRequest:{const e=this._selection.object();TimelineUIUtils.buildNetworkRequestDetails(e,this._model.timelineModel(),this._detailsLinkifier).then(this._setContent.bind(this));break}case TimelineSelection.Type.Range:this._updateSelectedRangeStats(this._selection.startTime(),this._selection.endTime())}this._updateContents()}else this._updateContentsFromWindow()}_tabSelected(e){e.data.isUserGesture&&(this.setPreferredTab(e.data.tabId),this._updateContents())}_layersView(){return this._lazyLayersView||(this._lazyLayersView=new TimelineLayersView(this._model.timelineModel(),this._showSnapshotInPaintProfiler.bind(this))),this._lazyLayersView}_paintProfilerView(){return this._lazyPaintProfilerView||(this._lazyPaintProfilerView=new TimelinePaintProfilerView(this._model.frameModel())),this._lazyPaintProfilerView}_showSnapshotInPaintProfiler(e){const t=this._paintProfilerView();t.setSnapshot(e),this._tabbedPane.hasTab(Tab.PaintProfiler)||this._appendTab(Tab.PaintProfiler,Common.UIString.UIString("Paint Profiler"),t,!0),this._tabbedPane.selectTab(Tab.PaintProfiler,!0)}_appendDetailsTabsForTraceEventAndShowDetails(e,t){this._setContent(t),e.name!==TimelineModel.TimelineModel.RecordType.Paint&&e.name!==TimelineModel.TimelineModel.RecordType.RasterTask||this._showEventInPaintProfiler(e)}_showEventInPaintProfiler(e){const t=SDK.SDKModel.TargetManager.instance().models(SDK.PaintProfiler.PaintProfilerModel)[0];if(!t)return;const i=this._paintProfilerView();i.setEvent(t,e)&&(this._tabbedPane.hasTab(Tab.PaintProfiler)||this._appendTab(Tab.PaintProfiler,Common.UIString.UIString("Paint Profiler"),i))}_updateSelectedRangeStats(e,t){if(!this._model||!this._track)return;const i=TimelineUIUtils.statsForTimeRange(this._track.syncEvents(),e,t),n=e-this._model.timelineModel().minimumRecordTime(),s=t-this._model.timelineModel().minimumRecordTime(),a=new TimelineDetailsContentHelper(null,null);a.addSection(ls`Range:  ${Number.millisToString(n)} \u2013 ${Number.millisToString(s)}`);const l=TimelineUIUtils.generatePieChart(i);a.appendElementRow("",l),this._setContent(a.fragment)}}export const Tab={Details:"Details",EventLog:"EventLog",CallTree:"CallTree",BottomUp:"BottomUp",PaintProfiler:"PaintProfiler",LayerViewer:"LayerViewer"};