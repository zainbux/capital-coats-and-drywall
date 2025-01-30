import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BeforeAfter() {
  return (
    <div className="bg-slate-200 py-12 sm:py-16 lg:py-20">

      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">

              <div className="mb-10 text-center">            
                <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Results</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Transform Your Space
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                
                <div className="relative aspect-[7/6] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/before.jpg"
                    alt="Before painting"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                  <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">Before</div>
                </div>
                <div className="relative aspect-auto overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/after.jpg"
                    alt="After painting"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                  <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">After</div>
                </div>
              </div>
            </div>
          </div>



        <div className="mt-10 lg:mt-12">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <p className="text-lg text-gray-500">
              A fresh coat of paint can do wonders for any space. It's not just about aesthetics; it's an investment that can significantly increase the value of your property.
            </p>
            <ul className="mt-6 text-gray-500 space-y-4">
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="ml-3"><strong>Enhanced Aesthetics:</strong> Transform dull, outdated spaces into vibrant, modern environments that leave a lasting impression.</p>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="ml-3"><strong>Increased Property Value:</strong> Studies show that a professional paint job can increase home value by 1-2%, offering an excellent return on investment.</p>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="ml-3"><strong>Protection:</strong> Quality paint acts as a barrier against wear and tear, extending the life of your walls and surfaces.</p>
              </li>
            </ul>
            <p className="mt-6 text-lg text-gray-500">
              Whether you're looking to sell your property or simply want to enjoy a refreshed living space, our professional painting services can help you achieve your goals while boosting your property's market value.
            </p>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

