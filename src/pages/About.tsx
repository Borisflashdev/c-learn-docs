import { useTheme } from '../context/ThemeContext'

export function About() {
  const { color } = useTheme()

  const experience = [
    {
      company: 'Freelance, Self-Employed',
      location: 'Belgrade, Serbia',
      role: 'SOFTWARE DEVELOPER',
      period: 'Nov 2022 – Present',
      details: [
        'Developed and delivered diverse software and web solutions for international and regional clients',
        'Web Administration Panel for US-based Client, Law Office Website',
        'Admin Panel for Balkan Cultural Center and more',
      ],
    },
    {
      company: 'Atlantic Grupa',
      location: 'Belgrade, Serbia',
      role: 'SOFTWARE ENGINEER INTERN',
      period: 'Mar 2025 – Apr 2025',
      details: [
        'Gained hands-on experience with company workflows and service desk operations',
        'Completed a course in Data Processing and Analytics',
      ],
    },
    {
      company: 'techtonnik',
      location: 'Belgrade, Serbia',
      role: 'SOFTWARE ENGINEER INTERN',
      period: 'Jun 2023 – Oct 2023',
      details: [
        'Developed and designed project-based Software, Websites, and Web Applications',
        'Attended weekly stand-up meetings to receive tasks and instructions for weekly goals',
      ],
    },
  ]

  const education = [
    {
      institution: 'Union University Faculty of Computing (RAF)',
      location: 'Belgrade, Serbia',
      degree: 'BS IN COMPUTER SCIENCE',
      period: 'Oct 2024 – Present',
    },
    {
      institution: 'Electrical Engineering High School "Nikola Tesla"',
      location: 'Belgrade, Serbia',
      degree: 'HIGH SCHOOL DIPLOMA IN ELECTRICAL ENGINEERING',
      period: 'Sep 2020 – Jun 2024',
    },
  ]

  const skills = [
    { category: 'Programming Languages', items: 'JavaScript/TypeScript, Python, C' },
    { category: 'Web Development', items: 'React.js, Vue.js, Node.js' },
    { category: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
    { category: 'Data Science', items: 'Pandas, NumPy' },
    { category: 'DevOps & Tools', items: 'Jira, Git/GitHub' },
  ]

  const certifications = [
    { date: 'Oct 2024', name: 'CEFR C1, English language', issuer: 'British Council' },
    { date: 'Apr 2024', name: 'RAF IT Days', issuer: 'Faculty of Computing (RAF)' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1" style={{ color }}>
        About
      </h1>

      {/* Author Introduction */}
      <section className="mt-8">
        <h2 className="font-mono text-h2 text-white/90">$ whoami</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <p className="font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> Hi, I'm{' '}
            <span style={{ color }}>Boris Mirkovic</span> — the creator and maintainer of
            C Learn framework.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> I'm a Computer Science student at RAF Belgrade
            and a passionate software developer with experience in web development, systems
            programming, and data analytics.
          </p>
          <p className="mt-4 font-mono text-default leading-relaxed text-white/70">
            <span style={{ color }}>&gt;</span> C Learn started as a personal project to deeply
            understand machine learning by implementing it from scratch in pure C — no libraries,
            no abstractions, just raw code.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat education.db</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">PERIOD</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">DEGREE</th>
                <th className="px-4 py-3 text-left text-white/90">INSTITUTION</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu, index) => (
                <tr
                  key={index}
                  className="border-b border-white transition-colors hover:bg-white/5"
                >
                  <td className="border-r border-white px-4 py-3 text-white/60 whitespace-nowrap">
                    {edu.period}
                  </td>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>
                    {edu.degree}
                  </td>
                  <td className="px-4 py-3 text-white/70">
                    {edu.institution}
                    <span className="block text-white/50 text-sm">{edu.location}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat experience.log</h2>
        <div className="mt-4 space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="rounded border border-white bg-black/40 p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-mono text-default" style={{ color }}>
                    {exp.role}
                  </h3>
                  <p className="font-mono text-default text-white/70">{exp.company}</p>
                  <p className="font-mono text-sm text-white/50">{exp.location}</p>
                </div>
                <span className="font-mono text-default text-white/60">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="font-mono text-default text-white/70">
                    <span style={{ color }}>•</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat skills.conf</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">CATEGORY</th>
                <th className="px-4 py-3 text-left text-white/90">TECHNOLOGIES</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr
                  key={index}
                  className="border-b border-white transition-colors hover:bg-white/5"
                >
                  <td className="border-r border-white px-4 py-3" style={{ color }}>
                    {skill.category}
                  </td>
                  <td className="px-4 py-3 text-white/70">{skill.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat certifications.txt</h2>
        <div className="mt-4 overflow-x-auto rounded border border-white bg-black/40">
          <table className="w-full font-mono text-default">
            <thead>
              <tr className="border-b border-white">
                <th className="border-r border-white px-4 py-3 text-left text-white/90">DATE</th>
                <th className="border-r border-white px-4 py-3 text-left text-white/90">CERTIFICATION</th>
                <th className="px-4 py-3 text-left text-white/90">ISSUER</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert, index) => (
                <tr
                  key={index}
                  className="border-b border-white transition-colors hover:bg-white/5"
                >
                  <td className="border-r border-white px-4 py-3 text-white/60 whitespace-nowrap">
                    {cert.date}
                  </td>
                  <td className="border-r border-white px-4 py-3" style={{ color }}>
                    {cert.name}
                  </td>
                  <td className="px-4 py-3 text-white/70">{cert.issuer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Links */}
      <section className="mt-12">
        <h2 className="font-mono text-h2 text-white/90">$ cat links.txt</h2>
        <div className="mt-4 rounded border border-white bg-black/40 p-6">
          <div className="space-y-2 font-mono text-default">
            <p>
              <span style={{ color }}>&gt;</span>{' '}
              <a
                href="https://linkedin.com/in/boris-mirkovic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-white/70"
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
                className="text-white underline hover:text-white/70"
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
                className="text-white underline hover:text-white/70"
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
