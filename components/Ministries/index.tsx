"use client";
import SectionHeading from "../SectionHeading";
import { Button } from "@material-tailwind/react";
import MinistryCard from "./MinistryCard";

const Ministries = () => {
  return (
    <section className="yearly-gradient py-10">
      <SectionHeading heading="Our Ministries" />
      <div className="container my-20 flex w-full items-center justify-between">
        <h2 className="w-[30ch] text-4xl font-semibold text-dark">
          God's house always has room for everyone.{" "}
          <span className="border-b-4 border-primary">
            Discover where you fit in best.
          </span>
        </h2>
        <p className="text-xl font-light">
          Every believer was created to belong to a community. <br />
          It was never God’s heart for us to do this life alone.
        </p>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 grid-rows-[_repeat(3,_250px)] gap-4 rounded-lg md:grid-cols-3">
          {/* Top Row */}
          <div className="row-span-1">
            <MinistryCard
              title="Women Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/hero/hero.png"
            />
          </div>
          <div className="row-span-2 ">
            <MinistryCard
              title="Kids Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/hero/hero.png"
            />
          </div>
          <div className="row-span-1 ">
            <MinistryCard
              title="Youth Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/hero/hero.png"
            />
          </div>
          {/* Bottom Row */}
          <div className="row-span-2 ">
            <MinistryCard
              title="Golden Agers"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/hero/hero.png"
            />
          </div>
          <div className="row-span-2 ">
            <MinistryCard
              title="Royal Rangers"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/hero/hero.png"
            />
          </div>
          <div className="col-span-2 row-span-1 md:col-span-1 ">
            <MinistryCard
              title="Girl's Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/hero/hero.png"
            />
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
