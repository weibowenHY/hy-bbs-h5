mui.init({

});

changeNickName = {

	// 事件注册
	event: function() {
		$("#info-save-btn").on("click", changeNickName.service.chengeInfo);
		
	},

	
	service: {
		infoSave:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token,
				type: "get",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						$('#userName').val(data.data.username);
					}else{
						mui.toast(data.error);
					}
				}
			});
		},
		chengeInfo:function(){
			var userName = $('#userName').val();
			if (userName) {
				$.ajax({
					url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token + "?username=" + userName,
					type: "put",
					contentType: "application/json",
					data: {},
					dataType: 'json',
					success: function(data) {
						if(data.status == AJAX_SECCUSS) {
							mui.toast("success");
						} else {
							mui.toast(data.error);
						}
					}
				});
			} else{
				mui.toast("please enter your name");
			}
			
		}
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		changeNickName.event();
		changeNickName.service.infoSave();
	},
}
changeNickName.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
			$("[name='info-nickName-title']").html($.i18n.prop('info-nickName-title'));
			$("[name='info-name']").html($.i18n.prop('info-name'));
			$("[name='info-save']").html($.i18n.prop('info-save'));
			
			

		}
	});
}