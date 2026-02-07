import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

interface Commit {
  date: string
  type: string
  message: string
  url: string
}

function parseCommit(raw: { sha: string; commit: { message: string; author: { date: string } } }): Commit {
  const line = raw.commit.message.split('\n')[0]
  const match = line.match(/^(\w+)(?:\(.*?\))?:\s*(.*)/)
  return {
    date: raw.commit.author.date.split('T')[0],
    type: match ? match[1].toLowerCase() : 'other',
    message: match ? match[2] : line,
    url: `https://github.com/Borisflashdev/c-learn/commit/${raw.sha}`,
  }
}

export function Roadmap() {
  const { color } = useTheme()
  const [commits, setCommits] = useState<Commit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')
  const [aboutHovered, setAboutHovered] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/repos/Borisflashdev/c-learn/commits?per_page=100')
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setCommits(data.map(parseCommit))
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const types = ['all', ...Array.from(new Set(commits.map((c) => c.type)))]
  const filtered = filter === 'all' ? commits : commits.filter((c) => c.type === filter)

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
            <span style={{ color }}>&gt;</span> This page tracks the evolution of C Learn from
            basic linear algebra to complex ML architectures. Every entry represents a concept implemented in pure C, byte-by-byte.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> For a deeper dive into why I'm building this,
            check out the{' '}
            <Link
              to="/about"
              className="text-white underline transition-colors"
              style={{ color: aboutHovered ? color : undefined }}
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
            >
              About
            </Link>{' '}
            page.
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
  ║                                    C LEARN DEVELOPMENT ROADMAP                                      ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════╝

  2025                                                          2026
  ════════════════════════════════════════════════════════════════════════════════════════════════════════

       AUG              JAN 20           JAN 21-24          JAN 27           JAN 31          FEB 01-06
        │                  │                 │                 │                │                │
        ▼                  ▼                 ▼                 ▼                ▼                ▼
   ┌─────────┐       ┌──────────┐     ┌───────────┐     ┌──────────┐    ┌──────────┐     ┌──────────┐
   │  INIT   │       │   CSV    │     │  MATRIX   │     │ FEATURE  │    │  VECTOR  │     │  LINEAR  │
   │  REPO   │──────▶│  PARSER  │────▶│   IMPL    │────▶│ SCALING  │───▶│   IMPL   │────▶│   REG    │
   │  [✓]    │       │   [✓]   │     │    [✓]    │     │   [✓]    │    │   [✓]    │     │   [✓]    │
   └─────────┘       └──────────┘     └───────────┘     └──────────┘    └──────────┘     └──────────┘
        │                  │                 │                │               │                │
        │                  │                 │                │               │                │
        │    csv parsing   │  matrix ops,    │  min/max,      │  vector ops,  │  normal eq,    │
        │    from file     │  slicing,       │  scaler,       │  const        │  batch GD,     │
        │                  │  error handling │  inverse       │  correctness  │  stochastic GD │
        │                  │                 │  transform     │               │                │
        └──────────────────┴─────────────────┴────────────────┴───────────────┴────────────────┘
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
        <h2 className="font-mono text-h2 text-white/90">$ git log --oneline</h2>
        {loading ? (
          <p className="mt-4 px-4 py-6 font-mono text-default text-white/50">
            <span style={{ color }}>$</span> Fetching commits...
          </p>
        ) : error ? (
          <p className="mt-4 px-4 py-6 font-mono text-default text-red-400">
            Error: {error}
          </p>
        ) : (
          <>
            <div className="mt-4 flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className="cursor-pointer rounded border px-3 py-1 font-mono text-sm transition-colors"
                  style={{
                    borderColor: filter === type ? color : 'rgba(255,255,255,0.3)',
                    backgroundColor: filter === type ? color + '20' : 'transparent',
                    color: filter === type ? color : 'rgba(255,255,255,0.6)',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
              <table className="w-full table-fixed font-mono text-default">
                <colgroup>
                  <col className="w-[130px]" />
                  <col className="w-[110px]" />
                  <col />
                </colgroup>
                <thead>
                  <tr className="border-b border-white">
                    <th className="border-r border-white px-4 py-3 text-left text-white/90">DATE</th>
                    <th className="border-r border-white px-4 py-3 text-left text-white/90">TYPE</th>
                    <th className="px-4 py-3 text-left text-white/90">MESSAGE</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((commit, index) => (
                    <tr
                      key={index}
                      className="border-b border-white transition-colors hover:bg-white/5"
                    >
                      <td className="border-r border-white px-4 py-3 whitespace-nowrap text-white/60">
                        {commit.date}
                      </td>
                      <td className="border-r border-white px-4 py-3" style={{ color }}>
                        {commit.type}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="relative z-10 inline-flex items-center cursor-pointer text-white/70 underline transition-colors"
                          onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                          onClick={() => window.open(commit.url, '_blank', 'noopener,noreferrer')}
                        >
                          {commit.message}
                          <svg className="ml-1.5 h-2.5 w-2.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-mono text-sm text-white/50">
              <span style={{ color }}>$</span> Showing {filtered.length} of {commits.length} commits | Source: GitHub API
            </p>
          </>
        )}
      </section>
    </div>
  )
}
