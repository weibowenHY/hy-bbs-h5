mui.init({

});

payPsw = {

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
payPsw.init();

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
			$("[name='info-payPsw-title']").html($.i18n.prop('info-payPsw-title'));
			$("[name='info-complete']").html($.i18n.prop('info-complete'));
			$("[name='info-payPsw-ori']").html($.i18n.prop('info-payPsw-ori'));
			$("[name='info-payPsw-new']").html($.i18n.prop('info-payPsw-new'));
			$("[name='info-payPsw-deter']").html($.i18n.prop('info-payPsw-deter'));
		}
	});
}