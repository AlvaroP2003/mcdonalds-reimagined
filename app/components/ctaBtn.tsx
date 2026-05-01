import Link from "next/link"
import { MoveUpRight } from "lucide-react"

interface Props {
    text : string,
    target : string,
}


export default function CtaBtn({ text, target}:Props) {
    return (
        <Link 
            href={target} 
            className="group relative flex items-center gap-8 p-1 w-fit text-neutral-50 border-neutral-50 border rounded-full font-semibold overflow-hidden"
            >
            <span className='relative pl-4 group-hover:text-neutral-800 transition-all z-10'>{text}</span>
            <span 
                className="relative rounded-full p-2 z-10 text-neutral-800 bg-neutral-50"
                ><MoveUpRight size={22} strokeWidth={1.5} /></span>

            <div 
                className="absolute left-0 top-0 bg-neutral-50 h-full w-0 group-hover:w-full transition-all duration-300 ease-in-out"
            />
        </Link>  
    )  
}