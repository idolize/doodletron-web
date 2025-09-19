import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-doodle-bg">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/icon_reg.png" alt="Doodletron AI" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-gray-900">
                doodletron<span className="text-doodle-orange">AI</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-doodle-orange font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-doodle-orange font-medium">
                Features
              </a>
              <a href="#faq" className="text-gray-700 hover:text-doodle-orange font-medium">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background clouds */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/clouds_small.png"
            alt=""
            width={200}
            height={100}
            className="absolute top-20 left-10 opacity-30 float-animation"
          />
          <Image
            src="/clouds_small.png"
            alt=""
            width={150}
            height={75}
            className="absolute top-40 right-20 opacity-20 float-animation-delayed"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* App Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/icon_reg.png"
                  alt="Doodletron AI App Icon"
                  width={120}
                  height={120}
                  className="rounded-3xl shadow-card"
                />
                <div className="absolute -top-2 -right-2 bg-doodle-purple text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  NEW!
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Kids' Art into <span className="text-doodle-orange">AI Magic</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Watch your child's drawings come to life with the power of artificial intelligence. Turn simple sketches
              into amazing, detailed artwork!
            </p>

            {/* Daily Creativity Card */}
            <div className="bg-white rounded-2xl shadow-card p-6 mb-10 max-w-md mx-auto">
              <div className="flex items-center space-x-4">
                <div className="bg-doodle-orange/20 p-3 rounded-full">
                  <svg className="w-8 h-8 text-doodle-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Daily Creativity</h3>
                  <p className="text-gray-600">You have 2 free art credits!</p>
                </div>
                <button className="bg-doodle-purple text-white px-4 py-2 rounded-full font-bold text-sm shadow-button-3d btn-3d hover:shadow-button-3d-hover active:shadow-button-3d-active">
                  Get More
                </button>
              </div>
            </div>

            {/* TestFlight Button */}
            <div className="space-y-4">
              <a
                href="https://testflight.apple.com/join/your-testflight-code"
                className="inline-block bg-doodle-orange text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-button-3d btn-3d hover:shadow-button-3d-hover active:shadow-button-3d-active transform hover:scale-105 transition-all duration-200"
              >
                🎨 Try Doodletron AI on TestFlight
              </a>
              <p className="text-sm text-gray-600">Available for iOS • TestFlight Beta</p>
            </div>

            {/* Feature Preview */}
            <div className="mt-16 bg-white rounded-3xl shadow-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-doodle-bg rounded-2xl p-6 mb-4">
                    <div className="w-16 h-16 bg-doodle-orange/20 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-doodle-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">1. Draw</h3>
                  <p className="text-gray-600 text-sm">Let your child create their masterpiece</p>
                </div>

                <div className="text-center">
                  <div className="bg-doodle-bg rounded-2xl p-6 mb-4">
                    <div className="w-16 h-16 bg-doodle-purple/20 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-doodle-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">2. Upload</h3>
                  <p className="text-gray-600 text-sm">Take a photo or upload the drawing</p>
                </div>

                <div className="text-center">
                  <div className="bg-doodle-bg rounded-2xl p-6 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-doodle-orange to-doodle-purple rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">3. Magic!</h3>
                  <p className="text-gray-600 text-sm">Watch AI transform it into amazing art</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <Image src="/icon_reg.png" alt="Doodletron AI" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-gray-900">
                doodletron<span className="text-doodle-orange">AI</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">Bringing creativity to life with AI magic</p>
            <div className="text-sm text-gray-500">© 2024 Doodletron AI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
