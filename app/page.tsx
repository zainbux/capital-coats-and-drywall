import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Gallery } from '../components/Gallery'
import { BeforeAfter } from '../components/BeforeAfter'
import { Testimonials } from '../components/Testimonials'
import { About } from '../components/About'
import { TrustedBrands } from '../components/TrustedBrands'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <BeforeAfter />
      <Testimonials />
      <About />
      {/* <TrustedBrands /> */}
      <Contact />
    </div>
  )
}

