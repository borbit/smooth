let $ = require('jquery')

let $window = $(window)
let $document = $(document)
let $mockup = $('.layout__mockup')
let $girls = $('.layout__girls')
let $arrow = $('.layout__arrow')

let windowWidth;
let heightMockup;
let heightGirls;

onResize()
onScroll()

$window.on('scroll', onScroll)
$window.on('resize', onResize)

$arrow.on('click', () => {
  $('html, body').animate({
    scrollTop: $mockup.height()
  }, 200)
})

function onScroll() {
  if (windowWidth < 800) {
    return
  }
  
  if ($window.scrollTop() >= heightMockup) {
    if ($girls.hasClass('layout__girls_fixed')) {
      $girls.removeClass('layout__girls_fixed')
      $mockup.css({'margin-bottom': 0})
      $document.trigger('girls:on')
    }
  } else {
    if (!$girls.hasClass('layout__girls_fixed')) {
      $mockup.css({'margin-bottom': heightGirls})
      $girls.addClass('layout__girls_fixed')
      $document.trigger('girls:off')
    }
  }
}

function onResize() {
  windowWidth = $window.width()
  heightMockup = $mockup.height()
  heightGirls = $girls.height()
}