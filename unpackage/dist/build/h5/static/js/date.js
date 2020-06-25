// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

export function formatTimeToStr(times, pattern) {
	var d = new Date(times).Format("yyyy-MM-dd hh:mm:ss");
	if (pattern) {
		d = new Date(times).Format(pattern);
	}
	return d.toLocaleString();
}
// 获取系统当前时间
export function getCurrentTime(){
	let myDate = new Date();
	// let mytime=myDate.toLocaleTimeString();     //获取当前时间
	return myDate;
}
// 转换成时分秒
export function formatSmallTimeToStr(times) {
	  // var usedTime = etime - stime;  //两个时间戳相差的毫秒数
      var days=Math.floor(times/(24*3600*1000));
      //计算出小时数
      var leave1=times%(24*3600*1000);    //计算天数后剩余的毫秒数
      var hours=Math.floor(leave1/(3600*1000));
      //计算相差分钟数
      var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
      var minutes=Math.floor(leave2/(60*1000));
	  //计算秒数
	  var leave3=leave2%3600;
	  var second=Math.floor(leave3/(60))
	  
      // var time = days + "天"+hours+"时"+minutes+"分";
      var time = hours+":"+minutes+":"+second;
      return time;
}
