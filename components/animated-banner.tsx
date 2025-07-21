"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { bannerImages } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function AnimatedBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
  }

  return (
    <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden bg-black-dark">
      {bannerImages.map((image, index) => (
        <Image
          key={index}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0} // Prioritize first image for LCP
        />
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gold hover:bg-gold hover:text-black z-10"
        onClick={goToPrevious}
        aria-label="Previous banner image"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:bg-gold hover:text-black z-10"
        onClick={goToNext}
        aria-label="Next banner image"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gold w-6" : "bg-gold/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to banner image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
