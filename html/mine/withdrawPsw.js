mui.init({

});

withdrawPsw = {

	// 事件注册
	event: function() {
		$('#changePwdBtn').on('click',withdrawPsw.service.changePwd);
	},

	
	service: {
		changePwd:function(){
			var oldpwd = $('#orgPsw').val();
			var newpwd = $('#newPsw').val();
			var deterPsw = $('#deterPsw').val();
			if (!oldpwd) {
				mui.toast("please enter the original password");
			}else if(!newpwd){
				mui.toast("please enter new password");
			}else if(!deterPsw){
				mui.toast("please enter determine new password");
			}else if(newpwd != deterPsw){
				mui.toast("your determine new password not equal to new passworld");
			}else{
				$.ajax({
					url: CONSTANT.baseUrl + "/user/password/" + TOKEN_REL.token + "?newpsd=" + newpwd + "&oldpsd" + oldpwd,
					type: "put",
					contentType: "application/json",
					data: {},
					dataType: 'json',
					success: function(data) {
						if(data.status == AJAX_SECCUSS) {
							mui.toast("success");
							$('#orgPsw').val("");
							$('#newPsw').val("");
							$('#deterPsw').val("");
						} else {
							mui.toast(data.error);
						}
					}
				});
			}
			
			
		}
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		withdrawPsw.event();
	},
}
withdrawPsw.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
			$("[name='info-withdraw-password']").html($.i18n.prop('info-withdraw-password'));
			$("[name='info-complete']").html($.i18n.prop('info-complete'));
			$("[name='info-withdraw-original']").html($.i18n.prop('info-withdraw-original'));
			$("[name='info-withdraw-newpsw']").html($.i18n.prop('info-withdraw-newpsw'));
			$("[name='info-withdraw-Determine']").html($.i18n.prop('info-withdraw-Determine'));
			
			
			

		}
	});
}