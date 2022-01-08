"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.uploadJsServer=exports.SIGNATURE_FILE_NAME=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),request_1=require("../utils/request"),packfile_1=require("./utils/packfile"),zlib_1=(0,tslib_1.__importDefault)(require("zlib")),sign_1=require("../utils/sign"),config_1=require("../config"),log_1=(0,tslib_1.__importDefault)(require("../utils/log")),error_1=require("../utils/error"),locales_1=(0,tslib_1.__importDefault)(require("../utils/locales/locales")),querystring_1=(0,tslib_1.__importDefault)(require("querystring")),url_config_1=require("../utils/url_config"),jsonParse_1=require("../utils/jsonParse"),projectconfig_1=require("../core/json/projectconfig");async function uploadJsServer(e){var r;const{project:o,env:t}=e;if(!t||"test"!==t&&"release"!==t)throw new error_1.CodeError(locales_1.default.config.PARAM_ERROR.format("uploadJsServer","env"),config_1.PARAM_ERROR);if(!o)throw new error_1.CodeError(locales_1.default.config.PARAM_ERROR.format("uploadJsServer","project"),config_1.PARAM_ERROR);const i=(0,projectconfig_1.getProjectConfigJSON)(o);if("string"!=typeof i.jsserverRoot||!(null===(r=o.stat("",i.jsserverRoot))||void 0===r?void 0:r.isDirectory))throw new error_1.CodeError("please set a correct jsserverRoot value in project.config.json",config_1.PARAM_ERROR);const s=await(0,packfile_1.packFiledir)(path_1.default.posix.join(o.projectPath,i.jsserverRoot)),_=await(0,sign_1.getSignature)(o.privateKey,o.appid),l={type:"release"===t?0:1,appid:o.appid,signature:_};try{const e=`${url_config_1.UPLOAD_JS_SERVER}?${querystring_1.default.stringify(l)}`;log_1.default.info("request url:",e);const r=zlib_1.default.gzipSync(s.data),o=(await(0,request_1.request)({url:e,method:"post",body:r})).body.toString();if(0!==(0,jsonParse_1.jsonRespParse)(o,e).errCode)throw new Error(o);return!0}catch(e){throw new error_1.CodeError(e.toString(),config_1.UPLOAD_JS_SERVER_CGI_ERR)}}exports.SIGNATURE_FILE_NAME="ci.signature",exports.uploadJsServer=uploadJsServer;