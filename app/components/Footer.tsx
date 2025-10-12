import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <Image src="/logo.png" alt="Doodletron AI" width={185} height={26} />
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="/faq" className="text-gray-600 hover:text-doodle-orange font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-doodle-orange font-medium transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-doodle-orange font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/tos" className="text-gray-600 hover:text-doodle-orange font-medium transition-colors">
              Terms of Service
            </Link>
          </div>

          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Idol Software. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
