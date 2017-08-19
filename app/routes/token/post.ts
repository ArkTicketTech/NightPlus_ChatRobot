import * as jwt from 'jsonwebtoken'
import * as config from 'config'

export function post (req: any, res: any, next: any) {
	const secret: string = config.get('jwt.secret')
	const { username, password } = req.body
	const token = jwt.sign(
		{username, password }, secret, { algorithm: 'HS256', expiresIn: '1h' }
	)
	res.apiSuccess(token)
}
