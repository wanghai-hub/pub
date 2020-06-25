<template>
	<div>
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="标题"></uni-nav-bar> -->
		<uni-nav-bar>
			<view class="index-logo">
				<!-- <image src="/static/img/index/logo.png" mode="widthFix"></image> -->
				<img src="../../static/img/index/logo.png" alt="">
			</view>
		</uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }" class="phone-bg">
			<!-- <div class="page-title">新高考平台<span class="right scan"></span></div> -->
			<!-- <div class="page-banner"><img src="../../static/img/index-banner.jpg" /></div> -->
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<!-- <image src="/static/img/index-banner.jpg" mode="widthFix"></image> -->
					<img src="../../static/img/index/banner1.jpg" style="width:100%;height: 100%;"/>
				</swiper-item>
				<swiper-item>
					<img src="../../static/img/index/banner2.jpg" style="width:100%;height: 100%;"/>
				</swiper-item>
				<swiper-item>
					<img src="../../static/img/index/banner3.jpg" style="width:100%;height: 100%;"/>
				</swiper-item>
			</swiper>
			<div class="page-wrap disflex">
				<a class="index-nav" href="javascript:;" @tap="toAllCourse">
					<i class="kc"></i>
					课程
				</a>
				<a class="index-nav" href="javascript:;" @tap="toNewsList">
					<i class="zczx"></i>
					政策资讯
				</a>
				<a class="index-nav" href="javascript:;" @tap="noDevelop">
					<i class="xlfd"></i>
					心理辅导
				</a>
				<a class="index-nav" href="javascript:;" @tap="noDevelop">
					<i class="sygh"></i>
					生涯规划
				</a>
			</div>

			<div class="sub-wrap">
				<span class="colum-title">直播预约</span>
				<a class="more" href="javascript:;" @tap="toAllCourse">更多</a>
			</div>

			<div class="page-wrap course-item" v-for="(item, login) in courseList">
				<view @tap="detail(item.courseId)">
					<div class="course-item-img">
						<img :src="item.coursePic" />
						<i class="freetag" v-if="item.coursePrice == 0" />
					</div>
					<div class="course-item-ct">
						<a class="name" href="javascript:;" style="font-size:600;">{{ item.courseName }}</a>
						<view class="speak">
							<view class="speak-wrap">
								<i class="img">
									<img src="../../static/img/speaker.png"></img>
								</i>{{ item.speakerName }}
							</view>
						</view>
						<div class="padding gray-bg">
							<!-- <span class="author">{{ item.speakerName }}</span> -->
							<span class="author-desc gray">{{ item.courseIntro }}</span>
						</div>
					
						<div class="course-item-status">
							<!-- <span v-bind:class="{in:item.courseState==12,status:true}" v-html="item.courseState==1?'直播中':'已结束'"></span> -->
							<span class="status" v-if="item.courseState === '11'">未开始</span>
							<span class="status in" v-if="item.courseState === '12'" >直播中</span>
							<span class="status" v-if="item.courseState === '13'">已结束</span>
							<span class="time">{{ item.liveStartTime }}</span>
						</div>
					</div>
				</view>
				
				<div class="course-item-tail clearfix">
					<!-- <a
						v-if="item.courseState == 11"
						v-bind:class="{ disable: item.appointmentMaxValue <= item.appointCount, iitbtn: true, right: true }"
						href="javascript:;"
						v-text="item.appointmentMaxValue <= item.appointCount ? '预约已满' : '预约'"
						@tap="appointment(item.courseId)"
					></a> -->
					
					<a href="javascript:;" v-if="item.courseState === '11' && item.appointmentMaxValue <= item.appointCount && (item.isAppoint === '0' || item.isAppoint === null) " v-bind:class="{disable: item.appointmentMaxValue <= item.appointCount, iitbtn: true, right: true }">预约已满</a>
					<a href="javascript:;" v-if="item.courseState === '11' && item.appointmentMaxValue > item.appointCount && (item.isAppoint === '0' || item.isAppoint === null)" v-bind:class="{ iitbtn: true, right: true }" @tap="appointment(item.courseId)">预约</a>
					<a href="javascript:;" v-if="item.courseState === '11' && item.isAppoint === '1' " v-bind:class="{disable:true, iitbtn: true, right: true }">已预约</a>
					<a href="javascript:;" v-if="item.courseState === '12'" class="iitbtn right" @tap="tozhibo(item.courseId)">进入直播</a>
				</div>
			</div>
			<view class="no-content text-center" v-if="courseList.length <= 0">
				<view>暂无内容~</view>
			</view>
		</scroll-view>
		<!-- <div class="login-foot">
			山东省教育厅主办 浪潮云提供技术支持
		</div> -->
	</div>
</template>

