import Image from 'next/image'

export function About() {
  return (
    <section id='about' className="py-12 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <p className="text-lg text-gray-500">
                  At our core, we are passionate about transforming spaces and bringing your vision to life. With years of experience in the painting industry, our team of skilled professionals is dedicated to delivering exceptional results that exceed your expectations.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Our mission is to provide high-quality painting services that not only enhance the aesthetics of your space but also protect and preserve your property. We value integrity, craftsmanship, and customer satisfaction above all else.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Whether you're looking to refresh your home's interior, update your office space, or tackle a large-scale commercial project, we have the expertise and commitment to ensure your project is completed to the highest standards.
                </p>
              </div>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <Image
                className="relative mx-auto rounded-none shadow-lg"
                width={490}
                height={490}
                src="/aboutus.jpg"
                alt="Our team at work"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

