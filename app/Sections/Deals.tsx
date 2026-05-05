'use client'

import Image from "next/image"
import items from "@/database/deals"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"


export default function Deals() {

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(SplitText)


    useGSAP(() => {
        const dealsHeading = SplitText.create('#deals-heading', {type: 'lines', mask: 'lines'})

        gsap.from(dealsHeading.lines, {
            scrollTrigger : {
                trigger : '#deals',
                start:'top 50%'
            },
            yPercent:100,
            stagger:0.02,
            ease:'power3.out'
        })

        gsap.from('#deals-div', {
            scrollTrigger :{
                trigger: '#deals',
                start:'top 50%'
            },
            yPercent:100,
            autoAlpha:0,
            stagger:0.2,
        })

    },[])



    return (
        <section id="deals" className="flex flex-col justify-center h-[60vh] lg:h-screen px-4 lg:px-20">

            <span className="text-sm lg:text-base mb-4 text-neutral-600">[ EXCLUSIVE DEALS ]</span>
            <h1 id="deals-heading" className=" text-4xl lg:text-8xl text-neutral-800 lg:max-w-[30%]">THEY CAN'T GET ENOUGH</h1>

            <div className="flex gap-2 py-10 lg:py-20 overflow-x-scroll lg:overflow-hidden">
                {
                    items.map((item,i) => {
                        const isEven = i % 2 === 0

                        return (
                            <div 
                                key={i} 
                                id="deals-div"
                                className={`w-[250px] shrink-0 lg:w-full flex lg:flex-1 flex-col ${
                                    !isEven && 'lg:flex-col-reverse'
                                }`}
                            >                            
                                <div className="relative w-full aspect-square">
                                <Image src={item.image} fill alt={item.title} className="object-cover"/>
                            </div>
                            <div className="flex justify-between items-center p-2 text-neutral-800">
                                <h3 className="font-semibold text-neutral-800">{item.title}</h3>
                                <p className="text-neutral-600 text-sm lg:text-base">R{item.price}</p>
                            </div>
                        </div>
                        )
                        })
                }
            </div>
        </section>
    )
}