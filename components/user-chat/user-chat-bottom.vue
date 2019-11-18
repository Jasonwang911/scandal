<template>
	<view class="user-chat-bottom u-f-ac animated fadeInDown fast">
		<input type="text" placeholder="文明发言" v-model="text" />
		<view class="icon iconfont icon-fabu u-f-ajc fasong" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods: {
			submit() {
				this.$emit('submit', this.text);
				this.text = '';
			}
		}
	}
</script>

<style scoped>
	.user-chat-bottom{
		position: fixed;
		left: 0;
		bottom: 0;
		height: 120upx;
		border-top: 1upx solid #EEEEEE;
		padding: 0 20upx;
		width: 96%;
		background: #FFFFFF;
	}
	.user-chat-bottom>input{
		flex: 1;
		width: 100%;
		margin-right: 20upx;
		padding: 10upx 20upx;
		border-radius: 10upx;
		background: #F7F7F7;
	}
	.user-chat-bottom .fasong{
		width: 80upx;
		font-size: 45upx;
	}
</style>
