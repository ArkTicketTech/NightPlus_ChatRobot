"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const exception_1 = require("../libs/exception");
function ValidateMiddleware(schema) {
    return (req, res, next) => {
        if (schema.body) {
            const result = joi.validate(req.body, schema.body);
            if (result.error) {
                const msg = new exception_1.default(2001, result.error.message);
                return res.apiError();
            }
        }
        if (schema.params) {
            const result = joi.validate(req.params, schema.params);
            if (result.error) {
                return res.apiError(new exception_1.default(2001, result.error.message));
            }
        }
        if (schema.query) {
            const result = joi.validate(req.query, schema.query);
            if (result.error) {
                return res.apiError(new exception_1.default(2001, result.error.message));
            }
        }
        if (schema.header) {
            const result = joi.validate(req.headers, schema.header, { allowUnknown: true });
            if (result.error) {
                return res.apiError(new exception_1.default(2001, result.error.message));
            }
        }
        next();
    };
}
exports.ValidateMiddleware = ValidateMiddleware;
