"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageJSON=exports.originGetPageJSON=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),lodash_1=require("lodash"),getExtJSON_1=require("../app/getExtJSON"),app_1=require("../app"),tools_1=require("../../../utils/tools"),checkPageJSON_1=require("./checkPageJSON"),common_1=require("../common"),common_2=require("../../../utils/common"),locales_1=(0,tslib_1.__importDefault)(require("../../../utils/locales/locales")),reactiveCache_1=require("../reactiveCache"),spreadUsingComponent=e=>{const{project:t,pagePath:o,inputJSON:n}=e;if(o.includes("miniprogram_npm"))return;const i=(0,app_1.getAppJSON)(t);if((0,common_1.checkPagePathIsInIndependentSubpackage)(i,o))return;const a=Object.assign({},i.usingComponents);if(0!==Object.keys(a).length){n.usingComponents||(n.usingComponents={});for(const e in a){if(n.usingComponents[e])continue;const t=a[e]||"";if(t.startsWith("/")||t.startsWith("plugin://")){n.usingComponents[e]=t;continue}const i=(0,tools_1.normalizePath)(path_1.default.posix.relative(path_1.default.posix.dirname(o),t));n.usingComponents[e]=i.startsWith(".")?i:"./"+i}}},mergeExtJSON=e=>{var t;const{project:o,inputJSON:n,pagePath:i}=e,a=(0,getExtJSON_1.getExtJSON)(o);(null===(t=null==a?void 0:a.extPages)||void 0===t?void 0:t[i])&&Object.assign(n,a.extPages[i])},checkComponentPath=e=>{const{project:t,miniprogramRoot:o,pagePath:n,inputJSON:i}=e;(0,common_1.checkComponentPath)({project:t,root:o,relativePath:n+".json",inputJSON:i})},checkComponentGenerics=e=>{const{pagePath:t,inputJSON:o}=e,n=t+".json";if(!o.componentGenerics)return;const i=[];for(const e in o.componentGenerics){const t=o.componentGenerics[e],n=(0,tools_1.getType)(t);"boolean"===n||"object"===n?"object"===n&&"string"!==(0,tools_1.getType)(t.default)&&i.push(locales_1.default.config.JSON_CONTENT_SHOULD_BE.format([`["componentGenerics"]["${e}"]["default"]`,"string"])):i.push(locales_1.default.config.JSON_CONTENT_SHOULD_BE.format([`["componentGenerics"]["${e}"]`,"boolean/object"]))}i.length>0&&(0,common_2.throwError)({msg:i.join("\n"),filePath:n})},compilePageJSON=e=>{mergeExtJSON(e),checkComponentGenerics(e),checkComponentPath(e),spreadUsingComponent(e)};function originGetPageJSON(e,t){const{pagePath:o,miniprogramRoot:n=""}=t,i=(0,tools_1.normalizePath)(path_1.default.posix.join(n,o+".json")),a=(0,reactiveCache_1.tryToGetReactiveJSONCompiler)(e),c=(0,lodash_1.cloneDeep)(a.getPageJSON("checked",t));return compilePageJSON({project:e,miniprogramRoot:n,inputJSON:c,filePath:i,pagePath:o}),c.usingComponents||(c.usingComponents={}),c}async function getPageJSON(e,t){const o=(0,reactiveCache_1.tryToGetReactiveProject)(e);return(0,reactiveCache_1.tryToGetReactiveJSONCompiler)(o).getPageJSON("compiled",t)}exports.originGetPageJSON=originGetPageJSON,reactiveCache_1.ReactiveJSONCompiler.setOriginCheckPageJSON(checkPageJSON_1.checkPageJSON),reactiveCache_1.ReactiveJSONCompiler.setOriginGetPageJSON(originGetPageJSON),exports.getPageJSON=getPageJSON;