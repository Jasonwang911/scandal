<template>
	<view>
		<view class="index-list">
			<view class="index-list1">
				<view>
					<image src="../../static/demo/userpic/11.jpg" mode="widthFix"></image>昵称
				</view>
				<view>
					<view class="icon iconfont icon-zengjia"></view>关注
				</view>
			</view>
			<view class="index-list2">
				我是标题
			</view>
			<view class="index-list3">
				<image src="../../static/demo/datapic/11.jpg" mode="widthFix"></image>
			</view>
			<view class="index-list4">
				<view>
					<view><view class="icon iconfont icon-icon_xiaolian-mian"></view>12</view>
					<view><view class="icon iconfont icon-kulian"></view>4</view>
				</view>
				<view>
					<view><view class="icon iconfont icon-pinglun"></view>12</view>
					<view><view class="icon iconfont icon-zhuanfa"></view>4</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.index-list{
	padding: 20upx;
	border-bottom: 1upx solid #EFEFEF;
}
.index-list1{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.index-list1>view:first-child{
	display: flex;
	align-items: center;
	color: #999999;
}
.index-list1>view:first-child image{
	width: 90upx;
	height: 90upx;
	border-radius: 100%;
	margin-right: 10upx;
}
.index-list1>view:last-child{
	display: flex;
	align-items: center;
	background: #F4F4F4;
	border-radius: 5upx;
	padding: 10upx;
}
.index-list2{
	padding-top: 15upx;
}
.index-list3{
	padding-top: 15upx;
}
.index-list3>image{
	width: 100%;
	border-radius: 20upx;
}
.index-list4{
	padding: 15upx 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #999999;
}
.index-list4>view:first-child{
	display: flex;
	align-items: center;
}
.index-list4>view:last-child{
	display: flex;
	align-items: center;
}
.index-list4>view>view{
	display: flex;
	align-items: center;
}
.index-list4>view>view>view{
	margin: 0upx 8upx;
}
</style>
