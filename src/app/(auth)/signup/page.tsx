'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const submit = (event: React.FormEvent) => {
    event.preventDefault()

    // Sign up the user on POST to API
    // If user has been created, then redirect to home
  }

  return (
    <div className="bg-gray-200 h-full flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>
            Preencha os dados para criar a sua conta:
          </CardDescription>
        </CardHeader>
        <form onSubmit={submit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Digite seu nome" />
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Digite seu email"
                  type={'email'}
                />
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  placeholder="(15) XXXXX-XXXX"
                  type={'email'}
                />
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  placeholder="Digite sua senha"
                  type={'password'}
                />
                <Label htmlFor="password">Confirme a sua senha</Label>
                <Input
                  id="confirm-password"
                  placeholder="Digite sua senha"
                  type={'password'}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit">Confirmar</Button>
          </CardFooter>
        </form>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={() => router.push('/login')}>
            Já tem uma conta?
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
