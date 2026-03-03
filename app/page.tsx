import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Leadership } from "@/components/leadership"
import { Quality } from "@/components/quality"
import { WhyChooseUs } from "@/components/why-choose-us"
import { VisionMission } from "@/components/vision-mission"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Leadership />
        <Quality />
        <WhyChooseUs />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
