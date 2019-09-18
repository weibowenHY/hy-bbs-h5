mui.init({

});

register = {

	// 事件注册
	event: function() {
		//$("#code").on("click", register.service.getCode);
		$("#registerBtn").on("click", register.service.doRegister);
		$("#loginBtn").on("click", register.service.doLogin);
		
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
		
		doLogin:function(){
			window.location.href = "login.html";
		},
		
		getCode:function(){
			alert("getCode");
		},
		
		doRegister:function(){
			
			if(register.validate() == false){
				return;
			}
			
			var data = {
			  "email": $("#userName").val(),
			  "password":$("#password").val(),
			  "verifycode": $("#code").val(),
			  "username": $("#userName").val(),
			}
			apiHelper.post(CONSTANT.baseUrl + "/user", JSON.stringify(data), function(flag, data) {
				debugger
				if(data.status == AJAX_SECCUSS) {
					mui.toast("register success");
					setTimeout(function() {
					   	window.location.href = "login.html";       
					}, 1000)  
				
				} else {
					mui.toast(data.error);
				}
			}, null, AJAX_BODY);	
		}
	},
	dao: {},
	init: function() {
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		register.event();
	},
}
register.init();

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
			$("[name='info-register-Email']").html($.i18n.prop('info-register-Email'));
			$("[name='info-register-verification']").html($.i18n.prop('info-register-verification'));
			$("[name='info-register-password']").html($.i18n.prop('info-register-password'));
			$("[name='info-reigster-btn']").html($.i18n.prop('info-reigster-btn'));
			$("[name='info-register-unable']").html($.i18n.prop('info-register-unable'));
			$("[name='info-login']").html($.i18n.prop('info-login'));
			$("[name='info-signUp']").html($.i18n.prop('info-signUp'));
			
		}
	});
}