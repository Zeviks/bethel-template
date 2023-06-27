import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar/index";
import Image from "next/image";

import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

import { urlForImage } from "@/sanity/lib/image";

const eventQuery = groq`*[_type == 'event'][0]`;

const Page = async () => {
  const event = await client.fetch(eventQuery);
  return (
    <>
      <NavigationBar />

      <div className="ministry-header relative h-[700px]">
        <Image
          alt="Ministries Header"
          src={urlForImage(event.eventPageImage).url()}
          style={{ filter: "brightness(0.7)" }}
          layout="fill"
          objectFit="cover"
          className="brightness-70 block"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Events
        </h1>
      </div>

      <div className="container my-10 flex h-[80vh] w-full items-center justify-center overflow-hidden border shadow-lg">
        <div className="relative h-full w-full">
          <Image
            alt="Ministries Header"
            src={urlForImage(event.eventCalendarImage).url()}
            layout="fill"
            objectFit="cover"
            className="brightness-70 block"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
