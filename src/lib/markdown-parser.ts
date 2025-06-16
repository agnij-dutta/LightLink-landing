interface Section {
  id: string
  title: string
  level: number
  content: string
  subsections: Section[]
}

export function parseMarkdownContent(markdown: string): Section[] {
  const lines = markdown.split('\n')
  const sections: Section[] = []
  
  const createId = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }

  // First, create the Abstract section from the preamble
  let preambleEnd = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.match(/^##\s+1\.\s/)) {
      preambleEnd = i
      break
    }
  }

  if (preambleEnd > 0) {
    const preambleContent = lines.slice(0, preambleEnd).join('\n').trim()
    sections.push({
      id: 'abstract',
      title: 'Abstract',
      level: 2,
      content: preambleContent,
      subsections: []
    })
  }

  // Now parse all the main sections (## level headings)
  let currentMainSection: Section | null = null
  let currentContent: string[] = []
  let currentSubsection: Section | null = null
  let subsectionContent: string[] = []

  for (let i = preambleEnd; i < lines.length; i++) {
    const line = lines[i]
    const headingMatch = line.match(/^(#{2,6})\s+(.+)$/)

    if (headingMatch) {
      const level = headingMatch[1].length
      const title = headingMatch[2].trim()

      if (level === 2) {
        // This is a new main section - finish the previous one
        if (currentSubsection && subsectionContent.length > 0) {
          currentSubsection.content = subsectionContent.join('\n').trim()
          subsectionContent = []
        }
        if (currentMainSection && currentContent.length > 0) {
          currentMainSection.content = currentContent.join('\n').trim()
          currentContent = []
        }

        // Create new main section
        currentMainSection = {
          id: createId(title),
          title,
          level,
          content: '',
          subsections: []
        }
        sections.push(currentMainSection)
        currentSubsection = null
      } else if (level >= 3 && currentMainSection) {
        // This is a subsection - finish the previous subsection
        if (currentSubsection && subsectionContent.length > 0) {
          currentSubsection.content = subsectionContent.join('\n').trim()
          subsectionContent = []
        }

        // Add any content before this subsection to the main section
        if (currentContent.length > 0) {
          currentMainSection.content = (currentMainSection.content + '\n' + currentContent.join('\n')).trim()
          currentContent = []
        }

        // Create new subsection
        currentSubsection = {
          id: createId(title),
          title,
          level,
          content: '',
          subsections: []
        }
        currentMainSection.subsections.push(currentSubsection)
      }
    } else {
      // Regular content line
      if (currentSubsection) {
        subsectionContent.push(line)
      } else if (currentMainSection) {
        currentContent.push(line)
      }
    }
  }

  // Finish the last section and subsection
  if (currentSubsection && subsectionContent.length > 0) {
    currentSubsection.content = subsectionContent.join('\n').trim()
  }
  if (currentMainSection && currentContent.length > 0) {
    currentMainSection.content = (currentMainSection.content + '\n' + currentContent.join('\n')).trim()
  }

  return sections
}

export function renderMarkdownContent(content: string): string {
  if (!content) return ''
  
  let result = content
  
  // Handle headers (##, ###, ####, etc.) - convert to appropriate HTML
  result = result.replace(/^##### (.*$)/gm, '<h5 class="text-lg font-bold text-white mt-5 mb-3">$1</h5>')
  result = result.replace(/^#### (.*$)/gm, '<h4 class="text-xl font-bold text-white mt-6 mb-3">$1</h4>')
  result = result.replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold text-white mt-8 mb-4">$1</h3>')
  result = result.replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-white mt-10 mb-5">$1</h2>')
  
  // Handle bold text
  result = result.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
  
  // Handle italic text  
  result = result.replace(/\*(.*?)\*/g, '<em class="text-gray-200 italic">$1</em>')
  
  // Handle inline code (but not code blocks)
  result = result.replace(/`([^`\n]+)`/g, '<code class="bg-gray-700 text-blue-300 px-2 py-1 rounded text-sm border border-gray-600">$1</code>')
  
  // Handle links
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
  
  // Handle line breaks but preserve paragraphs
  result = result.replace(/\n{2,}/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
  
  // Wrap in paragraph tags if not already wrapped
  if (!result.startsWith('<')) {
    result = '<p class="text-gray-300 mb-4 leading-relaxed">' + result + '</p>'
  }
  
  return result
} 