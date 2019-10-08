mui.init({

});

centerInfo = {

	// 事件注册
	event: function() {
		
		$("#checkInBtn").on("click", centerInfo.service.doSetting);
		$("#editBtn").on("click", centerInfo.service.doEdit);
		$("#completeBtn").on("click", centerInfo.service.doComplete);
		$("#videoBtn").on("click", centerInfo.service.doVideo);
		$("#fanBtn").on("click", centerInfo.service.doFan);
		$("#publishBtn").on("click", centerInfo.service.doPublish);
	
		
	},

	
	service: {
		doSetting:function(){
			window.location.href = "settings.html";
		},
		doEdit:function(){
			window.location.href = "infoEdit.html";	
		},
		doComplete:function(){
			$("#completeBtn").css("background-color","#dcdcdc");
			$("#videoBtn").css("background-color","#ffffff");
		},
		doVideo:function(){
			$("#completeBtn").css("background-color","#ffffff");
			$("#videoBtn").css("background-color","#dcdcdc");
		},
		doFan:function(){
			window.location.href = "followers.html";	
		},
		doPublish:function(){
			window.location.href = "";	
		}
			
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		centerInfo.event();
	},
}
centerInfo.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-my-checkin']").html($.i18n.prop('info-my-checkin'));
			$("[name='info-my-edit']").html($.i18n.prop('info-my-edit'));
			$("[name='info-my-fans']").html($.i18n.prop('info-my-fans'));
			$("[name='info-my-follow']").html($.i18n.prop('info-my-follow'));
			$("[name='info-my-praise']").html($.i18n.prop('info-my-praise'));
			$("[name='info-my-area']").html($.i18n.prop('info-my-area'));
			$("[name='info-my-trends']").html($.i18n.prop('info-my-trends'));
			$("[name='info-my-like']").html($.i18n.prop('info-my-like'));
			$("[name='info-my-complete']").html($.i18n.prop('info-my-complete'));
			$("[name='info-my-video']").html($.i18n.prop('info-my-video'));
			$("[name='info-my-publish']").html($.i18n.prop('info-my-publish'));
			
			
		}
	});
}