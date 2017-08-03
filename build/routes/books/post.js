"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../../runtime/db");
const Book = db.db.Book;
function post(req, res, next) {
    const id = req.body.id;
    const title = req.body.title;
    const price = req.body.price;
    const data = {
        id,
        title,
        price
    };
    Book.create(data)
        .then((result) => {
        res.apiSuccess(result);
    })
        .catch((error) => {
        res.apiError(error);
    });
}
exports.post = post;
