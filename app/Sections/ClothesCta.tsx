'use client'

import Image from "next/image"
import CtaBtn from "../components/ctaBtn"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"


export default function ClothesCTA() {

    useGSAP(() => {
        const clothesCtaHeading = SplitText.create('#clothes-cta-heading', {type: 'lines', mask: 'lines'})

        gsap.from(clothesCtaHeading.lines, {
            scrollTrigger : {
                trigger : '#clothes-cta',
                start:'top 50%'
            },
            yPercent:100,
            stagger:0.01,
            ease:'power4.out'
        })

         gsap.from('#clothes-cta-body', {
            scrollTrigger : {
                trigger : '#clothes-cta',
                start:'top 50%'
            },
            yPercent:50,
            autoAlpha:0,
            delay:0.5,
        })
    },[])

    return (
        <section id="clothes-cta" className="relative h-[60vh] lg:h-[100vh] flex justify-center items-center p-4 lg:p-20">

            <div className="relative flex justify-center items-center w-full h-full p-4">
                <Image src={'/clothes-cta.png'} fill alt="cta" className="absolute object-cover" />
                <div className="bg-black/60 absolute inset-0" />

                <div className="relative flex flex-col justify-center items-center z-10 text-center">
                    <h1 id="clothes-cta-heading" className="text-6xl lg:text-9xl text-neutral-50 mb-4">EAT IN STYLE</h1>
                    <p id="clothes-cta-body" className="lg:text-lg text-neutral-100/80 lg:max-w-[50%] mb-4">Luxury doesn't stop at the table. Premium fabrics, clean lines, and understated distinction — wear the golden standard.</p>
                    <CtaBtn text="FIND YOUR FIT" target="/Sections/clothing"/>     
                </div>
            </div>
           
        </section>
    )
}