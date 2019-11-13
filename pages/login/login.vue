<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 引入背景图 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<image class="loginhead" src="../../static/common/loginhead.png" mode="widthFix"></image>
		<!-- 输入框和按钮 -->
		<view class="body">
			<input type="text" password="true" v-model="username" class="uni-input common-input" placeholder="昵称/手机号/邮箱" />
			<input type="text" password="true" v-model="password" class="uni-input common-input" placeholder="请输入密码" />
			<button type="primary" class="user-set-btn" :loading="loading" :class="[disable? 'user-set-btn-disable': '']" @tap="submit">完成</button>
		</view>
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding login-font-color">
			验证码登录
			<view class="icon iconfont icon-jinru"></view>
		</view>
		<!-- 第三方登录 -->
		<view class="other-login-title u-f-ajc login-padding login-font-color">第三方登录</view>
		<other-login></other-login>
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding login-font-color">
			注册即代表您同意<view>《第三方协议》</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue'
	import OtherLogin from '../../components/home/other-login.vue'
	
	export default {
		components: {
			uniStatusBar,
			OtherLogin
		},
		data() {
			return {
				username: '',
				password: '',
				
				loading: false,
				disable: true
			}
		},
		methods: {
			submit() {
				
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
.login-font-color{
	color: #BBBBBB;
}
.login-padding{
	padding: 20upx 0;
}
.loginhead{
	width: 100%;
}
.icon-guanbi{ 
	position: fixed;
	top: 60upx;
	left: 30upx;
	font-size: 40upx;
	font-weight: bold;
	color: #332F0A;
	z-index: 10;
}
.body{
	padding: 0 20upx;
}
input {
	border-bottom: 1upx solid #F4F4F4;
}
.common-input{
	font-size: 30upx;
}
.user-set-btn-disable{
	background: #F4F4F4 !important;
	border: 1upx solid #EEEEEE !important;
	color: #909090 !important;
}
.other-login-title{
	position: relative;
}
.other-login-title:before,.other-login-title:after{
	content: "";
	position: absolute;
	background: #BBBBBB;
	height: 1upx;
	width: 100upx;
	top: 50%;
}
.other-login-title:before{
	left: 25%;
}
.other-login-title:after{
	right: 25%;
}
</style>
