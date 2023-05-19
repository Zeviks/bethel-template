import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Minisitries from "@/components/Ministries";
import YearlyTheme from "@/components/YearlyTheme";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-bethelHero bg-cover bg-center">
        <Hero />
      </div>
      <ScrollUp />
      <Features />
      <YearlyTheme />
      <AboutSectionOne />
      <div className="mt-2 bg-missionBg bg-cover">
        <AboutSectionTwo />
      </div>
      <Minisitries />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
