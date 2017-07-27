const QrcodeTerminal = require('qrcode-terminal')
const config = require('wechaty').config
const Contact = require('wechaty').Contact
const log = require('wechaty').log
const Wechaty = require('wechaty').Wechaty
// const Room = require('wechaty').Room


const bot = Wechaty.instance({ profile: config.DEFAULT_PROFILE })
// const targetRoom = await Room.find({ topic: "微信测试机器人" })

function manageDingRoom() {
    if (!targetRoom) {
      log.warn('Bot', 'there is no room topic ding(yet)')
      return
    }
}

bot
.on('login'	  , user => function() {
      setTimeout(manageDingRoom.bind(this), 3000)
      log.info('Bot', `${user.name()} logined`)
    }
)
.on('logout'	, user => log.info('Bot', `${user.name()} logouted`))
.on('error'   , e => log.info('Bot', 'error: %s', e))
.on('scan', (url, code) => {
  if (!/201|200/.test(String(code))) {
    const loginUrl = url.replace(/\/qrcode\//, '/l/')
    QrcodeTerminal.generate(loginUrl)
  }
  console.log(`${url}\n[${code}] Scan QR Code in above url to login: `)
})
/**
 *
 * Wechaty Event: `friend`
 *
 */
.on('friend', async (contact, request) => {
  let logMsg
  const fileHelper = Contact.load('filehelper')

  try {
    logMsg = 'received `friend` event from ' + contact.get('name')
    fileHelper.say(logMsg)
    console.log(logMsg)

    if (request) {
      /**
       *
       * 1. New Friend Request
       *
       * when request is set, we can get verify message from `request.hello`,
       * and accept this request by `request.accept()`
       */
      if (request.hello === 'ding') {
        logMsg = 'accepted because verify messsage is "ding"'
        request.accept()

      } else {
        logMsg = 'not auto accepted, because verify message is: ' + request.hello
      }
    } else {
      /**
       *
       * 2. Friend Ship Confirmed
       *
       */
      logMsg = 'friend ship confirmed with ' + contact.get('name')
    }
  } catch (e) {
    logMsg = e.message
  }

  console.log(logMsg)
  fileHelper.say(logMsg)

})
.on('message', async (message) => {
  const room  = message.room()
  const sender  = message.from()
  const content = message.content()
  room.say(sender.name() + "念了两句诗")
})
.on('room-join', (room, inviteeList, inviter) => {
  const nameList = inviteeList.map(c => c.name()).join(',')
  console.log(`Room ${room.topic()} got new member ${nameList}, invited by ${inviter}`)
})

bot.init()
.catch(e => {
  log.error('Bot', 'init() fail: %s', e)
  bot.quit()
  process.exit(-1)
})

