mui.init({

});

chat = {

	// 事件注册
	event: function() {
		$("#shareBtn").on("click", chat.service.share);
		
		$("#shareGrade").on("click", chat.service.shareGrade);
		
		$("#shareInformation").on("click", chat.service.shareInformation);
		
		$("#shareComplaint").on("click", chat.service.shareComplaint);
		
	},

	
	service: {
		share:function(){
			window.location.href = "notification.html";
			
		},
		shareGrade:function(){
			window.location.href = "notification.html";
			
		},
		shareInformation:function(){
			window.location.href = "notification.html";
			
		},
		shareComplaint:function(){
			window.location.href = "notification.html";
			
		}
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		chat.event()
	},
}
chat.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-chat-title']").html($.i18n.prop('info-chat-title'));
		
		}
	});
}