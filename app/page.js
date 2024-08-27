import Banner from "./_components/main-content/Banner";
import Benefits from "./_components/main-content/Benefits";
import Divider from "./_components/main-content/Divider";
import Facts from "./_components/main-content/Facts";
import Feature from "./_components/main-content/Feature";
import Feedback from "./_components/main-content/Feedback";
import Hero from "./_components/main-content/Hero";
import Slider from "./_components/main-content/Slider";

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
    </main>
  );
}
