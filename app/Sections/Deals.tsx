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
        <section id="deals" className="flex flex-col justify-center py-30 px-20">

            <span>[ Exclusive Deals ]</span>
            <h1 className="text-6xl">They can't get enough</h1>

            <div className="flex flex-1 gap-1 py-20">
                {
                    items.map((item,i) => (
                        <div key={i} className={`w-full flex ${i % 2 === 0 ? 'flex-col' : 'flex-col-reverse'}`}>
                            <div className="relative w-full aspect-square">
                                <Image src={item.image} fill alt={item.title} className="object-cover"/>
                            </div>
                            <div className="flex justify-between p-2">
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}