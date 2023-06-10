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
    <nav className="relative z-10">
      <div
        className="navbar-toggler bg-black p-2 md:hidden"
        onClick={handleToggleMenuOpen}
      >
        <GiHamburgerMenu
          size={30}
          className={`
            ${!isMenuOpen ? 'text-white-green' : 'text-secondary-green'}
            cursor-pointer
            rounded-sm
            bg-zinc-950 p-1 transition-all`}
        />
      </div>

      <div
        className={`
          ${!isMenuOpen ? 'hidden' : 'flex'}
          text-md
          flex-col flex-wrap gap-4
          bg-black p-4 uppercase
          text-white md:flex
          md:h-16 md:flex-row
          md:flex-nowrap md:items-center
          md:justify-end md:gap-6 md:text-xl
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

