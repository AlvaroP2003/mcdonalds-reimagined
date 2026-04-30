

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
          className="fixed left-0 w-full lg:w-[50vw] h-screen bg-neutral-50 z-40 transition-all"
          style={{ top : menuOpen ? '0' : '-100%'}}
        >

            <ul className="flex flex-col px-4 py-40">
              {
                links.map((link,i) => (
                  <Link key={i} href={link.href} className="flex items-center hamburger-links gap-4 text-3xl lg:text-6xl">
                    <p className="text-neutral-300">0{i + 1}</p>
                    <h2 className="text-neutral-800">{link.label}</h2>
                  </Link>
                ))
              }
            </ul>
        </div>
    )
}