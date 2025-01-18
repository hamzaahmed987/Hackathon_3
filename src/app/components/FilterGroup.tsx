import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FilterGroupProps {
  title: string
  items: string[]
}

export default function FilterGroup({ title, items }: FilterGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isExpanded && (
        <div className="space-y-2">
          {items.map((item) => (
            <label key={item} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

