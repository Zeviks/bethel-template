import {
  Hero,
  OurChurch,
  YearlyTheme,
  MissionHeading,
  MissionBody,
  OurLeaders,
  OurMinistries,
  Contact,
} from "@/sections";

import { Footer, ScrollToTop, NavigationBar, ScrollUp } from "@/components";

import { Inter } from "@next/font/google";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

const inter = Inter({ subsets: ["latin"] });

const heroQuery = groq`*[_type == 'hero'][0]`;
const churchQuery = groq`*[_type == 'about'][0]`;
const yearlyQuery = groq`*[_type == 'yearlyTheme'][0]`;
const missionQuery = groq`*[_type == 'mission'][0]`;
const leadersQuery = groq`*[_type == 'leader']`;
const leadersHeadingQuery = groq`*[_type == 'leadersHeading'][0]`;

const Home = async () => {
  const heroContent = await client.fetch(heroQuery);
  const missionContent = await client.fetch(missionQuery);
  const churchContent = await client.fetch(churchQuery);
  const yearlyContent = await client.fetch(yearlyQuery);
  const leadersContent = await client.fetch(leadersQuery);
  const leadersHeadingContent = await client.fetch(leadersHeadingQuery);

  return (
    <>
      <NavigationBar />
      <Hero hero={heroContent} />
      <ScrollUp />

      <OurChurch church={churchContent} />

      <YearlyTheme yearly={yearlyContent} />
      <MissionHeading />
      <div className="mt-2 bg-missionBg bg-cover bg-center">
        <MissionBody mission={missionContent} />
      </div>
      <OurMinistries />
      {/* <OurLeaders leaders={leadersContent} heading={leadersHeadingContent} /> */}
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
