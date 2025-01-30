import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <div className="bg-accent/20">
      <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to transform your space?</span>
          <span className="block text-secondary">Get in touch with us today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">

          <div className="ml- inline-flex rounded-md shadow">
            <a href="/#contact">
            <Button type="submit" className="bg-sky-600 text-white hover:bg-sky-700 text-xl p-7">Get a Quote Now!</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

