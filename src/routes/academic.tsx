import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Download,
  FileText,
  FlaskConical,
  GraduationCap,
} from 'lucide-react'
import { ProfileAvatar } from '@/components/profile-avatar'
import {
  academicPositions,
  profile,
  publications,
  teaching,
} from '@/data/profile'

export const Route = createFileRoute('/academic')({
  component: AcademicPage,
})

const sectionLinks = ['about', 'publications', 'research', 'teaching', 'cv']

function AcademicPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    about: true,
  })

  function toggleSection(id: string) {
    setOpenSections((current) => ({ ...current, [id]: !current[id] }))
  }

  return (
    <div className="profile-page academic-page page-enter">
      <aside className="profile-sidebar">
        <ProfileAvatar />
        <p className="eyebrow">Academic profile</p>
        <h1>{profile.name}</h1>
        <p className="sidebar-role">{profile.role}</p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight size={15} />
        </a>
        <nav className="section-nav" aria-label="Academic profile sections">
          {sectionLinks.map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() =>
                setOpenSections((current) => ({ ...current, [section]: true }))
              }
            >
              <span>0{index + 1}</span>
              {section}
            </a>
          ))}
        </nav>
      </aside>

      <article className="profile-content">
        <header className="profile-lead">
          <p>Researching the mechanics of materials and structures under hydrodynamic loadings.</p>
          <a
            href="#about"
            aria-label="Continue to About section"
            onClick={() =>
              setOpenSections((current) => ({ ...current, about: true }))
            }
          >
            Explore profile <ArrowDown size={18} />
          </a>
        </header>

        <AcademicSection
          number="01"
          title="About"
          id="about"
          icon={<BookOpen />}
          isOpen={!!openSections.about}
          onToggle={() => toggleSection('about')}
        >
          <div className="subsection-grid">
            <div>
              <h3>Bio</h3>
              <p className="large-copy">
                Hao Hao is a Research Associate in the Department of Mechanical Engineering at Imperial College London. His research focuses on fluid–structure interactions, with applications in fluid-induced damage and renewable energy. His broader research theme is to understand how transient and multiphase fluid phenomena interact with engineering structures, and to develop analytical and computational approaches to predict the resulting loads, deformation and damage.
              </p>
              <p>
                He studied Mathematics with Applied Mathematics/Mathematical Physics at Imperial College London (BSc, 2017–2020), followed by an MSc in Advanced Mechanical Engineering (2020–2021) and a PhD in Mechanical Engineering (2022–2026). During his undergraduate studies, he developed a particular interest in fluid mechanics and computational methods and was awarded an MIT International Research Opportunity Undergraduate (IROP) bursary in 2019. His MSc was fully funded by Equinor, and his PhD was fully funded by the Department of Mechanical Engineering at Imperial College London. His PhD research investigated droplet-impact-induced erosion on coated wind turbine blades.
              </p>
            </div>
            <div>
              <h3>Academic Positions</h3>
              <div className="timeline">
                {academicPositions.map((position) => (
                  <div className="timeline-item" key={position.years}>
                    <span>{position.years}</span>
                    <strong>{position.role}</strong>
                    <p>{position.place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AcademicSection>

        <AcademicSection
          number="02"
          title="Publications"
          id="publications"
          icon={<FileText />}
          isOpen={!!openSections.publications}
          onToggle={() => toggleSection('publications')}
        >
          <PublicationGroup title="In Press" items={publications.inPress} />
          <PublicationGroup title="Pre-Prints" items={publications.preprints} />
          <PublicationGroup title="Technical Reports" items={publications.reports} />
        </AcademicSection>

        <AcademicSection
          number="03"
          title="Research"
          id="research"
          icon={<FlaskConical />}
          isOpen={!!openSections.research}
          onToggle={() => toggleSection('research')}
        >
          <div className="research-grid">
            <div className="research-feature">
              <span>Current programme · 2024—2027</span>
              <h3>Civic Encounters with AI</h3>
              <p>
                A multi-city study of how public servants and residents make
                sense of automated decisions. The project produces practical
                tools for contestability alongside ethnographic research.
              </p>
              <div className="topic-list">
                <span>Public interest technology</span>
                <span>Algorithmic accountability</span>
                <span>Participatory methods</span>
              </div>
            </div>
            <div className="research-note">
              <p>Research question</p>
              <blockquote>
                What changes when the people affected by a system can question,
                reshape, or refuse it?
              </blockquote>
            </div>
          </div>
        </AcademicSection>

        <AcademicSection
          number="04"
          title="Teaching Activities"
          id="teaching"
          icon={<GraduationCap />}
          isOpen={!!openSections.teaching}
          onToggle={() => toggleSection('teaching')}
        >
          <PublicationGroup title="Project Supervision" items={teaching.ProjectSupervision} />
          <PublicationGroup title="Graduate Teaching Assitant" items={teaching.GraduateTeachingAssistant} />
        </AcademicSection>

        <AcademicSection
          number="05"
          title="CV"
          id="cv"
          icon={<Download />}
          isOpen={!!openSections.cv}
          onToggle={() => toggleSection('cv')}
        >
          <div className="document-list">
            <a href="/CV-EN.pdf" target="_blank" rel="noreferrer">
              <FileText />
              <span>
                <strong>English CV</strong>
                <small>PDF document</small>
              </span>
              <Download />
            </a>
            <a href="/CV-CN.pdf" target="_blank" rel="noreferrer">
              <FileText />
              <span>
                <strong>Chinese CV</strong>
                <small>PDF document</small>
              </span>
              <Download />
            </a>
          </div>
        </AcademicSection>
      </article>
    </div>
  )
}

type AcademicSectionProps = {
  number: string
  title: string
  id: string
  icon: ReactNode
  children: ReactNode
  isOpen: boolean
  onToggle: () => void
}

function AcademicSection({
  number,
  title,
  id,
  icon,
  children,
  isOpen,
  onToggle,
}: AcademicSectionProps) {
  const panelId = `${id}-panel`

  return (
    <section
      className={`academic-section${isOpen ? ' is-open' : ''}`}
      id={id}
    >
      <button
        type="button"
        className="academic-section-heading"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{number}</span>
        <h2>{title}</h2>
        <span className="academic-section-heading-icons">
          <i>{icon}</i>
          <ChevronDown className="academic-section-chevron" size={20} aria-hidden="true" />
        </span>
      </button>
      {isOpen && (
        <div className="academic-section-body" id={panelId}>
          {children}
        </div>
      )}
    </section>
  )
}

type PublicationItem = {
  year: string
  title: string
  venue: string
}

function PublicationGroup({
  title,
  items,
}: {
  title: string
  items: PublicationItem[]
}) {
  return (
    <div className="publication-group">
      <h3>{title}</h3>
      <div>
        {items.map((item) => (
          <article className="publication-row" key={item.title}>
            <span>{item.year}</span>
            <p>
              <strong>{item.title}</strong>
              <em>{item.venue}</em>
            </p>
            <ArrowUpRight size={18} />
          </article>
        ))}
      </div>
    </div>
  )
}
