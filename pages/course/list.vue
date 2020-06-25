<template>
	<view>
		<view class="page-tab-title white-bg">
			<span :class="this.tabid == 1 ? 'on' : ''" @tap="tabswitch(1)">
				<i></i>
				全部课程
			</span>
			<span :class="this.tabid == 2 ? 'on' : ''" @tap="tabswitch(2)">
				<i></i>
				我的课程
			</span>
		</view>
		<template v-if="this.tabid == 1">
			<view class="course-nav white-bg">
				<a :class="{ type: true, on: this.cstate == '0' }" href="javascript:;" @tap="setCourseState('0')">全部</a>
				<a :class="{ type: true, zbkc: true, on: this.cstate == '12' }" href="javascript:;" @tap="setCourseState('12')">
					<i class="icon"></i>直播课程
				</a>
				<a :class="{ type: true, yykc: true, on: this.cstate == '11' }" href="javascript:;" @tap="setCourseState('11')">
					<i class="icon"></i>预约课程
				</a>
				<a :class="{ type: true, kchg: true, on: this.cstate == '13' }" href="javascript:;" @tap="setCourseState('13')">
					<i class="icon"></i>课程回顾
				</a>
			</view>
		</template>
		<template v-if="this.tabid == 2">
			<view class="course-nav white-bg mycourse-nav">
				<a :class="{ type: true, zbkc: true, on: this.mycstate == '12'}" href="javascript:;" @tap="setMyCourseState('12')">直播课程</a>
				<a :class="{ type: true, kchg: true, on: this.mycstate == '13' }" href="javascript:;" @tap="setMyCourseState('13')">课程回顾</a>
			</view>
		</template>
		
		<!--课程列表-->
		<view v-if="tabid === 1" class="scroll-wrap phone-bg">
			<scroll-view scroll-y="true" :style="{ height: scrollHeight }" @scrolltolower="lowerMoreAllCourse">
				<!-- <view @tap="livevideo()" style="padding:10rpx 20rpx;font-size: 34rpx;">直播测试视频</view>
				<view @tap="livevideo2()" style="padding:20rpx;font-size: 34rpx;">回看测试视频</view> -->
				<template v-if="courseList.length > 0">
					<view class="course-list-wrap">
						<div class="page-wrap course-item" v-for="(item, login) in courseList">
							<view class="clearfix" style="padding-bottom: 20rpx;">
								<div class="course-item-img" @tap="todetail(item.courseId)">
									<!-- <image :src="item.coursePic" mode="widthFix"></image> -->
									<img :src="item.coursePic" />
									<i class="freetag" v-if="item.coursePrice == 0" />
								</div>
								<div class="course-item-ct">
									<a class="name" href="javascript:;" @tap="todetail(item.courseId)">{{ item.courseName }}</a>
									<view class="speak">
										<view class="speak-wrap">
											<i class="img">
												<img src="../../static/img/speaker.png" ></img>
											</i>{{ item.speakerName }}
										</view>
									</view>
									<div class="padding gray-bg" @tap="todetail(item.courseId)">
										<!-- <span class="author">{{ item.speakerName }}</span> -->
										<span class="author-desc gray">{{ item.courseIntro }}</span>
									</div>
								
									<div class="course-item-status">
										<span class="status" v-if="item.courseState === '11'">未开始</span>
										<span class="status in" v-if="item.courseState === '12'">直播中</span>
										<span class="status" v-if="item.courseState=== '13'"  @tap="huikan(item.courseId)">课程回顾</span>
										<span class="time">{{ item.liveStartTime }}</span>
									</div>
								</div>
							</view>
							
							<div class="course-item-tail clearfix">
								<!-- , 限约{{ item.appointmentMaxValue }}人 -->
								<span class="gray" v-if="item.courseState != '13'">已约{{ item.appointCount }}人</span>
								<!-- <a
									v-if="item.courseState == 11"
									v-bind:class="{ disable: item.appointmentMaxValue <= item.appointCount, iitbtn: true, right: true }"
									href="javascript:;"
									v-text="item.appointmentMaxValue <= item.appointCount ? '预约已满' : '预约'"
								></a> -->
								<!-- && item.isAppoint === 0 -->
								<a href="javascript:;" v-if="item.courseState === '11' && item.appointmentMaxValue <= item.appointCount && (item.isAppoint === '0' || item.isAppoint === null)" v-bind:class="{disable: item.appointmentMaxValue <= item.appointCount, iitbtn: true, right: true }">预约已满</a>
								<a href="javascript:;" v-if="item.courseState === '11' && item.appointmentMaxValue > item.appointCount && (item.isAppoint === '0' || item.isAppoint === null) " v-bind:class="{ iitbtn: true, right: true }" @tap="appointment(item.courseId)">预约</a>
								<a href="javascript:;" v-if="item.courseState === '11' && item.isAppoint === '1' " v-bind:class="{disable:true, iitbtn: true, right: true }">已预约</a>
								<a href="javascript:;" v-if="item.courseState === '12'" class="iitbtn right" @tap="tozhibo(item.courseId)">进入直播</a>
								<view class="huikan-btn right" @tap="huikan(item.courseId)" v-if="item.courseState == 13">回看</view>
							</div>
						</div>
					</view>
					<view class="text-center">{{allpagetext}}</view>
				</template>
				<template v-else>
					<view class="nothing">
						<view class="no-img">
							<image src="/static/img/nothing.png" mode="widthFix"></image>
						</view>
						
						<view class="no-text">暂无内容~</view>
					</view>
				</template>
				
			</scroll-view>
			
		</view>
		<view v-if="tabid === 2" class="scroll-wrap phone-bg">
			<scroll-view scroll-y="true" :style="{ height: scrollHeight }" @scrolltolower="lowerMoreAllCourse">
				<template v-if="mycourseList.length > 0">
					<view class="course-list-wrap">
						<div class="page-wrap course-item " v-for="(item, login) in mycourseList">
							<view class="myco-con-wrap clearfix">
								<div class="course-item-img" @tap="todetail(item.courseId)">
									<img :src="item.courseInfo.coursePic" />
									<!-- <i class="freetag" v-if="item.coursePrice==0"/> -->
								</div>
								<div class="course-item-ct mycourse-item-ct">
									<a class="name" href="javascript:;" @tap="todetail(item.courseId)">{{ item.courseInfo.courseName }}</a>
									<div class="myc-author-wrap">
										<span class="author grey-bg">{{ item.courseInfo.speakerName }}</span>
										<span class="time gray" v-if="item.courseInfo.courseState === '12' && mycstate === '12'">{{ item.courseInfo.liveStartTime }}</span>
									</div>

									<div class="course-item-status mycourse-item-status">
										<template v-if="mycstate === '12'">
											<span class="status" v-if="item.courseInfo.courseState === '11'">未开始</span>
											<span class="status in" v-if="item.courseInfo.courseState === '12'">直播中</span>
											<span class="status" v-if="item.courseInfo.courseState=== '13'">已结束</span>
											<span class="alstart" v-if="item.courseInfo.courseState === '12'">
												<span>已开始</span>
												{{ item.alreadyTime }}
											</span>
										</template>
										<span class="time" v-if="item.courseInfo.courseState != '12'">{{ item.timeDuan }}</span>
									</div>
								</div>
							</view>

							<view class="my-huikan" v-if="mycstate === '13'"><view class="huikan-btn" @tap="huikan(item.courseInfo.courseId)">回看</view></view>
							<!-- <div class="course-item-tail clearfix">
							<span class="gray" v-if="item.courseState!=13">已约{{item.appointCount}}人, 限约{{item.appointmentMaxValue}}人</span>
							<a v-if="item.courseState==11" v-bind:class="{disable:item.appointmentMaxValue<=item.appointCount, iitbtn:true, right:true}" href="javascript:;" v-text="(item.appointmentMaxValue<=item.appointCount)?'预约已满':'预约'"></a>
						</div> -->
						</div>
					</view>
					<view class="text-center">{{allpagetext}}</view>
				</template>
				<template v-else>
					<view class="nothing">
						<view class="no-img">
							<image src="/static/img/nothing.png" mode="widthFix"></image>
						</view>
						
						<view class="no-text">暂无内容~</view>
					</view>
				</template>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import api from '../../api/api.js';
