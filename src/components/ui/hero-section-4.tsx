'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

import { EthereumIcon, ArbitrumIcon, OptimismIcon, AvalancheIcon, ChainlinkIcon, LightLinkLogo } from '@/components/icons/chain-icons'

import { Menu, X } from 'lucide-react'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden bg-black text-white">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                                    Trustless <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Cross-Chain</span> Verification
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg text-gray-300">
                                    LightLink enables decentralized cross-chain state verification through ZK proof aggregation. 
                                    Verify any blockchain state without running heavy clients.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                        <Link href="https://applightlink.vercel.app/">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>
                                    {/* <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base text-white hover:bg-white/10">
                                        <Link href="https://applightlink.vercel.app/">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button> */}
                                </div>
                            </div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="pointer-events-none order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain opacity-60"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-black pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:border-gray-700 md:pr-6">
                                <p className="text-center md:text-end text-sm text-gray-400">Supported Networks</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)] overflow-hidden">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={80}
                                    className="flex items-center">
                                    <div className="flex items-center justify-center min-w-[80px]">
                                        <EthereumIcon className="h-8 w-8" />
                                    </div>
                                    <div className="flex items-center justify-center min-w-[80px]">
                                        <ArbitrumIcon className="h-8 w-8" />
                                    </div>
                                    <div className="flex items-center justify-center min-w-[80px]">
                                        <OptimismIcon className="h-8 w-8" />
                                    </div>
                                    <div className="flex items-center justify-center min-w-[80px]">
                                        <AvalancheIcon className="h-8 w-8" />
                                    </div>
                                    <div className="flex items-center justify-center min-w-[80px]">
                                        <ChainlinkIcon className="h-8 w-8" />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-black via-transparent to-transparent absolute inset-y-0 left-0 w-20 pointer-events-none"></div>
                                <div className="bg-gradient-to-l from-black via-transparent to-transparent absolute inset-y-0 right-0 w-20 pointer-events-none"></div>
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
    { name: 'About', href: '#about' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
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
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
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
                                <Logo />
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
                                                    className="text-gray-300 hover:text-white block duration-150 relative group">
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
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    <Link href="https://applightlink.vercel.app/">
                                        <span>Launch App</span>
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

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <LightLinkLogo className="w-8 h-8" />
            <span className="text-xl font-bold text-white">LightLink</span>
        </div>
    )
} 