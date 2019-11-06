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
							<!-- 图文列表 -->
							<block v-for="(item, keyIn) in items.list" :key="keyIn">
								<index-list :item="item" :index="keyIn"></index-list>
							</block>
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
	import IndexList from '../../components/index/index-list.vue'
	import LoadMore from '../../components/common/load-more.vue'
	import Nothing from '../../components/common/nothing.vue'
	
	export default {
		components: {
			IndexList,
			SwiperTabHead,
			LoadMore,
			Nothing
		},
		data() {
			return {
				swiperHeight: '500',
				tabIndex: 0,
				scrollInto: "",
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
							userpic: '../../static/demo/userpic/11.jpg',
							username: '雏老师',
							isguanzhu: false,
							title: '我是图片',
							type: 'img',  // 图文 img  视频 video
							titlepic: '../../static/demo/datapic/11.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 0    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/12.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '雏老师',
							isguanzhu: false,
							title: '我是图片',
							type: 'img',  // 图文 img  视频 video
							titlepic: '../../static/demo/datapic/13.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 0    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/14.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '雏老师',
							isguanzhu: false,
							title: '我是图片',
							type: 'img',  // 图文 img  视频 video
							titlepic: '../../static/demo/datapic/16.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 0    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/17.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/18.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/19.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/20.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/21.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/22.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '雏老师',
							isguanzhu: false,
							title: '我是图片',
							type: 'img',  // 图文 img  视频 video
							titlepic: '../../static/demo/datapic/23.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 0    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/24.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
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
							userpic: '../../static/demo/userpic/11.jpg',
							username: '雏老师',
							isguanzhu: false,
							title: '我是图片',
							type: 'img',  // 图文 img  视频 video
							titlepic: '../../static/demo/datapic/25.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 0    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/26.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '雏老师',
							isguanzhu: false,
							title: '我是图片',
							type: 'img',  // 图文 img  视频 video
							titlepic: '../../static/demo/datapic/27.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 0    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/28.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						}
					]
				},
				{
					loadtext: '上拉加载更多',
					list: [
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '雏老师',
							isguanzhu: false,
							title: '我是图片',
							type: 'img',  // 图文 img  视频 video
							titlepic: '../../static/demo/datapic/29.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 0    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						},
						{
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大拿',
							isguanzhu: true,
							title: '我是视频',
							type: 'video',  // 图文 img  视频 video
							playnum: 20,
							long: '2:27',
							titlepic: '../../static/demo/datapic/30.jpg',
							infonum: {
								dingnum: 10,
								cainum: 8,
								index: 2    // 0 还没有操作 1 顶  2 踩
							},
							comment: 5,
							share: 10
						}
					]
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
		// 监听原生标题栏搜索输入框点击事件 跳转到搜索页面
		onNavigationBarSearchInputClicked() {
			console.log('打开搜索页')
			// 路由跳转
			uni.navigateTo({
				url: '../search/search'
			});
		},
		// 监听原生标题栏按钮点击事件 
		onNavigationBarButtonTap(e) {
		 if(e.index === 1) {
			 // 跳转到发布页面
			 uni.navigateTo({
			 	url: '../add-input/add-input'
			 });
		 }
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 上拉加载更多
			loadmore(index) {
				if(this.newsList[index].loadtext !== '上拉加载更多') return
				// 修改状态
				this.newsList[index].loadtext = '加载中...'
				// 获取数据
				setTimeout(() => {
					// 获取数据完成
					let obj = {
						userpic: '../../static/demo/userpic/11.jpg',
						username: '雏老师',
						isguanzhu: false,
						title: '我是图片',
						type: 'img',  // 图文 img  视频 video
						titlepic: '../../static/demo/datapic/11.jpg',
						infonum: {
							dingnum: 10,
							cainum: 8,
							index: 0    // 0 还没有操作 1 顶  2 踩
						},
						comment: 5,
						share: 10
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

</style>
