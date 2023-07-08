"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

import Link from "next";

const ContactCTA = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      className="my-10 flex w-full items-center md:flex-row md:justify-end"
    >
      <p className="w-fit font-light md:mr-4">
        Feel free to reach out to us during office hours.
      </p>
      <a href={"/ministries"}>
        <Button variant="outlined" className="text-dark">
          Contact Us
        </Button>
      </a>
    </motion.div>
  );
};

export default ContactCTA;
