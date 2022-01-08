"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppGraph=void 0;const devtool_1=require("../devtool"),recorder_1=require("../recorder"),appconf_1=require("./appconf"),basegraph_1=require("./basegraph");class AppGraph extends basegraph_1.BaseGraph{constructor(e){super(e),this.appConf=new appconf_1.AppConf(this.compiler,this)}destroy(){this.appConf.destroy(),super.destroy()}async getConf(e){return await this.appConf.build(e),this.conf={app:this.appConf.app,packages:Object.fromEntries(this.appConf.packages.entries()),pages:Object.fromEntries(this.appConf.pages.entries()),comps:Object.fromEntries(this.appConf.comps.entries()),sitemap:this.appConf.sitemap,theme:this.appConf.theme},this.conf}async ensureConf(e){this.conf||await this.getConf(e)}async compileSingleCode(e,t){await this.ensureConf(recorder_1.silentRecorder);const s=this.resolver.resolveInfoMap.get(e);if(s)return super.doCompileSingleCode(Object.assign(Object.assign({},s),{independentRoot:this.getIndependentRoot(s.path)}),t);throw new Error("file not found")}async getDevCode(e,t){await this.ensureConf(e);let s=this.getPackageFile(t.package);return s=s.filter(e=>!e.path.endsWith("json")),this.getCodeFiles(s,e)}async getProdCode(e,t){await this.ensureConf(e);let s=this.getPackageFile(t.package);return s=s.filter(e=>!e.path.endsWith("json")),this.getCodeFiles(s,e,!1)}getLocalCodeFileList(){return Array.from(this.resolver.resolveInfoMap.entries()).map(([e,t])=>t.source)}onFileChangeForGraph(e,t){this.appConf.onFileChange(e,t)}getPackageFile(e){const t=[];for(const[s,o]of this.resolver.resolveInfoMap.entries())e!==devtool_1.FullPkg&&this.checkFilePackage(s)!==e||t.push(o);return t.map(e=>Object.assign(Object.assign({},e),{independentRoot:this.getIndependentRoot(e.path)}))}getIndependentRoot(e){for(const t of Object.values(this.conf.packages))if(!0===t.independent){const s=t.root.replace(/^\//,"");if(e.startsWith(s))return s}return"object"==typeof this.conf.app.functionalPages&&!0===this.conf.app.functionalPages.independent&&e.startsWith("functional-pages/")?"functional-pages":"string"==typeof this.conf.app.openDataContext&&e.startsWith(this.conf.app.openDataContext)?this.conf.app.openDataContext:"string"==typeof this.conf.app.workers&&e.startsWith(this.conf.app.workers)?this.conf.app.workers:""}checkFilePackage(e){for(const t of Object.keys(this.conf.packages))if(e.startsWith(t))return t;return devtool_1.MainPkg}async compileJSON(){const e=await this.getConf(recorder_1.silentRecorder),t={};t["app.json"]=JSON.stringify(e.app);for(const s in e.pages)t[s+".json"]=JSON.stringify(e.pages[s]);for(const s in e.comps)t[s+".json"]=JSON.stringify(e.comps[s]);return{conf:e,jsons:t}}}exports.AppGraph=AppGraph;