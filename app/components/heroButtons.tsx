import Link from "next/link"
import { MoveUpRight } from "lucide-react"

interface Props {
    text : string,
    target : string,
}


export default function HeroBtns({ text, target}:Props) {
    return (
        <Link 
            href={target} 
            className="group relative flex items-center justify-center gap-8 px-6 py-2 w-fit text-neutral-800 border-neutral-800 border border-[1.5] overflow-hidden"
            >
            <span className='relative group-hover:text-neutral-50 transition-all z-10'>{text}</span>
            <div 
                className="absolute left-0 top-0 bg-neutral-800 h-full w-0 group-hover:w-full transition-all duration-300 ease-in-out"
            />
        </Link>  
    )  
}