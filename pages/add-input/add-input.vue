<template>
	<view>
		<!-- 自定义导航栏 -->
		<view class="example-body">
			<uni-nav-bar left-icon="arrowleft" :statusBar="true" rightText="发布" @click-left="back" @click-right="submit">
				<view class="u-f-ajc title" @tap="changelook">
					{{yinsi}}
					<view class="icon iconfont icon-xialazhankai"></view>
				</view>
			</uni-nav-bar>
		</view>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea class="text-input" v-model="text" placeholder="说一句话把" />
		</view>
		<view>{{text}}</view>
		<!-- 多图上传 -->
		<upload-image @upload="upload"></upload-image>
		<!-- 弹出公告 -->
		<uni-popup ref="popup" type="center" :show="showpopup">
			<view class="gonggao">
				<view class="u-f-ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view>1.xxxxxxx xxxxxx</view>
				<view>2.xxxxxxxxxxx</view>
				<view>3.xxxxxxxxxxx</view>
				<view>4.xxxxxxxxxxx</view>
				<button type="primary" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import UploadImage from '../../components/common/upload-image.vue'
	import UniPopup from '../../components/uni-popup/uni-popup.vue'
	
	export default {
		components: {
			uniNavBar,
			UploadImage,
			UniPopup
		},
		data() {
			return {
				changelookOpts: ['所有人可见', '仅自己可见'],
				yinsi: '所有人可见',
				text: '',
				imageList: [],
				showpopup: true,
				show: false,
				type: '',
				list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
				content: '顶部弹 popup'
			}
		},
		mounted() {
			this.$refs.popup.open()
		},
		methods: {
			// 返回按钮
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 发布时间.
			submit() {
				console.log('发布了')
			}, 
			// 隐私设置
			changelook() {
				console.log('点击设置隐私')
				uni.showActionSheet({
					itemList: this.changelookOpts,
					success: (res) => {
						console.log(JSON.stringify(res));  // {"errMsg":"showActionSheet:ok","tapIndex":1}
						this.yinsi = this.changelookOpts[res.tapIndex]
					}
				});
			},
			// 图片上传数组
			upload(list) {
				this.imageList = list;
			},
			// 弹出框
			change(e) {
				console.log(e.show)
			},
			hidePopup() {
				this.showpopup = false
			}
		}
	}
</script>

<style scoped>
.title{
	margin: 0 auto;
}
.text-input{
	border: 1upx solid #EEEEEE;
}
.gonggao{
	
}
</style>
