"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

import Link from "next/link";

const ContactCTA = ({ href, buttonName, buttonDesc }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.7, 0.2)}
      initial="hidden"
      whileInView="show"
      className="my-10 flex flex-col items-center md:flex-row md:justify-end"
    >
      <div className="flex items-center md:mr-4">
        <p className="mr-2 font-light">{buttonDesc}</p>
        <Link
          href={href}
          className="ease-in-up hover:bg-primary/70 font-base whitespace-nowrap rounded-md border-2 border-dark px-4 py-2 text-base text-dark transition duration-300 hover:border-white md:px-5 lg:px-6 xl:px-7"
        >
          {buttonName}
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactCTA;
