"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The team did an amazing job painting our living room. The attention to detail was impressive!',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Mike Thompson',
    role: 'Business Owner',
    content: 'We hired them for our office renovation, and the results exceeded our expectations. Highly recommended!',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Emily Davis',
    role: 'Interior Designer',
    content: 'As an interior designer, I\'ve worked with many painting services, and this team is by far the best.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'John Smith',
    role: 'Real Estate Agent',
    content: 'Their painting services have significantly increased the value of properties I\'ve listed. A game-changer!',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Lisa Brown',
    role: 'Restaurant Owner',
    content: 'They transformed our restaurant\'s ambiance with their expert color choices and flawless execution.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'David Wilson',
    role: 'Architect',
    content: 'Their ability to bring our design visions to life through paint is unparalleled. A trusted partner for all our projects.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length)
    }, 5000) // Change testimonials every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length)
  }

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mt-10 relative">
          <div className="flex space-x-4 overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length
              return (
                <Card key={index} className="rounded-none flex-shrink-0 w-full sm:w-1/3">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonials[index].avatar} alt={testimonials[index].name} />
                        <AvatarFallback>{testimonials[index].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-lg font-semibold">{testimonials[index].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm italic">"{testimonials[index].content}"</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={prevTestimonials} className="rounded-none">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <Button variant="outline" size="icon" onClick={nextTestimonials} className="rounded-none">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                Math.floor(currentIndex / 3) === index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

