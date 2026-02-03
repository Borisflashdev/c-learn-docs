export function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1 text-white">About</h1>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white">The Framework</h2>
        <p className="mt-4 font-mono text-default text-white/70">
          C Learn is a lightweight machine learning framework built entirely in pure C.
          Designed for performance and simplicity, it provides the essential tools for
          building and training neural networks without external dependencies.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white">Author</h2>
        <p className="mt-4 font-mono text-default text-white/70">
          Created and maintained by the C Learn team.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white">Links</h2>
        <ul className="mt-4 space-y-2 font-mono text-default">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-white/70"
            >
              GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-white/70"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
