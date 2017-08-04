export function APIOutputMiddleware (req: any, res: any, next: any): void {
    // 相应api成功结果
  res.apiSuccess = (data: object, exData = {}) => {
    res.jsonp(Object.assign({
      status: 'OK',
      code: 200,
      data: data
    }, exData))
  }
    // 相应api出错结果，err是一个Error对象
  res.apiError = (err: any) => {
    res.jsonp({
      status: 'Error',
      error_code: err.error_code || 500,
      error_msg: err.error_msg || err.toString(),
      error_extra: err.error_extra || ''
    })
  }
  next()
}
