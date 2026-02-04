import { useTheme } from '../../context/ThemeContext'

export function Regression() {
  const { color } = useTheme()

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        regression
      </h1>
      <p className="mt-4 font-mono text-default text-white/70">
        Regression documentation coming soon.
      </p>
    </div>
  )
}
