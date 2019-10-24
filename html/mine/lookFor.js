mui.init({

});

lookFor = {

	// 事件注册
	event: function() {
		$('#inputBtn').bind('keyup', function(event) {
			if (event.keyCode == "13") {
				alert(111);
				var par = $('#inputBtn').val();
				lookFor.service.renderData(par);
			}
		});
	},

	service: {
		renderData:function(par){
			alert(par);
			$.ajax({
				url: CONSTANT.baseUrl + "/collect/get/" + TOKEN_REL.token + "?content=" + par,
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
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		lookFor.event();
	},
}
lookFor.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-search-title']").html($.i18n.prop('info-search-title'));

		}
	});
}

function renderPage(res){
	if (res.length != 0) {
		$('.wall').empty();
		$.each(res, function(index,element) {
			$li = $('<li class="article"></li>');
			$a = $('<a href="http://www.17sucai.com/"></a>');
			$img = $('<img/>');
			$div = $('<div style="color: #FFFFFF;font-weight: bold;"></div>');
			$div.text(element.title);
			$img.attr('src',element.image);
			$a.append($img);
			$a.append($div);
			$li.append($a);
			$('.wall').append($li);
		});
	}
}
