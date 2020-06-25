<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	/*每个页面公共css */
	@import "./common/colorui/main.css";
	@import "./common/colorui/icon.css";
	@import './common/uni.css';
	@import './common/style.css';
	
	page {
		background-color: #F8F8F8 ;
		height: 100%;
		font-size: 12px;
		line-height: 1.8;
	}
</style>
