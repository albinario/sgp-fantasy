import Link from 'next/link'

import { navItems, type TNavItem } from '@/config/nav'

const NavItemList = ({ items }: { items: TNavItem[] }) => (
	<ul className="flex gap-4 justify-center">
		{items.map((item) => (
			<li key={item.href}>
				<Link href={item.href}>{item.label}</Link>

				{item.children?.length ? <NavItemList items={item.children} /> : null}
			</li>
		))}
	</ul>
)

export function Nav() {
	const topLevelItems = Object.values(navItems)

	return (
		<nav className="border-t border-t-secondary fixed bottom-0 left-0 right-0 p-2">
			<NavItemList items={topLevelItems} />
		</nav>
	)
}
