"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cdnTcbCheckResource=exports.cdnTcbModifyAttribute=void 0;const tslib_1=require("tslib"),transactor_1=(0,tslib_1.__importDefault)(require("../../transaction/transactor")),cdnContracts=(0,tslib_1.__importStar)(require("../../transaction/contracts/contracts"));async function cdnTcbModifyAttribute(i){var e;const t={Action:"TcbModifyAttribute",Version:"2018-06-06",Region:i.region,Domain:i.domain,DomainId:i.domainId,DomainConfig:{Origin:i.domainConfig.origin?{Master:i.domainConfig.origin.master,Slave:i.domainConfig.origin.slave}:i.domainConfig.origin,CosPrivateAccess:i.domainConfig.cosPrivateAccess,Authentication:i.domainConfig.authentication?{Switch:i.domainConfig.authentication.switch,SecretKey:i.domainConfig.authentication.secretKey,SignParam:i.domainConfig.authentication.signParam,TimeParam:i.domainConfig.authentication.timeParam,ExpireTime:i.domainConfig.authentication.expireTime}:i.domainConfig.authentication,Cache:null===(e=i.domainConfig.cache)||void 0===e?void 0:e.map(i=>({RuleType:i.ruleType,RuleValue:i.ruleValue,CacheTtl:i.cacheTtl})),StaticWeb:i.domainConfig.staticWeb?{Switch:i.domainConfig.staticWeb.switch,Path:i.domainConfig.staticWeb.path}:i.domainConfig.staticWeb,RootAccess:i.domainConfig.rootAccess,SpeedLimit:i.domainConfig.speedLimit,Https:i.domainConfig.https?{Switch:i.domainConfig.https.switch,CertInfo:i.domainConfig.https.certInfo?{HttpsType:i.domainConfig.https.certInfo.httpsType,CertId:i.domainConfig.https.certInfo.certId}:i.domainConfig.https.certInfo}:i.domainConfig.https,RspHeader:i.domainConfig.rspHeader?{Switch:i.domainConfig.rspHeader.switch,HeaderRules:(i.domainConfig.rspHeader.headerRules||[]).map(i=>({HeaderName:i.headerName,HeaderValue:i.headerValue}))}:i.domainConfig.rspHeader,FollowRedirect:i.domainConfig.followRedirect,IpFilter:i.domainConfig.ipFilter?{Switch:i.domainConfig.ipFilter.switch,FilterType:i.domainConfig.ipFilter.filterType,Filters:i.domainConfig.ipFilter.filters||[]}:i.domainConfig.ipFilter,IpFreqLimit:i.domainConfig.ipFreqLimit?{Switch:i.domainConfig.ipFreqLimit.switch,Qps:i.domainConfig.ipFreqLimit.qps}:i.domainConfig.ipFreqLimit,ForceRedirect:i.domainConfig.forceRedirect?{Switch:i.domainConfig.forceRedirect.switch,RedirectType:i.domainConfig.forceRedirect.redirectType,RedirectStatusCode:i.domainConfig.forceRedirect.redirectStatusCode}:i.domainConfig.forceRedirect,Refer:i.domainConfig.refer?{Switch:i.domainConfig.refer.switch,RefererRules:(i.domainConfig.refer.refererRules||[]).map(i=>({RefererType:i.refererType,Referers:i.referers,AllowEmpty:i.allowEmpty}))}:i.domainConfig.refer}},o=await(0,transactor_1.default)(cdnContracts.cdnTcbModifyAttributeContract,t);return{domainId:o.DomainId,origin:{master:o.Origin.Master,slave:o.Origin.Slave},cosPrivateAccess:o.CosPrivateAccess,authentication:{switch:o.Authentication.Switch,secretKey:o.Authentication.SecretKey,signParam:o.Authentication.SignParam,timeParam:o.Authentication.TimeParam,expireTime:o.Authentication.ExpireTime},cache:o.Cache.map(i=>({ruleType:i.RuleType,ruleValue:i.RuleValue,cacheTtl:i.CacheTtl})),staticWeb:o.StaticWeb?{switch:o.StaticWeb.Switch,path:o.StaticWeb.Path}:o.StaticWeb,rootAccess:o.RootAccess}}async function cdnTcbCheckResource(i){const e={Action:"TcbCheckResource",Version:"2018-06-06",Region:i.region,Domains:i.domains},t=await(0,transactor_1.default)(cdnContracts.cdnTcbCheckResourceContract,e);return{domains:t.Domains.map(i=>{var e;return{domain:i.Domain,domainId:i.DomainId,status:i.Status,domainConfig:{origin:i.DomainConfig.Origin?{master:i.DomainConfig.Origin.Master,slave:i.DomainConfig.Origin.Slave}:i.DomainConfig.Origin,cosPrivateAccess:i.DomainConfig.CosPrivateAccess,authentication:i.DomainConfig.Authentication?{switch:i.DomainConfig.Authentication.Switch,secretKey:i.DomainConfig.Authentication.SecretKey,signParam:i.DomainConfig.Authentication.SignParam,timeParam:i.DomainConfig.Authentication.TimeParam,expireTime:i.DomainConfig.Authentication.ExpireTime}:i.DomainConfig.Authentication,cache:null===(e=i.DomainConfig.Cache)||void 0===e?void 0:e.map(i=>({ruleType:i.RuleType,ruleValue:i.RuleValue,cacheTtl:i.CacheTtl})),staticWeb:i.DomainConfig.StaticWeb?{switch:i.DomainConfig.StaticWeb.Switch,path:i.DomainConfig.StaticWeb.Path}:i.DomainConfig.StaticWeb,rootAccess:i.DomainConfig.RootAccess,speedLimit:i.DomainConfig.SpeedLimit,https:i.DomainConfig.Https?{switch:i.DomainConfig.Https.Switch,certInfo:i.DomainConfig.Https.CertInfo?{httpsType:i.DomainConfig.Https.CertInfo.HttpsType,certId:i.DomainConfig.Https.CertInfo.CertId}:i.DomainConfig.Https.CertInfo}:i.DomainConfig.Https,rspHeader:i.DomainConfig.RspHeader?{switch:i.DomainConfig.RspHeader.Switch,headerRules:(i.DomainConfig.RspHeader.HeaderRules||[]).map(i=>({headerName:i.HeaderName,headerValue:i.HeaderValue}))}:i.DomainConfig.RspHeader,followRedirect:i.DomainConfig.FollowRedirect,ipFilter:i.DomainConfig.IpFilter?{switch:i.DomainConfig.IpFilter.Switch,filterType:i.DomainConfig.IpFilter.FilterType,filters:i.DomainConfig.IpFilter.Filters||[]}:i.DomainConfig.IpFilter,ipFreqLimit:i.DomainConfig.IpFreqLimit?{switch:i.DomainConfig.IpFreqLimit.Switch,qps:i.DomainConfig.IpFreqLimit.Qps}:i.DomainConfig.IpFreqLimit,forceRedirect:i.DomainConfig.ForceRedirect?{switch:i.DomainConfig.ForceRedirect.Switch,redirectType:i.DomainConfig.ForceRedirect.RedirectType,redirectStatusCode:i.DomainConfig.ForceRedirect.RedirectStatusCode}:i.DomainConfig.ForceRedirect,refer:i.DomainConfig.Refer?{switch:i.DomainConfig.Refer.Switch,refererRules:(i.DomainConfig.Refer.RefererRules||[]).map(i=>({refererType:i.RefererType,referers:i.Referers,allowEmpty:i.AllowEmpty}))}:i.DomainConfig.Refer},cName:i.CName}}),recordCount:t.RecordCount}}exports.cdnTcbModifyAttribute=cdnTcbModifyAttribute,exports.cdnTcbCheckResource=cdnTcbCheckResource;