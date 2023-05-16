"use client";

import Image from "next/image";
import { useState } from "react";

const YearlyTheme = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className=" h-fit w-full bg-primary">
        <Image src="/images/gradient-blue.png" alt="section gradient" fill />
        <div className="flex justify-between">
          <div className="container z-[999] flex w-[658px] flex-col justify-center">
            <span className="mb-2 text-sm font-light">This Year's Theme</span>
            <h2 className="w-full text-5xl font-medium">
              Let us love one another as <br />
              He has loved us.
            </h2>
          </div>

          <div className="relative bottom-12 z-[999] flex h-[450px] w-[770px] flex-col justify-between rounded bg-dark p-12">
            <span className="bg-red-300 z-[999] mt-2 w-fit rounded-full bg-primary py-2.5 px-9 text-dark">
              2023
            </span>
            <p className="pl-6 text-4xl font-bold text-white">
              “{" "}
              <span className=" font-light leading-3">
                Beloved, let us love one another, because love is from God;
                everyone who loves is born of God and knows God. Whoever does
                not love does not know God, for God is love.
              </span>{" "}
              ”
            </p>
            <span className="text-xl font-bold text-white">1 John 4:7-21</span>
            <Image src="/images/shadow-15.png" alt="section gradient" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyTheme;
