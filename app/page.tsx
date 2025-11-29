import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HeroParallexDemo from "@/components/ui/hero-parallax-demo"
import Features from "@/components/features"
import ProductHighlights from "@/components/product-highlights"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata = {
  title: "AI Platform - Build Intelligence Into Your Apps",
  description: "The fastest and most powerful platform for building AI products",
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <HeroParallexDemo />
      <Features />
      <ProductHighlights />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
