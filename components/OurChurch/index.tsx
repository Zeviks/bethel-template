"use client";

import SectionHeading from "../SectionHeading";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import ContactCTA from "../ContactCTA";
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
            <SectionTitle
              title="We are a congregation firmly grounded in the love of God, devoted to serving him under any circumstance."
              paragraph=""
            />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col gap-5 pt-10 lg:flex-row"
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex h-[500px] items-end justify-center rounded bg-cover bg-center px-6 lg:w-[75%] lg:px-8 xl:w-[70%] xl:px-12"
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
                  className="mt-2 text-[12px] font-semibold text-white lg:text-sm xl:text-[16px]"
                >
                  400 S. I Rd, S Veterans Blvd, Pharr, TX 78577
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="flex h-[500px] w-full items-end justify-center rounded bg-cover bg-center px-6 md:px-12"
              style={{
                backgroundImage: `url(${rightImg})`,
              }}
            >
              <div className="container mb-12 flex h-16 items-center justify-evenly rounded bg-dark py-5 sm:h-20 md:h-24 lg:h-[80px]">
                <h2 className="lg:text-md text-center text-sm font-medium text-lightPrimary sm:text-base md:text-lg xl:text-lg">
                  Our Service Times
                </h2>
                <p className="text-xs font-light text-lightPrimary sm:text-sm md:text-base lg:text-sm xl:text-lg">
                  <span className="font-semibold">Wednesdays</span> at{" "}
                  <span className="font-semibold">7pm</span> <br />
                  <span className="font-semibold">Sundays</span> at{" "}
                  <span className="font-semibold">10am</span> &{" "}
                  <span className="font-semibold">5pm</span>
                </p>
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
