import Image from "next/image"


const items = [
  {
    image: '/deals/happy_meal.png',
    title: 'Happy Meal',
    price: 4.99
  },
  {
    image: '/deals/happy_meal.png',
    title: 'Happy Meal',
    price: 4.99
  },
  {
    image: '/deals/happy_meal.png',
    title: 'Happy Meal',
    price: 4.99
  },
  {
    image: '/deals/happy_meal.png',
    title: 'Happy Meal',
    price: 4.99
  }
]

export default function Deals() {
    return (
        <section id="deals" className="flex flex-col justify-center py-10 lg:py-30 px-4 lg:px-20">

            <span className="text-sm lg:text-base mb-4">[ Exclusive Deals ]</span>
            <h1 className="text-4xl lg:text-8xl">They can't get enough</h1>

            <div className="flex gap-2 py-10 lg:py-20 overflow-x-scroll lg:overflow-hidden">
                {
                    items.map((item,i) => {
                        const isEven = i % 2 === 0

                        return (
                            <div 
                                key={i} 
                                className={`w-[250px] shrink-0 lg:w-full flex lg:flex-1 flex-col ${
                                    !isEven && 'lg:flex-col-reverse'
                                }`}
                            >                            
                                <div className="relative w-full aspect-square">
                                <Image src={item.image} fill alt={item.title} className="object-cover"/>
                            </div>
                            <div className="flex justify-between items-center p-2 text-neutral-800">
                                <h3 className="font-semibold text-neutral-800">{item.title}</h3>
                                <p className="text-neutral-600 text-sm lg:text-base">R{item.price}</p>
                            </div>
                        </div>
                        )
                        })
                }
            </div>
        </section>
    )
}