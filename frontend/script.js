$(document).ready(function(){

  $('.note').focusin(function(){
//disable the top form before the user signs in !????
    $('.init').css({
    'height':'+=3em',
  });
  });

$('.note').focusout(function(){
  $('.init').css({ // shrink the top form
  'height':'-=3em'
});
//How to keep the form after submitting???????????

  });


$('.signin').click(function(e){
  $('.user').toggle();
  e.preventDefault();
});

$('.signup').click(function(e){
  $('.register').toggle();
  e.preventDefault();
});

$('.formCollection').focusin(function(){
  $('.txtareaCollection').css({
    'position':'fixed',
    'top':'20%',
    'left':'40%',
    'width':'20em',
    'height':'15em',
    'z-index':'3'
  });

  // $('.buttonCollection').css({
  //   'position':'fixed',
  //   'bottom':'22em',
  //   'right':'39em',
  //   'z-index':'101'
  // });

});
});
