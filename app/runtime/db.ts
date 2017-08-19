export interface DB {
	[key: string]: any
}

import * as mongoose from 'mongoose'
import * as fs from 'fs'
import * as path from 'path'
import * as log from './log'
import * as config from 'config'
import * as bluebird from 'bluebird'

require('mongoose').Promise = bluebird

const logger = log.get('app')

const connectionStr = `mongodb://${config.get('db.options.host')}/${config.get('db.database')}`
mongoose.connect(connectionStr,
  {
    user: config.get('db.options.user'),
    pass: config.get('db.options.pass')
  })
mongoose.connection.on('error', (err) => {
  logger.error('mongodb connect error:' + err)
})

console.log(`数据库连接：${connectionStr}`)

const modelsPath = path.join(process.cwd(), '/build/app/models')

const models: string[] = fs.readdirSync(modelsPath)

const db: DB = {}

for (let model of models) {
  if (model.startsWith('.') || model.endsWith('.ts')) {
    continue
  }
  const modelName = path.basename(model).split('.')[0]
  const modelSchema = require(path.join(modelsPath, model))
  db[modelName] = mongoose.model(modelName, modelSchema.schema)
}

export {
	db
}
