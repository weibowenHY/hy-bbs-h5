mui.init({

});

gender = {

	// 事件注册
	event: function() {
		$("#male-btn").on("click", gender.service.maleCheck);
		$("#female-btn").on("click", gender.service.femaleCheck);
	},

	service: {
		/*
		 *  1:男      
		 *  0:女
		 * 
		 * */
		getGender:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token,
				type: "get",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						
					}else{
						mui.toast(data.error);
					}
				}
			});
		},
		maleCheck:function(){
			$("#mCheck").show();
			$("#fCheck").hide();
			var param ={
				"query":"?sex=",
				"stausFlag":1
			}
			cheangeUser(param);
		},
		femaleCheck:function(){
			$("#mCheck").hide();
			$("#fCheck").show();
			var param ={
				"query":"?sex=",
				"stausFlag":0
			}
			cheangeUser(param);
		}
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		gender.event();
		gender.service.getGender();
	},
}
gender.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-gender-title']").html($.i18n.prop('info-gender-title'));
			$("[name='info-gender-male']").html($.i18n.prop('info-gender-male'));
			$("[name='info-gender-female']").html($.i18n.prop('info-gender-female'));

		}
	});
}
function cheangeUser(data){
	$.ajax({
		url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token + data.query +data.stausFlag,
		type: "put",
		contentType: "application/json",
		data: {},
		dataType: 'json',
		success: function(data) {
			if(data.status == AJAX_SECCUSS) {
				mui.toast("success");
			} else {
				mui.toast(data.msg);
			}
		}
	});
}