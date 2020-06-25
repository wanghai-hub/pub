<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">关于做好2020年普通高校招生工作的通知</view>
				<view class="news-source">
					<view class="news-time">2020.04.09 &nbsp;/&nbsp;来源：教育部</view>
					<view class="label">
						关键词
						<view>2020</view>
						<view>高考</view>
					</view>
				</view>
				<view class="detail-info">
					2020年普通高校招生工作要以习近平新时代中国特色社会主义思想为指导，深入贯彻党的十九大和十九届二中三中四中全会精神，全面落实全国教育大会精神，贯彻党的教育方针，选拔和培养德智体美劳全面发展的社会主义建设者和接班人。
				</view>
				<view class="detail-pic"><image src="/static/img/detail/detailpic.png" mode="widthFix"></image></view>
				<view class="detail-info-title">一、严密做好高考组织实施过程</view>
				<view class="detail-info">
					1.加强组织领导。落实考试安全责任制，省级高校招生委员会是本行政区域内组织高考、治理考试环境、维护考试招生安全稳定、整肃考风考纪的责任主体，主要负责同志是第一责任人，省级教育行政部门主要负责同志、分管负责同志和省级招生考试机构主要负责同志是直接责任人。
					2.严格考试管理。坚持从严要求，强化从制卷、运送、分发到施考全过程管理，确保试题试卷绝对安全。
				</view>
				<view class="detail-info-title">一、严密做好高考组织实施过程</view>
				<view class="detail-info">
					1.加强组织领导。落实考试安全责任制，省级高校招生委员会是本行政区域内组织高考、治理考试环境、维护考试招生安全稳定、整肃考风考纪的责任主体，主要负责同志是第一责任人，省级教育行政部门主要负责同志、分管负责同志和省级招生考试机构主要负责同志是直接责任人。
					2.严格考试管理。坚持从严要求，强化从制卷、运送、分发到施考全过程管理，确保试题试卷绝对安全。
				</view>
			</view>
			
			
			
			<!-- <view class="newdetail-wrap">
				<view class="news-titile">{{data.title}}</view>
				<view class="news-source">
					<view class="news-time">{{data.time}} &nbsp;/&nbsp;来源：{{data.source}}</view>
					<view class="label">
						关键词
						<view v-for="value in data.label">{{value}}</view>
					</view>
				</view>
				<view class="detail-info">
					{{data.content}}
				</view> -->
				<!-- <view class="detail-pic"><image src="/static/img/detail/detailpic.png" mode="widthFix"></image></view>
				<view class="detail-info-title">一、严密做好高考组织实施过程</view>
				<view class="detail-info">
					1.加强组织领导。落实考试安全责任制，省级高校招生委员会是本行政区域内组织高考、治理考试环境、维护考试招生安全稳定、整肃考风考纪的责任主体，主要负责同志是第一责任人，省级教育行政部门主要负责同志、分管负责同志和省级招生考试机构主要负责同志是直接责任人。
					2.严格考试管理。坚持从严要求，强化从制卷、运送、分发到施考全过程管理，确保试题试卷绝对安全。
				</view>
				<view class="detail-info-title">一、严密做好高考组织实施过程</view>
				<view class="detail-info">
					1.加强组织领导。落实考试安全责任制，省级高校招生委员会是本行政区域内组织高考、治理考试环境、维护考试招生安全稳定、整肃考风考纪的责任主体，主要负责同志是第一责任人，省级教育行政部门主要负责同志、分管负责同志和省级招生考试机构主要负责同志是直接责任人。
					2.严格考试管理。坚持从严要求，强化从制卷、运送、分发到施考全过程管理，确保试题试卷绝对安全。
				</view>
			</view> -->
		</scroll-view>
	</view>
</template>

<script>
import newstailArray from '../../static/js/newdetail.js'
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
	padding: 30rpx 0;
	color: #555555;
	font-size: 32rpx;
}
.detail-info-title {
	color: #333;
	font-weight: 600;
	font-size: 32rpx;
}
</style>
