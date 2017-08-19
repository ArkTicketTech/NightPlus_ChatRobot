import * as mongoose from 'mongoose'

const baseSchema = {
  name: String,
  region: String,
  userIds: []
}

const schema = new mongoose.Schema(baseSchema, {
  collection: 'Room',
  strict: false
})

export {
  schema
}
