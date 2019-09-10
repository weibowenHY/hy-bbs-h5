mui.init({

});

countryChoose = {

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
countryChoose.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
		
		$("[name='info-change-country']").html($.i18n.prop('info-change-country'));
		$("[name='info-change-albania']").html($.i18n.prop('info-change-albania'));
		$("[name='info-change-bulgaria']").html($.i18n.prop('info-change-bulgaria'));

		}
	});
}