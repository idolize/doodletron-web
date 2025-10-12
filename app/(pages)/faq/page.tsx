import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import FAQItem from '../../components/FAQItem'
import faqData from '@/app/content/faq.yaml'

interface FAQItemType {
  question: string
  answer: string
}

interface FAQSection {
  name: string
  title: string
  questions: FAQItemType[]
}

interface FAQData {
  sections: FAQSection[]
}

export const metadata: Metadata = {
  title: 'FAQ - Doodletron AI',
}

const sections: FAQSection[] = (faqData as FAQData).sections

export default function FAQ() {
  return (
    <div className="min-h-screen bg-doodle-bg">
      <Header />

      <main className="relative overflow-hidden">
        {/* Background clouds pattern */}
        <div className="absolute inset-x-0 top-0 h-100 pointer-events-none clouds-background z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Everything you need to know about Doodletron AI. Can&apos;t find what you&apos;re looking for?&nbsp;
              <a href="/support" className="text-doodle-orange hover:text-doodle-orange/80 font-medium">
                Contact our support team
              </a>
              .
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section: FAQSection, sectionIndex: number) => (
              <div key={section.name} className="space-y-6">
                {/* Section Header */}
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
                  <div className="w-16 h-1 bg-doodle-orange mx-auto rounded-full"></div>
                </div>

                {/* Section Questions */}
                <div className="space-y-4">
                  {section.questions.map((faq: FAQItemType, questionIndex: number) => (
                    <FAQItem
                      key={`${section.name}-${questionIndex}`}
                      question={faq.question}
                      answer={faq.answer}
                      defaultOpen={sectionIndex === 0 && questionIndex === 0}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-card p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of Doodletron AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-block bg-doodle-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-doodle-orange/90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="https://testflight.apple.com/join/vN5NFJ9d"
                className="inline-block border border-doodle-orange text-doodle-orange px-6 py-3 rounded-lg font-medium hover:bg-doodle-orange/10 transition-colors"
              >
                Join TestFlight Beta
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
