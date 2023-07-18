
export default
function getList(pageThis){
	uni.$u.http.get('http://mock.apifox.cn/m1/2862832-0-default/getNotice').then(res => {
	pageThis.listData=res.data.noticeList
	console.log(pageThis.listData)
	}).catch(err => {
	console.log(err)
	})
	
}