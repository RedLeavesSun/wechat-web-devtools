"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSiteMapJSON=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),tools_1=require("../../utils/tools"),projectconfig_1=require("./projectconfig"),locales_1=(0,tslib_1.__importDefault)(require("../../utils/locales/locales")),common_1=require("../../utils/common"),common_2=require("./common"),schemaValidate_1=require("../validate/schemaValidate"),cache_1=require("../../utils/cache"),reactiveCache_1=require("./reactiveCache"),config_1=require("../../config"),getAppJSON_1=require("./app/getAppJSON");exports.getSiteMapJSON=(0,reactiveCache_1.wrapCompileJSONFunc)(cache_1.CACHE_KEY.SITE_MAP_JSON,e=>{const o=(0,projectconfig_1.getProjectConfigJSON)(e),r=(0,getAppJSON_1.getAppJSON)(e),{sitemapLocation:t=""}=r;let i=t;if(i)i=(0,tools_1.normalizePath)(path_1.default.posix.join(o.miniprogramRoot||"",i));else{if(i=(0,tools_1.normalizePath)(path_1.default.posix.join(o.miniprogramRoot||"","sitemap.json")),!e.stat("",i))return e.type,config_1.COMPILE_TYPE.miniProgramPlugin,{desc:"",rules:[{action:"disallow",page:"*"}]}}const a=e.getFile("",i),c=(0,common_1.checkUTF8)(a,i),l=(0,common_2.checkJSONFormat)(c,i),_=(0,schemaValidate_1.schemaValidate)("sitemap",l);if(_.error.length){const e=_.error.map(e=>"type"===e.errorType||"enum"===e.errorType||"anyOf"===e.errorType?locales_1.default.config.JSON_CONTENT_SHOULD_BE.format([e.errorProperty,e.correctType]):locales_1.default.config.SHOULD_NOT_BE_EMPTY.format([e.requireProperty])).join("\n");(0,common_1.throwError)({msg:e,filePath:i})}return l});