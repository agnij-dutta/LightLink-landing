'use client'
import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { Button } from '@/components/ui/button'
import { Play, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-orange-400 ring-1 ring-orange-400/20 mb-4">
            <span className="mr-2">🎮</span>
            Interactive Demo
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            See <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">LightLink</span> in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of cross-chain verification with our live demo
          </p>
        </div>

        <ContainerScroll
          titleComponent={
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Cross-Chain State Verification Dashboard
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Watch as LightLink aggregates proofs from multiple blockchains and delivers 
                trustless verification across networks in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Play className="mr-2 h-4 w-4" />
                  Launch Demo
                </Button>
                <Button size="lg" variant="outline" asChild className="border-gray-600 text-white hover:bg-gray-800">
                  <Link href="https://github.com/lightlink-network" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          }
        >
          <DemoInterface />
        </ContainerScroll>

        {/* Demo Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Select Networks</h4>
            <p className="text-sm text-gray-300">Choose which blockchains you want to verify state from</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Generate Proofs</h4>
            <p className="text-sm text-gray-300">Watch as ZK proofs are generated and aggregated in real-time</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Verify Cross-Chain</h4>
            <p className="text-sm text-gray-300">See the aggregated proof verified across multiple networks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function DemoInterface() {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-white font-medium">LightLink Dashboard</div>
          <div className="text-white text-sm">Live Demo</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Network Selection */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Select Networks</h4>
            <div className="space-y-3">
              {['Ethereum', 'Arbitrum', 'Optimism', 'Base', 'Polygon', 'Avalanche'].map((network) => (
                <div key={network} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-white">{network}</span>
                  </div>
                  <div className="text-sm text-gray-300">Connected</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Proof Status */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Proof Generation</h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-blue-300">State Collection</span>
                  <span className="text-sm text-blue-400">Complete</span>
                </div>
                <div className="w-full bg-blue-800/30 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-purple-300">ZK Proof Generation</span>
                  <span className="text-sm text-purple-400">In Progress</span>
                </div>
                <div className="w-full bg-purple-800/30 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                </div>
              </div>

              <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-300">Proof Aggregation</span>
                  <span className="text-sm text-gray-400">Pending</span>
                </div>
                <div className="w-full bg-gray-600/30 rounded-full h-2">
                  <div className="bg-gray-500 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1,247</div>
              <div className="text-sm text-gray-400">Proofs Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">95%</div>
              <div className="text-sm text-gray-400">Gas Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">2.3s</div>
              <div className="text-sm text-gray-400">Avg. Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">6</div>
              <div className="text-sm text-gray-400">Networks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 