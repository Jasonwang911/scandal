<template>
	<view class="index-list animated fadeInLeft fast">
		<view class="index-list1">
			<view class="u-f-ajc user">
				<image :src="item.userpic" mode="widthFix"></image>{{item.username}}
			</view>
			<view class="u-f-ac guanzhu" v-show="!isguanzhu" @tap="guanzhu">
				<view class="icon iconfont icon-zengjia"></view>关注
			</view>
		</view>
		<view class="index-list2" @tap="openDetail">
			{{item.title}}
		</view>
		<view class="index-list3 u-f-ajc" @tap="openDetail">
			<!-- 视频图片 -->
			<image :src="item.titlepic" mode="widthFix"></image>
			<template  v-if="item.type === 'video'">
				<view class="index-list-play icon iconfont icon-bofang"></view>
				<view class="index-list-playinfo">{{item.playnum}}播放 {{item.long}}</view>
			</template>
		</view>
		<view class="index-list4">
			<view>
				<view :class="{'active': infonum.index === 1}" @tap="caozuo('ding')"><view class="icon iconfont icon-icon_xiaolian-mian"></view>{{infonum.dingnum}}</view>
				<view :class="{'active': infonum.index === 2}" @tap="caozuo('cai')"><view class="icon iconfont icon-kulian"></view>{{infonum.cainum}}</view>
			</view>
			<view>
				<view><view class="icon iconfont icon-pinglun"></view>{{item.playnum}}</view>
				<view><view class="icon iconfont icon-zhuanfa"></view>{{item.share}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: function() {
					return {}
				}
			},
			index: Number
		},
		data() {
			return {
				 isguanzhu: this.item.isguanzhu,
				 infonum: this.item.infonum
			}
		},
		methods: {
			// 关注
			guanzhu() {
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功'
				})
			},
			// 顶踩
			caozuo(type) {
				switch(type) {
					case 'ding': 
						if(this.infonum.index === 1) return;
						this.infonum.dingnum ++
						if(this.infonum.index === 2) {
							this.infonum.cainum --
						}
						this.infonum.index = 1;
						break;
					case 'cai':
						if(this.infonum.index === 2) return;
						this.infonum.cainum ++
						if(this.infonum.index === 1) {
							this.infonum.dingnum --
						}
						this.infonum.index = 2;
						break;
				}
			},
			// 进入详情页
			openDetail() {
				console.log('进入详情页')
			}
		}
	}
</script>

<style scoped>
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
		color: #999999;
	}
	.index-list1 .user image{
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
		margin-right: 10upx;
	}
	.index-list1 .guanzhu{
		background: #F4F4F4;
		border-radius: 5upx;
		padding: 10upx;
	}
	.index-list2{
		padding-top: 15upx;
		font-size: 32upx;
	}
	.index-list3{
		padding-top: 15upx;
		position: relative;
	}
	.index-list3>image{
		width: 100%;
		border-radius: 20upx;
	}
	.index-list-play{
		position: absolute;
		font-size: 180upx;
		color: #FFFFFF;
	}
	.index-list-playinfo{
		position: absolute;
		background: rgba(51,51,51,0.72);
		color: #FFFFFF;
		bottom: 8upx;
		right: 8upx;
		border-radius: 40upx;
		padding: 0 20upx;
		font-size: 22upx;
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
	.index-list4 .active, .index-list4 .active>view{
		color: #C5F61C;
	}
</style>
