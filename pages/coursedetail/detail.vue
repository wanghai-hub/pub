<template>
	<view>
		<uni-nav-bar left-icon="back"  title="课程详情" @clickLeft="goback()">
			<!-- <view slot="left" @tap="goback()"></view> -->
			<!-- <view class="topicon-wrap" slot="right">
				<view class="shoucang"></view>
				<view class="share"></view>
			</view> -->
		</uni-nav-bar>
		<scroll-view scroll-y="true" :style="{'height':scrollHeight}" class="phone-bg">
			<view class="detail-wrap">
				<view class="course-img" @tap="toVideo(detail.courseId)">
					<!-- <image src="../../static/img/detail/detailpic.png" mode=""></image> -->
					<!-- <img src="../../static/img/detail/detailpic.png" alt="" class="detailpic" v-if="!detail.coursePic"> -->
					<img :src="detail.coursePic" alt="" class="detailpic">
					<!-- <image src="../../static/img/detail/detail-pic.png" mode=""></image> -->
					<img src="../../static/img/detail/player.png"  class="player-icon" v-if="detail.coursePic"/>
				</view>
				<view class="detail-top">
					<!-- <view class="time-wrap">
						<view class="time">
							<view class="state">距开始</view>
							09:13:16
						</view>
					</view> -->
					<view class="course-title">{{detail.courseName}}</view>
					<view class="speaker-wrap">
						<view class="speaker-con">
							<view class="free" v-if="detail.coursePrice<=0">
							</view>
							<view class="speak-wrap" v-if="detail.speakerName">
								<view class="img" v-if="detail.speakerName">
									<img src="../../static/img/speaker.png"></img>
								</view>
								主讲人：{{detail.speakerName}}</view>
						</view>
						<view class="speaker-intro">{{detail.speakerField}}</view>
					</view>
				</view>
				<view class="start-time-wrap">
					<view class="start-time">
						开课时间：{{detail.liveStartTime}}
					</view>
				</view>
				<view class="detail-tab">
					<view class="tab-wrap">
						<view :class="{'active':contabid === 1}" @tap="detailTab(1)">内容简介 <view class="line"></view></view>
						<!-- <view :class="{'active':contabid === 2}" @tap="detailTab(2)">资料<view class="line"></view></view> -->
						<view :class="{'active':contabid === 3}" @tap="detailTab(3)">讲师<view class="line"></view></view>
					</view>
					<view class="tab-con" v-show="contabid === 1">
						{{detail.courseIntro}}
					</view>
					<!-- <view class="tab-con" v-show="contabid === 2">
						<view v-for="(item,index) in detail.courseAttachments" :key="item.attachmentName">
							<a :href="item.attachmentPath">附件资料</a>
						</view>
					</view> -->
					<view class="tab-con" v-show="contabid === 3">
						{{detail.speakerIntro}}
					</view>
				</view>
				
			</view>
		</scroll-view>
		<view class="detail-bottom">
			<view class="db-left">
				<!-- ，限约{{detail.appointmentMaxValue}}人 -->
				<view class="dbl-con" v-if="detail.courseState == '11'" >
					已约{{detail.appointCount}}人
				</view>
			</view>
			
			<!-- <a href="javascript:;" v-if="item.courseState == 11 && item.appointmentMaxValue <= item.appointCount " v-bind:class="{disable: item.appointmentMaxValue <= item.appointCount, iitbtn: true, right: true }">预约已满</a>
			<a href="javascript:;" v-if="item.courseState == 11 && item.appointmentMaxValue > item.appointCount" v-bind:class="{ iitbtn: true, right: true }" @tap="appointment(item.courseId)">预约</a>
			<a href="javascript:;" v-if="item.courseState == 11 && item.isAppoint === 1 " v-bind:class="{ iitbtn: true, right: true }">已预约</a> -->
			<!-- <a href="javascript:;" v-if="item.courseState == 12" class="iitbtn right" @tap="tozhibo(item.courseLiveUrl,item.courseState,item.courseId,item.courseName)">进入直播</a>
			<view class="huikan-btn right" @tap="huikan(item.coursePlaybackUrl,item.courseState,item.courseId,item.courseName)" v-if="item.courseState == 13">回看</view> -->
			<view class="db-right disactive"  v-if="detail.courseState === '11' && detail.appointmentMaxValue <= detail.appointCount && (detail.isAppoint === '0' || detail.isAppoint === null)">
				预约已满
			</view>
			<view class="db-right active"  v-if="detail.courseState === '11' && detail.appointmentMaxValue > detail.appointCount && (detail.isAppoint === '0' || detail.isAppoint === null)" @tap="appointment(detail.courseId)">
				预约
			</view>
			<view class="db-right disactive"  v-if="detail.courseState === '11' && detail.isAppoint === '1' ">
				已预约
			</view>
			<view class="db-right active"  v-if="detail.courseState === '12' " @tap="toVideo(detail.courseId)">
				直播中
			</view>
			<view class="db-right active"  v-if="detail.courseState === '13' " @tap="toVideo(detail.courseId)">
				课程回顾
			</view>
		</view>
		
	</view>
