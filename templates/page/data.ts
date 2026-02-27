import { db } from '@/lib/db'

export function __DATA_FUNCTION__() {
	return db.selectFrom('__TABLE_NAME__').selectAll().execute()
}
