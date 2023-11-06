import React from 'react'
import ThemeButton from './ThemeButton'
import Link from 'next/link'

type ListItem = {
  label: string,
  href: string,
  htmlFor?: string
}

const links: ListItem[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className='grid-parent header'>
      <nav className='nav'>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    id={link.href}
                    href={link.href}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href='/' className="btn btn-ghost normal-case text-xl">helmiqatqat</Link>
          <ThemeButton />
      </nav>
    </header>
  )
}
