"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function APIOutputMiddleware(req, res, next) {
    // 相应api成功结果
    res.apiSuccess = (data, exData = {}) => {
        res.jsonp(Object.assign({
            status: 'OK',
            code: 200,
            data: data
        }, exData));
    };
    // 相应api出错结果，err是一个Error对象
    res.apiError = (err) => {
        res.jsonp({
            status: 'Error',
            error_code: err.error_code || 500,
            error_msg: err.error_msg || err.toString(),
            error_extra: err.error_extra || ''
        });
    };
    next();
}
exports.APIOutputMiddleware = APIOutputMiddleware;
