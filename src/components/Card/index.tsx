import styles from './comp.module.css'

type TCard = {
	children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function Card({ children, ...props }: TCard) {
	return (
		<div className={styles.card} {...props}>
			{children}
		</div>
	)
}
