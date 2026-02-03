import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Guide } from './pages/Guide'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-100">
      <Navbar />
      <main className="flex-1 pt-14">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-white px-6 py-4">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-2 font-mono text-default text-white/70 md:flex-row md:justify-between">
          <span>&copy; {new Date().getFullYear()} C Learn</span>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzFDtRXTfHPrqKQmFJwWrtCWsRXJmShrCrWVLdWVbKpWbJZPVVkfBThznwwxBQRGSglMnKsCWzXjRSB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d4ff] hover:underline transition-colors"
          >
            borismirkovic11 [at] gmail [dot] com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
