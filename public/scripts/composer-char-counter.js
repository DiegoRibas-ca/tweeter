$(document).ready(function() {
  const maxLength = 140;
  $('.new-tweet textarea').on('keyup', function() {
    
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

  $('.new-tweet input').on('click', function() {
    let $counter = $('.new-tweet textarea').siblings('span');
    $counter.text(maxLength); 
  });
});

