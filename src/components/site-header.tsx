import { Link } from '@tanstack/react-router'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/academic', label: 'Academic' },
  { to: '/personal', label: 'Personal' },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Hao Hao home">
        <span className="wordmark-mark">HH</span>
        <span className="wordmark-name">Hao Hao</span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
            activeOptions={{ exact: item.to === '/' }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
