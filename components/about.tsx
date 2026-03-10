// import Image from "next/image"
// import { CheckCircle } from "lucide-react"

// const industries = [
//   "Aerospace",
//   "Automotive",
//   "Medical",
//   "Electronics",
//   "Industrial Sectors",
// ]

// export function About() {
//   return (
//     <section id="about" className="relative py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Image */}
//           <div className="flex-1 w-full">
//             <div className="relative">
//               <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-2xl" />
//               <Image
//                 src="/images/about-factory.jpg"
//                 alt="Precision engineering workshop with engineers inspecting CNC components"
//                 width={600}
//                 height={450}
//                 className="relative rounded-lg border border-border/50 shadow-xl object-cover w-full"
//               />
//               {/* Stats overlay */}
//               <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col gap-0.5 rounded-lg bg-card border border-border p-5 shadow-xl">
//                 <span className="text-3xl font-bold text-primary font-heading">10+</span>
//                 <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Years of Precision
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="flex-1">
//             <span className="text-xs font-semibold tracking-widest text-primary uppercase">
//               About Us
//             </span>
//             <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
//               Engineering Excellence, Delivered with Precision
//             </h2>
//             <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

//             <p className="mt-6 text-base leading-relaxed text-muted-foreground">
//               Techpack Technology is a Bangalore-based precision engineering
//               company specializing in CNC machining and integrated manufacturing
//               solutions. We deliver precision-machined components to a wide range
//               of industries where quality and accuracy are non-negotiable.
//             </p>

//             <div className="mt-8">
//               <h3 className="text-sm font-semibold text-steel uppercase tracking-wider mb-4">
//                 Industries We Serve
//               </h3>
//               <ul className="flex flex-col gap-3">
//                 {industries.map((industry) => (
//                   <li key={industry} className="flex items-center gap-3">
//                     <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
//                     <span className="text-sm font-medium text-foreground">
//                       {industry}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import Image from "next/image"
import { CheckCircle, Eye, Crosshair, User, Settings } from "lucide-react"

const industries = [
  "Aerospace",
  "Automotive",
  "Medical",
  "Electronics",
  "Industrial Sectors",
]

const leaders = [
  {
    name: "Mr. Manjunath Meti",
    role: "Founder",
    icon: User,
    description:
      "Founded Techpack Technology with a vision to build a quality-driven and technically disciplined manufacturing organization.",
    areas: ["Strategic Vision", "Business Development", "Quality Culture"],
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

export function About() {
  return (
    <>
      {/* ABOUT INTRO */}
      <section id="about" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-primary/5 blur-2xl" />

                <Image
                  src="/images/about-factory.jpg"
                  alt="Precision engineering workshop"
                  width={600}
                  height={450}
                  className="relative rounded-lg border border-border/50 shadow-xl object-cover w-full"
                />

                <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col gap-0.5 rounded-lg bg-card border border-border p-5 shadow-xl">
                  <span className="text-3xl font-bold text-primary">10+</span>
                  <span className="text-xs uppercase text-muted-foreground">
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

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Precision Manufacturing Built on Discipline & Trust
              </h2>

              <div className="mt-2 h-1 w-16 bg-primary rounded-full" />

              <p className="mt-6 text-muted-foreground">
                Techpack Technology is a Bangalore-based precision engineering
                company specializing in CNC machining and integrated manufacturing
                solutions for high-performance industries.
              </p>

              <p className="mt-4 text-muted-foreground">
                We deliver precision-machined components to Aerospace,
                Automotive, Medical, Electronics, and Industrial sectors —
                where dimensional accuracy, process control, and reliability
                are critical.
              </p>

              <p className="mt-4 text-muted-foreground">
                Our operations are guided by structured systems, engineering
                discipline, and a long-term partnership approach.
              </p>

              {/* Industries */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase mb-4">
                  Industries We Serve
                </h3>

                <ul className="flex flex-col gap-3">
                  {industries.map((industry) => (
                    <li key={industry} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative py-24 lg:py-32 bg-card/40">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-16">
            <span className="text-xs uppercase text-primary tracking-widest">
              Our Team
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Leadership
            </h2>

            <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader) => {
              const Icon = leader.icon
              return (
                <div
                  key={leader.name}
                  className="group rounded-lg border border-border bg-card p-8 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4 mb-6">

                    <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-secondary text-primary">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-primary">
                        {leader.role}
                      </p>
                    </div>

                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {leader.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {leader.areas.map((area) => (
                      <span
                        key={area}
                        className="border border-border px-3 py-1 rounded-full text-xs"
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

      {/* VISION & MISSION */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-primary">
              Our Purpose
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Vision & Mission
            </h2>

            <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Vision */}
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">

                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-secondary text-primary">
                  <Eye className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold">Vision</h3>

              </div>

              <p className="text-muted-foreground">
                To become a trusted precision manufacturing partner
                recognized for quality, reliability, and engineering excellence.
              </p>

            </div>

            {/* Mission */}
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">

                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-secondary text-primary">
                  <Crosshair className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold">Mission</h3>

              </div>

              <p className="text-muted-foreground">
                To deliver high-accuracy machined components through disciplined
                manufacturing systems, skilled execution, and continuous improvement.
              </p>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}