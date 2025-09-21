import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-doodle-bg">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Doodletron AI" width={185} height={26} className="w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-doodle-orange font-medium">
                Home
              </a>
              {/* <a href="#features" className="text-gray-700 hover:text-doodle-orange font-medium">
                Features
              </a>
              <a href="#faq" className="text-gray-700 hover:text-doodle-orange font-medium">
                FAQ
              </a> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background clouds pattern */}
        <div className="absolute inset-x-0 top-0 h-100 pointer-events-none clouds-background z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            {/* App Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/icon_reg.png"
                  alt="Doodletron AI App Icon"
                  width={120}
                  height={120}
                  quality={100}
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

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Watch your child's drawings come to life with the power of artificial intelligence. Turn simple sketches
              into amazing, detailed artwork!
            </p>

            {/* TestFlight Button */}
            <div className="space-y-4">
              <a
                href="https://testflight.apple.com/join/vN5NFJ9d"
                className="inline-block text-white px-8 py-4 font-bold text-lg shadow-button-3d btn-3d btn-3d-orange hover:shadow-button-3d-hover active:shadow-button-3d-active relative z-10"
              >
                🎨 Try Doodletron AI on TestFlight
              </a>
              <p className="text-sm text-gray-600">Available for iOS • TestFlight Beta</p>
            </div>

            {/* Before/After Example */}
            <div className="mt-16 bg-white rounded-3xl shadow-card p-8 max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">See the Magic in Action</h2>

              {/* Mobile Layout */}
              <div className="block md:hidden space-y-6">
                {/* Before */}
                <div className="text-center">
                  <div className="relative mb-4 inline-block">
                    <Image
                      src="/examples/egAvaBefore.jpg"
                      alt="Child's original drawing"
                      width={280}
                      height={280}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -top-3 -left-3 bg-doodle-purple text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      BEFORE
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Original Drawing</h3>
                  <p className="text-gray-600 text-sm">Your child's creative masterpiece</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-b from-doodle-purple to-doodle-orange p-3 rounded-full shadow-lg">
                    <svg
                      className="w-8 h-8 text-white transform rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div className="text-center">
                  <div className="relative mb-4 inline-block">
                    <Image
                      src="/examples/egAvaAfter.jpg"
                      alt="AI-enhanced artwork"
                      width={280}
                      height={280}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -top-3 -right-3 bg-doodle-orange text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      AFTER
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">AI Magic</h3>
                  <p className="text-gray-600 text-sm">Transformed into stunning artwork</p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-center gap-8">
                {/* Before */}
                <div className="text-center flex-shrink-0">
                  <div className="relative mb-4 inline-block">
                    <Image
                      src="/examples/egAvaBefore.jpg"
                      alt="Child's original drawing"
                      width={300}
                      height={300}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -top-3 -left-3 bg-doodle-purple text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      BEFORE
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Original Drawing</h3>
                  <p className="text-gray-600 text-sm">Your child's creative masterpiece</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-doodle-purple to-doodle-orange p-3 rounded-full shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div className="text-center flex-shrink-0">
                  <div className="relative mb-4 inline-block">
                    <Image
                      src="/examples/egAvaAfter.jpg"
                      alt="AI-enhanced artwork"
                      width={300}
                      height={300}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -top-3 -right-3 bg-doodle-orange text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      AFTER
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">AI Magic</h3>
                  <p className="text-gray-600 text-sm">Transformed into stunning artwork</p>
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
            <div className="flex justify-center items-center mb-4">
              <Image src="/logo.png" alt="Doodletron AI" width={185} height={26} className="w-auto" />
            </div>
            <div className="text-sm text-gray-500">© 2025 Idol Software. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
