import * as mongoose from 'mongoose'

const baseSchema = {
  id: Number,
  title: String,
  price: Number
}

const schema = new mongoose.Schema(baseSchema, {
  collection: 'Book',
  strict: false
})

export {
  schema
}
