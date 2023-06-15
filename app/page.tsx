import AboutSectionOne from "@/components/Mission/AboutSectionOne";
import AboutSectionTwo from "@/components/Mission/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Leaders from "@/components/Leaders";
import Minisitries from "@/components/Ministries";
import YearlyTheme from "@/components/YearlyTheme";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollUp />
      <Features />
      <YearlyTheme />
      <AboutSectionOne />
      <div className="mt-2 bg-missionBg bg-cover bg-center">
        <AboutSectionTwo />
      </div>
      <Minisitries />
      <Leaders />
      <Contact />
    </>
  );
}
