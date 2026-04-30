import Image from "next/image"

const menu_items = [
  { id: 1, img: '/menu/bigmac.png', name: 'Big Mac Burger', price: 'R 149' },
  { id: 2, img: '/menu/fries.png', name: 'Singature Fries', price: 'R 69' },
  { id: 3, img: '/menu/chicken.png', name: 'Crispy Chicken Sandwich', price: 'R 139' },
  { id: 4, img: '/menu/shake.png', name: 'Grimace Shake', price: 'R 89' },
  { id: 5, img: '/menu/double.png', name: 'Double Smash Stack', price: 'R 179' },
  { id: 6, img: '/menu/wrap.png', name: 'Spicy Chicken Wrap', price: 'R 119' },
]

export default function Menu() {
  return (
    <section id="menu" className="px-4 lg:px-20">

      <p className="whitespace-nowrap text-sm lg:text-base text-neutral-800 mb-4">[ OUR MENU ]</p>

      <div className="flex flex-col lg:flex-row justify-between lg:items-start">
        <h1 className="text-5xl lg:text-8xl text-neutral-800 mb-4 lg:max-w-[40%]">
          Our top selection
        </h1>
        <p className="text-neutral-600 text-sm lg:text-lg lg:max-w-[30%]">
          Each dish on our menu represents the pinnacle of what we do — iconic flavours, refined to perfection. Nothing more. Nothing less.
        </p>
      </div>

      <main className="grid grid-cols-2 lg:grid-cols-3 gap-2 py-4">
        {menu_items.map((item) => (
          <div key={item.id}>
            <div className="relative h-[250px] lg:h-[500px] bg-neutral-200">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-neutral-600 flex justify-between p-2">
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </main>

    </section>
  )
}