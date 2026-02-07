import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export const themes = {
  pink: { name: 'Neon Pink', color: '#ff00ff' },
  blue: { name: 'Neon Blue', color: '#00d4ff' },
  green: { name: 'Neon Green', color: '#39ff14' },
  yellow: { name: 'Neon Yellow', color: '#ffff00' },
  orange: { name: 'Neon Orange', color: '#ff6600' },
}

type ThemeKey = keyof typeof themes

interface ThemeContextType {
  theme: ThemeKey
  setTheme: (theme: ThemeKey) => void
  color: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getInitialTheme(): ThemeKey {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    if (saved && saved in themes) {
      return saved as ThemeKey
    }
  }
  return 'green'
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
