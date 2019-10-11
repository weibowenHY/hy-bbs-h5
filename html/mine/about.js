mui.init({

});

about = {

	// 事件注册
	event: function() {
		$("#shareBtn").on("click", about.service.share);
		
		$("#shareGrade").on("click", about.service.shareGrade);
		
		$("#shareInformation").on("click", about.service.shareInformation);
		
		$("#shareComplaint").on("click", about.service.shareComplaint);
		
	},

	
	service: {
		share:function(){
			window.location.href = "notification.html";
			
		},
		shareGrade:function(){
			window.location.href = "componyInfo.html";
			
		},
		shareInformation:function(){
			window.location.href = "../../html/chat/infomation.html";
			
		},
		shareComplaint:function(){
			window.location.href = "componyInfo.html";
			
		}
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		about.event()
	},
}
about.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-about-title']").html($.i18n.prop('info-about-title'));
			$("[name='info-about-btn']").html($.i18n.prop('info-about-btn'));
			$("[name='info-about-grade']").html($.i18n.prop('info-about-grade'));
			
			$("[name='info-about-information']").html($.i18n.prop('info-about-information'));
			$("[name='info-about-complaint']").html($.i18n.prop('info-about-complaint'));
		}
	});
}