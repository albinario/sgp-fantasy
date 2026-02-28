import { Fragment } from 'react/jsx-runtime'

type TMessage = {
	content?: string
	label?: string
}

export function Message({ content, label }: TMessage) {
	return (
		<Fragment>
			{label ? <h1>{label}</h1> : null}
			{content ? <p>{content}</p> : null}
		</Fragment>
	)
}
