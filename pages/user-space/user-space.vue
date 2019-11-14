<template>
	<view>
		<!-- 背景图+用户信息 -->
		<user-space-head :userinfo="userinfo"></user-space-head>
		<!-- 数据统计 -->
		<view class="user-space-data">
			<home-data :homeData="spaceData"></home-data>
		</view>
		<view style="height: 20upx; background: #F4F4F4;"></view>
		<!-- tab导航 -->
		<!-- tab切换 -->
		<swiper-tab-head 
			:tabBars="tabBars" 
			:tabIndex="tabIndex" 
			@tabtap="tabtap"
			:scrollStyle="'border-bottom:0;'"
			:scrollItemStyle="'width: 33.33%;'"
		>
		</swiper-tab-head>
		<!-- 列表 -->
		<block v-for="(item, index) in tablist" :key="index">
			<template v-if="tabIndex === 0">
				<user-space-userinfo :userinfo="userinfo"></user-space-userinfo>
			</template>
			<template v-else-if="tabIndex === index">
				<!-- 列表 -->
				<block v-for="(i, k) in item.list" :key="k">
					<common-list :item="i" :index="k"></common-list>
				</block>
				<!-- 上拉加载 -->
				<load-more :loadtext="item.loadtext"></load-more>
			</template>
		</block>
		<!-- 操作菜单 -->
		<user-space-popup :show="show" @beizhu="beizhu" @lahei="lahei" @hidepopup="hidepopup"></user-space-popup>
	</view>
</template>

<script>
	import UserSpaceHead from '../../components/user-space/user-space-head.vue'
	import HomeData from '../../components/home/home-data.vue'
	import SwiperTabHead from '../../components/index/swiper-tab-head.vue'
	import UserSpaceUserinfo from '../../components/user-space/user-space-userinfo.vue'
	import CommonList from '../../components/common/common-list.vue'
	import LoadMore from '../../components/common/load-more.vue'
	import UserSpacePopup from '../../components/user-space/user-space-popup.vue'
	
	export default {
		components: {
			UserSpaceHead,
			HomeData,
			SwiperTabHead,
			UserSpaceUserinfo,
			CommonList,
			LoadMore,
			UserSpacePopup
		},
		data() {
			return {
				show: false,
				userinfo: {
					bgimg: 1,
					userpic: '../../static/demo/userpic/16.jpg',
					username: '大白',
					sex: 1,
					age: 40,
					isguanzhu: true,
					regtime: '2018-12-11',
					id: 'sds12122',
					birthday: '1987-7-21',
					job: '看大门的',
					path: '广东-广州',
					qg: '离异'
				},
				spaceData: [
					{
						name: '获赞',
						num: '10k',
						clicktype: '',
						url: ''
					},
					{
						name: '关注',
						num: '11',
						clicktype: '',
						url: ''
					},
					{
						name: '粉丝',
						num: '12',
						clicktype: '',
						url: ''
					}
				],
				tabIndex: 0,
				tabBars: [
					{
						name: '主页',
						id: 'home'
					}, 
					{
						name: '消息',
						id: 'message'
					}, 
					{
						name: '动态',
						id: 'dongtai'
					}
				],
				tablist: [
					{},
					{
						loadtext: '上拉加载更多',
						list: [
							// 文字
							{
								userpic: '../../static/demo/userpic/2.jpg',
								username: '普天同庆',
								sex: 0,   // 0 男  1 女
								age: 25,
								isguanzhu: false,
								title: '文字标题',
								titlepic: '',
								video: false,
								share: false,
								path: '北京石景山',
								sharenum: 20,
								commentnum: 19,
								goodnum: 50
							},
							// 图文
							{
								userpic: '../../static/demo/userpic/3.jpg',
								username: '普天同庆',
								sex: 1,   // 0 男  1 女
								age: 25,
								isguanzhu: false,
								title: '图文标题',
								titlepic: '../../static/demo/datapic/15.jpg',
								video: false,
								share: false,
								path: '北京石景山',
								sharenum: 20,
								commentnum: 19,
								goodnum: 50
							},
							// 视频
							{
								userpic: '../../static/demo/userpic/4.jpg',
								username: '普天同庆',
								sex: 0,   // 0 男  1 女
								age: 25,
								isguanzhu: false,
								title: '我是视频',
								titlepic: '../../static/demo/datapic/12.jpg',
								video: {
									looknum: '20w',
									long: '2:45'
								},
								share: false,
								path: '北京石景山',
								sharenum: 20,
								commentnum: 19,
								goodnum: 50
							}
						]
					},
					{
						loadtext: '上拉加载更多',
						list: [
							// 视频
							{
								userpic: '../../static/demo/userpic/4.jpg',
								username: '普天同庆',
								sex: 0,   // 0 男  1 女
								age: 25,
								isguanzhu: false,
								title: '我是视频',
								titlepic: '../../static/demo/datapic/12.jpg',
								video: {
									looknum: '20w',
									long: '2:45'
								},
								share: false,
								path: '北京石景山',
								sharenum: 20,
								commentnum: 19,
								goodnum: 50
							},
							// 分享
							{
								userpic: '../../static/demo/userpic/1.jpg',
								username: '普天同庆',
								sex: 1,   // 0 男  1 女
								age: 25,
								isguanzhu: false,
								title: '分享模块',
								titlepic: '',
								video: false,
								share: {
									title: '分享标题',
									titlepic: '../../static/demo/datapic/13.jpg'
								},
								path: '北京石景山',
								sharenum: 20,
								commentnum: 19,
								goodnum: 50
							}
						]
					}
				]
			}
		},
		// 页面上拉触底 生命周期
		onReachBottom() {
			if(this.tablist[this.tabIndex].loadtext !== '上拉加载更多') return
			// 修改状态
			this.tablist[this.tabIndex].loadtext = '加载中...'
			// 获取数据
			setTimeout(() => {
				// 获取数据完成
				let obj = {
						userpic: '../../static/demo/userpic/3.jpg',
						username: '普天同庆',
						sex: 1,   // 0 男  1 女
						age: 25,
						isguanzhu: false,
						title: '图文标题',
						titlepic: '../../static/demo/datapic/15.jpg',
						video: false,
						share: false,
						path: '北京石景山',
						sharenum: 20,
						commentnum: 19,
						goodnum: 50
					}
				this.tablist[this.tabIndex].list.push(obj)
				this.tablist[this.tabIndex].loadtext = '没有更多数据'
			}, 1000)
			// this.newsList[index].loadtext = '没有更多数据'
		},
		// 导航栏的按钮事件
		onNavigationBarButtonTap(e) {
			console.log(JSON.stringify(e))
			if(e.index === 0) {
				this.showpopup();
			}
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index
			},
			// popup
			// 拉黑
			lahei() {
				console.log('拉黑');
				this.hidepopup();
			},
			// 备注
			beizhu() {
				console.log('备注');
				this.hidepopup();
			},
			// 隐藏菜单
			hidepopup() {
				this.show = false;
				console.log(this.show)
			},
			showpopup() {
				this.show = true;
			}
		}
	}
</script>

<style scoped>

</style>
