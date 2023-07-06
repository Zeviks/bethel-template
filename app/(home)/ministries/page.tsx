"use client";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar/index";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

import { urlForImage } from "@/sanity/lib/image";

const ministriesQuery = groq`*[_type == 'ministries']`;
const ministriesPageImageQuery = groq`*[_type == 'ministriesPageImage'][0]`;

const Page = async () => {
  const ministries = await client.fetch(ministriesQuery);
  const ministriesPageImage = await client.fetch(ministriesPageImageQuery);
  return (
    <>
      <NavigationBar />
      <div className="ministry-header relative h-[700px]">
        <Image
          alt="Ministries Header"
          src={urlForImage(ministriesPageImage.mainImage).url()}
          style={{ filter: "brightness(0.7)" }}
          layout="fill"
          objectFit="cover"
          className="brightness-70 block"
        />

        <motion.h1
          variants={fadeIn("bottom", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="absolute inset-0 flex items-center justify-center text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Our Ministries
        </motion.h1>
      </div>

      <div className="container mx-auto px-4 pb-[8rem] pt-[1rem] md:px-12">
        <div className="h-full py-8">
          <h2 className="font-base text-4xl text-dark">
            God&apos;s house always has room for everyone.{" "}
            <span className="border-b-2 border-primary font-semibold">
              Discover where you fit in best.
            </span>
          </h2>
          <p className="text-lg font-thin">
            Browse through our minstries below
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {ministries.map((ministry, index) => (
            <motion.article
              key={ministry._id}
              variants={fadeIn("up", "tween", 0.2, (index + 1) * 0.1)}
              initial="hidden"
              whileInView="show"
              className="overflow-hidden shadow-lg"
            >
              <div
                className="relative h-[300px] overflow-hidden rounded bg-cover bg-center p-4 shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(
                    180deg, rgba(0, 10, 26, 0) 35.38%, #15192A 100%
                  ),url("${urlForImage(ministry.mainImage).url()}")`,
                }}
              >
                <div className="flex h-[100%] flex-col justify-end">
                  <div>
                    <h5 className="text-neutral-800 mb-2 text-xl font-medium leading-tight text-white">
                      {ministry.name}
                    </h5>
                    <p className="text-neutral-600 mb-4 text-base font-light text-white">
                      {ministry.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
