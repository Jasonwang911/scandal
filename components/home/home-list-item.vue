<template>
	<view class="home-list-item u-f-jsb u-f-ac"  hover-class="home-list-hover" @tap="clickEven">
		<view class="u-f-ac">
			<view v-if="item.icon" class="icon iconfont" :class="item.icon"></view>
			{{item.name}}
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			clickEven() {
				console.log(this.item.clicktype, this.item.url)
				switch(this.item.clicktype) {
					case 'navigateTo':
						if(this.item.url) {
							uni.navigateTo({
								url: this.item.url
							});
						}
						break;
					case 'switchTab':
						if(this.item.url) {
							uni.switchTab({
								url: this.item.url
							});
						}
						break;
				}
			}
		}
	}
</script>

<style scoped>
	.home-list-item{
		padding: 20upx;
		border-bottom: 1upx solid #F4F4F4;
	}
	.home-list-hover {
		background: #F4F4F4;
	}
	.home-list-item>view:first-child{
		color: #333333;
	}
	.home-list-item>view:first-child>view{
		margin-right: 10upx;
	}
	.home-list-item>view:last-child{
		color: #CCCCCC;
	}
</style>
