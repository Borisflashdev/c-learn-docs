import { useState } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { GettingStarted } from './guide/GettingStarted'
import { Vector } from './guide/Vector'
import { Matrix } from './guide/Matrix'
import { Scaling } from './guide/Scaling'
import { Regression } from './guide/Regression'

const guideLinks = [
  {
    id: 'getting-started',
    label: 'getting_started',
    path: '/guide/getting_started',
    subLinks: [
      { id: 'repository', label: 'repository', path: '/guide/getting_started/repository' },
      { id: 'project_structure', label: 'project_structure', path: '/guide/getting_started/project_structure' },
      { id: 'functions_naming', label: 'functions_naming', path: '/guide/getting_started/functions_naming' },
      { id: 'test_files', label: 'test_files', path: '/guide/getting_started/test_files' },
    ],
  },
  {
    id: 'vector',
    label: 'vector',
    path: '/guide/vector',
    subLinks: [
      { id: 'structure', label: 'structure', path: '/guide/vector/structure' },
      { id: 'vector_create', label: 'vector_create', path: '/guide/vector/vector_create' },
      { id: 'vector_copy', label: 'vector_copy', path: '/guide/vector/vector_copy' },
      { id: 'vector_free', label: 'vector_free', path: '/guide/vector/vector_free' },
      { id: 'vector_get', label: 'vector_get', path: '/guide/vector/vector_get' },
      { id: 'vector_set', label: 'vector_set', path: '/guide/vector/vector_set' },
      { id: 'vector_print', label: 'vector_print', path: '/guide/vector/vector_print' },
      { id: 'vector_print_head', label: 'vector_print_head', path: '/guide/vector/vector_print_head' },
      { id: 'vector_print_tail', label: 'vector_print_tail', path: '/guide/vector/vector_print_tail' },
      { id: 'vector_arithmetic', label: 'vector_arithmetic', path: '/guide/vector/vector_arithmetic' },
      { id: 'vector_scalar_arithmetic', label: 'vector_scalar_arithmetic', path: '/guide/vector/vector_scalar_arithmetic' },
      { id: 'vector_min', label: 'vector_min', path: '/guide/vector/vector_min' },
      { id: 'vector_max', label: 'vector_max', path: '/guide/vector/vector_max' },
      { id: 'vector_sum', label: 'vector_sum', path: '/guide/vector/vector_sum' },
      { id: 'vector_mean', label: 'vector_mean', path: '/guide/vector/vector_mean' },
      { id: 'vector_std', label: 'vector_std', path: '/guide/vector/vector_std' },
      { id: 'vector_dot_product', label: 'vector_dot_product', path: '/guide/vector/vector_dot_product' },
      { id: 'vector_apply', label: 'vector_apply', path: '/guide/vector/vector_apply' },
    ],
  },
  {
    id: 'matrix',
    label: 'matrix',
    path: '/guide/matrix',
    subLinks: [
      { id: 'structure', label: 'structure', path: '/guide/matrix/structure' },
      { id: 'matrix_create', label: 'matrix_create', path: '/guide/matrix/matrix_create' },
      { id: 'matrix_copy', label: 'matrix_copy', path: '/guide/matrix/matrix_copy' },
      { id: 'matrix_free', label: 'matrix_free', path: '/guide/matrix/matrix_free' },
      { id: 'matrix_get', label: 'matrix_get', path: '/guide/matrix/matrix_get' },
      { id: 'matrix_set', label: 'matrix_set', path: '/guide/matrix/matrix_set' },
      { id: 'read_csv', label: 'read_csv', path: '/guide/matrix/read_csv' },
      { id: 'matrix_print', label: 'matrix_print', path: '/guide/matrix/matrix_print' },
      { id: 'matrix_print_head', label: 'matrix_print_head', path: '/guide/matrix/matrix_print_head' },
      { id: 'matrix_print_tail', label: 'matrix_print_tail', path: '/guide/matrix/matrix_print_tail' },
      { id: 'matrix_shape', label: 'matrix_shape', path: '/guide/matrix/matrix_shape' },
      { id: 'matrix_size', label: 'matrix_size', path: '/guide/matrix/matrix_size' },
      { id: 'matrix_transpose', label: 'matrix_transpose', path: '/guide/matrix/matrix_transpose' },
      { id: 'matrix_inverse', label: 'matrix_inverse', path: '/guide/matrix/matrix_inverse' },
      { id: 'matrix_slice', label: 'matrix_slice', path: '/guide/matrix/matrix_slice' },
      { id: 'matrix_slice_rows', label: 'matrix_slice_rows', path: '/guide/matrix/matrix_slice_rows' },
      { id: 'matrix_slice_cols', label: 'matrix_slice_cols', path: '/guide/matrix/matrix_slice_cols' },
      { id: 'matrix_concat', label: 'matrix_concat', path: '/guide/matrix/matrix_concat' },
      { id: 'matrix_arithmetic', label: 'matrix_arithmetic', path: '/guide/matrix/matrix_arithmetic' },
      { id: 'matrix_multiplication', label: 'matrix_multiplication', path: '/guide/matrix/matrix_multiplication' },
      { id: 'matrix_scalar_arithmetic', label: 'matrix_scalar_arithmetic', path: '/guide/matrix/matrix_scalar_arithmetic' },
      { id: 'matrix_min', label: 'matrix_min', path: '/guide/matrix/matrix_min' },
      { id: 'matrix_max', label: 'matrix_max', path: '/guide/matrix/matrix_max' },
      { id: 'matrix_sum', label: 'matrix_sum', path: '/guide/matrix/matrix_sum' },
      { id: 'matrix_mean', label: 'matrix_mean', path: '/guide/matrix/matrix_mean' },
      { id: 'matrix_col_min', label: 'matrix_col_min', path: '/guide/matrix/matrix_col_min' },
      { id: 'matrix_col_max', label: 'matrix_col_max', path: '/guide/matrix/matrix_col_max' },
      { id: 'matrix_col_sum', label: 'matrix_col_sum', path: '/guide/matrix/matrix_col_sum' },
      { id: 'matrix_col_mean', label: 'matrix_col_mean', path: '/guide/matrix/matrix_col_mean' },
      { id: 'matrix_col_std', label: 'matrix_col_std', path: '/guide/matrix/matrix_col_std' },
      { id: 'matrix_col_dot_product', label: 'matrix_col_dot_product', path: '/guide/matrix/matrix_col_dot_product' },
      { id: 'matrix_apply_col', label: 'matrix_apply_col', path: '/guide/matrix/matrix_apply_col' },
      { id: 'vector_to_matrix', label: 'vector_to_matrix', path: '/guide/matrix/vector_to_matrix' },
      { id: 'matrix_to_vector', label: 'matrix_to_vector', path: '/guide/matrix/matrix_to_vector' },
    ],
  },
  {
    id: 'scaling',
    label: 'scaling',
    path: '/guide/scaling',
    subLinks: [
      { id: 'structure', label: 'structure', path: '/guide/scaling/structure' },
      { id: 'scaler_create', label: 'scaler_create', path: '/guide/scaling/scaler_create' },
      { id: 'scaler_free', label: 'scaler_free', path: '/guide/scaling/scaler_free' },
      { id: 'scaler_fit', label: 'scaler_fit', path: '/guide/scaling/scaler_fit' },
      { id: 'scaler_transform', label: 'scaler_transform', path: '/guide/scaling/scaler_transform' },
      { id: 'scaler_fit_transform', label: 'scaler_fit_transform', path: '/guide/scaling/scaler_fit_transform' },
      { id: 'scaler_inverse_transform', label: 'scaler_inverse_transform', path: '/guide/scaling/scaler_inverse_transform' },
    ],
  },
  {
    id: 'regression',
    label: 'regression',
    path: '/guide/regression',
    subLinks: [
      { id: 'regression_1', label: 'regression_1', path: '/guide/regression_1' },
      { id: 'regression_2', label: 'regression_2', path: '/guide/regression_2' },
      { id: 'regression_3', label: 'regression_3', path: '/guide/regression_3' },
    ],
  },
]

