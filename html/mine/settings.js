mui.init({

});

settings = {

	// 事件注册
	event: function() {
		$("#setting-message").on("click", settings.service.showMessage);
		$("#setting-privacy").on("click", settings.service.showPrivacy);
		$("#setting-security").on("click", settings.service.showSecurity);
		$("#setting-feedback").on("click", settings.service.showFeedback);
		$("#setting-about").on("click", settings.service.showAbout);
		$("#logout-btn").on("click", settings.service.logout);
		
		
	},
	
	service: {
	
		showMessage:function(){
			window.location.href = "notification.html";
		},
		showPrivacy:function(){
			window.location.href = "privacy.html";
		},
		showSecurity:function(){
			window.location.href = "security.html";
		},
		showFeedback:function(){
			window.location.href = "evaluate.html";
		},
		showAbout:function(){
			window.location.href = "about.html";
		},
		logout:function(){
			var data = {
			}
			apiHelper.post(CONSTANT.baseUrl + "", JSON.stringify(data), function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
				} else {
					mui.toast(data.msg);
				}
			}, null, AJAX_BODY);
		},
		
		
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		settings.event();
		
	},
}
settings.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-settings-title']").html($.i18n.prop('info-settings-title'));
			$("[name='info-settings-notifica']").html($.i18n.prop('info-settings-notifica'));
			$("[name='info-settings-privacy']").html($.i18n.prop('info-settings-privacy'));
			$("[name='info-settings-delte']").html($.i18n.prop('info-settings-delte'));
			$("[name='info-settings-security']").html($.i18n.prop('info-settings-security'));
			$("[name='info-settings-feedback']").html($.i18n.prop('info-settings-feedback'));
			$("[name='info-settings-about']").html($.i18n.prop('info-settings-about'));
			$("[name='info-settings-update']").html($.i18n.prop('info-settings-update'));
			$("[name='info-settings-language']").html($.i18n.prop('info-settings-language'));
			$("[name='info-settings-logout']").html($.i18n.prop('info-settings-logout'));
			
			
			
		}
	});
}