import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import{CSSOverviewUnusedDeclarations}from"./CSSOverviewUnusedDeclarations.js";export class CSSOverviewModel extends SDK.SDKModel.SDKModel{constructor(e){super(e),this._runtimeAgent=e.runtimeAgent(),this._cssAgent=e.cssAgent(),this._domAgent=e.domAgent(),this._domSnapshotAgent=e.domsnapshotAgent(),this._overlayAgent=e.overlayAgent()}highlightNode(e){const t={contentColor:Common.Color.PageHighlight.Content.toProtocolRGBA(),showInfo:!0};this._overlayAgent.invoke_hideHighlight({}),this._overlayAgent.invoke_highlightNode({backendNodeId:e,highlightConfig:t})}async getNodeStyleStats(){const e=new Map,t=new Map,n=new Map,s=new Map,o=new Map,r=new Map,i=(e,t,n)=>{if(-1===e)return;const s=u[e];if(!s)return;const o=Common.Color.Color.parse(s);if(!o||0===o.rgba()[3])return;const r=o.hasAlpha()?o.asString(Common.Color.Format.HEXA):o.asString(Common.Color.Format.HEX),i=n.get(r)||new Set;i.add(t),n.set(r,i)},l=e=>new Set(["altglyph","circle","ellipse","path","polygon","polyline","rect","svg","text","textpath","tref","tspan"]).has(e.toLowerCase()),a=e=>new Set(["iframe","video","embed","img"]).has(e.toLowerCase()),c=(e,t)=>new Set(["tr","td","thead","tbody"]).has(e.toLowerCase())&&t.startsWith("table");let d=0;const{documents:h,strings:u}=await this._domSnapshotAgent.invoke_captureSnapshot({computedStyles:["background-color","color","fill","border-top-width","border-top-color","border-bottom-width","border-bottom-color","border-left-width","border-left-color","border-right-width","border-right-color","font-family","font-size","font-weight","line-height","position","top","right","bottom","left","display","width","height","vertical-align"]});for(const{nodes:g,layout:p}of h){d+=p.nodeIndex.length;for(let d=0;d<p.styles.length;d++){const h=p.styles[d],S=p.nodeIndex[d],f=g.backendNodeId[S],m=g.nodeName[S],[w,y,C,v,b,A,M,x,D,k,_,N,K,O,z,I,U,F,W,E,H,j,G,R]=h;if(i(w,f,e),i(y,f,t),l(u[m])&&i(C,f,n),"0px"!==u[v]&&i(b,f,s),"0px"!==u[A]&&i(M,f,s),"0px"!==u[x]&&i(D,f,s),"0px"!==u[k]&&i(_,f,s),N&&-1!==N){const e=u[N],t=o.get(e)||new Map,n="font-size",s="font-weight",r="line-height",i=t.get(n)||new Map,l=t.get(s)||new Map,a=t.get(r)||new Map;if(-1!==K){const e=u[K],t=i.get(e)||[];t.push(f),i.set(e,t)}if(-1!==O){const e=u[O],t=l.get(e)||[];t.push(f),l.set(e,t)}if(-1!==z){const e=u[z],t=a.get(e)||[];t.push(f),a.set(e,t)}t.set(n,i),t.set(s,l),t.set(r,a),o.set(e,t)}CSSOverviewUnusedDeclarations.checkForUnusedPositionValues(r,f,u,I,U,E,F,W),l(u[m])||a(u[m])||CSSOverviewUnusedDeclarations.checkForUnusedWidthAndHeightValues(r,f,u,H,j,G),-1===R||c(u[m],u[H])||CSSOverviewUnusedDeclarations.checkForInvalidVerticalAlignment(r,f,u,H,R)}}return{backgroundColors:e,textColors:t,fillColors:n,borderColors:s,fontInfo:o,unusedDeclarations:r,elementCount:d}}getComputedStyleForNode(e){return this._cssAgent.getComputedStyleForNode(e)}async getMediaQueries(){const e=await this._cssAgent.getMediaQueries(),t=new Map;if(!e)return t;for(const n of e){if("linkedSheet"===n.source)continue;const e=t.get(n.text)||[];e.push(n),t.set(n.text,e)}return t}async getGlobalStylesheetStats(){const{result:e}=await this._runtimeAgent.invoke_evaluate({expression:"(function() {\n      let styleRules = 0;\n      let inlineStyles = 0;\n      let externalSheets = 0;\n      const stats = {\n        // Simple.\n        type: new Set(),\n        class: new Set(),\n        id: new Set(),\n        universal: new Set(),\n        attribute: new Set(),\n\n        // Non-simple.\n        nonSimple: new Set()\n      };\n\n      for (const styleSheet of document.styleSheets) {\n        if (styleSheet.href) {\n          externalSheets++;\n        } else {\n          inlineStyles++;\n        }\n\n        // Attempting to grab rules can trigger a DOMException.\n        // Try it and if it fails skip to the next stylesheet.\n        let rules;\n        try {\n          rules = styleSheet.rules;\n        } catch (err) {\n          continue;\n        }\n\n        for (const rule of rules) {\n          if ('selectorText' in rule) {\n            styleRules++;\n\n            // Each group that was used.\n            for (const selectorGroup of rule.selectorText.split(',')) {\n              // Each selector in the group.\n              for (const selector of selectorGroup.split(/[\\t\\n\\f\\r ]+/g)) {\n                if (selector.startsWith('.')) {\n                  // Class.\n                  stats.class.add(selector);\n                } else if (selector.startsWith('#')) {\n                  // Id.\n                  stats.id.add(selector);\n                } else if (selector.startsWith('*')) {\n                  // Universal.\n                  stats.universal.add(selector);\n                } else if (selector.startsWith('[')) {\n                  // Attribute.\n                  stats.attribute.add(selector);\n                } else {\n                  // Type or non-simple selector.\n                  const specialChars = /[#.:\\[\\]|\\+>~]/;\n                  if (specialChars.test(selector)) {\n                    stats.nonSimple.add(selector);\n                  } else {\n                    stats.type.add(selector);\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n\n      return {\n        styleRules,\n        inlineStyles,\n        externalSheets,\n        stats: {\n          // Simple.\n          type: stats.type.size,\n          class: stats.class.size,\n          id: stats.id.size,\n          universal: stats.universal.size,\n          attribute: stats.attribute.size,\n\n          // Non-simple.\n          nonSimple: stats.nonSimple.size\n        }\n      }\n    })()",returnByValue:!0});if("object"===e.type)return e.value}}SDK.SDKModel.SDKModel.register(CSSOverviewModel,SDK.SDKModel.Capability.DOM,!1);