Node.prototype.rangeOfWord=function(e,t,o,n){let r,i,s=0,l=0;if(o||(o=this),n&&"backward"!==n&&"both"!==n)r=this,s=e;else{let n=this;for(;n;){if(n===o){r||(r=o);break}if(n.nodeType===Node.TEXT_NODE){for(let o=n===this?e-1:n.nodeValue.length-1;o>=0;--o)if(-1!==t.indexOf(n.nodeValue[o])){r=n,s=o+1;break}}if(r)break;n=n.traversePreviousNode(o)}r||(r=o,s=0)}if(n&&"forward"!==n&&"both"!==n)i=this,l=e;else{let n=this;for(;n;){if(n===o){i||(i=o);break}if(n.nodeType===Node.TEXT_NODE){for(let o=n===this?e:0;o<n.nodeValue.length;++o)if(-1!==t.indexOf(n.nodeValue[o])){i=n,l=o;break}}if(i)break;n=n.traverseNextNode(o)}i||(i=o,l=o.nodeType===Node.TEXT_NODE?o.nodeValue.length:o.childNodes.length)}const h=this.ownerDocument.createRange();return h.setStart(r,s),h.setEnd(i,l),h},Node.prototype.traverseNextTextNode=function(e){let t=this.traverseNextNode(e);if(!t)return null;const o={STYLE:1,SCRIPT:1};for(;t&&(t.nodeType!==Node.TEXT_NODE||o[t.parentElement.nodeName]);)t=t.traverseNextNode(e);return t},Element.prototype.positionAt=function(e,t,o){let n={x:0,y:0};o&&(n=o.boxInWindow(this.ownerDocument.defaultView)),"number"==typeof e?this.style.setProperty("left",n.x+e+"px"):this.style.removeProperty("left"),"number"==typeof t?this.style.setProperty("top",n.y+t+"px"):this.style.removeProperty("top"),"number"==typeof e||"number"==typeof t?this.style.setProperty("position","absolute"):this.style.removeProperty("position")},Element.prototype.isScrolledToBottom=function(){return Math.abs(this.scrollTop+this.clientHeight-this.scrollHeight)<=2},Node.prototype.enclosingNodeOrSelfWithNodeNameInArray=function(e){for(let t=this;t&&t!==this.ownerDocument;t=t.parentNodeOrShadowHost())for(let o=0;o<e.length;++o)if(t.nodeName.toLowerCase()===e[o].toLowerCase())return t;return null},Node.prototype.enclosingNodeOrSelfWithNodeName=function(e){return this.enclosingNodeOrSelfWithNodeNameInArray([e])},Node.prototype.enclosingNodeOrSelfWithClass=function(e,t){return this.enclosingNodeOrSelfWithClassList([e],t)},Node.prototype.enclosingNodeOrSelfWithClassList=function(e,t){for(let o=this;o&&o!==t&&o!==this.ownerDocument;o=o.parentNodeOrShadowHost())if(o.nodeType===Node.ELEMENT_NODE){let t=!0;for(let n=0;n<e.length&&t;++n)o.classList.contains(e[n])||(t=!1);if(t)return o}return null},Node.prototype.enclosingShadowRoot=function(){let e=this.parentNodeOrShadowHost();for(;e;){if(e instanceof ShadowRoot)return e;e=e.parentNodeOrShadowHost()}return null},Node.prototype.hasSameShadowRoot=function(e){return this.enclosingShadowRoot()===e.enclosingShadowRoot()},Node.prototype.parentElementOrShadowHost=function(){if(this.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&this.host)return this.host;const e=this.parentNode;return e?e.nodeType===Node.ELEMENT_NODE?e:e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.host:null:null},Node.prototype.parentNodeOrShadowHost=function(){return this.parentNode?this.parentNode:this.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&this.host?this.host:null},Node.prototype.getComponentSelection=function(){let e=this.parentNode;for(;e&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE;)e=e.parentNode;return e instanceof ShadowRoot?e.getSelection():this.window().getSelection()},Node.prototype.hasSelection=function(){if(this instanceof Element){const e=this.querySelectorAll("slot");for(const t of e)if(Array.prototype.some.call(t.assignedNodes(),e=>e.hasSelection()))return!0}const e=this.getComponentSelection();return"Range"===e.type&&(e.containsNode(this,!0)||e.anchorNode.isSelfOrDescendant(this)||e.focusNode.isSelfOrDescendant(this))},Node.prototype.window=function(){return this.ownerDocument.defaultView},Element.prototype.removeChildren=function(){this.firstChild&&(this.textContent="")},self.createElement=function(e,t){return document.createElement(e,{is:t})},self.createTextNode=function(e){return document.createTextNode(e)},Document.prototype.createElementWithClass=function(e,t,o){const n=this.createElement(e,{is:o});return t&&(n.className=t),n},Document.prototype.createSVGElement=function(e,t){const o=this.createElementNS("http://www.w3.org/2000/svg",e);return t&&o.setAttribute("class",t),o},self.createSVGElement=function(e,t){return document.createSVGElement(e,t)},self.createDocumentFragment=function(){return document.createDocumentFragment()},Element.prototype.createChild=function(e,t,o){const n=this.ownerDocument.createElementWithClass(e,t,o);return this.appendChild(n),n},DocumentFragment.prototype.createChild=Element.prototype.createChild,Element.prototype.createTextChild=function(e){const t=this.ownerDocument.createTextNode(e);return this.appendChild(t),t},DocumentFragment.prototype.createTextChild=Element.prototype.createTextChild,Element.prototype.createTextChildren=function(e){for(let e=0,t=arguments.length;e<t;++e)this.createTextChild(arguments[e])},DocumentFragment.prototype.createTextChildren=Element.prototype.createTextChildren,Element.prototype.totalOffsetLeft=function(){return this.totalOffset().left},Element.prototype.totalOffsetTop=function(){return this.totalOffset().top},Element.prototype.totalOffset=function(){const e=this.getBoundingClientRect();return{left:e.left,top:e.top}},Element.prototype.createSVGChild=function(e,t){const o=this.ownerDocument.createSVGElement(e,t);return this.appendChild(o),o},self.AnchorBox=class{constructor(e,t,o,n){this.x=e||0,this.y=t||0,this.width=o||0,this.height=n||0}contains(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}relativeTo(e){return new AnchorBox(this.x-e.x,this.y-e.y,this.width,this.height)}relativeToElement(e){return this.relativeTo(e.boxInWindow(e.ownerDocument.defaultView))}equals(e){return!!e&&this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}},Element.prototype.boxInWindow=function(e){e=e||this.ownerDocument.defaultView;const t=new AnchorBox;let o=this,n=this.ownerDocument.defaultView;for(;n&&o&&(t.x+=o.totalOffsetLeft(),t.y+=o.totalOffsetTop(),n!==e);)o=n.frameElement,n=n.parent;return t.width=Math.min(this.offsetWidth,e.innerWidth-t.x),t.height=Math.min(this.offsetHeight,e.innerHeight-t.y),t},Event.prototype.consume=function(e){this.stopImmediatePropagation(),e&&this.preventDefault(),this.handled=!0},Text.prototype.select=function(e,t){e=e||0,t=t||this.textContent.length,e<0&&(e=t+e);const o=this.getComponentSelection();o.removeAllRanges();const n=this.ownerDocument.createRange();return n.setStart(this,e),n.setEnd(this,t),o.addRange(n),this},Element.prototype.selectionLeftOffset=function(){const e=this.getComponentSelection();if(!e.containsNode(this,!0))return null;let t=e.anchorOffset,o=e.anchorNode;for(;o!==this;){for(;o.previousSibling;)o=o.previousSibling,t+=o.textContent.length;o=o.parentNodeOrShadowHost()}return t},Node.prototype.appendChildren=function(e){for(let e=0,t=arguments.length;e<t;++e)this.appendChild(arguments[e])},Node.prototype.deepTextContent=function(){return this.childTextNodes().map((function(e){return e.textContent})).join("")},Node.prototype.childTextNodes=function(){let e=this.traverseNextTextNode(this);const t=[],o={STYLE:1,SCRIPT:1};for(;e;)o[e.parentElement.nodeName]||t.push(e),e=e.traverseNextTextNode(this);return t},Node.prototype.isAncestor=function(e){if(!e)return!1;let t=e.parentNodeOrShadowHost();for(;t;){if(this===t)return!0;t=t.parentNodeOrShadowHost()}return!1},Node.prototype.isDescendant=function(e){return!!e&&e.isAncestor(this)},Node.prototype.isSelfOrAncestor=function(e){return!!e&&(e===this||this.isAncestor(e))},Node.prototype.isSelfOrDescendant=function(e){return!!e&&(e===this||this.isDescendant(e))},Node.prototype.traverseNextNode=function(e){if(this.shadowRoot)return this.shadowRoot;const t=this instanceof HTMLSlotElement?this.assignedNodes():[];if(t.length)return t[0];if(this.firstChild)return this.firstChild;let o=this;for(;o;){if(e&&o===e)return null;const t=n(o);if(t)return t;o=o.assignedSlot||o.parentNodeOrShadowHost()}function n(e){if(!e.assignedSlot)return e.nextSibling;const t=e.assignedSlot.assignedNodes(),o=Array.prototype.indexOf.call(t,e);return o+1<t.length?t[o+1]:null}return null},Node.prototype.traversePreviousNode=function(e){if(e&&this===e)return null;let t=this.previousSibling;for(;t&&t.lastChild;)t=t.lastChild;return t||this.parentNodeOrShadowHost()},Node.prototype.setTextContentTruncatedIfNeeded=function(e,t){return"string"==typeof e&&e.length>1e4?(this.textContent="string"==typeof t?t:e.trimMiddle(1e4),!0):(this.textContent=e,!1)},Event.prototype.deepElementFromPoint=function(){if(!(this.which||this.pageX||this.pageY||this.clientX||this.clientY||this.movementX||this.movementY))return null;const e=this.target&&this.target.getComponentRoot();return e?e.deepElementFromPoint(this.pageX,this.pageY):null},Document.prototype.deepElementFromPoint=function(e,t){let o=this,n=null;for(;o;){const r=o.elementFromPoint(e,t);if(!r||n===r)break;n=r,o=n.shadowRoot}return n},DocumentFragment.prototype.deepElementFromPoint=Document.prototype.deepElementFromPoint,Document.prototype.deepActiveElement=function(){let e=this.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e},DocumentFragment.prototype.deepActiveElement=Document.prototype.deepActiveElement,Element.prototype.hasFocus=function(){const e=this.getComponentRoot();return!!e&&this.isSelfOrAncestor(e.activeElement)},Node.prototype.getComponentRoot=function(){let e=this;for(;e&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&e.nodeType!==Node.DOCUMENT_NODE;)e=e.parentNode;return e},self.onInvokeElement=function(e,t){e.addEventListener("keydown",e=>{self.isEnterOrSpaceKey(e)&&t(e)}),e.addEventListener("click",e=>t(e))},self.isEnterKey=function(e){return 229!==e.keyCode&&"Enter"===e.key},self.isEnterOrSpaceKey=function(e){return self.isEnterKey(e)||" "===e.key},self.isEscKey=function(e){return 27===e.keyCode},function(){const e=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,o){return 1===arguments.length&&(o=!this.contains(t)),e.call(this,t,!!o)}}();export const originalAppendChild=Element.prototype.appendChild;export const originalInsertBefore=Element.prototype.insertBefore;export const originalRemoveChild=Element.prototype.removeChild;export const originalRemoveChildren=Element.prototype.removeChildren;Element.prototype.appendChild=function(e){if(e.__widget&&e.parentElement!==this)throw new Error("Attempt to add widget via regular DOM operation.");return originalAppendChild.call(this,e)},Element.prototype.insertBefore=function(e,t){if(e.__widget&&e.parentElement!==this)throw new Error("Attempt to add widget via regular DOM operation.");return originalInsertBefore.call(this,e,t)},Element.prototype.removeChild=function(e){if(e.__widgetCounter||e.__widget)throw new Error("Attempt to remove element containing widget via regular DOM operation");return originalRemoveChild.call(this,e)},Element.prototype.removeChildren=function(){if(this.__widgetCounter)throw new Error("Attempt to remove element containing widget via regular DOM operation");originalRemoveChildren.call(this)};