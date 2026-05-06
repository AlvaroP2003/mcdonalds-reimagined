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
            className="group relative flex items-center w-fit px-6 py-2 text-neutral-50 border-neutral-50 border overflow-hidden"
            >
            <span className='relative group-hover:text-neutral-800 text-sm lg:text-base transition-all z-10'>{text}</span>
            <div 
                className="absolute left-0 top-0 bg-neutral-50 h-full w-0 group-hover:w-full transition-all duration-300 ease-in-out"
            />
        </Link>  
    )  
}