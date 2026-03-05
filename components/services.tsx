// import Image from "next/image"
// import { Plane, Car, Shield, HeartPulse, Cpu, Factory } from "lucide-react"

// const services = [
//   {
//     icon: Plane,
//     title: "Aerospace Components",
//     description:
//       "High-precision CNC components for aerospace applications where dimensional accuracy and reliability are critical.",
//     image: "/images/service-aerospace.jpg",
//   },
//   {
//     icon: Car,
//     title: "Automotive Precision Parts",
//     description:
//       "Precision-machined automotive components built for durability, safety, and performance.",
//     image: "/images/service-automotive.jpg",
//   },
//   {
//     icon: Shield,
//     title: "Defense Manufacturing",
//     description:
//       "Mission-critical defense components manufactured under strict quality control systems.",
//     image: "/images/service-defense.jpg",
//   },
//   {
//     icon: HeartPulse,
//     title: "Medical Components",
//     description:
//       "High-accuracy medical components manufactured with controlled processes and validation systems.",
//     image: "/images/service-medical.jpg",
//   },
//   {
//     icon: Cpu,
//     title: "Electronics Machining",
//     description:
//       "Complex aluminum and steel parts for electronics and industrial equipment.",
//     image: "/images/service-electronics.jpg",
//   },
//   {
//     icon: Factory,
//     title: "Industrial Components",
//     description:
//       "Robust and reliable components engineered for industrial performance.",
//     image: "/images/service-industrial.jpg",
//   },
// ]

// export function Services() {
//   return (
//     <section id="services" className="relative py-24 lg:py-32 bg-card/50">
//       {/* Blueprint grid background */}
//       <div className="absolute inset-0 opacity-[0.02]" style={{
//         backgroundImage: `
//           linear-gradient(to right, #2E6FD8 1px, transparent 1px),
//           linear-gradient(to bottom, #2E6FD8 1px, transparent 1px)
//         `,
//         backgroundSize: '40px 40px'
//       }} />

//       <div className="relative mx-auto max-w-7xl px-6">
//         <div className="text-center mb-16">
//           <span className="text-xs font-semibold tracking-widest text-primary uppercase">
//             What We Do
//           </span>
//           <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
//             Our Manufacturing Capabilities
//           </h2>
//           <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary" />
//           <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
//             From aerospace to industrial applications, we deliver precision-machined
//             components across diverse sectors with uncompromising quality.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service) => {
//             const IconComp = service.icon
//             return (
//               <div
//                 key={service.title}
//                 className="group relative rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
//                   <div className="absolute bottom-4 left-4 flex items-center justify-center h-10 w-10 rounded-md bg-primary/90 text-primary-foreground shadow-md">
//                     <IconComp className="h-5 w-5" />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="font-heading text-lg font-semibold text-foreground">
//                     {service.title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Wrench,
  Layers,
  Factory,
  Boxes,
  Sparkles,
  Settings,
  X,
  ArrowLeft,
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Precision CNC Machining",
    image: "/images/service-cnc.jpg",
    short: "High-accuracy CNC machining with ISO controlled processes.",
    details: `
Precision machining forms the core of our operations.

Our Bangalore facility operates under ISO 9001:2015 quality standards
to ensure controlled processes, documented workflows and consistent output quality.

Capabilities:
• 3-Axis CNC Milling
• CNC Turning
• Complex Geometry Machining
• Prototype to Serial Production
• Tight Tolerance Components
`,
  },
  {
    icon: Layers,
    title: "Sheet Metal Solutions",
    image: "/images/service-sheetmetal.jpg",
    short: "Engineered sheet metal components through approved partners.",
    details: `
We deliver engineered sheet metal components through approved
and performance-monitored manufacturing partners.

Services Include:
• Laser Cutting
• CNC Bending
• Fabrication & Assembly
• Surface Coating
`,
  },
  {
    icon: Factory,
    title: "Contract Manufacturing",
    image: "/images/service-contract.jpg",
    short: "End-to-end production workflow management.",
    details: `
We manage complete production workflows including:

• Vendor Coordination
• Material Sourcing
• Production Scheduling
• Quality Inspection Oversight
• Consolidated Delivery
`,
  },
  {
    icon: Boxes,
    title: "Plastic Injection Molding",
    image: "/images/service-injection.jpg",
    short: "Polymer component manufacturing solutions.",
    details: `
Injection molding requirements are supported through qualified partner facilities.

Techpack Technology maintains project oversight,
inspection validation and documentation control prior to dispatch.
`,
  },
  {
    icon: Sparkles,
    title: "Surface Engineering & Finishing",
    image: "/images/service-finishing.jpg",
    short: "Advanced finishing for durability and performance.",
    details: `
Finishing processes coordinated by Techpack include:

• Anodizing
• Powder Coating
• Plating
• Heat Treatment

All finished components undergo quality verification before shipment.
`,
  },
  {
    icon: Settings,
    title: "Engineering & Technical Support",
    image: "/images/service-industrial.jpg",
    short: "Technical support from design stage to production.",
    details: `
Our engineering team supports product development through:

• CAD/CAM Programming
• Design for Manufacturability (DFM)
• Prototype Development
• Process Optimization
• Technical Consultation
`,
  },
]

export function Services() {
  const [activeService, setActiveService] = useState<any>(null)

  return (
    <section id="services" className="py-24 lg:py-32 bg-card/50">

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Services
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Precision Manufacturing Services
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Techpack Technology provides end-to-end CNC machining and precision
            manufacturing solutions supporting customers from concept development
            to full-scale production.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition"
              >

                {/* Image on card */}
                <div className="relative h-44 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {service.short}
                  </p>

                  <button
                    onClick={() => setActiveService(service)}
                    className="mt-4 text-primary text-sm font-semibold hover:underline"
                  >
                    Know More →
                  </button>

                </div>
              </div>
            )
          })}

        </div>
      </div>

      {/* Detail Side Panel */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex">

          {/* Background Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setActiveService(null)}
          />

          {/* Panel */}
          <div className="w-full max-w-xl bg-white h-full shadow-2xl overflow-y-auto p-8 relative">

            {/* Close Button */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-6 right-6"
            >
              <X size={22} />
            </button>

            {/* Back */}
            <button
              onClick={() => setActiveService(null)}
              className="flex items-center gap-2 text-sm mb-6 text-primary"
            >
              <ArrowLeft size={16} />
              Back
            </button>

            {/* Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">
              {activeService.title}
            </h3>

            {/* Details */}
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {activeService.details}
            </p>

          </div>
        </div>
      )}
    </section>
  )
}