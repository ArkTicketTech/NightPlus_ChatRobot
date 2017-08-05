import { db } from '../../runtime/db'

const Book = db.Book

export function list (req: any, res: any, next: any) {
	(async() => {
		const limit = parseInt(req.query.limit)
		const skip = parseInt(req.query.offset)
		const books = await Book.find({ isDeleted: false }).limit(limit || 0).skip(skip || 0).sort({_id: -1})
		res.apiSuccess(books)
	})().catch((error) => {
		res.apiError(error)
	})
}
