mui.init({

});
var sele;
model = {

	// 事件注册
	event: function() {
		$('#shoesBtn').on('click',function(){
			model.service.doCamera($(this));
		});
		$('#brandBtn').on('click', function(){
			model.service.doCamera($(this));
		});
		$('#needleBtn').on('click', function(){
			model.service.doCamera($(this));
		});
		$('#insolesBtn').on('click', function(){
			model.service.doCamera($(this));
		});
		$('#boxesBtn').on('click', function(){
			model.service.doCamera($(this));
		});
		$('#stampBtn').on('click', function(){
			model.service.doCamera($(this));
		});
		$('#otherBtn').on('click', function(){
			model.service.doCamera($(this));
		});
		$('#saveBtn').on('click', function(){
			model.service.saveModel();
		});
	},

	
	service: {
		doCamera:function(s){
			$('#uploadIcon').click();
			$('#uploadIcon').change(function(){
				if ($('#uploadIcon').val()) {
					var file = $("#uploadIcon")[0].files[0];//获取文件
					var formData = new FormData();
					formData.append("file", file);
					$.ajax({
						url: CONSTANT.baseUrl + "/upload/image",
						type: "post",
						data: formData,
						processData: false,
						contentType: false,
						success: function(data) {
							if(data.code == 0) {
								s.find('img').attr('src',data.data.src);
								$('#uploadIcon').val('');
							}else{
								mui.toast(data.error);
							}
						}
					});
				} else{
					mui.toast("Please upload the picture");
				}
			});
			
			/*var r = null;
			var cmr = plus.camera.getCamera(0);
			var res = cmr.supportedImageResolutions[0];
			var fmt = cmr.supportedImageFormats[0];
			cmr.captureImage(function(path){
		
			},function(err){
		
			},{resolution:res,format:fmt});*/
		},
		renderData:function(){
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
					}else{
						mui.toast(data.error);
					}
				}
			});
		},
		renderPage:function(){
			var shoes = JSON.parse(window.sessionStorage.getItem('shoes'));
			$('#shoesImg').attr('src',shoes.image);
			$('#shoesName').text(shoes.name);
		},
		saveModel:function(){
			var content = $('#content').val();
			var name = $('#shoesName').text();
			var looks = $('#shoesBtn').find('img').attr('src');
			var marks = $('#brandBtn').find('img').attr('src');
			var insole_needle = $('#needleBtn').find('img').attr('src');
			var needle = $('#insolesBtn').find('img').attr('src');
			var box = $('#boxesBtn').find('img').attr('src');
			var stamps = $('#stampBtn').find('img').attr('src');
			var other = $('#otherBtn').find('img').attr('src');
			if (!content) {
				mui.toast('please add notes!');
			}else if (looks == '../../res/model/shoe-icon.png') {
				mui.toast('please upload looks of your sneakers');
			}else if(marks == '../../res/model/brand-icon.png'){
				mui.toast('piease upload Marks of your sneakers');
			}else if(insole_needle == '../../res/model/needle.png'){
				mui.toast('piease upload Insole Needle');
			}else if(needle == '../../res/model/insoles.png'){
				mui.toast('piease upload Needle');
			}else if(box == '../../res/model/boxes.png'){
				mui.toast('piease upload Make of your boxes');
			}else if(stamps == '../../res/model/stamp.png'){
				mui.toast('piease upload Stamps inside of your Box');
			}else if(other == '../../res/model/add.png'){
				mui.toast('piease upload Other supplements');
			}else{
				var parame ="?content="+content
						   +"&name="+name
						   +"&looks="+looks
						   +"&marks="+marks
						   +"&insole_needle="+insole_needle
						   +"&needle="+needle
						   +"&box="+box
						   +"&stamps="+stamps
						   +"&other="+other;
						   
				$.ajax({
					url: CONSTANT.baseUrl + "/identify/publish/" + TOKEN_REL.token + parame,
					type: "put",
					contentType: "application/json",
					data: {},
					dataType: 'json',
					success: function(data) {
						if(data.status == AJAX_SECCUSS) {
							mui.toast("success");
							window.location.href = "appraisal.html";
						}else{
							mui.toast(data.error);
						}
					}
				});
			}
			
		},
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		model.event();
		model.service.renderPage();
		model.service.renderData();
	},
}
model.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-model-title']").html($.i18n.prop('info-model-title'));
			$("[name='info-brand-nike']").html($.i18n.prop('info-brand-nike'));
			$("[name='info-model-addpic']").html($.i18n.prop('info-model-addpic'));
			$("[name='info-model-lookes']").html($.i18n.prop('info-model-lookes'));
			$("[name='info-model-markes']").html($.i18n.prop('info-model-markes'));
			$("[name='info-model-insole-deedle']").html($.i18n.prop('info-model-insole-deedle'));
			$("[name='info-model-insole']").html($.i18n.prop('info-model-insole'));
			$("[name='info-model-boxes']").html($.i18n.prop('info-model-boxes'));
			$("[name='info-model-stamp']").html($.i18n.prop('info-model-stamp'));
			$("[name='info-model-other']").html($.i18n.prop('info-model-other'));
			$("[name='info-model-add-note']").html($.i18n.prop('info-model-add-note'));
			$("[name='info-model-publish']").html($.i18n.prop('info-model-publish'));
		}
	});
}