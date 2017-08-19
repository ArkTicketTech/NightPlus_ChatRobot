import { db } from '../../runtime/db'

const Book = db.Book

export function post(req: any, res: any, next: any) {
	(async() => {
		const { title, price } = req.body
		const data = {
			title,
			price
		}
		const book = await Book.create(data)
		res.apiSuccess(book)
	})().catch((error) => {
		res.apiError(error)
	})
}
