"use strict";const tslib_1=require("tslib"),minifyjs_1=(0,tslib_1.__importDefault)(require("./minifyjs")),_sourcemap=()=>require("source-map"),transformInputSourceMapWhenWraped=e=>{const{code:n,filePath:r,inputSourceMap:o}=e;if(o){const e=new(_sourcemap().SourceMapConsumer)(o),n=new(_sourcemap().SourceMapGenerator)({file:r});return e.eachMapping(e=>{if("number"!=typeof e.originalLine||"number"!=typeof e.originalColumn)return;const r={generated:{line:e.generatedLine+1,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(r=>{const o=r;n._sources.has(o)||n._sources.add(o);const s=e.sourceContentFor(r);null!==s&&n.setSourceContent(r,s)}),n.toJSON()}{const e=new(_sourcemap().SourceMapGenerator)({file:r}),o=n.split("\n").length;for(let n=0;n<o;n++)e.addMapping({generated:{line:n+2,column:0},original:{line:n+1,column:0},source:r});return e._sources.add(r),e.setSourceContent(r,n),e.toJSON()}},minifyAfterWrap=e=>{const n=transformInputSourceMapWhenWraped(Object.assign({},e)),r=(0,minifyjs_1.default)(Object.assign(Object.assign({},e),{inputSourceMap:n,code:`(function(){\n${e.code}\n})()`,useTerser:!0}));return r.error?(console.error(r.error),(0,minifyjs_1.default)(Object.assign(Object.assign({},e),{useTerser:!0}))):r};module.exports=minifyAfterWrap;