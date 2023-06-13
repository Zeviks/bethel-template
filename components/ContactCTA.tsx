import React from "react";
import { Button } from "@material-tailwind/react";

const ContactCTA = () => {
  return (
    <div className="my-10 flex flex-col md:flex-row md:justify-between">
      <p className="w-full font-light md:mr-6 md:w-[50ch]">
        Lorem ipsum dolor sit amet consectetur. Sapien montes turpis
        pellentesque quis mus. pellentesque a mus viverra sit.
      </p>
      <a href="/ministries">
        <Button variant="outlined">View All</Button>
      </a>
    </div>
  );
};

export default ContactCTA;
