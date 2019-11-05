<template>
	<view>
		<!-- 自定义导航栏 -->
		<view class="example-body">
			<uni-nav-bar :statusBar="true" @click-right="openAdd">
				<!-- 左边 -->
				<block slot="left">
					<view class="nav-left">
						<view class="icon iconfont icon-qiandao"></view>
					</view>
				</block>
				<!-- 中间 -->
				<block>
					<view class="nav-tab-bar u-f-ajc">
						<block v-for="(tab, index) in tabBars" :key="tab.id">
							<view class="u-f-ajc" :class="{'active': tabIndex === index}" @tap="changeTab(index)">
								{{tab.name}}
								<view v-if="tabIndex === index" class="nav-tab-bar-line"></view>
							</view>
						</block>
					</view>
				</block>
				<!-- 右边 -->
				<block slot="right">
					<view class="nav-right u-f-ajc">
						<view class="icon iconfont icon-bianji1"></view>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<!-- 内容列表 -->
		<view class="common-list u-f">
			<view class="common-list-l">
				<image src="../../static/demo/demo66.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="common-list-r">
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac">
						昵称
						<view class="icon iconfont icon-nv tag-sex"> 25 </view>
					</view>
					<view class="icon iconfont icon-zengjia tag-guanzhu">
						关注
					</view>
				</view>
				<view>我是标题</view>
				<view class="big-img">
					<image src="../../static/demo/datapic/13.jpg" mode="widthFix" lazy-load></image>
				</view>
				<view class="u-f-ajc u-f-jsb">
					<view>北京 望京</view>
					<view class="u-f-ajc">
						<view class="icon iconfont icon-zhuanfa">10</view>
						<view class="icon iconfont icon-pinglun1">8</view>
						<view class="icon iconfont icon-dianzan1">7</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import UniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	
	export default {
		components: {
			UniNavBar
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{id: 'guanzhu', name: '关注'},
					{id: '', name: '话题'}
				]
			}
		},
		methods: {
			openAdd() {
				// 跳转到发布页面
				uni.navigateTo({
					url: '../add-input/add-input'
				});
			},
			// 切换导航栏选项
			changeTab(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style scoped>
.nav-left>view, .nav-right>view{
	font-size: 40upx;
}
.nav-left{
	margin-left: 16upx;
}
.nav-left>view{
	color: #FF9619;
}
.nav-right{
	width: 100%;
}
.nav-tab-bar{
	width: 100%;
	margin-left: -20upx;
	position: relative;
}
.nav-tab-bar>view{
	font-size: 32upx;
	padding: 0 16upx;
	font-weight: bold;
	color: #969696;
}
.nav-tab-bar .active{
	color: #333333;
}
.nav-tab-bar .active .nav-tab-bar-line {
	border-bottom: 5upx solid #FEDE33;
	border-top: 5upx solid #FEDE33;
	width: 70upx;
	border-radius: 20upx;
	position: absolute;
	bottom: -6upx;
}
/* 列表样式 */
.common-list{
	padding: 20upx;
	border-bottom: 1upx solid #EEEEEE;
}
.common-list-l{
	flex-shrink: 0;
}
.common-list-l image{
	width: 90upx;
	height: 90upx;
	border-radius: 100%;
}
.common-list-r{
	flex: 1;
	margin-left: 15upx;
	padding-bottom: 10upx;
}
.common-list-r .big-img image{
	width: 100%;
	border-radius: 10upx;
}
.common-list-r>view:nth-child(1)>view:first-child {
	color: #999999;
	font-size: 30upx;
}
.common-list-r>view:nth-child(1)>view:last-child {
	background: #EEEEEE;
	padding: 0 10upx;
	font-size: 30upx;
}
.tag-sex{
	background: #007AFF;
	color: #FFFFFF;
	font-size: 23upx;
	padding: 8upx 10upx;
	margin-left: 10upx;
	border-radius: 20upx;
	line-height: 1;
}
.tag-guanzhu{
	border-radius: 10upx;
}
.common-list-r>view:nth-child(2) {
	font-size: 32upx;
	margin: 12upx 0;
}
.common-list-r>view:nth-child(3) {
	
}
.common-list-r>view:nth-child(4)>view {
	color: #AAAAAA;
}
.common-list-r>view:nth-child(4)>view:nth-child(2)>view {
	padding: 0 8upx;
}
</style>
