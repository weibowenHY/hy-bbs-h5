mui.init({

});

concrete = {

	// 事件注册
	event: function() {
		$('#loginBtn').on('click',concrete.service.solveconcrete);
		
	},

	
	service: {
		getConcrete:function(){
			$.ajax({
				url: CONSTANT.baseUrl + "/complaint/get/" + TOKEN_REL.token,
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
		solveconcrete:function(){
			$('.speak_box').empty();
		}
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		concrete.event();
		concrete.service.getConcrete();
	},
}
concrete.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-concrete-title']").html($.i18n.prop('info-concrete-title'));
			$("[name='info-concrete-solve']").html($.i18n.prop('info-concrete-solve'));
			$("[name='info-concrete-notSolve']").html($.i18n.prop('info-concrete-notSolve'));
		}
	});
}

function renderPage(data){
	$('.speak_box').empty();
	$.each(data, function(index,element){
		//我的提问
	    var text = element.content,
	        str  = '<div class="question">';
	        str += '<div class="heard_img right"><img src="../../res/holdChat/icon.png"/></div>';
	        str += '<div class="question_text clear"><p>'+text+'</p><i></i>';
	        str += '</div></div>';
	    $('.speak_box').append(str);
	    //回答
	    if (element.answer) {
	    	var ans  = '<div class="answer"><div class="heard_img left"><img src="../../res/holdChat/icon.png"/></div>';
	            	ans += '<div class="answer_text"><p>'+element.answer+'</p><i></i>';
	        		ans += '</div></div>';
    		$('.speak_box').append(ans);
	    }
	    autoWidth();
        for_bottom();
	});
}
