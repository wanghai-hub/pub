import Vue from 'vue'

export default class Request {
	http(router, data, method) {
		console.log("heetp data",data)
		uni.showLoading({
			mask: true
		});
		// 基础地址
		// var path = new Vue().$baseUrl + '/epid';
		var path = '/xgk-gz';

		var token = uni.getStorageSync("token") || '';
		console.log("token==="+token);
		// 返回promise
		return new Promise((resolve, reject) => {
			// 请求
			uni.request({
				url: `${path}${router}`,
				data: data,
				method: method,
				header: {
					// "Content-Type": "application/json",
					"X-CSRF-TOKEN": token,
					"X-Requested-With":"XMLHttpRequest"
					// "formid":data.uuid?data.uuid:''
					// "Authorization": "Bearer "+"f0763453-31f4-4492-b40c-9bf7c3cafd8f"

				},
				success: (res) => {
					if (res.statusCode == '401') {
						uni.showToast({
							title: 'token 失效，请重新登陆',
							icon: 'none'
						});
						return;
					} else if (res.statusCode == '200') {
						// 将结果抛出
						resolve(res.data)						
					}else {
						uni.showToast({
							title: '系统开小差了~',
							icon: 'none'
						});
						return;
					}

				},
				fail: (res) => {
					// 将结果抛出
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					},2000);
				},
				complete: () => {
					uni.hideLoading();
				}

			})
		})


	}
}
