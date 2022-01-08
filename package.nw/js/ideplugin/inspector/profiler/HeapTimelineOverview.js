import*as PerfUI from"../perf_ui/perf_ui.js";import*as Platform from"../platform/platform.js";import*as UI from"../ui/ui.js";export class HeapTimelineOverview extends UI.Widget.VBox{constructor(){super(),this.element.id="heap-recording-view",this.element.classList.add("heap-tracking-overview"),this._overviewCalculator=new OverviewCalculator,this._overviewContainer=this.element.createChild("div","heap-overview-container"),this._overviewGrid=new PerfUI.OverviewGrid.OverviewGrid("heap-recording",this._overviewCalculator),this._overviewGrid.element.classList.add("fill"),this._overviewCanvas=this._overviewContainer.createChild("canvas","heap-recording-overview-canvas"),this._overviewContainer.appendChild(this._overviewGrid.element),this._overviewGrid.addEventListener(PerfUI.OverviewGrid.Events.WindowChanged,this._onWindowChanged,this),this._windowLeft=0,this._windowRight=1,this._overviewGrid.setWindow(this._windowLeft,this._windowRight),this._yScale=new SmoothScale,this._xScale=new SmoothScale,this._profileSamples=new Samples}start(){this._running=!0;const e=()=>{this.update(),this._running&&this.element.window().requestAnimationFrame(e)};e()}stop(){this._running=!1}setSamples(e){this._profileSamples=e,this._running||this.update()}_drawOverviewCanvas(e,i){if(!this._profileSamples)return;const t=this._profileSamples,s=t.sizes,a=t.max,o=t.timestamps,r=o[0],n=this._xScale.nextScale(e/t.totalTime);let h=0;function l(e,i){let t=0,s=0;for(let a=1;a<o.length;++a){const h=Math.floor((o[a]-r)*n);h!==s&&(t&&i(s,t),t=0,s=h),t+=e[a]}i(s,t)}l(s,(function(e,i){h=Math.max(h,i)}));const d=this._yScale.nextScale(h?i/(1.1*h):0);this._overviewCanvas.width=e*window.devicePixelRatio,this._overviewCanvas.height=i*window.devicePixelRatio,this._overviewCanvas.style.width=e+"px",this._overviewCanvas.style.height=i+"px";const m=this._overviewCanvas.getContext("2d");if(m.scale(window.devicePixelRatio,window.devicePixelRatio),this._running){m.beginPath(),m.lineWidth=2,m.strokeStyle="rgba(192, 192, 192, 0.6)";const e=(Date.now()-r)*n;m.moveTo(e,i-1),m.lineTo(e,0),m.stroke(),m.closePath()}let u,v;if(d){const t=(i-14)/d;v=Math.pow(1024,Math.floor(Math.log(t)/Math.log(1024))),v*=Math.pow(10,Math.floor(Math.log(t/v)/Math.LN10)),5*v<=t&&(v*=5),u=Math.round(i-v*d-.5)+.5,m.beginPath(),m.lineWidth=1,m.strokeStyle="rgba(0, 0, 0, 0.2)",m.moveTo(0,u),m.lineTo(e,u),m.stroke(),m.closePath()}function w(e,t){m.moveTo(e,i-1),m.lineTo(e,Math.round(i-t*d-1))}if(m.beginPath(),m.lineWidth=2,m.strokeStyle="rgba(192, 192, 192, 0.6)",l(a,w),m.stroke(),m.closePath(),m.beginPath(),m.lineWidth=2,m.strokeStyle="rgba(0, 0, 192, 0.8)",l(s,w),m.stroke(),m.closePath(),v){const e=Platform.NumberUtilities.bytesToString(v),i=4,t=0,s=u-.5,a=2*i+m.measureText(e).width;m.beginPath(),m.textBaseline="bottom",m.font="10px "+window.getComputedStyle(this.element,null).getPropertyValue("font-family"),m.fillStyle="rgba(255, 255, 255, 0.75)",m.fillRect(t,s-14,a,14),m.fillStyle="rgb(64, 64, 64)",m.fillText(e,t+i,s),m.fill(),m.closePath()}}onResize(){this._updateOverviewCanvas=!0,this._scheduleUpdate()}_onWindowChanged(){this._updateGridTimerId||(this._updateGridTimerId=setTimeout(this.updateGrid.bind(this),10))}_scheduleUpdate(){this._updateTimerId||(this._updateTimerId=setTimeout(this.update.bind(this),10))}_updateBoundaries(){this._windowLeft=this._overviewGrid.windowLeft(),this._windowRight=this._overviewGrid.windowRight(),this._windowWidth=this._windowRight-this._windowLeft}update(){this._updateTimerId=null,this.isShowing()&&(this._updateBoundaries(),this._overviewCalculator._updateBoundaries(this),this._overviewGrid.updateDividers(this._overviewCalculator),this._drawOverviewCanvas(this._overviewContainer.clientWidth,this._overviewContainer.clientHeight-20))}updateGrid(){this._updateGridTimerId=0,this._updateBoundaries();const e=this._profileSamples.ids;if(!e.length)return;const i=this._profileSamples.timestamps,t=this._profileSamples.sizes,s=i[0],a=this._profileSamples.totalTime,o=s+a*this._windowLeft,r=s+a*this._windowRight,n=i.lowerBound(o),h=i.upperBound(r);let l=0;for(let e=n;e<=h;++e)l+=t[e];const d=n>0?e[n-1]:0,m=h<e.length?e[h]:1/0;this.dispatchEventToListeners(IdsRangeChanged,{minId:d,maxId:m,size:l})}}export const IdsRangeChanged=Symbol("IdsRangeChanged");export class SmoothScale{constructor(){this._lastUpdate=0,this._currentScale=0}nextScale(e){if(e=e||this._currentScale,this._currentScale){const i=Date.now(),t=i-this._lastUpdate;this._lastUpdate=i;const s=20,a=Math.pow(s,t/1e3),o=e/this._currentScale;this._currentScale*=Platform.NumberUtilities.clamp(o,1/a,a)}else this._currentScale=e;return this._currentScale}}export class Samples{constructor(){this.sizes=[],this.ids=[],this.timestamps=[],this.max=[],this.totalTime=3e4}}export class OverviewCalculator{_updateBoundaries(e){this._minimumBoundaries=0,this._maximumBoundaries=e._profileSamples.totalTime,this._xScaleFactor=e._overviewContainer.clientWidth/this._maximumBoundaries}computePosition(e){return(e-this._minimumBoundaries)*this._xScaleFactor}formatValue(e,i){return Number.secondsToString(e/1e3,!!i)}maximumBoundary(){return this._maximumBoundaries}minimumBoundary(){return this._minimumBoundaries}zeroTime(){return this._minimumBoundaries}boundarySpan(){return this._maximumBoundaries-this._minimumBoundaries}}