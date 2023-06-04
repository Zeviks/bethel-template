"use client";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { Button } from "@material-tailwind/react";
import MinistryCard from "./MinistryCard";

const Ministries = () => {
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
          {/* Top Row */}
          <div className="row-span-1">
            <MinistryCard />
          </div>
          <div className="row-span-2 ">
            <MinistryCard />
          </div>
          <div className="row-span-1 ">
            <MinistryCard />
          </div>
          {/* Bottom Row */}
          <div className="row-span-2 ">
            <MinistryCard />
          </div>
          <div className="row-span-2 ">
            <MinistryCard />
          </div>
          <div className="row-span-1 ">
            <MinistryCard />
          </div>
        </div>

        <div className="my-10 flex justify-between">
          <p className="w-[50ch] font-light">
            Lorem ipsum dolor sit amet consectetur. Sapien montes turpis
            pellentesque quis mus. pellentesque a mus viverra sit.
          </p>
          <a href="/ministries">
            <Button variant="outlined">View All</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
