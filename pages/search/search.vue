<template>
	<view>
		{{input}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				input: ''
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
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
