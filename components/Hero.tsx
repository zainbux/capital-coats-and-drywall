import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl px-10">
                <span className="block xl:inline">Transforming Spaces,</span>{' '}
                <span className="block text-indigo-600 xl:inline">One Wall at a Time</span>
              </h1>
              <p className="mt-5 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Premium Painting Services for Your Home and Business
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-none ">
                  <a href="/#contact">
                  <Button  className="bg-indigo-600 text-white hover:text-slate-900" size="lg">Get Started</Button>
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3 hover:text-indigo-600">
                  <a href="/#services">
                    <Button variant="outline" size="lg" >Learn More</Button>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/hero.jpeg"
          alt="Painting service"
        />
      </div>
    </div>
  )
}

