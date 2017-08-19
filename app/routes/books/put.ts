import { db } from '../../runtime/db'
import Exception from '../../libs/exception'

const Book = db.Book

export function put(req: any, res: any, next: any) {
	(async() => {
		const _id = req.params.id
		const { title, price } = req.body
		const data = {
			title,
			price
		};
		const book = await Book.findOneAndUpdate({ _id , isDeleted: false}, { '$set': data }, { new: true })
		if (!book) throw new Exception(404, `Cannot find book: ${_id}`)
		res.apiSuccess(book)
	})().catch((error) => {
		res.apiError(error)
	})
}
