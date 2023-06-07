import { useState } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";

import MinistryCard from "./MinistryCard";
import { createPortal } from "react-dom";
import { flushSync } from "react-dom/cjs/react-dom-server.browser.development"; // Update the import path

const Ministries = () => {
  const ministriesData = [
    {
      title: "Women Ministries",
      description: "Meets 7pm to 5pm @ Fellowship hall",
      imageURL: "/images/hero/hero.png",
    },
    {
      title: "Men Ministries",
      description: "Meets 7pm to 5pm @ Fellowship hall",
      imageURL: "/images/hero/hero.png",
    },
    {
      title: "Kids Ministries",
      description: "Meets 7pm to 5pm @ Fellowship hall",
      imageURL: "/images/hero/hero.png",
    },
    {
      title: "Women Ministries",
      description: "Meets 7pm to 5pm @ Fellowship hall",
      imageURL: "/images/hero/hero.png",
    },
    {
      title: "Women Ministries",
      description: "Meets 7pm to 5pm @ Fellowship hall",
      imageURL: "/images/hero/hero.png",
    },
    {
      title: "Women Ministries",
      description: "Meets 7pm to 5pm @ Fellowship hall",
      imageURL: "/images/hero/hero.png",
    },
    // Add more ministry objects as needed
  ];

  return (
    <section className="yearly-gradient py-10">
      <SectionHeading heading="Our Ministries" />
      <div className="container my-20 flex flex-col items-center justify-between lg:flex-row">
        <h2 className="mb-4 w-full text-4xl font-semibold text-dark md:w-[80%] lg:mb-0 lg:mr-8 lg:w-[30ch]">
          God's house always has room for everyone.{" "}
          <span className="border-b-4 border-primary">
            Discover where you fit in best.
          </span>
        </h2>
        <p className="text-xl font-light lg:text-lg">
          Every believer was created to belong to a community. <br />
          It was never God’s heart for us to do this life alone.
        </p>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 grid-rows-[_repeat(3,_250px)] gap-4 rounded-lg md:grid-cols-3">
          {ministriesData.map((ministry, index) => (
            <div className={`row-span-${index === 0 ? 1 : 2}`} key={index}>
              <div
                className="h-[100%] overflow-hidden rounded bg-cover p-4 shadow-lg"
                style={{ backgroundImage: `url('${ministry.imageURL}')` }}
              >
                <div className="flex h-[100%] flex-col justify-between">
                  <div>
                    <h5 className="text-neutral-800  mb-2 text-xl font-medium leading-tight text-white">
                      {ministry.title}
                    </h5>
                    <p className="text-neutral-600  mb-4 text-base font-light  text-white">
                      {ministry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 flex justify-between">
          <p className="w-[50ch] font-light">
            Lorem ipsum dolor sit amet consectetur. Sapien montes turpis
            pellentesque quis mus. pellentesque a mus viverra sit.
          </p>
          <a href="/ministries">
            <button>View All</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
