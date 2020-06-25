<template>
	<view class="newdetail">
		<uni-nav-bar title="资讯详情" left-icon="back" @clickLeft="goback()"></uni-nav-bar>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight }">
			<view class="newdetail-wrap">
				<view class="news-titile">关于做好高中毕业年级学习生活安排的通知</view>
				<view class="news-source clearfix">
					<view class="news-time left">2020.04.21/来源:山东省教育厅</view>
					<view class="label right">
						关键词
						<view>新高考</view>
						<view>学习生活</view>
					</view>
				</view>
				<view class="detail-info">各市教育（教体）局：</view>
				<view class="detail-info">
					为贯彻落实中央和省委、省政府关于新冠肺炎防控和复工复产工作的部署，统筹全省学校疫情防控和教育教学工作，切实做好高中毕业年级学生返校后学习生活安排，现就相关事宜通知如下：
				</view>
				<view class="detail-info-title">一、加强疫情防控演练。</view>
				<view class="detail-info">
					复学后一段时间内，各高中段学校要以疫情防控知识和技能为重点，开展全员培训，促进学生尽快调整状态，适应疫情防控常态化条件下新的学习和生活方式。要组织返校师生开展不少于3次的应急演练，让每一名师生员工掌握疫情应急处置流程，提升应急处置能力。要克服麻痹、懈怠、厌战心理，只要疫情不解除，学校疫情防控就要标准不降低、要求不放松、力度不减弱、举措不断档。
				</view>
				<view class="detail-info-title">二、科学开展学情评估。</view>
				<view class="detail-info">
					在学生较好适应学校疫情防控的基础上，要适时开展学情评估，科学把握学生居家学习效果。评估方式要依据课程方案、课程标准和学生实际状况灵活确定，可采取谈话、问卷、课堂观察、课堂提问等多种方式进行，多维度、精准化分析学情，不得简单以模拟考试替代学情检测评估。
				</view>
				<view class="detail-info-title">三、统筹做好教学安排。</view>
				<view class="detail-info">
					要根据高考考试时间推迟的实际情况，有序安排好各项教育教学活动，坚持把确保师生生命安全和身体健康放在第一位，结合本地本校实际科学合理安排作息时间、周末和假期安排，加强思想沟通，争取各方理解和支持。把握好复习节奏，提高复习效率。对疫情防控一线医务人员子女、学习困难学生，“一生一案”指导辅导。对于不能按时返校的学生，要继续实施线上学业辅导。要继续加强高考综合改革、春季高考有关政策和工作安排的宣传解读。
				</view>
				<view class="detail-info-title">四、切实强化育人成效。</view>
				<view class="detail-info">
					要加强思想政治引领，充分挖掘防疫抗疫教育资源，重点讲述以习近平同志为核心的党中央的坚强领导、中国特色社会主义制度的显著优势、国家强大的动员能力和雄厚的综合实力、中华儿女团结奋斗的英雄气概，教育广大学生厚植家国情怀、增进爱国情感。要坚持以班主任为主、教职工全面参与，与学生进行深入谈心交流，及时帮助排忧解难，做好经常性、针对性的思想引导。要积极稳妥开展校内文体活动，安排适当的体育锻炼和文化娱乐活动，提高身体素质，调节生活节奏，丰富学习内容，促进学生身心全面发展。
				</view>
				<view class="detail-info-title">
					五、积极做好后勤服务。/view>
					<view class="detail-info">
						要加强食堂管理，保障食堂食品安全和营养健康，膳食荤素搭配合理，水果供应充足，满足师生饮食营养需要。无食堂的学校要为师生提供集中配餐服务，每日对供餐单位供应饭菜质量进行监督与考核。要确保宿舍环境干净整洁，加强宿舍学生作息纪律检查，为学生就寝创造良好的环境。要加强对饮水安全性检测，安排专人每天对饮水设备进行安全卫生巡查并做好巡查记录，发现问题及时上报并进行整改。实行封闭管理的学校要为学生提供洗浴、洗衣、理发、购物等服务和便利条件，通过多种方式保障师生日常学习和生活用品的需求。
					</view>
					<view class="detail-info-title">六、注重加强人文关怀。</view>
					<view class="detail-info">
						对家庭经济困难学生要加大资助力度，保证其在考前能够适当提高生活水平。要密切关注学生复学后可能出现的心理问题，通过团体辅导和个别辅导相结合的方式，扎实开展心理疏导工作。对遭受疫情影响较大的学生，要重点加强心理干预和关爱帮扶。疫情期间，我厅搭建了省级心理支持热线和网络辅导服务平台，各地、各学校要充分利用专业力量为广大学生提供线上线下相结合的心理咨询服务。封闭管理学校要引导和支持学生与家长保持联系，做好家校沟通，缓解学生和家长焦虑担忧情绪。要充分发挥党员、团员模范带头作用，切实落实工作职责，保障复学后教育教学工作顺利进行。
					</view>
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
			data: {},
			newsid: ''
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
		this.scrollHeight = windowHeight + 'px';
		// console.log("scrollHeight"+this.scrollHeight);
	},
	methods: {
		goback() {
			uni.switchTab({
				url: './news'
			});
		},
		getdetail(newid) {
			console.log(newid);

			newstailArray.forEach(item => {
				// debugger;
				if (item.id === newid) {
					this.data = item;
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
	border-bottom: 1px solid #e5e5e5;
}
.news-source .label {
	display: flex;
	justify-content: space-around;
}
.news-source .news-time,
.news-source .label {
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
