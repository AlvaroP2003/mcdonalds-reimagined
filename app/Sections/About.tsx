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

            <div className="lg:max-w-[30%] flex flex-col justify-between h-[70%] py-4">

            <div className="flex gap-4 items-center mb-8">
                <span className="whitespace-nowrap text-neutral-800">[About Us]</span>
                <div className="bg-neutral-800 w-full h-[0.5px]"/>
            </div>


            <div>
            <h1 className="text-5xl lg:text-7xl mb-4 text-neutral-800">Know our food</h1>

            <p className="text-neutral-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.</p>
            </div>

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