<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">重磅！山东省招考委发布《关于做好2020年普通高校招生工作的通知》</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.06.05/来源:齐鲁网</view>
					<view class="label right">
						关键词
						<view>新高考</view>
						<view>招生</view>
					</view>
				</view>
				<view class="detail-pic"><image src="/static/img/news/news-img5.png" mode="widthFix"></image></view>
				<view class="detail-info">
					齐鲁网·闪电新闻6月5日讯 闪电新闻记者从山东省教育厅了解到，日前山东省招生考试委员会发布了《关于做好2020年普通高校招生工作的通知》（以下简称《通知》）。
				</view>
				<view class="detail-info">
					　解读其主要内容，闪电新闻记者发现，《通知》主要从严密做好高考组织工作、全力推进高考综合改革政策落实落地、促进高等教育入学机会公平、深入实施高校招生阳光工程、严格规范考试招生录取管理、优化招生宣传和考生服务等六个方面提出了要求。其中，落实随迁子女在流入地参加高考政策，以及各项“严查”、“严格落实”措施十分亮眼，一起来看看：
				</view>
				<view class="detail-info">
					《通知》强调了落实随迁子女在流入地参加高考政策。根据《通知》内容，进城务工人员及其他非户籍就业人员随迁子女，凡具有山东省高中阶段学校学籍并有完整学习经历，且符合除户籍条件外其他高考报名条件的考生均可在山东省就地(所就学的高中阶段学校所在地)报名参加高考，并与当地考生享受同等的录取政策。
				</view>
				<view class="detail-info">
					此外，《通知》还要求做好重点高校招收农村学生工作，扩大地方高校招收农村学生专项计划比例，继续实施高职院校招收贫困家庭学生专项计划，为农村及贫困地区学生提供更多进入重点高校的机会。
				</view>
				<view class="detail-info">
					“高考移民”行为仍将受到严厉打击。对于通过非正常户籍学籍迁移、户籍学籍造假、出具虚假证明材料等手段获取高考资格的，将受到严肃处理。严禁学校空挂学籍、人籍分离、违规招生、违规借读等行为。
				</view>
				<view class="detail-info">
					在招生环节，《通知》要求严格落实招生信息“十公开”，及时公开招生政策、招生资格、招生章程、招生计划、考生资格、录取程序、录取结果、咨询及申诉渠道、重大事件违规处理结果、录取新生复查结果等信息。强化特殊类型招生和高考加分考生的公示。加强对高校强基计划招生、保送生、艺术体育类专业、高水平运动队等特殊类型考生及享受加(降)分照顾政策考生资格和录取要求的公示。所有申请享受高考加(降)分的考生，均需就其对应的加(降)分项目向县(市、区)招生办公室进行申报，各市招生考试机构要制定具体办法，会同公安、退役军人事务、侨务、民政、统战等部门联合审查考生户籍等特征信息。
				</view>
				<view class="detail-info">
					招生计划管理的要求也十分严格。《通知》要求各高校要严格执行国家核准下达的本校当年招生计划，严禁无计划或擅自突破计划招生，严禁通过混淆学历教育与非学历教育的区别进行欺诈招生，严禁违规向学生作出招生承诺。教育行政部门和招生考试机构要加强对高校招生行为的监督管理，严格执行学校招生资格、招生计划与新生学籍电子注册相挂钩的政策。
				</view>
				<view class="detail-info">
					入学资格也将受到严格审查。闪电新闻记者了解到，新生户口迁移政策需根据山东省公安厅等部门《关于调整驻鲁普通高等学校录取省内新生户口迁移政策的通知》（鲁公通〔2017〕109号）要求办理。继续坚持报到后全面复查和进行相关科目文化测试的办法，严查不符合条件违规报考学生和冒名顶替学生。要将其与《准考证》、中学（人事）档案、电子档案、优惠照顾的原始证件等相关材料（民办高校还包括《录取考生信息确认表》）进行反复比对，做到准考证、录取通知书、居民身份证中的照片等信息和本人一致，凡不一致者，不得注册。特别要加大对以网络考试（测试）方式选拔录取考生的资格审查力度，入学后要逐人对照考试录像资料进行身份复验。加强对特殊类型招生录取学生入学后的管理，艺术、体育类专业录取的学生不得调整到普通类专业，外国语中学推荐的保送录取的学生不得录取或调整到非外语类专业，民族班、民族预科班、公费师范生、公费医学生、公费农科生等定向就业类考生不得调整录取类型、培养方式等。
				</view>
				<view class="detail-info">
					而对违规参加高校招生考试的高级中等教育学校非应届毕业的在校生，将取消其当年高校招生考试各科成绩，同时给予其应届毕业当年不得报名参加高校招生考试的处理。考生的各种作弊行为要记入《考生电子档案》，作为考生考试诚信记录的重要内容。
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
