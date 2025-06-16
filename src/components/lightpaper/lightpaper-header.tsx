import Link from 'next/link'
import { ArrowLeft, Download, Share2, Menu } from 'lucide-react'

interface LightpaperHeaderProps {
  onToggleSidebar?: () => void
}

export function LightpaperHeader({ onToggleSidebar }: LightpaperHeaderProps) {
  const handleDownload = () => {
    // Create a link to download the whitepaper
    const link = document.createElement('a')
    link.href = '/whitepaper.md'
    link.download = 'lightlink-whitepaper.md'
    link.click()
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'LightLink Lightpaper',
        text: 'Revolutionary Cross-Chain State Verification Through Zero-Knowledge Proof Aggregation',
        url: window.location.href,
      })
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Back navigation and menu */}
          <div className="flex items-center space-x-4">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium hidden sm:inline">Back to Home</span>
            </Link>
          </div>

          {/* Center - Title */}
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold text-white">LightLink Lightpaper</h1>
            <p className="text-sm text-gray-400">Cross-Chain State Verification</p>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
            
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 