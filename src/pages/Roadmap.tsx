import { useTheme } from '../context/ThemeContext'

export function Roadmap() {
  const { color } = useTheme()

  const devLogs = [
    { date: '2025-07-15', version: 'v0.0.1', description: 'Initial repository created, project structure setup' },
    { date: '2025-08-01', version: 'v0.0.2', description: 'Planning phase completed, core architecture designed' },
    { date: '2025-09-15', version: 'v0.1.0', description: 'Basic memory management utilities implemented' },
    { date: '2025-11-20', version: 'v0.2.0', description: 'Build system configured, CI/CD pipeline setup' },
    { date: '2026-01-20', version: 'v0.3.0', description: 'Matrix implementation completed with SIMD optimizations' },
    { date: '2026-01-24', version: 'v0.4.0', description: 'Vector operations library finished' },
    { date: '2026-01-30', version: 'v0.5.0', description: 'Scaling and normalization functions added' },
    { date: '2026-02-04', version: 'v0.6.0-dev', description: 'Linear regression in progress...' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1" style={{ color }}>
        Roadmap
      </h1>

      {/* Project Introduction */}
      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat project_history.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> C Learn development started in{' '}
            <span style={{ color }}>mid-2025</span> with a simple goal: build a machine
            learning framework in pure C that doesn't sacrifice performance for convenience.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> No external dependencies. No hidden abstractions.
            Just raw, optimized C code that gives you full control over every byte of memory
            and every CPU cycle.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> The project is actively maintained and new features
            are being added regularly. Our focus is on creating a lightweight, embeddable ML
            library suitable for systems programming, embedded devices, and performance-critical
            applications.
          </p>
        </div>
      </section>

      {/* ASCII Roadmap */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat roadmap.ascii</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40 p-6">
          <pre className="font-mono text-sm leading-relaxed text-white/80">
            <code style={{ color: color + 'cc' }}>{`
  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════╗
  ║                                    C LEARN DEVELOPMENT ROADMAP                                        ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════╝

  2025                                                          2026
  ════════════════════════════════════════════════════════════════════════════════════════════════════════

       JUL              AUG-DEC                JAN 20            JAN 24            JAN 30           FEB
        │                  │                     │                 │                 │               │
        ▼                  ▼                     ▼                 ▼                 ▼               ▼
   ┌─────────┐       ┌───────────┐        ┌───────────┐      ┌──────────┐     ┌──────────┐    ┌──────────┐
   │ CREATED │       │ PLANNING  │        │  MATRIX   │      │  VECTOR  │     │ SCALING  │    │  LINEAR  │
   │  REPO   │──────▶│   PHASE   │───────▶│   IMPL    │─────▶│   IMPL   │────▶│   OPS    │───▶│   REG    │
   │  [✓]    │       │    [✓]    │        │    [✓]    │      │   [✓]    │     │   [✓]    │    │   [~]    │
   └─────────┘       └───────────┘        └───────────┘      └──────────┘     └──────────┘    └──────────┘
        │                  │                     │                 │                 │               │
        └──────────────────┴─────────────────────┴─────────────────┴─────────────────┴───────────────┘
                                                  │
                                                  ▼
                                         ┌───────────────┐
                                         │   UPCOMING    │
                                         └───────────────┘
                                                  │
              ┌───────────────────────────────────┼───────────────────────────────────┐
              ▼                                   ▼                                   ▼
       ┌─────────────┐                    ┌───────────────┐                   ┌───────────────┐
       │   NEURAL    │                    │ OPTIMIZATION  │                   │     GPU       │
       │  NETWORKS   │                    │  ALGORITHMS   │                   │   SUPPORT     │
       │    [ ]      │                    │      [ ]      │                   │     [ ]       │
       └─────────────┘                    └───────────────┘                   └───────────────┘

  ════════════════════════════════════════════════════════════════════════════════════════════════════════
  LEGEND:  [✓] Completed    [~] In Progress    [ ] Planned
  ════════════════════════════════════════════════════════════════════════════════════════════════════════
`}</code>
          </pre>
        </div>
      </section>

      {/* Developer Logs Table */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat dev_logs.db</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">DATE</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">VERSION</th>
                <th className="px-4 py-3 text-left text-white/90">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {devLogs.map((log, index) => (
                <tr
                  key={index}
                  className="border-b border-white transition-colors hover:bg-white/5"
                >
                  <td className="border-r border-white px-4 py-3 text-white/60">{log.date}</td>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>
                    {log.version}
                  </td>
                  <td className="px-4 py-3 text-white/70">{log.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-mono text-sm text-white/50">
          <span style={{ color }}>$</span> Last updated: {new Date().toISOString().split('T')[0]} |
          Total commits: 147 | Contributors: 3
        </p>
      </section>
    </div>
  )
}
