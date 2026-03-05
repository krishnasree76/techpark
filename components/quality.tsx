// import Image from "next/image"
// import { FileCheck, GitBranch, SearchCheck, TrendingUp } from "lucide-react"

// const qualityPillars = [
//   {
//     icon: FileCheck,
//     title: "Documented Procedures",
//     description: "Comprehensive manufacturing documentation ensuring repeatability and traceability.",
//   },
//   {
//     icon: GitBranch,
//     title: "Process-Based Workflow",
//     description: "Structured production workflows designed for efficiency and consistency.",
//   },
//   {
//     icon: SearchCheck,
//     title: "Inspection & Validation",
//     description: "Rigorous inspection protocols with advanced metrology equipment.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Continuous Improvement",
//     description: "Ongoing process optimization driven by data and customer feedback.",
//   },
// ]

// export function Quality() {
//   return (
//     <section id="quality" className="relative py-24 lg:py-32 bg-card/50 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Content */}
//           <div className="flex-1">
//             <span className="text-xs font-semibold tracking-widest text-primary uppercase">
//               Quality Assurance
//             </span>
//             <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
//               ISO 9001:2015 Certified Quality Management System
//             </h2>
//             <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

//             <p className="mt-6 text-base leading-relaxed text-muted-foreground">
//               Our commitment to quality is embedded in every stage of the manufacturing
//               process. From raw material inspection to final delivery, every component
//               undergoes rigorous quality checks to meet international standards.
//             </p>

//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {qualityPillars.map((pillar) => {
//                 const IconComp = pillar.icon
//                 return (
//                   <div key={pillar.title} className="flex gap-4">
//                     <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-primary flex-shrink-0">
//                       <IconComp className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-semibold text-foreground">
//                         {pillar.title}
//                       </h3>
//                       <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
//                         {pillar.description}
//                       </p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Image */}
//           <div className="flex-1 w-full">
//             <div className="relative">
//               <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-2xl" />
//               <Image
//                 src="/images/quality-lab.jpg"
//                 alt="Quality inspection laboratory with CMM machine"
//                 width={600}
//                 height={450}
//                 className="relative rounded-lg border border-border/50 shadow-xl object-cover w-full"
//               />
//               <div className="absolute top-4 right-4 flex items-center gap-2 rounded-md bg-card/90 backdrop-blur-sm border border-border px-4 py-2 shadow-lg">
//                 <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
//                 <span className="text-xs font-semibold text-foreground">ISO 9001:2015</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client" // Add this at the very top to enable useState

import React, { useState } from "react"
import Image from "next/image"
import { 
  FileCheck, 
  GitBranch, 
  SearchCheck, 
  TrendingUp, 
  ChevronDown, 
  Microscope, 
  ShieldCheck, 
  Settings2,
  CheckCircle2
} from "lucide-react"

const qualityPillars = [
  {
    icon: FileCheck,
    title: "ISO 9001:2015 Certified",
    description: "Certified QMS for the manufacture and supply of precision machined components.",
  },
  {
    icon: GitBranch,
    title: "Process-Based Workflow",
    description: "Quality integrated into engineering, machining, and customer communication.",
  },
  {
    icon: SearchCheck,
    title: "Inspection & Validation",
    description: "Rigorous metrology using TESA 1D gauges and precision measuring instruments.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Ongoing optimization of non-conformities and equipment capability upgrades.",
  },
]

export function Quality() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section id="quality" className="relative py-24 lg:py-32 bg-card/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Precision Through Process
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Reliability Through Control
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At Techpack Technology, quality is a foundational principle embedded within our manufacturing culture. 
              We are committed to delivering components that meet international standards for accuracy and reliability.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualityPillars.map((pillar) => {
                const IconComp = pillar.icon
                return (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-primary flex-shrink-0">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{pillar.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="mt-10 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group"
            >
              {showDetails ? "Show Less" : "Know More About Our Quality"}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${showDetails ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/50 shadow-xl">
                <Image
                  src="/images/quality-lab.jpg"
                  alt="Quality inspection laboratory with TESA height gauge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-md bg-card/90 backdrop-blur-sm border border-border px-4 py-2 shadow-lg">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Detailed Information */}
        {showDetails && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* In-Process Quality Control */}
            <div className="p-6 rounded-xl border border-border bg-background/50">
              <Settings2 className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-3">In-Process Control</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Machining parameter monitoring</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Job-wise production tracking</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Tool condition monitoring</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Operator-level verification</li>
              </ul>
            </div>

            {/* Inspection & Measurement Capability */}
            <div className="p-6 rounded-xl border border-border bg-background/50">
              <Microscope className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-3">Inspection Capability</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> TESA 1D Height Gauge</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Dimensional inspection tools</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Final validation before dispatch</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Compliance to drawing specs</li>
              </ul>
            </div>

            {/* Quality Philosophy & Achievements */}
            <div className="p-6 rounded-xl border border-border bg-primary/5">
              <ShieldCheck className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-3">Quality Advantage</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="font-semibold text-foreground flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> Zero-Defect Delivery Achievement
                </li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Regular surveillance audits</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Equipment capability upgrades</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> Continuous improvement culture</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
