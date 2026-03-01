import Link from 'next/link'

import styles from './comp.module.css'

import { navItems, type TNavItem } from '@/config/nav'

const NavItemList = ({ items }: { items: TNavItem[] }) => {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<li key={item.href}>
					<Link href={item.href}>{item.label}</Link>

					{item.children?.length ? <NavItemList items={item.children} /> : null}
				</li>
			))}
		</ul>
	)
}

export function Nav() {
	const topLevelItems = Object.values(navItems)

	return (
		<nav className={styles.nav}>
			<NavItemList items={topLevelItems} />
		</nav>
	)
}
