(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[6256],{62540:function(t,i,n){var e=n(60656);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);var a=n(56).Z;a("0059138f",e,!0,{sourceMap:!1,shadowMode:!1})},3702:function(t,i,n){"use strict";n.r(i),n.d(i,{default:function(){return f}});var e,a={uniNavBar:n(78111).Z,uniCard:n(54074).Z,uniSection:n(46726).Z,uniIcons:n(37446).Z},s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"container"},[n("uni-nav-bar",{attrs:{dark:!0,fixed:!0,shadow:!0,"background-color":"#007AFF","status-bar":!0,"left-icon":"left","left-text":"返回",title:"自定义导航栏"},on:{clickLeft:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}}),n("uni-card",{attrs:{"is-full":!0,isShadow:!1}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921")])],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"基本用法",subTitle:"使用 title 属性设置导航栏标题",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{attrs:{title:"标题"}})],1)],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"开启阴影",subTitle:"使用 shadow 属性启用阴影",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{attrs:{shadow:!0,"left-icon":"left",title:"开启阴影"},on:{clickLeft:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}})],1)],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"开启暗黑模式",subTitle:"使用 dark 属性设置暗黑模式",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{attrs:{shadow:!0,"left-icon":"left",dark:!0,title:"暗黑模式"},on:{clickLeft:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}})],1)],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"带返回箭头+右侧图标",subTitle:"使用 left-icon/right-icon 设置左右图标",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{attrs:{shadow:!0,"left-icon":"left","right-icon":"cart",title:"标题"}})],1)],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"左侧文字+右侧文字",subTitle:"使用 left-text/right-text 设置左右文字",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{attrs:{shadow:!0,"left-icon":"left",leftText:"返回",rightText:"设置",title:"标题"}})],1)],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"自定义颜色",subTitle:"使用 color/background-color 属性设置前景背景色",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{attrs:{dark:!0,color:"#999",backgroundColor:"#f5f5f5",shadow:!0,"left-icon":"left",leftText:"返回",rightText:"设置",title:"自定义颜色"}})],1)],1)],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"自定义高度",subTitle:"使用 height 修改组件高度",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{attrs:{height:"65px",dark:!0,shadow:!0,"left-icon":"left",leftText:"返回",rightText:"设置",title:"自定义高度"}})],1)],1)],1),n("uni-section",{staticStyle:{"margin-bottom":"3px"},attrs:{title:"自定义内容",subTitle:"使用 left/right/default 插槽自定义内容",type:"line"}},[n("v-uni-view",{staticClass:"box-bg"},[n("uni-nav-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[n("v-uni-view",{staticClass:"city"},[n("v-uni-view",[n("v-uni-text",{staticClass:"uni-nav-bar-text"},[t._v(t._s(t.city))])],1),n("uni-icons",{attrs:{type:"arrowdown",color:"#666",size:"18"}})],1)]},proxy:!0},{key:"right",fn:function(){return[n("v-uni-view",{staticClass:"city"},[t._v("搜索")])]},proxy:!0}])},[n("v-uni-view",{staticClass:"input-view"},[n("uni-icons",{staticClass:"input-uni-icon",attrs:{type:"search",size:"18",color:"#999"}}),n("v-uni-input",{staticClass:"nav-bar-input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.confirm.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)},o=[],l={components:{},data:function(){return{city:"北京"}},methods:{back:function(){uni.navigateBack({delta:1})},showMenu:function(){uni.showToast({title:"菜单"})},clickLeft:function(){uni.showToast({title:"左侧按钮"})},search:function(){uni.showToast({title:"搜索"})},showCity:function(){uni.showToast({title:"选择城市"})},scan:function(){uni.showToast({title:"扫码"})},confirm:function(){uni.showToast({title:"搜索"})}},onPullDownRefresh:function(){console.log("onPullDownRefresh"),setTimeout((function(){uni.stopPullDownRefresh(),console.log("stopPullDownRefresh")}),1e3)}},c=l,r=(n(62540),n(69453)),u=(0,r.Z)(c,s,o,!1,null,"0373ef3e",null,!1,a,e),f=u.exports},60656:function(t,i,n){"use strict";n.r(i);var e=n(43481),a=n.n(e),s=n(2400),o=n.n(s),l=o()(a());l.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.box-bg[data-v-0373ef3e]{background-color:#f5f5f5;padding:5px 0}.city[data-v-0373ef3e]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-left:4px}.input-view[data-v-0373ef3e]{display:flex;flex-direction:row;flex:1;background-color:#f8f8f8;height:30px;border-radius:15px;padding:0 15px;flex-wrap:nowrap;margin:7px 0;line-height:30px}.input-uni-icon[data-v-0373ef3e]{line-height:30px}.nav-bar-input[data-v-0373ef3e]{height:30px;line-height:30px;padding:0 5px;font-size:12px;background-color:#f8f8f8}',""]),i["default"]=l}}]);