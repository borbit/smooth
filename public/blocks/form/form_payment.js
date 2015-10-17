let $ = require('jquery')
let $document = $(document)

let $form = $('.form_payment')
let $inputPhone = $form.find('[name="customer[phone_number]"]')
let $inputName = $form.find('[name="customer[name]"]')
let $inputCard = $form.find('[name="card[number]"]')
let $inputExp = $form.find('[name="card[exp]"]')
let $inputCvc = $form.find('[name="card[cvc]"]')
let $spinner = $form.find('.form__spinner')
let $submit = $form.find('button')

let isPhoneValid = false
let isNameValid = false
let isCardValid = false
let isExpValid = false
let isCvcValid = false

$inputPhone.inputmask('+9 999 9999999')
$inputCard.payment('formatCardNumber')
$inputExp.payment('formatCardExpiry')
$inputCvc.payment('formatCardCVC')

$inputPhone.on('keyup', validate)
$inputName.on('keyup', validate)
$inputCard.on('keyup', validate)
$inputExp.on('keyup', validate)
$inputCvc.on('keyup', validate)

$inputPhone.on('blur', () => {$inputPhone.toggleInputError(isPhoneValid)})
$inputName.on('blur', () => {$inputName.toggleInputError(isNameValid)})
$inputCard.on('blur', () => {$inputCard.toggleInputError(isCardValid)})
$inputExp.on('blur', () => {$inputExp.toggleInputError(isExpValid)})
$inputCvc.on('blur', () => {$inputCvc.toggleInputError(isCvcValid)})

$document.on('screen:payment', () => {
  $form.find('.form__input')[0].focus()
})

$.fn.toggleInputError = function(valid) {
  return this.toggleClass('form__input_error', !valid)
}

function validate() {
  let cardType = $.payment.cardType($('.cc-number').val());

  isPhoneValid = !!$inputPhone.val().length
  isNameValid = !!$inputName.val().length
  isCardValid = $.payment.validateCardNumber($inputCard.val())
  isExpValid = $.payment.validateCardExpiry($inputExp.payment('cardExpiryVal'))
  isCvcValid = $.payment.validateCardCVC($inputCvc.val(), cardType)

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