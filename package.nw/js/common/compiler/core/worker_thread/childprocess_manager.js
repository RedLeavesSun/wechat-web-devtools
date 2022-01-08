"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.childProcessManager=void 0;const tslib_1=require("tslib"),path_1=(0,tslib_1.__importDefault)(require("path")),child_process_1=require("child_process"),config_1=require("./config"),events_1=(0,tslib_1.__importDefault)(require("events")),log_1=(0,tslib_1.__importDefault)(require("../../utils/log")),os=(0,tslib_1.__importStar)(require("os")),logger_1=require("../utils/logger"),cpus=os.cpus().length,FORK_PATH=path_1.default.posix.join(__dirname,"./childprocess.js"),MAX_TASK_TRY_TIME=2;class ChildProcessInstance extends events_1.default{constructor(s){super(),this.status=config_1.EChildProcessStatus.free,this._lastActiveTime=0,this._taskMap={},this._fullload_task_count=4,this._suicideTime=config_1.SUICIDE_TIME["miniprogram-ci"],this._fullload_task_count=s;const e={stdio:["pipe","pipe","pipe","ipc"],env:Object.assign(Object.assign({},process.env),{cpprocessEnv:"childprocess"})};if(e.env.isDevtools=process.__nwjs&&"wechatwebdevtools"===nw.App.manifest.appname,e.env.isDevtools){this._suicideTime=config_1.SUICIDE_TIME.devtools;let s=path_1.default.join(path_1.default.dirname(process.execPath),"node");"darwin"!==process.platform&&(s+=".exe"),e.execPath=s}logger_1.logger.info("fork childprocess start");const t=(0,child_process_1.fork)(FORK_PATH,["--expose-gc"],e);t.stdout.setEncoding("utf8"),logger_1.logger.info("fork childprocess end"),t.stdout.on("data",s=>{log_1.default.log("child process stdout: "+s)}),t.stderr.on("data",s=>{log_1.default.error("child process stderr: "+s)}),t.on("message",this.onChildProcessMessage.bind(this,t)),t.on("exit",s=>{this.emit("exit",{code:s,status:this.status,tasks:Object.values(this._taskMap),pid:t.pid})}),t.unref(),this._instance=t}onChildProcessMessage(s,e){if("object"!=typeof e)return void logger_1.logger.error("unrecognized message from child process",e);const{command:t,data:i}=e;t!==config_1.COMMAND.SEND_LOG?(logger_1.logger.info("onChildProcessMessage "+t,i),t===config_1.COMMAND.TASK_DONE?this.onTaskDone(i):t===config_1.COMMAND.SEND_LOG&&logger_1.logger.send(i.level,i.args)):logger_1.logger.send(i.level,i.args)}onTaskDone(s){const{taskId:e,result:t}=s,i=this._taskMap[e];delete this._taskMap[e],i?(i.resolve&&(i.onStatusUpdate(config_1.ETaskStatus.done),i.resolve(t)),0===Object.keys(this._taskMap).length&&(this.status=config_1.EChildProcessStatus.free,this.setUpSuicideTimer()),this.emit("taskDone")):log_1.default.error(`child process task: ${e} not found`)}setUpSuicideTimer(){this._suicideTimer=setTimeout(()=>{clearTimeout(this._suicideTimer),this.status===config_1.EChildProcessStatus.free?(this.status=config_1.EChildProcessStatus.dying,this._instance.kill("SIGTERM")):this._suicideTimer||this.setUpSuicideTimer()},this._suicideTime)}runTask(s){clearTimeout(this._suicideTimer),this.status=config_1.EChildProcessStatus.busy,this._lastActiveTime=Date.now();const e=getId();this._taskMap[e]=s,Object.keys(this._taskMap).length>=this._fullload_task_count?this.status=config_1.EChildProcessStatus.fullload:this.status=config_1.EChildProcessStatus.busy,s.onStatusUpdate(config_1.ETaskStatus.progress),this._instance.send({command:config_1.COMMAND.RUN_TASK,data:{taskId:e,taskName:s.name,data:s.data}})}}const getId=(()=>{let s=0;return()=>s++})();class TaskManager{constructor(){this._taskQueue=[],this.onChildProcessExit=s=>{const{code:e,status:t,tasks:i,pid:o}=s;if(this._instance=void 0,t===config_1.EChildProcessStatus.busy||t===config_1.EChildProcessStatus.fullload)for(const s of i)s.retryTimes+=1,s.retryTimes<=2?(log_1.default.error(`child process: ${o} exit with code: ${e} when it is busy, retry ${s.retryTimes} times`),this._taskQueue.push(s)):s.reject(`child process exit with code: ${e} when it is busy`);this._run()},this.onTaskDone=()=>{this._run()}}runTask(s,e,t=(()=>{})){return new Promise((i,o)=>{const r={name:s,data:e,resolve:i,reject:o,retryTimes:0,onStatusUpdate:t};t(config_1.ETaskStatus.waiting),this._taskQueue.push(r),this._run()})}_run(){if(0===this._taskQueue.length)return;const s=this.allocChildProcess();s.status!==config_1.EChildProcessStatus.fullload&&s.status!==config_1.EChildProcessStatus.dying&&(s.runTask(this._taskQueue.shift()),this._run())}allocChildProcess(){return this._instance||(this._instance=new ChildProcessInstance(2*cpus),this._instance.on("exit",this.onChildProcessExit),this._instance.on("taskDone",this.onTaskDone)),this._instance}}exports.childProcessManager=new TaskManager;