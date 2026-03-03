import Image from "next/image"
import { CheckCircle } from "lucide-react"

const industries = [
  "Aerospace",
  "Automotive",
  "Medical",
  "Electronics",
  "Industrial Sectors",
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-2xl" />
              <Image
                src="/images/about-factory.jpg"
                alt="Precision engineering workshop with engineers inspecting CNC components"
                width={600}
                height={450}
                className="relative rounded-lg border border-border/50 shadow-xl object-cover w-full"
              />
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col gap-0.5 rounded-lg bg-card border border-border p-5 shadow-xl">
                <span className="text-3xl font-bold text-primary font-heading">10+</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Years of Precision
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              About Us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Engineering Excellence, Delivered with Precision
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Techpack Technology is a Bangalore-based precision engineering
              company specializing in CNC machining and integrated manufacturing
              solutions. We deliver precision-machined components to a wide range
              of industries where quality and accuracy are non-negotiable.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-steel uppercase tracking-wider mb-4">
                Industries We Serve
              </h3>
              <ul className="flex flex-col gap-3">
                {industries.map((industry) => (
                  <li key={industry} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {industry}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
