"use client"

import { useState, useEffect } from "react"

interface GalleryImage {
  src: string
  alt: string
}

const images: GalleryImage[] = [
  {
    src: "/images/biografia.png",
    alt: "P. Diego Fares SJ"
  },
  {
    src: "/images/carousel1.png",
    alt: "P. Diego Fares SJ con el Papa Francisco"
  },
  {
    src: "/images/carousel2.png",
    alt: "P. Diego Fares SJ con el Papa Francisco"
  },
  {
    src: "/images/carousel3.png",
    alt: "P. Diego Fares SJ con el Papa Francisco"
  },
  {
    src: "/images/carousel.png",
    alt: "P. Diego Fares SJ"
  },
  {
    src: "/images/logo.svg",
    alt: "Logo P. Diego Fares SJ"
  }
]

export default function BiografiaGallery() {
  const [startIndex, setStartIndex] = useState(0)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Create rotated array based on startIndex
  const rotatedImages = [
    ...images.slice(startIndex),
    ...images.slice(0, startIndex)
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {rotatedImages.map((image, index) => (
        <div
          key={`${startIndex}-${index}`}
          className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-500"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}