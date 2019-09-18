mui.init({

});

enterPassword = {

	// 事件注册
	event: function() {
		$("#cancelBtn").on("click", enterPassword.service.showCancle);
		$("#logonBtn").on("click", enterPassword.service.doLogon);
		
		
	},
	validate: function() {

		
		if($("#code").val() == "") {
			mui.toast("please enter your code");
			return false;
		}
		
		return true;
	},
	
	service: {
		
		
		showCancle:function(){
			window.location.href = "login.html";
			
		},
		
		doLogon:function(){
			if(retrieve.validate() == false){
				return;
			}
		}
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		enterPassword.event()
	},
}
enterPassword.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-enterpsw-cancel']").html($.i18n.prop('info-enterpsw-cancel'));
			$("[name='info-enterpsw-btn']").html($.i18n.prop('info-enterpsw-btn'));
			$("[name='info-enterpsw-code']").html($.i18n.prop('info-enterpsw-code'));
		}
	});
}