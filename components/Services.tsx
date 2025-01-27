import { Paintbrush, Hammer, Wrench } from 'lucide-react'

const services = [
  {
    title: 'Interior Painting',
    description: 'Transform your indoor spaces with our expert interior painting services.',
    icon: Paintbrush,
  },
  {
    title: 'Drywall Installation',
    description: 'Professional drywall installation for smooth and flawless walls.',
    icon: Hammer,
  },
  {
    title: 'Repairs',
    description: 'Quick and efficient repairs to keep your walls looking their best.',
    icon: Wrench,
  },
]

export function Services() {
  return (
    <section id='services' className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of painting and renovation services to meet all your needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-none bg-indigo-500 text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

