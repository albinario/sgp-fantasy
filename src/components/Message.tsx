export type TMessage = {
	message: string
	title: string
}

export function Message({ message, title }: TMessage) {
	return (
		<main>
			<h1>{title}</h1>
			<p>{message}</p>
		</main>
	)
}
