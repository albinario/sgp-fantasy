import { Fragment } from 'react/jsx-runtime'

import { metaData, noData } from './constants'
import { getRidersPoints } from './data'

import type { ColumnMeta } from '@/types/column-meta'

export default async function RidersPointsPage() {
	const ridersPoints = await getRidersPoints()

	const columns: ColumnMeta<(typeof ridersPoints)[number]>[] =
		ridersPoints.length > 0
			? Object.keys(ridersPoints[0]).map((key) => ({
					key: key as keyof (typeof ridersPoints)[number],
					label: key,
				}))
			: []

	return (
		<Fragment>
			<h1>{metaData.title}</h1>

			{ridersPoints.length <= 0 ? (
				<p>{noData}</p>
			) : (
				<table>
					<thead>
						<tr>
							{columns.map((col) => (
								<th key={String(col.key)}>{col.label}</th>
							))}
						</tr>
					</thead>

					<tbody>
						{ridersPoints.map((row) => (
							<tr key={String(row.id)}>
								{columns.map((col) => {
									const raw = row[col.key]
									const value = col.format ? col.format(raw) : String(raw ?? '')
									return <td key={String(col.key)}>{value}</td>
								})}
							</tr>
						))}
					</tbody>
				</table>
			)}
		</Fragment>
	)
}
