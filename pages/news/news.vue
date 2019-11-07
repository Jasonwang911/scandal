<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabIndex="tabIndex" :tabBars="tabBars" @changeTab="changeTab"></news-nav-bar>
		<!-- 内容列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :circular="true" :style="{'height': swiperHeight + 'px'}" :current="tabIndex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y class="list" @scrolltolower="loadmore('guanzhu')">
						<template v-if="guanzhu.list.length>0">
							<block v-for="(item, index) in guanzhu.list" :key="index">
								<common-list :item="item" :index="index"></common-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadtext="guanzhu.loadtext"></load-more>
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<nothing></nothing>
						</template>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" type="text" placeholder-class="icon iconfont icon-sousuo topic-search" placeholder="搜索内容" />
						</view>
						<!-- 轮播图 -->
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<block v-for="(item, index) in topic.swiper" :key="index">
								<swiper-item>
									<image :src="item.src" mode="widthFix" lazy-load></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<topic-nav :nav="topic.nav"></topic-nav>
						<!-- 最近更新 -->
						<view class="topic-new animated fadeInLeft fast">
							<view>最近更新</view>
							<block v-for="(item, index) in topic.list" :key="index">
								<topic-list :item="item" :index="index"></topic-list>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import NewsNavBar from '../../components/news/news-nav-bar.vue'
	import CommonList from '../../components/common/common-list.vue'
	import LoadMore from '../../components/common/load-more.vue'
	import Nothing from '../../components/common/nothing.vue'
	import TopicNav from '../../components/news/topic-nav.vue'
	import TopicList from '../../components/news/topic-list.vue'
	
	export default {
		components: {
			NewsNavBar,
			CommonList,
			LoadMore,
			Nothing,
			TopicNav,
			TopicList
		},
		data() {
			return {
				swiperHeight: 500,
				tabIndex: 0,
				tabBars: [
					{id: 'guanzhu', name: '关注'},
					{id: '', name: '话题'}
				],
				topic: {
					swiper: [
						{
							src: '../../static/demo/banner1.jpg'
						},
						{
							src: '../../static/demo/banner2.jpg'
						},
						{
							src: '../../static/demo/banner1.jpg'
						},
					],
					nav: [
						{name: '最新'},
						{name: '游戏'},
						{name: '打卡'},
						{name: '情感'},
						{name: '故事'},
						{name: '喜爱'}
					],
					list: [
						{
							titlepic: '../../static/demo/topicpic/1.jpeg',
							title: '话题名称1',
							desc: '话题描述',
							totalnum: 40,
							todaynum: 10
						},
						{
							titlepic: '../../static/demo/topicpic/2.jpeg',
							title: '话题名称2',
							desc: '话题描述',
							totalnum: 40,
							todaynum: 10
						},
						{
							titlepic: '../../static/demo/topicpic/3.jpeg',
							title: '话题名称3',
							desc: '话题描述',
							totalnum: 40,
							todaynum: 10
						}
					]
				},
				guanzhu: {
					loadtext: '上拉加载更多',
					// 列表数据
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
			}
		},
		onLoad() {
			uni.getSystemInfo({
					success: (res) => {
						// 获取视窗的高度
						this.swiperHeight = res.windowHeight - uni.upx2px(100)
					}
			});
		},
		methods: {
			// 切换导航栏选项
			changeTab(index) {
				this.tabIndex = index;
			},
			// 滑动切换
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载
			loadmore(name) {
				if(this[name].loadtext !== '上拉加载更多') return
				// 修改状态
				this[name].loadtext = '加载中...'
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
					this[name].list.push(obj)
					this[name].loadtext = '没有更多数据'
				}, 1000)
				// this.newsList[index].loadtext = '没有更多数据'
			}
		}
	}
</script>

<style scoped>
.search-input {
	padding: 20upx;
}
.search-input input {
	background: #F4F4F4;
	border-radius: 10upx;
}
.topic-search{
	display: flex;
	justify-content: center;
	font-size: 28upx;
}
.topic-swiper{
	padding: 0 20upx 20upx 20upx;
}
.topic-swiper image{
	width: 100%;
	border-radius: 10upx;
}
.topic-new{
	padding: 20upx;
}
.topic-new>view:first-child{
	padding-bottom: 5upx;
	font-size: 32upx;
}
</style>
