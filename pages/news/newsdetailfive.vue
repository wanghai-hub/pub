<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">好消息！2022年专科退役军人可免试上本科</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.06.02/来源:齐鲁网</view>
					<view class="label right">
						关键词
						<view>征兵</view>
						<view>优惠政策</view>
					</view>
				</view>
				<view class="detail-pic"><image src="/static/img/news/news-img7.png" mode="widthFix"></image></view>
				<view class="detail-info">
					齐鲁网·闪电新闻6月2日讯 今天，闪电新闻记者从教育部官网获悉，教育部、中央军委国防动员部日前联合下发通知，进一步加大工作指导和政策激励力度，全力做好大学生特别是高校毕业生征集工作。从2021年起，扩大“退役大学生士兵”专项硕士研究生招生规模，由目前的每年5000人扩大到8000人，重点向“双一流”建设高校倾斜。专科学历学生参军退役并完成专科学业后，从2022年起，可免试入读普通本科或成人本科。
				</view>
				<view class="detail-info">
					为吸引更多优秀大学生参军入伍，各地按照要求，将常态化设置征兵体检站，畅通大学生入伍绿色通道，做到大学生随时报名应征、随时上站体检。对于大学生特别是毕业生合格人数较多的单位，要纳入省域统筹范畴，确保合格的大学生特别是毕业生能够优先参军入伍。此外，在审批定兵时，要充分征求个人服役意愿，尽量安排到专业对口岗位，最大限度实现人岗匹配。此外，在“24365”校园招聘网将设立专区，为退役大学生士兵求职就业畅通渠道。各地要充分发挥主观能动性，创新出台激励高校毕业生参军的优惠政策，鼓励广大优秀学子积极响国家号召，踊跃报名参军。
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
