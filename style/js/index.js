$(document).ready(function() {
	console.log("ip进入");
	
	/**
	 * 	target = 目标元素的 ID；
		startVal = 开始值；
		endVal = 结束值；
		decimals = 小数位数，默认值是0；
		duration = 动画延迟秒数，默认值是2；
	 */
	var visitCountAni = new CountUp("visitCount", 0, 0, 0, 3);
	visitCountAni.start();
	
	var downloadCountAni = new CountUp("downloadCount", 0, 0, 0, 3);
	downloadCountAni.start();
	updateCountNum(); //调试时关闭，正式时打开
	
	$.get("getNotice.do",function(data,status){
		console.log("获取到的消息："+data);
		if(data!="" && data!=null && data!=undefined){
			$("#noticeStr").html(data);
			$('#notice').modal('show');
		}
	})
	
	
	/**
	 * 更新数字
	 */
	function updateCountNum(){
		visitCountAni.update(7200000);
		downloadCountAni.update(561334);
		/*$.get("getVisitCount.do",function(data,status){
			var visitCount = data.visitCount+10000;
			console.log("获取访问量："+visitCount);
			visitCountAni.update(visitCount);
		});
		
		$.get("getDownloadCount.do",function(data,status){
			var downloadCount = data.downloadCount+5000;
			console.log("下载量："+downloadCount);
			downloadCountAni.update(downloadCount);
		});*/
	}
	//var t1 = window.setInterval(updateCountNum,5000); 
	
	$("#getDoc").click(function() {
		var docUrl = $("#docUrl").val();
		console.log("获取到的url" + docUrl);
		postUrl(docUrl);
	})
	function postUrl(docUrl) {
		var isUrl = /^https:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"\"])*$/.test(docUrl);
		//校验URL是否正确
		if(isUrl){
			if(docUrl.indexOf("wenku.baidu.com")>=0){
				console.log("是正确的百度文库地址");
				window.open("getDoc.do?docUrl="+docUrl);  
			}else{
				$('#myModal').modal();
			}
			
		}else{
			$('#myModal').modal();
		}
		
	}

});
