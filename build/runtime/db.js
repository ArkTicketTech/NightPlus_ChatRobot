"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const log = require("./log");
const config = require("config");
const bluebird = require("bluebird");
require('mongoose').Promise = bluebird;
const logger = log.get('app');
const connectionStr = `mongodb://${config.get('db.options.host')}/${config.get('db.database')}`;
mongoose.connect(connectionStr, {
    user: config.get('db.options.user'),
    pass: config.get('db.options.pass')
});
mongoose.connection.on('error', (err) => {
    logger.error('mongodb connect error:' + err);
});
console.log(`数据库连接：${connectionStr}`);
const modelsPath = path.join(process.cwd(), '/build/models');
const models = fs.readdirSync(modelsPath);
const db = {};
exports.db = db;
for (let model of models) {
    if (model.startsWith('.')) {
        continue;
    }
    const modelName = path.basename(model).split('.')[0];
    const modelSchema = require(path.join(modelsPath, model));
    db[modelName] = mongoose.model(modelName, modelSchema.schema);
}