</template>

<script>
import api from "../../api/api.js";
import {analysis} from '../../static/js/auth.js';
export default {
	data() {
		return {
			scrollHeight: '800px',
			tabid: 1,
			courseId:"",
			detail:{},
			contabid:1,
			page:"",//从哪个页面跳转过来的(1)
			subpage:"",//二级页面
			tabid:"",//如果是list，tabid
			state:"",//如果是list,tab下面的哪个栏目
			token:"",//是否登录
			subpage:"datail"
		};
	},
	onLoad(option) {
		// debugger;
		this.courseId=option.id;
		this.getDetail(this.courseId);
		this.page=option.page;
		this.subpage=option.subpage || 'detail';
		this.tabid=option.tabid;
		this.state=option.state;
		this.token=uni.getStorageSync("token") || '';
		analysis();
	},
	onReady() {
		let windowHeight = uni.getSystemInfoSync().windowHeight;
		this.scrollHeight = (windowHeight - 44 - 56) + 'px';
	},
	methods: {
		goback() {
			// window.location.href = './list';
			// debugger;
			if(this.page === 'list'){
				// debugger;
				uni.switchTab({
					url:'../course/list?tabid='+this.tabid+'&state='+this.state
				})
				// window.location.href='../course/list?tabid='+this.tabid+'&state='+this.state
			}else if(this.page ==='index'){
				uni.switchTab({
					url:'../index/index'
				})
			}
			
			// uni.navigateBack({
			// 	delta:1
			// })
		},
		// 获取数据
		getDetail(id){
			api.getDetail({'courseId':id}).then(res => {
				console.log(res);
				if(res.status=="2000000"){
					this.detail=res.data;
				}else{
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					return false;
				}
			});
		},
		// 视频地址
		toVideo(courseid){
			let courseId=encodeURIComponent(JSON.stringify(courseid));
			let time=34;
			let zhiboflag=this.detail.courseState;
			let url=this.detail.courseState === '12'?this.detail.courseLiveUrl:this.detail.coursePlaybackUrl;
			// debugger;
			if(zhiboflag === '11'){
				uni.showToast({
					title: '直播未开始',
					icon:"none"
				});
			}else if(zhiboflag === '12'){
				if(url === ""){
					uni.showToast({
						title: '未找到视频源',
						icon:"none"
					});
				}else {
					if(!this.token){
						uni.showToast({
							title: '请先登录后再操作',
							icon:"none"
						});
						return false;
					}
					// uni.navigateTo({
					// 	url:"../coursedetail/livevideo?courseId="+courseId+"&time="+time+"&flagpage=detail&page="+this.page+"&tabid="+this.tabid+"&state="+this.state
					// })
					uni.navigateTo({
						url:'../coursedetail/zhibo?courseId='+courseid+"&page="+this.page+"&tabid="+this.tabid+"&state="+this.state+"&flagpage=detail"
					})
					// window.location.href=url;
				}
			}else if(zhiboflag === '13'){
				time=0;
				if(url === ""){
					uni.showToast({
						title: '未找到视频源',
						icon:"none"
					});
				}else{
					if(!this.token){
						uni.showToast({
							title: '请先登录后再操作',
							icon:"none"
						});
						return false;
					}
					uni.navigateTo({
						url:"../coursedetail/livevideo?courseId="+courseId+"&flagpage=detail&page="+this.page+"&tabid="+this.tabid+"&state="+this.state
					})
					
				}
				
			}
			
			// console.log(videourl)
		},
		// 详情底部切换
		detailTab(index){
			this.contabid=index;
		},
		// 预约
		appointment(courseId){
			let param={
				courseId:courseId,
				appointFlag:1
			}
			api.appointment(param).then((res)=>{
				console.log(res);
				// debugger;
				
				if (res.status == '2000000') {
					uni.showModal({
						content: "预约成功",
						showCancel:false,
						confirmText: '确定',
						complete: () => {
							// this.getDetail(this.courseId);
							this.detail.isAppoint='1';
							this.detail.appointCount++;
						}
					});
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					return false;
				}
			});
			
		},
	}
};
</script>

