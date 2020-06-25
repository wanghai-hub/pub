<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">高校录取批次是如何划分的?</view>
				<view class="news-source">
					<view class="news-time">2020.05.30</view>
					<view class="label">
						关键词
						<view>新高考</view>
						<view>录取</view>
					</view>
				</view>
				<view class="detail-info">
					教育部《2017年普通高等学校招生工作规定》中明确:“各省级招委会要根据本地区招生工作的实际,合理安排高校录取批次。同一高校同一学历层次的招生计划原则上应安排在同一批次录取;如确有必要,经高校与有关省级招办协商一致,可以将同一高校的不同专业安排在属于同一学历层次的不同批次录取;但同一学校、同一专业、同一学历层次的全部招生计划,在同一省(区、市)须安排在同一批次录取,并执行经有关部门批准的相同学费标准。高校中外合作办学专业,应与本校在同一地区招生的其他专业安排在同一批次录取。高校被安排的录取批次与上一年度有变化的,省级招办应事先与高校协商一致后再向社会公布。”
				</view>
				<view class="detail-pic"><image src="/static/img/news/newsicon1.jpg" mode="widthFix"></image></view>
				<view class="detail-info">
					那同意调剂专业又是什么含义呢？
				</view>
				<view class="detail-info">
					由于考生填报专业志愿不均衡,专业录取生源冷热不均,有的专业出现计划空额,有的专业考生爆满。高校为完成国家招生计划,需要将志愿专业落选考生调拨到招生不满的专业。所以填报志愿时设计了“服从专业调剂”栏,由考生选择当所报专业(从第一个专业到最后一个专业)都无法录取时,考虑考生是否“服从专业调剂”。如果“服从专业调剂”,意味着该院校在本省该批招生的任何专业都可被录取,但不会被调到该校未在本省投放计划的专业。此时,如果还有专业可以调剂,则调剂到该专业录取,如果所有专业都已录满,则退档如果不服从调剂的话,当所报专业都无法录取时,直接退档
				</view>
				<!-- <view class="detail-pic"><image src="/static/img/news/news-img2.jpg" mode="widthFix"></image></view> -->
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
