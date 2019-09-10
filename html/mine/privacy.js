mui.init({

});

privacy = {

	// 事件注册
	event: function() {
		$("#favoSwitch").addEventListener("toggle",function(event){
			changeMessageFavo(event.detail.isActive)
		});
		$("#areaSwitch").addEventListener("toggle",function(event){
			changeMessageArea(event.detail.isActive)
		});
		$("#genderSwitch").addEventListener("toggle",function(event){
			changeMessageGender(event.detail.isActive)
		});
	},

	service: {
		
		getMessageFavo:function(status){
			var data = {
			};
			apiHelper.get(CONSTANT.baseUrl + "" , data, function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
					if(1==1){
						$("#messageSwitch").addClass("mui-active");
					}else{
						$("#messageSwitch").removeClass("mui-active");
					}
				}
			});
		},
		
		getMessageArea:function(status){
			var data = {
			};
			apiHelper.get(CONSTANT.baseUrl + "" , data, function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
					if(1==1){
						$("#messageSwitch").addClass("mui-active");
					}else{
						$("#messageSwitch").removeClass("mui-active");
					}
				}
			});
		},
		
		getMessageGender:function(status){
			var data = {
			};
			apiHelper.get(CONSTANT.baseUrl + "" , data, function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
					if(1==1){
						$("#messageSwitch").addClass("mui-active");
					}else{
						$("#messageSwitch").removeClass("mui-active");
					}
				}
			});
		},
		
		changeMessageFavo:function(status){
			var data = {
			}
			apiHelper.post(CONSTANT.baseUrl + "", JSON.stringify(data), function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
				} else {
					mui.toast(data.msg);
				}
			}, null, AJAX_BODY);
		},
		
		changeMessageArea:function(status){
			var data = {
			}
			apiHelper.post(CONSTANT.baseUrl + "", JSON.stringify(data), function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
				} else {
					mui.toast(data.msg);
				}
			}, null, AJAX_BODY);
		},
		
		changeMessageGender:function(status){
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
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		privacy.event();
	},
}
privacy.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    

			$("[name='info-privacy-title']").html($.i18n.prop('info-privacy-title'));
			$("[name='info-privacy-favolist']").html($.i18n.prop('info-privacy-favolist'));
			$("[name='info-privacy-area']").html($.i18n.prop('info-privacy-area'));
			$("[name='info-privacy-gender']").html($.i18n.prop('info-privacy-gender'));

		}
	});
}