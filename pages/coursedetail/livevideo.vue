<template>
	<view>
		<view class="view-root">
			<video
				ref="myVideos"
				id="myVideo"
				:src="url"
				:enable-progress-gesture="false"
				:page-gesture="false"
				:controls="zhiboFlag==='12'?false:true"
				:show-fullscreen-btn="zhiboFlag==='12'?false:true"
				:show-center-play-btn="zhiboFlag==='12'?false:true"
				:style="boxStyle"
				:autoplay="true"
				object-fit="contain"
				@ended="endvideo"
				v-if="flag"
			></video>
			
			<!-- 直播状态 -->
			<view class="live-state">
				<view class="live-title clearfix">
					<view class="live-left">
						<view class="state">
							<view class="dot" v-if="zhiboFlag === 12">live</view>
							<image src="/static/img/live/live.png" mode=""></image>
						</view>
						<view class="live-text">{{courseName}}</view>
					</view>
					<view class="live-right">
						<image src="/static/img/live/livestate.png" mode=""></image>
					</view>
				</view>
				<view class="close" @tap="closevideo">
					<image src="/static/img/live/close.png" mode=""></image>
				</view>
			</view>
			<!-- 点赞 -->
			 <view class="great">
				 <!-- v-if="praiseFlag === '0' || praiseFlag === null" -->
				<view class="great-icon"  @tap="praiseMe(courseId)"  v-if="praiseFlag === '0' || praiseFlag === null">
					<view class="great-icon-img" >
						<image src="/static/img/detail/praise.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="algreat-icon" v-if="praiseFlag === '1'">
					<view class="great-icon-img" >
						<image src="/static/img/detail/alpraise.png" mode="aspectFit"></image>
					</view>
				</view>
				<!-- <view class="great-icon"  v-if="praiseFlag === '1'">
					<view class="cuIcon-appreciatefill praise-me"></view>
				</view>
				<view class="great-font" v-if="praiseFlag === '0' || praiseFlag === null">点赞</view>
				<view class="great-font" v-if="praiseFlag === '1'">已点赞</view> -->
				<view :animation="animationData" class="praise-me animation-opacity"> +1 </view>
			  </view>
		</view>
		 
	</view>
</template>

<script>
	import api from '../../api/api.js';
	import {analysis} from '../../static/js/auth.js';
	export default {
		data(){
			return {
				// 直播12,回看13
				zhiboFlag:12,//视频状态
				url:"",//视频地址
				time:0,
				videoheight:"800px",
				boxStyle:{
					'height':0,
					'width':'750rpx',
				},
				animationData: {},//动画效果
				praiseFlag:'0',//是否点赞
				courseName:"",//课程名字
				courseId:"",//课程id
				flag:false,//控制视频组件显示与否
				page:"",//父级的父级是哪个页面
				tabid:"",//如果是list，tabid
				state:"",//如果是list,tab下面的哪个栏目
			}
		},
		onLoad(option){
			// this.time=Number(option.time);
			this.courseId=JSON.parse(decodeURIComponent(option.courseId));
			this.flagpage=option.flagpage;//从哪个页面调过来的
			this.page=option.page;
			this.tabid=option.tabid;
			this.state=option.state;
			this.getPlayingDetail(this.courseId);
			analysis();
		},
		onUnload() {
				// 5 页面卸载的时候，清除动画数据
				this.animationData = {};
			},
		onShow() {
			let windowHeight = uni.getSystemInfoSync().windowHeight;
			this.boxStyle.height = windowHeight + 'px';
			
			// 1 在页面创建的时候，创建一个临时动画对象
			  // 初始化一个动画
			 var animation = uni.createAnimation({
				 duration: 1000,
				 timingFunction: 'ease',
			 })
			 this.animation = animation
		},
		methods:{
			 // 实现点赞动画效果
			praiseMe(courseId) {
				// debugger;
				let param={
					courseId:courseId,
				}
				api.courseLike(param).then((res)=>{
					console.log(res);
					// debugger;
					if (res.status == '2000000') {
						uni.showToast({
							title: '点赞成功',
							icon: 'none'
						});
						// 2 调用 step() 来表示一组动画完成
						this.animation.translateX(50).translateY(-110).opacity(1).step({
							duration: 900
						});
						// 3 通过动画实例的export方法导出动画数据传递给组件的animation属性
						this.animationData = this.animation.export();;
						// 4 还原动画
						setTimeout(()=> {
							// debugger;
							this.animation.translateX(0).translateY(0).opacity(0).step({
								duration: 0
							});
							this.animationData = this.animation.export();;
						}, 600);
						this.praiseFlag='1'
						
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
						return false;
					}
				});
				
			},
			// 视频上部关闭按钮
			closevideo(){
				// debugger;
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
				
			},
			// 视频插件播放完成之后触发的事件
			endvideo(){
				uni.navigateBack({
					delta:1
				})
			},
			// 获取数据
			getPlayingDetail(id){
				api.getPlayingDetail({'courseId':id}).then(res => {
					// debugger;
					console.log(res);
					if(res.status=="2000000"){
						let result=res.data;
						this.zhiboFlag=result.courseState;
						if(result.courseState === '12'){
							this.url=result.courseLiveUrl;
						}else if(result.courseState === '13'){
							this.url=result.coursePlaybackUrl;
						}
						this.courseName=result.courseName;
						this.praiseFlag=result.isLike;
						this.flag=true;
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
	.live-state {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		padding: 20rpx;
		justify-content: space-between;
		align-items: center;
	}
	.live-title {
		display: flex;
		align-items: center;
		padding: 4rpx 30rpx;
		background-color: rgba(0,0,0,0.3);
		border-radius: 70rpx;
	}
	.live-title .state {
		display: flex;
		align-items: center;
		margin-right: 30rpx;
	}
	.state .dot {
		margin-right: 20rpx;
		color: #4ECB24;
		text-transform: uppercase;
		font-size: 34rpx;
	}
	.state .dot::before {
		display: inline-block;
		content: "";
		width: 22rpx;
		height: 22rpx;
		margin-right: 20rpx;
		background-color:#4ECB24 ;
		border-radius: 50%;
		vertical-align: center;
	}
	.state image {
		width: 32rpx;
		height: 28rpx;
	}
	.live-text {
		max-width: 450rpx;
		font-size: 34rpx;
		color: #FFFFFF;
	}
	.live-right image {
		width: 80rpx;
		height: 80rpx;
	}
	.close {
		width: 60rpx;
		height: 60rpx;
		background-color: rgba(0,0,0,0.3);
		border-radius: 50%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.close image {
		width: 25rpx;
		height: 25rpx;
	}
	.great {
		position: absolute;
		bottom: 16rpx;
		right: 40rpx;
	}
	.great .great-font {
		padding: 10rpx 30rpx;
		background-color: #FF4117;
		color: #FFFFFF;
		border-radius: 20rpx;
	}
	.praise-me {
		font-weight: 600;
		font-size: 38rpx;
		color: #FF4117;
	}
	 
	.animation-opacity {
		font-weight: bold;
		opacity: 0;
	}
	.great-icon {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160rpx;
		height: 100rpx;
		margin:0 auto;
		/* margin-bottom: -12rpx; */
		/* background-color: #FFFFFF; */
		border-radius: 50%;
		text-align: center;
	}
	.algreat-icon {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120rpx;
		height: 100rpx;
		margin:0 auto;
		/* margin-bottom: -12rpx; */
		/* background-color: #FFFFFF; */
		border-radius: 50%;
		text-align: center;
	}
	.great-icon-img {
		width: 100%;
	}
	.text-orangered {
		color: #FF4117;
	}
</style>
