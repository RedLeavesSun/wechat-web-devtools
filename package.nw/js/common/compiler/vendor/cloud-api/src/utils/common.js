"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dateToStr=exports.strToDate=void 0;const moment=require("moment");function strToDate(t){return moment(t).utcOffset(480,!0).toDate().getTime()}function dateToStr(t,e="YYYY-MM-DD HH:mm:ss"){return moment(t).utcOffset(480,!0).format(e)}moment.locale("zh-cn"),exports.strToDate=strToDate,exports.dateToStr=dateToStr;