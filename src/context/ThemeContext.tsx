import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export const themes = {
  primary: { name: 'Neon Blue', color: '#00d4ff', logo: 'logo.png' },
  secondary: { name: 'Purple', color: '#8a00c4', logo: 'logo2.png' },
  third: { name: 'Dark Purple', color: '#5b4d9d', logo: 'logo3.png' },
  fourth: { name: 'Neon Pink', color: '#ff00ff', logo: 'logo4.png' },
  fifth: { name: 'Neon Orange', color: '#ff6600', logo: 'logo5.png' },
}

type ThemeKey = keyof typeof themes

interface ThemeContextType {
  theme: ThemeKey
  setTheme: (theme: ThemeKey) => void
  color: string
  logo: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getInitialTheme(): ThemeKey {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    if (saved && saved in themes) {
      return saved as ThemeKey
    }
  }
  return 'fourth'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>(getInitialTheme)

  const setTheme = (newTheme: ThemeKey) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved && saved in themes) {
      setThemeState(saved as ThemeKey)
    }
  }, [])

  const value = {
    theme,
    setTheme,
    color: themes[theme].color,
    logo: themes[theme].logo,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
