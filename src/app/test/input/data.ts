'use server'

import { db } from '@/lib/db'

export type CommentFormState = { success: boolean; error?: string } | null

export async function createComment(
	prevState: CommentFormState,
	formData: FormData,
): Promise<CommentFormState> {
	try {
		const raw = formData.get('comment')
		const comment = typeof raw === 'string' ? raw.trim() : null
		if (!comment) return { success: false, error: 'Comment is required' }

		await db.insertInto('comments').values({ comment, user_id: 1 }).execute()
		return { success: true }
	} catch (e) {
		const message = e instanceof Error ? e.message : 'Failed to save comment'
		return { success: false, error: message }
	}
}
