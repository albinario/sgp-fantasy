import { Message } from '@/components/Message'

import type { ColumnMeta } from '@/types/column-meta'

import { getRiders } from './data'

export default async function RidersPage() {
	const result = await getRiders()

	if (!result.success) {
		return (
			<Message
				message={result.message ?? `Failed to load riders`}
				title='Riders'
			/>
		)
	}

	const riders = result.data

	if (!riders || !!riders.length) {
		return <Message message='No riders in the database.' title='Riders' />
	}

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
		<main>
			<h1>Riders</h1>

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
		</main>
	)
}
