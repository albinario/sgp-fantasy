import type { Metadata } from 'next'

import type { ColumnMeta } from '@/types/column-meta'

import { metaData, noData } from './constants'
import { __DATA_FUNCTION__ } from './data'

export const metadata: Metadata = metaData

export default async function __PAGE_TITLE_CAMEL__Page() {
	const __DATA_VARIABLE__ = await __DATA_FUNCTION__()

	if (!__DATA_VARIABLE__?.length) throw new Error(noData)

	return (
		<main>
			<h1>__PAGE_TITLE__</h1>
			<p>__DATA__</p>
		</main>
	)
}
