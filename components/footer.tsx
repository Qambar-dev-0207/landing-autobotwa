import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-white font-bold mb-4 block">
              <span className="text-cyan-400">Auto</span>BotWa
            </Link>
            <p className="text-white/60 text-sm">The fastest platform for building AI products.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <Link href="/product" className="block text-white/60 hover:text-white text-sm">
                Platform
              </Link>
              <Link href="/pricing" className="block text-white/60 hover:text-white text-sm">
                Pricing
              </Link>
              <Link href="/docs" className="block text-white/60 hover:text-white text-sm">
                API Docs
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-white/60 hover:text-white text-sm">
                Blog
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white text-sm">
                About
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white text-sm">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-white/60 hover:text-white text-sm">
                Privacy
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white text-sm">
                Terms
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white text-sm">
                Security
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2025 AIplatform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
