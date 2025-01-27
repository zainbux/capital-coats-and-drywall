import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section id='contact' className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
        </div>
        <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input type="text" id="name" name="name" required className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type="email" id="email" name="email" required className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <Input type="location" id="location" name="location" required className="mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" name="message" rows={4} required className="mt-1" />
              </div>
              <Button type="submit" className="bg-indigo-600 text-white hover:text-slate-900">Send Message</Button>
            </form>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="space-y-6">
              <div className="flex items-center">

              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600 mr-3" />
                <span>(613) 323-2960</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600 mr-3" />
                <span>info@yourpaintingcompany.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-indigo-600 mr-3" />
                <span>Mon-Fri: 8am-6pm</span>
              </div>
            </div>
            <div className="mt-8">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.765762312175!2d-75.48917348753784!3d45.4745222826284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce13b5091d22dd%3A0xdca0dc49bad5e91!2sOrl%C3%A9ans%2C%20ON%20K4A%201S5!5e0!3m2!1sen!2sca!4v1737422414875!5m2!1sen!2sca"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

