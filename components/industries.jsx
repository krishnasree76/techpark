"use client"

import React from "react"
import Image from "next/image"
import { 
  Plane, 
  Car, 
  Cpu, 
  Stethoscope, 
  Settings, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight
} from "lucide-react"

const industries = [
  {
    id: "aerospace",
    title: "Aerospace & Defence",
    icon: Plane,
    image: "/images/service-aerospace.jpg",
    description: "Manufacturing precision components for applications requiring tight tolerances and consistent process control.",
    applications: ["Structural brackets & mounting", "Precision housings", "Lightweight aluminium parts", "Prototype components"],
    technical: ["Controlled machining parameters", "Dimensional stability", "Surface finish consistency"]
  },
  {
    id: "automotive",
    title: "Automotive",
    icon: Car,
    image: "/images/service-automotive.jpg",
    description: "Supporting OEMs and Tier suppliers with functional and performance-critical machined components.",
    applications: ["Engine & transmission parts", "Structural elements", "Rotational components", "Prototype validation"],
    technical: ["Batch repeatability", "Tolerance consistency", "Process documentation"]
  },
  {
    id: "electronics",
    title: "Electronics & Semiconductor",
    icon: Cpu,
    image: "/images/service-electronics.jpg",
    description: "Tight dimensional control and clean machining practices for semiconductor equipment.",
    applications: ["Equipment housings", "Mounting plates", "Precision brackets", "Structural sub-assemblies"],
    technical: ["Geometric accuracy", "Surface finish control", "Aluminium machining expertise"]
  },
  {
    id: "medical",
    title: "Medical Equipment",
    icon: Stethoscope,
    image: "/images/service-medical.jpg",
    description: "High-precision components for medical device structural integrity and instrumentation.",
    applications: ["Device structural components", "Instrumentation parts", "Precision mechanical housings"],
    technical: ["Dimensional verification", "Surface quality inspection", "Validated workflows"]
  },
  {
    id: "industrial",
    title: "Industrial Machinery",
    icon: Settings,
    image: "/images/service-industrial.jpg",
    description: "Custom machined components for heavy and light industrial equipment manufacturers.",
    applications: ["Machine components", "Custom fabricated parts", "Equipment spares", "Mechanical assemblies"],
    technical: ["Robust material machining", "Process stability", "Flexible production"]
  }
]

export function Industries() { 
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section id="industries" className="relative py-20 lg:py-32 overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Sectors We Serve
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Precision Manufacturing for High-Performance Engineering
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Techpack Technology supports industries that demand dimensional accuracy, structural integrity, 
              and process-controlled manufacturing. Our ISO 9001:2015 system ensures repeatable 
              machining performance across diverse global sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div 
                key={industry.id} 
                className={`flex flex-col gap-12 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Block */}
                <div className="flex-1">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-2xl">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-background/90 p-3 backdrop-blur-sm">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-foreground">{industry.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Applications</h4>
                      <ul className="mt-4 space-y-2">
                        {industry.applications.map((app) => (
                          <li key={app} className="flex items-center gap-2 text-sm text-foreground">
                            <ArrowRight className="h-3 w-3 text-primary" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Technical Focus</h4>
                      <ul className="mt-4 space-y-2">
                        {industry.technical.map((tech) => (
                          <li key={tech} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Strength Section */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-card border border-border p-8 lg:p-16 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
              <h2 className="mt-4 text-3xl font-bold">Cross-Industry Technical Strength</h2>
              <p className="mt-4 text-muted-foreground">
                Delivering excellence through unified quality standards, regardless of the sector.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "ISO 9001:2015 Certified Operations",
                "CNC Machining with Process Control",
                "In-process & Final Validation",
                "Prototype to Batch Production",
                "Integrated Manufacturing Solutions",
                "Traceable Production Workflows"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}