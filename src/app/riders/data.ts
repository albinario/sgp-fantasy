import { db } from '@/lib/db'

export function getRiders() {
	console.log('getRiders')
	return db.selectFrom('riders').selectAll().execute()
}
