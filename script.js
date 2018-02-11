$(document).ready(function(){

$('#usr1').click(function(){
	$(this).css('background-color','orange');
	$('.companyPosition').html("John Doe / CEO of LoremIpsum");
	$('#usr2').css('background-color','white');
	$('#usr3').css('background-color','white');

});

$('#usr2').click(function(){
	$(this).css('background-color','orange');
	$('.companyPosition').html("Vito Corleone / CTO of LoremIpsum");
	$('#usr1').css('background-color','white');
	$('#usr3').css('background-color','white');

});

$('#usr3').click(function(){
	$(this).css('background-color','orange');
	$('.companyPosition').html("Michael Corleone / CFO of LoremIpsum");
	$('#usr1').css('background-color','white');
	$('#usr2').css('background-color','white');

});
});