(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[5920],{31125:function(t,n,e){var i=e(12786);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=e(56).Z;a("3c934d06",i,!0,{sourceMap:!1,shadowMode:!1})},47925:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return p}});var i,a={uniCard:e(54074).Z,uniSection:e(46726).Z,uniPagination:e(80455).Z},s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[e("v-uni-text",{staticClass:"uni-h6"},[t._v("分页器组件，用于展示页码、请求数据等")])],1),e("uni-section",{attrs:{title:"默认样式",type:"line",padding:!0}},[e("uni-pagination",{attrs:{total:50,title:"标题文字"}})],1),e("uni-section",{attrs:{title:"修改按钮文字",subTitle:"使用 prev-text / next-text 属性修改按钮文字",type:"line",padding:!0}},[e("uni-pagination",{attrs:{total:50,title:"标题文字","prev-text":"前一页","next-text":"后一页"}})],1),e("uni-section",{attrs:{title:"图标样式",subTitle:"使用 show-icon 属性显示图标按钮",type:"line",padding:!0}},[e("uni-pagination",{attrs:{"show-icon":!0,total:50,title:"标题文字"}})],1),e("uni-section",{attrs:{title:"修改数据长度",type:"line",padding:!0}},[e("uni-pagination",{attrs:{current:t.current,total:t.total,pageSize:20,title:"标题文字","show-icon":!0},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"btn-view"},[e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("当前页："+t._s(t.current)+"，数据总量："+t._s(t.total)+"条，每页数据："+t._s(t.pageSize))])],1),e("v-uni-view",{staticClass:"btn-flex"},[e("v-uni-button",{staticClass:"button word-btn",attrs:{"hover-class":"word-btn--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.add.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"word-btn-white"},[t._v("增加10条数据")])],1),e("v-uni-button",{staticClass:"button",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reset.apply(void 0,arguments)}}},[t._v("重置数据")])],1)],1)],1)],1)},o=[],l={components:{},data:function(){return{current:3,total:10,pageSize:10}},mounted:function(){var t=this;setTimeout((function(){t.current=5}),3e3)},methods:{add:function(){this.total+=10},reset:function(){this.total=0,this.current=1},change:function(t){console.log(t),this.current=t.current}}},u=l,r=(e(31125),e(69453)),c=(0,r.Z)(u,s,o,!1,null,"9451f3f4",null,!1,a,i),p=c.exports},12786:function(t,n,e){"use strict";e.r(n);var i=e(43481),a=e.n(i),s=e(2400),o=e.n(s),l=o()(a());l.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.example-body[data-v-9451f3f4]{display:block}.btn-view[data-v-9451f3f4]{display:flex;flex-direction:column;padding:15px;text-align:center;background-color:#fff;justify-content:center;align-items:center}.btn-flex[data-v-9451f3f4]{display:flex;flex-direction:row;justify-content:center;align-items:center}.button[data-v-9451f3f4]{margin:20px;width:150px;font-size:14px;color:#333}',""]),n["default"]=l}}]);