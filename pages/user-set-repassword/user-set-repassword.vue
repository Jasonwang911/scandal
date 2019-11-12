<template>
	<view class="body">
		<input type="password" value="" class="uni-input" placeholder="输入旧密码" />
		<input type="password" value="" class="uni-input" placeholder="输入新密码" />
		<input type="password" value="" class="uni-input" placeholder="输入确认密码" />
		<button type="primary" class="user-set-btn">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.body{
	padding: 0 20upx;
}
input {
	border-bottom: 1upx solid #EEEEEE;
}
</style>
