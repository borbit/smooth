let $ = require('jquery')

let $play = $('.mockup__play')
let $msgs = $('.mockup__messages')
let $wrap = $('.mockup__messages-wrap')

let timing = [
  500,
  5000,
  12000,
  16000,
  20000,
  24000,
  26000,
  33000,
  36000,
  41000,
  45000,
  48000,
  50000,
  52000,
  55000,
  56000
]

$play.on('click', () => {
  $play.addClass('mockup__play_hide')
  $msgs.removeClass('mockup__messages_hide');

  timing.forEach((time, i) => {
    setTimeout(() => {
      revealMessage($(`.mockup__message_${i+1}`))
      setTimeout(() => {
        $msgs.animate({
          scrollTop: $wrap.height() - $msgs.height()
        }, 100)
      }, 110)
    }, time)
  })
})

function revealMessage($msg) {
  $msg.show().height()
  $msg.removeClass('mockup__message_hide')
}