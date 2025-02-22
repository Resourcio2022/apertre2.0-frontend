import FAQ from "./_components/faq";
import Hero from "./_components/hero-section";
import Registration from "./_components/registration";
import Sponsor from "./_components/sponsors";
import Plants from "./about-us/_components/plants";
import Timeline from "./_components/timeline";
import TaskTable from "./_components/task-table";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TaskTable/> */}
      <Plants />
      {/* <Timeline /> */}
      <Registration />
      <Sponsor />
      {/* <Testimonials /> */}
      <FAQ />
    </>
  )
}
