'use client'
import React from 'react'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { ChainlinkIcon, EthereumIcon, ArbitrumIcon, OptimismIcon, AvalancheIcon } from '@/components/icons/chain-icons'
import { TrendingUp, Shield, Zap, Globe, Code } from 'lucide-react'

const features = [
  {
    Icon: TrendingUp,
    name: "95% Cost Reduction",
    description: "Dramatically reduce gas costs through intelligent proof aggregation",
    href: "https://applightlink.vercel.app/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/30 to-purple-800/30 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      </div>
    ),
  },
  {
    Icon: Shield,
    name: "Trustless Security",
    description: "Zero-knowledge proofs ensure complete security without trust assumptions",
    href: "https://applightlink.vercel.app/",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-800/30 to-teal-800/30 opacity-60">
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20 blur-2xl"></div>
      </div>
    ),
  },
  {
    Icon: Globe,
    name: "Multi-Chain Network",
    description: "Connect and verify across 5+ major blockchain networks seamlessly",
    href: "https://applightlink.vercel.app/",
    cta: "View networks",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-800/30 to-orange-800/30 opacity-60">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="grid grid-cols-3 gap-4">
            <EthereumIcon className="w-8 h-8" />
            <ArbitrumIcon className="w-8 h-8" />
            <OptimismIcon className="w-8 h-8" />
            <AvalancheIcon className="w-8 h-8" />
            <ChainlinkIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Zap,
    name: "Lightning Fast",
    description: "Process thousands of proofs in seconds with recursive zk-SNARKs",
    href: "https://applightlink.vercel.app/",
    cta: "See benchmarks",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-orange-800/30 to-red-800/30 opacity-60">
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 blur-xl"></div>
      </div>
    ),
  },
  {
    Icon: ChainlinkIcon,
    name: "Chainlink Powered",
    description: "Built on Chainlink's decentralized infrastructure for maximum reliability",
    href: "https://applightlink.vercel.app/",
    cta: "Integration details",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-800/30 to-purple-800/30 opacity-60">
        <ChainlinkIcon className="absolute top-4 right-4 w-16 h-16 opacity-20" />
      </div>
    ),
  },
  {
    Icon: Code,
    name: "Developer Ready",
    description: "Comprehensive APIs, SDKs, and documentation for easy integration",
    href: "https://applightlink.vercel.app/",
    cta: "Start building",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-slate-700/30 to-zinc-700/30 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_25%,rgba(255,255,255,.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.1)_75%)] bg-[length:20px_20px] opacity-30"></div>
      </div>
    ),
  },
]

export function BentoSection() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-green-400 ring-1 ring-green-400/20 mb-4">
            <span className="mr-2">🚀</span>
            Benefits
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Built for the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience unparalleled performance, security, and scalability with LightLink&apos;s innovative approach
          </p>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
} 