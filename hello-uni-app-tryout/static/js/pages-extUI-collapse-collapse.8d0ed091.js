(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[1974],{60997:function(t,e,i){var n=i(19807);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var s=i(56).Z;s("276d3615",n,!0,{sourceMap:!1,shadowMode:!1})},67731:function(t,e,i){var n=i(18879);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var s=i(56).Z;s("58525cb5",n,!0,{sourceMap:!1,shadowMode:!1})},38150:function(t,e,i){var n=i(45405);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var s=i(56).Z;s("5d7ed5fa",n,!0,{sourceMap:!1,shadowMode:!1})},98711:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return p}});var n,s={uniCard:i(54074).Z,uniSection:i(46726).Z,uniCollapse:i(86283).Z,uniCollapseItem:i(525).Z,uniList:i(94451).Z,uniListItem:i(87610).Z},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[i("v-uni-text",{staticClass:"uni-h6"},[t._v("折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。")])],1),i("uni-section",{attrs:{title:"基础用法",type:"line"}},[i("uni-collapse",{ref:"collapse",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("uni-collapse-item",{attrs:{title:"默认开启"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v(t._s(t.content))])],1)],1),i("uni-collapse-item",{attrs:{title:"折叠内容"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。")])],1)],1),i("uni-collapse-item",{attrs:{title:"禁用状态",disabled:!0}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("禁用状态内容主体，页面上是看不到这段话的。")])],1)],1)],1)],1),i("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("动态修改内容")]),i("uni-section",{attrs:{title:"使用动画效果",type:"line"}},[i("uni-collapse",[i("uni-collapse-item",{attrs:{title:"使用动画","show-animation":!0}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("默认开启组件动画，使用动画效果折叠内容会有一个从上到下的动画。")])],1)],1),i("uni-collapse-item",{attrs:{title:"不使用动画","show-animation":!1}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v('设置 show-animation="false",关闭当前组件动画效果。')])],1)],1)],1)],1),i("uni-section",{attrs:{title:"手风琴效果（只会保留一个的打开状态）",type:"line"}},[i("uni-collapse",{attrs:{accordion:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.accordionVal,callback:function(e){t.accordionVal=e},expression:"accordionVal"}},[i("uni-collapse-item",{attrs:{title:"手风琴效果"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])],1)],1),i("uni-collapse-item",{attrs:{title:"手风琴效果"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])],1)],1),i("uni-collapse-item",{attrs:{title:"手风琴效果"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])],1)],1)],1)],1),i("uni-section",{attrs:{title:"配置图片",type:"line"}},[i("uni-collapse",[i("uni-collapse-item",{attrs:{title:"标题文字",thumb:"https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，可自定义内容及样式")])],1)],1),i("uni-collapse-item",{attrs:{title:"标题文字",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，可自定义内容及样式")])],1)],1)],1)],1),i("uni-section",{attrs:{title:"使用插槽",type:"line"}},[i("uni-collapse",[i("uni-collapse-item",{attrs:{titleBorder:"none"},scopedSlots:t._u([{key:"title",fn:function(){return[i("uni-list",[i("uni-list-item",{attrs:{title:"标题使用自定义标题插槽","show-extra-icon":!0,"extra-icon":t.extraIcon}})],1)]},proxy:!0}])},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[t._v("折叠内容主体，可自定义内容及样式")])],1)],1),i("uni-collapse-item",{attrs:{title:"折叠内容使用 uni-list 组件"}},[i("uni-list",[i("uni-list-item",{attrs:{title:"列表文字"}}),i("uni-list-item",{attrs:{disabled:!0,title:"列表文字",note:"列表禁用状态"}}),i("uni-list-item",{attrs:{title:"列表右侧显示 switch","show-switch":!0}}),i("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,title:"列表左侧带扩展图标"}}),i("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"lg",rightText:"右侧文字",showArrow:!0}}),i("uni-list-item",{attrs:{title:"开启点击反馈",clickable:!0,showArrow:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)},a=[],l={components:{},data:function(){return{value:["0"],accordionVal:"1",content:"折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。",extraIcon:{color:"#4cd964",size:"26",type:"image"}}},methods:{add:function(){this.content.length>35?this.content="折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。":this.content="折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。"},onClick:function(t){uni.showToast({title:"列表被点击"})},change:function(t){console.log(t)}}},c=l,r=(i(60997),i(69453)),u=(0,r.Z)(c,o,a,!1,null,"0e8edfb2",null,!1,s,n),p=u.exports},525:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var n,s={uniIcons:i(37446).Z},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-collapse-item"},[i("v-uni-view",{staticClass:"uni-collapse-item__title",class:{"is-open":t.isOpen&&"auto"===t.titleBorder,"uni-collapse-item-border":"none"!==t.titleBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(!t.isOpen)}}},[i("v-uni-view",{staticClass:"uni-collapse-item__title-wrap"},[t._t("title",[i("v-uni-view",{staticClass:"uni-collapse-item__title-box",class:{"is-disabled":t.disabled}},[t.thumb?i("v-uni-image",{staticClass:"uni-collapse-item__title-img",attrs:{src:t.thumb}}):t._e(),i("v-uni-text",{staticClass:"uni-collapse-item__title-text"},[t._v(t._s(t.title))])],1)])],2),t.showArrow?i("v-uni-view",{staticClass:"uni-collapse-item__title-arrow",class:{"uni-collapse-item__title-arrow-active":t.isOpen,"uni-collapse-item--animation":!0===t.showAnimation}},[i("uni-icons",{attrs:{color:t.disabled?"#ddd":"#bbb",size:"14",type:"bottom"}})],1):t._e()],1),i("v-uni-view",{staticClass:"uni-collapse-item__wrap",class:{"is--transition":t.showAnimation},style:{height:(t.isOpen?t.height:0)+"px"}},[i("v-uni-view",{ref:"collapse--hook",staticClass:"uni-collapse-item__wrap-content",class:{open:t.isheight,"uni-collapse-item--border":t.border&&t.isOpen},attrs:{id:t.elId}},[t._t("default")],2)],1)],1)},a=[],l=(i(79288),i(68932),i(60228),i(12826),i(97195),i(70560),i(47522),i(62506),i(64043),{name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,isheight:null,height:0,elId:t,nameSync:0}},watch:{open:function(t){this.isOpen=t,this.onClick(t,"init")}},updated:function(t){var e=this;this.$nextTick((function(){e.init(!0)}))},created:function(){this.collapse=this.getCollapse(),this.oldHeight=0,this.onClick(this.open,"init")},destroyed:function(){this.__isUnmounted||this.uninstall()},mounted:function(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):console.warn("name 值 ".concat(this.nameSync," 重复")),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init:function(t){this.getCollapseHeight(t)},uninstall:function(){var t=this;this.collapse&&(this.collapse.childrens.forEach((function(e,i){e===t&&t.collapse.childrens.splice(i,1)})),this.collapse.names.forEach((function(e,i){e===t.nameSync&&t.collapse.names.splice(i,1)})))},onClick:function(t,e){this.disabled||(this.isOpen=t,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==e&&this.collapse.onChange(t,this))},getCollapseHeight:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=uni.createSelectorQuery().in(this);n.select("#".concat(this.elId)).fields({size:!0},(function(n){if(!(i>=10)){if(!n)return i++,void e.getCollapseHeight(!1,i);e.height=n.height,e.isheight=!0,t||e.onClick(e.isOpen,"init")}})).exec()},getNvueHwight:function(t){var e=this;dom.getComponentRect(this.$refs["collapse--hook"],(function(i){if(i&&i.result&&i.size){if(e.height=i.size.height,e.isheight=!0,t)return;e.onClick(e.open,"init")}}))},getCollapse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniCollapse",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e}}}),c=l,r=(i(67731),i(69453)),u=(0,r.Z)(c,o,a,!1,null,"335e5506",null,!1,s,n),p=u.exports},86283:function(t,e,i){"use strict";var n;i.d(e,{Z:function(){return p}});var s,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-collapse"},[t._t("default")],2)},a=[],l=(i(60228),i(47522),i(70560),{name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},computed:{dataValue:function(){var t="string"===typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"===typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return t?this.modelValue:this.value}},watch:{dataValue:function(t){this.setOpen(t)}},created:function(){this.childrens=[],this.names=[]},mounted:function(){var t=this;this.$nextTick((function(){t.setOpen(t.dataValue)}))},methods:{setOpen:function(t){var e=this,i="string"===typeof t,n=Array.isArray(t);this.childrens.forEach((function(s,o){if(i&&t===s.nameSync){if(!e.accordion)return void console.warn("accordion 属性为 false ,v-model 类型应该为 array");s.isOpen=!0}n&&t.forEach((function(t){if(t===s.nameSync){if(e.accordion)return void console.warn("accordion 属性为 true ,v-model 类型应该为 string");s.isOpen=!0}}))})),this.emit(t)},setAccordion:function(t){this.accordion&&this.childrens.forEach((function(e,i){t!==e&&(e.isOpen=!1)}))},resize:function(){this.childrens.forEach((function(t,e){t.getCollapseHeight()}))},onChange:function(t,e){var i=[];this.accordion?i=t?e.nameSync:"":this.childrens.forEach((function(t,e){t.isOpen&&i.push(t.nameSync)})),this.$emit("change",i),this.emit(i)},emit:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}}}),c=l,r=(i(38150),i(69453)),u=(0,r.Z)(c,o,a,!1,null,"1de8c812",null,!1,n,s),p=u.exports},19807:function(t,e,i){"use strict";i.r(e);var n=i(43481),s=i.n(n),o=i(2400),a=i.n(o),l=a()(s());l.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.example-body[data-v-0e8edfb2]{flex-direction:column;flex:1}.content[data-v-0e8edfb2]{padding:15px}.text[data-v-0e8edfb2]{font-size:14px;color:#666;line-height:20px}.button[data-v-0e8edfb2]{margin:10px;margin-bottom:0}',""]),e["default"]=l},18879:function(t,e,i){"use strict";i.r(e);var n=i(43481),s=i.n(n),o=i(2400),a=i.n(o),l=a()(s());l.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-collapse-item[data-v-335e5506]{box-sizing:border-box}.uni-collapse-item__title[data-v-335e5506]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;transition:border-bottom-color .3s}.uni-collapse-item__title-wrap[data-v-335e5506]{width:100%;flex:1}.uni-collapse-item__title-box[data-v-335e5506]{padding:0 15px;display:flex;width:100%;box-sizing:border-box;flex-direction:row;justify-content:space-between;align-items:center;height:48px;line-height:48px;background-color:#fff;color:#303133;font-size:13px;font-weight:500;cursor:pointer;outline:none}.uni-collapse-item__title-box.is-disabled .uni-collapse-item__title-text[data-v-335e5506]{color:#999}.uni-collapse-item__title.uni-collapse-item-border[data-v-335e5506]{border-bottom:1px solid #ebeef5}.uni-collapse-item__title.is-open[data-v-335e5506]{border-bottom-color:transparent}.uni-collapse-item__title-img[data-v-335e5506]{height:22px;width:22px;margin-right:10px}.uni-collapse-item__title-text[data-v-335e5506]{flex:1;font-size:14px;white-space:nowrap;color:inherit;overflow:hidden;text-overflow:ellipsis}.uni-collapse-item__title-arrow[data-v-335e5506]{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:20px;height:20px;margin-right:10px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-collapse-item__title-arrow-active[data-v-335e5506]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-item__wrap[data-v-335e5506]{will-change:height;box-sizing:border-box;background-color:#fff;overflow:hidden;position:relative;height:0}.uni-collapse-item__wrap.is--transition[data-v-335e5506]{transition-property:height,border-bottom-width;transition-duration:.3s;will-change:height}.uni-collapse-item__wrap-content[data-v-335e5506]{position:absolute;font-size:13px;color:#303133;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:0}.uni-collapse-item__wrap-content.uni-collapse-item--border[data-v-335e5506]{border-bottom-width:1px;border-bottom-color:red;border-bottom-color:#ebeef5}.uni-collapse-item__wrap-content.open[data-v-335e5506]{position:relative}.uni-collapse-item--animation[data-v-335e5506]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:ease}',""]),e["default"]=l},45405:function(t,e,i){"use strict";i.r(e);var n=i(43481),s=i.n(n),o=i(2400),a=i.n(o),l=a()(s());l.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-collapse[data-v-1de8c812]{width:100%;display:flex;flex-direction:column;background-color:#fff}',""]),e["default"]=l}}]);