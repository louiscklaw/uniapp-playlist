(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[3807],{70811:function(t,e,n){var i=n(80081);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=n(56).Z;a("cc1304b0",i,!0,{sourceMap:!1,shadowMode:!1})},74201:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var i,a={pageHead:n(91742).Z},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"text-box",attrs:{"scroll-y":"true"}},[n("v-uni-text",[t._v(t._s(t.text))])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary",disabled:!t.canAdd},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("add line")]),n("v-uni-button",{attrs:{type:"warn",disabled:!t.canRemove},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove.apply(void 0,arguments)}}},[t._v("remove line")])],1)],1)],1)},r=[],l=(n(70560),{data:function(){return{title:"text",texts:["HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","HBuilder，400万开发者选择的IDE","MUI，轻巧、漂亮的前端开源框架","wap2app，M站快速转换原生体验的App","5+Runtime，为HTML5插上原生的翅膀","HBuilderX，轻巧、极速，极客编辑器","uni-app，终极跨平台方案","......"],text:"",canAdd:!0,canRemove:!1,extraLine:[]}},methods:{add:function(t){this.extraLine.push(this.texts[this.extraLine.length%12]),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0},remove:function(t){this.extraLine.length>0&&(this.extraLine.pop(),this.text=this.extraLine.join("\n"),this.canAdd=this.extraLine.length<12,this.canRemove=this.extraLine.length>0)}}}),o=l,u=(n(70811),n(69453)),c=(0,u.Z)(o,s,r,!1,null,"56512c15",null,!1,a,i),d=c.exports},80081:function(t,e,n){"use strict";n.r(e);var i=n(43481),a=n.n(i),s=n(2400),r=n.n(s),l=r()(a());l.push([t.id,".text-box[data-v-56512c15]{margin-bottom:%?40?%;padding:%?40?% 0;display:flex;min-height:%?300?%;background-color:#fff;justify-content:center;align-items:center;text-align:center;font-size:%?30?%;color:#353535;line-height:1.8}",""]),e["default"]=l}}]);