"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compileWXML=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),tools_1=require("../../../utils/tools"),locales_1=(0,tslib_1.__importDefault)(require("../../../utils/locales/locales")),config_1=require("../../../config"),taskstatus_1=require("../../../utils/taskstatus"),worker_thread_1=require("../../worker_thread"),common_1=require("../../../utils/common");async function compileWXML(e,r,t){const{root:o="",setting:s={},onProgressUpdate:i=(()=>{})}=t,{minify:a,minifyWXML:_}=s,l=new taskstatus_1.TaskStatus(r),c=path_1.default.posix.join(o,r),n=await e.getFile(o,r);if(!a&&!_){i(l);const e=(0,tools_1.bufferToUtf8String)(n);return void 0===e&&(0,common_1.throwError)({msg:locales_1.default.config.FILE_NOT_UTF8.format(c),code:config_1.FILE_NOT_UTF8,filePath:c}),l.done(),i(l),{filePath:r,code:e.replace(/\r\n/g,"\n")}}const u=await(0,worker_thread_1.runTask)(worker_thread_1.TASK_NAME.MINIFY_WXML,{projectPath:e.projectPath,root:o,filePath:r,setting:s,code:n},e=>{e===worker_thread_1.ETaskStatus.progress?i(l):e===worker_thread_1.ETaskStatus.done&&(l.done(),i(l))});return u.error&&(0,common_1.throwError)({msg:u.error.message,code:u.error.code,filePath:c}),{filePath:r,code:u.code.replace(/\r\n/g,"\n")}}exports.compileWXML=compileWXML;