<template>
	<view class="user-space-head u-f-ajc">
		<image :src="getBgImg" mode="widthFix" lazy-load @tap.stop="changeBgImg"></image>
		<view class="user-space-info u-f-ajc u-f-column">
			<image :src="userinfo.userpic" mode="widthFix" lazy-load></image>
			<view class="user-space-margin u-f-ac">
				{{userinfo.username}}
				<tag-sex-age :sex="userinfo.sex" :age="userinfo.age"></tag-sex-age>
			</view>
			<view class="icon iconfont user-space-margin " :class="[isguanzhu ? 'active': 'icon-zengjia']" @tap.stop="guanzhu">
				{{isguanzhu ? '已关注': '关注'}}
			</view>
		</view>
	</view>
</template>

<script>
	import TagSexAge from '../../components/common/tag-sex-age.vue'
	
	export default {
		components: {
			TagSexAge
		},
		props: {
			userinfo: Object
		},
		data() {
			return {
				isguanzhu: this.userinfo.isguanzhu,
				bgimg: this.userinfo.bgimg
			}
		},
		computed: {
			getBgImg() {
				return `../../static/bgimg/${this.bgimg}.jpg`
			}
		},
		methods: {
			// 关注按钮
			guanzhu() {
				this.isguanzhu = !this.isguanzhu;
			},
			// 切换背景
			changeBgImg() {
				let no = parseInt(this.bgimg);
				no < 4 ? no++ : no = 1
				this.bgimg = no;
			}
		}
	}
</script>

<style scoped>
	.user-space-margin{
		margin: 15upx 0;
	}
	.user-space-head {
		position: relative;
		height: 500upx;
		overflow: hidden;
	}
	.user-space-head>image{
		width: 100%;
	}
	.user-space-info{
		position: absolute;
		top: 150upx;
	}
	.user-space-info>image{
		width: 150upx;
		height: 150upx;
		border-radius: 100%;
	}
	.user-space-info>view:first-of-type{
		color: #FFFFFF;
		font-size: 35upx;
		font-weight: bold;
		text-shadow: 2upx 2upx 10upx #333333;
	}
	.user-space-info>view:last-of-type{
		background: #FFE933;
		color: #333333;
		border: 1upx solid #FFE933;
		padding: 5upx 10upx;
		border-radius: 10upx;
		font-size: 28upx;
	}
	.user-space-info .active{
		background: none !important;
		color: #FFFFFF !important;
		border: 1upx solid #FFFFFF !important;
	}
</style>
