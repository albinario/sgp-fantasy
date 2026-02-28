import { db } from '@/lib/db'

export function getUsers() {
	return db.selectFrom('users').selectAll().execute()
}
