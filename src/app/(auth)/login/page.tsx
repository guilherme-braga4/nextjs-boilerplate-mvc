'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { handleLogin } from '../actions/login.action'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    const credentials = { email, password }

    await handleLogin(credentials)
  }
  return (
    <div className="bg-gray-200 h-full flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Preencha os dados e acesse sua conta:
          </CardDescription>
        </CardHeader>
        <form onSubmit={submit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Digite seu email"
                  type={'email'}
                  onChange={e => setEmail(e.target.value)}
                />
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  placeholder="Digite sua senha"
                  type={'password'}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit">Entrar</Button>
          </CardFooter>
        </form>

        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={() => router.push('/signup')}>
            Criar uma conta
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
