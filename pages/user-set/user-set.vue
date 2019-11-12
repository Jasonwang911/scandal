<template>
	<view class="body">
		<view class="home-list">
			<block v-for="(item, index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
			<button type="primary" class="user-set-btn">退出登录</button>
		</view>
	</view>
</template>

<script>
	import HomeListItem from '../../components/home/home-list-item.vue'
	
	export default {
		components: {
			HomeListItem
		},
		data() {
			return {
				list: [
					{
						name: '账号与安全',
						clicktype: 'navigateTo',
						url: '../../pages/user-set-repassword/user-set-repassword'
					},
					{
						name: '绑定邮箱',
						clicktype: '',
						url: ''
					},
					{
						name: '小纸条',
						clicktype: '',
						url: ''
					},
					{
						name: '清除缓存',
						clicktype: '',
						url: ''
					},
					{
						name: '意见反馈',
						clicktype: '',
						url: ''
					},
					{
						name: '关于我们',
						clicktype: '',
						url: ''
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.body{
	padding: 0 20upx;
}
.home-list>view:first-child{
	border-top: 1upx solid #F4F4F4;
}
</style>
