'use client'

import Link from "next/link"
import Image from "next/image"
import { MoveUpRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState, useCallback } from "react"

const ZONE_MAP: Record<string, string> = {
  // Row 1 — top
  '1-1': 'l-t-2',   '2-1': 'l-t-1',   '3-1': 'c-t-1',  '4-1': 'c-t-1',  '5-1': 'r-t-1',  '6-1': 'r-t-2',  '7-1': 'r-t-2',

  // Row 2 — top-center
  '1-2': 'l-tc-2',  '2-2': 'l-tc-1',  '3-2': 'c-1',  '4-2': 'c-1',  '5-2': 'r-tc-1', '6-2': 'r-tc-2', '7-2': 'r-tc-2',

  // Row 4 — bottom-center
  '1-4': 'l-bc-2',  '2-4': 'l-bc-1',  '3-4': 'c-1',    '4-4': 'c-1',    '5-4': 'r-bc-1', '6-4': 'r-bc-2', '7-4': 'r-bc-2',

  // Row 5 — bottom
  '1-5': 'l-b-2',   '2-5': 'l-b-1',   '3-5': 'c-b-1',  '4-5': 'c-b-1',  '5-5': 'r-b-1',  '6-5': 'r-b-2',  '7-5': 'r-b-2',
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const heroImgRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState('c-1')

  const links = [
    { label: 'About Us',   href: '#about_us' },
    { label: 'Our Menu',   href: '#about_us' },
    { label: 'Shop Merch', href: '/app/Sections/merch' },
  ]

  useGSAP(() => {
    gsap.to('#hero-carousel', {
      xPercent: -50,
      duration: 50,
      ease: "none",
      repeat: -1,
    })
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = heroRef.current
    if (!el) return

    const { left, top, width, height } = el.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    const col = Math.min(7, Math.ceil((x / width) * 7))
    const row = Math.min(5, Math.ceil((y / height) * 4))
    const imageKey = ZONE_MAP[`${col}-${row}`]

    if (imageKey && imageKey !== activeImage) {
      setActiveImage(imageKey)
      gsap.fromTo(
        heroImgRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }
      )
    }
  }, [activeImage])

  const handleMouseLeave = useCallback(() => {
    setActiveImage('c-1')
    gsap.fromTo(
      heroImgRef.current,
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }
    )
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      <header className="flex items-center justify-between gap-16 h-[15vh] px-20">
        <svg width="50px" height="50px" viewBox="2.096 -27.722 295.809 295.809" xmlns="http://www.w3.org/2000/svg">
          <path d="M196.489 18.773c23.334 0 42.253 98.376 42.253 219.73h33.81c0-130.692-34.059-236.635-76.062-236.635-23.899 0-45.221 31.84-59.163 81.629-13.939-49.789-35.268-81.629-59.165-81.629-42.003 0-76.066 105.943-76.066 236.635H35.91c0-121.354 18.921-219.73 42.252-219.73 23.338 0 42.264 90.809 42.264 202.834h33.802c.001-112.025 18.921-202.834 42.261-202.834M289.475 221.607c4.586 0 8.43 3.631 8.43 8.408 0 4.853-3.844 8.486-8.43 8.486-4.602 0-8.478-3.635-8.478-8.486 0-4.777 3.876-8.408 8.478-8.408m0 15.661c3.884 0 6.9-3.121 6.9-7.25 0-4.057-3.018-7.174-6.9-7.174-3.932 0-6.945 3.117-6.945 7.174-.001 4.128 3.013 7.25 6.945 7.25zm-3.287-12.159h3.809c2.331 0 3.43.928 3.43 2.82 0 1.785-1.114 2.531-2.574 2.686l2.804 4.367h-1.646l-2.672-4.248h-1.616v4.248h-1.533l-.002-9.873zm1.534 4.386h1.597c1.345 0 2.584-.067 2.584-1.632 0-1.313-1.124-1.519-2.157-1.519h-2.022l-.002 3.151z" fill="oklch(14.5% 0 0)"/>
        </svg>

        <nav>
          <ul className="flex gap-8 font-semibold">
            {links.map((link, i) => (
              <Link key={i} href={link.href} className="flex justify-center items-center gap-2 whitespace-nowrap group min-w-30">
                <span className="opacity-0 transform group-hover:opacity-100 group-hover:translate-x-1 transition-all">[</span>
                <span>{link.label}</span>
                <span className="opacity-0 transform group-hover:opacity-100 group-hover:-translate-x-1 transition-all">]</span>
              </Link>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative h-[85vh] overflow-hidden">

        <div ref={heroImgRef} className="absolute bottom-0 left-1/2 transform translate-x-[-50%] z-30 w-[650px] h-[800px]">
          <Image
            key={activeImage}
            src={`/hero/${activeImage}.png`}
            alt={`hero-img-${activeImage}`}
            fill
            className="object-cover"
          />
        </div>

        <div id="hero-carousel" className="absolute left-0 top-1/3 flex gap-8 text-9xl italic whitespace-nowrap z-10 pointer-events-none">
          {Array.from({ length: 8 }).concat(Array.from({ length: 8 })).map((_, i) => (
            <span key={i} className="relative">I'M LOVIN IT ·</span>
          ))}
        </div>

        <div className="flex justify-between items-center h-full px-20">
          <div className="relative max-w-[300px]">
            <p className="mb-4 text-neutral-600">Fast food, elevated. From golden classics to bold new flavours, every bite is crafted to be familiar yet unforgettable.</p>
            <Link href={'#menu'} className="hero-cta flex items-center gap-8 p-1 w-fit border-b border-neutral-950">
              Grab a bite <MoveUpRight size={20} strokeWidth={1} />
            </Link>
            <div className="relative w-full h-[400px] mt-4">
              <Image src={'/hero/hero_1.png'} fill alt="hero_img_1" className="object-cover" />
            </div>
          </div>

          <div className="relative max-w-[300px]">
            <div className="relative w-full h-[400px] mb-4">
              <Image src={'/hero/hero_2.png'} fill alt="hero_img_2" className="object-cover" />
            </div>
            <p className="mb-4 text-neutral-600">Wear the culture. Limited pieces inspired by timeless design, street attitude, and unmistakable symbols.</p>
            <Link href={'#menu'} className="hero-cta flex items-center gap-8 p-1 w-fit border-b border-neutral-950">
              Shop now <MoveUpRight size={20} strokeWidth={1} />
            </Link>
          </div>
        </div>

      </main>
    </section>
  )
}