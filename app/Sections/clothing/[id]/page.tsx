"use client"

import * as React from 'react'
import Image from "next/image"
import { Star, ChevronRight, ShoppingBag, Heart, RotateCcw, Truck } from "lucide-react"
import { useState } from "react"

import { clothing_items } from "@/database/clothes"

type Props = {
  params: Promise<{ id: string }>
}

export default function DetailsPage({ params }: Props) {

  const { id } = React.use(params)

  const item = clothing_items.find((i) => i.id === id) ?? clothing_items[0]

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState(item.img)
  const [wishlist, setWishlist] = useState(false)

  const filledStars = Math.round(item.rating)

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-800">

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* ── Gallery ── */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex gap-2.5 p-6 lg:pl-12 overflow-hidden">

          {/* Thumbnails */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            {item.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(src)}
                className={[
                  "w-16 h-20 relative overflow-hidden border-[1.5px] transition-all duration-200 bg-transparent p-0",
                  activeImage === src
                    ? "border-neutral-800 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80",
                ].join(" ")}
              >
                <Image src={src} alt={item.item} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 overflow-hidden">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
              {item.isNew && (
                <span className="inline-block px-2.5 py-0.5 text-xs tracking-widest uppercase font-medium bg-neutral-800 text-neutral-50">
                  New
                </span>
              )}
              {item.isSale && (
                <span className="inline-block px-2.5 py-0.5 text-xs tracking-widest uppercase font-medium bg-red-700 text-white">
                  Sale
                </span>
              )}
              {item.isBestseller && (
                <span className="inline-block px-2.5 py-0.5 text-xs tracking-widest uppercase font-medium bg-yellow-500 text-neutral-800">
                  Bestseller
                </span>
              )}
            </div>
            <Image
              src={activeImage}
              alt={item.item}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* ── Info ── */}
        <div className="flex flex-col px-6 py-10 lg:px-16 lg:py-14 overflow-y-auto">

          {/* Eyebrow */}
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-3.5">
            {item.category} · {item.sku}
          </p>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-light leading-none tracking-tight mb-4">
            {item.item}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2.5 mb-7">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  strokeWidth={1.2}
                  fill={i < filledStars ? "currentColor" : "none"}
                  className="text-neutral-800"
                />
              ))}
            </div>
            <span className="text-xs text-neutral-500 tracking-wide">
              {item.rating} ({item.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pb-7 border-b border-neutral-200 mb-7">
            <span className="text-3xl font-normal tracking-wide">
              R{item.price.toLocaleString()}
            </span>
            {item.compareAtPrice && (
              <>
                <span className="text-base text-neutral-500 line-through">
                  R{item.compareAtPrice.toLocaleString()}
                </span>
                <span className="text-xs tracking-widest text-red-700 uppercase">
                  Save R{(item.compareAtPrice - item.price).toLocaleString()}
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-lg font-light leading-relaxed text-neutral-600 mb-8 italic">
            {item.description}
          </p>

          {/* Sizes */}
          {item.sizes[0] !== "One Size" && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs tracking-widest uppercase text-neutral-500">Size</span>
                <button className="text-xs tracking-widest uppercase text-neutral-500 underline underline-offset-2 cursor-pointer">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {item.sizes.map((s) => {
                  const available = item.availableSizes.includes(s)
                  return (
                    <button
                      key={s}
                      disabled={!available}
                      onClick={() => available && setSelectedSize(s)}
                      className={[
                        "min-w-[3.25rem] h-11 border text-sm tracking-wide px-3 transition-all duration-150",
                        selectedSize === s
                          ? "bg-neutral-800 text-neutral-50 border-neutral-800"
                          : available
                          ? "bg-transparent text-neutral-800 border-neutral-300 hover:border-neutral-800 hover:bg-neutral-100"
                          : "opacity-30 cursor-not-allowed line-through border-neutral-300",
                      ].join(" ")}
                    >
                      {s}
                    </button>
                  )
                })}
              </div>
              {item.fit && (
                <p className="text-sm text-neutral-600 leading-relaxed mb-8 py-3.5 px-4 bg-neutral-100 border-l-2 border-neutral-800">
                  {item.fit}
                </p>
              )}
            </div>
          )}

          {/* Low stock */}
          {item.stockCount <= 10 && (
            <p className="text-xs tracking-widest text-red-700 uppercase mb-3">
              Only {item.stockCount} left in stock
            </p>
          )}

          {/* CTA */}
          <div className="flex gap-2.5 mb-8">
            <button className="flex-1 h-13 bg-neutral-800 text-neutral-50 text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-colors duration-200 hover:bg-neutral-700">
              <ShoppingBag size={15} />
              Add to Bag
            </button>
            <button
              onClick={() => setWishlist(!wishlist)}
              title="Add to Wishlist"
              className={[
                "w-13 h-13 border flex items-center justify-center cursor-pointer transition-all duration-200",
                wishlist
                  ? "bg-neutral-800 text-neutral-50 border-neutral-800"
                  : "bg-transparent text-neutral-800 border-neutral-300 hover:border-neutral-800",
              ].join(" ")}
            >
              <Heart size={16} fill={wishlist ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Shipping / Returns strip */}
          <div className="flex border-t border-b border-neutral-200 mb-8">
            <div className="flex-1 py-4 flex items-center gap-2.5 text-xs tracking-wide text-neutral-600">
              <Truck size={14} />
              <span>Free delivery over R1,000</span>
            </div>
            <div className="flex-1 py-4 pl-4 flex items-center gap-2.5 text-xs tracking-wide text-neutral-600 border-l border-neutral-200">
              <RotateCcw size={14} />
              <span>30-day free returns</span>
            </div>
          </div>

          {/* Accordions */}
          <AccordionItem label="Product Details" defaultOpen>
            <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
              {item.details.map((d, i) => (
                <li
                  key={i}
                  className="text-sm text-neutral-600 tracking-wide pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-neutral-400"
                >
                  {d}
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem label="Material & Origin">
            <p className="text-sm text-neutral-600 tracking-wide leading-relaxed mb-2">
              {item.material}
            </p>
            <p className="text-sm text-neutral-600 tracking-wide leading-relaxed">
              {item.origin}
            </p>
          </AccordionItem>

          <AccordionItem label="Care Instructions">
            <div className="flex flex-wrap gap-2">
              {item.careInstructions.map((c, i) => (
                <span
                  key={i}
                  className="text-xs tracking-wide px-2.5 py-1 border border-neutral-300 text-neutral-600"
                >
                  {c}
                </span>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem label="Shipping & Returns">
            <p className="text-sm text-neutral-600 tracking-wide leading-relaxed mb-2">
              {item.shippingInfo}
            </p>
            <p className="text-sm text-neutral-600 tracking-wide leading-relaxed">
              {item.returnPolicy}
            </p>
          </AccordionItem>

        </div>
      </div>
    </div>
  )
}

/* ── Accordion component ── */
function AccordionItem({
  label,
  children,
  defaultOpen = false,
}: {
  label: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase text-neutral-800 text-left"
      >
        {label}
        <ChevronRight
          size={14}
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(90deg)" : "none" }}
        />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}