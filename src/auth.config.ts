import type { NextAuthConfig } from 'next-auth'
import NextAuth, { type User } from 'next-auth'

export const authConfig = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    error: '/',
    signIn: '/login'
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user

      return isAuthenticated
    },
    async jwt({ token, user }: any) {
      if (user) {
        return {
          user: user.user,
          access_token: user.accessToken,
          refresh_token: user.refreshToken,
          expires_at: user?.accessTokenExpiresAt
        }
      } else if (Date.now() < token.expires_at * 1000) {
        return token
      } else {
        if (!token.refresh_token) throw new Error('Missing refresh token')

        try {
          const response = await fetch('http://localhost:3015/auth/refresh', {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              refreshToken: token.refresh_token!
            }),
            method: 'POST'
          })

          const responseTokens = await response.json()

          if (!response.ok) throw responseTokens

          return {
            ...token,
            access_token: responseTokens.accessToken,
            expires_at: responseTokens.accessTokenExpiresAt
          }
        } catch (error) {
          console.error('Error refreshing access token', error)
          return { ...token, error: 'RefreshAccessTokenError' as const }
        }
      }
    },
    async session({ session, token }: any) {
      if (token.user) {
        session.user = token.user
      }

      return session
    }
  },
  providers: []
} satisfies NextAuthConfig
