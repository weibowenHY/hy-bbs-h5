mui.init({

});

infoCenter = {

	// 事件注册
	event: function() {
		$("#personnal-setting").on("click", infoCenter.service.changePersonnalSetting);
		$("#changeFavorite").on("click", infoCenter.service.changeFavorite);
		$("#changeWallet").on("click", infoCenter.service.changeWallet);
		
			
	},

	
	service: {
		
		changePersonnalSetting:function(){
			window.location.href = "infoEdit.html";
		},
			
		changeFavorite:function(){
			window.location.href = "photo.html";
		},
		
		changeWallet:function(){
			window.location.href = "wallet.html";
		},
		
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		infoCenter.event();
	},
}
infoCenter.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-center-favorite']").html($.i18n.prop('info-center-favorite'));
			$("[name='info-center-wallet']").html($.i18n.prop('info-center-wallet'));
			$("[name='info-center-pill']").html($.i18n.prop('info-center-pill'));
			$("[name='info-center-coupon']").html($.i18n.prop('info-center-coupon'));
			$("[name='info-center-card']").html($.i18n.prop('info-center-card'));
			$("[name='info-center-gift']").html($.i18n.prop('info-center-gift'));
			$("[name='info-center-public']").html($.i18n.prop('info-center-public'));
			$("[name='info-center-activity']").html($.i18n.prop('info-center-activity'));
		}
	});
}