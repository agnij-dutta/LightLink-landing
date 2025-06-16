'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, Github, ExternalLink } from 'lucide-react'
import { 
  EthereumIcon, 
  ArbitrumIcon, 
  OptimismIcon, 
  AvalancheIcon, 
  ChainlinkIcon 
} from '@/components/icons/chain-icons'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-700/10 mb-8">
                                    <span className="mr-2">🏆</span>
                                    Chromion Hackathon 2025 Winner
                                </div>
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                                    Trustless <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cross-Chain</span> Verification
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg text-gray-600">
                                    LightLink enables decentralized cross-chain state verification through ZK proof aggregation. 
                                    Verify any blockchain state without running heavy clients.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-8 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                        <Link href="#demo">
                                            <span className="text-nowrap">Try Demo</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="px-8 text-base border-gray-300 hover:bg-gray-50">
                                        <Link href="https://github.com/agnij-dutta/LightLink" target="_blank">
                                            <Github className="mr-2 h-4 w-4" />
                                            <span className="text-nowrap">View on GitHub</span>
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>

                                <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                        <span>Live on 6+ Networks</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                        <span>ZK Powered</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none order-first ml-auto h-56 w-full sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl opacity-60"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-3xl"></div>
                                <div className="relative h-full flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-8 p-8">
                                        <div className="col-span-3 text-center mb-4">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Multi-Chain Network</h3>
                                            <p className="text-gray-600">Connecting blockchains seamlessly</p>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 p-4 bg-white/80 rounded-xl shadow-sm">
                                            <EthereumIcon className="w-12 h-12" />
                                            <span className="text-sm font-medium text-gray-700">Ethereum</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 p-4 bg-white/80 rounded-xl shadow-sm">
                                            <ArbitrumIcon className="w-12 h-12" />
                                            <span className="text-sm font-medium text-gray-700">Arbitrum</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 p-4 bg-white/80 rounded-xl shadow-sm">
                                            <OptimismIcon className="w-12 h-12" />
                                            <span className="text-sm font-medium text-gray-700">Optimism</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 p-4 bg-white/80 rounded-xl shadow-sm">
                                            <ChainlinkIcon className="w-12 h-12" />
                                            <span className="text-sm font-medium text-gray-700">Chainlink</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2 p-4 bg-white/80 rounded-xl shadow-sm">
                                            <AvalancheIcon className="w-12 h-12" />
                                            <span className="text-sm font-medium text-gray-700">Avalanche</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50 pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm text-gray-600">Powered by</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex items-center">
                                        <ChainlinkIcon className="h-8 w-8" />
                                        <span className="ml-3 text-lg font-semibold text-gray-700">Chainlink</span>
                                    </div>
                                    <div className="flex items-center">
                                        <EthereumIcon className="h-8 w-8" />
                                        <span className="ml-3 text-lg font-semibold text-gray-700">Ethereum</span>
                                    </div>
                                    <div className="flex items-center">
                                        <ArbitrumIcon className="h-8 w-8" />
                                        <span className="ml-3 text-lg font-semibold text-gray-700">Arbitrum</span>
                                    </div>
                                    <div className="flex items-center">
                                        <OptimismIcon className="h-8 w-8" />
                                        <span className="ml-3 text-lg font-semibold text-gray-700">Optimism</span>
                                    </div>

                                    <div className="flex items-center">
                                        <AvalancheIcon className="h-8 w-8" />
                                        <span className="ml-3 text-lg font-semibold text-gray-700">Avalanche</span>
                                    </div>
                                </InfiniteSlider>

                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Demo', href: '#demo' },
    { name: 'Lightpaper', href: '/lightpaper' },
    { name: 'Docs', href: '#docs' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group bg-white/80 backdrop-blur-md fixed z-20 w-full border-b border-gray-200">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-600 hover:text-gray-900 block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-600 hover:text-gray-900 block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-300 hover:bg-gray-50">
                                    <Link href="#docs">
                                        <span>Documentation</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    <Link href="#demo">
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

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-3', className)}>
            <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LightLink
            </span>
        </div>
    )
} 