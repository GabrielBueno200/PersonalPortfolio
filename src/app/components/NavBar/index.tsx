'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
            ${!isMenuOpen ? 'text-white' : 'text-white-green'}
            cursor-pointer
            rounded-sm
            bg-zinc-900 p-1 transition-all`}
        />
      </div>

      <div
        className={`
          ${!isMenuOpen ? 'hidden' : 'flex'}
          text-md
          w-full
          flex-col-reverse
          flex-wrap
          gap-6
          bg-black p-4 uppercase
          text-white
          md:flex
          md:h-16
          md:flex-row md:flex-nowrap
          md:items-center
          md:justify-between
          md:gap-0
        `}
      >
        <div className="social-medias">
          <span className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/gabriel-vr-bueno/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                className="cursor-pointer fill-slate-500 transition-colors hover:fill-[#0A66C2]"
              />
            </a>
            <a href="https://github.com/GabrielBueno200" target="_blank">
              <FaGithub
                size={30}
                className="cursor-pointer fill-slate-500 transition-colors hover:fill-white"
              />
            </a>
          </span>
        </div>

        <div className="nav-items flex flex-col gap-4 md:flex-row md:gap-6 md:text-xl">
          <Link className={`${isActive('/')} transition-all`} href="/">
            Home
          </Link>

          <Link
            className={`${isActive('/about')} transition-all`}
            href="/about"
          >
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
      </div>
    </nav>
  )
}

export default NavBar

