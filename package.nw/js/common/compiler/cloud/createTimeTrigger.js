"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createTimeTrigger=void 0;const tslib_1=require("tslib"),cloudAPI=(0,tslib_1.__importStar)(require("../vendor/cloud-api")),cloudapi_1=require("./cloudapi"),error_1=require("../utils/error"),locales_1=(0,tslib_1.__importDefault)(require("../utils/locales/locales")),config_1=require("../config"),requiredParams=["project","envId","functionName","triggersConfig"];async function createTimeTrigger(r){if(!Array.isArray(r.triggersConfig))throw new Error("triggersConfig is not Array");requiredParams.forEach(e=>{if(!r[e])throw new error_1.CodeError(locales_1.default.config.PARAM_ERROR.format("cloud.createTimeTrigger",e),config_1.PARAM_ERROR)});const{project:e,envId:i,functionName:t,triggersConfig:o}=r,n=await e.getExtAppid();(0,cloudapi_1.initCloudAPI)(n||e.appid);const{envList:a}=await cloudAPI.tcbGetEnvironments({},{request:(0,cloudapi_1.boundTransactRequest)(e),transactType:cloudAPI.TransactType.IDE}),c=a.find(r=>r.envId===i);if(!c)throw new Error("env not found");const g=c.functions[0].region,s=o.map((r,e)=>{if("Object"!==Object.prototype.toString.call(r).slice(8,-1))throw new Error(`triggersConfig index ${e} is not Object`);if(!r.name)throw new Error(`triggersConfig index ${e} required name`);if(!r.type)throw new Error(`triggersConfig index ${e} required type`);switch(r.type){case"timer":if(!r.config)throw new Error(`triggersConfig index ${e} required config`)}return{triggerName:r.name,type:r.type,triggerDesc:r.config}});try{return await cloudAPI.scfBatchCreateTrigger({namespace:i,region:g,functionName:t,triggers:s},{request:(0,cloudapi_1.boundTransactRequest)(e),transactType:cloudAPI.TransactType.IDE}),"创建定时触发器成功"}catch(r){return"请检查传入的 triggersConfig 是否符合格式"}}exports.createTimeTrigger=createTimeTrigger;