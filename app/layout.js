import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Drama Streaming - Chinese Drama Online',
  description: 'Watch Chinese dramas online for free',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>
        <nav className="bg-gray-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Drama Streaming</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/search" className="hover:text-gray-300">Search</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
