import FAQ from "./_components/faq";
import Hero from "./_components/hero-section";
import Registration from "./_components/registration";
import Sponsor from "./_components/sponsors";
import Testimonials from "./_components/testimonials";
import Plants from "./about-us/_components/plants";

export default function Home() {
  return (
    <>
      <Hero />
      <Plants />
      <Registration />
      <Sponsor />
      <Testimonials />
      <FAQ />
    </>
  )
}
