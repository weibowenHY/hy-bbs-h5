mui.init({

});

wallet = {

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
wallet.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-wallet-title']").html($.i18n.prop('info-wallet-title'));
			$("[name='info-wallet-name']").html($.i18n.prop('info-wallet-name'));
			$("[name='info-wallet-pill']").html($.i18n.prop('info-wallet-pill'));
			$("[name='info-wallet-coupons']").html($.i18n.prop('info-wallet-coupons'));
			$("[name='info-wallet-card']").html($.i18n.prop('info-wallet-card'));
		}
	});
}