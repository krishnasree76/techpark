import { Target, Layers, ClipboardCheck, RefreshCw, Handshake } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Precision-Focused Engineering",
    description:
      "A culture of engineering precision drives every component we manufacture, ensuring dimensional accuracy beyond expectations.",
  },
  {
    icon: Layers,
    title: "Integrated Manufacturing",
    description:
      "End-to-end manufacturing capabilities under one roof, from raw material sourcing to finished component delivery.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured Quality Systems",
    description:
      "ISO-certified quality management systems with documented procedures and rigorous validation protocols.",
  },
  {
    icon: RefreshCw,
    title: "Prototype to Production",
    description:
      "Seamless transition from rapid prototyping to full-scale production with consistent quality at every stage.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We build lasting relationships with our clients, becoming a trusted extension of their supply chain.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Our Advantage
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Why Choose Techpack Technology
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComp = feature.icon
            return (
              <div
                key={feature.title}
                className={`group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
                  index === features.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-primary mb-5">
                  <IconComp className="h-6 w-6" />
                </div>

                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
