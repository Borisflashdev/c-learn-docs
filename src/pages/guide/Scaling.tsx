import { useTheme } from '../../context/ThemeContext'

export function Scaling() {
  const { color } = useTheme()

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        scaling
      </h1>
      <p className="mt-4 font-mono text-default text-white/70">
        Scaling operations documentation coming soon.
      </p>
    </div>
  )
}
