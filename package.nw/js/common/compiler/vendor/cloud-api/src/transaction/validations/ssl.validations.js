"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sslDescribeCertificatesOutputValidation=void 0;const tslib_1=require("tslib"),v=(0,tslib_1.__importStar)(require("../../utils/validator")),common=(0,tslib_1.__importStar)(require("./validations"));exports.sslDescribeCertificatesOutputValidation=Object.assign({},common.commonOutputValidation,{TotalCount:v.$optional(1),Certificates:v.$optional(v.$arrayOf(common.certificatesValidation))});