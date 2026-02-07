import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import logoMain from '../../public/logo.png'

const features = [
  {
    name: 'vector',
    description: 'Efficient vector operations for mathematical computations and data manipulation.',
    link: '/guide/vector',
  },
  {
    name: 'matrix',
    description: 'Powerful matrix operations optimized for performance and memory usage.',
    link: '/guide/matrix',
  },
  {
    name: 'scaling',
    description: 'Data normalization and scaling functions to prepare your datasets for training.',
    link: '/guide/scaling',
  },
  {
    name: 'regression',
    description: 'Build and train linear regression models for predictive analysis.',
    link: '/guide/regression',
  },
  {
    name: 'classification',
    description: 'Classification algorithms to categorize and predict discrete outcomes.',
    link: '/guide',
  },
  {
    name: 'neural_networks',
    description: 'Build and train neural networks from scratch with customizable layers and activation functions.',
    link: '/guide',
  },
]

export function Home() {
  const navigate = useNavigate()
  const { color } = useTheme()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1" style={{ color }}>
        C Learn - Machine Learning Framework in C
      </h1>

      <h2 className="mt-8 font-mono text-h2 text-white/90">$ cat description.txt</h2>
      <div className="mt-4 flex flex-col-reverse items-center justify-between gap-8 rounded border border-white bg-black/40 p-6 md:flex-row">
        <div className="flex-1 font-mono text-default text-white/70">
          <p>
            <span style={{ color }}>&gt;</span> C Learn is an open-source machine learning framework designed for learning and exploring ML concepts in depth. Written in pure C, it emphasizes transparency, performance, and understanding how algorithms work at a low level. Clean, efficient, and built to make machine learning more approachable.
          </p>
        </div>
        <div
          className="flex-shrink-0 select-none"
          onContextMenu={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
        >
          <img
            src={logoMain}
            alt="C Learn Logo"
            className="h-32 w-32 pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col rounded border border-white bg-black/40 p-6"
          >
            <h2 className="font-mono text-h2" style={{ color }}>{feature.name}</h2>
            <p className="mt-3 flex-1 font-mono text-default text-white/70">
              <span style={{ color }}>&gt;</span> {feature.description}
            </p>
            <button
              onClick={() => navigate(feature.link)}
              className="group mt-6 w-fit cursor-pointer border border-white px-4 py-2 font-mono text-default text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <span style={{ color }} className="group-hover:text-black">{'>'}</span> learn_more
              </span>
              <span className="ml-1 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                _
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
