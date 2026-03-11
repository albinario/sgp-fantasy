import { dataFetch } from '@/lib/data-fetch'
import { db } from '@/lib/db'

export function getGp(id: number) {
	return dataFetch(
		() =>
			db
				.selectFrom('gps')
				.innerJoin('cities', 'gps.city_id', 'cities.id')
				.innerJoin('countries', 'cities.country_id', 'countries.id')
				.innerJoin('riders', 'gps.wild_card_id', 'riders.id')
				.select((eb) => [
					'gps.id',
					'gp',
					'city_name',
					'country_code',
					'start_date',
					eb.ref('riders.rider_name').as('wild_card_name'),
				])
				.where('gps.id', '=', id)
				.executeTakeFirst(),
		null,
	)
}

export function getGps() {
	return dataFetch(() => db.selectFrom('gps').selectAll().execute(), [])
}
