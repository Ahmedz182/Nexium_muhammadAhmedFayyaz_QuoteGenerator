import QuoteGenerator from "@/components/QuoteGenerator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quote Generator - Muhammad Ahmed Fyyaz",
  description: "A beautiful quote generator built by Muhammad Ahmed Fyyaz. Discover inspiring quotes by topic or get random wisdom to brighten your day. Built with Next.js and ShadCN UI.",
}

export default function Home() {
  return <QuoteGenerator />
}
