"use client"

import Link from "next/link"
import { Zap, Shield, Gauge, BarChart3 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProductPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-millisecond response times powered by our optimized infrastructure.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encryption and compliance certifications.",
    },
    {
      icon: Gauge,
      title: "Unlimited Scalability",
      description: "Auto-scaling infrastructure that grows with your needs.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and detailed performance metrics.",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Product Platform</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover the powerful features that make our platform the choice for AI development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition bg-white/5 hover:bg-white/10"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to experience it?</h2>
            <p className="text-white/60 mb-8">Start your free trial today, no credit card required.</p>
            <Link
              href="/register"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
