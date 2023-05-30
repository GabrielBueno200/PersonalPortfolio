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
        className="navbar-toggler bg-black p-2 md:hidden border-b-gray-600"
        onClick={handleToggleMenuOpen}
      >
        <GiHamburgerMenu color="#C1F2B6" size={30} />
      </div>

      <div
        className={`
          ${
            !isMenuOpen ? 'hidden' : 'flex'
          } flex-col flex-wrap gap-4 md:flex-row md:flex-nowrap md:gap-6 bg-black uppercase text-white
            lg:h-16 p-4 lg:items-center md:justify-end text-md md:text-xl
            md:flex
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

