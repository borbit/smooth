let $ = require('jquery')
let $document = $(document)

$('.form_plans .btn').on('click', () => {
  $document.trigger('form:plans:submit')
})