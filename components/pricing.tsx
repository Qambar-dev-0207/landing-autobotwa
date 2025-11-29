"use client"
import Link from "next/link"
import { Check } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for trying out our AI platform",
    features: ["Up to 10,000 API calls", "Basic AI models", "Email support", "Community access", "Single API key"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams and applications",
    features: [
      "Up to 1M API calls",
      "All AI models",
      "Priority support",
      "Advanced analytics",
      "Multiple API keys",
      "Custom rate limits",
      "Webhooks",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments",
    features: [
      "Unlimited API calls",
      "Dedicated support",
      "Custom models",
      "SLA guarantee",
      "On-premise options",
      "Advanced security",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="text-pretty">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale as your business grows.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              <div className="absolute inset-0 rounded-2xl border border-border/50">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              </div>
              <div
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.highlighted ? "ring-2 ring-primary bg-card/80 scale-105 shadow-xl" : "bg-card hover:shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={
                      plan.cta === "Get Started"
                        ? "/get-started"
                        : plan.cta === "Start Free Trial"
                          ? "/free-trial"
                          : "/contact-sales"
                    }
                    className={`w-full block text-center py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features List */}
                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <p className="text-foreground mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <Link href="/docs" className="text-primary hover:text-primary/80 font-semibold transition-colors">
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  )
}
