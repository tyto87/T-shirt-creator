// defaults
var $type="tee",
	$color="black",
	$y_pos="front",
	$custom_img=0,
	$iftext = 0,
	$ificon = 0;

$(document).ready(function(){
	
	//ONLOAD
	$("#preview_front").css('background-image', 'url(images/product/'+$type+'/'+$color+'/'+$color+'_front.png) ') ;
	$("#preview_back").css('background-image', 'url(images/product/'+$type+'/'+$color+'/'+$color+'_back.png) ') ;

	$("#preview_front,.T_type").removeClass('dis_none');
	$("#preview_back,.color_pick,.default_samples,.custom_icon,.custom_font").addClass('dis_none') ;

	//ONLOAD OVER
	
	/*==========================SWITCH LEFT MENU===========================*/
	$(".sel_type").click(function(){
		$(".T_type").removeClass('dis_none');
		$(".color_pick,.default_samples,.custom_icon,.custom_font").addClass('dis_none') ;
	});
	$(".sel_color").click(function(){
		$(".color_pick").removeClass('dis_none');
		$(".T_type,.default_samples,.custom_icon,.custom_font").addClass('dis_none') ;
	});
	$(".sel_art").click(function(){
		$(".default_samples").removeClass('dis_none');
		$(".T_type,.color_pick,.custom_icon,.custom_font").addClass('dis_none') ;
	});
	$(".sel_custom_icon").click(function(){
		$(".custom_icon").removeClass('dis_none');
		$(".T_type,.color_pick,.default_samples,.custom_font").addClass('dis_none') ;
	});
	$(".sel_text").click(function(){
		$(".custom_font").removeClass('dis_none');
		$(".T_type,.color_pick,.default_samples,.custom_icon").addClass('dis_none') ;
	});
	
	
	/*=========================SWITCH MENU OVER=====================*/
	/*==========================select type=====================*/
	$("#radio1").click(function(){	//tee
		$type="tee";
		change_it();
		
	});
	$("#radio2").click(function(){	//polo
		$type="polo";
		change_it();
		
	});
	$("#radio3").click(function(){	//hoodie
		$type="hoodie";
		change_it();
	});
	/*==========================select type over=====================*/
	/*==========================select back or front=====================*/
	$("#o_front").click(function(){
		$y_pos="front";
				$("#preview_front").css('background-image', 'url(images/product/'+$type+'/'+$color+'/'+$color+'_'+$y_pos+'.png) ') ;
				$("#o_front").attr('src','images/product/'+$type+'/'+$color+'/'+$color+'_front.png');
				$("#o_back").attr('src','images/product/'+$type+'/'+$color+'/'+$color+'_back.png');
				$("#preview_front").removeClass('dis_none') ;
				$("#preview_back").addClass('dis_none') ;
		
	});
	$("#o_back").click(function(){
		$y_pos="back";
				$("#preview_back").css('background-image', 'url(images/product/'+$type+'/'+$color+'/'+$color+'_'+$y_pos+'.png) ') ;
				$("#o_front").attr('src','images/product/'+$type+'/'+$color+'/'+$color+'_front.png');
				$("#o_back").attr('src','images/product/'+$type+'/'+$color+'/'+$color+'_back.png');
				$("#preview_back").removeClass('dis_none') ;
				$("#preview_front").addClass('dis_none') ;
		
	});
/*==========================select back or front OVER=====================*/
/*==========================select COLOR=====================*/
	$('#red').click(function(){
				$color="red";
				change_it();
	});
	$('#black').click(function(){
				$color="black";
				change_it();
	});
	$('#white').click(function(){
				$color="white";
				change_it();
	});
	$('#green').click(function(){
				$color="green";
				change_it();
	});
	$('#navy').click(function(){
				$color="navy";
				change_it();
	});
	function change_it(){
				$("#preview_back").css('background-image', 'url(images/product/'+$type+'/'+$color+'/'+$color+'_back.png) ') ;
				$("#preview_front").css('background-image', 'url(images/product/'+$type+'/'+$color+'/'+$color+'_front.png) ') ;
				$("#o_front").attr('src','images/product/'+$type+'/'+$color+'/'+$color+'_front.png');
				$("#o_back").attr('src','images/product/'+$type+'/'+$color+'/'+$color+'_back.png');
		
	}
	/*==========================select COLOR OVER=====================*/
/*=====================SAMPLE ICONS========================*/
	$(".sample_icons").click(function(){
		var $srcimg=$(this).children("img").attr('src');
		image_icon($srcimg);
		
	});

/*=====================APPLY TEXT BUTTON CLICKED JQUERY UI========================*/
	$('#apply_text').click(function(){
		
		var text_val = jQuery("textarea#custom_text").val();
		if(!text_val)
			return false;
		
			$("."+$y_pos+"_print #mytext-" + $y_pos).html("<div id='text1' class='new_text'  onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);'><textarea id='text_style' >"+text_val+"</textarea><span class='delete_text property_icon' onClick='delete_text(this);' ></span></div>");
			$iftext = 1;
			updatePrice();

		var $font_color		=$('#custom_text').css("color");
		
		
		$("#text1 textarea" ).css("color", $font_color);

	});
$('.preview_images').click(function(){
	capture();

	$('.layer').css('visibility','visible');
});


$('.close_img').click(function(){

	
	$('.layer').css('visibility','hidden');
	
});

function capture() {
	
	$("#preview_back").removeClass('dis_none') ;
	$("#preview_front").removeClass('dis_none') ;
	$("#image_reply").empty();
	$("#image_reply").html($('#preview_t').html());
	$y_pos="front";
	//$('#preview_front').hide();
	//$('#preview_back').show();
}


});

