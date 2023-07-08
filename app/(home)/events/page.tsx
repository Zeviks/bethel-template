"use client";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar/index";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

import ModalImage from "react-modal-image";

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
        <motion.h1
          variants={fadeIn("up", "tween", 0.5, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="absolute inset-0 flex items-center justify-center text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Events
        </motion.h1>
      </div>

      {/* Calendar */}
      <div className="h-40vh container my-10 flex h-fit w-fit overflow-hidden border p-4 shadow-lg">
        <div className="relative flex  items-center justify-center">
          <ModalImage
            small={"/images/calendar/1212.png"}
            medium={"/images/calendar/1212.png"}
            large={urlForImage(event.eventCalendarImage).url()}
            alt="Calendar Image"
            layout="fill"
            objectFit="cover"
            className="brightness-70 z-9999 block bg-cover bg-center"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
