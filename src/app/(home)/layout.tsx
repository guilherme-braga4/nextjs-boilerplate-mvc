import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/app/(home)/components/Header/header'
import { SidebarMenu } from '@/app/(home)/components/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mePaga',
  description: 'Controle suas contas em grupo'
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="grid grid-cols-[15%_85%] h-screen w-screen">
          {/* SideBar */}
          <SidebarMenu />
          {children}
        </div>
      </body>
    </html>
  )
}
