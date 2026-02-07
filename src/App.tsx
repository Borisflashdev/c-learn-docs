import { useEffect, useState, type ReactNode } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Guide } from './pages/Guide'
import { Examples } from './pages/Examples'
import { Roadmap } from './pages/Roadmap'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { useTheme } from './context/ThemeContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const validRoutes = ['/home', '/guide', '/examples', '/roadmap', '/about']

function InitialLoader() {
  const { pathname } = useLocation()
  const isValid = validRoutes.some((r) => pathname === r || pathname.startsWith(r + '/'))
  const { color } = useTheme()
  const [done, setDone] = useState(!isValid)
  const [progress, setProgress] = useState(0)
  const total = 30

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= total) {
          clearInterval(interval)
          return total
        }
        return p + 1
      })
    }, 66)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= total) {
      const timer = setTimeout(() => setDone(true), 200)
      return () => clearTimeout(timer)
    }
  }, [progress])

  if (done) return null

  const filled = '='.repeat(progress)
  const empty = ' '.repeat(total - progress)
  const percent = Math.round((progress / total) * 100)

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-mono">
      <p className="text-default text-white/70">
        <span style={{ color }}>$</span> initializing c-learn docs...
      </p>
      <p className="mt-4 text-default" style={{ color }}>
        [{filled}{empty}] {percent}%
      </p>
      <p className="mt-3 text-sm text-white/40">please wait</p>
    </div>
  )
}

function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const baseRoute = '/' + pathname.split('/')[1]

  return (
    <div key={baseRoute} className="page-transition">
      {children}
    </div>
  )
}

function App() {
  const { color } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-100">
      <InitialLoader />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-14">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/guide/*" element={<Guide />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <footer className="border-t border-white px-6 py-4">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-2 font-mono text-default text-white/70 md:flex-row md:justify-between">
          <span>&copy; {new Date().getFullYear()} C Learn</span>
          <a
            href="https://mail.google.com/mail/?view=cm&to=borismirkovic11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{
              color: isHovered ? color : undefined,
              textDecoration: isHovered ? 'underline' : 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            borismirkovic11[at]gmail[dot]com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
