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
                  href="https://www.google.com/maps/place/Bethel+Pharr.church/@26.1876599,-98.171044,17z/data=!4m15!1m8!3m7!1s0x8665a078a385996f:0x4a1df8408ffca182!2s400+S+Veterans+Blvd,+Pharr,+TX+78577!3b1!8m2!3d26.1876599!4d-98.171044!16s%2Fg%2F11hc2xk25v!3m5!1s0x8665a0785d494089:0xccdc46439ec7a970!8m2!3d26.1889005!4d-98.1685385!16s%2Fg%2F1tfr0w4t?entry=ttu"
                  target="_blank"
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
          <ContactCTA
            href={"#contact"}
            buttonName={"Contact Us"}
            buttonDesc={"Feel free to reach out to us during office hours."}
          />
        </div>
      </section>
    </>
  );
};

export default OurChurch;
