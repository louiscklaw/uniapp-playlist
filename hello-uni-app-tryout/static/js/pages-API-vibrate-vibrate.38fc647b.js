(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[9006],{36800:function(t,n,i){var s=i(81687);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var a=i(56).Z;a("34f2c362",s,!0,{sourceMap:!1,shadowMode:!1})},83509:function(t,n,i){"use strict";i.r(n),i.d(n,{default:function(){return v}});var s,a={pageHead:i(91742).Z},e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.longshock.apply(void 0,arguments)}}},[t._v("长震动")]),i("v-uni-button",{staticClass:"uni-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shortshock.apply(void 0,arguments)}}},[t._v("短震动")]),i("v-uni-view",{staticClass:"uni-tips"},[i("v-uni-view",[t._v("Tips")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上只有长震动，没有短震动")]),i("v-uni-view",{staticClass:"uni-tips-text"},[t._v("iOS上需要手机设置“打开响铃时震动”或“静音时震动”，否则无法震动")])],1)],1)],1)},o=[],u={data:function(){return{title:"vibrateLong/vibrateShort"}},onLoad:function(){},methods:{longshock:function(){uni.vibrateLong({success:function(){console.log("success")}})},shortshock:function(){uni.vibrateShort({success:function(){console.log("success")}})}}},c=u,l=(i(36800),i(69453)),r=(0,l.Z)(c,e,o,!1,null,"483bb262",null,!1,a,s),v=r.exports},81687:function(t,n,i){"use strict";i.r(n);var s=i(43481),a=i.n(s),e=i(2400),o=i.n(e),u=o()(a());u.push([t.id,".uni-padding-wrap[data-v-483bb262]{margin-top:%?50?% 0}.uni-button[data-v-483bb262]{margin:%?30?% 0}.uni-tips[data-v-483bb262]{color:#666;font-size:%?30?%}.uni-tips-text[data-v-483bb262]{margin-top:%?15?%;line-height:1.2;font-size:%?24?%}",""]),n["default"]=u}}]);