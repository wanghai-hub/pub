<template>
	<view class="bir-webviwe">
		<uni-nav-bar left-icon="back" @clickLeft="goback()" title="直播视频"></uni-nav-bar>
		<iframe id="iframe" class="viewiframe" :src="zhibodetail.courseLiveUrl" ref="iframe" @onload="onLoad"></iframe>
	</view>
</template>

<script>
	import api from '../../api/api.js';
	import {analysis} from '../../static/js/auth.js';
	export default {
		data(){
			return{
				courseId:"",
				zhibodetail:{},
				page:"",//从哪个页面跳转过来的(1)
				subpage:""//二级
			}
		},
		onLoad(option){
			// debugger;
			this.courseId=option.courseId;
			this.flagpage=option.flagpage;//从哪个页面调过来的
			this.page=option.page;
			this.tabid=option.tabid;
			this.state=option.state;
			this.subpage=option.subpage;
			this.getPlayingDetail(this.courseId);
			analysis();
		},
		methods:{
			// 获取数据
			getPlayingDetail(id){
				api.getPlayingDetail({'courseId':id}).then(res => {
					// debugger;
					console.log(res);
					if(res.status=="2000000"){
						let result=res.data;
						this.zhibodetail=result;
					}else{
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
						return false;
					}
				});
			},
			// 返回
			goback(){
				if(this.flagpage === 'list'){
					uni.reLaunch({
						url:"../course/list?page="+this.page
					})
				}else if(this.flagpage === 'index'){
					uni.reLaunch({
						url:"../index/index?page="+this.page
					})
				}else if(this.flagpage ==='detail'){
					uni.reLaunch({
						url:"./detail?id="+this.courseId+"&page="+this.page+"&tabid="+this.tabid+"&state="+this.state
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.bir-webviwe {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	.viewiframe {
		width: 100%;
		height: 100%;
		background: #ffffff;
	}
}
// .return {
// 	padding: 8rpx 20rpx;
// 	border: 1px soild #fff;
// }
</style>
