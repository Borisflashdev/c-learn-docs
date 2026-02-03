import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const features = [
  {
    name: 'Vector',
    description: 'Efficient vector operations for mathematical computations and data manipulation.',
  },
  {
    name: 'Matrix',
    description: 'Powerful matrix operations optimized for performance and memory usage.',
  },
  {
    name: 'Scaling',
    description: 'Data normalization and scaling functions to prepare your datasets for training.',
  },
  {
    name: 'Linear Regression',
    description: 'Build and train linear regression models for predictive analysis.',
  },
  {
    name: 'Classification',
    description: 'Classification algorithms to categorize and predict discrete outcomes.',
  },
  {
    name: 'Neural Networks',
    description: 'Build and train neural networks from scratch with customizable layers and activation functions.',
  },
]

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-mono text-h1 text-[#00d4ff]">
        C Learn - Machine Learning Framework in C
      </h1>

      <div className="mt-8 flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        <div className="flex-1 font-mono text-default text-white/70">
          <p>
            C Learn is a lightweight, high-performance machine learning framework built entirely in pure C.
            Designed for developers who need speed, simplicity, and full control over their ML pipelines.
          </p>
          <p className="mt-4">
            No external dependencies. No bloat. Just clean, efficient code that runs anywhere C runs.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src={logo} alt="C Learn Logo" className="h-32 w-32" />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col border border-white p-6"
          >
            <h2 className="font-mono text-h2 text-[#00d4ff]">{feature.name}</h2>
            <p className="mt-3 flex-1 font-mono text-default text-white/70">
              {feature.description}
            </p>
            <button
              onClick={() => navigate('/guide')}
              className="group mt-6 w-fit cursor-pointer border border-white px-4 py-2 font-mono text-default text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-[#00d4ff] group-hover:text-black">{'>'}</span> Learn More
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
