mui.init({

});

wallet = {

	// 事件注册
	event: function() {
		$("#pillBtn").on("click", wallet.service.changePill);
		$("#counponBtn").on("click", wallet.service.changeCounpon);
		$("#cardBtn").on("click", wallet.service.changeCard);
		
	},

	
	service: {
		
		changePill:function(){
			window.location.href = "myBalanceInfo.html";
		},
		changeCounpon:function(){
			window.location.href = "myCoupons.html";
		},
		changeCard:function(){
			
		},
		renderPage:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/user/" + TOKEN_REL.token,
				type: "get",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						//用户名
						$('#userName').text(data.data.username);
						//头像
						$('#userIcon').attr('src',data.data.icon);
						//余额
						if (data.data.balance) {
							$('#balance').text("$"+data.data.balance);
						}else{
							$('#balance').text("0.00");
						}
						
					}else{
						mui.toast(data.error);
					}
				}
			});
			$.ajax({
				url: CONSTANT.baseUrl + "/voucher/get/" + TOKEN_REL.token + "?isUsed=0&isOverdue=0",
				type: "get",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						//优惠券
						$("#Coupon").text(data.data.length);
					}else{
						mui.toast(data.error);
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
		wallet.event();
		wallet.service.renderPage();
	},
}
wallet.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-wallet-title']").html($.i18n.prop('info-wallet-title'));
			// $("[name='info-wallet-name']").html($.i18n.prop('info-wallet-name'));
			 $("[name='info-wallet-pill']").html($.i18n.prop('info-wallet-pill'));
			 $("[name='info-wallet-coupons']").html($.i18n.prop('info-wallet-coupons'));
			 $("[name='info-wallet-card']").html($.i18n.prop('info-wallet-card'));
		}
	});
}