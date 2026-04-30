import Image from "next/image"
import HeroBtns from "../components/heroButtons"

export default function CTA() {
    return (
        <section id="cta" className="relative h-[50vh] lg:h-[75vh] flex justify-center items-center px-4">
            <Image src={'/cta.png'} fill alt="cta" className="absolute object-cover" />
            <div className="bg-black/60 absolute inset-0" />

            <div className="relative flex flex-col justify-center items-center z-10 text-center">
                <h1 className="text-5xl lg:text-9xl text-neutral-50 lg:max-w-[70%] mb-4">LUXURY HAS NEVER TASTED BETTER</h1>
                <p className="text-xs lg:text-lg text-neutral-100/80 lg:max-w-[30%] mb-4">Perfection pursued relentlessly becomes something greater than a meal. Finest ingredients, unhurried craftsmanship, every bite an occasion.</p>
                <HeroBtns text="Grab a bite" target="#menu" prmColor="oklch(98.5% 0 0)" scndColor="oklch(26.9% 0 0)"/>     
            </div>
        </section>
    )
}