var $ = require('jquery')

$('[name="card[number]"]').payment('formatCardNumber')
$('[name="card[exp]"]').payment('formatCardExpiry')
$('[name="card[cvc]"]').payment('formatCardCVC')