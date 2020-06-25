<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">何为志愿梯度?</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.06.19/来源:齐鲁网</view>
					<view class="label right">
						关键词
						<view>新高考</view>
						<view>志愿</view>
					</view>
				</view>
				<!-- <view class="detail-pic"><image src="/static/img/news/news-img5.png" mode="widthFix"></image></view> -->
				<view class="detail-info">
					志愿梯度主要分为“院校梯度”和“专业梯度”。
				</view>
				<view class="detail-info">
					院校梯度”是指同一录取批次院校由于各种因素,录取分数高低不同形成的差异。一般来说,即使处于同一批次录取院校,知名度高、办学实力也比较强或地理区位优越的院校在录取新生时,录取分数线相对偏高一些:地理位置不优越、知名度不高的学校,录取分数线相对偏低;而介于二者之间的院校录取分数线呈现居中的状态。于是,这三类不同的院校录取分数线使显示出高、中、低三个不同档次。如果三类不同档次的院校在同一批次中从高到低排列,便形成了“院校梯度”。
				</view>
        <view class="detail-info">
					“专业梯度”即在同一院校中的各个专业在录取时形成的分数高、中、低差异。之所以会形成专业梯度,这和高校的专业办学实力、“热门”“冷门”等都有关系。考生在填报专业志愿时,在考虑自身兴趣和特长同时,还要考虑“专业梯度”。
				</view>
        <view class="detail-info">
				  专家咨询入口    http://www.zgckxt.com/xgk/aweb/index
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
// import newstailArray from '../../static/js/newdetail.js'
import {analysis} from '../../static/js/auth.js';
export default {
	data() {
		return {
			scrollHeight: '800px',
			data:{},
			newsid:""
		};
	},
	onLoad(option) {
		// this.newsid=option.newsid;
		// console.log(this.newsid);
		// this.getdetail(this.newsid);
		analysis();
	},
	onReady() {
		let windowHeight = uni.getSystemInfoSync().windowHeight;
		this.scrollHeight = (windowHeight ) + 'px';
		// console.log("scrollHeight"+this.scrollHeight);
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './news'
			});
		},
		getdetail(newid){
			console.log(newid);
			
			newstailArray.forEach((item)=>{
				// debugger;
				if(item.id === newid){
					this.data=item;
				}
			});
		}
	}
};
</script>

<style scoped>
.newdetail {
	background: #f5f5f5;
}
.newdetail-wrap {
	margin-top: 30rpx;
	padding: 30rpx;
	background: #fff;
}
.newdetail-wrap .news-titile {
	margin-bottom: 24rpx;
	text-align: center;
	color: #333;
	font-size: 36rpx;
	font-weight: 600;
}
.news-source {
	/* display: flex; */
	justify-content: space-between;
	padding-bottom: 30rpx;
	border-bottom: 1px solid #E5E5E5;
}
.news-source .label {
	display: flex;
	justify-content: space-around;
}
.news-source .news-time,.news-source .label {
	color: #777777;
	font-size: 32rpx;
}
.news-source .label view {
	margin-left: 10rpx;
	padding: 0 10rpx;
}
.news-source .label view:nth-child(1) {
	color: #29a5df;
	border: 1px solid #29a5df;
	background: #ebf7ff;
}
.news-source .label view:nth-child(2) {
	color: #ff7664;
	border: 1px solid #ff7664;
	background: #fff3ef;
}
.detail-info {
	padding: 30rpx 0 10rpx 0;
	color: #555555;
	font-size: 32rpx;
}
.detail-info-title {
	color: #333;
	font-weight: 600;
	font-size: 32rpx;
}
</style>
