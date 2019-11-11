<template>
	<view class="body">
		<detail-info :item="item"></detail-info>
		<!-- 评论区 -->
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<view class="uni-comment u-comment">
			<block v-for="(item, index) in comment.list" :key="index">
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		<!-- 输入框 -->
		<user-chat-bottom  @submit="submit"></user-chat-bottom>
		<!-- 分享弹窗 -->
		<more-share :shareshow="shareshow" @toggle="toggle"></more-share>
	</view>
</template>

<script>
	import DetailInfo from '../../components/detail/detail-info.vue'
	import CommentList from '../../components/detail/comment-list.vue'
	import UserChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	import MoreShare from '../../components/common/more-share.vue'
	
	export default {
		components: {
			DetailInfo,
			CommentList,
			UserChatBottom,
			MoreShare
		},
		data() {
			return {
				shareshow: false,
				comment: {
					count: 4,
					list: [
						// 一级评论
						{
							id: 1,
							fid: 0,
							userpic: '../../static/demo/userpic/11.jpg',
							username: '大白',
							time: '两天前',
							data: '一定要出个版本~'
						},
						{
							id: 2,
							fid: 1,
							userpic: '../../static/demo/userpic/10.jpg',
							username: '大拿',
							time: '两天前',
							data: '秒干！！'
						},
						{
							id: 3,
							fid: 1,
							userpic: '../../static/demo/userpic/10.jpg',
							username: '大拿',
							time: '两天前',
							data: '秒干！！秒干！！'
						},
						{
							id: 4,
							fid: 1,
							userpic: '../../static/demo/userpic/9.jpg',
							username: '雏老师',
							time: '两天前',
							data: '秒你个大脑袋~'
						},
						{
							id: 5,
							fid: 0,
							userpic: '../../static/demo/userpic/8.jpg',
							username: '鸡老师',
							time: '两天前',
							data: '拍脑门'
						}
					]
				},
				item: {}
			}
		},
		onLoad(e) {
			this.initData(JSON.parse(e.detailData))
		},
		// 导航栏按钮
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				// 分享按钮
				console.log('分享按钮')
				this.toggle()
			}
		},
		methods: {
			// 初始化数据
			initData(val) {
				console.log(JSON.stringify(val))
				// 修改导航栏标题
				uni.setNavigationBarTitle({
					title: val.title
				})
				this.item = val
			},
			// 发送信息
			submit(text) {
				let obj = {
					id: 6,
					fid: 0,
					userpic: '../../static/demo/userpic/8.jpg',
					username: '鸡老师',
					time: '两天前',
					data: text
				}
				this.comment.list.push(obj)
			},
			// 弹出分享层
			toggle() {
				this.shareshow = !this.shareshow;
			}
		}
	}
</script>

<style scoped>
.body{
	padding-bottom: 150upx;
}
/* 评论样式 */
.u-comment-title{
	padding: 20upx;
	font-size: 30upx;
	font-weight: bold;
}
.u-comment{
	padding: 0 20upx;
}

</style>
