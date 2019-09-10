mui.init({

});

followers = {

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
followers.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
		
		$("[name='info-followers-tilte']").html($.i18n.prop('info-followers-tilte'));
		$("[name='info-followers-name']").html($.i18n.prop('info-followers-name'));
		$("[name='info-followers-region']").html($.i18n.prop('info-followers-region'));
		$("[name='info-followers-following']").html($.i18n.prop('info-followers-following'));
		$("[name='info-followers-cancle']").html($.i18n.prop('info-followers-cancle'));
		
		}
	});
}