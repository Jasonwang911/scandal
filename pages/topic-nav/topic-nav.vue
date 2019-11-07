<template>
	<view>
		<!-- tabbar 横向滚动组件 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab-head>
		<!-- swiper -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{'height': swiperHeight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item  v-for="(items, key) in newsList" :key="key">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(key)">
						<template v-if="items.list.length>0">
							<!-- 话题列表 -->
							<view class="topic-view">
								<block v-for="(item, keyIn) in items.list" :key="keyIn">
									<topic-list :item="item" :index="keyIn"></topic-list>
								</block>
							</view>
							<!-- 上拉加载 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<nothing></nothing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import SwiperTabHead from '../../components/index/swiper-tab-head.vue'
	import LoadMore from '../../components/common/load-more.vue'
	import Nothing from '../../components/common/nothing.vue'
	import TopicList from '../../components/news/topic-list.vue'
	
	export default {
		components: {
			SwiperTabHead,
			TopicList,
			LoadMore,
			Nothing
		},
		data() {
			return {
				swiperHeight: '500',
				tabIndex: 0,
				tabBars: [
					{
					    name: '关注',
					    id: 'guanzhu'
					}, {
					    name: '推荐',
					    id: 'tuijian'
					}, {
					    name: '体育',
					    id: 'tiyu'
					}, {
					    name: '热点',
					    id: 'redian'
					}, {
					    name: '财经',
					    id: 'caijing'
					}, {
					    name: '娱乐',
					    id: 'yule'
					}, {
					    name: '军事',
					    id: 'junshi'
					}
				],
				newsList: [
					{
						loadtext: '上拉加载更多',
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
					{
						loadtext: '上拉加载更多',
						list: []
					},
					{
						loadtext: '上拉加载更多',
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
					{
						loadtext: '上拉加载更多',
						list: []
					},
					{
						loadtext: '上拉加载更多',
						list: []
					},
					{
						loadtext: '上拉加载更多',
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
					{
						loadtext: '上拉加载更多',
						list: []
					}
				]
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
			tabtap(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			loadmore(index) {
				if(this.newsList[index].loadtext !== '上拉加载更多') return
				// 修改状态
				this.newsList[index].loadtext = '加载中...'
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
					this.newsList[index].list.push(obj)
					this.newsList[index].loadtext = '没有更多数据'
				}, 1000)
				// this.newsList[index].loadtext = '没有更多数据'
			}
		}
	}
</script>

<style scoped>
.topic-view{
	padding: 0 20upx;
}
</style>
