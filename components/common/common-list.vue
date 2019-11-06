<template>
	<view class="common-list u-f  animated fadeInLeft fast">
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view class="u-f-ac u-f-jsb">
				<view class="u-f-ac">
					{{item.username}}
					<view class="icon iconfont tag-sex" :class="[item.sex === 0 ? 'icon-nan' : 'icon-nv']">{{item.age}}</view>
				</view>
				<view class="icon iconfont icon-zengjia tag-guanzhu" v-show="!isguanzhu" @tap="guanzhu">
					关注
				</view>
			</view>
			<view>{{item.title}}</view>
			<view class="big-img  u-f-ajc" v-if="item.titlepic">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
				<template v-if="item.video">
					<view class="index-list-play icon iconfont icon-bofang"></view>
					<view class="index-list-playinfo">{{item.video.looknum}}播放 {{item.video.long}}</view>
				</template>
			</view>
			<!-- 分享的样式 -->
			<view class="common-list-share u-f-ac" v-if="item.share">
				<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
				<view>{{item.share.title}}</view>
			</view>
			<view class="u-f-ajc u-f-jsb common-list-comment">
				<view>{{item.path}}</view>
				<view class="u-f-ajc">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu,
				
			}
		},
		methods: {
			guanzhu() {
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功'
				});
			}
		}
	}
</script>

<style scoped>
	/* 列表样式 */
	.common-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.common-list-l{
		flex-shrink: 0;
	}
	.common-list-l image{
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
	}
	.common-list-r{
		flex: 1;
		margin-left: 15upx;
		padding-bottom: 10upx;
	}
	.common-list-r .big-img image{
		width: 100%;
		border-radius: 10upx;
	}
	.common-list-share{
		background: #EEEEEE;
		/* width: 95%; */
		padding: 10upx;
		border-radius: 10upx;
	}
	.common-list-share>image{
		width: 200upx;
		height: 150upx;
		margin-right: 10upx;
	}
	.common-list-r>view:nth-child(1)>view:first-child {
		color: #999999;
		font-size: 30upx;
	}
	.common-list-r>view:nth-child(1)>view:last-child {
		background: #EEEEEE;
		padding: 0 10upx;
		font-size: 30upx;
	}
	.tag-sex{
		background: #007AFF;
		color: #FFFFFF;
		font-size: 23upx;
		padding: 8upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		line-height: 1;
	}
	.tag-guanzhu{
		border-radius: 10upx;
	}
	.common-list-r>view:nth-child(2) {
		font-size: 32upx;
		margin: 12upx 0;
	}
	.common-list-r>view:nth-child(3) {
		position: relative;
		margin-bottom: 10upx;
	}
	.index-list-play{
		position: absolute;
		font-size: 180upx;
		color: #FFFFFF;
	}
	.index-list-playinfo{
		position: absolute;
		background: rgba(51,51,51,0.72);
		color: #FFFFFF;
		bottom: 8upx;
		right: 8upx;
		border-radius: 40upx;
		padding: 0 20upx;
		font-size: 22upx;
	}
	.common-list-comment>view {
		color: #AAAAAA;
	}
	.common-list-comment>view:nth-child(2)>view {
		padding: 0 8upx;
		font-size: 25upx;
	}
</style>