function image_icon($srcimg){
		$("."+$y_pos+"_print #myicon-" + $y_pos).html("<div id='icon1' class='new_icon' onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);'><span class='delete_icon property_icon' onClick='delete_icons(this);'></span><img src='"+$srcimg+"' width='100%' height='100%' /></div>");
		$ificon = 1;
		updatePrice();
}

function delete_icons(e){
	
	$(e).parent('.new_icon').remove();
	if($('.new_icon').length == 0) {
		$ificon = 0;
	}
	updatePrice();
}
function show_delete_btn(e){

	$(e).children('.property_icon').show();
}
function hide_delete_btn(e){

	$(e).children('.property_icon').hide();
}
	
/*=============================================*/
function delete_text(f){
	$(f).parent('.new_text').remove();
	if($(".new_text").length == 0) {
		$iftext = 0;
	}
	
	updatePrice();
}


/* Text color update */
function changeColor(_color) {
	$('#custom_text').css("color", _color);
}

/* Price Update */
function changeval() {
	$total = parseInt($("#small").val()) + parseInt($("#medium").val()) + parseInt($("#large").val()) + parseInt($("#xlarge").val()) + parseInt($("#xxlarge").val());
	//alert($total);
	$('.small').val($("#small").val());
	$('.medium').val($("#medium").val());
	$('.large').val($("#large").val());
	$('.xlarge').val($("#xlarge").val());
	$('.xxlarge').val($("#xxlarge").val());
	$('.total').val($total);

	updatePrice();
}

function changeval2() {
	$total = parseInt($("#small2").val()) + parseInt($("#medium2").val()) + parseInt($("#large2").val()) + parseInt($("#xlarge2").val()) + parseInt($("#xxlarge2").val());
	//alert($total);
	$('.small').val($("#small2").val());
	$('.medium').val($("#medium2").val());
	$('.large').val($("#large2").val());
	$('.xlarge').val($("#xlarge2").val());
	$('.xxlarge').val($("#xxlarge2").val());
	$('.total').val($total);

	updatePrice();
}




function updatePrice() {

	var totalPrice = 0,
		textPrice = 0,
		iconPrice = 0;
	
	if($iftext == 1) {
		textPrice = 4;
	}
	else {
		textPrice = 0;
	}

	if($ificon == 1) {
		iconPrice = 7;
	}
	else {
		iconPrice = 0;
	}
	totalPrice += textPrice + iconPrice;
	totalPrice += parseInt($("#total2").val()) * 15;
	$('.price_here').text(totalPrice);
	$('#price').val(totalPrice);
}
