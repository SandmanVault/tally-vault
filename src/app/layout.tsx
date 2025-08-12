import "./globals.css"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Tally Vault",
  description: "Track, value, and hunt action figures.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
