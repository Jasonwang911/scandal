<template>
	<view>
		<!-- 详情信息 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
		<!-- tab切换 -->
		<swiper-tab-head 
			:tabBars="tabBars" 
			:tabIndex="tabIndex" 
			@tabtap="tabtap"
			:scrollStyle="'border-bottom:0;'"
			:scrollItemStyle="'width: 50%;'"
		>
		</swiper-tab-head>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<block v-for="(item, index) in tablist" :key="index">
				<template v-if="tabIndex === index">
					<!-- 列表 -->
					<block v-for="(i, k) in item.list" :key="k">
						<common-list :item="i" :index="k"></common-list>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadtext="item.loadtext"></load-more>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import TopicInfo from '../../components/topic/topic-info.vue'
	import SwiperTabHead from '../../components/index/swiper-tab-head.vue'
	import CommonList from '../../components/common/common-list.vue'
	import LoadMore from '../../components/common/load-more.vue'
	
	export default {
		components: {
			TopicInfo,
			SwiperTabHead,
			CommonList,
			LoadMore
		},
		data() {
			return {
				topicInfo: {
					titlepic: '../../static/demo/topicpic/13.jpeg',
					title: '忆往事 敬余生',
					desc: '我是描述',
					totalnum: 1000,
					todaynum: 99
				},
				tabIndex: 0,
				tabBars: [
					{
						name: '默认',
						id: 'moren'
					}, 
					{
						name: '最新',
						id: 'zuixin'
					}
				],
				tablist: [
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
		// 上拉触底时间 生命周期
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(() => {
				// 关闭下拉刷新
				this.getdata()
			}, 2000);
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index
			},
			// 上拉刷新事件，获取数据
			getdata() {
				// 获取数据
				let [data1, data2] = this.tablist
				// 赋值
				this.tablist = [{...data2}, {...data1}]
				// 关闭下拉刷新
				uni.stopPullDownRefresh()
			}
		}
	}
</script>

<style scoped>

</style>
