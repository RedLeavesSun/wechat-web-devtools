import{DOMModel,DOMNode}from"./DOMModel.js";import{SnapshotWithRect}from"./PaintProfiler.js";import{Target}from"./SDKModel.js";export class Layer{id(){throw new Error("Not implemented")}parentId(){throw new Error("Not implemented")}parent(){throw new Error("Not implemented")}isRoot(){throw new Error("Not implemented")}children(){throw new Error("Not implemented")}addChild(e){}node(){throw new Error("Not implemented")}nodeForSelfOrAncestor(){throw new Error("Not implemented")}offsetX(){throw new Error("Not implemented")}offsetY(){throw new Error("Not implemented")}width(){throw new Error("Not implemented")}height(){throw new Error("Not implemented")}transform(){throw new Error("Not implemented")}quad(){throw new Error("Not implemented")}anchorPoint(){throw new Error("Not implemented")}invisible(){throw new Error("Not implemented")}paintCount(){throw new Error("Not implemented")}lastPaintRect(){throw new Error("Not implemented")}scrollRects(){throw new Error("Not implemented")}stickyPositionConstraint(){throw new Error("Not implemented")}gpuMemoryUsage(){throw new Error("Not implemented")}requestCompositingReasonIds(){throw new Error("Not implemented")}drawsContent(){throw new Error("Not implemented")}snapshots(){throw new Error("Not implemented")}}Layer.ScrollRectType={NonFastScrollable:"NonFastScrollable",TouchEventHandler:"TouchEventHandler",WheelEventHandler:"WheelEventHandler",RepaintsOnScroll:"RepaintsOnScroll",MainThreadScrollingReason:"MainThreadScrollingReason"};export class StickyPositionConstraint{constructor(e,t){this._stickyBoxRect=t.stickyBoxRect,this._containingBlockRect=t.containingBlockRect,this._nearestLayerShiftingStickyBox=null,e&&t.nearestLayerShiftingStickyBox&&(this._nearestLayerShiftingStickyBox=e.layerById(t.nearestLayerShiftingStickyBox)),this._nearestLayerShiftingContainingBlock=null,e&&t.nearestLayerShiftingContainingBlock&&(this._nearestLayerShiftingContainingBlock=e.layerById(t.nearestLayerShiftingContainingBlock))}stickyBoxRect(){return this._stickyBoxRect}containingBlockRect(){return this._containingBlockRect}nearestLayerShiftingStickyBox(){return this._nearestLayerShiftingStickyBox}nearestLayerShiftingContainingBlock(){return this._nearestLayerShiftingContainingBlock}}export class LayerTreeBase{constructor(e){this._target=e,this._domModel=e?e.model(DOMModel):null,this.layersById=new Map,this._root=null,this._contentRoot=null,this._backendNodeIdToNode=new Map}target(){return this._target}root(){return this._root}setRoot(e){this._root=e}contentRoot(){return this._contentRoot}setContentRoot(e){this._contentRoot=e}forEachLayer(e,t){return!(!t&&!(t=this.root()))&&(e(t)||t.children().some(this.forEachLayer.bind(this,e)))}layerById(e){return this.layersById.get(e)||null}async resolveBackendNodeIds(e){if(!e.size||!this._domModel)return;const t=await this._domModel.pushNodesByBackendIdsToFrontend(e);if(t)for(const e of t.keys())this._backendNodeIdToNode.set(e,t.get(e)||null)}backendNodeIdToNode(){return this._backendNodeIdToNode}setViewportSize(e){this._viewportSize=e}viewportSize(){return this._viewportSize}_nodeForId(e){return this._domModel?this._domModel.nodeForId(e):null}}