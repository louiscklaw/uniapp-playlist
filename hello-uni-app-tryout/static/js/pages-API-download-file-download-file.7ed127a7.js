(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[5385],{25994:function(e,t,i){var n=i(46232);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var a=i(56).Z;a("3511aedd",n,!0,{sourceMap:!1,shadowMode:!1})},17895:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n,a={pageHead:i(91742).Z},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e.imageSrc?i("v-uni-view",{staticClass:"image-container"},[i("v-uni-image",{staticClass:"img",attrs:{src:e.imageSrc,mode:"center"}})],1):[i("v-uni-view",{staticClass:"uni-hello-text"},[e._v("点击按钮下载服务端示例图片（下载网络文件到本地临时目录）")]),i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.downloadImage.apply(void 0,arguments)}}},[e._v("下载")])],1)]],2)],1)},s=[],l={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){uni.showLoading({title:"下载中"});var e=this;uni.downloadFile({url:"https://web-assets.dcloud.net.cn/unidoc/zh/uni-app.png",success:function(t){console.log("downloadFile success, res is",t),e.imageSrc=t.tempFilePath,uni.hideLoading()},fail:function(e){console.log("downloadFile fail, err is:",e)}})}}},u=l,c=(i(25994),i(69453)),r=(0,c.Z)(u,o,s,!1,null,"ba51b6e0",null,!1,a,n),d=r.exports},46232:function(e,t,i){"use strict";i.r(t);var n=i(43481),a=i.n(n),o=i(2400),s=i.n(o),l=s()(a());l.push([e.id,".img[data-v-ba51b6e0]{width:%?500?%;height:%?500?%;margin:0 auto}.image-container[data-v-ba51b6e0]{display:flex;justify-content:center;align-items:center}",""]),t["default"]=l}}]);