<template>
	<view class="common-list u-f  animated fadeInLeft fast">
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view>
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac user-name">
						{{item.username}}
						<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
					</view>
					<view class="icon iconfont icon-zengjia tag-guanzhu" v-show="!isguanzhu" @tap="guanzhu">
						关注
					</view>
				</view>
				<view class="common-list-r-time">两天前</view>
			</view>
			<view>{{item.title}}</view>
			<view class="big-img u-f-ajc" v-if="item.titlepic" style="flex-direction:column;">
				<!-- 图片 -->
				<block v-for="(i, k) in item.morepic" :key="k">
					<image :src="i" mode="widthFix" lazy-load @tap="imgDetail(k)"></image>
				</block>
				<!-- <image :src="item.titlepic" mode="widthFix" lazy-load></image> -->
				<template v-if="item.video">
					<view class="index-list-play icon iconfont icon-bofang"></view>
					<view class="index-list-playinfo">{{item.video.looknum}}播放 {{item.video.long}}</view>
				</template>
			</view>
			<!-- 分享的样式 -->
			<!-- <view class="common-list-share u-f-ac" v-if="item.share">
				<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
				<view>{{item.share.title}}</view>
			</view> -->
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
	import TagSexAge from '../common/tag-sex-age.vue'
	
	export default {
		components: {
			TagSexAge
		},
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu
			}
		},
		methods: {
			guanzhu() {
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功'
				});
			},
			imgDetail(index) {
				// 预览图片
				uni.previewImage({
					urls: this.item.morepic,
					current: index
				})
			}
		}
	}
</script>

<style scoped>
		@import url("../../common/list.css");
		.common-list-r .user-name {
			color: #999999;
			font-size: 30upx;
		}
		.common-list-r .tag-guanzhu {
			background: #EEEEEE;
			padding: 0 10upx;
			font-size: 30upx;
		}
		.common-list-r .common-list-r-time {
			padding: 15upx 0;
			color: #CCCCCC;
			font-size: 25upx;
			background: #FFFFFF !important;
		}
		.common-list-r .big-img image{
			margin-bottom: 20upx;
		}
</style>
