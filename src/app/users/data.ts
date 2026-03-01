import { dataFetch } from '@/lib/data-fetch'
import { db } from '@/lib/db'

export function getUsers() {
	return dataFetch(() => db.selectFrom('users').selectAll().execute())
}
