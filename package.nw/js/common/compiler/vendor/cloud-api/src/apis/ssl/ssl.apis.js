"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sslDescribeCertificates=void 0;const tslib_1=require("tslib"),transactor_1=(0,tslib_1.__importDefault)(require("../../transaction/transactor")),sslContracts=(0,tslib_1.__importStar)(require("../../transaction/contracts/contracts"));async function sslDescribeCertificates(e){const t={Action:"DescribeCertificates",Version:"2019-12-05",Region:e.region,Offset:e.offset,Limit:e.limit,SearchKey:e.searchKey,CertificateType:e.certificateType,ProjectId:e.projectId,ExpirationSort:e.expirationSort,CertificateStatus:e.certificateStatus,Deployable:e.deployable},r=await(0,transactor_1.default)(sslContracts.sslDescribeCertificatesContract,t);return{totalCount:r.TotalCount,certificates:(r.Certificates||[]).map(e=>({ownerUin:e.OwnerUin,projectId:e.ProjectId,from:e.From,packageType:e.PackageType,certificateType:e.CertificateType,productZhName:e.ProductZhName,domain:e.Domain,alias:e.Alias,status:e.Status,certificateExtra:e.CertificateExtra?{domainNumber:e.CertificateExtra.DomainNumber,originCertificateId:e.CertificateExtra.OriginCertificateId,replacedBy:e.CertificateExtra.ReplacedBy,replacedFor:e.CertificateExtra.ReplacedFor,renewOrder:e.CertificateExtra.RenewOrder}:e.CertificateExtra,vulnerabilityStatus:e.VulnerabilityStatus,statusMsg:e.StatusMsg,verifyType:e.VerifyType,certBeginTime:e.CertBeginTime,certEndTime:e.CertEndTime,validityPeriod:e.ValidityPeriod,insertTime:e.InsertTime,certificateId:e.CertificateId,subjectAltName:e.SubjectAltName||[],packageTypeName:e.PackageTypeName,statusName:e.StatusName,isVip:e.IsVip,isDv:e.IsDv,isWildcard:e.IsWildcard,isVulnerability:e.IsVulnerability,renewAble:e.RenewAble,projectInfo:e.ProjectInfo?{projectName:e.ProjectInfo.ProjectName,projectCreatorUin:e.ProjectInfo.ProjectCreatorUin,projectCreateTime:e.ProjectInfo.ProjectCreateTime,projectResume:e.ProjectInfo.ProjectResume,ownerUin:e.ProjectInfo.OwnerUin,projectId:e.ProjectInfo.ProjectId}:e.ProjectInfo,boundResource:e.BoundResource||[],deployable:e.Deployable}))}}exports.sslDescribeCertificates=sslDescribeCertificates;