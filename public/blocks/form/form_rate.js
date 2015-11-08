let $ = require('jquery')

$('.form__rate-stars').on('mousemove', setRate)

function setRate(e) {
  var offset = e.offsetX;
  var width = $('.form__rate-stars').width();
  var star_width = (width/100)*20;
  var rate = Math.round(offset/star_width);
  $('.form__rated-stars').css('width', rate * 20 + "%");
}
