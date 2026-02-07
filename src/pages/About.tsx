import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export function About() {
  const { color } = useTheme()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1" style={{ color }}>
        About
      </h1>

      {/* The Philosophy */}
      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ cat philosophy.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> I'm{' '}
            <span style={{ color }}>Boris</span>, a Computer Science student at RAF
            Belgrade. I built C Learn as a way to force myself to actually understand machine
            learning — not just as a user, but as a creator.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> While Modern ML frameworks like PyTorch or TensorFlow are powerful, they've made it possible for anyone to import and fit a model without ever understanding the low-level mechanics or algorithms behind it.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> My rule is simple:{' '}
            <span style={{ color }}>
              If I can't implement it from scratch in pure C, I don't truly understand it.
            </span>
          </p>
        </div>
      </section>

      {/* The Rules */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat rules.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> To keep the learning process authentic, I've set
            strict rules for this project:
          </p>
          <div className="mt-4 space-y-3 pl-6">
            <p className="font-mono text-default leading-relaxed text-white/70">
              <span style={{ color }}>&gt;</span>{' '}
              <span style={{ color }}>Pure C Only</span> — No third-party dependencies, no
              high-level frameworks, and no shortcuts.
            </p>
            <p className="font-mono text-default leading-relaxed text-white/70">
              <span style={{ color }}>&gt;</span>{' '}
              <span style={{ color }}>Standard Library</span> — Every algorithm is built using
              only the C standard library.
            </p>
            <p className="font-mono text-default leading-relaxed text-white/70">
              <span style={{ color }}>&gt;</span>{' '}
              <span style={{ color }}>Byte-by-Byte</span> — From matrix operations and memory
              management to backpropagation — it's all manual.
            </p>
            <p className="font-mono text-default leading-relaxed text-white/70">
              <span style={{ color }}>&gt;</span>{' '}
              <span style={{ color }}>Transparency</span> — Open-source by design, this project serves as a low-level guide for anyone looking to understand ML from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Why C? */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat why_c.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> C is unforgiving. It forces you to think about
            memory allocation, pointers, and computational efficiency. By removing the "safety
            net" of Python, I'm able to see the raw mathematical mechanics of machine learning.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> If a matrix multiplication fails or a gradient
            explodes, I have to find exactly where in the memory it happened.
          </p>
        </div>
      </section>

      {/* How to use */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat usage.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Whether you're a fellow student or a curious
            engineer, feel free to dig through the code, break it, and build on top of it. This
            isn't meant to replace production-grade libraries; it's a study guide written in code.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Check out the{' '}
            <Link
              to="/roadmap"
              className="text-white underline transition-colors"
              style={{ color: hoveredLink === 'roadmap' ? color : undefined }}
              onMouseEnter={() => setHoveredLink('roadmap')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Roadmap
            </Link>{' '}
            for a full log of implemented algorithms and the development timeline.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat personal_links.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <div className="space-y-2 font-mono text-default">
            <p>
              <span style={{ color }}>&gt;</span>{' '}
              <a
                href="https://linkedin.com/in/boris-mirkovic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline transition-colors"
                style={{ color: hoveredLink === 'linkedin' ? color : undefined }}
                onMouseEnter={() => setHoveredLink('linkedin')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                LinkedIn
              </a>
            </p>
            <p>
              <span style={{ color }}>&gt;</span>{' '}
              <a
                href="https://bm11.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline transition-colors"
                style={{ color: hoveredLink === 'portfolio' ? color : undefined }}
                onMouseEnter={() => setHoveredLink('portfolio')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Portfolio
              </a>
            </p>
            <p>
              <span style={{ color }}>&gt;</span>{' '}
              <a
                href="https://github.com/Borisflashdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline transition-colors"
                style={{ color: hoveredLink === 'github' ? color : undefined }}
                onMouseEnter={() => setHoveredLink('github')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
