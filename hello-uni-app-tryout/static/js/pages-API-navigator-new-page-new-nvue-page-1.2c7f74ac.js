(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[6370],{44444:function(t,e,n){var a=n(67250);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var o=n(56).Z;o("3027a8d3",a,!0,{sourceMap:!1,shadowMode:!1})},47554:function(t,e,n){"use strict";var a;n.r(e),n.d(e,{default:function(){return d}});var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToNvue.apply(void 0,arguments)}}},[t._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToVue.apply(void 0,arguments)}}},[t._v("跳转VUE页面")])],1)],1)],1)},u=[],l=n(41541),c=n(80843),s={data:function(){return{}},computed:(0,l.Z)((0,l.Z)({},(0,c.mapState)(["colorIndex","colorList"])),(0,c.mapGetters)(["currentColor"])),methods:(0,l.Z)((0,l.Z)({},(0,c.mapMutations)(["setColorIndex"])),{},{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})},r=s,p=(n(44444),n(69453)),v=(0,p.Z)(r,i,u,!1,null,"96417b38",null,!1,a,o),d=v.exports},67250:function(t,e,n){"use strict";n.r(e);var a=n(43481),o=n.n(a),i=n(2400),u=n.n(i),l=u()(o());l.push([t.id,".new-page__text[data-v-96417b38]{font-size:14px;color:#666}.root[data-v-96417b38]{flex-direction:column}.page-body[data-v-96417b38]{flex:1;flex-direction:column;justify-content:flex-start;align-items:center;padding-top:50px}.new-page__text-box[data-v-96417b38]{padding:20px}.new-page__color[data-v-96417b38]{width:200px;height:100px;justify-content:center;align-items:center}.new-page__color-text[data-v-96417b38]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-96417b38]{margin-top:15px;width:300px}",""]),e["default"]=l}}]);