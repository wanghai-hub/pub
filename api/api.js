import Request from '../static/js/request.js';

let request = new Request().http
let date=new Date();
let timer=date.getTime().toString();


export default {
	//首页课程列表
	getIndexCourse: function (data) {
		return request('/course/index',data,'GET')
	},
	//全部课程列表
	getAllCourse: function (data) {
		return request('/course/list',data,'GET')
	},
	//我的课程列表
	getMyCourse: function (data) {
		return request('/usercourse/myCourseList',data,'GET')
	},
	// 获取课程详细内容
	getDetail:function(data){
		return request('/course/courseDetail',data,'GET')
	},
	// 预约课程
	appointment:function(data){
		return request('/usercourse/appointment',data,'POST')
	},
	// 是否授权
	isAuth:function(data){
		return request('/icity/auth',data,'GET')
		// return request('http://hykzyz.natappfree.cc/xgk-gz/icity/auth',data,'GET')
	},
	//鉴权
	auth:function(data){
		return request('/sso/icity/authorize',data,'GET')
		// return request('http://hykzyz.natappfree.cc/xgk-gz/sso/icity/authorize',data,'GET')
	},
	// 视频点赞
	courseLike:function(data){
		return request('/course/like',data,'GET')
		// return request('http://hykzyz.natappfree.cc/xgk-gz/sso/icity/authorize',data,'GET')
	},
	// 我的
	myIcityInfo:function(data){
		return request('/myInfo/myIcityInfo',data,'GET')
		// return request('http://hykzyz.natappfree.cc/xgk-gz/sso/icity/authorize',data,'GET')
	},
	// 进入视频页面,获取当前课程详细信息
	getPlayingDetail:function(data){
		return request('/course/enterPlaying',data,'GET')
	},
}