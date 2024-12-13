import AboutUs from "./_components/about-us";
import FAQ from "./_components/faq";
import Hero from "./_components/hero-section";
import Registration from "./_components/registration";
import Testimonials from "./_components/testimonials";
import RocketComingSoon from "@/components/ComingSoon";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Registration />
      {/* <Testimonials /> */}
      
      <FAQ />
    </>
  )
}
