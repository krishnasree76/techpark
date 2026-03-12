"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const images = Array.from({ length: 30 }, (_, i) => `/images/${i + 1}.png`)

  return (
    <section className="py-24 lg:py-32 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Gallery
          </span>

          <h1 className="mt-3 text-4xl font-bold text-gray-700">
            Our Manufacturing & Facilities
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-700">
            Explore our machining capabilities, manufacturing facilities,
            and precision engineering operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(index)}
              className="cursor-pointer relative h-56 rounded-lg overflow-hidden border border-border hover:shadow-lg transition"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

      {/* Image Preview Modal */}
      {activeImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">

          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          <div className="relative max-w-5xl w-full h-[80vh]">

            <Image
              src={`/images/${activeImage + 1}.png`}
              alt="Gallery Image"
              fill
              className="object-contain"
            />

          </div>

        </div>
      )}

    </section>
  )
}