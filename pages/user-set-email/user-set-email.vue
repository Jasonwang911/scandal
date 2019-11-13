<template>
	<view class="body">
		<input type="email" v-model="email" class="uni-input common-input" placeholder="输入需要绑定的邮箱" />
		<input type="text" password="true" v-model="password" class="uni-input common-input" placeholder="输入密码" />
		<button type="primary" class="user-set-btn" :loading="loading" :class="[disable? 'user-set-btn-disable': '']" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				disable: true,
				loading: false
			}
		},
		watch: {
			email(val) {
				this.change()
			},
			password(val) {
				this.change()
			}
		},
		methods: {
			// 监听输入框 
			change() {
				if(this.email && this.password) {
					this.disable = false
				} else {
					this.disable = true
				}
			},
			// 验证层
			check() {
				if(!this.email) {
					uni.showToast({
						title: '邮箱不能为空',
						icon: 'none'
					});
					return false
				}
				// 验证邮箱格式
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(!ePattern.test(this.email)){
					uni.showToast({
						title: '请输入正确邮箱格式',
						icon:"none"
					});
					return false;
				}
				if(!this.password) {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					});
					return false
				}
				if(this.email && this.password) {
					return true;
				}
				uni.showToast({
					title: '请将数据填写完整',
					icon: 'none'
				});
				return false;
			},
			// 提交
			submit() {
				this.loading = true;
				
				if(!this.check()) {
					this.loading = false;
					return false
				}
				this.loading = false; 
				this.disable = true;
				uni.showToast({
					title: '验证通过',
					icon: 'none'
				});
				this.disable = false;
			}
		}
	}
</script>

<style scoped>
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
</style>
