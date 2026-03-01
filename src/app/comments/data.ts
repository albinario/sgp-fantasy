import { db } from '@/lib/db'

export function getComments() {
	return db.selectFrom('comments').selectAll().execute()
}
