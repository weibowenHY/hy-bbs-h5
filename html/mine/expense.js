mui.init({

});

expense = {

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
expense.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-expense-title']").html($.i18n.prop('info-expense-title'));
			$("[name='info-expense-commondity']").html($.i18n.prop('info-expense-commondity'));
			$("[name='info-expense-price']").html($.i18n.prop('info-expense-price'));
			$("[name='info-expense-Time']").html($.i18n.prop('info-expense-Time'));
		}
	});
}