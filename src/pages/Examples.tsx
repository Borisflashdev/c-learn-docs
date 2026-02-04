import { useTheme } from '../context/ThemeContext'

export function Examples() {
  const { color } = useTheme()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1" style={{ color }}>
        Examples
      </h1>
      <p className="mt-4 font-mono text-default text-white/70">
        Code examples and tutorials coming soon.
      </p>
    </div>
  )
}
