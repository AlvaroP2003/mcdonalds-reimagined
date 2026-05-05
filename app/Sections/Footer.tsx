import Link from "next/link"

import { Instagram } from "lucide-react"

  const links = [
    { label: 'About Us',   href: '#about_us' },
    { label: 'Our Menu',   href: '#about_us' },
    { label: 'Shop Merch', href: '/app/Sections/merch' },
  ]


  const socials = [
    { icon : Instagram, href : 'https://www.instagram.com/mcdonalds/'}
  ]

export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="lg:h-[45vh] flex flex-col justify-between bg-neutral-800 px-4 py-8 lg:p-10">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="text-neutral-200 lg:max-w-[30%]">
                    <svg width="50px" height="50px" viewBox="2.096 -27.722 295.809 295.809" xmlns="http://www.w3.org/2000/svg">
                        <path d="M196.489 18.773c23.334 0 42.253 98.376 42.253 219.73h33.81c0-130.692-34.059-236.635-76.062-236.635-23.899 0-45.221 31.84-59.163 81.629-13.939-49.789-35.268-81.629-59.165-81.629-42.003 0-76.066 105.943-76.066 236.635H35.91c0-121.354 18.921-219.73 42.252-219.73 23.338 0 42.264 90.809 42.264 202.834h33.802c.001-112.025 18.921-202.834 42.261-202.834M289.475 221.607c4.586 0 8.43 3.631 8.43 8.408 0 4.853-3.844 8.486-8.43 8.486-4.602 0-8.478-3.635-8.478-8.486 0-4.777 3.876-8.408 8.478-8.408m0 15.661c3.884 0 6.9-3.121 6.9-7.25 0-4.057-3.018-7.174-6.9-7.174-3.932 0-6.945 3.117-6.945 7.174-.001 4.128 3.013 7.25 6.945 7.25zm-3.287-12.159h3.809c2.331 0 3.43.928 3.43 2.82 0 1.785-1.114 2.531-2.574 2.686l2.804 4.367h-1.646l-2.672-4.248h-1.616v4.248h-1.533l-.002-9.873zm1.534 4.386h1.597c1.345 0 2.584-.067 2.584-1.632 0-1.313-1.124-1.519-2.157-1.519h-2.022l-.002 3.151z" fill="white"/>
                    </svg>

                    <p className="text-neutral-400 mt-4 text-lg">Every detail considered, every flavour perfected. Fast never meant ordinary — and it never will.</p>

                    <ul className="flex gap-2 py-4">
                        {
                        socials.map((link, i) => {
                            const Icon = link.icon

                            return (
                            <Link key={i} href={link.href} target="blank">
                                <Icon strokeWidth={1} size={30} className="text-neutral-100 hover:text-amber-200" />
                            </Link>
                            )
                        })
                        }
                    </ul>
                  
                </div>

                <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                    {
                    links.map((link,i) => (
                        <Link key={i} href={link.href} className="text-neutral-50 hover:text-amber-200">
                            {link.label}
                        </Link>
                    ))
                    }
                </div>
            
            </div>

            <div className="flex justify-between text-sm text-neutral-400">
                <span>
                    {year} © McDonalds
                </span>

                <span>All rights reserved</span>
            </div>

            <Link href="https://arsnova.co.za" target="blank" className="text-sm text-center text-neutral-50 hover:text-[#737DA0] transition-all"> created by Arsnova</Link>
           
        </footer>
    )
}