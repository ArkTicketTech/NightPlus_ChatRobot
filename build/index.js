"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const APIOutputMiddleware = require("./middlewares/APIOutputMiddleware");
const router = require("./router");
const config = require("config");
const app = express();
app.use(bodyParser.json());
app.use(expressJwt({ secret: config.get('jwt.secret') }).unless({ path: ["/token"] }));
// investigation: how to simplify export! :(
app.use(APIOutputMiddleware.APIOutputMiddleware);
app.use(router.router);
app.listen(config.get('app.port') || 3000);
