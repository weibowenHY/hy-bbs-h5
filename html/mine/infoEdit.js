mui.init({

});

document.addEventListener('plusready',function(){
        



            //调用系统摄像头进行拍照

//             var r = null;
//             var cmr = plus.camera.getCamera(0);
//             var res = cmr.supportedImageResolutions[0];
//             var fmt = cmr.supportedImageFormats[0];
//             cmr.captureImage(function(path){
// 
//             },function(err){
// 
//             },{resolution:res,format:fmt});
// 


        },false)

infoEdit = {

	// 事件注册
	event: function() {
		$("#edit-profile").on("click", infoEdit.service.showProfile);
		$("#edit-name").on("click", infoEdit.service.showName);
		$("#edit-gender").on("click", infoEdit.service.showGender);
		$("#edit-area").on("click", infoEdit.service.showArea);
		$("#cancleBtn").on("click", infoEdit.service.doCancle);
		$("#albumBtn").on("click", infoEdit.service.doAlbum);
		$("#cameraBtn").on("click", infoEdit.service.doCamera);
		
	},
	
	service: {
		showProfile:function(){
			$(".bottom-info").show();
		},
		doCancle:function(){
			$(".bottom-info").hide();
		},
		
		showName:function (){
			window.location.href = "changeNickName.html";
		},
		
		showGender:function(){
			window.location.href = "gender.html";
		},
		
		showArea:function (){
			window.location.href = "countryChoose.html";
		},
		
		doAlbum:function(){
			var lfs = null;//
			plus.gallery.pick(function(path){
			    console.log(path);
			    lfs = path.files;
			    //savePicture(path);
				infoEdit.service.savePicture(path);
			},function(e){
			   
			},{filter:"none",multiple:true,maximum:1,system:false,onmaxed:function(){
			},popover:true,selected:lfs});
		},
		doCamera:function(){
			var r = null;
			var cmr = plus.camera.getCamera(0);
			var res = cmr.supportedImageResolutions[0];
			var fmt = cmr.supportedImageFormats[0];
			cmr.captureImage(function(path){

			},function(err){

			},{resolution:res,format:fmt});
		},
		
		savePicture:function(path){
		    plus.gallery.save(path,function(){
		        plus.nativeUI.alert('保存图片成功！目录地址是：'+path);
		    })
		
		}
		
	},
	dao: {},
	init: function() {
		//LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
		var LANGUAGE_CODE = "en";
		loadProperties(LANGUAGE_CODE);
		infoEdit.event();
		
	},
}
infoEdit.init();

function loadProperties(type) {
	jQuery.i18n.properties({
		name: 'bbs', // 资源文件名称
		path: '../../static/', // 资源文件所在目录路径
		mode: 'map', // 模式：变量或 Map 
		language: type, // 对应的语言
		cache: false,
		encoding: 'UTF-8',
		callback: function() { // 回调方法    
			$("[name='info-edit-title']").html($.i18n.prop('info-edit-title'));
			$("[name='info-edit-photo']").html($.i18n.prop('info-edit-photo'));
			$("[name='info-edit-name']").html($.i18n.prop('info-edit-name'));
			$("[name='info-edit-gender']").html($.i18n.prop('info-edit-gender'));
			$("[name='info-edit-area']").html($.i18n.prop('info-edit-area'));
			
			$("[name='info-edit-album']").html($.i18n.prop('info-edit-album'));
			$("[name='info-edit-photoG']").html($.i18n.prop('info-edit-photoG'));
			$("[name='info-edit-cancle']").html($.i18n.prop('info-edit-cancle'));
			
			
			
		}
	});
}