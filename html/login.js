mui.init({

});

login = {

	// 事件注册
	event: function() {
		
		$("#loginBtn").on("click", login.service.doRegister);
		
		$("#facebookBtn").on("click", login.service.doFacebook);
		
		$("#insBtn").on("click", login.service.doIns);
		
		$("#twitterBtn").on("click", login.service.doTwitter);
		
	},

	
	service: {
		
		doRegister:function(){
			
		},
		
		doFacebook:function(){
			
		},
		
		doIns:function(){
			
		},
		
		doTwitter:function(){
			
		},
		
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		login.event();
	},
}
login.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-cancel']").html($.i18n.prop('info-cancel'));
			$("[name='info-login-account']").html($.i18n.prop('info-login-account'));
			$("[name='info-login-entercode']").html($.i18n.prop('info-login-entercode'));
			$("[name='info-login-password']").html($.i18n.prop('info-login-password'));
			$("[name='info-login-btn']").html($.i18n.prop('info-login-btn'));
			$("[name='info-login-user-psw']").html($.i18n.prop('info-login-user-psw'));
			$("[name='info-login-unable']").html($.i18n.prop('info-login-unable'));
			$("[name='info-login']").html($.i18n.prop('info-login'));
			$("[name='info-signUp']").html($.i18n.prop('info-signUp'));
		}
	});
}