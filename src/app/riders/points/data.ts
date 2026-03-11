import { dataFetch } from '@/lib/data-fetch'
import { db } from '@/lib/db'

export function getRidersPoints() {
	return dataFetch(
		() =>
			db
				.selectFrom('riders')
				.innerJoin('riders_results', 'riders_results.rider_id', 'riders.id')
				.select((eb) => [
					'riders.id',
					'riders.rider_name',
					eb.fn.sum<number>('riders_results.points').as('totalPoints'),
				])
				.groupBy(['riders.id', 'riders.rider_name'])
				.orderBy('totalPoints', 'desc')
				.execute(),
		[],
	)
}
