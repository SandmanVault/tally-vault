import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const token = process.env.ADMIN_BYPASS_TOKEN
  const cookie = req.cookies.get("tv_admin")?.value
  if (url.pathname === "/" && token && cookie === token) { url.pathname = "/app"; return NextResponse.redirect(url) }
  return NextResponse.next()
}

export const config = { matcher: ["/", "/app/:path*"] }
