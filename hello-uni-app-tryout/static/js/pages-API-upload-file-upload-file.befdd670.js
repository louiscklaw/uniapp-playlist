(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[8232],{59219:function(e,a,i){var t=i(61779);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var o=i(56).Z;o("0f65b0dc",t,!0,{sourceMap:!1,shadowMode:!1})},67333:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return r}});var t,o={pageHead:i(91742).Z},s=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"demo"},[e.imageSrc?[i("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[i("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},n=[],c={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(a){console.log("chooseImage success, temp path is",a.tempFilePaths[0]);var i=a.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:i,fileType:"image",name:"data",success:function(a){console.log("uploadImage success, res is:",a),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),e.imageSrc=i},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}},l=c,u=(i(59219),i(69453)),d=(0,u.Z)(l,s,n,!1,null,"789a2834",null,!1,o,t),r=d.exports},61779:function(e,a,i){"use strict";i.r(a);var t=i(43481),o=i.n(t),s=i(2400),n=i.n(s),c=n()(o());c.push([e.id,".image[data-v-789a2834]{width:100%}.demo[data-v-789a2834]{background:#fff;padding:%?50?%}",""]),a["default"]=c}}]);