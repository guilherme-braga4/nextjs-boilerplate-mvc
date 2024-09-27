import './globals.css'
import React from 'react'

export default function AuthLayout({
  children
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
