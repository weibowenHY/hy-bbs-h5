mui.init({

});

pubAuth = {

	// 事件注册
	event: function() {
		
		$("#cancelBtn").on("click", pubAuth.service.cancelInit);
	},

	
	service: {
		
		cancelInit:function(){
			alert("cancle");
		},
		
		myAuthList:function(){
			
		}
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		pubAuth.event();
	},
}
pubAuth.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-pubAuth-tilte']").html($.i18n.prop('info-pubAuth-tilte'));
			
		}
	});
}