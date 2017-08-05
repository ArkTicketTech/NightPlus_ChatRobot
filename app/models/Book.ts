import * as mongoose from 'mongoose'

const baseSchema = {
  title: String,
  price: Number,
  isDeleted: { type: Boolean, default: false }
}

const schema = new mongoose.Schema(baseSchema, {
  collection: 'Book',
  strict: false
})

export {
  schema
}
