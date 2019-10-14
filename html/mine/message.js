mui.init({

});

message = {

	// 事件注册
	event: function() {
		$("#rechargeBtn").on("click", message.service.changeRecharge);
	},

	service: {

		

	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		message.event();
	},
}
message.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-myBalance-title']").html($.i18n.prop('info-myBalance-title'));
			$("[name='info-myBalance-withDraw-recharge']").html($.i18n.prop('info-myBalance-withDraw-recharge'));
			$("[name='info-myBalance-withDraw-payCoin']").html("$");

		}
	});
}