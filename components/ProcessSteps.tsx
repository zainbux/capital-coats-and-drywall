"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Paintbrush, Ruler, Droplets } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Preparation and Assessment",
    icon: Ruler,
    description:
      "Our expert team begins by thoroughly assessing the project area. We inspect surfaces for damages, remove old paint or wallpaper, and repair any drywall issues. This crucial step ensures a smooth canvas for the perfect paint job.",
    details: [
      "Surface inspection and cleaning",
      "Removal of old paint or wallpaper",
      "Drywall repair and patching",
      "Sanding and smoothing surfaces",
      "Priming walls for optimal paint adhesion",
    ],
  },
  {
    id: 2,
    title: "Paint Application",
    icon: Paintbrush,
    description:
      "Using top-quality paints and state-of-the-art equipment, we apply paint with precision and care. Our skilled painters ensure even coverage, crisp lines, and a flawless finish that transforms your space.",
    details: [
      "Color consultation and selection assistance",
      "Application of high-quality primer",
      "Expert paint application techniques",
      "Multiple coats for durability and richness",
      "Detailed trim and accent work",
    ],
  },
  {
    id: 3,
    title: "Finishing Touches",
    icon: Droplets,
    description:
      "We don't just stop at painting. Our team adds those crucial finishing touches that elevate the entire project. From cleanup to final inspection, we ensure your space is picture-perfect and ready to impress.",
    details: [
      "Thorough cleanup of the project area",
      "Touch-ups and detail work",
      "Final coat application if necessary",
      "Quality inspection and client walkthrough",
      "Guidance on paint care and maintenance",
    ],
  },
]

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Painting Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                activeStep === step.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <button className="text-primary font-semibold flex items-center" onClick={() => setActiveStep(step.id)}>
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-white p-8 rounded-lg shadow-lg"
          >
            <h4 className="text-2xl text-center font-semibold mb-4">{steps[activeStep - 1].title}</h4>
            <ul className="list-disc pl-5 space-y-2">
              {steps[activeStep - 1].details.map((detail, index) => (
                <p key={index} className="text-gray-700">
                  {detail}
                </p>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

