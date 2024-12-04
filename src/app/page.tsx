
import AboutUs from "@/app/_components/about-us";
import Hero from "@/app/_components/hero-section";
import Registration from "@/app/_components/registration";
import { Children } from "react";

export default function Home() {
  return (
      <>
        <Hero/>
          <AboutUs/>
          <Registration />
      </>
  )
}