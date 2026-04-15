'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronsDown } from "lucide-react"
import Footer from "../Footer"
import { useState, useEffect } from "react"
import HamburgerMenu from "@/app/components/hamburgerMenu"
import Icon from "@/icons"

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


const clothing_items = [
    {
        img: '/clothing/bomber_1.png',
        hover: '/clothing/bomber_2.png',
        item: 'Bomber Jacket',
        price: 1200,
    },
    {
        img: '/clothing/sweater_1.png',
        hover: '/clothing/sweater_2.png',
        item: 'Sweater',
        price: 800,
    },
    {
        img: '/clothing/blazer_1.png',
        hover: '/clothing/blazer_2.png',
        item: 'Blazer',
        price: 1500,
    },
    {
        img: '/clothing/belt_1.png',
        hover: '/clothing/belt_2.png',
        item: 'Belt',
        price: 400,
    },
    {
        img: '/clothing/tote_1.png',
        hover: '/clothing/tote_2.png',
        item: 'Tote Bag',
        price: 600,
    },
    {
        img: '/clothing/bag_1.png',
        hover: '/clothing/bag_2.png',
        item: 'Bag',
        price: 900,
    },
    {
        img: '/clothing/bracelet_1.png',
        hover: '/clothing/bracelet_2.png',
        item: 'Bracelet',
        price: 300,
    },
    {
        img: '/clothing/cap_1.png',
        hover: '/clothing/cap_2.png',
        item: 'Cap',
        price: 350,
    },
    {
        img: '/clothing/beanie_1.png',
        hover: '/clothing/beanie_2.png',
        item: 'Beanie',
        price: 300,
    },
]
    
    return (
        <section id="clothing" className="relative">

            <div className="relative h-dvh h-screen">
            <Image src="/clothing_hero.png" alt="clothing-hero-img" fill className="absolute inset-0 object-cover"/>

            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-white/0"/>

      <header className="flex items-center justify-between gap-16 h-[10vh] lg:h-[15vh] px-5 lg:px-20">
        {<Icon color="oklch(87.9% 0.169 91.605)"/>}

        <nav className="relative hidden lg:block">
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

            <div className="absolute flex flex-col items-center text-center bottom-5 left-1/2 w-full lg:max-w-[50%] translate-x-[-50%] lg:px-20">
                <h1 className="text-neutral-50 text-6xl lg:text-9xl mb-4">THIS IS SO YOU</h1>
                <p className="text-neutral-200 text-lg mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div id="chevron-icon">
                    <ChevronsDown size={70} strokeWidth={1} color="white"/>
                </div>
            </div>

            </div>

            <main className="py-20 px-4 lg:px-40">
                <div className="flex items-center gap-2 mb-8">
                    <p className="whitespace-nowrap">[Shop Merch]</p>
                    <div className="bg-neutral-800 w-full h-[0.5px]"/>
                </div>

                <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {
                        clothing_items.map((item,i) => (
                            <div key={i} className="relative">
                                <div className="relative h-[300px] lg:h-[600px] group">
                                    <Image src={item.hover} alt={item.item} fill className="object-cover"/>
                                    <Image src={item.img} alt={item.item} fill className="object-cover group-hover:opacity-0 transition-all"/>
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:py-2">
                                    <h3 className="font-semibold text-neutral-800">{item.item}</h3>
                                    <p className="text-sm lg:text-base text-neutral-500">R{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>

          <HamburgerMenu
            menuOpen={menuOpen}
          />
          
            <Footer/>

        </section>
    )
}