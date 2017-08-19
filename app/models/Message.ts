import * as mongoose from 'mongoose'

const baseSchema = {
  from: {
    userId: String
  },
  room: String,
  content: String
}

const schema = new mongoose.Schema(baseSchema, {
  collection: 'Message',
  strict: false
})

export {
  schema
}
