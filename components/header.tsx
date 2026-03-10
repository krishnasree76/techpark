// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"

// const navLinks = [
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Leadership", href: "#leadership" },
//   { label: "Quality", href: "#quality" },
//   { label: "Contact", href: "#contact" },
// ]

// export function Header() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-primary/5"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
//         <Link href="/" className="flex items-center gap-3">
//           <Image
//             src="/images/image.png"
//             alt="Techpack Technology Logo"
//             width={160}
//             height={48}
//             className="max-h-10 w-auto md:max-h-12"
//             priority
//           />
//         </Link>

//         <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="text-sm font-medium tracking-wide text-steel uppercase hover:text-primary transition-colors duration-200"
//             >
//               {link.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="ml-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground tracking-wide uppercase transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
//           >
//             Request a Quote
//           </a>
//         </nav>

//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="lg:hidden p-2 text-steel hover:text-primary transition-colors"
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//         >
//           {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
//           <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMobileOpen(false)}
//                 className="py-3 text-sm font-medium tracking-wide text-steel uppercase hover:text-primary transition-colors border-b border-border/50"
//               >
//                 {link.label}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               onClick={() => setMobileOpen(false)}
//               className="mt-3 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground tracking-wide uppercase text-center transition-all hover:bg-primary/90"
//             >
//               Request a Quote
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" }
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">

      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/image.png"
            alt="Techpack Technology Logo"
            width={160}
            height={48}
            className="max-h-10 w-auto md:max-h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-700 uppercase hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white uppercase hover:bg-primary/90 transition"
          >
            Request a Quote
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">

          <nav className="flex flex-col px-6 py-4">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium uppercase text-gray-700 border-b border-border hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white uppercase text-center"
            >
              Request a Quote
            </Link>

          </nav>

        </div>
      )}
    </header>
  )
}