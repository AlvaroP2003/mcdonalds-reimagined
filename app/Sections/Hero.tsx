'use client'

import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { useRef, useState, useCallback, useEffect } from "react"
import Header from "../components/header"
import HamburgerMenu from "../components/hamburgerMenu"
import HeroBtns from "../components/heroButtons"

const ZONE_MAP: Record<string, string> =
{
  // Row 1 — top
  '1-1': 'l-t-2',   '2-1': 'l-t-1',   '3-1': 'c-t-1',  '4-1': 'c-t-1',  '5-1': 'r-t-1',  '6-1': 'r-t-2',

  // Row 2 — top-center
  '1-2': 'l-tc-2',  '2-2': 'l-tc-1',  '3-2': 'c-1',    '4-2': 'c-1',    '5-2': 'r-tc-1', '6-2': 'r-tc-2',

  // Row 3 — bottom-center
  '1-3': 'l-bc-2',  '2-3': 'l-bc-1',  '3-3': 'c-1',    '4-3': 'c-1',    '5-3': 'r-bc-1', '6-3': 'r-bc-2',

  // Row 4 — bottom
  '1-4': 'l-b-2',   '2-4': 'l-b-1',   '3-4': 'c-b-1',  '4-4': 'c-b-1',  '5-4': 'r-b-1',  '6-4': 'r-b-2',
}

export default function Hero() {

  gsap.registerPlugin(SplitText)

  const [menuOpen,setMenuOpen] = useState(false)

  const heroRef = useRef<HTMLElement>(null)
  const heroImgRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState('c-1')


useGSAP(() => {
        const heroSpan    = SplitText.create('.hero-span',    { type: 'lines', mask: 'lines' })
        const heroSubhead = SplitText.create('#hero-subhead', { type: 'lines', mask: 'lines' })

        const timeline = gsap.timeline()

        gsap.to('#hero-carousel', {
            xPercent: -50,
            duration: 50,
            ease: "none",
            repeat: -1,
        })

        timeline.from(heroSpan.lines,    { yPercent: -110 , delay : 5.8 })
                .from(heroSubhead.lines, { yPercent:  110 })

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

     {/* Hero overley */} 
    <div className="absolute bottom-0 left-0 right-0 h-[30%] z-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <Header 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      
      <main className="relative h-[90vh] lg:h-[85vh] overflow-hidden">

        <div ref={heroImgRef} className="absolute bottom-0 left-1/2 transform translate-x-[-50%] z-30 w-full h-[600px] lg:w-[650px] lg:h-[800px]">
          <Image
            key={activeImage}
            src={`/hero/${activeImage}.webp`}
            alt={`hero-img-${activeImage}`}
            fill
            className="object-cover"
          />
        </div>

        <div id="hero-carousel" className="absolute left-0 top-1/3 flex gap-8 text-8xl lg:text-9xl italic whitespace-nowrap z-10 pointer-events-none">
          {Array.from({ length: 8 }).concat(Array.from({ length: 8 })).map((_, i) => (
            <span key={i} className="relative hero-span">I'M LOVIN IT ·</span>
          ))}
        </div>

        <div className="relative flex flex-col lg:flex-row justify-between lg:items-center h-full px-4 py-8 lg:px-20">

          {/* Left Hero Section */}
          <div className="relative lg:max-w-[30%]">
            <h2 id="hero-subhead" className="mb-4 text-4xl lg:text-6xl">FAST FOOD <br></br> SLOW SAVOURED</h2>
             <HeroBtns text="Grab a bite" target="#menu" prmColor="oklch(26.9% 0 0)" scndColor="oklch(98.5% 0 0)"/>     
            <div id="hero-img" className="hidden lg:block relative h-[400px] mt-4">
              <Image src={'/hero/hero_1.webp'} fill alt="hero_img_1" className="object-cover" />
            </div>
          </div>

          {/* Right Hero Section */}
          <div className="relative lg:max-w-[30%] self-end lg:self-start z-40">
            <div id="hero-img" className="hidden lg:block relative w-full h-[400px] mb-4">
              <Image src={'/hero/hero_2.webp'} fill alt="hero_img_2" className="object-cover" />
            </div>
            <h2 id="hero-subhead" className="mb-4 text-neutral-800 text-4xl lg:text-6xl">DRESSED IN DISTINCTION</h2>
             <HeroBtns text="Find your fit" target="#menu" prmColor="oklch(26.9% 0 0)" scndColor="oklch(98.5% 0 0)"/>     
          </div>
        </div>

      </main>

     <HamburgerMenu
        menuOpen={menuOpen}
      />

     
    </section>
  )
}