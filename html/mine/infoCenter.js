mui.init({

});

infoCenter = {

	// 事件注册
	event: function() {
		$("#personnal-setting").on("click", infoCenter.service.changePersonnalSetting);
		$("#changeFavorite").on("click", infoCenter.service.changeFavorite);
		$("#changeWallet").on("click", infoCenter.service.changeWallet);
		$("#inviteGift").on("click", infoCenter.service.changeGift);
		
		$("#publishBtn").on("click", infoCenter.service.changePub);
		
		$("#infoGiftBtn").on("click", infoCenter.service.changeGift);
		
		$("#doPub").on("click", infoCenter.service.changePubInfo);
		
		$("#userIcon").on("click",infoCenter.service.zoomPic);
		
		$("#activityBtn").on("click",infoCenter.service.doActivity);
		
		
		
			
	},

	
	service: {
		
		zoomPic:function(){
			mui.previewImage();
		},
		
		changePersonnalSetting:function(){
			window.location.href = "centerInfo.html";
		},
			
		changeFavorite:function(){
			window.location.href = "favorite.html";
		},
		
		changeWallet:function(){
			window.location.href = "wallet.html";
		},
		changeGift:function(){
			window.location.href = "inviteGift.html";
		},
		changePub:function(){
			window.location.href = "myPublish.html";
		},
		changePubInfo:function(){
			window.location.href = "../../html/pub/appraisal.html";
		},
		doActivity:function(){
			window.location.href = "../../html/chat/concrete.html"
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
							$('#balance').text(data.data.balance);
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
		infoCenter.event();
		infoCenter.service.renderPage();
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