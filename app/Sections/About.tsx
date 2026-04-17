import Image from "next/image"



const stats = [
    {
        number : '97%',
        desc : 'Customer Satisfaction'
    },
    {
        number : '42K',
        desc : 'Awards Recieved'
    },
    {
        number : '50+',
        desc : 'Years of Experience'
    },
]

export default function About() {
    return (
        <section id="about" className="relative lg:h-screen flex flex-col lg:flex-row items-center justify-center gap-8 p-4 mb-10">


            <div className="relative w-full lg:w-[500px] h-[700px]">
                <Image src="/about.png" fill alt="about" className="object-cover"/>
            </div>

            <div className="lg:max-w-[30%] flex flex-col py-4">
                <span className="whitespace-nowrap text-sm lg:text-base text-neutral-800 mb-4">[ About Us ]</span>

                <h1 className="text-5xl lg:text-7xl mb-4 text-neutral-800">Know our food</h1>
                <p className="text-neutral-600 mb-8">We believe transparency is the ultimate luxury. From hand-selected beef, sourced from sustainable farms, to brioche buns kissed with the finest cultured butter — every ingredient earns its place. Our kitchen is an atelier, our chefs are artisans, and our commitment to quality is unwavering. What you taste is not convenience. It is care, distilled.</p>

                <div className="flex justify-between">
                    {stats.map((stat,i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <span className="text-4xl lg:text-6xl text-neutral-800">{stat.number}</span>
                            <p className="text-sm text-center lg:text-base text-neutral-600">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}