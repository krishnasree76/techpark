import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Contact Us
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
            Ready to discuss your precision manufacturing needs? Reach out and
            our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Request a Quote
            </h3>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-steel">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-steel">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium text-steel">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  className="rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-steel">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your manufacturing requirements..."
                  className="rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:techpacktechnology.in@gmail.com"
                      className="text-sm text-primary hover:underline"
                    >
                      techpacktechnology.in@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      #17, 13th Cross, Kalikanagar, Andrahalli
                      <br />
                      Bangalore - 560091
                      <br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      Contact us for inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1 rounded-lg border border-border overflow-hidden min-h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2!2d77.5!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '250px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techpack Technology Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
