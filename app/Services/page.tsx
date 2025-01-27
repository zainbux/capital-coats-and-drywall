import { CTASection } from "@/components/CTASection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicesList } from "@/components/ServicesList";


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ProcessSteps/>
      <CTASection />
    </main>
  )
}

