import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

interface Section {
  id: string
  title: string
  level: number
  content: string
  subsections: Section[]
}

interface LightpaperNavigationProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function LightpaperNavigation({ 
  sections, 
  activeSection, 
  onSectionClick 
}: LightpaperNavigationProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleExpanded = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const renderSection = (section: Section) => {
    const isActive = activeSection === section.id
    const isExpanded = expandedSections.has(section.id)
    const hasSubsections = section.subsections.length > 0
    
    return (
      <div key={section.id}>
        <div className="flex items-center">
          <button
            onClick={() => onSectionClick(section.id)}
            className={`
              flex-1 text-left px-3 py-2 lg:py-2 rounded-lg transition-colors text-xs lg:text-sm
              ${isActive 
                ? 'bg-blue-600 text-white font-medium' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }
            `}
          >
            <span className="truncate leading-relaxed">{section.title}</span>
          </button>
          
          {hasSubsections && (
            <button
              onClick={() => toggleExpanded(section.id)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        
        {hasSubsections && isExpanded && (
          <div className="ml-4 mt-1 space-y-1">
            {section.subsections.map(subsection => (
              <button
                key={subsection.id}
                onClick={() => onSectionClick(section.id)} // Keep parent section active
                className="w-full text-left px-3 py-1 text-xs text-gray-400 hover:text-gray-300 transition-colors"
              >
                {subsection.title}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-700 p-4 lg:p-6">
      <div className="mb-4 lg:mb-6 hidden lg:block">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">LightLink Lightpaper</h2>
        <p className="text-gray-400 text-sm mb-4">Cross-Chain State Verification</p>
        <div className="h-px bg-gray-700"></div>
      </div>
      
      <nav className="space-y-1 lg:space-y-2 max-h-[70vh] lg:max-h-none overflow-y-auto">
        {sections.map(section => renderSection(section))}
      </nav>
      
      <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-700 hidden lg:block">
        <div className="text-xs text-gray-400">
          <p className="font-medium mb-2">Document Info</p>
          <p>Version 1.0</p>
          <p>January 2025</p>
        </div>
      </div>
    </div>
  )
} 