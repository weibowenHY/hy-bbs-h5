mui.init({

});

retrieve = {

	// 事件注册
	event: function() {
		

		$("#codeBtn").on("click", retrieve.service.changeCode);
	
		
	},
	
	validate: function() {

		
		if($("#code").val() == "") {
			mui.toast("please enter your code");
			return false;
		}
		
		return true;
	},
	
	service: {
		changeCode:function(){
			if(retrieve.validate() == false){
				return;
			}
			mui.toast("auth success");
			setTimeout(function() {
					window.location.href = "enterPassword.html";  
			}, 1000)  
	
		}
		
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		retrieve.event();
	},
}
retrieve.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-retrieve-title']").html($.i18n.prop('info-retrieve-title'));
			$("[name='info-retrieve-btn']").html($.i18n.prop('info-retrieve-btn'));
			$("[name='info-retrieve-code']").html($.i18n.prop('info-retrieve-code'));
		}
	});
}