import Banner from "@/app/_components/main-content/Banner";
import Benefits from "@/app/_components/main-content/Benefits";
import Divider from "@/app/_components/main-content/Divider";
import Facts from "@/app/_components/main-content/Facts";
import Feature from "@/app/_components/main-content/Feature";
import Feedback from "@/app/_components/main-content/Feedback";
import Hero from "@/app/_components/main-content/Hero";
import Slider from "@/app/_components/main-content/Slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Feature />
      <Slider />
      <Divider />
      <Facts />
      <Benefits />
      <Banner />
      <Feedback />
      <Divider direction="down" />
    </main>
  );
}
