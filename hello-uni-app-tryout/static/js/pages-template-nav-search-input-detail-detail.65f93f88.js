(self["webpackChunkhello_uni_app_tryout"]=self["webpackChunkhello_uni_app_tryout"]||[]).push([[8947],{34300:function(t,e,i){var o=i(31580);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var s=i(56).Z;s("e4667078",o,!0,{sourceMap:!1,shadowMode:!1})},73230:function(t,e,i){"use strict";var o;i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrapper"},[t.isHistory?i("v-uni-view",{staticClass:"history-box"},[t.historyList.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"history-title"},[i("v-uni-text",[t._v("搜索历史")]),i("v-uni-text",{staticClass:"uni-icon uni-icon-trash",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSearch.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"history-content"},t._l(t.historyList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"history-item"},[t._v(t._s(e.name))])})),1)],1):i("v-uni-view",{staticClass:"no-data"},[t._v("您还没有历史记录")])],1):i("v-uni-view",{staticClass:"history-box"},[t.historyList.length>0?i("v-uni-view",{staticClass:"history-list-box"},t._l(t.historyList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"history-list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.listTap(e)}}},[i("v-uni-rich-text",{attrs:{nodes:e.nameNodes}})],1)})),1):i("v-uni-view",{staticClass:"no-data"},[t._v("没有搜索到相关内容")])],1)],1)},a=[];i(69358),i(48324),i(50886),i(52003),i(68518),i(64043),i(13440),i(12826),i(28436),i(57267),i(60228),i(47522),i(34338),i(62506),i(91719),i(80939),i(70560);function n(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}n.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var i=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:i}),e(i)},fail:function(i){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:i.errMsg||""})}})},n.prototype.getRegeo=function(t){function e(e){var o=i.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:i.key,location:e,extensions:"all",s:o.s,platform:o.platform,appname:i.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var o,s,a,n,r,c,d,p,u;i.data.status&&"1"==i.data.status?(o=i.data.regeocode,s=o.addressComponent,a=[],n="",o&&o.roads[0]&&o.roads[0].name&&(n=o.roads[0].name+"附近"),r=e.split(",")[0],c=e.split(",")[1],o.pois&&o.pois[0]&&(n=o.pois[0].name+"附近",d=o.pois[0].location,d&&(r=parseFloat(d.split(",")[0]),c=parseFloat(d.split(",")[1]))),s.provice&&a.push(s.provice),s.city&&a.push(s.city),s.district&&a.push(s.district),s.streetNumber&&s.streetNumber.street&&s.streetNumber.number?(a.push(s.streetNumber.street),a.push(s.streetNumber.number)):(p="",o&&o.roads[0]&&o.roads[0].name&&(p=o.roads[0].name),a.push(p)),a=a.join(""),u=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:a,desc:n,longitude:r,latitude:c,id:0,regeocodeData:o}],t.success(u)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this;t.location?e(t.location):i.getWxLocation(t,(function(t){e(t)}))},n.prototype.getWeather=function(t){function e(e){var i="base";t.type&&"forecast"==t.type&&(i="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:o.key,city:e,extensions:i,s:s.s,platform:s.platform,appname:o.key,sdkversion:s.sdkversion,logversion:s.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){function i(t){var e={city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}};return e}var o,s;e.data.status&&"1"==e.data.status?e.data.lives?(o=e.data.lives,o&&o.length>0&&(o=o[0],s=i(o),s["liveData"]=o,t.success(s))):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function i(i){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:o.key,location:i,extensions:"all",s:s.s,platform:s.platform,appname:o.key,sdkversion:s.sdkversion,logversion:s.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var o,s;i.data.status&&"1"==i.data.status?(s=i.data.regeocode,s.addressComponent?o=s.addressComponent.adcode:s.aois&&s.aois.length>0&&(o=s.aois[0].adcode),e(o)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var o=this,s=o.requestConfig;t.city?e(t.city):o.getWxLocation(t,(function(t){i(t)}))},n.prototype.getPoiAround=function(t){function e(e){var s={key:i.key,location:e,s:o.s,platform:o.platform,appname:i.key,sdkversion:o.sdkversion,logversion:o.logversion};t.querytypes&&(s["types"]=t.querytypes),t.querykeywords&&(s["keywords"]=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:s,method:"GET",header:{"content-type":"application/json"},success:function(e){var i,o,s,a;if(e.data.status&&"1"==e.data.status){if(e=e.data,e&&e.pois){for(i=[],o=0;o<e.pois.length;o++)s=0==o?t.iconPathSelected:t.iconPath,i.push({latitude:parseFloat(e.pois[o].location.split(",")[1]),longitude:parseFloat(e.pois[o].location.split(",")[0]),iconPath:s,width:22,height:32,id:o,name:e.pois[o].name,address:e.pois[o].address});a={markers:i,poisData:e.pois},t.success(a)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this,o=i.requestConfig;t.location?e(t.location):i.getWxLocation(t,(function(t){e(t)}))},n.prototype.getStaticmap=function(t){function e(e){s.push("location="+e),t.zoom&&s.push("zoom="+t.zoom),t.size&&s.push("size="+t.size),t.scale&&s.push("scale="+t.scale),t.markers&&s.push("markers="+t.markers),t.labels&&s.push("labels="+t.labels),t.paths&&s.push("paths="+t.paths),t.traffic&&s.push("traffic="+t.traffic);var i=a+s.join("&");t.success({url:i})}var i,o=this,s=[],a="https://restapi.amap.com/v3/staticmap?";s.push("key="+o.key),i=o.requestConfig,s.push("s="+i.s),s.push("platform="+i.platform),s.push("appname="+i.appname),s.push("sdkversion="+i.sdkversion),s.push("logversion="+i.logversion),t.location?e(t.location):o.getWxLocation(t,(function(t){e(t)}))},n.prototype.getInputtips=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.location&&(o["location"]=t.location),t.keywords&&(o["keywords"]=t.keywords),t.type&&(o["type"]=t.type),t.city&&(o["city"]=t.city),t.citylimit&&(o["citylimit"]=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},n.prototype.getDrivingRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),t.strategy&&(o["strategy"]=t.strategy),t.waypoints&&(o["waypoints"]=t.waypoints),t.avoidpolygons&&(o["avoidpolygons"]=t.avoidpolygons),t.avoidroad&&(o["avoidroad"]=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},n.prototype.getWalkingRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},n.prototype.getTransitRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),t.strategy&&(o["strategy"]=t.strategy),t.city&&(o["city"]=t.city),t.cityd&&(o["cityd"]=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var i=e.data.route;t.success({distance:i.distance||"",taxi_cost:i.taxi_cost||"",transits:i.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},n.prototype.getRidingRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})};var r,c={AMapWX:n},d={"1号线":"#C43B33","2号线":"#016299","4号线/大兴线":"#008E9C","5号线":"#A42380","6号线":"#D09900","7号线":"#F2C172","8号线":"#009D6A","9号线":"#8FC41E","10号线":"#009DBE","13号线":"#F9E701","14号线东段":"#D4A7A2","14号线西段":"#D4A7A2","15号线":"#5D2D69","八通线":"#C33A32","昌平线":"#DE82B1","亦庄线":"#E40177","房山线":"#E66021","机场线":"#A29BBC"},p=[{id:"150500",icon:"icon-ditie"},{id:"150700",icon:"icon-gongjiao"},{id:"190700",icon:"icon-gonglu"}],u={key:"b526b09b86cd2996e7732be8ab8c4430",mapInit:function(){return new c.AMapWX({key:this.key})},typecode:p,lineColor:function(t){return d[t]?d[t]:"#ccc"},serachNmme:function(t,e){var i=new RegExp(t),o='<div style="font-size: 14px;color: #333;line-height: 1.5;">\n\t\t    '.concat(e.replace(i,"<span style='color:#66ccff;'>"+t+"</span>"),"\n\t\t    </div>").trim();return o},addressToLine:function(t,e){var i=this,o=t.split(";"),s="";return o.forEach((function(t){var o="#cccccc";e===p[0].id?o=i.lineColor(t):e===p[1].id&&(o="#4075cb");var a="margin:5px 0;margin-right:5px;padding:0 5px;background:"+o+";font-size:12px;color:#fff;border-radius:3px;";s+="<div style='".concat(a,"'>").concat(t,"</div>")})),'<div style="display:flex;flex-wrap: wrap;">'.concat(s,"</div>")},dataHandle:function(t,e){return t.nameNodes=e?u.serachNmme(e,t.name):'<div style="font-size: 14px;color: #333;line-height: 1.5;">'.concat(t.name,"</div>"),t.typecode===u.typecode[0].id||t.typecode===u.typecode[1].id?(t.addressNodes=u.addressToLine(t.address,t.typecode),t.typecode===u.typecode[0].id?t.icon=u.typecode[0].icon:t.typecode===u.typecode[1].id&&(t.icon=u.typecode[1].icon)):(t.addressNodes="<span>".concat(t.district).concat(t.address.length>0?"·"+t.address:"","</span>").trim(),t.icon="icon-weizhi"),t.location&&0===t.location.length&&(t.icon="icon-sousuo"),t},setHistory:function(t){var e=uni.getStorageSync("search:history");e||(e=[]);var i={};i="string"===typeof t?{adcode:[],address:[],city:[],district:[],id:[],location:[],name:t,typecode:[]}:t;for(var o=0;o<e.length;o++)if(e[o].name===i.name){e.splice(o,1);break}e.unshift(u.dataHandle(i)),uni.setStorage({key:"search:history",data:e,success:function(){}})},getHistory:function(){},removeHistory:function(){return uni.removeStorage({key:"search:history",success:function(t){console.log("success")}}),[]}},l=u,f={data:function(){return{historyList:[],isHistory:!0,list:[],flng:!0,timer:null}},onLoad:function(){this.amapPlugin=l.mapInit(),this.historyList=uni.getStorageSync("search:history")},methods:{listTap:function(t){t=JSON.parse(JSON.stringify(t)),this.history||(this.isHistory=!0,l.setHistory(t),uni.navigateBack())},clearSearch:function(){var t=this;uni.showModal({title:"提示",content:"是否清理全部搜索历史？该操作不可逆。",success:function(e){e.confirm&&(t.historyList=l.removeHistory())}})},getInputtips:function(t){var e=this;this.amapPlugin.getInputtips({keywords:t,city:"北京",success:function(i){var o=i.tips;o.map((function(e){return l.dataHandle(e,t)})),e.historyList=o},fail:function(t){console.log(t)}})}},onNavigationBarSearchInputChanged:function(t){var e=t.text;if(!e)return this.isHistory=!0,this.historyList=[],void(this.historyList=uni.getStorageSync("search:history"));this.isHistory=!1,this.getInputtips(e)},onNavigationBarSearchInputConfirmed:function(t){var e=t.text;if(!e)return this.isHistory=!0,this.historyList=[],this.historyList=uni.getStorageSync("search:history"),void uni.showModal({title:"提示",content:"请输入内容。",success:function(t){t.confirm}});uni.showModal({title:"提示",content:'您输入的内容为"'.concat(e,'",如果点击确定,将记录到历史搜索,并返回.如果取消不做操作'),success:function(t){t.confirm&&(l.setHistory(e),uni.navigateBack())}})},onNavigationBarButtonTap:function(){var t=this;uni.showModal({title:"提示",content:"点击确定，修改输入框的内容为abc",success:function(e){if(e.confirm){var i=t.$mp.page.$getAppWebview();i.setTitleNViewSearchInputText("abc")}}})}},y=f,h=(i(34300),i(69453)),g=(0,h.Z)(y,s,a,!1,null,"d6960f52",null,!1,o,r),v=g.exports},31580:function(t,e,i){"use strict";i.r(e);var o=i(43481),s=i.n(o),a=i(2400),n=i.n(a),r=n()(s());r.push([t.id,".history-title[data-v-d6960f52]{display:flex;justify-content:space-between;padding:%?20?% %?30?%;padding-bottom:0;font-size:%?34?%;color:#333}.history-title .uni-icon[data-v-d6960f52]{font-size:%?40?%}.history-content[data-v-d6960f52]{display:flex;flex-wrap:wrap;padding:%?15?%}.history-item[data-v-d6960f52]{padding:%?4?% %?35?%;border:1px #f1f1f1 solid;background:#fff;border-radius:%?50?%;margin:%?12?% %?10?%;color:#999}.history-list-box[data-v-d6960f52]{\n\t/* margin: 10rpx 0; */}.history-list-item[data-v-d6960f52]{padding:%?30?% 0;margin-left:%?30?%;border-bottom:1px #eee solid;font-size:%?28?%}.no-data[data-v-d6960f52]{text-align:center;color:#999;margin:%?100?%}",""]),e["default"]=r}}]);