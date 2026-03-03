import Image from "next/image"
import { FileCheck, GitBranch, SearchCheck, TrendingUp } from "lucide-react"

const qualityPillars = [
  {
    icon: FileCheck,
    title: "Documented Procedures",
    description: "Comprehensive manufacturing documentation ensuring repeatability and traceability.",
  },
  {
    icon: GitBranch,
    title: "Process-Based Workflow",
    description: "Structured production workflows designed for efficiency and consistency.",
  },
  {
    icon: SearchCheck,
    title: "Inspection & Validation",
    description: "Rigorous inspection protocols with advanced metrology equipment.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Ongoing process optimization driven by data and customer feedback.",
  },
]

export function Quality() {
  return (
    <section id="quality" className="relative py-24 lg:py-32 bg-card/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Quality Assurance
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              ISO 9001:2015 Certified Quality Management System
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our commitment to quality is embedded in every stage of the manufacturing
              process. From raw material inspection to final delivery, every component
              undergoes rigorous quality checks to meet international standards.
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
                      <h3 className="text-sm font-semibold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-2xl" />
              <Image
                src="/images/quality-lab.jpg"
                alt="Quality inspection laboratory with CMM machine"
                width={600}
                height={450}
                className="relative rounded-lg border border-border/50 shadow-xl object-cover w-full"
              />
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-md bg-card/90 backdrop-blur-sm border border-border px-4 py-2 shadow-lg">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
