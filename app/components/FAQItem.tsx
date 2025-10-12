'use client'

import { useState, useRef, useEffect } from 'react'
import ChevronDownIcon from '@/app/icons/chevron-down.svg'
import MarkdownContent from './MarkdownContent'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [height, setHeight] = useState<number | undefined>(undefined)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        setHeight(entries[0].contentRect.height)
      })

      resizeObserver.observe(contentRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className="flex w-full flex-col gap-0 rounded-lg shadow-card bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-doodle-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ease-in-out px-6 flex h-fit w-full items-center justify-between gap-1 break-words py-4 text-left transition-all duration-150 hover:bg-white/50 focus:bg-white/50"
      >
        <p className="flex-grow break-words font-medium text-base sm:text-base md:text-base lg:text-lg text-gray-900">
          {question}
        </p>
        <ChevronDownIcon
          className={`flex-none w-5 h-5 text-gray-500 transition-transform duration-150 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-[height] duration-150 ease-out"
        style={{ height: isOpen ? (height ? `${height}px` : 'auto') : '0' }}
      >
        <div ref={contentRef}>
          <div className="rounded-b-lg px-6 py-4 bg-white/50">
            <div className="text-base leading-relaxed text-gray-700">
              <MarkdownContent className="flex flex-col gap-4 faq-prose" content={answer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
