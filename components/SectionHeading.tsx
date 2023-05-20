import React from "react";

const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="container">
      <span className="border-b-2 border-primary">{heading}</span>
    </div>
  );
};

export default SectionHeading;
