mui.init({

});

myBalance = {

	// 事件注册
	event: function() {
	},

	service: {

	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
	},
}
myBalance.init();

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
			$("[name='info-myBalance-withDraw-to']").html($.i18n.prop('info-myBalance-withDraw-to'));
			$("[name='info-myBalance-coin']").html($.i18n.prop('info-myBalance-coin'));
			$("[name='info-myBalance-withDraw-amount']").html($.i18n.prop('info-myBalance-withDraw-amount'));
			$("[name='info-myBalance-withDraw-All']").html($.i18n.prop('info-myBalance-withDraw-All'));
			$("[name='info-myBalance-withDraw-payCoin']").html("¥");
			$("[name='info-myBalance-withDraw-couldWithDraw']").html($.i18n.prop('info-myBalance-withDraw-couldWithDraw'));
			$("[name='info-myBalance-withDraw-daylim']").html($.i18n.prop('info-myBalance-withDraw-daylim'));
			$("[name='info-myBalance-withDraw-sendCode']").html($.i18n.prop('info-myBalance-withDraw-sendCode'));
			$("[name='info-myBalance-withDraw-enterCode']").html($.i18n.prop('info-myBalance-withDraw-enterCode'));
			$("[name='info-myBalance-withDraw-getCode']").html($.i18n.prop('info-myBalance-withDraw-getCode'));
			$("[name='info-myBalance-withDraw-button']").html($.i18n.prop('info-myBalance-withDraw-button'));


		}
	});
}