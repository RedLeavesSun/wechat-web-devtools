"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scfListVersionByFunction=exports.scfPublishVersion=exports.scfGetAlias=exports.scfUpdateAlias=exports.scfGetFunctionLogs=exports.scfInvokeFunction=exports.scfGetFunctionAddress=exports.scfBatchCreateTrigger=exports.scfUpdateFunctionTestModel=exports.scfDeleteFunctionTestModel=exports.scfCreateFunctionTestModel=exports.scfGetFunctionTestModel=exports.scfListFunctionTestModels=exports.scfUpdateFunctionInfo=exports.scfGetFunctionInfo=exports.scfDeleteFunction=exports.scfUpdateFunctionIncrementalCode=exports.scfUpdateFunction=exports.scfCreateFunction=exports.scfListAllFunctions=exports.scfListFunctions=void 0;const tslib_1=require("tslib"),transactor_1=(0,tslib_1.__importDefault)(require("../../transaction/transactor")),contracts_1=require("../../transaction/contracts/contracts"),common_1=require("../../utils/common");async function scfListFunctions(e,t){const n={Action:"ListFunctions",Version:"2018-04-16",Region:e.region,Order:e.order,Orderby:e.orderBy,Offset:e.offset,Limit:e.limit,SearchKey:e.searchKey,Namespace:e.namespace,Description:e.description},o=await(0,transactor_1.default)(contracts_1.scfListFunctionsContract,n,t);return{functions:(o.Functions||[]).map(e=>({modTime:(0,common_1.strToDate)(e.ModTime),addTime:(0,common_1.strToDate)(e.AddTime),runtime:e.Runtime,functionName:e.FunctionName,functionId:e.FunctionId,namespace:e.Namespace,status:e.Status,statusDesc:e.StatusDesc,description:e.Description,tags:(e.Tags||[]).map(e=>({key:e.Key,value:e.Value}))})),totalCount:o.TotalCount}}async function scfListAllFunctions(e,t=[],n=0,o){const i=e.limit||100,{functions:s,totalCount:c}=await scfListFunctions({offset:n,limit:i,order:e.order,orderBy:e.orderBy,searchKey:e.searchKey,namespace:e.namespace,description:e.description,region:e.region},o);return c>n+i?scfListAllFunctions(e,[...t,...s],n+i):{functions:[...t,...s],totalCount:c}}async function scfCreateFunction(e,t){const n={Action:"CreateFunction",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Code:{ZipFile:e.code.zipFile},Handler:e.handler,Description:e.description,MemorySize:e.memorySize,Timeout:e.timeout,Role:e.role,Environment:{Variables:e.environment.variables.map(e=>({Key:e.key,Value:e.value}))},Runtime:e.runtime,Namespace:e.namespace,Stamp:e.stamp,CodeSecret:e.codeSecret,ClsLogsetId:e.clsLogsetId,ClsTopicId:e.clsTopicId};e.hasOwnProperty("installDependency")&&(n.InstallDependency=e.installDependency?"TRUE":"FALSE"),await(0,transactor_1.default)(contracts_1.scfCreateFunctionContract,n,t);return{}}async function scfUpdateFunction(e,t){const n={Action:"UpdateFunctionCode",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,ZipFile:e.fileData,Handler:e.handler||"index.main",Namespace:e.namespace,InstallDependency:e.installDependency?"TRUE":"FALSE",CodeSecret:e.codeSecret};await(0,transactor_1.default)(contracts_1.scfUpdateFunctionContract,n,t);return{}}async function scfUpdateFunctionIncrementalCode(e,t){const n={Action:"UpdateFunctionIncrementalCode",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Namespace:e.namespace,AddFiles:e.addFiles,DeleteFiles:e.deleteFiles};await(0,transactor_1.default)(contracts_1.scfUpdateFunctionIncrementalCodeContract,n,t);return{}}async function scfDeleteFunction(e,t){const n={Action:"DeleteFunction",Version:"2018-04-16",FunctionName:e.functionName,Namespace:e.namespace,Region:e.region};await(0,transactor_1.default)(contracts_1.scfDeleteFunctionContract,n,t);return{}}async function scfGetFunctionInfo(e,t){const n={Action:"GetFunction",Version:"2018-04-16",FunctionName:e.functionName,Region:e.region,Qualifier:e.qualifier,Namespace:e.namespace,CodeSecret:e.codeSecret},o=await(0,transactor_1.default)(contracts_1.scfGetFunctionInfoContract,n,t);return{environment:{variables:(o.Environment||{}).Variables.map(e=>({key:e.Key,value:e.Value}))},functionName:o.FunctionName,runtime:o.Runtime,handler:o.Handler,memorySize:o.MemorySize,timeout:o.Timeout,status:o.Status,statusDesc:o.StatusDesc,installDependency:o.InstallDependency,pubnetConfig:"ENABLE"===o.PublicNetConfig.EipConfig.EipStatus,pubnetIp:o.PublicNetConfig.EipConfig.EipAddress}}async function scfUpdateFunctionInfo(e,t){const n={Action:"UpdateFunctionConfiguration",Version:"2018-04-16",FunctionName:e.functionName,Region:e.region,Namespace:e.namespace,Runtime:e.runtime,MemorySize:e.memorySize,Environment:e.environment?{Variables:e.environment.variables.map(e=>({Key:e.key,Value:e.value}))}:void 0,Timeout:e.timeout,ClsLogsetId:e.clsLogsetId,ClsTopicId:e.clsTopicId};e.hasOwnProperty("installDependency")&&(n.InstallDependency=e.installDependency?"TRUE":"FALSE"),e.hasOwnProperty("systemEnvironment")&&(n.SystemEnvironment={Variables:e.systemEnvironment.variables.map(e=>({Key:e.key,Value:e.value}))}),await(0,transactor_1.default)(contracts_1.scfUpdateFunctionInfoContract,n,t);return{}}async function scfListFunctionTestModels(e,t){const n={Action:"ListFunctionTestModels",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Namespace:e.namespace};return{testModels:(await(0,transactor_1.default)(contracts_1.scfListFunctionTestModelsContract,n,t)).TestModels||[]}}async function scfGetFunctionTestModel(e,t){const n={Action:"GetFunctionTestModel",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,TestModelName:e.testModelName,Namespace:e.namespace},o=await(0,transactor_1.default)(contracts_1.scfGetFunctionTestModelContract,n,t);return{testModelValue:o.TestModelValue,functionName:o.FunctionName,testModelName:o.TestModelName,createdTime:o.CreatedTime,modifiedTime:o.ModifiedTime,namespace:o.Namespace}}async function scfCreateFunctionTestModel(e,t){const n={Action:"CreateFunctionTestModel",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,TestModelName:e.testModelName,TestModelValue:e.testModelValue,Namespace:e.namespace};await(0,transactor_1.default)(contracts_1.scfCreateFunctionTestModelContract,n,t);return{}}async function scfDeleteFunctionTestModel(e,t){const n={Action:"DeleteFunctionTestModel",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,TestModelName:e.testModelName,Namespace:e.namespace};await(0,transactor_1.default)(contracts_1.scfDeleteFunctionTestModelContract,n,t);return{}}async function scfUpdateFunctionTestModel(e,t){const n={Action:"UpdateFunctionTestModel",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,TestModelName:e.testModelName,TestModelValue:e.testModelValue,Namespace:e.namespace};await(0,transactor_1.default)(contracts_1.scfUpdateFunctionTestModelContract,n,t);return{}}async function scfBatchCreateTrigger(e,t){const n={Action:"BatchCreateTrigger",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Namespace:e.namespace,Triggers:JSON.stringify(e.triggers.map(e=>({TriggerName:e.triggerName,Type:e.type,TriggerDesc:e.triggerDesc}))),Count:e.triggers.length};await(0,transactor_1.default)(contracts_1.scfBatchCreateTriggerContract,n,t);return{}}async function scfGetFunctionAddress(e,t){const n={Action:"GetFunctionAddress",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Namespace:e.namespace,CodeSecret:e.codeSecret},o=await(0,transactor_1.default)(contracts_1.scfGetFunctionAddressContract,n,t);return{codeSha256:o.CodeSha256,url:o.Url}}async function scfInvokeFunction(e,t){const n={Action:"Invoke",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Namespace:e.namespace,InvocationType:e.invocationType,Qualifier:e.qualifier,ClientContext:e.clientContext};return{result:{functionRequestId:(await(0,transactor_1.default)(contracts_1.scfInvokeFunctionContract,n,t)).Result.FunctionRequestId}}}async function scfGetFunctionLogs(e,t,n){const o={Action:"GetFunctionLogs",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Namespace:e.namespace,Offset:e.offset,Limit:e.limit,Order:e.order,OrderBy:e.orderBy,Filter:e.filter?{RetCode:e.filter.retCode}:void 0,Qualifier:e.qualifier,FunctionRequestId:e.functionRequestId,StartTime:e.startTime?(0,common_1.dateToStr)(e.startTime):void 0,EndTime:e.endTime?(0,common_1.dateToStr)(e.endTime):void 0};return{data:(await(0,transactor_1.default)(contracts_1.scfGetFunctionLogsContract,o,Object.assign(Object.assign({},n),{isPoll:t}))).Data.map(e=>({functionName:e.FunctionName,retMsg:e.RetMsg,requestId:e.RequestId,startTime:(0,common_1.strToDate)(e.StartTime),retCode:e.RetCode,invokeFinished:e.InvokeFinished,duration:e.Duration,billDuration:e.BillDuration,memUsage:e.MemUsage,log:e.Log}))}}async function scfUpdateAlias(e){var t,n;const o={Action:"UpdateAlias",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Name:e.name,FunctionVersion:e.functionVersion,Namespace:e.namespace,RoutingConfig:e.routingConfig?{AdditionalVersionWeights:null===(t=e.routingConfig.additionalVersionWeights)||void 0===t?void 0:t.map(e=>({Version:e.version,Weight:e.weight})),AddtionVersionMatchs:null===(n=e.routingConfig.addtionVersionMatchs)||void 0===n?void 0:n.map(e=>({Version:e.version,Key:e.key,Method:e.method,Expression:e.expression}))}:e.routingConfig,Description:e.description};await(0,transactor_1.default)(contracts_1.scfUpdateAliasContract,o);return{}}async function scfGetAlias(e){var t,n;const o={Action:"GetAlias",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Name:e.name,Namespace:e.namespace},i=await(0,transactor_1.default)(contracts_1.scfGetAliasContract,o);return{functionVersion:i.FunctionVersion,name:i.Name,routingConfig:{additionalVersionWeights:null===(t=i.RoutingConfig.AdditionalVersionWeights)||void 0===t?void 0:t.map(e=>({version:e.Version,weight:e.Weight})),addtionVersionMatchs:null===(n=i.RoutingConfig.AddtionVersionMatchs)||void 0===n?void 0:n.map(e=>({version:e.Version,key:e.Key,method:e.Method,expression:e.Expression}))},description:i.Description,addTime:i.AddTime,modTime:i.ModTime}}async function scfPublishVersion(e){const t={Action:"PublishVersion",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Description:e.description,Namespace:e.namespace},n=await(0,transactor_1.default)(contracts_1.scfPublishVersionContract,t);return{functionVersion:n.FunctionVersion,codeSize:n.CodeSize,memorySize:n.MemorySize,description:n.Description,handler:n.Handler,timeout:n.Timeout,runtime:n.Runtime,namespace:n.Namespace}}async function scfListVersionByFunction(e){const t={Action:"ListVersionByFunction",Version:"2018-04-16",Region:e.region,FunctionName:e.functionName,Namespace:e.namespace,SearchKey:e.searchKey},n=await(0,transactor_1.default)(contracts_1.scfListVersionByFunctionContract,t);return{functionVersion:n.FunctionVersion,versions:(n.Versions||[]).map(e=>({version:e.Version,description:e.Description,addTime:e.AddTime,modTime:e.ModTime}))}}exports.scfListFunctions=scfListFunctions,exports.scfListAllFunctions=scfListAllFunctions,exports.scfCreateFunction=scfCreateFunction,exports.scfUpdateFunction=scfUpdateFunction,exports.scfUpdateFunctionIncrementalCode=scfUpdateFunctionIncrementalCode,exports.scfDeleteFunction=scfDeleteFunction,exports.scfGetFunctionInfo=scfGetFunctionInfo,exports.scfUpdateFunctionInfo=scfUpdateFunctionInfo,exports.scfListFunctionTestModels=scfListFunctionTestModels,exports.scfGetFunctionTestModel=scfGetFunctionTestModel,exports.scfCreateFunctionTestModel=scfCreateFunctionTestModel,exports.scfDeleteFunctionTestModel=scfDeleteFunctionTestModel,exports.scfUpdateFunctionTestModel=scfUpdateFunctionTestModel,exports.scfBatchCreateTrigger=scfBatchCreateTrigger,exports.scfGetFunctionAddress=scfGetFunctionAddress,exports.scfInvokeFunction=scfInvokeFunction,exports.scfGetFunctionLogs=scfGetFunctionLogs,exports.scfUpdateAlias=scfUpdateAlias,exports.scfGetAlias=scfGetAlias,exports.scfPublishVersion=scfPublishVersion,exports.scfListVersionByFunction=scfListVersionByFunction;