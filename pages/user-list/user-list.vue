<template>
	<view class="body">
		<!-- tab切换 -->
		<swiper-tab-head 
			:tabBars="tabBars" 
			:tabIndex="tabIndex" 
			@tabtap="tabtap"
			:scrollStyle="'border-bottom:0;'"
			:scrollItemStyle="'width: 33.3%;'"
		>
		</swiper-tab-head>
		<!-- 好友列表 -->
		<!-- <block v-for="(item, index) in list" :key="index">
			<user-list :item="item" :index="index"></user-list>
		</block> -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{'height': swiperHeight + 'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item  v-for="(items, key) in newsList" :key="key">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(key)">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item, keyIn) in items.list" :key="keyIn">
								<user-list :item="item" :index="keyIn"></user-list>
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
	import UserList from '../../components/user-list/user-list.vue'
	import LoadMore from '../../components/common/load-more.vue'
	import Nothing from '../../components/common/nothing.vue'
	
	export default {
		components: {
			SwiperTabHead,
			UserList,
			LoadMore,
			Nothing
		},
		data() {
			return {
				swiperHeight: '500',
				tabIndex: 0,
				tabBars: [
					{
						name: '互关',
						num: 10,
						id: 'huguan'
					}, 
					{
						name: '关注',
						num: 20,
						id: 'guanzhu'
					},
					{
						name: '粉丝',
						num: 99,
						id: 'fensi'
					}
				],
				newsList: [
					{
						loadtext: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '小白',
								age: 20,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: '../../static/demo/userpic/11.jpg',
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '小白',
								age: 20,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: '../../static/demo/userpic/11.jpg',
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '小白',
								age: 20,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: '../../static/demo/userpic/11.jpg',
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: '../../static/demo/userpic/11.jpg',
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
							},
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '小白',
								age: 20,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: '../../static/demo/userpic/11.jpg',
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
							}
						]
					},
					{
						loadtext: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '小白',
								age: 20,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: '../../static/demo/userpic/11.jpg',
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
							}
						]
					},
					{
						loadtext: '上拉加载更多',
						list: [
							{
								userpic: '../../static/demo/userpic/12.jpg',
								username: '小白',
								age: 20,
								sex: 1,
								isguanzhu: true
							},
							{
								userpic: '../../static/demo/userpic/11.jpg',
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
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
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
		 if(e.index === 0) {
			 // 点击取消
			 uni.navigateBack({
				 delta:1
			 });
		 }
		},
		methods: {
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
								username: '大拿',
								age: 6,
								sex: 0,
								isguanzhu: false
							}
					this.newsList[index].list.push(obj)
					this.newsList[index].loadtext = '没有更多数据'
				}, 1000)
				// this.newsList[index].loadtext = '没有更多数据'
			},
			tabtap(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
		}
	}
</script>

<style scoped>
</style>
