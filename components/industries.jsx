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
  CheckCircle2
} from "lucide-react"

export function Industries() {
  return (
    <main className="bg-background">

      {/* HERO */}
      <section id="industries" className="relative py-20 lg:py-32 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Industries We Serve
            </span>

            <h1 className="mt-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Precision Manufacturing for High-Performance Engineering Sectors
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Techpack Technology supports industries that demand dimensional accuracy,
              structural integrity, and process-controlled manufacturing.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our ISO 9001:2015 certified Quality Management System ensures traceable
              production workflows, inspection validation, and repeatable machining
              performance across diverse sectors.
            </p>

          </div>
        </div>
      </section>

      {/* AEROSPACE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col lg:flex-row gap-12">

            <div className="flex-1">
              <Image
                src="/images/service-aerospace.jpg"
                alt="Aerospace Manufacturing"
                width={600}
                height={400}
                className="rounded-xl border border-border shadow-lg"
              />
            </div>

            <div className="flex-1">

              <div className="flex items-center gap-3">
                <Plane className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">
                  Aerospace & Defence
                </h2>
              </div>

              <p className="mt-4 text-muted-foreground">
                We manufacture precision-machined components for aerospace and defence
                applications requiring tight tolerances and consistent process control.
              </p>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Typical Applications
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Structural brackets & mounting components</li>
                <li>• Precision housings & mechanical assemblies</li>
                <li>• Lightweight aluminium machined parts</li>
                <li>• Prototype and development components</li>
              </ul>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Technical Focus
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Controlled machining parameters</li>
                <li>• Dimensional stability</li>
                <li>• Surface finish consistency</li>
                <li>• Inspection-based validation</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Production is aligned with documented process controls and quality
                verification systems.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* AUTOMOTIVE */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col lg:flex-row-reverse gap-12">

            <div className="flex-1">
              <Image
                src="/images/service-automotive.jpg"
                alt="Automotive Components"
                width={600}
                height={400}
                className="rounded-xl border border-border shadow-lg"
              />
            </div>

            <div className="flex-1">

              <div className="flex items-center gap-3">
                <Car className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">
                  Automotive
                </h2>
              </div>

              <p className="mt-4 text-muted-foreground">
                We support automotive OEMs and Tier suppliers with functional
                and performance-critical machined components.
              </p>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Typical Applications
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Engine & transmission-related components</li>
                <li>• Structural and mounting elements</li>
                <li>• Rotational components</li>
                <li>• Prototype validation parts</li>
              </ul>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Technical Focus
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Batch production repeatability</li>
                <li>• Dimensional tolerance consistency</li>
                <li>• Process documentation</li>
                <li>• On-time production scheduling</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Our infrastructure supports low to medium batch volumes with
                controlled inspection protocols.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ELECTRONICS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col lg:flex-row gap-12">

            <div className="flex-1">
              <Image
                src="/images/service-electronics.jpg"
                alt="Electronics Equipment"
                width={600}
                height={400}
                className="rounded-xl border border-border shadow-lg"
              />
            </div>

            <div className="flex-1">

              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">
                  Electronics & Semiconductor Equipment
                </h2>
              </div>

              <p className="mt-4 text-muted-foreground">
                Precision components for electronics and semiconductor equipment
                require tight dimensional control and clean machining practices.
              </p>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Typical Applications
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Equipment housings</li>
                <li>• Mounting plates</li>
                <li>• Precision brackets</li>
                <li>• Structural sub-assemblies</li>
              </ul>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Technical Focus
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Geometric accuracy</li>
                <li>• Surface finish control</li>
                <li>• Lightweight aluminium machining</li>
                <li>• Drawing-based manufacturing</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                We support prototype development and serial production runs.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* MEDICAL */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col lg:flex-row-reverse gap-12">

            <div className="flex-1">
              <Image
                src="/images/service-medical.jpg"
                alt="Medical Equipment"
                width={600}
                height={400}
                className="rounded-xl border border-border shadow-lg"
              />
            </div>

            <div className="flex-1">

              <div className="flex items-center gap-3">
                <Stethoscope className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">
                  Medical Equipment
                </h2>
              </div>

              <p className="mt-4 text-muted-foreground">
                We manufacture precision components for medical and healthcare
                equipment manufacturers.
              </p>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Typical Applications
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Device structural components</li>
                <li>• Instrumentation parts</li>
                <li>• Precision mechanical housings</li>
              </ul>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Technical Focus
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Dimensional verification</li>
                <li>• Surface quality inspection</li>
                <li>• Controlled machining workflows</li>
                <li>• Drawing compliance validation</li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Quality control is integrated from raw material to final inspection.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* INDUSTRIAL MACHINERY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col lg:flex-row gap-12">

            <div className="flex-1">
              <Image
                src="/images/service-industrial.jpg"
                alt="Industrial Machinery"
                width={600}
                height={400}
                className="rounded-xl border border-border shadow-lg"
              />
            </div>

            <div className="flex-1">

              <div className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">
                  Industrial Machinery & Engineering
                </h2>
              </div>

              <p className="mt-4 text-muted-foreground">
                We supply custom machined components for heavy and light industrial
                equipment manufacturers.
              </p>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Typical Applications
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Machine components</li>
                <li>• Custom fabricated & machined parts</li>
                <li>• Equipment spares</li>
                <li>• Mechanical assemblies</li>
              </ul>

              <h4 className="mt-6 font-semibold text-primary uppercase text-sm">
                Technical Focus
              </h4>

              <ul className="mt-3 space-y-2">
                <li>• Robust material machining</li>
                <li>• Process stability</li>
                <li>• Flexible production capability</li>
                <li>• Structured inspection control</li>
              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* CROSS INDUSTRY */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center max-w-2xl mx-auto">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
            <h2 className="mt-4 text-3xl font-bold">
              Cross-Industry Technical Strength
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "ISO 9001:2015 certified operations",
              "CNC machining with structured process control",
              "In-process and final inspection validation",
              "Prototype to batch production capability",
              "Integrated manufacturing solutions"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}