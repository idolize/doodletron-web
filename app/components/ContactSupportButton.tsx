'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogBackdrop, DialogTitle, CloseButton } from '@headlessui/react'
import XMarkIcon from '@/app/icons/xmark.svg'

export function ContactSupportButton() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsContactModalOpen(true)}
        className="inline-block bg-doodle-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-doodle-orange/90 transition-colors"
      >
        Contact Support
      </button>

      {/* Contact Support Modal */}
      <Dialog
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        transition
        className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-white border border-gray-200 p-8 rounded-lg relative">
            <div className="flex justify-between items-start">
              <DialogTitle className="text-xl font-bold text-gray-900">Contact Support</DialogTitle>
              <CloseButton aria-label="Close" className="absolute top-5 right-5 text-gray-600 hover:text-gray-900">
                <XMarkIcon className="w-5 h-5" />
              </CloseButton>
            </div>

            <p className="text-gray-600">
              Get direct help from our support team. We typically respond within 48 hours.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800">
                    <strong>For bugs or technical issues:</strong> Please use the "Contact Support" button inside the
                    Doodletron AI app. This provides additional telemetry data that helps us diagnose issues faster.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="mailto:hello@doodletron.ai"
                className="flex-1 bg-doodle-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-doodle-orange/90 transition-colors text-center"
              >
                Send Email
              </a>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
