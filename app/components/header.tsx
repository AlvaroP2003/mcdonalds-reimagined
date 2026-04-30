import Icon from "@/icons"
import { ShoppingBag } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

interface Props {
    menuOpen : boolean
    setMenuOpen : Dispatch<SetStateAction<boolean>>
}

export default function Header({ menuOpen, setMenuOpen }:Props) {

      const links = [
      { label: 'ABOUT US',   href: '#about_us' },
      { label: 'OUR MENU',   href: '#about_us' },
      { label: 'SHOP MERCH', href: '/Sections/clothing' },
      ]

    return (
              <header className="relative flex items-center justify-between h-[10vh] lg:h-[15vh] px-5 lg:px-20">
                {<Icon color="oklch(87.9% 0.169 91.605)"/>}
      
                <div className="flex items-center gap-5 lg:gap-10">

                  <ShoppingBag strokeWidth={1} className="cursor-pointer"/>

                  {/* Hamburger Button */}
                  <div 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col gap-2 z-50 cursor-pointer"
                  >
                      <div className={`bg-neutral-800 origin-center transition-all h-[1px] w-10 ${menuOpen ? ' rotate-20 translate-y-[5px]' : ''}`}/>
                      <div className={`bg-neutral-800 origin-center transition-all h-[1px] w-10 ${menuOpen ? '-rotate-20 -translate-y-[5px]' : ''}`}/>
                  </div>
          
                </div>
        
               
              </header>
    )
}