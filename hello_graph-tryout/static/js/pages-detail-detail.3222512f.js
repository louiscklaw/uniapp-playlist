(self["webpackChunkhello_graph_tryout"]=self["webpackChunkhello_graph_tryout"]||[]).push([[519],{8799:function(e,t,i){var n=i(3545);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var a=i(56).Z;a("46e5cccd",n,!0,{sourceMap:!1,shadowMode:!1})},1102:function(e,t,i){"use strict";var n;i.r(t),i.d(t,{default:function(){return l}});var a,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"index"},[i("v-uni-swiper",{style:{height:e.screenHeight+"px"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swpierChange.apply(void 0,arguments)}}},e._l(e.data,(function(t,n){return i("v-uni-swiper-item",{key:t,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.preImg(n)}}},[i("v-uni-image",{attrs:{src:t,mode:"widthFix"}})],1)})),1)],1)},s=[],c=(i(9358),i(560),i(4338),{data:function(){return{imgShow:!1,index:0,showBtn:!1,screenHeight:0,imgLength:0,providerList:[],data:[],detailDec:""}},onLoad:function(e){var t=this;this.screenHeight=uni.getSystemInfoSync().windowHeight,this.detailDec=e.data;var i=JSON.parse(decodeURIComponent(e.data));this.imgLength=i.img_num,this.data.push(i.img_src),this.getData(i.id),uni.setNavigationBarTitle({title:"1/"+this.imgLength}),uni.getProvider({service:"share",success:function(e){for(var i=[],n=0;n<e.provider.length;n++)switch(e.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}t.providerList=i},fail:function(e){console.log("获取登录通道失败",e)}})},onShareAppMessage:function(){return{title:"欢迎使用uni-app看图模板",path:"/pages/detail/detail?data="+this.detailDec,imageUrl:this.data[this.index]}},onNavigationBarButtonTap:function(e){0===e.index&&this.collect()},methods:{download:function(){uni.downloadFile({url:this.data[this.index],success:function(e){uni.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){uni.showToast({icon:"none",title:"已保存到手机相册"})},fail:function(){uni.showToast({icon:"none",title:"保存到手机相册失败"})}})},fail:function(e){uni.showModal({content:"下载失败，"+e.errMsg,showCancel:!1})}})},collect:function(){uni.showToast({icon:"none",title:"点击收藏按钮"})},swpierChange:function(e){this.index=e.detail.current,uni.setNavigationBarTitle({title:e.detail.current+1+"/"+this.imgLength})},preImg:function(e){var t=this;this.imgShow||(this.imgShow=!0,setTimeout((function(){t.imgShow=!1}),1e3),setTimeout((function(){uni.previewImage({current:t.data[e],urls:t.data})}),150))},getData:function(e){var t=this;uni.request({url:this.$serverUrl+"/api/picture/detail.php?id="+e,success:function(e){0===e.data.code?t.data=t.data.concat(e.data.data):uni.showModal({content:"请求失败，失败原因："+e.data.msg,showCancel:!1})},fail:function(){uni.showModal({content:"请求失败，请重试!",showCancel:!1})}})}}}),u=c,r=(i(8799),i(9453)),d=(0,r.Z)(u,o,s,!1,null,"df2e5fec",null,!1,n,a),l=d.exports},3545:function(e,t,i){"use strict";i.r(t);var n=i(3481),a=i.n(n),o=i(2400),s=i.n(o),c=s()(a());c.push([e.id,"uni-page-body[data-v-df2e5fec]{background-color:#000;height:100%}body.?%PAGE?%[data-v-df2e5fec]{background-color:#000}uni-swiper[data-v-df2e5fec]{flex:1;width:%?750?%;background-color:#000;display:flex;flex-direction:column}uni-swiper-item[data-v-df2e5fec]{display:flex;align-items:center}uni-image[data-v-df2e5fec]{width:%?750?%;height:%?1125?%}",""]),t["default"]=c}}]);