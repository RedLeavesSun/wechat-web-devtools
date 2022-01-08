import*as SDK from"../sdk/sdk.js";import*as Common from"../common/common.js";import{LayerPaintEvent}from"./TimelineFrameModel.js";export class TracingLayerTree extends SDK.LayerTreeBase.LayerTreeBase{constructor(e){super(e),this._tileById=new Map,this._paintProfilerModel=e&&e.model(SDK.PaintProfiler.PaintProfilerModel)}async setLayers(e,t,r){const s=new Set;if(e)this._extractNodeIdsToResolve(s,{},e);else for(let e=0;e<t.length;++e)this._extractNodeIdsToResolve(s,{},t[e]);await this.resolveBackendNodeIds(s);const n=this.layersById;if(this.layersById=new Map,this.setContentRoot(null),e){const t=this._innerSetLayers(n,e);this.setRoot(t)}else{const e=t.map(this._innerSetLayers.bind(this,n)),r=this.contentRoot();this.setRoot(r);for(let t=0;t<e.length;++t)e[t].id()!==r.id()&&r.addChild(e[t])}this._setPaints(r)}setTiles(e){this._tileById=new Map;for(const t of e)this._tileById.set(t.id,t)}pictureForRasterTile(e){const t=this._tileById.get("cc::Tile/"+e);if(!t)return Common.Console.Console.instance().error(`Tile ${e} is missing`),Promise.resolve(null);const r=this.layerById(t.layer_id);return r?r._pictureForRect(t.content_rect):(Common.Console.Console.instance().error(`Layer ${t.layer_id} for tile ${e} is not found`),Promise.resolve(null))}_setPaints(e){for(let t=0;t<e.length;++t){const r=this.layersById.get(e[t].layerId());r&&r._addPaintEvent(e[t])}}_innerSetLayers(e,t){let r=e.get(t.layer_id);r?r._reset(t):r=new TracingLayer(this._paintProfilerModel,t),this.layersById.set(t.layer_id,r),t.owner_node&&r._setNode(this.backendNodeIdToNode().get(t.owner_node)||null),!this.contentRoot()&&r.drawsContent()&&this.setContentRoot(r);for(let s=0;t.children&&s<t.children.length;++s)r.addChild(this._innerSetLayers(e,t.children[s]));return r}_extractNodeIdsToResolve(e,t,r){const s=r.owner_node;s&&!this.backendNodeIdToNode().has(s)&&e.add(s);for(let s=0;r.children&&s<r.children.length;++s)this._extractNodeIdsToResolve(e,t,r.children[s])}}export class TracingLayer{constructor(e,t){this._paintProfilerModel=e,this._reset(t)}_reset(e){this._node=null,this._layerId=String(e.layer_id),this._offsetX=e.position[0],this._offsetY=e.position[1],this._width=e.bounds.width,this._height=e.bounds.height,this._children=[],this._parentLayerId=null,this._parent=null,this._quad=e.layer_quad||[],this._createScrollRects(e),this._compositingReasonIds=e.compositing_reason_ids||e.debug_info&&e.debug_info.compositing_reason_ids||[],this._drawsContent=!!e.draws_content,this._gpuMemoryUsage=e.gpu_memory_usage,this._paints=[]}id(){return this._layerId}parentId(){return this._parentLayerId}parent(){return this._parent}isRoot(){return!this.parentId()}children(){return this._children}addChild(e){const t=e;t._parent&&console.assert(!1,"Child already has a parent"),this._children.push(t),t._parent=this,t._parentLayerId=this._layerId}_setNode(e){this._node=e}node(){return this._node}nodeForSelfOrAncestor(){for(let e=this;e;e=e._parent)if(e._node)return e._node;return null}offsetX(){return this._offsetX}offsetY(){return this._offsetY}width(){return this._width}height(){return this._height}transform(){return null}quad(){return this._quad}anchorPoint(){return[.5,.5,0]}invisible(){return!1}paintCount(){return 0}lastPaintRect(){return null}scrollRects(){return this._scrollRects}stickyPositionConstraint(){return null}gpuMemoryUsage(){return this._gpuMemoryUsage}snapshots(){return this._paints.map(e=>e.snapshotPromise().then(e=>{if(!e)return null;return{rect:{x:e.rect[0],y:e.rect[1],width:e.rect[2],height:e.rect[3]},snapshot:e.snapshot}}))}_pictureForRect(e){return Promise.all(this._paints.map(e=>e.picturePromise())).then(r=>{const s=r.filter(r=>{return r&&(s=r.rect,n=e,t(s[0],s[0]+s[2],n[0],n[0]+n[2])&&t(s[1],s[1]+s[3],n[1],n[1]+n[3]));var s,n}).map(e=>({x:e.rect[0],y:e.rect[1],picture:e.serializedPicture}));if(!s.length||!this._paintProfilerModel)return null;const n=s.reduce((e,t)=>Math.min(e,t.x),1/0),o=s.reduce((e,t)=>Math.min(e,t.y),1/0),i={x:e[0]-n,y:e[1]-o,width:e[2],height:e[3]};return this._paintProfilerModel.loadSnapshotFromFragments(s).then(e=>e?{rect:i,snapshot:e}:null)});function t(e,t,r,s){return console.assert(e<=t&&r<=s,"segments should be specified as ordered pairs"),t>r&&e<s}}_scrollRectsFromParams(e,t){return{rect:{x:e[0],y:e[1],width:e[2],height:e[3]},type:t}}_createScrollRects(e){this._scrollRects=[],e.non_fast_scrollable_region&&this._scrollRects.push(this._scrollRectsFromParams(e.non_fast_scrollable_region,SDK.LayerTreeBase.Layer.ScrollRectType.NonFastScrollable.name)),e.touch_event_handler_region&&this._scrollRects.push(this._scrollRectsFromParams(e.touch_event_handler_region,SDK.LayerTreeBase.Layer.ScrollRectType.TouchEventHandler.name)),e.wheel_event_handler_region&&this._scrollRects.push(this._scrollRectsFromParams(e.wheel_event_handler_region,SDK.LayerTreeBase.Layer.ScrollRectType.WheelEventHandler.name)),e.scroll_event_handler_region&&this._scrollRects.push(this._scrollRectsFromParams(e.scroll_event_handler_region,SDK.LayerTreeBase.Layer.ScrollRectType.RepaintsOnScroll.name))}_addPaintEvent(e){this._paints.push(e)}requestCompositingReasonIds(){return Promise.resolve(this._compositingReasonIds)}drawsContent(){return this._drawsContent}}export let TracingLayerPayload;export let TracingLayerTile;