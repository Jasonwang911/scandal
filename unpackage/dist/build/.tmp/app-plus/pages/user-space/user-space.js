(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-space/user-space"],{"26c1":function(e,t,n){"use strict";n.r(t);var a=n("b387"),s=n("3b4b");for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);var i=n("2877"),u=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"ecc542ce",null);t["default"]=u.exports},"3b4b":function(e,t,n){"use strict";n.r(t);var a=n("cd27"),s=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=s.a},9362:function(e,t,n){"use strict";(function(e){n("d8bc"),n("921b");a(n("66fd"));var t=a(n("26c1"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b387:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},cd27:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("components/user-space/user-space-head").then(n.bind(null,"94af"))},s=function(){return n.e("components/home/home-data").then(n.bind(null,"ba62"))},o=function(){return n.e("components/index/swiper-tab-head").then(n.bind(null,"638f"))},i=function(){return Promise.all([n.e("common/vendor"),n.e("components/user-space/user-space-userinfo")]).then(n.bind(null,"0efd"))},u=function(){return n.e("components/common/common-list").then(n.bind(null,"dd5e"))},c=function(){return n.e("components/common/load-more").then(n.bind(null,"7e47"))},r=function(){return n.e("components/user-space/user-space-popup").then(n.bind(null,"9f8e"))},p={components:{UserSpaceHead:a,HomeData:s,SwiperTabHead:o,UserSpaceUserinfo:i,CommonList:u,LoadMore:c,UserSpacePopup:r},data:function(){return{show:!1,userinfo:{bgimg:1,userpic:"../../static/demo/userpic/16.jpg",username:"大白",sex:1,age:40,isguanzhu:!0,regtime:"2018-12-11",id:"sds12122",birthday:"1987-7-21",job:"看大门的",path:"广东-广州",qg:"离异"},spaceData:[{name:"获赞",num:"10k",clicktype:"",url:""},{name:"关注",num:"11",clicktype:"",url:""},{name:"粉丝",num:"12",clicktype:"",url:""}],tabIndex:0,tabBars:[{name:"主页",id:"home"},{name:"消息",id:"message"},{name:"动态",id:"dongtai"}],tablist:[{},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/2.jpg",username:"普天同庆",sex:0,age:25,isguanzhu:!1,title:"文字标题",titlepic:"",video:!1,share:!1,path:"北京石景山",sharenum:20,commentnum:19,goodnum:50},{userpic:"../../static/demo/userpic/3.jpg",username:"普天同庆",sex:1,age:25,isguanzhu:!1,title:"图文标题",titlepic:"../../static/demo/datapic/15.jpg",video:!1,share:!1,path:"北京石景山",sharenum:20,commentnum:19,goodnum:50},{userpic:"../../static/demo/userpic/4.jpg",username:"普天同庆",sex:0,age:25,isguanzhu:!1,title:"我是视频",titlepic:"../../static/demo/datapic/12.jpg",video:{looknum:"20w",long:"2:45"},share:!1,path:"北京石景山",sharenum:20,commentnum:19,goodnum:50}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/4.jpg",username:"普天同庆",sex:0,age:25,isguanzhu:!1,title:"我是视频",titlepic:"../../static/demo/datapic/12.jpg",video:{looknum:"20w",long:"2:45"},share:!1,path:"北京石景山",sharenum:20,commentnum:19,goodnum:50},{userpic:"../../static/demo/userpic/1.jpg",username:"普天同庆",sex:1,age:25,isguanzhu:!1,title:"分享模块",titlepic:"",video:!1,share:{title:"分享标题",titlepic:"../../static/demo/datapic/13.jpg"},path:"北京石景山",sharenum:20,commentnum:19,goodnum:50}]}]}},onReachBottom:function(){var e=this;"上拉加载更多"===this.tablist[this.tabIndex].loadtext&&(this.tablist[this.tabIndex].loadtext="加载中...",setTimeout(function(){var t={userpic:"../../static/demo/userpic/3.jpg",username:"普天同庆",sex:1,age:25,isguanzhu:!1,title:"图文标题",titlepic:"../../static/demo/datapic/15.jpg",video:!1,share:!1,path:"北京石景山",sharenum:20,commentnum:19,goodnum:50};e.tablist[e.tabIndex].list.push(t),e.tablist[e.tabIndex].loadtext="没有更多数据"},1e3))},onNavigationBarButtonTap:function(t){console.log(e(JSON.stringify(t)," at pages\\user-space\\user-space.vue:244")),0===t.index&&this.showpopup()},methods:{tabtap:function(e){this.tabIndex=e},lahei:function(){console.log(e("拉黑"," at pages\\user-space\\user-space.vue:256")),this.hidepopup()},beizhu:function(){console.log(e("备注"," at pages\\user-space\\user-space.vue:261")),this.hidepopup()},hidepopup:function(){this.show=!1,console.log(e(this.show," at pages\\user-space\\user-space.vue:267"))},showpopup:function(){this.show=!0}}};t.default=p}).call(this,n("0de9")["default"])}},[["9362","common/runtime","common/vendor"]]]);