import { createContext, useContext, ReactNode } from 'react'

const theme = {
  color: '#ff00ff',
  logo: 'logo4.png',
}

interface ThemeContextType {
  color: string
  logo: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
