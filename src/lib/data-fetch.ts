export async function dataFetch<T>(query: () => Promise<T>) {
	try {
		const data = await query()
		return { success: true, data }
	} catch (error) {
		const message = error instanceof Error ? error.message : undefined
		return { success: false, message }
	}
}
