"use strict";const config_1=require("../../config"),babel_helper_1=require("../../utils/babel_helper"),_transformRuntimeCustom=()=>require("../../utils/babel_transform_plugin"),babel7=()=>require("@babel/core"),_pluginTransformRuntime=()=>require("@babel/plugin-transform-runtime"),_pluginTransformModulesCommonjs=()=>require("@babel/plugin-transform-modules-commonjs"),_presetEnv=()=>require("@babel/preset-env");function getPluginsList(e){const r=[[require("../../utils/babel_transform_plugin")],[require("@babel/plugin-transform-runtime"),{corejs:!1,helpers:!0,regenerator:!e.hasRegenerator,version:"7.12.1"}]].concat((0,babel_helper_1.getCustomPlugins)([]));return r.push([require("@babel/plugin-transform-modules-commonjs"),{allowTopLevelThis:e.disableUseStrict,importInterop:e=>e.startsWith("@babel/runtime/helpers/")?"node":"babel"}]),r}const enhance=e=>{const{code:r,babelRoot:s,filePath:t,inputSourceMap:l}=e,n=r,o=/regeneratorRuntime\.mark/.test(r),i=e.disableUseStrict||/^\s*\/\/\s?use strict disable;/i.test(r);let a=null;try{a=require("@babel/core").transform(r,{presets:[[require("@babel/preset-env"),{targets:{chrome:53,ios:8},include:["@babel/plugin-transform-computed-properties"]}]],babelrc:!1,plugins:getPluginsList({hasRegenerator:o,disableUseStrict:i}),sourceFileName:t,inputSourceMap:l,sourceMaps:!0,configFile:!1})}catch(e){return{error:{message:`file: ${t}\n ${e.message}`,code:config_1.BABEL_TRANS_JS_ERR}}}let u=(null==a?void 0:a.code)||r;const b=(null==a?void 0:a.map)||l;i&&(u=u.replace(/^"use strict";/,""));const c=(0,babel_helper_1.collectBabelHelpers)(n),{transformCode:p,helpers:m}=(0,babel_helper_1.replaceBabelHelpers)(u,c,t,s);return u=p,{code:u,map:b,helpers:m||[]}};module.exports=enhance;