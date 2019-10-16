mui.init({

});

pubAuth = {

	// 事件注册
	event: function() {
		
		$("#cancelBtn").on("click", pubAuth.service.cancelInit);
	},

	
	service: {
		
		cancelInit:function(){
			alert("cancle");
		},
		
		myAuthList:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/identify/get/" + TOKEN_REL.token,
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
		pubAuth.event();
		pubAuth.service.myAuthList();
	},
}
pubAuth.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-pubAuth-tilte']").html($.i18n.prop('info-pubAuth-tilte'));
			
		}
	});
}

function renderPage(data){
	var statusMine = {
		"-1":"PUBLISH",
		"0":"WAITING",
		"1":"PASS",
		"2":"UNPASS"
	};
	$('.mui-content').empty();
	$.each(data, function(index,element) {
		
		$infoDiv = $('<div class="border-info"></div>');
		$listareaDiv = $('<div class="aui-icon-list-area"></div>');
		$firstA = $('<a href="javascript:;" class="aui-flex b-line"></a>');
		$imgDiv = $('<div class="aui-inter-user-img"></div>');
		$img = $('<img alt="" style="width: none;">');
		$shopDiv = $('<div class="aui-flex-srt-word" style="width:100%;margin-left: -1.25em; margin-top: -1.45em; color: #FFFFFF;"></div>');
		//$shopSecDiv = $('<div class="aui-flex-srt-word"  style="width:100%; margin-left: -3.25em; margin-bottom: -2.25em; color: #FFFFFF;font-size: 14px;"></div>');
		$secA = $('<a href="javascript:;" class="aui-flex" style="height: 2.25em;"></a>');
		$timeDiv = $('<div class="aui-flex-srt-word" style="  color: #FFFFFF;"></div>');
		$cancleDiv = $('<div onclick="pubAuth.service.cancelInit()" class="aui-flex-srt-word"  style="color: #FFFFFF;font-size: 14px;margin-left: 3em;">cancel</div>');
		$resultDiv = $('<div class="aui-flex-srt-word"  style="color: #FFFFFF;font-size: 14px; margin-left: 4em;"></div>');
		
		if(element.looks == ""){
			$img.attr('src',"../../res/model/shoespic.png");
		}else{
					$img.attr('src',element.looks);
		}

		$imgDiv.append($img);
		$shopDiv.text(element.name);
		//$shopSecDiv.text(element.content);
		$firstA.append($imgDiv);
		$firstA.append($shopDiv);
		//$firstA.append($shopSecDiv);
		
		$timeDiv.text(getYyyymmddhh24miss(element.createTime));
		//状态,-1:发布,0：待审核,1：通过，2：未通过
		$.each(statusMine, function(key,value) {
			if (key == element.status) {
				$resultDiv.text(value);
			}
		});
		$secA.append($timeDiv);
		$secA.append($cancleDiv);
		$secA.append($resultDiv);
		
		$listareaDiv.append($firstA);
		$listareaDiv.append($secA);
		
		$infoDiv.append($listareaDiv);
		$('.mui-content').append($infoDiv);
	});
	
	
	
	
}




				

			