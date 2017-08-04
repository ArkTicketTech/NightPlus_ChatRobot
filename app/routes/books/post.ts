import * as db from '../../runtime/db'

const Book = db.db.Book

export function post(req: any, res: any, next: any) {
	const id = req.body.id
	const title = req.body.title
	const price = req.body.price
	const data = {
		id,
		title,
		price
	}
	Book.create(data)
		.then((result: any) => {
			res.apiSuccess(result)
		})
		.catch((error: any) => {
			res.apiError(error)
		})
	
}
