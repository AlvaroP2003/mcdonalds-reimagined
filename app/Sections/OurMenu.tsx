export default function Menu() {
    return (
        <section id="menu" className="px-4 lg:px-20">
            
            <div className="flex items-center gap-2 mb-8">
                <p className="whitespace-nowrap text-neutral-800">[Our Menu]</p>
                <div className="bg-neutral-800 h-[0.5px] w-full"/>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                <h1 className="text-5xl lg:text-8xl text-neutral-800 mb-4 lg:max-w-[20%]">
                    Our top selection
                </h1>
                <p className="text-neutral-600 text-sm lg:text-base lg:max-w-[30%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <main className="flex flex-col gap-2 py-4">

                {/* First Row */}
                <div className="flex gap-2">
                    <div className="w-1/2 lg:w-2/3">
                        <div className="bg-neutral-400 h-[250px] lg:h-[500px]"></div>
                        <div className="text-neutral-600 flex justify-between px-4 py-2">
                            <h3 className="font-semibold">Item Title</h3>
                            <p>Price</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/3">
                        <div className="bg-neutral-400 h-[250px] lg:h-[500px]"></div>
                        <div className="text-neutral-600 flex justify-between px-4 py-2">
                            <h3 className="font-semibold">Item Title</h3>
                            <p>Price</p>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-2">
                    <div className="w-1/2 lg:w-2/5">
                        <div className="bg-neutral-400 h-[220px] lg:h-[450px]"></div>
                        <div className="text-neutral-600 flex justify-between px-4 py-2">
                            <h3 className="font-semibold">Item Title</h3>
                            <p>Price</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-3/5">
                        <div className="bg-neutral-400 h-[220px] lg:h-[450px]"></div>
                        <div className="text-neutral-600 flex justify-between px-4 py-2">
                            <h3 className="font-semibold">Item Title</h3>
                            <p>Price</p>
                        </div>
                    </div>
                </div>

                {/* Third Row */}
                <div className="flex gap-2">
                    <div className="w-1/2 lg:w-2/3">
                        <div className="bg-neutral-400 h-[250px] lg:h-[500px]"></div>
                        <div className="text-neutral-600 flex justify-between px-4 py-2">
                            <h3 className="font-semibold">Item Title</h3>
                            <p>Price</p>
                        </div>
                    </div>

                    <div className="w-1/2 lg:w-1/3">
                        <div className="bg-neutral-400 h-[250px] lg:h-[500px]"></div>
                        <div className="flex justify-between px-4 py-2">
                            <h3 className="font-semibold text-neutral-800">Item Title</h3>
                            <p className="text-neutral-600">Price</p>
                        </div>
                    </div>
                </div>

            </main>
        </section>
    )
}