"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllPluginSignatures=exports.isPathValid=exports.getAllPluginsWithPath=exports.friendlyPathMake=exports.trailing=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),game_1=(0,tslib_1.__importDefault)(require("./game")),fs_extra_1=(0,tslib_1.__importDefault)(require("fs-extra")),tools_1=require("../../utils/tools"),log_1=(0,tslib_1.__importDefault)(require("../../utils/log")),trailing=(t,e)=>t.endsWith(e)?t:t+e;exports.trailing=trailing;const friendlyPathMake=(t,e)=>path_1.default.normalize(path_1.default.join(t,e.replace(/\\/g,"/")).replace(/^\/+/,""));async function getAllPluginsWithPath(t){const e=await(0,game_1.default)(t),i=[],a=(t,e="")=>{if(t.plugins)for(const a in t.plugins){if(!t.plugins.hasOwnProperty(a))continue;const r=t.plugins[a];r&&"string"==typeof r.path&&i.push({alias:a,version:r.version||"",provider:r.provider||"",path:r.path,friendlyPath:(0,exports.friendlyPathMake)(e,r.path)})}};a(e,"");const r=e.subPackages||e.subpackages;if(Array.isArray(r))for(const t of r)t&&"string"==typeof t.root&&a(t,t.root);return i}function isPathValid(t,e){if(e=e.replace(/\\/g,"/"),t=t.replace(/\\/g,"/"),e.includes("../")||e.endsWith("/.."))return!1;const i=(0,tools_1.normalizePath)(path_1.default.join(t,e)),a=(0,tools_1.normalizePath)(t);return!!i.startsWith(a)}async function getAllPluginSignatures(t){const e=await getAllPluginsWithPath(t),i=[];let a=t.miniprogramRoot?path_1.default.join(t.projectPath,t.miniprogramRoot):t.projectPath;a=(0,tools_1.normalizePath)(a),a=a.endsWith("/")?a:a+"/";for(const t of e)try{const e=path_1.default.join(a,t.friendlyPath);let r=await fs_extra_1.default.pathExists(e);if(!r)continue;const n=await fs_extra_1.default.stat(e);let l=e;n.isDirectory()||(l=path_1.default.dirname(e));const s=path_1.default.join(l,"signature.json");if(r=await fs_extra_1.default.pathExists(s),!r)continue;const o=await fs_extra_1.default.readFile(s,"utf8");let u=null;try{u=JSON.parse(o)}catch(t){log_1.default.error(t);continue}if(!u||!Array.isArray(u.signature))continue;const p=[];for(let t=0;t<u.signature.length;t++){const e=u.signature[t];if(!e)continue;if("string"!=typeof e.path||"string"!=typeof e.md5)continue;if(!isPathValid(l,e.path))continue;const i=path_1.default.join(l,e.path);p.push({fullPath:i,md5:e.md5})}i.push({provider:t.provider,fullPath:e,signature:p})}catch(t){log_1.default.error(t);continue}return i}exports.friendlyPathMake=friendlyPathMake,exports.getAllPluginsWithPath=getAllPluginsWithPath,exports.isPathValid=isPathValid,exports.getAllPluginSignatures=getAllPluginSignatures;