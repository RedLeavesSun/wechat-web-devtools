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
import{removeNodes}from"./dom.js";import{NodePart}from"./parts.js";import{templateFactory}from"./template-factory.js";export const parts=new WeakMap;export const render=(t,e,o)=>{let r=parts.get(e);void 0===r&&(removeNodes(e,e.firstChild),parts.set(e,r=new NodePart(Object.assign({templateFactory:templateFactory},o))),r.appendInto(e)),r.setValue(t),r.commit()};