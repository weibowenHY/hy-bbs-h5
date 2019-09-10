mui.init({
	
});

notification = {
	// 事件注册
	event: function() {
		$("#messageSwitch").addEventListener("toggle",function(event){
			changeMessageNotification(event.detail.isActive)
		});
	},
	service: {
		//获取状态
		getMessageNotification:function(status){
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
		
		//更改状态
		changeMessageNotification:function(status){
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
		notification.event();
		
	},
}
notification.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-message-title']").html($.i18n.prop('info-message-title'));
			$("[name='info-message-bew-message']").html($.i18n.prop('info-message-bew-message'));

		}
	});
}