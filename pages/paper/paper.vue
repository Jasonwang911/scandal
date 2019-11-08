<template>
	<view class="body">
		<!-- 操作菜单 -->
		<left-popup :show="show" @addFriend="addFriend" @clear="clear" @hidepopup="hidepopup"></left-popup>
		<!-- 小纸条列表 -->
		<block v-for="(item, index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	import LeftPopup from '../../components/paper/paper-left-popup.vue'
	import PaperList from '../../components/paper/paper-list.vue'
	import LoadMore from '../../components/common/load-more.vue'
	
	export default {
		components: {
			LeftPopup,
			PaperList,
			LoadMore
		},
		data() {
			return {
				show: false,
				loadtext: '上拉加载更多',
				list: [
					{
						userpic: '../../static/demo/userpic/1.jpg',
						username: '昵称',
						time: '10:21',
						data: '我是信息',
						noreadnum: '12'
					},
					{
						userpic: '../../static/demo/userpic/2.jpg',
						username: '昵称2',
						time: '10:21',
						data: '我是信息',
						noreadnum: '0'
					},
					{
						userpic: '../../static/demo/userpic/3.jpg',
						username: '大拿',
						time: '10:21',
						data: '我是信息',
						noreadnum: '6'
					}
				]
			}
		},
		// 监听下拉
		onPullDownRefresh() {
			setTimeout(() => {
				this.getData()
			}, 1000)
		},
		// 监听上拉加载
		onReachBottom() {
			this.loadMore()
		},
		// 导航栏的按钮事件
		onNavigationBarButtonTap(e) {
			console.log(JSON.stringify(e))
			if(e.index === 0) {
				uni.navigateTo({
					url: '../user-list/user-list'
				});
				this.hidepopup();
			}else if(e.index === 1) {
				this.showpopup();
			}
		},
		methods: {
			// 加好友
			addFriend() {
				console.log('添加好友');
				this.hidepopup();
			},
			// 清除缓存
			clear() {
				console.log('清除缓存');
				this.hidepopup();
			},
			// 隐藏菜单
			hidepopup() {
				this.show = false;
				console.log(this.show)
			},
			showpopup() {
				this.show = true;
			},
			// 获取数据
			getData() {
				let data = [{
						userpic: '../../static/demo/userpic/4.jpg',
						username: '昵称2',
						time: '10:21',
						data: '我是信息',
						noreadnum: '0'
					},
					{
						userpic: '../../static/demo/userpic/5.jpg',
						username: '大拿',
						time: '10:21',
						data: '我是信息',
						noreadnum: '6'
					}]
				let old = this.list
				this.list = data.concat(old)
				uni.stopPullDownRefresh()
			},
			loadMore() {
				if(this.loadtext !== '上拉加载更多') return
				// 修改状态
				this.loadtext = '加载中...'
				// 获取数据
				setTimeout(() => {
					// 获取数据完成
					let obj = [
						{
							userpic: '../../static/demo/userpic/6.jpg',
							username: '昵称',
							time: '10:21',
							data: '我是信息',
							noreadnum: '12'
						},
						{
							userpic: '../../static/demo/userpic/2.jpg',
							username: '昵称2',
							time: '10:21',
							data: '我是信息',
							noreadnum: '0'
						},
						{
							userpic: '../../static/demo/userpic/3.jpg',
							username: '大拿',
							time: '10:21',
							data: '我是信息',
							noreadnum: '6'
						}
					]
					let old = this.list;
					this.list = old.concat(obj)
					this.loadtext = '没有更多数据'
				}, 1000)
				// this.newsList[index].loadtext = '没有更多数据'
			}
		}
	}
</script>

<style scoped>
.body{
	padding: 0 20upx;
}

</style>
