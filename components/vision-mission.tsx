import { Eye, Crosshair } from "lucide-react"

export function VisionMission() {
  return (
    <section className="relative py-24 lg:py-32 bg-card/50">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, #2E6FD8 1px, transparent 1px),
          linear-gradient(to bottom, #2E6FD8 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Our Purpose
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Vision & Mission
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="relative rounded-lg border border-border bg-card p-8 lg:p-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Vision
              </h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              To become a globally recognized precision engineering partner,
              delivering innovative manufacturing solutions that set new standards
              in quality, reliability, and technological excellence across the
              aerospace, automotive, and defense sectors.
            </p>
          </div>

          {/* Mission */}
          <div className="relative rounded-lg border border-border bg-card p-8 lg:p-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/60" />
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-primary">
                <Crosshair className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Mission
              </h3>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              To provide precision-machined components through advanced CNC
              technologies, disciplined processes, and a relentless commitment to
              quality. We aim to build lasting partnerships with our clients by
              consistently exceeding expectations in every project we undertake.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <div className="mx-4 h-2 w-2 rounded-full bg-primary" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </section>
  )
}
