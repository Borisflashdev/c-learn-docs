import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export function NotFound() {
  const location = useLocation()
  const { color } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1" style={{ color }}>
        404 Page Not Found
      </h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat 404.tsx</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Page{' '}
            <span style={{ color }}>"{location.pathname}"</span> not found.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The requested path does not match any known route.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Try navigating back to{' '}
            <Link
              to="/home"
              className="underline transition-colors"
              style={{ color: isHovered ? color : undefined }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              /home
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
