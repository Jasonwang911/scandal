<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabIndex="tabIndex" :tabBars="tabBars" @changeTab="changeTab"></news-nav-bar>
		<!-- 内容列表 -->
		<block v-for="(item, index) in list" :key="index">
			<common-list :item="item" :index="index"></common-list>
		</block>
	</view>
</template>

<script>
	import NewsNavBar from '../../components/news/news-nav-bar.vue'
	import CommonList from '../../components/common/common-list.vue'
	
	export default {
		components: {
			NewsNavBar,
			CommonList
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{id: 'guanzhu', name: '关注'},
					{id: '', name: '话题'}
				],
				// 列表数据
				list: [
					// 文字
					{
						userpic: '../../static/demo/userpic/2.jpg',
						username: '普天同庆',
						sex: 0,   // 0 男  1 女
						age: 25,
						isguanzhu: false,
						title: '文字标题',
						titlepic: '',
						video: false,
						share: false,
						path: '北京石景山',
						sharenum: 20,
						commentnum: 19,
						goodnum: 50
					},
					// 图文
					{
						userpic: '../../static/demo/userpic/3.jpg',
						username: '普天同庆',
						sex: 1,   // 0 男  1 女
						age: 25,
						isguanzhu: false,
						title: '图文标题',
						titlepic: '../../static/demo/datapic/15.jpg',
						video: false,
						share: false,
						path: '北京石景山',
						sharenum: 20,
						commentnum: 19,
						goodnum: 50
					},
					// 视频
					{
						userpic: '../../static/demo/userpic/4.jpg',
						username: '普天同庆',
						sex: 0,   // 0 男  1 女
						age: 25,
						isguanzhu: false,
						title: '我是视频',
						titlepic: '../../static/demo/datapic/12.jpg',
						video: {
							looknum: '20w',
							long: '2:45'
						},
						share: false,
						path: '北京石景山',
						sharenum: 20,
						commentnum: 19,
						goodnum: 50
					},
					// 分享
					{
						userpic: '../../static/demo/userpic/1.jpg',
						username: '普天同庆',
						sex: 1,   // 0 男  1 女
						age: 25,
						isguanzhu: false,
						title: '分享模块',
						titlepic: '',
						video: false,
						share: {
							title: '分享标题',
							titlepic: '../../static/demo/datapic/13.jpg'
						},
						path: '北京石景山',
						sharenum: 20,
						commentnum: 19,
						goodnum: 50
					}
				]
			}
		},
		methods: {
			// 切换导航栏选项
			changeTab(index) {
				this.tabIndex = index;
			}
		}
	}
</script>

<style scoped>

</style>
