mui.init({

});

evaluate = {

	// 事件注册
	event: function() {
		$("#sendMessage").on("click", evaluate.service.sendMessage);
	},

	
	service: {
		
		sendMessage:function(){
			var complaint = $('#complaint').val();
			if (complaint) {
				var param = {
					"answer": null,
					"content": complaint,
					"createTime": null,
					"id": null,
					"isRead": null,
					"userId": null
				}
				$.ajax({
					url: CONSTANT.baseUrl + "/complaint/add/" + TOKEN_REL.token,
					type: "post",
					contentType: "application/json",
					data: JSON.stringify(param),
					dataType: 'json',
					success: function(data) {
						if(data.status == AJAX_SECCUSS) {
							mui.toast("success");
							$('#complaint').val("");
						} else {
							mui.toast(data.error);
						}
					}
				});
			} else{
				mui.toast("please describe your questions");
			}
			
			
		}
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		evaluate.event();
	},
}
evaluate.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-evaluate-title']").html($.i18n.prop('info-evaluate-title'));
			$("[name='info-evaluate-enter']").html($.i18n.prop('info-evaluate-enter'));
			$("[name='info-send']").html($.i18n.prop('info-send'));
		}
	});
}