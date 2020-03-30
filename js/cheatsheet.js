$(document).ready(function(){
/*$('h1').hide();
$('h1#heading1').hide();
$('.heading2').hide(); 
$('h1.heading2').hide();
$('.heading2').hide(); 
$('*').hide(); 
$('a[hrf="yahoo.com"]').css('color','blue');




$('p span').css('color','red');
$('ul#list li:first').css('color','red');
$('ul#list li:nth-child(3n)').css('list-style','none');
$('ul#list li:even').css('background-color','green');
$('ul#list li:odd').css('background-color','yellow');

$('ul#list li:last').css('color','blue');
$(':text').hide();
$('[hrf]').css('color','blue');
fron travis media selecror
$('.para1').hide();


$('#btn1').click(function(){
$('.para1').toggle();
	 
});

$('#btn2').on('click',function(){

	 $('.para1').show();
});


$('#btn1').hover(function(){
$('.para1').toggle();
console.log(e.currentTarget.innerHTML);
console.log(e.currentTarget.outerHTML);
console.log(e.currentTarget.className);
	 
}); 
$('#btn2').on('mousemove',function(){

	 $('.para1').show();
});


$('#btn1').click(function(e){


	 
});

$(document).on('mousemove',function(e){

	 $('#xis').html('X='+e.clientX+'Y='+e.clientY);
})



$('input').focus(function(){
  
  $('input#name').css('background','pink'); 
  $(this).css('background','pink');

});
$('input').blur(function(){
  
 $('input#name').css('background','pink'); 
  $(this).css('background','white');

});

$('input').keyup(function(e){
// console.log(e.target.value) ;
 

});

//$('select#gender').change(function(e){
 
 //alert('hi' +e.target.value);

//});

$('#btn1').submit(function(e){
 e.preventDefault();
 
 var name=$('input#name').val();
  console.log('submit ='+name) ;
$('#myd').text ('well come to ');

})

$('p.para1').css({color:'red',background:'#ccc'});
$('p.para2').addClass('myclass');
$('p.para2').removeClass('myclass');

$('#btn1').click(function(){
  $('p.para2').toggleClass('myclass');
});

$('#myd').html ('<h3>well come to </h3>');
$('ul').append('<li>L4</li>');
$('ul').prepend('<li>L0</li>');
$('.para1').prependTo('.para2');

;

$('ul').before('<h3>well come to </h3>');
$('ul').after('<h3>well come to </h3>');

$('ul').empty();
$('ul').detach();
$('a').attr('target','_blank');
$('a').removeAttr('target');
$('p').wrapAll('<h1>');

$('#newItem').keyup(function(e){

var code=e.which;

if(code==13){

	e.preventDefault();
$('ul').append('<li><h3>'+e.target.value+'</h3><li>')

}
})
var arr=['one','two','the','fo'];
$.each(arr,function(i,val){

	$('ul').append('<li>'+val+'</li>');
});
*/
var iarr =$('ul#list li').toArray();
$.each(iarr,function(i,val){

	console.log(val.innerHTML);
});

});