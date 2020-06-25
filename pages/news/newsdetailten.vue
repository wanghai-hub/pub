<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">常见招生名词如何解释?</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.06.19/来源:齐鲁网</view>
					<view class="label right">
						关键词
						<view>新高考</view>
						<view>招生</view>
					</view>
				</view>
				<!-- <view class="detail-pic"><image src="/static/img/news/news-img7.png" mode="widthFix"></image></view> -->
				<view class="detail-info">
					省控线:全称是“最低录取控制分数线”,只有高考总分(艺术、体育考生含专业成绩)达到或超过某批次分数线的考生(通常称“上线考生”)档案,才有资格被该批次招生高校调阅并选择录取。
				</view>
				<view class="detail-info">
					院校调档线:在该批院校省控线基础上,根据当年考生报考该校志愿情况、分数情况和该校在该地招生计划数确定的,是对某地报考该校考生在文化成绩方面的最低要求
				</view>
				<view class="detail-info">
					调档比例:某院校调阅考生电子档案数与计划招生数的比例,一般在100%-120%之间。
					按大类招生:将考生先按某一科类招进来,统一学习专业基础课,大二或大三后再根据情况分院系专业
				</view>
				<view class="detail-info">
					缺档:指高考录取缺档,就是高校招生计划未录满,于是接下来就是该他们进行征集志愿了
					位次:文史类或者理工类考生的高考成绩在全省该科类考生中属于哪个位置,在高考成绩公布当天的各地教育考试院发布的“一分段表”中查询
				</view>
				<view class="detail-info">
					自主招生:招收的主要对象是具有学科特长和创新潜质的优秀学生,试点高校的自主选拔录取计划不超过本校年度本科招生计划总数的5%,纳入本校年度招生计划中
				</view>
				<view class="detail-info">
					本硕连读:本硕连读是指由本科阶段直接保送进入硕士生阶段学习的一种培养方式。
					保送生:保送生无需参加高考,经学校推荐后通过文化测试,即可进入大学就读.
					免费师范生:报考教育部六所直属师范大学(北京师范大学、华东师范大学、东北师范大学、华中师范大学、陕西师范大学、西南大学)之一后有条件地接受免费师范教育的学生。
				</view>
				<view class="detail-info">
					预科班:大学前的预备教育,一般高三毕业生按要求完成1年预科后,根据成绩决定能否升入选择的院校的本科阶段学习。
				</view>
				<view class="detail-info">
					基地班:由国家专门拨款,专门培养某一方面的人才的一种基础学科班,其所依附的“母体”都是实力雄厚、教学科研水平高、教学条件好、在国内同类学科中起到骨干带头作用的学科点的重点综合大学、师范大学
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
	padding: 20rpx 0 10rpx 0;
	color: #555555;
	font-size: 32rpx;
}
.detail-info-title {
	color: #333;
	font-weight: 600;
	font-size: 32rpx;
}
</style>
