import { Cairo } from 'next/font/google'
import NavBar from './components/NavBar'
import './globals.css'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Bueno | Personal Portfolio',
  description: 'My Personal Portfolio'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cairo.className} flex flex-col h-screen`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

