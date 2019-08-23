mui.init({

});

settings = {

	// 事件注册
	event: function() {},

	service: {

	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
	},
}
settings.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-setting-title']").html($.i18n.prop('info-setting-title'));
			$("[name='info-setting-messageNotice']").html($.i18n.prop('info-setting-messageNotice'));
			$("[name='info-setting-privacy']").html($.i18n.prop('info-setting-privacy'));
			$("[name='info-setting-deleteCache']").html($.i18n.prop('info-setting-deleteCache'));
			$("[name='info-setting-accountSecurity']").html($.i18n.prop('info-setting-accountSecurity'));
			$("[name='info-setting-feedback']").html($.i18n.prop('info-setting-feedback'));
			$("[name='info-setting-about']").html($.i18n.prop('info-setting-about'));
			$("[name='info-setting-update']").html($.i18n.prop('info-setting-update'));	
			$("[name='info-logout']").html($.i18n.prop('info-logout'));
		}
	});
}