import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Aerospace Components",
  "Automotive Parts",
  "Defense Manufacturing",
  "Medical Components",
  "Electronics Machining",
  "Industrial Components",
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/image.png"
              alt="Techpack Technology Logo"
              width={160}
              height={48}
              className="max-h-12 w-auto mb-5"
            />

            <p className="text-sm leading-relaxed text-gray-700">
              Precision CNC Machining & Integrated Manufacturing Solutions for
              Aerospace, Automotive & Defence Industries.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-5">
              Navigation
            </h4>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-5">
              Services
            </h4>

            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-700">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-5">
              Contact
            </h4>

            <div className="flex flex-col gap-4">

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />

                <a
                  href="mailto:techpacktechnology.in@gmail.com"
                  className="text-sm text-gray-700 hover:text-primary transition-colors break-all"
                >
                  techpacktechnology.in@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />

                <p className="text-sm text-gray-700 leading-relaxed">
                  #17, 13th Cross, Kalikanagar,
                  <br />
                  Andrahalli, Bangalore - 560091
                  <br />
                  Karnataka, India
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Techpack Technology. All rights reserved.
          </p>

          <p className="text-xs text-gray-700">
            ISO 9001:2015 Certified | Precision Engineering Excellence
          </p>

        </div>

      </div>

    </footer>
  )
}
