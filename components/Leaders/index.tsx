"use client";

import SectionHeading from "../SectionHeading";
import LeaderCard from "./LeaderCard";

export default function Leaders() {
  return (
    <section className="py-10">
      <SectionHeading heading="Our Leaders" />

      <div className="container my-20 flex w-full flex-col items-center justify-between">
        <h2 className="w-[30ch] text-center text-5xl font-semibold text-dark">
          Meet our leaders
        </h2>
        <p className="w-[50ch] pt-3 text-center text-xl font-light leading-tight">
          Every believer was created to belong to a community. It was never
          God’s heart for us to do this life alone.
        </p>

        <div className="container pt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
            <div className="w-full">
              <LeaderCard />
            </div>
            <div className="w-full">
              <LeaderCard />
            </div>
            <div className="w-full">
              <LeaderCard />
            </div>
            <div className="w-full">
              <LeaderCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
