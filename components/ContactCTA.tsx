import React from "react";
import { Button } from "@material-tailwind/react";

const ContactCTA = () => {
  return (
    <div className="my-10 flex justify-between">
      <p className="w-[50ch] font-light">
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