<script>
import api from '../../api/api.js';
// import {auth} from '../../static/js/auth.js';
import {analysis} from '../../static/js/auth.js';
// import VConsole from '../../static/js/vconsole.min.js';
export default {
	data() {
		return {
			scrollHeight: '800px',
			type: '',
			isBack: 0,
			courseList: [],
			// 轮播图设置参数
			indicatorDots: false,
			autoplay: true,
			interval: 4000,
			duration: 500,
			token:"",//是否登录
			openid:"",//认证相关参数
			code:"",//认证相关参数
		};
	},
	onLoad(option) {
		// let vConsole=new VConsole();
		// debugger;
		// this.openid=uni.getStorageSync("open_id") || '';
		// this.code=uni.getStorageSync("code") || '';
		// console.log("this.openid=="+this.openid);
		// if(!this.code){
		// 	auth(this.openid);
		// }
		this.token=uni.getStorageSync("token") || '';
		this.isBack = option.isBack;
		this.loadData();
		analysis();
	},
	onReady() {
		let windowHeight = uni.getSystemInfoSync().windowHeight;
		this.scrollHeight = windowHeight - 44 + 'px';
	},
	methods: {
		loadData: function() {
			api.getIndexCourse({}).then(res => {
				console.log(res);
				if (res.status == '2000000') {
					this.courseList = res.data.list;
					this.courseList.forEach((item)=>{
						// debugger;
						item.liveStartTime=item.liveStartTime.substring(4,14);
						item.liveStartTime=item.liveStartTime.substring(0,2)+"-"+item.liveStartTime.substring(2)
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
		// 更多
		toAllCourse(){
			uni.switchTab({
				url:'../course/list'
			})
		},
		// 进入详情
		detail(e) {
			// debugger;
			uni.navigateTo({
				url: '../coursedetail/detail?id=' + e+"&page=index"
			})
		},
		// 预约
		appointment(courseId){
			let param={
				courseId:courseId,
				appointFlag:1
			}
			api.appointment(param).then((res)=>{
				console.log(res);
				if (res.status == '2000000') {
					uni.showModal({
						content: "预约成功",
						showCancel:false,
						confirmText: '确定',
						complete: () => {
							this.loadData();
						}
					});
					// uni.showToast({
					// 	title: "预约成功",
					// 	icon: 'none'
					// });
					
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					return false;
				}
			});
			
		},
		noDevelop(){
			uni.showToast({
				title: '功能暂未开放,敬请期待......',
				icon: 'none'
			});
		},
		// 进入直播
		tozhibo(courseId){
			// debugger;
			// let courseId=encodeURIComponent(JSON.stringify(couseid));
			// let time=34;
			if(!this.token){
				uni.showToast({
					title: '请先登录后再操作',
					icon:"none"
				});
				return false;
			}
			// window.location.href=couseurl;
			uni.navigateTo({
				url:'../coursedetail/zhibo?courseId='+courseId+"&flagpage=index"
			})
		},
		toNewsList(){
			uni.switchTab({
				url:'../news/news'
			})
		}
	}
};
</script>

<style>
page {
	font-size: 14px;
	font-family: 'Microsoft Yahei';
	max-width: 768px;
	margin: 0 auto;
	background: #f1f1f1;
}
span.scan {
	display: inline-block;
	height: 40px;
	width: 40px;
	background: url(../../static/img/scan.png) no-repeat center;
}
.page-banner {
	height: 150px;
	background-color: #ff0000;
}
.page-banner img {
	height: 150px;
	width: 100%;
}
.index-nav {
	display: inline-block;
	width: 150rpx;
	margin: 5px auto;
	text-align: center;
	text-decoration: none;
	color: #333;
}
.index-nav i {
	display: block;
	height: 120rpx;
	width: 120rpx;
	margin: 0 auto;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center;
	background-color: #ccc;
	background-size: 100% 100%;
}
.index-nav i.kc {
	background-image: url(../../static/img/index-nav1.png);
}
.index-nav i.zczx {
	background-image: url(../../static/img/index-nav2.png);
}
.index-nav i.xlfd {
	background-image: url(../../static/img/index-nav3.png);
}
.index-nav i.sygh {
	background-image: url(../../static/img/index-nav4.png);
}
.colum-title {
	background: url(../../static/img/pod1.png) no-repeat left center;
	padding-left: 20px;
	font-size: 16px;
}
.sub-wrap a.more {
	float: right;
	padding-right: 10px;
	font-size: 14px;
	text-decoration: none;
	background: url(../../static/img/right-arr.png) no-repeat right center;
	color: #888;
}
.course-item-img i.freetag {
	background: url(../../static/img/free.png) no-repeat center;
	background-size: 100% 100%;
}
.course-item-status .status {
	padding-left: 18px;
	background: url(../../static/img/pod3.png) no-repeat 5px;
}
.course-item-status .status.in {
	background: url(../../static/img/pod2.png) no-repeat 5px;
}
.course-item-status .time {
	padding-left: 15px;
	background: url(../../static/img/pod4.png) no-repeat left center;
	background-size: 13px 13px;
}
.course-item-ct a.name {
	color: #333333;
	font-size: 32rpx;
	font-weight: 600;
}
.login-foot {
	height: 44px;
	line-height: 44px;
	text-align: center;
	background: #2f92f7;
	color: #fff;
	font-size: 14px;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
}
.index-logo {
	width: 220rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
}
.index-logo>img {
	max-width: 100%;
	max-height: 100%;
	margin-top: 10rpx;
	vertical-align: middle;
}
.no-content {
	width: 100%;
	padding: 30rpx;
	padding-top: 0;
}
.no-content>view {
	padding: 30rpx;
	border-radius: 10rpx;
	background: #fff;
	font-size: 30rpx;
}
</style>
