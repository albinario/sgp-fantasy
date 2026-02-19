import Image from 'next/image'
import Link from 'next/link'

import { auth0 } from '@/lib/auth0'

import styles from './page.module.css'

export default async function Home() {
	const session = await auth0.getSession()
	const user = session?.user

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src='/next.svg'
					alt='Next.js logo'
					width={100}
					height={20}
					priority
				/>
				<div className={styles.intro}>
					<h1>To get started, edit the page.tsx file.</h1>
					<p>
						Looking for a starting point or more instructions? Head over to{' '}
						<a
							href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'
						>
							Templates
						</a>{' '}
						or the{' '}
						<a
							href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'
						>
							Learning
						</a>{' '}
						center.
					</p>
					{user ? (
						<>
							<p>Signed in as {user.name ?? user.email}.</p>
							<a className={styles.secondary} href='/auth/logout'>
								Log out
							</a>
						</>
					) : (
						<a className={styles.primary} href='/auth/login'>
							Log in
						</a>
					)}
					<Link className={styles.secondary} href='/protected'>
						User protected page
					</Link>
					<Link className={styles.secondary} href='/admin'>
						Admin protected page
					</Link>
				</div>
				<div className={styles.ctas}>
					<a
						className={styles.primary}
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							className={styles.logo}
							src='/vercel.svg'
							alt='Vercel logomark'
							width={16}
							height={16}
						/>
						Deploy Now
					</a>
					<a
						className={styles.secondary}
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Documentation
					</a>
				</div>
			</main>
		</div>
	)
}
