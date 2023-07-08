"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

import Link from "next/link";

const ContactCTA = ({ href, buttonName, buttonDesc }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 1, 0.2)}
      initial="hidden"
      whileInView="show"
      className="my-10 flex w-full items-center md:flex-row md:justify-end"
    >
      <p className="w-fit font-light md:mr-4 ">{buttonDesc}</p>
      <Link
        href={href}
        className="ease-in-up hover:bg-primary/70 font-base whitespace-nowrap rounded-md border-2 border-dark px-4 py-2 text-base text-dark transition duration-300 hover:border-white md:mr-4 md:px-5 lg:px-6 xl:px-7"
      >
        {buttonName}
      </Link>
    </motion.div>
  );
};

export default ContactCTA;
