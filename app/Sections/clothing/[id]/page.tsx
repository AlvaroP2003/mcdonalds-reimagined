

import { clothing_items } from "@/database/clothes"

interface Props {
    params : { id : string}
}

export default async function DetailsPage({ params } : Props) {


    const { id } = await params

    const item = clothing_items.find(i => i.id == id)

    return (
        <section id="clothes-details">
            {item?.item}
        </section>
    )
}