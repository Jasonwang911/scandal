<template>
	<view class="animated fadeIn fast" v-if="shareshow">
		<view class="more-share-model" @tap="toggle"></view>
		<view class="more-share">
			<view class="more-share-title u-f-ajc">分享到</view>
			<scroll-view scroll-x class="more-share-body">
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-weixin u-f-ajc weixin"></view>
					<view>微信</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-xinlangweibo u-f-ajc weibo"></view>
					<view>新浪微博</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-weixin u-f-ajc penyouquan"></view>
					<view>盆友圈</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-QQ u-f-ajc qq"></view>
					<view>QQ好友</view>
				</view>
				<view class="more-share-item" hover-class="more-share-hover">
					<view class="icon iconfont icon-QQ u-f-ajc qq"></view>
					<view>QQ好友</view>
				</view>
			</scroll-view>
			<view class="more-share-title u-f-ajc" hover-class="more-share-hover" @tap="toggle">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			shareshow: Boolean
		},
		methods: {
			toggle() {
				this.$emit('toggle')
			}
		}
	}
</script>

<style scoped>
	/* 分享功能 */
	.more-share-model{
		background: rgba(51,51,51, 0.49);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
	}
	.more-share{
		position: fixed;
		left: 0;
		bottom: 0;
		background: #FFFFFF;
		width: 100%;
		z-index: 100;
	}
	.more-share-title, .more-share-bottom{
		font-size: 32upx;
		padding: 25upx;
	}
	.more-share-body{
		white-space: normal;
		width: 100%;
		height: 200upx;
		border-bottom: 1upx solid #EEEEEE;
		display: flex;
		line-height: 200upx;
	}
	.more-share-item{
		width: 25%;
		height: 100%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.more-share-item>view:first-child{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		font-size: 55upx;
		color: #FFFFFF;
	}
	.more-share-item>view:last-child{
		color: #7A7A7A;
	}
	.more-share-hover{
		background: #EEEEEE;
	}
	.weixin{
		background: #2AD19B;
	}
	.penyouquan{
		background: #514D4C;
	}
	.weibo{
		background: #EE5E5E;
	}
	.qq{
		background: #4A73BA;
	}
</style>
