(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paper/paper"],{"02ad":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"0a03":function(e,t,n){"use strict";(function(e){n("d8bc"),n("921b");a(n("66fd"));var t=a(n("7fca"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"0a8e":function(e,t,n){"use strict";n.r(t);var a=n("e32c"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},1564:function(e,t,n){},"668c":function(e,t,n){"use strict";var a=n("1564"),o=n.n(a);o.a},"7fca":function(e,t,n){"use strict";n.r(t);var a=n("02ad"),o=n("0a8e");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("668c");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"1b82c8fb",null);t["default"]=r.exports},e32c:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("components/paper/paper-left-popup").then(n.bind(null,"5e4c"))},u=function(){return n.e("components/paper/paper-list").then(n.bind(null,"bfdf"))},i=function(){return n.e("components/common/load-more").then(n.bind(null,"7e47"))},r={components:{LeftPopup:o,PaperList:u,LoadMore:i},data:function(){return{show:!1,loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/1.jpg",username:"昵称",time:"10:21",data:"我是信息",noreadnum:"12"},{userpic:"../../static/demo/userpic/2.jpg",username:"昵称2",time:"10:21",data:"我是信息",noreadnum:"0"},{userpic:"../../static/demo/userpic/3.jpg",username:"大拿",time:"10:21",data:"我是信息",noreadnum:"6"}]}},onPullDownRefresh:function(){var e=this;setTimeout(function(){e.getData()},1e3)},onReachBottom:function(){this.loadMore()},onNavigationBarButtonTap:function(t){console.log(e(JSON.stringify(t)," at pages\\paper\\paper.vue:65")),0===t.index?(a.navigateTo({url:"../user-list/user-list"}),this.hidepopup()):1===t.index&&this.showpopup()},methods:{addFriend:function(){console.log(e("添加好友"," at pages\\paper\\paper.vue:78")),this.hidepopup()},clear:function(){console.log(e("清除缓存"," at pages\\paper\\paper.vue:83")),this.hidepopup()},hidepopup:function(){this.show=!1,console.log(e(this.show," at pages\\paper\\paper.vue:89"))},showpopup:function(){this.show=!0},getData:function(){var e=[{userpic:"../../static/demo/userpic/4.jpg",username:"昵称2",time:"10:21",data:"我是信息",noreadnum:"0"},{userpic:"../../static/demo/userpic/5.jpg",username:"大拿",time:"10:21",data:"我是信息",noreadnum:"6"}],t=this.list;this.list=e.concat(t),a.stopPullDownRefresh()},loadMore:function(){var e=this;"上拉加载更多"===this.loadtext&&(this.loadtext="加载中...",setTimeout(function(){var t=[{userpic:"../../static/demo/userpic/6.jpg",username:"昵称",time:"10:21",data:"我是信息",noreadnum:"12"},{userpic:"../../static/demo/userpic/2.jpg",username:"昵称2",time:"10:21",data:"我是信息",noreadnum:"0"},{userpic:"../../static/demo/userpic/3.jpg",username:"大拿",time:"10:21",data:"我是信息",noreadnum:"6"}],n=e.list;e.list=n.concat(t),e.loadtext="没有更多数据"},1e3))}}};t.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["0a03","common/runtime","common/vendor"]]]);