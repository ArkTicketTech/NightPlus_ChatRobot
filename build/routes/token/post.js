"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config = require("config");
function post(req, res, next) {
    const secret = config.get('jwt.secret');
    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign({ username, password }, secret, { algorithm: 'HS256', expiresIn: '1h' });
    res.apiSuccess(token);
}
exports.post = post;
