'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
  const pathname = usePathname()

  const isActive = (activePath: string) =>
    pathname === activePath ? 'text-white-green' : 'hover:text-zinc-400'

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleToggleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav>
      <div
        className="navbar-toggler bg-black p-2 md:hidden"
        onClick={handleToggleMenuOpen}
      >
        <GiHamburgerMenu
          size={30}
          className={`
            ${!isMenuOpen ? 'text-white-green' : 'text-secondary-green'}
            cursor-pointer
            transition-all
            bg-zinc-950 p-1 rounded-sm`}
        />
      </div>

      <div
        className={`
          ${
            !isMenuOpen ? 'hidden' : 'flex'
          } flex-col flex-wrap gap-4 md:flex-row md:flex-nowrap md:gap-6 bg-black uppercase text-white
            p-4 md:items-center md:justify-end text-md md:text-xl
            md:flex md:h-16
        `}
      >
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
      </div>
    </nav>
  )
}

export default NavBar