export function Guide() {
  const { color } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set())
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleSubmenu = (id: string) => {
    setOpenSubmenus((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const getBreadcrumb = () => {
    const path = location.pathname.replace('/guide/', '')
    const parts = path.split('/')

    if (parts.length === 1) {
      // Main section like "vector", "matrix", etc.
      const mainLink = guideLinks.find(l => l.path === `/guide/${parts[0]}`)
      return mainLink ? mainLink.label : parts[0]
    } else if (parts.length === 2) {
      // Sub-section like "vector/structure"
      const mainLink = guideLinks.find(l => l.path === `/guide/${parts[0]}`)
      if (mainLink) {
        const subLink = mainLink.subLinks.find(s => s.path === location.pathname)
        return (
          <>
            <span
              className="cursor-pointer transition-colors"
              onClick={() => navigate(mainLink.path)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = color
                e.currentTarget.style.textDecoration = 'underline'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = ''
                e.currentTarget.style.textDecoration = 'none'
              }}
            >
              {mainLink.label}
            </span>
            <span style={{ color }}> {'>'} </span>
            <span>{subLink?.label || parts[1]}</span>
          </>
        )
      }
    }
    return null
  }

  const getPrevNextLinks = () => {
    // Build a flat list of all pages in order
    const allPages: { path: string; label: string }[] = []
    guideLinks.forEach((link) => {
      allPages.push({ path: link.path, label: link.label })
      link.subLinks.forEach((subLink) => {
        allPages.push({ path: subLink.path, label: subLink.label })
      })
    })

    const currentIndex = allPages.findIndex((page) => page.path === location.pathname)

    if (currentIndex === -1) return { prev: null, next: null }

    const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null
    const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

    return { prev, next }
  }

  const { prev, next } = getPrevNextLinks()

  const renderNav = () => (
    <>
      {guideLinks.map((link, index) => {
        const isActive = location.pathname === link.path || location.pathname.startsWith(link.path.replace('/guide/', '/guide/') + '_')
        const isSubmenuOpen = openSubmenus.has(link.id)
        const mainNumber = index + 1
        return (
          <div key={link.id}>
            <div className="flex items-center justify-between">
              <span
                onClick={() => {
                  navigate(link.path)
                  setOpenSubmenus(new Set([link.id]))
                  setIsMobileNavOpen(false)
                }}
                className={`cursor-pointer transition-colors ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
                style={isActive ? { color } : {}}
              >
                <span style={{ color }}>{mainNumber}.</span> {link.label}
              </span>
              <span
                onClick={() => toggleSubmenu(link.id)}
                className="ml-2 cursor-pointer transition-transform"
                style={{ color, transform: isSubmenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                {'>'}
              </span>
            </div>
            {isSubmenuOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-1">
                {link.subLinks.map((subLink, subIndex) => {
                  const isSubActive = location.pathname === subLink.path
                  const subNumber = `${mainNumber}.${subIndex + 1}`
                  return (
                    <button
                      key={subLink.id}
                      onClick={() => {
                        navigate(subLink.path)
                        setOpenSubmenus(new Set([link.id]))
                        setIsMobileNavOpen(false)
                      }}
                      className={`cursor-pointer whitespace-nowrap text-left transition-colors text-sm ${
                        isSubActive ? 'text-white' : 'text-white/40 hover:text-white'
                      }`}
                      style={isSubActive ? { color } : {}}
                    >
                      <span style={{ color }}>{subNumber}</span> {subLink.label}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </>
  )

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Mobile navigation toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="flex items-center gap-2 font-mono text-default cursor-pointer"
        >
          <span style={{ color }}>$</span>
          <span className="text-white">{isMobileNavOpen ? 'close_nav' : 'open_nav'}</span>
          <span
            className="transition-transform"
            style={{ color, transform: isMobileNavOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {'>'}
          </span>
        </button>

        {/* Mobile navigation dropdown */}
        {isMobileNavOpen && (
          <nav className="mt-4 pb-4 mb-4 border-b border-white flex flex-col gap-2 font-mono text-default menu-slide">
            {renderNav()}
          </nav>
        )}
      </div>

      <div className="flex min-h-[calc(100vh-120px)]">
        {/* Desktop sidebar navigation */}
        <nav className="hidden md:flex flex-col gap-2 pr-8 font-mono text-default w-[250px] flex-shrink-0">
          {renderNav()}
        </nav>

        {/* Vertical divider - desktop only */}
        <div className="hidden md:block w-px bg-white self-stretch" />

        {/* Right content area */}
        <div className="flex-1 md:pl-8">
          {/* Breadcrumb */}
          <div className="mb-6 font-mono text-default text-white/70">
            {getBreadcrumb()}
          </div>
          <Routes>
            <Route index element={<Navigate to="/guide/getting_started" replace />} />
            <Route path="getting_started" element={<GettingStarted />} />
            <Route path="vector/*" element={<Vector />} />
            <Route path="matrix" element={<Matrix />} />
            <Route path="scaling" element={<Scaling />} />
            <Route path="regression" element={<Regression />} />
          </Routes>

          {/* Prev/Next navigation */}
          <div className="mt-12 pt-6 border-t border-white flex justify-between font-mono text-default">
            <div>
              {prev && (
                <span
                  onClick={() => {
                    navigate(prev.path)
                    window.scrollTo(0, 0)
                  }}
                  className="cursor-pointer text-white/50 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                  }}
                >
                  <span style={{ color }}>{'<'}</span> {prev.label}
                </span>
              )}
            </div>
            <div>
              {next && (
                <span
                  onClick={() => {
                    navigate(next.path)
                    window.scrollTo(0, 0)
                  }}
                  className="cursor-pointer text-white/50 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                  }}
                >
                  {next.label} <span style={{ color }}>{'>'}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
