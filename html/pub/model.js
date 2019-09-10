mui.init({

});

model = {

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
model.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-model-title']").html($.i18n.prop('info-model-title'));
			$("[name='info-brand-nike']").html($.i18n.prop('info-brand-nike'));
			$("[name='info-model-addpic']").html($.i18n.prop('info-model-addpic'));
			$("[name='info-model-lookes']").html($.i18n.prop('info-model-lookes'));
			$("[name='info-model-markes']").html($.i18n.prop('info-model-markes'));
			$("[name='info-model-insole-deedle']").html($.i18n.prop('info-model-insole-deedle'));
			$("[name='info-model-insole']").html($.i18n.prop('info-model-insole'));
			$("[name='info-model-boxes']").html($.i18n.prop('info-model-boxes'));
			$("[name='info-model-stamp']").html($.i18n.prop('info-model-stamp'));
			$("[name='info-model-other']").html($.i18n.prop('info-model-other'));
			$("[name='info-model-add-note']").html($.i18n.prop('info-model-add-note'));
			$("[name='info-model-publish']").html($.i18n.prop('info-model-publish'));
		}
	});
}