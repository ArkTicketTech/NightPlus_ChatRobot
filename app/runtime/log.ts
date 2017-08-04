import * as fs from 'fs'
import * as path from 'path'
import * as log4js from 'log4js'

const config = require('config')
let logPath = path.join(__dirname, '/../logs')
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath)
}

log4js.configure(config.get('log'))

export function get(name: string) {
	let logger = log4js.getLogger(name)
	if (process.env.NODE_ENV === 'development') logger.setLevel('TRACE')
	return logger
}
