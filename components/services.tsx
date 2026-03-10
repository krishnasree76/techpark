// // import Image from "next/image"
// // import { Plane, Car, Shield, HeartPulse, Cpu, Factory } from "lucide-react"

// // const services = [
// //   {
// //     icon: Plane,
// //     title: "Aerospace Components",
// //     description:
// //       "High-precision CNC components for aerospace applications where dimensional accuracy and reliability are critical.",
// //     image: "/images/service-aerospace.jpg",
// //   },
// //   {
// //     icon: Car,
// //     title: "Automotive Precision Parts",
// //     description:
// //       "Precision-machined automotive components built for durability, safety, and performance.",
// //     image: "/images/service-automotive.jpg",
// //   },
// //   {
// //     icon: Shield,
// //     title: "Defense Manufacturing",
// //     description:
// //       "Mission-critical defense components manufactured under strict quality control systems.",
// //     image: "/images/service-defense.jpg",
// //   },
// //   {
// //     icon: HeartPulse,
// //     title: "Medical Components",
// //     description:
// //       "High-accuracy medical components manufactured with controlled processes and validation systems.",
// //     image: "/images/service-medical.jpg",
// //   },
// //   {
// //     icon: Cpu,
// //     title: "Electronics Machining",
// //     description:
// //       "Complex aluminum and steel parts for electronics and industrial equipment.",
// //     image: "/images/service-electronics.jpg",
// //   },
// //   {
// //     icon: Factory,
// //     title: "Industrial Components",
// //     description:
// //       "Robust and reliable components engineered for industrial performance.",
// //     image: "/images/service-industrial.jpg",
// //   },
// // ]

// // export function Services() {
// //   return (
// //     <section id="services" className="relative py-24 lg:py-32 bg-card/50">
// //       {/* Blueprint grid background */}
// //       <div className="absolute inset-0 opacity-[0.02]" style={{
// //         backgroundImage: `
// //           linear-gradient(to right, #2E6FD8 1px, transparent 1px),
// //           linear-gradient(to bottom, #2E6FD8 1px, transparent 1px)
// //         `,
// //         backgroundSize: '40px 40px'
// //       }} />

