(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user-space/user-space-head"],{"1b82":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/common/tag-sex-age").then(e.bind(null,"2fe3"))},i={components:{TagSexAge:u},props:{userinfo:Object},data:function(){return{isguanzhu:this.userinfo.isguanzhu,bgimg:this.userinfo.bgimg}},computed:{getBgImg:function(){return"../../static/bgimg/".concat(this.bgimg,".jpg")}},methods:{guanzhu:function(){this.isguanzhu=!this.isguanzhu},changeBgImg:function(){var n=parseInt(this.bgimg);n<4?n++:n=1,this.bgimg=n}}};t.default=i},4072:function(n,t,e){"use strict";e.r(t);var u=e("1b82"),i=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=i.a},"5bcf":function(n,t,e){},"94af":function(n,t,e){"use strict";e.r(t);var u=e("fb9c"),i=e("4072");for(var c in i)"default"!==c&&function(n){e.d(t,n,function(){return i[n]})}(c);e("bf4c");var a=e("2877"),r=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,"68c8601c",null);t["default"]=r.exports},bf4c:function(n,t,e){"use strict";var u=e("5bcf"),i=e.n(u);i.a},fb9c:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-space/user-space-head-create-component',
    {
        'components/user-space/user-space-head-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("94af"))
        })
    },
    [['components/user-space/user-space-head-create-component']]
]);                
