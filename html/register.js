mui.init({

});

register = {

	// 事件注册
	event: function() {
		$("#code").on("click", register.service.getCode);
		$("#registerBtn").on("click", register.service.doRegister);
	},

	
	service: {
		getCode:function(){
			alert("getCode");
		},
		
		doRegister:function(){
			var data = {
			}
			apiHelper.post(CONSTANT.baseUrl + "", JSON.stringify(data), function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
				} else {
					mui.toast(data.msg);
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