$(document).ready(function() {
  $('.new-tweet textarea').on('keyup', function() {
    let length = $(this).val().length;
    const $counter = $(this).siblings('span');
    let lengthLeft = $counter.text(140 - length);
    let characLeft = 140 - length;


    if(characLeft < 0) {
      $counter.addClass("makeItRed");
    } else if (characLeft >= 0) {
      $counter.removeClass("makeItRed");
    };
  });
});

