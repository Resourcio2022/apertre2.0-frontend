import FAQ from "./_components/faq";
import Hero from "./_components/hero-section";
import Prizes from "./_components/prizes";
import Registration from "./_components/registration";
import Sponsor from "./_components/sponsors";
import TaskTable from "./_components/task-table";
import Plants from "./about-us/_components/plants";

export default function Home() {
  return (
    <>
      <Hero />
      <Plants />
      <TaskTable />
      <Registration />
      <Prizes />
      <Sponsor />
      <FAQ />
    </>
  );
}
