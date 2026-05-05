'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronsDown } from "lucide-react"
import Footer from "../Footer"
import { useState, useEffect } from "react"
import Header from "@/app/components/header"
import HamburgerMenu from "@/app/components/hamburgerMenu"
import { clothing_items } from "@/database/clothes"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Clothing() {

    const [menuOpen,setMenuOpen] = useState(false)
    
      useEffect(() => {
        if (menuOpen) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = "auto"
        }
    
        return () => {
          document.body.style.overflow = "auto"
        }
      }, [menuOpen])


    useGSAP(() => {
    gsap.to('#chevron-icon', {
        y: -12,
        duration: 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
    })
    }, [])

    const links = [
        { label: 'About Us',   href: '/' },
        { label: 'Our Menu',   href: '/#menu' },
        { label: 'Shop Merch', href: '/Sections/clothing' },
    ]

    
    return (
        <section id="clothing" className="relative">

            <div className="relative h-dvh h-screen">
            <Image src="/clothing_hero.png" alt="clothing-hero-img" fill className="absolute inset-0 object-cover"/>

            <div className="absolute bottom-0 w-full h-[50%] bg-linear-to-t from-white to-white/0"/>

            <Header 
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <div className="absolute flex flex-col items-center text-center bottom-5 left-1/2 w-full lg:max-w-[50%] translate-x-[-50%] lg:px-20">
                <h1 className="text-neutral-800 text-6xl lg:text-9xl mb-2">THIS IS SO YOU</h1>
                <p className="text-neutral-800 text-base text-xl mb-8">From the drive-through to the streets, our collection is built for those who refuse to compromise. Premium cuts, iconic branding, effortlessly wearable — because even on the go, you deserve to look the part.</p>

                <div id="chevron-icon" className="text-neutral-800">
                    <ChevronsDown size={60} strokeWidth={1}/>
                </div>
            </div>

            </div>

            <main className="py-20 px-4 lg:p-40">
                <p className="mb-4 text-sm lg:text-base">[ SHOP MERCH ]</p>

                <h1 className="text-5xl lg:text-8xl text-neutral-800 mb-8">Clothing made for you</h1>

                <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {
                        clothing_items.map((item,i) => (
                            <Link key={i} href={`/Sections/clothing/${item.id}`} className="relative">
                                <div className="relative h-[300px] lg:h-[600px] group">
                                    <Image src={item.hover} alt={item.item} fill className="object-cover"/>
                                    <Image src={item.img} alt={item.item} fill className="object-cover group-hover:opacity-0 transition-all"/>
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:py-2">
                                    <h3 className="font-semibold text-neutral-800">{item.item}</h3>
                                    <p className="text-sm lg:text-base text-neutral-500">R{item.price}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </main>

          <HamburgerMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          
        </section>
    )
}