"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const joi = require("joi");
const validator = require("./middlewares/ValidateMiddleware");
const router = express.Router();
exports.router = router;
const getBook = require("./routes/books/get");
const createBook = require("./routes/books/post");
const token = require("./routes/token/post");
router.post('/token', 
// should be fixed
validator.ValidateMiddleware({
    body: joi.object().keys({
        username: joi.string().required(),
        password: joi.string().required()
    })
}), token.post);
router.post('/books', validator.ValidateMiddleware({
    body: joi.object().keys({
        id: joi.number().required(),
        title: joi.string(),
        price: joi.number()
    })
}), createBook.post);
router.get('/books/:id', validator.ValidateMiddleware({
    params: joi.object().keys({
        id: joi.number().required()
    })
}), getBook.get);
