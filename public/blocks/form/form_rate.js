let $ = require('jquery')

$('.form__rate-star').on('mousemove', setRate)

function setRate(e) {
  var offset = e.offsetX;
  var width = $('.form__rate-star').width();
  var star_width = (width/100)*20;
  var rate = Math.round(offset/star_width);
  $('.form__rated-star').css('width', rate * 20 + "%");
}
