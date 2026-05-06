'use client'

import Image from "next/image"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"


const stats = [
    {
        number : '97%',
        desc : 'Customer Satisfaction'
    },
    {
        number : '42K',
        desc : 'Awards Recieved'
    },
    {
        number : '50+',
        desc : 'Years of Experience'
    },
]

export default function About() {

    useGSAP(() => {
        const aboutHeading = SplitText.create('#about-heading', {type: 'lines', mask: 'lines'})

        gsap.from(aboutHeading.lines, {
            scrollTrigger : {
                trigger : '#about',
                start:'top 50%'
            },
            yPercent:100,
            stagger:0.01,
            ease:'power4.out'
        })

         gsap.from('#about-body', {
            scrollTrigger : {
                trigger : '#about',
                start:'top 50%'
            },
            yPercent:50,
            autoAlpha:0,
            delay:0.5,
        })
    },[])

    return (
        <section id="about" className="relative lg:h-screen flex flex-col lg:flex-row items-center justify-center gap-16 p-4 mb-10">

            <div className="relative w-full lg:w-[500px] h-[700px]">
                <Image src="/about/about-1.png" fill alt="about" className="object-cover"/>
            </div>

            <div className="lg:max-w-[30%] flex flex-col justify-between h-[50vh]">
                
                <div className="flex flex-col">
                    <div className="whitespace-nowrap flex items-center gap-2 text-xs lg:tet-sm tracking-wider text-red-900 mb-4">
                        <div className="h-[1px] w-4 bg-red-900"/>
                        <span>ABOUT US</span>
                    </div>
                    <h1 id="about-heading" className="text-5xl lg:text-7xl mb-4 text-neutral-800">KNOW OUR FOOD</h1>
                    <p id="about-body" className="text-neutral-600 mb-8">We believe transparency is the ultimate luxury. From hand-selected beef, sourced from sustainable farms, to brioche buns kissed with the finest cultured butter — every ingredient earns its place. Our kitchen is an atelier, our chefs are artisans, and our commitment to quality is unwavering. What you taste is not convenience. It is care, distilled.</p>
                </div>

                <div className="flex justify-between">
                    {stats.map((stat,i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <span className="text-4xl lg:text-6xl text-neutral-800">{stat.number}</span>
                            <p className="text-sm text-center lg:text-base text-neutral-400">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}