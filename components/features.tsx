"use client"

import { Brain, Zap, Lock, BarChart3 } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const features = [
  {
    icon: Brain,
    title: "Unified Provider API",
    description:
      "Switch between AI providers by changing a single line of code. Access the best models from OpenAI, Anthropic, Google, and more.",
  },
  {
    icon: Zap,
    title: "Streaming AI Responses",
    description:
      "Don't let your users wait for AI responses. Stream responses instantly to ensure smooth, real-time interactions.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Built with security-first approach. SOC 2 Type II compliant, with enterprise-grade encryption and access controls.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Monitor AI performance with detailed metrics. Track costs, latency, and model usage across your entire platform.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Everything you need to succeed</h2>
          <p className="text-white/60 text-lg">Purpose-built features for AI developers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="relative rounded-xl">
                <div className="absolute inset-0 rounded-xl border border-white/10">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                </div>
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition">
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
