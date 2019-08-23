mui.init({

});

infoCenter = {

	// 事件注册
	event: function() {
		debugger;
	},

	
	service: {
		
	},
	dao: {},
	init: function() {
		debugger;
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
	},
}
infoCenter.init();

function loadProperties(type) {
	debugger;
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-center-favorite']").html($.i18n.prop('info-center-favorite'));
			$("[name='info-center-wallet']").html($.i18n.prop('info-center-wallet'));
			$("[name='info-inv-gift']").html($.i18n.prop('info-inv-gift'));
			$("[name='info-service']").html($.i18n.prop('info-service'));
			$("[name='info-setting']").html($.i18n.prop('info-setting'));
			$("[name='info-chat']").html($.i18n.prop('info-chat'));
			$("[name='info-my-publish']").html($.i18n.prop('info-my-publish'));
			$("[name='info-area']").html($.i18n.prop('info-area'));
		}
	});
}