(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coursedetail-livevideo"],{"03ee":function(t,e,i){"use strict";i.r(e);var n=i("7072"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1d14":function(t,e,i){var n=i("81cb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7719f903",n,!0,{sourceMap:!1,shadowMode:!1})},7072:function(t,e,i){"use strict";(function(t){var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("e7d8")),o=i("a129"),r={data:function(){return{zhiboFlag:12,url:"",time:0,videoheight:"800px",boxStyle:{height:0,width:"750rpx"},animationData:{},praiseFlag:"0",courseName:"",courseId:"",flag:!1,page:"",tabid:"",state:""}},onLoad:function(t){this.courseId=JSON.parse(decodeURIComponent(t.courseId)),this.flagpage=t.flagpage,this.page=t.page,this.tabid=t.tabid,this.state=t.state,this.getPlayingDetail(this.courseId),(0,o.analysis)()},onUnload:function(){this.animationData={}},onShow:function(){var t=uni.getSystemInfoSync().windowHeight;this.boxStyle.height=t+"px";var e=uni.createAnimation({duration:1e3,timingFunction:"ease"});this.animation=e},methods:{praiseMe:function(e){var i=this,n={courseId:e};a.default.courseLike(n).then((function(e){if(t.log(e),"2000000"!=e.status)return uni.showToast({title:e.msg,icon:"none"}),!1;uni.showToast({title:"点赞成功",icon:"none"}),i.animation.translateX(50).translateY(-110).opacity(1).step({duration:900}),i.animationData=i.animation.export(),setTimeout((function(){i.animation.translateX(0).translateY(0).opacity(0).step({duration:0}),i.animationData=i.animation.export()}),600),i.praiseFlag="1"}))},closevideo:function(){"list"===this.flagpage?uni.reLaunch({url:"../course/list?page="+this.page}):"index"===this.flagpage?uni.reLaunch({url:"../index/index?page="+this.page}):"detail"===this.flagpage&&uni.reLaunch({url:"./detail?id="+this.courseId+"&page="+this.page+"&tabid="+this.tabid+"&state="+this.state})},endvideo:function(){uni.navigateBack({delta:1})},getPlayingDetail:function(e){var i=this;a.default.getPlayingDetail({courseId:e}).then((function(e){if(t.log(e),"2000000"!=e.status)return uni.showToast({title:e.msg,icon:"none"}),!1;var n=e.data;i.zhiboFlag=n.courseState,"12"===n.courseState?i.url=n.courseLiveUrl:"13"===n.courseState&&(i.url=n.coursePlaybackUrl),i.courseName=n.courseName,i.praiseFlag=n.isLike,i.flag=!0}))}}};e.default=r}).call(this,i("5a52")["default"])},7169:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("276c")),o=n(i("e954")),r=(n(i("e143")),function(){function e(){(0,a.default)(this,e)}return(0,o.default)(e,[{key:"http",value:function(e,i,n){t.log("heetp data",i),uni.showLoading({mask:!0});var a="/xgk-gz",o=uni.getStorageSync("token")||"";return t.log("token==="+o),new Promise((function(t,r){uni.request({url:"".concat(a).concat(e),data:i,method:n,header:{"X-CSRF-TOKEN":o,"X-Requested-With":"XMLHttpRequest"},success:function(e){"401"!=e.statusCode?"200"==e.statusCode?t(e.data):uni.showToast({title:"系统开小差了~",icon:"none"}):uni.showToast({title:"token 失效，请重新登陆",icon:"none"})},fail:function(t){uni.showToast({title:"请求失败",icon:"none"},2e3)},complete:function(){uni.hideLoading()}})}))}}]),e}());e.default=r}).call(this,i("5a52")["default"])},"81cb":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.live-state[data-v-2514b047]{position:absolute;top:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.live-title[data-v-2514b047]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?4?% %?30?%;background-color:rgba(0,0,0,.3);border-radius:%?70?%}.live-title .state[data-v-2514b047]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?30?%}.state .dot[data-v-2514b047]{margin-right:%?20?%;color:#4ecb24;text-transform:uppercase;font-size:%?34?%}.state .dot[data-v-2514b047]::before{display:inline-block;content:"";width:%?22?%;height:%?22?%;margin-right:%?20?%;background-color:#4ecb24;border-radius:50%;vertical-align:center}.state uni-image[data-v-2514b047]{width:%?32?%;height:%?28?%}.live-text[data-v-2514b047]{max-width:%?450?%;font-size:%?34?%;color:#fff}.live-right uni-image[data-v-2514b047]{width:%?80?%;height:%?80?%}.close[data-v-2514b047]{width:%?60?%;height:%?60?%;background-color:rgba(0,0,0,.3);border-radius:50%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.close uni-image[data-v-2514b047]{width:%?25?%;height:%?25?%}.great[data-v-2514b047]{position:absolute;bottom:%?16?%;right:%?40?%}.great .great-font[data-v-2514b047]{padding:%?10?% %?30?%;background-color:#ff4117;color:#fff;border-radius:%?20?%}.praise-me[data-v-2514b047]{font-weight:600;font-size:%?38?%;color:#ff4117}.animation-opacity[data-v-2514b047]{font-weight:700;opacity:0}.great-icon[data-v-2514b047]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?160?%;height:%?100?%;margin:0 auto;\n\t/* margin-bottom: -12rpx; */\n\t/* background-color: #FFFFFF; */border-radius:50%;text-align:center}.algreat-icon[data-v-2514b047]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?120?%;height:%?100?%;margin:0 auto;\n\t/* margin-bottom: -12rpx; */\n\t/* background-color: #FFFFFF; */border-radius:50%;text-align:center}.great-icon-img[data-v-2514b047]{width:100%}.text-orangered[data-v-2514b047]{color:#ff4117}',""]),t.exports=e},"8b56":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"view-root"},[t.flag?i("v-uni-video",{ref:"myVideos",style:t.boxStyle,attrs:{id:"myVideo",src:t.url,"enable-progress-gesture":!1,"page-gesture":!1,controls:"12"!==t.zhiboFlag,"show-fullscreen-btn":"12"!==t.zhiboFlag,"show-center-play-btn":"12"!==t.zhiboFlag,autoplay:!0,"object-fit":"contain"},on:{ended:function(e){arguments[0]=e=t.$handleEvent(e),t.endvideo.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"live-state"},[i("v-uni-view",{staticClass:"live-title clearfix"},[i("v-uni-view",{staticClass:"live-left"},[i("v-uni-view",{staticClass:"state"},[12===t.zhiboFlag?i("v-uni-view",{staticClass:"dot"},[t._v("live")]):t._e(),i("v-uni-image",{attrs:{src:"/static/img/live/live.png",mode:""}})],1),i("v-uni-view",{staticClass:"live-text"},[t._v(t._s(t.courseName))])],1),i("v-uni-view",{staticClass:"live-right"},[i("v-uni-image",{attrs:{src:"/static/img/live/livestate.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closevideo.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/img/live/close.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"great"},["0"===t.praiseFlag||null===t.praiseFlag?i("v-uni-view",{staticClass:"great-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.praiseMe(t.courseId)}}},[i("v-uni-view",{staticClass:"great-icon-img"},[i("v-uni-image",{attrs:{src:"/static/img/detail/praise.png",mode:"aspectFit"}})],1)],1):t._e(),"1"===t.praiseFlag?i("v-uni-view",{staticClass:"algreat-icon"},[i("v-uni-view",{staticClass:"great-icon-img"},[i("v-uni-image",{attrs:{src:"/static/img/detail/alpraise.png",mode:"aspectFit"}})],1)],1):t._e(),i("v-uni-view",{staticClass:"praise-me animation-opacity",attrs:{animation:t.animationData}},[t._v("+1")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},a129:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.auth=o,e.analysis=r;var a=n(i("e7d8"));i("de8c");function o(t){a.default.isAuth({open_id:t}).then((function(e){if("2000000"===e.status){var i=e.data,n=i.isAuth;if("1"===n)a.default.auth({open_id:t}).then((function(t){if(0===t.status){var e=t.data.data,i=e.token;uni.setStorageSync("token",i),uni.hideLoading()}else uni.showToast({title:"网络错误auth~",icon:"none"}),uni.hideLoading()}));else{var o=i.authUrl;window.location.href=o,uni.hideLoading()}}else uni.showToast({title:"请先登录~"})}))}function r(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?752b4121e4f0f62558b88caed08e0770";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}},b6ae:function(t,e,i){"use strict";var n=i("1d14"),a=i.n(n);a.a},ce8b:function(t,e,i){"use strict";i.r(e);var n=i("8b56"),a=i("03ee");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b6ae");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2514b047",null,!1,n["a"],r);e["default"]=u.exports},de8c:function(t,e,i){"use strict";i("d3b7"),i("acd8"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("5319"),i("841c"),i("1276"),i("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.GetQueryString=u,e.default=void 0;var n={isCardNo:function(t){var e=t.length;if(e<15||e>18)return uni.showToast({title:"输入的身份证号码长度不正确定！应为15位或18位",icon:"none"}),!1;var i=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,n=/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/,a=i.test(t)||n.test(t);return 0==a?(uni.showToast({title:"输入的身份证号格式不正确",icon:"none"}),!1):a},checkWord:function(t){var e=/^[A-Za-z0-9]+$/,i=e.test(t);return i},getUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){return("x"===t?16*Math.random()|0:8).toString(16)}))},compareDate:function(t,e){var i=new Date(t),n=new Date(e);return!(i.getTime()-n.getTime()>0)},checkIntNumber:function(t){return null==t||""==t?(uni.showToast({title:"请输入所在班级",icon:"none"}),!1):/(^[1-9]\d*$)/.test(t)?!(t>=100)||(uni.showToast({title:"班级必须小于100",icon:"none"}),!1):(uni.showToast({title:"请输入小于100的正整数",icon:"none"}),!1)},isEmpty:function(t){var e=t.replace(/(^\s*)|(\s*$)/g,"");return""==e||e.length<=0||null==t},specialChar:function(t){var e=/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;return!!e.test(t)},specialCharExcept:function(t){var e=/[`~!@#$%^&*_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*——\-+={}|《》？：“”【】、；‘'，。、]/im;return!!e.test(t)},checkCard:function(t){if(""==t||void 0==t||null==t||t.length>0&&0==t.trim().length)return uni.showToast({title:"身份证号码不能为空",icon:"none"}),!1;if(15==t.length)return!!o(t)||(uni.showToast({title:"请输入正确的身份证",icon:"none"}),!1);if(18==t.length){var e=t.split("");return!(!r(t)||!s(e))||(uni.showToast({title:"请输入正确的身份证",icon:"none"}),!1)}return uni.showToast({title:"身份证长度不正确",icon:"none"}),!1},checkPhone:function(t){var e=/^((13[0-9]|14[56789]|15[0-3,5-9]|16[5-6]|17[012345678]|18[0-9]|19[189])\d{8})$/;return""==t||void 0==t||null==t||t.length>0&&0==t.trim().length?(uni.showToast({title:"紧急联络人联系方式不能为空",icon:"none"}),!1):!!e.test(t)||(uni.showToast({title:"紧急联络人联系方式不合法",icon:"none"}),!1)},guid:function(){return a()+a()+a()+a()+a()+a()+a()+a()}};function a(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function o(t){var e=t.substring(6,8),i=t.substring(8,10),n=t.substring(10,12),a=new Date(e,parseFloat(i)-1,parseFloat(n));return a.getYear()==parseFloat(e)&&a.getMonth()==parseFloat(i)-1&&a.getDate()==parseFloat(n)}function r(t){var e=t.substring(6,10),i=t.substring(10,12),n=t.substring(12,14),a=new Date(e,parseFloat(i)-1,parseFloat(n));return a.getFullYear()==parseFloat(e)&&a.getMonth()==parseFloat(i)-1&&a.getDate()==parseFloat(n)}function s(t){var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],i=[1,0,10,9,8,7,6,5,4,3,2],n=0;"x"==t[17].toLowerCase()&&(t[17]=10);for(var a=0;a<17;a++)n+=e[a]*t[a];var o=n%11;return t[17]==i[o]}function u(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!=i?unescape(i[2]):null}e.default=n},e7d8:function(t,e,i){"use strict";var n=i("ee27");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("7169")),o=(new a.default).http,r=new Date,s=(r.getTime().toString(),{getIndexCourse:function(t){return o("/course/index",t,"GET")},getAllCourse:function(t){return o("/course/list",t,"GET")},getMyCourse:function(t){return o("/usercourse/myCourseList",t,"GET")},getDetail:function(t){return o("/course/courseDetail",t,"GET")},appointment:function(t){return o("/usercourse/appointment",t,"POST")},isAuth:function(t){return o("/icity/auth",t,"GET")},auth:function(t){return o("/sso/icity/authorize",t,"GET")},courseLike:function(t){return o("/course/like",t,"GET")},myIcityInfo:function(t){return o("/myInfo/myIcityInfo",t,"GET")},getPlayingDetail:function(t){return o("/course/enterPlaying",t,"GET")}});e.default=s}}]);