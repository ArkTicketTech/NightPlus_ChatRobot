"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const baseSchema = {
    id: Number,
    title: String,
    price: Number
};
const schema = new mongoose.Schema(baseSchema, {
    collection: 'Book',
    strict: false
});
exports.schema = schema;
