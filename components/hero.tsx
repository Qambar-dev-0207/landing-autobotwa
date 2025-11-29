import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 text-center relative">
      <div className="absolute inset-0 -z-10 h-screen bg-gradient-to-b from-black via-black to-transparent" />
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-cyan-400 text-sm font-semibold mb-4">Welcome to the Future</p>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight md:text-6xl">
          The fastest and most powerful platform for building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI products</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
          Build transformative AI experiences powered by industry-leading models and tools. From prototyping to
          production, we have everything you need.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2"
          >
            Start building <ArrowRight size={18} />
          </Link>
          <Link
            href="/pricing"
            className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            View API pricing
          </Link>
        </div>
      </div>
    </div>
  )
}
