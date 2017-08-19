import * as mongoose from 'mongoose'

const baseSchema = {
  response: []
}

const schema = new mongoose.Schema(baseSchema, {
  collection: 'ResponseResource',
  strict: false
})

export {
  schema
}
