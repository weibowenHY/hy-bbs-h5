mui.init({

});

countryChoose = {

	// 事件注册
	event: function() {
		$('#albania').on('click',function(){
			countryChoose.service.setCountry("albania");
		});
		$('#bulgaria').on('click',function(){
			countryChoose.service.setCountry("bulgaria");
		});
		$('#bosnia').on('click',function(){
			countryChoose.service.setCountry("bosnia");
		});
		$('#romania').on('click',function(){
			countryChoose.service.setCountry("romania");
		});
		$('#macedonia').on('click',function(){
			countryChoose.service.setCountry("macedonia");
		});
		$('#yugoslavia').on('click',function(){
			countryChoose.service.setCountry("yugoslavia");
		});
		$('#greece').on('click',function(){
			countryChoose.service.setCountry("greece");
		});
		$('#italy').on('click',function(){
			countryChoose.service.setCountry("italy");
		});
		$('#slovenia').on('click',function(){
			countryChoose.service.setCountry("slovenia");
		});
		
	},

	
	service: {
		getCountry:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token,
				type: "get",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						if (data.data.country) {
							$('.Check').hide();
							$('#'+data.data.country).find('.Check').show();
						}else{
							$('.Check').hide();
						}
					}else{
						mui.toast(data.error);
					}
				}
			});
		},
		setCountry:function(paramer){
			$.ajax({
				url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token + '?country='+paramer,
				type: "put",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						$('.Check').hide();
						$('#'+paramer).find('.Check').show();
						mui.toast("success");
					} else {
						mui.toast(data.msg);
					}
				}
			});
		}
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		countryChoose.service.getCountry();
		countryChoose.event();
	},
}
countryChoose.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
		
		$("[name='info-change-country']").html($.i18n.prop('info-change-country'));
		$("[name='info-change-albania']").html($.i18n.prop('info-change-albania'));
		$("[name='info-change-bulgaria']").html($.i18n.prop('info-change-bulgaria'));
		$("[name='info-change-bosnia']").html($.i18n.prop('info-change-bosnia'));
		$("[name='info-change-romania']").html($.i18n.prop('info-change-romania'));
		$("[name='info-change-macedonia']").html($.i18n.prop('info-change-macedonia'));
		$("[name='info-change-yugoslavia']").html($.i18n.prop('info-change-yugoslavia'));
		$("[name='info-change-slovenia']").html($.i18n.prop('info-change-slovenia'));
		$("[name='info-change-greece']").html($.i18n.prop('info-change-greece'));
		$("[name='info-change-italy']").html($.i18n.prop('info-change-italy'));
		
		

		}
	});
}