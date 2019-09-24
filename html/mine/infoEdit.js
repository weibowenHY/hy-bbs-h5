mui.init({

});

infoEdit = {

	// 事件注册
	event: function() {
		$("#edit-profile").on("click", infoEdit.service.showProfile);
		$("#edit-name").on("click", infoEdit.service.showName);
		$("#edit-gender").on("click", infoEdit.service.showGender);
		$("#edit-area").on("click", infoEdit.service.showArea);
		
	},
	
	service: {
		showProfile:function(){
			window.location.href = "settings.html";
		},
		
		showName:function (){
			window.location.href = "changeNickName.html";
		},
		
		showGender:function(){
			window.location.href = "gender.html";
		},
		
		showArea:function (){
			window.location.href = "countryChoose.html";
		}
		
		
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		infoEdit.event();
		
	},
}
infoEdit.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-edit-title']").html($.i18n.prop('info-edit-title'));
			$("[name='info-edit-photo']").html($.i18n.prop('info-edit-photo'));
			$("[name='info-edit-name']").html($.i18n.prop('info-edit-name'));
			$("[name='info-edit-gender']").html($.i18n.prop('info-edit-gender'));
			$("[name='info-edit-area']").html($.i18n.prop('info-edit-area'));
		}
	});
}