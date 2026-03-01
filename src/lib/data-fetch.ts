export async function dataFetch<T>(query: () => Promise<T>) {
	try {
		return await query()
	} catch (error) {
		console.error(error)
		return []
	}
}
