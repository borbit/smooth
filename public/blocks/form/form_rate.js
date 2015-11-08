let $ = require('jquery')

var rate = 0
var width = $('.form__rate-stars').width()
var starWidth = (width/100)*20

var $starsRate = $('.form__rate-stars')
var $starsRated = $('.form__rated-stars')

$starsRate.on('mousemove', onMouseMove)
$starsRate.on('mouseleave', onMouseLeave)
$starsRate.on('click', onClick)

function onMouseMove(e) {
  setRate(Math.ceil(e.offsetX/starWidth))
}
function onMouseLeave(e) {
  setRate(rate)
}
function onClick(e) {
  rate = Math.ceil(e.offsetX/starWidth)
  setRate(rate)
}

function setRate(rate) {
  $starsRated.css('width', `${rate * 20}%`)
}