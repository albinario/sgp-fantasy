This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies and run the development server with Bun:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Auth0

1. Create an Auth0 Regular Web Application.
2. Configure the following URLs in Auth0:
   - Allowed Callback URLs: `http://localhost:3000/auth/callback`
   - Allowed Logout URLs: `http://localhost:3000`
3. Create a `.env.local` file with:

```bash
AUTH0_DOMAIN=YOUR_DOMAIN
AUTH0_CLIENT_ID=YOUR_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_CLIENT_SECRET
AUTH0_SECRET=your-random-32-byte-hex
APP_BASE_URL=http://localhost:3000
AUTH0_AUDIENCE=https://api.betsgp
```

4. Ensure the Auth0 proxy is enabled for Next 16 in `src/proxy.ts` (already in this repo).

Then run `bun dev` and use the Log in/Log out links on the home page.

### Roles-based admin access

1. In Auth0, enable RBAC and create a role named `admin`, then assign it to your user.
2. Add a Post-Login Action to expose roles as a custom claim:

```js
exports.onExecutePostLogin = async (event, api) => {
	const roles = event.authorization?.roles ?? []
	api.idToken.setCustomClaim('https://betsgp.local/roles', roles)
}
```

The app reads roles from `https://betsgp.local/roles` and requires `admin` for `/protected`. 3. Set `AUTH0_AUDIENCE` in `.env.local` to your API identifier so roles are included in tokens.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
