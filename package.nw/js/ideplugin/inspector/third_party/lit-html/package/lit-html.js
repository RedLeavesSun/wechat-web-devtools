/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import{defaultTemplateProcessor}from"./lib/default-template-processor.js";import{SVGTemplateResult,TemplateResult}from"./lib/template-result.js";export{DefaultTemplateProcessor,defaultTemplateProcessor}from"./lib/default-template-processor.js";export{directive,isDirective}from"./lib/directive.js";export{removeNodes,reparentNodes}from"./lib/dom.js";export{noChange,nothing}from"./lib/part.js";export{AttributeCommitter,AttributePart,BooleanAttributePart,EventPart,isIterable,isPrimitive,NodePart,PropertyCommitter,PropertyPart}from"./lib/parts.js";export{parts,render}from"./lib/render.js";export{templateCaches,templateFactory}from"./lib/template-factory.js";export{TemplateInstance}from"./lib/template-instance.js";export{SVGTemplateResult,TemplateResult}from"./lib/template-result.js";export{createMarker,isTemplatePartActive,Template}from"./lib/template.js";(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");export const html=(e,...t)=>new TemplateResult(e,t,"html",defaultTemplateProcessor);export const svg=(e,...t)=>new SVGTemplateResult(e,t,"svg",defaultTemplateProcessor);