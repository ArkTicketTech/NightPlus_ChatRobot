import * as express from 'express'
import * as joi from 'joi'
import * as jwt from 'express-jwt'
import * as validator from './middlewares/ValidateMiddleware'
const router = express.Router()

import * as getBook from './routes/books/get'
import * as createBook from './routes/books/post'
import * as token from './routes/token/post'

router.post('/token',
// should be fixed
validator.ValidateMiddleware({
	body: joi.object().keys({
		username: joi.string().required(),
		password: joi.string().required()
	})
}), token.post)

router.post('/books',
validator.ValidateMiddleware({
	body: joi.object().keys({
		id: joi.number().required(),
		title: joi.string(),
		price: joi.number()
	})
}), createBook.post)

router.get('/books/:id',
validator.ValidateMiddleware({
	params: joi.object().keys({
		id: joi.number().required()
	})
}), getBook.get)

export {
	router
}