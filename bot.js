const {
	Wechaty
} = require('wechaty')

Wechaty.instance() // Singleton
	.on('scan', (url, code) => {
		if (!/201|200/.test(String(code))) {
			let loginUrl = url.replace(/\/qrcode\//, '/l/')
			require('qrcode-terminal').generate(loginUrl)
		}
		console.log(`${url}\n[${code}] Scan QR Code in above url to login: `)
	})
	.on('login', user => console.log(`User ${user} logined`))
	.on('message', message => console.log(`Message: ${message}`))
	.init()