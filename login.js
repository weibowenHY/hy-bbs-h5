mui.init({

});

login = {

	// 事件注册
	event: function() {
		debugger;
		//$("#doRegister").on("click",login.service.doRegister);
	},

	// 表单验证
	validate: function() {
		var regNumber = /\d+/; //验证0-9的任意数字最少出现1次。
		var regString = /[a-zA-Z]+/; //验证大小写26个字母任意字母最少出现1次。
		var passwd = $("#password").val();
		if($("#userCode").val() == "") {
			mui.toast("您输入的账号或手机号为空");
			return false;
		}
		if($("#password").val() == "") {
			mui.toast("您输入的密码为空");
			return false;
		}
		//		if($("#password").val().length < 8) {
		//			mui.toast("密码位数至少8位哦！");
		//			return false;
		//		}
		if($("#password").val().length > 16) {
			mui.toast("密码位数最多16位哦！");
			return false;
		}

		return true;
	},

	service: {

		doRegister: function() {
			window.location.href = "Register.html"
		},

		doLogin: function() {
			if(!login.validate()) {
				return false;
			}
			var data = {
				userCode: $("#userCode").val(),
				password: $("#password").val(),
				type: SYS_USER,
				gtClientId: 1
			}
			apiHelper.post(CONSTANT.baseUrl + "/login", JSON.stringify(data), function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
					debugger;
					localStorage.setItem("token", data.result.token);
					localStorage.setItem("wxchatId", data.result["tls-usersig"]);
					localStorage.setItem("userVo", JSON.stringify(data.result.userVo));
					window.location.href = "view/buying/buyingList.html";
				} else {
					mui.toast(data.msg);
				}
			}, null, AJAX_BODY);
		}
	},
	dao: {},
	init: function() {
		login.event();
		debugger;
		LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		loadProperties(LANGUAGE_CODE);
	},
}
login.init();

var LANGUAGE_CODE = "en"; //标识语言

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: 'static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='lang-login']").html($.i18n.prop('lang-login'));
			$("[name='lang-login-noAccount']").html($.i18n.prop('lang-login-noAccount'));
			$("[name='lang-login-clickRegister']").html($.i18n.prop('lang-login-clickRegister'));
			$("[name='lang-lable-account']").html($.i18n.prop('lang-lable-account'));
			$("[name='lang-lable-psw']").html($.i18n.prop('lang-lable-psw'));
			$("[name='lang-forgetpsw']").html($.i18n.prop('lang-forgetpsw'));
			$("[name='lang-agreement']").html($.i18n.prop('lang-agreement'));
		}
	});
}