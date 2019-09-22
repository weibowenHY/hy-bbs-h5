mui.init({

});

login = {

	// 事件注册
	event: function() {
		
		$("#loginBtn").on("click", login.service.doLogin);
		
		$("#facebookBtn").on("click", login.service.doFacebook);
		
		$("#insBtn").on("click", login.service.doIns);
		
		$("#twitterBtn").on("click", login.service.doTwitter);
		
		$("#signUpBtn").on("click", login.service.changeRegister);
		
		$("#forgetPassword").on("click", login.service.changePassword);
		
		
		
		
	},

	validate: function() {

		var passwd = $("#password").val();
		
		if($("#userName").val() == "") {
			mui.toast("please enter you email");
			return false;
		}
		if($("#password").val() == "") {
			mui.toast("you password is empty");
			return false;
		}
		//		if($("#password").val().length < 8) {
		//			mui.toast("密码位数至少8位哦！");
		//			return false;
		//		}
		if($("#password").val().length > 16) {
			mui.toast("please enter lease than 16 charactor");
			return false;
		}

		return true;
	},
	

	service: {
		changePassword:function(){
			window.location.href = "retrieve.html";
		},
		
		changeRegister:function(){
			window.location.href = "register.html";
		},
		
		doLogin:function(){
			if(login.validate() == false){
				return;
			}
			
			debugger;
			var data = {
				  "email": $("#userName").val(),
				  "password":  $("#password").val(),
				  "verifycode": $("#code").val(),
			}
			apiHelper.post(CONSTANT.baseUrl + "/user/login", JSON.stringify(data), function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
						mui.toast("login success");
					  setTimeout(function() {  
					        window.location.href = "mine/infoCenter.html";
					        localStorage.setItem("token",data.data);            
						}, 1000)  
					
				} else {
					mui.toast(data.error);
				}
			}, null, AJAX_BODY);	
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