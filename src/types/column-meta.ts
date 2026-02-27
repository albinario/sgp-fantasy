type ColumnMetaBase<T> = {
	key: keyof T
	label: string
}

export type ColumnMeta<T> = ColumnMetaBase<T> & {
	align?: 'left' | 'right' | 'center'
	format?: (value: unknown) => string
	italic?: boolean
}
