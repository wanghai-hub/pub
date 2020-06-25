<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">什么是专业分数级差?</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.06.19/来源:齐鲁网</view>
					<view class="label right">
						关键词
						<view>新高考</view>
						<view>分数级差</view>
					</view>
				</view>
				<!-- <view class="detail-pic"><image src="/static/img/news/news-img5.png" mode="widthFix"></image></view> -->
				<view class="detail-info">
					专业级差”是院校在录取考生第一专业志愿和非第一专业志愿时,各专业志愿间设有专业级差,如3分、1分等,专业级差同时兼顾分数和专业志愿进行专业录取具体来说就是院校先进档考生按分数高低排序,然后首先检索位次排在第一的考生第一专业志愿,若该考生第一专业志愿符合专业要求,则被录取接下来再检索位次排在他后面考生的专业志愿。若该考生第一专业志愿已经满额,则将其总分减去该校预设的专业级差,并将其第二专业志愿视为第一专业志愿,再以考生减去专业级差后的分数,参加其第二志愿的位次排序录取,以此类推。
							</view>
					<view class="detail-info">
					例如某高校规定,对进档考生的专业安排,实行分数级差的办法,第二专业志愿之间分数级差为3分,其余专业志愿之间级差为1分。若在此规则下,即使是高分考生,其分数优势也可能会随着每次级差分的扣减而逐渐降低。
							</view>
					<view class="detail-info">
					高校设置专业级差,实际上是将分数与志愿因素进行平衡,客观上强化了志愿功能,提高了进档考生的志愿满足率,即使分数不是很理想,也使得相对低分考生有了读“热门”专业的机遇。
					</view>
					<view class="detail-info">
						专家咨询入口  http://www.zgckxt.com/xgk/aweb/index
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
