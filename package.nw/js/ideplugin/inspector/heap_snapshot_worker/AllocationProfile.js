import*as HeapSnapshotModel from"../heap_snapshot_model/heap_snapshot_model.js";export class AllocationProfile{constructor(t,o){this._strings=t.strings,this._liveObjectStats=o,this._nextNodeId=1,this._functionInfos=[],this._idToNode={},this._idToTopDownNode={},this._collapsedTopNodeIdToFunctionInfo={},this._traceTops=null,this._buildFunctionAllocationInfos(t),this._traceTree=this._buildAllocationTree(t,o)}_buildFunctionAllocationInfos(t){const o=this._strings,e=t.snapshot.meta.trace_function_info_fields,i=e.indexOf("name"),n=e.indexOf("script_name"),l=e.indexOf("script_id"),s=e.indexOf("line"),a=e.indexOf("column"),c=e.length,r=t.trace_function_infos,h=r.length,d=this._functionInfos=new Array(h/c);let u=0;for(let t=0;t<h;t+=c)d[u++]=new FunctionAllocationInfo(o[r[t+i]],o[r[t+n]],r[t+l],r[t+s],r[t+a])}_buildAllocationTree(t,o){const e=t.trace_tree,i=this._functionInfos,n=this._idToTopDownNode,l=t.snapshot.meta.trace_node_fields,s=l.indexOf("id"),a=l.indexOf("function_info_index"),c=l.indexOf("count"),r=l.indexOf("size"),h=l.indexOf("children"),d=l.length;return function t(e,l,u){const p=i[e[l+a]],_=e[l+s],f=o[_],T=f?f.count:0,N=f?f.size:0,z=new TopDownAllocationNode(_,p,e[l+c],e[l+r],T,N,u);n[_]=z,p.addTraceTopNode(z);const I=e[l+h];for(let o=0;o<I.length;o+=d)z.children.push(t(I,o,z));return z}(e,0,null)}serializeTraceTops(){if(this._traceTops)return this._traceTops;const t=this._traceTops=[],o=this._functionInfos;for(let e=0;e<o.length;e++){const i=o[e];if(0===i.totalCount)continue;const n=this._nextNodeId++,l=0===e;t.push(this._serializeNode(n,i,i.totalCount,i.totalSize,i.totalLiveCount,i.totalLiveSize,!l)),this._collapsedTopNodeIdToFunctionInfo[n]=i}return t.sort((function(t,o){return o.size-t.size})),t}serializeCallers(t){let o=this._ensureBottomUpNode(t);const e=[];for(;1===o.callers().length;)o=o.callers()[0],e.push(this._serializeCaller(o));const i=[],n=o.callers();for(let t=0;t<n.length;t++)i.push(this._serializeCaller(n[t]));return new HeapSnapshotModel.HeapSnapshotModel.AllocationNodeCallers(e,i)}serializeAllocationStack(t){let o=this._idToTopDownNode[t];const e=[];for(;o;){const t=o.functionInfo;e.push(new HeapSnapshotModel.HeapSnapshotModel.AllocationStackFrame(t.functionName,t.scriptName,t.scriptId,t.line,t.column)),o=o.parent}return e}traceIds(t){return this._ensureBottomUpNode(t).traceTopIds}_ensureBottomUpNode(t){let o=this._idToNode[t];if(!o){o=this._collapsedTopNodeIdToFunctionInfo[t].bottomUpRoot(),delete this._collapsedTopNodeIdToFunctionInfo[t],this._idToNode[t]=o}return o}_serializeCaller(t){const o=this._nextNodeId++;return this._idToNode[o]=t,this._serializeNode(o,t.functionInfo,t.allocationCount,t.allocationSize,t.liveCount,t.liveSize,t.hasCallers())}_serializeNode(t,o,e,i,n,l,s){return new HeapSnapshotModel.HeapSnapshotModel.SerializedAllocationNode(t,o.functionName,o.scriptName,o.scriptId,o.line,o.column,e,i,n,l,s)}}export class TopDownAllocationNode{constructor(t,o,e,i,n,l,s){this.id=t,this.functionInfo=o,this.allocationCount=e,this.allocationSize=i,this.liveCount=n,this.liveSize=l,this.parent=s,this.children=[]}}export class BottomUpAllocationNode{constructor(t){this.functionInfo=t,this.allocationCount=0,this.allocationSize=0,this.liveCount=0,this.liveSize=0,this.traceTopIds=[],this._callers=[]}addCaller(t){const o=t.functionInfo;let e;for(let t=0;t<this._callers.length;t++){const i=this._callers[t];if(i.functionInfo===o){e=i;break}}return e||(e=new BottomUpAllocationNode(o),this._callers.push(e)),e}callers(){return this._callers}hasCallers(){return this._callers.length>0}}export class FunctionAllocationInfo{constructor(t,o,e,i,n){this.functionName=t,this.scriptName=o,this.scriptId=e,this.line=i,this.column=n,this.totalCount=0,this.totalSize=0,this.totalLiveCount=0,this.totalLiveSize=0,this._traceTops=[]}addTraceTopNode(t){0!==t.allocationCount&&(this._traceTops.push(t),this.totalCount+=t.allocationCount,this.totalSize+=t.allocationSize,this.totalLiveCount+=t.liveCount,this.totalLiveSize+=t.liveSize)}bottomUpRoot(){return this._traceTops.length?(this._bottomUpTree||this._buildAllocationTraceTree(),this._bottomUpTree):null}_buildAllocationTraceTree(){this._bottomUpTree=new BottomUpAllocationNode(this);for(let t=0;t<this._traceTops.length;t++){let o=this._traceTops[t],e=this._bottomUpTree;const i=o.allocationCount,n=o.allocationSize,l=o.liveCount,s=o.liveSize,a=o.id;for(;e.allocationCount+=i,e.allocationSize+=n,e.liveCount+=l,e.liveSize+=s,e.traceTopIds.push(a),o=o.parent,null!==o;)e=e.addCaller(o)}}}