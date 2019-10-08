mui.init({

});

favorite = {

	// 事件注册
	event: function() {
		$("#articleBtn").on("click", favorite.service.doArticle);
		$("#photoBtn").on("click", favorite.service.doPhoto);
		$("#resultBtn").on("click", favorite.service.doResult);
		$("#forumBtn").on("click", favorite.service.doForum);
		$("#searchBtn").on("click", favorite.service.doSearch);
		
		
	},

	service: {
		doArticle:function(){
			if($("#articleBtn").hasClass("active")){
				$("#articleBtn").removeClass("active");
			}else{
				$("#articleBtn").addClass("active");
				$("#photoBtn").removeClass("active");
				$("#resultBtn").removeClass("active");
				$("#forumBtn").removeClass("active");
			}
			window.location.href = "photo.html";
		},
		doPhoto:function(){
			if($("#photoBtn").hasClass("active")){
				$("#photoBtn").removeClass("active");
			}else{
				$("#articleBtn").removeClass("active");
				$("#photoBtn").addClass("active");
				$("#resultBtn").removeClass("active");
				$("#forumBtn").removeClass("active");
			}
			window.location.href = "photo.html";
			
		},
		doResult:function(){
			if($("#resultBtn").hasClass("active")){
				$("#resultBtn").removeClass("active");
			}else{
				$("#articleBtn").removeClass("active");
				$("#photoBtn").removeClass("active");
				$("#resultBtn").addClass("active");
				$("#forumBtn").removeClass("active");
			}
			window.location.href = "photo.html";
			
		},
		doForum:function(){
			if($("#forumBtn").hasClass("active")){
				$("#forumBtn").removeClass("active");
			}else{
				$("#articleBtn").removeClass("active");
				$("#photoBtn").removeClass("active");
				$("#resultBtn").removeClass("active");
				$("#forumBtn").addClass("active");
			}
			window.location.href = "photo.html";
		},
		doSearch:function(){
			window.location.href = "lookFor.html";
			
		}

	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		favorite.event();
	},
}
favorite.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法   
		 $("[name='info-favorite-title']").html($.i18n.prop('info-favorite-title'));
		 $("[name='info-favorite-article']").html($.i18n.prop('info-favorite-article'));
		 $("[name='info-favorite-photo']").html($.i18n.prop('info-favorite-photo'));
		 $("[name='info-favorite-result']").html($.i18n.prop('info-favorite-result'));
		 $("[name='info-favorite-forum']").html($.i18n.prop('info-favorite-forum'));
		}
	});
}