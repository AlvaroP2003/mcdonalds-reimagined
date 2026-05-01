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
            className="group relative flex items-center gap-8 p-1 w-fit text-neutral-800 border-neutral-800 border rounded-full font-semibold overflow-hidden"
            >
            <span className='relative pl-4 group-hover:text-neutral-50 transition-all z-10'>{text}</span>
            <span 
                className="relative rounded-full p-2 z-10 text-neutral-50 bg-neutral-800"
                ><MoveUpRight size={22} strokeWidth={1.5} /></span>

            <div 
                className="absolute left-0 top-0 bg-neutral-800 h-full w-0 group-hover:w-full transition-all duration-300 ease-in-out"
            />
        </Link>  
    )  
}