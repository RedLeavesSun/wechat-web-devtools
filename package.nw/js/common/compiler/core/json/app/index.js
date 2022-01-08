"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAppJSON=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),cache_1=require("../../../utils/cache"),lodash_1=require("lodash"),getAppJSON_1=require("./getAppJSON"),getExtJSON_1=require("./getExtJSON"),projectconfig_1=require("../projectconfig"),common_1=require("../../../utils/common"),locales_1=(0,tslib_1.__importDefault)(require("../../../utils/locales/locales")),theme_1=require("../theme"),reactiveCache_1=require("../reactiveCache"),tools_1=require("../../../utils/tools");function mergeExtJSON(e,t){if(t)for(const o in t)if("__warning__"!==o){if("extPages"!==o){if("plugins"===o||"supportedMaterials"===o){e[o]=t[o];continue}"object"===(0,tools_1.getType)(t[o])?"object"!==(0,tools_1.getType)(e[o])?e[o]=Object.assign({},t[o]):e[o]=Object.assign({},e[o]||{},t[o]):e[o]=t[o]}}else e.__warning__=e.__warning__?`${e.__warning__}、${t.__warning__}`:t.__warning__}exports.getAppJSON=(0,reactiveCache_1.wrapCompileJSONFunc)(cache_1.CACHE_KEY.COMPILED_APP_JSON,e=>{const t=(0,projectconfig_1.getProjectConfigJSON)(e),{miniprogramRoot:o=""}=t;let i=(0,getAppJSON_1.getAppJSON)(e);const r=(0,getExtJSON_1.getExtJSON)(e);if(r&&(i=(0,lodash_1.cloneDeep)(i),mergeExtJSON(i,r),r.extEnable))try{const t=(0,theme_1.getThemeLocation)(e);let r={};t&&(r=(0,theme_1.checkThemeJSON)(e,{themeLocation:t}));const _=(0,theme_1.mergeThemeJSONToAppJSON)(r,i);(0,getAppJSON_1.checkAppJSON)({project:e,miniprogramRoot:o,inputJSON:_.appJSONLight,filePath:path_1.default.posix.join(o,"app.json")}),(0,getAppJSON_1.checkAppJSON)({project:e,miniprogramRoot:o,inputJSON:_.appJSONDark,filePath:path_1.default.posix.join(o,"app.json")})}catch(e){(0,common_1.throwError)({msg:e.message,code:e.code,filePath:`app.json ${locales_1.default.config.OR} ext.json`})}return i});