"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const log4js = require("log4js");
const config = require('config');
let logPath = path.join(__dirname, '/../logs');
if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath);
}
log4js.configure(config.get('log'));
function get(name) {
    let logger = log4js.getLogger(name);
    if (process.env.NODE_ENV === 'development')
        logger.setLevel('TRACE');
    return logger;
}
exports.get = get;
