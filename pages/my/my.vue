<template>
	<view class="my">
		<uni-nav-bar  title="我的"></uni-nav-bar>
		<view class="my-top">
			<view class="my-pic">
				<image :src="myicityinfo.avatarUrl" mode="widthFix" v-if="myicityinfo.avatarUrl"></image>
				<image src="/static/img/my/my-pic.png" mode="widthFix" v-if="!myicityinfo.avatarUrl"></image>
			</view>
			<view class="my-info">
				<view class="nickname">{{myicityinfo.nickName}}</view>
				<view class="citynum">城市号: {{myicityinfo.cityAccount}}</view>
			</view>
			<view class="right-arrow">
				<view class="cuIcon-right"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../api/api.js';
	import {analysis} from '../../static/js/auth.js';
	export default {
		data() {
			return {
				myicityinfo:{}
			}
		},
		onLoad() {
			this.getMyICityInfo();
			analysis();
		},
		methods: {
			// 获取数据
			getMyICityInfo(){
				api.myIcityInfo().then(res => {
					// console.log(res);
					if(res.status=="2000000"){
						this.myicityinfo=res.data;
					}else{
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
						return false;
					}
				});
			},
		}
	}
</script>

<style scoped>
.my {
	background: #F6F6F6;
}
.my-top {
	position: relative;
	display: flex;
	align-items: center;
	padding: 40rpx 30rpx;
	background: #FFFFFF;
}
.my-top .my-pic {
	width: 120rpx;
	height: 120rpx;
	margin-right: 20rpx;
	overflow: hidden;
	border-radius: 100%;
}
.my-info .nickname {
	color: #333333;
	font-size: 40rpx;
}
.my-info .citynum {
	font-size: 32rpx;
}
.my-top .right-arrow {
	position: absolute;
	right: 40rpx;
	font-size: 40rpx;
}
</style>
