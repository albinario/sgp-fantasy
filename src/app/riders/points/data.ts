import { dataFetch } from '@/lib/data-fetch'
import { db } from '@/lib/db'

export function getRidersPoints() {
	return dataFetch(() =>
		db
			.selectFrom('riders')
			.innerJoin('riderResults', 'riderResults.riderId', 'riders.id')
			.select((eb) => [
				'riders.id',
				'riders.name',
				eb.fn.sum<number>('riderResults.points').as('totalPoints'),
			])
			.groupBy(['riders.id', 'riders.name'])
			.orderBy('totalPoints', 'desc')
			.execute(),
	)
}
