import Image from "next/image"
import Link from "next/link"

export default function Landing() {
  return (
    <main className="relative">
      <section className="container-tight py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 mb-4">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm">Loved by collectors</span>
            </div>
            <h1 className="h1">
              Your full <span className="text-primary">action figure</span> collection in the palm of your hand.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Track real value, stop duplicate buys, and hunt the figures you want—with live prices.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/signup" className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-white font-medium hover:opacity-90 transition">
                Create your vault
              </Link>
              <Link href="/login" className="inline-flex items-center rounded-xl border px-5 py-3 font-medium">
                I already have an account
              </Link>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>• Know what figures you own & need</li>
              <li>• Track collection value & P/L</li>
              <li>• Live hunt across marketplaces</li>
              <li>• Price drop + restock alerts</li>
            </ul>
          </div>
          <div className="relative">
            <div className="card p-2">
              <Image src="/hero-shot.png" alt="Tally Vault preview" width={900} height={700} className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent py-6">
        <div className="container-tight flex items-center justify-between gap-6">
          <p className="subtle">Built for Marvel Legends, Star Wars Black Series, NECA, and more.</p>
        </div>
      </section>
    </main>
  )
}
