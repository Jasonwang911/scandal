<template>
	<view class="user-list u-f-ac animated fadeInLeft fast">
		<image :src="item.userpic" mode="widthFix"></image>
		<view>
			<view>{{item.username}}</view>
			<view style="display: inline-block;">
				<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
			</view>
		</view>
		<view class="icon iconfont u-f-ajc" :class="[item.isguanzhu ? 'icon-xuanze-yixuan' : 'icon-zengjia1']"></view>
	</view>
</template>

<script>
	import TagSexAge from '../../components/common/tag-sex-age.vue'
	
	export default {
		components: {
			TagSexAge
		},
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style scoped>
.user-list{
	margin: 0 20upx;
	padding: 20upx 0;
	border-bottom: 1upx solid #EEEEEE;
}
.user-list image{
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	flex-shrink: 0;
	margin-right: 20upx; 
}
.user-list>view:first-of-type{
	flex: 1;
}
.user-list>view:last-of-type{
	width: 80upx;
	color: #CCCCCC;
}
.user-list>view:first-of-type>view:first-child{
	font-size: 35upx;
}
.user-list .icon-zengjia1{
	color: #F8791B !important;
}
</style>
