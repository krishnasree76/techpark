import Image from "next/image"
import { Plane, Car, Shield, HeartPulse, Cpu, Factory } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Aerospace Components",
    description:
      "High-precision CNC components for aerospace applications where dimensional accuracy and reliability are critical.",
    image: "/images/service-aerospace.jpg",
  },
  {
    icon: Car,
    title: "Automotive Precision Parts",
    description:
      "Precision-machined automotive components built for durability, safety, and performance.",
    image: "/images/service-automotive.jpg",
  },
  {
    icon: Shield,
    title: "Defense Manufacturing",
    description:
      "Mission-critical defense components manufactured under strict quality control systems.",
    image: "/images/service-defense.jpg",
  },
  {
    icon: HeartPulse,
    title: "Medical Components",
    description:
      "High-accuracy medical components manufactured with controlled processes and validation systems.",
    image: "/images/service-medical.jpg",
  },
  {
    icon: Cpu,
    title: "Electronics Machining",
    description:
      "Complex aluminum and steel parts for electronics and industrial equipment.",
    image: "/images/service-electronics.jpg",
  },
  {
    icon: Factory,
    title: "Industrial Components",
    description:
      "Robust and reliable components engineered for industrial performance.",
    image: "/images/service-industrial.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-card/50">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, #2E6FD8 1px, transparent 1px),
          linear-gradient(to bottom, #2E6FD8 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            What We Do
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Manufacturing Capabilities
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
            From aerospace to industrial applications, we deliver precision-machined
            components across diverse sectors with uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComp = service.icon
            return (
              <div
                key={service.title}
                className="group relative rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center justify-center h-10 w-10 rounded-md bg-primary/90 text-primary-foreground shadow-md">
                    <IconComp className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
