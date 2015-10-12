let $ = require('jquery')

let $window = $(window)
let $document = $(document)
let $mockup = $('.layout__mockup')
let $girls = $('.layout__girls')

let heightMockup;
let heightGirls;

onResize()
onScroll()

$window.on('scroll', onScroll)
$window.on('resize', onResize)

function onScroll() {
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
  heightMockup = $mockup.height()
  heightGirls = $girls.height()
  console.log(heightMockup, heightGirls)
}