mui.init({

});

integral = {

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
		integral.event();
	},
}
integral.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-integal-title']").html($.i18n.prop('info-integal-title'));
			$("[name='info-integral-name']").html($.i18n.prop('info-integral-name'));
			$("[name='info-integral-day1']").html($.i18n.prop('info-integral-day1'));
			$("[name='info-integral-day2']").html($.i18n.prop('info-integral-day2'));
			$("[name='info-integral-day3']").html($.i18n.prop('info-integral-day3'));
			$("[name='info-integral-day4']").html($.i18n.prop('info-integral-day4'));
			$("[name='info-integral-day5']").html($.i18n.prop('info-integral-day5'));
			$("[name='info-integral-day6']").html($.i18n.prop('info-integral-day6'));
			$("[name='info-integral-day7']").html($.i18n.prop('info-integral-day7'));
			$("[name='info-integral-signin']").html($.i18n.prop('info-integral-signin'));
			$("[name='info-integral-prize']").html($.i18n.prop('info-integral-prize'));
			$("[name='info-integral-point']").html($.i18n.prop('info-integral-point'));
			$("[name='info-integral-invite']").html($.i18n.prop('info-integral-invite'));
		}
	});
}