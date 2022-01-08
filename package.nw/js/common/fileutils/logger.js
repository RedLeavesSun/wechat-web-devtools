"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const manifest=require("./manifest.json"),noop=()=>{};let logger=console||{info:noop,warn:noop,error:noop,debug:noop},customPrefix=`FileUtils][${manifest.version}`;function initLogger(e,o){logger=e,o&&(customPrefix=o||"")}function createLogger(e=customPrefix){return process.env.FILE_UTILS_TEST?{info:()=>{},warn:()=>{},error:()=>{},debug:()=>{}}:{info(...o){logger.info(e,...o)},warn(...o){logger.warn(e,...o)},error(...o){logger.error(e,...o)},debug(...o){logger.debug(e,...o)}}}exports.initLogger=initLogger,exports.createLogger=createLogger;