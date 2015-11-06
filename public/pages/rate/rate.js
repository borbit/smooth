require('../../blocks/form/form_rate.js')

let $ = require('jquery')
let $window = $(window)
let $body = $(document.body)

$window.on('resize', onResize)
onResize()

function onResize() {
  if ($window.height() < 800) {
    $body.addClass('lowres')
  } else {
    $body.removeClass('lowres')
  }
}