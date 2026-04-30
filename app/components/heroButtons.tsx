import Link from "next/link"
import { MoveUpRight } from "lucide-react"

interface Props {
    text : string,
    target : string,
    prmColor : string,
    scndColor? : string,
}


export default function HeroBtns({ text, target, prmColor, scndColor}:Props) {
    return (
        <Link 
            href={target} 
            className="flex items-center gap-8 p-1 w-fit border rounded-full font-semibold"
            style={{ color : prmColor , borderColor : prmColor}}
            >
            <span className="pl-4">{text}</span>
            <span 
                className="rounded-full p-2"
                style={{ color : scndColor, backgroundColor : prmColor}}
                ><MoveUpRight size={22} strokeWidth={1.5} /></span>
        </Link>  
    )  
}