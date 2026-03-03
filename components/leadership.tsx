import { User, Settings } from "lucide-react"

const leaders = [
  {
    name: "Mr. Manjunath Meti",
    role: "Founder",
    icon: User,
    description:
      "Founded Techpack Technology with a vision to build a quality-driven and technically disciplined manufacturing organization.",
    areas: [
      "Strategic Vision",
      "Business Development",
      "Quality Culture",
    ],
  },
  {
    name: "Mr. Prabhu",
    role: "Chief Technology Officer",
    icon: Settings,
    description:
      "Oversees engineering planning, process optimization, production control systems, technical validation and quality alignment.",
    areas: [
      "Engineering Planning",
      "Process Optimization",
      "Production Control",
      "Technical Validation",
    ],
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Our Team
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Leadership
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
            Driven by experienced leaders committed to precision, innovation, and
            manufacturing excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader) => {
            const IconComp = leader.icon
            return (
              <div
                key={leader.name}
                className="group relative rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Glow accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-secondary text-primary">
                    <IconComp className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">{leader.role}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {leader.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {leader.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-steel"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
