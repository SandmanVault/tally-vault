import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/", req.url))
  res.cookies.set("tv_admin", "", { path: "/", maxAge: 0 })
  return res
}
