"use strict";require('../js/unpack/hackrequire/index.js');const e=require('../core.wxvpkg/d5412d2773b861711912958f9f5b10f7.js');global.isPlainTextEditor=!0;(()=>{if(function(){const o=require('../core.wxvpkg/28241807b29451e8d39d305e9396a62a.js');o.initGlobal(global,nw.Window.get()),o.preventDefault(document),global.CLI={isTestMode:!1,enableServicePort:!1,showFunction:null};const n=global.Win;if(global.windowMap.set("LOGIN",n),location.search){const o=e.getQuery(location.search);global.initQueries=o,global.runtimeId=o.runtimeid||"0",global.isDevWindow=!0;const n=location.search.match(/devtype=(.*?)(&|$)/);global.devType=null==n?void 0:n[1],global.devInfo.parentid=o.parentid,global.devInfo.id=o.devid,global.devInfo.appid=o.appid,global.devInfo.projectname=o.projectname,global.devInfo.projectpath=o.projectpath,global.devInfo.projectid=o.projectpath,global.devInfo.isTemp=Boolean(o.isTemp),global.devInfo.isOnline=Boolean(o.isOnline),global.devInfo.bgwsurl=o.bgwsurl,global.devInfo.bgwstoken=o.bgwstoken}const l=require('../core.wxvpkg/7d12ae50d85bc401a13e301dd162d17f.js'),t=require('../core.wxvpkg/2d2f4245b0815bbfd21d9d0b7a256f8d.js');l.init(),t.init(),global.onWindowClose(()=>{t.notifyCloseWindow()})}(),global.isDevWindow=!0,"win32"===process.platform&&"function"==typeof correctWindowPos&&correctWindowPos(),global.isDevWindow)!function(){const e=require('../core.wxvpkg/aec9a4aceafbe25f3dd79d7ded95016e.js');global.useStandaloneMenubar&&e.install()}();else{require('../core.wxvpkg/aec9a4aceafbe25f3dd79d7ded95016e.js').hideTitlebar()}const o=require('../core.wxvpkg/8b3f5263c799a5159018ed8a7e53a439.js');"complete"===global.contentDocument.readyState?o.launch():global.contentWindow.addEventListener("load",o.launch)})(),module.exports={};