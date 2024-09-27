import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from '@/auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async ({ email, password }) => {
        const res = await fetch('http://localhost:3015/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })

        // Verifica se a resposta não está OK antes de tentar acessar o JSON
        if (!res.ok) {
          console.log('Failed to login')
          throw new Error('Failed to login')
        }

        // Chama res.json() apenas uma vez
        const user = await res.json()
        console.log('logged in', user)

        return user
      }
    })
  ]
})
