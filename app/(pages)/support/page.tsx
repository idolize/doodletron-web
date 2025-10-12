import { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FeedbackBoard } from '../../components/FeedbackBoard'
import { ContactSupportButton } from '../../components/ContactSupportButton'

export const metadata: Metadata = {
  title: 'Support - Doodletron AI',
}

export default function Support() {
  return (
    <div className="min-h-screen bg-doodle-bg">
      <Header />

      <main className="relative overflow-hidden">
        {/* Background clouds pattern */}
        <div className="absolute inset-x-0 top-0 h-100 pointer-events-none clouds-background z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Need help with Doodletron AI? We&apos;re here to assist you with any questions or issues you might have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Support */}
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="text-center">
                <div className="bg-doodle-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Email Support</h2>
                <p className="text-gray-600 mb-6">
                  Get direct help from our support team. We typically respond within 48 hours.
                </p>
                <ContactSupportButton />
              </div>
            </div>

            {/* Community Feedback */}
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="text-center">
                <div className="bg-doodle-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Community Feedback</h2>
                <p className="text-gray-600 mb-6">
                  Share feedback, report bugs, or request new features with our community.
                </p>
                <div className="text-sm text-gray-500">Use the feedback form below</div>
              </div>
            </div>
          </div>

          {/* Canny Feedback Form */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Feedback & Feature Requests</h2>
            <div className="min-h-[600px]">
              <FeedbackBoard />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