<style>
.clearfix:before,
.clearfix:after {
	content: '';
	display: table;
}
.clearfix:after {
	clear: both;
}
.clearfix {
	*zoom: 1;
}
.detail-wrap {
	/* padding-bottom: 50px; */
}
.topicon-wrap .share {
	width: 20px;
	height: 20px;
	background: url(../../static/img/detail/share.png) center center no-repeat;
	background-size: 100% 100%;
}
.topicon-wrap .shoucang {
	width: 20px;
	height: 20px;
	margin-right: 40rpx;
	background: url(../../static/img/detail/shoucang.png) center center no-repeat;
	background-size: 100% 100%;
}
.topicon-wrap {
	display: flex;
	/* margin-top: 10px; */
	padding-right: 20rpx;
}
.course-img {
	position: relative;
	width: 100%;
	/* min-height: 360rpx;
	max-height: 400rpx; */
	/* height: 400rpx; */
	/* display: flex; */
	/* justify-content: center;
	align-items: center; */
	/* overflow: hidden; */
}
.course-img>.detailpic {
	width: 100%;
	/* max-height: 100%; */
}
.course-img .player-icon {
	position: absolute;
	width: 45px;
	height: 45px;
	z-index: 100;
	top:50%;
	margin-top: -23px;
	left: 50%;
	margin-left: -24px;
}

.detail-top {
	padding: 20rpx;
	margin-bottom: 20rpx;
	background: #FFFFFF;
}
.time-wrap {
	display: flex;
	margin-bottom: 10rpx;
}
.time-wrap .time{
	display: flex;
	padding-right: 20rpx;
	border: 1px solid #FF4117;
	border-radius: 40rpx;
	align-items: center;
	color: #FF4117;
}
.time-wrap .time .state {
	padding: 6rpx 20rpx;
	background: #FF4117;
	border-radius: 40rpx;
	color: #fff;
}
.course-title {
	margin-bottom: 10rpx;
	color: #333333;
	font-size: 40rpx;
	font-weight: 600;
}
.speaker-wrap .speaker-con{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20rpx;
}
.speaker-wrap .speaker-con .free {
	height: 40rpx;
	width: 80rpx;
	margin-right: 20rpx;
	background: url(../../static/img/free.png) center no-repeat;
	background-size:100% 100%;
}
.speaker-wrap .speaker-con .speaker {
	display: flex;
	align-items: center;
	color: #555555;
}
.speaker-wrap .speaker-con .speaker .user-icon {
	width: 12px;
	height: 12px;
	margin-right: 10rpx;
}
.speaker-con .speaker .user-icon>img {
	width: 100%;
	height: 100%;
	vertical-align: super;
}
.speaker-intro {
	padding: 10rpx 20rpx;
	background: #F7F8F8;
	color:#777777 ;
}
.start-time-wrap {
	padding: 20rpx;
	background: #FFFFFF;
}
.start-time-wrap .start-time {
	padding-left: 15px;
	background: url(../../static/img/pod4.png) no-repeat left center;
	background-size: 13px 13px;
}
.tab-wrap {
	display: flex;
	align-items: center;
	padding: 20rpx 20rpx 0 20rpx;
	background-color: #F5F5F5;
}
.tab-wrap>view {
	padding: 0 40rpx;
	color: #333;
}
.tab-wrap>view.active {
	color: #333333;
	font-size: 16px;
}
.tab-wrap>view.active .line {
	display: block;
	width: 40%;
	margin:0 auto;
	border: 6rpx solid #FF4117;
}
.tab-con {
	padding: 40rpx;
	background: #FFFFFF;
	color: #555555;
}
.detail-bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #E5E5E5;
	background: #FFFFFF;
	
}
.detail-bottom .db-right{
	font-size: 32rpx;
	color: #fff;
	padding:32rpx 60rpx;
} 
.detail-bottom .db-right.active {
	background: #FF4117;
}
.detail-bottom .db-right.disactive {
	background: #888888;
}
.detail-bottom .db-left .dbl-con {
	padding-left: 22px;
	background: url(../../static/img/detail/people.png) no-repeat left center;
	background-size: 17px 12px;
}
.detail-bottom .db-left {
	padding-left: 20rpx;
	color: #999999;
	font-size: 30rpx;
}
</style>
