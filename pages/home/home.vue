<template>
	<view>
		<template v-if="!islogin">
			<!-- 未登录 -->
			<view class="u-f-ajc">登录之后，体验更多功能</view>
			<!-- 第三方登录 -->
			<other-login></other-login>
			<!-- 账号密码登录 -->
			<view class="u-f-ajc" @tap="openLogin">
				账号密码登录 
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</template>
		<template v-else>
			<!-- 登录 -->
			<home-info :homeInfo="homeInfo"></home-info>
		</template>
		<!-- 数据 -->
		<home-data :homeData="homeData"></home-data>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item, index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	import HomeInfo from '../../components/home/home-info.vue'
	import OtherLogin from '../../components/home/other-login.vue'
	import HomeData from '../../components/home/home-data.vue'
	import HomeListItem from '../../components/home/home-list-item.vue'
	
	export default {
		components: {
			HomeListItem,
			OtherLogin,
			HomeData,
			HomeInfo
		},
		data() {
			return {
				islogin: false,
				homeInfo: {
					userpic: '../../static/demo/userpic/11.jpg',
					username: '大白',
					totalnum: 0,
					todaynum: 1
				},
				homeData: [
					{
						name: '新鲜事',
						num: '1',
						clicktype: '',
						url: ''
					},{
						name: '动态',
						num: '2',
						clicktype: '',
						url: ''
					},{
						name: '评论',
						num: '4',
						clicktype: '',
						url: ''
					},{
						name: '收藏',
						num: '10',
						clicktype: '',
						url: ''
					}
				],
				list: [
					{
						name: '浏览历史',
						icon: 'icon-liulan'
					},
					{
						name: '系统认证',
						icon: 'icon-huiyuanvip'
					},
					{
						name: '系统审核',
						icon: 'icon-keyboard'
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				console.log('跳转到设置页')
				uni.navigateTo({
					url: '../user-set/user-set'
				});
			}
		},
		methods: {
			openLogin() {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style scoped>
/* 未登录 */
.home-adv {
	padding: 20upx;
}
.home-adv image{
	width: 100%;
	height: 150upx;
	border-radius: 20upx;
}
/* 列表 */
.home-list{
	padding: 20upx;
}
.home-list>view:first-child{
	border-top: 1upx solid #F4F4F4;
}
</style>
