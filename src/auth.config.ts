import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    error: '/',
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user

      return isAuthenticated
    }
  },
  providers: []
} satisfies NextAuthConfig
