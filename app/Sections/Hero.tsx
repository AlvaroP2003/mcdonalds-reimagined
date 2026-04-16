'use client'

import Link from "next/link"
import Image from "next/image"
import { MoveUpRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState, useCallback, useEffect } from "react"
import HamburgerMenu from "../components/hamburgerMenu"
import Icon from "@/icons"

const ZONE_MAP: Record<string, string> = {
  // Row 1 — top
  '1-1': 'l-t-2',   '2-1': 'l-t-1',   '3-1': 'c-t-1',  '4-1': 'c-t-1',  '5-1': 'r-t-1',  '6-1': 'r-t-2',

  // Row 2 — top-center
  '1-2': 'l-tc-2',  '2-2': 'l-tc-1',  '3-2': 'c-1',  '4-2': 'c-1',  '5-2': 'r-tc-1', '6-2': 'r-tc-2',

  // Row 3 — bottom-center
  '1-4': 'l-bc-2',  '2-4': 'l-bc-1',  '3-4': 'c-1',    '4-4': 'c-1',    '5-4': 'r-bc-1', '6-4': 'r-bc-2',

  // Row 4 — bottom
  '1-5': 'l-b-2',   '2-5': 'l-b-1',   '3-5': 'c-b-1',  '4-5': 'c-b-1',  '5-5': 'r-b-1',  '6-5': 'r-b-2',
}

export default function Hero() {

  const [menuOpen,setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // cleanup (important)
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])


  const heroRef = useRef<HTMLElement>(null)
  const heroImgRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState('c-1')

  const links = [
    { label: 'About Us',   href: '#about_us' },
    { label: 'Our Menu',   href: '#about_us' },
    { label: 'Shop Merch', href: '/Sections/clothing' },
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

    const col = Math.min(6, Math.ceil((x / width) * 6))
    const row = Math.min(4, Math.ceil((y / height) * 4))
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
      className="relative h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

  <div className="absolute bottom-0 left-0 right-0 h-[40%] z-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <header className="relative flex items-center justify-between gap-16 h-[10vh] lg:h-[15vh] px-5 lg:px-20">
        {<Icon color="oklch(87.9% 0.169 91.605)"/>}

        <nav className="hidden lg:block">
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

        {/* Hamburger Button */}
        <div 
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-2 z-50 lg:hidden"
        >
            <div className="bg-neutral-800 h-[2px] w-10"/>
            <div className="bg-neutral-800 h-[2px] w-10"/>
        </div>

      </header>

      <main className="relative h-[90vh] lg:h-[85vh] overflow-hidden">

        <div ref={heroImgRef} className="absolute bottom-0 left-1/2 transform translate-x-[-50%] z-30 w-full h-[600px] lg:w-[650px] lg:h-[800px]">
          <Image
            key={activeImage}
            src={`/hero/${activeImage}.png`}
            alt={`hero-img-${activeImage}`}
            fill
            className="object-cover"
          />
        </div>

        <div id="hero-carousel" className="absolute left-0 top-10 lg:top-1/3 flex gap-8 text-8xl lg:text-9xl italic whitespace-nowrap z-10 pointer-events-none">
          {Array.from({ length: 8 }).concat(Array.from({ length: 8 })).map((_, i) => (
            <span key={i} className="relative">I'M LOVIN IT ·</span>
          ))}
        </div>

        <div className="hidden lg:flex justify-between items-center h-full px-20">
          <div className="relative max-w-[300px]">
            <p className="mb-4 text-neutral-600">Fast food, elevated. From golden classics to bold new flavours, every bite is crafted to be familiar yet unforgettable.</p>
              <Link href={'#menu'} className="hero-cta flex items-center gap-8 px-2 py-1 w-fit border-b text-neutral-800 font-semibold border-neutral-800">
                <span>Grab a bite</span>
                <span><MoveUpRight size={22} strokeWidth={1.5} /></span>
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
             <Link href={'#menu'} className="hero-cta flex items-center gap-8 px-2 py-1 w-fit border-b text-neutral-800 font-semibold border-neutral-800">
                <span>Grab a bite</span>
                <span><MoveUpRight size={22} strokeWidth={1.5} /></span>
              </Link>     
          </div>
        </div>

      </main>

      <HamburgerMenu
        menuOpen={menuOpen}
      />

     
    </section>
  )
}