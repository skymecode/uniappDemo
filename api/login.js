export default 
function getuserinfo(pageThis,res) {
	if (pageThis.info != null) {
		pageThis.$refs.uToast.show({
			type: 'error',
			icon: false,
			message: "你已经登录过了",
			iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',

		})
	} else {

		uni.login({
			provider: 'weixin',
			success: (loginRes) => {
				uni.showLoading({
					title: '登录中',
					mask: true
				});

				// 获取用户信息
				pageThis.code = loginRes.code;
				uni.$u.http.post('http://192.168.196.44:8085/app/login', {
					code: pageThis.code
				}).then(res => {
					pageThis.info = res.data.data.token
					uni.$u.http.get('http://192.168.196.44:8085/app/user/info/individual', {
						header: {
							token: pageThis.info
						}
					}).then(res => {
						pageThis.src = res.data.data.avatar
						pageThis.name = res.data.data.nickname
						uni.hideLoading();
					}).catch(err => {
						uni.hideLoading();

					})



					pageThis.$refs.uToast.show({
						type: 'success',
						message: "登录成功",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',


					})
				}).catch(err => {
					uni.hideLoading();
				})


			},
			fail: function(fres) {
				uni.hideLoading();
			}
		});
		console.log("执行结束")

	}
}
