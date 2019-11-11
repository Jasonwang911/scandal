<template>
	<view class="common-list u-f  animated fadeInLeft fast">
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view class="u-f-ac u-f-jsb">
				<view class="u-f-ac">
					{{item.username}}
					<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
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
	import TagSexAge from './tag-sex-age.vue'
	
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
	@import url("../../common/list.css");
</style>
