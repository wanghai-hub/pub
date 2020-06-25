<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">教育部：今年培养订单定向免费本科医学生6822人</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.06.05/来源:央视网</view>
					<view class="label right">
						关键词
						<view>中西部</view>
						<view>医学生</view>
					</view>
				</view>
				
				<view class="detail-info">
					央视网消息：教育部办公厅近日下发《关于做好2020年中央财政支持中西部农村订单定向免费本科医学生招生培养工作的通知》，明确今年将培养订单定向免费五年制本科医学生6822人。
				</view>
				<view class="detail-pic"><image src="/static/img/news/news-img8.jpg" mode="widthFix"></image></view>
				<view class="detail-info">
					《通知》明确，2020年中央财政支持高等医学院校为中西部乡镇卫生院培养订单定向免费五年制本科医学生共计6822人，专业包括临床医学、中医学、蒙医学、藏医学和傣医学。
				</view>
				<view class="detail-info">
					　报考免费医学定向招生计划的考生均须参加当年全国统一高考，实行单列志愿、单设批次、单独划线，在本科提前批次录取。
				</view>
				<view class="detail-info">
					　鼓励有条件的省份可结合本地区实际情况，积极探索按照考生户籍以县为单位定向招生的办法，由各省级教育行政部门根据用人需求以县为单位安排招生计划，只招收定岗单位所在县农村生源。生源不足时，未完成的计划面向全省农村学生补征志愿，并按补征的考生志愿及录取要求，从高分到低分顺序录取，直至完成计划。
				</view>
				<view class="detail-info">
					　同时，《通知》强调，只招收农村生源，本人及父亲或母亲或法定监护人户籍地须在农村，本人具有当地连续3年以上户籍。采取以县为单位定向招生的地方，报考学生本人以及父亲或母亲或法定监护人户籍地还须在定岗单位所在县农村。
				</view>
				<view class="detail-info">
					　免费定向本科医学生录取后、获得入学通知书前，须与培养高校和定向就业所在地的县级卫生健康、人力资源社会保障行政部门签署定向培养和就业协议。免费定向本科医学生在学期间户籍仍保留在原户籍所在地，毕业后可按有关规定迁入定向就业所在地。
				</view>
				<view class="detail-info">
					《通知》要求，根据本地区免费定向本科医学生需求计划，确定开展免费医学生培养的高校和各培养高校的招生计划。为保证免费医学生培养工作的连续性和实效性，原则上不新增承担培养任务的高校。
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
