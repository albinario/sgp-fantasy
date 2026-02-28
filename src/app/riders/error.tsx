'use client'

import ErrorPage from '@/pages/error'
import type { TErrorProps } from '@/types/error'

import { fetchFailed, metaData } from './constants'

export default function Error(props: TErrorProps) {
	return (
		<ErrorPage {...props} label={metaData.title} fetchFailed={fetchFailed} />
	)
}
