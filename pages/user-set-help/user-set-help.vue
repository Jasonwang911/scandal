<template>
	<view class="body">
		<uni-collapse ref="add" class="warp" @change="change">
			<uni-collapse-item v-for="(sub, key) in list" :key="key" :open="sub.open" :show-animation="true" :title="sub.subName">
				<view class="content">{{ sub.content }}</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list: [
					{
						type: false,
						subName: '如何申请plus会员',
						open: false,
						showAnimation: true,
						content: '1111'
					},
					{
						type: false,
						subName: '客服何时上线',
						open: false,
						showAnimation: true,
						content: '2222'
					},
					{
						type: false,
						subName: '自定义名字',
						open: false,
						showAnimation: true,
						content: '333'
					}
				]
			}
		},
		methods: {
			change(e) {
				console.log(JSON.stringify(e))
			},
			submit() {
				
			}
		}
	}
</script>

<style scoped>
.body{
	padding: 0 20upx;
}
input {
	border-bottom: 1upx solid #F4F4F4;
}
.common-input{
	font-size: 30upx;
}
.user-set-btn-disable{
	background: #F4F4F4 !important;
	border: 1upx solid #EEEEEE !important;
	color: #909090 !important;
}
.content {
	padding: 30upx;
	background: #f9f9f9;
	color: #666;
}
</style>
