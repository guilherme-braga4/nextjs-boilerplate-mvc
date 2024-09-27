'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">shacn-ui POC</Link>
        </div>
        <nav className="space-x-4">
          <Link href="/about" className="hover:underline">
            Como Funciona
          </Link>
          <Link href="/premium" className="hover:underline">
            Premium
          </Link>
        </nav>
        <div className="space-x-4 flex items-center">
          <Image
            src="/images/profile.png"
            width={50}
            height={50}
            alt="Picture of the author"
            sizes="(max-width: 968px) 30px, 30px (max-width: 1440px) 100px, 100px"
            className="rounded-full"
          />
          <p>Larissa</p>
          <Button onClick={() => signOut()}>Sair</Button>
        </div>
      </div>
    </header>
  )
}
