<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">“平行志愿”是怎么回事？</view>
				<view class="news-source">
					<view class="news-time">2020.05.30</view>
					<view class="label">
						关键词
						<view>新高考</view>
						<view>志愿</view>
					</view>
				</view>
				<view class="detail-pic"><image src="/static/img/news/newsicon2.jpg" mode="widthFix"></image></view>
				<view class="detail-info">
					平行志愿是相对于传统的单一志愿而言,是指在一个志愿里由原来的一所院校变为一组院校,考生填报的多个院校都属于同一志愿。平行志愿院校数量一般有6个或9个院校。平行志愿可以减轻考生填报志愿的压力,降低落选风险。平行志愿按照“考生分数优先、遵循志愿顺序”的原则进行投档和录取。平行志愿投档时,计算机先将所有批次线上的未录取考生,分文科和理科按成绩总分从高到低排序,当遇到多名考生成绩相同时,依次按语、数,外单科成绩从高分到低分排序使每个考生都确定排序位置;再由计算机将排好序的考生依次检索其所填报的院校并投档。考生分数越高,投档越在前面。对单个考生而言,计算机检索到该考生时,根据考生填报的院校志愿顺序依次检索到有计划空缺的院校时就投档。
				</view>
				<!-- <view class="detail-pic"><image src="/static/img/news/news-img4.png" mode="widthFix"></image></view> -->
				<view class="detail-info">
					计算机检索和投档是一次性同时完成的。例如某考生填报了本科一批A、B、C、D、E、F、G、H、I等9所学校,平行志愿批量投档时该考生档案投到A学校计算机不再检查后面的8个志愿。该考生填的A、B、C、D、E、F、G、H、I等9个学校的检索、投档是一次性同时完成,平行志愿只能是一档一投,不能一档多投。如果这时候考生档案从A学校退出,即使达到了B学校的投档分数线或者B学校还有计划空缺,也不能再投档,只能参加一本计划未完成计划高校征集志愿或二本的投档录取。
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
