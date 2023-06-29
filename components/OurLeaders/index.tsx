"use client";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2, fadeIn } from "@/utils/motion";

export default function Leaders({ leaders }) {
  let settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-10" id="our-leaders">
      <SectionHeading heading="Our Leaders" />

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        className="container my-20 flex flex-col items-center justify-between"
      >
        <motion.h2
          variants={textVariant2}
          className="w-fit text-center text-4xl font-semibold text-dark md:text-5xl"
        >
          Meet our leaders
        </motion.h2>
        <motion.p
          variants={fadeIn("left", "tween", 0.2, 0.3)}
          className="w-full pt-3 text-center text-xl font-light leading-tight md:w-[50ch]"
        >
          Every believer was created to belong to a community. It was never
          God’s heart for us to do this life alone.
        </motion.p>

        <div className="container pt-20">
          <Slider {...settings}>
            {leaders.map((leader) => (
              <div
                key={leader._id}
                className="h-[400px] w-[200px] px-2 sm:w-[250px] md:w-[300px]"
              >
                <img
                  src={urlForImage(leader.mainImage).url()}
                  alt={leader.fullname}
                  className="h-full w-full bg-cover bg-center object-cover shadow-sm shadow-blue-gray-900/50"
                />
                <div className="pt-3">
                  <h3 className="font-semibold uppercase">{leader.fullname}</h3>
                  <p className="font-base uppercase text-primary">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}
