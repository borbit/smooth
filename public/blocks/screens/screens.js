let $ = require('jquery')

$('.form_plans .btn').click(() => {
  $('.screens').removeClass('screens_plans')
  $('.screens').addClass('screens_payment')
})