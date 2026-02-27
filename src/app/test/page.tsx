'use client'

import { useActionState } from 'react'

import { createComment } from './data'

export default function Page() {
	const [state, formAction] = useActionState(createComment, null)

	return (
		<form action={formAction}>
			<input type='text' placeholder='write a comment' name='comment' />
			<button type='submit'>Submit</button>
			{state?.success && <p>Comment saved.</p>}
			{state?.error && <p>Error: {state.error}</p>}
		</form>
	)
}
