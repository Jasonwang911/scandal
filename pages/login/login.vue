<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 引入背景图 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<image class="loginhead" src="../../static/common/loginhead.png" mode="widthFix"></image>
		<!-- 输入框和按钮 -->
		<view class="body">
			<!-- 账号密码登录 -->
			<template v-if="!status">
				<input type="text" v-model="username" class="uni-input common-input" placeholder="昵称/手机号/邮箱" />
				<view class="login-input-box">
					<input type="text" password="true" v-model="password" class="uni-input common-input forget-input" placeholder="请输入密码" />
					<view class="forget u-f-ajc">忘记密码？</view>
				</view>
			</template>
			<!-- 手机号和验证码登录 -->
			<template v-else>
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" v-model="phone" class="uni-input common-input phone-input" placeholder="请输入手机号" />
				</view>
				<view class="login-input-box">
					<input type="text" v-model="checknum" class="uni-input common-input forget-input" placeholder="请输入短信验证码" />
					<view class="forget u-f-ajc yanzhengma">
						<view class="u-f-ajc" @tap="getCheckNum">{{!codetime?'获取验证码':codetime+'s'}}</view>
					</view>
				</view>
			</template>
			<button type="primary" class="user-set-btn" :loading="loading" :class="[disable? 'user-set-btn-disable': '']" @tap="submit">登录</button>
		</view>
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding login-font-color" @tap="changeStatus">
			{{status ? '验证码登录' : '手机号验证码登录' }}
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
				status: false,   // false: 账号密码登录  true：手机验证码登录
				// 账号密码登录
				username: '',
				password: '',
				// 手机验证码登录
				phone: '',
				checknum: '',
				loading: false,
				disable: true,
				// 验证码
				codetime: 0,
			}
		},
		watch: {
			username(val) {
				this.onBtnChange()
			},
			password(val) {
				this.onBtnChange()
			},
			phone(val) {
				this.onBtnChange()
			},
			checknum(val) {
				this.onBtnChange()
			}
		},
		methods: {
			submit() {
				if(this.status) {
					// 手机验证码登录
					if(!this.isPhone()) {
						uni.showToast({
							title: '请填写正确的手机号',
							icon: 'none'
						});
						return;
					}
				}else {
					// 账号密码登录
				}
			},
			// 初始化表单
			initInput() {
				this.username = '';
				this.password = '';
				this.phone = '';
				this.checknum = '';
			},
			// 改变按钮状态
			onBtnChange() {
				if(!this.status) {
					// 手机验证码登录
					if(this.username && this.password) {
						this.disable = false;
						return 
					}
				}else {
					// 账号密码登录
					if(this.phone && this.checknum) {
						this.disable = false;
						return 
					}
				}
				this.disable = true;
			},
			// 登录方式切换
			changeStatus() {
				this.initInput();
				this.status = !this.status;
			},
			// 获取验证码
			getCheckNum() {
				if(!this.phone) {
					uni.showToast({
						title: '请填写手机号',
						icon: 'none'
					});
					return;
				}
				if(!this.isPhone()) {
					uni.showToast({
						title: '请填写正确的手机号',
						icon: 'none'
					});
					return;
				}
				if(this.codetime>0) {
					uni.showToast({
						title: '不能重复获取验证码',
						icon: 'none'
					});
					return;
				}
				// 发送请求，发送验证码，请求成功，开启倒计时
				this.codetime = 10;
				let timer = setInterval(() => {
					this.codetime --
					if(this.codetime<1) {
						clearInterval(timer)
					}
				}, 1000)
			},
			// 验证手机号码
			isPhone(){
				let mPattern = /^1[34578]\d{9}$/; 
				return mPattern.test(this.phone);
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
.login-input-box{
	position: relative;
}
.login-input-box .forget-input {
	padding-right: 170upx;
}
.phone{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 80upx;
	z-index: 100;
	color: #333333;
	font-weight: bold;
}
.phone-input {
	padding-left: 90upx;
}
.forget{
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 160upx;
	z-index: 100;
	color: #333333;
}
.yanzhengma view{
	background: #EEEEEE;
	border-radius: 10upx;
	font-size: 25upx;
	width: 150upx;
	padding: 10upx 0;
}
</style>
