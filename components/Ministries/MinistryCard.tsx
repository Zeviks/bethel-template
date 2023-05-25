"use client";
import Image from "next/image";
import { useState } from "react";

const MinistryCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="h-[100%] overflow-hidden rounded bg-cover p-4 shadow-lg"
      style={{ backgroundImage: "url('/images/hero/hero.png')" }}
    >
      <div className="flex h-[100%] flex-col  justify-between">
        <div>
          <h5 className="text-neutral-800  mb-2 text-xl font-medium leading-tight text-white">
            Women Ministries
          </h5>
          <p className="text-neutral-600  mb-4 text-base font-light  text-white">
            Meets 7pm to 5pm @ Fellowship hall
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinistryCard;
