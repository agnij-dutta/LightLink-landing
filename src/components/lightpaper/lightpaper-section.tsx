import { renderMarkdownContent } from '@/lib/markdown-parser'

interface Section {
  id: string
  title: string
  level: number
  content: string
  subsections: Section[]
}

interface LightpaperSectionProps {
  section: Section
  isFirst: boolean
}

export function LightpaperSection({ section, isFirst }: LightpaperSectionProps) {
  const getHeadingComponent = (level: number, title: string, id: string) => {
    const baseClasses = "font-bold text-white mb-4"
    const commonProps = { id, className: baseClasses }
    
    switch (level) {
      case 1:
        return <h1 {...commonProps} className={`${baseClasses} text-2xl sm:text-3xl lg:text-4xl ${isFirst ? 'mb-4 lg:mb-6' : 'mt-8 lg:mt-12 mb-4 lg:mb-6'}`}>{title}</h1>
      case 2:
        return <h2 {...commonProps} className={`${baseClasses} text-xl sm:text-2xl lg:text-3xl mt-6 lg:mt-10 mb-3 lg:mb-5`}>{title}</h2>
      case 3:
        return <h3 {...commonProps} className={`${baseClasses} text-lg sm:text-xl lg:text-2xl mt-5 lg:mt-8 mb-3 lg:mb-4`}>{title}</h3>
      case 4:
        return <h4 {...commonProps} className={`${baseClasses} text-base sm:text-lg lg:text-xl mt-4 lg:mt-6 mb-2 lg:mb-3`}>{title}</h4>
      case 5:
        return <h5 {...commonProps} className={`${baseClasses} text-sm sm:text-base lg:text-lg mt-3 lg:mt-5 mb-2 lg:mb-3`}>{title}</h5>
      case 6:
        return <h6 {...commonProps} className={`${baseClasses} text-sm sm:text-base mt-3 lg:mt-4 mb-2`}>{title}</h6>
      default:
        return <h2 {...commonProps} className={`${baseClasses} text-xl sm:text-2xl lg:text-3xl mt-6 lg:mt-10 mb-3 lg:mb-5`}>{title}</h2>
    }
  }

  const formatContent = (content: string) => {
    if (!content.trim()) return ''
    
    // Split content into blocks (separated by double newlines)
    const blocks = content.split('\n\n').filter(block => block.trim())
    
    return blocks.map((block, index) => {
      const trimmedBlock = block.trim()
      
      // Skip empty blocks
      if (!trimmedBlock) return null
      
      // Handle code blocks first (before other processing)
      if (trimmedBlock.startsWith('```')) {
        const codeMatch = trimmedBlock.match(/```(\w+)?\n?([\s\S]*?)```/)
        if (codeMatch) {
          const code = codeMatch[2] || trimmedBlock.replace(/```/g, '')
          return (
            <pre key={index} className="bg-gray-700 p-3 lg:p-4 rounded-lg overflow-x-auto mb-4 lg:mb-6 border border-gray-600">
              <code className="text-xs sm:text-sm text-gray-100 whitespace-pre">{code}</code>
            </pre>
          )
        }
      }
      
      // Handle tables (markdown table syntax)
      if (trimmedBlock.includes('|') && trimmedBlock.includes('---')) {
        const lines = trimmedBlock.split('\n')
        const headerRow = lines[0]
        const separatorRow = lines[1]
        const dataRows = lines.slice(2)
        
        if (headerRow.includes('|') && separatorRow.includes('---')) {
          const headers = headerRow.split('|').map(h => h.trim()).filter(h => h)
          const rows = dataRows.map(row => 
            row.split('|').map(cell => cell.trim()).filter(cell => cell)
          )
          
          return (
            <div key={index} className="mb-4 lg:mb-6 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-600 bg-gray-800/50 text-sm lg:text-base">
                <thead>
                  <tr className="bg-gray-700/50">
                    {headers.map((header, headerIndex) => (
                      <th key={headerIndex} className="border border-gray-600 px-2 lg:px-4 py-2 text-left text-white font-semibold">
                        <span dangerouslySetInnerHTML={{ __html: renderMarkdownContent(header) }} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-700/30">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-600 px-2 lg:px-4 py-2 text-gray-300">
                          <span dangerouslySetInnerHTML={{ __html: renderMarkdownContent(cell) }} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      }
      
      // Handle unordered lists
      if (trimmedBlock.includes('\n- ') || trimmedBlock.startsWith('- ')) {
        const items = trimmedBlock.split('\n').filter(line => line.trim().startsWith('- '))
        return (
          <ul key={index} className="list-disc pl-4 lg:pl-6 mb-4 lg:mb-6 space-y-1 lg:space-y-2">
            {items.map((item, itemIndex) => {
              const itemContent = item.replace(/^- /, '').trim()
              return (
                <li key={itemIndex} className="text-gray-300 text-sm lg:text-base">
                  <span dangerouslySetInnerHTML={{ 
                    __html: renderMarkdownContent(itemContent) 
                  }} />
                </li>
              )
            })}
          </ul>
        )
      }
      
      // Handle ordered lists
      if (/^\d+\.\s/.test(trimmedBlock)) {
        const items = trimmedBlock.split('\n').filter(line => /^\d+\.\s/.test(line.trim()))
        return (
          <ol key={index} className="list-decimal pl-4 lg:pl-6 mb-4 lg:mb-6 space-y-1 lg:space-y-2">
            {items.map((item, itemIndex) => {
              const itemContent = item.replace(/^\d+\.\s/, '').trim()
              return (
                <li key={itemIndex} className="text-gray-300 text-sm lg:text-base">
                  <span dangerouslySetInnerHTML={{ 
                    __html: renderMarkdownContent(itemContent) 
                  }} />
                </li>
              )
            })}
          </ol>
        )
      }
      
      // Handle block quotes
      if (trimmedBlock.startsWith('>')) {
        const quoteContent = trimmedBlock.replace(/^>\s?/gm, '').trim()
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-4 lg:pl-6 py-3 lg:py-4 mb-4 lg:mb-6 bg-blue-900/20 rounded-r-lg">
            <div className="text-gray-300 italic text-sm lg:text-base">
              <span dangerouslySetInnerHTML={{ 
                __html: renderMarkdownContent(quoteContent) 
              }} />
            </div>
          </blockquote>
        )
      }
      
      // Handle headers within content
      if (trimmedBlock.match(/^#{3,6}\s/)) {
        return (
          <div key={index} className="mb-4 lg:mb-6">
            <span dangerouslySetInnerHTML={{ 
              __html: renderMarkdownContent(trimmedBlock) 
            }} />
          </div>
        )
      }
      
      // Handle horizontal rules
      if (trimmedBlock === '---' || trimmedBlock === '***') {
        return <hr key={index} className="border-gray-600 my-8" />
      }
      
      // Regular paragraph - render with markdown
      return (
        <div key={index} className="mb-4 lg:mb-6 text-gray-300 leading-relaxed break-words text-sm lg:text-base">
          <span dangerouslySetInnerHTML={{ 
            __html: renderMarkdownContent(trimmedBlock) 
          }} />
        </div>
      )
    }).filter(Boolean)
  }

  return (
    <section className="w-full overflow-hidden">
      {getHeadingComponent(section.level, section.title, section.id)}
      
      <div className="prose prose-gray max-w-none break-words">
        {formatContent(section.content)}
      </div>
      
      {section.subsections.length > 0 && (
        <div className="mt-6 lg:mt-8 space-y-6 lg:space-y-8">
          {section.subsections.map((subsection) => (
            <div key={subsection.id} className="w-full overflow-hidden">
              {getHeadingComponent(subsection.level, subsection.title, subsection.id)}
              <div className="prose prose-gray max-w-none break-words">
                {formatContent(subsection.content)}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
} 