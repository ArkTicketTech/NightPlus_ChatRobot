interface Errors {
  '403': string,
  '404': string,
  [key: string]: string
}

const errors: Errors = {
  '403': 'Access denied',
  '404': 'Not Found'
}

export default class Exception {
  error_code: number;
  error_msg: string;
  external: boolean;
  error_extra: string;
  stack: string | undefined;

  constructor(code: number, extra: string, err?: string) {
    this.error_code = code
    this.error_msg = errors[ code.toString() ] || err || '未知错误'
    this.external = true
    if (extra) this.error_extra = extra
    this.stack = (new Error()).stack
  }
}
