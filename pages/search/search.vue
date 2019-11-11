<template>
	<view>
		<template v-if="list.length>0">
			<block v-for="(item, index) in list" :key="index">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<!-- 上拉加载 -->
			<load-more :loadtext="loadtext"></load-more>
		</template>
		<template v-else-if="list.length<1 && isSearch">
			<!-- 无内容默认 -->
			<nothing></nothing>
		</template>
	</view>
</template>

<script>
	import IndexList from '../../components/index/index-list.vue'
	import Nothing from '../../components/common/nothing.vue'
	import LoadMore from '../../components/common/load-more.vue'
	
	export default {
		components: {
			IndexList,
			Nothing,
			LoadMore
		},
		data() {
			return {
				isSearch: false,
				input: '',
				loadtext: '上拉加载更多',
				list: []
			}
		},
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
		 // e ==> {"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消","__cb__":{"id":"plus201572434536922","htmlId":"__uniapp__service"},"index":0}
		 if(e.index === 0) {
			 // 点击取消
			 uni.navigateBack({
				 delta:1
			 });
		 }
		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e) {
			console.log('输入',JSON.stringify(e))   // {"text":"哈哈"}
			this.input = e.text
		},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed(e) {
			console.log('搜索',JSON.stringify(e))
			if(!e.text) return
			uni.showLoading();
			setTimeout(() => {
				this.getdata()
			}, 1000)
		},
		// 监听页面触底事件
		onReachBottom() {
			setTimeout(() => {
				this.loadMore()
			}, 1000)
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			setTimeout(async () => {
				await this.getdata()
				uni.stopPullDownRefresh();
			}, 1000)
		},
		methods: {
			// 搜索事件
			async getdata() {
				uni.showLoading();
				let obj = [
					{
						userpic: '../../static/demo/userpic/12.jpg',
						username: '雏老师',
						isguanzhu: false,
						title: '我是图片',
						type: 'img',  // 图文 img  视频 video
						titlepic: '../../static/demo/datapic/12.jpg',
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
				]
				this.isSearch = true;
				this.list = obj;
				uni.hideLoading()
			},
			loadMore() {
				if(this.loadtext !== '上拉加载更多') return
				// 修改状态
				this.loadtext = '加载中...'
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
					this.list.push(obj)
					this.loadtext = '没有更多数据'
				}, 1000)
				// this.newsList[index].loadtext = '没有更多数据'
			}
		}
	}
</script>

<style scoped>

</style>
