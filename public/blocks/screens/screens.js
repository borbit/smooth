let $ = require('jquery')
let $document = $(document)

$document.on('form:plans:submit', () => {
  $('.screens').removeClass('screens_plans')
  $('.screens').addClass('screens_payment')
  setTimeout(() => {
    $document.trigger('screen:payment')
  }, 200)
})

$document.on('form:payment:submit', () => {
  $('.screens').removeClass('screens_payment')
  $('.screens').addClass('screens_complete')
})

