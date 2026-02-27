import { Message } from '@/components/Message'

import { getRidersPoints } from './data'

export default async function RidersPointsPage() {
	const result = await getRidersPoints()

	if (!result.success) {
		return (
			<Message
				message={result.message ?? `Failed to load rider points`}
				title='Rider Points'
			/>
		)
	}

	const ridersPoints = result.data

	if (!ridersPoints || !!ridersPoints.length) {
		return (
			<Message
				message='No rider results in the database.'
				title='Rider Points'
			/>
		)
	}

	return (
		<main>
			<h1>Rider Points</h1>

			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>totalPoints</th>
					</tr>
				</thead>

				<tbody>
					{ridersPoints.map((row) => (
						<tr key={String(row.id)}>
							<td>{row.name}</td>
							<td>{row.totalPoints}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	)
}
