import { useTheme } from '../../context/ThemeContext'

export function Matrix() {
  const { color } = useTheme()

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        matrix
      </h1>
      <p className="mt-4 font-mono text-default text-white/70">
        Matrix operations documentation coming soon.
      </p>
    </div>
  )
}
