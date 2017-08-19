import * as mongoose from 'mongoose'

const baseSchema = {
  keyword: String,
  responseId: Number
}

const schema = new mongoose.Schema(baseSchema, {
  collection: 'Keyword',
  strict: false
})

export {
  schema
}
