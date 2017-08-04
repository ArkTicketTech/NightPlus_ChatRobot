interface Schema {
	query?: object,
	body?: object,
	params?: object,
	header?: object
}

import * as joi from 'joi'
import Exception from '../libs/exception'

export function ValidateMiddleware (schema: Schema) {
  return (req: any, res: any, next: any) => {
    if (schema.body) {
      const result = joi.validate(req.body, schema.body)
      if (result.error) {
				const msg = new Exception(2001, result.error.message)
        return res.apiError()
      }
    }
    if (schema.params) {
      const result = joi.validate(req.params, schema.params)
      if (result.error) {
        return res.apiError(new Exception(2001, result.error.message))
      }
    }
    if (schema.query) {
      const result = joi.validate(req.query, schema.query)
      if (result.error) {
        return res.apiError(new Exception(2001, result.error.message))
      }
    }
    if (schema.header) {
      const result = joi.validate(req.headers, schema.header, {allowUnknown: true})
      if (result.error) {
        return res.apiError(new Exception(2001, result.error.message))
      }
    }
    next()
  }
}
