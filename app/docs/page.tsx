"use client"

import Link from "next/link"
import { BookOpen, Code, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DocsPage() {
  const sections = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics and set up your first project.",
      items: ["Installation guide", "Authentication", "Your first API call", "Common errors"],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and examples.",
      items: ["REST API", "SDK documentation", "Webhooks", "Error handling"],
    },
    {
      icon: Zap,
      title: "Guides & Tutorials",
      description: "In-depth guides for advanced use cases.",
      items: ["Building AI chatbots", "Real-time streaming", "Production deployment", "Performance optimization"],
    },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Documentation</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to build with our platform. From quickstarts to advanced tutorials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.title} className="p-8 rounded-xl border border-white/10 bg-white/5">
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                  <p className="text-white/60 text-sm mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2">
                          <span className="text-white/40">→</span>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Didn't find what you're looking for?</h2>
              <p className="text-white/60 mb-6">
                Our support team is ready to help. Reach out to us with any questions.
              </p>
              <Link
                href="mailto:support@aiplatform.com"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
