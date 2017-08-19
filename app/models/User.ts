import * as mongoose from 'mongoose'

const baseSchema = {
  name: String,
  region: String,
  info: {}
}

const schema = new mongoose.Schema(baseSchema, {
  collection: 'User',
  strict: false
})

export {
  schema
}
