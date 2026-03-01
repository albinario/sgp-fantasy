import { db } from '@/lib/db'

export function getRidersPoints() {
	return db
		.selectFrom('riders')
		.innerJoin('riders_results', 'riders_results.rider_id', 'riders.id')
		.select((eb) => [
			'riders.id',
			'riders.name',
			eb.fn.sum<number>('riders_results.points').as('totalPoints'),
		])
		.groupBy(['riders.id', 'riders.name'])
		.orderBy('totalPoints', 'desc')
		.execute()
}
