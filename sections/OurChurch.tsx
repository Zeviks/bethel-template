"use client";

import SectionHeading from "../components/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactCTA";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { textVariant2, fadeIn, staggerContainer } from "@/utils/motion";

const OurChurch = ({ church }) => {
  const leftImg = urlForImage(church.leftImage).url();
  const rightImg = urlForImage(church.rightImage).url();

  return (
    <>
      <div className="pt-10">
        <SectionHeading heading="Our Church" />
      </div>
      <section
        id="our-church"
        className="lg:py-25 bg-primary/[.03] py-16 md:py-20"
      >
        <div className="container">
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight text-dark sm:text-3xl md:text-4xl">
              {church.sectionHeading}
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col gap-5 pt-10 lg:flex-row"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="lg:w-[75%] xl:w-[70%] flex h-[500px] items-end justify-center rounded bg-cover bg-center px-6 lg:px-8 xl:px-12"
              style={{
                backgroundImage: `url(${leftImg})`,
              }}
            >
              <div className="container mb-12 flex h-[80px] w-full flex-col items-start justify-center rounded bg-dark">
                <h2 className="lg:text-md text-center text-sm font-light text-white xl:text-lg">
                  We are located at:
                </h2>
                <Link
                  href="/"
                  className="xl:text-[16px] mt-2 text-[12px] font-semibold text-white lg:text-sm"
                >
                  {church.address}
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1.25)}
              className="flex h-[500px] w-full items-end justify-center rounded bg-cover bg-center px-6 md:px-12"
              style={{
                backgroundImage: `url(${rightImg})`,
              }}
            >
              <div className="lg:h-[80px] container mb-12 flex h-16 items-center justify-evenly rounded bg-dark py-5 sm:h-20 md:h-24">
                <h2 className="lg:text-md text-center text-sm font-medium text-lightPrimary sm:text-base md:text-lg xl:text-lg">
                  Our Service Times
                </h2>
                <div>
                  <p className="text-xs font-light text-lightPrimary sm:text-sm md:text-base lg:text-sm xl:text-lg">
                    {church.serviceTime1}
                  </p>
                  <p className="text-xs font-light text-lightPrimary sm:text-sm md:text-base lg:text-sm xl:text-lg">
                    {church.serviceTime2}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <ContactCTA />
        </div>
      </section>
    </>
  );
};

export default OurChurch;
