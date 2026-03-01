'use client'

import { Fragment } from 'react/jsx-runtime'

type TLoadingFallback = {
	title: string
}

export function LoadingFallback({ title }: TLoadingFallback) {
	return (
		<Fragment>
			<h1>{title}</h1>
			<p>Loading…</p>
		</Fragment>
	)
}
