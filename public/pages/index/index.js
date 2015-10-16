require('../../blocks/girls/girls.js')
require('../../blocks/screens/screens.js')
require('../../blocks/screen/screen_plans.js')
require('../../blocks/form/form_plans.js')
require('../../blocks/form/form_payment.js')
require('../../blocks/layout/layout.js')
require('../../blocks/mockup/mockup.js')

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