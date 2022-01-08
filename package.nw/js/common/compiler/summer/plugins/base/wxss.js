"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=require("tslib"),postcss_1=(0,tslib_1.__importDefault)(require("postcss")),autoprefixer_1=(0,tslib_1.__importDefault)(require("autoprefixer")),cssnano_1=(0,tslib_1.__importDefault)(require("cssnano")),tools_1=require("../../../utils/tools"),config_1=require("../../../config"),log_1=(0,tslib_1.__importDefault)(require("../../../utils/log")),error_1=require("../../error");function default_1(e,r){const{autoPrefix:s=!0,minify:t=!0}=r||{},o=["iOS >= 8","Chrome >= 37"];return{name:"summer-wxss",async optimize(e){const r={};if(s||t)for(const i of Object.keys(e).filter(e=>e.endsWith(".wxss")))try{const u=[];s&&u.push((0,autoprefixer_1.default)({overrideBrowserslist:o,remove:!1})),t&&u.push((0,cssnano_1.default)({preset:["default",{reduceTransforms:!1,calc:!1,minifySelectors:!1,normalizeUrl:!1}]}));const l=await(0,postcss_1.default)(u).process(e[i],{from:(0,tools_1.leading)(i,"/")});r[i]=l.css.replace(/\r\n/g,"\n")}catch(e){throw log_1.default.error(e),(0,error_1.makeSummerError)(e,config_1.POST_WXSS_ERR,i)}return Object.assign(Object.assign({},e),r)}}}process.env.BROWSERSLIST=process.env.BROWSERSLIST||"iOS >= 8, Chrome >= 37",exports.default=default_1;