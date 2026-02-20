import Link from 'next/link'
import type { ComponentType } from 'react'

import { auth0 } from '@/lib/auth0'
import { getRoles } from '@/lib/auth0-claims'

const ProtectedPage = auth0.withPageAuthRequired(
	async function ProtectedPage() {
		const session = await auth0.getSession()
		const user = session?.user
		const roles = getRoles(user as Record<string, unknown> | undefined)

		return (
			<main style={{ padding: '2rem' }}>
				<h1>Protected page</h1>
				<p>Signed in as {user?.name ?? user?.email}.</p>
				<p>Roles: {roles.length ? roles.join(', ') : 'none'}</p>
				<details>
					<summary>Debug session user</summary>
					<pre
						style={{
							marginTop: '1rem',
							padding: '1rem',
							background: '#111',
							color: '#fff',
							overflowX: 'auto',
						}}
					>
						{JSON.stringify(user, null, 2)}
					</pre>
				</details>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<Link href='/'>Back home</Link>
					<a href='/auth/logout'>Log out</a>
				</div>
			</main>
		)
	},
	{ returnTo: '/protected' },
) as ComponentType

export default ProtectedPage
