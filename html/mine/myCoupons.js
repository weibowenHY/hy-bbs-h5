mui.init({

});

myCoupons = {

	// 事件注册
	event: function() {
	},

	
	service: {
		
	},
	dao: {},
	init: function() {
		debugger;
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
	},
}
myCoupons.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-coupons-title']").html($.i18n.prop('info-coupons-title'));
			$("[name='info-no-coupons-desc']").html($.i18n.prop('info-no-coupons-desc'));
			$("[name='info-no-coupons-bottom-desc']").html($.i18n.prop('info-no-coupons-bottom-desc'));
			
		}
	});
}