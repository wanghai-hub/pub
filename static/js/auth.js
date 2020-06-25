import api from '../../api/api.js'
import {
	GetQueryString
} from '../../static/js/checkUtil.js'

export function auth(openid) {
	// /icity/auth
	api.isAuth({
		'open_id': openid
	}).then((res) => {
		// debugger;
		if (res.status === '2000000') {
			let data = res.data;
			let isAuth = data.isAuth; //0未授权1已授权
			if (isAuth === '1') {
				api.auth({
					"open_id": openid
				}).then((res) => {
					// debugger;
					if (res.status === 0) {
						let data = res.data.data;
						let token = data.token;
						uni.setStorageSync("token", token);
						uni.hideLoading();
					} else {
						uni.showToast({
							title: '网络错误auth~',
							icon: "none"
						});
						uni.hideLoading();
					}
				});
			} else {
				let authUrl = data.authUrl;
				window.location.href = authUrl;
				uni.hideLoading();
			}
		} else {
			uni.showToast({
				title: '请先登录~'
			});
		}

	});
}

export function analysis() {
	var _hmt = _hmt || [];
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?752b4121e4f0f62558b88caed08e0770";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
}
