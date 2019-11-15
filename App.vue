<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 网路监听（用户目前断网，切换wifi）
			this.lib.NetWork.On();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	/* 引入自定义图标库 */
	@import './common/icon.css';
	/* animation.css动画库 */
	@import './common/animate.min.css';
	/* 公共样式 */
	@import './common/common.css';
</style>