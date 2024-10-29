import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LogOut, PlusSquare } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  const handleLogout = () => {
    // Implement logout logic here
    router.push('/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Note App</h1>
        </div>
        <ul className="mt-6">
          <li>
            <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <span className="mr-2">🏠</span> Home
            </Link>
          </li>
          <li>
            <Link href="/new-note" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <PlusSquare className="mr-2 h-5 w-5" /> New Note
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-0 w-64 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <LogOut className="mr-2 h-5 w-5" /> Logout
          </button>
        </div>
      </nav>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}
