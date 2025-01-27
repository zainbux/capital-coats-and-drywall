"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const brands = [
  { name: 'Brand 1', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Brand 2', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Brand 3', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Brand 4', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Brand 5', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Brand 6', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Brand 7', logo: '/placeholder.svg?height=60&width=120' },
]

export function TrustedBrands() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (brands.length - 4))
    }, 3000) // Change brands every 3 seconds

    return () => clearInterval(timer)
  }, [])

  const nextBrands = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (brands.length - 4))
  }

  const prevBrands = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (brands.length - 4)) % (brands.length - 4))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Partners</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Brands
          </p>
        </div>
        <div className="mt-10 relative">
          <div className="flex justify-center items-center space-x-8">
            {[0, 1, 2, 3, 4].map((offset) => {
              const index = (currentIndex + offset) % brands.length
              return (
                <div key={index} className="flex items-center justify-center w-1/5">
                  <Image
                    src={brands[index].logo}
                    alt={brands[index].name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto"
                  />
                </div>
              )
            })}
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={prevBrands} className="rounded-none">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={nextBrands} className="rounded-none">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-2">
          {brands.slice(0, brands.length - 4).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

