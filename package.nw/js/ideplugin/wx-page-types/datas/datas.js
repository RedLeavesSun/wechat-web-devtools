"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WxmlTagDatas = void 0;
exports.WxmlTagDatas = {
    "version": 1.1,
    "tags": [
        {
            "name": "ad-custom",
            "description": "\n(基础库 2.10.4+)\n\n原生模板 广告。\n\n",
            "attributes": [
                {
                    "name": "unit-id",
                    "description": "*(string)*\n广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com)的流量主模块新建",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html"
                        }
                    ]
                },
                {
                    "name": "ad-intervals",
                    "description": "*(number)*\n广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 模板 广告不会自动刷新）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html"
                        }
                    ]
                },
                {
                    "name": "bindload",
                    "description": "*(eventhandle)*\n广告加载成功的回调",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n广告加载失败的回调，event.detail = {errCode: 1002}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html"
                }
            ]
        },
        {
            "name": "ad",
            "description": "\n(基础库 1.9.94+)\n\nBanner 广告。\n\n",
            "attributes": [
                {
                    "name": "unit-id",
                    "description": "*(string)*\n广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com)的流量主模块新建",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
                        }
                    ]
                },
                {
                    "name": "ad-intervals",
                    "description": "*(number)*\n广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
                        }
                    ]
                },
                {
                    "name": "bindload",
                    "description": "*(eventhandle)*\n广告加载成功的回调",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n广告加载失败的回调，event.detail = {errCode: 1002}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
                        }
                    ]
                },
                {
                    "name": "bindclose",
                    "description": "*(eventhandle)*\n广告关闭的回调",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"
                }
            ]
        },
        {
            "name": "aria-component",
            "description": "\n## 无障碍访问\n\n为了更好地满足视障人士对于小程序的访问需求，基础库自2.7.1起，支持部分ARIA标签。\n\n无障碍特性在读屏模式下可以访问，iOS可通过设置->通用->辅助功能->旁白打开。\n\n以 [view]((view)) 组件为例，开发者可以增加`aria-role`和`aria-label`属性。\n其中`aria-role`表示组件的角色，当设置为'img'时，读屏模式下聚焦后系统会朗读出'图像'。设置为'button'时，聚焦后后系统朗读出'按钮'。\n`aria-label`表示组件附带的额外信息，聚焦后系统会自动朗读出来。\n\n小程序已经内置了一些无障碍的特性，对于非原生组件，开发者可以添加以下无障碍标签。\n\n|                      |                 |               |                 |                 |\n| -------------------- | --------------- | ------------- | --------------- | --------------- |\n| aria-hidden          | aria-role       | aria-label    | aria-checked    | aria-disabled   |\n| aria-describedby     | aria-expanded   | aria-haspopup | aria-selected   | aria-required   |\n| aria-orientation     | aria-valuemin   | aria-valuemax | aria-valuenow   | aria-readonly   |\n| aria-multiselectable | aria-controls   | tabindex      | aria-labelledby | ria-orientation |\n| aia-multiselectable  | aria-labelledby |               |                 |\n\n## 示例代码\n\n```html\n<view aria-role=\"button\"  aria-label=\"提交表单\">提交</view>\n```\n\n#### Tips\n1. 安卓和iOS读屏模式下设置`aria-role`后朗读的内容不同系统之间会有差异\n2. 可设置的`aria-role`可参看 [Using Aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)中的`Widget Roles`，部分role的设置在移动端可能无效。\n\n\n",
            "attributes": [],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/aria-component.html"
                }
            ]
        },
        {
            "name": "audio",
            "description": "\n(基础库 1.0.0+)\n\n音频。{% version('1.6.0') %}版本开始，该组件不再维护。建议使用能力更强的 [wx.createInnerAudioContext]((wx.createInnerAudioContext)) 接口\n\n",
            "attributes": [
                {
                    "name": "id",
                    "description": "*(string)*\naudio 组件的唯一标识符",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "src",
                    "description": "*(string)*\n要播放音频的资源地址",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "loop",
                    "description": "*(boolean)*\n是否循环播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "controls",
                    "description": "*(boolean)*\n是否显示默认控件",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "poster",
                    "description": "*(string)*\n默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "name",
                    "description": "*(string)*\n默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "author",
                    "description": "*(string)*\n默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n当发生错误时触发 error 事件，detail = {errMsg:MediaError.code}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "bindplay",
                    "description": "*(eventhandle)*\n当开始/继续播放时触发play事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "bindpause",
                    "description": "*(eventhandle)*\n当暂停播放时触发 pause 事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "bindtimeupdate",
                    "description": "*(eventhandle)*\n当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                },
                {
                    "name": "bindended",
                    "description": "*(eventhandle)*\n当播放到末尾时触发 ended 事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"
                }
            ]
        },
        {
            "name": "button",
            "description": "\n(基础库 1.0.0+)\n\n按钮。\n\n",
            "attributes": [
                {
                    "name": "size",
                    "description": "*(string)*\n按钮的大小",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "default",
                            "description": "默认大小",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "mini",
                            "description": "小尺寸",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "type",
                    "description": "*(string)*\n按钮的样式类型",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "primary",
                            "description": "绿色",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "default",
                            "description": "白色",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "warn",
                            "description": "红色",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "plain",
                    "description": "*(boolean)*\n按钮是否镂空，背景色透明",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "loading",
                    "description": "*(boolean)*\n名称前是否带 loading 图标",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "form-type",
                    "description": "*(string)*\n用于 [form]((form)) 组件，点击分别会触发 [form]((form)) 组件的 submit/reset 事件",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "submit",
                            "description": "提交表单",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "reset",
                            "description": "重置表单",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "open-type",
                    "description": "*(string)*\n微信开放能力",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "contact",
                            "description": "打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，[具体说明]((customer-message))",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "share",
                            "description": "触发用户转发，使用前建议先阅读[使用指引]((share#使用指引))",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "getPhoneNumber",
                            "description": "获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，[具体说明]((getPhoneNumber))",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "getUserInfo",
                            "description": "获取用户信息，可以从bindgetuserinfo回调中获取到用户信息",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "launchApp",
                            "description": "打开APP，可以通过app-parameter属性设定向APP传的参数[具体说明]((launchApp))",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "openSetting",
                            "description": "打开授权设置页",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "feedback",
                            "description": "打开“意见反馈”页面，用户可提交反馈内容并上传[日志]((wx.getLogManager))，开发者可以登录[小程序管理后台](https://mp.weixin.qq.com/)后进入左侧菜单“客服反馈”页面获取到反馈内容",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "hover-class",
                    "description": "*(string)*\n指定按钮按下去的样式类。当 `hover-class=\"none\"` 时，没有点击态效果",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "hover-stop-propagation",
                    "description": "*(boolean)*\n指定是否阻止本节点的祖先节点出现点击态",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "hover-start-time",
                    "description": "*(number)*\n按住后多久出现点击态，单位毫秒",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "hover-stay-time",
                    "description": "*(number)*\n手指松开后点击态保留时间，单位毫秒",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "lang",
                    "description": "*(string)*\n指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "en",
                            "description": "英文",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "zh_CN",
                            "description": "简体中文",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        },
                        {
                            "name": "zh_TW",
                            "description": "繁体中文",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "session-from",
                    "description": "*(string)*\n会话来源，open-type=\"contact\"时有效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "send-message-title",
                    "description": "*(string)*\n会话内消息卡片标题，open-type=\"contact\"时有效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "send-message-path",
                    "description": "*(string)*\n会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "send-message-img",
                    "description": "*(string)*\n会话内消息卡片图片，open-type=\"contact\"时有效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "app-parameter",
                    "description": "*(string)*\n打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "show-message-card",
                    "description": "*(boolean)*\n是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "bindgetuserinfo",
                    "description": "*(eventhandle)*\n用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与[wx.getUserInfo]((wx.getUserInfo))返回的一致，open-type=\"getUserInfo\"时有效",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "bindcontact",
                    "description": "*(eventhandle)*\n客服消息回调，open-type=\"contact\"时有效",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "bindgetphonenumber",
                    "description": "*(eventhandle)*\n获取用户手机号回调，open-type=getPhoneNumber时有效",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n当使用开放能力时，发生错误的回调，open-type=launchApp时有效",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "bindopensetting",
                    "description": "*(eventhandle)*\n在打开授权设置页后回调，open-type=openSetting时有效",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                },
                {
                    "name": "bindlaunchapp",
                    "description": "*(eventhandle)*\n打开 APP 成功的回调，open-type=launchApp时有效",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/button.html"
                }
            ]
        },
        {
            "name": "camera",
            "description": "\n(基础库 1.6.0+)\n\n系统相机。扫码二维码功能，需升级微信客户端至6.7.3。需要[用户授权]((open-ability/authorize)) `scope.camera`。\n{%version('2.10.0')%}起 initdone 事件返回 maxZoom，最大变焦范围，相关接口 [CameraContext.setZoom]((CameraContext.setZoom))。\n\n相关api：[wx.createCameraContext]((wx.createCameraContext))\n\n",
            "attributes": [
                {
                    "name": "mode",
                    "description": "*(string)*\n应用模式，只在初始化时有效，不能动态变更",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "normal",
                            "description": "相机模式",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "scanCode",
                            "description": "扫码模式",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "resolution",
                    "description": "*(string)*\n分辨率，不支持动态修改",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "low",
                            "description": "低",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "medium",
                            "description": "中",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "high",
                            "description": "高",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "device-position",
                    "description": "*(string)*\n摄像头朝向",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "front",
                            "description": "前置",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "back",
                            "description": "后置",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "flash",
                    "description": "*(string)*\n闪光灯，值为auto, on, off",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "auto",
                            "description": "自动",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "on",
                            "description": "打开",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "off",
                            "description": "关闭",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "torch",
                            "description": "常亮",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "frame-size",
                    "description": "*(string)*\n指定期望的相机帧数据尺寸",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "small",
                            "description": "小尺寸帧数据",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "medium",
                            "description": "中尺寸帧数据",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        },
                        {
                            "name": "large",
                            "description": "大尺寸帧数据",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "bindstop",
                    "description": "*(eventhandle)*\n摄像头在非正常终止时触发，如退出后台等情况",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n用户不允许使用摄像头时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ]
                },
                {
                    "name": "bindinitdone",
                    "description": "*(eventhandle)*\n相机初始化完成时触发，`e.detail = {maxZoom}`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ]
                },
                {
                    "name": "bindscancode",
                    "description": "*(eventhandle)*\n在扫码识别成功时触发，仅在 mode=\"scanCode\" 时生效",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"
                }
            ]
        },
        {
            "name": "canvas",
            "description": "\n(基础库 1.0.0+)\n\n画布。2.9.0 起支持一套新 Canvas 2D 接口（需指定 type 属性），同时支持[同层渲染]((native-component#原生组件同层渲染))，原有接口不再维护。相关api：[获取 canvas 实例]((api/canvas/Canvas))。\n\n",
            "attributes": [
                {
                    "name": "type",
                    "description": "*(string)*\n指定 canvas 类型，支持 2d (2.9.0) 和 webgl (2.7.0)",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "canvas-id",
                    "description": "*(string)*\ncanvas 组件的唯一标识符，若指定了 type 则无需再指定该属性",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "disable-scroll",
                    "description": "*(boolean)*\n当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "bindtouchstart",
                    "description": "*(eventhandle)*\n手指触摸动作开始",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "bindtouchmove",
                    "description": "*(eventhandle)*\n手指触摸后移动",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "bindtouchend",
                    "description": "*(eventhandle)*\n手指触摸动作结束",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "bindtouchcancel",
                    "description": "*(eventhandle)*\n手指触摸动作被打断，如来电提醒，弹窗",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "bindlongtap",
                    "description": "*(eventhandle)*\n手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n当发生错误时触发 error 事件，detail = {errMsg}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"
                }
            ]
        },
        {
            "name": "checkbox-group",
            "description": "\n(基础库 1.0.0+)\n\n多项选择器，内部由多个[checkbox]((checkbox))组成。\n\n",
            "attributes": [
                {
                    "name": "bindchange",
                    "description": "*(EventHandle)*\n[checkbox-group]((checkbox-group))中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}",
                    "attrType": "EventHandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html"
                }
            ]
        },
        {
            "name": "checkbox",
            "description": "\n(基础库 1.0.0+)\n\n多选项目。\n\n",
            "attributes": [
                {
                    "name": "value",
                    "description": "*(string)*\n[checkbox]((checkbox))标识，选中时触发[checkbox-group]((checkbox-group))的 change 事件，并携带 [checkbox]((checkbox)) 的 value",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
                        }
                    ]
                },
                {
                    "name": "checked",
                    "description": "*(boolean)*\n当前是否选中，可用来设置默认选中",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
                        }
                    ]
                },
                {
                    "name": "color",
                    "description": "*(string)*\ncheckbox的颜色，同css的color",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"
                }
            ]
        },
        {
            "name": "cover-image",
            "description": "\n(基础库 1.4.0+)\n\n覆盖在原生组件之上的图片视图。可覆盖的原生组件同[cover-view]((cover-view))，支持嵌套在[cover-view]((cover-view))里。\n\n",
            "attributes": [
                {
                    "name": "src",
                    "description": "*(string)*\n图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"
                        }
                    ]
                },
                {
                    "name": "bindload",
                    "description": "*(eventhandle)*\n图片加载成功时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n图片加载失败时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"
                }
            ]
        },
        {
            "name": "cover-view",
            "description": "\n(基础库 1.4.0+)\n\n覆盖在原生组件之上的文本视图。\n\n可覆盖的原生组件包括 [map]((map))、[video]((video))、[canvas]((canvas))、[camera]((camera))、[live-player]((live-player))、[live-pusher]((live-pusher))\n\n只支持嵌套 [cover-view]((cover-view))、[cover-image]((cover-image))，可在 [cover-view]((cover-view)) 中使用 [button]((button))。组件属性的长度单位默认为px，{%version('2.4.0')%}起支持传入单位(rpx/px)。\n\n",
            "attributes": [
                {
                    "name": "scroll-top",
                    "description": "*(number/string)*\n设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html"
                }
            ]
        },
        {
            "name": "editor",
            "description": "\n(基础库 2.7.0+)\n\n富文本编辑器，可以对图片、文字进行编辑。\n\n编辑器导出内容支持带标签的 `html`和纯文本的 `text`，编辑器内部采用 `delta` 格式进行存储。\n\n通过`setContents`接口设置内容时，解析插入的 `html` 可能会由于一些非法标签导致解析错误，建议开发者在小程序内使用时通过 delta 进行插入。\n\n富文本组件内部引入了一些基本的样式使得内容可以正确的展示，开发时可以进行覆盖。需要注意的是，在其它组件或环境中使用富文本组件导出的html时，需要额外引入 <a :href=\"require('../resource/editor.zip')\">这段样式</a>，并维护`<ql-container><ql-editor></ql-editor></ql-container>`的结构。\n\n图片控件仅初始化时设置有效。\n\n相关 api：[EditorContext]((EditorContext))\n\n",
            "attributes": [
                {
                    "name": "read-only",
                    "description": "*(boolean)*\n设置编辑器为只读",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "placeholder",
                    "description": "*(string)*\n提示信息",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "show-img-size",
                    "description": "*(boolean)*\n点击图片时显示图片大小控件",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "show-img-toolbar",
                    "description": "*(boolean)*\n点击图片时显示工具栏控件",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "show-img-resize",
                    "description": "*(boolean)*\n点击图片时显示修改尺寸控件",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "bindready",
                    "description": "*(eventhandle)*\n编辑器初始化完成时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "bindfocus",
                    "description": "*(eventhandle)*\n编辑器聚焦时触发，event.detail = {html, text, delta}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "bindblur",
                    "description": "*(eventhandle)*\n编辑器失去焦点时触发，detail = {html, text, delta}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "bindinput",
                    "description": "*(eventhandle)*\n编辑器内容改变时触发，detail = {html, text, delta}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                },
                {
                    "name": "bindstatuschange",
                    "description": "*(eventhandle)*\n通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"
                }
            ]
        },
        {
            "name": "form",
            "description": "\n(基础库 1.0.0+)\n\n表单。将组件内的用户输入的[switch]((switch)) [input]((input)) [checkbox]((checkbox)) [slider]((slider)) [radio]((radio)) [picker]((picker)) 提交。\n\n当点击 [form]((form)) 表单中 form-type 为 submit 的 [button]((button)) 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。\n\n",
            "attributes": [
                {
                    "name": "report-submit",
                    "description": "*(boolean)*\n是否返回 formId 用于发送[模板消息]((open-ability/template-message))",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
                        }
                    ]
                },
                {
                    "name": "report-submit-timeout",
                    "description": "*(number)*\n等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
                        }
                    ]
                },
                {
                    "name": "bindsubmit",
                    "description": "*(eventhandle)*\n携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
                        }
                    ]
                },
                {
                    "name": "bindreset",
                    "description": "*(eventhandle)*\n表单重置时会触发 reset 事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/form.html"
                }
            ]
        },
        {
            "name": "functional-page-navigator",
            "description": "\n(基础库 2.1.0+)\n\n仅在插件中有效，用于跳转到插件功能页。\n\n",
            "attributes": [
                {
                    "name": "version",
                    "description": "*(string)*\n跳转到的小程序版本，**线上版本必须设置为 release**",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "develop",
                            "description": "开发版",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "trial",
                            "description": "体验版",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "release",
                            "description": "正式版",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "name",
                    "description": "*(string)*\n要跳转到的功能页",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "loginAndGetUserInfo",
                            "description": "[用户信息功能页](../framework/plugin/functional-pages/user-info.md)",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "requestPayment",
                            "description": "[支付功能页](../framework/plugin/functional-pages/request-payment.md)",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "chooseAddress",
                            "description": "[收货地址功能页](../framework/plugin/functional-pages/choose-address.md)",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "args",
                    "description": "*(object)*\n功能页参数，参数格式与具体功能页相关",
                    "attrType": "object",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                        }
                    ]
                },
                {
                    "name": "bindsuccess",
                    "description": "*(eventhandler)*\n功能页返回，且操作成功时触发， detail 格式与具体功能页相关",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                        }
                    ]
                },
                {
                    "name": "bindfail",
                    "description": "*(eventhandler)*\n功能页返回，且操作失败时触发， detail 格式与具体功能页相关",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                        }
                    ]
                },
                {
                    "name": "bindcancel",
                    "description": "*(eventhandler)*\n因用户操作从功能页返回时触发",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html"
                }
            ]
        },
        {
            "name": "icon",
            "description": "\n(基础库 1.0.0+)\n\n图标。组件属性的长度单位默认为px，{%version('2.4.0')%}起支持传入单位(rpx/px)。\n\n",
            "attributes": [
                {
                    "name": "type",
                    "description": "*(string)*\nicon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"
                        }
                    ]
                },
                {
                    "name": "size",
                    "description": "*(number/string)*\nicon的大小",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"
                        }
                    ]
                },
                {
                    "name": "color",
                    "description": "*(string)*\nicon的颜色，同css的color",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"
                }
            ]
        },
        {
            "name": "image",
            "description": "\n(基础库 1.0.0+)\n\n图片。支持 JPG、PNG、SVG、WEBP、GIF 等格式，{%version('2.3.0')%} 起支持云文件ID。\n\n",
            "attributes": [
                {
                    "name": "src",
                    "description": "*(string)*\n图片资源地址",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                        }
                    ]
                },
                {
                    "name": "mode",
                    "description": "*(string)*\n图片裁剪、缩放的模式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "scaleToFill",
                            "description": "缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "aspectFit",
                            "description": "缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "aspectFill",
                            "description": "缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "widthFix",
                            "description": "缩放模式，宽度不变，高度自动变化，保持原图宽高比不变",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "heightFix",
                            "description": "缩放模式，高度不变，宽度自动变化，保持原图宽高比不变",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "top",
                            "description": "裁剪模式，不缩放图片，只显示图片的顶部区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "bottom",
                            "description": "裁剪模式，不缩放图片，只显示图片的底部区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "center",
                            "description": "裁剪模式，不缩放图片，只显示图片的中间区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "left",
                            "description": "裁剪模式，不缩放图片，只显示图片的左边区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "right",
                            "description": "裁剪模式，不缩放图片，只显示图片的右边区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "topleft",
                            "description": "裁剪模式，不缩放图片，只显示图片的左上边区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "topright",
                            "description": "裁剪模式，不缩放图片，只显示图片的右上边区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "bottomleft",
                            "description": "裁剪模式，不缩放图片，只显示图片的左下边区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        },
                        {
                            "name": "bottomright",
                            "description": "裁剪模式，不缩放图片，只显示图片的右下边区域",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "webp",
                    "description": "*(boolean)*\n默认不解析 webP 格式，只支持网络资源",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                        }
                    ]
                },
                {
                    "name": "lazy-load",
                    "description": "*(boolean)*\n图片懒加载，在即将进入一定范围（上下三屏）时才开始加载",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                        }
                    ]
                },
                {
                    "name": "show-menu-by-longpress",
                    "description": "*(boolean)*\n开启长按图片显示识别小程序码菜单",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n当错误发生时触发，event.detail = {errMsg}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                        }
                    ]
                },
                {
                    "name": "bindload",
                    "description": "*(eventhandle)*\n当图片载入完毕时触发，event.detail = {height, width}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/image.html"
                }
            ]
        },
        {
            "name": "index",
            "description": "## 视图容器\n| 名称 | 功能说明 |\n| -- | -- |\n| [cover-image]((cover-image))  | 覆盖在原生组件之上的图片视图 |\n| [cover-view]((cover-view))  | 覆盖在原生组件之上的文本视图 |\n| [match-media]((match-media))  | media query 匹配检测节点 |\n| [movable-area]((movable-area))  | [movable-view]((movable-view))的可移动区域 |\n| [movable-view]((movable-view))  | 可移动的视图容器，在页面中可以拖拽滑动 |\n| [scroll-view]((scroll-view))  | 可滚动视图区域 |\n| [swiper]((swiper))  | 滑块视图容器 |\n| [swiper-item]((swiper-item))  | 仅可放置在[swiper]((swiper))组件中，宽高自动设置为100% |\n| [view]((view))  | 视图容器 |\n## 基础内容\n| 名称 | 功能说明 |\n| -- | -- |\n| [icon]((icon))  | 图标 |\n| [progress]((progress))  | 进度条 |\n| [rich-text]((rich-text))  | 富文本 |\n| [text]((text))  | 文本 |\n## 表单组件\n| 名称 | 功能说明 |\n| -- | -- |\n| [button]((button))  | 按钮 |\n| [checkbox]((checkbox))  | 多选项目 |\n| [checkbox-group]((checkbox-group))  | 多项选择器，内部由多个[checkbox]((checkbox))组成 |\n| [editor]((editor))  | 富文本编辑器，可以对图片、文字进行编辑 |\n| [form]((form))  | 表单 |\n| [input]((input))  | 输入框 |\n| [label]((label))  | 用来改进表单组件的可用性 |\n| [picker]((picker))  | 从底部弹起的滚动选择器 |\n| [picker-view]((picker-view))  | 嵌入页面的滚动选择器 |\n| [picker-view-column]((picker-view-column))  | 滚动选择器子项 |\n| [radio]((radio))  | 单选项目 |\n| [radio-group]((radio-group))  | 单项选择器，内部由多个 [radio]((radio)) 组成 |\n| [slider]((slider))  | 滑动选择器 |\n| [switch]((switch))  | 开关选择器 |\n| [textarea]((textarea))  | 多行输入框 |\n## 导航\n| 名称 | 功能说明 |\n| -- | -- |\n| [functional-page-navigator]((functional-page-navigator))  | 仅在插件中有效，用于跳转到插件功能页 |\n| [navigator]((navigator))  | 页面链接 |\n## 媒体组件\n| 名称 | 功能说明 |\n| -- | -- |\n| [audio]((audio))  | 音频 |\n| [camera]((camera))  | 系统相机 |\n| [image]((image))  | 图片 |\n| [live-player]((live-player))  | 实时音视频播放（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))） |\n| [live-pusher]((live-pusher))  | 实时音视频录制（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))） |\n| [video]((video))  | 视频（v2.4.0 起支持[同层渲染]((native-component#原生组件同层渲染))） |\n| [voip-room]((voip-room))  | 多人音视频对话 |\n## 地图\n| 名称 | 功能说明 |\n| -- | -- |\n| [map]((map))  | 地图（v2.7.0 起支持[同层渲染]((native-component#原生组件同层渲染))） |\n## 画布\n| 名称 | 功能说明 |\n| -- | -- |\n| [canvas]((canvas))  | 画布 |\n## 开放能力\n| 名称 | 功能说明 |\n| -- | -- |\n| [web-view]((web-view))  | 承载网页的容器 |\n| [ad]((ad))  | Banner 广告 |\n| [ad-custom]((ad-custom))  | 原生模板 广告 |\n| [official-account]((official-account))  | 公众号关注组件 |\n| [open-data]((open-data))  | 用于展示微信开放的数据 |\n## 原生组件说明\n| 名称 | 功能说明 |\n| -- | -- |\n| [native-component]((native-component))  | ## 原生组件\n小程序中的部分组件是由客户端创建的原生组件，这些组件有：\n- [`camera`]((camera))\n- [`canvas`]((canvas))\n- [`input`]((input))（仅在focus时表现为原生组件）\n- [`live-player`]((live-player))\n- [`live-pusher`]((live-pusher))\n- [`map`]((map))\n- [`textarea`]((textarea))\n- [`video`]((video))\n## 原生组件的使用限制\n由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：\n- 原生组件的层级是**最高**的，所以页面中的其他组件无论设置 `z-index` 为多少，都无法盖在原生组件上 |\n## 无障碍访问\n| 名称 | 功能说明 |\n| -- | -- |\n| [aria-component]((aria-component))  | ## 无障碍访问\n为了更好地满足视障人士对于小程序的访问需求，基础库自2.7.1起，支持部分ARIA标签 |\n## 导航栏\n| 名称 | 功能说明 |\n| -- | -- |\n| [navigation-bar]((navigation-bar))  | 页面导航条配置节点，用于指定导航栏的一些属性 |\n## 页面属性配置节点\n| 名称 | 功能说明 |\n| -- | -- |\n| [page-meta]((page-meta))  | 页面属性配置节点，用于指定页面的一些属性、监听页面事件 |\n\n",
            "attributes": [],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/index.html"
                }
            ]
        },
        {
            "name": "input",
            "description": "\n(基础库 1.0.0+)\n\n输入框。该组件是[原生组件]((native-component))，使用时请注意相关限制\n\n",
            "attributes": [
                {
                    "name": "value",
                    "description": "*(string)*\n输入框的初始内容",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "type",
                    "description": "*(string)*\ninput 的类型",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "text",
                            "description": "文本输入键盘",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        },
                        {
                            "name": "number",
                            "description": "数字输入键盘",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        },
                        {
                            "name": "idcard",
                            "description": "身份证输入键盘",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        },
                        {
                            "name": "digit",
                            "description": "带小数点的数字键盘",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "password",
                    "description": "*(boolean)*\n是否是密码类型",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "placeholder",
                    "description": "*(string)*\n输入框为空时占位符",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "placeholder-style",
                    "description": "*(string)*\n指定 placeholder 的样式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "placeholder-class",
                    "description": "*(string)*\n指定 placeholder 的样式类",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "maxlength",
                    "description": "*(number)*\n最大输入长度，设置为 -1 的时候不限制最大长度",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "cursor-spacing",
                    "description": "*(number)*\n指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "auto-focus",
                    "description": "*(boolean)*\n(即将废弃，请直接使用 focus )自动聚焦，拉起键盘",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "focus",
                    "description": "*(boolean)*\n获取焦点",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "confirm-type",
                    "description": "*(string)*\n设置键盘右下角按钮的文字，仅在type='text'时生效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "send",
                            "description": "右下角按钮为“发送”",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        },
                        {
                            "name": "search",
                            "description": "右下角按钮为“搜索”",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        },
                        {
                            "name": "next",
                            "description": "右下角按钮为“下一个”",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        },
                        {
                            "name": "go",
                            "description": "右下角按钮为“前往”",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        },
                        {
                            "name": "done",
                            "description": "右下角按钮为“完成”",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "always-embed",
                    "description": "*(boolean)*\n强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "confirm-hold",
                    "description": "*(boolean)*\n点击键盘右下角按钮时是否保持键盘不收起",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "cursor",
                    "description": "*(number)*\n指定focus时的光标位置",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "selection-start",
                    "description": "*(number)*\n光标起始位置，自动聚集时有效，需与selection-end搭配使用",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "selection-end",
                    "description": "*(number)*\n光标结束位置，自动聚集时有效，需与selection-start搭配使用",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "adjust-position",
                    "description": "*(boolean)*\n键盘弹起时，是否自动上推页面",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "hold-keyboard",
                    "description": "*(boolean)*\nfocus时，点击页面的时候不收起键盘",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "bindinput",
                    "description": "*(eventhandle)*\n键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "bindfocus",
                    "description": "*(eventhandle)*\n输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "bindblur",
                    "description": "*(eventhandle)*\n输入框失去焦点时触发，event.detail = {value: value}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "bindconfirm",
                    "description": "*(eventhandle)*\n点击完成按钮时触发，event.detail = {value: value}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                },
                {
                    "name": "bindkeyboardheightchange",
                    "description": "*(eventhandle)*\n键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/input.html"
                }
            ]
        },
        {
            "name": "label",
            "description": "\n(基础库 1.0.0+)\n\n用来改进表单组件的可用性。\n\n使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。\nfor优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。\n目前可以绑定的控件有：[button]((button)), [checkbox]((checkbox)), [radio]((radio)), [switch]((switch))。\n\n",
            "attributes": [
                {
                    "name": "for",
                    "description": "*(string)*\n绑定控件的 id",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/label.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/label.html"
                }
            ]
        },
        {
            "name": "live-player",
            "description": "\n(基础库 1.7.0+)\n\n实时音视频播放（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))）。相关api：[wx.createLivePlayerContext]((wx.createLivePlayerContext))\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。\n\n| 一级类目/主体类型 | 二级类目                                                                                                                     | 小程序内容场景                                                                                                                          |\n| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| 社交              | 直播                                                                                                                         | 涉及娱乐性质，如明星直播、生活趣事直播、宠物直播等。选择该类目后首次提交代码审核，需经当地互联网主管机关审核确认，预计审核时长 7 天左右 |\n| 教育              | 在线视频课程                                                                                                                 | 网课、在线培训、讲座等教育类直播                                                                                                        |\n| 医疗              | 互联网医院，公立医疗机构，私立医疗机构                                                                                                         | 问诊、大型健康讲座等直播                                                                                                                |\n| 金融              | 银行、信托、公募基金、私募基金、证券/期货、证券、期货投资咨询、保险、征信业务、新三板信息服务平台、股票信息服务平台（港股/美股）、消费金融 | 金融产品视频客服理赔、金融产品推广直播等                                                                                                |\n| 汽车              | 汽车预售服务                                                                                                                 | 汽车预售、推广直播                                                                                                                      |\n| 政府主体帐号      | /                                                                                                                            | 政府相关工作推广直播、领导讲话直播等                                                                                                    |\n| 工具              | 视频客服                                                                                                                     | 不涉及以上几类内容的一对一视频客服服务，如企业售后一对一视频服务等                                                                      |\n| IT科技            |  多方通信；音视频设备                                                                                                          | 为多方提供电话会议/视频会议等服务；智能家居场景下控制摄像头                                                                                                    |\n\n",
            "attributes": [
                {
                    "name": "src",
                    "description": "*(string)*\n音视频地址。目前仅支持 `flv`, `rtmp` 格式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "mode",
                    "description": "*(string)*\n模式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "live",
                            "description": "直播",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        },
                        {
                            "name": "RTC",
                            "description": "实时通话，该模式时延更低",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "autoplay",
                    "description": "*(boolean)*\n自动播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "muted",
                    "description": "*(boolean)*\n是否静音",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "orientation",
                    "description": "*(string)*\n画面方向",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "vertical",
                            "description": "竖直",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        },
                        {
                            "name": "horizontal",
                            "description": "水平",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "object-fit",
                    "description": "*(string)*\n填充模式，可选值有 `contain`，`fillCrop`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "contain",
                            "description": "图像长边填满屏幕，短边区域会被填充⿊⾊",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        },
                        {
                            "name": "fillCrop",
                            "description": "图像铺满屏幕，超出显示区域的部分将被截掉",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "background-mute",
                    "description": "*(boolean)*\n进入后台时是否静音（已废弃，默认退后台静音）",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "min-cache",
                    "description": "*(number)*\n最小缓冲区，单位s（RTC 模式推荐 0.2s）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "max-cache",
                    "description": "*(number)*\n最大缓冲区，单位s（RTC 模式推荐 0.8s）。缓冲区用来抵抗网络波动，缓冲数据越多，网络抗性越好，但时延越大。",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "sound-mode",
                    "description": "*(string)*\n声音输出方式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "speaker",
                            "description": "扬声器",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        },
                        {
                            "name": "ear",
                            "description": "听筒",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "auto-pause-if-navigate",
                    "description": "*(boolean)*\n当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "auto-pause-if-open-native",
                    "description": "*(boolean)*\n当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "picture-in-picture-mode",
                    "description": "*(string/Array)*\n设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： [\"push\", \"pop\"]）",
                    "attrType": "string/Array",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "[]",
                            "description": "取消小窗",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        },
                        {
                            "name": "push",
                            "description": "路由 push 时触发小窗",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        },
                        {
                            "name": "pop",
                            "description": "路由 pop 时触发小窗",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "bindstatechange",
                    "description": "*(eventhandle)*\n播放状态变化事件，detail = {code}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "bindfullscreenchange",
                    "description": "*(eventhandle)*\n全屏变化事件，detail = {direction, fullScreen}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "bindnetstatus",
                    "description": "*(eventhandle)*\n网络状态通知，detail = {info}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "bindaudiovolumenotify",
                    "description": "*(eventhandler)*\n播放音量大小通知，detail = {}",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "bindenterpictureinpicture",
                    "description": "*(eventhandler)*\n播放器进入小窗",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                },
                {
                    "name": "bindleavepictureinpicture",
                    "description": "*(eventhandler)*\n播放器退出小窗",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"
                }
            ]
        },
        {
            "name": "live-pusher",
            "description": "\n(基础库 1.7.0+)\n\n实时音视频录制（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))）。需要[用户授权]((open-ability/authorize)) `scope.camera`、`scope.record`。\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。\n\n| 一级类目/主体类型 | 二级类目                                                                                                                     | 小程序内容场景                                                                                                                        |\n| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |\n| 社交              | 直播                                                                                                                         | 涉及娱乐性质，如明星直播、生活趣事直播、宠物直播等。选择该类目后首次提交代码审核，需经当地互联网主管机关审核确认，预计审核时长7天左右 |\n| 教育              | 在线视频课程                                                                                                                 | 网课、在线培训、讲座等教育类直播                                                                                                      |\n| 医疗              | 互联网医院，公立医疗机构，私立医疗机构                                                                                                         | 问诊、大型健康讲座等直播                                                                                                              |\n| 金融              | 银行、信托、公募基金、私募基金、证券/期货、证券、期货投资咨询、保险、征信业务、新三板信息服务平台、股票信息服务平台（港股/美股）、消费金融 | 金融产品视频客服理赔、金融产品推广直播等                                                                                              |\n| 汽车              | 汽车预售服务                                                                                                                 | 汽车预售、推广直播                                                                                                                    |\n| 政府主体帐号      | /                                                                                                                            | 政府相关工作推广直播、领导讲话直播等                                                                                                  |\n| 工具              | 视频客服                                                                                                                     | 不涉及以上几类内容的一对一视频客服服务，如企业售后一对一视频服务等                                                                    |\n| IT科技            |  多方通信；音视频设备                                                                                                          | 为多方提供电话会议/视频会议等服务；智能家居场景下控制摄像头                                                                                                       |\n\n相关api：[wx.createLivePusherContext]((wx.createLivePusherContext))\n\n",
            "attributes": [
                {
                    "name": "url",
                    "description": "*(string)*\n推流地址。目前仅支持 `rtmp` 格式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "mode",
                    "description": "*(string)*\n`SD`（标清）, `HD`（高清）, `FHD`（超清）, `RTC`（实时通话）",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "autopush",
                    "description": "*(boolean)*\n自动推流",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "muted",
                    "description": "*(boolean)*\n是否静音。即将废弃，可用 `enable-mic` 替代",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "enable-camera",
                    "description": "*(boolean)*\n开启摄像头",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "auto-focus",
                    "description": "*(boolean)*\n自动聚集",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "orientation",
                    "description": "*(string)*\n画面方向",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "vertical",
                            "description": "竖直",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "horizontal",
                            "description": "水平",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "beauty",
                    "description": "*(number)*\n美颜，取值范围 0-9 ，0 表示关闭",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "whiteness",
                    "description": "*(number)*\n美白，取值范围 0-9 ，0 表示关闭",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "aspect",
                    "description": "*(string)*\n宽高比，可选值有 `3:4`, `9:16`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "min-bitrate",
                    "description": "*(number)*\n最小码率",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "max-bitrate",
                    "description": "*(number)*\n最大码率",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "audio-quality",
                    "description": "*(string)*\n高音质(48KHz)或低音质(16KHz)，值为`high`, `low`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "waiting-image",
                    "description": "*(string)*\n进入后台时推流的等待画面",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "waiting-image-hash",
                    "description": "*(string)*\n等待画面资源的MD5值",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "zoom",
                    "description": "*(boolean)*\n调整焦距",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "device-position",
                    "description": "*(string)*\n前置或后置，值为`front`, `back`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "background-mute",
                    "description": "*(boolean)*\n进入后台时是否静音（已废弃，默认退后台静音）",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "mirror",
                    "description": "*(boolean)*\n设置推流画面是否镜像，产生的效果在 live-player 反应到",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "remote-mirror",
                    "description": "*(boolean)*\n同 mirror 属性，后续 mirror 将废弃",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "local-mirror",
                    "description": "*(string)*\n控制本地预览画面是否镜像",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "auto",
                            "description": "前置摄像头镜像，后置摄像头不镜像",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "enable",
                            "description": "前后置摄像头均镜像",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "disable",
                            "description": "前后置摄像头均不镜像",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "audio-reverb-type",
                    "description": "*(number)*\n音频混响类型",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "0",
                            "description": "关闭",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "1",
                            "description": "KTV",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "2",
                            "description": "小房间",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "3",
                            "description": "大会堂",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "4",
                            "description": "低沉",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "5",
                            "description": "洪亮",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "6",
                            "description": "金属声",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "7",
                            "description": "磁性",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "enable-mic",
                    "description": "*(boolean)*\n开启或关闭麦克风",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "enable-agc",
                    "description": "*(boolean)*\n是否开启音频自动增益",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "enable-ans",
                    "description": "*(boolean)*\n是否开启音频噪声抑制",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "audio-volume-type",
                    "description": "*(string)*\n音量类型",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "auto",
                            "description": "自动",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "media",
                            "description": "媒体音量",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "voicecall",
                            "description": "通话音量",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "video-width",
                    "description": "*(number)*\n上推的视频流的分辨率宽度",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "video-height",
                    "description": "*(number)*\n上推的视频流的分辨率高度",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "beauty-style",
                    "description": "*(string)*\n设置美颜类型",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "smooth",
                            "description": "光滑美颜",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "nature",
                            "description": "自然美颜",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "filter",
                    "description": "*(string)*\n设置色彩滤镜",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "standard",
                            "description": "标准",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "pink",
                            "description": "粉嫩",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "nostalgia",
                            "description": "怀旧",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "blues",
                            "description": "蓝调",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "romantic",
                            "description": "浪漫",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "cool",
                            "description": "清凉",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "fresher",
                            "description": "清新",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "solor",
                            "description": "日系",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "aestheticism",
                            "description": "唯美",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "whitening",
                            "description": "美白",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        },
                        {
                            "name": "cerisered",
                            "description": "樱红",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "bindstatechange",
                    "description": "*(eventhandle)*\n状态变化事件，detail = {code}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "bindnetstatus",
                    "description": "*(eventhandle)*\n网络状态通知，detail = {info}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n渲染错误事件，detail = {errMsg, errCode}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "bindbgmstart",
                    "description": "*(eventhandle)*\n背景音开始播放时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "bindbgmprogress",
                    "description": "*(eventhandle)*\n背景音进度变化时触发，detail = {progress, duration}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "bindbgmcomplete",
                    "description": "*(eventhandle)*\n背景音播放完成时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                },
                {
                    "name": "bindaudiovolumenotify",
                    "description": "*(eventhandle)*\n返回麦克风采集的音量大小",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"
                }
            ]
        },
        {
            "name": "map",
            "description": "\n(基础库 1.0.0+)\n\n地图（v2.7.0 起支持[同层渲染]((native-component#原生组件同层渲染))）。相关api [wx.createMapContext]((wx.createMapContext))。\n\n个性化地图能力可在小程序后台“开发-开发者工具-腾讯位置服务”申请开通，详见[《微信小程序解决方案》](https://lbs.qq.com/product/miniapp/home/)。\n小程序内地图组件应使用同一 `subkey`，可通过 `layer-style`（地图官网设置的样式 style 编号）属性选择不同的底图风格。\n组件属性的长度单位默认为px，{%version('2.4.0')%}起支持传入单位(rpx/px)。\n\n#### 示例小程序\n<img src=\"../resource/map.png\"  width=\"200\" height=\"200\"></img>\n\n",
            "attributes": [
                {
                    "name": "longitude",
                    "description": "*(number)*\n中心经度",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "latitude",
                    "description": "*(number)*\n中心纬度",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "scale",
                    "description": "*(number)*\n缩放级别，取值范围为3-20",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "markers",
                    "description": "*(Array.&lt;marker&gt;)*\n标记点",
                    "attrType": "Array.&lt;marker&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "covers",
                    "description": "*(Array.&lt;cover&gt;)*\n**即将移除，请使用 markers**",
                    "attrType": "Array.&lt;cover&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "polyline",
                    "description": "*(Array.&lt;polyline&gt;)*\n路线",
                    "attrType": "Array.&lt;polyline&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "circles",
                    "description": "*(Array.&lt;circle&gt;)*\n圆",
                    "attrType": "Array.&lt;circle&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "controls",
                    "description": "*(Array.&lt;control&gt;)*\n控件（即将废弃，建议使用 [cover-view]((cover-view)) 代替）",
                    "attrType": "Array.&lt;control&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "include-points",
                    "description": "*(Array.&lt;point&gt;)*\n缩放视野以包含所有给定的坐标点",
                    "attrType": "Array.&lt;point&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "show-location",
                    "description": "*(boolean)*\n显示带有方向的当前定位点",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "polygons",
                    "description": "*(Array.&lt;polygon&gt;)*\n多边形",
                    "attrType": "Array.&lt;polygon&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "subkey",
                    "description": "*(string)*\n个性化地图使用的key",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "layer-style",
                    "description": "*(number)*\n个性化地图配置的 style，不支持动态修改",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "rotate",
                    "description": "*(number)*\n旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "skew",
                    "description": "*(number)*\n倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "enable-3D",
                    "description": "*(boolean)*\n展示3D楼块(工具暂不支持）",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "show-compass",
                    "description": "*(boolean)*\n显示指南针",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "show-scale",
                    "description": "*(boolean)*\n显示比例尺，工具暂不支持",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "enable-overlooking",
                    "description": "*(boolean)*\n开启俯视",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "enable-zoom",
                    "description": "*(boolean)*\n是否支持缩放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "enable-scroll",
                    "description": "*(boolean)*\n是否支持拖动",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "enable-rotate",
                    "description": "*(boolean)*\n是否支持旋转",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "enable-satellite",
                    "description": "*(boolean)*\n是否开启卫星图",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "enable-traffic",
                    "description": "*(boolean)*\n是否开启实时路况",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "setting",
                    "description": "*(object)*\n配置项",
                    "attrType": "object",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindtap",
                    "description": "*(eventhandle)*\n点击地图时触发，{%version('2.9.0')%}起返回经纬度信息",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindmarkertap",
                    "description": "*(eventhandle)*\n点击标记点时触发，`e.detail = {markerId}`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindlabeltap",
                    "description": "*(eventhandle)*\n点击label时触发，`e.detail = {markerId}`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindcontroltap",
                    "description": "*(eventhandle)*\n点击控件时触发，`e.detail = {controlId}`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindcallouttap",
                    "description": "*(eventhandle)*\n点击标记点对应的气泡时触发`e.detail = {markerId}`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindupdated",
                    "description": "*(eventhandle)*\n在地图渲染更新完成时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindregionchange",
                    "description": "*(eventhandle)*\n视野发生变化时触发，",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                },
                {
                    "name": "bindpoitap",
                    "description": "*(eventhandle)*\n点击地图poi点时触发，`e.detail = {name, longitude, latitude}`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/map.html"
                }
            ]
        },
        {
            "name": "match-media",
            "description": "\n(基础库 2.11.1+)\n\nmedia query 匹配检测节点。可以指定一组 media query 规则，满足时，这个节点才会被展示。\n\n通过这个节点可以实现“页面宽高在某个范围时才展示某个区域”这样的效果。\n\n",
            "attributes": [
                {
                    "name": "min-width",
                    "description": "*(number)*\n页面最小宽度（ px 为单位）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                        }
                    ]
                },
                {
                    "name": "max-width",
                    "description": "*(number)*\n页面最大宽度（ px 为单位）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                        }
                    ]
                },
                {
                    "name": "width",
                    "description": "*(number)*\n页面宽度（ px 为单位）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                        }
                    ]
                },
                {
                    "name": "min-height",
                    "description": "*(number)*\n页面最小高度（ px 为单位）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                        }
                    ]
                },
                {
                    "name": "max-height",
                    "description": "*(number)*\n页面最大高度（ px 为单位）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                        }
                    ]
                },
                {
                    "name": "height",
                    "description": "*(number)*\n页面高度（ px 为单位）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                        }
                    ]
                },
                {
                    "name": "orientation",
                    "description": "*(string)*\n屏幕方向（ `landscape` 或 `portrait` ）",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"
                }
            ]
        },
        {
            "name": "movable-area",
            "description": "\n(基础库 1.2.0+)\n\n[movable-view]((movable-view))的可移动区域。\n\n",
            "attributes": [
                {
                    "name": "scale-area",
                    "description": "*(Boolean)*\n当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area",
                    "attrType": "Boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html"
                }
            ]
        },
        {
            "name": "movable-view",
            "description": "\n(基础库 1.2.0+)\n\n可移动的视图容器，在页面中可以拖拽滑动。[movable-view]((movable-view))必须在 [movable-area]((movable-area)) 组件中，并且必须是直接子节点，否则不能移动。\n\n",
            "attributes": [
                {
                    "name": "direction",
                    "description": "*(string)*\nmovable-view的移动方向，属性值有all、vertical、horizontal、none",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "inertia",
                    "description": "*(boolean)*\nmovable-view是否带有惯性",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "out-of-bounds",
                    "description": "*(boolean)*\n超过可移动区域后，movable-view是否还可以移动",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "x",
                    "description": "*(number)*\n定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "y",
                    "description": "*(number)*\n定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "damping",
                    "description": "*(number)*\n阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "friction",
                    "description": "*(number)*\n摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "scale",
                    "description": "*(boolean)*\n是否支持双指缩放，默认缩放手势生效区域是在movable-view内",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "scale-min",
                    "description": "*(number)*\n定义缩放倍数最小值",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "scale-max",
                    "description": "*(number)*\n定义缩放倍数最大值",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "scale-value",
                    "description": "*(number)*\n定义缩放倍数，取值范围为 0.5 - 10",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "animation",
                    "description": "*(boolean)*\n是否使用动画",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "bindchange",
                    "description": "*(eventhandle)*\n拖动过程中触发的事件，event.detail = {x, y, source}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "bindscale",
                    "description": "*(eventhandle)*\n缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在{%version('2.1.0')%}之后支持",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "htouchmove",
                    "description": "*(eventhandle)*\n初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                },
                {
                    "name": "vtouchmove",
                    "description": "*(eventhandle)*\n初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"
                }
            ]
        },
        {
            "name": "native-component",
            "description": "\n## 原生组件\n\n小程序中的部分组件是由客户端创建的原生组件，这些组件有：\n\n- [`camera`]((camera))\n- [`canvas`]((canvas))\n- [`input`]((input))（仅在focus时表现为原生组件）\n- [`live-player`]((live-player))\n- [`live-pusher`]((live-pusher))\n- [`map`]((map))\n- [`textarea`]((textarea))\n- [`video`]((video))\n\n## 原生组件的使用限制\n\n由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：\n\n- 原生组件的层级是**最高**的，所以页面中的其他组件无论设置 `z-index` 为多少，都无法盖在原生组件上。\n- 后插入的原生组件可以覆盖之前的原生组件。\n- 原生组件还无法在 [picker-view]((picker-view)) 中使用。\n- 基础库 2.4.4 以下版本，原生组件不支持在 [scroll-view]((scroll-view))、[swiper]((swiper))、[movable-view]((movable-view)) 中使用。\n- 部分CSS样式无法应用于原生组件，例如：\n- 无法对原生组件设置 CSS 动画\n- 无法定义原生组件为 `position: fixed`\n- 不能在父级节点使用 `overflow: hidden` 来裁剪原生组件的显示区域\n- 原生组件的事件监听不能使用 `bind:eventname` 的写法，只支持 `bindeventname`。原生组件也不支持 catch 和 capture 的事件绑定方式。\n- 原生组件会遮挡 vConsole 弹出的调试面板。\n*在工具上，原生组件是用web组件模拟的，因此很多情况并不能很好的还原真机的表现，建议开发者在使用到原生组件时尽量在真机上进行调试。**\n\n## cover-view 与 cover-image\n\n为了解决原生组件层级最高的限制。小程序专门提供了 [`cover-view`]((cover-view)) 和 [`cover-image`]((cover-image)) 组件，可以覆盖在**部分**原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。\n\n## 原生组件同层渲染\n同层渲染是为了解决原生组件的层级问题，在支持同层渲染后，原生组件与其它组件可以随意叠加，有关层级的限制将不再存在。但需要注意的是，组件内部仍由原生渲染，样式一般还是对原生组件内部无效。**当前 video, map, live-player, live-pusher, canvas(2d) 组件已支持同层渲染。**\n\n## 原生组件相对层级\n为了可以调整原生组件之间的相对层级位置，小程序在 v2.7.0 及以上版本支持在样式中声明 z-index 来指定原生组件的层级。该 z-index 仅调整原生组件之间的层级顺序，其层级仍**高于**其他非原生组件。\n\n\n",
            "attributes": [],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html"
                }
            ]
        },
        {
            "name": "navigation-bar",
            "description": "\n(基础库 2.9.0+)\n\n页面导航条配置节点，用于指定导航栏的一些属性。只能是 [page-meta]((page-meta)) 组件内的第一个节点，需要配合它一同使用。\n\n通过这个节点可以获得类似于调用 [`wx.setNavigationBarTitle`]((wx.setNavigationBarTitle)) [`wx.setNavigationBarColor`]((wx.setNavigationBarColor)) 等接口调用的效果。\n\n",
            "attributes": [
                {
                    "name": "title",
                    "description": "*(string)*\n导航条标题",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
                        }
                    ]
                },
                {
                    "name": "loading",
                    "description": "*(boolean)*\n是否在导航条显示 loading 加载提示",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
                        }
                    ]
                },
                {
                    "name": "front-color",
                    "description": "*(string)*\n导航条前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 `#ffffff` 和 `#000000`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
                        }
                    ]
                },
                {
                    "name": "background-color",
                    "description": "*(string)*\n导航条背景颜色值，有效值为十六进制颜色",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
                        }
                    ]
                },
                {
                    "name": "color-animation-duration",
                    "description": "*(number)*\n改变导航栏颜色时的动画时长，默认为 `0` （即没有动画效果）",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
                        }
                    ]
                },
                {
                    "name": "color-animation-timing-func",
                    "description": "*(number)*\n改变导航栏颜色时的动画方式，支持 `linear` 、 `easeIn` 、 `easeOut` 和 `easeInOut`",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html"
                }
            ]
        },
        {
            "name": "navigator",
            "description": "\n(基础库 1.0.0+)\n\n页面链接。\n\n",
            "attributes": [
                {
                    "name": "target",
                    "description": "*(string)*\n在哪个目标上发生跳转，默认当前小程序",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "self",
                            "description": "当前小程序",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "miniProgram",
                            "description": "其它小程序",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "url",
                    "description": "*(string)*\n当前小程序内的跳转链接",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "open-type",
                    "description": "*(string)*\n跳转方式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "navigate",
                            "description": "对应 [wx.navigateTo]((wx.navigateTo)) 或 [wx.navigateToMiniProgram]((wx.navigateToMiniProgram)) 的功能",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "redirect",
                            "description": "对应 [wx.redirectTo]((wx.redirectTo)) 的功能",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "switchTab",
                            "description": "对应 [wx.switchTab]((wx.switchTab)) 的功能",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "reLaunch",
                            "description": "对应 [wx.reLaunch]((wx.reLaunch)) 的功能",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "navigateBack",
                            "description": "对应 [wx.navigateBack]((wx.navigateBack)) 的功能",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "exit",
                            "description": "退出小程序，`target=\"miniProgram\"`时生效",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "delta",
                    "description": "*(number)*\n当 open-type 为 'navigateBack' 时有效，表示回退的层数",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "app-id",
                    "description": "*(string)*\n当`target=\"miniProgram\"`时有效，要打开的小程序 appId",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "path",
                    "description": "*(string)*\n当`target=\"miniProgram\"`时有效，打开的页面路径，如果为空则打开首页",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "extra-data",
                    "description": "*(object)*\n当`target=\"miniProgram\"`时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据。[详情](../framework/app-service/app.md)",
                    "attrType": "object",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "version",
                    "description": "*(string)*\n当`target=\"miniProgram\"`时有效，要打开的小程序版本",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "develop",
                            "description": "开发版",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "trial",
                            "description": "体验版",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        },
                        {
                            "name": "release",
                            "description": "正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "hover-class",
                    "description": "*(string)*\n指定点击时的样式类，当`hover-class=\"none\"`时，没有点击态效果",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "hover-stop-propagation",
                    "description": "*(boolean)*\n指定是否阻止本节点的祖先节点出现点击态",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "hover-start-time",
                    "description": "*(number)*\n按住后多久出现点击态，单位毫秒",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "hover-stay-time",
                    "description": "*(number)*\n手指松开后点击态保留时间，单位毫秒",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "bindsuccess",
                    "description": "*(string)*\n当`target=\"miniProgram\"`时有效，跳转小程序成功",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "bindfail",
                    "description": "*(string)*\n当`target=\"miniProgram\"`时有效，跳转小程序失败",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                },
                {
                    "name": "bindcomplete",
                    "description": "*(string)*\n当`target=\"miniProgram\"`时有效，跳转小程序完成",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html"
                }
            ]
        },
        {
            "name": "official-account",
            "description": "\n(基础库 2.3.0+)\n\n公众号关注组件。当用户扫[小程序码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html?t=19032815)打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内。\n\n#### Tips\n1. 使用组件前，需前往小程序后台，在“设置”->“关注公众号”中设置要展示的公众号。**注：设置的公众号需与小程序主体一致。**\n\n2. 在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号组件的能力:\n- 当小程序从扫小程序码场景（场景值1047，场景值1124）打开时\n- 当小程序从聊天顶部场景（场景值1089）中的「最近使用」内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态\n- 当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态\n\n3. 为便于开发者调试，基础库 `2.7.3` 版本起开发版小程序增加以下场景展示公众号组件：\n- 开发版小程序从扫二维码（场景值 1011）打开\n— 体验版小程序打开\n\n4. 组件限定最小宽度为300px，高度为定值84px。\n\n5. 每个页面只能配置一个该组件。\n\n| 属性名    | 类型        | 说明               |\n| --------- | ----------- | ------------------ |\n| bindload  | EventHandle | 组件加载成功时触发 |\n| binderror | EventHandle | 组件加载失败时触发 |\n\n#### detail 对象\n| 属性名 | 类型   | 说明     |\n| ------ | ------ | -------- |\n| status | Number | 状态码   |\n| errMsg | String | 错误信息 |\n\n##### status 有效值\n| 值  | 说明                           |\n| --- | ------------------------------ |\n| -2  | 网络错误                       |\n| -1  | 数据解析错误                   |\n| 0   | 加载成功                       |\n| 1   | 小程序关注公众号功能被封禁     |\n| 2   | 关联公众号被封禁               |\n| 3   | 关联关系解除或未选中关联公众号 |\n| 4   | 未开启关注公众号功能           |\n| 5   | 场景值错误                  |\n| 6   | 重复创建            |\n\n## 示例代码\n\n```html\n<official-account></official-account>\n```\n\n\n",
            "attributes": [],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html"
                }
            ]
        },
        {
            "name": "open-data",
            "description": "\n(基础库 1.4.0+)\n\n用于展示微信开放的数据。\n\n",
            "attributes": [
                {
                    "name": "type",
                    "description": "*(string)*\n开放数据类型",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "groupName",
                            "description": "拉取群名称",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "userNickName",
                            "description": "用户昵称",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "userAvatarUrl",
                            "description": "用户头像",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "userGender",
                            "description": "用户性别",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "userCity",
                            "description": "用户所在城市",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "userProvince",
                            "description": "用户所在省份",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "userCountry",
                            "description": "用户所在国家",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "userLanguage",
                            "description": "用户的语言",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "open-gid",
                    "description": "*(string)*\n当 type=\"groupName\" 时生效, 群id",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                        }
                    ]
                },
                {
                    "name": "lang",
                    "description": "*(string)*\n当 type=\"user*\" 时生效，以哪种语言展示 userInfo",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "en",
                            "description": "英文",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "zh_CN",
                            "description": "简体中文",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        },
                        {
                            "name": "zh_TW",
                            "description": "繁体中文",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "default-text",
                    "description": "*(string)*\n数据为空时的默认文案",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                        }
                    ]
                },
                {
                    "name": "default-avatar",
                    "description": "*(string)*\n用户头像为空时的默认图片，支持相对路径和网络图片路径",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n群名称或用户信息为空时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"
                }
            ]
        },
        {
            "name": "page-meta",
            "description": "\n(基础库 2.9.0+)\n\n页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 [navigation-bar]((navigation-bar)) 组件一同使用。\n\n通过这个节点可以获得类似于调用 [`wx.setBackgroundTextStyle`]((wx.setBackgroundTextStyle)) [`wx.setBackgroundColor`]((wx.setBackgroundColor)) 等接口调用的效果。\n\n",
            "attributes": [
                {
                    "name": "background-text-style",
                    "description": "*(string)*\n下拉背景字体、loading 图的样式，仅支持 `dark` 和 `light`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "background-color",
                    "description": "*(string)*\n窗口的背景色，必须为十六进制颜色值",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "background-color-top",
                    "description": "*(string)*\n顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "background-color-bottom",
                    "description": "*(string)*\n底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "root-background-color",
                    "description": "*(string)*\n页面内容的背景色，用于页面中的空白部分和页面大小变化 resize 动画期间\b的临时空闲区域",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "scroll-top",
                    "description": "*(string)*\n滚动位置，可以使用 px 或者 rpx 为单位，在被设置时，页面会滚动到对应位置",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "scroll-duration",
                    "description": "*(number)*\n滚动动画时长",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "page-style",
                    "description": "*(string)*\n页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "body-font-size",
                    "description": "*(string)*\n页面 page 的字体大小，可以设置为 `system` ，表示使用当前用户设置的微信字体大小",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "root-font-size",
                    "description": "*(string)*\n页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 `1rem` 等于这个字体大小；自小程序版本 2.11.0 起，也可以设置为 `system`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "page-orientation",
                    "description": "*(string)*\n页面的方向，可为 `auto` `portrait` 或 `landscape`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "bindresize",
                    "description": "*(eventhandle)*\n页面尺寸变化时会触发 `resize` 事件， `event.detail = { size: { windowWidth, windowHeight } }`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "bindscroll",
                    "description": "*(eventhandle)*\n页面滚动时会触发 `scroll` 事件， `event.detail = { scrollTop }`",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                },
                {
                    "name": "bindscrolldone",
                    "description": "*(eventhandle)*\n如果通过改变 `scroll-top` 属性来使页面滚动，页面滚动结束后会触发 `scrolldone` 事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html"
                }
            ]
        },
        {
            "name": "picker-view-column",
            "description": "\n(基础库 1.0.0+)\n\n滚动选择器子项。仅可放置于[picker-view]((picker-view))中，其孩子节点的高度会自动设置成与[picker-view]((picker-view))的选中框的高度一致\n\n\n",
            "attributes": [],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html"
                }
            ]
        },
        {
            "name": "picker-view",
            "description": "\n(基础库 1.0.0+)\n\n嵌入页面的滚动选择器。其中只可放置 [picker-view-column]((picker-view-column))组件，其它节点不会显示。\n\n",
            "attributes": [
                {
                    "name": "value",
                    "description": "*(Array.&lt;number&gt;)*\n数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。",
                    "attrType": "Array.&lt;number&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                },
                {
                    "name": "indicator-style",
                    "description": "*(string)*\n设置选择器中间选中框的样式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                },
                {
                    "name": "indicator-class",
                    "description": "*(string)*\n设置选择器中间选中框的类名",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                },
                {
                    "name": "mask-style",
                    "description": "*(string)*\n设置蒙层的样式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                },
                {
                    "name": "mask-class",
                    "description": "*(string)*\n设置蒙层的类名",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                },
                {
                    "name": "bindchange",
                    "description": "*(eventhandle)*\n滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                },
                {
                    "name": "bindpickstart",
                    "description": "*(eventhandle)*\n当滚动选择开始时候触发事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                },
                {
                    "name": "bindpickend",
                    "description": "*(eventhandle)*\n当滚动选择结束时候触发事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"
                }
            ]
        },
        {
            "name": "picker",
            "description": "\n(基础库 1.0.0+)\n\n从底部弹起的滚动选择器。\n\n",
            "attributes": [
                {
                    "name": "header-text",
                    "description": "*(string)*\n选择器的标题，仅安卓可用",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                        }
                    ]
                },
                {
                    "name": "mode",
                    "description": "*(string)*\n选择器类型",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "selector",
                            "description": "普通选择器",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                                }
                            ]
                        },
                        {
                            "name": "multiSelector",
                            "description": "多列选择器",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                                }
                            ]
                        },
                        {
                            "name": "time",
                            "description": "时间选择器",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                                }
                            ]
                        },
                        {
                            "name": "date",
                            "description": "日期选择器",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                                }
                            ]
                        },
                        {
                            "name": "region",
                            "description": "省市区选择器",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                        }
                    ]
                },
                {
                    "name": "bindcancel",
                    "description": "*(eventhandle)*\n取消选择时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/picker.html"
                }
            ]
        },
        {
            "name": "progress",
            "description": "\n(基础库 1.0.0+)\n\n进度条。组件属性的长度单位默认为px，{%version('2.4.0')%}起支持传入单位(rpx/px)。\n\n",
            "attributes": [
                {
                    "name": "percent",
                    "description": "*(number)*\n百分比0~100",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "show-info",
                    "description": "*(boolean)*\n在进度条右侧显示百分比",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "border-radius",
                    "description": "*(number/string)*\n圆角大小",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "font-size",
                    "description": "*(number/string)*\n右侧百分比字体大小",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "stroke-width",
                    "description": "*(number/string)*\n进度条线的宽度",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "color",
                    "description": "*(string)*\n进度条颜色（请使用activeColor）",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "activeColor",
                    "description": "*(string)*\n已选择的进度条的颜色",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "backgroundColor",
                    "description": "*(string)*\n未选择的进度条的颜色",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "active",
                    "description": "*(boolean)*\n进度条从左往右的动画",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "active-mode",
                    "description": "*(string)*\nbackwards: 动画从头播；forwards：动画从上次结束点接着播",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "duration",
                    "description": "*(number)*\n进度增加1%所需毫秒数",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                },
                {
                    "name": "bindactiveend",
                    "description": "*(eventhandle)*\n动画完成事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"
                }
            ]
        },
        {
            "name": "radio-group",
            "description": "\n(基础库 1.0.0+)\n\n单项选择器，内部由多个 [radio]((radio)) 组成。\n\n",
            "attributes": [
                {
                    "name": "bindchange",
                    "description": "*(EventHandle)*\n[radio-group]((radio-group))中选中项发生改变时触发 change 事件，detail = {value:[选中的radio的value的数组]}",
                    "attrType": "EventHandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html"
                }
            ]
        },
        {
            "name": "radio",
            "description": "\n(基础库 1.0.0+)\n\n单选项目。\n\n",
            "attributes": [
                {
                    "name": "value",
                    "description": "*(string)*\n[radio]((radio)) 标识。当该[radio]((radio)) 选中时，[radio-group]((radio-group)) 的 change 事件会携带[radio]((radio))的value",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
                        }
                    ]
                },
                {
                    "name": "checked",
                    "description": "*(boolean)*\n当前是否选中",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
                        }
                    ]
                },
                {
                    "name": "color",
                    "description": "*(string)*\nradio的颜色，同css的color",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"
                }
            ]
        },
        {
            "name": "rich-text",
            "description": "\n(基础库 1.4.0+)\n\n富文本。\n\n",
            "attributes": [
                {
                    "name": "nodes",
                    "description": "*(array/string)*\n节点列表/HTML String",
                    "attrType": "array/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
                        }
                    ]
                },
                {
                    "name": "space",
                    "description": "*(string)*\n显示连续空格",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "ensp",
                            "description": "中文字符空格一半大小",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
                                }
                            ]
                        },
                        {
                            "name": "emsp",
                            "description": "中文字符空格大小",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
                                }
                            ]
                        },
                        {
                            "name": "nbsp",
                            "description": "根据字体设置的空格大小",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
                                }
                            ]
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"
                }
            ]
        },
        {
            "name": "scroll-view",
            "description": "\n(基础库 1.0.0+)\n\n可滚动视图区域。使用竖向滚动时，需要给[scroll-view]((scroll-view))一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，{%version('2.4.0')%}起支持传入单位(rpx/px)。\n\n",
            "attributes": [
                {
                    "name": "scroll-x",
                    "description": "*(boolean)*\n允许横向滚动",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "scroll-y",
                    "description": "*(boolean)*\n允许纵向滚动",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "upper-threshold",
                    "description": "*(number/string)*\n距顶部/左边多远时，触发 scrolltoupper 事件",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "lower-threshold",
                    "description": "*(number/string)*\n距底部/右边多远时，触发 scrolltolower 事件",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "scroll-top",
                    "description": "*(number/string)*\n设置竖向滚动条位置",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "scroll-left",
                    "description": "*(number/string)*\n设置横向滚动条位置",
                    "attrType": "number/string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "scroll-into-view",
                    "description": "*(string)*\n值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "scroll-with-animation",
                    "description": "*(boolean)*\n在设置滚动条位置时使用动画过渡",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "enable-back-to-top",
                    "description": "*(boolean)*\niOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "enable-flex",
                    "description": "*(boolean)*\n启用 flexbox 布局。开启后，当前节点声明了 `display: flex` 就会成为 flex container，并作用于其孩子节点。",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "scroll-anchoring",
                    "description": "*(boolean)*\n开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS `overflow-anchor` 属性。",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "refresher-enabled",
                    "description": "*(boolean)*\n开启自定义下拉刷新",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "refresher-threshold",
                    "description": "*(number)*\n设置自定义下拉刷新阈值",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "refresher-default-style",
                    "description": "*(string)*\n设置自定义下拉刷新默认样式，支持设置 `black",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "refresher-background",
                    "description": "*(string)*\n设置自定义下拉刷新区域背景颜色",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "refresher-triggered",
                    "description": "*(boolean)*\n设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "enhanced",
                    "description": "*(boolean)*\n启用 scroll-view 增强特性",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bounces",
                    "description": "*(boolean)*\niOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "showScrollbar",
                    "description": "*(boolean)*\n滚动条显隐控制 (同时开启 enhanced 属性后生效)",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "paingEnabled",
                    "description": "*(boolean)*\n分页滑动效果 (同时开启 enhanced 属性后生效)",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "fastDeceleration",
                    "description": "*(boolean)*\n滑动减速速率控制 (同时开启 enhanced 属性后生效)",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "binddragstart",
                    "description": "*(eventhandle)*\n滑动开始事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "binddragging",
                    "description": "*(eventhandle)*\n滑动事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "binddragend",
                    "description": "*(eventhandle)*\n滑动结束事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft, velocity }",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bindscrolltoupper",
                    "description": "*(eventhandle)*\n滚动到顶部/左边时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bindscrolltolower",
                    "description": "*(eventhandle)*\n滚动到底部/右边时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bindscroll",
                    "description": "*(eventhandle)*\n滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bindrefresherpulling",
                    "description": "*(eventhandle)*\n自定义下拉刷新控件被下拉",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bindrefresherrefresh",
                    "description": "*(eventhandle)*\n自定义下拉刷新被触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bindrefresherrestore",
                    "description": "*(eventhandle)*\n自定义下拉刷新被复位",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                },
                {
                    "name": "bindrefresherabort",
                    "description": "*(eventhandle)*\n自定义下拉刷新被中止",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"
                }
            ]
        },
        {
            "name": "slider",
            "description": "\n(基础库 1.0.0+)\n\n滑动选择器。\n\n",
            "attributes": [
                {
                    "name": "min",
                    "description": "*(number)*\n最小值",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "max",
                    "description": "*(number)*\n最大值",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "step",
                    "description": "*(number)*\n步长，取值必须大于 0，并且可被(max - min)整除",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "value",
                    "description": "*(number)*\n当前取值",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "color",
                    "description": "*(color)*\n背景条的颜色（请使用 backgroundColor）",
                    "attrType": "color",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "selected-color",
                    "description": "*(color)*\n已选择的颜色（请使用 activeColor）",
                    "attrType": "color",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "activeColor",
                    "description": "*(color)*\n已选择的颜色",
                    "attrType": "color",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "backgroundColor",
                    "description": "*(color)*\n背景条的颜色",
                    "attrType": "color",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "block-size",
                    "description": "*(number)*\n滑块的大小，取值范围为 12 - 28",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "block-color",
                    "description": "*(color)*\n滑块的颜色",
                    "attrType": "color",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "show-value",
                    "description": "*(boolean)*\n是否显示当前 value",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "bindchange",
                    "description": "*(eventhandle)*\n完成一次拖动后触发的事件，event.detail = {value}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                },
                {
                    "name": "bindchanging",
                    "description": "*(eventhandle)*\n拖动过程中触发的事件，event.detail = {value}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"
                }
            ]
        },
        {
            "name": "swiper-item",
            "description": "\n(基础库 1.0.0+)\n\n仅可放置在[swiper]((swiper))组件中，宽高自动设置为100%。\n\n",
            "attributes": [
                {
                    "name": "item-id",
                    "description": "*(string)*\n该 swiper-item 的标识符",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html"
                        }
                    ]
                },
                {
                    "name": "skip-hidden-item-layout",
                    "description": "*(boolean)*\n是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html"
                }
            ]
        },
        {
            "name": "swiper",
            "description": "\n(基础库 1.0.0+)\n\n滑块视图容器。其中只可放置[swiper-item]((swiper-item))组件，否则会导致未定义的行为。\n\n",
            "attributes": [
                {
                    "name": "indicator-dots",
                    "description": "*(boolean)*\n是否显示面板指示点",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "indicator-color",
                    "description": "*(color)*\n指示点颜色",
                    "attrType": "color",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "indicator-active-color",
                    "description": "*(color)*\n当前选中的指示点颜色",
                    "attrType": "color",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "autoplay",
                    "description": "*(boolean)*\n是否自动切换",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "current",
                    "description": "*(number)*\n当前所在滑块的 index",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "interval",
                    "description": "*(number)*\n自动切换时间间隔",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "duration",
                    "description": "*(number)*\n滑动动画时长",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "circular",
                    "description": "*(boolean)*\n是否采用衔接滑动",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "vertical",
                    "description": "*(boolean)*\n滑动方向是否为纵向",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "previous-margin",
                    "description": "*(string)*\n前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "next-margin",
                    "description": "*(string)*\n后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "snap-to-edge",
                    "description": "*(boolean)*\n当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "display-multiple-items",
                    "description": "*(number)*\n同时显示的滑块数量",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "easing-function",
                    "description": "*(string)*\n指定 swiper 切换缓动动画类型",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "default",
                            "description": "默认缓动函数",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                                }
                            ]
                        },
                        {
                            "name": "linear",
                            "description": "线性动画",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                                }
                            ]
                        },
                        {
                            "name": "easeInCubic",
                            "description": "缓入动画",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                                }
                            ]
                        },
                        {
                            "name": "easeOutCubic",
                            "description": "缓出动画",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                                }
                            ]
                        },
                        {
                            "name": "easeInOutCubic",
                            "description": "缓入缓出动画",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "bindchange",
                    "description": "*(eventhandle)*\ncurrent 改变时会触发 change 事件，event.detail = {current, source}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "bindtransition",
                    "description": "*(eventhandle)*\nswiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                },
                {
                    "name": "bindanimationfinish",
                    "description": "*(eventhandle)*\n动画结束时会触发 animationfinish 事件，event.detail 同上",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"
                }
            ]
        },
        {
            "name": "switch",
            "description": "\n(基础库 1.0.0+)\n\n开关选择器。\n\n",
            "attributes": [
                {
                    "name": "checked",
                    "description": "*(boolean)*\n是否选中",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
                        }
                    ]
                },
                {
                    "name": "type",
                    "description": "*(string)*\n样式，有效值：switch, checkbox",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
                        }
                    ]
                },
                {
                    "name": "color",
                    "description": "*(string)*\nswitch 的颜色，同 css 的 color",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
                        }
                    ]
                },
                {
                    "name": "bindchange",
                    "description": "*(eventhandle)*\nchecked 改变时触发 change 事件，event.detail={ value}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"
                }
            ]
        },
        {
            "name": "text",
            "description": "\n(基础库 1.0.0+)\n\n文本。\n\n",
            "attributes": [
                {
                    "name": "selectable",
                    "description": "*(boolean)*\n文本是否可选 (已废弃)",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                        }
                    ]
                },
                {
                    "name": "user-select",
                    "description": "*(boolean)*\n文本是否可选，该属性会使文本节点显示为 inline-block",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                        }
                    ]
                },
                {
                    "name": "space",
                    "description": "*(string)*\n显示连续空格",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "ensp",
                            "description": "中文字符空格一半大小",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                                }
                            ]
                        },
                        {
                            "name": "emsp",
                            "description": "中文字符空格大小",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                                }
                            ]
                        },
                        {
                            "name": "nbsp",
                            "description": "根据字体设置的空格大小",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "decode",
                    "description": "*(boolean)*\n是否解码",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/text.html"
                }
            ]
        },
        {
            "name": "textarea",
            "description": "\n(基础库 1.0.0+)\n\n多行输入框。该组件是[原生组件]((native-component))，使用时请注意相关限制。\n\n",
            "attributes": [
                {
                    "name": "value",
                    "description": "*(string)*\n输入框的内容",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "placeholder",
                    "description": "*(string)*\n输入框为空时占位符",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "placeholder-style",
                    "description": "*(string)*\n指定 placeholder 的样式，目前仅支持color,font-size和font-weight",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "placeholder-class",
                    "description": "*(string)*\n指定 placeholder 的样式类",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "disabled",
                    "description": "*(boolean)*\n是否禁用",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "maxlength",
                    "description": "*(number)*\n最大输入长度，设置为 -1 的时候不限制最大长度",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "auto-focus",
                    "description": "*(boolean)*\n自动聚焦，拉起键盘。",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "focus",
                    "description": "*(boolean)*\n获取焦点",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "auto-height",
                    "description": "*(boolean)*\n是否自动增高，设置auto-height时，style.height不生效",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "fixed",
                    "description": "*(boolean)*\n如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "cursor-spacing",
                    "description": "*(number)*\n指定光标与键盘的距离。取`textarea`距离底部的距离和`cursor-spacing`指定的距离的最小值作为光标与键盘的距离",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "cursor",
                    "description": "*(number)*\n指定focus时的光标位置",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "show-confirm-bar",
                    "description": "*(boolean)*\n是否显示键盘上方带有”完成“按钮那一栏",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "selection-start",
                    "description": "*(number)*\n光标起始位置，自动聚集时有效，需与`selection-end`搭配使用",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "selection-end",
                    "description": "*(number)*\n光标结束位置，自动聚集时有效，需与`selection-start`搭配使用",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "adjust-position",
                    "description": "*(boolean)*\n键盘弹起时，是否自动上推页面",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "hold-keyboard",
                    "description": "*(boolean)*\nfocus时，点击页面的时候不收起键盘",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "disable-default-padding",
                    "description": "*(boolean)*\n是否去掉 iOS 下的默认内边距",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "bindfocus",
                    "description": "*(eventhandle)*\n输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "bindblur",
                    "description": "*(eventhandle)*\n输入框失去焦点时触发，event.detail = {value, cursor}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "bindlinechange",
                    "description": "*(eventhandle)*\n输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "bindinput",
                    "description": "*(eventhandle)*\n当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。**bindinput 处理函数的返回值并不会反映到 textarea 上**",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "bindconfirm",
                    "description": "*(eventhandle)*\n点击完成时， 触发 confirm 事件，event.detail = {value: value}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                },
                {
                    "name": "bindkeyboardheightchange",
                    "description": "*(eventhandle)*\n键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"
                }
            ]
        },
        {
            "name": "video",
            "description": "\n(基础库 1.0.0+)\n\n视频（v2.4.0 起支持[同层渲染]((native-component#原生组件同层渲染))）。相关api：[wx.createVideoContext]((wx.createVideoContext))\n\n",
            "attributes": [
                {
                    "name": "src",
                    "description": "*(string)*\n要播放视频的资源地址，支持网络路径、本地临时路径、云文件ID（{%version('2.3.0')%}）",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "duration",
                    "description": "*(number)*\n指定视频时长",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "controls",
                    "description": "*(boolean)*\n是否显示默认播放控件（播放/暂停按钮、播放进度、时间）",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "danmu-list",
                    "description": "*(Array.&lt;object&gt;)*\n弹幕列表",
                    "attrType": "Array.&lt;object&gt;",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "danmu-btn",
                    "description": "*(boolean)*\n是否显示弹幕按钮，只在初始化时有效，不能动态变更",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "enable-danmu",
                    "description": "*(boolean)*\n是否展示弹幕，只在初始化时有效，不能动态变更",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "autoplay",
                    "description": "*(boolean)*\n是否自动播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "loop",
                    "description": "*(boolean)*\n是否循环播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "muted",
                    "description": "*(boolean)*\n是否静音播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "initial-time",
                    "description": "*(number)*\n指定视频初始播放位置",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "page-gesture",
                    "description": "*(boolean)*\n在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture）",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "direction",
                    "description": "*(number)*\n设置全屏时视频的方向，不指定则根据宽高比自动判断",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "0",
                            "description": "正常竖向",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        },
                        {
                            "name": "90",
                            "description": "屏幕逆时针90度",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "show-progress",
                    "description": "*(boolean)*\n若不设置，宽度大于240时才会显示",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "show-fullscreen-btn",
                    "description": "*(boolean)*\n是否显示全屏按钮",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "show-play-btn",
                    "description": "*(boolean)*\n是否显示视频底部控制栏的播放按钮",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "show-center-play-btn",
                    "description": "*(boolean)*\n是否显示视频中间的播放按钮",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "enable-progress-gesture",
                    "description": "*(boolean)*\n是否开启控制进度的手势",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "object-fit",
                    "description": "*(string)*\n当视频大小与 video 容器大小不一致时，视频的表现形式",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "contain",
                            "description": "包含",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        },
                        {
                            "name": "fill",
                            "description": "填充",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        },
                        {
                            "name": "cover",
                            "description": "覆盖",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "poster",
                    "description": "*(string)*\n视频封面的图片网络资源地址或云文件ID（{%version('2.3.0')%}）。若 controls 属性值为 false 则设置 poster 无效",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "show-mute-btn",
                    "description": "*(boolean)*\n是否显示静音按钮",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "title",
                    "description": "*(string)*\n视频的标题，全屏时在顶部展示",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "play-btn-position",
                    "description": "*(string)*\n播放按钮的位置",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "bottom",
                            "description": "controls bar上",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        },
                        {
                            "name": "center",
                            "description": "视频中间",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "enable-play-gesture",
                    "description": "*(boolean)*\n是否开启播放手势，即双击切换播放/暂停",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "auto-pause-if-navigate",
                    "description": "*(boolean)*\n当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "auto-pause-if-open-native",
                    "description": "*(boolean)*\n当跳转到其它微信原生页面时，是否自动暂停本页面的视频",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "vslide-gesture",
                    "description": "*(boolean)*\n在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "vslide-gesture-in-fullscreen",
                    "description": "*(boolean)*\n在全屏模式下，是否开启亮度与音量调节手势",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "ad-unit-id",
                    "description": "*(string)*\n视频前贴广告单元ID，更多详情可参考开放能力[视频前贴广告]((video-patch-ad))",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "poster-for-crawler",
                    "description": "*(string)*\n用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "show-casting-button",
                    "description": "*(boolean)*\n显示投屏按钮。只安卓且同层渲染下生效，支持 DLNA 协议",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "picture-in-picture-mode",
                    "description": "*(string/Array)*\n设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： [\"push\", \"pop\"]）",
                    "attrType": "string/Array",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ],
                    "values": [
                        {
                            "name": "[]",
                            "description": "取消小窗",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        },
                        {
                            "name": "push",
                            "description": "路由 push 时触发小窗",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        },
                        {
                            "name": "pop",
                            "description": "路由 pop 时触发小窗",
                            "references": [
                                {
                                    "name": "微信开放文档",
                                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "picture-in-picture-show-progress",
                    "description": "*(boolean)*\n是否在小窗模式下显示播放进度",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "enable-auto-rotation",
                    "description": "*(boolean)*\n是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "show-screen-lock-button",
                    "description": "*(boolean)*\n是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindplay",
                    "description": "*(eventhandle)*\n当开始/继续播放时触发play事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindpause",
                    "description": "*(eventhandle)*\n当暂停播放时触发 pause 事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindended",
                    "description": "*(eventhandle)*\n当播放到末尾时触发 ended 事件",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindtimeupdate",
                    "description": "*(eventhandle)*\n播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindfullscreenchange",
                    "description": "*(eventhandle)*\n视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindwaiting",
                    "description": "*(eventhandle)*\n视频出现缓冲时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n视频播放出错时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindprogress",
                    "description": "*(eventhandle)*\n加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindloadedmetadata",
                    "description": "*(eventhandle)*\n视频元数据加载完成时触发。event.detail = {width, height, duration}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindcontrolstoggle",
                    "description": "*(eventhandle)*\n切换 controls 显示隐藏时触发。event.detail = {show}",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindenterpictureinpicture",
                    "description": "*(eventhandler)*\n播放器进入小窗",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindleavepictureinpicture",
                    "description": "*(eventhandler)*\n播放器退出小窗",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                },
                {
                    "name": "bindseekcomplete",
                    "description": "*(eventhandler)*\nseek 完成时触发",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/video.html"
                }
            ]
        },
        {
            "name": "view",
            "description": "\n(基础库 1.0.0+)\n\n视图容器\n\n",
            "attributes": [
                {
                    "name": "hover-class",
                    "description": "*(string)*\n指定按下去的样式类。当 `hover-class=\"none\"` 时，没有点击态效果",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
                        }
                    ]
                },
                {
                    "name": "hover-stop-propagation",
                    "description": "*(boolean)*\n指定是否阻止本节点的祖先节点出现点击态",
                    "attrType": "boolean",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
                        }
                    ]
                },
                {
                    "name": "hover-start-time",
                    "description": "*(number)*\n按住后多久出现点击态，单位毫秒",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
                        }
                    ]
                },
                {
                    "name": "hover-stay-time",
                    "description": "*(number)*\n手指松开后点击态保留时间，单位毫秒",
                    "attrType": "number",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/view.html"
                }
            ]
        },
        {
            "name": "voip-room",
            "description": "\n(基础库 2.11.0+)\n\n多人音视频对话。需[用户授权]((open-ability/authorize)) `scope.camera`、`scope.record`。相关接口： [wx.joinVoIPChat]((wx.joinVoIPChat))\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。\n\n| 一级类目/主体类型 | 二级类目             | 小程序内容场景                           |\n| ----------------- | -------------------- | ---------------------------------------- |\n| 教育              | 在线视频课程         | 网课、在线培训、讲座等教育类直播         |\n| 医疗              | 互联网医院，公立医院 | 问诊、大型健康讲座等直播                 |\n| 医疗              | 私立医疗机构         | /                                        |\n| 金融              | 银行、信托、基金、证券/期货、证券、期货投资咨询、保险、征信业务、新三板信息服务平台、股票信息服务平台（港股/美股）、消费金融  | 金融产品视频客服理赔、金融产品推广直播等 |\n| 汽车              | 汽车预售服务         | 汽车预售、推广直播                       |\n| 政府主体帐号      | /                    | 政府相关工作推广直播、领导讲话直播等     |\n| IT 科技           | 多方通信             | 在线会议                                 |\n| IT 科技           | 硬件设备             | 智能硬件                                 |\n\n开通该组件权限后，开发者可在 `joinVoIPChat` 成功后，获取房间成员的 `openid`，传递给 `voip-room` 组件，以显示成员画面。\n\n",
            "attributes": [
                {
                    "name": "openid",
                    "description": "*(string)*\n进入房间用户的 openid",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html"
                        }
                    ]
                },
                {
                    "name": "mode",
                    "description": "*(string)*\n对话窗口类型，自身传入 camera，其它用户传入 video",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html"
                        }
                    ]
                },
                {
                    "name": "device-position",
                    "description": "*(string)*\n仅在 mode 为 camera 时有效，前置或后置，值为`front`, `back`",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandle)*\n创建对话窗口失败时触发",
                    "attrType": "eventhandle",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html"
                }
            ]
        },
        {
            "name": "web-view",
            "description": "\n(基础库 1.6.4+)\n\n承载网页的容器。会自动铺满整个小程序页面，**个人类型的小程序暂不支持使用。**\n\n客户端 6.7.2 版本开始，[`navigationStyle: custom`](../reference/configuration/app.md) 对 [web-view]((web-view)) 组件无效\n\n",
            "attributes": [
                {
                    "name": "src",
                    "description": "*(string)*\nwebview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录[小程序管理后台](https://mp.weixin.qq.com/)配置业务域名。",
                    "attrType": "string",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"
                        }
                    ]
                },
                {
                    "name": "bindmessage",
                    "description": "*(eventhandler)*\n网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data是多次 postMessage 的参数组成的数组",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"
                        }
                    ]
                },
                {
                    "name": "bindload",
                    "description": "*(eventhandler)*\n网页加载成功时候触发此事件。e.detail = { src }",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"
                        }
                    ]
                },
                {
                    "name": "binderror",
                    "description": "*(eventhandler)*\n网页加载失败的时候触发此事件。e.detail = { src }",
                    "attrType": "eventhandler",
                    "references": [
                        {
                            "name": "微信开放文档",
                            "url": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"
                }
            ]
        },
        {
            "name": "wxs",
            "description": {
                "kind": "markdown",
                "value": "WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。"
            },
            "attributes": [
                {
                    "name": "module",
                    "description": {
                        "kind": "markdown",
                        "value": "Module name of the script."
                    }
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/"
                }
            ]
        },
        {
            "name": "template",
            "description": {
                "kind": "markdown",
                "value": "WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。"
            },
            "attributes": [
                {
                    "name": "name",
                    "description": {
                        "kind": "markdown",
                        "value": "Name of the template."
                    }
                },
                {
                    "name": "id",
                    "description": {
                        "kind": "markdown",
                        "value": "Identify the template."
                    }
                },
                {
                    "name": "data",
                    "description": {
                        "kind": "markdown",
                        "value": "Datas of the template."
                    }
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/template.html"
                }
            ]
        },
        {
            "name": "import",
            "description": {
                "kind": "markdown",
                "value": "import可以在该文件中使用目标文件定义的template"
            },
            "attributes": [
                {
                    "name": "src",
                    "description": {
                        "kind": "markdown",
                        "value": "Src of the template."
                    }
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html"
                }
            ]
        },
        {
            "name": "include",
            "description": {
                "kind": "markdown",
                "value": "include 可以将目标文件除了 template/wxs 外的整个代码引入，相当于是拷贝到 include 位置"
            },
            "attributes": [
                {
                    "name": "src",
                    "description": {
                        "kind": "markdown",
                        "value": "Src of the template."
                    }
                }
            ],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html"
                }
            ]
        },
        {
            "name": "block",
            "description": {
                "kind": "markdown",
                "value": "block 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。"
            },
            "attributes": [],
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html"
                }
            ]
        }
    ],
    "globalAttributes": [
        {
            "name": "class",
            "description": {
                "kind": "markdown",
                "value": "全局属性 class 的值是一个以空格分隔的元素的类名（classes）列表，它允许通过类选择器 (class selectors) 或 DOM 方法来选择和访问特定的元素。尽管对 class 的命名没有要求，但 web 开发者最好使用可以表达元素语义目的的名称，而不是描述元素展现的名称（即使一个元素是斜体，但是 class 的命名也不应该是 italics）。语义化命名即使在页面展现发生改变时仍能合乎逻辑。"
            },
            "references": [
                {
                    "name": "MDN Reference",
                    "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class"
                }
            ]
        },
        {
            "name": "hidden",
            "description": {
                "kind": "markdown",
                "value": "确定元素是否隐藏的一个布尔值。"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html"
                }
            ]
        },
        {
            "name": "wx:if",
            "description": {
                "kind": "markdown",
                "value": "确定元素是否渲染的一个布尔值。"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html"
                }
            ]
        },
        {
            "name": "wx:for",
            "description": {
                "kind": "markdown",
                "value": "在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item。"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html"
                }
            ]
        },
        {
            "name": "id",
            "description": {
                "kind": "markdown",
                "value": "id 全局属性定义了一个全文档唯一的标识符 (ID)。它用于在链接（使用片段）、脚本和样式（通过 CSS）中辨识元素。id 的值不得包含空白字符（whitespace，包括空格和制表符等）。浏览器会将不符合规范的 ID 中的空白字符视为 ID 的一部分。与允许以空格分隔值的 class 属性不同，元素只能拥有一个 ID 值。"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/component.html"
                }
            ]
        },
        {
            "name": "style",
            "description": {
                "kind": "markdown",
                "value": "style 全局属性包含应用到元素的 CSS 样式声明。"
            },
            "references": [
                {
                    "name": "MDN Reference",
                    "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style"
                }
            ]
        },
        {
            "name": "bindtouchstart",
            "description": {
                "kind": "markdown",
                "value": "手指触摸动作开始"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchtouchstart",
            "description": {
                "kind": "markdown",
                "value": "手指触摸动作开始"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindtouchmove",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后移动"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchtouchmove",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后移动"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindtouchcancel",
            "description": {
                "kind": "markdown",
                "value": "手指触摸动作被打断，如来电提醒，弹窗"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchtouchcancel",
            "description": {
                "kind": "markdown",
                "value": "手指触摸动作被打断，如来电提醒，弹窗"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindtouchend",
            "description": {
                "kind": "markdown",
                "value": "手指触摸动作结束"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchtouchend",
            "description": {
                "kind": "markdown",
                "value": "手指触摸动作结束"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindtap",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后马上离开"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchtap",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后马上离开"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindlongpress",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchlongpress",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindlongtap",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后，超过350ms再离开（推荐使用longpress事件代替）"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchlongtap",
            "description": {
                "kind": "markdown",
                "value": "手指触摸后，超过350ms再离开（推荐使用longpress事件代替）"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindtransitionend",
            "description": {
                "kind": "markdown",
                "value": "会在 WXSS transition 或 wx.createAnimation 动画结束后触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchtransitionend",
            "description": {
                "kind": "markdown",
                "value": "会在 WXSS transition 或 wx.createAnimation 动画结束后触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindanimationstart",
            "description": {
                "kind": "markdown",
                "value": "会在一个 WXSS animation 动画开始时触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchanimationstart",
            "description": {
                "kind": "markdown",
                "value": "会在一个 WXSS animation 动画开始时触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindanimationiteration",
            "description": {
                "kind": "markdown",
                "value": "会在一个 WXSS animation 一次迭代结束时触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchanimationiteration",
            "description": {
                "kind": "markdown",
                "value": "会在一个 WXSS animation 一次迭代结束时触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindanimationend",
            "description": {
                "kind": "markdown",
                "value": "会在一个 WXSS animation 动画完成时触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchanimationend",
            "description": {
                "kind": "markdown",
                "value": "会在一个 WXSS animation 动画完成时触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "bindtouchforcechange",
            "description": {
                "kind": "markdown",
                "value": "在支持 3D Touch 的 iPhone 设备，重按时会触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        },
        {
            "name": "catchtouchforcechange",
            "description": {
                "kind": "markdown",
                "value": "在支持 3D Touch 的 iPhone 设备，重按时会触发"
            },
            "references": [
                {
                    "name": "微信开放文档",
                    "url": "https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"
                }
            ],
            "attrType": "eventhandle"
        }
    ]
};
//# sourceMappingURL=datas.js.map