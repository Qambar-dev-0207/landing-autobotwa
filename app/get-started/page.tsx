"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description: "Sign up and get immediate access to the platform. No credit card required.",
    },
    {
      number: 2,
      title: "Choose Your API Key",
      description: "Generate your unique API keys to start integrating our services.",
    },
    {
      number: 3,
      title: "Integrate the SDK",
      description: "Add our SDK to your project with just a few lines of code.",
    },
    {
      number: 4,
      title: "Start Building",
      description: "Begin building amazing AI features with our comprehensive documentation.",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Started in Minutes</h1>
            <p className="text-white/60 text-lg">Follow these simple steps to start building with our platform.</p>
          </div>

          <div className="space-y-8 mb-16">
            {steps.map((step) => (
              <div
                key={step.number}
                onClick={() => setCurrentStep(step.number)}
                className="cursor-pointer p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition bg-white/5 hover:bg-white/10"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {currentStep >= step.number ? (
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white/40">
                        {step.number}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to begin?</h2>
            <p className="text-white/60 mb-8">Create your free account and start building today.</p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Create Account <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
