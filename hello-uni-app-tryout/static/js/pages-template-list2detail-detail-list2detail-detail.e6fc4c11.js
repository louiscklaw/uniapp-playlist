(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[1432],{22457:function(e,t,n){var i=n(55839);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=n(56).Z;a("bf7e99fa",i,!0,{sourceMap:!1,shadowMode:!1})},22149:function(e,t,n){"use strict";var i;n.r(t),n.d(t,{default:function(){return A}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"banner"},[n("v-uni-image",{staticClass:"banner-img",attrs:{src:e.banner.cover}}),n("v-uni-view",{staticClass:"banner-title"},[e._v(e._s(e.banner.title))])],1),n("v-uni-view",{staticClass:"article-meta"},[n("v-uni-text",{staticClass:"article-author"},[e._v(e._s(e.banner.author_name))]),n("v-uni-text",{staticClass:"article-text"},[e._v("发表于")]),n("v-uni-text",{staticClass:"article-time"},[e._v(e._s(e.banner.published_at))])],1),n("v-uni-view",{staticClass:"article-content"},[n("v-uni-rich-text",{attrs:{nodes:e.htmlNodes}})],1)],1)},r=[],s=(n(70560),n(65137),n(69358),n(48324),n(97195),n(50886),n(64043),n(57267),n(22462),n(52003),n(68518),n(13440),n(12826),n(278),n(60228),n(91719),/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/),o=/^<\/([-A-Za-z0-9_]+)[^>]*>/,l=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,c=m("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),d=m("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),u=m("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),h=m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=m("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),p=m("script,style");function v(e,t){var n,i,a,r=[],v=e;r.last=function(){return this[this.length-1]};while(e){if(i=!0,r.last()&&p[r.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+r.last()+"[^>]*>"),(function(e,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(n),""})),b("",r.last());else if(0==e.indexOf("\x3c!--")?(n=e.indexOf("--\x3e"),n>=0&&(t.comment&&t.comment(e.substring(4,n)),e=e.substring(n+3),i=!1)):0==e.indexOf("</")?(a=e.match(o),a&&(e=e.substring(a[0].length),a[0].replace(o,b),i=!1)):0==e.indexOf("<")&&(a=e.match(s),a&&(e=e.substring(a[0].length),a[0].replace(s,g),i=!1)),i){n=e.indexOf("<");var m=n<0?e:e.substring(0,n);e=n<0?"":e.substring(n),t.chars&&t.chars(m)}if(e==v)throw"Parse Error: "+e;v=e}function g(e,n,i,a){if(n=n.toLowerCase(),d[n])while(r.last()&&u[r.last()])b("",r.last());if(h[n]&&r.last()==n&&b("",n),a=c[n]||!!a,a||r.push(n),t.start){var s=[];i.replace(l,(function(e,t){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[t]?t:"";s.push({name:t,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(n,s,a)}}function b(e,n){if(n){for(i=r.length-1;i>=0;i--)if(r[i]==n)break}else var i=0;if(i>=0){for(var a=r.length-1;a>=i;a--)t.end&&t.end(r[a]);r.length=i}}b()}function m(e){for(var t={},n=e.split(","),i=0;i<n.length;i++)t[n[i]]=!0;return t}function g(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function b(e){return e.reduce((function(e,t){var n=t.value,i=t.name;return e[i]?e[i]=e[i]+" "+n:e[i]=n,e}),{})}function x(e){e=g(e);var t=[],n={node:"root",children:[]};return v(e,{start:function(e,i,a){var r={name:e};if(0!==i.length&&(r.attrs=b(i)),a){var s=t[0]||n;s.children||(s.children=[]),s.children.push(r)}else t.unshift(r)},end:function(e){var i=t.shift();if(i.name!==e&&console.error("invalid state: mismatch end tag"),0===t.length)n.children.push(i);else{var a=t[0];a.children||(a.children=[]),a.children.push(i)}},chars:function(e){var i={type:"text",text:e};if(0===t.length)n.children.push(i);else{var a=t[0];a.children||(a.children=[]),a.children.push(i)}},comment:function(e){var n={node:"comment",text:e},i=t[0];i.children||(i.children=[]),i.children.push(n)}}),n.children}var w=x,_="/pages/template/list2detail-detail/list2detail-detail";function y(e){for(var t=[],n=0,i=e.length;n<i;n++)switch(e[n]){case"weixin":t.push({text:"分享到微信好友",id:"weixin",sort:0}),t.push({text:"分享到微信朋友圈",id:"weixin",sort:1});break;default:break}return t.sort((function(e,t){return e.sort-t.sort})),t}var k,C={data:function(){return{title:"",banner:{},htmlNodes:[]}},onLoad:function(e){var t=e.detailDate||e.payload;try{this.banner=JSON.parse(decodeURIComponent(t))}catch(n){this.banner=JSON.parse(t)}uni.setNavigationBarTitle({title:this.banner.title}),this.getDetail()},onShareAppMessage:function(){return{title:this.banner.title,path:_+"?detailDate="+JSON.stringify(this.banner)}},onNavigationBarButtonTap:function(e){var t=this,n=e.index;if(0===n){uni.getProvider({service:"share",success:function(e){if(e.provider&&e.provider.length&&~e.provider.indexOf("weixin")){var n=y(e.provider);uni.showActionSheet({itemList:n.map((function(e){return e.text})),success:function(e){var n=e.tapIndex;uni.share({provider:"weixin",type:0,title:t.banner.title,scene:0===n?"WXSceneSession":"WXSceneTimeline",href:"https://uniapp.dcloud.io/h5"+_+"?detailDate="+JSON.stringify(t.banner),imageUrl:"https://web-assets.dcloud.net.cn/unidoc/zh/share-logo@3.png"})}})}else uni.showToast({title:"未检测到可用的微信分享服务"})},fail:function(e){uni.showToast({title:"获取分享服务失败"})}})}},methods:{getDetail:function(){var e=this;uni.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+this.banner.post_id,success:function(t){if(200==t.statusCode){var n=t.data.content.replace(/\\/g,"").replace(/<img/g,'<img style="display:none;"');e.htmlNodes=w(n)}},fail:function(){console.log("fail")}})}}},z=C,S=(n(22457),n(69453)),O=(0,S.Z)(z,a,r,!1,null,"30ece8d8",null,!1,i,k),A=O.exports},55839:function(e,t,n){"use strict";n.r(t);var i=n(43481),a=n.n(i),r=n(2400),s=n.n(r),o=s()(a());o.push([e.id,".banner[data-v-30ece8d8]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-30ece8d8]{width:100%}.banner-title[data-v-30ece8d8]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.article-meta[data-v-30ece8d8]{padding:%?20?% %?40?%;display:flex;flex-direction:row;justify-content:flex-start;color:gray}.article-text[data-v-30ece8d8]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-30ece8d8],\n.article-time[data-v-30ece8d8]{font-size:%?30?%}.article-content[data-v-30ece8d8]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""]),t["default"]=o}}]);