import { formatSmallTimeToStr } from '../../static/js/date.js';
import {analysis} from '../../static/js/auth.js';
export default {
	data() {
		return {
			scrollHeight: '800px',
			tabid: 1,
			cstate: '',
			courseList: [],
			mycstate: "12",
			mycourseList: [],
			token:"",//判断是否登录
			// 全部课程分页参数
			allpagenum:1,
			allpagesize:10,
			allpages:1,
			allpagetext:"",
			// 我的课程分页参数
			mypagenum:1,
			allpagesize:10,
			mypages:1
		};
	},
	onLoad(option) {
		// debugger;
		console.log(option);
		this.token=uni.getStorageSync("token") || '';
		// this.tabid=uni.getStorageSync("tabid") || this.tabid;
		// console.log(this.tabid);
		// // debugger;
		// if(this.tabid ){
		// 	if(this.tabid === '1'){
				
		// 		this.cstate=uni.getStorageSync("state") || this.cstate;
		// 		this.getAllCourse(this.cstate);
		// 	}else {
		// 		this.mycstate=uni.getStorageSync("state") || this.mycstate;
		// 		this.getMyCourse(this.mycstate);
		// 	}
		// }else {
		// 	this.tabid= 1;
		// 	this.cstate= '0';
		// 	this.courseList= [],
		// 	this.mycstate= '12';
		// 	this.mycourseList= []
		// 	this.getAllCourse();
		// }
		if(option.tabid){
			
			this.tabid=option.tabid;
			if(this.tabid === 1){
				this.cstate=option.state
				this.getAllCourse(this.cstate);
			}else {
				this.mycstate=option.state;
				this.getMyCourse(this.mycstate);
			}
		}else {
			this.tabid= 1;
			this.cstate= '0';
			this.courseList= [],
			this.mycstate= '12';
			this.mycourseList= []
			this.getAllCourse();
		}
		analysis();
		// uni.$on('listreload',(data)=>{
		// 	console.log(data.tabid);
		// });
	},
	onReady() {
		let windowHeight = uni.getSystemInfoSync().windowHeight;
		this.scrollHeight = (windowHeight - 85) + 'px';
		console.log("scrollHeight"+this.scrollHeight);
	},
	methods: {
		//课程状态
		setCourseState(s) {
			this.cstate = s;
			this.allpagenum=1;
			this.allpages=1;
			this.allpagetext="";
			this.courseList=[];
			if (s === '0') {
				this.getAllCourse();
			} else {
				this.getAllCourse(s);
			}
		},
		tabswitch(idx) {
			this.tabid = idx;
			this.allpagenum=1;
			this.allpages=1;
			this.allpagetext="";
			if (idx == 1) {
				this.cstate='0';
				this.courseList=[];
				this.getAllCourse();
			} else {
				this.mycstate= '12';
				this.mycourseList=[];
				this.getMyCourse('12');
			}
		},
		getAllCourse: function(state) {
			let _that=this;
			let param={
				courseState:state|| '',
				pageNum:_that.allpagenum,
				pageSize:_that.allpagesize
			}
			api.getAllCourse(param).then(res => {
				// console.log(res);
				// debugger;
				if (res.status == '2000000') {
					let result = res.data.list;
					_that.allpages=res.data.pages;
					// debugger;
					if(_that.allpages>1){
						_that.allpagetext="下拉加载更多~"
					}
					result.forEach((item)=>{
						// debugger;
						item.liveStartTime=item.liveStartTime.substring(4,14);
						item.liveStartTime=item.liveStartTime.substring(0,2)+"-"+item.liveStartTime.substring(2)
					});
					_that.courseList=_that.courseList.concat(result);
					console.log(_that.courseList);
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					return false;
				}
			});
		},
		getMyCourse: function(state) {
			console.log(state);
			let _that=this;
			let param={
				courseState:state|| '',
				pageNum:_that.allpagenum,
				pageSize:_that.allpagesize
			}
			api.getMyCourse(param).then(res => {
				// console.log(res);
				if (res.status == '2000000') {
					// debugger;
					let currentTime = new Date().getTime();
					let result = res.data.list;
					_that.allpages=res.data.pages;
					if(_that.allpages>1){
						_that.allpagetext="下拉加载更多~"
					}
					// this.mycourseList = res.data.list;
					result.forEach(item => {
						// debugger;
						let singleCourse = item.courseInfo;
						let liveStartTime = singleCourse.liveStartTime;
						let newstr =
							liveStartTime.substring(0, 4) + '/' + liveStartTime.substring(4, 6) + '/' + liveStartTime.substring(6, 8) + ' ' + liveStartTime.substring(9, 17);
						// let arr=liveStartTime.split(' ');
						let liveStartDate = new Date(newstr).getTime();
						Object.assign(item, { alreadyTime: formatSmallTimeToStr(Math.abs(currentTime - liveStartDate)) });
						let timeDuan = singleCourse.liveStartTime.substring(4, 6)+"-"+ singleCourse.liveStartTime.substring(6, 14)+ '-' + singleCourse.liveEndTime.substring(9, 14);
						Object.assign(item, { timeDuan: timeDuan });
						// debugger;
						item.courseInfo.liveStartTime=item.courseInfo.liveStartTime.substring(4,14);
						item.courseInfo.liveStartTime=item.courseInfo.liveStartTime.substring(0,2)+"-"+item.courseInfo.liveStartTime.substring(2)
					});
					
					_that.mycourseList=_that.mycourseList.concat(result);
					console.log(_that.mycourseList);
					if (_that.mycourseList.length == 0) {
						uni.showToast({
							title: '没有课程',
							icon: 'none'
						});
					}
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					return false;
				}
			});
		},
		todetail: function(e) {
			if(this.tabid === 1){
				uni.navigateTo({
					url: '../coursedetail/detail?id=' + e+"&page=list&tabid="+this.tabid+"&state="+this.cstate
				})
			}else {
				uni.navigateTo({
					url: '../coursedetail/detail?id=' + e+"&page=list&tabid="+this.tabid+"&state="+this.mycstate
				})
			}
			
		},
		// 我的课程--切换
		setMyCourseState(index) {
			this.mycstate = index;
			this.allpagenum=1;
			this.allpages=1;
			this.allpagetext="";
			this.mycourseList=[];
			this.getMyCourse(index);
		},
		// 回看按钮
		huikan(couseid) {
			// debugger;
			let courseId=encodeURIComponent(JSON.stringify(couseid));
			let time=0;
			if(!this.token){
				uni.showToast({
					title: '请先登录后再操作',
					icon:"none"
				});
				return false;
			}
			uni.navigateTo({
				url:"../coursedetail/livevideo?courseId="+courseId+"&time="+time+"&flagpage=list"
			})
			
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
			uni.navigateTo({
				url:'../coursedetail/zhibo?courseId='+courseId+"&flagpage=list"
			})
			// window.location.href=couseurl;
			
		},
		// 预约
		appointment(courseId){
			let courseid=courseId;
			let param={
				courseId:courseId,
				appointFlag:1
			}
			let _that=this;
			api.appointment(param).then((res)=>{
				console.log(res);
				// debugger;
				if (res.status == '2000000') {
					uni.showModal({
						content: "预约成功",
						showCancel:false,
						confirmText: '确定',
						complete: () => {
							// debugger;
							if(_that.tabid === 1){
								this.courseList.forEach((item)=>{
									if(item.courseId === courseid){
										item.isAppoint='1';
										item.appointCount++;
									}
								});
							}else {
								this.courseList.forEach((item)=>{
									if(item.courseId === courseid){
										item.isAppoint='1';
										item.appointCount++;
									}
								});
							}
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
		// 全部课程--下拉加载更多
		lowerMoreAllCourse(e){
			// debugger;
			let _that=this;
			
			 _that.allpagenum=_that.allpagenum + 1;
			if( _that.allpagenum > _that.allpages){
				_that.allpagetext="没有更多内容了~";
				return;
			}
			if(_that.tabid === 1){
				let state=_that.cstate === '0'? '':_that.cstate ;
				_that.getAllCourse(state);
			}else {
				let state=_that.mycstate ;
				_that.getMyCourse(state);
			}
			
			
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
.gray-bg {
	background-color:#F7F8F8 ;
}
span.scan {
	display: inline-block;
	height: 40px;
	width: 40px;
	background: url(../../static/img/scan.png) no-repeat center;
}
.page-tab-title {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 99;
	height: 40px;
	line-height: 40px;
	text-align: center;
}
.page-tab-title span {
	position: relative;
	display: inline-block;
	padding: 0 10px;
	cursor: pointer;
	font-size: 38rpx;
}
.page-tab-title span.on {
	font-size: 38rpx;
	font-weight: 600;
}
.page-tab-title span.on i {
	position: absolute;
	display: inline-block;
	width: 30px;
	height: 3px;
	left: 50%;
	bottom: 0;
	margin-left: -15px;
	background-color: #ff4117;
}
.course-nav {
	position: fixed;
	top: 40px;
	left: 0;
	right: 0;
	z-index: 99;
	display: flex;
	padding: 20rpx 15rpx;
	text-align: center;
	justify-content: space-around;
}
.course-nav a.type {
	/* display: inline-block; */
	/* height: 30px;
		line-height: 30px; */
	border-radius: 30rpx;
	padding: 8rpx 16rpx;
	margin: 0 2px;
	background-color: #fff5f3;
	font-size: 30rpx;
	color: #fe4117;
}
.course-nav a.type.on {
	background-color: #fe4117;
	color: #fff;
}
.course-nav a.zbkc .icon,
.course-nav a.yykc .icon,
.course-nav a.kchg .icon{
	display: inline-block;
	width: 36rpx;
	height: 36rpx;
	margin-right: 8rpx;
	margin-top: -4rpx;
	vertical-align: sub;
}
.course-nav a.zbkc .icon{
	background: url(../../static/img/pod6.png) center no-repeat;
	background-size: 100% 100%;
}
.course-nav a.yykc .icon{
	background: url(../../static/img/pod7.png) center no-repeat;
	background-size:100% 100%;
}
.course-nav a.kchg .icon{
	background: url(../../static/img/pod8.png) center no-repeat;
	background-size: 100% 100%;
}
.course-nav a.zbkc.on .icon{
	background: url(../../static/img/pod9.png) center no-repeat;
	background-size: 100% 100%;
}
.course-nav a.yykc.on .icon{
	background: url(../../static/img/pod10.png) center no-repeat;
	background-size: 100% 100%;
}
.course-nav a.kchg.on .icon{
	background: url(../../static/img/pod11.png) center no-repeat;
	background-size: 100% 100%;
}
.course-item-img i.freetag {
	background: url(../../static/img/free.png) no-repeat center;
	background-size: 100% 100%;
}
.course-item-status {
	height: auto;
}
.course-item-status .status {
	padding-left: 18px;
	background: url(../../static/img/pod3.png) no-repeat 5px;
}
.course-item-status .status.in {
	background: url(../../static/img/pod2.png) no-repeat 5px;
}
.course-item-status .time,
.myc-author-wrap .time {
	padding-left: 15px;
	background: url(../../static/img/pod4.png) no-repeat left center;
	background-size: 13px 13px;
}
.course-item-tail {
	padding-bottom: 0;
}
.course-item-tail span.gray {
	padding-left: 22px;
	background: url(../../static/img/pod5.png) no-repeat left center;
	background-size: 17px 12px;
}
.course-list-wrap {
	/* padding-top: 85px; */
}
.mycourse-nav {
	justify-content: flex-start;
}
.mycourse-item-ct .name {
	height: 40px;
	line-height: 17px;
}
.myc-author-wrap {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 6rpx 10rpx;
}
.myc-author-wrap .author {
	padding: 0 6px;
	margin-right: 6rpx;
	background: #f7f8f8;
	color: #555555;
}
.mycourse-item-status {
	/* display: flex;
		justify-content: flex-start;
		align-items: center; */
	/* margin:0; */
}
.mycourse-item-status .status {
	margin-right: 0;
	padding-right: 10rpx;
	border: 0;
}
.mycourse-item-status .status.in {
	border: 0;
}
.mycourse-item-status .alstart {
	display: inline-block;
	padding-right: 16rpx;
	border: 1px solid #ff0000;
	color: #ff0000;
	border-radius: 26rpx;
}
.mycourse-item-status .alstart > span {
	padding: 10rpx 16rpx;
	background: #ff0000;
	color: #ffffff;
	border-radius: 26rpx;
}
.mycourse-item-status .time {
	color: #777777;
	font-size: 32rpx;
}
.myco-con-wrap {
	padding-bottom: 20rpx;
}
.my-huikan {
	display: flex;
	justify-content: flex-end;
	padding: 20rpx 20rpx 0;
	border-top: 1px solid #e5e5e5;
}
.my-huikan .huikan-btn {
	padding: 10rpx 60rpx;
	color: #ff4117;
	border: 1px solid #ff4117;
	border-radius: 40rpx;
	font-size: 30rpx;
}
.course-item,
.course-item-img {
	border-radius: 10rpx;
}
.course-item-tail .huikan-btn {
	padding: 4px 25px;
	color: #ff4117;
	border: 1px solid #ff4117;
	border-radius: 17px;
	font-size: 12px;
}
.scroll-wrap {
	padding-top: 180rpx;
	padding-bottom: 80rpx;
}
.nothing {
	/* padding-top: 30%;; */
} 
.nothing .no-img{
	width: 80%;
	margin: 0 auto;
	padding-top: 30%;
}
.nothing .no-text {
	text-align: center;
	font-size: 38rpx;
	color: #777777;
}

</style>
