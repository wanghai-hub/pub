<template>
	<view class="news-wrap">
		<uni-nav-bar title="资讯"></uni-nav-bar>
		<!-- <view class="nothing">
			<view class="no-img">
				<image src="/static/img/nothing.png" mode="widthFix"></image>
			</view>
			
			<view class="no-text">功能暂未开放,敬请期待......</view>
		</view> -->
		<!-- <view class="page-tab-title white-bg">
			<span :class="this.tabid == 1 ? 'on' : ''" @tap="tabswitch(1)">
				<i></i>
				要闻速递
			</span>
			<span :class="this.tabid == 2 ? 'on' : ''" @tap="tabswitch(2)">
				<i></i>
				高考政策
			</span>
		</view> -->
		<!-- 列表 -->
		<!-- style="padding-top: 50px;" -->
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newslist">
				<view class="single-news" v-for="(item, index) in newslist" @tap="toNewsDetail(item.id)" :key="item.id">
					<view class="new-pic"><image :src="item.url" mode="widthFix"></image></view>
					<view class="new-info">
						<view class="news-title">{{ item.title }}</view>
						<view class="news-time">
							<view class="time">
								<i class="time-icon"></i>
								{{ item.time }}
							</view>
							<view class="label">
								<view v-for="value in item.label">{{ value }}</view>
								<!-- <view>安排</view> -->
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
// import img from '../../static/img/course.png';
import {analysis} from '../../static/js/auth.js';
export default {
	data() {
		return {
			scrollHeight: '800px',
			tabid: 1,
			newslist: [
				{
					id: 'news10',
					url: '/static/img/news/1.jpg',
					title: '常见招生名词如何解释？',
					time: '06.19',
					label: ['新高考', '招生']
				},
				{
					id: 'news11',
					url: '/static/img/news/2.jpg',
					title: '什么是专业分数级差？',
					time: '06.19',
					label: ['新高考', '分数级差']
				},
				{
					id: 'news12',
					url: '/static/img/news/3.jpg',
					title: '为什么提前准备志愿填报',
					time: '06.19',
					label: ['新高考', '志愿']
				},
				{
					id: 'news13',
					url: '/static/img/news/4.jpg',
					title: '怎样理解志愿梯度',
					time: '06.19',
					label: ['新高考', '志愿']
				},
				{
					id: 'news7',
					url: '/static/img/news/newsicon7.jpg',
					title: '重磅！山东省招考委发布《关于做好2020年普通高校招生工作的通知》',
					time: '06.05',
					label: ['新高考', '招生']
				},
				{
					id: 'news8',
					url: '/static/img/news/newsicon8.jpg',
					title: '教育部：今年培养订单定向免费本科医学生6822人',
					time: '06.05',
					label: ['中西部', '医学生']
				},
				{
					id: 'news6',
					url: '/static/img/news/newsicon6.jpg',
					title: '最少预留60分钟！山东2020年体育单招',
					time: '06.04',
					label: ['体育单招', '文化考试']
				},
					{
					id: 'news5',
					url: '/static/img/news/newsicon5.jpg',
					title: '好消息！2022年专科退役军人可免试上本科',
					time: '06.02',
					label: ['征兵', '优惠政策']
				},
				{
					id: 'news1',
					url: '/static/img/news/newsicon1.jpg',
					title: '高校录取批次是如何划分的?',
					time: '05.30',
					label: ['新高考', '录取']
				},
				{
					id: 'news2',
					url: '/static/img/news/newsicon2.jpg',
					title: '“平行志愿”是怎么回事？',
					time: '05.30',
					label: ['新高考', '志愿']
				},
				{
					id: 'news3',
					url: '/static/img/news/newsicon3.jpg',
					title: '为什么要高度重视高考志愿填报?',
					time: '05.30',
					label: ['新高考', '志愿']
				},
				{
					id: 'news4',
					url: '/static/img/news/newsicon4.jpg',
					title: '是不是等出了高考分数以后，再关注报考专业和学校就行？',
					time: '05.30',
					label: ['新高考', '报考']
				},
			]
		};
	},
	onReady() {
		let windowHeight = uni.getSystemInfoSync().windowHeight;
		this.scrollHeight = (windowHeight - 44) + 'px';
		// console.log("scrollHeight"+this.scrollHeight);
	},
	onLoad() {
		analysis();
	},
	methods: {
		tabswitch(index) {
			this.tabid = index;
		},
		// 跳转到详情页
		toNewsDetail(index) {
			// uni.navigateTo({
			// 	url:'./newsdetail?newsid='+index
			// })
			if (index === 'news1') {
				uni.navigateTo({
					url: './newsdetailone'
				});
			} else if (index === 'news2') {
				uni.navigateTo({
					url: './newsdetailtwo'
				});
			} else if (index === 'news3') {
				uni.navigateTo({
					url: './newsdetailthree'
				});
			}else if(index === 'news4'){
				uni.navigateTo({
					url: './newsdetailfour'
				});
			}else if(index === 'news5'){
				uni.navigateTo({
					url: './newsdetailfive'
				});
			}else if(index === 'news6'){
				uni.navigateTo({
					url: './newsdetailsix'
				});
			}else if(index === 'news7'){
				uni.navigateTo({
					url: './newsdetailseven'
				});
			}else if(index === 'news8'){
				uni.navigateTo({
					url: './newsdetaileight'
				});
			}else if(index === 'news9'){
				uni.navigateTo({
					url: './newsdetailnine'
				});
			}else if(index ==='news10') {
				uni.navigateTo({
					url: './newsdetailten'
				})
			}else if (index === 'news11'){
				uni.navigateTo({
					url: './newsdetaileleven'
				})
			}else if(index ==='news12') {
				uni.navigateTo({
					url: './newsdetailtwelve'
				})
			}else if (index === 'news13'){
				uni.navigateTo({
					url: './newsdetailthirteen'
				})
			}
		}
	}
};
</script>

