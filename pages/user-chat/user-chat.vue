<template>
	<view class="body">
		<!-- 聊天内容 -->
		<block v-for="(item, index) in list" :key="index">
			<user-chat-list :item="item" :index="index"></user-chat-list>
		</block>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import UserChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	import time from '../../common/time.js'
	import UserChatList from '../../components/user-chat/user-chat-list.vue'
	
	export default {
		components: {
			UserChatBottom,
			UserChatList
		},
		data() {
			return {
				text: '',
				list: []
			}
		},
		onLoad() {
			this.getdata()
		},
		methods: {
			submit(text) {
				console.log(text)
			},
			// 获取聊天数据
			getdata() {
				let list = [
					{
						isme: false,
						userpic: '../../static/demo/userpic/10.jpg',
						type: 'text',
						data: '实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实实打实',
						time: '1573126147'
					},
					{
						isme: true,
						userpic: '../../static/demo/userpic/11.jpg',
						type: 'img',
						data: '../../static/demo/1.jpg',
						time: '1573182013'
					}
				]
				for(let i = 0; i < list.length; i++) {
					list[i].gstime = time.gettime.getChatTime(list[i].time, i>0 ? list[i-1].time : 0)
				}
				this.list = list
			}
		}
	}
</script>

<style scoped>
.body{
	padding: 0 10upx 120upx 10upx;
}
</style>
