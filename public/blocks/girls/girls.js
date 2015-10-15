let $ = require('jquery')

$('.girls__girl').lazyload({
  effect: 'fadeIn'
})

let $window = $(window)
let $document = $(document)
let $girls = $('.girls')
let $girl = $('.girls__girl');

$document.on('girls:on', () => {
  $girls.removeClass('girls_off')
  $girls.addClass('girls_on')
})
$document.on('girls:off', () => {
  $girls.removeClass('girls_on')
  $girls.addClass('girls_off')
})

$girls.on('scroll', () => {
  $window.trigger('scroll')
})

$girl.on('tap', () => {
  var hoverClass = 'girls__girl_hover';
  girl.removeClass(hoverClass)
  $(this).addClass(hoverClass)
})
