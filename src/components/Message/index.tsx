type TMessage = {
	content?: string
	label?: string
}

export function Message({ content, label }: TMessage) {
	return (
		<main>
			{label ? <h1>{label}</h1> : null}
			{content ? <p>{content}</p> : null}
		</main>
	)
}
