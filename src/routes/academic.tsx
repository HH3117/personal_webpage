import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
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
            <a key={section} href={`#${section}`}>
              <span>0{index + 1}</span>
              {section}
            </a>
          ))}
        </nav>
      </aside>

      <article className="profile-content">
        <header className="profile-lead">
          <p>Researching the spaces between people, institutions, and intelligent systems.</p>
          <a href="#about" aria-label="Continue to About section">
            Explore profile <ArrowDown size={18} />
          </a>
        </header>

        <AcademicSection number="01" title="About" id="about" icon={<BookOpen />}>
          <div className="subsection-grid">
            <div>
              <h3>Bio</h3>
              <p className="large-copy">
                I am an interdisciplinary researcher working across
                human-computer interaction, science and technology studies, and
                participatory design. My work asks how AI systems can become
                more legible, negotiable, and accountable in the places where
                people actually encounter them.
              </p>
              <p>
                I lead the Situated Systems Lab, a small research group that
                combines fieldwork, prototyping, and public collaboration. Our
                current projects explore AI in local government, healthcare,
                and community archives.
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
        >
          <div className="course-list">
            {teaching.map((course) => (
              <div className="course-row" key={course.code}>
                <span>{course.code}</span>
                <h3>{course.name}</h3>
                <p>{course.detail}</p>
              </div>
            ))}
          </div>
        </AcademicSection>

        <AcademicSection number="05" title="CV" id="cv" icon={<Download />}>
          <div className="cv-intro">
            <p>
              Add or replace the PDF files in the public folder, then update
              these links with the document names you want visitors to see.
            </p>
          </div>
          <div className="document-list">
            <a href="/maya-chen-cv.pdf" target="_blank" rel="noreferrer">
              <FileText />
              <span>
                <strong>Full academic CV</strong>
                <small>PDF document · replace with your file</small>
              </span>
              <Download />
            </a>
            <a href="/maya-chen-publications.pdf" target="_blank" rel="noreferrer">
              <FileText />
              <span>
                <strong>Complete publication list</strong>
                <small>PDF document · replace with your file</small>
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
}

function AcademicSection({
  number,
  title,
  id,
  icon,
  children,
}: AcademicSectionProps) {
  return (
    <section className="academic-section" id={id}>
      <div className="academic-section-heading">
        <span>{number}</span>
        <h2>{title}</h2>
        <i>{icon}</i>
      </div>
      <div className="academic-section-body">{children}</div>
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
