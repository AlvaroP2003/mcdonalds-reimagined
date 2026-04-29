'use client'

import { useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Loader() {

    const [count,setCount] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);


    useGSAP(() => {
        const timeout = setTimeout(() => {
            const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.inOut" } })

            tl.to('.slide-left',       { xPercent: -100 })
            .to('.slide-left-inner', { xPercent: -100 }, "-=0.6")
            .to('.slide-right',      { xPercent:  100 }, "-=0.8") 
            .to('.slide-right-inner',{ xPercent:  100 }, "-=0.6")
            .to('.loading-count', { scale : 0}, "-=1.8")
        }, 5100)


        return () => clearTimeout(timeout)
    }, [])

    return (
        <div id="loading-screen" className="fixed inset-0 pointer-events-none flex justify-center items-center z-50">

            <div className="slide-left absolute h-screen w-[50%] left-0 top-0 bg-neutral-50 "/>
            <div className="slide-left-inner absolute h-screen w-[50%] left-0 top-0 bg-neutral-50/50"/>

            <div className="slide-right-inner absolute h-screen w-[50%] right-0 top-0 bg-neutral-50/50"/>
            <div className="slide-right absolute h-screen w-[50%] right-0 top-0 bg-neutral-50 "/>
            
            <h1 className="loading-count relative text-9xl text-neutral-400">{count}</h1>
        </div>
    )
}