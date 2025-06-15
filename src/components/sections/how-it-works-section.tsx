'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight, Database, Zap, CheckCircle, Network } from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: "State Collection",
    description: "Collect blockchain state data from multiple networks using Chainlink's decentralized infrastructure",
    details: "Our system monitors 6+ major blockchains, collecting state proofs and transaction data in real-time.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "ZK Proof Generation",
    description: "Generate individual zero-knowledge proofs for each blockchain state using recursive zk-SNARKs",
    details: "Each state change is cryptographically proven without revealing sensitive transaction details.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Network,
    title: "Proof Aggregation",
    description: "Combine multiple ZK proofs into a single succinct proof using advanced aggregation techniques",
    details: "Our recursive proof system compresses thousands of proofs into one, dramatically reducing costs.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: CheckCircle,
    title: "Cross-Chain Verification",
    description: "Deliver aggregated proofs across chains using Chainlink CCIP for trustless verification",
    details: "Any blockchain can now verify the state of any other blockchain with a single proof check.",
    color: "from-orange-500 to-red-500"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-purple-400/20 mb-4">
            <span className="mr-2">🔧</span>
            How It Works
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            The Magic Behind <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">LightLink</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we make cross-chain verification simple, secure, and lightning-fast
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-20 bg-gray-800 rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Technical Architecture</h3>
            <p className="text-gray-300">Built on cutting-edge cryptographic primitives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ZK</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Recursive zk-SNARKs</h4>
              <p className="text-sm text-gray-300">Advanced zero-knowledge proofs that can verify other proofs</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-2xl border border-green-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Chainlink Integration</h4>
              <p className="text-sm text-gray-300">VRF, Functions, Automation, and CCIP for decentralized operations</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-2xl border border-orange-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Gas Optimization</h4>
              <p className="text-sm text-gray-300">Single proof verification regardless of data volume</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface StepCardProps {
  step: {
    icon: React.ElementType
    title: string
    description: string
    details: string
    color: string
  }
  index: number
  isLast: boolean
}

function StepCard({ step, index, isLast }: StepCardProps) {
  const Icon = step.icon
  
  return (
    <div className="relative group">
      {/* Step number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm",
          "bg-gradient-to-r", step.color
        )}>
          {index + 1}
        </div>
      </div>
      
      {/* Arrow for desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-2 z-10 -translate-y-1/2">
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </div>
      )}
      
      {/* Card */}
      <div className={cn(
        "bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        "group-hover:border-transparent"
      )}>
        {/* Gradient border on hover */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-gradient-to-r", step.color, "p-[1px]"
        )}>
          <div className="w-full h-full bg-gray-800 rounded-2xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className={cn(
            "w-12 h-12 rounded-xl mb-4 flex items-center justify-center",
            "bg-gradient-to-r", step.color,
            "group-hover:scale-110 transition-transform duration-300"
          )}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-2">
            {step.title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-3">
            {step.description}
          </p>
          
          <p className="text-xs text-gray-400">
            {step.details}
          </p>
        </div>
      </div>
    </div>
  )
} 