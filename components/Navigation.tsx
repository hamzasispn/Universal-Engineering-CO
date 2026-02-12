'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <img src="/ue-logo.svg" alt="Universal Engineering" className="h-8 sm:h-10 lg:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#231F20] hover:text-[#355FA8] transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden sm:inline-block px-6 py-2.5 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-[#231F20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-[#231F20] hover:bg-[#EFEFEF] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-medium mt-4">
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