<style scoped>
.nothing {
	padding-top: 30%;
}
.nothing .no-img {
	width: 80%;
	margin: 0 auto;
}
.nothing .no-text {
	text-align: center;
	font-size: 38rpx;
	color: #777777;
}
.news-wrap {
	/* padding: 0 30rpx; */
	background: #f5f5f5;
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
.newslist {
	/* padding-top: 50px; */
	/* margin-bottom: 10rpx; */
	padding: 20rpx;
}
.newslist .single-news {
	display: flex;
	padding: 20rpx;
	margin-bottom: 30rpx;
	background: #fff;
	border-radius: 10rpx;
}
.single-news .new-pic {
	width: 170rpx;
	height: 170rpx;
	margin-right: 20rpx;
	overflow: hidden;
}
.single-news .new-pic image {
	height: 100%;
}
.new-info {
	width: calc(100% - 190rpx);
}
.new-info .news-title {
	margin-bottom: 30rpx;
	color: #333333;
	font-size: 36rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-weight: 600;
}
.new-info .news-time {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.news-time .time {
	color: #777777;
	font-size: 26rpx;
}
.news-time .time-icon {
	display: inline-block;
	width: 26rpx;
	height: 26rpx;
	margin-right: 10rpx;
	background: url(../../static/img/pod4.png) center no-repeat;
	background-size: 100% 100%;
	vertical-align: middle;
}
.news-time .label {
	display: flex;
	justify-content: space-around;
}
.news-time .label view {
	margin-right: 20rpx;
	padding: 0 20rpx;
}
.news-time .label view:nth-child(1) {
	color: #29a5df;
	border: 1px solid #29a5df;
	background: #ebf7ff;
}
.news-time .label view:nth-child(2) {
	color: #ff7664;
	border: 1px solid #ff7664;
	background: #fff3ef;
}
</style>
