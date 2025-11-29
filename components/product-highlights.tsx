"use client"

import { Zap, Brain, Shield, BarChart3 } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time AI processing with sub-100ms latency",
  },
  {
    icon: Brain,
    title: "Smart Analytics",
    description: "Advanced insights powered by machine learning",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Monitor, analyze, and optimize AI performance",
  },
]

export default function ProductHighlights() {
  return (
    <section id="product-highlights" className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Our AI Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Built for developers who demand the best performance, security, and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 rounded-xl border border-border">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                </div>
                <div className="relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
