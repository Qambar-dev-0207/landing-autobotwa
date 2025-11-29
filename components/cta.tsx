import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build something extraordinary?</h2>
        <p className="text-white/60 mb-8 text-lg">
          Join thousands of developers using our platform to ship AI features faster.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2"
          >
            Get started free <ArrowRight size={18} />
          </Link>
          <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-semibold transition">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  )
}
