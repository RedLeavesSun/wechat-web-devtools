"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tcbDescribeStatData=exports.tcbDescribeEnvAccountCircle=exports.tcbDescribeQuotaData=exports.tcbGetResourceLimit=exports.tcbGetEnvironments=void 0;const tslib_1=require("tslib"),transactor_1=(0,tslib_1.__importStar)(require("../../transaction/transactor")),contracts_1=require("../../transaction/contracts/contracts"),common_1=require("../../utils/common");async function tcbGetEnvironments(t,e){const i={Action:"DescribeEnvs",Version:"2018-06-08",EnvId:t.envId,Source:t.source,WxAppId:t.useEmptyAppId?void 0:t.appId||(0,transactor_1.getDefaultAppID)()};try{const t=await(0,transactor_1.default)(contracts_1.tcbGetEnvironmentsContract,i,e);return{requestId:t.RequestId,envList:t.EnvList.map(t=>({envId:t.EnvId,alias:t.Alias,createTime:(0,common_1.strToDate)(t.CreateTime),updateTime:(0,common_1.strToDate)(t.UpdateTime),status:t.Status,source:t.Source,envChannel:t.EnvChannel,storages:(t.Storages||[]).map(t=>({region:(t=t||{}).Region,bucket:t.Bucket,cdnDomain:t.CdnDomain,tcAppId:t.AppId})),functions:(t.Functions||[]).map(t=>({namespace:(t=t||{}).Namespace,region:t.Region})),databases:(t.Databases||[]).map(t=>({instanceId:(t=t||{}).InstanceId,status:t.Status,region:t.Region})),packageId:t.PackageId||"",packageName:t.PackageName||"",logServices:(t.LogServices||[]).map(t=>({logsetName:(t=t||{}).LogsetName,logsetId:t.LogsetId,topicName:t.TopicName,topicId:t.TopicId,region:t.Region})),staticStorages:(t.StaticStorages||[]).map(t=>({region:(t=t||{}).Region,bucket:t.Bucket,staticDomain:t.StaticDomain,status:t.Status,defaultDirName:t.DefaultDirName}))}))}}catch(t){throw t}}async function tcbGetResourceLimit(t){const e={Action:"DescribeResourceLimit",Version:"2018-06-08",EnvId:t.envId,WxAppId:t.appId||(0,transactor_1.getDefaultAppID)()},i=await(0,transactor_1.default)(contracts_1.tcbGetResourceLimitContract,e);return{function:(i.Function||[]).map(t=>({numberLimit:t.NumberLimit,callLimit:{maxSize:t.CallLimit.MaxSize,timeUnit:t.CallLimit.TimeUnit},resourceUsageLimit:{maxSize:t.ResourceUsageLimit.MaxSize,timeUnit:t.ResourceUsageLimit.TimeUnit},concurrentLimit:t.ConcurrentLimit,outboundTrafficLimit:{maxSize:t.OutboundTrafficLimit.MaxSize,timeUnit:t.OutboundTrafficLimit.TimeUnit}})),database:(i.Database||[]).map(t=>({capacityLimit:t.CapacityLimit,connectionLimit:t.ConnectionLimit,collectionLimit:t.CollectionLimit,indexLimit:t.IndexLimit,readLimit:{maxSize:t.ReadLimit.MaxSize,timeUnit:t.ReadLimit.TimeUnit},writeLimit:{maxSize:t.WriteLimit.MaxSize,timeUnit:t.WriteLimit.TimeUnit},QPSLimit:t.QPSLimit})),storage:(i.Storage||[]).map(t=>({capacityLimit:t.CapacityLimit,downloadLimit:{maxSize:t.DownloadLimit.MaxSize,timeUnit:t.DownloadLimit.TimeUnit},downloadLimitMonthly:{maxSize:t.DownloadLimitMonthly.MaxSize,timeUnit:t.DownloadLimitMonthly.TimeUnit},uploadLimit:{maxSize:t.UploadLimit.MaxSize,timeUnit:t.UploadLimit.TimeUnit},uploadLimitMonthly:{maxSize:t.UploadLimitMonthly.MaxSize,timeUnit:t.UploadLimitMonthly.TimeUnit},cdnOriginFlowLimit:{maxSize:t.CdnOriginFlowLimit.MaxSize,timeUnit:t.CdnOriginFlowLimit.TimeUnit},cdnFlowLimit:{maxSize:t.CdnFlowLimit.MaxSize,timeUnit:t.CdnFlowLimit.TimeUnit}}))}}async function tcbDescribeQuotaData(t){const e={Action:"DescribeQuotaData",Version:"2018-06-08",EnvId:t.envId,MetricName:t.metricName,ResourceID:t.resourceId,WxAppId:t.appId||(0,transactor_1.getDefaultAppID)()},i=await(0,transactor_1.default)(contracts_1.tcbDescribeQuotaDataContract,e);return{metricName:i.MetricName,value:i.Value}}async function tcbDescribeEnvAccountCircle(t){const e={Action:"DescribeEnvAccountCircle",Version:"2018-06-08",EnvId:t.envId,WxAppId:t.appId||(0,transactor_1.getDefaultAppID)()},i=await(0,transactor_1.default)(contracts_1.tcbDescribeEnvAccountCircleContract,e);return{startTime:i.StartTime,endTime:i.EndTime}}async function tcbDescribeStatData(t){const e={Action:"DescribeStatData",Version:"2018-06-08",EnvId:t.envId,WxAppId:t.appId||(0,transactor_1.getDefaultAppID)(),Mask:t.mask};return{resources:(await(0,transactor_1.default)(contracts_1.tcbDescribeStatDataContract,e)).Resources.map(t=>({resourceType:t.ResourceType,resourceName:t.ResourceName,status:t.Status,maxSize:t.MaxSize,curSize:t.CurSize,unit:"string"==typeof t.Unit?t.Unit.toUpperCase():t.Unit}))}}exports.tcbGetEnvironments=tcbGetEnvironments,exports.tcbGetResourceLimit=tcbGetResourceLimit,exports.tcbDescribeQuotaData=tcbDescribeQuotaData,exports.tcbDescribeEnvAccountCircle=tcbDescribeEnvAccountCircle,exports.tcbDescribeStatData=tcbDescribeStatData;