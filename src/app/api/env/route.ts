import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    APP_BASE_URL: process.env.APP_BASE_URL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  });
}
