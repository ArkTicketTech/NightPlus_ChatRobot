import * as express from 'express'
import * as joi from 'joi'
import * as jwt from 'express-jwt'
import { validator } from './middlewares/ValidateMiddleware'
const router: express.Router = express.Router();

import { books } from './routes/books'
import { token } from './routes/token'

router.post('/token',
// should be fixed
validator({
	body: joi.object().keys({
		username: joi.string().required(),
		password: joi.string().required()
	})
}), token.post)

router.get('/books',
validator({
	query: joi.object().keys({
		limit: joi.number(),
		skip: joi.number()
	})
}), books.list)

router.post('/books',
validator({
	body: joi.object().keys({
		title: joi.string().required(),
		price: joi.number().required()
	})
}), books.post)

router.get('/books/:id',
validator({
	params: joi.object().keys({
		id: joi.string().hex().length(24).required()
	})
}), books.get)

router.put('/books/:id',
validator({
	params: joi.object().keys({
		id: joi.string().hex().length(24).required()
	}),
	body: joi.object().keys({
		title: joi.string().required(),
		price: joi.number().required()
	})
}), books.put)

router.delete('/books/:id',
validator({
	params: joi.object().keys({
		id: joi.string().hex().length(24).required()
	})
}), books.destroy)

export {
	router
}