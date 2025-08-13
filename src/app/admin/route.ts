import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const token = process.env.ADMIN_BYPASS_TOKEN
  if (!token) return NextResponse.json({ error: "Server not configured" }, { status: 500 })

  const url = new URL(req.url)
  const t = url.searchParams.get("token")
  if (t !== token) return NextResponse.json({ ok: false, error: "Invalid token" }, { status: 401 })

  const res = NextResponse.redirect(new URL("/app", url))
  res.cookies.set("tv_admin", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  return res
}
