import { useTheme } from '../context/ThemeContext'

export function Support() {
  const { color } = useTheme()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1" style={{ color }}>
        Support
      </h1>
      <p className="mt-4 font-mono text-default text-white/70">
        Support information coming soon.
      </p>
    </div>
  )
}
