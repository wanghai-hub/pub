<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">是不是等出了高考分数以后，再关注报考专业和学校就行？</view>
				<view class="news-source">
					<view class="news-time">2020.05.30</view>
					<view class="label">
						关键词
						<view>新高考</view>
						<view>报考</view>
					</view>
				</view>
				<view class="detail-info">
					往年高考安排在6月7、8、9号的时候，一般公布分数的时间是在6月25日，第一次报考是在6月28日。6月28日，填报文理类、艺术类、体育类本科提前批首次志愿，填报春季高考技能拔尖人才首次志愿，填报高水平运动员志愿、民航飞行技术本科专业首次志愿。距离出分中间只有4天的时间。7月5—6日，填报自主招生批（含高校专项计划）志愿，填报文理类本科普通批（含地方农村专项计划）、艺术类本科批（含A段和B段）、体育类本科、春季高考本科首次志愿，也只有10天左右的时间。
				</view>
				<view class="detail-info">
					今年受疫情影响，高考时间推迟了1个月，出分和填报志愿时间也会相应推迟1个月左右，但间隔时间预计不会有太大变化。对大多数考生来说，从出分到报志愿只有10天左右的时间，提前批的当然更短。这么短的时间，1000多所招生院校的这么多专业根本看不过来，更了解不过来。
				</view>
				<view class="detail-pic"><image src="/static/img/news/newsicon4.jpg" mode="widthFix"></image></view>
				<view class="detail-info">
					特别是今年是山东首次实行“6选3”新高考，有很多变化。例如，志愿模式发生变化，专业优先，选什么专业，96个平行志愿听起来选择足够多，但如果报得不好，也有很大风险，如何充分利用，这些都大有学问。如果等到出分以后才开始关注报考专业和学校，时间仓促，绝对不是一个合理的选择。
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
// import newstailArray from '../../static/js/newdetail.js';
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
		this.newsid=option.newsid;
		// console.log(this.newsid);
		this.getdetail(this.newsid);
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
