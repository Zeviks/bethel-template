"use client";
import { Button } from "@material-tailwind/react";
import MinistryCard from "../components/MinistryCard";
import { motion, Variants } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

interface Motion {
  staggerContainer: Variants;
}

const Ministries: React.FC = () => {
  return (
    <section className="yearly-gradient" id="our-ministries">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.2, 0.5)}
        className="container flex w-full flex-col items-center justify-between py-10 sm:flex-row"
      >
        <h2 className="w-full text-center text-3xl font-semibold text-dark sm:w-[30ch] sm:text-left sm:text-4xl">
          Our Ministries
        </h2>
        <p className="mt-4 text-center text-base font-light sm:mt-0 sm:text-left sm:text-xl">
          God&apos;s house always has room for everyone. <br />
          <span className="font-semibold">Discover where you fit in best.</span>
        </p>
      </motion.div>

      <div className="container pb-5">
        <motion.div
          variants={staggerContainer(0.1, 0.1)} // Adjust staggerChildren and delayChildren as needed
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-2 grid-rows-[_repeat(3,_250px)] gap-4 rounded-lg md:grid-cols-3"
        >
          {/* Top Row */}
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="row-span-1"
          >
            <MinistryCard
              title="Women Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/womens.webp"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="row-span-2 "
          >
            <MinistryCard
              title="Kids Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/kids.webp"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="row-span-1"
          >
            <MinistryCard
              title="Youth Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/youth.webp"
            />
          </motion.div>
          {/* Bottom Row */}
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="row-span-2 "
          >
            <MinistryCard
              title="Golden Agers"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/golden.webp"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="row-span-2 "
          >
            <MinistryCard
              title="Royal Rangers"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/royal.webp"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.5)}
            className="col-span-2 row-span-1 md:col-span-1 "
          >
            <MinistryCard
              title="Girl's Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/girls.webp"
            />
          </motion.div>
        </motion.div>

        <motion.div className="my-10 flex flex-col items-center sm:flex-row sm:justify-between">
          <a href="/ministries" className="mt-4 sm:mt-0">
            <Button variant="outlined">View All</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries;
