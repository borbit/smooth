let $ = require('jquery')
let $document = $(document)

let $form = $('.form_payment')
let $inputCard = $form.find('[name="card[number]"]')
let $inputExp = $form.find('[name="card[exp]"]')
let $inputCvc = $form.find('[name="card[cvc]"]')
let $spinner = $form.find('.form__spinner')
let $submit = $form.find('button')

$inputCard.payment('formatCardNumber')
$inputExp.payment('formatCardExpiry')
$inputCvc.payment('formatCardCVC')

$inputCard.on('keyup', validate)
$inputExp.on('keyup', validate)
$inputCvc.on('keyup', validate)

$document.on('screen:payment', () => {
  $form.find('.form__input')[0].focus()
})

function validate() {
  let cardType = $.payment.cardType($('.cc-number').val());
  let isCardValid = $.payment.validateCardNumber($inputCard.val())
  let isExpValid = $.payment.validateCardExpiry($inputExp.payment('cardExpiryVal'))
  let isCvcValid = $.payment.validateCardCVC($inputCvc.val(), cardType)

  if (isCardValid && isExpValid && isCvcValid) {
    $submit.attr('disabled', false)
  } else {
    $submit.attr('disabled', true)
  }
}

$submit.on('click', () => {
  $spinner.show()
  $submit.hide()

  setTimeout(() => {
    $document.trigger('form:payment:submit')
  }, 2000)
})