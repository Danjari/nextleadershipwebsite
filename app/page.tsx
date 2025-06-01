import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import AboutUsSection from "./components/AboutUs";
import WorkWithUsSection from "./components/workwithus";
import ProgramsOverviewSection from "./components/ProgramOverview";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ProgramsOverviewSection />
      <WorkWithUsSection />
      <Footer />
    </main>
  );
}
