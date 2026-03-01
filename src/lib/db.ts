import { neon } from '@neondatabase/serverless'
import { Kysely } from 'kysely'
import { NeonDialect } from 'kysely-neon'

import type { DB } from '@/types/db'

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
	throw new Error('DATABASE_URL environment variable is not set')
}

export const db = new Kysely<DB>({
	dialect: new NeonDialect({
		neon: neon(databaseUrl),
	}),
})
