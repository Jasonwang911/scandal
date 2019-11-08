<template>
	<view>
		<view class="paper-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="paper-left-popup animated fadeIn fast" v-show="show">
			<view class="u-f-ac" hover-class="paper-left-popup-h" @tap="addFriend">
				<view class="icon iconfont icon-sousuo"></view>
				加好友
			</view>
			<view class="u-f-ac" hover-class="paper-left-popup-h" @tap="clear">
				<view class="icon iconfont icon-qingchu"></view>
				清除缓存	
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show: Boolean
		},
		methods: {
			hidepopup() {
				this.$emit('hidepopup')
			},
			addFriend() {
				this.$emit('addFriend')
			},
			clear() {
				this.$emit('clear')
			}
		}
	}
</script>

<style scoped>
	/* 操作菜单 */
	.paper-left-popup-mask{
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 99;
	}
	.paper-left-popup{
		position: fixed;
		right: 0;
		top: 10upx;
		/* #ifdef H5 */
		top: 95upx;
		/*#endif */
		background: #FFFFFF;
		z-index: 100;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
	}
	.paper-left-popup>view{
		padding: 20upx;
		font-size: 35upx;
	}
	.paper-left-popup>view>view{
		margin-right: 20upx;
		font-weight: bold;
	}
	.paper-left-popup-h{
		background: #EEEEEE;
	}
</style>
