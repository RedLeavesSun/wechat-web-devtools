"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const watcher_1=require("../watcher"),cp=require("child_process"),fse=require("fs-extra"),anymatch=require("vscode-anymatch"),formatAnyMatchPath=t=>t.replace(/\\/g,"/").replace(/\/+/g,"/");class MSWatcherService extends watcher_1.WatcherService{constructor(t,e,s){super(t,e,s),this.root=t,this.config=e,this.extConfig=s,this._disposed=!1,this._retryTimes=0,this._ignorePatterns=[],this.generateIgnorePatterns()}generateIgnorePatterns(){const{ignored:t=[]}=this.extConfig;for(const e of t){if("string"!=typeof e)continue;const t=formatAnyMatchPath(e);this._ignorePatterns.push(t)}}get cp(){return this.ch}dispose(){this._disposed||(this._disposed=!0,this.ch&&(this.ch.kill(watcher_1.SIGTERM),this.ch=null),this.onClose())}onRootError(t){this.config.logger.e(t),this.dispose()}async startWatch(){if(this._disposed)return void this.config.logger.e("Already disposed");if(this.ch)return void this.config.logger.w("Already start watch @ pid",this.ch.pid);try{if(!await fse.pathExists(this.root))throw new Error("Cannot watch on non-exists "+this.root);if(!(await fse.lstat(this.root)).isDirectory())throw new Error("Cannot watch on non-directory "+this.root)}catch(t){return void this.onRootError(t)}const t=this.config,e=[this.root];t.verbose&&e.push("--verbose");const s=cp.spawn(t.msExePath,e);this.ch=s;const i=new watcher_1.LineDecoder;s.stdout.on("data",(t=>{const e=[];i.write(t).forEach((t=>{const s=t.split("|");if(2===s.length){const t=Number(s[0]),i=s[1];if(t>=0&&t<6){if(this.isIgnored(i))return void this.verbose("[msfilewatcher] ignored",i);e.push([t,i,Date.now()])}else this.verbose("[msfilewatcher]",s[1])}})),e.length>0&&this.processFileChange(e)})),s.on("error",(t=>this.onError(t))),s.stderr.on("data",(t=>this.onError(t))),s.on("exit",((t,e)=>this.onExit(t,e))),setTimeout((()=>{this.ch!==s||this._disposed||(this._retryTimes=0,this.onInitSuccess())}),400)}async processFileChange(t){const e=this.config;let s;for(const i of t){const r=i[0],o=i[1];let n,a;if(4!==r)try{n=await fse.stat(o)}catch(t){n=void 0}switch(r){case 3:a="addDir";break;case 2:a="add";break;case 1:case 0:a="change";break;case 4:a="unlink";break;case 5:a="unlinkDir";break;default:e.logger.w("Unrecognized MSFileChangeType",r);continue}const h=[{type:a,path:watcher_1.formatWindowsSlashes(o),stat:n,initialTs:i[2]||-1}];if("addDir"===a){const e=s||(s=t.map((t=>t[1])),s),r=o.includes("\\")?o+"\\":o+"/";if(!e.some((t=>t.startsWith(r)))){const t={};await watcher_1.$glob("**",{nodir:!1,nosort:!0,strict:!1,silent:!0,cwd:o,statCache:t,absolute:!0,mark:!0,dot:!0});for(const e in t){if(!e||!t[e]||this.isIgnored(e))continue;const s=t[e];h.push({path:watcher_1.formatWindowsSlashes(e),stat:s||void 0,type:s&&s.isDirectory()?"addDir":"add",initialTs:i[2]||-1})}}}h.forEach((t=>this.onChange(t)))}}isIgnored(t){if(!t)return!0;if(this._ignorePatterns.length<1)return!1;for(const e of this._ignorePatterns)if(anymatch(e,formatAnyMatchPath(t)))return!0;return!1}onExit(t,e){if(this._disposed)this.verbose("[msfilewatcher] cp killed because disposed");else if(this.ch){const s=this.config.logger;if(s.e(`[msfilewatcher] terminated unexpectedly (code: ${t}, signal: ${e})`),this._retryTimes<watcher_1.MAX_RESTARTS){s.w("[msfilewatcher] is restarted again...]");const t=watcher_1.timeoutForRetry(this._retryTimes++);this.config.logger.w("[msfilewatcher] cp exit unexpected. restart within",t),this.ch=null,setTimeout(this.startWatch.bind(this),t)}else s.e("[msfilewatcher] Watcher failed to start, give up.")}}}exports.MSWatcherService=MSWatcherService;