import*as Common from"../common/common.js";import*as UI from"../ui/ui.js";import{DeviceModeModel,MaxDeviceNameLength,UA}from"./DeviceModeModel.js";import{Capability,EmulatedDevice,EmulatedDevicesList,Events,Horizontal,Vertical}from"./EmulatedDevices.js";export class DevicesSettingsTab extends UI.Widget.VBox{constructor(){super(),this.element.classList.add("settings-tab-container"),this.element.classList.add("devices-settings-tab"),this.registerRequiredCSS("emulation/devicesSettingsTab.css");this.element.createChild("header").createChild("h1").createTextChild(ls`Emulated Devices`),this.containerElement=this.element.createChild("div","settings-container-wrapper").createChild("div","settings-tab settings-content settings-container");const e=this.containerElement.createChild("div","devices-button-row");this._addCustomButton=UI.UIUtils.createTextButton(Common.UIString.UIString("Add custom device..."),this._addCustomDevice.bind(this)),e.appendChild(this._addCustomButton),this._list=new UI.ListWidget.ListWidget(this,!1),this._list.registerRequiredCSS("emulation/devicesSettingsTab.css"),this._list.element.classList.add("devices-list"),this._list.show(this.containerElement),this._muteUpdate=!1,this._emulatedDevicesList=EmulatedDevicesList.instance(),this._emulatedDevicesList.addEventListener(Events.CustomDevicesUpdated,this._devicesUpdated,this),this._emulatedDevicesList.addEventListener(Events.StandardDevicesUpdated,this._devicesUpdated,this),this.setDefaultFocusedElement(this._addCustomButton)}wasShown(){super.wasShown(),this._devicesUpdated()}_devicesUpdated(){if(this._muteUpdate)return;this._list.clear();let e=this._emulatedDevicesList.custom().slice();for(let t=0;t<e.length;++t)this._list.appendItem(e[t],!0);this._list.appendSeparator(),e=this._emulatedDevicesList.standard().slice(),e.sort(EmulatedDevice.deviceComparator);for(let t=0;t<e.length;++t)this._list.appendItem(e[t],!1)}_muteAndSaveDeviceList(e){this._muteUpdate=!0,e?this._emulatedDevicesList.saveCustomDevices():this._emulatedDevicesList.saveStandardDevices(),this._muteUpdate=!1}_addCustomDevice(){const e=new EmulatedDevice;e.deviceScaleFactor=0,e.horizontal.width=700,e.horizontal.height=400,e.vertical.width=400,e.vertical.height=700,this._list.addNewItem(this._emulatedDevicesList.custom().length,e)}_toNumericInputValue(e){return e?String(e):""}renderItem(e,t){const i=e,s=document.createElement("label");s.classList.add("devices-list-item");const a=s.createChild("input","devices-list-checkbox");return a.type="checkbox",a.checked=i.show(),a.addEventListener("click",function(e){const s=a.checked;i.setShow(s),this._muteAndSaveDeviceList(t),e.consume()}.bind(this),!1),s.appendChild(document.createTextNode(i.title)),s}removeItemRequested(e,t){this._emulatedDevicesList.removeCustomDevice(e)}commitEdit(e,t,i){const s=e;s.title=t.control("title").value.trim(),s.vertical.width=t.control("width").value?parseInt(t.control("width").value,10):0,s.vertical.height=t.control("height").value?parseInt(t.control("height").value,10):0,s.horizontal.width=s.vertical.height,s.horizontal.height=s.vertical.width,s.deviceScaleFactor=t.control("scale").value?parseFloat(t.control("scale").value):0,s.userAgent=t.control("user-agent").value,s.modes=[],s.modes.push({title:"",orientation:Vertical,insets:new UI.Geometry.Insets(0,0,0,0),image:null}),s.modes.push({title:"",orientation:Horizontal,insets:new UI.Geometry.Insets(0,0,0,0),image:null}),s.capabilities=[];const a=t.control("ua-type").value;a!==UA.Mobile&&a!==UA.MobileNoTouch||s.capabilities.push(Capability.Mobile),a!==UA.Mobile&&a!==UA.DesktopTouch||s.capabilities.push(Capability.Touch),i?this._emulatedDevicesList.addCustomDevice(s):this._emulatedDevicesList.saveCustomDevices(),this._addCustomButton.scrollIntoViewIfNeeded(),this._addCustomButton.focus()}beginEdit(e){const t=e,i=this._createEditor();let s;return i.control("title").value=t.title,i.control("width").value=this._toNumericInputValue(t.vertical.width),i.control("height").value=this._toNumericInputValue(t.vertical.height),i.control("scale").value=this._toNumericInputValue(t.deviceScaleFactor),i.control("user-agent").value=t.userAgent,s=t.mobile()?t.touch()?UA.Mobile:UA.MobileNoTouch:t.touch()?UA.DesktopTouch:UA.Desktop,i.control("ua-type").value=s,i}_createEditor(){if(this._editor)return this._editor;const e=new UI.ListWidget.Editor;this._editor=e;const t=e.contentElement().createChild("div","devices-edit-fields");t.createChild("div","hbox").appendChild(e.createInput("title","text",ls`Device Name`,(function(e,t,i){let s,a=!1;const o=i.value.trim();o.length>=MaxDeviceNameLength?s=ls`Device name must be less than ${MaxDeviceNameLength} characters.`:0===o.length?s=ls`Device name cannot be empty.`:a=!0;return{valid:a,errorMessage:s}})));const i=t.createChild("div","hbox");i.appendChild(e.createInput("width","text",ls`Width`,(function(e,t,i){return DeviceModeModel.widthValidator(i.value)}))),i.appendChild(e.createInput("height","text",ls`Height`,(function(e,t,i){return DeviceModeModel.heightValidator(i.value)})));const s=e.createInput("scale","text",ls`Device pixel ratio`,(function(e,t,i){return DeviceModeModel.scaleValidator(i.value)}));s.classList.add("device-edit-fixed"),i.appendChild(s);const a=t.createChild("div","hbox");a.appendChild(e.createInput("user-agent","text",ls`User agent string`,()=>({valid:!0})));const o=[UA.Mobile,UA.MobileNoTouch,UA.Desktop,UA.DesktopTouch],c=e.createSelect("ua-type",o,()=>({valid:!0}),ls`User agent type`);return c.classList.add("device-edit-fixed"),a.appendChild(c),e}}