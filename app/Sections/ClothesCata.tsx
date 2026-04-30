import Image from "next/image"
import HeroBtns from "../components/heroButtons"

export default function ClothesCTA() {
    return (
        <section id="clothes-cta" className="relative h-[60vh] lg:h-[100vh] flex justify-center items-center p-4 lg:p-20">

            <div className="relative flex justify-center items-center w-full h-full p-4">
                <Image src={'/clothes-cta.png'} fill alt="cta" className="absolute object-cover" />
                <div className="bg-black/60 absolute inset-0" />

                <div className="relative flex flex-col justify-center items-center z-10 text-center">
                    <h1 className="text-6xl lg:text-9xl text-neutral-50 mb-4">EAT IN STYLE</h1>
                    <p className="text-sm lg:text-lg text-neutral-100/80 lg:max-w-[50%] mb-4">Luxury doesn't stop at the table. Premium fabrics, clean lines, and understated distinction — wear the golden standard.</p>
                        <HeroBtns text="Grab a bite" target="#menu" prmColor="oklch(98.5% 0 0)" scndColor="oklch(26.9% 0 0)"/>     
                </div>
            </div>
           
        </section>
    )
}