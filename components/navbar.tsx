"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, LogOut } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    setIsOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-cyan-400">Auto</span>BotWa
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("product-highlights")}
            className="text-white/70 hover:text-white transition"
          >
            Product
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-white/70 hover:text-white transition">
            Pricing
          </button>
          <Link
            href="/get-started"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition"
          >
            Get Started
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white/70 hover:text-white transition border border-white/20 px-6 py-2 rounded-full flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-white/70 hover:text-white transition border border-white/20 px-6 py-2 rounded-full"
            >
              Login
            </Link>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 p-4 space-y-4">
          <button
            onClick={() => scrollToSection("product-highlights")}
            className="block w-full text-left text-white/70 hover:text-white"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="block w-full text-left text-white/70 hover:text-white"
          >
            Pricing
          </button>
          <Link
            href="/get-started"
            className="w-full block text-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition"
          >
            Get Started
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full block text-center text-white/70 hover:text-white border border-white/20 px-6 py-2 rounded-full flex items-center justify-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="w-full block text-center text-white/70 hover:text-white border border-white/20 px-6 py-2 rounded-full"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
