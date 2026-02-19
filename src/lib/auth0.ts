import {
	Auth0Client,
	filterDefaultIdTokenClaims,
} from '@auth0/nextjs-auth0/server'

import { getRoles, ROLE_CLAIM } from './auth0-claims'

const audience = process.env.AUTH0_AUDIENCE

export const auth0 = new Auth0Client({
	authorizationParameters: audience ? { audience } : undefined,
	beforeSessionSaved: async (session) => {
		const baseClaims = filterDefaultIdTokenClaims(session.user ?? {})
		const roles = getRoles(session.user as Record<string, unknown> | undefined)

		return {
			...session,
			user: {
				...baseClaims,
				[ROLE_CLAIM]: roles,
			},
		}
	},
})
