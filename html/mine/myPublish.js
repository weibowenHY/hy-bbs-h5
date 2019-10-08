mui.init({

});

myPublish= {

	// 事件注册
	event: function() {
		$("#completeBtn").on("click", centerInfo.service.doComplete);
		$("#videoBtn").on("click", centerInfo.service.doVideo);
	},

	
	service: {
		
		doComplete:function(){
			$("#completeBtn").css("background-color","#dcdcdc");
			$("#videoBtn").css("background-color","#ffffff");
		},
		doVideo:function(){
			$("#completeBtn").css("background-color","#ffffff");
			$("#videoBtn").css("background-color","#dcdcdc");
		},
	
			
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		myPublish.event();
	},
}
myPublish.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    

			$("[name='info-publish-title']").html($.i18n.prop('info-publish-title'));
			$("[name='info-publish-complete']").html($.i18n.prop('info-publish-complete'));
			$("[name='info-publish-video']").html($.i18n.prop('info-publish-video'));
			$("[name='info-publish-photo']").html($.i18n.prop('info-publish-photo'));
			$("[name='info-publish-publish']").html($.i18n.prop('info-publish-publish'));
			
		}
	});
}