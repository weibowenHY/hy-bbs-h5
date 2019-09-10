mui.init({

});

evaluate = {

	// 事件注册
	event: function() {
		$("#sendMessage").on("click", evaluate.service.sendMessage);
	},

	
	service: {
		
		sendMessage:function(){
			var data = {
			}
			apiHelper.post(CONSTANT.baseUrl + "", JSON.stringify(data), function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
				} else {
					mui.toast(data.msg);
				}
			}, null, AJAX_BODY);
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