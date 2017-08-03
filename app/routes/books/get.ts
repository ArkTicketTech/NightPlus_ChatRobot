import * as db from '../../runtime/db'

const Book = db.db.Book

export function get (req: any, res: any, next: any) {
	const id = req.params.id
	Book.find({ id })
		.then((result: any) => {
			res.apiSuccess(result)
		})
		.catch((error: any) => {
			res.apiError(error)
		})
}
