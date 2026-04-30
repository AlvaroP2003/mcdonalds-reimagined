




import Link from "next/link"

type CartMenuProps = {
    cartOpen : boolean
}

export default function CartMenu({cartOpen}:CartMenuProps) {

    return (
        <div 
          id="hamburger-menu" 
          className="fixed left-0 w-full lg:w-[50vw] h-screen bg-neutral-50 z-30 transition-all"
          style={{ bottom : cartOpen ? '0' : '-100%'}}
        >

        </div>
    )
}