mui.init({

});

followers = {

	// 事件注册
	event: function() {
		
	},

	
	service: {
		getFollowers:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/relation/getFans/" + TOKEN_REL.token,
				type: "get",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						var res = data.data;
						renderPage(res);
					}else{
						mui.toast(data.error);
					}
				}
			});
		},
		addFollow:function(parame){
			var parameter = JSON.stringify({"toUserId": parame});
			
			$.ajax({
				url: CONSTANT.baseUrl + "/relation/add/" + TOKEN_REL.token + "?toUserId=" + parame,
				type: "POST",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						mui.toast("success");
						followers.service.getFollowers();
					}else{
						mui.toast(data.error);
					}
				}
			});
		},
		cancleFollow:function(parame){
			$.ajax({
				url: CONSTANT.baseUrl + "/relation/delete/" + TOKEN_REL.token + "?toUserId=" + parame,
				type: "DELETE",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						mui.toast("success");
						followers.service.getFollowers();
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
		followers.event();
		followers.service.getFollowers();
	},
}
followers.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			
		
		$("[name='info-followers-tilte']").html($.i18n.prop('info-followers-tilte'));
		$("[name='info-followers-name']").html($.i18n.prop('info-followers-name'));
		$("[name='info-followers-region']").html($.i18n.prop('info-followers-region'));
		$("[name='info-followers-following']").html($.i18n.prop('info-followers-following'));
		$("[name='info-followers-cancle']").html($.i18n.prop('info-followers-cancle'));
		
		}
	});
}

function renderPage(data){
	if (data.length != 0) {
		$('.mui-content').empty();
		$.each(data, function(index,element) {
			var $listDiv = $('<div class="aui-icon-list-area box-shadow"></div>');
			var $a = $('<a href="javascript:;" class="aui-flex"></a>');
			var $userImgDiv = $('<div class="aui-inter-user-img"></div>');
			var $userImg = $('<img>');
			var $genderImgDiv = $userImgDiv.clone();
			var $genderImg = $userImg.clone();
			var $wordDiv = $('<div class="aui-flex-srt-word" style="padding: 0.1667em;"></div>');
			var $regonDiv = $wordDiv.clone();
			var $wordRDiv = $('<div class="aui-flex-srt-word-right"></div>');
			var $button;
			
			if (element.sex == 0) {
				$genderImg.attr('src','../../res/mine/gender-m.png');
			} else{
				$genderImg.attr('src','../../res/mine/gender-w.png');
			}
			if (element.relationFlag == 1) {
				$button = $('<button onclick="followers.service.cancleFollow('+ element.id+')" class="followingCancle" name="info-followers-cancle" style="border-radius: 15px;"></button>');
			} else{
				$button = $('<button onclick="followers.service.addFollow('+ element.id+')" class="followingAdd" name="info-followers-following" style="border-radius: 15px;"></button>');
			}
			
			$button.attr('toUserId',element.id);
			$userImg.attr('src',element.icon);
			$userImgDiv.append($userImg);
			$wordDiv.text(element.username);
			$regonDiv.text(element.country);
			$genderImgDiv.append($genderImg);
			$wordRDiv.append($button);
			$a.append($userImgDiv);
			$a.append($wordDiv);
			$a.append($genderImgDiv);
			$a.append($regonDiv);
			$a.append($wordRDiv);
			$listDiv.append($a);
			$('.mui-content').append($listDiv);
			loadProperties("en");
		});
	}
}
