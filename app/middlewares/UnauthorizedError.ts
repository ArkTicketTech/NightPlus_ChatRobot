export function UnauthorizedError(err: any, req: any, res: any, next: any) {
  if (err.name === 'UnauthorizedError') {
    res.send('Invalid token!')
  }
}