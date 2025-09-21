"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface CarouselSlide {
  src: string
  alt: string
  title: string
  description: string
}

const slides: CarouselSlide[] = [
  {
    src: "/images/carousel1.png",
    alt: "P. Diego Fares SJ con el Papa Francisco",
    title: "Con el Papa Francisco",
    description: "Encuentro espiritual"
  },
  {
    src: "/images/carousel2.png",
    alt: "P. Diego Fares SJ con el Papa Francisco",
    title: "Momento de diálogo",
    description: "Conversación pastoral"
  },
  {
    src: "/images/carousel3.png",
    alt: "P. Diego Fares SJ con el Papa Francisco",
    title: "Bendición papal",
    description: "Momento de gracia"
  }
]

export default function PhotoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
      <div className="relative">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            width={600}
            height={450}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-6">
          <h3 className="title-playfair-small mb-2 text-slate-700">
            {slides[currentSlide].title}
          </h3>
          <p className="text-slate-600 text-sm">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>
    </div>
  )
}