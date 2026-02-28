import Image from 'next/image'
import Link from 'next/link'

import { Fragment } from 'react/jsx-runtime'

import { auth0 } from '@/lib/auth0'

import styles from './page.module.css'

export default async function Home() {
	const session = await auth0.getSession()
	const user = session?.user

	return (
		<Fragment>
			<Image
				className={styles.logo}
				src="/next.svg"
				alt="Next.js logo"
				width={100}
				height={20}
				priority
			/>
			<h1>Speedway GP Fantasy</h1>
			<p>Coming soon...</p>

			<div className={styles.content}>
				{user ? (
					<>
						<p>Signed in as {user.name ?? user.email}.</p>
						<a href="/auth/logout">Log out</a>
					</>
				) : (
					<a href="/auth/login">Log in</a>
				)}
				<Link href="/protected">User protected page</Link>
				<Link href="/admin">Admin protected page</Link>
			</div>
		</Fragment>
	)
}
