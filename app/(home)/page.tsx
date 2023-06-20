import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/CTA";
import Features from "@/components/OurChurch";
import Hero from "@/components/Hero";
import Leaders from "@/components/OurLeaders";
import Minisitries from "@/components/OurMinistries";
import YearlyTheme from "@/components/YearlyTheme";
import { Inter } from "@next/font/google";
import MissionHeading from "@/components/OurMission/MissionHeading";
import MissionBody from "@/components/OurMission/MissionBody";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationBar from "@/components/NavigationBar/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <ScrollUp />
      <Features />
      <YearlyTheme />
      <MissionHeading />
      <div className="mt-2 bg-missionBg bg-cover bg-center">
        <MissionBody />
      </div>
      <Minisitries />
      <Leaders />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}
