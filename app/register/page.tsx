"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RegisterPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log("Passwords do not match")
      return
    }
    setIsLoading(true)
    // Simulate registration
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true")
      setIsLoading(false)
      // Redirect to landing page after successful signup
      router.push("/")
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-md">
            <h1 className="text-3xl font-bold text-white mb-2">Create account</h1>
            <p className="text-white/60 mb-8">Join our AI Platform and start building</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-white/70 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition"
                  required
                />
              </div>

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

              <div>
                <label htmlFor="confirmPassword" className="block text-white/70 text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition"
                  required
                />
              </div>

              <div className="flex items-start">
                <label className="flex items-start text-white/70 text-sm">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mr-2 w-4 h-4 rounded mt-0.5"
                    required
                  />
                  I agree to the{" "}
                  <Link href="#" className="text-cyan-400 hover:text-cyan-300 ml-1">
                    Terms of Service
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !agreeToTerms}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/60 text-center">
                Already have an account?{" "}
                <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign in
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
