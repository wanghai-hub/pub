<template>
	<view>
		<!-- 正在加载中.... -->
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
			
			// debugger;
			// uni.clearStorageSync();
			// uni.showLoading();
			let open_id=option.open_id;
			// let open_id='A4668776E3CB8010341CE0965236344F';
			console.log("openid==="+open_id);
			if(!open_id){
				uni.removeStorageSync("token");
				uni.switchTab({
					url:"../index/index"
				})
				return;
			}
			api.isAuth({'open_id':open_id}).then((res)=>{
				// debugger;
				if(res.status === '2000000'){
					let data=res.data;
					let isAuth=data.isAuth;//0未授权1已授权
					if(isAuth === '1'){
						api.auth({"open_id":open_id}).then((res)=>{
							// debugger;
							if(res.status === 0){
								let data=res.data.data;
								let token=data.token;
								uni.setStorageSync("token",token);
								uni.switchTab({
									url:"../index/index"
								});
								// uni.hideLoading();
							}else {
								uni.showToast({
									title: '网络错误~',
									icon:"none"
								});
								// uni.hideLoading();
							}
						});
					}else {
						let authUrl=data.authUrl;
						window.location.href=authUrl;
						// uni.hideLoading();
					}
				}else {
					uni.showToast({
						title: '网络错误~',
						icon:"none"
					});
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
