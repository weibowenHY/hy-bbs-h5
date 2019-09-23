mui.init({

});

privacy = {

	// 事件注册
	event: function() {
		$("#favoSwitch").on("toggle",function(event){
			privacy.service.changeMessageFavo(event.detail.isActive)
		});
		$("#areaSwitch").on("toggle",function(event){
			privacy.service.changeMessageArea(event.detail.isActive)
		});
		$("#genderSwitch").on("toggle",function(event){
			privacy.service.changeMessageGender(event.detail.isActive)
		});
	},

	service: {
		
		getMessageAll:function(status){
			var param = {
			};
			/*apiHelper.get(CONSTANT.baseUrl + "" , data, function(flag, data) {
				if(data.status == AJAX_SECCUSS) {
					if(1==1){
						$("#messageSwitch").addClass("mui-active");
					}else{
						$("#messageSwitch").removeClass("mui-active");
					}
				}
			});*/
			$.ajax({
				url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token,
				type: "get",
				contentType: "application/json",
				data: param,
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						/*喜欢列表*/
						if(data.data.lkeListsFlag==1){
							$("#favoSwitch").addClass("mui-active");
						}else{
							$("#favoSwitch").removeClass("mui-active");
						}
						/*地区*/
						if(data.data.countryFlag==1){
							$("#areaSwitch").addClass("mui-active");
						}else{
							$("#areaSwitch").removeClass("mui-active");
						}
						/*性别*/
						if(data.data.sexFlag==1){
							$("#genderSwitch").addClass("mui-active");
						}else{
							$("#genderSwitch").removeClass("mui-active");
						}
					}else{
						mui.toast(data.msg);
					}
				}
			});
		},
		
		changeMessageFavo:function(status){
			var stausFlag;
			if (status) {
				stausFlag = 1;
			} else{
				stausFlag = 0;
			}
			var param ={
				"query":"?lkeListsFlag=",
				"stausFlag":stausFlag
			}
			cheangeUser(param);
		},
		
		changeMessageArea:function(status){
			var stausFlag;
			if (status) {
				stausFlag = 1;
			} else{
				stausFlag = 0;
			}
			var param ={
				"query":"?countryFlag=",
				"stausFlag":stausFlag
			}
			cheangeUser(param);
		},
		
		changeMessageGender:function(status){
			var stausFlag;
			if (status) {
				stausFlag = 1;
			} else{
				stausFlag = 0;
			}
			var param ={
				"query":"?sexFlag=",
				"stausFlag":stausFlag
			}
			cheangeUser(param);
		}
		
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		privacy.event();
		privacy.service.getMessageAll();
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
