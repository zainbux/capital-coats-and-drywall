import { Paintbrush, Home, Building2, Wrench, Droplets, PaintBucket } from "lucide-react"

const services = [
  {
    name: "Interior Painting",
    description: "Transform your indoor spaces with our expert interior painting services.",
    icon: Home,
  },
  {
    name: "Exterior Painting",
    description: "Enhance your property's curb appeal with our durable exterior painting solutions.",
    icon: Building2,
  },
  {
    name: "Commercial Painting",
    description: "Professional painting services for offices, retail spaces, and industrial facilities.",
    icon: Paintbrush,
  },
  {
    name: "Drywall Repair",
    description: "Expert drywall repair and finishing to prepare your walls for a flawless paint job.",
    icon: Wrench,
  },
  {
    name: "Pressure Washing",
    description: "Thorough cleaning of exterior surfaces to ensure optimal paint adhesion.",
    icon: Droplets,
  },
  {
    name: "Color Consultation",
    description: "Professional advice on color selection to achieve your desired aesthetic.",
    icon: PaintBucket,
  },
]

export function ServicesList() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary">Comprehensive Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a perfect paint job
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From residential touch-ups to large-scale commercial projects, our team of experts has you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-secondary text-sky-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

