<template>
	<view>
		<!-- re正在加载中.... -->
	</view>
</template>

<script>
	import api from '../../api/api.js';
	import {analysis} from '../../static/js/auth.js';
	export default {
		data() {
			return {
				
			}
		},
		onLoad(option) {
			
			// uni.showLoading();
			let code=option.code;
			api.auth({"code":code}).then((res)=>{
				if(res.status === 0){
					let data=res.data.data;
					let token=data.token;
					uni.setStorageSync("token",token);
					uni.switchTab({
						url:"../index/index"
					})
					// uni.hideLoading();
				}else {
					uni.showToast({
						title: '网络错误~',
						icon:"none"
					});
					// uni.hideLoading();
				}
			});
			analysis();
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
