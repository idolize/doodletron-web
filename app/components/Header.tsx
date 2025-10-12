'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogBackdrop, DialogTitle } from '@headlessui/react'

import Image from 'next/image'
import Link from 'next/link'

import BarsIcon from '@/app/icons/bars.svg'
import XMarkIcon from '@/app/icons/xmark.svg'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src="/logo.png" alt="Doodletron AI" width={185} height={26} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-doodle-orange font-medium">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button type="button" className="md:hidden" aria-label="Open Menu" onClick={() => setMobileMenuOpen(true)}>
            <BarsIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog
        transition
        as="div"
        className="fixed inset-0 z-50 md:hidden transition duration-300 ease-out data-[closed]:opacity-0"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <DialogTitle className="text-xl font-semibold">Doodletron AI</DialogTitle>
            <button
              type="button"
              aria-label="Close Menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-600 hover:text-doodle-orange transition-colors text-left py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  )
}
