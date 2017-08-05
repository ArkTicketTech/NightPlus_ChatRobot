import { db } from '../../runtime/db'
import Exception from '../../libs/exception'

const Book = db.Book

export function destroy (req: any, res: any, next: any) {
	(async() => {
		const _id = req.params.id
		const book = await Book.findOneAndUpdate({ _id, isDeleted: false }, { '$set': { isDeleted: true } })
		if (!book) throw new Exception(404, `Cannot find book: ${_id}`)
		res.apiSuccess('Success to delete.')
	})().catch((error) => {
		res.apiError(error)
	})
}
