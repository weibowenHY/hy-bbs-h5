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
		$("[name='info-change-bosnia']").html($.i18n.prop('info-change-bosnia'));
		$("[name='info-change-romania']").html($.i18n.prop('info-change-romania'));
		$("[name='info-change-macedonia']").html($.i18n.prop('info-change-macedonia'));
		$("[name='info-change-yugoslavia']").html($.i18n.prop('info-change-yugoslavia'));
		$("[name='info-change-slovenia']").html($.i18n.prop('info-change-slovenia'));
		$("[name='info-change-greece']").html($.i18n.prop('info-change-greece'));
		$("[name='info-change-italy']").html($.i18n.prop('info-change-italy'));
		
		

		}
	});
}