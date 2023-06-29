"use client";
import Link from "next/link";
import HeroIcon from "./HeroIcon";
import { urlForImage } from "@/sanity/lib/image";
import defaultImage from "@/utils/defaultImage";
import { motion } from "framer-motion";

const Hero = ({ hero }) => {
  const heroImg = urlForImage(hero.mainImage).url() || defaultImage;

  // const heroImg = hero.mainImage
  //   ? urlForImage(hero.mainImage).url()
  //   : defaultImage.url;

  return (
    <section
      id="home"
      className="relative z-10 h-screen w-full overflow-hidden bg-cover bg-center py-0 pt-[100px] md:h-[100%] md:bg-fixed md:pt-[150px] md:pb-[120px] xl:h-screen xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      style={{
        background: `url(${heroImg}) no-repeat center center / cover`,
        transform: "rotate(0deg)",
      }}
    >
      <motion.div className="container flex h-[75%] flex-col justify-center">
        <div className="-mx-4 mt-8 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center xl:max-w-[900px]"
              data-wow-delay=".2s"
            >
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-10 font-['Bellefair'] text-5xl leading-tight text-white sm:text-7xl sm:leading-tight md:mt-2 md:text-8xl md:leading-tight lg:text-[110px] xl:text-9xl"
              >
                SERVING GOD
                <br />
                <span>
                  WITH{" "}
                  <span className="rounded-md bg-primary text-dark">LOVE</span>
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="xs:text-md mb-12 text-sm font-light text-white sm:text-lg md:text-2xl"
              >
                Experience God’s presence with us at Bethel in Pharr,
                <br /> on Sundays & Wednesdays.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="px-auto flex items-end justify-center gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              >
                <Link
                  href="/"
                  className="rounded bg-primary py-2 px-3 text-sm font-medium text-dark duration-300 ease-in-out hover:bg-primary/80 sm:text-base"
                >
                  Join in Person
                </Link>
                <Link
                  href="/"
                  className="anim-underline-fx py-2 text-base font-medium text-lightPrimary duration-300 ease-in-out sm:text-sm"
                >
                  <span className="flex font-medium">
                    Watch Online
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="ml-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1.5 }}
      >
        <HeroIcon />
      </motion.div>
    </section>
  );
};

export default Hero;
