"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initEnvironmentByProject=exports.zipToBuffer=exports.zipFile=void 0;const tslib_1=require("tslib"),fs_1=(0,tslib_1.__importDefault)(require("fs")),path_1=(0,tslib_1.__importDefault)(require("path")),jszip_1=(0,tslib_1.__importDefault)(require("jszip")),minimatch_1=(0,tslib_1.__importDefault)(require("minimatch")),cloudapi_1=require("./cloudapi"),log_1=(0,tslib_1.__importDefault)(require("../utils/log")),cloudAPI=(0,tslib_1.__importStar)(require("../vendor/cloud-api")),minimatchWithList=(e,t)=>{if(!t)return!1;for(const i of t)if(i.startsWith("!")&&!(0,minimatch_1.default)(e,i))return!1;for(const i of t)if(!i.startsWith("!")&&(0,minimatch_1.default)(e,i))return!0;return!1},zipFile=(e,{ignore:t,name:i,zip:n=new jszip_1.default,includeRoot:r=!1}={})=>{if(!fs_1.default.existsSync(e))return n;const o=fs_1.default.lstatSync(e),s=i||path_1.default.basename(e);if(o.isSymbolicLink())n.file(s,fs_1.default.readlinkSync(e),{unixPermissions:parseInt("120"+parseInt((o.mode&parseInt("777",8)).toString(8),10),8)});else if(o.isDirectory()){r&&n.folder(s);const i=fs_1.default.readdirSync(e);for(let o=0,a=i.length;o<a;o++){const a=i[o],l=r?path_1.default.posix.join(s,a):a;t&&minimatchWithList(l,t)||(0,exports.zipFile)(path_1.default.join(e,a),{zip:n,ignore:t,name:l,includeRoot:!0})}}else n.file(s,fs_1.default.readFileSync(e),{binary:!0,unixPermissions:o.mode});return n};exports.zipFile=zipFile;const zipToBuffer=(e,t)=>e.generateAsync({type:"nodebuffer",platform:"darwin"===process.platform?"UNIX":"DOS",compression:"DEFLATE",compressionOptions:{level:9}},t);async function initEnvironmentByProject(e,t){const i=await e.getExtAppid();(0,cloudapi_1.initCloudAPI)(i||e.appid),log_1.default.info("[cloud] loading env info");const n={request:(0,cloudapi_1.boundTransactRequest)(e),transactType:cloudAPI.TransactType.IDE};cloudAPI.setRequest((0,cloudapi_1.boundTransactRequest)(e)),cloudAPI.setTransactType(cloudAPI.TransactType.IDE);const[r,o]=await Promise.all([cloudAPI.tcbGetEnvironments({},n),cloudAPI.tcbDescribeWxCloudBaseRunEnvs({})]),s=[...r.envList,...o.envList].find(e=>e.envId===t);if(!s)throw new Error("env not found");return{currentEnv:s,cloudAPI:cloudAPI}}exports.zipToBuffer=zipToBuffer,exports.initEnvironmentByProject=initEnvironmentByProject;