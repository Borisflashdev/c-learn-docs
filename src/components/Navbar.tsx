import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme, themes } from '../context/ThemeContext'

const navLinks = [
  { id: 'home', label: 'Home', path: '/home' },
  { id: 'guide', label: 'Documentation', path: '/guide' },
  { id: 'github', label: 'GitHub', path: 'https://github.com/Borisflashdev/c-learn', external: true },
  { id: 'about', label: 'About', path: '/about' },
]

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { theme, setTheme, color } = useTheme()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
        setIsThemeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavigation = (link: typeof navLinks[0]) => {
    if ('external' in link && link.external) {
      window.open(link.path, '_blank')
    } else {
      navigate(link.path)
    }
    setIsMenuOpen(false)
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-black">
      {/* Mobile: Terminal prompt toggle */}
      <div className="md:hidden flex items-center px-4 py-3 border-b border-white">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center font-mono text-default text-white cursor-pointer"
        >
          <span style={{ color }}>$</span>
          <span className="ml-2">{isMenuOpen ? 'close' : 'menu'}</span>
          <span className="cursor-blink">_</span>
        </button>
      </div>

      {/* Mobile: Dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white menu-slide">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <div
                key={link.id}
                onClick={() => handleNavigation(link)}
                className={`flex items-center px-4 py-3 font-mono text-default cursor-pointer transition-colors
                  ${isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <span style={{ color }}>{'>'}</span>
                <span className="ml-2">{link.label.toLowerCase()}</span>
                {'external' in link && link.external && (
                  <span className="ml-auto text-white/50 text-xs">[ext]</span>
                )}
              </div>
            )
          })}
          {/* Mobile theme selector */}
          <div className="border-t border-white/20 mt-2 pt-2">
            <div className="px-4 py-2 font-mono text-default text-white/50">Theme:</div>
            {Object.entries(themes).map(([key, value]) => (
              <div
                key={key}
                onClick={() => {
                  setTheme(key as keyof typeof themes)
                }}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-default cursor-pointer transition-colors
                  ${theme === key ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: value.color }}
                />
                <span>{value.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop: Original tabs */}
      <div className="hidden md:flex items-end px-2 pt-2">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.path
          return (
            <div
              key={link.id}
              onClick={() => handleNavigation(link)}
              className={`
                relative flex items-center px-4 py-2 font-mono text-default border-t border-white rounded-t-lg cursor-pointer
                ${index === 0 ? 'border-l' : ''}
                border-r
                ${isActive ? 'bg-black text-white border-b-black' : 'bg-black text-white/50 hover:text-white border-b border-b-white'}
              `}
            >
              <span>{link.label}</span>
              {'external' in link && link.external && (
                <svg className="ml-1 -mt-2 h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              )}
              <span
                className="ml-10 text-white/50 hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                ×
              </span>
            </div>
          )
        })}
        {/* Theme selector tab */}
        <div
          onClick={() => setIsThemeOpen(!isThemeOpen)}
          className="relative flex items-center px-4 py-2 font-mono text-default border-t border-white rounded-t-lg cursor-pointer border-r bg-black text-white/50 hover:text-white border-b border-b-white"
        >
          <span className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            Theme
          </span>
          <span
            className="ml-10 text-white/50 hover:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            ×
          </span>

          {isThemeOpen && (
            <div className="absolute left-0 top-full mt-0 bg-black border border-white menu-slide min-w-[150px] z-50">
              {Object.entries(themes).map(([key, value]) => (
                <div
                  key={key}
                  onClick={(e) => {
                    e.stopPropagation()
                    setTheme(key as keyof typeof themes)
                    setIsThemeOpen(false)
                  }}
                  className={`flex items-center gap-2 px-4 py-2 font-mono text-default cursor-pointer transition-colors
                    ${theme === key ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: value.color }}
                  />
                  <span>{value.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 border-b border-white" />
      </div>
    </nav>
  )
}
