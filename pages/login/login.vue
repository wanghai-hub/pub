<template>
	<view>
		<uni-nav-bar shadow="true" :title="(type==1)?'学生信息录入':(type==2)?'教师信息录入':'信息录入'" backgroundColor="#38de9f" color="#FFFFFF"
		 fixed="true">
		 <view slot="left"><button class="cu-btn sm lines-white" @tap="back" style="align-items:center;display: flex;justify-content: center;font-size:12px;">返回</button></view>
		</uni-nav-bar>
		<view class="bg-white padding solid-bottom text-center">
			<h4 class="text-red">*注意：请使用{{type==1?'学生':type==2?'教师':''}}本人的信息</h4>
		</view>
		<form @submit="checkPerson" @reset="formReset">
			<view class="cu-form-group">
				<view class="title">姓名<text class="text-red text-middle">*</text></view>
				<input :placeholder="type==1?'请输入学生姓名':(type==2)?'请输入教师姓名':'请输入姓名'" maxlength="20" name="name" style="text-align: right;"
				 :value="name"></input>
			</view>
			<view class="cu-form-group">
				<view class="title" style="white-space:pre;height: auto;">证件类型<text class="text-red text-middle">*</text></view>
				<radio-group name="idType" style="text-align: right;" @change="idTypeChange">
					<label>
						<radio value="1" color="orange" style="transform:scale(0.8)" :checked="idType==1" />居民身份证
					</label>

					<label>
						<radio value="2" color="orange" style="transform:scale(0.8)" :checked="idType==2" />护照
					</label>
				</radio-group>
			</view>
			<view class="cu-form-group" v-if="idType==1">
				<view class="title">身份证号码<text class="text-red text-middle">*</text></view>
				<input :placeholder="type==1?'请输入学生身份证号':type==2?'请输入教师身份证号':'请输入身份证号'" name="idNo" style="text-align: right;"
				 :value="idNo"></input>
			</view>
			<view class="cu-form-group" v-if="idType==2">
				<view class="title">护照号码<text class="text-red text-middle">*</text></view>
				<input name="idNo" style="text-align: right;" maxlength="30" :value="idNo" :placeholder="type==1?'请输入学生护照号码':type==2?'请输入教师护照号码':'请输入护照号码'"></input>
			</view>
			<view>
				<view class="padding flex" style="justify-content: center;align-items:center">
					<button class="cu-btn bg-red margin-tb-sm lg" style="width: 35%;text-align: center;" form-type="submit">进入填报</button>
					<button class="cu-btn  margin-tb-sm lg margin-left bg-white" style="width: 35%;text-align: center;background-color: #FFFFFF;color: black;border:1px solid #ddd" form-type="reset">重置</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import checkUtil from '../../static/js/checkUtil.js'
	import api from "../../api/api.js"
	import config from "../../static/js/config.js"

	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				idType: 1,
				idNo: '',
				name: '',
				type: ''
			}
		},
		onLoad(option) {
			var xs = option.xs
			var ls = option.ls
			if (xs == 1 || uni.getStorageSync("type") ==1) {
				this.type = 1;
				this.name = uni.getStorageSync("studentName") || ''
				this.idType = uni.getStorageSync("studentIdType") || 1
				this.idNo = uni.getStorageSync("studentIdNo") || ''
			} else if (ls == 1 || uni.getStorageSync("type") ==2) {
				this.type = 2;
				this.name = uni.getStorageSync("teacherName") || ''
				this.idType = uni.getStorageSync("teacherIdType") || 1
				this.idNo = uni.getStorageSync("teacherIdNo") || ''
			} else {
				uni.redirectTo({
					url: '../index/index'
				})
			}
			uni.setStorageSync("type",this.type);
			
			
		},
		methods: {
			back: function(e) {
				uni.redirectTo({
					url: '../index/index?isBack=1'
				});
			},
			idTypeChange(e) {
				this.idType = e.detail.value
				this.idNo = ""
			},
			formReset(e){
				this.idType = 2
				this.name = ""
				this.idNo = ""	
				this.$nextTick(()=>{
					this.idType = 1
				})
				
				this.$forceUpdate()
			},

			checkPerson(e) {
				if (this.type != 1 && this.type != 2) {
					uni.redirectTo({
						url: '../index/index'
					})
					return false;
				}
				var formData = e.detail.value;
				//校验表单
				if (checkUtil.isEmpty(formData.name)) {
					uni.showToast({
						title: this.type == 1 ? '请输入学生姓名' : '请输入教师姓名',
						icon: 'none'
					});
					return false;
				}

				if (checkUtil.specialChar(formData.name)) {
					uni.showToast({
						title: '姓名不允许包含特殊符号',
						icon: 'none'
					});
					return false;
				}
				this.name = formData.name
				//如果是身份证校验身份证是否正确					
				//身份证号
				if (this.idType == 1) {
					if (!checkUtil.checkCard(formData.idNo.trim())) {
						return false;
					}
				} else {
					if (checkUtil.isEmpty(formData.idNo)) {
						uni.showToast({
							title: "护照号码不能为空",
							icon: 'none'
						});
						return false;
					}

					if (!checkUtil.checkWord(formData.idNo.trim())) {
						uni.showToast({
							title: '证件号只允许输入字母和数字',
							icon: 'none'
						});
						return false;
					}
					if (checkUtil.specialChar(formData.idNo.trim())) {
						uni.showToast({
							title: '证件号不允许包含特殊符号',
							icon: 'none'
						});
						return false;
					}
				}
				this.idNo = formData.idNo
				
				if (this.type == 1) {
					uni.setStorageSync("studentName",this.name.trim())
					uni.setStorageSync("studentIdType",this.idType)
					uni.setStorageSync("studentIdNo",this.idNo.trim())
					uni.navigateTo({
						url: '../add/add?type=' + uni.getStorageSync("type") + '&idNo=' + this.idNo.trim() + '&idType=' + this.idType +
							'&name=' + this.name.trim()
					})
				} else {
					uni.setStorageSync("teacherName",this.name.trim())
					uni.setStorageSync("teacherIdType",this.idType)
					uni.setStorageSync("teacherIdNo",this.idNo)
					uni.navigateTo({
						url: '../teacher/teacher?type=' + uni.getStorageSync("type") + '&idNo=' + this.idNo.trim() + '&idType=' + this.idType +
							'&name=' + this.name.trim()
					})
				}

			}
		}
	}
</script>

<style>
	@import "../../common/colorui/main.css";
	@import "../../common/colorui/icon.css";
	@import '../../common/uni.css';
	.text-middle {
		vertical-align: middle;
	}
</style>
