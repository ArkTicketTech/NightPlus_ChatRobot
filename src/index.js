const QrcodeTerminal = require('qrcode-terminal')
const config = require('wechaty').config
const Contact = require('wechaty').Contact
const log = require('wechaty').log
const Wechaty = require('wechaty').Wechaty


const bot = Wechaty.instance({ profile: config.DEFAULT_PROFILE })

bot
.on('login'	  , user => log.info('Bot', `${user.name()} logined`))
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

bot.init()
.catch(e => {
  log.error('Bot', 'init() fail: %s', e)
  bot.quit()
  process.exit(-1)
})

