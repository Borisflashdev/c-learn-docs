import { useLocation, Link } from 'react-router-dom'

export function NotFound() {
  const location = useLocation()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1 text-white">404</h1>
      <p className="mt-4 font-mono text-default text-white/70">
        Page <span className="text-white">"{location.pathname}"</span> not found.
      </p>
      <Link
        to="/home"
        className="mt-6 inline-block font-mono text-default text-white underline hover:text-white/70"
      >
        Go to Home
      </Link>
    </div>
  )
}
