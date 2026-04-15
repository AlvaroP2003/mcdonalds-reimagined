

import Link from "next/link"

type HamburgerMenuProps = {
    menuOpen : boolean
}

export default function HamburgerMenu({menuOpen}:HamburgerMenuProps) {

    const links = [
        { label: 'About Us',   href: '#about_us' },
        { label: 'Our Menu',   href: '#about_us' },
        { label: 'Shop Merch', href: '/Sections/clothing' },
    ]

    return (
        <div 
          id="hamburger-menu" 
          className="fixed top-0 w-full h-screen bg-neutral-50 z-40 transition-all"
          style={{ left : menuOpen ? '0' : '100%'}}
        >

            <ul className="flex flex-col px-4 py-40">
              {
                links.map((link,i) => (
                  <Link key={i} href={link.href} className="hamburger-links flex gap-2 text-3xl">
                    <p>0{i + 1}</p>
                    <h2>{link.label}</h2>
                  </Link>
                ))
              }
            </ul>
        </div>
    )
}