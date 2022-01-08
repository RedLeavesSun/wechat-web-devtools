"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const path=require("path"),utils_1=require("../utils");exports.isDev=utils_1.isDev;const{getMsDetector:getMsDetector}=require("../@fw/index.js"),isDebug=utils_1.isDev;exports.isDebug=isDebug;const defaultLogger={get i(){return console.log.bind(console)},get w(){return console.warn.bind(console)},get e(){return console.error.bind(console)},get assert(){return console.error.bind(console,"[assert]")}};exports.defaultLogger=defaultLogger;const nodeDirPath=utils_1.isTest?process.execPath:path.join(process.execPath,"../node"),nodeSubffix="win32"===process.platform?".exe":"",nodePath=nodeDirPath+nodeSubffix;exports.nodePath=nodePath;const msExeBaseName="x64"===process.arch?"wxfilewatcher_x64.exe":"wxfilewatcher.exe",processExecPath=path.dirname(process.execPath),localExePath=path.resolve(__dirname,"../../"),msExePathDirPath=utils_1.isTest?localExePath:processExecPath,msExePath=path.join(msExePathDirPath,msExeBaseName);exports.msExePath=msExePath;const unpackPath=path.resolve(__dirname,"../unpack");exports.unpackPath=unpackPath;const chokidarJsPath=path.join(unpackPath,"aaplwatcherapp.js");exports.chokidarJsPath=chokidarJsPath;let _hasDetected=!1,_canUse=!0;const canUseNewFileWatcher=()=>{if(_hasDetected||utils_1.isMac)return _hasDetected=!0,_canUse;const e=getMsDetector(msExePath,["--test"],defaultLogger,isDebug);try{_canUse=e.detect()}catch(e){defaultLogger.e(e),_canUse=!1}return _hasDetected=!0,_canUse};exports.canUseNewFileWatcher=canUseNewFileWatcher;