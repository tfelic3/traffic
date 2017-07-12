
$('#begin').on('click', function(){
	$("#car, #car2,#car3").animate({left: '1%'});});


$('#january').on('click', function(){
$('.counter').html(greenvilleFatals.january);
$('.counter2').html(spartanburgFatals.january);
$('.counter3').html(andersonFatals.january);
$("#car2").animate({left: '5%'});
$("#car").animate({left: '7%'})
$("#car3").animate({left: '7%'});});



$('#february').on('click', function(){
$('.counter').html(greenvilleFatals.february);
$('.counter2').html(spartanburgFatals.february);
$('.counter3').html(andersonFatals.february);
$('#car2').animate({left: '13%'});
$("#car").animate({left: '12.5%'});
$("#car3").animate({left: '11.5%'});});


$('#march').on('click', function(){
$('.counter').html(greenvilleFatals.march);
$('.counter2').html(spartanburgFatals.march);
$('.counter3').html(andersonFatals.march);
$('#car2').animate({left: '18.5%'});
$("#car").animate({left: '19%'});
$("#car3").animate({left: '19%'});});

$('#april').on('click', function(){
	$('.counter2').html(spartanburgFatals.april);
	$('.counter3').html(andersonFatals.april);
	$('.counter').html(greenvilleFatals.april);
	$('#car2').animate({left: '24%'});
	$("#car").animate({left: '26%'})
	$("#car3").animate({left: '26%'});});

$('#may').on('click', function(){
	$('.counter2').html(spartanburgFatals.may);
	$('.counter3').html(spartanburgFatals.may);
	$('#car2').animate({left: '31.5%'});
	$('.counter').html(greenvilleFatals.may);
	$("#car").animate({left: '32.5%'});
$("#car3").animate({left: '31.5%'});});

$('#june').on('click', function(){
	$('.counter2').html(spartanburgFatals.june);
	$('.counter3').html(andersonFatals.june);
	$('#car2').animate({left: '36%'});
	$('.counter').html(greenvilleFatals.june);
	$("#car").animate({left: '38%'})
	$("#car3").animate({left: '37%'});});

$('#july').on('click', function(){
	$('.counter2').html(spartanburgFatals.july);
	$('.counter3').html(andersonFatals.july);
	$('#car2').animate({left: '42%'});
	$('.counter').html(greenvilleFatals.july);
	$("#car").animate({left: '45%'});
    $("#car3").animate({left: '42.5%'});});

$('#august').on('click', function(){
	$('.counter2').html(spartanburgFatals.august);
	$('.counter3').html(andersonFatals.august);
	$('#car2').animate({left: '51%'});
	$('.counter').html(greenvilleFatals.august);
	$("#car").animate({left: '49%'});
$("#car3").animate({left: '52%'});});

$('#september').on('click', function(){
	$('.counter2').html(spartanburgFatals.september);
	$('.counter3').html(andersonFatals.september);
	$('#car2').animate({left: '55%'});
	$('.counter').html(greenvilleFatals.september);
	$("#car").animate({left: '56%'})
	$("#car3").animate({left: '57%'});});

$('#october').on('click', function(){
	$('.counter2').html(spartanburgFatals.october);
	$('.counter3').html(andersonFatals.october);
	$('#car2').animate({left: '63%'});
	$('.counter').html(greenvilleFatals.october);
	$("#car").animate({left: '64%'});
    $("#car3").animate({left: '62.5%'});});


$('#november').on('click', function(){
	$('.counter2').html(spartanburgFatals.november);
	$('.counter3').html(andersonFatals.november);
	$('#car2').animate({left: '67%'});
	$('.counter').html(greenvilleFatals.november);
	$("#car").animate({left: '70%'});
    $("#car3").animate({left: '67.5%'});});


$('#december').on('click', function(){
	$('.counter2').html(spartanburgFatals.december);
	$('.counter3').html(andersonFatals.december);
	$('#car2').animate({left: '72%'});
	$('.counter').html(greenvilleFatals.december);
	$("#car").animate({left: '76%'});
    $("#car3").animate({left: '70%'});});



var greenvilleFatals ={
january:5,
february:6,
march:8,
april:9,
may:5,
june:6,
july:11,
august:4,
september:7,
october:8,
november:10,
december:8,
total:87,
};

var spartanburgFatals ={
january:3,
february:7,
march:6,
april:5,
may:4,
june:2,
july:5,
august:6,
september:2,
october:6,
november:4,
december:4,
total:54,
};

var abbevilleFatals ={
january:0,
february:3,
march:0,
april:0,
may:0,
june:0,
july:0,
august:0,
september:0,
october:0,
november:1,
december:0,
total:4,
};

var andersonFatals ={
january:5,
february:3,
march:6,
april:3,
may:4,
june:4,
july:6,
august:8,
september:8,
october:5,
november:5,
december:0,
total:57,
};

var pickensFatals={
january:0,
february:2,
march:1,
april:1,
may:4,
june:2,
july:2,
august:2,
september:1,
october:2,
november:1,
december:1,
total:19,
};

var oconeeFatals={
january:3,
february:1,
march:1,
april:1,
may:1,
june:0,
july:0,
august:1,
september:1,
october:1,
november:0,
december:1,
total:11,
};


 var cherokeeFatals ={
january:0,
february:1,
march:0,
april:0,
may:2,
june:0,
july:0,
august:1,
september:0,
october:0,
november:1,
december:0,
total:5,
};


var unionFatals={
january:3,
february:0,
march:0,
april:1,
may:0,
june:0,
july:2,
august:0,
september:0,
october:0,
november:1,
december:0,
total:7,
};

var laurensFatals={
january:0,
february:0,
march:3,
april:2,
may:0,
june:2,
july:3,
august:1,
september:2,
october:1,
november:2,
december:6,
total:22,
};


var greenwoodFatals={
january:0,
february:0,
march:1,
april:2,
may:2,
june:1,
july:0,
august:1,
september:1,
october:1,
november:2,
december:0,
total:11,
};






