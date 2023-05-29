"use client";
import SectionHeading from "../SectionHeading";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Leaders() {
  const developers = [
    {
      name: "John Doe",
      jobTitle: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      name: "Jane Smith",
      jobTitle: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      name: "David Johnson",
      jobTitle: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      name: "David Johnson",
      jobTitle: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      name: "David Johnson",
      jobTitle: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    // Add more developer objects as needed
  ];

  let settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-10">
      <SectionHeading heading="Our Leaders" />

      <div className="container my-20 flex flex-col items-center justify-between">
        <h2 className="w-full text-center text-4xl font-semibold text-dark md:w-[30ch] md:text-5xl">
          Meet our leaders
        </h2>
        <p className="w-full pt-3 text-center text-xl font-light leading-tight md:w-[50ch]">
          Every believer was created to belong to a community. It was never
          God’s heart for us to do this life alone.
        </p>

        <div className="container pt-20">
          <Slider {...settings}>
            {developers.map((developer, index) => (
              <div key={index} className="h-[300px] w-[200px] px-2 ">
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="h-full w-full object-cover shadow-sm shadow-blue-gray-900/50"
                />
                <div className="pt-3">
                  <h3 className="font-medium">{developer.name}</h3>
                  <p className="font-light text-primary">
                    {developer.jobTitle}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

/* 
          <Slider {...settings}>
            <div className=" h-[300px] w-[200px] bg-dark">
              <h3 className="text-white">1</h3>
            </div>
            <div className=" h-[300px] w-[200px] bg-dark">
              <h3 className="text-white">2</h3>
            </div>
            <div className=" h-[300px] w-[200px] bg-dark">
              <h3 className="text-white">3</h3>
            </div>
            <div className=" h-[300px] w-[200px] bg-dark">
              <h3 className="text-white">4</h3>
            </div>
            <div className=" h-[300px] w-[200px] bg-dark">
              <h3 className="text-white">5</h3>
            </div>
          </Slider>

*/
