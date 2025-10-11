import Link from 'next/link'
import ArrowLeftIcon from '@/app/icons/arrow-left.svg'

export default function ProseDocument({
  title,
  children,
  meta,
  className,
}: {
  title?: string
  children: React.ReactNode
  meta?: { lastUpdated?: string }
  className?: string
}) {
  return (
    <div className={`min-h-screen bg-doodle-bg/25 ${className}`}>
      {/* Header */}
      {title ? (
        <header className="bg-white/80 backdrop-blur-sm py-12 text-gray-600">
          <div className="container mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-doodle-orange transition-colors flex items-center"
              >
                <ArrowLeftIcon className="h-3 w-3 mr-1.5" />
                Back to Home
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {meta?.lastUpdated && <p className="mt-2 text-gray-600">Last updated: {meta.lastUpdated}</p>}
          </div>
        </header>
      ) : null}

      {/* Content */}
      <div className="container mx-auto px-6 py-12 pb-32 max-w-3xl">
        <article className="prose text-gray-800 prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-ul:marker:text-gray-600 prose-ol:marker:text-gray-600 prose-hr:border-gray-400">
          {children}
        </article>
      </div>
    </div>
  )
}
