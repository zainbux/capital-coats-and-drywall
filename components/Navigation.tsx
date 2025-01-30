"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img className="h-28 w-auto "  src="CCDLogo1.jpg" alt="Logo" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/Services" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Services
            </Link>
            <Link href="/#gallery" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Gallery
            </Link>
            <Link href="/#about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              About
            </Link>
            <Link href="/#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Contact
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="/#contact">
            <Button className='bg-sky-600 text-white hover:bg-slate-900 '>Get a Free Quote</Button>
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link href="/" className="block px-3 py-2 rounded-none text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Home
                  </Link>
                  <Collapsible className="grid gap-4">
                    <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-180">
                      Services <ChevronDown className="ml-auto h-5 w-5 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="grid gap-2 pl-4">
                        <Link href="/services/interior" className="text-gray-600 hover:text-gray-900">Interior Painting</Link>
                        <Link href="/services/exterior" className="text-gray-600 hover:text-gray-900">Exterior Painting</Link>
                        <Link href="/services/commercial" className="text-gray-600 hover:text-gray-900">Commercial Painting</Link>
                        <Link href="/services/residential" className="text-gray-600 hover:text-gray-900">Residential Painting</Link>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  <Link href="/gallery" className="block px-3 py-2 rounded-none text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Gallery
                  </Link>
                  <Link href="/about" className="block px-3 py-2 rounded-none text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    About
                  </Link>
                  <Link href="/contact" className="block px-3 py-2 rounded-none text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Contact
                  </Link>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <Button className="w-full">Get a Free Quote</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

