<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeimg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ac" @tap="changeone('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="u-f-ac">
						<view>{{birthday}}</view>
						<view class="icon iconfont icon-bianji1"></view>
					</view>
			</picker>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ac" @tap="changeone('qg')">
				<view>{{qg}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ac" @tap="changeone('job')">
				<view>{{job}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			<view class="u-f-ac" @tap="showMulLinkageThreePicker">
				<view>{{pickerText}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<button type="primary" class="user-set-btn" :loading="loading" @tap="submit">完成</button>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	
	const sex = ['未知', '男', '女'];
	const qg = ['未知', '未婚', '已婚'];
	const job = ['看大门', '守大门', '安大门', '修大门'];
	
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				userpic: '../../static/demo/userpic/17.jpg',
				username: '大白',
				sex: '未知',
				birthday: '1979-5-21',
				qg: '未婚',
				job: '看大门',
				pickerText: '北京市-市辖区-西城区',
				loading: false,
				themeColor: '#007AFF',
				cityPickerValueDefault: [0, 0, 1],
			}
		},
		computed: {
				startDate() {
						return this.getDate('start');
				},
				endDate() {
						return this.getDate('end');
				}
		},
		methods: {
			// 修改头像
			changeimg() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
							console.log(JSON.stringify(res.tempFilePaths));
							this.userpic = res.tempFilePaths; 
					}
				})
			},
			// 单列选择
			changeone(val) {
				let arr = []
				switch(val) {
					case 'sex':
						arr = sex
					break;
					case 'qg':
						arr = qg
					break;
					case 'job':
						arr = job
					break;
				}
				uni.showActionSheet({
				    itemList: arr,
				    success: (res) =>  {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
								this[val] = arr[res.tapIndex]
				    }
				})
			},
			// 日期选择器
			bindDateChange(e) {
				console.log(e.target.value)
				this.birthday = e.target.value
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				console.log(JSON.stringify(e))
				this.pickerText = e.label
			},
			submit() {
				
			},
			getDate(type) {
					const date = new Date();
					let year = date.getFullYear();
					let month = date.getMonth() + 1;
					let day = date.getDate();

					if (type === 'start') {
							year = year - 60;
					} else if (type === 'end') {
							year = year + 2;
					}
					month = month > 9 ? month : '0' + month;;
					day = day > 9 ? day : '0' + day;
					return `${year}-${month}-${day}`;
			}
		},
		onBackPress() {
		  if (this.$refs.mpvueCityPicker.showPicker) {
		  	this.$refs.mpvueCityPicker.pickerCancel();
		    return true;
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
/* 列表 */
.user-set-userinfo-list{
	padding: 20upx;
	border-bottom: 1upx solid #F4F4F4;
}
.user-set-userinfo-list>view:first-child{
	font-size: 30upx;
	font-weight: bold;
	color: #9B9B9B;
}
.user-set-userinfo-list>view:last-child>image{
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.user-set-userinfo-list>view:last-child>input{
	text-align: right;
}
.user-set-userinfo-list>view:last-child>view:last-of-type{
	margin-left: 20upx;
	color: #9B9B9B;
}
</style>
