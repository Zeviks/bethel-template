import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/CTA";
import OurChurch from "@/components/OurChurch";
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
import { urlForImage } from "@/sanity/lib/image";

import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

const inter = Inter({ subsets: ["latin"] });

const heroQuery = groq`*[_type == 'hero'][0]`;
const churchQuery = groq`*[_type == 'about'][0]`;
const yearlyQuery = groq`*[_type == 'yearlyTheme'][0]`;

const Home = async () => {
  const heroContent = await client.fetch(heroQuery);
  const churchContent = await client.fetch(churchQuery);
  const yearlyContent = await client.fetch(yearlyQuery);

  return (
    <>
      <NavigationBar />
      <Hero hero={heroContent} />
      <ScrollUp />
      <OurChurch church={churchContent} />
      <YearlyTheme yearly={yearlyContent} />
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
};

export default Home;
