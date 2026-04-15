import Image from "next/image"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"

export default function CTA() {
    return (
        <section id="cta" className="relative h-[40vh] lg:h-[75vh] flex justify-center items-center px-4">
            <Image src={'/cta.png'} fill alt="cta" className="absolute object-cover" />
            <div className="bg-black/50 absolute inset-0" />

            <div className="relative flex flex-col justify-center items-center z-10 text-center">
                <h1 className="text-4xl lg:text-9xl text-neutral-50 lg:max-w-[70%] mb-4">LUXURY HAS NEVER TASTED BETTER</h1>
                <p className="text-sm lg:text-lg text-neutral-100/80 lg:max-w-[30%] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <Link href={'#menu'} className="flex items-center gap-8 p-1 w-fit border-b border-neutral-100/80 text-neutral-100/80">
                    Shop Now <MoveUpRight size={20} strokeWidth={1} />
                </Link>
            </div>
        </section>
    )
}