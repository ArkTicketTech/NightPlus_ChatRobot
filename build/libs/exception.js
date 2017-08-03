"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors = {
    '403': 'Access denied',
    '404': 'Not Found'
};
class Exception {
    constructor(code, extra, err) {
        this.error_code = code;
        this.error_msg = errors[code.toString()] || err || '未知错误';
        this.external = true;
        if (extra)
            this.error_extra = extra;
        this.stack = (new Error()).stack;
    }
}
exports.default = Exception;
