"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compile=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),game_1=(0,tslib_1.__importDefault)(require("../json/game")),projectconfig_1=require("../json/projectconfig"),common_1=require("./common"),taskstatus_1=require("../../utils/taskstatus"),config_1=require("../../config"),common_2=require("../../utils/common"),locales_1=(0,tslib_1.__importDefault)(require("../../utils/locales/locales")),white_ext_list_1=require("../../utils/white_ext_list"),uglifyfilenames_1=require("../protect/uglifyfilenames");async function compileGameJSON(e,t){const{onProgressUpdate:o=(()=>{})}=t,i=new taskstatus_1.TaskStatus("game.json");o(i);const a=await(0,game_1.default)(e);return i.done(),o(i),a}async function compile(e,t){var o;const i=await(0,projectconfig_1.getProjectConfigJSON)(e);!1===(await e.attr()).gameApp&&(0,common_2.throwError)({filePath:"",msg:locales_1.default.config.PROJECT_TYPE_ERROR.format(e.appid,locales_1.default.config.MINI_PROGRAM),code:config_1.PROJECT_TYPE_ERROR});const a=i.miniprogramRoot||"",{GameWhiteList:s}=await(0,white_ext_list_1.getWhiteExtList)(),n=e.getFileList(a,"").filter(common_1.isNotIgnoredByProjectConfig.bind(null,i,a)).filter(e=>s.has(path_1.default.posix.extname(e))),r=await compileGameJSON(e,t);e.stat(a,"game.js")||(0,common_2.throwError)({msg:locales_1.default.config.FILE_NOT_FOUND.format(path_1.default.posix.join(a,"game.js")),filePath:path_1.default.posix.join(a,"game.js"),code:config_1.FILE_NOT_FOUND});const l=n.filter(e=>".js"===path_1.default.posix.extname(e)).map(e=>path_1.default.posix.relative(a,e)),m=await(0,common_1.compileJSFiles)(e,l,a,t),_=n.filter(e=>e!==path_1.default.posix.join(a,"game.json")&&".js"!==path_1.default.posix.extname(e)),c=await(0,common_1.compileOther)(e,_,t),f=await(0,common_1.getUploadProjectConfig)(e,i);let p=Object.assign(Object.assign({},m),c);if(e.type===config_1.COMPILE_TYPE.miniGame){if(f.miniprogramRoot&&"."!==f.miniprogramRoot&&"./"!==f.miniprogramRoot){const t={};for(const o in p)t[path_1.default.posix.relative(e.miniprogramRoot,o)]=p[o];p=t}f.miniprogramRoot="",p["game.json"]=JSON.stringify(r)}else p[path_1.default.posix.join(f.miniprogramRoot||"","game.json")]=JSON.stringify(r);return f.__compileDebugInfo__=t.__compileDebugInfo__||{},p["project.config.json"]=JSON.stringify(f),e.type===config_1.COMPILE_TYPE.miniGame&&(null===(o=t.setting)||void 0===o?void 0:o.codeProtect)&&(p=await(0,uglifyfilenames_1.uglifyFileNames)(e,p)),p}exports.compile=compile;