mui.init({

});

security = {

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
security.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
		$("[name='info-security-title']").html($.i18n.prop('info-security-title'));
		$("[name='info-security-phone']").html($.i18n.prop('info-security-phone'));
		$("[name='info-security-change']").html($.i18n.prop('info-security-change'));
		$("[name='info-security-setting']").html($.i18n.prop('info-security-setting'));
		$("[name='info-security-facebook']").html($.i18n.prop('info-security-facebook'));
		$("[name='info-security-ins']").html($.i18n.prop('info-security-ins'));
		$("[name='info-security-Twitter']").html($.i18n.prop('info-security-Twitter'));
		$("[name='info-security-bind']").html($.i18n.prop('info-security-bind'));
		$("[name='info-security-lable']").html($.i18n.prop('info-security-lable'));
		
		}
	});
}