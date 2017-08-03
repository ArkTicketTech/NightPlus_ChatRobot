"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../../runtime/db");
const Book = db.db.Book;
function get(req, res, next) {
    const id = req.params.id;
    Book.find({ id })
        .then((result) => {
        res.apiSuccess(result);
    })
        .catch((error) => {
        res.apiError(error);
    });
}
exports.get = get;
