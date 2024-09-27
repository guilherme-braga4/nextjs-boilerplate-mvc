// This file will run before any renderization of our components, that’s why this approach is preferrable instead of checking the authentication using the layout.tsx files.

import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '@/lib/routes'

const { auth } = NextAuth(authConfig)

export default auth(req => {
  const { nextUrl } = req

  const isAuthenticated = !!req.auth
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)

  // Any user can access the landing page screen
  if (nextUrl.pathname === 'home') {
    return Response.redirect(new URL('home', nextUrl))
  }

  // If the user has a current session and tried to go back to the login page, they will be redirected back to the /protected page.
  if (isPublicRoute && isAuthenticated) {
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
  }

  // If the user has a current session and tried to go back to the login page, they will be redirected back to the /protected page.
  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(ROOT, nextUrl))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
