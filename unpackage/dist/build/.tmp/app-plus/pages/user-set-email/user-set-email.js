(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-email/user-set-email"],{"0d0f":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"40b1":function(t,n,e){"use strict";e.r(n);var i=e("7f55"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},"7f55":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{email:"",password:"",disable:!0,loading:!1}},watch:{email:function(t){this.change()},password:function(t){this.change()}},methods:{change:function(){this.email&&this.password?this.disable=!1:this.disable=!0},check:function(){if(!this.email)return t.showToast({title:"邮箱不能为空",icon:"none"}),!1;var n=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return n.test(this.email)?this.password?!(!this.email||!this.password)||(t.showToast({title:"请将数据填写完整",icon:"none"}),!1):(t.showToast({title:"密码不能为空",icon:"none"}),!1):(t.showToast({title:"请输入正确邮箱格式",icon:"none"}),!1)},submit:function(){if(this.loading=!0,!this.check())return this.loading=!1,!1;this.loading=!1,this.disable=!0,t.showToast({title:"验证通过",icon:"none"}),this.disable=!1}}};n.default=e}).call(this,e("6e42")["default"])},b835:function(t,n,e){},dbe3:function(t,n,e){"use strict";e.r(n);var i=e("0d0f"),a=e("40b1");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("e379");var o=e("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"74d6d24e",null);n["default"]=u.exports},e379:function(t,n,e){"use strict";var i=e("b835"),a=e.n(i);a.a},f325:function(t,n,e){"use strict";(function(t){e("d8bc"),e("921b");i(e("66fd"));var n=i(e("dbe3"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["f325","common/runtime","common/vendor"]]]);