import React from 'react'
import { TodosProvider } from '@/hooks/useTodos'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-Do List',
  description: 'Just keep it simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TodosProvider>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </TodosProvider>
  )
}
