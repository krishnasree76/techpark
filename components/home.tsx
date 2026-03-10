"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Plane,
  Car,
  Stethoscope,
  Cpu,
  CheckCircle2
} from "lucide-react"

export function HomePage() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="relative py-28 lg:py-36 border-b border-border">

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-cnc.jpg"
            alt="CNC machining"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Precision CNC Engineering for Aerospace, Defence & Automotive Industries
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg">
            Delivering high-accuracy, mission-critical components through advanced
            machining technologies and disciplined quality systems.
          </p>

          <div className="mt-6 text-sm text-muted-foreground">
            📍 Bangalore, India &nbsp;&nbsp; 📞 +91 7829070378
          </div>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-md font-semibold"
            >
              REQUEST A QUOTE
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-border rounded-md font-semibold"
            >
              CONTACT US
            </Link>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <h2 className="text-3xl font-bold">
              Engineering Excellence. Manufacturing Reliability.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Techpack Technology is a Bangalore-based precision CNC manufacturing
              company delivering high-performance machined components for Aerospace,
              Defence, Automotive, Medical, and Electronics industries.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Built on a strong engineering foundation, we combine advanced machining
              infrastructure, experienced technical expertise, and structured inspection
              systems to meet demanding industrial standards.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our approach emphasizes precision, repeatability, and long-term
              customer partnerships driven by trust and performance.
            </p>

            <Link
              href="/about"
              className="inline-block mt-8 px-5 py-3 border border-border rounded-md font-semibold"
            >
              Learn More About Us
            </Link>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-card/40">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl font-bold">
              Industries We Serve
            </h2>

            <p className="mt-4 text-muted-foreground">
              Powering Critical Industries
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="border border-border rounded-lg p-6 bg-card">
              <Plane className="text-primary mb-3" />
              <h3 className="font-semibold">Aerospace & Defence</h3>
              <p className="text-sm text-muted-foreground mt-2">
                High-precision structural and functional components manufactured
                with strict dimensional control and process discipline.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <Car className="text-primary mb-3" />
              <h3 className="font-semibold">Automotive</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Reliable CNC-machined parts supporting OEM and Tier-1 manufacturing requirements.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <Stethoscope className="text-primary mb-3" />
              <h3 className="font-semibold">Medical Devices</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Accurate, repeatable machining for critical and sensitive applications.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <Cpu className="text-primary mb-3" />
              <h3 className="font-semibold">Electronics & Industrial Equipment</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Custom precision components engineered for advanced technology sectors.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY TECHPACK */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Why Techpack Technology
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our Competitive Advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Precision-focused manufacturing",
              "Fast turnaround capability",
              "Flexible production volumes",
              "Skilled engineering & shop-floor expertise",
              "Design-to-delivery support",
              "Continuous improvement culture"
            ].map((item) => (

              <div
                key={item}
                className="flex gap-3 items-start border border-border rounded-lg p-5 bg-card"
              >
                <CheckCircle2 className="text-primary mt-1" />
                <span>{item}</span>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 bg-secondary/30">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold">
            Achievements Snapshot
          </h2>

          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li>• Zero-defect first production delivery</li>
            <li>• Successfully onboarded global customers</li>
            <li>• Expanding customer portfolio</li>
            <li>• Facility expansion planned by 2026</li>
          </ul>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold">
            Partner With a Reliable Precision Manufacturing Company
          </h2>

          <p className="mt-6 text-muted-foreground">
            Whether you require high-volume automotive components or specialized
            aerospace parts, Techpack Technology delivers performance, reliability,
            and consistency.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-md font-semibold"
            >
              GET A QUOTE
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-border rounded-md font-semibold"
            >
              CONTACT OUR TEAM
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}