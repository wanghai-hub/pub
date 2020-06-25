<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">为什么要高度重视高考志愿填报?</view>
				<view class="news-source">
					<view class="news-time">2020.05.30</view>
					<view class="label">
						关键词
						<view>新高考</view>
						<view>志愿</view>
					</view>
				</view>
				<view class="detail-info">
					高考志愿是指考生在选择自己希望就读的高校与专业时,按规定形式向省招办和招生院校就自己的决定所表达的意见。高考志愿可以看作是考生与省招办、院校之间按招生规则进行双向选择的协议。在招生政策范围内,只有考生与院校双方都同意的选择,才会圆满实现。高考志愿既是省招办投档的重要依据,又是招生院校录取新生的必要条件。
				</view>
				<view class="detail-pic"><image src="/static/img/news/newsicon3.jpg" mode="widthFix"></image></view>
				<view class="detail-info">
					各省高校招生以考生在指定的网上填报的志愿(含征集志愿)为投档录取依据,没有按省招办统一规定的时间和方式填报志愿的考生,不可能被院校录取。因此,考生要按规定的时间和方式填报志愿,不要轻易放弃每次填报志愿的机会。
				</view>
				<view class="detail-info">
					从近几年的情况看,有些考生不重视志愿的填报,不按网上填报志愿的流程进行操作或随意填报志愿,造成志愿信息无效或落选或录取到不理想的高校:有些高分考生不重视填报下一个批次志愿,上一批次落选后,就失去了录取机会，有些考生对填报独立学院和高职高专院校志愿不太重视,随意性较大。省招办特别提醒考生,一定要高度重视、慎重合理填报志愿,增强志愿的有效性,把握更多的录取机会,争取录取到心仪的大学。
				</view>
				<!-- <view class="detail-pic"><image src="/static/img/news/news-img6.jpg" mode="widthFix"></image></view> -->
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
	display: flex;
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
