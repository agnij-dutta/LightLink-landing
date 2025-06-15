'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { Zap, Shield, Network, Cpu, Globe, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Aggregate multiple ZK proofs into a single succinct proof, reducing verification time by 90%",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Trustless Security",
    description: "Zero-knowledge proofs ensure complete trustlessness without compromising on security",
    gradient: "from-green-400 to-blue-500"
  },
  {
    icon: Network,
    title: "Multi-Chain Support",
    description: "Seamlessly verify state across 6+ major blockchains including Ethereum, Arbitrum, and Polygon",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Cpu,
    title: "Gas Optimized",
    description: "Reduce on-chain verification costs by up to 95% through intelligent proof aggregation",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Globe,
    title: "Decentralized Oracle",
    description: "Powered by Chainlink's decentralized infrastructure for maximum reliability and uptime",
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    icon: Lock,
    title: "Enterprise Ready",
    description: "Production-ready infrastructure with comprehensive testing and audit-ready codebase",
    gradient: "from-red-400 to-pink-500"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-blue-400/20 mb-4">
            <span className="mr-2">⚡</span>
            Features
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">LightLink</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of cross-chain verification with cutting-edge ZK technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  feature: {
    icon: React.ElementType
    title: string
    description: string
    gradient: string
  }
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon
  
  return (
    <div 
      className={cn(
        "group relative p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:border-transparent",
        "hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300",
        "hover:-translate-y-2"
      )}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Gradient background on hover */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        "bg-gradient-to-br", feature.gradient, "p-[1px]"
      )}>
        <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={cn(
          "w-12 h-12 rounded-xl mb-4 flex items-center justify-center",
          "bg-gradient-to-br", feature.gradient,
          "group-hover:scale-110 transition-transform duration-300"
        )}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100">
          {feature.title}
        </h3>
        
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
} 