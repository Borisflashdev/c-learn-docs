import { useTheme } from '../../context/ThemeContext'

export function GettingStarted() {
  const { color } = useTheme()

  return (
    <div>
      <h1 className="font-mono text-h1" style={{ color }}>
        getting_started
      </h1>
      <p className="mt-4 font-mono text-default text-white/70">
        Learn how to get started with C Learn.
      </p>
    </div>
  )
}
