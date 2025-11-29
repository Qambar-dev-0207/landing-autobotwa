"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true")
      setIsLoading(false)
      router.push("/")
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-md">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-white/60 mb-8">Sign in to your AI Platform account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-white/70 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-white/70">
                  <input type="checkbox" className="mr-2 w-4 h-4 rounded" />
                  Remember me
                </label>
                <Link href="#" className="text-cyan-400 hover:text-cyan-300">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/60 text-center">
                Don't have an account?{" "}
                <Link href="/get-started" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
