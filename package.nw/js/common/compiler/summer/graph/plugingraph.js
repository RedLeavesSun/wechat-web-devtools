"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PluginGraph=void 0;const recorder_1=require("../recorder"),basegraph_1=require("./basegraph"),pluginconf_1=require("./pluginconf");class PluginGraph extends basegraph_1.BaseGraph{constructor(e){super(e),this.pluginConf=new pluginconf_1.PluginConf(this.compiler,this)}destroy(){this.pluginConf.destroy(),super.destroy()}async getConf(e){if("plugin"!==this.type)throw new Error("Couldn't call getAppConf without plugin type");return await this.pluginConf.build(e),this.conf={plugin:this.pluginConf.plugin,pages:Object.fromEntries(this.pluginConf.pages.entries()),comps:Object.fromEntries(this.pluginConf.comps.entries())},this.conf}async ensureConf(e){this.conf||await this.getConf(e)}async compileSingleCode(e,t){await this.ensureConf(recorder_1.silentRecorder);const n=this.resolver.resolveInfoMap.get(e);if(n)return super.doCompileSingleCode(Object.assign(Object.assign({},n),{independentRoot:this.getIndependentRoot(n.path)}),t);throw new Error("file not found")}async getDevCode(e){await this.ensureConf(e);let t=this.getPackageFile();return t=t.filter(e=>!e.path.endsWith("json")),this.getCodeFiles(t,e)}async getProdCode(e){await this.ensureConf(e);let t=this.getPackageFile();return t=t.filter(e=>!e.path.endsWith("json")),this.getCodeFiles(t,e,!1)}getLocalCodeFileList(){return Array.from(this.resolver.resolveInfoMap.entries()).map(([e,t])=>t.source)}onFileChangeForGraph(e,t){}getPackageFile(){const e=[];for(const[t,n]of this.resolver.resolveInfoMap.entries())e.push(n);return e.map(e=>Object.assign(Object.assign({},e),{independentRoot:this.getIndependentRoot(e.path)}))}getIndependentRoot(e){const t=this.conf.plugin;return"string"==typeof t.workers&&e.startsWith(t.workers)?t.workers:""}async compileJSON(){const e=await this.getConf(recorder_1.silentRecorder),t={};t["plugin.json"]=JSON.stringify(e.plugin);for(const n in e.pages)t[n+".json"]=JSON.stringify(e.pages[n]);for(const n in e.comps)t[n+".json"]=JSON.stringify(e.comps[n]);return{conf:e,jsons:t}}}exports.PluginGraph=PluginGraph;