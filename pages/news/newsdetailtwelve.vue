<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">志愿填报为什么一定要提前准备？</view>
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
					有人说，志愿填报是每个考生的第二次高考。也有人说，志愿的选择甚至比分数还重要。不管怎么说，都足以表明志愿选择的重要性，那么高考志愿填报填报前都需要做哪些准备？
				</view>	
        <view class="detail-info">
					政策信息的准备<br>
            ①认真阅读、领会当地当年发布的有关高校招生的各类信息，熟悉招生政策和规定。
            ②仔细阅读当地当年的招生专刊上刊登的招生专业目录以及考生填报志愿须知等，了解院校的办学性质、收费标准、所属批次，掌握填报志愿的其他要求等。
            ③通过有关院校的网站和宣传资料，了解高校的办学地点、专业设置、办学特色、师资力量、培养方向等。
            ④仔细查阅有关高校的招生章程，了解对进档考生的排序办法、录取规则等。
            ⑤了解《普通高校招生体检工作指导意见》等文件及院校招生章程中有关院校和专业对考生身体健康状况的要求，避免因身体原因填报不当造成院校退档。
				</view>	
        <view class="detail-info">
					报考技巧的准备<br>
          包括掌握预测学校录取最低分数线及专业线的方法。在此基础上，综合考虑、全面分析确定各批次各院校志愿及专业志愿，并填报好志愿草表。
				</view>	
        <view class="detail-info">
					心理准备<br>
          高考志愿填报不是几天就能弄明白的，我们务必做足心理准备，提早着手。
          传统高考中，提前批加一批次，考生就要填报10所左右的高校，每所高校又可以选择6个专业志愿。
          新高考中，浙江可以填80个专业院校志愿，山东可以填96个专业院校志愿！
          新高考志愿填报规则跟以往完全不同，对于今年新高考的山东、北京、天津、海南考生来说，更是难上加难。
				</view>	
        <view class="detail-info">
					考生及家长需要了解本省高考志愿填报规则，还要对这些高校有个大致的了解，需要把各个高校的招生简章的内容加以解读，吃透、读懂、弄通，需要掌握这些学校前几年的最低录取分数线，并测算出当年大致的校线，等等。
          高考志愿要做到填得好、报得巧，没有几个月的时间是拿不下来的。家长和考生一定要早作准备，不要等到考试完了以后再抓，那样很可能就来不及了。
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
