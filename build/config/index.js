"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envMap = {
    default: 'default',
    development: 'development',
    staging: 'staging',
    production: 'production',
    test: 'test'
};
const config = `./${envMap[process.env.NODE_ENV || 'default']}`;
exports.config = config;
