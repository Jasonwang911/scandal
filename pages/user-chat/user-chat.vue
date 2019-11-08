<template>
	<view>
		<!-- 聊天内容 -->
		<block v-for="(item, index) in list" :key="index">
			<view v-if="item.gstime" class="user-chat-time u-f-ajc">{{item.gstime}}</view>
			<view class="user-chat-list u-f" :class="[item.isme ? 'user-chat-me' : '']">
				<!-- 其他人头像 -->
				<image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
				<view class="user-chat-list-body">
					<!-- 文字 -->
					<text v-if="item.type === 'text'">{{item.data}}</text>
					<!-- 图片 -->
					<image v-if="item.type === 'img'" :src="item.data" mode="widthFix" lazy-load></image>
				</view>
				<!-- 自己的头像 -->
				<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
			</view>
		</block>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import UserChatBottom from '../../components/user-chat/user-chat-bottom.vue'
	import time from '../../common/time.js'
	
	export default {
		components: {
			UserChatBottom
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
						time: '1573126858'
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
.user-chat-time{
	padding: 50upx 0;
	color: #A2A2A2;
	font-size: 24upx;
}
.user-chat-list{
	padding: 0 20upx;
}
.user-chat-list>image{
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	flex-shrink: 0;
}
.user-chat-list-body{
	position: relative;
	background: #F4F4F4;
	padding: 25upx;
	margin-left: 20upx;
	border-radius: 20upx;
	margin-right: 100upx;
}
.user-chat-list-body:after{
	position: absolute;
	left: -30upx;
	right: 0;
	top: 26upx;
	content: '';
	width: 0;
	height: 0;
	border: 16upx solid #F4F4F4;
	border-color: transparent #F4F4F4 transparent transparent;
}
.user-chat-me{
	justify-content: flex-end;
}
.user-chat-me .user-chat-list-body {
	margin-right: 20upx;
	margin-left: 100upx;
}
.user-chat-me .user-chat-list-body:after {
	left: auto;
	right: -26upx;
	border-color: transparent transparent transparent #F4F4F4;
}
/* 图片 */
.user-chat-list-body>image{
	max-width: 150upx;
	max-height: 200upx;
}
</style>
