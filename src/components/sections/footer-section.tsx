'use client'
import React from 'react'
import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { LightLinkLogo } from '@/components/icons/chain-icons'

const footerLinks = {
  product: [
    { name: 'Features', href: 'https://applightlink.vercel.app/' },
    { name: 'How it Works', href: 'https://applightlink.vercel.app/' },
    { name: 'Demo', href: 'https://applightlink.vercel.app/' },
    { name: 'Pricing', href: 'https://applightlink.vercel.app/' },
  ],
  developers: [
    { name: 'Documentation', href: 'https://applightlink.vercel.app/' },
    { name: 'API Reference', href: 'https://applightlink.vercel.app/' },
    { name: 'SDKs', href: 'https://applightlink.vercel.app/' },
    { name: 'GitHub', href: 'https://github.com/agnij-dutta/LightLink', icon: Github },
  ],
  company: [
    { name: 'About', href: 'https://applightlink.vercel.app/' },
    { name: 'Blog', href: 'https://applightlink.vercel.app/' },
    { name: 'Careers', href: 'https://applightlink.vercel.app/' },
    { name: 'Contact', href: 'https://applightlink.vercel.app/' },
  ],
  legal: [
    { name: 'Privacy Policy', href: 'https://applightlink.vercel.app/' },
    { name: 'Terms of Service', href: 'https://applightlink.vercel.app/' },
    { name: 'Cookie Policy', href: 'https://applightlink.vercel.app/' },
    { name: 'Security', href: 'https://applightlink.vercel.app/' },
  ],
}

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/agnij-dutta/LightLink', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/lightlink', icon: Linkedin },
  { name: 'Email', href: 'mailto:hello@lightlink.network', icon: Mail },
  { name: 'Twitter', href: 'https://twitter.com/lightlink', icon: Twitter },
]

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <LightLinkLogo className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LightLink
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Decentralized cross-chain state verification through ZK proof aggregation. 
              Built for the future of blockchain interoperability.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Developers</h3>
              <ul className="space-y-3">
                {footerLinks.developers.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="ml-1 w-3 h-3" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 LightLink. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Built for Chromion Hackathon 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 