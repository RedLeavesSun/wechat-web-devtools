"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLatestVersion=void 0;const tslib_1=require("tslib"),request_1=require("../utils/request"),sign_1=require("../utils/sign"),config_1=require("../config"),error_1=require("../utils/error"),locales_1=(0,tslib_1.__importDefault)(require("../utils/locales/locales")),querystring_1=(0,tslib_1.__importDefault)(require("querystring")),url_config_1=require("../utils/url_config"),jsonParse_1=require("../utils/jsonParse");async function getLatestVersion(e){const{project:r}=e;if(!r)throw new error_1.CodeError(locales_1.default.config.PARAM_ERROR.format("getLatestVersion","project"),config_1.PARAM_ERROR);if("miniProgramPlugin"!==r.type&&"miniGamePlugin"!==r.type)throw new Error("getLatestVersion only support plugin type project");const t=await(0,sign_1.getSignature)(r.privateKey,r.appid),i={appid:r.appid,signature:t};try{const e=`${url_config_1.GET_LATEST_VERSION}?${querystring_1.default.stringify(i)}`,r=(await(0,request_1.request)({url:e,method:"get"})).body.toString(),t=(0,jsonParse_1.jsonRespParse)(r,e);if(0!==t.errCode)throw new Error(r);return t.data}catch(e){throw new error_1.CodeError(e.toString(),config_1.GET_LATEST_VERSION_CGI_ERR)}}exports.getLatestVersion=getLatestVersion;