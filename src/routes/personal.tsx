import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Camera, Map, Music2, PenLine } from 'lucide-react'
import { ProfileAvatar } from '@/components/profile-avatar2'

export const Route = createFileRoute('/personal')({
  component: PersonalPage,
})

const notebookEntries = [
  {
    number: '01',
    icon: <Map />,
    label: 'Places I return to',
    text: 'Foggy coastal paths, old libraries, night trains, and any kitchen where someone is teaching me a recipe.',
  },
  {
    number: '02',
    icon: <Music2 />,
    label: 'Currently listening',
    text: 'A running list for records, radio programmes, live sets, and songs attached to particular seasons.',
  },
  {
    number: '03',
    icon: <Camera />,
    label: 'Things I notice',
    text: 'Hand-painted signs, improvised repairs, marginalia, public benches, and the choreography of everyday queues.',
  },
]

function PersonalPage() {
  return (
    <div className="personal-page page-enter">
      <header className="personal-hero">
        <div className="personal-title">
          <p className="eyebrow">Personal notebook · Vol. I</p>
          <h1>
            Field notes
            <span>& other small things</span>
          </h1>
          <p>
            A slower space for the parts of life that do not fit inside an
            institutional biography.
          </p>
        </div>
        <ProfileAvatar mood="personal" />
        <div className="hand-note" aria-hidden="true">
          <span>Start here</span>
          <svg viewBox="0 0 100 70">
            <path d="M5 12c31 5 58 15 82 43M69 48l18 7-5-18" />
          </svg>
        </div>
      </header>

      <section className="dialogue-section" aria-labelledby="dialogue-title">
        <div className="dialogue-heading">
          <span>Open prompts</span>
          <h2 id="dialogue-title">A dialogue with myself</h2>
          <p>
            These are designed as invitations. Replace each answer with your
            own interests, experiences, or fragments from a diary.
          </p>
        </div>

        <div className="dialogue-stack">
          {notebookEntries.map((entry) => (
            <article className="dialogue-card" key={entry.number}>
              <div className="dialogue-number">{entry.number}</div>
              <div className="dialogue-icon">{entry.icon}</div>
              <div>
                <p className="dialogue-prompt">{entry.label}</p>
                <p className="dialogue-answer">{entry.text}</p>
                <span className="edit-prompt">
                  <PenLine size={14} /> Ready to personalize
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="diary-section">
        <div className="diary-date">
          <span>14</span>
          <p>August<br />2026</p>
        </div>
        <article className="diary-entry">
          <p className="eyebrow">Latest diary entry</p>
          <h2>On keeping a record</h2>
          <p className="drop-cap">
            Most days feel too ordinary to write down. Later, those are exactly
            the days I wish I could revisit: what was on the table, which route
            I walked home, the sentence a friend said that changed the shape of
            the afternoon.
          </p>
          <p>
            This page is a shelf for those details. It can hold travel notes,
            reading lists, photographs, recipes, and unfinished thoughts—small
            evidence of a life beyond the formal CV.
          </p>
          <a href="#dialogue-title">
            Browse earlier notes <ArrowUpRight size={17} />
          </a>
        </article>
        <aside className="margin-note">
          <p>In the margins</p>
          <blockquote>Pay attention. Then write it down.</blockquote>
        </aside>
      </section>

      <footer className="personal-footer">
        <span>End of the current notebook</span>
        <a href="mailto:maya.chen@example.edu">Write to me <ArrowUpRight size={16} /></a>
      </footer>
    </div>
  )
}
