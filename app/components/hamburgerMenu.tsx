"use client"

import Link from "next/link"
import { useRef } from "react"

import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"

type HamburgerMenuProps = {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HamburgerMenu({ menuOpen, setMenuOpen }: HamburgerMenuProps) {

  const tl = useRef<gsap.core.Timeline | null>(null)

  useGSAP(() => {
    gsap.registerPlugin(SplitText)

    const hLinks = SplitText.create('.links h2', {
      type: 'lines',
      mask: 'lines'
    })

    tl.current = gsap.timeline({ paused: true })

    tl.current
    .to('#blur-bg', {
      yPercent: -100,
      duration: 0.4,
      ease: 'power3.out'
    })
    .to('#hamburger-menu', {
      yPercent: 100,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    .from(hLinks.lines, {
      xPercent: 100,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3")

    return () => {
      tl.current?.kill()
      hLinks.revert() // IMPORTANT cleanup
    }

  }, []) // 👈 only run once

  // control animation separately
  useGSAP(() => {
    if (!tl.current) return

    if (menuOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [menuOpen])

  const links = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Shop Merch', href: '/Sections/clothing' },
  ]

  return (
    <>
      <div
        id="blur-bg"
        className="fixed right-0 top-0 translate-y-full bg-white/5 backdrop-blur-xl w-[50%] h-screen z-30"
      />

      <div
        id="hamburger-menu"
        className="fixed left-0 top-0 -translate-y-full w-full lg:w-[50vw] h-screen bg-neutral-50 z-40"
      >
      <ul className="flex flex-col px-4 py-40">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="links flex items-center gap-4 text-3xl lg:text-6xl"
          >
            <p className="text-neutral-300">0{i + 1}</p>
            <h2 className="text-neutral-800">{link.label}</h2>
          </Link>
        ))}
      </ul>
    </div>
    </>
   
  )
}