"use client";
import { Button } from "@material-tailwind/react";
import MinistryCard from "./MinistryCard";

const Ministries = () => {
  return (
    <section className="yearly-gradient ">
      <div className="container flex w-full flex-col items-center justify-between py-10 sm:flex-row">
        <h2 className="w-full text-center text-3xl font-semibold text-dark sm:w-[30ch] sm:text-left sm:text-4xl">
          Our Ministries
        </h2>
        <p className="mt-4 text-center text-base font-light sm:mt-0 sm:text-left sm:text-xl">
          God's house always has room for everyone. <br />
          <span className="font-semibold">Discover where you fit in best.</span>
        </p>
      </div>

      <div className="container pb-5">
        <div className="grid grid-cols-2 grid-rows-[_repeat(3,_250px)] gap-4 rounded-lg md:grid-cols-3">
          {/* Top Row */}
          <div className="row-span-1">
            <MinistryCard
              title="Women Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/womens.webp"
            />
          </div>
          <div className="row-span-2 ">
            <MinistryCard
              title="Kids Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/kids.webp"
            />
          </div>
          <div className="row-span-1">
            <MinistryCard
              title="Youth Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/youth.webp"
            />
          </div>
          {/* Bottom Row */}
          <div className="row-span-2 ">
            <MinistryCard
              title="Golden Agers"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/golden.webp"
            />
          </div>
          <div className="row-span-2 ">
            <MinistryCard
              title="Royal Rangers"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/royal.webp"
            />
          </div>
          <div className="col-span-2 row-span-1 md:col-span-1 ">
            <MinistryCard
              title="Girl's Ministries"
              description="Meets 7pm to 5pm @ Fellowship hall"
              imageURL="/images/pre-final/girls.webp"
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
