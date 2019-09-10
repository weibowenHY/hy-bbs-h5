mui.init({

});

changeBinding = {

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
changeBinding.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
			$("[name='info-binding-title']").html($.i18n.prop('info-binding-title'));
			$("[name='info-next-step']").html($.i18n.prop('info-next-step'));
			$("[name='info-valid-email']").html($.i18n.prop('info-valid-email'));
			$("[name='info-verification-code']").html($.i18n.prop('info-verification-code'));
			$("[name='info-get-verification-code']").html($.i18n.prop('info-get-verification-code'));
		
			

		}
	});
}