'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()

  const isActive = (activePath: string) =>
    pathname === activePath ? 'text-white-green' : 'hover:text-zinc-400'

  return (
    <nav className="flex gap-6 bg-black uppercase text-white h-16 p-4 items-center justify-end text-xl">
      <Link className={`${isActive('/')} transition-all`} href="/">
        Home
      </Link>
      <Link className={`${isActive('/about')} transition-all`} href="/about">
        About
      </Link>
      <Link
        className={`${isActive('/experience')} transition-all`}
        href="/experience"
      >
        Experience
      </Link>
      <Link
        className={`${isActive('/portfolio')} transition-all`}
        href="/portfolio"
      >
        Portfolio
      </Link>
      <Link
        className={`${isActive('/contact')} transition-all`}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  )
}

export default NavBar

