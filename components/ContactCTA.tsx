"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

import Link from "next/link";

const ContactCTA = ({ href, buttonName, buttonDesc }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      className="my-10 flex w-full items-center md:flex-row md:justify-end"
    >
      <p className="w-fit font-light md:mr-4">{buttonDesc}</p>
      <Link
        href={href}
        className="mb-2 mr-2 rounded-lg bg-blue-700 px-6 py-2.5 text-xl font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {buttonName}
      </Link>
    </motion.div>
  );
};

export default ContactCTA;
