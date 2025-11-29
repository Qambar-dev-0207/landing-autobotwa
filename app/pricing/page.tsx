"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for getting started",
      features: ["Up to 10,000 API calls", "Basic support", "Standard models access", "1 project", "Community access"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "For growing teams",
      features: [
        "Up to 1,000,000 API calls",
        "Priority support",
        "All models access",
        "Unlimited projects",
        "Advanced analytics",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale deployments",
      features: [
        "Unlimited API calls",
        "24/7 dedicated support",
        "Custom model training",
        "Unlimited projects",
        "Advanced security",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always flexible to scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border transition ${
                  plan.highlighted
                    ? "border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 scale-105"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-2">{plan.period}</span>
                  </div>

                  <Link
                    href={plan.name === "Enterprise" ? "#" : "/register"}
                    className={`w-full block text-center py-3 rounded-full font-semibold transition mb-8 ${
                      plan.highlighted
                        ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                        : "border border-white/20 hover:border-white/40 text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check size={18} className="text-cyan-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
