
import AboutUs from "@/app/_components/about-us";
import Hero from "@/app/_components/hero-section";
import FAQ from "@/app/_components/faq";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Registration from "@/app/_components/registration";
export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <Hero /> */}
      <AboutUs />
      <Registration/>
      <FAQ/>
      <Footer/>
    </>
  )
}