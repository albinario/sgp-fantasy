import type { Metadata } from 'next'

import { Fragment } from 'react/jsx-runtime'

import { metaData, noData } from './constants'
import { getRiders } from './data'

import type { ColumnMeta } from '@/types/column-meta'

export const metadata: Metadata = metaData

export default async function RidersPage() {
	const riders = await getRiders()

	const alignRight = new Set(['id'])
	const italic = new Set(['number'])

	const columns: ColumnMeta<(typeof riders)[number]>[] = Object.keys(
		riders[0],
	).map((key) => ({
		key: key as keyof (typeof riders)[number],
		label: key,
		align: alignRight.has(key) ? 'right' : undefined,
		italic: italic.has(key),
	}))

	return (
		<Fragment>
			<h1>{metaData.title}</h1>

			{riders.length <= 0 ? (
				<p>{noData}</p>
			) : (
				<table>
					<thead>
						<tr>
							{columns.map((col) => (
								<th
									key={String(col.key)}
									style={{ textAlign: col.align ?? 'left' }}
								>
									{col.label}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{riders.map((row) => (
							<tr key={String(row.id)}>
								{columns.map((col) => {
									const raw = row[col.key]
									const value = col.format ? col.format(raw) : String(raw ?? '')

									return (
										<td
											key={String(col.key)}
											style={{
												textAlign: col.align ?? 'left',
												fontStyle: col.italic ? 'italic' : undefined,
											}}
										>
											{value}
										</td>
									)
								})}
							</tr>
						))}
					</tbody>
				</table>
			)}
		</Fragment>
	)
}