// //       <div className="relative mx-auto max-w-7xl px-6">
// //         <div className="text-center mb-16">
// //           <span className="text-xs font-semibold tracking-widest text-primary uppercase">
// //             What We Do
// //           </span>
// //           <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
// //             Our Manufacturing Capabilities
// //           </h2>
// //           <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary" />
// //           <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
// //             From aerospace to industrial applications, we deliver precision-machined
// //             components across diverse sectors with uncompromising quality.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {services.map((service) => {
// //             const IconComp = service.icon
// //             return (
// //               <div
// //                 key={service.title}
// //                 className="group relative rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
// //               >
// //                 <div className="relative h-48 overflow-hidden">
// //                   <Image
// //                     src={service.image}
// //                     alt={service.title}
// //                     fill
// //                     className="object-cover transition-transform duration-500 group-hover:scale-105"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
// //                   <div className="absolute bottom-4 left-4 flex items-center justify-center h-10 w-10 rounded-md bg-primary/90 text-primary-foreground shadow-md">
// //                     <IconComp className="h-5 w-5" />
// //                   </div>
// //                 </div>
// //                 <div className="p-6">
// //                   <h3 className="font-heading text-lg font-semibold text-foreground">
// //                     {service.title}
// //                   </h3>
// //                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
// //                     {service.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             )
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import {
//   Wrench,
//   Layers,
//   Factory,
//   Boxes,
//   Sparkles,
//   Settings,
//   X,
//   ArrowLeft,
// } from "lucide-react"

// const services = [
//   {
//     icon: Wrench,
//     title: "Precision CNC Machining",
//     image: "/images/service-cnc.jpg",
//     short: "High-accuracy CNC machining with ISO controlled processes.",
//     details: `
// Precision machining forms the core of our operations.

// Our Bangalore facility operates under ISO 9001:2015 quality standards
// to ensure controlled processes, documented workflows and consistent output quality.

// Capabilities:
// • 3-Axis CNC Milling
// • CNC Turning
// • Complex Geometry Machining
// • Prototype to Serial Production
// • Tight Tolerance Components
// `,
//   },
//   {
//     icon: Layers,
//     title: "Sheet Metal Solutions",
//     image: "/images/service-sheetmetal.jpg",
//     short: "Engineered sheet metal components through approved partners.",
//     details: `
// We deliver engineered sheet metal components through approved
// and performance-monitored manufacturing partners.

// Services Include:
// • Laser Cutting
// • CNC Bending
// • Fabrication & Assembly
// • Surface Coating
// `,
//   },
//   {
//     icon: Factory,
//     title: "Contract Manufacturing",
//     image: "/images/service-contract.jpg",
//     short: "End-to-end production workflow management.",
//     details: `
// We manage complete production workflows including:

// • Vendor Coordination
// • Material Sourcing
// • Production Scheduling
// • Quality Inspection Oversight
// • Consolidated Delivery
// `,
//   },
//   {
//     icon: Boxes,
//     title: "Plastic Injection Molding",
//     image: "/images/service-injection.jpg",
//     short: "Polymer component manufacturing solutions.",
//     details: `
// Injection molding requirements are supported through qualified partner facilities.

// Techpack Technology maintains project oversight,
// inspection validation and documentation control prior to dispatch.
// `,
//   },
//   {
//     icon: Sparkles,
//     title: "Surface Engineering & Finishing",
//     image: "/images/service-finishing.jpg",
//     short: "Advanced finishing for durability and performance.",
//     details: `
// Finishing processes coordinated by Techpack include:

// • Anodizing
// • Powder Coating
// • Plating
// • Heat Treatment

// All finished components undergo quality verification before shipment.
// `,
//   },
//   {
//     icon: Settings,
//     title: "Engineering & Technical Support",
//     image: "/images/service-industrial.jpg",
//     short: "Technical support from design stage to production.",
//     details: `
// Our engineering team supports product development through:

// • CAD/CAM Programming
// • Design for Manufacturability (DFM)
// • Prototype Development
// • Process Optimization
// • Technical Consultation
// `,
//   },
// ]

// export function Services() {
//   const [activeService, setActiveService] = useState<any>(null)

//   return (
//     <section id="services" className="py-24 lg:py-32 bg-card/50">

//       <div className="mx-auto max-w-7xl px-6">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="text-xs font-semibold tracking-widest text-primary uppercase">
//             Services
//           </span>

//           <h2 className="mt-3 text-3xl font-bold md:text-4xl">
//             Precision Manufacturing Services
//           </h2>

//           <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
//             Techpack Technology provides end-to-end CNC machining and precision
//             manufacturing solutions supporting customers from concept development
//             to full-scale production.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {services.map((service) => {
//             const Icon = service.icon

//             return (
//               <div
//                 key={service.title}
//                 className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition"
//               >

//                 {/* Image on card */}
//                 <div className="relative h-44 w-full">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition duration-500"
//                   />
//                 </div>

//                 <div className="p-6">

//                   <div className="flex items-center gap-2 mb-2">
//                     <Icon className="w-5 h-5 text-primary" />
//                     <h3 className="text-lg font-semibold">
//                       {service.title}
//                     </h3>
//                   </div>

//                   <p className="text-sm text-muted-foreground">
//                     {service.short}
//                   </p>

//                   <button
//                     onClick={() => setActiveService(service)}
//                     className="mt-4 text-primary text-sm font-semibold hover:underline"
//                   >
//                     Know More →
//                   </button>

//                 </div>
//               </div>
//             )
//           })}

//         </div>
//       </div>

//       {/* Detail Side Panel */}
//       {activeService && (
//   <div className="fixed inset-0 z-50 flex">

//     {/* Overlay */}
//     <div
//       className="flex-1 bg-black/30 backdrop-blur-sm"
//       onClick={() => setActiveService(null)}
//     />

//     {/* Side Panel */}
//     <div className="w-full max-w-xl bg-white h-full shadow-xl border-l border-border overflow-y-auto relative">

//       <div className="p-8">

//         {/* Header Actions */}
//         <div className="flex items-center justify-between mb-6">

//           <button
//             onClick={() => setActiveService(null)}
//             className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition"
//           >
//             <ArrowLeft size={16} />
//             Back
//           </button>

//           <button
//             onClick={() => setActiveService(null)}
//             className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
//           >
//             <X size={20} />
//           </button>

//         </div>

//         {/* Image */}
//         <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border mb-6">
//           <Image
//             src={activeService.image}
//             alt={activeService.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Title */}
//         <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//           {activeService.title}
//         </h3>

//         {/* Divider */}
//         <div className="h-1 w-14 bg-primary rounded-full mb-6"></div>

//         {/* Details */}
//         <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
//           {activeService.details}
//         </p>

//       </div>
//     </div>
//   </div>
// )}
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
  ShieldCheck,
  CheckCircle2,
  X,
  ArrowLeft
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Precision CNC Machining",
    image: "/images/service-cnc.jpg",
    short: "ISO-certified precision machining with controlled manufacturing processes.",
    details: `
ISO-Certified Manufacturing Excellence

Precision machining forms the core of our operations.

Our Bangalore facility operates under ISO 9001:2015 quality standards to ensure controlled processes, documented workflows, and consistent output quality.

Capabilities:
• 3-Axis CNC Milling
• CNC Turning
• Complex geometry machining
• Prototype to serial production
• Tight tolerance components

All machining activities follow defined process control and inspection procedures.
`,
  },
  {
    icon: Layers,
    title: "Sheet Metal Solutions",
    image: "/images/service-sheetmetal.jpg",
    short: "Engineered sheet metal components through structured fabrication partners.",
    details: `
Structured Fabrication Support

We deliver engineered sheet metal components through approved and performance-monitored manufacturing partners.

All external processes are managed under Techpack’s quality supervision and final inspection validation.

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
    short: "End-to-end production workflow and vendor coordination.",
    details: `
End-to-End Production Management

As an integrated manufacturing partner, we manage complete production workflows including:

• Vendor coordination
• Material sourcing
• Production scheduling
• Quality inspection oversight
• Consolidated delivery

Our ISO-aligned systems ensure traceability and accountability across all processes.
`,
  },
  {
    icon: Boxes,
    title: "Plastic Injection Molding",
    image: "/images/service-injection.jpg",
    short: "Polymer component manufacturing through qualified partner facilities.",
    details: `
Polymer Component Manufacturing

Injection molding requirements are supported through qualified partner facilities.

Techpack Technology maintains project oversight, inspection validation, and documentation control prior to dispatch.
`,
  },
  {
    icon: Sparkles,
    title: "Surface Engineering & Finishing",
    image: "/images/service-finishing.jpg",
    short: "Advanced finishing processes for durability and performance.",
    details: `
We coordinate finishing processes to meet performance and durability requirements.

Processes Include:
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
    short: "Technical support from design stage to production scaling.",
    details: `
Our engineering team provides technical assistance from design stage to production scaling.

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
    <main>

      {/* HERO */}
      <section className="py-24 lg:py-32 border-b border-border">

        <div className="mx-auto max-w-7xl px-6">

          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Services
          </span>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Precision Manufacturing Services
          </h1>

          <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            Techpack Technology provides end-to-end CNC machining and precision
            manufacturing solutions tailored to high-performance industrial sectors.
            We support customers from concept development to full-scale production.
          </p>

        </div>
      </section>

      {/* WHY TECHPACK */}
      <section className="py-20 bg-card/40">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold text-center">
            Why Techpack Technology
          </h2>

          <p className="text-center mt-4 text-muted-foreground">
            Our Commitment to Precision & Performance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {[
              "Customized approach for prototype & production orders",
              "Dedicated technical support with engineering assistance",
              "In-house CNC machining facility",
              "Tight tolerance machining capability",
              "100% inspection before dispatch"
            ].map((item) => (
              <div
                key={item}
                className="p-6 border border-border rounded-lg bg-card"
              >
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="text-primary mt-1" />
                  <p className="text-sm">{item}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold text-center">
            Integrated Manufacturing & ISO 9001:2015 Certified Precision Engineering
          </h2>

          <p className="mt-6 text-center max-w-3xl mx-auto text-muted-foreground">
            Techpack Technology delivers high-performance manufacturing solutions
            backed by an ISO 9001:2015 certified Quality Management System.
            We combine advanced in-house CNC machining expertise with a structured
            partner ecosystem to provide integrated manufacturing solutions under
            single-point accountability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

            {services.map((service) => {

              const Icon = service.icon

              return (
                <div
                  key={service.title}
                  className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition"
                >

                  <div className="relative h-44">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">

                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-primary" />
                      <h3 className="font-semibold">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {service.short}
                    </p>

                    <button
                      onClick={() => setActiveService(service)}
                      className="mt-4 text-primary text-sm font-semibold"
                    >
                      Know More →
                    </button>

                  </div>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* QUALITY COMMITMENT */}
      <section className="py-20 bg-secondary/30">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <ShieldCheck className="mx-auto text-primary" size={40} />

          <h2 className="mt-4 text-3xl font-bold">
            Quality Commitment
          </h2>

          <p className="mt-4 text-muted-foreground">
            Techpack Technology operates under an ISO 9001:2015 certified
            Quality Management System covering:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {[
              "Process Control",
              "Documented Procedures",
              "Inspection & Verification",
              "Continuous Improvement",
              "Customer Satisfaction Focus"
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 items-center border border-border rounded-lg p-4 bg-card"
              >
                <CheckCircle2 className="text-primary" />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICE SIDE PANEL */}
      {activeService && (
  <div className="fixed inset-0 z-50 flex">

    <div
      className="flex-1 bg-black/30"
      onClick={() => setActiveService(null)}
    />

    <div className="w-full max-w-xl bg-white h-full shadow-xl border-l overflow-y-auto">

      <div className="p-8">

        <div className="flex justify-between mb-6">

          <button
            onClick={() => setActiveService(null)}
            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <button
            onClick={() => setActiveService(null)}
            className="text-gray-800 hover:text-black"
          >
            <X />
          </button>

        </div>

        <div className="relative h-60 mb-6 rounded-lg overflow-hidden">
          <Image
            src={activeService.image}
            alt={activeService.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {activeService.title}
        </h3>

        <p className="text-sm whitespace-pre-line leading-relaxed text-gray-800">
          {activeService.details}
        </p>

      </div>

    </div>

  </div>
)}

    </main>
  )
}