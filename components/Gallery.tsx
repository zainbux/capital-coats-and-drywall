import Image from 'next/image'

const galleryItems = [
  { id: 1, before: '/it5.jpeg', after: '/it1.jpeg', alt: 'Living room transformation' },
  { id: 2, before: '/it9.jpeg', after: '/it3.jpeg', alt: 'Kitchen makeover' },
  { id: 3, before: '/it11.jpg', after: '/it4.jpeg', alt: 'Bedroom renovation' },
  { id: 4, before: '/it7.jpeg', after: '/it10.jpg', alt: 'Office space redesign' },
]

export function Gallery() {
  return (
    <section id='gallery' className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Gallery</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Work in Action
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="space-y-4">
              <div className="relative h-48 md:h-64">
                <Image
                  src={item.before}
                  alt={`Before - ${item.alt}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-none"
                />
              </div>
              <div className="relative h-48 md:h-64">
                <Image
                  src={item.after}
                  alt={`After - ${item.alt}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

