"use strict";(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[6703],{29884:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var s,i={pageHead:n(91742).Z},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-hello-text"},[t._v("请点击按钮向服务器发起请求")]),n("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[n("v-uni-textarea",{attrs:{value:t.res}})],1),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendRequest.apply(void 0,arguments)}}},[t._v("发起请求（Callback）")]),n("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendRequest("promise")}}},[t._v("发起请求（Promise）")]),n("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendRequest("await")}}},[t._v("发起请求（Async/Await）")])],1)],1)],1)},o=[],u=n(66407),r=n(89029),c=n(4587),l=(n(48324),"https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app"),d=2e3,h={data:function(){return{title:"request",loading:!1,res:""}},methods:{sendRequest:function(t){switch(this.loading=!0,t){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var t=this;uni.request({url:l,dataType:"text",data:{noncestr:Date.now()},success:function(e){console.log("request success",e),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:d}),t.res="请求结果 : "+JSON.stringify(e)},fail:function(t){console.log("request fail",t),uni.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})},_requestPromise:function(){var t=this;uni.request({url:l,dataType:"text",data:{noncestr:Date.now()}}).then((function(e){console.log("request success",e[1]),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:d}),t.res="请求结果 : "+JSON.stringify(e[1]),t.loading=!1})).catch((function(e){console.log("request fail",e),uni.showModal({content:e.errMsg,showCancel:!1}),t.loading=!1}))},_requestAwait:function(){var t=this;return(0,c.Z)((0,u.Z)().mark((function e(){var n,s,i,a;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.request({url:l,dataType:"text",data:{noncestr:Date.now()}});case 2:i=e.sent,a=(0,r.Z)(i,2),s=a[0],n=a[1],s?(console.log("request fail",s),uni.showModal({content:s.errMsg,showCancel:!1})):(console.log("request success",n),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:d}),t.res="请求结果 : "+JSON.stringify(n)),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}},p=h,v=n(69453),f=(0,v.Z)(p,a,o,!1,null,null,null,!1,i,s),w=f.exports}}]);