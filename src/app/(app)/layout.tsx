import Link from "next/link"
import { ReactNode } from "react"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(210_40%_98%)]">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="container-tight flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white font-bold">T</span>
            <span className="font-semibold">Tally Vault</span>
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link href="/app" className="px-3 py-2 rounded-lg hover:bg-accent">Home</Link>
            <Link href="/app/vault" className="px-3 py-2 rounded-lg hover:bg-accent">Vault</Link>
            <Link href="/app/hunt" className="px-3 py-2 rounded-lg hover:bg-accent">Hunt</Link>
            <Link href="/app/figures" className="px-3 py-2 rounded-lg hover:bg-accent">Figures</Link>
            <Link href="/app/settings" className="px-3 py-2 rounded-lg hover:bg-accent">Settings</Link>
          </nav>
        </div>
      </header>
      <main className="container-tight py-8">{children}</main>
    </div>
  )
}
