let $ = require('jquery')

$('.girls__girl').lazyload({
  effect: 'fadeIn'
})

let $window = $(window)
let $document = $(document)
let $girls = $('.girls')

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