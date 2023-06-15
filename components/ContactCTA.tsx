import React from "react";
import { Button } from "@material-tailwind/react";

const ContactCTA = () => {
  return (
    <div className="my-10 flex w-full items-center md:flex-row md:justify-end">
      <p className="w-fit font-light md:mr-4">
        Feel free to reach out to us during office hours.
      </p>
      <a href="/ministries">
        <Button variant="outlined" className="text-dark">
          Contact Us
        </Button>
      </a>
    </div>
  );
};

export default ContactCTA;
