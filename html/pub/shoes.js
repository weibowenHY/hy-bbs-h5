mui.init({

});

shoes = {

	// 事件注册
	event: function() {
		$(".aui-icon-list-area").on("click", shoes.service.changeModel);
	},

	
	service: {
		changeModel:function(){
			window.location.href = "model.html";
		},
		rendata:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/brand",
				type: "get",
				contentType: "application/json",
				data: {},
				dataType: 'json',
				success: function(data) {
					if(data.status == AJAX_SECCUSS) {
						if (data.data.length == 0) {
							mui.toast("暂无数据");
						} else{
							renderPage(data.data);
						}
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
		shoes.event();
		shoes.service.rendata();
	},
}
shoes.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-brand-title']").html($.i18n.prop('info-brand-title'));
			$("[name='info-brand-nike']").html($.i18n.prop('info-brand-nike'));
			$("[name='info-brand-anta']").html($.i18n.prop('info-brand-anta'));
		}
	});
}

function renderPage(data){
	$('.mui-content').empty();
	$.each(data, function(index,element) {
		$areaDiv = $('<div onclick="shoes.service.changeModel()" class="aui-icon-list-area box-shadow"></div>');
		$a = $('<a href="javascript:;" class="aui-flex"></a>');
		$imgDiv = $('<div class="aui-inter-user-img"></div>');
		$img = $('<img>');
		$nameDiv = $('<div class="aui-flex-srt-word" name="info-brand-nike" style="padding: 0.1667em;"></div>');
		$arrowDiv = $('<div class="aui-flex-arrow"></div>');
		
		$img.attr('src',element.image);
		$nameDiv.text(element.name);
		
		$imgDiv.append($img);
		$a.append($imgDiv);
		$a.append($nameDiv);
		$a.append($arrowDiv);
		$areaDiv.append($a);
		
		$('.mui-content').append($areaDiv);
	});
}