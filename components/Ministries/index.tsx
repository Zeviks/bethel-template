import Image from "next/image";
import SectionHeading from "../SectionHeading";
import MinistryCard from "./MinistryCard";

const Ministries = () => {
  return (
    <section className="">
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

      <div className="container grid grid-cols-2 grid-rows-[_repeat(3,_250px)] gap-4 border border-black md:grid-cols-3">
        {/* Top Row */}
        <div className="row-span-1">
          <MinistryCard />
        </div>
        <div className="row-span-2 bg-black"></div>
        <div className="row-span-1 bg-black"></div>
        {/* Bottom Row */}
        <div className="row-span-2 bg-primary"></div>
        <div className="row-span-2 bg-primary"></div>
        <div className="row-span-1 bg-primary"></div>
      </div>
    </section>
  );
};

export default Ministries;
