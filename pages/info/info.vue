<template>
	<view>
		<uni-nav-bar shadow="true" :title="(type==1)?'学生信息录入':'教师信息录入'" backgroundColor="#38de9f" color="#FFFFFF" fixed="true">
			<view slot="left"><button class="cu-btn sm lines-white" @tap="back" style="align-items:center;font-size: 12px;">返回</button></view>
		</uni-nav-bar>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class=""></text>
			</view>
			<view class="action">
				<button class="cu-btn lines-orange" @tap="toAddPage">编辑{{type==1?'学生':'教师'}}基本信息</button>
			</view>
		</view>
		<view>
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<text class="text-gray">{{name}}</text>
			</view>
			<view class="cu-form-group">
				<view class="title" style="white-space:pre;height: auto;">证件类型</view>
				<text class="text-gray">{{idType==1?'身份证号码':'护照号码'}}</text>
			</view>
			<view class="cu-form-group" v-if="idType==1">
				<view class="title">身份证号码</view>
				<text class="text-gray">{{idNo}}</text>
			</view>
			<view class="cu-form-group" v-if="idType==2">
				<view class="title">护照号码</view>
				<text class="text-gray">{{idNo}}</text>
			</view>
			<view class="cu-form-group">
				<view class="title" style="white-space: nowrap;">所在学校</view>
				<text class="text-gray" style="padding-left: 15px;">{{school}}</text>
			</view>

			<view class="padding-sm" style="height:50%">
				<view class="padding radius text-center shadow-blur" style="height:235px !important;background-image: linear-gradient(180deg, #24DB97 0%, #65EDB2 100%);
    box-shadow: 0 4px 14px 0 rgba(56,222,159,0.20);
    border-radius: 14px;">
					<view class=" text-center" style="display: flex;flex-direction: column;height:100%">
						<view class="sdseMainItemCard" @tap="report">
							<text class="row">开学前防控信息摸排</text>
						</view>
						<view class="sdseMainItemCard" @tap="returnSchool">
							<text class="row" >不在学校驻地返校行程</text>
						</view>
						<view class="sdseMainItemCard" @tap="tomsg">
							<text class="row" >有话说</text>
						</view>
						<!-- <view class="sdseMainItemCard"  @tap="toHealth">
							<text class="row">日常健康报送（返校后）</text>
						</view>
						<view class="sdseMainItemCard">
							<text class="row" @tap="toTrip">日常出行报送（返校后）</text>
						</view> -->
					</view>

				</view>
			</view>

			<!-- <view>
				<view class="padding flex flex-direction" style="justify-content: center;align-items:center">
					<button class="cu-btn bg-red margin-tb-sm lg" style="width: 60%;text-align: center;" form-type="submit">信息完善</button>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import checkUtil from '../../static/js/checkUtil.js'
	import api from "../../api/api.js"

	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				idType: 2,
				idNo: '3333',
				name: 'test',
				type: '',
				school: '山东大学',
				id: '',
				region: ''
			}
		},
		onLoad(option) {
			this.type = uni.getStorageSync("type")
			// this.name = option.name
			// this.idNo = option.idNo
			// this.idType = option.idType
			// this.school = option.school
			this.id = option.id
			// this.region = option.region
			uni.setStorageSync("type", this.type);
			if (this.type == 1) {
				this.getStudentById(this.id);
			} else {
				this.getTeacherById(this.id);
			}

		},
		methods: {
			getStudentById(id) {
				let data = {
					id: id,
					token:uni.getStorageSync("token")
				}
				api.getStudentById(data).then(res => {
					if (res.code === 'P00000') {
						this.name = res.data.name
						this.idNo = res.data.idNo
						this.idType = res.data.idType
						this.school = res.data.school
						this.region = res.data.city
						uni.setStorageSync("token", res.data.userToken)
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
						return false;
					}
				})
			},
			getTeacherById(id) {
				let data = {
					id: id,
					token:uni.getStorageSync("token")
				}
				api.getTeacherById(data).then(res => {
					if (res.code === 'P00000') {
						this.name = res.data.name
						this.idNo = res.data.idNo
						this.idType = res.data.idType
						this.school = res.data.school
						this.region = res.data.city
						uni.setStorageSync("token", res.data.userToken)
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						});
						return false;
					}
				})
			},
			toAddPage: function() {
				if (uni.getStorageSync("type") == 1) {
					uni.navigateTo({
						url: '../add/add?type=' + uni.getStorageSync("type") + '&idNo=' + this.idNo + '&idType=' + this.idType +
							'&name=' + this.name + '&edit=1'
					})
				} else {
					uni.navigateTo({
						url: '../teacher/teacher?type=' + uni.getStorageSync("type") + '&idNo=' + this.idNo + '&idType=' + this.idType +
							'&name=' + this.name + '&edit=1'
					})
				}

			},
			report: function() {				
				uni.navigateTo({
					url: '../report/report?id=' + this.id + "&region=" + this.region
				})
			},
			//返校信息
			returnSchool:function(){
				// uni.showToast({
				//     title: '确定开学时间后填报，暂不开放！',
				//     icon: 'none'
				// });
				
				uni.navigateTo({
					url: '../return/return?userId='+this.id
				})
			},
			//日常健康报送
			toHealth:function(){
				uni.showToast({
				    title: '返校后填报日常健康，暂不开放！',
				    icon: 'none'
				});
				// uni.navigateTo({
				// 	url: '../health/health?userId='+this.id+"&region="+this.region
				// })
			},
			//日常健康报送
			toTrip:function(){
				uni.showToast({
				    title: '返校后填报日常出行，暂不开放！',
				    icon: 'none'
				});
				// uni.navigateTo({
				// 	url: '../trip/list?userId='+this.id+"&region="+this.region
				// })
				
			},
			back: function(e) {
				if (this.type == 1) {
					uni.redirectTo({
						url: '../login/login?xs=1'
					});
				} else {
					uni.redirectTo({
						url: '../login/login?ls=1'
					});
				}
			},
			tomsg:function(){
				uni.navigateTo({
					url: '../msg/msg?id='+this.id
				})
			}
		}
	}
</script>

<style>
	@import "../../common/colorui/main.css";
	@import "../../common/colorui/icon.css";
	@import '../../common/uni.css';
	.sdseMainItemCard {
		width: 85%;
		margin: 10px auto;
		text-align: center;
		background: #fff;
		border-radius: 60px;
		flex: 1
	}

	.row {
		color: #03D083;
		font-size: 17px;
		line-height: 48px;
	}

	.text-middle {
		vertical-align: middle;
	}
</style>
