(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[6203],{91962:function(e,t,i){var a=i(11402);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var n=i(56).Z;n("07087e56",a,!0,{sourceMap:!1,shadowMode:!1})},4779:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var a,n={pageHead:i(91742).Z},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e.tempFilePath?[i("v-uni-image",{staticClass:"image",attrs:{src:e.tempFilePath,mode:"aspectFit"}})]:e._e(),!e.tempFilePath&&e.savedFilePath?[i("v-uni-image",{staticClass:"image",attrs:{src:e.savedFilePath,mode:"aspectFit"}})]:e._e(),e.tempFilePath||e.savedFilePath?e._e():[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 请选择文件")])],i("v-uni-view",{staticClass:"uni-btn-v"},[i("v-uni-button",{staticClass:"btn-savefile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveFile.apply(void 0,arguments)}}},[e._v("保存文件")]),i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._v("删除文件")])],1),i("v-uni-view",{staticClass:"btn-area"},[i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDocument.apply(void 0,arguments)}}},[e._v("打开pdf文件")])],1)],2)],1)},l=[],o=(i(48324),{data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0]},fail:function(e){}})},saveFile:function(){var e=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(t){e.savedFilePath=t.savedFilePath,uni.setStorageSync("savedFilePath",t.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(e){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(e),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://web-assets.dcloud.net.cn/unidoc/zh/helloworld.pdf",success:function(e){uni.openDocument({filePath:e.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}}),c=o,u=(i(91962),i(69453)),h=(0,u.Z)(c,s,l,!1,null,"75f2ce26",null,!1,n,a),d=h.exports},11402:function(e,t,i){"use strict";i.r(t);var a=i(43481),n=i.n(a),s=i(2400),l=i.n(s),o=l()(n());o.push([e.id,".image[data-v-75f2ce26]{width:100%;height:%?360?%}.btn-savefile[data-v-75f2ce26]{background-color:#007aff;color:#fff}",""]),t["default"]=o}}]);