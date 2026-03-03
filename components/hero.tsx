import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cnc.jpg"
          alt="CNC Machining in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Blueprint grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #2E6FD8 1px, transparent 1px),
          linear-gradient(to bottom, #2E6FD8 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium tracking-widest text-steel uppercase mb-8">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              ISO 9001:2015 Certified
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Precision Manufacturing Built on{" "}
              <span className="text-primary">Discipline</span> &{" "}
              <span className="text-steel">Trust</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground mx-auto lg:mx-0">
              CNC Machining & Integrated Manufacturing Solutions for Aerospace,
              Automotive & Defence Industries
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 rounded-md border border-steel/30 px-7 py-3.5 text-sm font-semibold text-steel tracking-wide uppercase transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              >
                Our Capabilities
              </a>
            </div>
          </div>

          <div className="flex-1 hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-3xl" />
              <Image
                src="/images/hero-cnc.jpg"
                alt="Precision CNC Machining"
                width={560}
                height={400}
                className="relative rounded-lg border border-border/50 shadow-2xl shadow-primary/10 object-cover"
              />
              <div className="absolute -bottom-3 -right-3 rounded-md bg-card border border-border px-4 py-3 shadow-lg">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tolerance</div>
                <div className="text-lg font-bold text-primary font-heading">+/- 0.01mm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
