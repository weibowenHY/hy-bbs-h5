mui.init({

});

appraisal = {

	// 事件注册
	event: function() {
		
		$("#pointTimeBtn").on("click", appraisal.service.Changepoint);
		
		$("#indenBtn").on("click", appraisal.service.ChangeIden);
		
		$("#hotBtn").on("click", appraisal.service.changeHot);
		
		$("#squareBtn").on("click", appraisal.service.changeSquare);
		
		$("#personalCenter").on("click", appraisal.service.changeCenter);
		
		
		
		
	},

	
	service: {
		Changepoint:function(){
			window.location.href = "reserve.html";
		},
		ChangeIden:function(){
			window.location.href = "classify.html";
		},
		changeHot:function(){
			window.location.href = "pubAuth.html";
		},
		changeSquare:function(){
			window.location.href = "pubAuth.html";
		},
		changeCenter:function(){
			window.location.href = "../../html/mine/infoCenter.html";
		}
		
		
		
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		appraisal.event()
	},
}
appraisal.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
		$("[name='info-appraisal-authe']").html($.i18n.prop('info-appraisal-authe'));
		$("[name='info-appraisal-hot']").html($.i18n.prop('info-appraisal-hot'));
		$("[name='info-appraisal-cure']").html($.i18n.prop('info-appraisal-cure'));
		$("[name='info-appraisal-quick']").html($.i18n.prop('info-appraisal-quick'));
		$("[name='info-appraisal-button']").html($.i18n.prop('info-appraisal-button'));
		$("[name='info-appraisal-appointment']").html($.i18n.prop('info-appraisal-appointment'));
		$("[name='info-appraisal-time']").html($.i18n.prop('info-appraisal-time'));
		
		$("[name='info-appraisal-select']").html($.i18n.prop('info-appraisal-select'));
		$("[name='info-appraisal-film']").html($.i18n.prop('info-appraisal-film'));
		
		$("[name='info-appraisal-await']").html($.i18n.prop('info-appraisal-await'));
		$("[name='info-appraisal-form']").html($.i18n.prop('info-appraisal-form'));
		
		
		

		}
	});
}