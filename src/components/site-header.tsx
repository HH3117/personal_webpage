import { Link } from '@tanstack/react-router'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/academic', label: 'Academic' },
  { to: '/personal', label: 'Personal' },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Maya Chen home">
        <span className="wordmark-mark">MC</span>
        <span className="wordmark-name">Maya Chen</span>
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
