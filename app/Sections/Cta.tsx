'use client'

import Image from "next/image"
import CtaBtn from "../components/ctaBtn"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"


export default function CTA() {


    useGSAP(() => {
        const ctaHeading = SplitText.create('#cta-heading', {type: 'lines', mask: 'lines'})

        gsap.from(ctaHeading.lines, {
            scrollTrigger : {
                trigger : '#cta',
                start:'top 50%'
            },
            yPercent:100,
            stagger:0.01,
            ease:'power4.out'
        })

         gsap.from('#cta-body', {
            scrollTrigger : {
                trigger : '#cta',
                start:'top 50%'
            },
            yPercent:50,
            autoAlpha:0,
            delay:0.5,
        })
    },[])


    return (
        <section id="cta" className="relative h-[50vh] lg:h-[75vh] flex justify-center items-center px-4">
            <Image src={'/cta.png'} fill alt="cta" className="absolute object-cover" />
            <div className="bg-black/60 absolute inset-0" />

            <div className="relative flex flex-col justify-center items-center z-10 text-center">
                <h1 id="cta-heading" className="text-5xl lg:text-9xl text-neutral-50 mb-4">LUXURY HAS NEVER TASTED BETTER</h1>
                <p id="cta-body" className="lg:text-lg text-neutral-100/80 lg:max-w-[40%] mb-4">Perfection pursued relentlessly becomes something greater than a meal. Finest ingredients, unhurried craftsmanship, every bite an occasion.</p>
                <CtaBtn text="GRAB A BITE" target="#menu"/>     
            </div>
        </section>
    )
}