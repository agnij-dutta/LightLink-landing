'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LightLinkLogo } from '@/components/icons/chain-icons'
import { LightpaperContent } from '@/components/lightpaper/lightpaper-content'
import { FooterSection } from '@/components/sections/footer-section'

// Metadata for the page
// title: 'Lightpaper - LightLink Cross-Chain Verification',
// description: 'Revolutionary Cross-Chain State Verification Through Zero-Knowledge Proof Aggregation - A Mathematical Framework for Trustless Blockchain Interoperability',

const menuItems = [
  { name: 'Features', href: '/#features' },
  { name: 'How it Works', href: '/#how-it-works' },
  { name: 'Demo', href: '/#demo' },
  { name: 'Lightpaper', href: '/lightpaper' },
  { name: 'About', href: '/#about' },
]

function LightpaperHeader() {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state for glassmorphism effect
      setIsScrolled(currentScrollY > 50)
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false)
      } else {
        // Scrolling up - show navbar
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      // Navigate to home page with hash
      window.location.href = href
    }
    setMenuState(false)
  }
  
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className={`group fixed z-50 w-full transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent border-b border-transparent'
        }`}>
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <LightLinkLogo className="w-8 h-8" />
                  <span className="text-xl font-bold text-white">LightLink</span>
                </div>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.href.startsWith('/') ? (
                        <Link
                          href={item.href}
                          className={`text-gray-300 hover:text-white block duration-150 relative group ${
                            item.href === '/lightpaper' ? 'text-white' : ''
                          }`}>
                          <span>{item.name}</span>
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="text-gray-300 hover:text-white block duration-150 relative group">
                          <span>{item.name}</span>
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-black group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-700 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.href.startsWith('/') ? (
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-white block duration-150">
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="text-gray-300 hover:text-white block duration-150">
                          <span>{item.name}</span>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-800">
                  <Link href="/#docs">
                    <span>Documentation</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link href="/#demo">
                    <span>Try Demo</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default function LightpaperPage() {
  return (
    <div className="min-h-screen bg-black">
      <LightpaperHeader />
      <div style={{ paddingTop: '80px' }}>
        <LightpaperContent />
      </div>
      <FooterSection />
    </div>
  )
} 