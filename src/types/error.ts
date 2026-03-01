export type TErrorProps = {
	error: Error & { digest?: string }
	reset: () => void
}
