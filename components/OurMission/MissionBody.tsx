"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant2 } from "@/utils/motion";

const MissionBody = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="flex h-[90vh] w-full flex-col justify-evenly">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container flex flex-col text-white"
        >
          <motion.h2 variants={textVariant2} className="mb-4 text-4xl">
            Example Title
          </motion.h2>
          <motion.p
            variants={fadeIn("right", " tween", 0.2, 0.5)}
            className="w-fit text-xl font-light leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur. Sapien
            <br className="sm:hidden" /> montes turpis pellentesque quis mus.
            Nisl diam nibh <br className="sm:hidden" /> pulvinar scelerisque
            integer eget scelerisque <br className="sm:hidden" /> fermentum
            fames. Ut fermentum eu nullam <br className="sm:hidden" />
            pellentesque a mus viverra sit.{" "}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionBody;
