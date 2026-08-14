import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { profile } from '@/data/profile'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="home-page page-enter">
      <section className="identity-hero">
        <div className="identity-intro">
          <p className="eyebrow">Academic · Researcher · Applied Mathematics & Mechanical Engineering</p>
          <h1>
            <span>{profile.title}</span>
            {profile.name}
          </h1>
          <p className="role-line">{profile.role}</p>
          <p className="intro-copy">
            I study how materials respond to extreme forces—and how we might design structures with greater strength, resilience, and reliability.
          </p>
        </div>

        <aside className="contact-ledger" aria-label="Contact information">
          <div className="ledger-heading">
            <span>Contact card</span>
            <ArrowDownRight size={18} strokeWidth={1.5} />
          </div>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
            <Phone size={17} />
            <span>
              <small>Phone</small>
              {profile.phone}
            </span>
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={17} />
            <span>
              <small>Email</small>
              {profile.email}
            </span>
          </a>
          <div className="ledger-row">
            <MapPin size={17} />
            <span>
              <small>Address</small>
              {profile.address}
            </span>
          </div>
          <div className="ledger-row">
            <BriefcaseBusiness size={17} />
            <span>
              <small>Position</small>
              {profile.department}
            </span>
          </div>
        </aside>
      </section>

      <section className="portal-section" aria-labelledby="explore-title">
        <div className="section-rule">
          <p id="explore-title">Choose a direction</p>
          <span>Two sides of one practice</span>
        </div>

        <div className="portal-grid">
          <Link to="/academic" className="portal-card portal-card--academic">
            <span className="portal-number">A / 01</span>
            <div>
              <p>Scholarship & practice</p>
              <h2>Academic</h2>
            </div>
            <ul aria-label="Academic page sections">
              <li>About</li>
              <li>Publications</li>
              <li>Research</li>
              <li>Teaching</li>
              <li>CV</li>
            </ul>
            <span className="portal-action">
              Enter profile <ArrowUpRight size={20} />
            </span>
          </Link>

          <Link to="/personal" className="portal-card portal-card--personal">
            <span className="portal-number">P / 02</span>
            <div>
              <p>Notes from elsewhere</p>
              <h2>Personal</h2>
            </div>
            <blockquote>
              “A place for interests, experiences, field notes, and small
              observations worth keeping.”
            </blockquote>
            <span className="portal-action">
              Open notebook <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </section>

      <footer className="page-footer">
        <span>London · United Kingdom</span>
        <span>Last updated August 2026</span>
      </footer>
    </div>
  )
}
