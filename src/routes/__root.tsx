import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Dr. Maya Chen — Academic & Personal Portfolio',
      },
      {
        name: 'description',
        content:
          'The academic work, research, teaching, and personal notebook of Dr. Maya Chen.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="site-frame">
          <SiteHeader />
          <main>{children}</main>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
