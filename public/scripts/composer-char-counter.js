$(document).ready(function() {
  
  $('.new-tweet textarea').on('keyup', function() {
    const maxLength = 140;
    let length = $(this).val().length;
    let $counter = $(this).siblings('span');
    $counter.text(maxLength - length);   
    
    let characLeft = maxLength - length;
   
    if(characLeft < 0) {
      $counter.addClass("makeItRed");
    } else {
      $counter.removeClass("makeItRed");
    };
  });

});

