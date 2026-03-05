import { Briefcase, Users, Award, GraduationCap } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="py-24 lg:py-32">

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Careers
          </span>

          <h1 className="mt-3 text-4xl font-bold">
            Build Your Future in Precision Engineering
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground">
            At Techpack Technology, we believe that strong engineering teams
            build strong manufacturing systems. We are always looking for
            skilled, disciplined, and growth-oriented professionals passionate
            about precision manufacturing and continuous improvement.
          </p>
        </div>

        {/* Why Join */}
        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Why Join Techpack Technology?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex items-start gap-3">
              <Award className="text-primary mt-1" />
              <p>ISO 9001:2015 Certified Organization</p>
            </div>

            <div className="flex items-start gap-3">
              <Briefcase className="text-primary mt-1" />
              <p>Exposure to Aerospace, Automotive & Industrial sectors</p>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-primary mt-1" />
              <p>Structured manufacturing environment</p>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="text-primary mt-1" />
              <p>Skill development and technical learning culture</p>
            </div>

          </div>

          <p className="mt-6 text-muted-foreground">
            We provide a performance-driven and professional work environment
            where talent and dedication are recognized.
          </p>

        </section>

        {/* Current Opportunities */}
        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-8">
            Current Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* CNC Operators */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">
                CNC Machine Operators
              </h3>

              <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
                <li>Experience in VMC / CNC Turning</li>
                <li>Ability to read engineering drawings</li>
                <li>Understanding of machining parameters</li>
              </ul>
            </div>

            {/* CNC Programmers */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">
                CNC Programmers (CAD/CAM)
              </h3>

              <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
                <li>Experience in CNC programming</li>
                <li>Knowledge of tool selection</li>
                <li>Strong understanding of dimensional tolerances</li>
              </ul>
            </div>

            {/* Quality Inspectors */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">
                Quality Inspectors
              </h3>

              <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
                <li>Experience in dimensional inspection</li>
                <li>Knowledge of measuring instruments</li>
                <li>Understanding of ISO 9001 documentation</li>
              </ul>
            </div>

            {/* Supervisors */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">
                Production & Shop Floor Supervisors
              </h3>

              <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
                <li>Production planning</li>
                <li>Team coordination</li>
                <li>Quality control monitoring</li>
              </ul>
            </div>

          </div>

        </section>

        {/* Who We Look For */}
        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Who We Look For
          </h2>

          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">

            <li>• Technical qualification (Diploma / ITI / Engineering)</li>
            <li>• Discipline and attention to detail</li>
            <li>• Commitment to quality</li>
            <li>• Team-oriented mindset</li>
            <li>• Willingness to learn and improve</li>

          </ul>

        </section>

        {/* How to Apply */}
        <section className="mb-20 border border-border rounded-lg p-8 bg-card">

          <h2 className="text-2xl font-semibold mb-4">
            How to Apply
          </h2>

          <p className="text-muted-foreground mb-6">
            Interested candidates can send their updated resume to:
          </p>

          <div className="space-y-2">

            <p>
              📧 <strong>techpacktechnology.in@gmail.com</strong>
            </p>

            <p>
              📞 <strong>+91 7829070378</strong>
            </p>

          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Please mention the position applied for in the subject line.
          </p>

        </section>

        {/* Internship */}
        <section>

          <h2 className="text-2xl font-semibold mb-4">
            Internship & Training Opportunities
          </h2>

          <p className="text-muted-foreground">
            We also welcome applications from diploma and engineering students
            seeking practical exposure in CNC machining and manufacturing
            operations.
          </p>

        </section>

      </div>
    </main>
  )
}