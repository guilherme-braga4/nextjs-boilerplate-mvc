'use server'

import { signIn } from '@/auth'

export async function handleLogin(credentials: {
  email: string
  password: string
}) {
  return await signIn('credentials', { ...credentials, redirectTo: '/' })
}
