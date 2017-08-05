export function UnauthorizedError(err: any, req: any, res: any, next: any) {
  if (err.name === 'UnauthorizedError') {
    res.apiError({ error_code: 401, error_msg: 'Invalid token!' })
  }
}