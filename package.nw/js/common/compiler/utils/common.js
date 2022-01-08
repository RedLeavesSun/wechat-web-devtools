"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllTargetTypeFilesWithOtherTypeFilesOfSameName=exports.checkPath=exports.ECheckPathType=exports.checkUTF8=exports.throwError=exports.getAllPagesInfo=exports.getAllPages=void 0;const tslib_1=require("tslib"),tools_1=require("./tools"),config_1=require("../config"),path_1=(0,tslib_1.__importDefault)(require("path")),locales_1=(0,tslib_1.__importDefault)(require("./locales/locales")),getAllPages=e=>{const t=[...e.pages];if(e.subPackages)for(const o of e.subPackages)for(const e of o.pages)t.push((0,tools_1.normalizePath)(path_1.default.posix.join(o.root,e)));return t};exports.getAllPages=getAllPages;const getAllPagesInfo=e=>{const t=e.pages.map(e=>({path:e,root:config_1.MINI_PROGRAM_MAIN_PACKAGE_ROOT,name:config_1.MINI_PROGRAM_MAIN_PACKAGE_ROOT}));if(e.subPackages)for(const o of e.subPackages)for(const e of o.pages)t.push({path:(0,tools_1.normalizePath)(path_1.default.posix.join(o.root,e)),root:o.root,name:o.name||""});return t};function throwError(e){const{msg:t,code:o=config_1.JSON_CONTENT_ERR,filePath:r}=e,a=new Error(`${r}: ${t}`);throw a.code=o,a.path=r,a}function checkUTF8(e,t){let o="";try{o=(0,tools_1.bufferToUtf8String)(e)}catch(e){o=""}return void 0===o&&throwError({msg:locales_1.default.config.FILE_NOT_UTF8.format(t),code:config_1.FILE_NOT_UTF8,filePath:t}),o}var ECheckPathType;function checkPath(e){const{value:t,tips:o,filePath:r="app.json",code:a=config_1.JSON_CONTENT_ERR,checkPathType:s=e.checkPathType||ECheckPathType.NORMAL}=e;"string"!==(0,tools_1.getType)(t)&&throwError({msg:locales_1.default.config.JSON_CONTENT_SHOULD_BE.format([o,"string"]),code:a,filePath:r}),""===t&&throwError({msg:locales_1.default.config.JSON_CONTENT_SHOULD_NOT_BE.format([o,"''"]),code:a,filePath:r}),t.includes("\\")&&throwError({msg:locales_1.default.config.JSON_SHOULD_NOT_CONTAIN.format([o,"\\"]),code:a,filePath:r}),s===ECheckPathType.NORMAL&&t.startsWith(".")&&throwError({msg:locales_1.default.config.JSON_SHOULD_NOT_START_WITH.format([o,"."]),code:a,filePath:r}),s===ECheckPathType.NORMAL&&t.startsWith("/")&&throwError({msg:locales_1.default.config.JSON_SHOULD_NOT_START_WITH.format([o,"/"]),code:a,filePath:r}),t.startsWith(" ")&&throwError({msg:locales_1.default.config.JSON_SHOULD_NOT_START_WITH.format([o," "]),code:a,filePath:r}),(t.includes("../")||t.endsWith("/.."))&&throwError({msg:locales_1.default.config.JSON_SHOULD_NOT_CONTAIN.format([o,"../"]),code:a,filePath:r})}function getAllTargetTypeFilesWithOtherTypeFilesOfSameName(e,t,o,r){if(!t)return[];const a=e.getFileList(r,t);if(!o||0===o.length)return a;const s=o.map(t=>new Set(e.getFileList(r,t).map(e=>e.slice(0,-t.length))));return a.map(e=>e.slice(0,-t.length)).filter(e=>s.every(t=>t.has(e))).map(e=>`${e}${t}`)}exports.getAllPagesInfo=getAllPagesInfo,exports.throwError=throwError,exports.checkUTF8=checkUTF8,function(e){e.NORMAL="NORMAL",e.TAB_BAR_ICON="TAB_BAR_ICON"}(ECheckPathType=exports.ECheckPathType||(exports.ECheckPathType={})),exports.checkPath=checkPath,exports.getAllTargetTypeFilesWithOtherTypeFilesOfSameName=getAllTargetTypeFilesWithOtherTypeFilesOfSameName;