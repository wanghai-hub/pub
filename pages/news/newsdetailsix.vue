<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">最少预留60分钟！山东2020年体育单招文化考试本周末举行</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.06.04/来源:齐鲁网</view>
					<view class="label right">
						关键词
						<view>体育单招</view>
						<view>文化考试</view>
					</view>
				</view>
				<view class="detail-pic"><image src="/static/img/news/news-img6.png" mode="widthFix"></image></view>
				<view class="detail-info">
					齐鲁网·闪电新闻6月4日讯 闪电新闻记者刚刚从省招考院官网获悉，山东省2020年普通高等学校运动训练、武术与民族传统体育专业招生文化考试，将于6月7日—8日在山东青年政治学院和山东财经大学举行。需要注意的是，考生入场须进行两次安检，并进行人脸识别、体温监测等，请预留充足时间。
				</view>
				<view class="detail-pic"><image src="/static/img/news/news-img6-2.png" mode="widthFix"></image></view>
				<view class="detail-pic"><image src="/static/img/news/news-img6-3.png" mode="widthFix"></image></view>
				<view class="detail-info">
					考生须于5月25日-6月5日在体育单招报名系统中自行打印准考证。建议考生于考试前一天，提前规划好出行时间和路线充分考虑交通、入场程序等情况。需要提醒的是，考前有发热（超过37.3℃标准体温）的考生及外省14日内返鲁的考生，务必前往当地定点医疗机构发热门诊作检测，报到时还需提供7日内核酸检测报告。
				</view>
				<view class="detail-info-title">　入场程序</view>
				<view class="detail-info">
					第一步：进入考点。开考前2小时开始，考生凭准考证、身份证（原件）接受验证，经验证合格后，方可进入考点。所有送考、陪考人员，车辆不得进入考点。
				</view>
				<view class="detail-info">
					考生进入考点后全程佩戴口罩(考生在核验身份过程中除外)，服从现场工作人员管理，考点内不得随意走动。考生之间应保持1米以上距离，避免近距离接触交流。
				</view>
				<view class="detail-info">
					第二步：资料交验。考生在考点健康资料交验处提交《山东省健康通行码》《安全考试承诺书》等健康材料，经交验合格后，方可沿通道进行体温检测。
				</view>
				<view class="detail-info">
					第三步：体温检测。进入考点测温区接受体温检测，经检查合格后方可沿通道到达考点安检口。考生体温超过37.3℃的不能进入考区。
				</view>
				<view class="detail-info">
					第四步：首次安检。考生须在考点安检口接受首次安检。考试文具由考点提供，除《准考证》、身份证外，其他任何物品（包括手机、手表等）不准带入考试封闭区。经安检合格后，方可进入考场封闭区。
				</view>
				<view class="detail-info">
					第五步:身份核验。考前60分钟考生由考场封闭区进入考场所在教学楼，在教学楼门口接受人脸识别，核验身份。
				</view>
				<view class="detail-info">
					第六步:进入考场。考生须于考前40分钟在考场门口接受二次安检，接受金属探测和“四核对”，经安检合格后，方可进入考场。
				</view>
				<view class="detail-info">
					据了解，山东青年政治学院考点，提供中午休憩区。考生可在考点规定的考生休息区内休息。如需午餐，考生应提前1天自行通过二维码订购。
				</view>
				<view class="detail-pic text-center"><image src="/static/img/news/news-img6-4.png"  mode="aspectFit"></image></view>
				<view class="detail-info">
					6月7日订餐扫二维码
				</view>
				<view class="detail-pic text-center"><image src="/static/img/news/news-img6-5.png" mode="aspectFit"></image></view>
				<view class="detail-info">
					6月8日订餐扫二维码
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
